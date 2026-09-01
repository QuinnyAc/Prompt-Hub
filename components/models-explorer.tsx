'use client';

import { useMemo, useState, useSyncExternalStore } from 'react';
import { ArrowDown, ArrowRight, ArrowUp, Minus, Search } from 'lucide-react';

import { SiteLink as Link } from '@/components/site-link';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { models } from '@/lib/site-data';

const filters = [
  '全部',
  '旗舰推理',
  '专业生产力',
  '多模态',
  '均衡旗舰',
  '开放部署',
  '企业 RAG',
  '开放权重',
];

export function ModelsExplorer({
  initialQuery = '',
}: {
  initialQuery?: string;
}) {
  const locationQuery = useSyncExternalStore(
    () => () => {},
    () => new URLSearchParams(window.location.search).get('q') ?? initialQuery,
    () => initialQuery,
  );
  const [editedQuery, setEditedQuery] = useState<string | null>(null);
  const query = editedQuery ?? locationQuery;
  const [filter, setFilter] = useState('全部');

  const visible = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return models.filter((model) => {
      const matchesFilter = filter === '全部' || model.category === filter;
      const matchesQuery =
        !normalized ||
        [model.name, model.maker, model.category, ...model.bestFor]
          .join(' ')
          .toLowerCase()
          .includes(normalized);
      return matchesFilter && matchesQuery;
    });
  }, [filter, query]);

  return (
    <div>
      <div className="rounded-2xl border border-[#dfe4ee] bg-white p-3 shadow-[0_12px_32px_rgba(28,45,91,0.06)]">
        <div className="flex items-center gap-2">
          <Search className="ml-2 size-4 text-[#7f889b]" />
          <Input
            value={query}
            onChange={(event) => setEditedQuery(event.target.value)}
            className="h-10 border-0 shadow-none focus-visible:ring-0"
            placeholder="搜索模型、厂商或适用任务"
            aria-label="搜索模型"
          />
          <span className="hidden pr-2 text-xs tabular-nums text-[#8b93a4] sm:block">
            {visible.length} 个结果
          </span>
        </div>
      </div>

      <div
        className="mt-5 flex gap-2 overflow-x-auto pb-2"
        aria-label="模型类别筛选"
      >
        {filters.map((item) => (
          <Button
            key={item}
            onClick={() => setFilter(item)}
            variant={filter === item ? 'default' : 'outline'}
            className={`shrink-0 rounded-full ${filter === item ? 'bg-[#1746d1] hover:bg-[#1039b0]' : 'border-[#e0e4ec] bg-white'}`}
          >
            {item}
          </Button>
        ))}
      </div>

      <div className="mt-6 overflow-hidden rounded-3xl border border-[#dfe4ed] bg-white">
        <div className="hidden grid-cols-[64px_minmax(210px,1.25fr)_100px_100px_120px_minmax(180px,1fr)_40px] gap-4 border-b border-[#e7eaf1] bg-[#f8f9fc] px-6 py-3 text-[11px] font-semibold tracking-[0.08em] text-[#778095] lg:grid">
          <span>排名</span>
          <span>模型</span>
          <span>能力指数</span>
          <span>排名变化</span>
          <span>上下文</span>
          <span>最佳场景</span>
          <span />
        </div>
        {visible.map((model, index) => {
          const TrendIcon =
            model.change > 0 ? ArrowUp : model.change < 0 ? ArrowDown : Minus;
          return (
            <Link
              key={model.slug}
              href={`/models/${model.slug}`}
              className="group grid gap-3 border-b border-[#e9ecf2] px-5 py-5 transition last:border-0 hover:bg-[#f8faff] lg:grid-cols-[64px_minmax(210px,1.25fr)_100px_100px_120px_minmax(180px,1fr)_40px] lg:items-center lg:gap-4 lg:px-6"
            >
              <span className="font-mono text-sm font-semibold text-[#8b93a4]">
                {String(index + 1).padStart(2, '0')}
              </span>
              <div>
                <strong className="text-[15px] tracking-[-0.01em] text-[#202a40]">
                  {model.name}
                </strong>
                <div className="mt-1 flex items-center gap-2 text-xs text-[#858da0]">
                  <span>{model.maker}</span>
                  <Badge
                    variant="secondary"
                    className="h-5 bg-[#f0f3f8] text-[10px]"
                  >
                    {model.category}
                  </Badge>
                </div>
              </div>
              <div>
                <strong className="text-lg tabular-nums">{model.score}</strong>
                <span className="ml-1 text-[10px] text-[#9aa2b2]">/ 100</span>
              </div>
              <div
                className={`flex items-center gap-1 text-xs font-semibold ${model.change > 0 ? 'text-[#15966a]' : model.change < 0 ? 'text-[#d65745]' : 'text-[#959cab]'}`}
              >
                <TrendIcon className="size-3.5" />
                {Math.abs(model.change)}
              </div>
              <span className="text-sm text-[#515b70]">{model.context}</span>
              <div className="flex flex-wrap gap-1.5">
                {model.bestFor.slice(0, 2).map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-[#eef3ff] px-2 py-1 text-[10px] text-[#315dca]"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <ArrowRight className="size-4 text-[#a0a7b5] transition group-hover:translate-x-1 group-hover:text-[#1746d1]" />
            </Link>
          );
        })}
        {visible.length === 0 && (
          <div className="px-6 py-16 text-center text-sm text-[#7d8699]">
            没有符合条件的模型，请更换关键词或筛选条件。
          </div>
        )}
      </div>
    </div>
  );
}
