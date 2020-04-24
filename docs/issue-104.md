# 科技爱好者周刊：第 104 期

这里记录每周值得分享的科技内容，周五发布。

本杂志开源（GitHub: [ruanyf/weekly](https://github.com/ruanyf/weekly)），欢迎提交 issue，投稿或推荐你的项目。

[通知] 下周五是五一假期，周刊会提前一天在周四（4月30日）发布。

## 封面图片

![](https://www.wangbase.com/blogimg/asset/202004/bg2020041808.jpg)

美国阿拉斯加州举行的巨型卷心菜比赛，前三名合影。第一名（中间那颗）重达41.9公斤。（[出处](https://www.npr.org/sections/thesalt/2014/08/20/341884706/why-vegetables-get-freakish-in-the-land-of-the-midnight-sun)）

## 本周话题：语音合成的用途

谷歌2018年发表了[一篇论文](https://google.github.io/tacotron/publications/speaker_adaptation/)，只需要5秒的真人语音，就可以提取语音特征，然后任何文本都可以转成该人的语音。

上面的链接有这种技术合成的很多语音示例，大家可以去听一下，很惊人。

![](https://www.wangbase.com/blogimg/asset/202004/bg2020042202.jpg)

这种技术要是推广开来，其实挺危险的。我知道一件真人真事，一个同事有一天接到诈骗电话，声称他的小孩被绑架了，要求支付赎金。当然他没有上当，但是如果那些骗子用了谷歌的这种技术，电话里播放一段他儿子的合成语音，恐怕就很容易相信了。

我还想到一个用途。以后人死了，他的声音还活着，结合人工智能，就可以跟死去的人进行虚拟对话了。

美国作家菲利普·迪克写过一本科幻小说《尤比克》（Ubik）。他想象在未来世界，人死后还可以继续以脑电波的形式“存活”一段时间。人们将死去亲友的身体冷冻保存在亡灵馆，活人通过脑电波装置与亡灵的脑电波“对话”。

![](https://www.wangbase.com/blogimg/asset/202004/bg2020042201.jpg)

我觉得，现有的技术已经可以实现这个预言了。一个人的生理特征、行为习惯、写过的文章、说过的话，都可以输入计算机生成模型（英语叫做 avatar），得到一模一样的外貌、语音、思考方式、一举一动。其他人跟这个 avatar 互动，好像跟本人互动一样。

这种模型可以商品化，就像上面说的，人们会愿意购买过世亲人的 avatar，让亲人还活在我们身边。某些名人的 avatar 肯定具有巨大的销路，喜爱偶像的青少年以后不会去听演唱会，而是购买偶像的 avatar，想听什么歌就让它唱给你听。电商平台也会推出排行榜，本周最畅销的 avatar 是谁、又有哪些新进榜等等。

## 前端面试准备视频

本周的课程资料是一个免费的《前端面试准备视频》。

![](https://www.wangbase.com/blogimg/asset/202004/bg2020042204.jpg)

面试是求职的最后一关，如果准备得不好，会导致前功尽弃。而且，程序员的面试往往跟最终职级和薪资直接相关。两个应聘者的其他条件都类似，就是面试表现有差异，最后的薪资可能就会有不小的差距。

![](https://www.wangbase.com/blogimg/asset/202004/bg2020042310.jpg)

举例来说，很多面试官都喜欢问文件上传的实现，你会怎么答？

> - 甲：前端 axios 库的 POST 请求 + 上传进度条 + 后端 Node.js 接收文件
> - 乙：实现大文件的分片上传和断点续传
> - 丙：前端限制上传文件的格式 + 秒传（判断后端是否已经存在副本）

请问甲乙丙三个应聘者，谁的薪资会拿得多，谁拿得少？

拿下高薪 offer，除了做好必要的面试题准备，还应该在面试过程中展示自己的特点和价值观。下面这个 **开课吧** 提供的《前端高薪，面试题要这么答》的视频，除了告诉大家P5/P6/P7 不同级别的面试都是怎么回答问题的，还讲解了一个《今日头条》的经典面试题，以及其他内容。

![](https://www.wangbase.com/blogimg/asset/202004/bg2020042205.jpg)

感兴趣的同学，长按上方二维码两次，添加成功就可以免费领取。仅限 **前189名** ，先到先得。

## 资讯

1、[世界最长的动物](https://www.trt.net.tr/chinese/wen-hua-yi-zhu-yu-ke-ji/2020/04/14/ke-xue-jia-zai-hai-di-fa-xian-shi-jie-shang-zui-chang-de-dong-wu-1397776)

![](https://www.wangbase.com/blogimg/asset/202004/bg2020041701.jpg)

科学家在澳大利亚附近的海底，发现了世界最长的动物。那是一个管水母（siphonophore Apolemia），长度达到45.7米。上图中白色的线条都是单个动物。

管水母是一种由很小的、互相连接的有机体游动孢子组成的群体生物 ，在海底呈圆圈或螺旋状游动。

2、[iPhone 的5小时广告](https://news.artnet.com/art-world/apple-five-hour-iphone-ad-hermitage-museum-1800798)

![](https://www.wangbase.com/blogimg/asset/202004/bg2020041702.jpg)

苹果公司为了展示 iPhone 11 pro 的电力持久，拍了一支5小时19分28秒的广告。整支广告就是用一只 iPhone 11 pro 一镜拍到底，表明它的视频可以拍这么久，并且质量很好，镜头也很平稳。拍摄完成后，手机仍剩19％的电力。

广告是在俄罗斯圣彼得堡的冬宫拍摄的，iPhone 固定在架子上面，一路拍摄完这座宫殿的45个大厅，250万平方英尺的展示空间，记录下恢宏的宫殿和墙上的名画，还有事先安排好的现代舞蹈。

博物馆只给拍摄团队6个小时的拍摄时间，虽然路线事先已经安排好了，但是完全没有犯错重拍的余地。[Youtube](https://www.youtube.com/watch?v=49YeFsx1rIw) 和 [BiliBili](https://www.bilibili.com/video/BV1NE41137EZ/) 有这支5小时广告的全片。

![](https://www.wangbase.com/blogimg/asset/202004/bg2020041703.jpg)

3、[广义相对论的证据](https://phys.org/news/2020-04-eso-telescope-star-supermassive-black.html)

![](https://www.wangbase.com/blogimg/asset/202004/bg2020041801.jpg)

27年前，法国科学家通过欧洲南方天文台（ESO）的超大望远镜（VLT），发现有一颗恒星 S2 正围绕一个巨大质量的黑洞运行，最近时相距200亿公里（太阳与地球之距离的120倍）。

S2 的运行速度为光速的3%，每16年运行一圈。经过27年的持续观察，科学家们终于证实，S2  的运行轨道不是牛顿万有引力理论所预言的椭圆，而是爱因斯坦广义相对论预测的玫瑰花形状（上图），这是由于黑洞的超大质量而造成的。下面是运行轨迹的[动画视频](https://v.qq.com/x/page/m09536t9zaq.html)。

欧洲南方天文台（ESO）是15国政府为支持科学家在南半球研究天文学而组织的研究机构，成立于1962年，总部设在德国慕尼黑，望远镜和仪器都设在智利境内山脉之中。

<iframe frameborder="0" src="https://v.qq.com/txp/iframe/player.html?vid=m09536t9zaq" width="600px" height="400px" allowFullScreen="true"></iframe>

4、[动物参加视频会议](https://www.sweetfarm.org/goat-2-meeting)

![](https://www.wangbase.com/blogimg/asset/202004/bg2020041802.jpg)

疫情期间，视频会议变得非常流行。美国加州的一个农场，推出了一项服务，让农场的动物参加视频会议。会议进行时，一个动物会加入直播，仿佛是会议的一个参加者。

这项服务是有偿的，所有收费用来资助农场的运作。用户最低交纳65美元，并发送会议的时间和链接，就可以让一个动物远程出席20分钟会议。目前，可选的动物主要是山羊，以后可能会有其他动物。农场特别声明，不保证山羊有很好的开会状态，它在睡觉也是有可能的。

![](https://www.wangbase.com/blogimg/asset/202004/bg2020041804.jpg)

![](https://www.wangbase.com/blogimg/asset/202004/bg2020041803.jpg)

![](https://www.wangbase.com/blogimg/asset/202004/bg2020041805.jpg)

5、[美国重新启动载人航空](https://www.cnn.com/2020/04/17/tech/spacex-crew-dragon-nasa-demo-2-launch-date-scn/index.html)

![](https://www.wangbase.com/blogimg/asset/202004/bg2020041902.jpg)

美国宇航局 NASA 正式宣布，将在下个月的5月27日下午4时32分，在佛罗里达州通过 SpaceX 公司的火箭，将两名宇航员送上国际空间站。

自从2011年航天飞机全部退役以后，美国就再也没有进行过载人飞行，所有美国宇航员都要去俄罗斯，通过俄罗斯的联盟号飞船前往国际空间站。下月的飞行将是 SpaceX 公司成立18年以来，第一次进行载人飞行，标志该公司取得重大成功。上图为将要进入太空的两名美国宇航员的照片。

6、**一句话消息**

> - [美国大学生](https://www.washingtonpost.com/education/2020/04/16/college-students-are-rebelling-against-full-tuition-after-classes-move-online/)发起请愿活动，要求大学退回部分学费，因为学校由于疫情都关闭了。目前，各大学都还没有同意。

> - [美国科学家](https://www.popularmechanics.com/science/a32190534/welding-tech-carbon-steel-3d-printing/)发明了一种 3D 打印新技术，使用激光熔化的钢粉，打印出坚固的钢铁部件。如果钢铁制品也可以打印，可能会改钢铁行业。

> - [微软](https://www.nvidia.com/en-us/geforce/news/minecraft-with-rtx-beta-out-now-download-play/)发布支持 RTX（实时光线追踪）的 Minecraft 游戏，现在可以免费下载体验版。

![](https://www.wangbase.com/blogimg/asset/202004/bg2020041810.jpg)

> - [微软公司](https://www.theverge.com/2020/4/22/21230816/microsoft-developers-bugs-machine-learning-numbers-statistics)透露，该公司 47,000名程序员每月产生近30,000个 bug。

> - [Youtube](https://finance.sina.com.cn/roll/2020-02-14/doc-iimxyqvz2753575.shtml) 宣布，3月开始不再接受 iOS 用户在应用内付款订阅，用户只能通过浏览器订阅。因为苹果对应用内购买要提成30%，谷歌不愿意让苹果挣这个钱。

> - [域名管理机构 ICANN](https://www.namecheap.com/blog/icann-allows-com-price-increases-gets-more-money/) 同意给 Verisign 授权，对`.com`域名在今后四年中，每年涨价7%。

> - [MIPS](https://www.cnx-software.com/2020/04/22/is-mips-dead-lawsuit-bankruptcy-maintainers-leaving-and-more/) 是一种开源的 CPU 架构，据报道目前形势很不妙。核心维护者只剩下一个人，拥有它的公司已经申请破产。预计这个架构应该不久就会正式死掉。

![](https://www.wangbase.com/blogimg/asset/202004/bg2020042309.jpg)

## 文章

1、[约翰·康威的一些数学宝石](https://mattbaker.blog/2020/04/15/some-mathematical-gems-from-john-conway/)（英文）

![](https://www.wangbase.com/blogimg/asset/202004/bg2020041610.jpg)

最近，著名数学家约翰·康威（John Conway）由于新冠病毒去世了，网上有很多纪念文章。这篇文章总结了他一些不为人所知的小发现。

比如，任意三角形的边延伸到每个顶点之外，并且其距离等于对边的长度，所得的六个点将在一个圆上，这个圆就称为”康威圆“。

![](https://www.wangbase.com/blogimg/asset/202004/bg2020041609.jpg)

2、[不聘请数据科学家的七个理由](https://learningwithdata.com/posts/tylerfolkman/7-reasons-not-to-hire-a-data-scientist/)（英文）

这篇文章提出大多数公司根本不需要雇佣数据科学家，前四点理由很好玩。

> - 你没有任何数据
> - 你没有正确的数据
> - 你没有明确的问题要解决
> - 你实际需要的是分析师

3、[长征三号乙火箭发射失败](https://www.zhihu.com/question/386500368)（中文）

![](https://www.wangbase.com/blogimg/asset/202004/bg2020042004.jpg)

4月9日，中国的长征三号乙火箭发射失败。第三级火箭的一个发动机没有启动，导致星箭俱毁，坠落在关岛附近的大海中。由于长征三号乙已经很成熟，发生事故很不正常，对日后的商业发射影响很大。这里是知乎的一个帖子，讨论这个事件反映了中国航天什么问题，又有什么深层的影响。

4、[浏览器禁用三方 Cookie 的分析](https://juejin.im/post/5e97124df265da47b27d97ff)（中文）

Safari 浏览器开始完全禁用第三方 Cookie，本文分析了有何影响，以及如何在没有 Cookie 的情况下，获取浏览器的指纹。

5、[硅谷竞相构建下一代互联网：Metaverse（元宇宙）](https://www.washingtonpost.com/video-games/2020/04/17/fortnite-metaverse-new-internet/)（英文）

![](https://www.wangbase.com/blogimg/asset/202004/bg2020042005.jpg)

互联网的下一个版本被称为 Metaverse（元宇宙），它来自科幻小说，指的是即使没有人登录也能持续在线发展且活跃的共享虚拟空间。目前，最接近元宇宙的系统是在线游戏 Fortnite。上图为玩家在 Fortnite 内部观看电影《星球大战》预告片。

6、[我如何选配 PC](https://blog.codinghorror.com/building-a-pc-part-ix-downsizing/)（英文）

![](https://www.wangbase.com/blogimg/asset/202004/bg2020042012.jpg)

著名程序员 Jeff Atwood 最近“攒”了一台 PC，距离上次已经过去了5年。5年里，他都不必升级 PC。他感叹这也是一个标志，PC 时代将要结束。

这次，他选用了 DA2 的小机箱，里面塞进了 CPU i9-9900KS、GPU RTX 2080 和三块硬盘。这不用担心散热吗？

7、[Node.js 的 WebSocket 服务器演示](https://lostmoa.com/blog/WebSocketDemoServerInNodeJS/)（英文）

本文介绍如何自己写一个简单的 WebSocket 服务器。

8、[Python 学习资源](https://x-team.com/blog/essential-python-resources/)（英文）

这篇文章总结初学者开始看的 Python 的10本英文教材。

## 工具

1、[Falcon](https://github.com/plotly/falcon)

![](https://www.wangbase.com/blogimg/asset/202004/bg2020041611.jpg)

一个开源的 SQL 编辑器，可以查看查询结果。

2、[Wekan](https://wekan.github.io/)

![](https://www.wangbase.com/blogimg/asset/202004/bg2020041612.jpg)

一个开源看板软件，类似 Trello。

3、[HoServer](https://github.com/hello-react/HoServer)

![](https://www.wangbase.com/blogimg/asset/202004/bg2020041704.jpg)

HoServer 是基于 Node.js Express 的 RESTful 接口服务和管理平台，一行代码实现增删改查所有接口，内置用户、权限等基本功能，可以缩短项目开发周期，降低开发成本。（@[hello-react](https://github.com/ruanyf/weekly/issues/1190) 投稿）

4、[Learning-to-See-in-the-Dark](https://github.com/cchen156)

![](https://www.wangbase.com/blogimg/asset/202004/bg2020041809.jpg)

一个 Tensorflow 的算法实现，可以通过机器学习，将一片漆黑的照片（最左侧）还原成有光时的样子（最右侧）。

5、[TablePlus](https://tableplus.com/)

![](https://www.wangbase.com/blogimg/asset/202004/bg2020041901.jpg)

一个支持多种关系型数据库的图形界面的数据库管理工具。 

6、[tauthon](https://github.com/naftaliharris/tauthon)

官方不再维护 Python 2 后，民间开始接手。有人做了一个项目，专门将 Python 3 的新功能，移植到 Python 2。

7、[pipedream](https://pipedream.com/)

![](https://www.wangbase.com/blogimg/asset/202004/bg2020042101.jpg)

一个云服务的集成平台，可以运行用户的代码，将一个云服务的输入，经过处理后输出到另一个云服务。目前是免费使用。

8、[avatarify](https://github.com/alievk/avatarify)

一个开源软件，只需要提供一张头像照片，就可以生成人物开口讲话的视频。

9、[pattern.css](https://github.com/bansal-io/pattern.css)

![](https://www.wangbase.com/blogimg/asset/202004/bg2020042112.jpg)

一个纯 CSS 库，提供各种形状的背景图案。这里还有一个类似的[网站](http://www.heropatterns.com/)。

10、[98.css](https://jdan.github.io/98.css/)

![](https://www.wangbase.com/blogimg/asset/202004/bg2020042203.jpg)

一个提供 Windows 98 风格的 UI 组件的 CSS 库。

## 资源

1、[ZoomerBackgrounds](https://zoomerbackgrounds.com/)

![](https://www.wangbase.com/blogimg/asset/202004/bg2020041806.jpg)

![](https://www.wangbase.com/blogimg/asset/202004/bg2020041807.jpg)

视频会议软件 Zoom 允许用户自定义会议的背景图，该网站提供各种背景图资源。

2、[《动手学 Scala 编程》](https://www.handsonscala.com/)

![](https://www.wangbase.com/blogimg/asset/202004/bg2020042001.jpg)

新加坡总理李显龙的儿子李浩毅，发布的 Scala 的英文教程。李浩毅生于1989年，是 Scala.js 的核心开发者，MIT 计算机专业毕业。

![](https://www.wangbase.com/blogimg/asset/202004/bg2020042002.jpg)

3、[图书馆噪音](https://www.ox.ac.uk/soundsofthebodleian/#radcam)

![](https://www.wangbase.com/blogimg/asset/202004/bg2020042111.jpg)

该网站提供牛津大学图书馆的噪音。喜欢图书馆环境的朋友，可以用它作为工作时的背景音。

4、[Matheminecraft](https://www.epfl.ch/schools/sb/research/math/get-matheminecraft/)

![](https://www.wangbase.com/blogimg/asset/202004/bg2020042113.jpg)

一个以 Minecraft 为基础的儿童数学教育的游戏。

5、[人工智能艺术品](https://art42.net/)

![](https://www.wangbase.com/blogimg/asset/202002/bg2020021701.jpg)

![](https://www.wangbase.com/blogimg/asset/202002/bg2020021702.jpg)

该网站收集机器学习生成的抽象画。

## 图片

1、[瑞士的猫楼梯](https://99percentinvisible.org/article/swiss-cat-ladders-documenting-deconstructing-feline-friendly-infrastructure/)

瑞士很多房屋的外墙，有很小的楼梯，这不是给人走的，而是给猫走的。

![](https://www.wangbase.com/blogimg/asset/202004/bg2020042008.jpg)

![](https://www.wangbase.com/blogimg/asset/202004/bg2020042009.jpg)

![](https://www.wangbase.com/blogimg/asset/202004/bg2020042010.jpg)

![](https://www.wangbase.com/blogimg/asset/202004/bg2020042011.jpg)

2、[加州的模型地图](https://twitter.com/geo_spatialist/status/1251671066164056065?s=20)

下面的地图将加州的山脉、沙漠、平地都做成了模型。

![](https://www.wangbase.com/blogimg/asset/202004/bg2020042106.jpg)

## 文摘

1、[为什么敏捷开发的站会不受欢迎？](https://geekbot.com/blog/alternatives-to-standup-meetings/)

很多团队使用敏捷开发，实行面对面的站会。目的是使每个人都清楚自己的工作，互相提供状态更新，促进协作，提高工作质量。

但是，站会往往因为冗长、打断工作、相关性不高，而引发团队成员的不满。

![](https://www.wangbase.com/blogimg/asset/202004/bg2020042301.jpg)

首先，站会如果在每天早上10时举行，正好是程序员在项目上取得进展或解决待办事项的时候。这个时候让他们听取同事的意见，以及产品经理的讨论，会打断他们的工作。

其次，虽然站会一般在15分钟左右，但是有时时间会很长，尤其是较大的团队，可能会达到半小时到一小时。每个程序员只能发言两分钟，其他时间就与他无关了。

最后，对于性格内向的程序员，站会尤其糟糕。它们不仅长、无聊，而且令人恐惧。并不是每个人都愿意在整个团队面前讲话，事实上很多程序员不愿意讲话。不止一个程序员承认，他们宁愿“隐藏在阴影中”，希望不要轮到自己发言。

2、[任天堂总裁山內溥的轶事](https://www.wired.com/2013/10/hiroshi-yamauchi-henk-rogers/)

我于1970年代末移居日本。1985年的一天，我的妻子在日本一家杂志上看到一篇文章，说任天堂的总裁山內溥喜欢下围棋。巧合的是，有人送给我 Commodore 64 游戏机的围棋游戏。Commodore 64 的 CPU 与任天堂的 NES 游戏机是一样的，都是6502。

我就给山内先生发了传真，告诉他我可以为 NES 游戏机开发围棋游戏，我并不认识他。第二天，我就得到了答复，说山内先生将在明天见我。

见面时，他说：“我不能给你任何程序员。”

我说：“我不需要程序员，我需要钱。”

“多少？”

我说：“ 3000万日元，大约30万美元。” 这是我能想到的最大数量。他与我握手，我们达成了协议。我后来知道，他做决定总是这么快，而且从不动摇。这些决定始终是最终决定。

![](https://www.wangbase.com/blogimg/asset/202002/bg2020020302.jpg)

拿到钱以后，我在英格兰找到了 Commodore 64 围棋游戏的原作者，说服他来日本跟我一起干这个项目。我们为游戏添加了一个可爱的界面，有一个小小的忍者搬动棋子，让任天堂的消费者感到好玩。

![](https://www.wangbase.com/blogimg/asset/202004/bg2020042302.jpg)

九个月后，我终于把游戏准备好了。山内先生玩了一次游戏，或者准确说，他让下属操作手柄，把棋子放在他指定的位置。他此前从未握过任天堂的手柄。

他轻易地赢得了游戏，说这个游戏对任天堂来说还不够强大。但是，我让他的8位游戏机可以下围棋，这真是个奇迹，完全改变了他的想法。

最后我问他，我的公司是否可以发布这个游戏。“我会收到多少钱？” 他说。

“我每卖出一份，就要付给您100日元。” 他再次与我握手，于是我成为了任天堂的游戏开发商。

在那之后，我与山内先生一起参加过很多次会议。开始时，房间里总是有很多人，但是会议结束后，我们一起玩围棋，那时只有我和他。

我可能是业内唯一与山内先生有单独相处机会的人。所有任天堂的高管都把我当成外国贵族，我获得了最高待遇，能够在截止日期之后交付游戏。

我在 NES 游戏机上又开发了《俄罗斯方块》，后来又把这个游戏移植到了 Game Boy 手持游戏机。有人说俄罗斯方块造了Game Boy，也有人说 Game Boy 造就了俄罗斯方块。我认为两者都是对的。

![](https://www.wangbase.com/blogimg/asset/202004/bg2020042303.jpg)

## 言论与数字

1、

我相信，只有六个人读完了我的书《数学原理》，后来其中三人被希特勒杀害。

-- [伯特兰·罗素](https://www.economist.com/books-and-arts/2020/04/18/listen-to-bertrand-russell-the-english-voltaire)，英国哲学家

2、

苹果公司的市值，等于德国最大的30家公司的市值总和，或者澳大利亚最大的200家公司的市值总和。

-- [《金融时报》](https://www.ft.com/content/6f69433a-40f0-11ea-a047-eae9bd51ceba)

3、

我原想为自己的著作起名为《算法分析》，出版商说：“那将永远卖不出去”。

-- [高德纳](https://www.quantamagazine.org/computer-scientist-donald-knuth-cant-stop-telling-stories-20200416/)，《计算机编程艺术》的作者

4、

一个新观念取得胜利，并不是因为说服了它的反对者，而是因为反对者最终都死了，并且熟悉这种观念的新一代人成长了。

-- [普朗克](https://en.wikipedia.org/wiki/Planck%27s_principle)，德国物理学家

5、

如果有人在电话里说有害的言论，你不会让电话公司负责。我们也应该这样对待网站。

-- [扎克伯格](https://www.reuters.com/article/us-germany-security-facebook-idUSKBN2090MA)，谈人们应该怎么看待 Facebook

6、

人类真的应该少吃糖，我甚至见过有人把苹果蘸糖吃。只要你几周不吃垃圾食品或者加糖的食品，柠檬都会变甜。

-- [HN 读者](https://news.ycombinator.com/item?id=22325739)

## 回顾

- 2019年的本周：[第 53 期](http://www.ruanyifeng.com/blog/2019/04/weekly-issue-53.html)
- 2018年的本周：[第 1 期](http://www.ruanyifeng.com/blog/2018/04/weekly-issue-1.html)

## 订阅

这个周刊每周五发布，同步更新在[阮一峰的网络日志](http://www.ruanyifeng.com/blog)和[微信公众号](http://weixin.sogou.com/weixin?query=%E9%98%AE%E4%B8%80%E5%B3%B0%E7%9A%84%E7%BD%91%E7%BB%9C%E6%97%A5%E5%BF%97)。

微信搜索“阮一峰的网络日志”或者扫描二维码，即可订阅。

![](http://www.ruanyifeng.com/blogimg/asset/2018/bg2018042311.jpg)

（完）
