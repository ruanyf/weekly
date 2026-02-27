# 科技爱好者周刊（第 386 期）：当外卖员接入 AI

这里记录每周值得分享的科技内容，周五发布。

本杂志[开源](https://github.com/ruanyf/weekly)，欢迎[投稿](https://github.com/ruanyf/weekly/issues)。另有[《谁在招人》](https://github.com/ruanyf/weekly/issues/8882)服务，发布程序员招聘信息。合作请[邮件联系](mailto:yifeng.ruan@gmail.com)（yifeng.ruan@gmail.com）。

## 封面图

![](https://cdn.beekka.com/blogimg/asset/202602/bg2026020702.webp)

上海黄浦江边的艺术装置《航舵》。此处是船厂遗址，有一堵防汛墙，为了吸引人们走上去，以及配合造船主题，就设计了这么一个装置。（[via](https://www.gooood.cn/shanghai-urban-space-art-season-susas-2025-by-shanghai-summits-architecture.htm)）

## 当外卖员接入 AI

最近，美国有一条[无人驾驶的新闻](https://www.cnbc.com/2026/02/12/waymo-is-paying-doordash-gig-workers-to-close-its-robotaxi-doors.html)，引起很大反响。

Waymo 是一家无人驾驶公司，已经在多个美国城市开展出租车运营了。

![](https://cdn.beekka.com/blogimg/asset/202602/bg2026021608.webp)

它有一个最大的烦恼，就是乘客下车后，没关好车门或后备箱，导致车辆无法驶离。

![](https://cdn.beekka.com/blogimg/asset/202602/bg2026021610.webp)

奇怪的是，这样一家高科技公司，居然没有开发远程关车门功能，反而想出了一个另类的解决方案。

它给外卖小哥下单，付钱让他们赶到现场关车门。

![](https://cdn.beekka.com/blogimg/asset/202602/bg2026021609.webp)

有一个小哥看到了上面这张奇怪的订单，标价6.25美元，要求赶到1公里以外的一个地方，找到一辆 Waymo 出租车，把车门关上。完成后，还将额外收到5美元。

他觉得很稀奇，就截图发到了网上，这件事顿时就变成了新闻。

它的新闻点，其实不是接单关车门，而是**程序在调动人力，完成自动化流程**。

一直以来，程序只能调动计算机，突然之间，它可以调动人力了，某个环节计算机完成不了，它就自动找人来完成。这才是新闻。

这样做之所以能够成功，完全因为**外卖员是一个自带 API 的人群**，已经接入了软件系统，成为了自动化人力，程序可以通过接口去调用他们。

你仔细思考这件事，就会意识到，在人工智能和机器人的时代，外卖员有特殊的价值，将是一个很有想象空间的职业。**他们的作用绝不仅是送外卖，而是可以升级为远程操控、程序调用的人力**，是“机器 + 人”自动化流程的一环。

一旦 AI 模型跟人力结合在一起，模型的作用将大大扩展，现在的 OpenClaw 只能操作计算机，**将来的 AI 助手还将是劳动力的调配引擎**。

比如，我要装修一套房子，AI 做好了设计方案，然后就在网上分布细分任务，水电工接单做好水电，监理员接单上门确认后，AI 就自动结算费用，进入下一个环节，泥工、木工……直至装修完成。

到了那时，你在网上输入提示词“我要装修房子”，真的可能一套房子就被 AI 装修好了。

AI 平台因此会变成一个劳务平台，你可以通过 AI 找工作，上面有各种劳务需求，你接单去做，完成后收到报酬。

总之，一旦人力接入 AI，被它调配，AI 就不止是计算机革命，而是整个社会经济都将围绕它重构了。

## [本周软件] PinMe：去中心化托管服务

链接会删除，网站会关闭，域名会消失，内容怎样**永久**保存在互联网？

现在有一种解决方案 IPFS（星际文件系统），通过分布式协议，在所有节点之间分享内容，而网址就是内容的哈希值。

所以，内容一旦上传 IPFS，就无法修改，因为哈希值会变，也无法删除，因为其他节点会有留存。

今天介绍的 [PinMe](https://pinme.eth.limo/)，就是这样一个 IPFS 托管工具。

![](https://cdn.beekka.com/blogimg/asset/202602/bg2026022202.webp)

你可以通过它，将任何文件上传到 IPFS。上传一个静态网站，理论上就是永久可访问，任何人（包括你）都无法删改和关闭，任何一个 IPFS 网关都能打开浏览。

PinMe 会分配一个 ENS 域名，指向上传内容，这个域名写入以太坊区块链，也是永不消失。

它提供的免费储存空间有 1GB，更大空间和自定义域名需要付费。

![](https://cdn.beekka.com/blogimg/asset/202602/bg2026022203.webp)

文件可以网页上传，也可以用它的开源[命令行发布工具](https://github.com/glitternetwork/pinme)，一行命令发布到 IPFS，该工具已经有2800颗星。如果要永久保存内容，大家可以[试试看](https://pinme.eth.limo/)。

## 科技动态

1、[音频线](https://www.tomshardware.com/speakers/in-a-blind-test-audiophiles-couldnt-tell-the-difference-between-audio-signals-sent-through-copper-wire-a-banana-or-wet-mud-the-mud-should-sound-perfectly-awful-but-it-doesnt-notes-the-experiment-creator)

材质越好的音频线，价格越贵，但真能听出差别吗？

一个美国音响爱好者做了一个实验，分别用专业音频铜线、香蕉和湿泥来传输音频。

![](https://cdn.beekka.com/blogimg/asset/202602/bg2026021605.webp)

他让不同的人来听，结果根本听不出差别。

![](https://cdn.beekka.com/blogimg/asset/202602/bg2026021606.webp)

这太令人惊讶了。一般认为，香蕉和湿泥土不是良好的导体，但是这个实验表明，它们只是电阻大一点，除了降低信号电平之外，不会对音频造成太大失真。

2、[COBOL 代码的 AI 维护](https://www.zerohedge.com/markets/ibm-plunges-after-anthropics-latest-update-takes-cobol)

COBOL 是上个世纪的编程语言，现在已经没人用了。

但是，美国很多大公司的关键系统是 COBOL 写的，始终没有下线，目前都由 IBM 公司维护，收费非常昂贵，因为除了他们就没人懂这门语言。

![](https://cdn.beekka.com/blogimg/asset/202602/bg2026022404.webp)

本周一（2月23日），Anthropic 公司突然在官网发布[文章](https://claude.com/blog/how-ai-helps-break-cost-barrier-cobol-modernization)（上图），宣布他们的 Claude 模型可以自动分析 COBOL 代码，将其迁移到其他语言。

这篇文章立刻导致 IBM 股价大跌（下图）。

![](https://cdn.beekka.com/blogimg/asset/202602/bg2026022405.webp)

如果 AI 可以维护 COBOL 代码，是否意味着所有历史遗留软件的维护，都已经不成问题了？我们再也不必为接手老项目烦恼了？

3、[AI 编程项目的版权](https://zomglol.wtf/@jamie/116059523957674208)

美国的司法规定，只有人类的智力成果才有版权，AI 的生成结果没有版权。

这意味着，AI 编程出来的代码，（在美国）是无版权的，任何人都可以自由使用。

![](https://cdn.beekka.com/blogimg/asset/202602/bg2026021415.webp)

这一点要特别注意，GitHub 上面那些 AI 编程项目，其实都没有版权，可以自由使用，即使加上版权声明和许可证也是无效的。因为 GitHub 是美国公司，必须遵守美国法律。

除非项目明确披露哪些部分是 AI 生成的，哪些部分是人工编写的，这样可以对人工编写的部分主张版权。

4、[僧侣机器人](https://finance.sina.cn/7x24/2026-02-26/detail-inhpccus4563077.d.html)

日本京都大学发布了一款僧侣机器人，硬件为宇树机器人，软件为佛经训练过的 ChatGPT。

![](https://cdn.beekka.com/blogimg/asset/202602/bg2026022603.webp)

它步态缓慢，能做出双手合十、鞠躬等动作，能够跟你对话佛经，提供精神安慰，解答生活问题，还能主持祈福、洒净等简单法事。

当被问到“嗜酒困难”时，机器人回答：“远离损己伤身之物，持守不饮酒戒，勤修善行，方为安乐。”又被问道“性情急躁、难以专注”怎么办？它建议：“勿求速成，安住当下，逐一观照所遇之事，辨明本心所需，徐徐而理，自然澄明。”

![](https://cdn.beekka.com/blogimg/asset/202602/bg2026022602.webp)

京都大学在声明中表示，这款机器人将来可能协助或替代人类，完成一些宗教仪式，并且也能解决由于人口老龄化和劳动力减少，佛教僧侣不足的问题。

该机器人从3月起在京都青莲院门迹等寺庙进行为期6个月的实地测试，顺利的话，将于2027年推出商业版本，提供“寺庙机器人租赁服务”，帮助小型寺庙维持运营。

## 文章

1、[SWE-bench Verified 测试应该放弃](https://openai.com/index/why-we-no-longer-evaluate-swe-bench-verified/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202602/bg2026022617.webp)

OpenAI 公司创建的 SWE-bench Verified 是目前最常用的测试基准，用来衡量模型的编码能力。

本周，OpenAI 公司[提出](https://openai.com/index/why-we-no-longer-evaluate-swe-bench-verified/)应该放弃它，因为有难以克服的缺陷，已经不准确，可以改用 ScaleAI 创建的 SWE-Bench Pro。

2、[.plan 文件](https://matteolandi.net/plan-files.html)（英文）

![](https://cdn.beekka.com/blogimg/asset/202602/bg2026021613.webp)

作者提出，文本文件 .plan 是最好的任务管理系统。放在云盘上，随时随地使用任何设备，都能查看和编辑。

3、[鲸落](https://nesbitt.io/2026/02/21/whale-fall.html)（英文）

![](https://cdn.beekka.com/blogimg/asset/202602/bg2026022616.webp)

一鲸落，万物生。本文通过很多例子，说明一个大项目终止后，并不会真的死亡，而是化作许多小项目，四处生长。

4、[40 行代码实现无服务器 OCR](https://christopherkrapu.com/blog/2026/ocr-textbooks-modal-deepseek/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202602/bg2026021701.webp)

本文是一篇教程，作者用云函数调用 DeepSeek OCR 模型，将 PDF 格式的数学论文转为 Markdown。

5、[两台路由器实现局域网无缝漫游](https://popring.cn/blog/home-network-issues)（中文）

![](https://cdn.beekka.com/blogimg/asset/202602/bg2026022001.webp)

作者家中的两台路由器无法组 Mesh，本文介绍如何将它们组成同一个局域网，让设备可以无缝漫游。（[@popring](https://github.com/ruanyf/weekly/issues/9042) 投稿）

6、[视觉隐藏的最新实现](https://dbushell.com/2026/02/20/visually-hidden/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202602/bg2026022103.webp)

视觉隐藏指的是，网页上看不见这个元素，但是网页阅读器能读到这个元素。本文介绍它的最新 CSS 写法。

7、[OpenClaw 背后的引擎 Pi](https://www.onuruzunismail.com/blog/the-engine-behind-the-hype)（英文）

![](https://cdn.beekka.com/blogimg/asset/202602/bg2026022407.webp)

OpenClaw 的走红，也带火了它的底层引擎 [Pi](https://github.com/badlogic/pi-mono/tree/main/packages/coding-agent)。Pi 是一个 Coding Agent，跟 Claude Code 作用类似，但更轻量级。

## 工具

1、[Oat](https://github.com/knadh/oat)

![](https://cdn.beekka.com/blogimg/asset/202602/bg2026021601.webp)

轻量级的 HTML + CSS + 极简 JS 的语义化 UI 组件库。

2、[jsonriver](https://github.com/rictic/jsonriver)

一个 JS 库，用于解析 JSON 字符流，可以作用 JSON.parse() 的替代品，后者不支持流模式。

3、[Arcmark](https://github.com/Geek-1001/arcmark)

![](https://cdn.beekka.com/blogimg/asset/202602/bg2026021607.webp)

一款开源的 macOS 桌面应用，用来管理浏览器书签，可以自动吸附在浏览器窗口的侧边。

4、[Systemd manager tui](https://github.com/matheus-git/systemd-manager-tui)

![](https://cdn.beekka.com/blogimg/asset/202602/bg2026021611.webp)

一个通过终端界面管理 Systemd 服务的工具。

5、[weathr](https://github.com/Veirt/weathr)

![](https://cdn.beekka.com/blogimg/asset/202602/bg2026022104.webp)

一个终端应用，用来查看指定地点的天气，以动画形式展示。

6、[CursorLens](https://github.com/blueberrycongee/CursorLens)

![](https://cdn.beekka.com/blogimg/asset/202602/bg2026021603.webp)

开源的录屏桌面应用，用于制作产品演示与讲解视频。（[@blueberrycongee](https://github.com/ruanyf/weekly/issues/9019) 投稿）

7、[结印](https://github.com/huanglizhuo/Ketsuin)（Ketsuin）

![](https://cdn.beekka.com/blogimg/asset/202602/bg2026021502.webp)

一个 Web 应用，通过火影忍者的手势输入法，摄像头识别手势进行文字输入。（[@huanglizhuo](https://github.com/ruanyf/weekly/issues/9018) 投稿）

8、[Puter](https://github.com/HeyPuter/puter)

![](https://cdn.beekka.com/blogimg/asset/202506/bg2025061105.webp)

一个需要自搭建、通过浏览器使用的云操作系统，参见[介绍文章](https://www.xda-developers.com/this-cracking-cloud-computer-can-be-anything/)。（[@cosmicqbit](https://github.com/ruanyf/weekly/issues/9043) 投稿）

9、[Penio](https://github.com/game1024/Penio)

![](https://cdn.beekka.com/blogimg/asset/202602/bg2026022102.webp)

跨平台的教学可视化桌面应用，让鼠标、键盘在屏幕可视化凸显出来。（[@game1024](https://github.com/ruanyf/weekly/issues/9046) 投稿）

10、[openhare](https://github.com/sjjian/openhare)

![](https://cdn.beekka.com/blogimg/asset/202602/bg2026022401.webp)

基于 Flutter 的跨平台桌面 SQL 查询工具，支持多种数据库，可以 AI 生成 SQL 查询和数据分析。（[@sjjian](https://github.com/ruanyf/weekly/issues/9056) 投稿）

## AI 相关

1、[BitFun](https://github.com/GCWing/BitFun)

![](https://cdn.beekka.com/blogimg/asset/202602/bg2026021501.webp)

开源的 AI 编程 IDE，类似于 Cursor。（[@GCWing](https://github.com/ruanyf/weekly/issues/9004) 投稿）

2、[Xcode Proxy](https://github.com/tianrking/xcode-proxy)

一个本地的基于 Python 的服务，让 Xcode 可以调用各种第三方 AI 服务。（[@tianrking](https://github.com/ruanyf/weekly/issues/9024) 投稿）

3、[openapi-to-skills](https://neutree.ai/projects/openapi-to-skills)

![](https://cdn.beekka.com/blogimg/asset/202602/bg2026021901.webp)

将大型的 OpenAPI 文档转为按需加载的 Skills 结构，用来精确执行某个接口，以及减少 Token 消耗和幻觉。（[@Yuyz0112](https://github.com/ruanyf/weekly/issues/9036) 投稿）

4、[Trending AI](https://github.com/HarlonWang/TrendingAI)

![](https://cdn.beekka.com/blogimg/asset/202602/bg2026022201.webp)

开源手机应用，AI 总结 GitHub Trending 项目。（[@HarlonWang](https://github.com/ruanyf/weekly/issues/9047) 投稿）

5、[Horizon](https://github.com/Thysrael/Horizon)

![](https://cdn.beekka.com/blogimg/asset/202602/bg2026022302.webp)

一个 Python 项目，从自定义的多个信息源收集新闻，进行筛选和摘要，生成一份日报。（[@Thysrael](https://github.com/ruanyf/weekly/issues/9055) 投稿）

6、[JadeAI](https://github.com/twwch/JadeAI)

![](https://cdn.beekka.com/blogimg/asset/202602/bg2026022402.webp)

基于 Next.js 的智能简历生成器，支持拖拽编辑、实时 AI 优化、50 套专业模板打造简历。（[@twwch](https://github.com/ruanyf/weekly/issues/9058) 投稿）

## 资源

1、[Flashpoint Database](https://flashpointproject.github.io/flashpoint-database/)

![](https://cdn.beekka.com/blogimg/asset/202602/bg2026021602.webp)

这个网站收集各种网页游戏和动画，目前有18万个游戏和3万个动画。

2、[Claude Code 中文教程](https://github.com/KimYx0207/Claude-Code-Guide-Zh)

包含10个完整章节的 Claude Code 中文教程仓库。（[@KimYx0207](https://github.com/ruanyf/weekly/issues/9022) 投稿）

3、[海平面上升模拟器](https://www.runcell.dev/tool/true-size-map/sea-level-rise-simulator)

![](https://cdn.beekka.com/blogimg/asset/202602/bg2026022614.webp)

用户在网页上设定海平面的上升高度，查看地球卫星地图的变化，哪些地区被淹没。（[@ObservedObserver](https://github.com/ruanyf/weekly/issues/9070) 投稿）

4、[diode](https://www.withdiode.com/)

![](https://cdn.beekka.com/blogimg/asset/202602/bg2026022408.webp)

面包板在线模拟网站，在网页上用各种电子元件，可视化模拟面包板电路项目，可以查看运行效果。

## 图片

1、[世界第一个浏览器](https://worldwideweb.cern.ch/)

![](https://cdn.beekka.com/blogimg/asset/202602/bg2026022101.webp)

1990年，欧洲核子研究中心的研究员蒂姆·伯纳斯-李（Tim Berners-Lee），发明了 WWW（互联网的网页浏览服务）。

现在，欧洲核子研究中心的官网提供[世界第一个浏览器](https://worldwideweb.cern.ch/)（上图），作为历史体验，供用户在线体验。

同时提供的，还有[世界第一个网站](https://info.cern.ch/)（下图）。

![](https://cdn.beekka.com/blogimg/asset/202602/bg2026022601.webp)

2、[显示器布局](https://www.ssp.sh/brain/computer-desk-setup-monitor-workflow/)

程序员的工作台，往往放着1到 n 台显示器。

![](https://cdn.beekka.com/blogimg/asset/202602/bg2026022410.webp)

有人总结了这些显示器的放置方法，你属于哪一种？

![](https://cdn.beekka.com/blogimg/asset/202602/bg2026022409.webp)

## 文摘

1、[卡车的空气动力学](https://www.thedrive.com/news/how-a-nasa-engineer-discovered-a-world-of-semi-truck-aerodynamics-by-accident)

1973年，美国宇航局的一个工程师骑自行车上班，遇到一辆大卡车在身边飞驰而过，卡车的气流将他连人带车推向路边。

大多数骑车人一定会心惊胆战，但是这个工程师立刻想到，大卡车的空气阻力非常大，所以才有这么强的气流。

回到实验室后，他就召集了一些同事，借来一辆旧福特厢式货车做实验，怎样才能改善空气阻力，提高燃油效率。

![](https://cdn.beekka.com/blogimg/asset/202602/bg2026022307.webp)

他们先在卡车外面包了一层方方正正的铝板（上图），测量基准阻力。

然后，将车头前部的垂直角打磨成圆角（下图），再测试阻力有没有变化。

![](https://cdn.beekka.com/blogimg/asset/202602/bg2026022308.webp)

接着，密封了车辆底部，使气流更顺畅地流过车身。

经过测量，将前部四个边缘全部打磨成圆角后，阻力降低了52%；密封车底后，阻力又降低了7%。他们估计，这可以使高速公路行驶时的燃油消耗减少15%至25%。

最后，他们又在驾驶室上方和底盘前方加装了整流罩，在车尾加装了尾翼，阻力又降低了15%。

![](https://cdn.beekka.com/blogimg/asset/202602/bg2026022309.webp)

他们当时改装的样车，跟2017年特斯拉推出的 Semi 卡车很相像。

![](https://cdn.beekka.com/blogimg/asset/202602/bg2026022310.webp)

![](https://cdn.beekka.com/blogimg/asset/202602/bg2026022311.webp)

## 言论

1、

美国最大的创业孵化器 YC 如今几乎只投人工智能领域，最新一轮它的投资组合中，高达88%的公司都基于人工智能。

这与它曾经倡导的逆向思维背道而驰，转而倾向于稳妥的追随潮流。

-- [《YC 是收留懦夫吗？》](https://stanfordreview.org/is-yc-for-cowards/)

2、

我们应该帮助实体店生存下去。当一家实体店开业，它会让其他人受益，会帮助街区吸引居民和潜在顾客，最终让本地区变得有活力和适合生活。

-- [《零售业提升土地价值》](https://worksinprogress.co/issue/fixing-retail-with-land-value-capture/)

3、

如果 AI 主导一切，那些无法被 AI 量化的东西，不是会特立独行，而是最终会被淘汰。

-- [Ben Thompson](https://stratechery.com/2026/an-interview-with-ben-thompson-by-john-collison-on-the-cheeky-pint-podcast/)，美国著名科技 UP 主

4、

美国企业有一个方面做得很好，那就是他们不会把时间和精力浪费在自己不擅长的事情上，而是对自己擅长的领域加倍投入。

他们只关注收益最大化，不关注成本最小化。

-- [Ben Thompson](https://stratechery.com/2026/an-interview-with-ben-thompson-by-john-collison-on-the-cheeky-pint-podcast/)，美国著名科技 UP 主

5、

创造力需要你有勇气去放弃确定性。

-- [埃里希·弗罗姆](https://newsletter.squishy.computer/p/folding-context)，德国哲学家

## 往年回顾

[代币是什么](https://www.ruanyifeng.com/blog/2025/02/weekly-issue-339.html)（#339）

[宽容从何而来](https://www.ruanyifeng.com/blog/2024/02/weekly-issue-289.html)（#289）

[未来两种人会增加](https://www.ruanyifeng.com/blog/2023/01/weekly-issue-239.html)（#239）

[下一个内卷的行业](https://www.ruanyifeng.com/blog/2021/12/weekly-issue-189.html)（#189）

（完）


