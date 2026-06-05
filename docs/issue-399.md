# 科技爱好者周刊（第 399 期）：中国 AI 大厂访问记

这里记录每周值得分享的科技内容，周五发布。

本杂志[开源](https://github.com/ruanyf/weekly)，欢迎[投稿](https://github.com/ruanyf/weekly/issues)。另有[《谁在招人》](https://github.com/ruanyf/weekly/issues/10147)服务，发布程序员招聘信息。合作请[邮件联系](mailto:yifeng.ruan@gmail.com)（yifeng.ruan@gmail.com）。

## 封面图

![](https://cdn.beekka.com/blogimg/asset/202606/bg2026060402.webp)

本周开馆的深圳国际美术馆。（[via](https://sa.trip.com/moments/detail/shenzhen-26-146282837?locale=en-SA)）

## 中国 AI 大厂访问记

今年5月上旬，一个美国访问团来到中国，访问了14家 AI 和机器人公司。

![](https://cdn.beekka.com/blogimg/asset/202606/bg2026060104.webp)

访问对象包括 DeepSeek、月之暗面、MiniMax、智谱、字节跳动、阿里、蚂蚁、小米、零一万物、宇树、魔搭社区等。

所有成员都是科技分析师，回到美国后，每个人都写了访问观感：[Kevin Xu](https://interconnect.substack.com/p/chinai-mood-april-26-may-4-2026)、[afra Wang](https://afraw.substack.com/p/mandate-of-ai)、[Florian Brand](https://florianbrand.com/posts/china-trip)、[Nathan Lambert](https://www.interconnects.ai/p/notes-from-inside-chinas-ai-labs)、[ Azeem Azhar](https://www.exponentialview.co/p/inside-chinese-ai-labs-efficiency-moat)、[Lily Ottinger and Kai Williams](https://archive.md/myA7R)、[Jasmine Sun](https://jasmi.news/p/party-in-the-permanent-underclass)、[Lingua Sinica](https://linguasinica.substack.com/p/notes-from-a-trip-to-chinas-ai-labs)、[Caithrin](https://www.caithrin.com/p/searching-for-amanda-askell-with)。

这些文章有很多有意思的内容，我做了一些摘录。为了保证阅读体验，就不单独注明每一段的出处了。

### 1、算力的差距

我们在每一家公司都听到一个共同的抱怨：算力不足。这使得实验次数减少，模型规模缩小。

中国的算力不足，主要是美国的芯片出口管制政策造成的。我们感兴趣的是亲眼目睹本土公司如何应对。

虽然供应并非完全短缺，中国公司仍然能够拿到英伟达的 H100、B200 和 B300 显卡，但是数量至少比美国竞争对手少一个数量级。

英伟达最新款的 GB300 NVL72 系统（72颗英伟达最新 GPU 组成一个系统）的实时推理速度比三年前的 H100 集群快30倍，每颗芯片的内存容量高出3.6倍，每次推理的能耗降低了25倍。美国公司正在大量订购这些系统，而中国公司却无法做到。

中国科技公司，尤其是华为，在研发 AI 芯片方面取得了长足进步。但即使是华为今年3月发布的最新芯片 Ascend 950PR，其性能也仅与2022年发布的 H100 大致相当。而且，这些芯片的出货量远低于 H100。据估计，英伟达仅在2025年10月之前就已出货了700万颗 Hopper 和 Blackwell GPU，而且出货速度还在不断增长。华为计划今年出货75万颗 Ascend 950PR 芯片，这仍然只有英伟达去年出货量的十分之一左右。

结果就是，美国在算力方面拥有巨大的领先优势。我们估计，2025年底美国 AI 行业的算力大约是中国的8倍。中国 AI 公司目前总的算力，大致相当于美国2023年的规模。

我们向中国研究人员分享了 OpenAI 内部每位研究人员拥有的 GPU 数量。他们听到这个数字时，简直惊呆了。然而，我们都知道，OpenAI 的研究人员，或者说西方所有 AI 公司的研究人员，仍然会抱怨他们的算力太少。

### 2、算力的分配

美国的大部分算力都用于模型训练，而非服务客户。但是，中国的情况不同，算力既要用来训练模型，又要服务于数亿消费者和快速增长的企业用户。

如果拿出一半的算力用于服务客户，那么可用于模型训练的算力就会减少。

还有另一个需要考虑的因素。美国的算力主要由五家公司主导：OpenAI、Anthropic、Google、Meta 和 xAI。而在中国，各大科技公司都在积极研发自己的前沿模型，算力池被进一步分割。

### 3、计算效率

如果按照这种逻辑，既然中国的算力规模比美国落少两年，那么中国模型也应该至少比美国落后两年。但是，情况并非如此。

许多分析都认为，中国模型只比美国模型落后几个月。事实上，在某些方面，两国模型似乎是并驾齐驱的。

原因是芯片管制反而促使中国公司提高计算效率。我们发现，中国公司的单位算力支持的 AI 智能是简单扩展下的 4-7 倍，这弥补了算力的不足。

### 4、开源的分歧

目前，最好的 AI 开源模型是中国公司发布的。但是，对于是否开源自己的模型，中国公司内部有分歧。

公司的财务状况和收入压力，会影响到开源意愿。目前，对于是否开源，有一条界限正变得越来越清晰：模型参数规模达到一万亿。

一些公司认为，开源一万亿或以上参数的模型是一种资源浪费，因为没人能在本地机器上运行如此庞大的模型，而开源模型的典型应用场景正是本地机器。发布一万亿参数模型的更好方式是将其托管在公司自身的云基础设施上，只发布它的 API，方便用户使用。

但是对于另一些公司，开源模型近乎一种信仰，而构建万亿参数级别的模型则是开源事业的入场券。

### 5、西方化还是中国化

有些中国 AI 公司呈现出典型的“西方”风格，处处洋溢着硅谷式的酷炫氛围，甚至连赠送的周边产品都体现了这一点。

另一些公司变得越来越“中国化”，把打造一个光鲜亮丽的展厅视为头等大事。这些展厅用来接待参观者，通常是国有企业 CEO 和地方干部。参观之后，还会举行晚宴招待。

我认为，这既是一种选择，也是一种无奈之举，源于创始人的背景以及公司选择的业务类型。

### 6、对其他公司的看法

我们发现，所有中国 AI 公司都敬畏字节跳动的 Seed 部门。那是中国唯一的闭源 AI 前沿团队。它就像房间里的大象，却在翩翩起舞。它的豆包几乎垄断了 AI 的用户流量，他们的模型都可以快速推广到海量用户，其他公司无法匹敌这一点。

DeepSeek 则是业内最受尊敬的公司，越来越多地承担基础层的工作：架构、效率、推理优化，以及华为协议栈适配。

### 7、实习生

中国 AI 公司的员工，很多是才华横溢的“实习生”，平均年龄二十五六岁，大多数仍然是博士生，能够用英语轻松交流技术话题。他们大多毕业于中国高校，没有海外留学经历。

他们实习期一年到两年，享有全职员工的待遇和完整权限，可以自由地提出想法和开展工作实验。这跟西方顶尖 AI 公司形成鲜明对比，OpenAI、Anthropic、Cursor 等公司根本不提供实习，其他公司（比如谷歌）名义上提供 Gemini 的实习，但不会提供重要的任务。

中国公司更看重“新鲜人”，他们能够带来新想法和充足的脑力。为了改进最终模型，实习生更愿意做一些不那么引人注目的工作。而且，刚接触 AI 开发的人可以免受以前模式的影响。

从中国大学的角度来看，学校的计算资源根本不足以让优秀学生的才华得到充分发挥，不如把他们派往计算资源更丰富的业界公司，双方合作发表论文，实现双赢。

### 8、对待 AI 安全问题的态度

我问了一些年轻的中国研究人员，如何看待 AGI（通用人工智能），他们竟然给出了完全相同的答案：“AGI 就是人工智能可以取代我！”

我发现，他们没有流露出任何担忧，非但不害怕被取代，反而对机器是否真的能够超越其制造者充满好奇。如果真的实现了这一点，他们会欣然去做其他事情。

这跟西方同行形成了鲜明对比，他们许多人非常关注 AI 的安全问题及其社会影响。中国研究人员也重视安全，每个人都认为 AI 不应该做坏事。但如何确保这一点，大家都觉得这应该交给政府来决定，政府应该能够解决。

### 9、中国企业的 AI 需求

中国企业是否愿意付费购买本国 AI 服务？

一种广为流传的看法是，中国 AI 市场规模较小，因为中国企业通常不愿为软件付费，因此无法支撑本国的 AI 公司。

这种看法仅适用于 SaaS 模式的软件支出，这种模式在中国历来规模很小。但是，中国显然拥有庞大的云计算市场。

中国 AI 公司正在争论，中国企业把 AI 服务，到底看成是 SaaS 产品（规模较小）还是云计算（规模较大）？目前，AI 的发展趋势似乎更倾向于云计算。

### 10、数据产业不如美国

我们听说，像 Anthropic 或 OpenAI 这样的美国 AI 公司，每年购买训练数据（或者强化学习环境）就会投入超过1000万美元，累计投入更是高达数亿美元。我们很想知道，中国 AI 公司是否也是如此。

得到的答案是中国几乎没有数据产业，因为很多 AI 公司觉得，中国的数据产品质量较差，因此自行准备数据往往更为理想。

研究人员会花费大量时间来构建强化学习训练环境，而像字节跳动和阿里巴巴这样的大公司则拥有内部数据标注团队来支持这项工作。

### 11、政府的作用

谁才是中国 AI 领域真正的幕后推动者？相当于硅谷的红杉资本和 a16。

我的一个朋友的答案是：上海、北京和杭州的市政府。这些勤奋却又精疲力竭的政府官员，完全被“害怕错过”和竞争焦虑所驱使，正在拼命推动本地 AI 产业。

## [活动] XEngineer 大学生实训营

大学生朋友看过来，AI 时代怎么培养自己的能力，不落入简历和笔试的汪洋大海，可以考虑一下今年暑期的 [XEngineer 实训营](https://mp.weixin.qq.com/s/Ues5CUilqWqCgWMf3SZAAw?from=singlemessage&scene=1&subscene=93&sessionid=1780549607&clicktime=1780550030&enterid=1780550030&ascene=1&fasttmpl_type=0&fasttmpl_fullversion=8285001-zh_CN-zip&fasttmpl_flag=0&realreporttime=1780550030045)。

![](https://cdn.beekka.com/blogimg/asset/202606/bg2026060404.webp)

它由上市公司**七牛云创始人兼 CEO 许式伟**发起，面向 2025–2029 届高校毕业生及在校生，不限学历，不限专业，**只需提交一个作品方案或项目成果，就能申请**。

它训练学员在 AI 时代的产品能力和架构能力，指导你从真实需求出发，思考清楚，再亲手设计、实现、上线一个项目。

你可以体验到互联网公司的真实工作，培养自己的实战能力，获得求职资历和 Offer 机会。

现在访问 **hr.qiniu.com** 或扫描下方二维码，就可以报名。越早报，越早锁定名额，等到7月暑假开营。

![](https://cdn.beekka.com/blogimg/asset/202606/bg2026060407.webp)

报名后，你会收到具体议题，需要在72小时内围绕议题，提交作品方案与项目成果。组委会进行评审，以及后续的路演/交流，在开营前评选出优秀作品，颁发奖金，总额为20万元。

开营后，暑期2个月，会有资深导师团和助教指导学员，完成一个真实项目。

## 文章

1、[我用 AI 寻找 Bug 的经历](https://newsletter.semianalysis.com/p/finding-miscompiles-for-fun-not-profit)（英文）

![](https://cdn.beekka.com/blogimg/asset/202605/bg2026053001.webp)

作者用 AI 寻找编译器的 Bug，结果发现运行 AI 的费用比他的工资高一个数量级。而且，如果付出更高的费用，还能发现更多的 Bug。

他第一次感到，AI 的价值大于他的价值。

2、[负载均衡的节点健康检查](https://singh-sanjay.com/2026/01/12/health-checks-client-vs-server-side-lb.html)（英文）

![](https://cdn.beekka.com/blogimg/asset/202602/bg2026022403.webp)

本文介绍了负载均衡可以做在服务器，也可以做在客户端，这两种情况下如何检查有故障的节点。

3、[HTML 替代 JS 的四种场景](https://www.htmhell.dev/adventcalendar/2025/27/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202512/bg2025122902.webp)

本文提出，HTML + CSS 已经足够强，很多场景可以不用 JS，只用 HTML 实现，比如弹框和浮层。

4、[网页如何链接电话号码](https://sethmlarson.dev/mobile-browsers-and-telephone-numbers)（英文）

![](https://cdn.beekka.com/blogimg/asset/202511/bg2025112601.webp)

手机浏览器打开网页时，遇到网页里面的电话号码，会自动添加链接，点击链接可以拨打电话。本文教你怎么定制这个行为，包括取消链接，或者点击拨打其他号码。

5、[使用自定义 HTML 元素](https://maurycyz.com/misc/make-up-tags/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202512/bg2025122903.webp)

网页完全可以用自定义的 HTML 元素，取代`div`，提供更好的语义。

6、[挑战者深渊有多深](https://storymaps.arcgis.com/stories/0d389600f3464e3185a84c199f04e859)（英文）

![](https://cdn.beekka.com/blogimg/asset/202511/bg2025112404.webp)

一篇图文介绍，用生动的图片解释地球最深处“挑战者深渊”（Challenger Deep），深达约11000米。

## 工具

1、[Breathe CLI](https://github.com/marekkowalczyk/breathe-cli)

![](https://cdn.beekka.com/blogimg/asset/202605/bg2026053103.webp)

Mac 系统的命令行程序，显示一个进度条，让你跟着慢速呼吸，大概每分钟6次，从而改善心脏功能。

2、[NMLinux](https://github.com/thongor77/nmlinux)

![](https://cdn.beekka.com/blogimg/asset/202606/bg2026060201.webp)

Linux 系统的网络管理图形面板。

3、[Penpot](https://github.com/penpot/penpot)

![](https://cdn.beekka.com/blogimg/asset/202404/bg2024041001.webp)

一个开源的设计工具，可以替代 Figma，将可视化的布局设计转为 CSS + HTML 代码。

4、[sky adb](https://github.com/sky22333/skyadb)

![](https://cdn.beekka.com/blogimg/asset/202605/bg2026052901.webp)

运行在安卓手机上的 ADB 管理工具，通过 WiFi ADB / Wireless Debugging 管理手机、平板、电视盒子。（[@sky22333](https://github.com/ruanyf/weekly/issues/10101) 投稿）

5、[readNeo](https://github.com/extrastu/readneo)

![](https://cdn.beekka.com/blogimg/asset/202605/bg2026052903.webp)

微信读书数据面板，连接微信读书 Skill API，可视化书架、阅读统计、笔记划线，提供一键导出。（[@extrastu](https://github.com/ruanyf/weekly/issues/10110) 投稿）

6、[AppPorts](https://github.com/wzh4869/AppPorts)

![](https://cdn.beekka.com/blogimg/asset/202605/bg2026052904.webp)

一个开源应用，将 macOS 应用程序迁移至外部存储，同时保持这些应用的正常运行，可以随时还原。（[@wzh4869](https://github.com/ruanyf/weekly/issues/10119) 投稿）

7、[欢乐斗地主](https://github.com/palemoky/fight-the-landlord)

![](https://cdn.beekka.com/blogimg/asset/202606/bg2026060101.webp)

开源的终端斗地主游戏，使用 Go 语言实现，支持联网对战、断线重连、智能机器人等功能。（[@palemoky](https://github.com/ruanyf/weekly/issues/10149) 投稿）

8、[fuckssh](https://github.com/hczs/fuckssh)

命令行工具，封装了 SSH 相关命令，为服务器密钥配置提供交互式向导。（[@hczs](https://github.com/ruanyf/weekly/issues/10184) 投稿）

9、[StarGuard](https://github.com/m-ahmed-elbeskeri/Starguard)

这个 Python 工具检查某个 GitHub 仓库的星星有多少是假的。

10、[Nginx Proxy Manager](https://github.com/NginxProxyManager/nginx-proxy-manager)

![](https://cdn.beekka.com/blogimg/asset/202505/bg2025051008.webp)

这个开源工具使用 Web 界面，管理 Nginx 反向代理，并自动开启 SSL 证书，参见[介绍文章](https://www.xda-developers.com/nginx-proxy-manager-best-reverse-proxy/)。

## AI 相关

1、[Models.dev](https://github.com/anomalyco/models.dev)

![](https://cdn.beekka.com/blogimg/asset/202605/bg2026052303.webp)

一个开源数据库，收集所有 AI 模型的规格和价格。

2、[pixtuoid](https://github.com/IvanWng97/pixtuoid)

![](https://cdn.beekka.com/blogimg/asset/202605/bg2026052902.webp)

一个很有创意的工具，用像素小人代表 AI Agent，在终端动画中显示工作进展。（[@IvanWng97](https://github.com/ruanyf/weekly/issues/10105) 投稿）

3、[Flipbook Canvas](https://github.com/imcuttle/flipbook-app)

![](https://cdn.beekka.com/blogimg/asset/202606/bg2026060204.webp)

使用 AI 生成可点击的图册（一系列相关图片），根据点击位置的文字，自动进入对应的下一页图片，可以参考示例[《2026世界杯》](https://imcuttle.github.io/flipbook-app/3CxOnV76roLd/)。（[@imcuttle](https://github.com/ruanyf/weekly/issues/10103) 投稿）

4、[album-assetizer](https://github.com/SeanWong17/album-assetizer)

![](https://cdn.beekka.com/blogimg/asset/202605/bg2026053101.webp)

命令行工具，扫描个人相册，通过 AI 为每张图片生成结构化描述，结果保存在本地 SQLite，可导出 JSONL / CSV。（[@SeanWong17](https://github.com/ruanyf/weekly/issues/10140) 投稿）

## 资源

1、[高考真题大全](https://t.urongda.com/)

![](https://cdn.beekka.com/blogimg/asset/202606/bg2026060401.webp)

这个网站收集各省历年的高考试卷，另可参考这个 [GitHub 仓库](https://github.com/deekur/gaokaomath)。（[@urongda](https://github.com/ruanyf/weekly/issues/10190) 投稿）

## 图片

1、[圆柱投影](https://liorsinai.github.io/mathematics/2020/08/27/secant-mercator.html)

为地球绘制平面地图，本质上就是将球面坐标映射成平面坐标。

一种方法是，想象有一张纸，围成一个圆柱体，包住地球。然后，按照地球自转方向，将地面的每个点，投影到这个圆柱体。

![](https://cdn.beekka.com/blogimg/asset/202504/bg2025042106.webp)

## 文摘

1、[软件工程师何时退休](https://thecodist.com/how-to-know-when-its-time-to-go/)

经过一年的考虑，我决定离开程序员岗位，退休了。

退休的原因不是能力有问题，而是我不想再干下去了。

每个人最终都会达到一个临界点，无法再做他们一生都在做的事情。这跟年龄无关，我认识比我年轻得多的人，他们也放弃了程序员职业。

我见过的退休原因有下面几种。

（1）能力不足。你再也完不成分配给你的任务，你的能力不适合行业的需求。

（2）缺乏欲望，对这个行业丧失了兴趣。

（3）就业市场不好，或者雇主倒闭，你找不到下一份工作。

（4）技术过时，你的技能无人需要。

（5）你发现其他值得做的事情。

（6）你赚了很多钱，然后觉得筋疲力尽，没有足够动力了，发现自己不再关心手头的事情。

所有程序员最终都会因为上述原因之一，而放弃程序员工作。

我也见过一些人，他们看重薪水，只要有工资，不管是否喜欢，都会一直做下去。这也是一种选择，但我不愿意这样，一边工作一边痛苦，这不值得。

我喜欢做出改变并接受挑战去做重要的事情和工作。钱固然很好，但我喜欢做出改变。

每个人最终都会到达一个工作、雇主、行业、甚至整个职业生涯结束的时刻。诚实并做出明智的决定比发现自己落后并可能被迫退出要好得多。

## 言论

1、

人为什么有眼白？大多数哺乳动物（比如猴子和猩猩）都没有眼白。一种解释是，这可以让我们发现别人在看哪里。

-- [《人为什么有眼白》](https://www.popsci.com/science/why-humans-have-white-part-eyes/)

2、

（微软 CEO）纳德拉成功的一个原因是，他终结了 Windows，准确说是终结了 Windows 作为微软的核心产品，他更专注开发无处不在的软件和覆盖一切的云平台。

-- [《微软的 AI 策略》](https://stratechery.com/2026/the-nvidia-ai-pc-project-solara-microsoft-ai/)

3、

1969年，两个美国医生建立了一个心理模型，分析绝症患者的心理，提出了否认、愤怒、讨价还价（恳求）、沮丧和接受这五个阶段。该模型现在也被用于分析人工智能导致的失业案例。

-- [《AI 带来的工作悲伤》](https://jackmaguire.org/blog/ai-job-grief/)

4、

氛围编码生成的是代码，工程生成的是系统。氛围编程不是工程。

-- [《氛围编程不是工程》](https://phroneses.com/articles/build/notes/vibe-coding-is-not-engineering.html)

5、

谋生方式有三种：（1）对想听假话的人说假话，你就能发财。（2）对想听真话的人说真话，你可以维持温饱。（3）对想听假话的人说真话，你会破产。

-- [《三种谋生方式》](https://jasonzweig.com/three-ways-to-get-paid/)

## 往年回顾

[Bug 追踪系统的正确样子](https://www.ruanyifeng.com/blog/2025/06/weekly-issue-352.html)（＃352）

[创业虽然好，不敢推荐了](https://www.ruanyifeng.com/blog/2024/05/weekly-issue-302.html)（#302）

[互联网创业变难了](https://www.ruanyifeng.com/blog/2023/04/weekly-issue-252.html)（#252）

[三个有启发的学习方法](https://www.ruanyifeng.com/blog/2022/04/weekly-issue-202.html)（#202）

（完）

