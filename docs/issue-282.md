# 科技爱好者周刊（第 282 期）：电动皮卡 Cybertruck 的 48V 供电

这里记录每周值得分享的科技内容，周五发布。

本杂志[开源](https://github.com/ruanyf/weekly)，欢迎[投稿](https://github.com/ruanyf/weekly/issues)。另有[《谁在招人》](https://github.com/ruanyf/weekly/issues/3684)服务，发布程序员招聘信息。合作请[邮件联系](mailto:yifeng.ruan@gmail.com)（yifeng.ruan@gmail.com）。

## 封面图

![](https://cdn.beekka.com/blogimg/asset/202312/bg2023120511.webp)

上海14号线豫园地铁站，就在黄浦江边。屋顶设计采用几万片铝板，象征着一圈圈的水波，以及豫园的飞檐，并可以配合灯光形成一个天幕。（[via](https://www.archiposition.com/items/20220224043158)）

## 电动皮卡 Cybertruck 的 48V 供电

这个月，特斯拉的 Cybertruck 开始在美国交付了。

![](https://cdn.beekka.com/blogimg/asset/202312/bg2023120808.webp)

它是一辆皮卡，造型很奇特，车斗上面有一个挡板，打开就可以装货。

![](https://cdn.beekka.com/blogimg/asset/202312/bg2023120809.webp)

这辆车创造了很多世界第一。

> 1. 世界第一辆不锈钢汽车。
> 1. 钢板据说可以防弹，而且因为车形具有棱角，普通车辆撞到它会很惨。
> 1. 最重的皮卡，自重3.5吨，加上乘客和货物可以超过4吨，是普通皮卡的2倍。

但是，有一个世界第一，提到的人很少：**它是世界首辆车内供电全部为 48V 的汽车**。

![](https://cdn.beekka.com/blogimg/asset/202312/bg2023120810.webp)

大家知道，汽车内部有很多电器，都需要用电，比如电动门窗、空调、灯具、点烟器等等。这里就有一个车内的电压问题。

以前都是油车，没有太多的电子设备，不需要很大功率，所以电压定得比较低。一开始是 6V 的直流电，后来提高到 12V。

现在，市场上所有车辆，车内都有 12V 供电。相应的，车内的电子设备一般也是 12V 电压设计。

Cybertruck 是世界第一辆没有 12V 供电，只有 48V 供电的汽车。这意味着，它的所有电子设备都是专门定制的。

为什么 Cybertruck 放弃了 12V？

原因很简单，因为它的用电量太大了，12V 电压会使得电线不堪负荷。

![](https://cdn.beekka.com/blogimg/asset/202312/bg2023120811.webp)

有报道透露，单单是 Cyber​​truck 长达1.2米的巨型雨刷（上图），启动功率就要3600瓦，如果使用 12V 电压，电流将高达300安培，需要极粗的电线。

**改成 48V 以后，电压提高了4倍，电流只需要原来的四分之一**。

用电功率越来越大，这不单是 Cybertruck 面临的问题，其他电车都面临这个问题，12V 电压早就是汽车发展的一个限制。

改成 48V 有很多好处，主要有以下几点。

（1）电流变成原来的四分之一，就不需要很粗的电线了，可以大幅减少铜的用量，从而降低成本，同时减轻了整车重量。

（2）电流变小，还可以减少电线的发热量，使得传输损耗变小。

（3）48V 的电压，达到了以太网供电（POE）的电压标准，就可以用网线为一些设备供电，将信号传输和电源合成一根线。而且，以太网传输比现在的双绞线，速率更高，信号更稳定。

当然，48V 也有缺点，主要问题是配套的电子设备比较少，而且价格高。另外，整车的供电系统都需要重新设计。

好在特斯拉把 Cybertruck 的电路设计公开了，[主动提供给其他车厂](https://electrek.co/2023/12/07/tesla-shares-48v-architecture-with-other-automakers-to-move-the-industry/)。福特汽车的 CEO 发推说，没想到真能收到特斯拉发来的图纸，马斯克回复“不用谢”（下图）。

![](https://cdn.beekka.com/blogimg/asset/202312/bg2023121203.webp)

![](https://cdn.beekka.com/blogimg/asset/202312/bg2023121204.webp)

48V 肯定是未来的方向，希望国内的车企和汽配公司能够尽快跟进，升级供电电压。

## [活动] 人工智能线下沙龙（深圳站）

AI 是眼下的行业热点，也是投资和招聘最多的领域。

掘金社区，作为国内著名的开发者社区，将于**本周日在深圳举办一次线下活动**，为大家创造一个相聚结识的机会，共同探讨 AI。

![](https://cdn.beekka.com/blogimg/asset/202312/bg2023121309.webp)

活动主题为 **《大模型技术探索与 AIGC 应用创新》**，他们邀请了阿里、NVIDIA 等公司的四位技术大牛，分享各自拿手的话题，包括 Transformer 的处理，以及 AIGC 模型如何落地于实际业务。

活动的详细内容，请看[官方主页](https://www.bagevent.com/event/8756156?bag_track=ruanyifeng)，或扫描上方二维码，在那里免费报名。

珠三角的朋友如果本周日下午（12月17日）有空，可以去玩玩，地点就在字节的深圳湾工区。现场除了与嘉宾互动，还有茶歇环节，签到就赠笔记本、徽章套盒和贴纸。

## 科技动态

1、[盲人美术馆](https://www.thrillist.com/travel/nation/envision-arts-gallery-wichita-kansas)

![](https://cdn.beekka.com/blogimg/asset/202306/bg2023063004.webp)

盲人怎么参观美术馆？美国堪萨斯州最近就出现了一家专门接待盲人观众的美术馆。

![](https://cdn.beekka.com/blogimg/asset/202306/bg2023063005.webp)

它的所有展品都可以摸，为了便于盲人观众领会，这些艺术品经过重新设计，表面都有突起。

![](https://cdn.beekka.com/blogimg/asset/202306/bg2023063006.webp)

展品介绍也是可以摸的盲文。观众还会领到一个解说器，走到艺术品前面，就会听到自动解说。

![](https://cdn.beekka.com/blogimg/asset/202306/bg2023063007.webp)

2、[行驶里程最多的特斯特](https://insideevs.com/news/699413/highest-mileage-tesla-model-s-3-batteries-14-motors/)

世界上行驶里程最多的特斯拉，是一辆2014款的 Model S P85。

![](https://cdn.beekka.com/blogimg/asset/202312/bg2023120702.webp)

它一共行驶了190万公里，相当于每年21万公里。也就是说，即使一天都不休息，它这些年每天最少要行驶577公里。

![](https://cdn.beekka.com/blogimg/asset/202312/bg2023120703.webp)

目前还不清楚，这辆车为什么行驶了这么多里程。车主只是说，他用这辆车完成过许多海外旅行，去过非洲、摩洛哥、瑞典、奥地利和中国。

![](https://cdn.beekka.com/blogimg/asset/202312/bg2023120704.webp)

一辆纯电车能开这么多公里，真是不简单。它的核心部件已经换过多次，电机换过13次，电池组换过3次。

3、[船舶起伏发电](https://newatlas.com/marine/heave-oscillators-wave-energy-ship/)

大家可能听说过“波浪发电”，在海里放置一个发电机，利用海浪拍打的能量发电。

上海一家研究所提出，船舶也会经受波浪拍打，为什么不直接把它改造成发电机呢。

![](https://cdn.beekka.com/blogimg/asset/202312/bg2023120708.webp)

他们的设想是，在船舱底部放置一个三轴振荡器，连接一个液压缸和弹簧。

船体晃动时，振荡器会在三个方向上产生振动，从而带动液压缸，压缩/拉动弹簧发电。

![](https://cdn.beekka.com/blogimg/asset/202312/bg2023120709.webp)

但是，他们没有计算，这样到底能发多少电。考虑到船只总是选择风平浪静的路线，这个设计就算能做出来，发电量可能非常少。

4、[首个基因编辑疗法](https://finance.sina.com.cn/stock/usstock/c/2023-12-09/doc-imzxkvky9798727.shtml)

12月8日，美国批准首个基因编辑疗法，治疗血液的镰状细胞病（下图，由于基因缺陷，病人的血细胞不是正常的圆形，而是镰刀形）。

![](https://cdn.beekka.com/blogimg/asset/202312/bg2023121006.webp)

这标志着基因编辑技术 CRISPR 诞生10年后，正式用于临床了。

该疗法会抽取病人所有的造血干细胞，逐一进行基因编辑，删除有缺陷的基因，再将造血细胞输回人体。

这意味着，基因疗法可能只能用于血液病，因为其他器官无法进行逐一的细胞编辑，除非在胚胎时期就进行编辑。

而且，该疗法非常贵，最低价格是220万美元（约1500多万人民币），根本不是普通人可以负担的。

## 文章

1、[2023年 CSS 发展总结](https://developer.chrome.com/blog/css-wrapped-2023?hl=zh-cn)（中文）

![](https://cdn.beekka.com/blogimg/asset/202312/bg2023121202.webp)

Chrome 团队的总结，2023年 CSS 增加了哪些功能。

2、[一个越南程序员的阿里之旅](https://corecursive.com/software-world-tour-with-son-luong-ngoc/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202312/bg2023120705.webp)

作者是一个越南程序员，原来在 Lazada 工作。后来，Lazada 被阿里收购，他就来到阿里，在杭州西溪园区呆过一段时间。

现在，他已经跳槽到 Booking.com，本文是他讲述自己的故事，以及对阿里的感受。

3、[互联网档案馆参观记](https://thenewstack.io/a-visit-to-the-physical-internet-archive/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202310/bg2023103001.webp)

互联网档案馆（Internet Archive）是一个神奇的项目，目标是为 **所有网址** 保存一个备份，免费供大众查阅。

它在加州的总部可以购票参观，作者就去参观了，还遇到创始人为他们讲解。

4、[如何使用 Fail2ban 保护 SSH](https://linuxiac.com/how-to-protect-ssh-with-fail2ban/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202311/bg2023110106.webp)

一篇初学者教程，教你如何在 Linux 上使用 Fail2Ban，防止服务器被暴力破解密码。

5、[Web 组件比 JavaScript 框架更长久](https://jakelazaroff.com/words/web-components-will-outlive-your-javascript-framework/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202311/bg2023110208.webp)

作者需要一个页面效果，最终选择了 Web 组件来实现，这样可以与任何框架匹配。否则，换了一个框架，就需要重新实现。

6、[静态资源的缓存标头应该怎么写？](https://www.macarthur.me/posts/more-aggressive-cache-headers)（英文）

![](https://cdn.beekka.com/blogimg/asset/202309/bg2023092108.webp)

网站的静态资源，通常不会经常变动，它们的缓存应该怎么写 HTTP 标头呢。

7、[如何将 MP3 文件转为 Opus 格式？](https://www.worthe-it.co.za/blog/2023-08-20-building-a-digital-music-collection-in-2023.html)（英文）

![](https://cdn.beekka.com/blogimg/asset/202308/bg2023082108.webp)

Opus 是新的音乐编码格式，比 MP3 音频质量更好，而且压缩后体积还更小。

8、[如何降低手机的亮度](https://practicalbetterments.com/create-a-shortcut-for-even-lower-phone-brightness/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202311/bg2023110713.webp)

有时候，即使调到最暗，手机屏幕依然很亮，本文教你如何在苹果和安卓手机上，将屏幕调到极暗。

9、[如何使用 GPT-3 解析非结构化数据](https://marcotm.com/articles/information-extraction-with-large-language-models-parsing-unstructured-data-with-gpt/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202309/bg2023092401.webp)

作者演示一个实例，如何用 GPT-3 将公司的招聘帖子转成 JSON 数据。

## 工具

1、[Imagine](https://imagine.meta.com/)

![](https://cdn.beekka.com/blogimg/asset/202312/bg2023120803.webp)

Meta 公司推出的文生图工具，使用 Facebook 和 Instagram 的11亿张图片训练，现在可以免费使用。

2、[NotebookLM](https://notebooklm.google.com/)

![](https://cdn.beekka.com/blogimg/asset/202312/bg2023120902.webp)

谷歌发布的 AI 笔记工具，用户上传文档，然后可以对文档提问，并且自动生成笔记，目前对美国用户免费开放。参见[谷歌的介绍文章](https://blog.google/technology/ai/notebooklm-new-features-availability/)。

不过，它好像只支持上传英文的 PDF 文件。

3、[Scalar API Reference](https://github.com/scalar/scalar)

![](https://cdn.beekka.com/blogimg/asset/202310/bg2023101616.webp)

一个开源工具，将 Swagger/OpenAPI 文件转成互动式 API 文档。

4、[RoomGPT](https://github.com/Nutlope/roomGPT)

![](https://cdn.beekka.com/blogimg/asset/202310/bg2023101701.webp)

一个开源软件，你上传一张房间照片，它使用 AI 重新设计你的房间。

5、[Comments](https://github.com/DongHY1/comments)

![](https://cdn.beekka.com/blogimg/asset/202312/bg2023121403.webp)

一个开源的网页评论系统，类似于 Vercel Comment，可以对页面的各个部分拉框评论。它采用 GitHub 的身份认证，数据放在 supabase。（[@DongHY1](https://github.com/ruanyf/weekly/issues/3743) 投稿）

6、[GPT Assistant](https://github.com/ruanyf/weekly/issues/3725)

![](https://cdn.beekka.com/blogimg/asset/202312/bg2023120802.webp)

网友写的开源 GPT 安卓客户端，可以跟 AI 语音聊天，还可以发送图片到 GPT-4V，并基于安卓 WebView，让 GPT 访问任何网站。（[@Skythinker616](https://github.com/ruanyf/weekly/issues/3725) 投稿）

7、[MD Video](https://www.wvovw.com/guide/what-is-wvovw.html)

![](https://cdn.beekka.com/blogimg/asset/202312/bg2023121301.webp)

一个桌面软件，将 Markdown 文档转成一段短视频。（[@lqomg](https://github.com/ruanyf/weekly/issues/3736) 投稿）

8、[CodeGeeX2](https://github.com/THUDM/CodeGeeX2)

![](https://cdn.beekka.com/blogimg/asset/202312/bg2023121302.webp)

AI 编程助手，支持 VS Code、 IntelliJ IDEA、PyCharm、GoLand、WebStorm 等 IDE 编辑器，参见[介绍文章](https://github.com/CatsAndMice/blog/issues/72)。（[@CatsAndMice](https://github.com/ruanyf/weekly/issues/3731) 投稿）

9、[bproxy](https://github.com/zobor/bproxy)

![](https://cdn.beekka.com/blogimg/asset/202312/bg2023121004.webp)

一款抓包代理工具，可以拦截 HTTP 请求，配置文件是一个 JS 脚本。（[@zobor 投稿](https://github.com/ruanyf/weekly/issues/3728)）

10、[Trippy](https://trippy.cli.rs/)

![](https://cdn.beekka.com/blogimg/asset/202312/bg2023121005.webp)

一个命令行工具，可以代替 traceroute 查看互联网通信的路径，分析网络状况。

## 资源

1、[Mac 命令行命令](https://git.herrbischoff.com/awesome-macos-command-line/about/)

![](https://cdn.beekka.com/blogimg/asset/202212/bg2022120801.webp)

这个网站收集各种有用的 Mac 命令行的命令。

2、[现代统计学导论](https://openintro-ims2.netlify.app/)（Introduction to Modern Statistics）

![](https://cdn.beekka.com/blogimg/asset/202310/bg2023101403.webp)

一本面向大学新生的统计学入门教材，免费阅读。

3、[30天 Python 教程](https://github.com/Asabeneh/30-Days-Of-Python)

![](https://cdn.beekka.com/blogimg/asset/202310/bg2023101618.webp)

这个仓库是一个30天的 Python 入门课程，配有代码练习和视频。

4、[最漂亮的网页游戏](https://news.ycombinator.com/item?id=37931804)

![](https://cdn.beekka.com/blogimg/asset/202310/bg2023101902.webp)

Hacker News 的一个讨论帖，里面列举许多非常漂亮的网页游戏。上图出自游戏[《短途旅行》](https://alexanderperrin.com.au/paper/shorttrip/)（Short Trip）。

## 图片

1、[苏联台风级核潜艇](https://imgur.com/a/xi3P3)

苏联台风级核潜艇，诞生于上个世纪80年代，是世界最大的核潜艇。

标题链接收集了100多张历史照片，详细回顾了这个巨无霸的历史。

![](https://cdn.beekka.com/blogimg/asset/202307/bg2023071305.webp)

![](https://cdn.beekka.com/blogimg/asset/202307/bg2023071306.webp)

它一共建造了6艘，由于耗资巨大，苏联无力维持，目前已经全部退役。

2、[防鸟针鸟巢](https://www.naturalis.nl/en/about-us/media/press-releases/rebellious-birds-make-nests-out-of-anti-bird-pins)

荷兰科学家发现，很多鸟儿捡拾建筑上面金属的防鸟针，用来搭建鸟巢。这件事让人哭笑不得。

![](https://cdn.beekka.com/blogimg/asset/202307/bg2023071311.webp)

![](https://cdn.beekka.com/blogimg/asset/202307/bg2023071702.webp)

科学家还不能解释，鸟儿真的喜欢金属鸟巢吗？还是因为这些材料在城市中更容易得到？

![](https://cdn.beekka.com/blogimg/asset/202307/bg2023071703.webp)

![](https://cdn.beekka.com/blogimg/asset/202307/bg2023071704.webp)

## 文摘

1、[我的区块链经历](https://anicetnougaret.fr/blog/farswap-xp)

2022年，我得到了一个机会，一个人去葡萄牙首都里斯本，参加 NearCon 2022 会议。

![](https://cdn.beekka.com/blogimg/asset/202312/bg2023121404.webp)

这是一场为期4天的区块链会议和黑客马拉松。参加会议期间，我要为自己的 Web3 项目寻找投资者，并尽我所能推销这个项目。

我不习惯干推销，也没有信心详细解释它的加密机制，因为我主要从事前端开发工作。

但是，我是一个非常自信的人，不害怕在公众面前讲话，所以第一天我就在大会讲台上进行了推销。

![](https://cdn.beekka.com/blogimg/asset/202312/bg2023121405.webp)

我当时是21岁，许多人对我的自信和年龄产生了深刻的印象。我是最年轻的参会者之一，而且根据一些人的说法，我看起来比实际年龄还要年轻。

这让我很快结识了很多人，包括开发者、投资者和从事各种加密相关工作的人。

令我惊讶的是，NEAR 基金会为这次大会投入了疯狂的预算。考虑到它只是一种相当小众的加密货币，小众到没有在大多数交易所上市，所以会议的规格尤其令人难以置信。

![](https://cdn.beekka.com/blogimg/asset/202312/bg2023121406.webp)

大会耗费巨资：免费而且非常好吃的食物、免费的夜总会派对、丰厚的黑客马拉松现金奖励、配有大摄像头和大屏幕的大型会议室，以及良好的大会整体筹备。

这很奇怪啊，一家无人知晓的公司，为什么要在技术会议和公共活动上面投入如此多的资金。

似乎对他们来说，取悦一些在里斯本度过一个凉爽周末的开发者和投资者，换取对方对他们的更多投资，不对他们实用性存疑的技术丧失信心，才是首等重要的大事。

正是由于这件事，从此以后，我就对区块链的生态产生了怀疑。

## 言论

1、

世界上最富有的10位富豪，离婚过13次。

-- [collabfund.com](https://collabfund.com/blog/a-few-laws-of-getting-rich/)

2、

创业公司几乎就是一个“生活在未来”的地方。在创业的早期，你就像活在未来，因为你只关注一件事，就是如何做出一个未来大受欢迎的新产品。

-- [《你的问题不是你独有的》](https://landmines.substack.com/p/earning-the-privilege-to-work-on)

3、

以太坊曾被认为是“世界计算机”，允许人们将其用作计算资源。

这显然是一个愚蠢的想法，因为所有的计算都必须由所有全节点复制，这是极其冗余的。

-- [《还记得以太坊如何成为“世界计算机”吗？》](https://bramcohen.com/p/remember-how-ethereum-was-supposed)

4、

具有讽刺意味的是，忠诚的员工更可能被选为企业的剥削目标。企业会假设，忠诚的员工更愿意为企业做出个人牺牲。

-- [杜克大学的一项研究](https://www.sciencedirect.com/science/article/abs/pii/S0022103122001615)

5、

任何不经常改主意的人，都大大低估了我们生活的世界的复杂性。

-- 贝佐斯，亚马逊创始人

## 往年回顾

[青年失业率与选择创业](http://www.ruanyifeng.com/blog/2022/12/weekly-issue-235.html)（2022 #235）

[美国宪法拍卖，一个区块链案例](http://www.ruanyifeng.com/blog/2021/11/weekly-issue-185.html)（2021 #185）

[什么行业适合创业？](http://www.ruanyifeng.com/blog/2020/11/weekly-issue-135.html)（2020 #135）

[美国为什么不是乱哄哄？](http://www.ruanyifeng.com/blog/2019/12/weekly-issue-85.html)（2019 #85）

（完）

