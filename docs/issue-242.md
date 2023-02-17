# 科技爱好者周刊（第 242 期）：一次尴尬的服务器被黑

这里记录每周值得分享的科技内容，周五发布。

本杂志[开源](https://github.com/ruanyf/weekly)，欢迎[投稿](https://github.com/ruanyf/weekly/issues)。周刊另有[《谁在招人》](https://github.com/ruanyf/weekly/issues/2827)服务，发布程序员招聘信息。合作推广请[邮件联系](mailto:yifeng.ruan@gmail.com)（yifeng.ruan@gmail.com）。

## 封面图

![](https://cdn.beekka.com/blogimg/asset/202302/bg2023021201.webp)

上图是2022年世界旅行类摄影师比赛的获奖者。Najin 是非洲中部仅存的两头白犀牛之一，已经33岁了，为了保护它不被偷猎者杀害，肯尼亚政府专门为它安排了守卫。他们形影不离，中午一起在非洲大草原上休息。（[via](https://www.tpoty.com/galleries/2022-winners/)）

## 本周话题：一次尴尬的服务器被黑

本周一凌晨（2月13日），我的个人网站服务器被黑了。

由于入侵者没有触发报警机制，我也没察觉。一觉醒过来，看到好多网友的邮件，让我快去看看网站，访问任何一个网页，都会跳转到 xxx 的外部网址，令人极度尴尬。

![](https://cdn.beekka.com/blogimg/asset/202302/bg2023021505.webp)

我查了一下服务器，发现果然如此。事态很严重，**对方拿到了网页目录的写入权限**，将我的所有 HTML 网页都删除了原始内容，写入了他的跳转代码`window.onload="..."`。

但是，数据库没有遭到破坏，加上没有 SSH 的异常登录报警，因此我判断，对方没有拿到服务器的登录权限，只是利用了 Web 服务的漏洞。

我的第一感觉不是恐慌，也不是愤怒，而是无奈。担心已久的事情，终于发生了。

很多朋友知道，我的个人网站至少有10年没有修改过样式了。不是不想改，而是没法改，或者说改起来很麻烦。

![](https://cdn.beekka.com/blogimg/asset/202302/bg2023021506.webp)

原因是我的后台软件采用了早期著名博客软件 MovableType，它的历史比 WordPress 还要悠久。后者已经是老古董了，你就知道它有多老了。当然，这说明我也老了，当年选择它的时候，我还是学生。

MovableType 早就停止发展了，转让给了一个日本公司，所有用户都要缴费，才能收到代码补丁。我没缴费，所以我的个人网站的后台早就老化了。

软件老化本身不是大问题，只要还能正常运行，并且你也不需要新功能，那么就能平安无事地过下去。真正的问题是它的依赖都过时了。

它依赖的底层系统和组件，都严重过时。我试过把它迁移到新系统，结果各种报错，不得不一直运行在很老的系统上。

我一直知道老系统不安全，但是又不敢升级。担心的事情最终还是爆发了。

![](https://cdn.beekka.com/blogimg/asset/202302/bg2023021507.webp)

前两年，我已经被攻击过一次，当时心存侥幸，只做了一些服务器加固，还是没升级，直到现在。

这次被攻击，我就想如法炮制。网站有定期快照，被黑后，我回滚到最近一次快照，又改了一些服务器设置，星期一中午就把网站恢复上线了，心想最好这次也能蒙混过关。

但是，对方大概一直在线盯着我，上线一小时之内，又被一模一样地黑了。

这时，我知道大事不好，只能将网站再次下线。好在上次被攻击时，我做过一个临时公告页面，这次还能用，把域名指向它即可。

![](https://cdn.beekka.com/blogimg/asset/202302/bg2023021508.webp)

此后整整一天，我一筹莫展，做好了最坏打算，个人网站可能要长时间下线。在此期间，只能通过临时页面发布内容。

到了星期二下午，我越想越憋气，最后还是不死心，一咬牙决定升级服务器，死马当作活马医。

我一口气把底层系统和依赖组件，都升级到了最近的版本，整整装了一个多小时。这次很神奇，网站没有奇怪的报错，居然能正常运行。惊喜之余，我就把网站恢复上线了，到目前为止都是正常的。

说实话，我不肯定漏洞已经被修复了。如果接下来，服务器再次被黑，我就没辙了，只能长时间下线网站了，然后加快原本就打算今年要做的事情：自己重写博客架构，改成彻底的静态网站。

这次的教训有很多，如果大家也想做一个独立博客，我有两点建议。

**（1）不要自己管理服务器。** 服务器管理是一个非常繁琐的专门工种，如果不是专业的运维工程师，很难做好。退一步说，即使你拥有这方面的专业知识，也不值得把大量时间和精力投入在自己的博客服务器上。网络世界是一个黑暗森林，到处都有人向你打冷枪，防不胜防，解决方法就下一条。

**（2）使用专业的云服务商。** 现在大部分云服务器商，都有静态网站托管服务，把静态网页托管在它们那里，省时省心。如果你需要后端动态生成内容，那就使用云函数（叫做 FaaS），通过服务商提供的边缘计算、而不是你的主机自带的 CPU 算力。

## 科技动态

1、[老飞机的模拟飞行](https://www.yystv.cn/p/10140)

微软公司有一款著名的游戏《微软模拟飞行》，玩家可以模拟操纵各种飞机，在世界各地实景飞行，效果非常逼真。

![](https://cdn.beekka.com/blogimg/asset/202212/bg2022120103.webp)

游戏制作团队最近盯上了博物馆里面的老飞机，其中就有著名的休斯 H-4 大力神巨型水上运输机。

这是有史以来最大的飞机，跟足球场差不多大小。它只在1947年飞行过一次，短暂脱离水面数十秒，然后就放在仓库里，直到报废后移入博物馆。

![](https://cdn.beekka.com/blogimg/asset/202212/bg2022120104.webp)

![](https://cdn.beekka.com/blogimg/asset/202212/bg2022120105.webp)

微软公司把这架飞机搬入了游戏，玩家现在可以模拟驾驶它，体验一下这架传奇飞机的驾驶感受。下图就是游戏画面。

![](https://cdn.beekka.com/blogimg/asset/202212/bg2022120106.webp)

制作团队下一步准备把更多的老飞机搬入游戏，“复活”那些再也不可能上天的飞机。目前，已经完成了大约300架老飞机的扫描。

2、[迪斯尼的年龄调整算法](https://gizmodo.com/whats-next-arecibo-observatory-collapse-2-years-later-1849836610)

迪斯尼公司发布了一个影视专用的年龄调整算法，可以让演员变得更年轻或更年老。

![](https://cdn.beekka.com/blogimg/asset/202212/bg2022120205.webp)

这种算法可以让老年演员扮演年轻人，反之亦然。

![](https://cdn.beekka.com/blogimg/asset/202212/bg2022120206.webp)

现在的观众必须明白，你看到的一切都可能是假的。相貌可以美颜，年龄可以加减，背景可以绿幕，没有什么是做不到的。

3、[儿童游乐场](https://www.core77.com/posts/117655/Artist-and-Structural-Engineer-Designs-Risky-Playground)

儿童游乐场通常都是一些传统设施，比如滑梯、秋千、双杠、跷跷板等。

一位新西兰建筑师认为，这些设施都没有乐趣，模仿大自然的环境才是更好的选择。

![](https://cdn.beekka.com/blogimg/asset/202212/bg2022120207.webp)

他就设计了一个类似野外环境的儿童游乐场。

![](https://cdn.beekka.com/blogimg/asset/202212/bg2022120208.webp)

游乐设施都搭建在巨石之上，但其实没有看起来那么危险，巨石都由钢棒进行固定，地面采用有弹性的橡胶地板，不会摔伤。

![](https://cdn.beekka.com/blogimg/asset/202212/bg2022120209.webp)

开张一个月以来，孩子们很爱玩，没有人受伤。

![](https://cdn.beekka.com/blogimg/asset/202212/bg2022120210.webp)

4、[智能绷带](https://www.inverse.com/innovation/self-healing-bandage-wireless)

传统绷带无法知道伤口愈合情况，有时解开绷带，才发现药物无效，伤口还在溃烂。

为了解决这个问题，一个国际研究团队开发了智能绷带。

![](https://cdn.beekka.com/blogimg/asset/202212/bg2022120803.webp)

这种智能绷带采用超薄、可弯曲的电路板，会自动侦测伤口愈合程度，根据细菌的繁殖情况释放抗生素或其他药物。

它带有无线模块传送数据，为了轻薄，它不带有电池，通过天线接收能量。

![](https://cdn.beekka.com/blogimg/asset/202212/bg2022120802.webp)

## 文章

1、[Next、Nuxt、Nest的区别](https://www.twilio.com/blog/comparing-nextjs-nestjs-nuxt-gatsby)（英文）

![](https://cdn.beekka.com/blogimg/asset/202212/bg2022121802.webp)

Next.js、Nuxt、NestJS 是三个流行的 JS 框架，本文解释它们的区别。

2、[为什么业界转向内存安全语言](https://www.darkreading.com/application-security/shift-memory-safe-languages-gains-momentum)（英文）

![](https://cdn.beekka.com/blogimg/asset/202212/bg2022121002.webp)

本文介绍大公司使用内存安全语言（Java、Rust 和 Kotlin）替代 C/C++ 的情况。

3、[如何使用 360 相机生成航拍图像？](https://jakecoppinger.com/2022/12/creating-aerial-imagery-with-a-bike-helmet-camera-and-opendronemap/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202212/bg2022121201.webp)

作者介绍如何使用 OpenDroneMap 这个软件，为 360 相机拍摄的视频建模，合成为航拍视角的空间图像模型。

4、[打造我的家庭办公环境](https://arun.is/blog/desk-setup/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202210/bg2022103007.webp)

作者详细介绍，自己怎么在家里布置一个舒适的电脑工作环境。

5、[我如何以 SerenityOS 谋生](https://awesomekling.github.io/How-I-make-a-living-working-on-SerenityOS/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202210/bg2022103102.webp)

作者是开源软件 SerenityOS 的作者，2021年开始，全职投入开源开发。他介绍自己怎么谋生。

6、[我的个人 IT 基础设施](https://writings.stephenwolfram.com/2019/02/seeking-the-productive-life-some-details-of-my-personal-infrastructure/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202211/bg2022110301.webp)

Mathematica 软件的创始人 Stephen Wolfram 介绍自己家里的 IT 基础设置，他常年在家办公。

他还自制了一个“步行桌”（上图），可以在散步的时候，使用笔记本电脑。

7、[Playwright 如何绕过登录验证码](https://blog.checklyhq.com/how-to-bypass-totp-based-2fa-login-flows-with-playwright/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202212/bg2022121604.webp)

Playwright 是一个无头浏览器框架，可以编写脚本，对网站 UI 进行自动化测试。有些网站的登录，需要身份验证器的一次性验证码，怎么绕过去呢？

8、[使用 Ruby 语言理解网络堆栈](https://medium.com/geckoboard-under-the-hood/how-to-build-a-network-stack-in-ruby-f73aeb1b661b)（英文）

本文使用 Ruby 语言示例，解释网络基本概念。第一部分解释 UDP 协议，写得很好。

## 工具

1、[Convex](https://www.convex.dev/)

![](https://cdn.beekka.com/blogimg/asset/202206/bg2022062210.webp)

一个类似 Firebase 的状态管理服务，前端状态可以存在它的服务器上，然后你的所有客户端都可以得到状态的实时更新。

2、[兔年定制头像](https://www.xiaoli.vip/rabbit/)

![](https://cdn.beekka.com/blogimg/asset/202302/bg2023021101.webp)

上传照片，合成一张兔年头像，多种样式可选，代码[开源](https://github.com/xiaoli1999/custom-rabbitImage)。（[@xiaoli1999](https://github.com/ruanyf/weekly/issues/2898) 投稿）

3、[ElasticView](https://github.com/1340691923/ElasticView)

![](https://cdn.beekka.com/blogimg/asset/202302/bg2023021202.webp)

一款 ElasticSearch 的桌面客户端，用来监控 ES 状态和操作。（ [@lin2415016](https://github.com/ruanyf/weekly/issues/2887) 投稿）

4、[RATH](https://github.com/Kanaries/Rath)

![](https://cdn.beekka.com/blogimg/asset/202302/bg2023021204.webp)

开源的数据分析和数据可视化工具，只需要导入数据，它自动进行数据分析，找出规律，生成可视化视图。（[@AntoineYANG](https://github.com/ruanyf/weekly/issues/2892) 投稿）

5、[tl-rtc-file-tool](https://im.iamtsm.cn/)

![](https://cdn.beekka.com/blogimg/asset/202302/bg2023021205.webp)

一个 Web 应用，演示了基于 WebRTC 的各种媒体流传输功能，代码[开源](https://github.com/iamtsm/tl-rtc-file)。（[@iamtsm](https://github.com/ruanyf/weekly/issues/2893) 投稿）

6、[EasyNode](https://github.com/chaos-zhu/easynode)

![](https://cdn.beekka.com/blogimg/asset/202302/bg2023021206.webp)

简易的个人 Linux 服务器管理面板（基于Node.js），前后端都开源。（[@chaos-zhu](https://github.com/ruanyf/weekly/issues/2897) 投稿）

7、[vscode-gptcommit](https://github.com/pwwang/vscode-gptcommit)

VS Code 插件，使用 GPT 模型自动生成 Git 提交说明。（[@pwwang](https://github.com/ruanyf/weekly/issues/2890) 投稿）

8、[Tweek Calendar](https://tweek.so/)

![](https://cdn.beekka.com/blogimg/asset/202211/bg2022111904.webp)

一个最简化的任务管理 Web App，非常简洁精美。

9、[BetterDisplay](https://github.com/waydabber/BetterDisplay)

![](https://cdn.beekka.com/blogimg/asset/202211/bg2022111905.webp)

一个开源的 MacOS 应用，可以精细调节苹果电脑的各种显示参数。

10、[berty](https://berty.tech/)

![](https://cdn.beekka.com/blogimg/asset/202211/bg2022112201.webp)

一个群聊应用，最大特点就是不需要互联网，通过低功耗蓝牙通信，很适合小范围内的现场广播。

## 资源

1、[Mastering Bitcoin](https://github.com/bitcoinbook/bitcoinbook)（第二版）

![](https://cdn.beekka.com/blogimg/asset/202206/bg2022062303.webp)

免费的英文电子书，介绍加密货币的原理。

2、[satellite-track](https://jiangteng2019.github.io/satellite-track/)

![](https://cdn.beekka.com/blogimg/asset/202302/bg2023021203.webp)

基于 Web 的卫星轨道可视化项目，可以查看不同类别的卫星，代码[开源](https://github.com/jiangteng2019/satellite-track)。（[@jiangteng2019](https://github.com/ruanyf/weekly/issues/2888) 投稿）

3、[tabler-icons](https://tabler-icons.io/)

![](https://cdn.beekka.com/blogimg/asset/220204/bg2022042302.webp)

这个网站提供免费的图标，目前有1900多个，所有图标都是统一风格，简单美观。

4、[Some Assembly Required](https://github.com/hackclub/some-assembly-required)

![](https://cdn.beekka.com/blogimg/asset/202206/bg2022062905.webp)

一份图文并茂的汇编语言英文介绍，针对零基础的初学者，半小时可以读完，并附有代码示例，以便进一步学习。

5、[快速涂鸦](https://quickdraw.withgoogle.com/)

![](https://cdn.beekka.com/blogimg/asset/202206/bg2022063003.webp)

一个谷歌推出的小游戏。系统告诉你一个词语（比如自行车、眼镜、轮船……），让你在网页上把它画出来。人工智能会猜测你画的是什么，只要猜对了，就说明你画得很像。

## 图片

1、[奥尔梅克头像](https://www.miamighostchronicles.com/stranger-than-fiction/the-olmec-mystery)

1930年代，危地马拉发现了埋在地下的巨大头像，高度都在2米到3米。

![](https://cdn.beekka.com/blogimg/asset/202209/bg2022090505.webp)

考古学家认为，它们是古代奥尔梅克人制作的，时间大约距今3000年到5000年之前。

![](https://cdn.beekka.com/blogimg/asset/202209/bg2022090506.webp)

经过几十年的发掘，目前一共发现17个头像，现在都陈列在[博物馆](https://en.wikipedia.org/wiki/Olmec_colossal_heads)。

![](https://cdn.beekka.com/blogimg/asset/202209/bg2022090507.webp)

![](https://cdn.beekka.com/blogimg/asset/202209/bg2022090508.webp)

## 文摘

1、[苹果收购 NeXT 的往事](https://blog.hayman.net/blog/2021/12/20/apple-next-25-years-ago-today/)

二十五年前的1996年12月20日，我在 NeXT 公司担任系统工程师。该公司是乔布斯在1985年创立的，我是该公司在加拿大仅有的三名员工之一。

![](https://cdn.beekka.com/blogimg/asset/202302/bg2023021501.webp)

当时我们都没有手机，公司给我们的大多数信息都通过一个叫做 Audix 的语音邮件系统传送。我们接受消息时，就拨打 1-800-345-5588 这个号码，收听语音邮箱里面的公司留言。

![](https://cdn.beekka.com/blogimg/asset/202302/bg2023021502.webp)

那天，我们突然收到了一条紧急消息，所有员工都必须在下午2点拨打这个号码，要公布一个重大事件。当时我正在街上，不得不到处寻找一个可靠的固定电话，最后找到了一个博物馆的付费电话。

到了下午2点，我们被告知 NeXT 已被苹果公司以4亿美元的价格收购。（事后回想，正确的说法应该是苹果付给 NeXT 4亿美元，让后者去收购自己。几年后，大约70%的苹果副总裁都来自 NeXT。）

我震惊了，没想到事情会这样。

![](https://cdn.beekka.com/blogimg/asset/202112/bg2021122204.webp)

当时，NeXT 公司其实很困难。创始人乔布斯似乎把所有的时间，都花在他的另一家公司 Pixar。虽然 NeXT 还有一些盈利，但主要来自销售 WebObjects（一个 Java 应用服务器）。乔布斯对外宣称的革命性新工作站和操作系统都实现不了，现在他只能靠销售价格为5万美元企业服务器软件维持公司，这一定让他感到很沮丧。

![](https://cdn.beekka.com/blogimg/asset/202302/bg2023021503.webp)

苹果公司似乎也陷入了死亡漩涡，并且已经非常接近资金枯竭。

苹果最感兴趣的是 NeXT 的 NeXTSTEP 操作系统，该操作系统最初与 NeXT 工作站一起提供，但已被移植到英特尔 CPU。说实话，我们在 NeXT 的人其实不怎么用这个系统。

![](https://cdn.beekka.com/blogimg/asset/202302/bg2023021504.webp)

NeXT 的每个人都不清楚这次合并是否会奏效，好在结果很不错。合并发生在苹果的历史低点，一旦乔布斯重新担任苹果 CEO，一场难以置信的技术和业务转变就开始发生了。

NeXT 的软件和硬件成为苹果一切产品的基础。NeXTSTEP 操作系统替代了 Mac OS，成为了 Mac OS X 的基础；NeXT 的 Project Builder 和 Interface Builder 变成了 Xcode；NeXT 对 Objective-C 语言的热爱最终创造了 Swift。

合并时，NeXT 大约有 400 名员工，而苹果只有几千人。今天，苹果有16万员工，我很好奇多少 NeXT 工作人员还留在苹果，我知道十几个，可能还有更多，会到100人吗？

## 言论

1、

我是 React 用户，最让我烦恼的是，React 团队对开发者面对的实际问题，似乎一无所知，只关注一些不那么重要的事情。

他们设计了很多新的做法（比如事件处理、数据获取等等），确实可以更快地加载网页。但是让开发者关注这些东西，对于高级用途来说，这是完全错误的。

-- [《拯救 React》](https://acko.net/blog/get-in-zoomer-we-re-saving-react/)

2、

领导者的作用不是行使权力，而是分配权力。

有效的领导者通过设定方向、确定人员（找到具有正确技能和背景的人）、授权他人、确保决策执行，来节省自己的时间，并扩大自己的影响。

-- [《我的创业箴言》](https://hackernoon.com/optimize-for-alignment-not-control-great-leaders-serve-and-more-startup-mantras)

3、

在程序员心中，他们认为自己是建筑师。当他们来到一个新地方，他们想做的第一件事就是推平这个地方，并建造一些宏伟的东西。

程序员对渐进式翻新不感兴趣：修修补补、改进、在花坛种上绿植……他们不想做这些事，他们总是想扔掉旧代码并重新开始，原因并非是认为旧代码一团糟，而是编程的一个基本法则：阅读代码比编写代码更难。

-- [Joel Spolsky](https://www.devshirt.club/developer-shirt/its-harder-to-read-code-than-to-write-it)

4、

开发 Chrome 浏览器时，有一次我们讨论，应该允许网页重定向多少次。有人提出设为10次，超过这个数字，Chrome 就会放弃加载网页。然后，另一个人说不行，必须设为30次，否则《纽约时报》网站就会停止工作。于是，Chrome 的重定向上限就是30次。

-- [《我在 Chrome 团队的10年》](https://neugierig.org/software/blog/2022/12/chrome.html)

5、

曾经有一段时间，成为一名全栈开发人员是可能的，可以做到对中等复杂系统的每一层都有很好的熟悉度。

但是，今天的系统涉及太多的组件，想要掌握每个堆栈的每个组件，是不切实际的。正如一位开发者所说：“程序员现在不得不在数百个 API 之间充当某种巨大的手动管理层。”

-- [《更快的马》](https://redmonk.com/sogrady/2022/12/09/faster-horse/)
## 历史上的本周

[你做过不在乎结果的项目吗？](https://www.ruanyifeng.com/blog/2022/02/weekly-issue-195.html)（2022 No.195）

[大家不出门，经济怎么办？](https://www.ruanyifeng.com/blog/2021/02/weekly-issue-145.html)（2021 No.145）

[漫游类的游戏，将会越来越多](https://www.ruanyifeng.com/blog/2020/02/weekly-issue-93.html)（2020  No.93）

[一篇好玩的论文](https://www.ruanyifeng.com/blog/2019/02/weekly-issue-43.html)（2019 No.43）

## 鸣谢

周刊得到国内新一代知识管理与协作平台 [FlowUs](https://flowus.cn?promotionChannel=GW_RYF_01) 的帮助，深表感谢。

[FlowUS](https://flowus.cn?promotionChannel=GW_RYF_01)  = 文档 + 表格 + 网盘。你可以用它写文档、做主页、管理数据、存储文件等等。

每一期周刊同时发布在[ FlowUs 专栏](https://ruanyf-weekly.flowus.cn/?code=FLOWUS&promotionChannel=WX_RYF_00)，欢迎大家也去开通自己的专栏和主页。

![](https://cdn.beekka.com/blogimg/asset/202207/bg2022072108.webp)

（完）

