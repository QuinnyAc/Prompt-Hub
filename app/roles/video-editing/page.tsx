import type { Metadata } from 'next';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  CircleAlert,
  Clapperboard,
  Link2,
  ShieldCheck,
  Wrench,
} from 'lucide-react';

import { CopyPromptButton } from '@/components/copy-prompt-button';
import { SiteLink as Link } from '@/components/site-link';
import { Badge } from '@/components/ui/badge';
import { PageHero, SiteFooter, SiteHeader } from '@/components/site-shell';

export const metadata: Metadata = {
  title: 'ChatGPT + 剪映剪视频方案｜Prompt Hub',
  description:
    'ChatGPT 与剪映协作剪视频的操作步骤、连接方式、文件交接标准和可复制 Prompt。',
};

const editPrompts = [
  {
    title: '素材分析与粗剪',
    summary: '把带时间码的转写和素材清单变成可以照着执行的粗剪决策表。',
    template: `你是一名资深短视频剪辑师。请根据我提供的材料，制作一份可以在剪映中手动执行的粗剪决策表。

平台：{{抖音／小红书／视频号／B站／其他}}
目标时长：{{时长}}
目标受众：{{受众}}
视频目标：{{完播／转化／讲清知识／品牌表达}}
原始转写（必须带时间码）：{{粘贴转写}}
素材清单：{{主镜头、B-roll、图片、录屏、音乐}}

请先判断核心信息和叙事顺序，再输出表格：
时间码｜保留/删除/移动｜新的顺序｜剪辑理由｜字幕精简｜建议画面｜音效或转场

要求：
1. 前 3 秒必须清楚说明观众为什么要继续看。
2. 删除重复、空话、无效停顿，但不要改变原意。
3. 每 5–12 秒检查一次视觉变化是否必要，不要为了热闹乱加转场。
4. 最后给出预计成片时长、缺失素材和剪映执行顺序。
5. 不要假装看过未提供的画面；无法判断时标记“需要人工看片”。`,
  },
  {
    title: '脚本改成镜头表',
    summary: '把口播或文章转成拍摄、配音和后期都能使用的镜头清单。',
    template: `担任视频导演和剪辑策划。把下面的内容改成一份可拍摄、可在剪映中执行的镜头脚本。

原始内容：{{文章、口播稿或主题}}
平台与画幅：{{平台、横屏/竖屏}}
目标时长：{{时长}}
出镜方式：{{真人口播／旁白／纯字幕／混合}}
可用素材与场地：{{素材}}
品牌语气：{{专业／轻松／克制／幽默}}

输出：
1. 一句话核心观点与前 3 秒钩子。
2. 镜头表：序号｜时长｜画面｜口播/旁白｜屏幕字幕｜B-roll｜剪辑动作。
3. 拍摄清单、补录清单和后期素材清单。
4. 30 秒、60 秒和 90 秒三个版本的删减原则。

限制：不编造产品效果、数据或用户评价；需要事实支撑的句子标记“待核实”。`,
  },
  {
    title: '字幕清理与断句',
    summary: '清除口头语、错别字和难读长句，同时保持原意和时间码。',
    template: `你是一名视频字幕编辑。请清理下面的 SRT 或带时间码字幕，并保持原有时间码顺序。

字幕原文：{{粘贴字幕}}
专有名词表：{{人名、品牌、产品、术语}}
语气要求：{{自然口语／专业／简洁}}
每行字数上限：{{例如 16 个汉字}}

请执行：
1. 修正明显的识别错误、同音字、标点和专有名词。
2. 删除不影响意义的口头语与重复，但不要改变事实或说话人的态度。
3. 按语义断句；避免一个完整词组被拆到两行。
4. 输出“可直接替换的字幕”和“需要人工听原音确认的时间码”。
5. 另列敏感表述、绝对化承诺、数字和引用的核查清单。

如果无法从上下文确认某个词，请保留原文并标记【待听辨】，不要猜。`,
  },
  {
    title: '节奏与完播优化',
    summary: '根据粗剪表或字幕检查开场、信息密度、停顿和结尾。',
    template: `担任短视频节奏编辑。请审查下面的粗剪决策表或带时间码字幕，目标是提高理解度和完播率，而不是盲目加快。

平台：{{平台}}
目标受众：{{受众}}
当前时长：{{时长}}
粗剪表或字幕：{{内容}}
已有数据（如有）：{{3秒留存、平均观看时长、跳出点}}

逐段判断：
- 这一段给观众的新信息是什么？
- 能否删除、合并或前移？
- 画面是否需要变化，还是应该让信息停留？
- 字幕是否比口播更容易理解？

输出时间码级修改表、建议删除的总时长、三个最可能的流失点、两种开场方案和两种结尾方案。没有数据时明确写“基于内容结构判断”，不要假装知道真实完播表现。`,
  },
  {
    title: '一条视频拆多平台',
    summary: '把同一素材改成抖音、小红书、视频号和 B 站的不同版本。',
    template: `你是一名跨平台视频运营编辑。基于同一份素材，为不同平台设计差异化剪辑方案。

原始脚本或转写：{{内容}}
素材清单：{{素材}}
核心目标：{{获客／科普／品牌／互动}}
不能修改的事实和品牌要求：{{约束}}

分别为抖音、小红书、视频号和 B 站输出：
1. 推荐时长和叙事结构。
2. 前 3 秒开场、标题和封面文字。
3. 应保留、删除、前移的段落。
4. 字幕密度、画面节奏和行动引导。
5. 剪映导出时的文件命名建议。

最后给出一份“共用母版 + 平台差异修改”的执行顺序，减少重复剪辑。平台规则和尺寸如不能确认，请标记需要以平台最新官方要求复核。`,
  },
  {
    title: '成片质检',
    summary: '在发布前检查内容、声音、字幕、画面、合规和转化路径。',
    template: `担任视频发布前质检负责人。根据我提供的成片字幕、关键帧截图、剪辑表和导出信息完成质检。

视频目标：{{目标}}
发布平台：{{平台}}
字幕全文：{{字幕}}
关键帧与时间码说明：{{材料}}
音乐、字体和素材来源：{{授权信息}}
导出参数：{{分辨率、帧率、码率、文件大小}}

按以下维度评分并给出证据：
1. 开场与叙事；2. 信息准确；3. 画面连续；4. 字幕可读；5. 人声与音乐；6. 品牌一致；7. 版权与隐私；8. 平台合规；9. 行动引导。

输出：必须修改、建议修改、可以发布三档问题清单，以及发布后应观察的数据指标。

不要声称看见或听见未提供的内容；缺少完整成片时，明确列出仍需人工完整播放检查的项目。`,
  },
];

const manualSteps = [
  {
    title: '从剪映导出文字材料',
    detail:
      '优先准备带时间码的字幕或转写，再补素材清单、脚本、平台、目标时长和关键画面截图。',
  },
  {
    title: '把材料交给 ChatGPT',
    detail:
      '不要只说“帮我剪好”。先让 ChatGPT 复述目标和缺失信息，再生成时间码级粗剪决策表。',
  },
  {
    title: '在剪映执行第一版',
    detail:
      '按保留、删除、移动、字幕、B-roll 和音频清单逐项操作；重要删除先复制草稿或保留备份。',
  },
  {
    title: '把粗剪结果再交给 ChatGPT',
    detail:
      '提供新版字幕、剪辑表、关键帧和已有数据，让 ChatGPT 做节奏、事实、字幕与平台适配检查。',
  },
  {
    title: '人工完整播放后发布',
    detail:
      '检查画面、原声、字幕同步、版权、隐私和事实。ChatGPT 没拿到完整音视频时不能代替最终看片。',
  },
];

export default function VideoEditingPlanPage() {
  return (
    <main className="min-h-screen bg-[#f7f9fc]">
      <SiteHeader />
      <PageHero
        eyebrow="VIDEO EDITING PLAYBOOK"
        title="ChatGPT + 剪映剪视频方案"
        description="先判断能不能真正连接，再选择零开发协作或自建连接。下面的步骤和 Prompt 可以直接照着使用。"
      />

      <div className="mx-auto max-w-[1280px] px-5 py-10 lg:px-10 lg:py-14">
        <Link
          href="/roles"
          className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-[#1746d1]"
        >
          <ArrowLeft className="size-4" /> 返回应用方案
        </Link>

        <section className="rounded-3xl border border-[#f0d59a] bg-[#fffaf0] p-6 sm:p-8">
          <div className="flex items-start gap-4">
            <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-[#fff0c9] text-[#9a6200]">
              <CircleAlert className="size-5" />
            </span>
            <div>
              <Badge className="bg-[#fff0c9] text-[#895800]">先说结论</Badge>
              <h2 className="mt-3 text-2xl font-semibold tracking-[-0.04em]">
                一个 Prompt 不能凭空控制剪映
              </h2>
              <p className="mt-3 max-w-4xl text-sm leading-7 text-[#735f35]">
                ChatGPT 要直接读取或修改剪映项目，必须存在可验证的应用连接器，或由开发者基于剪映/CapCut 合法开放接口搭建 MCP 工具。本站截至 2026-09-02 尚未验证到可直接编辑剪映项目的官方连接器，因此默认推荐“ChatGPT 负责策划、决策表和质检，剪映负责实际时间线操作”的双窗口方案。
              </p>
              <p className="mt-3 text-xs leading-6 text-[#8a7445]">
                OpenAI 官方资料：
                <a
                  className="ml-1 underline underline-offset-4"
                  href="https://learn.chatgpt.com/zh-Hans/use-cases/chatgpt-apps"
                >
                  ChatGPT 应用与 MCP
                </a>
                。官方说明，外部工具能力来自应用/连接器或自建 MCP，而不是普通聊天提示词本身。
              </p>
            </div>
          </div>
        </section>

        <section className="mt-12">
          <div className="flex items-center gap-3">
            <Link2 className="size-5 text-[#1746d1]" />
            <h2 className="text-2xl font-semibold tracking-[-0.04em]">
              先检查你的账号能不能直连
            </h2>
          </div>
          <div className="mt-5 grid gap-4 lg:grid-cols-3">
            {[
              {
                number: '01',
                title: '搜索应用目录',
                detail:
                  '在 ChatGPT 的插件或应用目录搜索“剪映”和“CapCut”。核对开发者、验证状态、支持地区和账号范围。',
              },
              {
                number: '02',
                title: '检查实际权限',
                detail:
                  '确认它是否真的能读取项目、修改时间线或导出，而不只是生成脚本、模板或跳转链接。',
              },
              {
                number: '03',
                title: '先做无损测试',
                detail:
                  '如果存在连接器，先复制一个测试草稿，只授权必要范围；写入前保留确认步骤和恢复方式。',
              },
            ].map((item) => (
              <article
                key={item.number}
                className="rounded-3xl border border-[#e0e4ed] bg-white p-6"
              >
                <span className="font-mono text-xs font-semibold text-[#1746d1]">
                  {item.number}
                </span>
                <h3 className="mt-5 text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#747d90]">
                  {item.detail}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-16 rounded-[32px] border border-[#dfe5f0] bg-white p-6 sm:p-9">
          <div className="flex items-center gap-3">
            <Clapperboard className="size-5 text-[#1746d1]" />
            <div>
              <Badge className="bg-[#eaf7f1] text-[#087a55]">推荐 · 现在就能用</Badge>
              <h2 className="mt-2 text-2xl font-semibold tracking-[-0.04em]">
                零开发双窗口协作
              </h2>
            </div>
          </div>
          <div className="mt-8 grid gap-3">
            {manualSteps.map((step, index) => (
              <div
                key={step.title}
                className="grid gap-3 rounded-2xl border border-[#e8ebf2] bg-[#fafbfe] p-5 sm:grid-cols-[40px_1fr]"
              >
                <span className="grid size-9 place-items-center rounded-xl bg-[#eaf0ff] text-sm font-semibold text-[#1746d1]">
                  {index + 1}
                </span>
                <div>
                  <h3 className="font-semibold">{step.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-[#747d90]">
                    {step.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold tracking-[0.14em] text-[#1746d1]">
              COPY & PASTE
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.045em]">
              6 个剪视频 Prompt
            </h2>
            <p className="mt-3 leading-7 text-[#70798d]">
              把双花括号替换成真实材料。Prompt 会要求模型承认没看到的画面，避免 AI 假装已经完整看片。
            </p>
          </div>

          <div className="mt-8 grid items-start gap-4 lg:grid-cols-2">
            {editPrompts.map((prompt) => (
              <article
                key={prompt.title}
                className="rounded-3xl border border-[#e0e4ed] bg-white p-6"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold tracking-[-0.035em]">
                      {prompt.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-[#747d90]">
                      {prompt.summary}
                    </p>
                  </div>
                  <CopyPromptButton text={prompt.template} />
                </div>
                <pre className="mt-5 whitespace-pre-wrap rounded-2xl border border-[#e6e9f0] bg-[#f8f9fc] p-4 font-mono text-[11px] leading-5 text-[#48536b]">
                  {prompt.template}
                </pre>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-16 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <article className="rounded-3xl border border-[#dce5fb] bg-[#f2f6ff] p-7 sm:p-9">
            <div className="flex items-center gap-3">
              <Wrench className="size-5 text-[#1746d1]" />
              <h2 className="text-2xl font-semibold tracking-[-0.04em]">
                高级方案：自建连接器
              </h2>
            </div>
            <p className="mt-4 text-sm leading-7 text-[#56698f]">
              仅适合能取得合法接口权限的团队。先确认剪映/CapCut 是否向你的账号开放项目、字幕、时间线和导出 API，再构建 MCP；没有合法接口时，不要用抓 Cookie、共享密码或来路不明的 RPA 冒充官方直连。
            </p>
            <ol className="mt-6 space-y-3">
              {[
                '只围绕一个目标：根据已确认的剪辑决策表更新测试草稿。',
                '把工具限制为列出项目、读取字幕、创建草稿副本、应用字幕修改、导出审核版等少量动作。',
                '涉及用户项目和写入操作时使用身份验证，并在每次修改前要求确认。',
                '通过 HTTPS 暴露稳定的 MCP 端点，在 ChatGPT 开发者模式连接并用测试项目验证。',
                '保留幂等、版本记录、失败回滚和人工最终发布环节。',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm leading-6 text-[#4e6086]">
                  <CheckCircle2 className="mt-1 size-4 shrink-0 text-[#15966a]" />
                  {item}
                </li>
              ))}
            </ol>
          </article>

          <article className="rounded-3xl border border-[#e2e6ef] bg-white p-7 sm:p-9">
            <div className="flex items-center gap-3">
              <ShieldCheck className="size-5 text-[#15966a]" />
              <h2 className="text-2xl font-semibold tracking-[-0.04em]">
                发布前必须人工检查
              </h2>
            </div>
            <ul className="mt-6 space-y-3 text-sm leading-6 text-[#626d82]">
              {[
                '从头到尾完整播放一次，不只看字幕和剪辑表。',
                '核对人名、数字、引用、产品承诺和敏感表述。',
                '确认字幕同步、音量、人声清楚度和画面跳切。',
                '确认音乐、字体、图片、肖像和素材授权。',
                '确认平台尺寸、封面、标题和最新发布规则。',
                '保留原始素材、项目副本和最终导出版本。',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 size-4 shrink-0 text-[#15966a]" />
                  {item}
                </li>
              ))}
            </ul>
          </article>
        </section>

        <div className="mt-12 flex justify-end">
          <Link
            href="/roles"
            className="inline-flex items-center gap-2 rounded-xl bg-[#1746d1] px-5 py-3 text-sm font-semibold text-white"
          >
            查看其他应用方案 <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
      <SiteFooter />
    </main>
  );
}
