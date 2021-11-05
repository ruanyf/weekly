# 科技爱好者周刊（第 181 期）：移动支付应该怎么设计？

这里记录每周值得分享的科技内容，周五发布。

本杂志开源（GitHub: [ruanyf/weekly](https://github.com/ruanyf/weekly)），欢迎提交 issue，投稿或推荐科技内容。

周刊讨论区的帖子[《谁在招人？》](https://github.com/ruanyf/weekly/issues/1980)，提供大量程序员就业信息，欢迎访问或发布工作/实习岗位。

## 封面图

![](https://cdn.beekka.com/blogimg/asset/202110/bg2021102402.jpg)

日本东京有一家专门生产电梯按钮的公司，该公司把生产过的1000多种电梯按钮，做成了一面展示墙，按上去每个都会亮。孩子们和大人都很喜欢。（[via](https://www.odditycentral.com/travel/pressing-1000-buttons-is-the-perfect-way-to-complete-an-elevator-button-factory-tour.html)）

## 本周话题：移动支付应该怎么设计？

支付宝和微信支付，垄断了中国的移动支付，两家合计的市场份额超过90%。

虽然它们用起来非常方便，可以说完美解决了手机付款，但是，作为整个国家移动支付的解决方案，我总觉得，现在的状况是有问题的。

![](https://cdn.beekka.com/blogimg/asset/202110/bg2021102803.jpg)

**支付宝和微信支付的最大问题，就是把用户锁在它们的体系里面。** 支付体系本应该是开放的，只要有手机就能支付，但是现在你首先必须是支付宝和微信的会员，然后才能支付。

理想情况下，在银行开户后就应该可以付款，但是现在多了一个步骤，就是必须将银行账户与支付宝和微信绑定。没有这一步，用户实际上无法手机支付。

此外，至少还有其他三个缺点。

（1）二维码不通用，只能用自家的应用打开，导致商户必须张贴多个二维码。

（2）不能互相转账，支付宝不能转给微信，反之亦然。同时，也不能转给他人的银行账户，只能先提款到自己的开户行。

（3）余额提现要收手续费，虽然这可能不是支付宝和微信的问题。

那么，有没有更好的移动支付方案呢？答案是有的，有一个国家已经做到了。

![](https://cdn.beekka.com/blogimg/asset/202110/bg2021102906.jpg)

前不久，我读到彭博社的[一篇报道](https://www.bloomberg.com/news/articles/2021-10-06/pix-mobile-payment-how-brazil-s-central-bank-launched-platform)，惊奇地发现，巴西有了一个更好的移动支付系统，胜过支付宝和微信支付。

2020年11月，巴西政府为了解决手机支付问题，推出了 Pix 系统。

它的设计很简单。首先，你到银行开户时，选定一个或多个个人标识，可以是手机号码、电子邮件、银行卡号、用户名等等，只要能够唯一识别你即可。然后，你下载政府开发的 App，输入你的个人标识，就会得到一个二维码，用来收款和付款。Pix 系统会自动把支付请求转到你的开户行或第三方支付机构，由它们来实际处理。

![](https://cdn.beekka.com/blogimg/asset/202110/bg2021102805.jpg)

短短11个月内，Pix 取得了疯狂的成功，用户达到1.1亿人（巴西全国人口2.1亿）。今年九月份，这个系统的支付金额大约为890亿美元，相当于每个用户支付了800美元，最高一天发生了超过4000万笔交易。

我觉得，这个系统有很多优点，特别适合中国的需要。

它最大的优点就是开放。（1）任何支付机构都可以加入这个系统，而不是被一两家大机构把持。（2）体系内所有支付机构可以互相转款，不存在市场割裂。（3）二维码是全国统一的，任何客户端都可以读取，任何人都可以开发客户端。

最后，对于用户来说，它的转账是免费的，不存在手续费。政府向接入这个系统的支付机构收取年费，弥补运作费用。

我觉得，它比支付宝和微信支付都优越。我们国家真的应该学习，政府出面建设一个全国统一的移动支付体系。这会大大方便资金流动，带动经济发展和人民生活水平的提高，实在是一件好处无穷的事情。

## KubeSphere 介绍

过去十年，软件开发的最大变化是什么？

答案大概就是 Docker 容器的出现。以前的软件都部署在物理机或虚拟机，现在部署在一个个容器，可以快速扩缩容。

![](https://cdn.beekka.com/blogimg/asset/202109/bg2021092101.jpg)

你可能听说过 K8s，它是谷歌公司的开源软件 Kubernetes（K 和 s 之间有8个字母），作用就是调度和管理容器。

Docker 的标志非常像一艘集装箱船，K8s 则像是一个控制轮船的舵盘，这就是两者的关系。想象一下，成百上千个 Docker 容器分布在不同的公有云、私有云以及边缘节点，整合成一个云原生应用，在同一个平台进行统一调度和运维，这就是 K8s 的作用。

K8s 的最大问题就是太复杂，云生态技术栈和工具集十分庞大，它的开发、管理和运维都是专门工种。个人和中小企业如果缺少这方面的专家，是不容易搞定的。

为了解决这个问题，业界有很多基于 K8s 的发行版。它们把 K8s 作为内核，在外层封装一个易用的交互界面，集成了很多周边工具，大大降低了上手门槛，就好像 Ubuntu 和 Linux 内核的关系。

![](https://cdn.beekka.com/blogimg/asset/202110/bg2021102302.webp)

本周向大家介绍一个开源的国产 K8s 管理平台：[KubeSphere](https://github.com/kubesphere/kubesphere)。

它的最大特点就是易用和高度产品化，有一个体验非常优秀的控制台，让不熟悉容器的用户以非常低的成本上手，快速使用各种高级功能。整个操作过程都是向导式图形化的 UI。

下面是一段 2 分钟的演示视频，大家可以感受一下 KubeSphere 容器平台丰富的功能，以及通过 KubeSphere 操作 K8s 的简单便捷。

<iframe frameborder="0"
src="https://v.qq.com/txp/iframe/player.html?vid=h3303juxyex"
allowFullScreen="true" width="600" height="400"></iframe>

在定位上，KubeSphere 针对企业级应用设计，注重安全性和稳定性，提供秒级监控与告警通知，内置日志、审计、事件检索，还提供计量计费，可实现 K8s 基础设施的可度量运营。它还提供多集群和多云管理，帮助企业实现业务高可用，做到自动化运维。

它也充分考虑了国情，兼容各种既有的企业 IT 管理流程，可平滑整合到现有 IT 体系，让企业不用改原来的代码，就能把应用直接部署到容器平台。

![](https://cdn.beekka.com/blogimg/asset/202110/bg2021102304.webp)

对于软件开发者和运维人员，KubeSphere 内置了 Java、Nodejs 等常用语言模板，集成了常见的开源项目，提供了 DevOps、微服务灰度发布、链路追踪、应用生命周期管理、边缘节点管理等功能，实现了代码提交、应用发布、应用运维的一站式管理。你只需提交代码，后面的流程 KubeSphere 都会自动帮你搞定。

目前，KubeSphere 的主仓库在 [GitHub](https://github.com/kubesphere/kubesphere) 已经有 7000 多个 Star，社区有超过 250 位贡献者，全球下载超过 70w 次，近一半以上的用户来自海外，国内用户有新浪、微众银行、中通、中国银行等著名企业。这里有一篇来自问答社区 SegmentFault 的[用户使用经验分享](https://mp.weixin.qq.com/s/NiatJMfRBvNrcvd2f0TwMg)，大家可以参考。

![](https://cdn.beekka.com/blogimg/asset/202110/bg2021102303.webp)

如果你们公司想尝试 K8s，或者你个人想学习 K8s，建议可以从 KubeSphere 入手。它可以快速[从零搭建 K8s 集群](https://github.com/kubesphere/kubekey#quick-start)，也可以只用两条命令，就部署到现有的 K8s 之上。官方有[线上 Demo](https://demo.kubesphere.io/login)（账号：demo1 / Demo123），以及友好的[中文文档](https://kubesphere.com.cn/docs/)、[云原生视频教程](https://www.bilibili.com/video/BV15g411F7pj) 和[开发者社区](https://kubesphere.com.cn/forum/)。

## 科技动态

1、[最小的飞行器](https://www.sciencealert.com/the-smallest-flying-device-ever-made-by-humans-is-like-a-grain-of-sand)

![](https://cdn.beekka.com/blogimg/asset/202109/bg2021092406.jpg)

美国西北大学的科学家研发出了世界最小的飞行器，跟一粒沙子的大小差不多（下图）。它自身不能飞，全靠风力带动。

![](https://cdn.beekka.com/blogimg/asset/202109/bg2021092407.jpg)

它基本上就是一个超小型电路片，包含了传感器、电源、无线天线，以及数据存储器。对它轻轻一吹，就会四处飘扬，可以用来监测环境，比如空气有没有污染物的泄露。

2、[手机小键盘](https://ianthehenry.com/posts/peggi/)

![](https://cdn.beekka.com/blogimg/asset/202109/bg2021092410.jpg)

国外的一个硬件爱好者制作了八个键的小键盘，贴在手机背面，作为输入设备。

它的每个键都可以自定义，不同按键组合还可以映射26个字母和10个数字。由于可以不看键盘，只按照肌肉记忆按键，所以用起来非常方便。

![](https://cdn.beekka.com/blogimg/asset/202109/bg2021092411.jpg)

缺点是，它只适合横屏时使用，不适应竖屏时使用。

![](https://cdn.beekka.com/blogimg/asset/202109/bg2021092412.jpg)

3、[亚洲最大蛋鸡场](https://finance.sina.com.cn/jjxw/2021-09-23/doc-iktzscyx5863357.shtml)

![](https://cdn.beekka.com/blogimg/asset/202109/bg2021092419.jpg)

![](https://cdn.beekka.com/blogimg/asset/202109/bg2021092420.jpg)

今年9月份，亚洲规模最大的蛋鸡场在上海崇明岛投产，产出了头窝鸡蛋。这个蛋鸡场可以养殖300万只母鸡，每年产出8亿枚鸡蛋，平均每天200万枚鸡蛋。

母鸡会先在青年鸡场饲养105天后，然后再转到蛋鸡场，工作72周，然后再退休。蛋鸡场会每月轮换一批母鸡。

![](https://cdn.beekka.com/blogimg/asset/202109/bg2021092421.jpg)

4、[机器看门狗](https://www.cnet.com/roadshow/news/boston-dynamics-spot-robotic-watchdog-hyundai/)

![](https://cdn.beekka.com/blogimg/asset/202109/bg2021092417.jpg)

韩国现代汽车向波士顿动力公司，采购了一些机器狗，在工厂里面巡逻。这种机器狗带有热像仪和 3D 激光雷达，白天可以识别异常发烫的设备，及时报警，防止发生火灾。

到了晚上，它就变成厂区里面游荡的看门狗，用于发现哪扇门没有锁好、哪间屋子没有关灯。但是，它不会去追逐入侵者，程序没有做这方面的设定。

![](https://cdn.beekka.com/blogimg/asset/202109/bg2021092418.jpg)

相比人类，机器人（或机器狗）在门房、巡夜这些方面，有着巨大的优势，功能更强、成本更低。如果发现异常，它只要能及时报警就可以了。不难想象，再过几年，你遇到的安保人员可能都是机器人。

5、[最古老的手印](http://www.uua.cn/show-7-12334-1.html)

![](https://cdn.beekka.com/blogimg/asset/202109/bg2021092422.jpg)

考古学家确认，在拉萨市郊区的邱桑村发现的人类手印，可能是迄今最古老的人类岩石活动的遗迹，距今16.9万年至22.6万年之间。

![](https://cdn.beekka.com/blogimg/asset/202109/bg2021092423.jpg)

当地有很多地热温泉，手印就保留在一块碳酸岩之中。考古学家推测，大约20万年前，泉口附近有很多软泥形式的碳酸钙，两个孩子在嬉戏。

![](https://cdn.beekka.com/blogimg/asset/202109/bg2021092424.jpg)

他们觉得留下自己的印记非常有趣，先按下一个脚印，然后再把手印压在上面。以后，泉水改道或季节性干涸，软泥迅速脱水并固结成岩，一直保存到了今天。

6、[居家办公的监控摄像头](https://9to5mac.com/2021/08/09/apple-call-center-workers-surveillance/)

![](https://cdn.beekka.com/blogimg/asset/202108/bg2021081101.jpg)

一家跨国的客服外包公司的员工，向新闻媒体投诉，公司允许居家办公的条件是，必须安装由公司提供的监控摄像头，在办公时间监控他的一举一动和所有语音对话。如果不同意安装，公司就不许在家办公。为了生计，他只能同意。

这种做法以后可能会成为常态，公司使用强制监控，保证员工在家也能专心投入工作。

## 文章

1、[Windows 11 运行安卓应用是什么体验？](https://sspai.com/post/69446)（中文）

![](https://cdn.beekka.com/blogimg/asset/202110/bg2021102203.jpg)

Windows 11 可以运行安卓应用，本文给出了详细的操作步骤，作者也总结了自己的使用体验。

2、[杭州西站的设计](https://mp.weixin.qq.com/s/jSeAG_YoTEJshhTQZLHf1Q)（中文）

![](https://cdn.beekka.com/blogimg/asset/202110/bg2021102401.jpg)

杭州西站是为2022年亚运会新建的高铁站，包含了很多创新。建筑师把高铁站台放到了楼上，楼下是正常的城市交通，避免了火车站和铁轨将城市一分为二的囧境。

3、[中芯国际的超级芯片工厂（GigaFab）](https://www.anandtech.com/show/16931/china-smic-build-gigafab)（英文）

![](https://cdn.beekka.com/blogimg/asset/202109/bg2021092111.jpg)

中芯国际最近宣布，计划在上海临港建造中国第一家超级芯片工厂（GigaFab，月产超过10万片晶圆的工厂）。本文是对这件事的分析。

4、[vscode.dev](https://code.visualstudio.com/blogs/2021/10/20/vscode-dev) 发布（英文）

![](https://cdn.beekka.com/blogimg/asset/202110/bg2021102909.jpg)

VS Code 正式发布官方的浏览器版，从此可以在浏览器里面使用这个编辑器。它跟另一个网站`github.dev`很接近，唯一的区别是还支持其他的代码托管服务。（[@StevenNin](https://github.com/ruanyf/weekly/issues/2012) 投稿）

5、[怎么为网站申请 ISSN 号码？](https://shkspr.mobi/blog/2021/09/how-to-add-issn-metadata-to-a-web-page/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202109/bg2021092006.jpg)

作者介绍怎么为自己的个人网站，申请了一个 ISSN（国际标准期刊号），便于被学术期刊引用。

6、[你的网站是否有 Security.txt 文件？](https://krebsonsecurity.com/2021/09/does-your-organization-have-a-security-txt-file/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202109/bg2021092213.jpg)

越来越多的大公司开始在服务器放置“Security.txt”文件，这是一项新提议的标准，该文件用来描述网站的安全政策和漏洞联系方式。

7、[不要只构建一套通用 API](https://max.engineer/server-informed-ui)（英文）

作者提出，后端应该提供两套 API，一套是外部使用的通用 API，服务特定的数据，另一套是自家使用的应用 API，服务特定的页面。

8、[我如何组装 Linux 游戏电脑](https://boilingsteam.com/how-i-built-my-new-linux-gaming-desktop-in-2021-with-amd-cpugpu-and-gnu-guix/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202109/bg2021092408.jpg)

作者介绍自己如何选择各种组件，组装了一台专用于游戏的 Linux 桌面电脑。

![](https://cdn.beekka.com/blogimg/asset/202109/bg2021092409.jpg)

9、[网页的发呆检测 API](https://web.dev/idle-detection/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202109/bg2021092414.jpg)

Chrome 浏览器现在原生提供`IdleDetector`对象，在它上面部署了发呆检测 API，可以用脚本获知用户是否正在发呆（即没有任何操作）。

## 工具

1、[EBS Design](https://github.com/ebs-integrator/ebs-design)

![](https://cdn.beekka.com/blogimg/asset/202109/bg2021092112.jpg)

一个 React 组件库，设计很有现代感，目前还在积极开发中。

2、[bunny.net](https://bunny.net/)

![](https://cdn.beekka.com/blogimg/asset/202109/bg2021091812.jpg)

一个收费的 CDN 服务，看上去不错，可以当作 Cloudflare 的后备。

3、[context-note](https://github.com/betterRunner/context-note)

![](https://cdn.beekka.com/blogimg/asset/202110/bg2021102406.jpg)

一个 Chrome 浏览器插件，可以对网页做笔记，下次打开该网页，笔记就会显示，并提供富文本编辑器和笔记标签。（[@betterRunner](https://github.com/ruanyf/weekly/issues/2013) 投稿）

4、[APIAuto](https://github.com/TommyLemon/APIAuto)

![](https://cdn.beekka.com/blogimg/asset/202110/bg2021102404.jpg)

腾讯公司内部的开源项目，一个强大的 HTTP 接口测试工具，可以机器学习零代码对接口测试。（[@TommyLemon](https://github.com/ruanyf/weekly/issues/2010) 投稿）

4、[3D 管道屏保](https://1j01.github.io/pipes/)

![](https://cdn.beekka.com/blogimg/asset/202109/bg2021092004.jpg)

这个开源项目将 Windows 的 3D 管道屏保，搬到了网页上。

5、[Composable](https://www.composable.art/)

![](https://cdn.beekka.com/blogimg/asset/202109/bg2021092107.jpg)

一个网页版的矢量图作图工具。

6、[lists.sr.ht](https://lists.sr.ht/)

一个免费的邮件列表服务，可以用来架设自己的邮件列表。

7、[Kill the Newsletter!](https://github.com/leafac/kill-the-newsletter)

![](https://cdn.beekka.com/blogimg/asset/202109/bg2021091814.jpg)

一个开源服务，可以将新闻邮件，转为 RSS feed 输出。用户可以自己架设服务，也可以试用作者架设的 [demo](https://kill-the-newsletter.com/)。

8、[一行代码的旋律生成](http://www.olegkikin.com/audio/audio.html)

![](https://cdn.beekka.com/blogimg/asset/202109/bg2021091803.jpg)

一个有点神奇的演示，只需要一行 C 代码，就能生成一段音乐旋律。这里是[介绍文章](https://countercomplex.blogspot.com/2011/10/algorithmic-symphonies-from-one-line-of.html)。

9、[AirGuard](https://github.com/seemoo-lab/AirGuard)

![](https://cdn.beekka.com/blogimg/asset/202109/bg2021091917.jpg)

一个安卓 App，用来检查是否有 AirTag 在追踪你。

10、[Black](https://black.vercel.app/)

![](https://cdn.beekka.com/blogimg/asset/202109/bg2021092215.jpg)

一个 Python 代码格式化的库，可以自动对 Python 代码进行格式美化。

## 资源

1、[10 个响应式网页的开发测试工具](https://www.webfx.com/blog/web-design/responsive-design-testing-tools/)

![](https://cdn.beekka.com/blogimg/asset/202108/bg2021080508.jpg)

本文介绍10个小工具，用来测试响应式网页，在不同大小屏幕的显示效果。

2、[树莓派家用服务器搭建指南](https://github.com/zhaoolee/pi)

树莓派系列教程。作者买了一台低配云服务器获得固定 ip 地址，通过 frp 内网穿透，把家里的树莓派 4B 变成了一个真正的云服务器，可以在公网访问。（[@zhaoolee](https://github.com/ruanyf/weekly/issues/2008) 投稿）

3、[英特尔处理器博物馆](https://www.mynikko.com/CPU/)

![](https://cdn.beekka.com/blogimg/asset/202110/bg2021102403.jpg)

一个爱好者的个人中文网站，图文并茂地介绍了自己收藏的从 3101 到 Pentium M 的多种英特尔处理器芯片资料。（[@TransparentLC](https://github.com/ruanyf/weekly/issues/2009) 投稿）

4、[Git 飞行规则](https://github.com/k88hudson/git-flight-rules/blob/master/README_zh-CN.md)

一个 Git FAQ 的中文翻译，收集各种 Git 操作出现问题后的应对措施。（[@xcuYao](https://github.com/ruanyf/weekly/issues/2015) 投稿）

5、[去中心化图书馆](https://libgen.fun/dweb.html)

![](https://cdn.beekka.com/blogimg/asset/202109/bg2021092005.jpg)

Libgen 电子书图书馆项目宣布，该项目已经完全做到了去中心化，搬到了 IPFS 上面，网页文件、数据库、甚至域名都不是集中托管的。它给出了去中心化图书馆的几个域名。

## 图片

1、

[英国](https://www.railadvent.co.uk/2021/06/groundbreaking-new-bridge-design-could-transform-rail-crossings-across-the-uk.html)正在尝试一种新型的人行天桥，架设在铁路上方。这种桥的材料是轻质纤维聚合物，重量很轻，形状是精心计算过的，最大化节省材料，可以快速、低成本架设。

![](https://cdn.beekka.com/blogimg/asset/202106/bg2021062904.jpg)

![](https://cdn.beekka.com/blogimg/asset/202106/bg2021062905.jpg)

2、[Dissection Font](http://erikdemaine.org/fonts/dissect/)

计算机科学大师高纳德（Donald Knuth）曾经参与发明一种“解剖字体”（Dissection Font）。所有的字符都可以切成碎片，拼成一个 6 x 6 的正方形。

![](https://cdn.beekka.com/blogimg/asset/202106/bg2021062808.jpg)

![](https://cdn.beekka.com/blogimg/asset/202106/bg2021062809.jpg)

3、[海平面上升100米](https://ahstat.github.io/Topography/)

如果海平面上升100米，世界地图会变成下面这样。

![](https://cdn.beekka.com/blogimg/asset/202110/bg2021100318.jpg)

如果海平面上升1000米，世界地图会变成下面这样。

![](https://cdn.beekka.com/blogimg/asset/202110/bg2021100319.jpg)

## 文摘

1、[直流电的回归](https://www.lowtechmagazine.com/2016/04/slow-electricity-the-return-of-low-voltage-dc-power.html)

**（1）交流电为什么获胜？**

19世纪末，人类开始使用电力。当时有两派，一派主张直流电，另一派主张交流电。

最后，交流电获胜，主要原因是交流电长途传输的效率更高，直流电做不到长途传输。

![](https://cdn.beekka.com/blogimg/asset/202110/bg2021102801.jpg)

当时，交流电已经可以做到高电压，但是直流电的电压一直做不上去。这导致大功率传输时，直流电就会产生很大的电流（因为 电压 * 电流 = 功率）。另一方面，电流通过导体产生的热量，与电流的平方成正比。这意味着，直流电的长距离传输会因为电流较大，而产生很大的热量损耗。交流电由于电压可以做得很高，就没有这个问题。

![](https://cdn.beekka.com/blogimg/asset/202110/bg2021102908.jpg)

所以，高电压是长距离电力传输的关键，这就是交流电获胜的根本原因。直流电直到1960年代才有办法做到高电压，但是已经太晚了。目前，直流电的应用都局限在低压短距离的使用，传输距离往往在几米之内，最长不超过1公里。

**（2）两个新趋势**

但是，最近出现的两个趋势，导致人们重新对直流电发生了兴趣。

第一个趋势是太阳能发电的兴起，使得发电变成了分布式，而不是集中式。哪里需要能源，哪里就放置太阳能板，这种场景下不需要长距离电力传输。此外，太阳能发电产生的是直流电，电池释放的也是直流电。

第二个趋势是越来越多的电器内部使用直流电，比如所有电子设备（包括计算机和手机）、固态照明 （LED）、平板电视、微波炉等等。专家预计，未来20年内，多达50%的家庭负载消耗的是直流电。

**（3）电流转换的损失**

如果家庭使用的是太阳能发电，就要进行两次电流转换。

首先，光伏板的直流电通过逆变器转换为交流电，传输进入家庭。然后，交流电再次通过逆变器转换为直流电，才能被电脑、LED 和微波炉等直流设备使用。每一次电流转换，都会发生能量损失，最严重情况下，会损失掉20%~30%。

如果带有光伏板的建筑直接采用直流供电，就可以避免这种电流转换损失。

**（4）直流供电的好处**

首先，一旦直流供电，就没有了电流转换的能量损耗，所需的光伏板变少了，存储能量的电池系统也可以变小。

其次，逆变器是一种昂贵的设备，而且寿命短于光伏板。不使用逆变器，可以节省不少钱。

再次，目前的很多直流电气设备，内部带有交流电到直流电的转换，去掉这个部分，可以使这些设备更简单、更便宜、更可靠、能耗更低。

最后，直流电的电压低。很多直流电器不超过24伏，没有电击或火灾危险，使得电工可以使用相对简单的接线，无需接地，也无需担心触电。这进一步节省了成本。

**（5）直流供电的缺点**

低压直流电的最大问题是无法长距离传输。

前面说过，能量损失等于电流的平方乘以电阻。一根普通的铜线，在10米的距离内以12V的电压传输，100瓦的功率对应的电流是8.33A，会产生3%的能量损失，这可以接受。但是，电线长度为 50 米时，能量损失变为16%，长度为 100 米时，能量损失增加到了32%。这足以抵消直流电的效率优势。

由于线路损耗很高，大功率电器也很难使用直流电。如果在12V直流电网上运行 1,000 瓦的微波炉，在电线长度仅为1米的情况下，能量损失高达16%，在电缆长度为3米的情况下，能量损失会增加到47%。

所以，低压直流电网不适用于洗衣机、洗碗机、吸尘器、电饭锅、电烤箱或热水锅炉等大功率电力设备。另外，有些电器（比如冰箱）本身的功率比微波炉小，但是它每天 24 小时运行，长时间下来也会导致巨大的线路损耗。

同样的，线路损耗也限制了多台低功率设备使用同一根供电线缆。如果一根12V的电缆长度为 12 米，并且我们希望将线路损耗保持在10%以下，那么所有电器的总功率将限制在大约150瓦。这意味着，这根线路只能同时使用两台笔记本电脑（每台 20 瓦的功率）、一台直流电冰箱（45 瓦）、五个8瓦的 LED 灯（总共 40 瓦），还留下25瓦可以支持其它较小的设备。

**（6）解决方案**

有几种方法可以避免低压直流电的线路损耗。

第一种方法是尽量减少配电电缆长度。比如，厨房、客厅、卧室这些用电最多的地方，尽量搬到屋顶光伏板的下方，减少电缆长度。

第二种方法是每一个或两个房间，设置一个独立的太阳能发电系统。

第三种方法是选择更高的电压：24V 或 48V 而不是 12V。但是，目前市场上的大多数低压直流电器都在12V下运行，而且更高的电压（高于24V）消除了直流系统的安全优势。美国有很多数据中心、办公室、住宅建筑使用的直流电系统升压到了 380V，这就需要跟 110V 或 220V 交流电一样严格的安全措施了。

第四种方法是使用两套供电系统，同时供应交流电和直流电。低功率设备使用直流电网，比如 LED 灯（< 10 瓦）、笔记本电脑（< 20 瓦）、电视（30-90 瓦）和冰箱（<50 瓦），大功率设备使用单独的交流电网。但是这样做，直流电带来的节能和成本降低效益，就微乎其微了，很容易被抵消。

## 言论

1、

当我 80 岁时，我不会后悔尝试过的事情，比如我尝试了互联网创业，就算失败了，我也不后悔。我后悔的是那些我想尝试却没做的事情，它们每天困扰着我，如果我当时尝试了，我的人生会怎样。

-- [《让遗憾最小化》](http://www.samvitjain.com/blog/regret/)

2、

我在大学里得到的最好建议是：“找到最好的老师，上他们所有的课，不管是什么课。”

这个建议也适用于互联网。

-- David Perell

3、

“英雄项目”指的是80%以上的贡献来自20%的开发人员的项目。通过对 1000 多个开源 GitHub 项目的分析，发现大多数开源项目都是英雄项目。

--[《为什么软件项目需要英雄》](https://neverworkintheory.org/2021/09/10/why-software-projects-need-heroes.html)

4、

很多人认为，照抄国外的成功软件，不能算是创新。我认为这是一个非常荒谬的论点，将一个商业模型复制到另一个市场，真的没那么容易。 

执行就是创新。能够成功执行，调整模型适应当地需求，就是创新。

-- [《如何发现下一个独角兽》](https://restofworld.org/2021/how-500-startups-finds-unicorns/)

5、

通用芯片（比如英特尔的产品）不再适合市场需求，越来越多的公司将会开发自己的芯片，并外包给台积电和三星进行生产。苹果公司的 M1 芯片、YouTube 的视频转码芯片、亚马逊的 Graviton 芯片和谷歌的 Pixel 6 芯片，都是自己研发的。

我们已经到了现成的芯片无法解决各家公司的问题的阶段，定制自己的芯片比购买低价的通用芯片更重要。

-- [Hacker News 读者](https://news.ycombinator.com/item?id=28526969)

## 历史上的本周

2020年（第 130 期）：[低龄化的互联网](https://www.ruanyifeng.com/blog/2020/10/weekly-issue-130.html)

2019年（第 78 期）：[下一个风口是什么行业？](https://www.ruanyifeng.com/blog/2019/10/weekly-issue-78.html)

2018年（第 27 期）：[乔布斯的“热情假设”对不对？](https://www.ruanyifeng.com/blog/2018/10/weekly-issue-27.html)

## 订阅

这个周刊每周五发布，同步更新在[阮一峰的网络日志](http://www.ruanyifeng.com/blog)和[微信公众号](http://weixin.sogou.com/weixin?query=%E9%98%AE%E4%B8%80%E5%B3%B0%E7%9A%84%E7%BD%91%E7%BB%9C%E6%97%A5%E5%BF%97)。

微信搜索“阮一峰的网络日志”或者扫描二维码，即可订阅。

![](https://cdn.beekka.com/blogimg/asset/202103/bg2021030402.jpg)

（完）

