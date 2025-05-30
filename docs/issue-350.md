# 科技爱好者周刊（第 350 期）：Java 三十周年

这里记录每周值得分享的科技内容，周五发布。

本杂志[开源](https://github.com/ruanyf/weekly)，欢迎[投稿](https://github.com/ruanyf/weekly/issues)。另有[《谁在招人》](https://github.com/ruanyf/weekly/issues/6771)服务，发布程序员招聘信息。合作请[邮件联系](mailto:yifeng.ruan@gmail.com)（yifeng.ruan@gmail.com）。

## 封面图

![](https://cdn.beekka.com/blogimg/asset/202505/bg2025052506.webp)

正在举行的第26届舟山国际沙雕节，主题是“海上音乐城”。海滩上50多座沙雕，组成了一把吉他。（[via](https://www.news.cn/photo/20250518/c8528908d6da4bfa968423df86e61363/c.html)）

## Java 三十周年

上周是 Java 语言诞生三十周年。1995年5月23日，Sun 公司正式发布了这种语言。

![](https://cdn.beekka.com/blogimg/asset/202505/bg2025052607.webp)

三十年了，大家觉得 Java 算不算老语言？

说实话，我一直以为，Java 跟 C++ 是同一时期的语言。但是实际上，Java 与 Python、JavaScript、PHP 同时期，属于年富力强的年轻语言。

![](https://cdn.beekka.com/blogimg/asset/202505/bg2025052608.webp)

全世界的计算机语言有几千种，**Java 是特别、特别成功的那一类**。从发布的第一天起，它就很成功，一直保持到今天。

Java 的成功体现在两方面。

**（1）它无所不在**。日常生活中，我们接触到的软件服务，尤其是企业级服务，后端的开发语言大部分都是 Java。

Java 在服务端是霸主地位，在桌面端也有广泛应用，很多人用它写桌面软件。至于手机端，就更不用说了，安卓系统就基于 Java。

**（2）它的工作岗位最多**。

如果你问我，学习什么编程语言，最容易找工作？

没有其他前提的情况下，我会建议学习 Java，它的工作岗位最多，最容易找。

Python 语言虽然也很热门，但是工作岗位往往要求高级程序员，中级和低级的岗位并不多。不像 Java，你只要具有一般水平，就可以去应聘，需要普通 Java 程序员的地方非常多。

国外有一条经验法则，叫做[林迪效应](https://zh.wikipedia.org/zh-cn/%E6%9E%97%E8%BF%AA%E6%95%88%E5%BA%94)（Lindy effect），说的是一种事物的预期寿命与它已经存在的时间成正比。它已经存在多久，你可以预期，它还会存在这么久。

那么，Java 已经流行了30年，接下来30年，很可能还会继续流行。

## 高斯林口述历史

Java 语言的发明人是高斯林（James Gosling，1955-）。他在 Sun 公司时，发明了 Java。

![](https://cdn.beekka.com/blogimg/asset/202505/bg2025052610.webp)

2019年，美国的计算机历史博物馆采访他，一连两天，每天三个小时，后来制作了一个节目《高斯林口述历史》（Oral History of James Gosling）。

网上有视频 + 文字稿（PDF [上](https://archive.computerhistory.org/resources/access/text/2019/10/102781080-05-01-acc.pdf)，[下](http://archive.computerhistory.org/resources/access/text/2019/10/102781105-05-01-acc.pdf)），他谈了很多东西。下面，我摘录跟 Java 有关的部分，非常有意思。

**问：你什么时候开始研究字节码？**

答：我在卡内基梅隆大学读研究生时，开始从事字节码方面的工作。

当时，我的导师要求我，将一些软件从一种计算机移植到另一种计算机。我不知道他怎么想的，移植软件非常困难。

但是我发现，写一个字节码到汇编代码的编译器却很容易，得到的代码质量比原生的 C 编译器还要好，能够顺利运行。

这件事让我记住了，只要生成软件的字节码，然后为不同平台写一个字节码到汇编语言的编译器，就能让软件在不同架构的计算机上运行。

**问：你怎么在 Sun 公司开始搞 Java？**

答：Sun 公司的产品是服务器，在消费电子领域错过了很多机会。

我们当时有一群人，核心小组大概只有四个人，想探索消费电子领域。首席执行官同意了，给了我们一笔钱，那时是1991年。

我们决定做一个原型设备，项目名叫 Star7。这个设备相当古怪，有点像后来的 iPad。事实上，我们团队后来有几个人，确实继续从事 iPad 的研发。

![](https://cdn.beekka.com/blogimg/asset/202505/bg2025052606.webp)

我们并不想做那种特定功能的设备，而是想要一个网络设备，可以跟其他设备相互通信，并进行远程控制。

我们设想的一个用途是，当时的电视和录像机都有各自的遥控器，我们想用一个设备同时遥控多种其他设备，不仅能够控制电视，还能控制灯光，并且可以互动。

当然，Star7 没有成功。但是过了30年，人们竟然还在打造这样的设备，感觉有点奇怪。

**问：你怎么想到要为这个设备，发明一种新的编程语言？**

答：我们最初的目标不是发明一种编程语言，但是我们意识到，很多问题都源于编程工具。

我们想改进一下 C 和 C++，让它们更适合我们的环境。我自愿承担了这项任务，因为我是小组里唯一一个之前开发过编译器的人。

随着时间的推移，我改动的部分越来越不像 C++ 了，开始像一种独立的语言。

**问：这种语言最初命名为 Oak？**

答：是的，它最初被命名为 Oak（橡树）。这纯粹是偷懒，我当时需要新建一个文件夹，存放代码。我坐在办公桌前，望着窗外，看到一棵橡树，就为文件夹起了这个名字。

**问：一开始，该语言就被设计为独立于特定平台？**

答：是的。平台独立性是我们从一开始就考虑的事情之一。

这其实来自那些消费电子公司，他们是这种语言的使用者。他们非常不乐意受制于特定供应商，如果某个供应商有问题，他们希望可以更换供应商。CPU 也是如此，他们不希望受制于特定的 CPU。

问题就来了：如何才能让他们轻松地从一种芯片切换到另一种呢？这不就是我在卡内基梅隆大学移植字节码时遇到的问题吗。

所以，新语言的核心特性就是字节码，这样才能轻松地针对不同的 CPU 指令集进行开发。

如果厂商要为某个芯片制造一些东西，比如下一代录像机或电视机，即使处理器架构发生变化，也不用重写大量代码。现有的代码可以有把握地在尚未发明的机器上运行。

**问：Java 的口号“一次编写，随处运行”（Write once, run anywhere）是这样来的吗？**

答：我完全不知道这句话是谁想出来的，它是公司的营销用语。这句话说得很棒，但把事情过分简化了。

**问：Java 是什么时候从机顶盒转向互联网？**

答：应该是94年或95年，我们决定放弃机顶盒。因为我们发现，大型媒体公司内心深处，并不想要一款强大的新设备，而是想要控制用户的眼球，多吸引广告商。

我们决定转向更广阔的领域，让新语言可以用在互联网开发。

**问：Java 是怎么赢得软件开发商的？**

答：我们发现，Java 与平台隔离的特性很有吸引力，它不关心你使用哪种浏览器，因此你可以把平台问题与应用程序的问题隔离开来。

我们不再以消费者和嵌入式为中心了，而是思考这种语言怎么帮助更广大的软件开发者。

如果你是一个软件开发者，你不必考虑在谁的平台上开发软件，Sun、微软的 Windows NT 或者惠普。如果你用 Java 开发，你可以把软件卖给使用不同平台的客户。

**问：你们发现 Oak 被另一家公司占用后，才想到了 Java 这个名字？**

答：是的。你要发布一款产品，必须给它起个名字。Oak 已经被其他公司注册成商标了，我们被迫选择一个新名字。

那时，我们已经准备好发布软件了，就是缺一个名字。我们组织了一场命名会议，询问大家的意见，列出一张大家感觉可以的单词列表，然后发给律师，让他们从上到下检查有没有商标问题，哪个单词第一个通过检查，我们就用那个。

**问：Java 是第四个单词？**

答：是的。我个人最喜欢的是排名第三的 Lyric，但它没通过检查。排名第一的单词，也就是项目组大多数人最喜欢的名字，是 Silk。我不喜欢这个词，觉得它有点吓人，让我想起了蜘蛛。尽管喜欢它的人说，它象征互联网。我忘了排名第二是什么词，但是第四是 Java，我们就用了它。

## 科技动态

（1）内蒙古一煤矿，实现了[100台无人卡车](https://news.qq.com/rain/a/20250523A03FOF00)的编组运行，操作人员仅仅6人。

![](https://cdn.beekka.com/blogimg/asset/202505/bg2025052510.webp)

注意，无人卡车的驾驶舱位置是电池。

![](https://cdn.beekka.com/blogimg/asset/202505/bg2025052511.webp)

（2）戴森公司创始人，发布[世界最薄吸尘器](https://news.qq.com/rain/a/20250522A03Q5A00)，机身仅高95毫米。

![](https://cdn.beekka.com/blogimg/asset/202505/bg2025052505.webp)

（3）杭州举行[人形机器人格斗赛](https://news.qq.com/rain/a/20250526A00IGB00)。

![](https://cdn.beekka.com/blogimg/asset/202505/bg2025052631.webp)

比赛机器人采用遥控操作。

![](https://cdn.beekka.com/blogimg/asset/202505/bg2025052632.webp)

（4）丹麦继日本之后，成为全世界第二个国家，将[退休年龄](https://www.telegraph.co.uk/world-news/2025/05/23/denmark-raise-retirement-age-70/)提高到70岁。

（5）[阿联酋](https://finance.sina.cn/7x24/2025-05-27/detail-inexywaf1592004.d.html)成为全球首个国家，为全体公民和居民免费提供 ChatGPT Plus，该服务目前的月费为20美元。

## 文章

1、[CAPTCHA 没用了](https://behind.pretix.eu/2025/05/23/captchas-are-over/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202505/bg2025052518.webp)

作者在一家票务网站工作。他提出，各种识别机器人的验证机制，要么可以被 AI 绕过，要么不适用于出票，难以找到有效的解决方案。

2、[我的同步备份方案](https://www.xda-developers.com/replaced-google-drive-backups-syncthing-backblaze-truenas/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202505/bg2025052404.webp)

作者的备份方案分成两部分。（1）使用开源软件 [Syncthing](https://syncthing.net/) 在多台电脑之间同步目录，（2）使用 [TrueNAS](https://www.truenas.com/) 将本地内容同步到云存储。

3、[Bash 脚本执行心跳测试的写法](https://heitorpb.github.io/bla/timeout/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202505/bg2025052703.webp)

本文教你一种简单的写法，使用 Bash 脚本执行心跳测试（验证服务器是否正常在线）。

4、[虚拟主机加固指南](https://www.kkyri.com/p/how-to-secure-your-new-vps-a-step-by-step-guide)（英文）

![](https://cdn.beekka.com/blogimg/asset/202410/bg2024102201.webp)

开通虚拟主机（VPS）后，应该如何设置，提高安全性，本文给出基本步骤。

5、[自解释的代码](https://lackofimagination.org/2024/10/self-documenting-code/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202410/bg2024102402.webp)

本文通过一个例子，演示应该怎么写，才能让代码清晰易懂，自己解释自己。

## 工具

1、[Defuddle](https://github.com/kepano/defuddle)

![](https://cdn.beekka.com/blogimg/asset/202505/bg2025052401.webp)

一个 JS 库，从 HTML 网页代码提取内容，转成文本。

2、[DockFlare](https://github.com/ChrispyBacon-dev/DockFlare)

Cloudflare Tunnel 的开源管理工具。

![](https://cdn.beekka.com/blogimg/asset/202505/bg2025052403.webp)

如果内网有多个 Docker 容器，通过 Cloudflare Tunnel 向外网开放，DockFlare 可以对它们进行统一管理，参见[介绍文章](https://www.xda-developers.com/cloudflare-tunnels-easier-to-manage-free-open-source-self-hosted-tool/)。

3、[f2](https://github.com/ayoisaiah/f2)

![](https://cdn.beekka.com/blogimg/asset/202505/bg2025052521.webp)

一个命令行的文件批量改名工具，功能较强，参见[介绍文章](https://simonwillison.net/2025/May/24/f2/)。

4、[TypeID](https://github.com/jetify-com/typeid)

唯一身份识别码 UUIDv7 的改进版，加上了类型前缀。

5、[Starlight](https://starlight.astro.build/)

![](https://cdn.beekka.com/blogimg/asset/202505/bg2025052802.webp)

基于 Astro 框架的文档网站生成工具。

6、[ntfy.sh](https://github.com/binwiederhier/ntfy)

![](https://cdn.beekka.com/blogimg/asset/202505/bg2025052601.webp)

消息推送工具，向手机和桌面电脑推送消息，可以自搭建，也可以使用官方服务器，参见[介绍文章](https://www.xda-developers.com/set-up-self-hosted-notification-service/)。

7、[BillionMail](https://github.com/aaPanel/BillionMail)

![](https://cdn.beekka.com/blogimg/asset/202505/bg2025052405.webp)

开源的电子邮件营销平台，帮助企业和个人管理电子邮件营销活动，可以发送新闻通讯、促销邮件、消息。（[@aaPanel](https://github.com/ruanyf/weekly/issues/6917) 投稿）

8、[Lynx Proxy](https://github.com/suxin2017/lynx-server)

![](https://cdn.beekka.com/blogimg/asset/202505/bg2025052407.webp)

开源服务器，代理 HTTP/HTTPS 和 WebSocket 流量，内置 Web 管理界面。（[@suxin2017](https://github.com/ruanyf/weekly/issues/6924) 投稿）

9、[Text to SVG](https://github.com/JiuRanYa/text-to-svg)

![](https://cdn.beekka.com/blogimg/asset/202505/bg2025052605.webp)

字体转 SVG 的工具网站，可以用来制作文字 Logo。（[@JiuRanYa](https://github.com/ruanyf/weekly/issues/6933) 投稿）

10、[DualPiP](https://chromewebstore.google.com/detail/dualpip-%E2%80%93-bilingual-subti/ddkmobcljbfggkmibabekgpbighaogpn)

![](https://cdn.beekka.com/blogimg/asset/202505/bg2025052901.webp)

Chrome 插件，提供增强版的画中画播放器，支持主流视频网站一键弹出。（[@ymlluo](https://github.com/ruanyf/weekly/issues/6952) 投稿）

## AI 相关

1、[Smart Mermaid](https://github.com/liujuntao123/smart-mermaid)

![](https://cdn.beekka.com/blogimg/asset/202505/bg2025052406.webp)

将文本转为 Mermaid 格式的可视化图表，省去手动编写 Mermaid 代码。（[@liujuntao123](https://github.com/ruanyf/weekly/issues/6918) 投稿）

2、[Folda-Scan](https://github.com/oldjs/web-code-agent)

![](https://cdn.beekka.com/blogimg/asset/202505/bg2025052503.webp)

一个与代码库对话的 Web 应用，可以扫描本地文件夹，对其建立本地索引，从而用自然语言库对话。（[@oldjs](https://github.com/ruanyf/weekly/issues/6929) 投稿）

3、[Ainee](https://github.com/luyu0279/Ainee)

![](https://cdn.beekka.com/blogimg/asset/202505/bg2025052801.webp)

AI 开源笔记工具，将音频、文字、文件以及 YouTube 视频等转换为笔记。（[@luyu0279](https://github.com/ruanyf/weekly/issues/6940) 投稿）

4、[OpenDerisk](https://github.com/derisk-ai/OpenDerisk)

![](https://cdn.beekka.com/blogimg/asset/202505/bg2025052902.webp)

开源的 AI 运维助手，对线上系统提供 AI管家，与真人协同处理运维问题。（[@csunny](https://github.com/ruanyf/weekly/issues/6953) 投稿）

## 资源

1、[周刊 AI 总结器](https://blog.ronething.cn/ruanyf-weekly-insights/)

![](https://cdn.beekka.com/blogimg/asset/202505/bg2025052903.webp)

AI 提炼的每一期周刊重点内容，[代码开源](https://github.com/ronething/ruanyf-weekly-insights)。（[@ronething](https://github.com/ruanyf/weekly/issues/6950) 投稿）

2、[日本語文章解析器](https://github.com/cokice/japanese-analyzer)

![](https://cdn.beekka.com/blogimg/asset/202505/bg2025052604.webp)

日语句子分析的网站。（[@cokice](https://github.com/ruanyf/weekly/issues/6932) 投稿）

## Computex 的奇特 PC

上周闭幕的台北 Computex 2025 电脑展，出现了很多奇特的 PC（来源[1](https://www.xda-developers.com/these-7-pc-builds-blew-my-mind-at-computex/)，[2](https://www.mobile01.com/topicdetail.php?f=514&t=7124346)）。

**1、招财进宝**

![](https://cdn.beekka.com/blogimg/asset/202505/bg2025052612.webp)

你以为这是金元宝吗？错了它是一台电脑。

![](https://cdn.beekka.com/blogimg/asset/202505/bg2025052613.webp)

它的背后就是机箱，金元宝上方的流水装置就是循环的液冷。

![](https://cdn.beekka.com/blogimg/asset/202505/bg2025052614.webp)

**2、高达机器人**

![](https://cdn.beekka.com/blogimg/asset/202505/bg2025052615.webp)

这个机器人也是一台电脑，头部会旋转，眼睛会变色，还能播放语音。

它胸部发亮的地方，就是电源按钮。

![](https://cdn.beekka.com/blogimg/asset/202505/bg2025052616.webp)

腿部就是放置显卡的地方。

![](https://cdn.beekka.com/blogimg/asset/202505/bg2025052617.webp)

**3、水族馆**

![](https://cdn.beekka.com/blogimg/asset/202505/bg2025052618.webp)

这个水族馆是真正的海景房电脑，里面有水母和金鱼的饰品。

![](https://cdn.beekka.com/blogimg/asset/202505/bg2025052619.webp)

风扇的 RGB 灯效，做得像灯笼一样，晚上亮起来肯定很漂亮。

![](https://cdn.beekka.com/blogimg/asset/202505/bg2025052620.webp)

**4、黄貂鱼**

![](https://cdn.beekka.com/blogimg/asset/202505/bg2025052621.webp)

这台电脑模仿了黄貂鱼，但是又好像一架飞机。

![](https://cdn.beekka.com/blogimg/asset/202505/bg2025052622.webp)

它的两侧前翼，可以用胸前的齿轮，调节移动。

![](https://cdn.beekka.com/blogimg/asset/202505/bg2025052623.webp)

**5、咖啡机**

![](https://cdn.beekka.com/blogimg/asset/202505/bg2025052624.webp)

这个咖啡机机箱是概念产品，应该不能用来冲咖啡。

**6、跑车**

![](https://cdn.beekka.com/blogimg/asset/202505/bg2025052625.webp)

这台跑车机箱，显卡插在车尾，引擎盖下面是主板和散热风扇。

![](https://cdn.beekka.com/blogimg/asset/202505/bg2025052626.webp)

**7、黑神话悟空**

![](https://cdn.beekka.com/blogimg/asset/202505/bg2025052627.webp)

黑神话主题机箱，外面包了一层“牛王铠甲”。

![](https://cdn.beekka.com/blogimg/asset/202505/bg2025052628.webp)

**8、河马**

![](https://cdn.beekka.com/blogimg/asset/202505/bg2025052629.webp)

河马机箱走可爱路线，下面的水盆好像是标配。

**9、茅草屋**

![](https://cdn.beekka.com/blogimg/asset/202505/bg2025052630.webp)

茅草屋机箱无敌了，上面真的覆盖了一层稻草，放在家里可以做盆景了。

## 言论

1、

我从来不喜欢内容收费，我的所有写作和研究成果都免费发布，这带给我巨大的价值。

现在，我想尝试一种不一样的订阅：你付钱给我，我会少给你发送一些东西。

我会推出一份仅限赞助者的月度邮件，里面都是我精心选择的重点内容，你就不用每天看我的大量更新了。

-- [Simon Willison](https://simonwillison.net/2025/May/25/sponsors-only-newsletter/)，著名开发者

2、

AI 是比真人更好的老师，但是以后的学校还会需要真人老师，他们的主要职责是看管孩子。

-- [路易斯·冯·安](https://fortune.com/2025/05/20/duolingo-ai-teacher-schools-childcare/) (Luis von Ahn) ，Duolingo 的首席执行官

3、

把 AI 当作工具，而不是拐杖，那些2019年时被认为有价值的基础工程技能，值得你继续投资。

-- [《不要让 AI 加速我们的无能》](https://www.slater.dev/accelerated-incompetence/)

4、

最有害的建议之一就是不要重新发明轮子。

这种建议会导致一种抑制好奇心和探索的氛围。现代生活的很多重要发明，都来自那些不听从这个建议的人们。

重新发明轮子就是一种学习，并且学习过程中，你可能会做出更好的版本。

-- [《重新发明轮子》](https://endler.dev/2025/reinvent-the-wheel/)

## 往年回顾

[技术封建主义](https://www.ruanyifeng.com/blog/2024/06/weekly-issue-303.html)（#303）

[训练材料用完之日](https://www.ruanyifeng.com/blog/2023/05/weekly-issue-253.html)（#253）

[英国的名校签证，伯克利的计算机教育](https://www.ruanyifeng.com/blog/2022/04/weekly-issue-203.html)（#203）

[机器翻译是对译者的侮辱吗？](https://www.ruanyifeng.com/blog/2021/04/weekly-issue-153.html)（#153）

（完）

