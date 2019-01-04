# 每周分享第 38 期

这里记录过去一周，我看到的值得分享的东西，每周五发布。

欢迎投稿，或推荐你自己的项目，请前往 GitHub 的 [ruanyf/weekly](https://github.com/ruanyf/weekly) 提交 issue。

![](https://www.wangbase.com/blogimg/asset/201901/bg2019010401.jpg)

（题图：公交站的电子墨水屏，上海，2018）

最近我总在想，手机支付是否真的方便？

我现在都是空手出门，除了手机，什么也不带，比起以前确实方便了。问题是，我一定必须带手机，以前是必须带钱包，现在是必须带手机。如果我忘了带手机，或者在路上，手机丢了、坏了、没电了，那就惨了，我没法打电话，没法坐地铁，没法付钱……

比较好的方式，似乎不是手机支付，而是基于生物识别的某种支付方式，比如扫脸支付。只要脸部识别出我是谁，就自动从账户扣款，这样就摆脱了手机的依赖，支付和手机就脱钩了。但是，这样也有问题，就是把麻烦和成本都留给了收款方，对方必须有扫脸的设备，才能接受你的付款，要是他的设备坏了，你照样付不成。

进一步说，我觉得，支付越方便，背后的技术实现一定越复杂，必定就越脆弱。原来应该由每个人承担的复杂性（自行携带和保管实体货币），现在都由技术封装了。当所有人都不再保留纸币，都使用数字支付那一天来临的时候，一定是任何技术故障都不能发生。举例来说，万一发生大停电，我们连生活必需品都没法买，只能央求对方接受白条。

## 新闻

1、[新型偷车方式](https://www.cbc.ca/news/canada/toronto/car-thefts-rising-1.4930890)

![](https://www.wangbase.com/blogimg/asset/201901/bg2019010402.jpg)

加拿大多伦多出现了一种新型偷车方式。有些车钥匙会发出电波，只要靠近车辆，车门就会自动打开，主人也很大意，往往一回家，就将车钥匙放在门口的柜子上。

半夜里，窃贼拿着信号捕捉器靠近房门，找到车钥匙的信号，再将其放大，传给车旁边的同伙，同伙将信号再对准车门。车门发现信号，就自动打开，然后车贼设法发动汽车，将它开走。

2、[废弃煤矿种粮食](https://www.bbc.com/news/uk-wales-46221656)

![](https://www.wangbase.com/blogimg/asset/201901/bg2019010403.jpg)

很多煤矿地下有很长的矿道，一旦煤矿枯竭，这些矿道就没用了。英国科学家正在尝试，将这些矿道用来种粮食。

矿道是巨大的温室，不用担心天气和季节，而且温度和湿度水平通常是恒定的，还有现成的水以及二氧化碳。矿道的照明将来自LED灯，或者光纤技术可以将太阳光反射到地面40米。科学家认为，在里面发展“垂直农业”，一来可以为矿山注入新的生命，二来可能比地面的粮食产量更高。

3、[谷歌翻译改版](https://www.blog.google/products/translate/new-look-google-translate-web/)

![](https://www.wangbase.com/blogimg/asset/201901/bg2019010404.jpg)

谷歌翻译最近改版了，除了 UI，最大变化是提供了单独的文件翻译，支持 .doc、.docx、.odf、.pdf、.ppt、.pptx、.ps、.rtf、.txt、.xls 或 .xlsx 等文档直接上传翻译。（@[Anderson-Liu](https://github.com/ruanyf/weekly/issues/123) 投稿）

4、[世界最长寿的人](https://www.leafscience.org/valery-novoselov-investigating-jeanne-calments-longevity-record/)

![](https://www.wangbase.com/blogimg/asset/201901/bg2019010405.jpg)

法国老妇人 Jeanne Calment 是可以确认的世界最长寿的人，生于1875年2月21日，死于1997年8月4日，活了122岁。最近，莫斯科国立大学的一位博士质疑这可能是一个骗局。

首先，该地区其他长寿老人的寿命，几乎都没有超过100岁，与 Jeanne Calment 相差太大，后者是一个突出的个例，这是很可疑的。其次，她过了100岁，行动还非常自如，也没有皮肤萎缩的迹象，这也很不寻常。最后，她早年的照片与晚年的照片，眼睛之间的距离不一致（上图）。因此，博士大胆推测，根据历史记录，1934年时 Jeanne Calment 的女儿死了，实际上可能是她本人死了，然后她女儿冒充了她，为了可以继续领取政府的年金。如果这个推测是真的，那么她女儿1997年去世，真实年龄是99岁。

5、[高通公司的笔记本芯片](https://gizmodo.com/the-snapdragon-8cx-is-qualcomms-first-purpose-built-chi-1830914214)

![](https://www.wangbase.com/blogimg/asset/201901/bg2019010406.jpg)

高通公司发布该公司的第一款笔记本专用 CPU“Snapdragon 8cx”。这款 ARM 芯片是7纳米制程，具有 4G 通信能力，可以在休眠时依然保持 4G 连接，而且它可以提供至少一整天的续航时间。

已经有很多人猜测，不久的将来，Apple 的 MacBook 系列将使用 ARM 芯片，而不是今天使用的英特尔芯片。

6、[最后一代汽车内燃机](https://www.detroitnews.com/story/business/autos/foreign/2018/12/05/vw-says-combustion-cars-will-fade-away/38677503/)

![](https://www.wangbase.com/blogimg/asset/201901/bg2019010407.jpg)

德国大众汽车公司表示，该公司计划2026年推出最后一代汽油和柴油车，然后放弃内燃机汽车，全部转向电动汽车的生产。这是为了减少二氧化碳排放以应对气候变化。上图是大众最新的电动车型 ID Neo。

大众公司预计，到了2050年，除了充电设施不足的地区可能仍会有一些汽柴油车型，其他地区将全部是电动车。

7、[尿液生物砖](https://www.news.uct.ac.za/article/-2018-10-24-world-first-bio-bricks-from-urine)

![](https://www.wangbase.com/blogimg/asset/201901/bg2019010408.jpg)

开普敦大学（UCT）土木工程学院发明了一种尿液生成砖头的技术。它使用一种细菌分解尿液中的尿素，同时通过复杂的化学反应产生碳酸钙，进而形成砖头。本质上，这与贝壳的形成方式并无二致。这种技术不仅可以处理尿液，对防止地球变暖也有好处，因为生物砖是在室温下制造，而普通砖是在1400°C左右的温度下进行窑烧，会产生大量二氧化碳。

尿液里面剩余的氮和钾，可以作为肥料。另外，尿液中的磷可转化为磷酸钙，磷酸钙是化肥的关键成分。

8、[BFR 火箭](http://nautil.us/blog/-the-psychological-challenges-of-just-getting-to-mars)

![](https://www.wangbase.com/blogimg/asset/201901/bg2019010409.jpg)

前往火星是对宇航员心理的巨大考验。前往火星的旅程将持续几个月，这期间，宇航员被限制在一个不超过中型房车的空间里面。即使到达火星，与地球之间的通信将有长达45分钟的延迟，你说一句话，要等45分钟才能听到答复。

SpaceX 公司设计当中的载人飞船 Big Falcon Rocket（简称 BFR），安排了40个舱室，可容纳200人以上的乘客，每个舱室可以容纳五六个人。正常情况下，每次前往火星大约是100人，每个舱室住两到三个人。此外，还有公共区域供乘客使用，用于娱乐和社交。根据 SpaceX 公司的规划，计划在2024年首飞。

9、[Oath 的价值](https://www.nbcnews.com/tech/tech-news/verizon-signals-its-yahoo-aol-divisions-are-almost-worthless-n946846)

![](https://www.wangbase.com/blogimg/asset/201901/bg2019010410.jpg)

2015年，Verizon 公司以44亿美元的价格收购了美国在线 AOL，2017年又以45亿美元的价格收购了雅虎，然后将它们合并成了一家新公司 Oath。Oath 拥有美国在线和雅虎的所有网络资产，包括 Yahoo.com、AOL.com、赫芬顿邮报、Tumblr 和 TechCrunch。

当时，Oath 经过核算，登记了实物资产大概50多亿美元，商誉为48亿美元。所谓商誉，就是收购价减去实物资产，可以理解成网站本身的价值。2018年底，Oath 宣布一次性注销商誉46亿美元，将其计为亏损。也就是说，雅虎如今几乎一钱不值。

10、__一句话新闻__

* [日本](https://www.japantimes.co.jp/news/2018/12/21/national/number-babies-born-japan-2018-lowest-since-records-began-population-decline-highest/#.XB5Fk2VfhhH)2018年的新生儿数量只有92万人，是有史以来最低的，比上一年下降了2.5万。日本人口危机正在加速。
    
* [嫦娥四号飞船](https://beta.scmp.com/news/china/article/2180453/chinas-change-4-lunar-spacecraft-poised-touch-down-dark-side-moon)于1月3日上午10点半成功在月球降落，成为有史以来第一个在月球背面登陆的飞行器。登陆后，它顺利放出了玉兔月球车，已经传回地球第一张月球背面的照片。
    
* [美联储](https://www.washingtonpost.com/business/2018/12/28/living-paycheck-paycheck-is-disturbingly-common-i-see-no-way-out/?noredirect=on&utm_term=.98e2d70f8fa5)的一份报告披露，40%的美国成年人表示，紧急情况下他们拿不出400美元现金，必须去借款或者变卖资产。
    
* [以太坊创始人 Vitalik Buterin](https://spectrum.ieee.org/computing/networks/ethereum-plans-to-cut-its-absurd-energy-consumption-by-99-percent) 表示，计划在一两年内，将以太坊的共识机制从挖矿（PoW）改成利益证明（PoS），可以将耗电量降低99%。
    
* [美国纽约时报广场](https://www.nytimes.com/2018/12/28/nyregion/how-to-dump-3000-pounds-of-confetti-on-times-square.html)每年都要跨年倒数，一到12月31日晚上12点，满天落下闪光的彩屑。这些彩屑都是志愿者在周围高楼顶上，手工倾倒下来，今年一共有1.5吨。
    

![](https://www.wangbase.com/blogimg/asset/201901/bg2019010411.jpg)

## 教程

1、[Chrome 开发者工具如何使用断点？](https://codeburst.io/learn-how-to-debug-javascript-with-chrome-devtools-9514c58479db)（英文）

本文通过实例讲解，如何设置事件监听断点和 watch 表达式。

2、[让你的生活更轻松的9个 Bash 快捷别名](https://medium.com/@raimibinkarim/9-bash-aliases-to-make-your-life-easier-3e5855aa95fa)（英文）

本文介绍9个实用的 Bash 函数，你可以参考他的方式，将自己常用的操作封装成函数，然后设置别名。

3、[HTTP 头信息的安全设置](https://int64software.com/blog/2018/11/05/hardening-website-security-part-1-http-security-headers/)（英文）

本文介绍跟网页安全相关的一些 HTTP 头信息。

4、[25 个改变世界的芯片](https://spectrum.ieee.org/tech-history/silicon-revolution/25-microchips-that-shook-the-world)（英文）

本文列出了人类历史上25个最重要的集成电路。

5、[为什么复印店老板都是湖南人？](https://github.com/hangyan/Papers/blob/master/papers/%E6%96%B0%E5%8C%96%E5%A4%8D%E5%8D%B0%E4%BA%A7%E4%B8%9A%E7%9A%84%E7%94%9F%E5%91%BD%E5%8F%B2_%E5%86%AF%E5%86%9B%E6%97%97.pdf)（中文）

这是一篇2010年的论文，作者是北京大学社会学博士，他经过调查研究后发现，全国70%的复印店老板都是湖南新化人。（@[yuanjingsong](https://github.com/ruanyf/weekly/issues/135) 投稿）

6、[安卓设备如何启用加密 DNS？](https://www.techrepublic.com/article/how-to-use-cloudflare-encrypted-dns-on-android/)（英文）

DNS 查询默认是不加密的，本文介绍如何在安卓手机上通过 cloudflare 的服务，启用加密 DNS 服务。

7、[IPFS 文件系统的简单解释](https://achainofblocks.com/2018/10/05/ipfs-interplanetary-file-system-simply-explained/)（英文）

![](https://www.wangbase.com/blogimg/asset/201901/bg2019010412.jpg)

本文以一种通俗易懂的方式解释 IPFS 这个基于 IP 协议的文件系统的原理。

8、[Erlang 语言的20年历史](https://www.erlang-solutions.com/blog/twenty-years-of-open-source-erlang.html)（英文）

2018年12月8日是 Erlang 语言发布20年的纪念日，本文从一个历史参与者的角度回顾了这20年。

9、[如何写一个 Node 命令行验证码图像识别工具](https://www.chenng.cn/post/Node-command-line-tool-production.html)（中文）

Node 命令行工具的开发实例，从 0 开始写。（@[ringcrl](https://github.com/ruanyf/weekly/issues/143)__ __投稿）

10、[为什么使用 F#?](https://fsharpforfunandprofit.com/why-use-fsharp/)（英文）

F# 语言的特点介绍。

## 资源

1、[CSS Animation 101](https://github.com/cssanimation/css-animation-101)

开源电子书《CSS Animation 101》，从零开始介绍 CSS 动画。

2、[React 视频课程](https://scrimba.com/g/glearnreact)（英文）

React 的短视频课程，几分钟一集，共有45集。

3、[开源人物肖像](http://facesofopensource.com/)

![](https://www.wangbase.com/blogimg/asset/201901/bg2019010413.jpg)

该项目专门拍摄推动计算机革命的开源程序员的肖像。

4、[学习 C++](https://www.codecademy.com/learn/learn-c-plus-plus)

CodeCademy 的 C++ 在线课程。

5、[UI gradients](https://uigradients.com)

一个收集渐变色样式的网站。（@[valenzhou](https://github.com/ruanyf/weekly/issues/124) 投稿）

6、[rejected.us](https://rejected.us/)

该网站收集优秀程序员面试没通过的经历，用来鼓励面试失败者不要灰心。

7、[30秒系列](https://github.com/30-seconds/30-seconds-of-code)

![](https://www.wangbase.com/blogimg/asset/201901/bg2019010414.jpg)

该系列专门收集30秒以内可以解答的问题。目前有以下6个库：（1）[30秒 JS 问题](https://github.com/30-seconds/30-seconds-of-code)；（2）[30秒 CSS 问题](https://30-seconds.github.io/30-seconds-of-css/)；（3）[30秒面试问题](https://30secondsofinterviews.org/)；（4）[30秒 React 问题](https://github.com/30-seconds/30-seconds-of-react)；（5）[30秒 Python 问题](https://github.com/kriadmin/30-seconds-of-python-code)；（6）[30秒 PHP 问题](https://github.com/appzcoder/30-seconds-of-php-code)。

## 工具

1、 [nnn](https://github.com/jarun/nnn)

Linux 系统的命令行文件管理器，号称是最快的文件管理器。

2、[Dweb.page](https://github.com/PACTCare/Dweb.page)

这是一个写入 IPFS 的网关，可以匿名分享文件，最大不超过 1GB，有效期三天。这里有一篇[介绍](https://blog.florence.chat/tutorial-how-to-create-your-own-distributed-website-in-just-a-few-seconds-5100ccf068bc)。

3、[vs](https://github.com/anvaka/vs)

![](https://www.wangbase.com/blogimg/asset/201901/bg2019010415.jpg)

输入一个产品的名字，该工具会根据谷歌的自动搜索提示，生成一张图，上面是经常与该产品进行对比的其他产品。（@[nivance](https://github.com/ruanyf/weekly/issues/99)__ __投稿）

4、[groupImg](https://github.com/victorqribeiro/groupImg)

![](https://www.wangbase.com/blogimg/asset/201901/bg2019010416.jpg)

groupImg 是一个 Python 脚本，使用 k-means 算法进行图片分类。我试了一下，效果不太好。但是代码简单，可以用作学习参考。

5、[Earth Wind](https://earth.nullschool.net/#current/wind/surface/level/orthographic=-240.00,0.00,320)

![](https://www.wangbase.com/blogimg/asset/201901/bg2019010417.jpg)

一个查看全球风向的网站。

6、[Maze Battles](http://www.mazebattles.com/)

![](https://www.wangbase.com/blogimg/asset/201901/bg2019010418.jpg)

一个在线的迷宫游戏网站，支持多人同时游戏。我玩了一局，还挺有意思。

7、[GAN Paint](http://gandissect.res.ibm.com/ganpaint.html)

![](https://www.wangbase.com/blogimg/asset/201901/bg2019010419.jpg)

很神奇的工具，可以任意在线重绘建筑物的照片，比如在大门上一划，就变成了墙。麻省理工学院人工智能实验室开发。

8、[cloc](https://github.com/AlDanial/cloc)

统计代码行数的工具，可以用于压缩文件（如zip tar等），包括空行和特殊字符的处理与统计，生成多种格式的结果。安装简单且轻量，对于阅读源码，分析项目代码的场景非常实用。（@[tifazxy](https://github.com/ruanyf/weekly/issues/105) 投稿）

9、[ssh-chat](https://github.com/shazow/ssh-chat)

Go 语言实现的 SSH 服务端，用于登录用户之间的聊天，可以用 `ssh chat.shazow.net` 命令体验。（@[zrt ](https://github.com/ruanyf/weekly/issues/111)投稿）

10、[aminal](https://github.com/liamg/aminal)

一个使用 Go 语言开发的命令行终端模拟器。

11、[ExifShot](https://exifshot.com/)

![](https://www.wangbase.com/blogimg/asset/201901/bg2019010420.jpg)

一个以美观的形式展示照片 EXIF 信息的在线工具。

## 文摘

1、[更少的土地，更多的粮食](https://www.nytimes.com/2018/12/05/climate/agriculture-food-global-warming.html)

![](https://www.wangbase.com/blogimg/asset/201901/bg2019010421.jpg)

未来几十年将发生气候灾难，这几乎是必然的。同时，世界人口还将继续增长，这就要求世界农业生产的大幅度改变，尽量减少对气候的破坏，同时为多出来的数十亿人口提供食物。

现在的情况是，农业使用了世界大约40％的土地，并且占人类温室气体排放量的四分之一。根据预测，全球人口将从目前的72亿增长到2050年的近100亿，而且随着收入增加，每个人会消费更多的肉类，农业对环境的影响正在迅速扩大。

2050年的世界农业需要比2010年多产出56％的卡路里。如果农民和牧场主通过开垦更多的森林来获得土地，那么根据计算，在现有的产出水平下，需要新增两个印度大小的土地，才能满足增加的粮食需求。另一方面，森林改造成农田的过程中，将释放大量的碳到大气中。

可持续农业体系的关键，在于说服消费者少吃肉类和不要浪费粮食。牛肉和羊肉的生产，会释放出大量的碳。甚至鸡肉都是更好的选择，因为鸡肉的环境影响，只是牛肉的八分之一。目前，科学家还在研究如何让牛不排放甲烷（一种很强的温室气体）。

减少排放的同时，还必须在现有耕地上种植更多的食物。但是，温度上升会降低作物产量，因此培育新的抗高温高产品种或防止土壤侵蚀，也很重要。另外，还可以发明一些其他措施，比如延长食物保鲜时间，防止腐烂。

我们可能还需要减少农作物的非粮食用途，例如减少用于生产车用乙醇的玉米，它们会与粮食作物竞争土地。

2、[优质平庸](https://www.businessoffashion.com/articles/opinion/op-ed-how-premium-mediocre-conquered-fashion)

2017年，有人发明了“优质平庸”（Premium Mediocre）这个词。它指的是一种营销手段，让消费者认为他们正在消费奢侈品，而实际上只是在消费普通商品，比如“精酿”啤酒、“手工”比萨饼、“烘焙师签名”汉堡等等都是“优质平庸”的例子。

这种做法很简单，就是用一些额外的手段，让平庸的东西看上去更加优质，让消费者产生一种幻想，认为自己正在购买高级产品。营销人员通常采用的手段是，为商品名加上“首选”、“手工”、“收藏级”等词语。

许多公司希望消费者愿意付出较高的价格，就用“负担得起的奢侈品”的定位来推销自己的产品。当然，他们销售的并不是奢侈品，而是把奢侈品的光环像面包粉一样，洒一点在平庸商品上面。这里的重点是，必须让消费者觉得，平庸的商品一点不平庸。

“优质平庸”也延伸到了真正的奢侈品品牌。普通消费者买不起这些奢侈品，但是奢侈品公司仍然想赚他们的钱，就设法提供一些入门级的产品系列，将一些低成本的产品贴上自家的奢侈品品牌，比如 Prada 尼龙背包、路易威登帆布包、Gucci的塑料凉鞋等等。这个策略很成功，优质平庸市场的利润非常高，据统计，2015年小型皮具奢侈品的销售额达到57亿美元，预计到2020年将达到75亿美元。对于消费者来说，只要几百美元，就能买到奢侈品牌，很多人愿意尝试。

这件事情的启示就是，商品的徽标比产品本身更重要，普通鸡蛋只能卖一块钱，但是标上“天然土鸡蛋”就能卖一块五。“优质平庸”的关键，就是商品有一个独一无二、消费者认同的徽标。

## 本周图片

1、[主要技术公司收入来源图](https://medium.com/zerotomastery/programmers-guide-to-the-big-tech-companies-1bfc078e5a76)

> - 苹果：iPhone 占 63% 的收入
> - 谷歌：广告占 88% 的收入
> - 微软：Office 占 28% 的收入
> - 亚马逊：商品销售占 72% 的收入
> - 脸书：广告占 97% 的收入

![](https://www.wangbase.com/blogimg/asset/201901/bg2019010422.jpg)

2、[网站就是 Git 仓库](https://slashcrypto.org/2018/11/28/eBay-source-code-leak/)

有人发现，eBay 日本的官网 `www.ebay.co.jp`  的就是一个 Git 仓库，而且可以浏览器访问 `.git` 目录。该漏洞现在已经修复。

![](https://www.wangbase.com/blogimg/asset/201901/bg2019010423.jpg)

3、[3D 打印的婚礼](https://www.technologyreview.com/s/612486/i-3-d-printed-every-bit-of-my-weddingincluding-my-bouquet/)

一位 3D 打印工程师结婚时，现场各种用品都尽可能使用 3D 打印。

![](https://www.wangbase.com/blogimg/asset/201901/bg2019010424.jpg)

  

![](https://www.wangbase.com/blogimg/asset/201901/bg2019010425.jpg)


![](https://www.wangbase.com/blogimg/asset/201901/bg2019010426.jpg)

## 新奇

1、[鬼屋](http://crookedhouse.org/grym-home/)

我们常常看到鬼屋的影视作品。2015年，有一群英国人做了鬼屋的真实版。他们写好了剧本，租了一间乡间的老房子，精心布置好，然后用各种高技术，制造幽灵的效果。

![](https://www.wangbase.com/blogimg/asset/201901/bg2019010427.jpg)

鬼魂是投影机播放的影像，那是事先请演员扮演，录制下来的。同时，还有配套的音频和气味。

![](https://www.wangbase.com/blogimg/asset/201901/bg2019010428.jpg)

他们在网上发布消息，招募愿意亲身体验鬼屋的人。报名者先在网上填写资料，经过筛选以后，再付费来体验。体验过程需要两天，主要是要在鬼屋度过一晚。

项目完成以后，团队将所有准备过程和幕后工作，都写成文档，做成一个[网站](http://crookedhouse.org/grym-home/)，把它永久记录下来。

## 本周金句

1、

任何成功创业的实质都是指数增长。

-- [《旧金山创业公司 Lime 和 Bird 比较》](https://www.futureengine.org/articles/scooters-are-worth-10b)

2、

如果你在2018年购买了旗舰手机，又不玩游戏，那么可能在未来十年内你都不需要换手机。大多数人现在拥有的手机运算能力，已经远远超出了他们需要的水平。

-- [《智能手机的销售已经进入衰退期》](http://nymag.com/intelligencer/2018/12/global-u-s-growth-in-smartphone-growth-starts-to-decline.html)

3、

你最需要的东西之一，是对人生打击的弹性。无论怎样受伤，你都需要很快就复原。无论被击倒在地上多少次，都需要很快站起来。

-- [《摔倒七次，站起来八次》](https://medium.com/the-naked-founder/fall-seven-times-stand-up-eight-c3c4bb01755e)

4、

谷歌想改进 TCP 协议，但是 TCP 协议是操作系统内核实现的，实际上没法改进。所以，他们选择在 UDP 协议的基础上，重新实现了一个不同的 TCP 协议，叫做 QUIC 协议。 

-- [《QUIC 协议的加密机制》](https://cryptologie.net/article/446/quic-crypto-and-simple-state-machines/)

## 欢迎订阅

这个专栏每周五发布，同步更新在我的[个人网站](http://www.ruanyifeng.com/blog)、[微信公众号](http://weixin.sogou.com/weixin?query=%E9%98%AE%E4%B8%80%E5%B3%B0%E7%9A%84%E7%BD%91%E7%BB%9C%E6%97%A5%E5%BF%97)和[语雀](https://yuque.com/ruanyf/share/)。

微信搜索“__阮一峰的网络日志__”或者扫描二维码，即可订阅。

![](http://www.ruanyifeng.com/blogimg/asset/2018/bg2018042311.jpg)

（完）


