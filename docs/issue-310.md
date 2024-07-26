# 科技爱好者周刊（第 310 期）：内容农场的 AI 赚钱术

这里记录每周值得分享的科技内容，周五发布。

本杂志[开源](https://github.com/ruanyf/weekly)，欢迎[投稿](https://github.com/ruanyf/weekly/issues)。另有[《谁在招人》](https://github.com/ruanyf/weekly/issues/4743)服务，发布程序员招聘信息。合作请[邮件联系](mailto:yifeng.ruan@gmail.com)（yifeng.ruan@gmail.com）。

## 封面图

![](https://cdn.beekka.com/blogimg/asset/202407/bg2024072110.webp)

热闹的重庆南滨路夜市，就在长江边上，江对面就是渝中半岛的高楼。（[via](https://www.facebook.com/photo.php?fbid=785809217049222&id=100068604533594&set=a.526690652961081)）

## 内容农场的 AI 赚钱术

内容农场指的是，通过炮制大量文章，以骗取点击、赚取流量的网站。

![](https://cdn.beekka.com/blogimg/asset/202407/bg2024072004.webp)

它会炮制数以万计的垃圾文章，每个页面充满了广告，冠以诱人的、关键词优化的标题，吸引读者点进去看。

![](https://cdn.beekka.com/blogimg/asset/202407/bg2024072005.webp)

以前，内容农场要聘请写手，到处搜罗资料，来生成内容。现在简单了，交给 AI 来写，两秒就生成一篇。

而且，**AI 的价格已经足够低，低到单次浏览的广告收入就可以覆盖成本**。下面，我就来演示，打造一个 AI 内容农场是多么便宜。

首先，可以根据热搜，找到读者感兴趣的主题。

我们随便找一个经常搜索的 IT 问题，比如关闭 Windows 的更新功能。

![](https://cdn.beekka.com/blogimg/asset/202407/bg2024072006.webp)

然后，让 AI 撰写文章。

这时你需要一段精确的提示词（prompt），我从[老外的文章](https://batchmon.com/blog/ai-cheaper-than-ads/)拷贝了一段。

> 你是一位优秀的博客作者。你撰写的博客在搜索引擎中排名靠前，因为你了解 SEO 以及如何使用高度相关和热门的关键字。你的博客文章信息丰富，可帮助用户实现他们所寻找的内容。
>
> 你将收到搜索博客文章的用户的查询。你将创建与他们的查询相匹配、有帮助且能回答或与他们所搜索的内容相关的博客文章。
> 
> 仅使用博客文章进行回复。
> 
> 读者的问题是：如何关闭 Windows 的更新功能？

我把这段提示词，输入一个国产 AI。

![](https://cdn.beekka.com/blogimg/asset/202407/bg2024072401.webp)

AI 马上给出了下面的文章。

![](https://cdn.beekka.com/blogimg/asset/202407/bg2024072007.webp)

接着，我们计算一下，上面这篇文章要花多少钱。

AI 计费是根据 token（词元），我用的那个国产 AI，收费标准如下：

> - 输入：0.0008元/千 token
> - 输出：0.0020元/千 token

我们用 OpenAI 的 [token 计算器](https://platform.openai.com/tokenizer)，可以得到上面的输入是168个 token，输出是622个 token，那么总费用如下。

> （168 * 0.0008 + 622 * 0.0020）/ 1000  
>  = 0.00138

也就是说，**这篇文章的成本是人民币0.00138元**，一分钱可以生成7篇，生成1000篇也只要1.38元。

那么，我能用它赚取多少广告费呢？

国内广告平台的数据比较少，国外一般使用谷歌广告，[它的收入](https://snigel.com/blog/adsense-revenue-calculator)是0.2美元～2.5美元/千次浏览。

我们就取最低的0.2美元，相当于人民币1.45元，那么单次浏览就是0.00145元，刚好高于文章的生成成本。

因此，**每一次浏览都是赚钱的**，只要有人点进来就弥补内容成本了，后面再点进来都是纯利润。

内容农场从来没有这么容易过，我先买一个热搜数据库，然后花费100多元，就能生成10万篇文章，最后加入广告，做好 SEO，网站上线，等着用户点进来就行了。

不难想象，资讯类网站未来大概都是这个模式。真人生产内容，成本太高，无法与 AI 内容抗衡，注定只能是小众网站。

## 科技动态

1、[Windows 蓝屏](https://www.macrumors.com/2024/07/22/microsoft-blames-european-commission-for-outage/)

上周，Windows 系统出现全球故障，几百万台电脑发生蓝屏，无法启动。

![](https://cdn.beekka.com/blogimg/asset/202407/bg2024072301.webp)

原因是安全软件公司 CrowdStrike 的更新包，引发了内核故障。

这就很奇怪了，为什么一个第三方应用软件，可以修改内核？

![](https://cdn.beekka.com/blogimg/asset/202407/bg2024072302.webp)

微软的解释是，多年前，欧盟认为微软自家的安全软件 Windows Defender 有垄断嫌疑，微软必须向其他安全软件开放同样的内核访问权限，所以 CrowdStrike 才能修改内核。

![](https://cdn.beekka.com/blogimg/asset/202407/bg2024072506.webp)

相比之下，苹果公司始终不开放内核权限，所以这次故障不影响 Mac 系统。但是，欧盟已经把矛头对准了苹果。

幸亏汽车、飞机不使用 Windows 系统，否则行驶中突然蓝屏，真得害死人。

2、[幸福感](https://www.scientificamerican.com/article/young-adulthood-is-no-longer-one-of-lifes-happiest-times/)

心理学家以前认为，幸福感是一个 U 形曲线，两头高中间低，中年人最不快乐。

但是，最新研究发现，人们的心理已经发生了变化。现在的幸福感是一根向上的曲线。

![](https://cdn.beekka.com/blogimg/asset/202407/bg2024072108.webp)

上图中，蓝色曲线是以前调查的幸福感，30岁以前是上升的，后面开始下降，50岁达到最低点。进入老年后，又不断上升。

黄色曲线是最新调查。年轻时的幸福感比以前大幅下降，15岁是最低点，然后不断上升，直到老年。

心理学家的解释是，对于现在的年轻人，青春期变得十分困难，属于人生的低点。他刚开始自己的生活，感到焦虑和沮丧，对未来没有希望，还容易犯下一些严重错误。

3、[沙漏啤酒杯](https://asia.nikkei.com/Business/Food-Beverage/Happy-hourglass-Japan-brewer-helps-beer-go-down-slower)

夏天，人们喝啤酒，容易暴饮。有没有办法，减缓人们喝啤酒的速度呢？

一家日本公司推出了“沙漏啤酒杯”，据说可以把喝啤酒的速度降低三倍。

![](https://cdn.beekka.com/blogimg/asset/202407/bg2024072303.webp)

这个杯子可以容纳350毫升啤酒，但是中间瓶颈处只有6毫米，相当于用一根6毫米的吸管喝啤酒。而且喝完后，向杯中添加啤酒也很麻烦。

![](https://cdn.beekka.com/blogimg/asset/202407/bg2024072304.webp)

该公司把这个杯子定位为玩具，“希望人们饮酒的同时享受乐趣。”

## 文章

1、[阿里云公共 DNS 免费版限速](https://www.landiannews.com/archives/105048.html)（中文） 

![](https://cdn.beekka.com/blogimg/asset/202407/bg2024072008.webp)

阿里云的免费 DNS 自9月30日开始限速，单个 IP 的请求数不能超过 20QPS，超过需要使用付费版。它开了公共 DNS 限速的先河。

2、[`.top`域名的钓鱼问题](https://krebsonsecurity.com/2024/07/phish-friendly-domain-registry-top-put-on-notice/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202407/bg2024072501.webp)

`.top`是钓鱼网站最泛滥的域名，它的注册管理商是一家中国公司。ICANN 已要求该公司采取行动，否则将吊销它的管理权。

3、[JS 测试框架 Jest 入门](https://blog.stackademic.com/testing-in-javascript-with-jest-085b26e1750e)（英文）

![](https://cdn.beekka.com/blogimg/asset/202407/bg2024072106.webp)

初学者教程，简单介绍如何使用 Jest 写测试用例。（[@Faizan711](https://github.com/ruanyf/weekly/issues/4852) 投稿）

4、[Cron 定时任务入门](https://linuxiac.com/how-to-use-cron-and-crontab-on-linux/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202403/bg2024030602.webp)

一篇 Linux 初学者教程，介绍如何使用 cron 设置定时任务，非常详细。

5、[前端构建概述](https://sunsetglow.net/posts/frontend-build-systems.html)（英文）

![](https://cdn.beekka.com/blogimg/asset/202406/bg2024062301.webp)

本文综合介绍前端构建的概念、步骤和工具。

6、[GitHub 的 fork 仓库的安全问题](https://trufflesecurity.com/blog/anyone-can-access-deleted-and-private-repo-data-github)（英文）

![](https://cdn.beekka.com/blogimg/asset/202407/bg2024072502.webp)

GitHub 允许 fork 他人的仓库。只要一个仓库被 fork 过，那么就再也删不掉了，即使转为私有仓库，他人也可能看到你新提交的代码。

7、**其他文章**

- [7月22日](http://www.stdaily.com/index/kejixinwen/202407/1b9a0db4eee24f3184101054da3783a7.shtml)是有记录以来全球最热的一天。
- [腾讯游戏](https://finance.sina.com.cn/roll/2024-07-25/doc-incfikph3095737.shtml)对于未成年玩家，强制每秒自动人脸识别1次。
- [Node.js](https://github.com/nodejs/node/pull/53725) 官方添加剥离 TypeScript 类型代码功能。

## 工具

1、[Foliate](https://github.com/johnfactotum/foliate)

![](https://cdn.beekka.com/blogimg/asset/202407/bg2024072112.webp)

Linux 平台的 epub 电子书阅读软件。

2、[Sendune](https://github.com/SendWithSES/Drag-and-Drop-Email-Designer)

![](https://cdn.beekka.com/blogimg/asset/202407/bg2024072002.webp)

一个可视化的 HTML 电子邮件设计工具，代码开源。类似的还有一个 HTML 邮件制作库 [mjml](https://documentation.mjml.io)。

3、[hash-wasm](https://github.com/Daninet/hash-wasm)

一个轻量级的哈希函数库，提供了二十几种常见的哈希算法，比如 MD5 和 SHA-1，以及更安全的 BLAKE3。

4、[Page Replica](https://github.com/html5-ninja/page-replica)

这个开源工具用来架设一个缓存网站，可以抓取其他网站和网页，建立一个缓存版本，通过它来中介访问。

5、[WebUI](https://github.com/webui-dev/webui)

![](https://cdn.beekka.com/blogimg/asset/202401/bg2024010704.webp)

一个跨平台的桌面应用的打包程序，允许你直接将浏览器作为桌面应用的前端，比 Electron 要轻量化很多，同时又避免使用 WebView。

6、[深蹲计数器](https://github.com/zhaoolee/Sport)

![](https://cdn.beekka.com/blogimg/asset/202407/bg2024072402.webp)

一个开源的 Web 应用，通过移动设备的加速度计，实现深蹲计数。（[@zhaoolee](https://github.com/ruanyf/weekly/issues/4869) 投稿）

7、[Anori](https://anori.app/)

![](https://cdn.beekka.com/blogimg/asset/202404/bg2024042002.webp)

一个浏览器插件，可以在主页上定制各种小组件。

8、[Blurmatic](https://www.blurmatic.com/)

![](https://cdn.beekka.com/blogimg/asset/202404/bg2024042004.webp)

这个在线工具可以为图片加上模糊景深，还可以 3D 旋转图片。

9、[FastDownload.io](https://www.fastdownload.io/)

![](https://cdn.beekka.com/blogimg/asset/202404/bg2024042202.webp)

一个下载各种流媒体视频的在线工具，支持 Youtube 和 TikTok。

10、[Stack](https://github.com/stackframe-projects/stack)

![](https://cdn.beekka.com/blogimg/asset/202404/bg2024042204.webp)

开源的用户管理解决方案，自带前端组件和管理后台。

## AI 相关

1、[Album AI](https://github.com/gcui-art/album-ai)

![](https://cdn.beekka.com/blogimg/asset/202407/bg2024072107.webp)

一个开源工具，将你的图片输入 AI，通过聊天来检索，相当于 AI 整理相册。（[@blueeon](https://github.com/ruanyf/weekly/issues/4856) 投稿）

2、[Essay.Art](https://www.essay.art/)

![](https://cdn.beekka.com/blogimg/asset/202407/bg2024072403.webp)

GPT4 批改雅思和托福作文。（[@zengdamo](https://github.com/ruanyf/weekly/issues/3483) 投稿）

3、[AskAITools](https://github.com/askaitools/askaitools-community-edition)

![](https://cdn.beekka.com/blogimg/asset/202407/bg2024072102.webp)

一个开源的 AI 应用搜索引擎，收入超过1万个应用。（[@xiaoguopku](https://github.com/ruanyf/weekly/issues/4849) 投稿）

4、[Brev AI](https://brev.ai/zh-CN)

![](https://cdn.beekka.com/blogimg/asset/202407/bg2024072210.webp)

免费在线的 AI 音乐生成器，不需要注册。（[@zdamo4194](https://github.com/ruanyf/weekly/issues/4862) 投稿）

## 资源

1、[AIEmoji](https://ai-emoji.bettergogo.com/)

![](https://cdn.beekka.com/blogimg/asset/202407/bg2024072101.webp)

Emoji 搜索引擎，输入想表达的内容，返回最匹配的 Emoji 符号。（[@bettergoo](https://github.com/ruanyf/weekly/issues/4848) 投稿）

2、[算法可视化](https://gallery.selfboot.cn/algorithms/)

![](https://cdn.beekka.com/blogimg/asset/202407/bg2024072105.webp)

作者在 AI 协助下，完成的经典算法的交互式可视化网站，代码开源。（[@selfboot](https://github.com/ruanyf/weekly/issues/4851) 投稿）

3、[美国大学申请成功率](https://flowingdata.com/2024/07/16/more-or-less-college-admissions-time/)

![](https://cdn.beekka.com/blogimg/asset/202407/bg2024072211.webp)

这个网站可以查询美国各大学历年的申请成功率。上图是纽约州立大学石溪分校，最近几年的申请成功率在50%左右。

4、[DevDocs](https://devdocs.io/)

![](https://cdn.beekka.com/blogimg/asset/202401/bg2024011506.webp)

这个网站可以查询 Web 标准和主流软件工具的 API 文档。

## 图片

今天介绍一些墨西哥的情况。

1、[墨西哥的面积](https://unchartedterritories.tomaspueyo.com/p/25-fascinating-facts-about-mexico)

墨西哥是一个面积很大的国家，大到出乎你的想象。

欧洲的30个国家，可以一起放进墨西哥，包括德国、英国、爱尔兰、奥地利、捷克、匈牙利等等。

![](https://cdn.beekka.com/blogimg/asset/202407/bg2024071901.webp)

历史上，墨西哥的面积甚至更大，比现在大一倍多。

![](https://cdn.beekka.com/blogimg/asset/202407/bg2024071902.webp)

上图中，绿色部分是过去的墨西哥，两根红线是现在的墨西哥国界。

墨西哥的领土主要被美国抢走。今天的得克萨斯州、加利福尼亚州、内华达州和犹他州全境，以及亚利桑那州、科罗拉多州、新墨西哥州和怀俄明州的部分地区，历史上都属于墨西哥。

1846年到1848年爆发的美墨战争，以墨西哥割让这些领土告终。

2、[美墨边境](https://unchartedterritories.tomaspueyo.com/p/whats-mexicos-future)

下图是美国和墨西哥的边境。

![](https://cdn.beekka.com/blogimg/asset/202407/bg2024072204.webp)

上图中，左侧是美国的圣地亚哥市，基本上是农村；右侧是墨西哥的蒂华纳市，完全是都市。

两边的反差这么大，主要是墨西哥北部的经济完全依靠美国，越靠近美国的地方，经济越繁荣。

## 文摘

1、[我的编程信念](https://evanhahn.com/programming-beliefs-as-of-july-2024/)

![](https://cdn.beekka.com/blogimg/asset/202407/bg2024072505.webp)

下面是我目前对计算机编程的一些看法。这些看法都是基于我自己的经验。

（1）当面临一项艰巨的任务时，我会问自己：“**如果我根本不做这件事会怎么样？**”

大多数情况下，这是一个愚蠢的问题，我必须做这件事。但大约 5% 的情况，我意识到我可以完全跳过一些工作。

（2）**“简单”和“容易”之间的区别很重要**。简单是复杂的对立面。复杂性来自多个东西捆绑在一起。

容易是另外一回事，复杂的东西也可以很容易。理解“简单”和“容易”的区别，可以让你开发更简单的软件。

（3）**消除无效状态（NULL）**。如果我可以设计数据/类型防止无效状态，那么就可以消除大量的错误来源。类型系统或数据库架构的一点麻烦是值得的。

（4）**代码的可测试性**，基本上与代码模块化是一回事。

（5）**软件最重要的问题都是非技术性的**。现实世界的问题往往是最重要的，我所构建的东西帮助对象是谁？我的团队在健康运作吗？

（6）**制作无用的东西**可能是学习新事物的好方法。我曾经花了很多时间，为一个业余项目编写自定义 PNG 编码器。我从未想过它会有用，但几个月后，我的另一个项目需要用到某个功能时，我确切地知道如何去做。

2、[为什么东亚公司重视饮酒？](https://www.ggd.world/p/why-do-east-asian-firms-value-drinking)

东亚商人经常出去喝酒，在酒桌上讨论生意。世界其他地区并不如此，这是为什么？

这跟东亚文化有关。东亚地区强调集体主义和等级制度，不提倡面对面直接说出想法，更喜欢通过隐含和间接的方式表达。

人们避免直接的冲突，压制自己的情绪，使得我们很难了解别人的真实想法。

饮酒是一种弥补方法。酒精会降低人们的抑制力，从而促进了人际关系和信息共享。

饮酒提供了宝贵的机会——无论在公司内部还是外部，让参加者放松下来，说出自己的真实感受并建立融洽的关系。

## 言论

1、

王传福多年前关于造车的一句话给了我很大的勇气。

他说很多企业因为不了解，会把技术想象到令人畏惧的高度，这种畏惧正是对手给后来者营造了一种产业恐吓。他们不断地告诉你做不成，投入很大，研发很难，直到你放弃。其实你解决不了的不是因为你没有能力，而是你缺乏勇气。

-- [雷军年度演讲](https://finance.sina.com.cn/tech/roll/2024-07-23/doc-incfcpey8084281.shtml)

2、

以太坊创始人之一的 Vitalik Buterin 在2017年曾经提出，区块链存在三难困境：无法同时实现去中心化、可扩展性和安全性。

--[《区块链的三难困境》](https://ieeexplore.ieee.org/document/10549891)

3、

世界最长的巴士路线是从英国伦敦到印度加尔各答，一共16000公里，单程要开50天。

这条线路已经在1976年停运，当时的票价相当于今天的2200英镑（约20000人民币）。

-- [维基百科](https://en.wikipedia.org/wiki/London%E2%80%93Calcutta_bus_service)

4、

Slack 是一款工作场所生产力聊天工具，但你可能不知道，它是一个缩写词，意为“所有通信和知识的可搜索日志”（Searchable Log of All Communication and Knowledge）。

--[《Slack 是一个缩写词》](https://www.theverge.com/2016/9/28/13098164/slack-is-an-acronym)

5、

可以用下面的一套规则来描述我们对技术的反应：

（1）当你出生时，世界上的任何事物都是正常和普通的，是世界自然的运作方式。

（2）当你十五岁到三十五岁之间发明的任何东西都是新的、令人兴奋的和革命性的，你可能会在其中找到一份职业。

（3）在你三十五岁以后，世界上发明的任何东西都是违背事物自然规律的。

-- [道格拉斯·亚当斯](https://fs.blog/douglas-adams-reactions-technology-over-time/)，英国作家

## 往年回顾

[开源软件如何赚钱？](https://www.ruanyifeng.com/blog/2023/07/weekly-issue-263.html)（2023 #263）

[知识孤岛，知识软件](https://www.ruanyifeng.com/blog/2022/07/weekly-issue-213.html)（2022 #213）

[你的城市有多少张病床？](https://www.ruanyifeng.com/blog/2021/06/weekly-issue-163.html)（2021 #163）

[暴力犯罪为什么越来越少？](https://www.ruanyifeng.com/blog/2020/06/weekly-issue-113.html)（2020 #113）

（完）

