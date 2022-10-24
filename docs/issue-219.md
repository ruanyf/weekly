# 科技爱好者周刊（第 219 期）：如何防止帐号被黑

这里记录每周值得分享的科技内容，周五发布。

本杂志开源（GitHub: [ruanyf/weekly](https://github.com/ruanyf/weekly)），欢迎提交 issue，投稿或推荐科技内容。

周刊讨论区的帖子[《谁在招人？》](https://github.com/ruanyf/weekly/issues/2542)，提供大量程序员就业信息，欢迎访问或发布工作/实习岗位。

## 封面图

![](https://cdn.beekka.com/blogimg/asset/202208/bg2022081706.webp)

“武汉超算中心”使用集装箱搭建，是国内最大的集装箱超算中心，8月15日正式接入“中国算力网”。（[via](http://www.cnhubei.com/content/2022-08/16/content_14982905.html)）

## 本周话题：如何防止帐号被黑

上周有一起安全事件。两家著名的美国互联网公司——[Twillo](https://www.twilio.com/blog/august-2022-social-engineering-attack) 和 [Cloudflare](https://blog.cloudflare.com/2022-07-sms-phishing-attacks/)——被攻击了，前者还被攻破了。

这两家都不是普通公司，技术很强，都采用了“双因素认证”，但还是被有效攻击了。它们事后披露了一些细节，我觉得值得谈一下，聊聊怎么保护帐号安全。

![](https://cdn.beekka.com/blogimg/asset/202208/bg2022081711.webp)

首先，有一点应该是共识：**密码是不安全的，一定要启用双因素认证。**

大部分的互联网密码都已经泄漏了。地下的黑产出售很全的数据库，一查邮箱或手机号，密码就出来了。你不妨认定，自己的密码已经泄漏了。如果为每个网站设置不一样的密码，情况可能会好一点，但也无法保证某个账号就是安全的。

![](https://cdn.beekka.com/blogimg/asset/202208/bg2022081116.webp)

任何一个重要账号，都应该打开“双因素认证”（two factor authentication，简写 2FA），即除了密码，再多一种认证。即使如此，也必须非常小心，因为 **“双因素认证”也可能被破解**。

一种常见的“双因素认证”就是密码 + 短信。每次登录时，除了密码，还会发一个短信验证码。它的风险在于短信是不加密的，而且国内有过不少案例，罪犯拿着伪造的身份证去挂失，办了一个相同号码的 SIM 卡，顺利收到验证码。

另一种新兴的“双因素认证”是密码 + 人脸识别。它的风险在于，国内的很多方案采用身份证照片与人脸比对，这很不安全。已经有新闻报道，[银行的人脸识别被破解](https://finance.sina.com.cn/stock/hyyj/2022-07-18/doc-imizmscv2234144.shtml)，储户的存款被转走。

![](https://cdn.beekka.com/blogimg/asset/202208/bg2022081119.webp)

公认较安全的“双因素认证”是密码 + [TOTP 时间码](https://en.wikipedia.org/wiki/Time-based_one-time_password)。你在手机安装一个专门 App（比如 Google Authenticator 或 Authy），输入网站提供的密钥，就会每30秒生成一个6位时间码。

![](https://cdn.beekka.com/blogimg/asset/202208/bg2022081118.webp)

但是，上周的安全事件，恰恰就是 TOTP 时间码被攻破了。下面就来说说，这是怎么发生的。

事情的起因是，Twilio 和 Cloudflare 的员工，在下班后或者休息日收到了一条手机短信。下面就是两家公司公布的短信截图。

![](https://cdn.beekka.com/blogimg/asset/202208/bg2022081204.webp)

![](https://cdn.beekka.com/blogimg/asset/202208/bg2022081205.webp)

大意是，公司日程有调整或者你的登录信息过期了，请点击链接，到后台查看。它给出了一个公司名称加“sso”或者“okta”这样的钓鱼域名，警惕性不高的员工就会点击。

读者可能会问，攻击者如何得知员工的手机号码。这在美国不是难事，LinkedIn 网站上就往往可以查到。

员工点击链接以后，就会进入钓鱼网站（下图），跟真正的登陆页一模一样。只要填入用户名和密码，它们就立刻泄漏，脚本自动把它们发送到服务器。

![](https://cdn.beekka.com/blogimg/asset/202208/bg2022081206.webp)

但是，这两家公司都开通了“双因素认证”，光有密码还进不去后台，所以钓鱼网站会把你引导到 TOTP 时间码的页面。

这时，只要你输入了时间码，它就自动发送给攻击者。由于时间码的有效期只有30秒，这次攻击最绝的地方在于，攻击者是实时攻击，只要一拿到时间码，就立刻在真正的登录页输入，从而进入后台。

可以这样说，大部分公司的双因素认证，都会被这种方式攻破。但是，Cloudflare 这一次没有被攻破，原因是他们的后台没有采用时间码，而是采用了物理密钥（下图）。只有把物理密钥插入计算机，才能登陆后台。攻击者拿不到物理密钥，自然就无法攻破。

![](https://cdn.beekka.com/blogimg/asset/202208/bg2022081207.webp)

所以，这个事件的教训就是，**目前最安全的认证方法应该是密码 + 物理密钥**。事实上，从很早以前，银行就给客户发物理密钥，进行大额转账。如果你有条件，可以考虑使用，很多大网站都已经支持物理密码，比如 GitHub（下图）。

![](https://cdn.beekka.com/blogimg/asset/202208/bg2022081801.webp)

问题在于，物理密钥的价格较高，便宜的也要一两百元人民币，普通用户不可能购买。好在 Web Authentication 技术正在推广，它允许把手机当作物理密钥，或者网站可以调用本机的指纹识别（或人脸识别)进行认证。

对于大多数人来说，目前阶段如果没有物理密钥，保护账户安全的最佳实践无非就是这么几点：坚持使用双因素认证，不同网站使用不同密码，不在可疑网址输入密码。

## 微服务框架 CloudWeGo

大家知道吗，字节系应用的后台框架是开源的。去年9月，字节开源了微服务框架 [CloudWeGo](https://www.cloudwego.io/zh/)，包含了主要的一些自研工具，用来搭建企业级云原生微服务。

![](https://cdn.beekka.com/blogimg/asset/202208/bg2022081701.webp)

这个框架现在支持了[10万+的字节内部微服务](https://segmentfault.com/a/1190000042226107)，以及1000万的容器实例。而且，开源框架跟内部使用的是同一套代码，统一迭代，在 GitHub 得到了9000+颗星。

开源一周年之际，CloudWeGo 团队将在[字节跳动技术沙龙](https://www.bagevent.com/event/8261894?bag_track=001)，分享字节的后台架构（比如[飞书的架构](https://segmentfault.com/a/1190000042187351)），以及如何快速搭建企业级微服务。

![](https://cdn.beekka.com/blogimg/asset/202208/bg2022081608.webp)

时间是8月27日（下周六）下午2点，采用线上直播形式。感兴趣的同学，点击[这里](https://www.bagevent.com/event/8261894?bag_track=001)或者扫描二维码，了解活动详情并报名。会务组还准备了海量福利，给大家抽奖。

## 科技动态

1、[手术机器人](https://spectrum.ieee.org/robotic-surgery)

![](https://cdn.beekka.com/blogimg/asset/202207/bg2022070602.webp)

美国机器人公司 Intuitive Surgical 推出的手术机器人，已经进入了美国所有顶级医院。

![](https://cdn.beekka.com/blogimg/asset/202207/bg2022070603.webp)

这种机器人有四条机器手臂，合作完成一台手术：有的手臂用来切开伤口和缝合，有的用来体内操作，还有一条专门用作摄像头。

当它进行手术时，实习医生就坐在一旁当观众，看着它完成手术。

2、[手机保管盒](https://www.163.com/dy/article/H62O5V64053469LG.html)

很多人觉得，手机的出现使得大家越来越难集中注意力。于是，市场上就诞生了手机保管箱、手机定时盒、手机定时锁这样的产品。

![](https://cdn.beekka.com/blogimg/asset/202208/bg2022081401.webp)

![](https://cdn.beekka.com/blogimg/asset/202208/bg2022081402.webp)

它们被称为“自律神器”，手机放在里面，设好定时，就无法取出了，只有时间到了，才能取出。

![](https://cdn.beekka.com/blogimg/asset/202208/bg2022081403.webp)

有人认为，这种产品只是心理安慰，如果做不到自律，它不会有太大帮助。但是，另一些用户认为，确实有助于克服手机上瘾。

3、[人造角膜](https://www.8world.com/world/bioengineered-cornea-can-restore-sight-to-the-blind-and-visually-impaired-1888616)

大约5%的盲人因为角膜疾病而丧失视力，只要角膜移植就可以恢复视力。但是，角膜只有遗体捐赠才能获得，从而使得很多盲人无法做角膜手术。

![](https://cdn.beekka.com/blogimg/asset/202208/bg2022081601.webp)

最近，瑞典林雪平大学发表论文，他们从猪皮提取了胶原蛋白，制造了人造角膜，已经在印度和伊朗植入了20名盲人。

24个月后评估，14个人恢复了视力，剩下6个人从严重视力障碍转变为中度或轻度视力障碍。

![](https://cdn.beekka.com/blogimg/asset/202208/bg2022081602.webp)

![](https://cdn.beekka.com/blogimg/asset/202208/bg2022081603.webp)

研究团队的下一个目标，是得到欧洲和美国的批准，在那里进行100人的临床试验。如果人造角膜最终成功，对很多失明者将是极大的好消息。

4、[集中供冷](https://www.time-weekly.com/post/294534)

北方有集中供暖，广州的珠江新城正在尝试集中供冷。每户人家不用装空调，小区的供冷中心统一提供冷气。

![](https://cdn.beekka.com/blogimg/asset/202208/bg2022081709.webp)

这样不仅节省能源，而且还可以降低供冷费用。它采用冰蓄冷，夜间用电低谷期进行蓄电制冰，相当于储能；白天的用电高峰期，再把夜间制成的冰块转化为冷冻水输送进管道，向用户输送冷量。

![](https://cdn.beekka.com/blogimg/asset/202208/bg2022081710.webp)

但是，它要占用一块面积不小的土地，在大都市会有高昂的土地费用，导致供冷价格实际上并不低，这是推广的最大难点。

5、[沙子电池](https://www.energy-storage.news/worlds-first-large-scale-sand-battery-goes-online-in-finland/)

芬兰建造了世界第一个商业化的沙基热能储存系统，俗称“沙子电池”，使用加热的沙子储存能量。

![](https://cdn.beekka.com/blogimg/asset/202207/bg2022070704.webp)

它是一个 4 × 7 米的钢筒，里面放了数百吨沙子，平时不用的时候，可以加热到 500-600 摄氏度的温度，并保持不变。

等到当地开始供热，这些沙子就用来提供热量。据说这个筒储存的能量，相当于8000度电的加热效果。它的最大优点就是便宜，成本低廉，而且容易制造。

## 文章

1、[无人驾驶安全员的一天](https://oversea.huanqiu.com/article/4909nNA0m09)（中文）

去年，百度获得许可，在首钢园开始运营无人驾驶出租车。每辆车配备一个安全员，坐在驾驶位或副驾驶位，监督车辆行驶。

![](https://cdn.beekka.com/blogimg/asset/202208/bg2022081605.webp)

本文是对一位安全员的采访，他整天坐在车上，看着车自动开是什么感受。有一段很有趣，他说坐惯了无人驾驶以后，回到自己车上，就很难适应了。这篇是节选的中文翻译，内容很少，可以参考[英文原版](https://www.technologyreview.com/2022/07/27/1056472/life-of-chinese-robotaxi-driver/)。

2、[中国的木拱桥](https://mp.weixin.qq.com/s/Zc47jf3OCYjjdgJ2qpu1rg)（中文）

![](https://cdn.beekka.com/blogimg/asset/202208/bg2022081707.webp)

中国古代除了石拱桥，还有木拱桥，也就是用木头做的拱桥。前不久烧毁的福建万安桥，就是一座木拱桥。

3、[灵隐寺“智慧寺院管理系统”](https://mp.weixin.qq.com/s/xeNhTRQIY_EQheJyRVTr6Q)（中文）

![](https://cdn.beekka.com/blogimg/asset/202208/bg2022081816.webp)

杭州灵隐寺“智慧寺院管理系统”近期正式上线，网上流传一张照片，一位僧人正在讲解该系统。

4、[Bun：Node.js 的替代品](https://semaphoreci.com/blog/javascript-bun#what-is-bun)（英文）

![](https://cdn.beekka.com/blogimg/asset/202208/bg2022081504.webp)

Bun 是 Zig 语言写的 JavaScript 服务器运行环境，目标是兼容 Node.js，并且将打包器、转码器、包管理都包含在内。本文是对它的测评，最终评价很不错。

5、[停止在代码注释中使用 TODO](https://goldin.io/blog/stop-using-todo)（英文）

很多程序员习惯在代码注释写 TODO，表示待完成的任务。作者建议不要再写 TODO，而用具体的任务替代，比如需要添加文档写“DOCME”，需要添加测试写“TESTME”。

6、[小米 12s Ultra 与 iPhone 13 Pro Max 的摄像头对比](https://www.xda-developers.com/xiaomi-12s-ultra-vs-apple-iphone-13-pro-max-camera-shootout-comparison/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202208/bg2022081404.webp)

小米最新发布的 12s Ultra 手机，有着1英寸传感器，比 iPhone 13 Pro Max 大了许多。XDA 论坛对两者的拍照和视频能力，进行了对比。

7、[OpenSSL 与 OpenSSH 的区别](https://www.cnblogs.com/foohack/p/4103212.html)（中文）

OpenSSL 与 OpenSSH 都是开源软件，它们的区别是：前者是 C 语言函数库，实现了 SSL 加密协议；后者是加密 Shell 的开源实现，提供了加密登录的客户端和服务端，它依赖于 OpenSSL。

8、[使用人工智能解释代码](https://simonwillison.net/2022/Jul/9/gpt-3-explain-code/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202207/bg2022070917.webp)

作者将代码提交给人工智能模型 GPT-3，让模型说出这段代码是什么意思，结果令人震惊。

## 工具

1、[Maccy](https://maccy.app/)

![](https://cdn.beekka.com/blogimg/asset/202206/bg2022062406.webp)

一个 MacOS 系统的开源软件，可以保存系统剪贴版的历史，查看每一次复制粘贴的内容。

2、[Nude UI](https://nudeui.com/)

![](https://cdn.beekka.com/blogimg/asset/202208/bg2022081301.webp)

著名前端开发者 Lea Verou 做的 Web Component 组件库，目前只有五六个表单组件，都是轻量级组件，非常易用，效果不错。

3、[卡通猫生成器](https://uchinoko-maker.jp/)

![](https://cdn.beekka.com/blogimg/asset/202208/bg2022081309.webp)

一个网页小工具，可以生成卡通猫图片，猫的每个部分都可以定制。

4、[Glances](https://nicolargo.github.io/glances/)

![](https://cdn.beekka.com/blogimg/asset/202206/bg2022062601.webp)

一个 Python 写的系统监控工具，最大特点就是跨平台，Linux/Windows/Mac 都能用。

5、[XLite](https://github.com/x2bool/xlite)

这个工具可以将 Excel 表格文件导入 SQLite，使用 SQL 进行查询。

6、[Jina](https://github.com/jina-ai/jina)

![](https://cdn.beekka.com/blogimg/asset/202208/bg2022081812.webp)

一个基于 Python 的框架，用于构建神经搜索系统，针对图像、音频、视频等进行搜索，比如[口红搜索](https://github.com/lhr0909/lipstick-db)（寻找适合某张人脸照片的口红）。（[@Guanngxu](https://github.com/ruanyf/weekly/issues/2565) 投稿）

7、[ITraffic-monitor-for-mac](https://github.com/foamzou/ITraffic-monitor-for-mac)

![](https://cdn.beekka.com/blogimg/asset/202208/bg2022081813.webp)

实时显示 MacOS 每个进程的网络速率，适配明暗两个主题。（[@foamzou](https://github.com/ruanyf/weekly/issues/2568) 投稿）

8、[diskusage](https://github.com/chenquan/diskusage)

![](https://cdn.beekka.com/blogimg/asset/202208/bg2022081814.webp)

一个显示磁盘占用情况的命令行工具。虽然 Linux 已经有了 ncdu，但是这个工具是用 Go 写的，可以跨平台（Linux、Mac & Windows）。（[@chenquan](https://github.com/ruanyf/weekly/issues/2567) 投稿）

9、[GitJournal](https://gitjournal.io/)

![](https://cdn.beekka.com/blogimg/asset/202206/bg2022062906.webp)

一个手机的笔记 App，支持用 Markdown 做笔记，推送到远程 Git 仓库。它的安卓 App 是免费的，iOS App 是收费的。

10、[Unpaywall](https://unpaywall.org/)

![](https://cdn.beekka.com/blogimg/asset/202205/bg2022050706.webp)

一个浏览器插件，在各种论文数据库的页面上，添加下载按钮。周刊此前介绍过同类插件，这个看上去更正规一些。

另有一个论文数据库 [OA.mg](https://oa.mg/)，用来查找论文。

![](https://cdn.beekka.com/blogimg/asset/202205/bg2022050705.webp)

## 活动

1、[掘金会员](https://juejin.cn/vip?utm_source=ruanyifeng0819&utm_medium=gzh&utm_campaign=202207vip)

[稀土掘金社区](https://juejin.cn/)一直是国内非常受欢迎的技术社区，背后有字节的支持，网站上有大量学习资源，尤其是前端内容。

最近，他们整合了资源，推出了“掘金会员”，加入就能解锁90%的课程和小册，享受简历优化和面试指导，还有专属的会员群和客服。

![](https://cdn.beekka.com/blogimg/asset/202208/bg2022081811.webp)

现在有优惠活动，**限时五折**就能[加入](https://juejin.cn/vip?utm_source=ruanyifeng0819&utm_medium=gzh&utm_campaign=202207vip)，爱学习的同学可以考虑，充分使用掘金社区，提升自己的竞争力。已经参加预购的同学，别忘了补款。

## 资源

1、[通过构建博客生成器学习 Haskell](https://lhbg-book.link/)

一本免费阅读的 Haskell 英文教程，从零教起，对初学者很友好。

2、[oPhysics](https://ophysics.com/index.html)

![](https://cdn.beekka.com/blogimg/asset/202208/bg2022081815.webp)

这个网站收集可以网页交互的物理学演示，有几十个作品。实时调节参数，就能看到结果。（[@meq1986](https://github.com/ruanyf/weekly/issues/2570) 投稿）

3、[treevis.net](https://treevis.net/)

![](https://cdn.beekka.com/blogimg/asset/202206/bg2022060911.webp)

这个网站收集了300种数据可视化案例，可以当作自己选择可视化形式时的灵感。

4、[Unix 窗口管理器清单](https://www.gilesorr.com/wm/table.html)

![](https://cdn.beekka.com/blogimg/asset/202206/bg2022061101.webp)

这个网站收集近200种 Unix/Linux 系统的窗口管理器。如果你不喜欢桌面环境自带的窗口管理器，可以换一个。

5、[理解量子技术](https://www.oezratty.net/wordpress/2021/understanding-quantum-technologies-2021/)（Understanding Quantum Technologies，2021版）

![](https://cdn.beekka.com/blogimg/asset/202206/bg2022062001.webp)

一本免费的英文电子书，向初学者介绍量子计算各方面的基础知识，带有彩色插图，厚达800多页。

## 图片

1、[饥饿石](https://en.wikipedia.org/wiki/Hunger_stone)

今年夏天，欧洲发生了极端高温，很多河道都水位大降。

流经德国和捷克的易北河，水位下降以后，露出了河底的“饥饿石”。

![](https://cdn.beekka.com/blogimg/asset/202208/bg2022081604.webp)

所谓“饥饿石”，就是15世纪到19世纪发生干旱时，当时的人们在这些石头上刻了字，提醒后人，如果再看到这些石头露出水面，就意味着会发生饥饿。

2、[像素动物](https://kottke.org/22/03/pixel-birds-and-other-animals)

一个日本艺术家贴出了，他绘制的大量像素动物，非常有趣。

![](https://cdn.beekka.com/blogimg/asset/202203/bg2022033105.webp)

![](https://cdn.beekka.com/blogimg/asset/202203/bg2022033106.webp)

![](https://cdn.beekka.com/blogimg/asset/202203/bg2022033107.webp)

3、[松鼠散热](https://www.washingtonpost.com/science/2022/08/12/splooting-squirrel-meaning-definition-new-york/)

游客最近在纽约公园里面，拍到松鼠贴着地面趴着的照片。

![](https://cdn.beekka.com/blogimg/asset/202208/bg2022081302.webp)

公园解释，这并不是松鼠失常或受伤，而是纽约天气太热，松鼠在树荫下的地面上伸展身体，扩大表面积，有利于散热。

![](https://cdn.beekka.com/blogimg/asset/202208/bg2022081303.webp)

## 纽约托马斯街33号

原文网址：[theintercept.com](https://theintercept.com/2016/11/16/the-nsas-spy-hub-in-new-york-hidden-in-plain-sight/)

上个世纪60年代，美国国家安全局决定在纽约市中心建造一座能够承受原子弹爆炸的摩天大楼。

这座楼高达170米，有29层和三层地下室，但没有一扇窗户。如果发生灾难，它储存的食物足够1500人维持两周。

![](https://cdn.beekka.com/blogimg/asset/202112/bg2021122205.webp)

它的主要目的，并不是在核战争中保护人类免受核辐射，而是保护计算机和通信系统在核爆后还能正常工作。

建成后，它成了美国最重要的电信枢纽之一，也是世界上最大的长途电话处理中心，现在交给 AT&T 的子公司纽约电话公司运营，至少表面上如此。它的内部情况和运营细节从来没有曝光过。

![](https://cdn.beekka.com/blogimg/asset/202112/bg2021122207.webp)

它在1969年开工建设，1974年竣工，位于曼哈顿下城的心脏地带，地址是托马斯街33号。

它是一座巨大的灰色混凝土塔，没有窗户，也没有外部的灯光照明。到了晚上，就变成一个巨大的黑影，只有硕大的方形通风口发出独特而沉闷的嗡嗡声。

![](https://cdn.beekka.com/blogimg/asset/202112/bg2021122206.webp)

上图中间不亮灯的大楼，就是托马斯街33号。

除了通风口，大楼唯一的口子就是底层的出入口。这就是外界知道的关于这栋楼的一切。

![](https://cdn.beekka.com/blogimg/asset/202112/bg2021122208.webp)

![](https://cdn.beekka.com/blogimg/asset/202112/bg2021122209.webp)

## 言论

1、

一个好的领导（或者产品经理），应该具备五项技能：SQL、Excel、简洁写作、讲故事、区分优先级。

-- [《前5位的产品和管理技能》](https://www.craigkerstiens.com/2021/04/27/top-5-product-and-management-skills-sql-excel-clear-communication-story-prioritization/)

2、

SSR（服务端渲染）是一个新名词，但是30年前，人们就在服务端使用 PHP 进行“SSR”了，并且积累了这方面的很多知识。

可是 PHP 的这种做法不再时髦了，哪怕它跟现在的做法并没有本质区别，主要原因大概是它不是在最近36个月内发明的。

-- [Hacker News 读者](https://news.ycombinator.com/item?id=31723278)

3、

Arch Linux 的优点和缺点都是它的滚动更新机制。一方面，你总是能让系统保持最新版本，另一方面，你无法轻易地让某个软件保持特定版本，所以不适合用作生产环境服务器。

--[《Arch Linux 为何存在》](https://heyburns2.medium.com/why-does-arch-linux-exist-f865a79a0721)

4、

如果你是一个工程师，那么在成为资深工程师之前，永远不要担任管理职务。

-- [《工程师/经理的钟摆焦虑》](https://charity.wtf/2022/03/24/twin-anxieties-of-the-engineer-manager-pendulum/)

5、

Windows 95 安装文件的体积是 19 MB，到了现在，一张网页可能就不止这个大小。

-- [《不同的 Windows 体积有多大？》](https://www.neowin.net/forum/topic/1060820-how-big-were-the-different-windows-versions-95-19-mb/)

## 历史上的本周

2021年（第 171 期）：[云服务流量有多贵？](https://www.ruanyifeng.com/blog/2021/08/weekly-issue-171.html)

2020年（第 120 期）：[只有开放才能打败封锁](https://www.ruanyifeng.com/blog/2020/08/weekly-issue-120.html)

2019年（第 69 期）：[做得好 vs 做得快](https://www.ruanyifeng.com/blog/2019/08/weekly-issue-69.html)

2018年（第 18 期）：[无人机攻击，难以防范](https://www.ruanyifeng.com/blog/2018/08/weekly-issue-18.html)

## 鸣谢

国产软件 [FlowUs](https://flowus.cn?promotionChannel=GW_RYF_01) 提供个人专栏服务（查看[周刊专栏](https://ruanyf-weekly.flowus.cn/?code=FLOWUS&promotionChannel=WX_RYF_00)），集成了“文档+表格+网盘”，适合知识库、数据管理、文件存储多种用途。

![](https://cdn.beekka.com/blogimg/asset/202207/bg2022072108.webp)

（完）

