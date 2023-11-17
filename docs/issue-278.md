# 科技爱好者周刊（第 278 期）：棘手的 AI 版权

这里记录每周值得分享的科技内容，周五发布。

本杂志[开源](https://github.com/ruanyf/weekly)，欢迎[投稿](https://github.com/ruanyf/weekly/issues)。另有[《谁在招人》](https://github.com/ruanyf/weekly/issues/3599)服务，发布程序员招聘信息。合作请[邮件联系](mailto:yifeng.ruan@gmail.com)（yifeng.ruan@gmail.com）。

## 封面图

![](https://cdn.beekka.com/blogimg/asset/202311/bg2023111405.webp)

鸡鸣驿位于河北省张家口，是中国现存最大的古代驿站遗址，当年供邮差休息和更换马匹。（[via](https://baike.baidu.com/item/%E9%B8%A1%E9%B8%A3%E5%B3%84/8364068)）

## 棘手的 AI 版权

AI 是一个新事物，带来了很多前所未有的问题。

最棘手、最有争议、也最有意思的，大概就是版权问题。

![](https://cdn.beekka.com/blogimg/asset/202311/bg2023111103.webp)

具体来说，就是下面这个问题：**AI 训练（学习）时，能不能使用版权材料，从而具备模仿版权所有者的能力？**

举例来说，前一段时间，网上出现了“[AI 孙燕姿](https://www.stcn.com/article/detail/872694.html)”，有人用孙燕姿的歌曲作为训练材料，让 AI 模仿孙燕姿的声音，演唱其他歌手的歌曲。

![](https://cdn.beekka.com/blogimg/asset/202311/bg2023111102.webp)

我问大家，这有没有侵犯孙燕姿的版权？

一种观点是，侵犯版权了，因为**未经授权就模仿了孙燕姿的声音**。如果听任 AI 模仿孙燕姿，真人还没唱，AI 就先唱了，以后谁还会花钱去听真人演唱？

另一种观点是，没有侵犯版权，因为 **AI 是学习孙燕姿的声音，而不是复制**。AI 唱的是孙燕姿本人没有唱过的歌曲，属于 AI 的创作，所以不存在侵犯版权。

你赞成哪一种观点？

![](https://cdn.beekka.com/blogimg/asset/202311/bg2023111104.webp)

这个问题有趣的地方在于，如果把 AI 换成人，就没有争议了。

假设有一个小姑娘，刻苦模仿孙燕姿，终于有一天，可以用一模一样的声音演唱了，这个小姑娘有没有侵犯孙燕姿的版权？

我相信，所有的人都会认同，这不是侵权行为。**一个人模仿另一个人的特点，并不侵犯后者的版权。** 

我模仿梵高的风格画画，模仿鲁迅的风格写作，模仿那些最优秀的程序员的风格编程，达到了可以乱真的地步。只要我创作的是自己的作品，就都是合理合法的行为。**那么为什么 AI 做同样的事情，就会被认为侵权呢？**

![](https://cdn.beekka.com/blogimg/asset/202311/bg2023111105.webp)

但是，又不能完全把 AI 等同于真人。模仿梵高的画家千千万，丝毫不影响梵高真迹的价值，换成 AI 就不一定了。

如果允许“AI 孙燕姿”与“真孙燕姿”同时存在，搞不好会严重冲击后者的收入。人们还会不会掏钱购买孙燕姿的歌曲，真是不一定。

这就是困难的地方。如果认定 AI 模仿不是侵权，我们不知道会有怎样的后果，现有的版权资产会不会大幅贬值。

而且，AI 冲击最大的，还不是已经成名的人，而是底层的小人物。试想一下，如果没有版权保护，电影公司雇佣一天群众演员，使用 AI 充分学习他们，然后就可以无限使用他们的“AI 分身”，最多改一下他们的脸，然后就再也不必雇佣他们了。

总之，AI 的版权是一个非常麻烦的问题。**版权保护的是“复制权”，但是 AI 涉及的是“学习权”**。如果禁掉 AI 的学习权，相当于说，有些事情只能人做，不能机器做，这说不通，现实中也很难操作。如果不禁，可能影响版权所有人的生计。

另外，除了个人风格的复制，内容的总结也是类似的情况。你看完一部小说（或电影），把情节复述给朋友，这是完全合法的。但是，AI 能不能做这件事呢，“10分钟帮你读完一部小说“？我们也可以从同样的角度，来思考这个问题。

## [本周软件] TGFX：强大易用的 2D 图形库

本周，向大家介绍一款比较重要的工具软件。

它是国内很多头部业务的核心组件，前不久刚刚开源，知道的人还不多。它就是来自腾讯的 [2D 图形库 TGFX](https://github.com/Tencent/tgfx)。

![](https://cdn.beekka.com/blogimg/asset/202311/bg2023111402.webp)

很多朋友可能不清楚，图形库是干嘛的，为什么很重要？

我们每天使用计算机（包括手机），接触的都是图形界面，那些漂亮的组件，它们都依赖于图形库。计算机本质上只是一个计算引擎，只会计算。**你想要图形界面，必须调用专门的图形库**，才能获得图形能力。

图形库（包括组件库）一般由操作系统提供，但是如果软件跨系统，或者要求特殊效果，就必须用外部图形库。目前最流行的通用 2D 图形库是谷歌的 Skia，它是开源的，Chrome 浏览器、Android 系统、谷歌地图都用它。

**TGFX 的开发目的，就是要替代 Skia。** 它起源于腾讯的[动效解决方案 PAG](https://pag.art/)。当时，腾讯内部很多项目，都有很强的动画效果需求，而且要求跨平台，所以就有了 PAG 这个专门制作动效的工具。

![](https://cdn.beekka.com/blogimg/asset/202311/bg2023111403.webp)

PAG 的核心就是图形库，最早用的是 Skia，但后来发现两个问题：首先，Skia 有历史包袱，打包体积大，性能也比较保守；其次，中国开发者看重的一些问题，开发团队往往不能（或不愿）跟进。

最终，**PAG 团队下定决心，换掉 Skia，开发自己的图形库 TGFX。** 这件事的难度不小，要用 C++ 开发，兼容各种操作系统的图形接口（目前主要是 OpenGL），做出各种各样的图形，还要保证性能和渲染效果。他们2021年开始做，直到今年才小有所成。TGFX 有几个鲜明特点。

> （1）充分利用现代 GPU 的计算能力，保证性能。
> 
> （2）提供全面的图形能力：各种图片、矢量和文本的 2D 绘制全部支持。
> 
> （3）做到 Skia 的轻量化平替，打包体积仅 400KB，实现了 2MB 的 Skia 的绝大部分功能。
> 
> （4）使用成本低。API 与 Skia 基本相同，并且进行了简化和整合。

PAG 4.0 把图形引擎从 Skia 改成 TGFX 后，包体积降低65%，矢量渲染性能提升 60%。

![](https://cdn.beekka.com/blogimg/asset/202311/bg2023111110.webp)

截止2023年7月，借助 PAG 项目，TGFX 已经运行在**1000+的国内头部业务**，其中不仅有腾讯的微信、手机 QQ、王者荣耀，也有小红书、知乎、BiliBili 等外部项目。稳定性经过了10亿+用户设备的验证，性能表现也不凡，比如为腾讯文档带来了50%的内存降低。

![](https://cdn.beekka.com/blogimg/asset/202311/bg2023111404.webp)

TGFX 以前是 PAG 项目的一部分，最近才独立出来，变成一个单独的开源项目，放在 [GitHub](https://github.com/Tencent/tgfx) 上面。如果你的项目需要图形引擎，不妨试试它。

这个项目才刚刚开源，腾讯会对它长期大力投入。对图形开发有兴趣的朋友，可以研究一下它的代码和文档，相信可以学到很多东西。有什么想法和意见，都可以向开发团队反馈，他们会及时响应。

## 科技动态

1、[AI Pin](https://hu.ma.ne/)

上周，世界第一个可穿戴 AI 设备在美国上市，叫做 AI Pin。

![](https://cdn.beekka.com/blogimg/asset/202311/bg2023111001.webp)

它可以别在上衣上面，就像一个徽章，它的名字 Pin 就是“别针”的意思。

![](https://cdn.beekka.com/blogimg/asset/202311/bg2023111003.webp)

它的底层是安卓系统，通过手机 SIM 卡联网。它带有语音和摄像头，你可以跟它对谈。

![](https://cdn.beekka.com/blogimg/asset/202311/bg2023111004.webp)

举例来说，你看到一个火龙果，就问它：“这个东西含糖量多少？”它会回答：“整个水果含有7.31克糖。”

以后我们看到有人自言自语，不要奇怪，他可能在跟 AI 对话。

除了语音操控，它还支持触摸和手掌投影。

![](https://cdn.beekka.com/blogimg/asset/202311/bg2023111005.webp)

![](https://cdn.beekka.com/blogimg/asset/202311/bg2023111006.webp)

它的售价为699美元（约人民币5100元），每个月还有24美元（约人民币175元）的服务费。这么贵的价格，功能又没有超过手机，销售前景不乐观，几乎肯定会失败。

2、[探路者1号飞艇](https://techcrunch.com/2023/11/08/the-worlds-largest-aircraft-breaks-cover-in-silicon-valley/)

11月8日，当今世界最大的飞行器，探路者1号（Pathfinder 1）飞艇首次试飞，它是谷歌创始人谢尔盖·布林资助的项目。

![](https://cdn.beekka.com/blogimg/asset/202311/bg2023111007.webp)

它的长度为124.5米，比三架波音737 Max 加起来还要长。

![](https://cdn.beekka.com/blogimg/asset/202311/bg2023111008.webp)

它使用电机操控，内部有13个氦气气囊，骨架由碳纤维和钛金属制成，外层还有特殊的阻燃涂层，总体上相当安全。

![](https://cdn.beekka.com/blogimg/asset/202311/bg2023111009.webp)

所有人员都呆在底部的乘客舱（上图中，飞艇底部的小房间）。这个乘客舱相当小，一次最多载14人，最大负载在2吨到5吨之间。

飞艇的优势是低空慢速飞行，还可以悬浮，并且非常安静。但是，它的载客量这么小，也不能防大风，很难有什么实际用途。

3、[眼球移植](https://www.scientificamerican.com/article/doctors-complete-first-successful-face-and-whole-eye-transplant/)

上周，一家纽约医院宣布，已经在今年5月27日，完成了世界第一例“眼球移植手术”，将一个人的眼球移植给另一个人，真是惊世骇俗。

![](https://cdn.beekka.com/blogimg/asset/202311/bg2023111010.webp)

患者是一名46岁的男子，他的左眼因严重电烧伤而失明。

移植五个月后，他的眼睛还是没有恢复视力，但是大脑能够感知眼睛的神经信号，并且血管保持畅通。医生认为本次手术是成功的，正在等待神经进一步生长，看看能否恢复视力。

![](https://cdn.beekka.com/blogimg/asset/202311/bg2023111011.webp)

虽然这个手术已经在动物身上进行过多次，但是人的眼睛更为精细和复杂，手术之前要用计算机进行 3D 模拟，精确对准骨骼和移植位置（上图）。

![](https://cdn.beekka.com/blogimg/asset/202311/bg2023111012.webp)

整个手术持续了21个小时，投入的医生、护士、后勤人员共140余人（上图）。

如果“眼球移植”能够成功，就为那些因外伤而失明的人提供了巨大的福音。

4、[Steam Deck 的照明](https://idlethumbs.social/@ja2ke/111396017651485944)

Valve 公司即将发售掌上游戏机 Steam Deck 的新版本“Steam Deck OLED”。新版本的主要卖点，就是有一个更亮的 OLED 屏幕。

![](https://cdn.beekka.com/blogimg/asset/202311/bg2023111313.webp)

为了突出这一点，他们想到一个点子，在广告里面使用 Steam Deck OLED 为自己照明。

![](https://cdn.beekka.com/blogimg/asset/202311/bg2023111308.webp)

上图就是广告截图，一个 Steam Deck OLED 在中央，照明完全来自周围的 Steam Deck OLED。

为了实现这个效果，他们制造了一个巨大的金属圆球，把许多掌机挂在上面。

![](https://cdn.beekka.com/blogimg/asset/202311/bg2023111309.webp)

![](https://cdn.beekka.com/blogimg/asset/202311/bg2023111310.webp)

并且，使用软件将所有屏幕同步，然后摄影师待在球体内拍摄，才达到想要的效果。

![](https://cdn.beekka.com/blogimg/asset/202311/bg2023111311.webp)

![](https://cdn.beekka.com/blogimg/asset/202311/bg2023111312.webp)

## 文章

1、[如何发布一个 TypeScript 软件包？](https://blog.liblab.com/typescript-npm-packages-done-right/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202309/bg2023092501.webp)

TypeScript 语言写的软件包，怎么发布到 npm 上面？

2、[C++ Fiber 基础知识](https://agraphicsguynotes.com/posts/fiber_in_cpp_understanding_the_basics/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202309/bg2023092502.webp)

React 引入了 Fiber，这个词到底是什么意思？它其实来自 C++，本文就介绍 C++ Fiber 的基本知识，前半部分都是通俗的讲解。

3、[被复制最多的 StackOverflow 代码片段](https://programming.guide/worlds-most-copied-so-snippet.html)（英文）

![](https://cdn.beekka.com/blogimg/asset/202309/bg2023092808.webp)

问答网站 StackOverflow 里面，被最多人复制的代码片段是什么？本文告诉你，这段代码里面其实还有一个小错误。

4、[可拖动对象的网页实现](https://www.redblobgames.com/making-of/draggable/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202309/bg2023093006.webp)

作者详细讲解，如何在网页上实现一个可以拖动的对象，并且鼠标和触摸都可以拖动。

5、[自适应文本框的 CSS 实现](https://www.amitmerchant.com/textarea-auto-increase-height/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202310/bg2023100102.webp)

用户输入文本，如何让网页输入框随着文字的增加，自动增加高度？不用 JS，只用 CSS。

6、[如何生成虚拟的世界地图](https://frozenfractal.com/blog/2023/11/2/around-the-world-1-continents/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202311/bg2023111509.webp)

作者想写一个环游世界的游戏，就用算法生成了一张虚拟的世界地图。虽然看不懂技术，但是每一步都有图片，很好玩。

7、[英国青少年动画比赛的最佳动画](https://younganimator.uk/winner/1699875910225x437970782709919500)（英文）

![](https://cdn.beekka.com/blogimg/asset/202311/bg2023111603.webp)

今年英国青少年动画比赛的头奖得主，是一个16岁的少年。他的作品《机器人做串串》的制作水准，让人惊叹。

## 工具

1、[ShortbreadAI](https://shortbread.ai/)

![](https://cdn.beekka.com/blogimg/asset/202310/bg2023100701.webp)

这个网站让你方便地生成漫画。

2、[ripsecrets](https://github.com/sirwart/ripsecrets)

这个工具用于检查代码仓库，有没有泄漏密钥。它可以配置在 CI/CD 流程里面自动运行。

3、[EmojiGen](https://emoji.fly.dev/)

![](https://cdn.beekka.com/blogimg/asset/202309/bg2023090904.webp)

根据文字提示生成 Emoji 图案。

4、[screenshot-to-code](https://github.com/abi/screenshot-to-code)

![](https://cdn.beekka.com/blogimg/asset/202311/bg2023111609.webp)

一个开源的 Web 应用，用户上传一张网页截图，它会通过 OpenAI，给出该网页的 HTML/Tailwind/JS 代码实现。

5、[PageSpyWeb](https://github.com/HuolalaTech/page-spy-web)

![](https://cdn.beekka.com/blogimg/asset/202311/bg2023111206.webp)

一个开源的远程调试工具，提供类似浏览器控制台的界面，进行远程调试。（[@wqcstrong](https://github.com/ruanyf/weekly/issues/3616) 投稿）

6、[IPS](https://github.com/sjzar/ips)

一个命令行工具， 查询和处理 IP 地理位置数据库。（[@sjzar](https://github.com/ruanyf/weekly/issues/3631) 投稿）

7、[GWS](https://github.com/lxzan/gws)

![](https://cdn.beekka.com/blogimg/asset/202311/bg2023111324.webp)

一个开源的高性能 WebSocket 实现，包括服务器和客户端，用 Go 语言编写。（[@lxzan](https://github.com/ruanyf/weekly/issues/3623) 投稿）

8、[ChatGot](https://start.chatgot.io/login)

![](https://cdn.beekka.com/blogimg/asset/202311/bg2023111325.webp)

在一个窗口内，同时跟多个模型互动，可以让 GPT 输出文字，然后用 @midjourney 生成图片。（[@qinleilxl](https://github.com/ruanyf/weekly/issues/3624) 投稿）

9、[网页 AI 评审](https://uxaudit.vercel.app/)

这个 Web 工具对用户提供的网址，进行 AI 评审，给出页面的设计问题和改进建议。

![](https://cdn.beekka.com/blogimg/asset/202311/bg2023111013.webp)

它是免费的，但是用户多的时候，会停止服务。如果 AI 表现好，以后设计稿评审和代码评审都可以交给它了。

10、[AITDK](https://aitdk.com/zh-CN/)

![](https://cdn.beekka.com/blogimg/asset/202311/bg2023111205.webp)

用户输入文章的主题，该网页工具会自动生成 SEO 友好的标题、描述、关键词和常见问题解答。（[@typewe](https://github.com/ruanyf/weekly/issues/3614) 投稿）

## 资源

1、**GPT 在线目录**

![](https://cdn.beekka.com/blogimg/asset/202311/bg2023111207.webp)

基于 GPT 的工具越来越多了，下面的网站将这些工具整理在一起，做成一个在线目录，方便查找。

- [GPTsHunter](https://www.gptshunter.com/)（[@airyland](https://github.com/ruanyf/weekly/issues/3617) 投稿）
- [AwesomeGPTs](https://awesomegpts.pro/)（[@GregoryZeng](https://github.com/ruanyf/weekly/issues/3619) 投稿）
- [BestGPTs](https://bestgpts.app/)（[@qinleilxl](https://github.com/ruanyf/weekly/issues/3624) 投稿）
- [GPTs Works](https://gpts.works/)（[@idoubi](https://github.com/ruanyf/weekly/issues/3629) 投稿）
- [GPTs Today](https://gptstoday.com/)（[@KarnaughK](https://github.com/ruanyf/weekly/issues/3635) 投稿）
- [GPTs-store](https://gpts-store.net/)（[@RunnningDogg](https://github.com/ruanyf/weekly/issues/3637) 投稿）

2、[Bubble](https://github.com/LHRUN/bubble)

![](https://cdn.beekka.com/blogimg/asset/202311/bg2023111323.webp)

该仓库收集各种可以放在 GitHub Profile 和 Readme 上面的小组件。（[@LHRUN](https://github.com/ruanyf/weekly/issues/3620) 投稿）

3、[Bing 图像创建器](https://www.bing.com/images/create)

![](https://cdn.beekka.com/blogimg/asset/202311/bg2023111505.webp)

微软官方的 AI 文生图服务。

4、[YesChat.ai](https://www.yeschat.ai/zh-CN)

该网站提供最新 AI 模型（GPT4V、Dalle3、Claude 2）的免费体验，不过每天有次数限制。（[@zengdamo](https://github.com/ruanyf/weekly/issues/3632) 投稿）

5、[机器学习入门教程](https://github.com/microsoft/ML-For-Beginners)

![](https://cdn.beekka.com/blogimg/asset/202311/bg2023111606.webp)

微软官方推出的机器学习的入门教程（英文）。

## 图片

1、[太空工具包](https://www.usatoday.com/story/news/nation/2023/11/10/nasa-tool-bag-dropped-by-astronauts-international-space-station/71536725007/)

11月1日，国际空间站的宇航员出站，进行日常的维修工作，不慎一失手，将一个装螺丝刀的工具包遗失在太空中。

于是，这个工具包就成了地球的一个卫星（实际是太空垃圾），距离地面300多公里。下图就是从国际空间站往下看这个工具包。

![](https://cdn.beekka.com/blogimg/asset/202311/bg2023111501.webp)

最妙的是，现在你在地球上，使用普通的家用天文望远镜，对着国际空间站的方向，是可以看到这个工具包的。

2、[GPT-4V 自动生成图表](https://resobscura.substack.com/p/generative-ai-for-historical-research)

上周，OpenAI 对外开放了 GPT-4 Vision （简称 GPT-4V）功能。你可以上传图片，然后向 GPT 提出各种玩儿问题。

有人就上传了文字表格的扫描照片（下图左），让它自动生成可视化图表（下图右）。

![](https://cdn.beekka.com/blogimg/asset/202311/bg2023111604.webp)

![](https://cdn.beekka.com/blogimg/asset/202311/bg2023111605.webp)

这证明了，GPT-4V 内置了 Python 脚本，可以完成数据可视化。早期是处理 .csv 文件，现在则可以从图片中提取数据。

3、[MacOS 弹窗](https://sixcolors.com/post/2023/11/a-picture-is-worth-a-thousand-permissions-requests/)

苹果的 MacOS 系统正变得越来越庞杂和臃肿，有大量的弹窗，用来请求权限和安全提示。

下图是一位站长购买 Mac 电脑后，从旧 Mac 电脑迁移系统时的截图。

![](https://cdn.beekka.com/blogimg/asset/202311/bg2023111208.webp)

当时，迁移助手已迁移了所有应用程序，所有设置为自动启动的应用程序同时启动，就出现了这样的画面。

## 文摘

1、[讲故事能力](https://kwokchain.com/2021/09/29/narrative-distillation-1/)

当代世界是一个资本过剩的世界，只要有足够的人相信你，你就能拿到投资和高估值。

作为创始人，**你的讲故事能力，直接影响你的项目能否成功**。

![](https://cdn.beekka.com/blogimg/asset/202311/bg2023111610.webp)

只要你能很好地解释自己，提炼出项目的亮点，并让公众以正确的方式了解你，你就有很大机会得到投资。

马斯克和特斯拉就是最好的例子。特斯拉的估值非常高，只要投资者相信它的故事，它就有足够的时间去实现它的估值。如果做不到让投资者相信，它的估值就会崩溃。

![](https://cdn.beekka.com/blogimg/asset/202311/bg2023111611.webp)

这意味着，马斯克的各种夸张言论和新闻，并不是哗众取宠那么简单。他实际上是以一种低成本的方法在宣传，营造一种氛围，让人们知道并相信他的故事，支持公司的高估值。

一家公司的故事讲述得越好，它获得资金就容易，市盈率就越高。

## 言论

1、

软件的第一个版本，最多三个人就够了：一个程序员、一个设计师、还有一个机动，既干一点编程，也干一点设计。

如果你发现三个人不够，那就换人，或者缩小软件初始版本的构想。

-- 《Getting Real》

2、

我对 ChatGPT 的理解就是，它类似于“整个人类知识的最大似然估计”。

我发现，周围的人对它有两种截然不同的看法：（1）嗯，这只是一个愚蠢的统计模型；（2）该死，人类完蛋了！

-- [《如何认识 ChatGPT》](https://xorvoid.com/chatgpt_a_mental_model.html)

3、

Debian 官方下载站，20多年来坚持不使用加密协议 HTTPS，只使用签名文件确保文件可靠。这是为了让那些不支持 HTTPS 的老电脑也能下载到更新包。

-- [《旧电脑的可用性》](https://blog.karthikkumar.org/usability-of-old-computers-f06a7f00f72e)

4、

15世纪，德国人古腾堡发明了欧洲第一台印刷机，可以快速印刷书籍。

当时，一些人反对这个发明，理由是印刷书籍越容易，传播错误信息就越容易。最终，印刷机还是发展起来了，因为大多数人认识到，防止错误的最佳方法是事实，而不是限制印刷机。

-- [《错误信息的解药》](https://fcpp.org/2021/07/28/misinformation-should-be-refuted-not-censored/)

## 往年回顾

[互联网公司需要多少员工？](http://www.ruanyifeng.com/blog/2022/11/weekly-issue-231.html)（2022 #231）

[移动支付应该怎么设计？](http://www.ruanyifeng.com/blog/2021/10/weekly-issue-181.html)（2021 #181）

[你的头脑是二值逻辑，还是三值逻辑？](http://www.ruanyifeng.com/blog/2020/10/weekly-issue-131.html)（2020 #131）

[子辈能大幅超越父辈吗？](http://www.ruanyifeng.com/blog/2019/11/weekly-issue-81.html)（2019 #81）

（完）

