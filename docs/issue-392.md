# 科技爱好者周刊（第 392 期）：axios 投毒与好莱坞式骗术

这里记录每周值得分享的科技内容，周五发布。

本杂志[开源](https://github.com/ruanyf/weekly)，欢迎[投稿](https://github.com/ruanyf/weekly/issues)。另有[《谁在招人》](https://github.com/ruanyf/weekly/issues/9454)服务，发布程序员招聘信息。合作请[邮件联系](mailto:yifeng.ruan@gmail.com)（yifeng.ruan@gmail.com）。

## 封面图

![](https://cdn.beekka.com/blogimg/asset/202604/bg2026040203.webp)

今年就将启用的腾讯总部园区，俗称“企鹅岛”，里面不仅包括办公楼，还有多幢公寓楼。（[via](https://www.nfnews.com/content/0oXLNmjJo9.html)）

## axios 投毒与好莱坞式骗术

上周，著名软件库 axios 被[投毒](https://cloud.tencent.com/announce/detail/2249)了。黑客拿到了发布令牌，直接发了一个新版本，里面加入了木马。

![](https://cdn.beekka.com/blogimg/asset/202604/bg2026040703.webp)

软件投毒不是新鲜事，新鲜的是发布令牌怎么泄漏的。背后的故事简直是好莱坞电影，根本防不胜防。

axios 属于使用最广泛的 JS 软件库之一，每周下载量接近1亿次，所以这次投毒的感染面很大。

![](https://cdn.beekka.com/blogimg/asset/202604/bg2026040704.webp)

而且，木马的恶性程度很高。根据[官方的清除说明](https://github.com/axios/axios/issues/10636#issue-4195231282)，如果不幸中毒，**机器上所有的密钥、令牌和凭证都要作废**。这个木马会扫描所有目录，收集密钥，然后发出去。

大家要知道，像 axios 这种超级流行的软件库，每个环节都有完整防护，每一行代码都被严格审查。**这次攻击完全是一场精心策划的社会工程**，把这些防护都攻破了。

攻击目标选定首席维护者 Jason Saayman。据[本人透露](https://github.com/axios/axios/issues/10636#issuecomment-4180237789)，事件过程是这样的。

> 他们根据我的情况量身定制了这一流程，具体做法如下：
> 
> 1. 他们冒充某公司的创始人联系我，不仅克隆了该公司创始人的外貌，还克隆了该公司本身。
> 1. 他们随后邀请我加入一个真实的 Slack 工作区。这个工作区使用了该公司的品牌标识，名称也十分可信。Slack 的工作区设计得非常精巧，他们设有专门的频道来分享 LinkedIn 上的帖子。我猜这些 LinkedIn 帖子最终会发布到该公司的真实账号上，整体效果非常逼真。他们甚至还创建了一些我推测是该公司团队成员以及其他一些开源软件维护者的虚假账号。
> 1. 他们安排了一次与我的会面，目的是进行沟通。会议是在微软 Teams 上进行的。参会人员似乎是一群人。
> 1. 会议指出我系统上的某些东西过时了。我以为是和 Teams 有关，就安装了缺失的组件，结果发现是远程木马（RAT）。
> 1. 一切都安排得井井有条，看起来很正规，而且做事方式也很专业。

可以看到，这个攻击是有剧本的，每一步都经过了策划，充分准备和排练，**完全为你度身定制**，就等你落入圈套。

行骗者非常耐心，投入了巨大的前期成本。首先，假冒某公司的创始人联系你，为了提升可信度，还做了假的公司网站；然后，邀请你加入他们的 Slack 工作区，里面有各种讨论、项目文档、宣传物料，看上去就像真的一样；最绝的是，他们还让你在 Teams 软件上参加公司的视频会议，**一群骗子亲自露面，陪你一起开会**。

会议开始后不久，主持人突然说：“奇怪，你的系统怎么跟我们不一样，是不是微软的插件过时了，我发你一个最新版。”你就这样收到了传过来的安装包，看到别的与会者都在等你，你也就没有多想，直接双击执行了。哦喔，就这样中招了，发布令牌一秒钟就泄漏了。

作假到这种程度，让人叹服。

这让我联想到不久前看到的一条[印度新闻](https://www.wsj.com/world/fake-cops-fake-judges-the-hollywood-style-scam-poised-to-go-global-e1e339a3?st=fXpKE6&mod=1440&user_id=66c4c9305d78644b3ac5df9c)，作假程度有过之而无不及，也是如同好莱坞电影。

去年圣诞节，一位印度新德里的77岁老太太，收到了“警察局”的 Whatsapp 视频电话。视频右下角居然还有手语翻译。

![](https://cdn.beekka.com/blogimg/asset/202604/bg2026040405.webp)

警察跟她说，银行发现她的账户有洗钱记录，必须对她进行调查，如果不配合，账户资金将被没收，通知她远程出席法院的调查听证会。

媒体后来披露了“警察局”的布景照片，大家看看多么逼真。

![](https://cdn.beekka.com/blogimg/asset/202604/bg2026040406.webp)

![](https://cdn.beekka.com/blogimg/asset/202604/bg2026040407.webp)

![](https://cdn.beekka.com/blogimg/asset/202604/bg2026040408.webp)

前三张照片是印度警察局，最后一张是巴基斯坦警察局，它们在一栋楼里，房间紧邻着。要知道这两个国家在现实中是对立的，但是不妨碍骗子两边都骗。

再回到案子本身，几天后，老太太参加了线上听证会，在一个法院里举行，由“法官”亲自主持。他查看了资金记录，听取了“警察”的证词，向老太太询问了一些问题。

最后，“法官”告诉老太太，当局需要核实她的所有资产是否合法。她必须每天都跟警察局连线，回答问题，直到查清为止。

下面就是这个案件最精彩的部分，一连16天，老太太每天开着摄像头连线，大家看看骗子演到了什么程度。

> 在这16天里，老太太渐渐喜欢上了在假警局轮班的警官们。她开始称他们为自己的孩子们。而他们也反过来称她为“母亲”。
> 
> 晚上，她和最年轻的警官一起阅读印度教宗教经典，这位警官请她把她觉得特别感人的段落发给他。
>
> “他们就像家人一样，”老太太回忆说。“他们说，‘女士，我们想尽快把事情解决。我们日夜为您工作。’”

天哪，骗子从早到晚演了16天，跟老太太促膝长谈，一起读经典，请教人生问题，直到深夜。这要是拍成电影，该有多动人。

老太太没有丝毫疑心，心甘情愿卖掉了自己的投资，累计九次向假警察局的账户总共转出了160万美元。

第二天，她再跟“警察局的孩子们”连线，就连不上了。

从上面两个案例，大家可以看到，现在的互联网骗局可以演到什么程度，完全是精准投放的“剧本杀”，成功率极高。要是再加上 AI 的加持，几乎不可能分辨真假。

网站开发有一条规则：客户端的每一个请求都不可信任，必须假定是恶意请求。以后，现实生活恐怕也是这样：每一个陌生人都不可信任，必须假定是恶意骗局。

## 算力依然不足

最近发生了三件事，说明算力当前依然很紧张。

第一件事，OpenAI [关闭](https://finance.sina.cn/stock/jdts/2026-04-07/detail-inhtsezc7221412.d.html)了视频生成服务 Sora，主要原因是算力不够，公司要把计算资源用于核心业务。

第二件事，Anthropic 公司正式禁止将包月套餐用于第三方服务（比如 OpenClaw、OpenCode 等等）。

原因是包月套餐如果足额使用，消耗的算力将远远超过套餐费用。公司的算力很宝贵，必须优先保证自家产品（比如 Claude Code），不能让外部产品增加机房负担。

第三件事，有[文章](https://martinalderson.com/posts/what-next-for-the-compute-crunch/)称，GitHub 今年前三个月的代码提交量是去年同期的14倍！

原因显然是 AI 编程暴增，去年年初可没有 Claude Code。GitHub 的资源根本不足以应付这种增量，所以[不断发生故障](https://mrshu.github.io/github-statuses/)。

![](https://cdn.beekka.com/blogimg/asset/202604/bg2026040810.webp)

上图显示，GitHub 过去三个月的正常运行时间只有89.47%，合格数字应该是99.99%。

以上三件事说明，主要的几家 AI 服务公司，算力资源都很紧张，硬件依然不足。

这意味着，硬件价格暴涨还没到头，还会继续涨，而 GitHub 很可能会收紧免费服务，全面转向收费。

## 前端是不是重复劳动？

我看到一个开发者[说](https://jonno.nz/posts/what-if-your-browser-built-the-ui-for-you/)，前端本质上是相同的工作：向用户展示一些数据，并让用户处理这些数据。

他觉得，没必要重复解决同样的问题。

他就做了一个“[自适应浏览器](https://github.com/jonnonz1/adaptive-browser)”。它通过 AI 自动生成前端 UI，后端只需要提供数据，以及网页用途的描述。

不知道这是不是前端的结局？

## Adobe 修改 hosts 文件

Adobe 公司的主要产品是“创意云”套件（Creative Cloud），包含了许多著名软件，比如 Photoshop、Illustrator、Premiere。

![](https://cdn.beekka.com/blogimg/asset/202604/bg2026040404.webp)

一个网友安装后，震惊地发现，安装程序[修改](https://www.reddit.com/r/webdev/comments/1sb6hzk/comment/oe1ap9h/)了他的 hosts 文件。

![](https://cdn.beekka.com/blogimg/asset/202604/bg2026040403.webp)

上图可以看到，Adobe 在 hosts 里面加了一个本地的 DNS 记录。

一个应用程序为什么要修改系统文件呢？

据知情人士透露，这是为了测试用户是否安装了 Creative Cloud。用户访问官网时，网页会向上图的域名发出一个请求，因为该域名的 DNS 记录只有本地才有，服务器收到了请求，就意味着用户安装了 Creative Cloud。

这么著名的软件，居然想出这种类似“开后门”的解法，而且对象是付钱给他的人，真让人无语。

## 文章

1、[MDN 新前端的底层结构](https://developer.mozilla.org/en-US/blog/mdn-front-end-deep-dive/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202604/bg2026040801.webp)

MDN 是互联网最大的文档网站，本文介绍这个网站的前端架构，没想到这么复杂。

2、[杀死那个写代码的人](https://windliang.wang/2026/03/31/%E6%9D%80%E6%AD%BB%E9%82%A3%E4%B8%AA%E5%86%99%E4%BB%A3%E7%A0%81%E7%9A%84%E4%BA%BA/)（中文）

![](https://cdn.beekka.com/blogimg/asset/202604/bg2026040813.webp)

作者是某大厂前端程序员，回顾自己这一年，从手写代码转变到 AI 编程。AI 改变了一切，消解了“35岁退休”。（[@wind-liang](https://github.com/ruanyf/weekly/issues/9545) 投稿）

3、[我如何用安卓手机搭建短信网关](https://jonno.nz/posts/built-an-sms-gateway-with-a-20-dollar-android-phone/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202604/bg2026040302.webp)

作者介绍如何在一部二手的安卓手机上，安装一个短信网关，通过网络收发短信（使用你自己的套餐）。

4、[使用 QEMU 进行大端字节序测试](https://www.hanshq.net/big-endian-qemu.html)（英文）

![](https://cdn.beekka.com/blogimg/asset/202604/bg2026040402.webp)

一篇 C 语言的初级教程，在本机上通过 qemu 虚拟机，运行一个不到十行的程序，就能查看某个架构是大端还是小端字节序。

6、[Python 的 importtime 功能](https://simonwillison.net/2025/Jun/20/python-importtime-graph/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202506/bg2025062101.webp)

Python 使用 import 命令输入模块，这有性能开销。本文介绍内置的 importtime 功能，可以显示每个模块加载所消耗的时间。

7、[2000年库尔斯克号核潜艇灾难](https://rarehistoricalphotos.com/kursk-submarine-disaster-photos/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202604/bg2026040808.webp)

2000年8月，俄罗斯核潜艇“库尔斯克”号在演习中爆炸沉没，118名船员全部遇难。这场事故发生得十分缓慢，现场一片混乱，救援工作进展不断延迟，本文用大量照片还原了整个过程。

## 工具

1、[Google AI Edge Gallery](https://apps.apple.com/nl/app/google-ai-edge-gallery/id6749645337)

![](https://cdn.beekka.com/blogimg/asset/202604/bg2026040601.webp)

本周，谷歌官方推出了一款苹果手机 App，为手机提供离线使用的 Gemma 4 模型。不需要上网，手机也能使用大模型了。

2、[apfel](https://apfel.franzai.com/)

![](https://cdn.beekka.com/blogimg/asset/202604/bg2026040401.webp)

Mac 电脑内置了一个本地大模型，可以离线使用。但是，默认只有苹果自家的 Siri 能调用，安装了这个工具以后，就可以自己在命令行调用它了。

3、[Docking](https://docking.cc/)

![](https://cdn.beekka.com/blogimg/asset/202604/bg2026040701.webp)

为 Linux 桌面添加类似苹果桌面的程序坞。

4、[Tantivy](https://github.com/quickwit-oss/tantivy)

Rust 语言写的全文搜索引擎库，可以替代 Apache Lucene，参见[介绍文章](https://www.paradedb.com/blog/tantivy-interview)。

5、[Open Screen](https://github.com/siddharthvaddem/openscreen)

![](https://cdn.beekka.com/blogimg/asset/202604/bg2026040501.webp)

跨平台的桌面应用，用来录屏后制作介绍视频，提供各种配套编辑功能。

6、[epub-tts](https://github.com/rafael1mc/epub-tts)

这个开源工具将 epub 文件转成音频文件，也就是电子书转成有声书。

7、[NVTOP](https://github.com/Syllo/nvtop)

![](https://cdn.beekka.com/blogimg/asset/202403/bg2024031301.webp)

一个 Linux 系统的命令行程序，用来监控 GPU 显卡的状态，等同于显卡专用的 top 命令。

8、[dmcheck](https://github.com/PlayerYK/dmcheck)

![](https://cdn.beekka.com/blogimg/asset/202604/bg2026040812.webp)

检查某个主题词的域名占用情况。（[@PlayerYK](https://github.com/ruanyf/weekly/issues/9542) 投稿）

9、[Reze Studio](https://github.com/AmyangXYZ/reze-studio)

![](https://cdn.beekka.com/blogimg/asset/202604/bg2026040901.webp)

开源的动画曲线编辑网站。（[@AmyangXYZ](https://github.com/ruanyf/weekly/issues/9555) 投稿）

10、[gitlogue](https://github.com/unhappychoice/gitlogue)

这个工具可以将 Git 仓库的提交历史，在终端里面以动画形式重现，甚至可以显示为屏保。

## 资源

1、[佛津](https://fojin.app/)

![](https://cdn.beekka.com/blogimg/asset/202604/bg2026040301.webp)

全球佛教古籍数字化聚合平台。（[@xr843](https://github.com/ruanyf/weekly/issues/9507) 投稿）

2、[Flight Viz](https://flight-viz.com/)

![](https://cdn.beekka.com/blogimg/asset/202604/bg2026040811.webp)

实时 3D 显示全球的航班。（[@haojiang99](https://github.com/ruanyf/weekly/issues/9538) 投稿）

3、[GPU 时间线](https://sheets.works/data-viz/every-gpu)

![](https://cdn.beekka.com/blogimg/asset/202604/bg2026040809.webp)

这个网站用图片展示了 GPU 显卡的发展历程，从1996年的 Voodoo 卡到2025年的 RTX 5090 显卡。

## 图片

1、[绿化荒山的简单方法](https://www.sciencealert.com/how-12-000-tonnes-of-dumped-orange-peel-produced-something-nobody-imagined)

中美洲的哥斯达黎加出产橙汁，产生了大量的橘子皮，以前都是垃圾填埋。

一个环保组织说服工厂，把12000吨橘子皮倾倒在荒山上，用来积肥。

![](https://cdn.beekka.com/blogimg/asset/202604/bg2026040802.webp)

山头覆盖了橘子皮，除此以外，没有做任何处理。

![](https://cdn.beekka.com/blogimg/asset/202604/bg2026040803.webp)

过了6个月，橘子皮彻底腐烂，成为了黑色的泥土，慢慢开始长东西了。

![](https://cdn.beekka.com/blogimg/asset/202604/bg2026040804.webp)

16年以后，当科学家重新来到现场时，那里已经是茂密的树林了。

![](https://cdn.beekka.com/blogimg/asset/202604/bg2026040805.webp)

这真是绿化荒山的最简单方法，只要堆满了橘子皮，任其腐烂就可以了。

2、[2025年全球物理摄影大赛](https://www.quantamagazine.org/global-physics-photowalk-2025-winners-revealed-20260401/)

美国、法国、日本等16个粒子物理实验室，联合举办了一个摄影比赛，邀请摄影师拍摄物理实验室，用来向大众宣传物理学。

![](https://cdn.beekka.com/blogimg/asset/202604/bg2026040806.webp)

上图是意大利国家核物理研究所 (INFN) 的低温探测器实验室，它可以将物质冷却到仅仅略高于绝对零度。

![](https://cdn.beekka.com/blogimg/asset/202604/bg2026040807.webp)

上图拍摄地是法国的重离子国家加速器研究中心，拍摄的装置是直线加速器的供电系统。

更多照片看[这里](https://www.quantamagazine.org/global-physics-photowalk-2025-winners-revealed-20260401/)。

## 文摘

1、[为什么沙子有粘性？](https://www.mentalfloss.com/posts/why-is-sand-sticky)

我们去海边玩，沙子会粘在皮肤、鞋子、衣服和头发上。

![](https://cdn.beekka.com/blogimg/asset/202304/bg2023042604.webp)

沙子的主要成分是二氧化硅，跟岩石一样。岩石没有粘性，为什么沙子会有粘性呢？

原来，沙子本身没有粘性，但具有亲水性，它会吸水。人体也是亲水的，在烈日下汗流浃背。当沙子接触到湿润的东西时，水分子之间就会产生粘性。

皮肤上往往还有油脂或者防晒霜，它们也会让沙子粘在皮肤上。

另外，皮肤还有一些微小褶皱，也会卡住沙子。

总之，想要去除沙子，就是等到皮肤变干，或者用水冲洗。

## 言论

1、

如果你认为编写代码的速度是你的问题，那你面临的问题更大。

-- [Andrew Murphy](https://andrewmurphy.io/blog/if-you-thought-the-speed-of-writing-code-was-your-problem-you-have-bigger-problems)，澳大利亚程序员

2、

有一种兴奋，叫做2017年才刚接触加密货币的人才有的兴奋。

-- [Andrew Murphy](https://andrewmurphy.io/blog/if-you-thought-the-speed-of-writing-code-was-your-problem-you-have-bigger-problems)，澳大利亚程序员

3、

一项民意调查发现，美国年轻人对于婚姻、子女、信仰的重视程度，远不及他们的父母，对于传统的价值观——爱国主义、宗教、社区和家庭也很冷淡。

年轻人把市场和金钱当作道德准则。在他们眼里，市场决定了事物的价值、事件的意义、谁是正确的、谁是赢家、谁举足轻重。

-- [《预测市场的最糟糕后果》](https://www.derekthompson.org/p/we-havent-seen-the-worst-of-what)

4、

对我来说，未来城市实际上是像阿姆斯特丹那样的地方，到处都是舒适的街道和自行车道，而不是像迪拜那样的地方，有16车道的高速公路，以及一群被压迫的劳工阶级在俗气的豪华购物中心里工作。

-- [Hacker News 读者](https://news.ycombinator.com/item?id=47643388)

5、

高校都要求博士生发表论文，至于你写什么、怎么写的、内容与研究方向有没有关系，系里其实都不在意。系里需要论文，因为论文能证明经费的合理性，而经费又能证明系的存在价值。学生只不过是达成这个目标的生产资料。

-- [《机器没问题，有问题的是我们自己》](https://ergosphere.blog/posts/the-machines-are-fine/)

## 往年回顾

[HDMI 2.2 影音可能到头了](https://www.ruanyifeng.com/blog/2025/04/weekly-issue-345.html) (#345)

[巧妙的灯泡钟](https://www.ruanyifeng.com/blog/2024/03/weekly-issue-295.html)（#295）

[摩天大楼是反人类的](https://www.ruanyifeng.com/blog/2023/03/weekly-issue-245.html)（#245）

[你做过不在乎结果的项目吗？](https://www.ruanyifeng.com/blog/2022/02/weekly-issue-195.html)（#195）

（完）

