# 科技爱好者周刊（第 185 期）：美国宪法拍卖，一个区块链案例

这里记录每周值得分享的科技内容，周五发布。

本杂志开源（GitHub: [ruanyf/weekly](https://github.com/ruanyf/weekly)），欢迎提交 issue，投稿或推荐科技内容。

周刊讨论区的帖子[《谁在招人？》](https://github.com/ruanyf/weekly/issues/2032)，提供大量程序员就业信息，欢迎访问或发布工作/实习岗位。

## 封面图

![](https://cdn.beekka.com/blogimg/asset/202111/bg2021112501.jpg)

正在迪拜举办的世博会，每天举行四场“空中钢琴”的表演。钢琴悬浮在空中，看上去很神奇。（[via](https://www.instagram.com/p/CWoB7c3PUPu/)）

## 本周话题：美国宪法拍卖，一个区块链案例

上周四（11月18日），美国纽约有一场[拍卖会](https://www.sothebys.com/en/digital-catalogues/the-constitution-of-the-united-states)，拍卖第一版印刷的美国宪法。[这件事](https://www.sohu.com/a/502141771_267106)很有意思，因为它跟区块链有关。

两百多年前，美国打赢了独立战争，13个殖民地的代表聚在一起开会，起草了宪法，决定建国。

![](https://cdn.beekka.com/blogimg/asset/202111/bg2021112118.jpg)

宪法通过后，一共印刷了500份，让代表们带回各州。留存到现在的有13份，其中只有一份在私人手里，这次拍卖的就是它。

![](https://cdn.beekka.com/blogimg/asset/202111/bg2021112119.jpg)

![](https://cdn.beekka.com/blogimg/asset/202111/bg2021112121.jpg)

一个区块链爱好者看到了这件事。晚上在群里聊天，他随口提了一句，有人就说：“我们集资去参加吧！”

大伙一听，觉得很好玩，通过区块链，向全世界的网友集资，去竞标一件古董。以前没人这么干过，就让我们试试看，证明技术有这个潜力。

说干就干，他们就在区块链上成立了一个组织，叫做“宪法 DAO”（ConstitutionDAO），专门负责这件事，相当于项目公司。

他们注册了域名 [ConstitutionDAO.com](https://www.constitutiondao.com/)，整个网站只有一个页面（下图），解释了整件事情。

![](https://cdn.beekka.com/blogimg/asset/202111/bg2021112122.jpg)

下面就是最关键的部分了，怎么才能收到钱呢？

令人意想不到的是，这反而是最容易的部分。专门的区块链工具，都已经开发出来了，在互联网上公开提供服务，可以直接拿来用。

集资服务叫做 [Juicebox](https://juicebox.money/)（下图）。它将每个项目的合约，写入区块链，并提供一个钱包接收资金。所有提供资金的人，会收到项目的代币，作为出资证明，享受相应的权益。

![](https://cdn.beekka.com/blogimg/asset/202111/bg2021112502.webp)

有了集资账户还不够，还必须让大家相信，项目组织者不会卷款跑路。大伙转账以后，组织者将这些钱转到他的个人钱包，那可怎么办？

事实上，互联网上已经有了“区块链保险箱”，叫做 [Gnosis Safe](https://gnosis-safe.io/)（下图）。资金只要转入它的账户，就取不出来了。如果想要取出来，你必须事先为账户指定多个管理员，并且设置一个取款门槛，比如，10个管理员必须同时有5个以上同意（数字签名），才能转出资金。“宪法 DAO”就用它保管资金，确保只有在大多数人同意时，才能使用资金。

![](https://cdn.beekka.com/blogimg/asset/202111/bg2021112503.webp)

猜猜看，最后一共募集了多少钱？

原定的集资目标是2000万美元。后来觉得可能不够，又提升到3500万美元。等到拍卖日截止时，他们一共收到了 11,601 个以太坊，每个市价大概是4000多美元，所以总金额大约是4700万美元。

拍卖日的竞价非常激烈，“宪法 DAO”和一个富豪相执不下。价格抬高到4000万美元时，“宪法 DAO”决定放弃了，因为高于这个价格，即使拍下了，剩余的资金不足以支付文物的保管费和运输费。

这份第一版印刷的《美国宪法》，最后的成交价是4300万美元。虽然“宪法 DAO”没有成功，但是依然创造了历史，证明基于区块链的项目集资是可行的。

只是因为几个网友在聊天室的突发奇想，就能在很短的时间内，募集了这么大的一笔钱，出资者遍布世界各地，素不相识。拍卖失败后，又在一天之内原路退回了所有资金（扣除手续费以后）。

这一切都是因为有了区块链。“宪法 DAO”的发起者都是普通人，无权无势，用到的工具都是现成的公开服务，不用自己开发。任何一个人都可以参考他们的做法，使用同样的工具，为自己的项目集资，我觉得这就是这件事的意义，展示了区块链带来的金融变革。有了这些工具，以后为项目集资、创立股份公司是一件多么方便的事情，成本多么低。

## 大厂算法题模拟笔试

大厂的招聘，尤其是笔试，算法题几乎肯定会出现。很多同学的求职准备，也是以算法为主。毕竟算法是编程的基石，只要有了正确的思路，通过不同语言来实现，反倒是简单的。

这里有一个活动消息。下周一（11月29日）晚上八点，有一场 **大厂算法题模拟笔试**，帮助大家温习巩固常见的算法题，体验一下真实的大厂笔试。它主要针对 Web 程序员，其他正在准备算法的同学也欢迎参加。

![](https://cdn.beekka.com/blogimg/asset/202111/bg2021112518.webp)

活动分成两个部分。上半场是模拟笔试，大家自己动手做一些精选的、大厂前端面试常见的核心算法题，笔试时间为1小时。

![](https://cdn.beekka.com/blogimg/asset/202111/bg2021112521.webp)

下半场是知名程序员 Winter 进行直播解题，对试题进行深度解析，从解题思路、代码规范等方面提供指导。大家有任何问题，都可以当场提问。

Winter 老师是前阿里P8高级技术专家，前手机淘宝前端负责人，工作职责之一就是招聘。他非常熟悉阿里的招聘流程和招聘标准。

![](https://cdn.beekka.com/blogimg/asset/202111/bg2021112520.webp)

这次是他难得的对外讲课，解析算法知识和算法面试的考察重点，相信对大家肯定会有帮助。模拟考试的优秀学员，还有机会获得 Winter 老师1对1面试指导。

![](https://cdn.beekka.com/blogimg/asset/202111/bg2021112520.jpg)

微信扫描上方二维码，或者点击[这个链接](https://wx.kaikeba.com/xiaoke/market/landing-page/v2/5Npu7PL4AcHvHVf2zWj?kol_ad_code=hSR3JHKqg6n2HDYZwe6)，就可以了解详情，并且 **0元** 报名，参加下周一的算法模拟笔试。

报名后，还会获赠一份补充的学习资料《前端必备算法和数据结构》。

## 科技动态

1、[乔纳森·艾维的最新设计](https://www.fastcompany.com/90693444/jony-ives-first-major-design-since-leaving-apple-isnt-what-youd-expect)

![](https://cdn.beekka.com/blogimg/asset/202111/bg2021110701.jpg)

乔纳森·艾维（Jony Ive）曾经是苹果公司的首席设计官，负责了许多极为畅销的苹果产品（比如 iPhone）的设计。2019年，他离开了苹果公司，创立了自己的设计公司 LoveFrom。

最近，他发布了离开苹果以后的第一个公开的设计作品。那是为英国环保基金会 Terra Carta 设计的一个印章，专门颁发给为环保做出贡献的公司。

![](https://cdn.beekka.com/blogimg/asset/202111/bg2021110702.jpg)

![](https://cdn.beekka.com/blogimg/asset/202111/bg2021110703.jpg)

这个印章覆盖着开花的蔓藤和鸟类、蜜蜂、蝴蝶、瓢虫，象征着大自然，让人感到乐观和生长。如果仔细观察，图案里面还有七个互相交织的圆环，提供了对称性。

![](https://cdn.beekka.com/blogimg/asset/202111/bg2021110704.jpg)

最不简单的是，由于环保的原因，这个印章不能使用贵重的金属制作，只能是纸质。设计师怎样才能让纸质印章看起来很贵重呢？艾维好像确实做到了。

![](https://cdn.beekka.com/blogimg/asset/202111/bg2021110705.jpg)

![](https://cdn.beekka.com/blogimg/asset/202111/bg2021110706.jpg)

2、[发射火箭的新方法](https://www.odditycentral.com/news/innovative-company-uses-kinetic-energy-to-throw-rockets-into-space.html)

![](https://cdn.beekka.com/blogimg/asset/202111/bg2021112402.jpg)

火箭的发射都是采用燃料点火、喷气推进，但是美国的创业公司 SpinLaunch 别出心裁，发明了一种新的发射方法。

他们建造了一个35米高的大型离心机，将火箭放在里面高速旋转，等达到一定速度以后，就将火箭向太空甩出去。今年10月的第一次实验已经取得了成功，将一个原型火箭发射到了万米高空。

![](https://cdn.beekka.com/blogimg/asset/202111/bg2021112403.jpg)

![](https://cdn.beekka.com/blogimg/asset/202111/bg2021112404.jpg)

这种新方式有两个最大优点：一是大大降低了发射成本，二是减轻了火箭携带的燃料重量，增加了有效负载。但是，它做不到完全不携带燃料，因为仅仅依靠动能，火箭的上升高度有限，到了高空以后，还是需要燃料推进。另外，这种方法也没法发射太大的火箭。

3、[墓碑二维码](https://www.phnompenhpost.com/lifestyle/salvadoran-resident-replaces-epitaphs-qr-codes)

![](https://cdn.beekka.com/blogimg/asset/202111/bg2021110709.jpg)

一个萨尔瓦多摄影记者为自己的姑妈，制作了一个墓碑二维码。扫墓的人们只要扫描这个二维码，就能看到死者生前的音容笑貌。

![](https://cdn.beekka.com/blogimg/asset/202111/bg2021110710.jpg)

![](https://cdn.beekka.com/blogimg/asset/202111/bg2021110711.jpg)

他计划推广这项服务，收费50至150美元，在墓碑上嵌入二维码，并提供一个网站空间，用来展示已故亲属的照片、视频和文字介绍。

4、[触觉手套](https://www.shenzhenware.com/articles/15348)

![](https://cdn.beekka.com/blogimg/asset/202111/bg2021112506.jpg)

最近改名为 Meta 的脸书公司，宣布了一款触觉手套的原型产品，可以在虚拟的 VR 空间感受真实的触觉。手套上面布满了传感器和气动的压力装置。

![](https://cdn.beekka.com/blogimg/asset/202111/bg2021112507.jpg)

用户戴上 VR 头盔，进入虚拟空间以后，当指尖触摸虚拟物体时，佩戴者可以感觉到手套给皮肤带来的压力，产生一种真实的触感。除了压力，手套还能产生纹理和振动的感受。

![](https://cdn.beekka.com/blogimg/asset/202111/bg2021112508.jpg)

两个用户甚至可以通过手套，感受到对方的握手。有了它，就会极大提升虚拟空间的真实感。

![](https://cdn.beekka.com/blogimg/asset/202111/bg2021112509.jpg)

5、[水幕屏障](https://www.laservision.com.au/portfolio/softstop/)

![](https://cdn.beekka.com/blogimg/asset/202111/bg2021111004.jpg)

澳大利亚悉尼海底隧道，最近部署了一个水幕屏障系统。这条隧道很长，有时会发生事故（比如撞车和火灾），需要一个醒目的提示，警告隧道里面的车辆，立即停止行驶。

新系统会喷出一个水幕，上面使用投影打出明亮的“停止”标记（STOP），根本不可能忽视。当然，车辆依然可以不顾警告，闯过水幕。

![](https://cdn.beekka.com/blogimg/asset/202111/bg2021111005.jpg)

## 文章

1、[5G 基站有多耗电？](http://finance.sina.com.cn/tech/csj/2021-02-26/doc-ikftpnny9891878.shtml)（中文）

![](https://cdn.beekka.com/blogimg/asset/202111/bg2021112114.jpg)

一个 5G 室外基站平均功耗 3.8KW 左右，是 4G 基站的3倍以上，电费约2.3－3万元/年。估计到2026年，5G 基站耗电量将上升至全社会用电量的2.1%，略高于数据中心（约2%）的耗电量水平。

2、[GTA 重制三部曲有多烂](https://www.yystv.cn/p/8533)（中文）

![](https://cdn.beekka.com/blogimg/asset/202111/bg2021111902.jpg)

R 星公司最近发布了老游戏《GTA 三部曲》（侠盗猎车手）的重制版，售价60美元，结果重制版居然比近20年前的原版还要差。本文让大家看看，一个重制的游戏软件可以差到什么地步。

3、[如何用 esbuild 打包 express 应用](https://devtails.medium.com/bundling-your-node-js-express-app-with-esbuild-5aecc36c5047)（英文）

本文是一篇教程，演示如何用 esbuild 打包 Node.js 应用。

4、[如何在 Windows 11 安装谷歌 Play 商店](https://www.windowscentral.com/how-run-google-play-store-android-apps-windows-11)（英文）

![](https://cdn.beekka.com/blogimg/asset/202111/bg2021110201.jpg)

Windows 11 可以运行安卓应用，但是不支持谷歌服务框架，也不能安装 Play 商店。本文介绍一种方法，可以安装 Play 商店（上图），从而让 Windows 11 可以运行几乎所有安卓应用。

5、[如何改善函数的可读性](https://www.tinyblog.dev/blog/2020-07-13-javascript-roro-pattern/)（英文）

只需要稍微改变参数的定义方式，就能极大提高 JavaScript 函数代码的可读性。

6、[用 curl 计时](https://susam.in/maze/timing-with-curl.html)（英文）

本文介绍了一种技巧，使用 curl 在命令行获取网站的响应时间。

7、[Tmux 入门指南](https://pragmaticpineapple.com/gentle-guide-to-get-started-with-tmux/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202108/bg2021082201.jpg)

本文讲解窗口管理器 Tmux 的简单用法，并配有动画。

8、[少了一个数据库索引，让我们多花了5000美元](https://briananglin.me/posts/spending-5k-to-learn-how-database-indexes-work/)（英文）

作者讲了一个亲身经历的案例，SQL 语句少建了一个索引，而数据库服务商按照读取的行数收费，导致费用暴增。

## 工具

1、[DuckDuckGo TTY](https://duckduckgo.com/tty/)

![](https://cdn.beekka.com/blogimg/asset/202110/bg2021102201.jpg)

搜索引擎 DuckDuckGo 官方的命令行搜索，比较特别的是，它是在网页上进行命令行搜索，这其实是一个网页应用。

2、[CodingFont](https://www.codingfont.com/)

![](https://cdn.beekka.com/blogimg/asset/202110/bg2021102903.jpg)

该网站可以比较不同编程字体的展示效果。

3、[Netlify Drop](https://app.netlify.com/drop)

![](https://cdn.beekka.com/blogimg/asset/202111/bg2021112510.jpg)

Netlify 最近发布的一个静态网页托管服务，只要把包含 HTML、CSS、JS 文件的目录拖到上传位置，Netlify 就会自动将这个目录发布为网站。这跟 Dropbox 的功能有点像。

4、[CSS Doodle](https://yuanchuan.dev/polygon-shapes)

![](https://cdn.beekka.com/blogimg/asset/202111/bg2021110103.jpg)

一个 Web Component 组件，可以使用 CSS 语法产生各种形状。

5、[Arco Design](https://arco.design/)

![](https://cdn.beekka.com/blogimg/asset/202111/bg2021112203.jpg)

字节跳动推出的企业级设计系统，提供丰富的原子组件，同时支持 React 组件库 和 Vue 组件库，可以进行各种定制。（[@PengJiyuan](https://github.com/ruanyf/weekly/issues/2070) 投稿）

6、[Remix](https://blog.remix.run/p/remix-preview)

![](https://cdn.beekka.com/blogimg/asset/202111/bg2021112401.jpg)

React Router 的作者发布的一个框架，在服务器运行 React 脚本，类似 next.js。

7、[PianoPlayer](https://github.com/marcomusy/pianoplayer)

![](https://cdn.beekka.com/blogimg/asset/202111/bg2021110104.jpg)

一个 Windows 软件，可以根据曲谱生成弹奏手势的 3D 动画。

8、[Google DNS](https://dns.google/)

![](https://cdn.beekka.com/blogimg/asset/202111/bg2021110108.jpg)

谷歌提供的 DNS 查询页面，可以查询某个域名或 IP 地址的 DNS 信息。

9、[树形目录列表生成器](https://devtool.tech/tree)

![](https://cdn.beekka.com/blogimg/asset/202111/bg2021112202.jpg)

一个网页小工具，生成文本的树形目录结构，方便将目录结构插入 Markdown 文章。（[@shfshanyue](https://github.com/ruanyf/weekly/issues/2066) 投稿）

10、[HTTP Server Online](https://github.com/EtherDream/http-server-online)

![](https://cdn.beekka.com/blogimg/asset/202111/bg2021110109.jpg)

一个纯前端的静态资源服务器，可以在前端展示本地目录的内容。

## 资源

1、[DeepCourse](https://arthurdouillard.com/deepcourse/)

![](https://cdn.beekka.com/blogimg/asset/202109/bg2021090811.jpg)

一个深度学习课程，所有章节以路线图的形式呈现，可以一个个节点按顺序学习。点击一个节点，就可以学习相应的知识点。

2、[OKR.com](https://www.okr.com/)

![](https://cdn.beekka.com/blogimg/asset/202111/bg2021112324.jpg)

OKR 是一种绩效目标管理方法，很多互联网公司采用这种方法。该网站收集了关于 OKR 的各种资料。（[@xcuYao](https://www.okr.com/) 投稿）

3、[Archive.org Serendipity](https://www.locserendipity.com/PushPlay.html)

“互联网档案馆”收集了很多早期的黑胶唱片音乐作品，都已经过了版权保护期。这个网站可以收听这些音乐，按一下按钮，就会随机播放一段音乐。

4、[免费图片资源](https://admcpr.com/where-to-find-royalty-free-images/)

![](https://cdn.beekka.com/blogimg/asset/202110/bg2021101304.jpg)

这篇文章列出了常用的免费图片网站，可以获取各种能够自由使用的照片和插图。

5、[十年前](https://neal.fun/ten-years-ago/)

![](https://cdn.beekka.com/blogimg/asset/202109/bg2021090805.jpg)

这个网站可以查看，十年前的同一天，美国的十几个著名网站是什么样子。

## 图片

1、[古人活在今天的样子](https://mossandfog.com/artist-imagines-what-famous-historical-figures-would-look-like-today/)

一个美国艺术家想知道，古人如果活在今天会是什么样子。她就用今天的服装和风格，重新绘制了古人的画像。

达芬奇

![](https://cdn.beekka.com/blogimg/asset/202109/bg2021091201.jpg)

戴珍珠耳环的少女

![](https://cdn.beekka.com/blogimg/asset/202109/bg2021091202.jpg)

蒙娜丽莎

![](https://cdn.beekka.com/blogimg/asset/202109/bg2021091203.jpg)

兵马俑

![](https://cdn.beekka.com/blogimg/asset/202109/bg2021091204.jpg)

2、[英国议会的会议厅](https://www.notboring.co/p/the-interface-phase)

大多数国家的议会厅，都是大剧场设计，前面是主席台，后面是座席，比如美国国会。

![](https://cdn.beekka.com/blogimg/asset/202109/bg2021091406.jpg)

但是，英国议会与众不同，分成面对面的两个区，两边的议员可以当面对话。

![](https://cdn.beekka.com/blogimg/asset/202109/bg2021091407.jpg)

第二次世界大战以后，英国首相丘吉尔解释为什么要采取这种形状。因为这可以帮助辩论，使得人们自然分成两方，你要么与我们站在一起，要么在对面反对我们，没有留下任何模棱两可的空间。

![](https://cdn.beekka.com/blogimg/asset/202109/bg2021091408.jpg)

## 文摘

1、[蓝牙的来历](https://www.thelocal.dk/20210303/how-a-viking-king-inspired-one-of-our-best-known-modern-technologies/)

蓝牙（bluetooth）是一种短距离、低功耗无线通信协议。这个协议的名字很奇怪，它是怎么来的呢？

![](https://cdn.beekka.com/blogimg/asset/202109/bg2021090712.jpg)

1998年，加拿大举行了一次国际会议，讨论如何制定一个无线通信的国际标准。

当时，各家公司都有自己的无线通信协议，怎样才能推出一个统一的国际标准，成了争论不休的问题。

爱立信公司的瑞典工程师 Sven Mattisson 和英特尔公司的美国工程师 Jim Kardach，都是会议的参加者。

一天会议结束后，他们一起去了多伦多的一间酒吧，喝酒闲聊，谈到了历史。美国工程师要求瑞典工程师，给他讲讲北欧的历史。后者正好在读一本北欧历史小说，就向前者推荐了这本书。

小说的一个主要人物是，公元10世纪的丹麦国王哈拉尔德·戈姆森，他有个绰号叫做“蓝牙”。这个绰号的来历不明，有人认为，国王有一颗牙齿坏了，传说中坏牙齿的颜色发蓝，因而得名。

![](https://cdn.beekka.com/blogimg/asset/202111/bg2021112526.jpg)

瑞典工程师接着说，这个国王统一了丹麦。美国工程师听到这里，灵机一动，提议把将要制定的国际标准的代号定为“蓝牙”，因为新标准会统一其它标准。与会者知道以后，表示同意这个提议。

最终，这个低成本、低功耗的国际通信标准，就被叫做“蓝牙”，在1998年5月推出，电子设备可以使用它进行短距离无线通信。

世界第一台蓝牙设备在1999年上市。当时，蓝牙还只是临时的代号，但是人们想不出更合适的名字，于是它变成了永久名字。

## 言论

1、

2016年，WhatsApp 的用户超过10亿，但是只有50个工程师。每个小团队由1到3名工程师组成，拥有很大的自主权。

--[《WhatsApp 如何在只有50名工程师的情况下扩展到10亿用户》](https://www.quastor.org/p/how-whatsapp-scaled-to-1-billion)

2、

如果你收到我的邮件，只允许三种操作，否则就要立即辞职。

第一种，回邮给我，解释为什么我说错了；

第二种，如果有歧义，要求我进一步澄清；

第三种，按照我说的去做。

-- [马斯克](https://www.cnbc.com/2021/11/19/elon-musk-emails-at-tesla-in-october-2021-music-direct-orders.html)今年10月发给所有特斯拉经理的内部邮件（[@jwenjian](https://github.com/ruanyf/weekly/issues/2080) 投稿）

3、

5G 手机需要更多的天线和更大的电池，所以手机尺寸不会变小，制造小手机将很困难。

-- [Hacker News 读者](https://news.ycombinator.com/item?id=29288587)

4、

八进制表示法以0开头，这是一种误导人类和软件的好方法，是当代没有任何生产力或用处的事情之一，只会使事情复杂化而没有任何好处。

-- [Hacker News 读者](https://news.ycombinator.com/item?id=29053619)

5、

美国人喜欢轻资产的高科技业，互联网巨头 FAANG 都是轻资产重设计的模式，凡是要盖厂房搞制造就外包，让亚洲人穷忙又赚不了太多的钱，这才是美国人想要的产业模式。

-- Mobile01 读者

## 历史上的本周

2020年（第 134 期）：[未来的游戏业比现在大100倍](https://www.ruanyifeng.com/blog/2020/11/weekly-issue-134.html)

2019年（第 82 期）：[就业要选发展最快的行业](https://www.ruanyifeng.com/blog/2019/11/weekly-issue-82.html)

2018年（第 31 期）：[程序员的退休信号](https://www.ruanyifeng.com/blog/2018/11/weekly-issue-31.html)

## 订阅

这个周刊每周五发布，同步更新在[阮一峰的网络日志](http://www.ruanyifeng.com/blog)和[微信公众号](http://weixin.sogou.com/weixin?query=%E9%98%AE%E4%B8%80%E5%B3%B0%E7%9A%84%E7%BD%91%E7%BB%9C%E6%97%A5%E5%BF%97)。

微信搜索“阮一峰的网络日志”或者扫描二维码，即可订阅。

![](https://cdn.beekka.com/blogimg/asset/202103/bg2021030402.jpg)

（完）
