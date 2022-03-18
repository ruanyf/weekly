# 科技爱好者周刊（第 199 期）：俄罗斯的 HTTPS 证书问题

这里记录每周值得分享的科技内容，周五发布。

本杂志开源（GitHub: [ruanyf/weekly](https://github.com/ruanyf/weekly)），欢迎提交 issue，投稿或推荐科技内容。

周刊讨论区的帖子[《谁在招人？》](https://github.com/ruanyf/weekly/issues/2234)，提供大量程序员就业信息，欢迎访问或发布工作/实习岗位。

## 封面图

![](https://cdn.beekka.com/blogimg/asset/202203/bg2022031406.webp)

浙江某小学引入了可以放平的课桌椅，解决了学生午睡的问题。程序员也很需要这种椅子呢。（[via](https://mp.weixin.qq.com/s/d8GSJYSnUyMn6aXzQwUU_Q)）

## 本周话题：俄罗斯的 HTTPS 证书问题

上周，国外网友[发现](https://twitter.com/Scott_Helme/status/1502204103132393472)，一家西方的证书机构拒绝为俄罗斯域名颁发 HTTPS 证书，甚至还吊销已经颁发的有效证书。

![](https://cdn.beekka.com/blogimg/asset/202203/bg2022031105.webp)

美国政府并没有发布这个禁令，这家机构自发地加重制裁。如果所有西方的证书机构都这样做，吊销俄罗斯的 HTTPS 证书，那么俄罗斯网站就不能进行加密通信，使用会大大受限，整个在线支付都会瘫痪。

俄罗斯政府预见到了这种风险，就建了一个自已的证书机构，访问网站 [gosuslugi.ru/tls](https://www.gosuslugi.ru/tls)（下图）可以申请俄罗斯政府颁发的 HTTPS 证书。

![](https://cdn.beekka.com/blogimg/asset/202203/bg2022031106.webp)

问题是，俄罗斯自己颁发的证书，得不到操作系统和浏览器的信任，会跳出警告，告诉用户这个网站不安全，你不应该访问它。

![](https://cdn.beekka.com/blogimg/asset/202203/bg2022031107.webp)

为了消除警告，需要操作系统和浏览器信任俄国政府的证书，按照目前的政治气氛，这是不可能的。好在俄罗斯有自己的 [Yandex 浏览器](https://browser.yandex.com/)，另一种方法是让本国用户在自己的计算机上，手动添加本国证书。

**这件事的最终结果很可能是，俄国用俄国的证书，西方用西方的证书。** 但是，事情并非到此为止，西方看上去真的有打算让俄罗斯[断网](https://t.cj.sina.com.cn/articles/view/1686546714/6486a91a02001mg1o)，公开提出来的方案已经有停止国际路由、停止域名注册、停止 DNS 解析等等。

如果真的走到这一步，俄国的互联网就成了一个孤岛，跟西方的互联网分开了。

这让我想起，古文[《风赋》](https://baike.baidu.com/item/%E9%A3%8E%E8%B5%8B/2482215)的一句话。

> 夫风者，天地之气，溥畅而至，不择贵贱高下而加焉。

它的意思是，天地间的风，无差别地吹拂，不会因为贵贱高下，而有所不同。

我一直认为，互联网是中立的技术基础设置，应该像风一样，无差别地吹拂到每个人，不应该区分穷人、富人、坏人、好人，人人都有权使用互联网。

**一旦因为政治原因吊销 HTTPS 证书，或者让俄罗斯断网，互联网的中立性就荡然无存**，不再是人人都可以使用的技术基础设施了。这等于把“互联网武器化”，只要你是我眼中的恶棍，我就不同意你使用互联网。

开了这种危险的先例，把互联网当作武器，互联网从此就变成了国防设施。国与国之间都搞自己的证书、自己的域名、自己的国际网关，严格区分网络国境线。互联网创立时的开放、自由、统一、造福人类的梦想，灰飞烟灭。

最悲哀的是，吊销 HTTPS 证书和断网，对于上层人物是没有影响的，真正受到惩罚的都是普通老百姓和中小企业。他们对局势无能为力，却要接受惩罚，面对一个关卡重重、残破不堪的互联网。

## 计算机考研基础课训练营

这个月介绍的课程，都跟计算机考研有关。一个原因是这个月考研成绩公布，月底就是复试，社会关注度比较高。

另一个原因是，考研的人越来越多，分数线水涨船高，现在就可以开始准备明年的硕士入学考试了，毕竟9月份就要报名了。

上周的课程是专业课核心能力训练营，本周安排的是**基础课核心能力训练营**。

![](https://cdn.beekka.com/blogimg/asset/202203/bg2022031712.webp)

上课时间是下周一到周四，每天晚上19:20-21:30，一共四天的直播课。

> - 第一天 计算机考研规划课：清北学长带你系统分析计算机硕士含金量、考试难易、含金量、市场前景，助你备考少走弯路。
> - 第二天 计算机考研专业课：前阿里P7大神讲解如何搞定专业课408，带你从0到1搭建学习体系，逐项突击考试难点。
> - 第三天 计算机考研政治课：政治知识系统串讲，全面拆解政治学习思路和解题技巧。
> - 第四天 计算机考研英语课：英语考点归纳，详解考题命题规律，带你举一反三拿高分。

讲师都是985、211高校毕业，有丰富的从业履历，多年的备考和辅导经验，1V1 带练带背，运用科学的记忆方法引导，帮你消化疑难知识点；主办单位“开课吧”还提供讲师、助教、班主任三位一体跟踪式服务，全程为你答疑解惑。

针对那些对考研不熟悉、还没有系统规划的朋友，开课吧会安排 AI 系统，结合数据，进行科学估分，以及排位和对比，帮你精准择校择专业。后期还会结合你的自身情况，系统制定备考方案。

这个课程比较适合下面三类人群。

> - 应届生：想进大厂但是担心学历不够，或者不满足所学专业，想要跨专业考研。
> - 在职人群：想要升职、加薪、评职称，但是受到学历限制。
> - 转行人士：职场压力大，看不到前景，想要转换赛道或进入体制内发展。

考虑到有些同学并非计算机科班出身，讲课过程中也会照顾这些同学，解答零基础如何准备考研。课程涉及的全部代码也将免费开放，可用于课后自查、复习巩固。

感兴趣的同学，可以报名听听看，周刊读者现在只需要**一元报名费**，到课还可领取计算机考试大纲、历年真题资料、政治/英语备考资料等超值资料包。

![](https://cdn.beekka.com/blogimg/asset/202203/bg2022031713.webp)

微信扫描上方二维码，了解课程详情并报名。支付报名费后，会弹出助教老师二维码，别忘了添加老师微信，领取课程。

## 科技动态

1、[不要舔 Switch 游戏卡](https://www.polygon.com/2017/3/1/14784140/nintendo-switch-cartridges-taste-awful-psa)

![](https://cdn.beekka.com/blogimg/asset/202201/bg2022012603.webp)

曾经有一个外国的游戏主播，在直播中舔了一下 Switch 游戏卡，结果苦得立刻吐出来。媒体就去问任天堂公司，到底怎么回事。

![](https://cdn.beekka.com/blogimg/asset/202202/bg2022020103.webp)

任天堂回复说，为了防止儿童舔或者误食游戏卡，特意在游戏卡上涂了一种苦味剂，叫做苯甲酸地那铵。这种化合物是人类已知的最苦的化合物，但是无毒。

2、[单性生殖](https://news.bioon.com/article/6796589.html)

![](https://cdn.beekka.com/blogimg/asset/202203/bg2022031404.webp)

高等哺乳动物的生殖，需要雄性精子和雌性卵子结合，才能产生后代。上海交通大学医学院最近打破了这个定律，实现了单性生殖，只靠一个没有受精的卵子，就孵化出多只健康的小鼠，小鼠可以存活，成年后还能继续繁殖。

科研人员使用基因编辑技术，将雄性基因“植入”卵细胞，模拟受精后才能取得的效果，成功让未受精的卵子具有了繁殖所需的所有基因。

3、[最昂贵的机器](https://www.eet-china.com/news/202201210103.html)

![](https://cdn.beekka.com/blogimg/asset/202201/bg2022012104.webp)

荷兰阿斯麦尔公司（ASML）生产的 EUV 光刻机，很可能是世界最昂贵的机器。目前最先进的计算机芯片，都必须使用这种机器才能生产。

英特尔公司订购了最新型号的这种机器，售价是3.4亿美元/台（约22亿人民币），预定2024年交货。

![](https://cdn.beekka.com/blogimg/asset/202201/bg2022012105.webp)

一个大型芯片厂通常需要9台~18台 EUV 光刻机，投资总规模在100亿～200亿美元。

EUV 光刻机全世界目前只有三个用户：台积电、英特尔和三星。阿斯麦尔公司只向他们三家供货，即使如此还供不应求，必须排队提货。

4、[Windows 盘符](https://www.windowslatest.com/2022/01/10/windows-11s-device-manager-finally-uses-os-path-instead-of-a-floppy-disks/)

![](https://cdn.beekka.com/blogimg/asset/202201/bg2022012009.webp)

Windows 10 系统加载硬件驱动的盘符，是从 A 盘开始的（上图）。但是，A 盘早就不用了。历史上，A 盘和 B 盘代表软盘驱动器，已经被淘汰多年了。

从 Windows 11 Build 22000 开始，微软终于意识到这个问题，文件路径改成了从 C 盘开始。

![](https://cdn.beekka.com/blogimg/asset/202201/bg2022012010.webp)

但是，有用户发现，Windows 11 依然保留了软盘驱动器的驱动程序。如果你的电脑安装了软盘驱动器，依然可以用 A 盘指向这个驱动器。

![](https://cdn.beekka.com/blogimg/asset/202201/bg2022012011.webp)

5、[永久夏令时](https://www.reuters.com/world/us/us-senate-approves-bill-that-would-make-daylight-savings-time-permanent-2023-2022-03-15/)

![](https://cdn.beekka.com/blogimg/asset/202203/bg2022031601.webp)

美国采用夏令时制度，每年3月的第二个周日，时钟调快一个小时，11月的第一个周日再调回去。可想而知，这样非常麻烦。

本周，美国参议院通过一个法案，决定美国将采用永久夏令时，即三月调快一个小时以后，就不再调回去了，美国全国的时钟永久快一个小时。不过，该法案还需要众议院通过，然后总统签署，才能成为法律。

参议院的[理由](https://thehill.com/homenews/senate/598314-senate-unanimously-approves-making-daylight-saving-time-permanent)非常搞笑，议员认为这样的话，冬天就可以晚一个小时天黑，夏令时五点才会天黑，就不会变成四点天黑。但是，议员没有提到，冬天这样也会晚一个小时天亮。

永久夏令时是可行的。中国就是一个例子，全国采用统一时间，西部地区都采用北京时间，就相当于实行永久夏令时制度。

## 文章

1、[中国发电量远超美国，为何 GDP 却低于美国？](https://www.sohu.com/a/477247226_100110525)（中文）

![](https://cdn.beekka.com/blogimg/asset/202203/bg2022030504.webp)

发电量一般跟 GDP 成正比，比如中国的发电量是印度的5倍，GDP 也差不多是5倍。美国的发电量大约是中国的55%（2020年数据），为什么 GDP 却高于中国。

2、[我经历的一次电信诈骗](https://mp.weixin.qq.com/s/OrzpD-bVkUpL2mkFqqOCPg)（中文）

![](https://cdn.beekka.com/blogimg/asset/202203/bg2022030807.webp)

作者不慎在钓鱼网站输入了银行卡和验证码，卡内资金被划走，本文讲述追讨的全过程。令人感叹的是，他找了许多单位，最后只有 Apple Pay 一家同意退回一部分资金。

3、[俄军的对讲机](https://mp.weixin.qq.com/s/q8NiQ2MJyRLEOhnX5lAk2g)（中文）

![](https://cdn.beekka.com/blogimg/asset/202203/bg2022031203.webp)

俄军的一些正规部队没有使用数字通信，而是使用淘宝上出售的模拟对讲机，在民用频率里面对话，导致其他地区的无线电爱好者都能听到。

4、[四种需要避免的 TypeScript 功能](https://www.executeprogram.com/blog/typescript-features-to-avoid)（英文）

本文提出四种 TypeScript 的语法不应该使用，并给出了详细的解释。

5、[我打算重写 TypeScript 编译器](https://zackoverflow.dev/writing/tyty)（英文）

TypeScript 编译器 tsc 是用 JavaScript 写的，非常慢。作者打算用 Rust 写一个非官方的编译器。

6、[iPhone 的背景音](https://support.apple.com/zh-cn/guide/iphone/iphb2cfa052c/ios)（中文）

![](https://cdn.beekka.com/blogimg/asset/202201/bg2022011820.webp)

iOS 15 原生支持背景音，有海洋、雨声、溪流等几种，这个功能挺有趣。播放媒体时，背景音会自动插入。

7、[iOS 15 如何设置中间人拦截](https://www.trickster.dev/post/setting-up-mitmproxy-with-ios15/)（英文）

mitmproxy 是一个中间人拦截的工具，通常用来监控网络通信。本文是一个简短的教程，在 iOS 15 设置 mitmproxy，此外还有[安卓的教程](https://www.trickster.dev/post/setting-up-mitmproxy-with-android/)。

8、[Wordle 的正则表达式解法](https://dov.is/notebooks/solving-wordle-regex.html)（英文）

![](https://cdn.beekka.com/blogimg/asset/202201/bg2022012601.webp)

Wordle 是一个猜词游戏，玩家需要猜中一个五字母的单词。本文别出心裁，使用正则表达式来解，思路很奇特，但是解法特别简单。

9、[Hello World 程序有一个错误](https://blog.sunfishcode.online/bugs-in-hello-world/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202203/bg2022031005.webp)

计算机语言都使用 Hello World 作为入门实例，但是作者认为很多语言的实现是不对的，语言底层对 Linux 系统的输出处理是错误的，包括经典的 C 语言。此文有[中译](https://www.yuque.com/jwenjian/reading-list/vgur3k)。（[@jwenjian](https://github.com/ruanyf/weekly/issues/2255) 投稿）

## 工具

1、[jless](https://pauljuliusmartinez.github.io/)

![](https://cdn.beekka.com/blogimg/asset/202202/bg2022021203.webp)

一个查看 JSON 文件的命令行工具，最大特点就是可以折叠子树。

2、[Terrain2STL](https://jthatch.com/Terrain2STL/)

![](https://cdn.beekka.com/blogimg/asset/202202/bg2022021304.webp)

该网站可以获取全球任何一个地点的地形图，生成 STL 文件供下载，你可以用 3D 打印机把地形打印成模型。

3、[SikuliX](https://github.com/RaiMan/SikuliX1)

![](https://cdn.beekka.com/blogimg/asset/202202/bg2022021305.webp)

一个桌面电脑的自动化工具，支持视觉触发。比如，屏幕出现某种图形，这个软件用 OpenCV 库识别以后，发现符合条件，就触发预先写好的自动化流程。

4、[jDeploy](https://www.jdeploy.com/)

![](https://cdn.beekka.com/blogimg/asset/202202/bg2022021503.webp)

这个工具可以将 Jar 包转变为可执行文件，发布到 NPM 上面。这样的话，在各个平台的安装和更新，就变得非常容易。

5、[Ronja](http://ronja.twibright.com/about.php)

![](https://cdn.beekka.com/blogimg/asset/202202/bg2022021406.webp)

![](https://cdn.beekka.com/blogimg/asset/202202/bg2022021407.webp)

一个已经停止开发的硬件项目，但是非常富有想象力。它不使用网线，而是使用可见光，将两个局域网连起来，最大通信距离为 1.4 公里，通信速度为 10Mbps。

6、 [AirPods 跳绳计数 App](https://apps.apple.com/cn/app/id1485959492)

![](https://cdn.beekka.com/blogimg/asset/202203/bg2022031702.webp)

AirPods 新增了三轴加速度运动传感器，基于该传感器可以实现跳绳计数，只需戴着耳机就能知道跳了多少次。（[@haozes](https://github.com/ruanyf/weekly/issues/2263) 投稿）

7、[Regex-Vis](https://github.com/Bowen7/regex-vis)

![](https://cdn.beekka.com/blogimg/asset/202203/bg2022031703.webp)

一个开源的正则表达式可视化编辑器。输入一个正则表达式，就能自动生成它的可视化图形，并能在网页上对每个节点进行编辑。（[@Bowen7](https://github.com/ruanyf/weekly/issues/2271) 投稿）

8、[3D 魔方](https://github.com/pengfeiw/rubiks-cube)

![](https://cdn.beekka.com/blogimg/asset/202203/bg2022031701.webp)

使用 three.js 的一个小项目，网页实现任意阶的魔方游戏，可以试玩 [Demo](https://pengfeiw.github.io/rubiks-cube/)。（[@pengfeiw](https://github.com/ruanyf/weekly/issues/2262) 投稿）

9、[Process Hacker](https://processhacker.sourceforge.io/)

![](https://cdn.beekka.com/blogimg/asset/202202/bg2022021505.webp)

一款 Windows 软件，用来监控系统信息，能够查看每个进程的详细情况。

10、[Watchtower](https://containrrr.dev/watchtower/)

![](https://cdn.beekka.com/blogimg/asset/202201/bg2022010503.webp)

一个监视 Docker 容器镜像更新的工具。只要发现 DockerHub 或者你自己的仓库里面，Docker 镜像有了更新的版本，它就会用新版本自动替换掉正在运行的版本。

## 资源

1、[CSS 小测验](https://css-speedrun.netlify.app/)

![](https://cdn.beekka.com/blogimg/asset/202201/bg2022011802.webp)

这个网站提供一组 CSS 测试题，测试你的水平。用户在线回答，它会给你计时，看你用了多少时间。

2、[DI.FM](https://www.di.fm/)

![](https://cdn.beekka.com/blogimg/asset/202201/bg2022011809.webp)

一个专门收集电子音乐的网站，可以按照频道收听。

3、[电力设施地图](https://openinframap.org/)

![](https://cdn.beekka.com/blogimg/asset/202201/bg2022011810.webp)

该网站的地图显示全世界电力设施的位置，包括电厂、变电站、输电线等等，甚至还有风力发电机。

4、[CRDT 资料库](https://wiki.nikitavoloboev.xyz/distributed-systems/crdt)

![](https://cdn.beekka.com/blogimg/asset/202201/bg2022011817.webp)

CRDT 是一种多人协同算法，常用于多人同时编辑文档时的同步。这个网页收集各种 CRDT 相关资料。

5、[Deno 示例集](https://examples.deno.land/)

![](https://cdn.beekka.com/blogimg/asset/202203/bg2022031704.webp)

Deno 官方发布的一组 Deno 用法示例。

## 图片

1、[纸牌屋](https://www.cardstacker.com/)

英语里面，“纸牌屋”（house of cards）指的是扑克牌搭建的屋子，比喻摇摇欲坠。

现实世界中，很多爱好者尝试用扑克牌搭建建筑模型，其中最著名的就是布赖恩·伯格（Bryan Berg，1974-），他是吉尼斯世界纪录保持者。

他搭建了世界最高的纸牌屋，高达7米多，用掉了1700多付扑克牌，重达100多公斤。

![](https://cdn.beekka.com/blogimg/asset/202112/bg2021121102.webp)

![](https://cdn.beekka.com/blogimg/asset/202112/bg2021121103.webp)

他还搭建了世界最大的纸牌屋，使用超过21.8万张扑克牌完成了澳门威尼斯人酒店的复制品，耗时44天。

![](https://cdn.beekka.com/blogimg/asset/202112/bg2021121104.webp)

![](https://cdn.beekka.com/blogimg/asset/202112/bg2021121105.webp)

下面是他的工作照片。

![](https://cdn.beekka.com/blogimg/asset/202112/bg2021121106.webp)

![](https://cdn.beekka.com/blogimg/asset/202112/bg2021121107.webp)

2、[NeXTSTEP 系统的图标](http://galgot.free.fr/wordpress/?p=1380)

1985年，30岁的乔布斯被自己创建的苹果公司，踢出了董事会。他另起炉灶，创办了 NeXT 公司，继续制造个人电脑。

NeXT 公司开发了自己的操作系统 NeXTSTEP。这个系统并没有在市场上获得成功，但是最终在1996年被苹果公司收购，成为新的 MacOS 系统的基础。乔布斯也因为这笔交易，重新回到了苹果公司。

NeXTSTEP 系统的图标异常精美，而且都是拟物的，放在今天都不过时，这应该是跟乔布斯的审美有关。

下面是 NeXTSTEP 系统开机后的桌面。

![](https://cdn.beekka.com/blogimg/asset/202112/bg2021121408.webp)

文件管理器的图标。

![](https://cdn.beekka.com/blogimg/asset/202112/bg2021121409.webp)

主目录（家）的图标。

![](https://cdn.beekka.com/blogimg/asset/202112/bg2021121410.webp)

文件夹的图标。

![](https://cdn.beekka.com/blogimg/asset/202112/bg2021121411.webp)

图书馆的图标。

![](https://cdn.beekka.com/blogimg/asset/202112/bg2021121412.webp)

## 文摘

1、[为什么假新闻总有人相信？](https://jamesclear.com/why-facts-dont-change-minds)

假新闻或者错误的观点，总有人相信的一个原因是，人们听到周围有人在谈论它们。

![](https://cdn.beekka.com/blogimg/asset/202203/bg2022031714.webp)

任何想法真正死亡，只有一个办法，就是不再有人谈论它。如果假新闻被不断重复，它就会被记住和相信。

因此，你不要去批评那些假新闻或坏想法，一旦你重复引用这些内容，它们就不会被忘记。而且，重复的次数越多，人们就越有可能相信它。

这称为克利尔重复定律（Clare’s Law of Recurrence）：相信某个想法的人数，与该想法在过去一年中被重复的次数成正比，即使该想法是明显错误的。

每次你攻击一个错误的想法，你就是在喂养你试图摧毁的怪物。正如一位推特员工写的：“每次你转发或引用你不喜欢的推文时，都会对它们有所帮助。”

你的时间最好花在支持好想法上面，而不是戳穿坏想法。不要浪费时间去解释，为什么坏想法是坏的。

一个坏想法最后消失的原因，就是它被遗忘了。这就是 Tyler Cowen 的名言：“花尽可能少的时间谈论其他人的错误。”

总之，让我们传播好想法，遗忘坏想法。

2、[为什么我们的产品不支持加密货币](https://vivaldi.com/blog/why-vivaldi-will-never-create-thinkcoin/)

Vivaldi 浏览器的 CEO 有一次谈到，为什么他们的产品不支持加密货币。

![](https://cdn.beekka.com/blogimg/asset/202203/bg2022031715.webp)

我们开发浏览器的时候，想过创建自己的加密货币，或者加入相关的功能。

但是我们觉得，这样做就相当于鼓励我们的用户参与一场赌博，最坏的情况下可能是参加一场骗局。这将是不道德的。 

我们不应该将加密货币伪装成一个机会，相反地，应该鼓励用户用谨慎和怀疑的态度对待加密货币。

对于一些好奇的加密货币投资者和富有的投机者来说，这可能是一场游戏，但对于那些头脑发热、相信暴富神话的人来说，加密货币的结果可能是毁灭性的。

我们的产品加入这种功能，是不值得的。 

## 言论

1、

加入微软 Xbox 团队时，我没有被分到 CPU 组，只是获得了阅读 CPU 开发文档的访问权限。

但是，我对 CPU 很有兴趣，简直到了狂热的地步。有一年冬天，暴雪压断了电线，我家停电了。我睡在客厅地板上，打着手电筒阅读文档，直到搞清楚每根连线的作用。后来，我就成了团队的 CPU 专家。

-- [Bruce Dawson](https://randomascii.wordpress.com/2022/01/12/5-5-mm-in-1-25-nanoseconds/)

2、

NFT 绝对不会为你提供艺术品的版权、使用权或所有权，没有任何一个国家的法律承认 NFT。

你购买 NFT，实际得到的只是一张收据，其他什么都没有。NFT 的有趣之处是，它让你可以倒卖这张收据。

-- [《教你关于 NFT 的知识》](https://medium.com/@Timoth3y/what-three-card-monte-can-teach-you-about-nfts-48d9fcf38be7)

3、

缓慢的、持久的、有纪律的努力，最终会导致令人难以置信的结果。

每当我无法忍受日常生活时，我就提醒自己，没有什么比每天坚持做下去更重要了。虽然我很难看到未来会怎样，但我知道持久性具有强大的威力，就像一句古老格言说的“继续去做”（keep doing）。

-- [《大海教给我的》](https://www.collaborativefund.com/blog/lessons-from-the-sea/)

4、

现在那些互联网巨头做出的科技创新，根本无法与贝尔实验室相提并论。

贝尔实验室的主要成果有：激光、太阳能电池、通信卫星、按键式电话、晶体管、UNIX、C 语言、数字信号处理 (DSP)、蜂窝电话、数据网络、电荷耦合设备(CCD)、信息论、电视、有声电影、大爆炸理论，其中产生了8项诺贝尔物理学奖。

-- [《贝尔实验室的组织结构图》](https://neil.computer/notes/bell-labs-org-chart/)

## 历史上的本周

2021年（第 148 期）：[微增长时代](https://www.ruanyifeng.com/blog/2021/03/weekly-issue-148.html)

2020年（第 96 期）：[在线教育不等于录制视频](https://www.ruanyifeng.com/blog/2020/02/weekly-issue-96.html)

2019年（第 45 期）：[阿西莫夫回忆录《人生舞台》](https://www.ruanyifeng.com/blog/2019/03/weekly-issue-45.html)

## 订阅

这个周刊每周五发布，同步更新在[阮一峰的网络日志](http://www.ruanyifeng.com/blog)和[微信公众号](http://weixin.sogou.com/weixin?query=%E9%98%AE%E4%B8%80%E5%B3%B0%E7%9A%84%E7%BD%91%E7%BB%9C%E6%97%A5%E5%BF%97)。

微信搜索“阮一峰的网络日志”或者扫描二维码，即可订阅。

![](https://cdn.beekka.com/blogimg/asset/202103/bg2021030402.jpg)

（完）

