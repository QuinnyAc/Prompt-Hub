import type { ReactNode } from 'react';
import { GitCompareArrows, Menu, Sparkles } from 'lucide-react';
import Link from 'next/link';

import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const nav = [
  ['模型排名', '/models'],
  ['Prompt 库', '/prompts'],
  ['职业方案', '/roles'],
  ['实战工作流', '/workflows'],
  ['更新中心', '/updates'],
  ['评测方法', '/methodology'],
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#e8ebf2] bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-5 lg:px-10">
        <Link
          href="/"
          className="flex items-center gap-3"
          aria-label="Prompt Hub 首页"
        >
          <span className="grid size-9 place-items-center rounded-xl bg-[#1746d1] text-white shadow-[0_8px_22px_rgba(23,70,209,0.24)]">
            <Sparkles className="size-[18px]" />
          </span>
          <span>
            <strong className="block text-[15px] leading-4 tracking-[-0.02em]">
              Prompt Hub
            </strong>
            <span className="text-[10px] font-medium tracking-[0.08em] text-[#7b8499]">
              老板逼我做的
            </span>
          </span>
        </Link>

        <nav
          className="hidden items-center gap-6 text-[13px] font-medium text-[#596176] lg:flex"
          aria-label="主导航"
        >
          {nav.map(([label, href]) => (
            <Link
              key={href}
              className="transition-colors hover:text-[#1746d1]"
              href={href}
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/compare"
            className={cn(
              buttonVariants({ variant: 'outline' }),
              'hidden h-9 rounded-xl border-[#dfe3ed] px-4 sm:inline-flex',
            )}
          >
            <GitCompareArrows /> 模型对比
          </Link>
          <details className="group relative lg:hidden">
            <summary
              className="grid size-9 cursor-pointer list-none place-items-center rounded-lg hover:bg-[#f3f5f9]"
              aria-label="打开导航菜单"
            >
              <Menu className="size-5" />
            </summary>
            <nav
              className="absolute right-0 top-11 w-52 rounded-2xl border border-[#dfe4ed] bg-white p-2 shadow-xl"
              aria-label="移动端导航"
            >
              {nav.map(([label, href]) => (
                <Link
                  key={href}
                  href={href}
                  className="block rounded-xl px-3 py-2.5 text-sm text-[#4c566c] hover:bg-[#f2f5fb] hover:text-[#1746d1]"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-[#e5e9f1] bg-white">
      <div className="mx-auto grid max-w-[1440px] gap-8 px-5 py-10 sm:grid-cols-[1fr_auto] lg:px-10">
        <div>
          <div className="flex items-center gap-2">
            <Sparkles className="size-4 text-[#1746d1]" />
            <strong className="text-sm text-[#263047]">Prompt Hub</strong>
            <span className="text-xs text-[#7b8499]">· 农场主逼我做的</span>
          </div>
          <p className="mt-3 max-w-md text-xs leading-5 text-[#7b8499]">
            数据与建议仅供决策参考，请以模型官方信息为准。
          </p>
        </div>
        <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs text-[#697287]">
          <Link href="/methodology">评测方法</Link>
          <Link href="/updates">更新日志</Link>
          <a href="https://github.com/QuinnyAc/Prompt-Hub">GitHub</a>
        </div>
      </div>
    </footer>
  );
}

export function PageHero({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: string;
  description: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-[#e8ecf3] bg-white">
      <div className="pointer-events-none absolute left-1/2 top-[-460px] size-[720px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(41,84,205,0.12),rgba(255,255,255,0)_70%)]" />
      <div className="relative mx-auto max-w-[1440px] px-5 py-14 lg:px-10 lg:py-20">
        <p className="mb-4 text-xs font-semibold tracking-[0.16em] text-[#1746d1]">
          {eyebrow}
        </p>
        <h1 className="max-w-4xl text-4xl font-semibold tracking-[-0.055em] text-[#111827] sm:text-6xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-7 text-[#697287]">
          {description}
        </p>
        {children && <div className="mt-7">{children}</div>}
      </div>
    </section>
  );
}
