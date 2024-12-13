# 科技爱好者周刊（第 329 期）：示意图利器 D2

这里记录每周值得分享的科技内容，周五发布。

本杂志[开源](https://github.com/ruanyf/weekly)，欢迎[投稿](https://github.com/ruanyf/weekly/issues)。另有[《谁在招人》](https://github.com/ruanyf/weekly/issues/5610)服务，发布程序员招聘信息。合作请[邮件联系](mailto:yifeng.ruan@gmail.com)（yifeng.ruan@gmail.com）。

## 封面图

![](https://cdn.beekka.com/blogimg/asset/202412/bg2024121117.webp)

哈尔滨冰雪大世界即将开园，工人正在松花江上采冰，每天需要开采近万块大冰块。（[via](https://app.xinhuanet.com/news/article.html?articleId=451916149ce4dde7e6035e935eb5a37f)）

## 示意图利器 D2

制作示意图的工具有很多。

我喜欢使用基于文本代码的作图工具，来绘制线框图，比如 Mermaid、Plantuml、Graphviz。

![](https://cdn.beekka.com/blogimg/asset/202412/bg2024121201.webp)

它们都能根据代码，生成图片，非常适合放入代码仓库，进行版本管理。

最近，我发现了一个更易用的同类工具 [D2](https://d2lang.com)，简单直观，功能强大，下面介绍给大家。

![](https://cdn.beekka.com/blogimg/asset/202412/bg2024120613.webp)

D2 可以命令行使用，也可以浏览器使用。假定你有一个图片代码文件`example.d2`，那么生成图片的命令如下。

> $ d2 example.d2

大部分时候，我都通过浏览器使用它。它有一个线上生成器 [play.d2lang.com](https://play.d2lang.com/)（下图），把代码贴进去，按下“compile”按钮，马上生成图片。

![](https://cdn.beekka.com/blogimg/asset/202412/bg2024121202.webp)

想要 A 节点（节点的名称为 A），直接输入 A 就可以了。

> A

![](https://cdn.beekka.com/blogimg/asset/202412/bg2024120601.webp)

A 只是节点名称，如果要定制节点的内容，就像下面这样写。

> A: 甲

![](https://cdn.beekka.com/blogimg/asset/202412/bg2024120602.webp)

接着，添加一个节点。

> A: 甲   
> B: 乙

![](https://cdn.beekka.com/blogimg/asset/202412/bg2024120603.webp)

把它们连起来。

> A: 甲  
> B: 乙  
> A -> B

![](https://cdn.beekka.com/blogimg/asset/202412/bg2024120604.webp)

连接可以用正箭头（`->`）、也可以用反箭头（`<-`），甚至双向箭头（`<->`）。如果不需要箭头，就直接连线（`--`）。

箭头上还能添加文字。

> A: 甲  
> B: 乙  
> A -> B: 连接

![](https://cdn.beekka.com/blogimg/asset/202412/bg2024120606.webp)

节点之间可以有多根连线。

> A: 甲  
> B: 乙  
> A -> B: 请求  
> A <- B: 响应

![](https://cdn.beekka.com/blogimg/asset/202412/bg2024120609.webp)

节点的连接也可以写在一行。

> 甲 -> 丙 <- 乙: 连接

![](https://cdn.beekka.com/blogimg/asset/202412/bg2024120610.webp)

> 阶段一 -> 阶段二 -> 阶段三 -> 阶段四  
> 阶段四 -> 阶段一: 反馈

![](https://cdn.beekka.com/blogimg/asset/202412/bg2024120611.webp)

这些语法就够画出基本的线框图了，是不是挺简单。

D2 可以绘制非常复杂的图，更多语法参考[文档](https://d2lang.com/tour/intro)。

![](https://cdn.beekka.com/blogimg/asset/202412/bg2024120614.webp)

最后提一下，如果想修改节点形状，方框改成圆形，就像下面这样写。

> A: 甲  
> A.shape: circle

![](https://cdn.beekka.com/blogimg/asset/202412/bg2024120607.webp)

形状甚至可以改成一朵云，表示云服务。

> A: 甲  
> A.shape: cloud

![](https://cdn.beekka.com/blogimg/asset/202412/bg2024120608.webp)

线条颜色也可以改。

> A: 甲  
> A.style.stroke: red

![](https://cdn.beekka.com/blogimg/asset/202412/bg2024120612.webp)

## [活动] AI 编程挑战赛

程序员同学看过来，全国性的 [AI 编程大赛](https://zjsms.com/iUNhdBEk/)来了。

只要你善用 AI 编程，在 AI 的帮助之下，做出创新应用，或者快速解出算法题，就能参赛。

参赛不仅锻炼 AI 编程能力，还能丰富自己的经历，如果得奖，就能在简历上写一笔，帮助就业。

![](https://cdn.beekka.com/blogimg/asset/202412/bg2024121211.webp)

（1）比赛总奖池20万，**一等奖的奖金4万元**。学生和非学生分开评奖，获奖者还有 offer 机会，可以直通终面（包含实习岗与正式岗）。

（2）**比赛分为算法和应用两个赛道**，可以提交自己的创新应用，也可以选择完成算法题。

（3）大赛现在已经开始报名。创新应用在12月16日开放作品提交，算法比赛现在可以参加线上常规赛，决赛是线下举行的黑客马拉松。

（4）两个赛道的决赛阶段，都要求使用豆包 MarsCode 的 AI 编程能力，作为辅助工具。

本次 AI 编程巅峰挑战赛，由豆包MarsCode 和稀土掘金社区共同发起，面向全国程序员。大赛规则和报名入口，详见[活动官网](https://zjsms.com/iUNhdBEk/)，也可扫描上方海报二维码，祝愿大家得奖。

## 科技动态

1、[深湖冷却](https://www.theglobeandmail.com/business/industry-news/property-report/article-the-worlds-largest-deep-lake-water-cooling-project-just-got-bigger/)

加拿大最大城市多伦多，就在安大略湖旁边。安大略湖是一个很深的湖，最深处达到244米。

![](https://cdn.beekka.com/blogimg/asset/202404/bg2024041412.webp)

多伦多市正在建设一个非常酷的项目，使用安大略湖底的冷水，为城市提供冷却系统。

安大略湖底部的水温是很低的，该项目从水底85米处取水，即使盛夏，水温也只有4摄氏度。

这些水经过40公里的管道，进入市中心的热交换站，为城市带来天然的冷气。

2、[自走桌](https://www.decarpentier.nl/carpentopod)

一位国外工程师，制作了一张会自己行走的桌子。

![](https://cdn.beekka.com/blogimg/asset/202409/bg2024091217.webp)

这张木头桌子有12条腿，每次可以同时移动三条腿，每条腿都用电机驱动。

![](https://cdn.beekka.com/blogimg/asset/202409/bg2024091218.webp)

桌子内部有无线接收器，用来接收遥控信号。远端计算机发出遥控命令，并计算出移动哪几条腿，每条腿移动的角度和幅度。

![](https://cdn.beekka.com/blogimg/asset/202409/bg2024091219.webp)

3、[瘫痪网络的机器狗](https://www.tomshardware.com/tech-industry/big-tech/dog-like-robot-jams-home-networks-and-disables-devices-during-police-raids-dhs-develops-neo-robot-for-walking-denial-of-service-attacks)

很多犯罪分子都在屋外装了摄像头，监控室外的风吹草动。

![](https://cdn.beekka.com/blogimg/asset/202407/bg2024072405.webp)

美国国土安全部研发了一款机器狗，它的唯一作用就是瘫痪无线摄像头的通信。

![](https://cdn.beekka.com/blogimg/asset/202407/bg2024072406.webp)

这个机器狗配备了一个天线阵列，接近目标后，会侦测周围无线信号的频率和信道，然后发送大量干扰信号，使得网络堵塞，无法通信。

所有无线通信的智能家居设备，都会因此失效，包括摄像头。所以，重要地点的摄像头必须是有线的。

4、[无豆咖啡](https://www.bbc.com/news/articles/c4gv0rvx0dvo)

一些西方公司最近推出“无豆咖啡”，就是不使用咖啡豆制作的咖啡。

![](https://cdn.beekka.com/blogimg/asset/202409/bg2024091303.webp)

它采用废弃的枣子或果核，提取生物质，然后添加提取自茶叶的咖啡因，使其具有咖啡的味道。

因此，它比较环保，可以减少食物垃圾，也不必破坏森林种植咖啡树。

![](https://cdn.beekka.com/blogimg/asset/202409/bg2024091304.webp)

据说，它的味道非常接近优质咖啡，普通人喝不出差异。只是成本不便宜，略高于传统的优质咖啡豆。

## 文章

1、[CSS 重置（2024版）](https://www.joshwcomeau.com/css/custom-css-reset/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202410/bg2024102501.webp)

作者提出，最新的 CSS 重置（CSS reset，即更改浏览器默认样式）只需要9条规则，每一条都详细解释。

2、[Monokai 的历史](https://monokai.pro/history)（英文）

![](https://cdn.beekka.com/blogimg/asset/202410/bg2024103102.webp)

本文介绍流行的代码编辑器配色方案 Monokai 的诞生历史。

3、[并发运行（Concurrency）和并行运行（Parallelism）：以 JavaScript 为例](https://www.rugu.dev/en/blog/concurrency-and-parallelism/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202409/bg2024091302.webp)

本文解释并发和并行的区别，然后给出 JavaScript 的示例。

4、[直接链接网页的某段文本](https://alfy.blog/2024/10/19/linking-directly-to-web-page-content.html)（英文）

![](https://cdn.beekka.com/blogimg/asset/202410/bg2024102409.webp)

浏览器现在支持，URL 直接链接到网页的某个文本片段（text fragment）（上图的高亮部分），本文介绍如何使用。

5、[了解多重 DNS](https://blog.hyperknot.com/p/understanding-round-robin-dns)（英文）

![](https://cdn.beekka.com/blogimg/asset/202410/bg2024102705.webp)

多重 DNS 就是同一个域名有多个 DNS 解析记录，可用来均衡负载。作者就测试了，均衡负载是否真能生效。

6、[感知器是什么](https://medium.com/@vincentlambert0/it-all-started-with-a-perceptron-86bd0fb80b96)（英文）

![](https://cdn.beekka.com/blogimg/asset/202410/bg2024102908.webp)

本文解释神经网络的基础概念“感知器”（Perceptron）。

## 工具

1、[EasyTransfer](https://github.com/WCY-dt/EasyTransfer)

![](https://cdn.beekka.com/blogimg/asset/202412/bg2024120701.webp)

开源的文件传输工具，匿名加密，只需访问网页，即可连接到其他设备，基于 webRTC 和 Vue.js，访问[试用网址](https://file.ch3nyang.top)。（[@ch3ny4ng](https://github.com/ruanyf/weekly/issues/5653) 投稿）

2、[Screen Sharing](https://screensharing.net)

![](https://cdn.beekka.com/blogimg/asset/202412/bg2024120702.webp)

从浏览器分享你的屏幕给其他人，适合用来演示。（[@markliuyuxiang](https://github.com/ruanyf/weekly/issues/5657) 投稿）

3、[PMAtron](https://github.com/maskerprc/pmatron)

![](https://cdn.beekka.com/blogimg/asset/202412/bg2024121001.webp)

将 phpMyAdmin 用 Electron 封装成跨平台桌面软件。（[@MaskerPRC](https://github.com/ruanyf/weekly/issues/5666) 投稿）

4、[FastExcel](https://github.com/CodePhiliaX/fastexcel)

![](https://cdn.beekka.com/blogimg/asset/202412/bg2024121003.webp)

基于 Java 语言的 Excel 文件解析工具，可以用来提取数据。（[@JerryFan626](https://github.com/ruanyf/weekly/issues/5671) 投稿）

5、[Readest](https://github.com/chrox/readest)

![](https://cdn.beekka.com/blogimg/asset/202412/bg2024120703.webp)

一款开源电子书阅读器，跨平台桌面应用，基于 Next.js 15和 Tauri v2。（[@chrox](https://github.com/ruanyf/weekly/issues/5663) 投稿）

6、[IMG2AVIF](https://img2avif.com)

![](https://cdn.beekka.com/blogimg/asset/202412/bg2024121301.webp)

一个网页工具，将各种格式的图片转成 AVIF 格式。（[@malagebidi](https://github.com/ruanyf/weekly/issues/5678) 投稿）

7、[YT Pics](https://www.ytpics.com/)

![](https://cdn.beekka.com/blogimg/asset/202402/bg2024021106.webp)

一个 Web 应用，输入 YouTube 网址和指定时间，它会自动截取该时间的截图。

8、[Web2pdf](https://github.com/dvcoolarun/web2pdf)

一个命令行工具，将网页保存成 PDF 文件，有很多增强功能（自定义样式、生成目录等）。

9、[CheerpJ](https://labs.leaningtech.com/blog/cheerpj-3.0)

![](https://cdn.beekka.com/blogimg/asset/202402/bg2024021302.webp)

浏览器里面的 JVM 编译器，让 Java 程序可以在浏览器运行。

10、[fuzzy-search](https://github.com/m31coding/fuzzy-search)

一个前端的模糊搜索库，支持东亚语言。

## AI 相关

1、[BabelDuck](https://github.com/Orenoid/BabelDuck)

![](https://cdn.beekka.com/blogimg/asset/202412/bg2024121002.webp)

基于 AI 的口语对话练习应用。（[@Orenoid](https://github.com/ruanyf/weekly/issues/5669) 投稿）

2、[AIGIF](https://aigif.net)

![](https://cdn.beekka.com/blogimg/asset/202412/bg2024121204.webp)

GIF 动图搜索，可对图片人物进行换脸。（[@markliuyuxiang](https://github.com/ruanyf/weekly/issues/5682) 投稿）

3、[Imagenie](https://github.com/zhongweili/imagenie)

![](https://cdn.beekka.com/blogimg/asset/202412/bg2024121206.webp)

跨平台的桌面应用，使用 AI 在本地处理图片，比如人像修复、超分辨率放大、背景移除。（[@zhongweili](https://github.com/ruanyf/weekly/issues/5688) 投稿）

## 资源

1、[启动过程：Android 与 Linux](https://xdaforums.com/t/info-boot-process-android-vs-linux.3785254/)

![](https://cdn.beekka.com/blogimg/asset/202401/bg2024011705.webp)

这篇文章记录了 Linux 和 Android 各自的系统启动顺序。

2、[深入高可用系统原理与设计](https://www.thebyte.com.cn)

![](https://cdn.beekka.com/blogimg/asset/202412/bg2024121205.webp)

开源的中文电子书，梳理网络、云、容器、集群等知识。（[@isno](https://github.com/ruanyf/weekly/issues/5683) 投稿）

3、[English News in Levels](https://englishnewsinlevels.com)

![](https://cdn.beekka.com/blogimg/asset/202412/bg2024121207.webp)

英语新闻分级阅读网站，实时更新新闻，分为三种难度，有重点词汇、理解测试和朗读音频。（[@meterscao](https://github.com/ruanyf/weekly/issues/5699) 投稿）

4、[GitHub Weekly](https://iohub.inshub.cn)

![](https://cdn.beekka.com/blogimg/asset/202412/bg2024121208.webp)

这个网站将周刊讨论区的投稿，转成新闻卡片形式呈现。（[@inshub](https://github.com/ruanyf/weekly/issues/5701) 投稿）

## 图片

1、[密室照片](https://blog.archive.org/2024/06/01/the-backrooms-of-the-internet-archive/)

2010年，美国互联网上流传一组密室照片，看上去非常空旷神秘。

![](https://cdn.beekka.com/blogimg/asset/202406/bg2024060904.webp)

![](https://cdn.beekka.com/blogimg/asset/202406/bg2024060905.webp)

它们没有任何说明，不知道是在哪里拍的，也不知道是谁拍的。

这样反而激起了网友的兴趣：昏黄的灯光，陈旧潮湿的地毯，黄色的荧光灯和墙壁，无限的空房间，没有任何窗户，你被困在里面。

![](https://cdn.beekka.com/blogimg/asset/202406/bg2024060906.webp)

经过不断转发，这些照片逐渐成为美国互联网经久不衰的一个神话，成为了很多电影和游戏的灵感，比如《命运规划局》、《黑暗城市》、《异次元杀阵》。

最近，通过互联网档案馆（archive.org）的努力，现在终于查明，这组照片是一家家具店的二楼，当时正在进行翻新，一间间的小房间正是家具的陈列室。

![](https://cdn.beekka.com/blogimg/asset/202406/bg2024060907.webp)

## 文摘

1、[大众审美](https://www.alexmurrell.co.uk/articles/the-age-of-average)

人们眼中的美和丑，其实都是受到社会的影响，很少有人拥有自己独立的审美标准。

1990年代初期，两位俄罗斯艺术家委托一家美国市场研究公司，进行市场调查，向1001位美国人询问下面的问题。

> - 你最喜欢的颜色是什么？
> - 你喜欢锐利的曲线还是柔和的曲线？
> - 你喜欢光滑的笔触还是厚重的笔触？
> - 你喜欢裸体还是穿着衣服的人物？
> - 你喜欢休闲的人物还是工作的人物？
> - 你喜欢室内场景还是室外场景？
> - 你喜欢什么样的风景？

调查完成后，两位艺术家根据大多数人的偏好，绘制一幅画。理论上，这幅画应该受到最多社会大众的喜爱。

后来，他们又在其他国家做这个调查，得到一个惊人的结果：每个国家的调查结果（即大众偏好），几乎都是一致的。

> “人们想要的都是风景画，周围有几个人物，前景是动物，主要色调是蓝色。”

他们根据11个不同国家的调查结果，画出来的11幅画看上去几乎一样。

![](https://cdn.beekka.com/blogimg/asset/202303/bg2023032914.webp)

这证明了，全世界的大众审美正在趋同。从电影到时尚，从建筑到广告，全世界的人们喜欢差不多的东西，各国审美越来越接近，独特性越来越少。

举例来说，AirBnB 上面的公寓，不管是哪个国家，装潢风格很多都是雷同的，可以称为 AirBnB 美学：白墙、原木、胶囊咖啡机、扶手椅、裸砖、木搁板、灯泡。

![](https://cdn.beekka.com/blogimg/asset/202303/bg2023032915.webp)

这种 AirBnB 美学既有工业主义的粗犷原始，又有古典主义的优雅极简。

这种风格还影响到了咖啡店。

世界各地的咖啡店（包括餐厅），也慢慢变得相似：粗糙的木桌、宽大的窗户、朴素的吊灯。

![](https://cdn.beekka.com/blogimg/asset/202303/bg2023032916.webp)

总之，随着互联网连接全球，全世界正在形成统一的大众审美。以后，无论去到哪个国家，旅馆和咖啡店可能都是一样的装修。

## 言论

1、

我生活中一切顺利的事情都遵循相同的过程:

（1）我关注自己喜欢的​​事情。

（2）我找到多做这些事情的方法。

（3）我让有趣的人很容易发现我在做这些事情。

（4）我和他们一起出去玩，一起做项目。

-- [亨里克·卡尔森](https://www.henrikkarlsson.xyz/p/unfolding)

2、

伟大的科学家是想法大胆的人，但是对自己的想法同时持有高度批判的态度。接受自己的猜想之前，他们首先会严厉尝试反驳它。

只有发现很难反驳成功时，他们才相信自己的想法是对的。

-- [卡尔·波普尔](https://igorpak.wordpress.com/2020/12/10/what-if-they-are-all-wrong/)，科学哲学家

3、

作为一个至少用过十几种语言进行过商业开发的程序员，我完全不同意有人说，一种语言的编程速度优于另一种语言。

语言的编程速度因人而异，符合程序员的个人经历和思维习惯的语言，写起来最快。

-- [Hacker News 读者](https://news.ycombinator.com/item?id=41616851)

4、

我长期以来一直认为地球是一个“水星球”，存在着大量的水覆盖星球。

直到我做了数学计算，才意识到地球实际上是太空中的一块湿岩石，更像是用喷雾器喷了十几次的保龄球。

-- [Hacker News 读者](https://news.ycombinator.com/item?id=41238102)

## 往年回顾

[电动皮卡 Cybertruck 的 48V 供电](https://www.ruanyifeng.com/blog/2023/12/weekly-issue-282.html)（2023 #282）

[好用的平面设计软件](https://www.ruanyifeng.com/blog/2022/11/weekly-issue-232.html)（2022 #232）

[新人优惠的风险](https://www.ruanyifeng.com/blog/2021/11/weekly-issue-182.html)（2021 #182）

[快能力和慢能力](https://www.ruanyifeng.com/blog/2020/11/weekly-issue-132.html)（2020 #132）

（完）

