# 科技爱好者周刊（第 316 期）：你一生的故事

这里记录每周值得分享的科技内容，周五发布。

本杂志[开源](https://github.com/ruanyf/weekly)，欢迎[投稿](https://github.com/ruanyf/weekly/issues)。另有[《谁在招人》](https://github.com/ruanyf/weekly/issues/5090)服务，发布程序员招聘信息。合作请[邮件联系](mailto:yifeng.ruan@gmail.com)（yifeng.ruan@gmail.com）。

## 封面图

![](https://cdn.beekka.com/blogimg/asset/202408/bg2024082216.webp)

龙珠岛是香港的一个孤岛，大小约为四个足球场，以前是荒岛，后来建了楼盘。目前，岛上没有任何商店，只有两台自动售货机。（[via](https://zh.wikipedia.org/wiki/%E9%BE%8D%E7%8F%A0%E5%B3%B6)）

## 你一生的故事

几年前，我读过一篇科幻小说，名字叫做《你一生的故事》（Story of your Life），有中译本。

![](https://cdn.beekka.com/blogimg/asset/202409/bg2024090504.webp)

这篇小说得过很多奖，还被好莱坞改编成电影《降临》（Arrival）。

![](https://cdn.beekka.com/blogimg/asset/202409/bg2024090506.webp)

它的作者是美国华裔小说家 Ted Chiang（中文名为姜峰楠）。

![](https://cdn.beekka.com/blogimg/asset/202409/bg2024090505.webp)

它讲了一个什么故事呢？

有一天，外星人的飞船来到地球，就停在地球轨道上面。它们向地面发送了很多半圆形的通信站，希望与人类建立接触。

![](https://cdn.beekka.com/blogimg/asset/202409/bg2024090507.webp)

人类只要来到这些通信站，通过某种类似“可视电话”的机制，就能跟外星人面对面交流。

问题是，这些外星人都是七只脚的怪物，人类听不懂它们的语言。美国军方就派出一个语言学家，试图学会它们的语言。

![](https://cdn.beekka.com/blogimg/asset/202409/bg2024090508.webp)

语言学家在学习过程中，慢慢领悟了，预见到了自己的未来。

她看到，自己会结婚，会有一个女儿，然后女儿25岁时将在一场意外事故中去世。

![](https://cdn.beekka.com/blogimg/asset/202409/bg2024090509.webp)

于是，当她听到未来的丈夫问自己：“你想要个孩子吗？”，不禁陷入了沉思，要不要让这样的命运发生呢？

这就是小说的内容，它的名字《你一生的故事》，就是指语言学家在讲述她的女儿一生的故事。

我读完后，对这个故事本身没有特别的感觉，倒是对这个书名念念不忘。

**每个人的一生都是一个故事**，关于走过的旅程，经历的战斗，感受的苦恼和困惑。但是，大多数人的故事没有记录下来，随着日子湮没了。他们自己不会写，也不会有人帮他们写。

**如果存在一种服务，可以把每个人的一生写成故事，保存下来，那该多好？**

前几天，我发现有人抱有[一样的想法](https://www.lampysecurity.com/post/the-infinite-audio-book)，而且居然已经动手做出来了。

他的实现思路很简单，就是随身佩戴一个摄像头，每隔一段时间，自动或手动对着周围环境，拍一张照片。

然后将这张照片发送到 OpenAI，让 AI 根据预先设置的提示词，用传记的作者的口吻，为照片生成一段描述。

他用树莓派 + 摄像头 + 打印的外壳，做出了一个这样的装置，只要佩戴在身上，就会定时把周围环境的照片发送到 OpenAI。

![](https://cdn.beekka.com/blogimg/asset/202409/bg2024090510.webp)

他用的提示词如下，我译成了中文，里面的人名、城市、年龄都是随便改的。

> 你是一部关于张三的电影的叙述者。张三的年龄为20岁，所在城市为上海。当你看到附件的场景照片时，应该从张三的角度描述这张照片，所有人物都使用第三人称。

我就从网上找了一张上海街景的照片。

![](https://cdn.beekka.com/blogimg/asset/202408/bg2024083101.webp)

然后，把照片和提示词一起发给 OpenAI，下面就是返回的描述。

> 在这张照片中，张三站在熙熙攘攘的上海街头，他的眼光落在了“杨氏煎饺”的招牌上。街道上人群络绎不绝，从周围匆匆走过的行人到排队等待的食客们，每个人都沉浸在自己的小世界里。队伍前的人们耐心地等待着品尝这家声名远扬的小吃，而张三对这一幕并不陌生。这不仅仅是一条普通的街道，对他来说，这里充满了家的味道和温暖的回忆。
> 
> 街道两侧的建筑展示了上海的传统与现代的融合，老旧的石库门建筑与现代的招牌交相辉映。电线杆上纵横交错的电线像是城市生活的复杂脉络。尽管张三已经习惯了这种忙碌的城市生活，但每次路过这样的街景，心中总会涌起一丝慰藉。
> 
> 在这繁忙的一天里，张三像往常一样穿梭在这座大都市的心脏地带，尽管他只是其中的一员，但这座城市的每一个角落都承载着他的故事和梦想。

这像不像一段传记？

这些照片和描述都按照时间顺序保存，只要将它们连起来，就是一部图文并茂的你的传记。以后，你自己或者其他人，就可以查看你的每一年是怎么度过的。你还可以手动添加自己的补充。

就这么简单，**实现了 AI 为你写传记**。它使用的都是很普通的技术，完全可以集成在市售的智能眼镜里面。

我希望，很快就会有公司推出这样的服务，让 AI 为你写每天的传记。以后，每个人都会有成文的“你一生的故事”，流传下去。

## [数码荔枝活动] JetBrains 全家福折扣

[数码荔枝](https://lizhi.shop/)是国内知名的正版软件销售商店，拥有众多正版软件的代理权。

现在是开学季，他们推出了 **JetBrains 系列软件折扣**，来周刊发布活动消息。

![](https://cdn.beekka.com/blogimg/asset/202409/bg2024090414.webp)

大家知道，JetBrains 是世界排名第一的 IDE 开发商，著名的 IntelliJ IDEA 和 WebStrom 都是它的产品，尤其前者堪称 Java 必备工具。另外，谷歌官方推荐的安卓开发语言 Kotlin，也是它发明的。

大家想要购买正版，这是挺好的机会。现在到9月底，可以点击领取[50元 JetBrains 优惠券](https://go.lizhi.shop/ruanyifeng50)，或者扫描下图二维码：官方优惠售价打98折，再减50元。

![](https://cdn.beekka.com/blogimg/asset/202409/bg2024090415.webp)

## 科技动态

1、[宇航员的尾巴](https://www.core77.com/posts/130277/Industrial-Design-Student-Work-A-Stabilizing-Robotic-Tail-for-Floating-Astronauts)

动物的尾巴，一个重要作用就是在运动中，保持身体的平衡。

英国皇家设计学院的一个学生，根据这个原理，为宇航员设计了一条尾巴，便于在失重环境下保持平衡。

![](https://cdn.beekka.com/blogimg/asset/202403/bg2024032406.webp)

这个尾巴还可以有其他功能。比如，作为第三只手，抓住支撑物。

![](https://cdn.beekka.com/blogimg/asset/202403/bg2024032407.webp)

它的问题是，无法用意识控制这个尾巴，而是要手动拉扯控制绳，有点像百叶窗的操作方式。

![](https://cdn.beekka.com/blogimg/asset/202403/bg2024032408.webp)

2、[假西瓜](https://www.bbc.com/news/articles/c5ydjdzl74po)

美国媒体报道了一桩令人啼笑皆非的新闻。

犯罪分子将毒品伪装成西瓜，装在卡车上，企图从墨西哥混进美国。

![](https://cdn.beekka.com/blogimg/asset/202408/bg2024082803.webp)

有些假西瓜，与真西瓜混在一起。更多的则是，整箱整箱全部假西瓜。

![](https://cdn.beekka.com/blogimg/asset/202408/bg2024082802.webp)

问题是，这些西瓜实在太假了，就是外面包了一层西瓜皮的塑料纸，再用胶纸粘合在一起。

![](https://cdn.beekka.com/blogimg/asset/202408/bg2024082804.webp)

海关人员一眼就看出“西瓜”有问题，把这些人全抓了起来。

3、[超声波咖啡](https://www.unsw.edu.au/newsroom/news/2024/05/Ultrasonic_cold_brew_coffee_ready_under_three_minutes)

我们一般都用热水冲泡咖啡，但是有些人喜欢冷水冲泡的咖啡，也就是冷萃咖啡。

据说，冷萃咖啡更顺滑、酸度更低、苦味更少。但问题是，它需要冷水完全浸泡咖啡粉12到24小时，这样才能提取风味。

![](https://cdn.beekka.com/blogimg/asset/202405/bg2024050801.webp)

你想拿起水壶，立刻冲一杯冷萃咖啡，那是不可能的。

澳大利亚科学家最近发明了一种新方法，可以在三分钟之内就制作一杯冷萃咖啡。

![](https://cdn.beekka.com/blogimg/asset/202405/bg2024050802.webp)

他们使用 38.8 kHz 的超声波，去冲击咖啡的过滤篮，让咖啡因快速释放出来。

以前12小时的萃取过程，现在只要三分钟。这个发明可能会改变咖啡店和咖啡爱好者的冲泡方法。

![](https://cdn.beekka.com/blogimg/asset/202405/bg2024050803.webp)

## 文章

1、[使用 GitLab 托管静态内容](https://eklausmeier.goip.de/blog/2024/07-14-hosting-static-content-with-gitlab)（英文）

![](https://cdn.beekka.com/blogimg/asset/202407/bg2024072804.webp)

一篇简明教程，演示如何在 GitLab 通过持续构建，部署静态网页。

2、[AI 代码编辑器 Cursor 上手指南](https://jstoppa.com/posts/artificial-intelligence/fundamentals/code-smarter-not-harder-developing-with-cursor-and-claude-sonnet/post/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202409/bg2024090304.webp)

Cursor 是最近走红的 AI 代码编辑器，底层模型是 Claude 3.5 Sonnet，代码生成要比 GPT-4 更出色。作者介绍怎么使用这个编辑器。

3、[JS 垃圾收集机制的一个案例](https://jakearchibald.com/2024/garbage-collection-and-closures/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202407/bg2024073101.webp)

作者发现自己的 JS 代码，出现了意想不到的内存泄漏。本文就讨论这个案例，为什么垃圾回收机制在这里失灵。

4、[被低估的硬件小配件](https://vermaden.wordpress.com/2024/03/21/tiny-undervalued-hardware-companions/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202405/bg2024050108.webp)

一个老外发现淘宝/1688上面，有很多实用的硬件小配件，比如转角的 USB 接头（上图）。本文介绍他发现的这些配件。

5、[云开发环境的好处](https://codesandbox.io/blog/why-i-code-in-the-cloud)（英文）

![](https://cdn.beekka.com/blogimg/asset/202406/bg2024061002.webp)

CodeSandbox 官方博客文章，介绍云开发环境（开发都在云端完成）的好处。

6、[React 的混乱](https://old.reddit.com/r/ExperiencedDevs/comments/1dh9rly/the_chaos_of_react_in_medium_to_large_web_apps/)（英文）

本文是发在 Reddit 的一个帖子，作者写了自己的亲身感觉，总结 React 开发前端应用时存在的问题。

## 工具

1、[ASCII Silhouettify](https://meatfighter.com/ascii-silhouettify/)

![](https://cdn.beekka.com/blogimg/asset/202406/bg2024060801.webp)

一个网页应用，将图片转成彩色的 ASCII 字符图（上图）。

2、[Unforget](https://github.com/computing-den/unforget)

![](https://cdn.beekka.com/blogimg/asset/202406/bg2024061201.webp)

一个开源的 Web 笔记应用，后端数据放在 Google Keep。

3、[Revideo](https://github.com/redotvideo/revideo)

![](https://cdn.beekka.com/blogimg/asset/202406/bg2024061202.webp)

一个 React 的视频编辑组件，可以实时编辑内容，在网页上生成视频。

4、[Unsplash Wanderer](https://chromewebstore.google.com/detail/unsplash-wanderer/jdjjjnfdkhpdppedhjgdcecmmcmklopm)

![](https://cdn.beekka.com/blogimg/asset/202409/bg2024090302.webp)

一个 Chrome 浏览器插件，打开新的 Tab 页时，随机展示一幅 unsplash 图片库的高清照片。（[@zerosoul](https://github.com/ruanyf/weekly/issues/5096) 投稿）

5、[cloud_dns_exporter](https://github.com/eryajf/cloud_dns_exporter)

![](https://cdn.beekka.com/blogimg/asset/202409/bg2024090303.webp)

这个开源工具从 DNS 提供商，自动获取域名的解析列表，用来检查所有域名（含二级域名）的证书是否过期，目前支持腾讯云、阿里云和 Godaddy。（[@eryajf](https://github.com/ruanyf/weekly/issues/5098) 投稿）

6、[BoardOS](https://boardos.online/)

![](https://cdn.beekka.com/blogimg/asset/202409/bg2024090417.webp)

一个支持实时协同的白板软件，有免费版。（[@superliwei](https://github.com/ruanyf/weekly/issues/5109) 投稿）

7、[ThinNav](https://github.com/DemoJ/ThinNav)

![](https://cdn.beekka.com/blogimg/asset/202409/bg2024090512.webp)

作者在 ChatGPT 的帮助下，完成的一个极简的网址导航站，自带后台管理系统，可以用作学习参考。（[@DemoJ](https://github.com/ruanyf/weekly/issues/5112) 投稿）

8、[JSON Generator](https://www.jsongenerator.io/)

![](https://cdn.beekka.com/blogimg/asset/202310/bg2023100401.webp)

一个在线工具，用来生成符合指定格式的 JSON 伪数据。

9、[LangSync](https://langsync.app/)

![](https://cdn.beekka.com/blogimg/asset/202310/bg2023100501.webp)

一个命令行工具，使用 AI 一键翻译出软件的语言包。

10、[ttyd](https://github.com/tsl0922/ttyd)

这个命令行工具可以在浏览器里面，打开本机的终端窗口，让用户在浏览器执行终端命令。

11、[AstroNvim](https://github.com/AstroNvim/AstroNvim)

![](https://cdn.beekka.com/blogimg/asset/202310/bg2023100517.webp)

neovim 编辑器的一个配置，直接帮你定制好了。

## 照片管理软件

如果你不想再用云服务（比如 iCloud Photos 或 Google Photos）管理照片和视频，而想自己架设照片管理服务，那么目前比较流行的是下面三款开源软件。

它们都带有 Web 端，后面两款还有手机端。

1、[PhotoPrism](https://github.com/photoprism/photoprism)

![](https://cdn.beekka.com/blogimg/asset/202307/bg2023071113.webp)

2、[Immich](https://github.com/immich-app/immich)

![](https://cdn.beekka.com/blogimg/asset/202307/bg2023071104.webp)

3、[Ente](https://github.com/ente-io/ente)

![](https://cdn.beekka.com/blogimg/asset/202404/bg2024041109.webp)

## 资源

1、[PostgreSQL 在线游乐场](https://pgplayground.com/)

![](https://cdn.beekka.com/blogimg/asset/202407/bg2024072616.webp)

这个网站提供免费的 PostgreSQL 实例，让你在网页进行各种数据库测试。

2、[Is my blue your blue?](https://ismy.blue/)

![](https://cdn.beekka.com/blogimg/asset/202409/bg2024090419.webp)

一个很有趣的网站，给你一系列颜色，问你这是蓝色，还是绿色，最后确定你的蓝绿边界在哪里。

3、[轻松游牧](https://easynomad.cn/)

![](https://cdn.beekka.com/blogimg/asset/202409/bg2024090416.webp)

一个远程工作聚合网站，每天从网上收集支持国内远程的岗位。（[@jiangsong216](https://github.com/ruanyf/weekly/issues/5108) 投稿）

4、[RawWeb.org](https://rawweb.org/)

![](https://cdn.beekka.com/blogimg/asset/202409/bg2024090513.webp)

一个收录独立网站的搜索引擎。（[@0x2E](https://github.com/ruanyf/weekly/issues/5113) 投稿）

5、[初学者的微积分教程](https://math.mit.edu/~djk/calculus_beginners/)（Calculus for Beginners）

![](https://cdn.beekka.com/blogimg/asset/202407/bg2024072708.webp)

一本英文的微积分教材，从最简单的概念讲起，免费阅读。

## 图片

1、[PhotoShop 的第一张照片](https://www.theguardian.com/artanddesign/photography-blog/2014/jun/13/photoshop-first-image-jennifer-in-paradise-photography-artefact-knoll-dullaart)

PhotoShop 是世界排名第一的图像处理软件。它最早是由美国的两兄弟，托马斯·诺尔和约翰·诺尔，在1987年开发的。

![](https://cdn.beekka.com/blogimg/asset/202409/bg2024090514.webp)

软件完成后，需要对客户演示。但是，当时很难找数码照片，因为照相机都是胶片相机，不是数码相机。只能对相片进行数字扫描，获得数码照片。

约翰·诺尔就选了一张在南太平洋玻利尼西亞度假时，他为女朋友在海滩上拍的照片，进行扫描。

![](https://cdn.beekka.com/blogimg/asset/202409/bg2024090401.webp)

这就是 PhotoShop 处理的第一张照片。

2、[最小的英文字体](http://luc.devroye.org/fonts-51468.html)

世界最小的英文字体是一个瑞典设计师的作品。他在 3x3 像素的面积里面，实现了26个字母。

也就是说，9个像素的空间里，要展示出 abc 每个字母的形状，长和宽最多只能用3个像素。

![](https://cdn.beekka.com/blogimg/asset/202312/bg2023122901.webp)

## 文摘

1、[鲍尔莫的面试题](https://blog.jgc.org/2024/09/steve-ballmers-binary-search-interview.html)

微软的前 CEO 鲍尔莫曾经在采访中透露，他会问面试微软的候选人一个问题。

![](https://cdn.beekka.com/blogimg/asset/202409/bg2024090418.webp)

> 我要跟你玩一个游戏。
> 
> 我在心里选择一个1到100之间的整数，你来猜这个数字。每次猜完，我会告诉你，答案比你猜的大还是小。如果猜错，你可以接着猜，直到猜中为止。
> 
> 如果你只用一次就猜中，我给你5美元，用两次猜中我给你4美元，三次3美元，四次2美元，五次1美元，六次0美元。
> 
> 你还是没猜中的话，就要倒贴钱了。七次猜中，你给我1美元，八次2美元，九次3美元。
> 
> 请问你应该玩这个游戏吗？
 
回答这个问题，需要算出游戏结果的期望值，以确定哪一方获利的可能性更高。计算过程和结果可以看链接。

2、[安灯线](https://spike.sh/blog/pull-the-andon-cord/)

安灯线（Andon Cord）是丰田公司在流水线引入的一种质量控制方法。

丰田公司的装配线上方，有一根长绳。任何一个员工发现产品缺陷时，就拉一下这根绳子。警报器就会响起来，整个装配线都会停下来。

![](https://cdn.beekka.com/blogimg/asset/202210/bg2022100103.webp)

![](https://cdn.beekka.com/blogimg/asset/202409/bg2024090516.webp)

生产经理听到警报以后，就会跑过来，了解产品缺陷并解决问题，然后生产线才会重新开动。

这种制度的目的是，**谁发现问题，谁拉绳子**，直到解决为止，不要把问题留给下一个环节。

## 言论

1、

截至去年底，英特尔的员工人数为124,800人，台积电为76,478人，AMD 为26,000人。

后两家公司加起来，还比英特尔的人数少，却造出更强的芯片。英特尔现在宣布裁员15,000人，还是不够，后面可能会进一步裁员。

-- [《英特尔的问题》](https://stratechery.com/2024/intel-honesty/)

2、

在英国，汽车靠左行驶。据说，这沿袭自罗马时代，当时罗马人在道路左边骑马。

罗马人之所以选择左边，是因为他们习惯在身体左侧佩剑。这样右手拔剑时，就可以对付道路中央的敌人。

-- [《英国人为什么靠左行驶？》](https://www.theguardian.com/notesandqueries/query/0,5753,-19385,00.html)

3、

我对元宇宙的定义是，一个大型多人在线宇宙，具有空间感，所有用户都以相同的方式感知围绕着该空间的体验。你可以从一个地方移动到另一个地方，并与不在场的其他用户互动。它不受任何一个实体的控制，许多大大小小的创作者都在那里建造东西。

-- [尼尔·斯蒂芬森](https://www.matthewball.co/all/sweeneystephenson)（Neal Stephenson），“元宇宙”这个词的发明者

4、

我的职业建议是，任何工作要么让你学习（learn），要么让你赚钱（earn）。如果既学不到新东西，又赚不到钱，你就应该走了。

-- [Garry Tan，硅谷风险投资家](https://beabytes.com/seafaring-part-i/)

## 往年回顾

[为什么英雄不使用炸药](https://www.ruanyifeng.com/blog/2023/09/weekly-issue-269.html)（2023 #269）

[如何防止帐号被黑](https://www.ruanyifeng.com/blog/2022/08/weekly-issue-219.html)（2022 #219）

[五菱汽车的产品设计](https://www.ruanyifeng.com/blog/2021/07/weekly-issue-169.html)（2021 #169）

[降雨量和保险博弈](https://www.ruanyifeng.com/blog/2020/08/weekly-issue-119.html)（2020 #119）

（完）

