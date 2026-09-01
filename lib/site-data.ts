export type Model = {
  slug: string;
  name: string;
  maker: string;
  category: string;
  score: number;
  arena?: number;
  change: number;
  context: string;
  speed: string;
  price: string;
  bestFor: string[];
  summary: string;
  access: string[];
  source: string;
  sourceUrl: string;
  verifiedAt: string;
};

export const models: Model[] = [
  {
    slug: 'claude-opus-5',
    name: 'Claude Opus 5',
    maker: 'Anthropic',
    category: '旗舰推理',
    score: 63,
    change: 0,
    context: '1M',
    speed: '52 tok/s',
    price: '$5 / $25',
    bestFor: ['复杂推理', '战略咨询', '长文本'],
    summary:
      '当前前沿智能梯队中的旗舰模型，适合高复杂度专业任务与长上下文分析。',
    access: ['Claude', 'Anthropic API', 'Amazon Bedrock', 'Google Vertex AI'],
    source: 'Artificial Analysis',
    sourceUrl: 'https://artificialanalysis.ai/leaderboards/models',
    verifiedAt: '2026-09-01',
  },
  {
    slug: 'gpt-5-6-sol',
    name: 'GPT-5.6 Sol',
    maker: 'OpenAI',
    category: '专业生产力',
    score: 61,
    change: 1,
    context: '1M',
    speed: '75 tok/s',
    price: '$4 / $20',
    bestFor: ['编程', '工具调用', '复杂工作流'],
    summary: '强调专业工作、软件开发和代理任务的高能力模型，工具生态完整。',
    access: ['ChatGPT', 'OpenAI API', 'Codex', 'Microsoft Azure'],
    source: 'Artificial Analysis',
    sourceUrl: 'https://artificialanalysis.ai/leaderboards/models',
    verifiedAt: '2026-09-01',
  },
  {
    slug: 'grok-4-6',
    name: 'Grok 4.6',
    maker: 'xAI',
    category: '推理与搜索',
    score: 61,
    change: 2,
    context: '500K',
    speed: '54 tok/s',
    price: '$1.25 / $2.50',
    bestFor: ['实时信息', '推理', '研究'],
    summary: '兼顾前沿推理和实时信息获取，适合需要快速检索与综合判断的任务。',
    access: ['Grok', 'xAI API', 'X'],
    source: 'Artificial Analysis',
    sourceUrl: 'https://artificialanalysis.ai/leaderboards/models',
    verifiedAt: '2026-09-01',
  },
  {
    slug: 'gemini-3-1-pro',
    name: 'Gemini 3.1 Pro',
    maker: 'Google',
    category: '多模态',
    score: 58,
    change: -1,
    context: '1M',
    speed: '未公开',
    price: '$1 / $6',
    bestFor: ['多模态', '长上下文', 'Google 生态'],
    summary: '适合跨文本、图像与长文档理解，和 Google 产品及云服务结合紧密。',
    access: ['Gemini', 'Google AI Studio', 'Gemini API', 'Vertex AI'],
    source: 'LMArena / 官方资料',
    sourceUrl: 'https://lmarena.ai/leaderboard/text',
    verifiedAt: '2026-09-01',
  },
  {
    slug: 'claude-sonnet-4-6',
    name: 'Claude Sonnet 4.6',
    maker: 'Anthropic',
    category: '均衡旗舰',
    score: 57,
    arena: 1515,
    change: 1,
    context: '1M',
    speed: '快速',
    price: '$1.50 / $7.50',
    bestFor: ['日常专业工作', '编程', '性价比'],
    summary: '在质量、速度与成本之间保持平衡，适合作为团队默认工作模型。',
    access: ['Claude', 'Anthropic API', 'Amazon Bedrock', 'Google Vertex AI'],
    source: 'LMArena',
    sourceUrl: 'https://lmarena.ai/leaderboard/text',
    verifiedAt: '2026-09-01',
  },
  {
    slug: 'mistral-large-3',
    name: 'Mistral Large 3',
    maker: 'Mistral AI',
    category: '开放部署',
    score: 46,
    change: 0,
    context: '256K',
    speed: '依供应商',
    price: '依供应商',
    bestFor: ['欧洲合规', '私有部署', '多语言'],
    summary: '适合重视可控部署、欧洲数据治理和多语言能力的企业应用。',
    access: ['Le Chat', 'Mistral API', '云平台', '开放权重'],
    source: '官方资料 / LMArena',
    sourceUrl: 'https://mistral.ai/',
    verifiedAt: '2026-09-01',
  },
  {
    slug: 'command-a-plus',
    name: 'Command A+',
    maker: 'Cohere',
    category: '企业 RAG',
    score: 44,
    change: 2,
    context: '256K',
    speed: '低延迟',
    price: '依供应商',
    bestFor: ['企业检索', 'RAG', '私有数据'],
    summary: '以企业知识检索和受控生成见长，适合连接内部文档与业务系统。',
    access: ['Cohere API', 'Amazon Bedrock', 'Oracle Cloud'],
    source: '官方资料 / Artificial Analysis',
    sourceUrl: 'https://cohere.com/',
    verifiedAt: '2026-09-01',
  },
  {
    slug: 'llama-4-scout',
    name: 'Llama 4 Scout',
    maker: 'Meta',
    category: '开放权重',
    score: 38,
    change: -2,
    context: '10M',
    speed: '依部署环境',
    price: '自托管成本',
    bestFor: ['超长上下文', '可控部署', '模型定制'],
    summary: '开放权重与超长上下文是主要优势，适合有工程能力的团队定制部署。',
    access: ['Hugging Face', '云服务商', '本地部署'],
    source: '官方资料 / Artificial Analysis',
    sourceUrl: 'https://www.llama.com/',
    verifiedAt: '2026-09-01',
  },
];

export type PromptItem = {
  slug: string;
  title: string;
  role: string;
  category: string;
  level: '入门' | '进阶' | '专家';
  model: string;
  summary: string;
  template: string;
};

export const prompts: PromptItem[] = [
  {
    slug: 'architecture-review',
    title: '帮我看看这架构会不会炸',
    role: '程序员',
    category: '编程开发',
    level: '专家',
    model: 'GPT-5.6 Sol / Claude Opus 5',
    summary:
      '从可靠性、安全、扩展性和成本角度审查技术架构，并输出可执行整改计划。',
    template: `你是一名具有大型分布式系统经验的首席架构师。\n\n目标：审查我提供的系统架构，识别会影响可靠性、安全性、性能、可维护性和成本的关键风险。\n\n背景：\n- 业务目标：{{业务目标}}\n- 用户规模与增长预期：{{规模}}\n- 技术栈：{{技术栈}}\n- 当前架构：{{架构描述}}\n- 约束：{{预算、期限、团队能力、合规要求}}\n\n工作要求：\n1. 先复述关键假设，并列出缺失信息。\n2. 按“严重程度 × 发生概率 × 修复成本”评估风险。\n3. 区分必须立即处理、下一阶段处理和可以接受的风险。\n4. 对每项建议给出理由、实施步骤、验证指标与回滚方式。\n5. 不要为了复杂而复杂；明确指出哪些组件可以删除或简化。\n\n输出：执行摘要、架构风险表、建议架构、90 天改进路线图、待确认问题。`,
  },
  {
    slug: 'debug-investigator',
    title: '先别乱改，看看 Bug 藏哪儿了',
    role: '程序员',
    category: '编程开发',
    level: '进阶',
    model: 'GPT-5.6 Sol / Claude Sonnet 4.6',
    summary: '用证据驱动的方式定位复杂 Bug，避免没有依据地反复修改代码。',
    template: `担任资深故障调查工程师。你的目标不是立即猜修复方案，而是用最少实验缩小根因范围。\n\n问题表现：{{现象}}\n预期行为：{{预期}}\n环境：{{环境}}\n最近变化：{{变化}}\n日志与代码：{{材料}}\n\n请：\n1. 建立按概率排序的根因假设树。\n2. 为每个假设说明支持证据、反证和缺失证据。\n3. 设计信息增益最高的最小实验。\n4. 等我返回实验结果后再更新判断。\n5. 确认根因后，给出最小安全修复、测试和回滚方案。\n\n禁止：虚构日志、假定未提供的环境信息、同时修改多个无关变量。`,
  },
  {
    slug: 'startup-validation',
    title: '这个创业点子到底会不会凉',
    role: '创业者',
    category: '商业战略',
    level: '专家',
    model: 'Claude Opus 5 / Grok 4.6',
    summary:
      '优先寻找项目失败的证据，形成低成本验证实验，而不是生成泛泛商业计划。',
    template: `你是一名以证伪为导向的创业投资人和产品策略顾问。\n\n创业想法：{{想法}}\n目标客户：{{客户}}\n地区与行业：{{市场}}\n创始团队优势：{{优势}}\n可投入资源：{{资源}}\n\n任务：\n- 写出这个想法成立必须为真的 10 个关键假设。\n- 按“重要性 × 不确定性”排序。\n- 主动寻找需求不存在、付费意愿不足、获客困难和竞争壁垒薄弱的证据。\n- 为前 5 个假设设计 7 天内、低成本、可量化的验证实验。\n- 定义继续、调整和停止的明确阈值。\n\n输出必须包含：反方投资备忘录、假设矩阵、实验计划、访谈问题、决策门槛。`,
  },
  {
    slug: 'competitive-research',
    title: '把竞品扒明白，别全靠感觉',
    role: '创业者',
    category: '深度研究',
    level: '专家',
    model: 'Grok 4.6 / Claude Opus 5',
    summary: '建立来源等级、事实与推断分离、信息缺口显式化的竞品研究报告。',
    template: `作为商业情报分析师，研究 {{行业/产品}} 的竞争格局。\n\n范围：{{地区、时间、客户群}}\n决策目标：{{这份研究支持什么决策}}\n\n规则：\n1. 优先使用公司官网、监管文件、财报、定价页和产品文档。\n2. 每个关键事实附直接来源与日期。\n3. 严格区分“已证实事实、合理推断、未经证实说法”。\n4. 发现来源冲突时并列展示，不自行选择更好看的数字。\n5. 明确列出搜索过但没有可靠答案的问题。\n\n输出：市场地图、竞品矩阵、定位差异、商业模式、渠道、护城河、风险、可利用空白、后续调查清单。`,
  },
  {
    slug: 'product-prd',
    title: '把一团乱需求写成能干的 PRD',
    role: '产品经理',
    category: '产品设计',
    level: '进阶',
    model: 'Claude Sonnet 4.6 / GPT-5.6 Sol',
    summary: '把模糊需求转成可验证问题、边界明确的需求文档与验收标准。',
    template: `担任高级产品经理。把以下材料转为可执行 PRD，但不要把未经验证的想法包装成用户需求。\n\n输入材料：{{访谈、数据、需求描述}}\n业务目标：{{目标}}\n约束：{{期限、团队、技术、合规}}\n\n先输出：\n- 已证实问题与证据\n- 假设与待验证问题\n- 不做什么\n\n再输出 PRD：目标用户、Job to be Done、核心流程、功能需求、异常与空状态、权限、埋点、非功能要求、验收标准。\n\n每项需求必须关联用户价值、业务指标和证据；无法关联的标为“待论证”。`,
  },
  {
    slug: 'executive-decision',
    title: '给农场主一页纸看懂怎么选',
    role: '农场主',
    category: '决策分析',
    level: '专家',
    model: 'Claude Opus 5',
    summary: '将复杂材料压缩成一页决策备忘录，明确选择、代价、风险和触发条件。',
    template: `你是董事会级战略顾问。基于 {{材料}} 起草一份决策备忘录。\n\n决策问题：{{问题}}\n决策期限：{{期限}}\n不可违反的约束：{{约束}}\n\n要求：\n- 只保留会改变决策的信息。\n- 提供 3 个真正互斥的选项，包括维持现状。\n- 对比收益、成本、可逆性、执行难度和二阶影响。\n- 指出最强反对意见和可能推翻建议的新证据。\n- 给出推荐、置信度、90 天行动及停止条件。\n\n输出控制在一页，附录列出关键事实及来源。`,
  },
  {
    slug: 'content-system',
    title: '别天天憋选题，让 AI 排一个月',
    role: '内容创作者',
    category: '内容生产',
    level: '进阶',
    model: 'Claude Sonnet 4.6 / Gemini 3.1 Pro',
    summary: '从受众研究到选题、写作、质检与复用，形成可持续内容系统。',
    template: `你是一名品牌内容策略总监。为 {{品牌/个人}} 建立内容生产系统。\n\n目标受众：{{受众}}\n业务目标：{{目标}}\n渠道：{{渠道}}\n品牌证据与独特经验：{{材料}}\n禁用表达：{{禁区}}\n\n请设计：内容支柱、受众问题库、选题评分标准、各渠道格式、事实核验流程、品牌语气检查、发布节奏和复盘指标。\n\n先输出 4 周内容地图，再为最高优先级选题制作内容简报。不要生成缺少真实经验或证据支持的空泛观点。`,
  },
  {
    slug: 'data-analysis',
    title: '别让数据瞎说，先把分析想清楚',
    role: '数据分析师',
    category: '数据分析',
    level: '专家',
    model: 'GPT-5.6 Sol / Gemini 3.1 Pro',
    summary: '先定义指标和分析陷阱，再生成分析步骤、SQL 结构与决策解释。',
    template: `担任高级数据科学家。围绕 {{业务问题}} 设计分析计划。\n\n数据说明：{{表、字段、时间范围、采集方式}}\n决策人：{{受众}}\n可能采取的行动：{{行动}}\n\n先检查：指标定义、样本选择、缺失值、幸存者偏差、时间泄漏、混杂变量和统计功效。\n再提供：分析假设、所需数据、清洗步骤、指标口径、分群、SQL/伪代码、可视化、敏感性分析和结论模板。\n\n不要把相关性描述成因果关系；无法支持决策时明确说明还缺什么。`,
  },
];

export const roles = [
  {
    slug: 'developers',
    name: '程序员奴隶',
    summary: '从需求、架构到测试与交付，建立可审计的 AI 开发流程。',
    tasks: ['架构设计', '代码生成', '调试定位', '测试与审查'],
    stack: 'GPT-5.6 Sol + Claude Sonnet 4.6',
  },
  {
    slug: 'founders',
    name: '创业者与农场主',
    summary: '加速市场验证、战略决策、产品规划和组织运营。',
    tasks: ['机会验证', '竞品研究', 'MVP 规划', '决策备忘录'],
    stack: 'Claude Opus 5 + Grok 4.6',
  },
  {
    slug: 'product',
    name: '产品奴隶',
    summary: '把用户证据转成清晰需求、原型和可衡量的迭代。',
    tasks: ['需求研究', 'PRD', '原型评审', '数据复盘'],
    stack: 'Claude Sonnet 4.6 + Gemini 3.1 Pro',
  },
  {
    slug: 'marketing',
    name: '市场运营奴隶',
    summary: '建立洞察、内容、渠道实验和增长复盘闭环。',
    tasks: ['受众洞察', '内容系统', '增长实验', '运营自动化'],
    stack: 'Gemini 3.1 Pro + Claude Sonnet 4.6',
  },
  {
    slug: 'research',
    name: '研究奴隶',
    summary: '用来源透明、事实可核验的方法完成检索、分析与写作。',
    tasks: ['文献检索', '证据综合', '研究设计', '论文审阅'],
    stack: 'Claude Opus 5 + Grok 4.6',
  },
  {
    slug: 'design',
    name: '设计奴隶',
    summary: '从创意发散到设计评审，提高产出速度而不牺牲判断。',
    tasks: ['创意简报', '用户旅程', '视觉方向', '可用性评审'],
    stack: 'Gemini 3.1 Pro + Claude Sonnet 4.6',
  },
  {
    slug: 'sales',
    name: '销售客服奴隶',
    summary: '准备客户研究、个性化沟通、异议处理和知识库。',
    tasks: ['客户研究', '销售提案', '异议处理', '客服质检'],
    stack: 'Claude Sonnet 4.6 + Command A+',
  },
  {
    slug: 'analysts',
    name: '数据奴隶',
    summary: '从指标定义、SQL 到解释和决策建议的严谨分析。',
    tasks: ['指标设计', 'SQL 分析', '异常调查', '决策解释'],
    stack: 'GPT-5.6 Sol + Gemini 3.1 Pro',
  },
];

export const workflows = [
  {
    slug: 'idea-to-mvp',
    title: '一个点子，怎么折腾成能验证的 MVP',
    role: '创业者',
    duration: '7–21 天',
    tools: '5 个环节',
    outcome: '验证报告、PRD、原型与上线计划',
    steps: [
      '列出关键假设',
      '市场与竞品研究',
      '用户访谈',
      '定义 MVP',
      '制定验证指标',
    ],
  },
  {
    slug: 'production-feature',
    title: '需求说不清，也得硬着头皮做到上线',
    role: '程序员奴隶',
    duration: '1–10 天',
    tools: '7 个环节',
    outcome: '代码、测试、文档与发布检查表',
    steps: ['需求澄清', '架构方案', '任务拆分', '实现与自检', '测试和代码审查'],
  },
  {
    slug: 'deep-research',
    title: '别只会搜，做一份能查证的研究报告',
    role: '研究奴隶',
    duration: '2–8 小时',
    tools: '6 个环节',
    outcome: '含来源、置信度和缺口的研究报告',
    steps: ['定义问题', '制定来源策略', '并行检索', '证据分级', '综合与反证'],
  },
  {
    slug: 'content-engine',
    title: '一份内容，拆成一周到处发',
    role: '市场运营奴隶',
    duration: '3–5 小时',
    tools: '5 个环节',
    outcome: '内容地图、成稿、视觉简报与复盘表',
    steps: ['受众问题库', '选题评分', '内容简报', '多渠道改写', '质量检查'],
  },
  {
    slug: 'company-knowledge',
    title: '把公司散落的文档喂成一个知识库',
    role: '农场主',
    duration: '2–6 周',
    tools: '8 个环节',
    outcome: '可追溯、分权限的内部知识助手',
    steps: ['信息盘点', '权限设计', '内容清洗', '检索架构', '评测与上线'],
  },
  {
    slug: 'analytics-brief',
    title: '从一堆表格，熬成农场主能看懂的简报',
    role: '数据奴隶',
    duration: '2–6 小时',
    tools: '6 个环节',
    outcome: '分析结果、图表、风险与决策建议',
    steps: ['定义决策', '检查数据', '执行分析', '敏感性测试', '生成简报'],
  },
];

export const updates = [
  {
    date: '2026-09-01',
    type: '榜单',
    title: '今天谁最能打，榜单又对了一遍',
    detail: '同步能力、速度、价格和上下文数据，保留原始来源。',
    level: 'A 级来源',
  },
  {
    date: '2026-08-31',
    type: '模型',
    title: 'Claude Opus 5 档案补齐了，省得四处找',
    detail: '补充不同推理强度、成本和适用场景说明。',
    level: '官方资料',
  },
  {
    date: '2026-08-29',
    type: 'Prompt',
    title: '架构评审 Prompt 上线，先替代码上个保险',
    detail: '包含风险分级、验证指标、实施计划和回滚要求。',
    level: '编辑审核',
  },
  {
    date: '2026-08-28',
    type: '价格',
    title: 'API 价格又核了一遍，别被账单吓到',
    detail: '检查输入、输出、缓存和批处理价格变化。',
    level: '官方资料',
  },
  {
    date: '2026-08-27',
    type: '榜单',
    title: 'LMArena 榜单存档，方便以后翻旧账',
    detail: '保存排名、置信区间和来源版本，供趋势分析。',
    level: 'A 级来源',
  },
  {
    date: '2026-08-25',
    type: '工作流',
    title: '创业验证流程加了刹车，点子不行就早点停',
    detail: '增加停止条件、反方证据和 7 天验证实验。',
    level: '编辑审核',
  },
];

export const rankingSources = [
  {
    name: 'Artificial Analysis',
    use: '综合能力、速度、延迟与价格',
    cadence: '每日',
    grade: 'A',
    url: 'https://artificialanalysis.ai/leaderboards/models',
  },
  {
    name: 'LMArena',
    use: '真实用户匿名对比偏好',
    cadence: '每 3 小时',
    grade: 'A',
    url: 'https://lmarena.ai/leaderboard/text',
  },
  {
    name: 'LiveBench',
    use: '持续更新、可验证答案的能力评测',
    cadence: '每日',
    grade: 'A',
    url: 'https://livebench.ai/',
  },
  {
    name: 'SWE-bench',
    use: '真实软件问题解决能力',
    cadence: '每日',
    grade: 'A',
    url: 'https://www.swebench.com/',
  },
  {
    name: '厂商官方文档',
    use: '模型规格、价格、渠道与版本',
    cadence: '每 30 分钟',
    grade: 'A',
    url: '#',
  },
];
