/* Milford structure explorer — renders from data/people.js (global MILFORD). */
(function () {
  "use strict";

  var P = MILFORD.people;
  var UNITS = MILFORD.units;
  var bySlug = {};
  P.forEach(function (p) { bySlug[p.slug] = p; });

  /* Photographs are opt-in via assets/photos/manifest.json, so a build with no
     photographs makes no requests for files that are not there. Drop an image
     into assets/photos/ and run `node tools/photos.js` to register it. */
  var PHOTOS = { ext: "jpg", have: {} };
  function avatar(p) { return "assets/avatars/" + p.slug + ".svg"; }
  function photo(p) { return "assets/photos/" + p.slug + "." + PHOTOS.ext; }

  function el(tag, cls, html) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (html != null) n.innerHTML = html;
    return n;
  }

  function faceImg(p, cls) {
    var img = el("img", cls);
    img.loading = "lazy";
    img.alt = "";
    if (PHOTOS.have[p.slug]) {
      img.src = photo(p);
      img.addEventListener("error", function onErr() { // safety net for a stale manifest
        img.removeEventListener("error", onErr);
        img.src = avatar(p);
      });
    } else {
      img.src = avatar(p);
    }
    return img;
  }

  function directReports(slug) {
    return P.filter(function (p) { return p.reportsTo === slug; });
  }

  /* ---------------- node card ---------------- */
  function nodeCard(p, lead) {
    var b = el("button", "node" + (lead ? " lead" : ""));
    b.type = "button";
    b.dataset.unit = p.unit;
    b.setAttribute("aria-label", "Open profile for " + p.name.replace(/&amp;/g, "&"));
    b.appendChild(faceImg(p, "face"));
    var n = directReports(p.slug).length;
    var meta = [p.location];
    if (n) meta.push(n + " direct report" + (n > 1 ? "s" : ""));
    b.appendChild(el("div", null,
      '<div class="nm">' + p.name + (p.isNew ? '<span class="pill">New</span>' : '') + '</div>' +
      '<div class="ti">' + p.title + '</div>' +
      '<div class="meta">' + meta.join(" · ") + '</div>'
    ));
    b.addEventListener("click", function () { open(p.slug); });
    return b;
  }

  function row(list, lead) {
    var r = el("div", "row");
    list.forEach(function (p) { r.appendChild(nodeCard(p, lead)); });
    return r;
  }

  function tier(label, list, lead) {
    var t = el("div", "tier");
    t.appendChild(el("div", "tier-label", label));
    t.appendChild(row(list, lead));
    return t;
  }

  /* ---------------- org chart ---------------- */
  function renderChart() {
    var root = document.getElementById("chart");
    root.innerHTML = "";

    var chair = bySlug["anthony-quirk"];
    var neds = P.filter(function (p) { return p.unit === "board" && p.slug !== "anthony-quirk"; });
    root.appendChild(tier("Board", [chair], true));
    var nedBranch = el("div", "branch");
    nedBranch.appendChild(el("div", "branch-title", "Non-Executive Directors"));
    nedBranch.appendChild(row(neds));
    root.lastChild.appendChild(nedBranch);

    var ceo = bySlug["blair-turnbull"];
    root.appendChild(tier("Chief Executive", [ceo], true));

    var execs = P.filter(function (p) { return p.unit === "exec" && p.slug !== "blair-turnbull"; });
    root.appendChild(tier("Group Executive — reporting to the Chief Executive", execs));

    // Sub-teams beneath the executives who have reports.
    var t = el("div", "tier");
    t.appendChild(el("div", "tier-label", "Teams"));
    execs.forEach(function (ex) {
      var reps = directReports(ex.slug);
      if (!reps.length) return;
      var br = el("div", "branch");
      br.style.marginBottom = "1.5rem";
      br.appendChild(el("div", "branch-title", "Under " + ex.name + " — " + ex.title));
      br.appendChild(row(reps));
      // one more level: reports of those reports
      reps.forEach(function (r) {
        var sub = directReports(r.slug);
        if (!sub.length) return;
        var br2 = el("div", "branch");
        br2.appendChild(el("div", "branch-title", "Under " + r.name));
        br2.appendChild(row(sub));
        br.appendChild(br2);
      });
      t.appendChild(br);
    });
    root.appendChild(t);
  }

  /* ---------------- directory ---------------- */
  var filter = { q: "", unit: "all" };

  function renderDirectory() {
    var grid = document.getElementById("grid");
    var q = filter.q.trim().toLowerCase();
    var list = P.filter(function (p) {
      if (filter.unit !== "all" && p.unit !== filter.unit) return false;
      if (!q) return true;
      var hay = [p.name, p.title, p.location, p.summary, (p.skills || []).join(" "),
                 (p.responsibilities || []).join(" ")].join(" ").toLowerCase();
      return hay.indexOf(q) > -1;
    });
    grid.innerHTML = "";
    document.getElementById("count").textContent =
      list.length + " of " + P.length + " people" +
      (filter.unit === "all" ? "" : " · " + UNITS[filter.unit].name.replace(/&amp;/g, "&"));
    if (!list.length) {
      grid.appendChild(el("div", "empty", "No one matches that search."));
      return;
    }
    list.forEach(function (p) { grid.appendChild(nodeCard(p)); });
  }

  /* ---------------- news ---------------- */
  function renderNews() {
    var ul = document.getElementById("timeline");
    ul.innerHTML = "";
    MILFORD.timeline.forEach(function (t) {
      var li = el("li", "tl-item" + (t.tag === "Board change" ? " board" : ""));
      li.appendChild(el("div", "tl-date", t.date + '<span class="tag">' + t.tag + "</span>"));
      li.appendChild(el("div", "tl-who", t.who));
      li.appendChild(el("p", "tl-what", t.what));
      var s = el("div", "srcs");
      (t.src || []).forEach(function (x) {
        var a = el("a", null, x.t);
        a.href = x.u; a.target = "_blank"; a.rel = "noopener noreferrer";
        s.appendChild(a);
      });
      li.appendChild(s);
      ul.appendChild(li);
    });
  }

  /* ---------------- profile drawer ---------------- */
  var drawer = document.getElementById("drawer");
  var scrim = document.getElementById("scrim");
  var lastFocus = null;

  var BASIS = {
    evidenced: ['ev', 'Evidenced'],
    mixed: ['mx', 'Part evidenced, part inferred'],
    inferred: ['inf', 'Inferred']
  };

  function basisBadge(kind) {
    var b = BASIS[kind] || BASIS.inferred;
    return '<span class="badge ' + b[0] + '">' + b[1] + '</span>';
  }

  function miniCard(p) {
    var b = el("button", "mini");
    b.type = "button";
    b.appendChild(faceImg(p, ""));
    b.appendChild(el("div", null, "<b>" + p.name + "</b><small>" + p.title + "</small>"));
    b.addEventListener("click", function () { open(p.slug); });
    return b;
  }

  function open(slug) {
    var p = bySlug[slug];
    if (!p) return;
    if (!drawer.classList.contains("open")) lastFocus = document.activeElement;

    var head = document.getElementById("dr-head");
    var body = document.getElementById("dr-body");

    var meta = [UNITS[p.unit].name, p.location];
    if (p.joined) meta.push("Joined " + p.joined);

    head.innerHTML =
      '<button class="dr-close" type="button" aria-label="Close profile">&times;</button>' +
      '<div class="dr-id"><span id="dr-face-slot"></span><div>' +
        '<h2>' + p.name + (p.isNew ? '<span class="pill">New</span>' : '') + '</h2>' +
        '<div class="ti">' + p.title + '</div>' +
        '<div class="meta">' + meta.join(" · ") + '</div>' +
      '</div></div>' +
      '<div class="dr-links" id="dr-links"></div>';
    head.querySelector(".dr-close").addEventListener("click", close);
    head.querySelector("#dr-face-slot").replaceWith(faceImg(p, "dr-face"));

    var links = head.querySelector("#dr-links");
    if (p.linkedin) links.insertAdjacentHTML("beforeend",
      '<a href="' + p.linkedin + '" target="_blank" rel="noopener noreferrer">LinkedIn profile &#8599;</a>');
    if (p.profile) links.insertAdjacentHTML("beforeend",
      '<a class="ghost" href="' + p.profile + '" target="_blank" rel="noopener noreferrer">Public bio &#8599;</a>');
    if (!p.linkedin && !p.profile) links.insertAdjacentHTML("beforeend",
      '<a class="ghost" href="https://www.linkedin.com/search/results/people/?keywords=' +
      encodeURIComponent(p.name.replace(/&amp;/g, "&") + " Milford") +
      '" target="_blank" rel="noopener noreferrer">Search LinkedIn &#8599;</a>');

    body.innerHTML = "";

    var about = el("div", "blk");
    about.appendChild(el("h3", null, "About"));
    about.appendChild(el("p", null, p.summary));
    body.appendChild(about);

    if (p.responsibilities && p.responsibilities.length) {
      var r = el("div", "blk");
      r.appendChild(el("h3", null, "Responsibilities " + basisBadge(p.responsibilitiesBasis)));
      var ul = el("ul");
      p.responsibilities.forEach(function (x) { ul.appendChild(el("li", null, x)); });
      r.appendChild(ul);
      body.appendChild(r);
    }

    if (p.skills && p.skills.length) {
      var s = el("div", "blk");
      s.appendChild(el("h3", null, "Likely skills &amp; toolset " + basisBadge("inferred")));
      var sk = el("div", "skills");
      p.skills.forEach(function (x) { sk.appendChild(el("span", null, x)); });
      s.appendChild(sk);
      body.appendChild(s);
    }

    var mgr = p.reportsTo ? bySlug[p.reportsTo] : null;
    if (mgr) {
      var m = el("div", "blk");
      m.appendChild(el("h3", null, "Reports to " + basisBadge(p.reportsToBasis)));
      var wrap = el("div", "reports");
      wrap.appendChild(miniCard(mgr));
      m.appendChild(wrap);
      body.appendChild(m);
    }

    var reps = directReports(p.slug);
    if (reps.length) {
      var d = el("div", "blk");
      d.appendChild(el("h3", null, "Direct reports (" + reps.length + ")"));
      var w2 = el("div", "reports");
      reps.forEach(function (x) { w2.appendChild(miniCard(x)); });
      d.appendChild(w2);
      body.appendChild(d);
    }

    if (p.sources && p.sources.length) {
      var src = el("div", "blk");
      src.appendChild(el("h3", null, "Sources"));
      var sl = el("ul", "srclist");
      p.sources.forEach(function (x) {
        sl.appendChild(el("li", null,
          '<a href="' + x.u + '" target="_blank" rel="noopener noreferrer">' + x.t + '</a>'));
      });
      src.appendChild(sl);
      body.appendChild(src);
    }

    drawer.classList.add("open");
    scrim.classList.add("open");
    drawer.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    body.scrollTop = 0;
    drawer.scrollTop = 0;
    head.querySelector(".dr-close").focus();
    if (location.hash !== "#/p/" + slug) history.pushState({ slug: slug }, "", "#/p/" + slug);
    document.title = p.name.replace(/&amp;/g, "&") + " · Milford structure";
  }

  function close(push) {
    drawer.classList.remove("open");
    scrim.classList.remove("open");
    drawer.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    document.title = "Milford Asset Management · Structure";
    if (push !== false && location.hash.indexOf("#/p/") === 0) history.pushState({}, "", location.pathname);
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }

  scrim.addEventListener("click", function () { close(); });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && drawer.classList.contains("open")) close();
  });
  window.addEventListener("popstate", function () { route(false); });

  function route(push) {
    var m = /^#\/p\/(.+)$/.exec(location.hash);
    if (m && bySlug[m[1]]) open(m[1]);
    else if (drawer.classList.contains("open")) close(false);
  }

  /* ---------------- tabs ---------------- */
  function initTabs() {
    var tabs = Array.prototype.slice.call(document.querySelectorAll(".tab"));
    tabs.forEach(function (t) {
      t.addEventListener("click", function () {
        tabs.forEach(function (o) {
          var on = o === t;
          o.setAttribute("aria-selected", on ? "true" : "false");
          document.getElementById(o.dataset.panel).hidden = !on;
        });
      });
    });
  }

  /* ---------------- boot ---------------- */
  function initFilters() {
    document.getElementById("search").addEventListener("input", function (e) {
      filter.q = e.target.value; renderDirectory();
    });
    var chips = Array.prototype.slice.call(document.querySelectorAll(".chip"));
    chips.forEach(function (c) {
      c.addEventListener("click", function () {
        chips.forEach(function (o) { o.setAttribute("aria-pressed", o === c ? "true" : "false"); });
        filter.unit = c.dataset.unit;
        renderDirectory();
      });
    });
  }

  function renderStats() {
    var box = document.getElementById("stats");
    MILFORD.meta.facts.forEach(function (f) {
      var a = el("a", "stat");
      a.href = f.src; a.target = "_blank"; a.rel = "noopener noreferrer";
      a.style.textDecoration = "none";
      a.innerHTML = "<b>" + f.value + "</b><small>" + f.label + "</small>";
      box.appendChild(a);
    });
    document.getElementById("researched").textContent = MILFORD.meta.researched;
    document.getElementById("facts-note").innerHTML = MILFORD.meta.note;
  }

  function boot() {
    renderStats();
    renderChart();
    renderDirectory();
    renderNews();
    initTabs();
    initFilters();
    route();
  }

  // Read the photo manifest before the first render. A missing, blocked or
  // malformed manifest is not an error — everyone simply keeps their monogram.
  if (window.fetch && location.protocol !== "file:") {
    fetch("assets/photos/manifest.json", { cache: "no-cache" })
      .then(function (r) { return r.ok ? r.json() : null; })
      .then(function (m) {
        if (!m) return;
        if (m.ext) PHOTOS.ext = m.ext;
        (m.photos || []).forEach(function (slug) { PHOTOS.have[slug] = true; });
      })
      .catch(function () { /* monograms it is */ })
      .then(boot);
  } else {
    boot();
  }
})();
