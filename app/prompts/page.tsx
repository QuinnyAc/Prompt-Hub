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
        title="奴隶少加点班，Prompt 多干点活。"
        description="每个 Prompt 都解释适用模型、输入资料、质量标准和失败处理。毕竟农场主只看结果，不看你和模型聊了多少轮。"
      />
      <section className="mx-auto max-w-[1440px] px-5 py-10 lg:px-10 lg:py-14">
        <PromptLibrary />
      </section>
      <SiteFooter />
    </main>
  );
}
