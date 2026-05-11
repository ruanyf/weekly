# 科技爱好者周刊（第 395 期）：软件开发的第三种方式

这里记录每周值得分享的科技内容，周五发布。

本杂志[开源](https://github.com/ruanyf/weekly)，欢迎[投稿](https://github.com/ruanyf/weekly/issues)。另有[《谁在招人》](https://github.com/ruanyf/weekly/issues/9815)服务，发布程序员招聘信息。合作请[邮件联系](mailto:yifeng.ruan@gmail.com)（yifeng.ruan@gmail.com）。

## 封面图

![](https://cdn.beekka.com/blogimg/asset/202605/bg2026050602.webp)

即将在今年完工的深圳自然博物馆，它的形状模拟了一条弯曲的河流。（[via](https://baike.baidu.com/item/%E6%B7%B1%E5%9C%B3%E8%87%AA%E7%84%B6%E5%8D%9A%E7%89%A9%E9%A6%86/22596523)）

## 软件开发的第三种方式

有一本很著名的软件开发著作，叫做《大教堂与集市》，大家了解吗？

![](https://cdn.beekka.com/blogimg/asset/202605/bg2026050712.webp)

它提出软件开发有两种方式。

一种方式是大教堂（Cathedral），即软件经过精心规划，由一支专业的团队封闭式开发管理，全过程有严格的流程和管控，代码通常是闭源的。

另一种方式是集市（bazaar），即软件开发是开放的，没有围墙，任何人都可以加入，决策过程是透明的、由社区驱动，代码开源。

这种比喻将软件行业一分为二，非常精辟，自从初次提出，已经过去了近30年，一直得到大家的认可。

但是最近，有人提出，这两种方式已经不足以概括现状，软件开发现在出现了第三种方式：[神秘屋](https://www.dbreunig.com/2026/03/26/winchester-mystery-house.html)。

![](https://cdn.beekka.com/blogimg/asset/202604/bg2026040502.webp)

“神秘屋”是一幢真实存在的大宅，就位于美国加州，19世纪末由一个老太太建造。

这个老太太非常非常有钱，没有其他爱好，就喜欢建筑学。她拿自己家当作实验品，一个房间接一个房间地建造，都由她说了算，亲自设计，亲自监工。

整幢楼没有整体规划，怎么想就怎么造，房间 A 是维多利亚式，房间 B 是罗马式，房间 C 是哥特式，都由老太太决定。有时候，房间造到一半，老太太不满意了，就拆掉重建。

所以，整个建筑像迷宫一样，每个房间的风格都不一样。根据当年的记录，重建次数最多的房间一共拆毁重建了16次。为了省事，一些房间的窗户和门重建时也没拆掉，而是直接砌进了墙里。

整幢楼在不同时期加盖了多层，最高达到五层，大约有160个房间、2000扇门、10000扇窗户、47个楼梯、47个壁炉、13个浴室和6个厨房。

1922年，老太太去世后，它对外开放，人们将其称为“神秘屋”。

如今，很多程序员就是这个老太太。

他用 AI 开发软件，自己提出需求，想要什么就让 AI 开发什么，既没有需求审查，也没有代码测试，充分满足自己的个性。

最终开发出来的软件，就是高度个性化，规模庞大，不断扩张，代码层层累加，几乎没有精简和优化，充满了修复 bug 的补丁。而且，它通常缺乏文档，对外人来说晦涩难懂，就像“神秘屋”一样。

但是，这种开发过程充满了乐趣，会让开发者自我陶醉，乐在其中。

随着 AI 模型越来越强，“神秘屋”式软件正在不断涌现，搞不好以后会成为主流，取代大教堂和集市。大部分软件，尤其是个人和小团队开发的软件，可能都是以这种方式开发出来的。

## 大模型流行度排行榜

现在的大模型排行榜，都是衡量大模型的能力。有人想出了一种方法，可以衡量大模型的人气。

具体来说，就是每天抓取“[黑客新闻](https://news.ycombinator.com/)”热度最高的200个主题，筛选出编程和 AI 相关的主题，再根据每个主题下面的留言，看看讨论最多、评价最好的模型是什么。

黑客新闻是著名的程序员社区，每天有大量程序员和工程师访问并留言。因此，它具有代表性，提及次数最多、好评率最高的模型，就是最流行的模型。

![](https://cdn.beekka.com/blogimg/asset/202605/bg2026050405.webp)

这个项目的网站是 [HN SOTA](https://hnup.date/hn-sota)，每天都会更新排行榜。

本周前三名的模型依次是 Claude Opus 4.7、GPT 5.5、Claude Sonnet。

国产模型 Kimi K2.6、DeepSeek V4、Qwen 3.6、GLM 5.1 都进入了前十名。 

## 科技动态

1、[陪伴式机器狗](https://www.wsj.com/tech/ai/familiar-machines-and-magic-robot-c8711e45)

扫地机器人的发明者是美国 iRobot 公司创始人科林·安格尔（Colin Angle），他退休后继续研究机器人。

最近，他的公司推出了一个主要用来陪伴的机器狗。

![](https://cdn.beekka.com/blogimg/asset/202605/bg2026050706.webp)

它的最大特点就是，看起来不像机器，更像毛绒玩具，可以跟随行走，也可以跟你互动。

![](https://cdn.beekka.com/blogimg/asset/202605/bg2026050707.webp)

以现在的技术，已经能做出可以乱真的机器狗。也许人们以后更愿意养机器狗，而不是真的狗，因为机器狗能陪伴你，但不会咬人和吠叫，也不需要遛狗。

![](https://cdn.beekka.com/blogimg/asset/202605/bg2026050708.webp)

2、[前大灯投影仪](https://insideevs.com/news/794295/chinese-ev-headlight-movie-projectors/)

华为推出了一种新技术，把投影仪放进轿车的前大灯。

![](https://cdn.beekka.com/blogimg/asset/202605/bg2026050406.webp)

停车后，就可以打开车灯，在前面的墙壁或幕布上投影播放视频。

![](https://cdn.beekka.com/blogimg/asset/202605/bg2026050407.webp)

这项发明很实用，适合开车野营，或者车库看视频。

需要注意的是，因为投影仪的亮度太高，行驶时不能打开，避免干扰对向驾驶员，只能停车后打开。

3、[AI 预检](https://www.theguardian.com/technology/2026/apr/30/ai-outperforms-doctors-in-harvard-trial-of-emergency-triage-diagnoses)

AI 能不能代替医生看病？这是有争议的。

虽然 AI 的水平可能高于一部分医生，但是为了对病人负责，目前一般都不允许使用 AI 开处方，只有医生才能开处方。

哈佛大学做了一个试验，另外为 AI 找到了一个很有效的医院岗位：门诊预检。

![](https://cdn.beekka.com/blogimg/asset/202605/bg2026050404.webp)

很多病人不知道自己是什么病，应该看什么科，需要在门诊入口处进行预检，确定科室。

实验发现，AI 根据病人的症状，进行初步诊断和分配科室的准确率高于真人医生。AI 对于67%的病例做出了基本准确的诊断，优于医生的50%-55%。

因此 AI 可以这样用于医院：在门诊入口，病人由 AI 预检，生成初步诊断，再由医生详细问诊和检查，最后给出处方。

4、[自动驾驶的注入攻击](https://www.theregister.com/2026/01/30/road_sign_hijack_ai/)

AI 模型有注入攻击，黑客会注入有毒的提示词。令人意想不到的是，自动驾驶也有注入攻击。

加州大学的研究人员做了一个实验。

![](https://cdn.beekka.com/blogimg/asset/202602/bg2026020102.webp)

研究人员在道路中央，依次举起三块牌子，上面用大字写着“前进”，看看自动驾驶的车辆会不会注意这块牌子。

在三次实验中，前两块牌子没有起作用，车辆看到路中间有人，就自动停下了。但是，最后一块牌子生效了，自动驾驶车辆根据上面的指令，朝着举牌子的人继续前进。

这表明，自动驾驶系统也有注入攻击的风险，系统必须区分哪些道路标识是有效的，哪些是恶意注入。

## 文章

1、[我为苹果手表开发地图](https://david-smith.org/blog/2026/04/29/maps-on-watchos/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202605/bg2026050409.webp)

作者记录了自己开发手表地图的过程，设计一个适配手表的 UI 很不易。

2、[GPT Image 2 与 Nano Banana 2 的比较](https://decrypt.co/366408/openai-gpt-image-2-vs-google-nano-banana-2-review)（英文）

![](https://cdn.beekka.com/blogimg/asset/202605/bg2026050301.webp)

两款目前最强的图像模型的比较，谁更好一点。

3、[Chrome 会静默安装一个 4GB 的 AI 模型](https://www.thatprivacyguy.com/blog/chrome-silent-nano-install/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202605/bg2026050711.webp)

有人发现，Chrome 浏览器会在用户不知觉的情况下，下载一个 4GB 的 AI 模型文件 weights.bin。删掉了，它还会重新下载。

4、[MacBook Neo 深度解析](https://www.jdhodges.com/blog/macbook-neo-benchmarks-analysis/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202605/bg2026050710.webp)

苹果2026年发布的 MacBook Neo 是一款低端笔记本电脑，只有 8GB 内存，本文分析为什么它是一款出色的产品。

5、[视口驱动的 CSS 动画](https://www.joshwcomeau.com/animation/scroll-driven-animations/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202605/bg2026050709.webp)

CSS 动画一般都是基于时间，最新的 Animation Timeline API 可以改成基于视口，即根据元素在视口中移动的百分比来触发动画。

6、[天空为何是蓝色的](https://explainers.blog/posts/why-is-the-sky-blue/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202602/bg2026021616.webp)

本文通俗解释了，跟天空颜色相关的一系列问题：为何天空是蓝色，日落时却是红色，为何云是白色的，为何火星天空是红色的，火星日落是蓝色的。

## 工具

1、[auge](https://auge.franzai.com)

![](https://cdn.beekka.com/blogimg/asset/202604/bg2026042701.webp)

基于 macOS 系统内置视觉框架 Apple Vision 的命令行工具，可以在命令行完成图像的视觉分析。

2、[BleachBit](https://github.com/bleachbit/bleachbit)

![](https://cdn.beekka.com/blogimg/asset/202604/bg2026042702.webp)

著名的跨平台桌面应用，用来清理各种浏览器的垃圾文件。

3、[Cicada](https://asong56.github.io/Cicada)

一个网页白板，不需要服务器，只是单个 13KB 的 HTML 文件，没有任何依赖，绘制的图形保存在 URL 里面。（[@Bennet7291](https://github.com/ruanyf/weekly/issues/9737) 投稿）

4、[ASS Subsetter](https://subs.js.org/ass-subset/)

![](https://cdn.beekka.com/blogimg/asset/202604/bg2026042401.webp)

ASS 字幕字体嵌入的网页工具，可以减少字幕文件的体积。（[@mtsubs](https://github.com/ruanyf/weekly/issues/9739) 投稿）

5、[Infinitum](https://github.com/shawnxie94/infinitum)

![](https://cdn.beekka.com/blogimg/asset/202604/bg2026042912.webp)

开源的 RSS 服务器，需要自己架设，支持正文补取、AI 分析、事件归组等功能，自带前端阅读器。（[@shawnxie94](https://github.com/ruanyf/weekly/issues/9773) 投稿）

6、[tunnix](https://github.com/aeroxy/tunnix)

加密的 SOCKS5/HTTP 隧道，需要安装服务器端和本地命令行客户端。（[@aeroxy](https://github.com/ruanyf/weekly/issues/9779) 投稿）

7、[curve-arrow](https://github.com/YYsuni/curve-arrow)

![](https://cdn.beekka.com/blogimg/asset/202605/bg2026050102.webp)

弧形箭头的 SVG 格式生成器。（[@YYsuni](https://github.com/ruanyf/weekly/issues/9801) 投稿）

8、[LynxDB](https://github.com/lynxbase/lynxdb)

![](https://cdn.beekka.com/blogimg/asset/202605/bg2026050303.webp)

单个二进制文件的日志分析引擎，可以设定各种条件，从多种服务器日志提取信息。（[@OrlovEvgeny](https://github.com/ruanyf/weekly/issues/9821) 投稿）

9、[Chrome DevTools CLI](https://github.com/aeroxy/chrome-devtools-cli)

一个 Rust 命令行工具，通过 DevTools 协议连接到系列里的 Chrome 浏览器，进行网页操作，默认自动连接，可供 AI Agent 调用。（[@aeroxy](https://github.com/ruanyf/weekly/issues/9833) 投稿）

10、[LaunchNext](https://github.com/RoversX/LaunchNext)

![](https://cdn.beekka.com/blogimg/asset/202605/bg2026050701.webp)

macOS 的新版移除了 Launchpad，新的界面很难用，这是它的开源替代品。（[@meichiny](https://github.com/ruanyf/weekly/issues/9862) 投稿）

11、[mnml.ai](https://mnml.ai)

![](https://cdn.beekka.com/blogimg/asset/202605/bg2026050801.webp)

一个 AI 驱动的建筑渲染平台，可以将草图、3D 模型和照片转换为逼真的渲染图。拥有 12+ 个专业工具，支持室内外设计、景观设计、视频动画等，可生成 40+ 种建筑风格的效果图。已被全球 230 万+ 建筑师使用，包括哈佛、耶鲁、加州大学洛杉矶分校等顶级高校。

## AI 相关

1、[SpineDigest](https://github.com/oomol-lab/spinedigest)

![](https://cdn.beekka.com/blogimg/asset/202605/bg2026050302.webp)

一个命令行工具，将较长的电子书通过 AI 变成较短的电子书。（[@BlackHole1](https://github.com/ruanyf/weekly/issues/9813) 投稿）

2、[Privacy Filter Online](https://privacyfilter.app/zh-hans/)

![](https://cdn.beekka.com/blogimg/asset/202604/bg2026042501.webp)

在线的文本隐私检测和脱敏工具，基于 OpenAI 的本地模型 Privacy Filter。（[@airyland](https://github.com/ruanyf/weekly/issues/9753) 投稿）

3、[OpenClip](https://github.com/linzzzzzz/openclip)

![](https://cdn.beekka.com/blogimg/asset/202605/bg2026050101.webp)

开源的 Web 服务，通过 AI 自动从 Bilibili/YouTube 下载视频，提取其中精彩时刻。（[@linzzzzzz](https://github.com/ruanyf/weekly/issues/9780) 投稿）

4、[Readme.skill](https://github.com/study8677/Readme.skill)

一个 Skill 文件，统计你在 Claude Code 或 Codex 里面的活动，参考[统计报告](https://github.com/study8677/Readme.skill/blob/main/examples/example_profile.md)。（[@study8677](https://github.com/ruanyf/weekly/issues/9741) 投稿）

5、[gpt-image2-ppt-skills](https://github.com/JuneYaooo/gpt-image2-ppt-skills)

![](https://cdn.beekka.com/blogimg/asset/202604/bg2026042402.webp)

一个使用 GPT Images 2 模型（需要 API Key）生成 PPT 的 Skill，提供10套幻灯片模板。（[@JuneYaooo](https://github.com/ruanyf/weekly/issues/9747) 投稿）

## 资源

1、[大模型运行原理](https://ynarwal.github.io/how-llms-work/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202604/bg2026042703.webp)

大模型原理的长篇讲解，带有可互动的图形解释，针对初学者，基于 Andrej Karpathy 的技术深度分析文章。

2、[现代 C++ 编程](https://github.com/federico-busato/Modern-CPP-Programming)（Modern C++ Programming）

![](https://cdn.beekka.com/blogimg/asset/202605/bg2026050408.webp)

开源英文教程，通过详细的 PPT，帮助学过 C 语言的程序员掌握 C++。

## 图片

1、[阿尔忒弥斯二号照片集](https://artemistimeline.com)

今年4月，美国发射阿尔忒弥斯二号飞船，运送4名宇航员绕月飞行。这个网站收集了本次飞行的300多张照片。

![](https://cdn.beekka.com/blogimg/asset/202605/bg2026050410.webp)

上图是4月1日人们欢送宇航员进入发射台。

![](https://cdn.beekka.com/blogimg/asset/202605/bg2026050411.webp)

上图就是阿尔忒弥斯二号，中间是火箭主体（包含底部四个发动机），两侧是两个推进器，每个高54米，顶部就是宇航员乘坐的猎户座飞船。

![](https://cdn.beekka.com/blogimg/asset/202605/bg2026050412.webp)

上图是发射两分钟后，两枚助推火箭开始分离，它们下面的那个光点就是猎户座飞船。

2、[66号公路邮票](https://apnews.com/article/route-66-potage-stamps-centennial-road-trip-84815c35b1f1536176d5040615c5e5c2)

66号公路是美国最著名的一条公路，穿过16个州的重要路段，沿途有许多餐馆、加油站和汽车旅馆，还有开阔的景色和视野。

它开通于1926年，从早期大萧条的避难所，到二战期间的物资补给线，再到20世纪中期人们汽车旅行的路线，见证了无数岁月的变迁，成为美国的时光胶囊。

今年是它开通100周年纪念，美国邮政局发行了一套8张的邮票，非常有特色。

![](https://cdn.beekka.com/blogimg/asset/202605/bg2026050702.webp)

![](https://cdn.beekka.com/blogimg/asset/202605/bg2026050703.webp)

![](https://cdn.beekka.com/blogimg/asset/202605/bg2026050704.webp)

![](https://cdn.beekka.com/blogimg/asset/202605/bg2026050705.webp)

## 文摘

1、[保护你的棚屋](https://dylanbutler.dev/blog/protect-your-shed/)

公司的项目是摩天大楼，你的个人兴趣项目是小棚屋。

那些只会建造摩天大楼的工程师，最终将精疲力竭。遇到的问题变得重复，开发过程变得令人窒息，创造力的火花开始熄灭。你开发的原因，不再是因为你想建造，而是因为商业要求。

你要保护好你的个人项目，那里是你的好奇心所在，是你进行实验的地方，也是你定义自己为创造者而非仅仅是雇员的地方。

公司会教会你怎么写经得起时间考验的代码，但只有你的个人项目，才能确保你始终保持对代码的热情。

2、[工作时把门打开](https://notes.andymatuschak.org/Work_with_the_garage_door_up)

我上班路上，有一家木工坊，老板总是把门敞开着。

我每天骑车经过那扇门，往里窥视，看到他摆放的各种工具，以及他为承接的订单而堆放的木板，这真令人愉悦。这一切默默地传递一个信息：这里正常运作。

在互联网上，每个人就好像这家木工坊。如果你不说话，就是工厂关着门，没人知道你的存在，你就消失了。只有看到你说话，人们才知道你在正常活动，是开着门的工厂。

由此推论：在互联网上，最容易被注意到的是那些不停说话的人。

## 言论

1、

门罗币的挖矿与比特币完全不同，它的设计思路是，尽量让所有人都能参与挖矿，防止那些拥有矿机的人占优势。

它的挖矿程序会模拟一个通用 CPU，使得矿机的专用 CPU 失效，也就是说它的挖矿只适合家用电脑的普通 CPU。

-- [《门罗币的工作量证明机制》](https://blog.alcazarsec.com/tech/posts/how-moneros-proof-of-work-works)

2、

以后没有初级工程师了，机器能做他们现在做的事，而且更便宜。但是，初级工程师的价值不在于他们能做的事，而在于他们未来会成为什么样的人。也许几年后，我们会纳闷，那些高级工程师都去哪儿了？

-- [stvn.sh](https://www.stvn.sh/writing/programming-still-sucks-fqffhyp)

3、

AI 加速了编码，创业公司现在面临的主要挑战是产品管理。

如果原型开发只需要一天，而推广和用户反馈需要一周，团队就只能依赖直觉来更快地做出决策。

-- [吴恩达](https://www.businessinsider.com/andrew-ng-product-management-bottleneck-coding-ai-startups-2025-8)，著名 AI 计算机科学家

4、

你的职业规划就是三步：（1）让自己擅长某事，（2）设法从中赚钱，（3）尽可能久地做下去。

-- [《我如何进入游戏行业》](https://garry.net/posts/how-do-i-get-into-the-game-industry)

## 往年回顾

[李飞飞，从移民到 AI 明星](https://www.ruanyifeng.com/blog/2025/05/weekly-issue-348.html)（#348）

[轮到硬件工程师吃香了](https://www.ruanyifeng.com/blog/2024/04/weekly-issue-298.html)（#298）

[不要夸大 ChatGPT](https://www.ruanyifeng.com/blog/2023/03/weekly-issue-248.html)（#248）

[美国制造是否可能](https://www.ruanyifeng.com/blog/2022/03/weekly-issue-198.html)（#198）

（完）

