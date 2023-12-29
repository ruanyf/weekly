# 科技爱好者周刊（第 284 期）：YouTube 有多少个视频？

这里记录每周值得分享的科技内容，周五发布。

本杂志[开源](https://github.com/ruanyf/weekly)，欢迎[投稿](https://github.com/ruanyf/weekly/issues)。另有[《谁在招人》](https://github.com/ruanyf/weekly/issues/3814)服务，发布程序员招聘信息。合作请[邮件联系](mailto:yifeng.ruan@gmail.com)（yifeng.ruan@gmail.com）。

## 封面图

![](https://cdn.beekka.com/blogimg/asset/202312/bg2023122614.webp)

一位意大利摄影师，苦苦尝试了6年，终于在本月拍到了一张难以置信的照片：大教堂、山峰、月亮处于一条直线，并且地球反射的太阳光，通过长曝光，可以照亮月亮顶部。（[via](https://apod.nasa.gov/apod/ap231225.html)）

## YouTube 有多少个视频？

YouTube 是世界最大视频网站，全世界的人都在上传视频。

![](https://cdn.beekka.com/blogimg/asset/202312/bg2023122405.webp)

但是，它没有透露过，内部一共有多少个视频。

上周，网上出现了[一篇有趣的文章](https://ethanzuckerman.com/2023/12/22/how-big-is-youtube/)，使用概率方法，估计 YouTube 的视频总数。

![](https://cdn.beekka.com/blogimg/asset/202312/bg2023122406.webp)

这篇文章非常有启发意义，面试可能也会出这一类的题目。下面，我就分享作者是怎么做的。

我们知道，每一个 YouTube 视频都有唯一编号，放在 URL 里面。

比如，某个视频的 URL 是`https://www.youtube.com/watch?v=NJHG0yuBabQ&`，那么它的视频编号就是`NJHG0yuBabQ&`。

![](https://cdn.beekka.com/blogimg/asset/202312/bg2023122407.webp)

YouTube 也没有透露过，这个编号是怎么产生的。

但是根据观察，可以得知它是一个11位字符串，前十位字符的取值范围是64个值（`[a-zA-Z0-9_-]`），最后的第十一位字符的取值范围只有16个值。

这意味着，所有的编号一共有 2^64 种可能，这是一个超级巨大的数字，足以容纳过去和将来所有可能生成的视频。

显然，不是每一个编号，都有对应的视频，绝大部分是空号，而且空号远远多于实际视频。如果我们假定，YouTube 一共有10亿个视频，那么你大概猜184亿次，才会猜中一个有效的编号（前提是这些编号为均匀分布）。

那么，**我们可以反推，通过抽中有效编号的概率，判断出 YouTube 一共有多少个视频**。

这就好比，某个地区的电话号码是从 843-000-0000 到 843-999-9999，一共有1000万个号码。我们随机拨打100个号码，如果其中10个可以接通（即10%的接通率），我们就可以判断出，大概有100万人拥有843号码，其他900万个都是空号。

那篇文章的作者就使用这种方法，随机构造视频编号，看看命中多少个，然后得到了一个结论：2023年 **YouTube 的视频总数估计为 133.25 亿**。

他们不仅估计了视频总数，还估计了其他很多指标，全部公开在网站 [tubestats.org](https://tubestats.org/) 上面。

![](https://cdn.beekka.com/blogimg/asset/202312/bg2023122408.webp)

根据这些数据，可以得到一些有趣的观察。

> - 2023年 YouTube 共有133亿个视频，2022年是93亿个，年增长率超过40%。
> - 4.5% 的视频一次也没有播放过。
> - 72% 的视频一条评论也没有。
> - 60% 的视频是 Vlog（个人生活）。
> - 9分钟到16分钟的视频最多，占到20%。

如果你对长视频的数据感兴趣，可以去这个网站挖掘。

最后，我看到网友提到，这种判断方法并不新鲜。生物学家早就用它，了解湖泊中鱼的总数。

你在池塘里钓到100条鱼，全部做好了标识，然后放生。过了一个星期，你又去钓了100条鱼，发现其中有30条是上周钓到过的，请问这个池塘一共有多少条鱼？

## 科技动态

1、[自动驾驶灯](https://www.cnn.com/2023/12/19/business/mercedes-adds-new-light-color-blue-for-self-driving/index.html)

奔驰汽车最近获得批准，在车辆上添加绿松石灯光。

![](https://cdn.beekka.com/blogimg/asset/202312/bg2023122006.webp)

这种灯光亮起时，就表示车辆处于自动驾驶状态。即使驾驶座上有司机，他此时也没有控制方向盘。

![](https://cdn.beekka.com/blogimg/asset/202312/bg2023122007.webp)

根据上图，该灯光出现在多个部位，包括车前灯、车后灯和后视镜上。

这个设计可能会成为所有车辆的共同标准。以后，我们通过车灯，就能区分自动驾驶车辆和人类驾驶车辆。但是那样，未来的马路上会不会都是一片青绿色？

2、[64核笔记本](https://notebook.pconline.com.cn/1694/16945317.html)

国内某厂商居然将服务器的64核 AMD EPYC CPU，放进了笔记本，并配上 RTX4080 显卡和液冷降温。

![](https://cdn.beekka.com/blogimg/asset/202312/bg2023121718.webp)

这可能是史上性能最强的笔记本了，因为用的是服务器配置。目前市场上性能最强的笔记本，不过是16核 CPU，而它是64核。

![](https://cdn.beekka.com/blogimg/asset/202312/bg2023121719.webp)

它的厚度为4.6厘米，其实还可以，但这造型太像板砖了，工业设计未免简陋了。

3、[Cybertruck 涉水模式](https://www.notebookcheck.net/Tesla-Cybertruck-seals-its-123-kWh-battery-during-river-crossings-using-the-air-suspension-tank.783958.0.html)

马斯克在推特上宣布（下图），Cybertruck 将有一个套装，可以变成船，在水里至少开100米。

![](https://cdn.beekka.com/blogimg/asset/202312/bg2023122205.webp)

早先媒体已经确认，Cybertruck 的菜单里面确实有一个“涉水模式”（ward mode）（下图），看来真的可以在水里开。

![](https://cdn.beekka.com/blogimg/asset/202312/bg2023122206.webp)

但是，这个车非常重，很难想象可以浮在水面上，更大可能是溯溪，车轮可以接触到水底。

![](https://cdn.beekka.com/blogimg/asset/202312/bg2023122207.webp)

有的媒体恶搞，猜测马斯克所说的“套装”是一个气垫船的底盘，可以装在 Cybertruck 的下面，还画了想象图。

![](https://cdn.beekka.com/blogimg/asset/202312/bg2023122208.webp)

4、[GitHub 贡献墙](https://deliprao.substack.com/p/the-great-ai-weirding)

有些国外的 HR 招聘人员，会查看求职者的 GitHub 贡献墙。

一篇文章透露，像下图这样的贡献墙，可能会让招聘官留下不好的印象，导致求职被拒。

![](https://cdn.beekka.com/blogimg/asset/202312/bg2023122203.webp)

上图这位程序员，周末两天基本不提交代码，圣诞假期、春假、暑假、秋假也很少提交。

5、[绵羊除草](https://www.ucdavis.edu/curiosity/news/surprising-benefits-of-sheep-mowers)

为了保持草坪整洁，除草机是必需的。但是，它的噪音很大，与安宁的环境不太协调。

加州大学戴维斯分校最近引入了绵羊，尝试用绵羊除草，而不是除草机。

![](https://cdn.beekka.com/blogimg/asset/202311/bg2023110210.webp)

最初这只是一个实验，看看绵羊能否替代除草机。但是后来发现，绵羊除了吃草，本身也是一道风景，并具有自然疗法的效果，让人们感到心灵平静。

![](https://cdn.beekka.com/blogimg/asset/202311/bg2023110211.webp)

现在，每天放出羊群到草坪上吃草，已经成了该校的固定做法。许多学生表示，绵羊让他们减轻了压力。

但是，绵羊需要额外的管理。每天早上，运输车将绵羊运入校园，晚上再运回谷仓，这是非常麻烦的，恐怕很难推广开来。

![](https://cdn.beekka.com/blogimg/asset/202311/bg2023110212.webp)

## 文章

1、[为什么手机最后1%的电可以用很久？](https://m.huxiu.com/article/2467552.html)（中文）

![](https://cdn.beekka.com/blogimg/asset/202312/bg2023122602.webp)

本文介绍手机剩余电量的计算方法。

2、[如何在 Windows 删除 Edge](https://github.com/ruanyf/weekly/issues/3804)（中文）

微软为了遵守欧元区的监管规定，允许该区域的用户卸载 Edge 并移除 Bing。网友找到了变通方法，让非欧元区的用户也能卸载 Edge。（[@WFANG12719](https://github.com/ruanyf/weekly/issues/3804) 投稿）

3、[iPhone 允许应用追踪用户](https://wingu.se/2023/11/30/only-apple-can-do-allow-apps-tracking-users-location-without-consensus.html)（中文）

![](https://cdn.beekka.com/blogimg/asset/202312/bg2023122201.webp)

iPhone 有一个 API，能够获取用户的  WiFi 接入点，从而在用户无感知的情况下对其精确定位，该功能还无法关闭。

4、[了解图形系统 X](https://silaoa.github.io/2020/2020-04-25-Cygwin%E7%B3%BB%E5%88%97%EF%BC%88%E5%8D%81%E4%BA%8C%EF%BC%89%EF%BC%9A%E4%BA%86%E8%A7%A3X.html)（中文）

![](https://cdn.beekka.com/blogimg/asset/202312/bg2023122401.webp)

Linux 图形环境的底层是 X 图形系统，本文对它进行一个通俗的介绍。（[@silaoA](https://github.com/ruanyf/weekly/issues/3790) 投稿）

5、[开源公司的生与死](https://lucumr.pocoo.org/2023/12/25/life-and-death-of-open-source/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202312/bg2023122615.webp)

一个外国人程序员购买了中国产的 3D 打印机 Bambu Lab A1。他很喜欢这台打印机，感叹中国公司基于其他人的开源软件，做出了更好的产品，威胁到了原始的开源公司的生存。

6、[如何用 Node.js 写一个命令行工具](https://evertpot.com/node-changelog-cli-tool/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202311/bg2023111320.webp)

本文介绍如果用 Node.js 的标准库，不加载任何外部模块，写一个命令行工具。

7、[如何拷贝 Windows 不能拷贝的文本](https://www.howtogeek.com/how-to-copy-uncopyable-texts-on-windows/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202311/bg2023111322.webp)

本文介绍三种方法，在 Windows 拷贝那些无法拷贝的文字，比如窗口面板上的文字（上图）。

8、[Firefox 的多账户容器](https://support.mozilla.org/en-US/kb/containers)（英文）

![](https://cdn.beekka.com/blogimg/asset/202311/bg2023111503.webp)

Firefox 允许新建容器，在容器里面访问某个网站。这不仅可以保护隐私，还可以同时登录单个网站的多个账户。

## 工具

1、[Score In URL](https://powersnail.com/ScoreInUrl/)

![](https://cdn.beekka.com/blogimg/asset/202208/bg2022080411.webp)

一个在线编辑和分享乐谱的网站，乐谱保存在 URL 之中。

2、[Teamlinker](https://github.com/Teamlinker/Teamlinker/blob/main/README-ZH-CN.md)

![](https://cdn.beekka.com/blogimg/asset/202312/bg2023122204.webp)

一个开源的团队协作平台，包含项目、Wiki、日历、会议、聊天和网盘等功能。（[@xbdsky](https://github.com/ruanyf/weekly/issues/3780) 投稿）

3、[Rspress](https://rspress.dev/zh/)

![](https://cdn.beekka.com/blogimg/asset/202312/bg2023122501.webp)

基于 Rspack 的静态站点生成器，内置了 Rust 工具链，性能优秀，上手简单。（[@sanyuan0704](https://github.com/ruanyf/weekly/issues/3792) 投稿）

4、[AudioCut](https://audiocut.app/)

![](https://cdn.beekka.com/blogimg/asset/202312/bg2023122609.webp)

一个 Web 工具，可以自动剪辑音频文件，去除噪音和重复内容，删除选中的单词和句子，适合编辑播客。（[@tangpanqing](https://github.com/ruanyf/weekly/issues/3794) 投稿）

5、[Tianji](https://github.com/msgbyte/tianji)

![](https://cdn.beekka.com/blogimg/asset/202312/bg2023122610.webp)

一个开源工具，网站流量分析 + 业务监控告警 + 服务器监控三合一，三种服务做在了一起。（[@moonrailgun](https://github.com/ruanyf/weekly/issues/3795) 投稿）

7、[Memo Card](https://memocard.net/)

![](https://cdn.beekka.com/blogimg/asset/202312/bg2023122611.webp)

一个 Web 工具，用来生成文字分享的卡片图。（[@ivone-liu](https://github.com/ruanyf/weekly/issues/3803) 投稿）

8、[vocal-separate](https://github.com/ruanyf/weekly/issues/3806)

![](https://cdn.beekka.com/blogimg/asset/202312/bg2023122612.webp)

一款极简的人声和背景音乐分离工具，将音视频文件分离为单独的人声文件和伴奏文件，完全本地化作业，无需连接外网。（[@jianchang512](https://github.com/ruanyf/weekly/issues/3806) 投稿）

9、[DouyinLiveRecorder](https://github.com/ihmily/DouyinLiveRecorder)

一款免费的直播录制工具，支持录制抖音、Tiktok、快手、虎牙、斗鱼、B站、小红书等多平台的直播视频。（[@ihmily](https://github.com/ruanyf/weekly/issues/3809) 投稿）

10、[Drawing Prompt](https://drawing-prompt.com/en)

![](https://cdn.beekka.com/blogimg/asset/202312/bg2023122705.webp)

一个文生图的辅助工具，可以自动扩展提示语，将简短的提示（非英语也可以）变成详尽丰富的英语提示，免费且无需登录。还支持生成随机的提示词 tag 组合，并内嵌 Fast SDXL 模型，用于预览效果。（[@dongan-beta](https://github.com/ruanyf/weekly/issues/3810) 投稿）

11、[cloudflare-ai-web](https://github.com/Jazee6/cloudflare-ai-web)

通过免费的 Cloudflare Worker，搭建一个你自己的 AI 平台，支持切换多个 AI 模型，试用 [Demo](https://ai.jaze.top/)。（[@Jazee6](https://github.com/ruanyf/weekly/issues/3812) 投稿）

12、[Penumbra](https://github.com/nealmckee/penumbra)

![](https://cdn.beekka.com/blogimg/asset/202208/bg2022080503.webp)

一种配色方案，有明暗两个主题。据说是通过数学计算得到的、最有利于感知的配色方案。

## 资源

1、[计算机科学热门论文](https://trendingpapers.com/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202312/bg2023121803.webp)

该网站按照动态排名，列出计算机领域的最新热门论文。

2、[黑客新闻电讯](https://hntelegraph.com/)

![](https://cdn.beekka.com/blogimg/asset/202312/bg2023121720.webp)

这个网站使用 AI，将“黑客新闻”每天的热点写成一篇篇报道，以后的“内容农场”大概就是这种样子。

3、[老式电脑纸模型](http://rockybergen.com/papercraft)

![](https://cdn.beekka.com/blogimg/asset/202311/bg2023110606.webp)

该网站提供各种老式电脑的折纸模型下载。

4、[Kickass markdown](https://github.com/Olwiba/Kickass-markdown)

![](https://cdn.beekka.com/blogimg/asset/202311/bg2023110710.webp)

这个仓库收集各种 GitHub Markdown 技巧，比如显示红底白字（上图）。

5、[Hugging Face 课程](https://huggingface.co/learn)

![](https://cdn.beekka.com/blogimg/asset/202306/bg2023062815.webp)

著名 AI 平台 Hugging Face 的官方学习频道，目前有三门课程：NLP、深度学习和 AI 音频处理。

## 图片

1、[波浪墙](https://twistedsifter.com/2020/06/how-wavy-crinkle-crankle-walls-use-less-bricks-than-straight-walls/)

英国的很多砖墙砌成波浪形。

![](https://cdn.beekka.com/blogimg/asset/202307/bg2023072803.webp)

表面上看，这样既浪费土地，又费工，但是它也有显著的优点。

![](https://cdn.beekka.com/blogimg/asset/202307/bg2023072804.webp)

它采用拱桥的曲面结构，具有更强的抗压力，所以比直墙更牢固，因此它可以修得很薄，比较节省材料。

![](https://cdn.beekka.com/blogimg/asset/202307/bg2023072805.webp)

![](https://cdn.beekka.com/blogimg/asset/202307/bg2023072806.webp)

## 文摘

1、**香农与爱因斯坦**

信息论奠基人香农的传记里面，记录了一段他与爱因斯坦的趣事。

![](https://cdn.beekka.com/blogimg/asset/202312/bg2023122702.webp)

博士毕业以后，香农来到普林斯顿高等研究院，爱因斯坦也在那里。

![](https://cdn.beekka.com/blogimg/asset/202312/bg2023122703.webp)

当时，香农只是一个小讲师，而爱因斯坦已经是名满世界的大科学家。

有一次，香农正在研究院给一群数学家上课，教室的后门打开了，爱因斯坦走了进来。

爱因斯坦站着听了几分钟课，然后与后排的一个听课者耳语一番，就离开了教室。

![](https://cdn.beekka.com/blogimg/asset/202312/bg2023122704.webp)

课程结束后，香农匆匆忙忙地赶到教室后排，找到那个与爱因斯坦耳语的人，迫切想要知道这名伟大的科学家对他的讲课内容有哪些评价。

那个人告诉他：“爱因斯坦只是问了洗手间怎么走。“

## 言论

1、

直到有一天，你意识到了你会死，手头的事情做不完，一切就都发生了改变。从那一天开始，你花费的时间才是真正花出去的时间。

-- [马丁·斯科塞斯](https://www.gq.com/story/martin-scorsese-profile)，美国著名电影导演，今年80岁

2、

亚历山大大帝建立马其顿帝国后，有一天突然哭了，因为他感到没有更多的世界可以征服了。

-- [古罗马作家普鲁塔克](https://www.theparisreview.org/blog/2020/03/19/and-alexander-wept/)

3、

普通人很难理解天才的思考过程，因为天才一方面很难向他人解释自己的想法，另一方面也不屑于这样做。

-- 乔治·亨利·刘易斯，英国哲学家

4、

专利流氓利用 AI 生成大量想法，然后逐一申请专利，这只是时间问题。

-- [Hacker News 读者](https://news.ycombinator.com/item?id=38269714)

5、

作家总是与一张白纸（或一个空白屏幕）进行对抗，通常是白纸获胜。

ChatGPT 的用户总是与一个空白文本框进行对抗，通常是空白文本框获胜。

-- [dbreunig.com](https://www.dbreunig.com/2023/11/14/the-tyranny-of-the-blank-textbox.html)

## 往年回顾

[真实方位是如何暴露的？](https://www.ruanyifeng.com/blog/2022/12/weekly-issue-237.html)（2022 #237）

[元宇宙会成功吗](https://www.ruanyifeng.com/blog/2021/12/weekly-issue-187.html)（2021 #187）

[Slack 被收购，以及企业的技术选型](https://www.ruanyifeng.com/blog/2020/12/weekly-issue-136.html)（2020 #137）

[新人要为团队写文档](https://www.ruanyifeng.com/blog/2019/12/weekly-issue-87.html)（2019 #87）

（完）

