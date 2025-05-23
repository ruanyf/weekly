# 科技爱好者周刊（第 349 期）：神经网络算法的发明者

这里记录每周值得分享的科技内容，周五发布。

本杂志[开源](https://github.com/ruanyf/weekly)，欢迎[投稿](https://github.com/ruanyf/weekly/issues)。另有[《谁在招人》](https://github.com/ruanyf/weekly/issues/6771)服务，发布程序员招聘信息。合作请[邮件联系](mailto:yifeng.ruan@gmail.com)（yifeng.ruan@gmail.com）。

## 封面图

![](https://cdn.beekka.com/blogimg/asset/202505/bg2025052105.webp)

北京的护城河公共绿道，位于鼓楼附近。（via [visuals_china@instagram](https://www.instagram.com/p/DJi3qkuOTZ5/)）

## 神经网络算法的发明者

上周的[《李飞飞自传》读后感](https://www.ruanyifeng.com/blog/2025/05/weekly-issue-348.html)，还有后续。

那篇文章的结尾是，2012年一支加拿大团队使用神经网络算法，夺得了 ImageNet 比赛冠军。

今天就来说说，这支加拿大团队的故事。

![](https://cdn.beekka.com/blogimg/asset/202505/bg2025052104.webp)

大家看了就知道了，神经网络算法是怎么诞生的，背后的推手又是谁。

**（1）杰弗里·辛顿**（Geoffrey Hinton，1947-）

![](https://cdn.beekka.com/blogimg/asset/202505/bg2025051807.webp)

辛顿出生于英国，后移居加拿大。他是神经网络算法的奠基人和主要发明者。

神经网络的概念，是上世纪40年代后期提出的（提出人不是辛顿）。当时的想法是，既然人类通过神经网络进行思考，那么只要让机器模拟神经网络，机器就能思考了。

但是，那只是一个概念，并没有具体的算法。机器怎么模拟思考，人们并不知道。

1984年，辛顿在加州大学担任博士后，与两个同事一起提出了反向传播算法。

这个算法可以建立多层网络，产生一个输出结果，让神经网络变成了现实，也是后来更高级算法的基础。

由于它需要多层计算，后一层在前一层的结果上学习，所以被称为“深度学习”，辛顿因此成为“深度学习之父”。

辛顿后来因为这个贡献，获得了图灵奖（2018年）和诺贝尔物理学奖（2024年）。

**（2）杨立昆**（1960-）

![](https://cdn.beekka.com/blogimg/asset/202505/bg2025051808.webp)

杨·安德烈·勒坎（Yann André Le Cun，中文名杨立昆）是法国人。上个世纪80年代，他是多伦多大学博士后。

这一时期，辛顿也来到了多伦多大学任教，担任他的指导教师。

所以，杨立昆是辛顿的大弟子，继承和发展了辛顿的算法。他的主要成就是，为神经网络引入了卷积算法，并且做出了第一个有实际用途的神经网络。

1990年代，他用神经网络识别银行支票的手写数字，成功获得了企业的采用。

![](https://cdn.beekka.com/blogimg/asset/202505/bg2025051809.webp)

但是，这个应用也暴露了卷积神经网络的弱点：它需要大量样本的训练，耗费巨大的算力。银行支票只需要识别10个阿拉伯数字，如果是更多样化的场景，当时的计算能力难以做到。

学术界因此认为，卷积神经网络只适用特定的、计算量较小的场景，不具备推广的价值。这导致这种算法，以及辛顿和杨立昆，被冷落了二十年。

这二十年，杨立昆一直混迹于企业实验室和大学教研室。等到世界重新认识卷积神经网络，他在2018年与辛顿一起获得了图灵奖，现在是 Meta 公司的副总裁和 AI 首席科学家。

**（3）亚历克斯·克里泽夫斯基**（Alex Krizhevsky，1986-）

![](https://cdn.beekka.com/blogimg/asset/202505/bg2025051810.webp)

亚历克斯·克里泽夫斯基是乌克兰人，少年时随家人移民到加拿大。2007年，他进入多伦多大学，成为辛顿的博士生。

这时距离杨立昆提出卷积神经网络，已经过去快20年了。辛顿始终没忘记它，他鼓励亚历克斯和稍后要提到的伊尔亚·苏茨克维，使用这种算法，去挑战李飞飞的 ImageNet。

亚历克斯就写了一个程序，用 ImageNet 的1500万图片，来训练他的卷积神经网络。但是，计算量太大了，他的个人计算机根本跑不动，他就买了两块 Nvidia 显卡，每天24小时一刻不停地运算。

事实证明，卷积神经网络+大训练集+高速计算硬件，超过了其他一切已知的算法。最终，他们的三人团队以巨大优势，夺得了2012年第三届 ImageNet 算法比赛冠军。

这件事轰动了业界，各大互联网公司纷纷邀请辛顿和他的学生加入。百度也伸出橄榄枝，邀请辛顿担任首席科学家，但是最后输给了谷歌。

2013年，谷歌以4400万美元收购了辛顿成立的空壳公司，将辛顿、亚历克斯、伊尔亚三个人一起招入麾下。

2017年，亚历克斯辞职，现在一家创业公司研究 AI 技术。

**（4）伊尔亚·苏茨克维**（Ilya Sutskever， 1986-）

![](https://cdn.beekka.com/blogimg/asset/202505/bg2025051811.webp)

伊尔亚·苏茨克维出生于前苏联，后去了以色列，然后来到加拿大。他是亚历克斯·克里泽夫斯基在多伦多大学的博士同学，也是辛顿的博士生。

他与亚历克斯组成团队，共同赢得了2012年的 ImageNet 算法比赛。辛顿作为指导老师，也是团队一员。

他在2013年跟随辛顿加入谷歌，2015年辞职，成为 OpenAI 的联合创始人和首席科学家，后来是 ChatGPT 的主要作者之一。2024年，他离开 OpenAI，现在创立了自己的 AI 公司。

**（5）安德烈·卡帕斯**（Andrej Karpathy，1986-）

![](https://cdn.beekka.com/blogimg/asset/202505/bg2025051812.webp)

安德烈·卡帕斯出生于斯洛伐克，15岁随家人来到加拿大，在多伦多大学读完了本科。

他跟伊尔亚·苏茨克维很可能大学里就认识。但是，他没在多伦多大学读博士，而是去了斯坦福大学，指导老师就是李飞飞。

他的方向也是卷积神经网络，博士期间开设了斯坦福大学第一门深度学习课程，担任主讲。

2015年，他跟随伊尔亚一起加入 OpenAI，成为主要研究人员。

2017年，他离开 OpenAI，去了特斯拉，担任特斯拉 AI 总监，2022年离职。

**（6) 总结**

上面五人是神经网络算法的主要创立者和推动者。没有他们，就不会有今天的 AI 大模型。

但是，单单靠他们的算法，AI 不会成功。因为算法需要大量的数据进行训练，而训练需要高速计算的硬件。这三者缺一不可。

只有等到2012年，才万事俱备。神经网络算法 + 李飞飞的 ImageNet 训练集 + Nvidia 高速显卡，同时出现了。

历史于是翻开了新的一页，AI 时代正式来临。

## 科技动态

（1）一家深圳公司推出了，可能最炫酷的[树莓派机箱](https://liliputing.com/pironman-5-max-turns-a-raspberry-pi-5-into-a-mini-tower-with-a-transparent-case-rgb-lighting-and-dual-nvme-ssd-support/)。

![](https://cdn.beekka.com/blogimg/asset/202505/bg2025051009.webp)

它自带机箱显示屏、RGB 灯光、风扇、NVMe SSD 扩展板，很适合用作 NAS 和 AI 边缘计算。

![](https://cdn.beekka.com/blogimg/asset/202505/bg2025051010.webp)

（2）芬兰尝试在[驯鹿的鹿角](https://www.smithsonianmag.com/smart-news/avoid-deer-strikes-finland-painting-deer-antlers-reflective-paint-180949792/)，涂上荧光粉。

![](https://cdn.beekka.com/blogimg/asset/202504/bg2025042409.webp)

这是为了方便司机在夜间看到驯鹿，目前每年在芬兰公路上被撞死的驯鹿有4000头。

（3）在线会议软件 Google Meet，推出[实时语音翻译](https://www.engadget.com/apps/google-brings-live-translation-to-meet-starting-with-spanish-174549788.html)，首先提供西班牙语版本。

![](https://cdn.beekka.com/blogimg/asset/202505/bg2025052203.webp)

在线会议时，对方说西班牙语，你听到的却是英语，而且声音、语调和情感‌都不变。

（4）意大利开源硬件公司 Arduino，研发出了[可降解 PCB](https://blog.arduino.cc/2025/04/22/arduino-is-at-work-to-make-bio-based-pcbs/)（电路板），减轻对环境的污染。

![](https://cdn.beekka.com/blogimg/asset/202505/bg2025051201.webp)

这种可降解电路板，将电路印刷在植物亚麻材料上，而不是传统的玻璃纤维和树脂。

不过，电路板上的铜无法降解，需要在丢弃电路板之前先回收。

（5）一家美国创业公司，准备发射卫星，将 [AI 机房建在太空](https://www.ycombinator.com/companies/starcloud)。

![](https://cdn.beekka.com/blogimg/asset/202505/bg2025051403.webp)

它依靠24小时的太阳能供电，也不用担心散热。

该公司希望通过这种方法，解决 AI 服务器的耗电和冷却问题。

## 文章

1、[手机的 Linux 桌面环境](https://holdtherobot.com/blog/2025/05/11/linux-on-android-with-ar-glasses/)（英文）

作者出门不带笔记本，只带手机，再配上蓝牙键盘和 AR 眼镜。

![](https://cdn.beekka.com/blogimg/asset/202505/bg2025051903.webp)

他的安卓手机在获取 root 权限后，通过 chroot 安装了 Linux 发行版，从而可以运行桌面环境。

![](https://cdn.beekka.com/blogimg/asset/202505/bg2025051904.webp)

2、[AI 应用的核心逻辑](https://sketch.dev/blog/agent-loop)（英文）

![](https://cdn.beekka.com/blogimg/asset/202505/bg2025051905.webp)

作者提出，AI 应用（AI agent）的核心逻辑只需要9行代码。

3、[浏览器默认屏蔽的端口](https://www.keenformatics.com/ports-that-are-blocked-by-browsers)（英文）

![](https://cdn.beekka.com/blogimg/asset/202505/bg2025051906.webp)

你可能不知道，浏览器无法打开下面的网址`localhost:6000`，原因是6000是浏览器默认屏蔽的端口。

4、[推荐 RustDesk 远程桌面](https://www.xda-developers.com/i-tried-every-method-to-remotely-access-my-pc-this-method-is-the-best/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202504/bg2025040506.webp)

Mac 电脑访问 Windows 电脑，一种方法就是使用远程桌面，作者推荐远程桌面工具 RustDesk。

5、[HTML `<dialog>` 的 CSS 技巧](https://cassidoo.co/post/css-for-dialogs/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202501/bg2025011910.webp)

HTML 有一个原生的弹窗元素`<dialog>`，本文介绍两个配套使用的 CSS 技巧。

6、[Git 配置详解](https://blog.gitbutler.com/how-git-core-devs-configure-git/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202502/bg2025022504.webp)

本文详细解释 Git 配置命令 git config 的几个最常见的设置。

## 工具

1、[Pyrefly](https://github.com/facebook/pyrefly/)

![](https://cdn.beekka.com/blogimg/asset/202505/bg2025051801.webp)

Meta 公司发布的 Python 代码的类型检查器，参见[介绍文章](https://engineering.fb.com/2025/05/15/developer-tools/introducing-pyrefly-a-new-type-checker-and-ide-experience-for-python/)。

2、[Zen Browser](https://github.com/zen-browser/desktop)

![](https://cdn.beekka.com/blogimg/asset/202505/bg2025052202.webp)

新发布的一个开源浏览器，基于 Firefox，国外评价非常高，使用体验好，参见[介绍文章](https://www.xda-developers.com/zen-browser-better-brave-arc-chrome/)。

3、[xtool](https://github.com/xtool-org/xtool)

![](https://cdn.beekka.com/blogimg/asset/202505/bg2025051701.webp)

Xcode 的替代品，在 Linux/Win/macOS 开发 iOS 应用。

4、[Zero Convert](https://nextbconvert.com/)

![](https://cdn.beekka.com/blogimg/asset/202505/bg2025051703.webp)

在线批量转换文件，基于 WebAssembly 技术，完全本地完成，还可以编辑图片。（[@xiaoshangmin](https://github.com/ruanyf/weekly/issues/6864) 投稿）

5、[耗子面板](https://github.com/tnb-labs/panel)

![](https://cdn.beekka.com/blogimg/asset/202505/bg2025051804.webp)

Go 语言开发的服务器管理面板。（[@devhaozi](https://github.com/ruanyf/weekly/issues/6881) 投稿）

6、[Goravel](https://github.com/goravel/goravel)

![](https://cdn.beekka.com/blogimg/asset/202505/bg2025051805.webp)

Go 语言的 Web 开发框架，与 PHP 的 Laravel 框架保持一致，方便快速上手。（[@devhaozi](https://github.com/ruanyf/weekly/issues/6882) 投稿）

7、[OpenSpeedy](https://github.com/game1024/OpenSpeedy)

开源的游戏变速工具，通过调整 Windows 系统时间函数来实现游戏速度变化。（[@game1024](https://github.com/ruanyf/weekly/issues/6884) 投稿）

8、[SimonAKing-Gallery](https://github.com/SimonAKing/AnimatedGallery)

![](https://cdn.beekka.com/blogimg/asset/202505/bg2025051901.webp)

后端的 JS 相册应用，瀑布流展示图片，指定图片目录，直接运行即可。（[@SimonAKing](https://github.com/ruanyf/weekly/issues/6886) 投稿）

9、[Jwno](https://github.com/agent-kilo/jwno)

![](https://cdn.beekka.com/blogimg/asset/202505/bg2025052101.webp)

网友开源的 Windows 10/11 平铺窗口管理器，键盘驱动。（[@agent-kilo](https://github.com/ruanyf/weekly/issues/6891) 投稿）

10、[星河小程序](https://github.com/didi/dimina)

![](https://cdn.beekka.com/blogimg/asset/202505/bg2025052204.webp)

滴滴公司开源的跨平台开发框架，支持将小程序打包成为安卓、iOS、鸿蒙和 Web 四个平台的原生 App。（[@dos1in](https://github.com/ruanyf/weekly/issues/6912) 投稿）

## AI 相关

1、[aTrain](https://github.com/JuergenFleiss/aTrain)

![](https://cdn.beekka.com/blogimg/asset/202505/bg2025051802.webp)

一个跨平台、图形界面的自动语音识别工具，基于 Whisper 模型，支持识别50多种语言，参见[介绍文章](https://www.xda-developers.com/i-switched-from-otter-to-this-self-hosted-audio-transcription-app/)。

2、[AI Image Editor](https://aiimageeditor.me/)

![](https://cdn.beekka.com/blogimg/asset/202505/bg2025051803.webp)

在线的免费图像处理工具，提供多种 AI 功能，比如图片增强、去除水印、风格转换等十几种。（[@worminone](https://github.com/ruanyf/weekly/issues/6883) 投稿）

## 资源

1、[万物博物馆](https://mayeclair.itch.io/museum-of-all-things)

一个跨平台的桌面软件，将维基百科变成一个虚拟博物馆。

![](https://cdn.beekka.com/blogimg/asset/202503/bg2025031008.webp)

每件展品与维基百科的一篇文章相对应，墙上的画框就是文章图片，讲解牌就是文章内容。

![](https://cdn.beekka.com/blogimg/asset/202503/bg2025031009.webp)

走廊则根据文章的链接通向其他展厅，有几乎无限的展厅可以参观。

![](https://cdn.beekka.com/blogimg/asset/202503/bg2025031010.webp)

## 图片

1、[《星球大战》的机器人](https://www.facebook.com/groups/1740302472949408/permalink/3918177945161839)

《星球大战》的第一部电影，拍摄于1976年，里面有一个机器人 R2-D2，会四处走动，做各种动作，还会说话。

![](https://cdn.beekka.com/blogimg/asset/202505/bg2025052106.webp)

其实，它根本没那么高科技，拍摄的时候，就是里面藏了一个真人演员。

![](https://cdn.beekka.com/blogimg/asset/202505/bg2025052107.webp)

2、[冰为什么体积大？](https://nautil.us/five-things-we-still-dont-know-about-water-3383/)

水变成冰以后，体积会增大10%，密度因此小于水，使得冰可以浮在水面上。

那么，冰的体积为什么会增大呢？

答案是冰的分子结构，跟水的分子结构不一样。

![](https://cdn.beekka.com/blogimg/asset/202203/bg2022031408.webp)

上图左侧是液态水的分子结构，右侧是冰的分子结构。其中，白色节点为氢原子，红色节点为氧原子。

可以看到，液态水是紧密聚合的网络结构，冰则是中空的网络结构。也就是说，冰的分子结构不是那么密合，所以体积就变大了。

## 文摘

1、[Slack 公司的 URL](https://blog.jim-nielsen.com/2023/examples-of-great-urls/)

Slack 是一家即时通信的软件公司。它的官网有一个“公司介绍”的页面，通常来说该页面的 URL 会是`slack.com/about`，但是 Slack 没有采用这种做法。

它将这个页面命名为`is`，并分拆成若干个子页面。

所以，“公司介绍”页面的 URL 是`slack.com/is`。

子页面的 URL 如下。

> - slack.com/is/team-communication
> - slack.com/is/everything-in-one-place
> - slack.com/is/wherever-you-are

这样的好处是单单看 URL，就知道页面想要传递的信息，URL 本身就是对公司的一种宣传。

这种 is 的巧妙做法，后来被广泛借鉴。碰巧的是，`is`也正好是一个顶级域名，代表冰岛（iceland）。很多名人就申请了 is 域名，作为个人主页。

比如，艺术家杰西卡·希斯切（Jessica Hische）的个人网站，域名就是`jessicahische.is`，她介绍自己的页面 URL 就都是`jessicahische.is/xxx`的形式。

## 言论

1、

我们很快会跟大家分享一个低调的研究成果。我们会给它起一个比 chatGPT 更好的名字，以防它流行起来。

-- [Sam Altman](https://x.com/sama/status/1923104596622246252)，OpenAI 的 CEO

2、

加尔定律经常被引用：“一个有效的复杂系统，总是从一个有效的简单系统进化而来。”

但是，它的推论很少被引用：“一个从零开始设计的复杂系统永远不会有效，你必须从一个可以运行的简单系统开始。”

-- [Stack Staves](https://www.stackstaves.net/post/2023-12-07-theres-more-to-that/)

3、

宇宙有两种可能：要么我们是孤独的，要么我们并不孤独。这两种可能性都同样令人恐惧。

-- [阿瑟·克拉克](https://www.planetary.org/articles/the-fermi-paradox-where-are-all-the-aliens)，英国著名科幻小说家

4、

太阳绕银河系公转一圈需要2.3亿年，上一圈的时候，地球的主宰还是恐龙。

-- [Reddit 网友](https://www.reddit.com/r/Paleontology/comments/18wqvba/it_takes_the_sun_230_million_years_to_orbit_once/)

5、

我关注了一些教育工作者，他们都报告了同样的现象：他们的学生什么事情都用 ChatGPT，结果什么也没学到。

最终可能会出现这样一代人，自己的智力很低下，完全依赖于他们不理解的技术，一旦技术崩溃，他们永远无法从头开始重建。

-- [尼尔·斯蒂芬森](https://simonwillison.net/2025/May/18/neal-stephenson/#atom-everything)（Neal Stephenson），美国科幻小说家，“元宇宙”一词的创造者

## 往年回顾

[创业虽然好，不敢推荐了](https://www.ruanyifeng.com/blog/2024/05/weekly-issue-302.html)（#302）

[互联网创业变难了](https://www.ruanyifeng.com/blog/2023/04/weekly-issue-252.html)（#252）

[三个有启发的学习方法](https://www.ruanyifeng.com/blog/2022/04/weekly-issue-202.html)（#202）

[从北大到技校](https://www.ruanyifeng.com/blog/2021/04/weekly-issue-152.html)（#152）

（完）

