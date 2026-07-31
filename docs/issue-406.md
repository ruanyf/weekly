# 科技爱好者周刊（第 406 期）：道可，道非，常道

这里记录每周值得分享的科技内容，周五发布。

本杂志[开源](https://github.com/ruanyf/weekly)，欢迎[投稿](https://github.com/ruanyf/weekly/issues)。另有[《谁在招人》](https://github.com/ruanyf/weekly/issues/10950)服务，发布程序员招聘信息。合作请[邮件联系](mailto:yifeng.ruan@gmail.com)（yifeng.ruan@gmail.com）。

## 封面图

![](https://cdn.beekka.com/blogimg/asset/202607/bg2026072904.webp)

深圳坪山区的坑梓文化科技中心，本身只是普通的三层楼房，但是设计师巧妙地为它加上三级拱廊，顿时让这个建筑变得充满了现代层次感。（[via](https://tanghuaarchitects.com/project/%E5%9D%91%E6%A2%93%E6%96%87%E5%8C%96%E7%A7%91%E6%8A%80%E4%B8%AD%E5%BF%83/)）

## 道可，道非，常道

上周（7月22日），华为公司的心声社区转发了《人民日报》对[何庭波的专访](http://finance.people.com.cn/n1/2026/0528/c1004-40728832.html)。

何庭波是华为的半导体业务部总裁，最近提出“韬（τ）”定律受到关注。

华为转发这篇专访时，附上了一段任正非写的序言，标题是[《道可，道非，常道》](https://www.163.com/dy/article/L2IH62SK0556LMBK.html)。这段序言很短，只有几句话。

> τ 定律是华为可以选择的唯一一条突围道路。
> 
> 其他厂家是有多条道路可选择的。华为为了逃生、活着、活下去、活得好，数万名员工6年来不断迭代，走出了一条已经成熟的道路。
>
> 不是为了去颠覆什么，取代什么，而是找到了可以选的一条路。我们与高级社团交流时选择“只阐述，不激辩”。

这段话的意思很清楚，别人已经走通的路，华为现在走不了，只能自己想办法找一条路，摸索着走下去。

这条路的对错、难走还是易行，都已经不重要了。不走这条路，就只有等死。既然已经上路，就不要在意外界的议论了，埋头向前，足迹就是回答。

比较有意思的是，任正非的标题《道可，道非，常道》，那是老子《道德经》的第一句话。

大家知道，古人的书没有标点，这句话的原文是“道可道非常道”。

![](https://cdn.beekka.com/blogimg/asset/202607/bg2026072702.webp)

从古至今，公认的断句是“道可道，非常道”，意思是“可以说出来的道，就不是永恒的道”。

当代有人提出，还有一种断句，就是“道可，道非，常道”。这样一断，意思全变了：“走正确的路，走错误的路，这才是永恒的路。”

这大概就是任正非的意思，华为尝试了各种道路，走对也好（道可），走错也好（道非），只为找到一条生路，这才是不变的路（常道）。

## [本周软件] OpenConnector

今天介绍一款开源的密码连接网关 [OpenConnector](https://github.com/oomol-lab/open-connector)。

![](https://cdn.beekka.com/blogimg/asset/202607/bg2026072801.webp)

它跟 AI Agent 配套使用，主要解决 AI 自动化工具（比如 OpenClaw）的授权问题。

举例来说，邮箱密码交给 AI 工具，你放心吗，谁能保证它不会把密码泄漏到上下文？OpenConnector 就解决这个问题。

它严格保存密码/授权凭证，统一负责与各种外部应用的连接，Agent 只能拿到账号标签、元数据和执行结果，不会发生密码泄漏，而且方便统一管理。

![](https://cdn.beekka.com/blogimg/asset/202607/bg2026072802.webp)

用户只需通过它连接一次外部应用，它就会自动保存连接信息，目前已经支持1000多个身份提供商和10000多个应用服务。

它可以部署在 Cloudflare Workers 或者 Fly.io + SQLite，也支持本地 Node.js / Docker 部署。如果觉得麻烦，可以直接用它的 SaaS 云服务 [OOMOL](https://oomol.com/apps)。

它提供 Web 管理后台，可以查看实时运行状态和调用记录。团队版还带有权限管理，支持团队使用，一个团队成员建立连接，可共享给其他成员。

## 科技动态

1、[雷击火箭](https://www.163.com/dy/article/L2RLM65G0556BW7G.html)

7月23日晚上8点，西昌卫星发射中心发射长征三号乙运载火箭。

火箭升空47秒后，罕见地被闪电击中。

![](https://cdn.beekka.com/blogimg/asset/202607/bg2026072905.webp)

不过这道闪电并没有影响火箭运行，火箭上面搭载的天链二号卫星，也顺利送入了太空。

火箭本身是一个容易遭受雷击的装置，长征三号乙火箭特别经过了防雷设计，金属外壳就是“法拉第笼”。具体点说，火箭外壳是良导体，雷击时电流只会沿着外壳表面流过，电流不会侵入内部舱室。

![](https://cdn.beekka.com/blogimg/asset/202607/bg2026072906.webp)

此外，高温尾焰相当于“避雷针接地线”，将电流排出。火箭内部的机电设备也包裹了专门的电磁屏蔽层，确保即使有一定电流侵入，核心设备也不会被烧毁。

由于雷击是大气现象，其实只要再多飞十几秒，火箭就能到达大气层顶部，就不会遭遇雷击了。

2、[特斯拉童车](https://shop.tesla.com/product/balance-bike-for-kids)

特斯拉在官网上推出了一款儿童自行车，售价225美元。

![](https://cdn.beekka.com/blogimg/asset/202607/bg2026072901.webp)

它的车型设计很独特，没有踏板，据说会自己保持平衡。

![](https://cdn.beekka.com/blogimg/asset/202607/bg2026072902.webp)

它看上去似乎不含电池，那样的话，难道全靠双脚蹬地驱动，或者只是一个不能骑行的摆设？

![](https://cdn.beekka.com/blogimg/asset/202607/bg2026072903.webp)

不管怎么说，它的样子让人眼前一亮，很有特斯拉早期的感觉。

3、[树的生长](https://www.instagram.com/p/DN3btHw0MKn/)

如果你的手一直握着一颗树，会怎样？

![](https://cdn.beekka.com/blogimg/asset/202601/bg2026010301.webp)

一个意大利艺术家做了一个实验。2004年，他用青铜做了一只手的模型，握在一颗树上。

![](https://cdn.beekka.com/blogimg/asset/202601/bg2026010302.webp)

![](https://cdn.beekka.com/blogimg/asset/202601/bg2026010303.webp)

结果，整棵树继续长，除了手握着的那个地方。

![](https://cdn.beekka.com/blogimg/asset/202601/bg2026010304.webp)

![](https://cdn.beekka.com/blogimg/asset/202601/bg2026010305.webp)

到了2018年，手已经陷入树里了，树干围着那只手继续生长。

![](https://cdn.beekka.com/blogimg/asset/202601/bg2026010306.webp)

4、[助学贷款的条件](https://www.npr.org/2026/06/30/nx-s1-5835631/turner-camhi-do-no-harm-college-loans)

现在上大学越来越容易，而且学生都能申请助学贷款，导致大学毕业生越来越多，找工作越来越难。

美国教育部最新规定，如果某专业的毕业生收入低于同岗位未上过大学的劳动者，那么该专业的学生将无法申请助学贷款。

![](https://cdn.beekka.com/blogimg/asset/202607/bg2026073006.webp)

我觉得，这个规定挺有道理。大学教育应该让毕业生的处境变好，如果做不到这一点，那么只有在学生经济实力足够的情况下，才可以选择该专业。这也意味着，该学生不需要助学贷款。

## 文章

1、[使用 GPT-5.6、Claude、Gemini 和 Grok “绘制”蒙娜丽莎](https://www.tryai.dev/blog/ai-drawing-arena-colored-pencils-claude-gpt-grok)（英文）

作者让具有视觉能力的四个旗舰模型——GPT-5.6 Sol、Claude Fable 5、Grok 4.5 和Gemini 3.6 Flash —— 在网页上逐笔绘制蒙娜丽莎这幅世界名画。

原作

![](https://cdn.beekka.com/blogimg/asset/202607/bg2026073012.webp)

GPT-5.6 Sol

![](https://cdn.beekka.com/blogimg/asset/202607/bg2026073013.webp)

Claude Fable 5

![](https://cdn.beekka.com/blogimg/asset/202607/bg2026073014.webp)

Grok 4.5

![](https://cdn.beekka.com/blogimg/asset/202607/bg2026073015.webp)

Gemini 3.6 Flash

![](https://cdn.beekka.com/blogimg/asset/202607/bg2026073016.webp)

作者的评价是，GPT-5.6 Sol 遥遥领先，Grok 4.5 简直就是个垃圾。很少能生成任何可用的东西，Gemini 3.6 Flash 只比 Grok 略好。

Claude Fable 5 在质量上排名第二，但是它的成本和耗费的时间上却垫底，成本是其他三个模型的近20倍。

2、[BitTorrent 协议的故事](https://www.xda-developers.com/the-story-of-bram-cohen-and-the-bittorrent-protocol/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202510/bg2025101405.webp)

本文介绍美国程序员布拉姆·科恩（Bram Cohen）在2001年发明基于 P2P 的 BitTorrent 协议的故事。

3、[为什么 Emoji 来自日本？](https://mp.weixin.qq.com/s/TyVxvHtTyDjmR2L8IXZCdw)（中文）

Emoji 的诞生，纯粹是因为日本在90年代末苛刻的移动网络资费，以及日语有各种敬语，需要有节省字数的表达方式。（[@zuzuAndroid](https://github.com/ruanyf/weekly/issues/10931) 投稿）

4、[我用 3D 打印废料制作的锦鲤池马赛克](https://www.instructables.com/A-Koi-Pond-Mosaic-Made-From-10-Pounds-of-3D-Printe/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202607/bg2026073017.webp)

3D 打印会产生大量的塑料废料，作者用这些废料做了一个马赛克拼贴图。

5、[如何在 Linux 建立自己的证书颁布机构](https://previnder.com/tls-ca-linux/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202502/bg2025021804.webp)

本文是一篇教程，介绍在 Linux 建立自己的证书颁发机构，将它的根证书加入操作系统的受信任证书列表。

## 工具

1、[Orion](https://orionbrowser.com/)

![](https://cdn.beekka.com/blogimg/asset/202607/bg2026072701.webp)

Kagi 公司推出的浏览器，支持桌面和手机，采用 WebKit 内核，同时支持 Safari、Chrome 和 Firefox 扩展程序，承诺隐私保护、零遥测和广告拦截。

2、[Chirp](https://github.com/solst-ice/chirp)

![](https://cdn.beekka.com/blogimg/asset/202503/bg2025030503.webp)

通过声音（喇叭和麦克风），发送和接收数据的一个开源工具。

3、[Bento Slides](https://bento.page/slides/)

![](https://cdn.beekka.com/blogimg/asset/202607/bg2026073005.webp)

只需要[一个 HTML 文件](https://bento.page/)的 PowerPoint 编辑器/播放器。

4、[lazyrsync](https://github.com/westpoint-io/lazyrsync)

![](https://cdn.beekka.com/blogimg/asset/202607/bg2026072622.webp)

为文件同步工具 rsync 添加的终端界面。（[@pobin6](https://github.com/ruanyf/weekly/issues/10830) 投稿）

5、[Birth](https://github.com/iAmCorey/birth)

![](https://cdn.beekka.com/blogimg/asset/202607/bg2026072623.webp)

开源的 macOS 启动项管理工具，把系统里每一个后台项、守护进程和登录项收进同一个窗口，可以一键停用或移除。（[@iAmCorey](https://github.com/ruanyf/weekly/issues/10842) 投稿）

6、[Linux Router](https://github.com/Jaksay/Linux-Router)

![](https://cdn.beekka.com/blogimg/asset/202607/bg2026072624.webp)

将 Debian 或 Armbian 设备变成路由器，并提供一个清晰的 Web 控制台。（[@Jaksay](https://github.com/ruanyf/weekly/issues/10847) 投稿）

7、[RepoMirror](https://github.com/wutongyuonce/RepoMirror)

![](https://cdn.beekka.com/blogimg/asset/202607/bg2026072626.webp)

一个 macOS 桌面应用，将 GitHub 仓库或其中的指定目录镜像同步至本地，不必检查几十个 GitHub 项目有没有更新。（[@wutongyuonce](https://github.com/ruanyf/weekly/issues/10851) 投稿）

8、[FluxDown](https://github.com/zerx-lab/FluxDown)

![](https://cdn.beekka.com/blogimg/asset/202607/bg2026072704.webp)

开源的多协议下载器，内置 MCP 服务器，可供 Agent 调用。（[@zerx-lab](https://github.com/ruanyf/weekly/issues/10901) 投稿）

9、[米饭云盘](https://github.com/AndySkaura/mifun-storage)

![](https://cdn.beekka.com/blogimg/asset/202607/bg2026073003.webp)

基于 Telegram Channel 的小文件开源存储系统，适合部署为个人图床 / Markdown 图床。（[@AndySkaura](https://github.com/ruanyf/weekly/issues/10936#issuecomment-5115313857) 投稿）

10、[StaticShield](https://github.com/wangshengithub/staticshield)

![](https://cdn.beekka.com/blogimg/asset/202607/bg2026073004.webp)

为网页加上密码保护的 JS 库，加密后只有输入密码才能访问。（[@wangshengithub](https://github.com/ruanyf/weekly/issues/10940#issuecomment-5117097770) 投稿）

## AI 相关

1、[ai-disk-cleaner](https://github.com/vudsen/ai-disk-cleaner)

![](https://cdn.beekka.com/blogimg/asset/202607/bg2026072703.webp)

开源的 Windows 磁盘清理工具，用 AI 分析垃圾文件。（[@vudsen](https://github.com/ruanyf/weekly/issues/10900) 投稿）

2、[PhysiClaw](https://github.com/physiclaw/PhysiClaw)

![](https://cdn.beekka.com/blogimg/asset/202607/bg2026072627.webp)

一个开源的 AI 系统，需要自购硬件，可以像人一样操作 iPhone，用摄像头观察屏幕，机械臂操作手机。（[@physiclaw](https://github.com/ruanyf/weekly/issues/10893) 投稿）

3、[Figwright](https://github.com/awdr74100/figwright)

![](https://cdn.beekka.com/blogimg/asset/202607/bg2026072625.webp)

一个 MCP 服务器，让 Claude Code、Cursor、Codex 等 AI 代理直接操作 Figma，能读设计稿也能画设计稿。（[@awdr74100](https://github.com/ruanyf/weekly/issues/10850) 投稿）

## 资源

1、[How to Draw](https://www.howtodraw.ai/)

![](https://cdn.beekka.com/blogimg/asset/202607/bg2026073002.webp)

这个网站有各种小动物的分步绘图指导，适合小朋友使用。（[@Etshop-AI](https://github.com/ruanyf/weekly/issues/10934) 投稿）

2、[网页滚动的动画效果](https://scroll-driven-animations.style/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202607/bg2026073001.webp)

这个网站收集各种网页滚动的动画效果，使用 Web Animations API (WAAPI) 和 CSS Animations API 实现。

3、[学习下围棋](https://online-go.com/learn-to-play-go)

![](https://cdn.beekka.com/blogimg/asset/202509/bg2025092903.webp)

在线互动围棋教程，从零开始分课讲解。

## 图片

1、[水瓶灯](https://www.bbc.co.uk/news/magazine-23536914)

2002年，一个巴西工程师家里停电了，大白天屋里一片漆黑。

他想到一个办法，找了一个透明的饮料宝特瓶，里面装满了水。

![](https://cdn.beekka.com/blogimg/asset/202407/bg2024073005.webp)

然后，他在屋顶瓦片打了一个洞，把宝特瓶插在里面。

![](https://cdn.beekka.com/blogimg/asset/202407/bg2024073006.webp)

阳光就通过瓶子里面的水，折射到了室内，就变成一个简单的灯。

![](https://cdn.beekka.com/blogimg/asset/202407/bg2024073007.webp)

这个发明很快流行了起来，许多人开始采用。

![](https://cdn.beekka.com/blogimg/asset/202407/bg2024073008.webp)

现在，它已经在巴西、菲律宾、印度、孟加拉国、坦桑尼亚、阿根廷和斐济等15个国家里面流行。

## 文摘

1、[世界最不知名的最强程序员](https://x.com/bigaiguy/status/2063903532575752211)

一个法国程序员隐居在巴黎，过去30年，都在编写软件。整个互联网如今都依赖于他的作品，却很少人知道他的名字。

他编写的代码支撑着 YouTube、Netflix 和 TikTok 的视频业务，也支撑着 AWS、谷歌云和微软 Azure 等云服务的底层虚拟服务器。他还创造过圆周率位数的世界纪录。

他没有推特账号，也不做任何市场推广，只是默默地发布产品。

他的名字叫法布里斯·贝拉尔（Fabrice Bellard）。

![](https://cdn.beekka.com/blogimg/asset/202606/bg2026062004.webp)

在编程领域之外，几乎无人知晓他创造的奇迹。

他1972年出生于法国格勒诺布尔，毕业于法国顶尖工程学院——巴黎综合理工学院。

他从未去过硅谷，只是埋头编写代码。

2000年，28岁的他启动了一个名为 FFmpeg 的项目，那是一个开源的多媒体框架，用于视频编码、解码和流媒体传输。这个项目完成了一项其他开发者都未能出色完成的任务。它在一个库中处理了所有现有的视频和音频格式，并且支持所有操作系统。

他独自领导这个项目多年。如今，FFmpeg 已成为互联网视频的基石。YouTube 使用它，Netflix 使用它，VLC 使用它，Chrome 和 Firefox 也使用了它的部分代码。每一部安卓手机、每一部 iPhone、每一台智能电视、每一个你曾经接触过的视频编辑工具，其底层都运行着 FFmpeg。如果你在过去 20 年里看过任何视频，那么 FFmpeg 都处理过它。

但他并未止步于此。2003 年，他创建了 QEMU，一个操作系统模拟器和虚拟化器。他独自编写了 QEMU，直到 2005 年的 0.7.1 版本为止。QEMU 允许你在任何操作系统上运行其他任何操作系统。

它成为了现代虚拟化的基础。Linux 内核虚拟机管理程序 KVM 就运行在 QEMU 之上。所有主流云服务提供商，例如 AWS、Google Cloud、Microsoft Azure 和 IBM Cloud，都在基于 QEMU 构建的基础设施上运行虚拟机。QEMU 是地球上被引用次数最多的云基础设施代码。

2001年，他凭借一个小型 C 编译器赢得了国际混淆 C 代码大赛（IOBC），该编译器后来发展成为 TCC，即 Tiny C Compiler（微型 C 编译器）。TCC 可以在15秒内从源代码编译好并启动 Linux 内核。

2004年，他使用一台个人台式电脑和他自己推导的算法——贝拉德公式，计算出了当时最多的 π 位数。

2011年，他用纯 JavaScript 编写了一个完整的 PC 模拟器，可以在浏览器中运行 Linux 系统，这个项目名为 JSLinux，至今仍让工程师们难以置信。

2019年，他发布了 QuickJS，这是一个小巧但功能齐全的 JavaScript 引擎，可以胜任 V8 引擎无法胜任的工作。

2021年，他发布了 NNCP，这是一个基于神经网络的无损数据压缩器，立即在大型文本压缩基准测试中名列前茅。

之后，他将注意力转向了大型语言模型。他构建了 TextSynth Server，这是一个带有 REST API 的 Web 服务器，用于在本地运行 LLM。

他还发布了 ts_zip 和 ts_sms，那是利用大模型压缩文本的工具，其压缩率远超传统算法。他还发布了  TSAC，一个超低比特率音频压缩系统。

2025 年 12 月，他发布了 Micro QuickJS，这是一个独立于 QuickJS 的全新 JavaScript 微引擎，专为内存占用极低的环境而设计。

法布里斯·贝拉尔于2012年加入电信公司 Amarisoft，并担任首席技术官。该公司开发 4G 和 5G 基站软件，供全球运营商和实验室使用。十多年来，他一直运营着这家公司，同时还在自己的个人主页 bellard.org 上发布个人项目。

![](https://cdn.beekka.com/blogimg/asset/202606/bg2026062005.webp)

他没有 Twitter 账号，也没有 Instagram 账号，几乎不接受采访。他的个人网站只是一个项目列表，没有任何样式、字体或营销文案，只有标题和链接。

这位从未移居硅谷的低调法国工程师，编写了默默运行互联网的代码。他至今仍在发布产品。

## 言论

1、

有些网站的“登录”按钮比“注册”按钮小，或者默认只显示“注册”按钮。

我很讨厌这种网站，这表明他们优先考虑新用户，而不是让老用户满意。

-- [Hacker News 读者](https://news.ycombinator.com/item?id=48971030)

2、

人类程序员的职责从来都不是为编写代码而编写代码，而是在面对模糊性、各种限制和变化时降低代码的风险。以前如此，不写代码的 AI 时代更是如此。

-- [《无人阅读的代码》](https://www.heavybit.com/library/article/write-only-code)

3、

我认识很多功成名就的人，都已经退休了，但是最近重出江湖，因为 AI 带来的挑战和机遇对他们来说有着不可抗拒的吸引力。

过去几十年里，他们那些零散的副业项目想法，现在突然变得切实可行了，有太多新的事物值得探索和创造。

-- [Simon Willison](https://news.ycombinator.com/item?id=47152086)，著名开发者

4、

有人认为，现在的 CSS 是一团极度臃肿的大杂烩。我的看法恰恰相反，CSS 正尽力用人类易读的文本形式，完整地表达视觉呈现、布局设计、排版、动画、数字互动以及其他一些内容。它不是臃肿，而是极具野心。

-- [Eric A. Meyer](https://mastodon.social/@Meyerweb/116065151451468199)，著名互联网开发者

## 往年回顾

[Palantir 值得关注](https://www.ruanyifeng.com/blog/2025/08/weekly-issue-359.html)（#359）

[无人驾驶出租车的双面刃](https://www.ruanyifeng.com/blog/2024/07/weekly-issue-309.html)（#309）

[如何免费使用 ChatGPT](https://www.ruanyifeng.com/blog/2023/06/weekly-issue-259.html)（#259）

[程序员是怎样的人](https://www.ruanyifeng.com/blog/2022/06/weekly-issue-209.html)（#209）

（完）

