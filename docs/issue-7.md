# 每周分享第 7 期

这里记录过去一周，我看到的值得分享的东西，每周五发布。

![](https://www.wangbase.com/blogimg/asset/201805/bg2018053001.jpg)

（题图：海底都是矿泉水瓶。）

我看到一篇《国家地理》杂志的[报道](https://news.nationalgeographic.com/2018/05/plastic-bag-mariana-trench-pollution-science-spd/)。地球最深的地方是太平洋的马里亚纳海沟，深达海平面下11公里。2016年，一艘潜水艇到达那里，拍了一批照片回来。最近，科学家研究了这批照片，发现里面有一个透明的东西，不知道是什么。最初以为那是某种未知的生物，后来确认了：那是一个塑料袋。

如果地球表面最难到达的地方都有垃圾，那么不难想象，海洋里面的垃圾有多少了！我常想，人类产生那么多垃圾，将来怎么办？不要说别的，单单是快递的包装，就会产生多少垃圾。我的个人消费其实很少，但是每个月产生的垃圾，足以填满一个0.5立方米的垃圾箱。

老实说吧，人类对垃圾无能为力。有机垃圾可以焚烧，其他垃圾目前只能填埋，由于我国目前没有垃圾分类制度，[80%以上](http://www.wangqi19.com/NWCI/Files/J10.3_Cover/Introduction/Analysis%20of%20Landfills%20in%20China.pdf)的垃圾都是填埋的。你以为垃圾拉走了，就消失了吗？错，它们埋到了地里，污染了土壤和水源，最终受害的还是人类自己。全中国一天要产生多少垃圾，它们都埋在国土的各个角落，想想就觉得很恐怖。更恐怖的是，社会的主流观念是消费主义（消费越多越幸福），那么将来的垃圾只会增加，不会减少。We are doomed.

## 新闻

1、[德国政府通过"自动驾驶算法准则"](https://360.here.com/autonomous-cars-get-a-lesson-in-ethics)

德国政府制定了《自动驾驶算法要求》，对自动驾驶提出了一系列必须满足的法律条件，下面是其中的几条。

> * 发生事故时，人的生命安全高于财产安全或动物安全。
> * 发生事故时，任何基于年龄，性别，种族等方面的歧视都是不允许的。（这就是说，不能选择避开孩子、撞向老人。）
> * 必须有保存驾驶记录的"黑匣子"。
> * 紧急情况时，人类可以重新获得汽车的控制权。

2、[未来的网站注册流程](https://www.w3.org/TR/webauthn/)

目前，W3C 正在设计一个基于密钥的网站注册流程。以后，注册用户时不需要密码，也不用担心破解。

简单说，就是注册的时候，浏览器自动生成公钥和私钥，然后把公钥发给服务器，私钥保留在本地。以后登录的时候，用户只需要输入用户名，浏览器用私钥加密后发给服务器，如果能被公钥解开，就证明了用户的身份。这里有两篇文章（[1](https://pomcor.com/2018/05/11/cryptographic-authentication-is-not-that-easy-after-all/)，[2](https://pomcor.com/2018/04/13/easy-password-free-cryptographic-authentication-for-web-applications/)）讨论了其中的细节，并提供了 Demo。

3、[打印的卵巢](https://www.smithsonianmag.com/smart-news/functional-3d-printed-ovary-transplanted-mice-180963337/?no-ist)

![](https://www.wangbase.com/blogimg/asset/201805/bg2018053002.jpg)

美国科学家使用3D打印机做出来的明胶卵巢，替换掉小白鼠的天然卵巢，结果居然有效。7只实验老鼠有3只产下了健康的后代。

《未来简史》描述的场景正在变成现实：未来的人们不再是纯自然的产物，而是半自然、半人工的一种新人类。

4、[AI 的发展速度](https://blog.openai.com/ai-and-compute/?)

有研究称，2012年开始， AI 的运算速度每过3.5个月翻一倍，至今已经增加了30多万倍。相比之下，摩尔定律（每18个月翻一倍）简直慢得不值一提。要是按照摩尔定律，AI 的运算速度只会增长12倍。

总之，AI 的进化速度远远快于人类的想象，在你不知不觉之间，机器的聪明已经超乎想象。

5、[章鱼可能是外星人](http://bgr.com/2018/05/17/octopus-aliens-cephalopods-research-study/)

![](https://www.wangbase.com/blogimg/asset/201805/bg2018053003.jpg)

科学家称，章鱼（包括鱿鱼和乌贼）可能起源于地球以外的其他地方，因为章鱼的基因组非常复杂，与其他动物很不相同。

> 科学家怀疑，到达地球的外星生物被冰冻在一颗冰冷的彗星中，它们的后代就变成了章鱼。
> 
> "它的大脑和复杂的神经系统，相机般的眼睛，灵活的身体，通过切换颜色和形状的能力进行即时伪装，这些特征都是突然出现在生物进化之中。"。

5、[随身咖啡机](http://www.alphr.com/technology/1008859/makita-coffee-maker-drill-batteries)

![](https://www.wangbase.com/blogimg/asset/201805/bg2018053004.jpg)

很多程序员和办公室人员都有喝咖啡的习惯。这导致咖啡机简直成了办公室必备品。现在看上去，那些不在办公室工作的人们，也越来越多地喝咖啡。

一家日本的电钻制造商 Makita 推出了随身咖啡机，据说主要用来满足建筑工人在工地喝咖啡的需求。最大亮点在于，它的锂电池就是手持电钻的电池。钻孔作业结束后，可以把电池拆下来，装在咖啡机上。一块电池可以煮约640毫升的咖啡，或约5.3杯。

6、[GDPR 生效，Whois 查询实质关闭](https://www.alibabacloud.com/zh/notice/yuming0525)

5月25日，欧盟《通用数据保护条例》生效，要求网站不得在没有用户同意的情况下，使用或泄漏用户的个人数据。一个直接后果就是，Whois 域名查询以前有用户的姓名、地址、电话，现在都不再返回了，你只能查到注册商的信息。下面是阿里云的公告。

> 根据 ICANN 政策要求，自2018年5月25日起，阿里云所提供的 WHOIS 查询服务的公开信息中将不再显示域名注册人、管理联系人和技术联系人的个人数据。对于阿里云管理的域名，如需联系相应域名持有人、管理联系人或技术联系人，可通过填写域名信息查询页面的在线表单发送信息。

## FrontJS

本期《每周分享》很高兴得到了前端错误监控平台 [FrontJS](https://www.frontjs.com/?utm_source=ruanyf)（[www.frontjs.com](http://www.frontjs.com/?utm_source=ruanyf)）的赞助。

[FrontJS](https://www.frontjs.com/?utm_source=ruanyf) 是蒲公英开发者服务平台旗下产品，蒲公英成立于2014年，旗下产品还有有蒲公英移动应用内测分发平台和Bug 管理平台 Tracup 。其中，内测分发平台在全球有160万注册开发者，共计上传了超过800万款 APP。

[![蒲公英 - 高效安全的内测应用发布、管理平台.png](https://www.wangbase.com/blogimg/asset/201806/bg2018060601.jpg "")
](https://www.frontjs.com/?utm_source=ruanyf)

[FrontJS](https://www.frontjs.com/?utm_source=ruanyf) 是一个前端错误的监控平台，可以监控 Web 和小程序页面的性能，以及收集异常信息。千万级访问量的数字货币交易平台火币网，就使用 [FrontJS](https://www.frontjs.com/?utm_source=ruanyf) 监控前端错误。下面就是它的 JS 异常监控页面，收集 console 中的 log / warn / error 的信息。

[![](https://www.wangbase.com/blogimg/asset/201806/bg2018060602.jpg)](https://www.frontjs.com/?utm_source=ruanyf)

它的一些主要特点：（1）提供API，可以对上报行为进行定制化的调整；（2）网络请求监控，收集 XHR 耗时、错误、超时、跨域等信息；（3）资源监控，收集加载失败的资源以及跨域资源的 URL；（4）堆栈追踪技术，精确获取更多异常上下文信息；（5）页面性能监控，包含 DNS 时间， DOM 渲染时间等信息，可以组合计算出首屏时间以及白屏时间； （6）事件流，可以了解异常发生时的上下文环境，帮助测试部门快速复现错误；（7）数据可视化工具，所有数据均可以重新组织并生成图表。

[![](https://www.wangbase.com/blogimg/asset/201806/bg2018060603.jpg)](https://www.frontjs.com/)

欢迎大家使用 [FrontJS](https://www.frontjs.com/?utm_source=ruanyf)。向页面右下方客服说明来自阮一峰博客，可以获得50元代金券或延长10天的体验期。

## 教程

1、[网站] [DiscoverDev.io](https://www.discoverdev.io/)（英文）

该网站每天列出5～10篇当天值得阅读的软件文章。

2、[视频] [Facebook 的机器学习视频教程](https://research.fb.com/the-facebook-field-guide-to-machine-learning-video-series/)（英文）

《Facebook 机器学习指南》是由 Facebook 广告机器学习团队开发的六部分的视频系列。该系列分享了最好的现实世界实践，并提供了如何将机器学习功能应用于实际问题的实用技巧。

3、[文章] [气压的知识](https://www.thoughtco.com/low-and-high-pressure-1434434)（英文）

气压就是大气的压力，一个标准大气压等于760毫米汞柱。有的地方气压高，有的地方气压低，这是风形成的根本原因，台风就是巨大的热带低气压。地球上，赤道由于高温蒸发是低压区，极地由于冷空气下降是高压区，这就形成了地球的风带。

4、[教程] [Flask 教程的中文版](https://github.com/luhuisicnu/The-Flask-Mega-Tutorial-zh)（中文）

Flask 是 Python 的 Web 开发框架。这个教程教你如何用 Python 和 Flask 来创建 Web 应用。

5、[资料] [arl](https://github.com/kaxap/arl)

各种语言最受欢迎的项目，按照 GitHub Star 的数量排行。

6、[资料] [谷歌官方的 Bash 脚本风格要求](https://google.github.io/styleguide/shell.xml)（英文）

Bash 脚本的语法远比编程语言宽松，你很容易写出难以阅读、风格混乱的脚本，可以参考谷歌如何写 Bash 脚本。

7、[文章] [不必要的 HTTP 头信息](https://www.fastly.com/blog/headers-we-dont-want)（英文）

本文统计了30个最常见的 HTTP 头信息，逐个讨论哪些是必要的，哪些是没必要的。

8、[文章] [响应式表格的两种解法](http://lea.verou.me/2018/05/responsive-tables-revisited/)（英文）

![](https://www.wangbase.com/blogimg/asset/201805/bg2018053008.jpg)

手机怎么显示表格？常见的方法是将表格转为键值对。Lea Verou 给出了两种纯 CSS 的解法，不需要任何多余的 HTML 标签。

一种是使用 text-shadow 属性复制表头，另一个使用 element 方法复制表头。但是，这两种方法都有局限，前者是单元格里不能有换行，后者是只有 Firefox 支持。

## 工具

1、[DocHub](https://github.com/TruthHun/DocHub)

个人写的百度文库的开源仿制品。

2、[ShellCheck](https://www.shellcheck.net/)

Bash 脚本的开源语法检查器。

3、[Crunch](https://github.com/chrissimpkins/Crunch)

一个效果非常好的 PNG 图片压缩工具。

4、[nomulus](https://github.com/google/nomulus)

谷歌开源自家的顶级域名注册管理系统，也就是 [https://registry.google](https://registry.google) 背后的系统。如果你是域名注册商，可能用得到这个东西。

5、[Termux](https://termux.com/)

安卓设备的终端仿真器，用来在安卓设备上模拟 Linux 环境。

6、[Material-UI](https://github.com/mui-org/material-ui/releases/tag/v1.0.0)

![](https://www.wangbase.com/blogimg/asset/201805/bg2018053009.jpg)

大家知道，谷歌的材质化组件（Material Design）是 Angular 专用的。社区维护的 React 移植版Material-UI，今天发布 1.0 版，已经完全可用了。以后，React 项目照样可以有官方安卓 UI 的那种材质化效果。

7、[tlsh-js](https://github.com/idealista/tlsh-js)

一个生成字符串哈希的 JavaScript 库。它的特点是，字符串越相似，或者重复同样的模式，生成的哈希也越相似，可以用来计算两个字符串的相似程度。

8、[libui](https://github.com/andlabs/libui)

![](https://www.wangbase.com/blogimg/asset/201805/bg2018053010.jpg)

一个使用 C 语言写的 UI 组件库，具有很好的跨平台性，可以在不同的平台上获得相同的图形界面。

## 文摘

1、[鲁迅的平面设计](http://new.qq.com/omn/20180119/20180119A0VPMZ.html)

一提起鲁迅，很多人第一反应都是，一位奋笔疾书、忧国忧民的文学巨匠。但你可能不知道，鲁迅其实不只是个码字工，还是当之无愧的民国第一设计师。

在那个没有PS的年代，迅哥儿凭着自己的才华和审美，几乎包揽了自己的作品以及各大杂志的封面和装帧设计。对于书籍封面，鲁迅最擅长的就是把各种字体玩出新花样，每一种在今天都足以让各大字库膜拜。

![](https://www.wangbase.com/blogimg/asset/201805/bg2018053011.jpg)


上图是《艺术论》的封面，书名用双线描字体，嵌入抽象几何图案的缺口，对应着本书"从艺术规律中"的用意。

![](https://www.wangbase.com/blogimg/asset/201805/bg2018053012.jpg)

上图是《而已集》的封面，由印刷体美术字再次突破，转变为自由美术体，更加灵动且古雅。

2、[30字短文《什么是机器学习》](https://twitter.com/PPathole/status/995294997552381955)

> 人：11×11？
> 计算机：65
> 人：胡扯，明明是121。到底等于什么 11x11？
> 计算机：121

3、[Git 的主要维护者滨野纯访谈](https://linux.cn/article-2052-1.html)

最近，谷歌[宣布](https://opensource.googleblog.com/2018/05/introducing-git-protocol-version-2.html)发布 Git 协议2.0版。我很奇怪，为什么是谷歌发布 Git 呢？一查才知道，Linus 早就不管了，现在是一个日本人滨野纯（Junio C Hamano）在维护 Git。他是谷歌员工，所以谷歌其实是 Git 背后的公司。

![](https://www.wangbase.com/blogimg/asset/201805/bg2018053013.jpg)

下面摘自滨野纯的访谈。

> 因为 Linus 只写 C 和 Shell，而 merge 的逻辑实在太复杂，所以他多次发邮件到邮件列表，说要是有人能够用脚本语言实现一个就好了。不过谁也没有上钩。
> 
> 就这么过了一个星期，一直关注邮件列表的我用 Perl 把 Linus 过去多次提到的 merge 算法实现并投到了邮件列表里。这是我第一次有一定规模地向开源项目贡献代码。然而，尽管我详细地写了将近30个测试用例以及各种分支条件下应该怎么处理的表格，6个小时以后 Linus 提交到 master 分支的却是个截然不同的东西。据本人说是想到了更好的办法所以就这么着了。
> 
> 我看了一下，足以让我那些依照Linus以前的逻辑所写的代码毫无价值，就是优雅到这种程度。不过之前为什么你还说什么"谁来帮忙做一下啊"，我做了结果你又不要（笑），然而当时并没有这么想，因为新的处理方法确实很漂亮。

4、[分辨率术语的含义](https://medium.com/@yashwate07/explained-1-display-resolution-11a67a6096c)

购买显示设备或拍摄视频的时候，经常会遇到分辨率的术语，它们是什么意思呢？

> * 720p: 1280 x 720, 称为 HD（中文译为"高清"）
> * 1080p: 1920 x 1080, 称为 FULL HD（中文称为全高清）
> * 1440p: 2560 x 1440, 称为 QHD 或 Quad HD，即4倍的HD
> * 2160p: 3840 x 2160, 称为 4K
> * 4320p: 7680 x 4320, 称为 8K

## 新奇

1、[伦敦心跳](http://tubeheartbeat.com/london/)

![](https://www.wangbase.com/blogimg/asset/201805/bg2018053014.jpg)

![](https://www.wangbase.com/blogimg/asset/201805/bg2018053015.jpg)

《伦敦心跳》是一个很有意思的数据可视化作品。伦敦地铁的客流量用粗细表示，人流越多，线就越粗。

第一张图是凌晨，第二张是上班高峰。默认自动播放，就像城市的心跳一样。

## 本周图片

1、[Dribble 的按钮](https://www.toptal.com/designers/ui/button-design-dribbble-timeline)

![](https://www.wangbase.com/blogimg/asset/201805/bg2018053016.jpg)

![](https://www.wangbase.com/blogimg/asset/201805/bg2018053017.jpg)

有人回顾了过去八年，设计网站 Dribbble 主页按钮的变化。图一是2009年的按钮，图二是2017年的按钮。八年的图片放在一起，可以看到设计的趋势变得越来越简单和平面化。

2、[npm install](https://twitter.com/brad_frost/status/996014341592961025)

![](https://www.wangbase.com/blogimg/asset/201805/bg2018053018.jpg)

[@brad\_frost](https://twitter.com/brad_frost) 在推特说，上图的名字叫 npm install。意思就是说，如果你运行 npm install 命令，硬盘上就会多了一堆这样的东西。

3、[@aichongk](https://twitter.com/aichongk)

![](https://www.wangbase.com/blogimg/asset/201805/bg2018053019.jpg)

推特用户"爱宠客"（@aichongk）是晚期癌症病人，最近去世了。

大家可以看看她的推特，非常热爱生活的一个人。她谈自己的病情，但不渲染，整个内容还是光明的。看着她不长的人生，我觉得，生活就是一个过程，应该要过得快乐一点，做一些有意义的事情，如果随随便便、浑浑噩噩的过日子，那就太可惜了。

## 本周金句

读再多的书都不如内生动力给人带来的变化大。（网友）

## 欢迎订阅

这个专栏每周五发布，同步更新在我的[个人网站](http://www.ruanyifeng.com/blog)、[微信公众号](http://weixin.sogou.com/weixin?query=%E9%98%AE%E4%B8%80%E5%B3%B0%E7%9A%84%E7%BD%91%E7%BB%9C%E6%97%A5%E5%BF%97)和[语雀](https://yuque.com/ruanyf/share/)。

微信搜索"__阮一峰的网络日志__"或者扫描二维码，即可订阅。

![image | left](https://www.wangbase.com/blogimg/asset/2018/bg2018042311.jpg "")

（完）

