# 科技爱好者周刊（第 338 期）：重新思考 6G

这里记录每周值得分享的科技内容，周五发布。

本杂志[开源](https://github.com/ruanyf/weekly)，欢迎[投稿](https://github.com/ruanyf/weekly/issues)。另有[《谁在招人》](https://github.com/ruanyf/weekly/issues/6012)服务，发布程序员招聘信息。合作请[邮件联系](mailto:yifeng.ruan@gmail.com)（yifeng.ruan@gmail.com）。

## 图片

![](https://cdn.beekka.com/blogimg/asset/202502/bg2025021919.webp)

重庆巫山的悬崖上，有一座民宿，可以俯瞰三峡，图片是民宿的后院。（[via](https://news.qq.com/rain/a/20231001A03MJW00)）

## 重新思考 6G

上周，国际电气电子工程师学会（IEEE）的网络杂志《科技纵览》（IEEE Spectrum），发表了一篇文章[《重新思考 6G》](https://spectrum.ieee.org/5g-bandwidth)。

![](https://cdn.beekka.com/blogimg/asset/202502/bg2025021901.webp)

它提出一个很有意思的观点：**带宽需求可能已经饱和了**。

文章的大意是，对于绝大多数的普通用户来说，目前的网速已经够用了。上网速度即使进一步提高，消费者很可能无感。

它的证据是，手机的 5G 网络从2018年开始部署，已经6年多了，至今没有出现杀手级应用。**绝大多数应用的网速需求，4G 网络就能满足**。

为了让大家有一个概念，我简单列一下网速的数量级，4G 是每秒 100 Mb，5G 是每秒 1 Gb（1Gb 等于 1000Mb），拟议中的 6G 是每秒 10 Gb。

注意，这里的“b”是小写，表示比特位（bit）。平时使用的 MB 和 GB 的“B”是大写，表示字节（Byte），一个字节等于8个比特位。

大家知道吗，最吃带宽的应用，网速需求是多少？

视频应用对网速的需求最大，Netflix 的 4K 视频，网速要求是每秒 15 Mb，4G 网络下可以同时打开三、四个窗口播放。

只有极少数应用，网速需求达到了 5G 的门槛。 目前，网速要求最高的应用之一是微软飞行模拟器2024，达到了每秒 180 Mb。

![](https://cdn.beekka.com/blogimg/asset/202502/bg2025021902.webp)

这就是说，现阶段根本没有应用，必须用到每秒 1Gb 的网速。大多数用户从 4G 升级到 5G，不会有明显感知，更不要说将来从 5G 升级到 6G 了。

<u>结论就是，（对于普通用户）网络带宽可能到头了，目前的 5G 网速足以满足绝大多数人的需求</u>。

这有点像民航飞机，过去50年，大型喷气式民航飞机的飞行速度，基本没有变化，一直是每小时900公里左右。并不是造不出更快的飞机，而是这个速度是最佳平衡点，旅客可以接受，飞行成本也不会过高。

![](https://cdn.beekka.com/blogimg/asset/202502/bg2025021903.webp)

通信网络可能也到了这个阶段。5G 够用了，升级到 6G 不是那么迫切，也许很长一段时间都不会发生。一方面，市场需求不大，另一方面，即使升级到 6G，设备和流量的价格也会非常高昂，消费者很可能没有意愿买单。

这意味着，过去几十年来，一直轰轰烈烈、巨额投资的通信设备市场，将要放缓。电信公司的网络建设投资，将会大幅减少。

一旦通信公司不再能通过网络升级获得新客户，就必须采用其他手段，来发展业务：（1）流量降价；（2）提高网络的覆盖范围，减少信号差的地区；（3）提升客户服务。

当民航的飞行速度不再提高后，就出现了廉价航空公司。可以预期，未来也会出现廉价的通信商，出售非常便宜的流量。

## AI 动态（两则）

### AI 的研究模式 

2025年，AI 大模型的进展是什么？

**答案肯定是研究模式**。早期一问一答的对话，已经进化到了思考和推理。

遇到需要深入思考的问题，AI 会先思考框架、拆解步骤，再查找大量文献资料，分析整合出最后的结果，思考步骤还是很全面的。

国外，Google、OpenAI、Perplexity 等公司都已经纷纷上线了 Deep Research。国内，对标 Perplexity 的“[秘塔 AI](https://metaso.cn/)”也上线了新的研究模式。

![](https://cdn.beekka.com/blogimg/asset/202502/bg2025022004.webp)

它的背后是“双模型架构”：需要深度推理的部分，由满血版 DeepSeek R1 完成，需要快速响应的信息搜索、资料整合部分，由秘塔自研的模型完成。

下面是[一个例子](https://metaso.cn/s/tfrWtdF)，你要写一篇论文《基于区块链的碳信用交易系统》，研究模式就会给出思考步骤，最终生成研究框架。

![](https://cdn.beekka.com/blogimg/asset/202502/bg2025022003.webp)

再加上秘塔 AI 自己的学术数据库，保证了参考资料的真实性，使用下来发现有些回答会好于 DS 官网。

体验到这些是**完全免费**的，而且操作零难度。大家有需要研究和分析的问题，可以去[试试看](https://metaso.cn/)。

### VS Code 使用 DeepSeek 的方法

在 VS Code 编辑器，怎么使用 DeepSeek 模型？

国内用户的最简单方法，大概就是 [MarsCode 编程助手](https://zjsms.com/iPg5wXhX/)。

它最新的 VSCode 插件（1.1.62版本）和 JetBrains 插件（1.2.1.15版本），都支持 DeepSeek。已经安装的朋友，IDE 内直接更新，新安装可以去[官网下载](https://zjsms.com/iPg5wXhX/)。

![](https://cdn.beekka.com/blogimg/asset/202502/bg2025021906.webp)

使用时，在 AI 对话框下方，点击模型按钮，目前有三个模型：doubao-1.5-pro、DeepSeek R1/V3（满血版）。不需要任何配置，**全部免费使用**。

这三个模型的能力都很强，插件效果（代码解释、注释、修复、优化、上下文问答）都表现更好了，大家可以自己比较。其中，DeepSeek R1 模型在后台由火山方舟部署，TPS（每秒 Token 生成速度）、TTFT（首 token 出现等待时间）等指标，[第三方测评结果](https://mp.weixin.qq.com/s?__biz=Mzg5NTc0MjgwMw==&mid=2247514264&idx=1&sn=d3ffa53fce70b6dc148c4a6e9df3537a&scene=58&subscene=0)称，其 DS 方案性能排名表现优异。

![](https://cdn.beekka.com/blogimg/asset/202502/bg2025021907.webp)

这一次，MarsCode 官方正在举办“体验有礼”活动，<u>在社交平台（小红书、CSDN、掘金开发者社区）分享自己的使用截图和不少于30字的使用心得</u>，艾特他们的官方账号“@豆包MarsCode”，就可以在他们的官方微信账号参与抽奖，中奖率高。

另外，MarsCode 团队上个月发布了一款 AI 原生的 IDE ———— [Trae](https://sourl.cn/6P5AGW)，注重提升整体的 AI 体验，大家也可以试试。

## 科技动态

1、[时间码的身份验证](https://www.schneier.com/blog/archives/2025/02/pairwise-authentication-of-humans.html)

很多应用采用一次性时间码（TOTP），按照当前时间和用户生成一串数字，来验证用户身份。

![](https://cdn.beekka.com/blogimg/asset/202502/bg2025021507.webp)

一个程序员想到，完全可以用这种方法，验证是否见到了本人。

举例来说，A 和 B 从未见过，如何在见面时，确认来的是本人？

他们可以访问[这个网址](https://ksze.github.io/PeerAuth/)，输入双方的名称，系统分别为他们生成一个二维码。

他们将自己的二维码，保存到手机的验证器，以便生成时间码。见面时，如果双方的时间码一致，就表明来的是本人。

2、[机载大地磁场探测器](https://www.cas.cn/cm/202502/t20250219_5047510.shtml)

中国科学院最近研制了，中国首套机载大地磁场探测器。

![](https://cdn.beekka.com/blogimg/asset/202502/bg2025021908.webp)

建设高原铁路，需要了解沿线的磁场情况。但是，沿线都是无人居住的高原山区，人工勘探很危险，成本也非常高。

科研人员就将磁场探测器，安装在一个环形支架上，吊挂在直升飞机下方。

![](https://cdn.beekka.com/blogimg/asset/202502/bg2025021909.webp)

飞机在飞行过程中，就能读取磁场数据，完成探测。

![](https://cdn.beekka.com/blogimg/asset/202502/bg2025021910.webp)

![](https://cdn.beekka.com/blogimg/asset/202502/bg2025021911.webp)

3、[被缚的机器狗](https://www.instagram.com/p/DGE5M9Yuhwm/)

一个日本艺术家创作了一个叫做《被缚的机器狗》的作品。

![](https://cdn.beekka.com/blogimg/asset/202502/bg2025021916.webp)

只见两条机器狗被铁链拴住，不停走来走去，有时会趴着休息。

![](https://cdn.beekka.com/blogimg/asset/202502/bg2025021917.webp)

如果有人经过，它们会冲过来，好像要攻击似的。

![](https://cdn.beekka.com/blogimg/asset/202502/bg2025021918.webp)

但是，铁链把它们拉住了，它们最后只能退回去，悻悻得叫几声。

看着这个作品，给人的感觉很复杂：恐怖、怜悯、荒谬……

4、**其他**

（1）NBA 的苹果 Vision Pro 应用，添加了[直播的 3D 桌面模式](https://www.uploadvr.com/nba-apple-vision-pro-app-tabletop-view/)，球场的实时画面变成了一张 3D 棋盘。

![](https://cdn.beekka.com/blogimg/asset/202502/bg2025021506.webp)

（2）美国宇航局宣布，一颗名为“2024 YR4”、直径40米～90米的[小行星](https://www.qlwb.com.cn/detail/25693204.html)，在2032年撞击地球的概率是三十分之一（3.1%）。如果相撞，可能毁灭一个城市。

![](https://cdn.beekka.com/blogimg/asset/202502/bg2025021912.webp)

## 文章

1、[废弃 Create React App](https://react.dev/blog/2025/02/14/sunsetting-create-react-app)（英文）

![](https://cdn.beekka.com/blogimg/asset/202502/bg2025021505.webp)

React 官方宣布，正式废弃 Create React App，建议通过框架来使用，也就是不建议直接用 React。

2、[Unicode 字符的迷你柱状图](https://blog.jonudell.net/2021/08/05/the-tao-of-unicode-sparklines/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202408/bg2024082702.webp)

本文介绍怎么使用 Unicode 字符，来生成迷你的柱状图（上图）。

3、[多页应用不输给单页应用](https://htmx.org/essays/you-cant/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202411/bg2024111805.webp)

单页应用（SPA）是网页应用的主流，本文提出多页应用也可以做到 SPA 的各种优点。

4、[详解 Linux 硬链接和软链接](https://bhoot.dev/2024/on-linux-file-and-links/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202411/bg2024111910.webp)

Linux 有两种特殊文件：硬链接和软链接，本文详细解释它们的区别。

5、[了解 CSS 的 overflow: clip](https://ishadeed.com/article/overflow-clip/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202411/bg2024112001.webp)

CSS 的 overflow 属性，有一个 clip 值，可以截去溢出部分。通过它，可以做出很多页面效果。

6、[什么是网页的元信息？](https://www.thisdaysportion.com/posts/dublin-core-what-is-it-good-for)（英文）

![](https://cdn.beekka.com/blogimg/asset/202409/bg2024090301.webp)

本文介绍如何在网页中插入元信息（比如作者、关键词、内容描述等等），便于计算机检索。

7、[如何安装 ADB](https://www.xda-developers.com/install-adb-windows-macos-linux/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202501/bg2025010503.webp)

ADB 是电脑连接安卓手机必需的，本文分别介绍 Windows/macOS/Linux 如何安装 ADB。

## 工具

1、[ElevenReader](https://elevenreader.io/)

![](https://cdn.beekka.com/blogimg/asset/202502/bg2025021607.webp)

一个手机 App（支持 iOS 和安卓），把电子书转成有声书，支持中文，但是内置的老外语音读起来很生硬。

2、[GIXY](https://github.com/dvershinin/gixy)

一个开源的命令行工具，检查 NGINX 的配置文件是否有错误。

3、[uchū](https://uchu.style/)

![](https://cdn.beekka.com/blogimg/asset/202502/bg2025021803.webp)

一款互联网调色板，提供预设的 CSS 配色方案。它采用新的`oklch()`函数声明颜色，这里有一篇[`oklch()`的介绍文章](https://evilmartians.com/chronicles/oklch-in-css-why-quit-rgb-hsl)。

4、[Bun Shell](https://bun.sh/blog/the-bun-shell)

![](https://cdn.beekka.com/blogimg/asset/202407/bg2024072603.webp)

使用 Bun 作为解释器的 Shell 环境，可以在命令行直接运行 JavaScript 脚本。

5、[Spotube](https://github.com/KRTirtho/spotube)

![](https://cdn.beekka.com/blogimg/asset/202407/bg2024072604.webp)

一个另类的 Spotify 跨平台客户端，从 Spotify 获取数据，然后播放来自其他音源（比如 YouTube）的音频，从而不必购买会员。

6、[Kener](https://github.com/rajnandan1/kener)

![](https://cdn.beekka.com/blogimg/asset/202407/bg2024072609.webp)

一个自托管的状态页，用来监控指定网站是否正常在线。类似工具还有 [Uptime Kuma](https://github.com/louislam/uptime-kuma)。

7、[gtrash](https://github.com/umlx5h/gtrash)

![](https://cdn.beekka.com/blogimg/asset/202407/bg2024072618.webp)

Linux 和 Mac 系统的被删除文件的垃圾桶，可以在终端里面还原文件，参见[介绍文章](https://linuxiac.com/gtrash-linux-command/)。

## AI 工具

1、[DeepSRT](https://chromewebstore.google.com/detail/deepsrt-experience-the-fa/mdaaadlpcanoofcoeanghbmpbdbhladd)

![](https://cdn.beekka.com/blogimg/asset/202502/bg2025021503.webp)

一个 Chrome 插件，观看 Youtube 视频时，在浏览器侧边栏展示视频总结和字幕。（[@tsungmin](https://github.com/ruanyf/weekly/issues/6108) 投稿）

2、[Deep Research Web UI](https://github.com/AnotiaWang/deep-research-web-ui)

![](https://cdn.beekka.com/blogimg/asset/202502/bg2025021504.webp)

AI 深度研究的前端 UI，可以接入各种大模型，结合搜索引擎和网页抓取，对各种主题进行迭代式深入研究。（[@AnotiaWang](https://github.com/ruanyf/weekly/issues/6110) 投稿）

3、[AI 翻译助手](https://github.com/ItusiAI/AI-Translation-Assistant-Pro)

![](https://cdn.beekka.com/blogimg/asset/202502/bg2025021701.webp)

开源的 AI 翻译网站。（[@321208008](https://github.com/ruanyf/weekly/issues/6121) 投稿）

4、[GitSeek](https://gitseek.dev/)

![](https://cdn.beekka.com/blogimg/asset/202502/bg2025022001.webp)

给定一个代码库，使用自然语言搜索需要的代码片段。（[@i-richardwang](https://github.com/ruanyf/weekly/issues/6132) 投稿）

5、[AI 多人聊天室](https://github.com/maojindao55/botgroup.chat)

![](https://cdn.beekka.com/blogimg/asset/202502/bg2025022002.webp)

一个开源的、基于 React和 Cloudflare Pages 的 AI 聊天室，跟多个 AI 模型同时聊天。（[@maojindao55](https://github.com/ruanyf/weekly/issues/6133) 投稿）

## 资源

1、[四级词汇手册](https://github.com/vxiaozhi/vocabulary-book-by-deepseek)

![](https://cdn.beekka.com/blogimg/asset/202502/bg2025021501.webp)

使用 DeepSeek 编写的四级词汇手册，提供单词的词义、词根、例句、辅助记忆、助记图像等。（[@vxiaozhi](https://github.com/ruanyf/weekly/issues/6107) 投稿）

2、[唐韵](https://www.chinesepoems.org/)

![](https://cdn.beekka.com/blogimg/asset/202502/bg2025021502.webp)

一款界面简洁的古诗词网站。（[@LLSean](https://github.com/ruanyf/weekly/issues/6086) 投稿）

3、[News Digest](https://news-digest-nine.vercel.app/)

![](https://cdn.beekka.com/blogimg/asset/202502/bg2025021805.webp)

欧美科技网站头条新闻的 AI 摘要，实时更新。

4、[Discuo](https://discuo.com)

![](https://cdn.beekka.com/blogimg/asset/202501/bg2025010602.webp)

一个极简主义的论坛，不需要注册就能发言，类似于 Reddit，可以创建各种频道。

## 图片

1、[饼图与柱状图](https://perthirtysix.com/visualizing-data-is-an-art)

同样的百分比数据，分别使用饼图和柱状图表示，可读性不一样。

首先是饼图。

![](https://cdn.beekka.com/blogimg/asset/202502/bg2025021601.webp)

其次是柱状图。

![](https://cdn.beekka.com/blogimg/asset/202502/bg2025021602.webp)

大家觉得，哪张图更易读？

一般来说，柱状图更易读，饼图比较难读。原因是人类比较长度的能力远强于比较角度的能力。

2、[瑞士护照](https://www.swissinfo.ch/chi/politics/%E6%96%B0%E7%89%88%E7%91%9E%E5%A3%AB%E6%8A%A4%E7%85%A7%E4%B8%8A%E6%9E%B6/48023134)

新版的瑞士护照，每一页都有紫外线水印。

紫外线灯下，护照封面会显示瑞士国徽（一个十字）。

![](https://cdn.beekka.com/blogimg/asset/202502/bg2025021913.webp)

其他页面会显示山脉的等高线和地图。

![](https://cdn.beekka.com/blogimg/asset/202502/bg2025021914.webp)

![](https://cdn.beekka.com/blogimg/asset/202502/bg2025021915.webp)

## 文摘

1、[旅行50年的一点经验](https://kk.org/thetechnium/50-years-of-travel-tips/)

作者：凯文·凯利

我已经认真旅行了50多年，学到了很多东西。

旅行有两种模式。一种是休息模式，人们通过旅行来逃避常规的工作，进行放松和重振精神。这种模式下，你会去轻松的地方，悠闲地度过假期。

另一种是体验模式，你旅行是为了发现新事物，获得新体验，投入一场结果不确定的冒险，遇见异类。这种旅行是一种学习，我的经验主要适合这种模式。

![](https://cdn.beekka.com/blogimg/asset/202502/bg2025022005.webp)

很多人旅行有一个误区，就是想看遍所有地方。因为你很可能再也不会来了，所以忍不住想最大化你的行程。既然我们在 X，而 Y 和 Z 又很近，我们不妨去看看 Y 和 Z 吧……

其实，在更少的地方待更长的时间，远比把时间花在一堆地方好得多。你更应该放慢旅行的速度，多休息。

旅行最难忘的时刻——与陌生人的交谈、被邀请参观、发现隐藏的地点——通常发生在你停下来的时候。

你可以前往旅行成本最低的地方，从而同样的预算，就可以待更长的时间。而且，便宜的、非主流的目的地通常值得一游。

为了获得最佳的旅行体验，你要么投入很多钱，要么投入很多时间。这两种选择中，时间比金钱好得多。因为金钱可以买到时间，但金钱买不到时间所能提供的东西。

## 言论

1、

我发现，AI 大模型生成代码时，总是优先使用2022年11月 ChatGPT 发布之前流行的技术。AI 给予这些技术的优先待遇，将扩展它们的采用和寿命。

-- [《人工智能正在抑制技术采用》](http://vale.rocks/posts/ai-is-stifling-tech-adoption)

2、

我认为欧洲真的要加强。在过去的20年里，美国经济和中国经济的增长速度远远快于欧洲经济

如果不放松对人工智能技术的严格限制，欧洲有可能成为一个“博物馆”。

-- [克里斯特松](https://finance.sina.cn/7x24/2025-02-20/detail-inemcpfi9161031.d.html)，瑞典首相

3、

在商业领域，最先做到的人有优势。但是，在研究和学术领域，成功往往不属于最先理解的人，而属于理解得最好的人，真正的优势来自于深刻、基础性的见解。

-- [《我在麻省理工学院的时光》](http://muratbuffalo.blogspot.com/2025/02/my-time-at-mit.html)

4、

先行者开辟了道路，后来者用更少的计算资源迅速缩小差距，这就存在了先发劣势。

-- [Hacker News 读者](https://news.ycombinator.com/item?id=43112313)

5、

以谦逊和好奇的态度对待工作时，你会学到更多，参与得更充分。初学者的心态是一种财富。保持真实的自我有助于你找到自己真正的使命。

-- [《我在麻省理工学院的时光》](http://muratbuffalo.blogspot.com/2025/02/my-time-at-mit.html)

## 往年回顾

[AI 没有护城河](http://www.ruanyifeng.com/blog/2024/03/weekly-issue-291.html)（#291）

[中国的增长动力在内陆](http://www.ruanyifeng.com/blog/2023/02/weekly-issue-241.html)（#241）

[一个程序员的财务独立之路](http://www.ruanyifeng.com/blog/2022/01/weekly-issue-191.html)（#191）

[封闭系统的胜利](http://www.ruanyifeng.com/blog/2021/01/weekly-issue-141.html)（#141）

（完）

