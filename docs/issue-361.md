# 科技爱好者周刊（第 361 期）：暗网 Tor 安全吗？

这里记录每周值得分享的科技内容，周五发布。

本杂志[开源](https://github.com/ruanyf/weekly)，欢迎[投稿](https://github.com/ruanyf/weekly/issues)。另有[《谁在招人》](https://github.com/ruanyf/weekly/issues/7408)服务，发布程序员招聘信息。合作请[邮件联系](mailto:yifeng.ruan@gmail.com)（yifeng.ruan@gmail.com）。

## 封面图

![](https://cdn.beekka.com/blogimg/asset/202508/bg2025081404.webp)

去年建成开放的烟台时光塔，是一个海边的文化建筑，下层是露天剧场，中间是望海平台，上层是图书馆、展览厅、咖啡馆。（[via](https://www.archiposition.com/items/20241105014028)）

## 暗网 Tor 安全吗？

1、

大家知道 [Tor 浏览器](https://www.torproject.org/)吧？

它是访问暗网（dark web）的主要工具。

![](https://cdn.beekka.com/blogimg/asset/202508/bg2025081008.webp)

所谓暗网，就是普通浏览器打不开、必须用专门工具访问的互联网。

![](https://cdn.beekka.com/blogimg/asset/202508/bg2025081007.webp)

之所以暗网要用专门工具访问，是因为它采用了特殊的设计，**保证让访问者高度匿名，难以追踪**。

如果你希望执行秘密的互联网操作，就可以使用暗网。同样的，地下网站希望保密，不愿意暴露自己，那就可以做一个暗网版本，正常互联网无法访问。

暗网有专门域名 .onion，这种域名的网站都是要用 Tor 打开的。

![](https://cdn.beekka.com/blogimg/asset/202508/bg2025081310.webp)

2、

我一直以为 Tor/暗网很安全，可以保证访问者的匿名，无法找到真人。

因为它的设计是防追踪的。**它不是直接访问目标网址，而是寻找一个随机的中继节点**。

它规定，必须通过3个中继节点，才能连接目标网站。每个中继节点，只知道上一个节点和下一个节点，因此**该节点即使被黑，黑客也看不到完整的通信线路**。

理论上，只有三个中继节点都被破解，才能追踪用户。但是，这些节点是在全世界随机选择的，全被破解的概率实在很低。

这种设计叫做“洋葱路由”，就像剥洋葱一样，必须一层层解开所有的中继节点，才能了解完整的访问链路。事实上，Tor 这个词就是洋葱路由（The Onion Router）的首字母缩写。

3、

上周，我读到[一篇文章](https://thereader.mitpress.mit.edu/the-secret-history-of-tor-how-a-military-project-became-a-lifeline-for-privacy/)，彻底动摇了对 Tor 的信心。

我震惊地发现，**Tor 是美国政府开发的**。

1997年，美国海军研究实验室（NRL）发明了 Tor。最初的动机是，**防止外国政府追踪美国的机密通信**。

美国的情报人员在国外，要向中情局的服务器发送机密消息，不希望被外国政府察觉和追踪，但又必须使用外国的民用线路，怎么办？

答案就是 Tor。通过洋葱路由，Tor 可以在民用通信线路上，让外国的互联网提供商无法找到人员位置和目标网址。

2004年，美国政府公开了这个项目的源码。电子前沿基金会 (EFF) 接手继续开发，逐渐演变成今天的 Tor，但是底层设计并没有大的改动。

开源之后，美国政府并没有放手这个项目，多年来一直大力资助。2012年，Tor 项目的年度预算200万美元，[80%来自美国政府](https://en.wikipedia.org/wiki/The_Tor_Project#Funding)。

我查了最新的2023～2024年度[财务报表](https://www.torproject.org/static/findoc/2023-2024-The_Tor_Project-AuditedFinancialStatements.pdf)，790多万的总收入中，依然有200多万来自政府。

美国政府大力资助 Tor，是因为这个项目对他们有利用价值。

我相信，Tor 源码应该是可靠的，没有植入后门，毕竟它是开源的，要经受全世界程序员的审查。但是，美国政府肯定了解源码的所有细节，很可能会部署他们自己修改过的版本，添加一些不为人知的改动。

根据以前透露的消息，很多的 Tor 中继节点是美国政府架设的（具体比例无法查实）。所以我认为，**不能假设 Tor 是安全的，美国政府很可能监视 Tor 的通信**。

![](https://cdn.beekka.com/blogimg/asset/202508/bg2025081009.webp)

曾经非常著名的暗网黑市网站“丝绸之路”（上图），就是完全依托于 Tor 来访问。但是，2013年被美国政府查封，创始人也被抓了。这也从一个侧面说明，Tor 并不安全。

## 科技动态

1、上周，中国的载人月球登陆器“[揽月](https://www.gov.cn/yaowen/tupian/202508/content_7035575.htm)”，在河北省怀来县进行了着陆起飞测试。

![](https://cdn.beekka.com/blogimg/asset/202508/bg2025081401.webp)

它挂在一个钢盘下面，钢盘使用钢索牵引，可以上下运动，用来模拟月球引力。

![](https://cdn.beekka.com/blogimg/asset/202508/bg2025081402.webp)

![](https://cdn.beekka.com/blogimg/asset/202508/bg2025081403.webp)

2、美国宾州大学发布了一个演示，监视[手机通话时的微小震动](https://www.psu.edu/news/engineering/story/conversations-remotely-detected-cell-phone-vibrations-researchers-report)，可以还原出通话内容。

![](https://cdn.beekka.com/blogimg/asset/202508/bg2025081102.webp)

手机通话时，扬声器会震动，通过激光雷达，在3米外监视手机，可以感受到这种震动，从而还原出语音。

再通过 Whisper 模型，将语音转成文字，就能得到通话内容，准确率为60%。

3、一位美国程序员，制作了一个[木质的像素显示器](https://benholmen.com/blog/kilopixel/)。

![](https://cdn.beekka.com/blogimg/asset/202508/bg2025081115.webp)

这个显示器的每个像素点，都是一个小木块，有一面涂黑。

![](https://cdn.beekka.com/blogimg/asset/202508/bg2025081116.webp)

显示器的控制器是一个树莓派，收到显示图案后，计算出哪些木块需要转动，然后驱动一个机械臂转动这些木块。

![](https://cdn.beekka.com/blogimg/asset/202508/bg2025081118.webp)

最后的显示效果如下。

![](https://cdn.beekka.com/blogimg/asset/202508/bg2025081117.webp)

4、谷歌披露，安卓系统内置了一个[全球地震预警系统](https://research.google/blog/android-earthquake-alerts-a-global-system-for-early-warning/)，可以向用户发出地震警报。

![](https://cdn.beekka.com/blogimg/asset/202507/bg2025072804.webp)

安卓手机都有加速度计，就是手机横置时让屏幕翻转的那种传感器，它可以侦测到手机的移动。

如果系统发现，同一个地理区域的手机突然同时震动，就说明地震了。谷歌就会向该区域的用户推送地震警报。

该系统于2021年4月，首先在新西兰和希腊上线，已覆盖98个国家/地区。2023年11月的菲律宾6.7级地震，2023年11月的尼泊尔5.7级地震，它都发送了警报。

5、人类为什么需要睡眠？最近一篇论文指出，睡眠与[细胞线粒体](https://www.science.org/content/blog-post/it-all-comes-down-mitochondria)有关。

![](https://cdn.beekka.com/blogimg/asset/202507/bg2025073012.webp)

在有氧状态下，线粒体的不间断活动会导致自身裂变，所以需要一个静止期（睡眠）来修复，并补充能量。

结论就是，只要生物需要氧气，就需要睡眠，因为有氧活动会消耗线粒体。

## 文章

1、[锚点定位简介](https://webkit.org/blog/17240/a-gentle-introduction-to-anchor-positioning/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202508/bg2025081307.webp)

CSS 的新语法“锚点定位”（anchor position），可以不使用 JavaScript，只用 CSS 就完成弹出菜单对某个锚点元素`<a>`的定位。

2、[使用 Rclone 挂载网盘到本地](https://blog.fernvenue.com/archives/mount-cloud-drive-using-rclone/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202312/bg2023121003.webp)

本文介绍使用 [Rclone](https://rclone.org/) 这个工具，将网盘（比如微软的 OneDrive），挂载成一个本地目录。

3、[如何选择英文字体](https://imperavi.com/books/ui-typography/basis/choosing-typeface/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202508/bg2025081309.webp)

本文介绍选择合适的英文字体的一些注意点。

4、[我的 NotebookLM 使用方法](https://www.xda-developers.com/using-notebooklm-to-watch-a-show/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202508/bg2025081110.webp)

NotebookLM 是现在公认的最佳 AI 笔记工具，作者写了他的使用方法，用它来“看”没看过的电视剧，我觉得有参考价值。

5、[Docker 运行图形界面软件的一种方法](https://github.com/hemashushu/docker-archlinux-gui)（英文）

本文介绍使用 Wayland 协议，把图形界面软件放在 Docker 容器运行。

6、[为什么 π² ≈ g？](https://roitman.io/blog/91)（英文）

![](https://cdn.beekka.com/blogimg/asset/202408/bg2024081406.webp)

π² 等于9.86，很接近重力加速度 g 的9.8。本文告诉你，这不是巧合，跟米的定义（北极到赤道的距离的百万分之一）有关。

## 工具

1、[Battery](https://github.com/actuallymentor/battery)

![](https://cdn.beekka.com/blogimg/asset/202508/bg2025081103.webp)

一个 Macbook 笔记本的小工具，使得充电只能充到80%。

2、[Readeck](https://readeck.org)

![](https://cdn.beekka.com/blogimg/asset/202508/bg2025081108.webp)

一个自托管的 Web 应用，用来收藏书签，自动保存网页内容。

3、[missing.css](https://missing.style/)

![](https://cdn.beekka.com/blogimg/asset/202508/bg2025081308.webp)

一个 CSS 库，提供一套精简、可扩展的样式方案。

4、[My idlers](https://github.com/cp6/my-idlers)

![](https://cdn.beekka.com/blogimg/asset/202508/bg2025081109.webp)

一个自托管的 Web 应用，用来统一管理你的虚拟主机、共享主机和域名，参见[介绍文章](https://www.xda-developers.com/use-self-hosted-app-tabs-home-server-vps-domains/)。

5、[Kimu](https://trykimu.com/)

![](https://cdn.beekka.com/blogimg/asset/202508/bg2025081113.webp)

基于 Web 的视频编辑器，支持接入 AI，[代码开源](https://github.com/robinroy03/videoeditor)。

6、[vYinn](https://github.com/shanleiguang/vYinn)（殷人）

![](https://cdn.beekka.com/blogimg/asset/202508/bg2025080901.webp)

古籍印章图案的制作工具。（[@shanleiguang](https://github.com/ruanyf/weekly/issues/7486) 投稿）

7、[Call-Me](https://github.com/miroslavpejic85/call-me)

![](https://cdn.beekka.com/blogimg/asset/202508/bg2025080902.webp)

一个开源网站，在浏览器中实现一对一视频通话，有 [Demo](https://cme.mirotalk.com/)。（[@miroslavpejic85](https://github.com/ruanyf/weekly/issues/7500) 投稿）

8、[Modern MD Editor](https://github.com/xiaobox/mdeditor)

![](https://cdn.beekka.com/blogimg/asset/202508/bg2025081101.webp)

一个基于 Web 的 Markdown 编辑器，生成适配微信公众号/社交平台的可视化 HTML 代码。（[@xiaobox](https://github.com/ruanyf/weekly/issues/7506) 投稿）

另有一个使用 AI 生成的[微信 Markdown 编辑器](https://www.md2wechat.cn/)。（[@geekjourneyx](https://github.com/ruanyf/weekly/issues/7513) 投稿）

9、[流畅阅读](https://github.com/Bistutu/FluentRead)（FluentRead）

![](https://cdn.beekka.com/blogimg/asset/202508/bg2025081202.webp)

浏览器开源插件，“[沉浸式翻译](https://immersivetranslate.com/zh-Hans/)”的开源替代品，支持多种翻译引擎和 AI 大模型，提供双语翻译、划词翻译等特性。（[@Bistutu](https://github.com/ruanyf/weekly/issues/7514) 投稿）

10、[Diff Excel](https://github.com/zbuzhi/diff-excel)

![](https://cdn.beekka.com/blogimg/asset/202508/bg2025081204.webp)

一个开源的桌面应用，用来比较两个 Excel 表格的差异，使用 Go 语言编写。（[@zbuzhi](https://github.com/ruanyf/weekly/issues/7523) 投稿）

## AI 相关

1、[LLM from URL](https://818233.xyz/)

将提问直接附在 URL 后面，对大模型提问，比如 [818233.xyz/你是什么模型](https://818233.xyz/%E4%BD%A0%E6%98%AF%E4%BB%80%E4%B9%88%E6%A8%A1%E5%9E%8B) 。（[@yvonuk](https://github.com/ruanyf/weekly/issues/7517) 投稿）

2、[AI Short Video Factory](https://github.com/YILS-LIN/short-video-factory)（短视频工厂）

![](https://cdn.beekka.com/blogimg/asset/202508/bg2025081203.webp)

一个开源的 Web 应用，上传视频素材，给出提示词，AI 自动生成短视频和文案。（[@YILS-LIN](https://github.com/ruanyf/weekly/issues/7518) 投稿）

3、[Mapedia.cc](https://mapedia.cc/)

![](https://cdn.beekka.com/blogimg/asset/202508/bg2025081305.webp)

AI 地图，用户搜索一个主题，它会显示相关地图和解释文章，比如[苏东坡的地图](https://mapedia.cc/view/22cb103f456b4502dfa7315ebfc3dc83)。（[@klemperer](https://github.com/ruanyf/weekly/issues/7525) 投稿）

![](https://cdn.beekka.com/blogimg/asset/202508/bg2025081306.webp)

## 资源

1、[One Million Screenshots](https://onemillionscreenshots.com)

![](https://cdn.beekka.com/blogimg/asset/202508/bg2025081104.webp)

这个网页号称由100万张网页截图组成，可以放大缩小查看。

2、[Engineering.fyi](https://engineering.fyi/)

![](https://cdn.beekka.com/blogimg/asset/202508/bg2025081105.webp)

这个网站将各大互联网公司的技术文章（英文）收集在一起。

3、[Touch Mapper](https://touch-mapper.org/en/)

![](https://cdn.beekka.com/blogimg/asset/202508/bg2025081011.webp)

这个网站的创意很棒，你输入一个街道地址，它输出该地址的 3D 地图文件，可以 3D 打印出来，供视障人士触摸使用。

4、[Pricing Pages Design](https://pricingpages.design/)

![](https://cdn.beekka.com/blogimg/asset/202508/bg2025081205.webp)

这个网站收集各种定价页的设计。

## 图片

1、[古典雕像 + 当代时装](https://www.itsnicethat.com/articles/leo-caillard-hipster-in-stone)

一位法国摄影师为古典雕塑，穿上流行的当代服饰。

![](https://cdn.beekka.com/blogimg/asset/202508/bg2025081001.webp)

![](https://cdn.beekka.com/blogimg/asset/202508/bg2025081002.webp)

这样的组合不仅有趣，还给人一种耳目一新的感觉。

![](https://cdn.beekka.com/blogimg/asset/202508/bg2025081003.webp)

![](https://cdn.beekka.com/blogimg/asset/202508/bg2025081004.webp)

这说明，一个人给别人的感觉和自身的气质，很大程度上与服装打扮有关。

![](https://cdn.beekka.com/blogimg/asset/202508/bg2025081005.webp)

![](https://cdn.beekka.com/blogimg/asset/202508/bg2025081006.webp)

## 文摘

1、[我的技术退步了](https://lemmy.ml/post/30100312)

五年前，我大学毕业时，很热衷于软件开发，参与了一大堆开源项目。

我全身心投入，为这些项目投入了数千小时。虽然没有回报，但我非常享受这些时间，项目用户也对我的工作评价很高。

毕业后，我开始找工作。我认为，公司会看重我的开源经历。我想错了。

我申请了600多个职位，告诉公司我为开源项目做了许多贡献，但结果只收到了3个 offer。最终，我接受了一家创业公司的 offer。

白天，我为这家创业公司工作八九个小时。回到家后，我继续投入自己的开源项目，直到深夜。

我的薪水少得可怜，但是我乐在其中。我的技能快速提高，社区影响力也显著提升。

终于有一天，我认清了现实。公司的项目根本不能体现我的价值，知道我价值的人，又不是能付钱给我的人。我退缩了，开始苦练 Leetcode。

我不再在开源项目投入很多时间，项目社区也渐渐失去了活力。放弃开源项目让我很难过，但我因此进入了一家大公司，我的薪水增加了5倍。

我把所有时间投入了公司的项目，得到了领导的好评。我的邮箱开始塞满了各种挖我跳槽的邮件。

但是，我知道，自己的技术退步了。公司的项目很枯燥，没有挑战性，使用的是内部技术栈。

此外，我也远不如以前快乐。

我想我会攒点钱，过几年就退休，希望那时开源世界还像以前一样。

## 言论

1、

AI 公司的融资有多么疯狂，前 OpenAI 公司首席科学家伊尔亚·苏茨克维在2024年筹集了10亿美元，几个月前又筹集了20亿美元，他的公司估值320亿美元。

据我所知，它唯一的产出就是网站上仅有的370个词，每个词价值8000多万美元，其中148个词还是关于合伙人离开公司的事情。不过，至少他还有个网站，有些创始人拿到钱以后简直销声匿迹了。

-- [Substack 周刊](https://theahura.substack.com/p/tech-things-genies-lamp-openai-cant)

2、

保险公司十分担心，随着全球变暖、极端天气越来越多，资产的损失风险快速上升，世界正变得无法保险了。

-- [《世界很快将无法投保》](https://www.cnbc.com/2025/08/08/climate-insurers-are-worried-the-world-could-soon-become-uninsurable-.html)

3、

Windows 11 的更新包，原本叫做春季包和秋季包。后来，有人反映，这不适用于南半球，就改名为 H1 更新包 和 H2 更新包。

-- [《为什么 Windows 更新包叫做 H1 和 H2》](https://devblogs.microsoft.com/oldnewthing/20250805-00/?p=111435)

4、

十多年来，编程训练营一直是硅谷的支柱产业。如今，AI 使得公司减少入门级职位的招聘，并且学生可以跟随 AI 自学，编程训练营正在逐渐消失。

-- [路透社](https://www.reuters.com/lifestyle/bootcamp-bust-how-ai-is-upending-software-development-industry-2025-08-09/)

5、

人们以为自己在思考，其实是在重新编排自己的偏见。

-- [威廉·詹姆斯](https://quoteinvestigator.com/2017/05/10/merely/)（William James），美国哲学家

## 往年回顾

[《黑神话：悟空》可以产业化吗？](https://www.ruanyifeng.com/blog/2024/08/weekly-issue-314.html)（#314）

[Elasticsearch 的启示](https://www.ruanyifeng.com/blog/2023/07/weekly-issue-264.html)（#264）

[你的地图是错的](https://www.ruanyifeng.com/blog/2022/07/weekly-issue-214.html)（#214）

[培训班 vs 大学，求职成功率比较](https://www.ruanyifeng.com/blog/2021/06/weekly-issue-164.html)（#164）

（完）

