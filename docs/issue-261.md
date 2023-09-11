# 科技爱好者周刊（第 261 期）：黑客马拉松的正确方式

这里记录每周值得分享的科技内容，周五发布。

本杂志[开源](https://github.com/ruanyf/weekly)，欢迎[投稿](https://github.com/ruanyf/weekly/issues)。另有[《谁在招人》](https://github.com/ruanyf/weekly/issues/3222)服务，发布程序员招聘信息。合作请[邮件联系](mailto:yifeng.ruan@gmail.com)（yifeng.ruan@gmail.com）。

## 封面图

![](https://cdn.beekka.com/blogimg/asset/202307/bg2023070601.webp)

宁波慈溪市的果农，在夜间为火龙果人工授粉。火龙果的花在日落后开放，次日清晨闭合。（[via](http://zj.people.com.cn/n2/2023/0630/c370990-40477513-2.html)）

## 黑客马拉松的正确方式

你参加过黑客马拉松（hackathon）吗？

那是一种编程比赛，程序员聚集到一个地点（通常是会议室），在指定时间完成各自的项目，然后评出获胜者。

![](https://cdn.beekka.com/blogimg/asset/202307/bg2023070512.webp)

我知道的“黑客马拉松”都非常紧张，必须在48小时甚至24小时内拿出作品，晚上往往没时间睡觉，要熬通宵。

下面是我在网上找到的一份[比赛办法](https://www.woshipm.com/active/2228696.html)，很具有普遍性。

> **团队规模**：参赛队伍的最高人数限制为 5 人。
>
> **演示原型**：参赛者必须演示原型，可以考虑搭配幻灯片或视频。
>
> **比赛方式**：现场决赛的队伍或个人在同一场地的规定时间内，完成并提交组委会发放的同一考题。

但是，我最近看到了国外的一份[黑客马拉松举办通知](https://oceansprint.org/)，才意识到其实还有另一种方式，而且那才是正确的比赛方式。

![](https://cdn.beekka.com/blogimg/asset/202307/bg2023070201.webp)

这个比赛叫做“NixOS 海洋编程冲刺 2023”（NixOS Ocean Sprint 2023），看谁能找出 NixOS 这个操作系统的漏洞。

比赛时间是今年10月份，任何人都可以报名，组委会挑选出20人参赛。

它的不同之处在于比赛地点：加那利群岛！

![](https://cdn.beekka.com/blogimg/asset/202307/bg2023070202.webp)

那是西班牙著名的旅游胜地，大西洋的热带岛屿，景色优美，每年吸引几百万的全世界游客。

组委会借了一个泳池大别墅，大家晚上住旅馆，白天就到别墅来比赛。

![](https://cdn.beekka.com/blogimg/asset/202307/bg2023070203.webp)

编程累了，就去泳池游泳。到了饭点，所有人就聚在一起吃饭聊天。

![](https://cdn.beekka.com/blogimg/asset/202307/bg2023070204.webp)

![](https://cdn.beekka.com/blogimg/asset/202307/bg2023070205.webp)

清晨和夜晚，你还可以去海滩运动。等到比赛结束，再游览一下加那利群岛。

我顿时觉得，这才是黑客马拉松的正确方式，以前那种集训式的比赛方式太无趣了，**太看重竞技和名次，忽视了交流和乐趣**。

黑客马拉松的结果，其实不重要，几十个小时的命题作文，能得到什么有价值的结果？反而是陌生的年轻人聚在一起，互相交流，结交朋友，碰撞思想，这才是最有价值的。另外，在风景美丽的热带海岛上“编程 + 旅行”，也会留下终身难忘的美好回忆。

这样的比赛更接近黑客的本质：**编程是为了乐趣和好奇心，是一种探索，而不是竞技**。

我真心建议，国内的黑客马拉松借鉴这种方式，也搬到风景优美的旅游区举行，至少要营造让大家结识攀谈的场合和时间，交流第一，比赛第二。

## 指纹浏览器 AdsPower

很多优秀的国产软件，由于市场和行业的原因，国内知名度不高，反倒在境外很出名。今天，就给大家介绍这样一款国产软件 AdsPower（[中文站](https://www.adspower.net/)，[英文站](https://www.adspower.com/)）。

![](https://cdn.beekka.com/blogimg/asset/202306/bg2023063008.webp)

它是一款指纹浏览器，或者准确地说，应该是 **“反指纹浏览器”，防止网站获取你的浏览器指纹**。

所谓“浏览器指纹”，就是网站对用户生成独一无二的标志，用来追踪用户。它用到了很多高深的技术。

> - 基本指纹指标：UserAgent、屏幕分辨率、CPU 核心数、内存、插件、语言等。
> - 高级指纹：Canvas、WebGL、AudioContext、WebRT、字体等。
> - 地理位置、时区、DNS、SSL 证书等。

上面这些指标，你访问的网站都能拿到，从而很准确地识别一个人。

解决方法就是变造这些指标，让指纹变成动态。这需要安装某些特定插件，或者启用浏览器的“沙盒模式”。这样很麻烦，也无法推广到普通用户。

![](https://cdn.beekka.com/blogimg/asset/202307/bg2023070102.webp)

AdsPower 想出一个更好的方法，就是做出一个独立浏览器，集成了所有反指纹措施，打开就能直接使用。下面就是它的主要功能。

（1）**[变造浏览器指纹](https://www.adspower.net/blog/338)**，使得用户无法被追踪，保护隐私。

（2）**定制浏览器环境**，可以随意切换环境。它有 Chrome 和 Firefox 两个内核，还可以切换内核。 

（3）**[浏览器自动化](https://www.adspower.net/blog/339)**，自动模拟用户操作，便于完成重复性任务。

（4）**[窗口同步](https://www.adspower.net/news/379)**，每个窗口都是不一样的浏览器环境，用户在主窗口操作，其他窗口可以跨屏同步这些操作。

有了上面这些功能，AdsPower 的用途就变得非常广泛，**不仅是反指纹，还可以用来数据采集和自动化测试，对于电商尤其有用**，比如多店铺管理、社交媒体多账户管理、不同账号的跨境收款……

![](https://cdn.beekka.com/blogimg/asset/202307/bg2023070103.webp)

为了服务企业用户，他们还提供[数据加密](https://www.adspower.net/blog/341)、[成员管理](https://www.adspower.net/blog/340)、[团队协作](https://www.adspower.net/blog/340)、全球加速等功能，在亚洲、欧洲和美洲都部署了服务器。

AdsPower 的发展势头非常迅猛，全球已经有80万用户，海外的口碑非常好，在东亚、西亚、南亚、东南亚等多国都是热门软件，单单各种语言的版本就有12种。

它的基本功能都是免费使用，支持创建2个浏览器环境，如果需要额外环境和企业级功能，则需要付费。

![](https://cdn.beekka.com/blogimg/asset/202307/bg2023070104.webp)

欢迎大家扫描上面二维码，或者访问 [AdsPower 官网](https://www.adspower.net/)和[文档中心](https://help.adspower.net/)，详细了解并下载试用。

## 科技动态

1、[泳池机房](https://arstechnica.com/information-technology/2023/03/free-data-center-heat-is-allegedly-saving-a-struggling-public-pool-24k-a-year/)

机房产生大量热量，需要散热。一家英国公司想到了建造“泳池机房”，把机房建在游泳馆，让其为温水泳池供暖。

![](https://cdn.beekka.com/blogimg/asset/202303/bg2023032104.webp)

该机房主要面向机器学习和人工智能客户，所有服务器浸在冷却液中散热，冷却液再与泳池的水进行热交换。

该公司声称，这样可以让温水泳池的加热费用减少62%。他们正在说服更多游泳馆，允许他们改造排水系统，加入服务器。

2、[可维修度最高的手机](https://arstechnica.com/gadgets/2023/07/fairphone-is-coming-to-america/)

根据著名硬件网站 iFixit 的评分，荷兰生产的 Fairphone 4 是全世界可维修度最高的手机，得到了满分10分。

![](https://cdn.beekka.com/blogimg/asset/202307/bg2023070506.webp)

这部手机完全采用模块化设计，除了主板以外的每个模块都可以替换。而且，操作非常简单，新手只用一把螺丝刀就能完成。

![](https://cdn.beekka.com/blogimg/asset/202307/bg2023070507.webp)

![](https://cdn.beekka.com/blogimg/asset/202307/bg2023070508.webp)

问题是它的配置不高，价格却很高，高通750芯片，8G 内存，要价700欧元（相当于5500元人民币）。

它以前只在欧洲出售，本月才在美国开售。很难想象，能够自己折腾硬件的高级用户，会愿意为这部中低阶配置的手机，支付这样的高价。

3、[关闭售票处](https://www.sohu.com/a/694826920_119038)

英国铁路公司宣布，将在三年内关闭英国所有的火车售票处。

![](https://cdn.beekka.com/blogimg/asset/202307/bg2023070509.webp)

用户想要购买火车票，以后只能在自助售票机或者网上完成。这样大大降低了公司的成本，而且还能24小时提供服务。

这大概是一种趋势，再过几年，所有的售票员（其实是收费员）可能都会消失。举例来说，故宫早在几年前就取消了现场售票窗口。

4、[虚拟现实可以减少麻醉](https://www.technologyreview.com/2022/09/21/1059869/patients-virtual-reality-surgery-anesthetic/)

美国科罗拉多大学的研究人员发现，让病人带上 VR 头盔开刀，可以减少麻醉药的用量。

![](https://cdn.beekka.com/blogimg/asset/202209/bg2022092903.webp)

病人一边开刀，一边 VR 观看360度全景视频，里面是宁静的草地、山脉、森林和星空，结果就比对照组减少了麻醉药用量。

医生认为，这说明 VR 头盔让病人更加放松，对疼痛的关注更少。由于少用麻醉药，可以更快醒来，对身体的影响也小一点，以后病人也许都会带着头盔开刀。

## 文章

1、[中国限制出口镓和锗的影响](https://m.laoyaoba.com/n/867801)（中文）

![](https://cdn.beekka.com/blogimg/asset/202307/bg2023070409.webp)

商务部、海关总署本周宣布，对镓和锗实施出口管制。本文介绍这两种金属的用途，以及这个举措的影响。

2、[中芯国际是怎么成立的？](https://www.eet-china.com/mp/a232813.html)（中文）

![](https://cdn.beekka.com/blogimg/asset/202307/bg2023070408.webp)

本文回忆了上海市经委副主任江上舟，在2001年促成中芯国际在上海成立的往事。

3、[我私藏的英语学习工具](https://sspai.com/post/80086)（中文）

![](https://cdn.beekka.com/blogimg/asset/202307/bg2023070105.webp)

作者介绍他使用的英语学习软件和服务。

4、[个人网站集成 GitHub issue 评论功能](https://richard-docs.netlify.app/blogs/b-027)（中文）

![](https://cdn.beekka.com/blogimg/asset/202307/bg2023070405.webp)

作者采用 VitePress 搭建博客，本文介绍他怎么引入 GitHub issue 作为网站的评论功能。（[@Richard-Zhang1019](https://github.com/ruanyf/weekly/issues/3237) 投稿）

5、[为什么 OAuth 仍然很难？](https://www.nango.dev/blog/why-is-oauth-still-hard)（英文）

![](https://cdn.beekka.com/blogimg/asset/202304/bg2023042601.webp)

OAuth 是最常用的身份认证协议，本文分析它的一些难点，为什么至今仍然让人觉得很困难。

另外，这里还有一篇[《OAuth2 概述》](https://metacpan.org/dist/LWP-Authen-OAuth2/view/lib/LWP/Authen/OAuth2/Overview.pod)（英文），在很短的篇幅里面，清楚地介绍了 OAuth。

6、[老旧 MacBook 如何安装 Linux](https://boilingsteam.com/liberating-the-macbook-air-2013-with-linux-complete-guide/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202304/bg2023040601.webp)

一篇详细的指南，教你怎么把过时的 MacBook 利用起来，装上 Linux。

7、[MySQL 和 MariaDB 的差异](https://www.skeema.io/blog/2023/05/10/mysql-vs-mariadb-schema/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202305/bg2023051201.webp)

MySQL 和 MariaDB 是两个常用的关系型数据库，后者是从前者分叉出来。两者基本是一样的，但也有很多差异。本文总结这些差异。

8、[AI “越大越好”已经走不通了](https://www.economist.com/science-and-technology/2023/06/21/the-bigger-is-better-approach-to-ai-is-running-out-of-road)（英文）

![](https://cdn.beekka.com/blogimg/asset/202306/bg2023062507.webp)

《经济学家》杂志的一篇新闻分析，认为由于成本和训练材料的限制，AI 模型的规模可能已经到头了，以后不会变得更大，并分析下一步的发展方向是什么。

## 工具

1、[jianmu（建木）](https://jianmu.dev/)

![](https://cdn.beekka.com/blogimg/asset/202307/bg2023070404.webp)

开源 CI/CD 工具，可视化编排 DevOps 流程。（[@lxitgto](https://github.com/ruanyf/weekly/issues/3233) 投稿）

2、[Milky Warp](https://github.com/hugoattal/milky-warp)

![](https://cdn.beekka.com/blogimg/asset/202307/bg2023070402.webp)

一个桌面程序，对任意桌面区域产生放大镜效果。

3、[ICP Query](https://github.com/yuedanlabs/icp-query-extension)

![](https://cdn.beekka.com/blogimg/asset/202307/bg2023070401.webp)

开源的 Chrome 浏览器插件，显示网站 ICP 备案、Whois、DNS、服务器位置及运营商信息。（[@yuedanlabs](https://github.com/ruanyf/weekly/issues/3223) 投稿）

4、[艺码](https://yima.me/)

![](https://cdn.beekka.com/blogimg/asset/202307/bg2023070403.webp)

根据文字描述，将二维码转成一幅可扫描的图像的网页工具。（[@Cobb9527](https://github.com/ruanyf/weekly/issues/3226) 投稿）

5、[Language Reactor](https://www.languagereactor.com/)

![](https://cdn.beekka.com/blogimg/asset/202305/bg2023050701.webp)

浏览器插件，可以在 Netflix 和 Youtube 视频上，同时显示两种语言的字幕，方便学习外语。

6、[Directus](https://github.com/directus/directus)

![](https://cdn.beekka.com/blogimg/asset/202305/bg2023050905.webp)

这个工具运行在各种数据库之上，自动为数据库生成 REST +  GraphQL API，使得它们可以网络访问操作，并自带一个 Web 仪表盘。

7、[CheerpJ](https://leaningtech.com/announcing-cheerpj-3-0-a-jvm-replacement-in-html5-and-webassembly-to-run-java-applications-and-applets-on-modern-browsers/)

![](https://cdn.beekka.com/blogimg/asset/202305/bg2023051003.webp)

一个实验性工具，将 JVM 解释器搬上网页，让 Java 代码可以直接在网页运行。

8、[SailboatUI](https://sailboatui.com/)

![](https://cdn.beekka.com/blogimg/asset/202212/bg2022123103.webp)

一个基于 Tailwind CSS 的 UI 组件库，目前有超过150个组件。

9、[komorebi](https://github.com/LGUG2Z/komorebi)

![](https://cdn.beekka.com/blogimg/asset/202210/bg2022101201.webp)

Windows 系统的窗口管理器，自动在桌面编排多个应用程序窗口。

10、[WezTerm](https://wezfurlong.org/wezterm/)

![](https://cdn.beekka.com/blogimg/asset/220204/bg2022042503.webp)

一个跨平台的终端模拟器，采用 GPU 加速，在显示上面有一定的性能优势。

另外，再推荐一个终端模拟器 [Hyper](https://hyper.is/)，它基于 Electron，使用 HTML/CSS/JS 构建，充分利用了网页技术。

## 资源

1、[WebAuthn.wtf](https://webauthn.wtf/)

![](https://cdn.beekka.com/blogimg/asset/202305/bg2023050803.webp)

新的、不需要密码的网站登录协议 WebAuthn 的综合介绍。

2、[mess with DNS](https://messwithdns.net/)

![](https://cdn.beekka.com/blogimg/asset/202305/bg2023050906.webp)

一个 DNS 游乐场，为每个访问者提供一个免费子域名，你可以对它设置各种 DNS 记录，进行练习。

3、[68k.news](http://68k.news/)

![](https://cdn.beekka.com/blogimg/asset/202304/bg2023040208.webp)

这个网站将谷歌新闻转成文本版，可以快速浏览。

4、[Pirate Weather](https://pirateweather.net/)

![](https://cdn.beekka.com/blogimg/asset/202301/bg2023011105.webp)

一个免费的天气 API，每月可调用2万次。

5、[APIVault](https://apivault.dev/)

![](https://cdn.beekka.com/blogimg/asset/202305/bg2023052502.webp)

这个网站收集了大量公共 API，相当于 API 的搜索引擎，用户可以提交新的 API。

## 图片

1、[超级计算机的冷却](https://www.bloomberg.com/news/features/2023-01-05/frontier-supercomputer-world-s-fastest-needs-74-miles-of-cable)

美国田纳西州橡树岭国家实验室，有一台世界最快的超级电脑，叫做 Frontier，运算速度达到百亿亿次（quintillion）。

![](https://cdn.beekka.com/blogimg/asset/202301/bg2023011208.webp)

它占地600多平方米，有9000多个运算节点，需要20多吨水来冷却。下图就是它的水冷系统。

![](https://cdn.beekka.com/blogimg/asset/202301/bg2023011209.webp)

为了推动水流，它配备了巨大的水泵。整个水冷系统重达400多吨。

![](https://cdn.beekka.com/blogimg/asset/202301/bg2023011210.webp)

每个计算节点都有独立的水冷，蓝色水管表示输入的冷水，红色水管表示输出的热水。

![](https://cdn.beekka.com/blogimg/asset/202301/bg2023011211.webp)

这台超级计算机本身一共74个机柜，每个机柜的电缆超过1英里。

![](https://cdn.beekka.com/blogimg/asset/202301/bg2023011212.webp)

高算力系统背后的耗能和散热，远超普通人想象。

2、[世界最大的心脏](https://www.vox.com/down-to-earth/2022/8/11/23291991/largest-animal-blue-whale-heartbeat)

蓝鲸是世界最大的动物。

![](https://cdn.beekka.com/blogimg/asset/202208/bg2022081202.webp)

它的心脏也是世界最大的心脏，像一座小房子。

![](https://cdn.beekka.com/blogimg/asset/202208/bg2022081203.webp)

为了让血液流到庞大身躯的各个部分，蓝鲸的心脏必须产生巨大的血压。动物体形越大，血压就越高，这也是动物体型不可能特别庞大的原因。

## 文摘

1、[软件开发速度很重要](https://verdagon.dev/blog/when-to-use-memory-safe-part-2)

如果想要降低软件的成本，一般有两种方法。

（1）加快软件开发速度，缓慢的开发会耗尽公司的资金。

（2）提高软件性能，更好的性能会减少资源消耗。

这两种方法，哪一种能够更有效地降低成本呢？

![](https://cdn.beekka.com/blogimg/asset/202307/bg2023070602.webp)

我们用谷歌的数据来说明。

2020年，谷歌使用了 15.5TW 的电力，其中大部分用于数据中心。如果按照美国加州昂贵的电费（0.199美元/千瓦时）来计算，电费总计30.85亿美元。

同年，谷歌雇佣了27,169名软件工程师。我们就用初级程序员在加州的平均年薪17.8751万美元来计算，人力成本总计48.56亿美元。

由此可见，软件开发的人力成本比电费高得多。

加快软件开发速度，可以节约人力成本，而提高软件性能可以节约电费。因此，针对开发速度进行优化，对降低成本的效果可能更明显。

## 言论

1、

320年，12位总统，10位皇帝，2个共和国，一份报纸。

-- 世界最古老报纸[《维也纳报》](https://apnews.com/article/vienna-wiener-zeitung-newspaper-ends-daily-21376b5b0154bde12451f12d962e2e51)对自己历史的总结。该报创刊于1703年8月8日，今年6月30日停刊。

2、

我最近看到许多与“人工智能”相关的商业项目。它们都只是把各种数据发送到 ChatGPT 的 API，假装正在做一些新颖的、令人印象深刻的事情，实际上只是为了尽快拿到风险投资。

-- [Hacker News 读者](https://news.ycombinator.com/item?id=36571603)

3、

很多人说，AI 会带来大量失业，这是可能的，因为 AI 让你用更少的人做同样的事情。但是反过来说，它也让你用同样的人做更多的事情，所以 AI 也可能为大家变得更忙，从而增加就业。

-- [《人工智能和工作自动化》](https://www.ben-evans.com/benedictevans/2023/7/2/working-with-ai)

4、

我发现，工作中与计算机打交道时，逻辑很有用，但与人打交道时，逻辑很少有用。

事实上，对于绝大多数的人际交往，逻辑、严谨、辩论都是没用的。

-- [《逻辑、严谨和辩论》](https://demodexio.substack.com/p/is-it-possible-to-use-logic-rigor)

## 历史上的本周

[你的地图是错的](https://www.ruanyifeng.com/blog/2022/07/weekly-issue-214.html)（2022 #214）

[培训班 vs 大学，求职成功率比较](https://www.ruanyifeng.com/blog/2021/06/weekly-issue-164.html)（2021 #164）

[U 盘化生存和 Uber-job](https://www.ruanyifeng.com/blog/2020/07/weekly-issue-114.html)（2020 #114）

[新人如何进入互联网行业？](https://www.ruanyifeng.com/blog/2019/07/weekly-issue-64.html)（2019 #64）

## 鸣谢

周刊得到国内新一代知识管理与协作平台 [FlowUs](https://flowus.cn?promotionChannel=GW_RYF_01) 的帮助，深表感谢。

[FlowUS](https://flowus.cn?promotionChannel=GW_RYF_01)  = 文档 + 表格 + 网盘。你可以用它写文档、做主页、管理数据、存储文件等等。

每一期周刊同时发布在[ FlowUs 专栏](https://ruanyf-weekly.flowus.cn/?code=FLOWUS&promotionChannel=WX_RYF_00)，欢迎大家也去开通自己的专栏和主页。

![](https://cdn.beekka.com/blogimg/asset/202303/bg2023030205.webp)

（完）

