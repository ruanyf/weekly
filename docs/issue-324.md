# 科技爱好者周刊（第 324 期）：人类已知的最大质数

这里记录每周值得分享的科技内容，周五发布。

本杂志[开源](https://github.com/ruanyf/weekly)，欢迎[投稿](https://github.com/ruanyf/weekly/issues)。另有[《谁在招人》](https://github.com/ruanyf/weekly/issues/5445)服务，发布程序员招聘信息。合作请[邮件联系](mailto:yifeng.ruan@gmail.com)（yifeng.ruan@gmail.com）。

## 封面图

![](https://cdn.beekka.com/blogimg/asset/202411/bg2024110209.webp)

世界最大博物馆之一的卢浮宫，在阿联酋的阿布扎比有一个分馆。这个分馆建在一个海岛上，游客可以划着皮划艇进入参观。（[via](https://visitabudhabi.ae/zh/what-to-see/historical-and-cultural-attractions/louvre-abu-dhabi)）

## 人类已知的最大质数

上个月，有一个不太引人注目的科学发现：[人类已知的最大质数](https://www.163.com/dy/article/JF9HFDUG0514B52J.html)诞生了。

除了数学家，大概没人会对这个消息感兴趣，它离日常生活太远了。

![](https://cdn.beekka.com/blogimg/asset/202411/bg2024110708.webp)

但是，本周《华盛顿邮报》的[一篇报道](https://www.washingtonpost.com/science/2024/10/23/nvidia-prime-mersenne-gpu-cloud/)，却把这个发现跟普通人拉近了距离。

大家恐怕想不到，**发现这个数字的人不是数学家，而是程序员**。《华盛顿邮报》就是讲述背后的精彩故事，我看得津津有味，科学报道就该这么写，下面分享给大家。

====================

2024年10月10日，美国程序员卢克·杜兰特 (Luke Durant) 发现了人类已知的最大质数。

![](https://cdn.beekka.com/blogimg/asset/202411/bg2024110703.webp)

那天晚上，他收拾衣物，准备从加州返回阿拉巴马州的老家。出门之前，他决定远程登录服务器，看一下正在运行的脚本。

他原以为，就像过去一年的每次远程登录一样，脚本要么没有结果，要么报错。但是，那天晚上不一样，脚本给出了运行结果。

杜兰特意识到，他刚刚发现了世界上新的最大质数。他立刻告诉同伴这个消息，然后顾不上回老家了，开始仔细检查脚本的结果。

他发现的这个质数，后来被命名为 M136279841。它大得离谱，足足有41,024,320个十进制位。如果你每秒读一位，需要475天才能读完。这个数字等于2的136,279,841 次方减一。

![](https://cdn.beekka.com/blogimg/asset/202411/bg2024110704.webp)

为了算出这个数字，杜兰特花了差不多一年，自掏腰包大约200万美元，去购买 GPU 计算时间，用来运行脚本。

今年36岁的杜兰特，曾经在 Nvidia 公司担任程序员。公司的股价上涨，让他赚到了足够的钱，于2021年离职，开始投入自己的项目。

他选择的项目，就是计算梅森质数。他在 Nvidia 的经历，让他能够熟练使用 GPU 编程，去完成高速计算。

17世纪，法国传道士马林·梅森（Marin Mersenne）提出，存在无数个质数，可以表示成 2<sup>n</sup> - 1 的形式，比如3等于2<sup>2</sup> - 1，7等于2<sup>3</sup> - 1。

![](https://cdn.beekka.com/blogimg/asset/202411/bg2024110705.webp)

目前，人类已知的梅森质数有52个（包括杜兰特发现的那个）。寻找新的梅森质数，早就成了数学迷的一种爱好。

上个世纪90年代，互联网出现后，一个美国程序员乔治·沃尔特曼（George Woltman）组织了“互联网梅森质数搜索计划”（Great Internet Mersenne Prime Search，简称 GIMPS 计划）。

![](https://cdn.beekka.com/blogimg/asset/202411/bg2024110706.webp)

GIMPS 计划的目的，就是使用计算机程序，寻找梅森质数。它的[官网](http://www.mersenne.org/)提供程序下载，你可以在自己的电脑上运行这个程序，它会在计算机的空闲时间进行计算，寻找下一个梅森质数。

目前，全世界大约有3,000～5,000名志愿者在运行这个程序。梅森质数实在太难算了，在过去的28年里，GIMPS 计划一共发现了18个梅森质数。

上一个数字发现于2018年，比杜兰特发现的第52个梅森质数短了1600万个十进制位。

杜兰特的不同之处在于，在他以前，所有人都使用 CPU 进行计算，只有他使用 GPU。CPU 一两周的计算量，GPU 大约只需要一两天的时间。

![](https://cdn.beekka.com/blogimg/asset/202411/bg2024110709.webp)

杜兰特为了找到这个数字，动用了17个国家/地区24个机房和两家云服务商的服务器，进行协同计算。

他说：“**如今个人的能力比历史上任何时候都强得多，你能调用的云计算，规模令人难以置信**。我们拥有这样神奇的强大系统，所以最好弄清楚如何利用它们。”

梅森质数没有任何实际用途，科学家寻找它只是为了乐趣和探索人类知识的边界。

杜兰特由于这个发现，得到了3000美元奖金。他把这些钱捐给了阿拉巴马州的公立寄宿学校，那是他去加州理工学院读大学前的母校。

他发现的最大质数已经到了4100万位，GIMPS 计划依然在悬赏第一个找到十亿位质数的人。

## 活动

本周有两个很不错的活动，大家看看。

## 豆包 MarsCode 校园发布会

大学生怎么学 AI，提升竞争力？学习中遇到困难，怎么解决？毕业后怎样加入该行业？

这都是同学们非常关心的问题。

现在，豆包大模型旗下的[豆包 MarsCode](https://www.marscode.cn/) 正式进入校园，推出[一系列活动](https://www.marscode.cn/events/campus)，为同学们服务，举办课程、活动、mvp 评选等，帮助大家找到自己的未来。

![](https://cdn.beekka.com/blogimg/asset/202411/bg2024110712.webp)

下周六（11月16日）下午是发布会直播，当天除了介绍各种 AI 相关的校园活动，还有来自全国各高校的学长学姐分享学习成长之路，与豆包 MarsCode 专家对话 AI 职业发展等。

从今天开始，就可以报名。为了鼓励参与，**每天都有接力奖、惊喜开奖、微信群福利，直播当天还有抽奖**。奖品非常多，都是同学们想要的。

现在扫描上方海报二维码，或者点击[这个链接](https://live.marscode.cn/7116/campus?ch=ryf)，了解详情和报名。

## [竞赛] 扣子 AI 挑战赛

字节旗下的“[扣子 Coze](https://www.coze.cn)”正在举办[模板挑战赛](https://mp.weixin.qq.com/s/CRxT9UTuD1dH53ePwi-_Zw)。我介绍一下这个比赛。

11月22日前，你只要用它创建一个 AI 应用，提交到官网的[智能体商店](https://www.coze.cn/store/agent?cate_type=recommend)，就能参加比赛。

![](https://cdn.beekka.com/blogimg/asset/202410/bg2024102812.webp)

扫描上方海报二维码，或[点击这里](https://www.coze.cn/s/iANJPSxo/)，了解详情。

大家不要觉得这比赛很难，扣子是“工作流模式”（参考我的[介绍文章](http://www.ruanyifeng.com/blog/2024/10/coze.html)和[官方文档](https://www.coze.cn/docs/guides/quickstart)），全图形界面，通过编排节点，自动生成 AI 应用，没有编程基础也能上手。

![](https://cdn.beekka.com/blogimg/asset/202410/bg2024102708.webp)

而且，扣子本周还开通了付费模板。你可以为自己的应用模板设置价格，实现变现。别人基于你的应用进行修改，必须付费购买模板，从而为你带来收入。

**本次比赛会根据模板复制的数量，给予1000元～10000元的奖金**。搭建 AI 应用不收费，大家不妨从模板商店寻找灵感，试试用低代码编程，完成 AI 开发。 

## 科技动态

1、[旧金山胶囊旅馆](https://www.theguardian.com/society/2024/oct/31/san-francisco-sleeping-pods-affordable-housing-crisis)

旧金山市中心有一家月租的胶囊旅馆，由于太受欢迎，想入住的人必须网上申请，然后进行抽签。

![](https://cdn.beekka.com/blogimg/asset/202411/bg2024110201.webp)

结果，17个床位有300个人申请。

一个上下铺的床位，月租价格是700美元（约人民币5000元），包含水电费、上网费、公共淋浴、厕所、一个储藏柜和共用厨房的使用权。

![](https://cdn.beekka.com/blogimg/asset/202411/bg2024110202.webp)

这么贵的铺位，还如此抢手，原因是你在旧金山再也找不到如此便宜的住宿了。

由于有硅谷，旧金山是美国房价最高的地区。公寓里面的一个合租单间，月租要3000美元～3500美元，普通美国人也租不起。

2、[伯明翰的 Oracle 灾难](https://www.theregister.com/2024/08/20/birmingham_oracle_cost/)

2022年，英国伯明翰市政府更换 ERP 系统，使用 Oracle 替换已经运行20多年的 SAP 公司产品。

![](https://cdn.beekka.com/blogimg/asset/202411/bg2024110501.webp)

上线后才发现，Oracle 无法生成现金审计报告，市政府迫不得已改用人工审计。

Oracle 系统的更换成本，已经最初估计的1900万英镑（约1.75亿人民币）增加到1.31亿英镑（约12亿人民币）。

该问题何时解决，还不得而知，成本将进一步上升。这件事情反应了，更换大型的线上系统的风险有多高。

3、[AI 虚构的万圣节晚会](https://www.irishtimes.com/ireland/2024/11/01/we-are-highly-embarrassed-website-creator-behind-non-existent-dublin-halloween-parade-says-it-was-a-mistake/)

上月底是万圣节，两个巴基斯坦青年做了一个[网站](https://myspirithalloween.com/)，上面是全世界各地的活动信息。

![](https://cdn.beekka.com/blogimg/asset/202411/bg2024110507.webp)

但是，他们没有披露，为了节省数据搜集的成本，这些活动都是 AI 生成的，实际上不存在。

结果，一个不知情的爱尔兰访问者转发了活动信息，更多的人看到后，又转发到 Tiktok 和 Instagram。

结果，万圣节那天晚上，爱尔兰首都都柏林的某条大街上，聚集了上千人，都等着参加活动。

![](https://cdn.beekka.com/blogimg/asset/202411/bg2024110508.webp)

大家在街上站了几个小时，发现上当了，根本没有活动。为了避免更多人聚集，警方不得不发出通告。

![](https://cdn.beekka.com/blogimg/asset/202411/bg2024110509.webp)

![](https://cdn.beekka.com/blogimg/asset/202411/bg2024110512.webp)

第二天，这个事件就上了国际媒体，那两个巴基斯坦青年不得不道歉。它凸显了，内容注明“AI 生成”的必要性。

4、**其他**

（1）中国开始向民众征集[月球车名称](https://www.cmse.gov.cn/xwzx/202410/t20241028_55835.html)，并披露了两种月球车设计方案。

![](https://cdn.beekka.com/blogimg/asset/202411/bg2024110701.webp)

（2）Etched 公司宣布了世界第一款实时 AI 游戏[《绿洲》](https://www.etched.com/blog-posts/oasis)，基于 MineCraft 进行训练，游戏画面都是 AI 实时生成，参见[网友](https://github.com/ruanyf/weekly/issues/5480)的[介绍网站](https://oasisaiminecraft.com/)。

![](https://cdn.beekka.com/blogimg/asset/202411/bg2024110208.webp)

（3）OpenAI 公司启用域名 [chat.com](https://chat.com/)，跳转到 chatgpt.com 。

## 文章

1、[ChatGPT 搜索 vs 谷歌搜索](https://www.tomsguide.com/ai/i-just-tested-google-vs-chatgpt-search-and-im-shocked-by-the-results)（英文）

![](https://cdn.beekka.com/blogimg/asset/202411/bg2024110207.webp)

上周，OpenAI 公司推出了 ChatGPT 搜索，跟谷歌发生正面竞争。

网络媒体就去对比了两者的搜索结果，结果就是一句话：谷歌有麻烦了。

2、[为 Git 命令设置别名](https://tutorialedge.net/tips/aliasing-your-git-commands/)（英文）

作者介绍怎么为 git 命令设置方便的别名，比如`git add -A`可以设为`git a`。

3、[如何生成简历网页](https://michaelengen.com/posts/my-eleventy-resume/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202411/bg2024110402.webp)

作者用静态站点生成器 Eleventy（基于 JS 语言），为自己做了一张简历网页（上图），还可以本地打印为 PDF 文件。

4、[我为 VS Code 贡献了代码](https://imbant.github.io/blog/2024/10/29/VS-Code-Thankyou/)（中文）

![](https://cdn.beekka.com/blogimg/asset/202411/bg2024110504.webp)

VS Code 内置的 TypeScript 语言服务器，有一个 bug，作者修复了这一问题。（[@imbant](https://github.com/ruanyf/weekly/issues/5478) 投稿）

5、[如何将 makefile 用于 Node.js 项目](https://rosszurowski.com/log/2022/makefiles)（英文）

![](https://cdn.beekka.com/blogimg/asset/202408/bg2024082401.webp)

本文详细教你怎么用 makefile 管理 Node.js 项目的各种内部操作。

6、[Lit 框架开发 Web Components 入门教程](https://pwp.stevecassidy.net/javascript/lit/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202408/bg2024082505.webp)

一篇不错的 Lit 框架入门教程，教你怎么写一个 Web component。

7、[Ruby 如何加载模块](https://www.railsexplained.com/pages/hunting-for-gems/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202409/bg2024093005.webp)

一篇初学者教程，介绍 Ruby 程序的模块加载方法的历史演变。

## 工具

1、[flyscrape](https://flyscrape.com/)

![](https://cdn.beekka.com/blogimg/asset/202311/bg2023111201.webp)

一个网页抓取的跨平台命令行工具，使用 Go 语言编写，但是它的操作脚本是用 JS 写的，方便用户提取网页内容。

2、[uv](https://github.com/astral-sh/uv)

Rust 语言写的 Python 包安装器，可以替代 pip，运行速度更快，参见[介绍文章](https://astral.sh/blog/uv)。

3、[ChatTCP](https://chattcp.com)

![](https://cdn.beekka.com/blogimg/asset/202411/bg2024110212.webp)

一款 Mac 的 TCP 数据包分析工具，致力于简化 TCP 分析，核心功能免费。（[@wujiuye](https://github.com/ruanyf/weekly/issues/5454) 投稿）

4、[typing-practice](https://github.com/wincatcher/typing-practice.toolsnav.top)

![](https://cdn.beekka.com/blogimg/asset/202411/bg2024110211.webp)

开源的英文打字练习工具。（[@wincatcher](https://github.com/ruanyf/weekly/issues/5451) 投稿）

5、[云搭](https://github.com/wangyuan389/yunda)

![](https://cdn.beekka.com/blogimg/asset/202411/bg2024110502.webp)

开源的低代码平台，用来搭建小程序、H5、问卷、图文文章等多种应用，试用 [Demo](https://www.sunmao-design.top/sunmao/admin)。（[@wangyuan389](https://github.com/ruanyf/weekly/issues/5473) 投稿）

6、[NextTalk](https://github.com/Mebius1916/NextTalk_web)

![](https://cdn.beekka.com/blogimg/asset/202411/bg2024110213.webp)

一个基于 Next.js 的网页版实时聊天工具，使用说明详见它的[桌面版](https://github.com/Mebius1916/NextTalk)，可以作为开发参考。（[@Mebius1916](https://github.com/ruanyf/weekly/issues/5457) 投稿）

7、[dazhengTools](https://github.com/dazhengs/tools)

![](https://cdn.beekka.com/blogimg/asset/202411/bg2024110306.webp)

开源的纯前端在线加/解密工具箱，可以离线使用。（[@dazhengs](https://github.com/ruanyf/weekly/issues/5460) 投稿）

8、[TempMail](https://tempmail100.com/)

![](https://cdn.beekka.com/blogimg/asset/202411/bg2024110308.webp)

临时邮箱服务，支持 iOS 和网页端。（[@houzhongjian](https://github.com/ruanyf/weekly/issues/5455) 投稿）

9、[自动化巡检系统](https://github.com/TheCoolQATeam/online-inspection-tracker)

![](https://cdn.beekka.com/blogimg/asset/202411/bg2024110702.webp)

一个开源的网址状态定时巡检工具，防止指定网址出现白屏、服务无响应等问题，有异常会发送钉钉、企业微信、飞书警报，体验 [Demo](https://check.itest.ren/)。（[@zdx0122](https://github.com/ruanyf/weekly/issues/5486) 投稿）

10、[Magika](https://google.github.io/magika/)

![](https://cdn.beekka.com/blogimg/asset/202407/bg2024072507.webp)

一个命令行工具，可以检测某个文件是什么类型（比如图片文件还是文本文件），有网页的 JS 版。它是谷歌的产品，谷歌内部也在用它检测文件类型。

## AI 相关

1、[AI Hear](https://hear.thucydides.net/zh-cn/)

![](https://cdn.beekka.com/blogimg/asset/202411/bg2024110305.webp)

一款离线运行的桌面软件，实时语音转文字、实时翻译、字幕导出，支持 Mac、Windows。（[@phonechan](https://github.com/ruanyf/weekly/issues/5458) 投稿）

2、[5ire](https://5ire.app/)

![](https://cdn.beekka.com/blogimg/asset/202411/bg2024110307.webp)

开源的大模型桌面客户端，支持 Windows、Mac。（[@nanbingxyz](https://github.com/ruanyf/weekly/issues/5461) 投稿）

3、[CR-Mentor](https://github.com/Gijela/CR-Mentor)

![](https://cdn.beekka.com/blogimg/asset/202411/bg2024110503.webp)

一个开源应用，自己搭建 AI 服务，自动对 GitHub 的代码提交进行 code review。（[@Gijela](https://github.com/ruanyf/weekly/issues/5476) 投稿）

4、[APIPark](https://github.com/APIParkLab/APIPark)

![](https://cdn.beekka.com/blogimg/asset/202411/bg2024110518.webp)

开源的一站式 AI 网关，搭建企业自己的 AI 开放平台，方便同时接入多种模型，进行 API 调用。（[@Frey2024](https://github.com/ruanyf/weekly/issues/5481) 投稿）

5、[Srcbook](https://github.com/srcbookdev/srcbook)

![](https://cdn.beekka.com/blogimg/asset/202411/bg2024110514.webp)

一个开源编程平台，给出文字描述，然后通过 AI 生成 JS 的全栈应用。

6、[Claude Artifacts](https://simonwillison.net/2024/Oct/21/claude-artifacts/)

![](https://cdn.beekka.com/blogimg/asset/202411/bg2024110517.webp)

Claude 模型的 Artifacts 功能，与上一条的作用相同，可以生成一个单页应用，但是不开源，本文介绍该功能。

7、[Browser-Use](https://github.com/gregpr07/browser-use)

![](https://cdn.beekka.com/blogimg/asset/202411/bg2024110710.webp)

一个 Python 库，可以通过 AI 模型，完成浏览器自动化。

## 资源

1、[Unfaked](https://www.gounfaked.com/)

![](https://cdn.beekka.com/blogimg/asset/202410/bg2024100804.webp)

一个免费图片库，收集可以乱真的 AI 生成图片。

2、[系统设计面试：内幕指南](https://learning-guide.gitbook.io/system-design-interview)（中译）

![](https://cdn.beekka.com/blogimg/asset/202411/bg2024110210.webp)

《System Design Interview: An Insider's Guide》一书的中文翻译，介绍如何设计不同目的的软件系统，可以用来准备面试。（[@Admol](https://github.com/ruanyf/weekly/issues/5448) 投稿）

3、[Auth Wiki](https://auth.wiki/)

![](https://cdn.beekka.com/blogimg/asset/202411/bg2024110403.webp)

一个维基网站，收录各种与身份验证、授权和身份管理相关的条目，解释很详细。

4、[3D 卫星图](https://app.keeptrack.space/)

![](https://cdn.beekka.com/blogimg/asset/202410/bg2024100304.webp)

这个网站可以实时查看所有运行中的地球卫星，选择一个地点，可以看到该地上空现在是什么卫星。

## 图片

1、[太阳能板](https://x.com/jessepeltan/status/1836523494840111613)

太阳能板的价格，正在快速下降，已经接近或低于普通的挡板。

以后，我们看到的建筑物，很可能都会采用太阳能板作为外墙。

![](https://cdn.beekka.com/blogimg/asset/202411/bg2024110301.webp)

![](https://cdn.beekka.com/blogimg/asset/202411/bg2024110302.webp)

![](https://cdn.beekka.com/blogimg/asset/202411/bg2024110303.webp)

![](https://cdn.beekka.com/blogimg/asset/202411/bg2024110304.webp)

## 文摘

1、[为什么美国医院还在使用寻呼机？](https://healthtechmagazine.net/article/2019/06/why-hospital-pager-withstood-test-time)

寻呼机是上个世纪的通讯工具，现在已经淘汰了。

![](https://cdn.beekka.com/blogimg/asset/202411/bg2024110713.webp)

但是，近80%的美国医院还在使用寻呼机，这是为什么？

![](https://cdn.beekka.com/blogimg/asset/202411/bg2024110714.webp)

这有几个原因。

（1）信号问题。

寻呼机使用的是类似调频广播的信号，不是手机的 3G/4G/5G 信号，穿透性更好，覆盖范围更广。医院的某些死角，收不到手机信号和 Wi-Fi，但是寻呼机依然有信号。

这使得寻呼机比手机更可靠，如果发生灾难，寻呼机比手机更不容易断网。

（2）续航。

寻呼机的电池寿命很长，可以两周充电一次，而手机一般是每天一充。

（3）简单性。

寻呼机比较简单，不易被攻击或破解。即使落在别人手里，泄漏的信息也很有限。

## 言论

1、

一项美国的调查发现，81%的公司发布过虚假的招聘广告，目的有几个：（1）在招聘网站持续亮相，（2）建立人才库，（3）让现有员工感到自己是可替代的，从而不敢松懈。

-- [《幽灵工作对科技从业者的破坏》](https://www.sfgate.com/tech/article/ghost-jobs-california-tech-industry-19871249.php)

2、

现代硬件的速度快得难以置信，苹果的 M1 Max 芯片运行频率为 3.2GHz，即每秒32亿个时钟周期。

然而，我用它打开微软的 Teams 需要3秒，我不相信这需要花费96亿个时钟周期。我知道这样说过于简化，我的意思是：硬件变得如此之快，我们使用的应用程序却变慢了，这究竟是怎么回事？ 

-- [preyneyv.dev](https://blog.preyneyv.dev/doing-less-with-more)

3、

一项调查发现，科学论文中 might 和 probably 这种表示不确定的修饰词的出现频率，过去20年中下降了40%。

这表明科学论文的不可靠、夸大其词的论断，正在令人担忧地增多了。

-- [Science 官网](https://www.science.org/content/article/some-scientific-papers-words-expressing-uncertainty-have-decreased)

4、

“中产阶级”这个词在美国的含义，正在改变。以前的中产阶级，是指有足够资金进行投资的人，他们有稳定的工作，有房子、汽车、家庭和退休金。

现在的中产阶级，更像不稳定阶层。你有一份工作，但随时可能失去它。你买不起房子，无力为退休储蓄，平时仅仅支付账单就手头紧张。

这是美国的新常态。我的一个银行朋友说，他的大多数客户，支付租金后的账户余额最多只有几百美元。

-- [Hacker News 读者](https://news.ycombinator.com/item?id=42066439)

5、

美国心理学会的一项研究表明，消耗脑力的思考，会导致烦躁、沮丧或其他负面情绪，所以“思考不利于健康”这个观点是对的。

-- [合众社报道](https://www.upi.com/Health_News/2024/08/05/netherlands-mental-exertion-thinking/2701722810331/)

## 往年回顾

[工作台副屏的最佳选择](https://www.ruanyifeng.com/blog/2023/11/weekly-issue-277.html)（2023 #277）

[脸书的公司入职教育](https://www.ruanyifeng.com/blog/2022/10/weekly-issue-227.html)（2022 #227）

[iPad 的真正用途](https://www.ruanyifeng.com/blog/2021/09/weekly-issue-177.html)（2021 #177）

[未来人人开发软件，几乎没人编码](https://www.ruanyifeng.com/blog/2020/09/weekly-issue-127.html)（2020 #127）

（完）

