# 科技爱好者周刊（第 334 期）：年终笔记四则

这里记录每周值得分享的科技内容，周五发布。

本杂志[开源](https://github.com/ruanyf/weekly)，欢迎[投稿](https://github.com/ruanyf/weekly/issues)。另有[《谁在招人》](https://github.com/ruanyf/weekly/issues/5830)服务，发布程序员招聘信息。合作请[邮件联系](mailto:yifeng.ruan@gmail.com)（yifeng.ruan@gmail.com）。

## 封面图

![](https://cdn.beekka.com/blogimg/asset/202501/bg2025011608.webp)

武汉光谷是今年春节晚会的分会场，将表演灯光秀，非常有科幻感。（[via](https://m.jstv.com/photo/2025/1/10/1327223884412051456.html)）

## 年终笔记四则

下面是过去的笔记，我读到有意思的文章时，记录下来的感想，每一则都不长。

前几天翻阅，觉得可以放在一起，重新发布，今天先发四则。

### 一、工作也有利息

银行存款有利息，存得越久，利息越多。

工作也是一样，也有利息。如果今年的工作可以节省明年或未来的工作时间，就是一份[有利息的工作](https://www.linkedin.com/pulse/time-value-mike-speiser/)。

![](https://cdn.beekka.com/blogimg/asset/202501/bg2025011621.webp)

工作有利息，意味着你未来的工作时间会变少，多出来的时间，就可以去做别的事情，创造更多的价值。

这提示我们：

（1）不要轻易更换工作领域，否则以前积累的利息就作废了。只有在同一个工作领域，才可能产生长期积累，以前的工作为以后打基础，最终产生巨大的利息。

（2）在职业生涯的早期，积累效果最好，最容易产生复利。开始积累越晚，产生复利就越少。

（3）有些劳动没有积累效果，不会产生利息，比如重复性的机械劳动（快递、咖啡店员、门卫……），你明年还是要重复做这些事情。

（4）最好的人生策略就是，找到你深感兴趣、可以长期做下去的领域，在上面投入大量的工作时间（包括质量和数量），然后随着年龄增长，享受以前工作的复利。

### 二、巴菲特的选人标准

巴菲特说，他考察候选人，就看[三个“i”](https://www.inc.com/marcel-schwantes/warren-buffett-hiring-top-talent-characteristics.html)。

![](https://cdn.beekka.com/blogimg/asset/202207/bg2022071611.webp)

> - integrity（正直）
> - intelligence（智慧）
> - initiative（主动）

这三个“i”当中，“主动”最重要。“正直”和“智慧”的人到处都是，但如果不主动，不是自己想去做些什么，就什么也不会发生。

### 三、快乐机

1974年，一个美国哲学家提出一个假设，如果世界上有“[快乐机](https://en.wikipedia.org/wiki/Experience_machine)”，只要插上电源，就能带来源源不断的快乐，并且无法分辨，这种机器快乐与现实世界的快乐有何不同。

![](https://cdn.beekka.com/blogimg/asset/202202/bg2022022609.webp)

哲学家说，我们就可以观察人们的选择。

如果大多数人选择快乐机，而不是现实生活，这就证明人生的目标是体验尽可能多的快乐（享乐主义）。

当时因为不可能造出快乐机，所以无法验证他的假设是否正确。现在不一样了，有了游戏机、VR 头盔、短视频平台……

### 四、未来的三种关键能力

未来，你需要三种能力。

（1）专业能力。你需要有一个专长。

（2）写作能力。未来是远程工作，团队成员分散在各地，以写作——而不是当面交流——作为主要的沟通手段。

（3）视频制作能力。以前，文字能影响大众，现在视频是最强的大众传播渠道。如果你能制作好看的视频，将想法和产品可视化，就更容易让更多用户看见。

## [本周软件] Midscene.js：浏览器自动化利器

本周介绍一个很特别的浏览器自动化工具：[Midscene.js](https://github.com/web-infra-dev/midscene)。

![](https://cdn.beekka.com/blogimg/asset/202501/bg2025011306.webp)

它的最大特点，就是自然语言驱动（需要自行[接入 AI 模型](https://midscenejs.com/zh/model-provider.html)），操作浏览器，以及理解网页内容，将结果以 JSON 数据返回。

大家可以安装它的[浏览器插件](https://chromewebstore.google.com/detail/midscene/gbldofcpkknbggpkmbdaefngejllnief)，直接输入自然语言指令，进行体验。

![](https://cdn.beekka.com/blogimg/asset/202501/bg2025011305.webp)

比如，交互指令（点击搜索按钮）、查询指令（返回所有商品的链接）、断言指令（页面是否有三个按钮）。

有了它，你可以编写 [YAML 脚本](https://midscenejs.com/zh/automate-with-scripts-in-yaml.html)，完成浏览器自动化；也可以将它接入 Puppeteer 和 Playwright，让后两者接受自然语言指令。

使用自然语言驱动之后，自动化脚本变得容易维护、效果更稳定。

总之，如果你需要浏览器 UI 测试，或者抓取网页数据，就不要错过 [Midscene.js](https://midscenejs.com/zh/)。它在 GitHub 已经获得2700颗星。

## 科技动态

1、[VR 审判](https://www.instagram.com/p/DEVcSZ7SaZQ/)

美国最近的一起民事案件的审判中，被告律师让法官戴上了 VR 头盔。

![](https://cdn.beekka.com/blogimg/asset/202501/bg2025010609.webp)

律师说，他们制作了一段 VR 动画，可以让法官从被告的视角，沉浸式了解整个案件的过程。

![](https://cdn.beekka.com/blogimg/asset/202501/bg2025010610.webp)

![](https://cdn.beekka.com/blogimg/asset/202501/bg2025010611.webp)

这是历史上第一次，法庭审判使用 VR 头盔。

![](https://cdn.beekka.com/blogimg/asset/202501/bg2025010613.webp)

所有人在法庭上都戴着 VR 头盔，场景很魔幻。完全可能的是，整个审判以后可能都会搬到虚拟世界，不必所有人到场。

2、[亚马逊最大的树](https://ctrees.org/news/largest-tree-amazon-with-fabien-wagner-63)

亚马逊原始森林有无数棵树，没人知道哪一棵最大。

一个美国科学家通过卫星照片，找到了一棵可能是亚马逊最大的树。

![](https://cdn.beekka.com/blogimg/asset/202501/bg2025010501.webp)

卫星照片只能拍到树冠，只要识别出最大的树冠，就应该是最大的树。

科学家发现，有一棵树的树冠，直径超过60米，相当于树下可以停五辆头尾相连的大巴，可谓树王。

![](https://cdn.beekka.com/blogimg/asset/202501/bg2025010502.webp)

3、**其他**

（1）[中文互联网语料资源平台](https://corpus.cybersac.cn/#/dataSet)发布，一共 2.7TB 中文资料，向社会开放，专门用来训练大模型。

![](https://cdn.beekka.com/blogimg/asset/202501/bg2025011101.webp)

（2）一位国外用户购买了[亚马逊的视频会员](https://old.reddit.com/r/mildlyinfuriating/comments/1hx5wkq/my_amazon_tv_now_unmutes_itself_during_prime/)，震惊地发现，电视机明明开了静音，但是广告时间居然会自动取消静音。

![](https://cdn.beekka.com/blogimg/asset/202501/bg2025011102.webp)

## 文章

1、[一个副业应用的开发心得](https://javayhu.com/2018-nian-yi-ge-xiao-fu-ye-de-kai-fa-xin-de/)（中文）

![](https://cdn.beekka.com/blogimg/asset/202501/bg2025011520.webp)

本文总结2018年作者为自己的安卓应用，加了一个收费功能的开发心得。（[@javayhu](https://github.com/ruanyf/weekly/issues/5924) 投稿）

2、[俄罗斯和乌克兰各自有哪些知名软件？](https://mp.weixin.qq.com/s/4O69yhwYgB0s0vP7skTWlw)（中文）

本文介绍了两国的知名软件，都有不少很厉害的项目。（[@mzhren](https://github.com/ruanyf/weekly/issues/5935) 投稿）

3、[为什么要学习写编译器](https://takashiidobe.com/gen/writing-compilers)（英文）

![](https://cdn.beekka.com/blogimg/asset/202405/bg2024051601.webp)

作者谈为什么你应该试试自己写一个编译器，并且提供了三个入门的学习资源。

4、[国际数学奥林匹克金牌得主的去向](https://xquant.substack.com/p/where-have-the-international-math-0d9)（英文）

![](https://cdn.beekka.com/blogimg/asset/202408/bg2024080406.webp)

国际数学奥林匹克是高中生的数学比赛，作者做了一个调查，历届金牌得主后来怎么样？

5、[AWS S3 与 Cloudflare R2 比较](https://kerkour.com/aws-s3-vs-cloudflare-r2-price-performance-user-experience)（英文）

![](https://cdn.beekka.com/blogimg/asset/202411/bg2024112805.webp)

AWS S3 是一个老牌的存储服务，Cloudflare R2 是它的新兴对手。本文比较这两种服务。

6、[无限滚动轮播的 CSS 实现](https://blog.logto.io/css-only-infinite-scroll)（英文）

![](https://cdn.beekka.com/blogimg/asset/202409/bg2024090703.webp)

本文教你只用 CSS 实现类似弹幕的无限滚动轮播效果，还能用鼠标悬停。

7、[如何将笔记本用作第二个显示器](https://www.xda-developers.com/how-use-laptop-second-monitor/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202410/bg2024100505.webp)

一篇电脑使用的教程，如何将笔记本当作显示器使用。

## 工具

1、[barba.js](https://barba.js.org/)

![](https://cdn.beekka.com/blogimg/asset/202403/bg2024033002.webp)

一个 JS 库，让网站页面的切换产生平滑的动画效果。

2、[httpdbg](https://github.com/cle-b/httpdbg)

![](https://cdn.beekka.com/blogimg/asset/202409/bg2024092810.webp)

一个 Python 程序的桌面调试器，在类似浏览器控制台的环境里调试 HTTP 请求。

3、[BiliMusic](https://github.com/609529897/bilibili_music)

![](https://cdn.beekka.com/blogimg/asset/202501/bg2025011618.webp)

一个 macOS 桌面程序，让用户播放 B 站收藏的音乐。（[@609529897](https://github.com/ruanyf/weekly/issues/5937) 投稿）

4、[ScreenShot](https://screenshot.onionai.so/)

![](https://cdn.beekka.com/blogimg/asset/202501/bg2025011517.webp)

免费的 App 预览图制作工具，支持华为、小米、OPPO、VIVO、鸿蒙、AppStore的应用商店预览图制作。（[@ovelv](https://github.com/ruanyf/weekly/issues/5906) 投稿）

5、[猫步简历](https://github.com/Hacker233/resume-design)

![](https://cdn.beekka.com/blogimg/asset/202501/bg2025011518.webp)

免费开源的简历制作工具，提供各种模版和主题，可以定制化模块。（[@Hacker233](https://github.com/ruanyf/weekly/issues/5910) 投稿）

6、[KeyClicker](https://github.com/jaywcjlove/key-clicker)

![](https://cdn.beekka.com/blogimg/asset/202501/bg2025011521.webp)

开源的 macOS 应用，打字时模拟机械键盘和打字机的声音，有200多种声效。（[@jaywcjlove](https://github.com/ruanyf/weekly/issues/5925) 投稿）

7、[Peek Focus](https://peekfoc.us/)

![](https://cdn.beekka.com/blogimg/asset/202501/bg2025011522.webp)

一个 Chrome 插件，点击时，不在新的标签页、而在页面浮层里打开链接。（[@zerosoul](https://github.com/ruanyf/weekly/issues/5926) 投稿）

8、[Docker 镜像拉取工具](https://github.com/topcss/docker-pull-tar)

该工具用于下载 Docker 镜像，无需 Docker 环境，支持自定义仓库地址，配置国内镜像源。（[@topcss](https://github.com/ruanyf/weekly/issues/5931) 投稿）

9、[壁纸样机生成器](https://www.taojuju.com/)

![](https://cdn.beekka.com/blogimg/asset/202501/bg2025011614.webp)

生成电子设备壁纸效果图的免费工具。（[@leven-z](https://github.com/ruanyf/weekly/issues/5932) 投稿）

10、[BlogKeeper-文捕](https://www.blog-keeper.com/)

![](https://cdn.beekka.com/blogimg/asset/202501/bg2025011615.webp)

在线博客文章解析下载工具，支持微信公众号/博客园/CSDN/掘金/简书/思否等平台，可以保存成多种格式。（[@GailZhangJY](https://github.com/ruanyf/weekly/issues/5933) 投稿）

## AI 相关

1、[Raphael AI](https://raphael.app/zh)

![](https://cdn.beekka.com/blogimg/asset/202501/bg2025011619.webp)

基于 Flux.1-DEV 模型的 AI 图像生成网站，免费、无使用量限制、不需要注册。（[@markliuyuxiang](https://github.com/ruanyf/weekly/issues/5939) 投稿）

2、[AI Shortcuts](https://chromewebstore.google.com/detail/ai-shortcuts-for-chatgpt/dkhpgbbhlnmjbkihoeniojpkggkabbbl)

![](https://cdn.beekka.com/blogimg/asset/202501/bg2025011516.webp)

Chrome 浏览器扩展，一键查询不同 AI 。（[@taoAIGC](https://github.com/ruanyf/weekly/issues/5904) 投稿）

3、[Audio Transcription](https://podcast.zeabur.app/)

![](https://cdn.beekka.com/blogimg/asset/202501/bg2025011617.webp)

将播客或音频转录成文本，并给出摘要，基于 Next.js 和 OpenAI Whisper，[代码开源](https://github.com/winterfx/Podcast-Transcription)。（[@winterfx](https://github.com/ruanyf/weekly/issues/5934) 投稿）

4、[Get Your Perfect Chinese Name](https://givemeachinesename.com/)

![](https://cdn.beekka.com/blogimg/asset/202501/bg2025011620.webp)

AI 给外国人起中文名字。（[@syhdeclan](https://github.com/ruanyf/weekly/issues/5940) 投稿）

## 资源

1、[BestBlogs.dev](https://www.bestblogs.dev/)

![](https://cdn.beekka.com/blogimg/asset/202501/bg2025011616.webp)

精选中文科技文章的阅读平台。（[@ginobefun](https://github.com/ruanyf/weekly/issues/5909) 投稿）

2、[自洽的程序员](https://github.com/zhangchenchen/self-consistent-coder)

![](https://cdn.beekka.com/blogimg/asset/202501/bg2025011519.webp)

一本中文电子书，作者分享如何调整心态，解决职场常见问题，提供[在线阅读](https://self-consistent-coder.readthedocs.io/zh-cn/latest/)。（[@zhangchenchen](https://github.com/ruanyf/weekly/issues/5919) 投稿）

3、[我的 3D 主页](https://dement.dev/)

![](https://cdn.beekka.com/blogimg/asset/202501/bg2025011607.webp)

作者用 React Three Fiber 构建的 3D 个人主页，非常华丽。

4、[Staying](https://staying.fun/zh)

![](https://cdn.beekka.com/blogimg/asset/202501/bg2025011609.webp)

代码可视化网站，可以将 Python 和 JS 代码的运行步骤，以动画形式展示，内置了许多常见算法的演示。（[@lezhu1234](https://github.com/ruanyf/weekly/issues/5929) 投稿）

## 图片

1、[错误的数学](https://www.charlespetzold.com/blog/2025/01/Very-Wrong-Math.html)

一位美国网友注意到，一家设计公司在社交媒体上，发布了下面的图片。

![](https://cdn.beekka.com/blogimg/asset/202501/bg2025011201.webp)

图片声称，33000英尺（1万米）高空的飞机，比5000英尺（1500米）的飞机，在飞向同样目的地时，花费的时间是后者的4倍（假定飞行速度相同）。

这位网友第一反应是，这是在开笑话吗？它为什么忽略地球半径。

地球半径（设为 R）大约是1800万英尺，这意味着外圈长度只比内圈，多了不到1%。

![](https://cdn.beekka.com/blogimg/asset/202501/bg2025011202.webp)

而且，由于33000英尺高空的空气阻力减小，该高度的飞行时间实际上可能更少。

2、[报时球](https://en.wikipedia.org/wiki/Time_ball)

报时球（time ball）是19世纪港口使用的一种报时装置，供海上的水手校准时间。

![](https://cdn.beekka.com/blogimg/asset/202311/bg2023111506.webp)

平时，球都在杆子顶部。每天中午1点，球就会落到杆子的底部，看到的人就知道1点到了。

![](https://cdn.beekka.com/blogimg/asset/202311/bg2023111507.webp)

在1点前5分钟，球会落到杆子的一半，让大家做好准备。完全落下后，过了两三分钟，球就会重新升起。

![](https://cdn.beekka.com/blogimg/asset/202311/bg2023111508.webp)

## 文摘

1、[照明的历史](https://bigthink.com/the-past/genius-and-blood-how-cheap-light-transformed-civilization/)

工业革命之前，世界是漆黑的，灯光极其昂贵，火是唯一的人造光源。

历史上，人造光一直是富人和有权势的人的特权，生产和维护既费力又肮脏，可用性和质量都很差。穷人很难获得人造光，总是生活在黑暗中。

古代房屋在夜晚有蜡烛照明，是巨大财富的标志。当时，蜂蜡制成的优质蜡烛是最好的光源，但天然蜂蜡的供应有限，加上手工制作的繁琐，除了最富有的人之外，其他人都买不到优质蜡烛。

一位作家写道：“打开你的冰箱门，你召唤出的光线比18世纪大多数家庭所享受的光线总量还要多。”

后来人们发现，鲸油（鲸鱼的皮下脂肪）是更好的蜡烛材料，燃烧时发出干净、稳定的光，是工业革命早期了最好的照明，但它也非常昂贵。

捕鲸业为世界带来了照明，但也将一些鲸鱼物种推向了灭绝的边缘。仅在1700年至1800年间，为了得到鲸油，就至少有300,000头鲸鱼被屠杀。

1800年代初，欧洲和美国出现了燃气照明，燃烧煤气来发光。然而，燃气照明的安装和维护费用昂贵，而且有危险。所以，煤气灯一般不用在家里，而用在工商业和大城市的路灯。

煤气灯很亮，比之前的任何灯至少亮20倍。使用燃气照明是人类第一次体验明亮的照明。
 
1846年，天然气生产的副产品煤焦油（简称煤油）做成灯，用来照明。煤油开始取代鲸油，导致照明成本直线下降，并且燃烧时明亮、无味。

正是因为煤油，夜间第一次变得明亮了，天黑后也能生产和娱乐。

19世纪后半期，托马斯·爱迪生（Thomas Edison）发明了电灯，电照明的时代从此来临。

## 言论

1、

人类一种可能的未来是，人工智能精英坐拥惊人的财富，与世隔绝，然后拿出最少量的施舍，来保证广大的失业人员不闹事。

-- 李开复《AI·未来》

2、

互联网早就不是缺少管制、充满颠覆性创新的领域了，如今人们正在寻找一种新的监管和治理框架，以应对极少数大型数字企业对互联网的垄断。

-- [《2024年 IP 地址报告》](https://www.potaroo.net/ispcol/2025-01/addr2024.html)

3、

如果你仔细想想，最好的书实际上是一个极其漫长的咒语，它让你在余生中变成另一个人。

-- [@thisone0verhere.bsky.social](https://bsky.app/profile/thisone0verhere.bsky.social/post/3ld4fibye4s2s)

4、

父亲要求我，只要有时间，就总是参加葬礼，哪怕这对我有一些不方便和情绪压抑。因为这样做，你就参与分担了他人生活中那些不可避免的、偶尔发生的灾难。

-- [《总是参加葬礼》](https://www.npr.org/2005/08/08/4785079/always-go-to-the-funeral)

5、

我不明白，99%进入 AI 底层模型开发的公司，能得到什么好处？

如果 AI 模型真的像宣传的那样，能做到任何事情，那么大多数公司只需要等待，就能获得跟自行开发模型同样的好处。很多公司似乎都非常害怕错失良机，其实根本不存在这一点。

-- [Hacker News 读者](https://news.ycombinator.com/item?id=42431415)

## 往年回顾

- #287：[禄丰恐龙谷记行](http://www.ruanyifeng.com/blog/2024/01/weekly-issue-287.html)
- #237：[真实方位是如何暴露的？](http://www.ruanyifeng.com/blog/2022/12/weekly-issue-237.html)
- #187：[元宇宙会成功吗](http://www.ruanyifeng.com/blog/2021/12/weekly-issue-187.html)
- #137：[Slack 被收购，以及企业的技术选型](http://www.ruanyifeng.com/blog/2020/12/weekly-issue-137.html)

（完）

