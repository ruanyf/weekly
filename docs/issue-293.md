# 科技爱好者周刊（第 293 期）：一周是一年的2%

这里记录每周值得分享的科技内容，周五发布。

本杂志[开源](https://github.com/ruanyf/weekly)，欢迎[投稿](https://github.com/ruanyf/weekly/issues)。另有[《谁在招人》](https://github.com/ruanyf/weekly/issues/4075)服务，发布程序员招聘信息。合作请[邮件联系](mailto:yifeng.ruan@gmail.com)（yifeng.ruan@gmail.com）。

## 封面图

![](https://cdn.beekka.com/blogimg/asset/202403/bg2024031203.webp)

安徽芜湖轻轨，为了穿越人行天桥和高架，有一段设计成了波峰波谷，乘坐时会有一点过山车的感觉。（[via](https://www.ixigua.com/7313798307732570634)）

## 一周是一年的2%

纳特·弗里德曼（Nat Friedman）曾经是 GitHub 的 CEO，现在是一名风险投资家。

![](https://cdn.beekka.com/blogimg/asset/202403/bg2024031405.webp)

他的[个人网站首页](https://nat.org/)，写着一些自己的信条。其中有一条，让我很震动。

> 他写道：“**一周是一年的2%**。”

我一直觉得，每周七天是很短的时间，尤其是发布周刊以后，更是过得飞快。

但是，他的这句话让我意识到，每周其实是一年当中很重要的组成部分。虚度一周就是虚度一年的2%。

你没有几周可以虚度的。只要多浪费几周，这一年很快过去。

反过来，过好这一周，那么这一年的2%就有价值了。只要这样多过几周，一年就会变得很充实，有拿得出手的成果。

我坚持写周刊，每周记录一点东西，整理一些思考，现在想起来，其实就是在督促自己过好这一年的2%。

## [维苏威古卷](https://scrollprize.org/grandprize)

公元79年10月24日，意大利的维苏威火山爆发，一天之内就毁灭了两万多人的庞贝古城。

火山灰掩盖了整座城市，其中有一栋房子存放了各种书籍。直到18世纪，这栋房子才重新被发现，下面是考古学家的建筑复原图。

![](https://cdn.beekka.com/blogimg/asset/202402/bg2024020606.webp)

房子里面的1800多卷纸莎草古书，都已经完全碳化。

![](https://cdn.beekka.com/blogimg/asset/202402/bg2024020601.webp)

![](https://cdn.beekka.com/blogimg/asset/202402/bg2024020602.webp)

考古学家试图展开这些烧焦的古书，但是纸张一碰就碎。

![](https://cdn.beekka.com/blogimg/asset/202402/bg2024020603.webp)

每一页的碎片就像下面这样。

![](https://cdn.beekka.com/blogimg/asset/202402/bg2024020604.webp)

没有人能从这些烧焦的古书上，读出一个字。

2019年，一位美国科学家提出了一种新方法，使用短红外高光谱成像技术，对这些古卷进行 3D 扫描，然后虚拟建模，在不接触古卷的情况下，就可以展开或压平每一页，从而复现上面的笔迹。

![](https://cdn.beekka.com/blogimg/asset/202402/bg2024020605.webp)

![](https://cdn.beekka.com/blogimg/asset/202402/bg2024020607.webp)

下面是扫描后的页面结果。

![](https://cdn.beekka.com/blogimg/asset/202402/bg2024020608.webp)

问题是上面的笔迹还是很模糊，无法确定是哪一个字母，更不要说读出句子了。

2023年3月，在一些风险投资者的资助下，古卷保管单位举办了一次比赛，邀请全世界的程序员参加，要求使用机器学习，认出上面是什么字母，破解古卷的内容，奖金总额高达100万美元。

主办单位原以为，一年之内成功的可能性不到30%。但是，2023年10月，21岁的内布拉斯加大学的学生卢克·法里托（Luke Farritor）就读出了第一个单词 ΠΟΡΦΥΡΑϹ（紫色）。

![](https://cdn.beekka.com/blogimg/asset/202402/bg2024020609.webp)

后来，他与正在柏林读博士的纳德（Youssef Nader）、瑞士苏黎世理工学院的机器人专业的学生席里格（Julian Schilliger），组成了一个团队，致力于建立一个完整的 AI 模型识别这些古书。

![](https://cdn.beekka.com/blogimg/asset/202402/bg2024020610.webp)

他们最终在比赛的截止日期前（2024年1月1日）识别出了2000个字符。

下面就是采用他们的模型，识别出来的碎片，内容已经清晰还原出来了。

![](https://cdn.beekka.com/blogimg/asset/202402/bg2024020611.webp)

2月5日，主办单位宣布，他们获得了本次比赛的第一名。

![](https://cdn.beekka.com/blogimg/asset/202402/bg2024020612.webp)

由于比赛结果令人鼓舞，主办单位扩展了自己的目标，接下来将对90%的维苏威古卷，进行扫描和识别，彻底破解两千年前的罗马人在书里写了什么。

他们所用的模型，已经全部开源，就放在 [GitHub](https://github.com/younader/Vesuvius-Grandprize-Winner)。任何人都可以安装和运行，尝试改进他们的模型，获得更好的结果。

现代科技的发展，真像神话一样，烧成灰的纸都能辨认出文字。

## 科技动态

1、[纸钢琴](https://github.com/Mayuresh1611/Paper-Piano)

学习钢琴通常需要一个专门的琴房，如果是普通人家庭，购置和练习钢琴是非常不方便的。

有人在 GitHub 上发布了一个令人耳目一新的项目，尝试零成本地解决这个问题，让你可以随时随地练习钢琴。

![](https://cdn.beekka.com/blogimg/asset/202403/bg2024031001.webp)

你只要准备两张 A4 纸，水平连接在一起，两端各画两个方框，然后就可以在纸上练习钢琴了。

这个软件通过摄像头，捕捉你的手指动作，转化成钢琴击键，让电脑发出对应的琴声。

![](https://cdn.beekka.com/blogimg/asset/202403/bg2024031002.webp)

虽然这样不会有击键的感觉，但是不失为一种简单的解决方案。如果配一个仿真键盘，就比较完善了。

2、[赛博卡车的配套帐篷](https://electrek.co/2024/03/08/tesla-shipping-cybertruck-tent/)

特斯拉的赛博卡车（Cybertruck）在2019年公布时，曾经展示了一个配套帐篷，可以装在车辆后部。

当时展示的照片是这样的。

![](https://cdn.beekka.com/blogimg/asset/202403/bg2024031003.webp)

现在，这个帐篷终于发货了，它实际长下面这样，与早先的设计大相径庭。

![](https://cdn.beekka.com/blogimg/asset/202403/bg2024031004.webp)

而且，它的售价高达3000美元（约人民币22000元），令车主十分不满。

![](https://cdn.beekka.com/blogimg/asset/202403/bg2024031005.webp)

自从赛博卡车正式发货以来，市场反响并不热烈，越来越多的人认为，它可能是特斯拉的一个失败产品。

3、[取消的苹果汽车](https://sea.mashable.com/tech/31627/apple-car-leaked-design-info-reveals-it-wouldve-been-a-minivan)

上周有消息说，经过10年研发以后，苹果公司在内部宣布，取消了苹果汽车项目。

![](https://cdn.beekka.com/blogimg/asset/202403/bg2024031304.webp)

现在网上有苹果汽车的原型照片泄漏。如果照片属实，苹果研发的竟然不是轿车，而是小货车。

![](https://cdn.beekka.com/blogimg/asset/202403/bg2024031305.webp)

这实在难以置信，因为小货车无论造得多么好，销量肯定小于轿车。

以前就有人指出，苹果不太可能真的去做汽车，因为市场规模太小。特斯拉一年销售不到200万辆，这种销量对苹果来说是不值得做的。

## 文章

1、[黄仁勋斯坦福大学演讲](https://finance.sina.cn/chanjing/gsxw/2024-03-11/detail-inamxtkr1619017.d.html)（中文）

![](https://cdn.beekka.com/blogimg/asset/202403/bg2024031406.webp)

2024年3月初，英伟达CEO黄仁勋回到母校美国斯坦福大学，进行了两次演讲，讲述了自己的经历和对 AI 的看法。这是演讲的中文翻译。

2、[Meta 的 H100 集群细节](https://finance.sina.com.cn/tech/roll/2024-03-13/doc-inanczhq9639052.shtml)（中文）

Meta 公司公布了他们的 AI 集群细节。大家可以看看，AI 需要投多少钱。

![](https://cdn.beekka.com/blogimg/asset/202403/bg2024031303.webp)

他们现在有两个集群，每个集群包含了24576块英伟达 H100 GPU（上图）。H100 的价格是2.5万美元～4万美元/块，也就是说，每个集群就要花费数亿美元。

更厉害的是，他们计划今年年底前，将 H100 扩充至35万块，远期达到60万块。

3、[注释可以减少技术债务](https://blogs.oracle.com/javamagazine/post/java-comments-reduce-technical-debt)（英文）

![](https://cdn.beekka.com/blogimg/asset/202311/bg2023111909.webp)

作者列举了代码注释的好处，论述得很好，然后大力推荐使用 Javadoc。

4、[VS Code 的垂直 Tab 页](https://weberdominik.com/blog/vscode-vertical-tabs/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202311/bg2023112006.webp)

本文介绍如何在 VS Code 编辑器里面，放置一个垂直的边栏，进行标签切换。

5、[Linux 服务器加固指南](https://pboyd.io/posts/securing-a-linux-vm/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202307/bg2023073104.webp)

你架设了一台 Linux 虚拟主机，如何让它变得更安全，本文列出了详细的操作步骤。

6、[家庭电子实验室设置指南](https://badar.tech/2023/04/30/electronics-lab-bench-setup-guide/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202305/bg2023051206.webp)

作者介绍他的家庭电子实验室的配置，喜欢玩电子装置的朋友可以参考。

7、[为什么去赌场是个坏主意](https://easylang.dev/apps/tutorial_mcarlo.html)（英文）

![](https://cdn.beekka.com/blogimg/asset/202305/bg2023051304.webp)

作者写了一些简单的小程序，使用蒙特卡罗模拟，演示如果不断博彩（比如1000次）会是多少收益。

## 工具

1、[Rot](https://github.com/candiddev/rot)

一个命令行工具，用来对密码进行加密/解密，这样就可以把密码保存在公开的代码库了。

2、[Angie](https://angie.software/en/)

![](https://cdn.beekka.com/blogimg/asset/202312/bg2023121308.webp)

一个 nginx 的分叉版本，由原始团队成员开发，增加了一些功能。类似的项目还有 [free nginx](https://freenginx.org/)。

3、[LaVague](https://github.com/lavague-ai/LaVague)

![](https://cdn.beekka.com/blogimg/asset/202403/bg2024031403.webp)

一个很有意思的概念产品，使用文字指令来操作网站，比如输入文字“点击按钮”，它就自动点击网页按钮，底层用的是浏览器自动化框架 Selenium。

4、[LapisCV](https://github.com/BingyanStudio/LapisCV)

![](https://cdn.beekka.com/blogimg/asset/202403/bg2024031209.webp)

基于 Obsidian / Typora 编辑器的 Markdown 简历模板，可以导出 PDF 文件。（[@YiNNx](https://github.com/ruanyf/weekly/issues/4111) 投稿）

5、[OpenAPI-UI](https://github.com/rookie-luochao/openapi-ui)

![](https://cdn.beekka.com/blogimg/asset/202403/bg2024031210.webp)

该工具生成 Swagger 或 OpenAPI 3 格式的 API 接口文档，也可当作简洁的 Postman 使用。（[@rookie-luochao](https://github.com/ruanyf/weekly/issues/4114) 投稿）

6、[git-diff-view](https://github.com/MrWangJustToDo/git-diff-view)

![](https://cdn.beekka.com/blogimg/asset/202403/bg2024031211.webp)

一个 React/Vue 组件，用来显示 git diff 的结果，类似于 GitHub 的样式。（[@MrWangJustToDo](https://github.com/ruanyf/weekly/issues/4105) 投稿）

7、 [AI 时间线](http://www.ai-timeline.top/)

![](https://cdn.beekka.com/blogimg/asset/202403/bg2024031212.webp)

一个有意思的网站，输入一个关键词，自动生成该词的时间线，上图是输入“github”的生成结果，它的代码仓库在 [GitHub](https://github.com/zhugezifang/ai_timeline)。（[@zhugezifang](https://github.com/ruanyf/weekly/issues/4115) 投稿）

8、[Earthworm](https://github.com/cuixueshe/earthworm)

![](https://cdn.beekka.com/blogimg/asset/202403/bg2024031306.webp)

一个开源的 Web 程序，通过连词造句的方式，经过不断重复练习英语，[线上体验](https://earthworm.cuixueshe.com/)。（[@cuixiaorui](https://github.com/ruanyf/weekly/issues/4120) 投稿）

9、[Postal](https://github.com/postalserver/postal)

![](https://cdn.beekka.com/blogimg/asset/202312/bg2023121407.webp)

一个开源的电子邮件服务器，自带 Web 界面。

10、[briefsky](https://briefsky.app/)

![](https://cdn.beekka.com/blogimg/asset/202310/bg2023101702.webp)

一个开源的天气预报前端，可以接入各种天气数据源。

11、[Qaul](https://qaul.net/)

![](https://cdn.beekka.com/blogimg/asset/202310/bg2023101801.webp)

一个可以离线通信的软件，允许一群用户在不联网的情况下，通过本机的共享 WiFi 发送消息。

12、[Piped](https://github.com/TeamPiped/Piped)

![](https://cdn.beekka.com/blogimg/asset/202310/bg2023101802.webp)

一个开源的 Youtube 网页前端 UI。

13、[Riffusion](https://www.riffusion.com/)

![](https://cdn.beekka.com/blogimg/asset/202310/bg2023101803.webp)

一个免费的 AI 工具，给出一段提示，它会生成相应的歌曲，并且是带有歌词、人声演唱的。

## 资源

1、[IP 信息查询合集](https://github.com/ihmily/ip-info-api) 

这个仓库收集可以查询 IP 信息的免费网站。（[@ihmily](https://github.com/ruanyf/weekly/issues/4119) 投稿）

2、[TypeScript 互动教程](https://www.learn-ts.org/)

![](https://cdn.beekka.com/blogimg/asset/202312/bg2023122603.webp)

通过一个个小练习，讲授 TypeScript 语法。

3、[学习现代 C++](https://learnmoderncpp.com/)

![](https://cdn.beekka.com/blogimg/asset/202312/bg2023122701.webp)

一个讲解 C++ 基础知识的自学教程。

4、[Virustotal](https://www.virustotal.com/gui/home/upload)

![](https://cdn.beekka.com/blogimg/asset/202304/bg2023042003.webp)

软件病毒检测引擎，可以上传文件进行扫描，也可以指定需要扫描的文件或网址。

## 图片

1、[世界第一艘深海潜水器](https://rarehistoricalphotos.com/bathysphere-old-photos/)

1925年，美国博物学家威廉·毕比（William Beebe）提出想造一种深海潜水器。当时，潜艇的最大下潜深度只有117米，而且没有窗口可以观察外部。

威廉·毕比设计的潜水器为球形，因为球形最抗压，由铸铁制造，里面只能待一个人。

![](https://cdn.beekka.com/blogimg/asset/202310/bg2023100810.webp)

潜水器的后端是一个透明的入舱口，采用螺栓固定，只能从外部打开，内部无法打开。

![](https://cdn.beekka.com/blogimg/asset/202310/bg2023100811.webp)

前端是三个窗口，由76毫米厚的石英制成，这是当时最坚固的透明材料。

![](https://cdn.beekka.com/blogimg/asset/202310/bg2023100812.webp)

潜水器内部由高压气瓶提供氧气，采用钠钙和氯化钙吸收二氧化碳和水分。

1930年6月11日，它第一次下水，达到了400米深度，1934年达到了900米的深度。

![](https://cdn.beekka.com/blogimg/asset/202310/bg2023100813.webp)

此后，威廉·毕比停止使用这个潜水器了，因为他觉得已经达到了观测海底生物的目的。

而且，它不是很安全。每次下水，它必须系着钢缆，要靠钢缆拉上来。万一钢缆在压力下出现问题，或者钩子断了，潜水器里面的人必死无疑。

![](https://cdn.beekka.com/blogimg/asset/202310/bg2023100814.webp)

现在，这个潜水器的复制品，陈列在美国华盛顿特区的国家地理博物馆。

![](https://cdn.beekka.com/blogimg/asset/202310/bg2023100809.webp)

## 文摘

1、[乔布斯的遗照](https://profoto.com/int/profoto-stories/albert-watson-steve-jobs)

苹果创始人乔布斯的遗照是如何拍摄的？

![](https://cdn.beekka.com/blogimg/asset/202310/bg2023101501.webp)

2011年10月5日，史蒂夫·乔布斯去世，苹果网站用苏格兰摄影师艾伯特·沃森 (Albert Watson) 在2006年拍摄的这张照片来纪念他。

许多人知道，乔布斯并不太喜欢被人拍摄，这对摄影师是一种挑战。

拍摄当日，摄影师被告知拍摄时间只有一小时，然而他却胸有成竹地说，只要三十分钟便能完成。

艾伯特·沃森建议史蒂夫·乔布斯稍微前倾，说道：“想象一下，桌子对面有四五个人不同意你的观点，但你知道自己是对的。”

Steve Jobs 凝视着镜头，眼神十分坚定，给人一种充满信念与智慧的感觉。这就是这幅肖像照的创作过程。

离开时，史蒂夫·乔布斯看了一眼照片，问他是否可以拥有它，并说这“也许是我拍过的最好的照片”。

![](https://cdn.beekka.com/blogimg/asset/202310/bg2023101502.webp)

五年后，艾伯特·沃森接到苹果公司的电话，问他是否仍保留那张乔布斯的照片。他当时感到十分惊讶，同时意识到事情的紧迫性，随即找到照片并发送给苹果公司。

当天晚上，苹果在官网宣布乔布斯去世的消息，并附上艾伯特·沃森拍摄他的肖像，这张照片在网站上刊登了一个月，之后也成为乔布斯传记的封面，成为21世纪最广为人知的人像照片之一。

## 言论

1、

以后不会存在“程序员”这种职业了，只要会说话，人人都具备程序员的能力。未来的编程语言只会剩下两种，一种叫做英文，一种叫做中文。

-- [李彦宏](https://finance.sina.com.cn/jjxw/2024-03-10/doc-inamvkcs5017643.shtml)，百度董事长

2、

你无事可做时，未来看起来就会让人灰心丧气。我早已放弃了为人生寻找某种意义之类的事情，但我确实尝试寻找一些有趣的事情来做。

-- [Hacker News 读者](https://news.ycombinator.com/item?id=38754757)

3、

电影《奥本海默》之中，奥本海默在黑板上写方程式，解释核裂变。这个方程式在物理上是完全正确的。

大多数观众不会意识到这一点，但这让我这个物理学家感觉很好，黑板上有正确的方程！

-- [电影《奥本海默》的物理学顾问](https://www.nature.com/articles/d41586-024-00715-3?utm_source=join1440&utm_medium=email)

4、

幸福的三大要素是：有要做的事（something to do）、有要爱的人（someone to love）、有寄予希望的东西（something to hope for）。

-- [亚历山大·查默斯](https://www.forbes.com/quotes/252/)，19世纪美国著名医生

## 往年回顾

[永不丢失的网络身份](https://www.ruanyifeng.com/blog/2023/03/weekly-issue-246.html)（2023 #246）

[掌机的未来](https://www.ruanyifeng.com/blog/2022/02/weekly-issue-196.html)（2022 #196）

[网课应该怎么上](https://www.ruanyifeng.com/blog/2021/02/weekly-issue-146.html)（2021 #146）

[在线教育不等于录制视频](https://www.ruanyifeng.com/blog/2020/02/weekly-issue-96.html)（2020 #96）

（完）

