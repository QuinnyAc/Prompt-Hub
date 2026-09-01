import type { Metadata } from 'next';
import {
  AlertTriangle,
  DatabaseZap,
  ExternalLink,
  Scale,
  ShieldCheck,
} from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { PageHero, SiteFooter, SiteHeader } from '@/components/site-shell';
import { rankingSources } from '@/lib/site-data';

export const metadata: Metadata = {
  title: '榜单不是拍脑袋｜Prompt Hub',
  description: '了解 Prompt Hub 的模型评分权重、数据来源、核验机制与排名局限。',
};

const weights = [
  ['基础能力评测', 35],
  ['真实用户偏好', 20],
  ['专业任务实测', 20],
  ['价格与性价比', 10],
  ['速度与延迟', 5],
  ['稳定性', 5],
  ['隐私与商业适用性', 5],
];

export default function MethodologyPage() {
  return (
    <main className="min-h-screen bg-[#f7f9fc]">
      <SiteHeader />
      <PageHero
        eyebrow="OPEN METHODOLOGY"
        title="排名不是拍脑袋，分数得说得明白。"
        description="单一榜单不是真理。每个排名都得交代来源、权重、更新时间和哪里可能不靠谱。"
      />
      <section className="mx-auto max-w-[1440px] px-5 py-12 lg:px-10 lg:py-16">
        <div className="grid gap-6 lg:grid-cols-2">
          <article className="rounded-3xl border border-[#dfe4ed] bg-white p-6 sm:p-8">
            <div className="flex items-center gap-2 text-sm font-semibold text-[#1746d1]">
              <Scale className="size-5" />
              这个总分是怎么凑出来的
            </div>
            <p className="mt-3 text-sm leading-6 text-[#737c8f]">
              默认权重用于概览；程序员、研究和企业场景会切换为对应任务权重。
            </p>
            <div className="mt-7 space-y-4">
              {weights.map(([label, value]) => (
                <div key={label as string}>
                  <div className="mb-1.5 flex justify-between text-xs">
                    <span className="font-medium text-[#4e586e]">{label}</span>
                    <strong>{value}%</strong>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-[#edf0f5]">
                    <div
                      className="h-full rounded-full bg-[#1746d1]"
                      style={{ width: `${value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-3xl border border-[#dfe4ed] bg-[#101a34] p-6 text-white sm:p-8">
            <ShieldCheck className="size-6 text-[#87a8ff]" />
            <h2 className="mt-7 text-2xl font-semibold tracking-[-0.04em]">
              消息靠不靠谱，先分三档
            </h2>
            <div className="mt-6 space-y-4">
              {[
                ['A', '可自动发布', '官方 API、结构化榜单和可复现数据。'],
                ['B', '核验后发布', '官方公告，但字段或上下文不完整。'],
                ['C', '仅供观察', '社交媒体、媒体爆料及无法交叉验证的信息。'],
              ].map(([grade, title, text]) => (
                <div
                  key={grade}
                  className="grid grid-cols-[32px_1fr] gap-3 border-b border-white/10 pb-4 last:border-0"
                >
                  <span className="grid size-8 place-items-center rounded-full bg-white/10 text-xs font-semibold text-[#a9c2ff]">
                    {grade}
                  </span>
                  <div>
                    <strong className="text-sm">{title}</strong>
                    <p className="mt-1 text-xs leading-5 text-[#aab4cb]">
                      {text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </article>
        </div>

        <div className="mt-10">
          <div className="mb-5 flex items-center gap-2">
            <DatabaseZap className="size-5 text-[#1746d1]" />
            <h2 className="text-xl font-semibold">
              榜单不是我编的，数据从这来
            </h2>
          </div>
          <div className="overflow-hidden rounded-3xl border border-[#dfe4ed] bg-white">
            {rankingSources.map((source) => (
              <a
                key={source.name}
                href={source.url}
                className="grid gap-3 border-b border-[#e8ebf1] px-5 py-5 last:border-0 hover:bg-[#f8faff] sm:grid-cols-[180px_1fr_100px_70px_24px] sm:items-center"
              >
                <strong className="text-sm">{source.name}</strong>
                <span className="text-xs text-[#6f788c]">{source.use}</span>
                <span className="text-xs text-[#6f788c]">{source.cadence}</span>
                <Badge
                  variant="secondary"
                  className="bg-[#eaf7f1] text-[#087a55]"
                >
                  {source.grade} 级
                </Badge>
                <ExternalLink className="size-3.5 text-[#9aa2b2]" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 flex gap-3 rounded-2xl border border-[#f0dca7] bg-[#fffaf0] p-5 text-sm leading-6 text-[#765b20]">
          <AlertTriangle className="mt-0.5 size-5 shrink-0" />
          <p>
            <strong>排名不是采购结论。</strong>
            公开评测可能被训练数据污染，用户偏好也会受到回答风格影响。重大选型应使用你自己的真实任务、数据和成本约束进行小规模评测。
          </p>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
