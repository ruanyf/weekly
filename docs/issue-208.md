# 科技爱好者周刊（第 208 期）：晋升制度的问题

这里记录每周值得分享的科技内容，周五发布。（**[通知] 下周五是端午节，周刊暂停。**）

本杂志开源（GitHub: [ruanyf/weekly](https://github.com/ruanyf/weekly)），欢迎提交 issue，投稿或推荐科技内容。

周刊讨论区的帖子[《谁在招人？》](https://github.com/ruanyf/weekly/issues/2356)，提供大量程序员就业信息，欢迎访问或发布工作/实习岗位。

## 封面图

![](https://cdn.beekka.com/blogimg/asset/202205/bg2022050920.webp)

今年四月，石家庄的一对摄影爱好者夫妻发现，一只白腹鹞左腿中箭，正在艰难地飞行。他们拨打110报警，动物救助站的工作人员经过一个多礼拜的尝试，终于抓住这只鸟进行治疗。（[via](https://static.cdsb.com/micropub/Articles/202204/5d2f9fe9cf8a9a3b9a45943767d30ab1.html)）

## 本周话题：晋升制度的问题

我最近读到[一篇文章](https://www.warp.dev/blog/problems-with-promotion-oriented-cultures)，作者是谷歌表格（Google Sheets）的前主管 Zach Lloyd，现在已经离职创业了。他说自己烦透了谷歌的晋升制度。

![](https://cdn.beekka.com/blogimg/asset/202205/bg2022052405.jpg)

我读完发现，谷歌的晋升制度跟国内大厂一模一样，员工行为也是晋升导向，产生的问题也是相似的，所以这篇文章读起来根本不像在说国外的事情。

![](https://cdn.beekka.com/blogimg/asset/202205/bg2022052210.webp)

现在正好是晋升季，很多人忙了一年，等的就是这一天。互联网大厂的财年三月底结束，然后主管提名晋升人选，四五月进行晋升答辩。只要通过了，你的职级就会上调，工资、期权、职务、地位都会随之增加。<ins>如果你连续好几年没有获得晋升，就是一个危险的信号</ins>，表明公司并不肯定你这几年的工作。

所以毫不奇怪，**大厂员工的行为都是晋升导向**。做任何事情之前，都会首先考虑是否有利于晋升。即使你真的非常关心其他事情，也不得不权衡它们对晋升的影响。

![](https://cdn.beekka.com/blogimg/asset/202205/bg2022052211.webp)

Zach Lloyd 说，这样的制度设计会导致4个严重的问题。我觉得分析得非常好，下面跟大家分享。

（1）晋升导向的最大问题是，**晋升标准与公司利益并不完全一致**，员工追求晋升和短期绩效，可能不会导致公司利益最大化，甚至会伤害公司的长期利益。

让我们看一个例子。假定有两个程序员，甲专注开发新产品新功能，乙专注维护老产品（修补 bug、提高性能、优化算法、升级版本、撰写文档、充当客服等等），请问谁会得到晋升？

通常情况是，甲会得到晋升，乙很难晋升。因为维护老产品一般不产生绩效，有巨大的晋升劣势。这有两个原因，一是老产品对业务的促进作用，在前期上线时已经被考虑在内了，后续的维护只是兑现当初的预期，维护得再努力也很难超出预期；二是难以计量维护者的贡献，老产品取得成功，到底是因为设计和开发得好，还是因为维护得好？

因此，<ins>晋升导向鼓励程序员重视新产品新功能，轻视老产品的维护。</ins>这在现实中屡见不鲜，大厂的软件喜欢追求大而全，喜欢造轮子，创造大同小异的竞品，而老产品缺乏维护，原因就在这里。没有什么比自己的代码在关键业务落地，更重要了，这样几乎肯定会得到晋升，其他都是次要考虑。

（2）**晋升导向强化了等级制**，在公司中引入过多的层级。晋升文化越强的公司，必然伴随复杂的内部组织架构，各团队之间的协调也会越困难。

（3）**晋升导向人为制造了一个气氛很可怕的“晋升季”。** 为了得到晋升提名，容易产生内部矛盾，甚至勾心斗角。获得提名的人要浪费大量时间，制作 PPT，准备晋升答辩，这会降低生产力，增加公司成本。

（4）**晋升导向造成一种不良的公司文化。** 晋升至上使得那些真正关心产品、关心代码健康的工程师士气低落，有时不得不在“对用户有利” vs “对晋升有利”之间做出痛苦的选择。

![](https://cdn.beekka.com/blogimg/asset/202205/bg2022052406.jpg)

上面就是晋升导向的四个缺点，那么这是否意味着，它就是一个很糟糕的制度呢？

Zach Lloyd 认为，也不能这么说。晋升导向的优点是，对员工会产生巨大的考核和激励，其他制度的效果恐怕都不如它。

因此他建议，最好采取一些措施，让员工的个人利益与公司利益尽量一致，比如强调用户优先，再比如聘请不是一味追求晋升的工程师。

我认为，这些措施都不现实，唯一比较可行的是，当公司大到一定程度以后，就把一些部门和团队拆分出去，成为独立的创业公司，而且最好这些创业公司之间有竞争关系。对于小公司来说，员工都明白，只有公司取得成功，个人才能取得成功，公司利益和个人利益是一致的。他们就会更关心公司会不会倒闭，而不是自己的晋升。

## 工具软件 FlowUs 体验报告

上周，一款今年刚发布的生产力软件 [FlowUs](https://flowus.cn/login?code=FLOWUS&promotionChannel=WX_RYF_01)（中文名“息流”）找我试用，希望通过我介绍给周刊读者。试用以后，我觉得这个产品体验不错，有好几个亮点，值得介绍给大家。

![](https://cdn.beekka.com/blogimg/asset/202205/bg2022051502.webp)

**FlowUs 提供三大功能：文档+表格+网盘。** 通过“块编辑器”，它们可以作为内容块（block）自由组合，满足不同场景：写笔记、做主页、管理项目、共享文件、多人协作……

看到这里，有的朋友会说，这跟国外软件 Notion 很像。确实如此，FlowUs 的目标是本土化，添加了一些本土功能，更适合国内用户的使用习惯。另外，它的服务器都在国内，访问速度非常快，而且支持多端即时同步，任何改动都可以在其他客户端马上看到。

它目前支持50多种块，国内常用的服务（B站、腾讯视频、网易云音乐等）都有。编辑器里面，按下斜杠键（`/`），可以查看列表。

![](https://cdn.beekka.com/blogimg/asset/202205/bg2022051620.webp)

因为是块编辑器，排版很简单，只要拖拽就能实现各种布局。再加上 FlowUs 内置了80多种模板，套用一下就能做出各种页面：读书笔记、个人（或团队）主页、项目管理、会议纪要、招聘管理等等。

如果不写文档，只用 [FlowUs](https://flowus.cn/login?code=FLOWUS&promotionChannel=WX_RYF_01) 管理数据也可以。它的表格其实是一个轻量级的页面数据库。目前提供七种数据视图，基本满足了常见需求：表格、看板、日历、时间轴、目录和画廊等。

![](https://cdn.beekka.com/blogimg/asset/202205/bg2022052614.webp)

![](https://cdn.beekka.com/blogimg/asset/202205/bg2022051903.webp)

最后，它的网盘功能很强，完全可以只当作网盘使用：上传文件不限制大小，也不限速，支持 Office 文件和视频的预览。免费帐户的空间是 2GB，年费99元的专业版则是不限制容量。

![](https://cdn.beekka.com/blogimg/asset/202205/bg2022052613.webp)

上面是官方的网盘模板页，你完全可以把网盘块插入文档或其他模板，做出各种下载页。

![](https://cdn.beekka.com/blogimg/asset/202205/bg2022051816.webp)

总的来说，我觉得它的完成度比较高，确实能够满足很多使用场景。Web 和手机 App 都齐全，个人和小团队都可以使用。

目前推广的力度很大，免费账户没有任何限制（除了网盘空间）。大家可以关注 FlowUs 公众号，加入他们的用户反馈群，官方时不时会提供一些优惠，升级到专业版。

![](https://cdn.beekka.com/blogimg/asset/202205/bg2022051814.webp)

感兴趣的朋友，欢迎扫描上方二维码，或者访问[这个链接](https://flowus.cn/login?code=FLOWUS&promotionChannel=WX_RYF_01)，前往注册使用。FlowUs 特别为周刊读者提供福利，<ins>本期的微信公众号留言点赞数前10位的同学，获赠无限空间的专业版一年。</ins>

## 科技动态

1、[跑车内置无人机](https://www.theverge.com/2022/3/2/22956775/polestar-o2-electric-roadster-concept-drone)

![](https://cdn.beekka.com/blogimg/asset/202203/bg2022030510.webp)

沃尔沃与吉利合资的 Polestar 公司，推出了一款全新的电动跑车。这部车的一个特别之处，在于集成了一部无人机。

当它行驶时，只要按下按钮，车身后方就会打开一个口子，飞出一架无人机，跟拍这辆车。拍摄完毕，又会飞回车内。

![](https://cdn.beekka.com/blogimg/asset/202203/bg2022030511.webp)

![](https://cdn.beekka.com/blogimg/asset/202203/bg2022030512.webp)

Polestar 公司解释之所以要内置一部无人机，是为了方便车主开车时拍摄自己。

![](https://cdn.beekka.com/blogimg/asset/202203/bg2022030513.webp)

2、[世界最高输电塔](https://j.eastday.com/p/1652785311033170)

![](https://cdn.beekka.com/blogimg/asset/202205/bg2022051810.webp)

世界最高输电塔最近在江苏完工，开始架设电线。铁塔一共有两座，跨越长江，一座在长江南岸的无锡，另一座在北岸的泰州，高度均为385米，比埃菲尔铁塔还高出61米。

![](https://cdn.beekka.com/blogimg/asset/202205/bg2022051811.webp)

这对输电塔之所以要造得这么高，原因是高压电线就在长江上方，下方必须留出足够高度，供大型船只通航。

![](https://cdn.beekka.com/blogimg/asset/202205/bg2022051812.webp)

![](https://cdn.beekka.com/blogimg/asset/202205/bg2022051813.webp)

3、[5G 手机壳](https://www.ithome.com/0/618/805.htm)

![](https://cdn.beekka.com/blogimg/asset/202205/bg2022052307.webp)

最近，市场上出现了一种 5G 手机壳，售价 799 元
。只要套上这种壳，手机就具备双模 5G 通信能力。它明显是为华为而发明的，华为被制裁无法拿到 5G 芯片，只能生产 4G 手机。

这种手机壳重量约为 52g，有自己的 CPU，还需要手机主卡开通 eSIM 服务。

![](https://cdn.beekka.com/blogimg/asset/202205/bg2022052308.webp)

4、[未来停车楼](https://www.163.com/dy/article/H5QOEJPF0514ETGI.html)

![](https://cdn.beekka.com/blogimg/asset/202205/bg2022052309.webp)

![](https://cdn.beekka.com/blogimg/asset/202205/bg2022052310.webp)

杭州市的一座造型奇特的“未来停车楼”即将完工。这个停车楼做成了一个地面公园，大屋顶下方有10个塔楼，里面可以停车。屋顶上方将做成公共绿地。

![](https://cdn.beekka.com/blogimg/asset/202205/bg2022052314.webp)

![](https://cdn.beekka.com/blogimg/asset/202205/bg2022052313.webp)

塔楼在地面有4层，地下有2层。车辆一律都从地下进出，停在入口处，由机器人将车辆移入和移出塔楼。

![](https://cdn.beekka.com/blogimg/asset/202205/bg2022052316.webp)

![](https://cdn.beekka.com/blogimg/asset/202205/bg2022052317.webp)

5、[防盗自行车](https://robbreport.com/motors/motorcycles/yerka-v3-theft-proof-bike-integrated-lock-1234665378/)

![](https://cdn.beekka.com/blogimg/asset/202203/bg2022030802.webp)

疫情期间，自行车的需求猛增。国外很多城市没有共享自行车，导致自行车的失窃率很高。有的窃贼使用液压剪，专剪自行车锁。针对这种情况，一家美国公司发明了新一代防盗自行车。

![](https://cdn.beekka.com/blogimg/asset/202203/bg2022030803.webp)

这种自行车的车身上半截，可以折下来当作锁。要是把锁剪断，车身也就坏了，整辆车报废。不过，这种车很贵，一辆标价799美元，普通自行车可以买好几辆了。

![](https://cdn.beekka.com/blogimg/asset/202203/bg2022030804.webp)

## 文章

1、[他用50张 1080Ti 对抗癌症](https://www.toutiao.com/article/7094940100450107935/)（中文）

![](https://cdn.beekka.com/blogimg/asset/202205/bg2022052108.webp)

4年前，一个程序员发帖称，他训练了一个模型，可以从 X 光片识别早期乳腺癌。最近，他又发帖了，使用人工智能治疗脑瘤。

2、[寻找“树王”辛达布](https://mp.weixin.qq.com/s/UHAnsrvzu-Hc9orfICwv3Q)（中文）

![](https://cdn.beekka.com/blogimg/asset/202205/bg2022052109.webp)

本文讲述研究人员如何在墨脱县寻找和测量中国大陆最高的树。

3、[GitHub Markdown 支持数学公式渲染](https://github.blog/changelog/2022-05-19-render-mathematical-expressions-in-markdown/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202205/bg2022052105.webp)

GitHub 宣布，支持 Markdown 里面的 LaTeX 数学公式渲染，渲染引擎是 MathJax。

4、[网络迷踪初探](https://sspai.com/post/73193)（中文）

![](https://cdn.beekka.com/blogimg/asset/202205/bg2022051703.webp)

本文介绍几个真实案例，从网上照片分析出准确的拍摄地点。

5、[世界最大核聚变反应堆的内部照片](https://www.sciencefocus.com/future-technology/nuclear-fusion-inside-the-construction-of-the-worlds-largest-tokamak/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202203/bg2022032901.webp)

所有核反应堆目前都是核裂变，但是真正有前途的是核聚变反应堆。32个国家正在合作，在法国建造世界最大的核聚变实验堆，一个摄影师获准进入施工现场，拍摄了照片。

6、[第三方登陆钓鱼](https://mrd0x.com/browser-in-the-browser-phishing-attack/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202203/bg2022031913.webp)

本文提出一种钓鱼方式，很容易上当。钓鱼网站提供第三方登陆选项，但是点击后跳出一个假冒的窗口，诱骗用户输入密码。

7、[如何用`<dialog>`元素替换网页对话框](https://css-tricks.com/replace-javascript-dialogs-html-dialog-element/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202203/bg2022032201.webp)

本文用浏览器原生的`<dialog>`元素替换掉`alert`、`confirm`、`prompt`对话框，给出详细的代码实现。

8、[失败的谷歌 I/O 2022大会](https://arstechnica.com/gadgets/2022/05/googles-past-failures-were-on-full-display-at-i-o-2022/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202205/bg2022052402.webp)

本文认为刚刚举办的谷歌 I/O 2022大会完全失败，根本没有拿出让大家兴奋的新产品，而是把那些已经失败好几年的产品重新捡起来：安卓平板、谷歌钱包、谷歌眼镜、安卓手表…… 作者认为，谷歌这家公司似乎迷惘了。它迫切需要告诉大家，它的战略方向是什么。

## 工具

1、[Yaade](https://github.com/EsperoTech/yaade)

![](https://cdn.beekka.com/blogimg/asset/220204/bg2022040304.webp)

一个开源的 API 开发环境，相当于开源的 Postman。

2、[Regolith](https://regolith-linux.org/)

![](https://cdn.beekka.com/blogimg/asset/220204/bg2022040406.webp)

一个新的 Linux 发行版，特点是帮你做好了桌面环境和窗口管理器，基于 Ubuntu、GNOME 和 i3。

3、[中文搜索结果黑名单](https://github.com/cobaltdisco/Google-Chinese-Results-Blocklist)

uBlacklist 插件的网址黑名单，用来过滤谷歌、百度搜索结果里面的中文垃圾站点。（[@52fhy](https://github.com/ruanyf/weekly/issues/2409) 投稿）

4、[NocoBase](https://www.nocobase.com/)

![](https://cdn.beekka.com/blogimg/asset/202205/bg2022052507.webp)

一款开源的无代码平台，无需编程，用它搭建自己的协作平台、管理系统，只需要几分钟时间。（[@zhouyanliang](https://github.com/ruanyf/weekly/issues/2416) 投稿）

5、[StickyNote](http://cppdebug.com/archives/286)

![](https://cdn.beekka.com/blogimg/asset/202205/bg2022052508.webp)

Windows 的便利贴小工具。根据 Win10 自带的便签改进而来，增加了很多功能。（[@KeyboardMan1996](https://github.com/ruanyf/weekly/issues/2417) 投稿）

6、[pnpm](https://pnpm.io/zh/)

![](https://cdn.beekka.com/blogimg/asset/220204/bg2022040604.webp)

一个老牌的 node.js 包管理器，支持 npm 的所有功能，用来替代 npm。它的模块是全局存储，每个项目内部使用硬链接，所以很省空间，而且安装速度快。

7、[CRX viewer](https://github.com/Rob--W/crxviewer)

![](https://cdn.beekka.com/blogimg/asset/220204/bg2022040614.webp)

一个浏览器插件，只要访问 Chrome 网上商店的某个插件主页，就会显示插件源码的地址。它还有[在线版](https://robwu.nl/crxviewer/)。

8、[Gephi](https://gephi.org/)

![](https://cdn.beekka.com/blogimg/asset/220204/bg2022040704.webp)

一个跨平台的桌面软件，用来生成各种可视化图形效果，自称是“用于图表的 Photoshop”。

9、[Rust Coreutils](https://github.com/uutils/coreutils)

Linux 系统的一些核心工具（比如`ls`、`cp`等）是由 GNU Coreutils 这个包提供的，都是使用 C 语言写的。这个项目使用 Rust 语言逐一重写这些工具，将 GNU Coreutils 替换为 Rust Coreutils。

## 活动

1、[掘金会员](https://juejin.cn/vip-presale?utm_source=ruanyifeng&utm_medium=OM&utm_campaign=vip_presale_2022)

![](https://cdn.beekka.com/blogimg/asset/202205/bg2022052502.jpg)

字节旗下的稀土掘金社区推出了“掘金会员”，只要加入会员，就可以解锁网站上面90%的课程和小册，尤其是最新的前端开发内容。

现在有“1元抵100”的优惠，只要1元就可以抵扣100元的会员费，介绍给有学习需求的朋友。

## 资源

**1、K8s/Docker/DevOps 面试真题**

![](https://cdn.beekka.com/blogimg/asset/202205/bg2022052612.webp)

K8s 和 DevOps 的招聘岗位现在非常多，工作前景和收入都很不错。知名工程师学习平台“极客时间”整理了一套《云原生高频面试题集》，一共 80 页，<ins>扫上方的二维码可以免费领</ins>。

这套资料包含了 198 道 K8s、Docker、DevOps 大厂真题，还附加答案详解，以及云原生知识梳理等内容，有需要的可以看一看。

2、[Webcamtaxi](https://www.webcamtaxi.com/en/)

![](https://cdn.beekka.com/blogimg/asset/202203/bg2022033115.webp)

Youtube 上面有很多24小时的摄像头直播频道，可以看到世界各地的实时状况。该网站就是收集这些频道，按照地区和内容分类。

3、[Side Project 指南](https://sideproject.guide/)

![](https://cdn.beekka.com/blogimg/asset/202205/bg2022052503.webp)

原创的小册子，记录作者对做一些业余小项目的思考和经验。（[@timqian](https://github.com/ruanyf/weekly/issues/2405) 投稿）

4、[Jest 实践指南](http://github.yanhaixiang.com/jest-tutorial/)

![](https://cdn.beekka.com/blogimg/asset/202205/bg2022052504.webp)

原创教程，帮助学习者使用 Jest 框架完成前端测试。（[@haixiangyan](https://github.com/ruanyf/weekly/issues/2407) 投稿）

5、[Java Notes for Professionals book](https://books.goalkicker.com/JavaBook/)

![](https://cdn.beekka.com/blogimg/asset/202205/bg2022052505.webp)

一本免费的 Java 学习材料，将 Stack Overflow 上面 Java 的常见解答，分门别类整理成了一本书。（[@52fhy](https://github.com/ruanyf/weekly/issues/2410) 投稿）

6、[英特尔虚拟博物馆](https://virtualmuseum.intel.com/)

![](https://cdn.beekka.com/blogimg/asset/202205/bg2022052506.webp)

官方网站，3D 虚拟参观英特尔公司的博物馆。（[@Codeniu](https://github.com/ruanyf/weekly/issues/2411) 投稿）

## 图片

1、[上个世纪的软件界面](https://twitter.com/Nexuist/status/1486466541491261443)

很多年轻读者可能没感受过，上个世纪的软件界面是什么样子。下面这张图片可以帮助你感受一下。

![](https://cdn.beekka.com/blogimg/asset/202202/bg2022020803.webp)

虽然这是极端的例子，但是当时大部分软件确实都是这种风格。过去20年，软件的用户体验真的有翻天覆地的变化。

2、**苹果的金融服务**

苹果的金融服务，目前有四个品牌。

- [Apple Wallet](https://www.apple.com/wallet/)

![](https://cdn.beekka.com/blogimg/asset/202205/bg2022052609.webp)

- [Apple Pay](https://www.apple.com/apple-pay/)

![](https://cdn.beekka.com/blogimg/asset/202205/bg2022052608.webp)

- [Apple Card](https://www.apple.com/apple-card/)

![](https://cdn.beekka.com/blogimg/asset/202205/bg2022052607.webp)

- [Apple Cash](https://www.apple.com/apple-cash/)

![](https://cdn.beekka.com/blogimg/asset/202205/bg2022052606.webp)

这四个服务都做同一件事情，就是支付。这让人不理解，为什么要把相关的功能拆成四个品牌，统一成一个品牌的四个功能不好吗？

这要费多少口舌向用户解释它们的区别，不同场合要用哪一种服务……

3、[锂电池金属](https://www.nytimes.com/2021/11/20/world/china-congo-cobalt.html)

《纽约时报》整理了锂电池所需金属矿物目前的主要生产国。

![](https://cdn.beekka.com/blogimg/asset/202205/bg2022052604.webp)

以及，这些金属目前的主要加工国。

![](https://cdn.beekka.com/blogimg/asset/202205/bg2022052605.webp)

## 文摘

1、[红绿灯的故事](https://jamessevedge.com/articles/red-light-green-light/)

![](https://cdn.beekka.com/blogimg/asset/202205/bg2022052610.webp)

有一次，我开车载着三岁的儿子，他叫本。

我们在十字路口的红绿灯处停下，我说：“嘿，本，交通灯是什么颜色？” 

他说，“它是绿色的。” 

我纠正他：“本，交通灯现在是停车标记，这是什么颜色？好好看看。” 他说：“绿色的。”

过了一会，交通灯变了。他说：“灯变红了，我们可以走了。”

我第一个想法是完蛋了，这孩子是色盲。但是转念一想，不对啊，色盲也不会把绿灯看成红灯，红灯看成绿灯啊。

回家后，我拿出图片，让他分辨红色和绿色，他每一次都做对了。但是后来又经过十字路口，他还是认错红绿灯，我非常困惑。

过了三周，我岳母来看我们，我们一起坐车出去。我坐在后排，就在本的儿童座椅旁边。我们在一个交通灯前停下，我突然明白是怎么回事了。本坐在后排的儿童座椅上，前排座位挡住了他的视线，他看不见正前方的交通灯，他看到的是十字路口侧边的交通灯，它的颜色正好跟正前方的相反。

这件事让我明白了一个事实，你的位置决定了你所看到的。当你坐在前排，实际做事时，你看到的东西、你的视野是后排的人所没有的。如果后排的人说一些没有意义的话，你就忽略它，并继续前进。

## 言论

1、

维护开源项目，缺乏资助，加上人们对你大喊要求你做这做那，让我根本不想做这件事。

-- [Blaine Bublitz](https://www.businessinsider.com/open-source-developers-burnout-low-pay-internet-2022-3)，开源项目 Gulp.js 维护者

2、

你要学会把代码和你自己分离，不要成为代码的拥有者。你要优化代码，便于其他人找到方法来修复错误和添加功能，把代码的控制权分散。因为你需要解放自己，继续去做下一个项目，否则你将永远无法脱身。

-- [《我编程20年的指导原则》](https://alexewerlof.medium.com/my-guiding-principles-after-20-years-of-programming-a087dc55596c)

3、

私有的区块链完全没意义。如果你可以控制读写数据，那么何必使用防止数据篡改、参与方不需要互相信任的区块链呢？

-- [Hacker News 读者](https://news.ycombinator.com/item?id=30775374)

4、

20年前，在线部署一个软件，需要你自己有一个物理服务器。10年前，需要有一个虚拟服务器。现在是 2022年，你应该使用 SaaS/IaaS 服务，这通常是最快、最便宜、质量最好的选择。

-- [《我不再需要 VPS》](https://greenash.net.au/thoughts/2022/03/i-dont-need-a-vps-anymore/)

5、

你活着的每一天，都是你还能拥有的最年轻的时候。

-- 网友

## 历史上的本周

2021年（第 160 期）：[中年码农的危机](https://www.ruanyifeng.com/blog/2021/05/weekly-issue-160.html)

2020年（第 109 期）：[播客的价值](https://www.ruanyifeng.com/blog/2020/05/weekly-issue-109.html)

2019年（第 57 期）：[分享知识是否违反人性？](https://www.ruanyifeng.com/blog/2019/05/weekly-issue-57.html)

2018年（第 6 期）：[未来还需要苦学外语吗？](https://www.ruanyifeng.com/blog/2018/05/weekly-issue-6.html)

## 订阅

这个周刊每周五发布，同步更新在[阮一峰的网络日志](http://www.ruanyifeng.com/blog)和[微信公众号](http://weixin.sogou.com/weixin?query=%E9%98%AE%E4%B8%80%E5%B3%B0%E7%9A%84%E7%BD%91%E7%BB%9C%E6%97%A5%E5%BF%97)。

微信搜索“阮一峰的网络日志”或者扫描二维码，即可订阅。

![](https://cdn.beekka.com/blogimg/asset/202103/bg2021030402.jpg)

（完）

