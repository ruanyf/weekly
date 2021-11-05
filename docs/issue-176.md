# 科技爱好者周刊（第 176 期）：中国法院承认 GPL 吗？

这里记录每周值得分享的科技内容，周五发布。

本杂志开源（GitHub: [ruanyf/weekly](https://github.com/ruanyf/weekly)），欢迎提交 issue，投稿或推荐科技内容。

周刊讨论区的帖子[《谁在招人？》](https://github.com/ruanyf/weekly/issues/1913)，提供大量程序员就业信息，欢迎访问或发布工作/实习岗位。

## 封面图

![](https://cdn.beekka.com/blogimg/asset/202109/bg2021091605.jpg)

2021 世界机器人大会在北京举行，一家公司展出了“爱因斯坦”人形机器人，使用中文向学生“授课”。（[via](https://photo.cctv.com/2021/09/11/PHOA6GQ0lb0RFhGynbF5j6U0210911.shtml)）

## 本周话题：中国法院承认 GPL 吗？

开源软件通常带有许可证。大家一直很想知道，如果国内用户不遵守许可证，可以去法院告他吗？

上周有一条[新闻](https://www.oschina.net/news/159435)，深圳市中级人民法院一审判决，被告违反了 GPL 许可证，赔偿侵权费50万元。

![](https://cdn.beekka.com/blogimg/asset/202109/bg2021091509.jpg)

很多程序员很兴奋，认为这代表 GPL 许可证得到中国法院的认可。

我仔细读了[判决书](https://wenshu.court.gov.cn/website/wenshu/181107ANFZ0BXSK4/index.html?docId=05f553bd178d4354bb48ad5100c1314f)，觉得跟大家想的不一样，这个案件很复杂，得不出法院认可 GPL 的结论。

![](https://cdn.beekka.com/blogimg/asset/202109/bg2021091510.jpg)

我简单说一下案情。

济宁市罗盒网络科技有限公司（以下简称“罗盒科技”）在 GitHub 开源了软件 VirtualApp，使用了 GPL 许可证。但是，他同时又声明，不得用于商业用途，除非购买商业授权。

大家觉得，这个声明有问题吗？ **可以既采用 GPL 许可证，又不许用于商业用途吗？**

回答是，这个声明有很大问题。GPL 许可证允许商用，只要你用了这个许可证，别人就可以把你的代码用于商业用途。

> [开源小知识] 
>  
> 如果想禁止商用，就不能使用 Copyleft 许可证（比如 GPL），而是要添加一个自己的许可声明，比如“源码只供个人学习，不得商用，除非购买商业许可证”。

因此，罗盒科技一开始的许可证选择，就有问题，后来果然出了问题。

有一个叫做“点心桌面”的商业 App，使用了 VirtualApp。罗盒科技就控告开发商福建风灵公司侵权，要求赔偿2000万元。

罗盒科技起诉的理由，不是对方违反 GPL，没有开源“点心桌面”，而是对方没有付款，就将代码用于商业用途。

所以，准确的说，这个案件跟 GPL 许可证没有直接关系，只跟风灵公司没有获得商业授权有关。法院最后判决被告败诉，也是这个原因。

![](https://cdn.beekka.com/blogimg/asset/202109/bg2021091511.jpg)

但是前面说了，GPL 许可证允许商业用途，风灵公司就抓住了这一点，为自己辩护，宣称自己使用的是项目的 GPL 版本，不是商业版本，因此可以商用。

他们没想到的是，GPL 许可证的[第八条](https://www.gnu.org/licenses/gpl-3.0.html)明确写明，如果使用者不开源自己的代码，GPL 授权失效。

> 第八条 传播或修改代码时，如果不遵守规定的条件，授权自动终止。

法院因此认为，风灵公司不符合条件，不能使用 GPL 为自己的商业行为辩护。所以，这个案件不是法院认可了 GPL，而是法院认为被告不适用 GPL 许可证。

假如风灵公司遵守了 GPL，公开了“点心桌面”的源码，那还构成侵权吗？我的个人看法是，那样就不侵权。

总之，GPL 在国内维权还是很困难。它是按照美国法律写的，所有中文版都是网友翻译的，有没有准确表达含义都很难说。 **中国法院就算认可 GPL，也是作为代码作者与用户之间的合同看待。**

这意味着两点。

（1）只有代码作者才能提起侵权诉讼，其他人没法控告违反 GPL 的行为。

（2）就算胜诉，最多就是对方软件下架或者赔偿损失，很难强制开源代码，因为中国合同法没有这种先例，而且法律允许对方拒绝继续履行合同。

## 使用 Node.js 开发一个 CLI 工具

Node.js 诞生已经超过10年了。因为它，前端开发出现了翻天覆地的变化。

直到今天，你要学习前端的主流技术，首先就要掌握 Node.js，因为所有开发都要在它下面完成。

![](https://cdn.beekka.com/blogimg/asset/202109/bg2021091601.jpg)

很多同学都想知道，怎么才能掌握 Node.js？

对于新人来说，其实只要掌握两个知识点，就能上手了：**一个是 CommonJS 模块格式，另一个就是命令行环境** （command line，简写为 CLI）。其余部分就是普通的 JavaScript 语法。

上面两个知识点之中，CommonJS 比较简单，命令行有点难，因为内容多，需要了解操作系统，以及 Node.js 提供的各种系统接口，最常用的就是文件系统接口。

![](https://cdn.beekka.com/blogimg/asset/202109/bg2021091604.jpg)

这一周介绍的课程，就是 **《教你使用 Node.js 开发一个 CLI 工具》**，教大家快速入门命令行开发。

这是一门视频课，手把手带你从零开始写一个 JS 脚本，把它做成命令行工具，并发布到 NPM 上面，可以给其它人下载使用。

![](https://cdn.beekka.com/blogimg/asset/202109/bg2021091602.jpg)

它不同于那些直接讲述技术点的课程，不是生硬的文档解读，而是从具体的问题出发，带出知识点，立足于教会学习者，解决现实场景中的实际问题，属于“实务导向”。

课程的主讲老师崔效瑞，有丰富的前端开发经验，是 Vue 3 的代码贡献者，也是 Element3 技术负责人、mini-vue 作者。

![](https://cdn.beekka.com/blogimg/asset/202109/bg2021091603.jpg)

微信扫描上方二维码报名，就可以领取这门视频课，并了解课程的详细情况。课程推广期间，**不收取任何费用**，保证没有套路。

## 科技动态

1、[二氧化碳捕捉工厂](https://climeworks.com/orca)

![](https://cdn.beekka.com/blogimg/asset/202109/bg2021091101.jpg)

![](https://cdn.beekka.com/blogimg/asset/202109/bg2021091102.jpg)

世界目前最大的二氧化碳捕捉工厂，最近在冰岛建成了。它通过风扇吸入空气，过滤出二氧化碳，然后再将二氧化碳液化，注入地下1,000米深处的矿洞存储。

![](https://cdn.beekka.com/blogimg/asset/202109/bg2021091103.jpg)

二氧化碳的过度排放，是气候变暖的主要原因，目前没有好的方法吸收二氧化碳。该工厂每年只能吸收4000吨二氧化碳，只相当于800多辆汽车的排放量，而全世界2015年的二氧化碳排放量是360亿吨。（[@emac](https://github.com/ruanyf/weekly/issues/1946) 投稿）

2、[搞笑诺贝尔奖](https://mp.weixin.qq.com/s/9mTIHBJox5JMkrbl9nJcqA)

![](https://cdn.beekka.com/blogimg/asset/202109/bg2021091303.jpg)

哈佛大学每年评选（似乎）无意义的研究，颁给搞笑诺贝尔奖。今年，日本学者（上图）获得了其中的动力学奖，他通过马路实验（下图）得到结论：

> “如果两波人相向而行，其中有人边走边看手机，将引发人群的冲撞。”

![](https://cdn.beekka.com/blogimg/asset/202109/bg2021091304.jpg)

这已经是日本学者连续15年获得搞笑诺贝尔奖了。日本网民也在议论，日本的学者是不是太多了，找不到有意义的研究题目了？

![](https://cdn.beekka.com/blogimg/asset/202109/bg2021091305.jpg)

3、[违规跑鞋](https://www.thepaper.cn/newsDetail_forward_14479959)

![](https://cdn.beekka.com/blogimg/asset/202109/bg2021091401.jpg)

9月12日的维也纳马拉松赛上，埃塞俄比亚选手以2小时09分22秒的成绩获得冠军，但是随后就被取消成绩，理由是他的跑鞋违反了最新规定。

按照规定，跑鞋的鞋底厚度不能超过40毫米，但是该选手的鞋底厚达50毫米，多出整整一厘米。更厚的鞋底可以提供更好的弹力，帮助选手节省体力。

![](https://cdn.beekka.com/blogimg/asset/202109/bg2021091402.jpg)

4、[游戏厅的衰落](https://www.japantimes.co.jp/life/2021/06/06/digital/japanese-gaming-arcades-pandemic/)

![](https://cdn.beekka.com/blogimg/asset/202108/bg2021082006.jpg)

日本的电子游戏厅曾经盛极一时，各种街机玲琅满目，但是，现在已经盛况不再。根据警方的统计，1986年日本全国曾经有 26,573 家游戏厅，到了2019年只剩下 4,022 家，疫情爆发以后，数目更是继续锐减，可能不到最高峰时的十分之一。

![](https://cdn.beekka.com/blogimg/asset/202108/bg2021082007.jpg)

互联网和手机游戏的兴起，是游戏厅衰落的主要原因。目前，游戏厅的最大顾客来源是传统游戏爱好者，以及老年人。一位65岁的老人说，他把游乐厅当作社交场所，可以结交很多朋友。

![](https://cdn.beekka.com/blogimg/asset/202108/bg2021082008.jpg)

一些人认为，游戏厅最终会消失。另一些人则认为，游戏厅值得保留下来，街机有其独特的乐趣。南梦宫、Square Enix、世嘉等街机公司，呼吁日本政府采取措施，促进街机行业的发展。

5、[漂浮式光伏电站](http://m.cnhubei.com/content/2021-05/15/content_13795434.html)

![](https://cdn.beekka.com/blogimg/asset/202109/bg2021090906.jpg)

山东德州最近建成了，世界最大的单体水上漂浮式光伏电站。在水库的水面上，漂浮着面积2200亩的太阳能光伏板，设计总容量为320兆瓦，第一期建成了200兆瓦。

漂浮式光伏电站的好处是，对水体没有破坏性，比较环保，节省地基成本，施工周期短，还可以减少水库的水量蒸发、遮挡阳光抑制藻类生长。另一方面，光伏板放在水里，可以有效降温，显著提高发电效率。

6、[果蝇独居的后果](https://www.nature.com/articles/d41586-021-02194-2)

![](https://cdn.beekka.com/blogimg/asset/202108/bg2021082105.jpg)

科学家已经知道，果蝇是一种社会化动物，所以常常用它做实验，研究人类社会。

《自然》杂志最近报道，科学家将果蝇单独隔离，与群居的果蝇进行对比。结果发现，独居的果蝇有更少的睡眠、更多的进食。

![](https://cdn.beekka.com/blogimg/asset/202108/bg2021082104.jpg)

这个实验如果可以引申到人类，就表示长期独居对健康不利，群居、与他人的日常互动对健康更有利。

## 文章

1、[WebOS 死亡十周年纪念](https://sspai.com/post/68372)（中文）

![](https://cdn.beekka.com/blogimg/asset/202108/bg2021082206.jpg)

多年前，Palm 公司曾经发布过一个手机系统 WebOS，有很多令人难忘的特性，非常易用。2011年8月11日，该系统被宣布放弃。本文回顾了这个系统。

2、[消灭后视镜](https://mp.weixin.qq.com/s/tUeFiMbQhpmXkffxVsts5w)（中文）

![](https://cdn.beekka.com/blogimg/asset/202108/bg2021082405.jpg)

越来越多的小汽车使用摄像头取代后视镜，有的甚至连突出的门把手都隐藏了，本文讨论这样做的原因。

3、[如何免费搭建一个 VS Code 网页版](https://justyy.com/archives/45744)（中文）

![](https://cdn.beekka.com/blogimg/asset/202109/bg2021091514.jpg)

VS Code 编辑器有网页版，本文教你怎么把它部署在免费服务器上，可以用来写笔记，或者偶尔远程编辑代码。（[@DoctorLai](https://github.com/ruanyf/weekly/issues/1953) 投稿）

4、[你所不知道的 ASML](https://threadreaderapp.com/thread/1429464932446183431.html)（英文） 

![](https://cdn.beekka.com/blogimg/asset/202108/bg2021082306.jpg)

全世界最先进的芯片工厂，都依赖一家公司生产的 EUV（极紫外光刻）芯片制造机，这家公司就是荷兰的 ASML（阿斯麦）公司。它一年生产50台 EUV，每台售价1.5亿美元起。

5、[12 张视觉错觉图片](https://nautil.us/blog/12-mind_bending-perceptual-illusions)（英文）

![](https://cdn.beekka.com/blogimg/asset/202108/bg2021082803.jpg)

本文收集了 12 张著名的视觉错误图片。比如，上面这两张图片，看上去是不同角度拍摄的同一条街道，但是实际上，它们是同一张图片并排放在一起。

6、[绝对值的计算并不简单](https://habr.com/en/post/574082/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202108/bg2021082305.jpg)

绝对值的算法似乎是一个微不足道的问题：判断一个数是否为负数，如果是的，就去掉它的负号。如果你采用这样的算法，那你就错了。

7、[React usePrevious 钩子](https://davidwalsh.name/react-useprevious-hook)（英文）

本文介绍如何使用 useEffect 和 useRef 的官方钩子，写一个自己的 usePrevious 钩子，返回组件上一次渲染时的 props 参数。

8、[浏览器的“包导入地图”](https://github.com/wicg/import-maps)（英文）

Chrome 89 开始支持 ES 模块的“包导入地图”功能（package import maps），可以为导入模块指定别名。

## 工具

1、[Ventoy](https://github.com/ventoy/Ventoy)

![](https://cdn.beekka.com/blogimg/asset/202108/bg2021082403.jpg)

一个 U 盘的启动盘制作工具，直接把系统镜像文件复制到 U 盘即可。它支持电脑启动时，从多个系统镜像文件里面选择一个启动。

2、[WebDen](https://webden.dev/landing/)

![](https://cdn.beekka.com/blogimg/asset/202108/bg2021082605.jpg)

专供手机浏览器使用的网页代码编辑环境，提供 HTML、CSS、JS 的开发和调试。

3、[View Source](https://neatnik.net/view-source/)

一个 Web 小工具，输入网址，就可以高亮显示该网址的源码，非常好用。

4、[fishdraw](https://github.com/LingDong-/fishdraw)

![](https://cdn.beekka.com/blogimg/asset/202108/bg2021081311.jpg)

一个 JS 脚本，可以自动生成鱼的图形。这里还有一个可以[自动画树](https://github.com/zv/tree)的库。

5、[MDvideo](http://mdvideo.gshll.com/)

![](https://cdn.beekka.com/blogimg/asset/202109/bg2021091513.jpg)

一个桌面软件，自动将 Markdown 文档转成一段视频。文档里面的视频、音频、图片网址，都会抓取后插入视频，还可以根据文字生成人工语音的旁白朗读。

它非常适合快速生成产品的介绍视频。（[@linqian02](https://github.com/ruanyf/weekly/issues/1952) 投稿）

6、[group-by-repo-on-github](https://github.com/foamzou/group-by-repo-on-github)

![](https://cdn.beekka.com/blogimg/asset/202109/bg2021091210.jpg)

油猴脚本，用来处理 GitHub 的网页搜索结果，可以根据仓库分类，并自动获取分页结果，即不用点击“下一页”了。（[@foamzou](https://github.com/ruanyf/weekly/issues/1941) 投稿）

7、[iDraw.js](https://idraw.js.org/)

![](https://cdn.beekka.com/blogimg/asset/202109/bg2021091308.jpg)

一个简单的 JS 库，用来使用脚本进行网页绘图。它基于 Canvas，可以绘制文字、矩形、圆形、图片、HTML 片段和 SVG 文件。([@chenshenhai](https://github.com/ruanyf/weekly/issues/1949) 投稿)

8、[PikaScript](https://github.com/pikasTech/pikascript)

![](https://cdn.beekka.com/blogimg/asset/202109/bg2021091306.jpg)

这个项目用来为单片机提供 Python 支持，让你可以通过 Python 脚本操作单片机。（[@pikasTech](https://github.com/ruanyf/weekly/issues/1944) 投稿）

9、[mini-stores](https://github.com/linjc/mini-stores)

小程序状态管理库，方便管理页面状态，支持各公司的小程序。（[@linjc](https://github.com/ruanyf/weekly/issues/1940) 投稿）

10、[Neumorphism](https://neumorphism.coldstone.fun/)

![](https://cdn.beekka.com/blogimg/asset/202109/bg2021091512.jpg)

一个网页工具，用来生成照明阴影效果的 Flutter 代码。这里还有 [CSS 版](https://neumorphism.io/)。（[@xrr2016](https://github.com/ruanyf/weekly/issues/1951) 投稿）

## 资源

1、[Samantha Ming 个人网站](https://www.samanthaming.com/)

![](https://cdn.beekka.com/blogimg/asset/202109/bg2021091307.jpg)

Samantha Ming 是一名加拿大前端工程师，她在个人网站上分享了很多前端代码的技巧，内容质量很高，制作精美。（[@wxyudl](https://www.samanthaming.com/) 投稿）

2、[糖尿病教育网站](https://dtc.ucsf.edu/zh-hans/)

![](https://cdn.beekka.com/blogimg/asset/202109/bg2021091110.jpg)

加州大学旧金山分校主办的网站，全部使用中文，提供糖尿病、健康、运动、饮食知识，内容很不错。（[@Stupid-Human](https://github.com/ruanyf/weekly/issues/1938) 投稿）

3、[程序员的数学导论](https://pimbook.org/)

![](https://cdn.beekka.com/blogimg/asset/202108/bg2021081702.jpg)

一本英文的数学教材，专门写给没有数学基础的程序员，主要介绍微积分和线性代数，并且结合编程实例（比如加密和神经网络）进行讲解。全书可以0元购买。

4、 [SQL Bolt](https://sqlbolt.com/)

![](https://cdn.beekka.com/blogimg/asset/202107/bg2021071714.jpg)

一个交互式的英文在线教程，一共19课，从零开始讲授 SQL 知识，以及如何查询数据库。

5、[国际数据管理手册](http://www.grcdi.nl/gsb/global%20sourcebook.html)

![](https://cdn.beekka.com/blogimg/asset/202108/bg2021080512.jpg)

该网站提供全世界各国的各种数据格式，比如地址、电话、邮政编码、货币、车牌等的格式。

## 图片

1、[手机学习网页开发](https://www.linkedin.com/posts/shubham-sharma-34bbab18b_webdevelopment-css-html-activity-6820715919568961536-WApS/)

一个尼泊尔老师在网上贴出照片，他的学生没有笔记本电脑，只能通过手机架设开发环境，学习网页开发。

![](https://cdn.beekka.com/blogimg/asset/202107/bg2021072205.jpg)

经过两个月，这个学生已经初步掌握 HTML、CSS 和 JS。

2、[世界上最长的钢琴](https://www.alexanderpiano.nz/page/the-alexander-piano)

钢琴的音质与琴弦的长度有关。琴弦越长，振动越慢，就能发出越低频的声音，所以高级的三角钢琴，体积都很大，长度都不短于2.3米。

一个新西兰青年阿德里安不禁突发奇想，如果制造一个特别长的钢琴，不就可以发出非常低的音频吗？

他决定自己来造一个，从图书馆找到资料，在钢琴师傅的指导下，开始动手建造。

![](https://cdn.beekka.com/blogimg/asset/202107/bg2021071706.jpg)

![](https://cdn.beekka.com/blogimg/asset/202107/bg2021071707.jpg)

![](https://cdn.beekka.com/blogimg/asset/202107/bg2021071708.jpg)

最后，他造出了世界上最长的钢琴，长度接近10米。

他说，本想造得更长，但是他家的车库放不下了。

![](https://cdn.beekka.com/blogimg/asset/202107/bg2021071704.jpg)

![](https://cdn.beekka.com/blogimg/asset/202107/bg2021071705.jpg)

![](https://cdn.beekka.com/blogimg/asset/202107/bg2021071709.jpg)

![](https://cdn.beekka.com/blogimg/asset/202107/bg2021071710.jpg)

果然，这架钢琴的音质相当好，吸引了很多专业音乐家专程来演奏，还灌制了唱片。

![](https://cdn.beekka.com/blogimg/asset/202107/bg2021071711.jpg)

![](https://cdn.beekka.com/blogimg/asset/202107/bg2021071712.jpg)

![](https://cdn.beekka.com/blogimg/asset/202107/bg2021071713.jpg)

## 文摘

1、**乔布斯的白板事件**

摘自沃尔特·艾萨克森的《乔布斯传》。

![](https://cdn.beekka.com/blogimg/asset/202109/bg2021091611.jpg)

1985年，30岁的乔布斯被赶出了苹果公司。

他随即创立了 NeXT 公司，继续开发符合他理想的下一代个人电脑。

![](https://cdn.beekka.com/blogimg/asset/202109/bg2021091613.jpg)

1986年，一家叫做 Pixar 的图形硬件公司找到了乔布斯。那家公司濒临破产，急需资金。乔布斯经过思考，同意给钱，成为这家公司的最大投资者。

最初，这只是一笔单纯的风险投资。但是后来几年，Pixar 还是不断亏损，乔布斯不得不追加投资，最后索性成了公司的董事长，直接介入公司管理。

那时，乔布斯每周有一两天去 Pixar 公司办公，剩下的时间就去 NeXT 公司办公。

![](https://cdn.beekka.com/blogimg/asset/202109/bg2021091612.jpg)

进入九十年代以后，NeXT 公司和 Pixar 公司的业务都不见起色，看上去两家公司都会失败。这是乔布斯一生中的最低潮，他的压力很大。

有一天，Pixar 公司开会，乔布斯对 Pixar 创始人史密斯和其他高管破口大骂。因为他们一直拖延，没有按时拿出下一代图像电脑的电路设计。

那个时候，NeXT 的新产品也没有按时完成。史密斯就反唇相讥：“嘿，你的 NeXT 电路板做完了吗？不要光盯着我们。” 

乔布斯听了勃然大怒。史密斯后来回忆：“他气到失去理智。” 史密斯说话有西南部口音，乔布斯就学他的口音，冷嘲热讽。史密斯说：“他欺人太甚，太过分了。我也气炸了，什么话都骂出口。于是我们几乎贴着对方的面，大约只隔一个巴掌宽，互相对骂。”

乔布斯开会时，一定要把白板据为己有，不轻易让别人使用。史密斯利用自己的大块头，一把推开他，迳自走到白板前，边写边解释。乔布斯吼道：“你给我住手！”

“咦？”史密斯回击：“白板是你的吗？我不能写吗？简直是胡扯。”乔布斯气得当场离席。

这场会议以后不久，史密斯就辞职离开了 Pixar，自己创业开了一间软件公司，专攻电脑绘图和影像编辑。

他很幸运，微软后来买下了他的公司。他可能是历史上唯一一位，创立了两家公司，一家卖给了乔布斯，另一家卖给了比尔·盖茨。

## 言论

1、

如果你走得足够远，其实就再也没办法回去了。当你回到故乡，原来的一切都已经消失了。

不过，这也不算什么，归根结底，旅程才是你的故事中最重要的部分。

-- [《如果有无尽的推动力，宇宙飞船可以飞多远？》](https://www.forbes.com/sites/startswithabang/2021/12/30/how-far-could-a-spaceship-go-if-we-never-ran-out-of-thrust/?sh=6d38da5429ee)

2、

二战开始后，德国轰炸伦敦。伦敦市区每天晚上都有炸弹落下，郊区的炸弹比较少，可能每周一次。

战后的调查发现，在这段时期，市区居民的胃溃疡发病率显著增加，奇怪的是，郊区居民的胃溃疡发病率，增加得比市区还要大得多。这说明压力的不确定性比压力本身伤害更大。

--[《学会减少不确定性》](https://ofdollarsanddata.com/become-an-uncertainty-killer/)

3、

Dropbox 这个软件给人的感觉是，很早就达到了顶峰，然后随着开发团队尝试添加越来越多的功能，而逐渐变得糟糕。

-- [Hacker News 读者](https://news.ycombinator.com/item?id=28150985)

4、

赚到一百万美元以后，再往前走的动力都来自你的热情。

-- [Joel Spolsky](https://news.ycombinator.com/item?id=27865101)

5、

幸福的秘诀就是永远抱有低期望值。（the secret to happiness is low expectations.）

-- Hacker News 读者

## 历史上的本周

2020年（第 125 期）：[数字人民币要取代谁](https://www.ruanyifeng.com/blog/2020/09/weekly-issue-125.html)

2019年（第 73 期）：[数据统计的威力](https://www.ruanyifeng.com/blog/2019/09/weekly-issue-73.html)

2018年（第 22 期）：[猴子自拍，版权归谁](https://www.ruanyifeng.com/blog/2018/09/weekly-issue-22.html)

## 订阅

这个周刊每周五发布，同步更新在[阮一峰的网络日志](http://www.ruanyifeng.com/blog)和[微信公众号](http://weixin.sogou.com/weixin?query=%E9%98%AE%E4%B8%80%E5%B3%B0%E7%9A%84%E7%BD%91%E7%BB%9C%E6%97%A5%E5%BF%97)。

微信搜索“阮一峰的网络日志”或者扫描二维码，即可订阅。

![](https://cdn.beekka.com/blogimg/asset/202103/bg2021030402.jpg)

（完）
