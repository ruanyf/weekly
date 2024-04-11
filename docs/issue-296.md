# 科技爱好者周刊（第 296 期）：xz 后门的作者 Jia Tan 是谁？

这里记录每周值得分享的科技内容，周五发布。

本杂志[开源](https://github.com/ruanyf/weekly)，欢迎[投稿](https://github.com/ruanyf/weekly/issues)。另有[《谁在招人》](https://github.com/ruanyf/weekly/issues/4204)服务，发布程序员招聘信息。合作请[邮件联系](mailto:yifeng.ruan@gmail.com)（yifeng.ruan@gmail.com）。

## 封面图

![](https://cdn.beekka.com/blogimg/asset/202404/bg2024040706.webp)

去年底建成的南昌东站，以《滕王阁序》的“落霞与孤鹜齐飞，秋水共长天一色”为灵感，造型宛如展翅翱翔的羽翼，象征城市的腾飞。（[via](https://www.sohu.com/a/747607834_791225)）

## xz 后门的作者 Jia Tan 是谁？

互联网行业最近的重大事件，莫过于 [xz 软件的后门](https://boehs.org/node/everything-i-know-about-the-xz-backdoor)。

![](https://cdn.beekka.com/blogimg/asset/202404/bg2024040903.webp)

xz 是一种压缩软件，大量用于 Linux 系统，比如系统管理器 systemD 就用它压缩日志。它是 Linux 的基本组件之一，每台服务器几乎都有它。

今年3月底，有人发现它的新版本有点奇怪，让 SSH 的启动时间慢了500毫秒。进一步调查发现，里面竟然有一个后门。

这件事震惊了业界，因为新版本即将纳入主要的 Linux 发行版（比如 Debian 和 Fedora），只差几天而已。到了那时，服务器带有后门，后果不堪设想。

而且，**整个事件经过精心策划，过程长达数年，每一步都毫无破绽**，心思之缜密，耐心之好，能力之强，令人后怕。

![](https://cdn.beekka.com/blogimg/asset/202404/bg2024040902.webp)

这个事件开始于2021年4月，一个网名叫做 Jia Tan 的人，第一次向 xz 软件包提交了一个正常的补丁，被顺利合并。

2021年11月和2022年4月，他又提交了两个正常的补丁，也被合并。

然后，突然冒出了几个网友，在邮件列表上向管理员建议，xz 项目缺乏人手，响应迟缓，应该给予 Jia Tan 管理员权限。这个建议被采纳了。但是，人们现在发现，这几个网友都是陌生的邮件地址和名字，根本找不到其他的活动痕迹。

就这样，Jia Tan 成为了管理员，拥有独立发布新版本的权限，先后发了几个版本。虽然他的这些代码可能是无害的，但是扩展了功能，为后面要做的坏事打下了基础。

2024年2月，他添加了后门。代码做了混淆，而且后门不在源代码里面，要在构建阶段才会生成，很难发现。他发了这个版本以后，就开始发信，催促几个大型发行版，尽快收入这个版本。

**后门曝光后，Jia Tan 就彻底消失了**，没有任何身份信息，也没有其他痕迹，谁也不知道他到底是谁。人们开始搜集线索，试图找出这个人。

![](https://cdn.beekka.com/blogimg/asset/202404/bg2024040904.webp)

他的网名是汉语拼音，邮件全名是 Jia Cheong Tan，中间的 Cheong 似乎是粤语。他的 GitHub 提交时间采用东八时区。他的 IP 地址是新加坡。

**一切都在指向，他是一个在新加坡的华人。真的是这样吗？**

网名显然是假的，代码提交时间可以更改，至于 IP 地址，已经查明是 VPN 地址。

**有没有一种可能，他伪装成华人，栽赃给中国？**

有人[分析了](https://rheaeve.substack.com/p/xz-backdoor-times-damned-times-and)，他在 GitHub 的所有提交。虽然提交时间可以更改，但也不能改得太过分，毕竟要保持提交顺序和及时性，所以还是能看出一点东西。

他的提交，绝大部分采用东八时区的时间，但是有一些是东二时区和东三时区。

研究者相信，**他很可能是一个东二时区的欧洲人，伪装成东八时区的中国人**。他更改了计算机的时区，但是偶尔有几次忘记了更改。

![](https://cdn.beekka.com/blogimg/asset/202404/bg2024040905.webp)

东二时区的国家（上图的绿色部分），主要是东欧国家，以及一部分北欧国家（芬兰和瑞典）和中东国家（以色列和埃及）。

他来自东二时区，主要理由有三点。

（1）他在东二时区的提交日期是冬季，而东三时区的提交日期是夏季。这正好符合欧洲国家和以色列的夏令时切换。

（2）他明显在手动切换时区。举例来说，2022年10月6日，他先在东八时区的17:00:38进行了一次提交，然后又在东三时区的21:53:09再次提交。两次相差不到十个小时，很难相信这一点时间，他已经从中国来到欧洲写代码。

（3）他在中国的农历假日（中秋节、清明节、春节）都有提交，尤其是2023年春节假期（1月21日到1月27日），他有五天提交记录（分别是22日、23日、24日、26日、27日），这说明他不过春节。相反地，他在欧洲人很重视的假期（圣诞节和新年）却没有提交记录。

综上所述，这个 Jia Tan 很可能来自东二时区。不过，这个人（或者组织）非常小心，而且是技术高手，也许永远也发现不了真实身份。

这件事情提醒我们，开源社区的参与者形形色色，不全是好人，有些人非常阴险，不仅干坏事，还伪装身份，栽赃给他人。因此，我们对他人保持善意的同时，也不能丢失警惕。已经有人提议，重要的开源项目不能接受匿名身份的代码提交者。

## 科技动态

1、[日本人都姓佐藤](https://www.spoon-tamago.com/2531-sato-surname-problem/)

一个日本大学教授警告，如果不改变人口下降的趋势，到了2531年，所有日本人都会姓佐藤（sato）。

![](https://cdn.beekka.com/blogimg/asset/202404/bg2024040206.webp)

佐藤是日本目前最常见的姓氏，占总人口的1.5%。由于日本人口正在下降，罕见姓氏不断消失，人口向大姓集中。

而且，日本有法律，强制要求女性婚后改用夫家的姓氏，导致小姓更难生存。

![](https://cdn.beekka.com/blogimg/asset/202404/bg2024040205.webp)

（图片说明：某场比赛时，球员姓氏都是佐藤。）

根据调查，2022年至2023年间，佐藤姓氏增长率高达0.83%。也就是说，总人口在减少，但是佐藤氏在增加。

![](https://cdn.beekka.com/blogimg/asset/202404/bg2024040207.webp)

根据教授的计算，以这个增长率，到了2531年，日本将不存在第二个姓氏，所有人都姓佐藤。

为了警示日本国民，他还办了一个“[佐藤问题网站](https://think-name.jp/)”，提出急需改变女性婚后改夫姓的问题。

![](https://cdn.beekka.com/blogimg/asset/202404/bg2024040204.webp)

2、[观察最多鸟类的人](https://www.theguardian.com/environment/2024/mar/24/birding-online-community-10000-species)

[iGoTerra](https://igoterra.com) 是一个野生动物网上社区，用来记录和管理自己看到的野生动物。

它有一个[榜单](https://igoterra.com/rankings?group=33&rank=8&area=312025&year=-1&observedSeen=1)，列出看到最多鸟类的用户排名。最近，该榜单诞生了有史以来第一位看到超过10000种鸟的人。

![](https://cdn.beekka.com/blogimg/asset/202404/bg2024040303.webp)

创造记录的是一位70岁的美国退休外交官 Peter Kaestner。下图是2024年2月9日他在菲律宾拍到的捕蜘鸟，这是他看到的第10,000种鸟。

![](https://cdn.beekka.com/blogimg/asset/202404/bg2024040304.webp)

这个记录是不可思议的，因为已知的鸟类大约只有1.1万种，这意味着他几乎见过地球上所有鸟。

技术帮助鸟类观察者创造记录。机器学习现在可以从照片中自动认出，这是哪一种鸟，甚至从叫声也可以分辨鸟类，iGoTerra 社区则让爱好者分享在哪里可以看到什么鸟。

另外，由于对于鸟类的理解在发展，物种被不断细分，很多新的鸟类因此诞生。这也是能够突破10000大关的原因之一。

不过，iGoTerra 只要求上传照片或鸟叫的录音作为证据，并不会对真实性进行审核。

3、[苹果公司的起源](https://www.vintag.es/2024/04/steve-wozniak-working-in-garage.html)

本月，苹果公司庆祝[成立48周年](https://www.benzinga.com/markets/equities/24/04/38023363/happy-48-apple-if-you-invested-1000-in-apple-when-it-went-public-heres-how-much-youd-have)。这家公司是在1976年4月1日由乔布斯和史蒂夫·沃兹尼亚克在美国加州成立的。

当时，他们两个在乔布斯父母的车库里面，组装电脑的电路板对外销售。

![](https://cdn.beekka.com/blogimg/asset/202404/bg2024040208.webp)

车库非常简陋，下面是当时的一些照片，沃兹尼亚克一个人在干活。

![](https://cdn.beekka.com/blogimg/asset/202404/bg2024040209.webp)

![](https://cdn.beekka.com/blogimg/asset/202404/bg2024040210.webp)

![](https://cdn.beekka.com/blogimg/asset/202404/bg2024040211.webp)

两位创始人恐怕都没有料到，苹果后来会发展得这么大，真可谓“作始也简，将毕也巨”。

## 文章

1、[史上首位图灵和阿贝尔双料获奖者](https://www.163.com/dy/article/IVGAHL7K0511ABV6.html)（中文）

![](https://cdn.beekka.com/blogimg/asset/202404/bg2024041108.webp)

计算机科学的最高奖“图灵奖”刚刚揭晓，普林斯顿高等研究院的数学教授艾维·维格森（Avi Wigderson）。他还拿过数学界的最高奖“阿贝尔奖”，是唯一一位双料获奖者。

2、[可以替代 React 的框架](https://joshcollinsworth.com/blog/antiquated-react)（英文）

![](https://cdn.beekka.com/blogimg/asset/202308/bg2023081606.webp)

这篇长文对 React 框架提出批评，认为它的很多做法已经过时。文章后半部分介绍了各种可以替代 React 的前端框架。

3、[如何生成键盘输入统计看板](https://greptime.com/blogs/2024-03-19-keyboard-monitoring)（英文）

![](https://cdn.beekka.com/blogimg/asset/202404/bg2024040306.webp)

本文介绍使用一个 Python 脚本，统计用户在当前计算机按下了什么键。（[@tisonkun](https://github.com/ruanyf/weekly/issues/4195) 投稿）

4、[Claude AI 能做，而 ChatGPT 不能做的四件事](https://www.zdnet.com/article/4-things-claude-ai-can-do-that-chatgpt-cant/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202309/bg2023090711.webp)

Claude 是 Anthropic 公司推出的大规模语言模型，有免费版和收费的 [Pro 版](https://www.zdnet.com/article/anthropic-unveils-claude-pro-a-paid-subscription-plan-for-its-chatgpt-rival/)。本文比较了 Claude 强于 ChatGPT 的四个地方。

5、[如何将 Caddy 作为反向代理](https://linuxiac.com/how-to-set-up-caddy-as-reverse-proxy/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202403/bg2024032907.webp)

一篇初学者教程，介绍如何用 Caddy 架设反向代理服务器，它的设置比 nginx 简单，而且自动生成和更新 HTTPS 证书。

6、[我后悔重构了代码](https://overreacted.io/goodbye-clean-code/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202312/bg2023120807.webp)

著名程序员 Dan Abramov 的一篇旧文。他曾经觉得同事的代码太冗余，就擅自重构了，让其变得干净。

但是，他后来认识到，那些冗余的代码有可取之处，抽象反而不利于日后的扩展。

## AI 相关

1、[ChatGPT](http://chatgpt.com/)

OpenAI 宣布，ChatGPT 取消注册要求，不登录就可以使用。但是，收费的功能（比如 ChatGPT 4 和 DALL-E）还是必须登录。

![](https://cdn.beekka.com/blogimg/asset/202404/bg2024040201.webp)

2、[Opera](https://www.opera.com/zh-cn)

Opera 浏览器[宣布](https://press.opera.com/2024/04/03/ai-feature-drops-local-llms/)，通过它就能安装和使用50多个 AI 模型（每个模型占用大约 2GB 空间），大大简化了本地计算机使用 AI 的难度。 

![](https://cdn.beekka.com/blogimg/asset/202404/bg2024040401.webp)

3、[Suno AI](https://www.suno.ai/)

Suno AI 是一个“文生音乐”的服务。网友的[这个工具](https://sunoprompt.com/)帮助你生成它的提示词，可以调整各种细节。（[@Lcorinst](https://github.com/ruanyf/weekly/issues/4194) 投稿）

![](https://cdn.beekka.com/blogimg/asset/202404/bg2024040305.webp)

另有一个 [Suno AI 音乐下载器](https://sunoaidownload.com/)。（[@AICodeHunt](https://github.com/ruanyf/weekly/issues/4250) 投稿）

![](https://cdn.beekka.com/blogimg/asset/202404/bg2024041104.webp)

4、[Free Prompt Market](https://artiversehub.ai/prompt-marketplace)

![](https://cdn.beekka.com/blogimg/asset/202404/bg2024040311.webp)

一个收集各种文生图 AI 模型的提示词的网站，可以作为参考工具。（[@leoli202303](https://github.com/ruanyf/weekly/issues/4209) 投稿）

## 工具

1、[DOOM 验证码](https://vivirenremoto.github.io/doomcaptcha/)

![](https://cdn.beekka.com/blogimg/asset/202403/bg2024032906.webp)

DOOM 游戏被用作网页验证码，只有消灭指定数目的敌人，才能通过验证。

2、[OneUptime](https://github.com/OneUptime/oneuptime)

![](https://cdn.beekka.com/blogimg/asset/202404/bg2024040301.webp)

一个开源的服务可用性检查工具，记录服务的健康状态，如果发现服务下线，立刻发送通知，可以替代 [StatusPage.io](https://www.statuspage.io/)。

3、[DashPress](https://github.com/dashpresshq/dashpress)

![](https://cdn.beekka.com/blogimg/asset/202404/bg2024040302.webp)

一个开源工具，只需执行一个命令，就会自动分析数据库结构，生成管理后台，号称不用写代码。

4、[Landing page boilerplate](https://github.com/weijunext/landing-page-boilerplate)

![](https://cdn.beekka.com/blogimg/asset/202404/bg2024040307.webp)

开源的项目落地页模板，参见[介绍文章](https://juejin.cn/post/7350200488455520267)。（[@weijunext](https://github.com/ruanyf/weekly/issues/4197) 投稿）

5、[GitHub Custom Notifier](https://github.com/qiweiii/github-custom-notifier)

![](https://cdn.beekka.com/blogimg/asset/202404/bg2024040308.webp)

一个开源的浏览器插件，用来监听 GitHub 官方没有提供的一些事件（比如创建 label），事件发生时，浏览器就会发送通知。（[@qiweiii](https://github.com/ruanyf/weekly/issues/4199) 投稿）

6、[HeyForm](https://github.com/heyform/heyform)

![](https://cdn.beekka.com/blogimg/asset/202404/bg2024040310.webp)

一个开源的表单生成器，创建调查、问卷、投票等，可以不编写一行代码。（[@iMuFeng](https://github.com/ruanyf/weekly/issues/4207) 投稿）

7、[Youdeyiwu](https://github.com/dafengzhen/youdeyiwu)

![](https://cdn.beekka.com/blogimg/asset/202404/bg2024040312.webp)

一个开源的轻量级论坛，追求界面简洁和使用方便，后端使用 Java，前端使用 Next.js。（[@dafengzhen](https://github.com/ruanyf/weekly/issues/4211) 投稿）

8、[Markdown Genji](https://genji-md.dev/)

![](https://cdn.beekka.com/blogimg/asset/202404/bg2024040313.webp)

VitePress 的一个插件，用于在 Markdown 文档插入可以执行的代码块，创建交互式文档。（[@pearmini](https://github.com/ruanyf/weekly/issues/4212) 投稿）

9、[Mutative](https://github.com/ruanyf/weekly/issues/4222)

一个操作不可变状态的 JS 库，追求高效。（[@unadlib](https://github.com/ruanyf/weekly/issues/4222) 投稿）。

10、[Fusion](https://github.com/0x2E/fusion)

![](https://cdn.beekka.com/blogimg/asset/202404/bg2024040501.webp)

一个轻量、简洁的 RSS 聚合和阅读器，使用 Go + Svelte 开发。（[@0x2E](https://github.com/ruanyf/weekly/issues/4223) 投稿）

11、[node-screenshots](https://github.com/nashaofu/node-screenshots)

一个跨平台、零依赖的 Node.js 模块，用于截图和录屏。（[@nashaofu](https://github.com/ruanyf/weekly/issues/4224) 投稿）

12、[流畅阅读](https://github.com/Bistutu/FluentRead)

![](https://cdn.beekka.com/blogimg/asset/202404/bg2024040707.webp)

一款浏览器翻译插件，支持人工智能引擎。（[@Bistutu](https://github.com/ruanyf/weekly/issues/4230) 投稿）

13、[keynavish](https://github.com/lesderid/keynavish)

使用键盘控制鼠标运动的 Windows 软件。（[@NomandChan](https://github.com/ruanyf/weekly/issues/55) 投稿）

14、[K8Z](https://github.com/k8zdev/k8z)

![](https://cdn.beekka.com/blogimg/asset/202404/bg2024041002.webp)

管理 Kubernetes 的开源工具，有手机客户端和桌面客户端。（[@kofj](https://github.com/ruanyf/weekly/issues/4246) 投稿）

## 资源

1、[Learn Next.js 中文教程](https://qufei1993.github.io/nextjs-learn-cn)

![](https://cdn.beekka.com/blogimg/asset/202404/bg2024040309.webp)

Next.js [官方教程](https://nextjs.org/learn)的中文翻译，构建一个全栈 Web 应用程序。（[@qufei1993](https://github.com/ruanyf/weekly/issues/4206) 投稿）

2、[3DP.ing](https://3dp.ing/)

![](https://cdn.beekka.com/blogimg/asset/202404/bg2024040602.webp)

一个 3D 打印模型的搜索引擎，特点是使用图片搜索。（[@wangasa](https://github.com/ruanyf/weekly/issues/4227) 投稿）

3、[1000UserGuide](https://1000userguide.com)

![](https://cdn.beekka.com/blogimg/asset/202404/bg2024040901.webp)

该网站整理了300多个免费推广渠道，包括网站、论坛、网址导航、产品目录等，帮助独立开发者推广产品。（[@naxiaoduo](https://github.com/ruanyf/weekly/issues/4240) 投稿）

4、[Awesome Cloudflare](https://github.com/zhuima/awesome-cloudflare)

这个仓库收集基于 Cloudflare 服务的各种开源软件。（[@zhuima](https://github.com/ruanyf/weekly/issues/4244) 投稿）

5、[Beej's Guide to Network Concepts 中译](https://github.com/rogerzhu/-bgnet0-cn/tree/main/src)

网友对[《Beej's Guide to Network Concepts》](https://beej.us/guide/bgnet0/)一书的中文翻译。（[@rogerzhu](https://github.com/ruanyf/weekly/issues/4248) 投稿）

## 图片

1、[加州一号公路](https://www.cnn.com/travel/california-highway-1-damage-big-sur/index.html)

加州一号公路从旧金山直到洛杉矶，就建在海岸山脉上，一路沿着太平洋，风景十分优美。

![](https://cdn.beekka.com/blogimg/asset/202404/bg2024040203.webp)

但是，正因为建在海边悬崖上，这条公路经常发生地质灾害。本月就发生了崩塌，一部分公路掉进了太平洋，不得不暂时封闭。

![](https://cdn.beekka.com/blogimg/asset/202404/bg2024040202.webp)

2、[梅子坑](https://www.nasa.gov/image-article/craters-edge/)

梅子坑（plum crater）是一个小型的月球陨石撞击坑，直径约40米，深约10米。

![](https://cdn.beekka.com/blogimg/asset/202403/bg2024032901.webp)

这个陨石坑之所以特别，是因为人类访问过这个地方。

1972年4月21日，阿波罗16号飞船的登月地点，就在梅子坑附近。

![](https://cdn.beekka.com/blogimg/asset/202403/bg2024032902.webp)

宇航员实地考察了这个陨石坑。

![](https://cdn.beekka.com/blogimg/asset/202403/bg2024032904.webp)

当年的脚印至今清晰可见（下图）。

![](https://cdn.beekka.com/blogimg/asset/202403/bg2024032903.webp)

## 文摘

1、[环岛的作用](https://theconversation.com/what-are-roundabouts-a-transportation-engineer-explains-the-safety-benefits-of-these-circular-intersections-215412)

开车时，你可能已经遇到许多环岛。

你有没有想过，这些路口为什么要造环岛？没有环岛，行车面积不就更大了吗？

![](https://cdn.beekka.com/blogimg/asset/202310/bg2023102603.webp)

本质上，环岛上是一种交通控制措施，相比交通灯控制的传统交叉路口，它们具有多种优势，最重要的一个是安全性。

首先，环岛迫使司机放慢速度，为了调整车头方向，司机不得降速。

其次，环岛减少了潜在冲突点的数量。冲突点就是车辆与车辆、车辆与行人可能发生碰撞的位置，它的数量越多，就越容易发生碰撞。

根据一项研究，环岛只有8个潜在冲突点，而传统的四向交叉路口有32个。

最后，环岛的车道都是紧密相邻的同心圆，并且还有很多进口和出口，迫使车辆减速让行。

根据美国公路管理局估计，环岛取代传统的交叉路口时，可将严重交通事故减少80%到90%。

除了安全性，环岛还有一些其他优点，比如让交通更有秩序，不会出现车辆在交叉路口乱成一团的情形，也能让司机更轻松地掉头。

## 言论

1、

马斯克的管理风格非常独特，他不需要非技术性的中层管理人员，员工表现不佳就会被裁，也不喜欢大型会议。

-- [前特斯拉 AI 总监安德烈·卡帕西](https://finance.sina.cn/7x24/2024-03-30/detail-inaqasmq1380352.d.html)

2、

有一种开发模式，叫做“头条新闻驱动法”，将项目分解成一个个头条新闻。

选择一个日期，可以发布第一个头条新闻，然后拼命工作在该日期发布，接着转到下一个头条新闻，重复上面的过程。

-- [《头条新闻驱动法》](https://www.spakhm.com/headline-development)

3、

我们有一栋房子的 WiFi，只在下雨时可用。后来，我发现了原因。

它的 WiFi 是通过桥接器连接另一栋房子的 WiFi，窗外的树长高了，挡住了对面房子的信号。下雨时，雨水压低了树叶，信号就又通了。

-- [《WiFi 在下雨时可用》](https://predr.ag/blog/wifi-only-works-when-its-raining/)

4、

每年冬天，室内供暖消耗大量能源。如果我们能够发明更舒适、更保暖的保暖内衣，就可以减少能源消耗，同时不牺牲轻便感。保暖内衣允许我们大幅调低供暖温度，并且成本几乎为零。

-- [《先保暖身体，再保暖房间》](https://solar.lowtechmagazine.com/2011/02/insulation-first-the-body-then-the-home/)

5、

节省几次击键的工具被高估了，保持注意力专注的工具被低估了。

-- [《小型自动化》](https://www.johndcook.com/blog/2023/01/29/small-scale-automation/)

## 往年回顾

[最成功的软件企业家](https://www.ruanyifeng.com/blog/2023/04/weekly-issue-249.html)（2023 #249）

[俄罗斯的 HTTPS 证书问题](https://www.ruanyifeng.com/blog/2022/03/weekly-issue-199.html)（2022 #199）

[新能源汽车，谁会是赢家？](https://www.ruanyifeng.com/blog/2021/03/weekly-issue-149.html)（2021 #149）

[疫情导致的研究生扩招](https://www.ruanyifeng.com/blog/2020/03/weekly-issue-99.html)（2020 #99）

（完）

