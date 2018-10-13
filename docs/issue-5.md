# 每周分享第 5 期

这里记录过去一周，我看到的值得分享的东西，每周五发布。

![](https://www.wangbase.com/blogimg/asset/201805/bg2018051801.jpg)

（题图：世博公园，上海，2018）

本周，服务器遭受攻击，网站下线50多个小时。我一度以为，《每周分享》不能按时发了。现在，攻击停了，但你不知道，什么时候它还会回来。这件事情的细节，我后面会单独写文章，这里只说说我的一个感受。

消息传出以后，许多素不相识的朋友通过各种渠道，询问我是否需要帮助，愿意提供个人或公司的资源，帮我渡过难关。阿里云和腾讯云都向我赠送了高防 IP。我全部牢记心中，这里不再一一感谢了。就算攻击最大的时候，我都没有担心过，因为我知道，背后有那么多人支持，你打不垮我的，只会激发我的斗志。

我最大的体会就是，在互联网上做一个好人，真是一件最划算的事情。你平时无非就是网上写写教程，邮件回答一些问题，虽然也是尽力去帮助别人，实际上并没有什么了不起的付出。但是，互联网的传播作用使得一点点微不足道的善行，都会被许多人看到和记住。等到你有困难的时候，人们就会在网上出现，从四面八方走过来帮你，默默用眼神支持你。

相反，如果你做一个坏人，躲在黑暗的角落放冷枪，也许能够达到那些自私的目的，攫取各种利益，但是你从此不敢相信别人，紧张兮兮活着，因为别人可能也会用同样的手段对付你。等到你落难了，不要说有人帮，他们庆祝和复仇都来不及呢。我觉得，这种人生可耻又可悲。

## 新闻

1、[Firefox 60 支持同域才能发送 Cookie](https://blog.mozilla.org/security/2018/04/24/same-site-cookies-in-firefox-60/)

本月初，Firefox 60 浏览器发布。它有一个很大的亮点，我看提到的人不多，就是它解决了 CSRF 攻击。

所谓 CSRF 攻击，就是使用真实的 Cookie 进行恶意行为。比如，用户访问 B 网站，页面上有一张来自 A 图站的图片，这时浏览器就会向 A 网站发出请求，并带上 A 网站的 Cookie。如果这张图片的 URL 被精心伪造过（比如是划款请求），麻烦就来了。因为 A 网站的服务器会以为，这个请求是真实的请求，因为 Cookie是对的，从而授权进行各种操作。

Firefox 60 按照最新的标准，为 Cookie 新增了一个 SameSite 属性，明确规定访问 B 网站时向 A 网站发出的请求，一律不许带上 Cookie，这就从根本上防止了 CSRF 攻击。

另外，Firefox 60 还默认打开了 ES6 模块支持，至此所有浏览器都默认支持 ES6 模块。

2、[成立仅8个月的币安盈利超过百年德意志银行](http://finance.sina.com.cn/blockchain/coin/2018-04-28/doc-ifztkpip2834593.shtml)

![](https://www.wangbase.com/blogimg/asset/201805/bg2018051802.png)

根据币安官方透露，它的上一季度利润达到2亿美元，已经超过了德国最大的银行----德意志银行，后者在2018年第一季度的利润为1.46亿美元。

德意志银行拥有148年的经营历史，旗下员工超过10万名。而8个多月前，币安还不存在。币安，英文名 Binance，是由CEO赵长鹏（CZ）创建的加密货币交易平台。现在它已经是全球最大的加密货币交易所。

3、[如果 CA 撤销了你的 HTTPS 证书](https://scotthelme.co.uk/the-power-to-revoke-lies-with-the-ca/)

![](https://www.wangbase.com/blogimg/asset/201805/bg2018051803.jpg)

加密网站都需要 HTTPS 证书，这些证书通常是由 CA（证书当局）颁发。最近，一家 CA 撤销了 stripe.ian.sh 这个合法网站的证书，理由仅仅是浏览器显示证书来自 Stripe Inc，与 stripe.com 太过相似，用户可能会混淆。

请仔细看上图，你会不会以为自己正在访问 Stripe.com 官网，但是其实是另一个网站。作者提出了一个问题，CA 可以任意撤销一个网站的证书，他们的权力是否过大？因为一旦失去了加密证书，商业网站就等同于下线了。最近开源论文网站 Sci-Hub 由于版权争议，它的 HTTPS 证书就被 CA [吊销](https://news.ycombinator.com/item?id=16951831)了。

4、 [机器宠物狗](https://aibo.sony.jp/en/)（[视频](https://weibo.com/tv/v/GfE2adYIy?fid=1034:60290ac9f5e8a89f1ab9c47d403045fb)）

![](https://www.wangbase.com/blogimg/asset/201805/bg2018051804.jpg)

索尼公司推出了新一代机器宠物狗 aibo（爱宝），根据产品主页的介绍，它跟人的互动达到了前所未有的程度，已经很接近真实的狗。

人跟机器人做伴侣的时代真的不远了。

5、[微软支持 Unix 换行符](https://blogs.msdn.microsoft.com/commandline/2018/05/08/extended-eol-in-notepad/)

文本文件的换行符，一直不统一。Unix 平台是 \n，Windows 平台是 \r\n，所以 Windows 打开其他平台的文本文件，都显示为一行。

那么多年过去了，微软终于在今年宣布下一次 Windows 10 更新时，Notepad 将支持 [Unix 换行符](http://www.ruanyifeng.com/blog/2006/04/post_213.html)（LF）、Mac 换行符（CR）。

6、[Gmail 的智能回邮功能](https://www.businessinsider.sg/google-gmail-gets-smart-compose-automatic-reply-suggestion-service-2018-5/)

![](https://www.wangbase.com/blogimg/asset/201805/bg2018051805.jpg)

谷歌IO大会宣布，Gmail 新增智能回邮功能。也就是你写几个单词，后面的句子它帮你准备好。上图的那封邮件，每句话都是你写两个单词，后面机器帮你补全。

以后你回复邮件，只写核心信息就行了，人工智能自动加上一大堆客套话。

7、[Google One 存储](https://one.google.com/getupdates)

![](https://www.wangbase.com/blogimg/asset/201805/bg2018051806.png)

谷歌将网络储存升级成 Google One  服务，100GB是每个月2美元，200 GB是3美元，2TB是10美元。这件事情的直接后果就是，Dropbox 大概要完蛋了，它是1TB 每个月10美元。不过，这个价格还是不如百度网盘，它是免费用户就有2TB。

## JavaScript 高级前端开发课程

本期《每周分享》很高兴得到了 [51CTO 学院](http://edu.51cto.com/?ryf)的赞助。下面介绍一下，他们最近推出了两门新课程，都由金牌讲师陈学辉主讲。

[![](https://www.wangbase.com/blogimg/asset/201805/bg2018051807.jpg)](http://edu.51cto.com/px/train/186?ryf)

1、__《JavaScript 深度揭秘之高级前端开发》：__适合已在职、有基础的技术人员提升技术，挑战更高的薪资。该课程深入探讨函数、事件循环机制、异步编程、面向对象、浏览器渲染、数据交互等的内部原理和高级应用，使用 ES6/ES7 语法讲解，涵盖日常开发及面试所需的技能。并且结合当下技术热点实时更新课程。

2、__《Web 前端高级开发工程师》__：主要针对纯小白的学员，比如在校学生、在职想转行的人士等等，从基础讲起，并且包含了《JavaScript 深度揭秘之高级前端开发》课程的部分内容。

[![](https://www.wangbase.com/blogimg/asset/201805/bg2018051808.jpg)](http://edu.51cto.com/px/train/186?ryf)

__《Web 前端高级开发工程师》__课程原价是8980元，__《JavaScript 深度揭秘之高级前端开发》__原价 7980 元，现在点击[这个链接](http://edu.51cto.com/px/train/186?ryf)购买，可以__享受半价！__报名之后马上开始学习，无需等待开班，并且采用授课老师、助教老师、班主任、就业指导老师四对一的服务模式，保证每一位学员都能真正掌握学习内容。

感兴趣的朋友，可以[点击这里](http://edu.51cto.com/px/train/186?ryf)了解更多。

## 教程

1、［文章］[最简单的马尔可夫链图解](http://setosa.io/ev/markov-chains/)（英文）

![](https://www.wangbase.com/blogimg/asset/201805/bg2018051809.png)

上面是最简单的马尔可夫链图解。系统包括 A 和 B 两个状态。一共有四种转化路径：A 到 A、A 到 B、B 到 A，B 到 B。每种路径的可能性都是 50%，就得到了随机的运动轨迹。

一个通俗的实例是，每天有"晴天"和"下雨"两种天气，天气变化的概率是50%，那么马尔可夫链就可以生成一个未来一周天气的模型。

2、[文章] [决策树模型入门](https://heartbeat.fritz.ai/introduction-to-decision-tree-learning-cd604f85e236)（英文）

![](https://www.wangbase.com/blogimg/asset/201805/bg2018051810.jpg)

决策树模型（Decision Tree）是最简单的机器学习模型，也最容易理解。当决策受到多个因素影响时，这个模型相当有用。
           
3、[文章] [为什么 go 结构是有害的？](https://vorpus.org/blog/notes-on-structured-concurrency-or-go-statement-considered-harmful/)（英文）

![](https://www.wangbase.com/blogimg/asset/201805/bg2018051811.png)

多线程编程之中，有一种 go 结构，就是主线程之外分出一个线程，这个线程完成任务以后，再回到主线程。作者认为，这种结构是有害的。他的最精彩观点就是：如果允许使用 go 结构，那么所有的语言功能都可以用这种结构实现，程序很快就会乱做一团。

4、[代码] [Elm + Rust 开发桌面应用](https://github.com/huytd/kanban-app)（英文）

![](https://www.wangbase.com/blogimg/asset/201805/bg2018051812.jpg)

目前，使用 Web 技术开发桌面应用，主要通过 Electron。它的缺点是，有时你只是想要在桌面上展示一个网页，不需要跟本地文件系统交互，但是不得不把整个 Chromium 浏览器和 V8 引擎包含在这个应用里面，导致不管逻辑是否复杂，任何一个 Electron 应用都至少有几十MB的大小。

这个项目展示了另一种开发桌面应用的可能。它的原理是，任何操作系统都有自己的 WebView，也就是说可以在应用程序里面调用 WebView 展示网页。那么可以使用 Rust 语言打包 WebView，而 JS 脚本部分交给 Elm 语言生成。由于 WebView 是系统提供的，所以打包出来非常小，一般只有几百KB，资源占用也很少。

5、[文章] [高可用的部署技巧](https://medium.com/@NetflixTechBlog/tips-for-high-availability-be0472f2599c)（英文）

Netflix 公司的工程师介绍，他们如何部署代码，提高服务的可用性，比如使用红黑部署、设置部署窗口等等。

6、[教程] [哈佛大学《CS109：数据科学基础》的课程资料](http://cs109.github.io/2015/index.html)（英文）

1xx 编号的课程都是本科生的基础课程，我看了一下，讲的是 Python、基础的统计学知识和数学模型，提供免费的课程视频和PPT 下载。

7、[笔记][《技术面试需要掌握的基础知识整理》](https://github.com/CyC2018/Interview-Notebook)（中文）

技术面试需要掌握的基础知识整理。

8、[资料] [互联网公司技术架构](https://github.com/davideuler/architecture.of.internet-product)（中文）

作者收集的国内各大互联网公司技术架构的资料

## 工具

1、[sonarwhal](https://sonarwhal.com)

![](https://www.wangbase.com/blogimg/asset/201805/bg2018051813.jpg)

微软推出的开源网页 lint 工具（[源码仓库](https://github.com/sonarwhal/online-service/)），可以在线扫描网页，提供无障碍、互通性、性能、PWA、安全五个方面的扫描结果，给出改进点。

2、[IPBlade](https://chrome.google.com/webstore/detail/ipblade-privacy-protector/hojjgiebfmgmlpjojjkaehgohkolmoea)

![](https://www.wangbase.com/blogimg/asset/201805/bg2018051814.jpg)

有的网络服务限制 IP 地址，比如只有中国的 IP 地址才能使用。这个 Chrome 插件点击一下就可以改变浏览器的 IP 地址，从而绕过这些限制。免费版只能改成美国的 IP 地址。

3、[.gitignore 文件的命令行生成工具](https://github.com/TejasQ/add-gitignore)

![](https://www.wangbase.com/blogimg/asset/201805/bg2018051815.jpg)


.gitignore 文件设置了哪些文件可以不用进入 Git 版本管理。这个命令行工具可以根据项目类型，自动生成 .gitignore 文件。

4、[jGoBoard](http://jgoboard.com/)

![](https://www.wangbase.com/blogimg/asset/201805/bg2018051816.jpg)

我在寻找围棋软件的时候，发现了这个生成互动式围棋棋盘的 JavaScript 库，觉得功能和样式都满足需要。另外，AlphaGo 官网也提供一个[棋盘生成器](https://deepmind.com/research/alphago/match-archive/alphago-games-simplified-chinese/)， 基于 [WGO.js](http://wgo.waltheri.net/player)。

5、[love2.io](https://love2.io/)

一个收集开源书籍的网站。

6、[Pyre](https://github.com/facebook/pyre-check)

Facebook 推出 Python 的静态类型检查工具，有点像 Flowtype 对于 JS 代码的作用。

7、[Google CTF 的试题](https://github.com/google/google-ctf)

这个是试题库，收集了 Google 主办的黑客安全大赛 CTF 的题目。

## 文摘

1、[冯象：AI 将终结资本主义](https://www.washingtonpost.com/news/theworldpost/wp/2018/05/03/end-of-capitalism/?utm_term=.0b7dc0245ff0)

![](https://www.wangbase.com/blogimg/asset/201805/bg2018051817.jpg)

冯象是清华大学法学院教授。最近，《华尔街日报》发表了他在北京的一次演讲稿（英文），他认为 AI （人工智能）最终将导致目前的经济模式崩溃。

> AI 将无情地导致技术亿万富翁的超级富豪寡头垄断，这些亿万富翁收获了机器人创造的财富，这些财富取代了人类的劳动力，从而导致大量的失业。
> 
> 大规模失业的必然性和对全民福利的需求，将推动人工智能国有化的想法。
> 
> 人工智能将会导致市场经济的终结。随着机器人的增多，工业发展只会导致更多的失业。除了国家的介入，没有什么好的选择。

2、[毕业20年依然从事本行业的比例](https://improvingsoftware.com/2009/05/19/programmers-before-you-turn-40-get-a-plan-b/)

1998年，美国的人口普查局做了一次职业调查。

> 大学毕业后10年，57％的计算机主业的学生还在以程序员的身份工作；毕业后15年，这个比例下降到34％；毕业20年后，也就是只有40岁出头的年龄，下降到19％。相比之下，土木工程专业的数字是61％、52％和52％。

软件行业罕见40岁以上的程序员，看来全世界都是如此。这还是20年前的调查，如今的比例应该更低了。

3、[自下而上的编程](http://www.paulgraham.com/progbot.html)，by Paul Graham

> 传统的方法是，一个大型的程序必须分成几块，程序越大，它就越需要分割。你如何划分一个程序？传统的方法称为自上而下的设计：程序的目的是做这七件事，那么我把它分成七个主要的子程序，第一个子程序必须做这四件事，所以它又有四个子程序等等。这个过程一直持续到整个程序具有合适的粒度级别 - 每个部分都足够大，可以做一些实质性的事情，但又足够小，可以被理解为一个单元。
> 
> 有经验的Lisp程序员对他们的程序进行不同的划分。除了自上而下的设计之外，他们遵循可称为自下而上设计的原则 - 改变语言以适应问题。在Lisp中，你不仅要将程序写入语言，还要将语言建立在程序上。当你正在编写一个程序时，你可能会想"我希望Lisp有这样一个操作符。" 所以你就去写了。
> 
> 当你自下而上工作时，你通常会得到一个不同的程序。你得到的不是一个单一的，整体的程序，而是一个更大的语言、更多的抽象运算符，以及一个更小的程序。 

4、[为什么中文如此难学？](http://www.pinyin.info/readings/texts/moser_zhongwen_simplified.html)

> 中文不但对我们英语人士来说很难，它在绝对意义上也是难的。这意味着对于中国人来说，中文也很难。如果你不信，随便问个中国人。绝大多数中国人都会高兴地承认他们的语言很难，可能是地球上最难的。（实际上很多人以此为傲，就好象实际上有些纽约人以居住在美国最不宜居的城市为傲一样。）
> 
> 我有一次和北京大学中文系的三个博士生吃午饭，他们三个都是中国人（一个来自香港）。我那天正好感冒，打算给一个朋友写个纸条取消我们一个约会。我发现自己想不起来怎么写"喷嚏"中的"嚏"了。于是我问那三位该怎么写。结果吓我一跳，他们仨都尴尬而难为情地耸耸肩。谁都不能正确地写这个字儿。各位同学！北京大学常常被认为是中国的哈佛啊。你能想象三个哈佛大学英文系的博士生不会写"sneeze"（喷嚏）？然而这种情况在中国绝不少见。

5、[天空中有多少颗星星？](http://www.skyandtelescope.com/astronomy-resources/how-many-stars-night-sky-09172014/)

![](https://www.wangbase.com/blogimg/asset/201805/bg2018051818.jpg)

肉眼可见的恒星亮度等级，最低为+6.5。符合这个标准，地球上可见的星星一共有9,096颗。由于在任何时刻只能看到一半的天空，我们必须将这个数字除以二得到4,548颗星星（视季节而定），那是来自你能想象到的最黑暗的天空。

大城市的郊区，只能看到亮度为+4的星星，那只剩下900颗，任一时刻你还只能看到其中的一半。如果我们将城市市区的亮度等级设为+2（与北斗星亮度相似），那么全球只剩下70颗星，或者说从芝加哥市中心或波士顿可以看到35颗星。

6、[写一本 O'Reilly 书籍是什么体验？](https://medium.com/@rothgar/the-economics-of-writing-a-technical-book-689d0c12fe39)

![](https://www.wangbase.com/blogimg/asset/201805/bg2018051819.jpg)

作者回顾了他为 O'Reilly 写书的整个历程。看过美国的技术书籍作者，收入也不是想象的那么高。

> 这本书原计划250页，定价59.99美元。完成时，它只有160页，定价39.99美元。由于我们两个作者合写了这本书，我们每个人可以拿到每本书收入的5％，电子书是12.5％（个别作者可以拿到10％和25％）。这相当于我们每个人从实体书得到0.99美元，从电子书得到0.46美元。
> 
> 从2017年12月到2018年3月，这本书售出了__1337__份。截止2018年4月份，我已经赚取了11,554.15美元。

## 本周图片

1、[堆积如山的废弃共享自行车](https://www.theatlantic.com/photo/2018/03/bike-share-oversupply-in-china-huge-piles-of-abandoned-and-broken-bicycles/556268/?single_page=true)

![](https://www.wangbase.com/blogimg/asset/201805/bg2018051820.jpg)

共享自行车的流行，一大原因是它转嫁了停车成本。堆积如山的公共自行车已经成了城市问题，谁来管理？成本谁出？

这里还有另外一组[图集](https://www.theguardian.com/cities/gallery/2018/may/01/unexpected-beauty-china-bicycle-graveyards-share-bikes-in-pictures)。

2、[安卓的错误 Emoji 图案](https://www.businessinsider.sg/google-ceo-apologizes-for-android-burger-emoji-shows-off-new-beer-design-2018-5/?r=US&IR=T)

![](https://www.wangbase.com/blogimg/asset/201805/bg2018051821.jpg)

![](https://www.wangbase.com/blogimg/asset/201805/bg2018051822.jpg)

今年的谷歌 I/O 大会，谷歌的 CEO 特别提到他们修正了两个错误的 Emoji。一个是芝士在牛排下面，另一个半空的啤酒杯却有泡沫溢出。

## 本周金句

1、

非洲的人口 = 美洲 + 澳洲 = 欧洲 + 中东 = 亚洲 / 4 （[@MaxCRoser](https://twitter.com/MaxCRoser)）

2、

程序的功能单位不宜过大，太大的函数容易掩盖错误，就像一个大城市隐藏着逃犯一样。这样的软件很难阅读，很难测试，也很难调试。（《[自下而上的编程](http://www.paulgraham.com/progbot.html)》，by Paul Graham）

3、

记者问了100个90后，"你们为什么不愿意打电话呢？"有人表示，只有陌生人才打电话。最陌生的人最常打电话：快递、外卖、骗子、你老板。（[新京报](http://news.sina.com.cn/c/2018-04-28/doc-ifzvpatq6849008.shtml)）

4、

Facebook 公司推出Pyre，用来检查Python程序的静态类型错误，下面是一个网友的[评论](https://news.ycombinator.com/item?id=17049578)。

> 十多年前，Java的繁琐让很多人仇恨类型系统，他们改用Python、Ruby等动态类型语言，这使我们能够快速而松散地完成工作。经过大约十年的热血编程，我们最终发现，动态语言编写的巨大单体项目是非常脆弱的。

## 欢迎订阅

这个专栏每周五发布，同步更新在我的[个人网站](http://www.ruanyifeng.com/blog)、[微信公众号](http://weixin.sogou.com/weixin?query=%E9%98%AE%E4%B8%80%E5%B3%B0%E7%9A%84%E7%BD%91%E7%BB%9C%E6%97%A5%E5%BF%97)和[语雀](https://yuque.com/ruanyf/share/)。

微信搜索"__阮一峰的网络日志__"或者扫描二维码，即可订阅。

![image | left](https://cdn.yuque.com/yuque/0/2018/jpeg/84141/1524407963102-5cfbd2f2-ec88-4db2-9caf-09f1fccec9a8.jpeg "")

（完）

