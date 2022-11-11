# 科技爱好者周刊（第 230 期）：电子产品的用电量

这里记录每周值得分享的科技内容，周五发布。

## 封面图

![](https://cdn.beekka.com/blogimg/asset/202211/bg2022110906.webp)

浙江大学附属第一医院的自动发药机，医生一开完处方，机器手就自动开始抓药，然后通过管道“投送”到药师窗口，等患者取药。（[via](https://www.cn-healthcare.com/articlewm/20221101/wap-content-1459477.html)）

## 本周话题：电子产品的用电量

[上周](https://www.ruanyifeng.com/blog/2022/11/weekly-issue-229.html)提到，手机充电器的功率已经超过 200W 了。

![](https://cdn.beekka.com/blogimg/asset/202210/bg2022102908.webp)

这个功率相当大。大家可能不知道，你家冰箱大概都不如它。普通的家用冰箱，功率就在 100W～200W 之间。

![](https://cdn.beekka.com/blogimg/asset/202211/bg2022110823.webp)

（图片说明：200升家用冰箱，功率一般是 140W，每天耗电1度左右。）

这是最近的一个趋势：**电子产品的功率和用电量快速上升，已经接近或超过了家用电器。** 我说两件事。

第一件事。我最近买了一个智能插座，可以手机读取当前的功率输出。

![](https://cdn.beekka.com/blogimg/asset/202211/bg2022110824.webp)

我就把一台27寸 4K 显示器插在上面。它的月度用电统计（下图）显示，这台 30W 的显示器，上个月用掉了13.8度电。

![](https://cdn.beekka.com/blogimg/asset/202211/bg2022110825.webp)

我倒吸了一口冷气，没想到 4K 显示器这么耗电。我的桌上同时开着三台这样的显示器，那岂不是显示器这一项，每个月就要用掉40度电！

第二件事。最近有一条[新闻](https://www.igorslab.de/en/adapter-of-the-gray-analyzed-nvidias-brand-hot-12vhpwr-adapter-with-built-in-breakpoint/)，Nvidia 公司的最新显卡 RTX 4090，接连有用户报告，供电接口烧掉了。

![](https://cdn.beekka.com/blogimg/asset/202210/bg2022102808.webp)

如果你了解这张显卡的功率，这种事故是一点不奇怪的。它是耗电怪兽，功率达到 [600W](https://www.hardwaretimes.com/nvidia-rtx-4090-draws-over-600w-of-power-in-certain-benchmarks-can-be-overclocked-to-3ghz-or-more/)，但是机箱的供电电压是 12V，导致总电流会达到疯狂的 50A（600W/12V）。

为了分散电流，它采用12口供电（下图）。即使如此，接口处稍有接触不良，就会严重发热，导致烧毁。

![](https://cdn.beekka.com/blogimg/asset/202210/bg2022102806.webp)

这还只是显卡的功率，如果配上目前最顶级的桌面 CPU 英特尔 i9-13900K（[功率 360W](https://www.gamersky.com/hardware/202210/1528929_11.shtml)），再加上其他外设，整台桌面电脑就接近1000瓦了，跟空调功率差不多了。

所以，使用顶级电脑玩大型电脑游戏，属于非常耗电的行为。街上那些游戏网吧，一天24小时开机，电费一定非常可观吧。

总之，上面两件事说明了一点：**随着计算能力的提高，计算机正在成为一种非常耗电的设备。**

现在最智能的那些 AI 模型，都是建立在海量计算的基础上，所谓的“智能”其实就是用耗电量换来的。有[研究](https://www.infoq.cn/article/kyspl1wjruoxqtufgodx)称，“训练一个 AI 模型的能耗，跟五辆汽车的整个生命周期的碳排放相同。”甚至有资料说，某些顶级的复杂模型，需要一个水电站供电。

再考虑到机房和 5G 基站都是耗电大户，
那么如果所有设备联网，每个设备都具备人工智能，用电量将是一个天文数字。

我们大概可以这样说，**信息时代同样是一个电力饥渴的时代。** 一旦人类社会真的变得高度自动化和智能化，不知道还需要增加多少发电厂。

## 小程序容器 FinClip

手机 App 动辄就是几十兆、几百兆，对于开发者和用户，都属于“重资产”。

​业界一直在寻找“轻应用”方案，比如多年前就有的 PWA 应用、苹果的 App Clips、谷歌的 Instant Apps。但是最成功的方案非“小程序”莫属，至少国内是这样。

![](https://cdn.beekka.com/blogimg/asset/202211/bg2022110401.webp)

提到小程序，人们总是将其与某种 App 联系在一起。其实，**小程序是一种通用技术**。

简单说，<u>小程序就是运行在某种容器（通常是 App）之中、基于 HTML、CSS、JavaScript 的页面。</u>它可以通过脚本调用“宿主 App”的一些基础能力，比如读写文件、摄像头、蓝牙等等。你可以把它想成“HTML5 网页 + App”。

除了大家熟悉的微信小程序，支付宝、百度、美团、京东、快手、头条等多家国内平台都有自己的小程序。

![](https://cdn.beekka.com/blogimg/asset/202211/bg2022110402.webp)

越来越多的 App 希望引入自己的小程序，因此就出现了“小程序容器”这种全新的技术。

**所谓“小程序容器”，就是一个小程序的运行环境。** App 只要加载这个运行环境，就具备了运行小程序的能力。说得直白一点，它让你拥有了微信那样的小程序引擎，但是不必自己开发。

下面给大家介绍，众多小程序容器之中，我认为比较有前途、也是现在处于领先位置的一个方案：[FinClip](https://www.finclip.com/)。

![](https://cdn.beekka.com/blogimg/asset/202211/bg2022110821.webp)

FinClip 提供一套 SDK，不仅支持手机（iPhone、Android），还支持桌面（Windows、Linux、macOS）、手表、车机等各种平台。<u>你的 App 只要加载了这套 SDK，就能直接运行微信小程序（以及小游戏），一行代码也不用修改。</u>

也就是说，它完全支持微信小程序的 WXML 语法，无需二次开发，体验与微信端保持一致。你就可以把你的小程序，在微信运行一份，在自己的 App 也运行一份。

而且，它还是一种简单的跨平台方案，等于为微信小程序做了一个适配层，让移动端、PC 端、车载设备、智能电视、智能手表、智能家居都能运行小程序，从而实现“一次开发，到处运行”。它的体积很小，只会让原始安装包增加 3MB。

如果需要独立打包，它可以通过自研的 IDE，将小程序一键转换成 App，把现有的小程序代码导出为 iOS 与 Android 工程文件，并上架至各应用市场。也就是说，你可以把小程序变成独立 App，而且这个独立 App 由于内置了 FinClip SDK，还可以运行其他小程序，甚至自建小程序市场。

![](https://cdn.beekka.com/blogimg/asset/202211/bg2022110404.webp)

FinClip 已经得到了很多大公司客户，其中不少是券商、银行、航空公司等重要单位。开发者人数现在超过3万，服务用户达到2500万人，在真实的生产环境经受了百万级的并发压力考验。

对于小型开发者，这个产品是免费使用，只有企业级应用才需要付费。现在[注册帐号](https://www.finclip.com/login/?type=register&from=home)，不仅可以实现小程序的跨平台部署，还能抽取盲盒礼品。

![](https://cdn.beekka.com/blogimg/asset/202211/bg2022110803.webp)

## 科技动态

1、[食用植物造景](https://www.fastcompany.com/90740481/why-jw-marriott-is-planting-edible-gardens-is-every-one-of-its-hotels)

JW 万豪在旗下25家连锁酒店的大堂里，设置了食用植物造景。

![](https://cdn.beekka.com/blogimg/asset/202205/bg2022051609.webp)

那是一个高达2.1米的玻璃容器，里面种满了各种可以吃的食物，比如水果、蔬菜和草药，它们成熟后，提供给酒店的厨房和水疗中心。

![](https://cdn.beekka.com/blogimg/asset/202205/bg2022051610.webp)

容器内部使用紫外线灯模拟日照，效果肯定不如室外太阳光，成本高，产量低。所以，这些玻璃容器更像艺术品和装饰品，只具有象征意义。

![](https://cdn.beekka.com/blogimg/asset/202205/bg2022051611.webp)

酒店认为，这种装置绿色环保，装饰效果不输给鲜花。第一期主要种植薄荷、百里香、迷迭香和欧芹，如果可行，将会推广到集团所有酒店，并增加种植面积。

2、[回收洗澡水热量](https://dynomight.net/hot-water/)

英国正发生能源短缺，一位英国网友提议，回收洗澡水热量。

![](https://cdn.beekka.com/blogimg/asset/202211/bg2022110315.webp)

英国有大量能源用来加热冬天的洗澡水，但是这些热水往往冲洗一下，就直接排入了下水道，这时水还是很热的。

这位网友建议，在排水管外部安装一个热交换系统（上图），排出的热水与进屋的冷水进行热交换，可以有效回收能源。

虽然他的想法很有创意，但是怎么看都像玩笑，可行性太低了。

3、[野生动物喝水照片](https://mymodernmet.com/shompole-hide-will-burrard-lucas/)

一位英国摄影师来到肯尼亚，拍摄野生动物。非洲的白天太热了，动物都不出来，只在晚上活动，他根本拍不到照片。无奈之下，他说服当地人，在野外为他挖一个人造池塘。

![](https://cdn.beekka.com/blogimg/asset/202211/bg2022110813.webp)

这个池塘使用太阳能泵从3公里以外引水，保证不会干涸。同时，池塘旁边还建了一个水泥小屋，游客可以躲在里面观看野生动物和拍照，从而为当地人带来长期收入。

![](https://cdn.beekka.com/blogimg/asset/202211/bg2022110814.webp)

![](https://cdn.beekka.com/blogimg/asset/202211/bg2022110815.webp)

挖了池塘以后，摄影师惊喜地发现，很快就有狮子、鬣狗、豹子、狒狒很多动物来这里喝水，非洲的野生动物真是太丰富了。他因此拍到了许多精彩的照片。

![](https://cdn.beekka.com/blogimg/asset/202211/bg2022110816.webp)

![](https://cdn.beekka.com/blogimg/asset/202211/bg2022110817.webp)

![](https://cdn.beekka.com/blogimg/asset/202211/bg2022110818.webp)

![](https://cdn.beekka.com/blogimg/asset/202211/bg2022111101.webp)

![](https://cdn.beekka.com/blogimg/asset/202211/bg2022110820.webp)

4、[陨石上的碱基](https://www.sciencenews.org/article/all-of-the-bases-in-dna-and-rna-have-now-been-found-in-meteorites)

美国科学家证实，组成 DNA 和 RNA 的5种碱基，全部在1969年坠落在澳大利亚的一颗陨石上发现了。

![](https://cdn.beekka.com/blogimg/asset/202211/bg2022110801.webp)

DNA 和 RNA 是生命的组成单位，它们由5种碱基组成：腺嘌呤、鸟嘌呤、胞嘧啶、胸腺嘧啶、尿嘧啶。这些碱基就是生命的最基本单位。

陨石上发现所有碱基，为生命的“陨石起源说”增添了说服力。这种假说认为，地球生命来自于落到地面的陨石，它为地球带来了有机物。

## 文章

1、[我的哥哥 我的家](https://mp.weixin.qq.com/s/oEMUWTmUZNYRU8hYFNih6A)（中文）

![](https://cdn.beekka.com/blogimg/asset/202211/bg2022110822.webp)

张益唐的妹妹张盈唐2018年的长文，介绍张家和他哥哥的往事。

> “哥哥1985年出国，1987年回过一次国探亲，然后就是25年的漫长离别。”
 
他博士毕业后在美国非常不顺，生活困难，10年没跟家里联系，家人不知他是死是活。直到2013年他推动了孪生质数猜想，才有国内单位愿意出钱，请他回国讲学。

2、[马斯克访谈](https://finance.sina.com.cn/tech/it/2022-11-09/doc-imqmmthc3912903.shtml)（中文）

![](https://cdn.beekka.com/blogimg/asset/202211/bg2022110908.webp)

11月4日，马斯克接受了一次公开访谈，谈了接下来推特和特斯拉的一些设想。这是主要内容的中文整理。

3、[26层的养猪大楼](https://www.jiemian.com/article/8327167.html)（中文）

![](https://cdn.beekka.com/blogimg/asset/202211/bg2022110804.webp)

湖北省鄂州市正在建造一栋26层的“国内最高、单体面积最大的养猪大楼”，本文介绍这栋楼的情况，高层建筑如何养猪。另外[一篇报道](http://hb.sina.com.cn/news/j/2022-10-21/detail-imqmmthc1616038.shtml)也可以参考。

4、[我造了一艘古代帆船](https://mp.weixin.qq.com/s/6kOdAljOqSe1dQP73c4TBQ)（中文）

![](https://cdn.beekka.com/blogimg/asset/202210/bg2022103008.webp)

中国古代都使用帆船航海，甚至可以下南洋，但是现在已经看不到这种船了，甚至会造的人也找不到了。作者就设法仿制了一艘。

5、[缓存 CORS 请求](https://httptoolkit.tech/blog/cache-your-cors/)（英文）

CORS 是跨域 HTTP 请求，实际会发出两个 HTTP 请求（预检请求 + 正式请求）。很多云服务商按请求数计费，这将大大增加费用，本文介绍如何在客户端缓存 CORS 请求，避免过多的请求。

6、[创业公司加快开发速度的方法](https://growing-products.paralect.com/a-development-process-startup-founders-should-use-to-ship-features-weirdly-fast)（英文）

创业公司如何加快代码开发速度，作者提出他的做法。

7、[测试 Windows Dev Kit 2023](https://www.jeffgeerling.com/blog/2022/testing-microsofts-windows-dev-kit-2023)（英文）

![](https://cdn.beekka.com/blogimg/asset/202211/bg2022110511.webp)

微软最近发布了一款 ARM 主机，叫做 Windows Dev Kit 2023，配置很有吸引力，售价599美元，专门供开发者测试 Windows 的 ARM 版本。另有一篇[中文评测](https://zhuanlan.zhihu.com/p/580147966)。

8、[我怎么对付垃圾邮件发送者](https://www.troyhunt.com/sending-spammers-to-password-purgatory-with-microsoft-power-automate-and-cloudflare-workers-kv/)（英文）

作者搞了一个恶作剧，用 Microsoft Power Automate 做了一个自动化流程，自动回邮给垃圾邮件发送者。

![](https://cdn.beekka.com/blogimg/asset/202208/bg2022080404.webp)

邀请对方到指定页面登记，登记时需要设置密码，却总也设置不成功，从而浪费对方的时间。

## 工具

1、[Upscayl](https://github.com/upscayl/upscayl)

![](https://cdn.beekka.com/blogimg/asset/202208/bg2022082909.webp)

一个开源软件，可以将图片从低分辨率变成高分辨率，变得更清晰。

2、[CodeGeeX](https://keg.cs.tsinghua.edu.cn/codegeex/index_zh.html)

![](https://cdn.beekka.com/blogimg/asset/202211/bg2022111006.webp)

一个国产的代码生成的人工智能工具，跟 GitHub Copilot 类似，可以将一种语言的代码翻译成另一种，并提供 VS Code 插件。（[@jues](https://github.com/ruanyf/weekly/issues/2717) 投稿）

3、[Lama Cleaner](https://github.com/Sanster/lama-cleaner)

一个开源的 AI 工具，可以从图片上擦除任何不需要的物体。（[@willshion](https://github.com/ruanyf/weekly/issues/2721) 投稿）

4、[vtui-npm](https://github.com/webfansplz/vtui-npm)

![](https://cdn.beekka.com/blogimg/asset/202211/bg2022111009.webp)

一个命令行工具，可以互动式搜索和安装各种 JS 的 npm 模块。（[@webfansplz](https://github.com/ruanyf/weekly/issues/2731) 投稿）

5、[watching-you](https://github.com/jj811208/watching-you)

![](https://cdn.beekka.com/blogimg/asset/202211/bg2022111010.webp)

一个 JS 动画库，可以设定所要观察的 DOM 元素，从而形成一种互动效果，好像页面正在注视用户的操作。（[@jj811208](https://github.com/ruanyf/weekly/issues/2729) 投稿）

6、[Sonic](https://github.com/go-sonic/sonic/blob/master/doc/README_ZH.md)

![](https://cdn.beekka.com/blogimg/asset/202211/bg2022111011.webp)

一个 Go 语言开发的博客平台，支持 Linux/Windows/MacOS，系统资源占用小，自带管理后台。（[@1379](https://github.com/ruanyf/weekly/issues/2736) 投稿）

7、[Netease Recent Profile](https://github.com/zonemeen/netease-recent-profile)

![](https://cdn.beekka.com/blogimg/asset/202211/bg2022111012.webp)

这个开源工具可以将你的网易云音乐的听歌记录生成一张 SVG 图片，插入网页。（[@zonemeen](https://github.com/ruanyf/weekly/issues/2735) 投稿）

8、[Bun](https://bun.sh/)

![](https://cdn.beekka.com/blogimg/asset/202207/bg2022070604.webp)

一个 JS/TS 的服务器运行环境，兼容 Node.js 的所有 API，完全是从头实现的，运行速度大大快于 Node.js。

9、[IPFS 上传网关](https://ipfs-gateway.cloud/)

![](https://cdn.beekka.com/blogimg/asset/202207/bg2022070701.webp)

这个网站是 IPFS 的上传入口，它提供免费的存储空间。理论上，一旦上传到 IPFS，文件就永久存在于互联网，无法删除也无法修改。

10、[LocalStack](https://github.com/localstack/localstack)

![](https://cdn.beekka.com/blogimg/asset/202207/bg2022070706.webp)

一个开源的亚马逊云服务模拟品，你可以在本机架设离线服务，测试你的云程序。

## 掘金双十一活动

今天是“双十一”，国内大型技术社区“掘金”的活动力度很大。

> 1. 课程小册全部<u>6折</u>
> 1. 课程套餐 <u>5.5折</u> 
> 1. 购课赠送 <u>手办/礼盒</u>
> 1. 掘金小册<u>有赞商城</u>上线

划重点，**只有今天是这个价格**。明天开始到11月18日，就会恢复原价（有赞商城拼团可享受8折）。

掘金与（人民邮电出版社的）异步社区的联合会员，也是今天上线，限时5折。一次购买，同时拥有两大社区的课程和教材。

![](https://cdn.beekka.com/blogimg/asset/202211/bg2022111014.webp)

如果你想学习课程，掌握几门开发技术，今天是很好的入手时间。点击[这里](https://sourl.co/uLt8qb)或者扫描上方二维码，了解活动详情并购买。

## 资源

1、[Postgres 练习场](https://www.crunchydata.com/developers/tutorials)

![](https://cdn.beekka.com/blogimg/asset/202208/bg2022081802.webp)

这个网站提供一个在线的 Postgres 数据库练习环境，可以在网页上加载数据库，执行 SQL 命令，参见[介绍文章](https://www.crunchydata.com/blog/learn-postgres-at-the-playground)。

2、[IconGo](https://icongo.github.io/)

![](https://cdn.beekka.com/blogimg/asset/202211/bg2022111007.webp)

开源的图标搜索引擎。（[@jaywcjlove](https://github.com/ruanyf/weekly/issues/2724) 投稿）

3、[SadServers](https://sadservers.com/)

![](https://cdn.beekka.com/blogimg/asset/202211/bg2022111008.webp)

一个[开源](https://github.com/fduran/sadservers)的 Linux 服务器管理题库。它会在浏览器里面创建服务器实例，让用户自己动手解决问题。（[@jerrylususu](https://github.com/ruanyf/weekly/issues/2726) 投稿）

4、[全栈 Python](https://www.fullstackpython.com/)

![](https://cdn.beekka.com/blogimg/asset/202206/bg2022061606.webp)

一本免费英文教程，适合已经学会 Python 语法的读者，参考它写一些真实应用（比如 Web 服务）。

5、[Unicode 混淆字符搜索](https://util.unicode.org/UnicodeJsps/confusables.jsp)

![](https://cdn.beekka.com/blogimg/asset/202208/bg2022082102.webp)

很多 Unicode 字符的字形相近，容易混淆。这个工具可以搜索跟某个字符外形相似的其他字符，比如上图是不同的字符看上去都像是`c`。

## 图片和视频

1、[太阳能冶金](https://jelleseegers.com/)

一位美国网友认为，现在的金属冶炼业消耗大量能源，释放二氧化碳，应该尽快进行绿色改造。

他制作了一个巨型透镜，可以聚焦太阳光，融化坩埚里面的金属，再进行冶炼，从而实现太阳能冶金。

![](https://cdn.beekka.com/blogimg/asset/202210/bg2022102704.webp)

2、[天空之城大楼](https://v.qq.com/x/page/g3362le7ktg.html)

今年9月，Dji 新总部“[天空之城大楼](https://www.dji.com/cn/newsroom/news/dji-skycity-officially-launch)”启用，地址是深圳市南山区仙元路55号。

![](https://cdn.beekka.com/blogimg/asset/202211/bg2022110505.webp)

这个建筑自从开工后，就备受关注，曾被媒体评为“2021年全球最值得期待建成完工的10个新建筑”之一，共耗资16亿。它的设计者也是苹果新总部的设计者英国福斯特建筑设计事务所（Foster + Partners）。

![](https://cdn.beekka.com/blogimg/asset/202211/bg2022110503.webp)

它是一个双子塔，中间有一座钢索桥连接。

![](https://cdn.beekka.com/blogimg/asset/202211/bg2022110502.webp)

每栋塔楼都分别向外悬挂了六个巨大的“玻璃体块”，好像挂在柱子上一样。

![](https://cdn.beekka.com/blogimg/asset/202211/bg2022110504.webp)

平时不容易看到大疆内部，下面是官方放出的大楼内部视频（[QQ 视频](https://v.qq.com/x/page/g3362le7ktg.html)，[Youtube 视频](https://www.youtube.com/watch?v=RGsa_bpkVpU)）。

<iframe frameborder="0" src="https://v.qq.com/txp/iframe/player.html?vid=g3362le7ktg" allowFullScreen="true" width="600" height="400"></iframe>

3、[Facebook 内部海报](https://bytepawn.com/culture-docs-facebook-netflix-and-valve.html)

如果不感到害怕，你会怎么做？

![](https://cdn.beekka.com/blogimg/asset/202206/bg2022062108.webp)

失败得更用力。

![](https://cdn.beekka.com/blogimg/asset/202206/bg2022062109.webp)

用户的反馈是礼物。

![](https://cdn.beekka.com/blogimg/asset/202210/bg2022102703.webp)

## 文摘

1、[谷歌数据工程师不优化 SQL](https://web.archive.org/web/20220128144246/https://scribe.rip/m/global-identity?redirectUrl=https%253A%252F%252Fblog.devgenius.io%252Flearn-from-googles-data-engineers-don-t-optimize-your-sql-43f0da30701)

我是谷歌公司的一个外部供应商。

合作过程中，我看到一些谷歌工程师写的 SQL 语句效率很低。

这些语句每10分钟对数据库生成一个快照，要浪费好几 TB 的空间。谷歌为什么不优化这些语句呢？

![](https://cdn.beekka.com/blogimg/asset/202211/bg2022111013.webp)

后来，我想明白了这是为什么。

首先，很多现代数据库具有实时优化功能，会自己优化 SQL 语句，不需要在这方面投入人力。

其次，根据公开数据，2022年数据工程师的平均年薪为11.25万美元，谷歌工程师的收入显然更高。因此，谷歌认为，工程师的时间最好花在创造业务价值上，而不是用来优化 SQL 查询，这种事情应该留给数据引擎的开发人员和云计算。

第三，存储几乎是免费的，而且每天都变得更便宜。现在谷歌 GCP 云平台上每年存储 1TB 数据的成本约为 20 美元。如果每15分钟对一个包含大约 300 万条记录的小表生成快照，那么每年生成的数据大约就是 1TB。

一个美国数据工程师的每小时工资平均为54美元，让他在优化查询、编写合并语句、创建单独的管道、提交代码、对其进行审查、长期维护上工作一个小时的时间，就大致相当于数据存储两年的成本。

实际上，我的估计是，工程师对这个项目的 SQL 查询进行优化，可能需要花费8小时（一天的工作时间），那就大约是16年的存储成本。

由于存储成本如此之低，而且越来越低，工程师的时间用于快速行动和创造业务价值，远比浪费在编写精巧的 SQL 语句上更有价值。

## 言论

1、

你的每一个行动，都是对你想成为怎样的人的投票。

-- [詹姆斯•克利尔](https://jeremyeder.com/2022/08/16/every-action-you-take-is-a-vote-for-the-type-of-person-you-wish-to-become/)（James Clear），美国习惯研究专家

2、

我研究了过去几十年的科技新闻，得到了一个教训：推测事情扩大规模时会发生什么，真的非常非常困难。

我们可以搞明白一棵树，但是想象它们成为森林后，将如何改变生态系统是非常困难的。理解 iPhone 所有功能并不难，但很难预见它们将如何引发世界的巨变。

-- [《AI 创建的内容将是一场海啸》](https://socialwarming.substack.com/p/the-approaching-tsunami-of-addictive)

3、

美国研究型大学是世界最好的，它们的成功并不是因为存在某种顶层的设计，而是因为某个时刻这些大学开始竞争彼此的研究能力。

这导致了不断提高的学术专业化，以及对教授研究成果的更精确衡量。最终，学校愿意为精英教授提供终身教职和更多资源，这进一步提高了研究绩效。

-- [《为什么美国有最好的研究型大学？》](https://www.nber.org/papers/w28279)

4、

创业公司只有两种命运：快速移动和缓慢死亡。

-- [《创业公司的启动课程》](https://blog.southparkcommons.com/move-fast-or-die/)

5、

亚马逊一定为 AWS 聘请了一位首席术语官（Chief Jargon Officer），专门为他们的产品起一些费解的名字，比如 EC2、Redshift、Route 53 等等。

-- [《解码 AWS 的预留实例》](https://blog.symops.com/2022/08/24/decoding-aws-reserved-instances/)

## 历史上的本周

2021年（第182期）：[新人优惠的风险](https://www.ruanyifeng.com/blog/2021/11/weekly-issue-182.html)

2020年（第132期）：[快能力和慢能力](https://www.ruanyifeng.com/blog/2020/11/weekly-issue-132.html)

2019年（第80期）：[企业软件创业，为什么在中国不容易成功？](https://www.ruanyifeng.com/blog/2019/11/weekly-issue-80.html)

2018年（第29期）：[公司的组织架构，决定了软件的复杂性](https://www.ruanyifeng.com/blog/2018/11/weekly-issue-29.html)

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

