# 科技爱好者周刊（第 286 期）：蓝色指示灯的解决方案

这里记录每周值得分享的科技内容，周五发布。

本杂志[开源](https://github.com/ruanyf/weekly)，欢迎[投稿](https://github.com/ruanyf/weekly/issues)。另有[《谁在招人》](https://github.com/ruanyf/weekly/issues/3814)服务，发布程序员招聘信息。合作请[邮件联系](mailto:yifeng.ruan@gmail.com)（yifeng.ruan@gmail.com）。

## 封面图

![](https://cdn.beekka.com/blogimg/asset/202401/bg2024010607.webp)

上个月，北京城市图书馆对外开放。这个图书馆又名“森林书苑”，一根根白色的柱子象征树木，中间弯曲的主干道象征山谷，让读者产生“在森林中读书”的感觉。（[via](http://www.iarch.cn/thread-45324-1-1.html)）

## 蓝色指示灯的解决方案

你注意过吗，电子设备的指示灯是什么颜色？

一般来说，黄色和绿色的指示灯，比较能够让人接受，感觉很平和。

![](https://cdn.beekka.com/blogimg/asset/202401/bg2024010705.webp)

![](https://cdn.beekka.com/blogimg/asset/202401/bg2024010914.webp)

怕就怕，蓝色指示灯。

![](https://cdn.beekka.com/blogimg/asset/202401/bg2024010915.webp)

![](https://cdn.beekka.com/blogimg/asset/202401/bg2024010706.webp)

科学家[早就发现](https://wjw.beijing.gov.cn/bmfw_20143/jkzs/jksh/202201/t20220105_2582843.html)，**长时间暴露在蓝光中对健康不利**。

![](https://cdn.beekka.com/blogimg/asset/202401/bg2024011201.webp)

我来摘录一段。

> “400nm～460nm 的高能短波蓝光才是影响人体健康的主要波段。
>
> 蓝光的主要危害是对视网膜可造成光化学损害，加速黄斑区细胞的氧化损伤。同时，蓝光还可引起视疲劳、泪膜稳定性下降等。“

简单说，蓝光伤眼睛，会加速黄斑细胞的老化。

而且，蓝光还会干扰人类睡眠。如果卧室里面有明亮的蓝光，你就睡不好。另外，蓝光对于儿童的生长发育也有影响。

![](https://cdn.beekka.com/blogimg/asset/202401/bg2024010918.webp)

这就是为什么市场上有那么多“防蓝光”产品，配眼镜时，都会问你要不要“[防蓝光镀膜](https://jres2023.xhby.net/index/201910/t20191031_6387055.shtml)”（虽然它可能实际上没用）。

![](https://cdn.beekka.com/blogimg/asset/202401/bg2024010919.webp)

蓝光对健康不利的主要原因，可能跟它的能量高有关。可见光有“红橙黄绿青蓝紫”七色，排在越后面的颜色，频率越高，能量也越高。三原色（蓝、绿、红）之中，蓝色的能量是最高的。

但是不知何故，很多厂商坚持使用蓝色指示灯，尤其是国内的电子厂商，彷佛偏爱蓝灯。他们大概觉得，蓝灯看上去很高科技。

我家的路由器和电视盒子，电源指示灯不幸就是蓝灯，只要开机，就一直是明亮的蓝光。路由器放在角落，可以不去看它。但是，电视盒子总是正对着你，因为遥控信号的接收区跟蓝灯做在了一起。只要打开电视机，蓝灯就会亮起。我为这个事情很烦恼。

上周，Hacker News 社区有[一篇文章](https://www.fullcircuit.com/blog/fixing-annoying-blue-standby-lights)，一个老外也在抱怨这个问题，下面有很多讨论，很多人跟我有同样的烦恼。

![](https://cdn.beekka.com/blogimg/asset/202401/bg2024010920.webp)

他们提出了很多蓝色指示灯的解决方案。最简单的方法就是，使用黑色的电工胶布贴掉它。

![](https://cdn.beekka.com/blogimg/asset/202401/bg2024010921.webp)

电工胶布完全不透光，不会有蓝光漏出。而且，它耐高温，强度高，比较适合电子设备。

如果希望保持一定的透光，方便查看设备的运行情况，黑色胶布就不行了，可以改用黑色的指甲油，涂在蓝灯上面。

![](https://cdn.beekka.com/blogimg/asset/202401/bg2024010922.webp)

黑色指甲油的优点是，可以自己调节涂抹的厚度，从完全不透光到透一点光，你自己决定。但是，它和电工胶布都不适合电视盒子，因为它们遮掉蓝光的同时，也遮掉了遥控器信号。

那个老外提出了一种我认为绝妙的解决方法，那就是使用透明的红色糖果纸。

![](https://cdn.beekka.com/blogimg/asset/202401/bg2024010923.webp)

你把它贴在蓝灯前面，蓝光就会变得很柔和，同时它允许遥控器的红外线信号通过，所以不影响遥控器的使用。

根据那个老外的测试，蓝灯前面贴上两层糖果纸，遥控器依然可以正常工作，同时蓝光几乎减少为零。如果你的电子设备也有蓝色指示灯的问题，不妨试试看上面的方法。

## [详细日程] 掘金年度技术演讲

上周，周刊发布了“[掘金年度技术演讲](https://www.bagevent.com/event/8758229?bag_track=ryf0112)”的活动消息，1月20日在深圳湾万丽酒店，大家还有印象吗？

这次是稀土掘金社区的年度活动，他们非常重视，投入了大量资源，邀请了很多重量级嘉宾。现在，大会的详细日程出来了，我帮忙转发，大家看看有没有自己感兴趣的话题？

**主论坛（9:30-12:30）**

主论坛是在1月20日的上午，演讲者是来自字节跳动、NVIDIA、Datastrato、华为诺亚方舟实验室、Jina AI 等企业的技术大咖，分享大前端、AI 和云原生等热点话题，详见下图。

![](https://cdn.beekka.com/blogimg/asset/202401/bg2024011104.webp)

**分论坛之开发者生态（14:00-17:00）**

开发者生态分论坛分为两个环节：主题分享和分组讨论。在主题分享环节，共有四位分享嘉宾，每人用20分钟的时间进行简短而精彩的分享。

> - ModelScope 的成晨：大公司内开发者生态。
> - 零一万物的林旅强：从公司角度分享大模型相关见解。
> - 张志平：阿里技术专家和 DB-GPT 技术委员会成员，分享项目经验。
> - Datawhale 的苏鹏：分享开发者社区的构建以及大模型对社区的影响。

在分组讨论环节，参会的开发者们将围绕 LLM 相关主题展开观点交流。

**分论坛之开发者机遇（14:00-17:00）**

开发者机遇分论坛将分为三个环节：主题分享、分组讨论和 QA + 总结。在主题分享环节中，共有四位分享嘉宾。

> - 翟佳：《从 Pulsar 看中美开源商业化》
> - 郭炜：《如何用开源撬动全球 SaaS 杠杆》
> - 孙昱昊：《OpenChat 及大模型低成本部署的可行性》
> - 宜博：《从 AI First 第一性原理寻找AGI时代的创业机会》

在分组讨论环节中，每位嘉宾将带领各自的小组，就技术出海、大模型变现以及如何助力业务发展等话题展开深入探讨。

最后的 QA + 总结环节将为大家提供进一步提问的机会，并对整个活动进行总结。

**分论坛之掘金茶话会（14:00-17:00）**

掘金茶话会以圆桌的形式举行，将与各位开发者一同探讨三大议题。

> - 议题一：大模型浪潮下，可能带来哪些改变？
> - 议题二：程序员该如何乘风破浪，冲浪 AI 新趋势？
> - 议题三：被取代 or 做主宰，程序员如何规划职业？

每个议题分成自我介绍、主题分享、圆桌讨论和圆桌总结四个部分。

**特别福利**

本次活动是免费参加，大家不要忘记报名，可以点击[这个链接](https://www.bagevent.com/event/8758229?bag_track=ryf0112)，也可以扫描上方海报的二维码。

主办方还提供了大量精美礼品，包括掘金 who cares 杜邦特包、稀土掘金 X A-SOUL 联名双层便携饭盒、warm 兔 you 针织卡套等（下图）。**只要分享海报（链接在抽奖规则里面），就能参与抽奖**，中奖率10%左右，详见[抽奖规则](https://bytedance.larkoffice.com/share/base/form/shrcn13nhTRvSG2dPwjOH5zVV4f)。

![](https://cdn.beekka.com/blogimg/asset/202401/bg2024011105.webp)

## 科技动态

1、[手机跌落的新纪录](https://twitter.com/SeanSafyre/status/1744138937239822685)

1月5日，美国阿拉斯加航空公司的一架波音 737 Max 9 飞机，在飞至5000米高度时，舱门突然脱离机身，从高空坠落。

![](https://cdn.beekka.com/blogimg/asset/202401/bg2024010801.webp)

这真是太可怕了，机身多了一个大洞。万幸的是，没有乘客掉出飞机，大家提心吊胆地看着这个洞，直到飞机紧急降落。

![](https://cdn.beekka.com/blogimg/asset/202401/bg2024010802.webp)

虽然没有人员伤亡，但是有一些手机掉出了飞机，这大概是跌落高度最高的手机了。

其中，两部手机已经被发现。

![](https://cdn.beekka.com/blogimg/asset/202401/bg2024010803.webp)

有一部是 iPhone，居然没有任何损伤，还在正常运行，这可能跟它掉在树林里面有关。这真是 iPhone 的活广告。

![](https://cdn.beekka.com/blogimg/asset/202401/bg2024010804.webp)

2、[巴拿马运河危机](https://www.bloomberg.com/news/features/2024-01-03/-270-billion-in-trade-rests-on-finding-a-fix-to-the-panama-canal)

大家知道，南美洲和北美洲的陆地是连在一起的。为了方便美国西海岸到东海岸的海运，20世纪初美国人在中美洲挖了一条巴拿马运河（下图）。

![](https://cdn.beekka.com/blogimg/asset/202401/bg2024010608.webp)

巴拿马运河是太平洋与大西洋之间最短的海路，终年货轮不断。

但是，去年下半年开始，巴拿马运河发生了旱灾。由于气候变暖，运河水位下降，大型船只无法通行了，只有等到下雨时水位上升才行。

![](https://cdn.beekka.com/blogimg/asset/202401/bg2024010609.webp)

上图中，运河底部的树枝都露出水面了，可见水位下降得多严重。远处就是一艘大型集装箱轮船，被困在运河里面了。

![](https://cdn.beekka.com/blogimg/asset/202401/bg2024010611.webp)

上图中，运河船闸外，水位已经见底。

当年，选择巴拿马这个地点开挖运河，不仅因为它是中美洲最窄的地方，还因为它有一系列天然湖泊，可以利用（下图），能够节省大量工程量。

![](https://cdn.beekka.com/blogimg/asset/202401/bg2024010610.webp)

这些天然湖泊如今没有足够的淡水注入，水位日益下降。这导致巴拿马运河的严重堵塞，船只排成长队等待通过。

这对美国的货物运输有很大影响。美国正在评估，是否要挖一条隧道，将淡水引入这些湖泊，以提高水位。但即使这样做，也是多年以后的事情了。在此之前，巴拿马运河将越来越难通过。

3、[iPhone 的实体键盘](https://www.clicks.tech/)

一家英国创业公司发明了 iPhone 的键盘套，只要把手机套在里面，就能拥有实体键盘。

![](https://cdn.beekka.com/blogimg/asset/202401/bg2024010612.webp)

不过这样的话，手机会变得非常长，好处是屏幕上不会出现虚拟键盘，可显示面积变大了。

![](https://cdn.beekka.com/blogimg/asset/202401/bg2024010613.webp)

对于那些希望在手机上面快捷打字的用户，这可能是一个很有用的工具。

![](https://cdn.beekka.com/blogimg/asset/202401/bg2024010614.webp)

4、[防跌倒背心](https://mymodernmet.com/wearable-airbags-elderly-fall-protection/)

一家苏州的创业公司，推出了“防跌倒背心”。

它借鉴了汽车安全气囊的原理，对老年人提供跌倒保护。

![](https://cdn.beekka.com/blogimg/asset/202401/bg2024011005.webp)

它根据“跌倒检测”的算法，一旦发现穿戴者跌倒，气囊会在0.18秒内充气。一个老人倒地需要0.3秒，因此就能提供防摔伤保护。

充气后，它可以包裹住头部、肩膀、背部、臀部。因为头部磕碰最致命，所以对头部的包裹尤其严密。

![](https://cdn.beekka.com/blogimg/asset/202401/bg2024011007.webp)

## 文章

1、[我的 Pascal 编程经历](https://justyy.com/archives/64211)（中文）

![](https://cdn.beekka.com/blogimg/asset/202401/bg2024010901.webp)

Pascal 语言之父尼克劳斯·沃斯（Niklaus Wirth）本周逝世。作者回忆了自己从小使用 Pascal 语言的经历。（[@DoctorLai](https://github.com/ruanyf/weekly/issues/3851) 投稿）

2、[OpenWrt 将推出自己的路由器](https://www.landiannews.com/archives/101760.html)（中文）

![](https://cdn.beekka.com/blogimg/asset/202401/bg2024011108.webp)

著名的开源路由器操作系统 OpenWrt，为了庆祝项目20周年，将推出了一款自己设计的路由器，价格低于100美元，特点是刷机刷不死。

3、[embeddings 是什么意思](https://simonwillison.net/2023/Oct/23/embeddings/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202401/bg2024010708.webp)

GPT 模型的基础是一种叫做 embeddings 的技术，用来将文本转换成向量，从而可以计算出文本之间的相似度。

4、[如何估计不重复元素的个数](https://justinjaffray.com/a-charming-algorithm-for-count-distinct/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202311/bg2023112508.webp)

本文提出一种很有趣的算法，估计一个数列里面不重复元素的个数，关键是它只使用指定大小的内存。

5、[网络推送揭秘](https://pqvst.com/2023/11/21/web-push-notifications/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202311/bg2023112706.webp)

作者写了一个简单的实现，解释渐进式 Web 应用程序的网络推送（Web Push），即怎么向用户推送通知。

6、[集装箱船的秘密语言](https://hakaimagazine.com/videos-visuals/the-secret-language-of-ships/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202311/bg2023112402.webp)

集装箱轮船往往画着很多符号（上图），本文简单介绍它们的意思，对轮船感兴趣的朋友，可以看看。

## 工具

1、[VisActor](https://visactor.io/)

![](https://cdn.beekka.com/blogimg/asset/202401/bg2024010604.webp)

一个字节出品的前端数据可视化解决方案，分成图表库 [VChart](https://visactor.io/vchart) 和表格库 [VTable](https://visactor.io/vtable)。（[@airgeek](https://github.com/ruanyf/weekly/issues/3849) 投稿）

2、[h5player for tampermonkey](https://github.com/xxxily/h5player)

一个油猴脚本，为 H5 视频网站增强功能（多级播放速度、截图、画中画、调节亮度、饱和度、对比度等），支持各大主流视频网站。（[@xxxily](https://github.com/ruanyf/weekly/issues/3852) 投稿）

3、[照片修复小小助手](https://github.com/shifu-group/inpaint_wechat)

![](https://cdn.beekka.com/blogimg/asset/202401/bg2024010605.webp)

一个开源的微信小程序，用来消除图片中指定的人和物，纯客户端实现，无服务端。（[@wangqmshf](https://github.com/ruanyf/weekly/issues/3853) 投稿）

4、[Pacman 游戏复刻](https://github.com/mumuy/pacman)

![](https://cdn.beekka.com/blogimg/asset/202401/bg2024010902.webp)

开源的吃豆人游戏网页版复刻，[试玩 Demo](https://passer-by.com/pacman/)。（[@mumuy](https://github.com/ruanyf/weekly/issues/3855) 投稿）

5、[UShare](https://share.aitimi.cn/)

![](https://cdn.beekka.com/blogimg/asset/202401/bg2024010903.webp)

一款生成代码和文本分享卡片的网页工具，可以设定字体和字型大小。（[@szmxx](https://github.com/ruanyf/weekly/issues/3856) 投稿）

6、[mdcat](https://github.com/swsnr/mdcat)

一个`cat`命令的替代品，可以在命令行显示 Markdown 文件渲染后的内容。（[@lengyijun](https://github.com/ruanyf/weekly/issues/3859) 投稿）

7、[SuperCopy](https://github.com/ruanyf/weekly/issues/3862)（超级复制）

![](https://cdn.beekka.com/blogimg/asset/202401/bg2024010904.webp)

一个浏览器插件，用来解除网页限制（比如禁用右键），然后复制网页内容。（[@WFANG12719](https://github.com/ruanyf/weekly/issues/3862) 投稿）

8、[Vue DevTools Next](https://github.com/vuejs/devtools-next)

![](https://cdn.beekka.com/blogimg/asset/202401/bg2024010905.webp)

Vue 官方开发者工具的下一个迭代，旨在增强 Vue 开发者体验。（[@webfansplz](https://github.com/ruanyf/weekly/issues/3864) 投稿）

9、[yft-design](https://yft.design/)

![](https://cdn.beekka.com/blogimg/asset/202401/bg2024010906.webp)

基于 fabric.js 的名片编辑应用。（[@more-strive](https://github.com/ruanyf/weekly/issues/3865) 投稿）

10、[ant-codeAI](https://github.com/sparrow-js/ant-codeAI/blob/main/README-zh_CN.md)

![](https://cdn.beekka.com/blogimg/asset/202401/bg2024010907.webp)

通过 OpenAI、Gemini 等模型，生成 Web（React，Vue，Tailwind CSS）和 native（react native）代码。（[@sparrow-js](https://github.com/ruanyf/weekly/issues/3860) 投稿）

11、[paint-board](https://github.com/LHRUN/paint-board)

![](https://cdn.beekka.com/blogimg/asset/202401/bg2024010908.webp)

一个开源的画板项目，汇聚了很多创意画笔，试用 [demo](https://songlh.top/paint-board/)。（[@LHRUN](https://github.com/ruanyf/weekly/issues/3867) 投稿）

12、[Read Copilot](https://apps.apple.com/us/app/read-copilot-beyond-summarizer/id6449242676)

![](https://cdn.beekka.com/blogimg/asset/202401/bg2024010909.webp)

一个苹果设备的阅读器 App，支持 RSS 和 Read It Later 功能，并可以用 AI 生成总结、文章大纲和翻译。（[@dongsuo](https://github.com/ruanyf/weekly/issues/3868) 投稿）

13、[海豹 D2C](https://music.163.com/st/seal/)

![](https://cdn.beekka.com/blogimg/asset/202401/bg2024010910.webp)

一款 Figma/MasterGo 的插件，将设计稿导出为 React、Vue、RN、微信小程序代码。（[@Kinasha](https://github.com/ruanyf/weekly/issues/3869) 投稿）

14、[vscode-common-intellisense](https://github.com/Simon-He95/vscode-common-intellisense)

VS Code 插件，为主流的前端框架提供代码提示（intellisense）。（[@Simon-He95](https://github.com/ruanyf/weekly/issues/3873) 投稿）

15、[Screenshot Beautifier](https://github.com/CH563/shot-easy-website)

![](https://cdn.beekka.com/blogimg/asset/202401/bg2024011001.webp)

开源的页面截图美化工具，试用 Demo。（[@CH563](https://github.com/ruanyf/weekly/issues/3876) 投稿）

16、[Apache Answer](https://answer.apache.org/)

![](https://cdn.beekka.com/blogimg/asset/202401/bg2024011002.webp)

一款基于 Golang 和 ReactJS 的开源问答平台软件，帮你快速建立问答社区，也可用来搭建社区论坛、支持中心、知识库等。（[@PrimmaAnna](https://github.com/ruanyf/weekly/issues/3877) 投稿）

17、[Yazi](https://github.com/sxyazi/yazi/)

![](https://cdn.beekka.com/blogimg/asset/202401/bg2024011101.webp)

一款运行在终端里面的文件管理器，跨平台，支持图片预览，使用 Rust 语言开发，速度快。（[@lengyijun](https://github.com/ruanyf/weekly/issues/3879) 投稿）

18、[AI 换脸](https://www.changeface.online/)

![](https://cdn.beekka.com/blogimg/asset/202401/bg2024011102.webp)

上传图片和视频，可以对里面的人物进行换脸。（[@CNHarrySun](https://github.com/ruanyf/weekly/issues/3882) 投稿）

## 资源

1、[linkhut](https://ln.ht/)

![](https://cdn.beekka.com/blogimg/asset/202401/bg2024011012.webp)

一个社交化的书签网站，可以供个人保存网络书签。

2、[AI Search](https://aoyo.ai/)

![](https://cdn.beekka.com/blogimg/asset/202401/bg2024010603.webp)

这是一个搜索引擎，除了搜索结果，它还会根据你选择的语言，给出搜索结果的总结。（[@aooyoo](https://github.com/ruanyf/weekly/issues/3848) 投稿）

3、[齐思](https://news.miracleplus.com/)

![](https://cdn.beekka.com/blogimg/asset/202401/bg2024010911.webp)

一个中文的每日科技新闻的集合网站，由 AI agent 在后面维护整理。（[@caoxuwen](https://github.com/ruanyf/weekly/issues/3861) 投稿）

4、[Email.ML](https://email.ml/)

![](https://cdn.beekka.com/blogimg/asset/202401/bg2024010912.webp)

一个极简的临时邮箱，支持多个域名地址，一小时有效，使用技术栈为 Cloudflare Workers + Nuxt。（[@ccbikai](https://github.com/ruanyf/weekly/issues/3870) 投稿）

## 图片

1、[开放电路](https://pluralistic.net/2023/08/14/hidden-worlds/#making-the-invisible-visible-and-beautiful)

去年，美国出版了一本名为《开放电路：电子元件的内在美》（Open Circuits: The Inner Beauty of Electronic Components）的书籍。

该书详细介绍各种基础电子元件，最特别的地方是，它有许多精美的插图，将电子元件剖开展示。下图是一个电容器的垂直截面图。

![](https://cdn.beekka.com/blogimg/asset/202308/bg2023081601.webp)

你能认出以下是哪种电子元件吗？

![](https://cdn.beekka.com/blogimg/asset/202308/bg2023081602.webp)

![](https://cdn.beekka.com/blogimg/asset/202308/bg2023081603.webp)

## 文摘

1、[我们都只是暂时的健全人](https://blog.jim-nielsen.com/2023/temporarily-abled/)

今年6月，我和家人在海滩度假。

由于一个意外，我的膝盖受伤了。我立刻就知道大事不好。

我躺在沙滩上，无法站起来，任凭海浪拍打着我。喝了几口海水之后，我拖着身子从海浪里面，向着岸上爬行。

现在过了三个月，我走路还是一瘸一拐。我的身体正在好转，但康复速度很慢。医生告诉我，“可能还需要几个月。”

![](https://cdn.beekka.com/blogimg/asset/202401/bg2024011003.webp)

这些日子里，我发现自己比以往任何时候都更需要“无障碍”设施：楼梯栏杆、入口坡道、电梯等等。

![](https://cdn.beekka.com/blogimg/asset/202401/bg2024011004.webp)

这些东西我以前很少注意到，但是现在变得对我至关重要。

我脑海中不由浮现了以前听到的一句话：“**我们都只是暂时的健全人**。”

你知道吗？世界上现在有五分之一的人，患有某种形式的残疾。即使那些100%健全的人，在他的一生中，最终都会经历或大或小、暂时性或永久性的残疾。

我知道自己很幸运。我的膝盖每天都在康复，而且我是办公室工作，不需要走动。

我现在很感激，我所拥有的健全人的能力，感激我世界上那些让我可以正常生活的人们，我以前忽视了他。

我们需要帮助残疾人，努力建立一个对残障人士友好的生活环境，最终这就是在帮助我们自己。

## 言论

1、

如果他知道你没有浪费他的时间，他就会很慷慨。

-- 朋友回忆[尼克劳斯·维尔特](https://tidyfirst.substack.com/p/niklaus-wirth-1934-2024)（Niklaus Wirth）教授，本周去世的瑞士计算机科学家，他发明了 Pascal 语言

2、

韩国的围棋世界冠军李世石，输给人工智能以后，2019年决定退出围棋比赛。原因可能是，他觉得围棋已经被机器变得廉价化了。

你原以为，精通某项运动需要多年的训练、仔细的思考、知识的积累，但是有一天，你突然发现，只要使用软件，无需任何思考和知识就能实现这个目标。这让你过去生涯中很多的付出，看起来都是浪费时间。

-- [《编程技术的日渐衰落》](https://www.newyorker.com/magazine/2023/11/20/a-coder-considers-the-waning-days-of-the-craft)

3、

正则表达式让程序员感觉像一个强大的魔法师，但这不是一件好事。

复杂的正则表达式很难理解，也很难调试。我认为，应该尽可能避免使用它们，大部分正则表达式都可以用更易读的代码替代。

-- [Terence Eden](https://shkspr.mobi/blog/2023/02/regular-expressions-make-me-feel-like-a-powerful-wizard-and-thats-not-a-good-thing/)

4、

软件需要有人通盘理解它的运作机制，所以单个工程师有可能比一个职业开发团队造出更好的产品。因为单个工程师花时间，完整理解了他要构建的软件，而职业开发团队总是从一个项目转移到另一个项目。

这也是为什么接手不熟悉的项目，比重建该项目要困难得多，以及为什么软件外包的质量总是如此糟糕。

-- [《突然间我懂了软件》](https://johnwhiles.com/posts/programming-as-theory)

5、

未来的内容生产，就是两种趋势的斗争。

一种是 GPT 工具快速、廉价地生产出大量的文章，造成巨大的内容污染。

另一种是更多的人可以借助 GPT，更容易地创作更多优质的内容，内容行业的进入门槛会降低，对周围一切的理解将会更加深入。

-- [《AI 如何改变我们的知识》](https://slite.com/blog/gpt-knowledge-revolution-is-coming)

## 往年回顾

[未来两种人会增加](http://www.ruanyifeng.com/blog/2023/01/weekly-issue-239.html)（2023 #239）

[下一个内卷的行业](http://www.ruanyifeng.com/blog/2021/12/weekly-issue-189.html)（2021 #189）

[生物学的可怕进展](http://www.ruanyifeng.com/blog/2020/12/weekly-issue-139.html)（2020 #139）

[不下雨的地方，不要去卖伞](http://www.ruanyifeng.com/blog/2020/01/weekly-issue-89.html)（2020 #89）

（完）

