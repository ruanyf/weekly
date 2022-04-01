# 科技爱好者周刊（第 201 期）：中国需要成立半导体部

这里记录每周值得分享的科技内容，周五发布。

本杂志开源（GitHub: [ruanyf/weekly](https://github.com/ruanyf/weekly)），欢迎提交 issue，投稿或推荐科技内容。

周刊讨论区的帖子[《谁在招人？》](https://github.com/ruanyf/weekly/issues/2309)，提供大量程序员就业信息，欢迎访问或发布工作/实习岗位。

## 封面图

![](https://cdn.beekka.com/blogimg/asset/202203/bg2022033001.webp)

上海使用机器狗宣传防疫政策，宛如科幻电影：空无一人的街道，只有机器狗在穿行。（[via](http://news.xinmin.cn/2022/03/29/32137444.html)）

## 本周话题：中国需要成立半导体部

上个月，国家统计局公布了[《中国2021年统计公报》](
http://www.stats.gov.cn/tjsj/zxfb/202202/t20220227_1827960.html)。

去年，中国进口最多的三样商品依次是集成电路、石油和铁矿石。

![](https://cdn.beekka.com/blogimg/asset/202203/bg2022032502.webp)

集成电路占了全部进口的16%，约等于石油和铁矿石的总和。由此可见，**中国经济对于进口集成电路的依赖，要大于对于进口石油的依赖。** 中国已经是世界石油进口最多的国家，可想而知，集成电路的进口规模有多大。

为什么会进口这么多集成电路呢？原因很简单，我们自己生产不了高端计算机芯片，不得不进口。

![](https://cdn.beekka.com/blogimg/asset/202203/bg2022032813.webp)

目前，世界最先进的半导体工艺是台积电的 5nm，已经投产了，据说 3nm 今年也将投产，明后年就是 1nm。作为比较，大陆最先进的工艺是中芯国际的 [14nm](https://www.smics.com/site/technology_advanced_14)，但是产量较少，且核心的光刻机依赖国外，因此大部分 14nm 和所有 14nm 以下的芯片现在都依赖进口，这包括了几乎所有家用电脑和手机的 CPU 芯片。

现在，政府的规划是尽快实现 [28nm 全程国产化](https://www.eet-china.com/mp/a91064.html)，然后再实现 14nm 的国产化，但能否实现、何时实现都不确定。

美国遏制中国，最主要的一条就是阻止向中国转让半导体技术，唯恐中国能够生产高端芯片。2018年，美国[制裁中兴通信](https://baike.baidu.com/item/2018%E5%B9%B4%E7%BE%8E%E5%9B%BD%E5%88%B6%E8%A3%81%E4%B8%AD%E5%85%B4%E4%BA%8B%E4%BB%B6/22497216)，禁止美国企业向它出口敏感产品（主要是芯片）。中兴通信几乎倒闭，发布公告称“主要的经营活动已无法进行”，后来向美国缴纳[罚款147亿人民币](http://finance.sina.com.cn/stock/s/2018-06-13/doc-ihcwpcmp7841168.shtml)，才活下来。

2020年，美国制裁华为，禁止任何企业将含有美国技术的半导体产品提供给华为，除非得到美国商务部的批准。这让华为的手机业务大幅萎缩，x86 服务器业务不得不卖掉。整个华为集团的营收2021年下降了28.9%，是二十年来第一次收入下降。

中兴通信和华为都是竞争力很强的中国企业，连它们都经受不了美国的半导体制裁，其他企业就更不必说了。

![](https://cdn.beekka.com/blogimg/asset/202203/bg2022032814.webp)

(图片说明：美国禁止卖给中国的 EUV 光刻机。)

芯片是电子产品的核心竞争力，随着集成程度加大，正变得越发重要，最新的趋势是每家公司都在研制独家芯片。苹果从2020年开始，推出了自己的 M1 芯片。仅仅只是升级芯片，就使得它的整个桌面电脑产品线焕然一新，引发市场哄动，扩大了领先优势。

![](https://cdn.beekka.com/blogimg/asset/202203/bg2022032503.webp)

（图片说明：苹果最新的 M1 Ultra 芯片（右侧），大小是常见的 x86 CPU（左侧）的三四倍。）

考虑到上面的种种因素（中国经济对芯片的依赖、美国的技术封锁、芯片的重要性），我有一个想法：**中国应该成立半导体部，将工信部、科技部、发改委里面跟半导体、集成电路、芯片相关的职能，集中在一起，放在一个部里面**，集中全国的力量，推动半导体的科研和生产，打通产业链，打破美国的封锁。

半导体产业的范围很广，涉及各种学科门类，涵盖材料、设备、软件、硬件等许多领域，单单是光刻机，就需要成百上千个单位的合作，只有政府才有足够力量推动这件事情。现在的行业管理权分散在各个部委，不利于形成合力，也凸显不了半导体的战略重要性。历史上，中国有过煤炭部、石油部、电子工业部，现在完全应该成立一个半导体部。

## Authing 永久免费版

去年，周刊曾经介绍一个优秀的国产 SaaS 服务 [Authing](https://www.authing.cn/)。最近，他们终于推出了永久免费版，造福众多中小站长。

今天就来介绍，怎么免费使用他们的服务。基本上，只要你的软件（Web/移动/桌面）需要用户管理，就用得上。

![](https://cdn.beekka.com/blogimg/asset/202203/bg2022030601.webp)

简单说，Authing 做的是**身份管理的基础设施**，国外叫做“身份云”（IDaaS），集成了用户认证、用户管理、权限、安全治理等众多功能。他们有1000多个 API，你能想到的身份服务场景，几乎都支持。

![](https://cdn.beekka.com/blogimg/asset/202203/bg2022033127.webp)

举例来说，[网站接入微信登录](https://docs.authing.cn/v2/guides/wechat-ecosystem/wechat-pc/)，就像上图那样，点击底部的微信图标，扫描弹出的二维码登录。实现起来只需要三步，基本上不用写代码。

> 1. 在微信开放平台，创建一个网站应用；
> 1. 在 Authing 后台，填写上一步拿到的 App ID 和 App Secret；
> 1. 登录链接指向他们托管的登录页。（他们有组件和 JS SDK，你也可以自己写前端页面。）

真实效果可以看线上的[“风变课灵小馆”](https://cleword.cn/auth/login)（参考[文档](https://docs.authing.cn/v2/guides/wechat-ecosystem/wechat-pc/)和[示例库](https://github.com/Authing/wechat-eco-solution)），其他的社会化登录（微博、钉钉、飞书、QQ 等）也可以这样集成。

Authing 还独创了一种网站的[小程序扫码登录](https://docs.authing.cn/v2/guides/wechat-ecosystem/wechat-miniprogram-qrcode/)。开发者使用他们提供源码的小程序，让用户扫描登录，就能从微信拿到用户的手机号码。单单微信登录这一项，他们就一共支持[6种场景](https://www.authing.cn/solutions/wechat)，包括PC 端、移动端、微信服务号等等。

![](https://cdn.beekka.com/blogimg/asset/202203/bg2022033004.webp)

除了用户认证，Authing 还支持单点登录 SSO， 一个企业内部账号同时接入120多种国内常用的开发工具（上图），比如阿里云、腾讯云、AWS、Gitlab、Jira、石墨文档、Notion、Tower、Teambition、飞书、Confluence 等等。

Authing 的其他企业级功能，还有账号的生命周期管理（员工的入职、离职、组织架构调整）、权限治理、安全治理等等，可以满足大中型企业内部管理的需要。

**现在，他们将这些功能免费开放。** 具体来说，永久免费版分成三类。

> - B2C（C 端应用）：每月不超过8000个活跃用户（MAU）。
> - B2B（B 端应用）：每月不超过200个活跃用户。
> - B2E（内部应用，内部员工登录）：不超过10个员工。

只要你的应用满足上面的条件，就可以永久免费，不用花一分钱。对于小型应用，免费额度是完全够用的，因为他们按照活跃用户计费，不登录就不收费，所以 8000 MAU 差不多可以支持到几万人的注册规模。欢迎访问[官网](https://www.authing.cn/)详细了解和试用，问题可以去[论坛留言](https://forum.authing.cn/)或[咨询客服](https://www.authing.cn/pricing)。

今年5月15日（星期日），他们将在北京举行年度开发者大会 **Authing Connect**，分享在 SaaS 创业、云原生架构、Serverless 和 No-code 领域的探索和经验。如果对这些技术感兴趣，或者想跟他们交流和合作，欢迎扫描下方二维码预约报名。

![](https://cdn.beekka.com/blogimg/asset/202203/bg2022033002.webp)

## 科技动态

1、[欧洲叠石头锦标赛](https://hakaimagazine.com/article-short/stones-as-medium-beach-as-canvas/)

![](https://cdn.beekka.com/blogimg/asset/202202/bg2022020106.webp)

2015年，一位英国艺术家提出，叠石头也是一种艺术，应该举办比赛。他从2016年开始，每年都在苏格兰的一处海滩上，举办欧洲叠石头锦标赛，上图就是2019年的冠军作品。

![](https://cdn.beekka.com/blogimg/asset/202202/bg2022020107.webp)

以前的比赛，每年都有十几个国家（地区）的30~40名选手参加。2021年由于疫情，只限于英国选手报名，但仍有30人参加，两千多名观众现场观看。

比赛只有半天时间，在早上退潮时开始，必须在下次涨潮前完成。一旦涨潮，沙滩上所有的作品顿时都会被冲毁。

![](https://cdn.beekka.com/blogimg/asset/202202/bg2022020108.webp)

![](https://cdn.beekka.com/blogimg/asset/202202/bg2022020109.webp)

2、[数字围墙](https://www.cultofmac.com/764740/apple-maps-hides-tim-cook-house/)

![](https://cdn.beekka.com/blogimg/asset/202202/bg2022020111.webp)

苹果地图和谷歌地图上，苹果公司的 CEO 蒂姆库克的加州住宅最近被模糊处理。房子的四周树立了数字墙，在街景地图上不再能看到外观了。

![](https://cdn.beekka.com/blogimg/asset/202202/bg2022020112.webp)

前些时候，有人在社交媒体上声称要闯入该处，跟蒂姆库克会面。苹果公司向法院申请禁令，法院批准后不久，数字围墙就出现了。

不过，这个待遇不是蒂姆库克独有的，任何人都可以向苹果申请，为自己的房子加上数字围墙。

3、[全息收银机](https://japantoday.com/category/tech/floating-hologram-registers-coming-to-japanese-convenience-stores-1)

![](https://cdn.beekka.com/blogimg/asset/202202/bg2022020306.webp)

日本便利店 7-11 引入了一种非接触式自助结账装置。消费者结账时，没有实体屏幕，所有显示都投影在空气中。

![](https://cdn.beekka.com/blogimg/asset/202202/bg2022020307.webp)

![](https://cdn.beekka.com/blogimg/asset/202202/bg2022020308.webp)

扫描商品的二维码以后，会出现一个全息屏幕，只有正对它的人才能看到，侧面的人看不到。消费者在空气中按下“确定”按钮以后，就会进入结账页面，然后再按下“付款”按钮。

![](https://cdn.beekka.com/blogimg/asset/202202/bg2022020309.webp)

4、[元宇宙时装节](https://mashable.com/article/metaverse-fashion-week)

![](https://cdn.beekka.com/blogimg/asset/202203/bg2022033109.webp)

![](https://cdn.beekka.com/blogimg/asset/202203/bg2022033110.webp)

国外的元宇宙网站 Decentraland 于3月24日至27日，在虚拟世界举办了一次时装节，雅诗兰黛、Dolce & Gabbana、Forever 21 等知名品牌都参与了。

每个品牌都有自己的旗舰店，展示自家的服装，还有走秀活动。

![](https://cdn.beekka.com/blogimg/asset/202203/bg2022033111.webp)

![](https://cdn.beekka.com/blogimg/asset/202203/bg2022033112.webp)

消费者可以购买这些品牌的虚拟服装，供自己在虚拟世界里面穿着，也可以购买真实服装和数字产品的 NFT。

![](https://cdn.beekka.com/blogimg/asset/202203/bg2022033113.webp)

5、[眼动追踪](https://www.news.iastate.edu/news/2022/02/07/zoom-eye-tracking)

![](https://cdn.beekka.com/blogimg/asset/202202/bg2022021002.webp)

视频会议现在非常流行，但是参会者能够集中注意力开会吗？美国学者进行了一项研究，追踪参会者的眼睛有多少时间在看屏幕。

结果发现，如果是几个人的小型会议，参与者有三分之一的时间在看屏幕以外的地方。通常是屏幕以外看几秒钟，然后收回目光，再来看一会屏幕。

大型会议中，参会者看屏幕以外的时间少于小型会议。还有一个发现是，女性在开会时，花比男性多得多的时间看自己的头像。

## 文章

1、[猪心脏移植，中国还有多远？](https://mp.weixin.qq.com/s/VGi50iOMHH0CermRv8rW2g)（中文）

![](https://cdn.beekka.com/blogimg/asset/202203/bg2022032401.webp)

前不久，美国完成了一例人体的猪心脏移植，患者存活了两个月。本文介绍这种技术是否会在中国推行，难度在哪里。

2、[360 软件如何删除](https://mp.weixin.qq.com/s/Hdgcp-I0SrZioXnv3mA6-Q)（中文）

![](https://cdn.beekka.com/blogimg/asset/202203/bg2022032402.webp)

日本网友无意间安装了360安全浏览器，结果怎么都无法删除，他只好在网上请教懂中文的朋友。

3、[应县木塔的严重倾斜问题](https://mp.weixin.qq.com/s/wd2gvWpfg85RZAzNEQTa2Q)（中文）

![](https://cdn.beekka.com/blogimg/asset/202203/bg2022031009.webp)

![](https://cdn.beekka.com/blogimg/asset/202203/bg2022031010.webp)

山西应县木塔建于辽代，是世界现存最古老、最高的木塔。但是，它的木柱现在严重倾斜，可能会突然倒塌。

4、[为什么会有冰刺？](http://www.its.caltech.edu/~atomic/snowcrystals/icespikes/icespikes.htm)（英文）

![](https://cdn.beekka.com/blogimg/asset/202202/bg2022020801.webp)

冰箱里面形成的冰块，有时会出现冰刺，这是为什么？

5、[CSS 纵横比（aspect ratio）解释](https://css-irl.info/aspect-ratio-is-great/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202202/bg2022021007.webp)

CSS 新增的属性`aspect-ratio`，可以设定矩形的长宽比，本文介绍它的用法。

6、[一行 CSS 布局](https://1linelayouts.glitch.me/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202111/bg2021112410.jpg)

本文介绍10种可以用一行（关键）代码实现的网页布局。

7、[如何从安卓手机翻录电子书](https://shkspr.mobi/blog/2021/12/quick-and-dirty-way-to-rip-an-ebook-from-android/)（英文）

作者得到一本电子书，只能在安卓手机上打开。他就写了一个脚本，让手机自动对电子书翻页并截屏，最后将所有图片在电脑进行文字识别。

8、[马尔可夫链的可视化解释](https://setosa.io/blog/2014/07/26/markov-chains/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202202/bg2022020710.webp)

本文使用大量动画，解释什么是马尔可夫链。

## 工具

1、[PeaZip](https://peazip.github.io/)

![](https://cdn.beekka.com/blogimg/asset/202202/bg2022022602.webp)

一个开源的桌面压缩软件，带有图形界面，优点是支持一些新的压缩算法，包括 Zstandard 和 Brotli 算法。

2、[Speech To Code](https://github.com/pedrooaugusto/speech-to-code)

![](https://cdn.beekka.com/blogimg/asset/202203/bg2022033119.webp)

一个实验性的语音编程项目，通过口述指令生成代码，这里试用 [Demo](https://pedrooaugusto.github.io/speech-to-code/webapp/)。（[@ooohmydawn](https://github.com/ruanyf/weekly/issues/2288) 投稿）

3、[HertzBeat 赫兹跳动](https://hertzbeat.com/)

![](https://cdn.beekka.com/blogimg/asset/202203/bg2022033120.webp)

一个国产的开源云监控系统，具有监控网站、PING 连通性、端口可用性、数据库、操作系统、阈值告警等功能，告警通知可通过邮件、微信、钉钉、飞书等发送。（[@tomsun28](https://github.com/ruanyf/weekly/issues/2298) 投稿）

4、[stop-mess-around](https://github.com/OBKoro1/stop-mess-around)

![](https://cdn.beekka.com/blogimg/asset/202203/bg2022033122.webp)

一个浏览器插件，减少摸鱼的时间和频率。打开插件后，一旦访问指定的消磨时间的网址，它就会自动统计浏览时间，达到门槛值就会弹出提醒。（[@OBKoro1](https://github.com/ruanyf/weekly/issues/2302) 投稿）

5、[视频 PPT 提取器](https://github.com/wudududu/extract-video-ppt)

某些教学视频都在讲解 PPT 文案，或者需要导出 PPT 供以后学习，这个工具可以从视频里面提取 PPT，保存为 PDF 文件。（[@wudududu](https://github.com/ruanyf/weekly/issues/2303) 投稿）

6、[sqlite-utils](https://github.com/simonw/sqlite-utils)

一个命令行工具，可以直接对 SQLite 数据库执行 SQL 查询。

7、[Simple.css](https://github.com/kevquirk/simple.css)

![](https://cdn.beekka.com/blogimg/asset/202201/bg2022011703.webp)

一个极简化的 CSS 框架，追求“无类化使用”，即不用指定 class，直接对 HTML 标签生效。

类似的框架还有很多，比如 [Pico.css](https://picocss.com/)、[new.css](https://newcss.net/)、[MVP.css](https://andybrewer.github.io/mvp/)、[bamboo.css](https://rilwis.github.io/bamboo/)、[Water.css](https://github.com/kognise/water.css)、[Vanilla CSS](https://github.com/bradleytaunt/vanilla-css) 等等。

8、[Sci Hub Injector](https://github.com/rickwierenga/sci-hub-injector)

![](https://cdn.beekka.com/blogimg/asset/202201/bg2022011704.webp)

一个浏览器插件，可以在国外著名的论文网站上（比如 PubMed、Nature 等等），插入某篇论文对应的 SciHub 链接。它的代码很简单，可以用来学习如何写浏览器插件。

9、[fq](https://github.com/wader/fq)

一个命令行工具，可以方便地查看二进制文件的内容。

10、[lemmy](https://github.com/LemmyNet/lemmy)

![](https://cdn.beekka.com/blogimg/asset/202201/bg2022012201.webp)

一个开源的论坛聚合服务，只要是支持 Fediverse 协议的论坛，都可以用它订阅。然后就可以在一个页面上，同时浏览多个论坛并发帖。

## 活动

1、[稀土掘金 2022 编程挑战赛](https://hackathon2022.juejin.cn/#/index?utm_source=ruanyf)

![](https://cdn.beekka.com/blogimg/asset/202203/bg2022033126.webp)

一个面向全国高校的编程比赛，稀土掘金主办，本周开始报名。一共三个赛道，只需选择其中一个，按要求完成作品，5月份提交即可。

经过专家评选，优胜作品会获得证书，以及总金额超过10万元的现金奖励和字节跳动实习 offer。

## 资源

1、[动画电影的制作过程](https://disneyanimation.com/process/)

![](https://cdn.beekka.com/blogimg/asset/202202/bg2022021001.webp)

迪斯尼的官方网页，解释动画电影是如何制作的，网页很精美，配有很多图片和视频，值得一看。

2、[PHP 之道](https://learnku.com/docs/php-the-right-way/PHP8.0)

![](https://cdn.beekka.com/blogimg/asset/202202/bg2022020707.webp)

面向新人的免费 PHP 教程，这是中文版，此外还有[英文原版](https://phptherightway.com/)。

3、[前端食堂技术周刊](https://github.com/Geekhyt/weekly)

一个中文的前端技术周刊（[@Geekhyt](https://github.com/ruanyf/weekly/issues/2290) 投稿）。

4、[Golang 学习资源大全](https://github.com/LearnGolang/LearnGolang)

一个中国开发者整理的 Go 语言学习资源。（[@0e0w](https://github.com/ruanyf/weekly/issues/2293) 投稿）

5、[study-is-wonderful](https://github.com/xioacd99/study-is-wonderful)

![](https://cdn.beekka.com/blogimg/asset/202203/bg2022033121.webp)

本项目主要面向汉语人群，收集了一些比较好的公开课资源。（[@xioacd99](https://github.com/ruanyf/weekly/issues/2300) 投稿）

## 图片

1、[披萨的烤法](https://twitter.com/elonmusk/status/1505100708256825347)

马斯克在推特说，烤箱只能烤一个披萨，实在太浪费空间，应该像他发的那样烤。

![](https://cdn.beekka.com/blogimg/asset/202203/bg2022032009.webp)

网友回了一张图，空间利用率最大的烤法，根本不是你的烤法。

![](https://cdn.beekka.com/blogimg/asset/202203/bg2022032010.webp)

2、[不用上发条的挂钟](https://en.wikipedia.org/wiki/Beverly_Clock)

新西兰奥塔哥大学物理学系的大厅里面，有一个古老的机械挂钟。它由一个著名制表师在1864年制造。

当年制造时，制表师说，这个钟永运不必（手动）上发条。他没有说谎，这个钟至今还在走，100多年来没有人为它上过发条。

![](https://cdn.beekka.com/blogimg/asset/202112/bg2021122703.webp)

![](https://cdn.beekka.com/blogimg/asset/202112/bg2021122704.webp)

这个钟的原理是，内部有一个密封的玻璃盒，里面是28升空气。当温度或大气压发生变化，只要当天的温度变化超过 3.3°C，盒子里面的空气就会膨胀或收缩，从而拉动一个1磅的砝码1英寸的距离，为这个钟上发条。

![](https://cdn.beekka.com/blogimg/asset/202112/bg2021122705.webp)

## 文摘

1、[软件项目应该像蛋糕](https://cassandraxia.com/writing/shed.html)

![](https://cdn.beekka.com/blogimg/asset/202203/bg2022033123.webp)

（1）蛋糕的制作有时间限制，软件也是。

你事先就知道，做蛋糕大概需要多久。如果你估计需要3个小时，那么稍微超出一点时间，问题不大。但如果你实际上拖了一周才做出蛋糕，蛋糕内部可能已经坏了。软件也是这样，如果实际耗费的时间大大超出原先的估计，这个软件十有八九是有问题的。

（2）蛋糕的体积很小，软件项目的规模也不应该很大。

小体积意味着你可以快速进行大量迭代，找出真正有效的方法。每次迭代都是一个实验，它帮你发现有价值的部分。小体积还可以很容易地进行试错。

（3）蛋糕有消费者，软件也必须有消费者。

如果你做出蛋糕，肯定有人愿意尝尝。用户会提供真正客观的数据，帮助发现蛋糕哪里做得比较好，哪里需要改进，这使得设计决策更容易。软件也必须有人愿意尝试，千万不要做出没有人愿意吃的蛋糕。

（4）做蛋糕很有趣，动手前你就知道会做出什么。

软件也应该这样，你很清楚做出来会是什么样，然后再迭代。每做一次蛋糕，就测试一个新想法。如果你感到这件事不再有趣了，很可能哪里出错了。

总之，你把软件想成是一块蛋糕，可以想通很多事情。

2、[我为什么免费发布 Putty？](https://andrewducker.dreamwidth.org/4085856.html?thread=28352864#cmt28352864)

很多人说，作者不应该免费维护开源软件。依赖这些软件的大公司，应该付费给作者。如果没人付费，软件就没法持续发展。

我是免费软件 Putty 的作者，这个软件在 Windows 上有很多用户，所以我认为，我有资格来谈谈自己的想法。

![](https://cdn.beekka.com/blogimg/asset/202203/bg2022033124.webp)

那些公司免费使用我的软件，而不付钱给我，我并没有感到被剥削或被忘记。我其实愿意他们这样做，故意免费发布，希望他们来用我的软件。

一部分原因是 PuTTY 跟网络安全相关。安全软件很特别，整个互联网的安全是相关联的：不安全的站点越多，恶意攻击和渗透行为就会越多，从而很可能影响到对我个人很重要的网站。

我希望，通过免费提供软件，让尽可能多的服务器变得更安全。一旦互联网整体提高了安全性和可靠性，我自己会从中收益。

如果我对软件收费，收取的费用越高，意味着维护互联网安全的成本也越高，就很可能越多的公司出于效益考虑，不做或少做安全投资，从而让互联网成了一个更不安全的地方，最终这会让每个人都受害。

当然，如果人们愿意付钱给我，我不会拒绝。

## 言论

1、

整个自由软件社区，弥漫着一种不信任的气氛：不信任大公司，不信任政府，不信任专有软件。

这些不信任的根源在于，自由软件社区不信任集中化，更喜欢去中心的设计。

-- [《去中心化的迷思》](https://rosenzweig.io/blog/the-federation-fallacy.html)

2、

互联网开发已经变了，我们不再为互相链接和长期展示而创建内容，而是为了展示广告而创建内容。

内容的消费时间已经从几分钟下降到几秒钟，Facebook、Instagram 和 TikTok 这样的成瘾机器被认为是互联网的正确形式。

-- [《Web 的现状》](https://christianheilmann.com/2021/12/20/the-web-starts-on-page-four/)

3、

汽车是一种快速折旧的昂贵资产，生命周期的绝大部分时间都无所事事地停在车库。大都市地区必须拿出大量土地，当作停车场，才能放置所有的闲置车辆。

我们越早实现无人驾驶和大规模的按需运输，就能越早摆脱这种巨大的浪费。

-- [Hacker News 读者](https://news.ycombinator.com/item?id=30170877)

4、

互联网时代的信息质量，呈现两极化。信息的平均质量变得越来越差，但是你能从网上找到的最有用信息，质量正越来越好。

这就好比一个商品极大丰富的市场，对普通消费者是不利的，因为他不知道怎么选择琳琅满目的商品；但对高水平消费者非常有利，因为他能找到最满足自己需要的商品。

-- [《丰富市场的悖论》](https://perell.com/note/the-paradox-of-abundance/)

5、

如果以区块链为基础的 Web3 得到推广，用户将没有隐私。一个账户（钱包）的所有资产和交易都是公开在区块链上的，只要别人知道你的钱包地址，就可以查询你拥有多少货币、向谁发送了加密货币等等信息。

-- [《Web3 的隐私与透明度》](https://coinsights.substack.com/p/the-duality-of-web3)

## 历史上的本周

2021年（第 150 期）：[当音乐还是稀缺的时候](https://www.ruanyifeng.com/blog/2021/03/weekly-issue-150.html)

2020年（第 98 期）：[怎样清晰地表达自己的观点？](https://www.ruanyifeng.com/blog/2020/03/weekly-issue-98.html)

2019年（第 47 期）：[吃播算不算正式工作？](https://www.ruanyifeng.com/blog/2019/03/weekly-issue-47.html)

## 订阅

这个周刊每周五发布，同步更新在[阮一峰的网络日志](http://www.ruanyifeng.com/blog)和[微信公众号](http://weixin.sogou.com/weixin?query=%E9%98%AE%E4%B8%80%E5%B3%B0%E7%9A%84%E7%BD%91%E7%BB%9C%E6%97%A5%E5%BF%97)。

微信搜索“阮一峰的网络日志”或者扫描二维码，即可订阅。

![](https://cdn.beekka.com/blogimg/asset/202103/bg2021030402.jpg)

（完）

