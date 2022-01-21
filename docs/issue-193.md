# 科技爱好者周刊（第 193 期）：前端与后端，谁更难？

这里记录每周值得分享的科技内容，周五发布。（**[通知] 下周欢度春节，周刊暂停，2月11日恢复。**）

本杂志开源（GitHub: [ruanyf/weekly](https://github.com/ruanyf/weekly)），欢迎提交 issue，投稿或推荐科技内容。

周刊讨论区的帖子[《谁在招人？》](https://github.com/ruanyf/weekly/issues/2139)，提供大量程序员就业信息，欢迎访问或发布工作/实习岗位。

## 封面图

![](https://cdn.beekka.com/blogimg/asset/202201/bg2022012012.webp)

第41届全国专业冰雕比赛，1月6日开始，在哈尔滨市兆麟公园举行。冰冻的湖面上，艺术家们雕刻自己的作品。黄昏时，雪地上亮起灯光，宛若仙境。（[via](http://news.china.com.cn/2022-01/08/content_77976699.htm)）

## 本周话题：前端与后端，谁更难？

[“黑客新闻”](https://news.ycombinator.com/)（Hacker News）是美国最大的程序员社区，我每天都看，周刊的很多内容就来自那里。

![](https://cdn.beekka.com/blogimg/asset/202201/bg2022011601.webp)

有一天，我看到一个帖子。

一个前端程序员[说](https://news.ycombinator.com/item?id=29328111)，他不想干前端了，咨询大家意见，转到后端是否可行。

> 我从2007年开始从事前端开发，到了现在，很多新技术已经不擅长了。每次打开 Chrome 开发者工具，看到那些我不知道的新功能，我总是选择忽略。
>
> 很多我熟悉的工具和功能，都已经或将被弃用。现在的前端开发都在 npm 环境，经常有难懂的报错，好不容易搜到答案，又要花很多时间修复本地开发环境。
>
> 即使那些最简单的任务，现在的开发方式也比以前复杂，要考虑很多边界场景。我能够完成的工作，不断得缩小。
> 
> **我失去了继续在前端工作的信心，转到后端，会不会容易一些。**

简单说就是，他觉得前端越来越难，自己跟不上，无法坚持下去了。他想知道，后端会不会更容易一些，转成后端开发是否可行？

![](https://cdn.beekka.com/blogimg/asset/202201/bg2022011602.webp)

可以想象，讨论这种问题，一定是众说纷纭。

原帖下面，各种意见都有。支持的一方说，前端现在确实变得非常复杂，技术工具的更新速度太快，开发和维护的难度超过了后端。

反对的一方说，后端也很难，如果你适应不了 Node.js，改行写 C++/Java/Go 也会很痛苦，千万不要草率做决定。

![](https://cdn.beekka.com/blogimg/asset/202201/bg2022011603.webp)

难易是主观感受，没有办法精确衡量，人与人之间不可比较。所以我觉得，讨论这种问题，不可能有统一的看法。

但是，我很喜欢下面[这个发言](https://news.ycombinator.com/item?id=29329313)，说出了前端与后端有一个重要差异，往往被忽视。

> **前端的问题不是难，而是它面对最终用户。只要用户的喜好和口味发生变化，前端就必须跟上。**
> 
> 这导致前端不得不快速变化，因为用户的口味正在越来越快地改变。
>
> 后端不需要面对最终用户，需要解决的都是一些经典的计算机科学问题，比如算法和数据结构。这些问题很少变化，可以利用以前的研究成果，所以变化速度慢得多。

这段话的意思是，前端和后端的差异，不在于难度，或者说各有各的难，而是所要解决的问题不一样。

前端的特征是混乱、嘈杂、易变，因为这些都是最终用户的特征，前端需要匹配用户。 **如果你不适应混乱、嘈杂、易变的开发，你就很难适应前端。**

后端面对的是硬件、算法和数据结构，所以比较稳定。但是会涉及到计算机科学、语言设计、编译原理等高深的内容，想要搞懂这些东西，绝非易事。

所以，你判断自己适合前端，还是适合后端？除了考虑现实因素和外部环境，也要考虑自己的性格爱好。实话实说，如果性格比较安静，喜欢思考抽象和理论的问题，这个人可能不一定适合前端。

大家怎么看这个问题，你会给他什么建议？如果让你回到从前，你会选择从事前端还是后端？

## 给孩子的财经小课

这里的很多读者已经为人父母，有了小朋友。

小朋友的特点，就是喜欢提问，各种各样的问题都有。如果是宇宙奥秘、大自然的问题，那还容易回答，如果是社会经济的问题，反而不容易回答。

不信的话，看看下面这些小朋友的问题，你能回答吗？

> - 为什么有最低工资？
> - 为什么每个电影院都会卖爆米花？
> - 当了电竞选手，是不是玩游戏也能赚钱？
> - 国家多印钱，大家都会变富吗？

![](https://cdn.beekka.com/blogimg/asset/202201/bg2022011501.webp)

本周向大家介绍一档音频节目 **《给孩子的财经小课》**，专门为小朋友制作，解答各种社会经济问题，增加小朋友的经济知识，进行财商教育，帮助他们理解社会，培养思辩能力。

主讲人是孙明展老师。他是周刊的老朋友，也是财经专家，中山大学科班出身，先在世界500强保险公司工作，后来辞职开了一家理财咨询公司。

他家有两个小朋友，一个12岁，另一个6岁。他经常回答大儿子的问题，久而久之就产生了一个念头：为什么不录制成音频节目，讲给更多的孩子听呢？

![](https://cdn.beekka.com/blogimg/asset/202201/bg2022011502.webp)

他从2020年开始录，每周录一期。第一年结束以后，很多小朋友都很喜欢，追着听连载，一些家长说自己也受益匪浅。2021年，他又接着录制了第二季。下面是其中的一些标题。

![](https://cdn.beekka.com/blogimg/asset/202201/bg2022011503.webp)

这个节目的宗旨就是希望，让小朋友从生活小事了解经济学，了解世界如何运转，开启理性思维和财经思维。如果家里的小朋友，正在上小学或初中，听了应该很有帮助。家长也可以一起听，不仅增加跟孩子的沟通，本身也能增加一些经济知识。

大家可以去[“飞慕课”](https://www.feimooc.com/user/1255718)试听（最好使用桌面电脑访问），免费的内容有20讲（含第一季和第二季）。如果觉得讲得不错，可以付费解锁所有内容。第二季的《给孩子的财经小课》原价199元，周刊的读者只需要69元！

![](https://cdn.beekka.com/blogimg/asset/202201/bg2022011504.webp)

这个价格包括第二季的所有52期节目，都是线上音频的形式，每节课10-20分钟，可以随时无限次回听；还包括额外的4次直播课，让孩子跟孙老师直接互动。另外再附赠第一季的55期节目，以及一本精美的财商书籍。

![](https://cdn.beekka.com/blogimg/asset/202201/bg2022011715.webp)

微信扫描上方二维码，或者点击这个链接[《给孩子的财经小课》](http://m.feimooc.com/courseDetail/824?sencecode=fei_7125&spreadType=teacherCopy)，就可以试听和购课。付款的朋友，别记了添加助教微信，免费领取礼品：第一季财经小课 + 精美财商书籍。

## 科技动态

1、[最老的唱片出版者](https://www.bbc.com/news/entertainment-arts-59986543)

![](https://cdn.beekka.com/blogimg/asset/202201/bg2022011807.webp)

美国钢琴家露丝·史兰倩斯卡（Ruth Slenczynska）已经97岁了，她定于今年3月18日发行一张新的专辑。这使她成为世界上年龄最大的发行专辑的人。

她曾经是一个钢琴神童，四五岁时就出名了。她5岁登台表演的视频，今天还能在 [Youtube](https://www.youtube.com/watch?v=SPZiuPw-LLs) 上看到。这段视频是1930年拍摄的，整整92年前。这意味着，她大概是目前还活着的、曾经出现在最古老视频里面的人。

![](https://cdn.beekka.com/blogimg/asset/202201/bg2022011808.webp)

2、[浮动房屋](https://www.archdaily.com/964050/amsterdams-floating-neighbourhood-schoonschip-offers-a-new-perspective-on-circularity-and-resiliency)

![](https://cdn.beekka.com/blogimg/asset/202112/bg2021120801.webp)

荷兰是一个洼地国家，大部分国土不高于海平面，所以经常淹水，并且住房短缺。该国建筑师正在尝试，在水面上架设住宅。

他们在首都阿姆斯特丹的河道里面，建了46套浮动住宅。这种房子架在钢柱上面，可以随着水位上下浮动，所以不担心涨水。

![](https://cdn.beekka.com/blogimg/asset/202112/bg2021120802.webp)

每套住宅都有浮桥与岸边相连，配有太阳能供电，以及废水处理系统，尽量实现水电自给自足。

![](https://cdn.beekka.com/blogimg/asset/202112/bg2021120804.webp)

![](https://cdn.beekka.com/blogimg/asset/202112/bg2021120803.webp)

3、[病毒检测新方法](https://www.ifanr.com/1466653)

![](https://cdn.beekka.com/blogimg/asset/202201/bg2022011701.webp)

检测新冠病毒的方法，目前主要是核酸。缺点是需要主动去测试，如果你不去测，就不知道是否感染了。这样很难提前发现。

耶鲁大学的团队，发明了一种新方法，即使当事人没有察觉，也能测出有没有感染病毒。他们做了一种可穿戴设备，叫做 Fresh Air Clip，可以夹在衣领上，捕捉空气中的病毒颗粒。

![](https://cdn.beekka.com/blogimg/asset/202201/bg2022011702.webp)

出门时，你戴着它。一段时间后，再交给实验室检测上面有没有病毒。如果有的话，就意味着，你今天的路线上遇到过感染者。并且，还可以通过病毒量，判断暴露的水平。

4、[牦牛机器人](https://finance.sina.com.cn/jjxw/2022-01-14/doc-ikyakumy0382310.shtml)

![](https://cdn.beekka.com/blogimg/asset/202201/bg2022011710.webp)

![](https://cdn.beekka.com/blogimg/asset/202201/bg2022012101.webp)

我国最近研制出了“电动牦牛”，速度可达每小时10公里，可负重160公斤，是世界上体形最大、载重和越野能力最强的电驱动四足仿生机器人。

![](https://cdn.beekka.com/blogimg/asset/202201/bg2022011711.webp)

它能穿越山林、山地、雪地，主要用于负重运输，以及在不利于士兵执行任务的环境中抵近侦察。从照片来看，它可能不能爬山，否则用处就更大了。

![](https://cdn.beekka.com/blogimg/asset/202201/bg2022011712.webp)

![](https://cdn.beekka.com/blogimg/asset/202201/bg2022011714.webp)

5、[超导输电](https://cn.nikkei.com/industry/scienceatechnology/47301-2022-01-13-02-19-33.html)

![](https://cdn.beekka.com/blogimg/asset/202201/bg2022011311.webp)

日本即将把“超导输电”投入实用，已在宫崎县布设完毕目前世界上最长的超导输电线路。这种线路最大特点是，电线最内圈有一个密封层，里面充满了液氮冷却剂，浸泡着导体。

“超导现象”指的是导体在某个低温下，电阻会突然消失，这样就大大降低了输电的线路损耗。但是，以往需要冷却到摄氏零下269度才能实现超导，日本因为开发出了零下196度就能实现超导的材料，使得冷却剂可以从昂贵的液氦改换成每公斤数百日元的液氮，后者价格不到前者的十分之一。由于冷却成本大幅下降，因此可以投入实用了。（[@wingor](https://github.com/ruanyf/weekly/issues/2162) 投稿）

## 文章

1、[中国最大的核桃树](https://mp.weixin.qq.com/s/QRiraXxdswb333H0ULA3ng)（中文）

![](https://cdn.beekka.com/blogimg/asset/202201/bg2022011814.webp)

一个研究生在云南省发现中国野外最大核桃树的故事。该树高达40余米，胸径约2米，树龄超过300年。

2、[我如何走上字库设计这条路](https://mp.weixin.qq.com/s/hZ6KeQCFzyWbQw_J1fDjug)（中文）

![](https://cdn.beekka.com/blogimg/asset/202201/bg2022011816.webp)

作者讲述自己怎么开始设计字库，最终开了一家创业公司，以销售原创字库为生。

3、[2020 年全球森林资源报告](https://www.fao.org/forest-resources-assessment/2020/zh)（中文）

![](https://cdn.beekka.com/blogimg/asset/202112/bg2021122007.webp)

这是联合国粮农组织的官方报告，展示了全世界目前的森林资源状况，有中文版。这个网页的可视化做得很好，值得借鉴。

4、[什么是重构？](https://understandlegacycode.com/blog/refactoring-and-defactoring/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202112/bg2021122013.webp)

本文是马丁·福勒的名著《重构》的读后感，讨论到底什么是软件重构，特别提出重构不应该改变软件行为。

5、[JavaScript Temporal API 简介](https://blog.openreplay.com/is-it-time-for-the-javascript-temporal-api)（英文）

Temporal API 是 JavaScript 下一代日期和时间的标准库，目前是第三阶段提案。本文对这个 API 做一个简单介绍。

6、[使用 Python 从头实现 RSA 算法](https://coderoasis.com/implementing-rsa-from-scratch-in-python/)（英文）

本文用 Python 代码讲解了 RSA 算法（公钥加密）是怎么回事，文章不长。

7、[Chrome 开发者工具的录制功能](https://developer.chrome.com/docs/devtools/recorder/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202112/bg2021120204.webp)

Chrome 浏览器的开发者工具可以录制用户操作了，并且可以导出脚本供无头浏览器 Puppeteer 使用。

8、[队列理论简介](https://thenewstack.io/an-introduction-to-queue-theory-why-disaster-happens-at-the-edges/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202111/bg2021111507.jpg)

软件开发的很多问题，其实都是队列问题，比如缓存、并行操作、延迟等等。本文介绍队列理论的一些基本知识，主要是如何防止队列堵塞。

## 工具

1、[MockingBird](https://github.com/babysor/MockingBird)

![](https://cdn.beekka.com/blogimg/asset/202112/bg2021122803.webp)

一个基于机器学习的中文语音克隆库，只要5秒的原始讲话录音，就能克隆该声音，让它说出任意给定文本。

2、[Redirector](https://github.com/einaregilsson/Redirector)

![](https://cdn.beekka.com/blogimg/asset/202112/bg2021122501.webp)

一个非常有用的浏览器插件，可以指定 URL 规则，一旦匹配，就会自动跳转到指定的网址。

3、[Imagor](https://github.com/cshum/imagor)

一个 Go 语言写的图像处理服务器，可以快速返回各种大小的图像缩略图。

4、[Gatsby](https://gatsby.video/)

![](https://cdn.beekka.com/blogimg/asset/202110/bg2021101101.jpg)

一个开源的点对点视频分享平台，视频存放在 IPFS 上面。

5、[CheerpX's REPL](https://repl.leaningtech.com/)

一个网页的命令行 REPL 环境，目前支持 Python、Ruby、NodeJS、Lua、C++ 五种语言。

6、[emojimix](https://tikolu.net/emojimix/)

![](https://cdn.beekka.com/blogimg/asset/202111/bg2021112304.jpg)

这个网站支持将两个不同的 Emoji 符号，合并成一个，比如上图是太阳和熊猫的合成图。

7、[特斯拉灯光秀](https://github.com/teslamotors/light-show)

![](https://cdn.beekka.com/blogimg/asset/202112/bg2021122505.webp)

![](https://cdn.beekka.com/blogimg/asset/202112/bg2021122504.webp)

一个很好玩的项目，让特斯拉汽车表演一段灯光秀，还能配乐，需要用到一个叫做 xlights 的工具。

8、[FakeYou Text to Speech](https://fakeyou.com/)

![](https://cdn.beekka.com/blogimg/asset/202112/bg2021122602.webp)

该网站使用欧美名人的口音，朗读用户输入的任何文本，只支持英文。目前有80多个名人口音，包括克林顿、《辛普森一家》的 Homer 等。

9、[Jodd](https://jodd.org/)

![](https://cdn.beekka.com/blogimg/asset/202201/bg2022011804.webp)

一个 Java 工具包，包含一些实用的小工具，增强 JDK 的功能，包体积不到 1.7M。

## 资源

1、[电子游戏中的自动售货机](https://vgsmproject.com/)

![](https://cdn.beekka.com/blogimg/asset/202112/bg2021121115.webp)

这个网站收集各种电子游戏里面出现的自动售货机，比如上图是 Fortnight 里面的自动售货机。

2、[Windows 控制面板的演变](https://www.versionmuseum.com/history-of/all-windows-control-panels)

![](https://cdn.beekka.com/blogimg/asset/202112/bg2021121801.webp)

该网页收集了历代 Windows 控制面板的外观变化，从 Windows 1.0 到 Windows 10。

3、[纪录片网站](https://ihavenotv.com/)

![](https://cdn.beekka.com/blogimg/asset/202111/bg2021111506.jpg)

这个网站提供3500多部高质量纪录片免费在线观看，不过都是英文的。

4、[区块链工程师的学习材料](https://betterprogramming.pub/how-to-become-a-blockchain-engineer-fa4386a0504f)

![](https://cdn.beekka.com/blogimg/asset/202112/bg2021121802.webp)

这个网页列出了区块链工程师的英文学习资源。

5、[软件工程师书单推荐](https://medium.com/@iamjwr/software-engineer-roadmap-via-books-a6aabdc2589c)（英文）

![](https://cdn.beekka.com/blogimg/asset/202112/bg2021122005.webp)

作者推荐了12本英文专业书籍，推荐软件工程师阅读。

## 图片和视频

1、[到处都是窗的建筑](https://www.nakam.info/jp/works/kamikatsu0/)

![](https://cdn.beekka.com/blogimg/asset/202111/bg2021111301.jpg)

![](https://cdn.beekka.com/blogimg/asset/202111/bg2021111305.jpg)

日本德岛县上胜町的资源回收中心，是一个木结构建筑。除了建筑主体的木材，其它建筑材料都使用了当地的废弃物品，比如地面使用了回收的玻璃和陶器。

它最引人注目的地方，就是整个建筑有700多扇窗子，都来自以前的老屋子。

![](https://cdn.beekka.com/blogimg/asset/202111/bg2021111302.jpg)

![](https://cdn.beekka.com/blogimg/asset/202111/bg2021111303.jpg)

![](https://cdn.beekka.com/blogimg/asset/202111/bg2021111306.jpg)

![](https://cdn.beekka.com/blogimg/asset/202111/bg2021111307.jpg)

2、[城市像素画](https://hello.eboy.com/pool/~Pixorama/1?q=project)

eboy 是国外的一个艺术团体，以像素画著称。他们的城市像素画系列（Pixoramas）非常有名。

![](https://cdn.beekka.com/blogimg/asset/202111/bg2021112106.jpg)

他们画笔下的城市，有着未来主义风格，充满了机器人和汽车。

![](https://cdn.beekka.com/blogimg/asset/202111/bg2021112104.jpg)

完成这样一张精细的作品，需要六周到八周。[官网商店](https://shop.eboy.com/)出售复制品，价格为一张几十欧元。

![](https://cdn.beekka.com/blogimg/asset/202201/bg2022012102.webp)

3、[下一代显示屏](https://www.youtube.com/watch?v=P0wL65A3Iyo&ab_channel=CNET)

三星公司在拉斯维加斯举行的消费电子展 CES 2022 上，展示了该公司正在开发的下一代折叠屏和柔性屏，请看下面的[一分钟视频](https://v.qq.com/x/page/t3318axh68i.html)。

<iframe frameborder="0" src="https://v.qq.com/txp/iframe/player.html?vid=t3318axh68i" allowFullScreen="true" width="600" height="400"></iframe>

折叠屏的出现，使得手机这种已经定型的产品，重新出现了许许多多的可能性。

## 文摘

1、[坏垄断和好垄断](https://ilearned.substack.com/p/13-on-competition-and-monopolies)

风险投资家、畅销书《从零到一》的作者彼得·泰尔（Peter Thiel）将垄断分成两种。

![](https://cdn.beekka.com/blogimg/asset/202201/bg2022012013.webp)

第一种垄断是通过非法手段打击竞争对手而获得的，他认为这种垄断是坏的。我们应该坚决反对。

第二种垄断则是因为某个公司做得非常出色，远超竞争对手，而自然获得的垄断地位，他认为，这种垄断是好的。

![](https://cdn.beekka.com/blogimg/asset/202201/bg2022012014.webp)

彼得·泰尔解释说，在完全竞争的市场，大家激烈竞争，利润将趋向于零。为了生存，企业不得不压低成本，设法降低工资、减少研发和创新投入、降低产品质量。

这时，如果有一家公司做出了特别好的产品，得到了市场的认可，获得了自然垄断的地位。由于不再担心与别人的竞争，因此就有可能提高工人的工资、增加研发、更关注产品对社会和环境的影响。

对于客户来说，选择并没有变少。反而因为自然垄断者在取得垄断的过程中，发明了更好的新东西，解决了难题，所以客户有了更多的选择。

当然，如果自然垄断者没有把垄断利润回报社会，或者投入再生产，而是用来压制竞争对手，那就需要纠正。

## 言论

1、

太空研究正在进入一个新阶段，随着火箭的负载越来越大，以及发射成本的降低和发射频率的提高，我们现在可以把真正大型的仪器发射到太空。

-- [《太空研究的新时代》](https://nautil.us/issue/108/change/nasa-is-on-the-cusp-of-a-new-era)

![](https://cdn.beekka.com/blogimg/asset/202112/bg2021120918.webp)

2、

根据统计，1979年至1983年间，顶级科学期刊有101项研究，声称发现了很有前途的新疗法或新药物。但是十年以后，其中只有五个发现能够做成产品上市。到了二十年以后的2003年，只剩下一种药物被广泛使用。

所以，你不应该相信新闻报道里面，那些令人兴奋的新医学成果，它们成功的机会其实很小。

-- [Vox.com](https://www.vox.com/2015/3/23/8264355/research-study-hype)

3、

一个充满限制和商品化的互联网，正在取代原来那个曾经互相连通和开放的互联网。

-- [《对抗越来越不利于用户的互联网》](https://neustadt.fr/essays/against-a-user-hostile-web/)

4、

对于非虚构类书籍，作者的写作能力与书籍销量无关。事实上，一个作者如果写得简明扼要，完全可以将一本350页的非虚构类书籍，简化成一篇40页的长文，但是这样的话，书价就到不了15美元了，而且销量也会比较小。

-- [Hacker News 读者](https://news.ycombinator.com/item?id=29507641)

5、

假设做一个调查，观察周围的人，如果他的主张可能是错的，他会改变看法，还是会坚持原来的主张？几乎所有人都选择，设法证明自己原来的主张没错。

-- [美国经济学家加尔布雷斯](https://quoteinvestigator.com/2018/05/17/change-view/)

## 历史上的本周

2021年（第 142 期）：[2020年才是21世纪元年](https://www.ruanyifeng.com/blog/2021/01/weekly-issue-142.html)

2020年（第 90 期）：[管人和技术是两种不同的能力](https://www.ruanyifeng.com/blog/2020/01/weekly-issue-90.html)

2019年（第 39 期）：[苹果公司的两封公开信](https://www.ruanyifeng.com/blog/2019/01/weekly-issue-39.html)

## 订阅

这个周刊每周五发布，同步更新在[阮一峰的网络日志](http://www.ruanyifeng.com/blog)和[微信公众号](http://weixin.sogou.com/weixin?query=%E9%98%AE%E4%B8%80%E5%B3%B0%E7%9A%84%E7%BD%91%E7%BB%9C%E6%97%A5%E5%BF%97)。

微信搜索“阮一峰的网络日志”或者扫描二维码，即可订阅。

![](https://cdn.beekka.com/blogimg/asset/202103/bg2021030402.jpg)

（完）
