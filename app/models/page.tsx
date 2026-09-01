import type { Metadata } from 'next';

import { ModelsExplorer } from '@/components/models-explorer';
import { PageHero, SiteFooter, SiteHeader } from '@/components/site-shell';
import intelligence from '@/data/intelligence.json';

export const metadata: Metadata = {
  title: 'AI 模型谁能打｜Prompt Hub',
  description: '按能力、任务、成本、速度和部署方式比较全球主流海外 AI 模型。',
};

export default function ModelsPage() {
  return (
    <main className="min-h-screen bg-[#f7f9fc]">
      <SiteHeader />
      <PageHero
        eyebrow="MODEL INTELLIGENCE"
        title="模型这么多，先看看谁真能干活。"
        description="把独立评测、人类偏好、价格和速度摊开来看。没有永远的第一名，只有这次更适合替你干活的模型。"
      >
        <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs text-[#6f788c]">
          <span>
            <strong className="text-[#263047]">更新时间</strong>{' '}
            {new Date(intelligence.generatedAt).toLocaleDateString('zh-CN')}
          </span>
          <span>
            <strong className="text-[#263047]">数据源</strong> 5 个权威来源
          </span>
          <span>
            <strong className="text-[#263047]">自动快照</strong>{' '}
            {intelligence.sources.lmarena.models.length +
              intelligence.sources.artificialAnalysis.models.length}{' '}
            条记录
          </span>
          <span>
            <strong className="text-[#263047]">覆盖</strong> 海外模型优先
          </span>
        </div>
      </PageHero>
      <section className="mx-auto max-w-[1440px] px-5 py-10 lg:px-10 lg:py-14">
        <ModelsExplorer />
      </section>
      <SiteFooter />
    </main>
  );
}
