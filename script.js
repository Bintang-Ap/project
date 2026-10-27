

const $ = (id) => document.getElementById(id);

function renderNavbar() {
  const links = DATA.nav.map((n) => `<a href="${n.target}">${n.label}</a>`).join("");
  $("navbar").innerHTML = `
    <div class="nav-inner">
      <a class="brand" href="#home"><span class="brand-mark">${DATA.name.charAt(0)}</span>${DATA.name}</a>
      <nav class="nav-links">${links}</nav>
      <a class="btn btn-light btn-small" href="#contact">${DATA.hireMeText}</a>
    </div>`;
}

function renderHero() {
  const initials = DATA.name.split(" ").map((w) => w[0]).slice(0, 2).join("");
  $("home").innerHTML = `
    <div class="hero-bg-text">${DATA.name.split(" ")[0].toUpperCase()}</div>
    <div class="hero-photo">
      <img src="${DATA.photo}" alt="Foto ${DATA.name}" id="heroImg" />
      <div class="hero-fallback" id="heroFallback">${initials}</div>
    </div>
    <h1 class="hero-name">${DATA.name}</h1>
    <p class="hero-role">${DATA.role}</p>
    <p class="hero-tagline">${DATA.tagline}</p>
    <div class="hero-actions">
      <a class="btn btn-light" href="#contact">${DATA.hireMeText}</a>
      <a class="btn btn-outline" href="#about">Tentang Saya</a>
    </div>`;
  const img = $("heroImg");
  img.addEventListener("error", () => {
    img.style.display = "none";
    $("heroFallback").style.display = "flex";
  });
}

function renderWork() {
  const w = DATA.work;
  if (!w || !w.projects || w.projects.length === 0) {
    $("work").style.display = "none";
    document.querySelectorAll('a[href="#work"]').forEach((a) => (a.style.display = "none"));
    return;
  }
  const cards = w.projects
    .map((p) => {
      const media = p.image
        ? `<img src="${p.image}" alt="${p.title}" />`
        : `<div class="work-placeholder">${p.title.charAt(0)}</div>`;
      return `
      <a class="work-card" href="${p.link || "#"}" target="_blank" rel="noopener">
        <div class="work-media">${media}</div>
        <div class="work-body"><h3>${p.title}</h3><p>${p.description}</p></div>
      </a>`;
    })
    .join("");
  $("work").innerHTML = `
    <div class="container">
      <p class="eyebrow">${w.label}</p>
      <h2 class="section-title">${w.title}</h2>
      <p class="section-desc">${w.description}</p>
      <div class="work-grid">${cards}</div>
    </div>`;
}

function renderSkills() {
  const s = DATA.skills;
  const cards = s.groups
    .map(
      (g, i) => `
      <article class="skill-card">
        <span class="skill-num">${String(i + 1).padStart(2, "0")}</span>
        <h3>${g.title}</h3>
        <ul class="chips">${g.items.map((it) => `<li>${it}</li>`).join("")}</ul>
      </article>`
    )
    .join("");
  $("skills").innerHTML = `
    <div class="container">
      <p class="eyebrow">${s.label}</p>
      <h2 class="section-title">${s.title}</h2>
      <p class="section-desc">${s.description}</p>
      <div class="skill-grid">${cards}</div>
    </div>`;
}

function renderAbout() {
  const a = DATA.about;
  const paras = a.paragraphs.map((p) => `<p>${p}</p>`).join("");
  const stats = (a.stats || [])
    .map((x) => `<div class="stat"><strong>${x.value}</strong><span>${x.label}</span></div>`)
    .join("");
  const highlights = (a.highlights || [])
    .map((h) => `<div class="highlight"><strong>${h.title}</strong><span>${h.text}</span></div>`)
    .join("");
  $("about").innerHTML = `
    <div class="container about-box">
      <p class="eyebrow">${a.label}</p>
      <h2 class="section-title">${a.title}</h2>
      <div class="stats">${stats}</div>
      <div class="about-text">${paras}</div>
      <div class="highlights">${highlights}</div>
    </div>`;
}

function renderContact() {
  const c = DATA.contact;
  const items = c.items
    .map(
      (it) => `
      <a class="contact-item" href="${it.link}" ${it.link.startsWith("http") ? 'target="_blank" rel="noopener"' : ""}>
        <span class="contact-icon">${it.icon}</span>
        <span class="contact-text"><small>${it.label}</small><b>${it.value}</b></span>
      </a>`
    )
    .join("");
  $("contact").innerHTML = `
    <div class="container contact-grid">
      <div>
        <p class="eyebrow">${c.label}</p>
        <h2 class="contact-title">${c.title.replace(" ", "<br>")}</h2>
        <p class="section-desc">${c.text}</p>
      </div>
      <div class="contact-list">
        ${items}
        <a class="btn btn-light contact-send" href="${c.buttonLink}">${c.buttonText} →</a>
      </div>
    </div>`;
}

function renderFooter() {
  $("footer").innerHTML = `© ${new Date().getFullYear()} ${DATA.name}. All rights reserved.`;
}

renderNavbar();
renderHero();
renderWork();
renderSkills();
renderAbout();
renderContact();
renderFooter();
