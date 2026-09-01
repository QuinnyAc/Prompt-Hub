import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

const projectRoot = process.cwd();
const outputPath = path.join(projectRoot, 'data', 'intelligence.json');
const arenaUrl =
  'https://raw.githubusercontent.com/lmarena/arena-catalog/main/data/leaderboard-text.json';
const artificialAnalysisUrl =
  'https://artificialanalysis.ai/api/v2/language/models/free';

const overseasModelPattern =
  /^(claude|gpt|chatgpt|o[134](?:-|$)|gemini|grok|mistral|ministral|pixtral|llama|meta-|command|amazon|nova|nemotron|jamba)/i;

async function fetchJson(url, options = {}) {
  const response = await fetch(url, {
    ...options,
    headers: {
      'user-agent':
        'Prompt-Hub-Intelligence/1.0 (+https://github.com/QuinnyAc/Prompt-Hub)',
      ...options.headers,
    },
    signal: AbortSignal.timeout(30_000),
  });
  if (!response.ok) throw new Error(`${url} returned HTTP ${response.status}`);
  return response.json();
}

function findIntelligenceScore(evaluations) {
  if (!evaluations || typeof evaluations !== 'object') return null;
  const entry = Object.entries(evaluations).find(
    ([key, value]) =>
      key.includes('intelligence_index') && typeof value === 'number',
  );
  return entry?.[1] ?? null;
}

function stablePayload(data) {
  return JSON.stringify({ ...data, generatedAt: undefined });
}

const previous = JSON.parse(await readFile(outputPath, 'utf8'));
const arenaData = await fetchJson(arenaUrl);
const english = arenaData.english;
if (!english || typeof english !== 'object')
  throw new Error('LMArena public data is missing the english category');

const arenaModels = Object.entries(english)
  .filter(
    ([name, result]) =>
      overseasModelPattern.test(name) && Number.isFinite(result?.rating),
  )
  .map(([name, result]) => ({
    name,
    score: Math.round(result.rating * 10) / 10,
    lowerBound: Math.round(result.rating_q025 * 10) / 10,
    upperBound: Math.round(result.rating_q975 * 10) / 10,
  }))
  .sort((a, b) => b.score - a.score)
  .slice(0, 30)
  .map((model, index) => ({ rank: index + 1, ...model }));

let artificialAnalysis = previous.sources.artificialAnalysis;
const apiKey = process.env.ARTIFICIAL_ANALYSIS_API_KEY;
if (apiKey) {
  const response = await fetchJson(artificialAnalysisUrl, {
    headers: { 'x-api-key': apiKey },
  });
  const models = Array.isArray(response.data) ? response.data : [];
  artificialAnalysis = {
    name: 'Artificial Analysis',
    url: 'https://artificialanalysis.ai/leaderboards/models',
    mode: 'official-api',
    models: models
      .map((model) => ({
        name: model.name,
        maker: model.model_creator?.name ?? 'Unknown',
        score: findIntelligenceScore(model.evaluations),
        inputPrice: model.pricing?.price_1m_input_tokens ?? null,
        outputPrice: model.pricing?.price_1m_output_tokens ?? null,
        speed: model.performance?.median_output_tokens_per_second ?? null,
      }))
      .filter(
        (model) =>
          overseasModelPattern.test(model.name) && Number.isFinite(model.score),
      )
      .sort((a, b) => b.score - a.score)
      .slice(0, 30)
      .map((model, index) => ({ rank: index + 1, ...model })),
  };
}

const next = {
  version: 1,
  generatedAt: new Date().toISOString(),
  sources: {
    artificialAnalysis,
    lmarena: {
      name: 'LMArena',
      url: arenaUrl,
      mode: 'official-public-data',
      category: 'english',
      models: arenaModels,
    },
  },
};

if (stablePayload(previous) === stablePayload(next)) {
  console.log('Intelligence data is already current.');
} else {
  await writeFile(outputPath, `${JSON.stringify(next, null, 2)}\n`);
  console.log(
    `Updated ${outputPath} with ${arenaModels.length} LMArena models.`,
  );
}
