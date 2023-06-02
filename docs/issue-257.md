# 科技爱好者周刊（第 257 期）：黄仁勋的 Nvidia 故事

这里记录每周值得分享的科技内容，周五发布。

本杂志[开源](https://github.com/ruanyf/weekly)，欢迎[投稿](https://github.com/ruanyf/weekly/issues)。另有[《谁在招人》](https://github.com/ruanyf/weekly/issues/3157)服务，发布程序员招聘信息。合作请[邮件联系](mailto:yifeng.ruan@gmail.com)（yifeng.ruan@gmail.com）。

## 封面图

![](https://cdn.beekka.com/blogimg/asset/202305/bg2023053105.webp)

河南省驻马店市赶在大雨之前，连夜抢收小麦，100架无人机提供夜间照明。这种无人机带着电线升空，通过地面车辆供电，可以连续照明10小时。（[via](http://news.hnr.cn/djn/article/1/1663732007049814017)）

## 黄仁勋的 Nvidia 故事

黄仁勋大概是硅谷最有影响力的华人。

![](https://cdn.beekka.com/blogimg/asset/202305/bg2023052809.webp)

1993年，他跟两个朋友一起创办了芯片设计公司 Nvidia（中文名“英伟达”）。当时是小公司，可现在是美国第五大科技公司（仅次于苹果、微软、谷歌和亚马逊）。

十年前，如果你买了 Nvidia 的股票，现在都要笑死了，因为它上涨了[105倍](https://www.chinaz.com/2023/0527/1528509.shtml)！最近十年美国涨幅第一名的股票就是它。

![](https://cdn.beekka.com/blogimg/asset/202305/bg2023052812.webp)

上周，黄仁勋突然出现在台湾，被拍到在饶河街夜市买小吃。

![](https://cdn.beekka.com/blogimg/asset/202305/bg2023052810.webp)

后来大家才知道，他要参加5月27日的台大毕业典礼，他是今年的演讲嘉宾。

![](https://cdn.beekka.com/blogimg/asset/202305/bg2023052811.webp)

我推荐这个演讲，网上有[全文](https://www.businessweekly.com.tw/focus/blog/3012429)。原文是英语，已经译成中文。

他只讲了20分钟，但是解开了我心中一直的疑问：Nvidia 是怎么发家的。下面就是我根据这个演讲，整理出来的 Nvidia 的故事。

黄仁勋说，**为什么要创立 Nvidia？因为我们看好加速计算。**

人类对计算速度的要求一定会越来越高，CPU 只能做通用计算，加速计算需要定制的专用硬件，所以我们的创业目标就是加速计算的硬件。

市场需求量最大的加速计算硬件，就是游戏的图形芯片（GPU），所以我们选择游戏显卡作为创业产品。我们只做芯片设计，生产全部外包。

1994年，我们的第一个客户是日本游戏公司 SEGA，我们为它的游戏主机设计显卡。

![](https://cdn.beekka.com/blogimg/asset/202305/bg2023052813.webp)

（图片说明：Nvidia 的第一个产品，SEGA 游戏机的 [NV1 显卡](https://segaretro.org/NV1)。）

但是第二年，微软发布了 Windows 平台的图形接口 Direct3D。我们一下子就慌了，因为它跟我们的设计是冲突的。

我们最终选择中止 SEGA 的合约，**改为 Windows 平台开发 GPU**。这是一步险棋，因为 SEGA 是我们唯一的客户，却被我们踢走了。我们的资金只能支持6个月，如果这点时间里面，拿不出新产品，我们就只有倒闭了。

幸运的是，快要没钱的时候，我们设计出了 Riva 128，这块芯片取得了成功。到了1997年底，它的出货量超过100万张，我们就这样活了下来。

![](https://cdn.beekka.com/blogimg/asset/202305/bg2023052905.webp)

我们为 Windows 平台设计显卡，一直干了10年。

虽然产品很受欢迎，但是有一个问题：**人们只用这些显卡打游戏，无法用于其他的加速计算。** 因为那时的 GPU 必须通过 Windows 的接口使用，受制于操作系统，用户无法直接操作 GPU，很难将其用于自己的用途。

为了扩展 GPU 的用途，**2007年我们推出了 CUDA 框架，让用户可以操作 GPU 底层接口**，定制化编程，满足自己的加速计算需求。GPU 从此可以用于科学运算、物理模拟等各方面。

![](https://cdn.beekka.com/blogimg/asset/202305/bg2023052906.webp)

令人失望的是，市场需求始终不旺，而我们推进 CUDA 的成本非常高。那几年，我们的利润受到严重拖累，股价低迷。内部也出现分歧，有人提出放弃 CUDA。

谁能想到，命运的转折点突然出现了。**2014年，人们发现 CUDA 能够满足 AI 训练的大量计算**，它一下子就变得异常火爆。随着 AI 的快速发展，我们从此走上了康庄大道，股价一飞冲天。

除了 AI，我们也尝试把加速计算推广到其他新兴领域。

2007年 iPhone 诞生了，手机芯片成为了一个超级市场。我们开始考虑为安卓手机开发芯片。

但是，手机芯片是集成的，CPU、GPU、通信芯片（调制解调器）做在一起。**如果我们要做安卓芯片，就必须研发通信芯片。这跟我们的加速计算方向是不符合的。**

我们不得不做出一个艰难的决定：放弃手机市场。为了弥补这个损失，**我们选择进军另一个更符合我们的市场：自动驾驶的车用芯片。** 自动驾驶的计算量非常大，市场也很广阔。

![](https://cdn.beekka.com/blogimg/asset/202305/bg2023052907.webp)

上面就是 Nvidia 的简史。回顾这段历史可以看到，只要你坚信自己的大方向是对的，不妨就坚持做下去，不要害怕遇到挫折，也不要被眼前利益诱惑，最终会看到回报，Nvidia 就是这样走过来的。

## 活动消息

本周末和下周末，有两个技术活动，欢迎大家参加。

1、[抖音 Android 讲座（第4期）](https://www.bagevent.com/event/8479092?bag_track=001)

抖音这种10亿用户级别的超级 App，到底是怎么开发的？

去年底开始，周刊发布了好几个预告，字节官方为了推广技术品牌，策划了一个系列活动。**抖音的安卓团队要跟社区交流**，主力程序员依次登台，介绍开发实践。

抖音背后是一个巨大的软件工程，他们团队的人非常多，对于这次活动也很重视，想展示一些干货，不要变成泛泛的见面会，所以选题很细，**一口气安排了几十个演讲，不得不分成六期**，两个月一期。

四月是第三期，他们事后接受听众的反馈，做了一些调整。**本月是第四期，更平易近人**，加入了一些通用的软件工程、软件设计内容，这次一共有五个演讲，不仅安卓程序员可以听，其他领域感兴趣的同学也能听。

![](https://cdn.beekka.com/blogimg/asset/202306/bg2023060103.webp)

> 1. **抖音全源码实战**：如何应对超大工程复杂度
> 1. **插件化架构演进之路**：抖音如何使用插件结构
> 1. **虚拟机优化实践**：抖音内置的虚拟机是怎么回事
> 1. **体验优化实践**：如何精细化提升用户体验
> 1. **稳定性优化及工具体系建设**：如何保证应用的稳定可靠

本次活动时间是下周日（6月11日）下午，现在就可以**免费报名**，点击[这个链接](https://www.bagevent.com/event/8479092?bag_track=001)，或者扫描下方二维码，了解活动详情，报名预约线上直播。

![](https://cdn.beekka.com/blogimg/asset/202306/bg2023060104.webp)

这种规模的活动，整个大团队集体亮相，以后大概很难再有了。大家别错过这个跟字节工程师交流的机会，参会者还有抽奖，现场准备了大量的精美礼品。

2、[云原生沙龙](https://www.bagevent.com/event/sales/rr8fx9nlwz3ykg7m65evetbr3ualrtjt)

云端计算现在一般用“云函数”来做，也就是 Serverless 模式。

你写一个函数，放到云端，用 HTTP 请求触发，返回它的运行结果。这样的好处很多，**不用自己架设后端，可以随意缩放，而且省钱。**

但是，一旦落实到具体业务，**大家往往不清楚 Serverless 怎么落地**。就算是大公司，目前也在探索中。

明天（6月3日）下午，字节的基础架构团队和稀土掘金社区联合办了一个技术沙龙，大家一起探讨 Serverless 的实际应用。

重点的是，**地点在北京方恒时尚中心，大家知道，那里就是字节的工区**。如果你想参观字节，可以借这个机会去看看，当然也可以选择线上参会。

![](https://cdn.beekka.com/blogimg/asset/202306/bg2023060105.webp)

> 1. 字节跳动的 Serverless Worker，by 死月（字节 Node.js 团队）
> 1. Serverless 计算的落地实践，by 吴桂勇（字节火山引擎）
> 1. 使用 Serverless 提升资源利用率，by 吴天龙（阿里云）
> 1. 字节跳动激励业务的 Serverless 的场景与应用，by 李嘉程（字节研发）

跟大家交流的，都是字节和阿里的第一线工程师。线下参会的同学，还有筋膜枪、AI 音箱、掘金纪念品的现场抽奖。

大家可以点击[这个链接](https://www.bagevent.com/event/sales/rr8fx9nlwz3ykg7m65evetbr3ualrtjt)，或者扫描上方图片二维码，了解活动详情，选择线下/线上报名参会。

## 科技动态

1、[带显示屏的移动硬盘](https://learn.adafruit.com/a-floppy-thumb-drive-with-a-color-file-icon-display)

美国网友制作了一个很有创意的移动硬盘。

![](https://cdn.beekka.com/blogimg/asset/202303/bg2023030202.webp)

它的外壳模仿传统的3.5寸软盘，但是上面带有一个彩色触摸屏，可以查看里面到底包含了哪些文件。

![](https://cdn.beekka.com/blogimg/asset/202303/bg2023030203.webp)

大多数程序员家里，都有一堆移动硬盘和 U 盘。要搞清楚里面有什么文件，就需要把它们插到电脑上，这很麻烦。这个装置就解决了这个问题。

2、[全息马戏团](https://www.smithsonianmag.com/smart-news/german-circus-uses-stunning-holograms-instead-live-animal-performers-180972376/)

一家德国马戏团举行一场 3D 全息马戏表演，完全不使用真实的动物。

![](https://cdn.beekka.com/blogimg/asset/202303/bg2023030204.webp)

表演现场一共有11台投影机，分布在不同的方位，观众等于在观看360度视频。

马戏团说，这样有利于保护动物，不必为了娱乐和赚钱而圈养训练它们。另外，观众还能看到一些以前没法表演的奇观，比如巨大的金鱼在空中游动。

如果效果好，以后的现场表演可能都是这种全息视频，不仅马戏表演，演唱会也可以。

3、[3D 打印篮球](https://www.dezeen.com/2023/03/08/wilsons-airless-3d-printed-basketball/)

著名篮球品牌 Wilson 开发了一款 3D 打印篮球。

![](https://cdn.beekka.com/blogimg/asset/202303/bg2023031301.webp)

这种篮球是打印出来的，内部中空，表面布满了网眼，采用弹性聚合材料，最大优点就是不用充气。

![](https://cdn.beekka.com/blogimg/asset/202303/bg2023031302.webp)

传统篮球必需充气，气压太高或太低，都会影响手感。3D 打印篮球就没有这个问题，尺寸、重量、弹性都与传统篮球接近，目前的问题就是还不够耐用。

![](https://cdn.beekka.com/blogimg/asset/202303/bg2023031303.webp)

4、[七天环游世界](https://www.usatoday.com/story/travel/2023/05/18/new-guinness-world-record-travel-seven-wonders-week/70232560007/)

一个美国男子实现了“七天游览世界七大奇观”的壮举。

![](https://cdn.beekka.com/blogimg/asset/202305/bg2023052805.webp)

他在七天时间（6天16小时14分钟）里面，亲身游览了以下七个地点。

> - 中国 长城
> - 印度 泰姬陵
> - 约旦 佩特拉古城
> - 意大利 罗马斗兽场
> - 巴西 里约热内卢的基督救世主塑像
> - 秘鲁 马丘比丘
> - 墨西哥 奇琴伊察

![](https://cdn.beekka.com/blogimg/asset/202305/bg2023052806.webp)

![](https://cdn.beekka.com/blogimg/asset/202305/bg2023052807.webp)

由于时间实在太紧张，他必须在每个景点打卡后，立刻赶往飞机场，乘坐最近的航班离开。这七天的吃饭和睡觉，他都在飞机上，中间只在罗马吃过一顿麦当劳。

![](https://cdn.beekka.com/blogimg/asset/202305/bg2023052808.webp)

这次活动是一家旅行社赞助的。该旅行社表示，如果你愿意出3.8万美元，也能为你安排世界七大奇迹的套餐，当然时间会比七天长一些。

## 文章

1、[Meta 裁员亲历记](https://www.huxiu.com/article/1600148.html)（中文）

![](https://cdn.beekka.com/blogimg/asset/202305/bg2023052604.webp)

Meta 公司一共裁掉了1万多个员工，一位亲历者讲述自己被裁过程和感受，有很多细节。

2、[我用 GPT 给电子厂带货](https://t.cj.sina.com.cn/articles/view/6286736254/176b7fb7e01901df3u)（中文）

![](https://cdn.beekka.com/blogimg/asset/202305/bg2023052803.webp)

作者介绍自己怎么用 ChatGPT 大批量制作营销文章和视频。

3、[越来越庞大的显卡](https://m.cnbeta.com.tw/view/1362895.htm)（中文）

微星推出了一款原型显卡，号称是为了下一代 RTX 5090 显卡准备的设计，厚达空前的4.2个插槽。

![](https://cdn.beekka.com/blogimg/asset/202306/bg2023060107.webp)

里面主要是散热的铜片，一般的机箱根本放不下。很难想象，这么发展下去，未来的游戏电脑会是什么样。

4、[Deno 支持 npm 打包](https://deno.com/blog/v1.34)（英文）

![](https://cdn.beekka.com/blogimg/asset/202305/bg2023052516.webp)

Deno 1.34 版引入了一个新功能，可以把 Node.js 程序和 npm 模块打包，成为一个二进制文件，支持 Windows/Mac/Linux 全平台。

5、[popover API 介绍](https://developer.chrome.com/blog/introducing-popover-api/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202305/bg2023052402.webp)

网页的弹出层是很常用的 UI 模式，Chrome 正式推出了 popover API，浏览器内置了弹层组件。

6、[如何制作 GitHub 个人主页](https://www.bengreenberg.dev/posts/2023-04-09-github-profile-dynamic-content/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202304/bg2023041101.webp)

本文演示 GitHub 个人主页如何定制，并且使用脚本，通过 GitHub Actions 定期更新。

7、[谷歌 AI 备忘录](https://www.semianalysis.com/p/google-we-have-no-moat-and-neither)（英文）

这篇文章据说是谷歌内部泄漏的，一位研究员写给高管的备忘录，看上去像真的。

他分析了目前 AI 的发展状况，提出谷歌的应对策略，建议加大开源力度。

## 工具

1、[Csv2ImageApp](https://github.com/fummicc1/csv2img)

![](https://cdn.beekka.com/blogimg/asset/202301/bg2023011906.webp)

这个开源工具可以将 CSV 文件转成图片。

2、[SAMIST](https://github.com/dibrale/samist)

![](https://cdn.beekka.com/blogimg/asset/202305/bg2023052702.webp)

一个 Python 桌面程序，为 Meta 公司的 [AI 模型 SAM](https://segment-anything.com/) 提供了图形界面，可以提取照片里面的物体。

3、[Git-Sim](https://initialcommit.com/blog/git-sim)

![](https://cdn.beekka.com/blogimg/asset/202301/bg2023012301.webp)

一个命令行工具，可以生成图片或动画，显示某个 Git 命令对当前仓库的影响。

4、[Read Something](https://github.com/ReadSomething/ReadSomething)

![](https://cdn.beekka.com/blogimg/asset/202306/bg2023060114.webp)

一个开源的 Chrome 插件，可以将网页转成阅读模式，并且内置了 AI 总结、翻译、Mardown 转换等功能。（[@zhongyiio](https://github.com/ruanyf/weekly/issues/3162) 投稿）

5、[MIB](https://github.com/QC2168/mib)

![](https://cdn.beekka.com/blogimg/asset/202306/bg2023060108.webp)

一款开源的 Windows 桌面应用，将安卓手机备份到桌面电脑，支持增量备份。（[@QC2168](https://github.com/ruanyf/weekly/issues/3148) 投稿）

6、[Rubic](https://rubic.jaskang.vip/)

![](https://cdn.beekka.com/blogimg/asset/202306/bg2023060110.webp)

一个响应式小程序开发框架，采用跟 Vue3 一样的编程模型。（[@JasKang](https://github.com/ruanyf/weekly/issues/3150) 投稿）

7、[SQLucky](https://github.com/tenie/SQLucky)

![](https://cdn.beekka.com/blogimg/asset/202306/bg2023060112.webp)

一款开源的数据库可视化操作工具，基于 Java，用来平替同类付费软件。（[@tenie](https://github.com/ruanyf/weekly/issues/3154) 投稿）

8、[flutter_chatgpt](https://github.com/bravekingzhang/flutter_chat_box)

![](https://cdn.beekka.com/blogimg/asset/202306/bg2023060111.webp)

一款开源的 ChatGPT 聊天客户端，基于 Flutter，支持手机和桌面所有平台。（[@bravekingzhang](https://github.com/ruanyf/weekly/issues/3151) 投稿）

9、[IceCubesApp](https://github.com/Dimillian/IceCubesApp)

![](https://cdn.beekka.com/blogimg/asset/202301/bg2023012502.webp)

开源的社交媒体 Mastodon 的 iOS 客户端，功能比较多，还在不断开发中。

10、[Juice Shop](https://github.com/juice-shop/juice-shop)

![](https://cdn.beekka.com/blogimg/asset/202301/bg2023012503.webp)

一个用作安全训练的 Web 应用，里面包含了最常用的10种安全漏洞，供练习者破解。

## 资源

1、[Fluent 2](https://fluent2.microsoft.design/)

![](https://cdn.beekka.com/blogimg/asset/202305/bg2023052804.webp)

微软发布新的设计风格 Fluent 2，不仅用于 Windows，还提供用于 Web 和 iOS 的组件。

2、[计算机专业学习路线](https://hackway.org/docs/cs/intro)

![](https://cdn.beekka.com/blogimg/asset/202306/bg2023060109.webp)

据说站长是北大学生，参考美国名校的计算机培养方案，整理的计算机专业学习路线。（[@Stein283036](https://github.com/ruanyf/weekly/issues/3149) 投稿）

3、[Docker and Kubernetes 完整开发指南](https://www.bilibili.com/read/cv21266100)

![](https://cdn.beekka.com/blogimg/asset/202306/bg2023060113.webp)

Udemy 视频课程，搬运到了 B 站，有中文字幕。通过 Node.js 项目，循序渐进学习 Docker 和 Kubernetes。（[@lyf61](https://github.com/ruanyf/weekly/issues/3156) 投稿）

4、[从头实现一个数据库](https://build-your-own.org/database/)

![](https://cdn.beekka.com/blogimg/asset/202304/bg2023042409.webp)

介绍数据库原理的英文电子书，前半部分可以免费阅读。作者还另著有一本[《自己实现 Redis》](https://build-your-own.org/redis/)。

5、[LLM University](https://docs.cohere.com/docs/llmu)

![](https://cdn.beekka.com/blogimg/asset/202305/bg2023052602.webp)

介绍 LLM（大规模语言模型）的免费教程网站。

## 图片

1、[佛罗里达海滩](https://www.thisiscolossal.com/2022/12/tom-hegen-beach-series/)

一个美国摄影师专门拍摄佛罗里达州的热门海滩，人群和遮阳伞的照片非常惊艳。

![](https://cdn.beekka.com/blogimg/asset/202212/bg2022122202.webp)

![](https://cdn.beekka.com/blogimg/asset/202212/bg2022122203.webp)

![](https://cdn.beekka.com/blogimg/asset/202212/bg2022122204.webp)

![](https://cdn.beekka.com/blogimg/asset/202212/bg2022122205.webp)

## 文摘

1、[为什么硬件很难做](https://threadreaderapp.com/thread/1604018884662951938.html)

一年前，我们收到客户的报告，我们生产的工业机器人出现了莫名其妙的故障。

我们取回了故障机器人，硬件和软件团队进行了各种分析，总是无法复现用户遇到的故障。

![](https://cdn.beekka.com/blogimg/asset/202306/bg2023060116.webp)

我们猜测，原因大概是耦合器松了，导致电机无法带动车轮。

于是，我们重新设计了耦合器。但是，产品都在用户手里，很难一个个回收进行更换。我们就想出了另外一种方法，让用户自己操作，打开机器人，重新拧紧耦合器。

根据用户反馈，这个方法有效，机器人没有再出现故障。

后面整整一年，都平安无事。

正当我们忘了这件事，上个月客户又报告，故障重新出现了。

我们想这一定不是原来的故障，肯定是别的原因导致的。我们取回了机器人，在公司开关了几百次，跟一年前一样，我们无法复现用户遇到的故障。

后来，有人突发奇想，将机器人放入冰箱。第二天早上我们把它拿出来，很神奇，故障就出现了。过了十分钟，故障在室温下又消失了。于是我们明白了，它跟温度有关系。

为了彻底搞清楚问题，公司放午餐的冰箱，箱塞满了机器人。

![](https://cdn.beekka.com/blogimg/asset/202212/bg2022121801.webp)

最终，我们确定有一个组件在特定温度下，会产生噪声信号，导致了故障。只要移除两个电阻就可以修复它。这次真的是彻底修复了。 

事后证明，去年的故障也是这个原因。当时，我们让客户拆开机器，重新拧紧耦合器，使得机器内部的温度上升了，所以故障就消失。实际上这个故障跟耦合器完全无关。

再加上后来冬天过去了，天气转暖，故障就再也没有出现。等到冬天再次到来，故障就重新出现了。

我们的机器人属于很简单的那种，只有数百个零件，但是每个零件都可能发现不可预测、难以发现的故障，这就是为什么硬件很难做的原因。

## 言论

1、

以后不再有《教父》，也不再有《绿野仙踪》，只有15秒的人类愚蠢片段。

-- [一位好莱坞编剧](https://www.theguardian.com/us-news/2023/may/26/hollywood-writers-strike-artificial-intelligence)，谈他怎么看待 TikTok

2、

财务成功的最快途径，是在三个不同的即将上市的公司各自工作四年，然后四十岁就可以退休。

-- [《四十年的职业生涯》](https://lethain.com/forty-year-career/)

3、

我建议购买一本《成功人士的七个习惯》，但不要阅读，而是烧掉它，从而做出一个象征性姿态，跟这类成功学决绝。

-- [Linus Torvalds](https://news.ycombinator.com/item?id=35847971)，Linux 创始人

4、

我想关掉 Youtube 的短视频（Shorts）功能，点击“删除”按钮，结果它显示“此功能将隐藏30天”。

我感觉像被某个寻求晋升的谷歌产品经理打了一记耳光，他告诉我，他比我更了解我的需求。

-- [Hacker News 网友](https://news.ycombinator.com/item?id=35850324)

## 历史上的本周

[为什么软件变得复杂](http://www.ruanyifeng.com/blog/2022/06/weekly-issue-210.html)（2022 #210）

[中年码农的困境](http://www.ruanyifeng.com/blog/2021/05/weekly-issue-160.html)（2021 #160）

[如果不能去美国上市](http://www.ruanyifeng.com/blog/2020/06/weekly-issue-110.html)（2020 #110）

[一本介绍人类起源的学术自传](http://www.ruanyifeng.com/blog/2019/06/weekly-issue-60.html)（2019 #60）

## 鸣谢

周刊得到国内新一代知识管理与协作平台 [FlowUs](https://flowus.cn?promotionChannel=GW_RYF_01) 的帮助，深表感谢。

[FlowUS](https://flowus.cn?promotionChannel=GW_RYF_01)  = 文档 + 表格 + 网盘。你可以用它写文档、做主页、管理数据、存储文件等等。

每一期周刊同时发布在[ FlowUs 专栏](https://ruanyf-weekly.flowus.cn/?code=FLOWUS&promotionChannel=WX_RYF_00)，欢迎大家也去开通自己的专栏和主页。

![](https://cdn.beekka.com/blogimg/asset/202303/bg2023030205.webp)

（完）

