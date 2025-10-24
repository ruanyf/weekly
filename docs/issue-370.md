# 科技爱好者周刊（第 370 期）：正确的代码高亮

这里记录每周值得分享的科技内容，周五发布。

本杂志[开源](https://github.com/ruanyf/weekly)，欢迎[投稿](https://github.com/ruanyf/weekly/issues)。另有[《谁在招人》](https://github.com/ruanyf/weekly/issues/7832)服务，发布程序员招聘信息。合作请[邮件联系](mailto:yifeng.ruan@gmail.com)（yifeng.ruan@gmail.com）。

## 封面图

![](https://cdn.beekka.com/blogimg/asset/202510/bg2025102301.webp)

北京门头沟区的千年古刹灵岳寺，从1979年开始关闭，直到这个月修缮完成，对外开放。修缮过程中，在墙上留了一个观察窗，展示原始的唐代和辽代的砖块。（[visuals_china@instagram](https://www.instagram.com/p/DQEjgx-EUNN/?img_index=6)）


## 正确的代码高亮

程序员一般都使用代码高亮，就是代码有不同的颜色（下图），方便阅读。

![](https://cdn.beekka.com/blogimg/asset/202510/bg2025102304.webp)

问题就来了，**什么样的颜色组合，最适合阅读代码？**

大多数的人大概跟我一样，就挑自己觉得好看的。比如下图五颜六色的，我觉得很悦目。

![](https://cdn.beekka.com/blogimg/asset/202510/bg2025101704.webp)

不久前，我读到[一篇文章](https://tonsky.me/blog/syntax-highlighting/)，作者说：错了，好看的颜色未必适合阅读代码。

正确的代码高亮，应该**让你一眼注意到最重要的代码信息**。太多的颜色，只会让人眼花缭乱，找不到重点。

他提出代码高亮的五条原则。

（1）**最多使用4种颜色**，再多的颜色会分散注意力。

（2）**变量、函数和类的定义最重要**，一般来说，它们是代码的最关键部分，所以定义时的变量名、函数名、类名应该高亮显示。

（3）**注释也很重要**，往往是关键信息，或者是作者希望别人阅读的信息，所以要高亮显示。很多配色方案将注释变灰，这是不对的。

（4）**常量和函数嵌套（即括号）也是重要信息**，需要高亮显示。

（5）**其他代码不必高亮**，包括变量读取、函数调用、关键字（class、function、if、else 等等），因为它们无所不在，你很少会去寻找它们。

这五条原则，你认同吗？

如果认同的话，你可以试试看作者设计的配色方案 [Alabaster](https://github.com/tonsky/sublime-scheme-alabaster#variations-1)。

下面就是这个方案的高亮效果。

![](https://cdn.beekka.com/blogimg/asset/202510/bg2025101706.webp)

作为对比，再看看前面那个“好看”配色的高亮效果。

![](https://cdn.beekka.com/blogimg/asset/202510/bg2025101705.webp)

你觉得，哪一种效果好，是否突出了代码的关键信息？

## 大模型 API 怎么买

如果同时使用多家公司的大模型，大家怎么解决，每家的 API 都买？

今天介绍一个我正在使用的“AI 网关”，可以**一个接口调用50多个主流模型**。它就是[七牛云 AI 大模型推理平台](https://s.qiniu.com/JrUbmm)”。

![](https://cdn.beekka.com/blogimg/asset/202510/bg2025102313.webp)

常用的主流模型，它基本都提供了（比如国外的 OpenAI、Gemini、Claude，国内的 DeepSeek、千问、豆包、智谱、Kimi）。[模型广场](https://t.wangbase.com/AR4lw)（上图）列出了部分模型，完整列表需要[查询 API](https://developer.qiniu.com/aitokenapi/13000/claude-inference-api#3)。

七牛云是老牌的云服务商，成立15年了，还是上市公司，相当靠谱。它的稳定性和服务质量，可以放心，遇到问题不会找不到人。

用它的“统一接口”，有几个显著优点。（1）**使用方便**，开通和付费都是人民币，不需要海外信用卡；（2）**接入简单**，各种的 AI 客户端、IDE、命令行、MCP 都可以接入，支持 OpenAI/Claude 两种 API 格式，鉴权与计费都是统一的；（3）**低延迟 + 高吞吐**，使用 [AIPerf](https://www.aiperf.top/test) 测它调用谷歌模型，平均响应时间是700多毫秒，平均吞吐量是 184.6 Token/s；（4）**高阈值**，普通用户的上限是每分钟500个请求，每分钟令牌数500万，一般情况下足够了。

目前，它的“新用户推广活动”还没结束。<u>新用户有免费的 300万 Token，如果你再邀请一位好友来使用，你会再得到 500万 Token，好友则得到 1000万 Token</u>。

总结就是一句话，如果你使用[我的推广链接](https://s.qiniu.com/JrUbmm)去注册（下图），你会得到免费的 300万 + 1000万 Token。然后，你生成自己的推广链接，每邀请一位好友，就再多 500万 Token。

![](https://cdn.beekka.com/blogimg/asset/202510/bg2025102402.webp)

## 科技动态

1、本周，一架美国的波音 737 Max 客机在11000米高空，遭到[不明物体的撞击](https://economictimes.indiatimes.com/news/international/us/united-airlines-737-max-carrying-140-passengers-to-lax-diverts-after-mysterious-object-cracks-cockpit-windshield-midair-pilot-injured/articleshow/124683266.cms)，挡风玻璃砸碎了，碎玻璃把机长的手臂划破了很多口子。

![](https://cdn.beekka.com/blogimg/asset/202510/bg2025102008.webp)

这样的高度不可能是鸟，而且由于挡风玻璃有高温烧焦的痕迹，也不可能是冰雹，只可能是陨石或太空垃圾。

![](https://cdn.beekka.com/blogimg/asset/202510/bg2025102009.webp)

如果确定是太空垃圾，它将是史上第一架被太空垃圾砸中的飞机。

（[更新] 最新消息是，这架飞机可能撞上了高空气象气球。这应该也是史上第一例飞机撞气球。）

2、一家中国轮胎公司在吉林长春，制造了[世界最大轮胎](https://finance.sina.cn/tech/2025-10-19/detail-infumsek4716883.d.html)。

![](https://cdn.beekka.com/blogimg/asset/202510/bg2025102002.webp)

该轮胎直径超过4米，重量超过6吨，用于大型露天矿车。

3、世界哪个国家没有蚊子？

以前，唯一没有蚊子的国家是冰岛。但是本周，冰岛一个农民在自家农场发现了三只[活着的蚊子](https://www.npr.org/2025/10/22/nx-s1-5582748/iceland-mosquitoes-first-time)。

![](https://cdn.beekka.com/blogimg/asset/202510/bg2025102305.webp)

世界每一个国家从此都有蚊子。

冰岛政府认为，这些蚊子是随飞机或轮船来到冰岛。但深层的原因是，全球变暖导致蚊子可以在高纬度地区生存和繁衍。

4、日本三重大学的研究发现，[日本的夏天](https://english.kyodonews.net/articles/-/62626)比42年前的1982年，长了三周。

![](https://cdn.beekka.com/blogimg/asset/202510/bg2025101201.webp)

这就是气候变化，夏季越来越长，且温度越来越高，冬季长度基本不变，春季和秋季显著缩短，只有一两周。

5、X 公司（前身为推特）正式推出[用户名市场](https://www.engadget.com/social-media/xs-handle-marketplace-will-sell-some-rare-usernames-for-millions-of-dollars-224852740.html)，用户可以在那里购买回收的用户名。

![](https://cdn.beekka.com/blogimg/asset/202510/bg2025102110.webp)

平台的政策是，用户一段时间（比如6个月）没有登录，它就可以回收用户名。至于怎么处理这些用户名，各平台的政策不一样。

X 是业内第一家公开出售用户名的平台，某些稀有用户名（比如@one、@fly、@compute）的价格从2500美元一直到100万美元。

这件事情再次提醒我们，你的用户名不属于你，属于平台。平台只是暂时借给你使用，随时可以回收用户名。

## 文章

1、[TypeScript 类似于 C#](https://typescript-is-like-csharp.chrlschn.dev/pages/intro-and-motivation.html)（英文）

![](https://cdn.beekka.com/blogimg/asset/202510/bg2025100916.webp)

这篇文章提出 TypeScript 的语法很像 C#，因为它们的设计者就是同一个人。

所以，当 TypeScript 需要提高性能时，可以考虑将代码转为 C#，现在 C# 也是跨平台的。

2、[如何将网页动画压缩到每帧16.67毫秒](https://koolcodez.com/blog/inside-the-frame/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202510/bg2025101002.webp)

显示器的刷新率一般是每秒60帧，为了让动画流畅，每帧的渲染时间最好不超过16.67毫秒。本文介绍一个 CSS 知识点，可以提高网页动画性能。

3、[从 HTTP 轮询到 MQTT：我们在 AWS IoT Core 的架构演进](https://mp.weixin.qq.com/s/3wyrIFf3pQh5EJ0NWbHOjA)（中文）

![](https://cdn.beekka.com/blogimg/asset/202510/bg2025101902.webp)

作者公司的物联网项目，最早采用 HTTP 轮询，后来改成了 MQTT 协议，采用 AWS IoT Core 云服务。（[@Konata9](https://github.com/ruanyf/weekly/issues/7943) 投稿）

4、[为什么 NetNewsWire 不是一个 Web 应用](https://inessential.com/2025/10/04/why-netnewswire-is-not-web-app.html)（英文）

![](https://cdn.beekka.com/blogimg/asset/202510/bg2025101407.webp)

NetNewsWire 是一个桌面的 RSS 阅读器，总是有人要求作者，将其改成 Web 应用。本文是作者解释为什么不开发 Web 版，理由很充分。

5、[Burrows-Wheeler 变换](https://sandbox.bio/concepts/bwt)（英文）

![](https://cdn.beekka.com/blogimg/asset/202510/bg2025101001.webp)

本文介绍一种奇妙的算法 Burrows-Wheeler Transform（简称 BWT），它会把字符串打乱，使得相同的字符倾向于组合在一起。

它的奇妙之处是，打乱后还可以用逆运算，将字符串还原，从而使得这种算法很适合用来压缩文本。

6、[屏幕截图的不可见注入](https://simonwillison.net/2025/Oct/21/unseeable-prompt-injections/)

![](https://cdn.beekka.com/blogimg/asset/202510/bg2025102307.webp)

越来越多的公司推出了自己的 AI 浏览器，它通过截图阅读屏幕。现在已经出现在屏幕嵌入人眼不可见、但机器可见的文本，进行模型注入，让模型执行恶意操作（上图）。

7、[Unicode 隐形字符的病毒](https://www.koi.ai/blog/glassworm-first-self-propagating-worm-using-invisible-code-hits-openvsx-marketplace)（英文）

![](https://cdn.beekka.com/blogimg/asset/202510/bg2025102308.webp)

本文介绍一个令人叹为观止的 JS 病毒，它的恶意代码是用 Unicode 隐形字符写的，人眼看不见（上图的空白处），但是引擎会执行这些代码。

![](https://cdn.beekka.com/blogimg/asset/202510/bg2025102309.webp)

## 工具

1、[OpenZL](https://github.com/facebook/openzl)

![](https://cdn.beekka.com/blogimg/asset/202510/bg2025101008.webp)

Meta 公司新推出的一种压缩工具，适合压缩结构化数据（比如数据库），压缩比更高，速度更快，参见[介绍文章](https://linuxiac.com/meta-unveils-openzl-a-new-open-source-data-compression-framework/)。

2、[Handy](https://github.com/cjpais/Handy)

![](https://cdn.beekka.com/blogimg/asset/202509/bg2025092905.webp)

免费、开源的跨平台桌面应用，用来语音转文本。

3、[Feed me up, Scotty!](https://feed-me-up-scotty.vincenttunru.com/)

![](https://cdn.beekka.com/blogimg/asset/202510/bg2025102111.webp)

一个自搭建的 Web 服务，用户输入网址，并指定 CSS 选择器，它就生成该网址的 RSS 源，[代码开源](https://gitlab.com/vincenttunru/feed-me-up-scotty)。

4、[Judo](https://judojj.com/releases/)

![](https://cdn.beekka.com/blogimg/asset/202510/bg2025102306.webp)

一个跨平台的 Git/JJ 桌面图形客户端。

5、[htmldocs](https://github.com/htmldocs-js/htmldocs)

![](https://cdn.beekka.com/blogimg/asset/202510/bg2025101701.webp)

一个 React 组件，用来在网页中创建、编辑、预览 PDF 文档。（[@Haopeng138](https://github.com/ruanyf/weekly/issues/7925) 投稿）

6、[Cent](http://github.com/glink25/Cent)

![](https://cdn.beekka.com/blogimg/asset/202510/bg2025101703.webp)

开源的多人协作记账 Web 应用，数据保存在你的私人 GitHub 仓库。（[@glink25](https://github.com/ruanyf/weekly/issues/7929) 投稿）

7、[Shell360](https://github.com/nashaofu/shell360) 

![](https://cdn.beekka.com/blogimg/asset/202510/bg2025101901.webp)

开源的跨平台 SSH 客户端，支持 Windows、macOS、Linux、Android 和 iOS。（[@nashaofu](https://github.com/ruanyf/weekly/issues/7942) 投稿）

8、[015](https://github.com/keven1024/015)

![](https://cdn.beekka.com/blogimg/asset/202510/bg2025102003.webp)

自托管的临时文件共享平台。（[@keven1024](https://github.com/ruanyf/weekly/issues/7952) 投稿）

9、[MHtool](https://github.com/sudo1123/MHtool)

一个命令行的 Python 数学工具包，一个脚本集成了数学计算、数据处理和图形绘制功能。（[@sudo1123](https://github.com/ruanyf/weekly/issues/7965) 投稿）

10、[TextGO](https://github.com/C5H12O5/TextGO)

![](https://cdn.beekka.com/blogimg/asset/202510/bg2025102204.webp)

一个跨平台的桌面应用，可以指定统一的快捷键，各种应用都适用，并能根据选中的内容，执行不同的操作。（[@C5H12O5](https://github.com/ruanyf/weekly/issues/7970) 投稿）

## AI 相关

1、[AICrop](https://aicrop.app/#upload)

![](https://cdn.beekka.com/blogimg/asset/202510/bg2025101702.webp)

使用 AI 模型裁剪图片的免费网页工具，自动生成适合不同社媒平台（如 Instagram、X/Twitter、TikTok）的图片。（[@indielucas](https://github.com/ruanyf/weekly/issues/7927) 投稿）

2、[免费 AI 图像生成器](https://freeaiimage.net/zh/)

![](https://cdn.beekka.com/blogimg/asset/202510/bg2025102203.webp)

免费的文生图网站，不需要注册，据说是作者用自己的几台 4090 搭建的，用的是千问模型。（[@rustflare](https://github.com/ruanyf/weekly/issues/7968) 投稿）

3、[XCodeReviewer](https://github.com/lintsinghua/XCodeReviewer)

![](https://cdn.beekka.com/blogimg/asset/202510/bg2025102302.webp)

大模型驱动的代码审计平台，为开发者提供代码质量分析和审查服务。（[@lintsinghua](https://github.com/ruanyf/weekly/issues/7975) 投稿）

4、[SLOCCount](https://tools.simonwillison.net/sloccount)

![](https://cdn.beekka.com/blogimg/asset/202510/bg2025102303.webp)

著名开发者 Simon Willison 使用 AI 生成的代码行数统计网站，分析一个项目到底有多少行代码，评估开发时间，参见[介绍文章](https://simonwillison.net/2025/Oct/22/sloccount-in-webassembly/)。

5、[播客生成器](https://github.com/justlovemaki/Podcast-Generator)（Podcast Generator）

![](https://cdn.beekka.com/blogimg/asset/202510/bg2025102113.webp)

开源的文本转播客工具，需要 OpenAI 密钥。（[@justlovemaki](https://github.com/ruanyf/weekly/issues/7967) 投稿）

6、[MuseBot](https://github.com/yincongcyincong/MuseBot/blob/main/README_ZH.md)

![](https://cdn.beekka.com/blogimg/asset/202510/bg2025102205.webp)

一个接入聊天软件的智能机器人，实现了 AI 对话与智能回复，支持多种大模型，可以接入 Telegram、飞书、钉钉、微信等平台。（[@yincongcyincong](https://github.com/ruanyf/weekly/issues/7972) 投稿）

## 资源

1、[EndlessWiki](https://www.endlesswiki.com)

![](https://cdn.beekka.com/blogimg/asset/202509/bg2025092704.webp)

世界第一本 AI 生成的百科全书，读者想查什么条目，AI 实时生成。

2、[ISBN Visualization](https://phiresky.github.io/isbn-visualization/)

![](https://cdn.beekka.com/blogimg/asset/202510/bg2025102101.webp)

世界上所有书籍的国际书号（ISBN），可视化成一个图书馆的书架。查询某本书，可以显示该书所在的书架，[代码开源](https://github.com/phiresky/isbn-visualization/)。（[@kohunglee](https://github.com/ruanyf/weekly/issues/7957) 投稿）

3、[Clone Wars](https://github.com/GorvGoyl/Clone-Wars)

![](https://cdn.beekka.com/blogimg/asset/202510/bg2025101605.webp)

这个仓库收集了各种流行网站（Airbnb, Amazon, Instagram, Netflix, TikTok 等）的开源克隆，已经超过100多个网站了。

## 图片

1、[江门地下中微子观测站](https://www.cnrs.fr/en/press/juno-giant-detector-unravel-mysteries-neutrinos)

2025年8月，广东江门的地下中微子观测站（JUNO）正式运行。

它位于阳江和台山两座核电站的中间位置，可以接收核电站产生的中微子。

![](https://cdn.beekka.com/blogimg/asset/202510/bg2025100910.webp)

它的核心装置是一个探测器，外形为直径35.4米的透明球形容器，放置在地下700米深处，用来探测中微子。

探测器内部填充了2万吨高灵敏度的液体闪烁体，任何中微子与这种液体的相互作用都会产生闪光。

透明球体周围安装了约43,212个光探测器，持续监测着球体，时刻准备着捕捉任何闪光的出现。

![](https://cdn.beekka.com/blogimg/asset/202510/bg2025100911.webp)

![](https://cdn.beekka.com/blogimg/asset/202510/bg2025100912.webp)

正是根据这些闪光，科学家才能够确定中微子的特性。

整个装置封装成一个球形水箱，水箱本身浸没在直径为44米超纯水池中，水池顶部有一个巨大的探测器，称为顶部跟踪器（下图），其作用是识别是否有混入的宇宙粒子，以避免与来自核电站的中微子混淆。

![](https://cdn.beekka.com/blogimg/asset/202510/bg2025100913.webp)

2、[乔卢特卡桥](https://zhuanlan.zhihu.com/p/346564115)

1996年到1998年，一家日本公司在中美洲国家洪都拉斯，建设了一座该国最长的桥“乔卢特卡桥”，长度为484米。

刚造好，就遇到了当年最大的台风。桥的本体没有受损，但是引桥都被摧毁了（下图）。

![](https://cdn.beekka.com/blogimg/asset/202510/bg2025102311.webp)

还没等洪都拉斯政府修复引桥，更糟糕的事情发生了，乔卢特卡河由于台风引发的洪水而直接改道了。

![](https://cdn.beekka.com/blogimg/asset/202510/bg2025102312.webp)

上图就是乔卢特卡桥现在的状况，只剩下一段孤零零的桥面，耸立在河边。

## 文摘

1、[开源项目如何可持续发展？](https://byroot.github.io/opensource/ruby/2025/10/09/dear-rubyists.html)

一个老生常谈的问题，开源项目怎么才能可持续地健康发展下去？

很多人会说，需要有公司为开发者的时间付费。

这么说固然没错，但是**更好的支持方式不是出钱，而是出人**。最著名的例子就是 Linux 内核，绝大多数代码贡献都来自那些从内核获利的公司的员工。

如果那些公司不出人，只给项目团队捐款，让他们自己去写代码，内核不可能发展得这么快、这么好。

另一个很好的例子是 Ruby 语言。2019年时，Shopify 公司的一位工程师见到了 Ruby 语言的创始人 Matz。

工程师问 Matz 需要什么，Matz 回答说：“我缺人手。” 

工程师回到公司商量以后，Shopify 的 Ruby 团队开始参与 Ruby 语言的开发，结果产出了大量成果，使得 Ruby 语言核心提交者增加了十几人。

如果那天 Matz 回答“我缺钱”，然后 Shopify 捐款数十万或数百万美元，这对 Ruby 其实未必有利。

首先，谁敢担保 Ruby 的开发方向和决策，以后不会受到 Shopify 的影响？某个功能被接受到底是因为它本身的优点，还是因为它来自一个大赞助商？Ruby 又敢不敢拒绝来自 Shopify 的提案？赞助商的偏好可能会左右项目的开发。

其次，钱就是这样，一旦有了，你会产生依赖。如果将来大赞助商退出，你就不得不裁员，停止一些项目等等。所以，接受赞助的实体和个人往往会不自觉地考虑捐赠者的偏好，这样资金才能源源不断地涌入。

我并不是说开源项目不应该接受捐助，而是说大额的捐助难免会产生一些副作用。

下一次，如果你想支持一个开源项目，除了捐款，更好的方式是投入项目开发，为创始人分担一些工作。

## 言论

1、

我们要习惯 AI 培养出来的一代学生，他们的屏幕上满是文字，脑子里却空无一物。

-- [《OpenAI “学习模式”的风险》](https://resobscura.substack.com/p/openais-new-study-mode-and-the-risks)

2、

最明智的举措不是追逐潮流，而是种下一棵树，让时间来发挥作用。树木不会在明天带来回报，它们十年后才会产生回报。它们默默地生长，使周围的一切都变得更好：树荫、价值、美感、寿命。

-- [《设计的复利》](https://designobserver.com/the-compound-interest-of-design-what-not-to-build/)

3、

OpenAI 发布了自家的浏览器 Atlas，但它其实是反浏览器，尽可能避免用户浏览互联网。比如，你用它搜索“泰勒·斯威夫特”，它会告诉你那是谁，但不会返回任何指向泰勒·斯威夫特个人网站的链接。

-- [《ChatGPT 的 Atlas：反 Web 的浏览器》](https://www.anildash.com/2025/10/22/atlas-anti-web-browser/)

4、

工程师不仅需要具备技术技能，还要具备软技能，也就是人际交往的技能。

如果你不理解人类社会的复杂性，就无法理解公司或团队的工作方式，最终影响到自己的产出和扩大影响力。

-- [《被低估的软技能》](https://utopianengineeringsociety.substack.com/p/new-series-underrated-soft-skills)

## 往年回顾

[技术公司的口号比拼](https://www.ruanyifeng.com/blog/2024/11/weekly-issue-323.html)（#323）

[任正非的三篇最新谈话](https://www.ruanyifeng.com/blog/2023/10/weekly-issue-273.html)（#273）

[程序员需要担心裁员吗？](https://www.ruanyifeng.com/blog/2022/09/weekly-issue-223.html)（#223）

[网络收音机的设计](https://www.ruanyifeng.com/blog/2021/08/weekly-issue-173.html)（#173）

（完）

