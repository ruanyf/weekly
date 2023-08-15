# 科技爱好者周刊（第 266 期）：自己做双语 EPUB 电子书

这里记录每周值得分享的科技内容，周五发布。

本杂志[开源](https://github.com/ruanyf/weekly)，欢迎[投稿](https://github.com/ruanyf/weekly/issues)。另有[《谁在招人》](https://github.com/ruanyf/weekly/issues/3324)服务，发布程序员招聘信息。合作请[邮件联系](mailto:yifeng.ruan@gmail.com)（yifeng.ruan@gmail.com）。

## 封面图

![](https://cdn.beekka.com/blogimg/asset/202308/bg2023081010.webp)

四川省德阳市使用锈钢板，搭建了一个名为“齿轮花园”的小园林。每个模块都做成正六边形，象征一个齿轮，比喻德阳这个老工业城市的绿色转型。（[via](https://lingganlb.com/index/index/detail.html?code=A7883509524180829270)）

## 自己做双语 EPUB 电子书

周刊的《工具》部分，每周都有一些很有用的软件，有些对我的帮助也很大。

[《周刊（第254期）》](https://www.ruanyifeng.com/blog/2023/05/weekly-issue-254.html)有一个作者自荐的“[沉浸式翻译](https://immersivetranslate.com/)”，就特别有用。

![](https://cdn.beekka.com/blogimg/asset/202308/bg2023080602.webp)

它是一个浏览器插件，主要功能是网页翻译，还可以指定翻译引擎。

![](https://cdn.beekka.com/blogimg/asset/202308/bg2023080603.webp)

但是，对于我最有用的是另一个功能——制作双语 EPUB 电子书。今天就说说这个功能。

![](https://cdn.beekka.com/blogimg/asset/202308/bg2023080604.webp)

很多我想看的国外图书资料，都没有中文版。如果去啃英文原版，就会读得很慢。这时，我们不妨**自己动手，生成一个机器翻译版**。先读机器译文，如果不顺，再读原文。

举例来说，上个月美国出版了约翰·罗梅洛（John Romero）的自传《DOOM Guy》。

![](https://cdn.beekka.com/blogimg/asset/202308/bg2023080910.webp)

他是经典电子游戏《DOOM》（毁灭战士）的创造者之一。我自从读了[《DOOM 启示录》](http://www.ruanyifeng.com/blog/2023/06/weekly-issue-258.html)，就对这个人很感兴趣。

但是，此书没有中文版。我就用“沉浸式翻译”，自己做了一本双语对照的 EPUB 电子书。

![](https://cdn.beekka.com/blogimg/asset/202308/bg2023080605.webp)

制作过程非常简单，导入原始 EPUB 文件，启用页面翻译，然后导出就可以了，只花费几分钟。

![](https://cdn.beekka.com/blogimg/asset/202308/bg2023080606.webp)

市面上其他电子书翻译软件，都不如它简单好用，而且它还是免费的。

我已经用它读了好几本原版书，觉得效果不错，很符合我的需要。

不过，它要求原始电子书必须是 EPUB 格式。如果你的资料不是这个格式，可以先用 [Calibre](https://calibre-ebook.com/) 转成 EPUB。

![](https://cdn.beekka.com/blogimg/asset/202308/bg2023080607.webp)

其他格式的文档（HTML、TXT、Markdown 等等），可以通过 Calibre 左上角的“Add books”按钮导入，然后按下“Convert books”按钮，就可以转成 EPUB 格式了。

Calibre 每次只能导入一个文档。如果你想将多个 HTML 文件做成一本电子书，需要上传一个目录页，可以参考[官方文档](https://manual.calibre-ebook.com/faq.html#how-do-i-convert-a-collection-of-html-files-in-a-specific-order)，挺简单的。

以上就是我目前看外文资料的方法，分享给大家。

## 科技动态

1、[AI 广播](https://techcrunch.com/2023/06/14/radio-station-gets-part-time-ai-dj-based-on-its-midday-host/)

美国俄勒冈州的一家电台宣布，主持人艾什莉每天上午10点至下午3点的节目，将完全由 AI 生成。

![](https://cdn.beekka.com/blogimg/asset/202306/bg2023062405.webp)

AI 根据当天的新闻热点，生成讲稿，然后采用艾什莉的语音朗读播放，中间再配上音乐。这比艾什莉本人来主持更简单便宜，艾什莉以后将专门从事幕后工作。

![](https://cdn.beekka.com/blogimg/asset/202306/bg2023062406.webp)

据说，美国的其他小电台也准备效仿。可以想象，我们以后接触的媒体内容，可能比现在多十倍百倍，而且大部分都是 AI 生成的。

2、[奇怪的惠普打印机](https://www.theverge.com/2023/8/4/23820710/pay-no-attention-to-the-usb-port-behind-the-no-usb-sticker)

一个外国网友买了一台便宜的惠普打印机。

![](https://cdn.beekka.com/blogimg/asset/202308/bg2023080501.webp)

这台机器特别注明，只能使用 WiFi 联机，不能使用 USB。机器背面还有一张贴纸，提醒用户这一点。

![](https://cdn.beekka.com/blogimg/asset/202308/bg2023080502.webp)

奇怪的是，把这张贴纸撕掉，后面赫然就是一个 USB 口。

![](https://cdn.beekka.com/blogimg/asset/202308/bg2023080503.webp)

而且，通过这个 USB 口，可以顺利连接电脑。

![](https://cdn.beekka.com/blogimg/asset/202308/bg2023080504.webp)

很难理解惠普为什么要掩饰这个 USB 口的存在。如果它真想废掉 USB 连接，可以修改硬件模具，也可以修改固件，但是它什么都没做，只是加了一张贴纸。

唯一的解释是，惠普不希望用户离线使用打印机，必须在线使用。一旦连接 WiFi，用户数据就可以回传给惠普。

3、[南半球高温](https://www.sohu.com/a/708607595_116237)

现在，北半球是盛夏，南半球应该是寒冬。问题是，南半球不仅没有寒冬，而且出现了骇人的高温。

![](https://cdn.beekka.com/blogimg/asset/202308/bg2023080509.webp)

进入八月后，智利的气温超过37.8℃，创下历史纪录。阿根廷首都布宜诺斯艾利斯平均气温超过30度，往年则是14.4℃。

全球变暖正在改变南半球的冬季，接下来北半球的冬季会不会也出现高温呢？

4、[拖延最久的太空任务](https://aviationweek.com/defense-space/space/russias-luna-25-lunar-lander-arrives-vostochny-spaceport)

本周四，俄罗斯的探月飞船 Luna 25 发射升空。

![](https://cdn.beekka.com/blogimg/asset/202308/bg2023080911.webp)

它大概是世界上拖延最久的太空任务。它的上一代 Luna 24 是1976年发射的，整整47年之前，此后俄罗斯再没有进行过任何探月活动。

本次太空任务是上个世纪90年代规划的，2010年代开始开发，2021年完成组装和测试，原定2022年发射。最早参与这个项目的人员，很可能现在都已经退休了。

## 文章

1、[手机 App 备案](https://news.cnstock.com/news,bwkx-202308-5103126.htm)（中文）

![](https://cdn.beekka.com/blogimg/asset/202308/bg2023080907.webp)

工信部[宣布](https://www.gov.cn/zhengce/202308/content_6897437.htm)，从9月开始推行手机 App 备案（包括小程序），类似现有的网站备案。明年4月起，未备案的 App 不得提供接入。

2、[Rhino Linux 介绍](https://linuxiac.com/rhino-linux-unveil-its-first-stable-2023-1-release/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202308/bg2023080908.webp)

Rhino 是一个 Linux 发行版，基于 Ubuntu，但是采用滚动更新模式，比较适合同时喜欢这两者的人。

3、[Mastodon 驱动的博客评论](https://cassidyjames.com/blog/fediverse-blog-comments-mastodon/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202307/bg2023070701.webp)

作者介绍了一种新鲜的做法，将 Mastodon 社交网络用作网站评论。它的最大好处是数据开放，不会被第三方控制，因为 Mastodon 是一个开放式、无中心的网络服务。

4、[2048位的 RSA 密钥2030年可以破解吗？](https://articles.59.ca/doku.php?id=em:20482030)（英文）

![](https://cdn.beekka.com/blogimg/asset/202307/bg2023071102.webp)

有一种说法，随着计算能力的增长，2048位的 RSA 密钥在2030年将被破解，作者分析这种说法是否可信。

5、[Docker Compose 是怎么来的？](https://brianchristner.io/4000-stars-and-counting-a-trip-down-memory-lane/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202307/bg2023071103.webp)

作者是 Docker 的第一批用户，也是最早的 Docker 教程作者之一，他回忆了 Docker 早期是怎么发展而来的。

6、[如何使用 Favicon（2023版）](https://evilmartians.com/chronicles/how-to-favicon-in-2021-six-files-that-fit-most-needs)（英文）

![](https://cdn.beekka.com/blogimg/asset/202307/bg2023071304.webp)

本文介绍网页的 Favicon 现在应该怎么写。

7、[PostgreSQL 如何制作全文搜索引擎](https://xata.io/blog/postgres-full-text-search-engine)（英文）

![](https://cdn.beekka.com/blogimg/asset/202307/bg2023071308.webp)

一篇初学者教程，讲解怎么使用 PostgreSQL 全文搜索功能。

8、[Node.js 应用如何利用多核 CPU](https://www.digitalocean.com/community/tutorials/how-to-scale-node-js-applications-with-clustering)（英文）

![](https://cdn.beekka.com/blogimg/asset/202305/bg2023051902.webp)

本文是一篇简单教程，使用 cluster 模块或 pm2，让 Node.js 应用充分利用多核 CPU。

## 工具

1、[TypeCell](https://www.typecell.org/)

![](https://cdn.beekka.com/blogimg/asset/202306/bg2023061501.webp)

一个 TypeScript 互动式网页环境，可以在网页文档上直接查看代码运行结果，类似于 Jupyter 笔记本，适合内嵌 TypeScript 代码的文档。

2、[小抽屉](https://play.google.com/store/apps/details?id=com.mydobby.pandora)

![](https://cdn.beekka.com/blogimg/asset/202308/bg2023080601.webp)

安卓 App，可以实现屏幕翻译，方便使用外国 App。（[@tuesda](https://github.com/ruanyf/weekly/issues/3328) 投稿）

3、[FoodCa](https://apps.apple.com/cn/app/foodca-ai%E5%8A%A0%E6%8C%81%E7%9A%84%E9%A3%9F%E7%89%A9%E7%83%AD%E9%87%8F%E9%80%9F%E6%9F%A5%E4%B8%8E%E8%AE%B0%E5%BD%95%E5%B7%A5%E5%85%B7/id6451112435)

![](https://cdn.beekka.com/blogimg/asset/202308/bg2023080905.webp)

一个 iOS 应用，基于 chatGPT，实现口语化的输入来记录食物热量，例如“我吃了三颗葡萄”。（[@wdkwdkwdk](https://github.com/ruanyf/weekly/issues/3330) 投稿）

4、[抖音聊天（PC 版）](https://imdesktop.douyin.com/)

![](https://cdn.beekka.com/blogimg/asset/202308/bg2023080904.webp)

抖音推出的 PC 端聊天软件。（[@stefanJi](https://github.com/ruanyf/weekly/issues/3329) 投稿）

5、[麦默笔记](https://github.com/usememos/memos)（memos）

![](https://cdn.beekka.com/blogimg/asset/202308/bg2023081003.webp)

基于 Web 的个人笔记软件，需要自己搭建服务，可以实现与其他站点的聚合。（[@pmxiao](https://github.com/ruanyf/weekly/issues/3349) 投稿）

6、[mdBook](https://github.com/rust-lang/mdBook)

制作电子书的命令行工具，从 Markdown 生成 PDF 和 EPUB 文件，参见[教程](https://mp.weixin.qq.com/s?__biz=MzIyNDQ2MTQwOQ==&mid=2247493433&idx=1&sn=8a6f2c9975f34b9e2e7be62479f24478&chksm=e80c3037df7bb9212d320ca3fff025a81347fbc163add2a0456ea5a522ab6a836755af84ccb6&token=1949573976&lang=zh_CN#rd)。（[@mzhren](https://github.com/ruanyf/weekly/issues/3350) 投稿）

7、[PDDON](https://pddon.com/)

![](https://cdn.beekka.com/blogimg/asset/202308/bg2023081005.webp)

一款在线画图工具，提供低代码和 AI 智能辅助工具。（[@pddon](https://github.com/ruanyf/weekly/issues/3351) 投稿）

8、[Ruff](https://github.com/astral-sh/ruff)

![](https://cdn.beekka.com/blogimg/asset/202306/bg2023061510.webp)

Rust 语言写的 Python Linter，用来检查 Python 代码是否风格正确，运行速度非常快。

9、[ReactPy](https://reactpy.dev/docs/index.html)

![](https://cdn.beekka.com/blogimg/asset/202306/bg2023061511.webp)

使用 Python 实现的 React 框架，让你用 Python 写前端 HTML 页面。

10、[Wasmer](https://wasmer.io/)

![](https://cdn.beekka.com/blogimg/asset/202211/bg2022112408.webp)

一个命令行工具，直接在命令行下运行 wasm 模块，参见[介绍文章](https://wasmer.io/posts/announcing-wasmer-3.0)。

11、[GoodbyeDPI](https://github.com/ValdikSS/GoodbyeDPI)

这个工具是俄罗斯程序员写的，旨在绕过该国的“深度包检测”（DPI），只适用于 Windows。

## 资源

1、[Claude 2 国内镜像](https://www.claudeai.ai/)

![](https://cdn.beekka.com/blogimg/asset/202308/bg2023081004.webp)

Anthropic 公司 AI 模型“Claude 2”的非官方国内镜像，可以免费使用，与官网体验一致。（[@zengdamo](https://github.com/ruanyf/weekly/issues/3338) 投稿）

2、[AI 导航](https://ai.dreamthere.cn/)

![](https://cdn.beekka.com/blogimg/asset/202308/bg2023081006.webp)

该网站收集了各种 AI 站点，并进行了分类。（[@zllz5230](https://github.com/ruanyf/weekly/issues/3352) 投稿）

3、[图解 LangChain 的功能模块](https://www.bilibili.com/read/cv25333824)（中文视频）

![](https://cdn.beekka.com/blogimg/asset/202308/bg2023080906.webp)

LangChain 是目前最流行的生成式 AI 编程框架，作者用一张图讲解它的架构。（[@webup](https://github.com/ruanyf/weekly/issues/3332) 投稿）

4、[狄更斯插图库](https://www.charlesdickensillustration.org/)（Charles Dickens Illustrated Gallery）

![](https://cdn.beekka.com/blogimg/asset/202306/bg2023062001.webp)

这个网站收集了英国伟大小说家狄更斯的作品插图。

![](https://cdn.beekka.com/blogimg/asset/202306/bg2023062002.webp)

5、[React graph gallery](https://www.react-graph-gallery.com/)

![](https://cdn.beekka.com/blogimg/asset/202306/bg2023062404.webp)

这个网站提供各种可视化图表（散点图、直方图、折线图等等），你选中自己想要的，它会展示如何用 React + D3.js 实现这个图。

## 图片

1、[上个世纪的档案馆](https://www.vintag.es/2020/01/central-social-institution-prague.html)

下面的照片是1937年的捷克斯洛伐克社会局的档案馆。它的墙高达四五米，上面密密麻麻有3000个抽屉。

![](https://cdn.beekka.com/blogimg/asset/202205/bg2022053002.webp)

工作人员都使用电动办公桌，这种桌子可以移动到不同的位置，然后垂直上升到指定高度，一直到天花板。

![](https://cdn.beekka.com/blogimg/asset/202205/bg2022053007.webp)

这种场景即使今天看，都很有科幻色彩。

![](https://cdn.beekka.com/blogimg/asset/202205/bg2022053004.webp)

![](https://cdn.beekka.com/blogimg/asset/202205/bg2022053005.webp)

2、[联邦快递 Logo](https://www.rd.com/list/secret-messages-company-logos/)

联邦快递（FedEx）是美国最大的快递公司之一。它的 Logo 初看平淡无奇。

![](https://cdn.beekka.com/blogimg/asset/202308/bg2023081001.webp)

但是，在 E 和 x 之间隐藏着一个指向前方的箭头，暗示快速准确的交付。

## 文摘

1、[Nike 运动鞋的由来](https://every.to/superorganizers/fear-courage-and-willingness)

上个世纪60年代初，22岁的菲利普·奈特（Phil Knight）刚刚从大学毕业。

在大学里，他是校田径队的短跑运动员，对运动鞋很熟悉。离开学校后，他就开始做运动鞋生意，将便宜的日本运动鞋卖到美国。

![](https://cdn.beekka.com/blogimg/asset/202308/bg2023081007.webp)

他发现一款​​名为 Tiger 的日本运动鞋，比美国市场上的任何运动鞋都更轻，可以让选手跑得更快。他决定专门进口这种鞋子。 

![](https://cdn.beekka.com/blogimg/asset/202308/bg2023081008.webp)

但是没多久，他收到一封信，顿时就让这门生意没法做了。对方声称是 Tiger 运动鞋的美国独家经销商，命令他立刻停止销售，否则就要去法庭告他。

奈特当时还是一个很害羞和瘦弱的青年，无法接受这个消息。

他回忆说：“（它让）我陷入了深深的恐惧之中。每天晚上我都会和家人一起吃晚饭，把妈妈做的烤肉和蔬菜放在盘子里。然后我会和父亲坐在角落里，闷闷不乐地盯着电视。”

他开始考虑转行，放弃运动鞋生意。但在此之前，他想再试一下。 

他给制造 Tiger 运动鞋的日本公司 Onitsuka 写了一封信，请求他们改变独家销售授权，允许他在美国销售这款鞋。

他没有得到任何回音。几个月之后，他基本已经放弃了卖鞋。 

就这样过了一段日子，他还是不甘心。他后来回忆说：“我很焦虑，对未来感到恐惧，但是不知何故，我产生了一个疯狂的想法，而且越来越坚定。我不想放弃。”

他的疯狂想法就是，自己一个人飞到日本，去找 Onitsuka 公司，面对面说服公司高层，给予他在美国西海岸销售 Tiger 运动鞋的权利。

结果，他真的做到了，对方同意让他销售了。

他的运动鞋店就这样重新开张了，这就是 Nike 公司的由来。

![](https://cdn.beekka.com/blogimg/asset/202308/bg2023081009.webp)

如果奈特面对挫折和对未来的恐惧，放弃销售运动鞋，没有去日本，Nike 公司也就根本不会存在。

## 言论

1、

所有堆积如山的东西，都是不可预测的。

简化系统的首选方法，就是将一个大系统，转变为多个更小的子系统组成的系统。

-- [《系统、数学和爆炸》](https://pjonori.blog/posts/systems-math-explosions/)


2、

对于任何没有足够财富的人来说，从事科学理论研究事业是一种自私和不负责任的人生选择。

博士后的津贴很低，能够申请的工作岗位很少，通常在长达五年的时间里几乎没有积蓄，积累财富是不可能的，拥有一个家庭也很困难，熬过这个阶段你就已经中年了。

-- [Hacker News 读者](https://news.ycombinator.com/item?id=35778537)

3、

世界有两种趋势，一种是自上而下的大数据运算和自动化监控，另一种是自下而上的加密工具和开放货币/信息网络。这两种趋势的互相竞争，决定了世界的发展趋势。

-- [《开放货币和信息网络的影响》](https://www.lynalden.com/open-networks/)

4、

使用 ChatGPT 写一篇 5,000 字的文章和写一篇 500 字的文章几乎一样容易，因此可以预期，文章的平均长度将持续上升，并且商业公司会针对特定的关键字创建更多的内容。

-- [《后 ChatGPT 世界的 SEO》](https://www.animalz.co/blog/seo-and-chatgpt/)

## 历史上的本周

[如何防止帐号被黑](http://www.ruanyifeng.com/blog/2022/08/weekly-issue-219.html)（2022 #219）

[五菱汽车的产品设计](http://www.ruanyifeng.com/blog/2021/07/weekly-issue-169.html)（2021 #169）

[降雨量和保险博弈](http://www.ruanyifeng.com/blog/2020/08/weekly-issue-119.html)（2020 #119）

[做得好 vs 做得快](http://www.ruanyifeng.com/blog/2019/08/weekly-issue-69.html)（2019 #69）

（完）

