import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import {
  ArrowLeft,
  CheckCircle2,
  ExternalLink,
  Gauge,
  Layers3,
  ShieldCheck,
  Timer,
} from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { SiteLink as Link } from '@/components/site-link';
import { PageHero, SiteFooter, SiteHeader } from '@/components/site-shell';
import { models } from '@/lib/site-data';

export const dynamicParams = false;

export function generateStaticParams() {
  return models.map((model) => ({ slug: model.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const model = models.find((item) => item.slug === slug);
  if (!model) return { title: '模型未找到｜Prompt Hub' };
  const title = `${model.name} 到底能干什么｜Prompt Hub`;
  return {
    title,
    description: model.summary,
    openGraph: { title, description: model.summary, images: [] },
    twitter: { card: 'summary', title, description: model.summary, images: [] },
  };
}

export default async function ModelDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const model = models.find((item) => item.slug === slug);
  if (!model) notFound();

  return (
    <main className="min-h-screen bg-[#f7f9fc]">
      <SiteHeader />
      <PageHero
        eyebrow={`${model.maker.toUpperCase()} · ${model.category}`}
        title={model.name}
        description={model.summary}
      >
        <Link
          href="/models"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1746d1]"
        >
          <ArrowLeft className="size-3.5" />
          返回完整模型库
        </Link>
      </PageHero>
      <section className="mx-auto grid max-w-[1240px] gap-7 px-5 py-12 lg:grid-cols-[minmax(0,1fr)_340px] lg:px-10 lg:py-16">
        <div className="space-y-7">
          <article className="rounded-3xl border border-[#dfe4ed] bg-white p-6 sm:p-8">
            <div className="flex flex-wrap items-end justify-between gap-4 border-b border-[#e9ecf2] pb-7">
              <div>
                <p className="text-xs font-semibold tracking-[0.1em] text-[#7b8497]">
                  它大概有多能打
                </p>
                <div className="mt-2 flex items-baseline gap-2">
                  <strong className="text-5xl tracking-[-0.06em] text-[#1746d1]">
                    {model.score}
                  </strong>
                  <span className="text-sm text-[#8b93a4]">/ 100</span>
                </div>
              </div>
              <div className="text-right">
                <Badge className="bg-[#eaf7f1] text-[#087a55]">已核验</Badge>
                <p className="mt-2 text-[10px] text-[#8b93a4]">
                  {model.verifiedAt}
                </p>
              </div>
            </div>
            <div className="mt-7 grid gap-4 sm:grid-cols-3">
              {[
                { icon: Layers3, label: '上下文', value: model.context },
                { icon: Timer, label: '输出速度', value: model.speed },
                { icon: Gauge, label: '参考价格', value: model.price },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="rounded-2xl bg-[#f6f8fb] p-4">
                  <Icon className="size-4 text-[#1746d1]" />
                  <span className="mt-4 block text-[10px] font-semibold tracking-[0.08em] text-[#8a92a3]">
                    {label}
                  </span>
                  <strong className="mt-1 block text-sm">{value}</strong>
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-3xl border border-[#dfe4ed] bg-white p-6 sm:p-8">
            <h2 className="text-xl font-semibold tracking-[-0.035em]">
              它干这些活比较靠谱
            </h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              {model.bestFor.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 rounded-2xl border border-[#e5e9f1] p-4 text-sm font-medium"
                >
                  <CheckCircle2 className="size-4 text-[#15966a]" />
                  {item}
                </div>
              ))}
            </div>
            <h2 className="mt-9 text-xl font-semibold tracking-[-0.035em]">
              别急着掏钱，先这么试
            </h2>
            <div className="mt-4 space-y-3 text-sm leading-6 text-[#687286]">
              <p>
                先用真实业务样本做小规模测试，不要仅依据公开分数决定采购或迁移。
              </p>
              <p>
                为复杂任务提供背景、约束、输出格式和验证标准；高影响结论需要人工复核与来源检查。
              </p>
              <p>
                不同推理强度、API
                供应商和系统提示词会显著改变成本、延迟与输出效果。
              </p>
            </div>
          </article>
        </div>

        <aside className="space-y-5">
          <div className="rounded-3xl bg-[#101a34] p-6 text-white">
            <h2 className="font-semibold">去哪儿能用上它</h2>
            <ul className="mt-5 space-y-3">
              {model.access.map((channel) => (
                <li
                  key={channel}
                  className="flex items-center gap-2 text-sm text-[#bdc6d9]"
                >
                  <CheckCircle2 className="size-4 text-[#87a8ff]" />
                  {channel}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-[#dfe4ed] bg-white p-6">
            <ShieldCheck className="size-5 text-[#1746d1]" />
            <h2 className="mt-5 font-semibold">这些数字从哪儿来</h2>
            <p className="mt-2 text-xs leading-5 text-[#737c8f]">
              本页关键数据来自 {model.source}，并记录最近核验日期。
            </p>
            <a
              href={model.sourceUrl}
              className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-[#1746d1]"
            >
              打开原始来源 <ExternalLink className="size-3.5" />
            </a>
          </div>
        </aside>
      </section>
      <SiteFooter />
    </main>
  );
}
