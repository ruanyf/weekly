# 每周分享第 40 期

这里记录过去一周，我看到的值得分享的东西，每周五发布。

欢迎投稿，或推荐你自己的项目，请前往 GitHub 的 [ruanyf/weekly](https://github.com/ruanyf/weekly) 提交 issue。

![](https://www.wangbase.com/blogimg/asset/201901/bg2019011801.jpg)

我知道一个朋友，他很喜欢咖啡。

但是，他喜欢的不是喝咖啡，而是制作咖啡。选购咖啡豆、研磨、泡制、萃取，他就是喜欢自己手动完成整个过程。他家里有很多咖啡器具，为了冲制一小杯咖啡，每天都乐此不疲，从头到尾制作一遍，看着咖啡豆变成一杯热腾腾的饮料，至少需要20分钟。

他这样的咖啡爱好者似乎有一个共识：最好的咖啡一定不是电动机器制作的，而是手工冲制出来的。在他们看来，哪怕原料一样，电动咖啡机做出来的咖啡，就是没有手工咖啡品质好。确实，好像没有一家咖啡店宣传“本店咖啡是机器泡制的”，反而好一点咖啡店都标榜自己是手工咖啡。

我猜想，他迷上制作咖啡，其实不完全因为咖啡本身，还有那种把玩机械装置的奇妙感觉，甚至里面包含的仪式感。机械其实是很有意思的东西，各种零件拼装在一起以后，整个机器就会动起来，仿佛自己就有了生命。

电子时代来临以后，机械就有点没落了，电子装置开始取代机械装置。只有很少的领域，机械设备还胜过电子设备，并且消费者肯买单。手工咖啡也许就是其中最典型的一个例子。

## 新闻

1、[最大的质数](https://www.npr.org/2018/12/21/679207604/the-world-has-a-new-largest-known-prime-number)

![](https://www.wangbase.com/blogimg/asset/201901/bg2019011802.jpg)

17世纪时，法国修道士梅森（Marin Mersenne）提出了一个质数计算公式：2^n - 1，称为梅森公式。符合该公式的质数，就称为梅森质数。比如，2的3次方等于8，8减1等于7，7就是梅森质数。

1996年，有人发起了 GIMPS 项目，世界各地的人们下载软件，在自己的计算机上通过梅森公式，寻找新的质数。2018年12月7日，佛罗里达州的一台计算机，发现了世界最大的质数。这个质数有24,862,048位，对应的梅森公式里面的 n 是 82,589,933。之前的世界记录是一年前该项目在田纳西州发现的，比现在的世界记录小了150多亿。你可以在官网下载这个质数，它太长了必须打包成 [zip 文件](https://www.mersenne.org/primes/digits/M82589933.zip)下载。

2、[食品味道不是专利](https://www.bbc.com/news/world-europe-46193818)

![](https://www.wangbase.com/blogimg/asset/201901/bg2019011803.jpg)

欧洲一家奶酪公司起诉另一家奶酪公司，声称后者的奶酪口味跟自己太像，侵犯了版权。法院最近裁决，食物的味道不受版权保护。

法院认为，食品的味道是主观的和可变的，无法用精确和客观的方式来识别，因为不属于发明创造，所以不适用版权法律。

3、[长波电台的授时服务](https://www.voanews.com/a/time-may-be-running-out-for-millions-of-clocks/4554376.html)

![](https://www.wangbase.com/blogimg/asset/201901/bg2019011804.jpg)

美国政府宣布，打算关闭三个 60KHz 的长波电台，两个在科罗拉多州，一个在夏威夷州。上图为发送长波信号的天线。

由于这些电台发送的无线电波用于授时，很多人担心，这会影响到许多电子设备，它们通过无线电波获得当前时间。另外，这三个电台每隔2分钟，发送了一个440赫兹（标准音高）的信号，用来给乐器校准音高。

4、[机器裁判](https://spectrum.ieee.org/tech-talk/computing/software/fujitsu-plans-to-support-professional-judges-with-lidar-and-ai-at-gymnastics-meets)

![](https://www.wangbase.com/blogimg/asset/201901/bg2019011805.jpg)

日本富士通公司使用激光雷达和人工智能软件，开发了一套体操的裁判系统，用来取代人工裁判。

体操有大量的翻转和跳跃，还有很多细节，比如膝盖和肘部弯曲的角度。裁判按照自己的判断打分，常常引起争议。国际体操协会已同意将这套激光雷达系统纳入2019年世界锦标赛，以帮助裁判评估运动员的表现，同时计划到2020年实现全面自动化评分。

![](https://www.wangbase.com/blogimg/asset/201901/bg2019011806.jpg)

这套系统通过激光雷达的反射信号，捕捉运动员的身体运动，在屏幕上显示体操运动员身体轮廓的三维图像。然后使用软件，找出各种关节（肘部，膝盖和肩部），这样就可以判断谁旋转的角度更大、难度更高。

5、[气候变暖已经无法阻止](https://www.theguardian.com/environment/2018/dec/02/world-verge-climate-catastophe)

![](https://www.wangbase.com/blogimg/asset/201901/bg2019011807.jpg)

2018年的联合国气候大会认为，气候变暖可能已经不可逆转了。我们无法将全球气温上升控制在1.5摄氏度以下，海水上升、珊瑚礁毁灭、沙漠扩散、冰川融化都无法避免了。

科学家描述2100年时，平均气温将比现在高3~5度，海平面上升0.74米至1.8米，足以淹没印度洋岛国，很多人口需要从低洼城市（比如珠江三角洲）搬迁（参见上面的想象图）。现在的地球人口总数是70亿，2100年可能达到110亿，随着人口增多，地球的生存环境将会变得更加恶劣。

6、[穿越南极大陆](https://www.wweek.com/news/2018/12/26/portland-man-becomes-the-first-person-to-cross-antarctica-without-assistance/)

![](https://www.wangbase.com/blogimg/asset/201901/bg2019011808.jpg)

33岁的美国人科林·奥布拉迪（Colin O&#x27;Brady）成为历史上第一个自力穿越南极大陆的人。他没有借助任何外力，比如机器、雪橇犬、风力，所有装备都放在一个雪橇上，重达170公斤。

他在2018年11月出发，一共走了54天，总长度1482公里。

7、[瞳孔里的面孔](http://www.kurzweilai.net/reflected-hidden-faces-in-photographs-revealed-in-pupil)

![](https://www.wangbase.com/blogimg/asset/201901/bg2019011809.jpg)

现在的很多手机摄像头，能拍出4000万像素的图片。这么高的分辨率，可以从照片里面人物的瞳孔，提取出该人看到的人脸。

英国一所大学的研究人员，最近就从照片瞳孔里面恢复了旁观者的图像。尽管分辨率低（全脸区域平均为322像素），但如果是熟人，就可以90%的成功率识别出这些图像到底是谁。研究人员提醒，不要轻易将高清晰度照片上传到公开的社交网站。

8、[智能校服](https://wallstreetcn.com/articles/3459044)

![](https://www.wangbase.com/blogimg/asset/201901/bg2019011810.jpg)

[《环球时报》英文版](http://www.globaltimes.cn/content/1132856.shtml)12月20日报道，贵州仁怀市第十一中学于2016年秋季开始使用“智能校服”，这款智能校服由贵州冠宇科技有限公司开发，其肩部位置植入了两块追踪芯片，可以实时定位到学生的位置。目前该所学校已有超过800名学生穿着这款智能校服。

校长表示，学校方面不会主动追踪学生的校外动态，只有在学生失踪或者逃学的时候，才会使用校服来进行协助定位。他还表示，在引入智能校服以后，学生的出勤率有显著提升。

贵州冠宇科技公司表示，如果穿着智能校服的学生未经许可走出学校，就会激活自动语音报警器。通过安装在学校门口的面部识别设备的帮助，如果学生更换他们的制服，警报也会响起。

9、[欧盟资助开源软件](https://www.zdnet.com/article/eu-to-fund-bug-bounty-programs-for-14-open-source-projects-starting-january-2019/)

很多开源项目都靠志愿者的奉献，并没有经费来源。现在，为了提高开源软件的安全性，欧盟宣布为14个开源项目的漏洞提供赏金计划。如果你发现了这些软件的漏洞，欧盟官方会向你支付奖金。每个项目的奖金总额在3万～9万欧元。

这14个开源项目如下：7-zip，Apache Kafka，Apache Tomcat，Digital Signature Services (DSS)，Drupal，Filezilla， FLUX TL，the GNU C Library (glibc)，KeePass，midPoint，Notepad++，PuTTY，the Symfony PHP framework，VLC Media Player，WSO2。

10、__一句话新闻__

* [英国](https://www.theguardian.com/media/2018/aug/02/fifth-of-britons-feel-stressed-if-they-cant-access-internet-ofcom-report)一项统计发现，英国人醒着的时候，平均12分钟查看一次手机，即一小时会主动看5次手机。
    
* [视频节目网站 Netflix](https://qz.com/1505030/keeping-up-with-netflix-originals-is-basically-a-part-time-job-now/) 2018年的自制节目接近9万分钟（1500小时），其中电视剧58,000分钟，电影8500分钟，其他是纪录片、儿童节目等。
    
* [加州法院](https://www.forbes.com/sites/thomasbrewster/2019/01/14/feds-cant-force-you-to-unlock-your-iphone-with-finger-or-face-judge-rules/#58b1c02442b7)判决，美国警察不能强迫人们用手指或者脸部解锁手机。
    
* [美国工人](https://howmuch.net/articles/how-much-americans-make-in-wages)的近一半，2017年的税后收入不到3万美元。

## 教程

1、[Python 的 Dict 数据结构的实现](https://just-taking-a-ride.com/inside_python_dict/chapter1.html)（英文）

本文介绍 Dict 结构的实现原理，从最简单的哈希数组的实现讲起。

2、[开发不需要“编译”的 WebApp](https://juejin.im/post/5bdfaed0e51d4505086fa4cd)（中文）

作者介绍如何使用 Web Components 技术开发一个网页音乐播放器。（@[mantou132](https://github.com/ruanyf/weekly/issues/186) 投稿）

3、[什么是真正的程序员](https://www.cnblogs.com/xueweihan/p/5220513.html)（中文）

本文是一篇译文，作者仿照《小王子》中的情节，通过小 printf 遇见的不同类型的程序员，最后悟出什么才是真正的程序员！（@[LanjianNUll](https://github.com/ruanyf/weekly/issues/185) 投稿）

4、[2018年最佳笔记本电脑](https://www.techradar.com/news/mobile-computing/laptops/best-laptops-1304361)（英文）

这个网站评选了2018年最好的10款笔记本电脑。

5、[使用 Docker 部署React](https://medium.com/@manuel.pineault/deploying-reactjs-with-docker-ac16728c0896)（英文）

本文介绍如何制作 React 应用的 Docker 容器，并将其部署到服务器。

6、[FizzBuzz 的10种语言解答](http://iolivia.me/posts/fizzbuzz-in-10-languages/)（英文）

FizzBuzz 是考验编程初学者的经典题目，本文用10种语言写出答案，比较各种语言的不同。

7、[去瑞典当工程师，是否值得？](http://hongchao.me/living-and-working-in-sweden-as-engineers/)（英文）

一个中国开发者移居到瑞典当工程师。十年之后，他对自己这个决定的看法，留在国内好，还是去瑞典好？

8、[电话键盘与计算器键盘为什么不同？](https://thenextweb.com/syndication/2018/12/31/heres-why-telephones-and-calculators-use-different-numeric-keypads/)（英文）

![](https://www.wangbase.com/blogimg/asset/201901/bg2019011811.jpg)

左侧是电话的拨号键盘，右侧是计算机的输入键盘，它们的排列方式为何不同？

9、[我如何搭建家庭机房](https://blog.networkprofile.org/6-year-homelab-history-in-pictures/)（英文）

![](https://www.wangbase.com/blogimg/asset/201901/bg2019011812.jpg)

作者回顾了六年来自己在家里搭建机房的过程，有大量图片。

10、[现在最流行的网站技术栈是什么？](https://news.ycombinator.com/item?id=18829557)（英文）

这是一个论坛的讨论帖，有人问这个问题，下面一堆回答，流行的技术基本上都提到了。

## 资源

1、[粉碎棱镜](https://prism-break.org/zh-CN/all/)

该网站收集不对用户进行监控的开源桌面软件。（@[Ynjxsjmh](https://github.com/ruanyf/weekly/issues/151) 投稿）

2、[Better Dev 周刊](https://betterdev.link/)

每周一期的开发者周刊（英文）。

3、[3Blue1Brown 视频的中文官方账号](https://space.bilibili.com/88461692/video)（视频）

3Blue1Brown 是著名的数学科普视频制作者。（@[guerbai](https://github.com/ruanyf/weekly/issues/156) 投稿）

4、[《几何原本》在线版](https://www.c82.net/euclid/)

![](https://www.wangbase.com/blogimg/asset/201901/bg2019011813.jpg)

在线还原1847年的欧几里得《几何原本》的彩色版本。（@[arbeitandy](https://github.com/ruanyf/weekly/issues/165) 投稿）

5、[页面加载动画](https://medium.com/@ann.green/loading-indicators-e9d9ac9680b)

这篇文章收集了近20个加载页面的优秀动画效果。

6、[12 款助你学编程的免费游戏](https://zhuanlan.zhihu.com/p/23936161)

本文中，我们评选出12个热门网站，你可以通过玩游戏学习编程。（@[Ynjxsjmh](https://github.com/ruanyf/weekly/issues/117#issuecomment-448841120) 投稿）

7、[Python 算法与数据结构](http://interactivepython.org/runestone/static/pythonds/index.html)（第二版）

![](https://www.wangbase.com/blogimg/asset/201901/bg2019011814.jpg)

开源教程《Problem Solving with Algorithms and Data Structures Using Python》。网上有网友翻译的[中文版](https://github.com/facert/python-data-structure-cn)。

## 工具

1、[asciinema](https://asciinema.org/)

一个录制、分享命令行操作的工具，支持Linux, macOS（@[kt286](https://github.com/ruanyf/weekly/issues/137) 投稿）

2、[C4](https://chai2010.cn/awesome-wasm-zh/examples/c4/)

一个在浏览器运行的 C 语言运行时，功能较为简单。（@[chai2010](https://github.com/ruanyf/weekly/issues/142) 投稿）

3、[Steward](https://github.com/solobat/Steward)

![](https://www.wangbase.com/blogimg/asset/201901/bg2019011815.jpg)

一个类似 Alfred 的浏览器内的命令起动器，支持 Chrome / Firefox 两种浏览器。（@[solobat](https://github.com/ruanyf/weekly/issues/134) 投稿）

4、[Debucsser](https://github.com/lucagez/Debucsser)

![](https://www.wangbase.com/blogimg/asset/201901/bg2019011816.jpg)

一个用于 CSS 的调试库，鼠标悬浮的时候，网页会显示区块的 CSS 信息。

5、[Comixify](https://comixify.ii.pw.edu.pl/)

![](https://www.wangbase.com/blogimg/asset/201901/bg2019011817.jpg)

一个波兰团队做了非常好玩的工具，可以把视频自动转成漫画，上图是他们提供的 demo，效果很棒。

6、[Command-Cache](https://github.com/SkrewEverything/Command-Cache)

![](https://www.wangbase.com/blogimg/asset/201901/bg2019011818.jpg)

一个桌面软件，可以搜索命令行的操作历史，只在 Mac 和 Linux 上可用。

7、[keyzen](https://wwwtyro.github.io/keyzen/)

测试打字速度的工具。（@[tifazxy](https://github.com/ruanyf/weekly/issues/150) 投稿）

8、[cow](https://github.com/cyfdecyf/cow)

一个将命令行 socks 代理转为 http 代理的工具。另一个软件 [graftcp](https://github.com/hmgle/graftcp) 也有类似功能。

9、[devhub](https://github.com/devhubapp/devhub)

![](https://www.wangbase.com/blogimg/asset/201901/bg2019011819.jpg)

将 GitHub 动态以 TweetDeck 形式展示的开源工具。

10、[最小化的 Google Analytics 代码](https://minimalanalytics.com/)

原始的 Google Analytics 代码是 73KB，可能拖累网页性能，经过简化以后，只需要 1.4KB。当然，功能也简化了，只能统计当前页面访问量。

11、[Google Earth Studio](https://www.google.com/earth/studio/)

![](https://www.wangbase.com/blogimg/asset/201901/bg2019011820.jpg)

谷歌官方推出的使用 Google Earth 制作 3D 动画的工具。

## 文摘

1、[苏联的航天飞机](https://edition.cnn.com/style/article/baikonur-buran-soviet-space-shuttle/index.html)

***IMAGE REMOVED***

哈萨克斯坦的拜科努尔航天发射场，有两艘废弃的前苏联航天飞机。

冷战时期，美国航天飞机成功以后，苏联决定模仿开发自己的航天飞机，1980年开始建造。苏联航天飞机的第一次、也是唯一一次飞行是在1988年11月15日，该次飞行成功完成。但是这时，冷战已经接近尾声。俄罗斯总统鲍里斯·叶利钦最终于1993年6月30日取消了航天飞机的发展计划。苏联解体后，根本没有资金让它继续发展下去。

![](https://www.wangbase.com/blogimg/asset/201901/bg2019011822.jpg)

（上图为1988年11月苏联航天飞机唯一一次发射。）

苏联一共建造了三艘航天飞机，都被遗弃在哈萨克斯坦草原的仓库里面。其中真正飞行过的那艘，由于2002年的仓库倒塌，被压毁了，现在只剩下两艘。

2008年，一家德国博物馆曾希望以1200万美元，购买一架作为展品。但由于运输费用过高，该计划被放弃。这些航天器已经在灰尘、鸟粪、高温和冰雪下度过了近30年，完全成了废墟，谁也不知道，它们还将这样继续存放多久。

***IMAGE REMOVED***

航天飞机仓库不对外开放，但是偷偷溜进去，也没有人管。上图为法国摄影记者潜入仓库。

2、[你不应该把内容发布在 Medium](https://bts.nomadgate.com/medium-evergreen-content)

很多人选择在 Medium 发布内容。但是，现在的 Medium 已经跟以前不一样了，发布之前你应该三思。

（1）Medium 允许你为文章设置原文链接，以前这个链接是可以修改的，现在一旦设置了，就不再允许修改。

（2）Medium 不再允许绑定自定义域名，自己的域名无法指向它的网站。

（3）Medium 以前允许某些网站以 iFrame 形式嵌入，比如统计表单，现在不行了。

（4）Medium 不再允许第三方广告，也就是说，你不再能够在自己的文章里接广告。

（5）Medium 的阅读体验已经变得糟糕。以前读者打开文章，看到的是下面的样子。

![](https://www.wangbase.com/blogimg/asset/201901/bg2019011824.jpg)

现在，看到的是下面这样。

![](https://www.wangbase.com/blogimg/asset/201901/bg2019011825.jpg)

3、[伐木工人的儿子](https://threadreaderapp.com/thread/1081619342377156608.html)

爱达荷州，一名伐木工人有一个儿子。父亲希望儿子也能成为一名伐木工人。但是这个小孩喜欢火箭，高中时为了好玩而制作火箭，甚至用父亲的乙炔，自己去焊接火箭。

高中毕业后，他去了当地的爱达荷大学，学习机械工程。因为家里没钱，他不得不在假期里面做了4年的伐木工作，赚到学费。

![](https://www.wangbase.com/blogimg/asset/201901/bg2019011826.jpg)

大学毕业后，他来到加利福尼亚州，加入了一家传统的航天公司——休斯公司，工作了15年，成为了该公司 TR-106 火箭的首席工程师。TR-106 是航天工业有史以来制造的最强大的火箭之一。

工作过程中，他有了制造新型火箭的想法。但建造火箭是非常昂贵的，没有资本家愿意给一个爱达荷州出身的人，提供数十亿美元来创办自己的火箭公司。所以他只好在自家后院制造火箭，造出了历史上最大的业余爱好者的液体燃料火箭。伊隆·马斯克注意到这件事。

后来，他作为创始人之一，加入了 SpaceX 公司，设计了Merlin发动机。现在他是推进系统的首席技术官，他的名字叫汤姆·穆勒（Tom Mueller）。

## 本周图片

1、[人口山](https://pudding.cool/2018/12/3d-cities-story/index.html)

![](https://www.wangbase.com/blogimg/asset/201901/bg2019011827.jpg)

如果将人口的聚集状况，以柱状图叠加在地图上，就形成了“人口山”。上图是中国的人口山地图。下图是美国东北部的人口山。

![](https://www.wangbase.com/blogimg/asset/201901/bg2019011828.jpg)

2、[Logo 的改变](https://boingboing.net/2018/12/13/interesting-logos-are-being-re.html)

下图上排是以前的logo，下排是现在的logo。各公司都不约而同，选择了加粗的直线式无衬线字体，这样是为了更醒目、辨识度更高吗？

![](https://www.wangbase.com/blogimg/asset/201901/bg2019011829.jpg)

网友 [@chun1iu](https://twitter.com/chun1iu/status/1073423775469686785) 评论：“不是更加醒目，而是更加中庸，更容易被所有人接受。不会很喜欢，也不会很反感，就是很大众。这些公司的成长过了标新立异的阶段而已。”

3、[原版 Macintosh 手册](https://www.peterme.com/2007/08/27/thoughts-on-and-pics-of-the-original-macintosh-user-manual/)

1984年，Macintosh 电脑发布。现在，有人把第一版的用户手册扫描，放到了网上。该手册专门用一章，介绍配套的便携包，强调 Macintosh 可以随身携带。

![](https://www.wangbase.com/blogimg/asset/201901/bg2019011830.jpg)


![](https://www.wangbase.com/blogimg/asset/201901/bg2019011831.jpg)


![](https://www.wangbase.com/blogimg/asset/201901/bg2019011832.jpg)

## 本周金句

1、

鸡应该不会灭绝，因为人类发现鸡肉味道鲜美，所以会想尽办法保证我们有鸡可吃。

-- [一位科学家](https://cornercases.wordpress.com/2018/12/09/apex/)

2、

中年人是艰难的。青年时代的理想主义已经消退，健康和活力也不可避免地有一点降低，但是承担的责任却在增长，再加上一些对死亡的恐惧和一些对活着的恐惧，你就有了叫做中年危机的东西。

-- [Bryan Cantrill](http://dtrace.org/blogs/bmc/2018/12/14/open-source-confronts-its-midlife-crisis/)（dtrace 的作者）

3、

我们为了降低能源消耗，发明了节省能源的 LED 照明。结果，更高效的照明导致了更多的照明，从而使得社会整体能源消耗增加。

很多事情都是这样，为了省电，我们提高了能源效率，结果人们因此买更多的电器，消耗更多的电。

-- [《能源效率的诅咒》](https://thetyee.ca/Opinion/2018/02/26/Energy-Efficiency-Curse/)

4、

美国是母乳喂养率最低的发达国家之一，原因之一就是法律没规定带薪产假。

-- [《纽约时报》](https://www.nytimes.com/2018/12/31/business/breast-feeding-discrimination-pregnancy.html)

## 欢迎订阅

这个专栏每周五发布，同步更新在我的[个人网站](http://www.ruanyifeng.com/blog)、[微信公众号](http://weixin.sogou.com/weixin?query=%E9%98%AE%E4%B8%80%E5%B3%B0%E7%9A%84%E7%BD%91%E7%BB%9C%E6%97%A5%E5%BF%97)和[语雀](https://yuque.com/ruanyf/share/)。

微信搜索“__阮一峰的网络日志__”或者扫描二维码，即可订阅。

![](http://www.ruanyifeng.com/blogimg/asset/2018/bg2018042311.jpg)

（完）

