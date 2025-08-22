# 科技爱好者周刊（第 362 期）：GitHub 工程师谈系统设计

这里记录每周值得分享的科技内容，周五发布。

本杂志[开源](https://github.com/ruanyf/weekly)，欢迎[投稿](https://github.com/ruanyf/weekly/issues)。另有[《谁在招人》](https://github.com/ruanyf/weekly/issues/7408)服务，发布程序员招聘信息。合作请[邮件联系](mailto:yifeng.ruan@gmail.com)（yifeng.ruan@gmail.com）。

## 封面图

![](https://cdn.beekka.com/blogimg/asset/202506/bg2025082101.webp)

中国首艘火箭回收船“星际归航”本月成功下水，它的40米x60米的甲板，将用于火箭在海上降落。该船的拥有者是民营航天公司“星际荣耀”。（[via](https://www.geekpark.net/news/352799)）

## GitHub 工程师谈系统设计

上周，我读到一篇文章，作者是 GitHub 的高级工程师[肖恩·戈德克](https://www.seangoedecke.com/)（sean goedecke）。

![](https://cdn.beekka.com/blogimg/asset/202508/bg2025081814.webp)

文章题目是[《我所知的良好的系统设计》](https://www.seangoedecke.com/good-system-design/)。

![](https://cdn.beekka.com/blogimg/asset/202508/bg2025081818.webp)

读完后，我觉得写得不错。GitHub 工程师总结经验，教大家设计一个良好的系统，不是空泛之谈。下面是我的一些摘录。

1、

程序设计是组装代码，系统设计是组装服务。

程序设计的组件是变量、函数、类等，系统设计的组件是服务器、数据库、缓存、队列、事件总线、代理等。

2、

如果一个系统很长时间不出错，它的设计就是良好的。

如果你进一步看了代码，脱口而出：“哈，这比我想的要简单”，或者“这个部分不用我操心，即使出问题也容易解决”，它的设计就是优秀的。

3、

良好的系统设计，总是从一个有效的简单系统发展而来。千万不要从零开始设计一个复杂的系统。

4、

系统设计的难点在于状态。尽量采用无状态组件，最小化“有状态组件”的数量。

状态的复杂性在于，你无法简单地重启服务。一旦出错，往往需要手动修复状态。

5、

状态需要保存在数据库。数据库是最重要的系统组件，用来管理状态。

数据库的设计目标是每张表易于理解：打开看一下表结构，就能大致了解存储的数据内容及其原因。

千万不要采用复杂的表结构（也就是数据结构），会给代码带来极大的复杂性和性能约束。

6、

数据库往往是系统瓶颈，因为每个页面请求可能要调用数十次、数百次数据库，而且是按顺序调用。

为了避免瓶颈，数据库可以做成一个写入节点和多个只读副本。数据查询都发往只读副本，数据写入发往写入节点。

写入节点与只读副本之间，存在数据复制延迟。如果更新一条记录后，你需要立即读取它，那么可以将数据放入内存，写入数据库成功后从内存读取。

7、

耗时的操作要拆分出来，放在后台作业（即系统外部的单独服务），排队完成。

后台作业主要分成两个组件：一个队列服务，一个作业运行器（从队列中获取任务并执行）。

队列任务的软件，可以用 Redis（需要尽快执行的任务），也可以用数据库（不着急的任务）。

8、

如果数据的生成速度和读取速度不匹配，经典解决方案就是缓存。

缓存的最简单做法，就是把数据保存在内存，否则就使用专门的键值存储软件（比如 Redis 或 Memcached），后者的好处是多个服务器可以共享缓存。

初级工程师希望缓存所有内容，而高级工程师希望尽量少用缓存。因为缓存是状态的来源，不可避免需要校验状态和处理状态过期。

9、

除了缓存和后台作业，大型系统通常还有事件中心，一般用的是 Kafka。

事件中心也是一个队列，存放的是“某件事发生了”的消息。比如，用户注册触发了“新帐户创建”事件，该事件就放入事件中心，然后由事件中心去通知订阅该事件的多个服务：发送欢迎电子邮件、设置个人空间等等。

事件中心适用于，发送事件的代码不关心其他服务如何处理事件，或者事件量很大且对响应时间不太敏感。

不要过度使用事件，很多时候，更简单的做法是让一个服务请求另一个服务的 API。

为了便于除错，所有日志最好都放在一起，你可以立即看到另一个服务的响应。

10、推拉

如果数据需要传送到多处，有拉取（pull）和推送（push）两种选择。

一般来说，拉取比较简单（比如大多数网站采用的轮询），推送更节省资源，不需要用户主动请求数据，一旦后端数据发生变化，服务器主动将数据推送给每个客户端。

如果你确实需要向100万个客户端提供最新数据（就像 GMail 那样），应该采用推送还是拉取？这要视情况而定。如果采用推送，就要把每次推送放入一个事件队列，并让一大群事件处理器从队列中拉取数据并推送。如果采用拉取，就要部署一堆（比如100台）快速的只读缓存服务器，处理所有读取流量。

## 谷歌的两个 AI 新产品

谷歌本周公开了两个新产品。

1、[Imagen 4 模型](https://aistudio.google.com/prompts/new_image)

![](https://cdn.beekka.com/blogimg/asset/202508/bg2025081708.webp)

这是谷歌最新的“文生图”模型，可以在官网[免费使用](https://aistudio.google.com/prompts/new_image)，参见[介绍文章](https://developers.googleblog.com/en/announcing-imagen-4-fast-and-imagen-4-family-generally-available-in-the-gemini-api/)。

我觉得，图片生成速度很快，效果相当好（比如下图“机器人拿着一块红色滑板”）。

![](https://cdn.beekka.com/blogimg/asset/202508/bg2025081707.webp)

2、[Learning About](https://learning.google.com/experiments/learn-about/signup)

![](https://cdn.beekka.com/blogimg/asset/202508/bg2025081805.webp)

Learning About 是谷歌的[新型学习平台](https://learning.google.com/experiments/learn-about?src=signup)，使用 AI 生成学习教程。

先输入你想要学习的主题，比如 Java 语言。

![](https://cdn.beekka.com/blogimg/asset/202508/bg2025081806.webp)

它会返回一篇简单的教程，

![](https://cdn.beekka.com/blogimg/asset/202508/bg2025081807.webp)

除了总体介绍，里面还会列出各种学习主题，可以进一步深入学习。

![](https://cdn.beekka.com/blogimg/asset/202508/bg2025081808.webp)

## 科技动态

1、英国内政部宣布，英国的警车将加装[面部识别系统](https://news.sky.com/story/facial-recognition-vans-to-be-rolled-out-across-police-forces-in-england-13410613)。

![](https://cdn.beekka.com/blogimg/asset/202508/bg2025081815.webp)

警车一边开，一边扫描路上行人的面孔，跟警方的数据库比对。如果发现可疑人士，就发出警报。

据称，该技术在伦敦试运行期间，12个月内已抓到了580名嫌疑人。

2、很多人喜欢旅行时邮寄明信片，作为纪念。

但是，明信片需要手写，而且只能传递文字，在手机时代显得很落伍。

![](https://cdn.beekka.com/blogimg/asset/202508/bg2025081302.webp)

一家美国公司最近推出了 [Keeps](https://www.sendkeeps.com/)（上图）。用户在它的网站，上传照片，并留下一段语音（下图）。

![](https://cdn.beekka.com/blogimg/asset/202508/bg2025081303.webp)

它会把照片打印成明信片，背后是一个二维码，然后把明信片寄给你指定的收件人。对方收到后，手机扫描二维码，就能听到你留下的语音。

3、维基百科的条目，有各种语言的版本。你知道最多语言的条目，是哪一篇吗？

出乎意料，居然是一个名不见经传的艺术家，名叫[大卫·伍德沃德](https://en.wikipedia.org/wiki/Wikipedia:Wikipedia_Signpost/2025-08-09/Disinformation_report)（David Woodard）。

![](https://cdn.beekka.com/blogimg/asset/202508/bg2025081304.webp)

他的条目居然有335种语言版本，是所有条目中最多的。

他的大部分语言版本都是一个叫做 Swmmng 的用户创建的，而且 IP 地址也一样，时间跨度持续了十多年。

很显然，这是一起自我推销行为，这个艺术家为了出名，为自己生成各种语言的维基百科条目。现在，他的大部分语言版本已被删除，只留下20种语言。

## 文章

1、[GitHub Models 的免费 AI 服务](https://github.blog/ai-and-ml/llms/solving-the-inference-problem-for-open-source-ai-projects-with-github-models/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202508/bg2025082008.webp)

我刚刚知道，GitHub 提供免费的 AI 模型调用，有 GPT-4o、DeepSeek-R1、Llama 3 等模型，不过有用量限制。

2、[用 JavaScript 生成迷宫](https://jrsinclair.com/articles/2025/joy-of-immutable-data-recursion-pure-functions-javascript-mazes/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202508/bg2025082006.webp)

本文用通俗的语言，介绍一种生成迷宫的简单算法，给出 JS 的实现。

3、[Cloudflare 不是 CDN](https://magecdn.com/blog/2025/08/11/cloudflare-not-a-cdn/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202508/bg2025081816.webp)

Cloudflare 提供无限流量的免费 CDN，那么为什么它还有收费的 CDN？本文告诉你，除了流量，CDN 还有其他指标。

4、[Git 如何处理大文件](https://tylercipriani.com/blog/2025/08/15/git-lfs/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202508/bg2025081713.webp)

几十 MB 的大文件，不适合放入 Git 仓库。如果一定要放，要使用一个扩展 Git LFS。但是它不太好用，作者提出改进建议。

5、[10个有用的 VS Code 插件](https://www.xda-developers.com/vs-code-extensions-i-cant-live-without/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202505/bg2025052504.webp)

作者介绍10个他已经离不开的 VS Code 插件。

6、[TCP 初始拥塞窗口的问题](https://jeclark.net/articles/tcp-initcwnd/?tag=performance)（英文）

![](https://cdn.beekka.com/blogimg/asset/202508/bg2025081706.webp)

TCP 协议有一个“拥塞窗口”的设计，会根据网络状况，自动调整发送数据包的数量。本文通俗地解释这个概念，并提出改进的方案。

## 工具

1、[doxx](https://github.com/bgreenwell/doxx)

![](https://cdn.beekka.com/blogimg/asset/202508/bg2025081809.webp)

终端查看 docx 文件的命令行工具。

2、[IntraScribe](https://github.com/weynechen/intrascribe)

![](https://cdn.beekka.com/blogimg/asset/202508/bg2025081601.webp)

面向企事业单位内网环境的一个“语音转文字”的管理协作平台。（[@weynechen](https://github.com/ruanyf/weekly/issues/7542) 投稿）

3、[P2P Remote Desktop](https://github.com/miroslavpejic85/p2p)

![](https://cdn.beekka.com/blogimg/asset/202508/bg2025081602.webp)

一个开源的 Windows 远程桌面工具，直接运行可执行文件打开远程桌面，无需配置和安装。（[@miroslavpejic85](https://github.com/ruanyf/weekly/issues/7547) 投稿）

4、[CuteClock](https://github.com/AkenClub/CuteClock)

![](https://cdn.beekka.com/blogimg/asset/202508/bg2025081703.webp)

一个开源硬件项目，基于 ESP8266 的智能时钟，可以显示时间和天气，支持小爱同学语音控制，自带 Web 和小程序客户端。（[@AkenClub](https://github.com/ruanyf/weekly/issues/7553) 投稿）

5、[CleanYourMac](https://github.com/GitDzreal93/clean-your-mac)

![](https://cdn.beekka.com/blogimg/asset/202508/bg2025081704.webp)

开源的 Mac 应用，智能清理工具，使用 AI 分析要删除的文件。（[@GitDzreal93](https://github.com/ruanyf/weekly/issues/7555) 投稿）

6、[Next QR Code Generator](https://github.com/chromium-style-qrcode/next-qrcode-generator)

![](https://cdn.beekka.com/blogimg/asset/202508/bg2025081801.webp)

Firefox 浏览器的开源插件，为页面生成类似 Chrome 的二维码。（[@liuliangsir](https://github.com/ruanyf/weekly/issues/7563) 投稿）

7、[Translator 快速翻译](https://github.com/AnYi-0/Translator)

![](https://cdn.beekka.com/blogimg/asset/202508/bg2025081802.webp)

Chrome 浏览器的离线翻译插件，基于浏览器新的 Translator API 和 Language Detector API，不用网络也能翻译。（[@AnYi-0](https://github.com/ruanyf/weekly/issues/7562) 投稿）

8、[Jupyter Notebook 转换网站](https://ipynbtopdf.net/)

![](https://cdn.beekka.com/blogimg/asset/202508/bg2025082003.webp)

这个网站可以将 ipynb 文件转化为 PDF、HTML 和 Python。（[@CurioChen77](https://github.com/ruanyf/weekly/issues/7587) 投稿）

9、[Docker Pull Script](https://github.com/luckfu/docker_pull)

一个 Python 脚本，用于从指定镜像源下载 Docker 镜像，支持并发下载、智能缓存（layer 增量更新）。（[@luckfu](
https://github.com/ruanyf/weekly/issues/5931#issuecomment-3205330268) 投稿）

10、[Make Graph](https://makegraph.app/editor)

![](https://cdn.beekka.com/blogimg/asset/202506/bg2025082102.webp)

在线图表制作网站，支持主流图表类型，可导出 SVG。（[@bimohxh](https://github.com/ruanyf/weekly/issues/7597) 投稿）

另有一个类似工具 [ChartFromText](https://chartfromtext.com/)，输入数据，在线生成各种图表。（[@StevenWuHao](https://github.com/ruanyf/weekly/issues/7601) 投稿）

![](https://cdn.beekka.com/blogimg/asset/202506/bg2025082104.webp)

## AI 相关

1、[OpenAI Progress](https://progress.openai.com/)

![](https://cdn.beekka.com/blogimg/asset/202508/bg2025081709.webp)

OpenAI 的官方项目，展示 AI 的发展历程：每一年，同样的提示语，不一样的输出。

2、[MCP Playground](https://mcpso.cc/kchat/index.html)

![](https://cdn.beekka.com/blogimg/asset/202508/bg2025081701.webp)

这个 Web 应用可以用作 MCP 客户端，指定 AI 模型和 MCP 服务器，在线使用。（[@mcpexplorer](https://github.com/ruanyf/weekly/issues/7550) 投稿）

3、[Coro Code](https://github.com/Blushyes/coro-code)

![](https://cdn.beekka.com/blogimg/asset/202508/bg2025081803.webp)

基于终端的 AI 编码代理，Claude Code 的开源替代品。（[@Blushyes](https://github.com/ruanyf/weekly/issues/7561) 投稿）

4、[Claude Code Status Bar Monitor](https://github.com/leeguooooo/claude-code-usage-bar)

![](https://cdn.beekka.com/blogimg/asset/202508/bg2025082005.webp)

Claude Code 的插件，实时显示使用量和重置时间等信息。（[@leeguooooo](https://github.com/ruanyf/weekly/issues/7588) 投稿）

## 资源

1、[中小学语文示范诵读库](https://zedex.github.io/mandarin-reading-resource/)

![](https://cdn.beekka.com/blogimg/asset/202508/bg2025081705.webp)

中央人民广播电台[中小学语文示范诵读库](https://edu.cnr.cn/eduzt/ywkwsfsd/)的 Web 前端，课文按年级、学期分类。（[@ZedeX](https://github.com/ruanyf/weekly/issues/7556) 投稿）

2、[在线硬件测试平台](https://volumeshader.org/zh)

![](https://cdn.beekka.com/blogimg/asset/202508/bg2025081702.webp)

网页测试各种硬件（GPU、屏幕、网络、摄像头、声音、鼠标、键盘）。（[@linhuaqian](https://github.com/ruanyf/weekly/issues/7552) 投稿）

3、[业余无线电执照考试模拟](https://github.com/AlliotTech/ham-exam-web)（2025 题库）

![](https://cdn.beekka.com/blogimg/asset/202508/bg2025082002.webp)

基于官方最新题库构建的在线模拟与练习的 Web 应用。（[@AlliotTech](https://github.com/ruanyf/weekly/issues/7585) 投稿）

4、[Citywalki](https://www.citywalki.com)

![](https://cdn.beekka.com/blogimg/asset/202508/bg2025081804.webp)

这个网站让你感受在世界200多个城市步行/开车/飞无人机。选择城市和移动方式后，它会全屏播放相应的 Youtube 视频，体验不错。

## 图片

1、[滚动时间最长的滚轮胎](https://kottke.org/25/08/roll-on-you-crazy-tire)

推荐 Youtube 的[一个视频](https://www.youtube.com/watch?v=tLpQ5bcxouw)。

一群艺术家爬上智利最高的沙丘之一，在上面扔下一只轮胎，用无人机全程拍摄，看看它会滚动多久。

![](https://cdn.beekka.com/blogimg/asset/202508/bg2025081710.webp)

轮胎在沙漠里，差不多滚动了三分钟，视频就是这三分钟的全程滚动，非常壮观和纾压。

![](https://cdn.beekka.com/blogimg/asset/202508/bg2025081711.webp)

![](https://cdn.beekka.com/blogimg/asset/202508/bg2025081712.webp)

## 文摘

1、[沃兹尼亚克的故事](https://daringfireball.net/linked/2025/08/15/woz-on-slashdot)

今年8月11日，是苹果公司联合创始人史蒂夫·沃兹尼亚克 (Steve Wozniak) 75 岁的生日。

![](https://cdn.beekka.com/blogimg/asset/202506/bg2025082103.webp)

网络论坛 Slashdot 转载了新闻媒体关于他的生日报道。有人留言，惋惜地说，如果他没有卖掉苹果股票，早就是世界数一数二的富翁了。

沃兹尼亚克本人看到这条留言，在下面回复了一段话。

> “我卖掉和捐赠了所有苹果股票，原因是财富和权力不是我生活的目的。
>
> 我更希望自己拥有快乐和幸福。我资助了圣何塞（我出生在那里）的许多博物馆和艺术团体，他们还以我的名字命名了一条街道。
>
> 二十年来，我一直公开演讲，收入可能达到1000万美元。这足够我用了。“

这段话令人想起一本介绍苹果公司历史的书籍，里面曾经提到沃兹的故事。

从学生时代起，他就对自己的财富漫不经心。后来有钱了，也依然如此。

他从不记录自己的开销，也懒得听取理财建议。别人寻求帮助时，他经常当场开出支票。

与乔布斯严格保管自己的苹果股票不同，他送给了父母、姐姐和弟弟400万美元股票，送给了朋友200万美元股票。父亲在他车里捡到过25万美元的未兑现支票，感叹说：“像他这样的人不应该有那么多钱。”

有一次，他来到苹果公司大声宣布：“我的律师建议多元化投资，所以我刚刚买下了一家电影院。”但这件事后来引起了一些麻烦。这家电影院位于圣何塞东区贫民窟，放映了一部黑帮电影，引发了社区的抗议。他参加了几次社区会议，听取了当地居民的意见，承诺他的剧院不会放映暴力或色情电影，然后他在空荡荡的、黑暗的剧院里度过了几个下午，坐着不停看电影，扮演审查员的角色。

## 言论

1、

我计划写一本 Gleam 编程语言的书。但是，AI 已经能非常清晰地解释 Gleam 了，而且还能回应读者的任何要求。

虽然我自信，自己目前写得要比 AI 好，但是实在没有理由，说服自己去这样做。你花数百小时写书，赚到的钱根本不值得这样付出。

有了 AI，我不知道，人们以后写书的动力是什么，大概只会为了乐趣而写作。

-- [《AI 引发的身份危机》](https://dusty.phillips.codes/2025/06/08/my-ai-driven-identity-crisis/)

2、

让我难以抗拒的是，与中国打交道比与世界其他任何地方打交道都容易得多。我给中国某人发邮件，对方肯定会在24小时内回复，更有可能在4小时内。

给一家欧盟或美国公司发邮件，通常要等上好几天才能收到回复。在与中国公司打交道时，我从未见过这种情况，一次也没有。而且，他们的 B2B 大型电商平台几乎总是提供全天候在线客服和采购支持。

-- [Hacker News 读者](https://news.ycombinator.com/item?id=44936016)

3、

AI 不会减少你掌握新技能所需要付出的努力，只会让你产生不必学习就已经学会的错觉。 

-- [《AI 让人产生虚假的掌控感》](https://playtechnique.io/blog/ai-doesnt-lighten-the-burden-of-mastery.html)

4、

可靠、透明的程序通常不符合程序设计者的利益。

-- [尼克劳斯·维尔特](https://en.wikiquote.org/wiki/Niklaus_Wirth)（Niklaus Wirth），计算机科学家，图灵奖得主

## 往年回顾

[一份谷歌离职报告](https://www.ruanyifeng.com/blog/2024/08/weekly-issue-315.html)（#315）

[WiFi 的后面是 LiFi](https://www.ruanyifeng.com/blog/2023/08/weekly-issue-265.html)（#265）

[互联网最喜欢的行为模式](https://www.ruanyifeng.com/blog/2022/07/weekly-issue-215.html)（#215）

[全端 App 的时代](https://www.ruanyifeng.com/blog/2021/07/weekly-issue-165.html)（#165）

（完）

