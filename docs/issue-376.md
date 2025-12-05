# 科技爱好者周刊（第 376 期）：太空数据中心的争议

这里记录每周值得分享的科技内容，周五发布。

本杂志[开源](https://github.com/ruanyf/weekly)，欢迎[投稿](https://github.com/ruanyf/weekly/issues)。另有[《谁在招人》](https://github.com/ruanyf/weekly/issues/8332)服务，发布程序员招聘信息。合作请[邮件联系](mailto:yifeng.ruan@gmail.com)（yifeng.ruan@gmail.com）。

## 封面图

![](https://cdn.beekka.com/blogimg/asset/202512/bg2025120304.webp)

杭州大运河门户桥是一座步行桥，位于大运河与钱塘江交汇处，即将开放。它的三段拱形设计象征杭州刺绣和钱塘江浪潮。（[via](https://www.163.com/dy/article/KDAJVKT50514ETGI.html)）

## 太空数据中心的争议

AI 大发展，数据中心不够用了，建造和运营成本飞涨。

越来越多的人提出，数据中心可以建在太空。

![](https://cdn.beekka.com/blogimg/asset/202511/bg2025113006.webp)

先是[马斯克说](https://news.cctv.com/2025/11/11/ARTI6f0b2Jz9Q1WnTzbvH00W251111.shtml)，SpaceX 公司考虑在地球轨道上，建造数据中心。

![](https://cdn.beekka.com/blogimg/asset/202511/bg2025113007.webp)

然后本周，北京市科委、中关村科学城管委会发布了[《太空数据中心建设规划方案》](https://finance.sina.com.cn/tech/roll/2025-11-28/doc-infywkcw9025829.shtml)。

![](https://cdn.beekka.com/blogimg/asset/202511/bg2025113008.webp)

目标是“在距地面700公里的轨道上，建设可容纳百万卡集群的数据中心，开展天基数据中继传输和计算服务”。

![](https://cdn.beekka.com/blogimg/asset/202511/bg2025113009.webp)

根据报道，专家认为太空数据中心“[势在必行](https://finance.sina.cn/7x24/2025-11-29/detail-infyzkhk9168276.d.html)”（上图）。

> （1）高轨太空数据中心可 7×24 小时使用高强度太阳能，且不受大气影响，发电效率可达95%。
> 
> （2）深空温度约为-270度，只需部署导热材料即可完成散热，无需部署大量液冷结构，成本优势显著。

我觉得，这是两个很大的优势，太空数据中心确实应该尽快建设。

但是，我紧接着又看到了[一篇文章](https://taranis.ie/datacenters-in-space-are-a-terrible-horrible-no-good-idea/)。

![](https://cdn.beekka.com/blogimg/asset/202511/bg2025113010.webp)

作者是美国宇航局的资深工程师，曾经参与设计卫星。

他根据国际空间站的经验，认为现阶段技术制约太大，太空数据中心很难实现。真要建设的话，花费巨大，收益有限。

这可是我第一次看到，有人认真地质疑这件事。我不具备这方面的专业知识，不知道他的计算对不对，再说国际空间站完成于25年前，现在的技术早就超越了那时。

我把他的几点质疑分享出来，大家看看太空数据中心有没有前景。

**（1）能源问题**

太空能源主要来自太阳能。迄今为止最大的太空太阳能板就在国际空间站，峰值功率200​​千瓦以上，但是面积巨大，约为2500平方米，超过半个美式橄榄球场。

英伟达的 H200 显卡功耗约为 0.7kW，实际运行可能需要 1kW 的电源。国际空间站的太阳能板只够供电200个 H200。

作为比较，OpenAI 即将在挪威建设的数据中心计划容纳10万个 GPU，每个的功耗可能都比 H200 更高。

**（2）散热问题**

太空很冷，接近绝对零度，初看上去散热应该很容易。但是事实是，散热只有两种方式：要么通过介质散热，要么通过辐射散热。

太空没有空气，接近真空，根本没有介质，无法使用空气对流来散热，所以 GPU 的散热片和风扇不起作用。

唯一可用的是液冷，通过液体将热量传递到散热板，再辐射到太空（散热板必须放置在远离太阳的一面）。

国际空间站就采用辐射散热。它的散热系统非常复杂，散热上限为 16kW，大约相当于16个 H200，略多于一个地面服务器机架的四分之一。

国际空间站的散热板尺寸为13.6米×3.12米，即大约42.5平方米。如果要为200个 H200 散热，面积需要扩大12.5倍，即大约531平方米。这个面积是同样功率太阳能板的2.6倍。

这样一来，太空数据中心将变得非常庞大，远超国际空间站，而容量只相当于地面的三个标准机架。

**（3）粒子射线问题**

太空有各种高速粒子，由于没有大气层保护，它们可以直接撞击芯片材料造成损伤。最常见的后果是单粒子翻转（SEU），即粒子直接撞击晶体管，导致某个比特翻转。

太空数据中心必须长期运行，还存在总剂量效应，即反复的粒子撞击导致晶体管开关速度变慢，进而停止工作。

所以需要有一个屏蔽层，但是最强的宇宙射线可以穿透惊人厚度的铅层。而且受限于飞船的运送能力，太空中不可能部署很厚的屏蔽层。

为了增加 GPU 和内存的抗辐射能力，有必要为太空环境重新设计芯片，增加容错性能。但是，这样的芯片性能将远不及目前地球上的 GPU。

**（4）通讯问题**

大多数卫星通过无线电与地面通信，速率超过 1Gbps 都很困难。虽然有一些激光方案可以提高带宽，但需要良好的大气条件才能实现。

相比之下，地球上的数据中心之间的通讯，最低速率也能达到 100Gbps。

## [本周软件] 七牛云的大模型接入服务

几周前，我在周刊[推荐](https://www.ruanyifeng.com/blog/2025/10/weekly-issue-370.html)了[七牛云](https://s.qiniu.com/JrUbmm)，**一个平台调用国内外各大 AI 模型**，堪称中国的 OpenRouter。

但是，我没说清楚两点，导致很多网友遇到问题，我一直想找机会补充。

本周一，DeepSeek 发布 V3.2 的 Speciale 版和普通版，当天晚上我就看到七牛云上架了（下图）。他们更新这么快，我还是说一下吧，大家就不会遇到问题了。

![](https://cdn.beekka.com/blogimg/asset/202512/bg2025120202.webp)

**（1）国外模型**。七牛云目前提供国内外70多个模型，但由于种种原因，国外模型在官网查不到，实际上是支持的。

具体的模型清单，可以去[这个网站](https://sufy.com/zh-CN/services/ai-inference/models)查询，主流模型都有（下图）。

![](https://cdn.beekka.com/blogimg/asset/202512/bg2025120201.webp)

查到模型 ID 后（比如`claude-4.5-opus`），用它作为模型名参数，就可以在七牛云调用这个模型。

**（2）请求频率**。普通开发者“1分钟5次，1小时60次”足够使用了，如果超出这个速率，就会遇到报错（状态码429）。

大家不要觉得这个限制太严，作为对比，Claude 官方的 Pro 套餐是5小时45次。

我推荐七牛云，主要考虑他们是上市公司，服务有保障。另外，他们同时支持 OpenAI 和 Anthropic 两种调用格式，调用 API 很方便（下图）。

![](https://cdn.beekka.com/blogimg/asset/202512/bg2025120203.webp)

**新用户有免费的 300万 Token**，如果再邀请一位好友来使用，你会再得到 500万 Token，好友则得到 1000万 Token。注意，这些免费额度是通用的，可用于任何他们提供的模型。欢迎使用我的[推广链接](https://s.qiniu.com/JrUbmm)去注册。

## 科技动态

1、[冰岛的洋流危机](https://www.dagens.com/news/iceland-declares-ocean-current-instability-a-national-security-risk)

冰岛政府宣布，大西洋的洋流变化是国家安全问题，威胁到冰岛的生存。

![](https://cdn.beekka.com/blogimg/asset/202511/bg2025113005.webp)

根据观测数据，随着全球变暖，大西洋环流正在减弱。这个环流是一条巨大的传送带，将温暖的海水从赤道向北输送，为大西洋北部带来温暖的气候。

一旦这个洋流消失，冰岛的气温将大幅下降，最坏的情况下可能会被冰川包围，真的变成“冰的岛”，也就没法住人了。

2、[火星声音](https://gizmodo.com/weve-detected-lightning-on-mars-for-the-first-time-2000691996)

火星上有什么声音？

科学家也想知道。美国的“毅力号”火星车于2021年2月登陆火星时，就配备了一个麦克风，专门监听火星声音。

![](https://cdn.beekka.com/blogimg/asset/202512/bg2025120104.webp)

上图是火星车顶部跟摄像头配套的麦克风。

最近，一个研究团队分析了这个麦克风录制的28小时音频。

他们听到了有东西撞击地表的声音，同时还观测到了电信号，因此推测这是闪电的声音。

这是人们第一次知道，火星还有闪电，因为那里空气稀薄，没有水也就没有云，所以不存在云的放电。科学家判断，火星闪电应该是龙卷风导致的沙石摩擦的放电。

![](https://cdn.beekka.com/blogimg/asset/202512/bg2025120105.webp)

3、[人造树叶](https://newscenter.lbl.gov/2025/04/24/scientists-develop-artificial-leaf-that-uses-sunlight-to-produce-valuable-chemicals/)

一个美国研究团队，将太阳能板做成了叶片形状。

![](https://cdn.beekka.com/blogimg/asset/202504/bg2025042813.webp)

这种叶片的底部，连接着化学催化剂，有了太阳能，就可以将二氧化碳和水转化为燃料。

如果把许多这样的叶片组装成一棵树，就是一个燃料生产装置。

![](https://cdn.beekka.com/blogimg/asset/202504/bg2025042814.webp)

这启示我们，太阳能装置的形式，远不止太阳能板一种，完全可以做成树的形状。

## 文章

1、[关于近期安全报告的情况说明](https://mp.weixin.qq.com/s/E8YQLWZFM2J7r5DZNSl47w)（中文）

![](https://cdn.beekka.com/blogimg/asset/202512/bg2025120403.webp)

一个国外安全团队近日[报告](https://programnotes.cn/browser-security-ShadyPanda/index.html)，某些浏览器插件（如 Clean Master、WeTab）是恶意软件。本文是这些插件的中国开发团队的回应。

他们表示，Clean Master 去年已经卖掉了，现在跟他们无关，至于其他插件属于误报。建议先读[安全报告](https://programnotes.cn/browser-security-ShadyPanda/index.html)，再读这篇回应。（[@yiGmMk](https://github.com/ruanyf/weekly/issues/8349) 投稿）

2、[Electron vs Tauri](https://www.dolthub.com/blog/2025-11-13-electron-vs-tauri/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202511/bg2025112801.webp)

Electron 和 Tauri 是目前跨平台桌面应用的两种主流开发方案。本文是它们的详细对比，各自的优缺点。

3、[我为什么要从 GitHub 迁移](https://dillo-browser.org/news/migration-from-github/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202512/bg2025120103.webp)

作者感到 GitHub 不符合需要，太重了，就做了一个自己的代码仓库托管方案。如果你也想自己架设代码服务器，可以参考。

4、[Protobuf 好于 JSON](https://aloisdeniel.com/blog/better-than-json)（英文）

![](https://cdn.beekka.com/blogimg/asset/202512/bg2025120215.webp)

本文呼吁使用 Protobuf 格式代替 JSON。作者认为，JSON 唯一的优点就是人类可以识读。

5、[如何写一份好的 CLAUDE.md 文件](https://www.humanlayer.dev/blog/writing-a-good-claude-md)（英文）

![](https://cdn.beekka.com/blogimg/asset/202512/bg2025120102.webp)

很多 AI 编程工具，使用一份文本文件，作为每次查询的上下文。本文以 CLAUDE.md 为例，介绍怎么用好这个文件。

6、[ZFS 文件系统好于 Btrfs](https://www.xda-developers.com/how-zfs-is-superior-to-btrfs/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202502/bg2025022202.webp)

ZFS 和 Btrfs 是两种流行的现代文件系统，本文介绍它们的特点，提出前者更可靠。

## 工具

1、[Fizzy](https://github.com/basecamp/fizzy)

![](https://cdn.beekka.com/blogimg/asset/202512/bg2025120401.webp)

37Signals 公司开源了他们内部使用的看板应用。

2、[Fresh](https://github.com/sinelaw/fresh)

![](https://cdn.beekka.com/blogimg/asset/202512/bg2025120402.webp)

一个基于终端的文本编辑器。

3、[Gitmal](https://github.com/antonmedv/gitmal)

![](https://cdn.beekka.com/blogimg/asset/202512/bg2025120216.webp)

这个工具将 Git 仓库变成一个静态网站，网页内容就是文件、提交、代码高亮等。

4、[GitHub Card](https://githubcard.com)

![](https://cdn.beekka.com/blogimg/asset/202511/bg2025112802.webp)

该网站可以生成 GitHub 用户和仓库的分享卡片。（[@Cactusinhand](https://github.com/ruanyf/weekly/issues/8303) 投稿）

5、[EasyDB](https://github.com/shencangsheng/easydb_app)

![](https://cdn.beekka.com/blogimg/asset/202511/bg2025112804.webp)

跨平台的桌面应用，使用 SQL 查询数据文件，包括数据库、CSV、Excel、JSON 等。（[@shencangsheng](https://github.com/ruanyf/weekly/issues/8313) 投稿）

6、[Webhooker](https://github.com/TokenRollAI/webhooker)

一个 Webhook 的转发网关，比如把 Slack 消息转发到飞书和钉钉。（[@Disdjj](https://github.com/ruanyf/weekly/issues/8318) 投稿）

7、[PySInfo](https://github.com/EasyCam/Pysinfo)

![](https://cdn.beekka.com/blogimg/asset/202512/bg2025120101.webp)

一个 Python 脚本，用来在命令行显示系统信息，类似于 [fastfetch](https://github.com/fastfetch-cli/fastfetch)。（[@cycleuser](https://github.com/ruanyf/weekly/issues/8333) 投稿）

8、[PocketMocker](https://github.com/tianchangNorth/pocket-mocker)

![](https://cdn.beekka.com/blogimg/asset/202512/bg2025120204.webp)

一个网页前端的 Mock 库，通过网页中拦截 fetch 和 XMLHttpRequest 来 Mock 数据，带有可视化控制台。（[@tianchangNorth](https://github.com/ruanyf/weekly/issues/8345) 投稿）

9、[code996](https://github.com/hellodigua/code996)

![](https://cdn.beekka.com/blogimg/asset/202512/bg2025120302.webp)

一个命令行工具，通过分析 Git 仓库的提交时间，判断项目的编码工作强度和加班情况。（[@hellodigua](https://github.com/ruanyf/weekly/issues/8361) 投稿）

10、[玉桃文飨轩](https://github.com/nicejade/markdown2png)

![](https://cdn.beekka.com/blogimg/asset/202512/bg2025120305.webp)

一款开源网页应用，将 Markdown 文本转成图片。（[@nicejade](https://github.com/ruanyf/weekly/issues/8363) 投稿）

## AI 相关

1、[ClipSketch AI](https://github.com/RanFeng/clipsketch-ai)

![](https://cdn.beekka.com/blogimg/asset/202512/bg2025120217.webp)

一个开源的 Web 应用，通过 Gemini 模型，将小红书和 B 站视频转成手绘故事。（[@RanFeng](https://github.com/ruanyf/weekly/issues/8353) 投稿）

2、[Banana Prompt Quicker](https://github.com/glidea/banana-prompt-quicker)

![](https://cdn.beekka.com/blogimg/asset/202512/bg2025120306.webp)

一个开源的浏览器插件，收集 Nano Banana 模型的热门提示词，方便复用。（[@glidea](https://github.com/ruanyf/weekly/issues/8364) 投稿）

3、[git-rewrite-commits](https://github.com/f/git-rewrite-commits)

![](https://cdn.beekka.com/blogimg/asset/202511/bg2025111205.webp)

这个工具使用 AI 改写以前的 git 提交信息，让其变得更准确详细。

## 资源

1、[百大年度照片](https://time.com/7336112/top-100-photos-2025/)

![](https://cdn.beekka.com/blogimg/asset/202511/bg2025112901.webp)

《时代》杂志评选的2025年100张照片，另有[路透社的年度照片](https://www.reuters.com/investigates/special-report/year-end-2025-photos-best/)。

2、[维基百科2025年阅读量最高的文章](https://wikimediafoundation.org/news/2025/12/02/announcing-wikipedias-most-read-articles-of-2025/)

![](https://cdn.beekka.com/blogimg/asset/202512/bg2025120303.webp)

维基百科公布，2025年它的英文版阅读量最高的20篇文章，主要集中于政治、流行文化和逝者。

3、[HummingbirdSpot](https://hummingbirdspot.com/all-hummingbird-species/)

![](https://cdn.beekka.com/blogimg/asset/202511/bg2025112707.webp)

这是一个美国退休女教师的网站，她立志要拍摄所有种类的蜂鸟。全世界共有366种蜂鸟，她已经拍到了277种。

## 图片

1、[小王子博物馆](https://www.lepetitprince.com/en/events-around-the-world/a-new-little-prince-museum-has-opened-its-doors-in-switzerland/)

经典童话《小王子》出版于1943年，畅销全世界。

为了纪念这本童话和作者圣埃克苏佩里，瑞士最近新开了一家小王子博物馆。

![](https://cdn.beekka.com/blogimg/asset/202511/bg2025113001.webp)

这个博物馆收藏了这本童话的各种版本和纪念品。

![](https://cdn.beekka.com/blogimg/asset/202511/bg2025113002.webp)

《小王子》的情节是，从前有一个 B612 小行星，上面有一个小王子。这个小行星面积不大，有两座活火山、一座死火山和一朵玫瑰。

小王子离开 B612 后，拜访了其他六颗小行星，分别住着国王、爱慕虚荣的人、酗酒的人、生意人、守时的人和地理学家。最后，小王子来到地球，访问后又回到了自己的行星。 

![](https://cdn.beekka.com/blogimg/asset/202511/bg2025113003.webp)

![](https://cdn.beekka.com/blogimg/asset/202511/bg2025113004.webp)

## 文摘

1、[为什么大公司的代码质量不佳？](https://www.seangoedecke.com/bad-code-at-big-companies/)

跟大家想的不一样，大公司的代码质量其实不高。

这看上去违反常理，大型科技公司薪酬优厚，足以吸引众多优秀工程师。而且，大公司的工作环境、配套工具、开发节奏都很好，非常适合从容不迫地完成高质量的工作。

但是，事实就是他们的代码质量完全谈不上优秀。

原因很简单，大公司的大多数代码都是由相对的初学者完成的。

那些工程师并不是不优秀，而是被迫去开发非本领域的项目，属于相对的初学者。

现实生活中，大型科技公司的工程师，很少会一直干下去。事实上，大公司的薪酬方案通常都设定了工程师的四年任期，四年后初始授予的股份全部归属，工程师的收入可能就会大幅下降。这时，如果你没有得到晋升，显然可以考虑离开了。

如果算上内部流动，情况就更糟了。我自己在同一个团队或同一个代码库，停留的时间最长也只有三年，那还是我刚入职的时期。后来，我每年都至少经历一次重组，更换团队或项目。

当然，大公司的代码库寿命没有这么短，很多内部代码库都有十年甚至更久的历史。问题是，这么多年来，这些库经历了许多不同的所有者，不同的工程师都在不断地“摸索”，相当高比例的代码变更是由“新手”完成的。这些人可能是在过去六个月内才加入公司、接触代码库。

你肯定会问，大公司的那些“老手”程序员难道不写代码吗？总有一些工程师在特定领域工作了足够长的时间，积累了真正的专业知识，会进行深入的代码审查，并能可靠地发现问题，这些人在干什么呢？

首先，大公司不在乎“老手”程序员。公司很少致力于培养特定专业的长期人才，而且似乎也根本不在乎留住这些人才。通常情况下，这些人迟早会被调到其他部门，成为一个全新系统的相对新手。

其次，“老手”工程师总是工作量巨大。作为少数精通特定服务的工程师之一，他们的工作非常繁忙。他没有足够的时间亲自审查每一次软件变更，或者积极参与每一个决策过程，他有自己的工作要做。

总之，大公司的现实就是，你总是被分配到新项目，几乎每天都在赶工，要赶上多个项目的截止日期。换句话说，工程师是在一个不利于编写高质量代码的环境中尽力而为。

这样情况下，就很难保证优秀的代码质量了。更常见的情况是，一位初级工程师接手了一个他几乎不熟悉的代码库中一个恼人 bug 的工单。他花了几天时间研究，最终想出了一个蹩脚的解决方案。如果幸运的话，一位“老手”在空闲的半小时里匆匆浏览了一下，否决了这个方案，并提出了一个稍微好一点、至少能用的方案。初级工程师尽力实现了这个方案，测试了它是否有效，经过简单的审查后发布，所有相关人员立即转而处理下一个高优先级的工作。

## 言论

1、

亚洲人民处在从艰苦的农业生活过渡到城市工厂生活，这种转变似乎带来了一种热情，一种愿意为在今天的欧洲被认为微不足道的东西而努力工作的意愿。

这对他们来说是好事。但在欧洲，我们已经经历过这种转变，变得无所事事，毫无士气。我们生活所需的一切都由他人制造时，这种情况是不可持续的。

-- [一个德国的 Hacker News 读者](https://news.ycombinator.com/item?id=46072570)

2、

汽车的电子屏幕，夜间使用非常有害，尤其对于40岁以上的人。他们的视力开始下降，聚焦和光线平衡的反应速度都会减慢，使用电子屏幕会改变他们的夜视能力，不容易看清前方的道路。

-- [Hacker News 读者](https://news.ycombinator.com/item?id=46092397)

3、

普通人看不懂数学论文，但是圈外人不知道的是，数学家也看不懂很多数学论文。

-- [《科学》杂志](https://www.science.org/doi/10.1126/science.aec9014)

4、

大模型时代，我们正在失去一些珍贵的东西：自己独特的声音。

所有大模型生成的文章，看上去都像是同一个公共经理发布的。

如果你让大模型帮你写所有文章，你就放弃自己的声音了。你的声音是一种财富，是你一生的生活经历塑造而成，没有人的声音会和你完全一样。

-- [《大模型让我们失去声音》](https://tonyalicea.dev/blog/were-losing-our-voice-to-llms/)

## 往年回顾

[示意图利器 D2](https://www.ruanyifeng.com/blog/2024/12/weekly-issue-329.html)（#329）

[网络社区的悲剧](https://www.ruanyifeng.com/blog/2023/11/weekly-issue-279.html)（#279）

[手机充电问题的解决](https://www.ruanyifeng.com/blog/2022/11/weekly-issue-229.html)（#229）

[AR 技术的打开方式](https://www.ruanyifeng.com/blog/2021/10/weekly-issue-179.html)（#179）

（完）

