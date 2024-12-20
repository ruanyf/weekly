# 科技爱好者周刊（第 330 期）：李开复梳理人工智能

这里记录每周值得分享的科技内容，周五发布。

本杂志[开源](https://github.com/ruanyf/weekly)，欢迎[投稿](https://github.com/ruanyf/weekly/issues)。另有[《谁在招人》](https://github.com/ruanyf/weekly/issues/5610)服务，发布程序员招聘信息。合作请[邮件联系](mailto:yifeng.ruan@gmail.com)（yifeng.ruan@gmail.com）。

## 封面图

![](https://cdn.beekka.com/blogimg/asset/202412/bg2024121703.webp)

上个月正式开放的杭州良渚玉湖公园，公园的设计象征良渚文化和运河文化的连接。（[via](https://www.163.com/dy/article/JJI2MD7C0514ETGI.html)）

## 李开复梳理人工智能

前些日子，我读了李开复老师的两本书：《AI·未来》（浙江人民出版社，2018）和《AI·未来进行式》（浙江人民出版社，2022）。

![](https://cdn.beekka.com/blogimg/asset/202412/bg2024121701.webp)

![](https://cdn.beekka.com/blogimg/asset/202412/bg2024121702.webp)

这两本书都是面向社会大众解释 AI，不是技术类书籍，但是有一些段落，阐述 AI 概念。

李开复老师用通俗的语言来解释，人工智能、机器学习、神经网络、深度学习……**这些词到底是什么意思？彼此有什么关系？**

我觉得，这些介绍对理解 AI 的体系，挺有启发的。它们分散在各个章节，我将它们整理在一起。

为了行文连贯，我没有完全照搬原文，而是用自己的语言重新叙述，如果有错误，也归咎我。

**（1）人工智能**

1956年夏天，计算机科学家约翰·麦卡锡（John McCarthy）首次提出“人工智能”（AI）这个概念。

<u>人工智能指的是，通过软件和硬件，来完成通常需要人类智能才能完成的任务。</u>它的研究对象，就是在机器上模拟人类智能。

**（2）机器学习**

早期，人工智能研究分成两个阵营。

第一个阵营是规则式（rule-based）方法，又称专家系统（expert systems），指的是人类写好一系列逻辑规则，来教导计算机如何思考。

可想而知，对于复杂的、大规模的现实问题，很难写出完备的、明确的规则。所以，这种方法的进展一直很有限。

第二个阵营就是<u>机器学习（machine learning），指的是没有预置的规则，只是把材料提供给计算机，让机器通过自我学习，自己发现规则，给出结果。</u>

**（3）神经网络**

神经网络（neural network）是机器学习的一种主要形式。

<u>神经网络就是在机器上模拟人脑的结构，构建类似生物神经元的计算网络来处理信息。</u>

一个计算节点就是一个神经元，大量的计算节点组成网络，进行协同计算。

神经网络需要极大的算力，以及海量的训练材料。以前，这是难以做到的，所以20世纪70年代开始，就陷入了停滞，长期没有进展。

**（4）深度学习**

深度学习是神经网络的一种实现方法，在20世纪80年代由杰弗里·辛顿提出。它让神经网络研究重新复活。

<u>深度学习是一种让多层神经元可以进行有效计算的方法，大大提高了神经网络的性能。“深度学习”这个名字，就是比喻多层神经元的自主学习过程。</u>

多层神经元包括一个输入层和一个输出层，它们之间有很多中间层（又称隐藏层）。以前，计算机算力有限，只能支撑一两个中间层，深度学习使得我们可以构建成千上万个中间层的网络，具有极大的“深度”。

**（5）Transformer**

早些年，深度学习用到的方法是卷积神经网络（CNN）和循环神经网络（RNN）。

2017年，谷歌的研究人员发明了一种新的深度学习处理方法，叫做 Transformer（转换器）。

<u>Transformer 不同于以前的方法，不再一个个处理输入的单词，而是一次性处理整个输入，对每个词分配不同的权重。</u>

这种方法直接导致了2022年 ChatGPT 和后来无数生成式 AI 模型的诞生，是神经网络和深度学习目前的主流方法。

由于基于 Transformer 的模型需要一次性处理整个输入，所以都有“上下文大小”这个指标，指的是一次可以处理的最大输入。

比如，GPT-4 Turbo 的上下文是 128k 个 Token，相当于一次性读取超过300页的文本。上下文越大，模型能够考虑的信息就越多，生成的回答也就越相关和连贯，相应地，所需要的算力也就越多。

## 豆包 MarsCode 动手实验室（杭州站）

先提一下，上周说的**全国 AI 编程挑战赛**。

应用赛道的作品提交，从12月16日已经开始了，大家可以上传自己用 AI 完成的作品了。

算法赛道目前还在报名中，**只要你有信心，在 AI 的辅助下解出算法题，不妨报名试试**，也是一种体验和锻炼。

[![](https://cdn.beekka.com/blogimg/asset/202412/bg2024121908.webp)](https://cdn.beekka.com/blogimg/asset/202412/bg2024122001.webp)

比赛规则和报名链接，请访问[这里](http://zjsms.com/iUNhdBEk/)，也可以看上周的周刊。

（此处有分隔线）

本周介绍的活动，是12月28日（星期六）下午两点，在杭州的字节工区举行的**豆包 MarsCode 动手实验室**。

到时，大家可以现场深度体验豆包 MarsCode 的 AI 编程能力，并跟字节的同学当面交流。在动手环节，你可以用 AI 实现自己的创意。如果你的作品很优秀，还有机会直通 AI 编程挑战赛的决赛。

活动的详细介绍，以及报名链接，请访问[这里](https://www.bagevent.com/event/8960133?bag_track=ryf)。

## 科技动态

1、[硬盘打孔机](https://www.tomshardware.com/pc-components/storage/hard-drive-ssd-puncher-puts-four-holes-through-your-drives-puncher-p30-destroys-physical-media-with-12-tons-of-pressure)

硬盘报废时，一般需要擦除数据。最保险的方法，莫过于物理破坏硬盘。

但是，这样很费事，你要找把锤子，把硬盘敲碎了。

为了解决这个问题，一家日本公司推出了“硬盘打孔机”。这种机器可以在硬盘上轻松打四个孔，保证彻底破坏数据。

![](https://cdn.beekka.com/blogimg/asset/202407/bg2024070507.webp)

它采用电动液压系统，产生12吨的压力，足以穿透任何硬盘。

![](https://cdn.beekka.com/blogimg/asset/202407/bg2024070508.webp)

它的尺寸为 410 x 289 x 187 毫米，跟台式电脑差不多大小，但是重达18公斤，适合那些有成千上万硬盘需要销毁的大公司。

2、[沙子国际象棋](https://parametric-architecture.com/3d-printed-dune-chess-set-by-rory-noble-turner/)

一位英国设计师用沙子作为材料，3D 打印了一套国际象棋。

![](https://cdn.beekka.com/blogimg/asset/202412/bg2024121811.webp)

![](https://cdn.beekka.com/blogimg/asset/202412/bg2024121812.webp)

他说，这样做只是为了追求一种奇特的感觉。沙子是一种无形且流动的材料，塑造成坚固耐用的东西，让人感到难以把握、随时可能变化。

![](https://cdn.beekka.com/blogimg/asset/202412/bg2024121813.webp)

而且，沙子表面是不光滑的，当你用沙子下棋时，会有真实的、与众不同的触觉。

![](https://cdn.beekka.com/blogimg/asset/202412/bg2024121814.webp)

3、[玻璃砖](https://news.mit.edu/2024/engineers-3d-print-sturdy-glass-bricks-building-structures-0920)

大家考虑过吗，房子为什么需要墙？难道不能建造一所没有墙、全部是窗户的房子吗？

回答是不能，因为建筑的重量由墙承受，窗户不承受重量。如果把墙全改成窗户，建筑物就会倒塌。

那么，能不能用玻璃来造墙呢？玻璃既可以承重，又可以透光。

![](https://cdn.beekka.com/blogimg/asset/202410/bg2024101804.webp)

麻省理工学院的科学家，最近就发明了这样一种全透明的玻璃砖（上图），根据测试具有跟普通砖相同的承重能力。

除了透光，玻璃砖还有一个好处，可以重新利用。只要高温加热，玻璃砖就会融化，能够塑造成其他形状，还能 3D 打印，但这也导致它不防火。

![](https://cdn.beekka.com/blogimg/asset/202410/bg2024101805.webp)

总的来说，玻璃砖比红砖更环保，在很多场合有推广潜力。

4、**其他**

（1）本周发生了一笔[史上最大的风险投资](https://finance.sina.cn/7x24/2024-12-18/detail-inczvnmc5201636.d.html)，AI 公司 Databricks 一次性募集了100亿美元。

（2）GitHub 宣布，编程助手 [GitHub Copilot](https://github.com/features/copilot) 向所有用户免费开放。

（3）OpenAI 推出了免费电话 [1-800-ChatGPT](https://help.openai.com/en/articles/10193193-1-800-chatgpt-calling-and-messaging-chatgpt-with-your-phone)，北美用户可以拨打该电话，跟 AI 语音聊天，每月额度为15分钟。

（4）[小米官方](https://github.com/XiaoMi/ha_xiaomi_home/blob/main/doc/README_zh.md)开始支持，小米物联网设备接入智能家居管理助手 Home Assistant。

## 文章

1、[汇编语言的一点入门介绍](https://shikaan.github.io/assembly/x86/guide/2024/09/08/x86-64-introduction-hello.html)（中文）

![](https://cdn.beekka.com/blogimg/asset/202409/bg2024091802.webp)

这篇短文通俗解释了汇编语言的基本概念。

2、[CSS 网格区块详解](https://ishadeed.com/article/css-grid-area/#header-layout)（英文）

![](https://cdn.beekka.com/blogimg/asset/202408/bg2024081701.webp)

这篇长文详细介绍 CSS grid 布局的区块功能（template area）。

3、[网页如何插入 JSON-LD 语义数据](https://csvbase.com/blog/13)（中文）

![](https://cdn.beekka.com/blogimg/asset/202408/bg2024082206.webp)

本文详细介绍网页的 JSON-LD 数据块，用来插入机读的语义数据。

4、[13个对前端开发有用的 Chrome 插件](https://jsdevspace.substack.com/p/13-super-useful-chrome-plugins-for)（英文）

![](https://cdn.beekka.com/blogimg/asset/202409/bg2024092304.webp)

本文介绍13个用于前端开发的 Chrome 插件。

5、[谷歌不再是最好的搜索引擎](https://www.theregister.com/2024/12/16/opinion_column_perplexity_vs_google/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202412/bg2024121902.webp)

本文是一篇新闻分析，作者认为 Perplexity 的 AI 搜索体验已经优于谷歌了。

6、[如何为 Windows 添加6个 macOS 最好的功能](https://www.xda-developers.com/how-i-got-the-best-macos-features-on-windows/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202412/bg2024121903.webp)

一篇 Windows 使用技巧，教你怎么为 Windows 添加一些 macOS 功能，比如文件浏览器可以文档预览。

## 工具

1、[Presenterm](https://github.com/mfontanini/presenterm)

![](https://cdn.beekka.com/blogimg/asset/202412/bg2024121401.webp)

将 Markdown 文件转成幻灯片，在命令行播放的开源工具。（[@lengyijun](https://github.com/ruanyf/weekly/issues/5706) 投稿）

2、[Rslib](https://github.com/web-infra-dev/rslib)

![](https://cdn.beekka.com/blogimg/asset/202412/bg2024121402.webp)

制作 JavaScript 软件包的工具，可以直接开发组件库和命令行工具。（[@fi3ework](https://github.com/ruanyf/weekly/issues/5713) 投稿）

3、[Midscene.js](https://github.com/web-infra-dev/midscene)

AI 驱动的网页 UI 自动化测试框架，通过文字描述，生成 UI 测试用例。（[@yuyutaotao](https://github.com/ruanyf/weekly/issues/5733) 投稿）

4、[wechatDataBackup](https://github.com/git-jiadong/wechatDataBackup)

![](https://cdn.beekka.com/blogimg/asset/202412/bg2024121501.webp)

Windows 桌面 PC 端的微信聊天记录一键导出。（[@git-jiadong](https://github.com/ruanyf/weekly/issues/5721) 投稿）

5、[MoeMail](https://github.com/beilunyang/moemail)

![](https://cdn.beekka.com/blogimg/asset/202412/bg2024121803.webp)

基于 Next.js + Cloudflare 技术栈构建的临时邮箱服务，[在线体验](https://moemail.app)。（[@beilunyang](https://github.com/ruanyf/weekly/issues/5740) 投稿）

6、[my-github-2024](https://github.com/WCY-dt/my-github-2024)

![](https://cdn.beekka.com/blogimg/asset/202412/bg2024121502.webp)

一个 Python 程序，生成你在2024年的 GitHub 代码提交统计。（[@WCY-dt](https://github.com/ruanyf/weekly/issues/5722) 投稿）

7、[Vanilla](https://vanillaframework.io/)

![](https://cdn.beekka.com/blogimg/asset/202409/bg2024090601.webp)

Canonical 公司的 CSS 框架，就是 Ubuntu 官网采用的样式。

8、[OpenAuth](https://github.com/openauthjs/openauth)

![](https://cdn.beekka.com/blogimg/asset/202412/bg2024121806.webp)

网页登录的第三方认证的集成库。

9、[Schemio](https://github.com/ishubin/schemio)

![](https://cdn.beekka.com/blogimg/asset/202412/bg2024121807.webp)

基于 Web 的示意图可视化编辑器。

10、[Buzee](https://github.com/gsidhu/buzee-tauri)

![](https://cdn.beekka.com/blogimg/asset/202412/bg2024121907.webp)

一个桌面软件，提供本地文件的全文搜索（包括图片里面的文字），支持 Windows 和 Mac。

## AI 相关

1、[Hika AI](https://hika.fyi/)

![](https://cdn.beekka.com/blogimg/asset/202412/bg2024121403.webp)

免费的 AI 搜索。（[@atlas-comstock](https://github.com/ruanyf/weekly/issues/5714) 投稿）

2、[Slea.ai](https://slea.ai/zh-CN)

![](https://cdn.beekka.com/blogimg/asset/202412/bg2024121801.webp)

免费的 AI Logo 生成器。（[@aaamomo64](https://github.com/ruanyf/weekly/issues/5727) 投稿）

3、[AI 音效生成器](https://tiktokvoice.net/en/sounds-effect)

![](https://cdn.beekka.com/blogimg/asset/202412/bg2024121802.webp)

免费生成各种音效，比如雨声、风声。（[@aurthur](https://github.com/ruanyf/weekly/issues/5729) 投稿）

## 资源

1、[SQL 风格指南](https://www.sqlstyle.guide)

![](https://cdn.beekka.com/blogimg/asset/202411/bg2024111601.webp)

一份书写 SQL 语句的风格约定。

2、[颜色代码表](https://www.ysdaima.com)

![](https://cdn.beekka.com/blogimg/asset/202412/bg2024121404.webp)

在线配色设计工具集，做在一个网站。（[@nettsz](https://github.com/ruanyf/weekly/issues/5717) 投稿）

## 图片

1、[机器蜻蜓](https://www.popularmechanics.com/flight/drones/a30795266/cia-robot-dragonfly/)

美国首都华盛顿的中央情报局博物馆，有一只上个世纪70年代制造的机器蜻蜓。

![](https://cdn.beekka.com/blogimg/asset/202412/bg2024121808.webp)

它其实是一架微型直升机，飞到目标对象附近，窃听对方的谈话。

![](https://cdn.beekka.com/blogimg/asset/202412/bg2024121809.webp)

这只蜻蜓可以飞200米，然后落下来，通过激光捕捉空气振动，来还原谈话声。

但是，它不防风，也难以控制，所以从来没有实际用过。

2、[荷兰的邮资代码](https://en.wikipedia.org/wiki/Postzegelcode)

荷兰寄信不用邮票，而是用一种9个字母和数字组成的代码。

![](https://cdn.beekka.com/blogimg/asset/202407/bg2024071110.webp)

你花钱买一个代码，以 3 x 3 的格式写在信封上，就能代替邮票，作为付款证明。

![](https://cdn.beekka.com/blogimg/asset/202407/bg2024071111.webp)

因为代码的有效期只有五天（以邮戳为准），需要购买后及时寄出，被猜到的可能性很小。

## 文摘

1、[没有编程生产力这样的东西](https://www.benrady.com/2012/11/theres-no-such-thing-as-software-productivity.html)

正如马丁·福勒（Martin Fowler）所观察到的那样，程序员的编程生产力无法有效地衡量，因为它不存在。

软件开发并不是一项必然会产生任何东西的活动。

假设你有两个开发人员在同一个项目上工作，并且偶然地，他俩在同一天接受了相同的任务。

甲写了一个1000行的框架，完美地解决了这个问题。代码编写良好，并经过充分测试，每一步都有详细记录。

乙则是当天去了公园，一边喂鸽子一边思考问题，然后漫步回到办公室，删除了100行代码，部署了更改……问题就解决了。

请问谁的生产力更高？

回答是，这不重要。重要的是乙解决了问题，同时降低了团队的长期维护成本。甲也解决了这个问题，但是他通过增加代码，增加了维护成本，因此（在其他条件相同的情况下）他的解决方案较差。

我们能说，乙具有更高的生产力吗？显然，很难找到编程生产力的正确衡量指标。

我认为，**优秀的软件开发者所做的就是解决问题**。但是，生产力的衡量指标，比如代码、文档、数据等等，都只是解决问题的工具，并不是解决问题本身。

## 言论

1、

我写 SQLite 的时候，从来没人教过我 B 树的知识。我需要自己实现 B 树，我就从书架取下高德纳的《计算机编程艺术》，找到了 B 树的章节。他描述了算法，我就照着实现。

有趣的是，高德纳详细介绍了搜索 B 树和插入 B 树的算法，没有提供从 B 树删除数据的算法，这是放在本章末尾的练习。所以我在实现自己的 B 树之前，还必须先做完该章的练习。谢谢高德纳，我真的很感激。

-- [理查德·希普《SQLite 不为人知的故事》](https://corecursive.com/066-sqlite-with-richard-hipp/)

2、

瑞典南部的马尔默市，洗一次10分钟的淋浴，电费高达2.65欧元（约20元人民币）。原因是该市接入的是德国电网，德国能源短缺，推高了电价。

-- [《瑞典能源危机》](https://www.euractiv.com/section/energy/news/swedish-minister-open-to-new-measures-to-tackle-energy-crisis-blames-german-nuclear-phase-out/)

3、

职业生涯最重要的一课是，你需要认识到，你工作的目的不在于使得公司的客户满意，而在于使得那些控制你的加薪、奖金和晋升的人满意。

-- [Hacker News 读者](https://news.ycombinator.com/item?id=42092156)

4、

正在开发的水下无人机技术，会使得以航空母舰为中心的海军战略过时，从而大幅削减军事开支。

举例来说，美国开发的水下无人机 Orca XLUUV，可以携带8吨的有效载荷，行驶数千英里，并且不需要长时间浮出水面。

-- [Hacker News 读者](https://news.ycombinator.com/item?id=42432129)

5、

我第一次尝试 MidJourney（文生图工具）和 Suno（文生音乐工具）时，我想知道未来是否每个人都会成为数字艺术家。

很快，我就意识到我没有“创作冲动”，即使看过很多别人的创作，我也常常不清楚自己想要创作的东西。

因此，未来的 AI 即使具备无比强大的绘画和编曲能力，还是只有少数人能成为画家和音乐家。程序员也是如此，即使 AI 会编程，也无法人人成为程序员。

-- [《Cursor 深度体验》](https://www.pixelstech.net/article/1734488862-do-not-be-misled-by-‘build-an-app-in-5-minutes’%3a-in-depth-practice-with-cursor)

## 往年回顾

[没有目的地，向前走](http://www.ruanyifeng.com/blog/2023/12/weekly-issue-283.html)（2023 #283）

[生活就像一个鱼缸](http://www.ruanyifeng.com/blog/2022/12/weekly-issue-233.html)（2022 #233）

[腾讯的员工退休福利](http://www.ruanyifeng.com/blog/2021/11/weekly-issue-183.html)（2021 #183）

[贵州变瑞士，有没有可能？](http://www.ruanyifeng.com/blog/2020/11/weekly-issue-133.html)（2020 #133）

（完）

