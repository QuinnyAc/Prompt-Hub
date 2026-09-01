import type { Metadata } from 'next';
import { ArrowRight, Clock3, Layers3, Target } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { PageHero, SiteFooter, SiteHeader } from '@/components/site-shell';
import { workflows } from '@/lib/site-data';

export const metadata: Metadata = {
  title: 'AI 干活，奴隶签字｜Prompt Hub',
  description:
    '从目标到交付物的专业 AI 工作流，明确步骤、模型、人工审核和质量标准。',
};

export default function WorkflowsPage() {
  return (
    <main className="min-h-screen bg-[#f7f9fc]">
      <SiteHeader />
      <PageHero
        eyebrow="AI WORKFLOWS"
        title="让 AI 流程化干活，奴隶负责最后签字。"
        description="每条工作流都明确输入、步骤、推荐模型、审核节点和最终交付物，方便奴隶交差，也方便农场主验收。"
      />
      <section className="mx-auto max-w-[1440px] px-5 py-12 lg:px-10 lg:py-16">
        <div className="grid gap-5 lg:grid-cols-2">
          {workflows.map((workflow, cardIndex) => (
            <article
              key={workflow.slug}
              className="rounded-3xl border border-[#dfe4ed] bg-white p-6 sm:p-7"
            >
              <div className="flex items-start justify-between gap-4">
                <Badge
                  className={
                    cardIndex === 0
                      ? 'bg-[#1746d1]'
                      : 'bg-[#eef3ff] text-[#315dca]'
                  }
                >
                  {workflow.role}
                </Badge>
                <span className="font-mono text-xs text-[#9aa2b1]">
                  0{cardIndex + 1}
                </span>
              </div>
              <h2 className="mt-6 text-2xl font-semibold tracking-[-0.04em]">
                {workflow.title}
              </h2>
              <div className="mt-4 flex flex-wrap gap-4 text-xs text-[#727b8e]">
                <span className="flex items-center gap-1.5">
                  <Clock3 className="size-3.5" />
                  {workflow.duration}
                </span>
                <span className="flex items-center gap-1.5">
                  <Layers3 className="size-3.5" />
                  {workflow.tools}
                </span>
              </div>
              <ol className="mt-7 grid gap-2 sm:grid-cols-5">
                {workflow.steps.map((step, index) => (
                  <li
                    key={step}
                    className="relative rounded-xl bg-[#f5f7fb] p-3 text-[11px] leading-4 text-[#586278]"
                  >
                    <span className="mb-2 block font-mono text-[10px] font-semibold text-[#1746d1]">
                      {index + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
              <div className="mt-6 flex items-center justify-between gap-4 border-t border-[#e9ecf2] pt-5">
                <div className="flex items-start gap-2 text-xs text-[#616b80]">
                  <Target className="mt-0.5 size-4 shrink-0 text-[#15966a]" />
                  <span>
                    <strong className="block text-[#303a51]">最终交付</strong>
                    {workflow.outcome}
                  </span>
                </div>
                <ArrowRight className="size-5 shrink-0 text-[#1746d1]" />
              </div>
            </article>
          ))}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
