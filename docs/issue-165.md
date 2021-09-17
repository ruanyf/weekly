# 科技爱好者周刊（第 165 期）：全端 App 的时代

这里记录每周值得分享的科技内容，周五发布。

本杂志开源（GitHub: [ruanyf/weekly](https://github.com/ruanyf/weekly)），欢迎提交 issue，投稿或推荐科技内容。

周刊讨论区的帖子[《谁在招人？》](https://github.com/ruanyf/weekly/issues/1826)，提供大量程序员就业信息，欢迎访问或发布工作/实习岗位。

## 封面图

![](https://cdn.beekka.com/blogimg/asset/202106/bg2021062410.jpg)

重庆涪陵的一个水上乐园，制作了巨型棒冰，分发给游客。（[via](https://www.sohu.com/a/473039755_120388781)）

## 本周话题：全端 App 的时代

上周，微软发布了 Windows 11。最出人意料的是，它可以[运行安卓 App](https://www.theverge.com/2021/6/24/22548428/microsoft-windows-11-android-apps-support-amazon-store)！

![](https://cdn.beekka.com/blogimg/asset/202106/bg2021062703.jpg)

仔细想想也不意外，苹果去年推出 M1 芯片，所有的 iPhone App 现在都能在 Mac 电脑上运行。

![](https://cdn.beekka.com/blogimg/asset/202106/bg2021062704.jpg)

微软一定是看在眼里，急在心里，绝不能让 Windows 输给 Mac。所以，这次匆匆忙忙就支持了安卓。

他甚至来不及做自家的安卓应用商店，用户必须先安装亚马逊应用商店（下图），才能用上这个功能。微软就是急到这种程度，宁愿白白用自己的最新系统为别人引流。

![](https://cdn.beekka.com/blogimg/asset/202106/bg2021062705.jpg)

我问大家一个问题：手机 App 可以运行在桌面电脑，对于软件开发有什么影响呢？

显然，直接影响就是一条， **以后还有必要开发桌面版软件吗？** 除了少数桌面专用软件，其他软件只要让手机 App 适配一下电脑，就不用发布专门的 Windows 版或 Mac 版了。

举例来说，Windows 运行微信，现在必须安装单独的 Windows 版，以后直接安装手机版可能就行了。对于用户来说，体验完全一致，不会有功能缺失；对于腾讯来说，可以少养一个团队，也不用操心跨平台移植的复杂性了。

![](https://cdn.beekka.com/blogimg/asset/202106/bg2021062706.jpg)

以前，所谓的跨平台软件，指的是一套代码可以到处运行，但是必须每个平台单独编译一次，Java、 Go、Electron 都是这样。现在倒好了，连编译都省掉了，同一个程序不用修改，直接跑在手机、平板、桌面电脑上面，简直是软件开发者的终极梦想和福音。

所以，Windows 的这个新功能，使得手机 App 的市场一下子扩大到了桌面电脑，这尤其对于小团队是重大利好。

我的结论就是， **App 开发将从多端并存，进入全端时代。** 手机 App 会吃掉其他客户端，变得越来越重要；桌面 App 将会衰落，开发需求进一步变小。

不过，这是一个长期的过程，还有很长的路要走。根据报道，微软这一次采用了英特尔公司的桥接技术，让 x86 架构的 CPU 可以解释 ARM 指令，听上去很像是即时编译。但是那样的话，要是 App 用到了谷歌服务框架，应该怎么处理呢？另一方面，谷歌的 ChromeOS 系统，早就实现了在 x86 CPU 上运行安卓 App（通过一个虚拟层），性能挺差的，体验也不好（比如窗口无法放大，很多操作不支持鼠标）。

但是不管怎样，全端 App 肯定是未来的方向，上面这些问题，相信最终都可以解决，尤其对于苹果的设备，硬件的兼容问题是不存在的。

我建议，程序员朋友可以多关注这个方向，手机 App 如何适配桌面大屏幕，这可能是下一个热点领域。

## 小程序原理实践课

小程序，可以说是中国软件业的一个奇迹。

2017年，微信发明了这个产品，立刻受到用户的认可。短短几年中，遍地开花，各大互联网公司（支付宝、百度、头条……）纷纷跟进支持。事实上，小程序已经成了一个独立的开发方向，跟 Web 和手机 App 一样重要。

相应地，小程序开发者一直炙手可热，市场招聘需求巨大，越来越多的前端开发者转向小程序领域。

![](https://cdn.beekka.com/blogimg/asset/202107/bg2021070105.jpg)

**本质上，小程序是 Web 技术在手机 App 环境的移植。** 它完全采用 Web 技术栈，只是将网页引擎移植到了 App 容器里面。所以，学好 Web 技术对于小程序开发者特别重要。

本周的课程资料就是小程序的底层架构教程 **《浏览器中搭建小程序运行环境》** ，讲解网页引擎作为小程序的运行环境，如何发挥作用。课程由腾讯课堂“双认证”机构——京程一灯提供。

它跟其他小程序课程有所不同，另辟蹊径，通过浏览器搭建小程序的运行环境。一共有三节课，深入讲解小程序的网页本质和浏览器原理，帮助大家写出高质量、高性能的页面，在手机上取得更加平滑的渲染效果。内容特别适合已经有 Web 基础、刚进入小程序领域的开发者。

![](https://cdn.beekka.com/blogimg/asset/202107/bg2021070107.jpg)

课程原价98元，现在跟周刊合作，读者只需象征性支付 **0.02元** 报名费。微信扫描下面二维码，进群后即可获取课程， **诚信教学，保证无套路。**

![](https://cdn.beekka.com/blogimg/asset/202107/bg2021070106.jpg)

报名成功的读者，还可以获赠价值98元的专题课《前端面试防虐指南-手写代码篇》。

## 科技动态

1、[自动驾驶卡车实验](https://interestingengineering.com/self-driving-truck-completes-950-mile-trip-10-hours-faster-than-human-driver)

一家美国自动驾驶公司，成功完成了重型卡车的自动驾驶实验，14个小时开完了1500公里，人类驾驶员一般需要24小时才能完成。

![](https://cdn.beekka.com/blogimg/asset/202106/bg2021060505.jpg)

重型卡车的行驶速度比普通汽车慢，需要长时间连续驾驶，而且美国有法律，卡车司机最多连续驾驶 11 小时，就必须停车休息。因此，自动驾驶对于重型卡车有非常大的实际意义，很可能先在这个领域落地。

2、[如何数珍珠](https://countthings.com/case-studies/0001)

有一家日本珍珠贸易公司，多年以来，都是人工清点珍珠的数量。他们将珍珠倒入一个小盘子，里面有100个坑，如果都填满了就是100颗珍珠。这样计数很慢，每到收获季节，就需要两个员工，数上整整两天。

![](https://cdn.beekka.com/blogimg/asset/202105/bg2021052417.jpg)

现在，他们使用一个叫做 “CountThings from Photos” 的安卓应用，只要对着盘子里面的珍珠，拍一张照片，手机就会自动计算出有多少颗珍珠，大大节省了人工，只要30分钟就够了。

![](https://cdn.beekka.com/blogimg/asset/202105/bg2021052418.jpg)

![](https://cdn.beekka.com/blogimg/asset/202105/bg2021052419.jpg)

3、[指纹照片](https://www.bbc.com/news/uk-england-merseyside-57226165)

BBC 报道，有一个英国毒品贩子，多年来逍遥法外，警方一直抓不到他。后来，警方发现有一个社交媒体账户，怀疑背后就是他，但是没有证据。

有一天，这个账户发了一张手拿奶酪的照片（下图），警方根据照片上的指纹和掌纹，确定就是此人，从而将他抓获，判刑13年6个月。

![](https://cdn.beekka.com/blogimg/asset/202105/bg2021052416.jpg)

4、

[一个荷兰研究生](https://www.cbc.ca/radio/quirks/may-15-california-condor-genetics-a-strange-star-goes-supernova-don-t-think-just-kick-and-more-1.6025290/for-soccer-players-the-less-brain-they-use-the-better-for-penalty-kicks-1.6025297)想了解，罚点球时，足球运动员的大脑活动。他就让球员带上脑电波感应头盔，进行罚点球。

![](https://cdn.beekka.com/blogimg/asset/202105/bg2021052402.jpg)

结果发现，越不假思索的人，越容易罚中点球；脑电波活动越剧烈的人，罚中可能性越低。

![](https://cdn.beekka.com/blogimg/asset/202105/bg2021052403.jpg)

5、

[火星的云](https://petapixel.com/2021/06/02/nasas-mars-curiosity-rover-captures-rare-photos-of-shimmering-clouds/)是什么样子？

美国好奇号火星车传回了照片，人类第一次看见了另一个星球上的云。由于火星大气层很薄，所以火星没有很厚的云，都是一些很轻很薄的云絮。

![](https://cdn.beekka.com/blogimg/asset/202106/bg2021060316.jpg)

![](https://cdn.beekka.com/blogimg/asset/202106/bg2021060317.jpg)

6、

[国内的创业公司宇树科技](https://spectrum.ieee.org/automaton/robotics/robotics-hardware/unitrees-go1-robot-dog-looks-pretty-great-costs-just-usd-2700)，推出了面向消费市场的机器狗，售价1.6万~2.0万人民币，10月前发货。

![](https://cdn.beekka.com/blogimg/asset/202106/bg2021062102.jpg)

这个机器狗能够自主跟随和避障，有强大的保持平衡能力，跌倒可以自己爬起来。负载能力约5公斤，慢速前进时续航1小时。它的价格只有国外的波士顿动力公司同类产品的十分之一。

![](https://cdn.beekka.com/blogimg/asset/202106/bg2021062103.jpg)

7、

中国最大的海洋科考船[“中山大学号”](https://china.huanqiu.com/article/43h6gCmStZe)，6月26日在上海交付使用。该船排水量6880吨，续航力15000海里，专门供中山大学海洋学院进行教学和科考使用。

![](https://cdn.beekka.com/blogimg/asset/202106/bg2021062606.jpg)

8、[超声波听力](https://www.aalto.fi/en/news/anyone-can-get-super-hearing)

人的耳朵只能听到 20 Hz 到 20 000 Hz 之间的声波。芬兰一所大学的科学家设计了一种装置，让人类可以听到 20 000 Hz 以上的超声波。

![](https://cdn.beekka.com/blogimg/asset/202106/bg2021061002.jpg)

科学家将麦克风阵列放在一个小球之中，用来捕捉超声波，以及确定方位。这个装置可以将超声波转成人耳可以听到的频率，再在耳机上播放，并保证方位相同。

它使得人类可以具有蝙蝠般的超声波感应能力，某些情况下，可以快速定位声源。

![](https://cdn.beekka.com/blogimg/asset/202106/bg2021061003.jpg)

## 文章

1、[QQ 宠物的诞生与没落](https://www.gcores.com/articles/137688)（中文）

![](https://cdn.beekka.com/blogimg/asset/202106/bg2021060305.jpg)

QQ 宠物最早出现在2005年初的 QQ 贺岁版，同年6月正式上线。一年后同时在线用户数就突破了100万，成为了世界上最大的虚拟宠物品牌。

2、[韩国的真人约会游戏](https://mp.weixin.qq.com/s/ICeg7ksh3KHbFSj00mbmvg)（中文）

![](https://cdn.beekka.com/blogimg/asset/202106/bg2021061702.jpg)

本文介绍韩国公司新推出一款相亲 RPG 游戏，完全是真人实景拍摄，更像是一部可以玩的电视剧。比如，下图让玩家选择谁是约会对象。据玩过的人说，体验还不错，剧情有意思。

![](https://cdn.beekka.com/blogimg/asset/202106/bg2021061703.jpg)

3、[静态网站如何启用数据库查询](https://phiresky.github.io/blog/2021/hosting-sqlite-databases-on-github-pages/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202106/bg2021063012.jpg)

作者演示静态网站（比如 GitHub Pages）如何通过 SQLite 数据库，实现查询功能，完全不需要后台脚本。

这种操作的实现原理有两个：一是 SQLite 数据库以页为单位存储数据，每页默认是 4KB，可以按页读取数据；二是前端可以用 sql.js 模拟一个内存文件系统，从而实现按页读取文件。（[@joyc](https://github.com/ruanyf/weekly/issues/1820) 投稿） 

4、[Telegram 创始人和他的黑暗帝国](https://www.spiegel.de/international/world/the-telegram-billionaire-and-his-dark-empire-a-f27cb79f-86ae-48de-bdbd-8df604d07cc8)（英文）

![](https://cdn.beekka.com/blogimg/asset/202106/bg2021061502.jpg)

德国《明镜》杂志的长篇英语报道，介绍聊天软件 Telegram 现年36岁的创始人帕维尔·杜罗夫 (Pavel Durov) （上图），以及 Telegram 的故事。

5、[老电脑如何安装 Windows 11](https://allthings.how/how-to-install-windows-11-on-legacy-bios-without-secure-boot-or-tpm-2-0/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202106/bg2021062702.jpg)

Windows 11 发布测试版本后，很多人发现老电脑安装不了，因为有主板 BIOS 限制。本文介绍一种规避的方法。

6、[复制次数最多的 StackOverflow 代码片段](https://programming.guide/worlds-most-copied-so-snippet.html)（英文）

有一项研究称，程序员问答网站 StackOverflow 上面，有史以来复制次数最多的是一段 Java 代码片段，用来以人类可读的格式打印字节数，比如将 123,456,789 字节转为 123.5 MB。

![](https://cdn.beekka.com/blogimg/asset/202106/bg2021061704.jpg)

这段代码的作者多年后写了这篇文章，分析自己原始代码里面的漏洞。

7、[浏览器的原生代理功能示例](https://fragile-credences.github.io/scihub-proxy/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202106/bg2021061004.jpg)

本文教你如何使用浏览器原生提供的代理功能，绕过 sci-hub 域名的访问限制。

8、[Docker Compose 快速使用指南](https://linuxhandbook.com/docker-compose-quick-start/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202106/bg2021061203.jpg)

一篇简短的 Docker Compose 入门教程，让你通过动手实践，理解 Docker Compose 怎么搭建多容器的应用程序。

9、[新的 HTTP 规范可以消除“Cookie 横幅”](https://arstechnica.com/gadgets/2021/06/tired-of-accepting-rejecting-cookies-adpc-wants-to-automate-the-process/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202106/bg2021061710.jpg)

由于欧洲议会的规定，国外的网站都有一个讨厌的“Cookie  横幅”，询问用户是否接受 Cookie。

现在有一个新的 HTTP 提案（还未通过），用户只需设置一次，浏览器就可以用一个 HTTP 标头通知网站，不必放置 Cookie 横幅。

## 工具

1、[NVIDIA Canvas](https://www.nvidia.com/en-gb/studio/canvas/)

![](https://cdn.beekka.com/blogimg/asset/202106/bg2021062601.jpg)

Nvidia 公司推出的一个人工智能照片编辑软件，可以免费下载。用户只要选择要添加的对象（比如云彩），在对应的位置上涂抹几笔，就能够自动生成照片。

2、[nuoshell](https://www.nuoshell.com/)

一款 Mac 的桌面 SSH 客户端，集多功能于一身，简单、免费。（[@anlityli](https://github.com/ruanyf/weekly/issues/1814) 投稿）

3、[gum](https://github.com/gauseen/gum)

![](https://cdn.beekka.com/blogimg/asset/202106/bg2021063011.jpg)

一个命令行的 Git 用户管理器，适合需要不同身份，向不同仓库提交代码的情况。（[@gauseen](https://github.com/ruanyf/weekly/issues/1816)  投稿）

4、[BookmarkHub](https://github.com/dudor/BookmarkHub/blob/main/README_cn.md)

![](https://cdn.beekka.com/blogimg/asset/202106/bg2021063010.jpg)

一个浏览器插件，可以跨浏览器进行书签同步，数据存储在 GitHub Gist。（[@weavers1f](https://github.com/ruanyf/weekly/issues/1815) 投稿）

5、[EssayKiller](https://github.com/EssayKillerBrain/EssayKiller_V2)

![](https://cdn.beekka.com/blogimg/asset/202106/bg2021063009.jpg)

一个 AI 框架，可以自动根据给出的题目（上图），生成中文的命题作文，达到高中生作文的水平。（[@dllen](https://github.com/ruanyf/weekly/issues/1818) 投稿）

6、[T-Rex Runner](https://github.com/shlomnissan/t-rex-runner-c)

![](https://cdn.beekka.com/blogimg/asset/202106/bg2021060602.jpg)

Chrome 浏览器内置的“恐龙跳跃”小游戏，被网友从 JavaScript 改成了 C 语言版本。

7、[Rustpad](https://rustpad.io/)

![](https://cdn.beekka.com/blogimg/asset/202106/bg2021060601.jpg)

一个开源的 Web 文本编辑器，主要特点是支持多人同时编辑。

8、[零宽度短网址生成器](https://zws.im/)

![](https://cdn.beekka.com/blogimg/asset/202106/bg2021061202.jpg)

一个非常有创意的短网址生成器，看上去生成的短网址都一样，其实里面插入了不同数量的零宽度空格字符。

9、[Ojoy](https://ojoy.zaps.dev/)

![](https://cdn.beekka.com/blogimg/asset/202106/bg2021061501.jpg)

一个网页图像工具，可以放大图片的同时，还保持同样的清晰度。

## 资源

1、[Track Awesome List](https://www.trackawesomelist.com/)

![](https://cdn.beekka.com/blogimg/asset/202106/bg2021063001.jpg)

这个网站收集 GitHub 上的 awesome 项目，追踪每个清单的更新，可以及时查看每天新增哪些资源。（[@theowenyoung](https://github.com/ruanyf/weekly/issues/1822) 投稿）

2、[斯坦福大学计算机课程](https://docs.google.com/spreadsheets/d/1zfw8nPvJeewxcFUBpKUKmAVE8PjnJI7H0CKimdQXxr0/htmlview)

这是一个谷歌文档的电子表格，收集了斯坦福大学计算机系本科阶段的所有课程，每门课都给出了课程主页。

3、[计算结构](https://computationstructures.org/index.html)

![](https://cdn.beekka.com/blogimg/asset/202106/bg2021061401.jpg)

麻省理工学院课程《计算结构》（Computation Structures）的教学材料，介绍计算机架构的基本知识，包括讲义、视频、笔记等。

4、[具有源码的商业视频游戏](https://en.wikipedia.org/wiki/List_of_commercial_video_games_with_available_source_code)

![](https://cdn.beekka.com/blogimg/asset/202106/bg2021061403.jpg)

维基百科的这个页面，列出了所有可以拿到源码的商业视频游戏，包括开源的游戏和源码泄露的游戏。

## 图片

1、[淹没的意大利村庄](https://www.smithsonianmag.com/smart-news/medieval-italian-village-briefly-surfaces-after-70-years-underwater-180977838/)

1950年，意大利政府为了在山区建设一个人工湖，淹没了一个叫做库伦（Curon）的小村庄。这个村庄有一个14世纪的钟楼，因为太高，没有被全部淹没，形成了“水中高塔”的奇景。

![](https://cdn.beekka.com/blogimg/asset/202105/bg2021053007.jpg)

![](https://cdn.beekka.com/blogimg/asset/202105/bg2021053008.jpg)

![](https://cdn.beekka.com/blogimg/asset/202105/bg2021053009.jpg)

![](https://cdn.beekka.com/blogimg/asset/202105/bg2021053010.jpg)

2、[摩天大楼顶上的午餐](https://historydaily.org/charles-ebbets-lunchtime-atop-a-skyscraper)

《摩天大楼顶上的午餐》是一张著名的黑白照片，拍摄于1932年纽约的一个摩天大楼工地。11个工人坐在摩天大楼顶上的大梁上吃午饭，大梁距下方街道256米，而他们没有任何安全带等保护设施。

![](https://cdn.beekka.com/blogimg/asset/202105/bg2021053001.jpg)

拍摄者看上去也很惊险。

![](https://cdn.beekka.com/blogimg/asset/202105/bg2021053002.jpg)

不过实际上，大梁底下有一个平台，并不是看上去那么危险。而且，照片也是摆拍的。照片发表以后，很多人也来这个地方模仿拍摄。

![](https://cdn.beekka.com/blogimg/asset/202105/bg2021053003.jpg)

由于这张照片太有名，纽约市后来甚至将它做成了雕像。

![](https://cdn.beekka.com/blogimg/asset/202105/bg2021053004.jpg)

##  文摘

1、[我为什么公开发表博客文章？](https://jvns.ca/blog/2021/05/24/blog-about-what-you-ve-struggled-with/)

八年来，我在个人网站上发布了100多篇文章。有人问我，为什么一直坚持在写？

我想了想，写作博客其实对我有很多好处，所以我才会有动力。

（1）它使得我把学到的东西记录下来了，便于回过头查找，重新温习！

（2）当我写作时，为了理清思路，我经常会有新的疑问，从而去做一些额外的研究，这意味着写作博客让我在某个主题上学到了更多！

（3）认真花时间把自己的写法写出来，并放到互联网上，这迫使你思考自己写的东西是否有意义，从而发现哪些题目是真的有价值。

（4）文章发布以后，会有很多读者反馈，通常可以帮助我改进写作，学习新知识。

（5）我的文章可以帮助其他人！我写文章通常是因为遇到一个很困难的问题，经过探索终于找到了答案，我就把这个答案写出来，其他人遇到类似情况就可以参考，这让我感觉很好。

2、[互联网内容都是暂时的](https://cheapskatesguide.org/articles/transitory-internet.html)

最近，我的一位朋友删除了自己的博客。她在博客里面，记录了自己青少年时期和二十多岁时对很多事情的看法。她现在可能觉得，这些看法很幼稚，不想再保存下去，就删除了自己的博客。

我觉得很可惜。多年以后，她如果再想看看自己年轻时的想法，就再也没机会了。

你把内容发布到互联网，跟写在纸上是不一样的。纸上的内容可以一直保存下去，但是互联网不行。虽然某些网上的内容可以持续存在数十年，那只是因为某些人或组织愿意为托管成本付费，服务器、电力和带宽都要花钱。互联网上的内容可以存在多久，完全取决于托管它的当事人的价值观。

与纸上的内容相比，互联网内容的存在期限都非常短。对于我们大多数人而言，你张贴到互联网的内容，不久以后就会永远消失。

虽然很多网上的内容毫无价值，但是有一些写得很好，发人深省，消失了十分可惜。这令人沮丧，那些消失的内容就像一个搬走的老朋友，等到你再想起他时，再也找不到他留下的任何踪迹了。

## 言论

1、

Python 是我最喜欢的语言，但它替代不了 Bash。一行 Bash 代码就能完成的任务，Python 要写许多行，比如`mv`命令，Python 可能需要120行才能实现。

Bash 把命令行环境的复杂性都抽象掉了，如果改用 Python 实现，就不得不自己处理这些复杂性。

-- [Hacker News 读者](https://news.ycombinator.com/item?id=27075324)

2、

最新的趋势是，软件公司希望用户体验足够好，不需要用户文档。采用的方法是，不再投入专门的人员写用户手册，改为雇佣用户体验设计师。

-- [《软件技术写作是一个垂死的职业》](https://dev.jimgrey.net/2015/06/16/software-technical-writing-dying/)

3、

可能永远不会有 Python 4.0，我们被 Python 2 升级到 Python 3 搞怕了。

-- [Guido van Rossum](https://www.techrepublic.com/article/programming-languages-why-python-4-0-will-probably-never-arrive-according-to-its-creator/)，Python 语言创始人

4、

2012年，牛津大学起诉印度德里大学的一个复印中心，复印盗版教材出售给学生。

德里高等法院裁定，牛津大学败诉，学生使用盗版教材不违法。理由是原版教材的定价超出了印度学生的承受能力，学生永远不会成为原告的客户。

-- [《 Sci-Hub 会被印度法院关闭吗？》](https://www.reddit.com/r/scihub/comments/mk46x4/scihub_v_elsevier_wiley_acs_can_scihub_be_shut/)

5、

随着大多数产品成为联网产品，如果你想购买未联网的版本，不得不支付额外费用，因为厂家将不能获取你的个人数据，也不能向你推送广告了。

-- [Hacker News 读者](https://news.ycombinator.com/item?id=27628210)

## 历史上的本周

2020年（第 114 期）：[U 盘化生存和 Uber-job](https://www.ruanyifeng.com/blog/2020/07/weekly-issue-114.html)

2019年（第 62 期）：[日本电影《编舟记》](https://www.ruanyifeng.com/blog/2019/06/weekly-issue-62.html)

2018年（第 11 期）：[编程语言越发复杂](https://www.ruanyifeng.com/blog/2018/06/weekly-issue-11.html)

## 订阅

这个周刊每周五发布，同步更新在[阮一峰的网络日志](http://www.ruanyifeng.com/blog)和[微信公众号](http://weixin.sogou.com/weixin?query=%E9%98%AE%E4%B8%80%E5%B3%B0%E7%9A%84%E7%BD%91%E7%BB%9C%E6%97%A5%E5%BF%97)。

微信搜索“阮一峰的网络日志”或者扫描二维码，即可订阅。

![](https://cdn.beekka.com/blogimg/asset/202103/bg2021030402.jpg)

（完）

