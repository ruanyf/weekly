# 科技爱好者周刊（第 333 期）：一切都要支付两次

这里记录每周值得分享的科技内容，周五发布。

本杂志[开源](https://github.com/ruanyf/weekly)，欢迎[投稿](https://github.com/ruanyf/weekly/issues)。另有[《谁在招人》](https://github.com/ruanyf/weekly/issues/5830)服务，发布程序员招聘信息。合作请[邮件联系](mailto:yifeng.ruan@gmail.com)（yifeng.ruan@gmail.com）。

## 封面图

![](https://cdn.beekka.com/blogimg/asset/202501/bg2025010604.webp)

42层的深圳金融科技研究院大楼，去年6月封顶了，采用了不规则外形的设计。（[via](https://www.archiposition.com/items/20241213064612)）

## 一切都要支付两次

有一句古语“[书非借不能读也](https://baike.baidu.com/item/黄生借书说/11002602)”，大家可能都听过。

它的意思是，很多人买了书却不读，觉得不着急，拥有书就相当于已经开始学了，后面就慢慢来吧，反而是借来的书有急迫感会抓紧读完。

![](https://cdn.beekka.com/blogimg/asset/202501/bg2025010101.webp)

这种事情很多。网址保存成书签，就扔在那里了，再也不去看它了。

我最近看到一篇[老外的文章](https://www.raptitude.com/2022/01/everything-must-be-paid-for-twice/)，他给这种现象起了一个全新的名字，让人觉得很贴切。老外的概念化能力真是强。

他提出，人们买书却不读，是因为没有意识到**每样东西都需要两次支付**。

![](https://cdn.beekka.com/blogimg/asset/202501/bg2025010102.webp)

第一次是货币支付，你付出货币，得到自己想要的东西，比如一本书，一个 App，一辆自行车，一颗卷心菜等等。

但是，你还必须支付第二次，才能真正消费这个东西。这次你付出的是你的时间和努力，来获得它的收益。

第二次支付可能比第一次支付贵得多。假设一本书的第一次支付是20元，第二次支付可能就是10小时的阅读时间。只有支付第二次，你才算真正消费了这本书。如果没有第二次支付，第一次支付就意义不大了，跟把钱扔进垃圾箱差不多。

生活中，到处都是两次支付的例子。购买 App 后，你必须学习如何使用，并且经常使用，才能得到它的价值。购买自行车后，你必须忍受痛苦的初学者阶段，然后才能上街骑行。购买蔬菜后，必须切碎、蒸熟并咀嚼，然后才能为你提供营养。

**我们经常犯的一个错误，就是只完成了第一次支付，没有第二次支付**，比如未使用的会员资格，未读的书籍，未玩的游戏，未编织的毛线。由于没有第二次支付，所以你并没有真正使用，第一次支付的钱实际上扔进了垃圾桶。

这种行为方式的深层次原因，就是**现代社会太强调消费**，过于看重第一次支付的经济价值，而忽视第二次支付的实际结果。人们受到消费主义的影响，以为支付了商品价格，就完成了一次消费。

合理的消费方式应该是，**只有当你确定会有第二次支付，才进行第一次支付**。这样就可以避免许许多多的浪费。

新的一年，大家购买商品时，可以先问问自己，你会不会第二次支付，即会不会为它付出时间和努力？只有确信自己会，再掏钱购买它。

有一种商品，天然支持先进行第二次支付，再进行第一次支付，那就是软件。

软件不同于实体商品，边际成本接近零，又是长期消费，完全可以先让用户免费用（试用版或者试用期），等他用习惯了，再向他收费。

很多软件就是这样做的，这大概就是为什么，软件的不理性消费行为，要比实体商品少得多的原因。

## 语义防火墙：雷池 WAF 升级

服务器一直被攻击，怎么办？我的体会是，这种事情很难预防，只能用防火墙去挡。

周刊以前介绍过“[雷池 WAF](https://github.com/chaitin/safeline)”，就是知名的**软件防火墙**，GitHub 已经有14500颗星。

![](https://cdn.beekka.com/blogimg/asset/202501/bg2025010805.webp)

它有一个好用的图形管理后台（上图），可以配置各种拦截规则，高效过滤恶意请求。

即使不配置规则，它自带的语义引擎，也会通过机器学习，**自动识别和拦截恶意请求**。

本周，雷池 WAF 进行了[重大升级](https://mp.weixin.qq.com/s/WbNDrl9K7z7kKGoXpHcVyg)，发布了**语义引擎3.0版**，加强了 AI 语义分析能力。只要2～8小时的自动训练，识别准确率就能达到99.99%，还能用自然语言解释，遇到了什么攻击。

如果你有线上服务器，不妨试试它的拦截效果。个人网站使用[开源版](https://github.com/chaitin/safeline)就够了，企业可以考虑[商业版](https://waf-ce.chaitin.cn/)，本次升级引入的 AI，主要就是强化商业版的企业级服务。

## 科技动态

1、[从地图删除巴士线路](https://www.theguardian.com/world/2024/apr/16/barcelona-bus-route-removed-map-apps-tourist-overcrowding-park-guell)

桂尔公园（下图）是巴塞罗纳的第二大景点，每天都挤满了世界各地的游客。

![](https://cdn.beekka.com/blogimg/asset/202404/bg2024041704.webp)

很多游客乘坐116路公交车去公园，周围居民意见很大。每趟车都挤满了游客，本地居民反而挤不上去。

![](https://cdn.beekka.com/blogimg/asset/202404/bg2024041705.webp)

居民们想了一个办法，让市议会出面，要求谷歌地图和苹果地图删除116路公交车。

这招非常有效，从此以后，就几乎没有外地人乘坐这辆车了，座位都空出来了。

这反映了一个现实，在如今这个年代，如果你不存在于数字世界，对于外人来说，你就是真的不存在。

2、[陆空一体汽车](https://www.yzwb.net/zncontent/4240401.html)

东南大学研发的“东大·鲲鹏1号”，最近公开亮相。

![](https://cdn.beekka.com/blogimg/asset/202501/bg2025010605.webp)

这是一辆陆空一体汽车，既可以当作汽车四轮行驶，也可以用四轴螺旋桨飞行。

![](https://cdn.beekka.com/blogimg/asset/202501/bg2025010606.webp)

当作汽车时，它的最高时速是60公里。

![](https://cdn.beekka.com/blogimg/asset/202501/bg2025010607.webp)

当作飞行器时，它的最大起飞重量500公斤，最大飞行高度300米，最长飞行时间20分钟。

![](https://cdn.beekka.com/blogimg/asset/202501/bg2025010608.webp)

3、[液态空气储能电站](http://www.ce.cn/xwzx/gnsz/gdxw/202501/07/t20250107_39258657.shtml)

河北石家庄的液态空气储能电站，近日并网运行成功，属于国内首个，一天可以储能发电4000度。

![](https://cdn.beekka.com/blogimg/asset/202501/bg2025010701.webp)

它采用空气液化储能，在需要储能时，把空气降温到零下170摄氏度，转化成液体，就储存在下图这个高12米、直径2.5米的罐子里。

![](https://cdn.beekka.com/blogimg/asset/202501/bg2025010702.webp)

需要用电时，再把液态空气升温变回气体，体积会膨胀600多倍，推动发电机的叶轮旋转发电。

![](https://cdn.beekka.com/blogimg/asset/202501/bg2025010703.webp)

它的最大优点是不受地理条件限制，如果证明了经济上可行，就可以大规模建设。

4、**其他**

（1）[研究](https://arxiv.org/html/2412.13459v1#S4)发现，那些每月新增50星以上的 GitHub 项目，15%都是买的假星星，整个 GitHub 共有450万的假星星。

（2）用户在[微软浏览器 Edge](https://www.pcworld.com/article/2568916/microsoft-disguises-bing-as-google-to-fool-inattentive-searchers.html) 键入“google”，会跳出一个很像谷歌、其实属于 Bing 的页面（下图）。

![](https://cdn.beekka.com/blogimg/asset/202501/bg2025010803.webp)

（3）[北京天文台](https://www.bjast.ac.cn/kxpj/kpdt/400edf8a941611e701941626d9f30006.shtml)正在举办《问月》展览，展出月壤实物，还有月球基地的想象图。

![](https://cdn.beekka.com/blogimg/asset/202501/bg2025010801.webp)

![](https://cdn.beekka.com/blogimg/asset/202501/bg2025010802.webp)

## 文章

1、[段永平浙大师生见面会问答实录](https://mp.weixin.qq.com/s/EulYyzGU5fuA3Lv0wgS8hw)（中文）

![](https://cdn.beekka.com/blogimg/asset/202501/bg2025010614.webp)

段永平1月5日重返母校浙江大学，与现场观众进行交流，这是2万字的[现场实录](https://finance.sina.com.cn/roll/2025-01-05/doc-inecxqhr2576638.shtml)。“我没有鼓励过（别人创业）。我觉得该创业的人根本就不需要你鼓励，你有个很强烈的想法，你就会去做。”（[@851235550](https://github.com/ruanyf/weekly/issues/5889) 投稿）

2、[如果 GPU 那么好，为什么我们还用 CPU](https://codingstuff.substack.com/p/if-gpus-are-so-good-why-do-we-still)（英文）

![](https://cdn.beekka.com/blogimg/asset/202501/bg2025010901.webp)

本文通俗地介绍 GPU 和 CPU 的差异，解释为什么它们彼此不能替代，写得很好。

3、[如果不断要求 AI 改进代码会怎样](https://minimaxir.com/2025/01/write-better-code/)？（英文）

![](https://cdn.beekka.com/blogimg/asset/202501/bg2025010504.webp)

作者做了一个有趣的实验，他让 AI 生成一段代码，然后要求 AI 改进这段代码，这样连续做四次，看看会发生什么。

4、[关于 SQLite 的各种趣事](https://avi.im/blag/2024/sqlite-facts/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202412/bg2024123105.webp)

SQLite 是世界使用最广泛的数据库，本文收集关于它的各种趣事。

5、[搭建免费的企业邮箱](https://javayhu.com/da-jian-mian-fei-de-qi-ye-you-xiang-gmail-resend-cloudflare/)（中文）

![](https://cdn.beekka.com/blogimg/asset/202501/bg2025010404.webp)

本文使用 Gmail + Resend + Cloudflare 搭建免费的企业邮箱，可以接收/发送企业域名邮件。（[@javayhu](https://github.com/ruanyf/weekly/issues/5859) 投稿）

6、[旧台式电脑的10个用途](https://www.xda-developers.com/10-things-to-use-your-old-desktop-pc-for/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202410/bg2024101517.webp)

本文介绍怎么利用旧电脑，提供了一些有用的思路。

## 工具

1、[Sourcebot](https://github.com/sourcebot-dev/sourcebot)

![](https://cdn.beekka.com/blogimg/asset/202410/bg2024100201.webp)

开源的代码搜索工具，可以快速对代码建立索引。

2、[facad](https://github.com/yellow-footed-honeyguide/facad)

![](https://cdn.beekka.com/blogimg/asset/202410/bg2024100102.webp)

一个查看目录的命令行工具，类似`ls`命令，但会显示彩色图标。

3、[opfs-finder](https://github.com/hughfenghen/opfs-finder)

![](https://cdn.beekka.com/blogimg/asset/202501/bg2025010401.webp)

在浏览器中实现 macOS Finder。（[@hughfenghen](https://github.com/ruanyf/weekly/issues/5848) 投稿）

4、[Termora](https://github.com/TermoraDev/termora)

![](https://cdn.beekka.com/blogimg/asset/202501/bg2025010706.webp)

开源的终端模拟器，可以当作 SSH 客户端使用，支持 Windows，macOS 和 Linux，采用 Kotlin/JVM 开发。（[@hstyi](https://github.com/ruanyf/weekly/issues/5882) 投稿）

5、[Fake Mail](https://github.com/CH563/fakemail)

![](https://cdn.beekka.com/blogimg/asset/202501/bg2025010708.webp)

开源的一次性电子邮件服务，使用 Cloudflare worker + Astro 开发，收到的邮件存在 Cloudflare KV，2小时后自动删除。（[@CH563](https://github.com/ruanyf/weekly/issues/5884) 投稿）

6、[AYA](https://github.com/liriliri/aya)

![](https://cdn.beekka.com/blogimg/asset/202501/bg2025010709.webp)

开源的跨平台桌面应用，用来简化对安卓设备的操作控制，可以看作 ADB 的图形用户界面。（[@surunzi](https://github.com/ruanyf/weekly/issues/5885) 投稿）

7、[简历生成工具](https://github.com/Arman19941113/dnd-resume)

![](https://cdn.beekka.com/blogimg/asset/202501/bg2025010905.webp)

简历生成的开源 Web 应用，通过拖拽和配置，自定义简历布局和内容。（[@Arman19941113](https://github.com/ruanyf/weekly/issues/5898) 投稿）

8、[在线剪贴板](https://github.com/zxcv0221/netcut)

![](https://cdn.beekka.com/blogimg/asset/202501/bg2025010704.webp)

作者用 AI 生成的一个简单项目，在线的文本分享网站，会生成分享链接，可设置密码，包括前端和后端。（[@zxcv0221](https://github.com/ruanyf/weekly/issues/5876) 投稿）

9、[qrframe](https://qrframe.kylezhe.ng/)

![](https://cdn.beekka.com/blogimg/asset/202410/bg2024100103.webp)

一个定制二维码的网页工具，提供大量选项，[代码开源](https://github.com/zhengkyl/qrframe)。

10、[Pipet](https://github.com/bjesus/pipet)

一个从 HTML/JSON 提取数据的命令行工具，可以跟 curl 搭配使用。 

## AI 相关

1、[Ollama OCR for web](https://github.com/dwqs/ollama-ocr)

基于视觉大模型的开源 OCR 文字识别工具，自带 Web 前端。（[@dwqs](https://github.com/ruanyf/weekly/issues/5846) 投稿）

另有一个类似的项目，[基于 Gemini 的 OCR 识别](https://github.com/cokice/googleocr-app)。（[@cokice](https://github.com/ruanyf/weekly/issues/5887) 投稿）

![](https://cdn.beekka.com/blogimg/asset/202501/bg2025010902.webp)

2、[DeepSeek AI 浏览器插件](https://github.com/DeepLifeStudio/DeepSeekAI)

![](https://cdn.beekka.com/blogimg/asset/202501/bg2025010402.webp)

开源的浏览器插件，直接在网页上与 DeepSeek 大模型互动，获取选中文本的总结或解答。（[@DeepLifeStudio](https://github.com/ruanyf/weekly/issues/5849) 投稿）

3、[AI 生成涂色书](https://zcoloring.com)

![](https://cdn.beekka.com/blogimg/asset/202501/bg2025010707.webp)

输入关键词，生成免费的涂色书。（[@meetqy](https://github.com/ruanyf/weekly/issues/5883) 投稿）

4、[AI Minecraft](https://ai-minecraft.net/zh-CN)

![](https://cdn.beekka.com/blogimg/asset/202501/bg2025010403.webp)

Minecraft 与 AI 相结合，打造实时响应、动态生成的开放世界游戏。（[@boqiwen](https://github.com/ruanyf/weekly/issues/5847) 投稿）

5、[Smart Bookmark](https://chromewebstore.google.com/detail/smart-bookmark/nlboajobccgidfcdoedphgfaklelifoa)

![](https://cdn.beekka.com/blogimg/asset/202501/bg2025010903.webp)

Chrome 浏览器插件，收藏网页时，自动生成相关标签，无需手动归类。（[@howoii](https://github.com/ruanyf/weekly/issues/5890) 投稿）

6、[AnyVoice](https://anyvoice.net/zh/ai-voice-cloning)

![](https://cdn.beekka.com/blogimg/asset/202501/bg2025010906.webp)

AI 声音克隆，只需3秒音频就可创建逼真的声音克隆。（[@markliuyuxiang](https://github.com/ruanyf/weekly/issues/5900) 投稿）

## 资源

1、[如何像计算机科学家一样思考](https://levjj.github.io/thinkcspy/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202405/bg2024053101.webp)

一本在线的编程入门教材，以 Python 语言为例，适合用来学习编程。

2、[FreePngZone](https://freepngzone.com)

![](https://cdn.beekka.com/blogimg/asset/202501/bg2025010705.webp)

免费的 PNG 图片搜索，好像只支持英文。（[@wangdachui332](https://github.com/ruanyf/weekly/issues/5881) 投稿）

3、[泡泡白噪音](https://www.ppbzy.com)

![](https://cdn.beekka.com/blogimg/asset/202501/bg2025010904.webp)

一站式白噪音平台。（[@nettsz](https://github.com/ruanyf/weekly/issues/5893) 投稿）

4、[Data Commons](https://datacommons.org/)

![](https://cdn.beekka.com/blogimg/asset/202411/bg2024110505.webp)

谷歌发布的一个数据网站，提供许多公开的数据集，以及配套的工具，让你可以检索和处理这些数据。

## 图片

1、[积雪乐高](https://www.verandavikings.com/blog/building-lego-iglos)

一位瑞典艺术家自制塑料模具，将积雪做成乐高积木的形状。

![](https://cdn.beekka.com/blogimg/asset/202407/bg2024072311.webp)

![](https://cdn.beekka.com/blogimg/asset/202407/bg2024072312.webp)

小朋友用它们搭建雪屋，就像 MineCraft 里面的屋子。

![](https://cdn.beekka.com/blogimg/asset/202407/bg2024072313.webp)

![](https://cdn.beekka.com/blogimg/asset/202407/bg2024072314.webp)

2、[AI 乐高模型](https://bricknerd.com/home/the-ai-revolution-how-artificial-intelligence-is-impacting-the-lego-community-11-7-23)

Instagram 的账户 [@brick4world](https://www.instagram.com/brick4world/) 专门发布 AI 生成的乐高积木模型。

![](https://cdn.beekka.com/blogimg/asset/202311/bg2023110902.webp)

![](https://cdn.beekka.com/blogimg/asset/202311/bg2023110903.webp)

AI 生成的模型，似乎比人类设计的更有想象力、更漂亮、更吸引人。

![](https://cdn.beekka.com/blogimg/asset/202311/bg2023110904.webp)

![](https://cdn.beekka.com/blogimg/asset/202311/bg2023110905.webp)

![](https://cdn.beekka.com/blogimg/asset/202311/bg2023110906.webp)

## 文摘

1、[AI 的压力](https://docs.google.com/document/u/0/d/1aEdTE-B6CSPPeUWYD-IgNVQVZM25f7MF-u9qn5KJJvo/mobilebasic?pli=1)

我在谷歌的 AI 团队 DeepMind 工作，感到了 AI 带来的巨大压力。

几个月前，我参加了一个朋友举行的生日派对，很多来宾我认识，但也有很多人不认识。

当时，我的身体状态不太好，无意与其他人多交谈。但是，大家知道我在 DeepMind 工作，就在我的身边排起了小队，每个人都想跟我谈谈 AI。

这么多人对我的工作感兴趣，真是让我受宠若惊。银行家、律师、医生和管理顾问都想了解我对 ChatGPT 的看法，尽管很少有人声称大量使用它，但是所有人都认为他们应该多了解 AI。

我是一名研究人员，这种在社交场合无法关机的感觉，让我觉得压力很大。

后来，情况变得更糟了。我在自己家里，都觉得有压力。一打开新闻网站，里面都在谈 AI。

我就不看新闻了，因为害怕引发焦虑。但即使观看足球比赛或电视剧，广告也会提到 AI。

我想过收拾行李，去那些遥远的小城市，住在寺庙里，但如果那里也以某种方式被 AI 渗透了，我也不会感到惊讶。

事实上，行业里面的大公司都在竞争，看谁能开发最大、最好的大模型，只要你为这些公司工作，这本身就带来压力。

此刻做 AI 研究感觉像是参与了一场战争。模型性能的小小波动，可能就会带来股价几十亿美元的变化。

另外，AI 也为我们带来突然的财富，这也带来各种心理问题。

过去两年，我在 AI 世界的经历是混乱和疯狂的，内心充满焦虑。我想，这并不是个别现象。

## 言论

1、

根据人均寿命，2025年出生的婴儿将活着看到下个世纪。

-- [《新一代人类》](https://www.usatoday.com/story/news/nation/2024/12/31/generation-beta-2025-years/77363820007/)

2、

摩尔定律预测，芯片性能大约每年会翻一番。但是，AI 芯片的发展速度比这快得多。

今天我们发布的 GB200 NVL72 芯片，运行 AI 推理的速度，比去年的上一代 H100 快了30倍，比10年前的芯片快了1000倍。

我们正在超越摩尔定律，AI 适用超级摩尔定律。

-- [黄仁勋](https://techcrunch.com/2025/01/07/nvidia-ceo-says-his-ai-chips-are-improving-faster-than-moores-law/)，Nvidia CEO

3、

比亚迪正在走特斯拉没有走下去的道路：一面扩大电池和汽车产量，一面降低成本。

-- [Hacker News 读者](https://news.ycombinator.com/item?id=42576754)

4、

人类所有的问题，都源于人无法独自安静地坐在房间里。

-- [帕斯卡尔](https://philosophy.stackexchange.com/questions/69487/why-did-pascal-think-all-of-humanity-s-problems-stem-from-man-s-inability-to-s)，法国哲学家

5、

正常的小说是自然的顺序，第一章介绍英雄，第二章是英雄开始行动。

但是，你可以交换这两章，现在第一章是英雄开始行动，小说可能以一把枪指着英雄的头部开始。就在紧张气氛达到顶峰时，然后是第二章介绍英雄。这样的话，读者就更有理由想了解这个角色。

同理，先演示幻灯片的第二部分，可能有同样的效果。

-- [《从第二张幻灯片开始演示》](https://tidyfirst.substack.com/p/start-presentations-on-the-second)

## 往年回顾

[蓝色指示灯的解决方案](https://www.ruanyifeng.com/blog/2024/01/weekly-issue-286.html)（#286）

[中国的阳光地带](https://www.ruanyifeng.com/blog/2022/12/weekly-issue-236.html)（#236）

[低纬度，高海拔，气候优势](http://www.ruanyifeng.com/blog/2021/12/weekly-issue-186.html)（#186）

[利特伍德奇迹定律](http://www.ruanyifeng.com/blog/2020/12/weekly-issue-136.html)（#136）

（完）

