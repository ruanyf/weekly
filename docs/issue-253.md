# 科技爱好者周刊（第 253 期）：训练材料用完之日

这里记录每周值得分享的科技内容，周五发布。

本杂志[开源](https://github.com/ruanyf/weekly)，欢迎[投稿](https://github.com/ruanyf/weekly/issues)。周刊另有[《谁在招人》](https://github.com/ruanyf/weekly/issues/3091)服务，发布程序员招聘信息。合作推广请[邮件联系](mailto:yifeng.ruan@gmail.com)（yifeng.ruan@gmail.com）。

## 封面图

![](https://cdn.beekka.com/blogimg/asset/202305/bg2023050201.webp)

这不是美术馆，而是杭州临安三口村的杨梅大棚，沿着山坡堆叠在一起。（[via](https://weibo.com/6385067105/MEmohsdZe)）

## 本周话题：训练材料用完之日

现在的新闻报道，天天有 AI 的新闻，里面会提到很多模型。

分辨模型的强弱，有一个关键指标，就是看它有多少个参数。一般来说，参数的数量越多，模型就越强。

GPT-2 有15亿个参数，GPT-3 和 ChatGPT 有[1750亿个](https://developer.nvidia.com/zh-cn/blog/openai-presents-gpt-3-a-175-billion-parameters-language-model/)，GPT-4 没有公布这个指标，据传比上一代大5倍以上。

![](https://cdn.beekka.com/blogimg/asset/202305/bg2023050303.webp)

那么，什么是参数呢？

按照我粗浅的理解，参数相当于模型预测时，所依据的神经网络的节点数量。**参数越多，就代表了模型所考虑的各种可能性越多，计算量越大，效果越好。**

既然参数越多越好，那么参数会无限增长吗？

答案是不会的，因为参数受到训练材料的制约。必需有足够的训练材料，才能计算出这些参数，**如果参数无限增长，训练材料势必也要无限增长。**

我看到的一种说法是，训练材料至少应该是参数的10倍。举例来说，一个区分猫照片和狗照片的模型，假定有1,000个参数，那么至少应该用10,000张图片来训练。 

![](https://cdn.beekka.com/blogimg/asset/202305/bg2023050305.webp)

ChatGPT 有1750亿个参数，那么训练材料最好不少于17500亿个词元（token）。“词元”就是各种单词和符号，以小说《红楼梦》为例，它有788,451字，就算100万个词元。那么， ChatGPT 的训练材料相当于175万本《红楼梦》。

根据[报道](https://www.sciencefocus.com/future-technology/gpt-3/)，ChatGPT 实际上用了 570 GB 的训练材料，来自维基百科、互联网图书馆、Reddit 论坛、推特等等。

![](https://cdn.beekka.com/blogimg/asset/202305/bg2023050306.webp)

大家想一想，更强大的模型需要更多的训练材料，**问题是能找到这么多材料吗，会不会材料有一天不够用？**

我告诉大家，真的有学者写过[论文](https://epochai.org/blog/will-we-run-out-of-ml-data-evidence-from-projecting-dataset)，研究这个问题。

过去10年来，AI 训练数据集的增长速度远快于全世界的数据存量的增长速度。如果这种趋势继续下去，耗尽数据存量是不可避免的。

论文给出了三个时间点。

> - 2026年：用完一般的语言数据
> - 2030年～2050年：用完所有的语言数据
> - 2030年～2060年：用完所有的视觉数据

也就是说，根据他们的预测，**大概三四年后，新的训练材料就会很难找**。最迟三十年后，全世界所有材料都不够 AI 的训练。

![](https://cdn.beekka.com/blogimg/asset/202305/bg2023050307.webp)

上图是作者给的趋势图，虚线是训练材料的增长速度，红线和蓝线是模型增长速度的不同预测。到了2035年以后，这三根线就合在一起了，曲线变得越来越平。

作者认为，到了那时，由于没有足够的训练材料，AI 模型的发展速度可能就会显著放缓。

如果他的预测是正确的，就意味着，跟大家想的不一样，**AI 飞速发展不会持续很久。现在也许就是发展最快的阶段**，然后就会开始放慢，等到本世纪中叶就会显著放慢，接近停滞，跟量子物理学的现状差不多。

## 科技动态

1、[车轮转向系统](https://topcarnews.net/hyundais-new-steering-system-may-make-parking-jobs-way-easier-s237901.html)

韩国现代汽车发布了一项新技术，允许每个车轮独立转动90度。

![](https://cdn.beekka.com/blogimg/asset/202304/bg2023042801.webp)

演示视频中，这辆概念车可以横着开，也可以原地调头。

虽然实用性很强，但是该技术增加了车辆的复杂性和成本，对于正常行驶是否有影响也未知。现代汽车没透露，是否会将其投入生产。

2、[电脑椅的静电](https://mastodon.social/@haeckerfelix/110272427676278609)

一位国外网友发帖说，他家的显示器经常莫名其妙暗掉几秒钟，然后又好了。

他原以为是显示器问题，后来发现只有移动电脑椅、或者坐下站起时，才会发生这个故障。

![](https://cdn.beekka.com/blogimg/asset/202304/bg2023042901.webp)

他的电脑椅是宜家的 MARKUS，很多网友回帖说，他们的这把电脑椅也有这个问题。

这把椅子的织物材料或者金属座架，容易带有静电，一移动就会导致放电，使得电脑显示器短时间关闭。

解决方法似乎只有换掉这把椅子，但也有动手能力强的网友，为椅子接上地线，让它通地，从而解决了放电问题。

![](https://cdn.beekka.com/blogimg/asset/202304/bg2023042902.webp)

![](https://cdn.beekka.com/blogimg/asset/202304/bg2023042903.webp)

![](https://cdn.beekka.com/blogimg/asset/202304/bg2023042904.webp)

3、[无线耳机的助听作用](https://www.cnbeta.com.tw/articles/tech/1337127.htm)

一项研究发现，无线耳机可以取代助听器，帮助听力受损的人，

![](https://cdn.beekka.com/blogimg/asset/202301/bg2023010505.webp)

苹果的 Airpods 耳机有一个“实时收听”功能，可以放大外界声音，跟助听器的功能很像，实际效果也很好。

助听器的价格非常贵，好的要几万元人民币，普通的也要几千。无线耳机如果真能替代，将造福很多失聪的人。

4、[沙坝蓄水池](https://techxplore.com/news/2023-04-advanced-sand-drought.html)

韩国为了解决山区在旱季断水的问题，新建了该国第一座沙坝蓄水池。

![](https://cdn.beekka.com/blogimg/asset/202304/bg2023043001.webp)

![](https://cdn.beekka.com/blogimg/asset/202304/bg2023043002.webp)

坝体内部有一个砂石的蓄水池，平时用来蓄水，需要时打开管道，让水流向下游。

![](https://cdn.beekka.com/blogimg/asset/202304/bg2023043003.webp)

这样做据说有三个好处：水的蒸发大大减少；水质在通过沙床时得到改善；冬天的水不结冰。

5、[智能婚戒](https://language.chinadaily.com.cn/2016-08/22/content_26508362.htm)

一家捷克公司推出“智能婚戒”，这种婚戒可以感知佩戴者的心跳，并且能将心跳曲线显示在戒指上。

![](https://cdn.beekka.com/blogimg/asset/202304/bg2023042405.webp)

有趣的地方是，它显示的不是自己的心跳，而是对方的心跳。

它通过蓝牙与手机通信，只要佩戴者按压戒指，手机就会联络另一只配对的戒指。

![](https://cdn.beekka.com/blogimg/asset/202304/bg2023042406.webp)

对方的心跳频率，就会传到你的手机上，心跳曲线也显示在戒指上。

![](https://cdn.beekka.com/blogimg/asset/202304/bg2023042407.webp)

发明者称，它让你随时感受到爱人的浪漫心跳。它采用玫瑰金材质，报价是3000美元/对。

![](https://cdn.beekka.com/blogimg/asset/202304/bg2023042408.webp)

## 文章

1、[我的开源经历](https://www.v2ex.com/t/934564)（中文）

![](https://cdn.beekka.com/blogimg/asset/202305/bg2023050401.webp)

作者分享自己的经历，开发一个图片编辑的网页应用。（[@nihaojob](https://github.com/ruanyf/weekly/issues/3081) 投稿）

2、[如何自己实现 CodePen](https://decode.sh/building-a-code-pen-type-editor-from-scratch)（英文）

![](https://cdn.beekka.com/blogimg/asset/202304/bg2023041602.webp)

CodePen 是著名的网页实时编辑预览工具，本文教你怎么实现它的主要功能，非常简单。

3、[tcpdump 快速上手](https://jvns.ca/blog/2016/03/16/tcpdump-is-amazing/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202302/bg2023020818.webp)

作者教你怎么使用 tcpdump 这个命令行工具，查看某个网站的 TCP 通信。

4、[WebGPU 为什么重要](https://cohost.org/mcc/post/1406157-i-want-to-talk-about-webgpu)（英文）

![](https://cdn.beekka.com/blogimg/asset/202305/bg2023050301.webp)

操作系统的图形 API，目前是不统一的：Windows 是 DirectX，苹果是 Metal，Linux 是 Vulkan。

WebGPU 是一种跨平台的解决方案，提供了统一的接口。推荐这篇长文。

5、[我开发 PCalc 的30年](https://pcalc.com/mac/thirty.html)（英文）

![](https://cdn.beekka.com/blogimg/asset/202212/bg2022122402.webp)

作者在1992年为 Macintosh 电脑写了一个计算器 PCalc（上图）。后来，他一直维护这个项目30年，还把它移植到苹果公司的其他设备上，比如 iPhone 和 iWatch（下图）。作者回忆了他这30年。

![](https://cdn.beekka.com/blogimg/asset/202212/bg2022122403.webp)

6、[使用 hurl 自动化 HTTP 测试](https://brie.dev/2022-http-testing-hurl/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202212/bg2022122701.webp)

本文介绍一种简单的方法，使用 hurl 这个软件，对网站 API 进行自动化测试，看它是否正确响应。

7、[编程语言的错误处理机制](https://www.amazingcto.com/best-way-to-handle-errors-for-a-programming-language/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202304/bg2023041305.webp)

本文讨论不同的语言如何处理报错，比如 Java 会抛出异常，而 Go 将错误赋值给一个变量。

这里还有一篇[相同主题的文章](https://andreabergia.com/blog/2023/05/error-handling-patterns/)，也值得参考。

8、[疯狂的 C 语言字符串](https://www.deusinmachina.net/p/c-strings-and-my-slow-descent-to)（英文）

![](https://cdn.beekka.com/blogimg/asset/202304/bg2023040702.webp)

本文是 C 语言的字符串教程，从结尾的`\0`讲到 Unicode，结论就是在 C 语言里面，正确处理字符串是一件多么麻烦的事情。

## 工具

1、[stagit](https://git.codemadness.org/stagit/)

![](https://cdn.beekka.com/blogimg/asset/202212/bg2022121903.webp)

这个软件可以将 Git 仓库转为一个静态网站，为每个文件、每次提交生成一个页面。

2、[元标签生成器](https://websitemetadata.com/meta-tags-generator)

![](https://cdn.beekka.com/blogimg/asset/202210/bg2022101001.webp)

很多社交媒体对于外部 URL，会显示一个卡片，上面有标题、缩略图和页面简要内容。这些信息来自网页里面的元标签，这个工具可以帮助你生成这些元标签。

3、[CJK 字体识别](https://github.com/JeffersonQin/YuzuMarker.FontDetection)

![](https://cdn.beekka.com/blogimg/asset/202305/bg2023050402.webp)

上传一张东亚文字的图片，这个开源工具可以识别这些文字用了什么字体。（[@JeffersonQin](https://github.com/ruanyf/weekly/issues/3090) 投稿）

4、[microblog.pub](https://microblog.pub/)

![](https://cdn.beekka.com/blogimg/asset/202210/bg2022101007.webp)

一个自托管的开源微博网站，只能一个人使用（即没有多用户），支持 ActivityPub 协议。

5、[Textual Markdown Browser](https://github.com/willmcgugan/textual-markdown)

![](https://cdn.beekka.com/blogimg/asset/202212/bg2022121804.webp)

一个终端窗口的 Markdown 文件渲染器，适合用来在终端下阅读 Markdown 文件。

6、[HorusPass](https://horuspass.com/send)

![](https://cdn.beekka.com/blogimg/asset/202302/bg2023022501.webp)

这个网站为用户输入的文本，生成一个用于分享的 URL。但是，这个 URL 只能打开一次，第二次访问就会不存在，有点像“阅后即焚”。

7、[Progress-up](https://progress-up.live/)

![](https://cdn.beekka.com/blogimg/asset/202302/bg2023022701.webp)

一个带有上传进度显示的网页多文件上传 JS 库。

8、[snappify](https://snappify.com/editor)

![](https://cdn.beekka.com/blogimg/asset/202212/bg2022120903.webp)

一个将代码片段生成截图的工具。

9、[RustDesk](https://rustdesk.com/)

![](https://cdn.beekka.com/blogimg/asset/202212/bg2022121003.webp)

一个开源的远程桌面软件，让你远程操作其他电脑的桌面，有各种操作系统的客户端。

10、[LosslessCut](https://mifi.no/losslesscut/)

![](https://cdn.beekka.com/blogimg/asset/202212/bg2022121403.webp)

一个视频编辑器，最大特点是不进行重新编码，按照原视频的格式进行剪切连接，因此速度极快。

## 资源

1、[面向开发人员的 ChatGPT 提示工程](https://www.deeplearning.ai/short-courses/chatgpt-prompt-engineering-for-developers/)

![](https://cdn.beekka.com/blogimg/asset/202304/bg2023043004.webp)

吴恩达与 OpenAI 合作的免费英文课程，教大家怎么编写 ChatGPT 提示，做出一个自己的聊天机器人。

2、[Next.js 和 React 完整指南](https://www.bilibili.com/read/cv20992052)

![](https://cdn.beekka.com/blogimg/asset/202305/bg2023050403.webp)

Udemy 高分付费课程的中文字幕版。（[@lyf61](https://github.com/ruanyf/weekly/issues/3093) 投稿）

3、[图解 QUIC 连接（中文版）](https://cangsdarm.github.io/illustrate/quic)

![](https://cdn.beekka.com/blogimg/asset/202305/bg2023050404.webp)

解释 QUIC 协议通信的每个字节的含义，[原始英文版](https://quic.xargs.org/)的翻译。（[@cangSDARM](https://github.com/ruanyf/weekly/issues/3094) 投稿）

4、[Musico](https://www.musi-co.com/listen/streams)

![](https://cdn.beekka.com/blogimg/asset/202209/bg2022093004.webp)

一个自动生成音乐的 AI 模型，它的官网可以收听这个模型生成的音乐。

## 图片

1、[云的表情](https://mymodernmet.com/a-daily-cloud-art/)

一位美国艺术家专门为各种云的照片，添加表情，使得云看上去像一个卡通人物。

![](https://cdn.beekka.com/blogimg/asset/202211/bg2022111716.webp)

![](https://cdn.beekka.com/blogimg/asset/202211/bg2022111717.webp)

他原本只是出于无聊，随手拍了一些云的照片，画上表情以后，发到网上。

后来，他发现很多人喜欢这些作品，就坚持了下来。

![](https://cdn.beekka.com/blogimg/asset/202211/bg2022111718.webp)

![](https://cdn.beekka.com/blogimg/asset/202211/bg2022111719.webp)

他说：“看着云，你会产生无穷无尽的灵感。”

现在，越来越多的读者向他投稿。他还准备出书。

![](https://cdn.beekka.com/blogimg/asset/202211/bg2022111720.webp)

## 文摘

1、[忙碌的七个层次](https://randsinrepose.com/archives/the-seven-levels-of-busy/)

生活的忙碌可以分成七个层次。

大家可以对照一下，自己属于哪个层次？

![](https://cdn.beekka.com/blogimg/asset/202305/bg2023050405.webp)

**第 1 级：一点不忙。**

时间很自由，怎么安排都可以，没有一定要去完成的事项，周末想睡多久就多久。

**第 2 级：有一些小事。**

你记得有一些事要做。这些事情是合理的事项，没有截止期，但是你知道这些事迟早要做。

**第 3 级：有一些重要的事。**

你有必须要做的事情，需要及时跟踪，不能拖延，你会时刻提醒自己这些事情。

**第 4 级：日程排满了。**

你的日程排满了，不得不经常问自己“什么事情更重要？”，以便决定先做哪些事，后做哪些事。

你没有计划外的时间，不过你还能控制日程。

**第 5 级：生活出现混乱。**

你的事情在工作时间做不完，你开始加班了。

你经常因为事情来不及，而对别人说“对不起”。那些事情并没有被你放弃，只是你不得不赶时间，有些事情执行变得草率。

**第 6 级：任务做不完。**

你需要做的事情，超过了你安排日程的能力。即使放弃某些事情，你依然做不完剩下的事情。

你的工作时间大大延长，影响到正常生活。你感到非常疲劳。

**第 7 级：日子过不下去。**

各种任务塞满了你醒着的每一分钟。吃饭和其他生活必需的事情，都是抽时间来做。你忙起来的时候，甚至饭也没时间吃。

你不写日程安排了，因为根本没有时间做计划，每个小时情况都在发生变化。

你走路也心不在焉，常常觉得要崩溃，日子过不下去了。

## 言论

1、

我离开谷歌，是为了呼吁 AI 的风险，在谷歌任职不方便谈论这些事情。

-- [“深度学习之父”杰弗里·欣顿](https://finance.sina.cn/7x24/2023-05-02/detail-imysiqec8115996.d.html)（Geoffrey Hinton），宣布从谷歌辞职

2、

欧洲的问题是，没有将互联网视为可利用的经济机会，而是看成需要监管的对象。

-- [《欧洲没有准备好成为“第三超级大国”》](https://noahpinion.substack.com/p/europe-is-not-ready-to-be-a-third)

3、

大多数人都认为，手下的人比自己聪明，是没有问题的。一般来说，领导人都要聘请比自己聪明的顾问和幕僚。

那么，当你的手下变成了比你聪明的 AI 模型时，人们为什么会感到受威胁呢？

-- [Yann LeCun](https://twitter.com/ylecun/status/1647533059212812289)，Meta 首席 AI 科学家

4、

要成为优秀程序员，请编写大量代码；要成为顶级程序员，请阅读大量代码。

--[《请编写 CRISP 代码》](https://bitfieldconsulting.com/golang/crisp-code)

## 历史上的本周

[如何走出失望和怀疑](http://www.ruanyifeng.com/blog/2022/05/weekly-issue-206.html)（2022 #206）

[显卡缺货与异业竞争](http://www.ruanyifeng.com/blog/2021/04/weekly-issue-156.html)（2021 #156）

[数字游民](http://www.ruanyifeng.com/blog/2020/05/weekly-issue-106.html)（2020 #106）

[文科生为什么不容易就业？](http://www.ruanyifeng.com/blog/2019/05/weekly-issue-56.html)（2019 #56）

## 鸣谢

周刊得到国内新一代知识管理与协作平台 [FlowUs](https://flowus.cn?promotionChannel=GW_RYF_01) 的帮助，深表感谢。

[FlowUS](https://flowus.cn?promotionChannel=GW_RYF_01)  = 文档 + 表格 + 网盘。你可以用它写文档、做主页、管理数据、存储文件等等。

每一期周刊同时发布在[ FlowUs 专栏](https://ruanyf-weekly.flowus.cn/?code=FLOWUS&promotionChannel=WX_RYF_00)，欢迎大家也去开通自己的专栏和主页。

![](https://cdn.beekka.com/blogimg/asset/202303/bg2023030205.webp)

（完）

