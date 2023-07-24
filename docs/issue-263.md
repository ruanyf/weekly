# 科技爱好者周刊（第 263 期）：开源软件如何赚钱？

这里记录每周值得分享的科技内容，周五发布。

本杂志[开源](https://github.com/ruanyf/weekly)，欢迎[投稿](https://github.com/ruanyf/weekly/issues)。另有[《谁在招人》](https://github.com/ruanyf/weekly/issues/3222)服务，发布程序员招聘信息。合作请[邮件联系](mailto:yifeng.ruan@gmail.com)（yifeng.ruan@gmail.com）。

## 封面图

![](https://cdn.beekka.com/blogimg/asset/202307/bg2023072012.webp)

秘鲁首都利马是一个神奇的城市，建在面向太平洋的悬崖之上。要去海滩，还要下山。（[via](https://www.instagram.com/p/CufbbVXPtA8/)）

## 开源软件如何赚钱？

众所周知，开源软件很难赚钱，尤其是 GPL 许可证的代码。

![](https://cdn.beekka.com/blogimg/asset/202307/bg2023071602.webp)

GPL 规定，必须向使用者提供源码，并且使用者有权重新发布源码。

这就是说，**别人可以免费分发你的软件**，所以你无法靠出售软件获利。

![](https://cdn.beekka.com/blogimg/asset/202307/bg2023071706.webp)

**既然卖不了软件，那么能不能卖服务呢**，出售代码的支持、定制、咨询服务？

我一直认为是可以的。证据就是有一家软件公司，依靠软件支持服务，赚到了大钱，还上市了。

这家公司就是红帽公司，它出售 Linux 企业级支持和咨询服务，1999年成功上市，2019年被 IBM 以340亿美元的高价收购。

![](https://cdn.beekka.com/blogimg/asset/202307/bg2023071603.webp)

但是，这个成功故事在上个月戛然而止。突然之间，所有人惊觉，**软件客服的商业模式再也行不通了**。

下面我就来说说，到底发生了什么事。

红帽的主要产品，就是它自己的 Linux 发行版，叫做 RHEL（Red Hat Enterprise Linux 的缩写）。它卖的是这个发行版的支持服务。

![](https://cdn.beekka.com/blogimg/asset/202307/bg2023071707.webp)

根据 GPL 许可证，它必须免费提供源码，所以**市场上有很多它的克隆版**。那些不愿意买红帽服务的公司，就用克隆版，很多互联网大厂都这样做。

以前，最流行的红帽克隆版是 CentOS。它甚至比红帽本身的使用量都要大。

![](https://cdn.beekka.com/blogimg/asset/202307/bg2023071708.webp)

自从红帽被 IBM 收购以后，就觉得克隆版对生意的冲击太大了。它就收购了 CentOS，并在两年前把它停掉，改成自家的测试版，起名为 CentOS Stream，等于让社区帮它找 Bug。

这件事让很多人不爽，但是红帽的源码是公开的，一个克隆版没了，那就再推其他克隆版。现在最流行的克隆版有两个：Alma Linux 和 Rocky Linux。

![](https://cdn.beekka.com/blogimg/asset/202307/bg2023071710.webp)

![](https://cdn.beekka.com/blogimg/asset/202307/bg2023071711.webp)

上月发生的事情就是，红帽公司[突然宣布](https://www.redhat.com/en/blog/furthering-evolution-centos-stream)：**源码不再公开了，只向索要源码的客户私下提供**。

这个声明像炸弹一样，在业界炸开了锅。开源世界里面，从来没人这么干过。

大家仔细分析以后，发现这居然符合 GPL 许可证。因为 GPL 只要求向使用者提供源码，红帽的使用者都是付费客户，所以它可以私下提供源码。

问题是你成为红帽客户的时候，必须签一个《用户协议》，里面明确规定，**如果你重新发布源码，红帽有权终止用户合同**。这等于说，发布克隆版的人，从此就无权获得源码了，从而实际上禁止了克隆版。

这一招真是高明啊，既没有违反 GPL，又消灭了克隆版。红帽一定是找了很多律师，反复研究才想出这种做法。

这件事对红帽的长期影响，还有待观察。但是，至少说明了一点，**红帽觉得“客服模式”赚的钱太少了，只有禁掉克隆版，才能赚更多的钱**。

红帽是业内唯一的开源软件“客服模式”的成功案例，就这样终结了。一家开源软件公司，通过客服赚到大钱，以前还有红帽，以后就绝迹了。

国外媒体总结了[几个原因](https://opencoreventures.com/blog/2023-04-red-hat-model-only-worked-red-hat/)，**为什么“客服模式”行不通**，我觉得说得非常好。

（1）客服模式利润微薄，客户不愿意为支持服务支付高价。

（2）客服很难扩展。客户可能会大量使用软件，但是只购买一份服务。

（3）客服模式无法实现高速增长。软件越易用越可靠，用户就越不需要购买支持服务。“如果你出色构造了软件，你最终会让自己失业，因为客户可以在没有帮助的情况下使用它。”

（4）客服模式很难获得早期收入。创业公司好不容易找到100个初始用户，其中可能只有几个会购买服务，也许一个都没有。

因此，**开源软件的盈利模式，一定不是客服，而是其他模式**。不过，今天已经写得太长了，这个话题只好留到下周。

## 科技动态

1、[待办显示屏](https://peppe.rs/posts/plain_text_journaling/)

一个国外程序员使用平板显示器，制作了一个“待办事项显示屏”。

![](https://cdn.beekka.com/blogimg/asset/202306/bg2023062003.webp)

每天放在桌子上，提醒自己要办什么事，进度如何。

显示屏的上部显示最近几个月的日历，下面是每周的待办事项和进度。

![](https://cdn.beekka.com/blogimg/asset/202306/bg2023062004.webp)

这个设备成本很低，操作又很简单，可以取代传统的日历和台历，非常实用，也许还有商业潜力。

2、[世界最大办公楼](https://edition.cnn.com/style/india-largest-office-building-surat-diamond-bourse/index.html)

印度建造了一座世界最大办公楼，位置在孟买以北约250公里的苏拉特。

![](https://cdn.beekka.com/blogimg/asset/202307/bg2023072001.webp)

那里是世界钻石加工中心，全球约90%的钻石在那里切割。这次新建的就是钻石交易所。

整栋大楼的建筑面积约66万平方米，一共9个矩形单元通过中央走廊连在一起。整个建筑物高为15层楼，可以容纳65,000人同时办公。

![](https://cdn.beekka.com/blogimg/asset/202307/bg2023072002.webp)

![](https://cdn.beekka.com/blogimg/asset/202307/bg2023072003.webp)

在它之前，世界最大的办公楼是美国国防部五角大楼，建筑面积61万平方米。世界最大的建筑物则是成都的环球中心，建筑面积176万平方米。

![](https://cdn.beekka.com/blogimg/asset/202307/bg2023072004.webp)

![](https://cdn.beekka.com/blogimg/asset/202307/bg2023072005.webp)

3、[法律摇篮曲](https://petapixel.com/2023/07/13/legal-lullabies-puts-you-to-sleep-by-reading-social-media-terms-of-use/)

互联网大厂的用户协议，充满了法律术语，冗长而乏味。如果仔细阅读，让人昏昏欲睡。

有人想到一个点子，邀请配音演员来朗读这些协议，把录音放在网上，用来助眠。

![](https://cdn.beekka.com/blogimg/asset/202307/bg2023072008.webp)

如果你睡不着，不妨去 [zzzuckerberg.com](https://www.zzzuckerberg.com/)，听听这些录音，也许很快就会睡着。

Instagram 协议的音频长达51分钟，TikTok 长约38分钟。

4、[AI 音乐平台](https://www.digitalmusicnews.com/2023/07/12/ai-generated-music-platform-mubert-says-catalog-now-tops-100-million-songs/)

各种音乐网站收录的，都是人类创造的音乐。现在有一个网站，专门收录 AI 创作的音乐。

![](https://cdn.beekka.com/blogimg/asset/202307/bg2023072009.webp)

这个叫做 [Mubert](https://mubert.com/) 的网站表示，已经收录了1亿首曲子，跟世界最大音乐网站 Spotify 的规模相当，你可以无穷无尽地收听。

AI 音乐没有版权，用户可以任意使用，包括商用。这个网站还提供工具，让你按照自己的喜好生成音乐，添加到它的曲库。

## 文章

1、[GitHub 支持无密码登录](https://github.blog/2023-07-12-introducing-passwordless-authentication-on-github-com/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202307/bg2023071401.webp)

GitHub 宣布，本月开始支持 Passkey（无密码登录），本文教你怎么打开这个功能。

2、[《芯片战争》作者专访](https://www.noahpinion.blog/p/interview-chris-miller-historian)（英文）

![](https://cdn.beekka.com/blogimg/asset/202307/bg2023071202.webp)

专访畅销书《芯片战争》作者克里斯·米勒，谈美国芯片战略和中美芯片竞争。

3、[structuredClone() 简介](https://developer.mozilla.org/en-US/docs/Web/API/structuredClone)（英文）

![](https://cdn.beekka.com/blogimg/asset/202305/bg2023052814.webp)

JavaScript 自带的拷贝，都是浅拷贝，现在浏览器引入一个全局函数`structuredClone()`，用来深拷贝。

4、[圆圈滚动问题](https://plus.maths.org/content/circles-rolling-circles)（英文）

![](https://cdn.beekka.com/blogimg/asset/202305/bg2023052903.webp)

上图中，两个圆的半径分别是 r 和 4r。小圆沿着大圆滚动一圈，请问这时小圆自身滚动了几圈？（提示：答案不是4圈。）

5、[CSS Media Query 入门](https://engineering.kablamo.com.au/posts/2023/media-queries-and-responsive-design/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202305/bg2023052904.webp)

本文是 CSS 入门科普文章，介绍如何使用 Media Query 完成响应式设计，写得很清晰。

6、[Git 内部原理的快速介绍](https://sites.google.com/a/chromium.org/dev/developers/fast-intro-to-git-internals)（英文）

![](https://cdn.beekka.com/blogimg/asset/202306/bg2023061803.webp)

Chrome 团队工程师写的 Git 原理简单介绍，理清 Git 的一些基本概念。

7、[哈希是什么](https://samwho.dev/hashing/)

![](https://cdn.beekka.com/blogimg/asset/202306/bg2023062103.webp)

一篇入门科普文章，图文并茂，通俗解释哈希的原理，怎么使用，写得很好。

8、[socket 到底是个啥](https://mp.weixin.qq.com/s/Ebvjy132eRDOmcIL5cmxJw)（中文）

![](https://cdn.beekka.com/blogimg/asset/202307/bg2023071902.webp)

socket 的概念往往是常见面试问题，作者介绍了 socket 的使用场景和底层实现。（[@xxxsalted](https://github.com/ruanyf/weekly/issues/3274) 投稿）

## 工具

1、[hiSHtory](https://github.com/ddworken/hishtory)

一个强大的 Shell 操作历史的搜索工具，可以替代 Bash 内置的 ctrl-r 搜索。

2、[talk](https://github.com/vasanthv/talk)

![](https://cdn.beekka.com/blogimg/asset/202212/bg2022122401.webp)

一个开源的 Web 应用，基于 WebRTC 技术的多人群聊软件，支持视频、音频和文字聊天。

3、[TinyVG](https://tinyvg.tech/)

![](https://cdn.beekka.com/blogimg/asset/202303/bg2023032101.webp)

SVG 图片格式的二进制版本，可以大大缩小 SVG 文件体积。

4、[Gitstars](https://github.com/cfour-hi/gitstars) 

![](https://cdn.beekka.com/blogimg/asset/202307/bg2023072007.webp)

一个开源的在线服务，用来管理你在 GitHub 打过星标的项目（收藏的项目）。（[@cfour-hi](https://github.com/ruanyf/weekly/issues/3286) 投稿）

5、[迅排设计](https://github.com/palxiao/poster-design)

![](https://cdn.beekka.com/blogimg/asset/202307/bg2023072006.webp)

开源的在线海报图片设计器。（[@palxiao](https://github.com/ruanyf/weekly/issues/3284) 投稿）

6、[Spring Startup Ananlyzer](https://github.com/linyimin0812/spring-startup-analyzer)

![](https://cdn.beekka.com/blogimg/asset/202307/bg2023071904.webp)

Spring 性能分析工具，收集启动过程数据，生成交互式分析报告。（[@linyimin0812](https://github.com/ruanyf/weekly/issues/3280) 投稿）

7、[WebAV](https://github.com/hughfenghen/WebAV)

Chrome 94 开放了 WebCodecs API，意味着 JS 也能处理音视频了。这是一个实验性项目，尝试提供简单易用的 API 在浏览器中处理音视频数据。（[@hughfenghen](https://github.com/ruanyf/weekly/issues/3282) 投稿）

8、[kafka-console-ui](https://github.com/xxd763795151/kafka-console-ui)

![](https://cdn.beekka.com/blogimg/asset/202307/bg2023071901.webp)

一款轻量级的 Kafka 可视化管理平台。（[@xxd763795151](https://github.com/ruanyf/weekly/issues/3272) 投稿）

9、[killport](https://github.com/jkfran/killport)

一个 Rust 语言写的命令行程序，可以杀死占用指定端口的进程。

10、[Sniffnet](https://github.com/GyulyVGC/sniffnet)

![](https://cdn.beekka.com/blogimg/asset/202305/bg2023051903.webp)

一个跨平台桌面应用，用来追踪监控网络流量，并以可视化的方式呈现。

## 资源

1、[Triviance](https://triviance.com/)

![](https://cdn.beekka.com/blogimg/asset/202304/bg2023042502.webp)

使用 ChatGPT 生成的智力测验的题库，超过100万题，都是四选一的选择题，还分成不同的主题。

2、[FastGPT](https://labs.kagi.com/fastgpt)

![](https://cdn.beekka.com/blogimg/asset/202307/bg2023071601.webp)

新兴搜索引擎 Kagi 推出的 GPT 聊天，免费使用，响应很快，支持中文。

3、[ToolAI](https://www.toolai.io/)

![](https://cdn.beekka.com/blogimg/asset/202307/bg2023071903.webp)

AI 网站目录，收录了全球5000个 AI 网站。（[@littledot2020](https://github.com/ruanyf/weekly/issues/3276) 投稿）

4、[Python 数据分析（第三版）](https://wesmckinney.com/book/)（Python for Data Analysis）

![](https://cdn.beekka.com/blogimg/asset/202207/bg2022070305.webp)

一本英文教材，最新的第三版，讲授 Python 数据分析的初步知识，免费阅读。

## 图片

1、[冰山的底部](https://mossandfog.com/incredible-photos-show-the-underside-of-icebergs/)

人们总是说，冰山露出水面的部分不到20%。

![](https://cdn.beekka.com/blogimg/asset/202301/bg2023012102.webp)

一个德国的水下摄影师，特意前往格陵兰，拍摄水下的冰山。

![](https://cdn.beekka.com/blogimg/asset/202301/bg2023012103.webp)

她拍到了很多震撼的冰山底部的照片。

![](https://cdn.beekka.com/blogimg/asset/202301/bg2023012104.webp)

![](https://cdn.beekka.com/blogimg/asset/202301/bg2023012105.webp)

![](https://cdn.beekka.com/blogimg/asset/202301/bg2023012107.webp)

2、[最大的化石花](https://www.iflscience.com/the-biggest-fossil-flower-ever-found-in-amber-has-a-new-name-67049)

1872年，在北欧波罗的海附近，发现了一块距今3000多万前的琥珀化石。

![](https://cdn.beekka.com/blogimg/asset/202301/bg2023012108.webp)

令人震惊的是，这块化石里面有一朵完整的花。

![](https://cdn.beekka.com/blogimg/asset/202301/bg2023012109.webp)

这是已知最大的化石花，花瓣长达28毫米，我们可以看到它在3000多万年前盛开的样子。

## 文摘

1、[成年期的快与慢](https://perell.com/essay/adulting-fast-and-slow/)

我们生活在这样一个社会：小孩子像成年人一样老成，而成年人像小孩子一样幼稚。

![](https://cdn.beekka.com/blogimg/asset/202307/bg2023072010.webp)

现在的孩子们比以前更容易接触到成年人的世界，因此他们更早成人化。

从很小的年龄起，他们就在视频网站观看暴力和战争，在社交网络上看到性感和暴露的照片和视频。

然而，当孩子们成年以后，他们往往无法实现经济独立，也没有机会承担足够的责任。

结果，整个社会的文化就变得很幼稚，成年人感到无法做出承诺，即使承诺了也缺乏信心，对以后的生活感到难以把握。

他们的行事方式和处事态度，就像还在青少年时期。

2、[JSLint 的许可证](https://web.archive.org/web/20130203112329/http://dev.hasenj.org/post/3272592502)

JSON 格式的发明者道格拉斯（Douglas Crockford），在一次演讲中讲了一件趣事。

![](https://cdn.beekka.com/blogimg/asset/202307/bg2023072011.webp)

他在自己开发的 JSLint 软件许可证中设置了一个条款，要求“该软件应该用于善，而不是恶“。

后来，他收到一封来自 IBM 公司律师的信。

律师说，他们想使用 JSLint，但是这个许可证让他们有点为难。他们很确定，IBM 不会用它来作恶，但没法保证 IBM 客户的行为。因此询问道格拉斯，能不能给他们一个不同的许可证？

道格拉斯回信：“可以。我允许 IBM、它的客户、合作伙伴使用 JSLint 作恶。”

律师回信说：“非常感谢，道格拉斯！”

## 言论

1、

我们家的洗碗机经常坏，上一次是我自己修好的，这一次修不好了。

一连10天，我都用手洗碗。虽然我小时候就是这样做，但是洗碗机让我忘了，自己曾经多么讨厌这件事。好在新洗碗机终于到了。

-- [莱纳斯·托沃兹](https://social.kernel.org/notice/AUkTPiXrpnBynp8vS4)，Linux 创始人

2、

Linux 桌面环境，可能永远不会普及到大众。因为 Linux 使用者真正关心的是能否完成工作，他们对于桌面的要求，只要拥有浏览器即可满足，所以社区没有足够动力改善桌面体验。

-- [《今年不是 Linux 桌面年》](https://antipaucity.com/2013/06/04/this-is-not-the-year-of-the-linux-desktop/)

3、

网络社区最不能容忍的，就是大量持续涌入的陌生人，这让社区变成一个类似火车站的地方。成员的行为模式变得就像路过，人来人往，没有真正的归属感。

-- [《杀死社区》](https://www.marginalia.nu/log/82_killing_community/)

4、

以太坊发明者 Vitalik Buterin 在创建以太坊之前，是一名记者，为比特币杂志撰稿。
他（或者他的父亲）说，他们相信写作帮助他理清了思想。

[-- Hacker News 读者](https://news.ycombinator.com/item?id=36793106)

## 历史上的本周

[极简主义的胜利](http://www.ruanyifeng.com/blog/2022/07/weekly-issue-216.html)（2022 #216）

[视频学习胜过读书吗？](http://www.ruanyifeng.com/blog/2021/07/weekly-issue-166.html)（2021 #166）

[世界的未来就是一个火药桶](http://www.ruanyifeng.com/blog/2020/07/weekly-issue-116.html)（2020 #116）

[创业不是零和游戏](http://www.ruanyifeng.com/blog/2019/07/weekly-issue-66.html)（2019 #66）

（完）

