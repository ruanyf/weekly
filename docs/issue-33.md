# 每周分享第 33 期

这里记录过去一周，我看到的值得分享的东西，每周五发布。

欢迎投稿，请前往 GitHub 的 [ruanyf/weekly](https://github.com/ruanyf/weekly) 提交 issue。

![](https://www.wangbase.com/blogimg/asset/201811/bg2018113001.jpg)

上周六是台北市长选举。原定下午四点结束投票，但是排队的人太多，于是改成只要四点你还在排队，就可以投票。

等到最后一个人投完，已经晚上七点半了。为什么这么慢？原因是每个人拿到十几张选票，都是纸质的，需要一张张打勾，然后投在不同的票箱，这就很慢了。

然后，就发生了很尴尬的事情。按照规定，四点要开票，于是出现了“一边开票，一边投票”的情况。本来这也不算大问题，偏偏在投票还是古代方法的情况下，开票已经进入互联网时代，各大电视台、各网站都现场直播每个候选人的票数。这造成了很多人还在等待投票的时候，已经从手机上看到实时开票了。这就像比赛已经开始了，你还能继续购买足球彩票，这就很有争议了。

半夜2点半，总算把开票结果统计出来了，现任的柯文哲市长只赢了3000票。输掉的一方连夜到法院起诉，认为选举不公，要求裁决结果无效。

这里不谈选举结果，只看这件事本身：纸质选票、排队几小时、人工唱票、统计到半夜……已经21世纪了，需要这么麻烦吗？如果网络投票，这些问题都不会存在。每个人在手机上按几下，四点一到，数据库一秒钟就告诉你谁当选，不会有任何差错。

思维再放开一点，远程办公都已经变成现实了，议会也完全可以远程开会，政府也可以远程管理。实体的政府大楼以后可能都没必要，就好像你不需要知道网店的物理地址。

## 新闻

1、[俄罗斯船坞沉没](https://warisboring.com/russias-giant-dry-dock-sank-with-an-aircraft-carrier-inside/)

![](https://www.wangbase.com/blogimg/asset/201811/bg2018113002.jpg)

10月29日，俄罗斯唯一的巨型船坞 PD-50，突然出现事故（起重机倒塌，砸在船坞上），沉没到了海底。尴尬的是，俄罗斯唯一的航空母舰“库兹涅佐夫”号正在船坞里面维修升级，它倒没有沉没，但是修到一半，船坞突然没了！

打捞 PD-50 需要耗费大量的金钱，以及两三年的时间，俄罗斯又没有替代船坞，现在要么终止库兹涅佐夫号的升级，拆下来的零件装回去，要么将它送到国外去修。

2、[疑似外星飞船的小行星“奥陌陌”](https://www.nbcnews.com/mach/science/scientists-say-mysterious-oumuamua-object-could-be-alien-spacecraft-ncna931381)

![](https://www.wangbase.com/blogimg/asset/201811/bg2018113003.jpg)

2017年底，天文学家发现了一个奇怪的小行星 Oumuamua（中文译名“奥陌陌”）。它有一个橄榄球场那么大，跟别的小行星形状都不一样，是狭长的矩形，有着奇怪的飞行轨迹，还会时不时加速。上图是它的想象图。

天文学家认为，它的轨道可能是罕见的双曲线。也有人发表论文[提出](https://arxiv.org/abs/1810.11490)，它可能是利用光帆推进的外星飞船，参见[维基百科](https://zh.wikipedia.org/wiki/奥陌陌)。

3、[储能材料](https://www.chalmers.se/en/departments/chem/news/Pages/Emissions-free-energy-system-saves-heat-from-the-summer-sun-for-winter-.aspx)

![](https://www.wangbase.com/blogimg/asset/201811/bg2018113004.jpg)

瑞典科学家发明了一种液态分子材料，可以储存太阳能。这种材料由碳、氢和氮分子组成，被阳光照射时，会转化为一种富含能量的异构体，即分子的排列方式会改变。

这种异构体可以储存长达18年，当要使用能量时，就让它通过一种催化剂。液体在通过前，温度为20摄氏度，通过后就上升到83摄氏度。储藏的太阳能以热能的形式释放出来，同时异构体恢复到原始形态的分子形态，这样就可以在加温系统中重复使用。

4、[高超音速飞机](https://daily.jstor.org/the-alarming-possibilities-of-hypersonic-flight/)

![](https://www.wangbase.com/blogimg/asset/201811/bg2018113005.jpg)

高超音速飞机指的是飞行速度至少为音速五倍的飞机。分析家认为，特朗普政府退出《中程导弹条约》的主要目的，就是研制高超音速飞机或导弹。

这种飞机的主要难度在于，当达到高超音速时，空气阻力将产生持续的强烈摩擦，释放出巨大的热量，因此需要良好的冷却机制。另一方面，如此高的速度还需要大量的燃料或庞大的燃料箱，并且大量汲取气体，帮助燃烧。除非燃料以精确的模式燃烧，否则在高超音速下燃烧也很困难。

2017年，美国军方测试了两架使用助推火箭进行初始加速的高超音速喷射式飞机。结果，两架飞机都坠毁了，但其中一架飞机在发生故障前几分钟的持续高超音速飞行成功。

5、[Linux on Dex](https://www.linuxondex.com/)

![](https://www.wangbase.com/blogimg/asset/201811/bg2018113006.jpg)

三星公司宣布，三星手机可以启动 Linux 容器。连接显示器，就会变成 Ubuntu 桌面环境，从而在手机上达到 PC 开发的体验。目前，该技术只支持 Note9 和 Tab S4。这比手机上运行办公软件有吸引力多了。

6、[新型厕所](https://www.bloomberg.com/news/articles/2018-11-06/bill-gates-aims-to-save-233-billion-by-reinventing-the-toilet)

![](https://www.wangbase.com/blogimg/asset/201811/bg2018113007.jpg)

比尔盖茨在北京“新世纪厕所博览会”上表示，过去七年他的基金会投入了2亿美元，研发了20种新型厕所，可以消除人类粪便里面的病原体，将其转为清洁的水和肥料。盖茨认为，这些厕所可以挽救50万人的生命，并节省2000亿美元以上的资金。

其中一种厕所是加州理工学院开发的，使用电力将水和人类废物分解成肥料和氢气，后者可以作为能源储存在氢燃料电池中。

7、[使用 Wifi 信号探索空间](https://www.technologyreview.com/s/612375/using-wi-fi-to-see-behind-closed-doors-is-easier-than-anyone-thought/)

Wifi 信号就是无线电波，充满整个空间。当人们移动时，他们会扭曲空间，反射和折射无线电波。理论上说，可以利用这个不断变化的电磁场确定个体的位置、行为和动作。实际上，已经有一些使用 WiFi 进行透视的成像系统。但是，这些系统需要知道 Wifi 发射器的确切位置，并且需要登录到网络，以便发送探测信号。

现在，加州大学圣巴巴拉分校开发出了一种方法，使用普通智能手机，通过探测 WiFi 信号在某个位置的强度变化，逐步推测出墙壁后的整个景象。

8、[没有舷窗的飞机](https://www.abc.net.au/news/2018-06-07/would-you-travel-on-a-windowless-plane/9843722?pfmredir=sm)

![](https://www.wangbase.com/blogimg/asset/201811/bg2018113008.jpg)

阿联酋航空最新飞机的头等舱，将用液晶屏幕代替舷窗。乘客看到的窗外景象，其实是摄像头拍摄的实时影像。阿联酋航空希望，未来将所有舷窗都替换掉。

这样做的主要目的是减轻重量，据说一架没有窗户的飞机，可以减轻50%的重量，因而降低制造成本和飞行成本，而且有利提高机身的强度。

9、[过度肥胖引发的损失](https://www.milkeninstitute.org/newsroom/press-releases/view/348)

一家研究机构称，过度肥胖每年使得美国损失1.7万亿美元。其中，直接的医疗保健费用4807亿美元，间接的生产力损失1.24万亿美元。

2016年，近40％的美国人肥胖，33％的人超重但不肥胖。计算依据是 BMI（体重除以身高的平方），超过30为肥胖，25~30之间为超重。肥胖导致了75％的骨关节炎，64％的糖尿病，73％的肾病。 

10、__一句话新闻__

* [Verily](https://blog.verily.com/2018/11/update-on-our-smart-lens-program-with.html?m=1)（谷歌的生命科学公司）宣布，终止监测血糖的隐形眼镜项目。该项目从泪液里面的葡萄糖推算血糖，但是现在发现这种推算无法达到医疗级别的准确性。
    
* [Facebook](https://www.npr.org/2018/11/17/668408122/facebook-increasingly-reliant-on-a-i-to-predict-suicide-risk) 开始使用 AI 扫描用户的帐户，判断用户是否会自杀，一旦发现可疑对象，将报告当地警方。第一个月就发现了100个案例。
    
* [抖音](https://variety.com/2018/digital/news/tiktok-jimmy-fallon-musically-app-downloads-1203032629/)的海外版 TikTok 在美国 Apple App Store 中排名第一，已经在美国下载和安装了近8000万次（含安卓版） 。
    
* [比特币](https://blog.cotten.io/bitcoin-crashes-below-energy-cost-726119d8c2b6)最近跌破4000美元，有人估算它的电费成本是4022美元（假定每度电7美分），因此挖矿已经无法弥补成本了。
    
* [亚马逊公司](https://aws.amazon.com/blogs/aws/aws-ground-station-ingest-and-process-data-from-orbiting-satellites/)推出地球卫星站服务，你自己负责发射卫星，然后租赁他的卫星地面站，通过 AWS 网络接收自家的卫星信号。

## 教程

1、[如何在安卓手机里清除谷歌？](https://lushka.al/my-android-setup/)（英文）

本文作者讲述如何将红米手机重刷系统，剔除了所有谷歌相关的服务。

2、[IPFS 简介](https://medium.com/zkcapital/ipfs-the-distributed-web-e21a5496d32d)（英文）

IPFS 是一个分布式的互联网协议，底层机制类似于将网站发布到区块链。本文介绍 IPFS 的特点，不涉及技术细节。

3、[AWS 网络介绍](https://grahamlyons.com/article/everything-you-need-to-know-about-networking-on-aws)（英文）

本文介绍亚马逊网络服务（AWS）对用户提供的子网服务。每个购买 AWS 的用户会分配到一个 VPC（虚拟私有云），即一个虚拟子网，比如 10.0.0.0/16，文章介绍与之相关的一些概念和知识。

4、[为什么静态资源应该使用 CDN？](https://forestry.io/blog/for-static-sites-theres-no-excuse-not-to-use-a-cdn/)（英文）

本文用一个简单的例子解释什么是 CDN，以及它的好处。

5、[HAProxy 的防 DDOS 机制](https://www.haproxy.com/blog/application-layer-ddos-attack-protection-with-haproxy/)（英文）

HAProxy 是一个负载均衡服务器，自带过滤 HTTP 请求的功能，可以防止应用层的 DDOS 攻击，这方面比 nginx 更强大。

6、[Python 的数据序列化](https://enqueuezero.com/data-serialization.html#language-built-in-serialization)（英文）

本文介绍 Python 的各种数据序列化方案，包括 XML、JSON、MsgPack、Protobuf、Thrift等。

7、[如何定制一个调色板](https://refactoringui.com/previews/building-your-color-palette/)（英文）

![](https://www.wangbase.com/blogimg/asset/201811/bg2018113009.jpg)

本文介绍如何为自己的应用定制一个调色板，指定各种颜色。

8、[图解 DNS over HTTPS](https://hacks.mozilla.org/2018/05/a-cartoon-intro-to-dns-over-https/)（英文）

长期以来，DNS 请求一直是不加密的，这造成 DNS 可能被监听和篡改。最新的方案是推广 DNS over HTTPS，即对 DNS 请求加密，Mozilla 基金会的这篇文章解释了这是怎么回事。

9、[网页加载Three.js、Rust 和 WebAssembly](https://medium.com/@cwervo/parc3l-combining-three-js-rust-and-webassembly-c1e643ef7681)（英文）

本文通过一个简单的实例，介绍网页如何加载用 Rust 写的 WebAssembly 模块。

## 资源

1、[console.love](https://www.console.love/)

![](https://www.wangbase.com/blogimg/asset/201811/bg2018113010.jpg)

很多公司会在浏览器的控制台隐藏信息，这个网站收集这类有隐藏信息的网站。

2、[testing-distributed-systems](https://github.com/asatarin/testing-distributed-systems)

一个搜集各种分布式系统的资料库。

3、[人间乐园](https://tuinderlusten-jheronimusbosch.ntr.nl/en)

![](https://www.wangbase.com/blogimg/asset/201811/bg2018113011.jpg)

[《人间乐园》](https://zh.wikipedia.org/wiki/%E4%BA%BA%E9%96%93%E6%A8%82%E5%9C%92)是15世纪荷兰画家博斯的著名作品，该网站将这幅画进行了多级扫描，做成了类似网上地图那样可以自动移动，多级放大的版本。

4、[crushcourse.club](https://crashcourse.club/)

![](https://www.wangbase.com/blogimg/asset/201811/bg2018113012.jpg)

Crash Course 是一个 Youtube 的教育频道。B站上面有很多翻译小组。他们组成了一个联盟防止翻译重复，并提供了索引。（@[showerc](https://github.com/ruanyf/weekly/issues/51) 投稿）

5、[GraphQL 全栈课程](https://www.howtographql.com/)（英文）

Prisma 公司推出的免费课程，分成基础知识、前端、后端三个部分。

6、[登录页设计](https://cruip.com/)

![](https://www.wangbase.com/blogimg/asset/201811/bg2018113013.jpg)

登录页的各种页面设计，可以免费下载模板。

7、[GraphQL 之路](https://www.robinwieruch.de/the-road-to-graphql-book/)

![](https://www.wangbase.com/blogimg/asset/201811/bg2018113014.jpg)

开源电子书，介绍如何使用 React.js 和 Node.js 开发 GraphQL 应用。

## 工具

1、[DeOldify](https://github.com/jantic/DeOldify)

![](https://www.wangbase.com/blogimg/asset/201811/bg2018113015.jpg)

老照片着色的机器学习库。

2、[ace](https://ace.c9.io)

一个可以嵌入网页的代码编辑器，使用 JavaScript 开发。

3、[HTML-notepad](https://html-notepad.com/)

![](https://www.wangbase.com/blogimg/asset/201811/bg2018113016.jpg)

一个所见即所得的轻量级、跨平台桌面笔记本，大小为 2MB。

4、[Captisa](https://captisa.com/)

一个创建在线表单的网站，并提供数据储存，可以在后台查看表单收集的数据。

5、[dive](https://github.com/wagoodman/dive)

我们知道，Docker 的 image 文件不是一个单一文件，而是包含了许多层。该工具用来查看并定制 image 文件的每一层。

6、[signale](https://github.com/klauscfhq/signale)

![](https://www.wangbase.com/blogimg/asset/201811/bg2018113017.jpg)

一个 Node 的日志格式库，自带16个级别，可以定制颜色和 Emoji。

7、[ervy](https://github.com/chunqiuyiyu/ervy)

![](https://www.wangbase.com/blogimg/asset/201811/bg2018113018.jpg)

命令行打印图表的库。

8、[JSCity](https://github.com/aserg-ufmg/JSCity)

![](https://www.wangbase.com/blogimg/asset/201811/bg2018113019.jpg)

该工具可以将 JS 项目的源代码显示为一座城市。还有一个类似的[项目](https://github.com/rodrigo-brito/gocity)，专用于 Go 语言。

9、[stickybits](https://github.com/dollarshaveclub/stickybits)

CSS 的 `position: sticky` 是一个很有用的设置，但是老的浏览器不支持。这个 JS 库是该功能的垫片库。

10、[GoJS](https://github.com/NorthwoodsSoftware/GoJS)

![](https://www.wangbase.com/blogimg/asset/201811/bg2018113020.jpg)

GoJS 是一个功能丰富的 JS 库，用于在浏览器上实现自定义交互式图表和复杂的可视化图表。 （[@nivance](https://github.com/ruanyf/weekly/issues/56) 投稿）

11、[谷歌的代码托管服务](https://cloud.google.com/source-repositories/)

![](https://www.wangbase.com/blogimg/asset/201811/bg2018113021.jpg)

谷歌重新推出了自己的 Git 代码托管服务，可以建多个私有仓库，免费版一个仓库最多5个用户，带有自动构建和测试。

## 文摘

1、[361 艇事件](https://k.sina.cn/article_5941687237_16226f3c501900763f.html?from=mil&http=fromhttp)

![](https://www.wangbase.com/blogimg/asset/201811/bg2018113022.jpg)

2003年4月26日，北海舰队下属某大队接到基地通知，在我防区有一潜艇漂浮在海面，情况不明。大队派出611和622两艘艇过去侦查。赶到出事地点――渤海和黄海交界处的内长山群岛时，天已微黑，潜艇舷号已涂死，看不出潜艇的任何情况。

他们把现场情况报告上级后，上级分析可能是日本或韩国潜艇。于是全艇立即拉响战斗警报，进入一级战斗准备，所有人员手中的武器都子弹上膛。这两艘艇围着潜艇转了大概两小时，发现艇内毫无动静。这时候天色已晚，上级命令他们原地监视，等待增援。

第二天，潜艇还是毫无动静。于是，上级命令登上潜艇，当他们登上潜艇的时候，才发现这是我们海军的361潜艇！此时，所有官兵已经全部牺牲在自己的岗位上，航海日志被定格在4月16日。令人感到不可思议的是：潜艇完好无损，官兵们神态安详，没有挣扎的痕迹，甚至脸上都没有一丝痛苦的表情。

70名官兵殉职，现场没有任何伤痕，任谁都想知道、但谁也不知道361艇当时到底发生了什么？这是自人民海军组建以来最严重的一起事故。军委高层震怒，命令将361号潜艇立即拖回旅顺基地，追查事故原因。

![](https://www.wangbase.com/blogimg/asset/201811/bg2018223023.jpg)

后来，事故调查组的通报还原了361潜艇的最后时刻。361号潜艇是常规动力潜艇，也叫做柴电潜艇，依靠柴油机和电池保证动力。电池充电需要启动柴油机，而汽柴油机需要大量氧气才能够运作。

事故当天，361号潜艇电池电力逐步耗尽，潜艇上浮，准备运行柴油发电机为电池充电。潜艇上浮到潜望镜距离，将潜望镜和通气管伸出海面，启动了发电机。但当时海面风急浪大，海水进入通气管，导致管口阀门自动关闭以防止潜艇沉没，也就是说潜艇自动切断海面上的空气进口。而此时，正在运作的柴油发电机却没有停止，仍然在大量吸收氧气。在短短2分钟内，艇内所有氧气被消耗一空，70名官兵瞬间就遭遇了可怕的窒息。窒息开始约2到3分钟后，所有人员必死无疑。

简单说，361艇的事故原因就是两条。

第一，潜艇设备有缺陷。对于常规潜艇充电时存在安全隐患，这是各国军方都清楚知道的事情。作为这种隐患的防备技术，并不难解决，只要简单的对艇内氧气检测，一旦低于危险标准就自动关闭柴油机或者至少进行报警就行了。但遗憾的是，361号潜艇压根没有这种设备。

第二，潜艇官兵有失误。正常的充电期间，只要启动柴油机，就务必确认通气管是否打开。柴油机工作时，最好将机舱密封，防止危及全艇。如发现情况，操作员就要以最短的时间使柴油机停止工作，并进行通风换气。但遗憾的是：所有这些，361号潜艇都没有做到，以至遭受灭顶之灾。

至于为何涂死舷号，当时361艇正在前往别国海域执行侦察任务，将舷号涂死是各国海军通行做法。同时，为了避免暴露自己，必须保持无线电静默状态，因此有一段时间不跟总部联系也是正常的。

2003年6月13日，新华社发布消息：'海军361潜艇失事原因已查明，是由于指挥操纵不当造成的。中央军委作出决定，对361潜艇特大事故负有责任的有关人员进行严肃处理。给予济南军区副司令员兼海军北海舰队司令员丁一平、海军北海舰队政治委员陈先锋行政降职处分，同时分别给予其他8名有关人员以行政撤职、降职等纪律处分。同一天还发布了海军司令员石云生、政委杨怀庆被免职的消息。

2003年4月29日，就在事故发生后的13天，数十名官兵奉命重新组建361潜艇。2004年8月，361潜艇奉命进厂中修改装。361潜艇是同类型潜艇中第一艘进行现代化改装的潜艇。2005年2月22日，改装后的361潜艇进行新组建后的第一次海上试验。

2、[21世纪的编程语言](https://wordsandbuttons.online/if_i_were_to_invent_a_programming_language_for_the_21st_century.html)

21世纪已经发明了相当多的编程语言，Swift、Kotlin 和 Go 可能是其中最受欢迎的。

然而，21世纪语言设计的特点在于，语言本身没有任何明显的特点，只是增加了使用者的方便。你可以用一个周末，学习一门新语言，而不会真正学到任何新东西。这些语言根本没有任何新东西，它们都是吸收了前人“正确的部分”，比如 Objective-C、Java 或 C。

虽然继承前人确实是有价值的，但问题就来了，它们到底算21世纪的语言，还是仅仅为20世纪语言的延续？

如果我要发明一种新语言，我不会试图修复过去，而会尝试一些激进的设计决策。

首先，我会摆脱算术符号和括号这样的符号，这些元素完全是粉笔和黑板时代的遗存，完全无助于可读性，只是为了写起来方便。它们应该退休了。

```
FILE * test_file = fopen("/tmp/test.txt", "w+");
```

上面这样的语句，应该改成下面这样。

```
create file /tmp/test.txt for input and output as test_file
```

我们不需要括号，引号，星号和分号（除非它们真的帮助我们更好地表达事物）。

21世纪，有些东西的成本很低了：解析时间、计算机内存、在线搜索。我们真正需要节约的是：开发时间、程序员的记忆力、学习语言细节所要付出的努力。新语言应该充分利用便宜的东西，而不是那些昂贵的东西。

## 本周图片

1、**远程集会**

2017年9月26日，维基解密的创办人阿桑奇与巴塞罗那大学的学生举行视频会议。以后，政治集会大概都会是下图这样，现场与远程结合进行。

![](https://www.wangbase.com/blogimg/asset/201811/bg2018223024.jpg)

2、[安斯库姆四重奏](https://en.wikipedia.org/wiki/Anscombe%27s_quartet)

![](https://www.wangbase.com/blogimg/asset/201811/bg2018223025.jpg)

1973年，统计学家弗朗西斯·安斯库姆（Francis Anscombe）提出了上面四个数据集，它们的平均数、方差、相关系数、线性方程式完全一致。也就是说，你从特征值上面，根本不会发现这四个数据集是完全不同的。

他以此证明分析数据之前绘制数据的重要性，以及异常值对统计特性的影响，指出有些统计学家的观念“数值计算是精确的，图表用处不大”是错误的。

3、[海岸线悖论](https://en.wikipedia.org/wiki/Coastline_paradox)

英国的海岸线有多长，取决于你怎么测量。如果测量单位是 100 公里，英国海岸线长度大约2800公里。

![](https://www.wangbase.com/blogimg/asset/201811/bg2018223026.jpg)

如果测量单位为50公里，海岸线总长度为 3400 公里，多出了600公里。

![](https://www.wangbase.com/blogimg/asset/201811/bg2018223027.jpg)

## 本周金句

1、

Java 是一种广泛使用的工业语言，但并不是一种很好的教学语言。教学语言的关键指标是简单，但是 Java 在任何方面都不简单。它难于上手，没有像 C 那样简单透明的执行模型，也没有像 Scheme 和 ML 那样优雅的计算步骤，唯一真正的优势是就业。

-- [《如何选择教学语言》](https://blog.janestreet.com/how-to-choose-a-teaching-language/)

2、

许多有名的作家，都是每天早上安排3-4小时的写作，一天的其余时间进行散步、通信、午睡和其他智力要求较低的活动。

--《[早晨写作](https://www.gwern.net/Morning-writing)》

3、

金钱最有价值的用途就是购买时间。

-- 有人提到，自己已经有不少钱了，但还是拼命想赚更多的钱。[一个网友](https://news.ycombinator.com/item?id=18373002)做了上面的回应，钱的意义在于它可以换来更多时间，让你去做自己想做的事情。

4、

如果印第安人是在冰河时期，经过白令海峡的路桥到达北美，那么这一定发生在他们掌握缝纫技术之后。否则，他们没有紧密合身的衣服，不可能在冰天雪地中存活。

-- Tim O'Reilly 《未来地图》

## 欢迎订阅

这个专栏每周五发布，同步更新在我的[个人网站](http://www.ruanyifeng.com/blog)、[微信公众号](http://weixin.sogou.com/weixin?query=%E9%98%AE%E4%B8%80%E5%B3%B0%E7%9A%84%E7%BD%91%E7%BB%9C%E6%97%A5%E5%BF%97)和[语雀](https://yuque.com/ruanyf/share/)。

微信搜索“__阮一峰的网络日志__”或者扫描二维码，即可订阅。

![](http://www.ruanyifeng.com/blogimg/asset/2018/bg2018042311.jpg)

（完）

