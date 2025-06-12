# 科技爱好者周刊（第 352 期）：Bug 追踪系统的正确样子

这里记录每周值得分享的科技内容，周五发布。

本杂志[开源](https://github.com/ruanyf/weekly)，欢迎[投稿](https://github.com/ruanyf/weekly/issues)。另有[《谁在招人》](https://github.com/ruanyf/weekly/issues/6965)服务，发布程序员招聘信息。合作请[邮件联系](mailto:yifeng.ruan@gmail.com)（yifeng.ruan@gmail.com）。

## 封面图

![](https://cdn.beekka.com/blogimg/asset/202506/bg2025060801.webp)

6月6日凌晨，太原基地发射的长征六号火箭，飞过西安城墙。（[via](http://news.cnwest.com/bwyc/a/2025/06/06/23130650.html)）

## Bug 追踪系统的正确样子

上周的话题是 [GitHub Issues](https://github.com/features/issues)，把它当作笔记工具，很强悍。

但是，有些话来不及说。**它的本职工作——Bug 追踪系统——并不好用**。

![](https://cdn.beekka.com/blogimg/asset/202506/bg2025060805.webp)

你用它来管理 Bug，就会发现有设计缺陷，用起来不顺手。

![](https://cdn.beekka.com/blogimg/asset/202506/bg2025060806.webp)

现在还活着的、历史最悠久的 Bug 追踪系统是 [Bugzilla](https://www.bugzilla.org/)。

它的一个早期工程师，前不久写了[一篇文章](https://www.bozemanpass.com/everythings-a-bug-or-an-issue/)，介绍 Bugzilla 的四条设计原则。

他说，只有满足这四点，才是一个好的 Bug 追踪系统（bug tracking system），我感到很有启发。

**（1）所有任务都要列入 Bug 追踪**。不仅包括代码 Bug，还包括待开发的新功能、缺失的文档、令人困惑的用户体验、糟糕的性能等等。

换言之，Bug 追踪系统本质是任务管理，应该当作项目管理系统来用。

**（2）Bug 的状态有多种，不只“打开”和“关闭”两种。**

大公司的 Bug 处理流程，可能很复杂，下面是一张从 [Bugzilla 文档](https://www.bugzilla.org/docs/3.6/en/html/lifecycle.html)拷贝的流程图。

![](https://cdn.beekka.com/blogimg/asset/202506/bg2025060807.webp)

Bug 追踪系统应该足够灵活，可以自定义优先级、严重程度、是否已分配、是否有依赖等等，以便适配各种流程。

**（3）每个 Bug 只能由一人负责。** 

这样才能明确责任，方便查看每个人正在做什么、接下来要做什么、以及最近做了什么。这也有利于培养开发者的归属感和成就感。

**（4）支持自定义视图。**

由于 Bug 有多种状态，追踪系统必须支持自定义视图查看，拥有强大的查询功能。

系统的默认视图：按照优先级，列出当前版本的所有没有关闭的 Bug。

开发者的个人视图：列出分配给他们的所有 Bug，同样按优先级排序。另外，用户可以保存自己的自定义视图。

以上四条，就是好的 Bug 追踪系统的标准。问题是 GitHub Issues 一条都没做到。

> 1. 项目管理功能太弱。
> 1. 状态只能靠标签。
> 1. 任务可以分配给多个人。
> 1. 视图默认按创建时间排序，且只能切换成标签视图。

在这方面，GitHub 甚至不如 Gitea。

举例来说，GitHub 没有办法让最重要的 Bug（P0 级别），自动出现在第一位（下图），除非手动置顶。

![](https://cdn.beekka.com/blogimg/asset/202506/bg2025060809.webp)

相比之下，Gitea（包括分叉的 Forgejo）提供了“[标签集](https://docs.gitea.com/administration/customizing-gitea#labels)”（label set），允许一个标签有多个值，并可以按同一个标签的值排序。

![](https://cdn.beekka.com/blogimg/asset/202506/bg2025060810.webp)

上图中，标签“Priority”（优先级）有多个值，然后系统允许按照 Priority 的值排序。

## [本周软件] 开源知识库 PandaWiki

小团队和个人，如何管理大量文档，搭建自己的知识库？

今天，介绍一个刚刚开源的知识库管理系统 [PandaWiki](https://github.com/chaitin/PandaWiki)。

![](https://cdn.beekka.com/blogimg/asset/202506/bg2025060601.webp)

它采用维基形式，可以随意编排文档，既能搭建传统的文档站，也能做成 FAQ 和博客。

**它原生支持 AI 创作、AI 问答、AI 搜索等能力**。你可以用自然语言跟知识库对话，也能使用嵌入模型，找出相关文档。

大家可以去 [Demo](http://47.96.9.75/) 体验一下，详细了解看[官方文档](https://pandawiki.docs.baizhi.cloud/)。

![](https://cdn.beekka.com/blogimg/asset/202506/bg2025060602.webp)

它的后端使用 Go 语言编写，速度非常快。安装使用 Docker，一行命令就能跑起来。

[代码库](https://github.com/chaitin/PandaWiki)放在 GitHub，可以从那里上手，目前已经有600多颗星星。

## 任正非专访

本周，《人民日报》头版刊登[任正非专访](https://finance.sina.com.cn/roll/2025-06-10/doc-inezpuqu9256330.shtml)。

下面是一些摘录。

（1）芯片问题其实没必要担心。我们单芯片还是落后美国一代，我们用数学补物理、非摩尔补摩尔，用群计算补单芯片，在结果上也能达到实用状况。

（2）软件是卡不住脖子的，那是数学的图形符号、代码，一些尖端的算子、算法垒起来的，没有阻拦索。困难在我们的教育培养、人才梯队的建设。

（3）当我国拥有一定经济实力的时候，要重视理论特别是基础理论的研究。如果不搞基础研究，就没根。即使叶茂，欣欣向荣，风一吹就会倒的。

（4）我们要理解支持搞理论工作的。理论科学家是孤独的，我们要有战略耐心，要理解他们。他们头脑中的符号、公式、思维，世界上能与他们沟通的只有几个人。对理论科学家要尊重，因为我们不懂他的文化，社会要宽容，国家要支持。

（5）买国外的产品很贵，因为价格里面就包含他们在基础研究上的投入。中国搞不搞基础研究，也要付钱的，能不能付给自己搞基础研究的人。

（6）华为一年1800亿投入研发，大概有600亿是做基础理论研究，不考核。1200亿左右投入产品研发，投入是要考核的。没有理论就没有突破，我们就赶不上美国。

（7）人工智能也许是人类社会最后一次技术革命，当然可能还有能源的核聚变。发展人工智能要有电力保障，中国的发电、电网传输都是非常好的，通信网络是世界最发达的，东数西算的理想是可能实现的。

（8）赞声与骂声，都不要在意，而要在乎自己能不能做好。把自己做好，就没有问题。

## 科技动态

（1）中国科大提出“[火星电池](https://www.guancha.cn/industry-science/2025_06_07_778547.shtml)”的方案。

![](https://cdn.beekka.com/blogimg/asset/202506/bg2025060705.webp)

这种电池可以在火星上，储存太阳能的发电，在夜间释放出来。

它的原理是，电解火星大气的二氧化碳，将其转为氧气和甲烷等燃料气体，在夜间再点燃发电。

（2）华为旗下的深圳引望公司，申请了一个“[可收纳方向盘](https://www.cnenergynews.cn/news/2025/06/09/detail_20250609215301.html)”专利。

![](https://cdn.beekka.com/blogimg/asset/202506/bg2025061003.webp)

根据描述，这个专利可以将方向盘折叠起来，放入操作台里面。

![](https://cdn.beekka.com/blogimg/asset/202506/bg2025061004.webp)

（3）瑞士建造了[世界最高的 3D 打印建筑](https://ethz.ch/en/news-and-events/eth-news/news/2025/05/from-confectioners-to-robots-tor-alva-in-mulegns-is-unveiled.html)：一个高达30米的观光塔，外形酷似当地的一种著名糖果。

![](https://cdn.beekka.com/blogimg/asset/202505/bg2025052704.webp)

为了增加承重能力，施工方采用了特制的混凝土材料。并且，增加了第二台机器，每打印20厘米，就往建筑物里面加入钢筋。

![](https://cdn.beekka.com/blogimg/asset/202506/bg2025060104.webp)

（4）苹果公司本周发布的新版 macOS，出现了一个细小的调整。

![](https://cdn.beekka.com/blogimg/asset/202506/bg2025061104.webp)

文件管理器 Finder 的图标[左右反转](https://512pixels.net/2025/06/wwdc25-macos-tahoe-breaks-decades-of-finder-history/)了，上图左是原来的图标，右是新版图标。目前不知道，为什么要这样反转。

## 文章

1、[过去半年的大模型回顾](https://simonwillison.net/2025/Jun/6/six-months-in-llms/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202506/bg2025060804.webp)

Simon Willison 点评过去半年的大模型，可以当成大事记来读。

AI 的进展实在太快，去年底的模型已经是上一代了。

2、[我使用 Claude Code Max 的感受](https://steipete.me/posts/2025/claude-code-is-my-computer)（英文）

![](https://cdn.beekka.com/blogimg/asset/202506/bg2025060405.webp)

作者购买了 Claude Code 的 Max 会员，一个月要200美元，使用后认为完全物有所值。

3、[速率限制交互式指南](https://blog.sagyamthapa.com.np/interactive-guide-to-rate-limiting)（英文）

![](https://cdn.beekka.com/blogimg/asset/202506/bg2025060701.webp)

如何限制访问速率？本文介绍了四种常用算法：令牌桶、漏水桶、固定窗口、滑动窗口。

4、[Amazon VPC 图解](https://www.ducktyped.org/p/why-is-it-called-a-cloud-if-its-not)（英文）

![](https://cdn.beekka.com/blogimg/asset/202506/bg2025060903.webp)

本文用插图解释，云服务器的虚拟私有网络（VPC，Virtual Private Cloud 的缩写）是什么。

5、[五个自搭建的书签服务](https://www.xda-developers.com/replacements-for-pocket-that-are-self-hosted/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202506/bg2025061002.webp)

本文介绍五个开源软件，可以自己架设网址书签的收藏服务。

6、[我的香港露营实验](https://corentin.trebaol.com/Blog/8.+The+Homelessness+Experiment)（英文）

![](https://cdn.beekka.com/blogimg/asset/202506/bg2025060802.webp)

2016年，一个老外在香港留学，他的奖学金很少，就想在海边搭帐篷居住，省下房租。本文是他对这段生活的总结，挺有意思的。

## 工具

1、[Cap.js](https://github.com/tiagorangel1/cap)

![](https://cdn.beekka.com/blogimg/asset/202506/bg2025060116.webp)

一个网页上的机器人识别工具，用作 CAPTCHA 方案，采用 SHA-256 工作量证明算法。

2、[Quartz](https://github.com/jackyzha0/quartz)

![](https://cdn.beekka.com/blogimg/asset/202506/bg2025060803.webp)

Markdown 文档的静态站点发布器，适合用作收费服务 Obsidian Publish 的替代品。

3、[somo](https://github.com/theopfr/somo)

![](https://cdn.beekka.com/blogimg/asset/202506/bg2025061001.webp)

在 Linux 终端查看端口占用情况的工具。

4、[OOMOL Studio](https://github.com/ruanyf/weekly/issues/7029)

![](https://cdn.beekka.com/blogimg/asset/202506/bg2025061108.webp)

一款创新的桌面 IDE，把自己编写的函数设成节点，然后通过图形界面，把节点编排成工作流。（[@BlackHole1](https://github.com/ruanyf/weekly/issues/7029) 投稿）

5、[极测](https://www.jicesys.com/)

![](https://cdn.beekka.com/blogimg/asset/202506/bg2025061109.webp)

免费的通信调试助手，模拟 UDP、TCP、串口、WebSocket、ZeroMQ 等常见协议，进行通信测试。（[@seasonlaw](https://github.com/ruanyf/weekly/issues/7032) 投稿）

6、[container](https://github.com/apple/container)

苹果官方发布的 Mac 电脑运行 Linux 容器的工具。也就是说，Mac 电脑可以不装 Docker，就运行 Docker 容器。

7、[DarkFlare](https://github.com/doxx/darkflare)

一个命令行工具，在 CDN 上，将 TCP 流量伪装成 HTTPS 流量传输。

8、[JDownloader](https://jdownloader.org/)

![](https://cdn.beekka.com/blogimg/asset/202506/bg2025060901.webp)

开源的全平台下载工具，参考[这篇教程](https://www.xda-developers.com/raspberry-pi-downloading-device-entire-network/)，用树莓派搭建下载服务器。

9、[Pydoll](https://github.com/autoscrape-labs/pydoll)

一个操作浏览器的 Python 库，通过 Chrome DevTools Protocol，实现脚本操作本机的 Chrome 浏览器。

10、[Chili3D](https://github.com/xiangechen/chili3d)

![](https://cdn.beekka.com/blogimg/asset/202506/bg2025061103.webp)

基于浏览器的 3D CAD 软件，代码开源。

## AI 相关

1、[Page Magic](https://github.com/khaledh/pagemagic)

![](https://cdn.beekka.com/blogimg/asset/202506/bg2025060402.webp)

一个 Chrome 的 AI 插件，输入你对当前网页的修改描述，它自动将改好的网页呈现在浏览器里，需要 Anthropic API。

2、[壁响](https://wallecho.com/)（WallEcho）

![](https://cdn.beekka.com/blogimg/asset/202506/bg2025060702.webp)

根据输入的文本，免费生成手机或电脑桌布。（[@twjiem](https://github.com/ruanyf/weekly/issues/6999) 投稿）

3、[AI 洞察日报](https://github.com/justlovemaki/CloudFlare-AI-Insight-Daily)

![](https://cdn.beekka.com/blogimg/asset/202506/bg2025060703.webp)

通过 Cloudflare Workers 抓取指定数据源，生成每日精选的 AI 日报，[效果预览](https://justlovemaki.github.io/CloudFlare-AI-Insight-Daily/today/book/)。（[@justlovemaki](https://github.com/ruanyf/weekly/issues/7009) 投稿）

4、[zenfeed](https://github.com/glidea/zenfeed)

![](https://cdn.beekka.com/blogimg/asset/202506/bg2025060704.webp)

智能信息助手，对于关注的新闻或话题，使用 AI 自动收集、筛选出要看的文章，并总结内容。（[@glidea](https://github.com/ruanyf/weekly/issues/7012) 投稿）

5、[文颜 MCP Server](https://github.com/caol64/wenyan-mcp)

AI 模型接入这个 MCP，就可以将排版好的内容，自动发布到微信公众号，参见[介绍文章](https://babyno.top/posts/2025/06/let-ai-help-you-manage-your-gzh-layout-and-publishing/)。（[@caol64](https://github.com/ruanyf/weekly/issues/7048) 投稿）

## 资源

1、[高等院校三千所](https://laosheng.top/fuwu/yuanxiao)

![](https://cdn.beekka.com/blogimg/asset/202506/bg2025061201.webp)

这个网站收录中国大学网址全集。（[@DiamonWoo](https://github.com/ruanyf/weekly/issues/7047) 投稿）

2、[Mullvad Leta](https://leta.mullvad.net/)

![](https://cdn.beekka.com/blogimg/asset/202505/bg2025053003.webp)

Mullvad 公司推出的一个搜索引擎。它从谷歌和 Brave 获取搜索结果，但是提供隐私保护，防止搜索引擎识别用户。

我试用感觉不错，速度很快，没有广告。

3、[DNS4EU](https://www.joindns4.eu/)

![](https://cdn.beekka.com/blogimg/asset/202506/bg2025060902.webp)

欧盟推出的公共 DNS，自带过滤广告功能。

## 图片

1、[居里夫人故居的门把手](https://www.bbc.com/future/article/20250605-the-hunt-for-marie-curies-radioactive-fingerprints-in-paris)

著名物理学家居里夫人，由于长期接触放射性元素，手上总是沾有镭矿石的微粒。

她在法国巴黎的故居，过了100年，至今仍能测出，门把手有微弱的放射性。

![](https://cdn.beekka.com/blogimg/asset/202506/bg2025061106.webp)

1934年，居里夫人死于过量辐射导致的再生性贫血。

![](https://cdn.beekka.com/blogimg/asset/202506/bg2025061107.webp)

2、[洞穴停车场](https://www.hagerty.com/media/automotive-history/since-the-60s-ford-has-stored-cars-underground-in-a-kansas-city-cave/)

美国密苏里州早年有石灰矿，挖出了巨大的地下空洞。

![](https://cdn.beekka.com/blogimg/asset/202411/bg2024111103.webp)

后来，矿产挖光以后，这些空洞就废弃了。

上个世纪50年代，福特汽车公司看中了这个地方。因为这里的地下空间非常大，可以容纳5000人，没有风吹雨打，没有下雪结冰，干燥，终年恒温，很适合改造成停车场，存放新车。

![](https://cdn.beekka.com/blogimg/asset/202411/bg2024111104.webp)

![](https://cdn.beekka.com/blogimg/asset/202411/bg2024111105.webp)

这个地下停车场直到今天还在运作，可能是史上最大的地下商业设施。

![](https://cdn.beekka.com/blogimg/asset/202411/bg2024111106.webp)

## 文摘

1、[小模型](https://jigsawstack.com/blog/what-even-is-a-small-language-model-now--ai)

在机器学习的早期，“小模型”指的是可以在家用电脑 CPU 运行的基本神经网络。

到了2018年，如果你问别人什么是“小模型”，他们可能会说，就是那种在树莓派或手机上运行的、只有几百万个参数的模型。

但是，后来出现了 Transformer 和大型语言模型（LLM）。这些模型越变越大，“小模型”的定义已经改变。

今天，任何不需要 A100 显卡集群就能运行的模型，都可以看成小模型。

我们把300亿个参数（30B）的模型也称为“小模型”，因为它们只需要一个 GPU 就能运行。

今天的“小模型”，更多的是指模型的可部署性，而不仅仅是模型的规模。

如果能在个人设备上部署某个模型，那么这个模型就是小模型。它可以分成下面两类。

（1）可以在移动设备或边缘硬件上运行的模型，用例为语音助手、手机翻译、离线摘要、嵌入的聊天机器人。

（2）只需一个 GPU 的模型，在这一类中，即使是 30B 或 70B 规模的模型也可以算作“小型”。

现在，一张4090显卡就能运行 70B 的模型，并有不错的输出速度，这在几年前还只是科幻小说的情节。

小模型固然比不上大模型的能力，但也有自己的优势：更适合小型的任务，在单一领域更准确，更适合微调和快速发布。

而且，小模型的成本更低，更适合个人和创业公司部署，并可以在本地部署。

这就是为什么小模型很有用，因为它让我们可以在家里运行自己的 AI 模型，得到的结果与 GPT-3.5 不相上下，从而可以用更少的资源完成更多的任务。

## 言论

1、

很多人总是拖拖拉拉，抱怨自己没有做事的动力。但是，动力恰恰源自行动，只要你开始做一些事情，只要能朝着目标前进，你就会发现动力随之而来。

所以，当我遇到一个很艰巨的任务时，我会把问题分解成若干更简单的部分，此时我的目标不是完成任务，而只是让自己能够行动起来，向前迈出一小步。

-- [《摆脱拖延症》](https://spectrum.ieee.org/getting-past-procastination)

2、

最安全的代码并非优美、巧妙或优雅的代码，而是枯燥乏味的代码。

Go 语言就奉行这种理念，故意去除了那些富有表现力或优雅的写法，只保留简洁和可读的写法。这使得代码易于审查、难于滥用，不容易发生安全漏洞。

-- [《无聊胜过美丽》](https://blog.asymmetric.re/boredom-over-beauty-why-code-quality-is-code-security/)

3、

人们总是喜欢新东西，读书喜欢读新出版的书，听歌喜欢听新歌。

据统计，美国2024年流媒体音乐一共播放了1.4万亿次，其中近50%是2020年至2024年期间发行的歌曲，近80%是2010年或之后发行的歌曲。歌越老，听的人越少。

-- [美联社](https://apnews.com/article/taylor-swift-sabrina-carpenter-luminate-2024-report-9d3436e71d481a07d88aa13940a68c76)

4、

新 API 的采用速度将会大大减缓。因为大模型的学习内容仅限于已有的内容，新的 API 出现时，可供学习的内容必然很少。

另外，那些依赖大模型的人也会犹豫是否采用新 API，因为大模型使用旧 API 可以更快地完成相同的工作。

-- [Hacker News 读者](https://news.ycombinator.com/item?id=43953957)

## 往年回顾

[随机数，这是一个问题](https://www.ruanyifeng.com/blog/2024/06/weekly-issue-305.html)（#305）

[对待 AI 的正确态度](https://www.ruanyifeng.com/blog/2023/05/weekly-issue-255.html)（#255）

[互联网风口过去了吗？](https://www.ruanyifeng.com/blog/2022/05/weekly-issue-205.html)（#205）

[数字货币是打破美元霸权的武器吗？](https://www.ruanyifeng.com/blog/2021/04/weekly-issue-155.html)（#155）

（完）

