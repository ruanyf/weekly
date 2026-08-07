# 科技爱好者周刊（第 407 期）：国家为什么需要开源软件？

这里记录每周值得分享的科技内容，周五发布。

本杂志[开源](https://github.com/ruanyf/weekly)，欢迎[投稿](https://github.com/ruanyf/weekly/issues)。另有[《谁在招人》](https://github.com/ruanyf/weekly/issues/10950)服务，发布程序员招聘信息。合作请[邮件联系](mailto:yifeng.ruan@gmail.com)（yifeng.ruan@gmail.com）。

## 封面图

![](https://cdn.beekka.com/blogimg/asset/202608/bg2026080619.webp)

上海浦江郊野公园的溪边咖啡馆。（[via](https://www.sina.cn/news/detail/5318533224597806.html)）

## 国家为什么需要开源软件？

上个月，大模型 Kimi K3 发布。大家可能不知道，它在美国引起的反响，比中国大。

它的性能略逊于美国的顶尖模型，但是它是开源的，任何人都可以自己架设。这对大公司非常有吸引力。

美国目前的经济增长，全靠巨额的 AI 投资，其他行业其实不怎么增长。一旦大量企业选择自己架设开源模型（几乎肯定如此），现有的巨额投资有收不回来的风险。

美国政府就坐不住了，[出来放话](https://xcancel.com/mkratsios47/status/2079933645888880708)，中国模型有“违规”行为，考虑要限制开源模型。

此言一出，就引起了恐慌，历史上还从来没有一个国家封锁开源项目。

两天以后，美国许多互联网公司联合起来，发表了[一封公开信](https://www.microsoft.com/en-us/corporate-responsibility/topics/open-weight/)，标题为《开放权重模型和美国 AI 领导力》。

![](https://cdn.beekka.com/blogimg/asset/202608/bg2026080409.webp)

公开信呼吁不要限制中国的开源模型，微软、英伟达、思科、Cloudflare 等行业著名公司都签字了。

我觉得，此信写得极好，推荐大家去读。

它的核心观点就是，**开源项目对美国有利**，应该允许它存在。关键句子如下。

> 评判我们人工智能领域的领导地位，并非取决于某一种前沿人工智能模型，而是取决于美国能否构建一个强大、开放的生态系统，并将其渗透到各个领域。
> 
> 这对于在全国范围内创造创新和繁荣的机遇至关重要。这需要扩大人工智能的普及范围，鼓励竞争，构建强大的应用层，并赋予美国民众对其所依赖的技术更大的控制权。
> 
> 开放权重模型——任何人都可以下载、检查、修改并在自己的基础设施上运行的人工智能模型——是这一基础的重要组成部分，因为它们使先进的人工智能更易于获取、更灵活、更广泛地应用。

这段话的意思是，美国要保持领先，需要有一个开放的生态，而**构建开放生态的最佳方法，就是鼓励开源**。

归根结底，不是国家需要开源，而是国家需要创新和竞争，开源可以促使这些发生。**如果限制开源模型，最终结果就是人工智能由少数几家大公司控制**，大众无法参与，创新和竞争就无从谈起。人工智能太重要，不能听任这项技术落入少数人手中。

虽然这封信的目的是维护美国的国家利益，但是它讲的道理是普遍适用的。放在中国也是如此，这就是为什么我们国家应该大力推动开源项目。

中国最大的竞争优势是什么？就是14亿人口。我们要发挥人力资源的优势，让尽可能多的人参与到科教兴国，形成一个巨大的生态。开源软件是最好、最简单可行的发展途径之一。

说实话，如果美国政府真的封锁中国的开源模型，不一定是坏事。它不仅作茧自缚，而且还能推动中国的开源模型。

## 你可以专注多久？

有一种说法，人的注意力是一种宝贵资源。

你只要拥有别人的注意力，就拥有了受众，拥有了流量，从而拥有了市场。

每个人的注意力（也就是时间）是有限的，属于不可再生资源，所有公司都在争夺。

另一方面，注意力跟你的生产力有关。当你保持专注的时候，就是你生产力最高的时候。保持专注越久，越容易做出成果。

那么，**一个人有多少注意力呢？** 换句话说，你专注于一件事件，可以保持多久不分心？

美国加州大学尔湾分校做过[一项调查](https://moai.studio/blog/posts/they-stole-your-attention.html)，让人们长时间盯着电脑屏幕，记录他们每次切换屏幕的时间间隔。

这个调查持续做了20年，结果发现**人们保持专注的时间越来越短**。

> - 2004年：150秒
> - 2012年：75秒
> - 2016年：47秒
> - 2025年：47秒

![](https://cdn.beekka.com/blogimg/asset/202608/bg2026080404.webp)

这个结果是可以想象的，争夺注意力的渠道正变得越来越多，短视频、游戏、体育比赛、演唱会……

你保持专注的时间必然越来越短。这意味着，你能够专心致志学习或工作越来越困难。

人的思维平均47秒就要断一次，这么短的时间能取得多少进展？

一旦断了，重新恢复就难了。这项调查还有一项数据，回到专注的状态，平均需要25分26秒。

![](https://cdn.beekka.com/blogimg/asset/202608/bg2026080405.webp)

这件事的启示就是，当你专心致志投入一件事的时候（英语叫做心流状态 flow），一定要珍惜，尽量不要分心，保持越久越好。毕竟你每次专注的时间平均只有47秒，而且一天中你能够进入专注状态、保持高效的次数，可能最多只有五六次。

## 科技动态

1、[三面拉链](https://www.yankodesign.com/2026/05/31/a-zipper-patent-sat-in-a-garage-for-40-years-now-its-real/)

我们平时看到的拉链，都是两个面咬合。一个美国工程师在1985年发明了三面咬合的拉链。

他申请了一个专利，可惜当年没得到利用，一直锁在抽屉里。

![](https://cdn.beekka.com/blogimg/asset/202607/bg2026073007.webp)

直到今年，麻省理工学院的研究人员在 3D 打印的帮助下，重新审视这种拉链的作用。

这种拉链有三条棱，不仅可以咬合三个平面，还能起到承重的作用。

![](https://cdn.beekka.com/blogimg/asset/202607/bg2026073008.webp)

而且，它的形状高度可控，可以是直线，也可以是弧线、弹簧式曲线或扭合在一起的曲线。

![](https://cdn.beekka.com/blogimg/asset/202607/bg2026073009.webp)

所以，它的用途非常广，可以将多个平面连接在一起，还能起到支撑的作用。

![](https://cdn.beekka.com/blogimg/asset/202607/bg2026073010.webp)

同时，它的强度更高。当你同时需要刚性和柔性的时候，就可以用它。下面就是它替代金属，作为帐篷的支撑杠。

![](https://cdn.beekka.com/blogimg/asset/202607/bg2026073011.webp)

2、[红灯停表](http://finance.people.com.cn/n1/2026/0803/c1004-40772783.html)

美团和苏州公安联合上线了外卖骑手的“红灯停表”功能，已在苏州进行实际路测。

![](https://cdn.beekka.com/blogimg/asset/202608/bg2026080307.webp)

外卖骑手等红灯的时间，将额外累加到配送时间中。

这是为了减轻骑手的时间压力，让他们不要闯红灯。不过，该功能需要交管部门提供准确的实时红灯数据。

3、[网球鞋](https://www.designboom.com/design/slice-discarded-tennis-balls-wearable-shoes-soroosh-riazi-isfahani/)

网球的消耗率非常高，每年全世界产量有4亿个。而且它是橡胶做的，回收处理很困难。

一个英国设计师提出，可以将废弃的网球做成鞋子。

![](https://cdn.beekka.com/blogimg/asset/202608/bg2026080613.webp)

他先将网球切割成条状。

![](https://cdn.beekka.com/blogimg/asset/202608/bg2026080614.webp)

然后，再跟天然橡胶混合做成鞋底，最后组装成贴合脚型的鞋子。

![](https://cdn.beekka.com/blogimg/asset/202608/bg2026080615.webp)

这目前是实验项目，估计很难投入实际生产。因为大规模生产需要切割和分拣系统，价格未必很便宜，而且用户能否接受这种毛毡+橡胶的鞋子也是疑问。

![](https://cdn.beekka.com/blogimg/asset/202608/bg2026080616.webp)

4、[鸟类更害怕女性](https://nautil.us/birds-are-more-afraid-of-women-than-of-men-1280333?giftLink=ee36fe032c111e0fbf30fc9d314c006c&user_id=66c4c9305d78644b3ac5df9c)

一个欧洲团队进行了一项奇怪的研究：人类离鸟儿多远，鸟会受惊起飞。
这称为“起飞距离”。

![](https://cdn.beekka.com/blogimg/asset/202605/bg2026050401.webp)

他们尽量找头发长度、体型、身高都相似的人，以相同的步态走近鸟群，结果发现女性在更远的距离就能惊起鸟群。

这就是说，比起男性，鸟类更怕女性。团队无法解释这个结果，提出了各种假说。

最好玩的一种假说是，在进化过程中，男性可能负责捕猎体型大的猎物，女性负责捕猎鸟类等体型较小的猎物。所以，鸟类逐渐进化成更害怕女性。

## 文章

1、[Chrome 浏览器支持 ARM64 Linux 了](https://www.omgubuntu.co.uk/2026/07/chrome-arm64-linux-available)（英文）

![](https://cdn.beekka.com/blogimg/asset/202608/bg2026080618.webp)

以前，谷歌官方只提供 Chrome 浏览器的 x86 版本，本周终于提供 ARM64 Linux 版本下载了。

以后，ARM64 架构的 Linux 的流行度应该会超过 x86 Linux。

2、[深入剖析 AI Token 中继市场](https://vectoral.com/blog/token-relay-market)（英文）

![](https://cdn.beekka.com/blogimg/asset/202608/bg2026080301.webp)

国内现在有很多国外大模型的路由服务，它们的 API 价格比原始服务商还便宜。本文剖析这种服务的内幕。

3、[SwiftUI 七年之后：一个平庸的故事](https://ykvm.com/2026/07/swiftui-a-story-of-mediocrity/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202608/bg2026080602.webp)

SwiftUI 2019年诞生时轰动一时，被寄予厚望，大家以为它会成为所有苹果设备的跨平台 UI 的解决方案。然而，即使到了2026年，SwiftUI 依然像一个永无止境的测试版，本文分析它存在的几个问题。

作者还认为，除了代码，苹果的工作文化也是一个问题。“苹果公司从最初 Cocoa、Aqua 和自动布局时代那种一丝不苟的精益求精，转向如今‘足够好’的产品文化。”

4、[Coldcard 硬件钱包如何被破解](https://decrypt.co/374916/coldcard-bitcoin-exploit-explained-entropy-keys-bits)（英文）

![](https://cdn.beekka.com/blogimg/asset/202608/bg2026080617.webp)

加密货币的关键就是钱包，如果钱包的私钥被破解，就全完了。因此出现了不联网的硬件钱包，号称最安全。

上周，硬件钱包 Coldcard 被破解，有人根据钱包的公钥，算出了私钥，将里面的钱转走，损失超过1亿美元。本文告诉你这是怎么做到的。

5、[为什么坦克几乎不用 Windows？](https://mp.weixin.qq.com/s/Y9nx1HJL5KWXdOHc0ucyLA)（中文）

![](https://cdn.beekka.com/blogimg/asset/202608/bg2026080610.webp)

各国的主战坦克极少使用 Windows（包括嵌入版） 作为操作系统，这是为什么？（[@zuzuAndroid](https://github.com/ruanyf/weekly/issues/11041) 投稿）

6、[2026年如何自己托管邮件服务器](https://blog.haschek.at/2026/you-should-selfhost-your-mail.html)（英文）

![](https://cdn.beekka.com/blogimg/asset/202608/bg2026080303.webp)

一般来说，你不应该自己托管邮件服务器。但是万一你真的想托管，可以参考这篇文章里作者的做法。

## 工具

1、[Gander](https://github.com/mokshablr/gander)

![](https://cdn.beekka.com/blogimg/asset/202608/bg2026080606.webp)

开源的安卓应用，用来查看各种文件的内容，体积约 15MB，完全离线使用。

2、[StatLite](https://github.com/PVRLabs/statlite)

![](https://cdn.beekka.com/blogimg/asset/202608/bg2026080406.webp)

一个开源的 Spring Boot 应用的服务器仪表板，适合个人架设。

3、[presenterm](https://github.com/mfontanini/presenterm)

![](https://cdn.beekka.com/blogimg/asset/202503/bg2025030902.webp)

一个命令行程序，在终端播放 Markdown 文件的幻灯片。

4、[Reconya](https://github.com/Dyneteq/reconya)

![](https://cdn.beekka.com/blogimg/asset/202506/bg2025062703.webp)

一个需要自搭建的工具，通过 Web 界面，查看局域网内所有设备和可用端口，参考[介绍文章](https://www.xda-developers.com/i-used-this-self-hosted-tool-to-scan-my-network-and-you-wont-believe-what-i-found/)。

5、[Quickdraw](https://github.com/quickdrawjs/quickdraw)

![](https://cdn.beekka.com/blogimg/asset/202608/bg2026080501.webp)

无限画布白板 SDK，可以集成到 React、React Native 或纯 JS 应用中。（[@nmndwivedi](https://github.com/ruanyf/weekly/issues/10977) 投稿）

6、[魔尺](https://github.com/regomne/magic-snake)（Rubik's Snake）

![](https://cdn.beekka.com/blogimg/asset/202608/bg2026080608.webp)

一个开源的 3D 造型设计工具，在网页上设计 3D 魔尺，[在线体验](https://regomne.github.io/magic-snake)。（[@regomne](https://github.com/ruanyf/weekly/issues/11018) 投稿）

7、[LiteSnap](https://github.com/HuibingLin/LiteSnap)

![](https://cdn.beekka.com/blogimg/asset/202608/bg2026080609.webp)

开源的 Windows 截图工具。（[@HuibingLin](https://github.com/ruanyf/weekly/issues/11048) 投稿）

8、[水杉输入法](https://github.com/metasequoiaime/MetasequoiaImeTsf)

![](https://cdn.beekka.com/blogimg/asset/202608/bg2026080611.webp)

开源的 Windows 输入法。（[@fanlusky](https://github.com/ruanyf/weekly/issues/11040) 投稿）

9、[rime vim](https://github.com/TSalmon3/rime.vim)

![](https://cdn.beekka.com/blogimg/asset/202608/bg2026080612.webp)

Vim/Neovim 的一个插件，能够直接输入中文，不依赖系统的中文输入法，从而可以自动补全。（[@TSalmon3](https://github.com/ruanyf/weekly/issues/11053) 投稿）

10、[history4feed](https://github.com/muchdogesec/history4feed)

一个自动从 Feed 抓取全文的工具，需要自己搭建服务。它本身只提供 API，参见[教程](https://www.dogesec.com/blog/full_text_rss_atom_blog_feeds/)。

## AI 相关

1、[Codex Security](https://github.com/openai/codex-security)

OpenAI 官方推出的命令行工具，用来扫描代码漏洞，基于 Codex。

2、[Palmier Pro](https://github.com/palmier-io/palmier-pro)

![](https://cdn.beekka.com/blogimg/asset/202608/bg2026080408.webp)

开源的 AI 视频编辑器，基于提示词进行视频编辑。

## 资源

1、[欧元纸币设计竞赛](https://www.ecb.europa.eu/euro/banknotes/future_banknotes/html/all-design-proposals.en.html)

![](https://cdn.beekka.com/blogimg/asset/202608/bg2026080101.webp)

欧洲央行正在征集新的欧元纸币设计方案，这个网站展示了入围者的作品。你认识上面三个人吗？

2、[洛杉矶像素地图](https://sf.isopolis.city)

![](https://cdn.beekka.com/blogimg/asset/202608/bg2026080601.webp)

像游戏《模拟城市》一样的洛杉矶像素地图，标出了主要科技公司的位置。

3、[拉面馆](https://ramen.haus/japan/tokyo/classic-rekka-ramen/)

![](https://cdn.beekka.com/blogimg/asset/202608/bg2026080604.webp)

这个网站收集世界各地日本拉面的照片。

4、[宋飞正传](https://seinfeld.visualisingdata.com/)

![](https://cdn.beekka.com/blogimg/asset/202608/bg2026080603.webp)

美国著名肥皂剧《宋飞正传》的可视化网站。

## 图片

1、[巴黎的绿化](https://www.torched.la/the-best-seat-in-town/)

巴黎的公用设施，强调绿色理念，会想方设法添加自然和绿化元素。

比如，公交候车亭的柱子爬满了绿植。

![](https://cdn.beekka.com/blogimg/asset/202604/bg2026041808.webp)

候车亭的顶上也种了绿植。

![](https://cdn.beekka.com/blogimg/asset/202604/bg2026041809.webp)

路灯和书报亭也是这样。

![](https://cdn.beekka.com/blogimg/asset/202604/bg2026041810.webp)

![](https://cdn.beekka.com/blogimg/asset/202604/bg2026041811.webp)

说实话，这个想法很好，问题是这些地方不适合植物生长，要么枯萎了，要么长得像杂草一样，看上去反而让人尴尬。

## 文摘

1、[编程的三个时代](https://alexklos.ca/blog/how-do-we-stop-vibe-coding)

编程的发展，就是一个不断抽象的过程，可以分成三个时代。

第一个时代，从20世纪40年代末到70年代，是算法时代，诞生了高级语言和编译器，将机器的底层逻辑抽象化了。

第二个时代，从20世纪70年代到21世纪初，诞生了现代编程语言，将编程抽象化为面向对象。

第三个时代，大约从21世纪初一直到现在，是系统化时代，库、平台和 API 大发展，编程抽象化为面向各种组件和子系统的组合。

现在的 AI 编程并没有开启一个新的时代，方法论没变，AI 只是让第三个时代加速了。

## 言论

1、

你的首要原则是不要骗自己，因为你是最容易被自己骗的人。

-- 著名物理学家[理查德·费曼](https://louwrentius.com/i-think-you-might-be-fooling-yourself-with-ai.html)，1974年加州理工学院毕业典礼演讲

2、

我确信2026年将是最后一次人类独揽菲尔兹奖，下一批获奖者都将与 AI 合作撰写论文。

-- [Hacker News 读者](https://news.ycombinator.com/item?id=48906573)

3、

我把华硕路由器换成 Ubiquiti 路由器，哇，差别太大了！Ubiquiti 的用户界面/用户体验设计得非常人性化，让人感觉他们很乐于我来使用他们的产品，而不是指望我去查手册才能操作。

-- [《我的家庭实验室的全面改造》](https://timharek.no/blog/kaizen-4/)

4、

对于普通任务，使用功能最强大、价格最昂贵的 AI 模型，就好像开着兰博基尼去杂货店买牛奶。

-- [《华尔街日报》](https://www.wsj.com/business/china-us-ai-model-costs-53a12e96)

5、

现在只需几秒钟，AI 就能找到代码错误，或者读取整本使用手册。这些都节省了过去浪费在无意义学习、手工输入的大量时间。

与此同时，AI 也让我们失去了一些东西，就是那种你必须仔细阅读、理解每一行代码的投入。你有捷径可走，就不会下苦功专研了。

-- [《80年代的编程体验》](https://comuniq.xyz/post?t=1439)

## 往年回顾

[Dan Wang 的新书](https://www.ruanyifeng.com/blog/2025/08/weekly-issue-360.html)（#360）

[内容农场的 AI 赚钱术](https://www.ruanyifeng.com/blog/2024/07/weekly-issue-310.html)（#310）

[你的旅程不会停在 Day 1](https://www.ruanyifeng.com/blog/2023/06/weekly-issue-260.html)（#260）

[为什么软件变得复杂](https://www.ruanyifeng.com/blog/2022/06/weekly-issue-210.html)（#210）

（完）

