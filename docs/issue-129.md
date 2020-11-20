# 科技爱好者周刊（第 129 期）：创业的凸函数和凹函数

这里记录每周值得分享的科技内容，周五发布。

本杂志开源（GitHub: [ruanyf/weekly](https://github.com/ruanyf/weekly)），欢迎提交 issue，投稿或推荐科技内容。

周刊讨论区的帖子[《谁在招人？》](https://github.com/ruanyf/weekly/issues/1392)，提供大量就业信息，欢迎访问或发布工作/实习岗位。

##  封面图

![](https://www.wangbase.com/blogimg/asset/202010/bg2020100716.jpg)

荷兰艺术家 Henk Hofstra 在巴西圣保罗市的作品《大街上的煎蛋》。（[via](https://www.instagram.com/p/CFWQkdOBulW/)）

## 本周话题：创业的凸函数和凹函数

著名畅销书[《黑天鹅》](https://book.douban.com/subject/6854525/)的作者纳西姆·塔勒布（Nassim Taleb），以前是纽约大学的数学教授，后来从事数理金融和风险管理。他写了很多科普文章，使用数学概念去分析各种现象。

![](https://www.wangbase.com/blogimg/asset/202010/bg2020100903.jpg)

他有一个[说法](https://www.indiehackers.com/post/bootstrapping-and-convexity-fb3b2da7c9)，我觉得很新奇。 **他说创业的时候，要考虑创业方向是凸函数还是凹函数。**

简单说，凸函数（convex function）就是函数曲线开头向上（下图左），凹函数（concave function）就是函数曲线开口向下（下图右）。

![](https://www.wangbase.com/blogimg/asset/202010/bg2020100904.jpg)

塔勒布说，最好的创业方向是下面这种曲线。

![](https://www.wangbase.com/blogimg/asset/202010/bg2020100905.jpg)

上图的竖轴是收益（正向为盈利，负向为亏损），横轴是各种外部因素（正向为有利因素，负向为不利因素）。创业开始时，你的收益是零（曲线与横轴的交点），不知道未来会怎样。

好的创业是这个样子：外部环境有利时，你的收益会快速上升，并且上升空间是巨大的；外部环境不利时，你的亏损会缓慢累积，并且最大损失是有限的。这种曲线正是凸函数，如果反过来，你的创业是凹函数，那就完了：盈利有天花板，上升缓慢，亏损则可能无限地快速上升。

举例来说，你的创业项目是一个开源软件，没有现成的商业模式，你还辞职来干，那就属于凹函数创业。你会很辛苦，万一创业失败就会很惨。

有些年轻人“裸辞”，没找到下家就辞职，这种行为也属于凹函数。如果找到的还是同类工作，工资能高到哪里去，万一找不到，就会长期失业，处境更被动。

这种使用数学概念分析日常行为，我觉得很有意思。这也是我佩服西方学者的地方，他们似乎特别善于将各种司空见惯的现象，进行模型化（modelization）和概念化（Conceptualization），从不一样的角度思考问题。 **这就叫“抽象化能力”，特别值得学习，能把具体的东西变抽象，也能把抽象的东西变具体。**

## 身份云 Authing

本周，向大家介绍一个国产的云服务：[Authing](https://authing.cn/)。

![](https://www.wangbase.com/blogimg/asset/202010/bg2020101004.png)

我们使用各种互联网应用，第一步总是登录或注册。现在流行的做法是使用第三方登录，即通过一些大网站（比如国外的谷歌、脸书和 GitHub）来验证用户身份。

这对双方都方便。对于用户来说，可以减少重复注册的麻烦；对于开发者来说，可以不必管理用户身份，专注于核心的产品逻辑。但是，第三方登录涉及多个标准和不同的身份提供商，要想完善支持，难度大、成本高。

**[Authing](https://authing.cn/) 就是一个第三方登录的云服务，帮你搞定所有的登录和身份管理细节，特别为企业级应用量身定做。** 它给自己的定位就是“身份云”（ID as a service，简称 IDaaS）。

默认情况下，开发者只需要加载一个[脚本](https://github.com/Authing/Guard)，就会自动显示下面的登录表单，帮你处理掉所有的注册和登录流程。

![](https://www.wangbase.com/blogimg/asset/202010/bg2020101005.png)

通过后台，它可以配置使用各种身份提供商：微信、QQ、支付宝、微博、钉钉…… 国内主流的登录方案，基本上全部支持。不同类型的应用（Web、手机 App 和小程序）都能无缝调用这个服务。

![](https://www.wangbase.com/blogimg/asset/202010/bg2020101006.png)

此外，它还为企业级应用提供 SSO 单点登录、多因素认证、手机短信验证码等高级服务，并且有各种主流语言的 SDK，可以平滑接入已有的存量应用。

Authing 极为重视“信息安全”。它本身不经手、不储存任何用户数据，保证企业对数据的完全掌控；同时，它提供多重安全保障，杜绝用户信息在登录环节的任何泄漏。

目前，中国石油、招商银行等多家世界 500 强都已经使用 Authing，作为员工和用户的身份方案。每月有数百万人次使用它完成登录，这个数字还在处于高速增长中。上个月，Authing 升级到了 2.0 版，内部改成了多租户的云原生架构，提高了性能和访问速度，已经具备向数亿用户提供稳定服务的能力。

点击[这里](https://docs.authing.cn/quickstart/create-authing-account.html)，就可以免费试用 Authing。免费版有 3000 次的认证次数，此后只对活跃用户收费，不登录就不收费。欢迎大家体验，任何问题都可以到[社区](https://gitter.im/authing-chat/community)提问。

## 资讯

1、[数字人民币红包](https://finance.sina.com.cn/china/gncj/2020-10-10/doc-iivhuipp8791865.shtml)

![](https://www.wangbase.com/blogimg/asset/202010/bg2020101001.jpg)

深圳开始试点数字人民币，具体方法是通过抽签，在报名的市民里面选出5万人，向他们的数字钱包发放200元红包，共计1000万元。这个红包可以在有效期内至罗湖区指定的商户进行消费。

如果中签，你必须下载安装“数字人民币 APP”，开通“个人数字钱包”后，才能领到这200元。这笔钱不需要绑定银行卡就能使用，等同于现金。

据介绍，数字人民币钱包还可以离线使用，只要手机有电，两个手机“碰一碰”，就能把一个人数字钱包里的数字货币转给另一个人。（这是说，数字人民币跟现金一样，是不记名的吗？）

2、[天问一号自拍](https://www.sohu.com/a/422325427_338398)

![](https://www.wangbase.com/blogimg/asset/202010/bg2020100712.jpg)

天问一号是中国的第一个火星探测器，2020年7月23日发射。10月1日，在飞往火星途中，天问一号进行了一次自拍，向国内发回它在太空中的样子。

它没有采用自拍杆的方案，因为要拍下探测器的全景，自拍杆需要长达15米，可能会有安全隐患。现在的做法是，向太空抛出一个一次性相机，对天问一号进行拍照，并实时把图像传回。相机的飞行速度是每秒0.2米，同时传回 800×600、1600×1200 两档分辨率的照片，通信采用的是400米范围的 WiFi 协议，相机电池可以坚持1小时。

![](https://www.wangbase.com/blogimg/asset/202010/bg2020100713.jpg)

3、[印度国有 App 商店](https://www.deccanherald.com/specials/aatmanirbhar-bharat-modi-govt-to-set-up-app-store-alternative-to-google-play-apple-app-store-895755.html)

![](https://www.wangbase.com/blogimg/asset/202010/bg2020100406.jpg)

谷歌应用商店开始对应用内购买收取30%的佣金，这对印度开发者影响很大。据报道，印度总理莫迪（Narendra Modi）已经要求电子和信息部开发一个国有的手机 App 商店，这样可以避免谷歌抽成。

安卓在印度的市场占有率是97%，苹果手机是2%，所以安卓商店基本就可以覆盖全体国民。

4、[谷歌 Workspace 的新图标](https://9to5google.com/2020/10/06/new-gmail-icon/)

![](https://www.wangbase.com/blogimg/asset/202010/bg2020100703.jpg)

疫情发生后，谷歌开始整合邮件、日历、通讯、办公等产品，将原来的办公套件 G Suite 升级成了 Google Workspace，作为个人和企业的网上工作的解决方案。为了适应这个转变，它重新设计了这些产品的图标，使得它们更加协调。

下面依次是 Gmail、日历、文档、视频会议、即时通信的新图标。

![](https://www.wangbase.com/blogimg/asset/202010/bg2020100704.jpg)

![](https://www.wangbase.com/blogimg/asset/202010/bg2020100705.jpg)

![](https://www.wangbase.com/blogimg/asset/202010/bg2020100706.jpg)

![](https://www.wangbase.com/blogimg/asset/202010/bg2020100707.jpg)

![](https://www.wangbase.com/blogimg/asset/202010/bg2020100708.jpg)

5、[无人驾驶出租车](https://auto-time.36kr.com/p/916577169093378)

![](https://www.wangbase.com/blogimg/asset/202010/bg2020101003.jpg)

10月9日，谷歌旗下的无人驾驶子公司 Waymo 宣布，即日起向公众开放无人驾驶出租车服务，第一期在凤凰城地区投放3000辆。这是世界上第一例正式向社会开放、并且车上没有任何工作人员的无人驾驶服务。

虽然车上没有司机，Waymo 的工作人员会通过摄像头，远程监视车辆状况。乘客也可以远程要求工作人员提供帮助。

Reddit 用户贴出了一段[4分钟的乘坐视频](https://www.reddit.com/r/waymo/comments/j7rphd/4_minute_full_video_in_waymo_one_no_driver_short/)，夜间在城市公路上行驶。整个行驶过程非常平稳，遇见红灯会自动停下，也会自动泊车，但总让人感到很不适合。正如网友所说，它的最大问题不是车辆本身，而是其他司机经过时，发现这辆车的驾驶位是空的，会吓死。下面就是这段视频的50秒片段，大家可以感受一下。

<iframe frameborder="0" src="https://v.qq.com/txp/iframe/player.html?vid=u3159riyymd" allowFullScreen="true" width="600" height="400"></iframe>

6、**一句话消息**

> - [德国科学家](https://www.bbc.com/news/science-environment-54515518)完成为期一年的北极考察，发现大规模的冰层融化，令人担忧。下面是他们绘制的2020年北极冰层分布图与1980年的比较，绿色为冰面，白色为海洋，灰色为陆地。

![](https://www.wangbase.com/blogimg/asset/202010/bg2020101501.jpg)

![](https://www.wangbase.com/blogimg/asset/202010/bg2020101502.jpg)

> - [一家美国创业公司](https://peripherii.com/)将蓝牙耳机做成耳坠首饰出售，据说通过挂首饰的耳洞来传递声音。

![](https://www.wangbase.com/blogimg/asset/202010/bg2020101504.jpg)

![](https://www.wangbase.com/blogimg/asset/202010/bg2020101505.jpg)

> - [美国科学家](https://spectrum.ieee.org/energywise/green-tech/fuel-cells/spinach-gives-fuel-cells-a-power-up)发现，菠菜可以充当燃料电池的催化剂。催化剂需要铁元素和氮元素的化合物，人工很难合成，但是菠菜却富含这两种元素，而且成本极低。

![](https://www.wangbase.com/blogimg/asset/202010/bg2020101503.jpg)

> - [全球的 IPv4 地址](http://www.southgatearc.org/news/2020/october/sale-of-amateur-radio-amprnet-tcp-ip-addresses.htm)历史上有1600万个分配给了业余无线电协会。由于 IPv4 地址已经没有剩余了，亚马逊公司最近花了1.08亿美元，向该协会购买了400万个 IPv4 地址。

> - [芬兰](https://twitter.com/mikko/status/1315178802356649986)手机 SIM 卡的每月平均数据流量为 17.3 GB，这是全世界最高的，表明该国各种无线上网应用非常普及和深入。

## 文章

1、[如何使用 CSS Grid 设置文章排版](https://joshwcomeau.com/css/full-bleed/)（英文）

![](https://www.wangbase.com/blogimg/asset/202010/bg2020100601.jpg)

本文介绍如何使用几行简单的 CSS 代码，就能实现文章的排版布局（上图）。另外，传统的 CSS 写法可以参考[这篇文章](https://uglyduck.ca/poor-mans-full-bleed/)。

2、[Vimium 插件的使用方法](https://codefaster.substack.com/p/look-ma-no-mouse-vimium)（英文）

![](https://www.wangbase.com/blogimg/asset/202010/bg2020100701.jpg)

Vimium 是 Chrome 浏览器的一个插件，可以只用键盘来操作网页，本文是它的教程。

3、[Unity 游戏开发的基本概念](https://blog.eyas.sh/2020/10/unity-for-engineers-pt1-basic-concepts/)（英文）

![](https://www.wangbase.com/blogimg/asset/202010/bg2020101201.jpg)

Unity 是世界最流行的游戏开发软件之一，本文是它的初学者教程，介绍一些游戏开发的最基本概念，不涉及代码。

4、[使用 CSS `:: marker` 自定义列表符号](https://web.dev/css-marker-pseudo-element/)（英文）

![](https://www.wangbase.com/blogimg/asset/202010/bg2020100804.jpg)

Chrome 86 开始支持使用`:marker`伪类自定义`<ol>`和`<ul>`的列表符号。

5、[忘记业余项目，专注于工作](https://manuel.darcemont.fr/posts/focus-on-jour-job/)（英文）

很多年轻程序员喜欢在工作之余，做一些自己的业余项目。作者建议，不要漫无目的做业余项目，尤其不要喜欢什么就做什么，而要做那些跟你的工作有直接关系的业余项目。

6、[Chrome 浏览器改变缓存机制](https://developers.google.com/web/updates/2020/10/http-cache-partitioning
)（英文）

用户访问网页以后，浏览器会缓存静态资源。用户再次访问时，就会加快显示速度。但是，这种机制可以用来追踪用户，脚本通过识别缓存，了解用户访问过哪个网站。

Chrome 86 启用了新的缓存防追踪机制，具体来说，就是为缓存加上数字密钥，使得第三方脚本无法加载缓存，也就是说，禁止使用其他网站留下的缓存。

7、[JavaScript 代码库的共享 CDN 不是一个好主意](https://shkspr.mobi/blog/2020/10/please-stop-using-cdns-for-external-javascript-libraries/)（英文）

有一些 CDN 专供 JS 脚本使用，本文认为脚本共享类的 CDN 并不可取。最有说服力的一条理由大概是，由于 Chrome 86 开始禁止使用其他网站留下的缓存，这类 CDN 的最大好处就消失了：不同网站的脚本使用同一个 CDN，并不会令加载变快。

8、[如何实现最简单的 Office 套件](https://zserge.com/posts/awfice/)（英文）

作者利用 Web 技术，在浏览器实现最简单的富文本编辑器、电子表格和幻灯片演示。

9、[如何写一个最简单的 React 实现](https://zserge.com/posts/worst-react-ever/)（英文）

作者讲解如何自己实现一个最简单的 React，支持 JSX 语法和一些基本 API，压缩后代码不超过 1KB。本文可以用来了解 React 原理。

10、[GitHub 的中国乱象](https://www.pingwest.com/a/177413)（中文）

很多中国程序员正在滥用 GitHub，比如有人买 Star 登上 GitHub Trends 排行榜。

## 工具

1、[playwright-python](https://github.com/microsoft/playwright-python)

微软推出的浏览器自动化工具，特点是浏览器的控制脚本用 Python 来写。

2、[Anbox](https://anbox.io/)

![](https://www.wangbase.com/blogimg/asset/202010/bg2020100508.jpg)

Linux 系统的安卓模拟器。

3、[Diagram Maker](https://github.com/awslabs/diagram-maker)

![](https://www.wangbase.com/blogimg/asset/202010/bg2020100602.jpg)

亚马逊推出的开源流程图制作工具。

4、[DigitalOcean 应用程序平台](https://www.digitalocean.com/blog/introducing-digitalocean-app-platform-reimagining-paas-to-make-it-simpler-for-you-to-build-deploy-and-scale-apps)

![](https://www.wangbase.com/blogimg/asset/202010/bg2020100702.jpg)

DigitalOcean 发布应用程序平台，跟 GitHub 深度融合，可以直接把 GitHub 项目在上面部署和运行，很适合那些需要后端的网络应用。

5、[Apache JMeter](https://www.2n.pl/blog/apache-jmeter)

![](https://www.wangbase.com/blogimg/asset/202010/bg2020100711.jpg)

一个服务器和数据库的性能压测工具，具有图形界面。

6、[nb](https://github.com/xwmx/nb)

![](https://www.wangbase.com/blogimg/asset/202010/bg2020100803.jpg)

一个命令行的笔记软件。

7、[Frame](https://framevr.io/)

![](https://www.wangbase.com/blogimg/asset/202010/bg2020100815.jpg)

![](https://www.wangbase.com/blogimg/asset/202010/bg2020100814.jpg)

这个网站很新奇，用户在 VR 空间“面对面”开虚拟会议。如果没有 VR 头盔，裸眼也可以使用。

8、[optimizt](https://github.com/funbox/optimizt)

![](https://www.wangbase.com/blogimg/asset/202010/bg2020100901.jpg)

一个命令行图片压缩工具，支持压缩 PNG、JPEG、GIF 和 SVG 格式，并可以选择输出 WebP 格式。

9、[Calligrapher.ai](https://www.calligrapher.ai/)

![](https://www.wangbase.com/blogimg/asset/202010/bg2020100902.jpg)

一个在线工具，可以将英文输入变成手写体，并具有动画效果，提供 SVG 格式下载。上图是输入 Google 的效果。

10、[github-daily](https://github.com/headllines/github-daily)

![](https://www.wangbase.com/blogimg/asset/202010/bg2020101603.jpg)

通过 GitHub 的 Action 定时执行脚本，获取 GitHub Trending Top 10，并且记录到了项目的 issue 里。用户可以通过 watch GitHub 仓库或者 RSS 订阅更新。（[@timqian](https://github.com/ruanyf/weekly/issues/1440) 投稿）

## 资源

1、[CSS 3D 示例](https://polypane.app/css-3d-transform-examples/)

该网页收集一些常用 CSS 3D 示例。

2、[漫游者的压缩知识指南](https://go-compression.github.io/)

一个面向初学者的英文的简单教程，介绍数据压缩知识，了解压缩算法。

3、[宇宙模型](http://stars.chromeexperiments.com/)

![](https://www.wangbase.com/blogimg/asset/202010/bg2020100710.jpg)

一个浏览器的 3D 显示实验项目，在网页上展示10万颗恒星，讲解宇宙知识。

4、[names.io](https://github.com/Debdut/names.io)

![](https://www.wangbase.com/blogimg/asset/202010/bg2020100802.jpg)

这个仓库通过各种数据库，收集所有出现过的英语人名（包括外国人的英文译名），分成姓和名两个文件。

## 图片

1、[现代陶瓷窑厂](https://www.archdaily.cn/cn/918363/jing-de-zhen-bing-ding-chai-yao-zhang-lei-lian-he-jian-zhu-shi-wu-suo)

一家南京建筑师事务所将景德镇浮梁县前程村的丙丁木窑工厂，改建成混凝土建筑。

![](https://www.wangbase.com/blogimg/asset/202010/bg2020100810.jpg)

![](https://www.wangbase.com/blogimg/asset/202010/bg2020100813.jpg)

当地距景德镇市区不到一小时车程，四面环山，竹林环绕，有溪水从基地中间流过，环境清幽。夜间烧窑时，有着惊人的美丽，工业与自然的融合。

![](https://www.wangbase.com/blogimg/asset/202010/bg2020100812.jpg)

![](https://www.wangbase.com/blogimg/asset/202010/bg2020100811.jpg)

2、[海拔7000米的天空颜色](https://www.dcfever.com/news/readnews.php?id=28338)

天空在地面上看是蓝色的，但是到了海拔7000米，还是蓝色的吗？

日本摄影师上田优纪发布了，她在喜马拉雅山脉的高山上拍的照片。她写道：“海拔越高，天空的颜色就越深，从蓝色变成了深蓝。超过（海拔）7,000米的话，天空的颜色会变成近似漆黑的宇宙。”

![](https://www.wangbase.com/blogimg/asset/202007/bg2020071401.jpg)

![](https://www.wangbase.com/blogimg/asset/202007/bg2020071402.jpg)

![](https://www.wangbase.com/blogimg/asset/202007/bg2020071403.jpg)

天空是蓝色的，主要原因是蓝光的波长较短，容易被空气中的颗粒物发生散射。7000米海拔的空气颗粒物较少，散射减少，天空颜色变深似乎是合理的。但是如果那样的话，为什么在高空的飞机上看出去，天空还是蓝色的呢？

## 文摘

1、[工作风险和职业风险](https://eriktorenberg.substack.com/p/starting-a-company-is-less-risky)

有一种观点认为，创业者最好先加入大厂，等到建立了自己的人际网络、品牌和技能以后，再开始创业。

我不认同这种观点。 

并不是说你在大厂不会有成就，你会有的，但是这跟创业是两回事。最终来说，在大厂工作，你主要学到的就是如何在大厂工作，让你知道内部运作良好的大公司是怎么回事。创业则是从0到1，这跟在大厂工作是完全不同的另一种技能。 

风险可以分成两种：工作风险和职业风险。

- 工作风险：你的工作将不再存在的可能性。
- 职业风险：你的长期职业受到负面影响的可能性。

创业公司的工作风险要比大公司高得多，但它们会大大降低你的职业风险。 创业失败并不会令你的简历失色。相反地，在很多人眼里，这是你一生都随身携带的荣誉徽章：你去过竞技场。

不过，创业并不适合所有人，大多数人其实都不适合创业。

创业只适合那些希望成为创始人的人。创业者要承受巨大的压力，可能会很孤独，也可能会产生认知失调、自我怀疑和其他副作用。你会牺牲掉生活的稳定性和内心的平静（也许是幸福）。

如果你不想成为创始人，请不要创业。 

但是，如果你确实想成立公司，请尽量比你想象的更早开始，不要误以为你必须先在别的公司工作，然后才能开始创业。

2、**心脏移植手术的诞生**

作者：[英] 比尔·布莱森

摘自《人体简史》一书（文汇出版社，2020）。

心脏移植是个伟大的梦想，但在许多地方，它面临着一个看似无法克服的障碍：除非心脏已停止跳动，否则不能宣布心脏的主人死亡。但是，一旦心脏停止跳动，它就无法再进行移植了。

如果摘下一颗还在跳动的心脏（哪怕心脏的主人已经失去了其他所有身体机能），做手术的医生可能要承担谋杀的罪名。

![](https://www.wangbase.com/blogimg/asset/202010/bg2020100801.jpg)

历史上，南非是一个没有这类法律的地方。1967年，南非开普敦外科医生克里斯蒂安·巴纳德（Christiaan Barnard）将一名死于车祸的年轻女士的心脏，植入了54岁男患者路易斯·瓦什坎斯基（Louis Washkansky）的胸腔。这被誉为一项伟大的医学突破，尽管实际上瓦什坎斯基18天后就死了。巴纳德的第二名移植患者运气好得多。这是一名叫作菲利普·布莱贝格（Philip Blaiberg）的退休牙医，他多活了19个月。

巴纳德进行心脏移植之后，其他国家相继制定政策，改用脑死亡作为死亡和衡量标准。很快，各国都开始尝试心脏移植，但结果却几乎总是令人沮丧。主要问题在于缺乏一种完全可靠的免疫抑制药物来解决排斥反应。装入一颗别人的心脏，人体会产生排斥，使得心脏移植失败。

1969年，瑞士制药公司山德士的一名员工 H. P. 弗雷（H. P. Frey）到挪威度假，采集了一些土壤样本带回了公司实验室。该公司曾要求员工在旅行时这样做，以期找到潜在的新抗生素。弗雷的样本中含有一种真菌多孔木霉，它没有任何有用的抗生素特性，但在抑制免疫反应方面表现出色——这正为器官移植所需要。山德士将弗雷采集的一小袋泥土，以及此后在威斯康星州发现的类似样品变成了畅销药环孢素。多亏了这种新药和一些相关的技术改进，到20世纪80年代初，心脏移植的成功率达到了80％，在短短15年里实现了一项了不起的成就。

今天，全球每年要进行4000~5000次心脏移植手术，患者的平均存活时间为15年。到目前为止，存活时间最长的移植患者是英国人约翰·麦克菲迪（John McCafferty），他靠着移植心脏活了33年，2016年73岁时去世。

## 言论

1、

只有员工倾向于长期待在一家公司中，培训员工才是有意义的。

-- [保罗·格雷厄姆](https://news.ycombinator.com/item?id=24624950)（Paul Graham）

2、

切勿购买需要连接互联网的家电产品。它们不仅不安全，而且还会收集你的信息，并试图向你播放广告。

-- [Hacker News 读者](https://news.ycombinator.com/item?id=24625626)

3、

对我来说，写一本书跟创业的困难程度是一样的。所以，我出版了第一本书以后，就没有接着写第二本书。我还在等第一本书的伤疤消失，并且天真地希望写下一本书也许会容易一些。

-- [《写书：值得吗？》](https://martin.kleppmann.com/2020/09/29/is-book-writing-worth-it.html)

4、

氢气（H2）不是能源，因为它不存在于自然界，必须通过消耗其他能源才能生产出来。因此，氢气燃料电池更恰当的描述是能量存储系统，而不是能源。

-- [Hacker News 读者](https://news.ycombinator.com/item?id=24568930)

5、

没有愚蠢的想法，只有早期的想法。

-- [马克·安德森（Marc Andreessen）](https://eriktorenberg.substack.com/p/take-asymmetric-bets)

6、

人们认为保持专注，意味着要对那些必须专注去做的事情说 Yes。其实并非如此，保持专注的真正含义是对其他一百个好主意说 No。

-- [乔布斯](https://www.inc.com/marcel-schwantes/warren-buffett-says-this-is-1-simple-habit-that-separates-successful-people-from-everyone-else.html)

## 回顾

2019年的本周（第 78 期）：[下一个风口是什么行业？](http://www.ruanyifeng.com/blog/2019/10/weekly-issue-78.html)

![](https://www.wangbase.com/blogimg/asset/201910/bg2019101707.jpg)

2018年的本周（第 26 期）：[DHH 的新书《工作何必疯狂》](http://www.ruanyifeng.com/blog/2018/10/weekly-issue-26.html)

![](https://www.wangbase.com/blogimg/asset/201810/bg2018101201.jpg)

## 订阅

这个周刊每周五发布，同步更新在[阮一峰的网络日志](http://www.ruanyifeng.com/blog)和[微信公众号](http://weixin.sogou.com/weixin?query=%E9%98%AE%E4%B8%80%E5%B3%B0%E7%9A%84%E7%BD%91%E7%BB%9C%E6%97%A5%E5%BF%97)。

微信搜索“阮一峰的网络日志”或者扫描二维码，即可订阅。

![](http://www.ruanyifeng.com/blogimg/asset/2018/bg2018042311.jpg)

（完）
