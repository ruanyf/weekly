# 科技爱好者周刊（第 341 期）：低代码编程，恐怕不会成功

这里记录每周值得分享的科技内容，周五发布。

本杂志[开源](https://github.com/ruanyf/weekly)，欢迎[投稿](https://github.com/ruanyf/weekly/issues)。另有[《谁在招人》](https://github.com/ruanyf/weekly/issues/6189)服务，发布程序员招聘信息。合作请[邮件联系](mailto:yifeng.ruan@gmail.com)（yifeng.ruan@gmail.com）。

## 封面图

![](https://cdn.beekka.com/blogimg/asset/202503/bg2025031213.webp)

成都出现了花田火锅，火锅店开在盛开的油菜花地里，运营期两个月。（[via](https://www.163.com/dy/article/JPP0TJOJ0552XKPD.html)）

## 低代码编程，恐怕不会成功

这十几年，一批批程序员前仆后继，去搞低代码编程（包括无代码编程）。光在我身边，就有三四批。

![](https://cdn.beekka.com/blogimg/asset/202503/bg2025031208.webp)

他们搞的低代码编程，我理解就是通过图形界面，拖拉各种组件，自动生成软件 UI 的底层代码，减少手工编码。

![](https://cdn.beekka.com/blogimg/asset/202503/bg2025031210.webp)

这个想法很好，确实很多人需要，尤其不懂编程的人，这简直是生成程序的唯一可用方式。

但是很奇怪，他们无一例外都失败了，开发出来的低代码工具，开始还有一些好奇的用户，很快就不来了，用户越来越少，后来即使开源了，也没人用。

更奇怪的是，这似乎不是偶然现象，**业界所有的低代码工具好像都不成功**，至少我想不出成功的例子，哪一个受欢迎的应用程序是用低代码工具生成的。

它的背后有什么原因吗？是哪里没有做对，还是低代码编程本身就不可行？

我一直没有想通这个问题。虽然不看好，但是依然抱有一丝幻想，也许某一天醒来，低代码编程就成了主流，无论手机 App 还是桌面应用，鼠标拖几下，就可以生成。

![](https://cdn.beekka.com/blogimg/asset/202503/bg2025031209.webp)

直到上周，我读到一篇文章[《低代码编程受困于形式》](https://interjectedfuture.com/visual-programming-is-stuck-on-the-form/)（下图），才恍然大悟，**低代码编程有先天缺陷，恐怕不会成功**。

![](https://cdn.beekka.com/blogimg/asset/202503/bg2025031211.webp)

文章说，优秀的作品都是形式（form）和功能（function）的统一。**形式必须服从功能，功能决定了形式**，英文叫做“form follows function”。

![](https://cdn.beekka.com/blogimg/asset/202503/bg2025031212.webp)

对于优秀的程序员，只要弄清楚了底层，UI（用户界面）就会显而易见。

**低代码编程的问题在于，它是先有 UI（形式），再有代码（功能）**。

用户先拖拉生成 UI，系统再根据 UI 生成代码。这是本末倒置，让底层代码适配 UI，注定了两者都有问题：UI 是空想出来的，代码为了适配 UI，注定冗余和低效。

所以，优秀的软件不可能用这种方式生成，低代码编程不会成功。

我认为，他说的很有道理。**低代码编程解决不了这个根本缺陷**，适用场景有限，大概只适合一些简单任务，或者生成原型，不会成为主流工具。程序员应该谨慎开发这类工具，付出的劳动很可能打水漂。

写到这里，问题就来了：**AI 算不算低代码编程**（或者无代码编程）？如果低代码编程不会成功，那么 AI 编程会成功吗？

我认为，AI 不同于低代码编程。低代码编程是使用者给出 UI，系统来生成代码，而 AI 是系统同时生成 UI 和代码，用户只需要说出需求即可。

这种情况下，形式与功能的结合，完全取决于 AI 的能力。如果有一天，AI 视频能够成功，画面美，情节好，那么 AI 编程大概也会成功，生成形式与功能统一的应用程序。

## 小程序容器 FinClip

现在的手机 App 有一个技术趋势，大家注意到了吗？

那就是**添加小程序容器**，让自家 App 能够运行其他应用程序。

不仅国内 App 这样做，海外的一些超级 App 也纷纷效仿，比如 YouTube、Telegram、Line。

![](https://cdn.beekka.com/blogimg/asset/202503/bg2025030908.webp)

上图就是 Youtube 应用内置的“小游戏”，类似于微信小程序。

究其原因，大概是因为小程序这种架构很灵活，可以方便地添加和更新功能，有利于形成外部生态和变现。

今天，就向大家介绍一款国产的小程序容器 [FinClip](https://www.finclip.com/landpage-product/?from=ruan)。如果你想为自己的 App 引入小程序，就用得到它。

它是一个完整的、开箱即用的小程序技术解决方案，提供现成的 SDK，**将小程序运行环境嵌入宿主 App**。

有了它，任何开发者都能在 iOS / Android / HarmonyOS 等平台，构建自己的"小程序宇宙"。下图是 FinClip 目前支持的宿主平台。

![](https://cdn.beekka.com/blogimg/asset/202503/bg2025030909.webp)

可以看到，除了手机系统，它还支持嵌入桌面应用、车机应用、电视应用等等。

此外，它还有一些很吸引人的技术特性。

**（1）跨平台统一性**。它直接兼容微信/支付宝/抖音小程序，可以一行不改，直接让微信小程序跑在你的应用里面，无需二次开发。

**（2）敏捷开发范式**。它的小程序更新无需应用商店审核，可以实现"小时级"迭代。

**（3）小游戏引擎**。跟它配套的还有一个小游戏实时内容互动引擎 RealClip，提供小游戏运行环境。

![](https://cdn.beekka.com/blogimg/asset/202503/bg2025031005.webp)

这个引擎重点针对小游戏的性能和兼容性，进行了优化，除了微信小游戏，还兼容 Unity、Cocos、Laya、Egret Engine 等主流引擎和 WebView。也就是说，无论哪种引擎制作的小游戏，都能够直接运行在你的 App 中。

**（4）配套开发工具 FinClip Studio**。这个工具能将现有的小程序/小游戏代码，一键转换成独立 App，做成可用于 iOS、Android 和鸿蒙的安装包。

总之，如果你的 App 想引入小程序，或者你现有的小程序需要运行在其他应用（手机或桌面），那么就可以尝试 FinClip。

欢迎访问 [Finclip 官网](https://www.finclip.com/landpage-product/?from=ruan)详细了解，免费注册试用。任何问题都可以加入官方社群交流（下图）。

![](https://cdn.beekka.com/blogimg/asset/202503/bg2025030910.webp)

## [活动] AI 创意挑战赛，开始投票了

上周五，周刊发布了消息。首届全国 AI 编程大赛的“创意赛道”，可以提交作品了，不管你会不会编程，**只要有 AI 创意，都可以参赛**。

消息发布后，大家反响热烈。我从组委会同学那里得知，已经有几百个创意提交了。

![](https://cdn.beekka.com/blogimg/asset/202503/bg2025031307.webp)

从今天（3月14日）开始，**大赛进入了投票阶段**，欢迎大家投票，评出最能打动你的创意。也许你还可以从中得到灵感，拿来自己实现。

**所有投票用户均可抽奖**，奖品有小夜灯、工卡套、手持风扇等等。因为投票是当天有效，第二天可以再次投票，所以每个人有多次抽奖机会。

当然，如果你还有创意没有提交，现在依然可以提交参赛。

已经参赛的同学，**不要忘了为自己拉票**，发布到社交平台上（公众号/b站/小红书/微信朋友圈/技术社群），分享比赛，争取大赛获奖。

大赛详情和作品投票，可以[点击这里](https://sourl.co/5thdnz)，或者扫描上方海报。

## 科技动态

1、[人工心脏](https://www.theguardian.com/australia-news/2025/mar/12/australian-man-survives-100-days-with-artificial-heart-in-world-first-success)

一个澳大利亚男子，植入了一颗人工心脏（下图），已经活了100天，并且成功出院，创造了世界纪录。

![](https://cdn.beekka.com/blogimg/asset/202503/bg2025031205.webp)

这相当于在胸腔植入一个血液泵，一天24小时推动血液循环。

他是目前世界唯一一个带有人工心脏的人，也是世界第六例人工心脏植入。前五例的人工心脏都只是过渡，病人后来又移植了其他人的心脏。

如果机器心脏以后技术成熟了，人类的寿命可望大幅延长。

2、[手机改路由器](https://www.cnx-software.com/2025/03/02/citronics-built-a-router-based-on-the-fairphone-2-mainboard/)

旧手机有什么用？

一家比利时公司取出手机主板，加上网线口、USB 口，将其改成了路由器。

![](https://cdn.beekka.com/blogimg/asset/202503/bg2025030620.webp)

上图左侧是手机主板，右侧是将手机主板安装在扩展板上，从而形成路由器主板。

手机的 CPU、调制解调器、内存等，都是可复用的，因此改装费用很低。而且，手机的硬件配置很高，性能比高端路由器强得多。

3、[静音图标](https://www.macrumors.com/2025/03/07/new-macbook-air-corrects-design-mistake/)

苹果上周发布的 MacBook Air M4，悄然改掉了一个26年之久的设计。

它把笔记本的静音图标（F10 按钮上的图标），在喇叭上加了一道删除线。

下图是以前的图标。

![](https://cdn.beekka.com/blogimg/asset/202503/bg2025030905.webp)

下图是现在的图标。

![](https://cdn.beekka.com/blogimg/asset/202503/bg2025030906.webp)

这么简单的一个图标，苹果用了26年才改掉。

4、[汽车的物理按钮](https://www.autocar.co.uk/car-news/new-cars/volkswagen-reintroducing-physical-controls-vital-functions)

德国大众汽车宣布，未来它的所有车型，都会同时配备触摸屏和物理按钮。

![](https://cdn.beekka.com/blogimg/asset/202503/bg2025030904.webp)

上图是大众 ID.3 车型的控制台，上方是触摸屏，下方都是按钮。

该公司表示，汽车不是手机，不能都靠触摸屏，重要的功能必须有固定的位置和真实的触感。

5、**其他**

（1）一家英国生物公司，研发了[转基因香蕉](https://www.theguardian.com/science/2025/mar/07/gene-edited-non-browning-banana-cut-food-waste-tropic-norwich)。这种香蕉可以长期保持新鲜和黄色，不会变褐变黑。

![](https://cdn.beekka.com/blogimg/asset/202503/bg2025030903.webp)

即使剥开后12小时，香蕉皮也不变色，这样有利于香蕉销售。

（2）Android 15 将有一个[原生的终端程序](https://www.androidauthority.com/android-linux-terminal-app-available-3532999/)，提供一个基于 Debian 的 Linux 发行版供用户使用。

![](https://cdn.beekka.com/blogimg/asset/202503/bg2025031104.webp)

这个功能的底层是虚拟机机制，它将大大方便程序员，将安卓手机当作 Linux 桌面电脑使用。

![](https://cdn.beekka.com/blogimg/asset/202503/bg2025031105.webp)

## 文章

1、[AI 大模型2024年的进展](https://simonwillison.net/2025/Mar/8/nicar-llms/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202503/bg2025030907.webp)

著名程序员 Simon Willison 3月7日的演讲稿，通俗地介绍了 AI 在过去一年的巨大飞跃，很好的综述。

2、[如何用 Claude Code 反编译代码](https://ghuntley.com/tradecraft/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202503/bg2025030616.webp)

作者演示了一个惊人的例子，使用 Anthropic 发布的 Claude Code，将 Webpack 编译出来的文件反编译，还原成源代码。

3、[CSS 跨文档视图转换](https://simonwillison.net/2025/Mar/10/building-websites-with-llms/)（英文）

本文介绍一个示例，通过 CSS 新的跨文档视图转换功能，使得多页面应用的跳转，也像单页面应用（SPA）一样流畅顺滑。

4、[Cursor 上传 .env 文件](https://forum.cursor.com/t/env-file-question/60165)（英文）

![](https://cdn.beekka.com/blogimg/asset/202503/bg2025031206.webp)

Cursor 是现在非常流行的一个 AI 代码编辑器，它的用户论坛爆出一个帖子，有人发现它会上传用户的 .env 文件，由于里面都是环境参数，会带来安全隐患。

5、[JSON 与 JavaScript 的对象成员顺序](https://blog.gslin.org/archives/2025/03/07/12299/json-%E8%88%87-javascript-%E5%86%8D-object-%E8%A3%A1%E9%9D%A2%E5%85%83%E7%B4%A0%E9%A0%86%E5%BA%8F%E7%9A%84%E5%B7%AE%E7%95%B0/)（中文）

![](https://cdn.beekka.com/blogimg/asset/202503/bg2025030702.webp)

JSON 与 JavaScript 的对象，里面的成员顺序有没有规定？本文探讨这个问题。

6、[Go 语言错误处理机制的优点](https://rauljordan.com/why-go-error-handling-is-awesome/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202503/bg2025031102.webp)

Go 语言的错误处理很特别，没有 try...catch 机制，错误是一个值，作者解释这样设计的好处。

## 工具

1、[TypeScript 7](https://github.com/microsoft/typescript-go)

微软使用 Go 语言重写了 TypeScript 编译器 tsc，据说速度可以提高10倍，参看[介绍文章](https://devblogs.microsoft.com/typescript/typescript-native-port/)。

![](https://cdn.beekka.com/blogimg/asset/202503/bg2025031207.webp)

目前，TypeScript 的版本是5.8，等到这个工具稳定了，将发布为 TypeScript 7。

2、[QR Code Generator](https://fietkau.software/qr)

![](https://cdn.beekka.com/blogimg/asset/202409/bg2024090102.webp)

一个网页应用，可以定制二维码的颜色、斑点、徽标。

3、[WatchYourLAN](https://github.com/aceberg/WatchYourLAN)

![](https://cdn.beekka.com/blogimg/asset/202409/bg2024090103.webp)

一个开源的网页应用，用来扫描局域网的 IP 分配，可以发送主机上线和掉线的通知。

4、[XPipe](https://github.com/xpipe-io/xpipe)

![](https://cdn.beekka.com/blogimg/asset/202503/bg2025031305.webp)

一个跨平台的桌面应用，通过图形界面，将所有的服务器连接在一个地方管理。

5、[TransBridge](https://github.com/fruitbars/transbridge)

![](https://cdn.beekka.com/blogimg/asset/202503/bg2025031001.webp)

一个开源的翻译 API 代理服务，可以接入各种大模型，对外提供翻译服务，试用 [Demo](https://transbridge.fanyimao.cn/)。（[@fruitbars](https://github.com/ruanyf/weekly/issues/6238) 投稿）

6、[DouYin Downloader](https://github.com/jiji262/douyin-downloader)

![](https://cdn.beekka.com/blogimg/asset/202503/bg2025031002.webp)

开源的 Python 脚本，用来下载抖音短视频。（[@jiji262](https://github.com/ruanyf/weekly/issues/6240) 投稿）

7、[Java Thread Dump](https://www.threadanalyzer.online/)

![](https://cdn.beekka.com/blogimg/asset/202503/bg2025031106.webp)

免费分析 java thread 的网站，上传 jstack 导出的线程快照文件，分析线程池内线程状态。（[@HbOrea](https://github.com/ruanyf/weekly/issues/6259) 投稿）

8、[Mono](https://mono.cards/zh)

![](https://cdn.beekka.com/blogimg/asset/202503/bg2025031201.webp)

制作内容分享卡片的免费网站。（[@RiverTwilight](https://github.com/ruanyf/weekly/issues/6264) 投稿）

9、[Telegram Files](https://github.com/jarvis2f/telegram-files)

![](https://cdn.beekka.com/blogimg/asset/202503/bg2025031202.webp)

开源的 Telegram 文件下载器，支持多频道、多账户同时下载。（[@jarvis2f](https://github.com/ruanyf/weekly/issues/6268) 投稿）

10、[Obsidian 云盘同步插件](https://github.com/ai-bytedance/obsidian-cloud-sync)

一个开源的 Obsidian 插件，将笔记自动同步到多种云盘服务。（[@ai-bytedance](https://github.com/ruanyf/weekly/issues/6275) 投稿）

## AI 相关

1、[Mistral OCR](https://mistral.ai/news/mistral-ocr)

上周，Mistral AI 发布了号称史上最强的 OCR 识别工具，具有公式和表格的识别能力，参见[介绍文章](https://finance.sina.com.cn/tech/roll/2025-03-07/doc-inenuzhm5927298.shtml)。

![](https://cdn.beekka.com/blogimg/asset/202503/bg2025031306.webp)

网友 [monsoonw](https://github.com/ruanyf/weekly/issues/6248) 做了一个免费的[试用网站](https://mistralocr.net/)。

![](https://cdn.beekka.com/blogimg/asset/202503/bg2025031004.webp)

著名程序员 Simon Willison 开源了[一个 Python 脚本](https://github.com/simonw/tools/blob/main/python/mistral_ocr.py)，演示了怎样调用 Mistral 的 API 进行文字识别，参考[他的文章](https://simonwillison.net/2025/Mar/7/mistral-ocr/)。

2、[Free QWQ](https://qwq.aigpu.cn/)

![](https://cdn.beekka.com/blogimg/asset/202503/bg2025031107.webp)

免费、无限制的算力平台，为开发者提供 QwQ 32B 大语言模型 API。（[@nexmoe](https://github.com/ruanyf/weekly/issues/6260) 投稿）

3、[Code-Review-LLM-Gitlab](https://github.com/mimo-x/Code-Review-GPT-Gitlab)

![](https://cdn.beekka.com/blogimg/asset/202503/bg2025031108.webp)

使用大模型对 GitLab 项目进行 Code review 的工具。（[@mimo-x](https://github.com/ruanyf/weekly/issues/6261) 投稿）

4、[人话翻译器](https://github.com/DemoJ/HumanizeText)

一个 Chrome 插件，通过 AI 将难懂的中文翻译成好懂的中文。（[@DemoJ](https://github.com/ruanyf/weekly/issues/6277) 投稿）

## 资源

1、[辰宇落雁体](https://github.com/Chenyu-otf/chenyuluoyan_thin)

![](https://cdn.beekka.com/blogimg/asset/202503/bg2025030701.webp)

一个开源的中文手写字体。

2、[JetBrains Maple Mono](https://github.com/SpaceTimee/Fusion-JetBrainsMapleMono)

![](https://cdn.beekka.com/blogimg/asset/202503/bg2025031003.webp)

一款合成字体，解决 JetBrains Mono 没有中文字形的痛点，全部等宽无衬线，中英文 2:1 宽对齐。（[@SpaceTimee](https://github.com/ruanyf/weekly/issues/6244) 投稿）

3、[BeddyStories](https://beddystories.com/zh)

![](https://cdn.beekka.com/blogimg/asset/202503/bg2025031204.webp)

一个儿童睡前故事网站，收集了全球经典的儿童睡前故事。（[@yimiqidage](https://github.com/ruanyf/weekly/issues/6272) 投稿）

4、[IP 侦探](https://ip.aolifu.org/)

![](https://cdn.beekka.com/blogimg/asset/202503/bg2025031203.webp)

免费的在线 IP 归属地查询。（[@Oliverwqcwrw](https://github.com/ruanyf/weekly/issues/6271) 投稿）

另有一个 Chrome 插件 IP Location Finder，选中 IP 地址，显示归属地。（[@Yanel85](https://github.com/ruanyf/weekly/issues/6278) 投稿）

![](https://cdn.beekka.com/blogimg/asset/202503/bg2025031301.webp)

## 图片

1、[红绿色盲](https://www.theverge.com/23650428/colorblindness-design-ui-accessibility-wordle)

红绿色盲的患者，看不到红色和绿色。在他们眼里，这两种颜色都会变成黄色。

下面是一半红、一半绿的树叶。

![](https://cdn.beekka.com/blogimg/asset/202304/bg2023040802.webp)

红绿色盲患者看到的却是一张黄色树叶。

![](https://cdn.beekka.com/blogimg/asset/202304/bg2023040803.webp)

大概每20个人里面，就有一个人有色盲或色弱问题。所以，设计界面的时候，使用红色或绿色必须非常谨慎，因为红绿色盲患者分不清。

下面的日历使用绿色和粉红色，表示特殊的日期。

![](https://cdn.beekka.com/blogimg/asset/202304/bg2023040804.webp)

但是，红绿色盲患者看到的是下面这样，根本分不清。

![](https://cdn.beekka.com/blogimg/asset/202304/bg2023040805.webp)

因此，用户界面轻易不要使用红色和绿色。

## 文摘

1、[如果 AI 和机器人接管一切](https://hyponymo.us/2013/01/29/100-percent-unemployment/)

我最近常常想一个问题：如果 AI 强大到所有方面都超过人类，它和机器人接管一切，人类要干什么呢？

凯文·凯利认为，随着工作都交给机器人，人类可以从事越来越多有趣的工作，就像工业革命后一样。

这种说法在短期内有一定道理，但是有一个前提，就是人类能做计算机做不到的事情。

我认为，没有理由认为这个前提会永远成立。

除非政府强制规定，计算机不得从事某些工作，只有人类可以做。但是那样的话，那些工作很可能就会停滞发展了。停滞发展的行业没有前景，收入也不会增长，从业者难以感到满意。

让我们假设一种极端的情况，如果机器完全超越人类，每件事都比人类做得好，大部分人无法为社会做出贡献时，一切会怎样？

如果一个人无法为社会做出贡献，也就失去了他的经济价值，就算他能靠政府的补助继续活着，那么对于他来说，个人价值是什么呢，就是活一天算一天？

目前来看，这个问题还比较遥远，就算那一天到来，也是很久以后的事情了。眼下比较现实的问题是，AI 正在大量减少高薪工作。随着机器的能力越来越强，很多白领工作的价值迅速变小，大多数人越来越难找到报酬丰厚、令人满意的工作。

这就是现在发生的问题，高薪的工作岗位不断减少，难以获得。

## 言论

1、

以前的球票、音乐会票、景点票、电影票都是纸质的，现在全改成数字的。

我们的过去都保存在手机里，再也没有纪念物了。

-- [彭博社](https://www.bloomberg.com/news/articles/2025-03-07/the-case-for-ditching-digital-memories-for-physical-objects)

2、

越来越多的应用程序转移到互联网上，操作系统的软件差异变得越来越不重要。这就是为什么 M1 芯片对 Mac 的未来如此重要。

苹果应当利用这一波 AI，发挥其硬件优势，鼓励开发者在本地运行 AI 模型。

-- [《苹果 AI 的潜力》](https://stratechery.com/2025/apple-ais-platform-pivot-potential/)，本文指出苹果芯片可以本地运行 AI 模型，不需要 Nvidia 显卡，苹果应该利用这一点，扩大销售

3、

自从有了 AI，我发现自己不再担心项目对我来说太大、太复杂，或者项目使用了我不了解的技术或编程语言，一切都变得容易得多。

我正在重新审视一些我曾认为太复杂或超出我能力范围的业余项目，只要有时间，我就会去尝试。这是一个令人兴奋的时代。

-- [《有了 AI，你需要想得更大》](https://rodyne.com/?p=1828)

4、

我认为，数学本质上已经没有什么好问题了。让大量数学家感兴趣的问题数量每年都在减少，而且几乎所剩无几。

现代数学研究越来越局限于少数人对某个特定主题的研究，即使是研究生也常常被现代数学问题的极端专业性和深奥性所困扰。

未来的研究生不应再需要证明一些全新的东西，相反地，他们的主要目标可能是简化过去的研究结果。

-- [《数学已经没有问题了》](https://medium.com/@jpolak/math-is-running-out-of-problems-14f2911fa46b)


## 往年回顾

[崖门海战的感想](https://www.ruanyifeng.com/blog/2024/03/weekly-issue-294.html)（#294）

[大数据已死](https://www.ruanyifeng.com/blog/2023/03/weekly-issue-244.html)（#244）

[悲观者正确，乐观者成功](https://www.ruanyifeng.com/blog/2022/02/weekly-issue-194.html)（#194）

[提高收入的根本途径](https://www.ruanyifeng.com/blog/2021/01/weekly-issue-144.html)（#144）

（完）

