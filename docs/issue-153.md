# 科技爱好者周刊（第 153 期）：机器翻译是对译者的侮辱吗？

这里记录每周值得分享的科技内容，周五发布。

本杂志开源（GitHub: [ruanyf/weekly](https://github.com/ruanyf/weekly)），欢迎提交 issue，投稿或推荐科技内容。

周刊讨论区的帖子[《谁在招人？》](https://github.com/ruanyf/weekly/issues/1709)，提供大量程序员就业信息，欢迎访问或发布工作/实习岗位。

## 封面图

![](https://cdn.beekka.com/blogimg/asset/202103/bg2021032508.jpg)

曼谷市内最肮脏的一条水道 Klong Ong Ang，经过5年的努力，终于变清了。两岸布置了绿植和灯光，游客可以划独木舟，这条曾经的臭水沟成了吸引人的景点。（[via](https://www.instagram.com/p/CMrCYC6H9zS/)）

## 本周话题：机器翻译是对译者的侮辱吗？

上个月，豆瓣网有一条[新闻](https://www.sohu.com/a/458133742_260616)。北京语言大学的一个研究生，对乌拉圭小说《休战》的中译本打了差评。

> “机翻痕迹严重，糟蹋了原作。还是老话，没有金刚钻别揽瓷器活。希望出版社找西班牙语科班出身的译者，翻译这些名家。”

![](https://cdn.beekka.com/blogimg/asset/202104/bg2021040401.jpg)

译者看见了这条评论，非常生气，你凭什么说我像机器翻译！

> “作为译者，愿意虚心接受来自所有人的意见。但是，逐字逐句认真翻译反复修改的书稿被说“机翻痕迹严重“，感觉挺糟心的。我觉得这和“翻译不好”不是一个概念，近乎人身攻击了。"

这本来是小事一桩，但是译者的好友打抱不平，向北京语言大学写举报信，声称该校学生对译者和出版社进行恶意攻击。学校收信后，出面让学生写了书面道歉。这下犯了众怒，网友蜂拥而至，为该书打“一星”。最终，豆瓣网不得不关闭了此书的评论和打分功能。

使用行政力量，压制正常的文艺批评，令人不齿。但是，今天我不想谈这个，而是想谈谈[南桥老师](https://www.thepaper.cn/newsDetail_forward_11996536)提出的一个有趣的观点：机器翻译很难接受吗？

> "为什么被说是机器翻译，译者会觉得反感？难道翻译一定要逐字逐句人肉翻译吗？"

这个问题提得好。 **很多人内心里面，把“机器翻译”等同于“劣质翻译”。** 但是，这种想法已经过时了。

![](https://cdn.beekka.com/blogimg/asset/202104/bg2021040901.jpg)

现在的机器翻译强大得很，跟人工翻译的差距越来越小。英译中，人工翻译还有一点优势；但是中译英，真的不妨交给电脑吧。再过几年，如果有人说，你的翻译像机器翻译，很可能是一种表扬。这就好比，你的围棋水平被说成是软件水平，那就是世界冠军了。

我的想法是，拥抱机器翻译，尽量多使用。它是一种工具，能够提高生产力，为什么不多用呢。网上那么多英语信息，你看原文，看得过来吗？更好的方法是用机器翻译，先看一下中文。

各大浏览器现在全都内置了机器翻译，以 Edge 浏览器为例，打开英文网页时，会自动弹出一个对话框，询问是否需要翻译成中文。

![](https://cdn.beekka.com/blogimg/asset/202104/bg2021040402.jpg)

我建议勾选“始终翻译英语网页”，以后只要打开英语网页，就会默认翻译成中文。这样阅读英语文章，极大提高速度，你的信息量将成倍增长。就算有时翻译得语句不通，但足以了解大意，如果觉得有必要精读，再查看英语原文。

此外，Gmail 网页端也内置了“邮件翻译”功能，这个也很有用。

![](https://cdn.beekka.com/blogimg/asset/202104/bg2021040403.jpg)

回到翻译书籍，我认为合理的流程是，先让机器翻译一遍原著，译者再修改机器译稿。这样起码节约了打字的时间和精力。未来也许就没有“译者”这个称谓了，只有“机器翻译校对”。

## Vite + TypeScript 深度实践

周刊与培训机构合作，每周介绍一门课程。通常，介绍的都是基础性课程， 本周尝试介绍一门前沿课程，内容很新，很多公司都在尝试，需要一定的前端基础。那就是 Vue.js 官方新推出的开发工具 [Vite](https://vitejs.dev/)。

![](https://cdn.beekka.com/blogimg/asset/202104/bg2021040701.jpg)

Vite 到底是什么？一些资深的开发者都不太了解。这也难怪，它只有一年的历史，两个月前刚发布了稳定版 2.0。

简单说，Vite 是 Vue.js 项目的开发服务器，提供了快速打包能力，用来替换掉 Webpack。大家知道，Webpack 的最大痛点除了配置复杂，就是打包速度非常慢。有些大型项目，喝一杯咖啡回来，都没打包完；开发阶段哪怕只是修改一行代码，热更新（HMR）重新打包有时也要好几秒甚至更久。

Vite 就是为了解决这个问题而设计的，利用浏览器原生的 ES6 模块的加载能力，跳过 Webpack 打包，为开发阶段提供“快如闪电”（官方文档用语）的加载速度。它的 Logo 就是一道闪电。

本周的课程介绍 Vite 的用法， **深度实践 Vite + TypeScript**，带你真正理解 Vue3 的开发与应用。因为 Vite 是 Vue.js 的官方产品，以后的最佳实践应该就是用它来开发 Vue 项目。了解和学会这一套新做法，不仅有助于前端技术水平的快速进阶，也有助于先人一步掌握 Vue3.0 如何在企业项目中落地，为面试和工作助一臂之力。

![](https://cdn.beekka.com/blogimg/asset/202104/bg2021040702.jpg)

本课程由腾讯课堂“双认证”机构——[京程一灯](https://www.yidengxuetang.com/)提供，原价98元，周刊读者只需 0.02元即可报名。微信扫描下方二维码，加入课程群，即可报名。

![](https://cdn.beekka.com/blogimg/asset/202104/bg2021040703.jpg)

报名成功的同学，还会再送一份价值294元的课程资料《TypeScript 高级教程》。

## 科技动态

1、[海水淡化暖房](https://seawatergreenhouse.com/construction-blog/2017/11/7/construction-completed)

![](https://cdn.beekka.com/blogimg/asset/202103/bg2021031009.jpg)

![](https://cdn.beekka.com/blogimg/asset/202103/bg2021031010.jpg)

一个英国团队在非洲索马里兰海边，建成了大型海水淡化暖房。完全不用电，只使用阳光，进行海水淡化。

![](https://cdn.beekka.com/blogimg/asset/202103/bg2021031011.jpg)

![](https://cdn.beekka.com/blogimg/asset/202103/bg2021031012.jpg)

暖房里面有四个大型的金属制成的蒸发墙，放入海水以后，在干热的沙漠风吹拂之下，海水迅速蒸发，水蒸汽在蒸发墙上冷凝，形成淡水。同时，蒸发后的海水变成海盐，可以单独出售。

![](https://cdn.beekka.com/blogimg/asset/202103/bg2021031013.jpg)

![](https://cdn.beekka.com/blogimg/asset/202103/bg2021031014.jpg)

2、[人脸识别破解术](http://www.xinhuanet.com/2021-03/30/c_1127270651.htm)

![](https://cdn.beekka.com/blogimg/asset/202104/bg2021040106.jpg)

上海警方破获一起虚开增值税发票案，犯罪嫌疑人通过破解“人脸识别”，注册虚假公司开假发票。他们先以30元每个的价格，收购他人的高清头像照片和身份证信息，然后使用“活照片” App 让照片“动起来”，生成包括点头、摇头、眨眼、张嘴等动作视频。

有了视频，下一步使用特殊处理的手机‘劫持’摄像头，在人脸认证环节时，手机摄像头不会启动，系统获取的是之前做好的视频。系统会认为是本人在摄像头前，最后会通过认证。

据犯罪嫌疑人交代，他们已经破解了大量含有“人脸识别”环节的 App，其中不乏许多用户量巨大的App。每单的破解价格从25元到300元不等。

3、[月球方舟](https://www.cbsnews.com/news/scientists-335-million-seed-sperm-egg-samples-moon-noahs-ark/)

![](https://cdn.beekka.com/blogimg/asset/202103/bg2021031705.jpg)

美国亚利桑那大学的科学家提出“月球方舟”的设想，将地球上670万物种的种子、孢子、精子和卵子，冷冻储存后送到月球保存，以防物种灭绝。

具体做法是，利用月球地表下熔岩形成的空洞，建设坑道，将冷冻容器放在里面。月球地表已经有三、四十亿年没有改变过，比起现在位于北极的世界种子库要安全得多，地球的风险实在太大。

4、[谷歌甲骨文诉讼的终审](https://www.bbc.com/zhongwen/simp/business-56646181)

![](https://cdn.beekka.com/blogimg/asset/202104/bg2021040603.jpg)

2005年，谷歌收购了安卓系统，准备将 Java 语言用于安卓开发。由于授权费没有谈拢，最后选择自己实现 Java 虚拟机，没有用官方实现，但是外部 API 保持不变。这样一来，开发者正常编写的 Java 代码不用修改，就可以在安卓上面运行。

2010年，甲骨文公司获得 Java 语言所有权之后，起诉谷歌侵权。双方争议的焦点是，软件的 API 是否具有版权，即谷歌沿用 Java 的 API，是否造成侵权？业界对这个诉讼非常关注，如果法庭判决侵权成立，以后就很难做服务的兼容层，因为未经许可不能提供跟他人一模一样的 API 了。

这个案件经历了多轮审判，2018年法院判决甲骨文胜诉，谷歌上诉至美国最高法院。2021年4月5日，最高法院以6票赞成、2票反对，裁决谷歌对 Java API 属于合理使用，不构成侵权。

5、**一句话消息**

[埃及国家博物馆](https://www.axios.com/egypt-ancient-mummies-parade-cairo-photos-88c44bf7-becb-410c-9e7e-3ed09fdcbdaf.html)搬迁新馆，政府举办了一个盛大晚会。浩浩荡荡的游行队伍将18具古埃及法老和4具皇后的木乃伊，以国王的规格，护送到新馆。这些木乃伊距今已经有3000多年。

![](https://cdn.beekka.com/blogimg/asset/202104/bg2021040503.jpg)

![](https://cdn.beekka.com/blogimg/asset/202104/bg2021040504.jpg)

![](https://cdn.beekka.com/blogimg/asset/202104/bg2021040505.jpg)

![](https://cdn.beekka.com/blogimg/asset/202104/bg2021040506.jpg)

[GitHub](https://daniel.haxx.se/blog/2021/03/23/github-steel/) 代码提交统计的 3D 模型，前一段时间开放了官方下载，网友已经收到了实物。官方的 3D 打印价格很贵，大家可以下载 stl 文件，去国内的网店打印。

![](https://cdn.beekka.com/blogimg/asset/202104/bg2021040501.jpg)

![](https://cdn.beekka.com/blogimg/asset/202104/bg2021040502.jpg)

[奢侈品牌 Gucci](https://www.ifanr.com/1407755) 发布了首款数字虚拟运动鞋：Gucci Virtual 25，售价人民币78元。买来后，只能在线上世界穿。目前， Gucci App、VR 社交平台 VR Chat、游戏平台 Roblox 支持该鞋。

![](https://cdn.beekka.com/blogimg/asset/202103/bg2021033005.jpg)

![](https://cdn.beekka.com/blogimg/asset/202103/bg2021033006.jpg)

![](https://cdn.beekka.com/blogimg/asset/202103/bg2021033007.jpg)

[中科院](https://finance.sina.cn/7x24/2021-03-24/detail-ikknscsk0329255.d.html)研究显示，北半球的夏季平均从78天增加到95天，而春季、秋季、冬季都变短了。

## 文章

1、[加油站扫码支付的风险](http://www.xinhuanet.com/fortune/2021-03/24/c_1127247305.htm)（中文）

政府提示，在加油机旁边扫码付款有重大风险，手机发射的功率可能引发射频火花。这样说的话，那里也不应该手机上网。

2、[如何救助一只雪豹](https://user.guancha.cn/main/content?id=482248)（中文）

![](https://cdn.beekka.com/blogimg/asset/202103/bg2021033004.jpg)

青海野生动物救护中心的副主任讲述，救助一只迷路雪豹的全过程。

3、[大数据可视化工具](https://itnext.io/visualization-tools-for-big-data-c3361241a67e)（英文）

![](https://cdn.beekka.com/blogimg/asset/202104/bg2021040507.jpg)

现在前端的图表库很多，作者推荐了几个他觉得最好的库，逐一进行了介绍。

4、[Git 邮件工作流](https://blog.brixit.nl/git-email-flow-versus-github-flow/)（英文）

多人项目现在一般使用 Pull Request 进行合作，但是 Linux 内核项目使用的是电子邮件工作流，本文介绍具体怎么做。电子邮件发送 Patch 其实也很方便。

5、[React + D3.js 如何开发 SVG 图形](https://wattenberger.com/blog/react-and-d3)（英文）

![](https://cdn.beekka.com/blogimg/asset/202103/bg2021033002.jpg)

本文是一篇详细教程，讲解如何在 React 里面引入 D3，开发 SVG 动画。  

6、[八进制数字造成的安全漏洞](https://sick.codes/universal-netmask-npm-package-used-by-270000-projects-vulnerable-to-octal-input-data-server-side-request-forgery-remote-file-inclusion-local-file-inclusion-and-more-cve-2021-28918/)（英文）

本文分析 node.js 库 netmask 的一个安全漏洞的由来。如果黑客输入`0177.0.0.1`，netmask 会认为这是一个公网地址，但实际上是内网地址。

7、[什么是二分法搜索？](https://jorgechavez.dev/2020/08/22/everything-you-need-to-know-about-binary-search-algorithm/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202103/bg2021032801.jpg)

通过示例，详细讲解二分法搜索的入门教程。

8、[如何创建 SVG 网格布局和动画](https://www.cassie.codes/posts/swipey-image-grids/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202104/bg2021040802.jpg)

本文是一篇详细教程，一步步教大家怎么在 SVG 图形里面，创建网格布局，并且添加图像的动画效果。

## 工具

1、[xeuledoc](https://github.com/Malfrats/xeuledoc)

一个命令行工具，用于获取谷歌文档的各种元信息。

2、[kill-sticky](https://github.com/t-mart/kill-sticky)

一个 Bookmarklet 书签脚本，用于消除网页上的粘性页眉或页脚。

3、[I don't care about cookies](https://www.i-dont-care-about-cookies.eu/)

浏览器插件，用来消除网页上的各种 Cookie 许可的提示层。

4、[Sorted CSS Colors](https://github.com/scriptype/sorted-colors)

![](https://cdn.beekka.com/blogimg/asset/202103/bg2021031903.jpg)

CSS 标准一共列出了148种有名称的颜色，这个在线工具用来在它们当中找到合适的颜色。你在色轴上面确定一个基色，相近的颜色就会按照从浅到深的顺序列出。

5、[Nyxt](https://nyxt.atlas.engineer/)

![](https://cdn.beekka.com/blogimg/asset/202103/bg2021031901.jpg)

一个带有命令行的浏览器，可以完全不用鼠标，只通过命令行浏览网页。

6、[Charts.css](https://chartscss.org/)

![](https://cdn.beekka.com/blogimg/asset/202103/bg2021031806.jpg)

一个只使用 CSS 的图形库（不需要 JS），可以把`<table>`标签变成折线图、直方图或其他图形。

7、[Manim](https://github.com/ManimCommunity/manim/)

![](https://cdn.beekka.com/blogimg/asset/202103/bg2021031805.jpg)

一个用来生成数学动画视频（比如绘制函数）的 Python 库。

8、[React PIN Field](https://github.com/soywod/react-pin-field)

![](https://cdn.beekka.com/blogimg/asset/202103/bg2021031804.jpg)

一个 React 组件，生成漂亮的密码（验证码）输入框。

9、[FocalBoard](https://www.focalboard.com/)

![](https://cdn.beekka.com/blogimg/asset/202103/bg2021031801.jpg)

一个桌面的看板软件，类似 Trello，可以用来管理待办事项。

10、[Workflow](https://github.com/sogou/workflow)

搜狗的 C++ 服务器引擎，支持各种后端协议，可以在它的基础上进行 C++ 开发，定制自己的高性能服务器。（[@holmes1412](https://github.com/ruanyf/weekly/issues/1712) 投稿）

## 资源

1、[Visu Algo](https://visualgo.net/)

![](https://cdn.beekka.com/blogimg/asset/202104/bg2021040302.jpg)

该网站有各种常用算法的可视化演示。（[@CIPHER-D](https://github.com/ruanyf/weekly/issues/1710) 投稿）

2、[`.new`域名](https://whats.new/shortcuts)

![](https://cdn.beekka.com/blogimg/asset/202103/bg2021032308.jpg)

`.new`域名是谷歌托管的，提供了一个打开网络服务的快捷方式，下面是一些例子。

- `doc.new`：新建一篇谷歌文档
- `sheet.new`：新建一个谷歌表格
- `js.new`：新建一个 CodeSandbox 的代码片段
- `github.new`：新建一个 GitHub 仓库

标题网址是谷歌官方的`.new`域名汇总。

3、[文本编辑器比较](https://github.com/jhallen/joes-sandbox/tree/master/editor-perf)

文本编辑器是程序员的必备工具，这里比较了十几个常见编辑器的性能，包括内存占用、文件打开时间、正则搜索速度、大文件支持等方面。

4、[Emoji Tracker](http://emojitracker.com/)

![](https://cdn.beekka.com/blogimg/asset/202103/bg2021033003.jpg)

这个网页按照推特的使用数量，对表情符号 Emoji 进行排序，最常用的放在最前面。可以用它查找哪些 Emoji 是经常使用的。

5、[Go 实用教程](https://www.practical-go-lessons.com/)（Practical Go Lessons）

![](https://cdn.beekka.com/blogimg/asset/202103/bg2021032501.jpg)

一本很不错的 Go 语言的英文教程，从零讲起。

## 图片

1、[复杂的 C++](https://www.cppstories.com/2017/02/how-to-stay-sane-with-modern-c/)

C++ 是一门复杂的语言，但是语言设计者还在往里面添加更多的东西。

- C++98版：879页
- C++11版：1324页
- C++14版：1368页
- C++17版：1586页
- C++20版：1834页

![](https://cdn.beekka.com/blogimg/asset/202103/bg2021032001.jpg)

C++17 比 C++98 多了近80%的内容，而最新版 C++20 比 C++98 多了近1000页。开发者可能会抱怨复杂性的增加，很难掌握所有的内容，但是除了接受，并没有其他办法。

2、[加尔松潟湖大桥](https://zh.wikipedia.org/wiki/%E5%8A%A0%E7%88%BE%E6%9D%BE%E6%BD%9F%E6%B9%96%E5%A4%A7%E6%A9%8B)

加尔松潟湖大桥是乌拉圭的一座环状桥梁，于2015年通车。

![](https://cdn.beekka.com/blogimg/asset/202103/bg2021032605.jpg)

![](https://cdn.beekka.com/blogimg/asset/202103/bg2021032606.jpg)

![](https://cdn.beekka.com/blogimg/asset/202103/bg2021032607.jpg)

它的环状设计主要出于美观考量，但也有一些实际的好处，比如强迫司机只能减速行驶，同时可以为行人设置单行道，不同方向的行人走不同的半圆，提高了安全性。

## 文摘

1、[时间是如何浪费掉的？](http://paulgraham.com/selfindulgence.html)

作者：Paul Graham

几天前，我意识到了一件令人惊讶的事情：浪费时间的最危险方法不是花时间在玩，而是花时间在做假工作。

当你花时间玩乐时，你会知道自己在放纵。内心的警报很快就会发出。如果某天早晨我醒来后，整天坐在沙发上看电视，我很快会觉得自己一定是做错了什么。这样一想，就让人不舒服。你只需要在沙发上看电视2个小时，就会有这种不舒服的反应，更不用说整天看电视了。

但是，还有一些天，你整天都在忙，等到晚上你问自己今天干了什么，回答是：虽然很忙，做的却没什么意义。

你的感觉也会因此不好，但是不像整天看电视那样糟糕。如果我整天看电视，我会觉得自己正在走向灭亡，但如果是忙忙碌碌做无意义的事情，这样的警报就不会响起。因为我所做的事情表面上看起来像是真正的工作，比如处理电子邮件。

表面上看，你一天都在办公桌前工作，但其实你也是在浪费时间，因为这不会让你的生活发生真正的变化。而且由于你的内心不会发出警报，比起看电视，假工作才是浪费时间最危险的方法。

时间要用来做对你真正重要的事情，不要落入假工作的陷阱。

## 言论

1、

为了提炼出一个清晰的观点，我需要充足的睡眠、贪婪地阅读、修炼者一样地冥想、不跟任何人解释我在干嘛。

-- 纳西姆·塔莱布（Nassim Taleb），畅销书《黑天鹅》的作者

2、

写作过程分为两个阶段：发散和收敛。在发散阶段，你自由地探索新想法；在收敛阶段，你变得专注，将想法尽量简化，以便将其发布。我最喜欢的一句写作格言：收集点，然后连接点。

-- David Perell

3、

金钱杀死了黑客团体，加密货币的兴起是最后一击。有些黑客团队通过入侵比特币交易所而成为亿万富翁，那些声称自己不在乎钱的黑客几乎毫无例外地都是孩子，或者只是假装自己不在乎。

-- [Hacker News 读者](https://news.ycombinator.com/item?id=26498998)

4、

我希望 Deno 和 node.js 可以合并，就像以前 io.js 和 node.js 的合并。但是，这次应该很难发生，io.js 属于分叉，而 Deno 更像生态系统的重启。

-- [Hacker News 读者](https://news.ycombinator.com/item?id=26620578)

5、

大学的建立是为了培养学生进行智力探索，但是现在，大学越来越转向职业培训，这根本不是建立大学的原始目的。

-- [David Perell](https://twitter.com/david_perell/status/1376378046752653313)

## 历史上的本周

2020年（第 102 期）：[工作热情从何而来？](http://www.ruanyifeng.com/blog/2020/04/weekly-issue-102.html)

2019年（第 50 期）：["时间换收入"是一个陷阱](http://www.ruanyifeng.com/blog/2019/04/weekly-issue-50.html)

## 订阅

这个周刊每周五发布，同步更新在[阮一峰的网络日志](http://www.ruanyifeng.com/blog)和[微信公众号](http://weixin.sogou.com/weixin?query=%E9%98%AE%E4%B8%80%E5%B3%B0%E7%9A%84%E7%BD%91%E7%BB%9C%E6%97%A5%E5%BF%97)。

微信搜索“阮一峰的网络日志”或者扫描二维码，即可订阅。

![](https://cdn.beekka.com/blogimg/asset/202103/bg2021030402.jpg)

（完）
