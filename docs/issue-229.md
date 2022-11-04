# 科技爱好者周刊（第 229 期）：手机充电问题的解决

这里记录每周值得分享的科技内容，周五发布。

## 封面图

![](https://cdn.beekka.com/blogimg/asset/202211/bg2022110203.webp)

日前，北京航空航天大学研发的“双关节大鸟型扑翼飞行器”（即机器鸟），创造了拍打翅膀式飞行器的单次飞行时间的世界纪录，达到1小时31分04秒98。（[via](https://uav.huanqiu.com/article/4ADEZRT9pu6)）

## 本周话题：手机充电问题的解决

手机充电，大家每天要花多少时间，会不会觉得很烦人？

不过，这个问题最近好像解决了。

![](https://cdn.beekka.com/blogimg/asset/202210/bg2022102911.webp)

上周，小米[发布](https://m.21jingji.com/article/20221027/herald/c4b4fa8fa8962a50fa416fccf43dacaf.html)了 Redmi Note 12 手机的探索版。

它的最大亮点是，号称具有世界最快的快充，可以9分钟充满一块 4300mAh 的电池。

你没有看错，真的是9分钟，也就是一杯茶的时间，就能把电池从0充到100%。

那样的话，手机充电完全不成问题了。早晨起床洗漱的时候，随便充一下电，就能坚持到晚上回家了。

![](https://cdn.beekka.com/blogimg/asset/202210/bg2022102906.webp)

为什么它的充电这么快？

原因很简单，因为它配了一个前所未有的 210w 充电器。

![](https://cdn.beekka.com/blogimg/asset/202210/bg2022102905.webp)

![](https://cdn.beekka.com/blogimg/asset/202210/bg2022102908.webp)

这个真的是惊到我了。我的印象中，手机充电器的功率前不久才突破 100W，居然一转眼就来到了 210W！

210w 是什么概念？我来给大家解释一下，为什么达到这个功率，手机充电问题就基本解决了。

充电快不快，最根本的一点，就是要看配套的充电器支持的输出电压和输出电流，最大是多少。

![](https://cdn.beekka.com/blogimg/asset/202210/bg2022102909.webp)

这些参数都印在充电器上，字体比较小，需要耐心找一下。以小米的这个 210w 充电器为例，它最大的输出电压/电流是 20V/10.5A。这两个参数相乘，就得到了充电功率为 210W。

一般的手机慢充都是 5V/2A，甚至是 5V/1A。这样的话，充电功率就只有 10W 和 5W。

![](https://cdn.beekka.com/blogimg/asset/202211/bg2022110101.webp)

接着，再看手机的电池容量，小米这台手机是主流的 4300mAh。也就是说，这块电池可以用 4300mA 电流持续供电1个小时（1h）。

我们知道，锂电池的输出电压统一为 3.7V，因此这块电池包含的能量，就是“电流 * 电压 * 持续时间”。

> 4300mAh * 3.7V = 15910mWh  

所以，这块电池的能量是 15910mWh，也就是 15.91 Wh。那么，计算充电时间就很简单了。

> 15.91Wh / 210W = 0.076h

看到了没有，使用 210W 的充电器充满这块电池，理论时间只要0.076小时，大约4分33秒。考虑到能量损耗和涓流问题，9分钟的实际充电时间是一个可信的结果。

作为比较，使用最普通的 5V/2A 充电器（或者 10W 的移动电源），完全充满这块电池的理论时间接近1.6小时。

> 15.91Wh / 10W = 1.591h

因此，当充电器的功率达到 210W 时，充电时间可以从一个多小时减少到几分钟，对日常生活的干扰就变得很小了。

看到这里，有的读者肯定会想，充电功率进一步提高，充电时间岂不是还能压缩？

我告诉大家，这个不太可能了，家用的手机充电器达到两百多瓦的功率，大概就到头了。因为人体绝对安全的电压，不能超过 24V，再高的输出电压可能就有触电的风险。另一方面，我国规定，小功率家用电器的输入电流不超过 10A。这两个数字相乘，功率就是两百多瓦。

## 抖音 iOS 客户端揭秘

抖音的 iOS 客户端，可能是国内使用人数最多的 iOS App 之一。

但是，大家未必知道，它的历史其实很短，第一版在2016年9月上线，迄今只有六年。

这六年中，它的用户人数飞一样增长，这给代码工程和软件质量带来了巨大的挑战。而且，它的功能也在不断增加（比如直播和连麦），而且还引入了云计算和机器学习等新技术。

下周六（11月12日）下午，**抖音 iOS 基础技术团队要做一场技术分享**，谈谈他们是怎么开发的。内容很精彩，感兴趣的朋友不要错过。

![](https://cdn.beekka.com/blogimg/asset/202210/bg2022103010.webp)

这次活动一共有五个讲座，都是负责工程师亲自分享，干货很多。

其中，两个跟软件工程有关：<u>（1）如何通过静态分析，保证 iOS 代码质量</u>；<u>（2）抖音 iOS 客户端如何做自动化测试与持续集成。</u>

另外一个跟视频处理有关：<u>（3）抖音 iOS 客户端如何优化视频播放品质</u>。

最后两个则是抖音核心竞争力：<u>（4）首页视频 Feed 如何重构</u>；<u>（5）抖音 iOS 客户端的机器学习实践。</u>

我本人对上面第四个讲座很感兴趣。众所周知，抖音会根据每个人的偏好，生成首页的视频 Feed，决定了哪些视频、按照什么顺序推送给用户。这是抖音最重要的功能，也是最主要的流量入口，更是很多视频 Up 主最关心的事情。

根据工程师的介绍：“首页 Feed 一直在迭代，2020年初，仅 Feed 仓库代码量就超过30万行，数个文件过万行。”这次讲座，他们就会谈谈视频 Feed 重构的一些具体做法。

![](https://cdn.beekka.com/blogimg/asset/202210/bg2022103011.webp)

这次活动是抖音官方主办的技术沙龙，由字节跳动技术社区 ByteTech 发起，旨在跟外部开发者交流和分享抖音的技术实践。

iOS 团队的工程师除了跟大家直接见面，还会有 Q&A 环节，回答观众问题。真的是机会难得，下一次不知道是什么时候了。

![](https://cdn.beekka.com/blogimg/asset/202210/bg2022103012.webp)

前面说过了，**活动时间是下周六（11月12日）下午，形式是免费线上直播**。参加者需要预先报名，现在点击[这个链接](https://www.bagevent.com/event/8325585?bag_track=001)，或者扫描上方二维码，了解详情并报名。活动当天，还会有纪念品抽奖。

## 科技动态

1、[墙壁透视](https://www.businessinsider.com/new-israeli-military-technology-allows-operators-to-see-through-walls-2022-6)

一家以色列公司推出了“墙壁透视”装置，可以透视墙后的物体和人员。

![](https://cdn.beekka.com/blogimg/asset/202206/bg2022062701.webp)

它的原理是使用微波雷达穿墙，接收墙后物体的雷达波反射成像。

![](https://cdn.beekka.com/blogimg/asset/202206/bg2022062702.webp)

这个装置可用来检测房间内是否存在生命、房内人数、空间的总体布局等等，甚至能够判断一个人是坐着、站着还是躺着。它主要供军队、警察、情报部门、搜救队使用。

2、[付费颜色](https://kotaku.com/photoshop-pantone-color-plugin-adobe-creative-cloud-1849714742)

Pantone 是一家美国公司，最早生产油墨，后来发明了一套配色系统，给每一种颜色编号，保证同一种色彩不管用在什么地方，都是一致的。它的这套配色逐渐成为行业标准，也申请了专利。

![](https://cdn.beekka.com/blogimg/asset/202210/bg2022102902.webp)

Adobe 公司长期与 Pantone 合作，PhotoShop 内置了 Pantone 配色，用户可以免费使用。

后来，Adobe 不愿意再付钱给 Pantone 了，两家公司去年宣布停止合作。今年10月，PhotoShop 正式移除了 Pantone 配色（下图）。

![](https://cdn.beekka.com/blogimg/asset/202210/bg2022102903.webp)

后果就是，如果你以前的图片文件（psd 文件）使用了 Pantone 配色，这个颜色在新版 PhotoShop 将变为黑色。

如果你想还原颜色，就必须向 Pantone 公司购买专门的插件，价格是每月15美元。这件事情引起了热议，刷新了大家的认识，颜色原来也要付费使用。

3、[打印代码](https://twitter.com/goldman/status/1586128703259521024)

上周五，马斯克入主推特的第一天上午，工程师突然收到通知，让他们打印过去30天～60天中自己写的代码。马斯克会跟他们座谈，现场可能会看他们的代码。

一时之间，整个公司的打印机都在排队，A4 纸也不够了。

一位 iOS 工程师在网上贴出照片，展示自己刚刚打印好的代码。

![](https://cdn.beekka.com/blogimg/asset/202210/bg2022102904.webp)

到了中午，工程师又收到通知，立即停止打印代码，已经打印的要放进碎纸机，只要在电脑上准备好代码就可以了。

于是，公司的碎纸机前又排起了队……

4、[传感器尺寸的误导](https://www.dpreview.com/articles/4159871805/making-sensor-sizes-less-misleading)

著名摄影网站 DPreview.com 提出，手机传感器尺寸的传统表示方法非常误导。

![](https://cdn.beekka.com/blogimg/asset/202207/bg2022073102.webp)

比如，iPhone 13 Pro Max 的传感器尺寸是 1/1.65英寸，而小米 12 Ultra 是1英寸，你能看出来它们的大小差了多少？

![](https://cdn.beekka.com/blogimg/asset/202207/bg2022073103.webp)

前者传感器的实际面积是44平方毫米，而后者是128平方毫米，大了将近三倍。

DPreview 建议放弃传统的英寸表示方法，统一改成只使用实际面积（平方毫米）来表示传感器的尺寸。

5、[东京笔展](https://tokyo-international-penshow.com/)

一年一度的东京笔展，上周举行。

![](https://cdn.beekka.com/blogimg/asset/202211/bg2022110311.webp)

出乎意料，门票全部卖光，而且观众大多数是年轻人。

![](https://cdn.beekka.com/blogimg/asset/202211/bg2022110312.webp)

这个展览的主要展品分成三类：笔、纸张和墨水。

![](https://cdn.beekka.com/blogimg/asset/202211/bg2022110313.webp)

虽然还有很多人喜欢，但是不可否认的是，这些文具的实用价值越来越少，正逐步变成一种收藏品。

## 文章

1、[退役的 Netflix 缓存服务器](https://www.chiphell.com/forum.php?mod=viewthread&tid=2454839&extra=page%3D1&mobile=2)（中文）

![](https://cdn.beekka.com/blogimg/asset/202210/bg2022103009.webp)

一位网友买到了一台2013年的 Netflix 服务器。它原来的用途是视频缓存，容量可以达到 262TB，现在已经退役了，不过还能正常开机使用。大家可以看看视频网站的缓存服务器是什么样。

2、[走进世界最深地下实验室](http://sc.sina.com.cn/news/m/2022-10-10/detail-imqqsmrp1980816.shtml)（中文）

![](https://cdn.beekka.com/blogimg/asset/202210/bg2022103001.webp)

四川大凉山的2400米山腹之中，有着一个世界最深的地下实验室，用来寻找暗物质。

3、[索尼麦克风与 5G 频率冲突](https://finance.sina.cn/tech/2022-10-26/detail-imqmmthc2126430.d.html)（中文）

![](https://cdn.beekka.com/blogimg/asset/202210/bg2022102710.webp)

索尼的多款无线麦克风使用了 700MHz 频段，这与国内的 5G 通信频段冲突，导致这些麦克风会频繁出现收音故障。

4、[为什么电池只有1、5、7号？](https://finance.sina.com.cn/wm/2022-10-24/doc-imqqsmrp3595606.shtml)（中文）

![](https://cdn.beekka.com/blogimg/asset/202210/bg2022102709.webp)

本文介绍一些干电池的知识，它们的编号怎么来的。

5、[details 元素的两个样式问题](https://css-tricks.com/two-issues-styling-the-details-element-and-how-to-solve-them/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202209/bg2022090516.webp)

HTML 网页的 details 元素有折叠效果，本文讨论怎么调整这个元素的样式。

6、[input 元素的 capture 属性](https://austingil.com/html-capture-attribute/)（英文）

很多人大概不知道，手机浏览器的网页输入框（input 元素）可以用`capture`属性，直接获取摄像头的数据，不需要 JS 代码。

7、[Heroku 的替代品](https://www.reaktor.com/blog/how-to-deal-with-life-after-heroku/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202211/bg2022110310.webp)

Heroku 原来是一个免费服务，可以托管网站。最近它关掉了免费服务，要求用户付费。

本文介绍一些替代品，包括免费的部署服务和免费的数据库服务两部分。

8、[为什么 PCIe 扩展槽正在减少](https://kerricklong.com/articles/pci-express-slots.html)（英文）

![](https://cdn.beekka.com/blogimg/asset/202209/bg2022090701.webp)

主板的扩展槽现在基本都是 PCIe 接口和 M.2 接口。本文分析为什么新出的主板上，PCIe 插槽的数量正在不断减少。

## 工具

1、[SourceHut](https://sourcehut.org/blog/2022-10-31-tos-update-cryptocurrency/)

![](https://cdn.beekka.com/blogimg/asset/202210/bg2022103103.webp)

SourceHut 可能是最值得信赖的代码托管服务。它最近更新了服务条款，宣布了两个变更。

1）删除托管的加密货币和区块链项目，“因为这些项目只用来收割穷人和非法交易。”

2）关闭美国办公室，从此不要求用户遵守美国法律。

2、[SQLite3 WASM](https://sqlite.org/wasm/doc/ckout/index.md)

![](https://cdn.beekka.com/blogimg/asset/202211/bg2022110316.webp)

SQLite 官方的 wasm 项目终于来了，方便了以后网页调用 SQLite 数据库。

3、[ravynOS](https://ravynos.com/)

![](https://cdn.beekka.com/blogimg/asset/202208/bg2022081810.webp)

大家知道，MacOS 是基于 FreeBSD 开发的。 ravynOS 这个项目就是想创造一个尽可能像 MacOS 的 FreeBSD 分支，但是完全开源。

4、[Colorize Pictures](https://palette.fm/)

![](https://cdn.beekka.com/blogimg/asset/202210/bg2022102708.webp)

使用 AI 模型为黑白照片上色，有多种风格可以选择。另一个类似服务是 [DeOldify](https://github.com/jantic/DeOldify)（下图）。

![](https://cdn.beekka.com/blogimg/asset/202208/bg2022082301.webp)

5、[sttr](https://github.com/abhimanyu003/sttr)

![](https://cdn.beekka.com/blogimg/asset/202208/bg2022081820.webp)

一个跨平台的命令行工具，用途是提供尽可能多的字符串相关操作，比如计算字数、MD5 哈希、提取 Email 地址等等。

6、[ntfy](https://ntfy.sh/)

![](https://cdn.beekka.com/blogimg/asset/202208/bg2022081901.webp)

一个开源的 pub-sub 通知服务，你可以用它向手机和桌面电脑推送消息。类似的工具还有 [Gotify](https://gotify.net/)。

7、[NeatChart](https://neatchart.io/)

![](https://cdn.beekka.com/blogimg/asset/202208/bg2022082001.webp)

一个 Windows 桌面软件，用来将 CSV 格式转成条形图，特色是底层使用了 Unreal Engine 5 引擎，视觉效果应该非常强大。

8、[Crawlee](https://crawlee.dev/)

![](https://cdn.beekka.com/blogimg/asset/202208/bg2022082305.webp)

一个 Node.js 的网页抓取和浏览器自动化库，底层包装了无头浏览器 Playwright，功能比较多。

9、[Nolibox Creator](https://creator.nolibox.com/guest)

![](https://cdn.beekka.com/blogimg/asset/202211/bg2022110307.webp)

这个[开源项目](https://github.com/carefree0910/carefree-creator)为 Stable Diffusion 模型提供一个好用的 WebUI，各种参数都可以调整。

## 资源

1、[刘拓的照片](https://mp.weixin.qq.com/s/CwJHo3iLOkOwGz--vFxYPg)

2021年10月26日，北京大学考古文博学院博士[刘拓](https://www.thehour.cn/news/551673.html)，在四川马尔康市甲扎尔甲山考察洞窟壁画时，不幸坠崖去世，终年31岁。

![](https://cdn.beekka.com/blogimg/asset/202211/bg2022110303.webp)

他生前探访过三十多个国家的古迹，其中包括伊拉克、阿富汗、叙利亚、巴勒斯坦、利比亚、也门、苏丹、沙特、伊朗等许多不容易到达的地方。他拍摄了上百万张照片，总计有十几个 TB，1.5万个目录。

![](https://cdn.beekka.com/blogimg/asset/202211/bg2022110304.webp)

在他逝世一周年的纪念日，他的家人和朋友将这些照片整理出来，放在网盘上，免费分享给需要它们的人。

> “刘拓深切地了解文物勘查的必要性与急迫性，以及这一过程的不可替代性，我们相信，那些因为他的努力在消失前被留存下来的影像被传承和研究的时候，他会一直被人记起。”

![](https://cdn.beekka.com/blogimg/asset/202211/bg2022110305.webp)

2、[新版 iCloud](https://beta.icloud.com/)

![](https://cdn.beekka.com/blogimg/asset/202210/bg2022102901.webp)

苹果上周发布了新版的云存储 iCloud 服务，现在没有苹果设备的人，也可以使用它了。

3、[Windows 11 加固指南](https://github.com/beerisgood/Windows11_Hardening)

这个英文仓库收集各种提高 Windows 11 安全性的措施。

4、[Flask 超级教程](https://blog.miguelgrinberg.com/post/the-flask-mega-tutorial-part-i-hello-world)（The Flask Mega-Tutorial）

![](https://cdn.beekka.com/blogimg/asset/202205/bg2022053113.webp)

免费阅读的英文电子书，帮助读者学习如何使用 Python 和 Flask 框架创建 Web 应用程序。

## 图片

1、[网上大笑的方式](https://preply.com/en/d/laughing-around-the-world-map--lp)

一项研究统计了各国在网上怎么表示大笑。

美国是 haha，英国是 LOL，中国是23333。

![](https://cdn.beekka.com/blogimg/asset/202206/bg2022061601.webp)

2、[托尔金的插画](https://www.tolkienestate.com/painting/)

最近，《指环王》作者托尔金的遗产基金会，上线了新的官网。

该网站首次公开了托尔金本人画的一些插图，让我们了解作者自己想象中的中土世界。

（1）巫师居住的萨鲁曼塔

![](https://cdn.beekka.com/blogimg/asset/202206/bg2022061602.webp)

（2）大魔王索伦的要塞

![](https://cdn.beekka.com/blogimg/asset/202206/bg2022061603.webp)

（3）霍比特人的夏尔小镇

![](https://cdn.beekka.com/blogimg/asset/202206/bg2022061604.webp)

（4）恶龙史茅革的地堡，堆满了财宝

![](https://cdn.beekka.com/blogimg/asset/202206/bg2022061605.webp)

## 文摘

1、[为什么程序员喜欢木工](https://www.zainrizvi.io/blog/why-software-engineers-like-woodworking/)

很多程序员喜欢木工，自己动手制作各种木制品。

![](https://cdn.beekka.com/blogimg/asset/202211/bg2022110201.webp)

这不是偶然的。木工有一些特点，会让程序员感到非常熟悉，与编程并没有太大的不同。

（1）两者都需要自己动手建造。

（2）两者都有大量的工具可以使用。木工需要电钻、起子、锯子、刨子、凿子、锉刀、锤子……你需要自己找到最合适的工具。

![](https://cdn.beekka.com/blogimg/asset/202211/bg2022110202.webp)

（3）两者都要受到很多外界限制，除了金钱方面。软件有资源限制（CPU、内存、带宽、延迟、工时等），木工则有物理空间的限制。

（4）两者都是先设计，后建造。不管是软件还是木工，都必须在建造之前，就想清楚你要制作什么，并弄清楚不同部分如何相互作用。

（5）两者都需要等待，软件需要等待编译，木工需要等待胶水、油漆这些事情。但是，等待也使得你可以同时处理多个项目。

（6）两者都有用户。无论软件还是木工，做出来都是有用户的。

总之，木工的许多方面都与软件高度相同，而且你可以更快速地得到反馈，与用户密切互动，同时又不像写代码那样乏味，所以它对程序员有很大的吸引力。

## 言论

1、

“准备悖论”指的是，如果提前采取有效措施，就可以减轻某种未来的灾难，那么人们就会倾向于认为，这种灾难没有那么严重，不会造成太大损害，从而阻碍对这种灾难进行提前准备。

-- [维基百科](https://en.wikipedia.org/wiki/Preparedness_paradox)

2、

一件事情的直接后果，称为一阶结果；直接后果引发的其他后果，称为二阶结果。

如果一个人可以预见到直接结果，他就具有一阶思维。真正的聪明人拥有二阶思维，甚至三阶思维。

-- [《二阶思维》](https://fs.blog/second-order-thinking/)

3、

汽车正变成一部带轮子的智能手机。

-- [《福特电动卡车 F-150 评测》](https://www.theverge.com/23307298/ford-f-150-lightning-review)

4、

让我们使用网络来创造令人兴奋的新事物，让我们使用网络来帮助人们相互了解。

-- [蒂姆·伯纳斯-李](https://dx.bearblog.dev/make-boring-websites/)，万维网的发明者谈他对于互联网的憧憬

5、

推特所有问题的根源，都来自“转发”按钮。正能量的事情少有人转发，负能量的事情大量转发。

这个按钮以极快的速度，传播愤怒或假消息，从而使得陌生人得以协调或“编队”，开始对目标的共同攻击。

-- [《推特的问题》](https://noahpinion.substack.com/p/twitters-problems-a-roundup)

## 历史上的本周

2021年（第181期）：[移动支付应该怎么设计？](https://www.ruanyifeng.com/blog/2021/10/weekly-issue-181.html)

2020年（第131期）：[你的头脑是二值逻辑，还是三值逻辑？](https://www.ruanyifeng.com/blog/2020/10/weekly-issue-131.html)

2019年（第79期）：[我们的生活越来越依赖机器](https://www.ruanyifeng.com/blog/2019/10/weekly-issue-79.html)

2018年（第28期）：[软件开发是真正的知识吗？](https://www.ruanyifeng.com/blog/2018/10/weekly-issue-28.html)

## 说明

周刊每周五发布在[我的个人网站](http://www.ruanyifeng.com/blog)和微信公众号《阮一峰的网络日志》，欢迎订阅。

周刊内容开源，自由使用，仓库在 GitHub: [ruanyf/weekly](https://github.com/ruanyf/weekly)，欢迎提交 issue 投稿。另有[《谁在招人？》](https://github.com/ruanyf/weekly/issues/2715)服务，提供程序员就业信息。

商业合作或产品推广，请邮件联系（Email： yifeng.ruan@gmail.com ）。

## 鸣谢

感谢国产软件 [FlowUs](https://flowus.cn?promotionChannel=GW_RYF_01) 支持周刊。

FlowUS 是一个知识管理与协作的 SaaS 产品，集成了“文档+表格+网盘”，具有写文档、制作主页、管理数据、存储文件等多种用途。

周刊的[ FlowUs 专栏](https://ruanyf-weekly.flowus.cn/?code=FLOWUS&promotionChannel=WX_RYF_00)，欢迎访问。

![](https://cdn.beekka.com/blogimg/asset/202207/bg2022072108.webp)

（完）

