# 科技爱好者周刊（第 373 期）：数据模型是新产品的核心

这里记录每周值得分享的科技内容，周五发布。

本杂志[开源](https://github.com/ruanyf/weekly)，欢迎[投稿](https://github.com/ruanyf/weekly/issues)。另有[《谁在招人》](https://github.com/ruanyf/weekly/issues/8003)服务，发布程序员招聘信息。合作请[邮件联系](mailto:yifeng.ruan@gmail.com)（yifeng.ruan@gmail.com）。

## 封面图

![](https://cdn.beekka.com/blogimg/asset/202511/bg2025111108.webp)

甘肃省酒泉市今年开业的悬泉置景区，是一个汉代的丝绸之路驿站，供往来西域的客人投宿。中国现存的8万多片汉代简牍，有3万多片发现于这个驿站。（[via](https://www.news.cn/culture/20250430/2dfefaf471ca46f48e70d1ab669ef6e9/c.html?page=5)）

## 数据模型是新产品的核心

（1）

著名计算机学家、Pascal 语言之父[沃斯](https://en.wikipedia.org/wiki/Niklaus_Wirth)说过一句著名的话。

> 算法 + 数据结构 = 程序

他甚至写了一本书，书名就是这句话。

![](https://cdn.beekka.com/blogimg/asset/202511/bg2025110804.webp)

在他看来，**数据结构跟算法一样，是最重要的事情**，反倒是编程语言不怎么重要。

如果数据结构不对，程序十有八九会有问题；反之，数据结构对了，解法往往很容易看出来。

（2）

我前些天看到[一篇文章](https://notes.mtb.xyz/p/your-data-model-is-your-destiny)，也是这个观点，甚至更进一步提出，**数据模型不仅是程序的核心，也是新产品的核心**。

他认为，数据结构决定了产品的形态，只要改变一下数据模型，往往就是一种新产品。

文章举了很多例子，非常有启发，我跟大家分享。

（3）

最初的聊天软件，都是以人为中心，两人或两人以上组成一个聊天。

![](https://cdn.beekka.com/blogimg/asset/202511/bg2025110807.webp)

它的数据模型就是围绕人建模，要是成员全部退出，聊天就结束。

后来，新的群聊软件 [Slack](https://slack.com/intl/zh-cn/) 诞生了。

![](https://cdn.beekka.com/blogimg/asset/202511/bg2025110805.webp)

它的数据模型变了，核心不是人，而是话题。一个话题就是一个容器，所有相关的聊天都在里面，又叫做频道（channel）。

![](https://cdn.beekka.com/blogimg/asset/202511/bg2025110806.webp)

即使成员全部退出，没人聊天了，频道依然存在，话题的完整上下文也不会消失。新成员加入后，可以看到以前的所有讨论。

由于这个特点，Slack 特别受企业欢迎，是目前公司内网工作聊天软件的首选。

你看，就因为 Slack 的数据模型变了，哪怕其他都没变，它就成了一个全然不同的产品，杀出了聊天软件的重围，在企业市场大放异彩。

（4）

再看两个例子。Notion 和谷歌文档都是文档软件，都用来写文档，但是它们的数据模型不一样。

谷歌文档就是传统模型，以单篇文档为中心。

![](https://cdn.beekka.com/blogimg/asset/202511/bg2025110808.webp)

Notion 模型的核心其实不是文档，而是页面。一个页面就是一个容器，你可以组合多篇文档，呈现在一起。

![](https://cdn.beekka.com/blogimg/asset/202511/bg2025110809.webp)

Figma 和 Photoshop 都是设计软件。

PhotoShop 模型的核心是图像，所有编辑都归属于某张图像。

![](https://cdn.beekka.com/blogimg/asset/202511/bg2025110810.webp)

Figma 模型的核心，我觉得，是工作区。一个设计稿就是一个工作区，里面可以有多张图像，其他人可以参与进来，留言讨论。

![](https://cdn.beekka.com/blogimg/asset/202511/bg2025110811.webp)

（5）

总之，数据模型稍作变化，就会产生一种新产品。它跟现有的产品有区别，从而能够打开新的市场。

这启发我们，如果你的产品跟别人雷同，那么不妨思考一下，能否改变数据模型。

## 科技动态

1、澳大利亚安装了大量光伏板，出现了一个新的烦恼。

那就是电太多，白天用不完。政府打算推出一个计划，中午太阳光最强的时候，[用电免费](https://electrek.co/2025/11/04/australia-has-so-much-solar-that-its-offering-everyone-free-electricity-3h-day/)。

![](https://cdn.beekka.com/blogimg/asset/202511/bg2025110902.webp)

政府要求电力公司每天至少向所有人免费提供三个小时的电。如果你自己购买电池，把电储存起来，甚至可以全天免费用电。

随着太阳能的发展，人类有望进入低电价甚至零电价的时代（至少在白天）。

2、

最近，纽约市的地铁站出现了同一个 [AI 广告](https://archive.ph/HyMHm)。

![](https://cdn.beekka.com/blogimg/asset/202510/bg2025101402.webp)

那是一个 AI 吊坠，佩戴者可以跟它说话，售价129美元。

这个广告到处都是，墙壁、车身、车厢，无处不在。

![](https://cdn.beekka.com/blogimg/asset/202510/bg2025101403.webp)

该公司的 CEO 说，当他得知买下纽约地铁的广告，每月仅需不到100万美元，觉得很便宜，立刻就买下了。

![](https://cdn.beekka.com/blogimg/asset/202511/bg2025111305.webp)

但是，广告投放一个多月后，产品只卖出3100个，货值不到40万美元，怎么看都是一笔巨亏的买卖。

不过，CEO 很乐观，相信等到产品在沃尔玛上架，销量就会快速提升。他认为，人们会需要这个吊坠作为 AI 伴侣，它帮助用户“显著提高情商，重新定义朋友”，为此他还准备在洛杉矶和芝加哥，投入巨额广告费。

这就是 AI 设备和应用的现状：实际的销量不大，但需要巨额推广费用，AI 公司对此毫无怨言。

3、世界最大的[捕风伞](https://m.guancha.cn/industry-science/2025_11_12_796785.shtml)，最近在内蒙古阿拉善左旗试验场成功开伞和收伞。

![](https://cdn.beekka.com/blogimg/asset/202511/bg2025111211.webp)

它的展开面积达到5000平方米，在高空中吸收风力，进行发电。

![](https://cdn.beekka.com/blogimg/asset/202511/bg2025111212.webp)

高空才有大风，科学家很早就想出捕风伞，它就像一个放大的风筝，升到300米以上的高空捕获风能，再通过牵引缆绳，拉动地面的发电机转动发电。

![](https://cdn.beekka.com/blogimg/asset/202511/bg2025111213.webp)

4、苹果的 Vision Pro 头盔刚发布的 VisionOS 26 系统，增加了一个[空间头像](https://www.cnet.com/tech/computing/apple-talks-to-me-about-vision-pro-personas-where-is-our-virtual-presence-headed/)功能。

![](https://cdn.beekka.com/blogimg/asset/202511/bg2025110508.webp)

它通过内部摄像头，拍摄用户的头部，然后使用高斯泼溅算法，将 2D 头像变成逼真的空间 3D 头像。

用户通话时，就能看到对方栩栩如生的头像，浮在空气中，对你说话，表情动作都是实时的。当然，前提是双方都必须戴着头盔。

![](https://cdn.beekka.com/blogimg/asset/202511/bg2025110509.webp)

该功能最多可以扩展到5个人同时通话。

这个功能令人遐想，如果再为头像配上虚拟的身体，是不是就能看到对方在空间中做动作。

![](https://cdn.beekka.com/blogimg/asset/202511/bg2025110510.webp)

## 文章

1、[一个伊朗程序员的求助](https://gist.github.com/EchenD/8b211ebfa4941d2c5df7b526790b31aa#the-current-situation-being-completely-honest)（英文）

一个伊朗程序员开发了一个 AI 虚拟头像生成器，但是发现由于美国制裁，根本不可能向国外出售，于是在 GitHub 求助。

> 我没有客户，没有收入，积蓄已经用光，而且已经积极找了九个月的工作，却一无所获。我的妻子是一名护士，每天从早上五点工作到晚上七点，而我却坐在电脑前，开发一些连房租都付不起的东西。
> 
> 我在伊朗无法使用 Stripe、PayPal 等西方支付处理商，也无法使用 AWS、GCP、Azure 等云服务商，我不能用西方银行账户接受付款，也不能接受顾客使用信用卡付款。

2、[我讨厌代码截图](https://parkscomputing.com/page/i-hate-screenshots-of-text)（英文）

![](https://cdn.beekka.com/blogimg/asset/202511/bg2025111201.webp)

一个老外程序员呼吁，客户遇到问题时，不要再向他发送代码截图了，因为无法拷贝代码，而要发送代码链接。

3、[图片是否比文字节省 token？](https://pagewatch.ai/blog/post/llm-text-as-image-tokens/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202511/bg2025110802.webp)

本文验证如果把提示词从文字转成图片，是否更节省 token？

答案是提示词本身确实节省了 token，但是模型会用更多的 token 来补全上下文，所以总体上并没有节省。

4、[Dijkstra 算法详细图解](https://github.com/trekhleb/javascript-algorithms/blob/master/src/algorithms/graph/dijkstra/README.zh-CN.md)（中文）

![](https://cdn.beekka.com/blogimg/asset/202511/bg2025111207.webp)

Dijkstra 算法是寻找两点间最短路径的经典算法，本文用一步步的详细图解，解释这个算法。

5、[Web Monetization API 试用体会](https://blog.tomayac.com/2025/11/07/using-the-web-monetization-api-for-fun-and-profit/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202511/bg2025110803.webp)

浏览器有一个实验 API，用来让访问者向站长捐款，本文是这个 API 的试用报告。

6、[AI 插件的模型成本比较](https://blog.kilocode.ai/p/testing-augment-codes-new-credit)（英文）

![](https://cdn.beekka.com/blogimg/asset/202511/bg2025111306.webp)

本文使用实际的编程任务，对 VS Code 的两个 AI 编程插件进行成本比较：[Augment Code](https://www.augmentcode.com) 和 [Kilo Code](https://kilocode.ai/)。

前者不能更换模型，必须使用内置的 Claude Sonnet 4.5；后者可以配置自己的模型，到底谁更省钱。

## 工具

1、[MagicMirror²](https://github.com/MagicMirrorOrg/MagicMirror)

![](https://cdn.beekka.com/blogimg/asset/202511/bg2025110901.webp)

一个显示各种信息的面板应用，可以用于信息屏或者智能镜子。

2、[btop](https://github.com/aristocratos/btop)

![](https://cdn.beekka.com/blogimg/asset/202511/bg2025111208.webp)

htop 命令的升级版，在终端里面详细展示系统信息。

3、[DroidDock](https://github.com/rajivm1991/DroidDock)

![](https://cdn.beekka.com/blogimg/asset/202511/bg2025111206.webp)

一个 Mac 桌面应用，可以连接安卓手机，管理手机文件。

4、[RedisFX](https://github.com/tanhuang2016/RedisFX)

![](https://cdn.beekka.com/blogimg/asset/202511/bg2025110801.webp)

轻量级的 Redis 图形界面，使用 JavaFX 开发，运行在 JVM 上。（[@tanhuang2016](https://github.com/ruanyf/weekly/issues/8120) 投稿）

5、[Pingap](https://github.com/vicanso/pingap)

![](https://cdn.beekka.com/blogimg/asset/202511/bg2025111007.webp)

一个 Rust 语言开发的反向代理服务器，类似于 nginx，内置各种插件（身份验证、安全、流量控制、内容修改等）。（[@vicanso](https://github.com/ruanyf/weekly/issues/8133) 投稿）

6、[Alle](https://github.com/bestruirui/Alle)

![](https://cdn.beekka.com/blogimg/asset/202511/bg2025111008.webp)

开源的邮件聚合管理平台，基于 Cloudflare Workers 部署。在一个界面查看所有邮箱的收件，并带有邮件的 AI 处理。（[@bestruirui](https://github.com/ruanyf/weekly/issues/8140) 投稿）

7、[gocron](https://github.com/gocronx-team/gocron)

![](https://cdn.beekka.com/blogimg/asset/202511/bg2025111010.webp)

Linux 的定时任务管理系统，使用 Go 语言开发，自带 Web 界面，用于替代原生的 crontab。（[@gocronx](https://github.com/ruanyf/weekly/issues/8143) 投稿）

8、[markdown-it-ts](https://github.com/Simon-He95/markdown-it-ts)

Markdown 语法解析库 markdown-it 的 TypeScript 重写。（[@Simon-He95](https://github.com/ruanyf/weekly/issues/8145) 投稿）

9、[TUIOS](https://github.com/Gaurav-Gosain/tuios)

![](https://cdn.beekka.com/blogimg/asset/202511/bg2025111109.webp)

一个很奇特的软件，终端窗口内部的窗口管理器，在一个终端里面管理多个终端对话窗口。（[@kero990](https://github.com/ruanyf/weekly/issues/8148) 投稿）

10、[XMSLEEP](https://github.com/Tosencen/XMSLEEP)

![](https://cdn.beekka.com/blogimg/asset/202511/bg2025111215.webp)

开源的安卓白噪音应用。（[@Tosencen](https://github.com/ruanyf/weekly/issues/8157) 投稿）

## AI 相关

1、[Davia](https://github.com/davialabs/davia)

![](https://cdn.beekka.com/blogimg/asset/202511/bg2025111203.webp)

这个开源工具使用 AI 将代码库变成一份可视化文档。

2、[VoidMuse](https://github.com/voidmuse-dev/voidmuse)

![](https://cdn.beekka.com/blogimg/asset/202511/bg2025111009.webp)

一个学习目录的 AI 插件，支持 IDEA 和 VS Code，代码开源，用于这类 AI 编程助手的开发教学。（[@voidmuse-dev](https://github.com/ruanyf/weekly/issues/8142) 投稿）

3、[UPage](https://github.com/halo-dev/upage)

![](https://cdn.beekka.com/blogimg/asset/202511/bg2025111012.webp)

基于大模型的可视化网页构建平台，Lovable 的开源替代。（[@wan92hen](https://github.com/ruanyf/weekly/issues/8147) 投稿）

4、[Pair Translate](https://github.com/Cookee24/PairTranslate)

一个开源的浏览器插件，用来翻译网页，可以配置翻译服务提供商或 AI 模型。（[@Cookee24](https://github.com/ruanyf/weekly/issues/8155) 投稿）

5、[DatasetLoom](https://github.com/599yongyang/DatasetLoom)

![](https://cdn.beekka.com/blogimg/asset/202511/bg2025111216.webp)

开源的 Web 应用，为多模态大模型构建训练数据。（[@599yongyang](https://github.com/ruanyf/weekly/issues/8156) 投稿）

6、[Cordys CRM](https://github.com/1Panel-dev/CordysCRM)

![](https://cdn.beekka.com/blogimg/asset/202511/bg2025111011.webp)

开源的 AI CRM 系统（客户关系管理系统）。（[@maninhill](https://github.com/ruanyf/weekly/issues/8144) 投稿）

## 资源

1、[stickertop.art](https://stickertop.art/main/)

![](https://cdn.beekka.com/blogimg/asset/202511/bg2025111204.webp)

这个网站收集贴了贴纸的笔记本照片。

2、[TypeScript 类型图解](https://types.kitlangton.com/)

![](https://cdn.beekka.com/blogimg/asset/202511/bg2025111301.webp)

这个网站用图形讲解 TypeScript 类型。

3、[各国现金使用比例](https://www.voronoiapp.com/economy/Who-Still-Uses-Cash-7090)

![](https://cdn.beekka.com/blogimg/asset/202511/bg2025111302.webp)

这个网站有2025年各国使用现金的比例，可以作为出国参考。中国的现金比例是10%，是最低的国家之一。

## 图片

1、[麻省理工学院的入学考试题](https://www.facebook.com/photo/?fbid=1259756362864936&set=a.474859918021255)

下图是大清同治八年（1869年）麻省理工学院入学试卷的代数题。

![](https://cdn.beekka.com/blogimg/asset/202511/bg2025111210.webp)

2、[古埃及象形文字](https://optional.is/required/2009/12/03/welcome-the-entire-land/)

一个冰岛程序员请教专家，将“hello world”这句话翻译成古埃及象形文字。

![](https://cdn.beekka.com/blogimg/asset/202511/bg2025111202.webp)

因为古埃及没有 world 的概念，这句话直译就是“欢迎，整个大陆”。

## 文摘

1、[公司越大，越容易做出复杂的产品](https://hugo.writizzy.com/being-opinionated/57a0fa35-1afc-4824-8d42-3bce26e94ade)

大公司容易做出复杂的产品，这主要有两个原因。

（1）公司的人越多，产品复杂度就越高，因为每个人都想留下自己的印记。

大公司的规则是，当你贡献了某种新功能，就会得到晋升。

哪怕这些功能是多余的，十个月后就会发现它们毫无用处，它们的开发者也会收到奖励，所以所有人总是热衷于添加新功能。

（2）公司规模越大，客户越多，就越需要应对具体的用例。

销售人员会告诉你，一些客户需要这个功能；客户支持人员则会告诉你，另一些用户提出了那个需求。

除非你有足够的远见，指出它们不符合软件发展的愿景，否则你就不得不按照那些人的要求，不停地添加功能。

现实中，大公司内部有各种压力，程序员几乎没有自己的立场，必须取悦所有上级部门，在各种压力之间搞平衡，最终就做出具有巨大复杂性的软件。

## 言论

1、

跟常规 API 不同，MCP 作为接口有一个好处。

常规 API 是对开发者的一种承诺，发布后不能轻易改变。但是，MCP 接口只供大模型调用，而大模型每次都会动态读取使用规范，因此我们能够随时更改 MCP 服务器，不会有任何问题。

-- [史蒂夫·克劳斯](https://simonwillison.net/2025/Nov/12/steve-krouse/)，美国程序员

2、

如果你向人们展示问题，又向他们展示解决方案，人们就会受到触动并采取行动。

-- [比尔·盖茨](https://www.goodreads.com/quotes/731935-i-believe-that-if-you-show-people-the-problems-and)

3、

地球表面的岩石，25%属于碳酸盐岩。这种石头大部分源于生物的有机体分解。这意味着，很多碳酸盐岩以前是生命体。

-- [《我对死亡的思考》](https://doc.searls.com/2025/10/06/leavings/)

4、

那些鼓吹 AI 编程的人是否意识到，AI 必定会带来大量垃圾代码和“理解债务”。

-- [Hacker News 读者](https://news.ycombinator.com/item?id=45491685)

5、

最近，我在思考一个问题，如果 AI 能够将我们的语言翻译成可运行的代码，那么我们还需要编程语言吗？

-- [《语言无关的编程》](https://joaquimrocha.com/2025/08/31/language-agnostic-programming-why-you-may-still-need-code/)

## 往年回顾

[世界没有那么多财富](https://www.ruanyifeng.com/blog/2024/11/weekly-issue-326.html)（#326）

[内容行业的衰落](https://www.ruanyifeng.com/blog/2023/11/weekly-issue-276.html)（#276）

[谷歌出了什么问题？](https://www.ruanyifeng.com/blog/2022/10/weekly-issue-226.html)（#226）

[中国法院承认 GPL 吗？](https://www.ruanyifeng.com/blog/2021/09/weekly-issue-176.html)（#176）

（完）

