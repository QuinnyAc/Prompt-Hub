import type { Metadata } from 'next';
import { Check, Minus } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { PageHero, SiteFooter, SiteHeader } from '@/components/site-shell';
import { models } from '@/lib/site-data';

export const metadata: Metadata = {
  title: '模型到底选谁｜Prompt Hub',
  description: '横向比较主流 AI 模型的能力、上下文、速度、价格和适用任务。',
};

export default function ComparePage() {
  const selected = models.slice(0, 3);
  const rows = [
    ['能力指数', ...selected.map((model) => `${model.score} / 100`)],
    ['上下文', ...selected.map((model) => model.context)],
    ['输出速度', ...selected.map((model) => model.speed)],
    ['API 参考价格', ...selected.map((model) => model.price)],
    ['最佳场景', ...selected.map((model) => model.bestFor.join('、'))],
    [
      '主要渠道',
      ...selected.map((model) => model.access.slice(0, 2).join('、')),
    ],
  ];
  return (
    <main className="min-h-screen bg-[#f7f9fc]">
      <SiteHeader />
      <PageHero
        eyebrow="MODEL COMPARISON"
        title="替农场主省预算，替奴隶省时间。"
        description="把模型差异摆在一张表上，免得开三小时会讨论到底该续费谁。"
      />
      <section className="mx-auto max-w-[1200px] px-5 py-12 lg:px-10 lg:py-16">
        <div className="overflow-x-auto rounded-3xl border border-[#dfe4ed] bg-white">
          <table className="w-full min-w-[760px] border-collapse text-left">
            <thead>
              <tr className="border-b border-[#e5e9f1] bg-[#f8f9fc]">
                <th className="w-40 p-5 text-xs text-[#7b8497]">比较项目</th>
                {selected.map((model, index) => (
                  <th key={model.slug} className="p-5">
                    <Badge
                      className={
                        index === 0
                          ? 'bg-[#1746d1]'
                          : 'bg-[#eef3ff] text-[#315dca]'
                      }
                    >
                      {index === 0 ? '综合领先' : model.category}
                    </Badge>
                    <h2 className="mt-3 text-lg font-semibold">{model.name}</h2>
                    <p className="mt-1 text-xs font-normal text-[#7d8699]">
                      {model.maker}
                    </p>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map(([label, ...values]) => (
                <tr
                  key={label}
                  className="border-b border-[#e9ecf2] last:border-0"
                >
                  <th className="p-5 text-xs font-medium text-[#667085]">
                    {label}
                  </th>
                  {values.map((value, index) => (
                    <td
                      key={`${label}-${index}`}
                      className="p-5 text-sm text-[#303a50]"
                    >
                      {value || <Minus className="size-4" />}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          {selected.map((model, index) => (
            <div
              key={model.slug}
              className="rounded-2xl border border-[#dfe4ed] bg-white p-5"
            >
              <div className="flex items-center gap-2 text-sm font-semibold">
                <Check className="size-4 text-[#15966a]" />
                {index === 0
                  ? '选择它，如果质量最重要'
                  : index === 1
                    ? '选择它，如果需要编程与工具'
                    : '选择它，如果需要实时搜索'}
              </div>
              <p className="mt-2 text-xs leading-5 text-[#747d90]">
                {model.summary}
              </p>
            </div>
          ))}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
