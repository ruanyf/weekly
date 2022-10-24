# 每周分享第 2 期

这里记录过去一周，我看到的值得分享的东西。

![](http://www.ruanyifeng.com/blogimg/asset/2018/bg2018042801.jpg)

（题图：青岛火车站）

上周发了[第一期](http://www.ruanyifeng.com/blog/2018/04/weekly-issue-1.html)以后，有朋友问为什么写这个专栏？

我想了想，除了整理收藏夹，主要原因还是我希望自己多发声。长久以来，我一直努力，每周更新博客，但是现在做不到：简单的题材不值得写，复杂的题材一周时间不够准备。有了这个专栏，就能保证每周都有新内容发布。

而且，这个专栏可以写任何东西，方便我对一些事情发表看法。这个世界正在剧烈变化，每个人的命运都是那么的不确定，我想让自己的声音传播出去，让尽可能多的人听到，团结志同道合的人，也许将来可以在一起做一些有意义的事情。

## 新闻

1、[夫妻双双去世 四年后儿子出生](http://epaper.bjnews.com.cn/html/2018-04/10/content_716660.htm?div=0)

![](http://www.ruanyifeng.com/blogimg/asset/2018/bg2018042802.jpg)

2013年3月20日，一对年轻夫妻死于车祸，他们还没来得及生育。幸运的是，就在五天前，他们在南京鼓楼医院做了人工受精，留下了四枚有效的受精胚胎，冷冻在摄氏零下196度的液氮罐里。

这对夫妻去世以后，他们的父母四位失独老人想方设法，要让胚胎变成一个活生生的孩子。遇到的第一个问题就是，胚胎是否算遗产，亲属能否继承？老人请律师打官司，总算拿到胚胎的继承权。接下来的问题就是，我国禁止代孕，他们不得不到国外去找代孕母亲，此人必须愿意放弃婴儿的抚养权。就算找到了，怎么把液氮里面的胚胎运出国，植入代孕母亲的子宫？将来生出来，这个小孩法律上是外国人，怎样回到中国，又怎样入中国籍，报上中国户口？这些问题都必须一个个克服。

2017年12月9日，甜甜被一名28岁的老挝籍代孕妈妈带到这个世界，现在生活在宜兴。"我出生的时候，父母已经去世了"，变成现实了。

2、[Go 语言的新 Logo](https://blog.golang.org/go-brand)

![](http://www.ruanyifeng.com/blogimg/asset/2018/bg2018042803.jpg)


Go 编程语言发布新的 Logo， 很有现代感。大家往往忽略，编程语言其实也存在市场竞争，只有注意包装自己的语言才有更好的市场份额，从而得到更大的社区、更多的资源。

3、[Flutter 框架发布 Beta 版](https://developers.googleblog.com/2018/02/announcing-flutter-beta-1.html)

![](http://www.ruanyifeng.com/blogimg/asset/2018/bg2018042805.png)

2月底，谷歌的手机应用开发框架 Flutter 发布了 Beta 版，这意味着，这个框架已经具备可用性了，今年应该就会发正式版了。现在，安卓系统有了两套 SDK：安卓 SDK 和 Flutter SDK。

Flutter 的最大特点在于，它是跨平台的，不仅可以开发安卓应用，还可以开发 iOS 应用，也是谷歌正在研发的 Fuchsia 操作系统唯一的开发框架。这是因为 Flutter 针对不同的平台，做了不同的渲染引擎，可以打包出来各个平台的 Native 应用。

一篇[评论](https://arstechnica.com/gadgets/2018/02/google-starts-a-push-for-cross-platform-app-development-with-flutter-sdk/)这样写道：

> 尽管还是 beta 版，但谷歌已经在多款应用使用 Flutter，最引人注目的是谷歌的广告平台 AdWords。谷歌表示，在 Android 和 iOS 应用商店中已经有数百个 Flutter 应用。
> 
> Flutter 也可以看作，谷歌的实验性 Fuchsia OS[ ](https://arstechnica.com/gadgets/2018/01/googles-fuchsia-os-on-the-pixelbook-it-works-it-actually-works/)又向前推进了一步。虽然这个新操作系统被称为 Fuchsia，更好的名字可能是 Flutter OS。Fuchsia 的用户界面完全是用 Flutter 编写的。


如果想更多了解 Flutter 框架，可以看看这篇《[Flutter 框架研究和与 RN 对比](http://szuwest.github.io/flutterkuang-jia-yan-jiu-he-yu-rndui-bi.html)》。

4、[Oracle 发布多语言版的 JVM](https://github.com/oracle/graal)

![](http://www.ruanyifeng.com/blogimg/asset/2018/bg2018042806.jpg)


Oracle 发布了一个很神奇的产品 [GraalVM](http://www.graalvm.org/)。我们知道，Java 最厉害的就是它的虚拟机 JVM，现在这个虚拟机扩展成可以支持多种语言，不同语言都可以被它编译成字节码，然后运行。

因此，它能支持多种语言混写，JS 里面直接调用 Java 或者 Python（就像下图），照样编译运行。

![](http://www.ruanyifeng.com/blogimg/asset/2018/bg2018042807.jpg)


5、[欧盟数据保护条例 GDPR](http://dbaplus.cn/news-73-1510-1.html)

![](http://www.ruanyifeng.com/blogimg/asset/2018/bg2018042808.png)

今年5月25日，欧盟新的《数据保护条例》就要生效了。我看了一下，好像是说凡是收集用户数据都必须得到用户同意，且不得用于未授权的用途。

那就是说，那类"猜你喜欢"、"你可能也想买"的功能，都是违反这个法律的。因为我没有授权你使用我的历史信息，推测我还会喜欢什么东西。

## 教程

1、[电子书] [A Gentle Introduction To Rust](https://stevedonovan.github.io/rust-gentle-intro/readme.html)

Rust 语言入门教程

2、[电子书] [D3 Graph Theory](https://mrpandey.github.io/d3graphTheory/index.html)

![](http://www.ruanyifeng.com/blogimg/asset/2018/bg2018042809.jpg)

图理论（graph theory）是重要的数学分支，在数据处理领域有着重要应用。这个教程采用可视化库 D3，把图理论变成了可视化互动教程。

3、[文章] [数据回归的15种类型](https://www.listendata.com/2018/03/regression-analysis.html)

![](http://www.ruanyifeng.com/blogimg/asset/2018/bg2018042810.jpg)

回归（regression）是数据处理的常用技术，用来找出数据的模式。本文介绍数据回归的15种拟合。

4、[视频课程] [GitHub 最受欢迎的20个课程仓库](https://education.github.community/t/20-of-the-most-popular-courses-on-github/27832)

很多开放课程的仓库放在 GitHub 上面，GItHub 官方列出了最受欢迎的20个仓库。

5、[文章] [Probability Theory (For Scientists and Engineers)](https://betanalpha.github.io/assets/case_studies/probability_theory.html)

一个概率论的概览性介绍，每个章节后面有一个 R 语言的小例子。

6、[电子书] [D3 In Depth](http://d3indepth.com/)

可视化引擎 D3 的教程。

7、[文章] [分布式系统的几个基本概念](http://blog.pragmaticengineer.com/distributed-architecture-concepts-i-have-learned-while-building-payments-systems/)

Uber 架构师分享在搭建分布式支付系统过程中，遇到的最重要的几个概念：SLA、scaling、Consistency、Durability、Idempotency等。

8、[电子书] [解谜计算机科学](http://www.yinwang.org/blog-cn/2018/04/13/csbook-chapter1)

王垠正在写的新书，目前只公布了第一章。

> 我写这本书，就是为了弥补计算机业界这一空缺，改变行业的现状。它将吸引新鲜干净的血液进入这个行业，并且赋予他们力量。它也可以刷新内行人员的头脑，让他们重新理解和审视已有的知识。这样也许我们能冲破这个行业的重重迷雾，让它变得诚实，获得科学的精神，成为像物理一样踏实的学科。
> 
> 很多计算机书籍都喜欢从"数学基础"开始，一开头就是长篇累牍的数学公式，定理，证明...... 结果读者还没读完数学基础就倒下睡着了，再也不想打开这本书。所以我不从数学基础开始，而是从最简单的生活常识。在认识发展的过程中，你会自己去创造出所需要的那些数学。（摘自[《序言》](http://www.yinwang.org/blog-cn/2018/03/21/csbook-preface)）

## 工具

1、[Mustard UI](https://kylelogue.github.io/mustard-ui/)

![](http://www.ruanyifeng.com/blogimg/asset/2018/bg2018042811.png)

 一个简洁、好看的 CSS 框架，压缩后只有5.28KB。

2、[ReactOS](https://github.com/reactos/reactos)

ReactOS 是一个开源的操作系统，目标是兼容 Windows，能够运行 Windows 的应用程序和驱动程序。它只能安装在 FAT16 或者 FAT32 的硬盘分区上面。

3、[Remote Browser](https://github.com/intoli/remote-browser)

一个浏览器自动化框架，可以用脚本控制已经打开的浏览器。

4、[rebound](https://github.com/shobrook/rebound)

![](http://www.ruanyifeng.com/blogimg/asset/2018/bg2018042812.jpg)

有人终于把这个工具写出来了，一旦 Python 或 JS 脚本报错，就到 Stack Overflow 取回报错信息的解释。

5、[React Slate](http://react-slate.surge.sh/)

![](http://www.ruanyifeng.com/blogimg/asset/2018/bg2018042813.jpg)

一个使用 React 组件写命令行脚本的框架。

6、[RSUITE](https://github.com/rsuite/rsuite)

![](http://www.ruanyifeng.com/blogimg/asset/2018/bg2018042814.png)

一个国产的 React 组件库。

> RSUITE（React Suite）是一套用于企业系统产品的 React 组件库。由 HYPERS 前端团队和 UX 团队共同构建，主要服务于公司的大数据产品。

## 文摘

1、[网易丁磊专访](https://finance.sina.cn/usstock/mggd/2018-04-11/detail-ifyzeyqa6917956.d.html)

![](http://www.ruanyifeng.com/blogimg/asset/2018/bg2018042816.jpg)

> 全世界网游市场排名是：中国、美国、日本、其他国家。第四到第十的市场全部加起来还没有日本大，而中国占了整个市场的三成到四成。我们的游戏在日本排第一，它的一天收入只是中国的十分之一。

2、[黑产和大数据风控之间的攻守之战](https://xw.qq.com/cmsid/20180413A1LJBD)

![641.jpeg | center | 406x371](https://cdn.yuque.com/yuque/2018/jpeg/84141/1523843579567-237452d2-2b56-4b37-89d4-84373cfe956c.jpeg "")


> 2017年我国黑产的从业人员在百万级以上，每年造成的损失达千亿元级规模。针对黑产套利，企业不会坐以待毙，因此黑产的存在也催生了专门的风控团队与之对抗。攻防之间，套路不断演变、战场不断扩大、技术不断升级，这个动态进化过程完美诠释了什么叫"魔高一尺，道高一丈"。

3、[超越 Markdown 语法](https://talk.commonmark.org/t/beyond-markdown/2787?u=sam)

一个开发者呼吁改革 Markdown 的语法，避免模棱两可的情况。

> 开发 Commonmark 的过程中，我们尽量保持原始的 Markdown 语法不变。但是，这使得 Markdown 语法正变得日益复杂，比如有17种方法可以表示强调，列表和 HTML 代码块的处理也非常复杂。这些导致了许多令人意外的解析结果，开发一个 Markdown 解析器非常困难。
> 
> 下面我举出六个 Markdown 的痛点，希望我们能够考虑修改 Markdown 的语法，让它变得更简单一些。

4、[中兴通信的"卧底"律师](https://wallstreetcn.com/articles/3286099)

> 2011年，伊朗电信公司高管在接受采访时炫耀："西方制裁对伊朗通讯行业完全没效果，我们依然能获得全球最新通讯技术"。吹牛X要遭雷劈，只是伊朗人吹的牛，"遭雷劈"的是中兴。
> 
> 2011年10月，中兴通信聘请39岁的 Ashley Kyle Yablon 担任中兴美国分公司的法律总顾问，帮助规避美国的法律，使得它可以偷偷与伊朗做生意，又不被美国发现。
> 
> 
> 
> ![](http://www.ruanyifeng.com/blogimg/asset/2018/bg2018042815.jpg)
> 
> 
> 结果，这位 Yablon 先生是 FBI 的卧底，偷偷把绝密文件都交出去。美国政府根据这些文件，宣布重罚中兴。

## 电影

4月2日，日本吉卜力動畫工作室创始人之一的高畑勲导演去世，享年82岁。

![](http://www.ruanyifeng.com/blogimg/asset/2018/bg2018042817.jpg)


他最著名的作品是动画电影《螢火蟲之墓》，1988年上映。电影海报上，哥哥清太和妹妹節子在夜晚的草叢中，滿滿黃色亮光，呼應螢火蟲像星星一樣飛舞，哥哥望著張嘴大笑的妹妹，畫面溫馨。

![](http://www.ruanyifeng.com/blogimg/asset/2018/bg2018042818.jpg)

不過，你把海报的亮度调高，就可以看到，原來夜空中有一架B29轟炸機正在飛行，天空中的黃色亮點其實是燃燒彈的火光。

![](http://www.ruanyifeng.com/blogimg/asset/2018/bg2018042819.jpg)

《螢火蟲之墓》改編自日本作家野坂昭如的半自傳小說，背景是第二次世界大战的神戶空襲，讲述作者失去妹妹的悲伤故事。

## 本周图片

一位台湾网友下班回家，累得倒在沙发上，心想休息一会再去喂狗，结果眼睛一闭睡着了。等醒来，发现狗狗正居高临下，盯着他看，仿佛在说："你到底什么时候给我吃的？"

![](http://www.ruanyifeng.com/blogimg/asset/2018/bg2018042820.jpg)

这表情像不像产品经理找到程序员，"需求还要多久才能做完？"

## 欢迎订阅

这个专栏会同步更新在我的[个人网站](http://www.ruanyifeng.com/blog)、[微信公众号](http://weixin.sogou.com/weixin?type=1&query=阮一峰的网络日志)和[语雀](https://yuque.com/ruanyf/share/)。

微信搜索"__阮一峰的网络日志__"或者扫描二维码，即可订阅。

![](http://www.ruanyifeng.com/blogimg/asset/2018/bg2018042311.jpg)

（完）

