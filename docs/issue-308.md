# 科技爱好者周刊（第 308 期）：工作找不到，博士能读吗？

这里记录每周值得分享的科技内容，周五发布。

本杂志[开源](https://github.com/ruanyf/weekly)，欢迎[投稿](https://github.com/ruanyf/weekly/issues)。另有[《谁在招人》](https://github.com/ruanyf/weekly/issues/4743)服务，发布程序员招聘信息。合作请[邮件联系](mailto:yifeng.ruan@gmail.com)（yifeng.ruan@gmail.com）。

## 封面图

![](https://cdn.beekka.com/blogimg/asset/202407/bg2024071107.jpg)

北京怀柔的箭扣长城五期保护修缮项目，修复915米的长城，包含六座烽火台，预计2026年完工。（[新京报](https://m.bjnews.com.cn/detail/1720180768129506.html)）

## 工作找不到，博士能读吗？

最近几年，我国的博士招生数量急剧增长。

![](https://cdn.beekka.com/blogimg/asset/202407/bg2024070601.webp)

2016年还是7万余人，2023年就增长到了[15.33万人](https://www.sohu.com/a/762421020_121678151)（上图只到2022年）。

最新消息是，2024年还会[扩招](https://www.sohu.com/a/749608492_121124034)。

![](https://cdn.beekka.com/blogimg/asset/202407/bg2024070602.webp)

博士招生增长这么快，我想多少跟这几年的就业形势有关系。

如果你因为就业压力，正在考虑要不要读博士，我推荐本周的[一篇文章](https://medium.com/@jpolak/should-you-get-a-phd-4806663cf380)。

作者是加拿大麦吉尔大学的一个数学博士，但现在是野生动物摄影师。别人问他，你觉得博士学位值得读吗？他就写了这篇文章。

![](https://cdn.beekka.com/blogimg/asset/202407/bg2024070603.webp)

他说，你要考虑清楚，**博士学位并不像听上去那样美好**。

首先，硕士+博士至少需要5年，毕业了能不能找到更好的工作，并不确定。这段时间你完全可以在另一个地方，建立你的职业生涯。

其次，很多博士学位名不符实，只是一堆半生不熟的课程，最后你提交一篇低标准的论文，就可以通过，可能学不到什么东西。

最后，不要相信大学的宣传。学校总是说，自己的博士课程有多好，目的只是想要更多的学生，这样就可以赚更多的钱。

你考虑问题的标准应该是，生命只有一次，不要浪费你的时间。你决定如何行动，应该基于它们能否帮助你的自我发展和成长。

如果博士学位满足下面的条件之一，就值得读。

> - 它的研究方向，能够真正激发你的某个兴趣。
> - 它让你真正成长为自己的更好版本。
> - 你用它去做一些可以达到人生新高度的事情。

反过来，上面的条件都达不到，反而有下面的特征，博士就不值得读。

> - 读博结束后，它只是让你的简历多了另一行。
> - 博士期间学到的东西，你自己一个人也可以学会。
> - 你读博的唯一目的，只是为了找到一份工作，但它不能帮助你成长。

最后，他说了一个简单的判别方法。

> “你一想到读博这件事，感到激动不已，仿佛内心的火焰被点燃，觉得它会大大丰富你的人生，带给你成长和以新方式看待世界，那就去读。”
> 
> “反之，你对这件事毫不激动，有种无可奈何的感觉，那你最好先花几个月，认真思考你想做什么，如何度过自己的生命，这可能会让你避免浪费宝贵的几年时间。”

我很认同这段话，但是必须承认，这太理想化了。

找不到工作是非常现实的压力，而读博是有工资的。走投无路的时候，其实是没有选择的，内心的意愿并不重要。

我转发他的文章，只是因为喜欢他说的，**只要有可能，就应该从自我发展和成长的角度，来思考人生的选择**，否则读博只是把眼前的就业困境，推迟到几年后，而且那时的选择余地比现在更少。

## [本周精选] AI 超市 302.AI

AI 产品层出不穷，大家都在研究，怎么使用它们。

下面介绍的 [302.AI](https://302.ai/)，思路很独特。它把自己定位为 **“AI 超市”，在一个网站汇集，全世界的各种 AI 机器人 + 工具 + API**。

![](https://cdn.beekka.com/blogimg/asset/202407/bg2024070801.webp)

注册后，它会让你选择，要搭建什么机器人（下图）。

![](https://cdn.beekka.com/blogimg/asset/202407/bg2024070803.webp)

比如，选择“**聊天机器人**”，你就需要指定底层模型（下图），一共有几十种模型可以选。

![](https://cdn.beekka.com/blogimg/asset/202407/bg2024070811.webp)

然后，系统分配一个二级域名，通过这个域名使用该模型。也就是说，用户选择后端，它来生成使用界面。

这个界面跟官方的是一样的，支持 OpenAI 的所有最新特性，比如上传图片文件、语音对话等等，还能实时预览 HTML 和 SVG 代码效果。

[302.AI](https://302.ai/) 基本上都是这个模式：**用户想要什么 AI，它都做了适配，为你生成使用界面**。并且，它分配的二级域名是你独享的，你可以分享给其他人，但是这样会消耗你的额度，所以系统允许你设置一个“分享码”（页面密码）。

除了聊天机器人，它还提供其他类型的机器人。

（1）绘图机器人：生成“文生图”使用界面，底层模型可选 Midjourney 或 Stable Diffusion 3。

（2）应用机器人：对应 OpenAI 的应用商店。你可以[搜索](https://gpts.302.ai/)里面的50万个应用，一键生成使用界面。

（3）API 超市：提供不同模型的 [API 统一调用接口](https://apifox.com/apidoc/project-4012774)，都放在`api.302.ai`这个域名下面，通过参数`model`指定模型。它支持的 API 非常多，最新的视频生成模型 Luma AI 和 Runway 都是可用的。

![](https://cdn.beekka.com/blogimg/asset/202407/bg2024070814.webp)

（4）工具超市：提供一些专门的 AI 功能，目前有几十个工具可选，比如 AI 搜索引擎、AI 翻译、提示词生成、老照片修复、照片放大、电商图片生成等等。

举例来说，工具里面有一个“AI 网页复制器”（下图）。进入使用界面后，我上传了抖音首页的截图，它就给出了网页代码，还能在 CodePen 打开。

![](https://cdn.beekka.com/blogimg/asset/202407/bg2024070903.webp)

![](https://cdn.beekka.com/blogimg/asset/202407/bg2024070904.webp)

最后，302.AI 的开发团队就是 [Proxy302](https://www.proxy302.com/) 的开发团队，在跨境软件服务上有丰富的经验和资源，已经稳定运作了4年。

关于费用，他们是**按需付费，没有月费**，用多少付多少，而且国外模型是原价的五折，详见[定价页](https://302.ai/pricing_robot/)。

大家可以去他们的[官网](https://302.ai/)，开通试用，体验一下。如果你使用 [Coze](https://www.coze.cn/)，他们在那里也上架了插件、bot 和工作流。详细了解，可以看[官方文档](https://help.302.ai/docs/302-AI-wu-fen-zhong-shang-shou-jiao-cheng)。

## 科技动态

1、[香港的无影时间](https://today.line.me/hk/v2/article/LXwy2oz)

香港媒体报道，7月8日和7月9日，连续两天的中午12点28分和29分左右，香港街头出现“无影时间”，事物没有影子。

![](https://cdn.beekka.com/blogimg/asset/202407/bg2024071104.webp)

上图左侧的标示牌没有影子，而汽车和行人的影子都正好在脚底下，如果从头顶垂直看下来，也是没有影子。

![](https://cdn.beekka.com/blogimg/asset/202407/bg2024071105.webp)

这是因为这个时间，太阳正好直射香港。今年夏至是6月21日，太阳到达北纬23°26的北回归线，然后就不断南移。

香港是北纬22度，这两天太阳的直射点正好到达香港。

2、[证书防伪](https://obrhubr.org/reverse-engineering-diploma)

一个法国程序员在业余时间读学位，终于拿到了学位证书。

他意外发现，证书右上角有一个二维码。

![](https://cdn.beekka.com/blogimg/asset/202407/bg2024070503.webp)

这用于证书防伪，使用政府开发的一个 App 扫描后，就会告诉你证书是否为真，以及内容细节。

这个二维码本质上是一个数字签名，使用政府的私钥签署，而 App 包含了公钥，可以验证签名是否为真。

这真是证书防伪的好方法，简单成本低，普通手机就能检验，国内值得借鉴。唯一的问题是，万一私钥泄漏，二维码就作废了，但又不能重新颁发证书，很难补救。

3、[手机的手写笔记本](https://www.yankodesign.com/2024/06/26/boost-your-productivity-with-moft-snap-flow-the-ultimate-portable-focus-tool/)

有些人就是习惯手写笔记，不习惯手机做笔记。

针对这部分人群，一家美国创业公司推出了，跟手机配套的手写笔记本。

![](https://cdn.beekka.com/blogimg/asset/202407/bg2024070704.webp)

这种笔记本使用磁力，吸附在手机背面。使用时，打开它，就能在里面的便签记录自己的想法。

![](https://cdn.beekka.com/blogimg/asset/202407/bg2024070705.webp)

目前，这个产品正在 [KickStart](https://www.kickstarter.com/projects/moft/moft-snap-note-stand) 众筹，可以将它当作一个实验，看看手写笔记的用户现在还有多少。

![](https://cdn.beekka.com/blogimg/asset/202407/bg2024070706.webp)

4、[无叶片风力发电](https://electrek.co/2024/05/24/bladeless-rooftop-wind-turbines-box-buildings/)

我们日常所见的风力发电机，都拥有巨大叶片，这使得它无法在安装在城市，只能在野外使用。

一家美国创业公司发明了无叶片的风力发电机，没有转动的叶片，因此可以安装在楼房顶部。

![](https://cdn.beekka.com/blogimg/asset/202405/bg2024052601.webp)

它类似于转经筒，有一根垂直的转轴，封装在一个圆筒内。风穿过圆筒，就会带动转轴，进行发电。

![](https://cdn.beekka.com/blogimg/asset/202405/bg2024052602.webp)

它很适合那些没有足够阳光、不适合太阳能发电的城市。看来以后，城市不会有空屋顶，要么是光伏板，要么就是风力发电机。

## 文章

1、[webhook 是什么？](https://medium.com/@faizan711/what-are-webhooks-d02e88b77359)（英文）

![](https://cdn.beekka.com/blogimg/asset/202406/bg2024061014.webp)

本文解释 webhook 的概念，它其实是一种事件通知机制，既可以节省资源，又可以及时获得最新状态。

2、[如何在 Linux 安装 Java](https://linuxiac.com/how-to-install-java-on-ubuntu-24-04-lts/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202405/bg2024051002.webp)

一篇初学者教程，以 Ubuntu 为例，详细介绍 Java 的安装，以及一些基本概念，比如 OpenJDK 和 OpenJRE 的区别。

3、[Cookie 与 Token](https://tommihovi.com/2024/05/demystifying-cookies-and-tokens/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202406/bg2024061003.webp)

本文介绍 Cookie 与 Token 的概念，各自的适用场景。

4、[PostgreSQL 的 UUID 主键](https://maciejwalkowiak.com/blog/postgres-uuid-primary-key/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202407/bg2024070710.webp)

本文讨论将 UUID 格式作为 PostgreSQL 数据库主键的最佳实践。

5、[如何用 C 语言实现哈希表](https://benhoyt.com/writings/hash-table-in-c/)（英文）

一篇 C 语言教程，详细讲解如何实现一个简单的哈希表。

6、[蒸汽机的起源](https://rootsofprogress.org/steam-engine-origins)（英文）

![](https://cdn.beekka.com/blogimg/asset/202311/bg2023113001.webp)

本文介绍蒸汽机的历史，它是怎么发明和制造出来的。它配有大量动画示例，这是文章的亮点。

## 工具

1、[KasmVNC](https://github.com/kasmtech/KasmVNC)

![](https://cdn.beekka.com/blogimg/asset/202403/bg2024033102.webp)

一个远程桌面的 VNC 软件，不需要客户端，只要服务器安装后，就可以通过浏览器访问。类似的软件还有 [Apache Guacamole](https://guacamole.apache.org/)。

2、[Flet](https://flet.dev/)

![](https://cdn.beekka.com/blogimg/asset/202407/bg2024070707.webp)

一个 Python 的跨平台图形界面的框架，相当于用 Python 脚本写 Flutter 

3、[QuickJS](https://github.com/sebastianwessel/quickjs)

一个 npm 模块，使用 WebAssembly 建立了一个沙箱，让 JS 代码在沙箱中运行。

4、[ShareDrop](https://github.com/szimek/sharedrop)

![](https://cdn.beekka.com/blogimg/asset/202407/bg2024070809.webp)

一个开源的 Web 应用，允许用户在局域网里通过 WebRTC 分享文件。如果不在同一局域网，可以进入同一个页面进行分享。

5、[rss2newsletter](https://github.com/ElliotKillick/rss2newsletter)

将 RSS 转换成邮件发送，用于自建邮件列表。

6、[asciinema](https://github.com/gvcgo/asciinema/blob/main/docs/README_CN.md)

终端录屏工具 asciinema 的跨平台版本，使用 Go 语言编写。（[@moqsien](https://github.com/ruanyf/weekly/issues/4792) 投稿）

7、[EcoPaste](https://github.com/ayangweb/EcoPaste)

![](https://cdn.beekka.com/blogimg/asset/202407/bg2024071102.webp)

开源的多平台剪切板管理工具。（[@ayangweb](https://github.com/ruanyf/weekly/issues/4798) 投稿）

8、[color4bg.js](https://github.com/winterx/color4bg.js)

![](https://cdn.beekka.com/blogimg/asset/202407/bg2024071103.webp)

生成动态、抽象的背景图的工具。（[@winterx](https://github.com/ruanyf/weekly/issues/4805) 投稿）

## 关于 AI

1、[MemFree](https://www.memfree.me/)

![](https://cdn.beekka.com/blogimg/asset/202407/bg2024070906.webp)

一个混合 AI 搜索引擎，代码[开源](https://github.com/memfreeme/memfree)，可以自托管。（[@ahaapple](https://github.com/ruanyf/weekly/issues/4787) 投稿）

2、[VoiceChanger.im](https://voicechanger.im/)

![](https://cdn.beekka.com/blogimg/asset/202407/bg2024070502.webp)

该网站可以克隆语音，以及文本转语音，免费使用。（[@dddm25896](https://github.com/ruanyf/weekly/issues/4775) 投稿）

3、[共享 ChatGPT](https://www.apifaucet.com/)

![](https://cdn.beekka.com/blogimg/asset/202407/bg2024070501.webp)

这个网站让你登入共享账号，免费使用 ChatGPT。（[@740400019](https://github.com/ruanyf/weekly/issues/4773) 投稿）

4、[诗境](https://photo2poem.top/)

![](https://cdn.beekka.com/blogimg/asset/202407/bg2024070907.webp)

根据上传的照片匹配诗句，生成分享卡片。（[@gui66497](https://github.com/ruanyf/weekly/issues/4744) 投稿）

## 资源

1、[YTHunt](http://ythunt.com/)

![](https://cdn.beekka.com/blogimg/asset/202407/bg2024070708.webp)

Youtube 热门视频的实时精选。

2、[Linear Algebra Done Right](https://linear.axler.net/)

![](https://cdn.beekka.com/blogimg/asset/202310/bg2023103002.webp)

一本英文的线性代数本科生教材，免费阅读。类似的教材还有[《Linear Algebra Done Wrong》](https://www.math.brown.edu/streil/papers/LADW/LADW.html)。

3、[CSS 布局教程](https://book.mixu.net/css/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202402/bg2024022914.webp)

一组系列文章，介绍 CSS 布局的概念和各种实现方法。 

4、[随机摄像头](https://webcamaze.engineering.zhaw.ch/watchingtheworld/)

该网站从13000个世界各地的在线摄像头，随机选出9个，展示此刻的世界某个角落。

![](https://cdn.beekka.com/blogimg/asset/202312/bg2023122301.webp)

它还按照内容，对这些摄像头进行了分类（机场、动物、车辆等等），可以分类查看。

## 图片

1、[与那国岛水下遗址](https://www.ancientoriginsunleashed.com/p/is-the-10000-year-old-yonaguni-monument)

日本与那国岛的水下，有一处神秘的遗址。

![](https://cdn.beekka.com/blogimg/asset/202407/bg2024070701.webp)

巨石仿佛都被切割过，切面都是平整的，垂直地堆叠在一起。

![](https://cdn.beekka.com/blogimg/asset/202407/bg2024070702.webp)

有些科学家认为，这是人工遗址，另一些科学家认为这是自然原因造成的。目前没有定论，但是自然原因的可能性大一些，因为与那国岛历史上没有大量人口，无法完成这样巨大的工程。

2、[超级马里奥的手稿](https://www.archdaily.cn/cn/784175/zhe-xie-fang-ge-zhi-ceng-jing-bei-yong-yu-she-ji-chao-ji-ma-li)

1985年，任天堂的著名游戏《超级马里奥》正式发行。跟今天不一样，这个游戏的设计稿是手绘的。

![](https://cdn.beekka.com/blogimg/asset/202403/bg2024032401.webp)

设计师先在纸上画出游戏的样子，然后再交给程序员去实现。

![](https://cdn.beekka.com/blogimg/asset/202403/bg2024032402.webp)

如果要改动设计，就会非常麻烦。现在留下来的设计图，充满了涂改液的修改痕迹（下图）。

![](https://cdn.beekka.com/blogimg/asset/202403/bg2024032403.webp)

单独的手绘图还不足以表达意图，旁边都做了文字说明。

![](https://cdn.beekka.com/blogimg/asset/202403/bg2024032404.webp)

![](https://cdn.beekka.com/blogimg/asset/202403/bg2024032405.webp)

## 文摘

1、[一个悲伤的软件发布故事](https://www.kitze.io/posts/saddest-just-ship-it-story-ever)

2018年1月1日，我决定写一个应用程序。

几天后，最小可用原型写好了。我不是一个优秀的程序员，但是这个程序很简单，所以写得很快。我把版本定为 0.0.1 alpha。

我本可以发布它，但是我想再加一个功能，用户可能会更喜欢，就没发布。

后来，我断断续续加了几个功能，是时候发布了。我又犹豫了，我想不如把手机 App 也一起做出来，否则留不住用户。于是，我花了几个月，去学习 React Native，来开发手机 App。

转眼两年过去了，我在 Web、React Native、Expo、GraphQL 这些技术的迷宫里面徘徊，总是感觉技术堆栈不顺手，许多地方需要改动，没有好的解决方案。
 
最终，我灰心了，停止开发，放弃了发布该应用程序的想法。

最近，我又把这个程序找出来，开始使用它。我马上意识到，它缺少很多功能，我要么重新开发它，要么去找别人写的替代方案。

我决定使用别人写的程序。当我滚动他们的登陆页面时，我既高兴又愤怒。高兴的是，有人解决了我想解决的问题，仿佛他们读懂了我的想法并实现了出来。愤怒的是我放弃了，如果我坚持下来，现在这个程序应该是我写的。我没有及时发布，我行动太慢了。

现在我不再需要编码了。世界永远不会看到我的程序，但我在上面浪费了很多时间。这种感情真复杂。

然后，就是最悲伤的部分。我在他们的程序里面注册了一个账户，仔细看了帮助中心，觉得他们做得很好。等到30天试用期结束了，我默默拿出了信用卡，成为了付费用户。

想到我是一个从未发布的失败者，我不禁流下了眼泪。

这个故事的教训就是。不要觉得自己的应用程序还不完善、笨重、有缺陷、缺少功能、没有人会使用等等。如果它可以运行，可以完成基本功能，你就发布它。

## 言论

1、

具身智能（有物理形态的人工智能）是实现通用人工智能的最有效途径。只有结合了身体和感知，人工智能才有“活着”的感觉。

-- [王兴兴](https://k.sina.com.cn/article_7517400647_1c0126e4705905elig.html)，宇树科技创始人

2、

我没有选择去健身房锻炼，而是养了15只小鸡，它们同样要求你弯腰、深蹲并搬运重物。

而且，你没法偷懒，每天一定要去照顾它们，否则它们会死掉。这还有一个额外的好处，就是你会得到鸡蛋。

-- [《养鸡代替健身》](https://text.npr.org/g-s1-6784)

3、

大学课程《计算机体系结构》，选择的 CPU 往往不是流行的架构，比如 x86 和 ARM，而是一些很原始、早被淘汰的 CPU。

原因是这门课的目的是架构的思想，而不是细节，因此选择一个“原始” CPU 更有帮助。

-- [StackExchange](https://academia.stackexchange.com/questions/209300/when-teaching-computer-architecture-why-are-universities-using-obscure-or-even)

4、

信息技术的发展，并没有帮助人类治愈癌症。原因不是生物学缺乏数学或计算人才，而是生物系统不是数学系统，它的复杂性和不可预测性，限制了计算机的用处。

-- [《为什么生物学家没有治愈癌症》](https://www.writingruxandrabio.com/p/why-havent-biologists-cured-cancer)

5、

提高管理效率往往违背公司大多数员工的利益，因为这相当于缩减预算。

-- [《管理不善的优点》](https://yosefk.com/blog/advantages-of-incompetent-management.html)

## 往年回顾

[黑客马拉松的正确方式](https://www.ruanyifeng.com/blog/2023/07/weely-issue-261.html)（2023 #261）

[虚拟商品可以拉动 GDP](https://www.ruanyifeng.com/blog/2022/06/weekly-issue-211.html)（2022 #211）

[再见了，学术硕士](https://www.ruanyifeng.com/blog/2021/06/weekly-issue-161.html)（2021 #161）

[智能电视的误区](https://www.ruanyifeng.com/blog/2020/06/weekly-issue-111.html)（2020 #111）

（完）


