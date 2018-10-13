# 每周分享第 3 期

这里记录过去一周，我看到的值得分享的东西。

![](http://www.ruanyifeng.com/blogimg/asset/2018/bg2018050401.jpg)

（题图：杭州的一家画廊，2017）

本周开始，这个专栏每周五发布，希望为大家的周末提供一些阅读材料。另一个考虑是，我希望这个专栏有可读性，不要太偏向机器，而要偏向人。放到周五发，就是为了提醒自己，要写得轻松一点。

我当学生的时候，最流行的读物是《读者》和《女友》，最高时全国发行1000万册。我当时就想，如果有类似的工程师杂志该多好，专门发表介绍科学和技术的那种小品文，肯定会大受欢迎，至少我很愿意看。这么多年过去了，梦想中的这本杂志一直没有问世，那么现在我来尝试做做看。

## 新闻

1、[追踪40年，DNA 查到杀手](https://www.cnbeta.com/articles/tech/720885.htm)

![](http://www.ruanyifeng.com/blogimg/asset/2018/bg2018050402.jpg)

1976年到1986年，美国加州发生了连环杀人案，有12起杀人案、45起强奸案和120多起住宅盗窃案，都是一个人干的。40年过去了，凶手一直没有找到。

今年4月24日，终于抓到了今年72岁的前警察、后来的超市营业员 Joseph James DeAngelo。原来，美国有很多人为了了解自己的祖先，就将基因信息上传到 [GEDmatch](https://www.gedmatch.com) 这个开源网站。警察不需要搜查令就可以使用该网站的基因信息。跟嫌犯的基因信息比对后，发现此人就是嫌犯。

这起案件发生后，别的罪犯一定会更加小心，不要泄漏自己的基因。但是，我相信基因是无法保密的，掉下的头发、餐具上的唾液都会泄漏你的基因，你怎么防？将来的社会，暴力犯罪一定会很少。因为每个人的生物特征都登记在案，一举一动都有监控，无所不在的面部识别，只要你犯罪，瞬间就会抓到。

2、[Firefox 发布官方插件，用来隔绝 Facebook](https://www.mozilla.org/en-US/firefox/facebookcontainer/)

![](http://www.ruanyifeng.com/blogimg/asset/2018/bg2018050403.jpg)

最近，Facebook 成了追踪用户信息、为自己牟利的"邪恶公司"的代名词。为了跟它划清界限，或许也是为了"蹭热点"，Firefox 发布了一个官方插件，在浏览器里建立一个沙盒，用户在这个沙盒里面访问 Facebook，就可以避免被追踪。

有人根据这个插件，模仿做了一个 [Google 沙盒](https://addons.mozilla.org/en-US/firefox/addon/google-container/)，用来隔绝 Google 的追踪。

3、[福建启用个人身份二维码](http://media.people.com.cn/n1/2018/0422/c40606-29941531.html)

![](http://www.ruanyifeng.com/blogimg/asset/2018/bg2018050405.jpg)

> 目前在福州，通过数字公民身份码可以在人社窗口刷码识别社保卡，办理业务，还可以在部分药店刷码关联社保卡进行医保结算。此外，还可以在三坊七巷等景区实现刷码认证身份快速通行和在图书馆借阅图书。
> 
> 对于大家十分关注的信息安全，陈承平表示，和普通二维码不同，数字公民身份码在安全等级方面比普通二维码高出了许多。数字公民身份码具有防复制、防篡改、防抵赖等特质，在云、码、端三方形成用码安全闭环。
> 
> "很多大型写字楼门禁都非常严格。访客要进入基本上都需要登记身份证等信息，还要受访人员下来接才行。以后只需要扫一下数字身份二维码就可以通行。"据介绍， "数字公民"是指公民的互联网身份。它依托公安部的认证技术，通过绑定个人信息等，生成独一无二的CA证书，并匹配生成唯一的二维码存入手机，人证合一、证机合一、机人合一的"数字公民"个人身份信息就生成了。

以后我们每个人都会有一个自己的二维码，检验身份的时候，不是交身份证，而是让对方扫这个二维码。然后，配合脸部或指纹识别，做到身份验证。

4、[GPS 的新算法](https://eng.uber.com/rethinking-gps/)

![](http://www.ruanyifeng.com/blogimg/asset/2018/bg2018050406.jpg)

大城市里面，GPS 精确定位很困难，比如说用户到底在马路的左侧还是右侧？最近，Uber 公布了一种新的算法，来解决这个问题。

它的原理很简单，请看上图。因为所有卫星的位置都是已知的，如果某颗卫星的信号比预期弱，那么很可能被大楼挡住了。这意味着，你处在这栋大楼的阴影里面，因此可以根据信号强度，推测你的准确位置。

5、[亚马逊的"车内交货"](https://www.amazon.com/b?ie=UTF8&node=17051031011)

![](http://www.ruanyifeng.com/blogimg/asset/2018/bg2018050407.jpg)

亚马逊推出"车内交货"服务，快递不是送到你家，而是直接送到你的车里。前提是你需要授权亚马逊打开你的车，而且你的车需要具备远程开锁/关锁功能。京东应该迟早也会推这个服务。

6、[.app 顶级域名](https://www.blog.google/topics/developers/introducing-app-more-secure-home-apps-web/)

谷歌宣布新的顶级域名 .app 允许申请。该域名只能使用 HTTPS 协议，成为第一个全部使用加密协议的顶级域名。

7、[GitHub Pages 支持自定义域名的 HTTPS 访问](https://blog.github.com/2018-05-01-github-pages-custom-domains-https/)

以前，GitHub Pages 绑定的自定义域名，只能使用 HTTP 协议访问。如果想开通加密访问，只有使用官方域名 [myrepo.github.io](https://t.co/c4faaiTV58)。现在，GitHub 使用 Let's encrypt ，终于做到可以对自定义域名签发 HTTPS 证书了。

## 教程

1、[文章] [Meet the New Dialog Element](https://keithjgrant.com/posts/2018/meet-the-new-dialog-element/)

![](http://www.ruanyifeng.com/blogimg/asset/2018/bg2018050408.jpg)

HTML 5.2 新增了 &lt; dialog> 元素，这个元素将来一定会广泛使用，因为它提供了浏览器原生 Modal 窗口。

2、[教程] [Android 开发工程师面试指南](https://github.com/guoxiaoxing/android-interview)

3、[文章] [Active Record 与 Data Mapper 的差异](http://www.culttt.com/2014/06/18/whats-difference-active-record-data-mapper/)

关系型数据库的操作通常采用 ORM 库，将表格转换成对象。ORM 主要分成两种类型：Active Record 与 Data Mapper。本文讨论这两种模型的差异和适用场景。

4、[电子书][《计算与推断：数据科学基础》](https://ds8.gitbooks.io/textbook/content/)

本书是加州大学伯克利分校《数据科学导论》课程的教材，现在开源了。

5、[邮件列表] [WebAssembly 周刊](http://wasmweekly.news/)

每周给你发送一封邮件，介绍本周值得关注的 WebAssembly 消息。

6、[文章] [Optimizing React: Virtual DOM explained](https://evilmartians.com/chronicles/optimizing-react-virtual-dom-explained), by Evil Martians

React 的虚拟 DOM 机制的详细解释， JSX 代码如何变成虚拟 DOM 的数据结构。

7、[教程] [Canvas: Draw on the web](https://yuque.com/airing/canvas)

![](http://www.ruanyifeng.com/blogimg/asset/2018/bg2018050409.jpg)

国产的 HTML5 Canvas 教程。

> 从零基础开始，到Canvas API，再到基本动画与高级动画的实现，还会介绍视音频的处理、移动应用，最后如果有时间会扩展说一说3D、多人应用、游戏制作等。

8、[文章] [Node 10 的异步遍历器](http://2ality.com/2018/04/async-iter-nodejs.html)

上个月底发布的 [Node 10 ](https://nodesource.com/blog/what-you-can-expect-from-node-js-10)支持[异步遍历器](http://es6.ruanyifeng.com/#docs/async#%E5%BC%82%E6%AD%A5%E9%81%8D%E5%8E%86%E5%99%A8)，对 Stream 操作有重大影响。这篇文章介绍了如何用这个新语法读取文件内容，写法变得很自然。

## 工具

1、[谷歌的免费 IP 地址定位服务](https://blog.doit-intl.com/farewell-maxmind-geolocating-requests-with-google-load-balancer-for-free-7938f5adbef0)

![](http://www.ruanyifeng.com/blogimg/asset/2018/bg2018050410.jpg)

谷歌的负载均衡器转发 IP 请求时，会追加三个头信息字段，列出 IP 地址的定位。这个服务是免费的，但是目前只对部署于谷歌云的应用开放。不过，根据高春辉老师的测试，它的定位信息不是那么准确。

2、[tui.calendar](https://github.com/nhnent/tui.calendar)

![](http://www.ruanyifeng.com/blogimg/asset/2018/bg2018050411.jpg)

一个号称所有功能都包括的网页日历库。

3、[img-2](https://github.com/RevillWeb/img-2)

一个 WebComponent 组件，使用  &lt; img-2> 取代  &lt; img>，可以只显示第一屏的图片，其他图片通过 Web Worker 预下载，一旦该图片进入可视区域后再加载显示。.

4、[Stripe Atlas](https://stripe.com/atlas)

![](http://www.ruanyifeng.com/blogimg/asset/2018/bg2018050412.jpg)

Stripe 公司[宣布](https://stripe.com/blog/atlas-llc?c )了一项服务，帮助你几天内在美国德拉华州（公司法最宽松的州）注册一家公司，有限责任公司或股份公司都可以。

只要500美元，公司注册、税号、银行账户都帮你搞定。全世界用户都可以申请，看上去很有吸引力。

5、[Proton Native](https://proton-native.js.org/)

React Native 可以写桌面应用了，不必使用 Electron 了。有人写了一个渲染器，把 RN 渲染成桌面操作系统的 Native 应用。为了表示跟 Electron （电子）项目的竞争关系，它故意起名为 Proton（质子）。

## 文摘

1、[我上班的500强，在北京CBD待不下去了](http://daily.zhihu.com/story/9680192)

![](http://www.ruanyifeng.com/blogimg/asset/2018/bg2018050413.jpg)

大家有没有感觉，外企在国内普遍走下坡路？这到底是因为中国的市场环境越来越封闭，还是国内企业的竞争力越来越强......

> 供职于全球四大会计师事务所之一的Fiona，发现她的日本客户，好不容易从老旧的丰联大厦搬进国贸三期，占了一整层，今年又因为付不起租金，砍了三分之二的面积。
> 
> 张勇是一家大型制药企业的经理，近几年，他们公司年会从南非、澳大利亚和新西兰变成了三亚。年会大奖从欧洲双人游，成了最新款iPhoneX。
> 
> 年会一直被员工们认为是企业经营好坏的风向标。这几年，亚马逊（中国）的年会，地点从国贸到了大学的体育场，阳光普照奖从红酒变成橄榄油，再降级成充电宝。去年因为效益太差，年会干脆取消了。亚马逊（中国）工作两年的员工Helen说，亚马逊国内的零售部门近几年持续亏损，辉煌时市场份额有20%，如今降到了可怜的0.6%，"惨得很"。就连一时风头无二的图书领域，去年也亏损了50%。
> 
> 另一家备受讨论的跨国互联网公司是LinkedIn，去年夏天，CEO沈博阳离职，LinkedIn中国被微软收购。沈博阳离开后，他们花大力气打造的本土化社交app赤兔再也没有更新过了。
> 
> 还有更多的坏消息传来。先是跨国巨头希捷宣布关停其全球最大的生产基地苏州工厂。美国科技公司甲骨文被曝裁减200多个北京研发岗位。而通用电气则关闭了上海技术中心。

2、[信息安全从业者入门（入职）指南](https://zhuanlan.zhihu.com/p/35753603)

> 从第一份工作开始，十几年来我就在不断的面试信息安全人员，我看到了很多高潜力的人才，这些人的共性还是非常明显的。信息安全领域高度细分，从最初的网络安全，到系统安全和数据安全，再到后来的移动安全无线安全，甚至是车联网安全人工智能安全，从漏洞研究到系统搭建，从二进制到脚本。最后也有多方位精通集大成者的大神，毕竟是少数，无法复制。这里我只能探讨入门的方法，至于大神之路，我不是也不知道，老祖宗说"修行在个人"。

3、[探访三沙：为你揭开南国海疆的神秘面纱（组图）](http://news.sina.com.cn/o/2018-04-17/doc-ifzfkmth5504505.shtml)

![](http://www.ruanyifeng.com/blogimg/asset/2018/bg2018050414.jpg)

2018年4月11日，澎湃新闻记者走进海南省三沙市，为您揭开南国海疆的神秘面纱。街道上的一块路标标示着永兴岛北京、悉尼、纽约等地的直线距离。永兴岛的陆地面积虽小, 但在全国县级政权中管辖的国土海疆范围却最大。

4、[《中国企业家》：麦当劳汉化](http://www.iceo.com.cn/com2013/136/2018/0418/303241.shtml)

![](http://www.ruanyifeng.com/blogimg/asset/2018/bg2018050419.jpg)

去年8月，麦当劳（中国）整体卖给了中信集团，老板变成了中国人，控股公司还改名为金拱门。据中信集团透露，换成中国人主导以后，麦当劳（中国）的收益大幅增加，创了历史最好水平。报道里面举了一个麦当劳小程序开发的例子。

> 微信团队的李振在2017年和麦当劳合作开发小程序。他发现，对比2015年接入微信支付的时候，麦当劳中国的团队越来越具有互联网属性了。
> 
> 小程序的快速推出也算是让麦当劳的数字化团队重获信心的一个转折点。当时，麦当劳从四个部门----IT、市场、法务、财务"抽调"了7个人组成项目小组与微信的小程序团队对接，这让李振很惊讶，因为在他们合作的企业中，只有像蘑菇街、拼多多这样的互联网公司才能这么"灵活"地实现跨部门合作。这是麦当劳第一次尝试这样的工作方式，事实证明，这也是一种很有效的模式，最后麦当劳的小程序用了40天的时间上线，成为首批实现小程序应用的企业。
> 
> 发布小程序智能客服机器人的前一天，冯莲给张家茵打了一个电话，因为小程序数据后台在这天晚上突然开始掉数，这意味着机器人无法抓取所有的数据，有的问题可能回答不出来。以往遇到这样的问题，相关负责人可能会讨论半天，"什么时候修复，什么时候再上线"。不过这一次，张家茵直接拍板，决定按计划先上，边同步看客户端的投诉率，边补这个漏洞。
> 
> 投诉比想象中少得多，小BUG也没有影响用户对小程序的使用热情。麦当劳提供的数据显示，现在的小程序每天有20万~30万的浏览量，如果有活动的话，这个数量还会翻番。更重要的，是激活了原本习惯"等活儿干"的团队----之前更多是自上而下的任务布置，而现在，"这些小朋友会主动去看别人做的好的地方，来要活、找活干，"最近的一次，2月27日到3月3日连续5天，小程序每天都有一个新版本上线----甚至超越了互联网公司的产品迭代节奏。
 
5、[Algolia 的内部实现](https://stackshare.io/posts/how-algolia-built-their-realtime-search-as-a-service-product)

Algolia 是目前很红的搜索服务提供商。它最初的想法是提供手机应用离线搜索的 SDK。但是，不久就有客户咨询，能不能托管网站的搜索服务。Algolia 意识到，这可能是他们转型的机会。他们现在可以搜索 Pebble，WeFunder，CodeCombat 和 HackerNews 一系列网站。我们与他们坐下来，了解他们的搜索产品及其背后的技术，访问分为两部分：

* Algolia 是如何开始的，以及它与众不同的原因
* Algolia 背后的技术

## 电影

今年是电影[《甲方乙方》](https://baike.baidu.com/item/%E7%94%B2%E6%96%B9%E4%B9%99%E6%96%B9/17892)上映20周年。它的片尾曲《相知相爱》（[视频](https://v.qq.com/x/page/x0542id9tzu.html)），歌词非常好，韩磊演唱。

![](http://www.ruanyifeng.com/blogimg/asset/2018/bg2018050420.jpg)

> 经历的不会都记起，过去的不会都忘记  
> 有些往事有些回忆，成全了我也就陶冶了你。  
> 
> 相知相爱不再忧豫，从我们目光相遇的那一刻起  
> 相知相爱不再忧豫，让真诚常驻在我们的心里

## 本周图片

[地球上最长的不经过海洋的直线](http://www.thatsmags.com/china/post/10356/the-longest-straight-path-on-earth-starts-in-east-china-ends-in-liberia)

![](http://www.ruanyifeng.com/blogimg/asset/2018/bg2018050421.jpg)

从浙江省台州市南部的石塘镇开始向西走，然后是武汉、西安、青海。穿越喜马拉雅山脉后，你会到达塔吉克斯坦，通过乌兹别克斯坦，土库曼斯坦，伊朗，伊拉克，约旦，以色列，埃及（穿过开罗市中心！）、利比亚，尼日尔，布基纳法索，加纳，科特迪瓦，最后到达利比里亚。

由于地图投影，这条线看起来是弯的，但是它实际上是直线。

![](http://www.ruanyifeng.com/blogimg/asset/2018/bg2018050422.jpg)

## 本周金句

1、

现在有的投资人面对创业者直接怒吼，"少废话，我不管日活、月活，我就问你怎么活。"（摘自罗振宇 2017 跨年演讲）

2、

觉得内资企业不如外企优雅的人，可能很快都会被中国市场淘汰。每次物种变迁，都是最漂亮的物种先死。（《我上班的500强，在北京CBD待不下去了》一文的网友留言）

3、

习惯外企宽松氛围的人，可能很少能适应国内民企，因为民企往往是以老板意志为主。（同上）

## 欢迎订阅

这个专栏每周五发布，同步更新在我的[个人网站](http://www.ruanyifeng.com/blog)、[微信公众号](http://weixin.sogou.com/weixin?type=1&amp;query=%E9%98%AE%E4%B8%80%E5%B3%B0%E7%9A%84%E7%BD%91%E7%BB%9C%E6%97%A5%E5%BF%97)和[语雀](https://yuque.com/ruanyf/share/)。

微信搜索"__阮一峰的网络日志__"或者扫描二维码，即可订阅。

![](http://www.ruanyifeng.com/blogimg/asset/2018/bg2018042311.jpg)

（完）

