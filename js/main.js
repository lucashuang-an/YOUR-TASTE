import { sections, photos } from "./photos.js";

const SRC = "images";
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function workHTML(p) {
  const layout = p.layout || "wide";
  return `
    <button type="button" class="work ${layout}" data-photo="${p.id}" aria-label="Open ${p.alt}">
      <img src="${SRC}/${p.file}" alt="${p.alt}" loading="lazy" decoding="async" />
      <span class="cap">
        <span>${p.note}</span>
      </span>
    </button>
  `;
}

function render() {
  const hero = photos.find((p) => p.hero) || photos[0];
  const heroImg = document.querySelector("[data-hero-img]");
  const heroCap = document.querySelector("[data-hero-cap]");
  if (heroImg) {
    heroImg.src = `${SRC}/${hero.file}`;
    heroImg.alt = hero.alt;
  }
  if (heroCap) heroCap.textContent = hero.note;

  const main = document.getElementById("works");
  if (!main) return;

  main.innerHTML = sections
    .map((sec) => {
      const list = photos.filter((p) => p.section === sec.id);
      // one occasional solo after every other section for breath
      const parts = list.map(workHTML);
      return `
        <section class="sec" id="s-${sec.id}" data-section="${sec.id}">
          <header class="sec-head reveal">
            <div class="sec-num">${sec.num}</div>
            <h2>${sec.title}</h2>
            <p>${sec.thesis}</p>
          </header>
          <div class="dual">
            ${parts.join("")}
          </div>
        </section>
      `;
    })
    .join("");

  renderStrip();
}

function renderStrip() {
  const rail = document.querySelector("[data-drag-rail]");
  if (!rail) return;
  // a curated short strip from across chapters for drag browsing
  const picks = photos.filter((_, i) => i % 3 === 0).slice(0, 12);
  rail.innerHTML = picks
    .map(
      (p) => `
      <button type="button" class="drag-item" data-photo="${p.id}" aria-label="Open ${p.alt}">
        <img src="${SRC}/${p.file}" alt="${p.alt}" draggable="false" loading="lazy" decoding="async" />
        <span class="cap">${p.note}</span>
      </button>
    `
    )
    .join("");
}

function bindReveal() {
  const nodes = document.querySelectorAll(".reveal");
  if (reduceMotion || !("IntersectionObserver" in window)) {
    nodes.forEach((n) => n.classList.add("is-in"));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("is-in");
          io.unobserve(e.target);
        }
      });
    },
    { rootMargin: "0px 0px -6% 0px", threshold: 0.12 }
  );
  nodes.forEach((n) => io.observe(n));
}

/* lightbox */
const lb = { el: null, img: null, cap: null, file: null, i: 0, last: null };

function paint() {
  const p = photos[lb.i];
  if (!p) return;
  lb.img.src = `${SRC}/${p.file}`;
  lb.img.alt = p.alt;
  lb.cap.textContent = p.note;
  lb.file.textContent = "";
  lb.file.hidden = true;
}

function open(id) {
  lb.i = Math.max(0, photos.findIndex((p) => p.id === id));
  lb.last = document.activeElement;
  lb.el.classList.add("is-open");
  document.body.classList.add("lb-open");
  paint();
  lb.el.querySelector(".lb-close")?.focus();
}

function close() {
  lb.el.classList.remove("is-open");
  document.body.classList.remove("lb-open");
  lb.last?.focus?.();
}

function step(d) {
  lb.i = (lb.i + d + photos.length) % photos.length;
  paint();
}

function bindLightbox() {
  const el = document.getElementById("lightbox");
  if (!el) return;
  lb.el = el;
  lb.img = el.querySelector("img");
  lb.cap = el.querySelector("[data-cap]");
  lb.file = el.querySelector("[data-file]");

  document.addEventListener("click", (e) => {
    if (dragMoved) {
      dragMoved = false;
      return;
    }
    const btn = e.target.closest("[data-photo]");
    if (btn) {
      e.preventDefault();
      open(btn.getAttribute("data-photo"));
      return;
    }
    if (e.target.closest(".lb-close")) close();
    if (e.target.closest(".lb-prev")) step(-1);
    if (e.target.closest(".lb-next")) step(1);
    if (e.target === el) close();
  });

  document.addEventListener("keydown", (e) => {
    if (!el.classList.contains("is-open")) return;
    if (e.key === "Escape") close();
    if (e.key === "ArrowLeft") step(-1);
    if (e.key === "ArrowRight") step(1);
  });
}

function bindProgress() {
  const bar = document.querySelector(".progress");
  function onScroll() {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const r = max > 0 ? window.scrollY / max : 0;
    if (bar) bar.style.width = `${Math.min(100, Math.max(0, r * 100))}%`;
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

/* —— drag strip (pointer drag + inertia) —— */
let dragMoved = false;

function bindDragStrip() {
  const track = document.querySelector("[data-drag-track]");
  const rail = document.querySelector("[data-drag-rail]");
  if (!track || !rail) return;

  let offset = 0;
  let startX = 0;
  let startOffset = 0;
  let lastX = 0;
  let lastT = 0;
  let vel = 0;
  let dragging = false;
  let raf = 0;

  const maxOffset = () => Math.min(0, track.clientWidth - rail.scrollWidth);

  const setX = (x, rubber = false) => {
    const min = maxOffset();
    if (rubber) {
      // soft overscroll at edges
      if (x > 0) x = x * 0.28;
      if (x < min) x = min + (x - min) * 0.28;
    } else {
      x = Math.max(min, Math.min(0, x));
    }
    offset = x;
    rail.style.transform = `translate3d(${offset}px,0,0)`;
  };

  const stopInertia = () => {
    if (raf) {
      cancelAnimationFrame(raf);
      raf = 0;
    }
  };

  const coast = () => {
    if (reduceMotion) {
      setX(offset);
      return;
    }
    vel *= 0.94;
    if (Math.abs(vel) < 0.12) {
      setX(offset);
      raf = 0;
      return;
    }
    const min = maxOffset();
    let next = offset + vel;
    if (next > 0 || next < min) {
      setX(next, true);
      vel *= 0.65;
      if (next > -2 && next < 2) {
        setX(0);
        raf = 0;
        return;
      }
    } else {
      setX(next);
    }
    raf = requestAnimationFrame(coast);
  };

  track.addEventListener("pointerdown", (e) => {
    if (e.button !== 0) return;
    stopInertia();
    dragging = true;
    dragMoved = false;
    startX = e.clientX;
    startOffset = offset;
    lastX = e.clientX;
    lastT = performance.now();
    vel = 0;
    track.classList.add("is-dragging");
    track.setPointerCapture(e.pointerId);
  });

  track.addEventListener("pointermove", (e) => {
    if (!dragging) return;
    const now = performance.now();
    const dx = e.clientX - startX;
    if (Math.abs(dx) > 4) dragMoved = true;
    const dt = Math.max(1, now - lastT);
    vel = ((e.clientX - lastX) / dt) * 16; // px per frame
    lastX = e.clientX;
    lastT = now;
    setX(startOffset + dx, true);
  });

  const endDrag = (e) => {
    if (!dragging) return;
    dragging = false;
    track.classList.remove("is-dragging");
    try {
      track.releasePointerCapture(e.pointerId);
    } catch (_) {
      /* ignore */
    }
    // settle to bounds then coast
    if (reduceMotion) {
      setX(offset);
      return;
    }
    stopInertia();
    raf = requestAnimationFrame(coast);
  };
  track.addEventListener("pointerup", endDrag);
  track.addEventListener("pointercancel", endDrag);

  track.addEventListener(
    "wheel",
    (e) => {
      e.preventDefault();
      stopInertia();
      const delta = Math.abs(e.deltaY) > Math.abs(e.deltaX) ? e.deltaY : e.deltaX;
      setX(offset - delta);
    },
    { passive: false }
  );

  window.addEventListener("resize", () => {
    stopInertia();
    setX(offset);
  });
}

/* —— custom cursor —— */
function bindCursor() {
  const el = document.querySelector(".cursor");
  if (!el) return;
  const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  if (!fine || reduceMotion) return;

  const label = el.querySelector(".cursor-label");
  document.body.classList.add("has-cursor");

  let x = -120;
  let y = -120;
  let raf = 0;

  const paint = () => {
    el.style.transform = `translate3d(${x}px,${y}px,0)`;
    raf = 0;
  };

  window.addEventListener(
    "pointermove",
    (e) => {
      x = e.clientX;
      y = e.clientY;
      if (!raf) raf = requestAnimationFrame(paint);
    },
    { passive: true }
  );

  document.addEventListener("pointerover", (e) => {
    const t = e.target;
    if (t.closest("[data-drag-track]")) {
      el.classList.add("is-drag");
      el.classList.remove("is-view");
      if (label) label.textContent = "Drag";
      return;
    }
    if (t.closest("[data-photo]")) {
      el.classList.add("is-view");
      el.classList.remove("is-drag");
      if (label) label.textContent = "View";
      return;
    }
    el.classList.remove("is-drag", "is-view");
    if (label) label.textContent = "";
  });
}

render();
bindReveal();
bindLightbox();
bindProgress();
bindDragStrip();
bindCursor();

const n = document.querySelector("[data-count]");
if (n) n.textContent = String(photos.length);
