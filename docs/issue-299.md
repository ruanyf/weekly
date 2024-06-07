# 科技爱好者周刊（第 299 期）：AI 的关键是语料

这里记录每周值得分享的科技内容，周五发布。

本杂志[开源](https://github.com/ruanyf/weekly)，欢迎[投稿](https://github.com/ruanyf/weekly/issues)。另有[《谁在招人》](https://github.com/ruanyf/weekly/issues/4390)服务，发布程序员招聘信息。合作请[邮件联系](mailto:yifeng.ruan@gmail.com)（yifeng.ruan@gmail.com）。

## 封面图

![](https://cdn.beekka.com/blogimg/asset/202404/bg2024042401.webp)

上图是河南新乡的中原融创文旅城“冰立方”，模仿冰块堆叠的效果，10个玻璃冰块组成三个建筑单元。（[via](https://www.archiposition.com/items/20211223113906)）

## AI 的关键是语料

大家有没有发现，现在打开新闻，都是 AI 模型的消息。

今天甲发布一个模型，明天乙发布一个模型，个个（听上去）都具备了不得的能力。

![](https://cdn.beekka.com/blogimg/asset/202405/bg2024050805.webp)

2023年5月有[一个统计](https://www.chinanews.com.cn/cj/2023/05-29/10016032.shtml)，那个时候，10亿参数以上的模型，中国已经发布了79个。一年过去了，现在恐怕上千了。

![](https://cdn.beekka.com/blogimg/asset/202405/bg2024050806.webp)

说实话，我现在看到新模型，已经麻木了，压根不觉得这种消息有什么重要。

我的观点是，不管怎么调整模型的架构、功能、参数，作用是有限的，**真正决定性的因素是训练模型的语料。**

不需要说，你的模型多新颖、多强大，只需要告诉我，你用什么语料训练模型。

模型完美，但是语料垃圾，一样不行；反之，模型很平常，但是语料足够，那就 OK。**模型不是关键，语料才是关键。**

![](https://cdn.beekka.com/blogimg/asset/202405/bg2024050807.webp)

这其实不是我的观点，而是 OpenAI 的工程师 James Betker 的观点。他是 AI 专家，著名“文生图”模型 DALL-E 的第一作者。

![](https://cdn.beekka.com/blogimg/asset/202405/bg2024050808.webp)

去年，他写过[一篇文章](https://nonint.com/2023/06/10/the-it-in-ai-models-is-the-dataset/)，只有几段话，在国外的影响很大。国内似乎没人提到这件事。但是我认为，这篇文章很重要。

他说，自己的日常工作就是开发 AI 模型，但是不管怎么增加参数、调整方程，模型效果都不如语料集的大小来得显著。

更多的训练材料，会显著提升模型效果，影响远大于其他因素。更神奇的是，**不同的模型拿同样的语料训练，最后的表现居然很接近。**

他的结论是，模型的差异其实不是关键，决定性的是你的训练材料。只要有更多更好的语料，不管用什么模型，都会得到差不多的结果。

初次听到，你可能觉得，这个结论难以置信，但是仔细想想，你会发现它很可能是对的。

因为不管什么 AI 模型，最终目标只有一个，就是模仿人类的思维。语料体现的正是人类思维，同一份语料，不管你拿什么规则去分析，最后得到的结果应该是一样的，因为它包含的人类思维是不变的。

这就好像，<u>不同的画家去临摹同一个模特，如果目标都是复现原貌，那么只要画家达到一定水准，不管谁来画，结果将非常接近，因为模特的长相是不变的。</u>

这告诉我们两点启示。

（1）哪一家公司的语料的数量多、质量好，它的模型就会强于其他公司。

（2）开源模型完全可以替代闭源模型，前提是训练语料要足够。

下面是 James Betker 的原文，大家仔细读读，看看是否认同他的观点。

> 我在 OpenAI 工作已经快一年了。这段时间里，我训练了很多生成式 AI 模型，比任何人能想到的还要多。
> 
> 每当我花了几个小时，观察和调整各种模型配置和参数时，有一件事让我印象深刻，那就是所有训练结果之间的相似性。
>
> 我越来越发现，**这些模型以令人难以置信的程度，向它们的语料集靠近。**
>
> 这表明在相同的语料集上训练足够长的时间，几乎每个具有足够权重和训练时间的模型都会收敛到同一点。足够大的扩散卷积网络会产生相同的结果。
>
> 这是一个令人惊讶的观察！
> 
> 这意味着模型行为不是由架构、参数或优化器决定的。它由你的语料集决定，没有其他决定因素。其他一切因素都不过是为了有效计算以近似该语料集的手段。
> 
> 当你谈论 Lambda、ChatGPT、Bard 或Claude 时，指的并不是它们的模型，而是它们的语料集。

## 稀土开发者大会：征集议题和早鸟票

国内开发者的线下大聚会要来了，今年的“稀土开发者大会”已经定下了时间，就在六月底。

这次大会的议题非常广泛：前端、AI、云计算、架构、DevOps……

**最重要的一点是，它向所有开发者开放演讲台**。<u>如果你有工具要推出，有开发的经验要分享，大会都会提供演讲台，让你展示在全国开发者面前。</u>

只要能引起听众兴趣的干货内容，就可以申请成为演讲嘉宾，在该主题的分论坛上台发言。一旦组委会确定，即可免费参加本次大会。

其他朋友参加大会，可以现在购买早鸟票。**两天的所有活动，学生票只要99元**，基本上就是电影票的价格。正常票的拼团价是139元，如果两天包午餐，价格是799元。

![](https://cdn.beekka.com/blogimg/asset/202405/bg2024050906.webp)

提交议题和购票，都请点击[这个链接](https://conf.juejin.cn/xdc2024/?utm_source=ryf)，或者扫描上方海报的二维码。早鸟票的时间和名额有限，如果你想结交朋友、感受业内动向，不妨抓紧时间购票。

## 科技动态

1、[气球屋](https://www.travelandleisure.com/airbnb-icons-category-orsay-up-prince-8641957)

住宿平台 airbnb 推出了一个[气球屋](https://zh.airbnb.com/rooms/1126185893236246260)，完美地再现了迪斯尼电影《飞屋环游记》，住客现在就可以申请入住。

![](https://cdn.beekka.com/blogimg/asset/202405/bg2024050402.webp)

这个屋子的所有家具和布局，跟电影里面一模一样。

![](https://cdn.beekka.com/blogimg/asset/202405/bg2024050403.webp)

它的屋顶上了装了8000个氦气球。

![](https://cdn.beekka.com/blogimg/asset/202405/bg2024050404.webp)

这个屋子可以“飞”起来，当然不是气球拉动的，而是用吊车把它吊在半空，然后游客住在里面。

![](https://cdn.beekka.com/blogimg/asset/202405/bg2024050405.webp)

![](https://cdn.beekka.com/blogimg/asset/202405/bg2024050406.webp)

我在想，如果吊在半空，水电怎么供应呢？看来这栋屋子一定配备了水箱、水泵、发电机和电池。

2、[AI 小姐](https://www.euronews.com/culture/2024/04/25/miss-ai-worlds-first-beauty-contest-with-computer-generated-women)

一家英国互联网公司宣布，举办第一届世界 AI 小姐选美比赛。

![](https://cdn.beekka.com/blogimg/asset/202405/bg2024050109.webp)

今年5月10日之前，全世界的创作者都可以向[它的官网](https://www.waicas.com/)提交作品。

作品不仅仅包括 AI 生成的虚拟美女照片，还必须在社交平台上与粉丝互动，涨粉数量也是评选指标之一。

![](https://cdn.beekka.com/blogimg/asset/202405/bg2024050110.webp)

评审团将评出前三名，获得“AI 小姐”的称号，还有总额2万美元的奖金。

主办单位称，该比赛是为了扩大 AI 的影响，帮助创作者将内容货币化。这件事表明，娱乐业将是 AI 最早、最大的应用领域之一。

3、[摩托车的呼啸声](https://boehs.org/node/everything-i-know-about-the-xz-backdoor)

一些摩托车骑士喜欢非常响亮的引擎呼啸声，甚至去改动引擎。他们辩解，大音量的噪声能够让别人尽早注意到，从而减少交通事故。

为了验证这种说法是否正确，一个罗马尼亚团队进行了现场实验。

![](https://cdn.beekka.com/blogimg/asset/202404/bg2024040704.webp)

他们一共实验了6辆摩托车，噪音都在80分贝到110分贝之间。这是很大的噪音，飞机起飞时的噪音为100分贝到120分贝，摩托车的噪音就是这么响。

![](https://cdn.beekka.com/blogimg/asset/202404/bg2024040705.webp)

研究人员发现，如果轿车司机关闭车窗，那么只有摩托车距离汽车10米之内时，司机才会听到声音。这意味着，高速行驶时，司机根本来不及做出反应。

这个实验说明，保证交通安全的不是响亮的引擎声，而是要降低车速。

## 文章

1、[CPU 超频的天花板](https://www.163.com/dy/article/J1IE4PAD0511BLFD.html)（中文）

![](https://cdn.beekka.com/blogimg/asset/202405/bg2024050701.webp)

很多玩家喜欢超频 CPU，越快越好。但是，到达物理极限后，就很难突破。用了整整15年，世界纪录才从 8G Hz 提高到 9G Hz。

2、[空的 S3 存储桶也能产生费用](https://medium.com/@maciej.pocwierz/how-an-empty-s3-bucket-can-make-your-aws-bill-explode-934a383cb8b1)（英文）

![](https://cdn.beekka.com/blogimg/asset/202404/bg2024043008.webp)

亚马逊 S3 是最流行的存储云服务，作者建了一个空存储桶，万万没想到，没有写入任何数据，两天居然产生了1300美元的费用。

3、[2024阿里巴巴全球数学竞赛预选赛](https://www.longluo.me/blog/2024/04/16/2024-alibaba-global-mathematics-competition-qualifying-round/)（中文）

![](https://cdn.beekka.com/blogimg/asset/202405/bg2024050201.webp)

作者参加2024阿里巴巴全球数学竞赛预选赛，全部七道题只会做第1、2、6题，他分享了自己的解答。（[@longluo](https://github.com/ruanyf/weekly/issues/4394) 投稿）

4、[Git 的离线使用](https://www.gibbard.me/using_git_offline/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202401/bg2024010913.webp)

作者介绍没有网络怎样备份 Git 仓库，比如把本地仓库推送到 U 盘。

5、[如何为项目设置打卡点](https://kyleshevlin.com/make-checkpoint/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202403/bg2024033101.webp)

本文介绍一种便捷方法，使用 Makefile 在代码仓库里面设置打卡点（checkpoint）。

6、[服务器实时消息获取的技术方案](https://rxdb.info/articles/websockets-sse-polling-webrtc-webtransport.html)（英文）

![](https://cdn.beekka.com/blogimg/asset/202403/bg2024031902.webp)

本文比较了浏览器获得服务器实时消息的五种技术方案：WebSockets、服务器发送事件、长轮询、WebRTC、WebTransport。

## AI 相关

1、[Remix Yourself](https://styleof.com/s/remix-yourself)

这个网站要求上传三张照片，第一张是布局，第二张是样式，第三张是人像。

![](https://cdn.beekka.com/blogimg/asset/202404/bg2024042702.webp)

它会将它们合成一张。

![](https://cdn.beekka.com/blogimg/asset/202404/bg2024042703.webp)

2、[twogethe.ai](https://twogether.ai/)

![](https://cdn.beekka.com/blogimg/asset/202311/bg2023111502.webp)

这个网站使用 AI，生成你与名人（或者任意两个人）的合照。

3、[AI 说图解图](https://imagedescriptiongenerator.xyz/zh)

![](https://cdn.beekka.com/blogimg/asset/202404/bg2024042901.webp)

一个[开源](https://github.com/ShurshanX/AI-Image-Description)软件，生成上传图片的文字描述，基于 ERNIE 3.5 和 GEMINI-PRO-1.5 API。（[@ShurshanX](https://github.com/ruanyf/weekly/issues/4370) 投稿）

4、[AI 生成的音乐视频](https://mashable.com/article/ai-music-videos)（英文）

![](https://cdn.beekka.com/blogimg/asset/202405/bg2024050706.webp)

OpenAI 发布了一段4分钟的音乐视频，画面和音乐都是 AI 生成的。这是迄今 AI 生成的最长视频。

5、[HackerNews 每日 AI 摘要](https://www.supertechfans.com/cn)

![](https://cdn.beekka.com/blogimg/asset/202404/bg2024042903.webp)

这个项目对 Hacker News 每天的热点文章，生成中文的 AI 摘要，除了官网，还会发到[飞书](https://lw9eez9cc6.feishu.cn/wiki/Z408wHLlRi8MdCk6QfacpW6bnB0)上面。（[@rmrf](https://github.com/ruanyf/weekly/issues/3634) 投稿）

6、[MaxKB](https://github.com/1Panel-dev/MaxKB)

![](https://cdn.beekka.com/blogimg/asset/202404/bg2024043001.webp)

一款基于 LLM 大语言模型的知识库问答系统，可以无缝嵌入第三方网站，实现智能问答。（[@maninhill](https://github.com/ruanyf/weekly/issues/4386) 投稿）

7、[GeoSpy AI](https://geospy.ai/)

这个网站使用 AI 识别上传照片的拍摄地点。

8、[七个免费 LLM Playground](https://www.bilibili.com/read/cv34309921/)

本文列出七个可以在线试用各种 LLM 的网站。（[@webup](https://github.com/ruanyf/weekly/issues/4408) 投稿）

## 工具

1、[ElysiaJS](https://elysiajs.com/)

![](https://cdn.beekka.com/blogimg/asset/202401/bg2024011107.webp)

JS 语言的 Web 框架，专门为 Bun 运行环境开发。

2、[mcfly](https://github.com/cantino/mcfly)

![](https://cdn.beekka.com/blogimg/asset/202401/bg2024011302.webp)

Shell 操作历史的搜索工具，提供神经网络搜索功能，可以替代 ctrl-r 快捷键。

3、[DocKit](https://github.com/geek-fun/dockit)

![](https://cdn.beekka.com/blogimg/asset/202404/bg2024042902.webp)

Elasticsearch/OpenSearch 的跨平台桌面客户端，集成了 OpenAI，可以用自然语言与数据库交互。（[@Blankll](https://github.com/ruanyf/weekly/issues/4374) 投稿）

4、[IMaker 创客](https://github.com/slince-zero/IMaker)

![](https://cdn.beekka.com/blogimg/asset/202404/bg2024042906.webp)

一款开源的封面设计工具，基于 JS 的 Web 应用，有[试用 Demo](https://img-maker.vercel.app/)。（[@slince-zero](https://github.com/ruanyf/weekly/issues/4385) 投稿）

5、[VideoSubtitleGenerator](https://github.com/buxuku/VideoSubtitleGenerator)

一个命令行工具，通过语音识别，批量为本地的视频文件生成字幕，并支持翻译。（[@buxuku](https://github.com/ruanyf/weekly/issues/4393) 投稿）

6、[vmr](https://github.com/gvcgo/version-manager)

![](https://cdn.beekka.com/blogimg/asset/202405/bg2024050401.webp)

一个跨平台的通用版本管理器，目前支持40多种编程语言和工具。（[@moqsien](https://github.com/ruanyf/weekly/issues/4398) 投稿）

另有一个类似工具 [vfox](https://github.com/version-fox/vfox)。（[@aooohan](https://github.com/ruanyf/weekly/issues/4233) 投稿）

7、[Pichome](https://github.com/zyx0814/Pichome)

![](https://cdn.beekka.com/blogimg/asset/202405/bg2024050707.webp)

一款开源网盘程序，使用 PHP 开发。（[@fhxsnabi](https://github.com/ruanyf/weekly/issues/4405) 投稿）

8、[笔.COOL](https://bi.cool/bi)

![](https://cdn.beekka.com/blogimg/asset/202405/bg2024050708.webp)

CodePen 的国产替代品，实时预览 HTML、CSS 和 JavaScript 代码的渲染结果。（[@uovol](https://github.com/ruanyf/weekly/issues/4407) 投稿）

9、[vue-styled-components](https://github.com/v-vibe/vue-styled-components)

![](https://cdn.beekka.com/blogimg/asset/202405/bg2024050709.webp)

一款类似 styled-components 的 CSS 工具，支持 vue 3。（[@akinocccc](https://github.com/ruanyf/weekly/issues/4409) 投稿）

10、[MonsterMusic](https://github.com/ZTFtrue/MonsterMusic)

![](https://cdn.beekka.com/blogimg/asset/202405/bg2024050710.webp)

一款开源的安卓音乐播放器。（[@ZTFtrue](https://github.com/ruanyf/weekly/issues/4411) 投稿）

11、[豆瓣图书馆查询助手](https://github.com/wyj0605/douban_library)

![](https://cdn.beekka.com/blogimg/asset/202405/bg2024050905.webp)

一款浏览器插件，在豆瓣读书页面上，查看该书在指定图书馆的藏书情况。（[@wyj0605](https://github.com/ruanyf/weekly/issues/4424) 投稿）

## 资源

1、[技术概念示意图](https://github.com/ByteByteGoHq/system-design-101#rest-api-vs-graphql)

![](https://cdn.beekka.com/blogimg/asset/202310/bg2023102601.webp)

这个仓库收集各种技术概念的示意图。

2、[海棠诗社](https://haitang.app/)

![](https://cdn.beekka.com/blogimg/asset/202404/bg2024042905.webp)

网友开发的诗词网站。（[@javayhu](https://github.com/ruanyf/weekly/issues/4384) 投稿）

3、[svgl](https://svgl.vercel.app/)

![](https://cdn.beekka.com/blogimg/asset/202312/bg2023121702.webp)

一个常用徽标 Logo 的搜索引擎，提供 SVG 文件下载。

4、[Brick Center](https://www.brickcenter.net)

![](https://cdn.beekka.com/blogimg/asset/202405/bg2024050904.webp)

你输入一个关键词，这个网站自动生成它的乐高拼装。（[@husu](https://github.com/ruanyf/weekly/issues/4421) 投稿）

## 图片

1、[MacBook 的内存](https://www.macrumors.com/2024/04/26/apple-mac-base-ram-boosts-ended-tim-cook/)

苹果的 MacBook 笔记本，内存是 8GB。如果要更多的内存，就要花钱买，价格非常贵。

![](https://cdn.beekka.com/blogimg/asset/202404/bg2024042602.webp)

大家都在质疑，为什么内存这么少？相比之下，Windows 笔记本的最小内存，现在一般都是 16GB。

苹果解释，macOS 系统效率高，自家的 8GB 内存等于别家的 16GB。

有人画了一张 MacBook 内存演变图。

![](https://cdn.beekka.com/blogimg/asset/202404/bg2024042601.webp)

从上图可以看到，苹果以前是经常升级内存的，每过几年就升级一次。

但是，2011年以后只升级过一次内存，从 6GB 变成 8GB，以后就一直没升级。

有意思的是，2011年是蒂姆·库克成为苹果 CEO 的时间。他以前是主管供应链的，以成本控制而闻名。

2、[PalmOS](https://www.nkorth.com/palm/apps/#totp-authenticator)

还有人记得 iPhone 之前的智能手机吗？

当时主要系统是诺基亚的塞班、微软的 Windows CE 和 PalmOS。下面就是 Palm 手机。

![](https://cdn.beekka.com/blogimg/asset/202405/bg2024050702.webp)

它的用户界面如下。

![](https://cdn.beekka.com/blogimg/asset/202405/bg2024050703.webp)

![](https://cdn.beekka.com/blogimg/asset/202405/bg2024050704.webp)

![](https://cdn.beekka.com/blogimg/asset/202405/bg2024050705.webp)

不要觉得简陋，那是当时最先进的系统，售价几千元人民币一部。

## 文摘

1、[饱腹感指数](http://www.mendosa.com/satiety.htm)

什么食物最能够消除饥饿感？

一个澳大利亚科学家发明了“饱腹感指数”。他选出38种食物，每一种的热量都是240卡路里。

实验者依次食用每一种食物，每吃一种，就要在随后的两小时中，每隔15分钟为自己的饱腹程度打分。

![](https://cdn.beekka.com/blogimg/asset/202405/bg2024050809.webp)

最后发现，碳水化合物（面包、炸薯条、煮土豆）的效果最好。其中，煮土豆的饱腹感指数最高。

这是因为食物中含有的纤维、蛋白质和水越多，消化时间就越长，从而产生更久的饱腹感。而且，碳水化合物会立即升高血糖，从而使得身体马上知道已经饱了。

煮土豆含有大量的纤维和水，同样热量的情况下，体积又很大，还会升高血糖，所以产生了长时间的饱腹感。

![](https://cdn.beekka.com/blogimg/asset/202405/bg2024050810.webp)

水果的饱腹感指数也很高，因为水份和纤维含量大，但是水果的热量低，同样热量的情况下，水果的份量最多，不容易全吃下去。而且，水果的胃排空速度很快，第二个小时饱腹感就会消失。

高脂肪食物的饱腹感很差，因为它们的胃排空速度也很快。所以，吃肥肉容易饿。

因此，水果搭配高碳水、高蛋白的食物一起吃（比如全麦面包 + 瘦肉 + 橙子），是一个比较好的饮食方案。

## 言论

1、

软件公司应该提倡“无罪文化”。

发生产品事故或者服务中断时，不要认定罪人并惩罚他们，而要假设相关个人出于良好意图，只是没有得到正确的信息来做出更好的决策，或者没有工具及时制止他们犯错。

-- [《关于无罪文化》](https://www.gybe.ca/a-few-words-about-blameless-culture/)

2、

我们做的许多不想做的事情，实际上很容易开始做，比如很容易开始喝酒，或者很容易打开抖音。

如果你想停止做这些事，首先就是要设法增加障碍，让自己很难开始做它们。

-- [《出现就是成功的75%》](https://joshwolff.me/2023/01/19/blockchain-events-extra-documentation.html)

3、

科技行业的一切，核心都是利润，而不是其他任何事情。因此，你需要尽快推出新产品或新服务，这样才可能产生利润。这意味着尽量使用更多的抽象层、更多的自动化、更少的人员，结果就是开发者越来越缺乏对技术的深入理解。

-- [《我们使用了太多的抽象层次》](https://unixsheikh.com/articles/we-have-used-too-many-levels-of-abstractions-and-now-the-future-looks-bleak.html)

4、

岛屿巨人症指的是一种生物现象，生存在岛屿上的动物，小型物种往往会身体变大，因为缺乏天敌。相应地，大型物种往往会身体变小（又称“岛屿侏儒症”），因为不容易有稳定的食物供给。

-- [维基百科](https://en.wikipedia.org/wiki/Island_gigantism)

5、

风险投资家没有理由破坏与你的关系，他们拒绝你的时候不会说“不”，而会用其他400种说法，比如“等你的用户再多一点的时候，再和我们谈谈”、“当你下一轮融资时，请来找我们”。

-- [《投资家的“是”实际上意味着“否”》](https://jacobbartlett.substack.com/p/yes-actually-means-no-the-curious)

## 往年回顾

[互联网创业变难了](https://www.ruanyifeng.com/blog/2023/04/weekly-issue-252.html)（2023 #252）

[三个有启发的学习方法](https://www.ruanyifeng.com/blog/2022/04/weekly-issue-202.html)（2022 #202）

[从北大到技校](https://www.ruanyifeng.com/blog/2021/04/weekly-issue-152.html)（2021 #152）

[工作热情从何而来？](https://www.ruanyifeng.com/blog/2020/04/weekly-issue-102.html)（2020 #102）

（完）

