import type { AnchorHTMLAttributes } from 'react';

type SiteLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> & {
  href: string;
};

function withSiteBasePath(href: string) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
  if (!basePath || !href.startsWith('/')) return href;

  const separatorIndex = href.search(/[?#]/);
  const pathname = separatorIndex === -1 ? href : href.slice(0, separatorIndex);
  const suffix = separatorIndex === -1 ? '' : href.slice(separatorIndex);

  if (pathname === '/') return `${basePath}/${suffix}`;
  return `${basePath}${pathname.replace(/\/$/, '')}/${suffix}`;
}

export function SiteLink({ href, children, ...props }: SiteLinkProps) {
  return (
    <a href={withSiteBasePath(href)} {...props}>
      {children}
    </a>
  );
}
