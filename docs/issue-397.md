# 科技爱好者周刊（第 397 期）：财富正在向 AI 集中

这里记录每周值得分享的科技内容，周五发布。

本杂志[开源](https://github.com/ruanyf/weekly)，欢迎[投稿](https://github.com/ruanyf/weekly/issues)。另有[《谁在招人》](https://github.com/ruanyf/weekly/issues/9815)服务，发布程序员招聘信息。合作请[邮件联系](mailto:yifeng.ruan@gmail.com)（yifeng.ruan@gmail.com）。

## 封面图

![](https://cdn.beekka.com/blogimg/asset/202605/bg2026051711.webp)

马岩松事务所设计的海南科技馆，今年五一开馆。（[via](https://www.hainanstm.cn/)）

## 财富正在向 AI 集中

AI 相关的所有东西，最近都在上涨。

看看股票，就知道了。内存、储存、CPU、服务器、液冷、光通信、变压器……股价全部在涨，更不要提，前期已经涨过的芯片、模型、算力了，甚至铜和铝也在涨。

这些股票的上涨幅度之大，令人咂舌。就以内存为例，世界三大内存厂商有两家在韩国，单单这两家公司就把韩国股市，从2600点一年之内拉到7600点。

2024年10月，三星公司董事长还因为半导体业绩不佳而[道歉](https://news.qq.com/rain/a/20241008A04KR000)，结果今年可能成为[世界最赚钱公司](https://xueqiu.com/6600079272/374314156)。

![](https://cdn.beekka.com/blogimg/asset/202605/bg2026052001.webp)

另一家内存大厂 SK 海力士更夸张。它跟工会有劳资协议，10%的利润要分给员工。有人计算了，门卫、司机、前台都算进去，每个员工今年平均可以拿到奖金[610万人民币](https://finance.sina.com.cn/roll/2026-05-12/doc-inhxrfsp8418114.shtml)。

![](https://cdn.beekka.com/blogimg/asset/202605/bg2026052002.webp)

至于 AI 模型公司，更是人人都是亿万富翁。OpenAI 去年向600个员工[回购](https://m.thepaper.cn/newsDetail_forward_33161999)了66亿美元的股票，平均每人拿到近1000万美元。

![](https://cdn.beekka.com/blogimg/asset/202605/bg2026052003.webp)

这些事情表明，**社会财富正在重新分配，快速向 AI 集中**。

**这影响到了所有人**。哪怕你根本不使用 AI，但是物价的上涨、资金从本行业流向 AI，不可避免影响到你。

日常使用的电子设备（手机和电脑）、电子元件、基本的生产资料（比如铜和铝）都在涨价。如果你在一个跟 AI 无关的行业，很可能吃不到 AI 的红利，反而被它伤害，因为你会面临成本上升、需求不足、投资减少。

古人说“一将功成万骨枯”，AI 的崛起不知伴随着多少其他行业的陨落。

虽然每一次技术革命，都必然伴随财富的重新分配。但是，这一次的 AI 革命，推进速度格外快，力度格外大，引发的再分配效应也格外猛烈。

作为一个普通人，尤其是身在互联网和软件行业的普通人，似乎也没有其他选择，总是被财富诱惑，只能紧跟潮流拥抱 AI。

## 别用 AI 估算碳水含量

糖尿病人需要控糖，不仅要少吃糖，还要少吃碳水化合物（米饭和面粉），因为碳水最终也会变为糖。

所以，他需要知道，食物里面含有多少碳水。

很自然的想法就是，吃之前拍一张食物照片，交给 AI 估计碳水含量。

![](https://cdn.beekka.com/blogimg/asset/202605/bg2026052004.webp)

一位英国医生就做了[一个实验](https://www.diabettech.com/i-asked-ai-to-count-my-carbs-27000-times-it-couldnt-give-me-the-same-answer-twice/)，把13张食物的照片（比如奶酪三明治、西班牙海鲜饭、焦糖布丁）提交给四个大模型——GPT-5.4、Claude Sonnet 4.6、Gemini 2.5 Pro、Gemini 3.1 Pro——估计碳水含量。

结果让人大跌眼镜，四个模型给出的回答不一样。而且，同一张照片多次提交给同一个模型，回答也不一样。

就拿上面这张西班牙海鲜饭的照片为例，分别多次提交给四个模型，模型的估计值如下图。

![](https://cdn.beekka.com/blogimg/asset/202605/bg2026050910.webp)

可以看到，每个模型估计同一张照片的碳水含量，波动范围都很大。其中，波动最大的是 Gemini 2.5 Pro，碳水含量估计值从 55 克到 484 克，整整相差了 429 克！估计值相对集中的是 Claude Sonnet 4.6，但波动范围也不小。

![](https://cdn.beekka.com/blogimg/asset/202605/bg2026050909.webp)

再以奶酪三明治的照片为例，包装上注明的碳水含量为40克，但 GPT-5.4 估计值平均为74克，其他三个模型为28克，都不正确。

另外，大模型也无法准确识别食物，比如有时会认为奶酪三明治里面夹着一块熟肉。

所以，别用大模型估算食物的碳水含量，也不要让大模型做任何精确的医疗估算，它根本做不到。

## 微软淘汰短信验证码

很多网站登录时，会给你发一条验证码的短信。

![](https://cdn.beekka.com/blogimg/asset/202605/bg2026051908.webp)

这种做法有风险。首先，攻击者可能会欺骗移动运营商，将你的电话号码绑定到他的 SIM 卡，从而短信都发到他的手机。其次，短信是明文发送，很容易泄漏。

微软公司本周确认，将[放弃短信验证码](https://www.windowslatest.com/2026/05/19/microsoft-is-killing-sms-codes-for-microsoft-account-sign-in-aggressively-pushes-passkeys-on-windows-11/)，改用 Passkey、一次性时间码（TOTP）、以及验证过的邮件地址。

其中，Passkey 密钥将是 Windows 11 以后主要的验证方式。

这种做法就是为每个用户生成一对密钥，保存在 Windows 的密码管理器，只有通过面部识别、指纹扫描器或 PIN 码才能唤起私钥验证，安全性非常高。

![](https://cdn.beekka.com/blogimg/asset/202605/bg2026051909.webp)

下面是一篇 [Passkey 的介绍文章](https://kerkour.com/passkeys)（英文），侧重于概念，写得言简意赅，可以参考。

![](https://cdn.beekka.com/blogimg/asset/202605/bg2026051608.webp)

## 亚马逊供应链服务

本月，亚马逊宣布推出“[亚马逊供应链服务](https://press.aboutamazon.com/2026/5/amazon-launches-amazon-supply-chain-services-opening-its-logistics-network-to-all-businesses)”（ASCS），把自己的货运、配送、仓储和包裹运输向用户开放。

![](https://cdn.beekka.com/blogimg/asset/202605/bg2026051904.webp)

任何公司现在都可以把自己的商品业务，建立在亚马逊的物流基础设施之上，宝洁、3M 等公司已经开始用了。

这让人[想起了2006年](https://gadallon.substack.com/p/the-third-time-amazon-did-this-what)，亚马逊开放了自己的网络基础设施，做成 AWS（亚马逊网络服务），直接导致云时代的到来。

![](https://cdn.beekka.com/blogimg/asset/202605/bg2026052005.webp)

现在，它又开放了仓储和物流，会不会改变制造业？

以后，做实物产品越来越简单了，只要把产品设计出来，生产可以外包，物流和销售都可以购买标准化服务。

## 打字机模型

最近，我看到一个[模型玩具](http://writingball.blogspot.com/2026/05/the-rokr-wooden-typewriter-closer-look.html)，感觉很不错。

![](https://cdn.beekka.com/blogimg/asset/202605/bg2026050914.webp)

这是深圳一家公司推出的19世纪机械打字机模型。买回家后，需要自己拼装。

![](https://cdn.beekka.com/blogimg/asset/202605/bg2026050915.webp)

最有趣的是，拼装好以后，它可以用来打字，但功能比较少，不能切换大小写，只支持大写字母。

它不仅是模型玩具，还可以用来了解打字机原理，在海外市场也引起了关注。

## 文章

1、[GitHub Pages 有域名盗用问题](https://meertens.dev/blog/github-enables-domain-abuse/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202605/bg2026051905.webp)

如果你的域名指向 GitHub Pages，最好看一下这篇文章，某些情况下，你的二级域名可能会被盗用。

2、[JavaScript ShadowRealm API 简介](https://css-tricks.com/soon-we-can-finally-banish-javascript-to-the-shadowrealm/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202605/bg2026051302.webp)

ShadowRealm 是一个新的 JS API，允许在单线程环境里面建立多个域，每个域拥有自己的全局对象，独立运行，互不干扰，可以彼此通信。 

3、[Firefox 配置指南](https://sciops.net/information/technology/firefox/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202605/bg2026051201.webp)

作者介绍自己的做法，将 Firefox 配置成一个好用的浏览器。

4、[被撤销证书的检查机制](https://blog.apnic.net/2026/04/24/revocation-of-x-509-certificates/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202605/bg2026051002.webp)

网站的 HTTPS 证书可能会被证书当局撤销，用户如何知道呢？本文介绍现有的三种检查机制。问题是它们都有缺陷，Chrome 没有采用任何一种。

5、[临时性基础设施](https://lukasniessen.medium.com/ephemeral-infrastructure-why-short-lived-is-a-good-thing-2cf26afd75ef)（英文）

![](https://cdn.beekka.com/blogimg/asset/202512/bg2025120607.webp)

本文提出，大型系统除了绝对需要保持状态的部分（例如数据库、消息队列等），其余部分都应采用无状态的临时性基础设施（比如容器）。

6、[微型铝热反应](https://sciencedemonstrations.fas.harvard.edu/presentations/microscale-thermite-reaction)（英文）

![](https://cdn.beekka.com/blogimg/asset/202605/bg2026051712.webp)

铝热反应是指，铝与氧化铁（铁锈）在高温下发生剧烈放热，温度可达2500~3500℃。本文介绍一种引发微型铝热反应的方法：两只生锈的铁球，一只包上铝箔，互相碰撞即可。

## 工具

1、[Abogen](https://github.com/denizsafak/abogen)

![](https://cdn.beekka.com/blogimg/asset/202508/bg2025081106.webp)

一个跨平台的桌面应用，将 ePub/PDF/text 文件转成有声书。

2、[FFmpeg Explorer](https://ffmpeg.lav.io/)

![](https://cdn.beekka.com/blogimg/asset/202410/bg2024101508.webp)

通过可视化图形、生成 FFmpeg 命令的网页应用，[代码开源](https://github.com/antiboredom/ffmpeg-explorer)。

3、[Stock SDK](https://github.com/chengzuopeng/stock-sdk)

![](https://cdn.beekka.com/blogimg/asset/202605/bg2026051601.webp)

获取股票行情的开源 JavaScript SDK，纯前端抓取，无需后端服务，实时行情来自腾讯财经/东方财富等公开接口。（[@chengzuopeng](https://github.com/ruanyf/weekly/issues/9933) 投稿）

4、[Zephyr](https://github.com/Juwan-Hwang/Zephyr)

![](https://cdn.beekka.com/blogimg/asset/202605/bg2026051602.webp)

开源的 Mihomo/Clash 跨平台桌面客户端。（[@Juwan-Hwang](https://github.com/ruanyf/weekly/issues/9936) 投稿）

5、[DimCut](https://github.com/hughfenghen/dimcut)

![](https://cdn.beekka.com/blogimg/asset/202605/bg2026051901.webp)

开源的剪辑软件，将时间轴折叠成多行，并在时间轴上方显示插入的文字，所有处理在本地浏览器完成。（[@hughfenghen](https://github.com/ruanyf/weekly/issues/9978) 投稿）

6、[NotchNotes](https://oil-oil.github.io/NotchNotes/)

![](https://cdn.beekka.com/blogimg/asset/202605/bg2026051903.webp)

隐藏在 Macbook 的刘海里面的便签工具，鼠标 Hover 时自动展开。（[@oil-oil](https://github.com/ruanyf/weekly/issues/9983) 投稿）

7、[markstream-vue](https://github.com/Simon-He95/markstream-vue)

针对 AI 吐出的流式 markdown 的渲染库，提供 Vue 实现。（[@Simon-He95](https://github.com/ruanyf/weekly/issues/9999) 投稿）

8、[彩读｜ColorTxt](https://github.com/ssnangua/ColorTxt)

![](https://cdn.beekka.com/blogimg/asset/202605/bg2026052006.webp)

跨平台的 TXT 文件桌面阅读器，可以给内容上色，还支持章节识别、空行压缩、行首缩进、语音朗读、AI 阅读助手等功能。（[@ssnangua](https://github.com/ruanyf/weekly/issues/10004) 投稿）

9、[Forgejo](https://forgejo.org/)

![](https://cdn.beekka.com/blogimg/asset/202410/bg2024101702.webp)

Gitea 的一个分叉项目，可以用来搭建自己的 Git 服务器，自带 Web 前端，作为个人的 GitHub 服务。

10、[Web Visual Editor](https://github.com/urin/vscode-web-visual-editor)

![](https://cdn.beekka.com/blogimg/asset/202410/bg2024101402.webp)

开源的 VS Code 插件，实时编辑预览 HTML 文件。

## AI 相关

1、[Remove-AI-Watermarks](https://github.com/wiltodelta/remove-ai-watermarks)

移除 AI 图片水印的命令行工具，也是一个 Python 软件包，可见水印和不可见水印（比如谷歌的 SynthID）都能移除。

2、[AVC](https://github.com/study8677/Agent_View_Controller-AVC)（Agent View Controller）

![](https://cdn.beekka.com/blogimg/asset/202605/bg2026051902.webp)

将 AI Agent 终端的确认文字，变成可交互的网页弹窗，可以作为 Agent 的 Skill 使用。（[@study8677](https://github.com/ruanyf/weekly/issues/9979) 投稿）

3、[Lucarne](https://github.com/tuchg/Lucarne)

把本地运行的 AI Agent 接到微信 / Telegram，让你离开电脑也能收到进展、审批权限、回复问题、接续会话。（[@tuchg](https://github.com/ruanyf/weekly/issues/9995) 投稿）

4、[tokenspeed](https://mikeveerman.github.io/tokenspeed/)

![](https://cdn.beekka.com/blogimg/asset/202605/bg2026052101.webp)

每秒生成10个 token，是快是慢？20个呢？这个网站让你在线体验 token 生成速度。

## 资源

1、[高斯泼溅作品集](https://superspl.at/)

高斯泼溅（Gaussian Splatting）是一种算法，可以将多张照片合成为 3D 图像。

网站 [SuperSplat](https://superspl.at/) 提供在线的高斯泼溅处理，可以上传照片进行处理，还能浏览很多合成好的 3D 模型。

![](https://cdn.beekka.com/blogimg/asset/202605/bg2026051910.webp)

大家看作品[《草莓》](https://superspl.at/scene/84df8849)，效果非常好。

![](https://cdn.beekka.com/blogimg/asset/202605/bg2026051911.webp)

2、[IP66](https://ip66.dev/)

![](https://cdn.beekka.com/blogimg/asset/202603/bg2026030404.webp)

免费的 IP 地理位置数据库，可以自由下载，在脚本中调用查询。

## 图片

1、[支撑智利的双手](https://medium.com/@breid.at/why-the-silicon-of-quantum-computing-is-being-destroyed-en-masse-in-the-atacama-desert-41d3a9b823bf)

智利是世界最大的产铜国，近一半的出口为铜，占世界年供应量的比重最高为60%，至今仍有25%。

智利最大的铜生产中心在阿塔卡马沙漠，沙漠入口的小镇有一个雕塑《支撑智利的双手》。

![](https://cdn.beekka.com/blogimg/asset/202605/bg2026051906.webp)

这个雕塑是一双巨大的铜制双手，托举起智利地图，象征此地的铜矿对智利的巨大贡献。

下面是智利沙漠铜矿的照片，可以看到巨大的矿坑和旁边矿石的沉淀池。

![](https://cdn.beekka.com/blogimg/asset/202605/bg2026051907.webp)

2、[S 形曲线](https://www.astralcodexten.com/p/the-sigmoids-wont-save-you)

有一个经验法则，所有的增长曲线最终都会变成 S 形曲线。

比如，下面是指数式增长曲线。

![](https://cdn.beekka.com/blogimg/asset/202605/bg2026051603.webp)

最终，增长会放缓，变成 S 形曲线。

![](https://cdn.beekka.com/blogimg/asset/202605/bg2026051604.webp)

这是普遍现象，所有增长曲线最终都会变成下面的这样，增长曲线到一定阶段后就会变平。

![](https://cdn.beekka.com/blogimg/asset/202605/bg2026051605.webp)

## 文摘

1、[多面手和专才](https://ochagavia.nl/blog/the-undercover-generalist/)

自从我成为自由职业、独立接活以后，我一直感受到多面手程序员与专家程序员之间的对立关系。

我发现有一句话很准确：“理论上，所有公司都喜欢适应性强、能承担多个岗位的程序员。但实际上，大多数招聘职位更偏向专家。”

这意味着，即使你是多面手程序员，找工作时也必须让自己看上去像专家。

我的问题是，我不觉得自己的技能属于特定类别。我把自己看作一个解决问题的黑客，受好奇心驱动，解决那些自己有兴趣的问题。

什么工具适合解决某个问题，我就学习使用那种工具。

然而，在我独立接活后，将自己说成多面手，就很影响我招揽客户。客户希望听到你说自己是专家，而不是说“我是计算机通才”之类的模糊说法。他们的问题包括：你是前端工程师还是后端工程师？你使用 .NET 还是 Python？你专长于 AWS 还是 Azure？……

我不怪他们……客户面对的是具体的问题，确实很难评估雇佣多面手程序员的价值。

于是，我决定改变沟通策略，说人们想听的话。我对自己的定位变成了，一位专注于系统编程和开源软件的 Rust 专家程序员。我按照这个定位包装自己。

它很快就发挥了作用，让我整年都有工作合同！

2、[为什么洗澡或游泳后，手指会起皱？](https://theconversation.com/why-do-fingers-get-wrinkly-after-a-long-bath-or-swim-a-biomedical-engineer-explains-204726)

长时间洗澡或游泳，皮肤会出现皱纹，甚至变色，这是为什么？

![](https://cdn.beekka.com/blogimg/asset/202308/bg2023083007.webp)

你可能不相信，这至今仍然是一个未解之谜，并没有公认的解释。

以前的看法是，这是因为皮肤吸收水分后膨胀，导致肿胀和弯曲。但是上个世纪30年代的研究人员观察到，手指神经受损的人浸水后不会形成皱纹。这说明，皱纹原因与皮肤无关，而与神经系统有关。

现在，科学界的主流解释是，当手和脚与水接触超过几分钟后，皮肤中的汗管就会打开，让水流入皮肤组织。

皮肤增加的水分，会减少皮肤中盐的比例。神经系统就会向大脑发送盐水平降低的信号，进而神经系统就会做出反应，开始收缩血管，减少水的渗入。

血管收缩了，但是最外层的皮肤并没有变小，就会导致外侧的皮肤失去了支撑，就会像泄了气的气球一样，自上而下地下陷，形成皱纹。这就像干了的葡萄起皱一样——它内部失去的体积多于表面积。

![](https://cdn.beekka.com/blogimg/asset/202605/bg2026052102.webp)

这种血管收缩还会导致皮肤变苍白，因为皮下血管的血液减少了。这与你洗热水澡时，血管扩张而导致皮肤变红的情况正好相反。

所以，皮肤起皱是由神经系统引发的。如果神经受损，血管就收不到大脑信号，不会发生收缩，皮肤也就不会起皱。

## 言论

1、

过去一两年，我一直完全依赖 AI 进行编程，自己一行代码都没写过。

有一天，我自己动手写了一篇文章，没有用 AI，但写完后我忍不住把它复制粘贴到 Claude 里，看看 AI 怎么想，因为我担心文章逻辑混乱、文笔幼稚，或者漏掉了什么内容。这就是大量使用 AI 的后果，它让你滋生自我怀疑，我已经不太相信自己，更相信 AI 了。

-- [《该死的 AI 把我变笨了》](https://jpain.io/god-damn-ai-is-making-me-dumb/)

2、

无论工具发展到何种程度，无论它们变得多么强大，它们始终只是工具。它们无法取代我们的理性和价值观，依然由你来选择什么值得去创造。

-- [davidabram.dev](https://www.davidabram.dev/musings/the-machine-didnt-take-your-craft/)

3、

我建议放慢速度，给自己一些时间，思考你到底在构建什么，以及为什么要构建。这样你才有机会告诉自己“不，我们不需要这个”。

-- [《放慢速度》](https://mariozechner.at/posts/2026-03-25-thoughts-on-slowing-the-fuck-down/)

4、

石油行业有一句谚语：一家健康的石油公司由一位地质学家负责，一家成熟的石油公司由一位工程师负责，一家衰落的石油公司由一位会计师负责，一家垂死的石油公司由一位律师负责。

-- [Hacker News 读者](https://news.ycombinator.com/item?id=45429423)

## 往年回顾

[Java 三十周年](https://www.ruanyifeng.com/blog/2025/05/weekly-issue-350.html)（#350）

[三十年，解决人生三大问题](https://www.ruanyifeng.com/blog/2024/05/weekly-issue-300.html)（#300）

[新技术的最大风险](https://www.ruanyifeng.com/blog/2023/04/weekly-issue-250.html)（#250）

[低期望，多尝试](https://www.ruanyifeng.com/blog/2022/03/weekly-issue-200.html)（#200）

（完）

