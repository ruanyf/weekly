# 科技爱好者周刊（第 363 期）：最好懂的神经网络解释

这里记录每周值得分享的科技内容，周五发布。

本杂志[开源](https://github.com/ruanyf/weekly)，欢迎[投稿](https://github.com/ruanyf/weekly/issues)。另有[《谁在招人》](https://github.com/ruanyf/weekly/issues/7408)服务，发布程序员招聘信息。合作请[邮件联系](mailto:yifeng.ruan@gmail.com)（yifeng.ruan@gmail.com）。

## 封面图

![](https://cdn.beekka.com/blogimg/asset/202508/bg2025082708.webp)

广西河池市罗城县的天坑景区，在半山腰建造了一个“悬崖书店”，非常壮观。（[via](https://www.news.cn/culture/20250811/b6c23974a3dd42ae8b1c00340235238c/a.html)）

## 最好懂的神经网络解释

神经网络是 AI 的算法基础。

前些天，我在美国科普网站《量子杂志》（Quanta Magazine），读到一篇[科普文章](https://www.quantamagazine.org/how-can-ai-id-a-cat-an-illustrated-guide-20250430/)，用一个浅显的例子 + 插图，解释了神经网络，堪称我见过的最好懂的教程。

下面就是我整理出来的中文版。

1、

![](https://cdn.beekka.com/blogimg/asset/202506/bg2025082601.webp)

你的计算机里有一堆照片，你想要从中找出猫的照片，应该怎么做？

你很快意识到，这其实是**一个机器分类问题**，计算机要把照片分成两类：一类是猫，另一类不是猫。

2、

![](https://cdn.beekka.com/blogimg/asset/202508/bg2025082801.webp)

让我们把这个问题想成一张地图，中间有一条分界线，把地图分成两个国家。

你的任务是，找出这条分界线的确切位置。这样的话，给出任意一个点，你就知道它在分界线的左边还是右边。

3、

![](https://cdn.beekka.com/blogimg/asset/202508/bg2025082802.webp)

作为已知条件，地图上很多点的归属，是已知的。比如上图中，三角点属于 A 国，方块点属于 B 国。

你要做的就是，从这些点推测出分界线。

4、

![](https://cdn.beekka.com/blogimg/asset/202506/bg2025082602.webp)

我们可以建立一个数学函数（上图的点 N），处理这个问题。

这个函数接受两个参数，分别是每个点的 x 坐标和 y 坐标，函数的返回值是0～1之间的一个值，表示该点有多大概率属于当前国家。

5、

![](https://cdn.beekka.com/blogimg/asset/202506/bg2025082603.webp)

你就用已知的点，去训练这个函数。

计算机自动根据每次训练的误差，调整每个参数的权重值，最终得到一条最接近的分界线。

6、

![](https://cdn.beekka.com/blogimg/asset/202508/bg2025082803.webp)

笔直的分界线只是最理想的情况，现实世界中，分界线更可能是七拐八弯的曲线。

7、

![](https://cdn.beekka.com/blogimg/asset/202508/bg2025082604.webp)

这时，只用一个函数来确定分界线，就不太够了。你需要多个函数，从不同角度进行判断。

8、

![](https://cdn.beekka.com/blogimg/asset/202508/bg2025082605.webp)

判断过程甚至需要分阶段进行，也就是需要多层函数。

这些函数组成的网络，很像人类的神经系统，所以称为神经网络。每个函数就是网络中的一个神经元。

9、

![](https://cdn.beekka.com/blogimg/asset/202508/bg2025082606.webp)

好了，现在再回到猫的照片。我们同样需要建立一个函数，来判断照片是猫的概率。

地图分界线的函数只需要 X 和 Y 两个参数，猫照片的函数就不行了，需要把整张照片输入进去。假如照片大小是2500个像素，那么函数就有2500个参数。

10、

![](https://cdn.beekka.com/blogimg/asset/202508/bg2025082607.webp)

函数的参数个数，可以看成空间的维度，2个参数就是二维空间，2500个参数就是2500维的空间。

猫照片的函数就是在2500维空间里面，通过大量训练，找到一条分界线，从而算出任意一张照片落在线内的概率有多大。

## 科技动态

1、青岛本周启用全球首栋“[零碳大楼](https://www.eet-china.com/mp/a432212.html)”，使用100%的绿色能源。

![](https://cdn.beekka.com/blogimg/asset/202506/bg2025082501.webp)

大楼高117米，共23层，外部的幕墙都是光伏玻璃，每天可以发电1500度。

![](https://cdn.beekka.com/blogimg/asset/202506/bg2025082502.webp)

最有意思的是，它有一个地下能源室，放着14辆报废的电动汽车。它们的电池用来储能，供用电高峰时使用。

另外，停入车库的电动汽车，也会跟大楼的电网连接，为大楼反向供电，车主可以获得供电费。

2、广州医科大学完成了全球首例[猪肺移植到人体](https://cn.nytimes.com/health/20250826/lung-transplant-pig-human/)手术。

![](https://cdn.beekka.com/blogimg/asset/202508/bg2025082611.webp)

他们把一个经过6处基因编辑的猪肺，移植到一个脑死亡病人体内。

起初，猪肺成功地输送氧气并排出二氧化碳，在24小时内，器官出现了损伤迹象，并在第三天和第九天出现了身体排斥该器官的迹象。

病人家属出于支持医学研究，同意了该项实验，但在第9天时要求实验结束。作为首次尝试，实验结果令人鼓舞，但因为只移植了左肺，病人的右肺是完好的，有人批评本次实验并未证明猪肺能够独立维持生命。

3、韩国人发明了一款[90度订书机](https://www.core77.com/posts/138232/The-Cornervery-A-90-Degree-Stapler)，可以钉上直角的订书钉。

![](https://cdn.beekka.com/blogimg/asset/202506/bg2025082508.webp)

![](https://cdn.beekka.com/blogimg/asset/202506/bg2025082509.webp)

这种订书机有很多好处，节约转角处重叠的纸板，也省掉了胶带和胶水。

![](https://cdn.beekka.com/blogimg/asset/202506/bg2025082510.webp)

![](https://cdn.beekka.com/blogimg/asset/202506/bg2025082511.webp)

4、美国笔记本品牌 [Framework](https://frame.work/ro/en/laptop16?tab=whats-new)，以生产模块化笔记本闻名。

![](https://cdn.beekka.com/blogimg/asset/202508/bg2025082707.webp)

它最近推出了可以更换 CPU 和 GPU 的笔记本，我的印象中，这应该是世界第一款。

![](https://cdn.beekka.com/blogimg/asset/202508/bg2025082706.webp)

上图就是它的 GPU 模块，打开笔记本后盖，抽出来就能更换。这种做法值得推广，可以减少电子垃圾。

5、人死了，他的数据会留存下来。

一位美国律师最近提出，法律应该设立死者的[数字遗产权](https://www.theregister.com/2025/08/09/dead_need_ai_data_delete_right/)，防止数字遗骸被利用。

大多数人死时，不会留下遗言说明，如何处理他在互联网平台上生成的内容。律师认为，法律应该明确规定，防止平台使用死者遗留的内容，用来训练 AI。

## 文章

1、[谷歌宣布安卓开发者认证计划](https://www.androidauthority.com/android-developer-verification-requirements-3590911/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202508/bg2025082609.webp)

安卓一直可以自行安装程序，不通过软件商店。谷歌打算改变这种做法，从明年9月开始，对所有应用作者进行认证。国产手机因为没有谷歌框架，估计不受影响。

2、[OAuth 协议为什么这样设计](https://www.ducktyped.org/p/an-illustrated-guide-to-oauth)（英文）

![](https://cdn.beekka.com/blogimg/asset/202508/bg2025082610.webp)

OAuth 是第三方登录协议，设计得有点复杂。本文解释这样设计的原因，每一个细节都讲得很清楚，让人豁然开朗。

3、[CSS 的 random() 函数](https://webkit.org/blog/17285/rolling-the-dice-with-css-random/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202506/bg2025082507.webp)

本文介绍如何使用 CSS 的随机数函数 random()，用纯 CSS 代码制作星空、转轮等。

4、[容器管理工具 Portainer 和 Dockge 比较](https://www.xda-developers.com/reasons-use-two-apps-manage-docker-containers/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202507/bg2025070712.webp)

当你的计算机启用了多个 Docker 容器，就需要用到容器管理工具。本文比较了两种常用工具 Portainer 和 Dockge 的差异。

5、[Mac 电脑如何查看进程信息](https://til.simonwillison.net/macos/fs-usage)（英文）

![](https://cdn.beekka.com/blogimg/asset/202507/bg2025071001.webp)

Mac 电脑有一个内置的 [fs_usage](https://ss64.com/mac/fs_usage.html) 命令，可以查看进程信息，最有用的就是查看进程正在操作什么文件。

6、[老旧 Kindle 改造成个人仪表盘](https://samkhawase.com/blog/hacking-kindle/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202504/bg2025043001.webp)

老旧 Kindle 怎么利用？本文将它改造成墨水屏的个人仪表盘。

## 工具

1、[Gonzo](https://github.com/control-theory/gonzo)

![](https://cdn.beekka.com/blogimg/asset/202508/bg2025082705.webp)

基于终端的日志文件查看工具。

2、[Filestash](https://github.com/mickael-kerjean/filestash)

![](https://cdn.beekka.com/blogimg/asset/202506/bg2025082506.webp)

一个网页版的文件管理器，支持 S3、FTP、WebDAV、Git、Mysql、Backblaze 等各种协议和云服务。

3、[Anchor Relay](https://anchor.dev/relay)

![](https://cdn.beekka.com/blogimg/asset/202506/bg2025082201.webp)

生成免费 HTTPs 证书的网站。

4、[PlutoPrint](https://github.com/plutoprint/plutoprint)

![](https://cdn.beekka.com/blogimg/asset/202506/bg2025082202.webp)

一个 Python 库，将 HTML 网页/代码转为高质量的 PDF 文件。

5、[MarkFlowy](https://markflowy.vercel.app/zh)

![](https://cdn.beekka.com/blogimg/asset/202506/bg2025082402.webp)

跨平台的 Markdown 桌面编辑器，内置 AI 支持，代码开源。（[@drl990114](https://github.com/ruanyf/weekly/issues/7618) 投稿）

6、[Pixel Art Generator](https://imgtopixel.art/)

![](https://cdn.beekka.com/blogimg/asset/202506/bg2025082404.webp)

一个在线的 Web 应用，一键将图片转成像素画，可以设置像素尺寸、颜色数量、调色板风格。（[@leah626888](https://github.com/ruanyf/weekly/issues/7619) 投稿）

7、[Peek Pop](https://github.com/u-Sir/peek-pop)

![](https://cdn.beekka.com/blogimg/asset/202506/bg2025082503.webp)

开源的浏览器插件，鼠标指向某个链接时，弹出一个窗口，可以预览该链接。（[@u-Sir](https://github.com/ruanyf/weekly/issues/7626) 投稿）

8、[naive-ui-pro](https://github.com/Zheng-Changfu/naive-ui-pro)

![](https://cdn.beekka.com/blogimg/asset/202506/bg2025082504.webp)

中后台管理面板的前端解决方案，基于 vue3 + vite。（[@Zheng-Changfu](https://github.com/ruanyf/weekly/issues/7627) 投稿）

9、[文件快传](https://github.com/MatrixSeven/file-transfer-go)

![](https://cdn.beekka.com/blogimg/asset/202508/bg2025082702.webp)

开源的 P2P 文件传输的网页应用，基于 WebRTC。（[@MatrixSeven](https://github.com/ruanyf/weekly/issues/7631) 投稿）

10、[Dataset Viewer](https://github.com/stardustai/dataset-viewer)

![](https://cdn.beekka.com/blogimg/asset/202508/bg2025082703.webp)

开源的桌面文件查看器，支持绝大部分常用格式，可以快速查看本地或云端的大文件和压缩包。（[@F-loat](https://github.com/ruanyf/weekly/issues/7634) 投稿）

11、[字帖生成器](https://luhuadong.com/tools/calligraphy-generator)

![](https://cdn.beekka.com/blogimg/asset/202508/bg2025082804.webp)

输入中文文字，生成带有米字格和拼音的字帖的网页应用。（[@luhuadong](https://github.com/ruanyf/weekly/issues/7652) 投稿）

12、[云之彼端串口助手](https://serial.xywml.com/)

![](https://cdn.beekka.com/blogimg/asset/202508/bg2025082805.webp)

一款 Web 应用，在线串口调试助手，兼容 STM32、DSP、物联网 IoT 设备。（[@xywml](https://github.com/ruanyf/weekly/issues/7658) 投稿）

## AI 相关

1、[DeepWiki](https://deepwiki.com/)

![](https://cdn.beekka.com/blogimg/asset/202508/bg2025082608.webp)

这个网站把任意 GitHub 仓库，变成一个 Wiki，详细解释代码运行过程，阅读代码的好帮手，参见[教程](https://www.aitidbits.ai/p/deepwiki)。

2、[Daily Commit Summarizer](https://github.com/nanbingxyz/daily-commit-summarizer)

![](https://cdn.beekka.com/blogimg/asset/202506/bg2025082401.webp)

一个 GitHub Actions 模版，用来为指定仓库的代码提交，生成每日的总结报告，发送到飞书。（[@nanbingxyz](https://github.com/ruanyf/weekly/issues/7612) 投稿）

3、[VideoAdGuard](https://github.com/Warma10032/VideoAdGuard)

![](https://cdn.beekka.com/blogimg/asset/202508/bg2025082704.webp)

开源的浏览器插件，使用 AI 自动识别和跳过 B 站视频里面插入的广告片段。（[@Warma10032](https://github.com/ruanyf/weekly/issues/7646) 投稿）

## 资源

1、[天体地图](https://atlasof.space/)（Atlas of Space）

![](https://cdn.beekka.com/blogimg/asset/202508/bg2025082701.webp)

太阳系在线地图，会根据日期显示每个行星的运动。

2、[all text in nyc](https://www.alltext.nyc/)

![](https://cdn.beekka.com/blogimg/asset/202508/bg2025081301.webp)

这个网站对纽约街景照片做了文字识别，可以搜索某个词在纽约街头（路牌/招牌）出现的地点。

3、[机械图书馆](https://mechanical-library.org/)（Mechanical Library）

![](https://cdn.beekka.com/blogimg/asset/202505/bg2025050407.webp)

这个网站详细介绍8种机械装置（比如[减速齿轮](https://mechanical-library.org/gear-reduction)）。

4、[Is this tech dead?](https://www.isthistechdead.com/)

![](https://cdn.beekka.com/blogimg/asset/202504/bg2025042903.webp)

用户输入一种技术的名字，这个网站会根据各种指标（网络热度、代码更新时间等等）判断该技术是否已经死亡。

## 图片

1、[日本最恐怖的车站](https://www.tokyocowboy.co/articles/doai-eki-japans-creepiest-station)

日本群马县和新潟县交界处的土合站，是一个无人值守的车站，被称为最恐怖的火车站。

![](https://cdn.beekka.com/blogimg/asset/202508/bg2025082612.webp)

该车站位于山腹之中，从大门进来以后，要向山体内往下步行，整整462级、长338米的台阶（下图），才能来到站台。

![](https://cdn.beekka.com/blogimg/asset/202508/bg2025082613.webp)

站台也是阴森森的，还能听到地下流水潺潺的声音。

![](https://cdn.beekka.com/blogimg/asset/202508/bg2025082614.webp)

站台上只有一间小小的候车室和厕所。

![](https://cdn.beekka.com/blogimg/asset/202508/bg2025082615.webp)

![](https://cdn.beekka.com/blogimg/asset/202508/bg2025082616.webp)

候车室里面留有纸笔，供游客留言和贴照片，也是为了消磨时间。

![](https://cdn.beekka.com/blogimg/asset/202508/bg2025082617.webp)

墙上的匿名留言和照片，进一步给这个洞穴般的车站增添了诡异的氛围，仿佛置身于《寂静岭》之中。

## 文摘

1、[不适感让你变强大](https://desunit.com/blog/in-the-long-run-llms-make-us-dumber/)

有一本畅销书曾经提出“兴奋效应”（hormesis）这个概念。它指的是少量的压力或不适感，会让我们变得更强大。

- 练习举重，肌肉可以增长。
- 接种疫苗，免疫力可以增加。
- 承担失败的风险，信心会增长。
- 通过解决难题，创造力得以扩展。

这种“兴奋效应”也适用于大脑，经常思考困难的问题，让思想经受考验，你才能学会思考。

但是，现在有了 AI，很多人就把问题交给 AI 去思考，让自己的大脑歇着。我担心，久而久之，我们会一步步丧失思考能力，直至变成生物傀儡。

最近有一项研究，科学家让参与者完全依靠 AI 来写论文，结果83％的人在写完后不久，无法引用自己论文中的任何内容。即使稍后让这些人重新独立写作论文，他们也会表现出大脑神经活动减少和无法完全投入思考，总是习惯性寻求 AI 的帮助。

研究人员创造出了“认知债务”这个词来描述这种现象：AI 确实带来了便利，但代价是牺牲我们的思考能力。

机器借给你脑力，你需要付出利息——你自身的思维能力。

我的建议是，明智地使用 AI，不要让它帮你解数学方程式，而要让它查看你的答案，来解释你可能错在哪里。你的原则是坚持独立思考，在这个基础上再加入 AI。

思考可能会让你觉得很累、不舒服，但它是你大脑的训练场，不适感让你的思考变得更强大。

## 言论

1、

我认为台积电是人类史上最好的公司之一，任何想买台积电股票的都是非常聪明的人。

-- Nvidia 董事长黄仁勋，台湾记者问他怎么看待美国政府可能入股台积电。他做了上面的回答，谁也不得罪，而且听了都很开心，他太会说话了。

2、

分布式系统，不是指系统分布在不同计算机，而是指系统包含两个或两个以上交互的进程，无论它们是否位于同一主机上。

-- [《什么是分布式系统》](https://notes.eatonphil.com/2025-08-09-what-even-is-distributed-systems.html)

3、

大模型是压缩信息的一种方式，即使不精确、有幻觉和遗漏，也比什么都没有要好。大模型已经是一个可用的、公开的、有损的互联网压缩视图。

-- [《大模型的权重是历史的一部分》](https://antirez.com/news/147)

4、

以前，编写软件好于手工操作；现在，编写 AI 提示好于编写软件。

-- [《提示式编程》](https://www.gibney.org/prompt_coding)

5、

whisper-large-v3 模型将中文视频的语音转成文字时，遇到静音的片段，会自动生成文字“仅供学习/研究，请在48小时后删除”，这说明它是用字幕组的字幕文件训练的。

-- [Hacker News 读者](https://news.ycombinator.com/item?id=44643922)

## 往年回顾

[你一生的故事](https://www.ruanyifeng.com/blog/2024/09/weekly-issue-316.html)（#316）

[自己做双语 EPUB 电子书](https://www.ruanyifeng.com/blog/2023/08/weekly-issue-266.html)（#266）

[极简主义的胜利](https://www.ruanyifeng.com/blog/2022/07/weekly-issue-216.html)（#216）

[视频学习胜过读书吗？](https://www.ruanyifeng.com/blog/2021/07/weekly-issue-166.html)（#166）

（完）

