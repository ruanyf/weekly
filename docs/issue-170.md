# 科技爱好者周刊（第 170 期）：软件订阅制的胜利

这里记录每周值得分享的科技内容，周五发布。

本杂志开源（GitHub: [ruanyf/weekly](https://github.com/ruanyf/weekly)），欢迎提交 issue，投稿或推荐科技内容。

周刊讨论区的帖子[《谁在招人？》](https://github.com/ruanyf/weekly/issues/1870)，提供大量程序员就业信息，欢迎访问或发布工作/实习岗位。

## 封面图

![](https://cdn.beekka.com/blogimg/asset/202108/bg2021080408.jpg)

一个摄影师在荷兰拍到了一只倒着飞的鹅。（[via](https://wgme.com/news/offbeat/goose-flying-upside-down-is-simply-showing-off-say-experts)）

## 本周话题：软件订阅制的胜利

上周，苹果公司最新一季的财报，披露了一个惊人的[数据](https://www.pymnts.com/earnings/2021/apple-paid-subscriptions-hit-700m-up-150m-since-last-year/)：它有 **7亿** 付费订阅用户。

![](https://cdn.beekka.com/blogimg/asset/202108/bg2021080103.jpg)

这太可怕了。世界总人口目前大约是78亿，里面包含了小孩、老人、文盲、穷人。即使把他们都算在内，全世界每11个人里面，就有一个人购买苹果公司的软件服务。软件生意还能做得比这更大吗？

注意，这是付费用户，不是免费用户。作为比较，阿里巴巴上周也[宣布](https://finance.sina.com.cn/tech/2021-07-27/doc-ikqciyzk7987897.shtml)，它有10亿活跃用户，但那是免费用户。如果每月付费才能使用淘宝，不知还有多少能留下来。

苹果的付费订阅服务，目前主要有六项。

> - iCloud：存储服务
> - Apple Music：音乐服务
> - Apple TV：视频服务
> - Apple News：新闻服务
> - Apple Fitness：健身服务
> - Apple Arcade：游戏服务

苹果把它们打包在一起，做成了一个 Apple One 订阅包。7亿订阅用户应该就是购买这些服务的人数。至于硬件质保的 Apple Care 服务，可能不包括在里面，因为它属于硬件销售收入，而不是软件收入。

![](https://cdn.beekka.com/blogimg/asset/202108/bg2021080104.jpg)

今天我想谈的，并不是这些服务本身，而是想提醒大家注意。 **世界最大的一些软件公司，正在改变软件销售模式，不再销售软件本体了，而是收取软件服务的订阅费。** 苹果只是其中一个典型的例子。

除了苹果，世界最大的桌面软件商——微软公司也正在改成订阅制。它的 Office 已经变成了 Office365 服务，都在云端使用，个人版的价格是每年398元人民币。它还有计划在今年下半年，推出 [Windows365](https://www.microsoft.com/en-us/windows-365) 服务，把 Windows 也变成云服务，按年收费。

![](https://cdn.beekka.com/blogimg/asset/202108/bg2021080401.jpg)

Adobe 公司更是在几年前，就把自己的所有产品都变成了订阅制，单单一个 PhotoShop，一年的订阅价格是888元人民币。

![](https://cdn.beekka.com/blogimg/asset/202108/bg2021080402.jpg)

我认为， **软件订阅制是未来的趋势。** 因为这对于软件公司很有利，销售软件从一次性收入变成了经常性收入，能够产生稳定的现金流。只要用户使用，就必须付费，连续使用就必须连续付费。而且，有了订阅制，总能让用户使用软件的最新版，软件公司就不必为支持旧版本烦恼了。

对于用户来说，相对就不那么有利。以前只要购买了软件，就可以一直用下去，现在则是只能用一个月或一年。用得越久，费用越高，甚至可能产生对它的依赖。曾经有过例子，用户使用 PhotoShop 编辑照片，保存为 Adobe 专有格式，过了一阵子再想打开，只能再次订阅 PhotoShop。

除了软件，只要是可以长期消费的东西，似乎也在向订阅制转变。最近有[新闻](https://www.ft.com/content/54fd50fe-f15f-47c0-965d-797573c5ec9c)，教科书巨头培生（Pearson）推出了 [Pearson+ 服务](https://plc.pearson.com/en-US/our-products-and-services/pearson-plus)，美国学生以每月 14.99 美元的价格订阅其所有 1,500 种教材的电子版，可以搜索、做笔记、听有声版、专家咨询等等。

![](https://cdn.beekka.com/blogimg/asset/202108/bg2021080403.jpg)

总之， **凡是可以数字化的商品，未来可能都会变成订阅制。** 大家会习惯，每月像付电费那样，支付各种服务订阅费。

## 文档工具 ShowDoc

本周向大家介绍一款国产文档工具 [ShowDoc](https://www.showdoc.com.cn/)。周刊不定期推广优秀的国产软件，有意的朋友欢迎与我联系（Email：yifeng.ruan@gmail.com）。

软件业有一句名言，感叹文档是多么重要，又是多么难写。

> 程序员痛恨两件事：写文档和没有文档。( Coders hate 2 things: writing documentation and no documentation. )

好的文档工具，可以促进写作，减轻维护负担，给项目和团队带来巨大帮助。[ShowDoc](https://www.showdoc.com.cn/) 就是这样一款工具，简单易用，符合中国程序员用户的使用习惯，团队用户已经超过 10 万，包括腾讯、华为、百度、京东、字节跳动等知名公司的一些内部团队。

它主要解决这样一个问题：小团队或者个人开发者，希望有一个开箱即用的文档中心，能够快速地生成、展示、搜索文档，还能够多人协作，划分权限，并且还有桌面的和手机的[客户端](https://www.showdoc.com.cn/clients)。 如果你也有这种需求，不妨试试看这个工具。

![](https://cdn.beekka.com/blogimg/asset/202107/bg2021070603.jpg)

它的代码完全开源，放在 [GitHub](https://github.com/star7th/showdoc) 上面，是一个热门项目，超过9000颗星。可以放心使用。

![](https://cdn.beekka.com/blogimg/asset/202107/bg2021070605.jpg)

如果你自己有服务器，安装很简单，[一行命令](https://www.showdoc.com.cn/help?page_id=828455960655160)就可以了，底层的 Docker 容器自动帮你部署好。[Windows 环境](https://www.showdoc.com.cn/help/4087044677189279)也支持，但是安装稍微复杂一点。启动服务后，本机浏览器访问 `localhost:4999` ，你就拥有了一个全功能的文档中心，就这么简单。只要绑定域名，就能对外访问。

![](https://cdn.beekka.com/blogimg/asset/202107/bg2021070604.jpg)

网站首页上，默认有几个[示例仓库](https://www.showdoc.com.cn/item/index)，可以点进去看看。

除了常用的文档库和电子表格库，它还有两个技术文档的特色功能。一个是 [API 文档库](https://www.showdoc.com.cn/page/741656402509783)，解析源码注释，自动生成 API 的说明文档。另一个是[数据字典文档](https://www.showdoc.com.cn/page/312209902620725)，解析数据库结构，自动生成数据库每张表的说明文档。

为了配合软件 API 文档的生成，官方还特别开发了一个独立服务 [RunApi](https://www.showdoc.com.cn/runapi/30291)，用来模拟定制 HTTP 请求，完成接口测试、自动流程测试、Mock 数据等功能，类似于 Postman，但它是完全免费的。并且，在调试 API 的过程中，自动生成文档到 Showdoc，极大提高团队的效率。平时调试 API 接口，也可以使用这个服务。

![](https://cdn.beekka.com/blogimg/asset/202107/bg2021071313.jpg)

所有 ShowDoc 文档仓库都可以使用 [API](https://www.showdoc.com.cn/page/102098)  自动创建和批量导入，也可以导出为 Word 或 Markdown 文件。每个团队除了公共仓库，成员个人还可以新建私密仓库。

如果你没有或者不想维护自己的服务器，可以使用官方的[在线版](https://www.showdoc.com.cn)托管文档，不超过5人的团队都是免费的。对于那些自己架设服务的团队，官方提供[收费技术支持](https://www.showdoc.com.cn/help/6199117240201189)，帮助维护。

好了，感兴趣的朋友可以试试[这个工具](https://www.showdoc.com.cn/)，任何问题可以到 GitHub [提 issue](https://github.com/star7th/showdoc/issues) 或 [QQ 群](https://www.showdoc.com.cn/help/6912631551342243)咨询。

## 科技动态

1、[印度空气净化扇](https://techxplore.com/news/2021-07-smog-tower-delhi-experts-sceptical.html)

印度首都新德里，是世界空气最脏的城市之一。最近，市中心的豪华购物区耗资200万美元，建造了一个空气净化装置，40 台巨型风扇同时过滤空气。

![](https://cdn.beekka.com/blogimg/asset/202107/bg2021072210.jpg)

这个装置是一个 25 米高的风扇塔，预计将于本月完工。它的目的是为旁边的商业街和咖啡馆，提供大约一平方公里范围的干净空气。目前尚无法知道，该方法是否真能奏效。

![](https://cdn.beekka.com/blogimg/asset/202107/bg2021072211.jpg)

2、[投篮机器人](https://v.qq.com/x/page/w0039aev369.html)

东京奥运会的第一场男子篮球比赛（美国对法国），中场休息时，丰田公司的一个投篮机器人为观众表演超准的三分球，可以在中圈命中蓝框。非常精彩，下面的30秒[现场视频](https://v.qq.com/x/page/w0039aev369.html)值得一看。

<iframe frameborder="0" src="https://v.qq.com/txp/iframe/player.html?vid=w0039aev369" allowFullScreen="true" width="400" height="600"></iframe>

这个机器人身高2米04，是丰田公司17位工程师在业余时间研制的。它采用人工智能算法，会利用重复投篮进行数据调整，最终实现百发百中。

3、[无人机犯罪](https://english.elpais.com/spain/2021-07-15/spanish-police-seize-large-drone-used-to-carry-drugs-from-morocco.html)

西班牙警方最近发现，有人从摩洛哥放飞一架巨大的无人机，越过西班牙边境，运送毒品。

![](https://cdn.beekka.com/blogimg/asset/202107/bg2021072206.jpg)

该无人机为中国生产，宽4.5米，可以载重150公斤，最高飞行速度 170 公里/小时，续航7小时，价格在3万欧元到15万欧元之间。

这架无人机故意飞得很低，防止穿越国境时被雷达发现。但是，它是远程遥控的，接受无线电信号，警方通过异常的无线电信号发现了它。

4、[坦克图纸](https://ukdefencejournal.org.uk/classified-challenger-tank-specs-leaked-online-for-videogame/)

《战争雷霆》（(War Thunder）是一款多人对战游戏，玩家使用各种真实存在的武器，参加历史上的各种战争。

日前，有玩家自称为军人，认为游戏里面的“挑战者 2“（Challenger 2）坦克（下图）与实物有差异，就在游戏论坛上传了真实的坦克设计图纸，要求游戏公司据此更正。

![](https://cdn.beekka.com/blogimg/asset/202107/bg2021071702.jpg)

但是，这辆坦克仍然是英国军队的现役主战坦克，所有设计图纸都是保密的。

几天后，游戏公司删掉了这个文件，并发表了声明：”经过向国防部询问，我们已经确认该文件仍然属于保密文件。传播该文件违反了英国《保密法》，最高可处 14 年的监禁。“

5、[汽油味香水](https://electrek.co/2021/07/15/ford-petrol-scent-for-electric-cars-barrier-ev-adoption/)

福特汽车的一项调查发现，五分之一的司机表示，他们在电动汽车上，闻不到汽油味，感到不适应。近 70% 的人说，他们某种程度上想念汽油味。

福特汽车因此发明了一种新的香水，“混合了淡淡的汽油味、烟熏味和橡胶味。”

![](https://cdn.beekka.com/blogimg/asset/202107/bg2021071701.jpg)

6、[最喜欢喝可乐的地方](https://mexiconewsdaily.com/news/with-average-daily-consumption-of-2-2-liters-of-coca-cola-chiapas-leads-the-world/)

墨西哥最贫穷的恰帕斯州，是世界上含糖饮料（主要是可口可乐）消费量最高的地方。根据2019年的统计，当地居民每人每年平均饮用 821.25 升饮料，相当于每天 2.2 升。

![](https://cdn.beekka.com/blogimg/asset/202107/bg2021071601.jpg)

原因是当地公共设施非常落后，无法提供清洁的饮用水。可口可乐在该州正好有一家巨大的装瓶厂，以很便宜的价格出售饮料。所以，当地男女老少几乎都用可口可乐替代饮用水，甚至有些婴儿在应该只喝母乳的时候，他们的母亲给他们喝可口可乐。

![](https://cdn.beekka.com/blogimg/asset/202107/bg2021071602.jpg)

更糟糕的是，含糖饮料有成瘾作用，喝习惯以后，会一直想喝。所以，毫不奇怪，糖尿病是该州居民的一个主要死因，每年夺走 3,000 多人的生命。但即使这样，那些糖尿病患者发病后，还是一直在喝可乐，他们说自己无法想象没有这种饮料的生活。

##  文章

1、[农村的厕所应该长什么样？](https://mp.weixin.qq.com/s/J0w7_rd40_L9hB6Z1yLmjw)（中文）

本文介绍中国的一些年轻建筑师，正在尝试重新设计农村的厕所。

农村没有给排水管网，厕所的水从哪里来？污水往哪里排放？而且，乡村厕所往往是在建筑外部的一个单独空间，尤其是北方，冬天如何保温？难道单独为厕所供暖？

![](https://cdn.beekka.com/blogimg/asset/202107/bg2021071907.jpg)

![](https://cdn.beekka.com/blogimg/asset/202107/bg2021071908.jpg)

![](https://cdn.beekka.com/blogimg/asset/202107/bg2021071909.jpg)

2、[苏炳添的论文](https://mp.weixin.qq.com/s/ddwBH9lMWDD6NHcAN1zVwA)（中文）

![](https://cdn.beekka.com/blogimg/asset/202108/bg2021080214.jpg)

苏炳添是第一个100米跑进10秒的亚洲人。除了短跑运动员之外，他还有另外两个身份：暨南大学体育学院副教授以及北京体育大学2019级博士研究生。他曾经发表论文，以自己为例，研究怎样才能跑得更快。

3、[如何生成一个数独游戏](https://me.guanghechen.com/post/game/sudoku/)（中文）

![](https://cdn.beekka.com/blogimg/asset/202108/bg2021080505.jpg)

作者介绍了自动生成数独游戏的编程思路。（[@guanghechen](https://github.com/ruanyf/weekly/issues/1874) 投稿）

4、[如何优化 node 项目的 docker 镜像](https://juejin.cn/post/6991689670027542564)（中文）

作者介绍如何一步步将一个 Node.js 应用的 Docker 镜像文件，从 1.06G 压缩到 73.4M，构建速度从 29.6 秒提高到 1.3 秒。（[@iamobj](https://github.com/ruanyf/weekly/issues/1873) 投稿）

5、[好友关系的数据库设计](https://minimalmodeling.substack.com/p/modeling-mutual-friendship)（英文）

用户互相加为好友，数据库应该怎么设计，才能方便以后查询和删改？

6、[网页暗模式只要一行代码](https://davidwalsh.name/dark-mode-invert-filter)（英文）

![](https://cdn.beekka.com/blogimg/asset/202107/bg2021072111.jpg)

本文介绍如何使用一个 CSS 命令，反转网页颜色。

7、[谷歌是否索引 CSS 文本内容](https://www.searchcandy.uk/seo/technical-seo/css-pseudo-elements/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202107/bg2021071901.jpg)

CSS 可以通过伪元素向网页添加文本内容，作者做了一个实验，看看谷歌会不会索引 CSS 引入的文本。

8、[为什么人眼对蓝色不易聚焦](https://calebkruse.com/10-projects/seeing-blue/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202107/bg2021071703.jpg)

一篇有点奇怪的文章，解释人眼为什么对蓝色不易聚焦，更容易对红色和绿色物体聚焦。

文章的例子很生动，上图的蓝色通道全部都进行了模糊，几乎不影响清晰度。如果对红色和绿色通道进行模糊，马上就会影响清晰度。但是这个例子说服力不强，因为上图中，蓝色主要是海洋，本来也没有多少细节。

## 工具

1、[Obsidian](https://obsidian.md/mobile)

![](https://cdn.beekka.com/blogimg/asset/202107/bg2021071302.jpg)

手机 Markdown 编辑器，功能非常强，主要用于做笔记，有大量插件。编辑功能免费，桌面端同步功能需要付费。

2、[Fakeflix](https://github.com/Th3Wall/Fakeflix)

![](https://cdn.beekka.com/blogimg/asset/202107/bg2021071401.jpg)

网友写的 Netflix 的前端仿制品，用来练习 React + Redux 的用法。

3、[PhotoBook](https://awesomealbum.com/photobook)

![](https://cdn.beekka.com/blogimg/asset/202107/bg2021072401.jpg)

一个概念产品，用户上传照片，在网页上生成一个 VR 相册，可以翻页浏览。

4、[hookdeck](https://hookdeck.com/)

![](https://cdn.beekka.com/blogimg/asset/202108/bg2021080501.jpg)

一个 Web 服务，专门用来接收各种 Webhook 调用，相当于一个集中管理 Webhook 的平台。

5、[DataEase](https://github.com/dataease/dataease)

![](https://cdn.beekka.com/blogimg/asset/202108/bg2021080504.jpg)

一个开源的数据可视化分析工具，支持丰富的数据源连接，能够通过拖拉拽方式，快速制作图表和仪表盘。（[@chixq](https://github.com/ruanyf/weekly/issues/1872) 投稿）

6、[Mousai](https://github.com/SeaDve/Mousai)

![](https://cdn.beekka.com/blogimg/asset/202108/bg2021080503.jpg)

一个开源的桌面软件，可以根据音乐，识别这是什么歌曲。

7、[html-to-image](https://github.com/bubkoo/html-to-image)

一个网页 JS 库，用于将 DOM 节点转成可以下载的图片，原理是在内存里面使用  canvas 和 SVG 对节点重新渲染一次。

8、[mandodb](https://github.com/chenjiandongx/mandodb)

一个示例项目，作者介绍如何从零开始实现一个小型的时序数据库（TSDB），也就是专门用于时间序列的数据库。（[@chenjiandongx](https://github.com/ruanyf/weekly/issues/1876) 投稿）

## 资源

1、[SVN Cheatsheet](https://spike-leung.github.io/blog/others/svn-cheatsheet.html)

![](https://cdn.beekka.com/blogimg/asset/202108/bg2021080507.jpg)

该网页整理了一些 SVN 常用指令的中文介绍，方便查询使用。（[@Spike-Leung](https://github.com/ruanyf/weekly/issues/1875) 投稿）

2、[Rust 和 WebAssembly](https://rustwasm.github.io/docs/book/introduction.html)

![](https://cdn.beekka.com/blogimg/asset/202107/bg2021070301.jpg)

一本免费阅读的英文教程，介绍如何用 Rust 语言开发 WebAssembly 程序。

3、[信息检索导论](https://nlp.stanford.edu/IR-book/)

![](https://cdn.beekka.com/blogimg/asset/202107/bg2021071406.jpg)

一本免费阅读的英语教材，介绍搜索引擎的原理和基本技术。

4、[1 亿美元的减碳奖](https://www.xprize.org/prizes/elonmusk)

![](https://cdn.beekka.com/blogimg/asset/202107/bg2021071415.jpg)

马斯克基金会向全球征集最佳减碳方法，总奖金为1亿美元，第一名可以独得5000万美元。这是官方网站，可以去那里报名。

5、[Public API Lists](https://github.com/public-api-lists/public-api-lists)

这个 GitHub 仓库收集了各种专供软件开发使用的免费 API。

## 图片

1、[液晶门](https://twitter.com/RunDaltonRun/status/1408566439833788423)

美国有一家叫做 Cooler Screens 的创业公司，推出了液晶门，整个门就是一块巨大的液晶屏幕。

请看下面的图片，你觉得这是自动售货机吗？

![](https://cdn.beekka.com/blogimg/asset/202106/bg2021062602.jpg)

![](https://cdn.beekka.com/blogimg/asset/202106/bg2021062603.jpg)

错了，这是实体的液晶门，正在展示广告。想买屏幕上的商品吗？请推开门，门后是一家超市，请看下面的[视频演示](https://v.qq.com/x/page/u3255jduawe.html)。

<iframe frameborder="0" src="https://v.qq.com/txp/iframe/player.html?vid=u3255jduawe" allowFullScreen="true" width="400" height="600"></iframe>

![](https://cdn.beekka.com/blogimg/asset/202106/bg2021062604.jpg)

这种液晶屏幕门，也可以用来播放大屏动态广告，非常炫酷。

![](https://cdn.beekka.com/blogimg/asset/202106/bg2021062605.jpg)

2、[卵石画](https://www.odditycentral.com/art/the-awe-inspiring-pebble-mosaics-of-justin-bateman.html)

一位英国艺术家展示了如何用不同颜色的卵石作画。

![](https://cdn.beekka.com/blogimg/asset/202107/bg2021072808.jpg)

![](https://cdn.beekka.com/blogimg/asset/202107/bg2021072809.jpg)

![](https://cdn.beekka.com/blogimg/asset/202107/bg2021072810.jpg)

## 文摘

1、[开发者为什么放弃自己的开源项目？](https://sambhav.saggis.com/en/blog/free-software-and-freakonomics)

大部分的开源软件，是个人开发者创建的。其中能够长期维护的少之又少，绝大部分项目最终都会被放弃。

下面是一个不完全列表，列出了开发者放弃自己的开源项目的主要原因。从中你就可以知道，个人维护一个长期项目有多难。

1）该项目是免费的，因此没有金钱激励来让开发者继续工作。

2）使项目跟上最新的技术进展，非常困难和耗时。

3）开发者对这个项目感到厌烦，不想继续做了，因为最早只是出于好玩，或为了学校作业而开发的。

4）项目已经失控，变得太大了，很难维护。

5）该项目的主要用户是不太懂计算机的人，每天有大量的、愚蠢的、缺乏耐心的支持请求。

6）出现了更好的替代方案。

7）开发者之间的摩擦，导致主要贡献者离开。

8）开发者的优先事项，从项目转移到其它事情上面，比如结婚有了小孩。

9）项目的代码质量很差，导致维护和重构困难。

10）开发者决定把项目卖给其他人。

11）一种新技术出现了，使得该项目过时了。

## 言论

1、

银牌真的让我很不舒服。如果你赢得了金牌，你会感觉很好； 如果你赢得了铜牌，你会安慰自己，“好吧，至少我得到了一些东西”。

但是当你赢得银牌时，就像有人对你说，“恭喜你，你差点赢了。在所有输家中，你排在第一名，没有人比你更靠近金牌！”

——[Jerry Seinfeld](https://news.ycombinator.com/item?id=28010560)。一项研究称，根据奥运会颁奖时的面部表情识别，铜牌得主比银牌得主更快乐。

2、

我们的目标是永远保存 10 亿人的著作。

-- [布鲁斯特·卡利](https://blog.archive.org/2021/07/21/reflections-as-the-internet-archive-turns-25/)，互联网档案馆（Internet Archive）创始人，庆祝该项目创立25周年。

3、

我一直被问到工作与生活的平衡，我的观点是，这种说法会让人变软弱，因为它意味着你必须权衡，何时工作，何时生活。实际上，工作和生活是融合在一起的，一方不顺利，另一方就会受到影响。它们不是平衡关系。

-- [贝佐斯](https://www.businessinsider.com/jeff-bezos-work-life-balance-debilitating-phrase-career-circle-2021-7)，亚马逊的老板

4、

SQLite 的应用太广泛，测试量也很惊人。每个版本发布之前，都要进行各种单元测试、参数测试、模糊测试，一共有数十亿次，运行一次完整的自动化测试，需要数天时间。

-- [Hacker News 读者](https://news.ycombinator.com/item?id=27719052)

5、

每一行代码都是一种负担。如果增加代码行数，就会增加你的责任。

--[《创业公司生存指南》](https://blog.kalvad.com/surviving-guide-for-a-tech-startup/)

## 历史上的本周

2020年（第 119 期）：[降雨量和保险博弈](https://www.ruanyifeng.com/blog/2020/08/weekly-issue-119.html)

2019年（第 67 期）：[复杂系统无法维护，侏罗纪公园必定失败](https://www.ruanyifeng.com/blog/2019/08/weekly-issue-67.html)

2018年（第 16 期）：[科技改变死亡的模式](https://www.ruanyifeng.com/blog/2018/08/weekly-issue-16.html)

## 订阅

这个周刊每周五发布，同步更新在[阮一峰的网络日志](http://www.ruanyifeng.com/blog)和[微信公众号](http://weixin.sogou.com/weixin?query=%E9%98%AE%E4%B8%80%E5%B3%B0%E7%9A%84%E7%BD%91%E7%BB%9C%E6%97%A5%E5%BF%97)。

微信搜索“阮一峰的网络日志”或者扫描二维码，即可订阅。

![](https://cdn.beekka.com/blogimg/asset/202103/bg2021030402.jpg)

（完）

