# 科技爱好者周刊（第 220 期）：人工智能的机会在哪里

这里记录每周值得分享的科技内容，周五发布。

本杂志开源（GitHub: [ruanyf/weekly](https://github.com/ruanyf/weekly)），欢迎提交 issue，投稿或推荐科技内容。

周刊讨论区的帖子[《谁在招人？》](https://github.com/ruanyf/weekly/issues/2542)，提供大量程序员就业信息，欢迎访问或发布工作/实习岗位。

## 封面图

![](https://cdn.beekka.com/blogimg/asset/202208/bg2022082517.webp)

重庆连日高温，导致嘉陵江水位急剧下降，江底的浅滩都露出来了，千厮门大桥的桥墩下完全没水了。（[via](http://www.news.cn/local/2022-08/17/c_1128922377.htm)）

## 本周话题：人工智能的机会在哪里

[OpenAI 公司](https://openai.com/blog/dall-e-now-available-in-beta/)的人工智能模型 [DALL·E 2](https://openai.com/dall-e-2/)，最近向社会公众开放。

![](https://cdn.beekka.com/blogimg/asset/202208/bg2022082004.webp)

它可以根据文本生成图片，有点像童话里面的“魔镜”。你告诉魔镜想看什么，它就向你展示什么。目前的[价格](https://www.163.com/dy/article/HCSNPB8F05118HA4.html)是15美元生成460张图片，平均每张图0.03美元（约为人民币两角）。

人们马上发现，这个工具有实际用途。

数据库查询软件 [OctoSQL](https://github.com/cube2222/octosql) 缺少一个 Logo，作者就描述了一下想要什么 Logo。

> 一只可爱的小章鱼戴着黄色安全帽，玩耍着彩色珍珠，充满活力和喜悦，图片背景为黑色。

DALL·E 2 给了他下面的图片。

![](https://cdn.beekka.com/blogimg/asset/202208/bg2022082403.webp)

这个 Logo 现在就放在他的项目首页。当然，不是一次就得到了最后的成品，中间经过了多次调整，具体可以看[他的文章](https://jacobmartins.com/posts/how-i-used-dalle2-to-generate-the-logo-for-octosql/)。

另一个开发者尝试生成博客文章的[插图](https://deephaven.io/blog/2022/08/08/AI-generated-blog-thumbnails/)。他有一篇 Docker 容器的介绍文章，插图描述是“一只蓝鲸背上有成堆的集装箱”，模型给出了下面的图片。

![](https://cdn.beekka.com/blogimg/asset/202208/bg2022082404.webp)

Go 语言数据流操作的文章，图片描述是“一个毛绒绒的蓝色地鼠，在多个显示器上编程”，得到了下图。

![](https://cdn.beekka.com/blogimg/asset/202208/bg2022082405.webp)

上面的例子可以看出，**对于个人开发者和小企业，这个工具简直是天上掉下来的免费设计师。**

即使对于真正拥有设计师的大公司，它也很有用。有人拿着它生成的图片“宇航员在月球骑马”，在推特上面[询问](https://ark-invest.com/newsletters/issue-323/)艺术家：“**如果让你画下面这张图，需要多久？**”

![](https://cdn.beekka.com/blogimg/asset/202208/bg2022082005.webp)

回答的平均数是5.25个小时，而 DALL·E 2 实际只花了22秒。这意味着，**人工智能可以节省99.9%的设计师时间！** 这些节省出来的时间，就可以用在其他方面，为公司创造更大价值。

其实，最经济的做法是，设计师负责跟客户（或项目经理）沟通，搞清楚对方想要什么设计，然后把需求输入软件，让 DALL·E 2 生成实际作品即可，最多再做一些人工的修补。

说到这里，大家应该都看出来了，DALL·E 2 能部分替代设计师。它比设计师更快更便宜，又能完成实际工作，很可能会减少设计师的招聘需求，还可能拉低设计师的薪资。

悲观的朋友也许觉得，这是人工智能抢走工作岗位的又一个例子。这种想法不算错，**但是从相反的角度看，这恰恰是人工智能带来的机会。**

以前请不起设计师的项目，现在可以有设计资源了；以前只有5000元设计费的项目，现在可以省下这笔钱，还能有多个设计可以选择。这就是人工智能为所有人创造的机会。

我们不应该想着去跟人工智能竞争，那样的结局肯定是悲观的，**而要把人工智能看成放大自己能力、扩大成果的一个机会。**

人工智能正在遍地开花，影响的绝不仅仅是设计师：GitHub 公司的 Copilot 软件会自动生成代码（替代程序员），OpenAI 公司的 GPT-3 模型会生成文本（替代作家），Deepmind 公司的 Alphafold 模型会预测蛋白质结构（替代生化学家）…… 而且，它们还在以极快速度进化，每天都变得更加“智能”。

我认为，理智的态度不是去挑战或否定人工智能，幻想人类有胜过它们之处，也不是感到焦虑和绝望。唯一可行的选择就是把它们看成是一个机会，它们是更好更值得学习和使用的工具，我们应该主动去了解这些模型，适应它们，使用它们，尽快将它们转化为自己的生产力。

如果我是一个设计师，现在就会学习使用 DALL·E 2，看看怎么发挥它的最大作用。毕竟如果这种模型会成功，肯定离不开推广和操作它的人，机会也许就在这里，与其把它留给别人，不如早点拿在自己手里。

## 稀土开发者大会资料

上月底，[稀土掘金社区](https://juejin.cn/?utm_source=ryfzk)办了[第二届开发者大会](https://conf.juejin.cn/xdc2022/?utm_source=ryfzk)。

周刊发过活动预告，希望大家报名看现场直播。因为他们这一次请了[很多人](https://conf.juejin.cn/xdc2022/#s8?utm_source=ryfzk)，两天排了18个技术专场，近百场演讲。

![](https://cdn.beekka.com/blogimg/asset/202208/bg2022081506.webp)

那一天，我也上线看了。下面分享几个印象比较深的演讲，它们的视频和 PPT 现在都上网了。

1、

首先，开幕式的当天上午是 Vue.js 创始人尤雨溪的演讲。

他主要讲了两点。第一点是 React Hooks 写法的一些缺点，其他框架（包括 Vue.js）如何克服。

第二点比较有趣。他提到，**框架逐渐变成一个“中间层”。** 

框架的上层是一些全栈框架（比如 Next.js 和 Nuxt），将前后端打通。下层是一些二进制工具（下图），都不是用 JS 写的，主要用原生的编译语言实现。

![](https://cdn.beekka.com/blogimg/asset/202208/bg2022081407.webp)

因此在未来，前端框架可能会向“中间层工具”发展。

2、

另一个不错的演讲，来自微软工程师、[Dapr](https://dapr.io/) 的维护者敖小剑。

![](https://cdn.beekka.com/blogimg/asset/202208/bg2022081502.webp)

他谈了一个 Java 开发者普遍关心的问题：**微服务 + 容器 + serverless 这些云工具，正在蚕食大型 Java 系统的市场**，那么 Java 和 Spring 框架应该怎样面对云原生的挑战？

还有两个演讲也蛮有意思。（1）飞书的产品负责人陈满砚，介绍如何管理300人的团队，做出飞书这个产品。（2）中兴通讯的工程师陈旭，介绍可视化的多人实时编辑的算法实现。

3、

现在，[所有演讲视频](https://conf.juejin.cn/xdc2022/?utm_source=ryfzk)都上网了，就在稀土开发者大会的官网。

这些演讲的 PPT 免费下载，一共78个文件，包括上面我提到的那几个。**官方把这些 PPT 做成了一本完整的掘金小册**，省得大家一个个下载了。 

![](https://cdn.beekka.com/blogimg/asset/202208/bg2022082406.webp)

[点击这里](https://juejin.cn/book/7127092198096502822?utm_source=ryfzk)或者扫描二维码，就可以免费阅读这些 PPT 了，它需要一个掘金账号。另外官方还有不少礼品，阅读小册的朋友都有机会抽奖，详见[抽奖说明](https://mp.weixin.qq.com/s/EUWEcOjQKque61Jc_PqZKA)。

我顺便提一下，[“掘金小册”](https://juejin.cn/course?utm_source=ryfzk)其实是一个不错的知识变现渠道。如果你有值得分享的知识，愿意写成一本系统性的小册子，就可以申请在他们的官网上架。你自己定价，如果写得不错，官方还会帮你推广，有兴趣的朋友可以试试看。

## 科技动态

1、[地铁限电](https://www.cnbeta.com/articles/tech/1307717.htm)

由于高温限电，重庆地铁短暂地关闭了车站和车厢的照明，出现了在微光中乘坐地铁的奇特景像。

![](https://cdn.beekka.com/blogimg/asset/202208/bg2022082518.webp)

![](https://cdn.beekka.com/blogimg/asset/202208/bg2022082519.webp)

车厢两端 LED 显示屏还亮着，使得整节车厢泛着红光，给人一种“赛博朋克”的感觉。

![](https://cdn.beekka.com/blogimg/asset/202208/bg2022082513.webp)

这些照片反映了现代社会对能源的依赖。提醒我们，一旦能源不足，城市将变成什么样。

![](https://cdn.beekka.com/blogimg/asset/202208/bg2022082520.webp)

2、[物联网的可见光通信](https://kiwink.io/)

家用电器如何连接手机？现在的方案都是电器内置蓝牙或 WiFi，这样大大增加了成本和复杂性。

一家英国创业公司提出了可见光通信方案，家用电器配备 LED 发光二极管，不断闪烁发光传出信息。

![](https://cdn.beekka.com/blogimg/asset/202203/bg2022032005.webp)

手机使用摄像头接收光信号，进行解读。据称在5厘米的距离内，传输速率可达到 1.5kb/秒。

![](https://cdn.beekka.com/blogimg/asset/202203/bg2022032006.webp)

但是，家用电器接收手机信号，才是难题。这家公司称，它可以让家用电器接收手机闪光灯的闪烁，但没有透露细节。网友猜测，电器端可能需要红外线接收器，感知可见光。

![](https://cdn.beekka.com/blogimg/asset/202203/bg2022032007.webp)

3、[世界最薄的机械表](https://www.hodinkee.com/articles/richard-mille-sets-a-new-record-for-the-worlds-thinnest-watch-with-the-rm-up-01-ferrari)

一家瑞士高档手表品牌，推出了世界最薄的机械表，只有1.75毫米厚。

![](https://cdn.beekka.com/blogimg/asset/202207/bg2022070906.webp)

![](https://cdn.beekka.com/blogimg/asset/202207/bg2022070909.webp)

它堪称工程奇迹，内部结构复杂，各种零件都是薄到极致，而且还包含了表壳和蓝宝石水晶表面。

![](https://cdn.beekka.com/blogimg/asset/202207/bg2022070907.webp)

![](https://cdn.beekka.com/blogimg/asset/202207/bg2022070908.webp)

在它的表盘上，时间显示区域其实非常小，只占据了大约六分之一的空间，在上部的中央位置。

![](https://cdn.beekka.com/blogimg/asset/202207/bg2022070910.webp)

表盘的左上角和左下角是旋转操作钮。右上角是外露的摆轮，右下角是合作方法拉利 Logo。

它的售价也是天价，高达188.8万美元，全球限量发售150支。

4、[正方形显示器](https://www.lg.com/us/monitors/lg-28mq780-b)

LG 公司最近发布了一款16:18的显示器。

![](https://cdn.beekka.com/blogimg/asset/202207/bg2022071002.webp)

普通显示器的宽高比一般是16:9，所以这款显示器相当于两个普通显示器堆在一起。

这种接近正方形的显示器现在越来越多，此前 [Ezio](https://www.eizo.com/products/flexscan/ev2730q/) 也发布过一款。正方形显示器的好处是，上部和下部可以同时打开两个应用，都能完整显示。

![](https://cdn.beekka.com/blogimg/asset/202207/bg2022071003.webp)

而且，对于图形和视频处理，它也有更大的显示面积。横屏和竖屏的视频，都可以最大面积地展示。

![](https://cdn.beekka.com/blogimg/asset/202207/bg2022071004.webp)

它的价格会比普通显示器贵，就看消费者能否接受了。

## 文章

1、[蒋尚义万字访谈](https://mp.weixin.qq.com/s/Y22nMfoIh1h3J6cLaNii2w)（中文）

![](https://cdn.beekka.com/blogimg/asset/202208/bg2022082006.webp)

蒋尚义（1946－）曾担任台积电共同营运长，后来到了大陆，担任过中芯国际副董事长。

今年三月，他接受美国“电脑历史博物馆”专访，回顾自己的半导体生涯。内容不错，值得一读，可以了解半导体行业和台积电。

2、[DuckDuckGo 发放 @duck.com 邮箱](https://www.cnbeta.com/articles/tech/1308699.htm)（中文）

![](https://cdn.beekka.com/blogimg/asset/202208/bg2022082516.webp)

DuckDuckGo 开始向所有用户免费开放 @duck.com 邮箱。这是一个邮件转发服务，会剥离邮件里面的追踪代码。如果你想要注册，需要先安装它的浏览器扩展。

3、[电动轮椅当电脑椅](https://mp.weixin.qq.com/s/hxmC3wHTw4g_JvcRCoqPDQ)（中文）

![](https://cdn.beekka.com/blogimg/asset/202208/bg2022082003.webp)

作者探讨了一种可能性，能不能用电动轮椅，取代电脑椅？

4、[为什么苹果一定会发布基于 ARM 的 Mac 电脑](https://www.mattrichman.net/why-apple-will-switch-to-arm-based-macs/)（英文）

一篇2014年的文章，作者正确预言 Mac 电脑会改用 ARM 架构 CPU，分析得有理有据，很有眼光。

5、[如何使用 Next.js 搭建博客](https://www.joshwcomeau.com/blog/how-i-built-my-blog/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202207/bg2022071103.webp)

如何使用 Next.js 在 Vercel 免费空间上搭建博客的教程。

6、[Node.js 的性能差异：CJS vs ESM](https://github.com/nodejs/node/issues/44186)（英文）

这是 Node.js 官方仓库的一个 issue。有人发现，Node.js 处理 CJS 模块比 ESM 模块快10倍，而且 Node 18 的性能不如 Node 16。

7、[Tauri vs Electron：真实项目的比较](https://www.levminer.com/blog/tauri-vs-electron)（英文）

![](https://cdn.beekka.com/blogimg/asset/202208/bg2022082304.webp)

Electron 是目前跨平台桌面软件的首选开发框架，Tauri 则是最近出现的一个替代品，试图解决前者的最大痛点：体积臃肿，资源占用高。

作者特意用 Tauri 写了一个桌面应用。本文是他的使用感受，以及两者的全方位比较。

8、[103状态码：加载提示](https://developer.chrome.com/blog/early-hints/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202208/bg2022082002.webp)

Chrome 浏览器新增了 HTTP 协议的103状态码，表示“加载提示”（early hints），即提示浏览器可以预加载某个资源，用来取代已经下线的 HTTP/2 的[服务器推送](https://developer.chrome.com/blog/removing-push/)功能。

## 工具

1、[mjml](https://mjml.io/)

![](https://cdn.beekka.com/blogimg/asset/202206/bg2022063024.webp)

编写 HTML 邮件的工具。它提供了一套邮件组件，并能将这些组件转码为 HTML 代码。你可以试试它的 [PlayGround](https://mjml.io/try-it-live)。

2、[Upptime](https://github.com/upptime/upptime)

![](https://cdn.beekka.com/blogimg/asset/202207/bg2022070110.webp)

一个开源的网站状态监视服务，它使用 GitHub Actions 每五分钟查询一次网站是否在线，每六个小时把响应时间提交到 Git 仓库，生成一个网站（上图），供用户监控网站状态。

3、[Vanblog](https://vanblog.mereith.com/)

![](https://cdn.beekka.com/blogimg/asset/202208/bg2022082503.webp)

一款个人博客系统，支持众多功能，采用 Docker 部署，带有管理后台，前台为静态页面，提供自动 HTTPS 证书。（[@Mereithhh](https://github.com/ruanyf/weekly/issues/2576) 投稿）

4、[SVNAdmin](https://github.com/witersen/SvnAdminV2.0)

![](https://cdn.beekka.com/blogimg/asset/202208/bg2022082505.webp)

SVN 源代码仓库的 Web 管理界面，使用 PHP 开发。（[@witersen](https://github.com/ruanyf/weekly/issues/2578) 投稿）

5、[gossip](https://github.com/qianxi0410/gossip)

这个工具可以把 GitHub Issue 转成一个静态博客，内容和评论都存放在 issue 中。博客使用 next.js 开发，可以自动部署到 Vercel 或 GitHub Pages。（[@qianxi0410](https://github.com/ruanyf/weekly/issues/2581) 投稿）

6、[BgSub](https://bgsub.cn/)

![](https://cdn.beekka.com/blogimg/asset/202208/bg2022082509.webp)

一个网页工具，可以自动抠图，替换背景颜色或背景图片，完全在本地完成，不会上传服务器。（[@PearOCR](https://github.com/ruanyf/weekly/issues/2582) 投稿）

7、[一起听播客](https://github.com/yenche123/podcast-together)

![](https://cdn.beekka.com/blogimg/asset/202208/bg2022082506.webp)

一个开源网站，支持多人一起听播客，支持小宇宙和 Apple Podcast 中国区播客。（[@yenche123](https://github.com/ruanyf/weekly/issues/2579) 投稿）

8、[MiraPlayer](https://github.com/miravideo/FFCreator)

![](https://cdn.beekka.com/blogimg/asset/202208/bg2022082504.webp)

一个基于腾讯视频库 [FFCreator](https://github.com/tnfe/FFCreator/blob/master/README.zh-CN.md) 封装的前端视频播放器和编辑器组件。（[@milkliker](https://github.com/ruanyf/weekly/issues/2577) 投稿）

9、[Solon](https://solon.noear.org/)

一个轻量级 Java 应用开发框架，资源占用少，支持从 Spring Boot 迁移。（[@noear](https://github.com/ruanyf/weekly/issues/2590) 投稿）

10、[Codeberg](https://codeberg.org/)

![](https://cdn.beekka.com/blogimg/asset/202207/bg2022070111.webp)

一个 GitHub/GitLab 的替代品，用来自己托管 Git 代码仓库。

## 活动

1、[微服务框架 CloudWeGo 技术沙龙](https://www.bagevent.com/event/8261894?bag_track=001)

上周向大家介绍过字节的微服务框架 [CloudWeGo](https://www.cloudwego.io/zh/)，支持了字节内部[10万+的微服务和1000万的容器实例](https://segmentfault.com/a/1190000042226107)，已经完全开源给外部使用，内外是同一套代码。

![](https://cdn.beekka.com/blogimg/asset/202208/bg2022081608.webp)

CloudWeGo 团队会在明天（8月27日）下午2点的字节跳动技术沙龙，**直播分享字节系应用的后台架构**（比如[飞书的架构](https://segmentfault.com/a/1190000042187351)），以及如何快速搭建企业级微服务应用。没报名的同学可以抓紧时间[报名](https://www.bagevent.com/event/8261894?bag_track=001)，还有机会赢取会务组准备的大量礼品。

另外，这个框架是用 Go 写的，CloudWeGo 团队不满足于此，还想要更好的性能，所以尝试开发了**国内首个 Rust 语言的 RPC 框架**，也会在现场发布，欢迎关注。 

## 资源

1、[据意查句](https://wantquotes.net/)

![](https://cdn.beekka.com/blogimg/asset/202208/bg2022081819.webp)

清华大学推出了一个搜索引擎，根据关键词搜索相关的诗文。比如搜索“郁闷”，就会返回各种跟郁闷相关的句子，参见[介绍文章](https://www.163.com/dy/article/HDHB76F30511DSSR.html)。

另有一个汉语的[近义词搜索引擎](https://wantwords.net/)。

2、[必应壁纸](https://bing.wdbyte.com/)

![](https://cdn.beekka.com/blogimg/asset/202208/bg2022082507.webp)

周刊介绍过一个抓取必应每日壁纸的 [GitHub Actions 模板](https://github.com/niumoo/bing-wallpaper)，作者现在将其做成静态网站，可以在线浏览和下载壁纸，每日更新。（[@niumoo](https://github.com/ruanyf/weekly/issues/2591) 投稿）

3、[音频博客《代码英雄》](https://linux.cn/talk/clh/)

![](https://cdn.beekka.com/blogimg/asset/202208/bg2022082508.webp)

红帽公司精心制作的一个音频播客。“Linux 中国”得到授权进行了文本翻译，将其带给国内的开发者。可惜的是，[英文版](https://www.redhat.com/en/command-line-heroes)已经更新到第九季，中文翻译才到第四季。（[@CherryLover](https://github.com/ruanyf/weekly/issues/2584) 投稿）

4、[Bunny Fonts](https://fonts.bunny.net/about)

![](https://cdn.beekka.com/blogimg/asset/202206/bg2022062002.webp)

谷歌网络字体的一个替代品，等同非官方镜像，另外也可以避免泄漏用户信息给谷歌。

## 图片

1、[50美元纸钞](https://www.hillelwayne.com/post/microscopy/)

下图是显微镜下的50美元纸钞。

![](https://cdn.beekka.com/blogimg/asset/220204/bg2022040303.webp)

可以看到，为了防伪，纸钞在红色底纹上，加入了蓝色安全纤维。并且，蓝纤维组成了两个五角星图案，右上角的五角星里面还有“USA FIFTY”的缩微字样。

2、**活人售货机**

我在上海地铁上看见一个男子，透明挎包上贴着两行字。

![](https://cdn.beekka.com/blogimg/asset/202208/bg2022082407.webp)

我忍不住好奇，拿出手机长焦，终于看清了：“可售商品，价格面议”。这难道是活人售货机？

![](https://cdn.beekka.com/blogimg/asset/202208/bg2022082408.webp)

3、[雪泥](https://englishrussia.com/2022/04/01/rare-natural-phenomenon-observed-in-saint-petersburg/)

积雪落到零度但还未结冰的河道里面，会形成一种雪和水的混合物，称为雪泥（snezhura）。

这种景象非常罕见，下面就是在圣彼得堡拍到的雪泥照片。

![](https://cdn.beekka.com/blogimg/asset/220204/bg2022040610.webp)

![](https://cdn.beekka.com/blogimg/asset/220204/bg2022040611.webp)

## 文摘

1、[高级大头照服务](https://www.wsj.com/articles/perfect-linkedin-profile-headshot-photo-is-worth-1-000-and-a-job-11660160047)

很多求职网站和社交网站，需要上传真人头像。

如果有一张令人印象深刻的大头照，将大大增加你的人脉和成功机会。为了满足这种需求，美国正在兴起一种高级大头照的摄影服务。

越来越多的专业摄影师发现，人们为了一张好看的大头像，愿意付出高价。他们就开始专门拍大头照。

![](https://cdn.beekka.com/blogimg/asset/202208/bg2022081304.webp)

这种专业的大头照非常贵，最便宜的也要200多美元一张。如果你想一次多拍几张，就要上千美元。

有些摄影师还自带发型师和化妆师，为你做发型和化妆。这样的话，一张大头照就要收费1000美元或2000美元。

![](https://cdn.beekka.com/blogimg/asset/202208/bg2022081305.webp)

![](https://cdn.beekka.com/blogimg/asset/202208/bg2022081306.webp)

![](https://cdn.beekka.com/blogimg/asset/202208/bg2022081307.webp)

现在，拍摄互联网使用的头像照片，已经在美国成为一个获利丰厚的新产业。

不过研究表明，这笔钱是值得的。如果大头照有吸引力，你的 LinkedIn 页面就会获得多得多的浏览量。带有大头照的页面获得的浏览量，是没有头像页面的21倍，获得的好友请求是9倍。

反之，如果你的头像与老板心目中的形象不符，就会降低你拿到 offer 的概率。

## 言论

1、

真的想做一个项目，那就开始得越快越好。早点做出有价值的成果，你会吸引到客户；如果做不出来，你就可以早点放弃，节省自己的时间，并了解哪里行不通。

-- [《不要建立自己的框架》](https://dodov.dev/blog/dont-build-your-own-framework)

2、

如果你的旅行只是通过汽车/火车/飞机，你可能很难体会到骑自行车看到的世界有多丰富。一般来说，骑行的时候，你不会选择途径一个又一个沉闷的交通枢纽，而是沿着古老的路线，这些路线连接着数千年来人们的生活、历史和风景。

-- [Hacker News 读者](https://news.ycombinator.com/item?id=31798326)

3、

年轻时，我真的很烦产品经理，他们总是让我预估从未做过的任务的工期。

现在我意识到，产品经理真的需要在日程表中填一个日期，这样他们才有东西交代。而且，我自己的数字至少比他们随便想一个数字，要更准确一些。

-- [Hacker News 读者](https://news.ycombinator.com/item?id=31809794)

4、

现在想靠开发手机 App 赚钱，太难了。市场完全不同了，客户已经厌倦下载更多的 App，更不用说为它们付费了。

-- [Hacker News 读者](https://news.ycombinator.com/item?id=31835433)

5、

任何一个人都是一条已经存在40亿年的生物繁殖链条的最终结果。40亿年中，这条链条每一环的繁殖都没有失败，才有了你。

-- [Hacker News 读者](https://news.ycombinator.com/item?id=31848315)

## 历史上的本周

2021年（第 172 期）：[我们会死于气候灾难吗？](https://www.ruanyifeng.com/blog/2021/08/weekly-issue-172.html)

2020年（第 121 期）：[为什么人类没有越来越闲？](https://www.ruanyifeng.com/blog/2020/08/weekly-issue-121.html)

2019年（第 70 期）：[世界进入负利率时代，这意味什么](https://www.ruanyifeng.com/blog/2019/08/weekly-issue-70.html)

2018年（第 19 期）：[电影《头号玩家》描绘未来的虚拟世界](https://www.ruanyifeng.com/blog/2018/08/weekly-issue-19.html)

## 鸣谢

国产软件 [FlowUs](https://flowus.cn?promotionChannel=GW_RYF_01) 提供个人专栏服务（查看[周刊专栏](https://ruanyf-weekly.flowus.cn/?code=FLOWUS&promotionChannel=WX_RYF_00)），集成了“文档+表格+网盘”，适合知识库、数据管理、文件存储多种用途。

![](https://cdn.beekka.com/blogimg/asset/202207/bg2022072108.webp)

（完）

