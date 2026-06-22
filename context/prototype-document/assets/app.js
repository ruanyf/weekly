(function () {
  const issues = [
    {
      id: "400",
      number: 400,
      year: "2026",
      month: "06",
      week: "23",
      date: "2026-06-05",
      title: "rsync 的争论",
      image: "https://cdn.beekka.com/blogimg/asset/202606/bg2026060505.webp",
      summary: "AI 生成基础工具版本引发开源维护争论，也让测试、信任和维护成本重新进入讨论中心。",
      tags: ["开源", "AI", "工具"],
      sections: [
        {
          id: "section-rsync",
          title: "rsync 的争论",
          image: "https://cdn.beekka.com/blogimg/asset/202606/bg2026060501.webp",
          snippet: "rsync 维护者引入 AI 修补安全问题，并把工作重点转向测试用例。",
          body: "rsync 是计算机同步最常用的工具。最新版本被发现由 Claude 辅助生成，引发开发者对基础软件安全性的争论。"
        },
        {
          id: "section-dayoff",
          title: "今天可以放假吗",
          image: "https://cdn.beekka.com/blogimg/asset/202606/bg2026060602.webp",
          snippet: "AI 提高白领效率之后，工作时间和回报应该如何重新分配。",
          body: "当一周工作可以在几个小时内完成，团队应当讨论效率提升带来的福利，而不是只把结果转换成更多任务。"
        },
        {
          id: "section-siri",
          title: "防止 Siri 被唤醒",
          image: "https://cdn.beekka.com/blogimg/asset/202606/bg2026061102.webp",
          snippet: "苹果在会场音频中移除特定频段，避免现场设备被误唤醒。",
          body: "演示时频繁提到 Siri，却没有唤醒观众手机，原因是扩音系统处理了唤醒词的关键频率。"
        }
      ]
    },
    {
      id: "399",
      number: 399,
      year: "2026",
      month: "05",
      week: "22",
      date: "2026-05-29",
      title: "中国 AI 大厂访问记",
      image: "https://cdn.beekka.com/blogimg/asset/202606/bg2026060402.webp",
      summary: "一次访问 14 家 AI 与机器人公司的观察，记录算力、开源和组织风格的差异。",
      tags: ["AI", "产业", "开源"],
      sections: [
        {
          id: "section-compute",
          title: "算力的差距",
          image: "https://cdn.beekka.com/blogimg/asset/202606/bg2026060104.webp",
          snippet: "芯片供应限制让中国 AI 公司更强调计算效率。",
          body: "访问者发现，中国 AI 公司普遍面临算力不足，同时通过效率优化弥补基础设施差距。"
        },
        {
          id: "section-open-source",
          title: "开源的分歧",
          image: "https://cdn.beekka.com/blogimg/asset/202606/bg2026060404.webp",
          snippet: "模型规模越大，开源意愿和商业压力之间的冲突越明显。",
          body: "一部分公司把开源视为信仰，另一部分公司认为万亿参数模型更适合云端 API。"
        }
      ]
    },
    {
      id: "396",
      number: 396,
      year: "2026",
      month: "05",
      week: "19",
      date: "2026-05-09",
      title: "互联网通信的替代方案",
      image: "https://cdn.beekka.com/blogimg/asset/202605/bg2026051414.webp",
      summary: "从替代通信方案到逆向验证码，关注互联网基础设施和 AI 工具动态。",
      tags: ["互联网", "AI", "安全"],
      sections: [
        {
          id: "section-communication",
          title: "互联网通信的替代方案",
          image: "https://cdn.beekka.com/blogimg/asset/202605/bg2026051412.webp",
          snippet: "当传统网络不可用时，离线和近场通信方案重新变得重要。",
          body: "文章讨论互联网通信的脆弱性，以及在特殊场景中保持信息流动的替代方案。"
        },
        {
          id: "section-captcha",
          title: "逆向验证码",
          image: "https://cdn.beekka.com/blogimg/asset/202604/bg2026042007.webp",
          snippet: "验证码也可以反过来证明用户是否真的理解页面任务。",
          body: "逆向验证码把交互验证变成一个更贴近真实任务的问题。"
        }
      ]
    },
    {
      id: "263",
      number: 263,
      year: "2023",
      month: "07",
      week: "29",
      date: "2023-07-21",
      title: "开源软件如何赚钱？",
      image: "https://cdn.beekka.com/blogimg/asset/202307/bg2023072101.webp",
      summary: "围绕开源商业模式，讨论捐赠、云服务、企业支持和社区维护。",
      tags: ["开源", "商业", "社区"],
      sections: [
        {
          id: "section-oss-money",
          title: "开源软件如何赚钱？",
          image: "https://cdn.beekka.com/blogimg/asset/202307/bg2023072102.webp",
          snippet: "开源项目既需要保持开放，也需要找到可持续维护资金。",
          body: "开源软件的收入方式包括赞助、托管服务、企业支持和双许可证。"
        }
      ]
    },
    {
      id: "175",
      number: 175,
      year: "2021",
      month: "10",
      week: "40",
      date: "2021-10-08",
      title: "知识广度 vs 知识深度",
      image: "https://cdn.beekka.com/blogimg/asset/202110/bg2021100801.webp",
      summary: "关于学习路径、技术积累和长期职业成长的取舍。",
      tags: ["学习", "职业", "思考"],
      sections: [
        {
          id: "section-depth",
          title: "知识广度 vs 知识深度",
          image: "https://cdn.beekka.com/blogimg/asset/202110/bg2021100802.webp",
          snippet: "技术学习既需要广度捕捉机会，也需要深度建立壁垒。",
          body: "文章讨论程序员如何在宽泛涉猎和深入钻研之间分配时间。"
        }
      ]
    }
  ];

  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));
  const storage = {
    get(key, fallback) {
      try {
        const value = localStorage.getItem(key);
        return value ? JSON.parse(value) : fallback;
      } catch (error) {
        return fallback;
      }
    },
    set(key, value) {
      localStorage.setItem(key, JSON.stringify(value));
    },
    remove(key) {
      localStorage.removeItem(key);
    }
  };

  let currentIssue = issues[0];

  function escapeHtml(value) {
    return String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function highlight(text, keyword) {
    if (!keyword) return escapeHtml(text);
    const safe = keyword.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    return escapeHtml(text).replace(new RegExp(safe, "gi"), match => `<mark>${match}</mark>`);
  }

  function getUser() {
    return storage.get("weeklyWebUser", null);
  }

  function setUser(provider) {
    storage.set("weeklyWebUser", {
      name: provider === "linuxdo" ? "LinuxDo Reader" : "GitHub Reader",
      provider,
      createdAt: new Date().toISOString()
    });
  }

  function showToast(message) {
    let toast = $(".toast");
    if (!toast) {
      toast = document.createElement("div");
      toast.className = "toast";
      document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.classList.add("is-visible");
    window.clearTimeout(showToast.timer);
    showToast.timer = window.setTimeout(() => toast.classList.remove("is-visible"), 2200);
  }

  function ensureLoginModal() {
    let modal = $("[data-login-modal]");
    if (modal) return modal;
    modal = document.createElement("div");
    modal.className = "login-modal is-hidden";
    modal.dataset.loginModal = "";
    modal.innerHTML = `
      <div class="login-modal__backdrop" data-login-close></div>
      <section class="login-modal__dialog" role="dialog" aria-modal="true" aria-labelledby="login-modal-title">
        <button class="login-modal__close" data-login-close type="button" aria-label="关闭">×</button>
        <p class="eyebrow">Sign in</p>
        <h2 id="login-modal-title">登录后继续</h2>
        <p class="muted" data-login-reason>收藏和阅读历史需要登录后同步。</p>
        <div class="provider-list">
          <button class="provider-button" data-login-provider="github" type="button">
            <span>GitHub</span>
            <span>继续</span>
          </button>
          <button class="provider-button" data-login-provider="linuxdo" type="button">
            <span>LinuxDo</span>
            <span>继续</span>
          </button>
        </div>
      </section>
    `;
    document.body.appendChild(modal);
    $$("[data-login-close]", modal).forEach(node => {
      node.addEventListener("click", closeLoginModal);
    });
    $$("[data-login-provider]", modal).forEach(button => {
      button.addEventListener("click", () => {
        setUser(button.dataset.loginProvider);
        closeLoginModal();
        refreshAuthState();
        if (document.body.dataset.page === "user") renderUserCenter();
        showToast("登录成功");
      });
    });
    return modal;
  }

  function openLoginModal(reason) {
    const modal = ensureLoginModal();
    const reasonNode = $("[data-login-reason]", modal);
    if (reasonNode) reasonNode.textContent = reason || "收藏和阅读历史需要登录后同步。";
    modal.classList.remove("is-hidden");
    document.documentElement.classList.add("has-modal");
  }

  function closeLoginModal() {
    const modal = $("[data-login-modal]");
    if (modal) modal.classList.add("is-hidden");
    document.documentElement.classList.remove("has-modal");
  }

  function applyTheme(mode) {
    const storedMode = mode || localStorage.getItem("weeklyWebTheme") || "system";
    const resolved = storedMode === "system"
      ? (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
      : storedMode;
    document.documentElement.dataset.theme = resolved;
    localStorage.setItem("weeklyWebTheme", storedMode);
    $$("[data-theme-select]").forEach(select => {
      select.value = storedMode;
    });
    $$("[data-theme-choice]").forEach(button => {
      button.classList.toggle("is-active", button.dataset.themeChoice === storedMode);
    });
  }

  function refreshAuthState() {
    const user = getUser();
    $$("[data-user-name]").forEach(node => {
      node.textContent = user ? user.name : "未登录";
    });
    $$("[data-logged-in]").forEach(node => {
      node.classList.toggle("is-hidden", !user);
    });
    $$("[data-logged-out]").forEach(node => {
      node.classList.toggle("is-hidden", !!user);
    });
  }

  function bindGlobal() {
    const page = document.body.dataset.page;
    $$("[data-nav]").forEach(link => {
      link.classList.toggle("is-active", link.dataset.nav === page);
    });

    $$("[data-theme-select]").forEach(select => {
      select.addEventListener("change", event => applyTheme(event.target.value));
    });
    $$("[data-theme-choice]").forEach(button => {
      button.addEventListener("click", () => applyTheme(button.dataset.themeChoice));
    });
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => {
      if ((localStorage.getItem("weeklyWebTheme") || "system") === "system") applyTheme("system");
    });

    $$("[data-global-search]").forEach(form => {
      form.addEventListener("submit", event => {
        event.preventDefault();
        const input = $("[name='q']", form);
        const query = input ? input.value.trim() : "";
        window.location.href = `search.html${query ? `?q=${encodeURIComponent(query)}` : ""}`;
      });
    });

    $$("[data-login-trigger]").forEach(button => {
      button.addEventListener("click", () => openLoginModal(button.dataset.loginReason));
    });

    $$("[data-logout]").forEach(button => {
      button.addEventListener("click", () => {
        storage.remove("weeklyWebUser");
        refreshAuthState();
        if (document.body.dataset.page === "user") renderUserCenter();
        showToast("已退出登录");
      });
    });
    refreshAuthState();
  }

  function requireLogin(reason) {
    if (getUser()) return true;
    openLoginModal(reason);
    return false;
  }

  function bindFavoriteButtons() {
    $$("[data-favorite-id]").forEach(button => {
      if (button.dataset.boundFavorite) return;
      button.dataset.boundFavorite = "true";
      const id = button.dataset.favoriteId;
      const label = button.dataset.favoriteLabel || id;
      const favorites = storage.get("weeklyWebFavorites", []);
      const isSaved = favorites.some(item => item.id === id);
      button.textContent = isSaved ? "已收藏" : "收藏";
      button.classList.toggle("is-active", isSaved);
      button.addEventListener("click", () => {
        if (!requireLogin("登录后可以收藏整期周刊或具体条目，并在个人中心查看。")) return;
        const current = storage.get("weeklyWebFavorites", []);
        const exists = current.some(item => item.id === id);
        const next = exists
          ? current.filter(item => item.id !== id)
          : [{ id, label, savedAt: new Date().toISOString() }, ...current];
        storage.set("weeklyWebFavorites", next);
        button.textContent = exists ? "收藏" : "已收藏";
        button.classList.toggle("is-active", !exists);
        showToast(exists ? "已取消收藏" : "已收藏");
      });
    });
  }

  function renderHome() {
    const latest = issues[0];
    const latestNode = $("[data-latest-issue]");
    if (!latestNode) return;
    latestNode.innerHTML = `
      <a class="latest-minimal__media" href="issue-detail.html?issue=${latest.id}" aria-label="阅读第 ${latest.number} 期">
        <img src="${latest.image}" alt="第 ${latest.number} 期封面图">
      </a>
      <div class="latest-minimal__body">
        <span class="badge">最新一期 · ${latest.date}</span>
        <h2>第 ${latest.number} 期：${latest.title}</h2>
        <p>${latest.summary}</p>
        <a class="primary-button" href="issue-detail.html?issue=${latest.id}">开始阅读</a>
      </div>
    `;
  }

  function searchIssues(query) {
    const q = query.trim().toLowerCase();
    const results = [];
    issues.forEach(issue => {
      issue.sections.forEach(section => {
        const haystack = `${issue.title} ${issue.summary} ${issue.tags.join(" ")} ${section.title} ${section.snippet} ${section.body}`.toLowerCase();
        if (!q || haystack.includes(q)) results.push({ issue, section });
      });
    });
    return results;
  }

  function renderSearch() {
    const params = new URLSearchParams(window.location.search);
    const query = params.get("q") || "";
    const input = $("[data-search-input]");
    const list = $("[data-search-results]");
    const count = $("[data-search-count]");
    if (input) input.value = query;

    function render(queryValue) {
      const results = queryValue ? searchIssues(queryValue) : [];
      if (count) count.textContent = queryValue ? `${results.length} 个匹配` : "输入关键词后搜索";
      if (!list) return;
      if (!queryValue) {
        list.innerHTML = `<div class="empty-state">输入关键词，定位历史周刊中的章节和片段。</div>`;
        return;
      }
      if (!results.length) {
        list.innerHTML = `<div class="empty-state">未找到匹配内容</div>`;
        return;
      }
      list.innerHTML = results.map(({ issue, section }) => `
        <article class="result-card">
          <div class="meta-row">
            <span class="badge">第 ${issue.number} 期</span>
            <span class="badge">${section.title}</span>
          </div>
          <h3>${highlight(issue.title, queryValue)}</h3>
          <p class="result-card__snippet">${highlight(section.snippet, queryValue)}</p>
          <div class="actions">
            <a class="primary-button" href="issue-detail.html?issue=${issue.id}&hit=${section.id}#${section.id}">定位结果</a>
            <button class="ghost-button" data-favorite-id="item-${issue.id}-${section.id}" data-favorite-label="第 ${issue.number} 期 / ${section.title}">收藏条目</button>
          </div>
        </article>
      `).join("");
      bindFavoriteButtons();
    }

    const form = $("[data-search-form]");
    if (form) {
      form.addEventListener("submit", event => {
        event.preventDefault();
        const nextQuery = input.value.trim();
        window.history.replaceState({}, "", `search.html${nextQuery ? `?q=${encodeURIComponent(nextQuery)}` : ""}`);
        render(nextQuery);
      });
    }
    render(query);
  }

  function uniqueValues(key, source = issues) {
    return Array.from(new Set(source.map(issue => issue[key]))).sort((a, b) => Number(b) - Number(a));
  }

  function setSelectOptions(select, values, formatter) {
    const current = select.value;
    select.innerHTML = values.map(value => `<option value="${value}">${formatter(value)}</option>`).join("");
    select.value = values.includes(current) ? current : values[0];
  }

  function renderIssue(issue) {
    currentIssue = issue;
    document.body.dataset.issueId = issue.id;
    const progress = storage.get(`weeklyWebProgress-${issue.id}`, { percent: 0 });

    const title = $("[data-issue-title]");
    const summary = $("[data-issue-summary]");
    const date = $("[data-issue-date]");
    const number = $("[data-issue-number]");
    const cover = $("[data-issue-cover]");
    const toc = $("[data-toc-list]");
    const body = $("[data-article-body]");
    const favorite = $("[data-issue-favorite]");
    const progressLabel = $("[data-progress-label]");

    if (title) title.textContent = issue.title;
    if (summary) summary.textContent = issue.summary;
    if (date) date.textContent = issue.date;
    if (number) number.textContent = `第 ${issue.number} 期`;
    if (cover) {
      cover.src = issue.image;
      cover.alt = `第 ${issue.number} 期封面图`;
    }
    if (favorite) {
      favorite.dataset.favoriteId = `issue-${issue.id}`;
      favorite.dataset.favoriteLabel = `第 ${issue.number} 期：${issue.title}`;
      favorite.dataset.boundFavorite = "";
    }
    if (progressLabel) progressLabel.textContent = `${Math.round(progress.percent || 0)}%`;
    $$("[data-reading-progress]").forEach(bar => {
      bar.style.setProperty("--progress", `${Math.round(progress.percent || 0)}%`);
    });

    if (toc) {
      toc.innerHTML = `
        <li><a class="toc__link is-active" data-toc-link href="#section-cover">封面图</a></li>
        ${issue.sections.map(section => `<li><a class="toc__link" data-toc-link href="#${section.id}">${section.title}</a></li>`).join("")}
      `;
    }
    if (body) {
      body.innerHTML = issue.sections.map(section => `
        <section class="article-section" id="${section.id}">
          <div class="article-section__header">
            <h2>${section.title}</h2>
            <button class="collapse-button" data-collapse-target="${section.id}" type="button" aria-label="折叠章节">-</button>
          </div>
          <div class="article-section__content">
            <p>${section.body}</p>
            <figure>
              <img src="${section.image}" alt="${section.title}">
              <figcaption>${section.snippet}</figcaption>
            </figure>
            <div class="actions">
              <button class="ghost-button" data-favorite-id="item-${issue.id}-${section.id}" data-favorite-label="第 ${issue.number} 期 / ${section.title}" type="button">收藏条目</button>
            </div>
          </div>
        </section>
      `).join("");
    }
    bindReaderInteractions();
    bindFavoriteButtons();
  }

  function bindIssueSelector() {
    const yearSelect = $("[data-issue-year]");
    const monthSelect = $("[data-issue-month]");
    const weekSelect = $("[data-issue-week]");
    if (!yearSelect || !monthSelect || !weekSelect) return;

    const params = new URLSearchParams(window.location.search);
    currentIssue = issues.find(issue => issue.id === params.get("issue")) || issues[0];

    function syncOptions(sourceIssue) {
      setSelectOptions(yearSelect, uniqueValues("year"), value => `${value} 年`);
      yearSelect.value = sourceIssue.year;
      const yearIssues = issues.filter(issue => issue.year === yearSelect.value);
      setSelectOptions(monthSelect, uniqueValues("month", yearIssues), value => `${Number(value)} 月`);
      monthSelect.value = sourceIssue.month;
      const monthIssues = yearIssues.filter(issue => issue.month === monthSelect.value);
      setSelectOptions(weekSelect, uniqueValues("week", monthIssues), value => `第 ${Number(value)} 周`);
      weekSelect.value = sourceIssue.week;
    }

    function pickIssue() {
      const exact = issues.find(issue =>
        issue.year === yearSelect.value &&
        issue.month === monthSelect.value &&
        issue.week === weekSelect.value
      );
      const fallback = issues.find(issue => issue.year === yearSelect.value && issue.month === monthSelect.value)
        || issues.find(issue => issue.year === yearSelect.value)
        || issues[0];
      const next = exact || fallback;
      syncOptions(next);
      renderIssue(next);
      window.history.replaceState({}, "", `issue-detail.html?issue=${next.id}`);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    syncOptions(currentIssue);
    renderIssue(currentIssue);
    yearSelect.addEventListener("change", () => {
      const next = issues.find(issue => issue.year === yearSelect.value) || issues[0];
      syncOptions(next);
      pickIssue();
    });
    monthSelect.addEventListener("change", () => {
      const next = issues.find(issue => issue.year === yearSelect.value && issue.month === monthSelect.value) || currentIssue;
      syncOptions(next);
      pickIssue();
    });
    weekSelect.addEventListener("change", pickIssue);
  }

  function bindReaderInteractions() {
    $$("[data-collapse-target]").forEach(button => {
      if (button.dataset.boundCollapse) return;
      button.dataset.boundCollapse = "true";
      button.addEventListener("click", () => {
        const target = document.getElementById(button.dataset.collapseTarget);
        if (target) target.classList.toggle("is-collapsed");
      });
    });

    $$("[data-toc-link]").forEach(link => {
      if (link.dataset.boundToc) return;
      link.dataset.boundToc = "true";
      link.addEventListener("click", () => {
        $$("[data-toc-link]").forEach(item => item.classList.remove("is-active"));
        link.classList.add("is-active");
      });
    });

    $$("article a[href^='http']").forEach(link => {
      link.setAttribute("target", "_blank");
      link.setAttribute("rel", "noreferrer");
    });
  }

  function bindReader() {
    bindIssueSelector();
    const article = $("[data-reading-article]");
    const progressLabel = $("[data-progress-label]");
    const progressBars = $$("[data-reading-progress]");

    function progressKey() {
      return `weeklyWebProgress-${currentIssue.id}`;
    }

    function updateProgress() {
      if (!article) return;
      const rect = article.getBoundingClientRect();
      const articleTop = window.scrollY + rect.top;
      const max = Math.max(article.offsetHeight - window.innerHeight * 0.7, 1);
      const current = Math.min(Math.max(window.scrollY - articleTop, 0), max);
      const percent = Math.round((current / max) * 100);
      progressBars.forEach(bar => {
        bar.style.setProperty("--progress", `${percent}%`);
      });
      if (progressLabel) progressLabel.textContent = `${percent}%`;
      storage.set(progressKey(), { percent, scrollY: window.scrollY, updatedAt: new Date().toISOString() });
    }

    if (article) {
      window.addEventListener("scroll", updateProgress, { passive: true });
      updateProgress();
    }

    const restoreButton = $("[data-restore-reading]");
    if (restoreButton) {
      restoreButton.addEventListener("click", () => {
        const saved = storage.get(progressKey(), null);
        if (saved && saved.scrollY) {
          window.scrollTo({ top: saved.scrollY, behavior: "smooth" });
          showToast("已恢复阅读位置");
        } else {
          showToast("暂无阅读位置");
        }
      });
    }

    const hit = new URLSearchParams(window.location.search).get("hit");
    if (hit) {
      window.setTimeout(() => {
        const node = document.getElementById(hit);
        if (node) node.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 180);
    }
  }

  function renderUserCenter() {
    const user = getUser();
    const locked = $("[data-user-locked]");
    const content = $("[data-user-content]");
    if (!user) {
      if (locked) locked.classList.remove("is-hidden");
      if (content) content.classList.add("is-hidden");
      openLoginModal("登录后查看最近阅读、收藏列表和主题同步设置。");
      return;
    }
    if (locked) locked.classList.add("is-hidden");
    if (content) content.classList.remove("is-hidden");
    $$("[data-profile-name]").forEach(node => {
      node.textContent = user.name;
    });
    $$("[data-profile-provider]").forEach(node => {
      node.textContent = user.provider === "linuxdo" ? "LinuxDo" : "GitHub";
    });

    const favoriteList = $("[data-favorite-list]");
    const favorites = storage.get("weeklyWebFavorites", [
      { id: "issue-400", label: "第 400 期：rsync 的争论", savedAt: "2026-06-05T10:00:00.000Z" }
    ]);
    if (favoriteList) {
      favoriteList.innerHTML = favorites.length
        ? favorites.map(item => `
          <article class="list-item">
            <div class="list-item__head">
              <div>
                <h3>${escapeHtml(item.label)}</h3>
                <p class="micro">收藏于 ${new Date(item.savedAt).toLocaleDateString("zh-CN")}</p>
              </div>
              <a class="text-button" href="issue-detail.html">查看</a>
            </div>
          </article>
        `).join("")
        : `<div class="empty-state">暂无收藏</div>`;
    }

    const historyList = $("[data-history-list]");
    if (historyList) {
      const history = issues.slice(0, 3).map(issue => ({
        issue,
        progress: storage.get(`weeklyWebProgress-${issue.id}`, { percent: issue.id === "400" ? 64 : issue.id === "399" ? 28 : 12 })
      }));
      historyList.innerHTML = history.map(({ issue, progress }) => `
        <article class="list-item">
          <div class="list-item__head">
            <div>
              <h3>第 ${issue.number} 期：${issue.title}</h3>
              <p class="micro">阅读进度 ${Math.round(progress.percent || 0)}%</p>
            </div>
            <a class="primary-button" href="issue-detail.html?issue=${issue.id}">继续阅读</a>
          </div>
          <div class="progress-track">
            <div class="progress-fill" style="--progress: ${Math.round(progress.percent || 0)}%"></div>
          </div>
        </article>
      `).join("");
    }

    function setActiveTab(name) {
      $$("[data-tab-button]").forEach(button => {
        button.classList.toggle("is-active", button.dataset.tabButton === name);
      });
      $$("[data-tab-panel]").forEach(panel => {
        panel.classList.toggle("is-hidden", panel.dataset.tabPanel !== name);
      });
      window.location.hash = name;
    }
    const initial = window.location.hash.replace("#", "") || "history";
    setActiveTab(["favorites", "history", "settings"].includes(initial) ? initial : "history");
    $$("[data-tab-button]").forEach(button => {
      button.addEventListener("click", () => setActiveTab(button.dataset.tabButton));
    });
  }

  applyTheme();
  bindGlobal();

  const page = document.body.dataset.page;
  if (page === "home") renderHome();
  if (page === "search") renderSearch();
  if (page === "detail") bindReader();
  if (page === "user") renderUserCenter();
})();
