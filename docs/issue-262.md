# 科技爱好者周刊（第 262 期）：告别密码

这里记录每周值得分享的科技内容，周五发布。

本杂志[开源](https://github.com/ruanyf/weekly)，欢迎[投稿](https://github.com/ruanyf/weekly/issues)。另有[《谁在招人》](https://github.com/ruanyf/weekly/issues/3222)服务，发布程序员招聘信息。合作请[邮件联系](mailto:yifeng.ruan@gmail.com)（yifeng.ruan@gmail.com）。

## 封面图

![](https://cdn.beekka.com/blogimg/asset/202307/bg2023071309.webp)

你以为这是一群羊在草原上吃草。错了，这是智利阿塔卡马沙漠的阵列望远镜，一共66台天线，大部分直径12米，高度15米。（[via](https://eso.org/public/images/potw2328a/)）

## 告别密码

上网体验最差的环节，肯定是密码。

![](https://cdn.beekka.com/blogimg/asset/202307/bg2023071203.webp)

互联网发展了20多年，所有环节都巨大改善，只有密码除外，还是20年前的用法。

更准确的说，它的用户体验比20年前更差了。密码的强度要求现在越来越高，一般不能少于8个字符，还要包括特殊符号。另外，除了密码，通常还有其他验证（短信、图片识别、OTP 时间码等等）。

![](https://cdn.beekka.com/blogimg/asset/202307/bg2023071204.webp)

最让人无语的是，即使变得如此麻烦，依然不能杜绝密码被盗、被破解、被钓鱼的风险。

多年来，业界一直努力，试图解决密码问题。近两年终于有了突破，各大公司达成一致，设计出了一套**密码的替代方案：密钥登陆，英文叫做 Passkey**。

![](https://cdn.beekka.com/blogimg/asset/202307/bg2023071205.webp)

Passkey 这个方案可以做到，登录不需要密码，解决了上面提到的所有问题，而且用户很容易上手，主要厂商已经全部支持。

2022年 WWDC 大会，[苹果宣布](https://developer.apple.com/passkeys/)支持 Passkey。

![](https://cdn.beekka.com/blogimg/asset/202307/bg2023070801.webp)

2023年5月，[谷歌](https://blog.google/technology/safety-security/the-beginning-of-the-end-of-the-password/)和[微软](https://www.microsoft.com/en-us/security/blog/2023/05/04/how-microsoft-can-help-you-go-passwordless-this-world-password-day/)同时宣布，全面接入 Passkey。

![](https://cdn.beekka.com/blogimg/asset/202307/bg2023071206.webp)

![](https://cdn.beekka.com/blogimg/asset/202307/bg2023070803.webp)

今天，我就简单讲讲，Passkey 到底怎么回事。

其实，手机 App 早就做到了“无密码登录”，按一下指纹，或者人脸识别，就可以登录，完全不需要密码。

![](https://cdn.beekka.com/blogimg/asset/202307/bg2023071207.webp)

于是，很早就有人想到了，可以设计一套通用机制，让网站也去调用手机上面的硬件识别，从而彻底告别密码。这就是 Passkey 的由来。

具体来说，Passkey 之所以不要密码，因为采用了密钥登录。**网站不再保存用户密码，而是保存用户的公钥**。登录时，用户必须用自己的私钥，解开公钥加密的随机数，从而确认身份。

这也意味着，用户要自己保存私钥。这是很麻烦的事情，因此 Passkey 协议的重点，就在于密钥的生成和保管彻底自动化了。

**Passkey 要求用户必须配备一个“身份管理器”**（通常由操作系统提供），这个“身份管理器”负责生成密钥，然后公钥交给网站保存，私钥由它自己保存。

等到用户登录网站，需要私钥证明自己身份时，网站就要向用户选定的“身份管理器”发出请求。这时，“身份管理器”就会调用操作系统的指纹识别或者人脸识别，要求用户完成验证。如果用户通过了，“身份管理器”就允许用户使用保存在里面的私钥。

目前，iOS 和安卓已经支持 Passkey，自带“身份管理器”，有些笔记本（比如 MacBook）也支持。如果是台式机，没有任何识别设备，浏览器就会给出二维码或者蓝牙，让手机代为验证。

“身份管理器”也可以做成独立的硬件（比如 Yubikey），这就需要花钱买了。

![](https://cdn.beekka.com/blogimg/asset/202307/bg2023071208.webp)

Passkey 是一个很复杂的协议，上面我说的只是它的核心思路，也不知道说清楚了没有。但是，**对于用户来说，它是很简单的**，就是按一下指纹，或者扫一下人脸，就登录网站了。至于密码，忘了它吧。

我预测，再过一两年，等到这个协议的封装库和框架出台，它就会迅速流行，大大减少密码的使用。

大家现在可以去[Passkeys.io](https://passkeys.io)，亲身体验一下无密码登录，更详细的细节请参考后面的文章（[1](https://www.slashid.dev/blog/passkeys-security-implementation/)，[2](https://css-tricks.com/passkeys-what-the-heck-and-why/)，[3](https://www.stavros.io/posts/clearing-up-some-passkeys-misconceptions/)）。

## 科技动态

1、[木屑马桶](https://www.dezeen.com/2023/03/22/woodio-wood-composite-toilet/)

一家芬兰公司推出了木屑马桶，从座圈到底座，都是木屑做的。

![](https://cdn.beekka.com/blogimg/asset/202303/bg2023032910.webp)

这家公司在木屑中加入树脂材料，使其完全防水，同时非常牢固。相比陶瓷马桶，主要好处是环保，可以大量减少二氧化碳排放（因为陶瓷需要烧制），而且很轻。

![](https://cdn.beekka.com/blogimg/asset/202303/bg2023032909.webp)

![](https://cdn.beekka.com/blogimg/asset/202303/bg2023032911.webp)

下一步，该公司会继续推出木屑洗脸盆和木屑浴缸 。

![](https://cdn.beekka.com/blogimg/asset/202303/bg2023032908.webp)

2、[干扰无人车](https://www.thedrive.com/news/rebels-are-disabling-waymo-cruise-robotaxis-with-traffic-cones)

旧金山市允许无人驾驶出租车上路，你可以用软件叫车。

美国网友近日发现了一个重大 Bug，根据他发布的视频，只要把停车锥放在引擎盖上（下图），这辆无人驾驶车就会立刻自动停下来，不再行驶，哪怕是在路中央。

![](https://cdn.beekka.com/blogimg/asset/202307/bg2023070704.webp)

![](https://cdn.beekka.com/blogimg/asset/202307/bg2023070703.webp)

这个 Bug 好像不那么容易修复。这个事件凸显了无人驾驶的困难，软件如何判别恶意破坏呢。

3、[最热的一天](https://apnews.com/article/global-record-breaking-heat-july-27069b5380117534d78f1f40a6edc7a0)

美国缅因大学有一个全球气候模型，根据气象站、卫星数据、计算机模拟的数据，得到全球每个地点的实时气温。

他们发现，7月6日是有纪录以来最热的一天，全球平均气温达到17.23摄氏度。更糟糕的是，第二名和第三名，分别是今年7月5日和7月4日。

![](https://cdn.beekka.com/blogimg/asset/202307/bg2023071105.webp)

上图是[他们官网](https://climatereanalyzer.org/clim/t2_daily/)的历年气温图表，那根最粗的黑线就是2023年。从6月开始，黑线就快速上升，远远超出过以往任何一年。

![](https://cdn.beekka.com/blogimg/asset/202307/bg2023071106.webp)

另外，根据全球气温分布图（上图），可以看到现在的地球，整个低纬度和中纬度都是高温区，只有高原地区除外，非常触目惊心。

4、[最大的 LED 装置](https://edition.cnn.com/2023/07/05/travel/msg-sphere-las-vegas-venue-cec/index.html)

拉斯维加斯的威尼斯酒店，最近建了一个球馆，非常奇特。

它是全球最大的球形建筑，同时也是全球最大的 LED 装置，高111米，宽516米。

![](https://cdn.beekka.com/blogimg/asset/202307/bg2023071107.webp)

它的外壳都是 LED 屏幕，可以对外播放球形视频，夜晚亮灯，极其夺目。

![](https://cdn.beekka.com/blogimg/asset/202307/bg2023071108.webp)

![](https://cdn.beekka.com/blogimg/asset/202307/bg2023071109.webp)

![](https://cdn.beekka.com/blogimg/asset/202307/bg2023071110.webp)

它的内部则是一个正常的球馆，可以举办大型体育比赛和演唱会。

![](https://cdn.beekka.com/blogimg/asset/202307/bg2023071111.webp)

这样的装置肯定会成为地标，以及游客的最爱，但同时也是一个高耗能的巨大光污染。

![](https://cdn.beekka.com/blogimg/asset/202307/bg2023071112.webp)

## 文章

1、[“进化”这个词正确吗？](https://mp.weixin.qq.com/s/5fF7o8EePoIhqZ4x0KrTaQ)（中文）

![](https://cdn.beekka.com/blogimg/asset/202307/bg2023070511.webp)

本文讨论一个观点，“进化”（evolution）这个词是否应该改成“演化”？因为生物更多是在适应环境，不一定变得进步。

2、[我如何创立海外一人 SaSS 公司](https://mp.weixin.qq.com/s/x6PLSIMn_1qcKnXWPT-J-Q)（中文）

作者讲述自己如何一个人将面向海外用户的 SaSS 服务，注册成公司。

3、[爱奇艺 TV 版如何占用用户带宽](https://news.mydrivers.com/1/922/922097.htm)（中文）

![](https://cdn.beekka.com/blogimg/asset/202307/bg2023071201.webp)

电视机装了爱奇艺 TV 版，息屏状态下，居然在上传数据，只有拔掉电源才会停止。它默认把用户机器用作 CDN 节点。

4、[全方位对比 Postgres 和 MySQL (2023 版)](https://mp.weixin.qq.com/s/xf7qb4oAVHyi4_U32FSKPA)（中文）

![](https://cdn.beekka.com/blogimg/asset/202307/bg2023071318.webp)

Postgres 和 MySQL 是两大最主流的关系型数据库，本文对它们进行全方位的比较。（[@milasuperstar](https://github.com/ruanyf/weekly/issues/3269) 投稿）

5、[如何破解滑动验证码？](https://mp.weixin.qq.com/s/iK_JkVRrh5vIRBjnQbDOyw)（中文）

![](https://cdn.beekka.com/blogimg/asset/202307/bg2023071316.webp)

本文介绍了图片滑动验证码的实现原理和流程分析，以及如何破解。（[@niumoo](https://github.com/ruanyf/weekly/issues/3266) 投稿）

6、[优化人工智能生成的二维码](https://antfu.me/posts/ai-qrcode-refine)（英文）

![](https://cdn.beekka.com/blogimg/asset/202307/bg2023071313.webp)

作者尝试让二维码，尽可能像人类可以看懂的图片，同时机器还能扫描。上图其实是一个二维码，本文记录了优化过程。（[@POKEZHANG](https://github.com/ruanyf/weekly/issues/3247) 投稿）

7、[React 服务器组件的问题](https://marmelab.com/blog/2023/06/05/react-angularjs-moment.html)（英文）

![](https://cdn.beekka.com/blogimg/asset/202306/bg2023060701.webp)

React 官方开始推广服务器组件，本文作者表示担忧，这会让现有的很多写法都失效。

8、[Chrome 支持模块名映射](https://web.dev/import-maps-in-all-modern-browsers/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202305/bg2023050302.webp)

Chrome 浏览器加载 JS 模块时，需要给出模块的 URL。但是，现在只要指定模块名与 URL 之间的映射，浏览器就可以从模块名加载。

9、[中国与美国的云服务竞争](https://interconnected.blog/us-vs-china-a-cloud-proxy-war/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202307/bg2023070510.webp)

美国政府正考虑把中国的云服务商（阿里云、腾讯云、华为云）赶出美国机房。本文分析中美云服务商在东南亚、拉美和中东的全球竞争。

## 工具

1、[Connect-Web](https://connect.build/)

![](https://cdn.beekka.com/blogimg/asset/202208/bg2022080504.webp)

一个 TypeScript 库，用于从浏览器调用 RPC 服务器，参见[介绍文章](https://buf.build/blog/connect-web-protobuf-grpc-in-the-browser)。

2、[xBrowserSync](https://www.xbrowsersync.org/)

![](https://cdn.beekka.com/blogimg/asset/202212/bg2022122212.webp)

一个浏览器的同步插件，最大特点是跨浏览器同步，比如安卓的 Chrome 同步了桌面的 Firefox。

3、[I Don't Care About Commit Message](https://github.com/mefengl/vscode-i-dont-care-about-commit-message)

VS Code 插件，使用 AI 自动生成代码提交的 Commit 摘要，你就不必自己写了。它需要 OpenAI API Key。（[@mefengl](https://github.com/ruanyf/weekly/issues/3248) 投稿）

4、[React1s](https://github.com/aaamoon/react1s)

![](https://cdn.beekka.com/blogimg/asset/202307/bg2023071317.webp)

浏览器插件，本地开发 React 项目时，点击页面元素，就会跳转到编辑器的对应组件位置。（[@aaamoon](https://github.com/ruanyf/weekly/issues/3268) 投稿）

5、[TGSCAN](https://github.com/tgscan-dev/tgscan)

![](https://cdn.beekka.com/blogimg/asset/202307/bg2023071314.webp)

开源的 Telegram 搜索引擎。（[@HandelDev](https://github.com/ruanyf/weekly/issues/3263) 投稿）

6、[LeaferJS](https://www.leaferjs.com/)

![](https://cdn.beekka.com/blogimg/asset/202307/bg2023071312.webp)

一个国产的 Canvas 2D 图形渲染引擎，追求极致性能。（[@leaferjs](https://github.com/ruanyf/weekly/issues/3246) 投稿）

7、[AltTab](https://github.com/lwouis/alt-tab-macos)

![](https://cdn.beekka.com/blogimg/asset/202305/bg2023051203.webp)

这个软件可以让 Mac 电脑具备 Windows 的 alt + tab 键的功能，方便地切换各个窗口。

8、[Rsync time backup](https://github.com/laurent22/rsync-time-backup)

一个命令行工具，类似于苹果的 Time Machine 备份工具，对文件和目录进行增量备份，以后可以恢复到任意时点。它支持跨平台使用。

9、[XState](https://xstate.js.org/)

![](https://cdn.beekka.com/blogimg/asset/202305/bg2023051501.webp)

一个 JS 库，实现了有限状态机，设计得很简洁，可以用来学习有限状态机。

10、[hat-syslog](https://github.com/hat-open/hat-syslog)

![](https://cdn.beekka.com/blogimg/asset/202305/bg2023051602.webp)

Linux 系统日志 Syslog 的图形操作工具。

## 资源

1、[美国无线电频谱表](https://www.beautifulpublicdata.com/the-united-states-radio-frequency-allocation-chart/)

![](https://cdn.beekka.com/blogimg/asset/202302/bg2023020809.webp)

美国政府发布的无线电频谱表，可视化展示美国的所有频段分配，直接下载 [PDF 文件](https://ntia.gov/sites/default/files/publications/january_2016_spectrum_wall_chart_0.pdf)。

2、[编写你自己的 React、ProseMirror 和 Redux](https://nytimes.github.io/oak-byo-react-prosemirror-redux/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202302/bg2023020811.webp)

《纽约时报》技术团队编写的培训教程，指导新人自己实现前端的 React 等基础库。

3、[StockAI.Trade](https://stockai.trade/)

![](https://cdn.beekka.com/blogimg/asset/202307/bg2023071315.webp)

基于 ChatGPT 的 AI 选股工具（仅限中国 A 股）。（[@yvonuk](https://github.com/ruanyf/weekly/issues/3265) 投稿）

4、[GifCities](https://gifcities.org/)

![](https://cdn.beekka.com/blogimg/asset/202208/bg2022082303.webp)

上个世纪的 GeoCities 平台存有海量的 Gif 小动画。这个网站有所有这些文件的存档，并提供搜索。

5、[FlagWaver](https://krikienoid.github.io/flagwaver/)

![](https://cdn.beekka.com/blogimg/asset/202211/bg2022111201.webp)

这个网页模拟旗帜飘扬的效果，你可以上传自己的图片作为旗帜，然后定制各种参数。

## 图片

1、[美联航811航班事故](https://admiralcloudberg.medium.com/violent-night-the-near-crash-of-united-airlines-flight-811-ba72b3349ff0)

1989年2月24日，一架波音747执行美联航811航班，从洛杉矶飞往澳大利亚悉尼，中途在夏威夷停留。

起飞后17分钟，机组人员听到一声巨响，发现前货舱门被炸飞。

![](https://cdn.beekka.com/blogimg/asset/202301/bg2023011710.webp)

爆炸的力量如此巨大，在机身上撕开了一个大洞，机舱的五排座位都被掀起，上面的9个乘客瞬间就被弹出飞机。

![](https://cdn.beekka.com/blogimg/asset/202301/bg2023011711.webp)

这9名乘客全部丧生。其中有一名乘客坐在走道对面，不属于爆炸的核心区域（上图最左侧箭头）。由于他没有系上安全带，是被气流带出去的，如果系了，很可能幸存下来。

下面是机上乘客拍摄的事故发生后的机内景象，氧气面罩全都落下了，但是里面没有氧气，机内到处都是呼呼的风声。

![](https://cdn.beekka.com/blogimg/asset/202301/bg2023011712.webp)

![](https://cdn.beekka.com/blogimg/asset/202301/bg2023011713.webp)

机长一瞬间认为死定了，但是后来发现，飞机还能飞行，只是爆炸一侧的两个发动机发生故障了。

机组人员想尽办法，将飞机重新飞回了夏威夷，在机场平安落地。

![](https://cdn.beekka.com/blogimg/asset/202301/bg2023011714.webp)

![](https://cdn.beekka.com/blogimg/asset/202301/bg2023011715.webp)

事故调查人员一开始认为是炸弹导致的，但后来确定原因是货舱门的电动锁有设计失误，起飞后并未切断门锁的马达电源，导致飞行中货舱门意外打开，酿成大祸。

事后，所有波音747的门锁都更换了设计。并且，原来的外开门改成了内开门，在高空中，由于机内的气压大于机外，内开门是无法打开的。以后就再也没有发生过类似事故。

![](https://cdn.beekka.com/blogimg/asset/202301/bg2023011716.webp)

## 文摘

1、[有效笔记的三个原则](https://www.collider.space/issue-1-effective-note-taking/)

![](https://cdn.beekka.com/blogimg/asset/202307/bg2023071319.webp)

三个原则可以帮助你有效地记笔记。

（1）笔记必须符合你的思维方式。

做笔记要按照自己的思考方式，不能原封不动地按照老师（或者书本）的讲解方式。这样不仅你写起来更轻松，而且将来回顾笔记的时候，你也更容易理解自己当时的想法。

（2）笔记必须代表你的知识。

笔记不要仅仅复制/粘贴他人的话语，而要用自己的语言表达。你不妨标记清楚，哪些地方是已经理解的，哪些地方还没有理解或者有疑问。

（3）笔记必须可以轻松检索。

为了最大限度利用自己的笔记（其实也是节约自己的时间），它必须可以方便地检索。你要为每个部分写一个标题，并且定期整理出一份目录。

## 言论

1、

跟大家想的不一样，编程并不需要掌握深刻的思想，而是需要某种程度上记住文档，以便用某些固定词汇，清晰表达我们的想法。

-- [《编程需要知识的广度》](https://typeclasses.substack.com/p/programming-requires-breadth-of-knowledge)

2、

如果你真的爱护环境，那么买车的时候，你不是买一辆电动车，而是买一辆旧车，并尽量少用它。

-- [《我喜欢电动车，但觉得被骗了》](https://www.theguardian.com/commentisfree/2023/jun/03/electric-vehicles-early-adopter-petrol-car-ev-environment-rowan-atkinson)

3、

如果你在手机上看这部电影，你将永远不会体验到它。你认为你已经体验过了，但事实是没有。

真是太糟了，你以为在该死的电话机上看电影，算看过电影吗。去看真实的电影吧。

-- [大卫·林奇](https://onthearts.com/p/how-wittgenstein-watched-movies)，著名的美国电影导演，谈有些观众在手机上看他的作品

4、

理想的工人是机器人，永不疲倦，永不休息，只要最基本的维护。如果崩溃了，很容易被复制和替换。

你越能够不休息地工作，越说服自己像机器人一样工作，你在市场上的就业价值就越大。

-- [《休息不是为了优化》](https://theconvivialsociety.substack.com/p/you-cant-optimize-for-rest)

## 历史上的本周

[互联网最喜欢的行为模式](http://www.ruanyifeng.com/blog/2022/07/weekly-issue-215.html)（2022 #215）

[全端 App 的时代](http://www.ruanyifeng.com/blog/2021/07/weekly-issue-165.html)（2021 #165）

[保护你的 DNA，不要泄漏](http://www.ruanyifeng.com/blog/2020/07/weekly-issue-115.html)（2020 #115）

[周刊开设“谁在招人”的招聘服务](http://www.ruanyifeng.com/blog/2019/07/weekly-issue-65.html)（2019 #65）

## 赞助商广告位

欢迎赞助周刊，有意请邮件联系（yifeng.ruan@gmail.com）。

（完）

