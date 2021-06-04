# 科技爱好者周刊（第 161 期）：再见了，学术硕士

这里记录每周值得分享的科技内容，周五发布。

本杂志开源（GitHub: [ruanyf/weekly](https://github.com/ruanyf/weekly)），欢迎提交 issue，投稿或推荐科技内容。

周刊讨论区的帖子[《谁在招人？》](https://github.com/ruanyf/weekly/issues/1784)，提供大量程序员就业信息，欢迎访问或发布工作/实习岗位。

## 封面图

![](https://cdn.beekka.com/blogimg/asset/202106/bg2021060320.jpg)

5月29日，浙江省南浔古镇举办了桨板公开赛，200余名选手参赛。桨板将冲浪与手划桨结合在一起，要求选手站立着划船。（[via](http://pic.people.com.cn/n1/2021/0530/c1016-32117209-4.html)）

## 本周话题：再见了，学术硕士

最近有一条[新闻](https://www.163.com/dy/article/G9VTTL580511DC8A.html)，全国多所大学的重点专业（比如复旦的软件学院和经济学院）宣布， 从明年开始，不再招收学术型硕士了。

![](https://cdn.beekka.com/blogimg/asset/202106/bg2021060101.jpg)

这条新闻很重要，对于考研的同学有极大的影响。我猜想，其它高校也会很快跟进，学术型硕士今后会越来越萎缩。

理由是去年7月，教育部召开了历史上第一次[全国研究生教育会议](http://www.moe.gov.cn/jyb_xwfb/s6052/moe_838/202007/t20200729_475754.html)。

![](https://cdn.beekka.com/blogimg/asset/202106/bg2021060102.jpg)

会后发表了一个文件[《关于加快新时代研究生教育改革发展的意见》](http://www.moe.gov.cn/srcsite/A22/s7065/202009/t20200921_489271.html) ，里面有这样一句话。

> “新增硕士学位授予单位原则上只开展专业学位研究生教育，新增硕士学位授权点以专业学位授权点为主。”

**这句话的意思是，国家已经决定了，学术型硕士今后不发展了，只发展专业学位硕士。**

很多读者可能不知道，学术硕士与专业硕士有何区别，我简单解释一下。

![](https://cdn.beekka.com/blogimg/asset/202106/bg2021060103.jpg)

大学毕业后，如果你还想继续读硕士，有两个方向可以选。一个是学术方向，继续钻研理论知识，这叫学术型硕士，传统的硕士都是这一类。另一个是非学术方向，偏重于知识的实践，等同于高级职业培训，主要针对各行业的专业人士，所以叫做专业型硕士，比如工商管理硕士 MBA、公共管理硕士 MPA、工程硕士都属于这一类。

所以，专业硕士会减少学术训练（比如写论文、查文献），而加强业务实践（比如案例分析）。因此，**如果你想搞学术，留在学术界，那就读学术硕士；如果你不想搞学术，想去企业和政府，那就读专业硕士。**

但是，中国的现实不是这样。由于我国专业硕士起步晚，发展得不如学术硕士正规，很多大学的专业硕士培养非常马虎，而且往往是走读。所以，大家有一种印象，学术硕士才是正规硕士。每年都有大量毕业生报考学术硕士，但毕业后的去向却是企业和政府。这其实是巨大的人力浪费，你接受的理论培训在企业用不上，而企业需要的实践锻炼，你却由于待在学校里读书没参加。

由于这个原因， **中国的学术硕士是一个非常尴尬的学位，** 毕业生的理论能力和实践能力都不强。如果想留在学术界，必须再读一个博士学位；如果去企业，跟那些两三年前就进公司的本科生相比，能力相差不大，却比人家少几年的实践锻炼。

正是因为看到这一点，国家才最终决定，不发展学术硕士了，高层次的学术人才就是本科毕业直攻博士。硕士学位以后只用来培养专业硕士，以及像美国的很多研究型大学一样，读博士读不下去的同学，就发一个硕士学位，安慰一下，方便他找工作。

我觉得这是一件好事。以后考研就变得很单纯，如果你未来想留在学术界，志在高校和研究所，那就再花四五年，一心一意读个博士；否则就直接就业，工作当中如果有需要，读一个在职的专业硕士。如果你实在想拿到硕士学位后再去就业，那就去读全日制的专业硕士。国内高校那种变态的“考研热”，可以降温了。

![](https://cdn.beekka.com/blogimg/asset/202106/bg2021060104.jpg)

## 讲给前端工程师的 Serverless

对于前端的同学，Serverless 是一个高大上的名词，很多人没有接触过。我觉得很可惜，因为它真的非常简单，只要你会 Node.js，就能用 Serverless。

![](https://cdn.beekka.com/blogimg/asset/202106/bg2021060205.jpg)

大家要知道，Serverless 简直就像是，云服务商为了前端开发者特别发明的产品，为了推广云计算，所有的复杂性都封装了，简化到只要写一个 JavaScript 函数，上传到云端即可。使用时，前端发一个请求，云端函数就会自动运行，返回结果。根本不需要专用的后端服务器，所以才叫 Serverless（无服务器）。

国内的阿里云、腾讯云都已经支持 Serverless，而且每月都有大量的免费运行时间，不用白不用。有了它，Linux 系统管理、Web 服务器架设、负载均衡配置这些繁琐的事情，你都不必碰了。这简直就是前端开发者的福音，一个人就能搞出可以无限扩展的后端。

本周的课程资料就是 **《讲给大前端工程师的 Serverless 实践课》** ，从基本概念讲起，教大家在阿里云上架设一个 React 或 Vue 应用的后端，以及微服务和云架构的原理剖析。该课程由腾讯课堂“双认证”机构——京程一灯提供。

![](https://cdn.beekka.com/blogimg/asset/202106/bg2021060318.jpg)

从课程中，你不仅能掌握 Serverless 的概念，还能动手实践，学会自己部署 Serverless 函数。

课程原价98元，现在搞活动，周刊读者只需象征性支付 **0.02元**。微信扫描下面二维码，进群后即可报名，获取课程，保证无套路。

![](https://cdn.beekka.com/blogimg/asset/202106/bg2021060208.jpg)

报名成功后，还可以获赠98元的专题课《从0到1浅析 React 原理》。

## 科技动态

1、[闯入俄罗斯村庄的北极熊](https://siberiantimes.com/other/others/news/polar-bear-that-walked-unprecedented-1000-km-south-from-arctic-habitat-is-caught-in-yakutia/)

![](https://cdn.beekka.com/blogimg/asset/202105/bg2021051507.jpg)

![](https://cdn.beekka.com/blogimg/asset/202105/bg2021051506.jpg)

5月11日，一头北极熊闯入了俄罗斯西伯利亚的一个村庄，寻找食物，被村民抓获。这个村庄距离北极海岸足足有1000公里，以前从来没有发现过北极熊的踪迹。

![](https://cdn.beekka.com/blogimg/asset/202105/bg2021051505.jpg)

科学家认为，这是北极气候变暖的后果，由于北冰洋的浮冰正在融化，北极熊找不到海里的栖息地，不得不向南方觅食。按照预测，再过二三十年，北极的夏季可能会没有浮冰，这将对北极熊的生存构成威胁，它们将被迫转移到岸上。

目前，当地政府还没有决定，到底是将这头北极熊送回北极，还是送到动物园。

![](https://cdn.beekka.com/blogimg/asset/202105/bg2021051504.jpg)

2、

[国内第一辆无线供电的有轨电车](http://finance.eastmoney.com/a/202105211931414497.html)，上周在天津亮相。该车采用非接触式供电，带有钛酸锂电池储能系统，最高运行速度200km/h。

![](https://cdn.beekka.com/blogimg/asset/202105/bg2021052615.jpg)

![](https://cdn.beekka.com/blogimg/asset/202105/bg2021052618.jpg)

![](https://cdn.beekka.com/blogimg/asset/202105/bg2021052617.jpg)

3、

[下一代 USB-C 接口](https://www.theverge.com/circuitbreaker/2021/5/25/22453936/usb-c-power-delivery-extended-power-range-epr)的最高功率，将从现在的 100W 变为 240W。这个功率足以为绝大多数笔记本供电，甚至也可以为一些桌面电脑供电。

![](https://cdn.beekka.com/blogimg/asset/202105/bg2021052613.jpg)

4、[世界最大风洞](https://news.sina.com.cn/c/2021-06-02/doc-ikmxzfmm5986560.shtml)

中国科学院力学研究所副研究员韩桂来，在一次公开演讲中说，位于北京的 JF-22 风洞建成后，能产生每秒10公里的超高速气流，相当于音速的 30 倍。这是国际上最先进的超音速风洞，韩桂来说，它大概可以领先西方20-30年。

![](https://cdn.beekka.com/blogimg/asset/202106/bg2021060202.jpg)

![](https://cdn.beekka.com/blogimg/asset/202106/bg2021060203.jpg)

5、[特斯拉车内监控](https://techcrunch.com/2021/05/27/tesla-has-activated-its-in-car-camera-to-monitor-drivers-using-autopilot/)

特斯拉公司的自动驾驶功能，最近麻烦不断，曝出安全漏洞和发生了许多事故。该公司决定启用后视镜上方的车载摄像头，监视驾驶员。

![](https://cdn.beekka.com/blogimg/asset/202105/bg2021052901.jpg)

自动驾驶时，摄像头一旦发现驾驶员注意力不集中（比如睡着了），就会发出警告。如果驾驶员不理睬警告，车辆将自动减速停下来。如果关闭或遮挡摄像头，一旦发生事故，特斯拉就不承担任何责任。

这就是说，以后车辆自动驾驶时，车内也是被监控的，不过特斯拉保证，不会上传监控录像。

## [第六根手指](https://www.daniclodedesign.com/thethirdthumb)

大家想过吗，如果人类有第六根手指，会比五根手指更好用吗？

伦敦大学神经科学研究所的科学家，开展了一项研究，人类能否适应第六根手指。

![](https://cdn.beekka.com/blogimg/asset/202105/bg2021052203.jpg)

他们使用 3D 打印，制作了第六根手指，让实验者戴在手上。

![](https://cdn.beekka.com/blogimg/asset/202105/bg2021052204.jpg)

这根人造手指内部安装了电机，通过两个按钮操作。按钮安装在鞋子内，大脚趾按下去，手指就会弯曲；大脚趾松开，手指就会伸直。

![](https://cdn.beekka.com/blogimg/asset/202105/bg2021052205.jpg)

![](https://cdn.beekka.com/blogimg/asset/202105/bg2021052206.jpg)

![](https://cdn.beekka.com/blogimg/asset/202105/bg2021052207.jpg)

20名实验参与者，经过5天的培训以后，很快适应了这根新手指，可以用它完成捡起酒杯、挑出钥匙、操作手机等动作。看上去这根多出来的手指，非常实用。

![](https://cdn.beekka.com/blogimg/asset/202105/bg2021052507.jpg)

![](https://cdn.beekka.com/blogimg/asset/202105/bg2021052508.jpg)

![](https://cdn.beekka.com/blogimg/asset/202105/bg2021052509.jpg)

## 文章

1、[一场事先张扬的海滩聚会](https://mp.weixin.qq.com/s/0GP2MJt2ANrACkZ9uEy9Gg)（中文）

![](https://cdn.beekka.com/blogimg/asset/202105/bg2021052603.jpg)

本文记录了一桩很魔幻的事件，比小说还要精彩。有一个美国的抖音用户，发了一条短视频，“来庆祝我的生日，时间：下午7:30，亨廷顿海滩篝火处”。发完他就不见了，但是这条消息病毒式传播开来。

2、[我的外包经历](https://software.rajivprab.com/2021/04/26/experiences-working-with-an-outsourced-dev-shop/)（英文）

作者讲述了自己的一段外包经历，自从把软件外包出去，就开始噩梦不断。

3、[Shein，一家悄悄崛起的中国电商](https://www.notboring.co/p/shein-the-tiktok-of-ecommerce)（英文）

![](https://cdn.beekka.com/blogimg/asset/202106/bg2021060306.jpg)

美国的电商应用，排名第一位的是 Amazon，第二位是来自中国的 Shein，可是国内很少有人听说过这家公司。一个美国分析师利用收集到的各种材料，对这家公司进行了长篇分析。

4、[提高 Bash 使用效率的一些小技巧](https://cyb.org.uk/2021/05/03/bash-productivity.html)（英文）

本文介绍几个非常有用、但鲜为人知的 Bash 命令用法。

5、[HTTP 安全标头快速参考](https://web.dev/security-headers/)（英文）

HTTP 标头里面有一些跟安全相关，本文对它们一一介绍，比如`Content-Security-Policy`、`X-Content-Type-Options`等等。

6、[CAP 定理解读](https://codahale.com/you-cant-sacrifice-partition-tolerance/)（英文）

这篇文章从学术角度，详细解读分布式系统的 CAP 定理，写得很好。CAP 定理的核心含义就是，发生故障时，开发者必须选择，优先满足一致性还是可用性。

7、[如何使用 Emoji 作为 Favicon](https://css-tricks.com/emojis-as-favicons/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202105/bg2021051804.jpg)

本文介绍如何将 svg 格式的 Emoji 图案，作为网页的 Favicon。

8、[为什么 MySQL 数据库的字符串列宽是191？](https://www.grouparoo.com/blog/varchar-191)（英文）

MySQL 数据库的 varchar 格式的列，长度常常是191个字符，这是为什么？

## 工具

1、[sqliteviz](https://github.com/lana-k/sqliteviz)

![](https://cdn.beekka.com/blogimg/asset/202105/bg2021051602.jpg)

一个网页应用，可以在网页上可视化操作 SQLite 数据库。

2、[git-split-diffs](https://github.com/banga/git-split-diffs)

![](https://cdn.beekka.com/blogimg/asset/202105/bg2021050204.jpg)

这个命令行工具可以将代码 diff 显示为类似 GitHub 的样子。

3、[Hurl.it](https://www.hurlit.com/)

![](https://cdn.beekka.com/blogimg/asset/202105/bg2021050508.jpg)

这个网站可以定制并发出 HTTP 请求，相当于 Postman 的网页版。

4、[Compose for Web](https://compose-web.ui.pages.jetbrains.team/)

![](https://cdn.beekka.com/blogimg/asset/202105/bg2021050501.jpg)

JetBrains 公司推出的新工具，允许使用 Kotlin 语言开发 Web UI，目标是将来同一套代码适配桌面、Web 和安卓 App。这有希望成为 Java 开发写 Web 页面的最容易方案了。

5、[octokit.js](https://github.com/octokit/octokit.js)

一个 GitHub  API 的 JS 包装库，全部封装好了，可以更方便地操作 GitHub。

6、[touchbar-systemmonitor](https://github.com/spagnuolocarmine/touchbar-systemmonitor/blob/master/README.md)

![](https://www.wangbase.com/blogimg/asset/202004/bg2020040512.jpg)

一个 MacBook pro 笔记本的开源小工具，可以在 Touch Bar 显示系统状态。

7、[firefox_explore](https://github.com/mattarderne/firefox_explore)

![](https://www.wangbase.com/blogimg/asset/202004/bg2020040509.jpg)

一个本地工具，用来分析 Firefox 的浏览历史，比如最常访问的网址、一天各个时段的浏览统计等等。

8、[Video Puppet](https://www.videopuppet.com/docs/script/)

![](https://cdn.beekka.com/blogimg/asset/202106/bg2021060319.jpg)

这个工具可以将一篇 Markdown 文档转成视频，支持插入图片和音频，还可以使用自动合成的语音解说。

9、[use-sound](https://github.com/joshwcomeau/use-sound)

一个 React 钩子函数，用来添加声音效果，比如点击按钮发出“滴”的一声。

## 资源

1、[物理学相关电影](https://www.wondersofphysics.com/2020/04/best-physics-movies.html)

![](https://cdn.beekka.com/blogimg/asset/202105/bg2021051401.jpg)

这个网页列出了一些物理学相关的电影，要么电影内容直接涉及物理学，要么有物理学家参与作为科学指导。上面是2004年科幻片 Primer 的海报。

2、[学习 Python 的正确方法](https://learnpythontherightway.com/)

![](https://cdn.beekka.com/blogimg/asset/202105/bg2021051503.jpg)

针对初学者的 Python 教程，提供 PDF 文件下载。

3、[家庭花园种植指南](http://www.gardening.cornell.edu/homegardening/)

![](https://cdn.beekka.com/blogimg/asset/202105/bg2021051805.jpg)

康奈尔大学是美国农科最好的大学，这是该校办的网站，介绍家庭花园如何种植各种植物，包含200多种植物。

4、[Chess.com](https://www.chess.com/play/online)

![](https://cdn.beekka.com/blogimg/asset/202105/bg2021051806.jpg)

这个网站可以在线下国际象棋。

5、[你不需要 GUI](https://github.com/you-dont-need/You-Dont-Need-GUI)

这个仓库收集了一些常用的命令行操作，可以替代图形界面 GUI，主要针对初学者，但也适合作为命令行操作的备忘和速查。

## 图片

1、[线性时钟](https://jmw.name/projects/linear-clock/)

时钟的常见样子都是圆形，其实也可以做成线性，通过进度条，表示一天度过了多少时间。下面就是一些线性时钟的造型。

![](https://cdn.beekka.com/blogimg/asset/202105/bg2021050502.jpg)

![](https://cdn.beekka.com/blogimg/asset/202105/bg2021050503.jpg)

![](https://cdn.beekka.com/blogimg/asset/202105/bg2021050504.jpg)

![](https://cdn.beekka.com/blogimg/asset/202105/bg2021050505.jpg)

2、[2021年度世界鸟类摄影大赛](https://kottke.org/21/04/bird-photographer-of-the-year-2021-finalists)

2021年度世界鸟类摄影大赛公布了入围作品，下面这张很打动人。一只小鸭子望着水面上的飞虫发呆。

![](https://cdn.beekka.com/blogimg/asset/202105/bg2021050408.jpg)

3、[共享自行车堆放场](https://www.straitstimes.com/asia/east-asia/graveyard-of-the-bikes-chinas-failed-share-cycle-scheme-from-above)

新加坡《海峡时报》最近拍摄了沈阳市共享自行车的一个堆放场，损坏的、乱停放的、超量的共享自行车都会被城管拉到这里，规模非常惊人。

![](https://cdn.beekka.com/blogimg/asset/202105/bg2021050409.jpg)

![](https://cdn.beekka.com/blogimg/asset/202105/bg2021050410.jpg)

![](https://cdn.beekka.com/blogimg/asset/202105/bg2021050411.jpg)

## 文摘

1、[多出来的一美元](https://blog.cloudandtree.com/2021/04/the-other-dollar/)

三名游客来到一家旅馆，经理告诉他们，三人间的价格是30美元。游客每人掏出10美元，入住了房间。

第二天退房时，经理意识到，这间客房的定价应该是25美元，便要求服务员将多收的5美元退还给客人。服务员不诚实，仅向每位游客退还1美元，将剩下的2美元占为己有。

现在，三名游客每人实际花费了9美元，总计27美元。服务员保留了2美元，加在一起是29美元，请问剩下的1美元去了哪里？

## 言论

1、

一个人站在地球上，脚和头受到的地球引力是不一样的，只不过这点差别太小了，人完全感觉不到。潮汐也是由于这种引力差造成的，朝向月球一面的海水和背向月球一面的海水，所受的月球引力差别就十分明显了，因而造成海水的涨落。

-- 何香涛《追逐类星体》

2、

华为宣布，将在一年内把大约 100 款不同型号的华为 Android 手机，升级到鸿蒙操作系统。通常情况下，开发一个全新的操作系统，并支持一百个旧型号将是一项昂贵的、艰巨的工作，大多数公司会说“不可行”，但由于鸿蒙操作系统实际上就是 Android，所以这没什么大不了的。

-- [arcTechnica 的编辑](https://arstechnica.com/gadgets/2021/06/huaweis-harmonyos-will-rollout-to-100-android-models-over-the-next-year/)评论华为发布鸿蒙操作系统

![](https://cdn.beekka.com/blogimg/asset/202106/bg2021060312.jpg)

3、

我们的新冠肺炎疫苗，定价是每剂19.50美元，这是疫情期间的特殊定价。正常情况下的定价，应该是每剂150美元或者175美元。

-- 辉瑞公司 CEO [阿梅里奥](https://mattstoller.substack.com/p/why-joe-biden-punched-big-pharma)（Frank D'Amelio）

4、

出色的写作读起来是如此自然，读者完全意识不到，作者反复修改所花费的时间。

同样地，出色的产品用起来是如此简单，用户完全意识不到，开发者所付出的辛勤劳动。

-- [David Perell](https://twitter.com/david_perell/status/1378943650755842050)

5、

建于古罗马时代的万神殿，至今仍然是世界上最大的非钢筋混凝土穹顶，依然非常坚固。但是，20 世纪的许多钢筋混凝土结构（桥梁，公路和建筑物）正在崩溃。

钢筋混凝土建筑的寿命比人们以为的短得多，只有50到100年，甚至更短。只过了十年或二十年，就出现钢筋生锈、水泥块剥落。而且，这种建筑材料也无法回收利用。

--[《钢筋混凝土的问题》](https://theconversation.com/the-problem-with-reinforced-concrete-56078)

![](https://cdn.beekka.com/blogimg/asset/202105/bg2021052606.jpg)

## 历史上的本周

2020年（第 110 期）：[如果不能去美国上市](http://www.ruanyifeng.com/blog/2020/06/weekly-issue-110.html)

2019年（第 58 期）：[软件推广可以像化妆品那样吗？](http://www.ruanyifeng.com/blog/2019/05/weekly-issue-58.html)

2018年（第 7 期）：[垃圾填埋不是解决办法](http://www.ruanyifeng.com/blog/2018/06/weekly-issue-7.html)

## 订阅

这个周刊每周五发布，同步更新在[阮一峰的网络日志](http://www.ruanyifeng.com/blog)和[微信公众号](http://weixin.sogou.com/weixin?query=%E9%98%AE%E4%B8%80%E5%B3%B0%E7%9A%84%E7%BD%91%E7%BB%9C%E6%97%A5%E5%BF%97)。

微信搜索“阮一峰的网络日志”或者扫描二维码，即可订阅。

![](https://cdn.beekka.com/blogimg/asset/202103/bg2021030402.jpg)

（完）
