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
        title="提示词多备点，临时抱佛脚也专业点。"
        description="覆盖开发、产品、创业、管理、营销、销售、客服、招聘、设计与研究。每条都写清输入资料、执行步骤、输出标准和防胡编要求。"
      />
      <section className="mx-auto max-w-[1440px] px-5 py-10 lg:px-10 lg:py-14">
        <PromptLibrary />
      </section>
      <SiteFooter />
    </main>
  );
}
