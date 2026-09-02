import {
  ArrowRight,
  BookOpenText,
  Bot,
  BriefcaseBusiness,
  ChevronRight,
  Code2,
  GitCompareArrows,
  Menu,
  Radar,
  Search,
  ShieldCheck,
  Sparkles,
  Workflow,
} from 'lucide-react';

import { SiteLink as Link } from '@/components/site-link';
import { Badge } from '@/components/ui/badge';
import { Button, buttonVariants } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { prompts } from '@/lib/site-data';
import { cn } from '@/lib/utils';

const featuredPromptSlugs = [
  'architecture-review',
  'executive-decision',
  'argument-stress-test',
  'metric-diagnosis',
];

const featuredPrompts = featuredPromptSlugs.flatMap((slug) => {
  const prompt = prompts.find((item) => item.slug === slug);
  return prompt ? [prompt] : [];
});

const roles = [
  { label: '程序员奴隶', icon: Code2, detail: '让 AI 写，让自己少掉头发' },
  {
    label: '创业者与农场主',
    icon: BriefcaseBusiness,
    detail: '先验证，别急着烧钱',
  },
  { label: '研究奴隶', icon: BookOpenText, detail: '少翻网页，多查证据' },
  { label: '产品运营奴隶', icon: Workflow, detail: '需求再乱也得交差' },
];

const stats = [
  { value: '175+', label: '主流模型持续追踪' },
  { value: '12', label: '专业评测维度' },
  { value: String(prompts.length), label: '顶尖 Prompt 持续上新' },
  { value: '24/7', label: 'Prompt 与模型动态更新' },
];

export default function Home() {
  const siteBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

  return (
    <main className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-[#e8ebf2] bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-5 lg:px-10">
          <a
            href="#top"
            className="flex items-center gap-3"
            aria-label="Prompt Hub 首页"
          >
            <span className="grid size-9 place-items-center rounded-xl bg-[#1746d1] text-white shadow-[0_8px_22px_rgba(23,70,209,0.24)]">
              <Sparkles className="size-[18px]" />
            </span>
            <span>
              <strong className="block text-[15px] leading-4 tracking-[-0.02em]">
                Prompt Hub
              </strong>
              <span className="text-[10px] font-medium tracking-[0.08em] text-[#7b8499]">
                Prompt收集
              </span>
            </span>
          </a>

          <nav
            className="hidden items-center gap-7 text-sm font-medium text-[#596176] lg:flex"
            aria-label="主导航"
          >
            <Link
              className="text-[#1746d1]"
              href="/prompts"
            >
              Prompt 库
            </Link>
            <Link
              className="transition-colors hover:text-[#1746d1]"
              href="/models"
            >
              模型动态
            </Link>
            <Link
              className="transition-colors hover:text-[#1746d1]"
              href="/roles"
            >
              职业方案
            </Link>
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href="/compare"
              className={cn(
                buttonVariants({ variant: 'outline' }),
                'hidden h-9 rounded-xl border-[#dfe3ed] px-4 sm:inline-flex',
              )}
            >
              <GitCompareArrows /> 模型对比
            </Link>
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              aria-label="打开导航菜单"
            >
              <Menu />
            </Button>
          </div>
        </div>
      </header>

      <section
        id="top"
        className="relative overflow-hidden border-b border-[#edf0f6] bg-white"
      >
        <div className="pointer-events-none absolute left-1/2 top-[-420px] h-[720px] w-[980px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(50,98,224,0.11),rgba(255,255,255,0)_68%)]" />
        <div className="relative mx-auto grid max-w-[1440px] gap-10 px-5 pb-16 pt-14 lg:grid-cols-[minmax(0,1.12fr)_minmax(390px,0.88fr)] lg:px-10 lg:pb-20 lg:pt-20">
          <div className="max-w-3xl">
            <Badge
              variant="outline"
              className="mb-6 h-7 gap-2 border-[#d9e2ff] bg-[#f5f8ff] px-3 text-[#2857c5]"
            >
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-[#2d6cff] opacity-50" />
                <span className="relative inline-flex size-2 rounded-full bg-[#2d6cff]" />
              </span>
              全球模型数据持续更新
            </Badge>
            <h1 className="max-w-[760px] text-[clamp(2.6rem,6vw,5.5rem)] font-semibold leading-[0.98] tracking-[-0.065em] text-[#111827]">
              农场主让写的，
              <span className="text-[#1746d1]">没办法。</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-[#626b7f] sm:text-lg sm:leading-8">
              帮奴隶们找到合适模型、Prompt，虽然我不知道奴隶们需不需要帮助（看起来奴隶们自己能解决）。
            </p>

            <form
              className="mt-8 max-w-2xl rounded-2xl border border-[#dce2ee] bg-white p-2 shadow-[0_18px_55px_rgba(27,44,94,0.1)]"
              action={siteBasePath ? `${siteBasePath}/prompts/` : '/prompts'}
            >
              <label htmlFor="task-search" className="sr-only">
                描述你想用 AI 完成的任务
              </label>
              <div className="flex items-center gap-2">
                <Search className="ml-3 size-5 shrink-0 text-[#7d879c]" />
                <Input
                  id="task-search"
                  name="q"
                  className="h-12 border-0 px-1 text-[15px] shadow-none focus-visible:ring-0"
                  placeholder="例如：架构评审、战略规划、数据分析、管理沟通"
                />
                <Button
                  type="submit"
                  className="h-11 rounded-xl bg-[#1746d1] px-4 hover:bg-[#1039b0]"
                >
                  智能推荐 <ArrowRight />
                </Button>
              </div>
            </form>

            <div className="mt-5 flex flex-wrap items-center gap-2 text-xs text-[#768095]">
              <span className="mr-1 font-medium">热门任务</span>
              {['代码开发', '商业研究', '内容生产', 'Agent 自动化'].map(
                (item) => (
                  <Link
                    key={item}
                    href={`/prompts?q=${encodeURIComponent(item)}`}
                    className="rounded-full border border-[#e2e6ef] bg-[#fafbfe] px-3 py-1.5 transition hover:border-[#b9c9f5] hover:text-[#1746d1]"
                  >
                    {item}
                  </Link>
                ),
              )}
            </div>
          </div>

          <aside
            id="featured-prompts"
            className="self-end rounded-[28px] border border-[#dfe4ee] bg-[#fbfcff] p-4 shadow-[0_24px_70px_rgba(27,44,94,0.1)] sm:p-6"
          >
            <div className="mb-5 flex items-start justify-between gap-4">
              <div>
                <div className="mb-2 flex items-center gap-2 text-xs font-semibold text-[#1746d1]">
                  <BookOpenText className="size-4" /> 顶尖 Prompt 精选
                </div>
                <h2 className="text-xl font-semibold tracking-[-0.03em]">
                  今天先请哪位专家上班
                </h2>
                <p className="mt-1 text-xs text-[#80899c]">
                  专业模板持续补充与复核
                </p>
              </div>
              <Badge
                variant="secondary"
                className="bg-[#eaf7f1] text-[#087a55]"
              >
                {prompts.length} 条
              </Badge>
            </div>

            <div className="space-y-2">
              {featuredPrompts.map((prompt, index) => (
                <Link
                  key={prompt.slug}
                  href={`/prompts?q=${encodeURIComponent(prompt.title)}`}
                  className="group grid grid-cols-[38px_1fr_auto] items-center gap-3 rounded-2xl border border-[#e7eaf1] bg-white p-3.5 transition hover:-translate-y-0.5 hover:border-[#cbd7f6] hover:shadow-[0_10px_24px_rgba(31,54,112,0.08)]"
                >
                  <span className="font-mono text-xs font-semibold text-[#9aa2b2]">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div className="min-w-0">
                    <strong className="block truncate text-sm">
                      {prompt.title}
                    </strong>
                    <div className="mt-1 flex flex-wrap items-center gap-2 text-[11px] text-[#8991a2]">
                      <span>{prompt.role}</span>
                      <span className="rounded-full bg-[#eef3ff] px-2 py-0.5 text-[#2857c5]">
                        {prompt.persona}
                      </span>
                    </div>
                  </div>
                  <ChevronRight className="size-4 text-[#a0a7b5] transition group-hover:translate-x-1 group-hover:text-[#1746d1]" />
                </Link>
              ))}
            </div>

            <Link
              href="/prompts"
              className="mt-4 flex items-center justify-between rounded-xl px-2 py-2 text-xs font-medium text-[#566077] transition hover:bg-[#f0f4ff] hover:text-[#1746d1]"
            >
              查看完整 Prompt 库 <ChevronRight className="size-4" />
            </Link>
          </aside>
        </div>
      </section>

      <section className="border-b border-[#edf0f6] bg-[#fafbfe]">
        <div className="mx-auto grid max-w-[1440px] grid-cols-2 divide-x divide-[#e4e8f1] px-5 py-7 md:grid-cols-4 lg:px-10">
          {stats.map((stat) => (
            <div key={stat.label} className="px-4 py-3 first:pl-0 md:px-7">
              <strong className="block text-2xl tracking-[-0.04em] text-[#17213a]">
                {stat.value}
              </strong>
              <span className="mt-1 block text-xs text-[#7b8499]">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section
        id="prompts"
        className="border-b border-[#e5e9f2] bg-[#101a34] text-white"
      >
        <div className="mx-auto grid max-w-[1440px] gap-10 px-5 py-16 lg:grid-cols-[0.75fr_1.25fr] lg:px-10 lg:py-20">
          <div>
            <h2 className="text-3xl font-semibold tracking-[-0.045em] sm:text-4xl">
              Prompt 写好了，复制就能交差
            </h2>
            <p className="mt-5 max-w-md leading-7 text-[#aab4cb]">
              每个模板都注明适用模型、输入资料、变量、输出标准、失败处理和进阶调整方法。
            </p>
            <Link
              href="/prompts"
              className={cn(
                buttonVariants({ variant: 'outline' }),
                'mt-7 h-10 border-white/20 bg-white/5 text-white hover:bg-white/10 hover:text-white',
              )}
            >
              探索 Prompt 库 <ArrowRight />
            </Link>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              {
                icon: Bot,
                title: '世界级管理专家',
                meta: '决策、绩效与组织管理',
              },
              {
                icon: Code2,
                title: '顶级架构师',
                meta: '架构、代码、安全与测试',
              },
              {
                icon: Radar,
                title: '资深策划',
                meta: '战略、产品、增长与营销',
              },
              {
                icon: ShieldCheck,
                title: '思维与神经优化导师',
                meta: '论证压力测试与认知工作设计',
              },
            ].map(({ icon: Icon, title, meta }) => (
              <Link
                key={title}
                href="/prompts"
                className="group rounded-2xl border border-white/10 bg-white/[0.055] p-5 transition hover:border-[#6188ee]/60 hover:bg-white/[0.08]"
              >
                <Icon className="size-5 text-[#87a8ff]" />
                <h3 className="mt-8 font-medium">{title}</h3>
                <p className="mt-1 text-xs text-[#8995b0]">{meta}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section
        id="roles"
        className="mx-auto max-w-[1440px] px-5 py-16 lg:px-10 lg:py-24"
      >
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="mb-3 text-xs font-semibold tracking-[0.16em] text-[#1746d1]">
              从你的工作开始
            </p>
            <h2 className="text-3xl font-semibold tracking-[-0.045em] sm:text-4xl">
              给不同职位的奴隶找了一套 AI 用法
            </h2>
          </div>
          <Link
            href="/roles"
            className="flex items-center gap-1 text-sm font-semibold text-[#1746d1]"
          >
            浏览全部职业方案 <ArrowRight className="size-4" />
          </Link>
        </div>

        <div className="mt-9 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {roles.map(({ label, icon: Icon, detail }, index) => (
            <Link
              key={label}
              href="/roles"
              className="group rounded-2xl border border-[#e1e5ed] bg-white p-5 transition hover:-translate-y-1 hover:border-[#b9caf7] hover:shadow-[0_18px_40px_rgba(31,54,112,0.09)]"
            >
              <div className="mb-8 flex items-start justify-between">
                <span
                  className={`grid size-11 place-items-center rounded-2xl ${index === 0 ? 'bg-[#1746d1] text-white' : 'bg-[#f0f3f9] text-[#465169]'}`}
                >
                  <Icon className="size-5" />
                </span>
                <ChevronRight className="size-4 text-[#a2a9b7] transition group-hover:translate-x-1 group-hover:text-[#1746d1]" />
              </div>
              <h3 className="font-semibold">{label}</h3>
              <p className="mt-1 text-sm text-[#7b8499]">{detail}</p>
            </Link>
          ))}
        </div>
      </section>

      <section
        id="updates"
        className="mx-auto max-w-[1440px] px-5 py-16 lg:px-10 lg:py-24"
      >
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="mb-3 text-xs font-semibold tracking-[0.16em] text-[#1746d1]">
              24/7 模型情报
            </p>
            <h2 className="max-w-xl text-3xl font-semibold tracking-[-0.045em] sm:text-4xl">
              实时更新的模型信息。
            </h2>
            <p className="mt-5 max-w-xl leading-7 text-[#70798d]">
              老板说必须让我自己手搓这一块，边搓边学习，印象深刻。不许用 AI 做。
            </p>
          </div>
          <div className="rounded-3xl border border-[#e0e5ef] bg-[#fafbfe] p-5 sm:p-7">
            {[
              ['数据采集', '官方文档、权威榜单与模型仓库', '每 30 分钟'],
              ['排名计算', '多来源归一化与置信度检查', '每 3 小时'],
              ['内容上新', '模型档案、教程与 Prompt 候选', '每日'],
            ].map(([title, detail, time], index) => (
              <div
                key={title}
                className="grid grid-cols-[28px_1fr_auto] gap-3 border-b border-[#e5e9f1] py-4 first:pt-0 last:border-0 last:pb-0"
              >
                <span className="grid size-7 place-items-center rounded-full bg-[#eaf0ff] text-xs font-semibold text-[#1746d1]">
                  {index + 1}
                </span>
                <div>
                  <strong className="text-sm">{title}</strong>
                  <p className="mt-0.5 text-xs text-[#858da0]">{detail}</p>
                </div>
                <span className="text-xs font-medium text-[#596176]">
                  {time}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-[#e5e9f1] bg-white">
        <div className="mx-auto flex max-w-[1440px] flex-col justify-between gap-4 px-5 py-8 text-xs text-[#7b8499] sm:flex-row sm:items-center lg:px-10">
          <div className="flex items-center gap-2">
            <Sparkles className="size-4 text-[#1746d1]" />
            <strong className="text-[#263047]">Prompt Hub</strong>
            <span>· 农场主逼我做的</span>
          </div>
          <p>数据仅供决策参考，请以模型官方信息为准。</p>
        </div>
      </footer>
    </main>
  );
}
