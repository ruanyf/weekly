# 科技爱好者周刊（第 173 期）：网络收音机的设计

这里记录每周值得分享的科技内容，周五发布。

本杂志开源（GitHub: [ruanyf/weekly](https://github.com/ruanyf/weekly)），欢迎提交 issue，投稿或推荐科技内容。

周刊讨论区的帖子[《谁在招人？》](https://github.com/ruanyf/weekly/issues/1870)，提供大量程序员就业信息，欢迎访问或发布工作/实习岗位。

## 封面图

![](https://cdn.beekka.com/blogimg/asset/202108/bg2021082619.jpg)

上海的很多老小区，由于历史原因，有很多密密麻麻的架空电线，非常影响美观。江阴路今年的社区更新，尝试将架空线包裹进入人造的绿色藤蔓。（[via](http://n.eastday.com/palbum/1629955396017452)）

## 本周话题：网络收音机的设计

最近，我为家里的老人买了一台网络收音机。

老人的年纪很大（超过85岁），完全不懂互联网，操作智能手机会经常点错地方，不知道怎么恢复。平时唯一的消遣就是看电视，其实根本不爱看，但没有别的娱乐。这样的老人家在互联网时代非常弱势，但是人数还不少，我们国家搞不好有一两个亿。

![](https://cdn.beekka.com/blogimg/asset/202108/bg2021082413.jpg)

我希望，找到一台网络收音机，能够接收网络节目，帮老人丰富生活、了解外界。我的要求是，操作越简单越好，不懂互联网的人也可以毫无困难地上手。

大家不妨想一想，如果你是设计师，会怎么设计这个产品？下面这样全触摸式的网络收音机，适合老人吗？

![](https://cdn.beekka.com/blogimg/asset/202108/bg2021082414.jpg)

我在网上还真的找到这样一个产品，立刻下单。前几天收到实物以后，发现比我想像的更好，基本上完全满足了我的需求，忍不住要在这里谈一谈。

下面不是为它做广告，纯粹只是以它为例，讨论针对老年用户的电子产品，应该怎么设计。

![](https://cdn.beekka.com/blogimg/asset/202108/bg2021082415.jpg)

![](https://cdn.beekka.com/blogimg/asset/202108/bg2021082416.jpg)

我觉得，这个网络收音机真的是为老年人设计的，设计师用心了，把老年人不需要的功能都砍掉了，让产品变得尽量简单。

我特别赞赏的有三个地方。

（1）它直接连接喜马拉雅的节目库，不需要任何登陆或认证，打开就直接播放，用户感知不到喜马拉雅的存在。

设想一下，如果需要切换网址或者节目源，老人能理解这种操作吗？

（2）音量控制是旋钮，而不是手机常用的按键。

这一点特别赞。旋钮是机械装置，容易坏，但是手感好、体积大、容易操作，符合直觉。如果能把电源开关也做进旋钮，就更好了。

![](https://cdn.beekka.com/blogimg/asset/202108/bg2021082417.jpg)

我在推特上发了照片以后，有个网友说，虽然“硬件的软件化”是趋势，但是对于老年用户，“软件功能的硬件化”才是正确方式。各种软件设置做成硬件开关，一拨就开，一拧就关，对老年人更友好。

（3）这个机器不支持 WIFI，内置 4G SIM 卡，只能用无线流量上网。很多朋友认为这是缺点，我不这样看，反而觉得这是很大的优点。

虽然多了 4G 的后期充值成本，需要小辈帮忙每年在手机上为老人买流量，但是相比 WIFI 还是简单多了。选择 WIFI 网络，输入密码，对老人并不容易，很多老人根本不理解 WIFI 是什么。另外，如何为收音机提供 WIFI 密码的输入键盘，也是很大的难题。

默认使用 4G 信号，上面的这些复杂性就都不存在了，网络节目就像电台广播一样，打开就能听，走到哪里都有信号，室外也能用。

（4）当然，它也有可以改进的地方。比如，所有按钮的说明文字，都应该是中文，而不像现在这样，有的是中文，有的是英文，有的是图标。

总之，这个网络收音机是一个很好的例子： **放弃次要功能，换来产品的简单性，从而达到更好的用户满意度，** 这就是软件设计名言[“less is more, worse is better”](https://en.wikipedia.org/wiki/Worse_is_better)的意思吧。

![](https://cdn.beekka.com/blogimg/asset/202108/bg2021082618.jpg)

## 《Vue、React 通用架构》公开课

现在大部分学习前端开发的同学，往往只对一个框架比较熟悉，Vue 和 React 里面，选择一个进行专研。

但是，应聘和实际工作中，很可能会遇到另一个框架。因为大厂内部的实际情况是，两大框架都有大量应用，取决于不同团队的技术选型。

![](https://cdn.beekka.com/blogimg/asset/202108/bg2021082608.jpg)

如果你比较熟悉 Vue，却遇到了 React 项目，或者说，你是代码库的作者，需要同时支持 Vue 和 React。这时，有没有一种简单的方法，可以将一个框架的代码移植到另一个框架呢？

回答是有的，我们可以找到一种通用的代码架构，同时适应 Vue 和 React，实现最大程度的代码复用。

![](https://cdn.beekka.com/blogimg/asset/202108/bg2021082611.jpg)  

本周有一个公开课《React、Vue 架构和风格统一》，就是研究这个问题： **Vue 和 React 之间如何实现代码的移植。** 内容很适合扩宽思维，帮助一种框架的学习者，快速进入另一种框架。

讲课时间是8月29日（本周日）晚上8点，有空的话，欢迎来听课。主讲老师为前阿里 P8 的全栈架构师，曾经主导开发过用户过亿的前端项目。他会重点讲解下面的问题：

> - Vue 和 React 只会一个，如何快速上手另一个？
> - 如何做到 Vue 和 React 代码最大程度复用？
> - 大厂同时使用 Vue 和 React，是如何统一标准按质交付的？

![](https://cdn.beekka.com/blogimg/asset/202108/bg2021082610.jpg)

听课的同学，还可以获赠“开课吧”提供的另外两门视频教程：《深入理解 Flutter 编程的 Dart 语言》和《P8 大牛带你了解不同前端的薪资差异》，为跳槽加薪做准备。

![](https://cdn.beekka.com/blogimg/asset/202108/bg2021082612.jpg)

微信扫描上方二维码，就可以 0 元报名。周日晚上8点，欢迎来听课。

## 科技动态

1、[空中太阳能发电](https://mp.weixin.qq.com/s/euKVL7gllNQO0IaTMzSJJg)

地面的太阳能发电，会受到云、雾、雨、雪的天气影响，它们挡掉大部分太阳光，使得光照时间和光照强度大打折扣。科学家很早就设想，能不能把太阳能板架设到高空？

![](https://cdn.beekka.com/blogimg/asset/202108/bg2021080907.jpg)

2021年6月，重庆大学等单位开始在重庆市建设一个空间太阳能实验站，尝试将太阳能板放在一个浮动平台上，升到50~300米的空中，进行太阳能发电。如果实验成功，下一步将把太阳能板架设到距离地面22公里的平流层。

![](https://cdn.beekka.com/blogimg/asset/202108/bg2021080908.jpg)

根据设想，这个浮动平台有多个半球面的聚光装置，将太阳光汇集到一个聚光区，通过光伏电池产生直流电，随后转成微波，将能量传输回地面。

2、[Facebook 虚拟会议软件](https://www.axios.com/facebook-vr-zuckerberg-meetings-7b8b78fb-5345-42a6-a338-2abe19079c9d.html)

Facebook 公司推出虚拟会议软件 Horizo​​n Workrooms，将虚拟会议提升到一个新的境界。

![](https://cdn.beekka.com/blogimg/asset/202108/bg2021082101.jpg)

只要用户戴上 VR 头盔，打开软件，就会进入一间虚拟会议室。软件会自动为你的分身配上脸部动作和表情，同时使用 VR 头盔的摄像头，捕捉你双手的动作，让软件里面的分身也做出同样的动作。

比如，如果你在打字，虚拟空间里面也会显示你的分身在打字。

![](https://cdn.beekka.com/blogimg/asset/202108/bg2021082102.jpg)

与会者可以在虚拟白板上进行协作，也可以共享照片、文档和电脑屏幕。Facebook 放出了马克·扎克伯格虚拟会议的[演示视频](https://v.qq.com/x/page/f3269m4u87c.html)，他的表情和双手的动作，以及背后白板上的板书，令人印象深刻。

<iframe frameborder="0" src="https://v.qq.com/txp/iframe/player.html?vid=f3269m4u87c" allowFullScreen="true" width="600" height="400"></iframe>

3、[电子驾照](http://china.qianlong.com/2021/0820/6179805.shtml)

![](https://cdn.beekka.com/blogimg/asset/202108/bg2021082303.jpg)

今年9月1日开始，公安部在全国28个城市，全面推行电子驾照，效力与纸质驾照完全相同。电子驾照通过“交管12123”APP发放，领取后只要携带手机，就不需要携带纸质驾照了。

电子驾照下方还有实时生成的二维码和条形码信息，交警通过扫描二维码，能够快速获取车主的身份证信息和车辆登记信息。

4、[水稻生长周期减半](http://news.sciencenet.cn/htmlnews/2021/8/463517.shtm)

![](https://cdn.beekka.com/blogimg/asset/202108/bg2021082411.jpg)

中国农业科学院植物工厂团队宣布，在室内环境中，水稻的生长周期可以缩短一半，从传统大田环境下120天以上减少到60天左右。这意味着，每过两个月，水稻就可以丰收一次。

目前，国内水稻普遍是每年生长1～2代，海南的热带环境可以生长3代。

![](https://cdn.beekka.com/blogimg/asset/202108/bg2021082412.jpg)

本次实验使用定制光谱的 LED 灯（发光二极管）为水稻提供光照，并用营养液供给养分，光照、温度、湿度、CO2 浓度等都受到精准调控。

报道没有透露，这种室内水稻的成本比传统水稻高多少，普通人是否吃得起这种大米。

5、[VR 透视头盔](https://www.sohu.com/a/481676198_255990)

随着头戴显示装置越来越普及，逐渐浮现出一个问题。戴头盔的人可以看到外部，但是外部的人无法看到戴头盔者的脸，双方无法进行面对面的交流。

Facebook 的研究人员想出了一个解决方法，就是在头盔外部的眼睛位置，放置显示屏，实时展示戴头盔者的眼部表情和动作。未来，人们有可能彼此戴着头盔，当面交流。

![](https://cdn.beekka.com/blogimg/asset/202108/bg2021080905.jpg)

![](https://cdn.beekka.com/blogimg/asset/202108/bg2021080906.jpg)

6、[线圈枪](https://www.thefirearmblog.com/blog/2021/08/05/arcflash-labs-gr-1-anvil/)

![](https://cdn.beekka.com/blogimg/asset/202108/bg2021080705.jpg)

一家美国公司宣布，发售世界上第一把手持线圈枪。这种枪的子弹不依靠火药引发的气体爆炸获得动能，而是通过电磁线圈的加速，将一颗小铁丸加速到极高的速度，从而达到子弹的杀伤效果。

该枪的预售价格为 3,375.00 美元，充电器需要另外购置。

![](https://cdn.beekka.com/blogimg/asset/202108/bg2021080706.jpg)

7、[图片验证码专利](https://www.eff.org/deeplinks/2021/08/captcha-patent-all-american-nightmare)

最近，一家美国小公司声称，谷歌的图片验证码系统 reCAPTCHA（下图）侵犯了该公司的专利，任何使用该系统的网站必须向它缴纳专利使用费。

![](https://cdn.beekka.com/blogimg/asset/202108/bg2021080711.jpg)

这家公司说，早在2008年，它就为通过识别图片、确认真实用户这个想法申请了专利（下图）。

![](https://cdn.beekka.com/blogimg/asset/202108/bg2021080712.jpg)

抛开这个专利是否有效不谈，这里的关键问题是，单单一个概念或者一种用法，是否可以申请专利？如果有人为一个想法申请了专利，别人是否就不能再去实现这个想法了？

## 文章

1、[电源管理芯片为什么难造？](https://finance.sina.com.cn/chanjing/cyxw/2021-07-29/doc-ikqciyzk8373189.shtml)（中文）

![](https://cdn.beekka.com/blogimg/asset/202108/bg2021080910.jpg)

随着充电协议越来越复杂，只要是电子产品，都需要电源管理芯片。本文介绍电源管理芯片市场目前的状况，以及为什么大部分市场份额都被国外几家大公司掌握。

2、[如何评价中国自主知识产权的“.chn”域名？](https://www.zhihu.com/question/324843186)（中文）

![](https://cdn.beekka.com/blogimg/asset/202108/bg2021081707.jpg)

这是知乎的一个讨论帖，2019年一家中国公司宣布，推出自主知识产权的“.chn”顶级域名，根域名服务器不再受制于人，并开放购买注册。

但是，该域名没有得到 ICANN、CNNIC 的承认，浏览器无法访问，必须修改 hosts 文件才可以。

3、[man 命令的奇怪输出](https://unix.stackexchange.com/questions/405783/why-does-man-print-gimme-gimme-gimme-at-0030)（英文）

![](https://cdn.beekka.com/blogimg/asset/202107/bg2021073002.jpg)

有人发现，如果在半夜 00:30 分执行`man`命令，会得到一条奇怪的报错信息“gimme gimme gimme”。

他在网上提问：有人知道这是怎么回事吗？

4、[CSS 检测支持悬停的设备](https://css-irl.info/detecting-hover-capable-devices/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202107/bg2021071607.jpg)

鼠标有悬停（hover）事件，移动设备由于不使用鼠标，自然就没有这个动作。因此就可以通过它判断，用户是否正在使用移动设备。

本文介绍如何使用 CSS 来侦测支持悬停事件的设备，并可以设置特殊的样式。

5、[SameSite cookie 的现状](https://simonwillison.net/2021/Aug/3/samesite/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202108/bg2021080704.jpg)

目前，所有主流浏览器都支持 cookie 的 SameSite 属性，用来限制第三方 Cookie。但是，不同的浏览器对这个属性的实现不一样，导致这个属性的行为有非常大的差异。

6、[HTML 元素的 download 属性](https://shkspr.mobi/blog/2021/08/to-download-this-page-click-here/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202108/bg2021080904.jpg)

网页的链接标签（a 元素），有一个 download 属性。只要设了这个属性，点击后就会跳出下载对话框。本文演示了使用这个属性，下载当前网页。

7、[如何在 Jest 中使用 test.todo()](https://heyfirst.co/blog/how-to-use-test-todo-in-jest)（英文）

![](https://cdn.beekka.com/blogimg/asset/202108/bg2021080903.jpg)

本文介绍 JavaScript 测试框架 Jest 的 test.todo() 方法的用法。

8、[CSS transform 属性详解](https://www.joshwcomeau.com/css/transforms/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202108/bg2021081013.jpg)

一篇写得很好的 CSS 入门教程，介绍如何使用 transform 属性，实现网页元素的变形。文中有大量互动式示例。

## 工具

1、[RAWGraphs](https://rawgraphs.io/)

![](https://cdn.beekka.com/blogimg/asset/202108/bg2021081028.jpg)

一个 Web 工具，只要把电子表格的数据复制粘贴到网页上，就可以转成数据可视化图形，不需要编写代码。

2、[Cross Context Events](https://github.com/mia1024/cross-context-events)

一个 JS 事件库，允许在多个窗口、多个 iframe 之间共享事件。也就是说，使用它在一个浏览器窗口触发事件，其它窗口也能收到。

3、[obvious.js](https://github.com/ObviousJs/obvious-core)

![](https://cdn.beekka.com/blogimg/asset/202108/bg2021082501.jpg)

一个国产的微前端框架，解决前端微应用的依赖管理、以及它们之间的通信问题。举例来说，它可以把 React 应用和 Vue 应用组合在一个网页里面。([@run-nan](https://github.com/ruanyf/weekly/issues/1899) 投稿)

4、[Web Captioner](https://webcaptioner.com/)

![](https://cdn.beekka.com/blogimg/asset/202108/bg2021082503.jpg)

一个网页的语音转文字工具，使用 Chrome 浏览器的 Web Speech API，支持中文，[代码](https://github.com/bensonruan/Chrome-Web-Speech-API)开源，这里还有一篇[介绍文章](https://bensonruan.com/voice-to-text-with-chrome-web-speech-api/)。(@jerrylususu 投稿)

5、[Maestral](https://github.com/SamSchott/maestral)

![](https://cdn.beekka.com/blogimg/asset/202108/bg2021081206.jpg)

Dropbox 的非官方开源客户端，支持 Mac 和 Linux，特点是资源占用少，简单易用。

6、[padka](https://www.padka.com/)

![](https://cdn.beekka.com/blogimg/asset/202108/bg2021081211.jpg)

一个很有趣、非常有想象力的软件，用来为 Zoom 视频会议添加特效。它可以在老师直播讲课时，根据老师的身体动作和语音，自动为视频配上动画和背景音乐。

7、[Mantine](https://mantine.dev/)

![](https://cdn.beekka.com/blogimg/asset/202108/bg2021080409.jpg)

一个 React 组件库，特点是默认支持暗模式，可以对样式的各个方面进行精细的定制。

8、[react-class-to-fc](https://github.com/yklydxtt/react-class-to-fc)

一个将 React 的 class 组件转成 function 组件的命令行工具。（[@yklydxtt](https://github.com/ruanyf/weekly/issues/1907) 投稿）

9、[FireCMS](https://firecms.co/)

![](https://cdn.beekka.com/blogimg/asset/202108/bg2021080202.jpg)

一个基于 Firebase 的内容管理系统 CMS，数据存放在 Firebase，把这个工具架设在前端，就有了一个后台数据的管理系统。

## 资源

1、[StackOverflow 开发者调查 2021 版](https://insights.stackoverflow.com/survey/2021)

![](https://cdn.beekka.com/blogimg/asset/202108/bg2021080303.jpg)

StackOverflow 网站每年会进行一次开发者调查，了解全世界程序员的动态和状况，这是今年的调查结果。其中的[“技术”](https://insights.stackoverflow.com/survey/2021#technology)部分，可以了解当前的流行技术。

2、[那些免费的砖](https://www.thosefree.com/)

![](https://cdn.beekka.com/blogimg/asset/202108/bg2021082502.jpg)

一个个人网站，收集并介绍各种免费的前端开发资源，分成设计、前端、应用三大类。（[@weyman-git](https://github.com/ruanyf/weekly/issues/1900) 投稿）

3、[电鸭社区](https://eleduck.com/)

![](https://cdn.beekka.com/blogimg/asset/202108/bg2021082504.jpg)

国内最早的远程工作社区，讨论和分享远程、外包、零活、兼职、驻场等工作机会。（[@qrk12](https://github.com/ruanyf/weekly/issues/1902) 投稿）

4、[MetaNumbers](https://metanumbers.com/)

![](https://cdn.beekka.com/blogimg/asset/202107/bg2021073001.jpg)

这个网站提供任一个正整数（最大到 9223372036854775807）的信息，主要是该数的各种数论上的特性。 

5、[物联网 IoT 初学者教程](https://github.com/microsoft/IoT-For-Beginners)

![](https://cdn.beekka.com/blogimg/asset/202107/bg2021071513.jpg)

微软发布的英文教程，详细介绍什么是物联网，以及物联网的应用。

## 图片

1、[人工智能图像](https://ml.berkeley.edu/blog/posts/clip-art/)

人工智能公司 OpenAI 最近推出了 CLIP 模型，经过训练以后，可以根据用户提供的文字描述，自动生成图像。

研究人员已经用它生成了许多非常酷的图像，有些堪称是艺术杰作。如果不说明，你根本想象不到这是软件生成的。

下面就是其中一些作品，标题就是给出的文字描述，图像是软件返回的结果。

《城市的夜》

![](https://cdn.beekka.com/blogimg/asset/202107/bg2021070309.jpg)

《起风了》

![](https://cdn.beekka.com/blogimg/asset/202107/bg2021070312.jpg)

《山顶的暴风雪中有一个小木屋，黄昏时亮着一盏灯》

![](https://cdn.beekka.com/blogimg/asset/202107/bg2021070314.jpg)

《午夜，山中的房子，飞舞的萤火虫（使用吉卜力工作室的风格）》

![](https://cdn.beekka.com/blogimg/asset/202107/bg2021070315.jpg)

## 文摘

1、**门把手的设计**

《设计心理学》（又名《日常生活的设计》）是一本著名的畅销书，自从上个世纪80年代出版以来，一直经久不衰。

它研究怎样才能做出好用的设计，给用户带来愉悦的体验。

![](https://cdn.beekka.com/blogimg/asset/202108/bg2021082613.jpg)

这本书认为，很多日常物品的设计，都有可以改进的地方。它举了一个著名的例子，就是门把手的设计。

一扇门既可以向外拉，也可以向里推，人们经常搞错。应该怎么设计门把手，才能使大家一眼就看出来，到底应该推还是拉，而不会搞错？

![](https://cdn.beekka.com/blogimg/asset/202108/bg2021082614.jpg)

一个最简单的方法，就是在门上贴文字说明，写明应该“拉”或“推”。

但是，这种方法需要用户先看到文字标签，而且对于外国用户，或者不能理解说明的人就没有用。那么能不能不使用文字说明，只凭人类直觉来区分“推”和“拉”呢？

《设计心理学》的作者建议，为了解决这个问题，可以约定，竖的门把手表示拉，横的门把手表示推。

![](https://cdn.beekka.com/blogimg/asset/202108/bg2021082615.jpg)

或者，对于需要推的门，索性取消门把手，表示这个门只能推。

![](https://cdn.beekka.com/blogimg/asset/202108/bg2021082616.jpg)


但是，作者也认为，这些设计都不是特别理想。门把手的推拉设计，是一个很难的问题，目前还没有完美的解决方案。

他开玩笑说，有一回他用绳子当作家里的门把手，表示这扇门只能拉，这个设计可能是最好的设计。

![](https://cdn.beekka.com/blogimg/asset/202108/bg2021082617.jpg)

## 言论

1、

最好的程序员不是善于编写复杂代码，而是有能力为复杂的问题提出简单的解决方案。只有糟糕的程序员，才会对简单的问题提出复杂的解决方案。

-- [Hacker News 用户](https://news.ycombinator.com/item?id=28072652)

2、

世界上只有美国和厄立特里亚两个国家，是根据公民身份而不是居住地征税。只要你是美国人，不管住在哪里，都必须向美国政府交税。其它国家的规定是，本国公民如果住在其它国家，则无需向本国政府交税。

这导致大量的美国富豪放弃美国国籍，申请其它国家的公民。谷歌公司的创始人拉里佩奇就申请成为新西兰公民，前 CEO 埃里克·施密特（Eric Sc​​hmidt）申请成为塞浦路斯公民。

-- [《为什么富人放弃美国国籍》](https://www.axios.com/wealthy-people-are-renouncing-american-citizenship-67fbada4-e2e4-4699-b106-c986839f209d.html)

3、

根据我的经验，大多数程序员在新公司开始工作约 6-8 个月后，才能完全发挥自己的能力。等到在同一家公司工作2年到3年后，绝大多数人开始停滞不前，对工作不再那么有兴趣。

观察到这一点后，我作为老板真的不太在乎，自己的员工在工作2-3年后跳槽。长远来看，只有极少数人会不断进步，所以我不会特意留住员工，我认为这不是很值得。

-- [Hacker News 读者](https://news.ycombinator.com/item?id=28050106)

4、

现在的城市都希望成为大都市，但是我们实际上需要的不是大都市，而是很多小城市密集地连接在一起。

较小的地理集中度，可以减少特定区域的住房需求和生活成本，使得人们可以拥有更多的个人空间，同时又能保持人口的均匀分布和互联性。

-- [Hacker News 读者](https://news.ycombinator.com/item?id=28049371)

5、

你的代码应该是写给下一个开发者的情书。

-- [AgriWebb](https://www.agriwebb.com/au/your-code-should-be-a-love-letter-to-the-next-developer/)

## 历史上的本周

2020年（第 122 期）：[谈谈互联网公司的高估值](https://www.ruanyifeng.com/blog/2020/08/weekly-issue-122.html)

2019年（第 70 期）：[世界进入负利率时代，这意味什么](https://www.ruanyifeng.com/blog/2019/08/weekly-issue-70.html)

2018年（第 19 期）：[电影《头号玩家》描绘未来的虚拟世界](https://www.ruanyifeng.com/blog/2018/08/weekly-issue-19.html)

## 订阅

这个周刊每周五发布，同步更新在[阮一峰的网络日志](http://www.ruanyifeng.com/blog)和[微信公众号](http://weixin.sogou.com/weixin?query=%E9%98%AE%E4%B8%80%E5%B3%B0%E7%9A%84%E7%BD%91%E7%BB%9C%E6%97%A5%E5%BF%97)。

微信搜索“阮一峰的网络日志”或者扫描二维码，即可订阅。

![](https://cdn.beekka.com/blogimg/asset/202103/bg2021030402.jpg)

（完）
