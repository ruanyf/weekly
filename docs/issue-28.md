# 每周分享第 28 期

这里记录过去一周，我看到的值得分享的东西，每周五发布。

欢迎投稿，请前往 GitHub 的 [ruanyf/weekly](https://github.com/ruanyf/weekly) 提交 [issue](https://github.com/ruanyf/weekly/issues)。

![](https://www.wangbase.com/blogimg/asset/201810/bg2018102601.jpg)

[第24期](issue-24.md)时，我引用了一个开发者对年轻程序员的告诫。

> 在软件开发中，技术变化如此之快，你花费了大量时间学习技术和工具，一旦这些技术被取代，你的知识将变得毫无价值，因为它们大部分都是实施的细节。

我最近总是在想这段话，软件开发算不算是真正的知识？

如果它是一种真正的知识，那么理论上，我们学到的东西大部分应该不会过时，就好像微积分不会过时一样。可是实际上，我们都知道，软件开发技能有时效性，十年前学习的编程知识，十年后几乎肯定不能用于生产。那样的话，软件开发就不能算真正的知识，只是一种实施的细节。

公司旁边有一家税务所，每天都有很多人排队交税。如果你是第一次来交税，肯定搞不清楚怎么交，交税是一门学问，必须有人教你，要带哪些证件，要填哪些表，去哪些窗口排队等等。

![](https://www.wangbase.com/blogimg/asset/201810/bg2018102602.jpg)

__我现在认为，学习编程跟学习交税是一样的，都是学习实施的细节。一旦外部环境变了，原来的实施细节就没用了。__当代编程由于层层的抽象和封装，我们已经不必接触底层真正具有通用性的知识了。大部分时候，所谓编程就是在写某个抽象层的配置。比如，网页样式就是在写 CSS 配置，你很难说这到底是真正的知识，还是像《办税指南》那样的实施细节。

实施细节并不是知识，而是操作步骤。如果技术栈发生变更，实施细节就会毫无用处。但是，你又不能不学习它，不知道实施细节，就没法做出项目。我觉得，程序员应该要警惕，不要落入实施细节的陷阱，不要把全部精力花在实施细节上面，然后以为自己学到了真正的知识。对待各种语言和工具，正确的态度应该是"进得去，出得来"，既要了解足够的细节，也要能够站在宏观的角度看待它，探寻底层到底是怎么实现的。

## 新闻

1、[昆虫武器](https://www.newsweek.com/darpa-biological-weapons-insects-scientists-warn-1152834)

![](https://www.wangbase.com/blogimg/asset/201810/bg2018102603.jpg)

一个美国科学家称，美国国防部高级研究局（DARPA）可能正在开发昆虫武器，通过昆虫向田野里的粮食作物，散布可以编辑染色体的转基因病毒，导致敌人的粮食减产或绝收，用于传播的昆虫是叶蝉，蚜虫和粉虱。病毒可以经过编辑，只感染特定的作物。

2、[字幕眼镜](https://www.nytimes.com/2018/10/03/theater/uk-national-theatre-smart-glasses.html)

![](https://www.wangbase.com/blogimg/asset/201810/bg2018102604.jpg)

伦敦国家剧院开始使用字幕眼镜。字幕显示在眼镜上，眼镜通过 WiFi 接收字幕。这样有很多好处，字幕的修改和发布变得很容易，而且不同的观众可以选择接收不同的字幕。

目前的问题是，这种眼镜的成本很高，每一付的售价约为1,050美元。

3、[血压贴片](https://www.technologyreview.com/s/612148/stretchy-stick-on-patch-can-take-blood-pressure-readings-from-deep-inside-your-body/)

![](https://www.wangbase.com/blogimg/asset/201810/bg2018102605.jpg)

加州大学圣地亚哥分校研制出一种血压贴片，只要贴在皮肤上，就能测量血压。

传统的血压测量都需要带一个袖带，目前为止还没有简便的方法，可以测量血压，各种手表手环都不行。这种贴片是第一种测量血压的可穿戴设备。它的原理是发出穿透皮肤的超声波，收集反射信号，送回计算机计算血压。

4、[Facebook 的人工智能翻译](https://www.forbes.com/sites/williamfalcon/2018/09/01/facebook-ai-just-set-a-new-record-in-translation-and-why-it-matters/#6e934aa43124)

![](https://www.wangbase.com/blogimg/asset/201810/bg2018102606.jpg)

我们知道，谷歌的机器翻译是建立在统计模型的基础上。根据统计概率，判断一个词最可能的翻译是什么。但是，这种方法只适合语料足够多的语言，有些小语种（比如乌尔都语）根本没有多少可对照的翻译材料，无法建立统计模型。

Facebook 最近开源了一种人工智能翻译系统，尝试解决这个问题。它不需要统计模型，而是采用人工智能，判断一个陌生的词到底是什么意思。它的思路跟人差不多，将陌生单词拆分成词根，猜测单词的含义，比如上图是把 hello 拆分成 he、l、l、o。

5、[激光雷达相机](https://www.ouster.io/blog-posts/2018/8/31/the-camera-is-in-the-lidar)

![](https://www.wangbase.com/blogimg/asset/201810/bg2018102607.jpg)

美国一家创业公司制作了一个叫做 OS-1 的设备，将相机和激光雷达做在一起，拍照的时候自动进行测距，也就是说，同时进行了 3D 建模。也许以后照片拍好了，现场的 3D 模型也就生成了。

6、[油画里的碎纸机](https://www.artnome.com/news/2018/10/6/myth-busting-banksy)

![](https://www.wangbase.com/blogimg/asset/201810/bg2018102608.jpg)

十月初，苏富比拍卖会上，著名画家 Banksy 的作品成交以后，发生了一件令人目瞪口呆的事情。画框里面的碎纸机突然启动了，将这幅作品切碎成条状。

原来这幅画是 Banksy 十年前送给一个友人的，他非常痛恨别人把赠画拿去拍卖，就在画框里偷偷装了一个碎纸装置。当拍卖成交后，他立刻遥控启动，这幅画就在众目睽睽下被切碎了。

7、[露天小便器](https://edition.cnn.com/2018/08/14/europe/paris-urinal-intl/index.html)

![](https://www.wangbase.com/blogimg/asset/201810/bg2018102609.jpg)

巴黎最近在塞纳河边，安装了公共的露天小便器。它们完全暴露在街角，漆成鲜红色。

比较特别的是，小便器里面种植了植物，尿液用来为这些植物施肥。另外，小便器里面还安装了一层消除异味的吸管层。

![](https://www.wangbase.com/blogimg/asset/201810/bg2018102610.jpg)

8、[没有厨房的餐厅](https://techcrunch.com/2018/10/07/the-next-big-restaurant-chain-may-not-own-any-kitchens/)

![](https://www.wangbase.com/blogimg/asset/201810/bg2018102611.jpg)

美国一家创业公司正在尝试没有厨房的餐厅。一个区域内所有餐厅共享一间中央厨房，消费者点餐后，中央厨房出菜，再由骑手送过去。

报道说，如果再把中央厨房外包，未来的连锁餐厅可能不拥有厨房和厨师，好比Uber不拥有出租车，却成为最大的出租车公司。

9、[飞向水星](https://arstechnica.com/science/2018/10/two-orbiters-begin-their-long-journey-to-mercury-friday-night/)

![](https://www.wangbase.com/blogimg/asset/201810/bg2018102612.jpg)

10月19日，欧洲航天局在法属圭亚那发射了两个水星轨道探测器，它们将在七年后进入水星轨道。

水星是距离太阳最近的行星，到达那里的难度很大。首先，水星距离地球的最近距离是7700万公里，比火星的距离远得多，地球飞向火星通常只需要6个月，而前往水星需要好几年。其次，由于水星距离太阳太近，很容易被太阳引力捕获。我们知道，地球的重力是9.8m/s^2，水星是3.7，而太阳是274。这意味着，进入水星轨道，需要巨大的能量摆脱太阳的引力。

10、__一句话新闻__

* [数据库查询](https://www.nextplatform.com/2018/10/04/in-a-parallel-universe-data-warehouses-run-on-gpus/)现在都是 CPU 处理的，但是很多公司正在开发 GPU 数据库。对于大型数据库，GPU 可以大大降低处理时间。<br><br>
* [Intel](https://www.anandtech.com/show/13401/intel-9th-gen-cpus-9900k-9700k-9600k) 发布第九代台式机 CPU，升级到了八核心，下一代的旗舰 CPU 是酷睿i9-9900K，基本频率为3.6 GHz，95W功率，超频后可以到 5.0 GHz。<br><br>
* [许多大公司](https://www.axios.com/google-apple-college-degree-hiring-a290bca8-65a7-4de2-8fa9-d93b4c30457a.html)（包括苹果、谷歌、IBM）都不再要求应聘者具有大学学位。<br><br>
* jQuery 最流行的文件上传插件，发现一个[高危漏洞](https://www.zdnet.com/article/zero-day-in-popular-jquery-plugin-actively-exploited-for-at-least-three-years/)。PHP 环境中， 攻击者可以上传恶意文件，接管服务器。Wordpress 用到这个插件的话，也会受影响。

## 教程

1、[Java 线程与 Go 线程的根本差异](https://rcoh.me/posts/why-you-can-have-a-million-go-routines-but-only-1000-java-threads/)（英文）

作者注意到一个现象，同一台机器，Java 线程最多只能建几千个，但是 Go 线程可以建数百万个。他研究后发现，这跟线程的内存占用有关，每个 Go 线程竟然只占用4KB。

2、[如何用 C++ 写网页？](https://blog.sourcerer.io/building-a-website-with-c-db942c801aee)（英文）

本文教你如何用 C++ 写一个二进制程序，每当收到通过 CGI 网关发来的调用请求时，自动返回一个网页。其他后端语言也可以用来写网页，原理是一样的。

3、[为什么要使用 GraphQL ？](https://honest.engineering/posts/why-use-graphql-good-and-bad-reasons)（英文）

GraphQL 是客户端请求服务器数据的一种新技术，本文分析的它的优点和局限。

4、[FPGA 是什么？](https://blog.esciencecenter.nl/why-use-an-fpga-instead-of-a-cpu-or-gpu-b234cd4f309c)（英文）

现在，程序员编程都是针对某种硬件架构，比如 CPU 或 GPU，但是也可以为某种计算定制电路，这种电路专门用来完成这种计算，这就叫做 FPGA。本文介绍 FPGA 的特点，长处和短处。

5、[DHCP 协议如何工作？](https://www.benburwell.com/posts/how-does-dhcp-work/)（英文）

DHCP 协议全称是"动态主机配置协议"，局域网的设备往往使用这个协议获得动态 IP 地址。本文解释这个协议的运作过程。

6、[HTTPS 协议图解](https://tls.ulfheim.net/)（英文）

图解 HTTPS 对话过程，非常形象，每一个字节的含义都讲到了。

7、[如何让不纯的函数变纯？](https://jrsinclair.com/articles/2018/how-to-deal-with-dirty-side-effects-in-your-pure-functional-javascript/)（英文）

通过 JavaScript 代码解释函数式编程的一些基本概念。

8、[Go 语言与 Rust 语言的比较](https://medium.com/@george3d6/the-success-of-go-heralds-that-of-rust-73cb2e4c0500)（英文）

本文谈了这两种语言各自的长处和短处。

9、[最早的域名](https://www.cambus.net/oldest-domains-in-the-com-net-and-org-tlds/)（英文）

作者写了一个脚本，查询 whois 数据库里面最老的域名。最早的 .com 域名是 symbolics.com（1985-03-15 注册），最早的 .net 域名是 nordu.net（1985-01-01 注册）。

## 资源

1、[全球假日 API](https://www.calendarindex.com/)

该数据库覆盖全球180多个国家的公众假期。

2、[learn-python3](https://github.com/jerry-git/learn-python3)

Python 3 教程库。

3、[Youtube 资源](https://www.bestyoutubechannels.info/)

该网站列出分类的最受欢迎 Youtube 频道。如果你不知道 Youtube 上看什么，可以浏览一下这个网站。

4、[计算机网络：原理，协议和实践](http://cnp3book.info.ucl.ac.be/#)

英文的开源电子书，解释了计算机网络的主要原理以及互联网的关键协议，用于高年级本科网络课程。

5、[加密学导论](https://intensecrypto.org/public/)

英文的开源电子书，介绍加密背后的数学知识，哈佛大学的本科生教材。

6、[VPS 搜索工具](https://anothervps.com/vps/)

通过各种搜索条件，比较不同的主机商品，看看哪个云主机最好用。（@[DoctorLai](https://github.com/ruanyf/weekly/issues/17) 投稿）

## 工具

1、[markdownlint](https://github.com/DavidAnson/markdownlint)

JavaScript 语言编写的 Markdown 文章风格检查器。

2、[walt](https://github.com/ballercat/walt)

前端程序员使用 WebAssembly 的最大障碍，就是它要求你深入掌握一门后端语言。于是，就有人尝试把 JS 代码编译成 WebAssembly。Walt 就是这样的一个项目，它可以把 JS 代码稍加修改，然后用 Webpack 打包成 WASM 在浏览器加载。 

3、[EXIF.tools](https://exif.tools/)

EXIF 是照片包含的元数据，这个网站可以查看照片的元数据。

4、[percollate](https://github.com/danburzo/percollate)

命令行抓取网页，生成 PDF 文件的工具。

5、[AutoMono](https://github.com/0matgal0/AutoMono)

![](https://www.wangbase.com/blogimg/asset/201810/bg2018102613.jpg)

一种专门用于编程的开源等宽字体。

6、[MkDocs](https://www.mkdocs.org/)

Markdown 文档站点生成器。

7、[the great suspender](https://github.com/deanoemcke/thegreatsuspender)

Chrome 以吃内存著称。这个插件可以冻结不使用的 tab，以释放内存。（@[Scheinin](https://github.com/ruanyf/weekly/issues/13) 投稿）

8、[flyer-maker](https://github.com/vancefantasy/flyer-maker)

flyermaker 是一个 Java 项目的脚手架工具，支持 SpringBoot 和 SpringFramework，它允许动态生成工程代码和单元测试。（@[vancefantasy](https://github.com/ruanyf/weekly/issues/16) 投稿）

9、[fullPage.js](https://github.com/alvarotrigo/fullPage.js)

有的网页每次滚动就是一屏，fullPage.js 就是制作这种效果的一个 JS 库。

## 文摘

1、[美国银行缺乏 COBOL 程序员](https://www.reuters.com/article/us-usa-banks-cobol/banks-scramble-to-fix-old-systems-as-it-cowboys-ride-into-sunset-idUSKBN17C0D8)

![](https://www.wangbase.com/blogimg/asset/201810/bg2018102614.jpg)

Bill Hinshaw 已经75岁了，但是还必须工作，帮助一些美国大公司避免计算机的崩溃。他在上个60年代开始编程，当时计算机有整个房间那么大，而且程序员还使用穿孔卡。他使用的语言叫做 COBOL。

这种语言是60年前开发的，后来被其他语言（如 Java，C 和 Python）取代。现在几乎没有学校教 COBOL，但这种语言对美国的金融部门、大公司和联邦政府仍然至关重要，因为它支撑着70年代或80年代建造的计算机系统，而且从未完全被取代。美国金融业每天约有3万亿美元的业务，要经过 COBOL 系统。该语言支持着存款账户、支票清算服务、信用卡网络、ATM、抵押服务和其他服务。如果出现问题，很少有人知道如何解决。

几年前，Bill Hinshaw 就已经退休了，但是客户找他的电话依然络绎不绝。他索性就成立一家咨询公司，20名成员大部分是退休的 COBOL 程序员，最年轻的也接近50岁。

对于大公司来说，完全更换旧的 COBOL 系统，成本高昂，而且有巨大的风险，不如付钱请这些退休程序员维护老系统。举例来说，澳大利亚联邦银行在埃森哲和 SAP 的帮助下，2012年更换了核心的银行业务平台，花了五年时间，耗资超过10亿澳元（7.499亿美元）。预计今年，美国金融企业的技术支出为2610亿美元，其中67％用于维护旧系统。

但是，COBOL 程序员越来越老，也越来越少，眼看就要找不到了。目前，美国正在加快推出各种 COBOL 培训，希望能出现更多年轻的 COBOL 工程师。

2、[感知概率](http://blog.sciencenet.cn/blog-420554-1139743.html)

平时在交谈中，我们会使用"可能"、"很可能"、"极有可能"、"大概"、"不肯定"、"不太可能"等等词语来描述一个事件的可能性。但是，这些词语到底表示多大的概率？每个人都有不一样的理解。

比如，有的人心目中，"可能"就意味着50%的概率，"很可能"就意味着70%的概率，而"不太可能"就是30%的概率。另一些人可能会认为，"很可能"应该是75%的概率。

耶鲁大学教授谢尔曼·肯特（Sherman Kent）做过一个统计调查。他询问许多人，将得到的数据做成了下图，给出了每一个用词所代表的概率区间。

![](https://www.wangbase.com/blogimg/asset/201810/bg2018102615.jpg)

可以看到，在他的调查中，"probable"、"likely"、"probably"和"we believe"的区间都大约是62-85%。

有人在reddit上重新做了一次统计，然后用R语言程序计算出每个短语的箱形图（box plot），再用ggplot2绘图包制作出漂亮的图表。

![](https://www.wangbase.com/blogimg/asset/201810/bg2018102616.jpg)


![](https://www.wangbase.com/blogimg/asset/201810/bg2018102617.jpg)

3、[网站页面的十年变化](https://theioradlife.com/simple-is-hard-the-iorad-brand-story-and-a-major-announcement-ee2912843d3b)

我们的网站是一个在线建站工具，十年来变了多次。

2007年，基本上就是一个表单。

![](https://www.wangbase.com/blogimg/asset/201810/bg2018102618.jpg)

2012年，改用了 Windows 的大色块风格。

![](https://www.wangbase.com/blogimg/asset/201810/bg2018102619.jpg)

2013年，开始推广移动版。

![](https://www.wangbase.com/blogimg/asset/201810/bg2018102620.jpg)

2015年，我们开始简化设计。

![](https://www.wangbase.com/blogimg/asset/201810/bg2018102621.jpg)

下面是现在2018年的样子。

![](https://www.wangbase.com/blogimg/asset/201810/bg2018102622.jpg)

## 本周图片

1、[追踪帝王蝶](https://www.atlasobscura.com/articles/how-to-tag-a-butterfly)

每年超过10亿只帝王蝶从加拿大迁移到加利福尼亚。堪萨斯大学的科学家为了了解它们的迁移路线，会抓捕1000只左右，在翅膀贴上标签，大小跟铅笔上的橡皮头差不多。然后，希望沿路的人们抓到帝王蝶的时候，能够把信息回报给他们。

![](https://www.wangbase.com/blogimg/asset/201810/bg2018102623.jpg)


![](https://www.wangbase.com/blogimg/asset/201810/bg2018102624.jpg)

2、[观察蜜蜂的方法](https://www.smithsonianmag.com/science-nature/busy-bees-take-break-during-total-solar-eclipses-180970502/)

![](https://www.wangbase.com/blogimg/asset/201810/bg2018102625.jpg)

密苏里大学的科学家，想要研究蜜蜂的活动规律。但是，怎么才能知道蜜蜂出来采蜜呢？

他们想了一个办法，在田地里架设了收音头。一旦听到嗡嗡声，就知道蜜蜂来了。

3、

![](https://www.wangbase.com/blogimg/asset/201810/bg2018102626.jpg)

电影院（或者大型会议、讲座）很快就会是上图的场景。

## 本周金句

1、

阻止气候变暖，需要人们驾驶更小的汽车，更多的步行和骑自行车，减少飞行，不购买很快过时的时尚商品，以及少吃肉。

-- BBC[《少吃肉与气候变暖》](https://www.bbc.com/news/science-environment-45838997)

2、

他们不善于讨价还价，而且对金钱在生活中的重要性的重视程度较低。

-- [《为什么好人容易陷入困境》](https://www.studyfinds.org/nice-people-more-likely-bankrupt-financial-struggles-study-finds/)，美国社会学家研究好人的财务状况

3、

先工具，后网络。（Come for the tool，stay for the network.）

-- [创业家@cdixon](http://cdixon.org/2015/01/31/come-for-the-tool-stay-for-the-network/)提出，个人或小型创业公司的产品，起先应该是工具，有了足够的用户以后再向网络方向发展。

## 欢迎订阅

这个专栏每周五发布，同步更新在我的[个人网站](http://www.ruanyifeng.com/blog)、[微信公众号](http://weixin.sogou.com/weixin?query=%E9%98%AE%E4%B8%80%E5%B3%B0%E7%9A%84%E7%BD%91%E7%BB%9C%E6%97%A5%E5%BF%97)和[语雀](https://yuque.com/ruanyf/share/)。

微信搜索"__阮一峰的网络日志__"或者扫描二维码，即可订阅。

![](http://www.ruanyifeng.com/blogimg/asset/2018/bg2018042311.jpg)

（完）

