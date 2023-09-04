# 科技爱好者周刊（第 267 期）：5G 的春天要来了

这里记录每周值得分享的科技内容，周五发布。

本杂志[开源](https://github.com/ruanyf/weekly)，欢迎[投稿](https://github.com/ruanyf/weekly/issues)。另有[《谁在招人》](https://github.com/ruanyf/weekly/issues/3324)服务，发布程序员招聘信息。合作请[邮件联系](mailto:yifeng.ruan@gmail.com)（yifeng.ruan@gmail.com）。

## 封面图

![](https://cdn.beekka.com/blogimg/asset/202308/bg2023081702.webp)

去年落成的浙江省衢州体育场，模仿当地丘陵地形，外层覆盖了土坡，仿佛起伏的小山丘，是世界最大的覆土建筑群。该建筑由马岩松创立的北京 MAD 建筑事务所设计。（[via](https://www.sohu.com/a/579507996_440222)）

## 5G 的春天要来了

本月初，国家广电总局的官网发了[一条消息](http://www.nrta.gov.cn/art/2023/8/3/art_114_65077.html)，外界几乎没注意到。

![](https://cdn.beekka.com/blogimg/asset/202308/bg2023081207.webp)

**成都市正式启动 5G 广播电视的试验了**。这就是说，广电总局要用 5G 发送电视信号了。

你可能觉得奇怪，5G 网络看电视，不是老早就有了吗，这还需要试验吗？

我来科普一下，现有的互联网看电视，都是采用 **“一对一”的模式，每个客户端需要单独的服务器信号发送**，100个用户就需要100次发送，非常消耗带宽。

而本次试验是 5G 网络的“广播”发送，属于 **“一对多”模式，同一个信号被无数客户端接收，所有用户都不跟服务器建立连接。**

![](https://cdn.beekka.com/blogimg/asset/202308/bg2023081208.webp)

在这种模式下面，客户端不需要 IP 地址，就能接收信号。它很像无线电或者 GPS，属于单向信号，再多的用户也不会消耗带宽。当然，这样的话，用户也无法上传任何数据。

这种模式有很多优点。

**（1）4K 视频立刻普及**。打开电视机，不管哪个频道，播放的都是高清的 4K 节目。

**（2）手机看电视开始流行**。现在的手机看电视，需要昂贵的流量费，所以推广不起来。一旦采用广播模式，不消耗流量费，将促进手机电视的发展。

**（3）带动硬件升级**，电视机需要 5G 接收器，才能收到 5G 信号。另外，为了享受高清视频，也需要使用 4K 电视机。

**（4）节省带宽**。某些热点节目（比如世界杯）通过 5G 发送，会节省整个社会的带宽消耗，也会让人群聚集场合（火车站、公园等）的通信保持畅通。

**（5）推动 5G 的发展**。5G 网络自从推出，一直不温不火，没有杀手级应用，体现不出相比 4G 网络的优势。

老实说，现有的网络应用，没有什么是只有 5G 能做，4G 不能做的，而且 4G 的表现也堪用。

以后就不一样了，只有 5G 网络才能看广播电视。**这将是一个转折点，标志 5G 网络可能迎来大发展。** 

正因为 5G 广播电视有这么多优点，[美国](https://spectrum.ieee.org/5g-tv)和[欧洲](https://www.ibc.org/trends/5g-in-broadcast-5g-tv-online/5969.article)都在试验了。今年5月的英国国王查尔斯三世的加冕仪式，就同时用 5G 广播电视转播。

下面是我在网上看到的照片，国外使用手机和电视，接收 5G 广播电视的效果。

![](https://cdn.beekka.com/blogimg/asset/202308/bg2023081209.webp)

![](https://cdn.beekka.com/blogimg/asset/202308/bg2023081210.webp)

5G 广播电视有两种技术方案，一种是 5G 基站发射信号，称为“小塔方案”；另一种是广播电视塔发射信号，称为“大塔方案”。

国内这次用的是“大塔方案”。原因大概是在中国，5G 基站属于电信系统，广播电视塔属于广电系统，而本次试验是广电总局推动的。

目前，实施细节还不知道，不清楚怎样才能在成都收看到 5G 广播电视，了解内情的朋友可以说说。

## 科技动态

1、[禁用燃气灶](https://www.bloomberg.com/news/articles/2023-01-09/us-safety-agency-to-consider-ban-on-gas-stoves-amid-health-fears)

彭博通讯社报道，美国正考虑禁用燃气灶。

![](https://cdn.beekka.com/blogimg/asset/202301/bg2023011003.webp)

主要原因是燃气灶使用天然气，会排放二氧化氮、一氧化碳和细颗粒物等空气污染物。一旦室内通风不好，就会引发呼吸系统疾病、心血管疾病、癌症等。据统计，美国超过12%的儿童哮喘病可归因于燃气灶和煤气炉。

美国消费者组织建议改用电磁灶，替代燃气灶。但是，这对中餐不现实，中餐离不开明火，一旦废除燃气灶，中餐馆恐怕都开不下去。

2、[船舵偷渡](https://www.bbc.com/news/world-latin-america-66450500)

BBC 报道了一起匪夷所思的事件。今年6月，四名尼日利亚男子为了离开该国，爬上了一艘巨型油轮的船舵。

![](https://cdn.beekka.com/blogimg/asset/202308/bg2023081305.webp)

他们以为这艘油轮将开往欧洲，希望躲在船舵上偷偷过去，因为船舵是他们唯一能够从渔船爬上油轮的地方。

但是，他们并不知道，油轮并不是开往欧洲，而是开往巴西，横渡整个大西洋，行程5600公里，为期14天。

![](https://cdn.beekka.com/blogimg/asset/202308/bg2023081306.webp)

结果，这四个人就在船舵上待了整整14天，依靠随身携带的少量淡水和干粮为生，到达了巴西港口才被人发现，此时他们已经完全虚脱。

![](https://cdn.beekka.com/blogimg/asset/202308/bg2023081307.webp)

![](https://cdn.beekka.com/blogimg/asset/202308/bg2023081308.webp)

3、[脑电波同步](https://www.nyu.edu/about/news-publications/news/2023/april/in-sync-brainwaves-predict-learning--study-shows-.html)

美国研究人员发现，老师和学生在课堂上，如果脑电波呈现同步变化，上课效果最好。

![](https://cdn.beekka.com/blogimg/asset/202305/bg2023051808.webp)

他们因此提出，脑电波可以评价教学效果。但问题是，这种方法需要老师和学生都戴着测量装置上课。

![](https://cdn.beekka.com/blogimg/asset/202305/bg2023051807.webp)

4、[雨水发电板](https://thedebrief.org/forget-solar-panels-here-come-rain-panels/)

光伏板适合在阳光充足的地方发电，但是有些地方常年阴雨，根本不适合太阳能发电。

清华大学和中国科学院的研究团队，设计出了雨水发电板。只要装在屋顶上，下雨就能发电。

![](https://cdn.beekka.com/blogimg/asset/202307/bg2023072901.webp)

它的原理是雨滴落下，与发电板的表面发生摩擦，从而导致雨滴带有正电荷。只要有效收集这些电荷，就能发电。

![](https://cdn.beekka.com/blogimg/asset/202307/bg2023072902.webp)

它的发电功率，据说可以达到200瓦/平方米。这已经跟同样面积的光伏板一样了。

## 文章

1、[机上 WiFi 指南（中国版）](https://www.36kr.com/p/2383422584255753)（中文）

![](https://cdn.beekka.com/blogimg/asset/202308/bg2023081301.webp)

本文介绍什么样的航班有 WiFi、机上上网要多少钱等问题。

2、[什么是编译器的解析](https://engineering.desmos.com/articles/pratt-parser/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202306/bg2023060901.webp)

这篇文章的前半部分，通过一个简单例子，解释编译器如何将代码解析成 AST（抽象代码树）。

3、[波形](https://pudding.cool/2018/02/waveforms/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202306/bg2023061201.webp)

一篇互动式科普文章，介绍波的基本知识，有大量动画演示。

4、[Ruby 的 Lambda 函数](https://scoutapm.com/blog/power-of-lambdas-in-ruby)（英文）

![](https://cdn.beekka.com/blogimg/asset/202305/bg2023052701.webp)

一篇 Ruby 语言的入门教程，介绍怎么使用匿名函数（Lambda 函数），写得很通俗，可以用来了解 Lambda 函数。

5、[矩阵是图，图是矩阵](https://thepalindrome.org/p/matrices-and-graphs)（英文）

![](https://cdn.beekka.com/blogimg/asset/202307/bg2023071503.webp)

本文是一篇教程，介绍矩阵与图之间的密切关系（上图）。

6、[Makefile 的替代品 Taskfile](https://cloudnativeengineer.substack.com/p/ep-5-taskfile-a-modern-alternative)（英文）

![](https://cdn.beekka.com/blogimg/asset/202307/bg2023071604.webp)

作者介绍他的自动化工具，使用 Taskfile 替代 Makefile。

7、[哈希数据结构 HMAT 简介](https://photonlines.substack.com/p/grokking-hash-array-mapped-tries)（英文）

![](https://cdn.beekka.com/blogimg/asset/202307/bg2023071605.webp)

作者通俗易懂地介绍 HMAT 结构，通过哈希快速匹配键名和键值。

8、[使用 CSS 生成页面截图](https://www.stefanjudis.com/a-firefox-only-minimap/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202307/bg2023071802.webp)

本文介绍一个只有 Firefox 支持的 CSS 属性，可以直接获取当前页面的截图。

## 工具

1、[Novel](https://github.com/steven-tey/novel)

![](https://cdn.beekka.com/blogimg/asset/202306/bg2023061701.webp)

一个类似 notion 那样的“所见即所得”的网页编辑器，支持 AI 生成内容。

2、[trurl](https://github.com/curl/trurl)

curl 的作者 Daniel Stenberg 新写的命令行工具，用来解析和操作 URL。

3、[WingetUI](http://www.marticliment.com/wingetui/)

![](https://cdn.beekka.com/blogimg/asset/202306/bg2023061903.webp)

Windows 命令行包管理器 Winget 的 非官方 UI 界面。

4、[Bytebase](https://www.oschina.net/p/bytebase)

![](https://cdn.beekka.com/blogimg/asset/202308/bg2023081607.webp)

国产的数据库数据结构（schema）管理工具，基于 Web 界面，需要自己部署，支持各种主流数据库。（[@shandbb](https://github.com/ruanyf/weekly/issues/3367) 投稿）

5、[DevPod](https://devpod.sh/)

![](https://cdn.beekka.com/blogimg/asset/202306/bg2023062102.webp)

一个桌面软件，让本地 IDE 的运行结果自动保存到远程，类似于自己搭建 GitHub 的 CodeSpace，支持各种后端（包括 SSH 和云主机）。

6、[Anime.js](https://animejs.com/)

![](https://cdn.beekka.com/blogimg/asset/202306/bg2023062301.webp)

一个轻量级 JavaScript 动画库，具有简单但强大的 API。

7、[Mailpit](https://github.com/axllent/mailpit)

![](https://cdn.beekka.com/blogimg/asset/202306/bg2023062402.webp)

一个电子邮件测试工具，用来验证你的应用发送邮件是否正常，可以拦截邮件，并自带 SMTP 测试工具。

8、[OpenResume](https://github.com/xitanggg/open-resume)

![](https://cdn.beekka.com/blogimg/asset/202306/bg2023062601.webp)

一个开源的简历生成器，还支持将现有的简历导入。

9、[Glitch Text Generator](https://glitchtext.net/)

![](https://cdn.beekka.com/blogimg/asset/202308/bg2023081703.webp)

为字符加上毛刺效果的网页工具。（[@maojindao55](https://github.com/ruanyf/weekly/issues/3373) 投稿）

10、[Fresns](https://fresns.cn)

![](https://cdn.beekka.com/blogimg/asset/202308/bg2023081704.webp)

一款开源的 PHP 应用，可以根据需要作为论坛、社交网络、CMS 系统等使用。（[@jevantang](https://github.com/ruanyf/weekly/issues/3374) 投稿）

## 资源

1、[高校校徽字体图标库](https://github.com/lovefc/china_school_badge)

![](https://cdn.beekka.com/blogimg/asset/202308/bg2023081206.webp)

这个仓库收集了全国200多所高校的校徽，制作成字体图标。（[@lovefc](https://github.com/ruanyf/weekly/issues/3362) 投稿）

2、[TypeScript 小书](https://github.com/gibbok/typescript-book)（The Concise TypeScript Book）

一个简要的 TypeScript 英文教程。

3、[Workout.lol](https://workout.lol/)

![](https://cdn.beekka.com/blogimg/asset/202307/bg2023071007.webp)

一个有趣的网站，你先选择健身器械，然后选择要锻炼哪一块肌肉，它就告诉你应该用什么姿势锻炼（视频和图解）。

4、[Name by AI（AI 起名）](https://www.namedbyai.com/)

![](https://cdn.beekka.com/blogimg/asset/202307/bg2023071302.webp)

回答一些问题，该网站就会帮你起一个英文名字。

## 图片

1、[野驴打洞](https://theconversation.com/feral-desert-donkeys-are-digging-wells-giving-water-to-parched-wildlife-159909)

沙漠里面的马和野驴，因为啃食宝贵的地面植物，被认为对环境有害。

但是，一组澳大利亚科学家跟踪沙漠野驴，发现它们会在沙漠里面打洞。

![](https://cdn.beekka.com/blogimg/asset/202308/bg2023081201.webp)

![](https://cdn.beekka.com/blogimg/asset/202308/bg2023081202.webp)

![](https://cdn.beekka.com/blogimg/asset/202308/bg2023081203.webp)

一旦它们挖出水源，这将是周围唯一的供水点，令许多其他动物收益，包括鸟类、黑尾鹿、甚至美洲狮。

![](https://cdn.beekka.com/blogimg/asset/202308/bg2023081204.webp)

就算不久后，洞里面的水干涸了，这里也会变成植物发芽和生长的湿地。

![](https://cdn.beekka.com/blogimg/asset/202308/bg2023081205.webp)

2、[斯图尔特的住宅](https://www.theguardian.com/science/alexs-adventures-in-numberland/2015/oct/05/maths-palace-built-by-calculus-rock-star-on-sale-for-14m)

加拿大数学家詹姆斯·斯图尔特（James Stewart）是著名微积分教程的作者。该教程在北美非常畅销，他赚到了巨额稿酬。

![](https://cdn.beekka.com/blogimg/asset/202308/bg2023081309.webp)

2003年，他就在多伦多的一个高档社区，建造了一栋住宅。

![](https://cdn.beekka.com/blogimg/asset/202308/bg2023081310.webp)

他要求建筑师，将这栋房子设计成基于曲线，并且能够反映微积分的特质。

![](https://cdn.beekka.com/blogimg/asset/202308/bg2023081311.webp)

![](https://cdn.beekka.com/blogimg/asset/202308/bg2023081312.webp)

这栋房子建成后，在建筑界就非常有名。

2014年12月，斯图尔特因病去世，享年73岁。该住宅公开出售，后来以1.05亿人民币的价格成交。

![](https://cdn.beekka.com/blogimg/asset/202308/bg2023081313.webp)

![](https://cdn.beekka.com/blogimg/asset/202308/bg2023081314.webp)

## 文摘

1、[我在 20 年的软件工程师生涯中学到的事情](https://www.simplethread.com/20-things-ive-learned-in-my-20-years-as-a-software-engineer/)

（1）优秀的软件工程师不仅编写代码，还会考虑谁将使用它、为什么使用它、如何使用它。牢记用户需求才能创造良好的用户体验。

（2）水平再高的程序员，也会在自己擅长的领域犯错，如果遇到复杂的问题，就更是如此了。始终牢记，最好的代码是没有代码，或者不需要维护的代码。

（3）任何软件工程师的主要工作都是交付价值。软件只是达到目的的手段。

（4）警惕那些很长时间没有编写任何代码、却在设计系统的人。

（5）Bjarne Stroustrup 有一句名言：“只有两种计算机语言：人们抱怨的语言和没人使用的语言”。大型系统也是如此，每个系统最终都很糟糕。

因此，不要太在意代码的优雅和完美，而要持续改进，创建一个可用的系统，让开发者喜欢在其中工作并可以提供价值。

（6）10倍程序员是一个愚蠢的神话。我只见过程序员将代码规模增加了10倍，最终结果是你必须修复10倍的bug。

真正要做的不是找到神话中的10倍程序员，而是要避免出现0.1倍程序员。那些浪费时间、不寻求反馈、不测试代码、不考虑边缘情况等的程序员，必须保证让这样的人远离我们的团队。

（7）人们说他们想要创新，但实际上，他们想要通常的只是某种新颖性和业务成功。如果你的创新改变了人们做事的方式，大多数情况下会得到负面反馈。如果你相信你正在做的事情，并知道它真的会改善事情，那么就准备好迎接一场持久战吧。

（8）数据是系统中最重要的部分。数据可能会比你的代码寿命更长，保持数据的有序和清洁，避免脏数据，从长远来看，会得到很好的回报。

（9）一直存在的旧技术不是恐龙，而是鲨鱼。它们很好地解决了问题，所以一直活到了现在，没有被快速变化的技术浪潮淘汰。

不要轻易押注新技术，只有在充分理由的情况下才替换正在发挥作用的旧技术。那些老式的技术工具不花哨，也不令人兴奋，但它们可以完成工作，不会给你带来很多个不眠之夜。

（10）很多软件工程师除非被问到，否则不会发表意见。不要因为有人没当面发表意见，而认为他们没什么要补充的。有时，会议上嗓门最高的人是我最不想听的人。

（11）如果将人们与他们的工作成果分开，他们就会不太关心他们的工作。软件工程师和所有人一样，需要有主人翁的感觉，从头到尾拥有整个流程，直接负责交付价值。

让一群充满激情的人完全拥有设计、构建和交付软件的所有权，令人惊奇的事情就会发生。

（12）面试最好用于了解某人是谁，以及他们对特定专业领域的兴趣程度，对于试图弄清楚他们是否将成为一个优秀的团队成员，那是徒劳的。

（13）始终努力构建一个更小的系统。

有很多原因会推动你，去构建一个比原先设想的更大的系统，人类似乎有一种提供更多功能的欲望。你应该抵制这种欲望，在满足设计目标的前提下，始终努力构建一个更小的系统，这样你最终会得到一个比最初设计更好的系统。

## 言论

1、

每个人都应该有一个网站。它会被安全地保存在 archive.org 中，供你的后代研究和思考。网站的可持久性，比社交媒体好得多，也比人们以为的更长久。

-- [《地球上的每个人都应该有自己的网站》](https://eftegarie.com/every-person-on-the-planet-should-have-their-own-website/)

2、

哈佛大学的 GPA，20世纪上半叶一直稳定在2.5左右，1960年攀升至3.0，今天已经涨到3.8了。

有人说，这是因为今天的学生比以前的聪明。不是的，真正原因是老师降低了标准。现在的学费非常昂贵，大学需要讨好学生（消费者），从而导致了成绩膨胀。

-- [《成绩膨胀》](https://www.thecrimson.com/article/2022/10/3/barton-grade-inflation/)

3、

你需要养成的一个好习惯，就是强迫自己去做困难的事情。随着你做的事情越来越困难，你会逐渐建立起对自己能力的自信。

-- [《证明你可以做困难的事情》](https://blog.nateliason.com/p/proof-you-can-do-hard-things)

4、

我自己的经历是，如果你明确知道自己要构建什么，并且唯一需要做的就是执行，那么远程工作的效果会好得多。

反过来，如果你不知道自己需要构建什么，尝试边做边发现，并且依赖于同事的快速反馈，那么面对面工作会好得多。

但是，现实是大多数公司，尤其是大公司的员工，都属于第二类，所以不适合远程工作。

-- [Hacker News 读者](https://news.ycombinator.com/item?id=36251536)

## 历史上的本周

[人工智能的机会在哪里](https://www.ruanyifeng.com/blog/2022/08/weekly-issue-220.html)（2022 #220）

[软件订阅制的胜利](https://www.ruanyifeng.com/blog/2021/08/weekly-issue-170.html)（2021 #170）

[只有开放才能打败封锁](https://www.ruanyifeng.com/blog/2020/08/weekly-issue-120.html)（2020 #120）

[世界进入负利率时代，这意味什么](https://www.ruanyifeng.com/blog/2019/08/weekly-issue-70.html)（2019 #70）

（完）
