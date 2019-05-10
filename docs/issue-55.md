# 每周分享第 55 期

这里记录过去一周，我看到的值得分享的东西，每周五发布。

欢迎投稿，或推荐你自己的项目，请前往 GitHub 的 [ruanyf/weekly](https://github.com/ruanyf/weekly) 提交 issue。
：![](https://www.wangbase.com/blogimg/asset/201905/bg2019051001.jpg)

（题图：昆山火车站，苏州，2018）

关于 [996 工作制](https://996.icu/#/zh_CN)，已经有很多评论和报道，但是有一点似乎没人提到：程序员没必要来公司。

软件开发只需要电脑和网络，哪里工作并不重要，完全可以在家工作。事实上，很多软件公司都是远程办公，办公室根本没人去。比如，GitLab 公司2018年底有350人，分布在45个国家或地区，全部在家办公。它甚至有一个网页，专门宣传它的[远程办公理念](https://about.gitlab.com/company/culture/all-remote/)。

我对于 996 工作制不理解的地方是，有什么必要，一定要让大家在办公室待这么长时间。八小时的面对面还不够吗，剩下的时间完全可以回家工作。

有一种管理哲学是，我一定要盯着你，才能保证你的投入，避免你偷懒。很多软件外包公司就是这样，只能用公司的电脑开发，不能把电脑带回家，而且电脑无法访问外网，也不能安装未经批准的软件，所以要想工作，只能去公司上班。

我觉得，程序员要做的不是反对 996，而是提倡远程办公。对于重要的项目，可以一周七天、每天12小时的投入，前提是允许在家办公。

## 新闻

1、[.amazon 顶级域名的纠纷](https://www.bbc.com/news/business-47794353)

![](https://www.wangbase.com/blogimg/asset/201905/bg2019051002.jpg)

亚马逊公司申请了 .amazon 顶级域名，遭到了玻利维亚、巴西、哥伦比亚、厄瓜多尔、圭亚那、秘鲁、苏里南和委内瑞拉八个南美洲国家的反对。它们要求与亚马逊公司共用 .amazon 域名。后者不同意，只让出国别的二级域名，比如巴西是 br.amazon。双方争执不下，目前，这起纠纷将交给 ICANN 裁决。

类似的纠纷有过先例。2013年，阿根廷和智利提出异议后，美国户外服装品牌 Patagonia 撤回了 .patagonia 域名申请。

2、[太阳能农业](https://cleantechnica.com/2019/04/12/fraunhofer-reports-combining-farming-with-solar-186-more-efficient-in-summer-of-2018/)

![](https://www.wangbase.com/blogimg/asset/201905/bg2019051003.jpg)

德国正在进行一项实验，将太阳能发电与农业结合起来。在农地上方5米处架设光伏板，进行太阳能发电，下方依然是传统的农业耕作和放牧，发现这样可以使得土地的产值提高160%。

2018年是欧洲最热的年份之一，高温对农作物的产量产生负面影响。有了光伏板的遮挡，土地接受的阳光辐射减少了30%，这就增加了产量，另外，高温天气的额外阳光也提高了电力输出。但是，在其他季节，光伏板会使得下方土地的温度稍低。

3、[韩国的食物垃圾回收](https://www.weforum.org/agenda/2019/04/south-korea-recycling-food-waste/)

![](https://www.wangbase.com/blogimg/asset/201905/bg2019051004.jpg)

经过多年努力，韩国已经将食物垃圾的回收率，提高到了令人乍舌的95%。早在2005年，韩国就禁止食物垃圾倾倒在垃圾填埋场，必须专门回收。

2013年，韩国推行可生物降解的垃圾袋，强制居民必须把食物垃圾装进去，然后送到自动垃圾箱（上图）回收。而且，居民扔垃圾进去的时候，会按照重量收费，你扔的垃圾越重，支付的费用就越高。这促使居民去除水分，以减少垃圾的重量。据估计，食物垃圾的80%是水分。回收的食物垃圾将送往加工厂，分解成沼气和生物油，残渣可以变成肥料。

4、[《人类简史》作者谈 AI](http://tech.sina.com.cn/csj/2019-04-25/doc-ihvhiewr8092203.shtml)

![](https://www.wangbase.com/blogimg/asset/201905/bg2019051005.jpg)

4月22日晚，在斯坦福大学可容纳2000人的大演讲厅，畅销书《人类简史》和《未来简史》的作者以色列著名历史学家尤瓦尔•赫拉利（Yuval Noah Harari），与斯坦福 AI 研究院领导者李飞飞，展开了一场人工智能对话。

赫拉利充分表达了他对 AI 的担忧，下面是他的一些精彩言论。

> （1）大数据面前，自由意志、独立思考、民主决策都不存在，都是算法结果。
> 
> （2）AI 眼里的爱情，跟一场流感没有区别。
> 
> （3）AI 不透明，不跟我分享信息，而是跟广告商、大公司、政府组织联合来利用我，怎么办？
> 
> （4）AI 的全球竞赛，比核竞赛更可怕。因为，核武器研发出来，没有人会随便去用。但是 AI 就不一样了，它是发展出来就马上会被用，不管三七二十一。

5、[特朗普蠕虫](https://en.wikipedia.org/wiki/Dermophis_donaldtrumpi)

![](https://www.wangbase.com/blogimg/asset/201905/bg2019051006.jpg)

最近，巴拿马丛林发现了一种新的蠕虫，长度约10厘米，表皮光滑有粘液。它是一种穴居物种，几乎完全生活在地下，基本没有视力，眼睛只能分辨光暗。

一家建筑公司的老板以2.5万美元，拍卖得到该物种的命名权，然后他将该蠕虫命名为“特朗普蠕虫”。原因是特朗普拒绝承认气候变化，并且采取了很多极端化的措施，好像这种蠕虫只能看出黑白，无法看到更多的颜色。

6、[带有人类基因的猴子](http://science.caixin.com/2019-04-15/101404121.html)

![](https://www.wangbase.com/blogimg/asset/201905/bg2019051007.jpg)

昆明动物研究所宣布，人类的 MCPH1 基因已经移植给了猴子。该基因跟大脑发育有关，研究人员想看看，猴子是否会变得更聪明。现在已经有11只带有人类基因的恒河猴诞生，科学家称，转基因猴比野生猴的记忆能力“明显提高”。

7、[人工智能创造的游戏](https://www.cnbeta.com/articles/tech/838313.htm)

![](https://www.wangbase.com/blogimg/asset/201905/bg2019051008.jpg)

设计公司 AKQA 宣布，世界上第一个人工智能设计的运动 [speedgate](https://playspeedgate.org/) 已经诞生。人工智能分析了400个人类游戏的规则，然后创造出了该游戏。

游戏时，每方有6个球员，三个前锋，三个后卫。球场有三个门，通过中间的门，攻入对方球门，就能得分。（@[CharlesCCC](https://github.com/ruanyf/weekly/issues/464) 投稿）

![](https://www.wangbase.com/blogimg/asset/201905/bg2019051009.jpg)

8、**一句话新闻**

- [马斯克](https://www.zdnet.com/article/elon-musk-on-teslas-autopilot-in-a-year-a-human-intervening-will-decrease-safety/)称，特斯拉汽车的自动驾驶技术极其先进，一年之内，人类就可能无法接管车辆的驾驶，因为人类驾驶比自动驾驶更危险。

- [币安交易所](https://finance.sina.com.cn/blockchain/roll/2019-05-08/doc-ihvhiews0523701.shtml)5月7日遭攻击，被黑客提走了7000个 Bitcoin，损失约人民币2亿多元。币安表示将全额承担这笔损失。

- [一家德国公司](https://insideevs.com/innolith-says-that-is-on-the-trail-of-1000-wh-kg-battery-energy-density/)宣布，实现了一公斤电池储存一度电。这个能量密度前所未有，将可能使得电动汽车一次充电，行驶1000公里以上。

- [英国国家网络安全中心](https://www.bbc.com/news/technology-47974583)发布一项研究，分析2300万个密码之后，发现互联网最常使用的5个密码是：123456，123456789，qwerty，password 和 1111111。

- [一项研究](https://www.theguardian.com/society/2019/apr/16/got-a-minute-global-attention-span-is-narrowing-study-reveals)发现，全世界范围内，热点事件引发的关注时间越来越短。2013年，推特的热点关注平均是17.5小时，2016年下降到11.9小时，即热点新闻引发关注的平均时间只有半天。

## 文章

1、[为什么 SQL 如此成功？](https://blog.couchbase.com/unreasonable-effectiveness-of-sql/)（英文）

SQL 语言诞生已经25年了，生命力只有增强，没有丝毫减弱。即使不是关系型数据库的产品，都在设法提供 SQL 类似的查询语言。本文分析 SQL 为什么如此成功的几个原因。

2、[Node.js 的简单 JWT 实现](https://guseyn.com/posts/simple-jwt?v=1.0.85)（英文）

JSON Web Token 是一种令牌的生成机制，用于网站的授权和认证。本文介绍 Node.js 如何实现一个简单的 JWT。

3、[50万行 Java 代码移植到 Go 语言的感想](https://blog.kowalczyk.info/article/19f2fe97f06a47c3b1f118fd06851fad/lessons-learned-porting-50k-loc-from-java-to-go.html)（英文）

本文作者将一个大型 Java 项目改为使用 Go 语言，详细比较了 Java 与 Go 的一些差异。

4、[Nokia N9 的闹钟设计](http://nition.momentstudio.co.nz/2014/08/the-nokia-n9-alarm-clock/)（英文）

![](https://www.wangbase.com/blogimg/asset/201905/bg2019051010.jpg)

Nokia N9 手机的闹钟 App 的设计非常出色，作者介绍这个设计的优秀之处。

5、[何时使用 TypeScript？](https://khalilstemmler.com/articles/when-to-use-typescript-guide/)（英文）

TypeScript 正变得越来越流行，本文作者谈了自己的看法，何时应该使用 TypeScript，何时应该使用 Native JavaScript。

6、[如何发现隐藏的摄像头？](https://sixfortwelve.wordpress.com/2019/04/06/how-to-increase-your-chances-of-finding-a-hidden-camera/)（英文）

![](https://www.wangbase.com/blogimg/asset/201905/bg2019051011.jpg)

现在隐藏的摄像头越来越难以发现，比如上图的“6”里面有一个摄像头。本文介绍如何发现这种摄像头，前提是摄像头必须跟你在同一个局域网里面，否则还是发现不了。

7、[请不要用 JSON 作为配置文件](https://arp242.net/weblog/json_as_configuration_files-_please_dont)（英文）

本文指出 JSON 的发明目的是“轻量级数据交换格式”，根本不适合作为配置文件。

8、[数据储存设备的历史回顾](https://royal.pingdom.com/the-history-of-computer-data-storage-in-pictures/)（英文）

![](https://www.wangbase.com/blogimg/asset/201905/bg2019051012.jpg)

本文通过图片介绍历史上的数据储存设备，上图是世界第一个超过1 GB的硬盘1980年的 IBM 3380，可以存储2.52 GB，重 250公斤，售价8万美元~14万美元。

9、[浅谈机器学习中的文本摘要](https://blog.floydhub.com/gentle-introduction-to-text-summarization-in-machine-learning/)（英文）

本文介绍如何使用 Python 自动生成一篇文章的摘要。

10、[微信公众号文章链接 GitHub 文章的方法](https://github.com/ZhuPeng/mp-githubtrending/blob/master/doc/api.md)（中文）

微信公众号不允许外部链接，如果想在文中插入 GitHub 链接，可以考虑采用本文的方法。作者提供了一个小程序，可以抓取 GitHub 页面，只要跳转到这个小程序就可以了。

11、[全平台框架 Flutter](https://developers.googleblog.com/2019/05/Flutter-io19.html)（英文）

![](https://www.wangbase.com/blogimg/asset/201905/bg2019051013.jpg)

谷歌发布 [Flutter for web](https://github.com/flutter/flutter_web)，正式宣布 Flutter 成为全平台框架，支持手机、Web、桌面电脑和嵌入式设备。现在学跨平台应用开发，第一个要看的可能不是 React Native，而是 Flutter。（@[ifrontend-xyz](https://github.com/ruanyf/weekly/issues/513) 投稿）

## 软件

1、[fyne](https://github.com/fyne-io/fyne)

![](https://www.wangbase.com/blogimg/asset/201905/bg2019051014.jpg)

跨平台的 Go 语言的图形界面库。

2、[jimp](https://github.com/oliver-moran/jimp)

一个 Node.js 的图像处理库，为图像加特效。（@[ifrontend-xyz](https://github.com/ruanyf/weekly/issues/388) 投稿）

3、[GridManager](https://github.com/baukh789/GridManager)

一个网页表格的 JS 库，支持多种操作。（@[baukh789](https://github.com/ruanyf/weekly/issues/386) 投稿）

4、[laravel-s](https://github.com/hhxsv5/laravel-s)

一个 PHP 的胶水项目，将 Swoole 用于 Laravel 项目。（@[hhxsv5](https://github.com/ruanyf/weekly/issues/383) 投稿）

5、[griffith](https://github.com/zhihu/griffith)

React 的视频播放器组件。

6、[Kroki](https://kroki.io/)

自动生成图形的开源服务，支持多种图形（PlantUML、GraphViz、Mermaid 等等）。

7、[md2pdf](https://github.com/realdennis/md2pdf)

通过浏览器，将 Markdown 文本保存成 PDF 文件，并且可以定制页面。

8、[scscmsMusic](https://github.com/scscms/scscmsMusic)

![](https://www.wangbase.com/blogimg/asset/201905/bg2019051015.jpg)

一个 Chrome 浏览器扩展，用来听歌，支持远程音乐和播放列表。（@[scscms](https://github.com/ruanyf/weekly/issues/407) 投稿）

9、[mokia](https://github.com/varHarrie/mokia)

一个 mock 网络服务的 JS 工具库。（@[varHarrie](https://github.com/ruanyf/weekly/issues/395) 投稿）

10、[asciiflow](http://asciiflow.com/)

![](https://www.wangbase.com/blogimg/asset/201905/bg2019051016.jpg)

一个画 ASCII 码框图的网站。（@[bzhux](https://github.com/ruanyf/weekly/issues/409) 投稿）

11、[avataaars generator](https://getavataaars.com/)

![](https://www.wangbase.com/blogimg/asset/201905/bg2019051017.jpg)

开源的卡通头像生成器，可以定制各种头像参数。（@[ifrontend-xyz](https://github.com/ruanyf/weekly/issues/488) 投稿）

12、[Windows Terminal](https://github.com/microsoft/Terminal)

微软新发布的 Windows 终端，提供多标签、分割窗口、快捷键、完整的 Unicode 字符支持等功能。（@[erdong](https://github.com/ruanyf/weekly/issues/511) 投稿）

## 资源

1、[广东工业大学计算机学院课程攻略](https://github.com/brenner8023/gdut-course)

该仓库收集该校从大一到大四各门课程的资料。（@[brenner8023](https://github.com/brenner8023/gdut-course) 投稿）

2、[跟我写 JPEG 解码器](https://github.com/MROS/jpeg_tutorial)

中文教程库，讲解 JPEG 图片压缩标准和理论，并带有配套源码（Rust 语言）。作者希望读者只要跟着学习，就能写出自己的 JPEG 图片解码器。（@[MROS](https://github.com/ruanyf/weekly/issues/446) 投稿）

3、[vue-unit-test-with-jest](https://github.com/holylovelqq/vue-unit-test-with-jest)

教程库，介绍如何用 Jest 为 Vue 项目写单测。（@[holylovelqq](https://github.com/ruanyf/weekly/issues/452) 投稿）

4、[《HelloGitHub》第 36 期](https://github.com/521xueweihan/HelloGitHub/blob/master/content/36/HelloGitHub36.md)

分享 GitHub 上有趣、入门级的开源项目的月刊，帮你找到编程的乐趣。（[@521xueweihan](https://github.com/ruanyf/weekly/issues/128) 投稿）

5、[github-rank](https://github.com/jaywcjlove/github-rank)

Github 中国用户排名。（@[xurui3762791](https://github.com/ruanyf/weekly/issues/461) 投稿）

6、[今日掘金](http://zy2071.com/Fun/todayJueJin.html)

每15分钟抓取一次掘金首页数据，保留点赞数大于55的文章，过滤出质量相对较高的文章。（@[ZY2071](https://github.com/ruanyf/weekly/issues/510) 投稿）

## 文摘

1、**终生不婚率**

以下摘自日本纪实书籍《无缘社会》（上海译文出版社，2014）。

![](https://www.wangbase.com/blogimg/asset/201905/bg2019051018.jpg)

社会学把五十岁时仍未结过一次婚的人的比率称为“终生不婚率”，一般认为这个比率今后会呈增长趋势。

（日本）男子的终生不婚率2005年时为16%，预计2030年将上升到大约三个男子就有一个。女子2030年将为23%，虽然略低于男子，然而与2005年相比，则相当于增加了两倍以上。今后社会中，终生不结婚的现象将会司空见惯。

我们就终生不婚率急剧攀升，对专家进行了采访。藤森克彦是瑞穗信息综合研究所的首席研究员，他很早就关注单身化的进展。藤森君认为，不结婚者增加的原因，有以下几项：

一、便于独立生活的城市基础设施日趋完备（诸如便利店的普及等），独自一人生活的不方便越来越少；

二、终生职业急剧减少，收入不稳定的非正规雇佣越来越普遍。

三、生活方式发生了变化，到了某个年龄必须结婚的社会观念正在弱化。

四、人们对婚姻质量的要求提高，而且女性经济实力上升，不结婚也能够生活的人增加了。

他说其中第二项的原因尤为重要。大多数人要结婚成家时，会想到要增加住宅费用和子女教育费等支出。如果此人从事的是工资和待遇均不稳定的非正规雇佣工作，他势必会心中不安，担心将来这些费用无法筹措，从而想结婚也结不了婚。

2、[那些没有发布的项目](https://styts.com/cycle-of-side-projects/)

作为一个程序员，我有100多个没有发布的个人项目。

它们通常是这样开始的：我对一个想法感到兴奋，估计可以在较短的时间内完成，比如一个周末或几周。结果也差不太多，我疯狂地工作一段时间，项目或多或少都写好了。

但是它能够发布了吗？它是否算完成了呢？有趣和令人兴奋的部分确实是基本完成了，能够证明某个概念是有效的。但是，又好像缺少了一些东西，不是特别能引起别人的兴趣，有一些乏味。项目缺乏设计或视觉呈现，这算不上很重要，功能才比较重要，项目确实能工作。

它也没有登陆页面和介绍页面，这些将对新用户非常友好。但我不是一个好的作家，写不出太多文字。我甚至讨厌写作，我害怕被别人评判，所以我选择不写。

最后一个缺失的部分是营销。世界上几乎没有任何事情，比一个内向的人想到一个创意更糟糕，因为他不得不向全世界推销自己的想法。如果世界批评你的项目怎么办？如果你了解到，别人已经做过了怎么办？世界也可能完全沉默不加理睬，就像以前的许多人一样，你的项目将沉没在互联网的深处。

这些缺失的部分不算多，可能还需要投入整个项目时间的20％。但是这最后的20％，对你来说，比80％用在编码的时间更难做到。因此，你可能会让项目就停在那里。何况世界上又出现了新的闪亮的东西，你又可以急切地在新东西上工作了。

再过一会，你就会去拥抱新项目，忘了旧项目。让那些没做完的事情继续保持没做完，让这样的周期变成永久化。

## 图片

1、[世界最大灵骨塔](https://www.buddhistdoor.org/tc/news/%E9%80%99%E6%98%AF%E5%85%A8%E7%90%83%E5%AE%B9%E7%B4%8D%E6%9C%80%E5%A4%9A%E9%AA%A8%E7%81%B0%E9%BE%95%E7%9A%84%E5%9C%B0%E6%96%B9%E6%A8%93%E5%85%A7%E5%AE%89%E6%8E%92%E5%9B%9E%E6%87%89%E4%BA%86%E5%A4%9A%E7%A8%AE%E7%95%B6%E4%BB%A3%E5%A4%A7%E8%AD%B0%E9%A1%8C%E5%80%BC%E5%BE%97%E6%B7%B1%E6%80%9D)

![](https://www.wangbase.com/blogimg/asset/201905/bg2019051019.jpg)

台湾新北市，一座白色巨塔矗立在三芝区，外形呈六角形，顶层为宫殿式的望楼塔造型。楼高达二十层的巨塔在翠绿的山峦中尤其突出！这座建筑其实是一个多层式的骨灰盒大楼──龙岩真龙殿生命纪念馆。

该大楼聘请了日本建築大師安藤忠雄事务所負責設計，2002年正式開幕。一共可以容纳38万个骨灰盒。二楼到四楼是三宝佛殿，四楼以上是骨灰盒放置场所。目前，所有位置几乎已经全部售出。

![](https://www.wangbase.com/blogimg/asset/201905/bg2019051020.jpg)

![](https://www.wangbase.com/blogimg/asset/201905/bg2019051021.jpg)

2、[《黑客帝国》的片头](https://www.wired.com/story/the-matrix-code-sushi-recipe/)

![](https://www.wangbase.com/blogimg/asset/201905/bg2019051022.jpg)

电影《黑客帝国》的片头非常著名，一阵绿色的“字符雨”从天而降。很多人很好奇，这些字符到底是什么内容？

现在答案终于揭晓。电影的设计师 Simon Whiteley 告诉大家，他的妻子是日本人，他接受了电影的设计任务回家后，发现妻子有一本寿司菜谱，里面有各种字符，而且这本书是直排版，文字都是从上到下。他觉得非常合适，就使用这本书里的字符，制作了“字符雨”。

## 言论

1、

我的工作压力很大，我能想到的唯一应对方法就是努力投入工作，这是我释放压力的唯一途径。

-- [艾伦·图灵](http://www-history.mcs.st-and.ac.uk/Extras/Turing_running.html)。他的马拉松成绩是2小时46.03分钟，有人问他为什么刻苦地训练长跑，他做了上面的回答。

2、

20年前，每个人都使用 Windows，只有一小部分人在业余时间浪费生命编译 Linux。

Windows 用户看到以后，感到很困惑：“你们已经拥有了所需的一切，能够完成工作并且易于使用，为什么还要这样折腾？！”

-- [《AWS vs K8s 是新形式的 Windows vs Linux》](https://zwischenzugs.com/2019/03/25/aws-vs-k8s-is-the-new-windows-vs-linux/)

3、

Stack Overflow 已经成立11年了，现在，世界上每个开发者实际上都使用它。我经常看到开发者编写代码时，他们就会在一个浏览器窗口中打开 Stack Overflow。

嘿！我们保证，你不用注册或付钱，就能看到答案。

-- [Joel Spolsky](https://www.joelonsoftware.com/2019/03/28/the-next-ceo-of-stack-overflow/)，Stack Overflow 的联合创始人

4、

原型产品或者第一个版本，几乎总是不需要那些时髦的 Web 框架。你需要的是以最快的速度推向市场，忽略那些花哨的潮流，确保第一次出货。

-- [《你可能不需要时髦的 Web 框架》](https://char.gd/blog/2019/you-dont-need-that-hipster-web-framework)

5、

十六世纪，欧洲普及印刷术以后，一个意外不到的后果是，大学教授的薪水急剧上升，开始远远高于技术工人。

-- [《印刷术推动欧洲》](https://blogs.lse.ac.uk/businessreview/2019/03/19/gutenbergs-moving-type-propelled-europe-towards-the-scientific-revolution/)

## 回顾


去年的本周：[《每周分享第 3 期》](http://www.ruanyifeng.com/blog/2018/05/weekly-issue-3.html)

[![](http://www.ruanyifeng.com/blogimg/asset/2018/bg2018050401.jpg)](http://www.ruanyifeng.com/blog/2018/05/weekly-issue-3.html)

## 保险公众号推荐

最后，介绍一个优秀的保险公众号《保哥和八姐》，很感谢他们一直支持我的网站。其实，去年已经推荐过一次了，今天特别在周刊再推广一下。

保哥是主笔。他是中南财大毕业，保险公司工作十年，负责保险产品设计和核赔，所以很熟悉各种保单的猫腻。他的理想是公众号写满三年，然后结集出版自己的保险书。

八姐是保哥的老婆，日本名校早稻田大学金融学毕业，香港和大陆两地都管理过大型资产，偶尔兴起会在公号写点文章。

他们公众号的特别之处，在于对保险行业和产品的介绍比较深入，提供专业视角，注重实务，绝非纸上谈兵。此外，他们比较坚持自己的价值观，从来不跟风，也不拍脑袋，说一些不负责任的言论，任何知识点、产品资料，都要自己研究透了，才敢写。

这个公号属于是我少数订阅的金融号之一。如果你想要了解保险，或者最近想要购买保单，不妨关注看看。

![](https://www.wangbase.com/blogimg/asset/201905/bg2019051023.jpg)

## 订阅

这个专栏每周五发布，同步更新在我的[个人网站](http://www.ruanyifeng.com/blog)、[微信公众号](http://weixin.sogou.com/weixin?query=%E9%98%AE%E4%B8%80%E5%B3%B0%E7%9A%84%E7%BD%91%E7%BB%9C%E6%97%A5%E5%BF%97)和[语雀](https://yuque.com/ruanyf/share/)。

微信搜索“阮一峰的网络日志”或者扫描二维码，即可订阅。

![](http://www.ruanyifeng.com/blogimg/asset/2018/bg2018042311.jpg)

（完）

