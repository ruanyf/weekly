# 科技爱好者周刊（第 382 期）：独立软件的黄昏

这里记录每周值得分享的科技内容，周五发布。

本杂志[开源](https://github.com/ruanyf/weekly)，欢迎[投稿](https://github.com/ruanyf/weekly/issues)。另有[《谁在招人》](https://github.com/ruanyf/weekly/issues/8591)服务，发布程序员招聘信息。合作请[邮件联系](mailto:yifeng.ruan@gmail.com)（yifeng.ruan@gmail.com）。

## 封面图

![](https://cdn.beekka.com/blogimg/asset/202601/bg2026011611.webp)

巫山县城建在山坡上，为了方便居民和促进观光，在中轴线上建设了神女大扶梯，总长905米，高240余米，相当于80层楼，全程需要20分钟。（[via](http://photo.china.com.cn/2026-01/15/content_118280369.shtml)）

## 独立软件的黄昏

软件可以分成两种：一种是公司开发的，另一种是个人开发的。后者就称为“独立软件”（indie software）。

它的历史非常悠久，从古至今，很多程序员依靠出售独立软件谋生。

![](https://cdn.beekka.com/blogimg/asset/202601/bg2026011021.webp)

有一种东西“共享软件”（Shareware），年轻的朋友未必知道，二三十年前曾经非常流行。用户免费使用软件的试用版，如果满意，就向开发者购买一个注册码。

这就是一种独立软件，当年很多著名软件都是这个模式，比如国外的 WinZip 和 WinRAR，国内的网络蚂蚁（NetAnts）、网际快车（FlashGet）、豪杰解霸。

![](https://cdn.beekka.com/blogimg/asset/202601/bg2026011022.webp)

时至今日，大家看看目前流行的软件，还有多少属于独立软件？你每天使用的软件，又有多少是个人开发的？

很少很少了。

一位二十年的独立软件开发者[哀叹](https://successfulsoftware.net/2025/12/22/is-the-golden-age-of-indie-software-over/)，**现在的市场上，公司开发的比重越来越大，个人开发的比重越来越小**，独立软件正在没落。

> “我销售自己的软件20年了，2005年以后，互联网开始普及，独立软件迎来了黄金年代。而最近两三年，环境一直在快速变化，销售明显变难了，我感觉自己越来越难维持生计了。”

独立软件的大发展，是从2005年开始的。

> 1. 互联网的普及，网民数量急剧增长。
> 2. 智能手机创造了手机软件，一个全新的软件大市场。
> 3. 在线支付的普及和简化。
> 4. 互联网使软件分发变得容易且免费。
> 5. 免费的高质量开发工具（编译器、IDE、版本控制系统、Web 服务器）不断涌现。

这些因素让程序员切切实实获利了，要是你再做一些 SEO、买一些付费广告，完全可能赚到大钱。很多人就是这样发展起来的，从独立软件变成了大公司。

但是，最近两三年情况变了，上面这些因素都到头了。

独立软件正在慢慢退潮，你能够想起名字的独立软件越来越少，更不要说掏钱购买了，即使有也是多年前的作品。根据我的观察，依靠出售自己软件维生的程序员似乎也在减少。

主要原因有下面几个。

**（1）AI 改变了互联网流量，独立软件失去了推广渠道**。网站的访问量显著减少，人们更多跟大模型交互，而不是浏览网页。通过搜索引擎和在线广告获取流量的策略，越来越没有效果。

视频是为数不多仍然有效的推广渠道之一，但制作视频非常耗时，而且竞争异常激烈。另外，AI 生成的劣质视频迟早会大量出现，推广效果也会变差。

**（2）AI 使得软件开发变得容易**。它加快了开发速度，降低了进入门槛，让更多人加入竞争。以前，用户可能购买某个功能，现在直接让 AI 生成即可。

**（3）新软件汗牛充栋，越来越难脱颖而出**。iPhone 应用商店有大约200万个应用，用户很难发现你。另一方面，应用商店更喜欢推广那些能帮它赚更多钱的大公司软件，而不是独立软件。

**（4）人们越来越习惯使用基于网络的软件**，独立软件属于需要下载安装的原生应用，它的市场在萎缩。

基于网络的软件与其说是产品，不如说是一种服务，全天候24小时可用的服务。越来越多的个人开发者顺应这种趋势，改为以提供 SaaS 服务为主。

**（5）平台的风险**。现在的很多独立软件，都依靠云服务商的平台或底层服务，而平台随时会改变规则（比如关闭 API），或者推出竞品，一大批应用随之死掉，这种事情屡见不鲜。

**（6）用户期望软件是免费的，或者非常便宜**。售价略微高一点，就会无人问津。因此，独立软件要想获得可观的回报，就需要巨大的销售规模，这根本做不到。别的不说，个人开发者完全无力提供满意的客服。

**（7）以上这些因素将长期存在，只会加深，不会逆转**。独立软件的时代可能真的要结束了，个人开发者以后大概很难靠销售自己的软件为生，而要改为销售自己维护的 SaaS 服务，尽管这也很难。

## 科技动态

1、[VS Code 的定位](https://code.visualstudio.com/)

微软公司的 VS Code 是非常流行的代码编辑器，市场份额很高。

现在的官网上，它的产品定位是“开源 AI 代码编辑器”。

![](https://cdn.beekka.com/blogimg/asset/202601/bg2026010310.webp)

但是，2025年上半年，它的产品定位还是“你的代码编辑器，由 AI 重定义”。

![](https://cdn.beekka.com/blogimg/asset/202601/bg2026010311.webp)

更早的2024年，产品定位是“重新定义的代码编辑”。

![](https://cdn.beekka.com/blogimg/asset/202601/bg2026010312.webp)

令人感慨啊，这么成功的软件，AI 本来只是附属功能，现在也要蹭热点，把自己包装成 AI 主导的产品。

2、[智能脖巾](https://www.cam.ac.uk/research/news/revoice-device-gives-stroke-patients-their-voice-back)

英国科研人员发明了一种智能脖巾。它围在脖子上，可以感受到穿戴者的心跳和喉部肌肉运动。

![](https://cdn.beekka.com/blogimg/asset/202601/bg2026012102.webp)

它的用户主要是中风后丧失说话能力的人。这些人可以张嘴，做出说话的口型，但是无法正常发音。

他们佩戴这个脖巾后，颈部的运动数据就通过它传给电脑，经过模型训练，可以用电脑语音还原出用户想说的话。

3、[雪宝机器人](https://disneyparksblog.com/disney-experiences/robotic-olaf-marks-new-era-of-disney-innovation/)

人形机器人何必一定做成人形。

迪斯尼最近发布了一个机器人，样子就是电影《冰雪奇缘》的雪宝。

![](https://cdn.beekka.com/blogimg/asset/202601/bg2026010405.webp)

它用来在迪斯尼乐园，跟游客互动。

![](https://cdn.beekka.com/blogimg/asset/202601/bg2026010406.webp)

![](https://cdn.beekka.com/blogimg/asset/202601/bg2026010407.webp)

它启示我们，人形机器人做成卡通形状也很好。

![](https://cdn.beekka.com/blogimg/asset/202601/bg2026010408.webp)

另外，LG 公司在美国 CES 展会上，展示了他们最新的[家务机器人](https://hk.news.yahoo.com/%E5%AE%B6%E5%BA%AD%E5%92%8C%E8%AB%A7%E7%A5%9E%E5%99%A8%EF%BC%81lg-cloid-%E9%9B%99%E8%87%82%E6%A9%9F%E6%A2%B0%E4%BA%BA-ces-2026-%E7%99%BB%E5%A0%B4%EF%BC%8C%E7%94%9F%E6%88%90%E5%BC%8F-ai-%E7%AE%A1%E5%AE%B6%E5%8C%85%E8%BE%A6%E5%85%A8%E5%B1%8B%E5%AE%B6%E5%8B%99%EF%BC%8C%E5%AF%A6%E7%8F%BE%E3%80%8C%E9%9B%B6%E5%8B%9E%E5%8B%99%E3%80%8D%E5%B9%B8%E7%A6%8F%E7%94%9F%E6%B4%BB%EF%BD%9Cces-2026-165104147.html)。

![](https://cdn.beekka.com/blogimg/asset/202601/bg2026011009.webp)

![](https://cdn.beekka.com/blogimg/asset/202601/bg2026011010.webp)

这个机器人的功能就是做家务，比如叠衣服和洗碗。我觉得，国内厂商可以借鉴，展示机器人功能时，不要展示跳舞打拳，而要展示如何做家务。

## 文章

1、[别用 MySQL，改用 MariaDB](https://optimizedbyotto.com/post/reasons-to-stop-using-mysql/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202601/bg2026011503.webp)

曾经的明星数据库 MySQL，最近几个月的代码提交数为0（上图）。作者认为，种种迹象表明甲骨文已经放弃了这个项目。

2、[10秒获得 AI 代码评审结果](https://oldmanrahul.com/2025/12/19/ai-code-review-trick/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202601/bg2026010404.webp)

本文介绍一个技巧，让 AI 快速给出提交代码的评审结果，方法是不要提交整个代码库，只提交 diff 的部分。

3、[使用 Pandoc 生成静态网站](https://blog.tangled.org/docs)（英文）

![](https://cdn.beekka.com/blogimg/asset/202601/bg2026011209.webp)

文档格式转换工具 Pandoc 可以用来生成静态网站，作者介绍自己是怎么做的。

4、[锚点元素`<a>`的一些鲜为人知的地方](https://blog.jim-nielsen.com/2025/href-value-possibilities/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202508/bg2025081114.webp)

锚点元素`<a>`用来生成链接，本文介绍如果链接到一些特殊字符的情况。

5、[学习自定义元素](https://railsdesigner.com/custom-elements/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202512/bg2025120405.webp)

一篇 HTML 自定义元素的教程文章，写得简单清晰。

6、[Go、Rust 和 Zig 的一些想法](https://sinclairtarget.com/blog/2025/08/thoughts-on-go-vs.-rust-vs.-zig/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202512/bg2025120503.webp)

作者是一个高级程序员，谈谈他对 Go、Rust、Zig 三种语言的感受。有趣的地方是，这三种语言都没有类，也不支持面向对象编程。

7、[我的个人基础设施](https://linderud.dev/blog/personal-infrastructure-setup-2026/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202601/bg2026012003.webp)

作者介绍他自己的家庭实验室。比较有趣的是，他的个人网站是本地构建后，自动用 Syncthing 同步到服务器，这对小型静态网站确实简单。

## 工具

1、[GoRead](https://github.com/zhashut/goread)

![](https://cdn.beekka.com/blogimg/asset/202601/bg2026011704.webp)

开源的电子书阅读器应用，支持桌面与移动端（Android/iOS）。（[@zhashut](https://github.com/ruanyf/weekly/issues/8732) 投稿）

2、[EasyPostman](https://github.com/lakernote/EasyPostman)

![](https://cdn.beekka.com/blogimg/asset/202601/bg2026011705.webp)

用于 API 调试的跨平台桌面应用，对标 Postman + JMeter。（[@lakernote](https://github.com/ruanyf/weekly/issues/8733) 投稿）

3、[Port Sentinel](https://github.com/Sanjeever/port_sentinel)（端口哨兵）

![](https://cdn.beekka.com/blogimg/asset/202601/bg2026011706.webp)

Windows 桌面应用，查看端口占用情况。（[@Sanjeever](https://github.com/ruanyf/weekly/issues/8721) 投稿）

4、[Building Sunlight Simulator](https://github.com/SeanWong17/building-sunlight-simulator)

![](https://cdn.beekka.com/blogimg/asset/202601/bg2026011901.webp)

基于 Web 的楼盘采光 3D 日照模拟工具，帮助购房者评估小区采光。（[@SeanWong17](https://github.com/ruanyf/weekly/issues/8744) 投稿）

5、[Office App](https://github.com/baotlake/office-website)

![](https://cdn.beekka.com/blogimg/asset/202601/bg2026012001.webp)

一个纯本地的 Office 网页应用，可以离线在网页创建/编辑 Word、Excel、PowerPoint 文件。（[@baotlake](https://github.com/ruanyf/weekly/issues/8757) 投稿）

6、[ScreenshotSnap](https://screenshotsnap.com/)

![](https://cdn.beekka.com/blogimg/asset/202601/bg2026011902.webp)

免费的网站截屏在线工具，提供 API，可以直接将截图代码插入网页。（[@phpiscute](https://github.com/ruanyf/weekly/issues/8746) 投稿）

7、[tsshd](https://github.com/trzsz/tsshd)

SSH 服务器登录协议的全新实现，特点是连接不掉线，可以重连前一个对话。（[@lonnywong](https://github.com/ruanyf/weekly/issues/8751) 投稿）

8、[AirScan-QR](https://github.com/topcss/AirScan-QR)

![](https://cdn.beekka.com/blogimg/asset/202601/bg2026012002.webp)

一个开源网页应用，通过动态二维码发送/接收文件。（[@topcss](https://github.com/ruanyf/weekly/issues/8758) 投稿）

9、[LuCI Bandix](https://github.com/ruanyf/weekly/issues/8761)

![](https://cdn.beekka.com/blogimg/asset/202601/bg2026012005.webp)

开源路由器操作系统 OpenWRT 的一个插件，可以监控局域网各设备的实时流量和目的地。（[@timsaya](https://github.com/ruanyf/weekly/issues/8761) 投稿）

10、[pure-genealogy](https://github.com/yunfengsa/pure-genealogy)

![](https://cdn.beekka.com/blogimg/asset/202601/bg2026012104.webp)

开源的网页族谱工具，用来生成家族族谱，基于 Next.js + Supabase。（[@yunfengsa](https://github.com/ruanyf/weekly/issues/8768) 投稿）

11、[mdto.page](https://mdto.page/)

![](https://cdn.beekka.com/blogimg/asset/202601/bg2026011708.webp)

这个网站免费将 Markdown 文件转成 HTML 格式，发布成公开访问的网页。

## AI 相关

1、[ChatGPT 翻译](https://chatgpt.com/zh-Hans-CN/translate/)

![](https://cdn.beekka.com/blogimg/asset/202601/bg2026011703.webp)

OpenAI 悄悄发布的翻译功能，只有在官网可用。

2、[Mango Desk](https://github.com/moyangzhan/mango-desk)

![](https://cdn.beekka.com/blogimg/asset/202601/bg2026012006.webp)

一个跨平台的桌面应用，使用自然语言进行本地文件搜索。（[@moyangzhan](https://github.com/ruanyf/weekly/issues/8764) 投稿）

3、[OpenWork](https://github.com/different-ai/openwork)

![](https://cdn.beekka.com/blogimg/asset/202601/bg2026011602.webp)

Claude 公司新产品 CoWork 的开源替代品，让普通用户不编程，就能完成文件操作，定位就是“Claude Code 的非编程版”。

另有一个类似项目 [Open Claude Cowork](https://github.com/DevAgentForge/Claude-Cowork)。（[@aiagentbuilder](https://github.com/ruanyf/weekly/issues/8771) 投稿）

4、[Wolfcha](https://github.com/oil-oil/wolfcha)（猹杀）

![](https://cdn.beekka.com/blogimg/asset/202601/bg2026012105.webp)

开源的网页游戏 AI 狼人杀，除了玩家自己，其他所有角色（女巫、猎人、守卫、狼人等）都由 AI 扮演。（[@oil-oil](https://github.com/ruanyf/weekly/issues/8772) 投稿）

## 资源

1、[维基百科25周年](https://wikipedia25.org/en/the-first-day)

![](https://cdn.beekka.com/blogimg/asset/202601/bg2026011604.webp)

维基百科是2001年1月13日上线的，今年是25周年纪念。这个网站是官方的纪念网站，以互动形式展示了发展历程。

另外，还有一篇文章，介绍[互联网档案馆的历史](https://hackernoon.com/the-long-now-of-the-web-inside-the-internet-archives-fight-against-forgetting)（下图）。

![](https://cdn.beekka.com/blogimg/asset/202601/bg2026011605.webp)

2、[HTTP:COLON](https://httpcolon.dev/)

![](https://cdn.beekka.com/blogimg/asset/202601/bg2026012004.webp)

这个网页可以查看指定网站返回的 HTTP 标头，详细解释每个字段的含义。

3、[现代 Java](https://github.com/Together-Java/ModernJava)（Modern Java）

![](https://cdn.beekka.com/blogimg/asset/202601/bg2026011601.webp)

面向初学者的 Java 语言教程。

## 图片

1、[中国新能源建设的惊人规模](https://e360.yale.edu/digest/china-renewable-photo-essay)

90后摄影师储卫民拍摄的中国新能源建设。

他说：“从地面上很难体会这些发电厂的规模，但当你升到空中时，就能看到它们与山脉、沙漠和海洋之间的关系。”

青海冷湖镇

![](https://cdn.beekka.com/blogimg/asset/202601/bg2026011607.webp)

浙江象山县

![](https://cdn.beekka.com/blogimg/asset/202601/bg2026011608.webp)

青海塔拉滩

![](https://cdn.beekka.com/blogimg/asset/202601/bg2026011609.webp)

内蒙古阿拉善

![](https://cdn.beekka.com/blogimg/asset/202601/bg2026011610.webp)

“我一开始只是拍摄风景，但2022年我去贵州、云南、青海等地旅行时，不断看到风力发电场和太阳能发电厂出现在我的镜头里。我意识到这就是我们这个时代的故事——但几乎没有人系统地记录它。”

## 文摘

1、[谷歌14年工作的教训](https://addyosmani.com/blog/21-lessons/)

大约14年前，我加入谷歌，以为这份工作就是编写优秀的代码。

这个想法部分正确。但随着时间的推移，我越来越意识到，真正成功的工程师不一定是最优秀的程序员，而是懂得驾驭代码之外一切的人。

下面就是我得到的经验教训。有些教训是我走了几个月的弯路得到的，还有一些需要数年才完全领悟。它们都与具体的技术无关——技术变化太快，根本无关紧要。

（1）工程师想在大公司生存，必须学会沟通。

因为在大公司，团队是组织的基本单位，推进项目必须跟其他团队沟通。项目越大，你花在跟其他人、其他团队沟通的时间就越多，比编写代码的时间还多。大多数“慢”的团队实际上是不沟通的团队。

为了顺利沟通，清晰是第一位的要求。它不仅可以加快沟通，还能降低代码风险。最优秀的工程师都会用清晰易懂的代码来代替炫技。

为了提高表达的清晰性，你可以尝试写作和去教别人。如果你能用简单的语言解释某件事，你就是真的理解它了。

（2）想要得到晋升，必须有人为你说话。

职业生涯初期，我曾认为优秀的工作成果代表了一切，但我错了。代码默默地躺在代码库里，不会为你说话。

那些对你至关重要的会议，你本人很可能没有机会参加。你需要你的经理、同事在会上提到你、推荐你。他们可能这样做，也可能不会。

平时工作中，你尽量不要为自己增加阻力。如果开会的时候，你赢得每一场辩论，很可能就是在积累无声的阻力。你之所以“赢”，不是因为你说服了别人，而是因为他们不再与你争论，放弃了，将会在其他场合表达这种不满。

（3）专注于你能控制的事情，忽略你无法控制的事情。

很多事情，你改变不了，不要为这种事情烦恼。这不是被动接受，而是策略性分配精力。如果你把精力浪费在无法改变的事情上，就等于放弃改变那些原本可以改变的事情。

（4）简化工作往往可以提高绩效。

当系统运行缓慢时，人们的第一反应是增加缓存层、并行处理和更智能的算法。有时这样做没错，但我发现，删除不必要的工作几乎总是更有效果。下次进行优化之前，你要先问问自己这项工作是否应该存在。

（5）时间比金钱更有价值，你要抓紧时间。

职业生涯初期，你用时间换取金钱，各种事情都做——这无可厚非。但到了某个阶段，情况就完全不同了，你会开始意识到，时间才是不可再生资源。你要专注于那些对你最重要的事情，放弃其他事情。

## 言论

1、

AGI（通用人工智能）中的 A 代表广告（advertisement）。

-- [一位程序员](https://ossa-ma.github.io/blog/openads)评论 OpenAI 宣布在 AI 对话中加入广告

2、

Netflix 的电影不追求视觉效果，因为大多数观众是在手机、平板和笔记本电脑上看，内容不需要为大银幕制作、而是为小屏幕制作的。

-- [马特·达蒙](https://x.com/nexta_tv/status/2012595777831678142)，美国著名演员

3、

我从未见过哪个群体比程序员更热衷于分享知识。其他行业都是严守知识、保守秘密，程序员则是免费提供源代码、书籍、博客文章、演示文稿、视频教程等等。

编程领域没有什么神圣不可侵犯的东西。如果你想学习，你可以找到免费书籍、完整的源代码、论坛、聊天室、邮件列表、线下聚会、博客文章、视频讲座、教程以及你可能需要的一切资源。尽管举手，总会有人乐于助人，倾囊相授。

-- [《我是如何学习所有编程知识的》](https://agentultra.com/blog/how-i-learned-everything-i-know/index.html)

4、

今年的 iOS 26 中，一些 UI 元素利用 HDR 屏幕，采用高光，比纯白色更亮。如果你曾经在 iPhone（或其他任何支持 HDR 的屏幕）上看过 HDR 照片，然后再看看以 SDR 模式显示的 UI，你就会知道它看起来有多么灰暗黯淡。

-- [《亮模式的膨胀》](https://willhbr.net/2025/10/20/light-mode-infffffflation/)，作者发现 iOS 每年都变得更亮，容易产生视觉疲劳，让他不得不使用暗模式

5、

如果你想批评大型组织的运作方式，首先要了解它们为何如此运作。否则，批评会显得尖锐，但却毫无意义。

-- [《关于大型软件公司的常见误解》](https://philipotoole.com/common-misunderstandings-about-large-software-companies/)

## 往年回顾

[年底的未来已来](https://www.ruanyifeng.com/blog/2025/01/weekly-issue-335.html)（#335）

[为什么 PPT 不如备忘录](https://www.ruanyifeng.com/blog/2024/01/weekly-issue-285.html)（#285）

[青年失业率与选择创业](https://www.ruanyifeng.com/blog/2022/12/weekly-issue-235.html)（#235）

[美国宪法拍卖，一个区块链案例](https://www.ruanyifeng.com/blog/2021/11/weekly-issue-185.html)（#185）

（完）

