import type { Metadata } from 'next';
import { ArrowUpRight, CheckCircle2, Radio } from 'lucide-react';

import { ModelsExplorer } from '@/components/models-explorer';
import { PageHero, SiteFooter, SiteHeader } from '@/components/site-shell';
import { Badge } from '@/components/ui/badge';
import intelligence from '@/data/intelligence.json';
import { updates } from '@/lib/site-data';

export const metadata: Metadata = {
  title: '模型动态｜Prompt Hub',
  description:
    '在一个模块查看全球主流海外 AI 模型排名、价格、能力变化与更新记录。',
};

export default function ModelsPage() {
  return (
    <main className="min-h-screen bg-[#f7f9fc]">
      <SiteHeader />
      <PageHero
        eyebrow="MODEL INTELLIGENCE"
        title="模型排名和更新"
        description="上面看谁更能打，下面看谁刚变了。独立评测、人类偏好、价格、速度与重要更新统一放在“模型动态”。"
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
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold tracking-[0.14em] text-[#1746d1]">
              模型排名
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-[#202a40]">
              先按任务挑模型，别迷信一个总榜
            </h2>
          </div>
        </div>
        <ModelsExplorer />
      </section>
      <section
        id="updates"
        className="border-t border-[#e5e9f1] bg-white"
      >
        <div className="mx-auto max-w-[1440px] px-5 py-12 lg:px-10 lg:py-16">
          <div className="mb-7 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-semibold tracking-[0.14em] text-[#1746d1]">
                更新中心
              </p>
              <h2 className="mt-2 text-3xl font-semibold tracking-[-0.045em] text-[#202a40]">
                谁升级、谁涨价、谁掉队，都留个记录
              </h2>
            </div>
            <div className="flex items-center gap-2 text-xs font-medium text-[#15966a]">
              <Radio className="size-4" /> 情报持续更新
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border border-[#dfe4ed] bg-[#fbfcff]">
            {updates.map((update, index) => (
              <article
                key={`${update.date}-${update.title}`}
                className="grid gap-4 border-b border-[#e8ebf1] p-5 last:border-0 sm:grid-cols-[100px_1fr_auto] sm:p-6"
              >
                <div>
                  <span className="font-mono text-xs text-[#8a92a3]">
                    {update.date}
                  </span>
                  <Badge
                    variant="secondary"
                    className="mt-2 block w-fit bg-[#eef3ff] text-[#315dca]"
                  >
                    {update.type}
                  </Badge>
                </div>
                <div>
                  <h3 className="font-semibold text-[#263047]">
                    {update.title}
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-[#737c8f]">
                    {update.detail}
                  </p>
                </div>
                <div className="flex items-center gap-2 text-[10px] text-[#6f788a]">
                  <CheckCircle2 className="size-3.5 text-[#15966a]" />
                  {update.level}
                  {index === 0 && <ArrowUpRight className="size-3.5" />}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
