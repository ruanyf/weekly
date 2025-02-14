# 科技爱好者周刊（第 337 期）：互联网创业几乎没了

这里记录每周值得分享的科技内容，周五发布。

本杂志[开源](https://github.com/ruanyf/weekly)，欢迎[投稿](https://github.com/ruanyf/weekly/issues)。另有[《谁在招人》](https://github.com/ruanyf/weekly/issues/6012)服务，发布程序员招聘信息。合作请[邮件联系](mailto:yifeng.ruan@gmail.com)（yifeng.ruan@gmail.com）。

## 封面图

![](https://cdn.beekka.com/blogimg/asset/202501/bg2025012502.webp)

秦皇岛海边的某楼盘，像乐高积木一样，每层都有私人露台花园以及公共天台花园。（[via](https://www.archdaily.cn/cn/1026045/qin-huang-dao-hai-bi-tai-er-qi-sa-fu-di-jian-zhu-shi-wu-suo)）

## 互联网创业几乎没了

上周我写了，[AI 削弱互联网](http://www.ruanyifeng.com/blog/2025/02/weekly-issue-336.html)，网站行业前景黯淡。

发布后，我突然想到，如果这个判断正确，那么，**互联网创业也差不多结束了**。

![](https://cdn.beekka.com/blogimg/asset/202502/bg2025021101.webp)

我说的“互联网创业”，指的是那些纯粹线上、不涉及线下的创业项目。

大家有没有同样的感觉，**互联网创业者正在急剧减少**。

我没有数字，但是自己的观察是，投身线上的开发者，一年比一年少。现在，除了 AI 和游戏领域，其他的互联网创业项目几乎没人敢碰。

回想十年前的氛围，简直天壤之别。那时，互联网创业堪称火爆，街头巷尾都在谈论。哪怕还没有一行代码，只要创业计划书写得好，就可能拿到风投。

![](https://cdn.beekka.com/blogimg/asset/202502/bg2025021102.webp)

那时的热门词汇是“互联网思维”，彷佛只要沾上互联网，就有钱景，就可以火箭式增长。

![](https://cdn.beekka.com/blogimg/asset/202502/bg2025021103.webp)

时过境迁，十年前的盛况，如今烟消云散。到了今天，创业意愿低落，创业者少，鼓励你创业的人更少。更多的人劝你求稳，尽量选择体制内或者留在大公司。

就算你还是想创业，寻找风险投资也非常困难。投资者一看是互联网项目，就加倍警惕，一再追问现金流和利润有没有保证。

为什么互联网创业现在几乎消失了？

我看到[一篇文章](https://www.vincentschmalbach.com/startup-winter-hacker-news-lost-its-faith/)，总结了四点原因。

（1）**互联网行业已经成熟了**，留给创业者的机会大幅减少。互联网的大部分果实已被摘取，早期的高增长难以再现。真正的创新机会即使还能找到，也会被现有的大公司快速抄袭，不会留给创业者。

而且，AI 大模型出现后，互联网本身都在衰弱，它的创业机会就更少了。

（2）**创业的机会成本变大了**。一个大厂的高级工程师，现在的薪酬（包括股票期权）超过百万，创业很难打动他了。

（3）**风险投资的商业模式难以实现了**。风投的模式是，项目高速增长，最终实现上市退出，这越来越难做到了，能够指数式增长的线上项目现在基本找不到。

（4）**创业者的生活态度发生了变化**。人们比以前更重视生活质量，越来越不愿意接受创业带来的没日没夜的劳作、倦怠、失败的人际关系、心理健康问题。

上面的四条，第一条是根本原因：互联网的高增长结束，行业的机会少了。

Hacker News 社区的一位网友[说得好](https://news.ycombinator.com/item?id=42778673)：“浏览器技术已经到头了，通过 HTML 和 JS 在网页上组织信息、创造娱乐，并从中获利，很难翻出新花样了，你能创新的地方非常有限。”

总之，单纯的互联网创业，应该再也不会像以前那样兴旺了，很可能就是社会的平均增长率和回报率。未来互联网的机会更多是与其他行业结合，就好像现在的 AI 创业，很多都是 AI 为主，互联网为辅。

## 火山引擎 DeepSeek API 介绍

DeepSeek 是现在最热门的模型，但是你不一定要使用官方 API，完全可以用第三方 API 替代。

因为 DeepSeek 是开源模型，任何人都可以架设，第三方 API 其实跟官方的效果完全一样。

我用的就是第三方 DeepSeek API，服务商是[火山引擎](https://mp.weixin.qq.com/s/0BItMZq7ZQwXpxYmfljvCA)，今天就来说说怎么用。

![](https://cdn.beekka.com/blogimg/asset/202502/bg2025021303.webp)

火山引擎是字节旗下的云服务部门，实力和可靠性都有保证。除了自家的豆包大模型，它也提供其他大模型。

相比官方 API，它有一些显著的优点。

**（1）免费额度高**，50万的免费 token 额度，用完才收费。

**（2）成本低**。现在是五折优惠，R1 模型的百万 token 的输入价格为2元人民币，输出8元，比 DeepSeek 官方价格都要低。

**（3）流量大**。每分钟 token 限额（TPM）是500万，每日 token 限额（TPD）是50亿，都是全网最高，不用担心超过限额。

**（4）延迟低**。它在国内有多个机房，不管哪里连接，响应时间都在几十毫秒、甚至十几毫秒。

**（5）联网搜索能力**。它允许 DeepSeek 模型联网搜索，并且还允许用户定制联网能力（内容源、引用条数等）。

下面就是它的 DeepSeek API 的接入教程，很简单。

首先，登录它的大模型开发平台“[火山方舟](https://console.volcengine.com/ark)”，选择左侧菜单的“在线推理”，然后点击“创建推理接入点”（下图）。

![](https://cdn.beekka.com/blogimg/asset/202502/bg2025021305.webp)

接着，填写接口名称和选择模型，建议选择“DeepSeek-V3”（下图）。

![](https://cdn.beekka.com/blogimg/asset/202502/bg2025021306.webp)

接口开通成功后，系统会分配一个模型名称（比如，下图的 ep-20250213185631-
6b6r2），这个名称要记下。

![](https://cdn.beekka.com/blogimg/asset/202502/bg2025021307.webp)

下一步，就是客户端接入 DeepSeek API 了。本周正好有一篇[读者投稿](https://github.com/ruanyf/weekly/issues/6045)《[笔记软件 Obsidian 如何接入 DeepSeek API](https://javayhu.com/ge-ren-zhi-shi-ku-da-jian-jiao-cheng/)》，大家可以参考它，进行客户端配置，我不重复了。

![](https://cdn.beekka.com/blogimg/asset/202502/bg2025021309.webp)

客户端配置的关键一步，就是上面的配置页。Model Name 是系统刚才分配给你的模型名字，Provider 选择 OpenAI Format，Base URL 填写`https://ark.cn-beijing.volces.com/api/v3`，API key 就是你在火山引擎模型详情的“API 调用”里面，让系统生成的 API 密钥。

客户端配置完成后，就可以开始使用 DeepSeek API 了。

## 科技动态

1、[人类的最后考试](https://agi.safe.ai/)（Humanity's Last Exam）

今年1月份，两家美国 AI 公司推出了一个测试集，包含3000道各种学科的题目。

![](https://cdn.beekka.com/blogimg/asset/202502/bg2025020701.webp)

据他们说，只要 AI 模型通过了这个测试集，就表明 AI 智力已经超过了人类，也就是达到了 AGI（通用人工智能）的水平，所以起名为“人类的最后考试”。

截止2月3日，AI 模型取得的[最佳成绩](https://x.com/DanHendrycks/status/1886207504037945462)是26.6%的正确率。

按照专家的说法，AI 超过人类的智力，似乎是板上钉钉的事情了，唯一的悬念是何时能超过。这个“人类的最后考试”给出了衡量的具体方法。

2、[VR 旋转椅](https://skarredghost.com/2025/01/20/roto-vr-hands-on-impressions/)

一家英国创业公司，推出了 VR 旋转椅，让玩家可以在 VR 世界里面，随着画面一起转身。

![](https://cdn.beekka.com/blogimg/asset/202501/bg2025012506.webp)

它在 VR 头盔的上方加了一个传感器（上图）。传感器能感知头部运动，从而发出指令给椅子。

当你坐在椅子上转动头部，椅子就会跟着你的头自动旋转。如果你的头向左旋转45°，椅子也会向左旋转45°。

![](https://cdn.beekka.com/blogimg/asset/202501/bg2025012507.webp)

它可以逼真地还原 VR 虚拟世界的转身体验，还消除了因为视野旋转而导致的眩晕感，提高了大脑对 VR 旋转的耐受度。

![](https://cdn.beekka.com/blogimg/asset/202501/bg2025012508.webp)

据发明者说，它还能提高生产力。如果你面前有一组虚拟显示器，只需转动脖子，你的整个身体就会从一个显示器切换到另一个显示器，虚拟键盘总是正对着你。

3、[水下住宅](https://www.theguardian.com/environment/2025/feb/03/flooded-quarry-mysterious-millionaire-and-dream-new-atlantis-welsh-border-deep)

一家英国公司正在建造“水下住宅”，将试验让人类在80米的水下生活。

![](https://cdn.beekka.com/blogimg/asset/202502/bg2025021202.webp)

![](https://cdn.beekka.com/blogimg/asset/202502/bg2025021203.webp)

上面是他们的设计图，下面是实际建造中的照片。

![](https://cdn.beekka.com/blogimg/asset/202502/bg2025021204.webp)

![](https://cdn.beekka.com/blogimg/asset/202502/bg2025021205.webp)

建造完成后，住客通过潜水艇，进入和离开这所水底房屋。

![](https://cdn.beekka.com/blogimg/asset/202502/bg2025021206.webp)

这看上去，只是一个有钱人的旅游项目，距离真正的“水下居民点”相差甚远。

事实上，人类移民水底的意义不大，不如建造海面上的“浮动城市”，更有现实价值。

4、[陶瓷砖熔炉](https://www.bostonglobe.com/2024/05/25/science/race-clean-up-heavy-industry-heats-up/)

炼钢需要高温，融化铁矿石。炼钢的熔炉都烧煤炭，产生环境污染和排放二氧化碳。

钢铁厂无法改用电加热炼钢，因为普通的电加热达不到炼钢的温度，需要特殊材料的电热丝，那是非常贵的。

![](https://cdn.beekka.com/blogimg/asset/202405/bg2024052706.webp)

一家美国创业公司发明了不用煤炭的熔炉（上图），使用陶瓷砖来产生高温。

陶瓷砖（下图）有一个特点，可以不断升温，并能保持热量。只要用电不断加热，就能最终达到1,800摄氏度，融化铁矿石。

![](https://cdn.beekka.com/blogimg/asset/202405/bg2024052707.webp)

这个发明有助于钢铁厂告别煤炭，利用太阳能和风能产生的电力，让钢铁业变成绿色行业。

## 文章

1、[如何用 OPNsense 搭建家庭防火墙](https://www.xda-developers.com/opnsense-guide/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202412/bg2024122607.webp)

OPNsense 是一个开源的防火墙和路由软件，本文介绍自己安装的详细步骤。

2、[《软件设计哲学》笔记](https://www.16elt.com/2024/09/25/first-book-of-byte-sized-tech/index.html)（英文）

![](https://cdn.beekka.com/blogimg/asset/202412/bg2024122613.webp)

作者阅读了《软件设计哲学》这本书，对怎样减少软件的复杂性，做了详细的笔记，给出了代码示例。

3、[CSS 的 backdrop-filter](https://www.joshwcomeau.com/css/backdrop-filter/) 属性（英文）

![](https://cdn.beekka.com/blogimg/asset/202412/bg2024123107.webp)

本文介绍 backdrop-filter 属性，可以产生毛玻璃的效果。

4、[为什么你应该用 Canva 制作幻灯片](https://www.xda-developers.com/tips-for-canva-presentations-vs-powerpoint/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202412/bg2024123003.webp)

本文提出 Canva 是比 PowerPoint 更好的幻灯片制作工具。

5、[在虚拟机中开发](https://blog.disintegrator.dev/posts/dev-virtual-machine/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202501/bg2025010207.webp)

作者介绍在 MacBook Pro 安装 Ubuntu 虚拟机，所有开发都在虚拟机里面完成，保证本机系统始终是干净的。

6、[基于 signal 的 Web 组件](https://hawkticehurst.com/2024/12/declarative-signals/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202501/bg2025010215.webp)

作者介绍自己写的一个 Web 组件，可以在不加其他 JS 库的情况下，实现 signal 功能。

## 工具

1、[You-Get](https://github.com/soimort/you-get)

![](https://cdn.beekka.com/blogimg/asset/202410/bg2024102909.webp)

一个从影音网站下载视频的命令行工具，比 [yt-dlp](https://github.com/yt-dlp/yt-dlp) 简单一点。

2、[Zettlr](https://www.zettlr.com/)

![](https://cdn.beekka.com/blogimg/asset/202407/bg2024072203.webp)

一个桌面的写作软件，可以管理文章，将其做成一本可出版的书。

3、[Bruno](https://github.com/usebruno/bruno)

![](https://cdn.beekka.com/blogimg/asset/202407/bg2024072205.webp)

一个开源的 API 调试的桌面客户端，类似于 Postman。

4、[Windows 容器](https://github.com/dockur/windows)

![](https://cdn.beekka.com/blogimg/asset/202407/bg2024072208.webp)

一个 Docker 镜像文件，在 Docker 容器里面运行 Windows。

5、[Timeshift](https://github.com/linuxmint/timeshift)

![](https://cdn.beekka.com/blogimg/asset/202407/bg2024072305.webp)

Linux 的时光机器，定期对文件系统生成增量快照，可以返回到指定时点。

6、[Pages CMS](https://github.com/pages-cms/pages-cms)

![](https://cdn.beekka.com/blogimg/asset/202407/bg2024072410.webp)

一个静态网站的内容管理系统，在 Cloudflare Pages 托管你的网站，文章直接在网站上编辑，数据存放在 GitHub 仓库。

7、[Pragmatic drag and drop](https://github.com/atlassian/pragmatic-drag-and-drop)

![](https://cdn.beekka.com/blogimg/asset/202404/bg2024042506.webp)

Atlassian 公司新发布的一款网页元素的拖拽库，Trello、Jira、Confluence 都在使用它。

8、[Press UI](https://github.com/novlan1/press-ui)

![](https://cdn.beekka.com/blogimg/asset/202502/bg2025020803.webp)

基于 uni-app 的小程序组件库。（[@novlan1](https://github.com/ruanyf/weekly/issues/6053) 投稿）

9、[鸿蒙 ArkTS VSCode 插件](https://github.com/Groupguanfang/arkTS)

ArkTS 是华为鸿蒙系统的开发语言，属于 TypeScript 的超集，这是它的 VSCode 插件。（[@Groupguanfang](https://github.com/ruanyf/weekly/issues/6081) 投稿）

10、[AutoSwitchTranslate](https://github.com/wa008/AutoSwitchTranslate)

一个开源的 Chrome 插件，根据用户输入的语言，自动在[谷歌翻译](https://translate.google.com/)的页面上，切换中译英或英译中。（[@wa008](https://github.com/ruanyf/weekly/issues/6085) 投稿）

## AI 相关

1、[RAG Web UI](https://github.com/rag-web-ui/rag-web-ui)

![](https://cdn.beekka.com/blogimg/asset/202502/bg2025020802.webp)

一个开源的 AI 桌面应用，可以上传文档，生成本地的知识库问答系统，基于 RAG（检索增强生成）技术。（[@JohannLai](https://github.com/ruanyf/weekly/issues/6052) 投稿）

2、[TEN Agent](https://github.com/TEN-framework/TEN-Agent)

![](https://cdn.beekka.com/blogimg/asset/202502/bg2025020805.webp)

一个 AI 的工具框架，快速打造语音相关的 AI 应用。（[@SyunWong](https://github.com/ruanyf/weekly/issues/6060) 投稿）

3、[We0](https://github.com/we0-dev/we0)

![](https://cdn.beekka.com/blogimg/asset/202502/bg2025021301.webp)

开源的 AI 代码生成方案，对标Cursor。（[@we0-dev](https://github.com/ruanyf/weekly/issues/6095) 投稿）

4、[Gemini Pro Chatbot](https://github.com/bravekingzhang/gemini-pro-chatbot)

![](https://cdn.beekka.com/blogimg/asset/202502/bg2025021002.webp)

一个开源的谷歌 Gemini Pro 手机客户端，基于 React Native。（[@bravekingzhang](https://github.com/ruanyf/weekly/issues/6089) 投稿）

5、[Ncurator](https://www.ncurator.com/zh)（馆长）

![](https://cdn.beekka.com/blogimg/asset/202502/bg2025021302.webp)

一个浏览器插件，通过导入文件或者爬取网页，建立自己的知识库，与内容聊天。（[@Yoan98](https://github.com/ruanyf/weekly/issues/6096) 投稿）

6、[LLMs-Zero-to-Hero，完全从零手写大模型](https://www.bilibili.com/video/BV1qWwke5E3K/)（视频）

![](https://cdn.beekka.com/blogimg/asset/202502/bg2025020804.webp)

网友投稿的一个视频，用一小时讲解从数据处理到模型训练，理解算法原理。（[@bbruceyuan](https://github.com/ruanyf/weekly/issues/6055) 投稿）

7、[FreeParser](https://freeparser.net)

![](https://cdn.beekka.com/blogimg/asset/202502/bg2025020703.webp)

结合 OCR + LLM 的文档信息免费提取工具，适合处理发票、收据、简历等。（[@hr98w](https://github.com/ruanyf/weekly/issues/6040) 投稿）

8、[AI 头像生成器](https://ai-headshot-generator.net/)

![](https://cdn.beekka.com/blogimg/asset/202502/bg2025021004.webp)

免费的头像合成网站。（[@lyqtzs](https://github.com/ruanyf/weekly/issues/6092) 投稿）

## 资源

1、[WikiTok](https://wikitok.cc/)

![](https://cdn.beekka.com/blogimg/asset/202502/bg2025021003.webp)

网友用抖音风格制作的维基百科，每次划动出现一个随机页面。（[@jianpingliu](https://github.com/ruanyf/weekly/issues/6090) 投稿）

2、[富文本编辑器比较2025版](https://liveblocks.io/blog/which-rich-text-editor-framework-should-you-choose-in-2025#comparison-table)（英文）

![](https://cdn.beekka.com/blogimg/asset/202502/bg2025020702.webp)

这个页面详细比较了 JS 的富文本“所见即所得”编辑器，一共十几个库，详细介绍每个库的特点。

3、[C 程序的可移植性](https://blogs.gentoo.org/mgorny/2024/09/23/overview-of-cross-architecture-portability-problems/) 

![](https://cdn.beekka.com/blogimg/asset/202409/bg2024092405.webp)

这篇长文用简单通俗的语言，总结了 C 程序移植到其他系统时需要注意的各种问题。

## 图片

1、[小猫台灯](https://www.printables.com/model/1076896-cat-cone-of-shame-lamp)

网友制作了一个小猫台灯，可以 3D 打印，提供源文件下载。

![](https://cdn.beekka.com/blogimg/asset/202411/bg2024111806.webp)

猫眼睛就是灯珠，猫的伊丽莎白圈是灯罩，放在屋里很有趣。

![](https://cdn.beekka.com/blogimg/asset/202411/bg2024111807.webp)

2、[1920 年前的滑板车](https://buzzbloq.com/vintage-photographs-of-people-riding-electric-scooters-before-1920/)

许多人可能认为滑板车是最近才发明的，但实际上它们早在1915年就出现了。

![](https://cdn.beekka.com/blogimg/asset/202311/bg2023112703.webp)

当时，滑板车是一种经济实惠且高效的交通方式，比汽车和摩托车更便宜和省油。

![](https://cdn.beekka.com/blogimg/asset/202311/bg2023112704.webp)

![](https://cdn.beekka.com/blogimg/asset/202311/bg2023112705.webp)

## 文摘

1、[中国的高科技产业集群](https://www.noahpinion.blog/p/at-least-five-interesting-things-978)

近年来，中国企业在电动汽车、手机和无人机等消费产品领域变得极具竞争力。与此同时，它们在各种高价值零部件和机械产品领域也变得极具竞争力，例如计算机芯片、机器人、激光雷达和电池。

中国企业是如何突然在所有这些领域都表现出色的？西方的一种常见的解释是，政府给予这些行业大量补贴，但一个叫做凯尔·陈（Kyle Chan）的学者有不同的解释。

他的观点是，上面这些产品属于相关技术的单一集群。

首先，很多东西都有助于生产其他东西。电池用于电动汽车、手机和无人机，芯片也是如此，工业机器人有助于制造所有其他东西，诸如此类。

如果你把所有上游产业都放在同一个国家——或者，如果可能的话，放在同一个城市——那么你就可以很容易地同时在所有下游产业中具有竞争力。这使得大国比小国更具优势——拥有更大的国内市场，更容易支持更多种类的上游产业。这对产业政策也非常重要——它告诉我们，建立一个完整的本地产业生态系统可以产生积极的外部效应。

其次，很多技术似乎正在融合。汽车与手机之间的区别已经比以前小了很多，基本上，电动汽车和手机都是由金属和塑料包裹着电池和一些计算机芯片。无人机就是这些东西加上一个发动机。

这意味着，如果一家公司擅长制造其中一种产品，那么它很容易开始制造其他产品。这就是小米能够如此迅速地建立电动汽车业务的原因。这也意味着，如果一家公司生产所有下游产品，那么它很容易扩展到上游行业——就像比亚迪成为芯片制造商一样。

不管怎样，Kyle Chan 关注的是中国的优势，而不是美国的劣势。但很容易看出，美国在这个新兴技术集群中的竞争将面临很多麻烦。美国的保守派领导人狂热地反对电动汽车和电池，而工会普遍反对自动化。这将使美国的工业生态系统出现巨大漏洞，最终损害半导体、手机和无人机行业。

但同时，我认为 Kyle Chan 描述的现象最终可能会给中国企业带来挑战。他指出，中国大公司越来越多地生产完全相同的产品。这种缺乏差异化将导致恶性价格竞争，从而导致利润率低下。

上世纪80年代泡沫时期，日本大型制造公司也发生了类似的事情——松下、索尼、日立、东芝、夏普、JVC、三洋等公司基本上都生产同一种电子产品、家电、零部件和机械。由于它们在每个产品类别中都展开竞争，因此利润率一直很低。同样，我们可能会看到比亚迪、小米、华为和其他一批中国大公司相互竞争，争夺利润。

## 言论

1、

程序员们不再互相提问，AI 回答了大部分问题。

--[ 《AI 的数周相当于人类的几十年》](https://unchartedterritories.tomaspueyo.com/p/ai-weeks-when-decades-happen)，自从 AI 大模型问世后，问答网站 StackOverflow 日益冷清

2、

有一句老话：创意很廉价，执行才是一切。然而，AI 颠覆了这个说法，执行现在很廉价，整个开发时间和交付速度的概念都不同了。

未来属于那些有想法、还能动手去做的人。

-- [ghuntley.com](https://ghuntley.com/dothings/)

3、

有时候，与那些固执己见、不肯改变观点的人，进行辩论是值得的。也许他永远不会让步，但你可以帮助其他人，看清他的胡说八道。

当然，你要警惕，不要给不法之徒提供表演的舞台，而且你的时间和精力是有限的。

-- [Reddit 读者](https://old.reddit.com/r/askphilosophy/comments/1914wml/is_there_ever_a_good_reason_to_debate_someone_who/)

4、

创办一家公司并不真的需要一个商业计划，而只需要前进。

-- [马云](https://finance.sina.cn/7x24/2025-02-13/detail-inekirke8363971.d.html)，第一次与蔡崇信见面时说的话

## 往年回顾

[苹果头盔的最大问题](https://www.ruanyifeng.com/blog/2024/02/weekly-issue-290.html)（#290）

[教育年限可以缩短吗？](https://www.ruanyifeng.com/blog/2023/02/weekly-issue-240.html)（#240）

[产品化思维](https://www.ruanyifeng.com/blog/2021/12/weekly-issue-190.html)（#190）

[印度人的工资是多少？](https://www.ruanyifeng.com/blog/2020/12/weekly-issue-140.html)（#140）

（完）

