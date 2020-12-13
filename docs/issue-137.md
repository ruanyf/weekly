# 科技爱好者周刊（第 137 期）：Slack 被收购，以及企业的技术选型

这里记录每周值得分享的科技内容，周五发布。

本杂志开源（GitHub: [ruanyf/weekly](https://github.com/ruanyf/weekly)），欢迎提交 issue，投稿或推荐科技内容。

周刊讨论区的帖子[《谁在招人？》](https://github.com/ruanyf/weekly/issues/1520)，提供大量程序员就业信息，欢迎访问或发布工作/实习岗位。

## 封面图

![](https://www.wangbase.com/blogimg/asset/202012/bg2020120908.jpg)

12月3日，埃及工程师开发的机器人，正在对病人进行超声波检查。（[via](http://www.xinhuanet.com/world/2020-12/07/c_1126831143_7.htm)）

## 本周话题：Slack 被收购，以及企业的技术选型

Slack 是一个非常优秀的团队通信协作软件，如果你没用过，我很推荐试试看。

它在全世界有众多的用户，去年的收入是8.33亿美元。

![](https://www.wangbase.com/blogimg/asset/202012/bg2020120807.jpg)

上周，它把自己卖给了 Salesforce，售价高达277亿美元（约1800亿人民币）。从此，Slack 不再作为独立公司运行，而成为 Salesforce 的一个部门。

![](https://www.wangbase.com/blogimg/asset/202012/bg2020120808.jpg)

这其实是一件有点奇怪的事情。Slack 的发展势头非常好，疫情期间正流行远程办公，它却在这时选择不当独角兽了，套现离场，这是为什么？

[最主要的原因](https://mattstoller.substack.com/p/an-economy-of-godzillas-salesforce)大概是，它有一个强劲的对手 Microsoft Teams。这是微软模仿 Slack 推出的团队协作软件，可以跟 Office 绑在一起使用，Slack 感到极大的竞争压力。

![](https://www.wangbase.com/blogimg/asset/202012/bg2020120809.jpg)

Teams 是2016年10月发布的，到现在的四年间，用户从零变成了1.15亿。同样这段时间，Slack 的用户从400万增加到1200万。也就是说，Teams 的增长速度大概是 Slack 的十几倍！

这其实很容易理解。企业软件的背后有没有巨头支持，销售结果是完全不一样的。两个软件的功能完全相同，一家出自创业公司，另一家背后是微软，你说企业会选择谁的产品？

以前有一种说法，第一线程序员可以自由选择软件工具，然后“自下而上”推动整个企业采用，我也曾经信以为真。但是，这种想法是不现实的， **第一线程序员影响不了技术选型和采购决策，而决策者害怕承担决策错误的责任。** 你选择了一个小软件，万一没有很好地支持业务，或者软件本身有缺陷，你是要负责的。

**软件业有一句名言，“没人因为选择 Java 而被开除”。** 选择有大公司支持的技术，可以得到某种保证。那些技术可以不先进、不完美，甚至很乏味，但是它能保证得到积极维护和开发，具有庞大的生态系统和社区，并已经在大型业务环境经受了实战考验。企业就喜欢这样的技术，可以减少技术选型的风险，万一出事就不是决策者的责任。

![](https://www.wangbase.com/blogimg/asset/202012/bg2020120810.jpg)

微软在 Teams 上投入重金，并且还有庞大的销售部门在推销，Slack 怎么可能竞争得过！并非巧合的是，Slack 选择卖身的 Salesforces，技术能力也许不属于世界最强之列，但一定是世界上销售能力最强的软件公司之一。

顺便说一下，前端的技术选型也是如此。企业选择不知名的 JS 框架是有风险的，可以预言，最终赢的还是 React。它是世界排名第一的前端框架，背后有 Facebook 的支持，所以“没人因为选择 React 而被开除”。

## 《前端性能优化》视频课程

性能优化通常是软件开发的高层次内容，属于对高级程序员的要求。一方面，先保证软件的安全和功能，然后才会考虑性能；另一方面，只有懂得底层细节，才能提高性能。

因此，掌握性能优化，对于面试和涨薪是有帮助的，也有利于扩展自己的发展空间。

本周的课程资料，就是一个专门的视频教程 **《前端性能优化专项突破》**，主讲老师大圣是前百度/360高级架构师，现在开课吧。

![](https://www.wangbase.com/blogimg/asset/202012/bg2020120903.jpg)

他会针对性地分析前端性能优化的高频面试题，比如输入 URL 后的浏览器内部工作流程，如何缩减首屏加载时间等等。他还会提供一些通用的、可实操的性能优化方案。另外，他还会讲一些个人经历，如何提升个人核心竞争力，薪资从刚毕业的 2K 上涨到  40k。

![](https://www.wangbase.com/blogimg/asset/202012/bg2020120906.jpg)

这个视频课程长达 325 分钟，内容非常实在。课程原价699元，周刊读者微信扫描下面二维码，就可以 **0 元领**，没有任何条件，不用转发，不用分享。

![](https://www.wangbase.com/blogimg/asset/202012/bg2020120905.jpg)

仅限200名，送完即止。

## 资讯

1、[最齐全的笔记本](https://expanscape.com/the-aurora-7-prototype/the-story-of-the-aurora-7/)

![](https://www.wangbase.com/blogimg/asset/202011/bg2020112506.jpg)

一家英国公司做出了史上功能最齐全的笔记本，桌面电脑能够包含的组件，它都包含：

> - 7个屏幕，其中4个是17寸 4K 屏幕
> - 4个网卡，其中2个是无线网卡
> - 104键的背光键盘
> - 128GB 内存
> - 16TB SSD 硬盘
> - 独立的系统状态监视器

目前只是原型机，没有披露售价，最大的缺点是它的重量高达10公斤。

![](https://www.wangbase.com/blogimg/asset/202011/bg2020112507.jpg)

2、[隼鸟2号送回岩石样本](https://www.bbc.com/news/science-environment-55201662)

2014年12月3日，日本发射了隼鸟2号探测飞船（Hayabusa-2，下图），飞向一颗叫做“龙宫”（Ryugu）的小行星，2018年到达。

![](https://www.wangbase.com/blogimg/asset/202012/bg2020120516.jpg)

2019年2月22日，隼鸟2号成功登陆小行星“龙宫”表面。4月5日，发射一颗金属弹，击中龙宫表面（下图），收集了弹出的岩石，这是人类首次通过发射金属弹制造陨石坑。

![](https://www.wangbase.com/blogimg/asset/202012/bg2020120517.jpg)

2020年12月5日，隼鸟2号飞近地球时，分离了回收舱。第二天12月6日，回收舱降落在澳大利亚南部沙漠地带，送回了小行星的岩石标本。

![](https://www.wangbase.com/blogimg/asset/202012/bg2020120519.jpg)

![](https://www.wangbase.com/blogimg/asset/202012/bg2020120518.jpg)

![](https://www.wangbase.com/blogimg/asset/202012/bg2020120520.jpg)

![](https://www.wangbase.com/blogimg/asset/202012/bg2020120521.jpg)

目前，隼鸟2号正在继续开展下一个探测计划，飞往另一颗小行星，预计十年后的2031年能飞到那里。

3、[遛狗不牵绳的监控系统](http://static.zhoudaosh.com/6C13A88B1564424729BF877958D0D98C4B39F14DC8C71DB570EAB0B4546D7E8F)

![](https://www.wangbase.com/blogimg/asset/202012/bg2020120112.jpg)

![](https://www.wangbase.com/blogimg/asset/202012/bg2020120113.jpg)

《上海市养犬管理条例》规定，遛狗必须牵绳，违者罚款。最近，虹口公安分局在辖区多个小区，安装了一套智能系统，抓拍遛狗不牵绳者。

该系统会自动识别画面中的犬类，再根据旁边人物同框的频率，判断该人是否为狗主人，后台就会将遛狗不牵绳者的照片推送至辖区民警，然后民警和居委干部上门对犬主人进行处罚。

试点运行后，民警发现该系统还能识别流浪狗，可以进行收容。

4、[打捞汽车滚装船](https://jalopnik.com/a-chain-just-cut-through-a-capsized-cargo-ship-filled-w-1845784581)

![](https://www.wangbase.com/blogimg/asset/202012/bg2020120304.jpg)

![](https://www.wangbase.com/blogimg/asset/202012/bg2020120305.jpg)

2019年9月，一艘200米长的汽车滚装船在美国佐治亚州外海沉没，上面装有4000辆汽车。最近，这艘船被打捞起来，场面非常壮观。

为了将它彻底拉出水面，工人把船体一切为二，露出了里面挤压变形的汽车。

![](https://www.wangbase.com/blogimg/asset/202012/bg2020120307.jpg)

![](https://www.wangbase.com/blogimg/asset/202012/bg2020120308.jpg)

![](https://www.wangbase.com/blogimg/asset/202012/bg2020120309.jpg)

5、**一句话消息**

> - [微软](https://gear.xbox.com/products/windows-95-ugly-sweater)在 XBOX 官方商店出售 Windows 95 毛衣，售价69.99美元。蓝白底色大概是象征 Windows 95 默认桌面的蓝天白云。

![](https://www.wangbase.com/blogimg/asset/202012/bg2020120513.jpg)

![](https://www.wangbase.com/blogimg/asset/202012/bg2020120514.jpg)

![](https://www.wangbase.com/blogimg/asset/202012/bg2020120515.jpg)

![](https://www.wangbase.com/blogimg/asset/202012/bg2020121006.jpg)

> - [中国的核聚变实验装置](https://www.sohu.com/a/436289282_114986)“环流器二号”，12月4日在成都实现首次放电。核聚变是太阳能的来源，世界各国都在研究，目前还没有任何一个国家可以做到可控的核聚变。

![](https://www.wangbase.com/blogimg/asset/202012/bg2020120503.jpg)

> - [新加坡](https://edition.cnn.com/2020/12/02/business/lab-grown-chicken-intl-scli-scn/index.html)成为世界第一个允许“人工鸡肉”上市销售的国家，这是实验室通过培养和分裂鸡肉细胞得到的鸡肉。其他肉类理论上也可能通过这种方式生产出来。

![](https://www.wangbase.com/blogimg/asset/202012/bg2020120402.jpg)

> - [汉莎航空](https://edition.cnn.com/travel/article/lufthansa-sleepers-row-lie-flat-economy-seat/index.html)由于疫情期间国际航班乘客锐减，推出了“经济舱卧铺”，将座椅中间的扶手拆掉，允许乘客躺在一排座椅上，票价增加260美元。

![](https://www.wangbase.com/blogimg/asset/202011/bg2020112801.jpg)

> - [一个印尼村民](https://www.bbc.com/news/world-asia-55013725)的房屋，8月时被一颗从天而降的约2公斤的陨石砸毁。由于该陨石是很罕见的碳质陨石，被美国人收购，据说价格高达100万美元以上。

![](https://www.wangbase.com/blogimg/asset/202011/bg2020112209.jpg)

![](https://www.wangbase.com/blogimg/asset/202011/bg2020112205.jpg)

![](https://www.wangbase.com/blogimg/asset/202011/bg2020112206.jpg)

> - [一个瑞典工程师](https://www.boredpanda.com/magpies-recycling-machine-bottle-caps/)发明了一种自动喂食器，只要喜鹊将瓶盖之类的垃圾丢在里面，就能得到食物。

![](https://www.wangbase.com/blogimg/asset/202011/bg2020112301.jpg)

![](https://www.wangbase.com/blogimg/asset/202011/bg2020112303.jpg)

## 文章

1、[中国机床业路在何方？](https://finance.sina.com.cn/stock/s/2020-12-06/doc-iiznctke5115023.shtml)（中文）

![](https://www.wangbase.com/blogimg/asset/202012/bg2020120702.jpg)

2012年，沈阳机床的销售量世界第一，但是如今已经破产。18家中国大型机床国企几乎全军覆没，中国高档数控机床90%以上靠进口。作为全球机床第一大生产国、第一大消费国，中国机床业，怎么落到这般田地？

2、[云游戏的现状](https://boilingsteam.com/cloud-gaming-services-explained-and-tested-on-linux/)（英文）

![](https://www.wangbase.com/blogimg/asset/202012/bg2020120111.jpg)

云游戏指的是游戏安装和运行都在云端，用户通过网络在本地玩。本文测评了美国目前的各种云游戏服务，包括 Google Stadia、Amazon Luna、Geforce Now、PlayStation Now 等。

3、[2020年中国的获奖建筑](https://www.allnow.com/post/5fcdfff5c84b905ab2b38373)（中文）

![](https://www.wangbase.com/blogimg/asset/202012/bg2020120918.jpg)

![](https://www.wangbase.com/blogimg/asset/202012/bg2020120917.jpg)

本文介绍上海当代艺术博物馆最近颁发的“中国建筑奖”的获奖建筑，上图是山西省晋城市浙水村的自然书屋。

4、[神经网络的6种基本结构](https://lionbridge.ai/articles/6-types-of-neural-networks-every-data-scientist-must-know/)（英文）

![](https://www.wangbase.com/blogimg/asset/202012/bg2020120203.jpg)

本文介绍学习神经网络必须要了解的6种基本结构，上图就是最简单的感知器（Perceptron）。

5、[Dweb 协议栈](https://blog.space.storage/posts/the-dweb-protocols-behind-space)（英文）

![](https://www.wangbase.com/blogimg/asset/202012/bg2020120401.jpg)

Dweb 指的是分布式互联网，不再存在中央服务器，本文介绍它涉及的各种协议。

6、[React 防止 XSS 攻击的注意点](https://react.christmas/2020/3)（英文）

XSS 指的是代码注入，这是一种常见的攻击。React 框架本身带有防 XSS 的机制，但是开发时还是有一些地方需要注意。

7、[我面试谷歌伦敦 SRE 的经验和教训](https://justyy.com/archives/45126)（中文）

作者5年前接到过谷歌的面试邀请，当时问了一道队列+哈希表的题，可惜当时水平太差连第一面45分钟的 coding 都没过。再后来这几年一直投, 甚至去年找朋友内推都没法过简历关。（[@DoctorLai](https://github.com/ruanyf/weekly/issues/1535) 投稿）

8、[CSS 的竖行横书组合](http://www.deathghost.cn/article/css/86)（中文）

![](https://www.wangbase.com/blogimg/asset/202012/bg2020120901.jpg)

CSS 可以做到中文竖排，并且内部数字是横排的效果（上图）。（[@232650413](https://github.com/ruanyf/weekly/issues/1531) 投稿）

9、[如何没有 Cookie 使用 Google Analytics？](https://evrim.io/using-google-analytics-without-gdpr-consent/)（英文）

Google Analytics 是世界最大的网站访问统计服务，它最近允许不使用 Cookie，但是这样就无法区分用户了，只能单纯统计浏览量。本文介绍如何在没有 Cookie 的情况下，依然能够区分用户，也就是生成一个简单的用户指纹。

10、[20个有争议的编程观点](https://programmers.blogoverflow.com/2012/08/20-controversial-programming-opinions/)（英文）

本文总结了 StackOverflow 上面20个最有争议的编程观点，比如“对于优秀的软件设计，使用设计模式弊大于利”。

## 工具

1、[nonstop](https://github.com/yuxiaoy1/nonstop)

一个浏览器插件，可以规避知乎、微博、简书上面的外部链接跳转的确认页面，自动跳转到外部网址。（[@Yuxiaoy1](https://github.com/ruanyf/weekly/issues/1525) 投稿）

2、[screenity](https://github.com/alyssaxuu/screenity)

![](https://www.wangbase.com/blogimg/asset/202012/bg2020120201.jpg)

功能强大的 Chrome 浏览器录屏插件。（[@jeff-fe](https://github.com/ruanyf/weekly/issues/1527) 投稿）

3、[texme](https://github.com/susam/texme)

![](https://www.wangbase.com/blogimg/asset/202012/bg2020120202.jpg)

一个 JS 库，可以将 Markdown 自动渲染成网页内容。（[@baddate](https://github.com/ruanyf/weekly/issues/1530) 投稿）

4、[dumpster-fire](https://hey.science/dumpster-fire/)

![](https://www.wangbase.com/blogimg/asset/202011/bg2020112503.jpg)

这个网站挺好玩，你给它发 Email，它会打印出来，自动点火烧掉，全程直播。

5、[buster](https://github.com/dessant/buster)

![](https://www.wangbase.com/blogimg/asset/202011/bg2020112706.jpg)

浏览器插件，使用语音识别完成 reCAPTCHA 验证码。

6、[ruffle](https://ruffle.rs/)

一个 Flash 模拟器的 WebAssembly 库。只要把这个库插入网页，就可以播放 Flash。

7、[twtxt](https://github.com/jointwt/twtxt)

![](https://www.wangbase.com/blogimg/asset/202011/bg2020112906.jpg)

一个自己架设的微博客开源平台。

8、[Cyberbrain](https://github.com/laike9m/Cyberbrain)

![](https://www.wangbase.com/blogimg/asset/202011/bg2020112907.jpg)

一个 VS Code 插件，提供 Python 程序的可视化调试环境。

9、[repl.it Multiplayer](https://repl.it/site/multiplayer)

多人在线实时协同编程平台。

10、[RegExper](https://regexper.com/)

![](https://www.wangbase.com/blogimg/asset/202012/bg2020120108.jpg)

该网站可以将正则表达式转成解释图片。

## 资源

1、[This X Does Not Exist](https://thisxdoesnotexist.com/)

![](https://www.wangbase.com/blogimg/asset/202011/bg2020112204.jpg)

这个网站收集各种 AI 生成的仿真项目，比如不存在的人、不存在的猫、不存在的房间等等。

2、**无限放大的插画**

以下三个网站展示可以无限放大的插画。

[Zoomquilt](https://zoomquilt.org/)

![](https://www.wangbase.com/blogimg/asset/202011/bg2020112401.jpg)

[Zoomquilt2](http://zoomquilt2.com/)

![](https://www.wangbase.com/blogimg/asset/202011/bg2020112402.jpg)

[Arkadia Zoomquilt](http://arkadia.xyz/)

![](https://www.wangbase.com/blogimg/asset/202011/bg2020112403.jpg)

3、[Unix 操作系统简介](https://chsasank.github.io/classic_papers/unix-time-sharing-system.html)（中文）

![](https://www.wangbase.com/blogimg/asset/202011/bg2020111502.jpg)

丹尼斯·里奇和肯·汤普森1974年的原始论文，向世界介绍他们发明的新操作系统 Unix，在不长的篇幅里面，使用简单的语言，介绍 Unix 的一些核心设计，至今仍然有参考价值。

4、[文件格式维基](http://fileformats.archiveteam.org/wiki/Main_Page)

这个维基网站收集了各种文件后缀名，详细解释每种文件的格式。

5、[Hello DNS](https://powerdns.org/hello-dns/)

一个英文的 DNS 协议教程，介绍 DNS 协议的概念和细节。

6、[Maven 手册](https://www.yuque.com/inuter/bc7ikc/ngeqot)

Maven 是 Java 项目的管理和构建工具，这是国人原创的针对新手的中文入门教程。（[@inuter](https://github.com/ruanyf/weekly/issues/1538) 投稿）

## 图片

1、[空图书馆](https://en.wikipedia.org/wiki/The_Empty_Library)

德国柏林的倍倍尔广场上，有一个装置艺术品，叫做“空图书馆”，是一组空的地下白色书柜。这是为了提醒人们不要忘记，1933年纳粹在这个广场上烧毁犹太人和马克思的书籍。

![](https://www.wangbase.com/blogimg/asset/202005/bg2020052601.jpg)

地下空间的大小相当于2万本书籍，跟当时烧毁的数量相仿。这个装置跟地面齐平，白天很难发现，晚上亮灯才能看到。装置内部装有空调，保持跟外部同样温度，防止玻璃窗上出现水汽。

![](https://www.wangbase.com/blogimg/asset/202005/bg2020052602.jpg)

2、[最大的愚人节恶作剧](http://hoaxes.org/af_database/permalink/the_eruption_of_mount_edgecumbe/)

美国阿拉斯加州锡特卡镇，背后是一座休眠火山，已经有400年没有喷发了。

1974年4月1日星期一的早晨，居民们醒来后，震惊地发现火山居然冒出了黑烟，眼看就要爆发了。

![](https://www.wangbase.com/blogimg/asset/202012/bg2020120101.jpg)

![](https://www.wangbase.com/blogimg/asset/202012/bg2020120102.jpg)

海岸警卫队派出直升飞机，查看情况，才发现原来这是一个愚人节恶作剧。一个伐木工人想跟大家开一个玩笑，他用小飞机将70个旧轮胎运上山，浇上煤油，然后点燃。

## 文摘

1、[未来的暗杀行动](https://finance.sina.com.cn/tech/2020-12-07/doc-iiznctke5290247.shtml)

11月27日，伊朗重要核物理学家法克里扎德在首都德黑兰附近遭遇暗杀，整个过程就像科幻小说一样。

法克里扎德身边有11人维安小组，但还是被人工智能通过卫星遥控的机关枪射杀。

![](https://www.wangbase.com/blogimg/asset/202012/bg2020120803.jpg)

伊朗革命卫队（Revolutionary Guards）副司令法达威向媒体透露了细节。

![](https://www.wangbase.com/blogimg/asset/202012/bg2020120804.jpg)

2020年11月27日下午，法赫里扎德与妻子乘坐一辆黑色尼桑轿车，在11名保镖陪同下前往郊区的别墅。由于疫情，高速公路上车辆稀少。

![](https://www.wangbase.com/blogimg/asset/202012/bg2020120805.jpg)

法赫里扎德乘坐的车辆先遭到了一下枪击，他以为汽车出现故障，从防弹车上下来查看情况。就在此时，一辆停在150米之外的日产皮卡车，上面安装的机关枪开始射击。

机关枪配有面部识别，只瞄准法克里扎的脸部，开了13枪。他的妻子虽只距离25公分，但未被击中。

暗杀行动是通过卫星操控的，现场未见恐怖分子。开枪后，日产车随即自爆，销毁了自身。整个暗杀过程只用了3分钟。

![](https://www.wangbase.com/blogimg/asset/202012/bg2020120806.jpg)

伊朗政府追查这辆日产汽车车主身份，发现车子所有人早在10月29日就已经离开伊朗。

2、[如果一个冬夜，你在俄罗斯的郊区](https://www.calvertjournal.com/articles/show/11066/this-new-video-game-lets-you-do-nothing-in-a-suburban-russian-tower-block)

去年，两个俄罗斯程序员开发了一款非常独特的游戏。

这个游戏没有任何情节、任何目标，甚至也没有任何人物，只有玩家自己。游戏只做了一件事，就是逼真地还原了一个下着鹅毛大雪的冬夜，位于俄罗斯郊区的一片住宅区平淡无奇的生活环境。

游戏开始时就是一个黑夜，你会发现自己在俄罗斯一个普通郊区的一间小公寓里面，灯光黯淡，屋里空无一人。

![](https://www.wangbase.com/blogimg/asset/202011/bg2020112910.jpg)

你从窗户望出去，看到白雪覆盖的庭院，在黑暗里被路灯和商店冷清的霓虹灯照亮。

![](https://www.wangbase.com/blogimg/asset/202011/bg2020112911.jpg)

你打开厨房的电灯开关，尝试烤面包、煮鸡蛋。

![](https://www.wangbase.com/blogimg/asset/202011/bg2020112912.jpg)

然后，你打开收音机，听了一会，开始洗澡。接着，你取出垃圾，离开公寓，到空无一人的庭院里散步。

![](https://www.wangbase.com/blogimg/asset/202011/bg2020112909.jpg)

街道拐角处的商店和美发店都关门了，路上空无一人。实际上，无论你走到哪里，都看不到任何人。

这个游戏其实只是一个“沙盒”，让玩家在一个虚拟环境里面自由漫游。开发者说游戏目的就是传达“后苏联时代俄罗斯普通人的悲伤生活。……没有什么在等你，没有机会离开，没有冒险的可能，生活中没有任何令人惊奇的事件。” 

该游戏可以在 Steam 平台[购买](https://store.steampowered.com/app/1003360/___ITS_WINTER/)，价格是人民币37元。

## 言论

1、

DNS 相关协议在过去的三十年一直在增长，平均每两天增加一页，现在已经有数千页的密集文本。实际上，没人有办法在开发前阅读所有文档。

DNS 已经到了如此复杂的地步，以至于没人能完全掌握一切。这将导致不可能编写任何新的 DNS 实现。

-- [《放牧 DNS 骆驼》](https://www.ietf.org/blog/herding-dns-camel/)

2、

不管你多么聪明或多么有经验，你的大多数想法根本行不通。成功的想法需要花费时间和辛勤的工作，才能成为被市场广泛采用的真实产品。

-- [《做一个真正了解用户的创始人》](https://mgadams.com/the-founders-guide-to-actually-understanding-users-c68feaecac44)

3、

游泳横渡英吉利海峡的人说，最困难的部分之一是最后阶段，你已经可以看到前方的海岸，但实际上还有很长一段距离。

-- [《构建新功能的痛苦》](https://blog.thinkst.com/2020/11/new-features-arent-solved-problems.html)

4、

疫情刚开始在美国出现时，美国几乎买不到口罩，但是在中国可以买到。因此，这篇论文通信作者之一的卢朝阳（音译）决定寄给我一盒200个口罩（我没有要求他这样做）。我认为这不会影响我对这篇论文的评审，但还是很感激。

-- [Scott Aaronson](https://www.scottaaronson.com/blog/?p=5122) 对中国量子计算机论文审核意见的附言

5、

提高测试覆盖率的最好方法，是识别并删除不必要的代码。

-- [《测试覆盖率神话》](https://preslav.me/2020/12/03/the-myth-of-code-coverage/)

6、

一般而言，尖端技术很快就会被替代，因此生命周期很短。相反地，落后但非常便宜的技术会长期存在，甚至可能持续数十年。

-- [《32位 Linux 系统的未来》](https://lwn.net/SubscriberLink/838807/9b293f03c03ef0c5/)

## 回顾

2019年的本周（第 86 期）：[千万不要当完美主义者](http://www.ruanyifeng.com/blog/2019/12/weekly-issue-86.html)

![](https://www.wangbase.com/blogimg/asset/201911/bg2019112713.jpg)

2018年的本周（第 34 期）：[身份证的最终解决方案：人体植入芯片](http://www.ruanyifeng.com/blog/2018/12/weekly-issue-34.html)

![](https://www.wangbase.com/blogimg/asset/201812/bg2018120702.jpg)

## 订阅

这个周刊每周五发布，同步更新在[阮一峰的网络日志](http://www.ruanyifeng.com/blog)和[微信公众号](http://weixin.sogou.com/weixin?query=%E9%98%AE%E4%B8%80%E5%B3%B0%E7%9A%84%E7%BD%91%E7%BB%9C%E6%97%A5%E5%BF%97)。

微信搜索“阮一峰的网络日志”或者扫描二维码，即可订阅。

![](http://www.ruanyifeng.com/blogimg/asset/2018/bg2018042311.jpg)

（完）

