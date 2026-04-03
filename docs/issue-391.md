# 科技爱好者周刊（第 391 期）：AI 的贫富分化

这里记录每周值得分享的科技内容，周五发布。

本杂志[开源](https://github.com/ruanyf/weekly)，欢迎[投稿](https://github.com/ruanyf/weekly/issues)。另有[《谁在招人》](https://github.com/ruanyf/weekly/issues/9454)服务，发布程序员招聘信息。合作请[邮件联系](mailto:yifeng.ruan@gmail.com)（yifeng.ruan@gmail.com）。

## 封面图

![](https://cdn.beekka.com/blogimg/asset/202604/bg2026040107.webp)

上海某餐厅的墙壁装饰。（via [monana3838@Threads](https://www.threads.com/@monana3838/post/DWjVcmcAoh4)）

## AI 的贫富分化

我越来越觉得，AI 跟其他技术不一样，不仅带来技术变革，还会带来社会变革。

简单说，AI 会带来贫富分化。

其他技术实际上会消灭贫富分化，实现“消费者平等”，即穷人和富人消费的东西是一样的。

比如，大家喝一样的可口可乐，用一样的苹果手机，开一样的特斯拉。甚至互联网也是如此，世界首富马斯克和你用一样的网站、一样的手机 App。

但是，AI 模型不是这样。**在大模型面前，穷人和富人是不平等的**。

在未来，普通人肯定用不起顶级的大模型。其实，现在就是如此了，最贵的 AI 编程套餐是 Claude Code 的 Max 套餐，月费200美元，很多人已经用不起了。

OpenAI 曾经设想过[月费2万美元的套餐](https://www.thepaper.cn/newsDetail_forward_30320495)，提供最顶级、无限量的大模型服务。

![](https://cdn.beekka.com/blogimg/asset/202603/bg2026032207.webp)

要是真的推出，只有富豪才用得起。

这反映了一个简单的事实：**费用越贵，模型效果越好**。因为模型的效果与算力相关，更多的算力、更大的上下文、更多的参数，都需要钱。

这跟工业品完全相反。工业品有规模效应，产量越高，单位成本越低。一旦大规模生产，价格就会越来越便宜。

但是，**大模型不存在规模效应**，模型的大规模生产需要更多的服务器，这并不会让单位成本降低，反而可能因为扩建机房，改造电路和水路，而变得更贵。

未来社会大概是这样的：富人和穷人用不同的模型。最顶级模型的服务——规划、咨询、生成内容、自动化……——需要支付高昂的使用费，而普通人就使用免费模型，效果当然也很普通。

不过，我也看到马斯克[最近说](https://wap.cj.sina.cn/7x24/4762771)，未来还有另一种可能。

![](https://cdn.beekka.com/blogimg/asset/202603/bg2026032206.webp)

他的意思是，算力本质上是能源转化的一种形式。人类最终会实现廉价能源的大量供应（空间太阳能？），所以算力将变得足够便宜，所有人都将用最好的模型。

可能吗？我不知道，感觉还是前一种情况更现实。

## 模型能力的一种衡量方法

怎么衡量大模型的能力？

现在的方法是使用一个测试集，去计算大模型的分数。它的缺点是，只能用于横向比较，很难衡量进步速度。

最近，一篇论文提出了[一种新的衡量方法](https://emptysqua.re/blog/review-measuring-ai-ability-to-complete-long-software-tasks/)。

科学家首先计算，人类完成某一项任务需要多少时间。比如，计算 4 + 5 + 7，人类需要2秒，而计算 37 * 52 * 19，可能需要1分钟。

然后，测试大模型能否以50%的成功率完成这项任务。

研究发现，GPT-2 以50%成功率能够完成的任务，时间范围是两秒；Claude 3.7 Sonnet 是50分钟；O3 接近两小时；Opus 4.6 约为12小时。

也就是说，人类需要12小时才能完成的任务，Opus 4.6 的成功概率是50%。

![](https://cdn.beekka.com/blogimg/asset/202604/bg2026040201.webp)

结果就是上图，可以发现，大模型的进化速度在对数坐标下是一根直线。

**每7个月，大模型能够以50%成功率完成的任务，时间范围扩大一倍**。按照这个趋势，大模型将在2027年至2031年间，以50%的成功率完成人类专家需要一个月才能完成的任务。

如果这篇论文正确，就意味着年底发布的模型，将比年初强一倍。

## 科技动态

1、[用户协议的彩蛋](https://www.cape.co/blog/easter-egg-in-privacy-policy)

软件服务的用户协议，又长又难懂，很少有用户阅读，但是里面有很多重要内容。

一家美国通信运营商，为了表示自己很重视用户权益，鼓励大家阅读《用户协议》，并偷偷在里面加入了一个彩蛋。

![](https://cdn.beekka.com/blogimg/asset/202603/bg2026033101.webp)

上图高亮的句子写道：“如果你读到这句话，请发邮件到我们的信箱，赢取免费的瑞士旅游。”

上线二周后，才有人发邮件，询问这事是否真实。由于只有一个人来信，所以她就免费去瑞士了。

从这件事可以看出，即使有彩蛋，也没人阅读《用户协议》。我现在的做法是让大模型帮忙，询问“这份协议有哪些对用户不利的地方”，很快就得到了答案。

2、[触摸屏指甲油](https://www.livescience.com/chemistry/chemistry-student-develops-clear-polish-that-turns-your-fingernail-into-a-touch-screen-stylus)

广泛使用的电容式触摸屏，有一个问题，就是戴手套使用会失灵。

原因是它要求触摸物（比如手指）必须导电，这样屏幕才会产生电场扰动，从而确定触摸的位置。

![](https://cdn.beekka.com/blogimg/asset/202603/bg2026032802.webp)

解决方法也很简单，就是在手套指尖涂一层指甲油，指甲油里面的金属碎屑可以导电。

美国的一名化学系本科生，在学习化妆品化学时，发明了一种改进型的透明指甲油，专门用于戴手套使用触摸屏。

这种指甲油是透明的，涂在手套上看不见，也可以涂在裸甲上，当作抛光剂。

3、[Copilot 广告](https://www.theregister.com/2026/03/30/github_copilot_ads_pull_requests/)

Copilot 是 GitHub 推出的 AI 助手，上周有用户发现，它会自动插入广告。

![](https://cdn.beekka.com/blogimg/asset/202604/bg2026040106.webp)

上图是 Copilot 自动提交的[一个 Pull Request](https://github.com/rab781/RabTradebot/pull/77)，它在提交说明的结尾（红框处）加入了一个广告，介绍应用程序 Raycast。

在 GitHub [搜索一下](https://github.com/search?q=%22%E2%9A%A1+Quickly+spin+up+copilot+coding+tasks%22&type=pullrequests)，就会发现已经有超过11,400个 PR 都包含了相同的广告词。

经过用户抗议，GitHub 暂止停止了这个功能。但这是一个危险的信号，表示 GitHub 想利用用户增加收入。

## 文章

1、[小米 MiMo v2 Pro 评测](https://decrypt.co/362633/xiaomi-mimo-v2-pro-review-so-good-mistaken-deepseek-v4)（英文）

![](https://cdn.beekka.com/blogimg/asset/202603/bg2026033002.webp)

小米发布了 MiMo V2 系列大模型，本文是国外媒体的评测，给出了很高的评价。

2、[我用 AI 生成了一个 JavaScript 引擎](https://p.ocmatos.com/blog/jsse-a-javascript-engine-built-by-an-agent.html)（英文）

![](https://cdn.beekka.com/blogimg/asset/202604/bg2026040105.webp)

作者用六周时间，生成了一个100%通过 test262 测试集的 JavaScript 引擎，涵盖所有98,426个场景。本文是对这件事的介绍。

3、[解剖 .claude/ 目录](https://blog.dailydoseofds.com/p/anatomy-of-the-claude-folder)（英文）

![](https://cdn.beekka.com/blogimg/asset/202603/bg2026033114.webp)

Claude Code 会生成 .claude/ 子目录，所有 AI 处理的底层数据都放在里面，本文研究这个目录到底有什么。

4、[一致性哈希介绍](https://eli.thegreenplace.net/2025/consistent-hashing)（英文）

![](https://cdn.beekka.com/blogimg/asset/202510/bg2025102001.webp)

一致性哈希（Consistent hashing）是一种缓存定位算法，在增加或减少缓存服务器的情况下，可以不改变缓存所在的原始位置。

5、 [笔记本如何用作单板计算机的 HDMI 显示器](https://danielmangum.com/posts/laptop-hdmi-monitor-sbc/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202510/bg2025101009.webp)

作者使用一张 HDMI 转 USB 采集卡，将笔记本电脑用作树莓派的显示器。

## 工具

1、[EmDash](https://github.com/emdash-cms/emdash)

![](https://cdn.beekka.com/blogimg/asset/202604/bg2026040202.webp)

AI 生成的 WordPress 复刻，基于 TypeScript 语言，支持插件，据说功能基本一样，参见[介绍文章](https://blog.cloudflare.com/emdash-wordpress/)。

2、[SubsTracker](https://github.com/wangwangit/SubsTracker)

![](https://cdn.beekka.com/blogimg/asset/202603/bg2026032706.webp)

基于 Cloudflare Workers 的订阅管理系统，可以发送各种订阅的到期通知，通过 Telegram、Webhook 等通知渠道。（[@wangwangit](https://github.com/ruanyf/weekly/issues/9411) 投稿）

3、[OpeniLink Hub](https://github.com/openilink/openilink-hub)

![](https://cdn.beekka.com/blogimg/asset/202603/bg2026032705.webp)

开源的微信机器人消息管理平台，自带应用市场，通过点击安装应用，给微信 Bot 加功能。（[@xixihhhh](https://github.com/ruanyf/weekly/issues/9404) 投稿）

另有一个类似项目 [wxWebHook](https://github.com/aristorechina/wxWebHook)，通过 WebHook 向微信用户发消息。（[@aristorechina](https://github.com/ruanyf/weekly/issues/9412) 投稿）

![](https://cdn.beekka.com/blogimg/asset/202603/bg2026032707.webp)

4、[Lixian.Online](https://lixian.online/)

![](https://cdn.beekka.com/blogimg/asset/202603/bg2026033115.webp)

获取 VSCode 插件、Chrome 扩展和 Docker 镜像的离线安装包的工具，[代码开源](https://github.com/LiaoGuoYin/lixian.online)。（[@LiaoGuoYin](https://github.com/ruanyf/weekly/issues/9455) 投稿）

5、[Rename.Tools](https://rename.tools/zh/app)

![](https://cdn.beekka.com/blogimg/asset/202603/bg2026033116.webp)

浏览器端的批量文件重命名工具，支持各种规则设定，[代码开源](https://github.com/chenz24/rename.tools)。（[@chenz24](https://github.com/ruanyf/weekly/issues/9461) 投稿）

6、[FontInAss](https://github.com/Yuri-NagaSaki/FontInAss)

![](https://cdn.beekka.com/blogimg/asset/202603/bg2026033117.webp)

开源的字幕字体子集化工具，将所需的字体字形嵌入字幕文件。（[@Yuri-NagaSaki](https://github.com/ruanyf/weekly/issues/9466) 投稿）

7、[pretext.video](https://github.com/fifteen42/pretext-video)

![](https://cdn.beekka.com/blogimg/asset/202604/bg2026040101.webp)

基于 [Pretext](https://github.com/chenglou/pretext)（文字排版计算库）的一个小应用，将摄像头捕捉的人体轮廓通过文字排版实时展示。（[@fifteen42](https://github.com/ruanyf/weekly/issues/9472) 投稿）

8、[OxideTerm](https://github.com/AnalyseDeCircuit/oxideterm)

![](https://cdn.beekka.com/blogimg/asset/202604/bg2026040103.webp)

基于 Rust 语言的跨平台 SSH 终端，功能较多，使用 Tauri 桌面框架。（[@AnalyseDeCircuit](https://github.com/ruanyf/weekly/issues/9474) 投稿）

9、[wtree](https://github.com/FatDoge/wtree)

![](https://cdn.beekka.com/blogimg/asset/202604/bg2026040104.webp)

git worktree 的图形化管理界面。（[@FatDoge](https://github.com/ruanyf/weekly/issues/9483) 投稿）

## AI 相关

1、[Open Agent SDK](https://github.com/shipany-ai/open-agent-sdk)

![](https://cdn.beekka.com/blogimg/asset/202604/bg2026040102.webp)

基于 Claude Code 源码实现的 claude-agent-sdk 的开源替代品，用于 AI Agent 的开发，完全兼容原始接口，不依赖本地 cli 进程。（[@idoubi](https://github.com/ruanyf/weekly/issues/9473) 投稿）

2、[Antigravity Gateway](https://github.com/Truthan49/Antigravity-Everywhere)

![](https://cdn.beekka.com/blogimg/asset/202603/bg2026032704.webp)

统一管理本地所有 AI 智能体的 Web 控制台，支持多工作区隔离、飞书远程协同、Skills 生态等。（[@Mr-ZhangBo](https://github.com/ruanyf/weekly/issues/9395) 投稿）

3、[ArcReel](https://github.com/ArcReel/ArcReel)

![](https://cdn.beekka.com/blogimg/asset/202603/bg2026032703.webp)

开源的 AI 视频生成工作台，输入一本小说，自动完成剧本、人物设计、分镜、短视频生成。（[@Pollo3470](https://github.com/ruanyf/weekly/issues/9393) 投稿）

4、[TermCanvas](https://github.com/blueberrycongee/termcanvas)

![](https://cdn.beekka.com/blogimg/asset/202603/bg2026033001.webp)

开源桌面应用，所有终端铺在无限画布上，方便管理 AI 编程工具。（[@blueberrycongee](https://github.com/ruanyf/weekly/issues/9434) 投稿）

另有一个类似项目 [OpenCove](https://github.com/DeadWaveWave/opencove)。（[@DeadWaveWave](https://github.com/ruanyf/weekly/issues/9497) 投稿）

![](https://cdn.beekka.com/blogimg/asset/202604/bg2026040204.webp)

## 资源

1、[Claude Code 动手教程](https://claude.nagdy.me/)

![](https://cdn.beekka.com/blogimg/asset/202603/bg2026033102.webp)

Claude Code 的互动式教程，通过11个小练习，掌握这个 AI 编程工具。

2、[Claude Code Unpacked](https://ccunpacked.dev/)

![](https://cdn.beekka.com/blogimg/asset/202604/bg2026040108.webp)

根据 Claude Code 泄漏的源码，一步步图解演示，输入提示词后软件内部如何处理。

3、[机器学习入门教程](https://github.com/dreddnafious/thereisnospoon/blob/main/ml-primer.md)

![](https://cdn.beekka.com/blogimg/asset/202603/bg2026033108.webp)

工程师的机器学习教程，解释基本概念。

## 图片

1、[欧洲年度树木](https://nicenews.com/environment/european-tree-of-the-year-winners-2026/)

欧洲有一个“欧洲年度树木”的评选，初听觉得很奇怪，但仔细一想，就会发现这个活动有很多好处：提高城市知名度，促进生态保护，推动旅游业……

下面就是今年的“欧洲年度树木”。

立陶宛鲁凯村的橡树，树龄400年。

![](https://cdn.beekka.com/blogimg/asset/202603/bg2026033103.webp)

以下是其他入围决赛的树木。

斯洛伐克的野生苹果树

![](https://cdn.beekka.com/blogimg/asset/202603/bg2026033104.webp)

波兰的榆树

![](https://cdn.beekka.com/blogimg/asset/202603/bg2026033105.webp)

拉脱维亚的菩提树

![](https://cdn.beekka.com/blogimg/asset/202603/bg2026033106.webp)

葡萄牙的柏树

![](https://cdn.beekka.com/blogimg/asset/202603/bg2026033107.webp)

## 文摘

1、[越使用 AI，我越不担忧](https://simonwillison.net/2025/Jul/4/identify-solve-verify/)

我花在 AI 编程的时间越多，对自己的职业生涯的担忧就越少，即使 AI 的编程能力越来越强。

因为，我发现 AI 编程只是流程的一部分，我的工作不仅仅是编写代码。

我的真正工作是，**找出可以用代码解决的问题，然后解决它们，并验证解决方案是否有效**。

AI 最终或许能够完全承担中间的编码部分，并帮助解决第一部分和最后一部分，但无论如何，仍然需要有人去发现问题、定义问题并确认问题已经得到解决。

这就是我的工作的80%内容。

2、[摩尔定律的不可持续性](https://bzolang.blog/p/the-unsustainability-of-moores-law)

摩尔定律指的是，大约每两年，芯片上的晶体管数量就会翻一番。

但是，它还有一个伴生效应，很少人提到。那就是，大约每五年，芯片工厂的建造成本就会翻一番，而能承担这种成本的芯片公司数量则会减半。

二十五年前，大约有40家公司，可以建造芯片工厂，每个工厂的建造成本约为20亿至40亿美元。如今，只剩下两家或三家芯片公司（数量取决于你对英特尔的乐观程度），可以建造最先进的芯片工厂，建造成本飙升到几百亿美元。

如果按照这种趋势再过10年，芯片工厂的建设成本继续翻倍飙升，也许只有一家公司或根本没有公司，能够负担这样的成本。

目前，芯片的制造工艺已经逼近1纳米，再往下发展，技术壁垒和资金壁垒将同时接近极限。

我预计，摩尔定律很快就会失效，未来增长主要在于算力，而不是单块芯片的计算能力。

未来的芯片将会像二手车，行驶速度都差不多，只是新旧差异。我甚至觉得，2035年生产的芯片和2065年生产的芯片之间，将几乎没有什么实质性区别。

## 言论

1、

源代码的 map 文件不小心发布到 npm，这种错误听起来似乎不可能，但当你意识到很大一部分代码库很可能是由你正在发布的 AI 编写的，一切就容易理解了。

-- [网友评论](https://alex000kim.com/posts/2026-03-31-claude-code-source-leak/) Claude Code 源码泄漏事件

2、

人工智能的蓬勃发展，使得某些办公室工作的需求可能并不大，而将创造大量电工、焊工和水管工的工作岗位。

以前，我们告诉所有年轻人去上大学，从事银行业、媒体或法律行业，现在需要平衡一下，有些人或许更适合做体力劳动者，在水暖工和电工这些领域，职业生涯同样可以很成功。

-- [拉里·芬克](https://www.bbc.com/news/articles/c9wqrdkx8ppo)，美国金融巨头贝莱德集团的老板

3、

写作的目的不在于写完，而在于增进你自己的理解，进而增进周围人的理解。

让 AI 为你写作，就像花钱请人为你健身一样。

-- [《别让 AI 替你写作》](https://alexhwoods.com/dont-let-ai-write-for-you/)

4、

程序员的工作不是编程，而是通过抽象，来管理软件的复杂性。如果你做到了这一点，那么编程就很容易了。

-- [《你的工作不是编程》](https://codeandcake.dev/posts/2025-12-12-your-job-isnt-programming)

## 往年回顾

[制造业正在“零工化”](https://www.ruanyifeng.com/blog/2025/04/weekly-issue-344.html)（#344）

[崖门海战的感想](https://www.ruanyifeng.com/blog/2024/03/weekly-issue-294.html)（#294）

[大数据已死](https://www.ruanyifeng.com/blog/2023/03/weekly-issue-244.html)（#244）

[悲观者正确，乐观者成功](https://www.ruanyifeng.com/blog/2022/02/weekly-issue-194.html)（#194）

（完）

