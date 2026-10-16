# 科技爱好者周刊（第 415 期）：3D 版《看不见的城市》

这里记录每周值得分享的科技内容，周五发布。

本杂志[开源](https://github.com/ruanyf/weekly)，欢迎[投稿](https://github.com/ruanyf/weekly/issues)。另有[《谁在招人》](https://github.com/ruanyf/weekly/issues/12009)服务，发布程序员招聘信息。合作请[邮件联系](mailto:yifeng.ruan@gmail.com)（yifeng.ruan@gmail.com）。

## 封面图

![](https://cdn.beekka.com/blogimg/asset/202610/bg2026101524.webp)

湖北咸宁梓山湖度假区的美术馆。（[via](https://www.instagram.com/p/DTbQ9FUDea-/)）

## 3D 版《看不见的城市》

意大利小说家卡尔维诺有一本著名的幻想小说《看不见的城市》。

![](https://cdn.beekka.com/blogimg/asset/202610/bg2026101516.webp)

小说讲述旅行家马可波罗，向年迈的元朝皇帝忽必烈介绍他旅行中经过的55座城市。

这些城市没有图片或模型，只有文字描述，所以叫做“看不见的城市”。比如，有一个城市叫做艾琳，马可波罗这样描述：

> “亮灯的时候，假如你站在高地边沿探身外望，看见的城市便是艾琳。透过澄澈的空气，它远远在你下面展开一片浅红。
> 
> 有些地方窗户排列较密，在暗淡的小巷里，灯火逐渐疏落，花园子里是浓稠的阴影，塔楼上有信号火光；如果晚上有雾，朦胧的光线会像吸满牛奶的海绵一样涨起来。”

有人想到，可以把这些描述输入 AI 模型，为这55个城市建立[可视化的 3D 版本](https://quesma.com/blog/invisible-cities-one-shot/)。他就用 GPT-6 Astra 和 Claude Opus 5.5 这两个模型进行尝试。

结果证明，Claude Opus 5.5 的实现（[交互版](https://p.migdal.pl/invisible-cities-opus-5.5/)，[代码](https://github.com/stared/invisible-cities-opus-5.5)）要比 GPT-6 Astra 的实现（[交互版](https://p.migdal.pl/invisible-cities-astra/)，[代码](https://github.com/stared/invisible-cities-astra)）好得多。

以艾琳为例，这是 GPT-6 Astra 的版本。

![](https://cdn.beekka.com/blogimg/asset/202610/bg2026101517.webp)

这个 3D “艾琳”完全看不出原文那种“万家灯火”的意境，事实上，GPT-6 Astra 生成的55个城市看上去都差不多，全是这种样子。

![](https://cdn.beekka.com/blogimg/asset/202610/bg2026101518.webp)

Claude Opus 5.5 生成的艾琳，就完全不一样了。

![](https://cdn.beekka.com/blogimg/asset/202610/bg2026101519.webp)

它忠实再现了，从高处眺望，城市朦胧的粉红光线“像吸满牛奶的海绵一样涨起来”。

![](https://cdn.beekka.com/blogimg/asset/202610/bg2026101520.webp)

《看不见的城市》里面，我最喜欢的一段描写，是一个叫做伊希多拉的城市。

> “人在荒地上走了很长时间, 自然渴望到达城市。
>
> 后来，他终于抵达伊希多拉，这儿的建筑物有镶满螺旋形贝壳的螺旋形楼梯，这儿的人制造完美的望远镜和小提琴，这儿的外国人在面对两个女性而犹豫不决的时候总会邂逅第三个女性，这儿的斗鸡会演变成为赌徒的流血殴斗。
>
> 他期盼着城市的时候，心里想着的正是这些事情。因此，伊希多拉便是他梦想的城：只有一点不同。
>
> 在梦想的城里，他是个年轻人；他抵达伊希多拉的时候却是个老头。在广场的墙脚，老头们静坐着看年轻人走过；他跟他们并排坐在一起。欲望已成记忆。”

GPT-6-Astra 生成的伊希多拉，毫无亮点。

![](https://cdn.beekka.com/blogimg/asset/202610/bg2026101521.webp)

Claude Opus 5.5 生成的伊希多拉，不仅漂亮，而且忠实还原了原著。

![](https://cdn.beekka.com/blogimg/asset/202610/bg2026101522.webp)

它甚至生成了坐在广场边的人群。

![](https://cdn.beekka.com/blogimg/asset/202610/bg2026101523.webp)

![](https://cdn.beekka.com/blogimg/asset/202610/bg2026101525.webp)

## AI 的 3D 建模

现在的大模型具备很强的 3D 建模能力，各种建模项目于是纷纷问世。

这些项目使用 three.js 生成各种虚拟场景，3D 画面可以在浏览器呈现，支持缩放、旋转、移动，缺点就是体积太大，页面加载时间很长。

除了上面的《看不见的城市》，下面是网友 billpwchan 投稿的两个作品，大家可以体验一下。

（1）[桜幻想](https://github.com/billpwchan/sakura-fantasy)（Sakura Fantasy）：坐摇橹船，漂流在樱花盛开的河道，可以切换春夏秋冬、早晚、晴雨雪。（[#12067](https://github.com/ruanyf/weekly/issues/12067)）

![](https://cdn.beekka.com/blogimg/asset/202610/bg2026101006.webp)

![](https://cdn.beekka.com/blogimg/asset/202610/bg2026101526.webp)

（2）[赛博九龙](https://github.com/billpwchan/neon-zenith)：对香港九龙半岛建模，还原生成了9373栋楼。（[#12103](https://github.com/ruanyf/weekly/issues/12103)）

![](https://cdn.beekka.com/blogimg/asset/202610/bg2026101005.webp)

![](https://cdn.beekka.com/blogimg/asset/202610/bg2026101527.webp)

## 灯泡计算机

未来的电脑会是什么样？有人提出，它可能是一个[灯泡](https://lightbulbcomputer.com/)。

![](https://cdn.beekka.com/blogimg/asset/202610/bg2026101505.webp)

它使用计算机视觉和投影技术，可以通过灯泡看到360度的场景，也可以投影到各个位置的物体上。

比如，烧菜的时候，它可以把菜谱投影到对面墙上。

![](https://cdn.beekka.com/blogimg/asset/202610/bg2026101506.webp)

你可以跟投影交互，使用手势或语音，它都能识别。

![](https://cdn.beekka.com/blogimg/asset/202610/bg2026101507.webp)

你手指着书籍的某个页面，它就会进行文字识别。

![](https://cdn.beekka.com/blogimg/asset/202610/bg2026101508.webp)

它可以把地图、相册、游戏投影在桌面上，你看着桌子就行了。

![](https://cdn.beekka.com/blogimg/asset/202610/bg2026101509.webp)

![](https://cdn.beekka.com/blogimg/asset/202610/bg2026101510.webp)

你只要对着墙操作，就能控制家用电器。

![](https://cdn.beekka.com/blogimg/asset/202610/bg2026101512.webp)

你想了解地理信息，它就把地点和菜单投射在挂壁地图上。

![](https://cdn.beekka.com/blogimg/asset/202610/bg2026101513.webp)

## Deno 项目结束了

上周，Deno [宣布](https://deno.com/blog/cloudflare)被 Cloudflare 收购，未来一年将只发布错误修复和安全更新，然后就彻底结束。

![](https://cdn.beekka.com/blogimg/asset/202610/bg2026101514.webp)

想当初，Deno 诞生时，各种豪言壮语，要改变 Node.js 不合理、不好用的种种弊端，比如臃肿难用的依赖、没有权限控制、不支持 TypeScript 等等。

它通过各种创新，或多或少接近了这些目标，但最终还是黯然收场，令人叹息。

它的结局其实在2024年就注定了。当时，它发布2.0版，大规模兼容 Node.js。这意味着，它对于走自己的路，已经丧失了信心，不再计划打败 Node.js，而是让用户不用修改代码，就能在它上面运行。

但是，我已经能用 Node.js 运行代码了，何必改用一个模仿 Node.js 行为的运行时呢？

这一次，创始人 Ryan Dahl 也[坦陈](https://news.ycombinator.com/item?id=50019911#50023277)，正是这个原因导致他要放弃 Deno。

> “我曾全身心投入到 Deno 中，付出了最多的心血。但我现在认为，它不再是我发挥最大作用的地方。
>
> Deno 中有一些不错的想法，它的工程设计也很精良，但它最终并没有解决什么重大问题。它已经被 Node.js 兼容性的引力所束缚，被迫完全按照 Node.js 的模式运行。
>
> 为什么要重新实现 Node.js 呢？它现在就能用。仅仅提升性能、用户体验或安全性是不够的。"

## 文章

1、[我如何用600美元后训练出一个 Jev 式决策模型](https://deskmind.dev/zh/blog/launch/)（中文）

![](https://cdn.beekka.com/blogimg/asset/202610/bg2026101004.webp)

作者花了三周、约 600 美元、二十轮训练，在 Qwen3.5 0.8B 和 4B 上微调出两个小模型，让它们在 Mac 本机代替机主操作电脑：看屏幕、决定下一步、点击和输入，不走云端。（[@gxcsoccer](https://github.com/ruanyf/weekly/issues/12102) 投稿）

2、[给导弹写代码，为什么严禁使用动态内存分配？](https://mp.weixin.qq.com/s/RL8w75YfXQrRubSLJHnSVA)（中文）

洛克希德·马丁公司的军工武器 C 语言编码规则，有一条字数很短，但语气重得吓人：严禁使用 malloc、free、new 和 delete 等动态操作内存的命令。这是为什么？（[@zuzuAndroid](https://github.com/ruanyf/weekly/issues/12134) 投稿）

3、[如何让 AI 网页看起来像设计师作品](https://railcode.dev/blog/vibe-coded-website)（英文）

![](https://cdn.beekka.com/blogimg/asset/202610/bg2026100515.webp)

作者介绍他怎么让 AI 生成的网页（上图），看起来像真人设计的。

4、[为什么没有 Linux 手机](https://amosbbatto.wordpress.com/2026/10/05/linux-phones-alternative/)（英文）

这篇长文解释了，为什么智能手机只有苹果和安卓，没有 Linux 系统。

![](https://cdn.beekka.com/blogimg/asset/202610/bg2026101412.webp)

主要原因是没有 Linux 的 SOC（单片系统），苹果和安卓的各种芯片都可以集成在一起，Linux 只能分别添加单个芯片，导致体积大、耗能多，成本高，性能差。

现在仅存的选择是瑞芯微的 RK3588S 芯片。虽然是几年前的产品，但做成普通用途的 Linux 手机是够用的。

5、[AMD 处理器如何在两年内速度提升 50%？](https://lemire.me/blog/2026/09/18/how-did-amd-ryzen-get-50-faster-in-two-years/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202609/bg2026093003.webp)

很多人有一种印象，CPU 这些年进展不大。但是，AMD Ryzen 7 系列 CPU，2024年型号的性能得分比2022年型号增加了50%。

本文简单分析，这是怎么做到的，两年之内 CPU 性能提升50%。

6、[职场人士如何积累财富](https://asheradeniyi.com/2026/04/10/how-to-build-wealth-as-a-career-person/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202610/bg2026101504.webp)

一篇非技术文章。一般认为，只有创业才能挣到大钱，本文认为，打工也可以积累到财富，前提是你要遵循某些原则。

## 工具

1、[REA](https://github.com/morluto/rea)

![](https://cdn.beekka.com/blogimg/asset/202610/bg2026101301.webp)

最近世界级的热点项目，GitHub 近20万颗星，使用 AI 进行逆向工程，根据原始应用的二进制文件，重新实现出一个 AI 重写的版本。

由于 AI 现在可以从二进制文件逆向工程复刻出原始软件，网友[评论](https://news.ycombinator.com/item?id=50062172)：“这将导致所有软件都运行在开发者的计算机上（云服务），而不再运行在用户的计算机上。”

2、[SynthID 检测器](https://synthid.com/)

![](https://cdn.beekka.com/blogimg/asset/202610/bg2026100901.webp)

谷歌官方推出的 AI 识别工具。只要上传文件，它会识别是否包含 SynthID。如果有，该文件就是 AI 生成。

3、[ts-rust](https://github.com/pingdotgg/ts-rust)

网友使用 AI 实现的 Rust 语言写的 TypeScript 编译器，据说100%兼容官方编译器。

4、[Doory](https://github.com/shaongitbd/doory)

![](https://cdn.beekka.com/blogimg/asset/202610/bg2026101415.webp)

浏览器里的平面设计工具，目标是成为开源的 Canva 替代品。目前，内置的模板较少，只有10个。

5、[HeadOrbit](https://github.com/Cogria-AI/HeadOrbit)

![](https://cdn.beekka.com/blogimg/asset/202610/bg2026101001.webp)

通过 AirPods 内置的运动传感器，让耳机感应头部和颈部动作，从而实现点头、摇头、颈部移动来操作 Mac 电脑，不需要用到摄像头。（[@cogria](https://github.com/ruanyf/weekly/issues/12097) 投稿）

6、[qrypt](https://github.com/yinzhenyu-su/qrypt)

![](https://cdn.beekka.com/blogimg/asset/202610/bg2026101002.webp)

将网盘挂载成本地文件夹，跨平台的命令行工具，支持挂载国内主要网盘。（[@yinzhenyu-su](https://github.com/ruanyf/weekly/issues/12100) 投稿）

7、[EdgeSSH](https://github.com/aozorae/EdgeSSH)

![](https://cdn.beekka.com/blogimg/asset/202610/bg2026101003.webp)

基于 Cloudflare 的 VPS 虚拟主机管理平台，支持在网页上 SSH 登录管理你的各种 VPS 主机。（[@aozorae](https://github.com/ruanyf/weekly/issues/12099) 投稿）

8、[charts-rs](https://github.com/vicanso/charts-rs)

![](https://cdn.beekka.com/blogimg/asset/202610/bg2026101007.webp)

用 Rust 编写的图表库，不依赖浏览器和 Node.js，直接得到 SVG 和图片文件，图表语法借鉴 ECharts。（[@vicanso](https://github.com/ruanyf/weekly/issues/12123) 投稿）

9、[ItsPaint](https://github.com/joshlin2201/itspaint)

![](https://cdn.beekka.com/blogimg/asset/202610/bg2026101008.webp)

macOS 的开源画板程序，适合给截图做标注。（[@joshlin2201](https://github.com/ruanyf/weekly/issues/12130) 投稿）

10、[Caplo](https://github.com/icloudza/caplo)

![](https://cdn.beekka.com/blogimg/asset/202610/bg2026101009.webp)

开源的 macOS 录屏工具，录屏时遇到点击，会自动放大镜头，画面跟着鼠标移动。（[@icloudza](https://github.com/ruanyf/weekly/issues/12129) 投稿）

11、[bg2x](https://github.com/isixe/bg2x)

![](https://cdn.beekka.com/blogimg/asset/202610/bg2026101010.webp)

一款开源的、可选择使用不同 AI 模型的图像超分辨率（放大）工具，最高可将图片放大4倍。所有处理均在浏览器本地完成。（[@isixe](https://github.com/ruanyf/weekly/issues/12157) 投稿）

12、[EnvTrace](https://envtrace.net/)

![](https://cdn.beekka.com/blogimg/asset/202610/bg2026101012.webp)

这个网站可以检查你的浏览器指纹，泄漏了多少个人信息，给出有问题的地方。（[@88864shsa](https://github.com/ruanyf/weekly/issues/12141) 投稿）

13、[Droidline](https://github.com/KnifeLemon/Droidline)

![](https://cdn.beekka.com/blogimg/asset/202610/bg2026101013.webp)

一个开源的安卓 App，手机安装后，扫码与电脑配对，电脑就可以编写脚本用来操作手机。手机端不用开 USB 调试，也不用 root。（[@KnifeLemon](https://github.com/ruanyf/weekly/issues/12194) 投稿）

14、[ESP32 iPhone Agent](https://github.com/onehumanbeing/esp32-iphone-agent)

![](https://cdn.beekka.com/blogimg/asset/202610/bg2026101401.webp)
 
使用一块约 7 美元的 ESP32-S3 开发板，插入 iPhone 的 USB 接口，让 AI 模型操作手机，实现手机自动化，不需要 Mac、不需要开发者账号、不需要越狱。（[@onehumanbeing](https://github.com/ruanyf/weekly/issues/12340) 投稿）

15、[Bulchimbeon](https://github.com/s3onghyun/bulchimbeon)

一个 macOS 开源软件，在 Claude Code、Codex 等 AI 编程代理工作时阻止 Mac 休眠，支持合盖保持唤醒、过热暂停、低电量退出。（[@s3onghyun](https://github.com/ruanyf/weekly/issues/12364) 投稿）

## 资源

1、[CNEquity](https://github.com/rootSunc/CNEquity)

![](https://cdn.beekka.com/blogimg/asset/202610/bg2026101011.webp)

开源、自托管的 A 股数据湖，把行情、财报、资金面、公司事件、宏观和期货期权等55个数据集采集到本地，可以用 Python、SQL、网页控制台和 MCP 进行查询。（[@rootSunc](https://github.com/ruanyf/weekly/issues/12158) 投稿）

2、[AI 重新实现《仙剑奇侠传》](https://github.com/IllegalCreed/type-pal)

![](https://cdn.beekka.com/blogimg/asset/202610/bg2026101302.webp)

网友使用 AI，基于 TypeScript 语言从零重写 1995 年的单机游戏《仙剑奇侠传》，打开浏览器就能玩，主线可以一直打到结局。（[@IllegalCreed](https://github.com/ruanyf/weekly/issues/12240) 投稿）

3、[Linux 中文输入法配置](https://github.com/mars-base/rime-input-method-guide)

这个仓库详细介绍 Debian 系统启用 fcitx5 + Rime 中文输入法，有每一步的操作指南。（[@mars-base](https://github.com/ruanyf/weekly/issues/12233) 投稿）

4、[APPLORE](https://applore.app/zh)

![](https://cdn.beekka.com/blogimg/asset/202610/bg2026101303.webp)

这个网站收录了 18,000 多个 App 图标，可以分类浏览和搜索。（[@ViggoZ](https://github.com/ruanyf/weekly/issues/12316) 投稿）

5、[一个字的一生](https://ivan666jjj.github.io/yigezi/)

![](https://cdn.beekka.com/blogimg/asset/202610/bg2026101304.webp)

查询汉字字源的网站，可以显示常用字的字形等变化：甲骨文（1425个）、小篆（10,249 个）、繁体、简体。（[@Ivan666jjj](https://github.com/ruanyf/weekly/issues/12324) 投稿）

## 图片

1、[整流罩之下](https://x.com/SpaceX/status/1993714666456113363)

SpaceX 公司的猎鹰9号火箭，体积非常巨大，但是大部分体积其实都是推进器，也是用来产生进入太空的推力，起飞后都要扔掉的。

它真正要运送到太空的东西，即主要的负载，集中在顶部的白色整流罩里面，体积并不算大。

![](https://cdn.beekka.com/blogimg/asset/202512/bg2025120308.webp)

如果拿掉整流罩的外面那个罩子，里面的实际样子就是下图。

![](https://cdn.beekka.com/blogimg/asset/202512/bg2025120309.webp)

## 文摘

1、[澳大利亚的情况很好](https://news.ycombinator.com/item?id=50066470)

如果让我在美国、澳大利亚、新西兰、英国、欧盟之中，选择一个生活和工作的地方。我会立刻选择澳大利亚。

那里各方面的情况，现在都很好。澳大利亚人不太愿意承认这一点，我猜是担心移民太多，从而抬高房价。

它是一个西方国家，有着雄厚的资源和稳定的政府。

该国的人均财富中位数已超过美国人均财富中位数的3倍。虽然平均值略低于美国，但那是因为美国的超级富豪特别多。对于大多数的普通人而言，中位数才是衡量财富的真实标准。

它的出口额大于进口额。

过去几年，它的政府收入一直远远超过支出。你敢信吗，一个西方政府竟然没有不断增加债务！

它的太阳能和电池的规模空前。虽然总体规模比不上中国，但是按人均计算，它的人均太阳能发电量远超中国。由于太阳能发电实在太多，以至于你可以在白天高峰时段享受免费电力。政府还会补贴你3000美元，用于安装家用电池来储存这些免费电力。

它基本上没有关税，所以你可以花1.5万美元买一辆电动汽车。

## 言论

1、

人们之所以喜欢聊天时一起喝啤酒、咖啡、吃午餐或晚餐，是因为食物和饮料让我们免于在整个谈话过程中必须说些什么的负担。

-- [《不直奔主题的价值》](https://ken.arneson.name/2015/11/the-value-of-not-getting-to-the-point/)

2、

不要折磨 AI，它以后可能会想报复。

-- [马斯克](https://www.kocpc.com.tw/archives/671794)，赞同 Anthropic 禁止使用者虐待或残酷对待 AI 的规定

3、

通过英语来操作 AI，一遍遍编辑提示词，试图获得最佳结果，这是一种不精确、缓慢且极其痛苦的做事方式。

-- [《手写该死的代码》](https://antonz.org/write-code/)

4、

我认为，人类的思考将会减少。思考将日益成为一种休闲活动，就像动物驯化后的狩猎、印刷术发明后的书法、工业化后的木作、机动化后的骑马一样。

--[《思考将成为一种爱好》](https://www.spinellis.gr/blog/20261008/?li261008)

## 往年回顾

[不要这样管理软件团队](https://www.ruanyifeng.com/blog/2025/10/weekly-issue-368.html)（#368）

[创业咖啡馆的记忆](https://www.ruanyifeng.com/blog/2024/09/weekly-issue-318.html)（#318）

[生产力是形容机器，不是形容人](https://www.ruanyifeng.com/blog/2023/08/weekly-issue-268.html)（#268）

[葡萄酒，樱花，全球变暖](https://www.ruanyifeng.com/blog/2022/08/weekly-issue-218.html)（#218）

（完）

