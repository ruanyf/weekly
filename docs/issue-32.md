# 每周分享第 32 期

这里记录过去一周，我看到的值得分享的东西，每周五发布。

欢迎投稿，请前往 GitHub 的 [ruanyf/weekly](https://github.com/ruanyf/weekly) 提交 issue。

![](https://www.wangbase.com/blogimg/asset/201811/bg2018112301.jpg)

（题图：陆家嘴，上海，2018）

最近，我看到一个[小寓言](http://www.bbc.com/future/story/20160307-why-does-walking-through-doorways-make-us-forget)，很值得跟大家分享。

> 三个建筑工人正在砌砖头。
> 
> 路人问第一个工人：“你在干什么？”工人回答：“我在砌砖头。”
> 
> 他问第二个工人：“你在干什么？”工人回答：“我正在建造一堵墙。”
> 
> 他问第三个工人：“你在干什么？”工人回答：“我正在修建一座大教堂！”

虽然三个工人都在干同一件事情，但是他们看待的角度完全不一样。

程序员也应该具备这种多角度的思考能力。产品设计的时候，要有宏观思维，问问自己，为什么要开发这个软件，作用是什么，整个生态里面它扮演什么角色。技术选型的时候，要有中观思维，把软件看成不同模块的集合体，明确每个模块的作用。代码开发的时候，要有微观思维，函数怎么写，循环体怎么优化，单元测试怎么构造。

总之，我们要能够随时切换角度，从不同的高度理解自己正在做的事情。比如，这个周刊在收集有用的链接，也是在营造一个社区，更是为迎接未来世界在做准备。

## 新闻

1、[同性父母的老鼠](https://www.theguardian.com/science/2018/oct/11/mice-same-sex-parents-born-same-sex-reproduction-humans)

![](https://www.wangbase.com/blogimg/asset/201811/bg2018112302.jpg)

中国科学院的团队成功培育出了一个健康的老鼠，它没有父亲，但是有两个母亲，是同性繁殖的产物。

这项工作探讨了生物学一个长期存在的问题：为什么哺乳动物必须有母亲和父亲？原因是哺乳动物有100个左右的特殊基因，只有来自母亲的 DNA 或来自父亲的 DNA 才能开启。科学家使用基因编辑工具，在雌性小鼠的 DNA 中删除母系印记，使得遗传物质看起来像来自“男性”，然后将修改过的 DNA 注射到第二只雌性小鼠的卵子，来自两只雌性小鼠的遗传物质就组合形成胚胎。

2、[重新定义公斤](https://www.theguardian.com/science/2018/nov/03/the-future-of-the-kilo-a-weighty-matter-international-prototyp-kilogram-paris-kibble-balance)

![](https://www.wangbase.com/blogimg/asset/201811/bg2018112303.jpg)

巴黎的国际度量衡局里面，保存着一个国际公斤原件。它是一个铂铱合金的圆筒，代表1000克的重量。全世界的公斤度量衡都是根据这个原件制定的。这个公斤原件只有一件，一旦损毁，全世界的公斤有失去标准的危险。而且这些年来，它本身的重量是否保持不变，也是有疑问的。

为了解决这个问题，11月16日在巴黎举行的国际度量衡大会上，科学家们决定改用普朗克常数定义公斤，废除这个公斤原件。

3、[Raspberry Pi 3 Model A+](https://techcrunch.com/2018/11/15/raspberry-pi-3-model-a-is-a-compact-yet-powerful-raspberry-pi/)

![](https://www.wangbase.com/blogimg/asset/201811/bg2018112304.jpg)

今年3月，树莓派基金会发布了 Raspberry Pi 3 Model B+ 型号，但是没有发布 A+。现在，A+ 终于发布了。

它的配置比 B+ 稍弱，主要差异在于内存从 1GB 改成 512MB，USB 2.0端口只有一个，并且没有以太网端口。价格为25美元，比 B+ 低了10美元。它比较适合不需要较大内存和联网的任务。

4、[InSight 火星探测器登陆](https://mars.nasa.gov/insight/)

![](https://www.wangbase.com/blogimg/asset/201811/bg2018112305.jpg)

下周一（11月26日）格林尼治时间19:47，InSight 火星探测器将在火星上降落。美国航天局 NASA 官网将有现场直播。

该探测器是今年5月发射的。它是一个静态探测器，无法移动，不会像“好奇号”那样在地面漫游。这次探测第一次把研究重点放在火星内部。InSight 火星探测器将把地震仪放在地面上，以探测“火星震动”。这些震动将揭示地下岩石是如何分层的，这些数据可以与地球相比较，从而进一步揭示46亿年前行星形成的原因。

5、[二氧化碳生产蛋白质](http://www.solarfoods.fi/)

![](https://www.wangbase.com/blogimg/asset/201811/bg2018112306.jpg)

荷兰一家创业公司发明了一种方法，可以只用二氧化碳、氮气、水和少量微量元素，在电力的作用下合成蛋白质。

欧洲航天局已经与这家公司合作，试图解决火星考察的宇航员食品问题。前往火星的飞行需要几个月，一旦人类在火星停留，那里最多的就是二氧化碳，如果能找到生产食物的方法，将大大加速火星考察。

6、[全息影像教师](https://www.bbc.com/news/technology-46060381)

![](https://www.wangbase.com/blogimg/asset/201811/bg2018112307.jpg)

伦敦帝国理工学院宣布，将采用教师的全息影像进行远程讲课。因为比起视频会议软件，全息影像能够提供更强的存在感。

7、[人工智能测谎](https://gizmodo.com/an-ai-lie-detector-is-going-to-start-questioning-travel-1830126881)

![](https://www.wangbase.com/blogimg/asset/201811/bg2018112308.jpg)

欧盟开始试验，在匈牙利、拉脱维亚和希腊的边境检查所，对非欧盟的入境者进行人工智能测谎。该系统会向入境者提问，然后监控回答者的脸部，对每个反应进行评分。一旦测谎失败，将交由人工进行第二轮测评。

据报道，该系统的准确率目前是76%，开发者计划在测试结束后，将准确率提高到85%。

8、[小行星采矿](https://physicsworld.com/a/the-asteroid-trillionaires/)

![](https://www.wangbase.com/blogimg/asset/201811/bg2018112309.jpg)

美国宇航局取消了小行星捕获任务的预算。这个项目原计划将小行星拉入地球轨道，以便更容易地研究和开采。

据估算，小行星采矿是有利可图的。捕获并开采小行星的成本，可能在26亿美元左右，然后一个足球场大小的小行星可能包含价值500亿美元的白金。这里的风险是，如果地球一下子得到那么多白金，白金可能变得不值钱。

9、[旧金山空气污染创记录](https://www.sfgate.com/california-wildfires/article/how-bad-is-air-in-sf-bay-area-smoke-breathe-record-13400047.php#photo-16516503)

![](https://www.wangbase.com/blogimg/asset/201811/bg2018112310.jpg)

由于加州森林大火，整个加州的空气质量最近都非常差。11月16日，旧金山的 PM2.5 空气质量指数 AQI 达到了271，是有史以来最高的。

10、__一句话新闻__

* [美国的自由职业者](https://www.upwork.com/press/2018/10/31/freelancing-in-america-2018/)达到5760万，三个劳动力里面就有一个自由职业者。技术使得找工作变得更容易，64％的自由职业者在网上找工作。

* [索尼](https://www.usatoday.com/story/tech/talkingtech/2018/11/16/sony-pulls-out-e-3-rumors-2020-playstation-5-launch-grow/2023106002/)宣布缺席2019年6月的 E3 大展，24年来第一次，并且没有说明理由。外界怀疑，它将在这段时间发布 Play Station 5。
    
* [国际能源署](https://www.bloomberg.com/opinion/articles/2018-11-16/oil-demand-for-cars-and-transportation-is-already-falling)认为，由于电动汽车发展比预期快，用于汽车的汽油需求量可能已经达到顶峰，以后会不断下降。
    
* [美国联邦通信委员会](https://www.reuters.com/article/us-usa-wireless-fcc/u-s-regulator-demands-companies-take-action-to-halt-robocalls-idUSKCN1NA2KH)要求，2019年美国所有通信服务商必须部署“呼叫认证系统”，能够追踪到真实的拨打电话的人。因为美国的骚扰电话实在太严重，今年4月全美骚扰电话达到34亿个，10月更是上升到了51亿个。

## 教程

1、[TCP 协议的堵塞控制算法](http://squidarth.com/rc/programming/networking/2018/07/18/intro-congestion.html)（英文）

网络数据包如果一次发送太多，就会造成网络拥堵；如果发送太少，就浪费了带宽，延长了通信时间。TCP 协议有一个拥堵窗口机制，负责动态调整每次发送数据包的数量。本文通俗地解释了这种算法的细节。

2、[使用 Go 编写前端 Web 框架](https://tutorialedge.net/golang/writing-frontend-web-framework-webassembly-go/)（英文）

本文使用 Go 语言编写一个非常简单的前端单页应用，然后将它编译成 WebAssembly。所有功能，包括前端组件和前端路由，都是用 Go 写的。看上去，网页编程即将不再是 JS 的专利了。

3、[破坏程序员生产力的12件事](https://anaxi.com/blog/2018/10/15/top-12-things-that-destroy-developer-productivity/)（英文）

本文列出了影响程序员工作效率的常见情景：工作经常被打断、领导进行微观管理、产品需求不断扩大等等。

4、[使用 Pandas 处理 CSV 文件](https://jalammar.github.io/gentle-visual-intro-to-data-analysis-python-pandas/)（英文）

![](https://www.wangbase.com/blogimg/asset/201811/bg2018112311.jpg)

Pandas 是一个用于数据操作和分析的 Python 库，本文通过一个范例，介绍如何使用它对 CSV 文件进行数据处理。

5、[排版入门](https://www.invisionapp.com/inside-design/typography-tips/)（英文）

![](https://www.wangbase.com/blogimg/asset/201811/bg2018112312.jpg)

介绍排版的基本知识。

6、[创业公司的20个指标](https://anishgodha.com/2018/06/15/guide-to-angel-investing/)（英文）

一位风险投资家的观点，如何判断一家创业公司是否值得投资。

7、[使用 Neovim 进行 JavaScript 开发](https://hackernoon.com/using-neovim-for-javascript-development-4f07c289d862)（英文）

如果你喜欢 Vim 的便捷，又喜欢 VS Code 的图形界面，那么可以试试 Neovim。本文介绍如何配置 Neovim，以适应 JavaScript 开发。

8、[Python 使用数字与字符串的技巧](http://www.zlovezl.cn/articles/tips-on-numbers-and-strings/)（中文）

本文是《Python 工匠》系列的第三篇，介绍在 Python 中编写与数字和字符串相关代码的建议与技巧。（作者@[piglei](https://github.com/ruanyf/weekly/issues/58)__ __投稿）

9、[GitHub 十大最佳实践](https://datree.io/blog/top-10-github-best-practices/)（英文）

如何才能最好地使用 GitHub 管理项目，本文提供了具有可操作性的十条建议。

## 资源

1、[DevTube](https://dev.tube/)

该网站收集 Youtube 上面的软件开发视频。

2、[互联网的历史文件](https://rscott.org/OldInternetFiles/)

互联网早期是没有 DNS 系统的，所有域名与 IP 地址的映射关系都保存在一个 hosts.txt 文件里面，该文件起到 DNS 系统的作用。这个网站收集了各个时期的 hosts.txt 文件。

3、[Code I like](https://www.codelike.in/animation/binary-search-tree/)

该网站使用图形和动画，解释一些常见的算法问题。链接是如何在二叉搜索树里面插入一个值的动画。

4、[C/C++ 面向 wasm 编程—— Emscripten 工程实践](https://github.com/3dgen/cppwasm-book)

![](https://www.wangbase.com/blogimg/asset/201811/bg2018112313.jpg)

中文开源电子书，大部分还没有写完。本书从 Emscripten 基本用法开始介绍如何使用 C/C++ 开发 WebAssembly 模块。

5、[OI-wiki](https://github.com/24OI/OI-wiki)

收集编程竞赛的基础知识、常见题型、解题思路以及常用工具等内容。

6、[Go modules by example](https://github.com/go-modules-by-example/index)

一个代码示例库，解释 Go 语言的 module 功能。

7、[线性代数入门](https://hadrienj.github.io/posts/Deep-Learning-Book-Series-Introduction/)

![](https://www.wangbase.com/blogimg/asset/201811/bg2018112314.jpg)

本教程帮助初学者掌握，深度学习所需要的线性代数知识，每一部分都包含代码、示例和图表。

8、[Levels.fyi](https://www.levels.fyi/)

![](https://www.wangbase.com/blogimg/asset/201811/bg2018112315.jpg)

每个公司都有自己的内部等级，该网站比较各公司的等级对应关系，收录了北美20多家互联网公司。上图是谷歌、脸书、微软的工程师等级。

## 工具

1、 [Mu](https://codewith.mu/)

![](https://www.wangbase.com/blogimg/asset/201811/bg2018112316.jpg)

一个针对初学者或儿童的 Python 编辑器。

2、[localroast](https://github.com/caalberts/localroast)

一个根据 JSON 文件快速生成 API 的 Web 服务端，主要用了测试和开发环境。

3、[I Ching](https://iching.codes/)

![](https://www.wangbase.com/blogimg/asset/201811/bg2018112317.jpg)

有人用中国古代《易经》的六十四卦象，作为二维码的图像，编码和解码库都已经开源了。

4、[ml5.js](https://ml5js.org/)

一个基于 TensorFlow.js 的机器学习封装库，提供方便易用的 API，可以用于图像分类和视频分类等常见用途。

5、[howler.js](https://howlerjs.com/)

支持各种网页音频格式解码的 JS 库。

6、[GitHub Timeline](https://githubtimeline.xyz/)

只要输入用户名，就能看到该用户自己看到的 GitHub 时间线。

7、[autojump](https://github.com/wting/autojump)

Linux 系统 cd 命令的替代工具，可以记住常用路径，然后只要输入路径的一部分即可。（@[wisezhao](https://github.com/ruanyf/weekly/issues/54) 投稿）

8、[haroopad](http://pad.haroopress.com/user.html)

跨平台的 Markdown 桌面编辑器，多种界面皮肤，支持 vim 快捷键，多格式输出。（@[wisezhao](https://github.com/ruanyf/weekly/issues/53) 投稿）

9、[NVDA](https://www.nvaccess.org/download/)

供盲人使用的网页屏幕阅读器。如果你想体验盲人怎么浏览网页，可以下载这个软件试试看。

## 文摘

1、[为什么 Instagram 网红可以全球旅行？](https://www.theatlantic.com/technology/archive/2018/06/instagram-influencers-are-driving-luxury-hotels-crazy/562679/)

![](https://www.wangbase.com/blogimg/asset/201811/bg2018112318.jpg)

三年前，[Lisa Linh](https://www.instagram.com/bylisalinh/) 辞去了全职工作，在世界各地旅行，从墨西哥到魁北克再到库克群岛，一路在 Instagram 发表美照，她有近10万名粉丝。通常她会免费入住各地的豪华酒店，Instagram 上面有很多这样的网红，她们是怎么做到的？

虽然她有时会收到酒店的邀请，但是大多数时候，她利用社交媒体影响力来环游世界，让酒店承担假期的全部费用，以换取在社交媒体曝光。

马尔代夫五星级度假村 Dusit Thani 的营销经理说，酒店每天至少收到六个网红的请求，通常是通过 Instagram 直接留言。她说：“网红说，我想来马尔代夫7天，并将在 Instagram 上发两张照片。”马尔代夫不是一个便宜的目的地，住5到7个晚上是一大笔钱。她说，收到的请求中只有大约10％值得认真对待。

![](https://www.wangbase.com/blogimg/asset/201811/bg2018112319.jpg)

一些酒店不堪骚扰，拒绝所有 YouTube 和 Instagram 网红的请求。  一位酒店老板在脸书写道：“如果我让你免费住酒店，以换取社交媒体的曝光。我能不能告诉员工，你入住期间，我不会付给他们工资，他们的报酬将是在你的视频中出现？”

![](https://www.wangbase.com/blogimg/asset/201811/bg2018112320.jpg)

但是，大多数酒店愿意与网红合作。毕竟，Instagram 已经膨胀到每月8亿活跃用户，其中很多用户有能力全球旅行。对于酒店来说，最大的问题是识别谁是真正的网红，必须过滤掉那些购买僵尸粉的人。另外，酒店还必须防止网红拍出无用的照片，比如许多网红只是在沙滩上拍摄几张比基尼照片，但用户无法分辨出这是哪家酒店，它可能在马尔代夫的任何地方。

有些网红为了吸引酒店，除了提供社交媒体曝光，还会提供其他服务，比如帮助酒店拍一些视频和照片，用在宣传手册和官网，这比聘请专业摄影师或摄像师省钱；再比如为酒店社交媒体团队举办训练营，培训员工如何使用 Facebook 和 Instagram 推广品牌。

2、__吗啡和海洛因__

以下摘自科普读物《阿加莎的毒药》。

18世纪，人们就知道罂粟可以制造鸦片。鸦片具有镇痛作用，但是人们不知道它的有效成分到底是什么。

德国化学家弗雷德里希·赛尔吐纳（Friedrich Sertürner，1783—1841）16岁时，曾听见医生说有些鸦片比其他鸦片威力更大。于是，他估计鸦片是各种杂质的混合物，其中也许只包含了一种活性成分。他花了几年时间终于从鸦片中提取到一种白色的晶体，他用它在自己和三个朋友身上做实验。所有人全都感觉到一种严重的恶心，接下来昏睡了24小时。因此，赛尔吐纳将该种化合物命名为吗啡，象征古希腊睡神索莫纳斯（Somnus）之子梦神马菲斯（Morpheus）。后来，赛尔吐纳有一次得了严重的牙疼，即使用鸦片也无济于事，于是他再次试用那种白色粉末，但这次用了很小的剂量。他没有出现像上次那样的昏睡症状，而且牙疼也彻底消失了。

19世纪后半期，化学家们在吗啡的结构上动了各种脑筋，希望改进其药物作用。其中一项成功的改造是在吗啡里添加二乙酰基，形成二乙酰吗啡。二乙酰基的添加增强了吗啡在油脂里的分子溶解度，使其更容易突破血脑屏障。一旦进入大脑，酶就会迅速转移二乙酰基，将二乙酰吗啡还原为吗啡，然后与大脑里的阿片受体直接发生作用。因此，二乙酰吗啡起效比吗啡更快，也就是说威力更大。它会令你感觉自己像个英雄，所以俗称“海洛因”（拉丁语原意为英雄）。

二乙酰吗啡最初诞生于德国的拜尔化学品公司的实验室里。吗啡转制为海洛因的化学处理非常简单，因此这种威力强大的药物就被大量、廉价、方便地制造出来。海洛因于1898年被投向了市场。一开始，海洛因是作为一种强效的吗啡类药物来销售的，被推荐使用于遭受任何形式的痛苦的成人和儿童。但是，该药物的高度聚集性和快速起效性，导致了它的致瘾性远远大于吗啡，该药的断瘾症状也远比吗啡来得强烈，因为再度吸食的欲望更强。海洛因投入市场的四年后，人们终于认识到了它的高度致瘾性，许多国家开始禁止该药。全世界的大部分国家至今依然禁止海洛因的制造、运输和销售，因为人们认为对它上瘾的危险要远大于它所带来的益处。

从医学角度来看，吗啡最主要的作用就是镇痛，至今仍被视为是最好的止疼药之一。吗啡与大脑皮层内的阿片受体发生相互作用，能修改我们对疼痛产生的感觉。一个处于吗啡作用下的人，也许仍然能意识到疼痛，但不会介意疼痛。

吗啡的作用一般持续3到6个小时。若要控制严重的疼痛，一般需要持续施药。在一开始施加了几个剂量之后，我们的身体会渐渐适应吗啡的存在，之后再要产生镇痛作用，就需要更大剂量的吗啡。在几个星期的持续治疗后，病人可能需要比开始时大100倍的剂量才能达到效果。为了获得开始治疗时的镇痛效果，就需要持续不断地增加剂量。因此，吗啡治疗的持续时间越长，患者就越容易产生上瘾性。

当我们的身体适应了吗啡的存在，对该药的突然减用或停用会导致断瘾症状的出现。细胞会突然发现大量的阿片受体没有足够的吗啡或完全没有吗啡去刺激它们。这能导致一系列症状的出现，包括焦虑、盗汗、呕吐、腹泻、寒颤、骨痛、心律失常、情绪低落和头痛。这些症状尽管令人非常难受、饱受折磨，但基本都不会致命。在漫长的戒毒期里，阿片受体的数量会逐渐减少，在数周乃至数月后可恢复到正常水平。

呼吸频率的减少，是服用吗啡的一个很严重的副作用。这就是过量用药或中毒会引起死亡的原因。正常情况下，呼吸频率在我们的身体里受到严密的监督和控制。鸦片会降低呼吸中枢对二氧化碳的敏感度，抑制该部位的自主运动，因此呼吸就会变慢，甚至可能在睡梦中完全停止。吗啡的致死剂量一般在100到300毫克之间，不过一个瘾君子可以承受该剂量的10到20倍之多。

## 本周图片

1、[沙漠公路](https://sputniknews.com/photo/201806201065576834-arab-emirates-sand-roads/)

阿联酋在沙漠里面建造高速公路，现在不可避免地面临沙漠吞噬公路的问题。

![](https://www.wangbase.com/blogimg/asset/201811/bg2018112321.jpg)


![](https://www.wangbase.com/blogimg/asset/201811/bg2018112322.jpg)

2、__Okunoin 公墓__

和歌山县的高野山，有一个日本最大的公墓 Okunoin（奥之院）。公元835年，日本佛教大师[空海和尚](https://baike.baidu.com/item/%E5%BC%98%E6%B3%95%E5%A4%A7%E5%B8%88)死于这里，后来规定符合资格的日本佛教徒，都可以将骨灰埋在附近。超过1000年来，总共有20万人埋葬在这个公墓，联合国认定为世界遗产。

![](https://www.wangbase.com/blogimg/asset/201811/bg2018112323.jpg)

![](https://www.wangbase.com/blogimg/asset/201811/bg2018112324.jpg)

3、[最偏僻的小屋](https://www.getalookatthis.com/secluded-house-on-a-far-away-island/)

我经常看到下面这张照片，现在终于知道它是位于冰岛西南海岸的 Elliðaey 岛。

![](https://www.wangbase.com/blogimg/asset/201811/bg2018112325.jpg)

三百年前，Elliðaey 岛上居住着五个家庭。他们住在小屋里，在岛上的草地上养牛，并通过海雀狩猎获得食物。1930年代，这些居民离开了这个岛屿。1953年，Elliðaey 狩猎协会为其成员建造了一个小屋，供他们在岛上捕捉海雀时使用。

![](https://www.wangbase.com/blogimg/asset/201811/bg2018112326.jpg)

## 新奇

1、[磁铁炸鸡蛋](https://www.instructables.com/id/DIY-Induction-Stove/)

![](https://www.wangbase.com/blogimg/asset/201811/bg2018112327.jpg)

我们知道，运行的磁场会产生感应电流。有人就用旋转的磁铁，在电锅里炸鸡蛋。他把10块磁铁装在一个圆盘上，然后使用跑步机的马达，让这个圆盘不断旋转。这时，上面放一个导电煎锅就会产生涡流，把鸡蛋烤熟。

## 本周金句

1、

同一个应用程序，QT 写出来的界面比 HTML5 写出来的内存占用低4-8倍，CPU 占用也低。这意味着，运行 HTML5 应用程序会导致更多的运算，消耗更多的电力，要求消费者更频繁地升级机器，从而产生更多的电子垃圾。

--[《生态友好的程序员》](http://john.mercouris.online/eco-programmer-guide.html)

2、

我写小说的秘诀就是不停的修改，每次修改都必须让小说变得更短，第二稿至少比第一稿短10%。

-- 《[畅销小说之王斯蒂芬·金对程序员的启示](https://www.mokacoding.com/blog/stephen-king-advice-to-software-developers/)》

3、

我离开谷歌的部分原因，是因为我觉得自己没有足够的自主权，我想要更小更快的东西，而不是公司让我做的东西。

-- [一位谷歌员工](https://www.kapwing.com/blog/how-to-quit-your-big-co-job-to-start-a-company/)谈为什么辞职

4、

瑞士有世界最发达的化工和制药行业，主要原因是19世纪瑞士没有专利制度，一些法国化学家移居瑞士以规避法国专利。

--[ HN 读者留言](https://news.ycombinator.com/item?id=17329345)，分析专利制度与工业发展的关系。他提到，当今世界最大制药公司之一的诺华，成立于1859年，早期是一家无许可证而使用法国专利的丝绸染色企业。它转向制药业的主要原因是，直到1907年，瑞士才实行专利法。

## 欢迎订阅

这个专栏每周五发布，同步更新在我的[个人网站](http://www.ruanyifeng.com/blog)、[微信公众号](http://weixin.sogou.com/weixin?query=%E9%98%AE%E4%B8%80%E5%B3%B0%E7%9A%84%E7%BD%91%E7%BB%9C%E6%97%A5%E5%BF%97)和[语雀](https://yuque.com/ruanyf/share/)。

微信搜索“__阮一峰的网络日志__”或者扫描二维码，即可订阅。

![](http://www.ruanyifeng.com/blogimg/asset/2018/bg2018042311.jpg)

（完）
