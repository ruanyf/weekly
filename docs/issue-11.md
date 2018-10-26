# 每周分享第 11 期

这里记录过去一周，我看到的值得分享的东西，每周五发布。

![](https://www.wangbase.com/blogimg/asset/201806/bg2018062901.jpg)

（题图：虎跑后山，杭州，2016。

很多人去虎跑泉游玩，却不知道，泉眼后面的山是可以爬上去的，山顶有很棒的视野。翻过山就是九溪，可以一直走到龙井村或杨梅岭。）

=============================

6月27日，TC39 委员会正式通过了[《ECMAScript 2018标准》](https://medium.com/front-end-hacking/javascript-whats-new-in-ecmascript-2018-es2018-17ede97f36d5)，新增了四个较大的语法点，以及几个较小的语法点。我看了一下后面还有50多个正在排队、等待进入标准的提案。如果算上 Stage 0 的提案，JS 可能还会增加100多个语法点。

再过两个月，TC39 委员会的下一次会议，新的《ES2019 标准》就会启动，加入新的语法功能。以前我觉得类库变得快，现在才发现语言本身的变化更快。

不仅是 JS，几乎所有的主流语言都有加速变动的趋势。JS 两个月加一次语法，Java 每半年发一次版本，C/C++ 几年发一个版本。另外，每个系统都在推自己的语言，安卓是 kotlin，iOS 是 swift，Fuchsia 是 dart，再加上Py、GO、Rust、wasm......新语言层出不穷，每种语言都在快速迭代，加入新的语法和功能。

我猜想，未来精通多门语言的人可能会非常少，因为每门语言都涉及很多东西，入门不难，精通很困难。每个人只懂一两个系统，这样带来的后果就是，万一你精通的那个系统不行了，换跑道会有很大难度。

## 新闻

1、[Keynote 支持 LaTex](https://support.apple.com/en-sg/HT202501)

![](https://www.wangbase.com/blogimg/asset/201806/bg2018062902.jpg)

苹果公司的幻灯片软件 Keynote 支持 LaTeX 语法了。虽然我很少使用这个软件，这个功能真的很赞，系统级别的数学公式支持。

2、[谷歌云支持 Node](https://cloudplatform.googleblog.com/2018/06/Now-you-can-deploy-your-Node-js-app-to-App-Engine-standard-environment.html?m=1)

![](https://www.wangbase.com/blogimg/asset/201806/bg2018062903.jpg)

谷歌云宣布支持 Node 应用托管，小型应用免费。以后架设一个 Web 服务就太简单了。

3、[Deepin 创始人王勇宣布离职](https://www.linuxidc.com/Linux/2018-06/152866.htm)

![](https://www.wangbase.com/blogimg/asset/201806/bg2018062904.jpg)

Deepin 是一个很有人气的国产 Linux 发行版。创始人兼 CTO 王勇在 Deepin 官网论坛发表声明，表示因个人原因离职。在离职声明里面，他谈到创立公司八年，遇到了很多困难。

> * 写代码太累下班晚上要靠输液才能继续第二天继续上班
> * 晚上陪客户喝酒，喝三场，吐了无数次，实在喝不下去了还要一口闷
> * 很长一段时间天天加班，睡在公司，老婆只能把小朋友抱到公司楼下才能逼我回家
> * 遇到人生很多惨痛的打击，不想再继续人生了，哭的痛不欲生

4、__90+岁老人的活力__

马来西亚总理马哈蒂尔92岁，整天出席竞选活动做演讲；朝鲜议长金永南90岁，出席世界杯开幕式会见普金。

![](https://www.wangbase.com/blogimg/asset/201806/bg2018062905.jpg)

![](https://www.wangbase.com/blogimg/asset/201806/bg2018062906.jpg)

他们刷新了我的认识，90+岁的人还具有工作能力，未来也许会出现百岁工人。顺便说一句，他们的头发还都是黑的，至少马哈蒂尔看上去不是染的。

5、[Airbnb 放弃使用 React Native](https://medium.com/airbnb-engineering/sunsetting-react-native-1868ba28e30a)

![](https://www.wangbase.com/blogimg/asset/201806/bg2018062907.jpg)

Airbnb 是 React Native 的早期使用者，经过2年多的使用以后，他们现在宣布放弃React Native，改用基于 Native 技术的自有框架开发 App。

主要原因还是RN做不到百分百的跨平台抽象，有些问题必须针对特定平台单独写代码。这导致工程师必须熟悉三个平台（RN、安卓和iOS），才能用好RN。这要求实在太高了，大多数人只熟悉一两个平台，因此带来了一系列细节问题。

6、[海南：打造外国游客集聚区 区内可使用脸书推特](http://news.sina.com.cn/o/2018-06-21/doc-ihefphqm2432435.shtml)

海南省人民政府办公厅6月21日发布文件称，将用三年时间提升旅游国际化水平。至2020年，入境游客量提升至200万人次，力争引进涉旅境外务工人员5万名。

这份名为《提升海南旅游国际化水平三年行动计划（2018-2020年）》称，海南计划依托海口、三亚2座重点旅游城市，有计划打造外国游客集聚区。集聚区内，外国人可正常使用国外流行的Facebook、Twitter、YouTube。

7、[VR180 视频](https://itsfoss.com/vr180-creator/)

![](https://www.wangbase.com/blogimg/asset/201806/bg2018062908.jpg)

各种 VR 头盔、VR 眼镜，现在看到的都是360度的全景视频。谷歌提出了一种新的视频格式 VR180，即只录制180度的平面视频。它的原理很简单，就是两个镜头模仿人的双眼，播放的时候重合起来就会有立体效果。

谷歌还推出了一个免费的视频编辑软件，可以编辑 VR180 视频。

8、[Youtube 的赞助费功能](https://techcrunch.com/2018/06/21/youtube-introduces-channel-memberships-merchandise-and-premieres/)

![](https://www.wangbase.com/blogimg/asset/201806/bg2018062909.jpg)

Youtube宣布，如果你的订阅者超过10万，就可以向粉丝收赞助费，每月4.99美元。交钱的粉丝将拥有定制的头像徽章和独家表情。 中国人的发明又一次赢得了世界。 

9、[自动弹起的摄像头](https://m.weibo.cn/status/4255846378496704)

以下消息在微博流传，不知道真假。

![](https://www.wangbase.com/blogimg/asset/201806/bg2018062910.jpg)

10、__一句话新闻__

* [WiFi 联盟制定 WPA2 认证的升级版 WPA3，让 WIFI 变得更安全。](https://www.wi-fi.org/news-events/newsroom/wi-fi-alliance-introduces-wi-fi-certified-wpa3-security)
* [Electron 推出3.0版，Chrome、Node、V8 都有重大升级](https://electronjs.org/releases#3.0.0-beta.1)。
* [MongoDB 4.0 将支持数据库事务（transaction）](https://www.mongodb.com/transactions)。

## 教程

1、[git push --force-with-lease](https://blog.csdn.net/wpwalter/article/details/80371264)（中文）

不要用 git push --force，而要用 git push --force-with-lease 代替。在你上次提交之后，只要其他人往该分支提交给代码，git push --force-with-lease 会拒绝覆盖。

2、[为什么 Linux 用户更喜欢命令行？](https://www.fossmint.com/why-linux-users-prefer-the-commandline-to-a-gui/)（英文）

这篇文章讨论了为什么程序员更喜欢使用命令行，而不是图形界面。

3、[IPFS 教程](https://github.com/miaoski/ipfs-tutorial)（中文）

![](https://www.wangbase.com/blogimg/asset/201806/bg2018062911.jpg)

如果你想把一个文件放到网上，从此任何人无法删除和屏蔽，别人只要想看就能看到，你可以使用 IPFS。

它是一个分布式网络，采用点对点通信。内部是一个区块链，文件写入以后就没法删除了，然后通过哈希可以读出文件。缺点是本地需要架设一个客户端，资源开销有点大。

4、[Puppeteer 的一些使用经验](https://docs.browserless.io/blog/2018/06/04/puppeteer-best-practices.html)（英文）

Puppeteer 是谷歌推出的 Chrome 无头浏览器，是目前的浏览器自动化首选工具。本文介绍了作者的使用经验。

5、[GRAIL 笔迹识别算法](https://jackschaedler.github.io/handwriting-recognition/)（英文）

![](https://www.wangbase.com/blogimg/asset/201806/bg2018062912.jpg)

这篇教程详细介绍一种手写识别算法，并且附有多个可视化示例可以操作。这篇的英语看起来有点费劲，但是耐心看一定可以看懂，因为解释得很好，也没有复杂的数学。

6、[网页如何适配 WatchOS5](https://developer.apple.com/videos/play/wwdc2018/239/)（英文）

![](https://www.wangbase.com/blogimg/asset/201806/bg2018062914.jpg)

苹果手表的最新系统 WatchOS5，可以在手表上浏览网页。WWDC 2018 放出一段8分钟视频，介绍网页如何适配苹果手表，还算挺简单的。

7、[GPU 知识介绍](https://www.extremetech.com/gaming/269335-how-graphics-cards-work)（英文）

这篇文章介绍什么是 GPU，为什么不用 CPU 进行图形渲染，GPU 的基本概念等等。

8、[Python 的数据类型： list 与 tuple 的区别](https://rushter.com/blog/python-lists-and-tuples/)（英文）

Python 语言之中，元组（tuple）和列表（list）都表示数据的序列。最大的区别是 tuple 是不可变的，即不能新增、删除、修改 tuple。

**9、纯 CSS 效果展示**

![](https://www.wangbase.com/blogimg/asset/201806/bg2018062915.jpg)

* [转动的电风扇](https://codepen.io/zschaffter/pen/GdWQeV/)
* [动态火焰效果](https://codepen.io/jkantner/pen/gKRKKb)

## 资源

1、[机器学习50个最佳免费数据集](https://gengo.ai/articles/the-50-best-free-datasets-for-machine-learning/)

这里列出50个可以用来训练模型的免费大型数据集。

2、[2018 世界杯 API](http://worldcup.sfg.io/)

![](https://www.wangbase.com/blogimg/asset/201806/bg2018062916.jpg)

这个网站的 API 返回世界杯的各种 JSON 数据，比如 [http://worldcup.sfg.io/matches](http://worldcup.sfg.io/matches) 是所有比赛数据（每分钟更新）。 

3、[Google Analytics 的替代品](https://hitmetrics.io/blog/google-analytics-alternatives)

Google Analytics 是网站访问量的监控工具，这篇文章介绍了几个替代品。

4、[Java 面试知识点](https://github.com/crossoverJie/Java-Interview)

这个库收集各种 Java 面试的知识点。

## 工具

1、[GitTorrent](https://blog.printf.net/articles/2015/05/29/announcing-gittorrent-a-decentralized-github/)

一个采用 BitTorrent 协议的 GitHub 替代品，真正做到了无中心。虽然这个项目很久没有更新了，但是可以阅读上面的文章，了解它的原理。

2、[neofetch](https://github.com/dylanaraps/neofetch)

![](https://www.wangbase.com/blogimg/asset/201806/bg2018062917.jpg)

一个显示 Linux 服务器信息的命令行工具。

3、[vivid.js](https://webkul.github.io/vivid/)

![](https://www.wangbase.com/blogimg/asset/201806/bg2018062918.jpg)

一个 SVG 图标库。SVG 图标的最大好处，就是可以定制大小和颜色。

4、[Devuan](https://devuan.org/)

现在的各种 Linux 发行版往往都使用 SystemD 管理启动进程和服务，但是很多人仍然想用 init.d。Devuan 就是使用 init.d 的 Debian。

5、[usql](https://github.com/xo/usql)

命令行如何执行 SQL 语句？每个数据库都有自己的方式，彼此不同。现在出现了一个工具 usql，提供统一的方式，在命令行下操作不同的数据库。

6、[faceai](https://github.com/vipstone/faceai)

一款入门级的人脸、视频、文字检测以及识别的项目。

7、[openzaly](https://github.com/akaxincom/openzaly)

私有的聊天服务器，即自己搭建类似 QQ 的聊天服务。

8、[docz](https://www.docz.site/)

有些文档需要有代码效果演示，docz 就是这一类文档的专用生成工具，可以定制页面组件。

9、[react-native-windows](https://github.com/Microsoft/react-native-windows)

微软推出的 React Native 渲染器，允许用 RN 编译成 Windows 10、Windows 10 mobile、Xbox one 应用。

## 文摘

1、__古代中国为什么领先欧洲？__

![](https://www.wangbase.com/blogimg/asset/201806/bg2018062919.jpg)


《世界通史 : 1500年以前的世界》（by 【美】斯塔夫里阿诺斯">）这样解释，为什么古代中国比欧洲更先进？

> 古代的西欧并不像中国那么富饶。
> 
> 在适宜农作物生长的夏季的几个月里，季风给东亚大部分地区带来了充足的雨水；而在欧洲，雨水则多半集中在草木不生的冬季几个月里。由于这一原因，加上纬度较低的地区能够获得较多的太阳热，因此东亚具有较长较集中的耕作期，许多地方都是一年二熟。
> 
> 而且东亚的主要农作物稻米，比起西方种植的小麦、黑麦和其他粮食作物，其亩产量也要高得多。据估计，单位面积里生产的稻米所含的卡路里，是小麦所含卡路里的5倍。
> 
> 因而中国的生产率也就大大高于西方，而这又导致了中国的人口自农业出现至今也相应地比西方稠密。生产率及人口上的优势，转而又使中国能够更好地维持帝国的官僚机构和军事机构，更有力地抗击蛮族侵略者----必要时还能同化他们。

总之，只有在工业革命后，科学技术使得地理因素不再那么重要，欧洲才超过了中国。

2、[比特币是一种宗教崇拜](https://adamcaudill.com/2018/06/21/bitcoin-is-a-cult/)

这些年，比特币社区发生了很大变化。

最早的时候，参与者都是能够解释技术细节的技术爱好者。后来，参与者变成了想要快速赚钱的投机者，他们甚至不知道什么是 Merkle tree（比特币的基础算法）。现在，参与者变成了一些狂热分子。在他们眼里，加密货币比实际情况要伟大得多。他们坚信，传统货币正在成为历史，加密货币将从根本上改变世界经济。他们已经丧失了客观的立场，认定美元和欧元都临近末日了。

## 本周图片

1、[我在南疆的10天](http://news.migage.com/articles/%E6%88%91%E5%9C%A8%E5%8D%97%E7%96%86%E7%9A%8410%E5%A4%A9_1161211_9.html#p=1)（组图）

![](https://www.wangbase.com/blogimg/asset/201806/bg2018062920.jpg)

2018年4月，我从北京飞抵喀什，开始了10天的南疆之旅。

想象中的南疆是块神秘的领地，有不一样的语言，不一样的相貌，不一样的自然环境。旅程中，我见到了残存着中世纪气息的维吾尔老城，在戈壁中扩张的现代都市，到达中国最西端的县城，见到了塔吉克族和柯尔克孜族的村落，逐渐发现了一个想象之外的新疆，它并非任何一种刻板印象可以形容。

图为喀什市人民公园里的维吾尔族一家人。

2、[微软来了](https://twitter.com/netlookers/status/1004284958167486464)

![](https://www.wangbase.com/blogimg/asset/201806/bg2018062921.jpg)

图上公司依次为诺基亚、LinkedIn、Skype、Minecraft、GitHub。有人说，下一个目标会是 ubuntu。

3、[Emoji 的鸭子符号](https://emojiratings.tumblr.com/post/173579088393/duck-emoji-rates)

![](https://www.wangbase.com/blogimg/asset/201806/bg2018062922.jpg)

Emoji（颜文字）有一个鸭子符号，上面是各家的实现。你最喜欢哪个？我觉得三星那个不错。

还有两个问题，我不是很明白。（1）为什么所有的鸭子都是同样的配色？（2）为什么除了谷歌，其他鸭子的头都是绿的？

4、[天网](https://twitter.com/MrThreadzilla/status/1006300933813223424)

![](https://www.wangbase.com/blogimg/asset/201806/bg2018062923.jpg)

![](https://www.wangbase.com/blogimg/asset/201806/bg2018062924.jpg)


上面这件作品叫做《天网》，近看都是一个个按键。

## 本周金句

1、

创业公司为什么成功？这是最难的问题。

大多数人只是指出非常明显的事情："创始人很聪明也很勤奋，企业文化也非常优秀。"问题在于，其他5000家创业公司也是如此，但都失败了。（[《幸存者偏见》](https://www.sonyaellenmann.com/2018/06/survivorship-bias-and-startup-hype.html)）

2、

我喜欢这样的小城镇：大到足以容纳电影院和书店，小到足以让你感觉态度友善、适宜居住。（布莱森《小不列颠札记》）

3、

人必有痴，而后有成。（林语堂）

## 欢迎订阅

这个专栏每周五发布，同步更新在我的[个人网站](http://www.ruanyifeng.com/blog)、[微信公众号](http://weixin.sogou.com/weixin?query=%E9%98%AE%E4%B8%80%E5%B3%B0%E7%9A%84%E7%BD%91%E7%BB%9C%E6%97%A5%E5%BF%97)和[语雀](https://yuque.com/ruanyf/share/)。

微信搜索"__阮一峰的网络日志__"或者扫描二维码，即可订阅。

![image | left](http://www.ruanyifeng.com/blogimg/asset/2018/bg2018042311.jpg)

（完）

