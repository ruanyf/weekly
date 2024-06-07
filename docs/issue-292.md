# 科技爱好者周刊（第 292 期）：所有代码都是技术债

这里记录每周值得分享的科技内容，周五发布。

本杂志[开源](https://github.com/ruanyf/weekly)，欢迎[投稿](https://github.com/ruanyf/weekly/issues)。另有[《谁在招人》](https://github.com/ruanyf/weekly/issues/4075)服务，发布程序员招聘信息。合作请[邮件联系](mailto:yifeng.ruan@gmail.com)（yifeng.ruan@gmail.com）。

## 封面图

![](https://cdn.beekka.com/blogimg/asset/202403/bg2024030705.webp)

意大利佛罗伦萨新机场，宣布了设计方案。候机楼顶部将有一个7.7公顷的葡萄种植园，用来酿造当地著名的葡萄酒。（[via](https://www.euronews.com/travel/2024/02/14/wine-meets-travel-florences-new-airport-will-have-a-vineyard-on-its-roof)）

## 所有代码都是技术债

代码是公司的资产，公司总是鼓励大家多写代码。但是，很多人（尤其是管理层）没有意识到，**代码也是负债**。

代码越多，债越多，这就是程序员常说的“技术债”。

![](https://cdn.beekka.com/blogimg/asset/202403/bg2024030702.webp)

今天我想谈谈，什么是“技术债”？为什么你拥有的代码太多，不是一件好事。

“技术债”（technical debt）源自著名程序员沃德·坎宁安（Ward Cunningham）的[一篇文章](https://queue.acm.org/detail.cfm?id=2168798)。他写了一句话：“**交付代码就像负债累累**。”

![](https://cdn.beekka.com/blogimg/asset/202403/bg2024030703.webp)

你的代码一旦进入生产环境，就像背上一笔债务，将来需要不断支付利息，除非代码不再使用。

这个比喻获得了共鸣，**人们把代码带来的负担，称为“技术债”**。

为什么代码好比负债累累？这有两个原因。

第一个原因是，由于各种限制，代码的实现有问题，包含了 Bug，或者选择了有问题的组件，后期需要修改或重写。

第二个原因是，即使代码是完美的，但由于技术进步，它会逐渐腐化过时，后期需要不断维护和更新，这通常比原始开发成本更高。

这意味着，**无论多么小心，上线的代码总是有“技术债”。** 可以这样说，[所有的代码都是技术债](https://www.tokyodev.com/articles/all-code-is-technical-debt)。

![](https://cdn.beekka.com/blogimg/asset/202403/bg2024030704.webp)

“技术债”的可怕之处，在于你必须按时偿还，如果拖着不还，它就会像雪球一样越滚越多，维护成本越来越高，直到再也无法维护，只能放弃这段代码。

既然所有代码都是技术债，程序员写代码时，就必须考虑到它的长期成本，尽量减轻自己或别人日后的负担（利息）。

一个基本的事实是 **代码越少，技术债越小；没有代码，就没有技术债**。从这个角度看，软件开发的正确做法是下面两点。

（1）冗余的代码都要删除。

（2）只实现那些必须实现的功能，除非绝对必要，不要引入新功能。新功能必然带来新的代码，而且新功能一旦添加，就很难废除，总是会保留下来。

## 葫芦 AI

主流的 AI 模型，目前都是收费制。如果同时使用多个模型，每月是一笔不小的费用，而且过程很麻烦。

> - GPT-4：20美元/月
> - 文心一言：49.9元人民币/月
> - Midjourney：10美元/月
> - DALL-E：每张图片0.02美元

国内新出的“葫芦 AI”（HuLu AI），尝试解决这个问题。**它在同一个界面，提供上面四个模型的访问**，相当于“四合一”的国内镜像。

这个服务刚刚推出，目前处在推广期，优惠力度很大，**只要298元，就可以永久无限量使用**，免除逐一访问 GPT4 / 文心一言 / Midjourney / DALL-E 的麻烦，而且访问速度快。

![](https://cdn.beekka.com/blogimg/asset/202403/bg2024030706.webp)

葫芦 AI 希望通过周刊，向国内的开发者介绍自己。推广期结束后，他们将恢复原价498元。

它有试用点数，只要扫描上方海报的二维码，就可以**免费试用**。大家觉得效果满意，再考虑付费。

如果你对 AI 还不熟悉，葫芦 AI 还免费赠送学习资料。扫描<u>上方二维码</u>时，微信添加助理，就可以领取 **【Sora 入门手册】** + **【ChatGPT 提示词大全】** + **【AI 变现案例实战手册】** 的 AI 资料包。

## 科技动态

1、[USB 止痒器](https://shkspr.mobi/blog/2023/12/usb-c-cures-mosquito-bites/)

市场上出现了一种奇特的 USB 设备，当你被蚊虫叮咬后，它可以用来止痒。

![](https://cdn.beekka.com/blogimg/asset/202312/bg2023121911.webp)

你把它插入手机的 USB-C 口，然后用 App 可以控制它的发热。

![](https://cdn.beekka.com/blogimg/asset/202312/bg2023121912.webp)

当它发热以后，将其贴在被咬处，等同于热敷，很快就不痒了。

![](https://cdn.beekka.com/blogimg/asset/202312/bg2023121910.webp)

这么一个小玩意，在亚马逊的售价居然为30英镑（270元人民币）。

2、[无音爆的超音速客机](https://techxplore.com/news/2024-01-nasa-lockheed-martin-reveal-quiet.html)

目前，世界上没有超音速客机，因为超音速飞行会产生音爆，影响城市居民的生活。

美国宇航局正在开发一种没有音爆的超音速客机，并且已经生产出了一架原型机。

![](https://cdn.beekka.com/blogimg/asset/202401/bg2024011704.webp)

这架飞机长约30米，细长的圆锥形机头几乎占其整架飞机的三分之一。据说这种结构可以消除导致音爆的冲击波。

由于它的机头太长，驾驶室几乎位于整机二分之一的位置。这样的超音速飞机即使没有音爆，也载不了多少乘客吧。

3、[单叶片风力发电机](https://newatlas.com/energy/touchwind-floating-wind-turbine/)

传统的风力发电机有三个叶片。

![](https://cdn.beekka.com/blogimg/asset/202309/bg2023091702.webp)

一家荷兰公司发明了单叶片的风力发电机。

![](https://cdn.beekka.com/blogimg/asset/202309/bg2023091703.webp)

它装在浮标上面，水底下是一个大桶，通过铁链固定在海床上。

![](https://cdn.beekka.com/blogimg/asset/202309/bg2023091704.webp)

因为它是浮动的，根据风力和风向的不同，它跟海平面的角度也在随时发生变化。

![](https://cdn.beekka.com/blogimg/asset/202309/bg2023091705.webp)

它的优点主要是，制造和安装的成本低。目前处于测试阶段，顺利的话将会大规模部署。

4、[车贷防拖欠专利](https://www.thedrive.com/news/future-fords-could-repossess-themselves-and-drive-away-if-you-miss-payments)

汽车贷款逾期不还，怎么办？福特汽车申请了一项专利，专门对付不还车贷的人。

![](https://cdn.beekka.com/blogimg/asset/202310/bg2023101811.webp)

在贷款偿还期前后，车辆会发出多次付款提醒。如果置之不理，车辆就会开始失去一些功能，比如空调、GPS、车窗控制等等。

每当车主出现在车内时，车辆就发出语音提醒，要你还款。

![](https://cdn.beekka.com/blogimg/asset/202310/bg2023101812.webp)

如果车主还是不还车贷，这个专利还有一个终极大招：车辆会自动开回停车场或者拖车点，让福特公司拖走回收。

## 文章

1、[OpenAI 回应马斯克的长文](https://finance.sina.com.cn/stock/usstock/c/2024-03-06/doc-inamkuik5589602.shtml)（中文）

马斯克[起诉 OpenAI](https://finance.sina.cn/2024-03-01/detail-inakvvhe8160978.d.html)，称后者违背开源承诺，成为微软的盈利性子公司。

![](https://cdn.beekka.com/blogimg/asset/202403/bg2024030708.webp)

这篇是 OpenAI 长篇回应的中文翻译（[英语原文](https://openai.com/blog/openai-elon-musk)），透露了很多内幕。主要内容是 AI 需要大量算力和资金，所以不得不成立盈利性部门，马斯克当年对此知情，并表示支持。

2、[Perplexity 会是“搜索的未来”吗？](https://wallstreetcn.com/articles/3709779)（中文）

![](https://cdn.beekka.com/blogimg/asset/202403/bg2024030607.webp)

英伟达 CEO 黄仁勋向媒体透露，他每天都使用 AI 工具 Perplexity 进行搜索。本文介绍这个对话式搜索引擎。

3、[入行 15 年，我还是觉得编程很难](https://mp.weixin.qq.com/s/B7Z0ROkiBqqxVKkLNR9BxQ)（中文）

腾讯技术专家对其15年程序人生的思考，总结了8点经验看法。

4、[100万级安装量的开源作品，一年有多少打赏收入？](https://juejin.cn/post/7341593721100451880)（中文）

作者在自己的开源作品里面，放了一个赞赏码，一年带来330元的收入。（[@xxxily](https://github.com/ruanyf/weekly/issues/4092) 投稿）

5、[HTML 的 Switch 控件](https://webkit.org/blog/15054/an-html-switch-control/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202402/bg2024022915.webp)

Safari 17.4 引入了一个新的表单控件“滑块开关”（switch），从而将 iPhone 的这个控件带入了网页。

6、[为什么我选择 Tauri 而不是 Electron](https://aptabase.com/blog/why-chose-to-build-on-tauri-instead-electron)（英文）

![](https://cdn.beekka.com/blogimg/asset/202311/bg2023111608.webp)

作者本来使用 Electron 开发跨平台桌面应用，后来改成了 Tauri。本文讲述了原因，以及他的感受。

7、[text-wrap 的换行控制](https://clagnut.com/blog/2424)（英文）

![](https://cdn.beekka.com/blogimg/asset/202310/bg2023100516.webp)

长文本的自动换行，由 CSS 的 text-wrap 属性控制。本文讨论如何使用这个属性，让标题产生更美观的自动换行。

8、[计算机从哪里获取时间？](https://dotat.at/@/2023-05-26-whence-time.html)（英文）

![](https://cdn.beekka.com/blogimg/asset/202310/bg2023100607.webp)

计算机从 NTP（时间服务器）获取当前时间，但是 NTP 的时间又从何而来？本文图文形式地介绍人类如何确定时间。

9、[如何在 Windows 上测试 Safari](https://james.darpinian.com/blog/safari-on-windows)（英文）

![](https://cdn.beekka.com/blogimg/asset/202310/bg2023100808.webp)

苹果的 Safari 浏览器现在没有 Windows 版，本文教你一种方法，依然可以在 Windows 上测试这个浏览器。

## 工具

1、[Ente](https://github.com/ente-io/ente)

![](https://cdn.beekka.com/blogimg/asset/202403/bg2024030301.webp)

一个云相册软件，Google Photos 和 iCloud Photos 的替代品，以前是闭源产品，最近刚刚开源。

它的主要特点是提供端对端加密。其他的云相册软件，还有 [Immich](https://immich.app/) 和 [PhotoPrism](https://github.com/photoprism/photoprism)。

2、[Earthly](https://earthly.dev/)

![](https://cdn.beekka.com/blogimg/asset/202207/bg2022072502.webp)

一个开源的 CI/CD 框架，可以在本地架设自动构建服务。

3、[Vikunja](https://vikunja.io/)

![](https://cdn.beekka.com/blogimg/asset/202312/bg2023120707.webp)

一个开源的代办事项（to-do）App，提供多种视图，有 Web 版和桌面版，还可以自己架设。

4、[日语短文排版小工具](https://miusuncle.github.io/japen/)

![](https://cdn.beekka.com/blogimg/asset/202403/bg2024030202.webp)

一个在线工具，生成漂亮的日文排版，支持横竖版式、自动假名标注、深浅两种主题、字体配置、高亮、下划线、字体等。（[@miusuncle](https://github.com/ruanyf/weekly/issues/4080) 投稿）

5、[Web-Check](https://github.com/Lissy93/web-check)

![](https://cdn.beekka.com/blogimg/asset/202403/bg2024030401.webp)

开源的网站分析工具, 可以分析网站的 IP 信息、SSL 链、DNS 记录、Cookie、域名信息、服务器位置、网站性能等，查看 [Demo](https://web-check.xyz/)。（[@WFANG12719](https://github.com/ruanyf/weekly/issues/4086) 投稿）

6、[ImageTools](https://ai-image.tools/home)

![](https://cdn.beekka.com/blogimg/asset/202403/bg2024030501.webp)

AI 一键抠图（去除背景）的在线工具。（[@handsometong](https://github.com/ruanyf/weekly/issues/4087) 投稿）

7、[zz-plan](https://zz-plan.com/)

![](https://cdn.beekka.com/blogimg/asset/202403/bg2024030502.webp)

甘特图/横道图的在线制作工具。（[@lizhichao](https://github.com/ruanyf/weekly/issues/4088) 投稿）

8、[Windows in container](https://github.com/dockur/windows)

Docker 容器里运行 Windows 系统，可选择 Win7，Win10，Win11 等，支持自动激活，还支持远程桌面连接。（[@wrenashe](https://github.com/ruanyf/weekly/issues/4091) 投稿）

9、[Rsdoctor](https://github.com/web-infra-dev/rsdoctor)

![](https://cdn.beekka.com/blogimg/asset/202403/bg2024030601.webp)

一个 JS 构建器的分析工具，能够查看构建产物的模块关系，并分析构建器对代码的更改，支持 Rspack 和 Webpack。（[@easy1090](https://github.com/ruanyf/weekly/issues/4095) 投稿）

10、[Photo Relay](https://github.com/zobor/photo-relay)

![](https://cdn.beekka.com/blogimg/asset/202403/bg2024030503.webp)

一个封面图片制作的在线工具。 [Demo](https://www.duelpeak.com/pages/poster)。（[@zobor](https://github.com/ruanyf/weekly/issues/4094) 投稿）

11、[opfs-tools](https://github.com/hughfenghen/opfs-tools)

浏览器私有文件系统 OPFS API 的一个封装库，提供更简单好用的 API。（[@hughfenghen](https://github.com/ruanyf/weekly/issues/4099) 投稿）

12、[ast-grep VSCode](https://marketplace.visualstudio.com/items?itemName=ast-grep.ast-grep-vscode)

一个使用正则表达式进行代码搜索、替换的 VSCode 插件。（[@HerringtonDarkholme](https://github.com/ruanyf/weekly/issues/4100) 投稿）

## 掘金动手实验室

学习新技术，最重要的就是动手实操，但是这样的机会比较少，你不一定能遇到让你尝试的场景。

本周有一个好消息，**掘金动手实验室（JUEJIN Code Lab）** 正式推出啦！

它是一个<u>新技术实操</u>为主题的系列活动，致力于<u>理论知识转化为实际应用</u>，并让参与者之间进行技术交流。

它由稀土掘金技术社区精心策划，与众多领先的工具和平台厂商携手合作，将涵盖多个技术领域，确保每一位参与者都能找到自己感兴趣的内容。

![](https://cdn.beekka.com/blogimg/asset/202403/bg2024030707.webp)

第一期活动的主题，就是现在最热门的 AI，由稀土掘金社区和扣子（coze.cn）共同发起。**本次活动通过动手实操的方式，让你的想法和创意在 AI 的帮助下落地。**

活动分为3月16日的[北京场](https://www.bagevent.com/event/8791420?bag_track=ryf)和3月30日的[深圳场](https://www.bagevent.com/event/8796081?bag_track=ryf)，地点就在北京/深圳的字节工区。

所有线下参与的同学，除了能够接触 AI 开发以外，还都有机会获得掘金的丰富礼包、以及扣子（coze.cn）的官网推荐、API 内测和官方访谈。

欢迎大家[点击链接](https://www.bagevent.com/event/8791420?bag_track=ryf)，或者扫码海报的二维码，报名参与，进行 AI 开发实操。 

## 资源

1、[一译](https://yiyibooks.cn/)

![](https://cdn.beekka.com/blogimg/asset/202403/bg2024030204.webp)

用户可以在该网站搜索或者上传 arXiv 论文（暂时只支持 HTML 版本的论文），它会自动机器翻译，提供对照阅读。（[@yiyibooks](https://github.com/ruanyf/weekly/issues/4083) 投稿）

2、[京墨](https://github.com/hefengbao/jingmo)

![](https://cdn.beekka.com/blogimg/asset/202403/bg2024030203.webp)

一个开源的安卓 App，随身的古诗文、歇后语、成语、绕口令等等的图书馆。（[@hefengbao](https://github.com/ruanyf/weekly/issues/4081) 投稿）

3、[OpenMoji](https://github.com/hfg-gmuend/openmoji)

![](https://cdn.beekka.com/blogimg/asset/202309/bg2023091302.webp)

这个项目收集各种开源的 Emoji，开发者和设计师可以提交自己的作品。

4、[Docker Compose Examples](https://github.com/Haxxnet/Compose-Examples)

这个仓库收集各种常用的 Docker Compose 配置文件。

5、[学习 x86-64 汇编语言](http://www.egr.unlv.edu/~ed/x86.html)

![](https://cdn.beekka.com/blogimg/asset/202312/bg2023122601.webp)

一本英文的汇编语言入门教材，以 Ubuntu 平台为例。

## 图片

1、[落叶艺术](https://kottke.org/23/09/artistic-leaf-raking)

一个欧洲艺术家在公园里，把落叶整理成各种奇怪的形状，让公园有了更多的趣味。

![](https://cdn.beekka.com/blogimg/asset/202309/bg2023092809.webp)

![](https://cdn.beekka.com/blogimg/asset/202309/bg2023092810.webp)

![](https://cdn.beekka.com/blogimg/asset/202309/bg2023092811.webp)

2、[最后的快车](https://www.filfre.net/2023/10/the-last-express/)

《最后的快车》（The Last Express）是上个世纪末发行的一款电子游戏。

![](https://cdn.beekka.com/blogimg/asset/202310/bg2023100801.webp)

它讲述了一个美国人在1914年，登上最后一班从巴黎到伊斯坦布尔的“东方快车”的故事。

整个游戏场景，都发生在车厢内。下面是真实车厢的历史照片。

![](https://cdn.beekka.com/blogimg/asset/202310/bg2023100802.webp)

游戏设计师根据这张照片，进行建模，以数字形式还原了当时的场景。

![](https://cdn.beekka.com/blogimg/asset/202310/bg2023100803.webp)

![](https://cdn.beekka.com/blogimg/asset/202310/bg2023100804.webp)

## 文摘

1、[有些人就像 ChatGPT](https://www.geoffmulgan.com/post/human-chatgpts-and-the-vices-of-foggy-thinking)

大家都说 ChatGPT 像人，但是我觉得，还有另一方面，那就是**有些人很像 ChatGPT**，尤其是在学术界。

![](https://cdn.beekka.com/blogimg/asset/202403/bg2024030801.webp)

ChatGPT 不理解任何材料，但可以利用这些材料，快速找到问题的合理答案。它会综合和模仿，有时表现得非常令人信服，就像某个知识渊博的人在谈论某个主题。  

学术界的很多人也是这样，他们很聪明，吸收了说话和构建理论的方法，并且善于听起来令人信服。

但是，如果你问一个探索性的问题，就会发现他们的理解很少，一切侃侃而谈都是表面的，没有深度。这都是模仿而不是真正的思想，他们只是故意让别人觉得似乎有道理。

许多领域的许多人，表现得就像 ChatGPT 的真人版，特别是在那些不做太多实证工作、不涉及对事实或假设进行检验的学科。他们制造的文本越多，就越危险。

这种人有很多明显迹象，比如使用非常笼统的术语，以及听起来巧妙的表述或行话，内容里面很少有事实，例子也很少或者很随意，没有真实的感受，而且通常也不会足够清楚地说出他不同意什么。

我现在意识到，我不理解某人在说什么，有时很可能是他们不知道自己在说什么，表现得像 ChatGPT。

我将其称为“吹泡泡”，即没有实质内容但能让他人信服的说话能力。这是很多大学领导的重要技能。

现在，ChatGPT 向我们展示了尽管不理解，但将大量材料合成为可信的文本流，是完全可以做到的。也许这是不可避免的，但真是一种非常不健康的恶习——人们应该走出去，观察事物，清晰说出自己的真实感受。

我明确意识到，自己更愿意被那些行为不像机器人的人包围，更愿意倾听那些有原创思想的人的声音。

## 言论

1、

如果你没有时间集中精力学习新知识，那么就花时间复习已经学过的内容。

-- [Hacker News 读者](https://news.ycombinator.com/item?id=38676257)

2、

浏览器地址栏兼作搜索输入栏，这一定是史上最值钱的 UI 控件。谷歌为了成为这个控件的默认搜索引擎，每年支付 Firefox 4亿美元，Safari 150-200亿美元。

-- [《史上最值钱的 UI 控件》](https://blog.jim-nielsen.com/2023/most-profitable-ui-element-ever/)

3、

一切都是模糊的，直至你试图使其精确时，你才会发现，我们日常表达出来的精确与真正的精确相距甚远。以至于当我们说话时，你无法假设这就是对方真正的意思。

-- [伯特兰·罗素](https://siddhesh.substack.com/p/projects)（Bertrand Russel），英国哲学家

4、

忒修斯之船（Ship of Theseus）是公元一世纪的希腊作家普鲁塔克提出的哲学问题：如果雅典国王忒修斯的船的木头逐渐被替换，直到所有的木头都不是原来的木头，那这艘船还是原来的那艘船吗？

-- [维基百科](https://zh.wikipedia.org/wiki/%E5%BF%92%E4%BF%AE%E6%96%AF%E4%B9%8B%E8%88%B9)

5、

每一个最佳实践的背后都有一个恐怖的经历。

-- [Julia Evans](https://buttondown.email/hillelwayne/archive/advice-for-new-software-devs-whove-read-all-those/)

## 往年回顾

[摩天大楼是反人类的](https://www.ruanyifeng.com/blog/2023/03/weekly-issue-245.html)（2023 #245）

[你做过不在乎结果的项目吗？](https://www.ruanyifeng.com/blog/2022/02/weekly-issue-195.html)（2022 #195）

[大家不出门，经济怎么办？](https://www.ruanyifeng.com/blog/2021/02/weekly-issue-145.html)（2021 #145）

[远程办公暴露冗余岗位](https://www.ruanyifeng.com/blog/2020/02/weekly-issue-95.html)（2020 #95）

（完）

