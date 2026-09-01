import type { Metadata } from 'next';
import {
  ArrowUpRight,
  CheckCircle2,
  Clock3,
  GitBranch,
  Radio,
} from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { SiteLink as Link } from '@/components/site-link';
import { PageHero, SiteFooter, SiteHeader } from '@/components/site-shell';
import { updates } from '@/lib/site-data';

export const metadata: Metadata = {
  title: '模型又变了｜Prompt Hub',
  description:
    '持续追踪全球 AI 模型发布、排名、价格、API、Prompt 和专业工作流变化。',
};

export default function UpdatesPage() {
  return (
    <main className="min-h-screen bg-[#f7f9fc]">
      <SiteHeader />
      <PageHero
        eyebrow="LIVE INTELLIGENCE"
        title="模型更新得太快，只能一直盯着。"
        description="谁发新模型、谁涨价、谁排名变了，都在这里留个底。以后农场主问起来，至少能翻记录。"
      >
        <div className="flex items-center gap-2 text-xs font-medium text-[#15966a]">
          <Radio className="size-4" />
          情报管线运行正常 · 最近检查 8 分钟前
        </div>
      </PageHero>
      <section className="mx-auto grid max-w-[1440px] gap-8 px-5 py-12 lg:grid-cols-[minmax(0,1fr)_340px] lg:px-10 lg:py-16">
        <div className="overflow-hidden rounded-3xl border border-[#dfe4ed] bg-white">
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
                <h2 className="font-semibold text-[#263047]">{update.title}</h2>
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

        <aside className="space-y-4">
          <div className="rounded-3xl bg-[#101a34] p-6 text-white">
            <GitBranch className="size-5 text-[#87a8ff]" />
            <h2 className="mt-7 text-xl font-semibold">
              什么能直接发，什么得先过人眼
            </h2>
            <p className="mt-2 text-sm leading-6 text-[#aab4cb]">
              A
              级结构化来源自动更新；官方公告生成待核验草稿；传闻只进入观察列表。
            </p>
            <Link
              href="/methodology"
              className="mt-5 inline-flex items-center gap-1 text-xs font-semibold text-[#a9c2ff]"
            >
              查看完整规则 <ArrowUpRight className="size-3.5" />
            </Link>
          </div>
          <div className="rounded-3xl border border-[#dfe4ed] bg-white p-6">
            <Clock3 className="size-5 text-[#1746d1]" />
            <h2 className="mt-5 font-semibold">隔多久看一眼</h2>
            <dl className="mt-4 space-y-3 text-xs">
              <div className="flex justify-between">
                <dt className="text-[#7c8598]">官方公告</dt>
                <dd className="font-medium">30 分钟</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-[#7c8598]">排行榜</dt>
                <dd className="font-medium">3 小时</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-[#7c8598]">内容候选</dt>
                <dd className="font-medium">每日</dd>
              </div>
            </dl>
          </div>
        </aside>
      </section>
      <SiteFooter />
    </main>
  );
}
