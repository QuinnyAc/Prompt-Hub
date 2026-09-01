import { readFile } from 'node:fs/promises';

const data = JSON.parse(
  await readFile(new URL('../data/intelligence.json', import.meta.url), 'utf8'),
);

if (data.version !== 1)
  throw new Error('Unsupported intelligence data version');
if (!data.sources || typeof data.sources !== 'object')
  throw new Error('Missing intelligence sources');

for (const [sourceKey, source] of Object.entries(data.sources)) {
  if (!source.url?.startsWith('https://'))
    throw new Error(`${sourceKey} must use an HTTPS source URL`);
  if (!Array.isArray(source.models))
    throw new Error(`${sourceKey} models must be an array`);
  const names = new Set();
  for (const model of source.models) {
    if (!model.name || names.has(model.name))
      throw new Error(`${sourceKey} has a missing or duplicate model name`);
    names.add(model.name);
    if (!Number.isFinite(model.rank) || !Number.isFinite(model.score))
      throw new Error(`${sourceKey}/${model.name} has invalid rank or score`);
  }
}

console.log('Intelligence data passed validation.');
