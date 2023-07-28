# 科技爱好者周刊（第 264 期）：Elasticsearch 的启示

这里记录每周值得分享的科技内容，周五发布。

本杂志[开源](https://github.com/ruanyf/weekly)，欢迎[投稿](https://github.com/ruanyf/weekly/issues)。另有[《谁在招人》](https://github.com/ruanyf/weekly/issues/3222)服务，发布程序员招聘信息。合作请[邮件联系](mailto:yifeng.ruan@gmail.com)（yifeng.ruan@gmail.com）。

## 封面图

![](https://cdn.beekka.com/blogimg/asset/202307/bg2023072501.webp)

上海市宝山区在长江入海口，建了一个“长滩观光塔”，直径25.7米，高180米。特别之处在于，这个塔其实是长江隧道的排风塔，只不过在外部安装了玻璃幕墙，增加了观光、餐厅等功能。（[via](https://www.shbsq.gov.cn/shbs/rdtj/20221223/354447.html)）

## Elasticsearch 的启示

上月的“红帽事件”，说明开源软件的“客服模式”行不通，我在[上一期](http://www.ruanyifeng.com/blog/2023/07/weekly-issue-263.html)已经写了自己的看法。

那么，开源软件如何赚钱呢？**既不能卖软件，又不能卖支持服务，该怎么办呢？**

我一直思考这个问题，觉得行业的发展、个人的前途，都跟它有关系。

![](https://cdn.beekka.com/blogimg/asset/202307/bg2023072304.webp)

我现在的看法是，**只剩下一种模式是可行的**，开源软件只有这样才能商业化，那就是 Elasticsearch 的模式。

![](https://cdn.beekka.com/blogimg/asset/202307/bg2023072305.webp)

Elasticsearch 是著名的搜索软件，市场份额非常大，很多大型网站的背后都是它。

2004年，以色列程序员谢伊·巴农（Shay Banon）为了方便妻子查找菜谱，写了一个简单的搜索工具，这就是 Elasticsearch 的由来。

![](https://cdn.beekka.com/blogimg/asset/202307/bg2023072306.webp)

一开始，Elasticsearch 采用最宽松的 Apache 许可证，几乎没有任何限制，你怎么用都可以。

后来，谢伊·巴农拿了风投，成立了公司，雇了程序员，就必须有收入，否则公司就要裁员关门。

**他想到的办法，就是提供云服务**。你不必自己搭建搜索了，我搭建好了，你买了就能用。这样你比较省心，我也有收入了。

![](https://cdn.beekka.com/blogimg/asset/202307/bg2023072307.webp)

但是，他万万没有想到，这种模式也行不通。原因是**开源软件不是独占性的，如果你的软件太成功，其他人也可以提供服务**，而且卖得更便宜，最终把你打败，拿到更大的市场份额。

Elasticsearch 倒霉的地方在于，遇到的竞争对手是亚马逊，世界第一的云服务商。

亚马逊不花一分钱，拿到 Elasticsearch 的代码，搭建搜索服务出售，很快就让原始作者没生意了。

![](https://cdn.beekka.com/blogimg/asset/202307/bg2023072308.webp)

眼看公司有挂掉的风险，Elasticsearch 做出了一个石破天惊的决定。

2021年，谢伊·巴农宣布，放弃 Apache 许可证，改用新的许可证：代码依然开源，但是不允许用户销售该软件的云服务，除非你愿意公开整个服务端。（注意，是整个服务端，不仅是搜索的部分。）

亚马逊明摆着不会接受这个条件，所以新的许可证实质就是不允许亚马逊（也包括谷歌和微软）再卖 Elasticsearch 云服务了。

作为业界老大，亚马逊当然咽不下这口气。它索性撕破脸，把 Elasticsearch 的代码分叉，开始维护自己的版本，起名为[OpenSearch](https://aws.amazon.com/cn/opensearch-service/)，继续采用 Apache 许可证，让社区无偿使用。双方就对干起来了。

![](https://cdn.beekka.com/blogimg/asset/202307/bg2023072601.webp)

现在还看不出来谁赢谁输，但是不管怎样，Elasticsearch 有了起码的生存保障，收入稳定下来了。你要用正宗的搜索服务，只有买他家的。

我认为，**这是目前唯一可行的开源软件商业模式**。

有人把它叫做“[开源核心模式](https://handbook.opencoreventures.com/open-core-business-model)”：代码的核心功能是开源的，可以免费使用，但是存在某些限制，比如云服务是独家的，或者某些插件和周边工具是闭源的，需要付费。

目前，采用这种模式的知名开源软件，除了 Elasticsearch，还有 MongoDB。

**开源软件创业，建议就采用这种模式**。你同时维护两个版本：一个是开源的社区版，让大家免费使用，积累用户和口碑；另一个是收费的企业版，拥有更多功能和客服支持。

## 科技动态

1、[超声波冬眠](https://www.science.org/content/article/ultrasound-brain-pulses-put-mice-hibernation-state)

华盛顿大学的研究团队发现，对准老鼠大脑的某个部位发射超声波脉冲，会使得老鼠进入冬眠。

![](https://cdn.beekka.com/blogimg/asset/202305/bg2023052901.webp)

这意味着，冬眠可以人工触发。这或许可以用于执行长途太空任务的宇航员，让其在长途旅行中进入冬眠状态。

不过，有的科学家不认同这个发现，认为这只不过是超声波发射能量，激活了大脑的温度神经元，欺骗大脑认为环境温度升高，从而自动降低了动物体温，让动物进入不活跃状态。

2、[美国网络可信标志](https://www.theverge.com/2023/7/18/23798153/fcc-cyber-trust-mark-biden-security)

美国政府宣布，将对联网的家用电器推行“网络可信标志”（下图），表示该设备是信息安全的。

![](https://cdn.beekka.com/blogimg/asset/202307/bg2023072401.webp)

这个标志带有一个 Logo 和二维码，用户扫描后，会进入详细说明的网页。

![](https://cdn.beekka.com/blogimg/asset/202307/bg2023072402.webp)

目前，该标志是自愿加入，但也说不准哪一天就变成了强制认证。那时，如果不发给中国公司，就等于是变相的市场壁垒。

3、[医院黑匣子](https://www.wsj.com/amp/articles/surgery-technology-data-black-boxes-a8bc483b)

一家加拿大公司推出了“医院黑匣子”，类似于飞机的黑匣子，记录手术过程中产生的一切信息，包括视频、音频、仪器数据等等。

![](https://cdn.beekka.com/blogimg/asset/202303/bg2023032102.webp)

该设备可以用于事后的手术分析，以减少医疗错误、保障患者安全、提高手术效率，还能用于医生培训。如果手术出错，它有助于了解到底哪一步发生了问题。

有些医生反对该设备，认为属于对医生的监控，会增加医疗诉讼。为了平息反对意见，该设备目前自动对所有数据进行匿名化处理，即使数据泄露，外界也无法使用。

4、[太阳射电望远镜](http://www.stdaily.com/index/kejixinwen/202305/ae99861e29034bd59c22a768234af466.shtml)

全世界最大的太阳射电望远镜，在甘孜稻城启用。

![](https://cdn.beekka.com/blogimg/asset/202307/bg2023072701.webp)

![](https://cdn.beekka.com/blogimg/asset/202307/bg2023072702.webp)

它由313部天线组成，排列在直径1公里的圆环上。圆环中央是机房和定标塔，用来协调和控制所有天线。

![](https://cdn.beekka.com/blogimg/asset/202307/bg2023072703.webp)

每一台天线的直径6米，会跟随太阳的方向转动，用来监控太阳活动。

![](https://cdn.beekka.com/blogimg/asset/202307/bg2023072704.webp)

所有天线协同观测，就能形成虚拟的超大口径天线，从而实现对太阳爆发活动的高精度成像。

![](https://cdn.beekka.com/blogimg/asset/202307/bg2023072705.webp)

## 文章

1、[泄露的谷歌薪酬数据](https://www.businessinsider.com/google-salaries-leaked-data-employees-engineers-sales-cloud-2023-7)（英文）

![](https://cdn.beekka.com/blogimg/asset/202307/bg2023072102.webp)

谷歌内网的一份文档泄漏，里面有详细的员工薪酬数据，本文整理了不同工种的工资最大值、最小值，以及奖金和股票收益。

2022年，谷歌员工的薪酬中位数为279,802 美元，是科技业薪酬最高的公司之一。

2、[Dan Abramov 宣布离开 Meta 团队](https://www.reddit.com/r/reactjs/comments/154trk7/comment/jsrbysw/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202307/bg2023072706.webp)

著名前端程序员 Dan Abramov 写了15条系列推文，解释他为什么从 Meta 辞职，离开 React 团队。（[@hacker0limbo](https://github.com/ruanyf/weekly/issues/3289) 投稿）

3、[使用 Map/WeakMap 处理 DOM 节点](https://www.macarthur.me/posts/maps-for-dom-nodes)（英文）

![](https://cdn.beekka.com/blogimg/asset/202305/bg2023050602.webp)

Map 和 WeakMap 作为 JS 语言新增的数据结构，很多人不清楚它们的用法。作者给出了一个实际的例子。

4、[继承与组合](https://buttondown.email/hillelwayne/archive/when-to-prefer-inheritance-to-composition/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202305/bg2023050601.webp)

如果你要扩展一个类，可以使用继承（inheritance），也可以使用组合（composition）。本文讨论它们的区别和适用场合。

5、[CPU 对分支代码的影响](https://johnnysswlab.com/how-branches-influence-the-performance-of-your-code-and-what-can-you-do-about-it/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202305/bg2023050610.webp)

本文分析 CPU 怎么处理代码，进而讨论分支语句（if）应该怎么写，执行效率比较高。

6、[Object.keys() 的返回值类型](https://vladimirzdrazil.com/posts/object-keys-keyof-t/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202305/bg2023050802.webp)

本文是 TypeScript 科普文章，解释 Object.keys() 方法的返回值类型，为什么是`string[]`，而不是`(keyof T)[]`。

7、[NixOS 安装快速指南](https://borretti.me/article/nixos-for-the-impatient)（英文）

![](https://cdn.beekka.com/blogimg/asset/202305/bg2023051001.webp)

NixOS 是一个 Linux 发行版，它有一个系统配置文件，记录所安装的软件。只要有这个文件，就能还原出一模一样的系统。

8、[这个博客托管在我的 Android 手机上](https://androidblog.a.pinggy.io/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202305/bg2023051002.webp)

作者介绍怎么把安卓手机当作服务器，托管网站。

## 工具

1、[Aimless.js](https://github.com/ChrisCavs/aimless.js)

![](https://cdn.beekka.com/blogimg/asset/202305/bg2023052221.webp)

一个生成各种随机值的 JS 库。

2、[Primo](https://primocms.org/)

![](https://cdn.beekka.com/blogimg/asset/202307/bg2023072202.webp)

一个开源的内容管理系统（CMS），作为 WordPress 的替代品而开发，基于 JavaScript 的 Svelte 框架。

3、[Link Redirect Trace](https://chrome.google.com/webstore/detail/link-redirect-trace/nnpljppamoaalgkieeciijbcccohlpoh)

![](https://cdn.beekka.com/blogimg/asset/202305/bg2023052510.webp)

一个浏览器插件，显示当前页面的所有重定向跳转。

4、[Clang.js](https://github.com/luoxuhai/clang.js)

![](https://cdn.beekka.com/blogimg/asset/202307/bg2023072707.webp)

在浏览器直接运行 C/C++ 代码。（[@luoxuhai](https://github.com/ruanyf/weekly/issues/3297) 投稿）

5、[mess-reader](https://github.com/ppz-pro/mess-reader)

![](https://cdn.beekka.com/blogimg/asset/202307/bg2023072708.webp)

一个网页的 Epub 阅读器，可以离线使用。（[@daGaiGuanYu](https://github.com/ruanyf/weekly/issues/3302) 投稿）

6、[Automa](https://www.automa.site/)

![](https://cdn.beekka.com/blogimg/asset/202307/bg2023072710.webp)

Chrome 浏览器插件，用来设置任务自动化。另外，Chrome 有内置的[用户行为录制](https://developer.chrome.com/docs/devtools/recorder/)。（[@dllen](https://github.com/ruanyf/weekly/issues/3301) 投稿）

7、[Rickrack](https://eigenmiao.com/yanhuo)（焰火十二卷）

![](https://cdn.beekka.com/blogimg/asset/202307/bg2023072711.webp)

开源的调色板软件，提供多种色彩搭配功能，适用于各种设计场景。（[@eigenmiao](https://github.com/ruanyf/weekly/issues/3306) 投稿）

8、[iFrame Resizer](http://davidjbradshaw.github.io/iframe-resizer/)

一个控制 iframe 窗口的 JS 库，可以根据加载网页的内容，调整 iframe 窗口的高度和宽度，并提供许多其他功能。

9、[Standard Ebooks](https://github.com/standardebooks/tools)

![](https://cdn.beekka.com/blogimg/asset/202301/bg2023011103.webp)

Epub 电子书生成工具，参见[教程](https://standardebooks.org/contribute/producing-an-ebook-step-by-step)。

10、[Tablane](https://tablane.net/)

![](https://cdn.beekka.com/blogimg/asset/202301/bg2023011206.webp)

一个[开源](https://github.com/Tablane/tablane)的 Web 软件，用来进行任务管理。它实际上是一个列表管理软件，任何可以表示成列表的东西，都可以用它管理。

## 资源

1、[Starlink 卫星覆盖图](https://satellitemap.space/)

![](https://cdn.beekka.com/blogimg/asset/202304/bg2023042907.webp)

该网站实时显示 Starlink 卫星的位置，目前有4000多颗。

2、[GhostlyStock](https://www.ghostlystock.com/)

![](https://cdn.beekka.com/blogimg/asset/202210/bg2022100101.webp)

这个网站是 AI 图片的搜索引擎，搜到的所有图片都是人工智能生成的。

想法是好的，但是图片有点少，搜索效果不理想。

3、[ChatGPT 中文在线](https://codenews.cc/chatgpt)

![](https://cdn.beekka.com/blogimg/asset/202307/bg2023072709.webp)

ChatGPT 的使用页面，并且收集了相关资源。（[@jqsl2012](https://github.com/ruanyf/weekly/issues/3307) 投稿）

4、[全球音乐体育大全](https://github.com/ruanyf/weekly/issues/3287)

家里的娃学习打击乐，经常需要到 Youtube 平台搜索一些曲子，观看学习。作者就写了这个微信小程序，可以搜索和下载。（[@rmrf](https://github.com/ruanyf/weekly/issues/3287) 投稿）

5、[GPYTHON](https://gpython.aibang.run/)

![](https://cdn.beekka.com/blogimg/asset/202307/bg2023072712.webp)

AI 辅助的 Python 学习网站，在线练习编码。（[@stanxing](https://github.com/ruanyf/weekly/issues/3308) 投稿）

## 图片

1、[最长的视线](https://beyondrange.wordpress.com/2016/08/03/pic-de-finestrelles-pic-gaspard-ecrins-443-km/)

2016年7月16日，一位摄影师在西班牙海拔2820米的比利牛斯山脉上，拍到了一张照片（下图），可以看到远处的阿尔卑斯山。

![](https://cdn.beekka.com/blogimg/asset/202302/bg2023020819.webp)

这两个地点相隔443公里，被吉尼斯认证为世界最长的视线，没有人看得比这更远了。

![](https://cdn.beekka.com/blogimg/asset/202302/bg2023020820.webp)

![](https://cdn.beekka.com/blogimg/asset/202302/bg2023020821.webp)

2、[芭比长城](https://www.sohu.com/a/677626814_121124374)

生成式 AI 诞生以后，只有想不到的图片，没有生成不了的图片。

最近，电影《芭比》上映，一位国外建筑师不禁突发奇想，如果长城变成芭比娃娃风格，会是什么样？下面就是 AI 生成的图片。

![](https://cdn.beekka.com/blogimg/asset/202307/bg2023072719.webp)

![](https://cdn.beekka.com/blogimg/asset/202307/bg2023072720.webp)

![](https://cdn.beekka.com/blogimg/asset/202307/bg2023072721.webp)

## 文摘

1、[涤纶如何重新流行](https://www.worksinprogress.co/issue/how-polyester-bounced-back/)

涤纶（学名：聚酯纤维）是一种化学纤维，诞生于上个世纪20年代，曾经流行一时。

![](https://cdn.beekka.com/blogimg/asset/202307/bg2023072713.webp)

那时，人们把它看作一种神奇面料。

它不会起皱，因此不必熨烫，而且很柔软，也容易上色，能够生产出各种鲜艳的布料，非常适合拍照片和上电视。

更重要的是，它很便宜，也不容易磨损，可以穿很久。

![](https://cdn.beekka.com/blogimg/asset/202307/bg2023072714.webp)

但是，到了20世纪80年代，它突然不流行了。

原因是它会抽丝和起球，时间一长，表面就变得毛绒绒。

最要命的是，它不透气，穿着时间一长，你会感到很闷，并且会因汗水而发臭。人们渐渐形成一种印象，只有收入低的人才会穿涤纶服装。

![](https://cdn.beekka.com/blogimg/asset/202307/bg2023072716.webp)

涤纶的价格因此一落千丈。正当人们以为，涤纶服装将被淘汰时，事情发生了变化。

进入21世纪以后，健身变得越来越流行，人们喜欢户外跑步、在健身房锻炼、爬山和远足。运动服装公司很快意识到，涤纶很适合户外服装，因为它不透气，所以保温效果好；改造以后不吸水，所以可以快干；它重量轻，所以满足运动服装的轻便要求；它不易磨损，所以足够坚固，适合户外环境。

![](https://cdn.beekka.com/blogimg/asset/202307/bg2023072717.webp)

一旦涤纶的市场重新出现以后，运动服装公司就使用最新的材料科学，进一步改造涤纶。

他们把涤纶编织成羊毛的结构，使其看上去像羊毛材料，但是更轻、更保温、更排水。这使得涤纶迅速占领了户外服装市场。

![](https://cdn.beekka.com/blogimg/asset/202307/bg2023072718.webp)

涤纶的一大缺点是排斥水，这注定它不适合直接接触人体，直接套在皮肤外面会汗流浃背，很不舒服。

研究人员开始研究，能否增加涤纶的吸水性。经过几年的努力，终于成功推出了吸湿排汗的涤纶纤维，采用的办法是在纤维中间增加圆孔，让纤维变成空心，因此就具有毛细管的吸水效应，可以将汗水排走。

![](https://cdn.beekka.com/blogimg/asset/202307/bg2023072715.webp)

一旦解决了吸水问题，涤纶就非常适合做运动背心和运动内衣。它又薄又轻，柔软耐用，不会产生异味，而且可以机洗。

随着运动人口的增多，以及涤纶的价格优势，今天，涤纶是世界排名第一的纺织面料，占全球纤维消费量的一半以上，约为第二名棉花的两倍。年产量接近5800万吨，是上世纪80年代的10倍多。再没有人抱怨它的外观和穿着感受，事实上人们变得太喜欢涤纶服装了。

## 言论

1、

在任何一个领域，刻意练习都是造就顶尖人才的方法，也是顶尖人才用来保持领先地位的方法。如果你想成为专业人士，刻意训练自己是绝对必不可少的。

-- [《刻意练习终极指南》](https://fs.blog/deliberate-practice-guide/)

2、

如果你是一个高级工程师或者高级管理者，你所做的一切都有很高的机会成本，所以你选择的工作必须很重要。

-- [《高级工程师的道路》](https://smyachenkov.com/posts/book-review-the-staff-engineers-path/)

3、

越来越多的人觉得，成年的价值正在下降，而且成年的年龄也在被推迟。结果，我们的社会变得越来越幼稚化。

-- [《幼稚主义是一种常态》](https://iq.hse.ru/en/news/219491658.html)

4、

以前是我们学习计算机的语言，以后是让计算机学习我们的语言。

-- [Stephen Wolfram](https://alphalist.com/podcast/78-stephen-wolfram-founder-ceo-of-wolfram-research)，著名计算机学家

## 历史上的本周

[沙特的新未来城](http://www.ruanyifeng.com/blog/2022/08/weekly-issue-217.html)（2022 #217）

[广告拦截器太过分了](http://www.ruanyifeng.com/blog/2021/07/weekly-issue-167.html)（2021 #167）

[我不想让你记住我的脸](http://www.ruanyifeng.com/blog/2020/07/weekly-issue-117.html)（2020 #117）

[复杂系统无法维护，侏罗纪公园必定失败](http://www.ruanyifeng.com/blog/2019/08/weekly-issue-67.html)（2019 #67）

（完）

