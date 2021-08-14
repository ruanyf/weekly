# 科技爱好者周刊（第 171 期）：云服务流量有多贵？

这里记录每周值得分享的科技内容，周五发布。

本杂志开源（GitHub: [ruanyf/weekly](https://github.com/ruanyf/weekly)），欢迎提交 issue，投稿或推荐科技内容。

周刊讨论区的帖子[《谁在招人？》](https://github.com/ruanyf/weekly/issues/1870)，提供大量程序员就业信息，欢迎访问或发布工作/实习岗位。

## 封面图

![](https://cdn.beekka.com/blogimg/asset/202108/bg2021080213.jpg)

风力发电机叶片，江西萍乡。（[via](https://mp.weixin.qq.com/s/KDyJcFWBrtTR3HS2PfT_aQ)）

## 本周话题：云服务流量有多贵？

上月，Cloudflare 的官网发表了一篇[罕见的文章](https://blog.cloudflare.com/aws-egregious-egress/)，它的 CEO 抨击亚马逊网络服务，流量收费太贵。

今天就来谈谈，云服务流量到底贵到什么程度。

![](https://cdn.beekka.com/blogimg/asset/202108/bg2021080801.jpg)

亚马逊是全世界最大的云服务商，提供各种网络基础设施。用过的人都知道，它的收费里面，硬件费用（CPU、内存、硬盘等）是小头，流量费用才是大头。

![](https://cdn.beekka.com/blogimg/asset/202108/bg2021080802.jpg)

流量费有多贵？Cloudflare 根据自己从机房拿到的批发价推算，亚马逊在北美和欧洲，向用户收取的流量费，是批发价的80倍！

机房的带宽批发价是 1Mbps 收费0.08美元，亚马逊转手卖给开发者，价格就是6.37美元！（带宽与流量的换算关系，放到后面解释。）

![](https://cdn.beekka.com/blogimg/asset/202108/bg2021080803.jpg)

![](https://cdn.beekka.com/blogimg/asset/202108/bg2021081017.jpg)

我给大家算一笔账，按照这种流量费用，在亚马逊托管一个小网站要多少钱。

假设网站每天的浏览量是2500个页面，每个页面的大小是 2MB，那么一天的流量就是 5GB，一个月下来就是 150GB。

亚马逊有一个官方的[价格计算器](https://calculator.aws/#/createCalculator/EC2)，我们去那里选择硬件，这里一律选择最低配置，然后填写需要的流量是150GB，页面会自动给出价格。

![](https://cdn.beekka.com/blogimg/asset/202108/bg2021081018.jpg)

算出来的价格就是16.31美元/月（大约110元人民币），其中流量费要占到13.41美元。可以看到，这么小的网站，一年下来需要1000多元人民币。如果访问量增大10倍，每月达到1500GB，其实还是属于小网站，但是收取的费用会增加到每年1万多元人民币。

一个[真实的案例](https://www.theregister.com/2020/09/28/aws_cost_anomaly_detection/)是，一个开发者平时的账单是每月23.00美元，某天一觉醒来，收到了一张2,657.68美元的账单。

需要指出的是，不仅是亚马逊，其它云服务商的流量费也非常贵。[谷歌云](https://cloud.google.com/products/calculator)对同样网站收取的费用是每月16.73美元，其中流量费12.75美元。国内的[阿里云](https://cn.aliyun.com/pricing-calculator)和[腾讯云](https://buy.cloud.tencent.com/price/cvm/calculator) ，价格也相差无几。

不过，国内的云服务商有一个好处，它是按照带宽收费，所以不会发生流量超标，因为带宽满了，新的访问者就进不来了。（1Mbps 的带宽在100%利用率的情况下，相当于每月328GB的流量，假设利用率平均为20%，150GB流量就大约需要2.3Mbps的带宽。）

结论就是，小网站尽量不要托管在大型云服务商那里，流量费用实在吃不消。如果不得不放在上面，那就必须设法降低或转移流量，比如使用 CDN。

## 前端“零代码”实践

最近有一条[新闻](https://techcrunch.com/2021/07/27/no-code-bubble-series-a/)，国外的一个建站服务 [Bubble.io](http://bubble.io/)，获得了1亿美元的 A 轮融资。

它的口号是，不用编写一行代码，轻松开发一个全功能网站。用户通过图形界面，使用“拖拽拉”的方式，生成自己的网站。

![](https://cdn.beekka.com/blogimg/asset/202108/bg2021081201.jpg)

这种工具获得资本的青睐，反映了一个趋势： **低代码（LowCode）和零代码（NoCode）产品，越来越受到重视。** 

所谓“低代码”或“零代码”，指的是不编写或少编写代码，就能完成开发任务。这既有助于扩大用户规模，获得更大的市场，也有助于程序员减轻工作负荷，避免重复劳动。

这两方面的因素，再加上人工智能的兴起，使得低代码（零代码）工具越来越流行。许多公司现在都在搞这一类的代码自动生成工具，让软件自己解决编程任务。

本周介绍的课程 **《前端“零代码”实践》** ，就是前端零代码工具的开发培训，帮助大家了解和实操自动代码生成方案，如何在前端落地。

它针对两个最常见的前端业务场景，探索能否让软件自动完成：（1）根据图形设计稿生成页面，（2）根据接口文档生成组件。

![](https://cdn.beekka.com/blogimg/asset/202108/bg2021081203.jpg)

这些内容不仅有很大的实际意义，可以用于日常工作，快速让广告和运营页面落地；还能帮助大家了解一些新技术的用法，并且有助于程序员的自我提升，从“完成业务”提升到“创造工具”。

本课程由腾讯课堂“双认证”机构——京程一灯提供。主讲老师有两位：（1）杨帆，光速软件创始人 & CEO，前腾讯 PC QQ 团队高级工程师；（2）老袁，京程一灯创始人，前百度地图工程师。

微信扫描下方二维​码，进群即可报名，保证无套路。<br>

![](https://cdn.beekka.com/blogimg/asset/202108/bg2021081204.jpg)

课程原价98元，主办方推广期间，周刊读者只需 0.02元就可以报名。前50名报名者，会再送价值299元专题课 **《国内外高薪前端程序员面试全攻略》**。

## 科技动态

1、[谷歌的漏洞奖金](https://security.googleblog.com/2021/07/a-new-chapter-for-googles-vulnerability.html)

![](https://cdn.beekka.com/blogimg/asset/202107/bg2021072811.jpg)

谷歌透露，过去10年，它一共向11,055个软件漏洞，支付了29,357,516美元的奖金，平均每个漏洞2656美元（约1.8万元人民币），共有84个国家的2,022名程序员拿到奖励。

这其实非常划算，一年费用不到300万美元，就能发现1000多个漏洞。如果其中任何一个漏洞被人利用，对谷歌造成的损失，可能都远远大于这个数字。

这就是为什么大型软件公司都悬赏开发者，向它报告软件漏洞。

2、[海上换流站](http://finance.people.com.cn/n1/2021/0720/c1004-32163850.html)

![](https://cdn.beekka.com/blogimg/asset/202108/bg2021081207.jpg)

![](https://cdn.beekka.com/blogimg/asset/202108/bg2021081209.jpg)

全球最大、亚洲第一座海上换流站，最近安装完成，位置是在距离江苏如东大约100公里的东海之中。

它将周围三个海上风电场的电能，转换为传输效率更高的直流电，然后使用水下电缆传输到陆上。它的面积相当于一个标准足球场，高度约等于15层居民楼，每年可以提供24亿度电，足够100多万户家庭使用。

![](https://cdn.beekka.com/blogimg/asset/202108/bg2021081306.jpg)

![](https://cdn.beekka.com/blogimg/asset/202108/bg2021081210.jpg)

3、[本田电动平衡车](https://www.yankodesign.com/2021/07/22/this-self-balancing-honda-electric-scooter-redefines-futuristic-urban-commuting/)

日本摩托车厂商本田公司，发布了一个概念性的单轮电动平衡车的设计，令人耳目一新。这种车比摩托车成本更低、更节省空间。

![](https://cdn.beekka.com/blogimg/asset/202107/bg2021072410.jpg)

![](https://cdn.beekka.com/blogimg/asset/202107/bg2021072411.jpg)

令人比较好奇的是，停放的时候，它怎么保持平衡呢。

![](https://cdn.beekka.com/blogimg/asset/202107/bg2021072412.jpg)

![](https://cdn.beekka.com/blogimg/asset/202107/bg2021072413.jpg)

4、[鹦鹉的学习能力](https://www.smithsonianmag.com/science-nature/cockatoos-learn-open-garbage-bins-observing-their-peers-180978248/)

澳大利亚的鸟类学家最近发现了，鹦鹉具有非凡学习能力的又一个证据。他们拍到了照片，一只鹦鹉在观察另一只鹦鹉，如何打开垃圾桶的盖子，从垃圾桶觅食（下图）。对于鹦鹉来说，这不是一件容易的任务。

![](https://cdn.beekka.com/blogimg/asset/202107/bg2021072408.jpg)

几周以后，这个社区50只左右的野生鹦鹉，几乎都学会了如何打开垃圾桶。下面是[视频](https://v.qq.com/x/page/o3263y9ud2v.html)。

<iframe frameborder="0" src="https://v.qq.com/txp/iframe/player.html?vid=o3263y9ud2v" allowFullScreen="true" width="600" height="400"></iframe>

5、[人工智能的读图会意](https://zhuanlan.zhihu.com/p/398939467)

![](https://cdn.beekka.com/blogimg/asset/202108/bg2021081006.jpg)

人工智能在图像学的应用，取得了新进展。

8月12日，阿里巴巴达摩院研发的 AliceMind 系统（已在 [GitHub](https://github.com/alibaba/AliceMind) 开源），在2021国际 VQA 挑战赛中，获得榜首成绩，并且刷新了该比赛的得分纪录，首次超越人类的分数。

所谓 VQA（Visual Question Answering） 指的是视觉问答，简单说，就是根据图片回答问题，属于视觉-文本推理，也叫做“读图会意”，是更高层次的“图像识别”。

请看下图，图像识别工具会认出是一架飞机，而视觉问答工具则会尝试理解这张图片：它是什么型号的飞机？哪一年制造的？属于哪个国家？用什么材料做的？……

![](https://cdn.beekka.com/blogimg/asset/202108/bg2021081007.jpg)

VQA 技术有着广阔的应用，可以使得图片搜索质量上一个台阶，并且在医疗诊断、智能驾驶等领域有着巨大的实用价值。据说，阿里巴巴内部已经把它用于店铺的智能客服，从商品图片提取信息，自动回答用户的咨询。

![](https://cdn.beekka.com/blogimg/asset/202108/bg2021081008.jpg)

6、[DIY 笔记本](https://frame.work/products/laptop-diy-edition)

美国 Framework 公司推出了世界第一款 DIY 笔记本，用户收到的就是一堆零件，需要自己组装成一台 13.5寸的笔记本电脑。

![](https://cdn.beekka.com/blogimg/asset/202107/bg2021072404.jpg)

![](https://cdn.beekka.com/blogimg/asset/202107/bg2021072403.jpg)

这样的好处是有利于维修和升级，避免浪费。它的价格是749美元起，目前收到的用户评价相当不错。

![](https://cdn.beekka.com/blogimg/asset/202107/bg2021072405.jpg)

![](https://cdn.beekka.com/blogimg/asset/202107/bg2021072407.jpg)

7、[46亿年的陨石](https://www.facebook.com/eaaro.org.uk/posts/1907081252785935)

今年2月28日晚上10点，天文学家观测到英国上空出现明亮的黄绿色火球，他们意识到陨石掉下来了。

经过艰苦的搜索，终于在一个月后的3月28日上午，找到了一块掉在泥里的黑色石头，大约300克重。

![](https://cdn.beekka.com/blogimg/asset/202107/bg2021072301.jpg)

![](https://cdn.beekka.com/blogimg/asset/202107/bg2021072302.jpg)

经过分析以后，天文学家震惊地发现，这块石头有46亿年的历史，跟地球的年龄一样。也就是说，它现在的样子就是太阳系诞生初期的样子。

![](https://cdn.beekka.com/blogimg/asset/202107/bg2021072303.jpg)

![](https://cdn.beekka.com/blogimg/asset/202107/bg2021072304.jpg)

## 文章

1、[USB-C 接口为什么这么混乱](https://www.ifanr.com/1374936)（中文）

![](https://cdn.beekka.com/blogimg/asset/202108/bg2021081223.jpg)

除了 iPhone，各种电子设备现在基本都使用 USB-C 接口，但是这种接口其实非常混乱，有着众多令人迷惑的版本号，并且集成了大量协议，甚至还可以加入私有协议。

2、[音频可视化入门](https://cjting.me/2021/08/07/fourier-transform-and-audio-visualization/)（中文）

![](https://cdn.beekka.com/blogimg/asset/202108/bg2021081002.jpg)

作者介绍了音频处理的基本知识，如何进行采样，并通过傅立叶变换分离频率，最后实现音乐播放器的可视化音柱跳跃效果。（[@cj1128](https://github.com/ruanyf/weekly/issues/1880) 投稿）

3、[SQL 表格连接的可视化连接](https://dataschool.com/how-to-teach-people-sql/sql-join-types-explained-visually/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202107/bg2021070801.jpg)

老生常谈的内容，使用图形介绍 SQL join 的类型，简明易懂，值得经常看看。

4、[使用 React Hooks 构建音乐播放器](https://letsbuildui.dev/articles/building-an-audio-player-with-react-hooks)（英文）

![](https://cdn.beekka.com/blogimg/asset/202106/bg2021061803.jpg)

一篇详细的教程，一步步教你怎么用 React Hooks 写出上图的音乐播放器。

5、[船只的原理](https://ciechanow.ski/naval-architecture/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202107/bg2021072806.jpg)

本文从浮力的物理学原理开始讲起，介绍船只为什么会浮在水面上，以及螺旋桨为什么会产生推力。它的最大特色就是制作精美，网页上有大量互动式的小动画。

6、[Postgres 全文搜索简介](https://blog.crunchydata.com/blog/postgres-full-text-search-a-search-engine-in-a-database)（英文）

![](https://cdn.beekka.com/blogimg/asset/202107/bg2021072804.jpg)

Postgres 数据库自带全文搜索，本文简单介绍英语的全文搜索怎么实现。

7、[Safari 是开发者最讨厌的浏览器](https://blog.perrysun.com/2021/07/15/for-developers-safari-is-crap-and-outdated/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202107/bg2021072708.jpg)

作者谈了他的观点，为什么 Safari 浏览器严重过时，成为开发者的麻烦。

8、[JavaScript 的浮点数格式](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/math/binary-floating-point)（英文）

![](https://cdn.beekka.com/blogimg/asset/202107/bg2021072702.jpg)

本文介绍了 JavaScript 的浮点数格式，JS 引擎底层到底是怎么存储一个数字的，图文并茂。

9、[我为什么放弃一个25000星的开源项目](https://marmelab.com/blog/2020/10/21/sunsetting-faker.html)（英文）

![](https://cdn.beekka.com/blogimg/asset/202107/bg2021072501.jpg)

作者是一个热门开源项目的维护者，项目已经有10年历史，25000多颗星，但是作者决定不再维护，放弃该项目。

10、[Pixar 公司是如何成立的？](https://spectrum.ieee.org/the-real-story-of-pixar)（英文）

![](https://cdn.beekka.com/blogimg/asset/202108/bg2021080502.jpg)

Pixar 公司创始人的回忆文章。该公司最早的业务是开发图形硬件，结果走投无路，面临破产。最后时刻苦苦央求，乔布斯才同意当风险投资人。

为了展示自家硬件的图形能力，Pixar 制作了一些动画短片，不料一炮走红，最后索性变成了动画公司。文章披露了很多内幕，喜欢电脑发展史的朋友可以看看。

## 工具

1、[Muboard](https://github.com/susam/muboard)

![](https://cdn.beekka.com/blogimg/asset/202108/bg2021080301.jpg)

一个 JS 库，在网页上展示一个可以书写数学公式的黑板。

2、[Muse](https://www.muse.place/)

![](https://cdn.beekka.com/blogimg/asset/202108/bg2021080404.jpg)

Muse 是一个无代码的网站生成器，但是生成的是 3D 虚拟网站。

这个工具还没有做完，现有的部分已经很酷了，全流程都是 3D 场景。可以裸眼使用，也可以配合 VR 眼镜，3D 网站的未来前景非常光明。

3、[MacType](https://mactype.net/)

![](https://cdn.beekka.com/blogimg/asset/202108/bg2021080212.jpg)

这个工具将 Mac 电脑的字体渲染方法，移植到 Windows 电脑。

4、[Golang Security Checker](https://github.com/securego/gosec)

![](https://cdn.beekka.com/blogimg/asset/202108/bg2021080509.jpg)

一个开源的 Go 语言代码的安全扫描工具，静态扫描代码里面的安全漏洞。

5、[interview-schedule](https://github.com/Mayandev/interview-schedule/issues/19)

![](https://cdn.beekka.com/blogimg/asset/202108/bg2021080916.jpg)

作者开发这个项目，用来管理自己的秋招面试日程，使用 GitHub Action 从谷歌日历获取数据，同步到 GitHub 仓库的 issue 和 README。（[@Mayandev](https://github.com/ruanyf/weekly/issues/1879) 投稿）

6、[Web3.Storage](https://web3.storage/)

![](https://cdn.beekka.com/blogimg/asset/202108/bg2021080915.jpg)

一个向 IPFS 上传文件的服务，还算易用。（[@lgE-1](https://github.com/ruanyf/weekly/issues/1877) 投稿）

7、[Hora](https://horasearch.com/)

![](https://cdn.beekka.com/blogimg/asset/202108/bg2021081005.jpg)

一个最近相似节点的搜索算法库，可以用于搜索近似的文本或图形。它使用 Rust 开发，并且有 Python 和 JavaScript 的移植版，特点是搜素速度非常快。（[@salamer](https://github.com/ruanyf/weekly/issues/1883) 投稿）

8、[SRPC](https://github.com/sogou/srpc/blob/master/README_cn.md)

![](https://cdn.beekka.com/blogimg/asset/202108/bg2021081004.jpg)

搜狗公司开源的一个 RPC 远程调用框架，使用 C++ 编写，支持多种传输协议和数据格式。（[@holmes1412](https://github.com/ruanyf/weekly/issues/1882) 投稿）

9、[Pushpin](https://github.com/fanout/pushpin)

![](https://cdn.beekka.com/blogimg/asset/202108/bg2021080510.jpg)

一个 C++ 写的反向代理服务器，能够轻松实现 WebSocket、HTTP 流通信、HTTP 长轮询服务。

10、[JavaScript Cookie](https://github.com/js-cookie/js-cookie)

一个浏览器 Cookie 操作库，简单易用，非常轻量级，压缩后体积不到 1KB。GitHub 有18000颗星。

## 资源

1、[JetBrains 开发者调查2021版](https://www.jetbrains.com/lp/devecosystem-2021/)

![](https://cdn.beekka.com/blogimg/asset/202108/bg2021081001.jpg)

JetBrains 公司一年一度的开发者调查报告，对来自 183 个国家或地区的 31,743 名程序员进行了问卷调查，提供了很多信息，比如最流行的是什么语言、开发者的平台分布等等。

此外，还有每一种主要语言的分报告，比如 [《JavaScript 调查结果》](https://www.jetbrains.com/lp/devecosystem-2021/javascript/) 和 [《Python 调查结果》](https://www.jetbrains.com/lp/devecosystem-2021/python/)，里面有框架和工具统计。

2、[企业软件销售入门](https://read.douban.com/ebook/322579268/)

![](https://cdn.beekka.com/blogimg/asset/202108/bg2021081003.jpg)

豆瓣读书上面的一本中文小册子，介绍如何向企业用户销售软件，即如何做 toB 的生意，免费阅读。（[@jiezhao9](https://github.com/ruanyf/weekly/issues/1881) 投稿）

3、[Candide](https://candidegardening.com/GB/identify-plants)

![](https://cdn.beekka.com/blogimg/asset/202107/bg2021072709.jpg)

这个网站可以上传植物照片，进行识别，告诉你这是什么植物。

4、[我喜欢的代码字体](https://realdougwilson.com/writing/coding-with-character)（英文）

![](https://cdn.beekka.com/blogimg/asset/202107/bg2021072813.jpg)

作者介绍了十几种自己喜欢的代码字体，每一种都给出了图片，方便读者比较和选择。上图的 [Input Narrow Mono](https://input.djr.com/) 字体，就相当不错。

5、[FastAI book](https://github.com/fastai/fastbook)

![](https://cdn.beekka.com/blogimg/asset/202107/bg2021072807.jpg)

FastAI 是一个深度学习库，这是它的教程书，介绍深度学习的基础知识，以及如何用这个库完成人工智能项目。

## 乔布斯在京都

原文发表在2021年7月1日的日本广播协会 [NHK 官网](https://www3.nhk.or.jp/nhkworld/en/news/backstories/1622/)，以下是摘译。

![](https://cdn.beekka.com/blogimg/asset/202107/bg2021070507.jpg)

乔布斯喜欢日本，日本的所有城市之中，他最喜欢京都。

他一生去过四次京都，前后相隔25年。最后一次去是2010年，他逝世的前一年。

![](https://cdn.beekka.com/blogimg/asset/202108/bg2021081212.jpg)

乔布斯四次京都之行，大岛浩（Oshima Hiroshi）都担任司机和导游。乔布斯很信任他，会跟他大致说一下想看什么，具体的行程细节完全留给大岛浩安排。

![](https://cdn.beekka.com/blogimg/asset/202107/bg2021070508.jpg)

大岛浩说，乔布斯最喜欢的京都景点之一是龙安寺。这座禅寺已经有500年历史，以枯山水庭院而闻名。乔布斯来过这里三次。

![](https://cdn.beekka.com/blogimg/asset/202108/bg2021081213.jpg)

“他第一次访问时，我告诉他，这座庙很独特，”大岛浩说。“庭院里有十五块石头，但你无法在一个任何角度，同时看到这十五块石头。”

![](https://cdn.beekka.com/blogimg/asset/202107/bg2021070509.jpg)

乔布斯立即验证这种说法是否属实。他围着庭院走来走去，想找到一个角度，可以看到全景，最后还是没有找到。

![](https://cdn.beekka.com/blogimg/asset/202108/bg2021081214.jpg)

大岛浩跟乔布斯解释，15这个数字有特殊含义，意味着完成。过去男人15岁被认为成年，新月后的第15夜会出现满月。这个庭院的设计师故意让人们无法同时看到15块石头，象征寻找还在继续，并没有完成。

乔布斯没有说话，眼睛盯着庭院。多年后，他带着自己的孩子又来到这里，把大岛浩的这段话，解释给孩子们听。

![](https://cdn.beekka.com/blogimg/asset/202108/bg2021081215.jpg)

《乔布斯传》里面，特别提到过这件事。“我发觉佛学意境空灵超然，尤其是日本禅宗。像我在京都看到的枯山水庭园，那高远虚渺的禅境，教我深深感动，这正是禅文化的体现。”

![](https://cdn.beekka.com/blogimg/asset/202108/bg2021081216.jpg)

2010年7月，大岛浩带着乔布斯，开车穿过南禅寺附近的一个高档居民区。

一处特别的住宅引起了乔布斯的注意，这是野村证券的创始人野村德七于1928年建成的别墅。该别墅以美丽的花园而闻名，已被指定为日本重要文物，每年只在指定时间向公众开放。

![](https://cdn.beekka.com/blogimg/asset/202107/bg2021070510.jpg)

“我告诉乔布斯进不去，但他说可能有办法，”大岛浩说。“乔布斯打电话给在美国的秘书，十分钟后，我就接到野村证券总部的电话，说已经预约了第二天的参观。”

“第二天，我们来到这座别墅，一名翻译正在门口等待乔布斯，我留在车里，乔布斯去参观。”

“一个小时后，乔布斯回来了，他告诉我：'我想要一个那样的花园。'”

![](https://cdn.beekka.com/blogimg/asset/202108/bg2021081217.jpg)

乔布斯每次来京都，都住在一家叫做 [Tawaraya](https://www.annees-de-pelerinage.com/tawaraya-ryokan-review-best-hotel-in-the-world/) 的日本传统旅馆。

这家旅馆只有 18 个小房间，大多数不到 15 平方米。但是，乔布斯很满意。

![](https://cdn.beekka.com/blogimg/asset/202107/bg2021070513.jpg)

从外观看，这家旅馆就像一个普通的棚屋，你甚至都不会认为这是一家旅馆。

![](https://cdn.beekka.com/blogimg/asset/202107/bg2021070512.jpg)

房间里面都是榻榻米垫子，睡觉和吃饭都在上面。

![](https://cdn.beekka.com/blogimg/asset/202107/bg2021070511.jpg)

旅馆旁边有一家面馆，出售荞麦面。乔布斯也很喜欢吃，他最喜欢点冷荞麦面配天妇罗。

![](https://cdn.beekka.com/blogimg/asset/202107/bg2021070514.jpg)

乔布斯也喜欢寿司。他最后一次京都之旅的最后一天，就带着家人来到一家著名的寿司店吃午饭。

![](https://cdn.beekka.com/blogimg/asset/202108/bg2021081218.jpg)


他坐在最靠墙的位置，旁边是他的妻子和女儿。他向寿司店老板询问，应该点什么品种。

![](https://cdn.beekka.com/blogimg/asset/202108/bg2021081219.jpg)

老板先拿出了比目鱼寿司，又拿出了鱿鱼寿司和鲜虾寿司，然后是金枪鱼寿司。乔布斯突然停下来了，老板赶紧问怎么了。

“乔布斯问我接下来要上什么品种，我说还没决定。他告诉我继续上金枪鱼寿司，直到他让我停下来。”

老板连续上了六道金枪鱼寿司。“他告诉我从未吃过如此美味的寿司。”

![](https://cdn.beekka.com/blogimg/asset/202108/bg2021081220.jpg)

吃完饭，老板的女儿向乔布斯索要签名。乔布斯很少答应这种要求，但也许因为这顿饭让他心情不错，他同意了，要来了笔和纸。

他的亲笔签名装裱后，如今挂在这家寿司店的墙上。

![](https://cdn.beekka.com/blogimg/asset/202107/bg2021070516.jpg)

他写道“所有美好的事物”（All good things）。这是一句美国谚语的开头三个词：“所有美好的事物终有结束的那一天。”（All good things must come to an end.）

“他可能已经知道生命将要结束，”老板说。“所以没有写整个句子，只写了前三个词。”

签完名，老板对乔布斯说，欢迎他尽快再次访问京都，“他告诉我自己得了重病，这可能是他最后一次来京都。我很震惊。”

![](https://cdn.beekka.com/blogimg/asset/202108/bg2021081221.jpg)

2016年，乔布斯去世后的第五年，一位特别的客人也来到这家寿司店用餐。

这个人就是苹果公司曾经的 CEO 约翰·斯卡利，他与乔布斯发生过激烈冲突，导致乔布斯在1985年被赶出苹果公司。

他看到墙上的乔布斯的亲笔签名，不由泪流满面。寿司店老板说，“他告诉我，他本来期待，退休后与乔布斯化解误会，但是乔布斯已经去世了，再没有机会了。”

## 言论

1、

抖音的推荐算法有一个最大的优势，就是它的内容很短，用户的观看历史以秒计算。用户使用一个小时，可以产生几百条观看记录。Netflix 需要等待一个月，才能获得相同数量的用户观看记录。

-- [Hacker News 读者](https://news.ycombinator.com/item?id=27757449)

2、

一个人的思想就像是一座冰山，自己能意识到的只是很小一部分，其它大部分都埋在脑海深处，只有通过思考和写作，才能把它们发掘出来。

-- David Perell

3、

软件项目和其他工程项目有一个重要区别，就是项目执行期间可能发生重大变更。举例来说，如果你正在建造一架民航飞机，没人会在造到一半时告诉你，他们希望这架飞机能够飞出大气层，进入太空。但在软件项目中，这是可能的，IT 公司的特点就是业务逻辑一切皆有可能，如果你建造的东西会飞，那么需求方就会觉得，它应该能飞到任何想去的地方。

-- [《复杂项目 101》](https://vadimkravcenko.com/en/dealing-with-complex-projects/)

4、

经常有人问我：“未来 10 年会发生什么变化？” 但是，几乎从没人问我：“未来 10 年什么不会改变？” 第二个问题实际上更重要，因为只有基于稳定的事物，我们才能制定业务战略。

-- 贝佐斯，亚马逊老板

5、

我担心未来的技术会让美国的电影人以数字方式复制我的动作，再套上任何演员的脸。我一生都在训练，我们武者只会越来越老，他们却可以永远拥有我的动作，变成他们的知识产权，所以我拒绝与他们合作，不让他们使用数字技术捕捉我的动作。

-- [李连杰](https://www.scmp.com/abacus/culture/article/3028904/jet-li-says-he-rejected-matrix-because-he-didnt-want-his-kung-fu)，谈为什么拒绝出演《黑客帝国》续集

## 历史上的本周

2020年（第 120 期）：[只有开放才能打败封锁](https://www.ruanyifeng.com/blog/2020/08/weekly-issue-120.html)

2019年（第 68 期）：[关注能力的成长，胜于关注待遇](https://www.ruanyifeng.com/blog/2019/08/weekly-issue-68.html)

2018年（第 17 期）：[全球变暖，在劫难逃](https://www.ruanyifeng.com/blog/2018/08/weekly-issue-17.html)

## 订阅

这个周刊每周五发布，同步更新在[阮一峰的网络日志](http://www.ruanyifeng.com/blog)和[微信公众号](http://weixin.sogou.com/weixin?query=%E9%98%AE%E4%B8%80%E5%B3%B0%E7%9A%84%E7%BD%91%E7%BB%9C%E6%97%A5%E5%BF%97)。

微信搜索“阮一峰的网络日志”或者扫描二维码，即可订阅。

![](https://cdn.beekka.com/blogimg/asset/202103/bg2021030402.jpg)

（完）
