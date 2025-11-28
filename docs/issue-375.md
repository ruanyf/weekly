# 科技爱好者周刊（第 375 期）：一扇门的 Bug

这里记录每周值得分享的科技内容，周五发布。

本杂志[开源](https://github.com/ruanyf/weekly)，欢迎[投稿](https://github.com/ruanyf/weekly/issues)。另有[《谁在招人》](https://github.com/ruanyf/weekly/issues/8003)服务，发布程序员招聘信息。合作请[邮件联系](mailto:yifeng.ruan@gmail.com)（yifeng.ruan@gmail.com）。

## 封面图

![](https://cdn.beekka.com/blogimg/asset/202511/bg2025112516.webp)

苏州当代美术馆即将开放，十个展馆的屋顶连成一片，象征着江南民居的瓦片屋檐。（[via](https://www.archiposition.com/items/29335ee2bf)）

## 一扇门的 Bug

最离奇的软件 Bug，你听说过哪些？

[下面这个](https://mastodon.gamedev.place/@TomF/115589875974658415)是我本周看到，绝对可以排进史上前十名。

我把它译出来，跟大家分享，以下是第一人称的叙述：

![](https://cdn.beekka.com/blogimg/asset/202511/bg2025112518.webp)

2013年，我在 Valve 公司从事游戏开发。

![](https://cdn.beekka.com/blogimg/asset/202511/bg2025112201.webp)

当时，第一代虚拟现实 VR 头盔 Oculus DK1 刚刚发售。公司决定为这款头盔移植游戏，让我来移植，搞清楚 VR 的游戏环境。

![](https://cdn.beekka.com/blogimg/asset/202511/bg2025112202.webp)

我就选了2004年我们公司开发的《半条命2》来移植。

![](https://cdn.beekka.com/blogimg/asset/202511/bg2025112203.webp)

移植了一个片段后，我们发现实际效果很好，就决定移植整个游戏，并且发布了发售预告。

移植过程中，我试玩了很多片段，但没有从头到尾玩一次。

等到移植完成，就在发售前夕，我决定完整玩一次，如果发现有什么问题，就写在发布说明里面。

我心想，应该不会有大问题，毕竟这个游戏已经发售10年了，无数人玩过，反响良好。

但是，万万没有想到，我居然遇到了一个重大 Bug。

![](https://cdn.beekka.com/blogimg/asset/202511/bg2025112205.webp)

游戏的开头部分，玩家来到火车站，一个守卫让你进去一个房间。很奇怪，房间的门是关着的，你进不去，就……卡住了。

你没死，就是哪儿也去不了。前面的门关着，你进不去，也退不出去，身后的大门已经关上了。你被困在一个走廊里，旁边有个守卫，无路可走。真是奇怪。

游戏的剧情是，你必须进入这个房间，才能往下玩。你又去找守卫，他指着锁着的门，仅此而已，你被困住了。

我上网查了视频，心想自己是不是记错了。没错，门应该是自动打开的，你走进去就行了，但是……现在这扇门却关了！

![](https://cdn.beekka.com/blogimg/asset/202511/bg2025112206.webp)

我心想完蛋了，这游戏没法发布了。

我赶忙联系了其他人，包括一些十年前参与这个游戏开发的人。他们测试后，都说确实有问题，而且在非 VR 模式下也一样，门也是关着的，所以肯定不是我移植弄坏的。但没人知道原因，因为代码根本没改过。

有人甚至追溯到游戏的原始源代码，编译了最初发售时的游戏版本——结果发现，那个原始版本也坏了，门也是关着的。

这怎么可能？大家慌了，这意味着这个 Bug 十年前就存在，但当年编译为什么没出现，十年后重新编译就出现了，这到底什么回事？

在花了大约一天时间，重新使用当年的调试和回放工具之后，一位同事弄明白了哪里出了问题。

如果仔细观看游戏，你会发现这扇门有一瞬间，其实自动解锁并打开了，但是房间里还有第二个守卫站在门后。这个守卫站得离门非常近，门打开的一瞬间会轻轻碰到守卫的脚趾，然后又弹回，重新关上，并自动上锁。由于游戏没有考虑怎么处理这种情况并重新打开门，所以游戏就卡住，你无法前进了。

![](https://cdn.beekka.com/blogimg/asset/202511/bg2025112207.webp)

一旦弄明白怎么回事，解决方法就很简单。我们把守卫往后移大约一毫米，门就很顺利自动打开了。

现在我们可以发布游戏了。但是，问题还是没有彻底解决。为什么这个游戏当初没有出现这个 Bug，原版里守卫的脚趾也挡着门啊？为什么十年后重新编译，Bug 就出现呢？或者说，Bug 其实一直都在，为什么十年前这扇门没有关上呢？

于是，一场旷日持久的漏洞搜寻就此展开。

我们终于发现了答案，就是老生常谈的浮点运算。

《半条命2》于2004年发布，当时编译用的是较旧的8087或 x87 数学指令集。这些指令集的浮点数精度五花八门，有些是32位，有些是64位，有些是80位，不同的代码段使用了不同的精度。

十年后的2013年，SSE 指令集已经成为所有 x86 CPU 的标准配置，编译器默认使用 SSE，它有明确的精度，根据代码需求使用32位或64位，是可以预测的。

真相就是，十年前编译用了32位精度，现在用了64位，小数点的差异造成了几毫米的误差，让守卫的脚趾碰到了门。

好了，现在玩家终于可以走进大门，继续玩下去了。

![](https://cdn.beekka.com/blogimg/asset/202511/bg2025112208.webp)

## 科技动态

1、[AI 授课](https://www.theguardian.com/education/2025/nov/20/university-of-staffordshire-course-taught-in-large-part-by-ai-artificial-intelligence)

英国斯塔福德郡大学的学生，向媒体投诉。

他们上课时，老师的幻灯片（下图）完全是用 AI 生成的，甚至老师也不讲课，而是播放 AI 生成的授课语音。

![](https://cdn.beekka.com/blogimg/asset/202511/bg2025112102.webp)

学生非常气愤，因为学校规定，学生如果提交 AI 生成的作业，会被开除，但是老师却在用 AI 讲课。

这一方面反映了英国的大学教育质量日趋下降，另一方面也让人反思。如果大学广泛使用 AI 授课，或者老师的教学质量还不如 AI，那么学生还需要上大学吗，为什么不直接向 AI 学习？

2、[螃蟹椅](https://mossandfog.com/toyotas-crab-like-wheelchair-that-walks/)

丰田公司推出一款概念产品，像螃蟹一样行走的椅子。

![](https://cdn.beekka.com/blogimg/asset/202511/bg2025111217.webp)

它的四条腿可以活动，由电机控制铰链。人坐在上面，它会自己行走，还能爬台阶。

![](https://cdn.beekka.com/blogimg/asset/202511/bg2025111219.webp)

它还能趴下站起。

![](https://cdn.beekka.com/blogimg/asset/202511/bg2025111220.webp)

我预计，国内很快会推出类似产品，可以驮着人行走的机器人，市场很大。

3、[量子计算机](https://www.ianvisits.co.uk/articles/you-can-see-a-working-quantum-computer-in-ibms-london-office-85464/)

IBM 公司的伦敦办公室，正在展示一台量子计算机。

![](https://cdn.beekka.com/blogimg/asset/202511/bg2025112503.webp)

这台机器建造于2019年，已经过时了。但是你不能走进办公室看，只能在门口远远地看。

![](https://cdn.beekka.com/blogimg/asset/202511/bg2025112506.webp)

这东西据说是计算机的未来，可以快速破解现有的加密算法。不过，它工作时需要低温冷却，接近绝对零度，所以不可能在家里使用。

![](https://cdn.beekka.com/blogimg/asset/202511/bg2025112504.webp)

![](https://cdn.beekka.com/blogimg/asset/202511/bg2025112505.webp)

4、[政府网站的费用](https://www.abc.net.au/news/2025-11-23/bureau-of-meteorology-new-website-cost-blowout-to-96-million/106042202)

制作一个政府网站要花多少钱？答案是9650万澳元（约4.5亿人民币）。

![](https://cdn.beekka.com/blogimg/asset/202511/bg2025112514.webp)

澳大利亚气象局的新网站，设计费用410万澳元，开发费用7980万澳元，发布和安全测试费用1260万澳元，共计9650万澳元。

由于远远超过了410万澳元的预算，这件事被媒体披露后，引起了公众哗然。

![](https://cdn.beekka.com/blogimg/asset/202511/bg2025112515.webp)

更可笑的是，新网站发布后，农民反映找不到降雨数据，不得不又换回旧版网站。

政府的计算机系统，如何保证高效好用，又不浪费纳税人的钱，真是一个难题。

大家可以去参观这个4.5亿人民币开发的网站 [bom.gov.au](https://www.bom.gov.au/)。另外，[旧版网站](https://reg.bom.gov.au/)目前也依然在线。

## 文章

1、[为什么每个数据库都使用 B 树](https://mehmetgoekce.substack.com/p/b-trees-why-every-database-uses-them)（英文）

![](https://cdn.beekka.com/blogimg/asset/202511/bg2025112401.webp)

一篇科普文章，介绍为什么 B 树比二叉树更适合数据库。

2、[为什么评估新模型越来越难](https://simonwillison.net/2025/Nov/24/claude-opus/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202511/bg2025112508.webp)

著名程序员西蒙·威利森感叹，他已经评估不了最新的大模型了。因为各种模型的能力越来越强，简单的题目都会解，必须用很高深的题目去测。

3、[固态硬盘不能长时间断电](https://www.xda-developers.com/your-unpowered-ssd-is-slowly-losing-your-data/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202511/bg2025112509.webp)

本文指出，消费级的固态硬盘（SSD）在断电状态下，超过一年就会丢失数据。

目前，最好的固态硬盘也不能断电超过十年。所以，如果长时间不用，数据不要保存在固态硬盘。

4、[中国龙芯的基准测试](https://lemire.me/blog/2025/11/23/how-good-are-chinese-cpus-benchmarking-the-loongson-3a6000/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202511/bg2025112522.webp)

一个老外程序员测试龙芯 3A6000 处理器，跟2021年发布的英特尔 Xeon Gold 6338 对比。

5、[C 代码里面的 URL](https://susam.net/url-in-c.html)（英文）

![](https://cdn.beekka.com/blogimg/asset/202511/bg2025112706.webp)

上面这段 C 语言代码里面有一个 URL，居然是可以编译的，这是为什么？

6、[如何做一个简单的搜索引擎](https://karboosx.net/post/4eZxhBon/building-a-simple-search-engine-that-actually-works)（英文）

![](https://cdn.beekka.com/blogimg/asset/202511/bg2025112602.webp)

本文介绍搜索引擎的原理，如何自己动手写一个简单的搜索引擎。

7、[DIY NAS：2026 年版](https://blog.briancmoses.com/2025/11/diy-nas-2026-edition.html)（英文）

![](https://cdn.beekka.com/blogimg/asset/202511/bg2025112708.webp)

作者详细介绍自己组装 NAS 的配置，可以参考。

## 工具

1、[DNS Benchmark Tool](https://github.com/frankovo/dns-benchmark-tool)

![](https://cdn.beekka.com/blogimg/asset/202511/bg2025112101.webp)

测试 DNS 服务器的命令行工具，可以测试本地到 DNS 服务器的延迟，以及 DNS 解析获取域名的 IP 地址的耗时。

2、[iDescriptor](https://github.com/iDescriptor/iDescriptor)

![](https://cdn.beekka.com/blogimg/asset/202511/bg2025112405.webp)

一个跨平台的桌面应用，让电脑连接管理 iPhone。

3、[SVG.js](https://svgjs.dev)

![](https://cdn.beekka.com/blogimg/asset/202511/bg2025112406.webp)

一个网页 JS 库，用来生成和操作 SVG 图片动画。

4、[impala](https://github.com/pythops/impala)

![](https://cdn.beekka.com/blogimg/asset/202511/bg2025112303.webp)

Linux 平台管理 WiFi 的一个终端应用。

5、[2025-blog-public](https://github.com/YYsuni/2025-blog-public)

![](https://cdn.beekka.com/blogimg/asset/202511/bg2025112106.webp)

一个基于 Next.js 的静态博客网站模版。（[@YYsuni](https://github.com/ruanyf/weekly/issues/8262) 投稿）

6、[pdfpc-ts](https://github.com/Master-Hash/pdfpc-ts)

一个开源网站，用于幻灯片演示，特点是同时带有演示者视图，用于提词，类似于桌面应用 [pdfpc](https://github.com/pdfpc/pdfpc)。（[@Master-Hash](https://github.com/ruanyf/weekly/issues/8264) 投稿）

7、[剪存](https://github.com/snsogbl/clip-save)

![](https://cdn.beekka.com/blogimg/asset/202511/bg2025112302.webp)

开源的桌面软件，用来保存剪贴板历史，支持 Windows/Mac。（[@snsogbl](https://github.com/ruanyf/weekly/issues/8269) 投稿）

8、[Hoa](https://github.com/hoa-js/hoa)

一个受 Koa 和 Hono 启发的 JS 服务器框架，适用于 Cloudflare Worker。（[@nswbmw](https://github.com/ruanyf/weekly/issues/8289) 投稿）

9、[NodeBBS](https://github.com/aiprojecthub/nodebbs)

![](https://cdn.beekka.com/blogimg/asset/202511/bg2025112701.webp)

开源的基于 JS 语言的现代论坛系统。（[@wengqianshan](https://github.com/ruanyf/weekly/issues/8294) 投稿）

10、[MyTube](https://github.com/franklioxygen/MyTube)

![](https://cdn.beekka.com/blogimg/asset/202511/bg2025112704.webp)

一个需要自搭建的 Web 服务，用来下载与管理 Youtube/Bilibili 两大平台的视频。（[@franklioxygen](https://github.com/ruanyf/weekly/issues/8300) 投稿）

## AI 相关

1、[WeFinance-Copilot](https://github.com/JasonRobertDestiny/WeFinance-Copilot)

![](https://cdn.beekka.com/blogimg/asset/202511/bg2025112301.webp)

一个开源的 Web 应用，用户上传账单，它会用 AI 进行识别和财务分析。（[@JasonRobertDestiny](https://github.com/ruanyf/weekly/issues/8270) 投稿）

2、[KoalaQA](https://github.com/chaitin/KoalaQA)

![](https://cdn.beekka.com/blogimg/asset/202511/bg2025112502.webp)

开源的 AI 客服系统，可以搭建问答平台、开发者社区、用户服务社区。（[@Trc0g](https://github.com/ruanyf/weekly/issues/8286) 投稿）

3、[seekdb](https://github.com/oceanbase/seekdb)

![](https://cdn.beekka.com/blogimg/asset/202511/bg2025112521.webp)

OceanBase 团队推出的一款开源 AI 数据库，支持向量计算，兼容 MySQL。（[@liboyang0730](https://github.com/ruanyf/weekly/issues/8288) 投稿）

4、[OPENUGC](https://chat.openugc.com)

![](https://cdn.beekka.com/blogimg/asset/202511/bg2025112703.webp)

一个 AI 网页客户端，可以配置模型、Agent 和 MCP，功能较全，但是不开源。（[@aicu-icu](https://github.com/ruanyf/weekly/issues/8298) 投稿）

## 资源

1、[LangGraph 1.0 完全指南](https://www.luochang.ink/dive-into-langgraph/quickstart/)

![](https://cdn.beekka.com/blogimg/asset/202511/bg2025112501.webp)

LangGraph 是一个开源 Agent 开发框架，本教程是基于 Jupyter Notebook 的可交互教程，介绍这个框架的具体实践。（[@luochang212](https://github.com/ruanyf/weekly/issues/8283) 投稿）

2、[Nano Banana Pro 提示词大全](https://github.com/YouMind-OpenLab/awesome-nano-banana-pro-prompts/blob/main/README_zh.md)

![](https://cdn.beekka.com/blogimg/asset/202511/bg2025112702.webp)

这个仓库收集了500+的 Nano Banana Pro 模型提示词，每一个提示词都有图片，超过一半提示词带有参数。（[@DophinL](https://github.com/ruanyf/weekly/issues/8297) 投稿）

3、[OCR Arena](https://www.ocrarena.ai)

![](https://cdn.beekka.com/blogimg/asset/202511/bg2025112507.webp)

这个网站是一个 AI 竞技场，比较不同模型的 OCR（光学识别）能力，目前排名第一的是 Gemini 3。

## 图片

1、[飞机场模型](https://www.core77.com/posts/138995/Historically-Accurate-Airport-Dioramas-by-AV-Pro-Designs)

一位退休的美国飞行员，喜欢制作飞机场模型。

![](https://cdn.beekka.com/blogimg/asset/202511/bg2025112510.webp)

![](https://cdn.beekka.com/blogimg/asset/202511/bg2025112511.webp)

他的网站上有大量的作品照片，大家可以点进去看。

![](https://cdn.beekka.com/blogimg/asset/202511/bg2025112709.webp)

![](https://cdn.beekka.com/blogimg/asset/202511/bg2025112710.webp)

下面是他制作的孟买机场模型，甚至还能显示夜景。

![](https://cdn.beekka.com/blogimg/asset/202511/bg2025112512.webp)

![](https://cdn.beekka.com/blogimg/asset/202511/bg2025112513.webp)

## 文摘

1、[对每一个要求“一点点”时间的人说不](https://thoughtcatalog.com/ryan-holiday/2017/01/to-everyone-who-asks-for-just-a-little-of-your-time/)

经常有人对我说：

> - 我想跟你简单聊聊天？
> - 下周我们一起喝咖啡吧？
> - 我们一起来讨论一下吧？

我的回答永远是：不，不，不。

![](https://cdn.beekka.com/blogimg/asset/202408/bg2024082212.webp)

我确实可以满足你的要求，但我就是不能做。

即使它们可能是重要的机会，即使只需要花费我15分钟，即使这是其他人都会同意去做的事情，我也不想做。

我必须限制一天中被别人占用的时间，否则我自己就没有剩下的时间了。

即使我让你占用我的时间以后，还会剩下一些时间，我也可能因此失去能量和专注力，再来利用好这些剩下的时间。

时间是我们最不可替代的资产——我们无法购买更多的时间。我们一秒钟都无法收回失去的时间。我们只能希望尽可能少地浪费。

但是现实生活中，不知何故，很多人将时间视为所有资源中最可再生的，用掉就用掉了，反正还有别的时间。

![](https://cdn.beekka.com/blogimg/asset/202408/bg2024082213.webp)

所以，如果你问我是否可以聊天或聚一聚，答案是不。我希望你能够明白，我这样回答的理由。

## 言论

1、

编程是我遇到过的最能抑制傲慢的良药。如果一个人很傲慢，你就让他去编程。

-- [tratt.net](https://tratt.net/laurie/blog/2020/automatic_syntax_error_recovery.html)

2、

训练一个观点与众不同的模型，会越来越困难。因为如果你的观点与真实数据和真实世界不符，你就不能简单地用外部材料来训练模型。

-- [Hacker News 读者](https://news.ycombinator.com/item?id=46050177)

3、

现在是2025年，AI 像病毒一样迅速传播。哪怕你还在坚持手工制作精品，人们也很容易将你的辛勤劳动误认为是毫无灵魂、缺乏灵感的机器垃圾。

-- [tonsky.me](https://tonsky.me/blog/hiring-ai/)

4、

人生苦短，死亡来得如此轻易。如果我只是随波逐流，转眼间就会变成老翁。

-- [小畑五郎](https://kottke.org/25/11/my-pace)，一个日本 Youtuber

5、

如果一件东西100%实用，它就一定是漂亮的，比如没有丑陋的钉子或丑陋的锤子。但是，有很多丑陋的汽车，因为汽车并不是所有部分都实用。

-- [Dan Gelbart](https://www.bedelstein.com/post/mcmaster-carr)，一位工业发明家

## 往年回顾

[AI 模型不是一门好生意](https://www.ruanyifeng.com/blog/2024/12/weekly-issue-328.html)（#328）

[棘手的 AI 版权](https://www.ruanyifeng.com/blog/2023/11/weekly-issue-278.html)（#278）

[人类和人生的意义](https://www.ruanyifeng.com/blog/2022/10/weekly-issue-228.html)（#228）

[家庭太阳能发电的春天](https://www.ruanyifeng.com/blog/2021/10/weekly-issue-178.html)（#178）

（完）

