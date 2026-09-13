# 科技爱好者周刊（第 412 期）：禁止 issue，只用 PR

这里记录每周值得分享的科技内容，周五发布。

本杂志[开源](https://github.com/ruanyf/weekly)，欢迎[投稿](https://github.com/ruanyf/weekly/issues)。另有[《谁在招人》](https://github.com/ruanyf/weekly/issues/11434)服务，发布程序员招聘信息。合作请[邮件联系](mailto:yifeng.ruan@gmail.com)（yifeng.ruan@gmail.com）。

## 封面

![](https://cdn.beekka.com/blogimg/asset/202609/bg2026090901.webp)

上海前滩太古里举办的“英雄联盟15周年”展览。（[via](https://weibo.com/5720474518/RgUnYmL0t)）

## 禁止 issue，只用 PR

上周，PHP 框架 Laravel 宣布了[一个新规定](https://x.com/taylorotwell/status/2095516796748996843)：禁止提交 issue，只能提交 Pull Request。

![](https://cdn.beekka.com/blogimg/asset/202609/bg2026091017.webp)

乍一看，这个规定太荒谬了。用户不能提交 issue，怎么报告问题呢？难道你要每个人都读懂源码，自己动手解决问题！

但是仔细想想，你会发现这个措施[很合理](https://stitcher.io/blog/no-more-issues)，甚至值得推广。

（1）没有了垃圾 issue。

如果一个用户愿意花时间创建 PR，说明他对这个问题更上心。那些机器人和骚扰者，只会提交垃圾 issue，根本不愿意多花时间为项目做贡献。

（2）对维护者更方便。

项目维护者从 PR 里面得到的信息，远远多于 issue，更利于理解和解决问题，投入的时间也更少。

（3）没有增加用户的提交难度。

用户即使不懂源码，也能提交 PR。

他可以向 AI 描述问题，让 AI 生成 PR。在 AI 时代，提交 PR 几乎和提交 issue 一样简单。

（4）禁止 issue 的根本原因是，开源项目资源不足，应付不了激增的 issue。

AI 时代，项目不再应鼓励用户把问题抛出来指望别人来解决，而应鼓励大家一起为项目贡献力量。

## 史上最长的数学程序

上周，Anthropic 公司使用 Claude AI，完成了一个史上最长的数学程序：程序化证明了费马大定理。

17世纪，法国数学家费马提出一个著名猜想：大于2的整数，不可能满足下面的等式。

![](https://cdn.beekka.com/blogimg/asset/202609/bg2026090502.webp)

后世的数学家发现，这个猜想难得超乎想象，根本无法证明。直到三百多年后的1995年，英国数学家安德鲁·怀尔斯才最终证明了费马大定理是正确的。

![](https://cdn.beekka.com/blogimg/asset/202609/bg2026090503.webp)

安德鲁·怀尔斯的证明一共有129页，即使是专业的数学家也要花几个月才能读懂。

自从这个证明提出后，数学界一直致力于将它翻译成计算机语言，实现机器证明，从而可以自动化验证推理过程。

这个从人工证明到机器证明的翻译项目，也是超难，工作量超大，迟迟没有完成。直到上周，一个研究团队宣布，[Claude AI](https://www.anthropic.com/research/formalizing-fermats-last-theorem) 用了11天终于完成了，将安德鲁·怀尔斯的证明翻译成了 Lean 语言的程序。

![](https://cdn.beekka.com/blogimg/asset/202609/bg2026090504.webp)

Lean 语言是微软研究院 2013年提出的一种专门用于数学定理证明的编程语言。

研究人员本来只是想试一下 Claude AI 的数学研究能力，没想到它真的完成了这个超难的、无人完成的项目。

在证明最终结果前，Claude 先证明了超过3万个辅助定理，用到了其中2万9千多个，消耗了数十亿的 Token，最终代码长达1300万行。

这是有史以来最长的数学程序，不敢想象如果让人类的一个数学家团队来写要多久？所有代码现在就公布在 [GitHub](https://github.com/anthropics/fermats-last-theorem) 上面。

这件事情的意义在于，现在有大量的数学证明，无法验证是否正确，即使是数学家也要花很多时间才能看懂。现在，事实证明，AI 可以用来验证这些证明是否正确。

最后，这里有一篇[安德鲁·怀尔斯专访](https://www.pbs.org/wgbh/nova/proof/wiles.html)，他讲述自己的人生故事，推荐给大家。

![](https://cdn.beekka.com/blogimg/asset/202608/bg2026080302.webp)

采访者问他：“你为了证明费马大定理，苦苦探索了这么多年。这段旅程现在结束了，你想必会有点伤感吧？”

安德鲁回答说，就像打完一场大战，感觉解脱了。

> “确实有些伤感，但同时也有一种巨大的成就感，还感到终于自由了。我曾如此痴迷于这个问题，无时无刻不在思考它——早上醒来，晚上入睡——这种情况持续了八年。长时间思考一件事，确实很不容易。这段特殊的历程现在终于结束了，我的内心终于平静下来了。”

## 科技动态

1、[特斯拉出售 Cyber​​cab](https://electrek.co/2026/09/07/tesla-cybercab-fleet-profitable-wouldnt-sell/)

特斯拉在美国推出 Cybercab 出租车。根据马斯克的说法，特斯拉将来的主营业务，不再是生产汽车，而是经营无人驾驶出租车。

![](https://cdn.beekka.com/blogimg/asset/202609/bg2026090908.webp)

本周，特斯拉又宣布，这些出租车是对外出售的。

你购买无人驾驶出租车，不是为了自己乘坐，而是为了投资。每次载客收入，你和特斯拉对半分。

由于这些车辆24小时运营，马斯克一直说，只要购买了它们，当你睡觉的时候，它们就会为你挣钱。

问题是，你购买了这辆车，就需要承担它的折旧和贬值，还需要另外购买15000美元的自动驾驶功能包。很难想象，这种全天运营的车辆，能支撑几年。

特斯拉把车卖给你，就不再拥有车辆硬件，变成了运营你的车辆，从重资产公司变成轻资产公司。在你睡觉的时候，你的车还能帮它挣钱。

2、[戴森电动牙刷](https://www.dyson.com/oral-care/electric-toothbrush/camerajet/ceramic-ultra-blue)

戴森公司，就是生产吸尘器和电吹风的那家公司，推出了电动牙刷。

![](https://cdn.beekka.com/blogimg/asset/202609/bg2026090909.webp)

它的特别之处在于，牙刷上有一个摄像头，还有一个照明灯。

它不仅可以让你用手机查看口腔情况，更重要的是，它会根据摄像头拍到的景象，自动判断需要向哪里喷水，加大清洁力度。

![](https://cdn.beekka.com/blogimg/asset/202609/bg2026090910.webp)

我觉得，都已经做到这个程度了，不如做一个自动刷牙器，你张开嘴，它自动就把牙刷完了。

3、[AI 手杖](https://seas.harvard.edu/news/smartphone-navigation-app-people-blindness-and-low-vision)

哈佛大学工程学院的工程师，为盲人和视障人士，发明了一款 AI 手杖。

![](https://cdn.beekka.com/blogimg/asset/202609/bg2026090912.webp)

它需要跟手机配合使用。手机利用摄像头、GPS、运动和方向传感器捕捉到实时数据，再结合导航软件，自动找到下一步前进的方向，传给手杖。

手杖则发出各种哔哔声，提示用户到底是向前走，还是向左走或向右走。如果用户走错方向，它还会发出警报声。

我感觉，这个发明确实对于盲人很有价值，但需要手机全程打开，且摄像头还要能拍到街面。这还不如把手机功能集成到手杖上，就可以做出更强的智能手杖。

## 文章

1、[李·霍洛威的悲剧故事](https://note.com/masakazu_urabe/n/n7815f5b64fab?hl=en)（英文）

![](https://cdn.beekka.com/blogimg/asset/202609/bg2026090902.webp)

1981年出生的李·霍洛威（Lee Holloway）是 Cloudflare 的创始工程师，公认的技术天才。上图是 Cloudflare 的三个创始人，他在中间。

但是，36岁时他患上了早发性痴呆，大脑萎缩，后来发展到连话都没法说全了。

2、[开放模型2026年夏季述评](https://huggingface.co/blog/state-of-open-models-summer-2026)（英文）

![](https://cdn.beekka.com/blogimg/asset/202609/bg2026090911.webp)

Hugging face 分析开放模型的最新发展情况，可以了解中国模型在整个 AI 市场上目前的地位。

3、[我分解了90年代 RSA 密钥](https://mcpherrin.ca/2026/09/07/rsa.html)（英文）

![](https://cdn.beekka.com/blogimg/asset/202609/bg2026090907.webp)

互联网通信的安全，完全取决于密钥能否被破解。作者尝试破解1999年颁发的512位 RSA 密钥（目前的密钥至少是2048位）。

结果，他的台式机用了32个小时，就破解成功。如果用 GPU 集群，大概1个小时就能完成。

所以，加密货币从长远来看，也不安全，时不时就必须升级加密算法。

4、[HTML 中不需要 initial-scale 属性](https://vale.rocks/micros/20260902-1350)（英文）

![](https://cdn.beekka.com/blogimg/asset/202609/bg2026090401.webp)

网页自适应视口，不再需要指定`initial-scale=1.0`，只写`width=device-width`即可。

早期 iPhone 横屏时，页面不会自动改变宽度，为了解决[这个问题](https://quirksmode.org/quirksblog/2026/0902-initial.html)，就引入了 initial-scale 属性。

5、[JavaScript 递归的处理方法](https://blog.gaborkoos.com/posts/2026-05-09-Your-Recursion-Is-Lying-to-You/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202608/bg2026080407.webp)

使用递归时，嵌套的栈过多就会报错，尾递归可以解决这个问题。但是 JS 运行时目前不支持尾递归，本文教你怎么办。

6、[我在后院建了一个工作室](https://www.imkylelambert.com/articles/building-a-backyard-office-the-build-and-cost-breakdown)（英文）

![](https://cdn.beekka.com/blogimg/asset/202608/bg2026082606.webp)

一个美国程序员在自己的后院，搭了一件简易工作室。他详细记录了建设过程，配了照片。

![](https://cdn.beekka.com/blogimg/asset/202608/bg2026082605.webp)

## 工具

1、[FlyonUI](https://flyonui.com/)

![](https://cdn.beekka.com/blogimg/asset/202410/bg2024100504.webp)

一个基于 Tailwind CSS 的页面组件库。

2、[endlessh-go](https://github.com/shizunge/endlessh-go)

![](https://cdn.beekka.com/blogimg/asset/202403/bg2024032905.webp)

一个抵御恶意的 SSH 登陆的工具，它不会阻断那些请求，而是让它们一直处在等待状态，从而增加对方的成本。它支持 Grafana 面板。

3、[PuTTYgen](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html)

![](https://cdn.beekka.com/blogimg/asset/202403/bg2024033001.webp)

Windows 平台生成密钥对的工具。

4、[gh gfm-preview](https://github.com/thiagokokada/gh-gfm-preview)

一个 Go 语言程序，用来新建一个服务，查看 Markdown 渲染结果。

5、[caddy-waf](https://github.com/fabriziosalmi/caddy-waf)

Web 服务器软件 Caddy 的应用防火墙（waf）插件，支持正则规则和 IP/DNS/ASN/国家黑名单来阻拦恶意请求。（[@abriziosalmi](https://github.com/ruanyf/weekly/issues/11486) 投稿）

6、[一息](https://github.com/Defiabell/yixi)

![](https://cdn.beekka.com/blogimg/asset/202609/bg2026090501.webp)

一个部署在 Cloudwork Worker 的网页应用，利用 iOS 的“快捷指令”，在打开某个 App 前自动跳转到该页面，10秒后再决定是否打开该 App。（[@Defiabell](https://github.com/ruanyf/weekly/issues/11509) 投稿）

7、[ctty](https://github.com/zsuroy/ctty)

![](https://cdn.beekka.com/blogimg/asset/202609/bg2026091001.webp)

一个开源的终端应用，在终端图形界面中，管理 SSH、串口、Telnet 等连接。（[@zsuroy](https://github.com/ruanyf/weekly/issues/11522) 投稿）

8、[vet](https://github.com/vet-run/vet)

![](https://cdn.beekka.com/blogimg/asset/202507/bg2025072420.webp)

一个 Bash 脚本检查工具，可以用它运行网上下载的脚本，它会告诉你脚本做了哪些变动，得到你的批准后才会实际运行。

9、[Krep](https://github.com/davidesantangelo/krep)

一个 grep 命令的替代品，用来在文本文件搜索指定字符串，据说比 grep 速度快50倍。

10、[Inbucket](https://inbucket.org/)

![](https://cdn.beekka.com/blogimg/asset/202407/bg2024070709.webp)

一个测试邮件发送功能的应用程序，嵌入你的应用，用它测试应用的邮件发送功能，自带 Web 后台。

## 资源

1、[黑客的 Linux 基础知识](https://github.com/ahegazy0/linux-basics-for-hackers-notes)（Linux Basics for Hackers）

一个英文教程，用通俗语言解释 Linux 基础概念，可以当做入门教材。

2、[DNSSEC 的工作原理](https://howdnssec.works/)

![](https://cdn.beekka.com/blogimg/asset/202506/bg2025062508.webp)

这个英文网站使用大量漫画，解释 DNS 安全扩展 (DNSSEC) 的机制，它可以防止 DNS 投毒。

3、[Gorgeous GRUB](https://github.com/Jacksaur/Gorgeous-GRUB)

![](https://cdn.beekka.com/blogimg/asset/202505/bg2025050406.webp)

这个仓库收集系统启动软件 Grub 的各种启动画面主题。

## 图片

1、[美国公路的奇特建筑](https://publicdomainreview.org/collection/john-margolies-photographs-of-roadside-america/)

美国号称是汽车轮子上的国家，没车的话，寸步难行。

经常有人在公路边修建奇特的房子，希望吸引过路旅客的注意。

![](https://cdn.beekka.com/blogimg/asset/202609/bg2026090903.webp)

![](https://cdn.beekka.com/blogimg/asset/202609/bg2026090904.webp)

![](https://cdn.beekka.com/blogimg/asset/202609/bg2026090905.webp)

![](https://cdn.beekka.com/blogimg/asset/202609/bg2026090906.webp)

美国国会图书馆有一个[照片集](https://www.loc.gov/pictures/search/?q=mrg&sp=1&st=gallery)，包含了11,710张这种房子的彩色照片，大家可以查看。

## 文摘

1、[在开始构建任何东西之前，问自己三个问题](https://jordanlord.co.uk/blog/3-constraints/)

我从事产品开发已有10年，开发过一些失败的产品，它们要么过于复杂，要么缺乏鲜明的特色。我在犯过这些错误后，总结出三个限制条件。

后来，构建任何东西之前，我都会问自己三个问题。只有这三个问题都得到肯定回答，我才开发这个东西。

（1）能不能把产品介绍写成一页纸的概要？

如果一个项目的介绍需要超过一页纸才能写完，那就说明它太复杂了，不要开发。

（2）核心技术能不能与产品分离？

产品会不断调整方向，而核心技术则始终如一，并持续发展。

将核心技术与产品分离，能迫使你跳出产品本身的局限去思考。

比如，手机的核心技术是移动通信。某一种手机可能会失败，但移动通信不会。

（3）产品有没有一个核心特色？

这个特色清晰明了，赋予你的产品独特的个性。例如，游戏 MineCraft 完全由方块构成，宜家则提供平板包装、自行组装的家具。

你选择的这个特色可以让你缩小决策空间，专注于真正重要的问题。如果你的产品没有特色，或者选择了错误的特色,你就会打造出一个臃肿的产品，试图面面俱到。

## 言论

1、

AI 替代作家，我没有出声，因为我不是作家。

然后，AI 替代艺术家，我没有出声，因为我不是艺术家。

现在，AI 替代程序员，已经没有人能为我说话了。

-- [《然后 AI 替代程序员了》](https://medium.com/@sebastiancarlos/the-tech-market-situation-is-crazy-ec49ea772903)

2、

目前，每五个新注册的顶级域名，就有一个是诈骗域名。

-- [《域名的恶意注册》](https://simonwillison.net/2026/Sep/6/the-purpose-of-dns-is-to-spread-scams/)

3、

人们让 AI 大量解决数学难题，但是数学难题是不可再生的，如今好的问题已经变得稀缺。

自动化工具解题，并没有增加人类的数学思维，损害了未来的数学发展。

-- [陶哲轩](https://mathstodon.xyz/@tao/117237320796901560)，著名数学家

4、

世界正在“电动化”，电池和电动机构成了生活的基础，再加上 AI 的飞速发展，意味着我们周围许多“无意识之物”将变得智能化，能够自主思考和移动。

-- [Noah Smith](https://www.noahpinion.blog/p/at-least-five-interesting-things-304)，美国经济分析师

5、

科学分成两种。“科学1”是一种理想化的追求真理，“科学2”是实际的科学实践，更多是一种社交活动，要考虑社会和政治现实。

如果你是一个博士生，你必须知道，你主要从事科学2，而不是科学1。

-- [《博士生不要试图改革科学》](https://maxwellforbes.com/posts/dont-try-to-reform-science/)

## 往年回顾

[流量变现正在崩塌](https://www.ruanyifeng.com/blog/2025/09/weekly-issue-365.html)（#365）

[一份谷歌离职报告](https://www.ruanyifeng.com/blog/2024/08/weekly-issue-315.html)（#315）

[WiFi 的后面是 LiFi](https://www.ruanyifeng.com/blog/2023/08/weekly-issue-265.html)（#265）

[互联网最喜欢的行为模式](https://www.ruanyifeng.com/blog/2022/07/weekly-issue-215.html)（#215）

（完）

