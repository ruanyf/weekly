# 科技爱好者周刊（第 167 期）：广告拦截器太过分了

这里记录每周值得分享的科技内容，周五发布。

本杂志开源（GitHub: [ruanyf/weekly](https://github.com/ruanyf/weekly)），欢迎提交 issue，投稿或推荐科技内容。

周刊讨论区的帖子[《谁在招人？》](https://github.com/ruanyf/weekly/issues/1826)，提供大量程序员就业信息，欢迎访问或发布工作/实习岗位。

## 封面图

![](https://cdn.beekka.com/blogimg/asset/202107/bg2021071518.jpg)

中世纪的艺术大师米开朗基罗，曾经设想在罗马的台伯河上建一座桥，从未实现。法国艺术家根据这个设想，在当年的位置上，使用三个巨大的氦气球，升起了一座长达18米的飞桥。这个装置艺术品将在天空中，展出到7月18日。（[via](https://news.yahoo.com/flying-bridge-inspired-michelangelo-floats-170727926.html)）

## 本周话题：广告拦截器太过分了

上月的一期周刊，发生了怪事。我的个人网站有读者[留言](https://www.ruanyifeng.com/blog/2021/06/weekly-issue-164.html#comment-427536)：“怎么少了两段内容，你是不是遗漏了？”他的浏览器里，有两段文字消失了。

后来找到原因，原来是广告拦截器把那两段隐藏了。本周，我想谈谈这件事。

![](https://cdn.beekka.com/blogimg/asset/202107/bg2021071411.jpg)

有些读者可能不知道，什么是广告拦截器，我先科普一下。它是一种浏览器插件，用来拦截网页广告，使其不显示。

它有一套内置的过滤规则，只要符合规则，就会认定内容是广告，从而拦截或隐藏。比如，它会自动拦截脚本文件`ad.js`，因为脚本名称里面含有“ad”（广告）这个词。

内置的过滤规则，主要来自网上几个著名的[规则集](https://github.com/hl2guide/All-in-One-Customized-Adblock-List/blob/master/adfilters_urls.txt)（filter lists），拦截器会每天定时下载。下图就是规则集的配置界面。

![](https://cdn.beekka.com/blogimg/asset/202107/bg2021071412.jpg)

[Easylist](https://easylist.to/) 是最著名的一个规则集，所有拦截器基本都会装。它还有不同国家的国别版，中国用户会装[中国版](https://github.com/easylist/easylistchina)。

中国版[点进去](https://easylist-downloads.adblockplus.org/easylistchina.txt)，就是一个文本文件，搜索“ruanyifeng.com”。就能看到，大概有十几条规则是针对我的。

![](https://cdn.beekka.com/blogimg/asset/202107/bg2021071413.jpg)

第一次看到时，我挺震惊的。一个单纯的个人博客网站，有人居然写了这么多规则，重兵围剿。下面，我选几条，让大家看看它到底拦截了什么东西。

```
! 拦截脚本 checker.js
ruanyifeng.com/blog/checker.js

! 隐藏指向 t.cn 的链接
ruanyifeng.com##a[href^="http://t.cn/"]

! 隐藏含有“培训”的段落
ruanyifeng.com##p:-abp-contains(培训)
```

上面最后一条规则，就是不允许我写“培训”两个字，只要写了，该段落就会自动隐藏。这就是为什么开头的那个读者看不到两段文字的原因，因为里面正好有这个词。

最厉害的还是下面这条[规则](https://adblockplus.org/development-builds/added-support-for-the-csp-filter-option)，曾经出现在其他规则集里面。
```
ruanyifeng.com^$csp=script-src 'none'
```

它可以禁掉所有 JS 脚本，包括内联的和外链的，防止你使用反拦截措施。有了这条规则，你的页面就运行不了 JS 了，就是这么霸道。如果想进一步了解过滤语法，可以阅读[官方文档](https://help.eyeo.com/adblockplus/how-to-write-filters)和[速查表](https://adblockplus.org/filter-cheatsheet)。

我能理解，大家不喜欢看广告，但它现在的这种做法，简直就是霸凌。完全凌驾于站长之上，任意篡改他人页面，隐藏段落，禁掉脚本，为所欲为，让读者误以为原来就是这样，怀疑网站是不是出错了，还有没有一点点对于原始作者的尊重！

由于插件的优先级高于网页作者，等于让后者任人宰割，毫无还手能力。浏览器难道不应该限制一下插件的权限吗，能不能给予站长反插件的能力？

没错，如果没有广告，页面可以更清爽、加载更快。但是，现实世界中广告到处都是，每时每刻都是铺天盖地的促销和宣传，随便打开一个 App，里面肯定有广告。这是世界运作的方式，也是生活的一部分。你能够接受这个有缺陷的世界，选择对生活中其它广告视若无睹，却要拿小网站开刀，不许它们的页面上出现广告，这是不是太矫情和可笑了？广告拦截器的初衷也许是好的，但现状就是维护者黑箱操作，任意制定规则，幼稚又自大，无法改变这个充满广告的世界，只会拿小网站开刀。

## Node.js 入门课程

如果你想进入 IT 行业，成为一名工程师，实话实说，最容易的途径是前端。相比其他途径（后端、系统运维、图形等等），前端更容易入门，更直观，而且市场的需求大，容易找工作。

前端分成许多不同的方向：Web 网页、手机 App、小程序……不管你选哪一个方向，有一个东西是绕不过去的，那就是 Node.js，前端 npm 模块系统是基于它实现的，你总是需要用它完成本地操作或者架设服务。

本周的课程资料就是一门 Node.js 入门课 **《用 Node.js 编写一个 HTTP Server》**，结合网络协议 HTTP 的基础知识，介绍如何使用 Node.js 实现一个后台服务，适合那些对前端有兴趣、刚刚入门、希望进一步了解 Node.js 和网站原理、并动手尝试写服务端代码的同学。

![](https://cdn.beekka.com/blogimg/asset/202107/bg2021071509.jpg)

这份资料循序渐进，先教大家用几行代码，架设一个 HTTP 服务，可以浏览器访问；然后，解释 HTTP 协议到底是什么，如何使用 GET 和 POST 方法；最后，自己动手实现一个简单 RESTful 接口，体验一下后端开发，并理解跨域的概念和浏览器缓存。下面就是主要课程内容。

![](https://cdn.beekka.com/blogimg/asset/202107/bg2021071511.jpg)

该课程资料由国内著名的程序员学习平台“极客时间”提供，主讲老师是热门开源项目 Date-fns 的成员吴阳。他会手把手带你写 Node.js 代码，在创建 HTTP 服务的基础上，还会给它添加断点下载、跨域请求、浏览器缓存等实用功能，这样上完课后，你就能把这些内容用于真实业务或者自己的项目。

课程主办方为了推广内容，特别向周刊读者提供优惠，现在可以 **0 元获取** 这门课程。微信扫描下方二维码，添加助理老师，就能获得课程链接、源码等资料。

![](https://cdn.beekka.com/blogimg/asset/202107/bg2021071510.jpg)

感兴趣的同学不妨听听看这门免费的前端入门课程。

## 科技动态

1、

7月11日，[维珍银河公司](https://www.yahoo.com/news/richard-branson-virgin-galactic-delay-125709148.html)的火箭飞船成功完成正式首航，到达86公里的高空。美国宇航局认定80公里为大气层的边界，目前只有不到600人曾超过这个高度。

![](https://cdn.beekka.com/blogimg/asset/202107/bg2021071202.jpg)

![](https://cdn.beekka.com/blogimg/asset/202107/bg2021071203.jpg)

当天，连体飞机先将飞船带到空中，然后飞船在空中点火，脱离飞机，冲出大气层。

![](https://cdn.beekka.com/blogimg/asset/202107/bg2021071206.jpg)

![](https://cdn.beekka.com/blogimg/asset/202107/bg2021071204.jpg)

今年70岁的理查德·布兰森在2004年创办了维珍银河公司，目标就是开发宇宙旅游。原定2010年首飞，但一直拖到今年，才完成这个目标。

理查德·布兰森作为首航的6名乘客之一，体验了宇宙航行的感觉，以及大约5分钟的失重，整个飞行历时一个小时。

![](https://cdn.beekka.com/blogimg/asset/202107/bg2021071205.jpg)

![](https://cdn.beekka.com/blogimg/asset/202107/bg2021071207.jpg)

这个事件标志着，普通人的太空旅游变成了现实。维珍银河公司说，明年开始正式对外提供服务，票价预计为25万美元，已有600多人报名。

2、[廉价助听器](https://www.fiercebiotech.com/medtech/bose-finally-launches-its-direct-to-consumer-soundcontrol-hearing-aid)

助听器在美国非常昂贵，价格通常是五千到一万美元。这很不合理，因为助听器本质上就是一个塞在耳朵里面的麦克风，成本并没有那么高。

高价的主要原因是，美国的助听器必须凭医师处方才能购买，医师要对佩戴者进行辅导和测试。助听器售价里面包括了这部分费用，也包括了厂商让自家的产品进入医院，并对医师进行培训的费用。

![](https://cdn.beekka.com/blogimg/asset/202105/bg2021053106.jpg)

为了改变这种状况，美国前两年通过了法律，允许出售不需要处方就能购买的助听器。

2021年5月，Bose 公司上市了美国第一款非处方的助听器，价格为850美元（下图）。它不需要医师对佩戴者进行辅导，而是使用手机，让用户在手机 App 的帮助下，自己手动校正各种参数，所以售价就降下来了。

![](https://cdn.beekka.com/blogimg/asset/202105/bg2021053107.jpg)

3、

[美国加州](https://theconversation.com/installing-solar-panels-over-californias-canals-could-yield-water-land-air-and-climate-payoffs-158754)最近因为高温不下雨，遭遇了严重干旱，水库见底。有人提出来，要在河道上覆盖太阳能板，既可以发电，又可以防止水分蒸发。下面是艺术家画的概念图。

![](https://cdn.beekka.com/blogimg/asset/202107/bg2021070901.jpg)

这样还有一个好处，河道可以为太阳能板下方的空气降温，提高发电效率。

![](https://cdn.beekka.com/blogimg/asset/202107/bg2021070902.jpg)

4、[挖矿难度的史上最大下调](https://crypto.writer.io/p/the-biggest-downward-bitcoin-difficulty)

最新一次的比特币挖矿难度调整，下调了27.94%，是历史上最大的难度下调。而且，难度已经连续下调了三个周期，比五月份高点下降了 42.6%。

![](https://cdn.beekka.com/blogimg/asset/202107/bg2021071410.jpg)

根据比特币的设计，每挖出 2,016 个区块，就要调整一次挖矿难度，防止挖矿变得过难或过易，保持每10分钟挖出一个比特币的速度。

这次挖矿难度下调，应该与国内取缔比特币挖矿有关，使得算力大大减少，挖矿时间变长，难度不得不下调。

5、

[德国大众汽车公司](https://arstechnica.com/cars/2021/06/volkswagen-plans-to-offer-subscriptions-for-autonomous-driving-extra-ev-range/)宣布，该公司的自动驾驶出租车上路后，对使用者会收取费用每小时8.5美元（约55元人民币），比汽油出租车便宜得多。

![](https://cdn.beekka.com/blogimg/asset/202106/bg2021061102.jpg)

理论上，自动驾驶普及以后，完全不必拥有自己的汽车，调度中心可以随时随地安排用车。

6、

[爱尔兰国有电力公司](https://www.theregister.com/2021/06/11/ireland_data_cnetre_electricity/)发出警告，如果全国机房用电继续增长，该国可能会出现频繁断电。

爱尔兰是欧洲主要的计算中心之一，亚马逊、Facebook、谷歌、微软都在那里建有大型机房。

![](https://cdn.beekka.com/blogimg/asset/202106/bg2021061402.jpg)

该国的机房用电量一直在快速增长，估计到2030年，会占到全国用电量的 1/4 到 1/3。爱尔兰的电开始不够了。

7、[Windows 365](https://www.microsoft.com/en-us/windows-365)

![](https://cdn.beekka.com/blogimg/asset/202107/bg2021071505.jpg)

微软宣布推出云 PC 服务“Windows 365”，8月2日上线。用户可以在浏览器里面，使用 Windows 10，所有状态都保存在云端。

它的最大好处是，能让你在各种系统上（包括 PC 和手机）都使用Windows，而且使用的是云端的同一台机器。你在办公室中断的工作，回到家可以在停下来的地方接着做。

![](https://cdn.beekka.com/blogimg/asset/202107/bg2021071506.jpg)

上图是在浏览器里面使用桌面版的 PowerPoint。

用户需要为这个服务支付月费，价格还未公布。云 PC 基于 Azure 虚拟桌面，初期提供12种配置，最低的入门级是单个 CPU、2GB RAM 和 64GB 存储。

## 文章

1、[公鼠怀孕实验](https://mp.weixin.qq.com/s/WFjUA6d8-IxDRF2kPUlq0Q)（中文）

![](https://cdn.beekka.com/blogimg/asset/202107/bg2021070103.jpg)

中国科学家通过给公鼠移植子宫，让公鼠生下了10只小老鼠。这个实验引起了争议，本文介绍相关情况。

2、[为什么 AI 模型里面的狼选择自杀？](https://mp.weixin.qq.com/s/kpqakpeKru7dpkE0f8pySA)（中文）

![](https://cdn.beekka.com/blogimg/asset/202107/bg2021070702.jpg)

有一个同学做了“狼抓羊”的 AI 游戏，规则是狼抓到羊，奖励10分；狼撞到障碍物，扣1分；为了鼓励狼尽快抓羊，每秒钟狼都会扣去0.1分。

但是，游戏启动后，狼却不去抓羊，而是选择在石头上一头撞死。

3、[详解像素和像素密度](https://blog.infolink.com.tw/2021/rediscover-pixel-dpi-ppi-and-pixel-density/)（中文）

![](https://cdn.beekka.com/blogimg/asset/202107/bg2021071421.jpg)

一篇长篇文章，详细解释像素、像素密度、DPI、PPI、DPR 等概念。（[@Leon0824](https://github.com/ruanyf/weekly/issues/1841) 投稿）

4、[BitTorrent 20周年回顾](https://torrentfreak.com/bittorrent-turns-20-the-file-sharing-revolution-revisited-210702/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202107/bg2021070401.jpg)

BitTorrent 下载是2001年7月2日诞生的，距今正好20年了。本文简单回顾了这20年来的发展。
 
5、[我是怎样找出攻击者的？](https://blog.0x3a.com/post/141950176719/playing-games-with-an-attacker-how-i-messed-with)（英文）

![](https://cdn.beekka.com/blogimg/asset/202107/bg2021070402.jpg)

作者发现，自己的网站一直受到攻击，但是对方躲在 Tor 网络后面，看不到真实 IP 地址。

作者就想了一个办法，做了一个假的管理后台，然后在报错信息里面，故意泄露这个后台的网址，看看对方会不会上钩。

6、[为什么特斯拉不需要激光雷达？](https://venturebeat.com/2021/07/03/tesla-ai-chief-explains-why-self-driving-cars-dont-need-lidar/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202107/bg2021070501.jpg)

特斯拉的人工智能负责人，在一次学术会议上解释，为什么特斯拉汽车的自动驾驶不使用激光雷达，而是完全依靠计算机视觉的深度学习。

7、[如何正确设计登录表单](https://learnui.design/blog/tips-signup-login-ux.html)（英文）

![](https://cdn.beekka.com/blogimg/asset/202106/bg2021062804.jpg)

登录表单是各种应用的标配，本文给出11条设计建议，帮助大家做出易用的登录表单。

8、[如何测量程序执行时间](https://serhack.me/articles/measure-execution-time-program/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202107/bg2021070601.jpg)

本文使用通俗的语言，介绍如何测量程序执行时间，举了简单的 C 语言例子，一种方法是测量 CPU 执行周期，另一种方法是测量毫秒数。

## 工具

1、[Git: An Interactive History](https://git-history.jpalmer.dev/)

![](https://cdn.beekka.com/blogimg/asset/202107/bg2021070109.jpg)

一个数据可视化项目，展示如何将一个 Git 仓库的历史进行可视化。

2、[PHP 在线开发环境](https://phpsandbox.io/)

![](https://cdn.beekka.com/blogimg/asset/202106/bg2021061503.jpg)

一个网页的 PHP 软件开发环境，在浏览器里面 PHP 编程。

3、[Utopia](https://utopia.app/)

![](https://cdn.beekka.com/blogimg/asset/202106/bg2021061605.jpg)

一个用户界面设计工具，在浏览器里面通过可视化操作，创建用户界面，实时生成对应的 React 代码。

4、[markdown-css-smartisan](https://github.com/nihaojob/markdown-css-smartisan)

![](https://cdn.beekka.com/blogimg/asset/202107/bg2021071419.jpg)

一个锤子便签风格的网页主题，输入 Markdown 自动生成页面。（[@nihaojob](https://github.com/ruanyf/weekly/issues/1839) 投稿）

5、[Kindle2Flomo](https://github.com/Tit1e/kindle2Flomo)

![](https://cdn.beekka.com/blogimg/asset/202107/bg2021071418.jpg)

Kindle 笔记导出工具，可以在线导出，然后写入笔记软件 Flomo。（[@chempeng](https://github.com/ruanyf/weekly/issues/1842) 投稿）

6、[popular-message](https://github.com/nihaojob/popular-message)

![](https://cdn.beekka.com/blogimg/asset/202107/bg2021071416.jpg)

一个轻量级的网页提示消息（prompt）的 JS 库，无任何依赖。（[@nihaojob](https://github.com/ruanyf/weekly/issues/1838) 投稿）

7、[EFTP](https://github.com/newham/eftp) 

![](https://cdn.beekka.com/blogimg/asset/202107/bg2021071508.jpg)

MacOS 的 SFTP 服务的开源客户端，用来向 FTP 上传或下载文件。（[@newham](https://github.com/ruanyf/weekly/issues/1843) 投稿）

8、[check-if-email-exists](https://github.com/reacherhq/check-if-email-exists)

![](https://cdn.beekka.com/blogimg/asset/202107/bg2021070305.jpg)

一个 Rust 库，用来检查 Email 邮箱的可靠性，功能非常多，包括邮箱是否存在、是否为一次性地址、是否泄露过密码、用户有没有设置头像图片等等。

9、[Acid Tabs](https://github.com/jdhayford/acid-tabs-extension)

![](https://cdn.beekka.com/blogimg/asset/202107/bg2021070502.jpg)

一个 Chrome 浏览器插件，可以自定义分组规则，对标签页进行分组折叠。

## 资源

1、[数据包的旅行](https://www.practicalnetworking.net/series/packet-traveling/packet-traveling/)

![](https://cdn.beekka.com/blogimg/asset/202106/bg2021062811.jpg)

一组英文系列文章，介绍互联网的架构和原理，从数据包的构成到路由的概念，图文并茂，写得非常好。

2、[太空旅游海报](https://www.jpl.nasa.gov/galleries/visions-of-the-future)

![](https://cdn.beekka.com/blogimg/asset/202107/bg2021070102.jpg)

美国宇航局的喷气推进实验室 JPL 聘请艺术家，创作了14幅太空旅游的海报，具有复古科幻风格，专门供爱好者下载打印，挂在墙上。

3、[化学元素价格](https://en.wikipedia.org/wiki/Prices_of_chemical_elements)

![](https://cdn.beekka.com/blogimg/asset/202107/bg2021070108.jpg)

维基百科的页面，列出了每一种化学元素的市场价格。根据该页面，最便宜的元素是氯气，每公斤只有人民币几毛钱；最贵的元素是钋，每公斤要价接近50万亿美元。

4、[AMD 与英特尔市场份额](https://www.cpubenchmark.net/market_share.html)

![](https://cdn.beekka.com/blogimg/asset/202106/bg2021061901.jpg)

这个网页列出了 AMD 和英特尔两年 CPU 的历年市场份额数据。上图是2004年至今两家公司的总体市场占有率，蓝线是英特尔，红线是 AMD。

## 图片

1、[裸鼹鼠的长寿奥秘](https://www.wired.com/story/long-strange-life-worlds-oldest-naked-mole-rat/)

非洲有一种奇特的穴居啮齿类小动物，叫做裸鼹鼠（naked mole-rat），就像没有毛的老鼠，而且皮肤天生就是皱巴巴。

![](https://cdn.beekka.com/blogimg/asset/202106/bg2021060412.jpg)

但是，它可能包含了人类长寿的奥秘。普通的老鼠寿命往往只有一年，长的也不过三四年，但是野外的裸鼹鼠可以活到30年，实验室饲养的就活得更久。而且，它不会衰老，直到临死前不久，身体状态还与两三岁时相同，并且保持生育能力。

![](https://cdn.beekka.com/blogimg/asset/202106/bg2021060413.jpg)

裸鼹鼠长寿的原因是，它们的代谢和呼吸频率非常低，只有正常老鼠的25%--70%。由于代谢率低，它的氧气消耗也非常低，可以在仅含 5% 氧气的空气中至少存活 5 小时。

裸鼹鼠不是恒温动物，属于能够调节体温的冷血动物，会随着外部温度改变自身温度，这进一步降低了热量消耗。这在哺乳动物里面是独一无二的。

裸鼹鼠虽然长寿，但是极少得癌症，这反过来也帮助它活得更长。

![](https://cdn.beekka.com/blogimg/asset/202106/bg2021060414.jpg)

由于裸鼹鼠与人类 DNA 有高达80%到93%的相似度，科学家们正在研究，如何将裸鼹鼠的长寿奥秘应用到人体，使人类活到200岁。

2、[堡垒屋](https://en.wikipedia.org/wiki/Bastle_house)

世界上存在没有门的房子吗？回答是有的。

中世纪时，英国乡下经常有强盗出没。为了保护自己，农民们建造了很多堡垒屋（bastle house）。这种房子非常坚固，墙壁往往厚达一米，窗户又高又小，而且没有门，只有通过梯子才能从高处的窗户爬进去。

![](https://cdn.beekka.com/blogimg/asset/202106/bg2021060409.jpg)

![](https://cdn.beekka.com/blogimg/asset/202106/bg2021060410.jpg)

![](https://cdn.beekka.com/blogimg/asset/202106/bg2021060411.jpg)

## 文摘

**1、虫洞是什么**

摘自何香涛的《追逐类星体》（外语教学与研究出版社，2015）。

要解释虫洞，先要从黑洞说起。

天文学上，黑洞是一个很热门的概念，指的是一个具有巨大引力的星体，可以吸收周围的物质，连光也可以吸收。由于不会产生光，所以无法被看到，因此称为黑洞。

![](https://cdn.beekka.com/blogimg/asset/202107/bg2021071514.jpg)

（图片说明：历史上第一张黑洞照片。）

此外，还有一种星体叫做白洞，正好与黑洞相反。黑洞是将物质吸进去，由外向内；白洞则是将物质排斥出来，由内向外，所有的物质都向外喷发。有人认为，许多X射线暴和γ射线暴正是由白洞造成的。

![](https://cdn.beekka.com/blogimg/asset/202107/bg2021071515.jpg)

现在让我们设想，一个黑洞的对面正好有一个白洞，它们连在一起。周围的物质被不停地吸入黑洞，由于黑洞的背后是一个白洞，白洞会不停地从黑洞中把物质抽出来，再喷发出去。这里最关键的部位是黑洞和白洞之间的衔接口，给黑洞命名的约翰·惠勒想出了一个新名词，把它叫作“虫洞”，像蛀虫在黑洞和白洞之间蛀的洞。所以，虫洞只是一个通道而已，那里并不存放任何物质。

![](https://cdn.beekka.com/blogimg/asset/202107/bg2021071516.jpg)

进一步探究虫洞的物理性质，科学家发现了虫洞还有更大的潜在功能。它不仅能够衔接黑洞和白洞，而且还可以把两个毫无关联的宇宙世界连起来。

广而言之，我们的宇宙就是一个大黑洞，外界看不到我们，我们也看不到外界。现在，可以用虫洞来沟通，相当于在两个宇宙之间搭了一条隧道。这个隧道把两个宇宙的时空连接起来，因此又被称为“时空隧道”。

![](https://cdn.beekka.com/blogimg/asset/202107/bg2021071517.jpg)

我们不能认为地球上的人类是宇宙中唯一的高等智慧生命。同样，我们的宇宙也不应该是唯一的宇宙。在我们的宇宙之外，应该存在着一个超级大宇宙。如果把每个宇宙比作一个球泡，会有无数球泡飘浮在超级大宇宙中。根据以往的理论，一个个宇宙泡之间完全隔绝。而现在，只要通过时空隧道，一个宇宙中的人类就可以到另一个宇宙中去访问。

## 言论

1、

很多人喜欢向后兼容的软件，但是这意味着，软件需要保留它的错误。在以前版本犯下的设计错误，以后就必须一直兼容，不能废除。

--[《承诺向后兼容，就是承诺保留错误》](https://utcc.utoronto.ca/~cks/space/blog/tech/MistakesAndBackwardCompatibility)

2、

与其编写 Javadoc 注释，不如为方法和变量起好名字，使得它们可以解释编码意图，成为自文档的代码（self-documenting code）。

-- [《论代码注释》](https://henrikwarne.com/2021/06/15/on-comments-in-code/)

3、

中学时，我都在学校努力上西班牙语课。有一年暑假，我去了西班牙，30 天只说西班牙语，回美国后，同学看着我说：“你怎么进步这么快？”

对于几乎任何知识，课堂只会让你入门，但精通只能来自你自己沉浸其中。

-- David Perell

4、

为了保护小书店和实体书店，德国2002年通过了一项法律，强制所有书店，包括线上书店，必须以同样的价格销售新书，不得打折。

-- [《德国使用高书价拯救书店》](https://themillions.com/2011/09/the-german-solution-saving-books-by-keeping-them-expensive.html)

5、

每个举办奥运会的城市，都会因此产生大量碳排放。每隔几年就去建造一批全新的体育场馆，这些场馆在赛后往往闲置。国际奥委会应该考虑，在一个固定地点永久举办奥运会。

1896年第一届现代奥运会召开时，希腊就希望能够永久举办，顾拜旦担心不利于奥运会推广，没有答应。

-- [《奥运会应该选择一个永久举办地》](https://www.popsci.com/science/permanent-olympic-stadium/)

## 历史上的本周

2020年（第 116 期）：[世界的未来是一个火药桶](https://www.ruanyifeng.com/blog/2020/07/weekly-issue-116.html)

2019年（第 64 期）：[新人如何进入互联网行业？](https://www.ruanyifeng.com/blog/2019/07/weekly-issue-64.html)

2018年（第 13 期）：[周刊为什么只谈技术？](https://www.ruanyifeng.com/blog/2018/07/weekly-issue-13.html)

## 订阅

这个周刊每周五发布，同步更新在[阮一峰的网络日志](http://www.ruanyifeng.com/blog)和[微信公众号](http://weixin.sogou.com/weixin?query=%E9%98%AE%E4%B8%80%E5%B3%B0%E7%9A%84%E7%BD%91%E7%BB%9C%E6%97%A5%E5%BF%97)。

微信搜索“阮一峰的网络日志”或者扫描二维码，即可订阅。

![](https://cdn.beekka.com/blogimg/asset/202103/bg2021030402.jpg)

（完）
