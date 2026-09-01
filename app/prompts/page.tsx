import type { Metadata } from 'next';

import { PromptLibrary } from '@/components/prompt-library';
import { PageHero, SiteFooter, SiteHeader } from '@/components/site-shell';

export const metadata: Metadata = {
  title: '能直接交差的 Prompt｜Prompt Hub',
  description:
    '按职业与任务设计的专业 Prompt，包含推荐模型、输入要求、输出标准和质量控制。',
};

export default function PromptsPage() {
  return (
    <main className="min-h-screen bg-[#f7f9fc]">
      <SiteHeader />
      <PageHero
        eyebrow="PROMPT PLAYBOOK"
        title="老板逼我做的"
        description="覆盖技术、经营、财务、法务、运营、教育、医疗信息、安全、供应链、制造等领域，并按顶级专家角色分类。每条都写清输入、步骤、标准和风险边界。"
      />
      <section className="mx-auto max-w-[1440px] px-5 py-10 lg:px-10 lg:py-14">
        <PromptLibrary />
      </section>
      <SiteFooter />
    </main>
  );
}
