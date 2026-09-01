'use client';

import { useMemo, useState } from 'react';
import { Check, Copy, Search, SlidersHorizontal } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { prompts } from '@/lib/site-data';

const roles = [
  '全部',
  ...Array.from(new Set(prompts.map((prompt) => prompt.role))),
];

export function PromptLibrary() {
  const [query, setQuery] = useState('');
  const [role, setRole] = useState('全部');
  const [copied, setCopied] = useState<string | null>(null);

  const visible = useMemo(
    () =>
      prompts.filter((prompt) => {
        const text =
          `${prompt.title} ${prompt.role} ${prompt.category} ${prompt.summary}`.toLowerCase();
        return (
          (role === '全部' || prompt.role === role) &&
          text.includes(query.trim().toLowerCase())
        );
      }),
    [query, role],
  );

  async function copyPrompt(slug: string, template: string) {
    await navigator.clipboard.writeText(template);
    setCopied(slug);
    window.setTimeout(() => setCopied(null), 1800);
  }

  return (
    <div>
      <div className="grid gap-3 rounded-2xl border border-[#dfe4ed] bg-white p-3 shadow-[0_12px_32px_rgba(28,45,91,0.06)] sm:grid-cols-[1fr_auto]">
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
        <div className="flex items-center gap-2 overflow-x-auto">
          <SlidersHorizontal className="ml-2 size-4 shrink-0 text-[#8991a2]" />
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
            <div className="mt-5 max-h-36 flex-1 overflow-hidden rounded-2xl border border-[#e6e9f0] bg-[#f8f9fc] p-4 font-mono text-[11px] leading-5 text-[#596176] [mask-image:linear-gradient(to_bottom,black_60%,transparent)]">
              {prompt.template}
            </div>
            <div className="mt-5 flex items-center justify-between">
              <span className="text-xs font-medium text-[#7d8698]">
                {prompt.category}
              </span>
              <Button
                onClick={() => copyPrompt(prompt.slug, prompt.template)}
                className="rounded-xl bg-[#1746d1] hover:bg-[#1039b0]"
              >
                {copied === prompt.slug ? (
                  <>
                    <Check /> 已复制
                  </>
                ) : (
                  <>
                    <Copy /> 复制 Prompt
                  </>
                )}
              </Button>
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
