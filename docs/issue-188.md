# 科技爱好者周刊（第 188 期）：音乐是反社交

这里记录每周值得分享的科技内容，周五发布。

本杂志开源（GitHub: [ruanyf/weekly](https://github.com/ruanyf/weekly)），欢迎提交 issue，投稿或推荐科技内容。

周刊讨论区的帖子[《谁在招人？》](https://github.com/ruanyf/weekly/issues/2092)，提供大量程序员就业信息，欢迎访问或发布工作/实习岗位。

## 封面图

![](https://cdn.beekka.com/blogimg/asset/202112/bg2021120911.webp)

伦敦自然历史博物馆为霸王龙的模型，穿上了圣诞节毛衣。毛衣的大小是普通毛衣的12倍。（[via](https://www.visualcapitalist.com/visualizing-the-abundance-of-elements-in-the-earths-crust/)）

## 本周话题：音乐是反社交

Spotify 的前产品经理有一天在[推特](https://twitter.com/jherskowitz/status/1466078600822677513)发言，总结自己这些年在音乐行业的心得。

第一条心得就很震撼。

> “本质上，音乐不是社交产品，而是反社交的。”

![](https://cdn.beekka.com/blogimg/asset/202112/bg2021121001.webp)

我看到以后，愣了一下，马上意识到，这句话说得太对了。**音乐和社交是对立的，音乐产品不合适加入社交功能。**

听音乐的时候，绝大多数都是一个人，而且都是静静地听，没人喜欢在吵闹的环境听。音乐是一种心灵对话，是孤独时候的陪伴，不具有社交性。

![](https://cdn.beekka.com/blogimg/asset/202112/bg2021121502.webp)

聚会时，大家不会一起听音乐。音乐从来不是社交活动，相比之下，美食、逛街、旅游、甚至看电影，这些才是社交行为，一个人去做没有乐趣。

音乐不具有社交性，还有一个原因，那就是很少有人对你听什么音乐感兴趣。你真的在意，朋友喜欢听哪一首歌吗？

因此，音乐产品应该是个人化产品，关注的重点是个人使用，而不应该加入社交元素。

世界最大的两个音乐应用 Spotify 和 Apple Music 都没有社交元素，界面都很清爽，几乎没有听音乐以外的功能。

![](https://cdn.beekka.com/blogimg/asset/202112/bg2021121504.webp)

![](https://cdn.beekka.com/blogimg/asset/202112/bg2021121505.webp)

它们有全世界最庞大的用户群，最精准的兴趣匹配算法，却没有提供任何的交友和社区功能。这是他们的产品经理没有想到，还是觉得就不应该添加这种功能？

形成鲜明对照的是，国内的音乐大厂“网易云音乐”，主打功能就是社交。打开它的 App，处处都有社交元素，可以查看每首歌的网友点评，收听他人的歌单和电台，还可以加好友、聊天、建社交圈。

![](https://cdn.beekka.com/blogimg/asset/202112/bg2021121506.webp)

网易云音乐的官方定位是“一个快速发展的云生态音乐社区”，口号是“和超8亿有趣的人听歌看评论”，甚至它的公司名就叫“云村”（cloud village），比喻大家相聚在云上。所以，他们想做的不是音乐 App，而是一款有音乐功能的社交 App。

![](https://cdn.beekka.com/blogimg/asset/202112/bg2021121507.webp)

社交 App 没有什么不好，但是我非常怀疑，音乐和社交这两个对立的东西，融合得了吗？到头来，可能两头都不讨好。

加入了社交功能的音乐应用，就像一个集市，喧闹而嘈杂，充满了你不需要的功能，而你真正想找的，只是一个角落，安静地听一会歌。

## Apifox 介绍

本周向大家介绍一款优秀的国产软件 [Apifox](https://www.apifox.cn/)，它可以解决 API 开发的一大痛点。

![](https://cdn.beekka.com/blogimg/asset/202112/bg2021121301.webp)

大家知道，现在大部分软件都是**服务架构**（客户端 + 后端服务）。程序员的日常工作，就是跟各种服务的 API 打交道，主要用到下面几个工具。

> - Swagger（后改名 OpenAPI）：用于 API 设计。
> - Postman：调试 API。
> - Mock 工具：模拟 API 的返回数据，用于测试。
> - JMeter：API 性能压测。

![](https://cdn.beekka.com/blogimg/asset/202111/bg2021110902.jpg)

这些工具虽然都很强大，但有一个很大的痛点，就是数据不通用。每个工具都有自己的格式、界面和流程，互相切换的时候，非常痛苦。举例来说，你在 Swagger 设计好 API，到了 Postman 又得重新输入一遍，写单元测试还得再写一遍。效率低下，大型项目有成百上千个 API，根本无法统一管理。

Apifox 就是想解决这个问题，**把 API 相关的开发需求都做在一个工具里面。**

> Apifox = Postman + Swagger + Mock + JMeter

上面是它的宣传口号，四合一，非常雄心勃勃。目前看起来，它做得不错，确实能做到这个目标。

它的用法很简单，[下载](https://www.apifox.cn/)桌面端应用（Windows/Mac/Linux 都支持），然后你可以导入 Swagger 格式的 API 定义，这一套定义可以用来生成文档、测试接口、Mock 数据等等，完全是通用的。当然，你也可以直接在里面设计 API，再导出给 Swagger 使用。

![](https://cdn.beekka.com/blogimg/asset/202112/bg2021121302.webp)

Apifox 的界面跟 Postman 基本一致，所有功能全部提供，并且保证兼容性，可以轻松上手。界面和[文档](https://www.apifox.cn/help/)都是中文，包含详细的教程，特别符合中国程序员的需要。

![](https://cdn.beekka.com/blogimg/asset/202111/bg2021110904.webp)

此外，它还有几个很赞的特色。

（1）**自动生成 API 文档**，跟 Javadoc 的作用类似，可以对外发布。
 
（2）不用写任何 Mock 规则，**自动模拟 API 返回的数据**，比如时间、地址、人名、金额等等。
 
（3）不用写断言测试，**自动校验 API 返回的数据结构**，是否跟定义一致。
 
![](https://cdn.beekka.com/blogimg/asset/202112/bg2021121303.webp)
 
（4）内置了一个脚本系统，可以用来自动登录，或者动态修改数据。此外，支持命令行调用，便于持续集成。
 
（5）自动生成130多种语言或框架的 API 调用代码，省去为每个接口写 CRUD 代码的痛苦。

Apifox 是免费的，采用 SaaS 模式，只要在官网注册一个账号就可以使用，没有任何费用。如果你们公司想部署一个内网版本，它也可以私有化部署，但这需要向官方购买授权。

欢迎大家试用 [Apifox](https://www.apifox.cn/help/app/getting-started/)，不管你是前端开发还是后端开发，只要项目是服务架构，它可能会大大提升你的开发效率。

## 科技动态

1、[钻井平台主题乐园](https://www.chinanews.com/tp/hd2011/2021/10-27/1006858.shtml)

![](https://cdn.beekka.com/blogimg/asset/202111/bg2021110713.jpg)

沙特阿拉伯是世界主要石油生产国，有很多废弃的油田。该国计划将多个海上石油钻井平台串连起来，建造一个主题公园，总面积达到15万平方米。

![](https://cdn.beekka.com/blogimg/asset/202111/bg2021110714.jpg)

![](https://cdn.beekka.com/blogimg/asset/202111/bg2021110715.jpg)

它包括一个巨大的摩天轮、三家酒店和11家世界一流餐厅，全都在海上，其中一家是水下餐厅，计划在2030年左右完工。

![](https://cdn.beekka.com/blogimg/asset/202111/bg2021110716.jpg)

![](https://cdn.beekka.com/blogimg/asset/202111/bg2021110717.jpg)

2、[激光武器](https://world.huanqiu.com/article/460VB7AbrQ2)

![](https://cdn.beekka.com/blogimg/asset/202112/bg2021121602.webp)

![](https://cdn.beekka.com/blogimg/asset/202112/bg2021121603.webp)

本周12月14日，美国海军进行了一次海上激光武器试验，从军舰上发射激光，成功摧毁了几百米以外的一艘小船。这是有报道的第一次可用于实战的激光武器试验。

![](https://cdn.beekka.com/blogimg/asset/202112/bg2021121605.webp)

上图中央就是波特兰号军舰的激光发射器。

![](https://cdn.beekka.com/blogimg/asset/202112/bg2021121604.webp)

激光武器的优点是速度极快、命中率高，缺点是它非常耗电，只能在发电量大的军舰上使用，而且它只能在晴天使用，因为激光是直线的，中间不能有阻挡，遇到雨雪云雾，都会被空气里面的水汽和杂质反射掉。也是因为这个原因，它对太远的物体无效，因为激光强度会快速衰竭。

3、[打车亭](https://www.autohome.com.cn/news/202112/1230850.html)

![](https://cdn.beekka.com/blogimg/asset/202112/bg2021121609.webp)

随着手机的流行，街头电话亭越来越没人使用。上海开始尝试，将电话亭改造成打车亭。

![](https://cdn.beekka.com/blogimg/asset/202112/bg2021121610.webp)

里面放置了“一键叫车智慧屏”，用户仅需输入手机号码，填好验证码，出租车就派好了，并且会显示多少时间后到车，用户只需在电话亭等待就行了。

如果老年用户没有手机，可以拨打114，由人工坐席代为叫车。此外，这个打车亭还提供连接 WIFI 上网、给手机充电等功能，并可拨打电话免费通话三分钟。

![](https://cdn.beekka.com/blogimg/asset/202112/bg2021121611.webp)

4、[全息影像](https://www.bbc.com/news/business-59577341)

![](https://cdn.beekka.com/blogimg/asset/202112/bg2021121606.webp)

今年4月举行的上海钟表展，由于疫情，一个瑞士手表商无法来中国参展。他最终决定采用 3D 全息影像代替。

他的展位上，放置了一个影像柜，里面是真人大小的全息影像，采用 4K 分辨率与观众互动（上图）。最棒的是，这种技术可以做到实时互动，也就是说，他可以通过 3D 影像，实现与他人交谈，就好像来到现场参会一样。

![](https://cdn.beekka.com/blogimg/asset/202112/bg2021121607.webp)

专家认为这种技术的现场感更强，能够 3D 还原全身的一举一动和表情，因此有希望在将来取代视频通话，实现视频会晤。

5、[苹果的第一台电脑](https://www.theguardian.com/technology/2021/nov/08/apple-1-computer-auction)

![](https://cdn.beekka.com/blogimg/asset/202111/bg2021111101.webp)

苹果公司的第一台电脑是 Apple I，生产了200台，目前存世的只有60台左右，其中一台这个月拍卖，价格达到40万美元。

![](https://cdn.beekka.com/blogimg/asset/202111/bg2021111001.jpg)

1976年，工程师沃兹尼亚克设计出一块革命性的个人电脑电路板，乔布斯知道以后，决定成立一家公司来销售，这就是苹果公司的起源。有一张著名的乔布斯和沃兹尼亚克的早期合影，两人面对的就是 Apple I。

![](https://cdn.beekka.com/blogimg/asset/202111/bg2021111002.jpg)

最早的决定是只出售电路板，后来才改为出售整机，所以 Apple I 的外设非常简陋，显示器是家用黑白电视机，鼠标和机箱都是木盒。在它的基础上，1977年苹果公司推出了升级版 Apple II 个人电脑，取得了空前成功。

## 文章

1、[一家中国内陆电池工厂的薪资](https://zhuanlan.zhihu.com/p/442111383)（中文）

![](https://cdn.beekka.com/blogimg/asset/202112/bg2021120711.webp)

国内动力电池龙头大厂在四川宜宾市招聘蓝领工人，结果竟然来了超过3000名求职者，而且还有从云南，甘肃等地专程来应聘的。它的薪资是多少？对当地就业市场有什么影响？

2、[理解 Log4Shell 漏洞](https://sspai.com/post/70394)（中文）

Log4Shell 是近期爆出的一个非常严重的安全漏洞，影响使用极广的 Java 模块 Log4j。本文通俗地解释这个漏洞到底是怎么回事，它是怎么攻击的。

3、[Meta 开放虚拟世界 Horizon Worlds](https://www.ifanr.com/1459851)（中文）

![](https://cdn.beekka.com/blogimg/asset/202112/bg2021121114.webp)

脸书公司改名 Meta 以后，发布了第一个元宇宙产品，叫做 Horizon Worlds，很像一个虚拟社区。本文是对 Horizon Worlds 的初步介绍。

4、[如何创建你的第一个 NFT](https://medium.com/@contact_9164/how-to-create-your-first-nft-illustrated-with-shitty-stock-photos-bec48c91b4b9)（英文）

NFT 到底是什么？本文是从技术上做了一个比较通俗的解释，而且给出了创建 NFT 的方法。

5、[世界第一部 RISC-V 手机可能即将问世](https://tuxphones.com/sipeed-rv64-first-risc-v-rv64-phone-linux-2022-2023/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202111/bg2021112516.jpg)

RISC-V 是一种没有版权的 CPU 指令集，很多公司正在基于它设计新的 CPU 架构，摆脱专有的 x86 和 ARM 架构。RISC-V CPU 过去几年取得了重大进展，第一部基于它的手机可能即将问世，操作系统采用了安卓的移植。

6、[我的猫是否图灵完备？](https://belaycpp.com/2021/11/24/is-my-cat-turing-complete/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202111/bg2021112517.jpg)

作者用自己的猫作为例子，解释什么是图灵完备性。

7、[malloc() 是否分配成功？](https://lemire.me/blog/2021/10/27/in-c-how-do-you-know-if-the-dynamic-allocation-succeeded/)（英文）

C 语言里面，malloc() 用于分配一段内存。这篇短文解释为什么 malloc() 分配过大的内存（比如 1TB），会显示分配成功。

8、[我的日志最佳实践](https://tuhrig.de/my-logging-best-practices/)（英文）

作者谈了自己生成应用程序日志的一些做法。

## 工具

1、[Swift 游乐场](https://www.apple.com/swift/playgrounds/)（Swift Playgrounds）

![](https://cdn.beekka.com/blogimg/asset/202112/bg2021121616.webp)

苹果公司最新发布的编程学习软件，内置教程，采用 Swift 作为教学语言，制作得非常精美。

它同时也是一个 IDE，有 Mac 和 iPad 两个版本。有史以来第一次，你可以在 iPad 上面开发 iOS 应用，并发布到苹果商店。

2、[微软 TTS（2021版）](https://techcommunity.microsoft.com/t5/azure-ai-blog/azure-text-to-speech-updates-at-build-2021/ba-p/2382981)

![](https://cdn.beekka.com/blogimg/asset/202112/bg2021120917.webp)

微软最新的机器语音库，逼真地吓人。大家可以听听官方网页的示例，根本听不出是机器在念。播音员的这个职业，以后大概要消失了。

3、[Btop++](https://github.com/aristocratos/btop)

![](https://cdn.beekka.com/blogimg/asset/202109/bg2021092601.jpg)

Linux 程序，在命令行实时显示系统的各种负载情况，是`top`命令的强化版。

4、[RSS-Bridge](https://github.com/RSS-Bridge/rss-bridge)

![](https://cdn.beekka.com/blogimg/asset/202109/bg2021092602.jpg)

一个开源的 Web 应用，用于为常见网站生成 RSS。

5、[JavaScript 混淆器](https://obfuscator.io/)

![](https://cdn.beekka.com/blogimg/asset/202111/bg2021112901.webp)

一个 JavaScript 代码混淆工具（obfuscator），将代码转成难以阅读的形式。

6、[无法下载此图片](https://youcantdownloadthisimage.online/)

![](https://cdn.beekka.com/blogimg/asset/202111/bg2021112801.webp)

这是一个演示，如何生成一张可以正常显示、但永远无法下载完成的图片，原理是服务器不结束连接，不断发送数据。

7、[md-block](https://md-block.verou.me/)

![](https://cdn.beekka.com/blogimg/asset/202111/bg2021112803.webp)

一个 Web Component 组件，可以在 HTML 网页里面加载 Markdown 文档。

8、[Denigma](https://denigma.app/)

![](https://cdn.beekka.com/blogimg/asset/202112/bg2021121617.webp)

一个实验性的在线工具，你贴入一段代码，它自动生成这段代码的文字描述，不过是英文的。它还有 VS Code 插件版。

9、[Tuner](https://github.com/louis77/tuner)

![](https://cdn.beekka.com/blogimg/asset/202111/bg2021113006.webp)

一个极简化的互联网电台收听软件。

10、[Mall-Cook](https://github.com/wangyuan389/mall-cook)

![](https://cdn.beekka.com/blogimg/asset/202112/bg2021121601.webp)

一个可视化的商城搭建平台，不用编写代码生成全站，基于 Vue.js 开发。（[@wangyuan389](https://github.com/ruanyf/weekly/issues/2113) 投稿）

## 资源

1、[2021年最佳科学照片](https://www.nature.com/immersive/d41586-021-03521-3/index.html)

![](https://cdn.beekka.com/blogimg/asset/202112/bg2021121608.webp)

《自然》杂志评选了本年度的最佳科学照片，上面是其中的一张，科学家在电子显微镜下面，使用纳米分子完成的《纳米海滩》画作。

2、[互动式 Python 入门教程](https://futurecoder.io/)

![](https://cdn.beekka.com/blogimg/asset/202110/bg2021100401.jpg)

一个 Python 入门的英文教程，针对初学者，从如何使用命令行教起。最大的特点是提供网页互动环境，让用户直接在网页上动手输入示例，查看运行结果。

3、[违反直觉的事实](https://axisofordinary.substack.com/p/the-most-counterintuitive-facts-in)

本文列出数学、计算机科学、物理学等学科的一些违反直觉的事实，比如存在表面积无限、但是体积有限的物体。

4、[日本东北部海啸地图](https://www.google.com/maps/d/u/0/viewer?mid=1caLBVPL6o8RgXsCS7q4MVGmBGQ0SSOzH)

![](https://cdn.beekka.com/blogimg/asset/202111/bg2021111501.jpg)

一张用户创建的谷歌地图图层，标出了从2011年到2021年的十年间，日本东北部有视频记录的所有海啸。每个点代表一次海啸，点击后可以看到该次海啸的视频录像。

5、[iOS 工程师的学习资源](https://kean.blog/post/learn-ios)

![](https://cdn.beekka.com/blogimg/asset/202111/bg2021111502.jpg)

本文列出了 iOS 工程师的一些英文的学习资源。

## 图片

1、[“签名”电路板](https://www.linkedin.com/posts/willahmed_we-left-a-message-for-amazon-etc-on-every-activity-6844369295896522753-9-O7/)

国外一家可穿戴硬件公司，知道竞争对手会拆开他们的设备查看，所以特别在电路板上加了“签名”。

打开设备，电路板的覆盖片上印着一行字：“别想拷贝我们，我们会赢。”

![](https://cdn.beekka.com/blogimg/asset/202109/bg2021092108.jpg)

电路板背面的每个焊点下面，则印着所有开发团队成员的姓名缩写。

![](https://cdn.beekka.com/blogimg/asset/202109/bg2021092109.jpg)

2、[消失的男孩](https://www.geogebra.org/m/hypuahfc)

上面的网址有一个1906年的欧洲小玩具。页面顶部有一个绿色滑块，可以调节指针的指向。

当指针指向 A 点时，下面的圆盘有13个小男孩。

![](https://cdn.beekka.com/blogimg/asset/202109/bg2021092502.jpg)

当指针指向 B 点时，内圈的圆盘滚动，只剩下12个小男孩。

![](https://cdn.beekka.com/blogimg/asset/202109/bg2021092503.jpg)

为什么消失了一个男孩？

## 文摘

1、[你的估计需要乘以 π](https://web.archive.org/web/20170603123809/http://www.tuicool.com:80/articles/7niyym)

有一种说法，你的预估乘以 π，就会得到真实的估计。

这种说法有一定的道理，我可以用数学证明给大家看。

一切顺利的情况下，从 A 点到 B 点的路线是一条直线。没有遇到困难时，就是两点之间直线最短。

![](https://cdn.beekka.com/blogimg/asset/202109/bg2021092811.jpg)

但是现实中，很多事情都是不顺利的。你会遇到各种各样的困难，你会迷失方向，路线不可能是直线，而是曲线。

![](https://cdn.beekka.com/blogimg/asset/202109/bg2021092812.jpg)

平均来说，实际的路线长度往往是理想路线的 π 倍。

![](https://cdn.beekka.com/blogimg/asset/202109/bg2021092813.jpg)

这意味着，你预估一件事的难度是1，实际难度可能是3；你预估需要一个月完成的项目，实际需要的时间可能是三个月。

## 言论

1、

十年前，我写了一篇文章，题目是《为什么比特币会失败？》。十年过去了，比特币活得很好，价格上涨了许许多多倍。

我还是不认为自己判断错了，只是我忽略了一点：人们真的、真的、真的想要它。我现在意识到，一个项目的成败，不取决于它是否合理，而是取决于人们是否愿意相信该项目。

-- [《回首十年前的文章》](https://apenwarr.ca/log/20211117)

2、

在互联网上，大公司的圈地越来越大，不登录的情况下能在网上做的事情越来越少。

许多人仍然以为，互联网是一个充满未知风险和黑客出没的匿名场所，殊不知现实是，现在的互联网越来越必须身份验证后才能使用。

-- [《互联网匿名的终结》](https://www.thedrum.com/opinion/2021/11/19/what-the-end-anonymity-means-consumers-and-brands)

3、

很多乘客抱怨，伦敦到曼彻斯特的火车旅程耗时太长。显而易见的解决方案是，让火车行驶得更快，但这样很贵，可能要花几十亿英镑改造。

其实还有更简单的方法，就是改变乘客的心理感受，让他觉得时间过得更快，比如提高列车上的 WIFI 网速，或者提供更多的餐饮选择。

-- [《如何升级火车的乘客体验？》](https://amadeus.com/en/insights/blog/rail-customer-experience-ted-talks-amadeus-rail-forum)，英国奥美广告公司的副董事长 Rory Sutherland

4、

年轻时，你没有背负太大的责任，想做什么就应该去做。年龄大了，你背负的责任也多了，这带来了顾虑，即使是很好的机会，你也不得不反复权衡和计划。

-- [Hacker News 读者](https://news.ycombinator.com/item?id=29306325)

5、

我的一些朋友认为，每两到三年换一次工作，是获得成功的最快方式。

-- [Hacker News 读者](https://news.ycombinator.com/item?id=29388921)

## 历史上的本周

2020年（第 137 期）：[Slack 被收购，以及企业的技术选型](https://www.ruanyifeng.com/blog/2020/12/weekly-issue-137.html)

2019年（第 85 期）：[美国为什么不是乱哄哄？](https://www.ruanyifeng.com/blog/2019/12/weekly-issue-85.html)

2018年（第 34 期）：[身份证的最终解决方案：人体植入芯片](https://www.ruanyifeng.com/blog/2018/12/weekly-issue-34.html)

## 订阅

这个周刊每周五发布，同步更新在[阮一峰的网络日志](http://www.ruanyifeng.com/blog)和[微信公众号](http://weixin.sogou.com/weixin?query=%E9%98%AE%E4%B8%80%E5%B3%B0%E7%9A%84%E7%BD%91%E7%BB%9C%E6%97%A5%E5%BF%97)。

微信搜索“阮一峰的网络日志”或者扫描二维码，即可订阅。

![](https://cdn.beekka.com/blogimg/asset/202103/bg2021030402.jpg)

（完）
