# 科技爱好者周刊（第 404 期）：你需要知道的 AI 内存知识

这里记录每周值得分享的科技内容，周五发布。

本杂志[开源](https://github.com/ruanyf/weekly)，欢迎[投稿](https://github.com/ruanyf/weekly/issues)。另有[《谁在招人》](https://github.com/ruanyf/weekly/issues/10517)服务，发布程序员招聘信息。合作请[邮件联系](mailto:yifeng.ruan@gmail.com)（yifeng.ruan@gmail.com）。

## 封面图

![](https://cdn.beekka.com/blogimg/asset/202607/bg2026071603.webp)

上海某商场正在举办的“海绵宝宝”展览。（[via](https://m.thepaper.cn/newsDetail_forward_33450995)）

## 你需要知道的 AI 内存知识

自己在家运行 AI 模型，可以选择两种硬件。

一种是独立显卡，目前最顶级的消费级显卡是英伟达的 RTX 5090，带有 32GB 显存，售价3万元人民币左右。

![](https://cdn.beekka.com/blogimg/asset/202607/bg2026071511.webp)

另一种是采用板载芯片组（CPU + 板载显卡 + 板载内存）的家用电脑，比如采用 AMD 公司 Strix Halo 芯片组（具体型号 Ryzen AI Max+ 395）的迷你电脑，自带 128GB 内存，售价2万元人民币左右。

![](https://cdn.beekka.com/blogimg/asset/202607/bg2026071512.webp)

我问大家，哪种硬件更好？

大部分人可能不假思索，就会选择独立显卡，毕竟独立显卡的算力远大于板载芯片组。

根据我查到的资料，下面是两者的单精度32位浮点数算力（FP32）。

> - 独立显卡（RTX 5090）：**104.8 TFLOPS**
> - 板载芯片组（AMD Ryzen AI Max+ 395）：**14.8 TFLOPS**

可以看到，独立显卡的算力，足足是板载芯片组的7倍。如果是更小位数的浮点数计算（比如 FP16 和 FP4），算力差距就更大了。

但是，我告诉你，正确的答案其实是“不确定”。很多时候，板载芯片组的迷你 PC，才是更好的本地 AI 模型解决方案。

原因很简单，大多数的 AI 模型（只要参数规模稍大），RTX 5090 根本运行不了。

问题出在它的 32GB 显存实在太少了。一个 70B 参数的模型，如果每个参数使用4位精度，那么将所有参数的权重读入内存，大约需要 32.6GB 的内存，这超出了 RTX 5090 的显存大小，它根本跑不起来。

相比之下，AMD 迷你电脑的板载内存有 128GB，载入模型毫无困难。**板载芯片组的内存是显卡和 CPU 共用的，所以称为“统一内存”**。它的好处是可以分出尽可能多的内存给单个处理器，所以能处理内存消耗量很大的 AI 模型。

苹果的 M 系列芯片一直是这种“统一内存”架构，其他厂商现在也跟进了，AMD 的 Strix Halo、NVIDIA 的 DGX Spark、Intel 的 Core Ultra 和高通的 Snapdragon X 都采用这种架构。除了内存容量大，它的价格也比独立显卡低。

读到这里，你可能会问，既然板载芯片组有这些优点，还有必要购买独立显卡吗？

回答是，内存有两个指标，除了容量大小，还有一个指标“内存带宽”。**板载芯片组的弱点，恰恰就是内存带宽。**

所谓“内存带宽”，指的是内存向处理器传送数据的速度。虽然 RTX 5090 显存不多，但是内存带宽极大，达到了 1792GB/s，而 AMD 的内存带宽只有 256GB/s。

AI 模型每生成一个 Token，需要处理器从内存中读取整个模型，进行计算。如果内存带宽是 256GB/s，那么 40GB 大小的模型，处理器一秒只能读取6次（256除以40），也就是说每秒只能生成6个 Token（这是理论值，实际可能还达不到）。这样的龟速，谁能忍受？

即使是内存带宽最大的苹果 M3 Ultra 芯片，带宽为 819GB/s，每秒可以生成20个 Token，远不如 RTX 5090 的 1792GB/s。

所以，内存大小和内存带宽，两者都是 AI 模型的瓶颈。这也是高带宽内存（HBM）价格涨疯了的原因。

如果你选择板载芯片组的迷你电脑，就要做好心理准备，忍受非常慢的 Token 生成速度。

好在为了节省计算量，出现了“混合专家模型（MoE）”这种架构，**它计算 Token 时，不需要读取全部参数，只需要激活一部分参数即可**。

以 Qwen3-30B-A3B 模型为例，它包含 30B 个参数，但每次只激活 3B 个参数，因此每个 Token 需要读取的数据量不是 20GB，而是 2GB。那么在 AMD 迷你电脑上，每秒理论上可以生成100多个 Token，这样的速度就相当不错了。

因此，如果你用“统一内存”模式的迷你电脑，就选用 MoE 模型吧。

另外，迷你电脑还有一个很大的缺点，跟内存无关，而跟它的算力慢有关。

我们知道，模型必须先处理用户的提示词，然后才能生成 Token。因为迷你电脑的算力慢，所以它处理提示词也很慢。

根据[实际测算](https://vettedconsumer.com/unified-memory-explained-why-mini-pcs-can-run-70b-models-a-big-gpu-cant-and-where-they-slow-down/)，AMD 迷你电脑使用 70B 的模型，提示词处理速度是每秒95个 Token。那么，用户提交4000个 token 的一个文档，大约需要40秒才能处理完，然后才能输出第一个 Token。

可以想象，一旦用户往上下文窗口塞入更多的内容，单单是处理提示词，就会变成几分钟到几十分钟。

总之，现阶段想在本地电脑运行大模型，无论是独立显卡还是板载芯片组，都有缺陷。你最多只能运行一些中等规模的 MoE 模型，而且提示词不能很长。

## 布尔变量如何起名

传说中，编程有两大难题，一个是缓存失效，另一个是变量起名。

其中，布尔变量尤其难起名。怎样才能贴切地表达，这个变量是表示“真”（true）和“伪”（false）的布尔值呢？

我最近读到一篇文章[《布尔变量起名的艺术》](https://thatamazingprogrammer.com/posts/stop-naming-your-variables-flag-the-art-of-boolean-prefixes/)，提出使用四个前缀就能给布尔变量正确起名，我觉得很有启发。

（1）**is-**：描述事物的状态，后面跟形容词，比如 isActive，isDeleted，isEmpty。

（2）**has-**：描述事物的所有权或包含关系，后面跟名词，比如 hasAccess，hasChildren，hasValidationErrors。

（3）**can-**：描述事物的能力或权限，比如 canEdit，canDelete，canRetry。

（4）**should-**：描述事物的意图或逻辑，比如 shouldRetry，shouldCacheResponse。

除了这四个前缀，起名还有另一条规则：永远不在布尔变量名中使用否定词。

比如，不使用 isDisabled，而要用 `isEnabled = false`。

## 科技动态

1、[OpenAI 键盘](https://openai.com/zh-Hans-CN/supply/co-lab/work-louder/)

OpenAI 公司刚刚推出了一款便捷键盘，方便操作 AI 代理。

![](https://cdn.beekka.com/blogimg/asset/202607/bg2026071601.webp)

键盘下方是一排快捷键，用于批准、否决、语音输入等操作。上方是一排 RGB 灯，表示 AI 代理目前的状态（思考、运行、等待、完成）。

![](https://cdn.beekka.com/blogimg/asset/202607/bg2026071602.webp)

这东西售价230美元，看上去毫无新意，也未必比普通键盘方便。

著名设计师乔纳森·艾维（Jony Ive）离开苹果公司后，现在负责 OpenAI 硬件设计。大家都盼望，他能拿出让人眼前一亮的智能硬件，但最先亮相的这个小键盘真是让人失望。

2、[小行星 2016HO3](https://www.cnsa.gov.cn/n6758823/n6758838/c10760422/content.html)

天问二号探测器于2025年5月发射，经过约400天的飞行，终于到达了目标——小行星 2016HO3，并传回了照片。

![](https://cdn.beekka.com/blogimg/asset/202607/bg2026071501.webp)

这个小行星长度在20米左右，只比半个标准篮球场大一点，形状不规则，并有尖角，这表明它应该是碰撞后的碎片，而不是熔岩冷却形成的。

天问二号拍摄照片时，距离这个小行星20公里，下一步将按照计划，采集这个小行星的岩石样本，送回地球。

这件事的难点在于，天问二号翼展达到15米，只比这个小行星小一点，采样时可能会改变小行星的轨道。

3、[风力编织机](https://www.merelkarhof.nl/work/wind-knitting-factory)

一个荷兰设计师发明了家用的风力编织机，可以安装在阳台或楼顶。

![](https://cdn.beekka.com/blogimg/asset/202507/bg2025070405.webp)

风力带动叶片，在一个圆形的编织转盘上，将毛线编织成围巾。

![](https://cdn.beekka.com/blogimg/asset/202507/bg2025070406.webp)

风大的时候，编织速度非常快。它看上去是一个纯粹的机械装置，没有用到风力发电。

![](https://cdn.beekka.com/blogimg/asset/202507/bg2025070407.webp)

设计师的原意是向人们展示，在城市的楼宇里，也可以利用风力。

![](https://cdn.beekka.com/blogimg/asset/202507/bg2025070408.webp)

## 文章

1、[机器学习博士求职指南](https://silviasapora.github.io/blog/ml-interviews.html)（英文）

![](https://cdn.beekka.com/blogimg/asset/202607/bg2026071509.webp)

作者是一个美国的机器学习博士毕业生，已经进入了 DeepMind 工作，本文是求职过程回顾和总结。

另有一篇[类似的文章](https://alisawuffles.github.io/blog/job-search/)。

2、[使用 DNS 通过 ACME 认证](https://hsm.tunnel53.net/article/dns-for-acme-challenges/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202509/bg2025092405.webp)

免费 HTTPS 证书需要通过 ACME 协议颁发。该协议要求认证域名所有权，一种认证方法就是使用 DNS，本文介绍这是怎么回事。

3、[Go 语言的困境](https://www.andrewvittiglio.com/thoughts/go-killed-arenas)（英文）

![](https://cdn.beekka.com/blogimg/asset/202512/bg2025120608.webp)

本文认为，Go 语言的处境尴尬，前途不看好。“随着慢语言变得更快，难语言变得更容易，Go 所占据的中间地带将不复存在。”

4、[JavaScript 哈希算法速度比较](https://lemire.me/blog/2025/01/11/javascript-hashing-speed-comparison-md5-versus-sha-256/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202501/bg2025011918.webp)

MD5 和 SHA256 都是常用的哈希算法，本文探讨在 JavaScript 语言中，这两种哈希算法，谁的生成速度更快？答案可能跟你想的不一样。

5、[终端控制字符一览表](https://jvns.ca/blog/2024/10/31/ascii-control-characters/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202411/bg2024110405.webp)

作者做了一张图（上图），列出命令行可以使用的控制符快捷键（比如快捷键 Ctrl-C 是终止当前命令），一共33个。

6、[理查德·费曼加入我的创业公司](https://longnow.org/ideas/richard-feynman-and-the-connection-machine/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202607/bg2026071605.webp)

作者回忆著名物理学家理查德·费曼，曾经加入他的创业公司，一起开发超级计算机，有很多有趣的内容。

## 工具

1、[WhatCable](https://github.com/darrylmorley/whatcable)

![](https://cdn.beekka.com/blogimg/asset/202607/bg2026071510.webp)

macOS 的顶部菜单栏应用，可以显示当前插入电脑的 usb-c 电缆特征。

2、[amber](https://amber-lang.com/)

![](https://cdn.beekka.com/blogimg/asset/202607/bg2026071401.webp)

一种简化 Bash 语法的新语言，它的脚本可以编译成 Bash。

3、 [Ant](https://antjs.org)

![](https://cdn.beekka.com/blogimg/asset/202607/bg2026071402.webp)

一种轻量级的 JS/TS 语言运行时，好像是自己从头开始写的，二进制文件只有 8MB。

4、[屏译](https://github.com/ciddwd/overlay-translator)（Screen Translator）

![](https://cdn.beekka.com/blogimg/asset/202607/bg2026071404.webp)

开源安卓应用，实时屏幕翻译工具。（[@ciddwd](https://github.com/ruanyf/weekly/issues/10701) 投稿）

5、[TurboOCR](https://turboocr.com/)

![](https://cdn.beekka.com/blogimg/asset/202607/bg2026071406.webp)

使用 GPU 进行高速文字识别（OCR）的工具。（[@nataell95](https://github.com/ruanyf/weekly/issues/10706) 投稿）

另有一个纯本地的文字识别库 [light-ocr](https://github.com/arcships/light-ocr)，提供 JS/C++ API。（[@eric8810](https://github.com/ruanyf/weekly/issues/10714) 投稿）

6、[Visprex](https://visprex.com/)

![](https://cdn.beekka.com/blogimg/asset/202411/bg2024111013.webp)

该网站可以上传 CSV 数据文件，自动生成可视化图形。

7、[Loro](https://www.loro.dev/)

![](https://cdn.beekka.com/blogimg/asset/202311/bg2023111321.webp)

一个开源的 CRDT 的同步算法库，用来多人实时同步状态。

8、[File Wizard](https://github.com/LoredCast)

![](https://cdn.beekka.com/blogimg/asset/202510/bg2025100202.webp)

一个自托管的、基于 Web 的常见文件格式转换服务，还支持图像 OCR、音频转文字。

## AI 相关

1、[Oh My HuggingFace](https://github.com/oh-my-hf/ohmyhf)

![](https://cdn.beekka.com/blogimg/asset/202607/bg2026071405.webp)

非官方的 Hugging Face 开源跨平台客户端，用来浏览和下载模型、数据集等。（[@fzlzjerry](https://github.com/ruanyf/weekly/issues/10705) 投稿）

2、[pi-auto-approval](https://github.com/Europa2061/pi-auto-approval)

![](https://cdn.beekka.com/blogimg/asset/202607/bg2026071403.webp)

编程代理 Pi agent 的插件，自动批准低风险的权限确认，高风险依然会交给用户确认。（[@Europa2061](https://github.com/ruanyf/weekly/issues/10669) 投稿）

3、[GPT Crawler](https://github.com/BuilderIO/gpt-crawler)

这个工具将指定网站的内容，抓取成一个 JSON 文件，然后上传到 ChatGPT，从而生成该网站的聊天机器人，允许你跟该网站聊天。

4、[Tokenwiz](https://github.com/1rgs/tokenwiz)

![](https://cdn.beekka.com/blogimg/asset/202311/bg2023111305.webp)

一个模仿 OpenAI 将输入文本进行词元分解（tokenization）的开源实现。

## 资源

1、[Goto Onion](https://gotoonion.site/)

![](https://cdn.beekka.com/blogimg/asset/202607/bg2026071506.webp)

暗网 Tor 网站的网关，使得普通浏览器可以访问 Onion 网址。

2、[Fading Maize](https://www.fadingmaize.com/)

![](https://cdn.beekka.com/blogimg/asset/202607/bg2026071507.webp)

一个很有意思的网站，一支美国大学乐队在2001年录制了专辑，随后就解散了。

现在，他们让 AI 将当年的录音改成2026年的风格。该网站就将两种录音同时放出来，让大家比较。

![](https://cdn.beekka.com/blogimg/asset/202607/bg2026071508.webp)

音乐真是很神奇，20多年前的音乐，毫无时光的痕迹，吉他声仿佛还是昨天。

3、[迷宫算法](https://www.jamisbuck.org/mazes/)（Maze Algorithms）

![](https://cdn.beekka.com/blogimg/asset/202601/bg2026012505.webp)

这个网站收集各种迷宫生成算法。

## 图片

1、[海底环岛](https://visitfaroeislands.com/en/plan-your-stay/getting-around/world-first-under-sea-roundabout)

环岛一般都在交通繁忙的路口，但是在大西洋的法罗群岛，有全世界独一无二的海底环岛。

![](https://cdn.beekka.com/blogimg/asset/202607/bg2026071502.webp)

上图是法罗群岛的海底隧道示意图，在黄圈处，隧道一分为二，通向两个不同的岛屿。这里就建了一个海底环岛。

![](https://cdn.beekka.com/blogimg/asset/202607/bg2026071503.webp)

![](https://cdn.beekka.com/blogimg/asset/202607/bg2026071504.webp)

为了引起司机的注意，政府请了艺术家，将其画成水母的形状。

![](https://cdn.beekka.com/blogimg/asset/202607/bg2026071505.webp)

## 文摘

1、[AI 本应节省时间，减少工作量](https://decrypt.co/357527/ai-save-time-instead-created-new-kind-burnout)

人们本以为 AI 会节省时间，减少工作量，加州大学的一项调查发现，事实恰恰相反。AI 增加了工作量，让工作强度变大，使得人们产生职业倦怠。

![](https://cdn.beekka.com/blogimg/asset/202602/bg2026021615.webp)

**为什么 AI 不仅没有减少工作，反而增加了工作呢？** 原因可能有下面几点。

**（1）工作职责范围扩大**。产品经理现在开始编写代码，研究人员开始维护服务器，人们的工作职责不再那么分明，而变得模糊不清。员工们开始处理职责范围之外的工作，AI 让这种转变变得切实可行。

这产生了连锁反应。工程师们突然发现，自己需要审查、纠正和指导非程序员同事的代码，因为那些同事正在“氛围编码”（vibe coding）。

在自己专业以外进行工作自动化的人，实际上是给其他人带来了更多的工作。

**（2）工作/生活界限模糊化**。AI 的对话式界面让工作变得轻松便捷，不再有面对空白页面的无助感，也没有令人望而生畏的学习曲线。

因此，员工们开始在离开办公桌前（比如上厕所前）发送“快速提示”，让 AI 在他们离开期间处理一些琐事。许多人甚至在休息时间也输入提示词，让 AI 去跑。这些在非工作时间使用 AI 处理的工作累积起来，导致休息时间减少，工作时长大幅增加。

**（3）多任务处理激增**。由于 AI 给人一种错觉，任务可以在后台处理，因此员工被要求同时管理多个工作流程。

这样做表面上可以提升生产力，但实际上往往转化为不断切换注意力以及更长的任务清单。

**（4）以上因素的自我强化循环。** AI 让事情变得更简单，于是员工们做了更多事情，导致更加依赖 AI 来简化这些事情。如此循环往复，最终导致倦怠。

研究人员指出：“一些参与者表示，虽然他们感觉工作效率更高了，但并没有感觉轻松，反而感觉比以前更忙了。”

**（5）解决方法**。研究人员提出，为了解决 AI 带来的职业倦怠，公司应该制定有意识的对策，规范员工如何使用 AI。

1. 做出重要决定前，停一会手头的工作。
1. 安排工作顺序，以减少上下文切换。
1. 预留时间进行真正的人际交往。

## 言论

1、

如果你是太阳，我就是黑洞。

-- [史蒂芬·霍金](https://geohot.github.io//blog/jekyll/update/2026/05/03/punk-or-why-i-dont-stream.html)

2、

AI 模型的世界就像一个城市，里面有五个企业总部区域，以及一个中国城。

-- [《奇点越来越近了》](https://geohot.github.io//blog/jekyll/update/2026/05/03/punk-or-why-i-dont-stream.html)

3、

AI 是一个完全的黑箱，这意味着所谓的“AI 工程”或“提示工程”完全是骗局，任何声称能够以某种巧妙的方式操控黑箱的说法都是虚假的。

你无法探究 AI 的运行逻辑，它只是一种机器实现的“相信我，兄弟”。

-- [《AI 是一个糟糕的工具》](https://bytecode.news/posts/2026/07/user-submission-ai-is-a-bad-tool)

4、

我有一台面包机，它几乎包办一切：揉面、发酵、烘焙。我把原料倒进去，按下一个按钮，三个小时后面包就出炉了。

嗯，三年里我大概只用过这台机器两次。相反，我每周都会去超市买一条包装好的预切片面包。

这解释了为什么即使 AI 可以轻松生成代码，SaaS 公司仍远未走向衰落。

-- [《为什么便利总是胜出，以及为什么 SaaS 不会消亡》](https://www.joanwestenberg.com/p/the-bread-paradox-why-convenience)

## 往年回顾

[稳定币的博弈](https://www.ruanyifeng.com/blog/2025/07/weekly-issue-357.html)（#357）

[不要看重 Product Hunt](https://www.ruanyifeng.com/blog/2024/07/weekly-issue-307.html)（#307）

[黄仁勋的 Nvidia 故事](https://www.ruanyifeng.com/blog/2023/06/weekly-issue-257.html)（#257）

[汽车行业的顶峰可能过去了](https://www.ruanyifeng.com/blog/2022/05/weekly-issue-207.html)（#207）

（完）


