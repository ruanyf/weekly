# 科技爱好者周刊（第 270 期）：“精益开发”的精益是什么？

这里记录每周值得分享的科技内容，周五发布。

本杂志[开源](https://github.com/ruanyf/weekly)，欢迎[投稿](https://github.com/ruanyf/weekly/issues)。另有[《谁在招人》](https://github.com/ruanyf/weekly/issues/3425)服务，发布程序员招聘信息。合作请[邮件联系](mailto:yifeng.ruan@gmail.com)（yifeng.ruan@gmail.com）。

## 封面图

![](https://cdn.beekka.com/blogimg/asset/202309/bg2023090607.webp)

南京证大喜玛拉雅中心，是一个2020年竣工的地产项目。为了体现南京是“山水城市”，它的外形模仿高山流水。（[via](https://www.sohu.com/a/460052910_791225)）

## “精益开发”的精益是什么？

最流行的软件开发模式，现在是“敏捷开发”（agile development）。

![](https://cdn.beekka.com/blogimg/asset/202309/bg2023090201.webp)

但是，很多人不知道，**敏捷只是一种价值观，不是具体的方法。** 它包含一些原则，实现这些原则有很多不同方法，下面是主要的几种。

> - 极限编程（XP）
> - Scrum 开发
> - 看板开发（kanban）
> - 精益开发（lean） 

![](https://cdn.beekka.com/blogimg/asset/202308/bg2023082803.webp)

初来乍到，看到这些奇怪的专有名词，你会不会头晕啊，它们什么意思，跟编程有何关系？

我正好读到一篇[老外的文章](https://elijahpotter.dev/articles/on_iteration_and_lean_thinking)，里面提到“精益开发”的一些小故事，读完豁然开朗，知道了“精益”的来历，就掌握它的做法了。下面分享给大家。

“精益”（lean）这个词来自1988年的一篇论文 **《精益生产系统的胜利》**，论文讨论为什么日本汽车击败了美国汽车？

![](https://cdn.beekka.com/blogimg/asset/202309/bg2023090202.webp)

论文作者以福特和丰田两家公司为例，认为它们的生产方法完全不同。

福特是早期的汽车霸主，强调批量生产，追求极致的生产效率，以降低汽车价格。以前，汽车是3000美元一辆，福特 T 型车的上市价格竟然为850美元，最终还降到了260美元，占领了美国大部分汽车市场。

![](https://cdn.beekka.com/blogimg/asset/202309/bg2023090203.webp)

传说中，亨利·福特说过一句名言：“顾客可以选择任何一种颜色，只要它是黑色。” T 型车就只有黑色车型，这并非由于福特喜欢黑色，而是黑色油漆干得快，落地后可以最短时间出售，从而降低了成本。

为了压低汽车价格，福特的生产流程是这样的：

> 1. 采购100辆汽车的原材料。
> 1. 制造100辆汽车的所有零件（总共超过十万个）。
> 1. 组装100辆汽车，然后出售。
> 1. 接收顾客反馈，生产下一批次。

由于每个步骤都需要较长的时间，因此迭代周期很久，福特也很少改动车型。

![](https://cdn.beekka.com/blogimg/asset/202309/bg2023090204.webp)

丰田公司采用了完全不同的生产方法。刚成立时，丰田是一家小公司，无力囤积原材料，也买不起生产不同零件的专用机器，只能选择通用机器，即同一台机器生产多种零件。

因此，**他们的方法就是一次制造一辆车，并尽快出售**。如果有问题，就马上修改，避免再次生产有缺陷的车。

> 1. 获取一辆车的原材料。
> 1. 制造一辆汽车所需的零件。
> 1. 组装一辆车，然后出售。
> 1. 接收顾客反馈，生产下一辆车。

这种流程有利于快速迭代和多次迭代，长期下来，丰田汽车逐渐变得更可靠耐用，更符合客户需要。

虽然，单车成本上面，丰田依然高于大批量生产的福特，但是福特迭代缓慢，很多零件不符合需要，有缺陷还是被大量生产出来，造成巨大的浪费，公司的整体效益反而不如丰田。

丰田的生产方法，就被称为“精益方法”（lean method）。英语单词 lean 的原意是“瘦且健康”，用在这里表示追求实效、快速行动，没有一丝浪费。

![](https://cdn.beekka.com/blogimg/asset/202309/bg2023090205.webp)

后来，这种方法就被用在各种领域，管理领域叫做“精益思维”，生产领域叫做“精益制造”，软件开发领域叫做“精益开发”。

总结一下，“精益开发”指的是**创建一个最小的产品原型，交付给客户，观察他们如何使用它，再快速推出小幅改进的下一代产品**。这样就能迎合快速变化的需求，不会引入无用功能。

作为比较，福特方法则是详细计划所有功能，全部开发出来，然后一次性交付。

## 科技动态

1、[网站的 AI 翻译](https://www.theverge.com/2023/9/1/23856029/gizmodo-shuts-down-spanish-language-site-ai-translations)

老牌的 IT 资讯网站 Gizmodo 宣布，它的西班牙语版本全部改为 AI 翻译，编辑都被解雇。

![](https://cdn.beekka.com/blogimg/asset/202309/bg2023090101.webp)

它的西班牙语网页底部，现在有一行免责声明：“本站内容为自动翻译，可能会存在与原意的细微差异。”

Gizmodo 此前还尝试，使用 AI 撰写新闻：只要输入一些基本事实，AI 就会自动生成一篇几百字的报道。这样的做法以后很可能会流行，翻译和编辑将最早被 AI 替代。

2、[ai 域名](https://arstechnica.com/information-technology/2023/08/ai-fever-turns-anguillas-ai-domain-into-a-digital-gold-mine/)

顶级域名`.ai`属于安圭拉（anguillas），它是英国控制的加勒比海小岛，面积只比香港本岛大一点。

![](https://cdn.beekka.com/blogimg/asset/202309/bg2023090102.webp)

AI 热潮使得`.ai`域名炙手可热，为安圭拉带来巨大财富。一个 ai 域名的年费现在是80美元左右（约人民币600元），还在上涨。

![](https://cdn.beekka.com/blogimg/asset/202309/bg2023090103.webp)

2021年安圭拉从`.ai`域名注册获得了740万美元。现在出现了 ChatGPT，今年的收入估计可达3000万美元，占到当地 GDP 的10%。

安圭拉人口只有1.5万，相当于每人每年分到2000美元，真的是天上掉下来的财富。

3、[众筹十年](https://www.tomshardware.com/news/oscilloscope-watch-ships-after-10-years)

10年前，众筹是一种非常流行的产品发布方式。发起人通过网络筹集资金，投产后再把产品寄给出资者。

但是，有些产品从来没有发货，还有些产品过了很久才发货。最近就有一块手表，10年前众筹，现在才发货。

![](https://cdn.beekka.com/blogimg/asset/202309/bg2023090501.webp)

这块手表具有示波器功能，2013年众筹，此后就没了消息。等到大家都忘了，它却在今年7月30日宣布开始发货。

![](https://cdn.beekka.com/blogimg/asset/202309/bg2023090502.webp)

![](https://cdn.beekka.com/blogimg/asset/202309/bg2023090503.webp)

用户等于拿到一个10年前的电子产品，但是无法退款或退货。众筹平台 Kickstarter 很清楚地规定，众筹是一种投资行为，不是购买行为。

> “支持者必须明白，我们不是一家商店。当你支持一个项目时，是在帮助创造新的东西，而不是预订已经存在的东西。我们不提供退款，我们鼓励支持者要调查项目的想法和创建者，自行评估项目风险。”

4、[增强现实挡风玻璃](https://www.thedrive.com/news/apple-wants-to-patent-an-augmented-reality-windshield)

苹果公司申请了一项专利，让汽车的挡风玻璃变成一块增强现实（AR）屏幕。

![](https://cdn.beekka.com/blogimg/asset/202309/bg2023090106.webp)

这块玻璃会显示各种信息，比如天气、地图、仪表数据等。它并不是投影上去的，而是玻璃本身就是一块透明的显示屏。

![](https://cdn.beekka.com/blogimg/asset/202309/bg2023090608.webp)

![](https://cdn.beekka.com/blogimg/asset/202309/bg2023090609.webp)

最具创意的是，苹果还设想，路上遇到外文招牌，它会自动叠加翻译，用户会看到翻译后的招牌（上图）。

## 文章

1、[任正非：华为有业务边界，人才要在边界内研究探索](https://www.bjnews.com.cn/detail/1693810149129843.html)（中文）

![](https://cdn.beekka.com/blogimg/asset/202309/bg2023090402.webp)

9月4日，华为发布了任正非在高端技术人才使用工作组对标会上的最新讲话。任正非谈了华为的人才使用策略。

2、[我是怎样程序员入门的](https://www.zhihu.com/question/614706706/answer/3146012068)（中文）

知乎的一个回答，作者记录大学四年，如何从完全不懂编程变成一个职业程序员。（[@wind-liang](https://github.com/ruanyf/weekly/issues/3439) 投稿）

3、[如何将 iCloud 密码用于 Chrome](https://www.kocpc.com.tw/archives/508132)（繁体中文）

![](https://cdn.beekka.com/blogimg/asset/202308/bg2023083109.webp)

苹果设备自带一个 iCloud 密码管理器，只用于 Safari 浏览器。两年前，它向 Windows 系统的 Chrome/Edge 浏览器开放，现在 Mac 系统的 Chrome/Edge 也能使用了。

4、[如何自己写一个前端框架](https://18alan.space/posts/how-hard-is-it-to-build-a-frontend-framework.html)（英文）

![](https://cdn.beekka.com/blogimg/asset/202305/bg2023051502.webp)

本文教你两个技巧，用它们就可以写一个简单的前端框架。

5、[维基百科 DNS](https://meta.wikimedia.org/wiki/Wikimedia_DNS)（英文）

![](https://cdn.beekka.com/blogimg/asset/202309/bg2023090704.webp)

维基百科推出自己的 DNS，支持DNS-over-HTTPS（DoH）和 DNS-over-TLS（DoT）查询。

6、[如何终止无响应的 Linux 会话](https://linuxiac.com/how-to-terminate-user-session-in-linux/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202308/bg2023080308.webp)

使用 Linux 终端时，有时会卡住，失去响应，这时应该如何终止会话？

7、[AWS 网络基础知识](https://medium.com/codenation-engineering/fundamentals-of-networking-in-aws-3ad3d0dc01dd)（英文）

![](https://cdn.beekka.com/blogimg/asset/202308/bg2023080401.webp)

本文介绍亚马逊云服务的一些基础网络知识，针对初学者，包括 VPC（虚拟私有云）、subnet（子网）、路由、安全组等，写得很好。

8、[财务安全的17条法则](https://thetaoofwealth.wordpress.com/2013/02/17/harry-brownes-17-golden-rules-of-financial-safety/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202309/bg2023090208.webp)

本文跟技术无关，介绍个人财务的17个注意点。我觉得说得很好，有参考价值，就保存一下链接吧。

## 工具

1、[Gitstars](https://github.com/cfour-hi/gitstars)

![](https://cdn.beekka.com/blogimg/asset/202309/bg2023090109.webp)

一个在线工具，用来管理你打过星的 GitHub 项目。（[@dllen](https://github.com/ruanyf/weekly/issues/3428) 投稿）

2、[Figma.Pub](https://figma.pub/)

![](https://cdn.beekka.com/blogimg/asset/202309/bg2023090111.webp)

为 figma 设计稿生成可自动更新的图片链接，支持 jpg 、png 、svg 格式和 scale 参数。（[@airyland](https://github.com/ruanyf/weekly/issues/3431) 投稿）

3、[MusicFree 桌面版](https://github.com/maotoumao/MusicFreeDesktop)

![](https://cdn.beekka.com/blogimg/asset/202309/bg2023090601.webp)

一个开源的音乐播放器，通过插件支持各种音源，参见[示例插件库](https://github.com/maotoumao/MusicFreePlugins)。（[@maotoumao](https://github.com/ruanyf/weekly/issues/3451) 投稿）

4、[NiceShots](https://apps.apple.com/cn/app/niceshots/id6450619697)

![](https://cdn.beekka.com/blogimg/asset/202309/bg2023090602.webp)

一个 iOS App，用来美化手机截图，可以实现带手机壳效果。（[@JimmyByte](https://github.com/ruanyf/weekly/issues/3452) 投稿）

5、[TabX](https://github.com/Developer27149/tabX)

![](https://cdn.beekka.com/blogimg/asset/202309/bg2023090207.webp)

一个 Chrome 插件，用来管理 Tab 页。（[@Developer27149](https://github.com/ruanyf/weekly/issues/3441) 投稿）

6、[AI 小镇](https://github.com/get-convex/ai-town)

![](https://cdn.beekka.com/blogimg/asset/202309/bg2023090401.webp)

一个开源的网页游戏，人物都是 AI 驱动的，用户加入这个虚拟小镇，就可以跟这些角色互动。（[@dllen](https://github.com/ruanyf/weekly/issues/3442) 投稿）

7、[Android-Touch-Helper](https://github.com/zfdang/Android-Touch-Helper)

![](https://cdn.beekka.com/blogimg/asset/202309/bg2023090403.webp)

开源的安卓手机的开屏广告自动跳过助手。（[@Lyeragain](https://github.com/ruanyf/weekly/issues/3402#issuecomment-1704958856) 投稿）

8、[MagicNotch](https://apps.apple.com/cn/app/magicnotch-elegant-shortcut/id6447055708?mt=12)

![](https://cdn.beekka.com/blogimg/asset/202309/bg2023090404.webp)

一款 MacOS 刘海屏工具，将快捷键藏在刘海里面，鼠标移入时显示。（[@fengyiqicoder](https://github.com/ruanyf/weekly/issues/3445) 投稿）

9、[文件桥](https://github.com/ppz-pro/file-bridge)

一个简单的 JS 脚本，用来架设静态文件服务器。A 电脑在网页上打开一个本地文件目录，B 电脑就能下载里面的文件，两者不必在同一局域网。（[@daGaiGuanYu](https://github.com/ruanyf/weekly/issues/3449) 投稿）

10、[Whisper Web](https://huggingface.co/spaces/Xenova/whisper-web)

![](https://cdn.beekka.com/blogimg/asset/202309/bg2023090709.webp)

不必登录，将英语音频转成文本的在线工具。（[@Y024](https://github.com/ruanyf/weekly/issues/3457) 投稿）

11、[StableDiffusion XL 体验站](https://www.stablediffusionai.ai/)

![](https://cdn.beekka.com/blogimg/asset/202309/bg2023090708.webp)

SDXL 是 Stable Diffusion 最新发布的画图模型。这是网友架设的体验站，不需要登陆也不需要付费，直接体验文生图。（[@zengdamo](https://github.com/ruanyf/weekly/issues/3455) 投稿）

## 资源

1、[Hello 算法](https://github.com/krahets/hello-algo)

![](https://cdn.beekka.com/blogimg/asset/202309/bg2023090110.webp)

一本开源的中文电子书籍，介绍数据结构与算法，配有动画图解。（[@Y024](https://github.com/ruanyf/weekly/issues/3430) 投稿）

2、[AIHub](https://www.aihub.cn/)

![](https://cdn.beekka.com/blogimg/asset/202309/bg2023090108.webp)

该网站收集各种 AI 工具和资源。（[@liuluanping](https://github.com/ruanyf/weekly/issues/3427) 投稿）

3、[Web 音视频系列](https://hughfenghen.github.io/tag/WebAV/)

![](https://cdn.beekka.com/blogimg/asset/202309/bg2023090112.webp)

一组系列文章，介绍如何在浏览器中处理音视频。（[@hughfenghen](https://github.com/ruanyf/weekly/issues/3434) 投稿）

4、[yesicon](https://yesicon.app/)

![](https://cdn.beekka.com/blogimg/asset/202309/bg2023090206.webp)

中文的图标搜索引擎，作者利用 ChatGPT 翻译了 Iconify 的 18 万个图标名。（[@dongnaebi](https://github.com/ruanyf/weekly/issues/3440) 投稿）

5、[Awesome Domain LLM](https://github.com/luban-agi/Awesome-Domain-LLM)

![](https://cdn.beekka.com/blogimg/asset/202309/bg2023090603.webp)

这个仓库收集各种垂直领域的大语言模型。（[@wuyifan18](https://github.com/ruanyf/weekly/issues/3453) 投稿）

## 图片

1、[国际橙](https://en.wikipedia.org/wiki/International_orange)

国际橙是航空航天工业使用的一种醒目的颜色，用来将物体与周围环境区分开来。它是一种纯的橙色，但颜色更深，色调更偏红。

NASA 的宇航服就采用过这种颜色。

![](https://cdn.beekka.com/blogimg/asset/202304/bg2023040616.webp)

金门大桥也采用这种颜色。

![](https://cdn.beekka.com/blogimg/asset/202304/bg2023040617.webp)

东京塔和很多高楼顶上的天线，也使用国际橙和白色相间的颜色。

![](https://cdn.beekka.com/blogimg/asset/202304/bg2023040618.webp)

![](https://cdn.beekka.com/blogimg/asset/202304/bg2023040619.webp)

2、[手绘滑雪地图](https://jamesniehues.com/)

![](https://cdn.beekka.com/blogimg/asset/202304/bg2023040806.webp)

美国有一位艺术家，手工绘制高山滑雪地图，追求高度还原真实地貌。这种地图在滑雪者里面非常受欢迎。

![](https://cdn.beekka.com/blogimg/asset/202304/bg2023040807.webp)

![](https://cdn.beekka.com/blogimg/asset/202304/bg2023040808.webp)

下面就是最后的成品。

![](https://cdn.beekka.com/blogimg/asset/202304/bg2023040809.webp)

相比高清卫星地图，这种地图现在只能当作艺术品。

## 文摘

1、[为什么塑料无法再利用](https://www.theatlantic.com/ideas/archive/2022/05/single-use-plastic-chemical-recycling-disposal/661141/)

塑料是环境污染的主要来源之一，很多人提出回收塑料再利用，但是这很难起作用。

![](https://cdn.beekka.com/blogimg/asset/202309/bg2023090604.webp)

首先，塑料有成千上万种，每种都有自己的成分和特性，包含不同的化学添加剂和着色剂，无法一起回收再利用。

![](https://cdn.beekka.com/blogimg/asset/202309/bg2023090605.webp)

你只能将回收的塑料，先分类成不同的类型，再进行加工。举例来说，单单是饮料的宝特瓶，就有聚对苯二甲酸乙二醇酯 (PET#1)、高密度聚乙烯 (HDPE#2)、聚氯乙烯 (PVC#3)、低密度聚乙烯 (LDPE#4)、聚丙烯 (PP#5) 和聚苯乙烯 (PS#6)等多种类型，必须分开回收。

这就是为什么宝特瓶的瓶盖和瓶身，必须分开的原因。你在麦当劳吃快餐，一次性的杯子、杯盖、托盘、袋子和餐具涉及到多种类型的塑料，也必须分开，不能放在一起回收。

![](https://cdn.beekka.com/blogimg/asset/202309/bg2023090606.webp)

其次，塑料废物的再加工有很多限制。塑料是易燃品，一旦发生火灾，就会影响到附近的居民区，造成的损失比回收的好处还大。

而且，不同于金属和玻璃，塑料不是惰性物质，可能包含有毒添加剂和化学品，塑料再生制品很可能有毒性。加拿大就禁止回收塑料做成食品包装。

最后，塑料回收根本不经济。塑料的价格很低，但是收集、分类、运输、再加工塑料废物付出的成本高得惊人。再生塑料制品的价格降不下来，用户根本没有动力购买。

由于以上三个原因，塑料回收不能解决塑料污染。

为了解决塑料污染，最终只能限制塑料的使用，必须尽可能少用塑料，并且将塑料垃圾集中处理。

## 言论

1、

CSS 每年都添加众多的新特性，对任何人来说都很难跟上，更不要说利用它们了。

基本上，CSS 的复杂度已经赶上了 JavaScript。

-- [Hacker News 读者](https://news.ycombinator.com/item?id=36375678)

2、

生活就是当你忙着制定其他计划时，发生在你身上的事情。

-- [约翰·列侬](https://martinburckhardt.substack.com/p/talking-to-jeff-sutherland)

3、

人类正在创造我们自己的继任者：我们每天都让机器变得更美丽和精致，赋予它们更大的力量，并通过各种巧妙的设计，让它们拥有自我调节、自我行动的力量，他们的智力逐渐变得跟人类一样。

随着岁月的流逝，我们将发现自己是劣等种族，而机器是一种不断进化的“机械生命”，最终可能取代人类成为主导物种。

-- 19世纪英国小说家塞缪尔·巴特勒，1863年6月13日发表的文章[《机器中的达尔文》](https://en.wikipedia.org/wiki/Darwin_among_the_Machines)

4、

我们一直没有发布1.0版，因为有一些高级功能没有完成。但是现在，我们决定发布了，部分原因是那些没有完成的功能，在现实世界中似乎并不重要（不过以后我仍然想完成它们。）

更重要的原因是，只有发布了1.0版，我们才能开始开发2.0版。

-- [《Cap'n Proto 1.0 发布说明》](https://capnproto.org/news/2023-07-28-capnproto-1.0.html)

5、

我曾经请了三年假，去玩电子游戏（不是开玩笑）。后来重新回来，不得不从最低端的工资开始，好在工资很快又涨回来了。找工作的秘诀就是降低你的工资要求，只有降低很多，你才能被录取，对于程序员来说，通常它可以涨回来。

-- [Hacker News 读者](https://news.ycombinator.com/item?id=36904240)

## 往年回顾

[程序员需要担心裁员吗？](http://www.ruanyifeng.com/blog/2022/09/weekly-issue-223.html)（2022 #223）

[网络收音机的设计](http://www.ruanyifeng.com/blog/2021/08/weekly-issue-173.html)（2021 #173）

[互联网公司与湘军的军制](http://www.ruanyifeng.com/blog/2020/09/weekly-issue-123.html)（2020 #123）

[数据统计的威力](http://www.ruanyifeng.com/blog/2019/09/weekly-issue-73.html)（2019 #73）

（完）

