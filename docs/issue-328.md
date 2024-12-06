# 科技爱好者周刊（第 328 期）：AI 模型不是一门好生意

这里记录每周值得分享的科技内容，周五发布。

本杂志[开源](https://github.com/ruanyf/weekly)，欢迎[投稿](https://github.com/ruanyf/weekly/issues)。另有[《谁在招人》](https://github.com/ruanyf/weekly/issues/5610)服务，发布程序员招聘信息。合作请[邮件联系](mailto:yifeng.ruan@gmail.com)（yifeng.ruan@gmail.com）。

## 封面图

![](https://cdn.beekka.com/blogimg/asset/202412/bg2024120405.webp)

上海南站正在改造，车站的北半部在施工，南半部正常运营，中间用巨大的帘布隔开。

## AI 模型不是一门好生意

微软的 [Microsoft 365](https://finance.sina.com.cn/tech/digi/2024-11-05/doc-incuzhax4326302.shtml) 最近涨价了，涨幅最高的地区为41%。

![](https://cdn.beekka.com/blogimg/asset/202412/bg2024120117.webp)

微软解释，涨价原因是多了 AI 助手 Copilot 的成本。中国大陆因为没有 Copilot，所以不涨价。

无独有偶，OpenAI 也说要涨价，涨幅更夸张。新模型的订阅费可能从现在的每月20美元，涨到[每月2000美元](https://36kr.com/p/2946914414582658)。

![](https://cdn.beekka.com/blogimg/asset/202412/bg2024120118.webp)

（最新消息是，昨晚发布的 ChatGPT Pro 已经上涨到每月200美元。）

这两条新闻证明了一件事：**AI 模型太烧钱，即使世界最有钱的公司都承受不起**，只能大幅涨价。

不止微软和 OpenAI，所有经营 AI 模型的公司其实日子都不好过，目前都是亏本卖 AI 服务，争夺市场占有率。

这种运营压力恐怕将长期存在，因为[以下的原因](https://benn.substack.com/p/do-ai-companies-work)，注定了 AI 模型不是一门好生意。

**（1）AI 模型需要投入大量资金**。

OpenAI 每年的运行经费据报道是70亿美元，Anthropic 今年预计支出27亿美元，Facebook 向 AI 部门最近增加了数十亿美元的投入。

这么高的投入，要有上亿的付费用户，才可能获利，谈何容易。

**（2）模型成本没有规模经济**。

绝大多数行业，规模越大，单位成本越低。但是，AI 模型正好相反，模型越大，单位成本可能更贵。

因为随着模型变大，进一步改进可能更加困难，训练新模型所需的计算量也在增加。这就像攀登珠穆朗玛峰，到了8000米以后，每一步都越发艰难。2024年训练一个顶级模型，要比2023年训练顶级模型，计算量更大更贵。

偏偏 AI 模型的效果与规模有关，规模和计算量越大、模型效果越好。因此，大模型公司的运营费用无法下降，只会变大。

**（3）AI 模型快速贬值**。

AI 模型公司为了市场份额和投资回报，必须不断推出更好、更快、更强的新模型。

如果行业不断推出新模型，那么旧模型就会快速贬值。当你可以使用 GPT-4 时，还会有人想使用 GPT-3 吗？如果竞争对手推出了更好的模型，还会有人用你的模型吗？

为了始终在市场占有一席之地，你必须始终是市场最好的 AI 模型之一。这意味着，你的投入始终无法减少。

即使由于接近了技术极限，AI 行业无法继续推出更强的新模型，旧模型依然会快速贬值。因为市场上存在开源模型，比如 Llama 和 Mistral，如果商业模型停止进步，开源模型就将迅速缩小差距，那么旧的商业模型也就不值钱了。

举例来说，Anthropic 公司历史上开发过十个模型，为此陷入严重亏损。其中八个模型现在已经毫无价值，第九个模型是开源的，第十个模型让它现在能保持微弱的技术优势和市场活力。

它只有继续开发第十一个模型，才有可能在未来生存下去。

**（4）AI 模型公司无法保持垄断优势**。

OpenAI 是目前的市场领先者，它的优势建立在大量计算的基础上。这些计算所需的物理资源，都是租用云服务商的设备，而不是自家的。只要有足够的钱，任何人都可以使用相同的资源。不难想象一小群高级工程师离开 OpenAI，筹集大量资金，租用计算资源，在几个月内就能对 OpenAI 的核心业务构成威胁。

换句话说，云服务商花费数十亿美元建设的数据中心是一种护城河，OpenAI 花费数十亿美元构建的 GPT 早期版本（比如 GPT-2 和 GPT-3）不是护城河，因为现在有更好的模型已经在 Github 上免费提供。

大模型公司搭建自己的机房，也无济于事。因为对手可以租用云服务商的机房，投入更少，效果是一样的。

综上所述，<u>AI 模型似乎是一个可怕的行业：每年必须不断地巨额投资，应对持续上升的模型成本，以及当前模型一两年后就会被淘汰的竞争压力</u>。你也没有防止竞争对手的有效手段，你最好的员工可能会离开，你的技术专长很难成为持久的优势。

所以，那些还在考虑推出 AI 模型的商业公司，进入这个行业之前，需要三思。

至于已经走上这条路、现在正运营 AI 模型的公司，由于模型如此烧钱，筹集最多资金的公司会赢（活得最久），所以当务之急应该是尽可能多、尽可能快地筹集资金。

此外，应对之策还包括，让你的模型差异化，以便留住用户。比如，**记住用户的个人数据，可能是一种对策**。模型应该可以记住用户的问题，从而更好地了解用户。用户使用它越多，就越难切换，因为它知道所有你的历史、你提出的问题、你关心的事情。

## 豆包 MarsCode 系列活动

豆包 MarsCode 是专业的大模型编程助手，字节旗下的产品。

它与稀土掘金技术社区（juejin.cn）合作，本月14日在深圳，19日在上海，将举行两场系列活动，让更多同学一起参与进来，探索 AI 编程的潜力。

（1）**12月14日，深圳将举办“豆包 MarsCode 动手实验室”**，让大家亲手参与 AI 编程。

![](https://cdn.beekka.com/blogimg/asset/202412/bg2024120518.webp)

参与者以“队”为单位（最多三人，也可单人成队），**现场直接用 AI 编程，完成一个小游戏**。豆包 MarsCode 的同学会当场指导，与大家深度交流，并评出优胜作品。

通过现场 AI 技术交流实践，大家可以看看**创意怎样通过 AI 快速落地**。

[点击这里](https://www.bagevent.com/event/8949689?bag_track=ryf)，或者扫描上方海报二维码，了解详情并报名。

（2）**12月19日，上海举行豆包 MarsCode 编程挑战赛**。参赛者借助 AI，在规定时间内完成4道算法题。

这可以作为面试练习，如果获奖还可以当作个人资历。[点击这里](https://bytedance.larkoffice.com/docx/Sv8Cd8bCzoSlMax2DAscv5QLn9f)了解详情并报名参赛。

## 科技动态

1、[树莓派掌上电脑](https://soulscircuit.com/pilet)

一支国外团队推出了“树莓派掌上电脑”，看上去很酷。

![](https://cdn.beekka.com/blogimg/asset/202412/bg2024120501.webp)

它就是一个全功能的 Linux 系统，带有7小时续航。

![](https://cdn.beekka.com/blogimg/asset/202412/bg2024120502.webp)

它还有一个可组装版本，屏幕是单独分离的。

![](https://cdn.beekka.com/blogimg/asset/202412/bg2024120505.webp)

下面可以配上键盘，也可以配上手柄。

![](https://cdn.beekka.com/blogimg/asset/202412/bg2024120503.webp)

![](https://cdn.beekka.com/blogimg/asset/202412/bg2024120504.webp)

它是开源的，制作团队希望将成本控制在250美元。

2、[超声波洗澡机](https://www.core77.com/posts/134471/A-Washing-Machine-for-Human-Beings-from-1970)

1970年的大阪世博会，三洋公司展出了一台超声波洗澡机。

![](https://cdn.beekka.com/blogimg/asset/202412/bg2024120513.webp)

人坐进去，头露在外面，机器里面是水。

![](https://cdn.beekka.com/blogimg/asset/202412/bg2024120514.webp)

按下按钮，机器就会释放出超声波，通过震动达到清洁的目的。

![](https://cdn.beekka.com/blogimg/asset/202412/bg2024120515.webp)

它与现在市场上的“超声波清洁机”的原理是一样的，只不过它用来给人洗澡。

![](https://cdn.beekka.com/blogimg/asset/202412/bg2024120516.webp)

这台机器从未投入生产。明年2025年，大阪将再次举办世博会，一家公司重新生产了这台机器，专门用于医疗保健领域。

![](https://cdn.beekka.com/blogimg/asset/202412/bg2024120517.webp)

3、[升缩鞋](https://www.yankodesign.com/2024/10/02/revolutionary-sneakers-expand-to-fit-your-growing-feet/)

青少年的鞋子往往只能穿一年，然后就穿不下了。

一家美国公司设计了升缩鞋，鞋会跟着脚一起长。

![](https://cdn.beekka.com/blogimg/asset/202410/bg2024100410.webp)

它的做法就是把鞋底分成两块，中间使用弹性材料连接。

![](https://cdn.beekka.com/blogimg/asset/202410/bg2024100411.webp)

如果脚变大了，鞋也会随之被撑开。

![](https://cdn.beekka.com/blogimg/asset/202410/bg2024100412.webp)

![](https://cdn.beekka.com/blogimg/asset/202410/bg2024100413.webp)

为了穿着舒适，鞋面也采用升缩材料，编织成袜子状的网眼结构，穿进去也比较容易。

这种鞋的另一个好处，就是不用区分脚码，一双鞋适合多个脚码。

4、**其他**

（1）三星工程师做出了一个“[拍照机器人](https://spectrum.ieee.org/photo-robot)”，只要你告诉它想拍什么样的照片，它就会自动摆出最佳姿势，为你拍照。

![](https://cdn.beekka.com/blogimg/asset/202412/bg2024120510.webp)

## 文章

1、[我们为什么转向 Astro](https://www.datocms.com/blog/why-we-switched-to-astro)（英文）

![](https://cdn.beekka.com/blogimg/asset/202412/bg2024120507.webp)

作者原来使用 Next.js 框架，因为受不了 React 和 Next.js 的种种问题（主要是复杂性），转向了 Astro 框架，本文是使用感受。

2、[Phoenix LiveView 1.0.0 发布了](https://www.phoenixframework.org/blog/phoenix-liveview-1.0-released)（英文）

![](https://cdn.beekka.com/blogimg/asset/202412/bg2024120508.webp)

Phoenix LiveView 是 Elixir 语言的 Web 开发框架，（目标是）用更简单的模型，实现 React 框架的所有功能，同时还支持高并发。本文是它的介绍。

3、[我如何用机上 WiFi 获知飞机方位](https://robertheaton.com/pymyflyspy/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202412/bg2024120506.webp)

作者乘坐飞机时，利用航空公司的服务器，绘出了当前飞机的飞行路线。

4、[如何用 Cloudflare 重定向 URL](https://codethoughts.io/posts/2024-07-31-redirecting-urls-with-cloudflare/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202408/bg2024080407.webp)

作者的个人网站更换了域名，他就用 Cloudflare 将旧网址重定向到新网址，完全免费。

5、[不要用 SQL 的 count(*) 语句与 0 比较](https://www.depesz.com/2024/12/01/sql-best-practices-dont-compare-count-with-0/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202412/bg2024120509.webp)

一篇 SQL 科普文章，不要用 count(*) 等于 0，来判断不存在符合条件的记录。

6、[如何用手机远程解锁 Windows](https://www.xda-developers.com/unlock-windows-pc-fingerprint-scanner-android/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202412/bg2024120511.webp)

Windows 11 有一项功能，允许你用手机的指纹识别或人脸识别，解锁 Windows。

7、[如何用 Docker Compose 安装 phpMyAdmin](https://linuxiac.com/how-to-install-phpmyadmin-with-docker-compose/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202409/bg2024090702.webp)

一篇初学者教程，关于怎么用 Docker Compose 在本机架设数据库应用。

## 工具

1、[Bananas](https://github.com/mistweaverco/bananas)

![](https://cdn.beekka.com/blogimg/asset/202412/bg2024120512.webp)

一款跨平台的桌面应用，利用点对点连接与其他人共享您的屏幕，无需帐户或任何服务器（初始连接除外）。

2、[jsontr.ee](https://github.com/xzitlou/jsontr.ee)

![](https://cdn.beekka.com/blogimg/asset/202411/bg2024112806.webp)

一个 JS 网页库，将 JSON 数据转成可视化的树状图。

3、[WatchAlert](https://github.com/opsre/WatchAlert)

![](https://cdn.beekka.com/blogimg/asset/202412/bg2024120301.webp)

开源的轻量级监控告警系统，基于 Go + React。（[@Cairry](https://github.com/ruanyf/weekly/issues/5627) 投稿）

4、[Easy Resizer](https://easyresizer.com)

![](https://cdn.beekka.com/blogimg/asset/202412/bg2024120201.webp)

一个在线工具，批量调整图片的大小。（[@mywebtools](https://github.com/ruanyf/weekly/issues/5612) 投稿）

5、[IconEase](https://github.com/JiuRanYa/IconEase)

![](https://cdn.beekka.com/blogimg/asset/202412/bg2024120403.webp)

开源的跨平台桌面应用，用来管理本地的图标文件。（[@JiuRanYa](https://github.com/ruanyf/weekly/issues/5644) 投稿）

6、[X.Ryder](https://github.com/pipijoe/xryder-web)

![](https://cdn.beekka.com/blogimg/asset/202412/bg2024120402.webp)

一套网站后台的 UI 开发模板。（[@pipijoe](https://github.com/ruanyf/weekly/issues/5639) 投稿）

7、[Peninsula](https://github.com/Celve/Peninsula)

![](https://cdn.beekka.com/blogimg/asset/202412/bg2024120404.webp)

基于 macOS 刘海的窗口管理器和消息中心。（[@Celve](https://github.com/ruanyf/weekly/issues/5641) 投稿）

8、[Summary Cat](https://www.summarycat.com/)

![](https://cdn.beekka.com/blogimg/asset/202309/bg2023092301.webp)

用户提交一个 YouTube 视频网址，它会用文字总结出该视频的内容。

9、[ubicloud](https://www.ubicloud.com/use-cases/github-actions)

![](https://cdn.beekka.com/blogimg/asset/202402/bg2024020107.webp)

一个可以自己搭建的云环境，能够直接运行 GitHub Actions 脚本。

10、[matcha.css](https://matcha.mizu.sh/)

![](https://cdn.beekka.com/blogimg/asset/202405/bg2024052401.webp)

一个加强浏览器的网页默认样式的 CSS 库。

## AI 相关

1、[Bylo.ai](https://bylo.ai)

![](https://cdn.beekka.com/blogimg/asset/202412/bg2024120302.webp)

免费的 AI 图像生成网站。（[@aaamomo64](https://github.com/ruanyf/weekly/issues/5630) 投稿）

2、[Color Diffusion](https://github.com/ErwannMillon/Color-diffusion)

一个开源的 Python 程序，使用 Diffusion 模式对黑白照片上色。

3、[AI 聚合搜索引擎](https://onionai.so)

![](https://cdn.beekka.com/blogimg/asset/202412/bg2024120202.webp)

该网站聚合多个 AI 搜索引擎入口，可以切换不同的搜索引擎进行搜索。（[@ovelv](https://github.com/ruanyf/weekly/issues/5616) 投稿）

## 资源

1、[Hi Speaking](https://hispeaking.com/)

![](https://cdn.beekka.com/blogimg/asset/202412/bg2024120303.webp)

一个英语跟读网站，你按照课本读一句，它会自动播放下一句，省去了手动点击。（[@jiweiyuan](https://github.com/ruanyf/weekly/issues/5625) 投稿）

2、[In Pieces - 30 endangered Species](http://www.species-in-pieces.com/#)

![](https://cdn.beekka.com/blogimg/asset/202411/bg2024110515.webp)

一个很有创意的网站，用30个碎片拼出30种濒危动物，只使用 CSS。

![](https://cdn.beekka.com/blogimg/asset/202411/bg2024110516.webp)

3、[数据可视化目录](https://datavizcatalogue.com/search.html)

![](https://cdn.beekka.com/blogimg/asset/202410/bg2024100603.webp)

这个网站按照用途，将数据可视化分类，便于查找你需要的图表类型。

## 图片

1、[乐高面板](https://interactionmagic.com/UX-LEGO-Interfaces/)

乐高积木可以搭建各种机器和宇宙飞船，所以有很多控制台单元，使用了各种各样的设计。

![](https://cdn.beekka.com/blogimg/asset/202411/bg2024112903.webp)

从中可以学习，怎样的控制台设计才是好的。

下面是一些糟糕的设计，你根本分不清，什么操作用什么按钮。

![](https://cdn.beekka.com/blogimg/asset/202411/bg2024112904.webp)

如果将功能相近的按钮，分成几个区块，辨识度就会大幅提高。

![](https://cdn.beekka.com/blogimg/asset/202411/bg2024112905.webp)

上图中，最右边的设计辨识度最好。

下面三个控制台最简单干净，带有可视化元素，属于最好的设计。

![](https://cdn.beekka.com/blogimg/asset/202411/bg2024112906.webp)

2、[为什么老照片的人们不微笑？](https://www.upworthy.com/why-didn-t-people-smile-in-old-photographs-it-wasn-t-just-about-the-long-exposure-times)

19世纪末和20世纪初的老照片，人们的表情往往很严肃，即使微笑，也非常轻微。

![](https://cdn.beekka.com/blogimg/asset/202411/bg2024112803.webp)

一个主要原因是，那时的照相机需要长时间曝光，人们必须静坐好几分钟才能拍照。

微笑是一种快速反应，而不是一种持续的表情状态。当你必须静止几分钟才能拍照时，你根本不可能保持微笑那么久。

## 文摘

1、[10亿次心跳](https://kottke.org//13/02/does-every-species-get-a-billion-heartbeats-per-lifetime)

哺乳动物随着体型变大，心跳逐渐放慢，这是为什么？

比如，仓鼠的心跳是每分钟450次，猫是150次，猪是70次，大象是30次，鲸是20次。

原因可以这样理解，假定猫的体积是仓鼠的10倍，那么猫的新陈代谢率（它燃烧能量的强度）也应该是仓鼠的10倍，毕竟猫有10倍的细胞在消耗能量。

![](https://cdn.beekka.com/blogimg/asset/202412/bg2024120406.webp)

但是这不可能，如果真的这样，猫就会因为体温过高而死亡。因为新陈代谢会产生热量，需要散热，但是猫的表面积并没有仓鼠的10倍，必定有一部分热量无法散发出去，导致体温过高。

为什么猫的表面积没有仓鼠的10倍？

中学数学告诉我们，表面积增长的速度，慢于体积增长的速度。举例来说，如果球体的体积增长一倍，变成原来的两倍，表面积只是原来的1.59倍。

既然无法散发所有的热量，所以大型动物的新陈代谢必然慢于小型动物。相应的表现就是心跳放慢，降低新陈代谢的强度。

这就是为什么体型越大，心跳越慢。

动物学家还发现一个有趣的现象，哺乳动物不管体型大小，一生的总心跳大概在10亿次左右。

仓鼠的寿命是3年，猫是15年，猪是25年，大象是70年，鲸是80年。

结合它们的心率，不难算出，仓鼠一生的总心跳是7.1亿次，猫是11.8亿次，猪是9.2亿次，大象是11亿次，鲸是8.4亿次。

这些动物的总心跳都在10亿次左右。

奇怪的是，人类不符合这条规律。人每分钟心跳60次，平均寿命70年，总心跳是22.1亿次。

## 言论

1、

萨尔瓦多政府将比特币作为国家储备，目前拥有5,940个比特币，价值5.82亿美元。

但是，他们怎么保管钱包的密钥呢？万一密钥泄漏，国家岂不是破产了。

-- [Hacker News 读者](https://news.ycombinator.com/item?id=42285619)

2、

19世纪的德国哲学家尼采，以前的写作风格是不断的长句，复杂的推理和解释。

后来，他用上了打字机，写作风格逐渐从长篇论证变成短篇的格言警句，变得像电报那样。

-- [《打字机如何改变尼采》](https://thereader.mitpress.mit.edu/how-typing-transformed-nietzsches-consciousness/)

3、

内部平台效应（inner-platform effect）指的是，程序员倾向于创建一个可定制的内部系统，成为他们正在使用的外部软件的复制品，而且通常是一个糟糕的复制品。

-- [维基百科](https://en.wikipedia.org/wiki/Inner-platform_effect)

4、

我爱那些渴望不可能的人。

—— [歌德](https://boehs.org/node/dark-web-security)

5、

我通常不愿意对技术做出预测，但我感到相当有信心的是，因为 AI 如此善于写文章，几十年后懂得如何写文章的人一定不会很多。 

-- [保罗·格拉汉姆](https://paulgraham.com/writes.html)，硅谷创业导师

## 往年回顾

[新基建的政策选择](https://www.ruanyifeng.com/blog/2023/12/weekly-issue-281.html)（2023 #281）

[互联网公司需要多少员工？](https://www.ruanyifeng.com/blog/2022/11/weekly-issue-231.html)（2022 #231）

[移动支付应该怎么设计？](https://www.ruanyifeng.com/blog/2021/10/weekly-issue-181.html)（2021 #181）

[你的头脑是二值逻辑，还是三值逻辑？](https://www.ruanyifeng.com/blog/2020/10/weekly-issue-131.html)（2020 #131）

（完）

