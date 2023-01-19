# 每周分享第 29 期

这里记录过去一周，我看到的值得分享的东西，每周五发布。

欢迎投稿，请前往 GitHub 的 [ruanyf/weekly](https://github.com/ruanyf/weekly) 提交 issue。

![](https://www.wangbase.com/blogimg/asset/201811/bg2018110201.jpg)

1968年，计算机学家梅尔文·E·康威发表了一篇著名[论文](http://www.melconway.com/Home/Committees_Paper.html)，后来被称为[康威定律](https://en.wikipedia.org/wiki/Conway%27s_law)（Conway's law）。

> “软件系统的架构，反映了公司的组织结构。”

这个定律说，公司的行政组织架构，会反映在软件产品之中。举例来说，如果四个小组一起写编译器，那么这个编译器内部一定会分成四个环节。很多实证研究，都证实了这个定律。

为什么这样？原因是大公司里面，主管的地位主要取决于他的团队规模和预算。团队越大、预算越多，主管在公司里面的地位就越高，这就是为什么主管都会争取尽可能大的团队和预算。问题在于，团队变得越来越大时，你不得不做出安排，让每个成员有事可做。因此，当团队的所有人都在做一个项目时，随着组织结构的膨胀，软件的架构不得不跟着膨胀，以容纳所有的人手。

根据康威定律，大公司的大型项目一定会有复杂架构，哪怕这种架构可能是不必要的。另一方面，许多程序员[崇拜复杂性](https://www.innoq.com/en/blog/do-we-worship-complexity/)，认为软件越复杂，表示作者的能力越高。这导致了这样一种状况：大公司（比如阿里腾讯）由于组织架构复杂，会做出复杂软件，然后大家认定，软件必须那么复杂，为了向业内前进水平看齐，自己的软件也必须模仿他们的复杂性。这种想法是不对的，仅仅因为阿里腾讯那样做，并不意味着你也应该那样做，他们无法摆脱复杂性，并不意味着你也需要那种复杂性。

## 新闻

1、[达芬奇的树干定律](https://phys.org/news/2012-01-leonardo-da-vinci-tree.html)

![](https://www.wangbase.com/blogimg/asset/201811/bg2018110202.jpg)

500年前，达芬奇发现了一个现象，树干的横截面等于树枝横截面的总和。也就是说，在同一个高度，把所有树枝剪下来，紧紧捆在一起，正好等于树干的大小。达芬奇无法解释这种现象。

现在，在一项新的研究中，来自法国普罗旺斯地区的 Aix-Marseille 大学的物理学家 Christophe Eloy 提出，树木的这种结构可能是抵抗大风引起的压力的最佳选择。

2、[不要多看苹果手机](https://www.engadget.com/2018/10/13/police-told-to-avoid-looking-at-iphone-x/)

![](https://www.wangbase.com/blogimg/asset/201811/bg2018110203.jpg)

新一代 iPhone 都采用 FaceID 解锁。如果你不是手机主人，却试图通过 FaceID 解锁，超过五次以后，手机就会锁定。

最近，美国警方发布了通知，告诉所有执法人员不要多看嫌疑犯的 iPhone，防止手机锁定，苹果公司又不提供解锁密码，就很麻烦了。

3、[机器人跑酷](https://theblogroom.com/advanced-humanoid-rescue-robot-learns-parkour/)

![](https://www.wangbase.com/blogimg/asset/201811/bg2018110204.jpg)

波士顿动力公司放出了最新视频，他们的机器人已经学会跑酷了。奔跑过程中，它看到障碍物，会一跃而过。

这个机器人身高1.45米，重量74.8公斤，采用电池供电，带有激光雷达和立体摄像头，可以负重11.3公斤。

4、[Apple Watch 破案](https://tech.sina.cn/t/2018-10-15/detail-ifxeuwws4405681.d.html)

![](https://www.wangbase.com/blogimg/asset/201811/bg2018110205.jpg)

沙特阿拉伯的一个知名记者在土耳其失踪了，土耳其警方认为他被沙特政府暗杀了。

该记者进入沙特领事馆的时候，打开了 Apple Watch 手表的录音功能，录音文件会自动上传到 iCloud 云端。然后，他将一支 iPhone 留给未婚妻，iCloud 云端文件会跟这支 iPhone 同步。如果他失踪了，外界就能从同步的录音文件得知发生了什么事。这些录音表明，他在领事馆里面遭到严刑拷打，最后被杀害。

5、[安卓品牌的消失](https://9to5google.com/2018/10/11/the-dirty-word-android-dead-made-by-google/)

![](https://www.wangbase.com/blogimg/asset/201811/bg2018110206.jpg)

有人注意到，10月9日的谷歌新品发布会上，谷歌一次也没有提到安卓。它主推的是 Pixel 3 手机和 ChromeOS 设备，底层的安卓系统根本没提。甚至可穿戴系统 Android Wear，都重新命名为 Wear OS。

有人因此猜测，谷歌可能只想把安卓作为一个技术名词，而不想向普通消费者推广这个品牌。因为无数厂商都生产安卓手机，谷歌自家的产品无法体现出差异。另外，跟 iPhone 相比，安卓这个词往往让人联想到低档手机。回顾历史，2017年新品发布会提到了一次安卓，2016年提到了六次。当然，面向开发者的谷歌 I/O 2018大会提到了无数次安卓。

6、[胶水易拉罐](https://www.telegraph.co.uk/news/2018/09/07/carlsberg-glues-beer-cans-together-becoming-first-brewery-abandon/)

![](https://www.wangbase.com/blogimg/asset/201811/bg2018110207.jpg)

易拉罐饮料往往用塑料膜包装在一次，比如24个易拉罐会封装成一箱。这样容易造成塑料污染，塑料膜拆下来就没用了，又没法回收和降解，对环境的影响很大。

丹麦著名啤酒品牌嘉士伯，现在推出了创新包装，不再使用塑料膜封装易拉罐，而是用胶水将它们粘合在一起。取出的时候，只需掰开易拉罐即可。

7、[电动飞机](https://www.bloomberg.com/hyperdrive)

![](https://www.wangbase.com/blogimg/asset/201811/bg2018110208.jpg)

波音公司支持的创业公司 Zunum Aero，计划在2022年交付首架混合动力飞机，每架飞机最多可容纳12名乘客。

这种飞机主要采用电力，没有发动机的轰鸣声，由电动机驱动，传统的燃料动力马达将作为备用系统。电池组安装在飞机的机翼中。这种飞机将支持700英里（1100公里）的航线，远期目标是能够飞行1,000英里。

8、[巴西的神秘洞穴](http://blogs.discovermagazine.com/crux/2017/03/28/paleoburrows-south-america)

![](https://www.wangbase.com/blogimg/asset/201811/bg2018110209.jpg)

科学家在巴西发现一些圆形的洞穴，洞穴壁上充满了挖掘了痕迹。

![](https://www.wangbase.com/blogimg/asset/201811/bg2018110210.jpg)

世界上没有任何地质过程，会产生长圆形或椭圆形横截面的隧道，所以科学家认为这些洞穴不是地质原因产生的，也不是人类挖掘的，而是某种已经灭绝的大型动物用爪子挖掘的，很可能是一种巨型的地面树懒。

![](https://www.wangbase.com/blogimg/asset/201811/bg2018110211.jpg)

9、[工作头罩](https://www.dezeen.com/2018/10/17/panasonics-wearable-blinkers-concentrate-open-plan-offices-technology/)

![](https://www.wangbase.com/blogimg/asset/201811/bg2018110212.jpg)


![](https://www.wangbase.com/blogimg/asset/201811/bg2018110213.jpg)

开放式办公室，人们往往需要戴耳机来保证注意力集中。现在，松下推出了一款工作头罩，不仅可以阻断外界的声音，还可以让你看不到其他地方，只能看到面前的屏幕。

10、__一句话新闻__

* [GitHub](https://css-tricks.com/introducing-github-actions/) 引入 Actions 功能，可以通过图形界面指定每一步的操作过程，作为持续集成的解决方案。
    
* 电动车需求猛增，导致电池材料的[镍和锂](https://www.nature.com/articles/d41586-018-05752-3)价格猛涨。如果所有车辆都改成电动车，地球上的镍和锂都用来造电池还不够，我们必须找到新的电池材料。
    
* [地质学家](https://www.sciencealert.com/seismic-j-phase-shear-wave-detection-reveals-elastic-solid-inner-core)根据对地震波的分析，第一次证实地球的内核是固态核，而不是液态核。

## 教程

1、[如何阅读 RFC？](https://web.archive.org/web/20180916071340/https://www.mnot.net/blog/2018/07/31/read_rfc)（英文）

RFC 是很多互联网协议的标准，但是它是文本文件，不太容易阅读。本文介绍 RFC 文档的相关知识。

2、[奇特的代码缩进风格](https://swalladge.id.au/archives/2018/10/15/alternative-code-styles/)（英文）

![](https://www.wangbase.com/blogimg/asset/201811/bg2018110214.jpg)

本文总结了几种奇特的缩进方式。比如，每一层缩进都是前两层缩进之和，这就叫做斐波拉切缩进。

3、[如何使用 Flutter 制作一个 iPhone 计算器？](https://hackernoon.com/how-to-build-iphone-calculator-using-flutter-fe934ce78d7e)（英文）

![](https://www.wangbase.com/blogimg/asset/201811/bg2018110229.jpg)

Flutter 开发的一个简单教程。

4、[TensorFlow.js 自动化 Chrome 恐龙游戏](https://heartbeat.fritz.ai/automating-chrome-dinosaur-game-part-1-290578f13907)（英文）

本文介绍如何使用 TensorFlow.js 进行深度学习，自动玩 Chrome 浏览器的恐龙跳跃游戏。

5、[神奇物理学：树木中的水](http://www.science4all.org/article/the-amazing-physics-of-water-in-trees/)（英文）

一个有趣的问题是，树木为什么会长得这么高？加州红杉可以长到100米，到底什么决定了树木长高的极限？

有一点是肯定的，树木需要将水从根部运送到顶部。如果树高100米，树木内部有什么机制可以将水运送得这么高？要知道，一个大气压的情况下，吸管最多只能将水吸到10米的高度，要达到100米，树的内部难道存在10个大气压？

6、[文本数据如何储存在 Canvas 图片？](https://www.igorkromin.net/index.php/2018/09/06/hijacking-html-canvas-and-png-images-to-store-arbitrary-text-data/)（英文）

网页从服务器拿到数据，需要保存下来，但是不想存在 Cookie 和 LocalStorage，怎么办？这篇文章的方法就是动态生成一张 Canvas 的 PNG 图片，将数据存在里面。

7、[GraphQL 入门教程](https://medium.freecodecamp.org/a-beginners-guide-to-graphql-60e43b0a41f5)（英文）

本文介绍 GraphQL 的概念和优点，演示如何用 Express.js 搭建一个 GraphQL 后端。

8、[HTML 网页的 head 元素 指南](https://htmlhead.dev/)（英文）

网页的 `<head>` 元素可以放置很多东西，本文列出了其中一些主要的内容，可以当作参考手册。

9、[Nginx 如何设置 IPv6 网站](https://bubblin.io/blog/ipv6-nginx)（英文）

本文介绍如何配置网站，接受 IPv6 的访问。

10、[React Router v4 教程](https://medium.com/@pshrmn/a-simple-react-router-v4-tutorial-7f23ff27adf)（英文）

前端框架 React 的路由库教程，提供在线代码运行示例，例子简洁能说明问题。（@[Anderson-Liu](https://github.com/ruanyf/weekly/issues/25) 投稿）

## 工具

1、[Pentax SDK](https://www.ephotozine.com/article/ricoh-releases-sdks-for-pentax-cameras-32298)

Pentax 相机开放了 SDK，开发者可以自己编写程序，从 PC 或手机控制相机。

2、[Lab62](https://github.com/harmankang/Lab62)

一个简单的人类可读的随机 ID 生成库。

3、[Colorblindly](https://github.com/oftheheadland/Colorblindly)

![](https://www.wangbase.com/blogimg/asset/201811/bg2018110216.jpg)

Colorblindly 是一个浏览器的色盲插件，让所有图片转成色盲患者看到的样子。上图左侧是正常人看到的世界，右侧是蓝色色盲的人看到的世界。

4、[Polar](https://getpolarized.io/)

离线浏览器，可以保存网页在本地浏览，还可以添加标记和注释。

5、[zxcvbn](https://github.com/dropbox/zxcvbn)

评估密码强度的 JS 库，强度越强，密码越不容易破解。

6、[微软 Access 的开源替代库](https://opensource.com/alternatives/access)

Access 是一种桌面数据库，本文列出了四种开源替代品。

7、[lip-reading-deeplearning](https://github.com/astorfi/lip-reading-deeplearning)

![](https://www.wangbase.com/blogimg/asset/201811/bg2018110217.jpg)

一个使用深度学习，从嘴唇变化识别语言的库。

8、[重定向侦测](http://redirectdetective.com/)

该网站用来查看某个网址的重定向（redirect）情况。

9、[AdGuard](https://adguard.com/en/blog/introducing-adguard-home/)

![](https://www.wangbase.com/blogimg/asset/201811/bg2018110218.jpg)

美国一家创业公司发布家用 DNS 服务器，可以提供局域网的 DNS 服务，最大功能是自动屏蔽广告。它的软件是[开源](https://github.com/AdguardTeam/AdGuardHome#installation)的，也可以安装在其他硬件上（比如树莓派）。（[@ctolib](https://github.com/ruanyf/weekly/issues/14) 投稿）

10、[百度脑图](http://naotu.baidu.com/)

一个免费、开源、好用的思维导图工具。[离线版](https://github.com/NaoTu/DesktopNaotu/)可以跨平台使用，支持 Windows、Linux、Mac OS。（[@topcss](https://github.com/ruanyf/weekly/issues/20) 投稿）

## 资源

1、[轻量级网站列表](https://github.com/mdibaiee/awesome-lite-websites)

很多网站有一个轻量级版本（lite version），这个仓库收集这些网站的清单。

2、[Common Lisp 实战教程](http://www.gigamonkeys.com/book/)

![](https://www.wangbase.com/blogimg/asset/201811/bg2018110219.jpg)

开源的 Common Lisp 教程。

3、[TensorFlow-Course](https://github.com/open-source-for-science/TensorFlow-Course)

针对新手的 TensorFlow 教程。

4、[基于模型的机器学习](http://mbmlbook.com/)

开源电子书，通过真实案例掌握机器学习。

5、[AWS 的所有 IP 地址](https://ip-ranges.amazonaws.com/ip-ranges.json)

Amazon 公司提供一个 JSON 文件，列出 AWS 服务用到的所有 IP 地址。

6、[CrashCourse](https://www.youtube.com/user/crashcourse) （视频）

Youtube上有一个 CrashCourse 系列课程，介绍各个学科的比较基础的知识，对初学者很有用。不仅有理科的数据、计算机科学，也有生物、历史之类的课程。B 站有 [CrashCourse 字幕组](http://space.bilibili.com/290704043)。（@[chixuchao](https://github.com/ruanyf/weekly/issues/23) 投稿）

## 文摘

1、[为什么将来你不再需要购买汽车？](https://www.bbc.com/news/business-45786690)

越来越多的技术分析师预测，在不到20年的时间里，我们都将不再拥有汽车。因为类似 Uber 的平台将会提供自动驾驶的电动车网络，它是如此便宜，所以你决定不购买自己的汽车。

你可能觉得这种预测太大胆了，那就让我们想想汽车取代马车的速度。下面是1900年纽约第五大道的照片。

![](https://www.wangbase.com/blogimg/asset/201811/bg2018110220.jpg)

照片里面一辆汽车也没有，都是马车。

再看看1913年的这张照片。

![](https://www.wangbase.com/blogimg/asset/201811/bg2018110221.jpg)

照片里面一匹马也没有，发生了什么事？

原来1908年，福特汽车公司第一辆 Model T Ford 下线了，使得汽车的价格降低到普通人可以接受的地步。马车立刻就被淘汰了。

现在，无人驾驶技术正在快速成熟之中，也许马上就会投入实际使用。英国政府已经表示，希望在2021年之前，就批准第一辆全自动驾驶汽车上路。只要有一个城市证明这项技术是安全和有用的，世界其他地方将很快赶上来。

另一方面，电动汽车正在取代传统的内燃机车辆。虽然，电动汽车现在比传统汽车更昂贵，但是能提供更长的使命寿命（典型的电动汽车具有大约20个运动部件，而内燃机的运动部件大约为2,000个），因此单位里程的成本是降低的。大多数电动汽车可以行驶至少50万英里，更不要说充电的费用比加油便宜得多。

如果我们建成一个出租汽车网络，全部是自动驾驶的电动车辆，据估计，你的出行成本可以降低到自己拥有汽车的十分之一。一旦这种新的出行模式确立，规模化效应将使得它越来越强大。网络中的车辆越多，为消费者提供的服务就越好; 自动驾驶汽车行驶的里程越多，它们的效率和安全性就越高；制造的电动车越多，每辆车的价格越便宜。如果每辆车都是自动驾驶，那么汽车保险的价格将下降，甚至可能会消失。与此同时，如果你坚持自己驾驶车辆，可能会面临高额的保险费。另外，你没有汽车，当然也就不需要停车费。

2、[失传的计算机科学](http://rubyhacker.com/blog2/20150917.html)

如今的程序员与上一代不一样。计算机科学是一个艰深的领域，但是如今成千上万的程序员，可能根本没有受过正式的计算机教育。

由于开发程序变得容易了，一个人可以在知道很少的情况下完成小型程序。但这也意味着，这个人可能永远也不会写大程序。这个行业里面，你只要学会5％的东西，可以完成简单的工作，就可以谋生了。

我是在上个世纪80年代学习编程的。现在的编程就有点像，一个赛车手将一个孩子抱在他的腿上，孩子说“好吧，我也可以开车。每个人都可以开车。你只需按下绿色按钮。”

当然，在我之前几代人以同样的方式看着我。20世纪40年代，你必须拥有电气工程学位才能看到或触摸电脑。在70年代和80年代初，你只要是科学或工程专业就可以了。

你想做一个什么样的程序员，完全取决于你真正想做的事情。如果您想制作网站，那么你不需要计算机科学学位。甚至不需要学位。如果你想制作一些前所未有的令人兴奋的精彩内容，如果你想在行业中做出微小的改变并稍微改变世界，那么你确实需要那个学位。

或者换一种方式看待它：如果你想建造狗屋，只需用锤子和钉子。如果你想成为一名设计和建造摩天大楼的建筑师，那么首先要获得建筑学位。但请不要明明在建造狗屋，你却称呼自己为建筑师。

3、[可以食用的棉籽](https://www.npr.org/sections/thesalt/2018/10/17/658221327/not-just-for-cows-anymore-new-cottonseed-is-safe-for-people-to-eat)

![](https://www.wangbase.com/blogimg/asset/201811/bg2018110222.jpg)

人们种植棉花，主要是为了它种子上面蓬松的白色纤维。至于棉花种子本身，对于人类是有害的。但是，现在美国农业部批准了一种新型棉花，经过基因改造以后，它的种子可以安全食用。这项发明有望为棉籽开辟新的市场，并且为棉花种植带来巨大的推动。

棉籽是一个巨大的产业，因为1公斤棉纤维或棉绒会相应产生1.6公斤的棉籽。每粒棉籽就像一颗小花生，理论上，它是高营养的，含有大量的脂肪和蛋白质。问题是它还含有一种叫做棉酚的东西。棉酚本身是一种毒素，对棉花有益，有助于抵御害虫。但棉酚使人们无法食用棉籽，对大多数动物也有毒。棉酚的用途主要是畜牧业，或者用来榨油。奶牛不介意棉酚，它们的消化系统可以处理它。榨油厂粉碎棉籽以后，去除棉酚，提炼的油可用于人类食物。

最近，得克萨斯 A＆M 大学的科学家在棉籽 DNA 中，关闭了一个关键基因，一个负责生产棉酚的基因。结果发现，这种新的基因工程植物，叶子中仍然存在棉酚，以防止昆虫，但种子几乎完全没有棉酚，可以安全食用。研究人员还烤了几个吃了，说味道像鹰嘴豆。

本周，美国农业部给这种新棉花开了绿灯。美国任何人都可以种植它们。现在，棉籽可用于喂养鸡或鱼，然后进入人类的蛋白质供应链。科学家的真正目标是，希望看到它在印度这样的地方推广，那里很多人吃得不好。“很多营养不良的国家也是棉花生产大国，”科学家说。“这些国家可能从这项技术中获益更多。” 目前，中国和印度是世界上两个最大的棉花种植国。

## 本周图片

1、

1912年，一个漫画家设想的[未来交通系统](https://www.facebook.com/lostinhistorypics/posts/1437819003017019)。

![](https://www.wangbase.com/blogimg/asset/201811/bg2018110223.jpg)

2、[自动回复](https://www.optiweb.com/best-autoresponders/)

![](https://www.wangbase.com/blogimg/asset/201811/bg2018110224.jpg)

某人为工作邮箱设置了自动回复。

> “本人休假中，有问题请去找谷歌。”

3、[自行车弧光灯](https://hackaday.com/2018/10/17/diy-arc-light-makes-an-unnecessarily-powerful-bicycle-headlight/)

![](https://www.wangbase.com/blogimg/asset/201811/bg2018110225.jpg)

一个俄罗斯 Youtuber 在自行车前面安装了一个弧光灯。晚上汽车的时候，对面的司机都以为开来了一辆大车，但其实只是一辆自行车。

## 新奇

1、[Sol LeWitt](http://solvingsol.com/)

Sol LeWitt 是一个美国画家，但是他根本不作画，而是用语言描述自己的画，让别人画出来。

现在，有人做了一个 [JS 库](http://github.com/wholepixel/solving-sol)，专门用来根据他的描述，生成画作。

比如，第17号作品（1969）。

> 四部分的绘画，每个部分具有不同的线条方向。

![](https://www.wangbase.com/blogimg/asset/201811/bg2018110226.jpg)

第46号作品（1970）。

> 垂直线条，不直，不接触，均匀覆盖墙壁。

![](https://www.wangbase.com/blogimg/asset/201811/bg2018110227.jpg)

第 56 号作品（1970）。

> 在水平和垂直方向上分成四个相等的正方形，每个正方形在四个方向上逐行叠加。

![](https://www.wangbase.com/blogimg/asset/201811/bg2018110228.jpg)

## 本周金句

1、

我是一名成功的资本家，但是我厌倦听别人说，像我这样的人创造了就业机会。其实，唯一创造就业机会的是客户。我们一直压榨工人，导致他们没有财力成为我们的客户。

-- 创业家 Nick Hanauer，他参与创立的 aQuantive 公司，2007年被微软以60亿美元收购。

2、

长假回来时，我意识到，一群我不知道是谁的人，正在告诉我做一些我不关心的事情。我觉得是时候离开了。

-- Gmail 创造者 [Paul Buchheit](https://triplebyte.com/blog/interview-with-gmail-creator-and-y-combinator-partner-paul-buchheit) 谈为什么离开谷歌

3、

2017年，我去星巴克。一位中年妇女走过来，送我一本小册子《比特币：提前退休之路》。​我问了她一些加密货币的情况，她一无所知。

如果一个连星巴克都舍不得喝的中年女士，正在向您展示最新的科技潮流，可能就是泡沫的最高潮了。我就是在那天决定把手里所有的比特币清空。

-- [Jeremie Harris](https://towardsdatascience.com/the-economics-of-getting-hired-as-a-data-scientist-e3882933b43c)

## 欢迎订阅

这个专栏每周五发布，同步更新在我的[个人网站](http://www.ruanyifeng.com/blog)、[微信公众号](http://weixin.sogou.com/weixin?query=%E9%98%AE%E4%B8%80%E5%B3%B0%E7%9A%84%E7%BD%91%E7%BB%9C%E6%97%A5%E5%BF%97)和[语雀](https://yuque.com/ruanyf/share/)。

微信搜索“__阮一峰的网络日志__”或者扫描二维码，即可订阅。

![](http://www.ruanyifeng.com/blogimg/asset/2018/bg2018042311.jpg)

（完）


