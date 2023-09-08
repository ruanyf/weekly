# 科技爱好者周刊（第 246 期）：永不丢失的网络身份

这里记录每周值得分享的科技内容，周五发布。

本杂志[开源](https://github.com/ruanyf/weekly)，欢迎[投稿](https://github.com/ruanyf/weekly/issues)。周刊另有[《谁在招人》](https://github.com/ruanyf/weekly/issues/2960)服务，发布程序员招聘信息。合作推广请[邮件联系](mailto:yifeng.ruan@gmail.com)（yifeng.ruan@gmail.com）。

## 封面图

![](https://cdn.beekka.com/blogimg/asset/202303/bg2023031406.webp)

由于清洁工人大罢工，巴黎街头本周到处堆积着一袋袋垃圾，行人在其中穿行。如果没人清理垃圾，现代都市可以支撑几天？（[via](https://edition.cnn.com/2023/03/11/europe/paris-trash-strikes-intl/index.html)）

## 本周话题：永不丢失的网络身份

1、

在影视作品中，大家可能都见过这样的情节：某人从昏迷中醒来，丧失了记忆，无论如何想不起来“我是谁”。

![](https://cdn.beekka.com/blogimg/asset/202303/bg2023031505.webp)

他不知道自己的姓名、年龄、住址，没有身份证和其他证物，也没有任何知情人。

就这样，**他变成了一个没有身份的人，丧失了曾经属于自己的一切。**

![](https://cdn.beekka.com/blogimg/asset/202303/bg2023031506.webp)

不过，这样的情节已经不多见了，因为现在有 DNA 数据库，查一下 DNA 就知道你是谁。即使查不到本人，也能查到亲戚。

“我是谁”这个问题，很大程度上已经解决了。你永远是你，你的身份已经不会丢了。

2、

但是，人们除了社会身份，现在还有网络身份。网络身份的丢失，才是更现实的问题。

**网络身份就是你的互联网账号。** 如果丢失，你就会丧失在该账号下拥有的一切，甚至可能从互联网消失。

![](https://cdn.beekka.com/blogimg/asset/202303/bg2023031507.webp)

以后，影视剧的情节大概会变成下面这样：某人从昏迷中醒来，丧失了记忆，**无论如何想不起自己的网名。**

没了网络身份，他在网上的资产、联系人、活动记录，就都丢失了。

3、

丢失网络身份的风险，其实比想象的大。

大家不一定意识到，**你的网络身份并不真正属于你，** 不仅可能丢失和遗忘，还可能被剥夺。

现在的互联网服务，一般要求用户使用手机号或邮箱地址注册。这两样东西都不真正属于用户。

手机号属于电信服务商，邮箱属于邮箱服务商和域名服务商。如果他们收回你的手机号、邮箱、域名，你的网络身份就麻烦了，如果不能更改，很可能丢失。

4、

不仅账号的名称不属于你，而且账号的法律所有权也不属于你。

举例来说，微信账号的所有权[属于腾讯公司](https://tech.sina.com.cn/roll/2020-09-08/doc-iivhuipp3172175.shtml)。[微信服务协议](https://weixin.qq.com/cgi-bin/readtemplate?lang=zh_CN&t=weixin_agreement&s=default&head=true)的 7.1.2 条就明确写明：

> “微信帐号的所有权归腾讯公司所有，用户完成申请注册手续后，仅获得微信帐号的使用权。”

基本上，各种网络服务的账号，都属于服务提供商，用户只有使用权。

因此，**服务商随时可以单方面暂停或注销你的账号，这是完全合法的。** 特朗普被推特禁言，就属于这种情况。

5、

如果我们不真正拥有自己的网络身份，实际上就不真正拥有互联网上我们名下的一切。

那么，**有没有办法，让网络身份真正属于使用者，完全受你控制，其他任何人都无法夺走，永不丢失呢？**

回答是有办法的，而且已经实现了。

方法就是你用一个密钥对，作为自己的网络身份，公钥是你的用户 ID，私钥用来身份验证。

这保证了每个用户的身份都是唯一的，只要私钥不泄漏，任何人都无法夺走你的账号。

事实上，加密货币的身份体系就是这样设计的。用户用钱包表示身份，每个钱包的编号就是用户的公钥，必须用对应的私钥，才能往里面存取加密货币。这保证了你对钱包的绝对控制。

前一阵子，有一个新兴的社交网络上线，叫做 [Nostr](https://nostr.com/)。

![](https://cdn.beekka.com/blogimg/asset/202303/bg2023031601.webp)

你可以像使用推特一样，在它上面发言，与他人交流。不同之处在于，它的账号就是每个人的公钥，而且可以自己架设服务，因此不存在账号被关停这种事情，并且账号跟域名之间没有绑定关系。

6、

如果每个人都选择公钥作为自己的账号，那么不难想到，可以把所有人的公钥都放到区块链上。以后，查找某人的网络身份，只要检索一下区块链就可以了。

事实上，这是我能想到的区块链的最佳用途。唯一的问题是，区块链的读取是免费的，但是写入需要手续费。

我们可以把写入的费用，看作网络身份的登记费。只要一次性付费，你的这个身份就随时随地可以查到，没有任何人可以篡改，永不丢失。

7、

读到这里，细心的读者会说，这依然没有解决文章开头的场景啊。

如果你得了失忆症，忘记了自己的公钥，你的网络身份不是照样丢失吗？

事实上，这个问题也有人想出了解法，他就是现在如日中天的 OpenAI 公司的首席执行官山姆·阿特曼（Sam Altman）。

![](https://cdn.beekka.com/blogimg/asset/202303/bg2023031602.webp)

他在2020年跟他人合伙创立了 [WorldCoin 项目](https://worldcoin.org/)，就是为了解决这个问题。

![](https://cdn.beekka.com/blogimg/asset/202303/bg2023031603.webp)

该项目的核心是一个叫做 [World ID](https://techcrunch.com/2023/03/07/worldcoin-cofounded-by-sam-altman-is-betting-the-next-big-thing-in-ai-is-proving-you-are-human/) 的业务，目标是为每个人提供一个全球性的网络身份。

具体做法就是扫描用户的虹膜，将用户的生物信息存进 WorldCoin 的区块链，同时为用户生成一个密钥对，作为网络 ID。

![](https://cdn.beekka.com/blogimg/asset/202303/bg2023031604.webp)

这样的话，即使失忆了，只要扫描一下虹膜，就能找回你的公钥，从而得到你的网络身份。

World ID 本月刚刚[发布了 SDK](https://worldcoin.org/blog/announcements/introducing-world-id-and-sdk)，正式对外运作了。如果你愿意被它扫描一下虹膜，就可以拿到你的 World ID，感兴趣的同学可以关注一下。希望这种“密钥对作为网络身份”的实践，能够推广和普及。

## 科技动态

1、[月球时间](https://www.esa.int/Applications/Navigation/Telling_time_on_the_Moon)

未来十年中，多个月球项目会同时开展，它们之间需要互相通信，比如多台月球车之间的通信。

![](https://cdn.beekka.com/blogimg/asset/202303/bg2023031201.webp)

目前，所有月球设备采用的都是地球时间。欧洲空间局正在考虑，建立一套独立的月球时间和月球定位系统。

它相当于月球的 GPS，可以不通过地球，精确定位某个物体在某一时刻，位于月球表面的地点和行动路线。

显然，除了方便机器，月球时间也应该方便人类使用。但是，月球的公转和自转周期都是28天左右，要想与地球时间自然地结合，还是有难度。

2、[菲律宾的防作弊措施](https://www.bbc.com/news/world-asia-63363473)

![](https://cdn.beekka.com/blogimg/asset/202210/bg2022102411.webp)

菲律宾的一所大学，学生考试作弊成风，互相抄袭。

一位教师就想了一个对策，规定学生只有戴上能遮住两侧眼角的帽子，才能参加考试。

![](https://cdn.beekka.com/blogimg/asset/202210/bg2022102412.webp)

最终，学生 DIY 了各种各样的帽子，照片在网上疯狂流传，获得几千个赞，新闻媒体都来报道。据教师说，考试效果很好，没有发现学生作弊。

![](https://cdn.beekka.com/blogimg/asset/202210/bg2022102413.webp)

![](https://cdn.beekka.com/blogimg/asset/202210/bg2022102414.webp)

3、[吊扇的空气过滤器](https://www.jefftk.com/p/ceiling-air-purifier)

一个老外程序员自己动手，在家里做了一个巨型空气过滤器，专用于吊扇。

![](https://cdn.beekka.com/blogimg/asset/202206/bg2022060512.jpg)

他的做法其实很简单，就是在吊扇周围架上一圈 HEPA 滤网。

![](https://cdn.beekka.com/blogimg/asset/202206/bg2022060513.jpg)

这样的好处是吊扇的叶片长，所以比较安静，没有噪音，而且空气过滤效果也不差。经测试，可以有效减小室内 PM2.5 指数。

4、[火星氧气机](https://phys.org/news/2022-08-moxie-reliably-oxygen-mars.html)

2021年2月，美国的毅力号火星车成功着陆火星。这台火星车里面，有一个叫做 MOXIE 的氧气机，用来试验能否在火星上制造氧气。

![](https://cdn.beekka.com/blogimg/asset/202209/bg2022090114.webp)

![](https://cdn.beekka.com/blogimg/asset/202209/bg2022090115.webp)

根据美国政府最新披露的报告，这台氧气机已经成功运行了7次，每小时可以在火星上制造6克氧气，足够让一个成年人呼吸10分钟。

![](https://cdn.beekka.com/blogimg/asset/202209/bg2022090116.webp)

火星大气充满了二氧化碳，这台氧气机采用电解，将二氧化碳分解成氧气和一氧化碳。

如果评估后证实这种方法可行，美国就会制造更大型的氧气机，在人类登陆前，在火星上大量生产氧气。

## 文章

1、[如何在个人电脑运行 LLaMA](https://til.simonwillison.net/llms/llama-7b-m2)（英文）

![](https://cdn.beekka.com/blogimg/asset/202303/bg2023031407.webp)

LLaMA 是 Meta 公司的 AI 模型，效果号称超过 ChatGPT。它刚刚开放内测，就被破解了。

本文教你怎么在个人电脑运行这个模型，从而拥有自己本地的 ChatGPT。它甚至不需要 GPU，只用 CPU 就能运行。

2、[CSS 的 initial-letter 属性](https://developer.chrome.com/blog/control-your-drop-caps-with-css-initial-letter/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202301/bg2023011905.webp)

CSS 新增了一个`initial-letter`属性，用来设置首字母下沉的样式。

3、[WordPress 是怎么诞生的？](https://levelup.gitconnected.com/meet-a-programmer-who-turned-an-open-source-platform-into-a-7-500-000-000-company-645e14c53c8)（英文）

![](https://cdn.beekka.com/blogimg/asset/202301/bg2023011502.webp)

本文介绍2003年，19岁的美国程序员 Matt Mullenweg 怎么会创建开源软件 WordPress，文章内容挺精彩的。

4、[Replit 诞生记](https://www.the5to9.xyz/p/replit-800m-side-project)（英文）

![](https://cdn.beekka.com/blogimg/asset/202301/bg2023011603.webp)

Replit 是运行在网页上的编程 IDE，作者是一个约旦人，后来移民到美国。本文介绍他的创业过程。

5、[我用 Orange Pi 做了一个 NAS](https://www.instructables.com/DIY-Raspberry-Orange-Pi-NAS-That-Really-Looks-Like/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202301/bg2023011601.webp)

作者从硬件到软件，完全自己动手，从头做出了一个 NAS 网络存储装置，非常厉害。

6、[Web 浏览器引擎的历史](https://eylenburg.github.io/browser_engines.htm)（英文）

本文梳理历史上出现过的浏览器引擎。

## AI 相关软件

1、[PromptPerfect](https://promptperfect.jina.ai/)

![](https://cdn.beekka.com/blogimg/asset/202303/bg2023031402.webp)

专为生成式 AI 优化输入提示（prompt）的工具。（[@hanxiao](https://github.com/ruanyf/weekly/issues/2974) 投稿）

2、[Chatbox](https://github.com/Bin-Huang/chatbox)

![](https://cdn.beekka.com/blogimg/asset/202303/bg2023031409.webp)

OpenAI API 跨平台桌面客户端，主要用作 Prompt Debugging Console。（[@Bin-Huang](https://github.com/ruanyf/weekly/issues/2978) 投稿）

3、[Chaty](https://github.com/cosin2077/chaty)

一个命令行工具，支持使用一条命令，完成 ChatGPT 的各种相关操作。（[@cosin2077](https://github.com/ruanyf/weekly/issues/2979) 投稿）

4、[PowerGPT](https://github.com/ouromoros/PowerGPT)

一个 Windows PowerShell 工具，输入你想要完成的操作，它会用 AI 返回对应的 Windows 命令行命令。（[@ouromoros](https://github.com/ruanyf/weekly/issues/2980) 投稿）

5、[Writely](https://github.com/anc95/writely)

![](https://cdn.beekka.com/blogimg/asset/202303/bg2023031410.webp)

Chrome 浏览器插件，类似于 Notion AI，支持在任意编辑器网页上进行写作辅助。（[@anc95](https://github.com/ruanyf/weekly/issues/2981) 投稿）

6、[智能文案小助手](https://github.com/CatsAndMice/lanlan)

![](https://cdn.beekka.com/blogimg/asset/202303/bg2023031412.webp)

一个开源的 ChatGPT 前端表单页面，输入提示，自动生成文案。（[@CatsAndMice](https://github.com/ruanyf/weekly/issues/2984) 投稿）

## 工具

1、[Jami](https://jami.net/)

![](https://cdn.beekka.com/blogimg/asset/202212/bg2022122201.webp)

一个开源的团队协作软件，可以文字聊天、视频通话、屏幕共享等。

2、[PhpWebStudy](https://www.macphpstudy.com/)

![](https://cdn.beekka.com/blogimg/asset/202303/bg2023031401.webp)

macOS 系统 PHP 和 Web 开发环境管理工具，方便各软件的启动/重启、配置查看修改、日志排查等等（[@xpf0000](https://github.com/ruanyf/weekly/issues/2973) 投稿）

3、[Huntly](https://github.com/lcomplete/huntly)

![](https://cdn.beekka.com/blogimg/asset/202303/bg2023031405.webp)

一款自托管的信息管理工具，可以订阅 RSS 和自动保存浏览过的网页，支持多维度的分类和搜索。（[@lcomplete](https://github.com/ruanyf/weekly/issues/2977) 投稿）

4、[CircuitJS1](https://github.com/pfalstad/circuitjs1)

![](https://cdn.beekka.com/blogimg/asset/202303/bg2023031403.webp)

网页电路模拟器，可以添加电子元件、导出电路、分享 URL 等等。（[@jerrylususu](https://github.com/ruanyf/weekly/issues/2975) 投稿）

5、[RxEditor](https://github.com/rxdrag/rxeditor)

![](https://cdn.beekka.com/blogimg/asset/202303/bg2023031404.webp)

一款开源的可视化低代码前端工具，可以拖拽生成和编辑组件，目前仅支持 React，查看 [Demo](https://rxeditor.vercel.app/)。（[@rxdrag](https://github.com/ruanyf/weekly/issues/2976) 投稿）

6、[Zarm](https://zarm.design/)

![](https://cdn.beekka.com/blogimg/asset/202303/bg2023031411.webp)

基于 React 的企业级移动端 UI 组库。（[@dominicleo](https://github.com/ruanyf/weekly/issues/2982) 投稿）

## 资源

1、[useragents.me](https://www.useragents.me/)

![](https://cdn.beekka.com/blogimg/asset/202212/bg2022121803.webp)

这个网站提供各种最新版本浏览器的 User Agent 字符串。

2、[webЯcade](https://www.webrcade.com/)

![](https://cdn.beekka.com/blogimg/asset/202209/bg2022092604.webp)

一个[开源](https://github.com/webrcade/webrcade)网站，让你在网页玩老游戏机（任天堂、世嘉等）的游戏，可以自己上传游戏 ROM。

3、[Comprehensive Rust](https://google.github.io/comprehensive-rust/)

![](https://cdn.beekka.com/blogimg/asset/202212/bg2022122211.webp)

安卓团队编写的为期四天的 Rust 课程，从基本语法到高级主题，最后一天还会讲到 Rust 如何用于安卓开发。

4、[汇编语言编程导论](https://github.com/pkivolowitz/asm_book)（A Gentle Introduction to Assembly Language Programming）

一本英文的开源教程，向 C/C++ 学习者介绍 ARM 64 的汇编语言。

## 图片

1、[最古老的直播摄像头](https://www.sfgate.com/obscuresf/article/oldest-webcam-watches-san-francisco-17467544.php)

旧金山州立大学的学生可能不知道，该校行政大楼的四楼有一个世界最古老的直播摄像头，直到今天，还在互联网上直播校园状况。

![](https://cdn.beekka.com/blogimg/asset/202210/bg2022100402.webp)

![](https://cdn.beekka.com/blogimg/asset/202210/bg2022100403.webp)

1994年，一个研究生架设了这个摄像头，最初只是为了在网上查看，办公室咖啡壶是满的还是空的，需不需要自己带咖啡。

后来，他开始直播校园。随着他的留校，这一播就是二十多年，2019年的时候，他宣布将下线这个摄像头。

新闻媒体报道了这件事，校方最终决定接管它，然后就一直直播到现在。 

大家可以在 [FogCam 网站](https://fogcam.org/)上观看它的直播。

![](https://cdn.beekka.com/blogimg/asset/202210/bg2022100407.webp)

## 文摘

1、[如果风静止了](https://thebulletin.org/2022/09/gone-with-the-winds-what-happens-if-there-is-a-global-terrestrial-stilling/)

风力发电正在全世界如火如荼地发展。

但是，风力发电有一个前提，就是必须有源源不断的风。那么，风可能出现静止吗？

![](https://cdn.beekka.com/blogimg/asset/202303/bg2023031413.webp)

事实上，2021年的夏秋之际，欧洲大部分地区就发生了“风旱”。许多地方的风速比年平均水平至少慢了约15%，英国出现了60年来风力最小的时期。

前年9月，风电发电还占英国发电量的18%，但到了去年9月，这一比例骤降至2%。为了弥补能源缺口，英国被迫重启了两座封存的煤电厂。

![](https://cdn.beekka.com/blogimg/asset/202303/bg2023031414.webp)

一项研究表明，全世界的风速正在下降，从1978年到2010年，风速每十年下降2.3%。不过，2010年到2019 年又有所反弹。从每小时7英里增加到7.4英里。

尽管如此，科学家还是认为，未来的风速将不断放缓，到2100年全球平均风速可能下降多达10%。

其中的原因，涉及到了一个根本的问题：为什么地球上有风？

![](https://cdn.beekka.com/blogimg/asset/202303/bg2023031415.webp)

地球出现风带，主要原因是温度不均匀：两极很冷，热带很暖。这种温差导致了空气流动，从而产生了风。

但是由于全球变暖，两极与热带的温差正在减小，这是因为两极（尤其是北极）的变暖速度比热带地区快。

另一个风速变小的原因，可能是“地球表面粗糙度”的增加。世界各地的城市建筑的数量和规模正在增加，这阻挡了风的流动。

风速变小会产生严重后果，不仅仅影响到风力发电。（1）强风可以缓解城市污染，用新鲜空气代替停滞的空气。（2）较慢的风会让热浪难以缓解。（3）慢风也使飞机更难起飞，因为飞行员依靠逆风升空。希腊的一个机场，由于逆风减缓和气温上升，空客320在过去30年中，最大起飞重量减少了4吨。

## 言论

1、

艺术家看到的不是世界的本来面目，而是一些更丰富、更简单、更强大的东西。

艺术作品不是为了让观众重温现实，而是从现实中创造出一些东西，把一种更强烈的情绪传递给观众。

-- [《照片编辑》](https://simonsarris.substack.com/p/photo-editing-respecting-context)

2、

一种普遍存在的误解是，不应该吃过期食物。

但是实际上，保质期大多数时候只表示食物何时最新鲜，而不是何时不可食用，跟食品安全关系不大。刚刚过期的食品就扔掉，会造成很大的浪费。

-- [《关于食物的四个常见误解》](https://www.kiteandkeymedia.com/videos/common-myths-about-food-debunked/)

3、

我不考虑使用投票来选择政策。我认为这表明了领导人思想上的虚弱，无法规划路线。

媒体鼓励人们走哪条路，你就跟着走。你就不是领导者。

-- 李光耀

4、

行动是绝望的解药。（Action is the antidote to despair.）

-- [琼·贝兹](https://www.brainyquote.com/quotes/joan_baez_132657)，美国音乐家

5、

一些软件公司可以将最简单的软件项目，变成一系列艰苦的流程，包含无休止的会议，以及大量“相关者”的参与。

这些公司通过每周必须完成的一系列仪式和流程，消灭掉了编程的乐趣和生产力。

-- [Hacker News 读者](https://news.ycombinator.com/item?id=34368904)

## 历史上的本周

[俄罗斯的 HTTPS 证书问题](http://www.ruanyifeng.com/blog/2022/03/weekly-issue-199.html)（2022 #199）

[新能源汽车，谁会是赢家？](http://www.ruanyifeng.com/blog/2021/03/weekly-issue-149.html)（2021 #149）

[那些为了考试拼搏的年轻人](http://www.ruanyifeng.com/blog/2020/03/weekly-issue-97.html)（2020 #97）

[吃播算不算正式工作？](http://www.ruanyifeng.com/blog/2019/03/weekly-issue-47.html)（2019 #47）

## 鸣谢

周刊得到国内新一代知识管理与协作平台 [FlowUs](https://flowus.cn?promotionChannel=GW_RYF_01) 的帮助，深表感谢。

[FlowUS](https://flowus.cn?promotionChannel=GW_RYF_01)  = 文档 + 表格 + 网盘。你可以用它写文档、做主页、管理数据、存储文件等等。

每一期周刊同时发布在[ FlowUs 专栏](https://ruanyf-weekly.flowus.cn/?code=FLOWUS&promotionChannel=WX_RYF_00)，欢迎大家也去开通自己的专栏和主页。

![](https://cdn.beekka.com/blogimg/asset/202303/bg2023030205.webp)

（完）

