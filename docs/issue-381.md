# 科技爱好者周刊（第 381 期）：中国 AI 大模型领导者在想什么

这里记录每周值得分享的科技内容，周五发布。

本杂志[开源](https://github.com/ruanyf/weekly)，欢迎[投稿](https://github.com/ruanyf/weekly/issues)。另有[《谁在招人》](https://github.com/ruanyf/weekly/issues/8591)服务，发布程序员招聘信息。合作请[邮件联系](mailto:yifeng.ruan@gmail.com)（yifeng.ruan@gmail.com）。

## 封面图

![](https://cdn.beekka.com/blogimg/asset/202601/bg2026011024.webp)

刚刚运营的北京通州站位于地下，为了充分利用自然光，屋顶采用了透光的膜结构，上方还有一个风帆形状的保护架。（[via](https://news.cnr.cn/native/gd/kx/20251226/t20251226_527472908.shtml)）

## 中国 AI 大模型领导者在想什么

上周六（1月10日），北京有一场“AGI-Next 前沿峰会”，由清华大学基础模型实验室主办。

![](https://cdn.beekka.com/blogimg/asset/202601/bg2026011406.webp)

中国顶尖的 AI 大模型领导者，很多都出席了。

> - 唐杰：清华大学教授，智谱创始人
> - 杨植麟：月之暗面 Kimi 创始人
> - 林俊旸：阿里 Qwen 技术负责人
> - 姚顺雨：OpenAI 前核心研究者、腾讯 AI 新部门负责人

他们谈了对大模型和中国 AI 发展的看法，网上有[发言实录](https://www.53ai.com/news/LargeLanguageModel/2026011069524.html)。

内容非常多，有意思的发言也很多，下面是我摘录的部分内容。

## 一、唐杰的发言

### 1、智谱的起源

2019年，我们开始研究，能不能让机器像人一样思考，当时就从清华成果转化，在学校的大力支持下，成立了智谱这么一家公司，我现在是智谱的首席科学家。

那个时候，我们实验室在图神经网络、知识图谱方面，在国际上做的还行，但我们坚定地把这两个方向暂停了，暂时不做了，所有的人都转向做大模型。

### 2、泛化和 Scaling

我们希望机器有泛化能力，我教它一点点，它就能举一反三。就和人一样，教小孩子的时候，我们总希望教三个问题，他就会第四个、第十个，甚至连没教过的也会。怎么让机器拥有这种能力？

目前为止，我们主要通过 Scaling（规模化）达到这个目标，在不同层面提高泛化能力。

（1）我们最早期用 Transformer 训练模型，把所有的知识记忆下来。训练数据越多、算力越多，模型的记忆能力就越强，也就是说，它把世界上所有的知识都背下来了，并且有一定的泛化能力，可以抽象，可以做简单的推理。比如，你问中国的首都是什么？这时候模型不需要推理，它只是从知识库里拿出来。

（2）第二层是把模型进行对齐和推理，让它有更复杂的推理能力，以及理解我们的意图。我们需要持续的 Scaling SFT（Supervised Fine-Tuning，监督式微调），甚至强化学习。通过人类大量的数据反馈，不断 Scaling 反馈数据，可以让模型变得更聪明、更准确。

（3）今年是 RLVR（强化学习与可验证奖励）爆发年。这里的“可验证”是什么意思？比如，数学可以验证、编程可能可以验证，但更广泛地，网页好不好看，就不大好验证了，它需要人来判断。

这就是为什么这个事情很难做，我们原来只能通过人类反馈数据来做，但人类反馈的数据里面噪音也非常多，而且场景也非常单一。

如果我们有一个可验证的环境，这时候我们可以让机器自己去探索、自己去发现这个反馈数据，自己来成长。这是我们面临的一个挑战。

### 3、从 Chat 到做事：新范式的开始

大家可能会问，是不是不停地训练模型，智能就越来越强？其实也不是。

2025年初，DeepSeek 出来，真是横空出世。大家原来在学术界、产业界都没有料到 DeepSeek 会突然出来，而且性能确实很强，一下子让很多人感到很震撼。

我们当时就想一个问题，也许在 DeepSeek 这种范式下，Chat（对话）差不多算是解决了。也就是说我们做得再好，在 Chat 上可能做到最后跟 DeepSeek 差不多。或许我们可以再个性化一点，变成有情感的 Chat，或者再复杂一点，但是总的来讲，这个范式可能基本到头了，剩下更多的反而是工程和技术的问题。

那么，AI 下一步朝哪个方向发展？我们当时的想法是，让每个人能够用 AI 做一件事情，这可能是下一个范式，原来是 Chat，现在是真的做事了。

当时有两个方向，一个是编程，做 Coding、做 Agent；另一个是用 AI 来帮我们做研究，类似于 DeepResearch，甚至写一个复杂的研究报告。我们现在的选择是把 Coding、Agentic、Reasoning 这三个能力整合在一起。

## 二、林俊旸的发言

### 4、千问是怎么开源的

千问的开源模型比较多，很多人问这是为什么？

这起源于2023年8月3日，我们开源了一个小模型，它是我们内部用来做实验的 1.8B 模型。我们做预训练，资源毕竟有限，你做实验的话不能通通用 7B 的模型来验，就拿 1.8B 的来验。

当时我的师弟跟我说，我们要把这个模型开源出去。我非常不理解，我说这个模型在2023年几乎是一个不可用的状态，为什么要开源出去？他跟我说 7B 很消耗机器资源，很多硕士生和博士生没有机器资源做实验，如果 1.8B 开源出去的话，很多同学就有机会毕业了，这是很好的初心。

干着干着，手机厂商跑来跟我们说 7B 太大，1.8B 太小，能不能给我们干一个 3B 或 4B 的，这个容易，没有什么很难的事情。一路干下来，型号类型越来越多，跟服务大家多多少少有一点关系。

### 5、我们的追求是多模态模型

我们自己内心追求的，不仅仅是服务开发者或者服务科研人员，而是能不能做一个 Multimodal Foundation Agent（多模态基础智能体）。

我特别相信这件事情，2023年的时候大模型是一个大家都不要的东西，多多少少有那么几分大炼钢铁的成分，多模态是我们从那时就一直想做的事情。

为什么呢？我们觉得如果你想做一个智能的东西，天然的应该是 Multimodal（多模态），当然带有不同看法，各个学者都有一些看法，多模态能不能驱动智力的问题。我懒得吵这个架，人有眼睛和耳朵可以做更多的事情，我更多的考虑是 Foundation（基础智能体）有更多的生产力，能不能更好地帮助人类，毫无疑问我们应该做视觉，我们应该做语音。

更进一步，我们要做什么东西呢？Omni 的模型（全模态模型）不仅仅是能够理解文本、视觉、音频，我们可能还让它生成文本、音频。今天我们已经做到了，但是我们还没有做到把视觉生成结合在一起。如果做到三进三出，我觉得至少是我个人喜欢的东西。

## 三、姚顺雨的发言

### 6、To C 和 To B 的差异

我的一个观察是 To C（消费者模型）和 To B（商业用户模型）发生了明显的分化。

大家一想到 AI，就会想到两个东西，一个是 ChatGPT，另外一个是 Claude Code。它们就是做 To C 和 To B 的典范。

对于 To C 来说，大部分人大部分时候不需要用到那么强的智能，可能今天的 ChatGPT 和去年相比，研究分析的能力变强了，但是大部分人大部分时候感受不到，更多把它当作搜索引擎的加强版，很多时候也不知道该怎么去用，才能把它的智能激发出来。

但对于 To B 来说，很明显的一点是智能越高，代表生产力越高，也就越值钱。所以，大部分时候很多人就是愿意用最强的模型。一个模型是200美元/月，第二强或者差一些的模型是50美元/月、20美元/月，我们今天发现很多美国的人愿意花溢价用最好的模型。可能他的年薪是20万美元，每天要做10个任务，一个非常强的模型可能10个任务中八九个做对了，差的是做对五六个，问题是你不知道这五六个是哪五六个的情况下，需要花额外精力去监控这个事情。

所以，在 To B 这个市场上，强的模型和稍微弱点的模型，分化会越来越明显。

### 7、垂直整合和模型应用分层

我的第二点观察是，基础模型和上层应用，到底是垂直整合，还是模型应用分层，也开始出现了分化。

比如，ChatGPT Agent 是垂直整合，Claude（或者 Gemini）+ Manus 是模型应用分层。过去大家认为，当你有垂直整合能力肯定做得更好，但起码今天来看并不一定。

首先，模型层和应用层需要的能力还是挺不一样的，尤其是对于 To B 或者生产力这样的场景来说，可能更大的预训练还是一个非常关键的事情，这个事情对于产品公司确实很难做。但是想要把这么一个特别好的模型用好，或者让这样的模型有溢出能力，也需要在应用侧或者环境这一侧做很多相应的事情。

我们发现，其实在 To C 的应用上，垂直整合还是成立的，无论 ChatGPT 还是豆包，模型和产品是非常强耦合、紧密迭代的。但是对于 To B 来说，这个趋势似乎是相反的，模型在变得越来越强、越来越好，但同样会有很多应用层的东西将好的模型用在不同的生产力环节。

### 8、需要更大的 Context

怎么让今天的大模型或者 AI 能够给用户提供更多价值？我们发现，很多时候需要的是额外的 Context（上下文）。

比如，我问 AI 今天该去吃什么？其实，你今天问 ChatGPT 和你去年问或者明天问，答案应该会差很多。这个事情想要做好，不是说你需要更大的模型、更强的预训练、更强的强化学习，而是可能需要更多额外的输入，或者叫 Context。如果它知道我今天特别冷，我需要吃些暖和的，我在今天这样的范围活动，可能我老婆在另一个地方吃什么等各种各样的事情，它的回答就会更好。

回答这样的问题，更多需要的是额外的输入。我和老婆聊了很多天，我们可以把聊天记录转发给元宝，把额外的输入用好，会给用户带来很多额外的价值。这是我们对 To C 的思考。

## 四、圆桌对话：中国 AI 的未来

李广密（主持人）：我想问大家一个问题，在三年和五年以后，全球最领先的 AI 公司是中国团队的概率有多大？我们从今天的跟随者变成未来的引领者，这个过程到底还有哪些需要去做好？

### 9、姚顺雨的回答

我觉得概率还挺高的，我挺乐观的。目前看起来，任何一个事情一旦被发现，在中国就能够很快的复现，在很多局部做得更好，包括之前制造业、电动车这样的例子已经不断地发生。

我觉得可能有几个比较关键的点。

（1）中国的光刻机到底能不能突破，如果最终算力变成了瓶颈，我们能不能解决算力问题。

（2）能不能有更成熟的 To B 市场。今天我们看到很多做生产力或者做 To B 的模型和应用，还是会诞生在美国，因为支付意愿更强，文化更好。今天在国内做这个事情很难，所以大家都会选择出海或者国际化。这和算力是比较大的客观因素。

（3）更重要的是主观因素，我觉得中国想要突破新的范式或者做非常冒险事情的人可能还不够多。也就是说，有没有更多有创业精神或者冒险精神的人，真的想要去做前沿探索或者范式突破的事情。我们到底能不能引领新的范式，这可能是今天中国唯一要解决的问题，因为其他所有做的事情，无论是商业，还是产业设计，还是做工程，我们某种程度上已经比美国做得更好。

### 10、林俊旸的回答

这个问题是个危险的问题，理论上这个场合是不可以泼冷水的，但如果从概率上来说，我可能想说一下我感受到的中国和美国的差异。比如说，美国的 Compute（算力）可能整体比我们大1-2个数量级，但我看到不管是 OpenAI 还是什么，他们大量的算力投入到的是下一代研究当中去，我们今天相对来说捉襟见肘，光交付可能就已经占据了我们绝大部分的算力，这会是一个比较大的差异。

这可能是历史上就有的问题，创新是发生在有钱的人手里，还是穷人手里。穷人不是没机会，我们觉得这些富哥真的很浪费，他们训练了这么多东西，可能训练了很多也没什么用。但今天穷的话，比如今天所谓的算法 Infra（基础设施）联合优化的事情，如果你真的很富，就没有什么动力去做这个事情。

未来可能还有一个点，如果从软硬结合的角度，我们下一代的模型和芯片的软硬结合，是不是真的有可能做出来？

2021年，我在做大模型，阿里做芯片的同学，找我说能不能预测一下，三年之后这个模型是不是 Transformer，是不是多模态。为什么是三年呢？他说我们需要三年时间才能流片。我当时的回答是三年之后在不在阿里巴巴，我都不知道！但我今天还在阿里巴巴，它果然还是 Transformer，果然还是多模态，我非常懊悔为什么当时没有催他去做。当时我们的交流非常鸡同鸭讲，他给我讲了一大堆东西，我完全听不懂，我给他讲，他也不知道我们在做什么，就错过了这个机会。这个机会有没有可能再来一次？我们虽然是一群穷人，是不是穷则思变，创新的机会会不会发生在这里？

今天我们教育在变好，我属于90年代靠前一些的，顺雨属于90年代靠后一点的，我们团队里面有很多00后，我感觉大家的冒险精神变得越来越强。美国人天然有非常强烈的冒险精神，一个很典型的例子是当时电动车刚出来，甚至开车会意外身亡的情况下，依然会有很多富豪们都愿意去做这个事情，但在中国，我相信富豪们是不会去干这个事情的，大家会做一些很安全的事情。今天大家的冒险精神开始变得更好，中国的营商环境也在变得更好的情况下，我觉得是有可能带来一些创新的。概率没那么大，但真的有可能。

三年到五年后，最领先的 AI 公司是一家中国公司的概率，我觉得是20%吧，20%已经非常乐观了，因为真的有很多历史积淀的原因在这里。

### 11、唐杰的回答

首先我觉得确实要承认，无论是做研究，尤其是企业界的 AI Lab，和美国是有差距的，这是第一点。

我们做了一些开源，可能有些人觉得很兴奋，觉得中国的大模型好像已经超过美国了。其实可能真正的情况是我们的差距也许还在拉大，因为美国那边的大模型更多的还在闭源，我们是在开源上面玩了让自己感到高兴的，我们的差距并没有像我们想象的那样好像在缩小。有些地方我们可能做的还不错，我们还要承认自己面临的一些挑战和差距。

但我觉得，现在慢慢变得越来越好。

（1）90后、00后这一代，远远好过之前。一群聪明人真的敢做特别冒险的事，我觉得现在是有的，00后这一代，包括90后这一代是有的，包括俊旸、Kimi、顺雨都非常愿意冒风险来做这样的事情。

（2）咱们的环境可能更好一些，无论是国家的环境，比如说大企业和小企业之间的竞争，创业企业之间的问题，包括我们的营商环境。

（3）回到我们每个人自己身上，就是我们能不能坚持。我们能不能愿意在一条路上敢做、敢冒险，而且环境还不错。如果我们笨笨的坚持，也许走到最后的就是我们。

## 科技动态

1、[载人飞艇](http://news.cnhubei.com/content/2026-01/11/content_19769355.html)

1月9日，湖北制造的载人飞艇祥云 AS700，完成了荆门至武汉往返航程。这是全国首次载人飞艇商业飞行，可能也是目前世界唯一运作的商业载人飞艇。

![](https://cdn.beekka.com/blogimg/asset/202601/bg2026011101.webp)

飞艇总长50米，最大载客量9人。由于载客量太小，不可能用作常规的交通工具，只能做一些观光飞行。

![](https://cdn.beekka.com/blogimg/asset/202601/bg2026011102.webp)

2、[鼻子触控](https://variationsonnormal.com/2011/04/28/finger-nose-stylus-for-touchscreens/)

一个英国发明家想在洗澡时使用手机，结果因为手指带水无法触控。

他灵机一动，发明了戴在鼻子上的触控笔。

![](https://cdn.beekka.com/blogimg/asset/202601/bg2026011014.webp)

它的结构很简单，就是一个石膏纤维的鼻管，里面插着一支触控笔。

![](https://cdn.beekka.com/blogimg/asset/202601/bg2026011015.webp)

这个发明看上去很有用，可以解放双手，也适合戴手套的情况和残疾人士。

![](https://cdn.beekka.com/blogimg/asset/202601/bg2026011016.webp)

3、[越南禁止不可跳过的广告](https://saigoneer.com/vietnam-news/28652-vienam-bans-unskippable-ads,-requires-skip-button-to-appear-after-5-seconds)

越南近日颁布第342号法令，禁止不可跳过的广告，将于2026年2月15日起生效。

![](https://cdn.beekka.com/blogimg/asset/202601/bg2026011013.webp)

法令规定，视频广告的等待时间必须在5秒以内，否则观众可以选择跳过。而且，关闭方式应该是清晰简便的，禁止使用迷惑用户的虚假或模糊符号。

这明显针对 Youtube 等视频平台的片头广告。这让人第一次感到，越南互联网值得叫好。

## 文章

1、[我所有的新代码都将闭源](https://x.com/MarcJSchmidt/status/2009688028931875156)（英文）

作者是一个开源软件贡献者。他感到，自己的开源代码都被大模型抓取，导致仓库访问者减少，进而也没有收入，所以他后面的代码都要闭源。

2、[网站的视觉回归测试](https://marending.dev/notes/visual-testing/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202601/bg2026011201.webp)

本文介绍如何使用 Playwright，对网页进行视觉测试，看看哪里出现变动。

3、[我用 PostgreSQL 代替 Redis](https://dev.to/polliog/i-replaced-redis-with-postgresql-and-its-faster-4942)（英文）

![](https://cdn.beekka.com/blogimg/asset/202601/bg2026011202.webp)

Redis 是最常用的缓存工具，作者介绍它的痛点在哪里，怎么用 PostgreSQL 数据库替代。

4、[如何用 CSS 修复水平滚动条](https://aartaka.me/easy-fixes.html)（英文）

![](https://cdn.beekka.com/blogimg/asset/202601/bg2026011008.webp)

一篇 CSS 初级教程，介绍四个简单的技巧，让网页不会出现水平滚动条（即避免溢出）。

5、[消息队列原理简介](https://www.cloudamqp.com/blog/message-queues-exaplined-with-analogies.html)（英文）

![](https://cdn.beekka.com/blogimg/asset/202601/bg2026011403.webp)

本文是初级教程，介绍消息队列（mesage queue）的概念和作用。

6、[macOS Tahoe 的圆角问题](https://noheger.at/blog/2026/01/11/the-struggle-of-resizing-windows-on-macos-tahoe/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202601/bg2026011207.webp)

macOS 最新版本 Tahoe 加大了圆角半径，造成调整窗口大小时经常失败。作者认为，从操作角度看，圆角面积最好超过端头的50%。

## 工具

1、[whenwords](https://github.com/dbreunig/whenwords)

![](https://cdn.beekka.com/blogimg/asset/202601/bg2026011105.webp)

本周，GitHub 出现了一个奇特的库，没有一行代码，只有一个接口文档。

用户需要自己将接口文档输入大模型，并指定编程语言，生成相应的库代码再使用。

以后会不会都是这样，软件库没有代码，只有接口描述？

2、[Hongdown](https://github.com/dahlia/hongdown)

Markdown 文本的格式美化器，根据预设的规则，修改 Markdown 文本的风格样式。

3、[VAM Seek](https://github.com/unhaya/vam-seek)

![](https://cdn.beekka.com/blogimg/asset/202601/bg2026011204.webp)

一个开源的网页视频播放器，会自动显示多个时点的视频缩略图，便于快速点击跳转。

4、[kodbox](https://github.com/kalcaddle/kodbox)

![](https://cdn.beekka.com/blogimg/asset/202601/bg2026011205.webp)

开源的网页文件管理器。

5、[Nigate](https://github.com/hoochanlon/Free-NTFS-for-Mac)

![](https://cdn.beekka.com/blogimg/asset/202601/bg2026011103.webp)

让 Mac 电脑读写 NTFS 磁盘的开源工具。（[@hoochanlon](https://github.com/ruanyf/weekly/issues/8672) 投稿）

6、[Flippy Lid](https://github.com/huanglizhuo/Flappy.Lid)

![](https://cdn.beekka.com/blogimg/asset/202601/bg2026011206.webp)

一个实验性软件，把 macbook 铰链开合作为输入，可以玩 Flippy Lid，也可以作为密码解锁。（[@huanglizhuo](https://github.com/ruanyf/weekly/issues/8683) 投稿）

7、[Jumble](https://github.com/CodyTseng/jumble)

![](https://cdn.beekka.com/blogimg/asset/202601/bg2026011301.webp)

nostr 网络的开源 Web 客户端，专门用来浏览以 feed 内容为主的 relay 节点。（[@CodyTseng](https://github.com/ruanyf/weekly/issues/8692) 投稿）

8、[Clash Kit](https://github.com/wangrongding/clash-kit)

一个基于 Node.js 的 Clash 命令行管理工具。（[@wangrongding](https://github.com/ruanyf/weekly/issues/8703) 投稿）

9、[SlideNote](https://github.com/maoruibin/SlideNote)

![](https://cdn.beekka.com/blogimg/asset/202601/bg2026011501.webp)

开源的 Chrome 浏览器插件，在侧边栏做笔记，支持跨设备自动同步。（[@maoruibin](https://github.com/ruanyf/weekly/issues/8715) 投稿）

10、[NginxPulse](https://github.com/likaia/nginxpulse)

![](https://cdn.beekka.com/blogimg/asset/202601/bg2026011502.webp)

开源的 Nginx 访问日志分析与可视化面板，提供实时统计、PV 过滤、IP 归属地、客户端解析。
（[@likaia](https://github.com/ruanyf/weekly/issues/8696) 投稿）

## AI 相关

1、[Auto Paper Digest (APD)](https://github.com/brianxiadong/auto-paper-digest)

![](https://cdn.beekka.com/blogimg/asset/202601/bg2026010901.webp)

一个 AI 应用，自动从 arXiv 抓取每周的热门 AI 论文，通过 NotebookLM 生成视频讲解，并能发布到抖音。（[@brianxiadong](https://github.com/brianxiadong/auto-paper-digest) 投稿）

2、[CC Switch](https://github.com/farion1231/cc-switch)

![](https://cdn.beekka.com/blogimg/asset/202601/bg2026011104.webp)

一个跨平台桌面应用，一键切换 Claude Code / Codex / Gemini CLI 的底层模型，以及完成其他的管理设置。（[@farion1231](https://github.com/ruanyf/weekly/issues/8674) 投稿）

3、[网易云音乐歌单 AI 分析](https://wangyiyun.yeyuqiudeng.com/)

![](https://cdn.beekka.com/blogimg/asset/202601/bg2026011404.webp)

使用 AI 分析用户的网易云音乐歌单，进行总结。（[@immotal](https://github.com/ruanyf/weekly/issues/8706) 投稿）

## 资源

1、[EverMsg](https://www.evermsg.com/zh)

![](https://cdn.beekka.com/blogimg/asset/202601/bg2026010902.webp)

这个网站可以查看 BTC 区块链的 OP_RETURN 字段，该字段记录了一段文本，只要发上区块链就永远不会删除和修改。（[@blueslmj](https://www.evermsg.com/zh) 投稿）

2、[DeepTime Mammalia](https://github.com/SeanWong17/Mammalia-tree)

![](https://cdn.beekka.com/blogimg/asset/202601/bg2026011208.webp)

沉浸式 3D/2D 网页可视化项目，交互式哺乳纲演化树，探索哺乳动物2亿年的演化。（[@SeanWong17](https://github.com/ruanyf/weekly/issues/8688) 投稿）

## 图片

1、[冰下修船](https://eugene.kaspersky.com/2022/04/26/how-to-repair-the-underside-of-a-ships-hull-still-in-the-river-in-50%CB%9Ac-yakutsk/)

俄罗斯有一个船厂，位于北极圈附近。每年冬天，船坞都要结冰。

![](https://cdn.beekka.com/blogimg/asset/202601/bg2026011001.webp)

为了冬天也能修船，船厂会把冰层凿掉一块，露出船底。

![](https://cdn.beekka.com/blogimg/asset/202601/bg2026011002.webp)

冰层通常不会那么厚，不会结冰到船底，必须分层凿开。工人先用电锯，锯开最上层的冰层，然后等待下面的河水结冰，再用电锯向下切割，反复多次，直到船底结冰。

![](https://cdn.beekka.com/blogimg/asset/202601/bg2026011003.webp)

有时，需要凿开一条很长的冰槽。

![](https://cdn.beekka.com/blogimg/asset/202601/bg2026011004.webp)

![](https://cdn.beekka.com/blogimg/asset/202601/bg2026011005.webp)

下图是工人进入冰层下方，检修船底，由于冰下工作条件恶劣且有危险性，工人的工资都较高。

![](https://cdn.beekka.com/blogimg/asset/202601/bg2026011006.webp)

![](https://cdn.beekka.com/blogimg/asset/202601/bg2026011007.webp)

## 言论

1

我对自己的代码被大模型吸收感觉如何？

我很高兴这样，因为我把这看作是我一生努力的延续：民主化代码、系统和知识。

大模型让我们更快编写更好、更高效的软件，并让小团队有机会与大公司竞争。这和 90 年代开源软件所做的事情一样。然而，这项技术太重要，绝不能只掌握在少数公司手中。

-- [Antirez](https://antirez.com/news/158)，Redis 项目的创始人

2、

即使你不相信 AI，但跳过它对你和你的职业都没有帮助。

以前，你熬夜编程，看到项目顺利运行时，心潮翻滚。现在，如果你能有效利用 AI，可以建造更多更好的项目。乐趣依旧存在，未受影响。

-- [Antirez](https://antirez.com/news/158)，Redis 项目的创始人

3、

如果你不写作，你就是一个有限状态机。写作时，你拥有图灵机的非凡力量。

-- [曼纽尔·布卢姆](http://muratbuffalo.blogspot.com/2026/01/the-agentic-self-parallels-between-ai.html)（Manuel Blum），图灵奖得主

4、

人们陷入困境有三个主要原因：（1）行动力不足，（2）行动方向错误，（3）等待天上掉馅饼（幻想问题会缓解而拒绝采取行动）。

-- [《当你想摆脱困境》](https://www.experimental-history.com/p/so-you-wanna-de-bog-yourself)

## 往年回顾

[年终笔记四则](https://www.ruanyifeng.com/blog/2025/01/weekly-issue-334.html)（#334）

[YouTube 有多少个视频？](https://www.ruanyifeng.com/blog/2023/12/weekly-issue-284.html)（#284）

[AI 聊天有多强？](https://www.ruanyifeng.com/blog/2022/12/weekly-issue-234.html)（#234）

[政府的存储需求有多大？](https://www.ruanyifeng.com/blog/2021/11/weekly-issue-184.html)（#184）

（完）

