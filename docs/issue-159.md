# 科技爱好者周刊（第 159 期）：游戏开发者的年薪

这里记录每周值得分享的科技内容，周五发布。

本杂志开源（GitHub: [ruanyf/weekly](https://github.com/ruanyf/weekly)），欢迎提交 issue，投稿或推荐科技内容。

周刊讨论区的帖子[《谁在招人？》](https://github.com/ruanyf/weekly/issues/1747)，提供大量程序员就业信息，欢迎访问或发布工作/实习岗位。

## 封面图

![](https://cdn.beekka.com/blogimg/asset/202105/bg2021052012.jpg)

重庆市很多山地，地形复杂，产生了特有的奇观：被高架道路团团围住的楼盘。（[via](https://www.instagram.com/p/CO6iPjJlIvs/)）

## 本周话题：游戏开发者的年薪

最近，推特上面有很多欧美的游戏开发者，晒自己的薪水，使用 [#GameDevPaidMe](https://twitter.com/hashtag/gamedevpaidme) 这个标签就能看到，从中可以了解国外程序员的收入。

下面是一个美国开发者的发言。

![](https://cdn.beekka.com/blogimg/asset/202105/bg2021051102.jpg)

他有超过十年的开发经验，年薪是20多万美元。这还是在西雅图，如果在湾区，工资可能还会再高一些。这跟我听说的差不多，美国高级程序员的年薪，一般都会超过20万美元（约130万人民币）。

我没想到的是，欧洲程序员的年薪，比美国少非常多。

![](https://cdn.beekka.com/blogimg/asset/202105/bg2021051103.jpg)

上面这个英国开发者，作为高级程序员，年薪居然才4万英镑（约36万人民币）。他入行时，更是少到1.5万英镑（约14万人民币）。欧洲其他国家的情况也差不多，年薪也就几万欧元，如果是东欧国家（比如波兰），薪水就更低了。

这就是令我吃惊的地方， **西欧国家的人均 GDP 远高于中国，但是程序员的收入居然与中国差不多，甚至还低于中国。**

我敢说，国内高级游戏开发者的年薪，肯定不止4万英镑（36万人民币）。我举一个例子，去年有一条[新闻](https://finance.sina.com.cn/tech/2021-03-05/doc-ikftpnnz2743455.shtml)，腾讯起诉了两名90后前员工，他们都是游戏开发，离职后违反了竞业条款，加入了竞争对手。为了计算违约金，法院的[判决书](https://www.qixin.com/lawsuit/923ec0d1-1590-4ae4-a5c7-85d17c1cddcb/603d1ae1ebf551ed45008c1f)详细列出了薪资水平。

> 吉某某于2019年3月4日提出辞职，工作至2019年4月1日。2018年4月至2019年3月期间，吉某某每月固定工资32,240元，腾讯公司于2018年11月以"税前发放"名义支付吉某某344.38元，2019年2月支付吉某某其他奖金113.08元。腾讯公司另发放2018年年终奖203,240元。

按照上面列出的数字，工资 + 年终奖接近60万人民币。这比英国游戏开发者的收入，高出了一大截。这个还只是腾讯的普通开发，算不上骨干程序员。

**结论就是，中国程序员的年薪已经不低了，虽然不如美国，但是一点不输给欧洲，高级程序员的收入其实要比欧洲高得多。** 如果人民币以后升值，薪水差异就会更大。我在推特上说，如果以国内游戏业的薪水去欧洲招人，可以招到非常好的程序员。网友在底下评论，人家的薪水是以每天工作8小时计算的，这也是事实。

以前我们总是说，中国的劳动力成本低，这种说法已经不成立了，现在欧洲程序员反而比国内更便宜。这样的一个直接后果就是，外包行业在国内搞不下去了，软件外包就是比谁的成本低，国内的外包行业已经在萎缩了，倒是收费高昂的软件咨询公司越来越多。

对于年轻程序员来说，这也是前所未有的挑战。你的工资高了，但是面对的竞争也强了，你是跟全世界的优秀人才在竞争。如果国外程序员比你优秀，还比你便宜，那么雇主可能不会选择你，反正可以远程开发。所以，大家要有世界眼光，不要满足于跟周围的人比，要以世界水平来要求自己。

## 深度剖析 React 源码

学习前端开发时，很多同学都有想法，想啃一啃框架的源码。

这是很好的想法。如果能看懂源码，用起来就会得心应手，个人能力也是很大提升。万一还能向框架仓库提交代码，成为贡献者，那更是个人的荣耀和职业生涯的成就。

![](https://cdn.beekka.com/blogimg/asset/202105/bg2021052006.jpg)

首当其冲的，就是 React 的源码。它是全世界最流行的前端框架，应用最广，包含了很多重要概念（比如虚拟 DOM、hooks、fiber 等），多端适用，很有学习价值。

但是，React 源码量级实在是太大了（压缩后接近 300KB），内部构成非常复杂。很多同学第一次打开源码，就被“劝退”了，因为根本找不到代码入口。就算硬着头皮读下去，也是如坠云雾之中。

就算这样，考虑到下面几点，我还是鼓励大家啃一下 React 源码。（1）大厂面试会问到 React 原理，没看过源码，很难深入理解。（2）读源码能提升解决 bug 和性能优化能力。（3） React 框架本身是一个非常好的学习资料，可以学到怎么写出规范的和可维护的代码。（4）读懂源码可以证明你的潜力。

![](https://cdn.beekka.com/blogimg/asset/202105/bg2021052007.jpg)

本周的课程资料就是 **《深度剖析 React 17 源码资料包》** ，由前京东资深前端工程师高少云老师主讲。这份资料从简单的手写 mini-react 入手，再到复杂的fiber、hooks，深入解读 React 源码。

课程主要内容如下。希望能够引导大家，真正入门 React 源码。

> - 第一课：《初步解读 React 的工作原理》，讲解虚拟 DOM 和 JSX 的源码实现。
> - 第二课：《Fiber 的背景与实现》，讲解 Fiber 架构。
> - 第三课：《深入解读 Hooks》：深度解读 Hooks 源码。

![](https://cdn.beekka.com/blogimg/asset/202105/bg2021052011.jpg)

![](https://cdn.beekka.com/blogimg/asset/202105/bg2021052009.jpg)

现在只需要微信扫描下方二维码，就可以 **0 元** 获得《深度剖析React源码》资料包。有意掌握 React 的同学，不妨学学看。

![](https://cdn.beekka.com/blogimg/asset/202105/bg2021052010.jpg)

## 科技动态

1、

[一家美国 3D 打印公司](https://3dprintingindustry.com/news/desktop-metal-redefines-woodworking-with-new-wood-3d-printing-technology-189752/)推出了木纤维打印，可以 3D 打印出木制品。

![](https://cdn.beekka.com/blogimg/asset/202105/bg2021050810.jpg)

![](https://cdn.beekka.com/blogimg/asset/202105/bg2021050811.jpg)

2、

[国家广电总局](https://finance.sina.cn/7x24/2021-05-14/detail-ikmyaawc5198964.d.html)发布统计，我国网民日均刷视频约100分钟。这个时长应该已经超过了刷网页的时长。

![](https://cdn.beekka.com/blogimg/asset/202105/bg2021051403.jpg)

3、

[山东省和河南省](https://news.sina.com.cn/c/2021-05-14/doc-ikmxzfmm2458567.shtml)签订《黄河生态保护协议》，规定从河南流入山东的黄河水，如果水质改善一个等级，山东给予河南6000万元补偿资金；如果恶化一个等级，河南给予山东6000万元补偿资金。

![](https://cdn.beekka.com/blogimg/asset/202105/bg2021051701.jpg)

4、

[美国政府](https://www.npr.org/2021/05/13/996299367/how-to-stop-ransomware-attacks-1-proposal-would-prohibit-victims-from-paying-up)正在考虑通过一项新法律，如果企业遭到勒索软件攻击，法律将禁止向勒索者支付赎金。政府希望让勒索者无利可图，从而停止攻击。

![](https://cdn.beekka.com/blogimg/asset/202105/bg2021051502.jpg)

5、

[一位澳大利亚赛车手](https://www.h2-view.com/story/hyundai-nexo-breaks-world-record-for-longest-distance-travelled-in-a-fcev/)创下了氢动力汽车续航的世界纪录，他使用一辆现代牌氢动力汽车，单次续航887.5公里，共消耗了6.27公斤的氢气。

![](https://cdn.beekka.com/blogimg/asset/202105/bg2021051901.jpg)

6、

巴勒斯坦和以色列最近爆发军事冲突，下面是一张5月14日凌晨的照片。右侧是巴勒斯坦发射的火箭弹，左侧是以色列“铁穹”（ Iron Dome）防御系统发射的拦截导弹，两方对射，看上去非常壮观。

![](https://cdn.beekka.com/blogimg/asset/202105/bg2021051811.jpg)

7、

[北京大兴](https://finance.sina.com.cn/chanjing/gsnews/2021-05-18/doc-ikmyaawc5978539.shtml)建成全球最大的加氢站，日加氢量可达4.8吨，共有8台加氢机、16把加氢枪。一辆总重4.5吨的氢燃料电池货车，只需加氢3分钟，就能续航350公里。氢能每公斤30元，与传统货车的加油成本基本相当。

![](https://cdn.beekka.com/blogimg/asset/202105/bg2021051802.jpg)

![](https://cdn.beekka.com/blogimg/asset/202105/bg2021051803.jpg)

8、[32位股价不够用](https://www.wsj.com/articles/berkshire-hathaways-stock-price-is-too-much-for-computers-11620168548)

![](https://cdn.beekka.com/blogimg/asset/202105/bg2021050506.jpg)

美国最贵的股票，目前是巴菲特的伯克希尔·哈撒韦公司 ，过去一年股价不断上涨，已经达到了421,000美元一股。

这给纳斯达克股票市场造成了麻烦，因为交易所使用32位格式储存股价，能够记录的最大值是`2^32 - 1`（4,294,967,295）。其中，留出4位作为小数，所以能够记录的最高股价为429,496.7295美元。只要伯克希尔·哈撒韦公司再上涨2%，就会超出这个最高价。

纳斯达克市场已经暂停了伯克希尔·哈撒韦公司的报价，开始升级系统。巴菲特曾经被问到，为什么不像大多数公司一样拆分股票，让股价变得便宜。他回答，这样会吸引来很多不老练的短期投资者，他们根本不知道自己在做什么，所以不会拆分股票。

## 文章

1、[鸽子在我家窗口孵蛋](https://www.douban.com/people/xquizend/status/3421629287/)（中文）

![](https://cdn.beekka.com/blogimg/asset/202105/bg2021050701.jpg)

一对鸽子在阳台的空花盆筑了个简易巢，然后在里面下了两只蛋，并且孵了起来。作者观察了半个月，终于看到小鸟孵出来了。

2、[如何生成不规则边框的背景图](https://css-tricks.com/creating-non-rectangular-headers/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202105/bg2021050101.jpg)

本文介绍为一个网页元素添加不规则背景图（上图）的几种方法。

3、[Git 的 squash 合并](https://blog.dnsimple.com/2019/01/two-years-of-squash-merge/)（英文）

Git 分支进行合并时，有多种合并方式：直进合并、非直进合并、递归合并和 squash 合并。最后一种 squash 合并，指的是把待合并的节点汇总成为一个新的提交。本文介绍这种合并方式。

4、[JavaScript 模块的代码重复性](https://habr.com/ru/post/554334/)（英文）

作者做了一个实验，他新建了一个 Angular 的标准项目，分析 node_modules 目录里面安装的所有模块，对脚本文件的每一个函数计算哈希值，结果发现61%的函数是重复的，莫非大家都是从 StackOverflow 拷贝代码。

5、[Rust 的不知名贡献者](https://brson.github.io/2021/05/02/rusts-most-unrecognized-contributor)（英文）

我们都知道，很多语言的创始人、主要贡献者是谁。但是，Rust 语言的主要贡献者是谁，大家却说不出来。本文介绍 Rust 语言背后的贡献者。

6、[微小变化带来的大收益](https://joelcalifa.com/blog/tiny-wins/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202105/bg2021050402.jpg)

作者讲了几个案例，都是网站细节的微小改进，带来用户体验的巨大改进，比如 GitHub 的 favicon 显示构建结果（上图）。

7、[使用 Go 语言学习蒙特卡洛模拟](https://ggcarvalho.dev/posts/montecarlo/)（英文）

本文采用 Go 语言，使用各种小例子，讲解什么是蒙特卡洛模拟。

8、[走进半导体巨头](https://www.cbsnews.com/news/semiconductor-chip-shortage-60-minutes-2021-05-02/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202105/bg2021050301.jpg)

美国 CBS 电视网的著名新闻节目《60分钟》，最近播出了一期半导体特辑，访问英特尔和台积电的 CEO，报道芯片为什么会出现短缺。这是节目的文字稿。

9、[JavaScript 的延迟加载属性模式](https://humanwhocodes.com/blog/2021/04/lazy-loading-property-pattern-javascript/)（英文）

如果一个对象的属性值需要非常昂贵的计算，我们可能希望，只有用到这个属性时，才对它求值。本文讨论这在 JavaScript 里面应该怎么实现，作者是著名的尼古拉斯·扎卡斯（Nicholas C.Zakas）。

## 工具

1、[Scheme flood](https://schemeflood.com/)

![](https://cdn.beekka.com/blogimg/asset/202105/bg2021051408.jpg)

大家用桌面浏览器访问这个网站，会列出你的电脑安装了什么应用（上图）。这样做的目的，是生成一个用户指纹，从而追踪用户，作者写了一篇详细的[文章](https://fingerprintjs.com/blog/external-protocol-flooding/)，解释这是怎么实现的。（[@jwenjian](https://github.com/ruanyf/weekly/issues/1759) 投稿）

2、[Chanify](https://github.com/chanify/chanify/blob/main/README-zh_CN.md)

一个开源的 iOS 设备消息推送工具，分为服务器和 iOS App 两个部分。安装以后，可以将文本/图片/文件等各种消息推送到 iOS 设备。（[@wizjin](https://github.com/ruanyf/weekly/issues/1768) 投稿）

3、[osmos::feed](https://github.com/osmoscraft/osmosfeed)

![](https://cdn.beekka.com/blogimg/asset/202105/bg2021050201.jpg)

一个通过 GitHub Actions 自动更新的 RSS 阅读器，每次更新后会发布成 GitHub Pages 的静态网页。（[@chuanqisun](https://github.com/ruanyf/weekly/issues/1767) 投稿）

4、[APK 在线分析](https://apkinfo.online/)

一个在线工具，用来分析、修改 APK 文件（安卓应用安装包），以及提取 APK 图标。（[@codemofa](https://github.com/ruanyf/weekly/issues/1765) 投稿）

5、[Come Browse With Me](https://comebrowsewithme.com/)

![](https://cdn.beekka.com/blogimg/asset/202104/bg2021042810.jpg)

这个在线工具通过 WebRTC，可以将你的浏览器窗口分享给他人，也就是说，别人可以看到你在页面上的一举一动。

6、[readme.so](https://readme.so/)

![](https://cdn.beekka.com/blogimg/asset/202105/bg2021050202.jpg)

一个 Web 工具，通过拖拉自动生成代码仓库的 README 文件。

7、[FicusJS](https://github.com/ficusjs/ficusjs)

一个轻量级的 Web Components 开发框架，用于快速开发 Web Components 组件。

8、[github-elements](https://github.com/github/github-elements)

这个仓库收集了 GitHub 发布的官方 Web Components 组件，目前有17个，都是 GitHub 官网实际在使用的项目。

9、[一纸简历](https://cv.devtool.tech/app)

![](https://cdn.beekka.com/blogimg/asset/202105/bg2021051902.jpg)

使用 Markdown 编写简历的在线工具，支持模板与实时预览，可以导出为 PDF 文件。（[@shfshanyue](https://github.com/ruanyf/weekly/issues/1756) 投稿）

10、[木及简历](https://resume.mdedit.online/)

![](https://cdn.beekka.com/blogimg/asset/202105/bg2021051903.jpg)

编写简历的在线工具，与上一个软件类似，有多个模板可选择，源码见 [GitHub](https://github.com/hua1995116/react-resume-site)。（[@hua1995116](https://github.com/ruanyf/weekly/issues/1760) 投稿）

## 资源

1、[FFmpeg 操作备忘](https://gist.github.com/steven2358/ba153c642fe2bb1e47485962df07c730)

这个网页收集了 FFmpeg 一些常见操作的命令行写法。

2、[业余编译器作者的学习资源](https://c9x.me/compile/bib/)

![](https://cdn.beekka.com/blogimg/asset/202104/bg2021042501.jpg)

该网页收集各种编译器相关的自学资源。

3、[JavaScript 数据科学教程](http://js4ds.org)

![](https://cdn.beekka.com/blogimg/asset/202104/bg2021042406.jpg)

一本英文的 JavaScript 教程，免费阅读。从零基础的语法开始讲起，为数据研究人员提供必要的 JavaScript 知识。

4、[IPv6 测试聚合站](https://ipv6.stream/)

一个专门收集各种 IPv6 网络测试服务的网站。（[@TulvL](https://github.com/ruanyf/weekly/issues/1764) 投稿）

5、[Starlink 地面站分布图](https://www.google.com/maps/d/viewer?mid=1H1x8jZs8vfjy60TvKgpbYs_grargieVw&ll=42.83802071464017,-94.85800456249999&z=2)

![](https://cdn.beekka.com/blogimg/asset/202104/bg2021042613.jpg)

Starlink 的卫星上网，目前需要有地面站。网友在谷歌地图上建了一个图层，标出现阶段所有的地面站位置。亚洲一个都没有，所以国内就算有卫星天线，恐怕目前也无法使用 Starlink 卫星上网。

## 图片

1、[数学家的黑板](https://www.scientificamerican.com/article/the-art-of-mathematics-in-chalk/)

美国普林斯顿大学最近出版了一本[《数学家的黑板》](https://press.princeton.edu/books/hardcover/9780691199221/do-not-erase)摄影集，收录了很多数学家的课堂板书。

![](https://cdn.beekka.com/blogimg/asset/202104/bg2021042502.jpg)

![](https://cdn.beekka.com/blogimg/asset/202104/bg2021042504.jpg)

![](https://cdn.beekka.com/blogimg/asset/202104/bg2021042503.jpg)

![](https://cdn.beekka.com/blogimg/asset/202104/bg2021042505.jpg)

2、[迈阿密的色彩](https://devonzuegel.com/post/field-notes-miami)

迈阿密是美国南方的旅游胜地，是美国唯一一个外国出生的居民（58%）多于本土出生的居民的大城市。

GitHub 的一个产品经理最近移居迈阿密，感叹这个城市的色彩，丰富得难以想象。她在自己网站上发布了许多照片，下面是其中的几张。

![](https://cdn.beekka.com/blogimg/asset/202104/bg2021042310.jpg)

![](https://cdn.beekka.com/blogimg/asset/202104/bg2021042309.jpg)

![](https://cdn.beekka.com/blogimg/asset/202104/bg2021042308.jpg)

![](https://cdn.beekka.com/blogimg/asset/202104/bg2021042311.jpg)

![](https://cdn.beekka.com/blogimg/asset/202104/bg2021042307.jpg)

## 文摘

1、[拉里·埃里森的回忆](https://twitter.com/zackkanter/status/1383494783591583749?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Etweet)

Oracle 公司的创始人拉里·埃里森（Larry Ellison）在回忆录《软件战争》（Softwar）里面，回忆了他跟比尔·盖茨的一段往事。

![](https://cdn.beekka.com/blogimg/asset/202105/bg2021052004.jpg)

1993年，我打电话给比尔·盖茨，讨论了一些技术问题。我不同意他的观点，并解释了我的理由。比尔说：“我考虑一下，会给你回电话。”

四小时后，比尔·盖茨回电话说：“我觉得你是对的，但是有几个地方，我还没有想通，你能解释一下 A、B 和 C 这几点吗？”

我说：“比尔，你过去四个小时内一直在考虑这个吗？”

他说，是的，这是一个重要的问题，我必须想通它，现在我们接着把它讨论清楚。

我惊呆了。他投入时间和精力，反复思考这个问题，得出结论我是对的，他是错的。大多数人不愿承认自己是错的，比尔毫不犹豫就这样做了。他唯一关心的就是对和错。这使得他是一个非常危险的对手。

**2、对于教育的三点思考**

美国培训行业的一个创业者 David Perell，最近在他的邮件列表里面， 谈了对美国教育的三点感想。

（1）表面上，美国人总是表现出来对教育很关心，学校暴露的各种运作问题都能上新闻媒体。但是，对于学生怎么学习、在学校里到底学到了什么，美国人却漠不关心。

David Perell 认为，其实应该反过来，需要关心的是学生是否真的学到了东西，而对于学校的各种问题倒是可以漠不关心。

（2）学生应该特别重视写作课。

如果你不知道如何写作，可能就不知道如何思考。

（3）老师们总是抱怨学生不听课，但是很少想一想，自己的讲课是否值得一听。

## 言论

1、

机器学习模型的耗电量越来越大。目前，最复杂的模型 GPT-3，要使用 1,287 兆瓦的电能，相当于大型水电站的发电量，运行一次产生552公吨的二氧化碳排放量。

-- [《谷歌否认 AI 模型的低效率》](https://venturebeat.com/2021/04/29/google-led-paper-pushes-back-against-claims-of-ai-inefficiency/)

2、

很多创业公司是君主制，公司和创始人越来越难以区分，比如特斯拉公司。

-- [《创始人的控制溢价》](https://www.axios.com/company-founders-elon-musk-tesla-stock-c4db4d28-d632-46bc-bf84-fa59c0f0b523.html)

3、

创业公司的三个核心要素：团队，产品和市场。其中最重要的是市场，用户数量和增长率是决定性因素。创业公司失败的第一大原因就是缺乏市场。

-- [Marc Andreessen 的创业指南](https://pmarchive.com/guide_to_startups_part4.html)

4、

领先他人一年，你会致富；领先他人十年，你会发疯。

-- [David Perell](https://twitter.com/david_perell/status/1388121872332591105)

5、

我已将手机更改为黑白模式，有效防止了手机沉迷。

-- [Hacker News 读者](https://news.ycombinator.com/item?id=27028620)

## 历史上的本周

2020年（第 108 期）：[阵地战与奇袭战](http://www.ruanyifeng.com/blog/2020/05/weekly-issue-108.html)

2019年（第 56 期）：[文科生为什么不容易就业？](http://www.ruanyifeng.com/blog/2019/05/weekly-issue-56.html)

2018年（第 5 期）：[互联网时代，做一个好人是划算的](http://www.ruanyifeng.com/blog/2018/05/weekly-issue-5.html)

## 订阅

这个周刊每周五发布，同步更新在[阮一峰的网络日志](http://www.ruanyifeng.com/blog)和[微信公众号](http://weixin.sogou.com/weixin?query=%E9%98%AE%E4%B8%80%E5%B3%B0%E7%9A%84%E7%BD%91%E7%BB%9C%E6%97%A5%E5%BF%97)。

微信搜索“阮一峰的网络日志”或者扫描二维码，即可订阅。

![](https://cdn.beekka.com/blogimg/asset/202103/bg2021030402.jpg)

（完）

