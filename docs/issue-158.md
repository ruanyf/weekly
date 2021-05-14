# 科技爱好者周刊（第 158 期）：内容渠道的贬值

这里记录每周值得分享的科技内容，周五发布。

本杂志开源（GitHub: [ruanyf/weekly](https://github.com/ruanyf/weekly)），欢迎提交 issue，投稿或推荐科技内容。

周刊讨论区的帖子[《谁在招人？》](https://github.com/ruanyf/weekly/issues/1747)，提供大量程序员就业信息，欢迎访问或发布工作/实习岗位。

## 封面图

![](https://cdn.beekka.com/blogimg/asset/202105/bg2021051305.jpg)

首届中国国际消费品博览会在海口市开幕，开幕式有1000架无人机表演了不同的造型，照亮了夜空。（[via](http://pic.people.com.cn/n1/2021/0507/c1016-32096680.html)）

## 本周话题：内容渠道的贬值

上周，美国的 [Verizon 公司](https://www.cnbc.com/2021/05/03/verizon-sells-yahoo-and-aol-businesses-to-apollo-for-5-billion.html)宣布，将以前收购的两个网站—— AOL 和 Yahoo ——一起打包卖掉，一共50亿美元。

![](https://cdn.beekka.com/blogimg/asset/202105/bg2021050902.jpg)

这是怎么回事呢？Verizon 是美国第二大通信商，运营 4G 和 5G 网络。几年前，它突然心血来潮，决定进军内容行业，不仅提供通信服务，还要提供内容。

美国三大新闻门户网站，它一口气收购了第一名的 Yahoo（2017年45亿美元） 和第三名的 AOL（2015年44亿美元），另一家 MSN 属于微软，它动不了。

![](https://cdn.beekka.com/blogimg/asset/202105/bg2021050903.jpg)

买来以后，Verizon 就发现了真相，内容行业根本不行，非常难做，那些门户网站疲软不堪，业务毫无起色。去年又赶上了疫情，于是不想再撑了，决定认赔出局，抛售旗下的媒体资产，集中精力做无线通信。两大门户买来时将近90亿，卖掉只有50亿，仅仅四五年的时间，贬值了将近一半。

**内容渠道的贬值，是一个全世界的普遍现象。** 国内的几大门户网站，这几年也在走下坡路。不仅仅是它们，传统的内容类网站都不行，论坛和博客社区都在凋谢，怎么都做不起来。天涯社区、猫扑社区，当年红极一时，现在都是奄奄一息。豆瓣的社区也不成功，只是因为它有资料库业务，所以还能维持。

贬值到什么程度，我举两个例子。（1）2008年，微软公司曾经报价446亿美元收购 Yahoo，被拒绝，理由是报价太低。到了现在，Yahoo 的价值连当年的零头都不到。（2）2013年，博客平台 Tumblr 以11亿美元的价格被收购，仅仅6年后，2019年又以300万美元卖出，贬值了99.7%，相当于白送。

![](https://cdn.beekka.com/blogimg/asset/202105/bg2021050904.jpg)

**互联网是高增长行业，可是为什么，内容渠道却在大幅贬值呢？**

我认为，根本原因是，内容的生产方式已经变了。以前，内容是媒体生产的，比如报纸、电视台、通讯社每天发布内容； **而现在，内容是用户生产的，或者准确说，是用户发现的。** 你只要有手机，就能随时发布消息、照片和视频，别人看到以后进行转发，热点榜就这样源源不断产生了。

用户获取内容的主要渠道，已经从内容类网站转向了社交平台。用户看到什么内容，不再是网站主编决定的，而是由热搜榜和推荐算法决定的。所以，内容渠道才会大幅贬值，因为它已经不重要了。

**内容渠道的贬值，一个直接后果就是，内容生产者也在贬值。** 内容消费向一些网红作者集中，其它的内容生产者基本赚不到钱，所以内容生产行业（作家、歌手、影视公司等等）我都不看好。最终，绝大部分的内容生产者，如果只依靠单纯的内容消费，恐怕都无法生存下去，必须有其他赚钱门路。

## 浏览器图形渲染入门

本周向大家介绍一门中级前端课程，研究浏览器的图形渲染机制。

网页从代码变成一张五彩斑斓的页面，靠的就是浏览器的图形渲染引擎，它负责处理布局、色彩和动画。W3C 委员会给出了一套接口，方便开发者调用渲染引擎，生成更精细、更高级的图形效果。这套接口叫做 Canvas，我们可以通过它高效地绘制任意图形。

![](https://cdn.beekka.com/blogimg/asset/202105/bg2021051201.jpg)

Canvas 接口又分成两大类，一类属于 2D 的平面图形引擎，另一类属于 3D 的空间图形引擎。后者可以跟显卡通信，生成 3D 游戏的画面，被单独称为 WebGL 接口。这两个接口是前端的一个独立方向，属于前端图形学。

![](https://cdn.beekka.com/blogimg/asset/202105/bg2021051202.jpg)

各种炫酷的页面图形效果和动画的基础，就是前端图形学。它对于公司的业务正变得越来越重要，图形工程师属于目前最紧俏的前端岗位之一，大厂都在大量招聘。因为小游戏和营销活动的需求太大，图形工程师非常缺人。

本周的专题课就是讲解 **如何调用 Canvas 接口，构建一个你自己的简易绘图引擎** ，内容精炼实用，注重系统性，原理和实战并重。课程由腾讯课堂“双认证”机构——京程一灯制作，下面是主要课程内容。

![](https://cdn.beekka.com/blogimg/asset/202105/bg2021051203.jpg)

课程原价98元，现在只需 **0.02元** 。微信扫描下方二维码，进群后即可报名，保证无套路。

![](https://cdn.beekka.com/blogimg/asset/202105/bg2021051204.jpg)

报名成功后，会再送价值294元的资料《Vue3 + TypeScript 高级教程》。

## 资讯

1、[机织运动鞋](https://spectrum.ieee.org/tech-talk/robotics/industrial-robots/adidas-futurecraft-3d-printed-robot-woven-sneaker)

![](https://cdn.beekka.com/blogimg/asset/202104/bg2021041902.jpg)

运动鞋是一种劳动力密集的产品，需要手工制作。阿迪达斯最近研发了一款 Futurecraft Strong 跑鞋，尝试全自动机器制造运动鞋。它的鞋底是 3D 打印，鞋面采用 2,000 多条不同的线，由机器编织而成。

![](https://cdn.beekka.com/blogimg/asset/202104/bg2021041903.jpg)

![](https://cdn.beekka.com/blogimg/asset/202104/bg2021041904.jpg)

这种鞋可以根据用户的脚型和喜好，定制鞋底和鞋面颜色图案。目前1小时30分钟内可以制作一双运动鞋。阿迪达斯表示，未来几个月内可以将制造时间减少到几分钟。 该鞋计划2022年上市。

2、[如何骗过特斯拉](https://www.cnet.com/roadshow/news/tesla-autopilot-without-a-driver-consumer-reports-video/)

![](https://cdn.beekka.com/blogimg/asset/202104/bg2021042306.jpg)

特斯拉汽车规定，必须有人坐在驾驶位，把手放在方向盘上，才能开启自动驾驶，作为人工驾驶的辅助。美国的《消费者报告》杂志最近报道，很容易破解这项限制，在无人情况下启动自动驾驶。

方法很简单，只要在方向盘系上重物（上图），并且扣好安全带，特斯拉汽车的自动驾驶就可以启动，并且上路。《消费者报告》杂志呼吁，特斯拉公司尽快实施更可靠的测试方法，保证驾驶位确实有人，才能启动自动驾驶。

3、[最白的白色油漆](https://www.bbc.com/news/science-environment-56749105)

![](https://cdn.beekka.com/blogimg/asset/202104/bg2021041703.jpg)

美国普渡大学的科学家，研发出了世界最白的白色油漆，可以反射超过98％的阳光。目前，市场上普通的白色涂料可反射80％至90％的阳光。反射率越高，越有利于房间降温，减少空调的耗能。

这种油漆的主要成分是白色的硫酸钡，使用了许多不同大小的颗粒，混合在一起。不同的颗粒可以散射不同波长的光，所以反射率特别高。

4、[DNA 歌单](https://www.bustle.com/p/spotify-ancestrydna-users-can-now-generate-personalized-playlists-based-on-their-dna-heritage-results-11957587)

![](https://cdn.beekka.com/blogimg/asset/202104/bg2021041813.jpg)

音乐网站 Spotify 与 DNA 网站合作，任何人只要允许 Spotify 查看他的 DNA 测序，Spotify 就会向该用户推送根据 DNA 定制的歌单。

算法是这样的，根据 DNA 可以知道用户的祖先来自哪里，就推送与该地区风土人情相关的音乐。

Spotify 说：“ DNA 歌单不仅是娱乐，也可以作为教育资源。如果你不熟悉与自己 DNA 相关的地区，这个歌单将有助于你了解该地区的文化、历史和文化。”

5、**一句话消息**

[Unicode 委员会](https://jenniferdaniel.substack.com/p/pressing-flesh-against-flesh-)批准了，握手的表情符号将区分肤色。也就是说，握手符号将来有25种肤色可以选择（下图）。美国人的政治正确真可怕。

![](https://cdn.beekka.com/blogimg/asset/202105/bg2021050507.jpg)

[三星公司](https://www.kedglobal.com/newsView/ked202105090002)推出笔记本电脑的 Exynos 芯片，是世界首块可以运行 Windows 的 ARM 架构的笔记本芯片。此前，苹果公司已经将 ARM 芯片 M1 用于笔记本电脑。

![](https://cdn.beekka.com/blogimg/asset/202105/bg2021051106.jpg)

[世界最大的珠宝商潘多拉](https://www.bbc.com/news/business-56972562)（Pandora）表示，将不再出售自然钻石，改为只出售实验室制造的人工钻石（下图）。

![](https://cdn.beekka.com/blogimg/asset/202105/bg2021050412.jpg)

## 文章

1、[从长征 5B 再入的新闻谈起](https://mp.weixin.qq.com/s/Dx0lWSGRZGZIrA8pAkn2ug)（中文）

![](https://cdn.beekka.com/blogimg/asset/202105/bg2021051104.jpg)

最近，长征 5B 火箭的残骸落入印度洋。它是目前中国最大的火箭，残骸无法在大气层里燃烧干净，加之落点无法控制，所以可能会对地面构成威胁。本文是一篇很好的评论。

2、[如何写打印样式表](https://www.matuzo.at/blog/i-totally-forgot-about-print-style-sheets/)（英文）

只要是放置内容的网页，除了正常的样式表以外，还应该设置打印样式表（print.css）。本文介绍打印样式表的基本写法。

3、[我如何用机器学习代替绿幕](https://nomoregreenscreen.com/post/the_story_so_far/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202104/bg2021042801.jpg)

作者喜欢拍摄视频，会使用绿幕替换背景，但是家庭使用绿幕很不方便。有一天，他看到一篇论文，使用机器学习替换正常视频的背景，他就开始学着做。

4、[我邮寄了一个 AirTag](https://www.intego.com/mac-security-blog/i-mailed-an-airtag-and-tracked-its-progress-heres-what-happened/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202105/bg2021051206.jpg)

苹果公司新发布的 AirTag，具有追踪功能。作者就放了一个 AirTag 在邮包里面，发出去以后一路追踪，看看效果如何。

5、[Python request 库的用法介绍](https://hodovi.ch/blog/advanced-usage-python-requests-timeouts-retries-hooks/)（英文）

Python 语言的 request 库用来发出 HTTP 请求，作者非常喜欢这个库，认为它简单、直观、容易使用。本文介绍怎么使用它在 Python 脚本里面发出 Web 请求。

6、[我的 HTML 页面模板](https://www.matuzo.at/blog/html-boilerplate/)（英文）

作者介绍了自己目前使用的 HTML 页面模板，解释了每一行的用途。

7、[Prisma ORM 库介绍](https://www.prisma.io/blog/prisma-the-complete-orm-inw24qjeawmb)（英文）

![](https://cdn.beekka.com/blogimg/asset/202104/bg2021042207.jpg)

Prisma 是 Node.js 和 TypeScript 项目新一代的 ORM 库，用来操作数据库。看上去功能非常强大，还带有配套的图形界面管理工具，下一个项目可以用它试试看。

8、[最小的 Docker 镜像文件](https://devopsdirective.com/posts/2021/04/tiny-container-image/)（英文）

作者介绍如何做出一个最小的 Docker 镜像文件，包含一个简单的 HTTP 服务器，大小只有 6KB。

9、[Bash 如何更快地浏览目录](https://mhoffman.github.io/2015/05/21/how-to-navigate-directories-with-the-shell.html)（英文）

本文介绍一些高级的 Bash 技巧，让你更快地在目录之间切换。

## 工具

1、[Semgrep](https://github.com/returntocorp/semgrep)

![](https://cdn.beekka.com/blogimg/asset/202104/bg2021042302.jpg)

静态代码扫描工具，用来发现代码错误，类似于 ESLint，但可用于17种语言。

2、[Zellij](https://github.com/zellij-org/zellij)

![](https://cdn.beekka.com/blogimg/asset/202104/bg2021042303.jpg)

一个终端复用器，类似于 Tmux，使用 Rust 开发的，功能更强大。

3、[Boxedwine](http://www.boxedwine.org/demo/)

![](https://cdn.beekka.com/blogimg/asset/202104/bg2021042404.jpg)

这个库用来在网页上建立一个虚拟机，运行 Windows 的 exe 程序。

4、[MarkShow](https://mark.show/)

![](https://cdn.beekka.com/blogimg/asset/202104/bg2021042609.jpg)

一个在线工具，你输入 Markdown 文档，它自动转为 PPT 模式，进行在线演示。

5、[PolyGit](https://www.polygitapp.com/)

![](https://cdn.beekka.com/blogimg/asset/202104/bg2021042611.jpg)

一个 iOS 应用，让你在手机（或平板）上克隆 GitHub 仓库，进行修改后，再提交回去。

6、[pass](https://www.passwordstore.org/)

一个命令行的密码管理器，有图形界面客户端，能用于各种平台和手机系统。特点是比较简单直观。

7、[cherrytree](https://www.giuspen.com/cherrytree/)

![](https://cdn.beekka.com/blogimg/asset/202104/bg2021040704.jpg)

一个桌面的笔记软件，支持文件夹结构，可以将所有内容保存成一个 SQLite 文件。

8、[标准笔记](https://standardnotes.org/)

![](https://cdn.beekka.com/blogimg/asset/202104/bg2021041709.jpg)

跨平台的笔记软件，有在线版，支持端对端加密，基础功能可以免费使用。

9、[cpufetch](https://github.com/Dr-Noob/cpufetch)

![](https://cdn.beekka.com/blogimg/asset/202104/bg2021040801.jpg)

一个开源的命令行程序，可以输出 CPU 的详细信息，支持桌面系统和安卓。

## 资源

1、[整数序列百科全书](https://oeis.org/)

![](https://cdn.beekka.com/blogimg/asset/202104/bg2021041807.jpg)

该网站收集各种整数序列，比如“1,2,3,6,11,23,47,106……”，这个序列的下一个数字是什么？

2、[Rust 第一步](https://docs.microsoft.com/en-us/learn/paths/rust-first-steps/)

![](https://cdn.beekka.com/blogimg/asset/202104/bg2021041812.jpg)

微软官网上面的 Rust 教程，从零讲起，教你如何在 Windows 里面使用 Rust 编程。

3、[远程工作软件地图（2021版）](https://friday.app/remote-work/market-map)

![](https://cdn.beekka.com/blogimg/asset/202104/bg2021042001.jpg)

本文列出了远程工作可选择的软件，一共有几十种。

4、[Cockroach 大学](https://university.cockroachlabs.com/catalog)

![](https://cdn.beekka.com/blogimg/asset/202104/bg2021042002.jpg)

分布式关系型数据库 CockroachDB 的官方教程站，提供多门免费课程。

5、[virtocean](https://virtocean.com/)

![](https://cdn.beekka.com/blogimg/asset/202104/bg2021042103.jpg)

该网站提供各种海洋相关的声音，作为背景音乐。

## 图片

1、[彩色篮球场](https://mymodernmet.com/pigalle-basketball-court-paris/)

法国一个时尚品牌将巴黎的一个街头篮球场，重新设计成彩色篮球场，让这个本来没人关注的地方，变成了网红景点。

![](https://cdn.beekka.com/blogimg/asset/202104/bg2021041705.jpg)

![](https://cdn.beekka.com/blogimg/asset/202104/bg2021041706.jpg)

![](https://cdn.beekka.com/blogimg/asset/202104/bg2021041707.jpg)

![](https://cdn.beekka.com/blogimg/asset/202104/bg2021041708.jpg)

2、[卡通漫画人物的面容](https://designyoutrust.com/2021/04/person-uses-artificial-intelligence-to-make-anime-and-cartoon-characters-look-more-realistic/)

一个美国学生使用 Artbreeder 软件，通过人工智能，将二维的漫画人物生成三维真实人像。

![](https://cdn.beekka.com/blogimg/asset/202104/bg2021041803.jpg)

![](https://cdn.beekka.com/blogimg/asset/202104/bg2021041804.jpg)

![](https://cdn.beekka.com/blogimg/asset/202104/bg2021041805.jpg)

![](https://cdn.beekka.com/blogimg/asset/202104/bg2021041806.jpg)

![](https://cdn.beekka.com/blogimg/asset/202104/bg2021041802.jpg)

## 文摘

1、[半导体行业的复兴](https://semiwiki.com/general/297730-semiconductor-startups-are-they-back/)

60年前，半导体行业诞生在旧金山湾区，芯片创业公司兴盛一时，在旧金山到处都是。那个地方因此被称为“硅谷”（半导体的主要成分是硅）。

![](https://cdn.beekka.com/blogimg/asset/202104/bg2021042107.jpg)

后来，这个行业日趋成熟，加上它要求巨额资本投入，使得创业公司大量减少，硅谷的重点转移到了互联网和软件公司。半导体不再是行业的热点了。

但是，过去的几年中，半导体创业公司正在缓慢地复苏，芯片公司发生了惊人金额的融资和收购。那么，半导体创业公司为什么会复苏？还是现在的繁荣属于暂时的海市蜃楼？

---

首先，必须明确一点，过去几十年中，半导体行业一直在增长。全球范围内，在计算机、智能手机、消费电子产品、汽车、工业电子产品的增长带动下，半导体的销售额每年都在上升。正是因为半导体技术的进步，才使得计算机更强大、网速更快、电子产品的体积更小。

那么，在这样一个不断发展的大型市场中，过去很长一段时间内，为什么没有新的半导体创业公司呢？

主要原因有下面几点。

（1）半导体行业的清洗部门发生了大量倒闭，投资者损失严重。

（2）互联网技术蓬勃发展，企业家的兴趣从半导体转移到了互联网。

（3）中国成为半导体的供应大国，在增加竞争的同时，拉低了市场的价格。

（4）半导体上市公司发生了巨大的整合兼并，巨头越来越强，留给小企业的空间不断缩小。

（5）生产一种半导体芯片大约需要融资3000万美元，批量生产则至少需要再增加1亿美元。

（6）只有大型公司，才会大量采购半导体产品。由于不断的行业整合，芯片采购者的数量变少了，减少的购买者意味着更低的报价。

这些原因使得半导体不再是一个有吸引力的投资领域，风险投资对半导体创业公司的兴趣和投资因此变少。

---

但是，过去的几年中，情况开始发生转变。自2017年以来，对半导体创业公司的投资大幅增加。这是为什么？

![](https://cdn.beekka.com/blogimg/asset/202104/bg2021040601.jpg)

原因之一是人工智能（AI）的爆炸式增长。AI 需要巨大的计算量，急需创新的半导体产品。在人工智能和计算机视觉的帮助下，自动驾驶汽车取得了长足的进步。这进一步推动了对芯片的需求。

原因之二是建造半导体芯片的成本已大大降低。如果不使用最新工艺（大多数芯片不需要最先进工艺），芯片的制造成本是非常廉价的。现在用1000万美元或更少的钱，就可以制造半导体芯片，远远少于以前的3000万美元。

原因之三是半导体购买者的范围也在不断扩大。大型互联网公司和软件企业开始进入芯片领域，他们已成为半导体创业公司的新收购者。

原因之四是美国和中国之间的紧张局势，这使得各国越来越关注芯片的自给自足和国有化，这推动了对半导体的投资。汽车行业面临的芯片短缺也加剧了这种趋势。

---

半导体创业浪潮是否会一直持续下去？

我认为是的。随着量子计算、空间技术、计算生物学等新领域的涌现，对芯片的需求还会不断上升。因此，半导体创业公司的复苏势头值得看好。

## 言论

1、

巴菲特的财产为845亿美元。其中842亿美元是在他50岁生日后获得的。他20岁进入投资业，如果只做了30年就不干了，就根本不会有人听说过他。

只有坚持下来不放弃，才可能有所作为，因为只有在足够长的时间里面，复利才会显示威力。

-- [《金钱心理学的笔记》](https://www.swyx.io/psychology-of-money/)

2、

由于没法做实验，没有一家药厂愿意为孕妇开发药物，这导致孕妇一旦生病，就无药可用。

-- 《人体简史》，by 比尔·布莱森

3、

其他公司把钱花在广告和操纵公众舆论上，我们则专注于产品。

-- [马斯克](https://finance.sina.cn/7x24/2021-04-28/detail-ikmxzfmk9380585.d.html)回应特斯拉公司为何不雇佣公关人员

4、

八小时工作制是20世纪制定的，那时下午五点以后，社会经济就停止运作了。但是，21世纪非常不同，我们生活在每周七天、每天24小时运作的世界中，社交媒体是24/7，通信网络是24/7，网上商店是24/7，一切都是24/7，根本没有固定的休息时间。

-- [《我们为什么要接受过度劳累的工作文化？》](https://www.bbc.com/worklife/article/20210507-why-we-glorify-the-cult-of-burnout-and-overwork)

## 历史上的本周

2020年（第 107 期）：[致富与杠杆](http://www.ruanyifeng.com/blog/2020/05/weekly-issue-107.html)

2019年（第 55 期）：[不是反对 996，而要提倡远程办公](http://www.ruanyifeng.com/blog/2019/05/weekly-issue-55.html)

2018年（第 4 期）：[马克思研究的问题](http://www.ruanyifeng.com/blog/2018/05/weekly-issue-4.html)

## 订阅

这个周刊每周五发布，同步更新在[阮一峰的网络日志](http://www.ruanyifeng.com/blog)和[微信公众号](http://weixin.sogou.com/weixin?query=%E9%98%AE%E4%B8%80%E5%B3%B0%E7%9A%84%E7%BD%91%E7%BB%9C%E6%97%A5%E5%BF%97)。

微信搜索“阮一峰的网络日志”或者扫描二维码，即可订阅。

![](https://cdn.beekka.com/blogimg/asset/202103/bg2021030402.jpg)

（完）

