# 每周分享第 30 期

这里记录过去一周，我看到的值得分享的东西，每周五发布。

欢迎投稿，请前往 GitHub 的 [ruanyf/weekly](https://github.com/ruanyf/weekly) 提交 issue。

![](https://www.wangbase.com/blogimg/asset/201811/bg2018110901.jpg)

上个月谷歌[宣布](https://www.blog.google/technology/safety-security/project-strobe/)，社交应用 G+ 将在10个月后关闭。

主要原因有两个。一是缺乏用户，90%的用户会话短于5秒；二是有安全漏洞，近50万用户资料存在泄露风险，虽然没有证据表明黑客发现了这个漏洞。

谷歌是世界最大的互联网公司，资金和技术都不是问题，所有底层产品几乎都是业内最强：人工智能、搜索、邮件、地图、照片、云盘、在线办公……按理说，G+ 没有理由失败，谷歌只要把底层产品组合一下，就没人打得过。可是，G+ 就是做不起来。谷歌做过四个社交产品，全部失败了，这是为什么？

几年前，一度有传言，Gmail 要并入 G+，提升后者的访问量，结果也没有实施。这多少反映了 G+ 不是谷歌的核心业务，公司并没有不惜一切代价投入。谷歌这家公司的兴趣，从来不在应用软件，而是在基础服务、底层算法、操作系统上面。我猜想，谷歌内部多多少少把 G+ 看作玩具，“发动态，加好友，这种玩意有多少难度？”，工程师和科学家更愿意去研究高难度的产品。这才是 G+ 失败的根本原因，谷歌从高管到基层，对社交产品都缺乏足够兴趣。不信你去看，谷歌没有一个高管，喜欢玩社交媒体。甚至谷歌工程师里面，很少有特别喜欢写博客的，Steve Yegge 算一个，但是他觉得谷歌不合适自己，辞职了。

这件事情告诉我们，公司跟人一样，也有自己的兴趣爱好。倘若硬要去做那些没兴趣的事情，不仅内心煎熬，而且投入大量时间和金钱之后，最终还是难逃认赔离场的结局。

## 新闻

1、[太阳热能发电](https://arstechnica.com/science/2018/10/new-material-could-up-efficiency-of-concentrated-solar-power/)

![](https://www.wangbase.com/blogimg/asset/201811/bg2018110902.jpg)

目前，太阳能发电主要是指光伏发电，将太阳光直接转化为电流。它的问题是，太阳光有间歇性，导致电能储存成了巨大问题。

但是，太阳能发电还有另一种方式，我们知道，聚焦太阳光会产生巨大的热量。这意味着，我们可以建立工厂，将太阳能转化为热能，然后通过热能发电。相比储存电能，热能的储存容易得多，这样就可以实现全天候发电。这在技术上已经可行，但是现阶段，太阳能的热能发电还是比光伏发电贵得多。上图为位于以色列内盖夫沙漠的110兆瓦太阳能发电厂。

2、[感知观众的播放器](https://bitmovin.com/user-aware-video-player/)

![](https://www.wangbase.com/blogimg/asset/201811/bg2018110903.jpg)

视频播放器 Bitmovin 加入了观众感知功能。播放视频的时候，它会打开摄像头，观察正在看视频的观众。如果发现观众距离比较远，就降低了一些比特率（画面质量），反之则提高比特率；如果发现观众起身走开了，自动暂定播放，等到发现观众回来，再恢复播放。

3、[车对车通信取代红绿灯](https://spectrum.ieee.org/transportation/infrastructure/how-vehicletovehicle-communication-could-replace-traffic-lights-and-shorten-commutes)

![](https://www.wangbase.com/blogimg/asset/201811/bg2018110904.jpg)

交通控制都通过红绿灯。但是，如果车辆之间可以互相通信，我们是否还需要红绿灯？

卡内基梅隆大学开发的一种算法，允许汽车使用车载通信功能进行协商，彼此约定谁先通过路口、谁后通过，而无需使用任何红绿灯。通过模拟计算，这种算法比起红绿灯，可以将通勤时间减少三分之一。长远来看，它如果与自动驾驶汽车相结合，就可以精确控制整个行程的时间。

4、[SSPL 许可证](https://www.mongodb.com/press/mongodb-issues-new-server-side-public-license-for-mongodb-community-server)

![](https://www.wangbase.com/blogimg/asset/201811/bg2018110905.jpg)

很多软件采用 GPL 许可证。这种许可证规定，如果你修改了代码再进行“分发”，就必须开放源码。但是，如果某家公司使用 GPL 软件提供线上服务，不分发软件本身，就可以不提供修改后的源码。很多人认为，这是 GPL 许可证的一个漏洞。

现在，MongoDB 宣布，许可证从 GPL 改为 SSPL，明确要求使用 Mongo 提供线上服务的公司，也必须开放源码。举例来说，如果亚马逊公司在 AWS 里面有一个 MongoDB 服务，那么现在它就必须开源它的 MongoDB 源码修改。

5、[泥浆打印的房屋](https://newatlas.com/wasp-gaia-3d-printed-mud-hut/56777/)

![](https://www.wangbase.com/blogimg/asset/201811/bg2018110906.jpg)

一家意大利3D打印公司，发明用泥浆和稻草打印小屋。每间的成本只要1000欧元。上图中，外墙的水平纹路就是一圈圈打印出来的。点击标题链接，就可以观看小屋打印过程的视频。

![](https://www.wangbase.com/blogimg/asset/201811/bg2018110907.jpg)

6、[饮料瓶回收机](https://www.nytimes.com/2018/10/17/world/europe/istanbul-vending-machines-recycling-subway.html)

![](https://www.wangbase.com/blogimg/asset/201811/bg2018110908.jpg)

伊斯坦布尔在地铁站新增了饮料瓶回收机，乘客提交饮料瓶，可以折算成地铁票积分。一个1.5升塑料瓶可以换6美分，一个易拉罐9美分，而单程地铁票是40美分。

7、[地球生物的分布](http://www.pnas.org/content/115/25/6506)

![](https://www.wangbase.com/blogimg/asset/201811/bg2018110909.jpg)

美国科学家估算了，全世界生物体内的碳元素一共是550千兆吨（Gt C），其中植物占了450GTC，细菌70GTC，真菌12GtC，原核生物7GtC，单细胞生物4GtC，所有动物只有2GtC。

动物之中，一半是节肢动物（昆虫）占1GtC，鱼类0.7Gtc，人类0.06GtC，牲畜（以牛和猪为主）0.1GtC，野生哺乳动物0.007GtC。

8、[最古老的沉船](https://www.theguardian.com/science/2018/oct/23/oldest-intact-shipwreck-thought-to-be-ancient-greek-discovered-at-bottom-of-black-sea)

![](https://www.wangbase.com/blogimg/asset/201811/bg2018110910.jpg)


![](https://www.wangbase.com/blogimg/asset/201811/bg2018110911.jpg)

考古学家在黑海底部发现一艘世界最古老的沉船，据称这艘船有2700年的历史，可以追溯到古希腊。这艘船长23米，桅杆、方向舵和划艇长凳都存在，沉没在水下一英里的地方。考古学家说，那个深度缺氧，所以把它保留了下来。

以前人们只在大英博物馆收藏的古希腊陶器上，见过那个时代的船只。

![](https://www.wangbase.com/blogimg/asset/201811/bg2018110912.jpg)

9、[欧洲禁止一次性塑料](https://www.theguardian.com/environment/2018/oct/24/european-parliament-approves-ban-on-single-use-plastics-uk-eu-brexit)

欧洲议会支持禁止使用一次性塑料，以解决海洋，田野和水道的污染问题。根据拟通过的法令，塑料吸管、棉签、一次性塑料板、餐具等物品，都将在2021年禁止。

现在，大量的塑料废物冲入海洋，在那里可能需要几个世纪才能完全降解。那些轻质的一次性塑料物品是最大的麻烦，它们可以轻松地在海洋里长途漂流，破坏海洋动植物。

10、__一句话新闻__

* [Youtube](https://www.mushroomnetworks.com/infographics/youtube---the-2nd-largest-search-engine-infographic/) 是世界第二大搜索引擎，它的每月搜索次数比 Bing + Yahoo 加起来都多。
    
* [一家美国制药公司](https://www.bloomberg.com/news/articles/2018-10-17/a-blue-pill-is-stopping-hiv-world-first-study-shows)开发出艾滋病口服预防片，可以预防艾滋病。

![](https://www.wangbase.com/blogimg/asset/201811/bg2018110913.jpg)

## 教程

1、[压缩算法的解释](http://www.codersnotes.com/notes/elegance-of-deflate/)（英文）

压缩是最常用的功能之一，压缩算法一般分成两大类：基于熵的压缩和基于字典的压缩。本文简单解释这两类算法的原理，以及将它们合在一起的 deflate 算法。

2、[Manjaro 发行版介绍](https://hackernoon.com/manjaro-deepin-review-a-clean-minimal-and-powerful-linux-distro-6c0ccac04cd8)（英文）

![](https://www.wangbase.com/blogimg/asset/201811/bg2018110914.jpg)

Manjaro 是一个新的 Linux 发行版，内核采用 Arch Linux，UI 采用 Deepin，集灵活性和易用的 UI 于一体。

3、[密码学简明教程](http://davidlowryduda.com/a-brief-notebook-on-cryptography/)（英文）

本文回顾了加密发展的几个阶段，每个阶段都给出了 Python 的小例子。

4、[停止无限滚动](https://logrocket.com/blog/infinite-scroll/)（英文）

本文提出网页的无限滚动并不是一个好的设计，应该限制使用或者停止使用。

5、[WebAssembly 的未来](https://hacks.mozilla.org/2018/10/webassemblys-post-mvp-future/)（英文）

WebAssembly 目前只是 MVP（最小可行产品）阶段，本文介绍了这种编译语言未来可能具有的功能。

6、[YAML 格式的问题](https://arp242.net/weblog/yaml_probably_not_so_great_after_all.html)（英文）

YAML 格式虽然比 JSON 格式易读易写，但也有很多问题。这种格式其实很复杂，并不是配置文件的理想格式。

7、[Pokemon Go 为什么成功？](https://medium.com/@efeng/the-rise-and-further-rise-of-pokemon-go-product-lessons-learned-from-the-hit-game-392fe254e378)（英文）

Pokemon GO 是一个在地图上捕捉口袋妖怪的游戏，初看起来相当无聊，不需要任何游戏技能。但是该游戏取得了惊人的成功，这是为什么？

8、[2018 最佳 Linux 桌面发行版](https://haydenjames.io/best-linux-distro/)（英文）

本文对三个层次的（初级、中级、高级）用户，介绍最合适的 Linux 发行版，用于桌面系统。对新手有一定的参考价值。

9、[Web Performance 101](https://3perf.com/talks/web-perf-101/)（英文）

网页性能的基础知识，针对初学者，内容比较全。

## 资源

1、[IPv6 采用率](https://www.google.com/intl/en/ipv6/statistics.html)

![](https://www.wangbase.com/blogimg/asset/201811/bg2018110915.jpg)

谷歌有一个公开网页，展示使用 IPv6 访问谷歌的比例。最近，这个比率来到历史最高的25%。

2、[进入纯数学](https://infinitedescent.xyz/)

![](https://www.wangbase.com/blogimg/asset/201811/bg2018110916.jpg)

一本英文的纯数学教材，免费下载，从简单的自然数讲起，包括代数、数论、集合运算、概率和微积分等章节。我觉得，至少对于了解数学的符号体系很有好处。

3、[33 个 JS 程序员需要知道的概念](https://github.com/leonardomso/33-js-concepts)

按照主题，收集 JS 学习资源的仓库。

4、[纸飞机](https://www.foldnfly.com/#/1-1-1-1-1-1-1-1-2)

![](https://www.wangbase.com/blogimg/asset/201811/bg2018110917.jpg)

收集纸飞机折纸方法的网站，目前有40种纸飞机。

5、[微积分很容易](http://calculusmadeeasy.org/)（Calculus made easy）

有名的微积分教材，版权已经过期。虽然年代比较久了，但是内容很经典。

6、[科幻界面](http://sciencefictioninterfaces.tumblr.com/)

![](https://www.wangbase.com/blogimg/asset/201811/bg2018110918.jpg)

该网站收集科幻影视作品里面出现的计算机界面设计。

7、[ScriptOJ](http://scriptoj.mangojuice.top/)

国人开发的前端题库，可以用作评测系统，带有讨论区。（@[LeeChar](http://scriptoj.mangojuice.top/) 投稿）

## 工具

1、[WebPerl](https://webperl.zero-g.net/)

通过把 Perl 5 解释器编译成 WebAssembly，从而在网页上运行 Perl 代码。

2、[Thonny](https://thonny.org/)

![](https://www.wangbase.com/blogimg/asset/201811/bg2018110919.jpg)

一个针对初学者的 Python IDE（集成编程环境），界面清爽简单，可用于儿童的编程教育。

3、[svg-inject](https://github.com/iconfu/svg-inject)

![](https://www.wangbase.com/blogimg/asset/201811/bg2018110920.jpg)

这个 JS 库可以将网页上的外联 SVG 图像，变为内嵌的 SVG 图像，从而使得全局的 CSS 样式文件可以对这个图像生效。

4、[arwes](https://github.com/arwesjs/arwes)

![](https://www.wangbase.com/blogimg/asset/201811/bg2018110921.jpg)

一个质量不错的科幻风格 React UI 组件库。（@[Anderson-Liu](https://github.com/ruanyf/weekly/issues/28) 投稿）

5、[CommentBox.io](https://commentbox.io/)

![](https://www.wangbase.com/blogimg/asset/201811/bg2018110922.jpg)

一个类似 Disqus 的网站评论服务。

6、[gRPC-Web](https://www.cncf.io/blog/2018/10/24/grpc-web-is-going-ga/)

![](https://www.wangbase.com/blogimg/asset/201811/bg2018110923.jpg)

gRPC-Web 是一个JavaScript客户端库，使 Web 应用程序能够直接与后端gRPC服务通信，不需要 HTTP 服务器充当中介。这意味着可以构建真正的端到端 gRPC 应用程序体系结构。

7、[irondb](https://github.com/gruns/irondb)

irondb  是一个浏览器 key-value 储存的封装库，把 Cookies、IndexedDB、LocalStorage、SessionStorage 统一成一个接口。它的最大特色就是数据冗余机制，即使某种底层储存机制失效，它可以从其他机制恢复数据。

8、[Screen to GIF](https://www.screentogif.com/)

一个可以录制 GIF 图片的开源工具，同时还具备编辑帧、调用摄像头录制、录制画板等功能。（@[winshu](https://github.com/ruanyf/weekly/issues/30) 投稿）

9、[Sketch 2 Code](https://sketch2code.azurewebsites.net/)

![](https://www.wangbase.com/blogimg/asset/201811/bg2018110924.jpg)

微软的在线工具，将手绘草图转成 HTML 代码。（[@xiaohesong](https://github.com/ruanyf/weekly/issues/30#issuecomment-433258462) 投稿）

10、[Process On](https://www.processon.com/)

![](https://www.wangbase.com/blogimg/asset/201811/bg2018110925.jpg)

免费在线作图，可以实时协作。ProcessOn 支持流程图、思维导图、原型图、UML、网络拓扑图、组织结构图等。（@[wuzhenda](https://github.com/ruanyf/weekly/issues/32)__ __投稿）

## 文摘

1、[金星移民](https://theconversation.com/nasa-wants-to-send-humans-to-venus-heres-why-thats-a-brilliant-idea-104961)

美国国家航天局 NASA 正在讨论金星移民的可能。

![](https://www.wangbase.com/blogimg/asset/201811/bg2018110926.jpg)

上图左侧是金星，右侧是地球。

![](https://www.wangbase.com/blogimg/asset/201811/bg2018110927.jpg)

金星地面的照片。

初听起来，金星根本不是一个可能的目标，它的表面温度有460度，高于许多金属的熔点。下雪的时候，金星落下的实际上是金属滴。金星的大气压高达93个大气压，人类根本无法承受。金星大气由97％的二氧化碳，3％的氮气和微量的其他气体组成，还有大量硫酸形成的致密云层，因此它的空气具有腐蚀性。

NASA 讨论的并不是地面移民，而是派出一艘飞艇，飞行在金星地面上方50公里~60公里的高空中，人类就生活在飞艇里面。那个区域的大气压相当于地球海平面大气压的一半，跟乞力马扎罗山顶差不多，温度介于20°C和30°C之间。人类在那里甚至不需要宇航服与外界隔离，只需要携带氧气装置，因为那里的空气绝大部分是二氧化碳。

高于此高度的大气层也足够密集，可以保护人员免受来自太空的电离辐射。太阳辐射提供了比地球更大的能量，可用于发电（是地球太阳能发电效率的大约1.4倍）。

飞艇漂浮在空中，使用正常的地球空气填充就可获得浮力，因为氧气和氮气的比重低于二氧化碳，所以飞艇可以飞起来。目前的技术完全可以实现这个方案。

2、[代码所有权](https://medium.com/@ard_adam/strong-code-ownership-b955163a9ca2)

![](https://www.wangbase.com/blogimg/asset/201811/bg2018110928.jpg)

Martin Fowler 提出，大多数软件项目存在三类代码所有权。

（1）强代码所有权。

每个模块指定一个负责人。开发者只能更改自己拥有的模块，如果需要更改其他人的模块，就必须与模块所有者联系，让后者更改。你可以为其他模块写补丁，将其发送给模块所有者来加速此过程。

（2）弱代码所有权。

每个模块指定一个负责人，但是开发者可以更改其他人的模块。模块所有者应对其拥有的模块负责，密切关注其他人所做的更改。礼貌的做法是，更改其他人的模块之前，首先与模块所有者进行讨论。

（3）集体代码所有权。

模块不指定负责人，代码库由整个团队拥有，任何人都可以在任何地方进行更改。这种做法可以视为代码没有个人所有权，只有团队所有权。

现在大多数公司都要求所有人都可以修改源代码，也就是集体代码所有权的模式。这样的政策，很可能导致软件质量和员工敬业度的下降。如果你的目标是工程师既高效又以工作为荣的企业文化，那么强代码所有权模式是最佳选择。

3、[没有中产阶级的加利福尼亚](https://thehill.com/opinion/finance/412928-middle-class-is-disappearing-in-california-as-wealth-gap-grows)

加州的国内生产总值超过2.7万亿美元，约占美国的13.9％。它的经济规模超过英国，是世界第五大经济体。该州极其富有，但令人难以置信的是，加州也是美国最贫穷的州之一。

贫困线以下的美国人口平均是13%，但是加利福尼亚州为19％，远高于阿拉巴马州的14％。加州穷人多的部分原因是房价快速上涨，这对富人有利，而对中产阶级来说，生活成本过高，于是成群结队地离开。随着中产阶级的离开，加利福尼亚的社会主要由富豪和穷人组成。

加州租房者每月平均支付1,447美元，而全国平均水平为1,012美元。29％的人将超过一半的收入用于住房。房屋中位数价值为529,000美元，是全国中位数239,800美元的两倍多。

加州的流浪者多得惊人。2016年到2017年，该州无家可归者人数增加了近14％，超过130,000人。2016 年，132名流浪者死在街头。旧金山有几百亿美元的富豪，但也遍地是流浪汉的粪便。

## 本周图片

1、[前苏联的纪念碑](https://www.collectorsweekly.com/articles/curious-propaganda-of-a-brutal-soviet-era/)

前苏联建造了大量令人叹为观止的雄伟纪念碑，大部分都是为了纪念战胜纳粹。

![](https://www.wangbase.com/blogimg/asset/201811/bg2018110929.jpg)

四只巨手拿着四把枪，Novorossiysk，1978。

![](https://www.wangbase.com/blogimg/asset/201811/bg2018110930.jpg)

苏联-波兰友谊纪念碑，1983。

![](https://www.wangbase.com/blogimg/asset/201811/bg2018110931.jpg)

烈士纪念碑，摩尔多瓦，1972。


![](https://www.wangbase.com/blogimg/asset/201811/bg2018110932.jpg)

北极士兵纪念碑，摩尔曼斯克，1974。

![](https://www.wangbase.com/blogimg/asset/201811/bg2018110933.jpg)

空间征服者纪念碑，莫斯科,1972。

2、[事故展览馆](http://www.spoon-tamago.com/2018/10/10/the-museum-of-accidents-offers-a-glimpse-into-japanese-introspection/)

![](https://www.wangbase.com/blogimg/asset/201811/bg2018110934.jpg)

日本铁路公司 JR 有一个事故展览馆，专门展示该公司发生的事故。“我们希望我们的员工永远不会忘记过去的事故。”不过，该展览馆只允许员工参观，不对公众开放。

## 新奇

1、[人工智能音乐](https://www.aiva.ai/)

![](https://www.wangbase.com/blogimg/asset/201811/bg2018110935.jpg)

一家创业公司正在开发 AI 音乐引擎。该引擎学习了无数旋律以后，已经能够自己生成音乐，主要用来为电影和游戏生成音轨。

大家可以去该公司的网站，收听机器生成的音乐，那些音乐非常动听。

## 本周金句

1、

由于重力只有地球的六分之一，月球很合适人类养老。在本世纪末之前，我们将在月球上为老年人设立医院，使他们能够长寿。他们的心脏在六分之一的重力下，可以跳得更轻快；他们脆弱的骨头，也将承担轻得多的负荷。

-- [科幻小说家海因莱因](https://arstechnica.com/science/2016/12/heinlein-and-clarke-discuss-the-moon-landings-as-they-happen/)在1969年7月20日（阿波罗11号登月日）接受采访，谈登月对人类的影响

2、

JavaScript 的优点是可以写任何东西，缺点是你真的会用它去写这些东西。

-- [Reg Braithwaite](https://twitter.com/CodeWisdom/status/1054713299386986496)

3、

据估计，2009年全球有500万 PHP 开发人员。

-- [terrychay](http://terrychay.com/article/whats-something-very-few-people-know-about-php.shtml)

4、

房价不断上涨的前提是不断有新人加入，他们愿意并且能够支付越来越高的房价。房价上涨的本质是，年轻人愿意把自己的财富转移给老年人，当这些年轻人变老时，再有新的年轻人愿意给他们更多的钱。

-- [《住房不是一项好的投资》](http://cityobservatory.org/housing-cant-be-affordable_and_be-a-good-investment/)

## 欢迎订阅

这个专栏每周五发布，同步更新在我的[个人网站](http://www.ruanyifeng.com/blog)、[微信公众号](http://weixin.sogou.com/weixin?query=%E9%98%AE%E4%B8%80%E5%B3%B0%E7%9A%84%E7%BD%91%E7%BB%9C%E6%97%A5%E5%BF%97)和[语雀](https://yuque.com/ruanyf/share/)。

微信搜索“__阮一峰的网络日志__”或者扫描二维码，即可订阅。

![](http://www.ruanyifeng.com/blogimg/asset/2018/bg2018042311.jpg)

（完）
