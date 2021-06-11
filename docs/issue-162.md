# 科技爱好者周刊（第 162 期）：生活就像《吃豆人》游戏

这里记录每周值得分享的科技内容，周五发布。

本杂志开源（GitHub: [ruanyf/weekly](https://github.com/ruanyf/weekly)），欢迎提交 issue，投稿或推荐科技内容。

周刊讨论区的帖子[《谁在招人？》](https://github.com/ruanyf/weekly/issues/1784)，提供大量程序员就业信息，欢迎访问或发布工作/实习岗位。

## 封面图

![](https://cdn.beekka.com/blogimg/asset/202106/bg2021060914.jpg)

推迟到今年的迪拜2020世博会，即将于10月1日开幕。上图是三大主场馆之一的“可持续发展馆”，该建筑的水电都是自给自足，从阳光获取能量，从潮湿的空气获取淡水。

## 本周话题：生活就像《吃豆人》游戏

有一个经典游戏，叫做[《吃豆人》](https://baike.baidu.com/item/%E5%90%83%E8%B1%86%E4%BA%BA/9119559)（Pac-Man）。1980年发布的，很多人现在还在玩。

![](https://cdn.beekka.com/blogimg/asset/202106/bg2021060615.jpg)

游戏很简单，吃完迷宫里的豆子，就能过关，但是不能被妖怪抓住。四个妖怪的策略各有不同，红色的在后面追你，粉色的在前面拦截，蓝色的在路口埋伏，橘色的随机漂移。迷宫里还有四颗能量豆，每吃掉一颗，你就能反戈一击，消灭一个妖怪。

谷歌发布过一个[网页在线版](https://www.google.com/search?q=pac-man)，没玩过的朋友可以感受一下。

![](https://cdn.beekka.com/blogimg/asset/202106/bg2021060901.jpg)

提到这个游戏，是因为我最近看到了[一篇文章](https://mahmoud-mohamed-bahaa.medium.com/i-spent-18-months-making-a-decision-heres-what-i-learned-the-pac-man-approach-c943e687413a)。 **一个国外的年轻程序员说，他觉得，自己的生活就像一场《吃豆人》游戏。**

> 大学毕业后，我不知道该干什么。读研究生，还是找一份体面的工作？像其他人一样，最终我选择了那些很光鲜的职业，即使它跟我的兴趣并不吻合。对于未来，我毫无头绪。
> 
> 我有时觉得，自己的生活与《吃豆人》游戏有许多相似之处。我困在迷宫里，只有快速拿到积分，才能过关。在这个迷宫中，妖怪四处游荡，试图吃掉你，如果被它们抓住，你就会死掉一条命，游戏重新开始。
> 
> 我的生活好像就是一局游戏。我真的不知道该去哪里，如何晋级，什么时候妖怪会突然出现。

他这么一说，我顿时觉得，《吃豆人》真的很像生活的一个缩影。我们每天都在人生迷宫里探索，寻求出路。各种挫折打击在周围埋伏着，不知道何时，就会向你扑来。想要赢得游戏的唯一方法，就是尽量避开妖怪，快速吃掉能量豆，壮大自己，晋升到下一关。

![](https://cdn.beekka.com/blogimg/asset/202106/bg2021060617.jpg)

以程序员为例，毕业后进入互联网公司，就是游戏开始了。你必须不停闯关，一步步晋升，从初级程序员到中级程序员，再到高级程序员，然后是团队 Leader 或者部门主管。如果有一关卡住了，在某个级别上停留过久，你就很危险，遇到妖怪的概率越来越大，随时可能 Game Over。你最多只有十到十五年的时间，到达中高职级，否则就留不下来，时间一到不得不离开公司。

**不仅是程序员，其它竞争性的行业，都是这种游戏规则。** 大家印象中，大学教授是一个很舒服的职业，不坐班，每年还有寒暑假。但是，国内高校现在引入了美国的制度，而且还是加强版：年轻博士从讲师当起，给你六年时间，竞争寥寥无几的正式编制。如果六年内出不了成果、发不了足够的论文，那就必须离开，因为学校不会养一个讲师养到老。这叫做[“非升即走”制度](https://www.163.com/dy/article/FVDFHGVA05488SSE.html)，英语叫做 Tenure track。这不就像《吃豆人》游戏的真人版吗。

进一步说，每天上下班高峰时间，地铁上挤满了人，大家都在参与一线城市这个大型游戏。若干年内，如果得不到结果，就要离开，回到二线或三线城市。

![](https://cdn.beekka.com/blogimg/asset/202106/bg2021060903.jpg)

其实也不是一定要参与这种游戏，你也可以降低物质欲，选择不与其他人竞争的生活。但是，如果已经身在其中，或者不得不参与，那么下面几条《吃豆人》游戏的快速过关策略，似乎可以参考。

>（1）不能留在原地，妖怪会感知你的位置。
> 
>（2）必须时刻在前进。
>
>（3） 一旦前面的路上出现妖怪，必须立刻改道。
>
>（4）尽快吃掉离你最近的能量豆，取得阶段性成果。

## 前端构建工具专题课

大家都知道，前端有一个大名鼎鼎的开发工具，叫做 Webpack。哪怕刚入门的新人，可能都有耳闻：不管你用什么框架，最后都要用它进行构建。自从2012年发布至今，它一直是整个行业首选的构建工具。

但是进入2020年后，情况正在发生变化。随着标准模块格式 ESModule 越来越普及，新的构建工具层出不穷。新工具更易用、速度更快、打包产物更小，对 Webpack 构成严重挑战。

Vue.js 的创始人尤雨溪，甚至发过一个动态：再也回不去 Webpack了。

![](https://cdn.beekka.com/blogimg/asset/202106/bg2021061006.jpg)

这引起了一大片焦虑：

> - Webpack 是不是要被取代了，还能不能学？
> - Webpack 还没学会，就又来新的了！
> - 完了，现在到底要学哪个？

目前来说，新一代构建工具的主要代表是 Vite（底层是 ESbuild）和 Rollup。它们其实各有适用场景，还谈不上取代 Webpack。

本周的前端视频专题课，就来分析三大工具各自的原理、特点、适用范围。 **《前端构建工具大 PK：深度剖析 Webpack、Vite、Rollup 原理》** 会带大家手写Webpack、Vite 以及 Rollup 项目，对比分析它们各自的强项，深度剖析底层原理，由浅入深，层层递进。

![](https://cdn.beekka.com/blogimg/asset/202106/bg2021061008.jpg)

这个专题课对各种级别的程序员，都做了精心设计。初级程序员可以学习怎么用构建工具做项目，中高级前端则可以学到这些工具的原理和设计思想。

课程中，会针对大厂面试常见的工程化问题，进行讲解。主讲老师还会带大家对比3份简历，并且教你如何写出一份 P6 级别的求职简历。

微信扫码下面二维码，就可以报名，仅象征性收取 **0.99元** 报名费。

![](https://cdn.beekka.com/blogimg/asset/202106/bg2021061007.jpg)

这门课是视频课，上课时间是 6月15日 到 6月17日 每晚 20:00。想听的同学，可以抓紧时间报名。

## 科技动态

1、[贝佐斯上太空](https://www.cnbc.com/2021/06/07/jeff-bezos-to-fly-on-blue-origin-first-passenger-flight-in-july.html)

亚马逊公司的老板贝佐斯宣布，下个月将乘坐 Blue Origin 公司宇宙飞船的首航，感受一下太空飞行的滋味。

![](https://cdn.beekka.com/blogimg/asset/202106/bg2021060801.jpg)

 Blue Origin 公司是贝佐斯的私人投资，从事太空旅游。它发射火箭，将太空舱送到大气层的边缘，距离地面约100多公里的高度。太空舱可以乘坐6个人，有巨大的窗户，让乘客看到太空的风景，体验几分钟的失重，然后返回地球。

![](https://cdn.beekka.com/blogimg/asset/202106/bg2021060802.jpg)

![](https://cdn.beekka.com/blogimg/asset/202106/bg2021060803.jpg)

美国的富人真是疯狂。马斯克总是说，他的目标是移民火星，而贝佐斯已经等不及要亲身体验了。下个月首航后，据说就将开始对外售票，票价可能为20万美元。

2、[哈德逊河人工岛](https://mp.weixin.qq.com/s/rf0U7OjeGHBvKGpfECMVhA)

一个美国基金会花了2.6亿美元，在纽约哈德逊河里面建了一个人工小岛，为市民提供露天剧场、绿地、餐厅和酒吧。

![](https://cdn.beekka.com/blogimg/asset/202106/bg2021060915.jpg)

![](https://cdn.beekka.com/blogimg/asset/202105/bg2021052502.jpg)

![](https://cdn.beekka.com/blogimg/asset/202106/bg2021060916.jpg)

这里原来是一个废弃码头，现在改建以后，成了一个地势起伏的平台，种植着美丽的树木、鲜花和草地，还有一个687个座位的露天剧场，可以举行表演活动。

![](https://cdn.beekka.com/blogimg/asset/202106/bg2021060917.jpg)

![](https://cdn.beekka.com/blogimg/asset/202106/bg2021060918.jpg)

![](https://cdn.beekka.com/blogimg/asset/202105/bg2021052505.jpg)

3、[高速公路的 U 型弯](https://www.chinatimes.com/realtimenews/20210510002190-260402)

贵州的一条高速公路，特别设计了一个 U 型转弯的架空车道。

![](https://cdn.beekka.com/blogimg/asset/202105/bg2021051807.jpg)

![](https://cdn.beekka.com/blogimg/asset/202105/bg2021051808.jpg)

这是因为贵州都是山区，如果错过一个高速公路出口，下一个出口可能在几十公里以外，所以增设一个 U 型转弯车道，让你快速调转车头。

![](https://cdn.beekka.com/blogimg/asset/202105/bg2021051809.jpg)

4、

[SpaceX 公司](https://arstechnica.com/science/2021/05/is-spacex-reliable-company-goes-for-100th-successful-flight-in-a-row-today/)的猎鹰9号火箭，5月27日达到一个里程碑，连续成功发射100次。而且，发射频率越来越快，今年平均每9天发射一次，5月以后每5天发射一次。

![](https://cdn.beekka.com/blogimg/asset/202106/bg2021060301.jpg)

它之所以能够发射得如此频繁，是因为这个火箭可以回收，每次发射后可以快速重用。更惊人的是，它的第一级助推器也能回收，目前全世界只有它能做到，其它火箭都是丢弃助推器。

![](https://cdn.beekka.com/blogimg/asset/202106/bg2021060303.jpg)

5、

[海信](https://ggjd.cnstock.com/company/scp_ggjd/tjd_bbdj/202106/4713062.htm)宣布，卷曲屏激光电视今年下半年上市。

这种电视机其实就是激光投影仪 + 幕布，平时幕布卷成一团，收纳在下方的柜子里，播放电视时，幕布再从柜子里面展开升起。

![](https://cdn.beekka.com/blogimg/asset/202106/bg2021060606.jpg)

![](https://cdn.beekka.com/blogimg/asset/202106/bg2021060607.jpg)

6、

[联合国](https://news.un.org/zh/story/2021/06/1085332)宣布，很有希望在2030年实现消灭艾滋病的目标。去年，全球艾滋病感染者总数有3760万人，死亡69万人，比2010年分别下降30%和43%。

联合国估计，只要到2025年让95%的感染者得到治疗（目前是73%），就可以最终在2030年消灭艾滋病。

![](https://cdn.beekka.com/blogimg/asset/202106/bg2021060407.jpg)

7、[超音速客机](https://boomsupersonic.com/united)

美国公司 Boom Supersonic 宣布，美联航向它采购了15架 Overture 超音速客机，预计将在2029年投入运营。

![](https://cdn.beekka.com/blogimg/asset/202106/bg2021060404.jpg)

![](https://cdn.beekka.com/blogimg/asset/202106/bg2021060405.jpg)

超音速客机比传统客机快得多，可以将长途航行缩短一半的时间，但是噪音大、成本高，历史上多次尝试均不成功，目前世界上没有商业运营的超音速客机。

![](https://cdn.beekka.com/blogimg/asset/202106/bg2021060406.jpg)

这种新飞机可以乘坐55名乘客，据称采用生物燃料，净二氧化碳排放为零。老实说，听上去不太可信，而且还没造出真机。

8、

[宇宙暗物质分布图](https://www.vice.com/en/article/n7be77/scientists-discover-huge-voids-in-the-cosmic-web-connecting-the-universe)发布。科学家认为，我们的宇宙是由不可见的暗物质连接在一起的，它们组成了一张巨大的引力网（下图），构成了宇宙的上层结构，所有天体都附着在这张看不见的网上。

![](https://cdn.beekka.com/blogimg/asset/202106/bg2021060315.jpg)

## 文章

1、[西双版纳大象专家谈北迁象群](http://wap.xinmin.cn/content/31969939.html)（中文）

![](https://cdn.beekka.com/blogimg/asset/202106/bg2021060913.jpg)

西双版纳自然保护区的专家，谈怎么看待象群北迁事件。

亚洲象一般生活海拔1000米以下，但是目前已经到了海拔2000米，还没有回头，这是前所未有的。

2、[我复原了长安城](https://www.gcores.com/articles/137634)（中文）

![](https://cdn.beekka.com/blogimg/asset/202106/bg2021060105.jpg)

作者介绍自己使用 VR 技术对唐朝长安城建模，做成建设虚拟城市的游戏，拿到 Steam 上去卖。

3、[我如何抓到偷苹果笔记本的贼](https://www.douban.com/note/803274306/)（中文）

作者讲述如何根据苹果笔记本的定位追踪系统，抓住小偷，写得很生动。

4、[StarLink 卫星上网体验报告](https://www.theverge.com/22435030/starlink-satellite-internet-spacex-review)（英文）

![](https://cdn.beekka.com/blogimg/asset/202106/bg2021060304.jpg)

这篇文章详细记录了 StarLink 的安装和使用过程，作者的结论是这个卫星上网服务可用，但是体验不好。

它要求天线与卫星之间不能有遮挡，这导致非常容易断线，甚至一片云、一阵风都会断线，这使得聊天、游戏、视频等实时通信要求很高的服务，都不可用。

5、[信息论之父香农](https://spectrum.ieee.org/tech-history/cyberspace/claude-shannon-tinkerer-prankster-and-father-of-information-theory)（英文）

![](https://cdn.beekka.com/blogimg/asset/202105/bg2021052415.jpg)

这是一篇发表在1992年《IEEE 综览》杂志的香农专访，介绍了香农的很多轶事，对信息论也有解释，写得很生动。

文章披露，香农起初不知道应该用什么词称呼“信息熵”，后来选择了entropy，纯粹是因为这个词含义不明确，可以多种解释，但这导致了后来的许多争论。

6、[UCWeb 的上传数据](https://hookgab.medium.com/ucbrowser-privacy-study-ecff96fbcee4)（英文）

一位国外网友发现，UCWeb 浏览器即使在隐身模式下，也会向自家服务器上传数据。他对这件事情进行了调查。

7、[WebContainers 简介](https://blog.stackblitz.com/posts/introducing-webcontainers/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202105/bg2021052102.jpg)

WebContainers 是一项很特别的技术，可以在浏览器里面运行 Node.js 环境，从而不用任何的本地安装，就可以在浏览器里面调试 Node.js 项目。

8、[程序员为什么喜欢咖啡？](https://nerdlettering.com/blogs/articles/why-do-programmers-love-coffee)（英文）

这篇文章总结了程序员喜欢喝咖啡的几个理由，最后一个理由很搞笑。

## 工具

1、[WireGuard Easy](https://github.com/WeeJeWel/wg-easy)

![](https://cdn.beekka.com/blogimg/asset/202105/bg2021052401.jpg)

Linux 的 WireGuard 安装工具，并且提供 Web UI 的管理界面。

2、[Vosk](https://alphacephei.com/vosk/index.zh)

一个语音识别的工具包，支持18种语言（包括中文），体积较小（50MB），可以绑定各种语言，适合为聊天机器人提供语音识别。

3、[PINTR](https://javier.xyz/pintr/)

![](https://cdn.beekka.com/blogimg/asset/202105/bg2021052103.jpg)

一个网页工具，可以让图片转为线条画。

4、[Grafar](https://thoughtspile.github.io/grafar)

![](https://cdn.beekka.com/blogimg/asset/202105/bg2021050406.jpg)

一个专门用于数学的前端可视化库。

5、[Mockoon](https://mockoon.com/)

![](https://cdn.beekka.com/blogimg/asset/202105/bg2021050401.jpg)

一个开源软件，提供各种云服务的 API 模拟。

6、[Kakoune](http://kakoune.org/)

![](https://cdn.beekka.com/blogimg/asset/202106/bg2021060204.jpg)

一个类似 Vim 的文本编辑器，号称更易用、功能更强。

7、[GitHubPoster](https://github.com/yihong0618/GitHubPoster)

![](https://cdn.beekka.com/blogimg/asset/202106/bg2021060912.jpg)

这个工具可以将你在各种网站上的活动记录，生成 GitHub 方块热力图或 skyline 图。（[@yihong0618](https://github.com/ruanyf/weekly/issues/1790) 投稿）

8、[Apitest](https://github.com/sigoden/apitest/blob/master/README.zh-CN.md)

一个 API 测试的自动化工具，所有测试用例可以写在一个类似 JSON 的配置文件里面。（[@sigoden](https://github.com/ruanyf/weekly/issues/1788) 投稿）

9、[hacker-feeds-cli](https://github.com/Mayandev/hacker-feeds-cli)

一个命令行工具，可以查看 Hacker News、 Reddit、V2EX、GitHub Trending 等资讯网站。（[@Mayandev](https://github.com/ruanyf/weekly/issues/1787) 投稿）

## 资源

1、[freesound.org](https://freesound.org/)

![](https://cdn.beekka.com/blogimg/asset/202105/bg2021052409.jpg)

该网站是一个社区，全世界志愿者上传自己收集的环境音，目前已经有50万种环境音。中国的环境音也有不少，比如[北京的公交车](https://freesound.org/people/nslkc/sounds/100206/)、[火车通过铁路道口](https://freesound.org/people/RTB45/sounds/151807/)。

2、[Can I email](https://www.caniemail.com/)

![](https://cdn.beekka.com/blogimg/asset/202105/bg2021051107.jpg)

这个网站可以查询哪些前端 API 可以用于电子邮件。

3、[Battlesnake](https://play.battlesnake.com/)

![](https://cdn.beekka.com/blogimg/asset/202106/bg2021060308.jpg)

这是一个多人的编程游戏，每个开发者操纵自己的蛇，与其他人对战。具体方法是，上传自己的 API 实现，该网站自动将其运行为服务，蛇每移动一步，都会查询 API 接口，接受下一步的指令。

4、[如何设置数据科学开发环境](https://whiteboxml.com/blog/the-definitive-data-scientist-environment-setup)（英文）

![](https://cdn.beekka.com/blogimg/asset/202106/bg2021060307.jpg)

这篇文章详细记录如何在自己的计算机上，安装各种软件，设置一个数据科学环境。

## 图片和视频

1、[宇航员地球摄影大赛](https://earthobservatory.nasa.gov/tournament-earth/results)

下图是今年宇航员地球摄影大赛的获奖作品。

照片中是土耳其的凡湖（Van Lake），地球上最大的碱性湖泊。它也是一个内陆湖泊，所以照片上有清晰的漩涡，表明湖水没有出口。

![](https://cdn.beekka.com/blogimg/asset/202105/bg2021051405.jpg)

湖的周围是一个巨大的辉石矿，导致湖中充满了碳酸钙的碎屑。这些碎屑是湖水呈现乳白色混浊的主要原因，并且使得湖水的 pH 值达到了10。

2、[铁磁流体扬声器](https://hackaday.io/project/179136-ferrofluid-display-cell-bluetooth-speaker)

<iframe frameborder="0" src="https://v.qq.com/txp/iframe/player.html?vid=r3246eodile" allowFullScreen="true" width="600" height="400"></iframe>

韩国网友制作的铁磁流体扬声器，磁性颗粒随着音乐，在外界磁场的作用下不断变换形状。这个东西感觉比熔岩灯好。（[Youtube](https://www.youtube.com/watch?v=7a3JiGTE9sc)，[QQ 视频](https://v.qq.com/x/page/r3246eodile.html)）

3、[超现实阁楼](https://www.facebook.com/photo/?fbid=311674710320284)

瑞典摄影师埃里克·约翰森（Erik Johansson），经常拍摄超现实照片。下面就是他的最新作品，利用自家阁楼，将照片合成为不可能的空间形状。

![](https://cdn.beekka.com/blogimg/asset/202105/bg2021051810.jpg)

这张照片很像埃舍尔的作品，明明是不可能的，但是看上去非常自然。

## 文摘

1、[乔布斯14年前的电子邮件](https://www.inc.com/jason-aten/14-years-ago-steve-jobs-sent-most-important-email-in-history-of-business.html)

最近，苹果公司与 Epic 游戏公司的官司，正在如火如荼地进行，库克也出庭作证了。

为了证明应用商店的必要性，苹果向法庭提供了很多内部文件。这些文件从来没有公开过，其中有一封是乔布斯2007年的电子邮件，让外界终于了解了应用商店是怎么诞生的。

![](https://cdn.beekka.com/blogimg/asset/202106/bg2021061001.jpg)

iPhone 是2007年1月份宣布的，6月29日正式上市。

乔布斯从一开始就极度坚持产品的封闭性，第一代 iPhone 不仅硬件无法扩展，连软件也无法扩展，只能运行预装的 16 个官方应用程序。

乔布斯反对 iPhone 运行外部应用。他曾经告诉开发者，如果他们想为 iPhone 写应用程序，可以写在 Safari 浏览器中运行的 Web 应用。 

他说：“你猜怎么着？我们没有你需要的 SDK！如果你知道如何使用最现代的 Web 标准编写应用程序，你就已经可以为当今的 iPhone 编写出色的应用程序，这就是你需要知道的一切。我们认为，我们已经为作为开发者的你们，提供了非常好的条件。让你们可以立即开始构建 iPhone 应用程序。”

但是，开发者并不接受乔布斯的这套说辞。很多人设法对 iPhone 进行“越狱”，让其可以安装外部应用程序。苹果公司想要制止越狱，唯一的方法就是提供官方 SDK，允许 iPhone 运行外部应用。

当时，苹果负责软件工程的高级副总裁 Bertrand Serlet，不得不硬着头皮，给乔布斯写了[一封 Email](https://twitter.com/TechEmails/status/1400270458608664577)，要求乔布斯能够同意 iPhone 运行外部应用。

![](https://cdn.beekka.com/blogimg/asset/202106/bg2021060701.jpg)

他认为，iPhone 应该做四件事。

> （1）允许经过许可的应用，跑在 iPhone 上面，这样可以保护用户。
> 
>（2）允许外部应用获得某些权限，同时禁止其它权限，这样可以保护系统。
>
>（3）提供官方的开发平台，运行在 MacOS 上面，包括模拟器、Debugger 等。 
>
>（4）提供稳定的对外 API。

乔布斯的回答只有一句话：“当然可以，只要能在 2008 年 1 月 15 日的 Macworld 上全部推出。”

这封邮件的日期是2007年10月2日，离乔布斯设定的发布日期只剩下三个多月。乔布斯好像觉得压力还不够大，两周后的 10 月 17 日对外宣布，将在2008 年 2 月之前提供 SDK 。

后来，SDK 实际是在2008年 3 月份推出的，而 App Store 是在那一年的 7 月推出的。

当时，苹果的市值约为 1500 亿美元，今天已经超过了 2 万亿美元，这很大程度是因为 iPhone 的成功，而 iPhone 的成功有很大程度是因为 App Store 的成功。App Store 又促成了许多大型软件公司的诞生，比如 Instagram、SnapChat、Spotify 等等。这一切的源头，都可以追溯到乔布斯的这一封邮件。

## 言论

1、

1919年，英国天文学家阿瑟·爱丁顿使用日全食的观测数据，首次证明爱因斯坦的广义相对论是正确的。

当时能看懂广义相对论的没有几个人。据说，一位物理学家当面对爱丁顿说，您是世界上第三个懂广义相对论的人。言外之意，前两个人是爱因斯坦和该物理学家本人。爱丁顿风趣地回答：“我也在寻找第三个人。”

-- 何香涛《追逐类星体》

2、

根据 Cloudflare 的统计，用户完成网站的图形识别验证码，平均需要32秒。

假设用户每10天就会遇到一次这样的验证码，乘以全球46亿互联网用户，那么人类每天共花费500人年以完成这些验证码。

-- [《Cloudflare 希望结束“验证码疯狂”》](https://www.theregister.com/2021/05/14/cloudflare_cryptographic_attestation_of_personhood_captcha_killer/)

3、

产生一个好的想法，最佳方法就是先产生许许多多的想法。（The best way to have a good idea is to have a lot of ideas.）

--[鲍林](https://www.brainyquote.com/quotes/linus_pauling_163645)（Linus Pauling），诺贝尔化学奖得主

4、

我希望通过自己的创业产品，赚一些钱。但是，它的利润一直很微薄，如果我买一些啤酒，整个周末都投入这个产品的开发，那么利润将完全消失。而且，付费用户总数很少，始终让人感觉非常危险。

--[《为什么我关闭自己的创业产品》](https://mikerogers.io/2021/05/23/saying-goodbye-to-typo-ci)

5、

就算我们今天停止排放二氧化碳，已经排放的那些二氧化碳仍将存在于大气中数百年。如果我们只是设法减少一点排放，那么二氧化碳只会以较慢的速度积累，但仍会上升。

-- [一位美国科学家](https://www.aei.org/op-eds/an-obama-scientist-debunks-the-climate-doom-mongers/)认为人类很难阻止气候变化

## 历史上的本周

2020年（第 111 期）：[智能电视的误区](http://www.ruanyifeng.com/blog/2020/06/weekly-issue-111.html)

2019年（第 59 期）：[互联网时代很难交朋友](http://www.ruanyifeng.com/blog/2019/06/weekly-issue-59.html)

2018年（第 8 期）：[实验室会生产人吗？](http://www.ruanyifeng.com/blog/2018/06/weekly-issue-8.html)

## 订阅

这个周刊每周五发布，同步更新在[阮一峰的网络日志](http://www.ruanyifeng.com/blog)和[微信公众号](http://weixin.sogou.com/weixin?query=%E9%98%AE%E4%B8%80%E5%B3%B0%E7%9A%84%E7%BD%91%E7%BB%9C%E6%97%A5%E5%BF%97)。

微信搜索“阮一峰的网络日志”或者扫描二维码，即可订阅。

![](https://cdn.beekka.com/blogimg/asset/202103/bg2021030402.jpg)

（完）

