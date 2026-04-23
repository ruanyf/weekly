# 科技爱好者周刊（第 394 期）：第二次 API 开放浪潮

这里记录每周值得分享的科技内容，周五发布。（**[通知] 下周五一假期，周刊休息。**）

本杂志[开源](https://github.com/ruanyf/weekly)，欢迎[投稿](https://github.com/ruanyf/weekly/issues)。另有[《谁在招人》](https://github.com/ruanyf/weekly/issues/9454)服务，发布程序员招聘信息。合作请[邮件联系](mailto:yifeng.ruan@gmail.com)（yifeng.ruan@gmail.com）。

## 封面图

![](https://cdn.beekka.com/blogimg/asset/202604/bg2026042008.webp)

我见过的最酷广告牌，只有一行命令，推广一个 AI 工具包。普通人看不懂也没关系，反正不是给他们用的。（[via](https://x.com/steventey/status/1689986179746197504)）

## 第二次 API 开放浪潮

如果你在互联网行业足够久，大概会记得，以前有过一次 API 开放的浪潮。

那是15年前的2011年，云服务刚兴起不久，各种平台纷纷开放自己的 API。

![](https://cdn.beekka.com/blogimg/asset/202604/bg2026042102.webp)

那时，Facebook 和 Twitter 都发布了自己的 API，开放了平台数据。GitHub 的 API 设计简直是艺术品，几乎可以获得任何想要的功能。

平台的想法是，开放的 API 有助于用户和第三方加入，来开发各种插件和扩展程序，从而推动平台的增长，提高用户留存率和满意度。

那时还有一个叫做 [ProgrammableWeb](https://en.wikipedia.org/wiki/ProgrammableWeb) 的网站（现已关闭），它的名字就代表了当时人们的信念：互联网可以通过 API 编程，把各种平台的数据连接在一起。

![](https://cdn.beekka.com/blogimg/asset/202604/bg2026042103.webp)

但是，事情的发展跟预想完全相反。

平台发现，API 很难盈利，因为无法插入广告，而且自家的数据会帮助其他公司的生意，造成用户流失。

于是，它们纷纷改变做法，限制和关闭 API，不再分享数据，将用户留在自家的“围墙花园”。

如今，Facebook 和 Twitter 的 API 已经形同虚设，第三方客户端遭到彻底禁用。GitHub 虽然还保持开放的 API，但也采取了管控，增加了身份验证和速率限制，要想构建全功能的第三方应用也很困难。

正当人们觉得这将是常态，[转变](https://brandur.org/second-wave-api-first)出现了。

就在2025年的下半年，大模型达到了临界点，变得真正强大，可用于生产环境了。

人们很快意识到，如果大模型只会思考，不能执行代码，用处就不大。**AI 的最大价值不是内容生成，而是内容生成 + 自动化**，这样才能最大限度解放人力、创造价值。AI 自动化，自己执行代码的典型代表就是“龙虾”（OpenClaw）。

![](https://cdn.beekka.com/blogimg/asset/202604/bg2026042104.webp)

自动化意味着 AI 必须能够调用其他平台，进而意味着，其他平台必须先开放自己的 API。

突然之间，API 不再是累赘，而是接入 AI 的必须条件。没有 API，你的平台就进入不了 AI 工作流，各种 Agent 也就不能代表用户在你的平台上工作。

同样两个平台，一家有 API，另一家没有，后者就很可能被市场放弃，因为大模型无法接入它，也就无法对它自动化，AI 用户只能转向它的竞品。

平台意识到了，谁尽快开放 API，谁就抢占了先机。所以，强如腾讯也会在龙虾爆红后，以最快的速度开放了微信接口，让龙虾可以向微信发消息。

![](https://cdn.beekka.com/blogimg/asset/202604/bg2026042315.webp)

腾讯也害怕，在龙虾的世界里没有自己的一席之地。其他平台就更不用说了，抢着通过 MCP 和 Skill 开放自家的操作接口。

这表明，**第二次 API 开放浪潮正在到来**。这一次将比上一次开放得更彻底，更易用。

（1）这次开放的不仅是云服务，还有很多日常生活服务：外卖、电商、银行……甚至还有很多原本根本不会有 API 的服务，比如餐馆和球馆的预订。

（2）这次的 API 不需要手动编程，你只需使用自然语言，由大模型翻译后调用。

（3）这次的 API 是消费者通过 AI 调用，使用目的是代表用户行事。以前 API 是由应用程序调用，使用目的是获取数据。

## 机器人半马

上周末，北京亦庄举行了第二次[人形机器人的半马比赛](https://news.sina.com.cn/zx/gj/2026-04-19/doc-inhvackq0239220.shtml)。

超过100个人形机器人参加比赛，看谁最快跑完21.0975公里。最终，冠军成绩是50分26秒，超过了人类最快的选手（半马的人类世界纪录是1小时02分52秒）。

![](https://cdn.beekka.com/blogimg/asset/202604/bg2026042005.webp)

根据网友拍摄的[现场视频](https://x.com/xiaohu/status/2045786816213815411)，机器人跑到一定距离就要进入补给站，由工作人员更换电池，并加入冰块（或者干冰）防止过热。

这就是说，机器人的内置电池支持不了一小时的运行时间。

宇树公开发售的 [H2 人形机器人](https://www.unitree.com/cn/H2)，续航时间是3小时。在长跑这种剧烈运动时，续航应该会大打折扣。而且，功率相同时，体重较轻的机器人在赛跑中有优势，也就意味着不能多携带电池。

这样看上去，人形机器人目前的实用性还是很有限。不插电时，一到两个小时就要充电，那样的话，很多事情就不适合做了。

## GPT Images 2.0

本周，OpenAI 发布 [GPT Image 2.0 模型](https://openai.com/zh-Hans-CN/index/introducing-chatgpt-images-2-0/)，据说是目前最强的图像模型，性能超过了谷歌的 Nano Banana 2 Pro。

![](https://cdn.beekka.com/blogimg/asset/202604/bg2026042304.webp)

根据 OpenAI 的介绍，它的文字渲染有较大进步，很好地支持汉字，可以生成复杂的解释性图片。

大家可以去 [ChatGPT.com](https://chatgpt.com/images) 免费试用。

我做了一个比较，生成一张小狗在古镇屋檐下午睡的图片。这是 GPT Images 1 的结果。

![](https://cdn.beekka.com/blogimg/asset/202604/bg2026042306.webp)

这是 GPT Images 2.0 的结果。

![](https://cdn.beekka.com/blogimg/asset/202604/bg2026042305.webp)

我还看到一个有趣的项目 [Flipbook](https://flipbook.page/)。它是一个解释性图片浏览器，用户输入一个主题，它会自动生成详细解释的图片。

![](https://cdn.beekka.com/blogimg/asset/202604/bg2026042307.webp)

上图是输入“汽水”生成的解释图片，点击局部，还能生成进一步的解释。

网上已经有收集提示词的 [Awesome 仓库](https://github.com/YouMind-OpenLab/awesome-gpt-image-2)（[@DophinL](https://github.com/ruanyf/weekly/issues/9728) 投稿），大家可以看看别人的优秀例子。

![](https://cdn.beekka.com/blogimg/asset/202604/bg2026042308.webp)

另有一个同类的[提示词仓库](https://github.com/ZeroLu/awesome-gpt-image)（[@ZeroLu](https://github.com/ruanyf/weekly/issues/9727) 投稿）。

## AI 是扩展神器

**AI 有一个特点，不仅能够压缩信息，更善于扩展信息**。它会推断出模糊不清的部分，更能生成缺失的部分，填补上看似合理的细节。

这意味着，AI 是扩展神器。[有人](https://mattstromawn.com/writing/expansion-artifacts/)设想了这样的场景：

- 公司 CEO 开会时口述了一个设想。
- AI 将其扩展成一份战略文件。
- AI 将战略文件转化为产品规格。
- AI 用氛围编程生成代码原型。
- AI 根据代码原型，撰写出发布文案和公关稿。

看到了吗，AI 可以把脑子里的一个想法，不断扩展出文档、代码、产品、发布会、就业……

人们总是说，将来的世界是物质产品极大丰富的世界，AI 看上去就是这一类工具：**凡是它能生成的东西，都将变得极大丰富**。

## 小轿车的车载厕所

赛力斯申请了一个小轿车的“[车载厕所](https://chejiahao.autohome.com.cn/info/25229950)”专利。

![](https://cdn.beekka.com/blogimg/asset/202604/bg2026042003.webp)

座椅装在一个滑轨上，向后滑动就会露出下方的坐便器。

![](https://cdn.beekka.com/blogimg/asset/202604/bg2026042004.webp)

这个马桶配备了加热元件，用于蒸发尿液并烘干其他污物，但还是需要定期手动清空。同时，车内配备风扇和排气管，用于换气。

这个装置对于小轿车，使用场景有限，只适合高速公路大堵车的情况。但是，对于跑长途的大货车，倒是很实用。

## 文章

1、[不要使用 Ollama](https://sleepingrobots.com/dreams/stop-using-ollama/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202604/bg2026041801.webp)

Ollama 是一个运行本地大模型的工具，本文提出它有诸多问题，建议改用 [llama.cpp](https://github.com/ggml-org/llama.cpp) 和 [LM Studio](https://lmstudio.ai/)。

2、[npmx 的功能](https://nesbitt.io/2026/04/16/features-everyone-should-steal-from-npmx.html)（英文）

![](https://cdn.beekka.com/blogimg/asset/202604/bg2026042202.webp)

有人为 npmjs.com 做了一个新的前端 [npmx.dev](https://npmx.dev/package/egg)，解决了很多开发者要求已久的功能。

3、[不要过长的链式调用](https://allthingssmitty.com/2026/04/20/why-i-dont-chain-everything-in-javascript-anymore/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202604/bg2026042313.webp)

JavaScript 语言可以写出很长的链式调用（上图），有些程序员很喜欢用。本文提出链式调用有一些缺点，不宜过长。

4、[异步编程技术的演变和实际成果](https://causality.blog/essays/what-async-promised/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202604/bg2026042314.webp)

一篇概述，介绍异步编程的由来，如何发展出 async/await 这种普遍接受的解法，以及存在的问题，写得比较深入。

5、[被动雷达的工作原理](https://www.passiveradar.com/how-passive-radar-works/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202604/bg2026041806.webp)

雷达可以主动发射电波侦测飞行物，也可以不发射电波，只监听电波变化，这就叫被动雷达。

## 工具

1、[Little Snitch for Linux](https://obdev.at/products/littlesnitch-linux/index.html)

![](https://cdn.beekka.com/blogimg/asset/202604/bg2026041812.webp)

著名的网络通信监控软件 [Little Snitch](https://www.obdev.at/products/littlesnitch/index.html)，终于推出了 Linux 版，可以用它看到每个应用跟什么网址通信。

2、[quien](https://github.com/retlehs/quien/)

![](https://cdn.beekka.com/blogimg/asset/202604/bg2026041807.webp)

查询域名信息的终端工具，提供清晰易用的界面。

3、[ggsql](https://ggsql.org/)

![](https://cdn.beekka.com/blogimg/asset/202604/bg2026042101.webp)

可以生成图形的 SQL 查询工具，直接查询数据库，将结果表示成可视化图形，参见[介绍文章](https://opensource.posit.co/blog/2026-04-20_ggsql_alpha_release/)。

4、[Himi Recorder](https://github.com/jrainlau/himi-recorder)

开源的 Mac 录屏应用，可以绕过录屏检测机制，让被录制的应用无法感知正在被录屏。（[@jrainlau](https://github.com/ruanyf/weekly/issues/9663) 投稿）

5、[Tab Harbor](https://github.com/V-IOLE-T/tab-harbor)

![](https://cdn.beekka.com/blogimg/asset/202604/bg2026041804.webp)

开源的 Chrome 插件，把新打开的标签主页变成标签管理器。（[@V-IOLE-T](https://github.com/ruanyf/weekly/issues/9665) 投稿）

另有一个类似插件 [Tab Out](https://github.com/zarazhangrui/tab-out)。（[@Acorn2](https://github.com/ruanyf/weekly/issues/9687) 投稿）

![](https://cdn.beekka.com/blogimg/asset/202604/bg2026042001.webp)

6、[animal-island-ui](https://github.com/guokaigdg/animal-island-ui)

![](https://cdn.beekka.com/blogimg/asset/202604/bg2026041805.webp)

《动物森友会》风格的 React UI 组件库。（[@guokaigdg](https://github.com/ruanyf/weekly/issues/9668) 投稿）

7、[CUPS Web](https://github.com/hanxi/cups-web)

![](https://cdn.beekka.com/blogimg/asset/202604/bg2026041901.webp)

网页版打印机管理工具，通过浏览器远程控制打印机，支持多用户、打印记录追踪等功能。（[@hanxi](https://github.com/ruanyf/weekly/issues/8587) 投稿）

8、[Blog Helper](https://github.com/thinkycx/blog-helper)

![](https://cdn.beekka.com/blogimg/asset/202604/bg2026041902.webp)

开源的访客统计服务，提供 PV/UV 统计、热门文章、趋势图等，一个实例服务多个站点。（[@thinkycx](https://github.com/ruanyf/weekly/issues/9677) 投稿）

9、[HiKid](https://github.com/xiaochong/hi-kid)

![](https://cdn.beekka.com/blogimg/asset/202604/bg2026042002.webp)

帮助小朋友练习英语口语和听力的桌面应用，完全免费，目前仅支持 macOS。（[@Hao4Wang](https://github.com/ruanyf/weekly/issues/9689) 投稿）

10、[Kite Desktop](https://github.com/eryajf/kite-desktop)

![](https://cdn.beekka.com/blogimg/asset/202604/bg2026042302.webp)

桌面端的 K8S 多集群管理工具。（[@eryajf](https://github.com/ruanyf/weekly/issues/9719) 投稿）

11、[Project River](https://github.com/Lionad-Morotar/project-river)

![](https://cdn.beekka.com/blogimg/asset/202604/bg2026042303.webp)

Git 仓库提交历史的可视化河流图，支持多项目对比、贡献者信息等特性，[在线体验](https://lionad-morotar.github.io/project-river)。（[@Lionad-Morotar](https://github.com/ruanyf/weekly/issues/9722) 投稿）

## AI 相关

1、[OpenAI Privacy Filter](https://github.com/openai/privacy-filter)

![](https://cdn.beekka.com/blogimg/asset/202604/bg2026042312.webp)

如何才能避免把敏感信息（比如姓名、地址、电话、密码）发给大模型？

OpenAI 给出了答案：Privacy Filter。这是一个本地运行的大模型，它先处理后再发给线上大模型。

比如，原文是“产品发布日期是2026年9月18日”，处理后就是“产品发布日期是[PRIVATE_DATE]”，参见[介绍文章](https://openai.com/index/introducing-openai-privacy-filter/)。

2、[LinkAI Gateway](https://github.com/ruanyf/weekly/issues/9657)

![](https://cdn.beekka.com/blogimg/asset/202604/bg2026041802.webp)

开源的 AI 网关，可以接入主流大模型，然后对外提供统一的 API（OpenAI 兼容）和管理后台。（[@star7th](https://github.com/ruanyf/weekly/issues/9657) 投稿）

3、[Nezha](https://github.com/hanshuaikang/nezha)（哪吒）

![](https://cdn.beekka.com/blogimg/asset/202604/bg2026042301.webp)

开源的 AI 编程任务管理器，快速切换多任务管理，集成了原生终端、会话管理、代码编辑、Git 等功能，大小不到 10MB。（[@hanshuaikang](https://github.com/ruanyf/weekly/issues/9714) 投稿）

4、[WatermarkZero](https://watermarkzero.org/)

![](https://cdn.beekka.com/blogimg/asset/202604/bg2026041803.webp)

Gemini 生成图片的可见水印去除工具，图片不需要上传到服务器，直接在本地浏览器处理。（[@liuyan-wjy](https://github.com/ruanyf/weekly/issues/9664) 投稿）

5、[mini-cc](https://github.com/you-want/mini-cc)

开源的 AI 编程 Agent，作用类似于 Claude Code，采用多语言架构，目前已完成 TypeScript 实现。（[@RainyNight9](https://github.com/ruanyf/weekly/issues/9681) 投稿）

## 资源

1、[The Listening Museum](https://sheets.works/data-viz/keyboard-sounds)

![](https://cdn.beekka.com/blogimg/asset/202604/bg2026042006.webp)

一个有意思的网站，收集键盘打字的声音。你可以先听一下某种键盘的打字声，再确定是否购买它。

2、[软件工程定律](https://lawsofsoftwareengineering.com/)

![](https://cdn.beekka.com/blogimg/asset/202604/bg2026042201.webp)

这个网站收集各种软件相关的定律，目前有56条。

比如，“[帕金森定律](https://lawsofsoftwareengineering.com/laws/parkinsons-law/)”（Parkinson's Law）：工作量总是会增加，直至填满所有可用时间。推论就是，不管设置多长的开发时间，项目开发总是会做到最后一刻。

## 图片

1、[5x5 像素的英文字体](https://maurycyz.com/projects/mcufont/)

最小的英文字体有多小？

1x1 像素（宽1像素，高1像素）就是一个点，当然不可能；2x2 像素也不可能；3x3 像素理论上可以，实际上无法阅读；4x4 像素难以绘制一些多笔画的字符，比如 E、M、W。

因此，英文字体最小就是 5x5 像素，就是下面的效果。

![](https://cdn.beekka.com/blogimg/asset/202604/bg2026042309.webp)

上面字体中，大多数小写字母比大写字母小一个像素，从而使两者可以在视觉上区分。

整个字体仅占用350字节的内存，所以很适合老式设备或低端设备，即使只有 16kB 内存的8位微控制器，也能完成字体渲染。

另外，它的每个字符只需要25个像素就能显示，而即使 384x288 显示屏也有11万像素。

除了 5x5 字体，还有 3x5 字体（宽3像素，高5像素）和 4x5 字体（宽4像素，高5像素），但是它们的辨识效果都不好（下图）。

![](https://cdn.beekka.com/blogimg/asset/202604/bg2026042310.webp)

![](https://cdn.beekka.com/blogimg/asset/202604/bg2026042311.webp)

2、[里海石油城](https://www.cnn.com/2024/11/06/climate/oil-rocks-neft-daslari-caspian-sea-city/index.html)

里海是世界最大湖泊，面积相当于云南省。

上个世纪中期，里海发现了石油。当时的苏联就开始在湖面上建设石油平台，距离岸边有60英里，乘坐6个小时的渡轮才能到达。

最多的时候，共有约320个生产基地，包含2,000口井，通过100多英里的桥梁连接起来。

![](https://cdn.beekka.com/blogimg/asset/202411/bg2024111007.webp)

那时，5000多人生活在这些平台上，形成了一个难以置信的水上城市，所有住宅楼都是建在水上。

![](https://cdn.beekka.com/blogimg/asset/202411/bg2024111008.webp)

随着油田的枯竭和油价的波动，这座石油城的产量已经大幅下降，人们大多离开，整个平台年久失修，垮塌就是时间问题。

![](https://cdn.beekka.com/blogimg/asset/202411/bg2024111009.webp)

## 言论

1、

美国鞋类生产商 Allbirds 宣布转型为 AI 公司，股价一天暴涨了5倍。

这让人想起2017年，美国一家名为“长岛冰茶”的饮料企业，宣布转型为区块链公司，卖柠檬茶的同时，探索区块链的投资机会，股价也是暴涨。后来，它的区块链业务还没建立好，就破产了。

-- [雅虎](https://gemini.google.com/app/1833a525ff94d60a)

2、

Figma 拥有近 2000 名员工（当然并非所有员工都从事产品开发），而 Anthropic 新推出的 Claude Design 的开发团队，我甚至怀疑是否超过10个人。

-- [《Figma 的困境》](https://finance.yahoo.com/quote/FIG/)，本文评论 Claude Design 对 Figma 造成重大打击，在 AI 的开发速度和开发成本面前，传统软件不堪一击。

3、

我对未来世界的憧憬是，她或许不那样充满未来感，反而更像田园牧歌。我们可以回归传统的生活形态，同时又不放弃新技术带来的便利，几乎无需再去看屏幕或触碰屏幕。

-- [jsomers.net](https://jsomers.net/blog/the-paper-computer)

4、

每一种文化都会造就反映其最深层焦虑的英雄。

硅谷最焦虑的，就是增长停滞，无法创造出大受市场欢迎的新产品，所以大肆宣传“英雄开发者”：他们能在午夜发布新功能，凭借着咖啡因带来的强大意志力，将白板上的涂鸦变成价值数十亿美元的独角兽企业。

-- [《古典维护者的挽歌》](https://www.joanwestenberg.com/the-rime-of-the-ancient-maintainer/)

## 往年回顾

[冷启动的破解之道](https://www.ruanyifeng.com/blog/2025/05/weekly-issue-347.html)（#347）

[饮水鸟玩具](https://www.ruanyifeng.com/blog/2024/04/weekly-issue-297.html)（#297）

[扎克伯格的裁员信](https://www.ruanyifeng.com/blog/2023/03/weekly-issue-247.html)（#247）

[如果这个世界有快乐机](https://www.ruanyifeng.com/blog/2022/03/weekly-issue-197.html)（#197）

（完）


