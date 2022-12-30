# 科技爱好者周刊（第 237 期）：真实方位是如何暴露的？

这里记录每周值得分享的科技内容，周五发布。

## 封面图

![](https://cdn.beekka.com/blogimg/asset/202212/bg2022122705.jpg)

12月23日，中国最西端的机场，新疆塔什库尔干机场开通运营，迎来首架航班。它是帕米尔高原（古人说的“葱岭”）的首个机场，就建在冰川脚下。（[via](https://news.sina.com.cn/o/2022-12-23/doc-imxxrpwa1056172.shtml)）

## 本周话题：真实方位是如何暴露的？

很多时候，开发者需要知道用户的地理方位。

最简单的方法，就是查看用户的 IP 地址，它能够确定地理方位。

![](https://cdn.beekka.com/blogimg/asset/202212/bg2022122706.webp)

如果你不想暴露真实方位，需要使用技术手段，伪装自己的 IP 地址。

但是，这个事情不是那么简单，**真实方位其实很难隐藏。**

上周，Hacker News 论坛上，[有人发帖](https://news.ycombinator.com/item?id=34032484)，说他想不通，谷歌怎么知道他的位置。

他从美国去墨西哥出差，为了使用美国的银行服务，全程都用了 VPN，伪装后的 IP 地址是在美国。按理说，服务器根据他的 IP 地址，只会认为他在美国华盛顿州。

![](https://cdn.beekka.com/blogimg/asset/202212/bg2022122707.webp)

但是，等他回到美国，打开家里的电脑。（注意，是家里的电脑，从来没有离开过美国。）浏览器显示，他的位置在墨西哥，推送给他的广告都是西班牙语。

他困惑不解，谷歌怎么会知道，我的真实方位是在墨西哥呢？我没有暴露真实 IP 地址啊。

帖子的下面就有人指点他了：谷歌判断你的地理方位，不仅仅看 IP 地址，更重要的看**你的路由器的 MAC 地址。**

![](https://cdn.beekka.com/blogimg/asset/202212/bg2022122708.webp)

一般来说，路由器很少改变地理方位，买来后放在某个地方，它就会一直放在那里。很少有人带着路由器一起出门。

这意味着，只要知道你使用哪个路由器，根据路由器的方位，就可以推断出你的真实方位。

每个路由器的 MAC 地址都是独一无二，而且固定不变。因此，对于互联网公司来说，<u>只要建一个数据库，收集路由器的 MAC 地址和所在地方位，就能知道用户的真实方位了。</u>

谷歌、苹果和很多互联网公司都是这样干的。安卓系统和 Chrome 浏览器都有这种机制，获取用户正在使用的路由器 MAC 地址，然后调用用户机器的 GPS 判断方位，再把这些数据发给服务器。如果本机没有 GPS 功能，就根据 IP 地址推断方位。

因为将你的 IP 地址与路由器 MAC 地址相匹配，不是实时的，会有一个时间差，所以有时候你出门旅行，方位变了，但是谷歌还会显示以前的方位，要过一段时间以后才会纠正。

如果你真的想避免暴露自己的方位，需要使用剥离了谷歌服务的安卓系统（比如 [GrapheneOS](https://grapheneos.org/)），或者剥离了谷歌服务的 Chrome 浏览器（即 Chromium）。

问题是很多 App 都偷偷收集这些数据，谷歌、苹果这样的大公司，至少是明着干，可能还有办法关掉。小公司是偷偷做，根本不告诉用户，完全防不胜防。

所以，在互联网上，想要隐藏自己的方位，其实非常难。如果电信服务商、操作系统、应用软件都设置了追踪机制，它们联合起来，我觉得几乎没有可能隐藏自己。

## 活动

1、[Flutter 的探索与实践](https://www.bagevent.com/event/8366150?bag_track=001)

跨平台解决方案之中，Flutter 无疑是最受瞩目的。它把图形库打包进 App，真正做到所有平台体验一致。

![](https://cdn.beekka.com/blogimg/asset/202212/bg2022122803.webp)

今年5月，谷歌正式发布 Flutter 3.0 版，可以一个代码库支持 iOS、Android、Web、Windows、macOS、Linux 六大平台，这是目前最强大的。

这里有一个活动消息，想采用 Flutter 的同学可以关注。两周后的1月14日（星期六）下午2点，**字节跳动工程师分享 Flutter 开发实践。**

![](https://cdn.beekka.com/blogimg/asset/202212/bg2022122804.webp)

字节跳动目前有超过70款 App 使用 Flutter 开发，内部开发者累计超过600位，向官方仓库提交合并了大量 PR。

本次活动以 **《深度解析 Flutter 技术探索与实践》** 为主题，一共安排了4个演讲，分享他们的一些做法，以及对于 Flutter 开发的体会和认识。[点击链接](https://www.bagevent.com/event/8366150?bag_track=001)或扫描海报二维码，了解活动详情，并报名预约直播。活动主办者准备了精美的礼品福利抽奖，欢迎报名参加。

## 科技动态

1、[浮动城市](https://www.pangeosyacht.com/projects)

国外一家游艇公司，提出一个设想，要造一个像海龟一样的浮动城市。

![](https://cdn.beekka.com/blogimg/asset/202211/bg2022111704.webp)

它实际上是一艘巨大的船，做成海龟造型，长550米，宽600米。上面是一个小镇，有各种建筑物。

![](https://cdn.beekka.com/blogimg/asset/202211/bg2022111705.webp)

![](https://cdn.beekka.com/blogimg/asset/202211/bg2022111706.webp)

游艇公司通过出售船上的房产和经营酒店获利。这艘船定期在海上航行，停泊各国的港口，船上游客可以周游世界。

![](https://cdn.beekka.com/blogimg/asset/202211/bg2022111707.webp)

![](https://cdn.beekka.com/blogimg/asset/202211/bg2022111708.webp)

但是，这家游艇公司没有透露：这艘船的动力从何而来？怎么保证船上的物资供应？哪里去找能够停泊它的巨大港口？……

![](https://cdn.beekka.com/blogimg/asset/202211/bg2022111709.webp)

这大概率就是一个国外的“PPT 项目”，不过要是真能实现海上的浮动城市，可能具有重大意义。

2、[纽约的人脸识别系统](https://www.nytimes.com/2022/12/22/nyregion/madison-square-garden-facial-recognition.html)

麦迪逊广场花园是纽约的著名体育馆，很多重要的活动都在那里举办。

![](https://cdn.beekka.com/blogimg/asset/202212/bg2022122406.webp)

它归多兰家族所有，老板叫詹姆斯·L·多兰 （James L. Dolan）。

![](https://cdn.beekka.com/blogimg/asset/202212/bg2022122407.webp)

去年，多兰家族被告了。结果，对方委托的律师事务所的所有律师，都被列入了多兰家族的黑名单。

最近，一个律师去麦迪逊广场花园看比赛，入口处的人脸识别系统（下图）认出了他。保安就把他赶出去了，理由是黑名单里的人都不得进入该体育馆。

![](https://cdn.beekka.com/blogimg/asset/202212/bg2022122408.webp)

这件事在纽约闹得沸沸扬扬，律师准备起诉多兰家族滥用人脸识别，打压反对他们的人。不过，麦迪逊广场花园是私人财产，管理者有权拟定黑名单，这个官司并不好打。

这件事的启示是，虽然美国政府口口声声强烈反对人脸识别侵犯个人隐私，但是实际上，人脸识别在美国一直在被广泛使用。

3、[11叶螺旋桨](https://interestingengineering.com/innovation/worlds-first-propeller-with-11-blades)

一家德国公司宣布，成功完成了世界首个11叶螺旋桨的试飞。

![](https://cdn.beekka.com/blogimg/asset/202212/bg2022122806.webp)

飞机螺旋桨的作用，是将发动机的能量转化为推力。叶片的面积越大，推力就越大，所以叶片的宽度和长度比数量更重要。这也是为什么今天很多螺旋桨只有两叶的原因。

但是，如果发动机的功率特别大，而叶片无法做得更大的时候，就可以通过增加叶片数量提升推力。

![](https://cdn.beekka.com/blogimg/asset/202212/bg2022122807.webp)

![](https://cdn.beekka.com/blogimg/asset/202212/bg2022122808.webp)

2019年，这家德国公司已经创造了9叶螺旋桨的世界纪录。所以今年他们挑战11叶螺旋桨。

4、[月球建筑的施工系统](https://makerfairerome.eu/en/nasa-advance-lunar-construction-technology-for-moon-missions/)

美国宇航局 NASA 最近向一家建筑公司拨款5720万美元，要后者开发一套可以在月球建造人类建筑物的施工系统。

![](https://cdn.beekka.com/blogimg/asset/202212/bg2022122409.webp)

这个项目的目标是找到可行的方法，在月球表面上建造飞船着陆区、人类生活区、道路等基础设施，以及可以防止宇宙辐射、热量和微陨石的建筑物。

目前的方案是使用月球土壤，进行 3D 打印。这将是人类第一次在另一个天体上进行建筑工程。美国宇航局还希望，这套方案未来能够移植到火星。

## 文章

1、[CSS 父元素选择器`:has()`](https://www.wisdomgeek.com/development/web-development/css-has-a-parent-selector-now/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202211/bg2022111407.webp)

CSS 以前只有子元素选择器，但是现在有了伪类`:has()`，可以通过子元素选中父元素。

2、[浏览器插件 Tango](https://chriscoyier.net/2022/12/22/tango-browser-extension/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202212/bg2022122405.webp)

CSS Tricks 的创始人 Chris Coyier 的文章，介绍浏览器插件 Tango 快速生成操作指南，效果比产品文档好得多。

3、[curl 如何构造 URL 查询参数](https://daniel.haxx.se/blog/2022/11/10/append-data-to-the-url-query/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202211/bg2022111109.webp)

命令行工具 curl 新引入了一个参数`--url-query`，用来构造 URL 参数。作者介绍它跟以前的类似参数有什么区别。

4、[Rust 命令行工具总结](https://deepu.tech/rust-terminal-tools-linux-mac-windows-fish-zsh/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202211/bg2022110903.webp)

最近有一种趋势，就是使用 Rust 语言重写传统的命令行工具，比如`lsd`替代`ls`、`bat`替代`cat`等等。本文介绍这些新引入的工具。

5、[Windows 10 的 Intel CPU 为什么表现不佳](https://www.brycevandyk.com/poor-alder-lake-performance-when-building-firefox-due-to-scheduling-issues/)（英文）

作者发现，自己的 Windows 10 电脑自从用了英特尔第12代酷睿 CPU，构建速度很慢，16个核心里面只有4个在跑，这是为什么？

6、[Maui 项目介绍](https://news.itsfoss.com/maui-shell-unveiled/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202201/bg2022010203.webp)

Nitrux 是一个新的 Linux 发行版，创造了 Maui Kit 框架，用于编写应用程序。

Mauri 框架基于 Qt，写出来的应用程序可以跨平台，同时运行于 PC 和手机，并且非常美观易用。

7、[巧用版本依赖解决数独](https://www.splitgraph.com/blog/poetry-dependency-resolver-sudoku)（英文）

![](https://cdn.beekka.com/blogimg/asset/202206/bg2022061610.webp)

版本管理器有一套处理版本依赖关系的语法，作者突发奇想，能不能用 Python 版本管理器 Poetry 来解决数独问题？

81个方格可以看作81个软件包，每个包有9个版本（即1-9）。只要给出约束条件，版本管理器会计算应该使用哪个版本，从而解出数独。

8、[“加密猫”面临崩溃](https://spectrum.ieee.org/cryptokitties)（英文）

加密猫（CryptoKitties）是第一个基于区块链（以太坊）的大型游戏，2017年发布。

![](https://cdn.beekka.com/blogimg/asset/202209/bg2022091601.webp)

当年，它曾经轰动一时，甚至造成了以太坊的价格飙升，但是现在已经沉寂了，面临崩溃。这篇报道就分析，为什么基于区块链的游戏可能都不可行。

## 工具

1、[MiniSearch](https://github.com/lucaong/minisearch)

一个 JS 的全文搜索库，支持模糊搜索等很多功能。

2、[YouChat](https://you.com/search?q=2023%E5%B9%B4%E6%98%A5%E8%8A%82%E6%98%AF%E5%93%AA%E4%B8%80%E5%A4%A9&fromSearchBar=true&tbm=youchat)

搜索引擎 You.com 引入了类似 ChatGPT 的 AI 聊天工具，可以无限制使用。

![](https://cdn.beekka.com/blogimg/asset/202212/bg2022122404.webp)

我试了几个中文问题，回答都是错的，现阶段看来只能当作聊天玩具。

3、[Amazing AI](https://sindresorhus.com/amazing-ai)

![](https://cdn.beekka.com/blogimg/asset/202212/bg2022122801.webp)

著名程序员 Sindre Sorhus 的作品，将 AI 绘图引擎 Stable Diffusion 搬到了 Mac 电脑（只支持 M1/M2 CPU）。

这里另有一个类似的 Mac 应用 [Gauss](https://github.com/justjake/Gauss)。

4、[Le Git Graph](https://github.com/NirmalScaria/le-git-graph)

![](https://cdn.beekka.com/blogimg/asset/202210/bg2022101501.webp)

Chrome 浏览器插件，在 GitHub 页面显示各个提交之间的图形关系。

5、[知了](https://github.com/mebtte/cicada)

![](https://cdn.beekka.com/blogimg/asset/202212/bg2022122903.webp)

一个开源的 Web 音乐服务，需要自己架设在服务器或本地，可供多人使用，参见[介绍](https://mebtte.com/introducing_cicada)。（[@mebtte 投稿](https://github.com/ruanyf/weekly/issues/2817)）

6、[Linen](https://github.com/Linen-dev/linen.dev)

![](https://cdn.beekka.com/blogimg/asset/202210/bg2022101909.webp)

一个社区软件，目标是成为 Slack 和 Discord 的替代品，目前只有 Web 版。

7、[V2EX APP](https://github.com/liaoliao666/v2ex)

![](https://cdn.beekka.com/blogimg/asset/202212/bg2022122905.webp)

V2ex 论坛的第三方客户端，支持 iOS 和安卓。（[@alaskasquirrel](https://github.com/ruanyf/weekly/issues/2822) 投稿）

8、[创业公司页面设计](https://console.makery.app/)

![](https://cdn.beekka.com/blogimg/asset/202210/bg2022102004.webp)

这个页面提供各种业务组件（公司图片、FAQ、联系方式等等），让你快速搭建一个创业公司网站的页面，查看效果。

9、[DevDash](https://thedevdash.com/)

![](https://cdn.beekka.com/blogimg/asset/202208/bg2022081003.webp)

命令行终端的仪表盘生成工具，高度可配置，既可以查看本机系统状况，也可以查看外部服务的状况。

## 资源

1、[OpenVerse](https://wordpress.org/openverse/)

![](https://cdn.beekka.com/blogimg/asset/202209/bg2022092904.webp)

一个图片和音频的搜索引擎，据说包含超过6亿件作品，都可以自由使用，不用付费。

2、[中国地铁信息概览](https://metrodb.org/index/beijing.html)

![](https://cdn.beekka.com/blogimg/asset/202212/bg2022122901.webp)

这个网站可视化显示全国各个城市的地铁概况，包括每日的客流量。（[@xcuYao](https://github.com/ruanyf/weekly/issues/2816) 投稿）

3、[Green Wall](https://green-wall.vercel.app/)

![](https://cdn.beekka.com/blogimg/asset/202212/bg2022122902.webp)

这个网站可以查看某个 GitHub 用户的历年活动日历，[代码开源](https://github.com/Codennnn/Green-Wall)。（[@Codennnn](https://github.com/ruanyf/weekly/issues/2814) 投稿）

4、[Codenews](https://codenews.cc/)

![](https://cdn.beekka.com/blogimg/asset/202212/bg2022122904.webp)

一个国人分享技术工具的社区。（[@jqsl2012](https://github.com/ruanyf/weekly/issues/2824) 投稿）

5、[ChatBCG](https://www.chatbcg.com/)

![](https://cdn.beekka.com/blogimg/asset/202212/bg2022122907.webp)

这个网站输入关键词，自动生成 PPT 模板，号称使用 AI 把内容要点都填写好了（下图）。

![](https://cdn.beekka.com/blogimg/asset/202212/bg2022122906.webp)

它好像可以理解中文输入，但是生成的 PPT 是英文。以后，PPT 都是 AI 生成的，就更没有价值了。

## 图片

1、[密西西比河流域](https://hakaimagazine.com/features/the-controversial-plan-to-unleash-the-mississippi/)

密西西比河是美国最长的河流。它有三条主要的支流，流经美国32个州和加拿大两个省。流域面积高达320万平方公里。

![](https://cdn.beekka.com/blogimg/asset/202207/bg2022072505.webp)

上图就是密西西比河流域图，深蓝色的线条就是密西西比河。大家可以看看，它的流域有多大，对美国有多重要。

密西西比河的长度略低于长江，但是流域面积是长江的1.8倍。

2、[星球大战油画](https://www.nacicaba.com/star-wars-paintings/)

一位土耳其艺术家，专门创作以电影《星球大战》为主题的油画。

![](https://cdn.beekka.com/blogimg/asset/202203/bg2022031906.webp)

科幻题材画成油画，感觉很有艺术感。

![](https://cdn.beekka.com/blogimg/asset/202203/bg2022031907.webp)

![](https://cdn.beekka.com/blogimg/asset/202203/bg2022031908.webp)

![](https://cdn.beekka.com/blogimg/asset/202203/bg2022031909.webp)

## 文摘

1、[创业是什么](https://news.ycombinator.com/item?id=15659076)

创业就像游乐场的掷飞镖游戏。

![](https://cdn.beekka.com/blogimg/asset/202212/bg2022122908.webp)

普通人家的孩子买得起一掷。大部分人脱靶了。一些人中靶，赢得了小奖品。极少数人正中靶心，获得大奖。这被当作白手起家的“美国梦”继续存在的证据。

富人家的孩子买得起很多掷。如果愿意，他们可以一遍又一遍地尝试，直到中靶并感觉良好为止。有些人一直坚持下去，直到命中靶心，然后他们就会发表演讲或写博客，介绍创业心得和努力工作的价值。

穷人家的孩子不去游乐场。他们要工作。

2、[蓝牙仍然令人痛苦](https://edition.cnn.com/2022/07/10/tech/bluetooth-technology-headache/index.html)

蓝牙协议诞生已经20年了，从智能手机到冰箱再到灯泡，越来越多的产品通过它进行无线连接。

但是，这个协议依然有着各种令人头痛的问题，对于消费者来说，并不好用。

![](https://cdn.beekka.com/blogimg/asset/202212/bg2022122909.webp)

蓝牙的最大优点是低功耗，缺点就是随之而来的一些物理限制：连接距离短，带宽小，容易受干扰，不安全。

蓝牙信号使用非专有的无线频段进行通信，这有利于它的开发和推广，但也意味着必须与大量使用同样频段的其他电子产品共享和竞争信号。这会产生干扰，从而破坏通信。

蓝牙的安全性也是一个问题。当你安装一个蓝牙扬声器，半径15米以内的任何人都能看到并连接它。这可能会带来安全风险。

但是，由于物联网和智能设备的广泛采用，不同设备的近距离通信越来越重要。蓝牙可以作为粘合剂，将所有设备连接在一起，依然是目前的最佳选择。

![](https://cdn.beekka.com/blogimg/asset/202212/bg2022122910.webp)

可以预料，消费者未来一方面不得不忍受蓝牙的各种缺点，另一方面又不得不依赖它，每天在日常生活中使用它。

## 言论

1、

摩托车的危险性远高于汽车，前者的驾驶员死亡率是后者的27倍。最危险的事情莫过于夜间骑摩托车，占所有死亡事故的近一半。

-- [《摩托车灯的新设计减少事故》](https://news.rice.edu/news/2022/new-motorcycle-lighting-design-could-save-lives)

2、

大多数人都喜欢机场，因为我们去机场，往往是因为一些令人高兴和兴奋的事情。

-- 一位国外 Youtuber

3、

去年，NFT 最疯狂的时候，我从亚马逊买了一大堆 NFT 书籍，想搞清楚它到底是什么。

![](https://cdn.beekka.com/blogimg/asset/202210/bg2022102502.webp)

我很快发现，所有这些书解释 NFT 为什么有价值，都说是因为稀缺性会产生价值。我觉得，这完全是胡说八道，我儿子的涂鸦就很稀缺，但根本不会有人想购买它们。

-- [《假书》](https://lcamtuf.substack.com/p/fake-books)

4、

没有什么比制造电子产品的原材料更能产生废土和矿渣了。因为电子产品所需的材料必须非常纯净，为了达到这种纯度，会产生大量废弃物。

传统采矿的矿渣可占矿石的90%至99%，用于电子产品的采矿矿渣通常是99.9%或更高。

-- [《采矿业的有毒矿渣》](https://gerrymcgovern.com/tailings-minings-toxic-legacy/)

5、

因为有了互联网，现在最聪明的年轻人比以往任何时候都聪明。

-- David Perell

## 历史上的本周

2021年（第189期）：[下一个内卷的行业](https://www.ruanyifeng.com/blog/2021/12/weekly-issue-189.html)

2020年（第139期）：[生物学的可怕进展](https://www.ruanyifeng.com/blog/2020/12/weekly-issue-139.html)

2019年（第87期）：[新人要为团队写文档](https://www.ruanyifeng.com/blog/2019/12/weekly-issue-87.html)

2018年（第36期）：[程序员将来会不会过剩？](https://www.ruanyifeng.com/blog/2018/12/weekly-issue-36.html)

## 说明

周刊每周五发布在[我的个人网站](http://www.ruanyifeng.com/blog)和微信公众号《阮一峰的网络日志》，欢迎订阅。

周刊是开源的，自由使用，仓库在 GitHub: [ruanyf/weekly](https://github.com/ruanyf/weekly)，投稿请到仓库提交 issue。我们还开设了[《谁在招人？》](https://github.com/ruanyf/weekly/issues/2771)服务，欢迎发布或查看程序员招聘信息。

商业合作和产品推广，请邮件联系我（Email： yifeng.ruan@gmail.com ）。

## 鸣谢

文档和笔记服务 [FlowUs](https://flowus.cn?promotionChannel=GW_RYF_01) 对周刊提供支持，非常感谢。

[FlowUS](https://flowus.cn?promotionChannel=GW_RYF_01) 是新一代知识管理与协作平台，集成了“文档+表格+网盘”，具有写文档、制作主页、管理数据、存储文件等多种用途。

周刊开设了[ FlowUs 专栏](https://ruanyf-weekly.flowus.cn/?code=FLOWUS&promotionChannel=WX_RYF_00)，欢迎大家也去开设自己的专栏和页面。

![](https://cdn.beekka.com/blogimg/asset/202207/bg2022072108.webp)

（完）

