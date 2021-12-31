# 科技爱好者周刊（第 190 期）：产品化思维

这里记录每周值得分享的科技内容，周五发布。

本杂志开源（GitHub: [ruanyf/weekly](https://github.com/ruanyf/weekly)），欢迎提交 issue，投稿或推荐科技内容。

周刊讨论区的帖子[《谁在招人？》](https://github.com/ruanyf/weekly/issues/2139)，提供大量程序员就业信息，欢迎访问或发布工作/实习岗位。

## 封面图

![](https://cdn.beekka.com/blogimg/asset/202112/bg2021122913.webp)

2021年一整年，只有一次日全食，发生在12月4日国际标准时7点44分的南极洲。这个时刻被卫星拍到了，可以看到南极洲是黑的，这表明月亮此时就在南极的正上方，这个过程持续了2分钟。（[via](https://earthobservatory.nasa.gov/images/149174/antarctica-eclipsed)）

## 本周话题：产品化思维

上周四，华为发布了一款[血压手表](https://consumer.huawei.com/cn/wearables/watch-d/)，戴在手腕上就能测血压。

![](https://cdn.beekka.com/blogimg/asset/202112/bg2021122506.webp)

它的实现很独特，可能是第一个这么设计的手表。

![](https://cdn.beekka.com/blogimg/asset/202112/bg2021122508.webp)

大家看上图，它的表带里面有一个垫层，那是一个微型气囊。

测血压时，手表向气囊充气，使它鼓起来挤压手腕（下图），从而感受到心跳和血压。

![](https://cdn.beekka.com/blogimg/asset/202112/bg2021122509.webp)

我看着这个设计，觉得似曾相识，这不就是腕式血压计吗？

![](https://cdn.beekka.com/blogimg/asset/202112/bg2021122510.webp)

![](https://cdn.beekka.com/blogimg/asset/202112/bg2021122804.webp)

华为的这块血压手表，简直就是腕式血压计的迷你版。但是，大家知道吗，两者的差价有多大？前者的官方定价是2988元，后者只要100多元人民币。

当然，我知道不能这样比较，血压手表是智能产品，有许多其他功能。但是，它的主要卖点不就是测血压吗？这一点上，它并不比腕式血压计强太多。你只需要5%的钱，就能得到一个方便程度差不多、测量结果可能更准确的设备。

我并不是说华为这个手表不好，只是感叹两者的差价这么大。**为什么那些血压计厂商就没有想到，血压计可以做成一块手表呢？** 

既然已经可以戴在手腕上，为什么不索性做得再小一点呢？加入计时功能，配上彩色屏幕和操作系统，马上就变成了血压手表，价格可以提升一个数量级啊。

这么显而易见的一个产品思路，那么多血压计厂商怎么会无人想到呢？

**这就是缺乏“产品化思维”的表现，不善于把功能提升为产品，然后推向市场。** 如果腕式血压计的厂商具备产品化思维，看到自己的产品，就会想到手表市场，甚至可穿戴设备市场。反过来，华为的产品经理从腕式血压计得到了启发：只要把气囊加入智能手表，手表就变成了血压计，可以打开更大的市场，卖出更高的价格。

另一个例子是空气净化机。它的原理其实很简单，就是风扇前面加上 HEPA 滤网。最早想到把风扇做成“空气净化机”的人，显然具有产品化思维：空气净化机的价格贵多了。

![](https://cdn.beekka.com/blogimg/asset/202112/bg2021122511.webp)

![](https://cdn.beekka.com/blogimg/asset/202112/bg2021122512.webp)

工程师和程序员通常缺乏“产品化思维”，更看重解决问题，不善于做成商业化产品。这样不利于把事业做大，毕竟只有做成产品才能拿去卖，卖得好才能摆脱帮别人打工的命运。

几十年前，一个惠普公司的工程师在业余时间设计了一块非常厉害的电路板。他只想着自己玩玩，觉得做电路板很过瘾。一天，他的朋友看到了，坚持要为这块电路板配上机箱和外设，做成计算机拿出去卖。这个工程师的名字是沃兹尼亚克，他的朋友是乔布斯，两个一无所有的青年，就这样创立了苹果公司。我们就需要学习乔布斯的这种产品化思维，从电路板想到个人电脑，从腕式血压计想到手表。

## 飞连

这两天，有一篇文章很火——[《字节跳动不需要总部大楼》](https://mp.weixin.qq.com/s/nPChaKQcotEzttnSysom5w)。字节跳动现在有11万员工，分布在150个国家和地区，却没有一个物理意义上的总部，如此大规模的远程办公，是怎么做到的？

![](https://cdn.beekka.com/blogimg/asset/202112/bg2021122906.webp)

（上图：单单在北京，字节就有近20个办公场所。）

这背后，协同办公平台“飞书”，是支撑起11万人高效办公的效率工具。同时，大家可以想象，办公安全也成为字节这种混合办公的巨大考验。支撑起11万人办公安全的，则是另一款产品——[“飞连”](https://www.volcengine.com/products/feilian/?utm_source=outsidemedia&utm_medium=ruanyifeng&utm_term=wx_readmore&utm_campaign=20211231&utm_content=feilian)。

简单来说，**“飞连”是字节的数字化安全办公平台，为字节11万人的办公安全保驾护航。** 它本身是一个网关服务，集员工身份统一管理、网络与应用权限管理、办公终端管理、安全检测等功能于一体。今年6月，它通过字节跳动旗下的企业级技术服务平台[“火山引擎”](https://www.volcengine.com/)对外开放。

![](https://cdn.beekka.com/blogimg/asset/202112/bg2021123009.webp)

飞连的具体功能有：

**（1）身份权限管理。** 将分散在不同系统的身份信息，以可视化的组织架构进行集中管理，按照员工角色、部门、甚至生命周期自动调整权限，同时支持单点登录，实现常用应用的便捷登录。

**（2）办公网络（Wi-Fi、有线网络）与虚拟专用网络（VPN）的准入系统。** 飞连不仅支持 PC 端、移动端，还能管理物联网办公设备、员工自携带设备（BYOD）、打印机、摄像头等，并支持使用者的追溯。

**（3）终端安全平台。** 飞连提供完整的代码防泄漏、杀毒、应用及进程风险检测、全终端基线检查等能力；更能够梳理员工数据画像，提高软硬件使用率，节省 IT 建设成本。

**（4）智慧 IT 管理工具。** 支持网络诊断与自助修复、在线帮助中心、Oncall 一键拉起、自动获取客户端故障日志等功能。

![](https://cdn.beekka.com/blogimg/asset/202112/bg2021123011.webp)

以上这些功能，全是字节同款，经过字节内部实践验证。所以，它的可靠性、性能、安全完全有保障。

如果你们公司也有内网接入的需求，不妨考虑一下飞连，可到[火山引擎官网](https://www.volcengine.com/products/feilian/?utm_source=outsidemedia&utm_medium=ruanyifeng&utm_term=wx_readmore&utm_campaign=20211231&utm_content=feilian)详细了解，并申请试用，也可以扫描下面的二维码申请试用。

<a href="https://cdn.beekka.com/blogimg/asset/202112/bg2021123016.webp" target="_blank"><img src="https://cdn.beekka.com/blogimg/asset/202112/bg2021123016.webp" width="800"></a>

## 科技动态

1、[太空辣椒](https://edition.cnn.com/2021/12/01/world/nasa-space-chile-harvest-scn/index.html)

![](https://cdn.beekka.com/blogimg/asset/202112/bg2021120903.webp)

![](https://cdn.beekka.com/blogimg/asset/202112/bg2021120904.webp)

今年7月，宇航员在国际空间站种下了一些辣椒种子，它们生长得很好，在11月收获了26个辣椒。其中的12个将送回地球，其余的辣椒被宇航员做成了玉米卷，据说味道很好。

![](https://cdn.beekka.com/blogimg/asset/202112/bg2021120905.webp)

![](https://cdn.beekka.com/blogimg/asset/202112/bg2021120906.webp)

这是国际空间站迄今最复杂、时间最长（4个多月）的植物实验。目前看上去，失重环境对辣椒的生长没有太大影响。这个实验为人们在太空环境获取新鲜食物，积累了经验，下一步宇航员将种植更多植物。

2、[VR 之年](https://twitter.com/JackSoslow/status/1471549480595955716)

![](https://cdn.beekka.com/blogimg/asset/202112/bg2021122706.webp)

2021年是 VR 之年，VR 设备大爆发。Oculus 公司的 VR 头盔 Quest 2 （上图）售出了810万台，超过了微软的 Xbox 游戏主机，后者的销量是800万台。从2017年开始，Oculus 公司的销量每年都达到或接近翻倍增长。

另外，圣诞节期间，Oculus 的 App 占据了苹果商店的免费应用的第一名（下图）。这表明很多家庭在假期，首选玩 VR 游戏。

![](https://cdn.beekka.com/blogimg/asset/202112/bg2021122707.webp)

VR 技术可能来到了爆发的临界点，已经相当成熟了，跟日常生活的结合越来越密切，比如可以在游戏里面健身、爬山。

![](https://cdn.beekka.com/blogimg/asset/202112/bg2021122708.webp)

![](https://cdn.beekka.com/blogimg/asset/202112/bg2021122709.webp)

3、[雪铁龙的概念车](https://www.byri.net/2021/09/29/citroen-an-urban-autonomous-and-interchangeable-vehicle-concept/)

![](https://cdn.beekka.com/blogimg/asset/202112/bg2021122908.webp)

![](https://cdn.beekka.com/blogimg/asset/202112/bg2021122909.webp)

上期周刊介绍了，丰田公司开发出了一种全向轮汽车。其实还有一个方案，可以实现全向轮，那就是法国雪铁龙公司为了庆祝公司成立100周年，提出的一种概念车。

这种车的轮子是四个圆球（上图），所以可以向任意方向滚动。并且，它的底盘和车身是分离的，可以搭配不同的车身。雪铁龙公司希望将它作为城市慢速电动车的解决方案。

![](https://cdn.beekka.com/blogimg/asset/202112/bg2021122910.webp)

![](https://cdn.beekka.com/blogimg/asset/202112/bg2021122911.webp)

![](https://cdn.beekka.com/blogimg/asset/202112/bg2021122912.webp)

4、[不知所云的论文](https://retractionwatch.com/2021/11/04/springer-nature-geosciences-journal-retracts-44-articles-filled-with-gibberish/)

![](https://cdn.beekka.com/blogimg/asset/202111/bg2021112505.webp)

科学杂志出版商 Springer Nature 宣布，撤销旗下《阿拉伯地球科学》杂志的44篇论文，理由是这些论文完全不知所云，下面是其中一些论文的标题。

> - 《基于分布式环境和体育锻炼效果计算的黄土滑坡监测预警》
> - 《基于神经网络的城市降雨趋势估计和青少年焦虑管理》
> - 《沿海地区降雨特征与面向物联网的智能图书馆图书推送系统》
> - 《基于嵌入式系统和篮球体能检测的山区地震活动分布》

不仅论文题目莫名其妙，内容也完全胡说一通。下面是其中一篇的内容截图。

![](https://cdn.beekka.com/blogimg/asset/202111/bg2021112504.webp)

几乎可以肯定地说，这些论文是软件生成的。[大部分署名作者](https://finance.sina.com.cn/tech/2021-10-02/doc-iktzqtyt9400229.shtml)来自中国，甚至还包括985高校的教授。不过，有些可能是编造的，因为作者的通信单位查无此学院。

这种文章怎么会通过评审，发布到正规学术刊物呢？据 Springer Nature 解释，原因是杂志编辑的邮箱被黑了，黑客冒用编辑的身份，将论文放入杂志的出版系统。

## 文章

1、[苹果的中国供应商](https://weibo.com/ttarticle/p/show?id=2309404718623225937978)（中文）

2020年，苹果公司的前200大全球供应商里面，有48家中国大陆和香港企业，本文逐一盘点这些企业。另外还有一篇200大供应商的[地域分布分析](https://weibo.com/ttarticle/p/show?id=2309404720079463121314)。

2、[拆解五菱宏光 MINI EV](https://mp.weixin.qq.com/s/OSSXtVc5KcxQjSYS908dtQ)（中文）

![](https://cdn.beekka.com/blogimg/asset/202112/bg2021122603.webp)

五菱宏光 Mini EV 是中国销售最好的电动车，因为它的售价可以低到2.88万元人民币。一个日本教授想知道为什么这个车售价这么低，就把车拆开看了。

3、[我做系统架构的一些原则](https://coolshell.cn/articles/21672.html)（中文）

架构师左耳朵耗子（陈皓）的文章。“工作 20 多年了，看到了很多公司系统架构，也看到了很多问题，今天把我的这些个人的经验和想法总结下来，希望能够让更多的人可以参考和借鉴，并能够做出更好的架构来。”（[@lyf2nb](https://github.com/ruanyf/weekly/issues/2120) 投稿）

4、[防御性 CSS](https://ishadeed.com/article/defensive-css/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202112/bg2021121101.webp)

CSS 有时会出现很多奇怪的行为，本文介绍一些常见的技巧，保证 CSS 能够按照预想的方式工作，减少怪异行为。

5、[IndexedDB 为什么很慢？](https://rxdb.info/slow-indexeddb.html)（英文） 

IndexedDB 是浏览器内置的数据库接口，但是运行速度很慢，本文分析了原因，提出正确的使用方法。

6、[设置 Linux 服务器的前5分钟](https://sollove.com/2013/03/03/my-first-5-minutes-on-a-server-or-essential-security-for-linux-servers/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202112/bg2021120816.webp)

当你开通一台 Linux 服务器时，如何设置才能保证安全，本文介绍了应该最先做的几件事。

7、[如何使用 Docker 取代本机应用](https://nystudio107.com/blog/dock-life-using-docker-for-all-the-things)（英文）

作者提出 Docker 可以取代本机应用，举例来说，不必本机安装 Node.js，只要运行 Node.js 的 Docker 容器就可以了。为了运行方便，还可以为 Dokcer 命令指定别名。（[@AlexChingEraser](https://github.com/ruanyf/weekly/issues/2122) 投稿）

8、[苹果还没有兑现的软件功能](https://www.macworld.com/article/557089/apple-ios-macos-features-universal-control-xcode.html)（英文）

![](https://cdn.beekka.com/blogimg/asset/202112/bg2021120809.webp)

苹果公司曾经宣布了很多将在2021年实现的软件功能，比如使用同一套键盘和鼠标，同时控制笔记本和 iPad 组合，可以无缝地来回跳跃。本文盘点了有多少许诺的功能落空了。

## 工具

1、[deeplinks.js](https://github.com/WesleyAC/deeplinks)

这个 JS 库可以为选中的文本生成锚点，其他人访问带有这个锚点的 URL，就能看到选中的文本。

2、[AltTab](https://alt-tab-macos.netlify.app/)

![](https://cdn.beekka.com/blogimg/asset/202112/bg2021121110.webp)

Windows 系统有一个 alt-tab 组合键切换桌面的功能，这个开源软件将这个组合键移植到 MacOS 电脑。

3、[稀土掘金插件](https://juejin.cn/extension)

![](https://cdn.beekka.com/blogimg/asset/202112/bg2021122905.webp)

一个浏览器插件，提供定制的开发者门户，在一页上同时展示稀土掘金、GitHub、知乎、B 站、V2ex 等热门技术网站的当天热点，可以指定关注的领域（前端、后端、人工智能等等），还支持笔记和全局搜索功能。

这是今年才上线的，一直在迭代，目前接近正式发布了。

4、[周刊的 RSS 订阅推送](https://github.com/ruanyf/weekly/issues/2132)

这是网友做的，利用 GitHub Actions 将每期周刊推送到企业微信/Slack。（[@ronething](https://github.com/ruanyf/weekly/issues/2132) 投稿）

5、[在线简历生成器](https://github.com/visiky/resume)

![](https://cdn.beekka.com/blogimg/asset/202112/bg2021123005.webp)

一个开源的简历生成器，只要在自己的 GitHub 仓库存入数据文件，然后访问它提供的在线模板，就会自动生成个人简历。（[@visiky](https://github.com/ruanyf/weekly/issues/2131) 投稿）

6、[SpiderFlow](https://github.com/ssssssss-team/spider-flow)

![](https://cdn.beekka.com/blogimg/asset/202112/bg2021123002.webp)

一个开源的爬虫平台，以图形化方式定义爬虫，不写代码即可完成抓取网页。（[@dllen](https://github.com/ruanyf/weekly/issues/2125) 投稿）

7、[pinyin-pro](https://github.com/zh-lx/pinyin-pro)

![](https://cdn.beekka.com/blogimg/asset/202112/bg2021123001.webp)

汉字与拼音转换的 JavaScript 库。（[@zh-lx](https://github.com/ruanyf/weekly/issues/2121) 投稿）

8、[DooringX](https://github.com/H5-Dooring/dooringx)

![](https://cdn.beekka.com/blogimg/asset/202112/bg2021123004.webp)

一个开源的可视化搭建框架，可以自己架设低代码平台，用来快速制作 H5 页面。（[@MrXujiang](https://github.com/ruanyf/weekly/issues/2128) 投稿）

9、[LaTeX 排版生成器](https://github.com/SoftMaple/Editor)

![](https://cdn.beekka.com/blogimg/asset/202112/bg2021123007.webp)

一个开源的网页编辑器，可以将文本排版转成 LaTeX 代码。（[@007tom](https://github.com/ruanyf/weekly/issues/2136) 投稿）

10、[wfrest](https://github.com/wfrest/wfrest)

微型的 C++ 框架，让你快速架设一个高性能服务，提供 Rest API。（[@chanchann](https://github.com/ruanyf/weekly/issues/2127) 投稿）

## 资源

1、[中国哲学书电子化计划](https://ctext.org/zhs)

![](https://cdn.beekka.com/blogimg/asset/202112/bg2021123006.webp)

一个线上图书馆，提供中国历代传世文献。收藏的文本已超过三万部著作，为历代中文文献资料库最大者。（[@kernelry](https://github.com/ruanyf/weekly/issues/2133) 投稿）

2、[书格](https://new.shuge.org/)

![](https://cdn.beekka.com/blogimg/asset/202112/bg2021123003.webp)

中国古籍的在线图书馆，提供古籍的高清彩色影像版本 PDF 文件下载。（[@alaskasquirrel](https://github.com/ruanyf/weekly/issues/2126) 投稿）

3、[软件工程基本原则检查表](https://microsoft.github.io/code-with-engineering-playbook/ENG-FUNDAMENTALS-CHECKLIST/)（英文）

微软公司的一份检查表，逐条列出检查点，确保项目符合软件工程的要求。

4、[InterfaceLIFT](https://interfacelift.com/wallpaper/downloads/downloads/any/)

![](https://cdn.beekka.com/blogimg/asset/202111/bg2021112905.jpg)

免费的 4K 电脑壁纸下载网站。

5、[密码学的乐趣](https://joyofcryptography.com/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202111/bg2021112515.jpg)

一本针对初学者的本科密码学英文教材，介绍密码学的基本知识。

## 图片

1、[日本最复杂的时钟](https://watchesbysjx.com/2016/09/how-japans-thomas-edison-built-the-nations-most-complicated-clock.html)

田中久重（1799—1881年）是一位天才，也许是日本有史以来最伟大的发明家。

他建造了日本第一台蒸汽机车、第一艘轮船、第一个电报机，还是东芝公司的创始人。人们把他称为日本的爱迪生。

![](https://cdn.beekka.com/blogimg/asset/202110/bg2021100201.jpg)

田中久重制作过日本历史上最复杂的钟表，一部由一千个零件组成的六面钟，现在被日本政府指定为国家文物。

这部钟的顶部是一个浑天仪，两个分别代表太阳和月亮的小球，围绕着画着日本岛的玻璃盘运行，代表太阳和月亮相对于地球的位置。

![](https://cdn.beekka.com/blogimg/asset/202110/bg2021100202.jpg)

钟的本体有六面，分别显示不同的计时。比如，下面的这个钟面，显示现在是24节气的哪个节气。

![](https://cdn.beekka.com/blogimg/asset/202110/bg2021100204.jpg)

还有一面显示今年的天干地支。

![](https://cdn.beekka.com/blogimg/asset/202110/bg2021100206.jpg)

肯定还少不了欧洲人发明的12小时。

![](https://cdn.beekka.com/blogimg/asset/202110/bg2021100208.jpg)

这个六面钟于1851年制作完成，日本当时还没有电力供应，该钟使用四个大型发条作为动力。上紧发条，可以运行一整年。

2、[圣诞树与建筑风格](https://www.instagram.com/p/CX84PQ6okFY/)

如果圣诞树也可以像建筑物一样，拥有自己的建筑风格，那么不同流派的建筑师会怎么设计圣诞树？

有人画出了不同建筑流派设计的圣诞树样子。

![](https://cdn.beekka.com/blogimg/asset/202112/bg2021122921.webp)

上图的圣诞树的建筑流派，按照从上到下、从左到右的顺序依次为：

- 最简主义
- 新艺术运动
- 荷兰风格派
- 哥特式
- 解构主义
- 现代主义
- 包豪斯派

## 文摘

1、[别与 Roblox 竞争](https://www.fortressofdoors.com/so-you-want-to-compete-with-roblox/)

我记得，2018年之前，很多创业公司找我，声称他们的目标是击败 PC 游戏巨头 Steam，希望我为他们宣传。

这样的公司有太多家，以至我在2018年写了一篇长文，作为统一回复。现在几年过去了，很明显，Steam 的竞争者都失败了，只有 Epic 还在坚持，但是它的路也很艰难。

声明一下，我从未将 Itch.io 和 GOG.com 视为 Steam 的竞争者，因为他们的市场不一样。

转眼到了2021年，我的收件箱又塞满了邮件，许多创业公司声称要与 Roblox 竞争。如果你还不知道 Roblox，它是一个多人游戏的创建平台，目前价值410亿美元。

![](https://cdn.beekka.com/blogimg/asset/202112/bg2021122907.webp)

我想，我们会看到历史重演。

如果你想要创办一家公司，与 Roblox 直接竞争，我只有一个建议：

别这样做！

我这么说是出于好意。我钦佩你的辛勤工作和奉献精神，但是我很悲观，你的任务非常艰巨，绝大多数公司都会失败。

原因首先是你参加这个聚会迟到了。Roblox 于2006年发布，那是15年前。他们已经建立了巨大的领先优势，找到了行之有效的方法打开市场。你唯一的机会就是找到一个不一样的方法，彻底满足市场需求，这不太可能。

回顾往事，我很后悔当年没有对那些要与 Steam 竞争的公司更严厉一些，让他们及时放弃。就我所知，至少有12家公司因此破产或关闭。

这一次也一样，我觉得明智的做法是立即退出。如果你还是想尝试一下，恭喜你，你足够大胆和疯狂，这副牌对你不利，但还是祝你好运。

## 言论

1、

新冠肺炎之前，苹果手机从郑州的富士康工厂生产出来，直接空运到美国阿拉斯加州的安克雷奇机场，供应美国市场。

现在，几乎所有中国到美国的货运航班，都会中途在韩国或日本停一下，将货物搬到另一架飞机，再飞往安克雷奇。原始的机组人员直接从韩国或日本飞回中国，这样就避免了跟国外人员的接触，回到中国就不必隔离了。

-- [Hacker News 读者](https://news.ycombinator.com/item?id=29234723)

2、

2021年对我是伤感的一年。我母亲在一月去世了，而父亲刚刚在几周前去世。圣诞节到了，我们几乎没有安排任何活动，我一直想把最近一些有趣的事情告诉我爸爸，但他已经不在了。我肯定，要是他还在，一定会观看韦伯望远镜的发射直播。

-- [Hacker News 读者](https://news.ycombinator.com/item?id=29682618)

3、

美国的版权保护期有95年，实在太长了。我们建议进行改革，前十年免费保护，随后每增加一年，都要付费，金额按照 $10 × 1.5 ⁿ ⁻ ¹ 的公式计算。

这样一来，版权前10年的成本为0美元，前20年为380美元，30年为2.2万美元，40年为130万美元，第50年为 7500万。如果你想保留版权50年，就要支付7500万。

-- [Hacker News 读者](https://news.ycombinator.com/item?id=29380541)

4、

亚洲国家和美国的国情有很大不同，但都面临着相同的核心问题：如何为尽可能多的人提供一份体面的工作，让他们赚到可以养活家庭的工资。

-- [《东方和西方精英竞争的危机》](https://americanaffairsjournal.org/2021/11/crises-of-elite-competition-in-the-east-and-west/)

5、

重要的书都应该连着读两遍，因为第二遍读的时候，你已经知道结局了，这样才能真正理解开头。另一个原因是第二遍阅读时，你有不一样的心情，可能会从另一种角度看待问题。

-- [《叔本华论阅读和书籍》](https://fs.blog/schopenhauer-on-reading/)

## 历史上的本周

2020年（第 139 期）：[生物学的可怕进展](https://www.ruanyifeng.com/blog/2020/12/weekly-issue-139.html)

2019年（第 87 期）：[新人要为团队写文档](https://www.ruanyifeng.com/blog/2019/12/weekly-issue-87.html)

2018年（第 36 期）：[程序员将来会不会过剩？](https://www.ruanyifeng.com/blog/2018/12/weekly-issue-36.html)

## 订阅

这个周刊每周五发布，同步更新在[阮一峰的网络日志](http://www.ruanyifeng.com/blog)和[微信公众号](http://weixin.sogou.com/weixin?query=%E9%98%AE%E4%B8%80%E5%B3%B0%E7%9A%84%E7%BD%91%E7%BB%9C%E6%97%A5%E5%BF%97)。

微信搜索“阮一峰的网络日志”或者扫描二维码，即可订阅。

![](https://cdn.beekka.com/blogimg/asset/202103/bg2021030402.jpg)

（完）
