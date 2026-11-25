(function () {
  "use strict";

  const data = window.SITE_DATA || { projects: [], contacts: [] };
  const $ = (sel, root = document) => root.querySelector(sel);

  const KIND_LABEL = { "app": "App", "jogo": "Jogo", "web": "Site", "unity-asset": "Unity Asset" };

  const ICONS = {
    email: '<path d="M4 6h16v12H4z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="m4 7 8 6 8-6" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/>',
    github: '<path fill="currentColor" d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02a9.6 9.6 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2Z"/>',
    linkedin: '<path fill="currentColor" d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.5h4V21H3zM9.5 9.5h3.8v1.6h.06c.53-1 1.83-2.06 3.77-2.06 4.03 0 4.77 2.65 4.77 6.1V21h-4v-5.1c0-1.22-.02-2.78-1.7-2.78-1.7 0-1.96 1.33-1.96 2.7V21h-4z"/>',
    instagram: '<rect x="3.5" y="3.5" width="17" height="17" rx="5" fill="none" stroke="currentColor" stroke-width="1.8"/><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" stroke-width="1.8"/><circle cx="17.3" cy="6.7" r="1.1" fill="currentColor"/>',
    youtube: '<path fill="currentColor" d="M21.6 7.2a2.5 2.5 0 0 0-1.76-1.77C18.3 5 12 5 12 5s-6.3 0-7.84.43A2.5 2.5 0 0 0 2.4 7.2 26 26 0 0 0 2 12a26 26 0 0 0 .4 4.8 2.5 2.5 0 0 0 1.76 1.77C5.7 19 12 19 12 19s6.3 0 7.84-.43a2.5 2.5 0 0 0 1.76-1.77A26 26 0 0 0 22 12a26 26 0 0 0-.4-4.8ZM10 15V9l5.2 3Z"/>',
    discord: '<path fill="currentColor" d="M19.3 5.3A16.6 16.6 0 0 0 15.2 4l-.5 1a15.4 15.4 0 0 0-5.4 0l-.5-1a16.5 16.5 0 0 0-4.1 1.3C2.1 9.2 1.4 13 1.7 16.7a16.7 16.7 0 0 0 5 2.5l1.1-1.7c-.6-.2-1.2-.5-1.7-.9l.4-.3a11.9 11.9 0 0 0 11 0l.4.3c-.5.4-1.1.7-1.7.9l1.1 1.7a16.6 16.6 0 0 0 5-2.5c.4-4.3-.7-8-3-11.4ZM8.7 14.5c-1 0-1.8-.9-1.8-2s.8-2 1.8-2 1.8.9 1.8 2-.8 2-1.8 2Zm6.6 0c-1 0-1.8-.9-1.8-2s.8-2 1.8-2 1.8.9 1.8 2-.8 2-1.8 2Z"/>',
    whatsapp: '<path fill="currentColor" d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.2-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.3.8 3.2.6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.5-.3Z"/>',
    itch: '<path fill="currentColor" d="M3.1 4.2C2 4.9 0 7.2 0 7.8v1c0 1.3 1.2 2.4 2.3 2.4 1.3 0 2.4-1.1 2.4-2.4 0 1.3 1.1 2.4 2.4 2.4s2.3-1.1 2.3-2.4c0 1.3 1.1 2.4 2.5 2.4h.1c1.4 0 2.5-1.1 2.5-2.4 0 1.3 1 2.4 2.3 2.4s2.4-1.1 2.4-2.4c0 1.3 1.1 2.4 2.4 2.4 1.1 0 2.3-1.1 2.3-2.4v-1c0-.6-2-2.9-3.1-3.6C17.3 3.9 6.4 3.9 3.1 4.2Zm6.4 7.9a2.6 2.6 0 0 1-2.4 1.4c-1 0-1.9-.6-2.4-1.4-.5.8-1.4 1.4-2.4 1.4h-.6c-.2 2.2-.3 4.4.2 6.1.9 2.4 4.3 2.6 7.4 2.6h5.4c3.1 0 6.5-.2 7.4-2.6.5-1.7.4-3.9.2-6.1h-.6c-1 0-1.9-.6-2.4-1.4-.5.8-1.4 1.4-2.4 1.4s-1.9-.6-2.4-1.4c-.5.8-1.4 1.4-2.4 1.4h-.2c-1 0-1.9-.6-2.4-1.4Zm-.8 2.7c.7 0 1.3 0 2.1.9.6-.1 1.3-.1 1.9-.1s1.3 0 1.9.1c.8-.9 1.4-.9 2.1-.9 2.1 0 2.6 3.1 3.3 5.6.7 2.3-.2 2.4-1.4 2.4-1.7-.1-2.6-1.3-2.6-2.5-1 .2-2.1.2-3.3.2s-2.3 0-3.3-.2c0 1.2-.9 2.4-2.6 2.5-1.2 0-2.1-.1-1.4-2.4.7-2.5 1.2-5.6 3.3-5.6Z"/>',
    unity: '<path fill="currentColor" d="m12 1.5 9 5.2v10.6l-9 5.2-9-5.2V6.7l9-5.2Zm0 2.3L5.3 7.7 12 11.5l6.7-3.8L12 3.8Zm-7 5.6v7.6l6 3.5v-7.6L5 9.4Zm14 0-6 3.5v7.6l6-3.5V9.4Z"/>',
    googleplay: '<path fill="currentColor" d="M4.2 2.4c-.3.3-.4.7-.4 1.2v16.8c0 .5.1.9.4 1.2l9.4-9.6-9.4-9.6Zm10.6 8.4 2.7-2.8L6.2 1.6c-.4-.2-.8-.3-1.1-.2l9.7 9.4Zm0 2.4-9.7 9.4c.3.1.7 0 1.1-.2l11.3-6.4-2.7-2.8Zm4-3.9-2.6 2.7 2.6 2.7 2.4-1.4c.9-.5.9-1.9 0-2.5l-2.4-1.5Z"/>',
    phone: '<path fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" d="M5 3h4l2 5-2.5 1.5a11 11 0 0 0 6 6L16 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1 2-2Z"/>',
    link: '<path fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1"/>',
  };

  const el = (tag, attrs = {}, children = []) => {
    const node = document.createElement(tag);
    for (const [k, v] of Object.entries(attrs)) {
      if (v == null) continue;
      if (k === "class") node.className = v;
      else if (k === "text") node.textContent = v;
      else if (k === "html") node.innerHTML = v;
      else node.setAttribute(k, v);
    }
    [].concat(children).forEach((c) => c && node.append(c));
    return node;
  };

  const initials = (title) =>
    title.split(/\s+/).filter((w) => /^[A-ZÀ-Ú0-9]/.test(w)).slice(0, 2).map((w) => w[0].toUpperCase()).join("");

  function buildCover(p, withBadge = true) {
    const [c1, c2] = p.colors || ["#333a4d", "#14171f"];
    const phones = p.cover === "phones" && p.gallery && p.gallery.length;
    const cover = el("div", { class: "cover" + (phones ? " cover--phones" : ""), style: `--c1:${c1};--c2:${c2}` });
    if (phones) {
      cover.append(el("div", { class: "phones" }, p.gallery.slice(0, 3).map((g) =>
        el("div", { class: "phone" }, el("img", { src: g.src, alt: "", loading: "lazy" })))));
    } else if (p.image) cover.append(el("img", { src: p.image, alt: "", loading: "lazy" }));
    else cover.append(el("span", { class: "cover__initials", text: initials(p.title) }));
    if (withBadge && p.status) cover.append(el("span", { class: "cover__badge", text: p.status }));
    return cover;
  }

  /* ---------- Projects ---------- */
  const grid = $("#project-grid");
  const empty = $("#project-empty");

  function renderProjects(filter = "all") {
    grid.replaceChildren();
    const list = data.projects.filter((p) => filter === "all" || p.kind === filter);
    empty.hidden = list.length > 0;

    list.forEach((p) => {
      const meta = el("div", { class: "card__meta" }, [
        el("span", { text: KIND_LABEL[p.kind] || p.kind }),
        p.platforms && p.platforms.length ? el("span", { text: p.platforms.join(", ") }) : null,
      ]);
      const card = el("button", {
        class: "card reveal" + (p.featured && filter === "all" ? " card--featured" : ""),
        type: "button",
        "aria-label": `Ver detalhes de ${p.title}`,
      }, [
        buildCover(p),
        el("div", { class: "card__body" }, [
          meta,
          el("div", { class: "card__title" }, [
            p.logo ? el("img", { class: "card__logo", src: p.logo, alt: "", loading: "lazy" }) : null,
            el("h3", { text: p.title }),
          ]),
          el("p", { text: p.summary }),
        ]),
      ]);
      card.addEventListener("click", () => openModal(p));
      grid.append(card);
    });
    observeReveal();
  }

  document.querySelectorAll(".filter").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".filter").forEach((b) => {
        const active = b === btn;
        b.classList.toggle("is-active", active);
        b.setAttribute("aria-selected", String(active));
      });
      renderProjects(btn.dataset.filter);
    });
  });

  /* ---------- Modal ---------- */
  const modal = $("#project-modal");

  function openModal(p) {
    $("#modal-cover").replaceChildren(buildCover(p, false));
    $("#modal-kind").textContent = [KIND_LABEL[p.kind] || p.kind, p.status].filter(Boolean).join(" · ");
    $("#modal-title").textContent = p.title;
    $("#modal-desc").replaceChildren(...(p.description || p.summary).split(/\n\s*\n/).map((t) => el("p", { text: t.trim() })));
    $("#modal-tags").replaceChildren(...[...(p.platforms || []), ...(p.tags || [])]
      .filter((t, i, a) => a.indexOf(t) === i)
      .map((t) => el("li", { text: t })));
    const gallery = p.gallery || [];
    $("#modal-gallery").hidden = gallery.length === 0;
    $("#modal-gallery").replaceChildren(...gallery.map((g) =>
      el("a", { class: "gallery__item", href: g.src, target: "_blank", rel: "noopener", title: g.alt },
        el("img", { src: g.src, alt: g.alt, loading: "lazy" }))));
    $("#modal-links").replaceChildren(...(p.links || []).map((l, i) =>
      el("a", { class: "btn " + (i === 0 ? "btn--primary" : "btn--ghost"), href: l.url, target: "_blank", rel: "noopener", text: l.label })));
    if (typeof modal.showModal === "function") modal.showModal();
    else modal.setAttribute("open", "");
  }
  const closeModal = () => (modal.close ? modal.close() : modal.removeAttribute("open"));
  modal.addEventListener("click", (e) => {
    if (e.target === modal || e.target.closest("[data-close]")) closeModal();
  });

  /* ---------- Contacts ---------- */
  $("#contact-list").replaceChildren(...data.contacts.map((c) => {
    const external = !c.url.startsWith("mailto:");
    return el("li", {}, el("a", {
      class: "contact__link",
      href: c.url,
      target: external ? "_blank" : null,
      rel: external ? "noopener" : null,
    }, [
      el("span", { html: `<svg viewBox="0 0 24 24" aria-hidden="true">${ICONS[c.type] || ICONS.link}</svg>` }).firstChild,
      el("span", { text: c.label }),
      el("span", { class: "arrow", text: "↗", "aria-hidden": "true" }),
    ]));
  }));

  /* ---------- Nav ---------- */
  const toggle = $(".nav-toggle");
  const nav = $("#nav");
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(open));
  });
  nav.addEventListener("click", (e) => {
    if (e.target.closest("a")) {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    }
  });

  const topbar = $(".topbar");
  const onScroll = () => topbar.classList.toggle("is-scrolled", window.scrollY > 8);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- Reveal ---------- */
  let io;
  function observeReveal() {
    const items = document.querySelectorAll(".reveal:not(.is-visible)");
    if (!("IntersectionObserver" in window)) { items.forEach((i) => i.classList.add("is-visible")); return; }
    io = io || new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("is-visible"); io.unobserve(e.target); } });
    }, { threshold: 0.1 });
    items.forEach((i) => io.observe(i));
  }

  $("#year").textContent = new Date().getFullYear();
  renderProjects();
})();
