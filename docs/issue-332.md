# 科技爱好者周刊（第 332 期）：西蒙·威利森的年终总结，梁文锋的访谈

这里记录每周值得分享的科技内容，周五发布。

本杂志[开源](https://github.com/ruanyf/weekly)，欢迎[投稿](https://github.com/ruanyf/weekly/issues)。另有[《谁在招人》](https://github.com/ruanyf/weekly/issues/5830)服务，发布程序员招聘信息。合作请[邮件联系](mailto:yifeng.ruan@gmail.com)（yifeng.ruan@gmail.com）。

## 封面图

![](https://cdn.beekka.com/blogimg/asset/202501/bg2025010104.webp)

世界最长的高速公路隧道“天山胜利隧道”本周贯通，长达22.13公里，汽车要在里面开20分钟。它连接了被天山隔断的南疆和北疆。（[via](http://news.cjn.cn/bsy/gnxw_19788/202412/t5064119.htm)）

## 西蒙·威利森的年终总结，梁文锋的访谈

英国程序员西蒙·威利森（Simon Willison）最近两年非常出名，[他的个人网站](https://simonwillison.net)有很多文章，介绍 AI 的最新进展。

![](https://cdn.beekka.com/blogimg/asset/202501/bg2025010216.webp)

本周，他发表了很长一篇的[2024年大模型回顾](https://simonwillison.net/2024/Dec/31/llms-in-2024/)（非官方的[中译](https://www.163.com/dy/article/JKTHVG4C0511AQHO.html)），非常精彩。

![](https://cdn.beekka.com/blogimg/asset/202501/bg2025010217.webp)

他提到，AI 的发展速度快得难以想象。

一年前的2023年底，排名第一的 AI 模型是 OpenAI 公司的 GPT-4，没有其他模型能超过它。

![](https://cdn.beekka.com/blogimg/asset/202501/bg2025010218.webp)

一年过去了，大家猜猜，GPT-4 现在[排名](https://lmarena.ai/?leaderboard)多少？

![](https://cdn.beekka.com/blogimg/asset/202501/bg2025010219.webp)

答案是第69位（上图），已经有18家公司的大模型超过了它。其中的一些模型，甚至可以在笔记本电脑运行。

短短一年，榜首模型就被大量竞争者轻松超过，家用硬件就能达到它的运行效果。AI 的进化速度就是这么惊人。

西蒙·威利森特别提到了来自中国的大模型 [DeepSeek V3](https://api-docs.deepseek.com/zh-cn/news/news1226)。

![](https://cdn.beekka.com/blogimg/asset/202501/bg2025010220.webp)

DeepSeek V3 是2024年12月25日发布的，来自杭州的量化基金公司幻方量化。一经发布，它就引起了国际范围的轰动。

它在多个参数上，[击败](https://api-docs.deepseek.com/news/news1120)了 OpenAI 公司最新的 o1 模型。目前，它在大模型排行榜上排名第7，要知道前十名里面，只有它是[开源模型](https://github.com/deepseek-ai/DeepSeek-V3)，而且是最少限制的 MIT 许可证，其他都是大公司的专有模型。

![](https://cdn.beekka.com/blogimg/asset/202501/bg2025010221.webp)

而且，它的运行效率很高，训练成本估计只有 Meta 公司的 Llama 3.1 405B 模型的11分之一，而后者的效果还不如它。这就是说，DeepSeek 找到了高效使用硬件、提高模型效果的方法。

西蒙·威利斯说：“DeepSeek V3 的训练成本不足600万美元，是一个极好的迹象，表明 AI 模型的训练成本可以而且应该会继续下降。”

西方媒体就非常好奇，DeepSeek 是怎么做到的？

幻方量化创始人梁文锋，跟其他 AI 模型的研究者不同，没有海外经历，毕业于浙江大学电子工程系人工智能方向。

![](https://cdn.beekka.com/blogimg/asset/202501/bg2025010222.webp)

西方媒体对他充满了好奇，专门将他以前的访谈译成了[英文](https://www.chinatalk.media/p/deepseek-ceo-interview-with-chinas)。

我觉得，原始的中文访谈（[ Part 1](https://mp.weixin.qq.com/s/Cajwfve7f-z2Blk9lnD0hA)，[Part 2](https://mp.weixin.qq.com/s/r9zZaEgqAa_lml_fOEZmjg)）很值得一读，我分享他说的几段话，展示了中国顶级研究者的视野和抱负。

（1）我们要做的不是生成式 AI，而是通用人工智能 AGI。前者只是后者的必经之路，AGI 会在我们有生之年实现。

（2）任何 AI 公司（短期内）都没有碾压对手的技术优势，因为有 OpenAI 指路，又都基于公开论文和代码，大厂和创业公司都会做出自己的大语言模型。

（3）在颠覆性的技术面前，闭源形成的护城河是短暂的。即使 OpenAI 闭源，也无法阻止被别人赶超。我们把价值沉淀在团队上，我们的同事在这个过程中得到成长，积累很多know-how，形成可以创新的组织和文化，就是我们的护城河。

（4）我们不会闭源。我们认为先有一个强大的技术生态更重要。

（5）当前阶段是技术创新的爆发期，而不是应用的爆发期。大模型应用门槛会越来越低，创业公司在未来20年任何时候下场，也都有机会。

（6）过去很多年，很多的中国公司习惯了别人做技术创新，拿过来做应用变现，自己等着摩尔定律从天而降，躺在家里18个月就会出来更好的硬件和软件。我们的出发点，就不是趁机赚一笔，而是走到技术的前沿，去推动整个生态发展。中国也要逐步成为贡献者，而不是一直搭便车。

（7）大部分中国公司习惯 follow，而不是创新。中国创新缺的不是资本，而是缺乏信心以及不知道怎么组织高密度的人才。我们没有海外回来的人，都是本土的。前50名顶尖人才可能不在中国，但也许我们能自己打造这样的人。

（8）我们每个人对于卡和人的调动是不设上限的。如果有想法，每个人随时可以调用训练集群的卡无需审批。同时因为不存在层级和跨部门，也可以灵活调用所有人，只要对方也有兴趣。

（9）我们选人的标准一直都是热爱和好奇心，所以很多人会有一些奇特的经历，很有意思。很多人对做研究的渴望，远超对钱的在意。

（10）我们在做最难的事。对顶级人才吸引最大的，肯定是去解决世界上最难的问题。其实，顶尖人才在中国是被低估的。因为整个社会层面的硬核创新太少了，使得他们没有机会被识别出来。我们在做最难的事，对他们就是有吸引力的。

（11）中国产业结构的调整，会更依赖硬核技术的创新。很多人发现过去赚快钱很可能来自时代运气，现在赚不到了，就会更愿意俯身去做真正的创新。

（12）我是八十年代在广东一个五线城市长大的。我的父亲是小学老师，九十年代，广东赚钱机会很多，当时有不少家长觉得读书没用。但现在回去看，观念都变了。因为钱不好赚了，连开出租车的机会可能都没了。一代人的时间就变了。以后硬核创新会越来越多，因为整个社会群体需要被事实教育。当这个社会让硬核创新的人功成名就，群体性想法就会改变。我们只是还需要一堆事实和一个过程。

## 科技动态

1、[AirTag 充电盒](https://www.elevationlab.com/blogs/news/introducing-timecapsule)

苹果公司的 AirTag 可以追踪物品，但如果没电，就无法追踪了。

一位国外程序员就遇到了这个问题。他的1万美元装备的相机包放在车后座被偷了，当他打开追踪时，才发现里面的 AirTag 忘了换电池，已经无法追踪了。

他痛定思痛，发明了一个 AirTag 充电盒，把两节五号电池跟 AirTag 封装在一起，为后者充电。

![](https://cdn.beekka.com/blogimg/asset/202412/bg2024122623.webp)

据他说，这个充电盒可以持续工作10年，完全不用担心没电。

![](https://cdn.beekka.com/blogimg/asset/202412/bg2024122624.webp)

只要把这个小盒子跟你要追踪的物品，放在一起，就不用管它了，一直可以追踪。

![](https://cdn.beekka.com/blogimg/asset/202412/bg2024122625.webp)

2、[无护照过海关](https://www.ica.gov.sg/news-and-publications/newsroom/media-release/passport-less-clearance-fully-rolled-out-at-changi-airport)

从2024年9月30日开始，新加坡公民通过樟宜机场出入境，不再需要护照了。

![](https://cdn.beekka.com/blogimg/asset/202412/bg2024122904.webp)

机场会使用人脸识别和虹膜识别，来代替护照。这样更省时、成本更低。

纸制护照已经过时了，也许不久将来就会消失。

3、[世界最大 3D 打印社区](https://www.yahoo.com/news/worlds-largest-3d-printed-neighborhood-060654029.html)

美国得克萨斯州即将完工世界最大的 3D 打印社区，共有100幢住宅。

![](https://cdn.beekka.com/blogimg/asset/202501/bg2025010208.webp)

这些房子都是一个巨大的 3D 打印机生成的。

![](https://cdn.beekka.com/blogimg/asset/202501/bg2025010209.webp)

房屋的打印材料是混凝土粉末、水、沙子、添加剂的混合物，喷嘴将混合物像牙膏一样挤出，沿着预先编程的路径层层堆叠，形成墙壁。

![](https://cdn.beekka.com/blogimg/asset/202501/bg2025010210.webp)

建筑公司表示，3D 打印房屋更快、更便宜，现场只需要一个操作员，并且最大限度地减少了建筑材料浪费。

![](https://cdn.beekka.com/blogimg/asset/202501/bg2025010211.webp)

单层的三居室或四居室住宅，大约需要三周才能打印好所有墙壁，然后再用传统方式加固地基和安装屋顶。

![](https://cdn.beekka.com/blogimg/asset/202501/bg2025010212.webp)

4、**其他**

（1）网友发现，[Spotify](https://www.honest-broker.com/p/the-ugly-truth-about-spotify-is-finally) 歌单里面，有些音乐家根本不存在，他们的作品很可能是 AI 生成的，Spotify 以此减少付出的版权费。

（2）百度推出“[Ai 搜](https://chat.baidu.com/search)”，汇集了各种 AI 相关功能。

![](https://cdn.beekka.com/blogimg/asset/202501/bg2025010203.webp)

## 文章

1、[2024年 Linux 发行版推荐](https://linuxiac.com/best-linux-distro-of-2024-there-is-no-such-thing/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202412/bg2024122901.webp)

作者介绍他心目中，各种用途最佳的 Linux 发行版。

2、[中美工作感想](https://wukan.me/?p=2649)（中文）

![](https://cdn.beekka.com/blogimg/asset/202412/bg2024122801.webp)

“过去四年五个月，我随着工作从 SF 搬到北京，再搬到上海，后来搬回美国在洛杉矶住了一年半。”本文是国内做工程师和美国做工程师的对比。（[@wukan](https://github.com/ruanyf/weekly/issues/5805) 投稿）

3、[开发者应该知道的10个终端命令](https://www.trevorlasn.com/blog/10-essential-terminal-commands-every-developer-should-know/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202408/bg2024082602.webp)

本文简单介绍10个终端命令，比如 grep、awk、sed、find 等。

4、[Meta 四次面试经历](https://justyy.com/archives/67279)（中文）

“这些年，我一共面试了四次 Facebook/Meta。虽然都未成功，但收获颇多。”（[@DoctorLai](https://github.com/ruanyf/weekly/issues/5816) 投稿）

5、[算法面试心得](https://javayhu.com/2016-nian-mian-shi-zhi-nan-zhi-suan-fa-mian-shi-xin-de/)（中文）

![](https://cdn.beekka.com/blogimg/asset/202501/bg2025010201.webp)

本文是作者对如何应付一般的算法面试的知识总结和心得。（[@javayhu](https://github.com/ruanyf/weekly/issues/5836) 投稿）

6、[我们用 React 取代了 Next.js](https://www.comfydeploy.com/blog/you-dont-need-nextjs)（英文）

![](https://cdn.beekka.com/blogimg/asset/202501/bg2025010206.webp)

作者难以忍受 Next.js 的庞杂和性能，改为直接使用 React，不再用基于它的框架了。

7、[Windows 的增强剪贴板](https://www.xda-developers.com/permanently-save-items-clipboard-windows-11/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202412/bg2024122906.webp)

我很少用 Windows，现在才知道它的剪贴板有同步功能，还能永久保存。

## 工具

1、[Ghostty](https://ghostty.org/docs)

![](https://cdn.beekka.com/blogimg/asset/202412/bg2024122804.webp)

一个终端模拟器，使用 GPU 渲染 UI，支持 mac 和 Linux。作者是 HashiCorp 公司创始人，参见[介绍文章](https://linuxiac.com/ghostty-1-0-gpu-accelerated-terminal-emulator-released/)。

2、[Black Candy](https://github.com/blackcandy-org/blackcandy)

![](https://cdn.beekka.com/blogimg/asset/202412/bg2024122905.webp)

一个自搭建的音乐流媒体服务器，自带手机和 Web 客户端，相当于自己的云音乐平台。

3、[curl-impersonate](https://github.com/lexiforest/curl-impersonate)

一个 curl 的改写版，使其发出的 HTTP 请求就像 Chrome/Firefox 发出的。

4、[RSS.Beauty](https://rss.beauty/)

![](https://cdn.beekka.com/blogimg/asset/202501/bg2025010202.webp)

将普通的 RSS/Atom 订阅源转换成美观的阅读界面，[代码开源](https://github.com/ccbikai/RSS.Beauty)。（[@ccbikai](https://github.com/ruanyf/weekly/issues/5838) 投稿）

5、[AI Shadcn 主题生成器](https://ipalettes.com/theme/shadcn)

![](https://cdn.beekka.com/blogimg/asset/202412/bg2024123004.webp)

输入关键词，就可以免费生成 Shadcn 主题。（[@meetqy](https://github.com/ruanyf/weekly/issues/5817) 投稿）

6、[懒猫书签](https://github.com/Alanrk/LazyCat-Bookmark-Cleaner)

![](https://cdn.beekka.com/blogimg/asset/202412/bg2024123102.webp)

开源的 Chrome 插件，一键清理失效链接和空文件夹。（[@Alanrk](https://github.com/ruanyf/weekly/issues/5832) 投稿）

类似插件还有 [Bookmark Pro](https://bookmark-remainder-and-manager-pro.exthub.top)。（[@wincatcher](https://github.com/ruanyf/weekly/issues/5833) 投稿）

![](https://cdn.beekka.com/blogimg/asset/202412/bg2024123103.webp)

7、[Nping](https://github.com/hanshuaikang/Nping)

![](https://cdn.beekka.com/blogimg/asset/202412/bg2024123006.webp)

Rust 语言开发的 Ping 工具，支持多个地址并发 Ping，并附带实时折线图展示。（[@hanshuaikang](https://github.com/ruanyf/weekly/issues/5821) 投稿）

8、[peepDB](https://github.com/PeepDB-dev/peepdb)

![](https://cdn.beekka.com/blogimg/asset/202409/bg2024092302.webp)

一个命令行工具，连接各种主流的关系型数据库，查看表内容。

9、[File Pilot](https://filepilot.tech)

![](https://cdn.beekka.com/blogimg/asset/202501/bg2025010204.webp)

非官方的 Windows 文件管理器，号称可以取代官方的资源管理器。

10、[Doggo](https://doggo.mrkaran.dev/docs/)

![](https://cdn.beekka.com/blogimg/asset/202407/bg2024070204.webp)

一个易用的 DNS 命令行查询工具。

它的[官网首页](https://doggo.mrkaran.dev/)还提供 DNS 在线查询。

![](https://cdn.beekka.com/blogimg/asset/202407/bg2024070205.webp)

## AI 相关

1、[DeepSeek Coder](https://github.com/sing1ee/deepseekCoder)

![](https://cdn.beekka.com/blogimg/asset/202412/bg2024122803.webp)

根据提示生成 App，基于 DeepSeek V3 模型。（[@sing1ee](https://github.com/ruanyf/weekly/issues/5808) 投稿）

2、[GodView](https://godview.ai)

![](https://cdn.beekka.com/blogimg/asset/202412/bg2024122902.webp)

语义化地图，用自然语言查询地图，比如输入“请展示上海的前10大图书馆”。

3、[对话 CEO](https://talkto.ceo)

![](https://cdn.beekka.com/blogimg/asset/202412/bg2024123005.webp)

与马斯克、张一鸣、任正非对话，效果还可以。（[@5A59](https://github.com/ruanyf/weekly/issues/5819) 投稿）

4、[ithy](https://ithy.com)

![](https://cdn.beekka.com/blogimg/asset/202412/bg2024123104.webp)

AI 模型聚合网站，输入关键词，同时返回 Lllma 3.1、o1-mini、Sonnet 3.5、Grok 2、Gemini 1.5 pro 的生成结果。

5、[AutoMouser](https://github.com/guoriyue/AutoMouser)

开源的 Chrome 浏览器插件，将鼠标操作通过 AI 转为 Selenium Python 脚本，需要 OpenAI key。（[@guoriyue](https://github.com/ruanyf/weekly/issues/5809) 投稿）

## 资源

1、[search the arXiv](https://searchthearxiv.com)

![](https://cdn.beekka.com/blogimg/asset/202412/bg2024122903.webp)

arXiv 论文库的搜素引擎，使用自然语言搜索。

2、[《算法（第4版）》的 C++ 实现](https://github.com/landerrosette/algs4) 

这个仓库包含《算法（第4版）》教科书介绍的算法的 C++ 语言实现，与原书的 Java 实现相对应，（[@landerrosette](https://github.com/ruanyf/weekly/issues/5814) 投稿）

3、[EmojiClick](https://emojis.click/zh)

![](https://cdn.beekka.com/blogimg/asset/202412/bg2024122802.webp)

使用自然语言搜索 Emoji 符号。（[@yijianbo](https://github.com/ruanyf/weekly/issues/5806) 投稿）

4、[独立开发者工具](https://github.com/yaolifeng0629/Awesome-independent-tools)

该仓库收集独立开发者出海技术栈和工具。（[@yaolifeng0629](https://github.com/ruanyf/weekly/issues/5837) 投稿）

## 图片

1、[世界最美钞票](https://www.theibns.org/joomla/index.php)

2023年，国际钞票协会评选当年的“世界最美钞票”。得奖者是东加勒比中央银行发行的2元纸币。

这张钞票色彩缤纷，确实非常漂亮。正面是当地板球明星，以及银行标志、乌龟和鱼。

![](https://cdn.beekka.com/blogimg/asset/202412/bg2024122805.webp)

背面是鱼、珊瑚、海龟、蓝色岛屿地图。

![](https://cdn.beekka.com/blogimg/asset/202412/bg2024122806.webp)

2、[行业圣诞树](https://www.instagram.com/p/DED6ejQyX31/)

上周圣诞节，美国媒体贴出了，各行各业搭建自己圣诞树的照片。

披萨店的外卖盒圣诞树。

![](https://cdn.beekka.com/blogimg/asset/202501/bg2025010223.webp)

家装店的玻璃圣诞树。

![](https://cdn.beekka.com/blogimg/asset/202501/bg2025010224.webp)

修路队的交通锥圣诞树。

![](https://cdn.beekka.com/blogimg/asset/202501/bg2025010226.webp)

书店的圣诞树。

![](https://cdn.beekka.com/blogimg/asset/202501/bg2025010227.webp)

电脑店的圣诞树

![](https://cdn.beekka.com/blogimg/asset/202501/bg2025010230.webp)

超市的香蕉圣诞树

![](https://cdn.beekka.com/blogimg/asset/202501/bg2025010229.webp)

## 文摘

1、[亚马逊河为什么没有桥？](https://www.cntraveler.com/story/why-the-amazon-river-cant-be-crossed-by-bridge)

南美洲的亚马逊河是世界第二长的河流，仅次于非洲的尼罗河。

![](https://cdn.beekka.com/blogimg/asset/202501/bg2025010231.webp)

但是，这条河没有一座桥，是唯一一条没有任何桥梁的世界主要河流。这是为什么呢？

首先，每年的雨季，亚马逊河都会泛滥，河流的宽度会从旱季的5公里变成50公里，就像下图那样，很难造桥。

![](https://cdn.beekka.com/blogimg/asset/202309/bg2023092901.webp)

其次，亚马逊河沿岸人烟稀少，只有很少几个城镇。最大一个城市的人口只有50万，不存在前往河对岸的强烈需求。

最后，亚马逊河两岸都是原始森林，并没有现成道路。如果造桥就需要砍伐大量森林，修建引桥和公路，环境代价很大。近年来，环保意识逐渐高涨，反对造桥的呼声也就越来越大。

## 言论

1、

由于 AI 的出现，英语正在成为最热门的新编程语言。

-- [Andrej Karpathy](https://addyo.substack.com/p/the-70-problem-hard-truths-about)，著名的 AI 科学家

2、

除非手机可以当成电脑使用，否则我不打算再为性能升级手机了，不再为越来越快的 CPU 买单了。

-- [Android Authority 专栏作家](https://www.androidauthority.com/phone-pc-performance-3504716/)

3、

保护海底光缆不出事是不可能的，你唯一能做的就是建立大量冗余，在不同位置铺设数十根光缆可能比保护它们更便宜。

-- [Hacker News 读者](https://news.ycombinator.com/item?id=42351249)

4、

强大的工程师不在于速度快或产出高，而在于能够完成其他工程师无法完成的任务。弱小的工程师几乎任何任务都完成不了。

如果你和一个弱小的工程师一起工作，你可以帮他，但一定要保护好你的时间，防止他把你的时间都消耗光。

-- [《强大的工程师与弱小的工程师》](https://www.seangoedecke.com/weak-engineers/)

5、

人工智能并不是释放我们的想象力，而是外包它们。

-- [英国《卫报》](https://www.theguardian.com/technology/2024/nov/16/ai-isnt-about-unleashing-our-imaginations-its-about-outsourcing-them-the-real-purpose-is-profit)

## 往年回顾

[为什么 PPT 不如备忘录](http://www.ruanyifeng.com/blog/2024/01/weekly-issue-285.html)（#285）

[青年失业率与选择创业](http://www.ruanyifeng.com/blog/2022/12/weekly-issue-235.html)（#235）

[美国宪法拍卖，一个区块链案例](http://www.ruanyifeng.com/blog/2021/11/weekly-issue-185.html)（#185）

[什么行业适合创业？](http://www.ruanyifeng.com/blog/2020/11/weekly-issue-135.html)（#135）

（完）

