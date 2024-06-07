# 科技爱好者周刊（第 290 期）：苹果头盔的最大问题

这里记录每周值得分享的科技内容，周五发布。

本杂志[开源](https://github.com/ruanyf/weekly)，欢迎[投稿](https://github.com/ruanyf/weekly/issues)。另有[《谁在招人》](https://github.com/ruanyf/weekly/issues/4002)服务，发布程序员招聘信息。合作请[邮件联系](mailto:yifeng.ruan@gmail.com)（yifeng.ruan@gmail.com）。

## 封面图

![](https://cdn.beekka.com/blogimg/asset/202402/bg2024020902.webp)

上图是国际野生动物摄影师比赛（2023年度）的第一名作品，一只小北极熊在挪威斯瓦尔巴群岛附近漂浮的冰块上，用爪子挖出了一张床，爬上去睡着了。（[via](https://www.livescience.com/animals/polar-bears/polar-bear-sleeping-on-tiny-iceberg-drifting-in-arctic-sea-captured-in-heartbreaking-photo)）

## 苹果头盔的最大问题

春节前，苹果公司的 Apple Vision Pro 上架销售了。

这是近几年最创新的硬件设备，首批20万台一抢而空。

![](https://cdn.beekka.com/blogimg/asset/202402/bg2024021801.webp)

它只在美国销售，还没有官方的中文名。为了行文方便，我暂且就叫它“苹果头盔”吧。

虽然这么叫，但是苹果对它的定位可不是 VR 头盔，而是“空间计算机”（spatial computer）。

这个名称大有奥妙，表明了苹果公司对它的长远规划：**这是一台通用计算机，跟笔记本和手机一样**，属于消费级计算设备。

在苹果眼中，这三者——Mac、iPhone、苹果头盔——能做的事情是一样的，只是使用场合不同。Mac 是桌面计算机，iPhone 是便携计算机，苹果头盔是穿戴计算机。

iFixit 网站[拆解了苹果头盔](https://zh.ifixit.com/News/90137/vision-pro-teardown-why-those-fake-eyes-look-so-weird)，证实了 **CPU 是 M2 芯片，跟 MacBook 笔记本相同**。因此理论上，MacBook 可以运行的程序，苹果头盔都能运行。

![](https://cdn.beekka.com/blogimg/asset/202402/bg2024021802.webp)

问题就来了，你觉得，**苹果头盔能当作通用计算机使用吗？**

一些人非常看好，认为它的虚拟空间感前所未有，让实体屏幕变成了虚拟屏幕，将来完全可以戴着它办公。另一些人则觉得，它有内在的缺陷，无法用来办公。

著名的 IT 分析师 Ben Thompson 写了自己的[使用感受](https://stratechery.com/2024/the-apple-vision-pro/)。我觉得，他分析得比较深入，分享给大家。

他说，自己戴上头盔的第一反应是，这玩意太棒了，看视频无与伦比！他的妻子惊呼：“有了它，谁还要去电影院？”

但是，当他打算戴着头盔写文章时，就发现存在一个最大问题，使其无法用于任何严肃的工作。

**这个最大问题就是：苹果头盔的多窗口支持一团糟**。当你只使用一个窗口时，它确实能正常工作；如果打开多个窗口，你就有麻烦了。

“多个窗口如果堆叠在一起，即都排列在 z 轴上（离你有不同的远近），用户界面就非常难操作（下图）。因为它采用眼动追踪，难以达到区分不同窗口的精确度。你很难快速定位你想要的窗口。”

![](https://cdn.beekka.com/blogimg/asset/202402/bg2024022107.webp)

(图片说明：多个窗口前后堆叠时，仅通过眼球追踪，选中想要的窗口有难度。)

“多个窗口如果不堆叠在一起，而是平铺在桌面上（下图），你就会发现，苹果头盔的视野非常窄（苹果没有公布这个参数，但明显小于 Quest 3 的110°），你无法同时看到两个完整的窗口。”

![](https://cdn.beekka.com/blogimg/asset/202402/bg2024022108.webp)

（图片说明：苹果头盔的视野较窄，无法同时平铺两个完整的窗口。）

“这意味着，你想要看到另一个窗口的完整内容，就不得不物理移动你的头部或身体。“

总之，**苹果头盔目前的多窗口，非常难用**，难用的程度跟 iPad 的多窗口类似。

iPad 由于实现不了真正的多窗口，至今只能当作娱乐设备，无法当作生产力设备。苹果头盔也是如此，它没有苹果公司宣传得那么神奇，还无法成为“空间计算机”，不可能代替笔记本，成为工作计算机。

**人们真正想要的是，一个巨大的屏幕同时（完整）容纳多个窗口**，所以很多程序员才会将笔记本外接多个显示器（下图）。

![](https://cdn.beekka.com/blogimg/asset/202402/bg2024021803.webp)

如果苹果头盔能做到这样的多窗口体验，它就会成为笔记本的终结者，市场前景极为广阔，可惜它没有做到。

所以，如果你只把苹果头盔用于娱乐，那么可以购买；如果还想用于工作和学习，等它完善了多窗口以后，再考虑吧。

这也正是[《纽约时报》](https://www.nytimes.com/2024/02/07/technology/personaltech/apple-vision-pro-review.html)对它的一句话评价：“**除了作为一台精美的个人电视之外，它缺乏用途。**”

## 科技动态

1、[无线摄像头的风险](https://www.tomshardware.com/networking/wi-fi-jamming-to-knock-out-cameras-suspected-in-nine-minnesota-burglaries-smart-security-systems-vulnerable-as-tech-becomes-cheaper-and-easier-to-acquire)

美国明尼苏达州，最近抓到了一个高科技小偷，他连续犯下九起入室盗窃案。

这些房子都装了无线摄像头，小偷设法让这些摄像头失效，然后再作案。

![](https://cdn.beekka.com/blogimg/asset/202402/bg2024021501.webp)

他的伎俩其实很简单，就是一个 WiFi 干扰器。

![](https://cdn.beekka.com/blogimg/asset/202402/bg2024021502.webp)

无线摄像头依靠 WiFi，将拍到的影像保存到远程硬盘。如果存在大量的干扰信号，阻塞 WiFi 信道，即使摄像头拍到了影像，也无法保存，小偷就大摇大摆入室盗窃了。

这个问题早就为人所知，但没有很好的解决办法，关键的监控摄像头最好使用有线连接。

2、[如何戒掉手机瘾](https://www.nytimes.com/2024/02/01/technology/iphone-mental-health-flip-phone.html)

一家纽约公司希望，员工上班时不要玩手机。

为此，公司规定，开会时一律把手机放到门外的架子（device shelf）上。

![](https://cdn.beekka.com/blogimg/asset/202402/bg2024020501.webp)

![](https://cdn.beekka.com/blogimg/asset/202402/bg2024020502.webp)

另外，员工如果愿意放弃智能手机，改用翻盖手机，公司将承担所有费用。

![](https://cdn.beekka.com/blogimg/asset/202402/bg2024020503.webp)

实行下来，翻盖手机对于防止手机上瘾，效果据说相当好。

3、[金字塔修复](https://www.timesofisrael.com/egyptian-pyramid-undergoes-renovation-drawing-criticism/)

埃及政府正在修复金字塔，外部再加上一层花岗岩。

![](https://cdn.beekka.com/blogimg/asset/202402/bg2024020701.webp)

根据考古资料，金字塔最初建造时，外层有花岗岩保护，后来风化脱落了。

埃及政府认为，修复后可以让游客体验金字塔最初的样子，也有利于保护内层岩石。

![](https://cdn.beekka.com/blogimg/asset/202402/bg2024020702.webp)

![](https://cdn.beekka.com/blogimg/asset/202402/bg2024020703.webp)

但是，很多考古学家坚决反对，认为这是在破坏文物，有人甚至讽刺“为什么不直接贴瓷砖呢？” 

要不要修复古建筑、如何修复、修复后会不会丧失原貌，确实是一大难题。

4、[卫星碎片削弱地球磁场](https://spaceweatherarchive.com/2024/02/01/will-satellite-megaconstellations-weaken-earths-magnetic-field/)

SpaceX 公司的卫星上网项目 Starlink，计划发射12000颗卫星，已发射5000多颗。

很多公司打算效仿，也组建自己的卫星通信网。科学家非常担心，大量小型卫星上天，会带来不可知的后果。

![](https://cdn.beekka.com/blogimg/asset/202402/bg2024020704.webp)

最大的风险，就是改变和削弱地球磁场。

今后几十年，这些卫星都会逐渐解体和坠落。那时，它们将产生大量的金属碎片和颗粒，漂浮在太空中。如果数量足够多，就会在地球外空形成一层巨大的带电粒子层。

这个人为的带电粒子层，等同于为地球安装了一个导电外壳。地球磁场将被这个外壳屏蔽，在外壳的外部，地球磁场将等于0。

地球磁场可以保护地球，免受宇宙射线和太阳风暴的侵害。如果地球磁场等于0，很难预料会发生什么结果。

5、[木卫一](https://science.nasa.gov/get-involved/citizen-science/for-your-processing-pleasure-the-sharpest-pictures-of-jupiters-volcanic-moon-io-in-a-generation/)

本月，美国宇航局的朱诺号宇宙飞船，近距离地飞越了木星的卫星“木卫一”，最近距离不到1500公里。

它发回了有史以来最清晰的木卫一照片，包含大量细节。

![](https://cdn.beekka.com/blogimg/asset/202402/bg2024021001.webp)

人类第一次近距离看到，这颗太阳系活火山最多的天体。因为它靠木星太近，承受木星的巨大引力，导致内部地质活动剧烈，遍布活火山。

## 文章

1、[Web 终极拦截技巧](https://hughfenghen.github.io/posts/2023/12/23/web-spy/)（中文）

![](https://cdn.beekka.com/blogimg/asset/202402/bg2024021006.webp)

本文介绍 Web 平台常见的拦截 HTTP 通信的方法，以及如何注入拦截代码。（[@hughfenghen](https://github.com/ruanyf/weekly/issues/4014) 投稿）

2、[剖析 SSL 证书](https://jvns.ca/blog/2017/01/31/whats-tls/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202312/bg2023121103.webp)

本文通俗地介绍，如何查看 HTTPS 证书的内容，以及证书各部分的简单含义。

3、[浏览器的自发连接](https://sizeof.cat/post/web-browser-telemetry/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202312/bg2023121201.webp)

本文列出浏览器打开时，自动发出的 HTTP 请求。举例来说，Firefox 打开时自动发出15个请求，Chrome 12个，Edge 21个。

4、[响应式视频播放器的 Web 组件](https://calendar.perfplanet.com/2023/extending-responsive-video-with-html-web-components/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202312/bg2023121303.webp)

一篇详细的教程，通过一个响应式视频播放器，教你怎么写 Web 组件（Web Components）。

5、[如何构建一个窃取一切的 Chrome 插件](https://mattfrisbie.substack.com/p/spy-chrome-extension)（英文）

![](https://cdn.beekka.com/blogimg/asset/202311/bg2023110712.webp)

作者提醒大家注意，浏览器插件可以读取用户的所有信息，发到远程服务器，因此不要随便安装。她还提供了一个演示。

6、[Base32 编码解释](https://ptrchm.com/posts/base32-explained/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202312/bg2023121801.webp)

本文详细解释 Base64、Base32、Base8 等等是如何编码实现的。

7、[SSH 登录如何实现双因素认证](https://linuxiac.com/how-to-set-up-ssh-to-use-two-factor-authentication/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202312/bg2023121915.webp)

本文是一篇教程，详细演示 SSH 登录服务器时，如何开启双因素认证。

8、[开发者需要知道 GPU 知识](https://journal.hexmos.com/gpu-survival-toolkit/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202311/bg2023111306.webp)

AI 大量使用 GPU 运算，本文介绍开发者需要知道的 GPU 知识。前半部分是概念，后半部分是 GPU 编程，可以只看前半部分。

## 工具

1、[Zed](https://zed.dev/)

![](https://cdn.beekka.com/blogimg/asset/202402/bg2024021902.webp)

一个速度极快的代码编辑器，跨平台，来自 Atom 原团队的最新作品。

另外，Atom 项目关闭后，代码开源了。基于原始代码的新项目叫做 [Pulsar](https://optimizedbyotto.com/post/pulsar-best-text-file-and-code-editor/)，也是一个非常优秀的代码编辑器。

2、[TCPView](https://learn.microsoft.com/en-us/sysinternals/downloads/tcpview)

![](https://cdn.beekka.com/blogimg/asset/202402/bg2024021005.webp)

微软的官方工具，用来查看 Windows 系统所有 TCP 和 UDP 连接的详细信息。（[@meq1986](https://github.com/ruanyf/weekly/issues/4013) 投稿）

3、[EasyDevo](https://easydevo.boringboring.design/)

![](https://cdn.beekka.com/blogimg/asset/202402/bg2024021008.webp)

Mac 桌面应用，用来清理系统的垃圾文件，以及监控系统指标（网络、CPU、RAM 和电池等），参见[介绍文章](https://medium.com/@hi_caicai/easydevo-the-developer-tool-you-might-need-a70dfd6ee3e1)。（[@hi-caicai](https://github.com/ruanyf/weekly/issues/4018) 投稿）

4、[FontMagic](https://github.com/leibnizli/fontmagic)

![](https://cdn.beekka.com/blogimg/asset/202402/bg2024021905.webp)

字体工具软件，可以将字体文件的某个字形导出为 SVG 格式，还可以转化字体格式，支持 macOS 和 Windows。（[@leibnizli](https://github.com/ruanyf/weekly/issues/4028) 投稿）

5、[uv](https://astral.sh/blog/uv)

Rust 语言写的 Python 包管理器，速度非常快，可以替代 pip 和pip-tools。（[@qiaouchicago](https://github.com/ruanyf/weekly/issues/4030) 投稿）

6、[Keep Screen On](https://www.keepscreenon.com/)

![](https://cdn.beekka.com/blogimg/asset/202402/bg2024021906.webp)

打开这个网页，就可以让电脑屏幕保持常亮，对 PC、Mac、Android、iOS 均有效。（[@tufucheung](https://github.com/ruanyf/weekly/issues/4033) 投稿）

7、[background-erase.xyz](https://background-erase.xyz/)

![](https://cdn.beekka.com/blogimg/asset/202402/bg2024021908.webp)

去除图片背景的免费网站，使用最新的删除图片背景的 AI 模型 RMBG-v1.4，所有计算都在本地完成，不用上传图片。（[@janily](https://github.com/ruanyf/weekly/issues/4040) 投稿）

8、[browserscan.net](https://www.browserscan.net/)

![](https://cdn.beekka.com/blogimg/asset/202402/bg2024022202.webp)

该网站检测浏览器指纹、IP 地址、WebRTC 泄露，DNS 泄露等信息。（[@BrowserScan](https://github.com/ruanyf/weekly/issues/4045) 投稿）

9、[NPMprune](https://github.com/xthezealot/npmprune)

一个 Shell 脚本，删除 node_modules 目录里面各个模块的多余文件（比如 markdown 文件），有利于容器打包时减少体积。

10、[Localtunnel](https://theboroer.github.io/localtunnel-www/)

![](https://cdn.beekka.com/blogimg/asset/202309/bg2023093004.webp)

一个 npm 软件包，为你的本地服务分配一个公网的 URL，使得公网可以访问这个本地服务。

11、[SirTunnel](https://github.com/anderspitman/SirTunnel)

一个开源软件，只需要50行代码，就能建立一条隧道，将你的内网电脑可以被公网访问，这里有一篇[教程](https://eighty-twenty.org/2023/01/27/sirtunnel-personal-ngrok)。

## 资源

1、**Sora 视频**

OpenAI 推出了“文生视频”模型 Sora，只要输入文字，就能生成一段60秒的视频，效果惊人。

该模型还没有正式发布，只公开了示例。下面的网站收集这些示例和对应的提示词。

![](https://cdn.beekka.com/blogimg/asset/202402/bg2024021907.webp)

- [SoraPrompts](https://soraprompts.co/)（[@GregoryZeng](https://github.com/ruanyf/weekly/issues/4034) 投稿）
- [SoraHub](https://sorahub.video/zh)（[@JasonJJLL](https://github.com/ruanyf/weekly/issues/4035) 投稿）
- [Sora Videos](https://soravideos.media/)（[@MuYiBo](https://github.com/ruanyf/weekly/issues/4041) 投稿）

2、[爱发音](https://fayin.love/)

![](https://cdn.beekka.com/blogimg/asset/202402/bg2024022102.webp)

学习英语音标的助手，有每个音标的发音视频和音频，支持美式音标、英式音标。（[@Yidoon](https://github.com/ruanyf/weekly/issues/4042) 投稿）

3、[SVG 教程](https://svg-tutorial.com/)

![](https://cdn.beekka.com/blogimg/asset/202312/bg2023120801.webp)

介绍 SVG 图片的英文教程，一共25课，循序渐进，有大量的例子。

4、[如何克服 Git 的缺点？](https://news.ycombinator.com/item?id=38590080)（英文）

Git 有一些缺点，比如不适合二进制文件、不适合特大型项目、概念复杂、子模块管理麻烦等等。

上面链接是 Hacker News 网友讨论，怎么克服这些问题，里面有很多链接。

## 图片 

1、[冰岛火山爆发](https://kottke.org/24/02/incredible-satellite-images-of-the-latest-volcanic-eruption-in-iceland)

冰岛火山最近爆发，拍到的卫星照片令人惊叹：银白的大地上燃起一朵火焰。

![](https://cdn.beekka.com/blogimg/asset/202402/bg2024021007.webp)

2、[滇越铁路和公斤](https://twitter.com/ruanyf/status/1757002038981112152)

日常生活中，我国主要使用市斤，但是云南有些地方（比如昆明）使用公斤，这是为什么？

原来，上个世纪初，法国修建滇越铁路，连接越南和云南。

![](https://cdn.beekka.com/blogimg/asset/202402/bg2024021201.webp)

![](https://cdn.beekka.com/blogimg/asset/202402/bg2024022103.webp)

法国是国际度量衡的发明国，滇越铁路沿线全部改用公斤：河口、屏边、蒙自、开远、昆明。这种习惯一直到沿袭到今天。

3、[汽车灯光的木雕](https://www.thisiscolossal.com/2024/02/kiko-miyares-headlights/)

一位西班牙艺术家的木雕作品，将汽车灯光也雕刻了出来，真是非常奇特。

![](https://cdn.beekka.com/blogimg/asset/202402/bg2024022104.webp)

![](https://cdn.beekka.com/blogimg/asset/202402/bg2024022105.webp)

![](https://cdn.beekka.com/blogimg/asset/202402/bg2024022106.webp)

## 文摘

1、 [B 道选手](https://holly.witteman.ca/the-b-lane-swimmer/)

几年前，我参加了一个游泳训练营。

所有人在一个泳池训练，按照水平分在四个泳道：A 道（游得最快的人）、B 道（次快）、C 道（次慢）和 D 道（最慢）。

![](https://cdn.beekka.com/blogimg/asset/202402/bg2024022203.webp)

我从 D 道开始，接受了大量的指导。周围的人都对我很好，我慢慢进步，终于进入了 C 道。那组的人也热情欢迎我。

但是，我注意到，旁边 B 道的人并不像 C 道那样友善。A 道选手都非常友善，慷慨给予鼓励、表扬和提示。

我怀疑这是普遍现象：A 道、C 道和 D 道的人都很友善，大家几乎都乐于助人；B 道的人则是对 A 道和其他 B 道选手友善，但对 C 道和 D 道则不然。

因为我后来发现，其他运动领域也是如此。那些仅次于顶级选手的运动员，往往对不如自己的选手很苛刻，害怕别人超过自己。

学术界也有这种现象。真正伟大的研究者慷慨而热于助人，许多普通水平的研究者也是这样。然而，那些有一定知名度、但又没有做出顶尖成果的研究者，对不如自己的人就不友善了。

当你是最好的 A 组时，很容易表现得宽宏大量，你确信自己会有成果，这让你安心无忧。

当你处于平均水平或低于平均水平（C  组或 D 组）时，表现得友善也很容易。远离顶尖水平，意味着竞争压力不大，所需要付出的努力可能也不大，你会有一种“放轻松”的心态（反正我到不了顶峰，就当作玩呗）。

那些仅次于优秀水平的人，感受到最大的竞争压力。你离顶峰如此之近，追赶却又艰难无比，放弃又不甘心。最令人沮丧的是，没有人记得第二名。同时，后面的人还可能超过你。所有这些因素，都可能导致一种不友善的态度。

## 言论

1、

有些手机厂商表示，提供7年的手机软件更新，这就好像在说，三明治面包可以吃上七年。但是他们不会告诉你，7年以后用户体验会非常差，面包可能早就发霉了。

退一步说，就算软件可以用7年，但是手机电池往往用不到7年。

-- [一加手机 CEO 刘丰硕](https://www.androidauthority.com/oneplus-update-policy-clarification-3410995/)，解释为什么一加手机只提供4年软件更新，不跟进谷歌和三星的7年更新

2、

为了防止车辆盗窃，我们应该禁止不安全的车辆，而不是禁止像 Flipper Zero 这样的安全工具。

-- [SaveFlipper.ca](https://saveflipper.ca/)，评论加拿大政府发现很多窃贼使用硬件调试工具 Flipper Zero 盗窃汽车，从而禁止 Flipper Zero

3、

很多书籍都说，乐观是幸福、健康和长寿的关键。但是，英国巴斯大学的一项研究表明，乐观实际上与较低的认知有关，认知能力高的人对未来往往更加现实和悲观。

这也许表明，认知能力低的人更可能幸福、健康和长寿？

当然，过度乐观可能会导致糟糕的财务决策，比如过度消费和负债，使得生活状况很糟糕。

-- [巴斯大学](https://www.bath.ac.uk/announcements/optimistic-thinking-linked-with-lower-cognitive-abilities-new-research/)

4、

孩子要不要打扫自己的学校？日本的做法是要的，因为这可以让他们从小学会尊重周围的环境。

-- [《孩子们应该打扫自己的学校吗？》](https://www.good.is/articles/japan-children-clean-schools)

5、

你可以逃避现实，但你无法逃避“逃避现实”的后果。（You can avoid reality, but you cannot avoid the consequences of avoiding reality.）

-- [安·兰德](https://newideal.aynrand.org/the-quotable-ayn-rand-you-can-avoid-reality-but/)，美国著名作家

## 往年回顾

[与孔子 AI 聊天](https://www.ruanyifeng.com/blog/2023/02/weekly-issue-243.html)（2023 #243）

[前端与后端，谁更难？](https://www.ruanyifeng.com/blog/2022/01/weekly-issue-193.html)（2022 #193）

[世界尽头与冷酷仙境](https://www.ruanyifeng.com/blog/2021/01/weekly-issue-143.html)（2021 #143）

[漫游类的游戏，将会越来越多](https://www.ruanyifeng.com/blog/2020/02/weekly-issue-93.html)（2020 #93）

（完）

