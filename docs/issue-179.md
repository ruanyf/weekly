# 科技爱好者周刊（第 179 期）：AR 技术的打开方式

这里记录每周值得分享的科技内容，周五发布。

本杂志开源（GitHub: [ruanyf/weekly](https://github.com/ruanyf/weekly)），欢迎提交 issue，投稿或推荐科技内容。

周刊讨论区的帖子[《谁在招人？》](https://github.com/ruanyf/weekly/issues/1980)，提供大量程序员就业信息，欢迎访问或发布工作/实习岗位。

## 封面图

![](https://cdn.beekka.com/blogimg/asset/202109/bg2021090604.jpg)

济宁市美术馆2019年建成，由日本建筑师设计。上图中，上方的不规则白色屋顶，就是美术馆的展厅。下方是一个公园，左侧是一个回廊步道，右侧是咖啡馆。（[via](https://mp.weixin.qq.com/s/YW5TQ444NFhOLFBR3VkLfg)）

## 本周话题：AR 技术的正确打开方式

前两天，我看到一条[新闻](https://www.nrw-forum.de/en/exhibitions/ar-biennale)，德国杜塞尔多夫开张了一家 AR 公园（增强现实公园）。

表面上，这就是一家普通的公园，草地、绿树、小溪流……

![](https://cdn.beekka.com/blogimg/asset/202109/bg2021092506.jpg)

但是，当你打开手机 App，使用摄像头，就会看到所有场景上面，都叠加了一个虚拟层。

天空漂浮着奇怪的生物。

![](https://cdn.beekka.com/blogimg/asset/202109/bg2021092507.jpg)

道路上有充气路障。

![](https://cdn.beekka.com/blogimg/asset/202109/bg2021092803.jpg)

长椅上坐着一个不存在的人。

![](https://cdn.beekka.com/blogimg/asset/202109/bg2021092508.jpg)

游客可以探索这些虚拟对象，也可以根据提示，完成指定任务，解锁关卡。

新闻说，这个公园一共部署了35个 AR 应用，其中13个是免费作品，其余22个必须付费4.99欧元才能激活，相当于公园门票了。

我觉得，这个主意太好了，值得借鉴。

**城市公园改建为 AR 游戏场，这才是 AR 技术的正确打开方式。** 公园还是那个公园，什么都没变，但是加入了电子游戏的成分。这里最关键的一点是，**AR 就是应该在室外玩。**

仔细想一下，你会发现，绝大多数电子游戏只适合在室内玩，但是 AR 可以在室外玩，而且室外比室内好玩得多。

这是因为 AR 是部分虚拟、部分现实，虚拟层需要叠加在现实层之上，如果现实空间太小、太单调，就不可能设计出好玩的 AR 应用。目前，国内影响最大的 AR 应用，就是支付宝“集五福”的室内找“福”字，这个游戏非常乏味，原因就在这里，室内很难想出好玩的玩法。

![](https://cdn.beekka.com/blogimg/asset/202109/bg2021092509.jpg)

相反的，室外可以叠加寻宝、解谜、打卡等多种手段，还能跟虚拟对象互动，可玩性大大增强。国外的 AR 游戏《Pokemon Go》就出现过万人街头寻宝的热潮。

![](https://cdn.beekka.com/blogimg/asset/202109/bg2021092510.jpg)

游戏公司真的应该多开发针对室外空间的 AR 游戏。如果政府同意把公园改造为 AR 游戏场，就解决了游戏场地的问题。

![](https://cdn.beekka.com/blogimg/asset/202109/bg2021092511.jpg)

最后提一下，最近很热门的“元宇宙”，指的是一个与真实世界平行的虚拟世界。但是，目前的元宇宙实现都是基于 VR，也就是全部虚拟的宇宙。我在想，有没有可能出现基于 AR 的元宇宙呢？

在 AR 元宇宙之中，世界本身依然是真实世界，但是玩家的各种活动发生在虚拟层里面。举例来说，如果要举办一个晚会，地址在人民路，那么 VR 元宇宙需要构建一条虚拟的人民路，而 AR 元宇宙则是在真实的人民路上构建一个虚拟会场，不仅开发难度低，而且真实感更强。

## Go 语言基础学习

我们常说的“互联网开发”，其实包括前端和后端两个部分。前端是客户端开发，后端是服务器开发。

Java 语言是后端开发的老大，企业级的互联网后台大部分都是用 Java 写的。但是，这几年 Go 语言上升很快，目前市场占有率可能仅次于 Java，比如视频网站 B 站的后台就完全是用 Go 写的。

Go 语言有几个显著的优点。首先从一开始，它就是为互联网并发环境设计的，特别适合互联网应用，其次它是跨平台的，同样的代码可以运行在不同的操作系统，再次它背后有谷歌这样的大公司支持。语法上，它比 Java 和 C++ 都要简洁，新人一周左右就能入门上手，而性能丝毫不落下风。

目前招聘市场上，Go 语言的行情非常好，招聘的公司远多于应聘的程序员。根据一份2021年的[调查](https://www.hackerearth.com/recruit/resources/insights/developer-survey-2021/)，Go 语言位列最想学习的编程语言的前三名。

![](https://cdn.beekka.com/blogimg/asset/202110/bg2021101401.jpg)

如果你有打算服务器开发，想为前端程序做一个后台，Go 语言肯定是值得学习的。

本周介绍的课程，就是一门来自极客时间的学习资料 **《Go 基础冲刺班》**。它通过四节课 + 三个实战项目，帮助大家入门 Go 语言，讲解基础语法，理清学习难点。

这份学习资料适合下面三种同学：

> - 已经有其他语言基础、但还没上手过 Go
> - 想从其他技术栈转到 Go 技术栈的
> - 已经在做 Go 研发，想要巩固基础

四节课的学习内容如下。

![](https://cdn.beekka.com/blogimg/asset/202110/bg2021101505.jpg)

每节课都提供配套源码和 PPT。想学习 Go 语言的同学可以尝试一下，不花一分钱就得到一份基础教程。

![](https://cdn.beekka.com/blogimg/asset/202110/bg2021101403.jpg)

微信扫描上方二维码，添加班主任，即可免费获得课程链接和配套源码。

## 科技动态

1、[《鱿鱼游戏》的官司](https://www.reuters.com/business/media-telecom/skorea-broadband-firm-sues-netflix-after-traffic-surge-squid-game-2021-10-01/)

![](https://cdn.beekka.com/blogimg/asset/202110/bg2021100210.jpg)

韩国电视剧《鱿鱼游戏》最近成了 Netflix 平台观看次数最多的电视剧，但是却为 Netflix 带来了官司。

韩国的网络服务商 SK Broadband 起诉 Netflix，理由是太多观众通过网络收看电视剧，要求后者支付网络流量增加和维护工作的费用。证据之一是 Netflix 在美国为了提高流媒体速度，向宽带提供商康卡斯特公司支付网络维护费用，已经超过七年。

这种指控其实有点奇怪，因为内容提供商不会产生流量，而是观众产生流量，但是观众已经向网络运营商付费了。另一方面，如果 SK Broadband 设立网内的缓存服务器，那么所有的观看流量都是网内流量，几乎没有成本。

2、[加油机器人](https://news.mydrivers.com/1/782/782460.htm)

![](https://cdn.beekka.com/blogimg/asset/202109/bg2021091105.jpg)

国内首款加油机器人，在南宁投入试运行。只要把小轿车停在加油机前，手机下单以后，加油机器人就会伸出“手臂”，打开油箱盖，插入加油枪。整个过程仅需3分钟，司机不需要下车。

![](https://cdn.beekka.com/blogimg/asset/202109/bg2021091107.jpg)

![](https://cdn.beekka.com/blogimg/asset/202109/bg2021091106.jpg)

这台机器能够自动判断车型、定位油箱盖位置、自动打开和关闭油箱内外盖，实现了“开关盖+插拔枪”动作的智能化。

3、[疫苗贴片](https://www.eurekalert.org/news-releases/929458)

![](https://cdn.beekka.com/blogimg/asset/202109/bg2021092501.jpg)

美国科学家发明了一种 3D 打印的疫苗贴片，只要贴在皮肤上，就会溶解到皮肤中，达到疫苗注射的效果。

这种疫苗贴片表面有许多微针头，可以刺破皮肤的表皮细胞，进行给药。相比传统的疫苗注射，这种方式的优点是无痛、侵入性更小，并且可以自我给药，不需要护士。（[@jijiah](https://github.com/ruanyf/weekly/issues/1984) 投稿） 

4、[ABBA 虚拟演唱会](https://www.bbc.com/news/entertainment-arts-58423452)

![](https://cdn.beekka.com/blogimg/asset/202109/bg2021090709.jpg)

瑞典著名乐队 ABBA 最近录制了新专辑，距离上一张专辑已经过去了40年。1982年乐队解散时，四个成员还是年轻人，现在都已经成了老人。

专辑的两首新歌定于今年11月5日首发，同时还会在网上举行一次虚拟演唱会。四名成员以 3D 人物的形式在舞台上演唱20多首歌。虽然他们的演唱会化身是计算机生成的，但是舞台上的动作确实是本人的。他们为了这次演唱会，穿上了感应服装，进行动作捕捉。

![](https://cdn.beekka.com/blogimg/asset/202109/bg2021090710.jpg)

![](https://cdn.beekka.com/blogimg/asset/202109/bg2021090711.jpg)

5、[木制大钟](https://www.ablogtowatch.com/suzuki-kango-plock-wooden-automaton-time-writing-clock/)

![](https://cdn.beekka.com/blogimg/asset/202109/bg2021090705.jpg)

![](https://cdn.beekka.com/blogimg/asset/202109/bg2021090708.jpg)

一个日本大学生，为了自己的毕业设计，制作了一个木制大钟，一共有400个零件，全部手工制作，令人叹为观止，简直是一件艺术品。

![](https://cdn.beekka.com/blogimg/asset/202109/bg2021090706.jpg)

它的最神奇之处，莫过于显示时间的表盘是一块白板，每当时间发生变化，机器会自动抹去原来的时间，用笔写上新的时间。

![](https://cdn.beekka.com/blogimg/asset/202109/bg2021090707.jpg)

请看下面的[视频](https://v.qq.com/x/page/n3273zj877v.html)。

<iframe frameborder="0" src="https://v.qq.com/txp/iframe/player.html?vid=n3273zj877v" allowFullScreen="true" width="400" height="600"></iframe>

6、[城市太阳能装置](https://www.pierre-brault.com/installationssolaires)

![](https://cdn.beekka.com/blogimg/asset/202108/bg2021081909.jpg)

一个法国艺术家发明了一种新的太阳能装置，可以装在城市楼房外侧。它将两块太阳能交叉在一起，从而不管太阳在哪个角度，都能获得光照。

![](https://cdn.beekka.com/blogimg/asset/202108/bg2021081910.jpg)

而且，每块太阳能板还可以做成不同的形状，将照射在墙上的阴影，变成各种文字和图案。

![](https://cdn.beekka.com/blogimg/asset/202108/bg2021081911.jpg)

![](https://cdn.beekka.com/blogimg/asset/202108/bg2021081912.jpg)

## 文章

1、[两个电动车主的长假出游遭遇](https://finance.sina.com.cn/tech/2021-10-08/doc-iktzqtyu0207060.shtml)（中文）

![](https://cdn.beekka.com/blogimg/asset/202110/bg2021101506.jpg)

十一假期，很多人开电动车出游，都遭遇到了充电困境。本文讲述了两位车主的亲身经历。

2、[钍燃料反应堆试验](https://mp.weixin.qq.com/s/lk4MvXHZcFWtvxb_gjvd-w)（中文）

![](https://cdn.beekka.com/blogimg/asset/202109/bg2021091502.jpg)

核反应堆目前都使用铀燃料，《自然》杂志报道中国正在甘肃省试验钍燃料反应堆。钍比铀有一些显著的优点，比如核废料更少、不需要大量的水，但是成本比较高，技术还不成熟。本文介绍了钍反应堆的背景知识。

3、[NASA 的交互式图像小说](https://www.ifanr.com/1445255)（中文）

![](https://cdn.beekka.com/blogimg/asset/202110/bg2021100303.jpg)

美国宇航局 NASA 在官网发布了一部交互式小说，用户可以下载 PDF 文件阅读。它的最大特点就是里面有很多二维码，手机扫描后可以看到背景材料、插图和视频。但是与其这样做，为什么不直接做成网页发布呢？

![](https://cdn.beekka.com/blogimg/asset/202110/bg2021100304.jpg)

4、[我在通用电气工作的一件往事](https://justyy.com/archives/45872)（中文）

作者2018年底加入了美国通用电气在英国剑桥的软件部门，发现公司内部使用的是一种自己发明的语言，但是这种语言没有 while 语句。（[@DoctorLai](https://github.com/ruanyf/weekly/issues/1992) 投稿）

5、[如何用复选框实现图片、动画和游戏](https://www.bryanbraun.com/2021/09/21/i-keep-making-things-out-of-checkboxes/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202110/bg2021101501.jpg)

在视觉上，复选框的选中状态不同于未选中状态。作者突发奇想，利用这一点将图片、动画、游戏转成复选框。（[@abel533](https://github.com/ruanyf/weekly/issues/1995) 投稿）

6、[中位数为什么比平均值有用](https://blog.timescale.com/blog/how-percentile-approximation-works-and-why-its-more-useful-than-averages/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202109/bg2021091501.jpg)

这篇文章的前半部分使用图形，通俗地解释了为什么中位数（medium）比平均值（average）更好地反映了总体状况。

文章后半部分讲解了数据库如何查询中位数，不感兴趣的同学可以只看前半部分。

7、[Envoy 开源五年的回顾](https://mattklein123.dev/2021/09/14/5-years-envoy-oss/)（英文）

这是一篇长文，作者是开源项目 Envoy 的创始人，讲述了这个项目是如何诞生和发展的，抒发了很多个人感想，值得一读。网上有[中文翻译](https://cloudnative.to/blog/envoy-oss-5-year/)。

8、[JavaScript 如何遍历树结构](https://stackfull.dev/tree-data-structure-in-javascript)（英文）

![](https://cdn.beekka.com/blogimg/asset/202109/bg2021090704.jpg)

本文介绍了树结构在 JavaScript 语言里面如何遍历，写得浅显易懂，解释了广度优先、深度优先等多种方法的实现。

9、[GitHub Markdown 现在支持脚注](https://github.blog/changelog/2021-09-30-footnotes-now-supported-in-markdown-fields/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202109/bg2021093005.jpg)

这篇是 GitHub 的官方博客，宣布该网站的 Markdown 语法现在支持脚注了，可以看看脚注怎么写。（[@jwenjian](https://github.com/ruanyf/weekly/issues/1982) 投稿）

## 工具

1、[htmlq](https://github.com/mgdm/htmlq)

一个命令行工具，可以从 HTML 代码里面提取内容，类似于 jq 从 JSON 里面提取内容。

2、[Notion Avatar Maker](https://notion-avatar.vercel.app/zh)

![](https://cdn.beekka.com/blogimg/asset/202110/bg2021100504.jpg)

一个网页工具，可以在线制作 Notion 风格的个人头像。（[@Mayandev](https://github.com/ruanyf/weekly/issues/1988) 投稿）

3、[DeepFaceLive](https://github.com/iperov/DeepFaceLive)

![](https://cdn.beekka.com/blogimg/asset/202109/bg2021090814.jpg)

一个桌面软件，进行深度学习训练后，可以在视频直播和视频会议里面实时换脸。

4、[FSNotes](https://fsnot.es/)

![](https://cdn.beekka.com/blogimg/asset/202108/bg2021082304.jpg)

苹果设备的笔记软件，支持 Touchbar 和 iCloud 同步，还可以 Git 版本控制和备份。

5、[Windows 11 in React](https://github.com/blueedgetechno/windows11)

![](https://cdn.beekka.com/blogimg/asset/202108/bg2021082402.jpg)

该项目将 Windows 11 的桌面移植到网页上，使用 React 开发。

6、[PoW! Captcha](https://git.sequentialread.com/forest/pow-captcha)

![](https://cdn.beekka.com/blogimg/asset/202109/bg2021091104.jpg)

一个开源的网页机器人识别服务（Captcha），通过工作量来识别。服务器会发送一个计算难题，要求客户端进行计算，使得入侵脚本的计算成本很高。

7、[youtube-dl-gui](https://github.com/jely2002/youtube-dl-gui)

![](https://cdn.beekka.com/blogimg/asset/202109/bg2021091108.jpg)

youtube-dl 的图形界面封装，支持多个视频网站的视频下载。

8、[Ozzillate](https://www.ozzillate.com/)

![](https://cdn.beekka.com/blogimg/asset/202109/bg2021091109.jpg)

一个很有意思的声波传送工具，将上传的文件转成声波，其它电脑从麦克风“听到”以后，再将声波转回文件。

9、[BeMyEars](https://www.engineerdraft.com/bemyears/)

![](https://cdn.beekka.com/blogimg/asset/202110/bg2021101406.jpg)

MacOS 应用，可以对系统播放的声音（比如浏览器、视频播放器、音乐播放器）进行语音识别，然后实时生成字幕。（[@yujinqiu](https://github.com/ruanyf/weekly/issues/1993) 投稿）

10、[message-box](https://github.com/kingcc/message-box)

![](https://cdn.beekka.com/blogimg/asset/202110/bg2021101503.jpg)

一个 Web Component 的消息框组件。([@kingcc](https://github.com/ruanyf/weekly/issues/1998) 投稿)

## 资源

1、[云媒体速览](https://laosheng.top/fly/)

![](https://cdn.beekka.com/blogimg/asset/202110/bg2021100404.jpg)

该网站收集了中国333个地级市的报纸电子版和电视直播网址。（[@DiamonWoo](https://github.com/ruanyf/weekly/issues/1981) 投稿）

2、[公司作息时间表](https://github.com/WorkerLivesMatter/WorkingTime)

![](https://cdn.beekka.com/blogimg/asset/202110/bg2021101502.jpg)

一个民间众包项目，用户通过腾讯文档的表格，提交自己所在部门的上下班作息时间，可以用来了解不同公司的加班情况。（[@erdong](https://github.com/ruanyf/weekly/issues/1997) 投稿）

3、[中等代数](https://saylordotorg.github.io/text_intermediate-algebra/index.html)

一本英文的数学教材，讲解中学代数，包括线性方程、指数函数、二项式定理等等，免费阅读。

4、[教娃编程视频300天](https://zhihua-lai.com/teaching/ch/)

![](https://cdn.beekka.com/blogimg/asset/202110/bg2021101405.jpg)

一个工程师给娃讲了很多数学和计算机知识的短视频，详见[说明文章](https://justyy.com/archives/45834)。（[@DoctorLai](https://github.com/ruanyf/weekly/issues/1989) 投稿）

5、[路径算法的动图演示](https://github.com/zhm-real/PathPlanning)

![](https://cdn.beekka.com/blogimg/asset/202110/bg2021100502.jpg)

这个仓库提供常见路径算法的动画演示，一共有20多个算法演示。（[@DoctorLai](https://github.com/ruanyf/weekly/issues/1986) 投稿）

## 图片

1、[高濑川](https://wrathofgnon.substack.com/p/sustainable-infrastructure) 

1608 年，一个名叫角仓了以（Suminokura Ryōi）的日本商人，得到了一份合同，为京都的一座寺庙提供建筑材料。

这件事的最大困难，就是无法把巨大数量的建材运到市中心。于是，他出钱请人挖了一条运河，从港口通到市中心。他用当地采石场的石头铺设岸堤和河底，由于他的船吃水大约15厘米，河的深度就翻一倍，定为30厘米。

1614年，这条长9.7公里、宽7米的运河挖好了，称为“高濑川”。

![](https://cdn.beekka.com/blogimg/asset/202108/bg2021080601.jpg)

![](https://cdn.beekka.com/blogimg/asset/202108/bg2021080602.jpg)

这条运河一直沿用到1920年，基本上不需要维护，可靠地发挥着航运功能。1920年以后，停止了航运，变成了纯粹的观光河流，直到今天还保留着400年前建造时的样貌。

![](https://cdn.beekka.com/blogimg/asset/202108/bg2021080603.jpg)

![](https://cdn.beekka.com/blogimg/asset/202108/bg2021080604.jpg)

![](https://cdn.beekka.com/blogimg/asset/202108/bg2021080605.jpg)

2、[《解析数论导论》的封面](https://twitter.com/susam/status/1423959528081530881)

1976年出版的美国高等数学教材《解析数论导论》，封面是一张很奇怪的图片。

![](https://cdn.beekka.com/blogimg/asset/202108/bg2021080707.jpg)

很多人以为，这张图片只是一张普通的对称图片，但其实是有含义的。

![](https://cdn.beekka.com/blogimg/asset/202108/bg2021080708.jpg)

它画了一个坐标轴，x 轴和 y 轴都是0到17，每个点的坐标`(x, y)`就是一个数值对。只要数值对的最大公约数不等于1 (`gcd(x, y) ≠ 1`)，该点就会画上一个方块，否则为空。

举例来说，原点`(0, 0)`的最大公约数为`0`，所以有一个方块；而它旁边的两个点`(0, 1)`和`(1, 0)`，可以认为最大公约数为`1`，所以为空。

对角线上除了`(1, 1)`，其它点的最大公约数都不等于1，所以这些点都有一个方块。

## 文摘

1、[谷歌如何收购 Android](https://arstechnica.com/information-technology/2021/08/excerpt-the-history-of-android-as-written-by-a-longtime-android-developer/)

Android 是谷歌公司的操作系统，但并不是谷歌从头开发的，而是从一家小公司收购而来的。

最近，美国出版了一本新书，作者采访了几十位当事人，介绍 Android 的诞生内幕。

![](https://cdn.beekka.com/blogimg/asset/202108/bg2021081407.jpg)

Android 团队最早的创业想法，是为照相机开发一个操作系统。但是，后来意识到手机会取代相机，成为主流的拍摄设备，就转而为手机开发操作系统。

2005年初，Android 团队陷入困境，急需现金，开始寻找外部投资。

工程师就为当时的按键手机写了一个演示程序，包括一个主屏幕和几个应用程序，不过大部分都不能运行。毫不奇怪，这个演示程序与今天的 Android 相去甚远。

![](https://cdn.beekka.com/blogimg/asset/202108/bg2021081408.jpg)

有了演示程序，他们又准备了一个 PPT，解释他们的愿景，然后就开始向潜在投资者推销自己，试图获得投资。

这个 PPT 保存到了今天，一共15页。

![](https://cdn.beekka.com/blogimg/asset/202108/bg2021081409.jpg)

他们首先解释了为什么手机市场即将发生巨变。

![](https://cdn.beekka.com/blogimg/asset/202108/bg2021081410.jpg)

2004年，全球个人电脑出货量为1.78亿台，手机出货量为6.75亿部，几乎是 PC 数量的四倍。这意味着，手机市场已经远远超过 PC 市场，并且还在高速发展。

但是，2004年手机的处理器和内存只相当于 1998 年 PC 的性能（200MHz 的 CPU 和 32MB 的内存），因此手机需要一个真正的、功能强大的操作系统。

而且，手机的硬件成本正在下降，但是软件成本没有下降，手机制造商迫切需要一个廉价的操作系统，从而降低软件成本。

![](https://cdn.beekka.com/blogimg/asset/202108/bg2021081411.jpg)

手机制造商并不是软件开发专家，没有能力也没有兴趣，持续改进软件，因此需要外部的软件公司为他们提供操作系统。

Android 将是一个免费的手机操作系统，以开源的形式提供给手机制造商。手机公司能够自由使用这个操作系统，不必依赖软件公司，也无需自己来开发。

2005年的市场上，手机操作系统寥寥无几。

- 微软的系统要得到许可后，才能移植。
- 塞班（Symbian）系统主要由诺基亚使用，其它手机公司虽然可以用，但是无法与诺基亚竞争。
- 黑莓的系统不能用于其他手机。

对于那些想要制造一款功能强大的智能手机的制造商来说，根本没有操作系统可用，要么自己从头开发，要么支付高额许可费，使用那些专有的操作系统。然后，就会面对一个更大的问题：根本没有应用程序生态，谁来为这些操作系统开发应用程序呢？

塞班系统允许外部应用程序，但是通用性很差，为一种型号手机写的程序，无法运行在另一个型号上，即使两部手机出自同一个制造商，它们的应用程序也不是通用的。

Android 希望提供世界第一个完整的开源的手机操作系统。它建立在 Linux 之上，为应用程序开发者提供单一的编程模型，同一个应用程序可以运行在使用该系统的所有设备上，从而简化开发。


![](https://cdn.beekka.com/blogimg/asset/202108/bg2021081412.jpg)

接着就是最困难、也是最重要的问题，Android 如何赚钱呢。如果这个开源手机操作系统，不能让发明者赚到钱，怎么吸引外部投资呢，又如何保证能够持续开发呢？

Android 团队设想，通过为手机制造商提供云服务、以及应用程序的基础设施（比如认证和加密）来盈利。后来的事实证明，谷歌果然是通过谷歌服务框架和 Play 应用商店来盈利。

创始团队与很多风投进行了接触，其中就包括了谷歌。谷歌邀请他们到总部来会谈，两位谷歌创始人拉里和佩奇都参加了。那次会议非常随意，但是谷歌显然对 Android 很感兴趣。会议结束时，谷歌说：“我们想帮助你们。”

接着，Android 团队去了亚洲，访问了三星和 HTC，了解手机制造商的态度。三星说，如果美国的无线运营商能够接受 Android，他们就愿意推出基于 Android 的手机。HTC 则说，希望独家合作，这个系统只授权给他们使用。团队不愿答应这个要求，但是后来推出的世界第一部 Android 手机，就是 HTC G1。

![](https://cdn.beekka.com/blogimg/asset/202110/bg2021101303.jpg)

从亚洲回来以后，谷歌又找 Android 团队开会。这次会议来了更多的人。团队原以为，谷歌想了解项目开发进展，但是演讲进行到一半，谷歌打断了他们，直接说：“我们想收购你们。”

谷歌表示，如果 Android 愿意被收购，而不是接受风险投资，情况会好得多。这样可以不必理会风险投资家的要求，也不必向客户和运营商收取专门服务的费用，一心一意将操作系统免费提供给手机制造商即可。而且，手机内部还可以绑定谷歌的搜索服务，谷歌会从搜索获得收入，这些收入可以与手机制造商分享，从而手机制造商会从 Android 获利，因而有动力使用这个系统。

2005年7月，Android 正式加入谷歌。

几周后，团队再次在谷歌内部，向高管进行了宣讲。当讲到如何将 Android 货币化时，拉里打断了演讲者：“不用考虑这个，我只希望你们造出最好的手机，其余的事情以后再说。”谷歌收购这个团队的原因很简单，就是希望通过它可以让谷歌进入移动设备市场。

## 言论

1、

飞行汽车结合了两种完全不同的工程体系：它必须既能飞行，又能适应地面运输的狭窄空间限制。

同时满足飞行和地面运输的各种安全和效率要求并非易事，这就是为什么至今没有公司能造出飞行汽车，最多就是造出点对点的飞行汽车，这种车辆通常没有车轮，更像小飞机。

--[《技术成功的规则》](https://spectrum.ieee.org/the-rodney-brooks-rules-for-predicting-a-technologys-commercial-success)

2、

程序员没有必要局限在一种语言或工具。工具每天都在变化，只要新工具适合你的用例，就可以选择它。你的标准应该是，选择最能够快速有效地解决问题的任何语言或工具。

-- [《下一个项目要用哪些工具》](https://betterengineeringclub.substack.com/p/what-tools-to-use-for-your-next-web)

3、

一个可运行的复杂系统，总是从一个简单系统演变而来的。似乎可以因此推断：从头开始设计一个复杂系统，永远不会奏效，必须从一个简单系统开始设计。

-- [《加尔定律》](https://www.ivanmontilla.com/blog/galls-law-and-how-i-ignored-it)

4、

大师并不是一开始就是大师。你把他们早期第一阶段的作品找出来看看，就会了解他们取得了多大的进步。

-- David Perell

5、

不要对技术钻牛角尖，要对如何获取客户钻牛角尖。

-- [Hacker News 读者](https://news.ycombinator.com/item?id=28838861)

## 历史上的本周

2020年（第 128 期）：[这个社会是否正在变成"赛博朋克"？](https://www.ruanyifeng.com/blog/2020/10/weekly-issue-128.html)

2019年（第 76 期）：[任何爱好都能变成职业，只要你会拍视频](https://www.ruanyifeng.com/blog/2019/10/weekly-issue-76.html)

2018年（第 25 期）：[安卓手机十周年的感想](https://www.ruanyifeng.com/blog/2018/10/weekly-issue-25.html)

## 订阅

这个周刊每周五发布，同步更新在[阮一峰的网络日志](http://www.ruanyifeng.com/blog)和[微信公众号](http://weixin.sogou.com/weixin?query=%E9%98%AE%E4%B8%80%E5%B3%B0%E7%9A%84%E7%BD%91%E7%BB%9C%E6%97%A5%E5%BF%97)。

微信搜索“阮一峰的网络日志”或者扫描二维码，即可订阅。

![](https://cdn.beekka.com/blogimg/asset/202103/bg2021030402.jpg)

（完）

