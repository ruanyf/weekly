# 每周分享第 37 期

这里记录过去一周，我看到的值得分享的东西，每周五发布。

欢迎投稿，或推荐你自己的项目，请前往 GitHub 的 [ruanyf/weekly](https://github.com/ruanyf/weekly) 提交 issue。

![](https://www.wangbase.com/blogimg/asset/201812/bg2018122834.jpg)

（题图：安吉，浙江，2018）

前些日子，武侠小说泰斗金庸先生去世了。

他可能是影响最大的中国当代作家，几代人都是读他的武侠小说长大的。但是我认为，他很可能也是最后一个影响力这么大的作家。

以前没有那么多的娱乐方式，武侠小说是主要的消遣。我们常常是关灯以后，津津有味读到半夜，因为也没有其他事情可干。那个年代，电视台一到晚上10点，就会显示“今天的节目已经播放完毕，观众朋友们明天再见”。

到了今天，娱乐方式越来越多，小说已经变成了一种小众行为。大家都是在手机上玩游戏、看视频、发消息……读书的人只占一部分，而且比例会越来越小。金庸先生的武侠小说，要是现在写出来，我认为绝不可能有这么多读者。写得再好也不可能，以前是全民读书的年代，现在不是了。我印象中，全民阅读的小说，最早是金庸，后来是路遥的《平凡的世界》，再后来是《三体》，然后就没有了。为什么？因为《三体》出版以后，电脑游戏、互联网、智能手机开始普及了。

无独有偶，世界最畅销小说《哈利波特》也是在智能手机流行之前问世的。我认为，以后也不会有《哈利波特》那种级别的流行小说了。

通过小说对一代人产生影响，这种事情可能永久地结束了。以后，对一代人有影响的可能将是某个游戏、某个视频节目、某个网红。

## 新闻

1、[火星上的冰](https://www.theverge.com/2018/12/21/18151758/mars-express-picture-korolev-crater-water-ice)

![](https://www.wangbase.com/blogimg/asset/201812/bg2018122802.jpg)

12月20日，欧洲航天局的火星快车轨道飞行器发回了一张照片，显示了常年寒冷的 Korolev 火山口。科学家认为白色的部分是冷冻的二氧化碳，下面就是冰。这意味着，火星上不仅有液态水，还有湖。

火星快车是2003年6月2日发射的，六个月后到达火星，已经在火星轨道上运行了15年。（@[alaskasquirrel](https://github.com/ruanyf/weekly/issues/176) 投稿）

2、[IPv6 圣诞树](https://hackaday.com/2018/12/24/ipv6-christmas-display-uses-75-internets-worth-of-addresses/)

![](https://www.wangbase.com/blogimg/asset/201812/bg2018122803.jpg)

一位没有披露身份的工程师，在室外架设了一棵圣诞树和一块 LED 屏幕，将它们连上互联网，并进行一天24小时的[直播](https://jinglepings.com/)。

这棵圣诞树和 LED 屏幕的每个像素，都可以通过 IPv6 地址控制。你 ping 一下 `2001:4c08:2028:2019::RR:GG:BB` 这个地址，其中 RR、GG、BB 是你设定的任意颜色值，圣诞树就会亮一下这个颜色的灯。你 ping 一下 `2001:4c08:2028:X:Y:RR:GG:BB` 这个地址，其中 X 和 Y 是屏幕指定位置的坐标，就会在该点显示指定的颜色。

为了防止恶意使用，必须先向站长申请加入白名单，然后你的图像才会发上屏幕。

3、[零排放才能进入市中心](https://www.theguardian.com/cities/2018/nov/30/its-the-only-way-forward-madrid-bans-polluting-vehicles-from-city-centre)

![](https://www.wangbase.com/blogimg/asset/201812/bg2018122804.jpg)

西班牙首都马德里规定，12月1日开始，只有零排放的车辆才能进入市中心。但是，实际执行的时候，只限制2000年之前登记的汽油车和2006年之前登记的柴油车。该市的目标是未来只有电动车和液化石油气车辆才能进入市区。

4、[内燃机专家失业](https://apnews.com/ffa0fd2ace934f31bb1beaeb4bf314ee/gallery/media:a12927b4311a47929d3bc6772bd3c75b)

![](https://www.wangbase.com/blogimg/asset/201812/bg2018122805.jpg)

美国最大的汽车公司通用汽车公司宣布，裁员8000个白领职位，其中很大一部分是内燃机专家，因为传统的汽油发动机不是未来的趋势。未来的汽车将是电动汽车。通用汽车的招聘岗位，已经完全转向软件工程师、激光传感器工程师、电池工程师，不打算再研发内燃机引擎了。

5、[AI 渲染的图像](https://www.theverge.com/2018/12/3/18121198/ai-generated-video-game-graphics-nvidia-driving-demo-neurips)

![](https://www.wangbase.com/blogimg/asset/201812/bg2018122806.jpg)

Nvidia 公司实现了一个重大突破，它开始采用 AI 通过机器学习，自动建模，渲染出图像。

传统的方法是，GPU 根据 3D 模型渲染出图像，新技术则是不需要人工建模，AI 算法根据视频自动建模，渲染出图像。该技术可以用于快速开发 3D 游戏。

6、[太空艺术品](https://www.orbitalreflector.com/)

![](https://www.wangbase.com/blogimg/asset/201812/bg2018122807.jpg)

12月4日，SpaceX 火箭将一个雕塑送上了太空。这个雕塑是用轻质材料制成的，装在盒子里面，然后盒子装在卫星下面，由火箭发射到太空。一旦进入距离地球575公里的轨道上，就会自动打开，这个雕塑会像气球一样自我膨胀。阳光反射到雕塑上，用肉眼就可以从地球上看到它，会像北斗七星中的明星一样明亮。该作品的作者是艺术家特雷弗·帕格伦（Trevor Paglen）。（@[swordfishwjy](https://github.com/ruanyf/weekly/issues/120)__ __投稿）

7、[电动汽车的实时追踪系统](https://www.apnews.com/4a749a4211904784826b45e812cff4ca)

![](https://www.wangbase.com/blogimg/asset/201812/bg2018122808.jpg)

如果你的车是电动汽车，你的实时位置可能正在传送给政府。中国政府规定，所有电动车的数据要实时发送给政府。这样做的目的是防止电动车补贴计划中的欺诈行为，保证获得补贴的电动车有正常行驶。

上图显示，上海市的电动汽车有16万8千辆，正在充电的有10538辆，正在行驶的有31897辆。下图显示那些正在行驶的电动汽车的实时位置。

![](https://www.wangbase.com/blogimg/asset/201812/bg2018122809.jpg)

网友对这条消息的补充：国家新能源车辆标准 GB32960 规定每十秒上传一次实时数据，包括经纬度、车辆发动机状态 、电池状态等。

8、[无人出租车开始运营](https://www.latimes.com/business/autos/la-fi-hy-waymo-one-20181205-story.html)

![](https://www.wangbase.com/blogimg/asset/201812/bg2018122810.jpg)

谷歌投资的无人汽车公司 Waymo，开始在亚利桑那州提供出租车服务。这标志着无人驾驶技术进入生产环境了。

现在，这项服务只向 Waymo 挑选的400个当地居民开放，用车的时候需要使用手机预约。每辆车的司机位会坐着一个 Waymo 的工程师，负责处理紧急情况，实际的驾驶由电脑完成。目前披露的价格是：15分钟3英里（4.8公里）为7.59美元。

9、[子宫移植](https://www.bbc.com/news/health-46438396)

![](https://www.wangbase.com/blogimg/asset/201812/bg2018122811.jpg)

2016年，巴西圣保罗一个40多岁的三个孩子的母亲，死于大脑出血。她的子宫被移植进入了另一个32岁的妇女体内，后者出生时就没有子宫，但是卵巢是好的。

子宫移植完成后，科学家就取出接受移植者的卵子，进行体外授精，然后再将受精卵放回子宫。2017年12月15日，一个健康的婴儿从移植的子宫诞生了（上图），这是世界第一例子宫移植还能生育的案例。这对许多由于子宫问题无法生育的妇女是一大福音。

10、__一句话新闻__

* [互联网档案项目](https://archive.org/donate/)宣布，一位慷慨的神秘捐赠人承诺以 2 比 1 匹配捐款。用户每捐款5美元，他会捐10美元，该项目就会收到15美元。（@[alaskasquirrel](https://github.com/ruanyf/weekly/issues/167)__ __投稿）
    
* [AT&T](https://www.cnet.com/news/at-ts-5g-network-is-live-if-you-live-in-the-right-city/) 于12月18日开通5G服务，目前的价格是70美元使用 15G 流量。
    
* [英国皇家统计学会](https://www.bbc.com/news/uk-46602969)评选出2018年的年度统计数据：全世界90.5％的塑料垃圾从未被回收，其中大约12％被焚烧，79％被填埋或抛弃在自然环境中。
    
* [统计](https://www.theguardian.com/us-news/2018/dec/20/americans-are-getting-fatter-but-not-taller-study-finds)发现，过去50年，美国人的平均身高大约高了2厘米，但是平均体重增加了13公斤。
    
## 教程

1、[编译器基础](http://notes.eatonphil.com/compiler-basics-lisp-to-assembly.html)（英文）

本文用 JavaScript 语言演示如何写解析器，将代码转为抽象语法树 AST，然后再写编译器，将其转为汇编语言。

2、[放弃 Linux，试试 FreeBSD 或 Illumos？](https://www.adminbyaccident.com/politics/abandon-linux-move-freebsd-illumos/)（英文）

本文提出 FreeBSD 或者基于 Solaris 的 illumos 在功能上优于 Linux，更值得尝试。

3、[如何创建一个具有机器学习能力的 Sketch 插件](https://blog.sketchapp.com/not-a-hotdog-how-to-build-an-ai-powered-plugin-for-sketch-463ea43c9464)（英文）

本文用浅显的语言介绍，如何写一个简单能够识别热狗图像的 Sketch 插件。（@[Anderson-Liu](https://github.com/ruanyf/weekly/issues/112) 投稿）

4、[熵是什么？](https://fs.blog/2018/11/entropy/)（英文）

一篇科普文章，不仅介绍了物理意义的熵，还介绍社会内部的熵、公司内部的熵等。

5、[Docker 镜像中有什么？](https://cameronlonsdale.com/2018/11/26/whats-in-a-docker-image/)（英文）

Docker 的 Image 文件是分层的，本文简单介绍怎么查看每一层的内容，它们又是怎么组合成一个可以运行的 Image 文件。这里还有另外一篇类似的[文章](https://www.datawire.io/not-engineer-running-3-5gb-docker-images/)，通过控制分层来缩小 Image 文件尺寸。（@[tifazxy](https://github.com/ruanyf/weekly/issues/114) 投稿）

6、[为什么你应该尝试 hapi？](https://hueniverse.com/why-you-should-consider-hapi-6163689bd7c2)（英文）

hapi 框架的作者介绍该框架的特点。这里还有一篇[《值得关注的10个 Node.js 框架》](https://scotch.io/bar-talk/10-node-frameworks-to-use-in-2019)。

7、[网络追查俄罗斯间谍](https://mp.weixin.qq.com/s/L_0vAnJtlfL_8rNIIPPAOQ)（中文）

英国一个民间机构如何使用互联网公开资料，追查两个俄罗斯间谍的故事。

8、[解密英语语法](http://www.yinwang.org/blog-cn/2018/11/23/grammar) （中文）

王垠老师的《解密计算机科学》还没写完，又开始写第二本书《解密英语语法》。发布第一章以后，第二天他又把这个计划取消了，“我曾经想过把这写成一本完整的语法书，可是后来发现似乎一篇文章足矣。”（@[wblovezqy](https://github.com/ruanyf/weekly/issues/102)__ __投稿）

9、[vimdiff 教程](https://vimways.org/2018/the-power-of-diff/)（英文）

![](https://www.wangbase.com/blogimg/asset/201812/bg2018122812.jpg)

vimdiff 是一个显示文件 diff 的命令行工具，本文主要介绍怎么改用其他算法，以不同的格式显示 diff。

10、[谷歌代码搜索的工作原理](https://swtch.com/~rsc/regexp/regexp4.html)（英文）

谷歌代码搜索的作者，介绍搜索的算法原理。

11、[《荒野大镖客：救赎2》制作记](https://www.vulture.com/2018/10/the-making-of-rockstar-games-red-dead-redemption-2.html)（英文）

![](https://www.wangbase.com/blogimg/asset/201812/bg2018122813.jpg)

这篇长篇报道介绍 RockStar 游戏公司和它开发的游戏《Red Dead Redemption 2》。

## 资源

1、[http3-explained](https://github.com/bagder/http3-explained)

![](https://www.wangbase.com/blogimg/asset/201812/bg2018122814.jpg)

curl 作者写的小册子，介绍 HTTP/3 协议。此前，他也写了介绍 [HTTP/2](https://daniel.haxx.se/http2/) 的小册子。

2、[亚马逊的机器学习课程](https://aws.amazon.com/training/learning-paths/machine-learning/)

亚马逊公司推出了官方的机器学习课程，学完以后，还能参加付费考试，通过者可以获得 AWS 机器学习认证。

3、[强化学习导论](http://incompleteideas.net/book/the-book.html)（第二版）

![](https://www.wangbase.com/blogimg/asset/201812/bg2018122815.jpg)

《Reinforcement Learning: An Introduction》，2018年出版的新书，作者开源了。

4、[Linux 内核揭密](https://xinqiu.gitbooks.io/linux-insides-cn/content/index.html)（中文）

本书是[《Linux inside》](https://github.com/0xAX/linux-insides)一书的中译，介绍 Linux 内核知识，从计算机通电讲起，需要 C 语言和汇编语言的知识。（@[imilano](https://github.com/ruanyf/weekly/issues/104) 投稿）

5、[Best-websites-a-programmer-should-visit](https://github.com/sdmg15/Best-websites-a-programmer-should-visit)

该仓库收集对程序员有用的网址，包含问题查找、技术新闻、技术博客、开源社区、英文提升、新奇的玩意儿、视频教程、在线工具等数十个方向的内容。（@[qiurenbo](https://github.com/ruanyf/weekly/issues/108) 投稿）

6、[日本农村待售的房屋](https://inakanoseikatsu.com/%E5%B1%B1%E5%8F%A3%E7%9C%8C%E5%B1%B1%E5%8F%A3%E5%B8%82%E3%83%BB%E5%8F%A4%E6%B0%91%E5%AE%B6%E3%83%BB70%E4%B8%87%E5%86%86/)

![](https://www.wangbase.com/blogimg/asset/201812/bg2018122816.jpg)

看看日本乡下，几万元人民币可以买到的房子一大堆，都是买来就可以直接入住，还带土地产权。

7、[GNU 壁纸](https://www.gnu.org/graphics/wallpapers.en.html)

![](https://www.wangbase.com/blogimg/asset/201812/bg2018122817.jpg)

自由软件基金会为 GNU 操作系统提供的壁纸。

8、[No More google](https://nomoregoogle.com/)

该网站收集各种谷歌服务的替代品，让你可以不使用谷歌。（@[Ynjxsjmh](https://github.com/Ynjxsjmh) 投稿）

## 工具

1、[construct-ui](https://github.com/vrimar/construct-ui)

一个基于 Mithril.js 框架的前端 UI 组件库。

2、[sky](https://github.com/lucagez/sky)

![](https://www.wangbase.com/blogimg/asset/201812/bg2018122818.jpg)

一个形成动态背景的 React 组件。

3、[htm](https://github.com/developit/htm)

JSX 语法必须使用 Babel 才能编译，现在 preact 的作者出手了，写了一个模板函数。只要把 JSX 写成模板字符串，就可以摆脱 Babel 了。

4、[Vanilla Dashboard](https://chrome.google.com/webstore/detail/vanilla-dashboard/edlikndmglpbofmalkaifiigaepoieah)

![](https://www.wangbase.com/blogimg/asset/201812/bg2018122819.jpg)

Chrome 浏览器插件，可以为空白 Tab 设置背景图，显示当前时间。

5、[Reactide](http://reactide.io/)

![](https://www.wangbase.com/blogimg/asset/201812/bg2018122820.jpg)

Reactide 是 React Web 应用开发的专用 IDE。

6、[jabcode](https://github.com/jabcode/jabcode)

![](https://www.wangbase.com/blogimg/asset/201812/bg2018122821.jpg)

JAB 码是彩色二维码方案，可以比黑白二维码写入多得多的信息。

7、[Diagram](https://webdemo.myscript.com/views/diagram/index.html#/edit)

![](https://www.wangbase.com/blogimg/asset/201812/bg2018122822.jpg)

手绘图，然后保存成 PPT 的在线服务。

8、[goboy](https://github.com/Humpheh/goboy)

![](https://www.wangbase.com/blogimg/asset/201812/bg2018122823.jpg)

跨平台的 Gameboy 游戏模拟器。

9、[tus](https://tus.io/)

文件上传到一半突然断了，往往只能重新上传。tus 是一个允许断点上传的轻量级协议，可以从中断的地方继续上传。官方提供开源的客户端和服务端实现。

10、[Gitless](https://gitless.com/)

Git 的版本模型对新手来说，并不是很容易理解。Gitless 试图将 Git 变得更容易理解，它基于 Git，但是用自己的概念和命令替换了 Git，比如把 `git add` 改成 `gl track` 。 

11、[Yandex Image Translate](https://translate.yandex.com/ocr)

俄罗斯搜索引擎 Yandex 的图片 OCR 服务，可以将图片里面的文字翻译成另一种文字。（@[holoto](https://github.com/ruanyf/weekly/issues/138)__ __投稿）

## 文摘

1、[500英里的电子邮件](http://web.mit.edu/jemorris/humor/500-miles)

几年前，我为一所大学的 IT 部门工作。

一天，我收到统计系主任的电话，他说他们的电子邮件最多只能发送500英里（800公里），比500英里更远的地方，就发送不过去。我差点一口咖啡喷出来。

我试了一下他们的邮件服务器，居然是真的。我发到纽约（420英里）可以成功，发到普罗维登斯（580英里）就失败了。这怎么可能呢。

这时，我发现他们的邮件服务器是 Sendmail 5，而不是当时已经广泛使用的 Sendmail 8。我问了一下管理员，确认最近进行过一次服务器升级，但是 Sendmail 版本被降级了。

他们原来的配置文件是为 Sendmail 8 写的，有几项会被 Sendmail 5 重置为0，其中有一项是连接到远程服务器的超时，也就是远程服务器被设为零延迟，否则连接就会断掉。程序实际执行的时候，0超时是按3毫秒计算的。一旦3毫秒之内，没有收到远程服务器的答复，就认为邮件无法发送。

我快速计算了一下，光速在3毫秒的前进距离，正好是500多英里。

2、[最强大的阿片类药物卡芬太尼](http://www.chm.bris.ac.uk/motm/carfentanil/carfentanilh.htm)

1960年，一个比利时团队试图改进吗啡，设计出更好的镇痛药，他们最后找到了芬太尼。芬太尼是脂溶性更高的分子，因此可以更快地进入中枢神经系统，提供更快速的镇痛作用，疗效比吗啡强100倍。

1974年，他们又在芬太尼的基础上，开发出了卡芬太尼（Carfentanyl）。这是已知的最强大的镇定剂，比芬太尼强大100倍。由于效果太强大，所以不能用于人类（几毫克就会致死），只能用于大象和犀牛的镇定剂。大象中了一针卡芬太尼，就会昏迷。

![](https://www.wangbase.com/blogimg/asset/201812/bg2018122824.jpg)

卡芬太尼是如此强大，对任何使用它的人都有危险，因此必须采取一些预防措施。当兽医使用卡芬太尼时，必须至少两人一组，并且脸上都要有覆盖物，穿上乳胶手套，以及覆盖整个身体的衣服（不能是T恤和短裤），还必须携带几瓶解毒剂纳洛酮。当然，针头和注射器不得丢弃，使用后应安全处理。

2016年6月，一群戴着呼吸器、面罩和防护服的警察，在温哥华机场处理从中国寄来的一些打印机配件，原因是标有HP 打印机墨水的蓝色墨盒里，实际上装了一公斤的卡芬太尼。

![](https://www.wangbase.com/blogimg/asset/201812/bg2018122825.jpg)

吗啡、海洛因、芬太尼、卡芬太尼都是阿片类药物，效用一个比一个强。一定程度上，芬太尼可以替代海洛因作为毒品，但是由于更容易抑制呼吸，也就更容易造成服用人死亡。据报道，从2016年9月1日至2017年1月1日，美国至少262人死亡有芬太尼有关。2016年4月，流行歌星普林斯因服用芬太尼止痛药而死亡。歌手 Tom Petty 于2017年10月因意外服用过量止痛药（包括芬太尼）而去世。

2002年10月23日，40名车臣恐怖分子占领了莫斯科的杜布罗夫卡剧院，劫持了约900人。10月26日，恐怖分子开始杀死人质，俄罗斯当局将一种化学物质汽雾化，然后泵入建筑物的通风系统。整个剧院的人吸入这种物质以后，都昏昏欲睡，这时特种部队开始攻入剧院，将恐怖分子杀害，但大约130名人质因为吸入这种化学物质而死。俄罗斯政府从来没有公布，这是什么物质。对幸存者的尿液和衣物样本进行的后续分析，表明它有卡芬太尼的成分。

![](https://www.wangbase.com/blogimg/asset/201812/bg2018122826.jpg)

## 本周图片

1、[慕尼黑飞机仓库改造](https://edition.cnn.com/travel/article/airbus-a380-doors-munich-airport/index.html)

![](https://www.wangbase.com/blogimg/asset/201812/bg2018122827.jpg)

空中客车 A380 是世界最大飞机，长73米，可容纳853名乘客。慕尼黑机场的飞机仓库太小，为了容纳这种飞机，不得不改造大门，让 A380 的尾翼可以露在外面。


![](https://www.wangbase.com/blogimg/asset/201812/bg2018122828.jpg)
 

![](https://www.wangbase.com/blogimg/asset/201812/bg2018122829.jpg)

2、[3D 狮子王](https://www.theverge.com/2018/11/22/18108251/the-lion-king-remake-walt-disney-pictures-first-trailer-teaser)

迪士尼翻拍了《狮子王》的 3D 版本，明年上映（观看[预告片](https://m.weibo.cn/s/video/show?object_id=1034%3A4309454896982524&fromWap=1&ep=H3XXTpQWk,1400854834,H3XXTpQWk,1400854834)）。大家可以比较一下，原来的 2D 造型和这次的 3D 造型。最近的动画长片大部分都是 3D，以后 2D 动画肯定是越来越少。

![](https://www.wangbase.com/blogimg/asset/201812/bg2018122830.jpg)


![](https://www.wangbase.com/blogimg/asset/201812/bg2018122831.jpg)

3、[老照片着色](https://www.historytoday.com/paul-lay/any-colour-you)

![](https://www.wangbase.com/blogimg/asset/201812/bg2018122832.jpg)

上图是一张1865年拍摄的照片，里面的人物是[刘易斯·鲍威尔](https://en.wikipedia.org/wiki/Lewis_Powell_(conspirator))，他参与了刺杀林肯总统的阴谋，被判处死刑。这张照片是他行刑前拍摄。

下图是重新着色后的照片。

![](https://www.wangbase.com/blogimg/asset/201812/bg2018122833.jpg)

## 本周金句

1、

有时，我们想用新技术解决旧技术的包袱，问题是新技术会带来更多的包袱。新技术的一个问题是，人们还不知道它到底有多糟糕。

-- [《选择乏味的技术》](http://boringtechnology.club/)

2、

1937年～1971年，旧金山的金门大桥跳下来自杀的人，一共有515人被救，其中94％的人在1978年仍然活着。

-- [《经济学人：为什么应该防止自杀》](https://www.economist.com/leaders/2018/11/24/why-suicide-is-falling-around-the-world-and-how-to-bring-it-down-more)，自杀很大比例是出于冲动。

3、

我在早上8:30左右醒来，服用了450毫克的安非他酮， 50毫克的拉莫三嗪，5毫克的阿立哌唑和200毫克的莫达非尼，吞下了一大口咖啡，才能开始一天的生活。

-- [一个抑郁症患者](http://www.harvarddesignmagazine.org/issues/46/refusal-after-refusal)。上面的药名都是治疗抑郁症的药物。

4、

创业的时候，不要关注怎么筹集资金，而要关注怎么建立业务。

-- 创业者 [Alexander Muse](https://medium.com/startup-muse/chapter-one-most-entrepreneurs-should-not-raise-capital-cf58e883fe62)

## 欢迎订阅

这个专栏每周五发布，同步更新在我的[个人网站](http://www.ruanyifeng.com/blog)、[微信公众号](http://weixin.sogou.com/weixin?query=%E9%98%AE%E4%B8%80%E5%B3%B0%E7%9A%84%E7%BD%91%E7%BB%9C%E6%97%A5%E5%BF%97)和[语雀](https://yuque.com/ruanyf/share/)。

微信搜索“__阮一峰的网络日志__”或者扫描二维码，即可订阅。

![](http://www.ruanyifeng.com/blogimg/asset/2018/bg2018042311.jpg)

（完）


