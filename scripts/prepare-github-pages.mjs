import { copyFile, mkdir, readdir, rename } from 'node:fs/promises';
import path from 'node:path';

const outputDirectory = path.resolve('dist/client');
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '/Prompt-Hub';
const prefixedAssetDirectory = path.join(
  outputDirectory,
  basePath.replace(/^\/+/, ''),
  '_next',
);
const rootAssetDirectory = path.join(outputDirectory, '_next');

await rename(prefixedAssetDirectory, rootAssetDirectory);

async function collectHtmlFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await collectHtmlFiles(fullPath)));
    } else if (entry.name.endsWith('.html')) {
      files.push(fullPath);
    }
  }

  return files;
}

const htmlFiles = await collectHtmlFiles(outputDirectory);
let copiedPages = 0;

for (const sourcePath of htmlFiles) {
  const relativePath = path.relative(outputDirectory, sourcePath);
  if (relativePath === 'index.html' || relativePath === '404.html') continue;

  const routeDirectory = path.join(
    outputDirectory,
    relativePath.replace(/\.html$/, ''),
  );
  await mkdir(routeDirectory, { recursive: true });
  await copyFile(sourcePath, path.join(routeDirectory, 'index.html'));
  copiedPages += 1;
}

console.log(`Prepared assets and ${copiedPages} clean GitHub Pages routes.`);
