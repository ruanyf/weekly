# 科技爱好者周刊（第 419 期）：机房来了，写字楼走了

这里记录每周值得分享的科技内容，周五发布。

本杂志[开源](https://github.com/ruanyf/weekly)，欢迎[投稿](https://github.com/ruanyf/weekly/issues)。另有[《谁在招人》](https://github.com/ruanyf/weekly/issues/12953)服务，发布程序员招聘信息。合作请[邮件联系](mailto:yifeng.ruan@gmail.com)（yifeng.ruan@gmail.com）。

## 封面图

![](https://cdn.beekka.com/blogimg/asset/202611/bg2026111203.webp)

成都麓湖生态城的 Q8 步行桥，采用双曲线造型，在机动车桥的下方穿过，盘旋处形成一个湖心岛。（[via](https://www.deckmetal.cn/projects/q8-bridge/)）

## 机房来了，写字楼走了

前几天，我看到一个短视频。有个博主来到内蒙古乌兰察布，拍下自己看到的景象，非常震惊。

![](https://cdn.beekka.com/blogimg/asset/202611/bg2026111107.webp)

那里现在是真正的“热土”，曾经的草原遍布工地，聚集了几万个建筑工人，到处都在开工建设机房。

你敢相信吗？一个内陆地级市，最新统计是已经有100多个数据中心（包括建设中），全国主要 IT 公司和算力公司几乎都在那里有自己的机房。乌兰察布已经成了我国算力战略的重点城市。

它的成因，那个博主总结了几点，说得挺好。

（1）离北京近。它跟北京的直线距离约240公里，光纤往返延迟仅4.2毫秒。

（2）绿电丰富。它的有效风场面积占全国十分之一，年日照超3200小时，风电和太阳能根本用不完，导致电价便宜。

（3）气温低。年平均温度4.3度，一年有10个月可以直接利用室外冷空气来散热。

（4）（最初的）地价便宜，一亩才小几万元。当然，现在涨了好多倍。

![](https://cdn.beekka.com/blogimg/asset/202611/bg2026111108.webp)

但是，最打动我的，还是他在短视频结尾说的一句话。

他看着一眼望不到头的机房，脱口而出：“**写字楼会越来越不值钱**，智力产出正转移到这些数据中心。”

这些新建的数据中心，主要用来跑大模型。随着越来越多的公司广泛使用 AI，很多智力工作会在机房里面完成，那么谁还需要大面积的写字楼？

再说，任何地方都可以远程调用算力，何必在城市的黄金地段花大价钱租写字楼呢。

我被他的这句话提醒了，意识到了：**机房是新的写字楼，将是智力成果的主要生产场所**，机房越多，写字楼的需求就越少。

由此看来，城市的办公地产是不看好的，写字楼将过剩，租金下跌。前些年，很多城市都在大建 CBD（中央商务区），以后可能没有这个概念了，乌兰察布那样的“机房之城”才是 AI 时代的 CBD。

## 奈奎斯特极限

奈奎斯特极限（Nyquist Limit）是信号处理领域的一条定律。

它指的是，如果你想了解一个不断变化的信号，**采样频率必须至少是最高频率的两倍**，否则就无法准确还原信号。

比如，一个信号每秒变化5次（即频率为5），那么采样频率至少必须是10（即每秒采样10次）。

![](https://cdn.beekka.com/blogimg/asset/202611/bg2026111104.webp)

大家可以参考上图，不同的采样频率（左侧）还原出来的波形不一样（右侧），采样频率越低，失真越大。

[有一篇文章](https://www.ryanprior.com/posts/nyquist-limit-frequency-of-changes-in-tech-invalidates-understanding/)提出，**AI 编程也存在奈奎斯特极限**，代码的改动次数与阅读次数是正比例关系。

> 阅读代码的频率，必须至少是代码改动频率的两倍，否则无法理解代码。

假设 AI 平均每天改动5次代码，那么你平均每天至少要阅读10次代码（采样），否则很快就会丧失对代码仓库的理解。

大家可以想一想，是不是这样。有些公司为了加快开发速度，不断增加 AI 的使用频率，每天提交大量的代码改动。但是，阅读代码的频率没有同步提升，大大低于奈奎斯特极限（2倍），那么就进入了信号失真状态，他们对自己的产品已经不了解了。

## 不加密的加密 U 盘

上周，有一件非常尴尬的事情。

国外网友爆出新闻，联想的[加密 U 盘](https://www.reddit.com/r/technology/comments/1xl2pr3/lenovos_encrypted_fingerprint_usb_drive_is_just/)有问题。

![](https://cdn.beekka.com/blogimg/asset/202611/bg2026110415.webp)

这个 U 盘带有指纹传感器，必须先通过指纹认证，然后才能读写。

![](https://cdn.beekka.com/blogimg/asset/202611/bg2026110416.webp)

网友出于好奇，将这个 U 盘拆开，结果大跌眼镜，里面的存储介质竟然是一块 SD 卡。

![](https://cdn.beekka.com/blogimg/asset/202611/bg2026110417.webp)

取下这块 SD 卡，指纹加密就消失了，卡里的数据不加密就能读写。

难以想象啊，为什么要这么做？加密措施变成了商业噱头。

此外，U 盘里面放 SD 卡，意味着每次读写都要经过双重电路（U 盘电路 + SD 卡电路），性能肯定受影响。而且，SD 卡是不可靠介质，不能用来长期保存数据。

## 科技动态

1、[流水线键盘](https://github.com/google/mozc-devices/tree/main/mozc-conveyorbelt)

谷歌有一个非常受欢迎的输入法 [Gboard](https://play.google.com/store/apps/details?id=com.google.android.inputmethod.latin)，开发团队在日本，每年10月都要发布一款创意键盘，已经持续了[超过15年](https://github.com/google/mozc-devices)。

前年是一个乌比莫斯环键盘，去年是一个电话拨号转盘键盘。

![](https://cdn.beekka.com/blogimg/asset/202610/bg2026102117.webp)

今年更奇特，居然是流水线键盘。每排按键的下方是一个传送带，所有按键都在传送带上循环滚动。

![](https://cdn.beekka.com/blogimg/asset/202610/bg2026102112.webp)

背后的想法是这样的：打字时，手指需要不停移动，才能按到对应的键。

能不能反过来，手指不动，让键盘动？

把按键放在传送带上，当它滚动到手指下方时，你往下一按就可以了，整个概念很像回转寿司的滚动带。

![](https://cdn.beekka.com/blogimg/asset/202610/bg2026102113.webp)

这个键盘一共有四条传送带，每条传送带有29个按键。

![](https://cdn.beekka.com/blogimg/asset/202610/bg2026102114.webp)

一旦熟悉以后，用户可以实现不移动手指进行打字，不过打字速度会很感人。

![](https://cdn.beekka.com/blogimg/asset/202610/bg2026102115.webp)

2、[车载泡脚盆](https://news.qq.com/rain/a/20261107A0CB1S00)

深蓝汽车申请了一项专利，汽车座椅下方可以安装泡脚盆。它自动伸缩，平时缩在座椅里面，需要时乘客用它来泡脚。

![](https://cdn.beekka.com/blogimg/asset/202611/bg2026111011.webp)

根据专利文件，它带有按摩功能，泡脚时盆底的凸起会按摩脚底。另外，还可以配置紫外线模块，进行杀菌。

![](https://cdn.beekka.com/blogimg/asset/202611/bg2026111012.webp)

其实，这个创意挺好的，开长途时，乘客无事可做，正好泡泡脚。

但是，它需要乘客自己注水，然后外接排水管，这意味着车辆必须有储水装置。而且，万一道路颠簸，水还会洒出来，除了搞乱内饰，对电车的风险很大。

3、[树冠桥](https://news.mongabay.com/2026/07/zero-roadkill-as-amazon-canopy-bridges-secure-15000-crossings/)

巴西的很多公路都穿过亚马逊雨林。野生动物穿过公路时，很容易被车撞到。

一个动物保护组织，就着手在公路两侧的树冠之间架设吊桥，供动物通过。

![](https://cdn.beekka.com/blogimg/asset/202608/bg2026080304.webp)

桥上的摄像头，已经多次拍到了猴子过桥。

![](https://cdn.beekka.com/blogimg/asset/202608/bg2026080305.webp)

这说明，这种公路上方的通道，确实能够保护动物，减少交通事故，还能扩大动物的栖息范围。巴西国会正在通过一项法案，将这种动物通道推广到全国。

![](https://cdn.beekka.com/blogimg/asset/202608/bg2026080306.webp)

## 文章

1、[我如何阻挡 AI 爬虫访问网站](https://shkspr.mobi/blog/2026/11/blunt-banhammer-blocks-basic-bots-ballistically/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202611/bg2026111003.webp)

作者的网站流量出现飚升，都是机器人流量。他想了一个办法，在网页中加入一个肉眼不可见的链接，凡是访问该链接的 IP 地址一律自动封禁。

2、[Fable 5.2 一下就生成了我侄子的梦想游戏](https://notesbylex.com/fable-5-2-one-shotted-my-nephews-dream-game)（游戏）

小侄子希望作者帮他做一款电子游戏，作为生日礼物。侄子画出了他心目中的游戏草图（下图）。

![](https://cdn.beekka.com/blogimg/asset/202611/bg2026111004.webp)

作者就把这些草图提交给刚发布的 Fable 5.2 模型，大致讲了一下游戏的设想。结果，Fable 5.2 用一个晚上，就生成了所有12个关卡，而且第一次的生成结果就可玩。

![](https://cdn.beekka.com/blogimg/asset/202611/bg2026111005.webp)

![](https://cdn.beekka.com/blogimg/asset/202611/bg2026111006.webp)

3、[币安63亿美元被盗内幕](https://www.theregister.com/security/2026/11/03/north-korean-fake-job-interview-led-to-63b-binance-heist/5307398)（英文）

前不久，世界最大加密货币交易平台“币安”被黑客攻破，转走了价值63亿美元的加密货币。本文透露了一些内幕，据说起因是某个币安工程师打算跳槽，找工作面试时，被假冒的雇主欺骗，在笔记本上安装了一个间谍软件。

4、[Node.js 27 的新特性](https://nodejsdesignpatterns.com/blog/whats-new-in-nodejs-27/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202611/bg2026111007.webp)

从明年开始，Node.js 每年将只发一个版本，每个版本都是长期支持。2027年的 Node.js 27 版已经在测试了，本文介绍它的新特性。

5、[我放弃 Claude Code，改用 Pi](https://caleb.software/posts/claude-to-pi.html)（英文）

![](https://cdn.beekka.com/blogimg/asset/202611/bg2026111013.webp)

作者谈了他对 Claude Code 不满意的地方，导致最后放弃，改用了 [Pi](https://pi.dev/)。

6、[黑苹果重生](https://www.naut.ca/blog/2026/11/05/the-hackintosh-reborn-with-ai/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202611/bg2026111103.webp)

黑苹果指的是将苹果系统移植到非苹果设备上。前几年苹果更换成 M 系列处理器，黑苹果就废了，但是现在 AI 可以帮助移植，黑苹果又慢慢复活，本文举了一些例子。

## 工具

1、[Window Sweaters for macOS](https://github.com/saragordic/window-sweaters)

![](https://cdn.beekka.com/blogimg/asset/202611/bg2026111017.webp)

一个 Mac 应用，为常见应用的窗口穿上毛衣。

2、[dnsglobe](https://github.com/514-labs/dnsglobe)

![](https://cdn.beekka.com/blogimg/asset/202607/bg2026070702.webp)

一个命令行工具，对全球34个公共 DNS 进行测速，找出到你速度最快的 DNS 服务器。

3、[kan.ban](https://github.com/kanbn/kan)

![](https://cdn.beekka.com/blogimg/asset/202506/bg2025060312.webp)

基于 JS 的开源看板应用，Trello 替代品。

4、[Procexp-Mac](https://github.com/microsoft/Procexp-Mac)

![](https://cdn.beekka.com/blogimg/asset/202611/bg2026111102.webp)

一个 macOS 桌面应用，可以查看每个进程的详细信息，相当于把 Process Explorer 移植到 Mac。

5、[rVPN](https://rvpn.org/)

![](https://cdn.beekka.com/blogimg/asset/202611/bg2026111101.webp)

一种开源的加密通信协议，可以让加密通信与 HTTPS 无法区分，提供服务端与各种客户端。

6、[BoopFace](https://github.com/CX-ArtLab/BoopFace)

![](https://cdn.beekka.com/blogimg/asset/202611/bg2026110902.webp)

一个 Web 组件，可以在网页插入 SVG 机器人脸组件，适用于 AI 聊天机器人和 Agent 界面，提供18种表情和互动。（[@CX-ArtLab](https://github.com/ruanyf/weekly/issues/13144) 投稿）

7、[Melarka](https://github.com/aaronsuns/melarka)

![](https://cdn.beekka.com/blogimg/asset/202611/bg2026111001.webp)

一个本地的音乐流媒体服务器，可以播放本地和 YouTube 音乐，支持多账号，提供安卓和 iOS 客户端。（[@aaronsuns](https://github.com/ruanyf/weekly/issues/13226) 投稿）

8、[Cyber API](https://github.com/vicanso/cyberapi)

![](https://cdn.beekka.com/blogimg/asset/202611/bg2026111002.webp)

用于 API 调试的桌面客户端，使用 Rust + GPUI 构建，由于通过 GPU 直接绘制，没有了 Electron 的内存占用与卡顿。（[@vicanso](https://github.com/ruanyf/weekly/issues/13233) 投稿）

9、[Beamlynx](https://beamlynx.com/zh)

一个桌面的数据库客户端，在数据库里删一行数据，它会找出所有指向这行数据的表，删除时不会留下指向已删除行的外键，非商业使用免费。（[@ahmadnazir](https://github.com/ruanyf/weekly/issues/13271) 投稿）

10、[MD-Vault](https://github.com/xiangc579/md-vault)

![](https://cdn.beekka.com/blogimg/asset/202611/bg2026111201.webp)

一个 Web 应用，使用 Markdown 格式保存 2FA 双因素认证的动态时间码，通过网页看板查看。（[@xiangc579](https://github.com/ruanyf/weekly/issues/13295) 投稿）

11、[zlib](https://github.com/heartleo/zlib)

![](https://cdn.beekka.com/blogimg/asset/202611/bg2026111202.webp)

Z-Library 的命令行客户端，可以搜索、下载图书。（[@heartleo](https://github.com/ruanyf/weekly/issues/13316) 投稿）

## 资源

1、[temp-api](https://www.temp-api.com/)

![](https://cdn.beekka.com/blogimg/asset/202611/bg2026110901.webp)

这个网站提供免费的 JSON API 的 Mock 服务。（[@sunjian-github](https://github.com/ruanyf/weekly/issues/13211) 投稿）

2、[MCP 详解](https://mcp-explained.com/)

![](https://cdn.beekka.com/blogimg/asset/202611/bg2026111105.webp)

这个网站提供 MCP 教程，把相关概念都用图形解释。看上去是用 AI 生成的，但对于了解 MCP 还是有帮助。

3、[Rail Cube](https://owenlacey.dev/railcube-optimisation/post)

![](https://cdn.beekka.com/blogimg/asset/202611/bg2026111015.webp)

这个网站演示使用类似于乐高积木的火车积木 Rail Cube，可以搭建的约2700万个轨道布局。

4、[Hacker News 未公开的特性](https://github.com/minimaxir/hacker-news-undocumented)

这个仓库收集 Hacker News 网站没有公开的各种特性和功能。

## 图片

1、[毛衣恐龙](https://www.nhm.ac.uk/press-office/press-releases/santa-claws-returns--annual-festive-t-rex-display-now-on-at-the-.html)

为了庆祝圣诞节，英国伦敦的自然历史博物馆为馆内的霸王龙模型穿上了毛衣。

![](https://cdn.beekka.com/blogimg/asset/202611/bg2026111008.webp)

![](https://cdn.beekka.com/blogimg/asset/202611/bg2026111009.webp)

同款毛衣在博物馆的纪念品商店出售（下图）。

![](https://cdn.beekka.com/blogimg/asset/202611/bg2026111010.webp)

国内博物馆也应该学学，春节的时候给恐龙穿上唐装，可能也很好玩，还能吸引人流。

## 文摘

1、[我们公司使用 AI 编程一年了](https://www.reddit.com/r/ClaudeCode/comments/1xq2n3t/a_year_after_the_100_ai_mandate_nobody/)

一年前，公司领导告诉我们，现在所有的编程都要通过 AI 来完成，手写代码需要给出合理的解释。

开始六个月，一切顺利，业务表现很好，交付的产品数量比以往任何时候都要多。

到了现在，公司整个代码库的大小已经达到了原来的3倍左右，而且没人能解释其中大部分功能的运作原理。

AI 编程也面临着困难，AI 一遍又一遍重新实现那些其实已经存在于其他地方的工具函数，因为同一个功能在整个系统中存在着4个不同版本的代码。

真正让人感到痛苦的是程序员开始离开了，公司两个最活跃的程序员，一个辞职了，另一个则被“优化”了。

AI 助手仍然会对每一个提交的代码合并，给出自己的评论意见。但是已经没有人能够判断某个评论是否重要了，所以大家就都把这些评论忽略了。

本月，公司领导开始暗中要求我们“可以适当手写更多的代码”。不过，我们当中有一半的人已经一年没有编写过任何像样的项目了。我试了一下，花了两天的时间手写了一个程序，这个工作如果是在2024年，我只需一个下午就能完成。

## 言论

1、

很多人以为，AI 编程很轻松。其实，完全不是这样，它让人精疲力尽，因为你需要不停做出决策。

空中交通管理员和卡车司机都有强制休息时间，但是没有人会强制要求 AI 编程的使用者休息，你只有一块智能手表提醒自己站起来活动活动。

-- [《为什么 AI 编程令人如此疲惫》](https://constantin.glez.de/posts/2026-07-16-why-working-with-ai-agents-is-so-tiring-and-what-to-do-about-it/)

2、

实体的文字，尤其是书籍，比一切都长久。它们比书架更长久，比房子更长久，比购买它们的人和银行账户更长久。

二十年前，我在一家如今已不复存在的书店里，从一位现已退休的书商手中，在一座我已不再居住的城市里，买了一本书，它至今仍在，也必将比我活得更久。这是电子文档比拟不了的。

-- [《我拥有28000本书》](https://www.shelvd.org/blog/28000-books)

3、

学校教育的真正目标是，技能掌握、知识积累和思维方式的形成。

-- [Russ Cox](https://www.acm.org/articles/people-of-acm/2026/russ-cox)，Go 语言创造者

4、

以前为变量和文件起名很伤脑筋，现在有了 AI，变得轻而易举了。

-- [《我的 AI 编程》](https://www.minid.net/2026/7/10/ai-works-for-me)

5、

如果你观察过程序员，可能会发现他们发呆的时间远比敲击键盘的时间多。不，他们（可能）并没有偷懒，程序员大部分工作都是在脑子里完成的。

-- [《AI 编码陷阱》](https://chrisloy.dev/post/2025/09/28/the-ai-coding-trap)

## 往年回顾

[软件界面如何设计](https://www.ruanyifeng.com/blog/2025/11/weekly-issue-372.html)（#372）

[内容行业的内幕](https://www.ruanyifeng.com/blog/2024/10/weekly-issue-322.html)（#322）

[Unity 的安装费，游戏业的缩影](https://www.ruanyifeng.com/blog/2023/09/weekly-issue-272.html)（#272）

[四十年编程感想](https://www.ruanyifeng.com/blog/2022/09/weekly-issue-222.html)（#222）

（完）

