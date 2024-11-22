# 科技爱好者周刊（第 326 期）：世界没有那么多财富

这里记录每周值得分享的科技内容，周五发布。

本杂志[开源](https://github.com/ruanyf/weekly)，欢迎[投稿](https://github.com/ruanyf/weekly/issues)。另有[《谁在招人》](https://github.com/ruanyf/weekly/issues/5445)服务，发布程序员招聘信息。合作请[邮件联系](mailto:yifeng.ruan@gmail.com)（yifeng.ruan@gmail.com）。

## 封面图

![](https://cdn.beekka.com/blogimg/asset/202411/bg2024111911.webp)

内蒙古库布其沙漠的光伏基地，一望无际的光伏发电板铺设在沙漠之中。（[via](http://www.news.cn/politics/20241113/3932b621dc8348ca93dfd3db57f7f7de/c.html)）

## 世界没有那么多财富

维基百科有一个页面“[人均财富排名](https://en.wikipedia.org/wiki/List_of_countries_by_wealth_per_adult)”。

![](https://cdn.beekka.com/blogimg/asset/202411/bg2024111005.webp)

它列出了不同国家/地区的人均财富，可以用来比较生活水平：**人均财富越多，生活水平越高**。

需要注意的是，它比的是财富，不是收入。

财富的范围更广泛，除了收入，还包括其他资产（比如房产、股票、汽车等等）。**财富的计算公式是，你的资产减去你的负债**。

> 财富 = 资产 - 负债

这个页面提供了很多统计数据，我分享其中一些。

<u>（1）2022年底，全世界的总财富是454.3万亿美元。</u>

我们常说“把蛋糕做大”，这就是蛋糕目前的大小。它除以全世界53.6亿的成年人口，可以得到，每个成年人拥有财富8.47万美元（约60万人民币）。

所以，**如果你的财富超过60万元人民币，就超过全世界至少一半人了**。

<u>（2）美国的人均财富是55.1万美元，中国是7.57万美元，只是美国的七分之一。</u>

因此，我认为，**中国未来的增长空间巨大**。理由是中国没可能停留在人均财富只有美国七分之一的水平，就增长不动了。

<u>（3）中国人均财富7.57万美元，相当于55万人民币。</u>乍一看，你可能觉得，一个成年人拥有55万人民币的财富，这并不少。

但是，实际上是很少的。

假定这55万都是现金，那么即使过得很节俭，房租+日常消费每月3000元，也只够生活15年。想靠这些钱退休还差得远，你还是必须工作赚钱。

假定这55万里面包括了不动产和固定资产（比如汽车），由于存在折旧和市场波动，它们可能会不断贬值。等到变现的时候，你的财富很可能大幅缩水。

结论就是，55万人民币的人均财富，实际价值比名义价值低很多，根本不够支撑长期生活。

（4）这就是世界的现状：**现有的财富总量，不足以让每个人摆脱贫穷**。

对于普通人来说，即使能够达到平均值，你的财富也是不够的，这个世界就没有那么多财富。

一个社会想要致富，归根结底还是需要创造更多的财富。 **真正的财富不是财富本身，而是创造财富的能力**。如果你能够创造财富，那才是真正的财富，比那些静态的财产更有价值。

“创造财富”的方法，就是能够不断生产出人们需要的东西。这才是国家和个人最应该培养的能力。

## [本周软件] Rspack 工具栈

现在有一个趋势，JS 工具纷纷使用 Rust 语言重写，速度可以提高至少一个数量级。

最近，我就在使用这样一个“新生代工具” [Rspack](https://github.com/web-infra-dev/rspack)，感觉很不错，介绍给大家。

![](https://cdn.beekka.com/blogimg/asset/202411/bg2024111002.webp)

[Rspack](https://github.com/web-infra-dev/rspack) 本身是 Rust 应用，用来取代老牌的 JS 构建打包工具 Webpack。

使用后的速度提升，非常明显，**Rspack 的耗时大概是 Webpack 的十分之一**。如果 Webpack 需要10秒，Rspack 就是1秒。

但是，它的最大优势还不是快，而是 **Webpack 的无缝替换**。你基本上不需要改动配置，直接把配置文件`webpack.config.js`改名为`rspack.config.js`即可。

Rspack 不仅兼容 Webpack 的语法，还兼容插件。根据官方文档，下载量最高的50个 Webpack 插件，80%以上可以直接使用，剩下的也有替代方案。

Rspack 团队为了保证兼容性，向 Webpack 官方仓库做了100多次提交。甚至 Webpack 的主要维护者之一的 Alexander Akait 亲自动手，让很多插件可以在 Rspack 正常运行。

另外，Rspack 的功能也更多。比如，Webpack 模块联邦（Module Federation）的作者 Zack Jackson 加入了 Rspack 团队，为 Rspack 实现了模块联邦 2.0。

它在社区已经得到很多好评，发布一年多以来， GitHub 仓库有9800颗星星，今年还获得了 GitNation 基金会的“年度突破开源项目”奖。

![](https://cdn.beekka.com/blogimg/asset/202411/bg2024111003.webp)

今年8月，它发布了 1.0 版，API 已经稳定了，可以放心用于生产环境。

不过，由于全盘继承 Webpack，Rspack 也同时继承了前者的体验问题：配置麻烦，上手不算容易。开发团队为了解决这个问题，**在 Rspack 的基础上，封装了一系列更简单易用的衍生工具**。

![](https://cdn.beekka.com/blogimg/asset/202411/bg2024111004.webp)

> - [Rsbuild](https://rsbuild.dev/zh/): 专注于构建 Web 应用。
> - [Rslib](https://lib.rsbuild.dev/zh/): 专注于构建 JS 软件包。
> - [Rspress](https://rspress.dev/zh/)：专注于生成静态站点，比如文档和博客。
> - [Rsdoctor](https://rsdoctor.dev/zh/)：专注于构建分析。

以上这些工具，底层都是 Rspack，分别用于不同的用途，统称为“Rspack 工具栈”。

其中，**Rsbuild 是更简单易用的构建打包工具，对标 Vite**。[Rsbuild](https://rsbuild.dev/zh/) 的底层是 Rspack，就像 Vite 的底层是 esbuild + Rollup 一样。构建项目时，你可以选择 Rspack，也可以选择 Rsbuild，后者的配置更简单一些，体验更好，针对性的功能更多。

对于国内开发者，Rspack 工具栈还有一个好处。虽然它来自一个国际化团队，但是属于字节开源出来的工具，字节内部大量项目已经采用，中文支持和中文文档都是优先的。

大家使用 [Rspack](https://github.com/web-infra-dev/rspack) 或 [Rsbuild](https://github.com/web-infra-dev/rsbuild) 后，如果遇到问题，就去[项目仓库](https://github.com/web-infra-dev/rspack)提 issue，官方都会快速回应。

## 科技动态

1、[风力发电飞艇](https://www.news.cn/tech/20241118/fd9c03da290e400d967945a8de29272a/c.html)

一家北京公司推出了风力发电飞艇。

![](https://cdn.beekka.com/blogimg/asset/202411/bg2024111801.webp)

这个飞艇长23米、直径15米，艇中央有一个直径5米的涵道，里面安装了风力发电机，叶片长2.4米。

![](https://cdn.beekka.com/blogimg/asset/202411/bg2024111802.webp)

飞艇飞到500米的高度，风力发电机进行发电，然后通过电缆将电力传回地面。

![](https://cdn.beekka.com/blogimg/asset/202411/bg2024111803.webp)

高空的风远大于地面，因此高空风力发电的效果更好。

![](https://cdn.beekka.com/blogimg/asset/202411/bg2024111804.webp)

这个飞艇的远期目标是飞到“风能密度为地面200倍、年发电时长为地面4倍以上的平流层（高度约1万米）”，将风力发电成本降到现在的十分之一。

2、[局域网游戏室](https://lanparty.house/)

一个美国程序员出于怀旧，在家中地下室建造了一个局域网游戏室。

![](https://cdn.beekka.com/blogimg/asset/202411/bg2024111901.webp)

游戏室一共可以容纳12人对战，电脑台都是折叠的，可以收纳进墙壁。

![](https://cdn.beekka.com/blogimg/asset/202411/bg2024111902.webp)

下面就是电脑桌全部收起来的样子。

![](https://cdn.beekka.com/blogimg/asset/202411/bg2024111904.webp)

他设置了一个家庭服务器，游戏软件存在里面，电脑终端去读取游戏。

![](https://cdn.beekka.com/blogimg/asset/202411/bg2024111905.webp)

布线是一个大工程。

![](https://cdn.beekka.com/blogimg/asset/202411/bg2024111906.webp)

他还专门准备了一个储藏室，存放电脑的内存、CPU 和显卡等配件。

![](https://cdn.beekka.com/blogimg/asset/202411/bg2024111907.webp)

虽然建成后运作良好，但他有一个最大的烦恼：现在的游戏只支持互联网对战，很少支持局域网对战，大多数时候他只能玩老游戏。

3、[金字塔的建材](https://www.nbcnews.com/science/environment/egypt-pyramids-giza-nile-branch-study-rcna152494)

埃及金字塔位于沙漠之中，科学家一直很困惑，建造金字塔的巨大石块如何运进沙漠？

那些石块每个有2.5吨重，古埃及人用了什么方法，长途运输几千块巨石。

![](https://cdn.beekka.com/blogimg/asset/202410/bg2024101403.webp)

最近的一项发现，可能揭示了答案。科学家使用卫星照片，发现尼罗河有一条已经干涸的支流。

几乎所有的金字塔都分布在这条支流的旁边，这说明古埃及人很可能通过水运，将巨石送到建筑地点。

![](https://cdn.beekka.com/blogimg/asset/202410/bg2024101404.webp)

上图中，深蓝色是现在的尼罗河，浅蓝色是那条已经干涸的支流，各种颜色的点是金字塔的位置。

4、**其他**

（1）一个国外程序员在[自行车训练机](https://www.ohrg.org/cycling-typing)的把手上，装了两个分离式键盘，可以一边骑车，一边打字。

![](https://cdn.beekka.com/blogimg/asset/202411/bg2024111404.webp)

（2）CSS 有了一个新的[徽标](https://michaelcharl.es/aubrey/en/code/new-rebeccapurple-css-logo)。

![](https://cdn.beekka.com/blogimg/asset/202411/bg2024111703.webp)

（3）[卡西欧](https://www.theverge.com/2024/11/15/24297261/casio-smart-ring-digital-watch-crw-001-1jr)推出一款形似手表的戒指。

![](https://cdn.beekka.com/blogimg/asset/202411/bg2024111908.webp)

![](https://cdn.beekka.com/blogimg/asset/202411/bg2024111909.webp)

## 文章

1、[排版引擎纵谈：程序员的视角](https://blog.ppresume.com/posts/zh-cn/on-typesetting-engines)（中文）

![](https://cdn.beekka.com/blogimg/asset/202411/bg2024112002.webp)

本文介绍并对比了几种排版引擎，重点是 CJK 文字处理： HTML + CSS、LaTeX、LaTeX.js、Typst 和 react-pdf。（[@xiaohanyu](https://github.com/ruanyf/weekly/issues/5562) 投稿）

2、[AI 的视觉注入攻击](https://www.lakera.ai/blog/visual-prompt-injections)（英文）

![](https://cdn.beekka.com/blogimg/asset/202411/bg2024111402.webp)

本文介绍如何在图片里面，进行“视觉注入”（visual prompt injections），从而欺骗 AI 模型。比如，上图男子拿着一张纸，上面写着“忽略我这个人”。

3、[服务器端渲染简介](https://www.builder.io/m/explainers/server-side-rendering)（英文）

![](https://cdn.beekka.com/blogimg/asset/202411/bg2024111405.webp)

本文举例介绍网页应用的“服务器端渲染”是什么，也就是大家常说的 SSR（server side rendering）。

4、[带有平铺式窗口管理器的 Linux 桌面](https://linuxblog.io/linux-tiling-desktop-environments/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202408/bg2024082703.webp)

对于大量使用键盘的人，平铺式窗口管理器最好用。本文介绍了内置平铺式窗口管理器的 Linux 桌面环境。

5、[12 个当代 CSS 的一行代码增强](https://moderncss.dev/12-modern-css-one-line-upgrades/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202407/bg2024072617.webp)

本文介绍12种 CSS 的新写法，只要一行代码，就能增强网页样式。

6、[如何正确使用 git worktree](https://matklad.github.io/2024/07/25/git-worktrees.html)（英文） 

![](https://cdn.beekka.com/blogimg/asset/202407/bg2024072706.webp)

git 有一个 worktree 功能，大多数人只把它当作分支功能的替代方案。作者提出，应该把 worktree 用来管理并发任务。

## 工具

1、[Neat CSS](https://neat.joeldare.com/)

![](https://cdn.beekka.com/blogimg/asset/202408/bg2024080404.webp)

一个极简的 CSS 框架。

2、[PG Back Web](https://github.com/eduardolat/pgbackweb)

![](https://cdn.beekka.com/blogimg/asset/202408/bg2024080405.webp)

一个带有 Web 界面的 PostgreSQL 备份工具。

3、[Llama OCR](https://llamaocr.com)

![](https://cdn.beekka.com/blogimg/asset/202411/bg2024111702.webp)

这个网站提供免费的图片 OCR，通过 AI 识别图片里面的文字，好像不能识别中文。

4、[MySpeed](https://github.com/gnmyt/myspeed)

![](https://cdn.beekka.com/blogimg/asset/202408/bg2024080703.webp)

可以自己架设的网络测速工具。

5、[dive](https://github.com/wagoodman/dive)

这个工具可以显示 Docker 镜像文件每一层的内容。

6、[moffee](https://github.com/BMPixel/moffee)

![](https://cdn.beekka.com/blogimg/asset/202408/bg2024080901.webp)

一个命令行工具，使用 Markdown 格式制作和展示幻灯片。

7、[Google Backup](https://github.com/WeeJeWel/node-google-backup)

开源命令行工具，用来备份谷歌邮件、通讯录和日历。

8、[lcl.host](https://github.com/anchordotdev/cli)

![](https://cdn.beekka.com/blogimg/asset/202405/bg2024051105.webp)

一个为本地开发环境 localhost 提供 https 证书的工具。

9、[Interactive Git Log](https://marketplace.visualstudio.com/items?itemName=interactive-smartlog.interactive-smartlog)

![](https://cdn.beekka.com/blogimg/asset/202405/bg2024051106.webp)

一个 VS Code 的插件，为 Git 提交日志提供一个可交互的图形界面。

10、[Makeext](https://github.com/mitjafelicijan/makext)

构建工具 Make 的一个扩展，让`make`命令可以输出项目的帮助信息。

## 资源

1、[Sound Box](https://soundbox.fun)

![](https://cdn.beekka.com/blogimg/asset/202411/bg2024111701.webp)

一个在线音效网站，提供多种自然环境音效以及白噪音。（[@wincatcher](https://github.com/ruanyf/weekly/issues/5554) 投稿）

2、[I Don't Have Spotify](https://idonthavespotify.donado.co/)

![](https://cdn.beekka.com/blogimg/asset/202411/bg2024111403.webp)

你输入 Spotify 的音乐链接，这个网站就会查找替代音源（比如 Youtube）。

3、[DuckDuckGo AI Chat](https://duckduckgo.com/?q=DuckDuckGo+AI+Chat&ia=chat&duckai=1)

![](https://cdn.beekka.com/blogimg/asset/202411/bg2024111406.webp)

DuckDuckGo 最近推出的免费 AI 聊天。

4、[The Copenhagen Book](https://thecopenhagenbook.com/)

![](https://cdn.beekka.com/blogimg/asset/202410/bg2024101102.webp)

一组短文，介绍 Web 应用相关的用户认证知识。跟充满术语的加密学文章不一样，这组文章简明好懂。

## 图片

1、[祖父的小提琴](https://www.zachklein.com/the-violin/)

前些日子，一位纽约程序员偶然得到了1912年拍摄的他祖父（下图拉小提琴者）的老照片。

![](https://cdn.beekka.com/blogimg/asset/202411/bg2024111704.webp)

他用 AI 模型为老照片上色。

![](https://cdn.beekka.com/blogimg/asset/202411/bg2024111705.webp)

他突然意识到，自己小时候见过照片里面的小提琴。

祖母去世时，家里人把祖母的东西都存放在阁楼。在他印象中，里面就包括一把小提琴。

他就跟妻子一起，回到老房子的阁楼找找看。

![](https://cdn.beekka.com/blogimg/asset/202411/bg2024111706.webp)

小提琴居然还在。

![](https://cdn.beekka.com/blogimg/asset/202411/bg2024111707.webp)

![](https://cdn.beekka.com/blogimg/asset/202411/bg2024111709.webp)

他请人修复了这把小提琴，把它交给自己的女儿。

![](https://cdn.beekka.com/blogimg/asset/202411/bg2024111708.webp)

他写道：看着女儿拿着100多年前她曾祖父的琴，不禁让人有一种时间穿越的感觉。

## 文摘 

1、[燃烧 NeXT](https://simson.net/ref/1993/cubefire.html)

1990年，乔布斯决定推出新型号的 NeXT 电脑，外壳要用镁合金制作。

镁是一种相对昂贵的金属，非常坚固且重量轻。乔布斯认为，这样的外壳不仅美观，而且可以节省搬运和制造成本。

我当时是一名报道计算机行业的记者，但以前学的是化学。我对这个决定很感兴趣，我知道镁燃烧时会发出明亮的白色火焰，我不禁好奇地想，如果 NeXT 烧起来会是怎样。
 
1991年秋天，我采访了 NeXT 的硬件副总裁。采访结束后，我提出，能不能送给我一个 NeXT 的外壳，让我烧烧看。他笑着同意了。

第二天，我开车去工厂，拿到了电脑外壳。

我很快就发现了问题：镁合金需要高温才能点燃，普通火焰点不燃，但是我无法制造这样的高温。于是，我无可奈何，只能把电脑外壳寄放在朋友家里。

一年后，朋友告诉我，她厌倦了保留这个玩意。而且，NeXT 已经决定停产这个型号，于是我开始认真考虑怎么烧掉它了。我想，它燃烧的照片正好配合停产新闻，作为杂志封面。

设计燃烧方案时，我考虑到，镁燃烧时会发出明亮的白色火焰和大量的白烟，虽然烟雾无毒，但可能引起警察或消防部门的注意。于是，我给消防部门打电话，询问有没有燃烧许可证。但是，他们不清楚这些事情，没人烧过这么多的镁。我还被告知，必须获得空气污染的许可证。
 
最后，我沮丧地决定执行原来的计划：开车去沙漠深处，然后把它烧掉。

但是最后一刻，我想到了加州的劳伦斯·利弗莫尔实验室，这是一个隶属于能源部、由加州大学伯克利分校管理的实验室。很多武器在那里实验，我确信那里肯定有燃烧几公斤镁的设施，而且也有必要的许可证。

我打电话给他们，他们同意了借给我照明弹的实验室。这让我的摄影师特别高兴，因为室内燃烧更容易拍出好的效果，阳光直射下几乎不可能看到火焰。

正式燃烧的前一天，我又找了一台旧的 NeXT 电脑作为备用。
 
到了正式燃烧时，我们用气焊枪点燃了它。气焊枪的蓝色火焰，接触到了电脑外壳，半分钟后，它开始发出独特的橙色光芒，然后慢慢融化。突然间，一道耀眼的白光闪过，然后是稳定的白色火焰。

我知道镁燃烧得很明亮，但我不知道有多快。我想至少会持续一分钟，但事实证明，镁的燃烧速度非常缓慢。当火焰最终熄灭时，剩下的只是一些块状的奶白色灰烬——氧化镁。

下面我们那一天拍到的照片。

![](https://cdn.beekka.com/blogimg/asset/202311/bg2023111302.webp)

![](https://cdn.beekka.com/blogimg/asset/202311/bg2023111303.webp)

![](https://cdn.beekka.com/blogimg/asset/202311/bg2023111301.webp)

## 言论

1、

我不戴手表。原因很简单，因为现在是最重要的时刻。我不追求做更多的事，而是追求把当前的事做得更好。

-- [黄仁勋](https://finance.sina.cn/7x24/2024-11-11/detail-incvsyyv2239441.d.html)，Nvidia 的 CEO，解释为什么不戴手表

2、

15年前，一位巴西营养学家发现，尽管巴西家庭对糖和油的消费减少，但肥胖率却在上升。为什么人们吃得更健康，却变胖了？

他认为，这是因为精细加工食品的出现，促进了人们对食品的消化。他因此创造了“超加工食品”（ultra-processed foods）这个词。

从此，这成了科学界的共识：想要健康，应该吃一些粗粮，避免多吃精细加工的食品。

-- [《关于超加工食品的风险》](https://www.ft.com/content/0b9ad138-1867-439f-96a5-7986d5aa66ae)

3、

AI 研究已经70年了，人们最近才发现，让 AI 成功的真正方法是大量的计算。

根本原因就是摩尔定律，它使得计算成本持续呈指数式下降。

-- [《马斯克的梦想和 AI 的教训》](https://stratechery.com/2024/elon-dreams-and-bitter-lessons/)

4、

我遇到一个程序员，他完全不想使用 AI。因为他用过一次，发现错误很多，就不想再用了，也不想了解。

这件事令我很困惑。我理解 AI 被过度炒作了，可能对你正在做的事情没有用处。我不理解的是，在2024年，你怎么可能成为一名程序员，却对一项据说会从根本上改变我们未来编程方式的技术一点也不好奇。

-- [《他们都使用它》](https://registerspill.thorstenball.com/p/they-all-use-it)

## 往年回顾

[网络社区的悲剧](https://www.ruanyifeng.com/blog/2023/11/weekly-issue-279.html)（2023 #279）

[手机充电问题的解决](https://www.ruanyifeng.com/blog/2022/11/weekly-issue-229.html)（2022 #229）

[AR 技术的打开方式](https://www.ruanyifeng.com/blog/2021/10/weekly-issue-179.html)（2021 #179）

[创业的凸函数和凹函数](https://www.ruanyifeng.com/blog/2020/10/weekly-issue-129.html)（2020 #129）

（完）

