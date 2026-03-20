# 科技爱好者周刊（第 389 期）：未来如何招聘程序员

这里记录每周值得分享的科技内容，周五发布。

本杂志[开源](https://github.com/ruanyf/weekly)，欢迎[投稿](https://github.com/ruanyf/weekly/issues)。另有[《谁在招人》](https://github.com/ruanyf/weekly/issues/9088)服务，发布程序员招聘信息。合作请[邮件联系](mailto:yifeng.ruan@gmail.com)（yifeng.ruan@gmail.com）。

## 封面图

![](https://cdn.beekka.com/blogimg/asset/202602/bg2026022807.webp)

唐山河头老街景区的轨道车“大唐云车”。（[via](https://view.inews.qq.com/k/20260204A01P0P00)）

## 未来如何招聘程序员

前些天，讨论区有一个[帖子](https://github.com/ruanyf/weekly/issues/9238)，提出一个问题。

如果未来的代码都是 AI 写的，那么我们[怎么招聘程序员](https://github.com/vorojar/ai-native-hiring-guide)呢？

![](https://cdn.beekka.com/blogimg/asset/202603/bg2026031406.webp)

程序员负责代码，但代码是 AI 写的，不是程序员写的，那么应该怎么面试他呢？

你仔细想想，这个问题比预想的难多了。

**首先，考察他的代码能力不重要（代码不是他写的），更重要的是考察他会不会 AI**。只要善于使用 AI，能够产出合格的代码，对公司来说就是合格的人选。

但是，什么样的面试问题，能够考察出一个人是否掌握 AI？下面是我想出的一些问题：

- 请将一个复杂的项目需求，转化成提示词，要求是清晰、逻辑性强、切中要害。
- 描述一个你认为需要使用 Skill 和 MCP 的场景，并阐述它们的工作原理和构建方法。
- 如何将一个大项目分解，设计出一个多 Agent 协同工作的机制。
- ……

这些问题能识别出 AI 编程高手吗？我完全没有把握。

**其次，除了 AI，还要考察什么呢？** 这也很不好想。

我应该还会问一些架构问题，你可以不写代码，但要懂怎么组织代码，架构出一个系统。但我也不确定这是必需的，因为 AI 生成的大型系统迟早变成一个黑箱，可能对于架构知识的要求也不是很高。

**另外，我还要看看他以前的项目**，如果以前他用 AI 做过类似的东西，那么应该问题不大。但这也不可靠，且不说完全类似的项目非常少，就看 AI 进化速度这么快，两年前的经验早不适用了吧。

总之我发现，很难确定什么面试问题是一定有效的，能够可信地筛选出合格的应聘者。AI 颠覆了软件开发，也连带颠覆了程序员面试。大家有好的面试问题吗？

有一点是确定的，**面试各种编程细节意义不大了**，因为你不需要记住语法细节了，直接问大模型就行。

## 科技动态

1、[访达小子](https://basicappleguy.com/basicappleblog/lil-finder-guy)

苹果公司最近发布了 Macbook Neo，有人注意到，官方的 Tiktok 宣传海报里面出现了一个全新的吉祥物（下图）。

![](https://cdn.beekka.com/blogimg/asset/202603/bg2026031208.webp)

上面海报的左上角有一个玩偶，以前没见过。

这个玩偶明显来自 Mac 电脑的访达工具（Finder），所以被称为“访达小子”（Lil Finder Guy）。

![](https://cdn.beekka.com/blogimg/asset/202603/bg2026031209.webp)

几天后，苹果公司又在一场直播里面，使用了这个形象。

![](https://cdn.beekka.com/blogimg/asset/202603/bg2026031210.webp)

人们纷纷猜测，这到底是偶然的行为，还是苹果公司真的会推出它作为吉祥物？

热心的网友让 AI 绘制了“访达小子”的完整形象。

![](https://cdn.beekka.com/blogimg/asset/202603/bg2026031211.webp)

![](https://cdn.beekka.com/blogimg/asset/202603/bg2026031212.webp)

看上去很可爱，就跟 Labubu 似的，有可能大受欢迎。

2、[红外线编码](https://www.unsw.edu.au/newsroom/news/2026/03/New-negative-light-technology-hides-data-transfers-in-plain-sight)

英国科学家发明了一种新的通信方式，通过热辐射二极管，将数字信号以热量形式传递。

![](https://cdn.beekka.com/blogimg/asset/202603/bg2026031401.webp)

肉眼看不见这种信号（因为它是红外线），也检测不到无线电波，但是它的热量以编码方式散发，在红外线热成像仪上能识别（上图）。

因此，这种方法接收信号需要热成像仪，再传入电脑的解码器。这可能对某些工业和军事场景很有用。

3、[机柜种植](https://sa.lj.am/rack-mount-hydroponics/)

家里有多余的服务器机柜，怎么利用起来？

![](https://cdn.beekka.com/blogimg/asset/202603/bg2026031504.webp)

一个国外程序员想到机柜里面有电源，拉线和搁板都很方便，可以用来水培种植。

![](https://cdn.beekka.com/blogimg/asset/202603/bg2026031505.webp)

他买了一些 LED 灯带，用来模拟日照，每一层还安装了一个泵，用来自动进排水。

![](https://cdn.beekka.com/blogimg/asset/202603/bg2026031506.webp)

如果你想在家里种一些暖房植物，或者需要长时间光照的植物，服务器机柜确实是一个很好的方案。

![](https://cdn.beekka.com/blogimg/asset/202603/bg2026031507.webp)

## 文章

1、[我放弃了 Elasticsearch，转而使用 Meil​​isearch](https://www.anisafifi.com/en/blog/i-ditched-elasticsearch-for-meilisearch-heres-what-nobody-tells-you/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202603/bg2026031303.webp)

[Meil​​isearch](https://github.com/meilisearch/meilisearch) 是一种开源的搜索软件，作者介绍怎么用它替代 Elasticsearch。

2、[2016 年，我做过一次 AI 写代码创业](https://blog.youxu.info/2026/01/14/ai-codes-retrospective/)（中文）

![](https://cdn.beekka.com/blogimg/asset/202603/bg2026031918.webp)

作者徐宥（Eric Xu）回忆他在2016年的 AI 创业，当时他想训练一个大模型，需要25万美元，但是找不到投资人。（[@gengxiuli](https://github.com/ruanyf/weekly/issues/9296) 投稿）

3、[信息过载时代，我的漏斗式阅读工作流](https://shawnxie.top/blogs/tools/read-flow-2026.html)（中文）

![](https://cdn.beekka.com/blogimg/asset/202603/bg2026031914.webp)

每天有太多东西值得看，作者介绍他的信息处理工作流，通过 AI 过滤出值得读的内容。（[@shawnxie94](https://github.com/ruanyf/weekly/issues/9282) 投稿）

4、[编译器的前端与后端](https://medium.com/packt-hub/the-world-of-compiler-backends-9b27a3e37866)（英文）

![](https://cdn.beekka.com/blogimg/asset/202505/bg2025050118.webp)

一篇科普文章，介绍编译器（比如 LLVM）的前端和后端的概念。

5、[CSS 的 lh 单位](https://webkit.org/blog/16831/line-height-units/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202505/bg2025050125.webp)

CSS 有一个字体大小属性`lh`，表示行高。

6、[寻觅杜鹃花之王](https://blog.sciencenet.cn/home.php?mod=space&uid=52727&do=blog&id=1525508)（中文）

![](https://cdn.beekka.com/blogimg/asset/202603/bg2026031302.webp)

大树杜鹃是最高大的杜鹃，是一颗会开花的大树（上图），1919年由英国人在云南发现。

后来，这个英国人死在云南，就无人知道哪里有这种杜鹃了，直到1982年才重新在高黎贡山找到。本文讲述这种植物的故事。

## 工具

1、[APTUI](https://github.com/mexirica/aptui)

![](https://cdn.beekka.com/blogimg/asset/202603/bg2026031301.webp)

一个 Linux 的终端应用，用于充当 Debian/Ubuntu 安装管理器，管理 APT 软件包。

2、[my.WordPress.net](https://my.wordpress.net/)

![](https://cdn.beekka.com/blogimg/asset/202603/bg2026031502.webp)

如果你想尝试 WordPress，但没有服务器，可以使用官方新推出的这个服务，打开上面网址就可以了。

它把所有 PHP 脚本编译成 JS，在本地运行，不需要服务器，而且数据都在你的浏览器，下次打开这个网址，网站数据还在，参见[介绍文章](https://wordpress.org/news/2026/03/announcing-my-wordpress/)。

3、[GrobPaint](https://github.com/groverburger/grobpaint)

![](https://cdn.beekka.com/blogimg/asset/202603/bg2026031503.webp)

一个跨平台的图像编辑器，特点就是非常轻量级，可以在浏览器运行，也可以编译成二进制文件。

4、[Apple Matting](https://matting.lingxiangtools.top)

![](https://cdn.beekka.com/blogimg/asset/202603/bg2026031407.webp)

一个 Mac 抠图软件，大小只有 8MB。（[@pangxiaobin](https://github.com/ruanyf/weekly/issues/9241) 投稿）

5、[HealthTick](https://github.com/lifedever/health-tick-release)

![](https://cdn.beekka.com/blogimg/asset/202603/bg2026031409.webp)

macOS 菜单栏久坐提醒工具。（[@lifedever](https://github.com/ruanyf/weekly/issues/9242) 投稿）

6、[CheatReader](https://github.com/yaoyao2mm/cheatreader)

![](https://cdn.beekka.com/blogimg/asset/202603/bg2026031501.webp)

一个跨平台的阅读软件，可以悬浮在桌面上，支持单行模式，适合想在工作流里“偷偷读书”的人。（[@yaoyao2mm](https://github.com/ruanyf/weekly/issues/9247) 投稿）

7、[锤子便签](https://github.com/zhaoolee/notes)

![](https://cdn.beekka.com/blogimg/asset/202603/bg2026031702.webp)

开源的网页版锤子便签，可以作为 Skill 调用。（[@zhaoolee](https://github.com/ruanyf/weekly/issues/9274) 投稿）

8、[WeChat Download API](https://github.com/tmwgsicp/wechat-download-api)

![](https://cdn.beekka.com/blogimg/asset/202603/bg2026031917.webp)

开源的微信公众号转 RSS 工具。（[@tmwgsicp](https://github.com/ruanyf/weekly/issues/9295) 投稿）

9、[Speech Speed](https://github.com/ywong137/speech-speed)

一个很有意思的 Chrome 插件，根据语速调节视频播放速度。如果剧中人说话慢，视频就快速播放，说话快，就慢速播放。

## AI 相关

1、[VibeGo](https://github.com/xxnuo/VibeGo)

![](https://cdn.beekka.com/blogimg/asset/202603/bg2026031913.webp)

Vibe Coding 的开源 Web IDE，支持 Claude Code、Gemini CLI、CodeX、OpenCode 等。（[@xxnuo](https://github.com/ruanyf/weekly/issues/9281) 投稿）

2、[Mimic Them](https://github.com/zhanchey/MimicThem)

一个开源应用，使用字节 seedream 图像模型，复刻小红书的图文笔记，从一篇可以衍生出另一篇。（[@zhanchey](https://github.com/ruanyf/weekly/issues/9215) 投稿）

3、[AICheck](https://github.com/MatrixA/aicheck)

![](https://cdn.beekka.com/blogimg/asset/202603/bg2026031305.webp)

一个 Rust 语言编写的命令行工具，离线检测图片、视频、音频和文档是否由 AI 生成。（[@MatrixA](https://github.com/ruanyf/weekly/issues/9219) 投稿）

4、[AionUi](https://github.com/iOfficeAI/AionUi)

![](https://cdn.beekka.com/blogimg/asset/202603/bg2026031405.webp)

开源的 Cowork 与 OpenClaw 的替代品，自动化各种电脑操作。（[@cdxiaodong](https://github.com/ruanyf/weekly/issues/9236) 投稿）

5、[Lumo](https://github.com/zhnd/lumo)

![](https://cdn.beekka.com/blogimg/asset/202603/bg2026031408.webp)

一个 Claude Code 的本地桌面工作台，查看成本、Token、会话和编码时段数据。（[@zhnd](https://github.com/ruanyf/weekly/issues/9239) 投稿）

6、[AIComicBuilder](https://github.com/twwch/AIComicBuilder)

![](https://cdn.beekka.com/blogimg/asset/202603/bg2026031704.webp)

开源的 AI 动漫视频生成系统，只需输入文字剧本，即可自动完成角色提取、分镜设计、关键帧生成、视频合成的全流程。（[@twwch](https://github.com/ruanyf/weekly/issues/9275) 投稿）

## 资源

1、[canirun.ai](https://www.canirun.ai/)

![](https://cdn.beekka.com/blogimg/asset/202603/bg2026031402.webp)

网页检测你的机器，能够运行哪些本地的 AI 模型。

2、[AI 是怎么回事](https://wmyskxz.cn/wiki/whats_ai/)（中文）

![](https://cdn.beekka.com/blogimg/asset/202603/bg2026031304.webp)

面向普通读者的通俗 AI 原理教程。（[@wmyskxz](https://github.com/ruanyf/weekly/issues/9218) 投稿）

3、[TypeScript 数据结构与算法](https://amoilanen.github.io/Algorithms-with-Typescript/preface.html)（Algorithms with TypeScript）

![](https://cdn.beekka.com/blogimg/asset/202603/bg2026031403.webp)

免费阅读的英文电子书，使用 TypeScript 语言介绍数据结构和算法。

4、[频道冲浪者](https://channelsurfer.tv)（Channel Surfer）

![](https://cdn.beekka.com/blogimg/asset/202603/bg2026031404.webp)

这个网页把 Youtube 改成传统的电视频道，每个频道都有节目表，可以切换频道。如果你不知道用 Youtube 看什么，就可以看这个网站。

## 图片

1、[巧妙的古建筑](https://rarehistoricalphotos.com/engineering-methods-from-the-past/)

因为缺乏机械和动力，古代建筑物往往包含了很多巧思。

（1）19世纪的英国麦克尔斯菲尔德运河，由于没有水位落差，需要马拉着船前进。

有时，马的牵引道从河的一边转到了另一边，马这时就需要过河。

为了不解开牵引绳，马就能过河，工程师就设计了“蛇桥”，马可以直接走上去，中间还有让牵引绳通过的孔。

![](https://cdn.beekka.com/blogimg/asset/202512/bg2025120205.webp)

（2）法国南部的巴尔贝加尔水磨坊，建于公元2世纪，现在只剩下了遗址。

这个磨坊的位置在山坡上，连续建了16个相互连接的水车，充分利用了水能，每天能够生产25吨面粉，被认为是欧洲第一个大规模工业生产的磨坊。

![](https://cdn.beekka.com/blogimg/asset/202512/bg2025120206.webp)

（3）伊朗纳什提凡的古代风车，建在连片的屋顶上，一根木轴安装了由粘土、稻草和木材做成的立轴式风帆，强风会带动木轴，转动下面屋子里的磨盘，来磨碎谷物。

![](https://cdn.beekka.com/blogimg/asset/202512/bg2025120208.webp)

![](https://cdn.beekka.com/blogimg/asset/202512/bg2025120207.webp)

（4）中国西安的秦代上林苑遗址，发现了战国时期的陶瓷水管，现保存于西安博物院。

![](https://cdn.beekka.com/blogimg/asset/202512/bg2025120209.webp)

## 文摘

1、[避免使用定制框架](https://laike9m.com/blog/avoid-mini-frameworks,171/)

很多小团队在工作中，往往会发明自己的“定制框架”。

他们原来使用的是通用框架，但有不满意之处，于是决定在通用框架基础上定制自己的框架。

这种“定制框架”有一些共同特点：

> （1）由小团队创建，旨在解决他们的痛点；
> 
> （2）底层是其他更通用的技术栈或框架；
>
> （3）引入原有技术栈不存在的新概念和术语；
>
> （4）创建者声称这个定制框架“神奇地”解决了许多问题，并推广更多人使用它。

我的个人经验是，“定制框架”非常难用，引入了许多新概念，意图掩盖它带来的更多复杂性。

我建议，大家避免使用“定制框架”，原因有下面这些：

（1）定制框架常常声称，它们能消除或隐藏原始框架“不必要的复杂性”，但实际上做不到。即使定制框架能很好地处理80%的用例，但是因为引入了新的语法，剩余20%的用例就不如原始框架的灵活性和功能性。

（2）定制框架不易改动。它仅对开发团队的用例建模，以解决他们的特定问题，未来需求变化时，往往跟不上。另外，定制框架通常改动了原始框架的实现细节，而原始框架将来随时可能变动，你修改的细节越多，就越难跟上原始框架的变动。

（3）定制框架反映了开发团队的心理模型，这些团队专注于自己的问题，往往有很强的个人意见。这本身是好事，但也使得定制框架不适合其他人的心理模型。

（4）定制框架往往导致技术栈碎片化。你改动的只是跟你相关的一部分，其他部分保持不变。随着新的层不断增加，框架变得越来越难整体迁移，必须不断改动你原来没改的部分。

（5）定制框架缺乏维护。通用技术往往有一个专门团队或公司来维护，但定制框架通常由一两个创建者拥有。一旦他们离开团队或公司，就很难找到接班人。定制框架很大可能会随着原作者离开而消失，除非在此之前获得了大量采用，才有人愿意接手，而这种情况很少发生。

我不是说，你不要开发自己的框架，而是建议最好遵循三个原则：（1）新概念引入越少越好，（2）优先创建库，而不是框架。（3）不要做现有框架的包装器，而要从零开始构建。

## 言论

1、

我想要的网络世界，是一个万物皆可塑的世界，让你不由自主地成为创造者。

-- [David Miranda](https://plumbing-of-everyday-magic.hyperclay.com/)

2、

AI 让软件的成本从代码转移到测试和文档，一套好的测试套件的价值可能比编写代码本身更高。

-- [lucumr.pocoo.org](https://lucumr.pocoo.org/2026/1/14/minijinja-go-port/)

3、

编程的核心在于抽象，即用一种远离底层技术的高级思维方式来思考代码。

-- [《生活在“平面国”的程序员》](https://blog.redplanetlabs.com/2025/11/24/the-programmers-who-live-in-flatland/)

4、

领导力就是让别人去做你想让他们做的事，而且是心甘情愿的。

-- [艾森豪威尔](https://hebfdn.org/portfolio/eisenhower-on-leadership/)，美国前总统

## 往年回顾

[面试的 AI 作弊----用数字人去面试](https://www.ruanyifeng.com/blog/2025/03/weekly-issue-342.html)（＃342）

[所有代码都是技术债](https://www.ruanyifeng.com/blog/2024/03/weekly-issue-292.html)（#292）

[一次尴尬的服务器被黑](https://www.ruanyifeng.com/blog/2023/02/weekly-issue-242.html)（#242）

[最大的机会来自新技术](https://www.ruanyifeng.com/blog/2022/01/weekly-issue-192.html)（#192）

（完）


