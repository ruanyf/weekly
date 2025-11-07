# 科技爱好者周刊（第 372 期）：软件界面如何设计

这里记录每周值得分享的科技内容，周五发布。

本杂志[开源](https://github.com/ruanyf/weekly)，欢迎[投稿](https://github.com/ruanyf/weekly/issues)。另有[《谁在招人》](https://github.com/ruanyf/weekly/issues/8003)服务，发布程序员招聘信息。合作请[邮件联系](mailto:yifeng.ruan@gmail.com)（yifeng.ruan@gmail.com）。

## 封面图

![](https://cdn.beekka.com/blogimg/asset/202511/bg2025110503.webp)

冬日的北京国家图书馆自习大厅。（[via](https://www.xinhuanet.com/photo/20251103/d338bbe8a8104730816261a553dd7b9a/c.html)）

## 软件界面如何设计

（1）

软件的用户界面（UI）是一门大学问。有一个行业专门研究它，就叫做“UI 设计”。

![](https://cdn.beekka.com/blogimg/asset/202511/bg2025110511.webp)

我觉得，很多写软件的程序员，对 UI 设计毫无感觉，不知道什么样的界面好用又美观。

他们自己搞的图形界面，只要把所有功能都堆积在界面上，就觉得完成了，也不管用户是否搞得明白。

这种例子很多，我举一个刚刚看到的。

（2）

有一个很有名的软件 [Handbrake](https://handbrake.fr/)，可以转换视频格式。

![](https://cdn.beekka.com/blogimg/asset/202510/bg2025103103.webp)

它的功能非常强大，几乎所有视频格式都能识别，各种需求都能满足，而且免费、支持多平台。

但是，当你打开这个软件，看见界面的那一刻，顿时会产生一种畏惧感，除非你是高级用户。

![](https://cdn.beekka.com/blogimg/asset/202510/bg2025103104.webp)

上图就是它的主界面，各种设置一个接一个，布满了让外行摸不着头脑的文字说明。

如果用户不是专家，就会想：我该从哪里入手？会不会点错？如果去看教程，是否要花很多时间？

那些坚持不放弃的用户，也许接着会去打开“设置”菜单，想寻找一点提示，却遭受了更绝望的一击。

![](https://cdn.beekka.com/blogimg/asset/202510/bg2025103105.webp)

这个密密麻麻、充满术语的界面，会让你感到自己水平太低，够不上它的使用门槛。

你看，用户只是想找个小工具，转换一下视频格式，结果却被工具提示“你的能力不足”。

这就是糟糕的界面，不仅难用，还打击人。

（3）

[一个老外程序员](https://danieldelaney.net/normal/)实在看不下去了，大众软件的界面有必要做成这个样子吗？

他自己动手做了一个新的 UI。

![](https://cdn.beekka.com/blogimg/asset/202510/bg2025103106.webp)

是不是一下子顺眼了？

这个界面一看就懂，完全没有心理负担。唯一的操作，就是上传视频，不可能搞错，因为其他地方都没法操作，只有当你添加文件后，唯一的按钮才可以点击。

你能相信吗，这个界面和上个界面，是同一个软件，做同样的事情？

这就是优秀 UI 设计的奥秘：**避免多个操作入口，避免让用户做选择，所有设置尽量提供默认值**。这样才不会让人迷惑，可以一路回车。

肯定有很多高级用户不赞同，提出一大堆置疑。

> - 为什么要放弃 Handbrake 的强大功能？
> - 如果有人想要不同的设置呢？
> - 你考虑过特殊需求和极端情况吗？

解决方法很简单，就是再做一个专业版界面，也许就是 Handbrake 现在的样子。用户想要更多功能和个性化设置，那就自行切换。

（4）

很多生活用品也是类似的情况，有着一个复杂的界面。

就拿电视遥控器来说，布满了按钮，有必要吗？

![](https://cdn.beekka.com/blogimg/asset/202510/bg2025103107.webp)

以至于有人就把不需要的按钮，用胶布贴起来。

![](https://cdn.beekka.com/blogimg/asset/202510/bg2025103108.webp)

其实，贴了胶布以后，才是电视遥控器该有的界面！只留下那些必需的按钮。

大多数人用不到的按钮，完全可以藏在一个滑盖下面，让那些确实有需要的人，自己打开盖子去找。

## [本周软件] NocoBase

如何快速开发业务系统？

你可能会说交给大模型，其实有更简单可靠的方法，就是 [NocoBase](https://github.com/nocobase/nocobase)。

![AI-Employees](https://cdn.beekka.com/blogimg/asset/202511/bg2025110603.webp)

它是一个开源的低代码/零代码开发平台，在 [GitHub](https://github.com/nocobase/nocobase) 已经有17000颗星。

它的思路很简单:（1）接入数据库，（2）配置界面，所见即所得，（3）配置插件（权限插件、SSO 登录插件、打印插件、文档插件等等）。

![AI-Employees](https://cdn.beekka.com/blogimg/asset/202511/bg2025110604.webp)

最新的2.x版本，还引入了 [AI 员工](https://www.nocobase.com/cn/blog/nocobase-2-0)，可以让大模型的能力无缝融入到业务系统，比如调查客户背景、分析数据，抓取供应商平台的报价。

发布四年多，它的商业版本已经收获了50多个国家/地区的用户，[收入过千万](https://www.nocobase.com/cn/blog/an-open-source-project-without-ai-can-still-earn-millions-a-year)。

大家可以在[官网](https://www.nocobase.com/cn/)开通 demo，试试为自己的数据库加上操作界面，也可以从 [GitHub](https://github.com/nocobase/nocobase) 获取源代码自己部署。

## 科技动态

1、[婚礼赞助](https://x.com/dagorenouf/status/1982369609387827247)

一个国外的创业者由于还没有成功，为婚礼的费用发愁。

他在网上发帖，询问有没有公司愿意赞助他的婚礼。作为回报，他将在婚礼上展示它们的名字。

结果有26家公司赞助他，下面就是婚礼当天的样子。

![](https://cdn.beekka.com/blogimg/asset/202510/bg2025103005.webp)

![](https://cdn.beekka.com/blogimg/asset/202510/bg2025103006.webp)

![](https://cdn.beekka.com/blogimg/asset/202510/bg2025103007.webp)

2、上海第一起 [AI 提示词著作权案](https://finance.eastmoney.com/a/202511063557057377.html)近日宣判。

![](https://cdn.beekka.com/blogimg/asset/202511/bg2025110607.webp)

某公司2022年撰写了6组提示词，在 Midjourney 平台生成绘画作品，并发布在小红书等平台。

后来，该公司发现，二位被告使用这些提示词生成画作并公开发布，就提起诉讼，要求二被告停止侵权，赔偿9900元。

法院认为，提示词仅为元素的简单罗列，缺乏语法逻辑关联，未体现出作者的个性化智力投入，不应认定为作品。于是，判决原告对提示词不享有著作权，不得主张著作权侵权。

3、一家美国公司宣布，全球首个[家务机器人](https://www.ifanr.com/1642590)正式开卖，售价20000美元。

这个机器人的造型有点恐怖。

![](https://cdn.beekka.com/blogimg/asset/202511/bg2025110608.webp)

![](https://cdn.beekka.com/blogimg/asset/202511/bg2025110609.webp)

虽然它的价格不算特别贵，但是能够自主完成的操作非常有限，大部分动作都需要人工遥控，而且做事速度很慢，取一瓶水要1分钟。

![](https://cdn.beekka.com/blogimg/asset/202511/bg2025110610.webp)

![](https://cdn.beekka.com/blogimg/asset/202511/bg2025110611.webp)

4、Windows 系统的“关机”菜单里面，有一个“[更新并关机](https://www.windowslatest.com/2025/11/02/update-and-shut-down-no-longer-restarts-pc-as-windows-11-25h2-patch-addresses-a-decades-old-bug/)”选项，大家可能都用过。

![](https://cdn.beekka.com/blogimg/asset/202511/bg2025110402.webp)

但是，这个选项有一个 bug，那就是系统更新后其实不会关机，而是重启等着你操作，准确名字应该是“更新并重启”。

微软一直没有修复，可能有20年了。最新的 25H2 更新包终于改掉了这个行为，更新系统后会自动关机。

5、美国的国防科技公司“安德里尔工业”（Anduril Industries），发表了一个[智能头盔“鹰眼”](https://www.anduril.com/article/anduril-s-eagleeye-puts-mission-command-and-ai-directly-into-the-warfighter-s-helmet/)（EagleEye）。

![](https://cdn.beekka.com/blogimg/asset/202510/bg2025103008.webp)

使用时，可以将面罩放下，把脑袋包裹在里面。

![](https://cdn.beekka.com/blogimg/asset/202510/bg2025103009.webp)

这个头盔会在眼前展示一个显示屏，将现场画面与地图、无人机、传感器叠加在一起，让士兵了解战场的全部情况。

![](https://cdn.beekka.com/blogimg/asset/202510/bg2025103010.webp)

![](https://cdn.beekka.com/blogimg/asset/202510/bg2025103011.webp)

这个头盔明年将交付美军。感觉上，未来的“元宇宙头盔”也许就是这种样子。

## 文章

1、[如何架设一个暗网网站](https://flower.codes/2025/10/23/onion-mirror.html)（英文）

![](https://cdn.beekka.com/blogimg/asset/202510/bg2025103015.webp)

暗网网站（网址后缀 .onion）是只能用 Tor 浏览器访问的网站，作者记录自己架设的过程，看上去不难。

2、[如何简单地过滤爬虫](https://fxgn.dev/blog/anubis/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202511/bg2025110403.webp)

作者提出一种简单的方法，可以让网站过滤掉爬虫的请求，不需要防火墙，只需设置一下 Web 服务器即可（作者用的是 Caddy）。

3、[你知道 HTML 表格 API 吗？](https://christianheilmann.com/2025/10/08/abandonware-of-the-web-do-you-know-that-there-is-an-html-tables-api/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202511/bg2025110404.webp)

有一个古老的网页 API，允许用 JS 操作表格，虽然这些年很少人用，但是浏览器一直是支持的。

4、[编译器发展状况](https://abhinavsarkar.net/notes/2025-compiler-backend-survey/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202511/bg2025110612.webp)

本文是一篇综述，介绍目前编译器工具的总体发展状况。

5、[树莓派的最佳方式是网络启动](https://www.xda-developers.com/booting-raspberry-pi-network-huge-performance-difference/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202510/bg2025103101.webp)

树莓派一般都是 SD 卡启动，作者建议改用网络启动。对于经常切换操作系统，或者你需要管理多台树莓派，非常方便。

6、[《小小作品》系列](https://animationobsessive.substack.com/p/when-stick-figures-fought)（英文）

![](https://cdn.beekka.com/blogimg/asset/202511/bg2025110401.webp)

1999年至2006年，动画师朱志强创作的 Flash 动画系列《小小作品》（又称“火柴人”系列），风靡了国内互联网。本文回顾了他的故事，如今已经很少人记得了。

## 工具

1、[Zensical](https://github.com/zensical/zensical)

![](https://cdn.beekka.com/blogimg/asset/202511/bg2025110613.webp)

静态文档网站生成器 [Material for MkDocs](https://github.com/squidfunk/mkdocs-material/) 的作者，写的升级版，完全兼容 MkDocs，但是解决了它的很多痛点。

2、[Affinity](https://www.affinity.studio/)

![](https://cdn.beekka.com/blogimg/asset/202511/bg2025110203.webp)

用于图像编辑的桌面软件，Photoshop 的替代品，被 Canva 公司收购后，现在可以免费下载使用。

3、[FileBrowser Quantum](https://github.com/gtsteffaniak/filebrowser)

![](https://cdn.beekka.com/blogimg/asset/202506/bg2025062610.webp)

一个自搭建的、基于 Web 的文件管理器，参见[介绍文章](https://www.xda-developers.com/self-hosted-free-open-source-web-based-file-browser/)。

4、[Texo](https://github.com/alephpi/Texo)

![](https://cdn.beekka.com/blogimg/asset/202511/bg2025110202.webp)

开源的数学公式 OCR 引擎，通过前端加载模型，将数学公式的截图转成 LaTex 语法，[在线试用](https://texocr.netlify.app/ocr)。（[@alephpi](https://github.com/ruanyf/weekly/issues/8026) 投稿）

5、[TDesign uniapp](https://github.com/novlan1/tdesign-uniapp)

腾讯 TDesign 组件库的非官方 uniapp 适配，兼容 H5/微信小程序/支付宝小程序/APP 等。（[@novlan1](https://github.com/ruanyf/weekly/issues/8022) 投稿）

6、[GreenWall](https://github.com/zmrlft/GreenWall)

![](https://cdn.beekka.com/blogimg/asset/202511/bg2025110201.webp)

这个工具可以在 GitHub 提交日历上绘出指定的图形。（[@zmrlft](https://github.com/ruanyf/weekly/issues/8024) 投稿）

7、[BakLab](https://github.com/biliqiqi/baklab-web)

![](https://cdn.beekka.com/blogimg/asset/202511/bg2025110502.webp)

一个开源的社区平台，将论坛发现功能和实时聊天互动结合在一起，标题链接是前端仓库，参考[官网](https://baklab.app)。（[@oodzchen](https://github.com/ruanyf/weekly/issues/8050) 投稿）

8、[中国节假日](https://github.com/vsme/chinese-days)

![](https://cdn.beekka.com/blogimg/asset/202511/bg2025110512.webp)

这个仓库提供一系列函数，方便你查询中国节假日、节气等等，每日通过 Action 自动更新数据，支持 iCal 日历订阅。（[@vsme](https://github.com/ruanyf/weekly/issues/8059) 投稿）

另有一个[类似的项目](https://github.com/tomandjerry136/hodiday)，提供中国节假日的 JSON 文件。（[@tomandjerry136](https://github.com/ruanyf/weekly/issues/8062) 投稿）

9、[QiLuo](https://github.com/chelunfu/qiluo_admin)（祺洛）

![](https://cdn.beekka.com/blogimg/asset/202511/bg2025110605.webp)

Rust 技术栈开发的网站管理后台，采用 Axum 框架 + Sea ORM。（[@chelunfu](https://github.com/ruanyf/weekly/issues/8106) 投稿）

10、[navsite](https://github.com/wubh2012/navsite)

![](https://cdn.beekka.com/blogimg/asset/202511/bg2025110606.webp)

将飞书多维表格转成一个导航网站。（[@wubh2012](https://github.com/ruanyf/weekly/issues/8109) 投稿）

## AI 相关

1、[Jta](https://github.com/hikanner/jta)

开源命令行工具，使用 AI 模型，翻译 JSON 文件，主要用于语言包的翻译，支持27种语言，功能较多。（[@hikanner](https://github.com/ruanyf/weekly/issues/8014) 投稿）

2、[Smart Excalidraw](https://github.com/liujuntao123/smart-excalidraw-next)

![](https://cdn.beekka.com/blogimg/asset/202511/bg2025110405.webp)

手绘程序 Excalidraw 的 AI 版，使用自然语言让 AI 生成手绘风格的示意图，[在线试用](https://smart-excalidraw.aizhi.site/)。（[@liujuntao123](https://github.com/ruanyf/weekly/issues/8029) 投稿）

3、[VibeVoiceFusion](https://github.com/zhao-kun/VibeVoiceFusion)

![](https://cdn.beekka.com/blogimg/asset/202511/bg2025110406.webp)

一个开源 Web 应用，生成多说话人的合成语音，具备声音克隆功能。（[@zhao-kun](https://github.com/ruanyf/weekly/issues/8030) 投稿）

4、[Mini-Kode](https://github.com/minmaxflow/mini-kode)

一个用于教学的 AI 编程助手，旨在帮助你理解这类工具是如何开发出来的。（[@minmaxflow](https://github.com/ruanyf/weekly/issues/8035) 投稿）

5、[SQLBot](https://github.com/dataease/SQLBot)

![](https://cdn.beekka.com/blogimg/asset/202511/bg2025110407.webp)

一个开源 Web 服务，只要配置大模型和数据源，就可以用自然语言查询数据源，实现 text2sql。（[@maninhill](https://github.com/ruanyf/weekly/issues/8039) 投稿）

6、[Docutranslate](https://github.com/xunbu/docutranslate)

![](https://cdn.beekka.com/blogimg/asset/202511/bg2025110408.webp)

一个 Python 写的 Web 工具，通过 AI 模型翻译各种格式的文档文件。（[@xunbu](https://github.com/ruanyf/weekly/issues/8042) 投稿）

7、[Paper Burner X](https://github.com/Feather-2/paper-burner-x)

![](https://cdn.beekka.com/blogimg/asset/202511/bg2025110501.webp)

一个开源的 Web 服务，使用 AI 处理文献，提供文档翻译、智能对话、高效阅读。（[@Feather-2](https://github.com/ruanyf/weekly/issues/8049) 投稿）

## 资源

1、[苹果应用商店（网页版）](https://apps.apple.com/)

![](https://cdn.beekka.com/blogimg/asset/202511/bg2025110504.webp)

苹果本周终于推出了“应用商店”的网页版 apps.apple.com ，可以用浏览器访问。虽然无法从网站安装 App，但至少提供了一个 App 搜索和发现的 Web 入口。

网友扒了它的[前端代码](https://github.com/rxliuli/apps.apple.com)，发现用的是 Svelte 框架。

2、[ASCIIMoon](https://asciimoon.com/)

![](https://cdn.beekka.com/blogimg/asset/202507/bg2025070313.webp)

这个网站使用 ASCII 码展示当天的月相（新月、弯月、满月）。

## 图片

1、[兴登堡飞艇](https://rarehistoricalphotos.com/hindenburg-interior-photos/)

![](https://cdn.beekka.com/blogimg/asset/202511/bg2025110614.webp)

兴登堡飞艇是上个世纪30年代德国建造的一艘大型载人飞艇，曾经开通客运航线，飞越大西洋将乘客从欧洲运送到美国。

![](https://cdn.beekka.com/blogimg/asset/202409/bg2024090801.webp)

它长达245米，相当于一艘空中的航空母舰，可以载客50到70人。

它的内部装潢非常豪华，有单独的客房和餐厅。今天的人难以想象，长途飞行可以达到这样的舒适度。

![](https://cdn.beekka.com/blogimg/asset/202409/bg2024090802.webp)

![](https://cdn.beekka.com/blogimg/asset/202409/bg2024090803.webp)

![](https://cdn.beekka.com/blogimg/asset/202409/bg2024090804.webp)

它的气囊装的是氢气，有爆炸的风险。1937年5月，它突然起火，造成30多人死亡，飞艇作为交通工具从此就消失了。

![](https://cdn.beekka.com/blogimg/asset/202511/bg2025110615.webp)

## 文摘

1、[科技公司为了“资助 AI”而大肆裁员](https://www.reddit.com/r/ArtificialInteligence/comments/1oj52xx/tech_companies_are_firing_everyone_to_fund_ai_but/)

上个月，亚马逊宣布将裁员3万人，这是该公司历史上最大规模的裁员。此前，微软裁员1.5万人，Meta 裁员3600人，谷歌今年也裁员数百人。仅2025年一年，就有超过18万名互联网从业人员失业。

另一方面，这些公司今年在 AI 上投入了超过3000亿美元。所以，他们裁员是为了“腾出资金用于 AI 投资”。

但问题是——他们并没有省下钱。他们的 AI 支出远远超过了裁员节省下来的钱。而且，投入 AI 的钱根本没有回报，向用户收到的使用费，对比支出可以忽略不计。

大公司投向 AI 的巨额资金到底都流向了哪里？回答是他们都在互相购买。苹果付钱给谷歌，谷歌付钱给英伟达，英伟达付钱给台积电制造设备。

彼此之间的购买，推高了这些公司的销售额，进而推动了他们的股价上涨。

大众看到股价上涨，蜂拥而入，购买这些公司的股票，进一步推高了股价。

“七大巨头”——苹果、微软、英伟达、亚马逊、Alphabet、Meta和特斯拉——的总市值高达17万亿美元，市盈率高达35倍。作为对比，如果剔除这七家公司，标普500指数的市盈率仅为15.5倍。

为什么这些公司会有如此高的溢价？因为人人都相信 AI 在未来会给它们带来巨额利润。

但事实是，这些公司其实没有赚到钱，只是在为 AI 花钱，而且是互相花钱，营造出一种增长的假象。

更糟的是，它们现在不能停下来。因为一旦任何一家公司停止为 AI 投资，它们的股价就会暴跌。投资者会放弃它们，所以即使这些投入没有带来回报，它们也必须继续投入资金来维持股价。

这就是目前的局面，AI 的繁荣建立在大公司的巨额投资之上。为了投资，大公司缩减了其他方面的支出（包括裁员），而那些投资其实只是资金在循环流动。所有人仿佛都认定，这种巨额投资不会停下来，而且会有收回投资的那一天。

## 言论

1、

我说过永远不会有 htmx 的第三版，但没说过不会有第四版。

-- [Carson Gross](https://htmx.org/essays/the-fetchening/)，htmx 项目创始人，曾经公开说不会有 htmx 3.0版，本周宣布直接发布4.0版。

2、

我们收到谷歌的报告，他们在我们的代码中发现了一个漏洞。

我们很重视安全，但是互联网巨头使用 AI 扫描志愿者维护的代码，然后提交安全漏洞，希望志愿者免费修复，这真的公平吗？

-- [FFmpeg 团队](https://x.com/FFmpeg/status/1984178359354483058)

3、

未来十年，全球将有超过70万亿美元的遗产财富直接交给继承人，这将加剧社会的不平等。

-- [英国《卫报》](https://www.theguardian.com/inequality/2025/nov/03/more-than-70tn-of-inherited-wealth-over-next-decade-will-widen-inequality-economists-warn)

4、

为什么运气很重要？因为它会缩短积累的时间，让你接触到更大的机会。这就像当你已经有钱的时候，赚更多的钱就容易得多。

-- [《人生是一场概率游戏》](https://zachholman.com/posts/money-off-the-table)

5、

AI 出现以后，程序员的发展方向彻底变了。

你必须专注于理解系统而非理解语法，你的技能必须从编写代码转移到架构、安全、人机协作等方面。

未来属于那些能够构想、开发和维护复杂系统的人。

-- [《软件开发的演变》](https://guptadeepak.com/the-evolution-of-software-development-from-machine-code-to-ai-orchestration/)

## 往年回顾

[VS Code 编辑器的下一站是 Zed？](https://www.ruanyifeng.com/blog/2024/11/weekly-issue-325.html)（#325）

[彼得·蒂尔的实验](https://www.ruanyifeng.com/blog/2023/10/weekly-issue-275.html)（#275）

[NPC 演员也是一种职业](https://www.ruanyifeng.com/blog/2022/09/weekly-issue-225.html)（#225）

[知识广度 vs 知识深度](https://www.ruanyifeng.com/blog/2021/09/weekly-issue-175.html)（#175）

（完）

