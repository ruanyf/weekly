# 科技爱好者周刊（第 295 期）：巧妙的灯泡钟

这里记录每周值得分享的科技内容，周五发布。（**[通知] 下周清明节假期，周刊暂停一次。**）

本杂志[开源](https://github.com/ruanyf/weekly)，欢迎[投稿](https://github.com/ruanyf/weekly/issues)。另有[《谁在招人》](https://github.com/ruanyf/weekly/issues/4075)服务，发布程序员招聘信息。合作请[邮件联系](mailto:yifeng.ruan@gmail.com)（yifeng.ruan@gmail.com）。

## 封面图

![](https://cdn.beekka.com/blogimg/asset/202403/bg2024031801.webp)

山东日照的“在水美术馆”，是一座水上美术馆，长达一公里。春秋季节，它的外墙玻璃还可以打开，让室内室外融为一体。（[via](https://m.thepaper.cn/newsDetail_forward_24815035)）

## 巧妙的灯泡钟

本周，分享一个构思很巧妙的[灯泡钟](https://ironicsans.beehiiv.com/p/life-death-bulbdial-clock)。

它的灵感来自日晷。我们知道，日晷是一种古代计时工具，根据太阳投影的位置，判断当前的时间。

![](https://cdn.beekka.com/blogimg/asset/202403/bg2024032412.webp)

2008年，一位美国设计师突发奇想，能不能把日晷做成一个现代的时钟？

他很快发现，这不可行。因为太阳投影的位置在每个纬度都不一样，做不了固定的钟面，而且只有白天有投影（下图），晚上和阴雨天都不能用。

![](https://cdn.beekka.com/blogimg/asset/202403/bg2024032411.webp)

（图片说明：日晷只在上午7点到下午5点之间可用。）

但是，那个发明家受到了启发，意识到阴影可以表示时间，就提出了“灯泡钟”的设想。

![](https://cdn.beekka.com/blogimg/asset/202403/bg2024032413.webp)

灯泡钟是一个圆盘，圆心位置有一根垂直的棍子，周围有三圈轨道。每圈轨道上安装了一个不同高度的灯泡，对着棍子进行光照，会在钟面上投下阴影。

这里的关键是这三圈轨道都围绕圆心旋转，但是转速不同，分别为60秒/圈、60分钟/圈、12小时/圈，代表秒、分钟、小时。

因此，三个灯泡的位置是不断变化的，它们投下的阴影也随之变化，形成秒针、分针和时针，从而构成当前时间。

这个设计真的很巧妙，而且制造难度不大。它的缺点是通过影子显示时间，只在昏暗的环境可见（比如餐厅、夜总会、电影院），明亮的地方就会看不见指针。

那个发明家并不是真的想造这个钟，只把它当作一个奇思妙想，写了一篇文章，公开在网上。没想到有人看到了，真的把这个钟造出来了。

![](https://cdn.beekka.com/blogimg/asset/202403/bg2024032414.webp)

为了降低成本，实物版的“灯泡钟”没有采用旋转轨道，而是去掉了机械部分，改为三圈灯环，分别安装了60个、60个和12个 LED 灯泡，同一时间每圈只亮一个灯，对应当前的小时、分钟和秒。

为了便于区分，这三圈 LED 的颜色还不一样，做成了红绿蓝三原色，三个阴影就是三种颜色。

后来，这个设计正式投产了，变成了可以购买的商品。

![](https://cdn.beekka.com/blogimg/asset/202403/bg2024032415.webp)

拆开以后，内部是这样的。

![](https://cdn.beekka.com/blogimg/asset/202403/bg2024032416.webp)

可以看到，这个成品一点都不酷，外观根本不吸引人，销量很差也就不奇怪了。

最终，这家公司倒闭关门了，灯泡钟也被放弃，不过所有设计图纸都[开源](https://wiki.evilmadscientist.com/Bulbdial)了。

于是，网上陆续出现了很多基于开源方案的衍生品，爱好者纷纷做出自己的灯泡钟，下面就是其中两个。

![](https://cdn.beekka.com/blogimg/asset/202403/bg2024032417.webp)

![](https://cdn.beekka.com/blogimg/asset/202403/bg2024032418.webp)

它们的共同点是没有实体指针，都采用灯泡投影显示时间。

我觉得，灯泡钟这个设想很酷，做起来也不难，是很好的电子电路玩具项目，感兴趣的朋友不妨动手试试。

## HarmonyOS NEXT 的开发方案

华为的鸿蒙系统（HarmonyOS）是一个独特的存在。以前，它基于安卓开源版本 ASOP，兼容安卓应用，不用为它做单独的开发。但是，现在不一样了。

华为确定，今年秋季发布 **HarmonyOS NEXT**。这是一个全新的操作系统，不兼容安卓。

![](https://cdn.beekka.com/blogimg/asset/202403/bg2024032707.webp)

这意味着，**各种应用必须重新开发一次客户端**，从零开始，做一个跟现有安卓/苹果客户端功能完全一样的 App，成本何其大。

但是，这个问题又避不开。国内安卓用户中，华为市占率最高，而且普遍都是中高端系列。如果再仔细一点，还能发现华为用户的付费率也是安卓中最高的。

根据第三方统计，截止2023年第一季度，鸿蒙系统的市场占有率已经在8%以上，且还在逆势增长。虽然这些都是鸿蒙，还不是鸿蒙 NEXT，但对于开发者而言，适配鸿蒙 NEXT 只是时间问题。

政府明确支持 HarmonyOS NEXT，[深圳](http://www.news.cn/local/20240303/dca3e6d4bd734380b4dc9602d5df9b76/c.html)、[上海](https://m.21jingji.com/timeline/6d9b6fd73a5bc98a293edc724554a46e.html)、[福州](https://www.fuzhou.gov.cn/zwgk/gb/202301/t20230111_4520047.htm)都已经出台了政策扶植，很多头部 App（比如小红书、支付宝）已经在着手适配这个新系统了。

对于大型互联网公司，适配 HarmonyOS NEXT 只是工程师的分配问题，但是对于中小型公司，这就成了一个头痛的难题，开发团队本身就资源不够，难道还要再另外寻找鸿蒙工程师吗？怎么负担这部分成本啊。

对于中小应用，其实有一个简单的方法，可以解决鸿蒙适配问题。

![](https://cdn.beekka.com/blogimg/asset/202403/bg2024032702.webp)

我们知道，H5 是移动平台兼容性最好的开发技术。它的代码不改动或者少量改动，就可以在多种系统中运行，典型的例子就是小程序。

目前，很多应用都有微信小程序版本，如果有一种工具，可以**把微信小程序转成鸿蒙原生 App**，就为大多数中小应用提供了一种简单可行的适配方案。

国产软件 [FinClip](https://www.finclip.com/) 就是这样一种工具。它是一个小程序容器，或者说是小程序 SDK，能够不改动一行代码，就让微信小程序、支付宝卡片在其中运行。

![](https://cdn.beekka.com/blogimg/asset/202403/bg2024032706.webp)

它的开发目的，就是让小程序能够不依赖于宿主（微信/支付宝），独立运行在多种环境中。它兼容微信小程序语法与登录体系，能够让小程序直接在其上运行，目前已经支持安卓、iOS、鸿蒙 NEXT、Flutter、Windows、车机等。

因此，我们可以用它**一键将小程序转为鸿蒙 NEXT 原生 App**。它的鸿蒙版 SDK 功能与安卓、iOS 保持一致，所有开发组件、接口均与微信对标。<u>本质上，它提供一个鸿蒙 NEXT 的适配层，让小程序直接在这个适配层上运行，并将它们打包在一起，形成一个独立 App</u>。

同时，它作为适配层，可以同时容纳多个小程序。也就是说，你也可以用它作为平台，让现有的各种微信小程序在里面上架，做成一个自己的超级 App。

总之，对于现有的微信小程序，[FinClip](https://www.finclip.com/) 是一个相当简单的鸿蒙 NEXT 适配方案。欢迎大家注册体验，还能抽取 Mate 60 Pro、MatePad 11 等。对技术或者产品有问题的小伙伴，也可进群交流。

![](https://cdn.beekka.com/blogimg/asset/202403/bg2024032814.webp)

## 科技动态

1、[奇异鸟](https://www.smithsonianmag.com/smart-news/wild-kiwis-born-near-new-zealands-capital-for-the-first-time-in-more-than-150-years-180983386/)

新西兰的国鸟是“奇异鸟”，英语叫做 kiwi。它是一种珍稀鸟类，除了新西兰，其他国家都没有。

它不会飞，大小跟鸡差不多，最大特点就是嘴特别长。

![](https://cdn.beekka.com/blogimg/asset/202312/bg2023120714.webp)

它曾经在新西兰大量存在，但自从白貂19世纪引入新西兰后，它被白貂捕食，数量每年减少2%～3%。目前仅存6.8万只左右，如果不采取措施，将在今后几十年内灭绝。

为了保证它的野外生存，新西兰政府2022年在首都惠灵顿郊外，划了一块保护区，放置了4600个陷阱，把白貂抓干净，然后放养了60多只奇异鸟。

![](https://cdn.beekka.com/blogimg/asset/202312/bg2023120715.webp)

2023年11月，保护人员惊喜地发现，那里多了两只野生奇异鸟宝宝。这是150多年来，新西兰首都地区首次有野生奇异鸟诞生。

2、[霸王龙吃什么](https://web.archive.org/web/20231210161239/https://www.scientificamerican.com/article/tyrannosaurs-stomach-contents-have-been-found-for-the-first-time/)

霸王龙又称暴龙，是已知最重、最凶猛的肉食恐龙。

![](https://cdn.beekka.com/blogimg/asset/202312/bg2023121104.webp)

但是，它是肉食动物属于科学家的推测，并没有直接证据，能够证明它吃肉。科学家只是根据它的锋利牙齿、爪子，以及粪便化石，推测它是食肉动物。

最近，直接证据终于发现了。科学家找到一块小霸王龙的化石（下图），它的胃里有其他恐龙的残骸。

![](https://cdn.beekka.com/blogimg/asset/202312/bg2023121105.webp)

这件事告诉我们，古生物学是一个多么困难的学科，仅有的证据就是一两块化石，要像侦探一样，从石头里面找出蛛丝马迹。

3、[手指鼠标](https://www.core77.com/posts/125315/A-Wearable-Mouse)

一家德国创业公司发明了手指鼠标，夹在两根手指上使用。

![](https://cdn.beekka.com/blogimg/asset/202308/bg2023081501.webp)

![](https://cdn.beekka.com/blogimg/asset/202308/bg2023081502.webp)

它内部含有陀螺仪，可以感知手的移动，以及手指的动作，比如左键、右键、双击、滚动等。

![](https://cdn.beekka.com/blogimg/asset/202308/bg2023081503.webp)

它通过蓝牙与外部设备连接，非常适合随身携带，目前售价是65美元（约470元人民币）。

4、[服务器耗水](https://apnews.com/article/chatgpt-gpt4-iowa-ai-water-consumption-microsoft-f551fde98083d17a7e8d904f8be822c4)

大型互联网公司都是用水大户，因为机房的服务器需要用水冷却。

![](https://cdn.beekka.com/blogimg/asset/202309/bg2023091103.webp)

微软公司最近披露，它的2022年用水量比2021年猛增34%，增加了644万吨水，相当于2,500多个国际标准泳池的用水。

外界认为，这是因为微软在2022年中，开始进行大量 AI 计算，从而增加了冷却用水。

![](https://cdn.beekka.com/blogimg/asset/202309/bg2023091104.webp)

加州大学的研究团队估计，ChatGPT 每回答5 到50个问题，就需要用水500毫升（相当于一瓶矿泉水）。因此，AI 的发展将会加剧世界的用水紧张。

## 文章

1、[畅游 LLM 的世界](https://www.bentoml.com/blog/navigating-the-world-of-large-language-models)（英文）

![](https://cdn.beekka.com/blogimg/asset/202403/bg2024032202.webp)

如果在家用电脑上安装 LLM（大型语言模型），应该选择哪一个模型？

本文分析并评价了目前最流行的几个 LLM 的基本情况和优缺点。

2、[追寻 archive.today 的管理员](https://gyrovague.com/2023/08/05/archive-today-on-the-trail-of-the-mysterious-guerrilla-archivist-of-the-internet/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202308/bg2023080508.webp)

[archive.today](https://archive.today/) 是一个神秘的网站，可以生成网页的备份，供在线查看。没人知道谁建立了这个网站。本文试图找出答案。

3、[微信早期的消息收发架构](https://mp.weixin.qq.com/s/dD-aPhnynOqSC3MUYLjeAA)（中文）

![](https://cdn.beekka.com/blogimg/asset/202403/bg2024032813.webp)

本文是一篇简化的介绍，讲解微信刚刚建立时，怎么做到消息的收发。（[@ryantang1991](https://github.com/ruanyf/weekly/issues/4193) 投稿）

4、[OPFS API 及工具介绍](https://hughfenghen.github.io/posts/2024/03/14/web-storage-and-opfs/)（中文）

![](https://cdn.beekka.com/blogimg/asset/202403/bg2024032810.webp)

网页脚本如果要跟本地文件系统交互，是很不方便的。目前，浏览器有一个 OPFS API，为网页提供一个虚拟的本地文件系统，本文介绍它的用法。（[@hughfenghen](https://github.com/ruanyf/weekly/issues/4189) 投稿）

5、[如何管理多个 Git 身份](https://garrit.xyz/posts/2023-10-13-organizing-multiple-git-identities)（英文）

![](https://cdn.beekka.com/blogimg/asset/202310/bg2023101404.webp)

Git 使用时，需要指定用户名和邮件地址。本文教你一种简单的方法，不同的项目自动切换 Git 身份。

6、[我在 Mac Mini 运行 Asahi](https://jasoneckert.github.io/myblog/ultimate-linux-arm64-workstation/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202310/bg2023101617.webp)

Asahi 是一个专门为苹果 ARM 芯片开发的 Linux 发行版，作者将其安装在 Mac Mini 上面，得到了一个他见过的最快的 Linux 桌面。

7、[如何用 CSP 防止 XSS 注入攻击](https://www.akshaykhot.com/content-security-policy/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202308/bg2023080507.webp)

本文讲解怎么使用浏览器的 CSP（内容安全策略），防止网页被 XSS （跨站点脚本注入攻击）。

8、[什么是生锈](https://books.worksinprogress.co/book/maintenance-of-everything/vehicles/digression-3-corrosion-rust-never-sleeps/1)（英文）

![](https://cdn.beekka.com/blogimg/asset/202309/bg2023092410.webp)

本文向普通读者介绍，生锈相关的各种知识，里面穿插了许多奇闻轶事。上图中，信箱已经生锈了，背后的镀锌板却完好无损。

## 工具

1、[Garnet](https://github.com/microsoft/garnet)

上周，著名的缓存服务器 Redis 宣布更改许可证，未经许可不得基于它对外提供云服务。

![](https://cdn.beekka.com/blogimg/asset/202403/bg2024032201.webp)

此前两天，微软发布了一个兼容 Redis 的缓存服务器 Garnet，不知道两件事之间是否存在关联。

另外，Redis 现在也被分叉了，诞生了两个全新的项目 [Redict](https://redict.io/) 和 [Valkey](https://github.com/valkey-io/valkey)，目标是成为自由软件版本的 Redis。

![](https://cdn.beekka.com/blogimg/asset/202403/bg2024032805.webp)

2、[Superjson](https://github.com/blitz-js/superjson)

![](https://cdn.beekka.com/blogimg/asset/202310/bg2023102207.webp)

一个 JavaScript 模块，用于字符串和 JSON 数据的互相转换，支持多种 JSON 不支持的数据格式。

3、[Copilot for obsidian](https://github.com/logancyang/obsidian-copilot)

![](https://cdn.beekka.com/blogimg/asset/202403/bg2024032304.webp)

Obsidian 编辑器的一个开源插件，使其可以用上本地的 AI 助手，参见[介绍文章](https://mp.weixin.qq.com/s/at7K_8lEfVzQJq5qnpzvUg)。（[@ivone-liu](https://github.com/ruanyf/weekly/issues/4171) 投稿）

4、[LunarLink](https://github.com/tahitimoon/LunarLink)

![](https://cdn.beekka.com/blogimg/asset/202403/bg2024032806.webp)

一个基于 Web 的接口自动化测试平台，可以快速编写和运行接口自动化测试用例。（[@tahitimoon](https://github.com/ruanyf/weekly/issues/4173) 投稿）

5、[text2video](https://github.com/bravekingzhang/text2video)

![](https://cdn.beekka.com/blogimg/asset/202403/bg2024032808.webp)

一个开源的文本转图文视频的软件。（[@bravekingzhang](https://github.com/ruanyf/weekly/issues/4187) 投稿）

6、[simple-mind-map](https://github.com/wanglin2/mind-map)（思绪思维导图）

![](https://cdn.beekka.com/blogimg/asset/202403/bg2024032812.webp)

一个开源的 Web 思维导图，试用 [Demo](https://wanglin2.github.io/mind-map/)。（[@wanglin2](https://github.com/ruanyf/weekly/issues/4190) 投稿）

7、[Shap-E](https://github.com/openai/shap-e)

![](https://cdn.beekka.com/blogimg/asset/202305/bg2023050612.webp)

一个生成式 AI 模型，从文本生成 3D 动画图片。

8、[blog-cells](https://github.com/rameshvarun/blog-cells)

![](https://cdn.beekka.com/blogimg/asset/202308/bg2023082403.webp)

这个工具可以在网页插入互动式区块，用来展示和执行 JavaScript 代码，类似于 Jupyter。

9、[Magic Wormhole](https://github.com/magic-wormhole/magic-wormhole)

![](https://cdn.beekka.com/blogimg/asset/202308/bg2023082501.webp)

一个文件传输协议，可以在任意两台计算机（不必在同一局域网）之间传输文件。上传方会获得一个密码，下载方只要输入密码就能获取文件。

它有很多第三方客户端（包括手机 App），比如[这个](https://github.com/LeastAuthority/destiny)和[这个](https://github.com/pavelsof/mobile-wormhole)。

10、[Mist](https://mist-project.github.io)

![](https://cdn.beekka.com/blogimg/asset/202308/bg2023082502.webp)

这个工具可以在图片上面添加水印底纹，使得该图片无法再被 AI 模型作为训练材料。上图是添加水印后的效果（左图），以及放大的水印（右图）。

## 资源

1、[中国古代历史人物可视化](https://tools.buyixiao.xyz/historical-figure-query)

![](https://cdn.beekka.com/blogimg/asset/202403/bg2024032303.webp)

输入一个古代人物名（共收录52000+人物），就可以显示该人物的社会关系、亲戚关系和生平足迹图，上图是李白的生平足迹图，参见[介绍文章](https://mp.weixin.qq.com/s/evUacKtLOVCrZahgRmnjsg)。（[@inspurer](https://github.com/ruanyf/weekly/issues/4170) 投稿）

2、[CSS 框架排名](https://www.libhunt.com/css)

![](https://cdn.beekka.com/blogimg/asset/202403/bg2024032301.webp)

这个网页按照 GitHub 的星星数量，为 CSS 框架排名。

3、[动手实战人工智能](https://aibydoing.com/intro)（AI by doing）

![](https://cdn.beekka.com/blogimg/asset/202403/bg2024032807.webp)

一本中文电子书，通过实例介绍一些 AI 算法。（[@huhuhang](https://github.com/ruanyf/weekly/issues/4178) 投稿）

4、[Lamucal](https://lamucal.ai/)

![](https://cdn.beekka.com/blogimg/asset/202403/bg2024032809.webp)

这个网站可以为任何歌曲生成和弦、节拍、歌词、旋律和标签，使用了 [Hybrid-Net 模型](https://github.com/DoMusic/Hybrid-Net?tab=readme-ov-file)。（[@liufeigit](https://github.com/ruanyf/weekly/issues/4188) 投稿）

5、[Z2H 字贴](https://paper.z2h.cn/)

![](https://cdn.beekka.com/blogimg/asset/202403/bg2024032811.webp)

一个在线的字帖生成网站，支持中文和英文。（[@liamwang](https://github.com/ruanyf/weekly/issues/4191) 投稿）

## 图片

1、[19世纪早期的手术器械](https://oldoperatingtheatre.com/step-into-the-role-of-a-surgeon-in-our-interactive-game/)

19世纪早期，还没有发明麻醉剂和消毒剂，外科手术是一件非常可怕的事情。

英国圣托马斯医院当年的手术器械，保留到了现在。

![](https://cdn.beekka.com/blogimg/asset/202212/bg2022120502.webp)

看看上面的器械，特别是那把锯子，难怪当年的外科病人有一半是死在手术台上的。

2、[环法自行车赛的冠军速度](https://www.statista.com/chart/22981/average-speed-of-tour-de-france-winners-by-decade/)

世界最著名的自行车比赛，是环法自行车赛。下图是从1903年第一届比赛开始，冠军的平均速度。

![](https://cdn.beekka.com/blogimg/asset/202207/bg2022071106.webp)

可以看到，冠军的骑速一直在增加，从第一届的26.85公里/小时，增加到2021年的41.17公里/小时。不过进入21世纪之后，增长似乎停滞了。

环法自行车赛的路线基本不变，总长3500公里左右。冠军速度的增长，只有两种解释，一种是自行车器材的进步，另一种是运动员可能服用了药物。

3、[无线电波](https://lcamtuf.substack.com/p/radios-how-do-they-work)

无线电波是什么？我们可以把它想象成一个带电的电容器被拉开，其内部电场溢出到周围空间。

![](https://cdn.beekka.com/blogimg/asset/202403/bg2024032815.webp)

如果进行电场可视化，绘制虚拟的正电粒子路径，我们会看到连接两极的弧形线，从两侧一直延伸到无穷大。

当然，不变的电场对于无线电不是很有用，但是如果改变两极的电荷，电场就会变化。

## 文摘

1、[史上最长的载人飞行](https://hackaday.com/2021/10/25/the-longest-ever-flight-was-over-64-days-in-a-cessna-172/)

载人飞行最长可以持续多少时间？

1958年12月到1959年2月，两个飞行员乘坐一架小飞机，一共在空中停留了64天22小时19分钟，这个记录至今无人打破。

![](https://cdn.beekka.com/blogimg/asset/202212/bg2022121301.webp)

大家可能想不到，这两个飞行员不是科学家，也不是军方人员，而是美国拉斯维加斯一个娱乐城的员工。

当时，为了吸引顾客，他们想出一个点子，如果开着画着公司标志的小飞机，创造在空中不间断飞行的纪录，就可以提升公司的知名度。老板觉得是个好主意，就同意了。

1958年12月4日下午3点52分，他们起飞了。公证员驾驶一辆敞篷车在跑道上追赶飞机，起飞的一刹那，他们在轮胎上涂上白油漆，防止飞机偷偷降落。

为了长时间在空中停留，这架小飞机必须定期接受补给。它平时在空中飞，但是每天有两次贴近地面，让卡车来加油，同时补给生活物质。

![](https://cdn.beekka.com/blogimg/asset/202212/bg2022121302.webp)

65天的飞行过程中，卡车一共为飞机加油128次。

两个飞行员轮流驾驶飞机，休息的那个人会阅读漫画和玩游戏，还会数下面道路上有多少辆汽车，以此打发时间。他们的生活垃圾会打包，从空中扔到无人的沙漠中。

有一天凌晨，驾驶飞机的那个飞行员实在过于疲劳，不禁睡着了。等他醒来，飞机已经自行飞行了一个多小时。除此以外，总体上没有大的事故。

随着时间的推移，这架飞机的故障越来越多，发动机和仪表都开始出现各种小问题。他们又坚持了几天，最终决定在1959年2月7日降落。

今天，这架小飞机陈列在拉斯维加斯的麦卡伦国际机场，就挂在旅客行李大厅的上方。

![](https://cdn.beekka.com/blogimg/asset/202212/bg2022121303.webp)

这架上个世纪50年代的小飞机，它的发动机能够连续运行1500个小时，非常了不起。更了不起的是，两个飞行员能够在充满噪音的狭小机舱里面生活两个多月，这不是常人可以忍受的。可能正是因为这个原因，该记录至今未被打破。

## 言论

1、

电动汽车的最大缺点是，大部分能量用来移动电池，而不是移动乘客。

人类的体重并不重（大约70公斤左右），特斯拉 Y 型汽车的电池重量是770公斤。所以，运送电池的耗能是运送乘客的10倍。

-- [Hacker News 读者](https://news.ycombinator.com/item?id=38835304)

2、

个人的财务管理，其实只有两条原则：一是支出小于收入，二是做对投资，投资对象可以是能够获利的资产，也可以是你的个人技能。

-- [Hacker News 读者](https://news.ycombinator.com/item?id=34532288)

3、

如果你感觉自己被困住了，焦虑并充满消极情绪，生命出现了停滞，那么治疗方法很简单：做点什么。

-- [《摆脱束缚的最好方法》](https://ggnotes.com/the-best-way-to-get-unstuck)

4、

我所在的公司去年赚了数十亿美元，但是决定解雇数百名工程师（占员工的很大比重）。一些我最尊敬的优秀工程师就这样离开了，这完全没有道理。

此前公司已经裁员过一轮了，管理层那时告诉我们，员工调整已经完成，一切到此为止。

你不能相信比你地位高的管理者告诉你的任何事情。他们可能对自己也撒了谎，更何况对你。永远不要对你的公司投入感情。

-- [Hacker News 读者](https://news.ycombinator.com/item?id=38949749)

5、

有一种流行的错误观点，认为黑洞就像宇宙吸尘器，会把周围一切吸进去。事实上，如果太阳塌缩变成一个黑洞，太阳系行星的轨道将不会变化，因为太阳系的中心质量保持不变，行星感受到与以前相同的重力。

黑洞的独特之处在于尺寸非常小，但密度很高。这使得在非常接近它的质心的地方，引力极其强烈，但这不会增加远离质心之处的引力。

-- [《最早提出黑洞的人》](https://www.amnh.org/learn-teach/curriculum-collections/cosmic-horizons-book/john-michell-black-holes)

## 往年回顾

[不要夸大 ChatGPT](https://www.ruanyifeng.com/blog/2023/03/weekly-issue-248.html)（2023 #248）

[美国制造是否可能](https://www.ruanyifeng.com/blog/2022/03/weekly-issue-198.html)（2022 #198）

[微增长时代](https://www.ruanyifeng.com/blog/2021/03/weekly-issue-148.html)（2021 #148）

[怎样清晰地表达自己的观点？](https://www.ruanyifeng.com/blog/2020/03/weekly-issue-98.html)（2020 #98）

（完）

