# 科技爱好者周刊（第 367 期）：Nano Banana 的几个妙用

这里记录每周值得分享的科技内容，周五发布。（**[通知] 下周十一假期，周刊休息。**）

本杂志[开源](https://github.com/ruanyf/weekly)，欢迎[投稿](https://github.com/ruanyf/weekly/issues)。另有[《谁在招人》](https://github.com/ruanyf/weekly/issues/7674)服务，发布程序员招聘信息。合作请[邮件联系](mailto:yifeng.ruan@gmail.com)（yifeng.ruan@gmail.com）。

## 封面图

![](https://cdn.beekka.com/blogimg/asset/202509/bg2025092501.webp)

香港举办“维港海上大巡游”，会在维多利亚港岸边，展示四个大型充气玩偶雕塑。这是正在运送充气玩偶。（[via](https://ztylez.com/life/play/2025/09/23/331873/)）

## Nano Banana 的几个妙用

上个月，谷歌发布了图像模型 Gemini 2.5 Flash Image（项目名 [Nano Banana](https://aistudio.google.com/models/gemini-2-5-flash-image)）。

![](https://cdn.beekka.com/blogimg/asset/202509/bg2025091305.webp)

谷歌称它是目前“**最先进的图像生成和编辑模型**”。

我试用后，感觉确实很强，而且免费使用，打开[官网](https://aistudio.google.com/prompts/new_chat?model=gemini-2.5-flash-image-preview)（下图）就能用。

![](https://cdn.beekka.com/blogimg/asset/202509/bg2025092111.webp)

（备注：如果你访问不了官网，周刊讨论区也有接入官方 API 的[第三方网站](https://github.com/search?q=repo%3Aruanyf%2Fweekly+nano+banana&type=issues)，不过大部分要收费。）

对于这个模型，网友发现了各种神奇的用法，有人甚至收集成了一个 [Awesome 仓库](https://github.com/PicoTrex/Awesome-Nano-Banana-images)。

![](https://cdn.beekka.com/blogimg/asset/202509/bg2025092113.webp)

我从这个仓库里面，挑了几个很实用的例子，分享给大家。需要说明的是，我想其他图像模型也能做这些事，大家可以试试。

### （1）人像处理

图像模型的最常见任务，一定是人像处理。我们先上传一张生活照片。

![](https://cdn.beekka.com/blogimg/asset/202509/bg2025091308.webp)

然后，让模型将其转成证件照，提示词如下。

> 请为照片里面的人物生成1寸证件照，要求白底，职业正装，睁眼微笑。

![](https://cdn.beekka.com/blogimg/asset/202509/bg2025091309.webp)

这个效果有点惊人啊。它意味着，人物的表情、发型、妆容、服饰、姿势都是可以改变的。

下面就是改变人物表情，让其侧脸对着镜头微笑。

![](https://cdn.beekka.com/blogimg/asset/202509/bg2025091319.webp)

![](https://cdn.beekka.com/blogimg/asset/202509/bg2025091320.webp)

改变人物的姿势，“将下面第二张图片的人物，改成第一张图片的姿势。”

![](https://cdn.beekka.com/blogimg/asset/202509/bg2025091316.webp)

![](https://cdn.beekka.com/blogimg/asset/202509/bg2025091317.webp)

![](https://cdn.beekka.com/blogimg/asset/202509/bg2025091318.webp)

照相馆以后危险了，肖像照、旅游照、集体照都可以交给 AI 了。

### （2）建筑处理

图像模型的另一个用途是家居装潢，要看家装效果图就让 AI 生成，更改装潢配色和家具，都是小 case。

下面是一个难度更高的例子，上传一张户型图，让它变成 3D 模型渲染图。

![](https://cdn.beekka.com/blogimg/asset/202509/bg2025091310.webp)

![](https://cdn.beekka.com/blogimg/asset/202509/bg2025091311.webp)

从照片提取建筑模型，也挺神奇。

![](https://cdn.beekka.com/blogimg/asset/202509/bg2025091323.webp)

![](https://cdn.beekka.com/blogimg/asset/202509/bg2025091324.webp)

### （3）包装处理

下面，让模型更改物品的包装，“将图二的漫画形象，贴到图一的包装盒，生成一张专业的产品照”。

![](https://cdn.beekka.com/blogimg/asset/202509/bg2025091313.webp)

![](https://cdn.beekka.com/blogimg/asset/202509/bg2025091314.webp)

![](https://cdn.beekka.com/blogimg/asset/202509/bg2025091315.webp)

![](https://cdn.beekka.com/blogimg/asset/202509/bg2025092112.webp)

书籍的封面、软件的包装盒，也可以同样生成。

### （4）地图处理

图像模型的另一个大市场是地图应用（地理信息），只不过还没想到可以收费的玩法。下面就是一个创新的用例。

上传一张地图，上面用箭头标注你选定的地点，让模型“生成沿着红色箭头看到的场景。”

![](https://cdn.beekka.com/blogimg/asset/202509/bg2025092114.webp)

![](https://cdn.beekka.com/blogimg/asset/202509/bg2025092115.webp)

它甚至可以从地形等高线图，生成红色箭头处的实景图。

![](https://cdn.beekka.com/blogimg/asset/202509/bg2025091326.webp)

![](https://cdn.beekka.com/blogimg/asset/202509/bg2025091327.webp)

## 科技动态

1、[超音速厨师刀](https://seattleultrasonics.com/products/c-200-ultrasonic-8-chefs-knife)

一家美国公司推出了超音速厨师刀。

![](https://cdn.beekka.com/blogimg/asset/202509/bg2025092107.webp)

它的刀柄上有一个按钮，按下后，刀锋就会进入超声波模式。

![](https://cdn.beekka.com/blogimg/asset/202509/bg2025092108.webp)

根据介绍，开启超声波后，刀刃每秒振动超过4万次，使刀具比实际锋利得多，会节省高达50%的切菜力气。

某些情况下，把它放在食物上，它会依靠振动发出的波，自动把食物切开。

![](https://cdn.beekka.com/blogimg/asset/202509/bg2025092109.webp)

这把刀内置了电池，所以还有配套的刀具充电器。

![](https://cdn.beekka.com/blogimg/asset/202509/bg2025092110.webp)

2、[粘土电路板](https://feministhackerspaces.cargo.site/Clay-PCB-Tutorial)

电路板是电子产品的基础。

一位国外网友，为了演示电路板并不是高深的产品，特别制作了一块粘土电路板。

![](https://cdn.beekka.com/blogimg/asset/202509/bg2025091901.webp)

他把全过程的照片都放上网，先采集泥巴，然后将其压平。

![](https://cdn.beekka.com/blogimg/asset/202509/bg2025091902.webp)

在上面挖出电路，然后进行烧制。

![](https://cdn.beekka.com/blogimg/asset/202509/bg2025091903.webp)

![](https://cdn.beekka.com/blogimg/asset/202509/bg2025091904.webp)

最后，装上铜线和电子元件，电路板就做好了。

![](https://cdn.beekka.com/blogimg/asset/202509/bg2025091905.webp)

![](https://cdn.beekka.com/blogimg/asset/202509/bg2025091906.webp)

3、[IT 行业的就业岗位](https://www.derekthompson.org/p/the-25-most-interesting-ideas-ive)

根据知名分析师玛丽·米克尔的 AI 报告，如果从 IT 行业中剔除 AI 相关岗位，美国 IT 行业的就业人数多年来一直处于持平或下降趋势。

![](https://cdn.beekka.com/blogimg/asset/202509/bg2025092303.webp)

上图中，蓝线是 IT 行业的总就业人数，绿线是剔除 AI 岗位的就业人数，中间的高峰是疫情期间。

这就是说，虽然 IT 行业本身一直在扩张，但是全部就业增长都发生在 AI 领域。

## 文章

1、[超越沙盒](https://bughunters.google.com/blog/6715529872080896/beyond-sandbox-domains-rendering-untrusted-web-content-with-safecontentframe)（英文）

![](https://cdn.beekka.com/blogimg/asset/202509/bg2025092116.webp)

如何在网页上安全地运行第三方代码？谷歌提出一个全新的解决方案 SafeContentFrame。

它是一个 JS 库，会将第三方代码加载到一个单独域名 googleusercontent.com 上面，再用 iframe 将其插入当前网页，这样就提供了最大限度的隔离。

2、[离线应用为什么尚未流行？](https://marcobambini.substack.com/p/why-local-first-apps-havent-become)（英文）

![](https://cdn.beekka.com/blogimg/asset/202509/bg2025092301.webp)

离线使用功能一直没有流行起来，作者认为，离线使用就相当于建立一个分布式系统，面临着复杂的同步问题，很难做对。

3、[Elasticsearch 不适合用作数据库](https://www.paradedb.com/blog/elasticsearch-was-never-a-database)（英文）

![](https://cdn.beekka.com/blogimg/asset/202509/bg2025092007.webp)

Elasticsearch 是目前主流的搜索服务，能否把它用作主要数据库？本文告诉你不可以，它不是为数据库而设计的。

4、[如何使用 Python 生成音频的文字稿](https://www.pavlinbg.com/posts/python-speech-to-text-guide)（英文）

![](https://cdn.beekka.com/blogimg/asset/202509/bg2025092302.webp)

一篇简单的入门教程，一步步教你自己写 Python 脚本，通过 Whisper 模型提取音频的文字稿。

5、[避免使用 @ts-ignore](https://evanhahn.com/ts-ignore-is-almost-always-the-worst-option/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202509/bg2025092406.webp)

TypeScript 的 @ts-ignore 标注，用来关闭下一行的所有报错。作者认为不应该使用它，宁愿改用 @ts-expect-error 标注或者 any 类型。

6、[Apple 的私有 CSS 属性，为网页添加“液态玻璃“效果](https://alastair.is/apple-has-a-private-css-property-to-add-liquid-glass-effects-to-web-content/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202509/bg2025092010.webp)

作者发现，苹果为 Safari 浏览器添加了一个没有公开的 CSS 属性，让网页元素呈现“液态玻璃”效果。

7、[如何调整 systemd 加快启动](https://www.xda-developers.com/systemd-tweaks-boost-boot-time/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202509/bg2025092403.webp)

一篇初学者教程，教你5个技巧，通过调整 systemd 设置，缩短启动时间。

## 工具

1、[gpu-kill](https://github.com/kagehq/gpu-kill)

![](https://cdn.beekka.com/blogimg/asset/202509/bg2025092201.webp)

显示 GPU 运行信息的一个工具，自带 Web 管理面板，支持 Nvidia/AMD/Intel/Apple 各种品牌。

另有一个在线 GPU 性能测试网站 [Volume Shader BM](https://www.volumeshader.dev/)。（[@BOS1980](https://github.com/ruanyf/weekly/issues/7804) 投稿）

![](https://cdn.beekka.com/blogimg/asset/202509/bg2025092410.webp)

2、[RustNet](https://github.com/domcyrus/rustnet)

![](https://cdn.beekka.com/blogimg/asset/202509/bg2025092011.webp)

监控网络流量的终端工具，会显示连接的详细信息，跨平台。

3、[PortNote](https://github.com/crocofied/PortNote)

![](https://cdn.beekka.com/blogimg/asset/202506/bg2025060114.webp)

一个自托管的仪表盘，列出被各种服务占用的本地端口。与 Compose 文件结合后，可以启动/停止 Docker 容器，参见[介绍文章](https://www.xda-developers.com/reasons-why-portnote-port-of-call-on-every-server/)。

4、[Atlas](https://github.com/karam-ajaj/atlas)

![](https://cdn.beekka.com/blogimg/asset/202509/bg2025092407.webp)

一个 Docker 容器，扫描当前网络，图形化显示网络节点信息。

5、[Midnight Commander](https://github.com/MidnightCommander/mc)

![](https://cdn.beekka.com/blogimg/asset/202506/bg2025060107.webp)

基于终端的文件管理器，支持 Linux 和 Mac。

另有一个类似的终端文件管理器 [Yazi](https://github.com/sxyazi/yazi)。

![](https://cdn.beekka.com/blogimg/asset/202509/bg2025092408.webp)

6、[frp-tunnel-cli](https://github.com/openapphub/frpc-cli)

内网穿透工具 [frp](https://gofrp.org/zh-cn/docs/overview/) 的一个客户端辅助 Bash 脚本，简化隧道的创建和管理。（[@openapphub](https://github.com/ruanyf/weekly/issues/7785) 投稿）

7、[Hamsterbase Tasks](https://github.com/hamsterbase/tasks)

![](https://cdn.beekka.com/blogimg/asset/202509/bg2025092101.webp)

开源的任务管理软件，支持 Web/手机/桌面各个平台，可以 Docker 部署。（[@CaryTrivett](https://github.com/ruanyf/weekly/issues/7792) 投稿）

8、[db-back-tool](https://github.com/iKeepLearn/db-back-tool)

网友自己写的 PostgreSQL/MySQL 数据库的备份工具，可以自动备份、加密、压缩数据库，并将备份文件上传至腾讯云 COS 或阿里云 OSS。（[@iKeepLearn](https://github.com/ruanyf/weekly/issues/7798) 投稿）

9、[X-CMD](https://github.com/x-cmd/x-cmd)

![](https://cdn.beekka.com/blogimg/asset/202509/bg2025092412.webp)

一个命令行工具集，一键启用 1000+ CLI 工具，跨平台，支持 AI 功能。（[@Zhengqbbb](https://github.com/ruanyf/weekly/issues/7806) 投稿）

## AI 相关

1、[Huxe](https://www.huxe.com/)

![](https://cdn.beekka.com/blogimg/asset/202509/bg2025092404.webp)

个人语音伴侣，生成类似播客的“每日简报”，供你收听，内容包括当日新闻、兴趣爱好、个人日历和邮件等。

它来自 NotebookLM 的主创人员，他们离开谷歌后的创业产品。目前免费使用，参见[介绍文章](https://www.xda-developers.com/huxe-app-official-launch/)。

2、[AIPex](https://github.com/AIPexStudio/AIPex)

![](https://cdn.beekka.com/blogimg/asset/202509/bg2025091908.webp)

周刊以前介绍过的一个开源 Chrome 插件，功能现在扩展了，可以通过 AI 进行浏览器自动化。（[@buttercannfly](https://github.com/ruanyf/weekly/issues/7783) 投稿）

3、[binglish](https://github.com/klemperer/binglish)

![](https://cdn.beekka.com/blogimg/asset/202509/bg2025092401.webp)

一个 Python 脚本，自动为 Windows 更换必应 Bing 每日壁纸，并在壁纸上添加“每日单词”，AI 生成单词解释和例句。（[@klemperer](https://github.com/ruanyf/weekly/issues/7800) 投稿）

4、[index-tts-lora](https://github.com/asr-pub/index-tts-lora)

网友基于 B 站开源的 Index-TTS 语音合成模型的微调模型，提升语音的韵律感和自然度。（[@asr-pub](https://github.com/ruanyf/weekly/issues/7789) 投稿）

5、[Neovate](https://github.com/neovateai/neovate-code)

![](https://cdn.beekka.com/blogimg/asset/202509/bg2025092411.webp)

基于终端的智能编码助手（Code Agent），可以看作是开源的 Claude Code。（[@xierenyuan](https://github.com/ruanyf/weekly/issues/7805) 投稿）

6、[FlyCut Caption](https://github.com/x007xyz/flycut-caption)

![](https://cdn.beekka.com/blogimg/asset/202509/bg2025092402.webp)

一个基于 Web 的 AI 视频字幕编辑工具，可以视频语音自动转文本，生成字幕，试用 [Demo](https://caption.flycut.co/en/tool)。（[@x007xyz](https://github.com/ruanyf/weekly/issues/7801) 投稿）

7、[mcpstore](https://github.com/whillhill/mcpstore)

![](https://cdn.beekka.com/blogimg/asset/202509/bg2025092005.webp)

一个 MCP 服务的管理工具，接入各种 MCP 服务器，自带 Web 管理面板。（[@whillhill](https://github.com/ruanyf/weekly/issues/7790) 投稿）

## 资源

1、[99个物理小实验](https://interactivetextbooks.tudelft.nl/showthephysics/Introduction/About.html)

![](https://cdn.beekka.com/blogimg/asset/202509/bg2025092003.webp)

一本在线的英文书籍，精选了荷兰中学物理的99个小实验，涉及各个领域（力、光、磁、波等等）。

2、[NPM 安全最佳实践](https://github.com/bodadotsh/npm-security-best-practices)

最近爆出了一系列 npm 软件包投毒事件，这个仓库收录了各种 npm 安全措施，分为使用者和发布者两大部分。

## 图片

1、**电动车原理**

网上流传的电动车原理图片。

![](https://cdn.beekka.com/blogimg/asset/202509/bg2025091907.webp)

2、[一道几何题](https://samjshah.com/2025/08/05/sangaku-puzzle-i-cant-solve/)

正方形里面有一个小圆，请问小圆的半径与正方形边长的关系是多少？

![](https://cdn.beekka.com/blogimg/asset/202509/bg2025092001.webp)

![](https://cdn.beekka.com/blogimg/asset/202509/bg2025092002.webp)

这道题好像很不容易，答案是正方形边长的 4/33。

## 文摘

1、[AI 编程只能解决70%的问题](https://addyo.substack.com/p/the-70-problem-hard-truths-about)

根据我的观察，公司里面的高级程序员和低级程序员，使用 AI 的方式是不一样的。

**高级程序员并不完全信任 AI 的输出，只是用 AI 加速项目**。他们一般会审查和重构 AI 生成的代码，对于 AI 的架构决策也是抱着怀疑的态度。

初级程序员更倾向于跳过审查和重构，全盘接受 AI 的输出，从而导致“纸牌屋式“的代码：看起来能发挥作用，一旦投入使用就会崩溃。

我不知道，AI 未来会不会替代程序员，但是现阶段，AI 编程还不能解决100%的软件问题，但已经可以解决70%的问题。这相当于，**AI 可以减轻高级程序员70%的工作量**。

剩下的30%，依然需要依靠程序员的经验和专业知识，而**初级程序员恰恰缺少的是这30%**。

所以，听起来可能违反直觉：AI 对高级程序员比对初级程序员帮助更大，更容易产生工作成果。

现阶段的 AI，更像团队中的一个非常有干劲的初级程序员，可以快速编写代码，但需要不断的监督和纠正。**你知道的越多，你就越能指导它。**

所以，AI 的正确用法是，高级程序员用它来加速他们已经知道如何做的事情，初级程序员用它来学习该做什么。

## 言论

1、

AI 会一直扩展，一直到大部分太阳的能量都被用于计算。

-- [马斯克最新访谈](https://t.wangbase.com/0ZKey)

2、

我认为，火星可以在30年内自给自足。每两年，行星会排成一条直线，你就可以出发去火星。所以，30年内大约有10到15个左右的火星出发窗口。

每次出发，运往火星的货物吨位会呈指数级增长，那么30年内，我们可以让火星自给自足。

-- [马斯克最新访谈](https://t.wangbase.com/0ZKey)

3、

软件业悄然兴起一种新的工作“氛围清理”（Vibe Coding cleanup），专门解决“氛围编程”导致的问题。这真是 AI 时代最大的讽刺：人类被雇来清理 AI 的垃圾。

-- [《氛围清理即服务》](https://donado.co/en/articles/2025-09-16-vibe-coding-cleanup-as-a-service/)

4、

AI 泡沫是很有可能的，但对于 Meta 这样的公司来说，更大的风险是犹豫不决。

如果我们最终为 AI 浪费了数千亿美元，显然非常不幸，但我实际上认为错过 AI 的风险更高。对于我们来说，风险不是过于激进，而是不够激进。

-- [扎克伯格](https://finance.sina.cn/7x24/2025-09-19/detail-infqzkhk9726343.d.html)

5、

今天的计算机是响应者（responder）：你让它做某事，它就会去做。下一阶段的计算机是“代理”（agent），它就像一个盒子里的小人，开始预测你想要什么。它不是帮助你，而是引导你处理大量的信息，就像你在盒子里有一个小伙伴。

-- [乔布斯](https://simonwillison.net/2025/Sep/18/steve-jobs/)，1984年的采访

## 往年回顾

[乒乓仓](https://www.ruanyifeng.com/blog/2024/10/weekly-issue-320.html)（#320）

["精益开发"的精益是什么？](https://www.ruanyifeng.com/blog/2023/09/weekly-issue-270.html)（#270）

[人工智能的机会在哪里](https://www.ruanyifeng.com/blog/2022/08/weekly-issue-220.html)（#220）

[软件订阅制的胜利](https://www.ruanyifeng.com/blog/2021/08/weekly-issue-170.html)（#170）

（完）

