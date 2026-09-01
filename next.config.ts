import type { NextConfig } from 'next';

const isGitHubPages = process.env.GITHUB_PAGES === 'true';
const githubPagesBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '/Prompt-Hub';

const nextConfig: NextConfig = {
  output: isGitHubPages ? 'export' : undefined,
  // vinext currently cannot prerender dynamic App Router routes when basePath
  // is set, so GitHub Pages assets use the repository prefix while route
  // links are adjusted after export.
  basePath: '',
  assetPrefix: isGitHubPages ? githubPagesBasePath : '',
  trailingSlash: false,
  images: { unoptimized: true },
};

export default nextConfig;
