# 科技爱好者周刊（第 256 期）：最酷的乐高作品

这里记录每周值得分享的科技内容，周五发布。

本杂志[开源](https://github.com/ruanyf/weekly)，欢迎[投稿](https://github.com/ruanyf/weekly/issues)。另有[《谁在招人》](https://github.com/ruanyf/weekly/issues/3091)服务，发布程序员招聘信息。合作请[邮件联系](mailto:yifeng.ruan@gmail.com)（yifeng.ruan@gmail.com）。

## 封面图

![](https://cdn.beekka.com/blogimg/asset/202305/bg2023052522.webp)

“520”那一天，杭州市西湖区绿地出现了一朵巨型的 3D 打印玫瑰，直径2.4米。（[via](https://weibo.com/2097152664/N1jdzBewt)）

## 最酷的乐高作品

乐高，大家都知道吧，一家世界著名的玩具公司，主要生产塑料积木。

你买来一包塑料零件，可以按照图纸组装，也可以搭成自己想要的形状。

![](https://cdn.beekka.com/blogimg/asset/202305/bg2023052219.webp)

前些天，国外网友用乐高，搭出一个你绝对想不到的东西：[齿轮减速器](https://brickexperimentchannel.wordpress.com/2023/04/29/lego-googol-machine/)。

我觉得太酷了，今天分享给大家。

![](https://cdn.beekka.com/blogimg/asset/202305/bg2023052210.webp)

它的动力来自一个电动机，每分钟旋转375次。

![](https://cdn.beekka.com/blogimg/asset/202305/bg2023052404.webp)

然后，经过一系列齿轮减速，最终会带动一个塑料玩偶。

![](https://cdn.beekka.com/blogimg/asset/202305/bg2023052211.webp)

最酷的地方在于，它的减速效果达到了匪夷所思的 10^100 : 1 ！

也就是说，电动机转动 10^100 圈，玩偶才会转动 1 圈。这个数字实在太大了，据说宇宙所有原子的总和也不过 10^80。这意味這，直到宇宙毁灭，这个玩偶可能还没有转动一格。

这么神奇的“齿轮减速”，原理很简单，就是小齿轮带动大齿轮。

![](https://cdn.beekka.com/blogimg/asset/202305/bg2023052212.webp)

上图中，一个8齿的小齿轮带动一个24齿的大齿轮。由于后者比前者大3倍，所以转速会放慢3倍。

接着，大齿轮上面再固定一个8齿的小齿轮，去带动一个更大的40齿的齿轮。

![](https://cdn.beekka.com/blogimg/asset/202305/bg2023052213.webp)

因此，第三个齿轮的转速，就比第二个齿轮慢了5倍（40 / 8），相当比第一个齿轮慢了15倍（3 x 5）。

不断重复这种做法，转速就会越来越慢。

![](https://cdn.beekka.com/blogimg/asset/202305/bg2023052214.webp)

![](https://cdn.beekka.com/blogimg/asset/202305/bg2023052215.webp)

作者甚至还用到了168齿的超级齿轮。

![](https://cdn.beekka.com/blogimg/asset/202305/bg2023052216.webp)

以及其他一些减速齿轮的组合。

![](https://cdn.beekka.com/blogimg/asset/202305/bg2023052217.webp)

![](https://cdn.beekka.com/blogimg/asset/202305/bg2023052218.webp)

最终的减速比，就达到了惊人的 10^100 : 1。

![](https://cdn.beekka.com/blogimg/asset/202305/bg2023052220.webp)

我从没想过，乐高积木能达到宇宙级别的数量级，真是神奇。

## 腾讯 PAG

上周，我遇到一个腾讯的朋友。

他说，腾讯有一个很重要的技术产品，很多人都不知道，值得你好好了解一下。

我就问是什么，答曰 [PAG 动效组件](https://pag.art/)。

![](https://cdn.beekka.com/blogimg/asset/202305/bg2023052201.webp)

我的第一反应是，一个动画效果工具，值得特别了解吗？但是看了一下，它果真不简单。

表面上，它的最大特点是跨平台，只要做一次动画，就能用在**所有平台**（手机、Web、小程序、Windows、Linux、Mac……）。PAG 这个名字就是“跨平台动画”（ Portable Animated Graphics）。

但是，怎么才能做到呢，所有平台对于同一个动效文件，渲染出一样的动画效果？

答案就是腾讯用 C++ 写一个图形渲染库，为每个平台做了一个适配层。

所以，PAG 跟其他动效工具都不一样，不依赖平台自带的图形渲染，本质上是**一套独立的图形渲染解决方案**。

<iframe frameborder="0" src="https://v.qq.com/txp/iframe/player.html?vid=n3515fscu2f" allowFullScreen="true" width="600" height="400"></iframe>

由于自带图形渲染，不必考虑各个平台的适配，所以 PAG 具备很多其他方案没有的优点。

**（1）开发成本低。** 实现一次，就能用于所有平台，并且效果保证一致。

**（2）简化开发流程。** 以前，动效是一件很麻烦、交付成本很高的事情。设计师在 After Effects 完成设计，然后导出给程序员看，让后者去实现，一般需要来回沟通修改多次，才能完成。

现在就简单了：程序员负责在应用里面接入 PAG 的 SDK；设计师安装一个 After Effects 插件，直接导出 PAG 文件，放到应用里面，自己就能上线。双方完全可以不见面。

**（3）支持所有 AE 特性。** After Effects 能实现的效果，PAG 都能还原出来。

**（4）资源占有少。** PAG 文件是二进制的，相比另一个著名动效工具 Lottie 的 SVG 文件，体积更小，解析时间更短。很多复杂的动效，只有 2 KB 左右。由于是二进制文件，图片、音频、视频都能打包进去，作为一个文件发布。

**（5）自带开发工具 [PAG Viewer](https://pag.art/docs/pag-viewer.html)**。 它可以预览、替换和调整二进制包里面的图片和文字，用于上线前的效果确认，也方便复用动效资源。

![](https://cdn.beekka.com/blogimg/asset/202305/bg2023052203.webp)

这样一个好用的工具，腾讯从2017年开始研发，已经6年了。它在腾讯的所有主要业务线上已经落地了上千个产品，微信、QQ、王者荣耀、小红书、知乎等都在使用它。微信视频直播间的各种礼物特效，王者荣耀的战报特效，就是用它实现的。

官网的[案例画廊](https://pag.art/case.html)和素材库网站“[动池](https://animate.art/)”，有大量作品展示，大家可以去看看。

![](https://cdn.beekka.com/blogimg/asset/202305/bg2023052204.webp)

去年，腾讯[开源](https://github.com/tencent/libpag)了 PAG，详细的文档可以去 GitHub 搜 libpag，里面还有[源码仓库](https://github.com/tencent/libpag)，已经有3000多颗星了。也可以去官网 [pag.art](https://pag.art/) 了解更多产品相关信息。

如果你对动效感兴趣，或者有这方面的产品需求，不妨尝试一下 PAG。

## 科技动态

1、[声控手机](https://interestingengineering.com/innovation/humane-ai-wearable-potential-iphone-killer)

一家美国创业公司，发布了一个可穿戴的声控装置，号称可以取代手机。

![](https://cdn.beekka.com/blogimg/asset/202305/bg2023052205.webp)

它的最大特点就是没有屏幕，投影在手掌（或者其他表面）上操作。由于是声控，它不需要很复杂的操作界面。

据说，它还有一个意料之外的好处，就是解决了手机上瘾。

2、[AI 漫画](https://the-decoder.com/the-last-stargazer-is-a-comic-created-with-ai-art/)

一个美国漫画家使用 AI 模型，生成了一本漫画书，已经上架销售了。

![](https://cdn.beekka.com/blogimg/asset/202211/bg2022112704.webp)

漫画家说，这件事的最大难度是 AI 很难保持画风统一。为了让主角前后长得一样，他不得不每次都将主角的长相（下图中间的方块），先输入模型。

![](https://cdn.beekka.com/blogimg/asset/202211/bg2022112702.webp)

即使如此，模型生成的图片还不能直接使用，比如上图的人物缺少右腿，漫画家必须手动进行修改。

尽管如此，最后成品的效果还是不错的。

![](https://cdn.beekka.com/blogimg/asset/202211/bg2022112703.webp)

整部漫画书耗时一个月制作，目前在亚马逊网上书店销售，相当畅销。以后的文艺作品，也许部分或全部都是 AI 提供给我们的。

3、[洛杉矶候车亭](https://walkingtheworld.substack.com/p/why-the-us-cant-have-nice-things)

洛杉矶市政府大张旗鼓地宣布，引入了一种新的候车亭，既可以遮阳，夜间还能当作路灯。

![](https://cdn.beekka.com/blogimg/asset/202305/bg2023052511.webp)

问题是，它只能供一个人使用，既不足以遮阳，也不足以照明，令人相当傻眼。

![](https://cdn.beekka.com/blogimg/asset/202305/bg2023052512.webp)

媒体一片哗然，质疑这种候车亭有什么用。而且，它的成本是每个1万美元。

其实，洛杉矶市内的候车亭，是那种正常的大候车亭（下图），但是经常被滥用，还会被流浪汉占据。

![](https://cdn.beekka.com/blogimg/asset/202305/bg2023052513.webp)

市政府就想出在郊区的小站点，建这种简易候车亭。只是设计得太简陋，还不如直接建一个路灯。

4、[无叶片飞机](https://interestingengineering.com/transportation/us-startups-bladeless-vtol-can-reach-up-to-08-mach)

垂直起降的飞机，一般都有螺旋桨叶片，比如直升飞机。但是，一家美国开发出了无叶片的垂直起降飞机。

![](https://cdn.beekka.com/blogimg/asset/202301/bg2023011901.webp)

它的原理与无叶片风扇相似，采用压缩空气产生推力。它的顶部有两个方框，会喷出气体。但是，动力比较小，目前只能用于小型的无人飞机。

![](https://cdn.beekka.com/blogimg/asset/202301/bg2023011902.webp)

## 文章

1、[AI 模型为什么都以羊驼起名](https://sspai.com/post/79443)（中文）

![](https://cdn.beekka.com/blogimg/asset/202305/bg2023051819.webp)

那些开源的 AI 模型的名字，往往跟偶蹄目羊驼有关，这是为什么。

2、[飞碟幻想消亡史](https://mp.weixin.qq.com/s/x3haEmgZF2qZ4Os4vmixjA)（中文）

![](https://cdn.beekka.com/blogimg/asset/202305/bg2023052509.webp)

上个世纪《飞碟探索》曾经是国内发行量最大的科普杂志之一。本文回顾了它的兴衰史，“飞碟热”的消退也是中国人科学素质提高的一种表现。

3、[我发现的一个支付宝漏洞](https://zhuanlan.zhihu.com/p/625230704)（中文）

![](https://cdn.beekka.com/blogimg/asset/202305/bg2023052517.webp)

作者先在“闲鱼”购物，再在支付宝付款，结果被骗。他发现骗子钻了漏洞，通过代码让交易自动确认“收货”。（[@childrentime](https://github.com/ruanyf/weekly/issues/3141) 投稿）

4、[我的线上立案遭遇](https://mp.weixin.qq.com/s/yxiKVuSSZD16id698gIvKA)（中文）

![](https://cdn.beekka.com/blogimg/asset/202305/bg2023052518.webp)

作者跟银行发生纠纷，准备线上向法院申请立案，但是法院的立案系统很难用，一连操作了四次还没成功。（[@dingjs](https://github.com/ruanyf/weekly/issues/3138) 投稿）

5、[英特尔发布全新架构 x86S](https://news.mydrivers.com/1/911/911250.htm)（中文）

![](https://cdn.beekka.com/blogimg/asset/202305/bg2023052508.webp)

英特尔发布了一个新的 CPU 指令集 x86S，只支持64位模式，可以简化 CPU 的设计。

6、[zip 域名的安全担忧](https://www.bleepingcomputer.com/news/security/new-zip-domains-spark-debate-among-cybersecurity-experts/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202305/bg2023051901.webp)

.zip 和 .mov 现在都是顶级域名，开放注册。[setup.zip](https://setup.zip) 已经不仅是文件，而是一个可以访问的域名。这可能会有一点安全风险。

7、[无边界鼠标](https://learn.microsoft.com/en-us/windows/powertoys/mouse-without-borders)（英文）

![](https://cdn.beekka.com/blogimg/asset/202305/bg2023052401.webp)

微软发布了一项新功能“无边界鼠标”（Mouse Without Borders），Windows 直接支持一个鼠标操作局域网的四台电脑。

8、[别再说 C/C++](https://brycevandegrift.xyz/blog/stop-saying-c-and-c++/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202305/bg2023052304.webp)

很多人认为，C 和 C++ 是两种很相似的语言，前者是后者的子集。本文提出这种看法不对，它们非常不一样。（[@wrenashe](https://github.com/ruanyf/weekly/issues/3136) 投稿）

## 数据仓库 ByConity 开源 + 招聘

对于数据处理、数据库感兴趣的同学看过来。

本周有一个大消息，国内前沿的、字节自研的**云原生数据仓库 ByConity 正式开源了**（详见[官方文章](https://mp.weixin.qq.com/s/BQvlOnzD56wacIj2HJgQpA)）。

![](https://cdn.beekka.com/blogimg/asset/202305/bg2023052515.webp)

大家应该知道，企业级的、大规模数据分析处理，一般不建议使用数据库，而是要使用数据仓库。

字节的数据平台团队，在国际著名数据仓库软件 ClickHouse 的基础上，根据国内的实际情况和自身需要，进行了大规模改造，用了几年时间才做出了 [ByConity](https://byconity.github.io/)。

他们早先曾经发布过商业版 ByteHouse，这一次是[代码彻底向社区开源](https://github.com/ByConity/ByConity)，所有人都可以自由使用这一款字节投入重本的关键底层软件。

它具有读写分离、弹性扩缩容、租户资源隔离和数据读写的强一致性等特点，非常适合大企业的数据分析和云数据计算。

据我知道，开发团队曾经想将自研的部分，合并回 ClickHouse。但是，对方看了代码以后，表示修改的地方太多了，也加了很多功能，建议另起一个独立项目。

欢迎大家到 [ByConity](https://byconity.github.io/) 官网进一步了解，试用这款产品。

另外，字节数据平台团队还在不断成长，正在招聘 OLAP 引擎工程师和数据仓库工程师，有意者可以联系他们的 HR（邮件：chenlingwei.0316@bytedance.com）。

## 工具

1、[Convoy](https://github.com/frain-dev/convoy) 

![](https://cdn.beekka.com/blogimg/asset/202304/bg2023040108.webp)

开源的 Webhooks 网关，自带管理后台，具有重试、速率限制、静态 IP、熔断等大量功能。

2、[AME Wizard](https://ameliorated.io/)

![](https://cdn.beekka.com/blogimg/asset/202304/bg2023040119.webp)

一个修改 Windows 11 配置的工具。特点是可以根据使用场景，从它的网站下载对应的配置文件，然后运行该文件就完成配置。

3、[RunApi](https://www.showdoc.com.cn/runapi/30291)

![](https://cdn.beekka.com/blogimg/asset/202305/bg2023052302.webp)

国内公司开发的一个跨平台桌面软件，用于 API 接口开发测试，类似于 Postman。（[@star7th](https://github.com/ruanyf/weekly/issues/3128) 投稿） 

4、[Shaku](https://github.com/JSerZANP/shaku)

![](https://cdn.beekka.com/blogimg/asset/202305/bg2023052303.webp)

一个 Markdown 页面的增强渲染工具，可以基于代码块里面的注释，将代码渲染成指定样式（上图），详见[介绍文章](https://jser.dev/2023-05-14-introducing-shaku/)。（[@DongHY1](https://github.com/ruanyf/weekly/issues/3133) 投稿）

5、[eslint-plugin-check-file](https://github.com/DukeLuo/eslint-plugin-check-file)

一个 ESLint 插件，检查文件名是否符合指定规则。（[@DukeLuo](https://github.com/ruanyf/weekly/issues/3132) 投稿）

6、[Soft Serve](https://github.com/charmbracelet/soft-serve)

![](https://cdn.beekka.com/blogimg/asset/202304/bg2023040202.webp)

只需在命令行执行一条命令，就能自己搭建 Git 服务器，简单易用，但是不带 Web 界面。

7、[JShelter](https://jshelter.org/)

![](https://cdn.beekka.com/blogimg/asset/202304/bg2023040403.webp)

一个浏览器扩展，指定你要关闭哪些浏览器 API，主要用来防止被追踪。

8、[Tails](https://tails.boum.org/index.en.html)

![](https://cdn.beekka.com/blogimg/asset/202301/bg2023010701.webp)

一个融合了 Debian 和 Tor 的操作系统，放到 U 盘里面，插入 USB 接口就能用，可以很好地保护隐私。

9、[Just](https://just.systems/)

![](https://cdn.beekka.com/blogimg/asset/202301/bg2023011002.webp)

一个命令运行器，类似于 Make，但不具备构建功能。

它允许把一个项目的所有命令行命令，都写在一个文件里面，并可以指定命令之间的依赖关系，还可以跨平台使用。

10、[Dora.ai](https://www.dora.run/)

![](https://cdn.beekka.com/blogimg/asset/202305/bg2023052521.webp)

国人开发的一个 AI 工具，给出文本描述就能生成网页，还能添加 3D 互动。目前处于测试阶段，需要排队登记内测资格。

[Product Hunt 的投票中](https://www.producthunt.com/posts/dora-ai-alpha)，暂时排在第一，作者到周刊讨论区求票了。（[@CharlesLiuyx](https://github.com/ruanyf/weekly/issues/3144) 投稿）

## 稀土开发者大会

以前有同学问我，怎么建立行业人脉？

你长期做一个开源项目，或者长期写一个科技博客，就会认识很多人了，前提是你要长期坚持。

快一点的方法也有，就是**多参加线下的技术会议**，多跟参会者和讲师聊天，倾听他们讲自己的项目，你也说说你的项目，大家就会成为朋友。

否则，你说为什么大家愿意周末飞来飞去，参加技术会议？网上什么不能做，线下参会还不就是为了认识人嘛。很多创业公司的合伙人，就是在技术会议上认识的。

今天说这个话题，是为了宣布一个消息。**周刊非常荣幸，成为了今年的[“稀土开发者大会”](https://conf.juejin.cn/xdc2023/?utm_source=0525rrydrz)的协办媒体之一。** 大会马上举行了，就在6月30日到7月1日，欢迎大家参会。

这个大会的主办者，是国内最大的技术社区之一的[稀土掘金社区](https://juejin.cn/?utm_source=0525ryfdrz)。前几年疫情时期，尽管非常困难，大会一直坚持举办，每次都邀请很多大公司的演讲者。

今年更隆重，安排了十几个论坛和许多干货演讲，覆盖了当前几乎所有的开发热点领域。

大会套票已经开始发售了，**学生票现在只要99元**。我印象中，这是国内技术大会最便宜的，差不多一张电影票的价格，但是你可以参加两天的所有活动，跟讲师线下交流。

![](https://cdn.beekka.com/blogimg/asset/202305/bg2023052507.webp)

学生票不含餐，另有含餐的套票，使用**专属优惠码“ruanyifeng”** 可以799元购买大会尊享全票，适合公司为工程师购买。

会议地点是北京望京附近的新云南皇冠假日酒店，酒店座位有限，大家如果想去，建议尽早购票，避免座位售罄。访问[大会官网链接](https://conf.juejin.cn/xdc2023/?utm_source=0525rrydrz)，或者扫描上方二维码，了解日程详情，并可以报名购票。

## 资源

1、[LangChain 和 LlamaIndex 项目](https://leanpub.com/langchain/read)

![](https://cdn.beekka.com/blogimg/asset/202305/bg2023052002.webp)

英文电子书，介绍这两个重要的 AI 开源项目的用法，对于自己架设 AI 模型很有帮助，免费阅读。

2、[bing 必应壁纸数据库](https://github.com/mouday/wallpaper-database)

![](https://cdn.beekka.com/blogimg/asset/202305/bg2023052301.webp)

网友提供从必应壁纸抓取的数据。（[@mouday](https://github.com/ruanyf/weekly/issues/3126) 投稿）

3、[强化学习 100 题](https://p100.koki-saitoh.com/zh-CN)

![](https://cdn.beekka.com/blogimg/asset/202305/bg2023052519.webp)

日本的 AI 畅销书作者斋藤康毅为他的深度学习系列书籍创建的专题网站，最近推出了中文版，可用来对强化学习知识查漏补缺。（[@RiverTwilight](https://github.com/ruanyf/weekly/issues/3143) 投稿）

4、[OpenWrt 固件定制](https://supes.top/)

![](https://cdn.beekka.com/blogimg/asset/202304/bg2023041908.webp)

网友开发的路由器 Openwrt 系统定制网站，代码[开源](https://github.com/kiddin9/OpenWrt_x86-r2s-r4s-r5s-N1)。

## 图片

1、[如果历史](https://restofworld.org/2023/ai-tiktok-creators-rewrite-history/)

国外的 Tiktok 出现了一个“虚构历史”的风潮，许多账户发布 AI 生成的虚构历史的图片和视频，吸引了很多观众。

一个很热门的话题是“如果印度统治英国会怎么样？”，AI 模型给出了英国警察在马路上骑骆驼的画面。

![](https://cdn.beekka.com/blogimg/asset/202305/bg2023052206.webp)

其他话题还包括“如果墨西哥赢得了1848年美墨战争？”、“如果印加帝国存在到今天？”。

![](https://cdn.beekka.com/blogimg/asset/202305/bg2023052207.webp)

随着 AI 越来越强大，这种虚构历史的内容可能会越来越多。

2、[地形图](https://twitter.com/Locati0ns)

一位 3D 打印爱好者，将各国和各地区的地形图 3D 打印出来，很直观。

泰国

![](https://cdn.beekka.com/blogimg/asset/202203/bg2022030907.webp)

加利福尼亚州

![](https://cdn.beekka.com/blogimg/asset/202203/bg2022030908.webp)

西班牙

![](https://cdn.beekka.com/blogimg/asset/202203/bg2022030909.webp)

## 文摘

1、[明希豪森三难困境](https://zh.wikipedia.org/wiki/%E6%98%8E%E5%B8%8C%E8%B1%AA%E6%A3%AE%E4%B8%89%E9%9A%BE%E5%9B%B0%E5%A2%83)

德国哲学家曾经提出，凡是使用数学和逻辑学证明的命题，不可能是绝对真理。

或者反过来说，绝对真理不可能用数学和逻辑学就能证明。

理由是如果要证明真理，论证必须有可以依赖的前提。但是，前提是否正确也需要论证，那么最终只有三种可能性。

> - 循环论证：论点与论据互相支持。
> - 无穷倒退：论证的前提没有尽头。
> - 武断终止：论证终止于一个广泛接受的前提，不再对这个前提进行论证。

这三种可能性都不够理想，故称为“明希豪森三难困境”。

![](https://cdn.beekka.com/blogimg/asset/202305/bg2023052520.webp)

明希豪森男爵是德国民间故事里面的一位虚构人物，陷在沼泽时，曾经拉着自己的头发逃出了沼泽，常用来比喻不可能的事情。

这告诉我们，数学和逻辑学是有局限的，它们必须建立在一些无法证明的、公认的公理之上。

## 言论

1、

美国经济的一个优势是，在美国创业很容易，解雇员工和企业破产也很容易，这大大方便了资源的快速重组。

-- [《美国经济的出色表现》](https://www.economist.com/leaders/2023/04/13/the-lessons-from-americas-astonishing-economic-record)

2、

工作永无止境，所以学会热爱工作，享受工作，沉迷于工作吧，否则人生就太痛苦了。

-- [《工作永无止境》](https://patwalls.com/the-work-never-ends)

3、

人们认为谷歌是一个由研究人员、工程师、产品经理、QA、项目经理、管理人员组成的优秀团队的集体。不是的。

虽然有很多杰出的工程师，一些世界级的研究人员，偶尔会有一些热情的产品经理，但总的来说，谷歌只是一个大集团，除了有钱之外，与大型政府组织没有什么不同。效率低下是公司规模扩大时的副作用。

-- [Reddit 读者评论](https://old.reddit.com/r/ArtificialInteligence/comments/12h2ppg/ive_tested_google_bard_vs_chatgpt_and_im_shocked/jfo3dmx/)，谷歌过去10年把钱花到了哪里

4、

一旦你的手机与手机信号塔开始连接，你就没有隐私了。

-- [《手机的“位置关闭”开关是一个谎言》](https://gabrielsieben.tech/2023/05/01/the-location-off-switch-on-your-phone-is-a-lie/)

## 历史上的本周

[程序员是怎样的人](http://www.ruanyifeng.com/blog/2022/06/weekly-issue-209.html)（2022 #209）

[游戏开发者的年薪](http://www.ruanyifeng.com/blog/2021/05/weekly-issue-159.html)（2021 #159）

[播客的价值](http://www.ruanyifeng.com/blog/2020/05/weekly-issue-109.html)（2020 #109）

[互联网时代很难交朋友](http://www.ruanyifeng.com/blog/2019/06/weekly-issue-59.html)（2019 #59）

## 鸣谢

周刊得到国内新一代知识管理与协作平台 [FlowUs](https://flowus.cn?promotionChannel=GW_RYF_01) 的帮助，深表感谢。

[FlowUS](https://flowus.cn?promotionChannel=GW_RYF_01)  = 文档 + 表格 + 网盘。你可以用它写文档、做主页、管理数据、存储文件等等。

每一期周刊同时发布在[ FlowUs 专栏](https://ruanyf-weekly.flowus.cn/?code=FLOWUS&promotionChannel=WX_RYF_00)，欢迎大家也去开通自己的专栏和主页。

![](https://cdn.beekka.com/blogimg/asset/202303/bg2023030205.webp)

（完）

