# 科技爱好者周刊（第 402 期）：我在智念 AI 的日子（小说）

这里记录每周值得分享的科技内容，周五发布。

本杂志[开源](https://github.com/ruanyf/weekly)，欢迎[投稿](https://github.com/ruanyf/weekly/issues)。另有[《谁在招人》](https://github.com/ruanyf/weekly/issues/10517)服务，发布程序员招聘信息。合作请[邮件联系](mailto:yifeng.ruan@gmail.com)（yifeng.ruan@gmail.com）。

## 封面图

![](https://cdn.beekka.com/blogimg/asset/202607/bg2026070202.webp)

内蒙古乌兰察布的“草原方舟”，内部是一个文化空间，举办艺术展览、文化交流、商业活动等。（[via](https://www.gooood.cn/prairie-ark-and-nomads-beacon-tower-by-buzz-buro-ziyu-zhuang.htm)）

## 我在智念 AI 的日子（小说）

下面是一篇老外写的[超短篇小说](https://nlkw.de/en/blog/getting-fried-part-1-cogentiv/)，也可能是 AI 写的，我不确定，但觉得很有趣，分享给大家。

为了易读，我做了一些修改，把内容“中国化”了。

---

1、

十四个月之前，我加入了一家叫做“智念 AI”的公司。

入职不久，公司进行新员工培训。首席执行官对我们说，公司的使命是为用户打造 AI 时代的个人品牌，帮助用户重新建立“基于 AI 的认知”。

现在想起来，虽然我已经在这家公司呆了14个月，依然无法解释这段话的含义。

2、

首席执行官还向我们展示了一幅画。那是一个漫步者走在一片云雾里，向着远方凝视，远方有一个数据分析软件 Grafana 的仪表板。不用说，这幅画也是 AI 生成的。首席执行官解释说，我们这些人就是那个漫游者，那片云雾就是云端，里面有各种传统的 SaaS 产品。

3、

进入公司办公区，你首先会注意到墙上有一台65英寸电视机，实时显示 Token 消耗排行榜。

目前，排名第一的是老张。他每周的 Token 费用，简直堪比一个太平洋小岛的 GDP。

我看过老张的电脑屏幕，那是一个 Tmux 软件分隔出的窗格布局，里面同时运行着六个编程代理。他用《西游记》地名为这些代理起了别名，因为他在 GitHub 上看到有人这么做，很喜欢这种做法：盘丝洞表示前端，黑风山表示后端，火云洞是数据库，其他地名还有流沙河、车迟国和无底洞。

4、

有一次，我晚上加班回家，发现钥匙忘记在公司，就回去取。公司已经没人了，但是我隐约听到洗手间有人在哭。

走近了，发现那是老张。我猜想，他是对着“聆聆”哭，“聆聆”是公司用于员工心理健康的机器人。

我在洗手间门口，听到老张哽咽着说：“我不知道自己还算不算一个人。”聆聆用一种绝不会让你感到负担的温柔语气说：“老张，你敢于面对自己的问题，已经很勇敢了。单单是注意到这一点，就已经做得比大部分人出色了。” 老张说：“谢谢你，你是唯一一个真正倾听我的人。” 聆聆说：“我知道。”

5、

每周一是公司的例会，也是需求评审会，明确一下本周要做的事情。每个人有三分钟，展示自己的工作安排，只用幻灯片，不放代码。

每个人的幻灯片都精美绝伦，不用说都是 AI 生成的。

用户增长部门的周蔚蓝，展示了一张漏斗图，里面的曲线正在快速上升。

下面有人问她 y 轴代表什么，她盯着幻灯片看了足足十二秒才说：“用户价值。” 那人又问：“用户价值的单位是什么？” 她犹豫了一会说：“图是 Gemini 做的。”房间里的人互相看看，都点了点头，就算通过了。

平台部门的小高展示了一张架构图，密密麻麻有很多箭头，简直就是分布式系统教科书里的插图。有人问他中间的方框有什么用，他回答“那是编排器”。别人让他讲得详细一点，小高仔细端详着幻灯片，仿佛第一次见到它。最后，他吞吞吐吐地说“编排器的作用就是管理其他的方框。”这时，首席执行官站起来说“可以了”，我们鼓掌就散会了。

6、

周二，我临时被分配了一个项目需求。我的经理在9点14分发给我一个工单。9点19分，我把工单粘贴到 Claude 里，看着它生成了一份流畅的文档。9点47分，我提交了第一个 PR。10点02分，PR 被合并了。

我其实不太确定这个 PR 到底做了什么，我装模作样地仔细阅读它，还留了两条评论，但是这就像配音演员跟着音轨对口型一样，他们其实不知道自己在说什么。

我在内网聊天软件里说“PR 已合并”，后面还加了一个小火箭表情符号，那是约定的完成标志。老张回复了一团火焰的表情符号，他已经连续11天没有说过任何非表情符号的话了。

7、

周三下午，隔壁团队的李静给我发了一条消息。“嘿，”她写道（这种看似轻松的打招呼，往往表示后面要谈一些不轻松的事情），“有个问题想问你，关于你昨天合并的代码。”

我盯着这条消息，我昨天的确合并了代码，但我完全不记得合并的东西是什么了。

根据李静的梳理，我才知道，昨天我合并的是在老张凌晨四点发布的东西之上加了一个通知服务。老张的东西是他的编程代理写的，他根本没看，系统显示，他在4:17点了一个赞，那是代码生成完毕、确认可以运行的时间。而老张的东西本身又来自首席执行官向 AI 口述后生成的一份产品规范，他把这个规范转发给产品经理，并附言“请执行”。

代码合并的后果就是，测试环境的每个用户一夜之间收到了几十封电子邮件，每封邮件的格式和内容都很没问题，但是通知的内容却是尚未发生的事件。

这个链条上的三个人——产品经理、老张、我——都不能解释为何会变成这样。事实就是，代码零审查，每个人都相信别人会检查，但根本没人检查过。

8、

周四，我请了病假，坐在阳台上，一边喝着咖啡，一边尝试着，不借助任何外力，独立思考一个想法，完全用自己脑海中出现的原创句子把它表达出来。

结果，我做不到。

并非我脑子里空空如也，我的脑子其实很满，甚至可以说太满了，但那都是准备提交给机器的一些下意识的念头。真正属于我的东西，我还在摸索着寻找它，就像你在曾经居住过但已搬走的公寓里摸索着寻找电灯开关一样。

我努力回想上次不用 AI 生成东西是什么时候，大概六个月前吧。

我还想了一下周末的安排。我打开了四个浏览器标签页，其中三个是 AI 的对话页，另一个是给我妹妹的生日祝福，写了一半，这种内容最好不要让 AI 写，但我又觉得自己根本想不出来应该怎么写。

9、

周五，我又回去上班了。电脑屏幕显示，老张本周蝉联 Token 排行榜榜首，这是他连续第九周蝉联了。

首席执行官从我桌前走过，拍了拍我的肩膀，“又回来了，”他说，“你的 Token 消耗量怎么样？”

“非常大，”我说。

## 科技动态

1、[驯化浣熊](https://www.scientificamerican.com/article/raccoons-are-showing-early-signs-of-domestication/)

人类已经有几千年没有驯化新的动物了，现在可能出现了一种新的驯化动物，那就是浣熊。

![](https://cdn.beekka.com/blogimg/asset/202511/bg2025111804.webp)

一项研究发现，生活在美国城市里面、依靠人类垃圾填饱肚子的浣熊，生理性格特征发生了一些变化。

它的脸变小了，鼻子变短、也不再害怕人，表明正处在驯化的早期阶段。

查尔斯·达尔文在19世纪发现，驯化的动物会出现一些明显特点，比如脸短、大脑缩小、耳朵下垂、皮毛上有白色斑块，这些被称为驯化综合征。

但是，浣熊好奇心极强，会持续抓咬“拆家”，喜欢翻垃圾桶，也没有服从性，而且是夜行性动物，实在不适合作为宠物，很难想象驯化它有什么用。

2、[远程工作聚会](https://www.sfgate.com/travel/article/remote-workers-beach-22322521.php)

本周，美国圣地亚哥市的海滩上，进行了一起远程工作聚会。

![](https://cdn.beekka.com/blogimg/asset/202607/bg2026070203.webp)

一百名身穿泳装的远程工作者，带着笔记本电脑来到沙滩上办公，他们的口号是“让远程工作更像远程工作”（make remote work remote）。

![](https://cdn.beekka.com/blogimg/asset/202607/bg2026070206.webp)

活动组织者说，越来越多的雇主要求远程工作的员工重返办公室，所以有必要让“远程工作”回归真正的远程办公的本质。

他特地把自己的办公桌带到了沙滩，并在网上呼吁支持者加入他。

![](https://cdn.beekka.com/blogimg/asset/202607/bg2026070204.webp)

远程办公完全可以在风景区进行，如果有更多的人参与，那么你还能拥有社交互动，以及办公室的那种茶水间闲聊式的人脉拓展。

![](https://cdn.beekka.com/blogimg/asset/202607/bg2026070205.webp)

他打算，每月组织一次这样的活动，让远程工作者既能远程，又能社交。

![](https://cdn.beekka.com/blogimg/asset/202607/bg2026070207.webp)

3、[AI 花朵](https://www.404media.co/scammers-sell-seeds-for-exotic-ai-generated-flowers-that-dont-exist/)

欧美电商网站上，出现了一些种子骗子，使用 AI 生成的图片，兜售根本不存在的植物种子。

![](https://cdn.beekka.com/blogimg/asset/202607/bg2026070209.webp)

他们贴出的花朵图片实在过于夸张，一眼就能看出是 AI 生成的。

![](https://cdn.beekka.com/blogimg/asset/202607/bg2026070210.webp)

![](https://cdn.beekka.com/blogimg/asset/202607/bg2026070211.webp)

但是，还有一些图片就不那么明显了。

![](https://cdn.beekka.com/blogimg/asset/202607/bg2026070212.webp)

这就是 AI 时代的一个问题，商品的照片和视频十有八九是 AI 生成的，让人难以分辨。

4、**一句话新闻**

（1）三大内存厂商之一的美光[宣布](https://www.theregister.com/systems/2026/06/25/micron-locks-in-historically-high-memory-prices-for-five-years/5261854)，跟16个大客户签订了未来五年的供货协议。客户承诺，会以不低于当前价格购买内存。

![](https://cdn.beekka.com/blogimg/asset/202606/bg2026062701.webp)

这就是说，这些客户相信，2031年之前内存都不会跌价。天哪，新技术不是应该降低成本吗，可是 AI 好像让每样东西都涨价了。

（2）美国加州通过[新法律](https://arstechnica.com/gadgets/2026/06/streaming-services-obnoxiously-loud-ads-become-illegal-on-july-1-in-california/)，规定视频平台的广告音量，不得超过用户所观看的内容音量。

（3）[特斯拉](https://wallstreetcn.com/articles/3776103)通知员工，每个人每周的 AI 支出上限为200美元，但不包括自家的 xAI。

如需超过限额，需要获得批准。这说明美国大厂也受不了 AI 的巨额支出了。

## 文章

1、[设计模式糟透了](https://luminousmen.com/post/design-patterns-suck/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202607/bg2026070301.webp)

本文认为，设计模式（design pattern）的作用被夸大了，它只适用于 Java 那样僵化、冗长的语言。

对于其他更灵活的语言（比如 Python），语言的内置功能完全可以取代设计模式，而且更简洁易用。

2、[如何设计良好的 API](https://www.seangoedecke.com/good-api-design/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202508/bg2025083008.webp)

作者总结自己设计和维护 RESTful API 的经验。

3、[为什么中国没有在喷气式发动机取得突破](https://aakash.substack.com/p/why-jet-engines-arent-made-in-china)（英文）

![](https://cdn.beekka.com/blogimg/asset/202607/bg2026070208.webp)

中国制造业在很多领域，都取得国际领先，但在喷气式发动机领域却没有突破。作者认为有几个原因，使得中国制造的优势发挥不出来。

首先，喷气式发动机是资本密集型产品，不需要低成本劳动力；其次，它没有低端市场，新进入者必须与现有的发动机巨头直接竞争；再次，这个行业利润很低，获利周期非常长；最后是监管严格。

4、[AsciiDoc 语法简介](https://www.git-tower.com/blog/asciidoc-quick-guide/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202502/bg2025020607.webp)

AsciiDoc 类似于 Markdown 语法，但是功能更强，适合用来撰写多篇文档组成的书籍。本文是对它的语法的简单介绍。

5、[平滑（ease）函数的写法](https://www.davepagurek.com/blog/easing-functions/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202507/bg2025071710.webp)

动画代码有一个平滑函数，用来模拟运动的加速/减速，本文介绍这个函数的实现。

## 工具

1、[Deno Desktop](https://deno.com/blog/v2.9#deno-desktop)

![](https://cdn.beekka.com/blogimg/asset/202606/bg2026062702.webp)

Deno 宣布推出 Deno Desktop，可以直接将 Deno 网页应用，打包成桌面的二进制程序，UI 在 Webview 中运行，后端是一个 Deno 运行时。

这就是说，现在除了 Electron 和 Tauri，又多了一种制作跨平台桌面应用的方法。

2、[playCaptcha](https://github.com/mortspace/playcaptcha)

![](https://cdn.beekka.com/blogimg/asset/202606/bg2026061601.webp)

一个抓娃娃机的 Captcha 库，用来识别访问者是否机器人。

3、[Beer CSS](https://www.beercss.com/)

![](https://cdn.beekka.com/blogimg/asset/202606/bg2026062901.webp)

一个 CSS 组件库，将材质化设计做成易用的 CSS 组件。

4、[Image Toolbox](https://github.com/T8RIN/ImageToolbox/)

![](https://cdn.beekka.com/blogimg/asset/202606/bg2026062003.webp)

开源的安卓图像编辑 App，让你在手机上完成各种图像编辑。

5、[EdgeMirror](https://github.com/tianrking/EdgeMirror)

![](https://cdn.beekka.com/blogimg/asset/202606/bg2026062703.webp)

面向开发者的软件源 CDN 边缘镜像网关，帮助下载各种源站软件包，支持 PyPI、Hugging Face、GitHub、Docker、Go 等。（[@tianrking](https://github.com/ruanyf/weekly/issues/10426) 投稿）

6、[Douzy](https://github.com/jiji262/douyin-downloader)

![](https://cdn.beekka.com/blogimg/asset/202606/bg2026062704.webp)

开源桌面应用，批量下载抖音视频，支持 Windows 和 Mac。（[@jiji262](https://github.com/ruanyf/weekly/issues/10423) 投稿）

7、[涟漪鱼缸](https://seanwong17.github.io/RippleAquarium/)

![](https://cdn.beekka.com/blogimg/asset/202606/bg2026062706.webp)

纯前端 WebGL 水族箱，鱼群会聚集、转向、互相避让，并有实时水面涟漪，[代码开源](https://github.com/SeanWong17/RippleAquarium)。（[@SeanWong17](https://github.com/ruanyf/weekly/issues/10471) 投稿）

8、[File Viewer](https://github.com/flyfish-dev/file-viewer)

![](https://cdn.beekka.com/blogimg/asset/202606/bg2026062903.webp)

前端的文件预览组件，无需服务端转码，在网页预览各种文件内容，支持200多种文件扩展名。（[@wybaby168](https://github.com/ruanyf/weekly/issues/10474) 投稿）

9、[podpull](https://github.com/xiaoleiy/podpull)

![](https://cdn.beekka.com/blogimg/asset/202607/bg2026070201.webp)

一个命令行工具，下载播客的音频文件。（[@xiaoleiy](https://github.com/ruanyf/weekly/issues/10526) 投稿）

## AI 相关

1、[WhisperSubTranslate](https://github.com/Blue-B/WhisperSubTranslate)

![](https://cdn.beekka.com/blogimg/asset/202606/bg2026062705.webp)

开源的 Windows 桌面应用，根据视频的语音生成 SRT 字幕，并把字幕翻译成其他语言。它可以使用本地 Hy-MT2 模型，不需要 API key。（[@Blue-B](https://github.com/ruanyf/weekly/issues/10467) 投稿）

2、[10xagent](https://github.com/cosin2077/10xagent)

演示使用10行 JS 代码，通过自循环，实现一个最简单的 AI 编程代理。（[@cosin2077](https://github.com/ruanyf/weekly/issues/10486) 投稿）

3、[AI 星座](https://github.com/baturyilmaz/what-if-ai-agents-had-zodiac-personalities)

一个玩笑项目，让 AI 模拟12星座人格，然后看看不同星座对同一个事件如何反应。

## 资源

1、[Jest/Vitest 测试入门教程](https://howtotestfrontend.com/courses/jest-vitest-fundamentals)（英文）

![](https://cdn.beekka.com/blogimg/asset/202606/bg2026062902.webp)

网页互动式课程，通过实例学习 Jest 或 Vitest 进行测试的基础知识。

2、[C 语言小书](https://little-book-of.github.io/c/books/en-US/book.html)

![](https://cdn.beekka.com/blogimg/asset/202603/bg2026032701.webp)

一本面向初学者的 C 语言小教程。

## 图片

1、[键盘的按键排列](https://www.xda-developers.com/staggered-keyboard-layouts-have-overstayed-their-welcome/)

键盘的按键排列有两种风格。

一种是交错式，每一行的按键都与上一行错开，手指必须左右移动，才能按到上一行同一位置的按键。

![](https://cdn.beekka.com/blogimg/asset/202505/bg2025052701.webp)

另一种是正交式，每一行按键都是对齐的，手指只要直接上移，就能按到上一行同一位置的按键。

![](https://cdn.beekka.com/blogimg/asset/202505/bg2025052702.webp)

目前，大部分键盘都是交错式，因为这是历史遗留的模式。以前的英文打字机就是交错式键盘，为了防止键杆卡住。

但是，也有人认为，正交式键盘的效率更高，因为手指不用左右移动。

大家喜欢哪一种键盘？

## 文摘

1、[当你对公司产生怀疑](https://charity.wtf/2022/01/29/how-can-you-tell-if-the-company-youre-interviewing-with-is-rotten-on-the-inside/)

你加入了一家新公司，过了两三周，还是没有找到感觉，总觉得哪里不对劲。

有一些迹象，让你怀疑，自己选择进入这家公司，是否犯了一个错误：（1）同事们在公司里从不畅所欲言；（2）公司对于批评和负面反馈从不理会；（3）公司对待竞争对手，想尽办法打击。

这时，你可以问自己八个问题。

- 工作时，你感到快乐吗？
- 你得到了很好的补偿吗？
- 你的时间在这个地方产生价值吗？
- 你还在每天学习新事物并提高技能吗？
- 公司是否仍处于增长轨道上？
- 你相信你的领导和团队吗？
- 你是否仍然有使命感？
- 你觉得自己的工作是否会让世界变得更美好？

如果答案都是否定的，我的建议是，不妨现在就离职吧。相信自己的直觉，没必要在这里耗费一年的生命再离职。

如果你只在这家公司待了几周，早点离职就更好了，你的简历上可以完全省略这家公司。

雇主都有一种感觉，觉得他们理所当然对雇员拥有所有权力，可以指手画脚。不，他们错了。公司雇用你，并不是帮了你一个忙，而是你帮了他们一个忙，把你的创造力、劳动、一天的三分之一时间给了他们。

他们值得拥有这些吗？他们的成功会让世界变得更美好吗？如果没有，请停止用你的工作支持他们，并将你的力量给予值得拥有你的付出的其它公司。

## 言论

1、

跟大多数人想的不一样，互联网最重要的地方，不是那些公开的网站或社交平台，而私密的群聊。

无数最具影响力、最重要的事件，是在 Whatsapp、Telegram、Signal、Discord 的那些仅限邀请的小型群组里决定的。

-- [《私密群聊统治世界》](https://sriramk.com/group-chats-rule-the-world)

2、

大多数争论都是与自我意识有关，而非理念。

--[《我为什么不再与人争论》](https://wangcong.org/2026-06-30-why-i-stopped-arguing-with-people.html)

3、

大模型可以当做压缩工具，记住单个文件并预测下一个字节。

我训练了一个 Transformer 模型，可以把 100MB 的 CSV 文件压缩为 7MB。缺点是非常耗时，在我的家用电脑上，训练大约需要20-30分钟，压缩和解压缩各需要45分钟。

-- [Hacker News 读者](https://news.ycombinator.com/item?id=48644463)

4、

缓慢思考，快速行动，这就是成功的秘诀。

（Think slow, act fast: That’s the secret of success.）

-- [《如何完成大型项目》](https://www.goodreads.com/work/quotes/96704571-how-big-things-get-done-the-surprising-factors-that-determine-the-fate)

## 往年回顾

[两本《芯片战争》](https://www.ruanyifeng.com/blog/2025/07/weekly-issue-355.html)（#355）

[随机数，这是一个问题](https://www.ruanyifeng.com/blog/2024/06/weekly-issue-305.html)（#305）

[对待 AI 的正确态度](https://www.ruanyifeng.com/blog/2023/05/weekly-issue-255.html)（#255）

[互联网风口过去了吗？](https://www.ruanyifeng.com/blog/2022/05/weekly-issue-205.html)（#205）

（完）

