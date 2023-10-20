# 科技爱好者周刊（第 274 期）：加密通信的最后一块拼图

这里记录每周值得分享的科技内容，周五发布。

本杂志[开源](https://github.com/ruanyf/weekly)，欢迎[投稿](https://github.com/ruanyf/weekly/issues)。另有[《谁在招人》](https://github.com/ruanyf/weekly/issues/3529)服务，发布程序员招聘信息。合作请[邮件联系](mailto:yifeng.ruan@gmail.com)（yifeng.ruan@gmail.com）。

## 封面图

![](https://cdn.beekka.com/blogimg/asset/202310/bg2023101507.webp)

上图是最近落成的成都科幻馆，位于成都市郫都区菁蓉湖畔，可用于举办展览、会议等各种活动。10月18日，第81届世界科幻大会和雨果奖在这里开幕。（[via](https://www.ithome.com/0/724/950.htm)）

## 加密通信的最后一块拼图

十一期间，世界最大的 CDN 服务商 Cloudflare 发了[一篇博客文章](https://blog.cloudflare.com/announcing-encrypted-client-hello/)，宣称解决了“加密通信的最后一块拼图”。

![](https://cdn.beekka.com/blogimg/asset/202310/bg2023101508.webp)

这件事挺重要的，可能会影响很多人，本周我想好好谈谈。

我先问大家，HTTPS 链接是加密通信吗？

![](https://cdn.beekka.com/blogimg/asset/202310/bg2023101601.webp)

你可以说它是，因为通信内容确实是加密的，外界无法窥测和篡改。

但是，它又不是彻底的加密通信，**有一个地方是不加密的，那就是域名**。中间人可以看到，你访问什么网站。

为什么域名不加密呢？

因为加密的密钥放在服务器上，而服务器只有知道域名，才知道发送哪一把密钥。所以，密钥的发送，必须在知道域名之后。

Cloudflare 解决的就是这个问题，它发明了一种新技术，叫做 ECH。

![](https://cdn.beekka.com/blogimg/asset/202310/bg2023101704.webp)

ECH 非常巧妙地解决了域名加密。它采用双层格式，也就是说，域名分了两层。外层是明文的，统一发送到 cloudflare-ech.com，内层是加密的，存放真正的域名。

**中间人只能看到你在访问 cloudflare-ech.com，看不到内层的域名**，从而达到保密的效果。

好了，技术介绍就说到这里，下面就是我的感想。我当时一看到 ECH 的细节，不禁就产生了疑问。

如果 cloudflare-ech.com 发生故障，或者种种原因无法访问，那么所有 Cloudflare 托管的网站是否都无法访问？

这是很现实的问题，因为 Cloudflare 是世界最大 CDN 服务商，很多网站都放在上面。而且，它对免费用户都启用了 ECH，还无法关闭（这是付费功能），等于是让免费用户当小白鼠。

我今天写这个话题，就是想提醒大家。**如果由于 ECH 的问题，托管在 Cloudflare 的网站无法访问，有两个解决办法**。

一个是站长向 Cloudflare 付费，关了 ECH；另一个是访问者不要使用加密 DNS，因为 ECH 依赖加密 DNS，没有了它，就不会触发 ECH。

## [活动] 稀土掘金创新论坛

下周六（10月28日），北京有一个高层次的“稀土掘金创新论坛”活动。

它的主题是“**AI 时代下的管理变革**”，邀请了13位中国互联网行业知名的专家、学者和企业高管，进行现场畅谈。 

![](https://cdn.beekka.com/blogimg/asset/202310/bg2023101813.webp)

活动采用“主论坛 + 闭门会”的形式，演讲者逐一分享各自企业的 AI 创新和行业趋势，探讨这一轮生成式 AI 大潮带来的挑战和机遇。

活动地点是北京新云南皇冠假日酒店。**希望了解嘉宾见解和业内 AI 动态，进行面对面交流的朋友，不要错过了。**

主论坛价值3999元的门票，限时开放**免费申请**。欢迎点击[这个链接](https://www.bagevent.com/event/8047254?bag_track=ruanyifeng)，或者扫描上方二维码，现在就可以预约主会场入场券，先到先得。

## 科技动态

1、[变幻图案的裙子](https://people.com/adobe-debuts-interactive-dress-8358152)

上周的 Adobe MAX 2023 大会上，Adobe 展示了一条会变换图案的裙子。

![](https://cdn.beekka.com/blogimg/asset/202310/bg2023101607.webp)

项目负责人 Christine Dierk 亲自穿着这条裙子登上舞台。它由许多小鳞片组成，可以不停地改变图案。

它有一个开关来控制，也可以用手机无线控制。它可以显示 Adob​​e Firefly、Adobe After Effects、Adob​​e Illustrator 等软件生成的图案。

![](https://cdn.beekka.com/blogimg/asset/202310/bg2023101608.webp)

可以想象，这种衣服对女装行业，未来可能有巨大冲击，因为每天都可以下载不同颜色和图案。不过，Adobe 计划首先将其用于手提包。

2、[长颈鹿的脖子](https://www.nytimes.com/2022/06/02/science/giraffe-neck-evolution.html)

长颈鹿的脖子为什么那么长？

进化论的解释是，为了吃到更高的树叶。但是，一项新的研究认为，这可能是为了获得打架优势。

![](https://cdn.beekka.com/blogimg/asset/202308/bg2023082101.webp)

在中国的准噶尔盆地，发现了一块长颈鹿祖先的化石。它的脖子并没有很长，但是头部有一块扁平的骨骼，就像头盔一样。

![](https://cdn.beekka.com/blogimg/asset/202308/bg2023082102.webp)

科学家认为，这可能表明，它们同类之间的争斗采用撞头的形式。为了获得争斗优势，它们的脖子就变得越来越长了。

3、[录屏软件值多少钱？](https://www.atlassian.com/blog/announcements/atlassian-acquires-loom)

澳大利亚软件巨头 Atlassian 上周宣布，以10亿美元收购录屏软件 Loom。谁能想到，一个录屏软件可以值这么多。

![](https://cdn.beekka.com/blogimg/asset/202310/bg2023101304.webp)

Loom 成立于2015年，只是一个 Chrome 插件（下图），后来陆续发布了桌面端和手机端。

![](https://cdn.beekka.com/blogimg/asset/202310/bg2023101302.webp)

它会把你的录屏自动发到云端，生成一个链接，你把这个 URL 发给其他人，对方就能在 Loom 的网站看到这个视频（下图）。

![](https://cdn.beekka.com/blogimg/asset/202310/bg2023101303.webp)

它对企业用户非常有用，有些事情说不清，录一段屏就能让别人明白。它现在有20万付费用户，每月生成500万段视频，就能价值10亿美元。

这件事告诉我们，一个很普通的功能，如果做到极致，也会身价非凡。

4、[谷歌的主页实验](https://arstechnica.com/gadgets/2023/10/google-com-tests-a-news-filled-homepage-just-like-bing-and-yahoo/)

谷歌自从成立至今，主页始终只有一个搜索框。

![](https://cdn.beekka.com/blogimg/asset/202310/bg2023101613.webp)

但是，这种日子可能要结束了。根据报道，谷歌正在印度测试新的主页，上面会显示新闻、天气和股票。

![](https://cdn.beekka.com/blogimg/asset/202310/bg2023101614.webp)

虽然，谷歌强调这只是一个小范围的实验，未必会推广。但是，这让我们看到，随着时间的流逝，谷歌终究变得越来越像百度。

## 文章

1、[Telegram 创始人及其加密野心](https://finance.sina.cn/blockchain/2023-10-17/detail-imzrkyrm8917643.d.html)（中文）

![](https://cdn.beekka.com/blogimg/asset/202310/bg2023101810.webp)

即时通讯软件 Telegram 创始人的传奇故事。

2、[Linux 中如何安全地抹去磁盘数据？](https://mp.weixin.qq.com/s/w-pMU3_TD3dEPoW-XEde-A)（中文）

文件管理器或者 rm 命令，并不能安全地删除数据。本文介绍 Linux 中常见的三个命令，安全地抹去磁盘数据。（[@xxxsalted](https://github.com/ruanyf/weekly/issues/3566) 投稿）

3、[CSS 嵌套来了](https://webkit.org/blog/14571/css-nesting-and-the-cascade/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202310/bg2023100513.webp)

以前的 CSS 不支持嵌套的写法。但是，现在 Firefox 和 Safari 的正式版本，都已经支持这种写法了（上图）。 

4、[CSS 重置详解（2023版）](https://chriscoyier.net/2023/10/03/being-picky-about-a-css-reset-for-fun-pleasure/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202310/bg2023101611.webp)

著名 CSS 作者 Chris Coyier 的最新文章，解释浏览器的 CSS 重置（CSS reset）每一行的意思。 

5、[我用 Web Components 开发了自己的网站](https://www.thesoftwarephilosopher.com/articles/2023-08-07-modern-90s-web-dev.html)（英文）

![](https://cdn.beekka.com/blogimg/asset/202308/bg2023080806.webp)

作者记录怎么使用 Web Components 这种技术，开发自己的网站，他对结果非常满意。如果你想了解 Web Components，这是一篇不错的参考资料。

6、[我的创业技术栈](https://getwaitlist.com/blog/solo-dev-startup-stack)（英文）

![](https://cdn.beekka.com/blogimg/asset/202308/bg2023080807.webp)

作者记录了自己创业所使用的各种 SaaS 服务，免费的优先。

7、[终端软件的新时代](https://www.trickster.dev/post/back-to-the-terminal-the-new-era-of-cli-and-tui-software/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202308/bg2023080909.webp)

GUI（图形界面）是目前的主流，但是这些年来 CLI（命令行）软件也一直在发展，变得越来越好用。本文介绍近年出现的一些新的 CLI 软件，可以替代传统软件。

8、[探索 EXIF](https://hturan.com/writing/exploring-exif)（英文）

![](https://cdn.beekka.com/blogimg/asset/202309/bg2023090702.webp)

本文介绍如何从 iPhone 照片提取 EXIF，并将它们放入数据库，检索各种有趣的信息。

## 工具

1、[Mycelite](https://github.com/mycelial/mycelite)

一个 SQLite 扩展，用来从一个 SQLite 实例同步到另一个，适合从本地向服务端同步数据。

2、[Pictode](https://github.com/JessYan0913/pictode)

![](https://cdn.beekka.com/blogimg/asset/202310/bg2023101901.webp)

一个开源的网页绘图编辑器。（[@JessYan0913](https://github.com/ruanyf/weekly/issues/3567) 投稿）

3、[Squircle-CE](https://github.com/massivemadness/Squircle-CE)

![](https://cdn.beekka.com/blogimg/asset/202306/bg2023062813.webp)

一个开源的安卓代码编辑器，在手机上开发代码。

4、[LocalSend](https://localsend.org/)

![](https://cdn.beekka.com/blogimg/asset/202310/bg2023101903.webp)

一款开源的跨平台文件传送软件，不需要互联网连接，依靠共享 Wifi 分享文件。

5、[Uninstallr](https://uninstalr.com/)

![](https://cdn.beekka.com/blogimg/asset/202308/bg2023081902.webp)

一个免费的 Windows 卸载程序，号称可以准确、完整地卸载各种 Windows 软件，残留最少，参见[作者自述](https://jv16powertools.com/blog/comparing-windows-uninstallers-and-making-uninstalr/)。

6、[Auto-i18n](https://github.com/linyuxuanlin/Auto-i18n)

它使用 GitHub Actions 和 ChatGPT，将仓库里面的 Markdown 文件翻译成其他语言，适合制作网站的国际化版本。（[@linyuxuanlin](https://github.com/ruanyf/weekly/issues/3564) 投稿）

7、[在线 ffmpeg](https://ffmpeg-online.vercel.app/)

![](https://cdn.beekka.com/blogimg/asset/202310/bg2023101610.webp)

网页版的 ffmpeg，可以离线在网页上执行 ffmpeg 命令行，来编辑视频。

8、[little-rat](https://github.com/dnakov/little-rat)

![](https://cdn.beekka.com/blogimg/asset/202308/bg2023082302.webp)

一个 Chrome 插件，用来统计并关闭其他插件发出的 HTTP 请求，可以了解插件是否在偷偷上传数据。

9、[Fooocus](https://github.com/lllyasviel/Fooocus)

![](https://cdn.beekka.com/blogimg/asset/202308/bg2023081304.webp)

一个桌面应用，可以在离线条件下，通过文本生成图片。

10、[try](https://github.com/binpash/try)

![](https://cdn.beekka.com/blogimg/asset/202306/bg2023062508.webp)

一个 Linux 沙盒程序，让你在更改系统（比如安装程序或运行脚本）之前，先在沙盒中运行命令并检查效果。

## 资源

1、[谷歌编程竞赛试题](https://zibada.guru/gcj/)（Google Coding Competitions）

![](https://cdn.beekka.com/blogimg/asset/202306/bg2023060304.webp)

这个网站提供谷歌编程竞赛历年的真题。

2、[数据库的数据库](https://dbdb.io/)

![](https://cdn.beekka.com/blogimg/asset/202308/bg2023083002.webp)

这个网站收集各种数据库的资料，目前一共有900多个数据库。

3、[顶级域名统计](https://github.com/tb0hdan/domains/blob/master/STATS.md)

这个仓库提供所有顶级域名的排名，按照各个域名的网站数量为序。

4、[Nix start](https://gitlab.com/engmark/nix-start)

软件包管理工具 Nix 的入门教程。

5、[Flash 博物馆](https://flashmuseum.org/)

![](https://cdn.beekka.com/blogimg/asset/202307/bg2023072914.webp)

该网站收集各种以前的 Flash 作品，并自带播放器，可以在线播放。

## 图片

1、[章鱼、海马、水母](https://www.npr.org/sections/pictureshow/2022/06/25/1103324203/octopus-seahorse-jellyfish-national-geographic-liittschwager)

美国《国家地理》杂志的一位摄影师，专门拍摄章鱼、海马、水母，最近出版了一本摄影集。

他拍摄的章鱼、海马、水母，都让人感到与众不同。下图是章鱼。

![](https://cdn.beekka.com/blogimg/asset/202206/bg2022062706.webp)

![](https://cdn.beekka.com/blogimg/asset/202206/bg2022062707.webp)

海马

![](https://cdn.beekka.com/blogimg/asset/202206/bg2022062708.webp)

![](https://cdn.beekka.com/blogimg/asset/202206/bg2022062709.webp)

水母

![](https://cdn.beekka.com/blogimg/asset/202206/bg2022062710.webp)

![](https://cdn.beekka.com/blogimg/asset/202206/bg2022062711.webp)

2、[猫头鹰的伪装](https://mossandfog.com/impressive-owl-camouflage-on-display-can-you-spot-them/)

猫头鹰非常善于伪装，可以很好地融入周围环境，不被猎物发现。

标题链接里面，有很多猫头鹰的伪装照片。下面就是其中的两张，你能看出里面有猫头鹰吗？

![](https://cdn.beekka.com/blogimg/asset/202211/bg2022111004.webp)

![](https://cdn.beekka.com/blogimg/asset/202211/bg2022111005.webp)

## 文摘 

1、[人造重力](https://www.popularmechanics.com/space/rockets/a8965/why-dont-we-have-artificial-gravity-15425569/)

几乎所有跟宇宙飞船有关的科幻电影，都有一个共同的 Bug，那就是它们里面的人造重力系统。

![](https://cdn.beekka.com/blogimg/asset/202310/bg2023101804.webp)

我们知道，太空没有重力，宇航员在飞行过程中，应该处于失重状态。

但是，在这些影视作品中，人们在船舱里面走来走去，就像在地球上一样。实际上，这是不可能的。它们这样拍摄，只是因为人造重力使得观众更容易产生共鸣，拍摄起来也更容易。

为什么宇宙飞船无法安装人造重力呢？

因为在飞船（或空间站）上产生人造重力，最现实的方法是让飞船围着一个点旋转，从而产生向心力。对着内部的人来说，会感到一种向着“地板”的拉力，以此模拟重力。

![](https://cdn.beekka.com/blogimg/asset/202310/bg2023101805.webp)

在一艘这种方式产生人造重力的宇宙飞船中，你会垂直于飞船的“墙”行走，墙将成为地板，而原来的飞船地板将成为墙。

![](https://cdn.beekka.com/blogimg/asset/202310/bg2023101806.webp)

那么，为什么我们还没有建造这种圆环式的飞船呢？

问题在于尺寸。为了产生足够的向心力，旋转速度必须很快，飞船体积越小，旋转速度就越快。由于人体经受不住快速旋转，所以就不得不建造大型飞船，才能把旋转变得非常缓慢。

地球的重力为 1g，假设旋转速度为每天（24小时）旋转一圈，请问产生 1g 向心力的圆环需要多大？

计算结果是，这个圆环的直径约为371万公里，自转速度为486,000公里/小时。作为对比，地球直径是1.27万公里。

![](https://cdn.beekka.com/blogimg/asset/202310/bg2023101807.webp)

所以，飞船想在飞行过程中，实现人造重力是不现实的。宇航员想获得重力，只能降落其他行星的表面。

网上有[一个视频](https://erikwernquist.com/one-revolution-per-minute)，名字叫做《每分钟一转》（one revolution per minute），模拟向心力产生人造重力的宇宙飞船内部的生活，拍得非常好，推荐观看。

![](https://cdn.beekka.com/blogimg/asset/202310/bg2023101808.webp)

## 言论

1、

世界上有成千上万的聪明人，他们可以创办公司，也可以不创办。外界只要在适当的地方施加一些小小的推动，世界就会涌现一大批本来不存在的创业企业。

-- [保罗·格雷厄姆](https://www.tonykulesa.com/p/a-relatively-small-amount-of-force)，硅谷创业导师

2、

人们一直有一种误解，认为 Tailwind 与 Bootstrap 是竞争关系。但是，它们是两个不同层面的东西。Bootstrap 提供了 CSS 组件，而 Tailwind 只是一种更快的 CSS 书写方式。

-- [Hacker News 用户](https://news.ycombinator.com/item?id=37144502)  

3、

建立长期月球基地的价值并不大，至少不如火星基地大。在月球上，你要么被高温炙烤两周，然后被低温冷冻两周，要么在两极地区被永久冷冻。火星的大气层虽然很薄，但可以从中获取氮气、氧气、微量的氢气，以及源源不断的碳。月球没有大气层，接近真空，从那里很难大量提取有用的东西。

-- [Hacker News 读者](https://news.ycombinator.com/item?id=37221847)

4、

产品是资产，代码是负债。

你的产品解决了客户的问题，因此是你的资产。代码则是创造资产的成本。你拥有的代码越多，阅读、测试、更改和理解所付出的成本就越高。

-- [《我的工程公理》](https://martinrue.com/my-engineering-axioms/)

5、

程序员的任务不仅仅是解决今天的问题，还要确保你的代码不会成为明天的问题。

-- [《好的代码就像写给接手者的一封情书》](https://addyosmani.com/blog/good-code/)

## 往年回顾

[脸书的公司入职教育](http://www.ruanyifeng.com/blog/2022/10/weekly-issue-227.html)（2022 #227）

[iPad 的真正用途](http://www.ruanyifeng.com/blog/2021/09/weekly-issue-177.html)（2021 #177）

[未来人人开发软件，几乎没人编码](http://www.ruanyifeng.com/blog/2020/09/weekly-issue-127.html)（2020 #127）

[韩剧《阿尔布拉罕宫的回忆》](http://www.ruanyifeng.com/blog/2019/10/weekly-issue-77.html)（2019 #77）

（完）

