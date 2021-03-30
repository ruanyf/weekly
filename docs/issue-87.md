# 科技爱好者周刊：第 87 期

这里记录每周值得分享的科技内容，周五发布。

本杂志开源（GitHub: [ruanyf/weekly](https://github.com/ruanyf/weekly)），欢迎提交 issue，投稿或推荐你的项目。

![](https://www.wangbase.com/blogimg/asset/201912/bg2019121703.jpg)

封面图：美国创业公司耐能，演示彩色印刷的 3D 脸部照片骗过人脸识别（[via](https://www.businessinsider.sg/facial-recognition-fooled-with-mask-kneron-tests-2019-12/)）。

## 刊首语

多年前，我推荐过一篇文章，给所有新加入互联网行业的工程师。它的题目叫做[《不要自称为程序员》](http://www.ruanyifeng.com/blog/2011/10/dont_call_yourself_a_programmer.html)，其中说得最好的、最核心的建议是下面这段话。

> 企业最关心的（或者说唯一在乎的）事情，就是增加收入、降低成本。
> 
> 企业实际上需要的不是程序员，而是能够帮助它们增加收入、降低成本的人。
> 
> 企业雇佣你，是为了让你帮它们完成某个可以增加收入、降低成本的项目，而不是为了让你追求个人的软件成就。

那篇文章可以帮你了解行业的真相，理解很多事情，减少一些幻想。时隔多年，依然推荐。

![](https://www.wangbase.com/blogimg/asset/201912/bg2019121805.jpg)

今天，我想再推荐另外一篇文章[《新工程师要干的五件事》](https://evanliman.to/2019/10/06/so-youre-a-new-grad-software-engineer.html)，谈的是新人应该怎么做。如果说前一篇文章是“道”，这篇文章就是“术” 

它提到，新人加入一个开发团队时，要干五件事。前面四件事是了解技术架构、了解开发流程、补强基础知识、从微小的改善入手（比如关掉几个 issue）。这些都是常识，但是第五件事，很多新人都没意识到，你应该要去做，而且完全有能力做，那就是 **你要为团队写文档** 。

![](https://www.wangbase.com/blogimg/asset/201912/bg2019121807.jpg)

国内的现状是，项目文档很少，或者索性没有，因为大家的精力都被开发占据了，没有余力写文档。新人了解技术细节的方式，就是别人跟你口头说一下，然后自己去看代码。你正好趁着熟悉代码的过程，补写一些文档。不需要写得很好，只要忠实记录代码的线索、架构的细节，能为以后的人（包括你自己）节省一点时间就可以了。

我自己的体会是，写文档对一个人的锻炼是很大的。（1）可以熟悉项目；（2）可以提高表达能力；（3）可以提高技术能力，因为只有理解了代码才能表达出来，文档越清晰，就代表思路越清晰；（4）可以提高个人影响力，文档写得越好，看的人就越多。久而久之，你就会成为项目的代言人，别人有问题就会来找你。

总之，新人要重视写文档，主动为整个团队写文档，对个人成长有帮助，对团队也会有帮助。不停地写，大量地写，现在就开始写。长期中，你会意识到这给自己带来的巨大价值。

## 彩云小译

我们每一期的周刊，一大半的内容是英语的。很多朋友问，怎样才能快速有效地阅读这些英语文章？答案很简单，就是使用翻译工具。

不管什么文章，自动化工具一秒以内就能给出全文翻译，让你快速了解大意，有兴趣再去精读原文，这样就效率很高。尤其是科技类文章，专有名词多，语法比较规范，最适合使用翻译工具。

今天就向大家介绍一款国产的翻译工具——[彩云小译](https://fanyi.caiyunapp.com/#/web)。它有 [Chrome 浏览器插件](https://fanyi.caiyunapp.com/#/web)，也有[手机 App](https://fanyi.caiyunapp.com/#/app)，下载安装后一键就能实现网页的双语显示。

![](https://www.wangbase.com/blogimg/asset/201912/bg2019121705.jpg)

我使用之后，觉得翻译质量不错，而且可定制性也很高，不仅能够英译中，也能中译英，还支持翻译日语。在设置里面打开“自动翻译”，点开网页就能直接显示中文，还支持单词的“划词翻译”。目前，Chrome 插件商店的用户评价高达4.6（满分5分）。

![](https://www.wangbase.com/blogimg/asset/201912/bg2019121506.jpg)

它还有一个特色功能，支持视频字幕翻译。有的网页视频可以外挂字幕（srt 文件），彩云小译能够把英文的文本字幕，实时变成双语字幕。如果是没有字幕的视频，可以安装它的[同传软件](https://www.caiyunapp.com/interpretation/)，就能捕捉系统麦克风的声音，翻译成中文。

![](https://www.wangbase.com/blogimg/asset/201912/bg2019121507.jpg)

此外，如果你想自己开发，还可以调用它的 API，每月100万字之内的翻译都是免费的。

## 资讯

1、[18000年前的狗](https://www.bbc.com/news/world-europe-50586508)

![](https://www.wangbase.com/blogimg/asset/201911/bg2019113004.jpg)

![](https://www.wangbase.com/blogimg/asset/201911/bg2019113005.jpg)

西伯利亚冻土带融化，使得科学家可以得到很多保留在冻土中的标本。最新的发现是一个18000年前的狗。这只狗死的时候只有两个月大，保存状况非常好，毛皮、鼻子和牙齿都完好无损。

DNA 测序发现它跟现在的狗不一样，属于狼到狗之间的过渡品种，因此算是已知最古老的狗。早前的一项研究认为，人类在20,000至40,000年前开始训化狼，使其变成狗。

![](https://www.wangbase.com/blogimg/asset/201911/bg2019113006.jpg)

2、[酒驾锁](https://www.cbc.ca/news/canada/montreal/drunk-driving-twice-quebec-breathalyzer-for-life-1.5369145)

![](https://www.wangbase.com/blogimg/asset/201911/bg2019113007.jpg)

加拿大魁北克地处高寒地带，喝酒的人非常多，酒驾每年造成100人死亡、220人重伤和1,800人轻伤。为了遏制酒驾，魁北克最新规定，如果十年内两次酒驾，该人以后每次开车之前都必须向呼吸分析仪吹气，一旦发现喝过酒，汽车发动机将无法点火。

发动机与呼气分析仪之间有联锁装置，可以获取后者的读数。如果警察发现没有安装联锁装置，驾驶员将受到严厉处罚，第一次发现罚款1500美元，第二次发现拘禁90天，第三次发现终身拘禁。这是目前全世界对酒驾的最严厉立法。

3、[下一代充电头](https://www.theverge.com/circuitbreaker/2019/1/30/18203879/gan-chargers-anker-powerport-atom-pd-1-ravpower-45w)

![](https://www.wangbase.com/blogimg/asset/201912/bg2019120304.jpg)

笔记本电脑的电源体积有望大幅缩小，新一代电源使用 GaN（氮化镓）取代传统的硅，使得大功率电源可以做得很小。上图左侧是传统的 5w 苹果手机充电器，后面两个是 30w 和 45w 的新型充电器，可以看到它们的体积非常小。

氮化镓的能源效率更高，转化为热能的能量比较少，这意味着这种充电器不会烫手或爆炸。

4、[人脸识别的医院挂号](https://mp.weixin.qq.com/s/YzXElihDrwUzLoqV67BPzw)

![](https://www.wangbase.com/blogimg/asset/201911/bg2019112708.jpg)

国内大医院的专家门诊很难挂号，半夜排队都不一定能挂到，很多黄牛都在倒卖专家门诊号。为了解决黄牛屡禁不止的问题，复旦大学附属上海肿瘤医院推出专家号的人脸识别系统。

预约挂号的人在挂号机前提交患者的身份证，挂号机会用摄像头拍摄人脸，如果身份证照片与人脸不一致，将无法进一步操作，这样避免了黄牛拿别人的身份证挂号。考虑到家属、亲友代挂号的情况，医院还规定每位患者可以绑定一位代挂号人的身份认证信息。

5、[2019年度颜色](https://www.nytimes.com/2019/12/04/style/pantone-color-2020-classic-blue.html)

![](https://www.wangbase.com/blogimg/asset/201912/bg2019120610.jpg)

Pantone 是全球著名的配色公司。该公司每年都会评选本年度的最佳颜色，已经持续了21年。今年的最佳颜色是“经典蓝”，即比亮蓝色更暗一些的蓝色。

该公司称，“经典蓝”是蓝莓、百事可乐饮料罐和天空的颜色，是“一天结束时那种美丽的颜色”。这种颜色“无侵略性”、“易于相处”、显示“诚实”，表露出“对可靠、稳定的基础的渴望”，让人感到“提供了庇护所”。同时，该公司还认为，蓝色已经不再代表忧郁，年轻人不再将蓝色与悲伤联系在一起，“我们认为那是老一辈的反应。”

6、[皮肤薄膜](http://sh.people.com.cn/n2/2019/1109/c134768-33522773.html)

![](https://www.wangbase.com/blogimg/asset/201912/bg2019120701.jpg)

日本花王公司推出了一种皮肤薄膜。只要在脸上喷涂一层极细的白色粉末，随后用手掌轻轻按压，不一会儿就会形成一层超细薄膜，覆盖于皮肤，使得肌肤十分细滑，而且不易脱落，根本看不出来，好像什么都没涂一样。而且这种薄膜有毛细管，透气性好，不影响皮肤的呼吸。

它可以用来掩盖色斑，皮肤保湿，另外也可以直接在上面化妆，卸妆时只要直接撕下即可。该产品价格不菲，每罐售价高达5万日元（约合人民币3239元）。

![](https://www.wangbase.com/blogimg/asset/201912/bg2019120702.jpg)

![](https://www.wangbase.com/blogimg/asset/201912/bg2019120703.jpg)

![](https://www.wangbase.com/blogimg/asset/201912/bg2019120704.jpg)

7、**一句话消息**

> - [IBM 公司](https://www.extremetech.com/computing/301863-ibm-our-mac-using-employees-outperform-windows-users-in-every-way)统计发现，一名客服可以支持 5400 个Mac用户或者242个 PC 用户。原因只有5%的 Mac 用户向客服求助，而PC 用户的求助率达到40％。每当一个最终用户选择 Mac 而不是 PC时，可以为 IBM 可以节省273美元至543美元。

> - [一些法国议员](https://www.cnbc.com/2019/11/29/french-lawmakers-hope-to-ban-black-friday-due-to-environmental-impact.html)提出，黑色星期五购物节（西方的双十一）会导致浪费和过度消费，应该立法禁止。

> - [美国加州](https://qz.com/1727790/californias-new-law-bans-schools-from-starting-before-8am/)规定，初中上课不得早于上午8点，高中不得早于8点半，目的是让学生多睡一会。

> - [微软](http://www.sohu.com/a/360216894_499322 )宣布，将在明年底发售下一代游戏主机 Xbox Series X。它的造型是一个竖向的长方体，顶部有散热的栅格，性能是 Xbox One X 的四倍。另外，PS 5 也将在明年发售。

![](https://www.wangbase.com/blogimg/asset/201912/bg2019121411.jpg)

![](https://www.wangbase.com/blogimg/asset/201912/bg2019121412.jpg)

> - [Oracle 公司](https://www.servethehome.com/oracle-shows-1060-raspberry-pi-supercomputer-at-oow/)制作了一个树莓派集群，包含1060个树莓派 3B+。

![](https://www.wangbase.com/blogimg/asset/201911/bg2019112201.jpg)

![](https://www.wangbase.com/blogimg/asset/201911/bg2019112202.jpg)

> - [以色列科学家](https://petapixel.com/2019/11/13/this-algorithm-can-remove-the-water-from-underwater-photos-and-the-results-are-incredible/)开发出一种图像处理技术，可以从水下照片中“去除水”，包括水波和光影。下面是原图和“去水”后的图片。

![](https://www.wangbase.com/blogimg/asset/201911/bg2019111504.jpg)

> - [俄罗斯一个健美运动员](https://metro.co.uk/2019/11/20/popeye-bodybuilder-3lbs-dead-muscle-removed-injecting-biceps-11186294/)为了制造凸起的二头肌，向手臂注射凡士林，结果在体内结块，导致肌肉坏死，不得不动手术取出。

![](https://www.wangbase.com/blogimg/asset/201911/bg2019112101.jpg)

![](https://www.wangbase.com/blogimg/asset/201911/bg2019112102.jpg)

## 文章

1、[如何绕过 GitHub 的 OAuth 认证](https://blog.teddykatz.com/2019/11/05/github-oauth-bypass.html)（英文）

作者介绍他如何通过发出一个`HEAD`请求，来绕过 GitHub 的 OAuth 认证，获取没有授权的数据。GitHub 为这个漏洞支付给他25000美元的奖金。

2、[Pixar 的技术](https://www.fxguide.com/fxfeatured/the-tech-of-pixar-part-1-piper-daring-to-be-different/)（英文）

![](https://www.wangbase.com/blogimg/asset/201911/bg2019110809.jpg)

![](https://www.wangbase.com/blogimg/asset/201911/bg2019110810.jpg)

![](https://www.wangbase.com/blogimg/asset/201911/bg2019110811.jpg)

本文通过图片，介绍 Pixar 公司如何制作动画电影。

3、[CSS 打印样式10分钟教程](https://www.paperplane.app/blog/print-css-basics/)（英文）

一篇简短的教程，讲解如何使用 CSS 设置网页打印时的样式。

4、[JSON 解析器的最大嵌套层数](https://github.com/lovasoa/bad_json_parsers/blob/master/README.md)（英文）

JSON 数据结构可以嵌套多少层，标准没有提及。作者就写了一个脚本，去测试每种语言的 JSON 解析器最多可以解析多少层嵌套的 JSON，然后将结果列成表格，比如 Node.js 可以解析5712层。

5、[20行 Shell 脚本的马尔可夫链](https://0x0f0f0f.github.io/posts/2019/11/really-fast-markov-chains-in-~20-lines-of-sh-grep-cut-and-awk/)（英文）

马尔可夫链的含义是根据概率推测下一项最可能的结果。本文使用20行 Shell 脚本实现一个简单的马尔可夫链。

6、[Linux 软件包的打包方式](https://www.ibm.com/developerworks/cn/linux/l-lo-rpm-build-package/index.html)（中文）

本文以一个最简单的 Hello World 程序为例，解释如何打包成一个 RPM 软件包。

7、[实时协同编辑的实现](https://yafeilee.com/blogs/100)（中文）

本文以作者自己开发的 ShowMeBug 应用为例，介绍如何实现多人同时编辑一篇文档。（@[windy](https://github.com/ruanyf/weekly/issues/952) 投稿）

8、[我对 Rust 语言的第一印象](https://deepu.tech/first-impression-of-rust/)（英文）

本文是一篇 Rust 语言的入门教程，作者整理了自己的学习笔记，讲解了基本语法。

9、[什么是瀑布式开发？](https://martinfowler.com/bliki/WaterfallProcess.html)（英文）

![](https://www.wangbase.com/blogimg/asset/201911/bg2019111503.jpg)

瀑布式开发是敏捷开发之前的传统方式，将整个过程分成几个大步骤，每个步骤完成以后才能推进下一步。本文是马丁·福勒大师解释，瀑布式开发的含义，以及为什么敏捷开发优于它。

10、[为什么 Python 3 升级需要这么长时间？](https://stackoverflow.blog/2019/11/14/why-is-the-migration-to-python-3-taking-so-long/)（英文）

这篇文章探讨了，为什么 Python 2 升级到 Python 3 花了这么长时间（超过10年）？主要原因有两个，一是企业升级的成本很高，且有很大风险，二是 Python 3 一开始的时候优点并不多， 没有足够的升级诱因。

11、[海盗湾正在尝试高质量的视频流播放](https://torrentfreak.com/the-pirate-bay-is-trialing-high-quality-video-streaming-links-191209/)（英文）

海盗湾是世界最大的 BitTorrent 文件下载分享网站，现在添加了一个视频播放功能，可以跳到一个叫做 BayStream 的新平台上，播放热门的视频文件。

## 工具

1、 [vy](https://github.com/vyapp/vy)

![](https://www.wangbase.com/blogimg/asset/201911/bg2019111412.jpg)

一个命令行的极简风格的 IDE。

2、[必收](http://bishouapp.com)

![](https://www.wangbase.com/blogimg/asset/201911/bg2019111414.jpg)

一个收集和订阅外部内容的应用，有手机端和桌面端，可以收藏网址、微信文章、头条文章等。（@[sinner-xing](https://github.com/ruanyf/weekly/issues/964) 投稿）

3、[invidious](https://github.com/omarroth/invidious)

![](https://www.wangbase.com/blogimg/asset/201911/bg2019111506.jpg)

Youtube 的开源前端，等于为 Youtube 换了皮肤，可以自己搭建实例。

4、[p2](https://github.com/crislin2046/p2.)

一个极简的 PDF 文件转 PNG 图片的开源服务器，我觉得挺好用，查看 [Demo](https://secureview.cloudbrowser.xyz/secretpage-canneverbefound.html)。

5、[Same Page 2](https://chrome.google.com/webstore/detail/same-page-2/bldcellajihanglphncgjmceklbibjkk)

![](https://www.wangbase.com/blogimg/asset/201911/bg2019111701.jpg)

Chrome 浏览器插件，让浏览同一个网页的访问者互联聊天，[源码](https://github.com/Same-Page/front-and-back)在 GitHub。

6、[Joplin](https://github.com/laurent22/joplin)

![](https://www.wangbase.com/blogimg/asset/201911/bg2019111704.jpg)

一个笔记和待办事项软件，支持桌面、手机和命令行，可以多端同步。

7、[code-surfer](https://github.com/pomber/code-surfer)

![](https://www.wangbase.com/blogimg/asset/201911/bg2019111711.jpg)

一个以幻灯片的形式展示源码的工具。

8、[配色可用性查看工具](https://whocanuse.com/)

这个网站可以查看，某个配色方案对于不同视力障碍人群的可用性，比如色盲、白内障、青光眼患者能不能看到，并给出该方案的评分。

9、[远程浏览器](https://browsergap.xyz/)

该网站提供免费的远程浏览器，用户可以在本地浏览器里面打开远程浏览器，再通过后者访问网站。该站的[代码开源](https://github.com/dosycorp/browsergap.ce)。

10、[zim](https://zim-wiki.org/index.html)

![](https://www.wangbase.com/blogimg/asset/201911/bg2019111807.jpg)

一个桌面端的 Wiki 编辑器，让你维护一个储存在本地的 Wiki。

## 资源

1、[交互式线性代数教程](https://textbooks.math.gatech.edu/ila/)

一个免费的线性代数英文教程，可以在线阅读，也提供 PDF 下载。

2、[逐行剖析 Vue.js 源码](https://nlrx-wjc.github.io/Learn-Vue-Source-Code/start/)

一组中文的系列文章，从初学者的角度，将 Vue.js 分成九个模块讲解源码。（@[NLRX-WJC](https://github.com/ruanyf/weekly/issues/977) 投稿）

3、[机器学习的数据集](https://en.wikipedia.org/wiki/List_of_datasets_for_machine-learning_research)

维基百科的一个列表，收集各种用于机器学习训练数据的数据集，总数有几百个。

4、[微积分图说教程](https://0a.io/chapter1/calculus-explained.html)

一篇英文的微积分入门教程，使用图片解释微积分的基本概念。

5、[古埃及女王头像的 3D 打印源文件](https://www.thingiverse.com/thing:3974391)

![](https://www.wangbase.com/blogimg/asset/201912/bg2019120103.jpg)

![](https://www.wangbase.com/blogimg/asset/201912/bg2019120104.jpg)

古埃及女王 Nefertiti 的头像制作于公元前1345年，是柏林博物馆的镇馆之宝。现在，这个头像的 3D 打印源文件放上了网，可以免费下载。这次扫描的精度非常高，可以打印出跟原件完全一致的复制品。

## 图片

1、[Basecamp 广告](https://www.seroundtable.com/basecamp-google-ad-28161.html)

![](https://www.wangbase.com/blogimg/asset/201910/bg2019102104.jpg)

Basecamp 公司最近在谷歌的搜索页上，做了一个广告，题目叫做“我们不想投放此广告”。

> “我们是这个搜索词排名第一的公司，但谷歌允许其他公司在我们上面做广告。所以我们在这里，一家很小的独立公司向一家大型科技公司支付赎金。”

2、[世界上最危险的桥](https://www.dailymail.co.uk/travel/travel_news/article-3428130/Is-dangerous-bridge-world-rotting-roadway-Russia-daredevils-repair-cars-just-INCHES-edge.html)

俄罗斯贝加尔湖地区有两座大桥，铁路桥用来通行火车，旁边的 Kuandinsky 大桥通行汽车和行人。

![](https://www.wangbase.com/blogimg/asset/201908/bg2019083002.jpg)

这座桥只有两米宽，单车道，没有护栏或任何安全措施，司机一不小心就会掉到下面的河里。

![](https://www.wangbase.com/blogimg/asset/201908/bg2019083003.jpg)

该桥建成三十年来从来没有维修过，整个桥面的木板都腐烂了，遇到下雪天，桥上的积雪非常滑，而且还有强风，堪称世界上最危险的桥。

![](https://www.wangbase.com/blogimg/asset/201908/bg2019083004.jpg)

![](https://www.wangbase.com/blogimg/asset/201908/bg2019083007.jpg)

## 文摘

1、[锂电池的问题](https://www.engineering.com/ElectronicsDesign/ElectronicsDesignArticles/ArticleID/17435/Will-Your-Electric-Car-Save-the-World-or-Wreck-It.aspx)

![](https://www.wangbase.com/blogimg/asset/201912/bg2019121902.jpg)

电动车使用锂电池。锂电池的优点是能量效率高，可以达到60%-80％，内燃机的能量效率为20％-60％。

锂电池的缺点是能量密度。目前，每公斤锂电池可以储存0.2度电，而每公斤汽油储存的能量相当于2度电，即汽油的能量密度是锂电池的10倍。可以计算一下，60升的汽车油箱可以加40多公斤汽油（汽油密度是每升0.72公斤），换成储存同样能量的锂电池，需要400多公斤。

这就是说，一辆电动汽车需要携带0.4吨的锂电池，才能达到汽油车携带的能量。

![](https://www.wangbase.com/blogimg/asset/201912/bg2019121903.jpg)

锂电池的寿命也是一个问题。手机的锂电池大约可用3年，充电/放电周期超过500次，汽车锂电池的寿命不能这么短。为了使电池寿命尽可能长，阴极和阳极需要三种最佳材料：钴，镍和石墨。

更大的问题是锂元素的储量不足。锂元素主要来自安第斯山脉的“锂三角”（阿根廷，智利和玻利维亚之间的区域），中国和澳大利亚也拥有一些储量。智利占世界锂储量的三分之一，号称“锂的沙特阿拉伯”。开采锂矿对环境污染很大，在智利的一些地区，65％的水用于锂生产，它们都可能被化学品污染。

![](https://www.wangbase.com/blogimg/asset/201909/bg2019090907.jpg)

石墨、镍、钴的开发也都对环境有破坏性。全世界一半的钴是在刚果民主共和国生产的。2014年，联合国儿童基金会表示，大约有4万名儿童在该国南部的矿井中工作，其中许多人开采钴。

![](https://www.wangbase.com/blogimg/asset/201909/bg2019090908.jpg)

锂的回收率目前很低。澳大利亚只有2%的锂电池被回收利用，其余的则留在垃圾填埋场腐烂。问题不是公众把手机扔进垃圾桶，而是从锂电池回收锂的成本很高，高于开采锂矿，而且回收的锂也不纯。

另外，制造锂电池需要大量能量，有研究报告称，制造一辆电动汽车的碳排放，比制造汽油车多一吨。

很明显，在气候灾难中，锂电池不是解决世界能源问题的灵丹妙药，我们需要解决电池问题的新技术。

2、[我吃了毒蘑菇](http://blog.mycology.cornell.edu/2006/11/22/i-survived-the-destroying-angel/)

2006年7月18日，星期二，一个永生难忘的日子。下班后我去纽约的一个公园散步。走出树林时，我发现了一些刚长出来的白色蘑菇。

![](https://www.wangbase.com/blogimg/asset/201910/bg2019101801.jpg)

我摘了三个回家，用橄榄油炒熟，作为配菜食用。老实说，它们没有那么好吃，味道很平淡。

![](https://www.wangbase.com/blogimg/asset/201910/bg2019101802.jpg)

晚饭后，我去跳舞，向我的朋友吹嘘，我采了一些野蘑菇作为晚餐。一个朋友问我：“它们都是白色的吗？”

我说：“是的。”

她说：“妈妈告诉我不要吃全白蘑菇。”

我说：“我很好，我知道我在做什么，我没有不适。”

回家后，我又吃了一些玉米片，喝了一些苹果汁，然后在晚上11点左右睡觉。当时，我的感觉很好。

大约在凌晨4:30和5:00之间，我醒过来，感觉不适。以前食物中毒时，我有同样的感觉。我去了洗手间，一下子就强烈呕吐，还有腹泻。那一刻，我知道我可能错食了毒蘑菇。

接下来的三个小时中，我不断地去洗手间。到了早晨7:30，我疼得在床上滚来滚去。我找到了一本蘑菇方面的书籍，发现我可能吃了一种叫做鹅膏菌的毒蘑菇。它的中毒症状是，食用后6～8小时出现呕吐、腹泻或严重便秘。它会破坏肝脏，50％到80％的食用者死亡。

我立刻打电话给毒物控制中心。他们建议我回到昨天摘蘑菇的地方，随身带一个以进行识别，然后自己去当地的急诊室。

我强撑着出门回到公园，在地上捡了一个蘑菇。出门前，我还拿了前一天晚上扔进垃圾桶的一根蘑菇茎。然后，开车去急诊室。

大约 9:30，我到了医院，接待员问：“我能为您做什么？”我说，我觉得自己不小心吃了毒蘑菇。她让我坐着等。

等了20分钟后，有人来接我。他们给我静脉注射以补充体液，同时去鉴定我带来的蘑菇。一阵子以后，有人过来说，康奈尔大学的真菌学家已经确定了，我确实是鹅膏菌蘑菇中毒。

接着，他们做的第一件事是，让我喝一杯黑色的木炭饮料。大约半小时后，急诊医生告诉我，他们找了救护车，将我送往纽约的斯特朗纪念医院。我之所以被送往这家医院，是因为他们是纽约州北部唯一可以肝脏移植的医院，治疗毒蘑菇的方法通常是肝移植。如果我发生肝脏衰竭，在那里可以立刻移植肝脏。

到达斯特朗纪念医院后，我被直接送往急诊室，每2小时抽血一次，以监测肝脏和肾脏的毒素水平。他们正准备对我进行所有必要的测试，以备万一肝脏衰竭时为我做移植。他们还给了我大量的青霉素和水，补充体液。整个晚上，我都无法入睡。

第二天，医生们不停问我问题，看我是否清醒。如果发生肝脏衰竭，我将会神志不清。有一次，一位医生进来问我“圆周率Pi是什么？”。由于没有睡眠，我的头脑很乱，差点回答不了。

这天晚上，我被送进重症监护室。医生要求我签署授权书，紧急时，家人可以允许对我进行肝脏移植。不知何故，到了深夜，我的肝脏里面的毒素水平达到了峰值，然后竟然开始下降，这意味着我可能可以在没有肝移植的情况下康复。到了清晨，毒素水平没有再上升，我被送回了病房。

后面的一天，尽管我的肝脏毒素数量下降了，但肾脏的毒素数量仍没有下降。我还处在观察状态中，医生评估我是否需要肾脏透析。

到了星期天，各种指标都接近正常了，我体内所有的管子都移走了，我起床在护士站附近走了几步，护士们鼓掌。

7月24日，星期一，我出院了。我感到很幸运，真的很幸运。我后来才知道，2006年美国有三个鹅膏菌蘑菇中毒的病例，我是唯一的幸存者，其他两个都死了。

## 言论与数字

1、

我们都知道，如果可以回到过去，改变任何一件小事情，都将极大地改变未来。然而，几乎没有人想到，今天只要小小改变，就会改变自己的未来。

-- [BenSassiAladin@Twitter](https://twitter.com/BenSassiAladin/status/1186962541815177216)

2、

在产业界中，您需要证明你的产品，并最终赚钱，这样才能成功。

学术界不是这样。学者发表的论文几乎没有用处，但是只要其他学者引用，他就成功了。

-- [HN 读者](https://news.ycombinator.com/item?id=21350848)

3、

你知道，Instagram 被10亿美元收购时，只有12个员工吗？

-- [HN 读者](https://news.ycombinator.com/item?id=21359505)

4、

纳德拉（Nadella）接手微软 CEO 时，遇到的最严重历史遗留问题是：公司充满了大量早就功成名就和发财的老员工，你怎样领导公司走向不一样的未来呢？

-- [《一个微软前员工的思考》](https://onezero.medium.com/speaking-truth-to-power-reflections-on-a-career-at-microsoft-90f80a449e36)

5、

我口袋里有一个小设备，可以访问几乎全部的人类知识。我却用它与不认识的人进行毫无意义的争论，并看猫的照片。

-- [HN 读者](https://news.ycombinator.com/item?id=21360284)

## 招聘信息

周刊讨论区的[《谁在招人？》](https://github.com/ruanyf/weekly/issues/983)，有大量工作/实习岗位，欢迎查看。

如果你的团队需要招人，可以免费在那里张贴招聘信息。如果希望发在周刊上，请联系我（Email:  yifeng.ruan@gmail.com ），每条价格 300 元。

1、**黑帕云**

[黑帕云](https://hipacloud.com)是位于武汉光谷的创业公司，主要构建新型无代码企业应用搭建平台，帮助企业业务人员将业务快速数字化。可以通过公众号米高说(migaoshuo) 了解更多情况。

招聘岗位：前端架构师、资深 SaaS 产品经理。欢迎加入创始团队，联系方式为 mechiland@gmail.com

2、 **易路软件**  
  
[易路软件](https://www.ersoft.cn/)聚焦企业人力资源 SaaS 领域，致力于以复杂薪酬计算为核心的“移动互联网+员工服务”研发及运营。工作地点：上海闵行区。
 
招聘前端工程师，参与公司产品研发，包括不限于 PC 端、H5、小程序、Node 服务。详细要求和联系方式看[这里](https://github.com/ruanyf/weekly/issues/983#issuecomment-561113380)。

## 回顾

去年的本周：[《周刊第 35 期》](http://www.ruanyifeng.com/blog/2018/12/weekly-issue-35.html)

![](https://www.wangbase.com/blogimg/asset/201812/bg2018121401.jpg)

## 订阅

这个周刊每周五发布，同步更新在[阮一峰的网络日志](http://www.ruanyifeng.com/blog)、[微信公众号](http://weixin.sogou.com/weixin?query=%E9%98%AE%E4%B8%80%E5%B3%B0%E7%9A%84%E7%BD%91%E7%BB%9C%E6%97%A5%E5%BF%97)和[语雀](https://yuque.com/ruanyf/share/)。

微信搜索“阮一峰的网络日志”或者扫描二维码，即可订阅。

![](http://www.ruanyifeng.com/blogimg/asset/2018/bg2018042311.jpg)

（完）
