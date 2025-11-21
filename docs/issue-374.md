# 科技爱好者周刊（第 374 期）：6GHz 的问题

这里记录每周值得分享的科技内容，周五发布。

本杂志[开源](https://github.com/ruanyf/weekly)，欢迎[投稿](https://github.com/ruanyf/weekly/issues)。另有[《谁在招人》](https://github.com/ruanyf/weekly/issues/8003)服务，发布程序员招聘信息。合作请[邮件联系](mailto:yifeng.ruan@gmail.com)（yifeng.ruan@gmail.com）。

## 封面图

![](https://cdn.beekka.com/blogimg/asset/202511/bg2025111209.webp)

香港湾仔新建成的“水上运动及康乐主题区”，是维多利亚港首个没有栏杆的堤岸，游人可拾级而下亲近海水。（[via](https://www.hfc.org.hk/tc/hss/water-sports-and-recreation-precinct-wan-chai)）

## 6GHz 的问题

本周的[新闻](https://www.lightreading.com/wifi/mobile-operators-beat-wi-fi-for-upper-6ghz-in-europe)，欧洲做出决定，6GHz 怎么分配。

![](https://cdn.beekka.com/blogimg/asset/202511/bg2025111502.webp)

欧洲把 6GHz 一分为二，较低的频段给 WiFi 使用，较高的频段留给手机通信。

这跟美国和中国都不一样，美国把整个 6GHz 分配给 WiFi，中国则是全部分配给手机通信。

我来说说，对于这个新闻的感想。

![](https://cdn.beekka.com/blogimg/asset/202511/bg2025111503.webp)

对于不了解的朋友，我先说说 6GHz 是怎么回事。

家庭的无线局域网（WiFi）只能使用固定频率的信号。最早的频率是 2.4GHz，所有设备都用这个频率，就造成了信道拥挤、信号不稳定。

后来，增加了 5GHz。但是这个频率现在也不太够用，在大城市的高层住宅，打开手机，能搜到几十个无线网络。那么多设备都用这个频率，通信就很拥挤了。

![](https://cdn.beekka.com/blogimg/asset/202511/bg2025111504.webp)

大家就想到，再给 WiFi 增加一个频段，目光就瞄准了 6GHz。这个频段还没有指定用途。

如果 6GHz 用作 WiFi，最大的好处就是不会发生拥堵。因为它的波长短，所以穿墙能力差，实际上不能穿墙。也就是说，你在屋里只能连上你自己的 6GHz 信号，别处的信号传不进来。

而且，它的带宽大，网速更快，可以打造高速 WiFi，适合 VR 头盔这类吃带宽的设备。

但是，问题就来了，6GHz 除了用作 WiFi，还可以用作手机通信。手机通信的频段能够供大量人群同时使用，比只供一家人使用的 WiFi，频段利用效率更高，公共效益更大。

前面说了，中国的决定是，整个 6GHz 都留给手机通信，也就是说 WiFi 不能使用这个频段。

所以，有些追求高网速的国内用户，就会去买国外的无线路由器，以及支持 6GHz 的硬件（比如[苹果设备](https://support.apple.com/zh-cn/102285)），实现家庭的高速 WiFi。

![](https://cdn.beekka.com/blogimg/asset/202511/bg2025111809.webp)

我的想法是，WiFi 只有 2.4GHz 和 5GHz 确实不太够，如果能增加一个高速频段就很好，不仅满足大带宽通信，还能促进设备升级，带动消费。

6GHz 的完整频段是 5925MHz 到 7125MHz，听过国内明确留给手机通信的是 6425MHz 到 7125MHz 这一段，至于剩下的 5925Mhz 到 6425MHz 怎么分配还没明文规定（参见[百度百科](https://baike.baidu.com/item/6GHz%E9%A2%91%E6%AE%B5/63143263)）。

如果是真的，是否可以考虑放出 5925Mhz 到 6425MHz 这一段，就像美国的规定，任何人无需许可就能使用这个频率。这样的话，个人和企业就有了一个可以自由使用的高速通信频率，为更多的创新创造条件。

## 科技动态

1、[一个光日](https://www.iflscience.com/on-november-13-2026-voyager-will-reach-one-full-light-day-away-from-earth-81432)

1977年9月5日，美国发射宇宙飞船“旅行者1号”。它是目前飞行距离最远的飞行器，已经飞离了太阳系。

根据计算，2026年11月13日，它将距离地球“[1光日](https://www.iflscience.com/on-november-13-2026-voyager-will-reach-one-full-light-day-away-from-earth-81432)”（光在一天内传播的距离），成为首个达到这个距离的人造飞行器。

![](https://cdn.beekka.com/blogimg/asset/202511/bg2025111303.webp)

届时，旅行者1号将距离地球259亿公里，这段距离光只需要1天，它耗时近50年。

在当前位置，地球的指令到达它需要23小时29分27秒，过了1光日，就要第二天才能收到。

![](https://cdn.beekka.com/blogimg/asset/202511/bg2025111304.webp)

科学家预计，再过300年，旅行者1号就会进入太阳系旁边的奥尔特云团，穿过该云团需要大约30000年。

2、[输电铁塔](https://www.goodgoodgood.co/articles/austrian-power-giants-power-line-animals)

奥地利正在改造输电铁塔，让其变得更美观，更像景观。

![](https://cdn.beekka.com/blogimg/asset/202511/bg2025110204.webp)

上图是鹳，另一个已经落成的设计是雄鹿（下图）。

![](https://cdn.beekka.com/blogimg/asset/202511/bg2025110205.webp)

奥地利电网公司打算一共设计9种动物形状的铁塔，象征奥地利的9个州，目前已经完成了两个。

许多人都反对，在村庄旁边修建输电塔。电网公司希望，这些具有视觉吸引力的铁塔，可以让人们更容易接受它。

![](https://cdn.beekka.com/blogimg/asset/202511/bg2025110206.webp)

![](https://cdn.beekka.com/blogimg/asset/202511/bg2025110207.webp)

3、[在线会议的 AI 化妆](https://www.xda-developers.com/google-meet-makeup/)

Google Meet 推出 AI 化妆按钮，帮你在线上会议“虚拟化妆”。

![](https://cdn.beekka.com/blogimg/asset/202510/bg2025101410.webp)

上图右侧是可选择的12种妆容，左侧窗口是预览画画，也就是别人看到的你的样子，数字化妆保证你看上去“光彩照人”。

以后，美颜滤镜将是视频通话软件的标配。

4、[钥匙扣相机](https://newatlas.com/photography/kodak-charmera-fun-camera-keychain/)

柯达公司推出了一扣挂在钥匙扣上的相机，而且样子很复古。

![](https://cdn.beekka.com/blogimg/asset/202509/bg2025091802.webp)

这款相机很小，重量仅30克，但是功能齐全，配有取景器、LCD 屏幕、Type-C 端口、闪光灯、microSD 插槽。

![](https://cdn.beekka.com/blogimg/asset/202509/bg2025091803.webp)

它的画质不行，传感器只有 1/4 英寸，只能拍摄 1,440 x 1,440 的 JPEG 照片。

![](https://cdn.beekka.com/blogimg/asset/202509/bg2025091804.webp)

但是，它的价格只有30美元，加上造型不错，还是有很多人愿意买单。目前，它在[柯达官网](https://www.kodak.retopro.co/zh-hans/products/kodak-charmera-br-keychain-digital-camera-blind-box)出售，显示缺货。

![](https://cdn.beekka.com/blogimg/asset/202509/bg2025091805.webp)

## 文章

1、[中国 AI 模型是纸老虎](https://www.gleech.org/paper)（英文）

![](https://cdn.beekka.com/blogimg/asset/202511/bg2025111801.webp)

一个美国人的文章，批评中国 AI 模型不如看上去那样好。

我认为，他的观点太偏颇，很多论据站不住脚，读上去酸溜溜，但是可以作为参考。

2、[WhatsApp 现在使用 WebView](https://www.windowslatest.com/2025/11/12/meta-just-killed-native-whatsapp-on-windows-11-now-it-opens-webview-uses-1gb-ram-all-the-time/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202511/bg2025111309.webp)

通信软件 WhatsApp 的 Windows 版，原先是一个原生桌面应用。

作者震惊地发现，它的新版本居然退回了 WebView，成为网页版的包装器，性能急剧下降，内存占用 1GB。原因可能是 Meta 公司裁掉了 Windows 版的开发团队。

3、[Vibe Coding 面试感受](https://mp.weixin.qq.com/s/roURrNNBJ2J5ZqdFuU1tkA)（中文）

![](https://cdn.beekka.com/blogimg/asset/202511/bg2025112003.webp)

作者团队的面试，开始改为让应聘者用 AI 实现一个功能，作者谈了实施的感受。（[@thuwyh](https://github.com/ruanyf/weekly/issues/8254) 投稿）

4、[本地运行 AI 模型的方法](https://decrypt.co/348129/running-your-own-local-open-source-ai-model-easy-heres-how)（英文）

![](https://cdn.beekka.com/blogimg/asset/202511/bg2025111808.webp)

本文介绍在本地计算机运行 AI 模型的几种方法：[LM Studio](https://lmstudio.ai/)、[Ollama](https://ollama.com/)、[LMStudio](https://lmstudio.ai/)。

5、[我们在 Zed 里面办公](https://zed.dev/blog/zed-is-our-office)（英文）

![](https://cdn.beekka.com/blogimg/asset/202511/bg2025111402.webp)

Zed 是一个全新的代码编辑器，正在密集开发。除了文档编辑以外，Zed 团队也用它来开会和讨论，它内置了讨论区和实时协作。

6、[中级程序员的标志](https://dawranliou.com/blog/intermediate-dev/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202511/bg2025111308.webp)

今年是作者从事专业编程的第十年，他认为自己属于中级程序员，总结了自己的工作内容。

他说，做到了这些事，你就达到了中级程序员的标准。

## 工具

1、[LibrePods](https://github.com/kavishdevar/librepods)

![](https://cdn.beekka.com/blogimg/asset/202511/bg2025111806.webp)

在非苹果设备上（比如安卓手机和 Linux），使用 AirPods 耳机的工具。

2、[IDEmacs](https://codeberg.org/IDEmacs/IDEmacs)

![](https://cdn.beekka.com/blogimg/asset/202511/bg2025111807.webp)

将 Emacs 配置成 VS Code 样式的一套配置。

3、[Kratos](https://github.com/ory/kratos)

![](https://cdn.beekka.com/blogimg/asset/202511/bg2025111310.webp)

开源的身份认证服务器，支持多种认证方式，可以替代 Auth0 和 Okta。

4、[Biu](https://github.com/wood3n/biu)

![](https://cdn.beekka.com/blogimg/asset/202511/bg2025111307.webp)

一个开源的跨平台桌面应用，基于 API 来搜索和播放 Bilibili 平台的音乐，支持登录获取收藏夹歌曲。（[@wood3n](https://github.com/ruanyf/weekly/issues/8202) 投稿）

5、[Enjoy Git](https://enjoygit.com/)

![](https://cdn.beekka.com/blogimg/asset/202511/bg2025111401.webp)

中文的 Git 桌面图形客户端，暂时只有 Windows 版。（[@huangcs427](https://github.com/ruanyf/weekly/issues/8207) 投稿）

6、[Readdig](https://github.com/readdig/readdig)

![](https://cdn.beekka.com/blogimg/asset/202511/bg2025111705.webp)

开源 RSS 阅读和 Podcasts 播放网站。（[@copilot-is](https://github.com/ruanyf/weekly/issues/8223) 投稿）

7、[Tiny SVG](https://github.com/hehehai/tiny-svg)

![](https://cdn.beekka.com/blogimg/asset/202511/bg2025111706.webp)

开源的网页版 SVG 压缩，可以[在线试用](https://tiny-svg.actnow.dev/)。（[@mutou981](https://github.com/ruanyf/weekly/issues/8225) 投稿）

8、[fssh](https://github.com/Mister-leo/fssh)

苹果笔记本的 SSH 私钥保护器，登录服务器时直接指纹认证。（[@Mister-leo](https://github.com/ruanyf/weekly/issues/8226) 投稿）

9、[CrossDesk](https://www.crossdesk.cn/)

![](https://cdn.beekka.com/blogimg/asset/202511/bg2025112001.webp)

开源的远程桌面软件，跨平台，支持硬件加速和 Web 访问。（[@kunkundi](https://github.com/ruanyf/weekly/issues/8251) 投稿）

10、[Git PR AI](https://github.com/leochiu-a/git-pr-ai)

![](https://cdn.beekka.com/blogimg/asset/202511/bg2025112002.webp)

一个命令行工具，跟 JIRA 配套，可以直接从 JIRA Ticket 生成 Git 分支，并带有 AI 功能。（[@leochiu-a](https://github.com/ruanyf/weekly/issues/8252) 投稿）

## AI 相关

1、[Antigravity](https://antigravity.google)

![](https://cdn.beekka.com/blogimg/asset/202511/bg2025111901.webp)

谷歌本周发布的 IDE 产品，用于 AI 编程，也是基于 VS Code。

2、[Code Wiki](https://codewiki.google/)

![](https://cdn.beekka.com/blogimg/asset/202511/bg2025111805.webp)

谷歌新发布的服务，使用 Gemini 模型为代码库生成文档。

3、[Open CoreUI](https://github.com/xxnuo/open-coreui)

![](https://cdn.beekka.com/blogimg/asset/202511/bg2025111704.webp)

使用 Rust 语言重写的 Open WebUI，降低了内存和资源消耗，有服务器版和桌面版。（[@xxnuo](https://github.com/ruanyf/weekly/issues/8222) 投稿）

4、[Continuous Claude](https://github.com/AnandChowdhary/continuous-claude)

一个命令行工具，可以对同一个任务循环运行 Claude Code，允许指定运行次数。

## 资源

1、[随机性测试指南](https://random.tastemaker.design/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202511/bg2025111311.webp)

这个网站给出一系列方法，测试某种随机数生成器是否足够随机，所有测试方法都有详细易懂的解释，可以用来学习统计学。

2、[强化学习的数学基础](https://github.com/MathFoundationRL/Book-Mathematical-Foundation-of-Reinforcement-Learning)（Mathematical Foundations of Reinforcement Learning）

![](https://cdn.beekka.com/blogimg/asset/202503/bg2025031101.webp)

开源的英文电子书，介绍强化学习的基础数学知识。

3、[Erlang 初学者教程](https://learnyousomeerlang.com/content)（learn you some Erlang）

![](https://cdn.beekka.com/blogimg/asset/202503/bg2025031702.webp)

Erlang 是一种函数式语言，适合分布式、高可用环境。这个网站是面向初学者的英文教程。

## 图片

1、

一家巴基斯坦报纸，不慎将 [AI 的对话](https://x.com/omar_quraishi/status/1988518627859951986)跟着文章一起发表了。

![](https://cdn.beekka.com/blogimg/asset/202511/bg2025111214.webp)

上图文章结尾的红框处，写着：“如果您愿意，我还可以生成一个更醒目的‘首页风格’版本，配以简洁有力的单行统计数据和醒目、信息图表式的布局——完美契合最多读者需求。您希望我接下来生成这个吗？”（If you want, I can also create an even snappier “front-page style” version with punchy one-line stats and a bold, infographic-ready layout — perfect for maximum reader impact. Do you want me to do that next?）

![](https://cdn.beekka.com/blogimg/asset/202511/bg2025112004.webp)

如果报纸都用 AI 写稿，读者是否还有必要订阅？

2、[神秘的土坑带](https://www.sydney.edu.au/news-opinion/news/2025/11/10/mysterious-holes-in-the-andes-may-have-been-an-ancient-marketplace-new-research-suggests.html)

秘鲁南部的一个山谷，有着一条长长的土坑带，整齐地排列着5000多个土坑，非常神秘。

![](https://cdn.beekka.com/blogimg/asset/202511/bg2025111903.webp)

这明显是人工的，但是没有任何记载，不知道是谁修建的？有什么用途？

![](https://cdn.beekka.com/blogimg/asset/202511/bg2025111904.webp)

上图中间的一长条，都是土坑。

考古学家在土坑中发现了玉米花粉和芦苇。玉米是古代这个地区的主粮，而芦苇可以用来编织篮子。

因此人们猜测，这里是印加帝国的一个大型集市，这些土坑用来存放货物。

![](https://cdn.beekka.com/blogimg/asset/202511/bg2025111905.webp)

## 文摘

1、[世界第一个 App 商店](https://one-from-nippon.ghost.io/worlds-first-app-store/)

世界第一个 App 商店，出现在上个世纪80年代的日本，方便用户付费购买软件。

它采用自动售货机的形式，因此也是世界第一台以数字形式出售软件的自动售货机。

![](https://cdn.beekka.com/blogimg/asset/202311/bg2023110403.webp)

1986年的时候，软件都是以磁盘形式出售。一个软件通常就是几百 KB，正好放到一张磁盘里面。

![](https://cdn.beekka.com/blogimg/asset/202311/bg2023110501.webp)

上图左下角就是当时的磁盘。

需要新软件的时候，人们往往删除磁盘的旧数据，拿来拷贝。一家日本公司由此想到，可以制造一种机器，让人们插入磁盘，把选择的软件拷贝在上面。

![](https://cdn.beekka.com/blogimg/asset/202311/bg2023110502.webp)

上面就是这家公司造出来的软件自动售货机。

你把磁盘插入机器，在屏幕上选择自己想要的软件，支付费用后，机器自动把软件拷贝到磁盘上，然后你就可以带着软件回家。

如果软件附带手册，它还会把手册打印出来给你。

这在当时是一项革命性的发明，一经推出就轰动了市场。当时还没有互联网，购买软件都要去实体商店，有了这种机器，你在街角就可以购买软件。

这种机器的致命伤在于，它内部的硬盘不够大，只能储存最热门的几种软件（大部分是游戏）。如果用户想购买其他软件，就必须等这台机器去远程下载。

当时采用电话线拨号下载，网速只有每秒约 1.2 KB，一个游戏的下载时间有时达到20分钟。这段时间内，用户只能在机器旁边等着，其他人也不能使用这台机器。如果下载中途断线，就必须从头来过。

为了解决这个问题，这家公司让机器每晚自动下载最新游戏。但还是不能完全避免用户的等待。

最高峰时，这种机器在日本全国一共安装了300多台。直到1997年，才完全退出历史舞台。

## 言论

1、

我希望让机器人坐在自动驾驶的出租车里运送包裹。

出租车自动驾驶到达目的地后，机器人负责搬运货物到门口。

-- [马斯克](https://stratechery.com/2025/robotaxis-and-suburbia/)谈对于 Optimus 机器人的发展愿景

2、

亚洲常见的一种攻击方法是，诈骗分子打电话给受害者，冒充银行员工，警告受害者账户已被盗用，并指示他们安装一个应用程序来保护资金安全。

诈骗分子还会蒙骗受害者，让他们在安装应用程序的过程中忽略安全警告。这个应用是伪装成合法应用的恶意软件，会窃取受害者的登录信息，并拦截访问银行账户所需的双因素验证码。

-- [谷歌](https://www.engadget.com/apps/google-will-allow-experienced-users-to-sideload-unverified-android-apps-130000130.html)用这个案例解释，为什么需要实施“安卓开发者认证计划”

3、

既然 AI 可以按需提供你的代码所需的特定功能，为什么还要增加额外的供应链风险，引入另一个依赖项呢？

因此，小型的、低价值的依赖项在未来会消失。

-- [《“小型”开源软件的命运 》](https://simonwillison.net/2025/Nov/17/the-fate-of-small-open-source/)

4、

基因疗法可能实现一次治愈病人，这对于公司的持续收入很不利。

相比慢性疗法，治愈病人是一种可持续的商业模式吗？

-- [高盛公司](https://www.cnbc.com/2018/04/11/goldman-asks-is-curing-patients-a-sustainable-business-model.html)的一份研究报告

5、

去年，互联网上机器人流量第一次超过了人类流量。根据一份报告，自动化系统在2024年占所有网络流量的51%，而且 AI 生成的文章数量也在2024年底首次超过了人类撰写的文章。

-- [《互联网已死》](https://decrypt.co/348837/dead-internet-theory-gains-traction-ai-content-surges-online)

## 往年回顾

[没有链接的互联网](https://www.ruanyifeng.com/blog/2024/11/weekly-issue-327.html)（#327）

[工作台副屏的最佳选择](https://www.ruanyifeng.com/blog/2023/11/weekly-issue-277.html)（#277）

[脸书的公司入职教育](https://www.ruanyifeng.com/blog/2022/10/weekly-issue-227.html)（#227）

[iPad 的真正用途](https://www.ruanyifeng.com/blog/2021/09/weekly-issue-177.html)（#177）

（完）

