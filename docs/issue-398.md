# 科技爱好者周刊（第 398 期）：Token 费用难以负担

这里记录每周值得分享的科技内容，周五发布。

本杂志[开源](https://github.com/ruanyf/weekly)，欢迎[投稿](https://github.com/ruanyf/weekly/issues)。另有[《谁在招人》](https://github.com/ruanyf/weekly/issues/9815)服务，发布程序员招聘信息。合作请[邮件联系](mailto:yifeng.ruan@gmail.com)（yifeng.ruan@gmail.com）。

## 封面图

![](https://cdn.beekka.com/blogimg/asset/202605/bg2026052803.webp)

去年开放的浙江省安吉县的安吉文化艺术中心。当地盛产竹子，屋顶都采用竹叶造型。（[daemin_kg@ig](https://www.instagram.com/p/DYKVQBKiBG1/?img_index=1)）

## Token 费用难以负担

上周，OpenClaw（龙虾）的创始人彼得·斯坦伯格（Peter Steinberger）贴出了自己的 [Token 使用量](https://x.com/steipete/status/2055346265869721905)。

他不是故意炫耀，自己用了多少 Token，而是为了介绍工具软件 [CodexBar](https://codexbar.app/)。这个菜单栏小工具可以统计你的 Token 使用量，计算出对应的费用。

大家猜猜看，他用了多少 Token？

![](https://cdn.beekka.com/blogimg/asset/202605/bg2026051701.webp)

根据截图，他一个月发出了760万个请求，消耗的 Token 数量为6030亿。根据预设的费率，这些 Token 价值130万美元！

也就是说，**他的 AI 编程平均每天要花费4万多美元**。

当然，这个数字不是真实支出。因为他是 OpenAI 公司的员工，可以无限量免费使用公司的 Token。所以，这些钱并不是真实的支出。

但是，他的 Token 使用量是真的。绝大部分公司需要外购 Token，大家可以用他的例子计算一下，如果一个程序员每月用掉几千亿、甚至上万亿的 Token，公司要出多少钱？

他一个人一个月130万美元，相当于近900万人民币，**一年下来超过1亿人民币！** 这就是放开使用顶级模型，公司要支付的费用。

如果改用便宜的模型，国内最便宜的开源模型，价格大约是国外旗舰模型的1/30到1/50，那么一年就是200万～300万人民币。

结论就是，**如果放开不限量使用，一个程序员一年最少会花掉两三百万人民币的 Token 费用**。要是使用美国的旗舰模型，费用会快速上涨到几千万甚至上亿人民币。

公司想要降低成本，有两个方法：一是购买包月套餐，但是大项目不够用；二是自己架设开源模型，省掉外购的费用，但是硬件费用不便宜，而且最强的模型目前是不开源的。

权衡下来，我猜想，**公司几乎肯定会设置限制，不允许程序员无限量使用外部模型**。那样的话，巨额的 Token 费用难以承受。程序员的工资已经不低了，再加上每人每年至少几百万人民币的 Token 费用，公司的开发成本会爆炸的。

大家可以说说，有没有公司对程序员提供外部模型无限量 API 调用？我是没有听说过。

事实上，因为 Token 费用太高，公司收紧 AI 编程的例子，我倒是知道几个。

比如，网约车巨头 [Uber](https://www.forbes.com/sites/janakirammsv/2026/05/17/uber-burns-its-2026-ai-budget-in-four-months-on-claude-code/) 今年头四个月就花完了全年34亿美元的 AI 预算，不得不限制使用 AI 了。

![](https://cdn.beekka.com/blogimg/asset/202605/bg2026052405.webp)

再比如，[微软](https://aiweekly.co/alerts/microsoft-drops-claude-code-after-budget-overrun)也因为费用超标，放弃了 Claude Code，改用自家托管的 OpenAI 模型。

![](https://cdn.beekka.com/blogimg/asset/202605/bg2026052406.webp)

如果 Uber 和微软这样的巨头，都承受不了巨额的 Token 费用，那大概就没有公司能够承受了。

总之，AI 编程虽然听起来很美好，但是看到账单的那一刻，公司就会清醒：**AI 编程比真人程序员昂贵太多了**。

所以，AI 会替代程序员吗？对于有大型软件项目的公司，我认为不会大规模替代，因为成本放在那里。至少现阶段如此，如果未来 Token 费用大幅下降，那就难说了。

## 漏洞赏金计划的终结

[Turso](https://turso.tech) 是一个开源的云数据库，代码放在 GitHub。

![](https://cdn.beekka.com/blogimg/asset/202605/bg2026052804.webp)

它有一个赏金计划，给予发现漏洞的人1000美元奖金。本来运作得挺好，自从大模型可以用来发现漏洞以后，事情就不对了。

它的仓库的 PR 页面（外部代码提交）已经变成下面这样。

![](https://cdn.beekka.com/blogimg/asset/202605/bg2026051606.webp)

提交漏洞的人泛滥成灾，都是冲着奖金而来。他们所谓的漏洞，往往是故意注入垃圾字节，或者是配置错误，自然就是无法运行。

开发团队精疲力尽，不胜其扰。有时候，关掉这些 PR，提交者还会跟你争论，用 AI 生成的[长篇大论](https://github.com/tursodatabase/turso/pull/6257#issuecomment-4216531987)告诉开发团队“我没错，你们搞错了”，令人啼笑皆非。

![](https://cdn.beekka.com/blogimg/asset/202605/bg2026051607.webp)

最终，开发团队只能宣布，[终止赏金计划](https://turso.tech/blog/the-wonders-of-ai)，提交漏洞和 PR 都不会有奖金。

> 炮制垃圾内容的人可能只需要一分钟就能提交，但我们却要花费数小时来阅读、理解和回应。而且，这类内容的生成速度几乎是无限的。
>
> 虽然可以设置自动化脚本来过滤 PR，但由于涉及到奖金，提交 AI 代码的动机实在太大，总是有人无休止地争论、重新打开同一个 PR 等等。

这件事告诉我们，传统的漏洞赏金计划在 AI 时代大概率行不通。以后，发现漏洞很可能没有奖金。不知道这会不会导致线上攻击行为的增加。

## 科技动态

1、[体重与气温](https://news.yale.edu/2026/05/20/warmer-temps-heavier-owl-monkeys-climate-linked-weight-gain-primates)

一支耶鲁大学的考察队，发现阿根廷的猫头鹰猴比25年前更重。2023年的猴子平均体重比1999年重了50克，相当于增加了4%。

![](https://cdn.beekka.com/blogimg/asset/202605/bg2026052103.webp)

科学家认为，这与气温上升有关。1999年阿根廷的日平均气温为22.2摄氏度，2023年上升到了23.8摄氏度。

气温上升使得猴子减少用于体温调节的能量消耗，从而有额外的卡路里来增重。

该理论看上去也适用于人类，也就是说，全球变暖可能让胖子变多。

2、[人工蛋壳](https://www.nationalgeographic.com/science/article/artificial-egg-colossal-chickens-moa-dodo)

美国生物科技公司 Colossal 制造了“人工蛋壳”，已经孵化了26只小鸡。

![](https://cdn.beekka.com/blogimg/asset/202605/bg2026052403.webp)

它的外壳是一个坚固的六边形杯状结构，起到支撑作用；内壁是一层半透膜材料，能让氧气轻松通过，又能保持水分。

科研人员将小鸡胚胎放入“人工蛋壳”，在孵化箱中成功孵化了小鸡。

![](https://cdn.beekka.com/blogimg/asset/202605/bg2026052404.webp)

上图中，蛋壳上方是透明的，可以观察内部情况。

Colossal 公司制造这个装置的目的，是为了复活已经灭绝的渡渡鸟。否则，就算做出了渡渡鸟的克隆胚胎，还是要放在其他动物（比如鸵鸟）体内进行繁殖。

3、[艺术抗议](https://p26.bg/news/dupkite-po-ul-chiprovci-v-sofiya-se-prevarnaha-v-ulichna-galeriya-snimki-4310news.html)

保加利亚首都索非亚，马路上有一个小坑，市政府长期不修补。

两个艺术家感到不满，就在这个小坑上涂鸦，画了一个生气的鬼脸。

![](https://cdn.beekka.com/blogimg/asset/202605/bg2026051702.webp)

鲜艳的图案让司机和行人更容易注意到，减少了事故。同时，也引起了大众的兴趣，新闻媒体纷纷报道，小坑很快就修补了。

![](https://cdn.beekka.com/blogimg/asset/202605/bg2026051703.webp)

这件事告诉我们，不满还是要表达出来，可以推动解决，并且采用艺术形式表达，效果会比较好，容易让人接受。

## 文章

1、[内存涨价的原因](https://davidoks.blog/p/ai-is-killing-the-cheap-smartphone)（英文）

![](https://cdn.beekka.com/blogimg/asset/202605/bg2026052301.webp)

内存厂商生产三种内存：DDR（桌面电脑用的内存）、LPDDR（手机用的低功率内存）、HBM（AI 机房用的高带宽内存）。

由于 AI 公司对 HBM 的需求激增，开出高价，内存厂商的生产能力转向 HBM，减少了 DDR 和 LPDDR 的产量，导致消费电子设备的内存短缺，价格上涨。 

2、[我开始研究 Reticulum](https://www.jonaharagon.com/posts/im-getting-into-mesh-networks-meshtastic-meshcore-and-reticulum/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202605/bg2026052801.webp)

Reticulum 是一个自己组网的项目，可以在各种物理网络（WiFi、有线网、无线电、LoRa 等）之上架设虚拟网络，本文是一个简介。

3、[预热你的 MacBook](https://z3ugma.github.io/2019/11/18/warm-up-your-macbook/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202605/bg2026052802.webp)

一篇很冷的文章，Mac 系统有一个 stress 命令，用来让 CPU 运行负载。本文提出可以用这个命令，让冬天冰冷的 MacBook 金属外壳变热。

4、[为什么我反对布尔逻辑](https://abuseofnotation.github.io/boolean-thinking/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202605/bg2026052302.webp)

一篇偏哲学思辨的文章。布尔逻辑只有两个值（真和伪），作者认为，这会导致非黑即白的二元思维。真实世界是非布尔逻辑，充满了不确定性和不唯一性。

5、[为什么中心极限定理无处不在？](https://www.quantamagazine.org/the-math-that-explains-why-bell-curves-are-everywhere-20260316/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202603/bg2026031915.webp)

一篇科普文章，介绍中心极限定理的历史和含义。这个定理发现了样本平均值的分布规律，所以极其重要。

样本平均值满足正态分布，但有两个注意点，一是每次的样本必须相互独立，二是有时异常值比平均值更重要。

## 工具

1、[DOCX Editor](https://github.com/eigenpal/docx-editor)

![](https://cdn.beekka.com/blogimg/asset/202605/bg2026052202.webp)

开源的 docx 文件的网页编辑器，所见即所得。

2、[DvnIP](https://dynip.dev/)

![](https://cdn.beekka.com/blogimg/asset/202605/bg2026052601.webp)

动态 IP 服务，个人用户免费。

3、[Graphite](https://editor.graphite.rs/)

![](https://cdn.beekka.com/blogimg/asset/202410/bg2024101704.webp)

一个矢量作图的 Web 应用，[代码开源](https://github.com/GraphiteEditor/Graphite)。

4、[Hindsight](https://github.com/chaosprint/hindsight)

![](https://cdn.beekka.com/blogimg/asset/202601/bg2026010203.webp)

一个命令行工具，扫描本地的 git 仓库，生成 GitHub 风格的个人提交热力图。

5、[NyaTerm](https://github.com/nyakang/nyaterm)

![](https://cdn.beekka.com/blogimg/asset/202605/bg2026052201.webp)

跨平台的桌面应用，将 SSH、终端会话、远程文件、认证信息、端口转发和配置备份放在同一个工作区。（[@nyakang](https://github.com/ruanyf/weekly/issues/10021) 投稿）

6、[diving-rs](https://github.com/wagoodman/dive)

一个命令行工具，展示 docker 镜像内部的每一层文件列表。（[@vicanso](https://github.com/ruanyf/weekly/issues/10037) 投稿）

7、[CanvasCast](https://github.com/nine19een/CanvasCast)

![](https://cdn.beekka.com/blogimg/asset/202605/bg2026052401.webp)

白板录制的网页应用，在浏览器中直接绘制、演示、录制白板风格的内容。（[@Hao4Wang](https://github.com/ruanyf/weekly/issues/10055) 投稿）

8、[Echo Loop](https://github.com/echo-loop/Echo-Loop)

![](https://cdn.beekka.com/blogimg/asset/202605/bg2026052704.webp)

开源的英语听说训练 App。（[@echo-loop](https://github.com/ruanyf/weekly/issues/10082) 投稿）

9、[Vue TUI](https://github.com/Simon-He95/vue-tui)

![](https://cdn.beekka.com/blogimg/asset/202605/bg2026052705.webp)

基于 Vue 的终端组件库，可以用来开发 agent。（[@Simon-He95](https://github.com/ruanyf/weekly/issues/10083) 投稿）

10、[witr](https://github.com/pranshuparmar/witr)

![](https://cdn.beekka.com/blogimg/asset/202601/bg2026010313.webp)

命令行工具，显示当前每个进程对应什么命令，可以用命令名或端口号查询。

## AI 相关

1、[DeepSeek Reasonix](https://github.com/esengine/DeepSeek-Reasonix)

专为 DeepSeek 设计的终端 AI 编程 agent，充分利用了缓存机制，可以极大降低费用，只支持 DeepSeek 的付费 API。

2、[FunASR](https://github.com/modelscope/FunASR)

![](https://cdn.beekka.com/blogimg/asset/202605/bg2026052402.webp)

阿里通义实验室开源的工业级语音识别工具包，最近推出了桌面语音输入法工具。（[@LauraGPT](https://github.com/ruanyf/weekly/issues/10056) 投稿）

另有两个基于它的衍生工具。

- [FunClip](https://github.com/modelscope/FunClip)：智能视频裁剪工具。输入关键词或句子，自动定位视频中对应的片段，一键裁剪导出。（[@LauraGPT](https://github.com/ruanyf/weekly/issues/10057) 投稿）
- [SenseVoice](https://github.com/FunAudioLLM/SenseVoice)：语音理解工具，可以识别语音、语种、情感、声音事件。（[@LauraGPT](https://github.com/ruanyf/weekly/issues/10058) 投稿）

3、[Codex Mate](https://github.com/SakuraByteCore/codexmate)

![](https://cdn.beekka.com/blogimg/asset/202605/bg2026052706.webp)

一站式本地 AI 编程智能体管理面板。统一管理 Codex、Claude Code、Gemini CLI、CodeBuddy、OpenClaw。（[@ymkiux](https://github.com/ruanyf/weekly/issues/10088) 投稿）

## 资源

1、[微积分其实很容易](https://github.com/KeyAI/calculusmadeeasy-zh)

![](https://cdn.beekka.com/blogimg/asset/202605/bg2026052407.webp)

著名教材《Calculus Made Easy》非官方中文版，一本易读的微积分入门小书，可以[在线阅读](https://keen-ginger-62hw.here.now/)。（[@KeyAI](https://github.com/ruanyf/weekly/issues/10065) 投稿）

2、[小西天 3D 全景](https://funes.world/apps/the-hanging-sculptures-of-the-xiaoxitian)

![](https://cdn.beekka.com/blogimg/asset/202605/bg2026052104.webp)

山西省隰县小西天的网页 3D 全景导览。

3、[C 语言小测验](https://stefansf.de/c-quiz/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202605/bg2026052304.webp)

一组 C 语言的语法选择题。

## 图片

1、[袖珍计算器博物馆](https://www.calculators.de/)

德国有一个网上博物馆，专门收集各种袖珍计算器，里面有一些奇特的电子计算器。

![](https://cdn.beekka.com/blogimg/asset/202605/bg2026052205.webp)

![](https://cdn.beekka.com/blogimg/asset/202605/bg2026052206.webp)

![](https://cdn.beekka.com/blogimg/asset/202605/bg2026052207.webp)

![](https://cdn.beekka.com/blogimg/asset/202605/bg2026052204.webp)

![](https://cdn.beekka.com/blogimg/asset/202605/bg2026052203.webp)

## 文摘

1、[行为经济学诱饵](https://www.sina.cn/news/detail/5279286413232198.html)

行为经济学家丹·艾瑞里，有一天闲逛《经济学人》官网。

他在订阅页面上，看到了三个选项：

> A. 电子版——59美元。
> B. 纸质版——125美元。
> C. 纸质版＋电子版——125美元。

他愣住了。

B 和 C，价格一模一样。一个只给纸质版，一个纸质版加电子版全送。谁会选 B？

傻子都不会啊。但艾瑞里没有笑，马上意识到这是一个绝妙的设计。

他拿着这三个选项，走进了麻省理工学院（MIT）的课堂，做了一个实验，让100个学生对这三个选项进行选择。

结果：16%的学生选了 A，0%选了B，84%选了C。订阅费总收入：11,444美元。

跟预想的一样，没有一个人选 B。

然后艾瑞里做了一件小事：他把 B 删了，只留 A 和 C。

逻辑上，一个从来没人选的东西，删掉它不应该影响任何结果，对吧？

结果出来了：68%选了 A，32%选了 C。订阅费总收入暴跌到8,012美元。

这就是选项 B 的作用。它从来没人选，自己一份都没卖出去，却在暗中帮旁边的最贵的 C 套餐，多卖了52%。

仅仅因为它的"存在"，就让杂志社多赚了3,432美元。这就是行为经济学中著名的"诱饵效应"。

原理很简单：人类不擅长判断一个东西的“绝对价值”，但极其擅长做“相对比较”。

当只有59美元和125美元两个选项时，你的大脑在比较"便宜 vs 贵"，大多数人选便宜的。

但当“125美元只买纸质版”这个诱饵一出现，你的大脑就不比较 A 和 C 了，它开始比较 B 和 C。

同样的价格，C 多了一个电子版。天哪，这不是白捡的吗！于是你心满意足地选了 C。

浑然不知自己刚刚多花了66美元——买了一本可能一辈子都不会翻开的纸质杂志。

这个套路如今无处不在。咖啡店的中杯定价，只是为了让你觉得大杯“更划算”。视频网站的月卡，贵到让你觉得年卡“不买就亏”。

手机发布会上，永远有一款“高价低配”机型，它唯一的使命，就是让旁边那款旗舰机型看起来“性价比极高”。

当你觉得自己占了便宜的时候，多半是有人精心摆放了一个诱饵，让你心甘情愿走进了更贵的那扇门。

那个没人选的选项，才是全场真正的主角。

## 言论

1、

很多人看不到 AI 改变世界的潜力，原因在于他们不明白一切事物都是算法。

具体来说，他们没有意识到，社会和公司只不过是一系列算法的集合。

-- [《公司不过是算法图而已》](https://danielmiessler.com/blog/companies-graph-of-algorithms)

2、

为了应对“软件包投毒”，现在的流行做法是，新发布的软件包设置一个冷却时间，普通用户需要过了“冷却期”才能安装这个包。

这种机制可以有效抵御供应链攻击，但它有一个棘手的问题：它依赖于其他人先安装这个包。到哪里去找这些人，第一时间试用每个新发布的包呢？

-- [《软件包应该分阶段推出》](https://illegalcode.net/rfcs/phased_rollouts.html)

3、

AI 可以一对一的定制化教育，效果更好，大学对很多人将变得没有价值。

-- [萨姆·奥特曼](https://fortune.com/2025/07/24/sam-altman-college-not-working-great-stanford-dropout/)（Sam Altman），OpenAI 公司首席执行官

4、

那些从未编写过一行代码的非技术型中层管理人员，现在感觉通往成功的最大障碍已经消失。

他们再也不用应付那些烦人的程序员了，不需要程序员就能更改网页样式和用户体验，自己实现某些功能。而且，AI 不会抱怨，不会组织工会，也不会抗议，只会服从任何命令。

-- [《AI 将把我们引向何方》](https://pop.rdi.sh/where-does-next-token-prediction-leave-us/)

5、

我喜欢 PHP 的一个理由是，它的变量使用美元符号（$）识别，这会提醒你，你使用它是为了什么。

-- [《PHP 的奇特之处》](https://flowtwo.io/post/php's-oddities)

## 往年回顾

[GitHub Issues（几乎）是最好的笔记应用](https://www.ruanyifeng.com/blog/2025/06/weekly-issue-351.html)（#351）

[OpenAI 的图书馆工位](https://www.ruanyifeng.com/blog/2024/05/weekly-issue-301.html)（#301）

[国产单板机值得推荐](https://www.ruanyifeng.com/blog/2023/04/weekly-issue-251.html)（#251）

[中国需要成立半导体部](https://www.ruanyifeng.com/blog/2022/04/weekly-issue-201.html)（#201）

（完）

