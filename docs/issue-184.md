# 科技爱好者周刊（第 184 期）：政府的存储需求有多大？

这里记录每周值得分享的科技内容，周五发布。

本杂志开源（GitHub: [ruanyf/weekly](https://github.com/ruanyf/weekly)），欢迎提交 issue，投稿或推荐科技内容。

周刊讨论区的帖子[《谁在招人？》](https://github.com/ruanyf/weekly/issues/2032)，提供大量程序员就业信息，欢迎访问或发布工作/实习岗位。

## 封面图

![](https://cdn.beekka.com/blogimg/asset/202111/bg2021111401.jpg)

11月19日清晨，SpaceX 公司的 Falcon 9 火箭发射升空，这是该公司今年第25次发射。当天，海边的发射场弥漫着浓重的晨雾，火箭一跃而出，仿佛科幻片的场景。（[via](https://twitter.com/SpaceX/status/1459518399373922304)）

## 本周话题：政府的存储需求有多大？

最近，有一条[新闻](https://www.theregister.com/2021/08/16/dallas_data_migration_8tb_deletion/)吸引了我的注意。

> 美国达拉斯警察局迁移内部数据，不小心误删了 22TB 的数据，后来找回 14TB，剩下的 8TB 确认丢失。
> 
> 丢失的数据里面，有一个谋杀案的所有文档、图像、视频。证据没了无法起诉，而嫌疑人又不认罪，警方正在讨论怎么办，最后很可能只能把他放了。

![](https://cdn.beekka.com/blogimg/asset/202108/bg2021081801.jpg)

大家觉得上面这条新闻，什么地方值得注意？

不是误删数据，那种事情每天都在发生。我觉得，重点是警察局的数据超过了 22TB。这个容量不算小，说明它的硬盘保存了很多东西，而且应该是有一个自己的存储系统，搞不好还有机房。

达拉斯的人口是130多万，警察局的存储超过了 22TB，整个美国的人口是3亿多，你说所有警察局的存储空间加在一起，该有多大？

美国的警察局属于州政府，国家一级的治安机关是联邦调查局 FBI，它的存储恐怕更大，此外还有其他政府部门（比如国防部、财政部、中央情报局……）。这么一想，美国政府单位消耗的硬盘真是不得了，恐怕是一个天文数字。

![](https://cdn.beekka.com/blogimg/asset/202111/bg2021110722.jpg)

我接着想到，中国政府单位的存储需求，也是天文数字吧。好在这可以查，政府采购需要招标，招标公告一般发布在[政府采购网](http://www.ccgp.gov.cn/)。

![](https://cdn.beekka.com/blogimg/asset/202111/bg2021110908.jpg)

我全文搜索“存储”，过去半年有11431条[采购公告](http://search.ccgp.gov.cn/bxsearch?searchtype=2&page_index=1&bidSort=0&buyerName=&projectId=&pinMu=0&bidType=0&dbselect=bidx&kw=%E5%AD%98%E5%82%A8&start_time=2021%3A05%3A09&end_time=2021%3A11%3A07&timeType=5&displayZone=&zoneId=&pppStatus=0&agentName=)。

![](https://cdn.beekka.com/blogimg/asset/202111/bg2021110724.jpg)

各省的各种单位都有，采购金额从几十万到几百万不等，大家可以去看。我随便摘录几条。

> - [中国教育图书进出口有限公司](http://www.ccgp.gov.cn/cggg/dfgg/zbgg/202111/t20211109_17152446.htm)：私有云存储扩容采购项目 230万
> - [重庆大学](http://www.ccgp.gov.cn/cggg/zygg/gkzb/202008/t20200810_14809548.htm)：全闪存储及服务器采购项目 243万
> - [中央广播电视总台](http://www.ccgp.gov.cn/cggg/zygg/zbgg/202108/t20210812_16705947.htm)：私有云存储设备全包代维项目 150万
> - [广州中山大学第一附属医院](http://www.ccgp.gov.cn/cggg/zygg/zbgg/202101/t20210108_15772030.htm)：数据中心服务器与存储扩容升级项目 601万
> - [广东工贸职业技术学院](http://www.ccgp.gov.cn/cggg/dfgg/jzxcs/202111/t20211109_17154369.htm) ：存储容量扩容项目 30万

从这些例子不难想象，全国政府单位的存储蛋糕有多大。但是，每个单位都搞自己的一套内部存储系统，甚至私有云，其实有很多弊端。

（1）这样不经济，每个单位都有自己的机房、服务器和管理员，是一种浪费。

（2）政府单位不容易招聘到高水平的 IT 工程师，也不可能有规范的 IT 操作流程，最后就会像达拉斯警察局一样，出现数据事故，误删或者泄露。

（3）每个单位使用自己的存储格式、数据库设计、操作软件，不利于数据通用和对外开放。

总之，我觉得，中央政府最好出台一个方案，推动全国的政府单位把数据放到云端，不要自建内部机房。最好有一个统一的“政府云”，提供方便的存储接口，给各地的公家单位使用，这样可以省很多钱，也有利于统一备份，避免数据丢失。

## Vue 3.x 训练营

刚刚学习前端开发的同学，常常有一个问题：

> “Vue 和 React 这两个框架，哪个更容易学？”

它们都有很高的市场占有率，都能完成开发任务，上手也都算容易。对于初学者，学习哪一个框架确实是一个问题。

![](https://cdn.beekka.com/blogimg/asset/202111/bg2021111701.jpg)

这个问题的答案，因人而异。但是，大多数人的看法是，Vue 相对容易掌握，可能更适合新手。

新版本 Vue 3 去年发布了，功能更完备，语法更合理，加入了 TypeScript 支持，导致采用率有明显上升。Vue 的培训班也显著多于 React，这从一个侧面说明了它的受欢迎程度。

本周的课程资料，就是一个 Vue 3 的训练营 **《Vue 3.X 前后分离：架构脚手架开发实战》**，通过三天的直播课，带大家从零开始，自己动手完成一个 Vue 项目。

![](https://cdn.beekka.com/blogimg/asset/202111/bg2021111702.webp)

上课时间是下周一（11月22日）到下周三（11月24日）的三个晚上。它是现场直播，特别强调听课同学的参与，如果你有不理解的地方，可以在直播间和群里随时提问。老师会要求大家边听边做，在动手中加深理解。

内容大纲如下，详细介绍请扫描后面的二维码。

> **第一天 零基础入门篇**  
> Vue 框架介绍，快速上手，基本语法
> 
> **第二天 核心基础篇**  
> Vue3.x 新特性，组合式 API 与响应式 API，watch 与 watchEffects 行为
> 
> **第三天 开发实操篇**  
> 脚手架 Vite 方案，Vue3.x 的组件介绍与开发	

对前端有兴趣、希望自己开发网站的同学，或者自学 Vue 遇到困难的同学，都可以听听看。通过专业老师的讲解和辅导，对 Vue 有一个全面而快速的掌握。

本课程由北京[奈学教育](https://www.naixuejiaoyu.com/)制作，它是一个新兴的 IT 职业教育平台，创始人是前58集团技术委员会主席孙玄，核心师资都是各大厂的资深工程师，累计服务超过20万付费学员。他们还与猎聘达成深度合作，为优秀学员定制大厂的内推就业。

![](https://cdn.beekka.com/blogimg/asset/202111/bg2021111703.jpg)

微信扫描上方二维码，或者访问[这个链接](https://j.naixuejiaoyu.com/1J6ZZgZlLm8?putcode=20211119KOLGZH-RYF)，可以了解课程详情并报名，下周一就可以听课。前200名同学，只象征性收取 **0.99 元** 报名费。

现在报名的同学，还会免费获赠《前端知识体系超全资料包》，里面包含了前端核心工具的完整梳理和介绍。

## 科技动态

1、[世界最大的飞行器](https://www.businessinsider.com/photos-see-the-flying-bum-airlander-10-2021-9)

![](https://cdn.beekka.com/blogimg/asset/202109/bg2021091805.jpg)

![](https://cdn.beekka.com/blogimg/asset/202109/bg2021091806.jpg)

目前，世界最大的飞行器是一家英国公司制造的氦气飞艇，叫做 Airlander 10，长达91米。相比之下，世界最大的——客机空中客车 A390，长度为79.8米。

该公司最近宣布，这艘飞艇2025年将投入载客运营。

它原来是美国国防部定制的，打算用于军事目的。2013年美国放弃了该项目，导致飞艇一直闲置在机库。

![](https://cdn.beekka.com/blogimg/asset/202109/bg2021091807.jpg)

![](https://cdn.beekka.com/blogimg/asset/202109/bg2021091810.jpg)

制造商最后决定改为民用。改造后，飞艇上部是巨大的气囊，下部是座舱，可以乘坐100人，配有巨大的落地窗，可以欣赏窗外景色。它的飞行速度比较慢，跟汽车差不多，最高速度在每小时100公里左右。

![](https://cdn.beekka.com/blogimg/asset/202109/bg2021091808.jpg)

![](https://cdn.beekka.com/blogimg/asset/202109/bg2021091809.jpg)

2、[挪威很快将没有燃油车](https://electrek.co/2021/09/23/norway-bans-gas-cars-in-2025-but-trends-point-toward-100-ev-sales-as-early-as-april/)

![](https://cdn.beekka.com/blogimg/asset/202109/bg2021092404.jpg)

挪威政府宣布，2025年将禁售燃油汽车，这个日期是全世界最早的。但实际上，可能不用等到那一天，目前该国燃油车的销售量已经非常低了，按照这个下降速度，可能到明年4月挪威销售的所有新车，就都将是电动车。

去年年底，燃油车还占挪威汽车销量的21%，到了今年9月份只剩下10%。该国前15位的畅销车，14种是电动车，剩下1种是混合动力车。按照这个速度推算，明年4月电动车的销售占比会上升到100%。

这其实是一件奇怪的事情。因为挪威是北极国家，冬季冰天雪地，电池性能会急剧下降，行驶里程可能打对折。很难想象，这种情况下，挪威民众对电动车的购买意愿这么高。

3、[体温发电](https://www.newscientist.com/article/2276215-wristband-that-turns-body-heat-into-electricity-can-power-an-led/)

![](https://cdn.beekka.com/blogimg/asset/202110/bg2021102901.jpg)

哈尔滨工业大学的科学家发明了一种“体温发电”技术。他们在腕带里面加入了柔性电极，以及镁和铋，利用人体与外界的温差进行发电。温差越大，发电效果越好，所以推荐冬天使用。

这种腕带产生的电能非常微弱，但可以点亮 LED，因此可以做成发光腕带。

![](https://cdn.beekka.com/blogimg/asset/202110/bg2021102902.jpg)

4、[搞错的无线电信号](https://www.nature.com/articles/d41586-021-02931-7)

![](https://cdn.beekka.com/blogimg/asset/202111/bg2021110105.jpg)

2019年，一个澳大利亚天文台接收到一串神秘的无线电信号，来自半人马座比邻星。那是离太阳最近的恒星，相距4.2光年，而且已知它的一颗行星上有液态水，也许存在生命。

所以，这是那一年的大新闻，天文学家非常激动，可能是外星文明发来的电波，许多科学媒体都报道了这个消息。

但是，经过一年多的研究，现在终于确认，那个无线电信号不是来自外星球，而是人为的无线电干扰，就发生在地球表面，很可能是飞机通信产生的。这个乌龙进一步加强了科学家的一个信念：以后的天文望远镜也许不应建造在地球表面了，而要建在太空中，只有这样才能避免地面的无线电干扰。

5、[基因编辑河豚](https://news.sina.com.cn/w/2021-10-30/doc-iktzqtyu4375777.shtml)

![](https://cdn.beekka.com/blogimg/asset/202111/bg2021110106.jpg)

日本政府批准基因编辑河豚上市。研究人员去掉了河豚控制食欲的基因，使其食欲旺盛，不知节制地进食，体重快速增长，在同样周期内达到普通河豚的1.9倍（上图）。

![](https://cdn.beekka.com/blogimg/asset/202111/bg2021110107.jpg)

这是日本批准的第三种基因编辑食品，前面两种是可降血压的西红柿和肉量增加的真鲷。

## 文章

1、[将你的 PWA 发布到 iOS 应用商店](https://blog.pwabuilder.com/posts/publish-your-pwa-to-the-ios-app-store/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202110/bg2021103004.jpg)

本文介绍了一种方法，将 PWA 网页应用发布在 iOS 应用商店。

但是，苹果公司明文反对，网页应用重新包装后发到应用商店，所以能不能通过审核顺利上架，就很难说了。

2、[MySQL 数据库索引概览](https://blog.csdn.net/wallace_www/article/details/117264149)（中文）

本文详细介绍了数据库索引的概念和种类，并讨论使用索引时应该考虑的因素。（[@wallace1995](https://github.com/ruanyf/weekly/issues/2055) 投稿）

3、[printf() 的返回值](https://www.netmeister.org/blog/return-printf.html)（英文）

本文介绍 C 语言的一个很奇怪的语法点：printf() 为什么会有两种返回值。

4、[如何侦测开发者工具](https://medium.com/@weizmangal/javascript-anti-debugging-some-next-level-sh-t-part-2-abusing-chromium-devtools-scope-pane-b2796c00331d)（英文）

本文介绍了几个技巧，可以侦测用户是否打开了浏览器的开发者工具。

5、[如何使用 Calibre 将本地网页转成电子书](https://bbs.pediy.com/thread-269615.htm)（中文）

![](https://cdn.beekka.com/blogimg/asset/202110/bg2021100503.jpg)

本文介绍如何将本地目录里面保存的网页，通过 Calibre 脚本转成一本电子书。（[@evmn](https://github.com/ruanyf/weekly/issues/1987) 投稿）

6、[React Native 开发一个新闻应用](https://www.freecodecamp.org/news/build-an-android-news-app-with-react-native-and-native-base/)（英文）

本文一步步演示，如何使用 React Native 开发一个新闻 App。

7、[为什么网站应该使用抖动图像](https://endtimes.dev/why-you-should-dither-images/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202109/bg2021093003.jpg)

作者主张，大多数情况下，网站应该使用抖动图像（dithering image），减少图片体积。他介绍了图像抖动的概念，以及为什么抖动图像需要保存成 png 或 webp 格式。

8、[彩色括号功能的实现](https://code.visualstudio.com/blogs/2021/09/29/bracket-pair-colorization)（英文）

![](https://cdn.beekka.com/blogimg/asset/202109/bg2021093004.jpg)

VS Code 编译器有一个插件，可以让不同的括号对显示不同的颜色。但是，这个功能需要解析代码，很吃性能，大型文件会产生卡顿。VS Code 官方团队就写了这篇文章，记录了他们为了改进括号配对的性能，所做出的努力。

9、[基于 Cloudflare Pages 的全栈开发](https://blog.cloudflare.com/building-full-stack-with-pages/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202111/bg2021111812.jpg)

Cloudflare 公司本周宣布，他们的静态网页寄存服务 Cloudflare Pages 已经跟其他服务打通了，可以用来全栈开发，包括云函数、图片存储和 KV 键值对存储。

## 工具

1、[Hurl](https://hurl.dev/)

![](https://cdn.beekka.com/blogimg/asset/202110/bg2021100604.jpg)

一个命令行工具，作用类似于 curl，可以用来发出 HTTP 请求，获取回应，但它是特别为测试而设计的，配置文件里面允许写断言，很适合在命令行测试 HTTP 接口。

2、[ColorFu](https://colorfu.art/editor)

![](https://cdn.beekka.com/blogimg/asset/202111/bg2021111308.jpg)

一个基于网页的壁纸生成器，提供了丰富的颜色、简洁的界面，可以快速制作“文字 + 颜色/纹理/图片”这种形式的壁纸。（[@pearmini](https://github.com/ruanyf/weekly/issues/2053) 投稿）

3、[Xterm.js](https://xtermjs.org/)

![](https://cdn.beekka.com/blogimg/asset/202110/bg2021100902.jpg)

一个 JS 组件，在网页上加入命令行窗口，可以与服务器进行通信，接受并展示服务器的命令行输出。

4、[yabai](https://github.com/koekeishiya/yabai/)

![](https://cdn.beekka.com/blogimg/asset/202110/bg2021101001.jpg)

MacOS 系统的平铺式窗口管理器，苹果电脑命令行工作者的福音。

5、[ROAPI](https://github.com/roapi/roapi)

一个 API 服务器，不用编写任何代码，就可以把 JSON 文件或 CSV 文件转成 API 服务，自动提供 REST、GraphQL、SQL 接口，参见[这篇教程](https://tech.marksblogg.com/roapi-rust-data-api.html)。

6、[Unicode 日历生成器](https://qwerty.dev/calendar-generator/)

![](https://cdn.beekka.com/blogimg/asset/202110/bg2021101404.jpg)

这个网页工具可以生成一个纯 Unicode 字符组成的日历。

7、[weird json](https://github.com/i5ik/weird-json)

一个 JS 库，采用了一种与众不同的方法，通过将对象转成字符串，完成两个对象之间的深拷贝。

8、[Euterpe](https://github.com/ironsmile/euterpe)

![](https://cdn.beekka.com/blogimg/asset/202111/bg2021111813.webp)

一个开源的音乐流媒体服务器，带有 Web 管理界面，可以架设在家里，然后外出时连上它听音乐。

9、[Matrix Rain](https://github.com/nojvek/matrix-rain)

![](https://cdn.beekka.com/blogimg/asset/202109/bg2021091205.jpg)

一个 JS 库，可以在命令行环境展示电影《黑客帝国》的绿色字符雨效果，还可以调整各种参数。

10、[gobang](https://github.com/TaKO8Ki/gobang)

![](https://cdn.beekka.com/blogimg/asset/202109/bg2021091206.jpg)

一个命令行的数据库管理软件，支持 MySQL、PostgreSQL、SQLite。

## 资源

1、[deskto.ps](https://deskto.ps/)

![](https://cdn.beekka.com/blogimg/asset/202110/bg2021100901.jpg)

这个网站允许网友上传自己的电脑桌面截图，你可以浏览别人的桌面是什么样。

2、[中文 Newsletter 订阅](https://github.com/alaskasquirrel/Email-newsletter-RSS)

这个仓库收集各种中文的邮件列表，我们这个周刊也在其中。（[@alaskasquirrel](https://github.com/ruanyf/weekly/issues/2054) 投稿）

3、[Vididoo](https://vididoo.vercel.app/)

![](https://cdn.beekka.com/blogimg/asset/202109/bg2021090506.jpg)

这个网站收集了一些处理视频的在线工具，在网页上就可以完成视频缩放、剪接、图像转视频、提取音频等操作。

4、[oldmouse.com](http://oldmouse.com/)

![](https://cdn.beekka.com/blogimg/asset/202110/bg2021101102.jpg)

这个网站记录鼠标的发展历史，你可以在上面找到各种老式鼠标。

5、[学习 GNU Coreutils 命令行文本处理](https://learnbyexample.github.io/cli_text_processing_coreutils/preface.html)

![](https://cdn.beekka.com/blogimg/asset/202110/bg2021101301.jpg)

GNU Coreutils 软件包提供了 Linux 系统的许多基本命令，比如`head`、`tail`、`tr`、`sort`等等。这本免费的英文教程，逐一介绍20多个命令，帮你掌握命令行文本处理。

## 图片

1、[消失的10亿年](https://www.bbc.com/future/article/20210901-the-strange-race-to-track-down-a-missing-billion-years)

早在19世纪，地质学家就发现美国大峡谷的岩层非常奇怪。

![](https://cdn.beekka.com/blogimg/asset/202109/bg2021090603.jpg)

上图是大峡谷的岩层照片，请仔细看这张图，它的上层和下层的岩石明显不同。

下方的岩层是坚硬的结晶岩，距今大约17亿年，上方是砂岩，距今大约5.5亿。两者的差距至少10亿年，它们之间再没有其他岩层。

地质学家百思不得其解，为什么岩层少了10亿年？至今仍然没有答案，一种假说认为，这10亿年是冰河期，当地完全被冰层覆盖，岩层停止了发育。

2、[乌得勒支](https://twitter.com/david_perell/status/1434731477237907460)

乌得勒支是荷兰第四大城市，整个城市都是为行人规划的，不是为汽车规划的，而且河岸建得很低，有很多亲水步道，非常美丽宜居。

![](https://cdn.beekka.com/blogimg/asset/202109/bg2021090715.jpg)

![](https://cdn.beekka.com/blogimg/asset/202109/bg2021090716.jpg)

![](https://cdn.beekka.com/blogimg/asset/202109/bg2021090717.jpg)

## 文摘

1、[巴克莱银行的 74,000 个电话号码](https://shkspr.mobi/blog/2021/05/the-74000-numbers-of-barclays-bank/)

英国有很多电话诈骗，骗子冒充银行工作人员，打电话给客户。

巴克莱银行为了防止诈骗，专门制作了一个网站，客户可以在上面查询，来电号码是否真的属于巴克莱银行。

![](https://cdn.beekka.com/blogimg/asset/202111/bg2021111805.jpg)

但是你能相信吗？这个网站居然加载了一个 1.3MB 的 [JSON 文件](https://www.barclays.co.uk/content/dam/json-files/TelephoneNumberChecker_26_03_2021.json)，其中包含巴克莱银行拥有的所有 74,000 个电话号码。

打开这个 JSON 文件，就是下面的样子。

![](https://cdn.beekka.com/blogimg/asset/202108/bg2021083104.jpg)

更绝的是，如果你在电话号码前面，加上英国的国际区号`+44`，网站会告诉你，它不认识这个号码。

![](https://cdn.beekka.com/blogimg/asset/202108/bg2021083105.jpg)

如果号码里面加上破折号，网站也会不认识这个号码。

![](https://cdn.beekka.com/blogimg/asset/202108/bg2021083106.jpg)

巴克莱银行到底雇佣了什么样的程序员，连正则表达式都不会写？

2、[AIP 潜艇](https://nationalinterest.org/blog/reboot/air-independent-propulsion-could-create-silent-killer-submarines-192514)

传统潜艇使用柴油发动机，柴油燃烧需要氧气，因此每过一段时间，潜艇就必须浮上水面，使用柴油发动机为电池充电，否则在水下就无法行驶。

![](https://cdn.beekka.com/blogimg/asset/202108/bg2021083108.jpg)

这显然很不方便，更要命的是，浮上水面容易被敌人发现和攻击。

于是，美国开始研发核潜艇。第一艘核潜艇 1950 年代投入使用。核反应堆不需要氧气，使得潜艇可以在水下以行驶数月，而不浮上水面。而且，核潜艇的功率更大，更让潜艇变得更快。

这些优势促使美国海军逐步淘汰柴油潜艇，全部采用核潜艇，目前美国已经没有常规动力的潜艇了。但是，其他国家海军依然使用柴油潜艇，毕竟它们的成本和复杂性要低得多。

![](https://cdn.beekka.com/blogimg/asset/202111/bg2021111806.jpg)

潜艇发展的另一种思路是，研发不需要空气的柴油潜艇（Air-Independent Propulsion，简称 AIP 潜艇）。瑞典终于在 1990 年代研发成功，成为第一个拥有 AIP 潜艇的国家。这种潜艇使用液氧，在水下为柴油发动机提供氧气，因此不需要浮上水面。

从那时起，AIP 潜艇就在全世界范围内流行，目前 15 个国家大约有近 60 艘在服役，另外还有大约50艘已经被订购或正在建造中。

![](https://cdn.beekka.com/blogimg/asset/202111/bg2021111807.jpg)

AIP 舰艇与核潜艇，孰优孰劣？

（1）核潜艇的优势之一，就是非常安静，难以被声纳发现。如果设计得当，AIP 潜艇也可以很安静。

（2）核潜艇可以在水下潜伏三四个月，AIP 潜艇可以潜伏三周左右。虽然续航时间不如核潜艇，但对于那些主要在近海活动的国家，三周的续航应该够用了。

（3）核潜艇的水下速度，可以达到每小时35英里以上，AIP 潜艇最快只能到每小时23英里。

（4）美国弗吉尼亚级核潜艇，造价为26亿美元，每年还有昂贵的维护成本。AIP 潜艇的造价为2亿~6亿美元。

（5）核潜艇通常是大型潜艇，船员可以超过100人，而且可以配备重型武器。AIP 潜艇多为中小型潜艇，船员在30人到60人之间。

结论就是，如果海军主要在近海活动，那么 AIP 潜艇比较合适，造价低，随时可以回到港口。美国海军主要在远洋活动，续航力更重要，所以几乎没有意愿制造 AIP 潜艇。

## 言论

1、

我不投资加密货币，原因主要是我不喜欢价格剧烈波动带来的心理负担。

-- [Hacker News 读者](https://news.ycombinator.com/item?id=28732366)

2、

我去母亲家住了一个星期回来，结果上网时就收到了母亲使用的牙膏品牌的推送。我从没在网上搜索过这个品牌，这到底是怎么发生的？

后来我想通了。那些应用发现我的 GPS 定位，经常与母亲的手机在同一个位置，就把向我母亲推送的广告，也推送给我。

-- [Twitter 用户](https://threadreaderapp.com/thread/1397032784703655938.html)

3、

阅读你喜欢的书，直到你喜欢阅读。（Read what you love until you love to read.）

做你喜欢的事，直到你喜欢去做。（Do what you love until you love to Do.）

-- [@naval](https://twitter.com/id_aa_carmack/status/1445424833181925376)

4、

历史上，没有人为氧气打过仗，因为有足够的氧气供每个人使用。大多数战争是为了土地和人口，它们都是稀缺而有价值的资源。

供养人口需要粮食，二战后的农业革命，使得粮食变得如此便宜，这大大减少了战争，而促进了合作。

-- [《廉价食品导致合作》](https://www.lesswrong.com/posts/cLehpZAY3HZuEQbHe/cheap-food-causes-cooperative-ethics)

5、

我不把 Facebook、Instagram、TikTok、Snapchat 这种软件，看成互联网的一部分。它们只是一个应用程序，只向注册会员开放，不与外部分享数据。它们虽然有网站，但是难于使用，而且有很多限制，只作为补充的访问方式。

-- [Archive.is blog](https://blog.archive.today/post/665401109290074112/why-do-you-view-fb-ig-tiktok-snapchat-as)

## 历史上的本周

2020年（第 133 期）：[贵州变瑞士，有没有可能](https://www.ruanyifeng.com/blog/2020/11/weekly-issue-133.html)

2019年（第 81 期）：[子辈能大幅超越父辈吗？](https://www.ruanyifeng.com/blog/2019/11/weekly-issue-81.html)

2018年（第 30 期）：[为什么谷歌做不好社交软件？](https://www.ruanyifeng.com/blog/2018/11/weekly-issue-30.html)

## 订阅

这个周刊每周五发布，同步更新在[阮一峰的网络日志](http://www.ruanyifeng.com/blog)和[微信公众号](http://weixin.sogou.com/weixin?query=%E9%98%AE%E4%B8%80%E5%B3%B0%E7%9A%84%E7%BD%91%E7%BB%9C%E6%97%A5%E5%BF%97)。

微信搜索“阮一峰的网络日志”或者扫描二维码，即可订阅。

![](https://cdn.beekka.com/blogimg/asset/202103/bg2021030402.jpg)

（完）
