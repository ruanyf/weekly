# 科技爱好者周刊（第 416 期）：编程已经面目全非

这里记录每周值得分享的科技内容，周五发布。

本杂志[开源](https://github.com/ruanyf/weekly)，欢迎[投稿](https://github.com/ruanyf/weekly/issues)。另有[《谁在招人》](https://github.com/ruanyf/weekly/issues/12009)服务，发布程序员招聘信息。合作请[邮件联系](mailto:yifeng.ruan@gmail.com)（yifeng.ruan@gmail.com）。

## 封面图

![](https://cdn.beekka.com/blogimg/asset/202610/bg2026102201.webp)

本周启用的上海大歌剧院内部装修。（[via](http://sh.news.cn/20261022/b4bc8ab8a9e848f7aa8d044ba56487cc/c.html)）

## 编程已经面目全非

大多数人只看到，AI 改变了程序员这个职业。很少有人提到，AI 也改变了编程。

AI 推翻了传统的软件开发，编程现在已经面目全非。

即使将来泡沫破灭，AI 也不可能从编程工具链中消失，已经永久成为软件开发的一部分，再也无法移除。

一个国外的资深程序员[总结](https://x.com/thorstenball/status/2101305394190557466)了，AI 改变了编程的哪些方面。

![](https://cdn.beekka.com/blogimg/asset/202610/bg2026101515.webp)

他的观点非常激进，有很多大胆的断言，我觉得一定要分享给更多人看。

**（1）代码审查（Code review）将消失。**

人工审查代码已经没意义了。因为人类跟不上 AI 生成代码的速度，无法在合理的时间内，发现 AI 代码中的 Bug。

人类未来只能审查整个系统的组成或架构是否合理，而绝不会像现在这样，通过 PR 逐行审查代码。

**（2）单元测试可能会消失。**

AI 可以随时改变代码的整个实现，再去测试一个个代码单元，就没意义了。也许下次迭代，整栋楼就会重建，何必再去检查单块砖头。

将来的项目可能只有接口测试、集成测试、系统测试，而不会保留单元测试。

**（3）软件开发的重点不再是写代码。**

代码将来由 AI 负责，程序员的工作重点将移到代码以外的其他环节：如何用软件解决业务问题、了解软件如何实现、如何发布软件、如何收集反馈等等。

**（4）Bug 的性质也变了。**

大多数 Bug 不再是代码 Bug，而是需求提错了或表达不准确。

**（5）软件开源不再能提升质量。**

以前，代码开源的一个理由是“只要关注的人足够多，所有 Bug 都能被发现”。

这句话依然成立，但是现在即使你不开源，AI 也能帮你发现 Bug。

**（6）敏捷编程会死亡。**

敏捷编程的各种方法（Agile、Scrum 等），都意义不大了，AI 的生成速度决定了项目的开发时间，你所要做的就是把工单直接推给 AI。

**（7）项目分工将改变。**

以前，项目组一般包括三种角色：项目经理（PM）、设计师（Designer）、工程人员（Engineer）。

以后，这种三元架构将消失。有了 AI， 一个人可以兼任多个角色。

**（8）“好代码”的概念将消失。**

以前，“好代码”的标准是便于人类阅读理解、方便重构、开发维护效率较高的代码。

但是，你已经不读代码、不直接修改和维护大部分代码，“好代码”的存在前提就消失了。

**（9）代码风格规范和 linter 工具，也没意义了。**

AI 会在乎代码风格吗：每行不超过80个字符、有没有换行符、缩进是 tab 键还是空格键……？

**（10）UI 将变得不重要。**

一方面，未来的很多 UI 是给 AI 使用的，而 AI 只需要 API，不需要精致的 UI。

另一方面，如果代码的生成速度极快，那么用户界面（UI）将实时生成。许多 UI 之所以存在，是因为软件无法确定你想要什么。菜单、设置页、仪表盘、过滤器，都是为了帮助用户快速确定需求。用户通过语言明确了需求，AI 就可以实时为他生成定制的 UI。

**（11）Token 为王。**

谁能够负担更多的 Token，谁的软件就更好。如果你没有足够的 Token，你就开发不出最优秀的软件。

## 大模型的区别对待

本周，一家美国模型公司在它们的网站上，发布了一篇骇人听闻的[文章](https://www.hirundo.io/blog/qwen3-coder-vulnerabilities)。

![](https://cdn.beekka.com/blogimg/asset/202610/bg2026102204.webp)

它声称，Qwen3-Coder 模型会区别对待用户。如果你说自己是一家“美国国防承包商”，那么模型就会生成质量较差的代码，漏洞更多。

反过来，如果你说自己是中国公司，模型生成的代码质量就会更高。

我都要气笑了，真的是为了泼脏水，什么话都说得出来。一旦相信了阴谋论，一切就都是阴谋。

且不论测试是否客观，只看他们选择的模型是 Qwen3-Coder-30B-A3B-Instruct 就有问题。

这是2025年7月31日发布的模型，早就过时了。而且，它的激活参数只有 3.3B，谁会用这样的小模型来生成正式用途的代码？

如果要偷偷植入漏洞，难道不是应该在高阶模型中动手脚吗？高阶模型有更大的可能被重要公司使用。

这家美国公司对于为什么选择 Qwen3-Coder-30B-A3B-Instruct 作为唯一的示例，不选其他中国模型，完全没有解释。

最可笑的是，他们卖的产品就是所谓“经过安全化处理的” Qwen3-Coder-30B-A3B-Instruct。先说中国模型不安全，然后让你买他们修改的中国模型，我不知道什么样智商的客户会掏钱购买他们的产品。

虽说这样的文章纯粹是一个笑话，但是大模型会不会区别对待用户，却是一个严肃的问题。

同一个模型，真的会针对特定用户，给出特定结果（计算机术语称为“蜜罐”）吗？

如果这是可能的，就意味着，用户必须假设任何模型都是不可信任的，必须有其他模型来评估当前模型的生成结果。

## 印度的证书颁发机构

本周还有一件令人哭笑不得的事情。

eMudhra 是一家印度的证书颁发机构，它的私钥被[破解](https://scotthelme.co.uk/eight-bits-of-trust-emudhras-ca-keys-cracked-in-milliseconds/)了。任何人都可以用它的私钥签发证书了。

![](https://cdn.beekka.com/blogimg/asset/202610/bg2026102205.webp)

跟大家想的不一样，破解它的私钥，完全不涉及黑客行为，也不需要海量的计算。因为它的一把私钥就是4，还有两把私钥是56和115。

被破解的一共有八把私钥，全是这种255以内的整数。

按理说，私钥应该是一个很大的随机数，但这家公司把私钥前面的字节都设置为0，只有最后一个字节设置为非零值，就像下图这样。

![](https://cdn.beekka.com/blogimg/asset/202610/bg2026102206.webp)

所以，破解它的私钥毫不费力，只需要1毫秒的计算即可。

现在，Chrome、Mozilla 等各大浏览器不得不采取紧急措施，更新内置的证书包，撤销对于 eMudhra 签发的证书的信任。

印度公司的行事风格，总是刷新你的认知。

## 文章

1、[2026年的大模型发展](https://simonwillison.net/2026/Sep/27/2026-in-llms-so-far/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202610/bg2026102119.webp)

著名程序员西蒙·威利森（Simon Willison）的演讲稿，整理今年的大模型发展，关键词依次是 OpenClaw、Tokenmaxxing、Claude Fable 5 / Mythos、Local model、Hugging Face incident。

2、[陶哲轩与 AI 的战争](https://archive.ph/uaQ4X)（英文）

![](https://cdn.beekka.com/blogimg/asset/202610/bg2026102103.webp)

《纽约时报》的长篇报道，著名数学家陶哲轩公开反对大模型公司，反对它们肆无忌惮地用大模型去求证各种数学难题，认为这对人类的数学理解毫无帮助。

![](https://cdn.beekka.com/blogimg/asset/202610/bg2026102104.webp)

报道也详细介绍了他的人生故事。上图是他13岁（1988年）获得国际数学竞赛金牌。后来，他24岁被加州大学聘为终身教授，下图是2007年他的公开课。

![](https://cdn.beekka.com/blogimg/asset/202610/bg2026102105.webp)

3、[我自托管的11个服务](https://viceconsole.fyi/blog/2026/10/10/what-i-self-host/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202610/bg2026101501.webp)

作者在一台 16G 内存的家用迷你电脑上，运行着17个原生服务和11个 Podman 服务。本文介绍了为什么他要用这些服务。

4、[什么是硬件钱包？](https://decrypt.co/resources/what-is-a-hardware-wallet-crypto-cold-storage-explained)（英文）

![](https://cdn.beekka.com/blogimg/asset/202610/bg2026101805.webp)

本文解释什么是加密货币的硬件钱包，它有什么用，以及最近出现的两起硬件钱包被破解的案件。

5、[我训练了一个3.6亿参数的模型，让它模拟终端](https://simedw.com/2026/10/21/world-model-terminal/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202610/bg2026102202.webp)

作者介绍他怎么基于 Qwen2.5-Coder-0.5B，训练出一个自己的模型，收集的训练材料大约20亿 Token，训练时间是75个 RTX 4090 显卡的 GPU 小时。

最有意思的是这个模型的作用，它模拟终端的样子。用户每次在命令行输入一个命令，它不会去执行这个命令，而是预测运行结果，并展示出来。

虽然想不出它的用途，但这个思路真的是脑洞大开。模型不执行任务，只给出预测的执行结果，显得任务好像被执行了。

6、[英伟达欠我10亿美元股票](https://colo.to/nvidia-stock-narrative.html)（英文）

![](https://cdn.beekka.com/blogimg/asset/202610/bg2026102118.webp)

一篇有趣的回忆文章。30年前，英伟达同意给予作者一笔股票期权，当时英伟达是一家随时可能倒闭的小公司，期权根本不值钱。作者没在意，听过就忘了。

30年后，他终于想起来了，发现这些期权的价值超过10亿美元。但已经过了追诉年限，法院不予受理。

## 工具

1、[sslx](https://github.com/glincker/sslx)

![](https://cdn.beekka.com/blogimg/asset/202610/bg2026101806.webp)

一个检测、查看 HTTPS 证书信息的命令行工具。

2、[Mac.apk](https://github.com/kksimp/Mac.apk)

这个应用可以让 Mac 运行安卓软件，不是虚拟机，也不是模拟器，原理是模拟安卓的系统 API。

3、[siltop](https://github.com/CLoaKY233/siltop)

![](https://cdn.beekka.com/blogimg/asset/202610/bg2026102110.webp)

一个 macOS 命令行工具，在终端显示各种实时的系统信息：CPU、GPU、内存、电力、温度、存储、网络等。

4、[Little Snitch Mini](https://obdev.at/products/littlesnitch-mini/index.html)

![](https://cdn.beekka.com/blogimg/asset/202307/bg2023071301.webp)

一个 macOS 软件，显示正在运行的所有应用的互联网连接，并可以阻断指定的单个连接。

5、[Pines](https://github.com/thedevdojo/pines)

![](https://cdn.beekka.com/blogimg/asset/202307/bg2023071307.webp)

一个基于 Tailwind 的 UI 组件库。

6、[silkpulse](https://github.com/2234839/silkpulse)

![](https://cdn.beekka.com/blogimg/asset/202610/bg2026101901.webp)

前端的远程页面调试工具。在页面插入一个脚本，就可以远程打开该网页的控制台，查看各种信息，接收实时报错，适合调试手机端页面。（[@2234839](https://github.com/ruanyf/weekly/issues/12383) 投稿）

7、[TaskbarLyrics](https://github.com/ANYNC/TaskbarLyrics)

![](https://cdn.beekka.com/blogimg/asset/202610/bg2026101903.webp)

Windows 任务栏实时显示歌词，支持国内主要音乐服务。（[@ANYNC](https://github.com/ruanyf/weekly/issues/12408) 投稿）

8、[Archify](https://github.com/tt-a1i/archify)

![](https://cdn.beekka.com/blogimg/asset/202610/bg2026101905.webp)

一个 Skill 项目，将一段话、一个计划、一个代码仓库变成互动式网页流程图。（[@zhengxin-wang](https://github.com/ruanyf/weekly/issues/12423) 投稿）

9、[html-to-video](https://github.com/wx4766/html-to-video)

一个把 HTML 网页动画逐帧渲染成 MP4 视频的命令行工具。（[@wx4766](https://github.com/ruanyf/weekly/issues/12486) 投稿）

10、[Parcel](https://github.com/hyphy-void/Parcel)

![](https://cdn.beekka.com/blogimg/asset/202610/bg2026102101.webp)

基于 Cloudflare Worker 环境的临时文件分享应用，上传文件后生成加密的分享链接，到期自动清理。（[@hyphy-void](https://github.com/ruanyf/weekly/issues/12598) 投稿）

11、[douban-cli](https://github.com/Marvae/douban-cli)

豆瓣的非官方命令行客户端，可以用来获取电影、剧集、图书的数据。（[@Marvae](https://github.com/ruanyf/weekly/issues/12616) 投稿）

12、[wol](https://github.com/Trugamr/wol)

![](https://cdn.beekka.com/blogimg/asset/202501/bg2025012509.webp)

一个命令行工具，可以通过命令行或 Web 界面，唤醒当前局域网里面某台正在休眠的计算机。

## 资源

1、[大鹏书法](https://zidian.dapengshufa.com/)

![](https://cdn.beekka.com/blogimg/asset/202610/bg2026101902.webp)

查看某个字的各种书法。（[@gengdapeng-beep](https://github.com/ruanyf/weekly/issues/12402) 投稿）

2、[学习 Vim](https://github.com/iggredible/Learn-Vim)（Learn Vim the Smart Way）

![](https://cdn.beekka.com/blogimg/asset/202311/bg2023110605.webp)

一个开源的 Vim 编辑器教程，这是英文版。另有[中文版](https://gitlab.com/wsdjeg/Learn-Vim_zh_cn)。

3、[编译器和语言设计导论](https://dthain.github.io/books/compiler/)（Introduction to Compilers and Language Design）

![](https://cdn.beekka.com/blogimg/asset/202607/bg2026070703.webp)

一本免费的英语教材，面向初学者，介绍编译器的概念，以及如何写一个 C 语言的编译器。

## 图片

1、[法国的公路路标](https://www.bbc.com/travel/article/20260327-the-road-signs-that-teach-travellers-about-france)

法国高速公路的路标，不仅用来指明方向，还会介绍当地的美食、村庄和风景。

![](https://cdn.beekka.com/blogimg/asset/202603/bg2026033109.webp)

上图的路标表示前方是一个水鸟公园。

这些路标希望在几秒钟的时间里，吸引司机的注意力。它们只有一个简明的图标和一个名字，加上简洁的棕白配色。 

![](https://cdn.beekka.com/blogimg/asset/202603/bg2026033110.webp)

上面的路标表示前方有一个著名城堡。

下图是港口城市圣马洛的路标，有城墙、帆船和一大片海浪。

![](https://cdn.beekka.com/blogimg/asset/202603/bg2026033111.webp)

有些路牌还绘制了当地的著名人物。

![](https://cdn.beekka.com/blogimg/asset/202603/bg2026033112.webp)

上图是一个二战纪念馆，纪念当地的死难儿童。

## 文摘

1、[为什么眯眼能看得更清楚？](https://www.mentalfloss.com/posts/why-does-squinting-help-you-see-better)

我们都经历过这样的情景：当你很难看清楚远处某些东西时，眯起眼睛，清晰度会有所提高。

仔细想想，这是有悖常理的。眯眼让眼睛的可用部分变少，为什么反而可以看得更清楚呢？

![](https://cdn.beekka.com/blogimg/asset/202606/bg2026062510.webp)

你可能以为，这跟眼睛的压力有关，眯眼“挤压眼球”，暂时重塑晶状体的焦距，使其更好地聚焦。这种想法是不对的。

眯眼的真正作用在于减少进入眼睛的光线量。通过眯眼，人们实际上让眼睛变小，减少多余光线的干扰，只允许光线进入靠近视野中心的位置，从而使视网膜上的光线更加集中。这称为针孔效应，这才是看得更清晰的根本原因。

眯眼对眼睛不利的方面，主要是眯眼后，眨眼的次数会减少。因此，长时间眯眼（例如，整天眯着眼睛看电脑屏幕）会导致眼睛疲劳或干眼症。

与某些观点相反，眯眼不会损害你的视力。它不是视力下降的原因，而是视力下降的症状。如果你不分场合一直在眯眼，那么你需要检查视力。

## 言论

1、

有人问，AI 编写的代码，我根本不理解，公司却要我发布它，怎么办？

我的回答是，不要让 AI 设计代码，而要让它实现你已经设计好的代码。

-- [Hacker News 读者](https://news.ycombinator.com/item?id=50157475)

2、

大多数建议对于给出建议的人都是正确的，对于别人就不一定了。

-- [coached.com](https://coached.com/essays/most-advice-is-right-for-the-person-giving-it/)

3、

AI 让单人创业变得容易，创业失败的主要原因以后将是孤独。

身边没有人对你的想法提出异议，没有人注意到你遇到的困难，或者鼓励你坚持到底。AI 或许可以帮助你更快地前进，但它无法完全取代与人倾诉或分享喜悦。

-- [《自动化之后，单人创业将成为主流》](https://every.to/thesis-statements/julian-weisser)

4、

美国政府的主要关注，现在已经变成了如何保持对中国的技术领先优势，以及设法维持美国股市的高股价。

-- [《经济学家》杂志](https://www.economist.com/business/2026/09/30/the-era-of-speedball-capitalism-has-dawned)

5、

过去几个月，OpenAI 公司发布了 AI 做出的数百项数学证明。这震惊了数学界，一位数学家说他不禁哭了，感到 AI 毁灭了自己的研究领域。

技术乐观主义者可能不会这样想，他会劝这位数学家振作起来。

数学不会在意你的感受，科学现实对你的眼泪漠不关心。你感到自己的圣殿被毁灭了，可是这种事以前也发生在别人身上。接受现实吧。

-- [《我知道数学家为何哭泣》](https://www.derekthompson.org/p/i-know-why-the-mathematicians-weep)


## 往年回顾

[Tim 与罗永浩的对谈](https://www.ruanyifeng.com/blog/2025/10/weekly-issue-369.html)（#369）

[如何拍出爆款视频](https://www.ruanyifeng.com/blog/2024/09/weekly-issue-319.html)（#319）

[为什么英雄不使用炸药](https://www.ruanyifeng.com/blog/2023/09/weekly-issue-269.html)（#269）

[如何防止帐号被黑](https://www.ruanyifeng.com/blog/2022/08/weekly-issue-219.html)（#219）

（完）

