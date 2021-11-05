# 科技爱好者周刊（第 182 期）：新人优惠的风险

这里记录每周值得分享的科技内容，周五发布。

本杂志开源（GitHub: [ruanyf/weekly](https://github.com/ruanyf/weekly)），欢迎提交 issue，投稿或推荐科技内容。

周刊讨论区的帖子[《谁在招人？》](https://github.com/ruanyf/weekly/issues/2032)，提供大量程序员就业信息，欢迎访问或发布工作/实习岗位。

## 封面图

![](https://cdn.beekka.com/blogimg/asset/202111/bg2021110101.jpg)

2021世界建筑摄影大赛入围作品：重庆来福士广场。（[via](https://edition.cnn.com/style/article/architectural-photography-awards-2021-shortlist/)）

## 本周话题：新人优惠的风险

很多 App 都有“新人优惠”、“首单优惠”，提供很诱人的条件，吸引新用户。

最近，有一个[案件](https://finance.sina.com.cn/chanjing/cyxw/2021-07-16/doc-ikqcfnca7224835.shtml)跟“新人优惠”有关，很值得谈一下。

![](https://cdn.beekka.com/blogimg/asset/202111/bg2021110501.jpg)

事情是这样的。2019年底，上海杨浦区某商场写字楼搞活动，只要是商场 App 的新用户，都可以获得500积分，抵扣一小时的商场停车费（价值人民币10元）。

![](https://cdn.beekka.com/blogimg/asset/202111/bg2021110302.jpg)

结果，写字楼里面120多个白领使用接码平台，反复注册新用户，申领积分抵扣停车费，让商场损失37万多元，最多一辆车抵扣的停车费超过万元。所谓“接码平台”，就是提供各种手机号，代接验证码，每条收取一定的费用。

商场报警以后，警方找到了那120多位白领，不仅要他们补交停车费，还将其中金额较大的20多人以诈骗罪起诉，目前已有两人获刑。

所以，大家知道了吧，滥用“新人优惠”可能会触犯法律，构成诈骗罪。

但是，我对这个案件有些不一样的看法。我觉得，白领贪图小便宜固然不对，但是商场应该负大部分责任，它的损失很大程度上是自己造成的。

商场设计这个活动时，就应该预料到，有人会用多个手机号，多次注册新用户领取优惠。但是，它没有设计任何预防措施，其实只要规定一个车牌号只能享受一次优惠，就能完全避免损失。等到事情真的发生了，它也没有第一时间终止活动，而是听任损失不断扩大。

所以，商场自己的疏忽和消极应对，我觉得才是这件事的主要原因。只要设计活动方案时，稍微周全一点，就能避免这个漏洞，不会去考验人性了。法官如果判决，商场必须自己承担大部分损失，也是完全说得通的，而且还能警示其他 App。

值得一提的是，警方在追缴停车费的过程中，还将开发运营“接码平台”的四个犯罪嫌疑人[抓获](https://news.sina.com.cn/c/2021-07-16/doc-ikqciyzk5864403.shtml)。

> “某大学软件学院在读研究生史某某，开发运营了一款专为用户提供虚拟手机号码及验证码服务的软件，在明知用户利用该软件骗取商家优惠福利后，仍积极提供支持，并从中非法牟利十万余元。
>
> 近日，上海市杨浦区人民法院以犯帮助信息网络犯罪活动罪，判处被告人史某某有期徒刑六个月，罚金人民币一万元。”

这件事告诉我们，程序员也是有风险的。开发接收短信的自动化工具，本身不违法，但是用户如果用于非法用途，就可能会被法律追责。所以，开发时一定要问清楚，用户用来干嘛。

## P6 工程师必会的算法原理

P6 是阿里集团内部的“资深工程师”级别，也是对外招聘的主要级别。

拥有几年工作经验、能够参与重大项目、但没有担任过主管的社招工程师，一般都会给 P6。特别优秀的校招毕业生，也会给 P6，以后再根据工作表现，进行晋升。

![](https://cdn.beekka.com/blogimg/asset/202111/bg2021110405.jpg)

软件工程师现在短缺，只要达到 P6 的标准，不管是阿里还是其他公司，通常都会录取。普通的程序员准备应聘和面试时，都是以 P6 为目标。

P6 的招聘，最看重的是动手能力，但也会考察算法知识，看看应聘者是否有扎实的基础和潜力。一些性能要求高的项目，对算法知识的考察就会更多一些。

![](https://cdn.beekka.com/blogimg/asset/202111/bg2021110406.jpg)

本周介绍的课程，就是针对前端工程师的算法直播课 **《P6 工程师必会的算法原理》**。

它用两个晚上的讲课，帮助找工作的同学补充算法知识，重点讲解 Vue 和 React 这两个框架背后的算法（比如 DOM Diff），并会针对性地介绍如何准备大厂面试。

![](https://cdn.beekka.com/blogimg/asset/202111/bg2021110407.jpg)

直播的上课时间是11月9日（下周二）和10日（下周三）的晚上8点。课程主办方是国内 IT 培训的独角兽企业“开课吧”，在课程之外，还会配备助教答疑，以及用于交流的学习讨论群，并提供幸运学员的简历修改。

![](https://cdn.beekka.com/blogimg/asset/202111/bg2021110408.jpg)

微信扫描上方的二维码，或点击[这个链接](https://wx.kaikeba.com/xiaoke/market/landing-page/v2/1E59S4B4E9vbH1TrNnx?kol_ad_code=YZ6VFCQbMxN0fDdUJAh)，了解课程详情并报名，仅需象征性支付 **0.99元** 报名费。听课的同学还会获赠前端的学习资料。

## 科技动态

1、[巨型水稻](https://news.mydrivers.com/1/779/779562.htm)

![](https://cdn.beekka.com/blogimg/asset/202108/bg2021082911.jpg)

新品种巨型水稻在重庆种植成功。这种水稻平均高度1.8米，最高超过2米，比普通水稻高出近一倍。

![](https://cdn.beekka.com/blogimg/asset/202108/bg2021082912.jpg)

巨型稻由于体型大，能承载的穗粒也多，产量要多于普通水稻。但是，它最大的优势在于吃水很深，田里可以蓄60公分到80公分的水。这个深度就可以搞稻鱼共生的项目：养鱼，养虾，养蟹。

![](https://cdn.beekka.com/blogimg/asset/202108/bg2021082913.jpg)

这样既提高农民的收入，又有利于形成生物循环：水稻为动物提供养料和微生物，而动物的排泄物又反过来供养水稻，最终实现化肥、农药、抗生素“零使用”。

2、[风力发电墙](https://www.dezeen.com/2021/08/26/wind-catching-systems-floating-offshore-farm/)

![](https://cdn.beekka.com/blogimg/asset/202109/bg2021090108.jpg)

平常看到的风力发电机，都是巨大的叶片在空中旋转。一家挪威公司另辟蹊径，发明了风力发电墙，采用一个网格状的钢架，上面安装了100多个小型风力涡轮发电机。

这种墙高达300多米，跟埃菲尔铁塔差不多。

![](https://cdn.beekka.com/blogimg/asset/202109/bg2021090109.jpg)

该公司称，这样可以最大程度地利用风能。一面墙的发电量，相当于五个现有的最大的风力发电机，同时发电价格还可以减半。该公司计划未来三年内建成第一面这样的墙。

3、[“近零能耗”样板楼](http://www.bj.xinhuanet.com/2021-08/11/c_1127749972.htm)

![](https://cdn.beekka.com/blogimg/asset/202108/bg2021081104.jpg)

国内首个“近零能耗”样板楼在北京通州区亮相。该楼基本不用外部能源，完全自身供能，支持空调和暖气，一年四季保持室温20摄氏度左右。

楼里分别安装了地源热泵、空气源热泵，光伏发电板等能源装置。热泵从地下“捕捉”地热能，从空气中“吸收”空气能，光伏发电板则通过太阳能发电。然后，地下一共埋了5个储能罐，将这些能量储存起来，为整栋楼供电、冬季供热、夏季降温。

4、[防中风头带](https://www.zeitmedical.com/)

![](https://cdn.beekka.com/blogimg/asset/202108/bg2021081307.jpg)

中风就是脑血管突然破裂，是一种非常危险的突发疾病。一旦发病，轻者脑神经损伤，重者大脑功能丧失，甚至丧命。更可怕的是，中风很难提前发现，发病后必须立刻救治，一分钟也拖不得。

一家美国公司发明了防中风头带，会监控脑电波，一旦发现脑电波出现类似中风的迹象，会立刻向配对的手机发送警报，然后手机自动拨打急救电话，报告坐标。

除了防中风，它也可以用于脑电波的24小时监控。

![](https://cdn.beekka.com/blogimg/asset/202108/bg2021081308.jpg)

5、[土壤发电](https://sifted.eu/articles/bioo-batteries-electricity-soil/)

![](https://cdn.beekka.com/blogimg/asset/202109/bg2021090507.jpg)

一家西班牙公司宣布，开发出了“土壤发电”技术。土壤里面的微生物分解有机物，会释放出电子，从而产生能量。只要把阳极和阴极插在土壤里面，就可以获取电流。

这种电流非常微弱，该公司说，一平方米的肥沃土壤每年可以产生200wh的电能（0.2度电）。这点电能没有其他用途，只能为农田里面的传感器供电，测量土壤湿度、pH 值和气温等，可以解决这些装置的供电问题，降低成本。它还可以为公园绿地里面的 LED 小灯泡供电。

![](https://cdn.beekka.com/blogimg/asset/202109/bg2021090508.jpg)

6、[蓝牙追踪](https://www.theregister.com/2021/09/04/bluetooth_headphones_tracking_oslo/)

![](https://cdn.beekka.com/blogimg/asset/202109/bg2021090601.jpg)

每个蓝牙设备都有一个硬件地址，连接时可以获取。很早就有人提出，可以使用这个地址，追踪用户。为了避免被追踪，每次蓝牙连接时，这个地址都应该随机化，但是很少有厂商这么做。

一个挪威大学生将这作为自己的业余项目，看看现实中能不能做到追踪用户。他在挪威首都奥斯陆骑了12天自行车，共计300公里，收集一路上的蓝牙设备信号。

![](https://cdn.beekka.com/blogimg/asset/202111/bg2021110502.jpg)

他一共发现了9,149个独特的蓝牙设备，其中129个蓝牙耳机被探测到了多次。他将每个设备的发现地点画上地图，其中一个耳机还真的确认了所有者。所以，通过蓝牙追踪用户是可能的，门卫、停车场这样的地方，如果部署了蓝牙追踪，完全可以了解用户的动态。

## 文章

1、[张忠谋演讲：经营人的学习与成长](https://zhidx.com/p/301575.html)（中文）

![](https://cdn.beekka.com/blogimg/asset/202110/bg2021103001.jpg)

台积电创始人张忠谋的最新演讲，介绍他怎么创立和经营管理台积电。

2、[解读国家科学技术大奖](https://zhuanlan.zhihu.com/p/429247683)（中文）

通过国家科学技术大奖，可以知道我国的重大科技突破点在哪里，看出政府的导向。

3、[ADS-B 信号不能对境外提供](https://www.guancha.cn/ZhangZhongZuo/2021_11_03_613334.shtml)（中文）

![](https://cdn.beekka.com/blogimg/asset/202111/bg2021110402.jpg)

ADS-B 是飞机发出的广播信号，明码对外发送自己的位置、高度、速度、航向等信息。连续接收信号，就可以描绘出飞机的航行轨迹，并实时获取其飞行状态。

4、[如何找到数组里面的唯一数字](https://yonatankra.com/how-to-find-a-unique-number-in-a-list-of-pairs/)（英文）

本文介绍一道简单的算法题：数组的所有成员都成对出现，只有一个成员除外（比如`[1,3,17,3,1]`），如何快速找到这个成员。

5、[CSS 属性 accent-color](https://davidwalsh.name/css-accent-color)（英文）

本文介绍一个新的 CSS 属性`accent-color`，可以设置表单的选择框控件（checkbox 或 radio）选中时的颜色。

6、[NGINX 如何将环境变量注入网页](https://www.innoq.com/de/blog/nginx-ssi-env/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202109/bg2021093006.jpg)

NGINX 可以向网页写入内容，本文演示应该怎么做。

7、[为什么数字藏品在技术上不可靠](https://threadreaderapp.com/thread/1445506673108406286.html)（英文）

数字藏品（NFT）是一种基于区块链的数字资产证明机制，目前非常热门。本文讨论了一些技术细节，认为它在技术上有缺陷，作为资产可能并不合适。

8、[如何从谷歌搜索结果删除你的网页](https://btao.org/2021/10/03/removing-from-google/)（英文）

本文介绍一个简单的方法，只要加入一行 HTML 代码，就可以从谷歌搜索结果里面，删除你的网页。

9、[Google、Twitter 和 Spotify 如何处理内部文档](https://blog.doctave.com/2021/09/07/how-google-twitter-and-spotify-build-culture-of-documentation.html)（英文）

![](https://cdn.beekka.com/blogimg/asset/202109/bg2021090812.jpg)

软件公司的内部文档，往往是一个痛点，要么根本没有文档，要么就是杂乱不堪，分散在代码、Word 文件、Confluence 等各处。软件公司越大，这个问题越严重，本文介绍三家大型互联网公司如何处理内部文档。

## 工具

1、[Waydroid](https://waydro.id/)

![](https://cdn.beekka.com/blogimg/asset/202109/bg2021092301.jpg)

一个 Linux 系统的安卓容器，可以让安卓应用在 Linux 桌面电脑的容器里面运行。

2、[fleek](https://fleek.co/)

![](https://cdn.beekka.com/blogimg/asset/202109/bg2021092302.jpg)

一个帮助用户将网站托管在 IPFS 网络的服务，提供免费账户。

3、[Agora Flat](https://flat.whiteboard.agora.io/)

![](https://cdn.beekka.com/blogimg/asset/202110/bg2021102904.jpg)

一个前后端都开源的在线教室，企业可以用来作为自己的内部培训工具，或者对外的远程教学工具。（[@Leooeloel](https://github.com/ruanyf/weekly/issues/2019) 投稿）

![](https://cdn.beekka.com/blogimg/asset/202110/bg2021102905.jpg)

4、[Motion One](https://motion.dev/)

![](https://cdn.beekka.com/blogimg/asset/202109/bg2021092303.jpg)

一个 JS 动画库，底层使用 Web Animations API，上层则是自己设计的简单易懂的语法，可以很轻松让网页产生动画效果。 

5、[Semi Design](https://semi.design/zh-CN)

![](https://cdn.beekka.com/blogimg/asset/202110/bg2021103006.jpg)

抖音前端团队推出的设计系统，支撑字节内部近千平台产品。目前提供50多个组件、国际化14种语言、支持 TypeScript、SSR 等特性。（[@shijiatongxue](https://github.com/ruanyf/weekly/issues/2022) 投稿）

6、[smooth-signature](https://github.com/linjc/smooth-signature)

![](https://cdn.beekka.com/blogimg/asset/202110/bg2021103005.jpg)

带笔锋的手写签名 JS 库，支持 PC /移动端使用，另有[小程序版](https://github.com/linjc/mini-smooth-signature)。（[@linjc](https://github.com/ruanyf/weekly/issues/2020) 投稿）

7、[Sway](https://swaywm.org/)

![](https://cdn.beekka.com/blogimg/asset/202109/bg2021092304.jpg)

Linux 系统的平铺式窗口管理器，完全兼容 i3。区别是，i3 底层的显示协议是 X11，而 Sway 是 Wayland。

8、[微图](https://devtool.tech/tiny-image)

![](https://cdn.beekka.com/blogimg/asset/202110/bg2021103007.jpg)

一个批量压缩图片的网页工具，纯浏览器端压缩，不经过服务器，速度较快。（[@shfshanyue](https://github.com/ruanyf/weekly/issues/2021) 投稿）

9、[Tool.Graphics](https://tool.graphics/geometric)

![](https://cdn.beekka.com/blogimg/asset/202109/bg2021092405.jpg)

这个网站可以生成各种几何图形填充的随机图片，并且能够可以调节参数。

10、[Read Aloud](https://github.com/ken107/read-aloud)

![](https://cdn.beekka.com/blogimg/asset/202109/bg2021092413.jpg)

开源的浏览器朗读插件，可以朗读整个网页或选定文本，支持40多种语言，包括中文。

## 资源

1、[日本传统色系](https://zh.wikipedia.org/wiki/%E6%97%A5%E6%9C%AC%E4%BC%A0%E7%BB%9F%E8%89%B2%E7%B3%BB)

![](https://cdn.beekka.com/blogimg/asset/202109/bg2021092110.jpg)

维基百科资料，列出了日本古典文学里经常出现的颜色，常用于和服或其他日本传统艺术和手工艺品。

2、[安全的互联网产品](https://foundation.mozilla.org/en/privacynotincluded/)

![](https://cdn.beekka.com/blogimg/asset/202109/bg2021092214.jpg)

Mozil 基金会在官网上列出了，经过该组织审核，确认为安全的、可以保护用户隐私的硬件和软件名单。

3、[Modern Unix](https://github.com/ibraheemdev/modern-unix)

该仓库收集传统 Unix 命令行工具的现代替代品，比如 lds 替代 ls、ripgrep 替代 grep。（[@ameizi](https://github.com/ruanyf/weekly/issues/2017) 投稿）

4、[awesome-console-services](https://github.com/chubin/awesome-console-services)

该仓库收集各种供命令行使用的外部服务，比如`curl ip-api.com`可以查看当前 IP 地址对应的地理位置。（[@ameizi](https://github.com/ruanyf/weekly/issues/2018) 投稿）

5、[awesome-metaverse](https://github.com/shadowcz007/awesome-metaverse)

该仓库收集元宇宙相关资源。（[@shadowcz007](https://github.com/ruanyf/weekly/issues/2023) 投稿）

## 图片

1、[废弃的摩托罗拉总部](https://www.abandonedspaces.com/industry/motorola.html)

1976年，摩托罗拉公司将总部搬到了芝加哥郊区。

手机就是在这里发明的，它使得摩托罗拉成为无线通信巨头。但是，这里也见证了，这家公司逐渐走下坡路，最终分崩离析。

2007年至2009年，连续遭受重大亏损后，摩托罗拉决定拆分为两个独立的公司，随后决定将总部从郊区搬到芝加哥市中心。

原来的总部被废弃后，2017年决定拆除，改建为多功能综合体。下面是拆除前的一些照片，墙上还留有没有撕掉的标语和宣传画，记录了这家公司的兴衰。

![](https://cdn.beekka.com/blogimg/asset/202108/bg2021081417.jpg)

![](https://cdn.beekka.com/blogimg/asset/202108/bg2021081418.jpg)

![](https://cdn.beekka.com/blogimg/asset/202108/bg2021081419.jpg)

![](https://cdn.beekka.com/blogimg/asset/202108/bg2021081420.jpg)

![](https://cdn.beekka.com/blogimg/asset/202108/bg2021081421.jpg)

2、[埃舍尔未完成的画](https://www.universiteitleiden.nl/en/news/2020/04/how-mathematician-hendrik-lenstra-completed-an-unfinished-artwork-by-escher)

荷兰画家埃舍尔（1898年－1972年）以创作视觉错误绘画而闻名。

在他晚年，有一幅作品描绘了一个观众正在画廊里观看画作，画廊的窗户与城市的街景融合在一起。

![](https://cdn.beekka.com/blogimg/asset/202108/bg2021081504.jpg)

不知道什么原因，这幅画的中心部分没有画，而是留出一个空白，埃舍尔写上了自己的签名。

2000年，一个美国数学教授在飞机上翻看杂志，偶然看到了这幅画。他突然意识到，这是一个螺旋扩张，可以用数学公式表达。

他就写了一个程序，让软件自动生成这幅画中间缺少的部分。

![](https://cdn.beekka.com/blogimg/asset/202108/bg2021081503.jpg)

## 文摘

1、[斜率比截距重要](https://matt-rickard.com/hire-slope-not-intercept/)

忘掉 y 轴的截距吧，长远来看，斜率是唯一重要的事情。

如果 x 轴表示时间，y 轴表示你要实现的目标，那么实现目标的过程可以画成一条直线。

![](https://cdn.beekka.com/blogimg/asset/202108/bg2021081907.jpg)

这条直线可以用两个变量描述：y 轴截距（直线与 y 轴的交点）和斜率（y 随时间变化的速度）。

如果我们把 y 轴截距看成是你的起点，那么斜率就是你为了实现目标，而适应、学习和付出努力的前进速度。

**即使一条线的起点远低于另一条线，只要它的斜率更大，终究会超越前一条线。**

你可能听过这样的建议：做一个终身学习者，每天学一点，不断进步。很少有人能够遵循这条建议，因为在开始后的很长时间内，根本看不到有什么效果。时间周期越短，直线看起来越平坦，当你远远落后时，这是非常令人沮丧的。

但是，只要坚持下去，保持向上的斜率，长期以后，你将远远地超越原来的人生道路。

记住，短期总是比我们想象的要长，各种打击足以让你灰心丧气，但是 **长期总是比我们想象的要短。**

同一个道理，在招聘时，有潜力但经验不足的候选人，长期来看，比经验丰富但潜力不足的候选人，对公司更有帮助。

总之，当事情没有达到你的目标时，不要放弃，每一个伟大的事业都始于一个小小的念头。学习一项新技能，每天进步一点点，短时间内，一切看起来都是老样子，但是随着时间的推移，改进会持续累积起来，进步会越来越明显。

## 言论

1、

我很讨厌每个网站都使用 Discord 作为讨论区。

这样很难搜索以前的内容，更糟的是，不太容易在 Discord 切换身份。我不愿意将在 Discord 使用的游戏爱好者身份，与咨询软件问题的用户身份混在一起。

-- [Hacker News 读者](https://news.ycombinator.com/item?id=28550566)

2、

有些开源软件项目欢迎协作，并鼓励外部贡献，例如 Linux 内核。

还有一些开源项目几乎与世隔绝，无法容忍外人插手，GIMP、GTK、Gnome 的维护者就属于后一类。除非你是内部集团的一部分，否则你的代码不会得到任何合并。

-- [Hacker News 读者](https://news.ycombinator.com/item?id=28579444)

3、

现在的社会不是为了人的发展，而是人为了外部世界而发展，反过来了。

-- [骆华忠](https://cn.nytimes.com/china/20210714/lying-flat-in-china/)，摘自《纽约时报》对他的专访

4、

用户研究中，有一个众所周知的事实。如果你询问用户是否需要新功能，他们通常会大叫“是的”。毕竟谁会不想要更多的功能呢？

但是，等到发布以后，你才意识到用户可能不使用这个功能。

-- [《当用户从不使用他们要求的功能时》](https://web.eecs.utk.edu/~azh/blog/featurestheywanted.html)

5、

理财的核心原则，就是两句话：“增加收入，减少开支”。

但是，这两句话相互矛盾，需要不同的技能。增加收入通常需要花钱，提高获利潜力。减少开支意味着对于投资新事物持有保守态度，这种心态会阻止你赚更多的钱。

-- [《我的十条金钱规则》](https://jonpauluritis.com/articles/my-top-10-money-rules/)

## 历史上的本周

2020年（第 131 期）：[你的头脑是二值逻辑，还是三值逻辑？](https://www.ruanyifeng.com/blog/2020/10/weekly-issue-131.html)

2019年（第 79 期）：[我们的生活越来越依赖机器](https://www.ruanyifeng.com/blog/2019/10/weekly-issue-79.html)

2018年（第 28 期）：[软件开发是真正的知识吗？](https://www.ruanyifeng.com/blog/2018/10/weekly-issue-28.html)

## 订阅

这个周刊每周五发布，同步更新在[阮一峰的网络日志](http://www.ruanyifeng.com/blog)和[微信公众号](http://weixin.sogou.com/weixin?query=%E9%98%AE%E4%B8%80%E5%B3%B0%E7%9A%84%E7%BD%91%E7%BB%9C%E6%97%A5%E5%BF%97)。

微信搜索“阮一峰的网络日志”或者扫描二维码，即可订阅。

![](https://cdn.beekka.com/blogimg/asset/202103/bg2021030402.jpg)

（完）

