# 科技爱好者周刊（第 325 期）：VS Code 编辑器的下一站是 Zed？

这里记录每周值得分享的科技内容，周五发布。

本杂志[开源](https://github.com/ruanyf/weekly)，欢迎[投稿](https://github.com/ruanyf/weekly/issues)。另有[《谁在招人》](https://github.com/ruanyf/weekly/issues/5445)服务，发布程序员招聘信息。合作请[邮件联系](mailto:yifeng.ruan@gmail.com)（yifeng.ruan@gmail.com）。

## 封面图

![](https://cdn.beekka.com/blogimg/asset/202411/bg2024110513.webp)

温州江心屿是瓯江里面的一个小岛，最近完成了改造工程。（[via](http://4g.66wz.com/xw/system/2024/05/31/105637714.shtml)）

## VS Code 编辑器的下一站是 Zed？

程序员离不开编辑器，眼下最流行的代码编辑器肯定是 VS Code。

![](https://cdn.beekka.com/blogimg/asset/202411/bg2024110601.webp)

VS Code 其他都好，但有一个很大的缺点：性能。

它运行在 Electron 的沙箱里面，资源占用多，速度慢。我现在调用某些插件，就有明显的延迟。

它还有点臃肿，安装包 100MB，需要磁盘空间 500MB。

所以，当我听说有一个新的编辑器 [Zed](https://zed.dev/)，性能出众，功能强大，就立刻安装了，下面就是我的使用体会。

![](https://cdn.beekka.com/blogimg/asset/202411/bg2024110602.webp)

首先说一下，为什么 Zed 吸引我？

（1）它的作者是原来的 Atom 编辑器的作者，以及 Tree-sitter 解析库的作者。

（2）它基于 Rust 语言，充分利用多核 CPU 和 GPU，追求极致性能，速度极快。

（3）它内置了 VS Code 的很多插件功能，比如 LSP（语言服务器协议）、代码提示补全、多人实时编辑、AI 助手等。

（4）它的开发非常活跃，GitHub 仓库的星星已经达到了 49K。

安装后，我一打开就觉得非常清爽，极简主义的界面，布局跟 VS Code 类似，没有学习成本，可以直接上手。

![](https://cdn.beekka.com/blogimg/asset/202411/bg2024110603.webp)

它的速度真是快，不管什么操作，一点即开。用久之后，再用 VS Code 都不习惯了。

编程需要的功能，大部分开箱即用。如果没有的话，可以去[插件市场](https://zed.dev/extensions)找找。

有些功能，我觉得很实用。比如，它有一个大纲面板（下图左），列出当前脚本的所有函数，点击函数名可以跳转到函数实现。

![](https://cdn.beekka.com/blogimg/asset/202411/bg2024110604.webp)

它还可以添加参与人（必须有 GitHub 账号），让你跟多人实时协作、聊天。

![](https://cdn.beekka.com/blogimg/asset/202411/bg2024110605.webp)

参与者的头像显示在窗口右上角。

![](https://cdn.beekka.com/blogimg/asset/202411/bg2024110606.webp)

虽然它有上面这些优点，但也有一些难以忽视的问题。

（1）它不是真的跨平台，目前只有 Mac 版本最完善，Linux 版本我遇到了不少问题，Windows 版本官方暂未支持。

（2）很多地方还没来得及做，你经常会遇到一些小功能缺失，找不到解决方法。

（3）它的设置就是一个大的 JSON 文件，没有图形设置界面，动不动就要查文档。

（4）AI 助手只支持 OpenAI、Claude 和本地运行的 Ollama 模型。 

我的结论是，**它的表现非常出色，但没有完全准备好**，只适合那些看重性能、愿意自己解决问题的程序员。

总的来说，**Zed 是 VS Code 很好的替代品，奉行极简主义，不臃肿，内置功能完备**。明年的这个时候，它也许会让 VS Code 不再那么流行。

## ［本周软件］302.AI

面对层出不穷的 AI 模型，你会不会有一种想法，如果存在**一个统一的使用入口**该多好？

事实上，真有这样的产品。周刊以前介绍过一个网站 [302.AI](https://302.ai)，就是这种思路。

![](https://cdn.beekka.com/blogimg/asset/202411/bg2024111201.webp)

它的定位是“AI 应用超市”，**可以看作是一个适配层，适配了各种各样的 AI 模型**，让你都能通过它来使用。

你可以直接使用各种模型，也可以使用“[工具超市](https://302.ai/tools/)”预置的30多种 AI 应用，比如下图的“[AI 学术论文搜索](https://302.ai/tools/academic/)”。

![](https://cdn.beekka.com/blogimg/asset/202411/bg2024111301.webp)

它还提供 API 调用，通过它的服务器，调用各种模型的 API。

<u>它有试用额度，此后按照使用量收费</u>，一般是底层模型原始价格的五折。

最后，**它本周开源了，各种官网工具的源码都放出来了**，仓库地址 [github.com/302ai](https://github.com/302ai)。他们用 Next.js，你可以用来开发自己的 AI 应用。

## 科技动态

1、[34阶魔方](https://ruwix.com/blog/34x34x34-rubiks-cube-record/)

普通的魔方是3阶的，即长宽高各3个色块，但也有其他阶的魔方。

![](https://cdn.beekka.com/blogimg/asset/202411/bg2024110203.webp)

上图是2阶、4阶、5阶的魔方。

最近，有人用 3D 打印机做了一个世界最高阶的魔方，达到34阶。

![](https://cdn.beekka.com/blogimg/asset/202411/bg2024110204.webp)

这么大的魔方，转动起来很不方便，已经不适合用来游戏，而是适合摆弄许多奇特的造型。

![](https://cdn.beekka.com/blogimg/asset/202411/bg2024110205.webp)

![](https://cdn.beekka.com/blogimg/asset/202411/bg2024110206.webp)

随着 3D 打印的普及，做出更高阶的魔方也不是难事，但是缺乏实际意义。目前，量产的最高阶魔方是17阶。

2、[Ping 时钟](https://github.com/turingbirds/ping-clock)

ping 是一个命令行工具，用来显示本机到服务器的信号传输时间。

一位国外程序员突发奇想，制作了一个 Ping 时钟，在钟面上显示 ping 的耗时。

![](https://cdn.beekka.com/blogimg/asset/202411/bg2024110804.webp)

它的钟面有两根指针，长指针是每次 ping 的毫秒数，短指针是最长耗时。 

钟面下部是液晶显示屏，显示当前所在网络，以及目标服务器。

每次只要运行 ping 命令，就能很直观地看到，长指针不停地摆动，网速可视化了。

![](https://cdn.beekka.com/blogimg/asset/202411/bg2024110805.webp)

这个时钟的源码，已经开源了，使用 ESP32 芯片、一个微型电机和定制的 PCB 电路板。有电路基础的同学，完全可以自己动手制作。

3、[麻雀的新用途](https://www.abc.net.au/news/science/2024-07-18/sparrows-lead-poisoning-children-blood-levels-health-mining/104075894)

麻雀有什么用？澳大利亚科学家想出一个新用途。

![](https://cdn.beekka.com/blogimg/asset/202407/bg2024072113.webp)

澳大利亚是世界主要的铅生产国，有28个铅矿。铅会造成人体中毒，对儿童影响尤其大。

科学家一直寻找监控方法，能够测试环境的铅泄漏。他们想到了麻雀。

![](https://cdn.beekka.com/blogimg/asset/202407/bg2024072114.webp)

麻雀比人类，更早摄入环境中的化学物质。只要抓住麻雀，测一下它们的血铅，就能了解是否有铅泄漏，从而可以早期发出报警（下图）。

![](https://cdn.beekka.com/blogimg/asset/202407/bg2024072115.webp)

4、**其他**

（1）一位美国物理学家总结出[猫的行为方程](https://phys.org/news/2024-10-physicist-cat-reveal-equation-motion.html)，已知猫的质量和疲劳系数，可以算出猫从 t0 到 t1 的位移，该公式的目的是“唤起非专业人士对经典力学的兴趣”。

![](https://cdn.beekka.com/blogimg/asset/202411/bg2024110519.webp)

![](https://cdn.beekka.com/blogimg/asset/202411/bg2024110520.webp)

（2）CDN 服务商 [bunny.net](https://bunny.net/blog/introducing-bunny-edge-scripting-a-better-way-to-build-and-deploy-applications-at-the-edge/)，推出边缘函数功能，基于 Deno，可以备用。

![](https://cdn.beekka.com/blogimg/asset/202411/bg2024110802.webp)

## 文章

1、[如何简化 PATH 环境变量](https://blog.izissise.net/posts/env-path/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202410/bg2024100908.webp)

Linux 系统有一个环境变量 PATH，指定可执行文件的默认路径。本文告诉你，怎么简化这个变量，更容易管理。

2、[AppData 目录的作用](https://www.xda-developers.com/appdata/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202410/bg2024100909.webp)

一篇科普文章，Windows 11 有一个 AppData 目录，它有什么用。

3、[蓝牙版本的变化](https://www.androidauthority.com/bluetooth-versions-3488170/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202410/bg2024100910.webp)

本文介绍蓝牙协议如何进化，每个版本的特点是什么。

4、[业务逻辑不要放入数据库](https://www.infoworld.com/article/2269523/put-business-logic-in-the-application-not-the-database.html)（英文）

![](https://cdn.beekka.com/blogimg/asset/202410/bg2024100911.webp)

本文提出，数据库最好只用来存放数据，不要加入业务逻辑，让应用程序处理业务逻辑。

5、[SAML：技术入门](https://ssoready.com/docs/saml/saml-technical-primer)（英文）

![](https://cdn.beekka.com/blogimg/asset/202409/bg2024092802.webp)

一篇长文，介绍企业用的登录协议 SAML。开头部分是 SAML 简介，写得挺好，后面是技术细节，可以不看。

6、[质能公式与光速](https://profmattstrassler.com/2024/10/01/why-is-the-speed-of-light-so-fast-part-1/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202410/bg2024100502.webp)

一篇物理学科普长文，谈怎么理解质能公式 E=mc^2，为什么包含光速的平方。没有数学，我觉得很有启发。

## 工具

1、[PasteBar](https://github.com/PasteBar/PasteBarApp)

![](https://cdn.beekka.com/blogimg/asset/202407/bg2024073001.webp)

开源的桌面软件，用来管理剪贴板，可以搜索剪贴板历史，以及预设常用的粘贴项（比如地址），支持 Windows 和 Mac 系统。

2、[FastHTML](https://fastht.ml/)

![](https://cdn.beekka.com/blogimg/asset/202407/bg2024073003.webp)

一个 Python 的 Web 框架，Django 的替代品，用起来更简单。

3、[Kagi 翻译](https://translate.kagi.com/)

![](https://cdn.beekka.com/blogimg/asset/202411/bg2024110803.webp)

搜索引擎 Kagi 推出的翻译服务，类似于谷歌翻译。

4、[Star](https://star.conor.link/)

![](https://cdn.beekka.com/blogimg/asset/202411/bg2024110801.webp)

一个 Web 应用，在手机打开以后，它会利用手机的运动传感器，显示某一颗你指定的卫星相对你的方位。

5、[kkTerminal](https://github.com/zyyzyykk/kkTerminal)

![](https://cdn.beekka.com/blogimg/asset/202411/bg2024111010.webp)

一个开源的网页终端，在网页上通过 SSH 连入远程主机。（[@zyyzyykk](https://github.com/ruanyf/weekly/issues/5503) 投稿）

6、[ReactPress](https://github.com/fecommunity/reactpress)

![](https://cdn.beekka.com/blogimg/asset/202411/bg2024111302.webp)

一个基于 Next.js 的博客和 CMS 系统，查看 [demo 站点](https://blog.gaoredu.com)。（[@fecommunity](https://github.com/ruanyf/weekly/issues/5524) 投稿）

7、[PDFMathTranslate](https://github.com/Byaidu/PDFMathTranslate)

![](https://cdn.beekka.com/blogimg/asset/202411/bg2024110909.webp)

开源的命令行工具，使用 AI 翻译 PDF 文件，完整保留排版。（[@Byaidu](https://github.com/ruanyf/weekly/issues/5501) 投稿）

8、[dimmer](https://github.com/slc3a2/dimmer)

![](https://cdn.beekka.com/blogimg/asset/202411/bg2024110906.webp)

开源的 Chrome 浏览器插件，暗黑模式一键切换。（[@slc3a2](https://github.com/ruanyf/weekly/issues/5496) 投稿）

9、[ThriveX](https://github.com/LiuYuYang01/ThriveX-Blog)

![](https://cdn.beekka.com/blogimg/asset/202411/bg2024110907.webp)

一个开源的博客系统，基于 Next14 + Spring Boot。链接是前端仓库，另有[后端](https://github.com/LiuYuYang01/ThriveX-Service)和[控制台](https://github.com/LiuYuYang01/ThriveX-Admin)。（[@LiuYuYang01](https://github.com/ruanyf/weekly/issues/5491) 投稿）

10、[Trayce](https://trayce.dev/)

![](https://cdn.beekka.com/blogimg/asset/202407/bg2024073102.webp)

这个工具拦截本地开发环境中 Docker 容器发送和接收的 HTTP(S) 请求。

11、[ngtop](https://github.com/facundoolano/ngtop)

一个命令行工具，用来查询 nginx 日志。

12、[InputShare](https://github.com/BHznJNs/InputShare)

电脑连接安卓设备之后，这个工具可以把电脑的键鼠和剪贴板，共享给安卓设备，只支持 Windows。（[@BHznJNs](https://github.com/ruanyf/weekly/issues/5545) 投稿）

## 资源

1、[逆向工程教程](https://0xinfection.github.io/reversing/)（Reverse Engineering For Everyone）

![](https://cdn.beekka.com/blogimg/asset/202407/bg2024072601.webp)

面向初学者的逆向工程英文电子书，涵盖了 x86 和 ARM 架构。

2、[一站式 iframe 生成器](https://iframegenerator.top/)

![](https://cdn.beekka.com/blogimg/asset/202411/bg2024110908.webp)

HTML 的 iframe 元素有很多属性，这个工具网站可以查看所有属性值，并生成最终代码。（[@wincatcher](https://github.com/ruanyf/weekly/issues/5499) 投稿）

3、[Chromium 的命令行开关](https://peter.sh/experiments/chromium-command-line-switches/)

![](https://cdn.beekka.com/blogimg/asset/202407/bg2024073002.webp)

这个网页收集 Chromium（Chrome）浏览器的命令行开关，居然有1600多个。

4、[Typst 介绍](https://blog.jreyesr.com/posts/typst/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202410/bg2024101405.webp)

Typst 是一种排版工具，可以生成论文、小册子、表格等，功能类似于 LaTeX，但是写法类似于 Markdown，用起来相对简单。

## 图片

1、[犰狳化石](https://allthatsinteresting.com/glyptodon-fossils)

一个阿根廷农民发现，路边有四个奇怪的大土块。

![](https://cdn.beekka.com/blogimg/asset/202411/bg2024110901.webp)

后来经过生物学家辨认，这居然是四个巨型犰狳的化石，这种动物已经在一万年前灭绝了。

![](https://cdn.beekka.com/blogimg/asset/202411/bg2024110902.webp)

![](https://cdn.beekka.com/blogimg/asset/202411/bg2024110903.webp)

犰狳是一种看上去很像穿山甲的动物，外面披着一身铠甲。下面就是现代小型犰狳的照片。

![](https://cdn.beekka.com/blogimg/asset/202411/bg2024110904.webp)

巨型犰狳的灭绝原因，有一种说法是跟人类有关，古人想要它们的铠甲。

2、[因纽特人的雪镜](https://kottke.org/21/11/arctic-snow-goggles)

雪地和冰面会强烈反射阳光，导致视力受损，这叫做“雪盲症”。因此，雪地活动都需要佩戴墨镜或保护镜。

因纽特人是美洲北极圈的原住民，已经在那里定居了几百年。他们在原始条件下，怎么防止雪盲症呢？

原来他们使用各种材料（骨头、木头、鲸须）制作雪镜，戴在眼睛前，只留出一条窄缝观察外界。

![](https://cdn.beekka.com/blogimg/asset/202112/bg2021120403.webp)

![](https://cdn.beekka.com/blogimg/asset/202112/bg2021120404.webp)

这种眼镜限制了进光量，保护了佩戴者的眼睛，也有助于提高视力。它就像针眼相机一样，狭缝聚焦光线，使得远处的物体看起来更清晰。

![](https://cdn.beekka.com/blogimg/asset/202112/bg2021120405.webp)

## 文摘

1、[语音 UI（大多数情况下）很糟糕](https://shubhamjain.co/2024/04/16/voice-is-bad-ui/)

AI 的发展，使得语音可以成为用户界面，这称为“语音 UI”。

![](https://cdn.beekka.com/blogimg/asset/202411/bg2024111401.webp)

有人认为，语音 UI 将是终极 UI，因为当你可以直接说出命令，为什么还要费心使用键盘和鼠标呢？

我不相信语音会成为通用界面，原因有很多。

**（1）声音本质上无法表达抽象思想**。很多时候，我们的大脑里面只有零碎的意识，很难找到正确的词语，将它们表达出来。

**（2）语音让很多事情变得更难而不是更容易**。理论上，说出“叫一辆网约车去机场”似乎是完成任务的最简单方法，但是如果你还有其他要求，比如指定车型和限价，口头表达就会很麻烦。

**（3）语音侵犯隐私**。你说出指令的时候，愿意被别人听到吗？

**（4）视觉 UI 可以展示软件的局限性，语音 UI 就不行**。很多事情，软件无法做到，视觉 UI 可以帮助我们了解软件的功能。如果没有视觉 UI，你很难发现软件不能做什么事。

**（5）用户不喜欢一直说话**。使用语音完成简单的任务是可以的，但要完成所有事情很快就会变得烦人，难道你要一直说个不停吗？

**（6）语音无法解决现实世界中的歧义**。语言表达可能存在大量歧义，无法通过纯语音界面轻松解决。人工智能可能无法正确理解你想要完成什么。

当然，视觉 UI 也有歧义，但是这会更困难，因为你的操作有视觉反馈。

## 言论

1、

美国的在线教育公司 Chegg，业务是帮助完成家庭作业。学生输入题目后，它会分发给印度的数千名承包商，让他们提供答案。

ChatGPT 诞生后，学生不再使用这个服务了，而是直接问 ChatGPT。Chegg 的股价已经下降了99%。

-- [《ChatGPT 如何击垮在线教育巨头》](https://www.wsj.com/tech/ai/how-chatgpt-brought-down-an-online-education-giant-200b4ff2)

2、

大多数哲学的目的，都是强化你的身心，让你学会，对于那些自己无法控制的事情要漠不关心、

-- [《禁欲主义》](https://www.rugu.dev/en/blog/linux-asceticism/)

3、

作为一个德国人，我每月支付的医保费用是1000欧元左右，另外还要支付差不多金额的个人所得税。但是，如果我停止工作，结婚并生1-2个孩子，我拿到的失业救济金 + 生育补助，比我现在的税后收入还要多。这完全是不可持续的，但政治家们没人谈论这些。

-- [Hacker News 读者](https://news.ycombinator.com/item?id=42070430)

4、

经常有人问我，为什么2019年决定将 Keras 库合并到 TensorFlow。

这不是我的决定，而是 TensorFlow 团队主管的决定。当时我是谷歌 L5 级员工，而他是 L8。如果我不同意这个决定，就需要从谷歌离职。

-- [弗朗索瓦·乔莱](https://news.ycombinator.com/item?id=42130881)（Francois Chollet），神经网络库 Keras 的作者，本周宣布从谷歌离职

5、

创业公司的最大风险不是失败，而是一种不敢尝试的文化。

-- [《容忍失败的领导者》](https://praachi.work/blog/failure-tolerant-leaders)

## 往年回顾

[棘手的 AI 版权](https://www.ruanyifeng.com/blog/2023/11/weekly-issue-278.html)（2023 #278）

[人类和人生的意义](https://www.ruanyifeng.com/blog/2022/10/weekly-issue-228.html)（2022 #228）

[家庭太阳能发电的春天](https://www.ruanyifeng.com/blog/2021/10/weekly-issue-178.html)（2021 #178）

[这个社会是否正在变成"赛博朋克"？](https://www.ruanyifeng.com/blog/2020/10/weekly-issue-128.html)（2020 #128）

（完）

