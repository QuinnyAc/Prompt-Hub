'use client';

import { useMemo, useState } from 'react';
import {
  BookOpenText,
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

const roles = [
  '全部',
  ...Array.from(new Set(prompts.map((prompt) => prompt.role))),
];

const categories = [
  '全部任务',
  ...Array.from(new Set(prompts.map((prompt) => prompt.category))),
];

export function PromptLibrary() {
  const [query, setQuery] = useState('');
  const [role, setRole] = useState('全部');
  const [category, setCategory] = useState('全部任务');
  const [copied, setCopied] = useState<string | null>(null);

  const visible = useMemo(
    () =>
      prompts.filter((prompt) => {
        const text =
          `${prompt.title} ${prompt.role} ${prompt.category} ${prompt.summary} ${prompt.template}`.toLowerCase();
        return (
          (role === '全部' || prompt.role === role) &&
          (category === '全部任务' || prompt.category === category) &&
          text.includes(query.trim().toLowerCase())
        );
      }),
    [category, query, role],
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
            onChange={(event) => setQuery(event.target.value)}
            className="h-10 border-0 shadow-none focus-visible:ring-0"
            placeholder="搜索任务、职业或 Prompt"
            aria-label="搜索 Prompt"
          />
        </div>
          <div className="flex items-center gap-2">
            <SlidersHorizontal className="ml-2 size-4 shrink-0 text-[#8991a2]" />
            <NativeSelect
              value={category}
              onChange={(event) => setCategory(event.target.value)}
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
            按职位：
          </span>
          {roles.map((item) => (
            <Button
              key={item}
              onClick={() => setRole(item)}
              variant={role === item ? 'default' : 'ghost'}
              className={`shrink-0 rounded-xl ${role === item ? 'bg-[#1746d1]' : ''}`}
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

      <div className="mt-7 grid gap-4 lg:grid-cols-2">
        {visible.map((prompt) => (
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
                  {prompt.role}
                </Badge>
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
            <div className="mt-5 max-h-36 flex-1 overflow-hidden whitespace-pre-wrap rounded-2xl border border-[#e6e9f0] bg-[#f8f9fc] p-4 font-mono text-[11px] leading-5 text-[#596176] [mask-image:linear-gradient(to_bottom,black_60%,transparent)]">
              {prompt.template}
            </div>
            <details className="group mt-3 rounded-2xl border border-[#e6e9f0] bg-white open:bg-[#f8f9fc]">
              <summary className="flex cursor-pointer list-none items-center gap-2 px-4 py-3 text-sm font-medium text-[#315dca] [&::-webkit-details-marker]:hidden">
                <BookOpenText className="size-4" />
                <span className="group-open:hidden">查看完整 Prompt</span>
                <span className="hidden group-open:inline">收起完整 Prompt</span>
              </summary>
              <pre className="max-h-[60vh] overflow-y-auto whitespace-pre-wrap border-t border-[#e6e9f0] px-4 py-4 font-mono text-xs leading-6 text-[#48536b]">
                {prompt.template}
              </pre>
            </details>
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
      {visible.length === 0 && (
        <div className="py-16 text-center text-sm text-[#7d8699]">
          没有找到匹配的 Prompt。
        </div>
      )}
    </div>
  );
}
