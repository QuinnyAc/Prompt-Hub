import type { Metadata } from 'next';
import { ArrowRight, BriefcaseBusiness, CheckCircle2 } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { PageHero, SiteFooter, SiteHeader } from '@/components/site-shell';
import { roles } from '@/lib/site-data';

export const metadata: Metadata = {
  title: '给各工种奴隶的 AI 农具｜Prompt Hub',
  description:
    '面向程序员、创业者、产品、运营、研究、销售和数据分析师的 AI 实战方案。',
};

export default function RolesPage() {
  return (
    <main className="min-h-screen bg-[#f7f9fc]">
      <SiteHeader />
      <PageHero
        eyebrow="ROLE PLAYBOOKS"
        title="给不同工种的奴隶，配不同的 AI 农具。"
        description="先找最值得偷懒的任务，再选择模型、Prompt、人工审核点和向农场主汇报收益的方法。"
      />
      <section className="mx-auto max-w-[1440px] px-5 py-12 lg:px-10 lg:py-16">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {roles.map((role, index) => (
            <article
              key={role.slug}
              className="group flex min-h-[330px] flex-col rounded-3xl border border-[#e0e4ed] bg-white p-6 transition hover:-translate-y-1 hover:border-[#bccaf0] hover:shadow-[0_20px_48px_rgba(28,45,91,0.09)]"
            >
              <div className="flex items-start justify-between">
                <span
                  className={`grid size-11 place-items-center rounded-2xl ${index === 0 ? 'bg-[#1746d1] text-white' : 'bg-[#eef2f8] text-[#4a566d]'}`}
                >
                  <BriefcaseBusiness className="size-5" />
                </span>
                <Badge variant="outline">
                  方案 {String(index + 1).padStart(2, '0')}
                </Badge>
              </div>
              <h2 className="mt-7 text-xl font-semibold tracking-[-0.035em]">
                {role.name}
              </h2>
              <p className="mt-2 text-sm leading-6 text-[#747d90]">
                {role.summary}
              </p>
              <ul className="mt-5 space-y-2">
                {role.tasks.map((task) => (
                  <li
                    key={task}
                    className="flex items-center gap-2 text-xs text-[#5e687d]"
                  >
                    <CheckCircle2 className="size-3.5 text-[#15966a]" />
                    {task}
                  </li>
                ))}
              </ul>
              <div className="mt-auto border-t border-[#edf0f5] pt-5">
                <p className="text-[10px] font-semibold tracking-[0.08em] text-[#8a92a3]">
                  推荐模型栈
                </p>
                <div className="mt-1 flex items-center justify-between gap-3">
                  <span className="text-xs font-medium text-[#364157]">
                    {role.stack}
                  </span>
                  <ArrowRight className="size-4 text-[#1746d1]" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
