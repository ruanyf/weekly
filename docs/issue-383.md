# 科技爱好者周刊（第 383 期）：你是第几级 AI 编程

这里记录每周值得分享的科技内容，周五发布。

本杂志[开源](https://github.com/ruanyf/weekly)，欢迎[投稿](https://github.com/ruanyf/weekly/issues)。另有[《谁在招人》](https://github.com/ruanyf/weekly/issues/8591)服务，发布程序员招聘信息。合作请[邮件联系](mailto:yifeng.ruan@gmail.com)（yifeng.ruan@gmail.com）。

## 封面图

![](https://cdn.beekka.com/blogimg/asset/202601/bg2026012103.webp)

刚刚建成四川宜宾高铁枢纽门户区，以高铁站为核心，包括8座塔楼、中央公园、数字艺术中心和商业文化街区。（[via](http://www.archina.com/index.php?g=works&m=index&a=show&id=159920)）

## 你是第几级 AI 编程

史蒂夫·耶格（Steve Yegge）是一个著名的美国程序员。

![](https://cdn.beekka.com/blogimg/asset/202601/bg2026012408.webp)

他在亚马逊和谷歌都干过，但是他出名的不是写软件，而是写博客。

他喜欢在个人网站发布长篇大论，滔滔不绝地议论，直抒胸臆，毫不避讳。他的好多文章都在业内被广泛阅读，引起很大反响。

这些文章后来结集出版，甚至引进了国内，书名就叫《程序员的呐喊》（人民邮电出版社，2014）。

![](https://cdn.beekka.com/blogimg/asset/202601/bg2026012409.webp)

它的书名里面的“呐喊”，英文单词是 ranting，直译就是“咆哮”，确实就是他的文章风格。

这个月，他又发表了一篇[最新文章](https://steve-yegge.medium.com/welcome-to-gas-town-4f25ee16dd04)，谈他对 AI 编程的看法。

**他说 AI 编程有8级，他已经到了第8级**，也就是最高级。

第1级，还没有接触到 AI 编程，你的 IDE 还是正常的样子（下图）。

![](https://cdn.beekka.com/blogimg/asset/202601/bg2026012410.webp)

第2级，你在 IDE 装了 AI 插件，开启了侧边栏，AI 时不时提出代码建议，问你是否接受（Yes or No）。

![](https://cdn.beekka.com/blogimg/asset/202601/bg2026012411.webp)

第3级，你开始信任 AI 编程，进入了 YOLO 模式（“你只活一次”模式， You Only Live Once）。为了节省时间精力，你不再逐条确认 AI 的建议，只要是 AI 生成出来的东西，你就一路按 Yes，统统接受。

![](https://cdn.beekka.com/blogimg/asset/202601/bg2026012412.webp)

第4级，AI 占据的屏幕宽度越来越大，手工编辑的代码区仅用于比对代码差异。

![](https://cdn.beekka.com/blogimg/asset/202601/bg2026012413.webp)

第5级，你索性不要代码区了，改用命令行（比如 Claude Code），所有的屏幕宽度都留给了 AI。你现在不看 AI 的生成结果了，只看它的完成进度。

![](https://cdn.beekka.com/blogimg/asset/202601/bg2026012414.webp)

第6级，你觉得只用一个 AI 太慢，于是打开3到5个窗口，同时进行 AI 编程，加快速度。

![](https://cdn.beekka.com/blogimg/asset/202601/bg2026012415.webp)

第7级，同时打开的 AI 编程窗口到了10个以上，已经是你手工管理的极限了。

![](https://cdn.beekka.com/blogimg/asset/202601/bg2026012416.webp)

第8级，你开始使用 AI 任务编排器，让计算机管理并行的多个 AI 编程。

![](https://cdn.beekka.com/blogimg/asset/202601/bg2026012417.webp)

以上就是 AI 编程的8个级别，你是第几级？

到这里还没完，前面说了，史蒂夫·耶格本人已经到了第8级。他需要工具来管理并行的 AI 编程，但是找不到满意的工具。

于是，他就指挥 AI 写，并将这个工具起名为“煤气镇”（Gas Town）。这个名字来自电影《疯狂麦克斯》（Mad Max）第四部，是里面大反派老乔的老巢。那里到处都是二手零件组成的燃气机，能正常工作，但是看上去摇摇欲坠。

![](https://cdn.beekka.com/blogimg/asset/202601/bg2026012418.webp)

![](https://cdn.beekka.com/blogimg/asset/202601/bg2026012419.webp)

他说，“煤气镇”的开发就是东拼西凑，不考虑合理性，能用就加上去，没抛错就接受。“它有22.5万行 Go 语言代码，我从来没看过它的代码，也从来没想过要看。”

他建议用户不要使用这个工具，因为使用它需要全心全意信任 AI。并且，就算相信它，它也可能把事情搞得一团糟。另外，多个 AI 一起跑，很费钱。

但是，他还是把[这个工具](https://github.com/steveyegge/gastown)放到网上，因为它非常好玩。截至到上周，已经得到了6000颗星。

![](https://cdn.beekka.com/blogimg/asset/202601/bg2026012420.webp)

## 科技动态

1、[牛的智力](https://www.theguardian.com/science/2026/jan/19/back-scratching-cow-veronika-bovine-intelligence)

一个奥地利农民惊奇地发现，自家的牛会从地上，叼起一根棍子来挠痒。

![](https://cdn.beekka.com/blogimg/asset/202601/bg2026012406.webp)

这个发现令人震惊，因为这表明牛会使用工具，以前从未有人提过。

![](https://cdn.beekka.com/blogimg/asset/202601/bg2026012407.webp)

目前，除了人类之外，只有黑猩猩被发现会使用工具。科学家表示，需要重新认识牛的智力。

2、[轨道储能系统](https://aresnorthamerica.com/)

一家美国公司设计出“轨道储能系统”，利用山地轨道储藏能量。

![](https://cdn.beekka.com/blogimg/asset/202601/bg2026011017.webp)

电力充足时，索道通过电动机，把重物从山脚运到山顶。

![](https://cdn.beekka.com/blogimg/asset/202601/bg2026011018.webp)

电力不足时，就利用重力势能，让重物顺着轨道从山顶滑到山脚，通过索链带动发电机。

![](https://cdn.beekka.com/blogimg/asset/202601/bg2026011019.webp)

这个系统的优点是简单可靠，成本低，连续使用多年，也不会出现性能衰减。

3、[喉部发声贴片](https://newsroom.ucla.edu/releases/speaking-without-vocal-cords-ucla-engineering-wearable-tech)

上一期周刊介绍了会说话的围脖，本期还有一个类似的发明。加州大学洛杉矶分校的研究团队发明的喉部贴片，可以让不能说话的病人重新发声。

![](https://cdn.beekka.com/blogimg/asset/202403/bg2024031903.webp)

某些病人由于喉部疾病，无法再发声了，成了哑巴，但是他们的喉部肌肉还能动。

这种贴片贴在病人的喉部，能够感知病人的喉部肌肉运动，并将这种运动转为电信号，发送出去。

![](https://cdn.beekka.com/blogimg/asset/202403/bg2024031904.webp)

计算机收到电信号以后，再转成对应的语音，从而实现发声。

![](https://cdn.beekka.com/blogimg/asset/202403/bg2024031905.webp)

为了将喉部肌肉运动与各种语音对应起来，研究团队使用了机器学习，通过算法将电信号与单词之间实现了关联。

## 文章

1、[2026年的 Linux 音乐播放器](https://crescentro.se/posts/linux-music-players-2026/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202601/bg2026012701.webp)

本文介绍 Linux 系统现在主要的几种音乐播放器。

2、[选择性禁用 HTTP/1.0 和 HTTP/1.1](https://markmcb.com/web/selectively_disabling_http_1/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202601/bg2026012301.webp)

本文介绍如何设置 nginx，禁止 HTTP/1.0 和 HTTP/1.1 协议，只有白名单里面的客户端可以通过，这杜绝了绝大部分的攻击和爬虫。

3、[我扫描了所有的 GitHub “孤儿提交”](https://trufflesecurity.com/blog/guest-post-how-i-scanned-all-of-github-s-oops-commits-for-leaked-secrets)（英文）

![](https://cdn.beekka.com/blogimg/asset/202507/bg2025070316.webp)

如果你不小心把密码提交到 GitHub，怎么办？你可能会立刻修改代码，强制覆盖上次的提交。

本文告诉你，这样不行。因为 GitHub 不删除任何提交，你上次提交实际上还在。作者扫描了所有 GitHub 的强制提交事件，真发现了许多泄漏的密码，

4、[CSS 动画计数器](https://css-tricks.com/animating-number-counters/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202507/bg2025070317.webp)

本文介绍纯 CSS 动画计数器的各种写法。

5、[我的 n8n 用例](https://www.xda-developers.com/built-expense-tracker-using-n8n/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202506/bg2025060406.webp)

n8n 是一个工作流编排器，可视化生成自动操作脚本。作者介绍了自己的用例：通过聊天软件，将每一笔费用发给 n8n 本地服务器，它会用 AI 进行分类，再将结果存入谷歌表格。

6、[2025应该知道的 HTML 新知识](https://frontendmasters.com/blog/bone-up-html-2025/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202501/bg2025011921.webp)

本文介绍 HTML 的一些新属性和新功能。

7、[新的自托管应用推荐](https://selfh.st/2024-favorite-new-apps/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202501/bg2025011922.webp)

作者推荐一些他个人喜欢的自托管应用，都相当不错。

## 工具

1、[teemux](https://github.com/gajus/teemux)

![](https://cdn.beekka.com/blogimg/asset/202601/bg2026012503.webp)

一个基于 JS 语言的命令行工具，将多个进程输出的日志放在一处查看，可以命令行查看，也可以浏览器查看。

2、[daedalOS](https://github.com/DustinBrett/daedalOS)

![](https://cdn.beekka.com/blogimg/asset/202505/bg2025052602.webp)

浏览器里面的虚拟桌面环境，代码开源。

3、[Dendron](https://www.dendron.so/)

![](https://cdn.beekka.com/blogimg/asset/202505/bg2025052633.webp)

VS Code 的笔记插件，将笔记的层级结构当作目录，并支持图表和内部链接，参见[介绍文章](https://www.xda-developers.com/how-i-use-dendron-to-organize-project-documentation-across-devices/)。

4、[CWD](https://github.com/anghunk/cwd)（Cloudflare Workers Discuss）

![](https://cdn.beekka.com/blogimg/asset/202601/bg2026012307.webp)

基于 Cloudflare Workers 的网站评论系统。（[@anghunk](https://github.com/ruanyf/weekly/issues/8801) 投稿）

5、[Mouse Gestures](https://github.com/Chance-fyi/mouse-gestures)

![](https://cdn.beekka.com/blogimg/asset/202601/bg2026012304.webp)

开源的 Chrome 浏览器插件，使用鼠标滑动轨迹，完成各种浏览器操作。（[@Chance-fyi](https://github.com/ruanyf/weekly/issues/8779) 投稿）

6、[relationship-ts](https://github.com/ExploringTheCodeWorld/relationship-ts)

![](https://cdn.beekka.com/blogimg/asset/202601/bg2026012306.webp)

一个 JS/TS 库，用来计算中国亲戚关系（称谓），[Demo 试用](https://example.qinyimo.cn/)。（[@ExploringTheCodeWorld](https://github.com/ruanyf/weekly/issues/8792) 投稿）

7、[Deck](https://github.com/yuzeguitarist/Deck)

![](https://cdn.beekka.com/blogimg/asset/202601/bg2026012403.webp)

macOS 剪贴板管理的开源桌面应用，特点是有 Touch ID 保护和端到端加密。（[@yuzeguitarist](https://github.com/ruanyf/weekly/issues/8809) 投稿）

8、[EdgeTunnel](https://github.com/tianrking/Re_edgetunnel) (Refactored)

一个部署在 Cloudflare Workers 的隧道方案，代码进行了重构。（[@tianrking](https://github.com/ruanyf/weekly/issues/8828) 投稿）

9、[Mail Studio](https://github.com/wzc520pyfm/mail-studio)

![](https://cdn.beekka.com/blogimg/asset/202601/bg2026012816.webp)

开源的可视化邮件编辑器，通过拖拽组件，生成响应式邮件模板，试用 [Demo](https://mail-studio-black.vercel.app/)。（[@wzc520pyfm](https://github.com/ruanyf/weekly/issues/8851) 投稿）

10、[TermClean](https://github.com/daijinhai/TermClean)

![](https://cdn.beekka.com/blogimg/asset/202601/bg2026012815.webp)

macOS 开源应用，在终端界面显示各种软件包占用的磁盘空间，并提供清除软件包功能。（[@daijinhai](https://github.com/ruanyf/weekly/issues/8852) 投稿）

## AI 相关

1、[ebook2audiobook](https://github.com/DrewThomasson/ebook2audiobook)

![](https://cdn.beekka.com/blogimg/asset/202601/bg2026012402.webp)

电子书转成有声书的工具。

2、[WorkAny](https://github.com/workany-ai/workany)

![](https://cdn.beekka.com/blogimg/asset/202601/bg2026012308.webp)

开源的 AI Agent 桌面客户端，能够执行任务、操作文件，类似于 [Claude Cowork](https://claude.com/blog/cowork-research-preview)。（[@idoubi](https://github.com/ruanyf/weekly/issues/8805) 投稿）

3、[Voice Key](https://github.com/BuildWithAIs/voicekey)

![](https://cdn.beekka.com/blogimg/asset/202601/bg2026012305.webp)

开源的桌面端 AI 语音转文字的工具。（[@yexia553](https://github.com/ruanyf/weekly/issues/8780) 投稿）

4、[分镜大师](https://github.com/BroderQi/Storyboard)（Storyboard Studio）

![](https://cdn.beekka.com/blogimg/asset/202601/bg2026012501.webp)

开源的 Windows 应用，使用 AI 对视频进行分镜。（[@BroderQi](https://github.com/ruanyf/weekly/issues/8819) 投稿）

## 资源

1、[Claude Code 实战](https://anthropic.skilljar.com/claude-code-in-action)（Claude Code in Action）

![](https://cdn.beekka.com/blogimg/asset/202601/bg2026012401.webp)

Anthropic 官方的 Claude Code 免费入门教程，一共15节视频课，总长约1小时。

2、[GitHub 证书](https://certificate.brendonmatos.com/)

![](https://cdn.beekka.com/blogimg/asset/202601/bg2026012303.webp)

这个网站可以将某个用户2025年的 GitHub 活动，变成一张证书样式的图片。

3、[Fontsniff](https://fontsniff.com/zh/font-identification)

![](https://cdn.beekka.com/blogimg/asset/202601/bg2026012502.webp)

上传文本图片，自动识别使用了什么字体。（[@cosmicqbit](https://github.com/ruanyf/weekly/issues/8822) 投稿）

4、[Future Style Periodic Table](https://github.com/SeanWong17/Future-Style-Periodic-Table)

![](https://cdn.beekka.com/blogimg/asset/202601/bg2026012405.webp)

开源的可视化元素周期表，会展示核外电子排布。（[@SeanWong17](https://github.com/ruanyf/weekly/issues/8816) 投稿）

5、[nihongo](https://yarn.gonomad.cn/assets/word.html)

![](https://cdn.beekka.com/blogimg/asset/202601/bg2026012404.webp)

免费的日语学习平台，有词汇、听力、文章等。（[@FrankZhai367](https://github.com/ruanyf/weekly/issues/8811) 投稿）

## 图片

1、[我不再写代码，而是雕刻代码](https://www.jerpint.io/blog/2026-01-24-i-dont-write-code-anymore-i-sculpt-it/)

我的编码方式发生了变化，现在很少自己写了，都交给 Claude Code 自动完成。

我要做的，就是将 AI 的输出结果打磨成更持久耐用的东西。

![](https://cdn.beekka.com/blogimg/asset/202601/bg2026012504.webp)

AI 几乎从不删除无用代码。如果没有雕塑家，最终只会得到一座臃肿不堪、毫无特色、重得无法站立、也无法讲述故事的雕像。

2、[蝴蝶壁画](https://www.mantrarea.com/murals)

一位法国艺术家，在世界各地的大楼外立面，绘制栩栩如生的蝴蝶标本壁画，唤起人们对生物多样性的关注。

以下都是真实照片，不是 AI 生成的。

迈阿密

![](https://cdn.beekka.com/blogimg/asset/202507/bg2025070509.webp)

休斯顿

![](https://cdn.beekka.com/blogimg/asset/202507/bg2025070511.webp)

西班牙

![](https://cdn.beekka.com/blogimg/asset/202507/bg2025070512.webp)

纽约

![](https://cdn.beekka.com/blogimg/asset/202507/bg2025070513.webp)

法国

![](https://cdn.beekka.com/blogimg/asset/202507/bg2025070514.webp)

## 文摘

1、[为什么有些公司愿意“黑箱编程”](https://simonwillison.net/2026/Jan/28/the-five-levels/)

有些公司已经把编程完全交给了 AI，根本不看代码了，AI 写什么就运行什么。

我把这叫做“黑箱编程”，开发过程变成了一个黑箱，根本不需要人类介入，也不欢迎人类介入。它所做的就是把规格参数转换成软件。

我知道，有些小公司就这么干，公司的人数一般不到五个人。虽然这种事情简直难以置信，但很可能就是我们的未来。

我问过一个这样的公司，他们为什么要这么做？

他解释说，作为小公司，他们团队的目标是证明产品的有效性。

人类的作用是设计出一个系统：找到新的模式，帮助 AI 有效工作，证明正在构建的软件产品是稳健有效的。剩下的事情就都交给 AI，这样效率最高。

我认为，这个解释令人信服。

这个公司很小，但在短短几个月内就开发出了可以运行的产品。团队当中有些人拥有超过20年的软件开发经验，曾参与过开发可靠性要求极高的系统，所以他们并非抱着天真无知的心态选择了“黑箱编程”。

我期待着，看到他们拿出最终产品，投入市场的那一刻。

## 言论

1、

大多数组织习惯于收到系统警报后，直接质问：“是谁刚刚发布了代码变更？” 人们认定合并代码的人肯定了解它的工作原理，并且能够迅速修复问题。

如果你部署的代码既不是某个人写的，也没有人真正理解它，会发生什么？

-- [《二十年的 DevOps 实践》](https://www.honeycomb.io/blog/you-had-one-job-why-twenty-years-of-devops-has-failed-to-do-it)

2、

JavaDoc 之类的工具，可以从代码直接生成文档。我觉得，这种自动生成的文档，价值并不大，未必比直接阅读源代码容易。

没有什么可以替代手写的、有组织的和人工编辑的文档。

-- [《什么是好的文档，以及如何编写》](https://stevelosh.com/blog/2013/09/teach-dont-tell/)

3、

你学过的、使用过的每种语言和技术，即使会过时，也是有价值的，它们都会让下一种语言或技术更容易学习。

-- [《他们骗了你，开发软件真的很难》](https://toddle.dev/blog/they-lied-to-you-building-software-is-really-hard)

4、

习惯了 AI 编程之后，有一天，我震惊地发现，自己竟然如此轻易地掉进了陷阱。

我已经变得对自己的代码库一无所知，也懒得自己去修复。只要用上了 AI，我就心情愉快，AI 让我感觉自己更聪明、更高效、掌控一切。一旦离开了 AI，我才发现这一切都只是幻觉。

-- [《有了 AI，我变得懒惰和愚蠢》](https://thomasorus.com/i-tried-coding-with-ai-i-became-lazy-and-stupid)

## 往年回顾

[面对 AI，互联网正在衰落](https://www.ruanyifeng.com/blog/2025/02/weekly-issue-336.html)（#336）

[蓝色指示灯的解决方案](https://www.ruanyifeng.com/blog/2024/01/weekly-issue-286.html)（#286）

[中国的阳光地带](https://www.ruanyifeng.com/blog/2022/12/weekly-issue-236.html)（#236）

[低纬度，高海拔，气候优势](https://www.ruanyifeng.com/blog/2021/12/weekly-issue-186.html)（#186）

（完）

