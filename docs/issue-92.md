# 科技爱好者周刊：第 92 期

这里记录每周值得分享的科技内容，周五发布。

本杂志开源（GitHub: [ruanyf/weekly](https://github.com/ruanyf/weekly)），欢迎提交 issue，投稿或推荐你的项目。

周刊讨论区的帖子[《谁在招人？》](https://github.com/ruanyf/weekly/issues/983)，提供大量就业信息，欢迎访问或发布工作/实习岗位。

![](https://www.wangbase.com/blogimg/asset/201912/bg2019121006.jpg)

封面图：土星的卫星[土卫二](https://phys.org/news/2019-12-enceladus-stripes.html)，表面被厚厚的冰层覆盖，已经证实冰层之下有液态水的海洋。

## 刊首语

最近，我有一个猜想。

我们知道，人眼有[“视觉暂留”](https://baike.baidu.com/item/%E8%A7%86%E8%A7%89%E6%9A%82%E7%95%99)现象：影像消失后，人眼仍能保留影像100毫秒～400毫秒。这就是电影的原理，每秒播放24张图片，影像就动起来了。

![](https://www.wangbase.com/blogimg/asset/202001/bg2020012902.jpg)

我就想问，那么有没有“听觉暂留”呢？我们听到的声音是连贯的，有没有可能其实也是一个个分离的片断？

查了一下，还真有听觉暂留，叫做[“哈斯效应”](https://baike.baidu.com/item/%E5%93%88%E6%96%AF%E6%95%88%E5%BA%94)。如果两个声音相隔5毫秒～35毫秒之间，人耳会认为这是一个声音。

相比“视觉暂留”的至少100毫秒，“听觉暂留”要短得多，最短只有5毫秒，足足相差了20倍。

我猜想，这会不会跟信息的传输速度有关。视频的信息量比较大，音频的信息量比较小，如果人体神经系统的信号传播速度是恒定的，那么传输视频就会多耗时。为了把所有视频信息传输完，视觉就暂留久一点。

一个有趣的经验是，4分钟的 MP3 文件（44.1kHz 抽样）体积大概是 4MB 左右，而4分钟的 1080P 视频（H.264编码）体积是 80MB 左右，相差也约是20倍。

## 资讯

1、[消灭小儿麻痹症有可能失败](https://www.sciencemag.org/news/2019/12/polio-eradication-program-faces-hard-choices-endgame-strategy-fails)

![](https://www.wangbase.com/blogimg/asset/201912/bg2019123112.jpg)

1988年，世界卫生组织决心在全球消灭脊髓灰质炎（小儿麻痹症），这是人类历史上规模最大的公共卫生行动。经过30年艰苦的努力，2016年只有三个国家还存在小儿麻痹症的病例：尼日利亚，阿富汗和巴基斯坦。

但是，2019年的形势非常不乐观。阿富汗和巴基斯坦出现了116个病例，是2018年的四倍。更糟糕的是，非洲有12个国家/地区报告了196个病例，引发这些病例的病毒不是自然发生的，而是活疫苗衍生的。这就是说，那些儿童服用的疫苗里面，包含的一种灭活毒株恢复了毒力和传播能力。

这意味着，世界卫生组织必须给已经口服疫苗的儿童，再服用一次新的疫苗，而且必须尽快，否则小儿麻痹症可能重新爆发，导致前功尽弃。

2、[耐克撤离亚马逊](https://www.forbes.com/sites/stephenmcbride1/2020/01/02/is-this-the-beginning-of-amazons-apocalypse/#365b29c0726c)

![](https://www.wangbase.com/blogimg/asset/202001/bg2020010215.jpg)

2019年11月，世界最大的体育用品公司耐克宣布离开亚马逊。它将从亚马逊网站撤出所有产品，在自家的在线商店独家销售。这是与亚马逊分手的最大零售商。越来越多的公司选择这条路，不再需要电商平台带来的流量，而是自建网店，其中包括劳力士和 LV 这样的世界名牌。

事实上，今天任何一家公司都可以自建像亚马逊一样的网店。在美国，你可以使用 Shopify 建店，在社交媒体做广告，使用 Stripe 处理支付，通过 ShipBob 管理库存和订单，用 Returnly 处理退货，用 DarkStore 提供当日送货服务。这些 SaaS 服务的成本只需要几百美元，让你可以向消费者提供跟亚马逊一样的服务。

![](https://www.wangbase.com/blogimg/asset/202001/bg2020010216.jpg)

3、[中国人口真正突破14亿，你知道意味着什么？](https://china.huanqiu.com/article/9CaKrnKoWgj)

![](https://www.wangbase.com/blogimg/asset/202001/bg2020013004.jpg)

2020年1月17日，国家统计局发布，截至2019年末，中国大陆总人口突破14亿人，为140005万人，比上年末增长467万人。其中，农村人口有5.5亿，城镇人口8.48亿。

中国大陆人口突破14亿， 这是什么概念呢？欧盟28国的总人口是5.12亿，美国加拿大3.64亿，日本1.27亿，澳大利亚新西兰0.3亿。这些国家的人口加在一起是10.33亿。另外亚洲四小龙加在一起不到9000万，这就是全世界发达社会的总盘子，它们一共大约有11.2亿人口，比中国大陆少2亿多。

中国大陆的14亿人的人均 GDP，2019年首次突破1万美元。最新排名还没出来，2018年中国的人均 GDP 排在世界第67位，前面的国家有墨西哥(66名)、俄罗斯(60名)，后面两名是土耳其和保加利亚。

4、[电动椅](https://www.businessinsider.com/segway-s-pod-personal-transporter-egg-hoverchair-2020-1)

![](https://www.wangbase.com/blogimg/asset/202001/bg2020010401.jpg)

平衡车公司 Segway 推出了最新的概念产品 S-Pod，这是一个两轮的电动椅，具有自我平衡能力。用户坐在上面，使用操纵杆控制方向，最高时速可以到40公里。但是，如果达到这个速度，乘客应该会感到非常害怕。

Segway 说，S-Pod 的灵感来自电影《侏罗纪世界》的观光车，不过实际上更像电影《瓦力》里面的飞行椅。它还不能上马路，Segway 建议在封闭的园区使用，比如机场、主题公园和购物中心。这个产品最快也要到2021年或更晚的时间才会上市。

![](https://www.wangbase.com/blogimg/asset/202001/bg2020010402.jpg)

![](https://www.wangbase.com/blogimg/asset/202001/bg2020010403.jpg)

5、[丹尼索瓦人](https://kaoyan.eol.cn/gansu/yanzhao/201912/t20191218_1699691.shtml)

![](https://www.wangbase.com/blogimg/asset/202001/bg2020010404.jpg)

![](https://www.wangbase.com/blogimg/asset/202001/bg2020010405.jpg)

近日，美国权威的《考古学》杂志评选兰州大学的丹尼索瓦人研究成果，为2019年全球十大考古发现的第五名。该研究成果同时入选《科学》杂志的2019年十大科学发现。

1980年，甘肃省夏河县的藏族僧人在当地的白石崖溶洞内，发现了一个古人类的下颌骨化石，与现代人有明显差异。这个化石先送到了当地的活佛，后来又送到了兰州大学。直到2010年，才真正展开研究。

![](https://www.wangbase.com/blogimg/asset/202001/bg2020010406.jpg)

研究人员确认，该化石距今16万年，属于丹尼索瓦人。这个发现震惊了所有人，因为这是第一次在阿尔泰山地区以外的地方，发现丹尼索瓦人的化石。同时，这也是青藏高原地区已知最早的古人类活动踪迹。这意味着，早在十多万年前，丹尼索瓦人就已经从中亚来到了青藏高原，并在那里生活了下来，而且有能力在该地区严酷的冬季御寒。

7、**一句话消息**

> - [Facebook](https://www.cnet.com/news/facebook-is-testing-a-way-to-speed-up-fact-checking-on-the-social-network/) 开始招聘社区评论员，帮助鉴别虚假帖子。系统会先过滤出可疑的用户，然后把他们的帖子发给社区评论员，评判是否为虚假帖子。

> - [路透社报道](https://www.reuters.com/article/us-autos-usa-used-analysis/rising-old-used-car-prices-help-push-poor-americans-over-the-edge-idUSKBN1WQ1AP)，美国二手车价格2019年平均为8657美元，比2010年增加了75％。相比之下，同期新车价格只增加25%。很多穷人因为买不起二手车，生活出现了困难。

> -  [中国政府](https://news.sina.cn/gn/2020-01-19/detail-iihnzahk5135558.d.html)1月19日宣布禁塑令。2020年底，将禁止生产销售超薄塑料购物袋、超薄聚乙烯农用地膜、一次性发泡塑料餐具、一次性塑料棉签、含塑料微珠的日化产品。无法回收的塑料制品，终止要开始退出历史了。

![](https://www.wangbase.com/blogimg/asset/202001/bg2020012002.jpg)

## 文章

1、[void 运算符在 ES6 的运用](https://gist.github.com/slikts/dee3702357765dda3d484d8888d3029e)（英文）

JavaScript 语言的 void 运算符，不是一个很有用的运算符。但是作者提出，它在 ES6 中可以用来提示某个操作具有副作用。

2、[使用 pyhttptest 轻松测试 RESTful API](https://hackernoon.com/testing-rest-apis-easily-in-python-with-pyhttptest-1d2x328d)（英文）

本文介绍了一个 Python 工具 pyhttptest，可以很方便地对 REST API 进行测试。

3、[CSS 圆形的写法](https://cloudfour.com/thinks/css-circles/)（英文）

本文总结了使用 CSS 在网页上生成一个圆形的四种方法，然后讨论了这些方法的应用。

4、[北极何时出现第一个无冰的夏天](https://interactive.carbonbrief.org/when-will-the-arctic-see-its-first-ice-free-summer/)（英文）

![](https://www.wangbase.com/blogimg/asset/201912/bg2019122101.jpg)

![](https://www.wangbase.com/blogimg/asset/201912/bg2019122102.jpg)

北极没有陆地，就是一块巨大的海冰大陆。本文是长篇科学报道，介绍气温上升对北极的影响，科学家分析合适北极的海冰最快会在什么时候完全融化。

5、[我制作了室外电脑椅](https://mgsloan.com/posts/deck-desk/)（英文）

![](https://www.wangbase.com/blogimg/asset/201912/bg2019122112.jpg)

![](https://www.wangbase.com/blogimg/asset/201912/bg2019122113.jpg)

本文作者介绍他如何制作一把室外的电脑椅。

6、[海耶达尔的 Kon-Tiki 航行](https://www.lifeinnorway.net/kon-tiki-voyage/)（英文）

![](https://www.wangbase.com/blogimg/asset/201912/bg2019122116.jpg)

一般认为，南太平洋岛屿的原住民来自东南亚，但是挪威航海家海耶达尔认为，南美洲印第安人也有可能乘坐木筏到达那里。为了证明这是可能的，他于1947年进行了一次实验，亲身乘坐一艘名为 Kon-Tiki  的木筏，在没有任何现代动力的情况下，从秘鲁漂流到复活节岛，历时97天。

本文介绍了他的这次壮举。海耶达尔后来写过一本书《Kon-Tiki Voyage》，记录这次航行，中译本为《孤筏重洋》，推荐阅读。

7、[Git 的提交信息怎么写？](https://nitayneeman.com/posts/understanding-semantic-commit-messages-using-git-and-angular/)（英文）

提交代码的时候，需要写提交信息。本文介绍如何规范地写提交信息。

8、[JavaScript 设计模式](https://wanago.io/2019/11/11/javascript-design-patterns-1-singleton-and-the-module/)（英文）

一组系列文章，通过 JavaScript 语言的例子介绍各种设计模式，同时也给出 TypeScript 语言的示例。

9、[ES6 模块字符串打造 HTML 模板库](https://theproductiveprogrammer.github.io/html-in-js/)（英文）

本文提出，由于 ES6 引入了模板字符串功能，专门的网页模板库已经没必要了。

10、[我为什么从谷歌离职？](https://mtlynch.io/why-i-quit-google/)（英文）

作者在谷歌工作了四年，由于晋升失败，开始认识到只有那些看得见的工作成绩，才会对晋升有帮助，最终对这个工作产生了厌倦。所有想了解工程师如何在大型互联网公司生存下来的人，都应该读读这篇文章。

## 工具

1、[极客阅读](https://www.yuque.com/docs/share/74c8695f-d2ce-4dbd-aee1-b92be37ecdf4)

一个安卓 App，技术阅读的入口，汇聚了国内外技术博客、产品动态、公众号文章。（@[wxyudl](https://github.com/ruanyf/weekly/issues/1007) 投稿）

2、[微信 Markdown 编辑器](https://github.com/doocs/md)

一款个微信公号文章的的编辑器，可以将 Markdown 编辑器，基于 [wechat-format](https://github.com/lyricat/wechat-format) ，开放了一些可定制项目格式转为富文本格式，再贴到微信编辑器。（@[acbin](https://github.com/ruanyf/weekly/issues/1011) 投稿）

3、[Hammerspoon](https://www.hammerspoon.org/)

Mac 电脑的自动化操作工具，使用 Lua 语言编写脚本。

4、[Killersheep](https://github.com/vim/killersheep)

![](https://www.wangbase.com/blogimg/asset/201912/bg2019121711.jpg)

一个 Vim 游戏，主要目的是展示 Vim 8.2 的新功能。

5、[WhoisXML API](https://ip-geolocation.whoisxmlapi.com/api)

该网站提供各种网络信息查询，比如 IP 地理地址、Whois、DNS 等。

6、[Raileo](https://raileo.com/)

该网站提供网站状态监控服务。免费账户可以监控三个网址，监控内容包括：运行时间监控、性能监控、SSL 监控和页面大小监控。

7、[SketchyComponent](https://github.com/m-zylab/SketchyComponent)

![](https://www.wangbase.com/blogimg/asset/201912/bg2019121803.jpg)

一个手绘风格的安卓组件库。（@[5A59](https://github.com/ruanyf/weekly/issues/1017) 投稿）

8、[c8](https://github.com/bcoe/c8)

一个 Node.js 的命令行工具，可以生成当前脚本的代码覆盖报告，即哪些代码是实际执行的，哪些没有执行。

9、[dockerpi](https://github.com/lukechilds/dockerpi)

一个 Docker 镜像文件，可以在 x86 计算机上运行树莓派环境。这里的重点是树莓派是 ARM 架构，所以等于在 x86 架构上模拟 ARM 架构。

10、[Boost Note](https://github.com/BoostIO/BoostNote.next)

![](https://www.wangbase.com/blogimg/asset/201912/bg2019122001.jpg)

一个笔记软件，有 Web 版和跨平台的桌面 App。

11、[playwright](https://github.com/microsoft/playwright)

一个支持  Chrome、Safari、Firefox、Edge 的浏览器自动化工具，即一个自动化脚本对所有浏览器都有效，由 Puppeteer 团队出品。

## 资源

1、[2020年的技术趋势](https://danieleckler.com/2020/)

![](https://www.wangbase.com/blogimg/asset/201912/bg2019122209.jpg)

该网站列出并详细介绍了2020年重要的60种技术趋势。

2、[undraw](https://undraw.co/illustrations)

![](https://www.wangbase.com/blogimg/asset/201912/bg2019122301.jpg)

一个免费的插图网站，可以在上面寻找合适的插图，用于商业用途。

3、[CVE 搜索](http://cve.mitre.org/cve/search_cve_list.html)

CVE 是严重的计算机 Bug 的一个编号系统。这是 CVE 的官方搜索系统，可以查找已经编号的 Bug，比如搜索 WordPress，可以返回2392条结果。

4、[101道 NumPy 练习题](https://www.machinelearningplus.com/python/101-numpy-exercises-python/)

NumPy 是用于数据分析的  Python 模块，这里有101道练习题，帮你学会使用这个模块。（@[ketra21](https://github.com/ruanyf/weekly/issues/1022) 投稿）

5、[iNaturalist](https://www.inaturalist.org/)

![](https://www.wangbase.com/blogimg/asset/201912/bg2019122613.jpg)

美国《国家地理》杂志发起的一个全球性协作项目。全世界的用户拍摄自己周围大自然的照片，上传到网站，由专家进行鉴定。以后，其他用户打开地图时，就能在该位置看到这些照片，上图就是大黄蜂的照片。目前，已经有83万爱好者加入了这个项目，上传了3000万张照片。

## 图片

1、[最安全的旅行方式](https://en.wikipedia.org/wiki/Aviation_safety#Transport_comparisons)

有三种指标，可以衡量某一种旅行方式的死亡风险。

1. 每十亿次出行的死亡人数
2. 每十亿小时出行的死亡人数
3. 每十亿公里出行的死亡人数

下表是1990-2000年英国的统计数据。

![](https://www.wangbase.com/blogimg/asset/201911/bg2019111714.jpg)

可以看到，按照公里算，飞机是最安全的方式，但是按照出行次数算，飞机的死亡率是小汽车的三倍。另外，三种标准都显示，公共汽车非常安全。

2、[垃圾回收利用](https://www.washingtonpost.com/graphics/2019/climate-solutions/israeli-startup-ubq-turning-trash-into-plastic-products/)

以色列新建了一家垃圾处理厂，可以将腐烂的食物、塑料袋、脏纸、垃圾瓶等等回收利用。

步骤1：未经处理的垃圾运进来。

![](https://www.wangbase.com/blogimg/asset/201911/bg2019112105.jpg)

步骤2：将垃圾分类、干燥、切碎，然后磨成棕灰色的小碎屑。

![](https://www.wangbase.com/blogimg/asset/201911/bg2019112106.jpg)

步骤3：将小碎屑融化、粉碎并转化为热塑线。

![](https://www.wangbase.com/blogimg/asset/201911/bg2019112107.jpg)

步骤4：将塑料线切成粒料，塑料制造商将用它们来制造各种产品。

![](https://www.wangbase.com/blogimg/asset/201911/bg2019112108.jpg)

第5步：根据客户要求的颜色，做成圆形或圆柱状的颗粒。

![](https://www.wangbase.com/blogimg/asset/201911/bg2019112109.jpg)

步骤6：制成最终的塑料制品，比如笔架或垃圾桶。

![](https://www.wangbase.com/blogimg/asset/201911/bg2019112110.jpg)

## 文摘

1、[天气模型](https://www.washingtonpost.com/weather/2019/11/22/so-what-exactly-are-european-american-weather-models/)

天气预报主要依靠天气模型。由于模型和计算能力的进步，天气预报的准确度可以每十年提高大约一天。换句话说，今天的五天预报大约与1990年代的三天预报一样准确。

![](https://www.wangbase.com/blogimg/asset/201911/bg2019112301.jpg)

目前，主要有两种天气模型：覆盖全球的全球模型和覆盖某个地区的高分辨率模型。全球模型主要关注影响整个大陆的天气现象，例如冷锋和大风暴。由于全世界的天气是互相影响的，全球模型会对整个星球建模。

最常见的全球模型有两个：美国模型和欧洲模型。它们都有自己的优缺点。

美国模型正式名称是全球天气预报系统模型，简称 GFS。它由美国国家气象局创建和运营，每天运行四次，对未来16天的天气做出预测。过去四年中，美国模型背后的计算能力增长了十倍，该模型现在每秒能够处理10的15次方的计算，运行它的超级计算机是世界上最快的30大超级计算机之一。

欧洲模型正式名称是欧洲中距离天气预报中心模型，简称 ECMWF。它以它的运营机构命名，背后是34个参与天气建模的国家的合作。欧洲模型拥有强大的计算能力，甚至比美国模型更强大，所以通常认为它是更好的全球模型。2012年，欧洲模式准确预测了飓风桑迪的路径，使它赢得了比美国模式更好的名声。

1979年，欧洲模型使用的第一代超级计算机，计算能力大约是现代智能手机的十分之一，但是今天它拥有的计算能力换算成智能手机，大约会堆成20英里高。下图是欧洲模型的超级计算机的一小部分。

![](https://www.wangbase.com/blogimg/asset/201911/bg2019112302.jpg)

欧洲模型只能对10天内的天气做出预测。一般认为，十天是准确天气预报的“实际极限 ”。一到两天的天气预报最准确，三到五天中等准确，其后的可靠性越来越差。虽然平均而言，欧洲模型更准确，但美国模型有时会得到更好的预测。当模型之间的预测不一致时，气象学家会了解每个模型的优势和劣势，对这两种模型的预测以及其他模型的结果，进行综合考虑。当预测结果相差很大时，明智的做法是降低天气预报的置信度，并将各种可能性都告诉大众。

![](https://www.wangbase.com/blogimg/asset/201911/bg2019112303.jpg)

最后，关于高分辨率模型，它们专注于预测更短时间范围和更短距离的复杂天气过程，比如预测雷暴或降雪的结构和危害。全球模型的单个预测网格是六到十英里，高分辨率模型可以分析两到三英里内的天气变化。

## 言论与数字

1、

我使用树莓派 4 时，发现 CPU 温度大约为 73 度。我拿一个2英镑的硬币放在 CPU 上，温度在几秒钟内下降 10 度。

-- [HN 读者](https://news.ycombinator.com/item?id=21540391)，谈如何给树莓派 4散热

2、

我的梦想是，能够负担得起世界一流城市的生活，同时仍能完全控制自己的时间。

-- [《我出售了自己创立的 SaaS 业务》](https://tylertringas.com/selling-my-bootstrapped-saas-business/)

3、

2018年，9.8%的美国人搬过至少一次家。这是自1947年有这项统计以来的最低值，美国的人口流动正在不断下降。

-- [《纽约时报》](https://www.nytimes.com/2019/11/20/us/american-workers-moving-states-.html)

4、

如果你有一只宠物，你会将它一生都锁在笼子里吗？经常不给它吃东西，告诉它外面的世界很可怕，不如待在笼子里？

可悲的是，这就是许多人对待自己内心创造力的方式。

-- [《释放你的创造力》](https://elliottfienberg.com/unlocking-the-creative-body/)

5、

大多数互联网公司的看法是，如果你是免费用户，那么我们就可以把你当作产品的一部分，来使用你。

-- [HN 读者](https://news.ycombinator.com/item?id=21609987)

6、

苹果公司的市值等于丹麦（世界第28大经济体）的净资产，用户数量等于中国人口。所以，如果把苹果公司看成一个国家，它将是一个超级大国，对世界人民的生活、政治和文化产生了深远的影响。

--[《欢迎来到库比蒂诺共和国》](https://members.tortoisemedia.com/2020/01/06/day-1-apple-state-of-the-nation-2/content.html)

## 回顾

去年的本周：[《周刊第 41 期》](http://www.ruanyifeng.com/blog/2019/01/weekly-issue-41.html)

![](https://www.wangbase.com/blogimg/asset/201901/bg2019012501.jpg)

## 订阅

这个周刊每周五发布，同步更新在[阮一峰的网络日志](http://www.ruanyifeng.com/blog)、[微信公众号](http://weixin.sogou.com/weixin?query=%E9%98%AE%E4%B8%80%E5%B3%B0%E7%9A%84%E7%BD%91%E7%BB%9C%E6%97%A5%E5%BF%97)和[语雀](https://yuque.com/ruanyf/share/)。

微信搜索“阮一峰的网络日志”或者扫描二维码，即可订阅。

![](http://www.ruanyifeng.com/blogimg/asset/2018/bg2018042311.jpg)

（完）
