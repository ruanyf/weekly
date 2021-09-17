# 科技爱好者周刊（第 151 期）：NFT 是什么，听说能赚钱

这里记录每周值得分享的科技内容，周五发布。

本杂志开源（GitHub: [ruanyf/weekly](https://github.com/ruanyf/weekly)），欢迎提交 issue，投稿或推荐科技内容。

周刊讨论区的帖子[《谁在招人？》](https://github.com/ruanyf/weekly/issues/1652)，提供大量程序员就业信息，欢迎访问或发布工作/实习岗位。

## 封面图

![](https://cdn.beekka.com/blogimg/asset/202103/bg2021032509.jpg)

意大利一个时尚品牌，推出了穿鞋子的沙发。说来奇怪，只是简单地加上袜子和鞋子，沙发好像就有了生气。（[via](https://www.instagram.com/p/CLWmhSpl5Rq/)）

## 本周话题：NFT 是什么，听说能赚钱

最近，美国有一个东西非常火爆，叫做 NFT，价格飞涨到了离奇的地步。

请看这样一条[新闻](https://www.thepaper.cn/newsDetail_forward_11783283)。一个网名叫做 Beeple 的艺术家，从2007年5月1日开始，每天在 Instagram 发布一张数字艺术的图片，就像下面这种。

![](https://cdn.beekka.com/blogimg/asset/202103/bg2021032311.jpg)

到了今年，他已经连续发布了5000张。为了纪念这一天，他就把所有发布过的图片，合成为一张超大的 JPG 图片，交给佳士德公司拍卖。

![](https://cdn.beekka.com/blogimg/asset/202103/bg2021032312.jpg)

**这里就有一个问题，JPG 图片怎么拍卖？** 那只是一段二进制编码，如果有人拷贝了一份，请问哪一份是真品，哪一份是赝品？

Beeple 的做法就是，拍卖的不是 JPG 图片本身，而是这张图片的 NFT，结果拍出了6934万美元的天价！

![](https://cdn.beekka.com/blogimg/asset/202103/bg2021032313.jpg)

NFT 到底是什么神奇的东西，使得一个图片文件值这么多钱？我感到非常好奇，就阅读了[一些资料](https://www.coindesk.com/its-an-nft-boom-do-you-know-where-your-digital-art-lives)，下面就是我的理解。很可能有不正确的地方，欢迎指正。

**简单说，NFT 是区块链的一种应用，最大特点就是把网址写入区块链。** 大家知道，数据一旦写入区块链，就无法再修改（参考我的[《区块链入门教程》](https://www.ruanyifeng.com/blog/2017/12/blockchain-tutorial.html)）。因此，NFT 包含的网址是没法改的，然后可以通过区块链的买卖机制，跟某一个数字钱包相关联。

这就是说，如果某个区块在你的数字钱包名下，该区块所包含的网址自然也会在你的名下。所以，**NFT 很适合作为网址的所有权证书。** 回到前面的例子，佳士得拍卖的，其实就是原始 JPG 图片的网址在区块链上的所有权。

买家买到手的就是包含这个网址的一个区块，本质上就是一条数据库记录，以此证明自己拥有的是“正品”。 **任何可以用网址表示的东西（一篇文章、一段视频、一条推特等等），都可以用 NFT 买卖，** 所以有人说 NFT 是数字资产所有权交易的最佳方案。

你可能马上会想到一个问题，如果网址发生变化，或者下线了，那可怎么办？毕竟 NFT 是没法修改的。根据我看到的资料，这一点好像目前没有解决办法，有人提出使用内容寻址的网址（IPFS），这里就不谈了。

如果你问我，NFT 有没有投资价值，会不会像比特币那样被暴炒？我的想法是，这取决于数字资产所有权这件事，到底能有多大的市场。数字文件的最大特点就是无限的可复制性，NFT 人为创造出了所有权和稀缺性，让拷贝与拷贝之间产生差异。这样做的意义，除了拍卖和炒作，我还真想不出其它场景，因为几乎都有比它更好的解决方案。

## Vue 3 原理解析

本周的课程讲座是一个面试辅导，帮助想要进阶的前端同学，准备 Vue 3 相关的面试。

2020年9月，Vue.js 发布了 3.0 的第一个正式版本，重写了内部代码，改进了性能，引入了一些重大的新功能。从那时起，现有的项目就正式开始全面地向新版本迁移了。

Vue 3 的迁移在国内开始得更早，基本跟开发是同步的。作为国内使用最广泛的前端框架之一，各个大厂对 Vue 的投入非常大，面试几乎必问 Vue 3 这方面的问题。

**想要顺利通过面试，不仅需要了解 Vue 3 的原理，最好还能体现出强烈的学习能力，以及对新技术的敏感。** 后两者也是技术能力非常重要的组成部分。

开课吧推出的 **《Vue3 原理解析》** 课程，就是从上面几个方面，强化学员的 Vue 3 技术能力，帮助大家好好准备面试，顺利拿到 Offer。

![](https://cdn.beekka.com/blogimg/asset/202103/bg2021032517.jpg)

在课程中，Vue 3 源码贡献者崔效瑞老师，通过带领大家自己手写代码，让你亲手实现一个最简单的 Vue 3 内核，以此了解 Vue 的核心原理，精准找到学习关键点。

该课程原价199，周刊读者有优惠，可以 0 元学习。微信扫描下方二维码，即可报名。

![](https://cdn.beekka.com/blogimg/asset/202103/bg2021032516.jpg)

前100个报名的同学还会额外获赠 《带你高效掌握 ES6：原理讲解 + 项目实战》资料包。

## 科技动态

1、[安卓的车祸报警功能](https://www.reddit.com/r/GooglePixel/comments/lq3k0a/car_crash_detection_saved_me_hours_of_suffering/)

![](https://cdn.beekka.com/blogimg/asset/202103/bg2021030801.jpg)

最近，一个美国人在操作挖掘机时发生事故，滑下山谷，他被卡在车里，呼吸困难，周围没有其他人。好在他 Pixel 手机的 Android 10 系统内置了车祸报警功能，事故发生后的几分钟内，手机自动拨打求救电话 911，发送他的坐标。

十几分钟后，消防局赶到现场，将他救出来，事后发现他的7根肋骨和4根胸椎折断。下图是 Android 10 在拨打求救电话时显示的提示截图。

![](https://cdn.beekka.com/blogimg/asset/202103/bg2021030802.jpg)

2、[太空舱旅馆](https://www.163.com/dy/article/FV151NN2051492T3.html)

![](https://cdn.beekka.com/blogimg/asset/202103/bg2021032505.jpg)

![](https://cdn.beekka.com/blogimg/asset/202103/bg2021032506.jpg)

![](https://cdn.beekka.com/blogimg/asset/202103/bg2021032507.jpg)

国内企业推出了太空舱旅馆，号称可以放在任何地方使用。它自带800-1600升水箱、5千瓦光伏，配备了废水和粪便处理系统，可以完成独立的生态循环。

厂家宣传，使用时不用打地基，不用挖建蓄粪池，不受地域位置限制，采用新型玻纤复合材料，质地轻薄，不易腐蚀。不过，如果真的要商用，肯定还是需要外接水电和排污。

3、[太阳能汽车](https://sonomotors.com/)

![](https://cdn.beekka.com/blogimg/asset/202103/bg2021031608.jpg)

![](https://cdn.beekka.com/blogimg/asset/202103/bg2021031609.jpg)

一家德国创业公司宣布，造出了世界第一辆太阳能汽车。该车最大特点就是太阳能板代替了车身油漆，全车一共有248块电池板。不过，太阳能的充电速度比较慢，每周的电量只能支持112公里～245公里（视天气而定），其余的电量必须通过充电桩供应。

该车充满电后，可行驶250公里，售价为2.5万欧元，约为20万人民币。由于车身越大，太阳能板可以放置越多，该公司下一步打算推出太阳能大客车。

![](https://cdn.beekka.com/blogimg/asset/202103/bg2021031611.jpg)

4、[三星堆考古](https://weibo.com/6755715468/K754l8FUu)

![](https://cdn.beekka.com/blogimg/asset/202103/bg2021032011.jpg)

3月20日，三星堆遗址的最新考古成果发布。上一次挖掘还是在上个世纪80年代，只挖掘了两个祭祀坑；2019年开始挖掘另外六个，上图是这次出土的黄金面具和上一次出土的青铜面具。

下图是当年和现在的考古现场对比，可以看到中国考古30多年来的进步。现在使用了[很多新设备](https://mp.weixin.qq.com/s/4L4CHKlJSBUlpmgaBKYlfQ)，搭建了恒温恒湿的大棚，还使用 3D 打印为出土文物制作保护罩。

![](https://cdn.beekka.com/blogimg/asset/202103/bg2021032012.jpg)

![](https://cdn.beekka.com/blogimg/asset/202103/bg2021032206.jpg)

![](https://cdn.beekka.com/blogimg/asset/202103/bg2021032013.jpg)

任何史书都没有记载，四千年前四川存在过一个高度发达的人类文明。这个文明是哪里来的，又为何消失，留下了太多的未解之谜。

5、**一句话消息**

[苏伊士运河](https://www.bloomberg.com/news/articles/2021-03-23/suez-canal-traffic-blocked-by-container-ship-stuck-in-waterway)有史以来第一次被一艘搁浅的集装箱船堵塞，导致运河两端的船只大排长龙。这条著名运河其实非常狭窄，宽度只有200米，而集装箱船长达400米，船身稍微横过来，就会把路堵住。

![](https://cdn.beekka.com/blogimg/asset/202103/bg2021032401.jpg)

[BBC](https://www.bbc.com/news/business-55932977) 报道，欧美很多大公司采用 AI 面试求职者。软件会给出一些问题或者游戏（下图），然后结合求职者的答题表现和摄像头捕捉的表情，决定是否进入下一轮面试。很多求职者质疑，仅凭计算机决定一个人的工作申请是否公平？

![](https://cdn.beekka.com/blogimg/asset/202102/bg2021020911.jpg)

[美国科学家](https://www.fox5ny.com/news/an-endangered-species-in-the-u-s-has-been-cloned-for-the-first-time)使用1988年保存下来的 DNA，在2020年克隆出了濒危动物黑足雪貂，它由家养雪貂代为怀孕。这是美国第一个克隆的濒危物种，这种方法以后可用于挽救其他物种。

![](https://cdn.beekka.com/blogimg/asset/202102/bg2021022201.jpg)

[Oppo](https://thenextweb.com/plugged/2021/03/12/the-oppo-find-x3s-microscope-camera-is-the-kind-of-gimmick-im-here-for/) 新发布的手机 Find X3 Pro，有一个其它手机没有的显微镜头，可以将物体放大60倍，引起了国外媒体的兴趣。下面就是他们拍的样张：纤维和苔藓。

![](https://cdn.beekka.com/blogimg/asset/202103/bg2021031203.jpg)

![](https://cdn.beekka.com/blogimg/asset/202103/bg2021031204.jpg)

[韩国媒体](https://star.ettoday.net/news/1937227)透露，正在播出的电视剧《文森佐》的意大利场景，全部都是摄影棚内拍摄的，然后使用计算机生成，根本看不出破绽。韩国的数字工业真是越来越厉害。

![](https://cdn.beekka.com/blogimg/asset/202103/bg2021031706.jpg)

![](https://cdn.beekka.com/blogimg/asset/202103/bg2021031708.jpg)

## 文章

1、[为什么印度发展制造业这么难？](https://www.guancha.cn/moxizhi/2021_02_20_581655.shtml)（中文）

![](https://cdn.beekka.com/blogimg/asset/202103/bg2021031709.jpg)

自从莫迪上台之后，印度一直想要发展制造业，以工业强国。本文详细分析，为什么印度的制造业发展不起来，无法复制中国的模式。

上图据说是，印度老师远程上课，但找不到手机架的解决方案。

2、[百度如何错过深度学习之父](https://posts.careerengine.us/p/605412f82e61cf72e86dc02c)（中文）

![](https://cdn.beekka.com/blogimg/asset/202103/bg2021032103.jpg)

美国最近出版了一本新书《天才制造者》，透露了各大 IT 巨头开发人工智能的许多秘辛。

2012年，李彦宏曾经拍板出资1200万美元，聘请当时还没有出名的“深度学习之父”多伦多大学的辛顿教授担任首席科学家，辛顿教授也动心了，但是最后还是被谷歌挖走了。

3、[谁看了日本人的 LINE 聊天记录](https://mp.weixin.qq.com/s/w6lKuPMwgtGstu978iBU8Q)（中文）

![](https://cdn.beekka.com/blogimg/asset/202103/bg2021032207.jpg)

LINE 将一部分开发外包给中国软件公司，中国开发者得到授权后，可以访问日本 LINE 公司的服务器，查阅了一些日本用户的个人资料和留言等信息。这件事披露后，尽管是完全合法的访问数据，还是轰动了日本列岛，直接惊动了日本首相菅义伟。

4、[我如何收购一家 SaaS 公司](https://every.to/superorganizers/how-i-bought-a-business-for-0)（英文）

作者是一个风险投资家，本文介绍他如何收购一个网络软件，可以从中了解风险投资的一些操作方法。

5、[我如何用表情域名赚钱](https://tinyprojects.dev/projects/mailoji)（英文）

![](https://cdn.beekka.com/blogimg/asset/202103/bg2021031106.jpg)

作者偶然发现，某些国别域名允许注册表情符号 Emoji 的顶级域名，比如上图的笑脸域名。他就一口气注册了300个，开始利用它们赚钱。

6、[关于线程的简要介绍](https://www.internalpointers.com/post/gentle-introduction-multithreading)（英文）

![](https://cdn.beekka.com/blogimg/asset/202103/bg2021031105.jpg)

线程（thread）是编程的重要概念，本文用简单的语言介绍了什么是线程、它与进程的区别、线程的优缺点等等，写得很好。

7、[一道有趣的物理题](https://users.physics.unc.edu/~deardorf/phys25/rwp/exam1rwpsolution.html)（英文）

这是美国一个大学的物理学考试题目：有没有可能在高压输电线路的下方，放置一大圈电线，利用线圈感应进行偷电？

8、[放弃悬停菜单](https://css-tricks.com/in-praise-of-the-unambiguous-click-menu/)（英文） 

悬停菜单是一种常见做法，鼠标悬停时显示子菜单。作者认为，如果有些菜单项没有子菜单，悬停会造成行为不统一，建议统一改为单击菜单。

## 工具

1、[Gotify](https://gotify.net/)

![](https://cdn.beekka.com/blogimg/asset/202103/bg2021031001.jpg)

一个 Go 语言写的 WebSockets 库，有服务端、客户端和安卓端。

2、[UserLAnd](https://github.com/CypherpunkArmory/UserLAnd)

![](https://cdn.beekka.com/blogimg/asset/202103/bg2021031002.jpg)

一个安卓应用，让你在安卓手机上安装 Linux 发行版，就像安装一个常规 App，不需要系统 root。

3、[lint-md](https://github.com/lint-md)

一个检查中文 Markdown 语法风格的命令行工具，比如英文字母与全角字符之间有一个空格。（[@hustcc](https://github.com/ruanyf/document-style-guide/issues/47) 投稿）

4、[FairEmail](https://email.faircode.eu/)

![](https://cdn.beekka.com/blogimg/asset/202103/bg2021030901.jpg)

开源的安卓电子邮件客户端，强调安全和隐私保护。

5、[AR-lab](https://github.com/shadowcz007/AR-lab)

![](https://cdn.beekka.com/blogimg/asset/202103/bg2021032203.jpg)

一个实验性桌面程序，使用百度飞轮和 Electron 实现的 AR 剪贴和复制。手机先对准某人，再对准电脑屏幕，即可把他/她复制粘贴到桌面程序里面！（[@shadowcz007](https://github.com/ruanyf/weekly/issues/1680) 投稿）

6、[rss_everyday](https://github.com/GuangzheJiang/rss_everyday)

一个 GitHub Actions 模板，每天定时运行，将 RSS 内容推送到 Telegram 频道。（[@GuangzheJiang](https://github.com/ruanyf/weekly/issues/1682) 投稿）

7、[mdBook](https://github.com/rust-lang/mdBook)

GitBook 的 Rust 语言移植，可以将 markdown 源文件转成一个在线阅读网站。

8、[flowchart-fun](https://github.com/tone-row/flowchart-fun)

![](https://cdn.beekka.com/blogimg/asset/202103/bg2021030201.jpg)

可能是最简单的流程图制作工具。左边的文本框输入，一行就代表一个新节点，缩进代表隶属关系，右边自动生成图形。

9、[DarkModeBuddy](https://github.com/insidegui/DarkModeBuddy)

![](https://cdn.beekka.com/blogimg/asset/202102/bg2021022703.jpg)

一个 MacOS 应用，自动根据外部光线的强弱，调整桌面为亮模式或暗模式。

10、[Arrow](https://github.com/arrow-py/arrow)

一个 Python 的日期时间库，借鉴了 moment.js 的 API 设计。

## 资源

1、[Clone Wars](https://github.com/GorvGoyl/Clone-Wars)

![](https://cdn.beekka.com/blogimg/asset/202103/bg2021031003.jpg)

该仓库收集热门网站的开源实现，比如 Airbnb、Amazon、Instagram、Netflix、Tiktok、Spotify 等，已经有70多个项目了。

2、[地球史视频](https://www.youtube.com/c/HistoryoftheEarth/videos)

![](https://cdn.beekka.com/blogimg/asset/202103/bg2021030805.jpg)

一个原创科普视频的 Youtube 频道，从地球诞生开始，一段一段介绍地球的历史。

3、[真实世界的密码学](https://www.manning.com/books/real-world-cryptography)（Real-world Cryptography）

![](https://cdn.beekka.com/blogimg/asset/202103/bg2021030803.jpg)

本书使用简单的语言和示例，解释了普通用户在日常生活中遇到的密码学问题，可以免费在线阅读。

4、[数据结构与算法视频](https://space.bilibili.com/50003725/video)

![](https://cdn.beekka.com/blogimg/asset/202103/bg2021032205.jpg)

一组不错的数据结构与算法讲解视频，涉及动态数组、二叉树、图论、动画引擎等等。从国外网站搬运到 B 站，带有中文字幕。（[@jizai](https://github.com/ruanyf/weekly/issues/1685) 投稿）

5、[活火山直播](https://www.ruv.is/frett/2021/03/20/live-feed-from-iceland-volcano)

![](https://cdn.beekka.com/blogimg/asset/202103/bg2021032107.jpg)

冰岛的一座活火山出现裂缝，涌出岩浆。工程师将摄像头对准火山，在网上提供直播，很难得可以看到火山喷发的直播。

## 图片

1、[博朗的配色](http://blog.presentandcorrect.com/rams-palettes)

德国博朗公司（Braun）以设计优雅著称，曾经对乔布斯产生过重大影响。下面是它的一些产品配色方案，非常漂亮。

![](https://cdn.beekka.com/blogimg/asset/202103/bg2021030301.jpg)

![](https://cdn.beekka.com/blogimg/asset/202103/bg2021030302.jpg)

![](https://cdn.beekka.com/blogimg/asset/202103/bg2021030303.jpg)

![](https://cdn.beekka.com/blogimg/asset/202103/bg2021030304.jpg)

2、[Facebook 小红书](https://twitter.com/antoniogm/status/1365795467376824320)

2012年，Facebook 发行股票上市，每个员工收到了一本小红书。

![](https://cdn.beekka.com/blogimg/asset/202103/bg2021030311.jpg)

最后一页写着这样一段话：

> “如果我们自己不创造能够杀死 Facebook 的东西，其他人将会这样做。……互联网不是一个友善的地方。那些不重要的东西甚至都没有机会留下遗迹。它们消失得无影无踪。”

![](https://cdn.beekka.com/blogimg/asset/202103/bg2021030312.jpg)

## 文摘

1、[庞巴德的故事](https://zh.wikipedia.org/wiki/%E9%98%BF%E5%85%B0%C2%B7%E9%82%A6%E5%B7%B4%E5%B0%94)

1952年，法国人庞巴德（Alain Bombard）独自一人，乘坐一艘4.3米的充气式救生筏穿越大西洋。他没有携带食物和淡水，航行了4,400公里，于当年12月23日到达加勒比海岛国巴巴多斯。他的体重减轻了25公斤，这一切只为了证明他的观点：人类实际上可以在海水上生存更长的时间！

![](https://cdn.beekka.com/blogimg/asset/202102/bg2021022305.jpg)

![](https://cdn.beekka.com/blogimg/asset/202102/bg2021022306.jpg)

作为一名医生，庞巴德有一个理论，在身体不缺水的情况下，人类饮用少量海水，并没有危险。只有当身体脱水并突然喝大量盐水时，才是危险的。

据他自己说，他在海上依靠鱼叉和鱼钩捕鱼，以及用小网捞海面上的浮游生物为食，每天也饮用有限的海水。

很多人不相信庞巴德的讲法，认为他实际上在航行时偷偷携带了淡水，并且一路上都在收集雨水，可能中途还有秘密的补给。

2005年，庞巴德（Bombard）在法国土伦去世，享年80岁。

2、[中情局留在喜马拉雅山脉的核垃圾](https://defector.com/cia-climbers-cold-war-nanda-devi-nuclear-device/)

1964年，中国成功在新疆试爆了第一枚原子弹。美国政府非常震惊，希望收集更多这方面的情报。

中央情报局 CIA 想出了一个匪夷所思的计划。他们打算在印度的高山顶上安装一个监听装置，捕获中国核计划的无线电通信。

监听装置是一个金属箱，重50多公斤，外表像一个烤箱，但是装有将近2米的天线。它内部有一个微型核反应堆，用来供电，保证能够在极寒的山顶连续工作多年。

1965年，中央情报局跟印度合作，组建了一支登山队，计划把这个装置放到印度第二高峰南达·戴维（Nanda Devi）的顶上。那座山峰位于喜马拉雅山脉，海拔7816米。

![](https://cdn.beekka.com/blogimg/asset/202103/bg2021030203.jpg)

登山队训练了6个月，于1965年10月出发，结果遭遇了彻底失败。距离山顶还有几百米的时候，一场巨大的暴风雪来临了，几名队员掉落山谷而丧生。登山队长被迫决定撤退，并把核装置留在山上，打算下次登山时再取回它。

到1968年为止，中央情报局在该地区又组织了七次登山，但是始终没有找到那台留在山上的设备，只好在山顶又重新安装了另一台。但是，那一台还没来得及收集到有用的情报，就被埋在深深的积雪下面，几个月后停止了工作。

于是，在喜马拉雅山脉的深处，留下了两个核装置，没人知道它们现在的状况。

2021年2月，印度的北阿坎德邦爆发巨大的山洪，造成50多人丧生。洪水的源头就是南达德维冰川，山上的一个湖泊发生了决口。尽管没有证据支持，许多人猜测，原因可能就是那两个核装置还在工作，产生的热量导致了冰雪融化，冰川决口。

## 言论

1、

有史以来发行的所有美元，几乎有四分之一是在2020年发行的。

-- [《美元的贬值》](https://eriktorenberg.substack.com/p/the-devaluing-of-the-us-dollar)

2、

小的、渐进式的创新可以使行业主导企业保持领先地位，但是激进的创新可以使新公司超越行业主导企业，这就叫“跨越式发展”。

-- [维基百科](https://en.wikipedia.org/wiki/Leapfrogging)

3、

杀手级应用（killer application）指的是极受市场欢迎的计算机程序，证明了底层技术的价值。比如，消费者只是为了运行该程序，而会购买必需的硬件。

-- [维基百科](https://en.wikipedia.org/wiki/Killer_application)

4、

如果你自己开公司，每月收入少于2万美元，那么你的公司根本不是公司，而是一份你的工作。

-- [《我如何收购一家 SaaS 公司》](https://every.to/superorganizers/how-i-bought-a-business-for-0)

5、

以前是其它行业的公司购买软件，现在是某一个公司创建一种软件，然后使用自己的软件进入该行业，并对这个行业加以改造。

--[《超越软件》](https://www.ben-evans.com/benedictevans/2021/3/18/outgrowing-software)

6、

2020年，音乐产业的总收入不到200亿美元，是20年前的一半。流媒体的发展，大大缩小了音乐市场的产值。

--[《超越软件》](https://www.ben-evans.com/benedictevans/2021/3/18/outgrowing-software)

## 历史上的本周

2020年（第 100 期）：[零利率时代](http://www.ruanyifeng.com/blog/2020/03/weekly-issue-100.html)

2019年（第 48 期）：[著名程序员 Bill Joy 的人生启示](http://www.ruanyifeng.com/blog/2019/03/weekly-issue-48.html)

## 订阅

这个周刊每周五发布，同步更新在[阮一峰的网络日志](http://www.ruanyifeng.com/blog)和[微信公众号](http://weixin.sogou.com/weixin?query=%E9%98%AE%E4%B8%80%E5%B3%B0%E7%9A%84%E7%BD%91%E7%BB%9C%E6%97%A5%E5%BF%97)。

微信搜索“阮一峰的网络日志”或者扫描二维码，即可订阅。

![](https://cdn.beekka.com/blogimg/asset/202103/bg2021030402.jpg)

（完）

