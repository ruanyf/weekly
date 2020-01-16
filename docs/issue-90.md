# 科技爱好者周刊：第 90 期

这里记录每周值得分享的科技内容，周五发布。

本杂志开源（GitHub: [ruanyf/weekly](https://github.com/ruanyf/weekly)），欢迎提交 issue，投稿或推荐你的项目。

周刊讨论区的帖子[《谁在招人？》](https://github.com/ruanyf/weekly/issues/983)，提供大量就业信息，欢迎访问或发布工作/实习岗位。

![](https://www.wangbase.com/blogimg/asset/201912/bg2019120604.jpg)

封面图：沙漠餐厅，阿联酋迪拜，出自 [Instagram](https://www.instagram.com/p/B5s4DSkBAKE/)。

## 刊首语

程序员当久了以后，如果项目顺利，一般都有机会组建或者负责团队，开始管人。

管人其实比开发更难。技术是死的，人是活的，随时会变。把大家团结起来，一起奋斗，很不容易。

![](https://www.wangbase.com/blogimg/asset/202001/bg2020010903.jpg)

我认识的许多程序员，都不愿意管人。一个创业的朋友开一个工作室，他说这几年有好几次机会做大，但是都放弃了，因为不知道怎么管人。 **他说，我可以管好自己，但我不知道怎么管好别人。**

首先，招聘或者解雇，都是非常麻烦的事情。然后，绩效的评估，奖金的分配，很容易产生矛盾。只要有人心怀不满，就会有内耗，影响企业或团队的发展。万一出现“删库跑路”这种极端情况，更是要命的打击。

![](https://www.wangbase.com/blogimg/asset/202001/bg2020010904.jpg)

马云和任正非强在哪里？不是技术，而是管理和市场判断，他们都非常善于管人，尤其是管理大型组织。任正非就说过，我最大的本事就是一桶浆糊，把几万人粘成一股绳。

所以，程序员应该对自己有一个清醒的认识，管人和技术是两种不同的能力。如果你不善于管人，就不要去任职管理岗位；如果你在创业，就应该请专门的经理人，负责企业管理。

反过来说，对于那些不是程序员、不精通技术的人，只要你善于管理，那么你可以去找程序员，跟你一起技术创业。

## 验证码识别服务 2Captcha

许多网站登录时都有验证码（又称 Captcha 测试），防止脚本登录。验证码有很多类型，最常见的就是字符识别（下图），那些歪歪扭扭的字符，计算机不容易准确识别，人类可以做到。

![](https://www.wangbase.com/blogimg/asset/201912/bg2019123001.jpg)

国内外有很多验证码识别服务，用于抓取数据，或者特定目的的脚本，比如秒杀商品。最近，[2Captcha](https://2captcha.com?from=8377663) 联系我，希望开发中国市场，想在这里宣传一下他们的服务。它创始于2013年，一直运行至今。在行业里面，有不错的口碑和信用，是一个可靠的服务提供商。

[2Captcha](https://2captcha.com?from=8377663)  最大的特色是，不管字体多么扭曲的验证码，都可以正确识别，包括 ReCaptcha 这种难度较高的验证码（下图），因为他们采用[真人识别](https://2captcha.com/make-money-online?from=8377663)！任何人都可以去平台接活，按照工作量获取报酬。目前，“识别员”主要来自印度、俄罗斯、委内瑞拉、菲律宾等国家，覆盖了全球所有时区，官方承诺随时都有足够的“识别员”在线。2Captcha 希望有更多中国人去他们的平台，以提高中文验证码的识别准确率。

![](https://www.wangbase.com/blogimg/asset/201912/bg2019123002.jpg) 

开发者只需要把验证码图片发到他们的服务器，就会有真人识别这些图片。每次验证码识别需要12秒～14秒，开发者使用前一次请求返回的 ID 轮询服务器，拿到识别结果。2Captcha 的收费相当便宜，1000次识别最低只要0.5美元（不到人民币4元），中国用户可以使用支付宝付款。如果识别不正确，他们保证退款。

除了文字验证码，下面这样的图片验证码也可以识别，详见他们的 [API 文档](https://2captcha.com/2captcha-api?from=8377663)。如果遇到开发困难，或者对文档有疑问，可以联系他们的客服，会提供[技术支持](https://2captcha.com/for-customer?from=8377663)。

![](https://www.wangbase.com/blogimg/asset/201912/bg2019123005.jpg)

最后，他们也向国内用户开放推荐提成。如果你推荐他人使用该服务，可以提成5%～10%；如果你是一个开发者，你开发的软件集成了 2Captcha，可以获得软件产生的费用的10%。

## 资讯

1、[英尺的标准](https://phys.org/news/2019-12-boot-foot.html)

![](https://www.wangbase.com/blogimg/asset/201912/bg2019121710.jpg)

我们知道，美国不使用国际度量衡，而是使用英尺。但是，你可能不知道，美国的英尺也跟世界其他地方的英尺不一样。

1893年，美国政府规定，1英尺等于1200米除以3937，即0.3048006米。但是，其他国家的英尺长度都是0.3048米。因此，美国英尺比国际英尺长了0.0000006米。虽然只是小数点后第7位不一样，但是对于土地测量来说，会导致很大的误差。

1959年，美国决定采用国际英尺，但这不是强制规定，有40个州直到今天还在使用美国英尺，其他州则使用国际英尺。比如，俄勒冈州和华盛顿州就不一样，连接两州的桥梁施工，不得不考虑这种差异。2019年10月，美国政府宣布，2022年彻底结束美国英尺的使用，所有州都一律使用国际英尺。

2、[程序员收入最高的美国技术公司](https://www.levels.fyi/2019/)

![](https://www.wangbase.com/blogimg/asset/202001/bg2020010601.jpg)

美国一家数据公司发布，2019年工程师年薪最高的技术公司排名，分成初级工程师、中级工程师、高级工程师、资深工程师、首席工程师五档。年薪包括工资、奖金和股票。

![](https://www.wangbase.com/blogimg/asset/202001/bg2020010602.jpg)

![](https://www.wangbase.com/blogimg/asset/202001/bg2020010603.jpg)

![](https://www.wangbase.com/blogimg/asset/202001/bg2020010604.jpg)

![](https://www.wangbase.com/blogimg/asset/202001/bg2020010605.jpg)

3、[无家可归者的宿舍城市](https://losangeles.cbslocal.com/2019/12/19/homeless-crisis-housing-city-citizens-again-california/)

![](https://www.wangbase.com/blogimg/asset/201912/bg2019122105.jpg)

![](https://www.wangbase.com/blogimg/asset/201912/bg2019122106.jpg)

随着加州房价的上涨，无家可归的流浪者越来越多。据统计，加州2018年的无家可归人口约为13万，占美国全国总数的近四分之一。一个民间组织提出设想，花费30亿美元，建设一个300英亩（约1.2平方公里）的城市，专门对无家可归者开放，可以容纳15万人。

![](https://www.wangbase.com/blogimg/asset/201912/bg2019122107.jpg)

![](https://www.wangbase.com/blogimg/asset/201912/bg2019122110.jpg)

该组织说，符合条件的流浪者都可以免费入住，并随时可以自由离开，你想一直住下去也可以。这座城市将提供高密度的宿舍住房，睡觉和淋浴都是免费的，每栋宿舍楼都有活动区，吃饭由每个街区的公共食堂提供。

每位入住者将领到一个带 RFID 功能的腕带，充当大门钥匙，还可以用来领取药品。入住者还将获得工作和技能培训，帮助他们离开这座城市。

![](https://www.wangbase.com/blogimg/asset/201912/bg2019122108.jpg)

![](https://www.wangbase.com/blogimg/asset/201912/bg2019122109.jpg)

4、[自变形机器人](https://humanbioscience.org/2019/12/self-transforming-robot-blocks-can-jump-spin-flip-just-like-transformers.html)

![](https://www.wangbase.com/blogimg/asset/201912/bg2019121101.jpg)

麻省理工学院发明了一种叫做 M-Blocks 2.0 的自变形机器人。这种机器人是一个个小方块，可以根据所要解决的问题自动变形，比如一会变成一根直线，一会变成一个金字塔。

每个方块的六个面上都有类似条形码的系统，供其他方块识别并与之通信。方块内部有磁铁，可以相互粘附形成坚固的结构。研究团队的原型产品是16个方块组成的变形机器人，设想中将来会有100万个方块组成的大型机器人，火灾的时候可以自动变形为梯子，让受困的人爬出来。

![](https://www.wangbase.com/blogimg/asset/201912/bg2019121104.jpg)

![](https://www.wangbase.com/blogimg/asset/201912/bg2019121105.jpg)

5、[机器狗葬礼](https://asahichinese-j.com/society/12977340)

![](https://www.wangbase.com/blogimg/asset/201912/bg2019122204.jpg)

![](https://www.wangbase.com/blogimg/asset/201912/bg2019122205.jpg)

最近，日本千叶县的一座寺庙举行了一场特殊的“葬礼”，哀悼索尼公司生产的机器狗AIBO。当天，56条机器狗并排“躺”在祭坛上，而它们的原主人等也到场参加了“祭奠”。

主办这场葬礼的是一家电器修理公司。旧款 AIBO 自1999年起共销售了约15万台，目前已经停止生产，改成了新款，但是很多老年人仍然希望修好旧款机器狗。有些机器狗实在无法修好，只能用来“捐献”零件，因此就举办了这场特殊的“葬礼”，抚慰那些遭分解的 AIBO 及其主人。

![](https://www.wangbase.com/blogimg/asset/201912/bg2019122206.jpg)

![](https://www.wangbase.com/blogimg/asset/201912/bg2019122207.jpg)

这种葬礼已经举办了8次，每次先由机器人进行致词，随后由2条 AIBO 机器狗朗读佛经，最后再由寺院的住持为“去世”的 AIBO 们诵经超度。

6、[排队领取密码](https://www.zdnet.com/article/more-than-38000-people-will-stand-in-line-this-week-to-get-a-new-password/)

![](https://www.wangbase.com/blogimg/asset/201912/bg2019122406.jpg)

圣诞节前夕，德国法兰克福附近的一所大学，出现了奇特的一幕。师生们在学校 IT 办公室前面排着长队，带着身份证，领取上网密码，38000多人必须在一周内领完。

该校的校园网前几天被恶意病毒感染，全部瘫痪，与外部的网络连接已经断开，每台计算机都必须下线杀毒，为此 IT 部门特别制作了1,200多个装有杀毒软件的 U 盘。而且是杀毒两次，工作日先杀一次，周末收到杀毒软件更新版后再杀一次。

所有人的密码都必须重置。由于电子邮件服务器也被感染，无法通过电子邮件发送，只能让所有人凭身份证到现场领取。

7、**一句话消息**

> - [国际自然保护联盟](https://www.bbc.com/news/science-environment-50690995)发布研究报告，气候变暖使得海洋温度上升，直接导致全球海水的氧气含量下降，海洋生物面临缺氧的问题。

![](https://www.wangbase.com/blogimg/asset/201912/bg2019120710.jpg)

> - [上海警方](https://m.jiemian.com/article/3830537.html)首次使用警用巡逻机器人参与2020跨年夜安保工作。它有4个广角高清摄像机、1个红外热成像及1个变焦高清摄像机，具有人脸识别功能，还可以用中英文语音播放不同的防范宣传内容，自带的升降式云台最高可升至1.8米。

![](https://www.wangbase.com/blogimg/asset/202001/bg2020010704.jpg)

![](https://www.wangbase.com/blogimg/asset/202001/bg2020010705.jpg)

> - [美国一家 App 数据分析公司](https://blog.apptopia.com/2019-worldwide-download-leaders) 发布《2019年全球最受欢迎的安卓应用》，数据来自谷歌 Play 商店，共分十类。下面是游戏类和社交类的排名。

![](https://www.wangbase.com/blogimg/asset/202001/bg2020010706.jpg)

> - [美国电影《爱尔兰人》](https://beforesandafters.com/2019/12/07/de-aging-de-niro/)的主要演员全部年过70，但是电影情节主要发生在主人公四五十岁时，所以全片都使用人工智能算法，对演员影像进行“减龄”处理。

![](https://www.wangbase.com/blogimg/asset/201912/bg2019121005.jpg)

## 文章

1、[我如何找回失去的域名？](https://susam.in/blog/sinkholed/)（英文）

作者拥有的域名，被域名管理当局错误地回收。本文记录了他如何维权，不断投诉，最终要回域名的故事。如果你也失去对域名的控制，可以参考他的做法。

2、[飞机上网的原理与现状](https://onezero.medium.com/what-makes-it-possible-to-browse-the-internet-at-35-000-feet-1afaea83eb5)（英文）

![](https://www.wangbase.com/blogimg/asset/201912/bg2019120401.jpg)

本文介绍民用航班上网的解决方案，以及存在的问题。

3、[日本旅行指南](https://www.goddamnyouryan.com/blog/guide-to-japan/)（英文）

![](https://www.wangbase.com/blogimg/asset/201912/bg2019120505.jpg)

一个美国程序员在日本住了一年以后，写的一份日本旅游的简单指南。

4、[Mithril 框架入门](https://mithril.js.org/)（英文）

Mithril 是一个前端 JS 框架，只有 9.5KB，如果你感到 React 或 Vue 太重，应该看看这个框架。

5、[一元二次方程的新解法](https://www.technologyreview.com/s/614775/a-new-way-to-make-quadratic-equations-easy/)（英文）

![](https://www.wangbase.com/blogimg/asset/201912/bg2019120606.jpg)

古代巴比伦人在4000年前，就发现了一元二次方程的求解公式（上图）。本文提出了一种新解法，可以简化这个公式的推导过程。

5、[Cloud Run 托管网站](https://blog.mrtrustor.net/post/making-this-blog-with-cloud-run/)（英文）

Cloud Run 是谷歌云的一个 Serverless 服务，特点是直接抓取 Docker 镜像文件运行，不用自己部署文件。

本文介绍作者如何使用这个服务，部署自己的静态博客网站。此外，网上还有一份 [Cloud Run 介绍](https://github.com/ahmetb/cloud-run-faq/blob/master/README.md)，也可以参考。

6、[大炮 DDOS 攻击分析](https://cybersecurity.att.com/blogs/labs-research/the-great-cannon-has-been-deployed-again)（英文）

大炮 DDOS 攻击指的是，将恶意脚本通过大型网站分发。只要有人访问被感染的大型网站，就会加载恶意脚本，然后他的浏览器就会向目标网站快速发出大量请求。这样的用户一多，就形成了 DDOS 攻击，导致目标网站下线。

7、[手机如何提高数码照片的质量？](https://blog.letsenhance.io/all/2019/07/09/computational-photographyfrom-selfies-to-black-holes/)（英文）

![](https://www.wangbase.com/blogimg/asset/201912/bg2019121001.jpg)

这篇文章很长，详细介绍了旗舰手机采用的各种措施，让用户拍出更高质量的照片。

8、[为什么他能成为谷歌新当家？皮查伊的登顶之路](https://tech.sina.com.cn/it/2019-12-10/doc-iihnzhfz4783261.shtml)（中文）

![](https://www.wangbase.com/blogimg/asset/201912/bg2019121002.jpg)

![](https://www.wangbase.com/blogimg/asset/201912/bg2019121003.jpg)

随着两位创始人的隐退，印度人皮查伊成为谷歌的最高管理者。皮查伊1972年出生在印度，但家境并不算富裕，小时候家里都没有冰箱，他父亲是个电气工程师，母亲是名速记员。印度理工学院毕业后，来到斯坦福大学就读数学和半导体物理。

9、[Git 原理解释](https://codewords.recurse.com/issues/two/git-from-the-inside-out)（英文）

本文用通俗的示例和图片，解释 Git 进行版本管理的原理。

10、[瑞典视频制作女孩 Simone Giertz 的故事](https://www.wired.com/story/simone-giertz-build-what-you-want/)（英文）

![](https://www.wangbase.com/blogimg/asset/201912/bg2019121114.jpg)

《连线》杂志的长篇文章，介绍29岁的瑞典女孩 Simone Giertz，她在 Youtube 发布视频，拍摄自己如何制造各种机械装置。她的最新作品是把一辆特斯拉汽车，改装成小卡车。去年，她得了良性脑瘤，目前还在接受化疗。从她身上，可以看到国外年轻人在干什么。

![](https://www.wangbase.com/blogimg/asset/201912/bg2019121115.jpg)

![](https://www.wangbase.com/blogimg/asset/201912/bg2019121113.jpg)

## 工具

1、[Elementary OS](https://blog.elementary.io/introducing-elementary-os-5-1-hera/)

![](https://www.wangbase.com/blogimg/asset/201912/bg2019120607.jpg)

一个基于 Ubuntu 的 Linux 发行版，目标用户是不懂计算机的人，用户界面高度模仿 MacOS。

2、[Koko Analytics](https://www.kokoanalytics.com/)

![](https://www.wangbase.com/blogimg/asset/201912/bg2019120608.jpg)

一个 WordPress 插件，用于收集和分析用户访问数据，不使用任何外部服务。

3、[si78c](https://github.com/loadzero/si78c)

![](https://www.wangbase.com/blogimg/asset/201912/bg2019120609.jpg)

早期电子游戏《太空侵略者》的命令行移植版，使用 C 语言编写。

4、[VirtScreen](https://github.com/kbumsik/VirtScreen)

Linux 系统的虚拟桌面  App，可以起一个 VNC 服务，然后用 iPad 或其他设备的 VNC 客户端连接上去，就可以形成扩展桌面。（@[liangguo](https://github.com/ruanyf/weekly/issues/987) 投稿）

5、[cairoshell](https://github.com/cairoshell/cairoshell)

![](https://www.wangbase.com/blogimg/asset/201912/bg2019120908.jpg)

Windows 系统的一个可定制的桌面环境。

6、[knDB](https://github.com/Knove/knDB/blob/master/README.CN.md)

一个轻量级的 Node.js 数据持久化库。（@[Knove](https://github.com/ruanyf/weekly/issues/1000) 投稿）

7、[舒尔特方块游戏](https://github.com/jwenjian/schulte-grid)

![](https://www.wangbase.com/blogimg/asset/201912/bg2019121010.jpg)

舒尔特方格是数字1-25随机分布在25个方格里面，用户按照从小到大的顺序，依次指出每个数字的位置，根据耗时判断注意力水平的高低，详见[百度百科](https://baike.baidu.com/item/%E8%88%92%E5%B0%94%E7%89%B9%E6%96%B9%E6%A0%BC/5372437)。这个游戏最好在手机上玩。（@[jwenjian](https://github.com/ruanyf/weekly/issues/999) 投稿）

8、[svg-text-animate](https://github.com/oubenruing/svg-text-animate)

一个将英语或数字字符，转为 SVG 动画的 JS 库。（@[oubenruing](https://github.com/ruanyf/weekly/issues/1002) 投稿）

9、[githuber-md](https://github.com/terrylinooo/githuber-md)

![](https://www.wangbase.com/blogimg/asset/201912/bg2019121106.jpg)

WordPress 的 Markdown 编辑器插件。

10、[docker-slim](https://github.com/docker-slim/docker-slim)

一个 Docker 镜像文件的瘦身工具，据称最好情况下，可以让镜像文件体积缩小为原来的30分之一。

11、[Cloudflare workers](https://workers.cloudflare.com/)

![](https://www.wangbase.com/blogimg/asset/202001/bg2020010912.jpg)

Cloudflare 正式发布 workers 功能了，允许网站直接部署在它的边缘网络，即 CDN  的每个节点上面。这应该是目前 serverless 最好的方案了。

12、[openEuler](https://openeuler.org/zh/)

![](https://www.wangbase.com/blogimg/asset/202001/bg2020010913.jpg)

华为发布自家的 Linux 发行版 openEuler，基于 CentOS。这是早先的华为 [EulerOS](https://developer.huaweicloud.com/ict/en/site-euleros/euleros) 系统的开源版。根据介绍，主要特点是 ARM64 的完美支持和极高的安全性。

## 资源

1、[深海](https://neal.fun/deep-sea/)

![](https://www.wangbase.com/blogimg/asset/201912/bg2019121501.jpg)

这个网站可以不停往下拉，看看每个深度的海底都有些什么生物。上图是海底45米。

2、[概率、统计和随机过程导论](https://probabilitycourse.com/)

![](https://www.wangbase.com/blogimg/asset/201912/bg2019121706.jpg)

免费的英文本科生《概率和统计论》教科书。

3、[椭圆曲线加密教程](https://www.johannes-bauer.com/compsci/ecc/)

椭圆曲线加密的优点是，密钥较小，但是加密强度保持不变，比特币就是采用这种加密方法。本文是英文教程，解释椭圆曲线加密的原理。

4、[2019年度最佳视觉错觉](http://illusionoftheyear.com/cat/top-10-finalists/2019/)

这是视觉错觉作品比赛的官方网站，评选出了2019年度的最佳作品，都是视频。

5、[火星地图](https://trek.nasa.gov/mars/)

![](https://www.wangbase.com/blogimg/asset/202001/bg2020010906.jpg)

美国宇航局的火星在线地图，谷歌也有一个[类似的网站](https://www.google.com/mars/)。

## 图片

1、[老虎照片](https://twitter.com/NASU_SAFARIPARK)

日本那须野生动物园的推特帐号，总是放他们养的一只老虎的照片。这只老虎的表情有点奇怪，不太像老虎，不知道怎么养成了这样。

![](https://www.wangbase.com/blogimg/asset/201912/bg2019120706.jpg)

![](https://www.wangbase.com/blogimg/asset/201912/bg2019120707.jpg)

![](https://www.wangbase.com/blogimg/asset/201912/bg2019120708.jpg)

![](https://www.wangbase.com/blogimg/asset/201912/bg2019120709.jpg)

2、**旧金山的地形**

旧金山的北面是金门大桥（golden gate bridge），通往马林郡（Marin County）；东面是海湾大桥（bay bridge），通往奥克兰。

![](https://www.wangbase.com/blogimg/asset/201911/bg2019110806.jpg)

![](https://www.wangbase.com/blogimg/asset/201911/bg2019110807.jpg)

![](https://www.wangbase.com/blogimg/asset/201911/bg2019110808.jpg)

## 文摘

1、[等几年，再用新框架](https://medium.com/@karti/learn-new-frameworks-after-a-few-years-not-immediately-f8b44dc0ed72)

在技​​术领域，每个月都有一个新框架。例如，iOS 就有一个新的 UI 框架 SwiftUI。

我的建议是，等待几年再去学习它。不要担心会错过机会，这不是飞机航班，你仍然随时可以登机。任何时候，你都不应该因为害怕落后于潮流，而做出决定技术决定。如果你学习一个 UI 框架，它就应该对你的业务带来帮助，而不是为了学而学。

![](https://www.wangbase.com/blogimg/asset/202001/bg2020010907.jpg)

新技术总是被其制造商大肆宣传，他们不会说：“我们的新东西是平庸的”，他们有动机大肆炒作，以光彩照人的方式谈论自己的产品，这对他们有好处。一些在职业生涯早期的开发人员，也会加入炒作，他们是第一次见到这样的东西，因此非常兴奋。总之，新框架总是有自己的支持者，你问他们这个框架好不好，他们总是会说这很棒。

但是，新框架总是有这样或那样的问题，很少像承诺的那样好。它在某些方面可能会很好，而在其他方面则很糟。文档通常不完整，如何有效使用框架也没有形成规范。一旦你使用了它，团队的其他人也必须学习它，才能让整个团队适应你的代码，这给团队带来了额外的负担。因此，等待几年消除所有这些问题是有意义的。

如果你急于采用一个框架，可能会花费很多时间来研究它，之后很可能会发现，它根本不起作用。或者它确实有效，但不适用于你。再或者它以某种方式工作，但在性能或者向后兼容性上有严重问题。新框架就是一个未知数。

如果你采用了新框架，结果它无法正常工作，而你又必须切换回去，就要付出两次过渡成本。

新框架的出现并不会立即使旧框架过时。例如，Swift 1.0 是2014年发布，但真正可用是在2016年。这也不意味着你2016年就要使用它，因为2016年的版本是最早可投入生产的版本，真正成熟可能要等到2018年的版本。因此，新的语言、工具或框架不会淘汰旧的语言、工具或框架。过渡期会有很多年，在此期间，你可以随时采用新技术。没必要在出现的那年就赶上潮流。

![](https://www.wangbase.com/blogimg/asset/202001/bg2020010908.jpg)

2、[激光武器](https://foxtrotalpha.jalopnik.com/the-laser-weapon-is-really-really-finally-here-1839639499)

美国国防部终于制造出了第一批可以用于实战的激光武器，马上就会装备军队，在诸如悍马车、导弹驱逐舰、战斗机上面部署。

![](https://www.wangbase.com/blogimg/asset/202001/bg2020010909.jpg)

激光以前就用于战场。自从1970年代以来，激光一直用来标记目标，为导弹提供肉眼看不到的瞄准点。激光还用于对目标进行测距，通过发出激光，计算光束到达物体所需的时间，由此可以确定两个位置之间的精确距离，这些信息可用于炮弹的发射。

但是，激光还从来没有直接作为杀伤性的武器，用于战争。传统武器通过炸药释放能量，而激光以电磁形式传输破坏性能量。直接向目标传送能量。

简单说，激光武器将光线集中在高度聚焦的光束之中，然后可以将其指向目标。激光能将能量传递到目标表面，该能量会在目标表面产生热量的快速积累。足够强的激光束会导致金属和其他固体物质融化，易燃液体点燃，弹头爆炸等等破坏。

![](https://www.wangbase.com/blogimg/asset/202001/bg2020010910.jpg)

想象一下激光武器对准飞机的情况。激光可能会燃烧穿过飞机的表面并进入油箱，从而引起火灾。或者，它可能会烧掉飞行员的皮肤，杀死飞行员。激光还可以引爆舰载弹药。甚至有可能激光直接烧断飞机的机翼使其坠毁。

子弹和炸药要占据储藏空间，发射完了就没了，相比之下，激光的优点是只要发射器能够运行，它就可以一直发射下去。激光沿直线传播，与炮弹不同，不受风和重力的影响。激光以光速运行，敌人很难有时间做出反应。

激光武器的缺点是，它的开发很困难，需要大功率及其大量能量，在发射前必须有地方储存能量，怎么储存这么多能量呢。激光设备相当精密，而武器必须坚固耐用，它是否能在战争的严酷环境中正常工作，现在还存在疑问。

激光也是光，理论上敌方可以用镜子，将激光反射回发射方。但是反射镜的表面必须非常干净，且具有高反射性，这在战争时不容易做到。

![](https://www.wangbase.com/blogimg/asset/201911/bg2019110822.jpg)

（图片：美国陆军战车上的激光发射装置）

激光武器的最大缺陷也许在于，它在大气中传播时，会聚集尘埃、水和其他微小颗粒，从而使得光线散射，能量减弱。据估计，足以将一个人切成两半的激光，最终会减弱到只能使他严重晒伤的程度，不一定会使其失去工作能力。随着激光穿过云、雾或烟，问题变得更加严重。传统武器（比如炮弹）本身具有的能量，会全部在目标上释放，与距离无关，但是激光武器的发射距离越远，能量就越弱。

第一种在部队部署的激光武器是美国海军的 AN/SEQ-3 LaWS 激光武器系统。该系统的功率是30千瓦，主要用来对付无人机。该武器的成本为4000万美元，于2014年部署在海军舰艇上。尽管它可以用于战争，但目前还未使用过。

![](https://www.wangbase.com/blogimg/asset/201911/bg2019110823.jpg)

（图片：2014年部署海军的激光发射器，用于击落无人机）

现在，军队开始采购300千瓦的激光武器。据报道，陆军、海军和空军都希望拥有激光武器。陆军要求激光武器能够击落巡航导弹，最终还可以击落炮弹和火箭，为地面部队提供了防御保护。空军希望激光武器可以安装在任何飞机上，以保护飞机免受导弹袭击。美国海军希望安装在军舰上的激光武器，用来防御反舰巡航导弹。

![](https://www.wangbase.com/blogimg/asset/202001/bg2020010911.jpg)

![](https://www.wangbase.com/blogimg/asset/201911/bg2019110821.jpg)

（图片：未来携带激光武器的战斗机）

## 言论与数字

1、

如果蜜蜂从地球消失，人类将只剩下四年的生命。没有蜜蜂，就没有授粉；没有授粉，就没有植物；没有植物，就没有动物；没有动物，就没有人。

-- [爱因斯坦](https://www.ikkaro.net/diy-beehive/)

2、

过去十五年，迪斯尼收购了四家电影公司，成为内容生产的霸主：皮克斯（Pixar，2006），漫威（Marvel，2009），卢卡斯影业（Lucasfilm，2012），21世纪福克斯（21st Century Fox，2019）。

但是，迪斯尼没有亚马逊、Netflix、苹果那样深厚的技术背景。现在，迪斯尼推出了线上视频点播服务“Disney+”，开始弥补这个缺陷。

-- [《迪士尼的流媒体服务首秀》](https://www.bloomberg.com/news/features/2019-11-07/inside-disney-bob-iger-on-star-wars-pixar-and-more)

3、

我最近试图启动一个 React Native / TypeScript 项目，但是整个生态系统使我非常困惑。网上不同的教程建议使用各种不同的工具来创建项目，某些项目模板由于过时，甚至无法编译。所有这些工具没有统一的、及时更新的文档，令我感到这真是一场噩梦。

-- [HN 读者](https://news.ycombinator.com/item?id=21480961)

4、

1955年，英国历史学家帕金森发现，1914年至1928年之间，英国海军舰只的数量减少了三分之二，船员数量减少了三分之一，但官僚的人数每年仍激增近6％。他得出一个结论，官僚组织会自我膨胀，这被称为“帕金森定律”。

-- [BBC](https://www.bbc.com/worklife/article/20191107-the-law-that-explains-why-you-cant-get-anything-done)

5、

也许未来，数据会像人员一样无法自由移动，每进入一个国家，都要经过虚拟海关或边境检查站。

-- [《数字民族主义上升的威胁》](https://www.wsj.com/articles/the-rising-threat-of-digital-nationalism-11572620577)

6、

机器解析 PDF 文件，就是一场噩梦。文本块不是按顺序的，可以以任意顺序出现在文档中，句子和单词都可能在中间被打断。

-- [《英国政府要求以 HTML 发布文档，而不是 PDF》](https://news.ycombinator.com/item?id=21859520)

## 回顾

去年的本周：[《周刊第 38 期》](http://www.ruanyifeng.com/blog/2019/01/weekly-issue-38.html)

![](https://www.wangbase.com/blogimg/asset/201901/bg2019010401.jpg)

## 订阅

这个周刊每周五发布，同步更新在[阮一峰的网络日志](http://www.ruanyifeng.com/blog)、[微信公众号](http://weixin.sogou.com/weixin?query=%E9%98%AE%E4%B8%80%E5%B3%B0%E7%9A%84%E7%BD%91%E7%BB%9C%E6%97%A5%E5%BF%97)和[语雀](https://yuque.com/ruanyf/share/)。

微信搜索“阮一峰的网络日志”或者扫描二维码，即可订阅。

![](http://www.ruanyifeng.com/blogimg/asset/2018/bg2018042311.jpg)

（完）
