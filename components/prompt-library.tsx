'use client';

import { useMemo, useState, useSyncExternalStore } from 'react';
import {
  Check,
  Copy,
  Search,
  SlidersHorizontal,
} from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  NativeSelect,
  NativeSelectOption,
} from '@/components/ui/native-select';
import { prompts } from '@/lib/site-data';

const experts = [
  '全部专家',
  ...Array.from(new Set(prompts.map((prompt) => prompt.persona))),
];

const categories = [
  '全部任务',
  ...Array.from(new Set(prompts.map((prompt) => prompt.category))),
];

export function PromptLibrary() {
  const locationQuery = useSyncExternalStore(
    () => () => {},
    () => new URLSearchParams(window.location.search).get('q') ?? '',
    () => '',
  );
  const [editedQuery, setEditedQuery] = useState<string | null>(null);
  const query = editedQuery ?? locationQuery;
  const [expert, setExpert] = useState('全部专家');
  const [category, setCategory] = useState('全部任务');
  const [copied, setCopied] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState(12);

  const visible = useMemo(
    () =>
      prompts.filter((prompt) => {
        const text =
          `${prompt.title} ${prompt.persona} ${prompt.role} ${prompt.category} ${prompt.summary} ${prompt.template}`.toLowerCase();
        return (
          (expert === '全部专家' || prompt.persona === expert) &&
          (category === '全部任务' || prompt.category === category) &&
          text.includes(query.trim().toLowerCase())
        );
      }),
    [category, expert, query],
  );

  async function copyPrompt(slug: string, template: string) {
    await navigator.clipboard.writeText(template);
    setCopied(slug);
    window.setTimeout(() => setCopied(null), 1800);
  }

  return (
    <div>
      <div className="rounded-2xl border border-[#dfe4ed] bg-white p-3 shadow-[0_12px_32px_rgba(28,45,91,0.06)]">
        <div className="grid gap-3 lg:grid-cols-[minmax(260px,1fr)_auto]">
          <div className="flex items-center gap-2">
            <Search className="ml-2 size-4 text-[#80899b]" />
            <Input
              value={query}
              onChange={(event) => {
                setEditedQuery(event.target.value);
                setVisibleCount(12);
              }}
              className="h-10 border-0 shadow-none focus-visible:ring-0"
              placeholder="搜索专家、行业、任务或 Prompt"
              aria-label="搜索 Prompt"
            />
          </div>
          <div className="flex items-center gap-2">
            <SlidersHorizontal className="ml-2 size-4 shrink-0 text-[#8991a2]" />
            <NativeSelect
              value={category}
              onChange={(event) => {
                setCategory(event.target.value);
                setVisibleCount(12);
              }}
              className="min-w-44 flex-1 lg:flex-none"
              aria-label="按任务分类筛选"
            >
              {categories.map((item) => (
                <NativeSelectOption key={item} value={item}>
                  {item}
                </NativeSelectOption>
              ))}
            </NativeSelect>
            <span className="shrink-0 pr-2 text-xs font-medium text-[#7d8698]">
              {visible.length} / {prompts.length} 条
            </span>
          </div>
        </div>
        <div className="mt-3 flex items-center gap-2 overflow-x-auto border-t border-[#edf0f5] pt-3">
          <span className="ml-2 shrink-0 text-xs font-medium text-[#7d8698]">
            按专家：
          </span>
          {experts.map((item) => (
            <Button
              key={item}
              onClick={() => {
                setExpert(item);
                setVisibleCount(12);
              }}
              variant={expert === item ? 'default' : 'ghost'}
              className={`shrink-0 rounded-xl ${expert === item ? 'bg-[#1746d1]' : ''}`}
            >
              {item}
            </Button>
          ))}
        </div>
      </div>

      <div className="mt-5 grid gap-3 rounded-2xl border border-[#dce5fb] bg-[#f2f6ff] p-4 text-sm leading-6 text-[#4b5d87] md:grid-cols-3">
        <p><strong className="text-[#173b96]">① 替换变量：</strong>把双花括号里的内容换成你的真实资料。</p>
        <p><strong className="text-[#173b96]">② 附上原文：</strong>给模型数据、代码、记录或案例，别只给一句话。</p>
        <p><strong className="text-[#173b96]">③ 分轮执行：</strong>复杂任务先让模型提问，再生成，再按标准自检。</p>
      </div>

      <div className="mt-7 grid items-start gap-4 md:grid-cols-2 lg:grid-cols-3">
        {visible.slice(0, visibleCount).map((prompt) => (
          <article
            key={prompt.slug}
            className="flex flex-col rounded-3xl border border-[#e0e4ed] bg-white p-6 transition hover:-translate-y-0.5 hover:border-[#bfcdf2] hover:shadow-[0_18px_45px_rgba(26,45,92,0.08)]"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex flex-wrap gap-2">
                <Badge
                  variant="secondary"
                  className="bg-[#eef3ff] text-[#315dca]"
                >
                  {prompt.persona}
                </Badge>
                <Badge variant="outline">适用：{prompt.role}</Badge>
                <Badge variant="outline">{prompt.level}</Badge>
              </div>
              <span className="text-[10px] text-[#8a92a4]">
                推荐：{prompt.model}
              </span>
            </div>
            <h2 className="mt-5 text-xl font-semibold tracking-[-0.035em]">
              {prompt.title}
            </h2>
            <p className="mt-2 text-sm leading-6 text-[#727b8f]">
              {prompt.summary}
            </p>
            <pre className="mt-5 flex-1 whitespace-pre-wrap rounded-2xl border border-[#e6e9f0] bg-[#f8f9fc] p-4 font-mono text-[11px] leading-5 text-[#48536b]">
              {prompt.template}
            </pre>
            <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs font-medium text-[#7d8698]">
                {prompt.category}
              </span>
              <div className="flex items-center gap-2">
                <Button
                  onClick={() => copyPrompt(prompt.slug, prompt.template)}
                  className="rounded-xl bg-[#1746d1] hover:bg-[#1039b0]"
                >
                  {copied === prompt.slug ? <Check /> : <Copy />}
                  {copied === prompt.slug ? '已复制，可以去干活了' : '复制完整 Prompt'}
                </Button>
              </div>
            </div>
          </article>
        ))}
      </div>
      {visibleCount < visible.length && (
        <div className="mt-8 flex flex-col items-center gap-2">
          <Button
            variant="outline"
            className="rounded-xl border-[#cfd8ec] bg-white px-6"
            onClick={() => setVisibleCount((count) => count + 12)}
          >
            再看 12 条
          </Button>
          <span className="text-xs text-[#8a92a4]">
            已显示 {Math.min(visibleCount, visible.length)} / {visible.length} 条
          </span>
        </div>
      )}
      {visible.length === 0 && (
        <div className="py-16 text-center text-sm text-[#7d8699]">
          没有找到匹配的 Prompt。
        </div>
      )}
    </div>
  );
}
