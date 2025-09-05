# 科技爱好者周刊（第 364 期）：最难还原的魔方

这里记录每周值得分享的科技内容，周五发布。

本杂志[开源](https://github.com/ruanyf/weekly)，欢迎[投稿](https://github.com/ruanyf/weekly/issues)。另有[《谁在招人》](https://github.com/ruanyf/weekly/issues/7674)服务，发布程序员招聘信息。合作请[邮件联系](mailto:yifeng.ruan@gmail.com)（yifeng.ruan@gmail.com）。

## 封面图

![](https://cdn.beekka.com/blogimg/asset/202508/bg2025083002.webp)

厦门某超市的切片西瓜。（[via](https://www.facebook.com/hxdb1234/posts/pfbid0z2PutGZHD3tWu9BDMTmYP8fqFcySML1K8PRvURUvj8QzpPN1zCtEDwrw9e5yhQnCl)）

## 最难还原的魔方

说来奇怪，我认识的很多程序员，平时看上去没有共同点，但是一问，他们都喜欢魔方。

而且，水平都很厉害，一般来说不超3分钟，就能还原魔方。

![](https://cdn.beekka.com/blogimg/asset/202509/bg2025090405.webp)

有一段时间，我们办公室有好几个魔方，没事的时候，大家就拿在手里拧。

我想过一个问题：**什么样的魔方最难还原？** 

不同的魔方，还原难度肯定是不一样的，但是怎么衡量难度呢？

最近，我意外发现，这个问题在国外早有人[研究](https://www.solutionslookingforproblems.com/post/the-rubik-s-cube-perfect-scramble)了。

而且，他提出了衡量标准，最难还原的魔方应该同时满足下面6个条件。

> 1. 每一面都包含6种颜色。
> 1. 每一面的任何一种颜色不超过两个色块。
> 1. 任何一面上，不能有两个相同颜色的连续色块。
> 1. 任何一面上，不能有两个相同颜色的色块在对角线上。
> 1. 八个角上，不能有相同颜色的色块。
> 1. 每一面的图案都必须不同。

更让人佩服的是，他写了一个 [C++ 程序](https://github.com/telemath/PerfectScramble)，去找出最难还原的魔方。

魔方的排列方式共有 43,252,003,274,489,856,000 种，他的家用计算机花了5天，才跑完所有计算。

最终发现，**只有下面一种排列，满足上面六个要求**。

![](https://cdn.beekka.com/blogimg/asset/202508/bg2025080310.webp)

上面这个图案，就是最难还原的魔方。

这个图案包含了魔方的6个面。由于这6个面可以随机组合，因此一共有48种形态。

![](https://cdn.beekka.com/blogimg/asset/202508/bg2025080311.webp)

## [本周软件] GeeLark：跨境营销的 AI 助理

很多企业和个人，都有使用境外社媒平台（Facebook、Instagram、X/Twitter、TikTok、YouTube、Reddit 等）的需求。

今天向大家介绍一款桌面软件 [GeeLark](https://t.wangbase.com/pYrpV)，**一站式管理这些平台**，简单好用，是跨境营销、电商出海的好帮手。

![](https://cdn.beekka.com/blogimg/asset/202509/bg2025090403.webp)

![](https://cdn.beekka.com/blogimg/asset/202509/bg2025090401.webp)

**它内置了云手机与指纹浏览器**，可以一键新建云端的手机实例，去访问社媒平台。

云手机有很多好处：（1）每个账号有独立隔离的运行环境，支持同时登录多账号；（2）体验与实体手机无异，操作都在桌面电脑完成；（3）提供指纹浏览器环境，每台云手机的指纹都不一样，不会被平台限流。

![](https://cdn.beekka.com/blogimg/asset/202509/bg2025090402.webp)

这一次，GeeLark 的最新版本增加了很多特色功能。

（1）**加入了 AI 大模型**，支持疑难解答、视频生成剪辑、AI 养号、文案撰写等。

尤其是图生视频功能（上图），有多个热门模型可选，可以用来产品照片快速生成视频。

（2）**自动化常用操作**。举例来说，它的 TikTok 有 AI 养号、视频与图集的自动发布、自动挂车、AI 数据助手、自动赞评等功能。

对于现在热门的短剧出海用户，它提供 AI “锚点”功能，为短剧引流。

（3）**Reddit 自动化**。值得一提的是，它还在自动化模板商店，上线了 Reddit 自动化功能，可以 AI 管理 Reddit 账号，自动发布内容。

要知道，AI 生成引擎引用最多的就是 Reddit 内容，做好 Reddit 自动化，有利于你的 GEO（内容生成引擎优化）。

（4）**自定义任务**。如果内置的自动化操作不够用，它还允许自定义任务，满足个性化运营需求。

比如，你可以在工作流中，自己接入一个具备图像识别能力的模型，对云手机画面进行智能识别，并基于画面内容执行自动化操作。

（5）**开放 API**。GeeLark 提供 [API](https://t.wangbase.com/LeK9D)，你可以自己编程调用，新建云手机实例和自动化任务。这样一来，它的用途和想象空间就更大了。

总之，如果你需要跨境营销，管理境外社媒平台账号，GeeLark 值得一试。

用户/团队开通套餐后，根据使用量计费，用多少付多少，**不按团队人数收取席位费**。并且，团队可以对每个成员设置独立访问权限，团队成员无需知晓社媒平台的账号密码，即可操作。

欢迎访问官网 [geelark.cn](https://www.geelark.cn/?utm_source=ruanyifeng.com&utm_medium=post&utm_campaign=campaign20250905)，下载试用，具体用法可参考[官方教程](https://t.wangbase.com/XdBPV)。

## 科技动态

1、韩国在夜晚的首尔公园，启用“[全息警察](https://www.scmp.com/week-asia/lifestyle-culture/article/3322654/south-korea-deploys-hologram-police-officer-fight-crime-and-its-working)”。

![](https://cdn.beekka.com/blogimg/asset/202508/bg2025083011.webp)

你会看到一个真人大小的警察，站在公园草丛里，还会说话和做出动作。如果距离远，根本看不出是投影。

警方说，该装置激活期间，公园的犯罪率下降了约22%。

2、一个美国程序员将一台老式咖啡机，改装成“[咖啡机电脑](https://www.dougmacdowell.com/coffeematic-pc.html)”。

![](https://cdn.beekka.com/blogimg/asset/202508/bg2025080201.webp)

这台电脑既可以当作电脑，也可以当作咖啡机，两者的所有功能都是可用的。

![](https://cdn.beekka.com/blogimg/asset/202508/bg2025080202.webp)

这件事最难的地方是，咖啡机产生高温水蒸汽，而电脑不能进水，还需要散热。两者放在一起，电脑很难稳定运行。

![](https://cdn.beekka.com/blogimg/asset/202508/bg2025080203.webp)

3、[Meta 公司](https://www.nytimes.com/2025/07/23/science/meta-computer-wristband-reardon.html)发明了，可以控制电脑的腕带。

![](https://cdn.beekka.com/blogimg/asset/202507/bg2025072802.webp)

这个腕带的大小就像一块手表，据说可以替代鼠标甚至触控笔，控制电脑。

它的原理十分新颖，手指和手掌移动时，会产生肌肉的电信号，这个腕带能够读取这种电信号，并判断出动作的意图。

4、[矿井储能](https://www.independent.co.uk/tech/gravity-battery-mine-renewable-energy-b2492087.html)

芬兰有一个1400米深的废弃矿井，一家英国公司计划将其变为储能电池。

![](https://cdn.beekka.com/blogimg/asset/202402/bg2024021102.webp)

它的思路很简单，就是在矿井中安装悬挂重物的起重机。多余的电力用来将重物吊起，需要用电时，则让重物缓慢下落，释放重力势能，带动涡轮发电机发电。

![](https://cdn.beekka.com/blogimg/asset/202402/bg2024021103.webp)

如果这种方法可行，废弃矿井就能利用起来，转变为储能基地。

5、[地图广告](https://www.androidauthority.com/google-maps-pop-up-ad-3458170/)

谷歌地图最近出现了一种新型广告。

当你使用导航时，它会突然跳出一个窗口（下图），告诉你可以在某个地方临时停一下。

![](https://cdn.beekka.com/blogimg/asset/202407/bg2024070902.webp)

不妨想象一下，以后导航路线可能会出现 n 个打卡点，只要你进店手机打卡，就能获得奖励或者消费优惠券。

## 文章

1、[Cloudflare 的爬虫认证](https://developers.cloudflare.com/bots/reference/bot-verification/web-bot-auth/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202508/bg2025083001.webp)

Cloudflare 作为世界最大 CDN 服务商，推出了爬虫认证。如果想抓取它托管的网站，必须登记你的公钥，然后每个请求附上签名。

2、[我在 Anduril 当工程师](https://joincolossus.com/article/the-amusement-park-for-engineers/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202508/bg2025083102.webp)

Anduril 是美国新崛起的一家国防科技公司，专注于无人机的军事应用。它的创始人就是 AR 眼镜产品 Oculus 的创始人，自称要用无人机保卫美国。

本文是它的工程师介绍公司内部研发情况，很多细节，推荐阅读。

3、[用数据库替换缓存](https://avi.im/blag/2025/db-cache/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202509/bg2025090101.webp)

作者谈了他的看法，什么时候直接查询数据库，什么时候使用缓存。相比数据库，缓存有什么优缺点。

4、[我们把 AI 编程放入一个 while 循环](https://github.com/repomirrorhq/repomirror/blob/main/repomirror.md)（英文）

作者写了一段指令，让 AI 自己生成代码，出现问题就自己提交 PR 修复。

他把这段指令放入 while 循环，就去睡觉了。第二天醒来，看看 AI 进展如何。（剧透：一个晚上，AI 用掉了800美元。）

5、[我的 Python 工具箱](https://www.cesarsotovalero.net/blog/i-am-switching-to-python-and-actually-liking-it.html)（英文）

![](https://cdn.beekka.com/blogimg/asset/202507/bg2025071711.webp)

作者是 Python 语言初学者，本文介绍他使用的基本开发工具，比如 uv、ruff、ty 等等。

6、[AMD 和 Intel CPU 之间的区别](https://www.xda-developers.com/differences-between-amd-and-intel-cpus/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202507/bg2025071709.webp)

AMD 和 Intel 都生产 x86 CPU，虽然是同质产品，本文介绍它们的架构差异。

## 工具

1、[sping](https://dseltzer.gitlab.io/sping/)

![](https://cdn.beekka.com/blogimg/asset/202508/bg2025083006.webp)

ping 命令的增强版，会在终端图形显示每个数据包的延迟。

2、[Beszel](https://github.com/henrygd/beszel)

![](https://cdn.beekka.com/blogimg/asset/202505/bg2025052102.webp)

轻量级服务器监控工具，带有 Web 界面，参考[介绍文章](https://www.xda-developers.com/beszel-feature/)。

3、[WinApps](https://github.com/winapps-org/winapps)

![](https://cdn.beekka.com/blogimg/asset/202509/bg2025090411.webp)

Linux 系统运行 Windows 应用的工具，它会自动启动一个虚拟机来运行，跟 Wine 的原理不一样（它是模拟 Windows API）。

另有一个类似工具 [WinBoat](https://github.com/TibixDev/winboat)。

![](https://cdn.beekka.com/blogimg/asset/202509/bg2025090412.webp)

4、[YouTube TUI](https://github.com/Siriusmart/youtube-tui)

![](https://cdn.beekka.com/blogimg/asset/202508/bg2025083010.webp)

YouTube 的终端客户端，在命令行操作 YouTube。

5、[LabPlot](https://labplot.org/)

![](https://cdn.beekka.com/blogimg/asset/202508/bg2025083012.webp)

数据可视化的桌面软件，会将数据集转成各种图形，据说功能很强。

6、[gitlab-to-github](https://github.com/wuuashen/gitlab-to-github)

一个 Python 脚本，一键将你的 GitLab 仓库全部迁移到 GitHub。（[@wuuashen](https://github.com/wuuashen/gitlab-to-github) 投稿）

7、[Telegram 广告拦截机器人](https://github.com/ramsayleung/bayes_spam_sniper)

![](https://cdn.beekka.com/blogimg/asset/202509/bg2025090201.webp)

开源的 Telegram 机器人，使用贝叶斯算法自动拦截群组的广告帖，参见作者的[介绍文章](https://ramsayleung.github.io/zh/post/2025/%E4%B8%80%E4%B8%AA%E8%87%AA%E5%AD%A6%E4%B9%A0%E7%9A%84telegram%E5%B9%BF%E5%91%8A%E6%8B%A6%E6%88%AA%E6%9C%BA%E5%99%A8%E4%BA%BA/)。（[@ramsayleung](https://github.com/ruanyf/weekly/issues/7686) 投稿）

8、[Foxel](https://github.com/DrizzleTime/Foxel)

![](https://cdn.beekka.com/blogimg/asset/202509/bg2025090202.webp)

开源的私有云盘，支持 AI 语义搜索。（[@DrizzleTime](https://github.com/ruanyf/weekly/issues/7687) 投稿）

9、[StoryMotion](https://storymotion.video/)

![](https://cdn.beekka.com/blogimg/asset/202509/bg2025090406.webp)

一个基于 Web 的动画编辑器，用来制作嵌入网页的 Excalidraw 手绘风格动画，很适合用来演示。（[@chunrapeepat](https://github.com/ruanyf/weekly/issues/7695) 投稿）

10、[Website Screenshot Online](https://websitescreenshot.online/zh-CN)

![](https://cdn.beekka.com/blogimg/asset/202509/bg2025090413.webp)

在线免费截屏网站，用户输入网址，它返回该网址的截屏图片，另有[录制页面滚动视频](https://websitescreenshot.online/zh-CN/tools/record-website-video)的工具网站。（[@cryptobanksy](https://github.com/ruanyf/weekly/issues/7705) 投稿）

## AI 相关

1、[拆书 AI 总结工具](https://github.com/SSShooter/ebook-to-mindmap)

![](https://cdn.beekka.com/blogimg/asset/202508/bg2025082901.webp)

这个 Web 应用可以按章节拆分电子书（epub 和 pdf 格式），通过 AI 生成该章的文字总结和思维导图，需要用户提供大模型 API Key。（[@SSShooter](https://github.com/ruanyf/weekly/issues/7660) 投稿）

2、[VIVY](https://github.com/liriliri/vivy)

![](https://cdn.beekka.com/blogimg/asset/202508/bg2025083101.webp)

文生图模型 Stable Diffusion 的桌面客户端。（[@surunzi](https://github.com/ruanyf/weekly/issues/7673) 投稿）

3、[ApeRAG](https://github.com/apecloud/ApeRAG)

![](https://cdn.beekka.com/blogimg/asset/202509/bg2025090203.webp)

开源的 RAG（检索增强生成）平台，将图谱 RAG、向量搜索和全文搜索与 AI 代理相结合。（[@earayu](https://github.com/ruanyf/weekly/issues/7690) 投稿）

4、[AI Video Transcriber](https://github.com/wendy7756/AI-Video-Transcriber)

![](https://cdn.beekka.com/blogimg/asset/202508/bg2025083104.webp)

AI 视频转录&翻译&总结工具，支持YouTube、Tiktok、B 站等30+平台。代码开源，需要自己搭建前后端。（[@wendy7756](https://github.com/ruanyf/weekly/issues/7678) 投稿）

## 资源

1、[OpenAnimation](https://github.com/orispok/OpenAnimationApp)

![](https://cdn.beekka.com/blogimg/asset/202508/bg2025083103.webp)

这个仓库专门收集各种基于 Lottie 的动画。

2、[Jujutsu 入门教程](https://jj-for-everyone.github.io/)

![](https://cdn.beekka.com/blogimg/asset/202509/bg2025090102.webp)

Jujutsu 是一个新兴的代码管理系统，号称比 Git 更好用、更易懂。这个英文教程写给完全不懂 Git 的人。

3、[我收藏的 50 个键盘](https://aresluna.org/50-keyboards-from-my-collection/)

![](https://cdn.beekka.com/blogimg/asset/202509/bg2025090407.webp)

作者是一个国外的键盘收藏家，他列出自己最奇特的50个键盘。

比如，下面的键盘是竖立使用，还贴心地配上镜子，让你能看到按键。

![](https://cdn.beekka.com/blogimg/asset/202509/bg2025090408.webp)

再比如，手套上的键盘，用另一支手输入。

![](https://cdn.beekka.com/blogimg/asset/202509/bg2025090409.webp)

还有一个键盘，所有键帽都是一次性套上去的，可以随时换。

![](https://cdn.beekka.com/blogimg/asset/202509/bg2025090410.webp)

## 图片

1、[乐器的内部](https://www.dpreview.com/photography/5400934096/probe-lenses-and-focus-stacking-the-secrets-to-incredible-photos-taken-inside-instruments)

一位国外音乐家想到，我们每天看到的都是乐器的外部，那么乐器的内部是什么样？

他就拍摄了一系列乐器内部的照片，给人一种完全不同的视觉体验，仿佛进入了奇特的建筑物。

管风琴

![](https://cdn.beekka.com/blogimg/asset/202506/bg2025060110.webp)

小提琴

![](https://cdn.beekka.com/blogimg/asset/202506/bg2025060111.webp)

钢琴

![](https://cdn.beekka.com/blogimg/asset/202506/bg2025060112.webp)

大提琴

![](https://cdn.beekka.com/blogimg/asset/202506/bg2025060113.webp)

## 文摘

1、[为什么 Facebook 留不住科学家](https://www.facebook.com/InvestYourLifes/posts/pfbid02ZaxVs6ES9UaRcUYddE2P1YSqAfVFYQe59AoZdfHUy8Uy3BZk7dt3rf3d3zH8hP7fl)

Facebook 公司最近投入重金，聘请了很多 AI 人才，但是其中不少人待了很短时间，就提交辞呈走了。这是为什么？

一位前员工给出了自己的解释，认为这跟公司使命有直接联系。

Facebook 的使命是 connect everyone（连接每个人），这和 AI 没有直接联系。虽然它的内部有大量研究人员，但是主要研究方向是排名算法和大数据分析，它历史上没有 AI 研究的基础。

而且，研究型人员在 Facebook 内部并不被重视。

许多招来的研究员原本在学术界或 Google/DeepMind 有自由探索的空间，能做长期的、前沿的研究。来了 Facebook 以后，他们的 AI 研究更多地被要求服务于广告、推荐系统和内容审核等短期业务目标。研究人员容易觉得缺乏长期愿景或突破性的研究方向。

Facebook 本质上是一家以“move fast”驱动的消费互联网公司，强调快速上线、快速推动公司业绩。

这样的基因让研究人员觉得缺乏学术环境，也难以在同行中保持声望。

同时，Facebook 的研究与产品部门割裂严重，研究成果很难直接落地产品，产品团队也不完全理解研究的价值。

很多科学家因此感到，在 Facebook 做不出真正的创新与成绩，每日要为业务忙碌，最后就选择离开了。

这说明大公司未必能用重金垄断人才，如果小公司真正在做革新性产品，有很大机会吸引到人才。

## 言论

1、

一项美国研究发现，AI 对于非名校的毕业生就业冲击最大，对哈佛、MIT 之类的名校毕业生的就业没有什么冲击。

AI 加剧了普通学校的贬值。

-- [《AI 对就业市场的冲击》](https://www.facebook.com/rainchamber123/posts/pfbid02UhZG3w4BBw4CB2Wn334x787v3Hvxh24V51aH1DfyTfpCLgUoh9YtsSk9ptaufoECl)

2、

自己的电脑运行 AI 应用，有三大危险：它能够访问你的私人数据，能够加载不受信任的内容，能够进行外部通信。

-- [Simon Willison](https://martinfowler.com/articles/202508-ai-thoughts.html)

3、

中国有一个概念“吃苦”，美国没有这个概念。

-- [Hacker News 读者](https://news.ycombinator.com/item?id=45057112)

4、

氛围编码真的很有趣，你只需要构思，不需要自己编码。我用了以后才意识到，这才是我真正喜欢的。

-- [《我作为 VC 的氛围编码》](https://kevinkuipers.substack.com/p/vc-for-vibe-coding-a-fresh-new-start)

5、

SEO（搜索引擎优化）的游戏早就结束了。

大​部​分​人还​在​拼​命​追求 Google 排名，但​用户其实已经离开了 Google。现在只有27%的搜索发生在那里，剩下73%都发生​在 TikTok、Amazon、Reddit、YouTube、甚​至 ChatGPT。

-- [Neil Patel](https://www.facebook.com/groups/403305889834821/?multi_permalinks=3290520761113305)，美国畅销书作者

## 往年回顾

[驴子、老虎和狮子的寓言](https://www.ruanyifeng.com/blog/2024/09/weekly-issue-317.html)（#317）

[5G 的春天要来了](https://www.ruanyifeng.com/blog/2023/08/weekly-issue-267.html)（#267）

[沙特的新未来城](https://www.ruanyifeng.com/blog/2022/08/weekly-issue-217.html)（#217）

[广告拦截器太过分了](https://www.ruanyifeng.com/blog/2021/07/weekly-issue-167.html)（#167）

（完）

