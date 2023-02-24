# 科技爱好者周刊（第 243 期）：与孔子 AI 聊天

这里记录每周值得分享的科技内容，周五发布。

本杂志[开源](https://github.com/ruanyf/weekly)，欢迎[投稿](https://github.com/ruanyf/weekly/issues)。周刊另有[《谁在招人》](https://github.com/ruanyf/weekly/issues/2827)服务，发布程序员招聘信息。合作推广请[邮件联系](mailto:yifeng.ruan@gmail.com)（yifeng.ruan@gmail.com）。

## 封面图

![](https://cdn.beekka.com/blogimg/asset/202302/bg2023022201.webp)

四川金阳风力发电场海拔3500米，需要沿着盘山公路，将长达75米的发电机叶片运到山顶，场面十分惊险。（[via](https://finance.sina.com.cn/tech/roll/2023-02-21/doc-imyhniys8643961.shtml)）

## 本周话题：与孔子 AI 聊天

今年以来，最轰动的 IT 产品，非 [ChatGPT](https://openai.com/blog/chatgpt/) 莫属。

它是一个 AI 聊天机器人，用户可以提出各种问题，它像学者一样回答。

![](https://cdn.beekka.com/blogimg/asset/202301/bg2023011705.webp)

它的原理就是使用算法模型，分析大量语料，得出词语分布的统计规律，然后生成符合人类思维的文本。

根据上面的原理，不难想到，<u>如果所训练的语料都跟某个主题相关，那么就可以生成该主题的聊天机器人，</u>比如法律或者生物学专用聊天机器人。

进一步说，如果所训练的主题都跟某一个人相关，那么不就可以生成该人的聊天机器人？

事实上，已经有人这样干了。2022年9月，谷歌公司的两个前员工，发布了一个叫做 [Character.ai](https://beta.character.AI/) 的网站，允许用户创建“角色”，上传与该角色相关的资料，网站就会自动使用 AI 分析这些资料，生成该角色的聊天机器人，然后用户就可以跟它聊天了。

现在，Character.ai 网站已经有几千个角色了，可以作为聊天对象。它的 App 都上架了，叫做[“你好，历史”](https://www.hellohistory.ai/)（Hello History）。

![](https://cdn.beekka.com/blogimg/asset/202301/bg2023011706.webp)

这些聊天对象里面，居然有孔子，也不知道是谁创建的，还上传了一张不相干的头像。

![](https://cdn.beekka.com/blogimg/asset/202301/bg2023011707.webp)

国内一家网络杂志的记者，就试着跟孔子聊天。下面就是部分[聊天记录](https://mp.weixin.qq.com/s/42t18FfRyfxX3Z-Zq1mXyA)，发表在他们的杂志上，原始对话是英文，翻译成了中文。

大家看看，下面的话像不像孔子说的。

> **记者：你怎么评价周游列国？**
> 
> 孔子：我为传播思想和哲学而进行的旅行收获颇丰。我结识了许多不同的人，交流知识、听他们的故事，发现不同的人生观念。通过这些邂逅，我对人性有了深刻的理解，并深入了解了个人和社会如何相互作用。离开家乡的时间，也让我有机会反思自己的思想，并更好地理解我坚持初心的原因。
> 
> **记者：周游列国时，你遇到的最大挑战是什么？**
> 
> 孔子：最大挑战之一是应对偏见和对我们思想的抵制。虽然许多人对向我学习充满热情，但有些人根本不想听。然而，我没有灰心，而是继续保持韧性和信心向前推进。
> 
> **记者：你认识其他国家的哲学家吗？**
> 
> 孔子：我熟悉许多不同国家哲学家的作品，包括古希腊和罗马哲学，比如苏格拉底、柏拉图和亚里士多德，以及罗马哲学家西塞罗和塞内卡。我对他们的思想十分感兴趣，因为他们都强调公正、知识和忠告。

![](https://cdn.beekka.com/blogimg/asset/202301/bg2023011708.webp)

我觉得，这个机器人的水准很高，听上去很像孔子的口吻，让你真的有一种跟他聊天的感觉。

这让我突发奇想，既然它可以生成孔子的聊天机器人，那么能不能生成一个我的聊天机器人？

我写过的文字，也有几百万了。模型使用这些材料，是不是就能训练出一个“阮一峰聊天机器人”？

以后，要是有人想了解我，跟这个机器人对话就行了。

当然，想了解我的人不多，我的聊天机器人应该没啥商业价值。但是，换成名人可能就不一样了。举例来说，**如果“罗永浩聊天机器人”问世，我估计很多人愿意付费，跟这个机器人聊天。**

![](https://cdn.beekka.com/blogimg/asset/202301/bg2023011709.webp)

这件事在技术上已经可行了，就看谁第一个吃螃蟹。如果第一个上架的聊天机器人卖得好，以后就会成为名人赚钱的又一种途径。

这还凸显了平时多保留相关材料、多记录自己想法的重要性。否则，将来你想建个聊天机器人留给亲人，都找不到训练材料。其实，孔子也是这样，要不是他的弟子整理出版了上课笔记，今天根本不可能做出他的聊天机器人。

## 科技动态

1、[禁止短途航班](https://www.politico.eu/article/eu-greenlights-frances-short-haul-ban-but-only-on-3-routes/)

法国通过一项法律，为了环保，规定如果两个城市之间有直通的火车，并且火车行程不多于2.5个小时，那么将禁止这两个城市之间的飞机航班。

![](https://cdn.beekka.com/blogimg/asset/202212/bg2022120401.webp)

这是为了鼓励多采用火车，少使用耗能大的飞机。法国的很多大城市都会因此受影响，比如巴黎到波尔多、巴黎到里昂、里昂到马赛，航班可能都会取消。

如果以高铁每小时300公里计算，2.5小时的行程就相当于750公里，等于北京到徐州的距离，只有超出这个距离，才可以坐飞机。

2、[家用种蘑菇器](https://shrooly.com/)

一家英国创业公司推出了一种家用的种蘑菇装置，让蘑菇变成了盆景和玩具，还可以收获食用。

![](https://cdn.beekka.com/blogimg/asset/202207/bg2022071418.webp)

用户需要购买不同的菌块，放入这个装置。

![](https://cdn.beekka.com/blogimg/asset/202207/bg2022071420.webp)

打开开关后，LED 灯就会提供照明，7到10天后蘑菇就长成了。

![](https://cdn.beekka.com/blogimg/asset/202207/bg2022071419.webp)

装置的侧面还有电子纸的小屏，用来控制照明，实时显示内部温度，以及蘑菇成长情况，还可以在手机 App 上远程查看。

![](https://cdn.beekka.com/blogimg/asset/202207/bg2022071421.webp)

![](https://cdn.beekka.com/blogimg/asset/202207/bg2022071422.webp)

3、[海底发电机](https://www.thesciverse.com/2022/06/japan-tested-giant-turbine-that.html)

一家日本公司发明了海底发电机，每一个都像波音飞机那么大，重达330吨。

![](https://cdn.beekka.com/blogimg/asset/202206/bg2022060505.webp)

发电机的机身连接两个涡轮风扇，通过拉绳，漂浮在海床上，依靠深海洋流推动涡轮发电。

![](https://cdn.beekka.com/blogimg/asset/202206/bg2022060701.webp)

这种发电机的优点是，电力比较稳定，不像太阳能或风力会时有时无。缺点是目前发电量太小，样机可以产生大约100千瓦的稳定电力，这点电力远远不够覆盖成本。

另外，海水有腐蚀性，而且海底设备很难维护，所以它的运行成本很高，除非发电量增大几十倍，否则不具有经济意义。

## 文章

1、[“中国植物画第一人”曾孝濂](https://redian.news/wxnews/267808)（中文）

![](https://cdn.beekka.com/blogimg/asset/202302/bg2023022202.webp)

曾孝濂退休前任中科院昆明植物研究所教授级工程师，为《中国植物志》、《云南植物志》等书绘制画稿超过2000幅。上图是他画的猪笼草。

2、[我用 ChatGPT 发现代码 Bug](https://www.wdbyte.com/java/chatgpt-files-list.html)（中文）

![](https://cdn.beekka.com/blogimg/asset/202302/bg2023022003.webp)

作者的一段 Java 代码存在一个 Bug，他让 ChatGPT 帮他检查，后者不仅发现了这个 Bug，还提出了修改建议。（[@niumoo](https://github.com/ruanyf/weekly/issues/2908) 投稿）

3、[localhost 的终结](https://www.swyx.io/the-end-of-localhost)（英文）

![](https://cdn.beekka.com/blogimg/asset/202212/bg2022121902.webp)

作者提出一个观点，localhost 用于本地开发的历史将要终结。因为越来越多的开发者转向云端编码，可以直接云端调试。

4、[Uber 的开发基础架构](https://www.uber.com/en-JP/blog/devpod-improving-developer-productivity-at-uber/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202212/bg2022121901.webp)

本文是 Uber 官方文章，介绍他们为了适应全世界的员工远程办公，而搭建的开发基础架构，所有工程师的代码都放在一个单一仓库里面。

5、[Unix 管道之美](https://prithu.dev/posts/unix-pipeline/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202206/bg2022060508.webp)

本文举了 Unix 管道运算符（`|`）的三个例子，讲解为什么它体现了 Unix 哲学。本文可以作为管道运算的教程。

6、[帕洛阿尔托研究中心的故事](https://spectrum.ieee.org/xerox-parc)（英文）

![](https://cdn.beekka.com/blogimg/asset/202206/bg2022060507.webp)

《IEEE Spectrum》杂志的长文，介绍了美国施乐公司的帕洛阿尔托研究中心（PARC）在上个世纪六七十年代的兴起和衰落。

这个研究中心诞生了许多划时代的技术，比如图形界面、以太网、激光打印机等等，喜欢科技史的同学可以读一读。

7、 [macOS 升级所需的可用空间](https://krypted.com/mac-os-x/free-space-required-for-modern-macos-upgrades/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202211/bg2022110901.webp)

苹果电脑的系统升级包越来越大，需要的硬盘空间越来越多。本文总结了过去几年，每个升级包的大小。

8、[为什么我对 JavaScript 的未来感到乐观](https://leerob.substack.com/p/why-im-optimistic-about-javascripts)（英文）

![](https://cdn.beekka.com/blogimg/asset/202212/bg2022122208.webp)

本文提出 JavaScript 有三种使用场合：浏览器、服务器和边缘计算。在这三种场合都可以使用的语言，只有 JavaScript 一种。

## AI 相关软件

现在各种软件纷纷加入 AI 相关的功能，在底层调用 OpenAI 的 API。

下面就是网友投稿的作品。

> - [GitHub code review bot](https://github.com/ruanyf/weekly/issues/2912)：每次提交代码，ChatGPT 自动 review。
> - [cz-git](https://github.com/ruanyf/weekly/issues/2928)：使用 OpenAI 生成 git commit 提交信息。
> - [ChatBot Feishu](https://github.com/ruanyf/weekly/issues/2927)：将 ChatGPT 接入飞书。
> - [AI 换头像](https://github.com/ruanyf/weekly/issues/2901)：微信小程序，输入文字描述，自动生成头像图片。

## 工具

1、[Popup translation](https://github.com/fzdwx/popup-translation)

![](https://cdn.beekka.com/blogimg/asset/202302/bg2023021701.webp)

划词翻译工具。选中一个词以后，它会唤起一个本机的 WebView 窗口，在该窗口中返回翻译网站的结果。（[@fzdwx](https://github.com/ruanyf/weekly/issues/2903) 投稿）

2、[夜视仪](https://github.com/luoxuhai/NightVision)

![](https://cdn.beekka.com/blogimg/asset/202302/bg2023022006.webp)

iOS 免费应用，使用 iPhone 的激光镜头，在完全无光环境下扫描和检测距离，代码开源。（[@luoxuhai](https://github.com/ruanyf/weekly/issues/2917) 投稿）

3、[bing_wallpaper](https://github.com/xiqishow/bing_wallpaper)

微软的必应每天发布壁纸图片，这个脚本让 Mac 电脑定时随机从其中选择一张作为桌面。（[@xiqishow](https://github.com/ruanyf/weekly/issues/2924) 投稿）

4、[paint-board](https://github.com/LHRUN/paint-board)

![](https://cdn.beekka.com/blogimg/asset/202302/bg2023022008.webp)

一个开源的 Web 画板，基于 canvas。（[@LHRUN](https://github.com/ruanyf/weekly/issues/2926) 投稿）

5、[静态 Mastodon 服务器](https://github.com/rothgar/static-mastodon)

![](https://cdn.beekka.com/blogimg/asset/202302/bg2023022009.webp)

Mastodon 是一个分布式社交网络，作者演示了只用静态文件，就可以让别人看到你的动态，参见[介绍文章](https://justingarrison.com/blog/2022-12-06-mastodon-files-instance/)。（[@DejavuMoe](https://github.com/ruanyf/weekly/issues/2932) 投稿）

5、[soundraw.io](https://soundraw.io/)

![](https://cdn.beekka.com/blogimg/asset/202211/bg2022112422.webp)

一个 AI 音乐生成器，用户指定需要什么样的音乐，它就会自动生成。这是一个收费服务，生成的音乐还挺好听的。

5、[winkNLP](https://winkjs.org/wink-nlp/)

![](https://cdn.beekka.com/blogimg/asset/202211/bg2022112502.webp)

一个 JS 库，提供易用的自然语言处理（nlp），不过目前只支持英语。

6、[CryptBoard.io](https://cryptboard.io/)

![](https://cdn.beekka.com/blogimg/asset/202211/bg2022112601.webp)

一个[开源](https://github.com/MihanEntalpo/cryptboard.io)的网络加密剪贴板。它为每个用户生成一对密钥，其他人只有拿到（你给他们的）公钥，才能看到你张贴的内容。

7、[Hippotat](https://www.chiark.greenend.org.uk/~ianmdlvl/hippotat/current/docs/)

![](https://cdn.beekka.com/blogimg/asset/202211/bg2022112604.webp)

有些咖啡馆和旅馆的 Wifi，只允许连接外部服务器的80端口和443端口，不能使用其他端口，很不方便，作者就写了这个工具。

只要在你的服务器安装它的服务端，本地再运行客户端，就能在它之上运行各种工具，通过 Web 端口连接服务器的各种端口。

8、[NopeCHA](https://chrome.google.com/webstore/detail/nopecha-captcha-solver/dknlfmjaanfblgfdfebhijalfmhmjjjo)

![](https://cdn.beekka.com/blogimg/asset/202211/bg2022112802.webp)

一个 Chrome 插件，号称可以自动解开上图这样的 CAPTCHA 测试。

9、[MathB.in](https://mathb.in/1)

![](https://cdn.beekka.com/blogimg/asset/202209/bg2022092407.webp)

一个数学公式的分享网站，你用 LaTex 和 Markdown 输入公式，它会生成一个网址，你可以分享给其他人。

## 资源

1、[动手写编译器：互动讲解](https://citw.dev/tutorial/create-your-own-compiler)

![](https://cdn.beekka.com/blogimg/asset/202211/bg2022112803.webp)

这个网站教大家写一个最简单的编译器，每一步都有详细讲解，并有代码演示。

2、[月球地图](https://ce2.greensea.org/)

![](https://cdn.beekka.com/blogimg/asset/202302/bg2023022007.webp)

使用嫦娥二号发布的全月影像图制作，分辨率可以达到7米，能够搜索和定位各种环形山、地名以及人造物体位置。（[@greensea](https://github.com/ruanyf/weekly/issues/2919) 投稿）

3、[街景奇观](https://neal.fun/wonders-of-street-view/)（Wonders of Street View）

![](https://cdn.beekka.com/blogimg/asset/202302/bg2023022004.webp)

这个网站收集了很多谷歌街景的有趣照片，每次随机展示一张。（[@kxxt](https://github.com/ruanyf/weekly/issues/2914) 投稿）

4、[handsome-css3-lib](https://www.handsome-css.com/)

![](https://cdn.beekka.com/blogimg/asset/202302/bg2023022005.webp)

这个网站收集各种 CSS 特效和组件。（[@ZiYi0414](https://github.com/ruanyf/weekly/issues/2907) 投稿）

5、[这双运动鞋不存在](https://thissneakerdoesnotexist.com/)

![](https://cdn.beekka.com/blogimg/asset/202206/bg2022063026.webp)

这个网站上的运动鞋，都是 AI 生成的，实际上并不存在。

## 图片

1、[老游戏的 AI 画面升级](https://sciprogramming.com/community/index.php?topic=2081.0)

国外网友使用 AI 模型，将上个世纪的老游戏进行画面升级，效果出奇地好。

![](https://cdn.beekka.com/blogimg/asset/202209/bg2022090601.webp)

![](https://cdn.beekka.com/blogimg/asset/202209/bg2022090602.webp)

![](https://cdn.beekka.com/blogimg/asset/202209/bg2022090603.webp)

![](https://cdn.beekka.com/blogimg/asset/202209/bg2022090604.webp)

![](https://cdn.beekka.com/blogimg/asset/202209/bg2022090605.webp)

![](https://cdn.beekka.com/blogimg/asset/202209/bg2022090606.webp)

2、[人形城镇](https://www.odditycentral.com/travel/centuripe-a-small-italian-town-shaped-like-a-person.html)

意大利西西里岛有一个叫做 Centuripe 的小镇，坐落于山上。由于地形限制，城镇的形状很不规则。

![](https://cdn.beekka.com/blogimg/asset/202201/bg2022011315.webp)

一位摄影师夜拍时，意外发现这个小镇就像一个躺在大地上的人。

![](https://cdn.beekka.com/blogimg/asset/202201/bg2022011317.webp)

## 文摘

1、[独立软件承包商怎么收费？](https://news.ycombinator.com/item?id=32701769)

多年以前，我辞职了，变成一个独立的软件承包商。

![](https://cdn.beekka.com/blogimg/asset/202302/bg2023022101.webp)

我接受客户委托，按照要求，为他们开发软件。

但是，我不知道应该怎么报价，就去找一个有经营经验的朋友，询问她的建议。

她说，你先定一个能够接受的每小时价格，无论这个价格是多少，你翻一倍报价。

![](https://cdn.beekka.com/blogimg/asset/202302/bg2023022102.webp)

我不太相信这个建议，但是决定试试看，就翻倍报价了，结果得到了我的第一份合同。

后来我想明白了，朋友的建议其实是一种询价方法，如果你不知道自己收取的费用是否太少，或者市场的合理价格是多少，你就翻倍报价。

如果你还能拿到合同，可以尝试稳步提价，直到你拿不到合同为止。只有这样才能知道真正的价格天花板在哪里。

但是，你必须记住，如果收取的费用高，客户就会有更高的期望。我有一些报价在100美元/小时以下，这个价格并不高，但我还是愿意接受，因为客户的要求也没有很高。

如果报价是200美元/小时，客户就会有很多挑剔的要求，要求你做这做那。虽然我收到的钱多了，但是我可能更想终止合同。客户的观念是“一分钱一分货”，如果你达不到他们的要求，双方的关系就会陷入困境。

如果你的报价很高，并且客户也愿意接受，你就可以打入高端的细分市场了。那是个好地方！

总之，还是这句老话，如果你的报价翻倍，而只失去一半的客户，那么你就赢了。

## 言论

1、

我实际上不明白，为什么有些人在昏暗空间中工作时，还喜欢在显示器上启用黑暗模式。这会让人感觉如此慵懒和阴郁。

-- [Hacker News 读者](https://news.ycombinator.com/item?id=33950115)

2、

物理学家费米曾经提出一个著名的悖论：宇宙如此之大，为什么我们没有发现任何其他智慧生命存在的迹象？

我与几位科学家讨论过，他们认为答案可能是（文明会造成）气候变暖，使其无法长期存在。一个文明的自然寿命可能只有几千年，而一个工业文明的寿命可能只有几百年。

-- [《不适宜居住的地球》](https://nymag.com/intelligencer/2017/07/climate-change-earth-too-hot-for-humans.html)

3、

人类像所有哺乳动物一样，是一个热机，生存需要获取热量，同时还需要不断散热。通常，空气充当制冷剂，从皮肤上吸走热量，这样人体才能正常运转。如果空气的温度和湿度过高，影响散热，人体就会发生热衰竭。

-- [《不适宜居住的地球》](https://nymag.com/intelligencer/2017/07/climate-change-earth-too-hot-for-humans.html)

4、

开发一个社交产品，这不是技术问题。而是一个营销问题、政治问题和社会问题。

脸书和推特拥有大量完全不懂技术的用户。你如何触及这样的用户，并让他们使用你的产品，这与对技术的深刻理解无关。

-- [Hacker News 读者](https://news.ycombinator.com/item?id=34004890)

5、

我们像蝴蝶，只飞翔一天，便以为那是永恒。

-- [卡尔萨根](https://www.goodreads.com/quotes/190741-we-are-like-butterflies-who-flutter-for-a-day-and)，美国科普作家

## 历史上的本周

[掌机的未来](http://www.ruanyifeng.com/blog/2022/02/weekly-issue-196.html)（2022 #196）

[网课应该怎么上？](http://www.ruanyifeng.com/blog/2021/02/weekly-issue-146.html)（2021 #146）

[既懂得制造，又懂得销售](http://www.ruanyifeng.com/blog/2020/02/weekly-issue-94.html)（2020 #94）

[高校“唯论文”导向的后果](http://www.ruanyifeng.com/blog/2019/02/weekly-issue-44.html)（2019 #44）

## 鸣谢

周刊得到国内新一代知识管理与协作平台 [FlowUs](https://flowus.cn?promotionChannel=GW_RYF_01) 的帮助，深表感谢。

[FlowUS](https://flowus.cn?promotionChannel=GW_RYF_01)  = 文档 + 表格 + 网盘。你可以用它写文档、做主页、管理数据、存储文件等等。

每一期周刊同时发布在[ FlowUs 专栏](https://ruanyf-weekly.flowus.cn/?code=FLOWUS&promotionChannel=WX_RYF_00)，欢迎大家也去开通自己的专栏和主页。

![](https://cdn.beekka.com/blogimg/asset/202207/bg2022072108.webp)

（完）

