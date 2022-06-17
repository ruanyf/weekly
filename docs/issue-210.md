# 科技爱好者周刊（第 210 期）：为什么软件变得复杂

这里记录每周值得分享的科技内容，周五发布。

本杂志开源（GitHub: [ruanyf/weekly](https://github.com/ruanyf/weekly)），欢迎提交 issue，投稿或推荐科技内容。

周刊讨论区的帖子[《谁在招人？》](https://github.com/ruanyf/weekly/issues/2426)，提供大量程序员就业信息，欢迎访问或发布工作/实习岗位。

## 封面图

![](https://cdn.beekka.com/blogimg/asset/202206/bg2022061615.webp)

中国科学家绘制的世界首幅、最详细的1:250万月球全月地质图发布，统计出月球包含12341个撞击坑、17种岩石、14类地质构造。（[via](http://www.cnsa.gov.cn/n6758823/n6758838/c6840495/content.html)）

## 本周话题：为什么软件变得复杂

我一直认为，软件开发的最大关注点，就是避免复杂性。软件设计越简单越好，太多的程序员以构建复杂的解决方案为荣。

但是，本周有一篇文章让我反思，我的想法是不现实的：**软件肯定会越变越复杂。**

（一）

这篇文章的作者是 Saleforce 公司的前端工程师诺拉·劳森（Nolan Lawson），题目就叫做[《复杂软件的崩溃》](https://nolanlawson.com/2022/06/09/the-collapse-of-complex-software/)（下图）。

![](https://cdn.beekka.com/blogimg/asset/202206/bg2022061407.webp)

大家可能知道，Salesforce 是一家世界级软件公司，专门开发企业软件，以产品复杂而闻名。

![](https://cdn.beekka.com/blogimg/asset/202206/bg2022061406.webp)

所以，这件事情很讽刺。一家出产复杂软件的公司，自家的著名程序员公开说，复杂软件会崩溃。

当然，他在文章里面没提 Salesforce 的名字，但是怎么读都像在写亲身经历。下面摘录一段他的原文和配图，大家品味一下。

![](https://cdn.beekka.com/blogimg/asset/202206/bg2022061408.webp)

> “任何在科技行业工作足够长的人，尤其是在大公司工作的人，都曾见过下面的场景。
> 
> 有一个遗留系统，很大很复杂，没有人完全理解它是如何工作的。
> 
> 架构师被要求“修复”系统，他们找来一块大的白板，把这个大系统分解成很多方框和箭头。对于遇到的问题，他们的解决方案就是……添加更多方框和箭头。没有任何一个可以从系统中消去，每个人都只是加上自己的那部分。

这一段是不是写得很形象，就像是日常场景的描述。

根据他的文章，我整理了一下，Saleforce 内部的情况大概是这样的。

> 1. 客户的需求非常复杂。为了满足这些需求，大型软件不可避免变得复杂。
> 1. 软件公司的管理者真正在意的不是系统的复杂性，而是利润。只要软件能赚钱，高层并不在意软件变得复杂。
> 1. 软件复杂性都落到少数架构师和高级程序员的头上。每个人加上自己的解决方案（方框和箭头），让软件越来越复杂，然后不可避免地，他们就会在一段时间后离开公司。
> 1. 复杂系统最终变得难以理解和维护，唯一的解决方法就是放弃旧系统，从头开始写一个新系统。

所以，诺拉·劳森的结论很悲观：**怎么解决软件的复杂性？解决不了。最后就是你走人，公司把软件推倒重来。**

这就是一个大厂高级程序员的真实想法。国内的情况其实差不多，上面的描述完全适用于 BAT 内部的复杂系统。

（二）

诺拉·劳森还说了一个观点。大家通常认为，复杂系统往往会在经济繁荣的时候崩溃，因为业务太多，支撑不过来，但他认为不是这样的，**系统崩溃往往发生在经济收缩期。**

经济繁荣时期，软件公司会大量雇佣新员工，投入更多的财力和人力，支撑复杂系统。等到经济收缩期，公司开始减少投入、冻结招聘或裁员，复杂系统可能就会在这个时候出问题，变得难以维护。

现在就是经济收缩期，那么接下来，会不会就是软件故障的高发期，我们将看到很多复杂系统的崩溃？

## 前端高频面试题（2022版）

这两年，客观地说，前端开发的热度有所下降。主要原因是前端技术逐步稳定，以及智能手机的普及度见顶了。

但是，前端依然是 IT 行业中最活跃的分支。一年一度的 [GitHub 调查](https://octoverse.github.com/)中，JavaScript 多年来一直稳居第一，TypeScript 更是快速上升到今年的第四位，仅次于 Python 和 Java。

![](https://cdn.beekka.com/blogimg/asset/202206/bg2022061616.webp)

技术稳定带来的一个后果，就是新框架、新工具少了，大家更关注已有框架/工具的改进和功能增加。

大厂的前端团队也转向了精细化探索，注重如何做得更细、更好，垂直化的技术领域（比如可视化、工程化等）得到了更多的关注。企业的用人要求也越来越高，从能够上手工作就可以要人，变成了要求深入某个领域。

总的来说，<ins>现在的前端开发处在下图右侧的那个椭圆，比前一个阶段的难度上升了</ins>。

![](https://cdn.beekka.com/blogimg/asset/202206/bg2022061617.webp)

如果你已经有一定的前端开发基础，近期打算应聘前端岗位，这里有一份有用的资料，可以帮助大家准备面试。

这份资料就是 **《前端大厂的高频面试题（2022版）》**，一共有174页，收集了最新的面试题，由国内著名的程序员培训平台“极客时间”联系国内大厂制作。

![](https://cdn.beekka.com/blogimg/asset/202206/bg2022061620.webp)

所有的题目都分门别类，由浅入深排列，每道题都附有答案详解，方便大家知识梳理、准备面试。

![](https://cdn.beekka.com/blogimg/asset/202206/bg2022061618.webp)

此外，还会额外赠送 **《三位资深程序员的面试跳槽经验分享》**，分享技术之外的跳槽准备、简历准备、面试应对……这些值得借鉴的前人经验。

![](https://cdn.beekka.com/blogimg/asset/202206/bg2022061619.webp)

微信扫描上方二维码，就可以 **免费领取** 这份前端面试资料。添加客服后，请耐心等待，后台是手动通过的。

最后提醒一下，<ins>这份资料不适合刚刚学习前端的学生，更适合有前端开发基础和编程经验的从业人员。</ins>

## 科技动态

1、[虚拟接吻](https://gizmodo.com/vr-researches-simulate-kisses-with-ultrasonic-transduce-1848849489)

![](https://cdn.beekka.com/blogimg/asset/220204/bg2022043003.webp)

卡内基梅隆大学开发了一种新技术，让 VR 头盔的佩戴者可以感受到虚拟接吻。具体做法是，头盔向嘴唇发射超声波，里面包含了一些微小颗粒，让嘴唇、牙齿甚至舌头产生触感。

上图可以看到，VR 头盔的下方安装了一排超声波发生器，对准红点的位置发射。科学家开玩笑，可以用它开发“接吻机”。

![](https://cdn.beekka.com/blogimg/asset/220204/bg2022043004.webp)

除了产生嘴唇的触感，这种技术还可以在游戏中，让用户感受到风拂过脸部、蜘蛛网碰到脸，甚至食物和饮料进入嘴里的虚拟感受。

上图是一只巨大的虚拟蜘蛛将大量毒药倾泻到用户身上，用户可以感觉到毒药溅到嘴唇上。

2、[LED 篮球场](http://www.lanxiongsports.com/posts/view/id/22687.html)

![](https://cdn.beekka.com/blogimg/asset/202206/bg2022060807.webp)

5月30日，国际篮联正式宣布，允许篮球世界杯等大赛启用 LED 篮球场。

传统的篮球场都是木地板，木头具有弹性，可以吸收震动，保护球员。现在，最新的 LED 玻璃也已经能够提供足够的弹性。

![](https://cdn.beekka.com/blogimg/asset/202206/bg2022060808.webp)

LED 球场有很多好处，省去了划线的麻烦，能够快速切换成篮球场、手球场、排球场、羽毛球场。

并且，它自身能发光，可以作为显示屏，实时显示比赛数据，并且配合球场活动，营造气氛。在黑暗中，界线依然保持醒目。

![](https://cdn.beekka.com/blogimg/asset/202206/bg2022060809.webp)

3、[树皮字体](https://bjoernkarmann.dk/occlusion-grotesque)

![](https://cdn.beekka.com/blogimg/asset/202205/bg2022050302.webp)

![](https://cdn.beekka.com/blogimg/asset/202205/bg2022050306.webp)

五年前，一个丹麦艺术家将字体刻在一棵树上，想看看随着树木的成长，字体会变成什么样，也就是大自然会怎样呈现字体。

![](https://cdn.beekka.com/blogimg/asset/202205/bg2022050307.webp)

下面是字母 a 和 o 在五年中的变化。

![](https://cdn.beekka.com/blogimg/asset/202205/bg2022050303.webp)

![](https://cdn.beekka.com/blogimg/asset/202205/bg2022050304.webp)

这些字体应用到印刷品，就是下面的样子。

![](https://cdn.beekka.com/blogimg/asset/202205/bg2022050305.webp)

他发现，这些字母主要是横向成长，变得更宽更粗，高度反而变化不大。这说明，树木成形后，树干高度就基本不再变化了，开始不断长粗。

![](https://cdn.beekka.com/blogimg/asset/202205/bg2022050308.webp)

4、[禁止白炽灯泡](https://www.cnbc.com/2022/04/26/biden-blocks-sales-of-inefficient-lightbulbs-reversing-trump-policy-.html)

![](https://cdn.beekka.com/blogimg/asset/202205/bg2022050502.webp)

拜登政府宣布，美国将禁止销售每瓦产生低于45流明的灯泡。这实际上禁掉了白炽灯泡。

这个决定是为了提高照明的能量效率。一般来说，白炽灯泡每瓦的发光量在10流明左右，LED 灯泡则可以达到每瓦100流明以上。

## 文章

1、[我为什么与中国游戏发行商签约又分手](https://www.chuapp.com/?a=index&c=Article&id=288712)（中文）

这是一篇日本独立游戏开发者的文章，被译成了中文。作者以亲身经历，解释了目前的独立游戏的发行制度和现状。

2、[Intel 4 工艺宣布](https://finance.sina.com.cn/tech/2022-06-14/doc-imizirau8363822.shtml)（中文）

![](https://cdn.beekka.com/blogimg/asset/202206/bg2022061609.webp)

上周，英特尔公司正式宣布了 Intel 4 工艺。这是英特尔公司第一次将 EUV 技术用于 CPU 的生产，实现了7纳米的制程，开始追赶台积电。本文介绍该工艺的一些情况。

3、[我如何搭建家用 NAS](https://icloudnative.io/posts/budget-nas/)（中文）

![](https://cdn.beekka.com/blogimg/asset/202206/bg2022060906.webp)

本文详细记录了作者选购硬件、安装软件，搭建一台 22TB 的家用 NAS （网络存储）服务器的过程，可以当作自己架设 NAS 的参考。这里是中文翻译，另有[英文原文](https://mtlynch.io/budget-nas/)。（[@yangchuansheng](https://github.com/ruanyf/weekly/issues/2444) 投稿）

4、[最简单的任务管理系统](https://ugmonk.com/blogs/journal/analog-the-simplest-productivity-system)（英文）

![](https://cdn.beekka.com/blogimg/asset/202202/bg2022021201.webp)

本文介绍作者自己发明的最简单任务管理系统，就是把每天的任务写在卡片上，用一个架子放在眼前，做完一件就划掉一件。

![](https://cdn.beekka.com/blogimg/asset/202202/bg2022021202.webp)

5、[使用 Cloudflare + Backblaze B2 打造一个免费的图像 CDN](https://www.backblaze.com/blog/free-image-hosting-with-cloudflare-transform-rules-and-backblaze-b2/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202202/bg2022021604.webp)

本文是一篇详细的教程，教你怎么把图片托管在 Backblaze B2 对象存储，然后连接到 Cloudflare 的 CDN 服务。两者都有免费额度，对于小网站来说，不用花钱就解决了图片的存储和带宽问题。

6、[如何用 iOS 快捷指令防止沉迷？](https://nick.comer.io/post/ios-shortcuts)（英文）

![](https://cdn.beekka.com/blogimg/asset/202201/bg2022010401.webp)

作者发现自己在社交媒体上，浪费了大量时间。他想出了一个办法，制作了一个 iOS 快捷指令（shortcuts），只要一打开社交 App，就会跳出提示“请专心工作”。

7、[我的免费摄影软件工作流](https://blog.fidelramos.net/photography/photography-workflow#5-replication-with-syncthing)（英文）

![](https://cdn.beekka.com/blogimg/asset/220204/bg2022040609.webp)

作者是一个专业的摄影师，完全采用免费软件处理数码照片。本文介绍他的解决方案。

8、[我在单个服务器上托管几十个网站](https://cprimozic.net/blog/my-selfhosted-websites-architecture/#backup--disaster-recovery)（英文）

作者详细介绍，他如何在一个服务器上托管几十个网站，大部分是 API 调用。这里最大的难题还不是把服务架起来，而是如何同时维护和管理它们。

9、[如何估算流入加密货币的资金](https://tomtunguz.com/how-much-money-flowing-into-crypto/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202202/bg2022020302.webp)

多少资金流入了加密货币市场？这显然是无法准确计算的，作者想到了一个办法，可以间接估算。那就是看稳定币每月增长的发行量，上图是过去两年稳定币每个月的增长百分比。

## 工具

1、[CloudMP3.cc](https://cloudmp3.cc/en/)

![](https://cdn.beekka.com/blogimg/asset/220204/bg2022041702.webp)

一个云服务，可以将 SoundCloud 上面的音频，转成 mp3 下载。

2、[ToolJet](https://github.com/ToolJet/ToolJet)

![](https://cdn.beekka.com/blogimg/asset/202203/bg2022031912.webp)

一个低代码框架，用来开发内部工具。部署到服务器后，它有一个 Web 界面，通过拖拽，就可以连接各种数据源，生成各种应用或管理面板。

3、[i 微信读书](https://secreter.github.io/ireader/index.html)

![](https://cdn.beekka.com/blogimg/asset/202206/bg2022061503.webp)

Chrome 浏览器插件，配合网页版微信读书使用，支持划线摘抄句子、划线生成分享图片、一键导出笔记等功能。（[@secreter](https://github.com/ruanyf/weekly/issues/2439) 投稿）

4、[Sogou C++ Workflow](https://github.com/sogou/workflow)

搜狗公司开源的 C++ 服务器引擎，支撑搜狗几乎所有后端 C++ 在线服务，提供了大量异步服务的功能。（[@Barenboim](https://github.com/ruanyf/weekly/issues/2446) 投稿）

5、[FastGit](https://doc.fastgit.org/zh-cn/guide.html)

![](https://cdn.beekka.com/blogimg/asset/202206/bg2022061504.webp)

GitHub 有时在国内不容易打开，这里有一个服务是 GitHub 的镜像加速器。提醒一下，如果要登陆 GitHub，使用这种服务会有安全顾虑，大家自己权衡。（[@dllen](https://github.com/ruanyf/weekly/issues/2448) 投稿）

6、[Go-Ldap-Admin](http://ldapdoc.eryajf.net/)

![](https://cdn.beekka.com/blogimg/asset/202206/bg2022061505.webp)

一个国产软件，基于 Go+Vue 实现的 openLDAP 管理后台，可以作为打通 IM（钉钉、企业微信、飞书）与支持 ldap 认证的应用的桥梁。（[@eryajf](https://github.com/ruanyf/weekly/issues/2450) 投稿）

7、[Japa](https://japa.dev/)

一个 Node.js 的测试框架，简单快速，功能也很多，而且可以直接运行测试脚本，不必通过测试框架来运行。

8、[@xata.io/screenshot](https://github.com/xataio/screenshot)

这个网页脚本可以生成当前页面的截图。

9、[GitLens](https://www.gitkraken.com/gitlens/features)

![](https://cdn.beekka.com/blogimg/asset/202203/bg2022031915.webp)

一个 VSCode 的插件，大大增强了 Git 集成，可以在编辑器里面执行很多 Git 操作，特别适合多人合作的项目。

## Deno 框架

Deno 是 JavaScript 语言的服务器运行环境，跟 Node.js 是竞争关系。

Deno 本身的开发已经接近稳定了，下一步只要有一个好用的框架，就能推广了。

1、[Fresh 框架](https://fresh.deno.dev/)

![](https://cdn.beekka.com/blogimg/asset/202206/bg2022061401.webp)

上周，基于 Deno 的 Fresh 框架发布了预览。

该框架直接使用 TypeScript 脚本，号称零配置、零构建，页面由服务端渲染，客户端不需要 JS 生成内容，也没有多余的 JS 脚本，追求小而快，值得关注。

2、[Aleph.js](https://alephjs.org/)

![](https://cdn.beekka.com/blogimg/asset/202206/bg2022061402.webp)

Aleph.js 是另一个基于 Deno 的全栈框架，类似于 Next.js，目前处于早期开发阶段，也可以关注。

3、[Express](https://expressjs.com/)

![](https://cdn.beekka.com/blogimg/asset/202206/bg2022061403.webp)

顺便提一下，老牌的 Node.js 框架 Express，最近要发布5.0版了。这是一件大事，因为4.0版是八年前发布的。这篇文章介绍了[5.0版的新特性](https://fusebit.io/blog/new-express-5-features/)。

## 可视化作品

1、[全球海底光缆](http://he.net/3d-map/)

![](https://cdn.beekka.com/blogimg/asset/220204/bg2022041001.webp)

这个网页提供了一个互动式的地球，上面有全世界海底光缆和骨干机房的位置。

2、[极光](https://www.drawaurora.com/)

![](https://cdn.beekka.com/blogimg/asset/220204/bg2022041002.webp)

这个网页构造了一个极地的背景，让你手绘动态的极光效果。

3、[波斯波利斯](https://persepolis.getty.edu/)

![](https://cdn.beekka.com/blogimg/asset/220204/bg2022041004.webp)

波斯波利斯是古代波斯帝国的首都，位于现在的伊朗，已经是一片废墟了。这个页面还原了这座雄伟的帝国都城，重建了 3D 街景，让你在其中漫游。

## 图片

1、[咸海](https://zh.wikipedia.org/wiki/%E9%B9%B9%E6%B5%B7)

哈萨克斯坦曾经有一个巨大的湖泊，叫做咸海，面积68000平方公里，相当于两个海南岛，是世界第四大湖泊。

但是，从1960年代开始，前苏联建造了很多灌溉工程，从咸海大量引水，又没有补充，导致咸海快速干涸，目前已经接近消失了。

1985年的咸海。

![](https://cdn.beekka.com/blogimg/asset/202202/bg2022022001.webp)

1997年的咸海。

![](https://cdn.beekka.com/blogimg/asset/202202/bg2022022002.webp)

2014年的咸海。

![](https://cdn.beekka.com/blogimg/asset/202202/bg2022022003.webp)

2、[住宅墙](https://www.houseporn.ca/landscape/article/the_wall_housing_structure_in_fermont_quebec)

加拿大有一个小镇，靠近北极，终年刮着强劲的北风。

为了挡风，当地修建了高50米，长1.3公里的挡风墙，同时这堵墙里面还是住宅、商业和教育设置，里面可以住人。

![](https://cdn.beekka.com/blogimg/asset/202202/bg2022022006.webp)

![](https://cdn.beekka.com/blogimg/asset/202202/bg2022022007.webp)

因为有了这堵住宅墙，小镇居民就拥有了一个无风的、温暖的小气候。 

![](https://cdn.beekka.com/blogimg/asset/202202/bg2022022008.webp)

![](https://cdn.beekka.com/blogimg/asset/202202/bg2022022009.webp)

## 文摘

1、[如何增加牙膏的销量](https://www.ifanr.com/app/1448161)

1950年代，一家国外的牙膏公司，向公众征求能够大幅提高销售额的点子。

![](https://cdn.beekka.com/blogimg/asset/202202/bg2022020805.webp)

几天之后，有一个人来应征，声称他有办法让销售额快速增长40%，而且实施起来不需要很大成本。他要价10万美元。

公司管理层犹豫了数周，最后还是同意了给钱。

等到法律手续和付款流程完成后，这个人给出装有一张小纸条的信封，小纸条上只有四个英文单词：

> “Make The Hole Bigger”
 
这句话翻译成中文，就是“让牙膏开口更大一点”。

此前，管状牙膏的开口一般是5毫米直径。稍加计算就可以知道，当直径从5毫米增加到6毫米时，假设挤出的牙膏长度不变，挤出量会增加44%。

原先顾客用一管牙膏的时间，现在要1.4管牙膏才能满足需求。看似很小的改变，却刷新了这家公司的销售记录，创造了历史。

## 言论

1、

一件事最可怕的时刻，总是在你开始做之前。

-- [斯蒂芬·金](https://gretchenrubin.com/2016/08/according-stephen-king-scariest-moment-always-____)

2、

对于那些没有想象力的人来说，保持常态就是他们的理想。

-- [荣格](https://quotefancy.com/quote/782361/C-G-Jung-Normality-is-a-fine-ideal-for-those-who-have-no-imagination)

3、

IT 行业与传统制造业有一个重要区别，就是 IT 行业有着严重的垄断。

全世界的智能手机有70亿部，比汽车多出5倍（14亿辆）。但是，智能手机制造商比汽车制造商少了好几个数量级。搜索引擎、社交网络、操作系统都是这样，几个巨头就垄断了整个市场。

-- [Hacker News 读者](https://news.ycombinator.com/item?id=28896320)

4、

电动汽车虽然售价高，但是每公里的行驶成本低，因此用得越久越划算。这就要求汽车厂商制造耐用的电动汽车。

-- [Hacker News 读者](https://news.ycombinator.com/item?id=30914512)

5、

2021年只有两种人在写博客，一种是试图建立受众并从中获利的人，另一种是只想写出想法、而没有任何目标的人。

这两种人的行为都非常好。选择做你喜欢的事，坚持下去，它们最终都可以对他人产生价值。

-- [《我从博客中学到的东西》](https://bhupesh.me//what-i-have-learned-from-blogging-so-far-retrospect/)

## 历史上的本周

2021年（第 162 期）：[生活就像《吃豆人》游戏](https://www.ruanyifeng.com/blog/2021/06/weekly-issue-162.html)

2020年（第 111 期）：[智能电视的误区](https://www.ruanyifeng.com/blog/2020/06/weekly-issue-111.html)

2019年（第 60 期）：[一本介绍人类起源的学术自传](https://www.ruanyifeng.com/blog/2019/06/weekly-issue-60.html)

2018年（第 9 期）：[身份证可以植入人体](https://www.ruanyifeng.com/blog/2018/06/weekly-issue-9.html)

## 订阅

这个周刊每周五发布，同步更新在[阮一峰的网络日志](http://www.ruanyifeng.com/blog)和[微信公众号](http://weixin.sogou.com/weixin?query=%E9%98%AE%E4%B8%80%E5%B3%B0%E7%9A%84%E7%BD%91%E7%BB%9C%E6%97%A5%E5%BF%97)。

微信搜索“阮一峰的网络日志”或者扫描二维码，即可订阅。

![](https://cdn.beekka.com/blogimg/asset/202103/bg2021030402.jpg)

（完）

