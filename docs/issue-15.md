# 每周分享第 15 期

这里记录过去一周，我看到的值得分享的东西，每周五发布。

![](https://www.wangbase.com/blogimg/asset/201807/bg2018072701.jpg)

（题图：集盒商城，杭州，2018）

很多网友问，《每周分享》的来源是什么，你从哪里得知这些消息？

我的消息来源主要是下面几个。

> * [Hacker News](https://news.ycombinator.com/)
> * [GitHub](https://github.com/explore)
> * RSS 订阅
> * Twitter 和 Facebook

多年来，我每天都会浏览这些消息来源，了解资讯，看到有意思的东西，就会写入《每周分享》。我从学生时代就有做笔记的习惯，《每周分享》只是把个人笔记公开了而已。

这些消息来源大部分是英语，中文的内容比较少，因为中文信息来源很难找。国内的媒体往往只报道，谁融到了多少钱、谁上市了、哪位高管又跳槽了......技术本身的报道是非常少的。另一方面，国内的氛围是，独家技术都不太愿意曝光，更别说写得清晰易懂了。

我希望，国内也能有 Hacker News 那样的技术资讯网站。《每周分享》只是第一步，看看有多少人对这类东西感兴趣。如果有那么一批读者，经常来看，那么进一步就可以做社区，共同创造一些更有意义和价值的东西。

## 新闻

1、[澳大利亚昆士兰消灭80%的蚊子](https://www.csiro.au/en/News/News-releases/2018/Trial-wipes-out-more-than-80-per-cent-of-disease-spreading-mozzie)

我们知道，只有雌蚊子才叮人，雄蚊子是不叮人的。

利用这个特点，2017年11月，澳大利亚昆士兰州人工培养了数百万只雄蚊子。这些蚊子携带一种特殊的细菌，然后被释放到大自然。它们与雌蚊子交配，卵不会孵化，结果当地蚊子的数量减少了80%。

2、[一季度结婚人数大幅下降](http://cj.sina.com.cn/articles/view/1909090555/71ca68fb00100ddun)

![](https://www.wangbase.com/blogimg/asset/201807/bg2018072702.jpg)

2018年6月4日，民政部发布了"2018年一季度结婚大数据"。全国结婚登记301.7万对，同比下降5.7%。过去五年，这个指标一直在下降，五年前的2013年一季度，全国还有428万对结婚。只过了五年，全国结婚人数将近3分之一。

由于同期的人口总数是增长的，就说明，国内年轻人结婚的意愿越来越淡薄，选择单身的人越来越多。另外，这五年的离婚人数一直在上升，虽然上升速度不快。

3、[第一份 GDPR 裁决](https://www.natlawreview.com/article/german-court-issues-first-gdpr-ruling)

2018年5月，GDPR（欧洲保护消费者隐私法案 ）生效。现在，第一份裁决已经出炉了。德国一家法院根据 GDPR，判决全球域名最高管理机构 ICANN 违法。

ICANN 现在的做法是，登记域名时，必须提供三个联系方式：域名所有人、技术负责人、域名管理员。法院认为，这些信息太多了，只要域名所有人的联系方式即可，技术负责人和域名管理员的联系方式是不必要的，ICANN 又提不出合理的解释，因此判决违法。该案现在进入上诉流程。

4、[微软发布10寸的 Surface Go](https://blogs.windows.com/devices/2018/07/09/meet-surface-go-starting-at-399-msrp-its-the-smallest-and-most-affordable-surface-yet/)

![](https://www.wangbase.com/blogimg/asset/201807/bg2018072703.jpg)

10 寸是目前最小的 Surface 型号。 它可以当做平板电脑使用，也可以配上键盘，当做笔记本使用。重量521.6克，续航9个小时，售价399美元。由于能够使用微软 Office，可能会比 iPad 更受欢迎。

这个产品的另一个意义在于，它是 Windows 10 以后，微软发布的屏幕最小的硬件。如果成功的话，估计会进一步缩小屏幕，直至重返手机市场。

5、[热成像攻击](https://www.bleepingcomputer.com/news/security/thermanator-attack-steals-passwords-by-reading-thermal-residue-on-keyboards/)

![](https://www.wangbase.com/blogimg/asset/201807/bg2018072725.jpg)

加州大学的研究人员提出，可以通过键盘上的热残留窃取密码。用户使用键盘后的一分钟以内，就可以通过热像仪，找出用户使用的键，从而暴力破解密码。

6、[太空充满了油脂](https://www.theguardian.com/science/2018/jun/27/space-is-full-of-dirty-toxic-grease-scientists-reveal)

太空是不是接近真空？现在，科学家告诉我们，太空存在大量碳氢化合物分子，有很多很多脏兮兮的油脂。

悉尼新南威尔士大学的化学家蒂姆施密特教授表示，未来宇宙飞船穿越星际空间时会遇到星际尘埃，其中部分是油脂，部分是烟灰，部分是沙子般的硅酸盐。它们使得飞船的挡风玻璃上会厚厚地粘上一层。他还说，太阳系没有星际尘埃，因为太阳风把它们都吹散了。

7、[Git 节点关系图](https://blogs.msdn.microsoft.com/devops/2018/07/09/supercharging-the-git-commit-graph-iii-generations/)

![](https://www.wangbase.com/blogimg/asset/201807/bg2018072704.jpg)

微软向 Git 2.18 提交了一个新功能，会自动在Git 仓库生成一个有向图数据文件，这个文件保存每个提交之间的线性关系。这会大大加快大型库的合并操作的速度。另外，以后生成节点关系图，只要根据这个文件即可，不用遍历整个库 。

8、[自己做饭省多少钱？](https://priceonomics.com/how-much-money-do-you-save-by-cooking-at-home/)

![](https://www.wangbase.com/blogimg/asset/201807/bg2018072705.jpg)

有一项研究，计算了自己做饭和去饭店吃的价格差异。结论是同样的食材，饭店比自己做贵5倍，如果吃连锁店的套餐会贵三倍。为了省钱和健康，还是自己多做做饭吧。

9、[胚胎基因检查](http://finance.sina.com.cn/stock/s/2018-07-13/doc-ihfhfwmu4300957.shtml)

![](https://www.wangbase.com/blogimg/asset/201807/bg2018072706.jpg)

2017年，湖南省长沙市一位产妇在医生的建议下，做了华大基因的"无创DNA检查"，结果显示胎儿低风险，就把小孩生了下来。结果，这个新生儿有"13号染色体长臂缺失综合症"、"脑发育不良"、"虹膜缺损"等一系列缺陷和疾病。这意味着，小男孩很可能会智力障碍、生长迟缓、外表异常，几乎无法正常长大。

虽然这个案例是基因检测失败了，但是可以设想，如果这种检测是准确的（未来肯定可以做到），那么每个胚胎一定都会做这种检测。如果结果是高风险，胚胎就没有出生的机会；如果结果是某个基因缺失，可以修补后再出生。[下图](https://www.genome.gov/images/content/costpermb_2017.jpg)是过去20年 DNA 测序的价格变动。

![](https://www.wangbase.com/blogimg/asset/201807/bg2018072707.jpg)

10、[物理密钥](https://krebsonsecurity.com/2018/07/google-security-keys-neutered-employee-phishing/)

媒体报道，为了实现双因素认证，谷歌公司内部已经全员使用物理密钥。也就是说，除了密码，登录还需要物理凭证。下一步，谷歌会[发售](https://www.cyberscoop.com/google-titan-security-key-2fa-anti-phishing/)这种物理密钥。

![](https://www.wangbase.com/blogimg/asset/201807/bg2018072708.jpg)

以后，随着 [WebAuthn](https://en.wikipedia.org/wiki/WebAuthn) 标准的推广，普通网站也可以使用物理密钥登录。一旦当前设备（比如手机）登录过一次，以后就不需要输入密码，直接用物理密钥就可以登录。

11、__一句话新闻__

(1) [欧盟对谷歌罚款43.4亿欧元](http://europa.eu/rapid/press-release_IP-18-4581_en.htm)，理由是安卓绑定谷歌服务，帮助谷歌垄断在互联网搜索领域的主导地位。真讽刺，中国出售的安卓手机会剥离谷歌服务，现在成了欧盟眼中的正确做法。

(2) 北美148个城市的[房租排名](http://www.visualcapitalist.com/mapped-cost-rent-140-north-american-cities/)，第一名是旧金山，3500美元一个月，第二名是曼哈顿的3000美元。大部分城市都超过1000美元。
 
(3) [谷歌地图](https://www.inderapotheke.de/blog/farewell-google-maps)的 API 调用，免费额度缩小30倍，价格提高14倍。这迫使大量网站转为使用 OpenStreetMap。

## 互联网人才报告

本期《每周分享》很高兴得到高端互联网人才招聘网站 [100offer.com](https://100offer.com/) 的赞助。

2018年的日历已翻了一半，又到了年中盘点的时刻。在科技企业频传上市消息的第二季度，互联网人才的流向和薪资水平是否也有了新的变动？

近期，互联网技术招聘平台 [100offer](https://100offer.com/) 发布了《2018年 Q2 互联网人才市场流动报告》，分析了技术开发者的最新薪资动态。

给大家分享报告的几个结论：

> 1、         Q1 全年跳槽高峰过后，Q2 面邀薪资继续上涨，小有惊喜；
> 
> 2、         管理型、专家型技术人才市场行情坚挺，全栈和数据工程师涨薪最快；
> 
> 3、         招聘需求集中于上市公司，创业公司吸引人才变难；
> 
> ......

如果你还想知道：哪些细分领域薪资最高？哪些公司是Q2互联网人眼中的当红炸子鸡？获得季度跳槽涨薪王称号的程序员是怎样的存在？

__扫描以下海报关注 100offer，回复关键词「薪资报告」，即可免费领取完整版报告。__

![](https://www.wangbase.com/blogimg/asset/201807/bg2018072709.jpg)

## 教程

1、[Python 语言教程：基本统计学指标](https://www.dataquest.io/blog/basic-statistics-with-python-descriptive-statistics/)（英文）

一篇很好的初级 Python 教程，教你用最基本的语法，算出平均数和标准差。

2、[WordPress 编译为 .Net](https://www.hanselman.com/blog/TheWholeOfWordPressCompiledToNETCoreAndANuGetPackageWithPeachPie.aspx)（英文）

有人把 WordPress 编译成了 .Net 代码，运行的时候只需要 .Net 环境，不需要 PHP 了。随着转码器的流行，以后这种事情可能越来越多。你用什么语言可能根本无所谓了，反正都可以转来转去。

3、[IP 地址 192.168.1.1 的由来](https://www.quora.com/Whats-the-history-behind-192-168-1-1-Why-not-192-169-1-1-or-any-other-IP-address-When-did-it-start-being-used-Who-started-it-Why-Why-not-1-1-1-1-What-is-the-relation-to-127-0-0-1-What-about-10-0-0-1-Apple)（英文）

为什么是 192.168.1.1 这个地址，而不是别的地址被指定为内网 IP？

4、[Kubernetes 入门教程](http://okigiveup.net/a-tutorial-introduction-to-kubernetes/)（英文）

Kubernetes 是现在最流行的容器集群管理工具，本文给出了一份上手教程，教大家怎么安装和使用它。

5、[dd 命令教程](https://opensource.com/article/18/7/how-use-dd-linux)（英文）

dd 命令通常用来克隆整块磁盘，或者制作 Linux 系统的 USB 启动盘。这篇文章教你怎么用，其实很简单。

6、[如何写一个模块打包器](https://adamisntdead.com/lets-write-a-module-bundler/)（英文）

![](https://www.wangbase.com/blogimg/asset/201807/bg2018072710.jpg)

Webpack 是现在最流行的模块打包器，可以将脚本依赖打包成一个文件。这到底是怎么实现的？如果自己写一个打包器，应该怎么写？

7、[Chrome 浏览器开发者工具教程](https://apsdehal.in/blog/chrome-developer-tools-to-master)（英文）

![](https://www.wangbase.com/blogimg/asset/201807/bg2018072711.jpg)

介绍 Chrome 开发者工具各个部分的用法。

8、[MacOS 内核与 Linux 内核的差异](https://itsfoss.com/mac-linux-difference/)（英文）

介绍 MacOS 内核的历史演变，跟 Linux 的差异还是很大的。

9、[什么是 Web 应用程序防火墙（WAF）？](https://www.webarxsecurity.com/web-application-firewall/)（英文）

![](https://www.wangbase.com/blogimg/asset/201807/bg2018072712.jpg)

WAF 是应用程序级别的防火墙，目前主要用在 Web 服务器软件。这篇文章简单介绍了 WAF 的概念。

## 资源

1、[Crafting Interpreters](http://craftinginterpreters.com/)

开源电子书。如何写一个解释器，其实也就是如何自己设计并实现一门语言。

2、[10本 Java 语言好书](https://javarevisited.blogspot.com/2018/06/10-all-time-great-books-for-java.html)

这个书单推荐了10本学习 Java 语言的必读书，前三名是 Effective Java、Clean Code 和 Java Concurrency in Practice。

3、[CheatSheet 汇总](https://devhints.io/)

![](https://www.wangbase.com/blogimg/asset/201807/bg2018072713.jpg)

这个网站收集各种软件的 Cheat Sheet（常用操作表）。

4、[机器学习指南](https://developers.google.com/machine-learning/guides/)

谷歌推出的机器学习各个领域的初学者指南，目前只有两个专题。

## 工具

1、[lockbox](https://testpilot.firefox.com/experiments/firefox-lockbox/)

![](https://www.wangbase.com/blogimg/asset/201807/bg2018072714.jpg)

Firefox 推出的管理密码的 App，最大特色是浏览器和手机同步。某个网站的密码，浏览器输入了，手机里也能看到，反之亦然，基本上就是有桌面同步功能的 1Password。目前只有 iOS 版本。

2、[CoNumber](https://conumber.com/)

该网站提供50个国家或地区的虚拟电话号码，可以用来接收当地短信或来电。

3、[网站访问统计服务](https://www.gethighlights.co/blog/choose-right-analytics-platform/)

这篇文章介绍了 Google Analytics 等8个网站统计工具。

4、[asmttpd](https://github.com/nemasu/asmttpd)

asmttpd 是一个用汇编语言写的 Web 服务器，非常小，二进制包只有 6KB，功能比较少，但性能很好。

5、[tui.image-editor](https://github.com/nhnent/tui.image-editor)

![](https://www.wangbase.com/blogimg/asset/201807/bg2018072715.jpg)

开源的在线图像编辑器。

6、[Fastpack](http://fastpack.io/)

又一个新的 JS 打包器问世了，企图替代 Webpack。

7、[v8n](https://github.com/imbrn/v8n)

一个浏览器的表单验证库，采用链式写法，特点是易读易写。

8、[汉字卡片](https://github.com/d33tah/strokes)

![](https://www.wangbase.com/blogimg/asset/201807/bg2018072716.jpg)

一个波兰程序员为了学中文，制作了一个工具：输入常用汉字，自动生成学习卡片。

9、[BGP 图像格式](https://webencoder.libbpg.org/)

BGP 图像比 JPG 图像有更好的压缩比，但是它的解析需要加载一个前端 JS 库。

## 文摘

1、[DNA 储存信息](https://qz.com/1314803/storing-information-on-dna-is-now-cheap-enough-to-be-viable/)

![](https://www.wangbase.com/blogimg/asset/201807/bg2018072717.jpg)

人类正在产生海量的信息，目前都储存在硬盘上。科学家正在尝试使用 DNA 储存这些信息。

所有蛋白质都是由4种核苷酸构成：腺嘌呤（A）、胸腺嘧啶（T）、鸟嘌呤（G）、胞嘧啶（C）。如果规定 A 表示00，C 表示01，T 表示11，G 表示10，那么只要组合这些核苷酸就能表示所有信息。

每个人类细胞含有30亿个碱基对，大概是几十 MB 的数据。人体包含几十万亿个细胞，也就是说，如果使用 DNA 储存数据，那么大概只要一个汽车的后备箱，就能放下人类的所有数据。

2、[人类为什么不会光合作用？](https://motherboard.vice.com/en_us/article/3dk4bv/human-photosynthesis-will-people-ever-be-able-to-eat-sunlight)

如果人类可以像植物那样进行光合作用，直接从太阳接收能量。这肯定会让人类的生活变得更轻松：我们不用通过食物补充能量了，用在饮食上的时间可以用到其他方面。过度开发的农业用地将恢复自然生态系统。 饥饿，营养不良和食源性疾病的发病率将直线下降。

但是，人类无法进行光合作用，这到底是为什么呢？

原因是动物和植物走了不同的进化方向：植物通过保持静止，来保存它们缓慢但恒定的太阳能摄取，但动物要四处移动，依靠太阳补充能量太缓慢，所以需要能量密集的食物来提供能量。

未来，人类贴上光合作用的皮肤贴片，似乎也不是不可能。这里的关键是，我们需要一种技术，可以利用太阳能将二氧化碳转为人体可以吸收的糖，这样通过晒太阳，人类就能补充能量。另外，如果能将叶绿体变成人体皮肤，那么，也许我们可以让一个人永远在水下，因为除了糖，光合作用还产生氧气。

这里的麻烦在于，人体没有足够的表面积，来捕获大量阳光。植物有树叶，所以能够利用比自身体积大得多的表面积，吸收太阳能。人体的表面积与体积之比实在太小。

3、[从台积电看半导体的历史](https://www.qdaily.com/articles/54588.html)

![](https://www.wangbase.com/blogimg/asset/201807/bg2018072718.jpg)

2018年6月5日，主持完台积电（TSMC）2017 年年度股东大会后，董事长 87 岁的张忠谋正式从他创办的公司退休。

台积电（TSMC）是"台湾积体电路制造股份有限公司" 的缩写。顾名思义，就是在台湾制造积体电路，也就是集成电路。集成电路是现代计算机业的起点，它能在更小的空间里聚集更复杂的电路。在 1958 年集成电路发明之前，由晶体管组装的计算机一台就几乎要堆满一整个房间。

今天台积电市值超过 2000 亿美元，是全球前 30 大上市公司。但它创办 31 年来只做一个生意----把其它公司设计的芯片造出来。台积电是全球第一个专门做这生意的公司，它启动了芯片制造的分工----有人专门设计、有人专门制造。

因为有台积电这样的公司专注于越来越复杂的芯片制造，专门的设计公司，比如英伟达、ATI、高通、博通甚至苹果才能专注于提升芯片设计。这种分工在 PC 时代带来 3D 图形处理革命，在智能手机时代更是直接促成因素之一。现在芯片业谈起自动驾驶，台积电依然是背后的支柱。

但集成电路的出现和台积电或者张忠谋都没什么关系。1958年 27 岁的张忠谋刚加入老牌半导体公司德州仪器。同年，比他早加入公司没多久的工程师杰克·基尔比（Jack Kilby）发明了第一块集成电路。

## 新奇

1、[Timeqube](https://timeqube.com/)

![](https://www.wangbase.com/blogimg/asset/201807/bg2018072719.jpg)


你是不是经常为会议超时烦恼？国外一家创业公司推出了一个小装置，可以通过颜色，提醒大家会议的进度。正常情况下是绿色，表示时间充分。

![](https://www.wangbase.com/blogimg/asset/201807/bg2018072720.jpg)

一旦时间快到了，就会变成红色。等到预定结束时，就开始不停闪烁。

## 本周图片

1、[手机加装单反镜头](https://www.mobile01.com/topicdetail.php?f=588&t=5505818)（组图）

![](https://www.wangbase.com/blogimg/asset/201807/bg2018072721.jpg)


台湾网友为手机装了一颗废弃的单反镜头，高景深和长焦都有不错的表现。

![](https://www.wangbase.com/blogimg/asset/201807/bg2018072722.jpg)


2、[世界最大草绳](https://asahichinese-j.com/travel/news/11693591)

![](https://www.wangbase.com/blogimg/asset/201807/bg2018072723.jpg)

日本岛根县出云大社有一根世界最大草绳，全长13.6米、重5.2吨，用了2公顷水稻稻草制作的草绳捻成，制作耗时3个半月。最近，时隔6年，这根绳子又换了一根新的。

3、[Evil building](https://www.reddit.com/r/evilbuildings/top/?t=year)

![](https://www.wangbase.com/blogimg/asset/201807/bg2018072724.jpg)

Reddit 上面有一个帖子询问大家，哪些建筑物看上去很像电影里面坏蛋的巢穴，里面有很多有趣的建筑物照片。

## 本周金句

1、

一个软件要多么自负，才会选择 .key 作为文件后缀名。这个软件就叫 Mac Keynote。（推特[@climagic](https://twitter.com/climagic/status/1017126404046147585)）

2、

计算机领域有点像是沉积的岩石，每个人在一座山里贡献了其中薄薄的一层，使山变得更加高耸。用户只是站在山顶，只有带着 X 光，你才能看到山里面是什么样子。（[乔布斯](https://www.qdaily.com/articles/54588.html)）

3、

這段大陸創業的日子，帶給了我太多美好的回憶，這所謂的『美好回憶』，不是指我有多成功，而是我選擇了自己想要的生活，有句話不是這樣說嗎？唯一真正的成功，是按自己的意思過上生活。（一个[台湾网友](http://mapleduh.pixnet.net/blog/post/48030264)）

## 欢迎订阅

这个专栏每周五发布，同步更新在我的[个人网站](http://www.ruanyifeng.com/blog)、[微信公众号](http://weixin.sogou.com/weixin?query=%E9%98%AE%E4%B8%80%E5%B3%B0%E7%9A%84%E7%BD%91%E7%BB%9C%E6%97%A5%E5%BF%97)和[语雀](https://yuque.com/ruanyf/share/)。

微信搜索"__阮一峰的网络日志__"或者扫描二维码，即可订阅。

![image | left](http://www.ruanyifeng.com/blogimg/asset/2018/bg2018042311.jpg)

（完）

