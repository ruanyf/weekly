# 科技爱好者周刊（第 244 期）：大数据已死

这里记录每周值得分享的科技内容，周五发布。

本杂志[开源](https://github.com/ruanyf/weekly)，欢迎[投稿](https://github.com/ruanyf/weekly/issues)。周刊另有[《谁在招人》](https://github.com/ruanyf/weekly/issues/2960)服务，发布程序员招聘信息。合作推广请[邮件联系](mailto:yifeng.ruan@gmail.com)（yifeng.ruan@gmail.com）。

## 封面图

![](https://cdn.beekka.com/blogimg/asset/202302/bg2023022804.webp)

新西兰小镇 Tirau，在公路边放置了很多波纹铁皮做的奇特建筑。上图的小狗其实是一个公共厕所。（[via](https://www.newzealand.com/us/tirau/)）

## 本周话题：大数据已死

“大数据”这个词，大家想必耳熟能详。这是最大众化的 IT 词汇之一，全社会曾经都热衷于它。

![](https://cdn.beekka.com/blogimg/asset/202302/bg2023022203.webp)

[百度指数](https://index.baidu.com/v2/main/index.html#/trend/%E5%A4%A7%E6%95%B0%E6%8D%AE?words=%E5%A4%A7%E6%95%B0%E6%8D%AE)显示，“大数据”从2011年开始进入搜索引擎，然后快速传播，在2017年～2019年之间达到顶峰。

那时，大家都认为，数据在未来将指数式增长，世界将被海量数据淹没。如何处理这些数据，就成为了关键问题。它决定了一个企业甚至一个国家在信息时代的竞争力。

于是，企业纷纷寻求大数据解决方案，出现了很多相关的招聘岗位，还都是高薪。高校也积极响应，有[报道](https://m.mp.oeeee.com/a/BAAFRD000020200728349302.html)称，国内有600多所高校开设了“大数据专业”或“大数据学院”，其中包括[北京大学](https://www.math.pku.edu.cn/bks/zyjs/69751.htm)、[复旦大学](https://sds.fudan.edu.cn/)这样的名校。

![](https://cdn.beekka.com/blogimg/asset/202302/bg2023022204.webp)

但是，十年过去了，大数据并没有成为发展的瓶颈，我们依然足以处理产生的所有数据，在可预见的将来也是如此。

**预言中的大数据时代，看上去不仅没有来临，反而变得遥遥无期了。** “大数据“这个词的热度，也在不断降温，被提及次数变少了，招聘岗位也慢慢不见了。

与之相应的是，”大数据“这个技术领域，也进展甚微，没有诞生新的概念和理论，技术没有突破，很多方向都停滞不前。

比如，专为处理大数据而设计的 NoSQL 数据库，声势越来越小，陷入停滞，反而是传统的关系型数据库（SQLite、Postgres、MySQL）强劲增长，越发受欢迎。

这是怎么回事？

![](https://cdn.beekka.com/blogimg/asset/202302/bg2023022808.webp)

谷歌的大数据工程师乔丹·蒂加尼 （Jordan Tigani），最近直言不讳地说：“[大数据已死](https://motherduck.com/blog/big-data-is-dead/)”。

他认为，**大数据时代已经结束了，大数据的存储和分析，作为一个技术问题已经解决了。** 用户已经不必担心数据大小了，再多的数据都不是问题。

他提出了“大数据已死”的6个理由，我觉得很有说服力，下面就跟大家分享。

<u>（1）绝大多数企业到不了大数据级别。</u> 企业的数据量往往不到 1TB，很多甚至不到 100GB。

假设一家中等规模的制造业公司，拥有1000个客户，每个客户每天产生一个订单，每个订单包含100个产品。这家公司一天产生的数据量，依然远远小于 1 MB。三年后，数据总量也只有 1 GB，达到 1 TB 需要几千年。

就算是大型互联网公司，大多数时候也到不了大数据级别。假设某个营销活动有100万用户参加，并且同一时间，该公司开展了几十个这样的营销活动，每天的数据量依然不足 1 GB，就算加上各种日志，可能也只有几个 GB，这跟大数据相差甚远。

<u>（2）存储和计算正在分离。</u>  大数据包含“数据存储”和“数据计算”两个方面，如果放在一个系统里面处理，确实很难。

但是，这两方面现在已经能够脱钩，变成两个独立系统，各自都能独立扩展。这意味着，“数据计算”不受“数据存储”（数据库大小）的限制，反之依然。

因此，大数据作为单一问题就不存在了，变成了海量存储和大型计算两个问题。

<u>（3）没有新业务的情况下，数据是线性增长的，</u> 即每天的新增数据与以前的数据结构相同。

以前的数据一旦写入数据库，通常就不再发生变化，也没有新的计算需求，相关计算在以前就完成了。这时只要对最近的新增数据进行单独计算，然后保存就可以了。你很少需要每天扫描一遍旧数据：那些数据一成不变，为什么要一遍一遍计算它们呢？

因此，对于一家企业来说，“数据会指数式增长”这个假设并不成立。而且，数据计算的需求，其实比数据存储的需求小得多，因为老数据很少需要再次计算。

<u>（4）人们看重的往往只是最近的数据</u>。最频繁的查询是针对24小时内产生的数据，一周前的数据的查询可能性要低20倍，一个月前的历史数据只会偶尔被查询。

这意味着，大数据更像静态数据，而不完全是动态数据。既然以前的数据很少用到，那么就可以压缩保存。一个包含10年数据的表格，可能会达到 PB 级别，但是如果压缩保存历史数据，压缩后可能不到 50 GB。

<u>（5）真正拥有大数据的公司，几乎从不查询全部数据。</u>他们90%的查询涉及的数据少于 100 MB，涉及 TB 级别数据的查询非常少。

就算查询 TB 级别数据，查询性能的优先级往往并不高。等一个周末或几天才拿到结果，通常是可以接受的。

另外，大型数据集的查询非常昂贵。谷歌的 BigQuery 的 PB 级别查询报价是 5,000 美元，即使是大公司也不会经常使用。

<u>（6）硬件的飞速发展，使得单台计算机的计算能力大增。</u> 2004年，谷歌发表 MapReduce 论文时，单机的计算能力还比较弱，很多计算必须通过分布式完成。

2006年，AWS 推出了 EC2 云主机，你只能用到一个单核 CPU 和 2 GB 内存。今天，AWS 的标准实例具有64个内核和 256 GB 内存。如果愿意多花钱，还可以拿到445个内核和超过 24 TB 内存。

单机计算能力大大增强，意味着大数据的最大难点——分布式计算——即使被用到，困难程度也大大降低。

综上所述，结论就是：**数据量已经不需要特别关注了，再也不必担心处理不了海量数据了。** 大数据作为一个技术问题，已经解决了。

## 科技动态

1、[AI 时装表演](https://mymodernmet.com/malik-afegbua-fashion-show-for-elders/)

一位非洲艺术家使用 AI 生成了一场时装表演。

![](https://cdn.beekka.com/blogimg/asset/202302/bg2023022601.webp)

他告诉 AI，他想要一场非洲老年人展示民族服装的时装表演，AI 就生成了相应的图片。经过不断调整，最终得到了相当理想的结果。

![](https://cdn.beekka.com/blogimg/asset/202302/bg2023022602.webp)

可以看到，这些图片可能比真实的时装秀效果更好、影响更大。

在现实生活中，找到这些模特，以及准备好这些服装，是非常困难的，成本也很高。

![](https://cdn.beekka.com/blogimg/asset/202302/bg2023022603.webp)

以后肯定有很多时装展示，会用 AI 生成。这对于时尚行业也许会产生很大的冲击，谁能想到，AI 还能影响到模特儿的生计。

![](https://cdn.beekka.com/blogimg/asset/202302/bg2023022604.webp)

2、[马桶冲水的气溶胶](https://www.colorado.edu/today/2022/12/08/cu-scientists-shine-light-what-comes-when-you-flush)

公共卫生学家一直呼吁，马桶冲水会产生气溶胶的粒子扩散，可能会传播病原体，但是没有证据证实这种扩散的速度和分布。

科罗拉多大学的工程师团队，使用绿色激光和高速摄像设备，拍摄马桶冲水，证实确实存在气溶胶扩散。

![](https://cdn.beekka.com/blogimg/asset/202212/bg2022120821.webp)

实验发现，冲水时，颗粒以每秒2米的速度快速射出，可以到达马桶上方1.5米的高度（上图）。

虽然较大的颗粒会在几秒钟内沉降到马桶表面上，但较小的气溶胶颗粒可以在空气中悬浮几分钟或更长时间。 

下图是实验时的激光拍摄场景。

![](https://cdn.beekka.com/blogimg/asset/202212/bg2022120822.webp)

3、[GPS 艺术](https://interestingengineering.com/culture/man-travels-4000-miles-marriage)

谷歌地图会根据 GPS 信号，显示运动轨迹。很多人就通过这种方式，在谷歌地图作画，称为 GPS 艺术。

一个日本男子为了向女友求婚，在谷歌的日本地图上写下了“Marry Me”，最后还画了一颗被箭射中的心。

![](https://cdn.beekka.com/blogimg/asset/202212/bg2022120901.webp)

他从日本北部的北海道，一直开车到南端的鹿儿岛，一共行进了7163公里，为期6个月，是世界最大的 GPS 艺术品。

![](https://cdn.beekka.com/blogimg/asset/202212/bg2022120902.webp)

4、[火山熔岩表演](https://phys.org/news/2022-12-lava-iceland-volcano.html)

冰岛首都雷克雅未克有一个特殊的剧场演出，表演熔岩流出火山。

![](https://cdn.beekka.com/blogimg/asset/202212/bg2022120904.webp)

它使用的是1918年火山喷发出来的真实熔岩，一次要用到600公斤。重新加热到熔点（1100摄氏度）后，已经冷却的熔岩重新变成火红的液体，从高处的滑梯流下来，让游客感受一下火山喷发的感觉。

![](https://cdn.beekka.com/blogimg/asset/202212/bg2022120905.webp)

真实的火山熔岩含有硫磺气体，是有毒的，但是经过多次加热后，这些气体都已经散发掉了，所以是安全的。

活动主办人说，有一次火山喷发，他看到很多游客都赶去观看，就萌生了举办熔岩秀的念头。

![](https://cdn.beekka.com/blogimg/asset/202212/bg2022120906.webp)

## 文章

1、[我如何搭建自己的博客](https://www.joshwcomeau.com/blog/how-i-built-my-blog/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202212/bg2022122702.webp)

作者详细介绍自己使用 Next.js 框架和其他 React 工具，搭建博客的过程。他要使用 MDX 格式将 React 组件加入 Markdown 文件。

2、[Steam Deck 上市一周年](https://boilingsteam.com/steam-deck-first-anniversary-of-the-ultimate-gaming-platform/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202302/bg2023022801.webp)

本月，掌上游戏机 Steam Deck 上市满一周年了。本文介绍了这个设备的很多创新，尤其在软件上。

3、[如何配置 nano 编辑器](https://ariadne.space/2021/08/13/gnu-nano-is-my-editor-of-choice/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202212/bg2022122805.webp)

服务器都自带 nano 编辑器，但是一般认为它的功能比较弱。本文介绍只要正确配置，它就会变得很好用。

4、[Stripe 如何用 Markdoc 构建交互式文档](https://stripe.com/blog/markdoc)（英文）

![](https://cdn.beekka.com/blogimg/asset/202209/bg2022091603.webp)

Markdoc 是 Markdown 的一种扩展语法，允许在生成 HTML 页面时插入组件，用户可以跟文档交互。本文介绍 Stripe 公司怎么使用 Markdoc 构建文档。

5、[CSS 的颜色格式](https://www.joshwcomeau.com/css/color-formats/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202212/bg2022123102.webp)

这篇长文详细介绍 CSS 颜色的各种格式，如果想深入掌握如何表示颜色，推荐阅读这篇文章。

6、[使用 ClickHouse 查询 GitHub](https://til.simonwillison.net/clickhouse/github-explorer)（英文）

![](https://cdn.beekka.com/blogimg/asset/202301/bg2023010201.webp)

ClickHouse 是著名的数据仓库软件，它的官网有一个[练习场](https://play.clickhouse.com/play?user=play)，可以在线查询2011年以来所有的 GitHub 事件，总共31亿条记录。本文演示怎么使用这个数据库。

7、[用信鸽解释 HTTPS](https://baida.dev/articles/https-explained-with-carrier-pigeons)（英文）

![](https://cdn.beekka.com/blogimg/asset/202301/bg2023010303.webp)

作者以信鸽传书举例，解释 HTTPS 协议是什么，写得很好，这个例子也很贴切。

8、[Windows 11 有多少层 UI？](https://ntdotdev.wordpress.com/2023/01/01/state-of-the-windows-how-many-layers-of-ui-inconsistencies-are-in-windows-11/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202301/bg2023010302.webp)

一篇挺有趣的文章，作者检视 Windows 11 的 UI 里面保存了多少以前的样式，甚至找出了遗留的 Windows XP 和 Windows 3.1 的样式。

## 工具

1、[kill-sticky](https://github.com/t-mart/kill-sticky)

一个书签脚本，用于去除网页的粘性（sticky）元素。很多网站使用这种元素生成遮罩层，非常讨厌。类似的脚本还有 [unsticky](https://github.com/nothingless/unsticky)。

2、[幕境](https://github.com/tangshimin/MuJing)

![](https://cdn.beekka.com/blogimg/asset/202302/bg2023022806.webp)

英语学习软件，用户上传原版视频和字幕，软件会自动生成词库。以后播放视频时，遇到词库里面的单词，该词就会以弹幕形式自动展示释义。（[@tangshimin](https://github.com/ruanyf/weekly/issues/2936) 投稿）

3、[轻快图床](https://github.com/ischenliang/quickly-picture-bed)

![](https://cdn.beekka.com/blogimg/asset/202302/bg2023022805.webp)

一个基于 Web 的图床系统。（[@it-chenliang](https://github.com/ruanyf/weekly/issues/2937) 投稿）

4、[Datasette](https://datasette.io/)

![](https://cdn.beekka.com/blogimg/asset/202302/bg2023022807.webp)

开源的数据探索工具，可以从各种数据源导入数据，然后自定义数据的查询和展示形式（图表、仪表盘、地图等等）。（[@jerrylususu](https://github.com/ruanyf/weekly/issues/2950) 投稿）

5、[DrissionPage](https://github.com/g1879/DrissionPage)

一个基于 Python 的网页自动化工具，可以编写脚本操作浏览器。（[@g1879](https://github.com/ruanyf/weekly/issues/2946) 投稿）

6、[git-hours](https://github.com/kimmobrunfeldt/git-hours)

一个 JS 写的命令行工具，可以估计开发某个代码库花费的大致时间。

7、[Manticore Search](https://github.com/manticoresoftware/manticoresearch)

![](https://cdn.beekka.com/blogimg/asset/202207/bg2022072904.webp)

一个开源的全文搜索引擎，号称可以替代 Elasticsearch，支持中文。

8、[Unsilence](https://github.com/lagmoellertim/unsilence)

一个命令行工具，自动删除视频里面的无声片段，比较适合处理演讲、讲座视频。

9、[Tabler](https://github.com/tabler/tabler)

![](https://cdn.beekka.com/blogimg/asset/202207/bg2022072905.webp)

一个基于 Bootstrap 的网页 UI 框架，专用于开发管理后台。

10、[Code Language Converter](https://codelanguageconverter.com/)

![](https://cdn.beekka.com/blogimg/asset/202209/bg2022093005.webp)

这个网站可以把一种语言的代码，转成另一种语言，比如把 JS 代码转 PHP 代码。它是收费服务，但是有免费额度。

11、[VueTube](https://github.com/VueTubeApp/VueTube)

![](https://cdn.beekka.com/blogimg/asset/202210/bg2022100102.webp)

网友自己开发的 Youtube 手机客户端，支持安卓和 iOS。

## 资源

1、[CSS Bed](https://www.cssbed.com/)

![](https://cdn.beekka.com/blogimg/asset/202209/bg2022091111.webp)

这个网页收集并展示各种无类的极简化 CSS 框架。如果你想选一个简单的 CSS 框架，可以看看它。

2、[C 语言手册](https://lists.gnu.org/archive/html/info-gnu/2022-09/msg00005.html)（GNU C Language Manual）

理查德·斯托曼最近编写的 C 语言教程，这是源码，[GitHub](https://github.com/VernonGrant/gnu-c-language-manual) 有转换好的 PDF 文件下载。

3、[Atkinson Hyperlegible 字体](https://brailleinstitute.org/freefont)

![](https://cdn.beekka.com/blogimg/asset/202209/bg2022091201.webp)

一种高辨识度的英文字体，容易混淆的字符都做了明显区别，比如 1 和 I、i 和 l。

4、[Python 实用教程](https://dabeaz-course.github.io/practical-python/Notes/Contents.html)

![](https://cdn.beekka.com/blogimg/asset/202212/bg2022121001.webp)

一本简单实用的 Python 入门英文教程。

## 图片

1、[美国总统的 AI 画像](https://twitter.com/DSzymborski/status/1627038833455038469) 

一位美国专栏作家使用 AI，为每一位美国总统生成了 Pixar 式的卡通风格画像。

下面是最近半个世纪的美国总统。

![](https://cdn.beekka.com/blogimg/asset/202302/bg2023022502.webp)

![](https://cdn.beekka.com/blogimg/asset/202302/bg2023022503.webp)

![](https://cdn.beekka.com/blogimg/asset/202302/bg2023022504.webp)

![](https://cdn.beekka.com/blogimg/asset/202302/bg2023022505.webp)

2、[布鲁塞尔化](https://en.wikipedia.org/wiki/Brusselization)

上个世纪60年代和70年代，比利时首都布鲁塞尔对城市规划放任自流，导致传统街区里面出现了很多毫不协调的高层建筑。

![](https://cdn.beekka.com/blogimg/asset/202209/bg2022091102.webp)

上图中，高层建筑完全随意地建在传统街区里面，破坏了城市功能和景观。

后来，在建筑学中，“布鲁塞尔化”就用来指杂乱无章的城市规划。

![](https://cdn.beekka.com/blogimg/asset/202209/bg2022091103.webp)

![](https://cdn.beekka.com/blogimg/asset/202209/bg2022091104.webp)

## 文摘

1、[苏联潜艇 K-219](https://en.wikipedia.org/wiki/Soviet_submarine_K-219)

K-219 是苏联海军的一艘核潜艇，可以携带16枚导弹，这些导弹配备32枚或48枚核弹头。

![](https://cdn.beekka.com/blogimg/asset/202209/bg2022091105.webp)

1986年10月3日星期五，它正在大西洋航行，导弹发射管突然爆炸起火。苏联后来声称，这是因为与美国潜艇发生了碰撞，但是美国海军否认。

两名苏联水手在爆炸中当场丧生，第三名水手不久后死于有毒气体。更糟糕的是，爆炸将潜艇炸出一个缺口，海水涌入，潜艇从海底40米快速坠落到300米。

艇长不得不立即关闭所有舱室之间的密封门，防止海水不断涌入。

25名水手被困在一个密封舱出不来。经过紧张的会议，艇长最终同意打开这个密封舱，让他们出来。

最可怕的是，核反应堆本应自动关闭，但还在运行。如果一直这样下去，后果不堪设想。反应堆舱室的温度已经超过60摄氏度，并且充满了有毒的硝酸烟雾，但还是必须有人进去，手动将控制棒放入反应堆，让其停止运行。

第一个士兵进入反应堆舱，但是只插入一根控制棒（共需插入四根），就耗尽了氧气。他不得不退出，一走出来就昏了过去。

这时，一个20岁的士兵表示，愿意去完成这项任务。他穿着防化服，进入房间，成功关闭了反应堆。但是，房间里发生了大火，增加了压力，压力差使得这个士兵无法再打开门出来，最后他在反应堆舱内窒息而死。他后来被追授俄罗斯联邦英雄称号。

核反应堆关闭后，潜艇就失去了动力。艇长完全依靠电池供电，让 K-219 浮出水面。然后，苏联准备派出一艘货轮将这艘潜艇拖回港口。

但是，海水仍在不断渗入，到了三天后的10月6日，已经完全无法修复。所有人员不得不撤离，这艘潜艇和携带的核武器就这样沉入了6000米的大西洋海底，至今仍在那里。

## 言论

1、

摩尔定律只说了，每18个月计算机芯片的晶体管数量增加一倍，但是没有说增加一倍所需要投入的科研人员，今天是1970年代的18倍。

-- [《2022 年生物学突破》](https://cell.substack.com/p/biology-breakthroughs-2022)

2、

我做过70多个创业项目，只有4个成功。总体来看，我的成功率只有5%左右，我做的事情95%是要失败的。

所以…… 我就要去做更多的项目啊。

-- [推特网友](https://twitter.com/levelsio/status/1457315274466594817)

3、

一些科学家像鸟，从鸟瞰的角度看待问题，注重面前的广阔风景，不需要太多细节。另一些科学家像青蛙，只盯着眼前的事物，喜欢深入细节。

-- [《物理学的鸟和青蛙》](https://3quarksdaily.com/3quarksdaily/2020/11/birds-and-frogs-in-physics.html)

4、

你应该开始写博客，如果不知道写什么，就写你学到的东西，以及写下你创造或建立的东西。

-- [《博客写什么》](https://simonwillison.net/2022/Nov/6/what-to-blog-about/)

5、

世界隐藏的终极真相是，这个世界是我们创造出来的东西，而且可以很容易地做出不同的样子。

-- [Hacker News 读者](https://news.ycombinator.com/item?id=34211460)

## 历史上的本周

[如果这个世界有快乐机](http://www.ruanyifeng.com/blog/2022/03/weekly-issue-197.html)（2022 #197）

[寻找你愿意忍受的痛苦](http://www.ruanyifeng.com/blog/2021/02/weekly-issue-147.html)（2021 #147）

[远程办公暴露冗余岗位](http://www.ruanyifeng.com/blog/2020/02/weekly-issue-95.html)（2020 #95）

[阿西莫夫回忆录《人生舞台》](http://www.ruanyifeng.com/blog/2019/03/weekly-issue-45.html)（2019 #45）

## 鸣谢

周刊得到国内新一代知识管理与协作平台 [FlowUs](https://flowus.cn?promotionChannel=GW_RYF_01) 的帮助，深表感谢。

[FlowUS](https://flowus.cn?promotionChannel=GW_RYF_01)  = 文档 + 表格 + 网盘。你可以用它写文档、做主页、管理数据、存储文件等等。

每一期周刊同时发布在[ FlowUs 专栏](https://ruanyf-weekly.flowus.cn/?code=FLOWUS&promotionChannel=WX_RYF_00)，欢迎大家也去开通自己的专栏和主页。

![](https://cdn.beekka.com/blogimg/asset/202303/bg2023030205.webp)

（完）

