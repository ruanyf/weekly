# 科技爱好者周刊（第 265 期）：WiFi 的后面是 LiFi

这里记录每周值得分享的科技内容，周五发布。

本杂志[开源](https://github.com/ruanyf/weekly)，欢迎[投稿](https://github.com/ruanyf/weekly/issues)。另有[《谁在招人》](https://github.com/ruanyf/weekly/issues/3324)服务，发布程序员招聘信息。合作请[邮件联系](mailto:yifeng.ruan@gmail.com)（yifeng.ruan@gmail.com）。

## 封面图

![](https://cdn.beekka.com/blogimg/asset/202308/bg2023080303.webp)

8月2日，日本能代市举办一年一度的“天空的不夜城”花灯游行，这是为了纪念当地古代的灯笼节。如果不说，这照片看起来真像 AI 生成的。（[via](https://noshirotanabata.com/)）

## WiFi 的后面是 LiFi

今年6月，IEEE（电气和电子工程师协会）通过了 [802.11bb 标准](https://www.ednchina.com/news/a11769.html)。

它是光通信标准，也就是**通过光上网，英文简写为 LiFi**，一看就跟 WiFi 有血缘关系。其中，LiFi 的 L 代表了 Light（光）。

![](https://cdn.beekka.com/blogimg/asset/202307/bg2023073105.webp)

国内的报道并不多，但这是一个很有意思的技术，值得好好谈一下。

首先说说 LiFi 到底是什么？

我们知道，无线上网使用的是无线电波，将上网信号调制在无线电波里面。

无线电波是电磁波，光波也是电磁波，**所以我们也可以把上网信号调制在光波里面，通过光来上网。**

![](https://cdn.beekka.com/blogimg/asset/202307/bg2023073106.webp)

光波传送无线信号，有一些显著的优点。

**（1）带宽极大。**

WiFi 使用的频率是 2.4 GHz 和 5 GHz，最多再加上 6 GHz。而光的频率是 430 THz 到 750 THz，是 WiFi 的几十万倍。

频率越高，可以加载的信号越多，带宽越大。所以，光波上网的带宽是难以想象的。当然，频率越高，穿墙能力越弱。

**（2）没有无线电干扰。**

任何对无线电敏感的场合都可以使用光波上网，比如飞机、手术室等。光也不存在辐射问题，对人体无害。

**（3）没有频谱资源限制。**

光波不需要像无线电波那样申请频段，频谱资源极其丰富。

**（4）技术难度低。**

光波的调制和解调，没有什么技术难度，厂家可以快速投入生产，产品成本也不高。

我在网上查到，oppo 2020年就申请了 LiFi 手机的专利。

![](https://cdn.beekka.com/blogimg/asset/202307/bg2023073107.webp)

笔记本也有的专门 LiFi 收发器，插在 USB 口就行了。

![](https://cdn.beekka.com/blogimg/asset/202307/bg2023073108.webp)

但是，LiFI 也有难以克服的缺点。

最大的问题是，LiFi 上网需要发光的灯泡，这意味着，关灯就没信号了。

![](https://cdn.beekka.com/blogimg/asset/202307/bg2023073109.webp)

而且，信号接收器需要正对灯泡，距离也不能太远，我看到的报道是说3米之内。

另外，上传数据怎么办呢？显然，上网设备（手机和电脑）也需要有灯泡，才能上传数据。

如此看来，LiFi 不能替代 WiFi，而是它的补充，适用于某些特殊场合，比如需要极大带宽。

![](https://cdn.beekka.com/blogimg/asset/202308/bg2023080307.webp)

我正好看到一个报道，主板的 [PCIe 接口打算改用光通信](https://news.mydrivers.com/1/926/926700.htm)。这倒是非常适用的场合，LiFi 正好满足带宽要求，而且机箱内部省去了线材。

总之，一想到通过灯泡上网，我就觉得这个场景很有意思，充满了科幻色彩。LiFi 现在已经是国际标准了，希望不久就能看到实际的产品上市。

## 科技动态

1、[绿色海洋](https://www.vice.com/en/article/3aka3b/youre-not-imagining-it-the-ocean-has-changed-color-over-20-years-study-determines)

蓝色大海，以后可能变成绿色大海。

英国海洋研究中心发表报告，根据20年来的卫星观测，科学家发现，由于气候原因，海洋正变得越来越绿。

![](https://cdn.beekka.com/blogimg/asset/202307/bg2023071303.webp)

主要原因是海温上升，以及大气二氧化碳含量增加，大大促进了浮游植物的生长。

这些浮游植物含有叶绿素，能反射绿光。凡是它们大量繁殖的地方，海洋就会变成绿色。

2、[AI 取代配音演员](https://www.axios.com/2023/07/24/ai-voice-actors-victoria-atkin-assassins-creed)

配音演员维多利亚·阿特金 (Victoria Atkin) 曾经为2015年育碧公司发行的冒险游戏《刺客信条：枭雄》配音，扮演女主角。

![](https://cdn.beekka.com/blogimg/asset/202308/bg2023080101.webp)

她最近惊恐地发现，有一个游戏爱好者拿她的语音作为训练材料，使用 AI 生成了2011年的史诗游戏《上古卷轴 V》的完整配音包，放到网上供大家下载。

![](https://cdn.beekka.com/blogimg/asset/202308/bg2023080102.webp)

她说，令她害怕的，并不是自己的声音被盗用，而是将来的配音都由 AI 生成，她将从此失业。

美国配音演员协会已经提出，与游戏公司重新谈判，限制 AI 语音的使用，保障配音演员的收入。但是，估计没什么用，配音行业的消失只是时间问题。

3、[智能手枪](https://www.wsj.com/amp/articles/the-first-smart-gun-is-finally-coming-to-market-will-anyone-buy-it-67314e0)

世界第一支智能手枪在美国上市，具有用户验证功能，其他人无法开枪。

![](https://cdn.beekka.com/blogimg/asset/202307/bg2023072911.webp)

它的枪柄上有指纹识别，背面还带有摄像头，能够面部识别，只有通过验证才能开枪。显然，它需要充电。

![](https://cdn.beekka.com/blogimg/asset/202307/bg2023072912.webp)

该枪售价1,499美元，普通的类似手枪通常售价在400～800美元之间。发明者称，它可以防止美国的枪支暴力泛滥。

![](https://cdn.beekka.com/blogimg/asset/202307/bg2023072913.webp)

4、[Apple Vision Pro 的开发条件](https://arstechnica.com/gadgets/2023/07/here-are-the-rules-for-apples-new-vision-pro-dev-kit-your-family-cant-see-it/)

苹果公司开始向开发者提供 Vision Pro 真机，用来提前开发应用软件。

但是，这个计划的参加条件近乎变态。

![](https://cdn.beekka.com/blogimg/asset/202307/bg2023073001.webp)

苹果要求开发者：

> - 只能在可上锁的**无窗房间**中使用
> - 你的朋友和家人不能看到它
> - 机器必须始终保持在你的视线范围内
> - 不使用时必须将其放入盒子并上锁
> - 未经苹果事先书面同意，不得将机器转移到其他地址（比如带回家）
> - 如果你要进行长途旅行或度假，离开工作空间超过10天，必须咨询苹果，保证机器的安全。

联想到苹果从不谈这台机器的细节，以及没有任何一张苹果高管佩戴这款头盔的照片，媒体猜测它应该存在一些问题，达不到大家的预期。

所以，苹果不愿意让外界对它有过多关注、过高期待，否则到了明年发售的时候，市场一片失望之声，就对苹果很不利。

## 文章

1、[首枚液氧甲烷火箭成功入轨](https://news.sina.com.cn/c/2023-08-01/doc-imzesefx8781568.shtml)（中文）

7月12日，中国民营的蓝箭航天发射了朱雀二号火箭。这是全球首枚成功入轨的液氧甲烷火箭。

![](https://cdn.beekka.com/blogimg/asset/202308/bg2023080201.webp)

这篇报道介绍了这个事件，以及液氧甲烷作为火箭燃料的意义。

2、[Python 标准库隐藏的命令行工具](https://til.simonwillison.net/python/stdlib-cli-tools)（英文）

![](https://cdn.beekka.com/blogimg/asset/202306/bg2023063003.webp)

Python 默认安装了一些命令行工具，可以直接使用，比如压缩/解压缩。

3、[如何在安卓设备安装 Linux 桌面？](https://mrs-t.medium.com/transform-your-android-device-into-a-linux-desktop-110a3d084ac6)（英文）

![](https://cdn.beekka.com/blogimg/asset/202308/bg2023080205.webp)

如何让安卓手机变成 Linux 设备？作者使用 Termux 这个 App，在安卓手机上提供 Linux 桌面环境。

4、[我修改了 SQLite，让它可以网络访问](https://blog.turso.tech/sqlite-based-databases-on-the-postgres-protocol-yes-we-can-358e61171d65)（英文）

![](https://cdn.beekka.com/blogimg/asset/202307/bg2023070406.webp)

作者修改了 SQLite，让它提供网络接口，可以直接通过网络请求。

5、[我如何隐藏自己的网络身份](https://k3tan.com/starting-a-new-digital-identity)（英文）

![](https://cdn.beekka.com/blogimg/asset/202307/bg2023070407.webp)

互联网上如何保持匿名，作者介绍自己采取的各种措施。

6、[Arm64 汇编语言入门教程](https://www.deusinmachina.net/p/the-basics-of-arm64-assembly)（英文）

![](https://cdn.beekka.com/blogimg/asset/202304/bg2023040701.webp)

针对初学者的 Arm64 教程长文，从零开始教你写一个汇编程序。

7、[容器编排器的自我介绍](https://mp.weixin.qq.com/s/F9g-r4yBYDZ1Q9z6uq5feQ)（中文）

本文以第一人称介绍管理容器的三个容器编排器——Docker Compose、Swarm、Kubernetes。（[@xxxsalted](https://github.com/ruanyf/weekly/issues/3325) 投稿）

8、[手工解码二维码](https://blog.qartis.com/decoding-small-qr-codes-by-hand/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202306/bg2023060302.webp)

本文举例演示，如何只用纸和笔，解码二维码。

## 工具

1、[Vanilla](https://open.vanillaforums.com/)

![](https://cdn.beekka.com/blogimg/asset/202211/bg2022111401.webp)

PHP 的论坛程序，功能强大，也很美观。

2、[GitHub 名片](https://github-business-card.vercel.app/)

![](https://cdn.beekka.com/blogimg/asset/202211/bg2022111402.webp)

这个网页可以根据 GitHub 主页，生成用户的 GitHub 名片。

3、[Equal UI](https://equal-ui.github.io/Equal/)

![](https://cdn.beekka.com/blogimg/asset/202302/bg2023020501.webp)

基于 Tailwind CSS 的一套 Vue 3 组件库。

4、[emaction](https://github.com/emaction/emaction.frontend)

![](https://cdn.beekka.com/blogimg/asset/202308/bg2023080210.webp)

一个 Web Component，生成类似 GitHub 的 Emoji 反馈栏。（[@tiezhudotwang](https://github.com/ruanyf/weekly/issues/3309) 投稿）

5、[ChatHub](https://github.com/chathub-dev/chathub)

![](https://cdn.beekka.com/blogimg/asset/202308/bg2023080211.webp)

浏览器插件，在一个页面中同时使用多个 GPT （ChatGPT、new Bing Chat、Google Bard、Claude 等）。（[@wong2](https://github.com/ruanyf/weekly/issues/3310) 投稿）

6、[Whistle 客户端](https://github.com/avwo/whistle-client)

![](https://cdn.beekka.com/blogimg/asset/202308/bg2023080212.webp)

一个基于 Whistle (命令行版本) + Electron 的跨平台桌面程序，用来调试各种网络请求，查看流量细节。（[@ATQQ](https://github.com/ruanyf/weekly/issues/3312) 投稿）

7、[Erin](https://erin-homepage.vercel.app/)

![](https://cdn.beekka.com/blogimg/asset/202308/bg2023080304.webp)

Chrome 浏览器插件，将标签显示为类似 macOS 底部 Dock 图标栏的风格。（[@Developer27149](https://github.com/ruanyf/weekly/issues/3318) 投稿）

8、[AI Code Translator](https://aicodeconvert.com/)

![](https://cdn.beekka.com/blogimg/asset/202308/bg2023080305.webp)

该网站可以将一种语言的程序，转换成另一种语言。用户也可以描述想要什么程序，它来生成代码。（[@JustAIGitHub](https://github.com/ruanyf/weekly/issues/3322) 投稿）

9、[Slashbase](https://github.com/slashbaseide/slashbase)

![](https://cdn.beekka.com/blogimg/asset/202211/bg2022110902.webp)

一个基于浏览器的数据库操作 IDE，有点类似 PHPMyAdmin，但使用 Go 语言编写，并且支持 PostgreSQL 和 MongoDB。

10、[YouPlot](https://github.com/red-data-tools/YouPlot)

![](https://cdn.beekka.com/blogimg/asset/202301/bg2023011302.webp)

一个命令行工具，可以在终端显示图形。

11、[PrettyPolly](https://www.prettypolly.app/app)

![](https://cdn.beekka.com/blogimg/asset/202308/bg2023080310.webp)

学习外语时，最好有一个对话环境，可以练习口语，这个 AI 应用就解决了这个问题。

它目前提供26种语言（包括中文、日文和韩文），你在网页上选择一种，就可以与 AI 进行口语练习了。感觉以后国内的外语培训产业，都要被 AI 取代了。

## 资源

1、[JavaScript 框架的历史](https://programmingsoup.com/history-of-javascript-frameworks)

![](https://cdn.beekka.com/blogimg/asset/202305/bg2023051204.webp)

一本英文小册子，介绍 JavaScript 的发展历史，从最早的 Prototype.js、Dojo、Mootools、YUI 一直到最新的微前端框架、Islands 框架。

2、[学习 Makefile](https://makefiletutorial.com/)

![](https://cdn.beekka.com/blogimg/asset/202305/bg2023051601.webp)

Make 命令的一个英文教程。

3、[NixOS 与 Flakes 新手指南](https://nixos-and-flakes.thiscute.world/zh/)

![](https://cdn.beekka.com/blogimg/asset/202308/bg2023080213.webp)

中文的开源书籍，帮助新人快速上手使用 NixOS。（[@ryan4yin](https://github.com/ruanyf/weekly/issues/3315) 投稿）

4、 [SwiftUI 100 视频教程](https://www.hackingwithswift.com/100/swiftui)

![](https://cdn.beekka.com/blogimg/asset/202306/bg2023061702.webp)

一个外网的 SwiftUI 系列视频教程，共有100讲。

## 图片

1、[世界最高的无钢筋混凝土建筑](https://www.amusingplanet.com/2020/08/sway-tower-14-story-folly-and-world.html)

1879年，一个英国法官从印度退休，回到英国乡下老家。一天，他突然说收到了神明的指示，要他在当地建造一座高塔。

于是，他就请人在一片荒地里面，造出一座很奇怪的高塔。

![](https://cdn.beekka.com/blogimg/asset/202205/bg2022050511.webp)

1886年，这座塔竣工，高度为66米，采用无钢筋的混凝土建造，直到今天依然是世界最高的同类建筑。

![](https://cdn.beekka.com/blogimg/asset/202205/bg2022050512.webp)

![](https://cdn.beekka.com/blogimg/asset/202205/bg2022050513.webp)

由于该塔实在没有用途，在他1906年死后，就逐渐沦为养鸽子的地方。后来，有人买下了它，改建为住宅，2018年上市销售。

下图是塔里面的楼梯。

![](https://cdn.beekka.com/blogimg/asset/202205/bg2022050514.webp)

下图是改建后的住宅。

![](https://cdn.beekka.com/blogimg/asset/202205/bg2022050515.webp)

2、[迪斯尼乐园的字母雕塑](https://cabel.com/2023/07/30/fantasy-meets-reality/)

美国的迪斯尼加州冒险乐园刚开张时，门前有一排巨大的字母 CALIFORNIA。

![](https://cdn.beekka.com/blogimg/asset/202308/bg2023080104.webp)

它采用的是 Futura Condensed 字体，但是唯独字母 F 有变动。

![](https://cdn.beekka.com/blogimg/asset/202308/bg2023080105.webp)

上图的白色轮廓是原来的字体，绿色的是实际的字体。可以看到，字母 F 的下面横杠被抬高了。

这样的改动有两个原因：防止人们爬上去，坐在横杠上面，以及避免人们撞到头。

## 文摘

1、[音频产品的制造学](https://www.audiosciencereview.com/forum/index.php?threads/secrets-about-the-consumer-audio-business-you-may-find-interesting.37344/)

过去几年，我在一家消费音频电子公司工作，也就是生产耳机和喇叭的公司。

![](https://cdn.beekka.com/blogimg/asset/202308/bg2023080306.webp)

那是一家小公司，瞄准中端市场，商品价格大概在100美元～300美元之间。

我想透露一些内幕，揭开这个行业的一些面纱。这些实际上都不是秘密，从业者心知肚明，但是不为业外人士所知。

（1）消费类音频电子产品的成本，一般不超过商场零售成本的30%。也就是说，100美元的商品，生产成本大概是30美元，零售商会拿走50美元，还有20美元是我们的毛利。

业内的高端耳机，成本并不比中端产品高，但是他们开价更高，因为人们愿意为这些品牌付出高价。另外，广告多的耳机并不意味着它的成本就较高。

（2）很少有音频品牌经营自己的工厂。几乎所有的消费品牌都只是转售贴牌产品，或者外包给海外工厂。

（3）大多数中国工厂和工程师完全有能力生产高端产品，但客户不要求这样做。很多找中国工厂代工的品牌商，都要求生产最便宜、成本最低的产品。

这完全可以理解，你愿意在100件商品上每件赚50美元，还是在100,000件商品上每件赚5美元？另一方面，中国代工厂也更愿意大批量、低定价的订单，而不是需要经常切换生产线的小批量、高定价的订单。工厂更喜欢少量大合同，而不是大量的小合同。

（4）音频公司并不都像你想的那样成熟。如今这个时代，你不需要任何专门学位就可创建音频品牌，许多公司甚至没有任何工程师或设计自己的产品，而是把一切外包。音频公司本身只负责宣传、产品规划和定价。

（5）运费是一项很大的成本因素。扬声器是一种很重的商品，尺寸和重量往往越大越好，只要多转运几次，就会导致快速增长的物流成本。

（6）包装成本可能比你想的更重要。对于中低端的入耳式耳机，包装的价格很可能高于耳机本身。你可以2美元的价格购买一付低端耳机，并将其放入3美元的盒子中，最后在亚马逊上售价20美元左右。

即使是高端产品，也有可能有很高的包装成本。价值 10 美元的盒子（印刷、泡沫、漂亮的手册等）并不难。当产品的出厂成本为100美元时，其中的包装成本可能近30美元（印刷、泡沫材料、漂亮的手册等）。

（7）生产成本不包括研发和推广成本，这部分支出是很高的。良好的设计和生产，会让低成本的产品具有更好的音响效果。我个人宁愿花100美元购买零件价值10美元、并以最佳方式组合在一起的产品，也不愿花100美元购买零件价值50美元、并乱七八糟地组装起来的产品。

从这个意义上说，成本价占零售价30%是非常公平甚至很低的，尤其对于那些自己进行研发的公司而言。如果你一定要产品非常廉价，要么消费者要么拿到质量很差的产品，要么是公司最终倒闭。

## 言论

1、

科学研究最重要的行为准则之一，就是“不要相信权威的话”。他们太多的论点被证明是错误的，权威必须像其他人一样证明他们的论点。

-- [卡尔·萨根](https://www.aleksandra.codes/tech-content-consumer)，美国著名科普作家

2、

AI 模型需要用户清晰描述他的问题，但是当代社会有一半人的表达能力不够好，无法从（当前的）AI 模型得到理想的结果。

-- [《AI：60年来第一个新的 UI 范式》](https://www.nngroup.com/articles/ai-paradigm/)

3、

以后有了 AI，用户不再告诉计算机该做什么，而是告诉计算机他们想要什么结果。

UI（用户界面）设计将要大变，以后的 UI 范式将基于用户意图。

-- [《AI：60年来第一个新的 UI 范式》](https://www.nngroup.com/articles/ai-paradigm/)

4、

事情几乎总是从某个人做一些当时看起来毫无用处的事情开始的。

-- [詹姆斯·伯克](https://www.northarc.com/wrench/www/)，英国科技史家

5、

如果想长期吸收学到的东西，你必须参与其中，亲自动手实践。

但是，在智能手机流行的社会，真正的参与变得比以前困难。人们已经习惯了被动浏览别人的作品，分享、点赞和转发替代了自己的参与。

-- [《如何在数字时代更好地学习》](https://giansegato.com/essays/edutainment-is-not-learning)

## 历史上的本周

[葡萄酒，樱花，全球变暖](http://www.ruanyifeng.com/blog/2022/08/weekly-issue-218.html)（2022 #218）

[游戏《底特律：变人》](http://www.ruanyifeng.com/blog/2021/07/weekly-issue-168.html)（2021 #168）

[高考志愿怎么填](http://www.ruanyifeng.com/blog/2020/07/weekly-issue-118.html)（2020 #118）

[关注能力的成长，胜于关注待遇](http://www.ruanyifeng.com/blog/2019/08/weekly-issue-68.html)（2019 #68）

（完）

