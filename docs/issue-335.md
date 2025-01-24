# 科技爱好者周刊（第 335 期）：年底的未来已来

这里记录每周值得分享的科技内容，周五发布。（**[通知] 下周春节假期，周刊休息。**）

本杂志[开源](https://github.com/ruanyf/weekly)，欢迎[投稿](https://github.com/ruanyf/weekly/issues)。另有[《谁在招人》](https://github.com/ruanyf/weekly/issues/5830)服务，发布程序员招聘信息。合作请[邮件联系](mailto:yifeng.ruan@gmail.com)（yifeng.ruan@gmail.com）。

## 封面图

![](https://cdn.beekka.com/blogimg/asset/202501/bg2025011515.webp)

香港历史建筑“和昌大押”，布置了一条盘旋两层楼的金蛇，迎接蛇年。（[via](https://www.instagram.com/cctv.chinese/p/DE1lxx-z1Gc/)）

## 年底的未来已来

大概两周前，我就在想，龙年的最后一期周刊，要写什么？

正好这一个月，有很多新发明、新技术发布。我想到，可以把它们放在一起，作为下一年的展望。

编辑过程中，它们勾起了我的一点回忆。

十年前，我接了一个活，为北京的一家杂志写文章，向普通读者介绍技术的新进展，以此赚一点稿费。写久了，我就有一个感觉，技术进展太快了，快于所有人的预期。我明明写的是真实事件，但是很多时候像在写科幻小说。

就是在那个时候，我开始意识到，那句有名的话是千真万确：“**未来已来，只是尚未流行**”。那些我们觉得很遥远、很科幻的事情，其实已经是活生生的现实，很快就会强烈地、不可避免地影响每个人的生活，可能是好的影响，也可能是不好的影响（技能过时了，行业消失了）。

2017年，我把那些文章结集，起了一个书名[《未来世界的幸存者》](https://www.ruanyifeng.com/survivor/)，表达我的这种想法，希望读者对即将到来的时代变革有所准备。

十年后的今天，世界仿佛全然不同，我发现自己还在做同样的事情，还在介绍那些像科幻小说一样的真实技术。不同的是，我已经很明白了，**为未来做准备，就是在为现在做准备**，做一个未来世界的幸存者，就是做一个今日世界的幸存者。

## 科技动态

**1、[AI 陪护](https://restofworld.org/2025/singapore-ai-eldercare-tools/)**

新加坡最近世界首个将 AI 引入了养老院，用来陪护老人。

![](https://cdn.beekka.com/blogimg/asset/202501/bg2025011912.webp)

这个 AI 是一个女护士的样子，每天早上带领老人做早操、玩游戏、唱歌。

她承担不了具体的医疗照护工作（比如喂饭打针），但是可以一天24小时，跟老人互动聊天，减少孤独感。

![](https://cdn.beekka.com/blogimg/asset/202501/bg2025011913.webp)

她还会按时提醒老人吃药，一旦侦测到老人有异常，立刻发出警报。

这是一个信号，养老行业很可能是 AI 和机器人最先落地的传统行业，因为老龄化社会实在太缺少照护人力了。

**2、[澳网动画直播](https://www.crikey.com.au/2025/01/16/australian-open-animated-cartoon-caricatures-broadcast-restrictions/)**

澳网公开赛正在澳大利亚举行，组委会为国际观众准备了 3D 动画直播。

![](https://cdn.beekka.com/blogimg/asset/202501/bg2025011905.webp)

它将真实的运动员和比赛场面转成了实时的 3D 动画，配上球场原声和评论，逼真地还原了比赛。

![](https://cdn.beekka.com/blogimg/asset/202501/bg2025012301.webp)

在欧美，澳网是付费观看直播，很多人看不到。免费的 3D 动画直播，有助于让更多的人关注澳网。

![](https://cdn.beekka.com/blogimg/asset/202501/bg2025012302.webp)

该技术使用12台摄像机追踪29个骨骼点，通过实时计算，在两分钟的延迟内生成动画。

这种动画直播，值得各种体育大赛采用。除了免费观看，它还有一个优点，就是相比实况直播，占用带宽小很多，如果做成矢量动画带宽就更小了。

**3、[边框码](https://danwilkerson.com/posts/2024-12-04-square-zero)**

二维码已经得到广泛采用，但是很多场合，它并不是理想的选择。

一位国外程序员打印了一张新年卡片，原想在上面加一个二维码，手机扫描后，可以访问网站。

但是，加了二维码就破坏了卡片的整体设计，于是他想了一个别出心裁的方法。

![](https://cdn.beekka.com/blogimg/asset/202501/bg2025010506.webp)

他为照片设计了一圈特殊的边框（上图），这个边框经过二进制编码，是可以扫码的。

具体规则是，从左上角开始，按照顺时针，黑色方块为0，白色方块为1，按照 ASCII 码，可以还原出一个网址。

这真是一个好主意，将二维码变成边框码，可能适合很多场合。

4、[咸味勺](https://techcrunch.com/2025/01/05/kirin-offers-a-taste-of-its-electric-salt-spoon-at-ces-2025/)

日本麒麟啤酒公司，推出了一种咸味勺，用它吃清淡的食物，也能感到咸味。

![](https://cdn.beekka.com/blogimg/asset/202501/bg2025011802.webp)

它的原理是发出弱电流（勺子自带电池），浓缩食物中的钠离子，从而增加鲜味和咸味。

麒麟公司希望，这种勺子可以减少食盐的添加，同时又让食物不会清淡无味。因为过多摄入食盐，可能导致高血压。

5、[自适应遮阳伞](https://www.uni-stuttgart.de/en/university/news/all/Bioinspired-weather-responsive-adaptive-shading/)

遮阳伞有一个很麻烦的地方，就是有太阳的时候需要打开，没太阳的时候需要收起来。

德国斯图加特大学的一个研究团队，发明了不需要任何能源、自动打开和收起的遮阳伞。

![](https://cdn.beekka.com/blogimg/asset/202501/bg2025012206.webp)

它的奥妙在于，遮阳伞的伞面全部是特殊设计的纤维素鳞片。这种鳞片会随着湿度的变化而展开和卷起。

没有太阳时，湿度高，纤维素材料吸收水分并收缩，导致鳞片蜷曲，相当于遮阳伞收起（上图右）。相反地，太阳直射时，湿度低，纤维素材料释放水分并展开，导致鳞片变平，相当于遮阳伞打开（上图左）。

![](https://cdn.beekka.com/blogimg/asset/202501/bg2025012207.webp)

这种材料还能用来制作窗帘（上图），随着日照自动打开和收起，不需要消耗能量。这对于那些日照充分的热带地区，可能是非常重要的发明。

6、[Pi Box](https://hackaday.io/project/202168-pi-box/details)

树莓派是最流行的单板计算机，使用时，需要自己准备一大堆外设，很不方便也不好携带。

一位印度开发者，为树莓派设计了一个外壳，起名为 Pi Box，令人耳目一新。

![](https://cdn.beekka.com/blogimg/asset/202501/bg2025011601.webp)

这个外壳将树莓派、电池、液晶显示屏封装在一起，并配上了提手。

![](https://cdn.beekka.com/blogimg/asset/202501/bg2025011602.webp)

它看上去美观，又很实用，让人很想要一个。

![](https://cdn.beekka.com/blogimg/asset/202501/bg2025011603.webp)

作者已经将外壳和供电电路的设计，都公开了，你可以自己动手做。

![](https://cdn.beekka.com/blogimg/asset/202501/bg2025011604.webp)

7、[纸板支架](https://www.core77.com/posts/134948/A-Laptop-Stand-Made-from-a-Single-Sheet-of-Recycled-Paper)

一家韩国设计公司，发明了再生纸制作的笔记本电脑支架。

![](https://cdn.beekka.com/blogimg/asset/202501/bg2025011401.webp)

这家公司称，只需要45克再生纸，就能支撑世界上最重的笔记本电脑。

![](https://cdn.beekka.com/blogimg/asset/202501/bg2025011402.webp)

它的折纸结构，还能保持通风，有助于笔记本散热。

不用的时候，可以把支架收起来，厚度只有3厘米，非常轻巧。

![](https://cdn.beekka.com/blogimg/asset/202501/bg2025011403.webp)

支架的凹口还能放手机。

![](https://cdn.beekka.com/blogimg/asset/202501/bg2025011404.webp)

8、[卷屏笔记本](https://www.mobile01.com/topicdetail.php)

联想展出了世界第一台卷屏笔记本。

![](https://cdn.beekka.com/blogimg/asset/202501/bg2025011610.webp)

这台笔记本打开后，14寸的屏幕可以向上展开为16.7寸。

![](https://cdn.beekka.com/blogimg/asset/202501/bg2025011611.webp)

它的重量为1.7公斤，预计将在今年6月份发售，价格未知。它的屏幕来自[三星公司](https://global.samsungdisplay.com/31332)。

![](https://cdn.beekka.com/blogimg/asset/202501/bg2025011612.webp)

如果下一步能够推出左右扩展的带鱼屏笔记本，市场估计就更大了。

## 文章

1、[如何减少 Docker 的日志体积](https://linuxiac.com/reducing-docker-logs-file-size/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202407/bg2024072206.webp)

Docker 容器会产生日志，长年累月变得越来越大，本文教你怎么减少日志文件的大小。

2、[如何包装 try...catch](https://nalanj.dev/posts/safe-assignment/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202409/bg2024091403.webp)

JavaScript 语言的 try...catch 用起来非常不直观，作者提供了一种方法，将其包装成函数用法。

3、[iTerm2 的一些鲜为人知的功能](https://danielde.dev/blog/iterm2-features-i-find-useful)（英文）

![](https://cdn.beekka.com/blogimg/asset/202409/bg2024091704.webp)

iTerm2 是 Mac 平台的终端模拟器，有许多内置的功能，但是很多人都不知道这些功能。

4、[架设家庭 DNS 服务器的6个原因](https://www.xda-developers.com/reasons-host-your-own-dns-server-home/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202412/bg2024121904.webp)

本文介绍为什么你应该在家里架设自己的 DNS 服务器。

5、[寻找易记忆的质数](https://www.scientificamerican.com/article/these-prime-numbers-are-so-memorable-that-people-hunt-for-them/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202501/bg2025012201.webp)

本文介绍数学家如何寻找容易记忆的质数，其中提到两个大质数：1234567891 和1、2、3、4、5、6、7、8、9、10、9、8、7、6、5、4、3、2、1（把顿号去掉）。

6、[Python 的链式表达式](https://www.ashu1461.com/interview-gone-wrong/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202411/bg2024110401.webp)

作者作为面试官，发现面试者用了上图的奇怪语法。他认为这是错的，但实际却是 Python 的合法语法。

7、[推特的纯 CSS 点赞效果](https://leanrada.com/notes/css-sprite-sheets/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202411/bg2024110404.webp)

推特的点赞按钮是一颗心（上图），点击后出现一段动画效果。它是用 CSS Sprite 实现的，本文介绍如何做这个效果。

## 工具

1、[DeskPad](https://github.com/Stengo/DeskPad)

![](https://cdn.beekka.com/blogimg/asset/202410/bg2024101105.webp)

一个开源的 Mac 应用，在应用窗口里面，新建一个虚拟桌面，便于当众演示或分享给他人。

2、[Superdiff](https://github.com/DoneDeal0/superdiff)

![](https://cdn.beekka.com/blogimg/asset/202410/bg2024101201.webp)

一个 JS 库，对两个对象或数组进行 diff 操作，返回差异的部分。

3、[VS Code Pets](https://github.com/tonybaloney/vscode-pets)

![](https://cdn.beekka.com/blogimg/asset/202501/bg2025011903.webp)

一个 VS Code 插件，会在编辑器界面插入一个小宠物（小猫、小狗、小鸭等），显示不同动画，提升工作效率。

4、[AcousticKeyBoard](https://github.com/ZhuoZhuoCrayon/AcousticKeyBoard-Web)

![](https://cdn.beekka.com/blogimg/asset/202501/bg2025011806.webp)

一个 Web 应用，可以根据击键声，判断输入内容，另有 [App](https://github.com/ZhuoZhuoCrayon/AcousticKeyBoard-Web)。（[@ZhuoZhuoCrayon](https://github.com/ruanyf/weekly/issues/5949) 投稿）

5、[筷字输入法](https://github.com/crazydan-studio/kuaizi-ime)

![](https://cdn.beekka.com/blogimg/asset/202501/bg2025011807.webp)

开源的安卓汉语拼音输入法。（[@flytreeleft](https://github.com/ruanyf/weekly/issues/5957) 投稿）

6、[MusicCard](https://github.com/aidaox/MusicCard)

![](https://cdn.beekka.com/blogimg/asset/202501/bg2025012108.webp)

输入网易云音乐链接，自动提取歌曲信息，生成音乐海报。（[@aidaox](https://github.com/ruanyf/weekly/issues/5979) 投稿）

7、[Melody Workshop](https://github.com/RylanBot/melody-workshop)

![](https://cdn.beekka.com/blogimg/asset/202501/bg2025011808.webp)

基于 Web Audio API 实现纯前端的音频处理工具。（[@RylanBot](https://github.com/ruanyf/weekly/issues/5961) 投稿）

8、[lemon-template-react](https://github.com/sankeyangshu/lemon-template-react)

![](https://cdn.beekka.com/blogimg/asset/202501/bg2025012106.webp)

一个基于 React 的移动端 web 应用模板。（[@sankeyangshu](https://github.com/ruanyf/weekly/issues/5973) 投稿）

9、[Audiblez](https://github.com/santinic/audiblez)

这个工具可以将 Epub 电子书转成有声书，支持中文。

10、[PhotoStack](https://photostack.app/)

![](https://cdn.beekka.com/blogimg/asset/202501/bg2025011904.webp)

为图片添加水印的在线工具，[代码开源](https://github.com/corbindavenport/photostack)。

12、[story-flicks](https://github.com/alecm20/story-flicks)

![](https://cdn.beekka.com/blogimg/asset/202501/bg2025012107.webp)

一个开源的 AI 工具，一句话生成故事短视频。（[@alecm20](https://github.com/ruanyf/weekly/issues/5976) 投稿）

## 资源

1、[Learn Yjs](https://learn.yjs.dev/)

![](https://cdn.beekka.com/blogimg/asset/202501/bg2025011801.webp)

Yjs 是多个客户端实时同步状态的 JS 库，这里是它的官方互动教程。

2、[1000行代码的操作系统](https://operating-system-in-1000-lines.vercel.app/en/)（Operating System in 1,000 Lines）（英文）

![](https://cdn.beekka.com/blogimg/asset/202501/bg2025012109.webp)

免费电子书，讲解如何用 C 语言一步步从头构建一个小型操作系统。（[@sir2024](https://github.com/ruanyf/weekly/issues/5980) 投稿）

3、[欧洲程序员工资地图](https://www.levels.fyi/heatmap/europe/)

![](https://cdn.beekka.com/blogimg/asset/202501/bg2025011914.webp)

这张地图列出欧洲各国程序员的平均工资，可以看到第一名是瑞士，第二名英国，第三名爱尔兰，总体比美国低不少。

4、[玛雅金字塔](https://mused.com/guided/158/temple-26-and-excavation-tunnels-copan-ruinas/)

![](https://cdn.beekka.com/blogimg/asset/202410/bg2024101602.webp)

玛雅金字塔的 3D 游览，包括内部隧道。

## 图片

1、[嘉兴火车站](http://www.i-mad.com/zh-hans/press/mad%E6%A3%AE%E6%9E%97%E4%B8%AD%E7%9A%84%E7%81%AB%E8%BD%A6%E7%AB%99-%E5%98%89%E5%85%B4%E7%81%AB%E8%BD%A6%E7%AB%99%E5%90%AF%E7%94%A8%E9%80%9A%E8%BD%A6/)

嘉兴火车站，初建于1907年，2019年改建，2021年6月完工启用。

改建后，整个火车站搬到地下，是中国首个全下沉式火车站。地面腾出大量公共空间，改为公园。

设计师马岩松希望将其打造成“森林中的火车站”，集火车站与公园于一体。

![](https://cdn.beekka.com/blogimg/asset/202501/bg2025012101.webp)

![](https://cdn.beekka.com/blogimg/asset/202501/bg2025012104.webp)

“中国的火车站一个比一个大，像城市中一个个高大的宫殿，人在其中却感到非常渺小，周边通常是大马路、高架桥、和没有人去的大广场。我想，城市中的火车站有没有可能不追求宏大的纪念性，而具有优美的环境，舒适宜人的尺度，和便捷、人性的交通与城市功能？成为让人们不只是奔波，而是愿意停留、放松的城市公共空间？”

![](https://cdn.beekka.com/blogimg/asset/202501/bg2025012103.webp)

![](https://cdn.beekka.com/blogimg/asset/202501/bg2025012105.webp)

2、[仙女座星系全景图](https://petapixel.com/2025/01/16/417-megapixel-andromeda-galaxy-panorama-took-over-a-decade-to-make/)

仙女座星系就在银河系的旁边，是人类肉眼可见的最远星系。

天文学家利用哈勃太空望远镜，创建了一幅仙女座星系全景图，包括4.17亿像素，由600多张照片拼接而成。

![](https://cdn.beekka.com/blogimg/asset/202501/bg2025012202.webp)

这张全景图包含了2亿颗恒星，但仙女座星系估计总计有一万亿颗恒星，所以照片拍到的只是很小一部分。

下面是这张全景图的局部。

![](https://cdn.beekka.com/blogimg/asset/202501/bg2025012203.webp)

## 文摘

1、[如果建筑师像程序员一样工作](https://www.linkedin.com/posts/ochronus_if-architects-had-to-work-like-programmers-activity-7165994924516052992-EHG_/)

如果建筑师的工作条件像程序员一样，那么他可能收到下面这样的工作指示。

亲爱的建筑师先生！

请为我设计并建造一座房子。我不太确定我需要什么样的房子，所以你应该自行判断。

我的房子应该有两到四十五间卧室。当你把蓝图带给我时，我会做出我想要的最终决定，到时你只需确保能够轻松添加或删除卧室即可。

另外，请给我提供每种配置的成本明细，以便我可以任意选择一种。

请记住，我最终选择的房子的成本必须低于我目前居住的房子。但是，请确保改正我当前房子存在的所有缺陷（比如，厨房地板会振动，以及墙壁几乎没有足够的隔热层）。

在设计时，还要记住，我希望每年的维护成本尽可能低。

请注意在房屋的建造中使用现代设计实践和最新的材料，因为我希望它成为最新想法和方法的展示场所。但请注意，厨房的设计应能容纳我的1952年冰箱等物品。

请务必仔细权衡所有这些选项并做出正确的决定。然而，我保留否决您做出的任何决定的权利。

当你专门为我设计这座房子时，请记住，迟早我必须把它卖给别人。因此，它应该能够吸引各种各样的潜在买家。在最终确定计划之前，请确保我所在地区的人们一致认为他们喜欢这座房子的功能。

现在请不要用小细节来打扰我。你的工作是制定房子的总体规划。例如，现阶段不需要选定地毯颜色，但是请记住，我的妻子喜欢蓝色。

另外，现阶段不要考虑获取建造房屋本身的资源，您的首要任务是制定详细的计划和规范。然而，一旦我批准了这些计划，我预计房子将在48小时内准备好施工。

请准备一套完整的蓝图。目前没有必要进行真正的设计，因为它们将仅用于施工投标。但请注意，您将承担因后期设计变更而导致的任何建筑成本增加。

您一定很高兴能够从事这样一个有趣的项目！能够使用最新的技术和材料并在设计中获得如此的自由度是很少见的。请尽快与我联系并告知您完整的想法和计划。

附：我的妻子刚刚告诉我，她不同意我在这封信中给你的许多指示。作为建筑师，您有责任解决这些差异。我过去曾尝试过，但未能实现这一目标。如果你不能承担这个责任，我就不得不另找建筑师了。

## 言论

1、

OpenAI 相比 DeepSeek 有无限的资金，但是无限的资金能做的只是6个月～12个月的领先优势。

-- [Hacker News 网友](https://news.ycombinator.com/item?id=42768801)，评论本周发布的 DeepSeek R1 模型性能相当于 OpenAI o1 模型

2、

人的智力高低，未来不会像现在这样重要，AI 可以弥补人的智力。提出正确问题的能力，在未来比找到答案的能力更重要。

-- [Sam Altman](https://finance.sina.cn/7x24/2025-01-15/detail-inefaiqy4871246.d.html)，OpenAI 公司的 CEO。这令人想到，中国的应试教育考察的是，谁能记住最多的正确答案，真的需要改了。

3、

爱因斯坦一定承受了沉重的心理负担。到处都是白痴。

-- [大卫·林奇](https://news.ycombinator.com/item?id=42729726)，美国著名电影导演，上周去世

4、

在中国有一种很奇怪的现象，互联网公司喜欢把 API 称为“开放平台”。

例如，微信有一个“开放平台” [open.weixin.qq.com](https://open.weixin.qq.com/)，支付宝也有一个 [open.alipay.com](https://open.alipay.com/)，还有阿里云 [open.aliyun.com](https://open.aliyun.com/)。

-- [Hacker News 读者](https://news.ycombinator.com/item?id=42778650)

5、

SpaceX 公司的每一项战略，都是根据是否有利于登陆火星来评估的，这解释了那些在外界看来疯狂的举动。在 SpaceX 看来，无法登陆火星才是唯一重要的风险。如果马斯克觉得，摧毁 SpaceX 公司会增加登陆火星的机率，他会毫不犹豫地这么做。

-- SpaceX 公司传记《Reentry》（重返大气层）的[读后感](https://www.thepsmiths.com/p/review-reentry-by-eric-berger)

## 往年回顾

[技术写作的首要诀窍](https://www.ruanyifeng.com/blog/2024/01/weekly-issue-288.html)（#288）

[停止寻找的最佳时间](https://www.ruanyifeng.com/blog/2023/01/weekly-issue-238.html)（#238）

[音乐是反社交](https://www.ruanyifeng.com/blog/2021/12/weekly-issue-188.html)（#188）

[失业难以避免，重构人生规划](https://www.ruanyifeng.com/blog/2020/12/weekly-issue-138.html)（#138）

（完）

