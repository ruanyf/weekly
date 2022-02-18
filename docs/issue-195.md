# 科技爱好者周刊（第 195 期）：你做过不在乎结果的项目吗？

这里记录每周值得分享的科技内容，周五发布。

本杂志开源（GitHub: [ruanyf/weekly](https://github.com/ruanyf/weekly)），欢迎提交 issue，投稿或推荐科技内容。

周刊讨论区的帖子[《谁在招人？》](https://github.com/ruanyf/weekly/issues/2188)，提供大量程序员就业信息，欢迎访问或发布工作/实习岗位。

## 封面图

![](https://cdn.beekka.com/blogimg/asset/202202/bg2022021507.jpg)

泰国首都曼谷的 MahaNakhon 大楼像被狗啃过一样，是该国的地标。但是，夜晚亮灯时，缺口会亮起不一样颜色的灯光，仿佛光芒从大楼内部爆裂出来，非常漂亮。（[via](https://www.17travel.net/post04074681007619)）

## 本周话题：你做过不在乎结果的项目吗？

上个星期，美国的黑客新闻社区有一个热门帖子 **《你做过不在乎结果的项目吗？》**（[第一部分](https://news.ycombinator.com/item?id=25992782)，[第二部分](https://news.ycombinator.com/item?id=30283264)），得到了热烈的反响。

很多人贴出了自己的个人项目，都是业余时间出于爱好写的。推荐大家去看看，很多项目很有趣。

![](https://cdn.beekka.com/blogimg/asset/202202/bg2022021401.webp)

我不禁想到，这个问题如果放到国内，还会有那么多回帖吗？

根据我的观察，中国的职业程序员纯粹出于兴趣，投入时间做一些无所谓结果的个人项目，这样的人比例很小。

原因很简单，国内的生活压力非常大，每天醒着的时间都被工作占了，哪有精力顾及兴趣。大家都很实际，每个项目都要求有明确的结果，要么是为了考核、绩效和晋升，要么是为了赚钱。

但是我觉得，不管多么忙，还是应该留出一点时间，放在自己的兴趣项目上面，哪怕得不到任何结果。原因有两个。

![](https://cdn.beekka.com/blogimg/asset/202202/bg2022021402.webp)

第一个原因，兴趣项目可以大大提升你的技术水平。因为兴趣是最强大的驱动力，比金钱、名位都强大得多，你会愿意钻研技术的细节。很多优秀的开源项目，都来自个人兴趣，质量远胜大公司投入重金做出来的东西。

第二个原因，兴趣项目可以塑造一个人。 **很多人没有意识到这一点，一般都是作者塑造作品，但是有些作品可以塑造作者。** 你做着做着，变成了跟原来不一样的人。

许多知名程序员，刚入行时其实都很普通，看不出特别之处，但是他在追求自己兴趣的过程中，逐渐意识到了，自己是什么样的人，想要完成什么，从此找到了自我，全身心投入，成就了一番事业。

有一句话说，“你可以活成自己想要的样子”。这句话的前提是，你得知道那是什么样子。兴趣项目就有这个作用，让你认识自己、塑造自己，壮大追求梦想的决心。

![](https://cdn.beekka.com/blogimg/asset/202202/bg2022021403.webp)

我向大家推荐一本书，就是讲个人兴趣可以让一个人走得多远。书名叫做 **《孤筏重洋》**，作者是上个世纪的一位挪威学者海尔达尔。

他原本是动物学家，有一次去南太平洋波利尼西亚群岛研究动物。他注意到那里的一个未解之谜，那些岛屿（下图黄色多边形的右侧部分）距离最近的陆地都有几千公里，没人知道，岛上的土著居民是从哪里来的？

![](https://cdn.beekka.com/blogimg/asset/202202/bg2022021404.webp)

他出于兴趣，写了一篇文章，推测可能是从南美洲坐木筏来的。所有杂志都拒绝发表，专家评语是异想天开，木筏怎么可能横渡几千公里的太平洋呢？

海尔达尔不甘心这么放弃，念念不忘自己的假说，最后做出了一个最疯狂的决定。你们都不信，我就实现给你们看。

他真的做了一支大木筏（下图），住在上面，用了三个月时间，完全依靠风力和洋流，饿了就捕鱼，渴了就喝雨水，这样从秘鲁漂到了波利尼西亚群岛，行程8000公里。完成这个壮举之后，他写了这本书，后来还拍成了电影，下面是预告片。

![](https://cdn.beekka.com/blogimg/asset/202202/bg2022021405.webp)

<iframe frameborder="0" src="https://v.qq.com/txp/iframe/player.html?vid=c3323r7pdn8" allowFullScreen="true" width="600" height="400"></iframe>

因为这件事，他认识到自己的真正道路不是动物学，而是人类学和历史，他后来成了世界著名的人类学家。阅读这本书，可以鼓舞士气，让你获得勇气去追寻梦想，而且书的内容都是科学冒险，可读性很强。

总之，如果你找到了一个兴趣项目，你觉得它对你很重要，但是这个项目赚不到钱，可能也不会有人关注。我的建议是不要放过它，要抓住这个项目，这是你学习新知识、找到自我、成就自我的最好途径。

## FinClip：通用小程序容器

提到小程序，大部分人的第一反应是微信小程序，最多还知道支付宝、百度、头条也有小程序。但是，很少有人知道，小程序其实是一种通用技术，所有 App 都可以嵌入，甚至我们自己开发的 App 也可以运行小程序。

本周就向大家介绍一种小程序容器技术、也是小程序的通用解决方案： [FinClip](https://www.finclip.com/?from=ruanyifeng)。**它的最大特点，就是能够让任何 App 运行小程序。** 

只需要在你的 App 里面，引入它的 SDK，就能加载运行外部小程序了。除了 SDK，它还提供一个后台管理系统，统一管理小程序的上架和下架，以及收集和分析小程序数据。

![](https://cdn.beekka.com/blogimg/asset/202201/bg2022012106.webp)

[FinClip](https://www.finclip.com/?from=ruanyifeng) 完全遵循微信小程序的开发标准与规范。也就是说，现有的微信小程序可以不改一行代码，直接放进你的 App 里面，运行效果保持不变，不必额外二次开发和改造，大大节省了人力成本。

不仅如此，[FinClip](https://www.finclip.com/?from=ruanyifeng) 还支持手机以外的多种终端，包括 Linux、Windows、MacOS、麒麟等操作系统。这意味着，PC 端、车载设备、智能电视都能使用小程序了，实现了小程序的“一次开发，到处运行”，同时触达众多流量平台，而不仅仅局限于微信生态。

![](https://cdn.beekka.com/blogimg/asset/202201/bg2022012107.webp)

FinClip 还提供[小程序 IDE 开发工具](https://www.finclip.com/downloads?from=ruanyifeng)，界面与微信小程序的开发工具类似，自带调试和真机预览，简单易上手。你可以在这个 IDE 里面，对现有项目进行二次开发，扩展功能和接口，或者从零开始写出一个小程序。

![](https://cdn.beekka.com/blogimg/asset/202202/bg2022020902.webp)

目前，[FinClip](https://www.finclip.com/?from=ruanyifeng) 已经得到了很多大公司的认可，有上百家客户，包括券商、股份制银行、航空公司、车载设备服务商、省级移动警务平台等重要企业。开发者人数超过3万，服务用户达到2500万人，在真实的生产环境经受了百万级的并发压力考验。

FinClip 有[社区版](https://www.finclip.com/pricing?from=ruanyifeng)，供个人开发者免费使用；也有[企业版](https://www.finclip.com/pricing?from=ruanyifeng)，不过需要按年付费，或者购买专属私人化服务。

如果你的 App 也想运行小程序，不妨考虑一下 FinClip。建议访问官方的[上手教程](https://www.finclip.com/start/?from=ruanyifeng)和[产品手册](https://www-cdn.finclip.com/mp-home/FinClip%E4%BA%A7%E5%93%81%E6%89%8B%E5%86%8C%20%E7%94%B5%E5%AD%90%E7%89%88.pdf)，详细了解，可以注册一个[免费账号](https://www.finclip.com/login/?type=register&from=ruanyifeng)试试看。

![](https://cdn.beekka.com/blogimg/asset/202202/bg2022020901.jpg)

最后，欢迎扫描上方的二维码，加入他们的技术社群，了解和讨论小程序的技术问题。

## 科技动态

1、[仿生鲸鲨](http://www.stdaily.com/index/kejixinwen/202201/815a3fc41fd1455c9f61795443c4a2c0.shtml)

![](https://cdn.beekka.com/blogimg/asset/202202/bg2022020806.webp)

沈阳航天新光集团研发的世界首条仿生鲸鲨，春节前落户上海海昌海洋公园鲨鱼馆。

这条机器鲨鱼，身长4.5米，重达350公斤，具有仿生蒙皮及水下定位功能，能完成直线前进、转弯、上浮、下潜、定深、嘴部张合、鳃裂等动作，具备无线遥控、程控游动和自主游动等多种控制方式。最大游速可达0.7m/s，还能下潜到最深10米的水中。

![](https://cdn.beekka.com/blogimg/asset/202202/bg2022020807.webp)

这个庞然大物在大展缸中，与各种鱼类并肩遨游，与真实的鲸鲨几乎如出一辙，游客根本无法分辨。以后去海洋馆和动物园，看到的可能都是机器动物，从动物保护和公园运营的角度考虑，这其实是很好的做法。

2、[黑洞合并](https://www.inverse.com/science/black-hole-merger-2022)

![](https://cdn.beekka.com/blogimg/asset/202202/bg2022021506.webp)

天文学家观测到，两个黑洞不断靠近，即将合并，这将是人类第一次观测到这种现象。新闻说，这两个黑洞距离地球12亿光年，快的话，合并可能发生在100天后，慢的话需要三年，科学家正在等待。

我觉得，这件事实在很奇妙。光从那里到达地球，需要12亿年，这意味着，这件事在12亿年前已经有结果了，我们现在却还不得不等着结果发生。

3、[乌鸦攻击无人机](https://www.abc.net.au/news/2021-12-11/wing-resumes-drone-deliveries-after-raven-attacks/100689690)

![](https://cdn.beekka.com/blogimg/asset/202112/bg2021121111.webp)

谷歌旗下的物流公司 Wing，2019年开始在澳大利亚悉尼开展无人机送货（上图）。最近有用户报告，每当无人机给他家送货，就有乌鸦攻击无人机。

![](https://cdn.beekka.com/blogimg/asset/202112/bg2021121112.webp)

![](https://cdn.beekka.com/blogimg/asset/202112/bg2021121113.webp)

调查后发现，这只乌鸦正在附近的一棵树上筑巢，养育三只雏鸟。乌鸦认为无人机是侵入者，就开始攻击，企图从后部抓住无人机。

Wing 公司最后决定，这种状况既影响无人机送货，又不利于小鸟的哺育，所以停止该区域的无人机送货，直到小鸟长大后再恢复。

4、[丰田汽车的遥控钥匙](https://arstechnica.com/cars/2021/12/toyota-owners-have-to-pay-8-mo-to-keep-using-their-key-fob-for-remote-start/)

![](https://cdn.beekka.com/blogimg/asset/202112/bg2021121402.webp)

由于一个不经意的错误，丰田汽车的钥匙遥控打开车门的功能，可能需要付费才能使用。2018年的时候，丰田曾经向车主赠送过一项“远程连接”服务，允许钥匙、手机、智能手表等设备，远程打开车门和启动汽车。

![](https://cdn.beekka.com/blogimg/asset/202112/bg2021121403.webp)

当时说好，该服务可以免费使用三年，以后每月支付8美元才能使用，如果不付费，车辆就不允许钥匙远程打开车门。现在，三年的免费期眼看就要过了。

其他汽车的钥匙远程开门，都是免费的，而且这种功能根本不需要与服务器通信。丰田公司可能需要修改车载软件，才能让钥匙遥控不经过付费检查。

5、[Excel 世界杯](https://www.theverge.com/2021/12/11/22829228/excel-pros-financial-modeling-world-cup)

![](https://cdn.beekka.com/blogimg/asset/202112/bg2021121613.webp)

电子表格软件 Excel 也有世界锦标赛，叫做“金融建模世界杯” （FMWC）。每一年，世界各地的 Excel 顶级玩家都会参加，经过资格赛淘汰以后，剩下八位顶级选手争夺冠军。2021年的总决赛在12月11日举行，并在 YouTube 直播。

![](https://cdn.beekka.com/blogimg/asset/202112/bg2021121612.webp)

每位参赛选手都会收到一个真实案例，长达五页。选手必须使用 Excel 进行财务建模，再运行这个模型，回答6到15个问题。往年比赛的案例，可以去官网[下载](https://www.fmworldcup.com/sample-cases/)。

除了 Excel 世界杯，还有 Word + Excel + PowerPoint 的[“Office 专家世界杯”](https://www.moschampionship.com/)也在举办。

## 文章

1、[嫦娥五号确认月球有水](https://mp.weixin.qq.com/s/SYaTb_m2nkdM7VzcSi89Yw)（中文）

![](https://cdn.beekka.com/blogimg/asset/202202/bg2022020804.webp)

嫦娥五号探测器发现月壤和月岩存在微量水，但不是液态水，而是水分子，并且是微量的。

另外，遥感还发现，月球两极的永久阴影区可能存在水冰或富含挥发水的矿物。

2、[北京冬奥会专用字体是如何诞生的](https://www.logonews.cn/2022021004254541.html)（中文）

![](https://cdn.beekka.com/blogimg/asset/202202/bg2022021015.webp)

2019年8月中央美术学院与北京大学中国文字字体设计与研究中心，联合致函北京冬奥组委会，志愿为北京冬奥会和冬残奥会设计一套专用字体。

3、[Product Hunt 2021 金猫奖](https://mayandev.top/2022/02/10/tool/product-2021/)（中文）

![](https://cdn.beekka.com/blogimg/asset/202202/bg2022021702.webp)

Product Hunt 每年会评选当年的最佳新产品，颁发金猫奖。本文作者体验了获奖产品，介绍每一项的获奖者。（[@Mayandev](https://github.com/ruanyf/weekly/issues/2200) 投稿）

4、[arXiv 论文突破200万篇](https://www.163.com/dy/article/GUI0UGNO05327918.html)（中文）

![](https://cdn.beekka.com/blogimg/asset/202202/bg2022021704.webp)

arXiv 是一个免费的科学论文预印本平台，2022年伊始，它收入的论文突破了200万篇。本文是对这个平台的介绍。

5、[花10年写一本编程语言实现的书](https://catcoding.me/2022/01/12/a-book-on-programming-language.html)（中文）

![](https://cdn.beekka.com/blogimg/asset/202202/bg2022021703.webp)

Robert Nystrom 是一位拥有20年工作经验的谷歌软件工程师。他花了近10年时间，写了一本关于编程语言实现的书，2020年终于写完了。本文介绍这本书。（[@chenyukang](https://github.com/ruanyf/weekly/issues/2198) 投稿）

6、[聊聊微软面试](https://mp.weixin.qq.com/s/-NESGyGBbF3WakPFieAT0w)（中文）

![](https://cdn.beekka.com/blogimg/asset/202202/bg2022021705.webp)

作者最近入职微软，根据自己的面试经验写了这篇文章，作为微软面试准备的指导。（[@chinazhangchao](https://github.com/ruanyf/weekly/issues/2199) 投稿）

7、[我用字符画个冰墩墩](https://www.wdbyte.com/java/char-image.html)（中文）

![](https://cdn.beekka.com/blogimg/asset/202202/bg2022021706.webp)

作者使用 Java 语言，把冰墩墩作为例子，解释如何将图片转变为字符画。（[@niumoo](https://github.com/ruanyf/weekly/issues/2203) 投稿）

8、[树莓派安装 Android 12](https://konstakang.com/devices/rpi4/LineageOS19/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202202/bg2022021301.webp)

![](https://cdn.beekka.com/blogimg/asset/202202/bg2022021302.webp)

一个外国开发者提供镜像文件，让树莓派运行 Android 12。

我的试用体会是，硬件支持度很高，声音、摄像头、蓝牙、网卡都正常，有 3D 加速，适合安装手柄玩游戏，其他用途不适合：① Wifi 需要连得上谷歌；② 剥离了谷歌服务，需要另行安装，且有被谷歌封账号的危险；③ 用户可用空间不足4G，需要扩容。

![](https://cdn.beekka.com/blogimg/asset/202202/bg2022021303.webp)

## 工具

1、[ulid](https://github.com/ulid/spec)

![](https://cdn.beekka.com/blogimg/asset/202201/bg2022010602.webp)

一个独特 ID 的生成库，对 uuid 进行了多方面的改进。

2、[RSS-proxy](https://github.com/damoeb/rss-proxy)

![](https://cdn.beekka.com/blogimg/asset/202111/bg2021112906.jpg)

这个工具可以为任意 HTML 页面生成 RSS 订阅，只要页面有变动，你就会得到通知。

3、[Chokoku CAD](https://github.com/itta611/ChokokuCAD)

![](https://cdn.beekka.com/blogimg/asset/202111/bg2021112907.jpg)

基于浏览器的 CAD 建模工具。

4、[Gyroflow](https://gyroflow.xyz/)

![](https://cdn.beekka.com/blogimg/asset/202202/bg2022021005.webp)

一个桌面软件，用来处理抖动的视频，让画面变得稳定，效果相当好。（[@willshion](https://github.com/ruanyf/weekly/issues/2193) 投稿）

5、[Chrome OS Flex](https://cloud.google.com/blog/products/chrome-enterprise/chrome-os-flex)

![](https://cdn.beekka.com/blogimg/asset/202202/bg2022021701.webp)

谷歌推出了 Chrome OS 的通用安装版，可以在现有的 PC 和 Mac 上安装，为普通用户提供了 Windows/MacOS 以外的第三种操作系统的选择。

6、[SolidJS](https://www.solidjs.com/)

![](https://cdn.beekka.com/blogimg/asset/202111/bg2021113007.webp)

一个前端框架，完全借鉴了 React，但是把数据通信改成了基于事件的响应式（reactivity）。

7、[asmrepl](https://github.com/tenderlove/asmrepl)

这个工具提供汇编语言的命令行解释环境，可以输入一行汇编指令（比如 `mov rbx, 3`）查看结果。

8、[Bash-web-server](https://github.com/dzove855/Bash-web-server/)

一个用 Bash 写的 Web 服务器，只有100多行代码，很好懂，可以作为 Bash 学习材料。

9、[indexeddb-fs](https://github.com/playerony/indexeddb-fs)

这个库将浏览器的 indexedDB 包装成一个文件，允许像 Node.js 的 fs 模块那样使用。

## 资源

1、[GPS 原理解释](https://pages.longtian.info/gps/)（中文）

![](https://cdn.beekka.com/blogimg/asset/202201/bg2022011905.webp)

这篇长文解释了 GPS 的数学原理：卫星为什么可以用来定位？大量使用了动画图片进行说明，这里是中文翻译，另有[英文原版](https://ciechanow.ski/gps/)。（[@longtian](https://github.com/ruanyf/weekly/issues/2201) 投稿）

2、[Big-O 复杂性速查表](https://www.bigocheatsheet.com/)

![](https://cdn.beekka.com/blogimg/asset/202112/bg2021122902.webp)

这个网站提供 Big-O 复杂性表示法的各种基本信息，比如复杂性排序、常见数据结构和算法的复杂性。

3、[初学者的 Web 开发教程](https://microsoft.github.io/Web-Dev-For-Beginners/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202111/bg2021112804.webp)

微软提供的一个初级教程，讲授 JavaScript、CSS 和 HTML 的基本知识。

4、[Kubernetes 纪录片](https://www.bilibili.com/video/BV13q4y1h7QR)（中文字幕）

![](https://cdn.beekka.com/blogimg/asset/202202/bg2022021603.webp)

这个纪录片是关于 Kubernetes 项目的介绍，包括起源、命名、logo以及很多背后的故事。这里是 B 站的中文字幕版，另有 [Youtube 原版](https://www.youtube.com/watch?v=BE77h7dmoQU)。（[@jwenjian](https://github.com/ruanyf/weekly/issues/2204) 投稿）

5、[Xirva](https://www.xirva.org/)

![](https://cdn.beekka.com/blogimg/asset/202109/bg2021090808.jpg)

一个开放式论文库，查询没有版权限制、可以自由使用的科学论文，也可以上传自己的论文。

## 本周课程

1、[大数据工程师训练营](https://mp.weixin.qq.com/s?__biz=MzIwMDYwNjg5Ng==&mid=100105821&idx=1&sn=8fcfa9449550a8f43eb92110225d2749&chksm=16f94b82218ec2942cb045d2154318205295760c301dc8b1c7d48e9468d647b9bed8f6895dc0#rd)

![](https://cdn.beekka.com/blogimg/asset/202202/bg2022021605.webp)

大数据核心技术的免费课程，都是当前热点内容，包括大数据分析工具、数据仓库、数据大屏实战。目标是让大家熟悉和掌握大数据工具和开发，最后自己动手，实现一个基于阿里云 QuickBI 和 DataV 的数据看板和实时大屏。

主讲老师侯圣文（贝壳找房前大数据总监、阿里云 MVP、腾讯云 TVP、Oracle ACE），讲解通俗，零基础的同学也可以听。3天直播课，周刊读者报名仅需1元。

## 图片

1、[三头龙](https://englishrussia.com/2021/11/16/three-headed-dragon-breathing-fire/)

![](https://cdn.beekka.com/blogimg/asset/202111/bg2021112311.jpg)

俄罗斯的一个村庄，传说是三头龙的故乡。当地为了吸引游客，就建设了三头龙的雕塑。

![](https://cdn.beekka.com/blogimg/asset/202111/bg2021112312.jpg)

![](https://cdn.beekka.com/blogimg/asset/202111/bg2021112313.jpg)

这个雕塑高达15米，每到固定时间，还会喷火，发出咆哮声，成了著名的旅游景点。

![](https://cdn.beekka.com/blogimg/asset/202111/bg2021112314.jpg)

![](https://cdn.beekka.com/blogimg/asset/202111/bg2021112315.jpg)

2、[陶哲轩的数学课](https://www.masterclass.com/classes/terence-tao-teaches-mathematical-thinking/)

![](https://cdn.beekka.com/blogimg/asset/202202/bg2022021707.webp)

著名华裔数学家陶哲轩，为一家商业网站录制了视频课程，向普通人讲解数学思维，这是预告片（[Youtube](https://www.youtube.com/watch?v=axzFfSvQdYQ)，[腾讯视频](https://v.qq.com/x/page/h3322u29zve.html)）。

<iframe frameborder="0" src="https://v.qq.com/txp/iframe/player.html?vid=h3322u29zve" allowFullScreen="true" width="600" height="400"></iframe>

## 文摘

1、[莫斯科国立大学的学生网络](https://medium.com/@pv.safronov/moscow-state-university-network-built-by-students-211539855cf9)

莫斯科国立大学是俄罗斯最好的大学，在国际上也很有名。它的主楼有36层，除了中间部分，其它部分都是学生宿舍。

![](https://cdn.beekka.com/blogimg/asset/202111/bg2021112316.jpg)

但是，宿舍条件很差，下图是博士生的单人宿舍，简直像有窗的牢房。

![](https://cdn.beekka.com/blogimg/asset/202111/bg2021112317.jpg)

双人宿舍的面积稍微大一点。

![](https://cdn.beekka.com/blogimg/asset/202111/bg2021112318.jpg)

更糟糕的是，2013年之前，学生宿舍是没有网的，学生们没办法上网。从2002年开始，学生们就开始自己动手组网。

供热管的上方有一个通气孔，学生将网线从那里通到楼外，跟其他宿舍连起来。

![](https://cdn.beekka.com/blogimg/asset/202111/bg2021112319.jpg)

![](https://cdn.beekka.com/blogimg/asset/202111/bg2021112320.jpg)

结果就是，大楼外面网线密布，像密密麻麻的蜘蛛网。

![](https://cdn.beekka.com/blogimg/asset/202111/bg2021112321.jpg)

![](https://cdn.beekka.com/blogimg/asset/202111/bg2021112322.jpg)

![](https://cdn.beekka.com/blogimg/asset/202111/bg2021112323.jpg)

好在2013年，学校终于出面，为学生宿舍统一安装了上网。

2、[3-2-1 备份策略](https://www.vmwareblog.org/3-2-1-backup-rule-data-will-always-survive/)

为了防止数据丢失，对于最重要的数据，应该采取 3-2-1 备份策略。

首先，除了原始数据，你应该有3份数据拷贝。

![](https://cdn.beekka.com/blogimg/asset/202111/bg2021112512.jpg)

其次，3份数据拷贝应该保存在两种媒介，比如不能放在同一个硬盘或者同一台计算机。

![](https://cdn.beekka.com/blogimg/asset/202111/bg2021112513.jpg)

最后，有一份数据拷贝必须放在异地，比如在云端或其他城市。

![](https://cdn.beekka.com/blogimg/asset/202111/bg2021112514.jpg)

## 言论

1、

任何一个有效的东西，都会引来1000个模仿者。

-- [《眨眼就错过的行业》](https://blog.hedgehog.app/crypto-moves-fast/)

2、

人类对于霸王龙的所有了解，都来自全世界现存的18个标本。其中只有8个标本的完整程度，超过恐龙身体的50%。

-- [Hacker News 读者](https://news.ycombinator.com/item?id=29647890)

3、

一项研究表明，观看学习视频时，两倍速看两遍比正常速度看一遍，效果更好。

-- [英国心理学会](https://digest.bps.org.uk/2021/12/21/watching-a-lecture-twice-at-double-speed-can-benefit-learning-better-than-watching-it-once-at-normal-speed/)

4、

北极航线是亚洲到欧洲最短的航线。现在气候变暖，这条航线夏季可以通航。俄罗斯正在努力，让通航时间延长到每年有8到10个月，为此他们计划建造更多的核动力破冰船，为集装箱船开路。我相信，中国肯定希望全年开放，因为美国封锁不了这条航线。

-- [Hacker News 读者](https://news.ycombinator.com/item?id=29673216)

5、

我的教训是，不要在别人的知识产权上投入太多。同理，也不要在别人的 API 上投入太多。

-- [Hacker News 读者](https://news.ycombinator.com/item?id=29673707)

## 历史上的本周

2021年（第 144 期）：[提高收入的根本途径](https://www.ruanyifeng.com/blog/2021/01/weekly-issue-144.html)

2020年（第 92 期）：[听觉暂留](https://www.ruanyifeng.com/blog/2020/01/weekly-issue-92.html)

2019年（第 41 期）：[如何看待互联网公司裁员？](https://www.ruanyifeng.com/blog/2019/01/weekly-issue-41.html)

## 订阅

这个周刊每周五发布，同步更新在[阮一峰的网络日志](http://www.ruanyifeng.com/blog)和[微信公众号](http://weixin.sogou.com/weixin?query=%E9%98%AE%E4%B8%80%E5%B3%B0%E7%9A%84%E7%BD%91%E7%BB%9C%E6%97%A5%E5%BF%97)。

微信搜索“阮一峰的网络日志”或者扫描二维码，即可订阅。

![](https://cdn.beekka.com/blogimg/asset/202103/bg2021030402.jpg)

（完）

