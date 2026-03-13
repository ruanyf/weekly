# 科技爱好者周刊（第 388 期）：测试是新的护城河

这里记录每周值得分享的科技内容，周五发布。

本杂志[开源](https://github.com/ruanyf/weekly)，欢迎[投稿](https://github.com/ruanyf/weekly/issues)。另有[《谁在招人》](https://github.com/ruanyf/weekly/issues/9088)服务，发布程序员招聘信息。合作请[邮件联系](mailto:yifeng.ruan@gmail.com)（yifeng.ruan@gmail.com）。

## 封面图

![](https://cdn.beekka.com/blogimg/asset/202603/bg2026030804.webp)

重庆涪陵某景区架设了世界首座“巨石索桥”，桥面就是一块块巨石，一不小心就会踏空。（[via](https://www.cbg.cn/a/77561/20260214/7b37135efeb74f0fbbaf272a9b7f6ae0.html)）

## 测试是新的护城河

[Next.js](https://nextjs.org) 是目前排名第一的 JS 框架。平时遇到的 JS 全栈应用，我估计，一半用它开发。

![](https://cdn.beekka.com/blogimg/asset/202602/bg2026022808.webp)

两周前，这个框架被一则新闻颠覆了。

一个 Cloudflare 工程师[宣布](https://blog.cloudflare.com/vinext/)，**他只用一个星期就用 AI 重新实现了 Next.js**，起名为 [vinext](https://vinext.io/)。

![](https://cdn.beekka.com/blogimg/asset/202602/bg2026022809.webp)

事实上，一天就生成产品原型了，后面几天只是在完善。

> “真正动手是2月13日，当天晚上，基本功能已经实现。第二天下午，11个路由器做好了10个。第三天，已经部署到我们的服务器，实现了完整的客户端水合。
>
> 接下来的几天，主要进行安全加固：修复极端情况，扩展测试套件，提升 API 覆盖率至 94%。”

这个新的实现，比原版 Next.js 性能更好。

> “早期基准测试中，构建速度提升了4倍，客户端软件包的体积缩小了57%，生产环境的 Next.js 应用已经直接跑在上面了。” 

这个 vinext 的[代码](https://github.com/cloudflare/vinext)已经放出来了。

![](https://cdn.beekka.com/blogimg/asset/202602/bg2026022810.webp)

我觉得，**这件事对 Next.js 的打击非常大**。

Next.js 是 Vercel 公司的产品，背后有一个大型开发团队，每年都是巨额投入，已经整整做了10年。虽然是开源软件，但是企业版、云服务、插件、皮肤都要收费，去年的年收入达到2亿美元。

**这种看似难以逾越的护城河，在 AI 面前不堪一击**。一个工程师用了一个星期，就复刻了大团队十年的工作成果，现有的网页应用不改一行代码，放上去就能跑，原版的每个功能都支持。

你知道花了多少钱？Token 费用仅仅为 1100 美元！

这叫 Vercel 怎么再向 Next.js 的开发投钱，客户又怎么愿意再为某个功能付出高昂的使用费。

推而广之，所有的商业软件都受到了重创。**代码的护城河不存在了，只要投入一小笔金钱，AI 就能复刻出大型软件。**

那么，为了保护自己，软件公司下一步肯定要防止 AI 复刻。

怎么防呢？**关键就是测试用例**。

Cloudflare 工程师这一次能够复刻成功，主要原因是 Next.js 有完备的文档、庞大的社区文章、以及完整的测试用例。AI 模拟的每一个 API，只要能够通过原有的接口测试，就能确认百分百兼容。

如果拿不到测试用例，谁知道代码行为是否一致，谁敢放到生产环境运行。

可以想象，为了防止复刻，大型软件项目一定会保护自己的测试用例。**测试才是新的护城河。**

![](https://cdn.beekka.com/blogimg/asset/202603/bg2026030601.webp)

世界最流行的数据库 [SQLite](https://sqlite.org)，本身代码15.6万行，但是测试用例[9205万行](https://sqlite.org/testing.html)，足足大了590倍！

其中，最核心的测试套件 [TH3](https://sqlite.org/th3.html) 是闭源的，不公开，主要测试航空、医疗等关键行业的极端情况和边缘案例，属于核心技术资产。正是这些保密用例，才让 SQLite 难以复刻。

无独有偶，就在前两天，另一个开源项目 [tldraw](https://github.com/tldraw/tldraw/issues/8082) 也准备将测试用例闭源。

![](https://cdn.beekka.com/blogimg/asset/202602/bg2026022811.webp)

说实话，保密的测试用例肯定不利于开源项目的发展，但是开发者需要保护自己的利益。在日益强大的 AI 面前，越来越多的软件可能会选择这样做。

## AI 复刻的版权问题

AI 复刻软件还有一个版权问题，也引起了[很大争议](https://tuananh.net/2026/03/05/relicensing-with-ai-assisted-rewrite/)。

![](https://cdn.beekka.com/blogimg/asset/202603/bg2026030602.webp)

Next.js 是最宽松的 MIT 许可证，所以复刻没有版权问题。但是，有人复刻了一个叫做 [chardet](https://github.com/chardet/chardet) 的项目，就争议巨大。

chardet 本来采用的许可证，是限制较多的 LGPL，复刻以后改成了 MIT 许可证，引发了原始作者的抗议。

网上的意见也分成了两派。

支持者说，AI 只复刻了功能和接口，代码完全不一样，当然可以更改许可证。

反对者说，GPL 规定了，所有衍生作品都不能更改许可证，AI 复刻就属于衍生。

更麻烦的是，美国法律规定，AI 生成产物无版权，属于公共领域。这意味着，**AI 复刻的软件不能设置许可证，设置了无效。**

按照这条法律，软件许可证就意义不大了。管你是什么许可证，任何人 AI 复刻一下就能规避，AI 实现的版本一律没有版权。

## 科技动态

1、[AI 改写脏话](https://decrypt.co/360183/roblox-using-ai-rewrite-chat-swears-slurs-real-time)

游戏平台 Roblox [宣布](https://ir.roblox.com/news/news-details/2026/Roblox-Launches-Real-Time-Chat-Rephrasing-to-Maintain-Civility-and-Gameplay-Flow/default.aspx)，将用 AI 实时修改玩家的对话，让其变得更文明。

![](https://cdn.beekka.com/blogimg/asset/202603/bg2026030701.webp)

以前，如果玩家在游戏里面骂脏话，系统只会将其过滤，显示为 `####`，你还是知道他在骂人。

现在，AI 将重新修改整个句子，让表达变得更礼貌、更文明，你就察觉不到对方在骂人。

虽然这样未免有点虚假，但确实有必要。网络论坛也应该跟进，不要让人身攻击毁掉交流氛围。

2、[飞机的激光上网](https://www.esa.int/Applications/Connectivity_and_Secure_Communications/World-first_gigabit-per-second_laser_link_between_aircraft_and_geostationary_satellite)

欧洲航天局成功进行了飞机的“激光上网”实验，通过激光将一架飞机与一颗卫星连接，实现了高速通信。 

![](https://cdn.beekka.com/blogimg/asset/202603/bg2026030704.webp)

飞机上网现在都通过无线电波，比如星链就通过无线电，让飞机连接卫星。本次实验则是通过激光连接卫星。

![](https://cdn.beekka.com/blogimg/asset/202603/bg2026030705.webp)

上图就是安装在飞机舷窗上的激光终端。

激光通信的优点是带宽大，不受无线频谱的限制，这次实验的上网速度达到了 2.6Gbps，是星链的8到10倍。

缺点是激光与卫星之间必须保持直线，不能有云层和大气的障碍物。所以采用这种方式，大概只有飞到高空时才能上网。

3、[Grammarly 的专家意见](https://www.theverge.com/ai-artificial-intelligence/890921/grammarly-ai-expert-reviews)

Grammarly 是一个写作服务，提供一个收费功能“专家意见”，让专家点评你的文章。

![](https://cdn.beekka.com/blogimg/asset/202603/bg2026031002.webp)

一个国外用户使用该功能时，震惊地发现，点评专家里面有他的前老板（下图），但是他知道老板已经去世了。

![](https://cdn.beekka.com/blogimg/asset/202603/bg2026031003.webp)

原来这不是真人点评，而是 AI 为每个专家建了一个分身，用他们各自的文章进行训练，然后让分身点评你的文章。

这引起了争议，我们是否有权搭建别人的“数字分身”，然后冠以原始人物的名义（比如“孔子分身”或者“爱因斯坦分身”）？

4、[太阳能邮筒](https://www.bbc.com/news/articles/cgln72rgrero)

网络通信普及以后，传统的邮筒怎么办？

英国皇家邮政想出一个办法，将英国各地3500个邮筒，变为“太阳能邮筒”。

![](https://cdn.beekka.com/blogimg/asset/202511/bg2025110505.webp)

邮筒顶部加装了太阳能光伏片，功能也从寄信，变成了收寄小包裹。

![](https://cdn.beekka.com/blogimg/asset/202511/bg2025110506.webp)

这样既保存了传统的红色邮筒，成为街道的景观，又为人们邮寄包裹提供了方便。

![](https://cdn.beekka.com/blogimg/asset/202511/bg2025110507.webp)

## 文章

1、[GitHub Issue 标题的注入攻击](https://grith.ai/blog/clinejection-when-your-ai-tool-installs-another)（英文）

![](https://cdn.beekka.com/blogimg/asset/202603/bg2026030703.webp)

这可能是第一起 AI 模型注入的真实攻击。Cline 项目使用 AI 对 GitHub Issue 进行分类，有人就在标题插入恶意提示词，从而成功拿到 npm 令牌，发布了一个恶意版本。本文告诉你这是怎么做到的。

2、[重新评估 AGENTS.md](https://www.infoq.com/news/2026/03/agents-context-file-value-review/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202603/bg2026030901.webp)

最近的一项研究提出，跟推荐做法相反，AGENTS.md 文件对 AI 编码不是促进，而是阻碍。

它只是让模型“思考”得更多（成本上升），生成结果却没有更好（性能下降）。

3、[Temporal API 的九年历程](https://bloomberg.github.io/js-blog/post/temporal/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202603/bg2026031205.webp)

本周，Temporal API 正式通过了第四阶段。这意味着，它进入了 ES2026 标准，成为了 JavaScript 语法的一部分。本文是这个标准的起草者对九年推进历程的回顾。

4、[AI 的胡说测试](https://decrypt.co/360596/benchmark-test-measures-ai-bullshit-most-models-fail)（英文）

![](https://cdn.beekka.com/blogimg/asset/202603/bg2026031206.webp)

国外有一个 [BuillshitBench](https://petergpt.github.io/bullshit-benchmark/viewer/index.v2.html)，专门问 AI 一些胡说八道的问题，看 AI 能不能分辨这是胡说，还是一本正经地回答。

5、[原生 CSS 就足够了](https://www.zolkos.com/2025/12/03/vanilla-css-is-all-you-need)（英文）

![](https://cdn.beekka.com/blogimg/asset/202512/bg2025120704.webp)

本文展示了 37Signals 公司的 CSS 代码，表明不使用任何框架（比如 Tailwind）和构建工具（比如 Sass），只用原生 CSS 代码完全可以。

6、[粪便物理学](https://theconversation.com/physics-of-poo-why-it-takes-you-and-an-elephant-the-same-amount-of-time-76696)（英文）

![](https://cdn.beekka.com/blogimg/asset/202603/bg2026030802.webp)

一篇很另类的科普文章，解释为什么动物不管大小，排便时间都在5～19秒之间，平均12秒。

## 工具

1、[KULA](https://github.com/c0m4r/kula)

![](https://cdn.beekka.com/blogimg/asset/202603/bg2026030706.webp)

Linux 服务器的监控工具，只有一个二进制文件。

2、[AnsiSaver](https://github.com/lardissone/ansi-saver)

![](https://cdn.beekka.com/blogimg/asset/202603/bg2026030803.webp)

mac 电脑的屏保程序，用彩色的 Ansi 字符画作为屏保图案。

3、[upiano](https://github.com/eliasdorneles/upiano)

![](https://cdn.beekka.com/blogimg/asset/202308/bg2023081012.webp)

在命令行下模拟钢琴弹奏。

4、[WSL Distro Manager](https://github.com/bostrot/wsl2-distro-manager)

![](https://cdn.beekka.com/blogimg/asset/202603/bg2026031207.webp)

一个开源 Windows 应用，通过图形界面管理 Windows Subsystem for Linux（WSL）发行版。

5、[Mole](https://github.com/tw93/Mole)

![](https://cdn.beekka.com/blogimg/asset/202603/bg2026031213.webp)

开源的 Mac 电脑清理和优化工具。

6、[PipeGate](https://github.com/janbjorge/pipegate)

一个将内网服务映射到外网的隧道工具，特点是比较简单，就是几个 Python 脚本，并且可以设置 UUID 客户端认证。

7、[HookListener](https://www.hooklistener.com)

![](https://cdn.beekka.com/blogimg/asset/202412/bg2024121804.webp)

一个管理、测试 Webhook 的在线工具，个人可以免费使用。

8、[Sentinel](https://github.com/suzuran0y/CCTV-Smartphone-AI-Monitoring)

![](https://cdn.beekka.com/blogimg/asset/202603/bg2026031201.webp)

将安卓手机转化为网络摄像头，实现实时监控和图像采集。（[@suzuran0](https://github.com/ruanyf/weekly/issues/9201) 投稿）

9、[Flux Monitor](https://github.com/chentao1006/FluxMonitor)

![](https://cdn.beekka.com/blogimg/asset/202603/bg2026031203.webp)

Mac 电脑的系统监控、管理面板。（[@chentao1006](https://github.com/ruanyf/weekly/issues/9207) 投稿）

## AI 相关

1、[Agentic Metric](https://github.com/MrQianjinsi/agentic-metric)

![](https://cdn.beekka.com/blogimg/asset/202603/bg2026030603.webp)

一个 Python 命令行工具，监控本地各种 coding agent（比如 Claude Code、Codex、OpenCode）的使用量。（[@MrQianjinsi](https://github.com/ruanyf/weekly/issues/9165) 投稿）

2、[cc-connect](https://github.com/chenhg5/cc-connect)

![](https://cdn.beekka.com/blogimg/asset/202603/bg2026031202.webp)

一个开源的连接器，将各种 AI 编程工具与手机聊天软件相连。（[@chenhg5](https://github.com/ruanyf/weekly/issues/9202) 投稿）

3、[Page Agent](https://github.com/alibaba/page-agent)

![](https://cdn.beekka.com/blogimg/asset/202603/bg2026030702.webp)

只要在网页插入这个 JS 库，就可以使用自然语言操作页面，比如“点击导航栏的文档链接，总结其内容”。

4、[Agent Safehouse](https://github.com/eugene1g/agent-safehouse)

一个 macOS 沙箱工具，用来在沙箱里运行 AI 编程工具。

5、[Repo Tokens](https://github.com/qwibitai/nanoclaw/tree/main/repo-tokens)

![](https://cdn.beekka.com/blogimg/asset/202602/bg2026022801.webp)

一个 GitHub Action，为你的仓库添加一个图形标签（上图），显示该仓库相当于多少 Token，用来大模型的计算量。

## 资源

1、[世界监控](https://www.worldmonitor.app)（World Monitor）

![](https://cdn.beekka.com/blogimg/asset/202603/bg2026030801.webp)

世界局势的一个实时看板，把各种消息源都放在一个网页里。

2、[炼油厂探索](https://fuelingcuriosity.com/game.html)

![](https://cdn.beekka.com/blogimg/asset/202603/bg2026031204.webp)

一个动画互动网站，展示炼油厂怎样将石油变成汽柴油。

3、[Mechanical Pencil](https://mechanical-pencil.com)

![](https://cdn.beekka.com/blogimg/asset/202603/bg2026031001.webp)

弹簧笔、打火机等生活小物品的机械装置动画。

## 图片

1、[密码的替代方法](https://tesseral.com/blog/i-designed-some-more-user-friendly-methods-for-multi-factor-authentication)

一位程序员发明了一种新的密码方法，你觉得可行吗？

系统向用户展示一副扑克牌，让其从52张牌中依次挑出5张，作为密码。

![](https://cdn.beekka.com/blogimg/asset/202507/bg2025073110.webp)

下次登录时，用户必须按同样顺序挑出同样的5张牌。

## 文摘

1、[复杂社会的崩溃](https://news.ycombinator.com/item?id=31670526)

我们都知道，一个软件的复杂度不断上升，超过某个极限后，就会难以维护，最后往往被放弃。

美国历史学家约瑟夫·坦特（Joseph Tainter）认为，人类社会也是如此。如果社会的复杂度超过极限，这个社会最终也会崩溃。

![](https://cdn.beekka.com/blogimg/asset/202603/bg2026031214.webp)

1988年，他出版了一本名为《复杂社会的崩溃》的书，描述了罗马人、玛雅人和查科人等伟大文明的兴衰，试图回答几个世纪以来一直困扰着思想家的一个问题：**为什么强大的社会会崩溃？**

他认为，原因是这些社会有一个敌人——复杂性。

随着文明的发展，社会增加了越来越多的复杂性：更多的等级制度、更多的官僚机构、更深层次的社会结构。

一开始，新的等级、官僚、组织都是有用的，比如可以增加经济产出、税收等。但到了某个时刻，收益递减规律开始出现，每增加一点复杂度带来的回报越来越少，直至变成零甚至负数。

（1）法律条文和官僚越多，政府开销也就随之上升，长期很可能令社会无法负担。

（2）复杂度变大，会增加社会的不平等，因为能理解所有规则的人就越少，你就越离不开律师。懂规则的人会比其他人占优势。

（3）规则越多，维护和执行这些规则的机构也就越多，不利于社会提高效率。

（4）复杂性最终导致社会各阶层的差距变大，对立也随之而来。

以上因素的共同作用，导致历史上很多强大的社会最终崩溃。

## 言论

1、

2021年，我感觉做一名优秀的软件工程师棒极了。软件行业蓬勃发展，机会很多，我热爱这份工作，觉得可以永远做下去。

2026年，我已经不确定软件行业十年后会怎样，即使还存在，必定与现在极不相同。我也许能找到出路，也许不得不离开这个行业。无论如何，我热爱的软件工作即将消失。

-- [《我不知道十年后我的工作是否还存在》](https://www.seangoedecke.com/will-my-job-still-exist/)

2、

与强大的 AI 对抗会是什么感觉？

你会感觉自己莫名其妙地弱了不少，AI 做的每件事都超出你的预期。

这就好像你和一位实力强劲的玩家玩一款随机性很强的游戏，你会感觉这位高手总是运气爆棚。

-- [probablydance.com](https://probablydance.com/2026/03/07/im-getting-a-whiff-of-iain-banks-culture/)

3、

阅读商战书籍是浪费时间。它们将简单的故事变成通用的建议，将偶然的成功转化为普遍的策略，并用激励人心的口号取代复杂的市场。

这些书的成功并不是因为内容正确，而是因为易于阅读并且让读者感觉良好。

-- [《阅读商战书籍是浪费时间》](https://antemedian.substack.com/p/why-reading-business-books-is-a-waste)

4、

我想让 AI 告诉我怎么使用一种全新的、AI 也不会用的工具，就会提示 AI “执行 xxx-tool --help 来了解该工具”（假定工具名字是 xxx-tool），然后 AI 就学会用了。

-- [Simon Willison](https://simonwillison.net/2026/Mar/9/not-so-boring/)，著名开发者

5、

时间是唯一不可再生的资源。AI 大模型是目前我所知的最便宜的赚取额外时间的方式。

-- [《不要太看重 AI 大模型的订阅费》](https://steipete.me/posts/2025/stop-overthinking-ai-subscriptions)

## 往年回顾

[低代码编程，恐怕不会成功](https://www.ruanyifeng.com/blog/2025/03/weekly-issue-341.html)（#341）

[AI 没有护城河](http://www.ruanyifeng.com/blog/2024/03/weekly-issue-291.html)（#291）

[中国的增长动力在内陆](http://www.ruanyifeng.com/blog/2023/02/weekly-issue-241.html)（#241）

[一个程序员的财务独立之路](http://www.ruanyifeng.com/blog/2022/01/weekly-issue-191.html)（#191）

（完）

