# 每周分享第 1 期

这里记录过去一周，我看到的值得分享的东西。

长久以来，我一直用各种方式，尝试整理我的收藏夹。最近想到，把它写成文章，共享出来，也许效果更好。

## 语雀

语雀（[yuque.com](https://yuque.com?utm_source=ruanyifeng.com)）是阿里巴巴集团内部最大的文档平台，也是阿里系知识管理和团队协作的主要工具之一。

今天（4月23日）是世界读书日，[语雀](https://yuque.com/)选在今天放开注册，不再需要邀请码，用户可以直接注册，跟阿里的正式员工一样使用所有功能。

[![](http://www.ruanyifeng.com/blogimg/asset/2018/bg2018042301.png)](https://yuque.com?utm_source=ruanyifeng.com)

为了配合世界读书日，语雀还邀请了一些互联网知名人士，写下他们的推荐书单，比如蚂蚁金服 CTO 的[程立](https://yuque.com/book-academy/2018/lusu?utm_source=ruanyifeng.com)。

## 新闻

1、[Instagram](https://www.macrumors.com/2018/04/04/instagram-disables-third-party-app-apis/) 和 [Twitter](https://blog.twitter.com/developer/en_us/topics/tools/2017/announcing-more-functionality-to-improve-customer-engagements-on-twitter.html) 限制第三方调用 API

4月4日，Instagram 无预警地宣布，立即废止一大批 [API](https://www.instagram.com/developer/changelog/)，像用户的 follower、like 等数据都无法再拿到了。同时宣布，每个用户的每小时 API 请求数量限制，从 5000 降低为 200。另外，还计划从2018年12月11日起，不再允许第三方 App 获取它的公开内容。

稍早，Twitter 也宣布，2018年6月19日之后，将不再提供 streaming services，这意味着第三方客户端 Tweetbot、Tweetings、Twitterrific 将无法自动刷新时间轴，必须用户自己手动刷新，才能看到新内容。有人做了一个网站 [apps-of-a-feather.com](http://apps-of-a-feather.com/) 呼吁 Twitter 改变这个决定。

这些大型社交媒体想要表达的意思已经很清楚了：我们不欢迎第三方客户端。

2、[程序员月薪 7 万可落户北京](https://www.zhihu.com/question/269506059)

3月21日，北京市发布《关于优化人才服务促进科技创新推动高精尖产业发展的若干措施》，其中有这样一条内容：

> 在本市行政区域内的高新技术企业、创新型总部企业、新型研发机构等科技创新主体中承担重要工作，近3年每年应税收入超过上一年度全市职工平均工资一定倍数的（企业注册在城六区和北京经济技术开发区的为8倍，注册在本市其他区域的为6倍）。

根据北京市统计局、市人力社保局发布数据，2016年度北京市职工年平均工资为92477元，月平均工资为7706元。而近日某招聘网站新鲜出炉的《2018旺季人才趋势报告》中显示，北京市平均月薪达到10712元。由此估算出月薪至少要 7 万可申请办理人才引进。

3、[Travis-CI 的离奇错误清空生产数据库](https://blog.travis-ci.com/2018-04-03-incident-post-mortem)

Travis-CI 公布了3月13日生产数据库出错的调查报告。一个开发者执行了生产环境的检查以后，在同一个 Session 里面运行测试。由于数据库地址是环境变量给出的，这时 Session 里面的数据库地址的环境变量指向生产环境，导致测试脚本清空了生产环境的数据库。

4、[硅谷房价每个工作日上涨800美元](https://www.bloomberg.com/news/articles/2018-04-09/home-values-are-rising-by-800-a-day-in-san-jose)

根据统计，距离硅谷最近的大城市圣何塞，去年100万美元左右的普通房屋，每个工作日价格上涨798美元，一年上涨了20万美元，是全美房价上涨之冠。亚军是旧金山，每个工作日上涨481美元；季军是西雅图（微软总部所在地），上涨434美元。

## 教程

1、[免费电子书] [《Machine Learning Yearning》](http://www.mlyearning.org/)，by 吴恩达

![](http://www.ruanyifeng.com/blogimg/asset/2018/bg2018042302.png)

吴恩达（Andrew Ng）是斯坦福大学的教授，人工智能领域的权威，曾经担任过百度的首席科学家。

他的新书《Machine Learning Yearning》现在可以[免费订阅](http://www.mlyearning.org/)。今后几个月里面，他每完成一个部分，你就会得到邮件通知，可以立即读到。根据说明，这本书大概100页左右，每章的长度很短，非常容易阅读。内容主要关于如何实现你自己的机器学习项目，重点不是算法，而是如何运用算法到真实项目。

2、[免费视频教程] [《Foundations of Data Science》](https://data.berkeley.edu/education/data-8x)，by 加州大学伯克利分校

![](http://www.ruanyifeng.com/blogimg/asset/2018/bg2018042303.png)


加州大学伯克利分校的视频课程[《Foundations of Data Science》](https://data.berkeley.edu/education/data-8x)（数据科学基础），现在上网了。报名学习是免费的，如果需要证书才收费。

课程分成三个部分，每个部分需要5个星期学习，都由加大的老师亲自教授。整个课程针对初学者，不需要任何统计学或编程的基础。

* 第一部分：[Python 数据处理](https://www.edx.org/course/foundations-data-science-computational-uc-berkeleyx-data8-1x)
* 第二部分：[抽样推断](https://www.edx.org/course/foundations-data-science-inferential-uc-berkeleyx-data8-2x)
* 第三部分：[预测与机器学习](https://www.edx.org/course/foundations-data-science-prediction-uc-berkeleyx-data8-3x)

3、[文章] [Programming Blockchains Step-by-Step](https://github.com/openblockchains/programming-blockchains-step-by-step), by Gerald Bauer

介绍如何使用 Ruby 语言从零开始写一个区块链实现，代码非常好懂，并有各种基础概念的解释。

4、[文章] [Low Level Bit Hacks You Absolutely Must Know](http://www.catonmat.net/blog/low-level-bit-hacks-you-absolutely-must-know/), by Peter Krumins

位运算（bit operation）的用途，有很多例子。

5、[文章] [React - Basic Theoretical Concepts](https://github.com/reactjs/react-basic)

React 官方关于 React 原始设计思想的解释。

6、[图片] [React v16.3 生命周期的示意图](https://github.com/wojtekmaj/react-lifecycle-methods-diagram)

![](http://www.ruanyifeng.com/blogimg/asset/2018/bg2018042304.png)

7、[电子书] [Google 面试自学手册](https://github.com/jwasham/coding-interview-university/blob/master/translations/README-cn.md)

一份爱好者整理的 Google 面试准备指南。

8、[文章] [Chrome DevTools 的一些使用技巧](https://flaviocopes.com/chrome-devtools-tips/#drag-and-drop-in-the-elements-panel)

9、[文章] [Color: From Hexcodes to Eyeballs](http://jamie-wong.com/post/color/)

人眼如何感受到色彩，读懂这篇文章需要一点物理学知识。

## 文摘

1、[一线开发程序员总结出的开发经验](https://cloud.tencent.com/developer/article/1004735)，by 康亮

> 2011年在百度浏览器团队时遇到几件让人影响深刻的事情。 有一次开会，产品拿出 Google 某个产品的 DEMO，里面有一段很酷炫 3D 效果，要求开发加上，只给2天时间，大家目瞪口呆。后续的开发为了赶节奏，导致非常多的 bug，又为了修改 bug，leader 将所有的 bug 按照人员平均分配，导致不同模块间的同学相互修改......实在难以想象。好比让做花卷的厨子，去修改西湖醋鱼的味道。
> 
> 最初的现象是：bug 下降得慢，延伸 bug 反而增加，每个人都累的半死，代码风格极其杂乱，为了赶工导致的临时方案层出不穷。
> 
> 到了中期：人员离职越来也多，代码难以维护，新加的需求与之前的临时方案冲突。
> 
> 到了后期：想做一些修复，想调整架构，又要保证正常运行，其难度好比在一架飞行的飞机上拆换零件。
> 
> 然后我也急忙离职了。。。。实在看不到成功的可能性。

2、[为什么我们不用 Git？](https://sqlite.org/whynotgit.html)，by SQLite

> SQLite 不使用 [Git](https://git-scm.org/) 版本控制系统，而是使用 [Fossil](https://fossil-scm.org/)。Fossil 和 Git 都是区块链式的版本控制系统，都是分布式，都将内容存储为由加密哈希标识的一系列不可变的提交。Git 非常流行，许多开发人员不熟悉其他任何版本管理工具。然而，SQLite 更喜欢Fossil，本文解释为什么。

3、[美国的数据真相](https://mp.weixin.qq.com/s?__biz=MzI2NjA3ODk2MA%3D%3D&from=1084195010&idx=4&mid=2650848195&sn=7399ea1a80effc77cd2f788373b412d4&weiboauthoruid=5493934570&wm=9006_2001)

> 美国人均预期寿命连续两年下降。如果不告诉你国家名字，只是让你猜测的话，你一定会认为，这发生在某个战乱中的国家。不幸的是，这种事情恰恰就发生在美国。
> 
> 2016年，零资产或者负资产家庭已经达到30.4%。也就是说，只要你有一块钱存款而么有负债，即使你是个流浪汉，你也比30%的美国家庭富有。
> 
> 美国人到底有多穷？69%的美国人，存款少于1000美元。好多人说美国人很富有，确实，如果你找到了一个好职业，你的收入会很高很高。但是实际上，绝大多数美国人很穷，只能靠救济和福利过活。一半的美国人，他们的年平均收入低于25000美元。美国平均收入40000多，中位数收入只有25000美元。中位数是什么意思？50%收入高于这个数字，50%收入低于这个数字。

4、[《环球时报》：发展国产芯片 这事不能再拖了](http://finance.sina.com.cn/stock/y/2018-04-18/doc-ifzfkmth6405788.shtml)

> 从现在起，我们可以靠美国芯片活得很好的幻想应该破灭了。中国有组织科技攻关的能力，也有推动国产芯片逐渐替代外来芯片所需要的动员力，最重要的就是决心。
> 
> 特朗普政府在帮助我们下这个决心。如果中国真的转换了思路，也许过多少年之后，我们会感谢美国今天做出的限制决定，庆幸它促使中国早一点恢复了清醒。
> 
> 一旦中国加速研发使用国产芯片的工作全面上路，美国方面的态度也将随之软下来。美国半导体产品还可以进入中国，但到那时主动权将牢牢掌握在我们自己的手里。

## 工具

1、[Spectrum](https://github.com/withspectrum/spectrum)

开源的社区软件，形式非常新颖美观。

2、[jsonstore.io](https://github.com/bluzi/jsonstore)

通过 HTTP Header 读写 JSON 数据的免费 datastore。

3、[flamebearer](https://github.com/mapbox/flamebearer)

Node 应用的火焰图生成工具，用于性能分析。

4、[DNS Performance Test](https://github.com/cleanbrowsing/dnsperftest)

DNS 响应时间的命令行比较脚本。

5、[merge-images](https://github.com/lukechilds/merge-images)

多张图片合成一张图片的浏览器 JS 库，使用了 Canvas。

6、[Tabler](https://github.com/tabler/tabler)

一个基于 Bootstrap4 的面板（dashboard）组件库。

7、[Etherpad](http://etherpad.org/)

老牌的多人实时编辑协同工具。

## 新奇

1、[Braille Neue](http://brailleneue.com/)

![](http://www.ruanyifeng.com/blogimg/asset/2018/bg2018042305.jpg)

![](http://www.ruanyifeng.com/blogimg/asset/2018/bg2018042306.png)

Braille Neue 是布里叶盲文系统与正常字母的结合，无障碍设计的典范，为什么没有人早点想到这个点子呢。

2、[Macbook 一美元改成触摸屏](https://github.com/bijection/sistine)

![](http://www.ruanyifeng.com/blogimg/asset/2018/bg2018042307.jpg)

一个非常牛的项目，作者在 Macbook 的摄像头上面，架了一块镜子。然后，自动捕捉并识别手指的坐标。

3、[Jelly Mario Bros](http://jellymar.io/)

![](http://www.ruanyifeng.com/blogimg/asset/2018/bg2018042308.png)

水母版的《超级马里奥》网页游戏，所有东西都会像水母一样升缩。

__4、小狗 USB__

![](http://www.ruanyifeng.com/blogimg/asset/2018/bg2018042309.jpg)

![](http://www.ruanyifeng.com/blogimg/asset/2018/bg2018042310.jpg)

## 本周金句

人生就像玻璃窗上的苍蝇，前途一片光明，却找不到出路。

## 欢迎订阅

这个专栏会同步更新在我的[个人网站](http://www.ruanyifeng.com/blog)、[微信公众号](http://weixin.sogou.com/weixin?type=1&query=阮一峰的网络日志)和[语雀](https://yuque.com/ruanyf/share/)。

微信搜索"__阮一峰的网络日志__"或者扫描二维码，即可手机订阅。

![](http://www.ruanyifeng.com/blogimg/asset/2018/bg2018042311.jpg)

（完）

