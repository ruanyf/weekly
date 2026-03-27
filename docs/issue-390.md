# 科技爱好者周刊（第 390 期）：没有语料，大模型就是智障

这里记录每周值得分享的科技内容，周五发布。

本杂志[开源](https://github.com/ruanyf/weekly)，欢迎[投稿](https://github.com/ruanyf/weekly/issues)。另有[《谁在招人》](https://github.com/ruanyf/weekly/issues/9088)服务，发布程序员招聘信息。合作请[邮件联系](mailto:yifeng.ruan@gmail.com)（yifeng.ruan@gmail.com）。

## 封面图

![](https://cdn.beekka.com/blogimg/asset/202603/bg2026032201.webp)

山东日照某住宅小区的彩色风雨连廊，入口处树林还设了咖啡馆。（[via](https://mooool.com/coffee-tree-canopy-by-selgascano.html)）

## 没有语料，大模型就是智障

如果现在做一个问卷调查，问大家“你觉得大模型是否具有智能？”

我相信，大多数人会是肯定的回答。

哪怕现在只是 AI 的初级阶段，大模型已经能够替代很多的人类智力劳动，确实非常神奇。

但是，我们不要忘记真实情况，**大模型不是魔法，更不是具有自主智能的“硅基智能体”，而是基于统计规律的语言模型**，它的一切行为都基于数学计算。

最好的证据就是，如果让它解决没有训练过的题目，也就是不存在统计规律的话，它根本解不出来。

这就是我今天想分享的一个[实验](https://esolang-bench.vercel.app/)。

![](https://cdn.beekka.com/blogimg/asset/202603/bg2026032008.webp)

两位国外的研究者找了五个主流的大模型：GPT-5.2、O4-mini、Gemini 3 Pro、Qwen3-235B、Kimi K2。

他们让大模型使用五种小众的编程语言——Brainfuck、Befunge-98、Whitespace、Unlambda 和 Shakespeare——来编程解决各种问题。

这些小众语言的共同特征是，网上很少有它们的资料，因此不能用来训练大模型。大家猜猜看，结果怎么样？

实验结果用一句话总结，就是大模型的表现一塌糊涂。

这五个大模型的平均答题正确率仅为3.8%，即**100道题可以答对3.8道**。相比之下，它们处理 Python 问题的正确率可以达到90%。

更尴尬的是，仅有的那几道答对的题目，都是入门级。更难的级别（初级、中级、高级），所有五个大模型的正确率都为0。

这个实验充分说明了，**大模型的表现（智能程度）首先由训练材料决定**：训练的语料越多，表现越好，比如 Python 的语料遍地都是，大模型因此极其擅长解决 Python 问题；训练的语料越少，大模型表现就越差，简直跟智障一样，没什么用处。

那么，一个让人好奇的问题就来了：如果某种冷门语言没有语料，但有一本很详尽的《使用手册》，我们让大模型学习这本手册，它是否就能学会这种冷门语言编程呢？

## MAI-Image-2

本周，微软公司发布了自家的图像生成模型 [MAI-Image-2](https://microsoft.ai/news/introducing-MAI-Image-2/)。

这个模型生成的图像质量非常高，有[评论](https://decrypt.co/361791/microsoft-mai-image-2-text-image-model-review)认为，目前仅次于谷歌的 nano-banana-2。

微软开放了网站 [MAI Playground](https://playground.microsoft.ai/chat)（下图），现在可以免费生成图片。

![](https://cdn.beekka.com/blogimg/asset/202603/bg2026032009.webp)

我试用后，图像质感确实很好，非常逼真。比如，一只狗在海里骑自行车。

![](https://cdn.beekka.com/blogimg/asset/202603/bg2026032010.webp)

但是，它的使用限制很多：（1）有争议的、可能冒犯的图片，都会拒绝生成；（2）每天的免费额度是15张，每次生成的间隔时间是30秒；（3）它只能生成长宽比 1:1 的图片，其他分辨率都不支持；（4）不提供图像编辑和加工，只能用来“文生图”。

如果你需要通过文本生成高质量图片，可以试试它。

## 科技动态

1、[可玩的封面](https://www.yankodesign.com/2026/03/16/red-bull-just-put-a-playable-tetris-game-on-a-magazine-cover/)

红牛公司推出了一本纸质的游戏杂志《GamePop》。

![](https://cdn.beekka.com/blogimg/asset/202603/bg2026032002.webp)

它的封面有一个可以玩的“俄罗斯方块”，是世界首本封面可以玩游戏的书。

![](https://cdn.beekka.com/blogimg/asset/202603/bg2026032003.webp)

![](https://cdn.beekka.com/blogimg/asset/202603/bg2026032004.webp)

奥秘就是封面里面，嵌入了一块非常薄的柔性电路板。

![](https://cdn.beekka.com/blogimg/asset/202603/bg2026032005.webp)

这块板配备了180个 RGB LED 灯、7个电容式触摸按钮、一颗32位 ARM 芯片。

![](https://cdn.beekka.com/blogimg/asset/202603/bg2026032006.webp)

它还包含一块可充电电池，可以通过 Type-C 充电。

![](https://cdn.beekka.com/blogimg/asset/202603/bg2026032007.webp)

可惜的是，这个封面是限量版，不公开出售。它得到了俄罗斯方块公司的官方授权，全球仅发行150套，每套均有独立编号。

2、[收费的真人客服](https://arstechnica.com/gadgets/2025/02/misguided-hp-customer-support-approach-included-forced-15-minute-call-wait-times/)

企业都不喜欢提供真人的电话客服，因为成本很高，更希望改成机器应答的电话客服。

惠普公司想出了一个点子，将用户往机器客服赶。

![](https://cdn.beekka.com/blogimg/asset/202603/bg2026032203.webp)

用户打惠普的客服电话，会听到一段语音提示，要你访问官网自己去寻找答案。如果你坚持要真人客服，就要在线等待15分钟。

如果中途挂了电话，再打就需要重新等待15分钟。系统还会分别在第5、第10和第13分钟提醒你，可以访问网站或发邮件联系。

虽然这种做法很可恶，但未来可能成为常态：免费就只有 AI 客服或机器人客服，额外付费才有真人客服。

3、[飞盘的玩法](https://arstechnica.com/science/2024/10/how-physics-can-improve-your-disc-golf-game/)

怎样扔飞盘，才能又快又远？

一个美国的物理学家，找了几十个学生进行实验，使用不同手势和角度扔出飞盘。他测量了飞行速度和扭矩，把结果写成了论文。

![](https://cdn.beekka.com/blogimg/asset/202411/bg2024110510.webp)

他发现，将拇指放置在距飞盘外缘约3厘米的位置，可以获得平均转速和初始速度的最佳结果。

![](https://cdn.beekka.com/blogimg/asset/202411/bg2024110511.webp)

他还发现，转速与初始速度存在线性相关，转速越高，初始速度也越高。

所以，下次玩飞盘的时候，你要放对拇指的位置，然后用足力气，反手甩出，就可以取得最佳结果。

## 文章

1、[MkDocs 的缓慢崩溃](https://fpgmaas.com/blog/collapse-of-mkdocs/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202603/bg2026032304.webp)

[MkDocs](https://www.mkdocs.org/) 是著名的文档网站生成工具，但是主要贡献者之间有激烈矛盾，互相对抗，导致这个项目四分五裂。本文就梳理这件事。

2、[大模型预测咖啡散热](https://dynomight.net/coffee/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202603/bg2026032306.webp)

作者让各种大模型给出咖啡散热时间的公式，然后测量了实际的散热时间，得到了一个排行榜。

3、[下一个 App 很可能是无头应用](https://tuananh.net/2026/03/18/why-your-next-mobile-app-is-probably-headless/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202603/bg2026032202.webp)

如果我们未来都通过 AI 助手使用手机，那么各种 App 就不需要显示模块了（无头），只需向 AI 助手提供数据接口。

4、[网页前端数据压缩的一种方法](https://jstrieb.github.io/posts/canvas-compress/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202602/bg2026022105.webp)

本文介绍如何在前端，通过 canvas（画布）将数据压缩成一张图片。

5、[Ruby 是构建 AI 应用的最佳语言](https://paolino.me/ruby-is-the-best-language-for-ai-apps/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202602/bg2026022406.webp)

作者使用 Python、JavaScript、Ruby 三种语言写一个 AI Agent，比较后认为 Ruby 写 AI 应用最方便。

6、[古罗马的混凝土建筑](https://unchartedterritories.tomaspueyo.com/p/how-roman-technology-drove-its-architecture)（英文）

![](https://cdn.beekka.com/blogimg/asset/202603/bg2026032011.webp)

古罗马人发现了混凝土，学会了用它浇筑建筑物。结果就是，古罗马建筑有古代最大的室内面积，并且非常坚固，保留到了今天。

## 工具

1、[proxychains-rs](https://github.com/tianrking/proxychains-rs)

proxychains4 的 Rust 实现，指定某个进程走代理链。（[@tianrking](https://github.com/ruanyf/weekly/issues/9316) 投稿）

2、[Flare Stack Blog](https://github.com/du2333/flare-stack-blog)

![](https://cdn.beekka.com/blogimg/asset/202603/bg2026032001.webp)

一个基于 Cloudflare Worker 的博客系统，集成 D1、R2、KV、Workflow 等服务。（[@du2333](https://github.com/ruanyf/weekly/issues/9312) 投稿）

3、[Tunelo](https://github.com/jiweiyuan/tunelo)

一行命令将本地服务暴露到公网，只需要单个 4MB 二进制文件，使用 QUIC 协议。（[@jiweiyuan](https://github.com/ruanyf/weekly/issues/9328) 投稿）

4、[ReadAny](https://github.com/codedogQBY/ReadAny)

![](https://cdn.beekka.com/blogimg/asset/202603/bg2026032208.webp)

桌面端 + 安卓端的电子书阅读工具，自带 AI 功能、语音朗读和多端同步。（[@codedogQBY](https://github.com/ruanyf/weekly/issues/9342) 投稿）

5、[RaTeX](https://github.com/erweixin/RaTeX)

![](https://cdn.beekka.com/blogimg/asset/202603/bg2026032401.webp)

纯 Rust 实现的 KaTeX 兼容的数学渲染引擎，原生解析、排版 LaTeX 数学公式，支持各种环境。（[@erweixin](https://github.com/ruanyf/weekly/issues/9350) 投稿）

6、[Work Review](https://github.com/wm94i/Work_Review)

![](https://cdn.beekka.com/blogimg/asset/202603/bg2026032509.webp)

开源的 Win/Mac 桌面应用，在后台持续记录当天使用过的应用、访问过的网站等，便于整理成个人的工作轨迹。（[@wm94i](https://github.com/ruanyf/weekly/issues/9382) 投稿）

7、[Valdi](https://github.com/Snapchat/Valdi)

SnapChat 发布的 UI 框架，可以用类似 React 的语法编写组件，然后编译成 iOS、Android 和 macOS 的原生应用。

8、[Npflared](https://npflared.thomas-cogez.fr/index.html)

![](https://cdn.beekka.com/blogimg/asset/202412/bg2024122502.webp)

架设私有 NPM 镜像的工具，适合企业用来提供内部的 JS 软件包。

9、[Chokidar](https://github.com/paulmillr/chokidar)

一个 Node.js 模块，用来监听文件系统的各种事件（新增、删除、编辑等），比原生的 fs.watch / fs.watchFile 功能强。

## AI 相关

1、**微信的龙虾接口**

![](https://cdn.beekka.com/blogimg/asset/202603/bg2026032301.webp)

微信官方本周发布了龙虾接口，AI 机器人可以向微信发消息了。

很多项目利用这个接口做二次开发，便于各种 Bot 和 Agent 网关的接入。

- [wechat-rs-sdk](https://github.com/tianrking/weixin-agent-rs)（[@tianrking](https://github.com/ruanyf/weekly/issues/9343) 投稿）
- [WeChatBot](https://github.com/corespeed-io/wechatbot)（[@jiweiyuan](https://github.com/ruanyf/weekly/issues/9369) 投稿）
- [WeClaw](https://github.com/fastclaw-ai/weclaw)（[@idoubi](https://github.com/ruanyf/weekly/issues/9347) 投稿）
- [WeChat-Channel](https://github.com/nanbingxyz/wechat-channel)（[@nanbingxyz](https://github.com/ruanyf/weekly/issues/9357) 投稿）

2、[AI CLI Complete Notify](https://github.com/ZekerTop/ai-cli-complete-notify)

![](https://cdn.beekka.com/blogimg/asset/202603/bg2026032303.webp)

跨平台桌面应用，AI 命令行任务（Claude code/Codex/Gemini）完成后，发出任务完成提醒，支持各种渠道（飞书/钉钉/企微 Webhook、Telegram、邮件、桌面/声音提示）。（[@ZekerTop](https://github.com/ruanyf/weekly/issues/9348) 投稿）

3、[Claude Config Manager](https://github.com/Daydayoneup/ccm)

![](https://cdn.beekka.com/blogimg/asset/202603/bg2026032501.webp)

macOS 的 Claude 资源（Skills、MCP、Agent）桌面管理工具，提供一个图形化的中央控制台。（[@Daydayoneup](https://github.com/ruanyf/weekly/issues/9370) 投稿）

4、[TrustClaw](https://www.trustclaw.app/)

![](https://cdn.beekka.com/blogimg/asset/202603/bg2026032305.webp)

龙虾 OpenClaw 的修改版，尽量消除代码的风险点。

## 资源

1、[Project N.O.M.A.D.](https://github.com/Crosstalk-Solutions/project-nomad)

![](https://cdn.beekka.com/blogimg/asset/202603/bg2026032302.webp)

一个 Linux 应用，集成了各种人类知识（维基百科、全球地图、在线课程、本地 AI 助手）等等，用于在断网时查阅。（[@15x3](https://github.com/ruanyf/weekly/issues/9345) 投稿）

2、[用于数据分析的 AI Coding Agent](https://simonw.github.io/nicar-2026-coding-agents/index.html)（英文）

![](https://cdn.beekka.com/blogimg/asset/202603/bg2026032204.webp)

著名开发者 Simon Willison 的培训班讲课资料，通过 AI 工具进行数据分析，有详细步骤。

3、[TypeScript 简洁之书](https://gibbok.github.io/typescript-book/zh-cn/book/the-concise-typescript-book/)

![](https://cdn.beekka.com/blogimg/asset/202601/bg2026011203.webp)

一本开源的 TypeScript 教程，有中文版。

## 图片

1、[苹果壁纸彩蛋](https://www.macworld.com/article/3079526/easter-egg-hiding-in-macbook-neos-wallpaper.html)

苹果公司最近发布了新笔记本 MacBook Neo，跟以前一样，配一张特别的壁纸。

![](https://cdn.beekka.com/blogimg/asset/202603/bg2026032502.webp)

壁纸里面嵌入了产品名，以前的壁纸也有这个彩蛋。

iMac

![](https://cdn.beekka.com/blogimg/asset/202603/bg2026032503.webp)

MacBook Pro

![](https://cdn.beekka.com/blogimg/asset/202603/bg2026032504.webp)

iPad Air

![](https://cdn.beekka.com/blogimg/asset/202603/bg2026032505.webp)

MacBook Air

![](https://cdn.beekka.com/blogimg/asset/202603/bg2026032507.webp)

iPad Mini

![](https://cdn.beekka.com/blogimg/asset/202603/bg2026032506.webp)

iPad Pro

![](https://cdn.beekka.com/blogimg/asset/202603/bg2026032508.webp)

1、[儿童死亡率](https://kottke.org/25/12/an-astonishing-graph)

现代人很难想象的是，人类历史的大部分时间里，儿童死亡率（在成年前死亡）一直接近50%。

![](https://cdn.beekka.com/blogimg/asset/202512/bg2025120307.webp)

上图中，红线就是婴儿死亡率，一直稳定在50%左右。直到19世纪后期，才开始快速下降。

2020年，全球平均婴儿死亡率是4.3%，最低的国家已经达到了0.3%。

## 文摘

1、[别变成机器](https://blog.armeet.ca/becoming-the-machine/)

我最近看到一句话：“只有奴隶才通过生产力来量化自身的存在价值。”

是啊，生产力越高，奴隶越有价值。

这让我想到，如今的社交媒体上充斥着大量的奋斗文化，许多人展示自己是多么努力在提高个人生产力。

在我看来，这就是将自己跟机器做比较。大家认定，如果能像机器一样，接收指令并高效地完成某个目标，自己就越有价值，就能取得人生成功。

社交媒体上，这种“奋斗文化”有很多表现形式：（1）你还不够努力。（2）你得早上五点起床。（3）你得第一个到，最后一个走。

这种文化的背后，**就是要求人变成机器**。

机器确实很高效，但有一个问题：它是刚性的，以既定的模式和线性速度运转，无法自动适应环境变化，也无法学习游戏规则。

你不是机器，你是人。**你的特点应该是灵活应变，快速适应**。你不要追求极致的努力，而是要找到最有价值的解决方案。你要专注于真正重要的因素：速度、效率或质量，不要迷恋枯燥乏味的工作。

## 言论

1、

我们创造了一个文明，其中最重要的元素都深深地依赖于科学技术，但是我们还让科学技术变得如此难懂。这会带来灾难，我们可能暂时侥幸逃脱，但迟早，这种无知和权力的易燃混合物会爆炸。

-- [卡尔·萨根](https://www.openculture.com/2025/02/carl-sagan-predicts-the-decline-of-america-unable-to-know-whats-true.html)

2、

巴黎以前总是堵车，市长想出一个办法，大幅减少停车位，后来果然少有人开车了。

-- [CNN](https://edition.cnn.com/2026/03/21/travel/paris-transformation-anne-hidalgo-mayor)

3、

一项研究发现，远程教学下，外形出众学生的作业成绩，要比面对面教学时更低。

-- [《经济学快报》](https://www.sciencedirect.com/science/article/pii/S016517652200283X)

4、

这些年对我影响最大的事情，就是我变成了一个“白天型”的人。

我以前经常熬夜，有时会到天亮。最近五年，我强迫自己养成早起的习惯。现在，我的生活都在白天，亲眼看到黎明和黄昏，让我感到心安，生命与自然循环和谐一致。

-- [《成为一个白天生活的人》](https://herman.bearblog.dev/becoming-a-day-person/)

5、

AI 很擅长将清晰的想法转化为可运行的代码。真正耗时的是弄清楚我到底想开发什么。

-- [lustin.fr](https://lustin.fr/blog/building-digs/)

## 往年回顾

[如何阻止 AI 爬虫](https://www.ruanyifeng.com/blog/2025/03/weekly-issue-343.html)（#343）

[一周是一年的2%](https://www.ruanyifeng.com/blog/2024/03/weekly-issue-293.html)（#293）

[与孔子 AI 聊天](https://www.ruanyifeng.com/blog/2023/02/weekly-issue-243.html)（#243）

[前端与后端，谁更难？](https://www.ruanyifeng.com/blog/2022/01/weekly-issue-193.html)（#193）

（完）

