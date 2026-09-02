import type { Metadata } from 'next';
import {
  ArrowRight,
  BriefcaseBusiness,
  CheckCircle2,
  Clapperboard,
  Code2,
  GraduationCap,
  Palette,
  TrendingUp,
} from 'lucide-react';

import { SiteLink as Link } from '@/components/site-link';
import { Badge } from '@/components/ui/badge';
import { PageHero, SiteFooter, SiteHeader } from '@/components/site-shell';
import {
  applicationCategories,
  applicationPlans,
  type ApplicationCategory,
} from '@/lib/application-plans';

export const metadata: Metadata = {
  title: '按操作找 AI 应用方案｜Prompt Hub',
  description:
    '按剪视频、写代码、做网站、修改论文等具体操作整理的 AI 应用方案。',
};

const categoryMeta: Record<
  ApplicationCategory,
  { description: string; icon: typeof Code2 }
> = {
  技术与开发: {
    description: '从实现到测试、排错和自动化。',
    icon: Code2,
  },
  视频与内容: {
    description: '从素材与观点到可发布的内容。',
    icon: Clapperboard,
  },
  学术与学习: {
    description: '从检索、研究到论文与学习反馈。',
    icon: GraduationCap,
  },
  办公与管理: {
    description: '从会议、汇报到项目和标准流程。',
    icon: BriefcaseBusiness,
  },
  商业与增长: {
    description: '从市场、客户到数据和财务决策。',
    icon: TrendingUp,
  },
  设计与产品: {
    description: '从需求、研究到页面和品牌视觉。',
    icon: Palette,
  },
};

function categoryId(category: ApplicationCategory) {
  return `category-${applicationCategories.indexOf(category) + 1}`;
}

export default function RolesPage() {
  return (
    <main className="min-h-screen bg-[#f7f9fc]">
      <SiteHeader />
      <PageHero
        eyebrow="APPLICATION PLAYBOOKS"
        title="按要做的事，直接找 AI 方案"
        description={`不用先研究自己算什么职位。找到现在要完成的操作，照着准备材料、分步执行，再人工检查。共 ${applicationPlans.length} 个应用方案。`}
      />
      <section className="mx-auto max-w-[1440px] px-5 py-12 lg:px-10 lg:py-16">
        <nav
          className="flex gap-2 overflow-x-auto rounded-2xl border border-[#dfe4ed] bg-white p-3 shadow-[0_12px_32px_rgba(28,45,91,0.05)]"
          aria-label="应用方案分类"
        >
          {applicationCategories.map((category) => (
            <a
              key={category}
              href={`#${categoryId(category)}`}
              className="shrink-0 rounded-xl border border-[#e3e7ef] px-4 py-2 text-sm font-medium text-[#596176] transition hover:border-[#b9caf7] hover:bg-[#f2f6ff] hover:text-[#1746d1]"
            >
              {category}
            </a>
          ))}
        </nav>

        <div className="mt-14 space-y-16">
          {applicationCategories.map((category) => {
            const plans = applicationPlans.filter(
              (plan) => plan.category === category,
            );
            const Icon = categoryMeta[category].icon;

            return (
              <section key={category} id={categoryId(category)}>
                <div className="mb-6 flex items-end justify-between gap-4 border-b border-[#e4e8f0] pb-5">
                  <div className="flex items-center gap-4">
                    <span className="grid size-11 place-items-center rounded-2xl bg-[#1746d1] text-white">
                      <Icon className="size-5" />
                    </span>
                    <div>
                      <h2 className="text-2xl font-semibold tracking-[-0.04em]">
                        {category}
                      </h2>
                      <p className="mt-1 text-sm text-[#7b8498]">
                        {categoryMeta[category].description}
                      </p>
                    </div>
                  </div>
                  <Badge variant="outline">{plans.length} 个操作</Badge>
                </div>

                <div className="grid items-stretch gap-4 md:grid-cols-2 xl:grid-cols-3">
                  {plans.map((plan, index) => (
                    <article
                      key={plan.slug}
                      className="flex min-h-[330px] flex-col rounded-3xl border border-[#e0e4ed] bg-white p-6 transition hover:-translate-y-0.5 hover:border-[#bccaf0] hover:shadow-[0_20px_48px_rgba(28,45,91,0.08)]"
                    >
                      <div className="flex items-center justify-between gap-3">
                        <Badge className="bg-[#eef3ff] text-[#315dca]">
                          {category}
                        </Badge>
                        <span className="font-mono text-xs text-[#a0a7b5]">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                      </div>
                      <h3 className="mt-5 text-xl font-semibold tracking-[-0.035em]">
                        {plan.name}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-[#747d90]">
                        {plan.summary}
                      </p>
                      <ol className="mt-5 space-y-2.5">
                        {plan.steps.map((step) => (
                          <li
                            key={step}
                            className="flex items-start gap-2 text-xs leading-5 text-[#5e687d]"
                          >
                            <CheckCircle2 className="mt-0.5 size-3.5 shrink-0 text-[#15966a]" />
                            {step}
                          </li>
                        ))}
                      </ol>
                      <div className="mt-auto border-t border-[#edf0f5] pt-5">
                        <p className="text-[10px] font-semibold tracking-[0.08em] text-[#8a92a3]">
                          推荐 AI 组合
                        </p>
                        <p className="mt-1 text-xs font-medium text-[#364157]">
                          {plan.stack}
                        </p>
                        <Link
                          href={`/prompts?q=${encodeURIComponent(plan.promptQuery)}`}
                          className="mt-4 flex items-center justify-between rounded-xl bg-[#f1f5ff] px-3 py-2.5 text-xs font-semibold text-[#1746d1] transition hover:bg-[#e7eeff]"
                        >
                          查看相关 Prompt
                          <ArrowRight className="size-4" />
                        </Link>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
