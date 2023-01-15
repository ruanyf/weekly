# 科技爱好者周刊（第 238 期）：停止寻找的最佳时间

这里记录每周值得分享的科技内容，周五发布。

## 封面图

![](https://cdn.beekka.com/blogimg/asset/202301/bg2023010507.webp)

去年年底，一具巨大的霸王龙化石骨架，紧急取消拍卖。因为有人投诉，它的头骨跟现存的一个标本实在太像了，高度怀疑是伪造的。为了巨额的金钱，这么大型的化石居然都能伪造。（[via](https://www.toutiao.com/article/7168670394131022344/?wid=1672904731426)）

## 本周话题：停止寻找的最佳时间

最近，我读了一本算法书，作者是美国科普作家[布赖恩·克里斯蒂安](https://brianchristian.org/)（Brian Christian）。

![](https://cdn.beekka.com/blogimg/asset/202301/bg2023010202.webp)

英文书名叫做《Algorithms to Live By》（生活中的算法）。

![](https://cdn.beekka.com/blogimg/asset/202301/bg2023010203.webp)

我读的是中译本，书名译成《算法之美》（中信出版社，2018）。

![](https://cdn.beekka.com/blogimg/asset/202301/bg2023010204.webp)

说实话，这个书名有点误导。**我以为讲的是编程算法，其实是生活中的数学知识。**

这本书的优点是，面向普通读者，偏重于文字解释和举例，比较通俗。缺点恰恰也是这个，因为没有任何公式和代码，不可能对算法有透彻的理解。好多地方我都被卡住了，想不明白怎么推理（可能是翻译的问题）。

但是，它确实讲了很多有趣的数学知识。今天我想分享它的第一章 **《最佳停止时间》：什么时候可以停止寻找？**

日常生活有很多“寻找-决策过程”，如果考察所有选项，要花费很长时间，可能还会错失机会，后面遇到的未必有前面的好。能否确定一个时间点，到了某个阶段就停下来，不再寻找了，这时找到合适候选人的概率最大？

![](https://cdn.beekka.com/blogimg/asset/202301/bg2023010205.webp)

这在数学上称为[“秘书问题”](https://en.wikipedia.org/wiki/Secretary_problem)。

某公司招聘一名秘书，有100名候选人，依次面试。每面试完一个人，就必须立刻决定是否录取。也就是说，不能面试完所有人，再回过头决定录取哪一个，一旦放弃当前候选人，就只有从后面的面试者中选择。

这个设定是合理的，象征我们在生活中遇到的各种机会。机会来临时，转瞬即逝，必须立刻决定是否抓住它，错过就是错过了。你在三个月前放弃了一个机会，不可能三个月后再捡起来。

大家可以想一想，这时应该面试多少人？

如果录用得太早，可能错过后面更好的候选人；如果录用得太晚，可能错误放走前面的合格人选。

数学家对这个问题，已经有了充分的讨论。经过计算，成功概率最大的方法，叫做[“1/e 法则”](https://en.wikipedia.org/wiki/Secretary_problem#1/e-law_of_best_choice)。e 是自然对数的底数，约等于2.718，那么 1/e 就约等于37%，所以它又称“37%法则”。

![](https://cdn.beekka.com/blogimg/asset/202301/bg2023010206.webp)

**“37%法则”的意思就是，寻找阶段进行到37%就要停止。** 100个应聘者，先面试前37个，此后的面试只要遇到一个更优秀的，就立刻录取，不再继续面试了。换句话说，前37个面试者无论多么优秀，都不会录取，他们只是用来确定录取的标准。

如果最合适的候选者偏偏在前面37%里面，那就只能错过了，作为“寻找阶段”不得不付出的成本。最终录取的将是不如前面候选人的次优选择。

这个法则很实用，日常生活中，只要符合“寻找-决策过程”的场景，都可以适用37%法则。

（1）相亲时，假定有10个相亲对象，那么前3～4个可以作为寻找阶段，后面只要遇到一个比前面更好的人，就可以同意了。

（2）租房时，假定有一个月的找房子时间，那么30天的37﹪也就是11天。在找了11天之后，你就要出手了。只要发现比先前更令人心动的房子，就不要犹豫，马上租下来。

（3）读书时，假定这本书有100页，如果读了37页，还没有发现感兴趣的内容，那就可以放弃了。

（4）一个10集的电视剧，第4集是最佳弃剧时间。

（5）一个10分钟的视频，看了3分42秒，如果还是觉得不好看，就可以关掉了。

（6）一个年轻人想在18岁到24岁，一共7年时间里找到人生方向，确定未来想做什么。那么，他有2.59年（7 * 0.37）的时间自由尝试。也就是说，到了大三下学期就应该初步定下自己的方向，后面除非遇到更有吸引力的事情，否则就不应该转换事业方向。

## 科技动态

1、[识别深度伪造](https://www.zdnet.com/article/intels-new-deepfake-detector-can-spot-a-real-or-fake-video-based-on-blood-flow-in-video-pixels/)

越来越多的视频是 AI 工具伪造的（deepfake），效果十分逼真，用户根本分辨不出。

![](https://cdn.beekka.com/blogimg/asset/202211/bg2022111903.webp)

英特尔公司宣布了一个叫做 FakeCatcher 的软件，号称可以查出某个视频是否为深度伪造，准确度高达96%。

它的原理是识别视频人物皮肤的静脉血液流动。如果是真人，血液时刻在体内循环，皮肤上的静脉就会有周期性的深浅变化，深度伪造的人就没有。

2、[无人机急救](https://finance.sina.com.cn/jjxw/2023-01-04/doc-imxyyvkp9014558.shtml)

浙江大学发明了一种无人机急救系统。

![](https://cdn.beekka.com/blogimg/asset/202301/bg2023010406.webp)

病人突然遭遇外伤或者心脏疾病，身边找不到其他人，这时无人机就可以紧急向病人空投药物。

空投药物带有自助注射系统，只要接触到皮肤表面，弹簧可以释放出足够的能量，使得微针头插入皮肤给药。

不过，如果病人能够自己报告方位、拿到无人机药物并注射，这说明身体状况没有那么紧急，这个系统的实用性看上去很低啊。

3、[三峰日](https://www.microsoft.com/en-us/worklab/triple-peak-day)

微软公司的 Office365 团队，统计了各家公司远程网上办公的数据，发现在家办公每天有三个高峰时段。

![](https://cdn.beekka.com/blogimg/asset/202301/bg2023010407.webp)

第一个高峰是上午10点到11点，第二个是下午2点到3点，第三个是晚上10点到11点。这三段时间的办公活动最频繁。

传统的办公室上班没有第三个高峰，这是不是提示老板，如果推行远程办公，可以下午早点下班，然后睡觉前补一个小时？

4、[3000安培充电](https://insideevs.com/news/621173/cavotec-brugg-econnect-3mw-mcs-connector/)

两家瑞士公司发明了一个快速充电系统，充电电压为 1250V，电流高达3000安培，可以大大加快汽车充电时间。

![](https://cdn.beekka.com/blogimg/asset/202301/bg2023010508.webp)

这么大的电流，电线必须做得很粗，才不会过热。它的充电头的尺寸之大，超乎你的想象。

![](https://cdn.beekka.com/blogimg/asset/202301/bg2023010509.webp)

![](https://cdn.beekka.com/blogimg/asset/202301/bg2023010510.webp)

里面有四股铜线，每个都是碗口大小。

![](https://cdn.beekka.com/blogimg/asset/202301/bg2023010511.webp)

![](https://cdn.beekka.com/blogimg/asset/202301/bg2023010512.webp)

## 文章

1、[如何修建抗震的房屋？](https://mp.weixin.qq.com/s/JHJ-GTQqbK9ZmxMAtlNszA)（中文）

![](https://cdn.beekka.com/blogimg/asset/202301/bg2023010504.webp)

这是一个建筑学博士的科普演讲，大楼应该怎么建造，才不会在地震中倒塌？

2、[为什么 calloc() 存在？](https://vorpus.org/blog/why-does-calloc-exist/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202211/bg2022111408.webp)

C 语言分配内存空间有两个方法：malloc() 和 calloc()。一般认为，前者完全可以替代后者，那么为什么要设计后者？

3、[BeOS 系统的故事](https://www.abortretry.fail/p/be-is-nice-end-of-story)（英文）

1996年，苹果公司濒临破产，决定收购一个外部系统，作为自己的操作系统。当时有两个候选者：BeOS 和 NeXT，都是苹果前员工创建的。

![](https://cdn.beekka.com/blogimg/asset/202211/bg2022111603.webp)

最终苹果选择了 NeXT，但是 BeOS 也没完全死，演变成了现在的开源系统 Haiku，还在开发中。

![](https://cdn.beekka.com/blogimg/asset/202211/bg2022111604.webp)

4、[为什么 Git 如此难用？](https://www.highflux.io/blog/what-makes-git-hard-to-use)（英文）

![](https://cdn.beekka.com/blogimg/asset/202211/bg2022111723.webp)

本文分析 Git 复杂性的几个来源。

5、[Pandas 加载数据的方法和技巧](https://dataground.io/2022/08/02/loading-data-into-pandas-5-tips-and-tricks-you-may-or-may-not-know/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202208/bg2022080501.webp)

Pandas 是 Python 语言的数据分析工具库，本文介绍这个库加载不同数据源的方法和技巧。

6、[像写 CSS 一样写 SVG](https://yuanchuan.dev/experimenting-a-new-syntax-to-write-svg)（英文）

作者介绍他发明的一种新工具，可以改变 SVG 的写法，让手写 SVG 变得像写 CSS 一样。

7、[如何实现蓝绿发布](https://casparwre.de/blog/webapp-python-deployment/)（英文）

作者介绍如何在个人网站实现“蓝绿发布”。

他有两台服务器，一台是生产服务器，另一台是备用服务器，总是发布到备用服务器，然后把流量切过去。

8、[Node.js 如何查看内存泄漏](https://blog.appsignal.com/2022/09/28/minimize-heap-allocations-in-nodejs.html)（英文）

![](https://cdn.beekka.com/blogimg/asset/202209/bg2022092902.webp)

这篇长文有一个部分，详细介绍了 Node.js 查看内存占用的几种方法。

## 工具

1、[Bolt.css](https://boltcss.com/)

一个极简的 CSS 框架，不使用 class，只修饰 HTML 原生元素。

2、[zlib 搜索器](https://github.com/zlib-searcher/zlib-searcher)

![](https://cdn.beekka.com/blogimg/asset/202212/bg2022123006.webp)

一个 z-library 的搜索器，需要本地起服务，然后你就能在本地搜索 z-library 了，参考 [Demo1](https://zlib.knat.network/)、[Demo2](https://zlib.freedit.eu/)。

3、[Auth.js](https://authjs.dev/)

![](https://cdn.beekka.com/blogimg/asset/202212/bg2022123101.webp)

这原来是 Next.js 的授权模块，最近改成了通用模块。它用来提供 Web 的登录服务，内置了很多身份验证服务。

4、[Mind FM](https://apps.apple.com/cn/app/mind-fm/id6443691710)

![](https://cdn.beekka.com/blogimg/asset/202301/bg2023010503.webp)

一个背景音乐 iOS App，集成了 LoFi、脑波、古典乐、白噪音等。（[@ddiiiik](https://github.com/ruanyf/weekly/issues/2834) 投稿）

5、[sapic](https://github.com/sapicd/sapic)

![](https://cdn.beekka.com/blogimg/asset/202301/bg2023010502.webp)

一个开源图床，需要自己架设，支持将图片存储到本地、又拍云、七牛云、阿里云、腾讯云、GitHub、Gitee(码云)、S3等。（[@staugur](https://github.com/ruanyf/weekly/issues/2833) 投稿）

6、[steganography](https://github.com/7thSamurai/steganography)

C++ 写的图像加密命令，可以把一个 zip 压缩包嵌入 PNG 图像，完全看不出异样。

## JSON 可视化

JSON 是网络数据的常用格式，但它是机读格式，不容易编辑和阅读。

网上有很多 JSON 可视化工具，大大便利了 JSON 编辑和阅读。

1、[JSON Visualization](https://altearius.github.io/tools/json/index.html)

![](https://cdn.beekka.com/blogimg/asset/202211/bg2022112905.webp)

这个工具可以把 JSON 数据渲染成表格。

2、[JSON Viewer](https://jsonhero.io/)

![](https://cdn.beekka.com/blogimg/asset/202211/bg2022112906.webp)

这个工具可以分层展示 JSON 数据。

3、[jq play](https://jqplay.org/)

![](https://cdn.beekka.com/blogimg/asset/202211/bg2022112603.webp)

jq 是 JSON 数据的查询工具，类似于 JSON 的 SQL 查询。

这个链接是 jq 实验场，可以粘贴你的数据，然后在网页上执行各种 jq 命令，查询结果。

4、[JsonT.run](https://www.jsont.run/)

![](https://cdn.beekka.com/blogimg/asset/202301/bg2023010501.webp)

一个国产的 JSON 在线编辑查看工具。（[@bimohxh](https://github.com/ruanyf/weekly/issues/2832) 投稿）

## 资源

1、[Systemd 示例教程](https://systemd-by-example.com/)

![](https://cdn.beekka.com/blogimg/asset/202201/bg2022012604.webp)

这个网站通过许多例子，教你如何写 Systemd 配置文件，还可以在线运行你自己的 Systemd 配置文件，查看效果。

2、[世界前100万名网站](https://github.com/zakird/crux-top-lists)

谷歌公司根据 Chrome 浏览器的数据，公开了世界前100万名网站排名。链接里的仓库提供这个名单的下载（CSV 文件）。

不过，因为 Chrome 浏览器在中国受限，它的中文网站排名不准。

3、[微软墓地](https://killedbymicrosoft.info/)

![](https://cdn.beekka.com/blogimg/asset/202203/bg2022032903.webp)

这个网站收集了所有被微软公司关闭的自家产品。

4、[MacOS 的 zsh 教程](https://scriptingosx.com/2019/06/moving-to-zsh/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202207/bg2022072303.webp)

zsh 已经替代 Bash，成为 Mac 电脑的默认 Shell。这是针对 MacOS 的 zsh 系列教程，一共8个部分。

## 图片

1、[凹镜大楼](https://www.dailymail.co.uk/news/article-2786723/London-skyscraper-Walkie-Talkie-melted-cars-reflecting-sunlight-fitted-shading.html)

2012年，伦敦市中心完工了一座大楼。

![](https://cdn.beekka.com/blogimg/asset/202301/bg2023010304.webp)

这座玻璃幕墙大楼，顶部比底部宽，并且表面有一些向内收缩。

![](https://cdn.beekka.com/blogimg/asset/202301/bg2023010305.webp)

当它完工以后，人们才发现，晴天出太阳时，这栋楼会变成一个凹面镜。

![](https://cdn.beekka.com/blogimg/asset/202301/bg2023010306.webp)

它会聚焦阳光，反射在楼下的大街上。

![](https://cdn.beekka.com/blogimg/asset/202301/bg2023010307.webp)

停在焦点区域的汽车，塑料部件会因为高温而融化。

![](https://cdn.beekka.com/blogimg/asset/202301/bg2023010308.webp)

经过测量，焦点的温度可以达到72度。有人甚至拿出鸡蛋，演示焦点处可以煎鸡蛋。

![](https://cdn.beekka.com/blogimg/asset/202301/bg2023010309.webp)

最后，大楼的开发商赔偿了所有损失，在焦点处安装了永久遮阳伞。

## 文摘

1、**心理否认**

以下内容摘自《崩溃：社会如何选择成败兴旺》（上海译文出版社，2008年），作者是美国生物学家贾雷德·戴蒙德，他也是名著《枪炮、病菌与钢铁》的作者。

![](https://cdn.beekka.com/blogimg/asset/202301/bg2023010513.webp)

一个狭窄的河谷建造了一座巨型水坝，有人对下游居民进行问卷调查，询问他们是否担心水坝倒塌。

![](https://cdn.beekka.com/blogimg/asset/202301/bg2023010514.jpg)

让人意外的是，住在水坝下游几英里的居民竟然是最担心水坝倒塌的人群，而住在水坝正下方的居民却一点都不担心。

原因是正下方的居民产生了“心理否认”。

这些居民每天一抬头就看到水坝，如果担心它会倒塌，从早到晚提心吊胆，那简直没办法过日子。保持镇定的惟一方法，就是从心底里否认水坝可能会倒塌这一事实。

**非理性地拒绝解决已经察觉的问题，这在心理学上叫做“心理否认”。** 这个名词原本用于个人心理学，现在也扩展到社会文化。

如果有件事情让你深感痛苦，你可能就会潜意识地压制或否认这种感觉，以免引起痛苦，尽管这实际上可能带来灾难性的后果。

## 言论

1、

拍电影时，最重要的是你知道你想用电影表达什么。很多导演追求使用高科技拍电影，但对于他们真正想要表达的内容，却只有一个非常模糊的概念。

人们其实非常欣赏那些制作技术并不先进、但知道自己想说什么的电影。

-- [宫崎骏](https://liamhz.com/blog/leaving-tech-to-pursue-art)

2、

我共事过的一些最具创造力和才华的人是大学辍学生。他们之所以辍学，大多是因为厌倦了缓慢的教学和浪费的时间，自己选择离开。

我们公司曾经流传一个笑话。如果你需要在半年到一年内做好一个产品，那就找一个有足够经历的大学辍学生来完成这项工作。如果你不需要做实际产品，并且有四年的时间，那就请一个拥有博士学位的人。

-- [Hacker News 读者](https://news.ycombinator.com/item?id=33515539)

3、

银河系中有 10^11 颗恒星。这是一个巨大的数字，但也只有一千亿。

美国政府的财政赤字已经超过了它。我们过去称巨大的数字为天文数字，现在我们应该称它们为经济数字。

-- [理查德·费曼](https://www.wondersofphysics.com/2022/11/richard-feynman-politics.html)，著名物理学家

4、

最近，我开了一次讲座。一个听众提问：“你们网站不是 web2 吗？为什么不把它转换成 web3？”

这让我不知如何回答。web3 这个词似乎没有公认的定义，有人甚至说“它就是你想要的任何东西”。

-- [《你们不是 web2 吗？》](https://nadh.in/blog/web2-web3/)

5、

社交媒体越来越像抖音，在那里你看不到你朋友的内容，只看到别人点赞的内容。

-- [Hacker News 读者](https://news.ycombinator.com/item?id=33652243)

## 历史上的本周

2021年（第190期）：[产品化思维](https://www.ruanyifeng.com/blog/2021/12/weekly-issue-190.html)

2020年（第140期）：[印度人的工钱是多少？](https://www.ruanyifeng.com/blog/2020/12/weekly-issue-140.html)

2019年（第88期）：[如果你遇到一条蛇](https://www.ruanyifeng.com/blog/2019/12/weekly-issue-88.html)

2018年（第37期）：[小说家的时代，永远地过去了](https://www.ruanyifeng.com/blog/2018/12/weekly-issue-37.html)

## 说明

周刊每周五发布在[我的个人网站](http://www.ruanyifeng.com/blog)和微信公众号《阮一峰的网络日志》，欢迎订阅。

周刊是开源的，自由使用，仓库在 GitHub: [ruanyf/weekly](https://github.com/ruanyf/weekly)，投稿请到仓库提交 issue。我们还开设了 **[《谁在招人？》](https://github.com/ruanyf/weekly/issues/2827)** 服务，欢迎发布或查看程序员招聘信息。

商业合作和产品推广，请邮件联系我（Email： yifeng.ruan@gmail.com ）。

## 鸣谢

文档和笔记服务 [FlowUs](https://flowus.cn?promotionChannel=GW_RYF_01) 对周刊提供支持，非常感谢。

[FlowUS](https://flowus.cn?promotionChannel=GW_RYF_01) 是新一代知识管理与协作平台，集成了“文档+表格+网盘”，具有写文档、制作主页、管理数据、存储文件等多种用途。

周刊开设了[ FlowUs 专栏](https://ruanyf-weekly.flowus.cn/?code=FLOWUS&promotionChannel=WX_RYF_00)，欢迎大家也去开设自己的专栏和页面。

![](https://cdn.beekka.com/blogimg/asset/202207/bg2022072108.webp)

（完）

