# 每周分享第 9 期

这里记录过去一周，我看到的值得分享的东西，每周五发布。

这个周末是端午节，我要陪家人旅行，所以提前一天发布，祝大家端午节快乐。

![](https://www.wangbase.com/blogimg/asset/201806/bg2018061401.jpg)

（题图：星愿公园，上海，2017）

一个网友看了我的新书[《未来世界的幸存者》](http://www.ruanyifeng.com/survivor/)，留言说："现在已经是未来了，大多数人不知道而已"。这也是我的感受，普通人不知道现在的技术先进到什么地步，很多神话般的功能都已经做到了。

举例来说，我看到一个[消息](http://news.mit.edu/2018/wireless-system-power-devices-inside-body-0604)，麻省理工学院发明了一种远程充电技术，可以隔空用无线电波给微型电子设备充电。他们做了一个实验，把传感器埋入一头猪的体内，大约皮下10公分的地方，然后相隔一米发送无线电波，居然就把传感器驱动起来了！

这意味着微型电子设备从此不需要电池了，可以做得很小（比米粒还小），从而能够植入人体，使用的时候，发送电波就行了。以前做不到，是因为无线电波携带的能量非常微弱，又不知道设备的具体位置，没法用来充电。新技术克服了这些难点。

![](https://www.wangbase.com/blogimg/asset/201806/bg2018061402.jpg)

一旦人体可以植入电子设备，不再有充电的难题，那会带来怎样的变革？我的想象力都不够了......以后可能不再需要身份证了，每个人的体内植入私钥，检查身份的时候，一发信号，返回一个私钥签名的证书，只要跟公钥匹配，立刻就验明正身。

## 新闻

1、[飞行800公里的无人驾驶送货飞机](https://www.cnbc.com/2018/05/26/volans-i-drones-can-haul-cargo-for-500-miles-and-land-on-a-moving-ship.html)

![](https://www.wangbase.com/blogimg/asset/201806/bg2018061403.jpg)

美国一家名叫 Volans-i 的创业公司，开发了一种时速300公里、续航800公里的无人驾驶飞机，主要用来送货，可以负重9公斤。官网介绍是向工厂，医院，建筑工地和海上船舶提供重型零件和设备。

可以想象，收发室以后可以设在楼顶。也没有快递员，无人飞机直接就把货送过来了。

2、[桌面 PWA](https://developers.google.com/web/updates/2018/05/dpwa)

![](https://www.wangbase.com/blogimg/asset/201806/bg2018061404.jpg)

刚刚发布的 Chrome 67 （Chrome OS 版本）提供了桌面 PWA 功能，也就是说，可以把网页变成桌面应用，能够离线使用，并且 Windows （Chrome 70 版本）和 Mac （Chrome 72 版本）都支持。上面图片里的媒体播放器，实际上是一个网页。有了它，Electron 的使用场景大大缩减，可能只剩下读写本地文件。

3、[世界最长的航班](https://www.nytimes.com/2018/05/30/business/newark-singapore-longest-flight.html)

![](https://www.wangbase.com/blogimg/asset/201806/bg2018061405.jpg)

新加坡到纽约的航班是世界上最长的航班，连续飞行18小时45分钟。今年10月，新加坡航空公司将重启这条航线。

它会世界上首次使用超远程飞机空客 A350-900 ULR。这种飞机的特点就是很节省燃料，整架飞机使用碳纤维制成，比传统的铝质材料轻，并且只有两台发动机，而不是传统的四台发动机。同时，它最多只能搭载161位乘客，这一方面为了减轻负重，另一方面也是为了提供稍大的座位，毕竟要坐上18个小时。

据说，主要就是因为新飞机省油，才使得这种超远程航线有利可图。

4、[CSS 漏洞泄漏用户信息](https://www.bleepingcomputer.com/news/security/css-is-so-overpowered-it-can-deanonymize-facebook-users/)

![](https://www.wangbase.com/blogimg/asset/201806/bg2018061406.jpg)

最近爆出的CSS漏洞窃取用户信息，令人叹为观止。黑客诱导用户访问一个恶意网页，里面嵌入 iframe 加载用户 facebook 主页。然后用一个单像素图片，逐一放在 iframe 的每个像素上面，再使用 mix-blend-mode 的 CSS 设置，根据渲染时间差异，算出原始像素的颜色，20秒可以拿到用户名。

5、[以太坊的交易量超过比特币](https://blog.codegiant.io/ethereum-is-bigger-than-bitcoin-already-6a352f87aad5)

![](https://www.wangbase.com/blogimg/asset/201806/bg2018061407.jpg)

目前，以太坊的交易量已经占到所有加密货币交易的一半。很多人认为，比特币的地位将越来越衰弱，被其他加密货币取代。

6、[Node 创始人否定 Node](http://tinyclouds.org/jsconf2018.pdf)

![](https://www.wangbase.com/blogimg/asset/201806/bg2018061408.jpg)

Nodejs 的创始人 Ryan Dahl 一共做过两次关于 JS 的公开演讲。 一次是2009年宣布 Node 项目诞生，另一次是九年后的昨天，演讲题目是《Node 的设计失误》。

这个演讲的内容非常火爆，基本上把 Node 全部否定了，认为 libuv 和 npm（包括 package.json）都是设计错误，怪不得 JS 圈里面没人作声。他觉得，Node 已经无药可救了，所以动手写了一个新项目 deno（这个名字是 node 的拆分，表示 node 重组）。

7、[史上最大 ICO](http://finance.sina.com.cn/stock/usstock/c/2018-06-04/doc-ihcmurvh4058680.shtml)

据英国《金融时报》网站6月2日报道，通过所谓的首次代币发行（ICO），总部位于开曼群岛的Block.one公司提供EOS代币，换取另一种加密货币以太币。据区块链咨询公司"新魔力"公司提供的数据，以6月1日的兑换率计算，这次发行筹集到了41.5亿美元。Block.one拒绝提供正式交易数据。报道称，为了规避监管障碍，在该公司于1日结束的ICO中，美国公民被禁止参与。

不管加密货币能不能成为真正的货币，只要能够推动金融改革，让投融资变得更加互联网化，它就成功了。

8、[微软宣布Visual Studio 2019](https://venturebeat.com/2018/06/06/microsoft-announces-visual-studio-2019/)

![](https://www.wangbase.com/blogimg/asset/201806/bg2018061409.jpg)

微软在宣布收购 GitHub 几天后表示，未来几个月里面，就会发布 Visual Studio 2019。

5月份的 Build 2018 开发者大会上，微软展示了两个新的 Visual Studio 功能：IntelliCode 和 Live Share。前者使用 AI 提供改进代码质量和工作效率的智能建议，后者可让开发人员与团队成员进行实时协作，这些团队成员可以直接从 Visual Studio 和 Visual Studio Code 进行协同编辑和调试。

## 免费 Python 课程

本期《每周分享》很高兴得到[路飞学城](https://www.luffycity.com/home)（[www.luffycity.com](https://www.luffycity.com/home)）的赞助。他们成立于2017年，是老男孩教育的在线教育品牌。

Python 是现在最热门的语言，[路飞学城](https://www.luffycity.com/home)有两门课程，帮助大家学习这门语言。如果你是新手，不知道怎么入门，希望有人能够领一下路，那么可以考虑[《Python 开发7天入门特训营》](https://www.luffycity.com/home/camp?source=ruanyifeng)。这门课帮助大家掌握 Python 的基本用法，具备简单的开发能力。

[![-2869085325200077407.jpg](https://www.wangbase.com/blogimg/asset/201806/bg2018061410.jpg "")](https://www.luffycity.com/home/camp?source=ruanyifeng)

如果你有 Python 基础，想要用爬虫来做一些有趣的事情，比如：

> * 爬取知乎热门文章并对指定回答批量刷赞
> * 爬取微博热门话题评论并分类分析
> * 爬取58同城批量获取客户的租房需求、联系方式
> * 破解业内通用的图片&滑动验证码
> * 如何应对网站反爬虫策略

[《Python爬虫实战集训营》](https://www.luffycity.com/home/camp?source=ruanyifeng)课程就能满足你的需求。该课程从爬虫开发入手，旨在提高学员的 Python 实战能力，在源码级别深度剖析流行的爬虫框架，研究如何提高爬虫性能，并包含防爬策略的解决方法。

[![4779557561561238374.jpg](https://www.wangbase.com/blogimg/asset/201806/bg2018061411.jpg "")
](https://www.luffycity.com/home/camp?source=ruanyifeng)

**最重要的事情放在最后说，上面这两门课程都是免费的！**缴纳99元保证金即可参与，只要完成3次作业和参与直播，提交学习笔记，就可以退还保证金，还可获得《Python全栈开发实战》及内部教材书籍，视频课程、定制文化衫等作为奖励。另外，还会有1对1的导师逐行批改你的代码、讲师3次直播答疑，还有班主任组队小伙伴共同学习。

这两门课都只有 200 个名额，点击这里加入[课程的 QQ 群](https://shang.qq.com/wpa/qunwpa?idkey=7a018d556e4c87a1424d3cc35160445701a3b7432826b4f16deb71d453f7eda4)。跟客服说看了阮一峰博客，还可以获得50元课程代金券。

## 教程

1、[文章] [数码照相机如何工作](http://datagenetics.com/blog/may12018/index.html) （英文）

![](https://www.wangbase.com/blogimg/asset/201806/bg2018061412.jpg)

本文介绍数码相机 CMOS 芯片的感光原理，彩色的光线是如何变成数字信号的。

2、[游戏] [while True: learn()](https://luden.io/wtl/)

![](https://www.wangbase.com/blogimg/asset/201806/bg2018061413.jpg)

一个帮助玩家学习人工智能的游戏。你扮演一个人工智能专家，在游戏的引导下解决各种问题。

3、[文章] [初学者在 Linux 上安装比特币完整节点指南（2018年版）](https://hackernoon.com/a-complete-beginners-guide-to-installing-a-bitcoin-full-node-on-linux-2018-edition-cb8e384479ea)（英文）

这篇文章教你如何在没有任何 Linux 经验的情况下，全新安装Kubuntu 18.04系统，并在这个系统安装比特币完整节点，加入比特币网络。

4、[视频] [计算机科学速成课](https://github.com/1c7/crash-course-computer-science-chinese)（英文中字）

![](https://www.wangbase.com/blogimg/asset/201806/bg2018061414.jpg)

志愿者从 Youtube 搬到 B 站的40集视频教程。

5、[仓库] [awesome-ruby-china](https://github.com/liukun-lk/awesome-ruby-china)（中文）

Ruby China 论坛的精华贴整理。

6、[PDF] [相关系数与余弦相似性](http://zeszyty-naukowe.wwsi.edu.pl/zeszyty/zeszyt9/Geometric_interpretation_of_a_correlation.pdf)（英文）

![](https://www.wangbase.com/blogimg/asset/201806/bg2018061415.jpg)

上面是相关系数的计算公式，这是统计学的基础公式。我一直不知道它是怎么推导出来的，为什么这个公式就能断定两个矢量的相关性，我读过的教科书都不解释这一点。

这里有一篇论文，给出相关系数的[十三种解释](https://www.stat.berkeley.edu/~rabbee/correlation.pdf)，但都写得不太容易理解。后来，我又读到了标题里面的那篇论文，指出相关系数就是两个矢量的[余弦相似性](http://www.ruanyifeng.com/blog/2013/03/cosine_similarity.html)，所以完全相关是+1或-1，完全不相关是0，一下子就看懂了。

7、[PPT] [Docker and Go](https://www.slideshare.net/jpetazzo/docker-and-go-why-did-we-decide-to-write-docker-in-go)（英文）

2013年的时候，Docker 团队介绍他们为什么使用 Go 语言写 Docker。

8、[文章] [编写 Markdown 解析器](https://blog.beezwax.net/2017/07/07/writing-a-markdown-compiler/) （英文）

一组三个部分的系列文章，介绍如何从零开始写一个 Markdown 解析器。作者是用 Ruby 语言实现，但是一些基本知识的介绍跟语言无关，写得挺好的。

## 资源

1、[机器人数据库](http://www.theoldrobots.com/index2.html)

![Robots   The Old Robots Web Site.png | center | 340x363](https://cdn.yuque.com/yuque/0/2018/png/84141/1527321073136-49ebdc56-6011-43e5-a335-47d2b381a8d4.png "")

这个数据库收集人类历史上生产的各种型号的机器人。

2、[电子书] [应用加密法的研究生教材](http://toc.cryptobook.us/)（英文）

这是开源教材，介绍密钥加密的知识。因为是研究生教材，内容不容易。

## 工具

1、[Drawpile](https://drawpile.net/about/)

![](https://www.wangbase.com/blogimg/asset/201806/bg2018061417.jpg)

多人实时协同作画的桌面应用。

2、[wired-elements](https://github.com/wiredjs/wired-elements)

![](https://www.wangbase.com/blogimg/asset/201806/bg2018061427.jpg)

一个有手绘效果的网页组件库。但是，真正特别之处在于它的底层是 Web components，让我们看到了除了React/Vue之外，还有其他的路。

3、[black](https://github.com/ambv/black)

Python 语言的格式要求特别高，因为它通过缩进判断语法区块。现在有了这个工具，就可以自动化格式化 Python 代码，所以你不用担心写出风格一团糟的代码。

4、[sucrase](https://github.com/alangpierce/sucrase)

一个新的 JavaScript 转码器，号称比 Babel 快20倍。

5、[deck.gl](https://eng.uber.com/deckgl-v5/) 

![](https://www.wangbase.com/blogimg/asset/201806/bg2018061418.jpg)

Uber 开源的基于地图的数据可视化框架。

6、[抖音机器人](https://github.com/wangshub/Douyin-Bot)

作者用 Python + ADB 做的 Bot。它会自动打开 APP 对视频截图，然后请求腾讯的 [人脸识别 API](http://ai.qq.com/)，当颜值大于门限值 `BEAUTY_THRESHOLD`时，点赞并关注，接着翻到下一页，重复进行该过程。

## 文摘

1、[自媒体创业泡沫消亡史](https://tech.sina.cn/i/gn/2018-05-27/detail-ihcaqueu9971857.d.html)

![](https://www.wangbase.com/blogimg/asset/201806/bg2018061419.jpg)

2012年8月，微信公众号平台诞生。产品经理回忆，当时根本没有布局战略。但是，公众号的发展超乎想象，上线短短数年，就成为国内最大的内容生产和内容分发平台，一个个暴富传奇在公众号平台上诞生。

可是，五年后的今天，公众号的风口似乎已经过去。根据新榜发布的《2017年中国微信500强年报》，公众号整体平均阅读数下降了24%。内容同质化、用户审美疲劳、短视频来势凶猛，自媒体野蛮掘金的时代结束了。

> 龙泉2014年做"什么值得吃"时，只是一个人凭兴趣一周写两篇，2017年他成立了公司，投入了3个人做新号"马达厨房"，图文质量比最初做"什么值得吃"时好得多，但却怎么也做不起来。
> 
> 胡辛束也面临同样的困境。她们的粉丝数始终无法突破60万，到了2017年，阅读量也开始下滑，拿融资时日均阅读可以达到七八万，年底时头条阅读量仅两三万。
> 
> "基本上没有免费的流量可言，再起来的要么就是花钱，要么就是内容实在优质，能够靠文章自然涨粉的非常少，互推也基本上没有效果，因为号实在太多了。"情感大号"入江之鲸"的创始人鲸鱼表示。

2、[孙正义：巨变即将到来，感觉睡觉都是浪费时间](https://finance.sina.com.cn/2018-05-27/detail-ihcaquev1278516.d.html)

![](https://www.wangbase.com/blogimg/asset/201806/bg2018061420.jpg)

2017年7月20日，软银集团董事长孙正义在东京的 SoftBank World 大会的演讲。

他称，这一次的信息革命，会带来一个没人能想象的世界。对于这种巨大的变革，他实在太兴奋，忙到觉得睡觉都是浪费时间。软银把所有的钱都投在新技术上面，他说金额比其他VC的投资总额还要多。

接下来，他就介绍几个他认为最重要的技术领域。

3、[压缩空气储存能量](http://www.lowtechmagazine.com/2018/05/history-and-future-of-the-compressed-air-economy.html)（英文）

![](https://www.wangbase.com/blogimg/asset/201806/bg2018061421.jpg)

能量的储存一直是难题。电池技术无法储存大量的能量，而且成本高昂。这篇文章提出，我们可以考虑使用压缩空气来储存能量。

> 目前，全球99％以上的电力储存都是由抽水蓄能电站完成，在电力富余的时候，将水从较低水库抽到较高水库。但它需要两个垂直分开的大型水体和一个或两个水坝的合适地理位置。它也会淹没大片土地。大多数能够建造的水电站都已经投入使用，这意味着进一步发展的可能性很小。
> 
> 压缩空气储能被认为是可再生能源电网的重要组成部分，因为它可以大规模储存风力涡轮机和太阳能电池板的剩余电量。相比电池，更可持续，具有更长的预期寿命，更低的生命周期成本，技术简单性和低维护成本。
> 
> 目前，全世界只有两座大型空气压缩储存工厂：一座在德国，一座建于1979年，另一座在美国，建于1991年。这主要因为压缩空气储能和释放能量时，会有一半的能量损失。抽水蓄能电池的充/放电效率为70-85％，化学电池达到65-90％，但现有压缩空气的工厂，储能效率仅为50%左右。这是因为压缩到高压时，空气温度升高，导致能量变为热量，散发到大气中。

## 新奇

1、[触摸屏笔记本](https://www.theverge.com/platform/amp/2018/6/5/17424770/asus-zenbook-pro-screenpad-specs-release-date-price-computex-2018)

![](https://www.wangbase.com/blogimg/asset/201806/bg2018061422.jpg)

华硕最新笔记本的触摸板，是一块触摸屏。为什么没有人早点想到这个点子？

## 每周图片

__1、七年前的微信评价__

![](https://www.wangbase.com/blogimg/asset/201806/bg2018061423.jpg)

还记得短信流行的年代吗？上面是七年前微信刚刚问世时，用户对它的评价。很多人没有意识到，技术改变的不是产品，而是我们。

2、[谷歌总部的大型壁画](https://designobserver.com/feature/what-we-see-when-we-see-google-design/39808)

![](https://www.wangbase.com/blogimg/asset/201806/bg2018061424.jpg)

第一张图是 G Suite 办公套件，第二张图是谷歌云。

3、[学不动了](https://github.com/ry/deno/issues/25)

![](https://www.wangbase.com/blogimg/asset/201806/bg2018061425.jpg)

Node 创始人 ry 发了一个新项目 deno，它是基于 V8 引擎的 TypeScript 运行时（Node 是 JavaScript 运行时）。 结果，一个中国网友跑去，写了上面的留言。 ​​​

## 本周金句

Mixmax 公司写了一篇[文章](https://mixmax.com/blog/to-yarn-and-back-again-npm)。他们原先使用 npm 管理 JavaScript 模块，觉得不好就改成了 yarn，后来觉得还是不好，又改回了 npm。

网友的[评论](https://news.ycombinator.com/item?id=17181933)："这就是我喜欢JavaScript的地方：你总是有活要忙。"

![](https://www.wangbase.com/blogimg/asset/201806/bg2018061426.jpg)

## 欢迎订阅

这个专栏每周五发布，同步更新在我的[个人网站](http://www.ruanyifeng.com/blog)、[微信公众号](http://weixin.sogou.com/weixin?query=%E9%98%AE%E4%B8%80%E5%B3%B0%E7%9A%84%E7%BD%91%E7%BB%9C%E6%97%A5%E5%BF%97)和[语雀](https://yuque.com/ruanyf/share/)。

微信搜索"__阮一峰的网络日志__"或者扫描二维码，即可订阅。

![image | left](http://www.ruanyifeng.com/blogimg/asset/2018/bg2018042311.jpg "")

（完）

