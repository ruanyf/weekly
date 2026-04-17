# 科技爱好者周刊（第 393 期）：脑腐状态

这里记录每周值得分享的科技内容，周五发布。

本杂志[开源](https://github.com/ruanyf/weekly)，欢迎[投稿](https://github.com/ruanyf/weekly/issues)。另有[《谁在招人》](https://github.com/ruanyf/weekly/issues/9454)服务，发布程序员招聘信息。合作请[邮件联系](mailto:yifeng.ruan@gmail.com)（yifeng.ruan@gmail.com）。

## 封面图

![](https://cdn.beekka.com/blogimg/asset/202604/bg2026041608.webp)

湖南益阳的和平签证主题博物馆，纪念二战时期何凤山博士救助犹太人。外立面的层层钢板象征签证文件，狭窄而棱角分明的入口给人一种压抑的感觉，进入后的空间逐渐走向释放和光明。（[via](https://architizer.com/projects/peace-visa-for-life-theme-museum/)）

## 脑腐状态

最近学到一个新词“脑腐”（brain rot）。

![](https://cdn.beekka.com/blogimg/asset/202604/bg2026041617.webp)

它就是字面意思。有些人看上去是正常的，但是大脑已经变异了，有些部分腐烂了。

根据[介绍文章](https://jshamsul.com/essays/2026-04-12-brainrot-industrial-complex)，**“脑腐”的症状就是思考能力下降，难以长时间集中注意力**，进行深入的推理和反思。

一遇到比较难、需要反复思考的问题，你就会烦躁，不仅是心理烦躁，还会生理烦躁，全身不安，不愿意多想，就希望赶快了结。

你有没有这个症状？如果有，就有“脑腐”的危险了。我感觉，我的大脑就有一点。遇到复杂的软件概念和算法，以前会仔细研究，直到搞懂为止，现在更可能看一眼就跳过去，不懂就不懂了，知道名字就可以了。

**“脑腐”的主要原因是，网络平台上面那些夸张的“标题党”文章和短视频**。它们的目标是吸引流量，在最短时间内引发阅读者/观看者的兴趣，感到满足。当你长期观看这些内容以后，**大脑就被密集刺激，思维兴奋状态的维持时间越来越短**，丧失了长时间深入思考的能力。

这就是为什么一个人看惯短视频以后，就离不开内容压缩了。一篇几千字的文章，他也会要求大模型生成总结；一部90分钟的电影，他也宁愿看几分钟的电影解说。

一旦“脑腐”了，难以长时间集中注意力进行思考，也就难以学习和处理高难度问题了。现在看上去，没有好的解决办法，因为现代人的时间越来越琐碎，内容碎片化是大趋势。

应对之策也许就是反过来，将学习和思考拆解成一系列短问题。比如，以后的学习不再是一厚本教材，而是几十个的系列短视频，每个用两三分钟解释一个知识点。只有这个时间长度，学生的思维才能保持专注。

## 权重有没有版权？

国产大模型一般是开源的，但是最近有所改变。

有的大模型闭源发布；有的只开源小参数版本，不开源大参数版本；有的不允许商用，除非得到许可。我就不点名了。

![](https://cdn.beekka.com/blogimg/asset/202604/bg2026041615.webp)

“黑客新闻”的一个读者，针对开源大模型修改许可证这件事，提出[质疑](https://news.ycombinator.com/item?id=47738685)：**开源大模型可能无权设置许可证。**

他的意思是，现在的开源大模型主要开源的是权重文件，以及配套的运行代码。所谓“权重文件”就是一个巨大的矩阵，表示各个 Token 在生成结果中出现的可能性。

权重是大模型的核心，而它来自于对海量语料的计算。这就是说，**权重不过是计算结果，他认为，计算结果是没有版权的**。

比如说，你写了一个程序，实现了一种更高效的根号2的算法。那么，这个程序是有版权的，但是计算结果根号2（1.414）是没有版权的。因为计算结果不过是机械过程的产物，不涉及人类创造力。

按照这种说法，权重根本没有版权，当然也就谈不上设置或修改许可证了。

我不是版权专家，不能确定这种说法对不对，但是听上去有道理。大家可以自己去问问大模型“计算结果有没有版权？”，看看大模型怎么回答。

![](https://cdn.beekka.com/blogimg/asset/202604/bg2026041614.webp)

## 科技动态

1、[摄像头耳机](https://www.washington.edu/news/2026/04/14/cameras-in-wireless-earbuds-vuebuds/?user_id=66c4c9305d78644b3ac5df9c)

华盛顿大学的研究团队，开发出世界首个带有微型摄像头的无线耳机。

![](https://cdn.beekka.com/blogimg/asset/202604/bg2026041610.webp)

上图中，耳机底部的小凸起就是微型摄像头。

它的最大用途就是跟 AI 互动。你可以直接问：“我手里的英文杂志的封面标题是什么意思”，耳机就会把摄像头图像，通过蓝牙发到手机，手机的大模型就会回答。

由于带宽限制，它只能拍摄低分辨率的黑白图像。长远来看，如果不需要显示模块，这种摄像头耳机要比 AI 眼镜更适合穿戴使用，因为很多人不喜欢长时间戴眼镜。

2、[排行榜的 AI 歌手](https://www.showbiz411.com/2026/04/05/itunes-takeover-by-fake-ai-singer-eddie-dalton-now-occupies-eleven-spots-on-chart-despite-not-being-human-or-real-exclusive)

最近，有人向苹果音乐商店 iTunes 上传了艾迪·道尔顿（Eddie Dalton）的歌曲。

这个歌手实际上并不存在，形象、声音、视频都是 AI 生成的，但是上传者没有披露。

![](https://cdn.beekka.com/blogimg/asset/202604/bg2026040702.webp)

结果，这些 AI 歌曲大受欢迎。iTunes 单曲榜前100名中，他居然占据了11席，有两首歌进入了前10名。

他的专辑在 iTunes 上也排名第三。

以前，有人说 AI 和机器人承担日常工作以后，人类可以从事艺术创作，比如唱歌、跳舞、画画、写作、拍视频……现在看上去，AI 也会跟人类争夺艺术工作。

3、[经济舱座椅](https://www.usatoday.com/story/travel/airline-news/2026/03/24/united-couch-style-economy-seats/89306783007/)

长途飞行的经济舱座椅，非常不舒服，美联航想出了一种改进办法。

如果是一家三口，可以将座椅的坐垫卸下，从而一家躺在地上睡觉。

![](https://cdn.beekka.com/blogimg/asset/202603/bg2026032803.webp)

航空公司会提供枕头和毛毯，甚至还有床垫。

如果是单人旅客，你就需要同时购买三个相邻座位，好在这样还是比头等舱便宜。

![](https://cdn.beekka.com/blogimg/asset/202603/bg2026032804.webp)

我觉得，中国高铁可以考虑这种做法，某些没有卧铺的长途线路允许拆卸几排座位，让乘客躺在地上休息。

## 文章

1、[Claude Code 的源码真相](https://techtrenches.dev/p/the-snake-that-ate-itself-what-claude)（英文）

![](https://cdn.beekka.com/blogimg/asset/202604/bg2026041611.webp)

前不久，Claude Code 源码泄漏，人们仔细研究以后，发现这些源码全部是 AI 生成的，质量不高。一个函数就长达3,167行，包含486个判断分支和12层嵌套，入口文件 main.tsx 大小为 785 KB。

作者得出结论，AI 编程流行后，代码泄露、供应链攻击、乱七八糟的生产代码，会成为新常态。

2、[Chrome 浏览器原生支持技能](https://blog.google/products-and-platforms/products/chrome/skills-in-chrome/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202604/bg2026041604.webp)

Chrome 官方宣布，支持在 Gemini 插件里面使用技能（skill），也就是一段预置的提示词，用来一键完成任务。这应该是浏览器以后的发展方向。

3、[安卓会剥离照片的位置信息](https://shkspr.mobi/blog/2026/04/android-now-stops-you-sharing-your-location-in-photos/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202604/bg2026041606.webp)

本文指出一个容易忽视的点，那就是网页上传照片，安卓会自动剥离照片的位置信息。蓝牙或 QuickShare 分享照片也不行，除非你自己开发照片应用，或者用 USB 传输照片。

4、[我的每月20美元技术栈](https://stevehanov.ca/blog/how-i-run-multiple-10k-mrr-companies-on-a-20month-tech-stack)（英文）

![](https://cdn.beekka.com/blogimg/asset/202604/bg2026041613.webp)

作者的网站每月产生1万美元收入，而运营成本仅为20美元，作者介绍他采用的技术栈。

5、[你真的需要数据库吗？](https://www.dbpro.app/blog/do-you-even-need-a-database)（英文）

![](https://cdn.beekka.com/blogimg/asset/202604/bg2026041602.webp)

本文提出，如果数据量不大，小型网站完全可以不用数据库，直接把数据保存在文件里面，无论是直接读文件、或者从内存查询，再或者二分法查询，速度都不慢。

6、[自制软饮料](https://blinry.org/diy-soft-drinks/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202604/bg2026041612.webp)

作者记录在家里自制可乐的过程，原来包含那么多化学品。

7、[关于索引，你不知道的事](https://jon.chrt.dev/2026/04/15/things-you-didnt-know-about-indexes.html)（英文）

![](https://cdn.beekka.com/blogimg/asset/202604/bg2026041603.webp)

一篇数据库科普文章，通过实例介绍索引（index）的基本用法。

## 工具

1、[DAVINCI RESOLVE 21](https://www.blackmagicdesign.com/products/davinciresolve/photo)

![](https://cdn.beekka.com/blogimg/asset/202604/bg2026041501.webp)

著名视频编辑软件“达芬奇”的新版本，加入了图像编辑，可以当作照片编辑软件了。

2、[Phyphox](https://phyphox.org/)

![](https://cdn.beekka.com/blogimg/asset/202604/bg2026041616.webp)

一个著名的老牌手机应用（支持 iPhone 和安卓），提供各种手机传感器的应用界面，由德国亚琛工业大学开发。

3、[Material You NewTab](https://github.com/prem-k-r/materialYouNewTab)

![](https://cdn.beekka.com/blogimg/asset/202410/bg2024100501.webp)

一个 Chrome 插件，用来定制新标签的主页。

4、[ClipCascade](https://github.com/Sathvik-Rao/ClipCascade)

![](https://cdn.beekka.com/blogimg/asset/202410/bg2024100503.webp)

一个同步剪贴板的工具，可以将一台电脑的剪贴板自动同步到另一台电脑，不过需要安装它的服务端和客户端（支持 Windows、Linux、安卓）。

5、[Gridea Pro](https://github.com/Gridea-Pro/gridea-pro)

![](https://cdn.beekka.com/blogimg/asset/202604/bg2026041201.webp)

桌面静态博客写作客户端，不用设置服务器，零门槛建立自己的静态博客网站。（[@Hao4Wang](https://github.com/ruanyf/weekly/issues/9565) 投稿）

6、[Recordly](https://github.com/webadderall/Recordly)

![](https://cdn.beekka.com/blogimg/asset/202604/bg2026041202.webp)

开源的录屏与编辑工具，适用于制作演示、产品展示、教程、讲解视频等，可以录制整个屏幕或单个窗口，并直接进入编辑器。（[@Hao4Wang](https://github.com/ruanyf/weekly/issues/9571) 投稿）

7、[水印](https://wt.65536.dev/)

![](https://cdn.beekka.com/blogimg/asset/202604/bg2026041301.webp)

为图像和视频添加水印的网站，支持自定义模板。（[@FurryR](https://github.com/ruanyf/weekly/issues/9579) 投稿）

8、[Input 0](https://github.com/10xChengTu/input0)

免费开源的 macOS 语音输入工具，本地运行，支持大模型识别语音文本，并进行文本润色。（[@Justin3go](https://github.com/ruanyf/weekly/issues/9607) 投稿）

9、[OpenToggl](https://github.com/CorrectRoadH/OpenToggl)

![](https://cdn.beekka.com/blogimg/asset/202604/bg2026041401.webp)

开源的时间追踪工具，商业软件 [Toggl](https://toggl.com/) 的替代品。（[@CorrectRoadH](https://github.com/ruanyf/weekly/issues/9615) 投稿）

## AI 相关

1、[OmniVoice Studio](https://github.com/debpalash/OmniVoice-Studio)

![](https://cdn.beekka.com/blogimg/asset/202604/bg2026041609.webp)

视频配音的 AI 桌面应用，支持语音翻译和克隆，无需 API 密钥和云端服务，完全本地生成。（[@Hao4Wang](https://github.com/ruanyf/weekly/issues/9633) 投稿）

2、[EVA](https://github.com/usepr/eva)

一个极简的 AI 编程智能体，仅需单个 Python 脚本，定位为低配版 Claude Code，可以参考它的实现。（[@usepr](https://github.com/ruanyf/weekly/issues/9560) 投稿）

3、[claude-msync](https://github.com/debugtheworldbot/msync)

一个命令行工具，导出 claude code 的记忆（memory），然后输入 Claude 客户端或其他 AI Agent。（[@debugtheworldbot](https://github.com/ruanyf/weekly/issues/9589) 投稿）

4、[TokenTracker](https://github.com/mm7894215/TokenTracker)

![](https://cdn.beekka.com/blogimg/asset/202604/bg2026041402.webp)

生成本地的 Token 消耗统计报表，支持多种 Agent（Claude Code、Codex、Cursor、Gemini、Kiro、OpenCode、OpenClaw 和 Every Code）。（[@mm7894215](https://github.com/ruanyf/weekly/issues/9627) 投稿）

## 资源

1、[中国卷烟博物馆](https://www.ciggies.app/)

![](https://cdn.beekka.com/blogimg/asset/202604/bg2026041601.webp)

一个个人网站，收集各种国产品牌的卷烟。

2、[2026世界新闻摄影大赛获奖作品](https://petapixel.com/2026/04/09/over-70-powerful-winners-from-the-2026-world-press-photo-contest/?user_id=66c4c9305d78644b3ac5df9c)

![](https://cdn.beekka.com/blogimg/asset/202604/bg2026041302.webp)

这个页面列出了世界新闻摄影奖今年一共70幅获奖作品，记录了去年的许多新闻事件。

上图是在四川绵阳的大熊猫公园王朗保护区，使用红外线感应相机拍摄到的野外大熊猫。

3、[guide.world](https://guide.world/)

![](https://cdn.beekka.com/blogimg/asset/202604/bg2026041605.webp)

这个网站收集世界各地的优秀游记散文，不过文章还不多。

## 图片

1、[月球上的激光反射器](https://www.smithsonianmag.com/smithsonian-institution/apollo-astronauts-left-american-flags-boots-and-even-poop-on-the-moon-heres-why-these-artifacts-matter-180984736/)

1971年，美国阿波罗14号飞船登陆月球后，宇航员将一个手提箱大小的白色设备，放在月球表面。

![](https://cdn.beekka.com/blogimg/asset/202407/bg2024072212.webp)

这是一个激光反射器，有点像镜子，可以将射来的激光反射回去。

![](https://cdn.beekka.com/blogimg/asset/202407/bg2024072213.jpg)

它用来测量地球与月球的精确距离。地球向月球发射激光，被这面镜子反射回来，地球接收到反射的信号，通过时间差就能知道精确距离。

![](https://cdn.beekka.com/blogimg/asset/202407/bg2024072214.webp)

目前的测量精度已经达到了毫米级。科学家发现，月球正以每年3.8厘米的速度远离地球。

## 文摘

1、[合同软件开发的糟糕现状](https://smustafa.blog/2025/04/30/the-abysmal-state-of-contract-software-development/)

有些程序员是基于项目的合同工，不是正式的雇员。

这些程序员选择合同工，而不是稳定的全职工作，是因为想要灵活性和短期经济利益。灵活性指的是，工作时间可以自己安排，而且你可以同时签订多份合同。

可惜的是，现实情况是，公司雇佣了大量合同工，他们没有福利，解雇起来也容易得多，而且工资比全职员工低。

我知道这些，因为我干过好几次合同工。

除了薪酬和福利不如全职员工，你还根本没有带薪休假。如果生病了或者需要休息一天，就根本拿不到这一天的工资。

合同工还有一个问题，被告知的工作和最终实际分配的工作，往往存在重大差异。

我曾经面试了一个 Java 的后端职位，但实际情况是，我几乎没有编写或维护任何 Java 代码，而是被要求去写 React 代码，修复从另一个团队继承下来的有问题的 Jest 测试，以及极其缓慢的 Webpack 配置。

两个月后，我被解雇，理由是毫无根据的“绩效原因”。我知道这只是借口，我遇到了太多自己根本无法控制的问题。

我的另一次合同工经历，也是如此。我在团队里轮班待命，周六早上要值班却没有工资；我提交的工时表被断然拒绝，老板打电话问我为什么要加班。

后来我发现，我的雇主不愿意支付我加班费，再后来我被解除了合同，他们在电话里告诉我不胜任这项工作。

总之，现在的软件合同工有各种弊端，却得不到任何好处。如果有人能从合同工变成全职员工，那当然很好，但在我工作过的每家公司里，合同工都是二等公民。

## 言论

1、

哈佛大学2024-2025学年，成绩为 A 的作业比例约为60%，远远高于2005-2006学年的约25%，可见成绩膨胀有多严重。

-- [《华尔街日报》](https://www.wsj.com/us-news/education/harvard-grade-cap-a-proposal-gpa-7c921630?st=aF9vkr&mod=1440&user_id=66c4c9305d78644b3ac5df9c)

2、

Claude Mythos 模型可以发现并利用系统漏洞，外部评测证实了这一点。但是，评测者也发现了一个残酷的事实：你花费的 Token 费用越多，它发现的漏洞就越多，系统也就越安全。

这意味着，你想要系统安全，就必须比攻击者花费更多的 Token。因此，安全行业变得像采矿的工作量证明，谁的投入多，谁就赢。

-- [Simon Willison](https://simonwillison.net/2026/Apr/14/cybersecurity-proof-of-work/#atom-blogmarks)，著名开发者

3、

一年前，我经常收到代码质量低劣、甚至完全不知所云的 pull request，这让我怀疑提交者是不是用了 AI，所以代码才这么糟糕。

今年不同了，当我收到拼写错误、语法错误的低质量 pull request 时，我反而会怀疑贡献者是不是忘了使用 AI 来写代码，因为 AI 会显著提高代码质量的下限。

-- [《ClickHouse 的 AI 编程实践》](https://clickhouse.com/blog/agentic-coding)

4、

当代战争进行时，政府通过表情包和玩偶动画进行宣传，这或许让人觉得匪夷所思，但这正是平台时代的体现。

将战争包装成娱乐性的视觉语言，会使得宣传更容易传播。社交媒体是一个开放的竞技场，最具吸引力的内容将获得最大的传播范围。 

-- [《当病毒式传播成为信息》](https://time.com/article/2026/04/02/when-virality-is-the-message-the-new-age-of-ai-propaganda/)

5、

大模型意味着，Markdown 现在是一种可执行文件格式。你下载一个 Markdown 文件，你的大模型就多了一个新的第三方依赖项，它的任何修改都可能是注入攻击。

-- [《第三方依赖的冷却时间》](https://calpaterson.com/deps.html)

## 往年回顾

[未来就是永恒感的丧失](https://www.ruanyifeng.com/blog/2025/04/weekly-issue-346.html)（#346）

[xz 后门的作者 Jia Tan 是谁？](http://www.ruanyifeng.com/blog/2024/04/weekly-issue-296.html)（#296）

[永不丢失的网络身份](http://www.ruanyifeng.com/blog/2023/03/weekly-issue-246.html)（#246）

[掌机的未来](http://www.ruanyifeng.com/blog/2022/02/weekly-issue-196.html)（#196）

（完）


