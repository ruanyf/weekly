# 科技爱好者周刊（第 387 期）：你是领先的

这里记录每周值得分享的科技内容，周五发布。

本杂志[开源](https://github.com/ruanyf/weekly)，欢迎[投稿](https://github.com/ruanyf/weekly/issues)。另有[《谁在招人》](https://github.com/ruanyf/weekly/issues/9088)服务，发布程序员招聘信息。合作请[邮件联系](mailto:yifeng.ruan@gmail.com)（yifeng.ruan@gmail.com）。

## 封面图

![](https://cdn.beekka.com/blogimg/asset/202603/bg2026030503.webp)

福州元宵节灯会的福鱼灯，一个25米的机械装置，漂浮在空中。（[via](http://fj.people.com.cn/n2/2026/0304/c181466-41515232.html)）

## 你是领先的

世界总人口现在是81亿，如果画成一个[方块图](https://www.reddit.com/r/vibecoding/comments/1rbqldk/youre_early/)，每个方块代表320万人。

![](https://cdn.beekka.com/blogimg/asset/202602/bg2026022615.webp)

68.8亿人还从没用过 AI（灰色方块），占84%。

13.8亿人跟 AI 有过对话（绿色方块），占16%。

1500万～2500万人付费订阅了 AI 服务（黄色方块），占0.3%。

200万～500万人使用 AI 生成了自己的编程项目（红色方块），占0.04%。

正在阅读这份周刊的你，如果是关注 AI 动态，用过 AI 生成代码，就已经领先全世界99%的人了。

## OpenClaw 的安全

眼下全世界最火爆的软件，一定属于个人 AI 助手 [OpenClaw](https://openclaw.ai/) 。

![](https://cdn.beekka.com/blogimg/asset/202603/bg2026030302.webp)

火爆到什么程度？

四个月的时间，它在 GitHub 得到了25万颗星星，超过了 React，成为有史以来[星星最多的软件项目](https://www.star-history.com/blog/openclaw-surpasses-react-most-starred-software)。

要知道这些星星，React 用了13年，它只用4个月。

![](https://cdn.beekka.com/blogimg/asset/202603/bg2026030303.webp)

上图中，垂直上升的红线就是 OpenClaw，太夸张了。

OpenClaw 的作用，就是通过自然语言控制电脑，完成自动化操作。以前，你需要多种工具和专业技能，才能达到同样的效果。现在只要输入文字或者口述，这不仅有用，也很有趣。

它基本上就是苹果智能助理 Siri 应该有的样子。对于普通用户，这才是与电脑交互的正确方式。可以预料，几年之内，这类工具将会普及到每个人的手机。

但是，它有一个问题：不够安全。

OpenClaw 有40多万行代码、53个配置文件、超过70项依赖，在短短几周内由 AI 生成，没有任何正规的审查流程。

它需要使用你的个人密钥，而且权限极大，完全自主运行。有人把自己的 Apple ID、Gmail 邮箱都授权给它，不敢想象啊，万一出错，会是怎样的后果。

它的防护措施很少，原始设计根本没有，一不小心，还可能暴露在公网上。

![](https://cdn.beekka.com/blogimg/asset/202603/bg2026030301.webp)

有人做了一个 [OpenClaw 暴露看板](https://openclaw.allegro.earth/)（OpenClaw Exposure Watchboard），收集了所有暴露到公网的 OpenClaw 实例（上图）。你知道现在有多少台？截止到昨天是258305。

你随便选一台机器点进去，就能看到 OpenClaw 控制面板（下图）。

![](https://cdn.beekka.com/blogimg/asset/202603/bg2026030304.webp)

那个架设的人，以为正在自动化自己的电脑，哪里料到向全世界敞开了大门。

如果你要用 OpenClaw，至少要安装在虚拟机或者专用的物理机，否则就自求多福吧。

## 科技动态

1、[二维码纸带](https://www.theresistornetwork.com/2021/03/qrtape-audio-playback-from-paper-tape.html)

一个国外发明家突发奇想，能不能把声音保存在纸带上？

![](https://cdn.beekka.com/blogimg/asset/202602/bg2026022303.webp)

他就把每秒钟的声音，编码后保存成一个二维码，然后把所有二维码依次打印在纸带上。

他又做了一个播放器（下图），外面是纸板，里面是一个传动装置 + 摄像头。

![](https://cdn.beekka.com/blogimg/asset/202602/bg2026022304.webp)

播放器会把纸带每秒向前移一格，摄像头识别出二维码的数据，还原成声音，播放出来。

![](https://cdn.beekka.com/blogimg/asset/202602/bg2026022305.webp)

![](https://cdn.beekka.com/blogimg/asset/202602/bg2026022306.webp)

2、[韩国政府丢失加密货币](https://www.bleepingcomputer.com/news/security/48m-in-crypto-stolen-after-korean-tax-agency-exposes-wallet-seed/)

韩国国税厅抓了一批逃税者，没收了他们的加密货币。

执法部门在网上公布了赃物照片（下图），都是本次行动的战利品。

![](https://cdn.beekka.com/blogimg/asset/202603/bg2026030202.webp)

照片是高清晰度的，里面有一个加密货币的硬件钱包，还有一张纸条，上面手写了钱包的恢复密钥。

结果可想而知，加密货币顿时就被转走了，价值440万美元，大概率找不回来。

这件事凸显了，政府持有加密货币的风险极大，任何一个环节泄漏钱包密码，就全完了。

3、[霸王龙的行走方式](https://phys.org/news/2026-02-flatfooted-lumbering-rex-tiptoes.html)

霸王龙是一种凶猛的巨型恐龙，白垩纪的王者，也是顶级掠食者。

![](https://cdn.beekka.com/blogimg/asset/202602/bg2026022803.webp)

霸王龙的未解之谜非常多，科学家至今不理解，为什么它的前肢变得又短又小。

最近，科学家又发现了它的一个特点，这么庞大的动物居然是踮着脚的，也就是只用脚尖走路和奔跑。

![](https://cdn.beekka.com/blogimg/asset/202602/bg2026022804.webp)

原因是霸王龙的脚印化石显示（下图），脚趾部分的痕迹最深，表明这部分承受的重量最大。

![](https://cdn.beekka.com/blogimg/asset/202602/bg2026022805.webp)

踮着脚尖的原因可能是，这样能使霸王龙提高速度，有利于捕食。

## 文章

1、[增强 AI 模型的一个技巧](https://simonwillison.net/guides/agentic-engineering-patterns/hoard-things-you-know-how-to-do/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202602/bg2026022702.webp)

AI 模型不会做某件事，或者做得不好，怎么办？

著名开发者 Simon Willison 介绍解决方法：你去找这方面的介绍文章和可运行的代码示例，然后放入上下文，让模型参考该示例，它就能学会解决类似的问题。

所以，你要囤积自己懂得如何做的事情，模型学会后，就能自己去做这些事。

2、[我做了一个 AI 版的自己](https://luolei.org/luolei-ai)（中文）

![](https://cdn.beekka.com/blogimg/asset/202603/bg2026030307.webp)

作者记录了，如何将自己十几年的博客、视频和社交媒体，训练成一个数字版的个人分身，对外提供聊天服务。他分别用6个模型训练，就可以6个版本的分身。（[@foru17](https://github.com/ruanyf/weekly/issues/9118) 投稿）

3、[scp 命令的一个注意点](https://sny.sh/hypha/blog/scp)（英文）

![](https://cdn.beekka.com/blogimg/asset/202602/bg2026022802.webp)

scp 命令一般用来向服务器传送文件，它是带权限拷贝，某些情况下可能会意外禁掉 ssh 远程登入服务器。

4、[Nano Banana 2 与 Seedream 5.0 Lite 对比](https://decrypt.co/359700/image-ai-leap-google-bytedances-latest-models)（英文）

![](https://cdn.beekka.com/blogimg/asset/202603/bg2026030405.webp)

本文比较了目前最先进的两个图像生成模型，谁的效果更好，谷歌的 Nano Banana 2 还是字节的 Seedream 5.0 lite。

5、[JavaScript 的四种遍历](https://waspdev.com/articles/2026-01-01/javascript-for-of-loops-are-actually-fast#javascript_s_for_of_loops_are_actually_fast)（英文）

![](https://cdn.beekka.com/blogimg/asset/202601/bg2026011012.webp)

本文比较了 JavaScript 的四种数组遍历，结论是 for i++ 速度最快，for-of 其次，forEach 较慢，for-in 应该避免使用。

## 工具

1、[yj_nearbyglasses](https://github.com/yjeanrenaud/yj_nearbyglasses)

![](https://cdn.beekka.com/blogimg/asset/202603/bg2026030402.webp)

开源的安卓应用，检查你的周围有没有智能眼镜。

2、[explain-my-curl](https://github.com/akgitrepos/explain-my-curl)

![](https://cdn.beekka.com/blogimg/asset/202603/bg2026030403.webp)

curl 命令的一个终端界面，可以解释命令的运行结果。

3、[Pocket ID](https://github.com/pocket-id/pocket-id)

![](https://cdn.beekka.com/blogimg/asset/202603/bg2026030501.webp)

一个需要自搭建的 OIDC 身份认证服务，支持 Passkey 无密码登录，设置参考[这篇文章](https://runtimeterror.dev/pocket-id-easy-passkey-authentication/)。

4、[R2 Web](https://github.com/vikiboss/r2-web)

![](https://cdn.beekka.com/blogimg/asset/202602/bg2026022703.webp)

文件存储服务 Cloudflare R2 的 Web 客户端，可以上传/管理文件。（[@vikiboss](https://github.com/ruanyf/weekly/issues/9081) 投稿）

5、[Voxt](https://github.com/hehehai/voxt)

macOS 应用，用于语音转文本、语音的实时翻译。（[@hehehai](https://github.com/ruanyf/weekly/issues/9091) 投稿）

6、[Cutia](https://github.com/msgbyte/cutia)

![](https://cdn.beekka.com/blogimg/asset/202603/bg2026030103.webp)

开源的网页视频编辑器，网页版的 [CapCut](https://www.capcut.com/) 替代品，试用 [Demo](https://cutia.msgbyte.com/)。（[@moonrailgun](https://github.com/ruanyf/weekly/issues/9092) 投稿）

7、[Gorse](https://github.com/gorse-io/gorse)

![](https://cdn.beekka.com/blogimg/asset/202603/bg2026030201.webp)

开源的推荐引擎，会自动对数据进行训练，为每个用户生成推荐，方便接入各种在线服务。（[@zhenghaoz](https://github.com/ruanyf/weekly/issues/9098) 投稿）

8、[vscode-stylelint-plus](https://github.com/hex-ci/vscode-stylelint-plus)

一个 VSCode 插件，对 CSS、SCSS、Less 等进行代码检查。（[@hex-ci](https://github.com/ruanyf/weekly/issues/9111) 投稿）

9、[OneDroid](https://qingge.tech/onedroid/web/)

![](https://cdn.beekka.com/blogimg/asset/202603/bg2026030401.webp)

开源的安卓应用，提供多种实用工具，来管理你的安卓设备。（[@QingGeTech](https://github.com/ruanyf/weekly/issues/9126) 投稿）

10、[NoteCalc](https://github.com/2234839/TsFullStack)

![](https://cdn.beekka.com/blogimg/asset/202603/bg2026030502.webp)

所见即所得实时计算笔记本。（[@2234839](https://github.com/ruanyf/weekly/issues/9139) 投稿）

## AI 相关

1、[no-agents.md](https://codeberg.org/rossabaker/no-agents.md)

如果你不想自己的仓库被大模型抓取训练，可以加入它提供的 `AGENTS.md` 和 `CLAUDE.md`。

2、[Skills Manager](https://github.com/xingkongliang/skills-manager)

![](https://cdn.beekka.com/blogimg/asset/202603/bg2026030207.webp)

一个 macOS 桌面应用，统一管理 Skill 文件，保存在目录 ~/.skills-manager 目录，然后一键同步到各种 AI 工具。（[@xingkongliang](https://github.com/ruanyf/weekly/issues/9109) 投稿）

另有一个同类的 [Skills Manager](https://github.com/Rito-w/skills-manager)（下图）。（[@Rito-w](https://github.com/ruanyf/weekly/issues/9129) 投稿）

![](https://cdn.beekka.com/blogimg/asset/202603/bg2026030406.webp)

3、[AGI Agent](https://github.com/agi-hub/AGIAgent)

![](https://cdn.beekka.com/blogimg/asset/202603/bg2026030306.webp)

开源的个人 AI 助手，OpenClaw 替代品，适配了国产大模型。（[@agi-hub](https://github.com/ruanyf/weekly/issues/9115) 投稿）

4、[ArXiv Daily Researcher](https://github.com/yzr278892/arxiv-daily-researcher)

一个 Python 应用，从 ArXiv 与顶级学术期刊获取最新论文，可配置关键词进行筛选，生成专业报告，多渠道推送。（[@yzr278892](https://github.com/ruanyf/weekly/issues/9119) 投稿）

5、[魔方简历](https://github.com/JOYCEQL/magic-resume)（Magic Resume）

![](https://cdn.beekka.com/blogimg/asset/202603/bg2026030206.webp)

基于 Web 的在线简历编辑器，可以集成多种大模型 AI 能力。（[@JOYCEQL](https://github.com/ruanyf/weekly/issues/9104) 投稿）

## 资源

1、[MicroGPT 交互式讲解](https://growingswe.com/blog/microgpt)（英文）

![](https://cdn.beekka.com/blogimg/asset/202603/bg2026030203.webp)

MicroGPT 是一个200行的 Python 脚本 ，用来解释 ChatGPT 的原理。本文使用互动式动画分析 MicroGPT，适合初学者了解大模型算法。

2、[2026年全国樱花花期预测](https://rogerzhu.github.io/yinghua-map/)

![](https://cdn.beekka.com/blogimg/asset/202603/bg2026030305.webp)

预报全国各地樱花开花的日期。（[@rogerzhu](https://github.com/ruanyf/weekly/issues/9114) 投稿）

3、[Now I Get It!](https://nowigetit.us/)

![](https://cdn.beekka.com/blogimg/asset/202603/bg2026030101.webp)

上传一个科学论文 PDF 文件，该网站将其转成一个互动式网页（上图），用浅显英语来解释论文，目前是免费服务。

## 图片

1、[苹果广告30年](https://www.instagram.com/p/DHUbY9aSqK5/)

1997年的苹果广告，主角是爱因斯坦。

![](https://cdn.beekka.com/blogimg/asset/202503/bg2025032011.webp)

2025年的苹果广告，主角是一只青蛙。

![](https://cdn.beekka.com/blogimg/asset/202503/bg2025032012.webp)

相隔30年，很难想象，今天的苹果公司还会用爱因斯坦来做广告。

相比上个世纪，人类社会已经大为娱乐化，不那么严肃和一本正经。

## 文摘

1、[老板在度假时用 WhatsApp 解雇了我](https://ginoz.bearblog.dev/my-boss-fired-me-over-whatsapp-while-he-was-on-vacation-in-honolulu/)

我在一家私营公司工作，老板就是创始人。

前一段时间，我把待办事项清单都清空了，无事可做。我就去问项目经理还有什么项目。整整两个星期，他都没有给我派活。

这是很奇怪的状况，我从没遇见过，突然就无事可干，而且已经持续了半个月。肯定哪里出问题了。

于是，我直接在 Slack 上给老板发消息，询问我这个月的任务。

几个小时过去了，没有回复。两天过去了，依然没有回复。

今天早上，我就改在 WhatsApp 上给他的私人账号发了条同样的消息。

他回复了，说他正在夏威夷度假，没看到 Slack。

然后，他写了一条长长的回复，告诉我被解雇了。

他说，我的部门是全公司成本最高的，而且上个月，公司第一次出现亏损，他现在不得不借钱来偿还房贷，削减成本是公司生存下去的唯一途径。

我震惊了，他一边在夏威夷度假，一边说这些话。

我本来很同情他，他努力挣扎着偿还房贷，还要拼尽全力维持公司运营，真的活得非常辛苦。要不是想到他还在度假，我简直要为自己向他索要工资而感到愧疚，我甚至乐意免费为他工作，以避免公司的亏损。

读到他的这些解雇我的理由后，我觉得很可笑，我居然给他写信，要他给我委派任务。

我后来才意识到，自己是在 WhatsApp 上被解雇的，而且只通过一条文字消息。我为他工作了四年，他解雇我的时候甚至连安排一次视频通话、面对面告诉我的勇气都没有。

我看清了，我的工作就是让他能还清房贷，为他的幸福和财富做贡献。而他不需要有同情心，也不需要有直视我眼睛来解雇我的勇气。

## 言论

1、

让我非常惊讶的是，人们最近突然开始做一些早就应该做的事情：

（1）撰写简洁、直截了当的文档，把它放在 AGENTS.md 文件里。

（2）实现非常有价值的工作流程，以技能或 MCP 服务器的形式暴露出来。

（3）改进测试和命令行工具的输出，使其带有更多信息。

-- [《AI=true 是反模式》](https://keleshev.com/ai-equals-true-is-an-anti-pattern)

2、

GitHub 最近频繁宕机，我认为原因并不是他们在运行 AI 生成的代码，而是用户在提交 AI 生成的代码，导致提交内容和频率远超以往，GitHub 不堪重负。

-- [Hacker News 读者](https://news.ycombinator.com/item?id=47238176)

3、

GitHub Star 曾经是一个很好的指标，直到人们逐渐意识到它确实是一个很好的指标。

-- [Hacker News 读者](https://news.ycombinator.com/item?id=47220006)

4、

有了 AI，工程师一个迭代可以做七个功能，晋升毫无难度。

-- [《当代码生成速度超过理解速度》](https://www.rockoder.com/beyondthecode/cognitive-debt-when-velocity-exceeds-comprehension/)

5、

吃掉大象只有一种方法：一口一口地吃。

-- [南非主教图图](https://www.huddleupgroup.com/post/one-bite-at-a-time)

## 往年回顾

[技术炒作三十年](https://www.ruanyifeng.com/blog/2025/03/weekly-issue-340.html)（#340）

[苹果头盔的最大问题](https://www.ruanyifeng.com/blog/2024/02/weekly-issue-290.html)（#290）

[教育年限可以缩短吗？](https://www.ruanyifeng.com/blog/2023/02/weekly-issue-240.html)（#240）

[产品化思维](https://www.ruanyifeng.com/blog/2021/12/weekly-issue-190.html)（#190）

（完）

