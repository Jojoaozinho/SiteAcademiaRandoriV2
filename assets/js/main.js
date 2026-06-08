/* =============================================================
   ACADEMIA RANDORI / UNIGUAIRACÁ — JavaScript principal
   -------------------------------------------------------------
   Funcionalidades:
     1. Estado do cabeçalho ao rolar
     2. Menu mobile (abrir/fechar)
     3. Animações de revelação ao rolar (scroll reveal)
     4. Contadores animados (seção Números)
     5. Galeria: filtros por categoria + lightbox
   Todo o código é "vanilla JS" (sem dependências) e funciona
   em GitHub Pages sem qualquer configuração de servidor.
   ============================================================= */

document.addEventListener("DOMContentLoaded", function () {

  /* -----------------------------------------------------------
     1. CABEÇALHO — muda de aparência ao rolar a página
     ----------------------------------------------------------- */
  const header = document.querySelector(".site-header");
  if (header && header.classList.contains("transparent")) {
    const onScroll = () => {
      if (window.scrollY > 60) header.classList.add("scrolled");
      else header.classList.remove("scrolled");
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  /* -----------------------------------------------------------
     2. MENU MOBILE
     ----------------------------------------------------------- */
  const toggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");
  if (toggle && navLinks) {
    toggle.addEventListener("click", () => {
      const open = navLinks.classList.toggle("open");
      toggle.classList.toggle("open", open);
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      document.body.style.overflow = open ? "hidden" : "";
    });
    // Fecha o menu ao clicar em um link
    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("open");
        toggle.classList.remove("open");
        document.body.style.overflow = "";
      });
    });
  }

  /* -----------------------------------------------------------
     3. ANIMAÇÕES DE REVELAÇÃO AO ROLAR
        Adiciona a classe .visible quando o elemento .reveal
        entra na tela.
     ----------------------------------------------------------- */
  const revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && revealEls.length) {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );
    revealEls.forEach((el) => obs.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add("visible"));
  }

  /* -----------------------------------------------------------
     4. CONTADORES ANIMADOS
        Procura elementos [data-count] e anima de 0 ao valor.
     ----------------------------------------------------------- */
  const counters = document.querySelectorAll("[data-count]");
  const animateCount = (el) => {
    const target = parseInt(el.getAttribute("data-count"), 10);
    const duration = 1600;
    const start = performance.now();
    const step = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      // easing suave
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.floor(eased * target).toLocaleString("pt-BR");
      if (progress < 1) requestAnimationFrame(step);
      else el.textContent = target.toLocaleString("pt-BR");
    };
    requestAnimationFrame(step);
  };
  if ("IntersectionObserver" in window && counters.length) {
    const cObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCount(entry.target);
            cObs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.6 }
    );
    counters.forEach((el) => cObs.observe(el));
  } else {
    counters.forEach((el) => (el.textContent = el.getAttribute("data-count")));
  }

  /* -----------------------------------------------------------
     5. GALERIA — filtros + lightbox
        Os dados das imagens vêm de assets/js/galeria-config.js
        (variável global GALERIA). Esta parte só roda na página
        da galeria.
     ----------------------------------------------------------- */
  const galleryGrid = document.getElementById("galleryGrid");
  if (galleryGrid && typeof GALERIA !== "undefined") {
    const tabsWrap = document.getElementById("galleryTabs");
    let current = "todas";
    let flatList = []; // lista usada pelo lightbox

    // Reúne todas as imagens em uma lista única com a categoria
    const buildFlat = (cat) => {
      flatList = [];
      Object.keys(GALERIA.categorias).forEach((key) => {
        if (cat !== "todas" && cat !== key) return;
        GALERIA.categorias[key].fotos.forEach((foto) => {
          flatList.push({
            src: GALERIA.base + key + "/" + foto.arquivo,
            cap: foto.legenda || GALERIA.categorias[key].nome,
          });
        });
      });
    };

    const render = (cat) => {
      current = cat;
      buildFlat(cat);
      galleryGrid.innerHTML = "";
      if (!flatList.length) {
        galleryGrid.innerHTML =
          '<div class="gallery-empty">Nenhuma foto cadastrada nesta categoria ainda.<br>' +
          "Adicione imagens na pasta correspondente e edite <strong>assets/js/galeria-config.js</strong>.</div>";
        return;
      }
      flatList.forEach((item, i) => {
        const fig = document.createElement("div");
        fig.className = "gallery-item reveal visible";
        fig.innerHTML =
          '<img src="' + item.src + '" alt="' + item.cap + '" loading="lazy" ' +
          "onerror=\"this.parentNode.style.display='none'\">" +
          '<span class="cap">' + item.cap + "</span>";
        fig.addEventListener("click", () => openLightbox(i));
        galleryGrid.appendChild(fig);
      });
    };

    // Botões de categoria
    if (tabsWrap) {
      tabsWrap.addEventListener("click", (e) => {
        const btn = e.target.closest(".gallery-tab");
        if (!btn) return;
        tabsWrap.querySelectorAll(".gallery-tab").forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        render(btn.dataset.cat);
      });
    }

    /* ---- Lightbox ---- */
    const lb = document.getElementById("lightbox");
    const lbImg = document.getElementById("lightboxImg");
    let lbIndex = 0;
    const openLightbox = (i) => {
      lbIndex = i;
      lbImg.src = flatList[i].src;
      lb.classList.add("open");
      document.body.style.overflow = "hidden";
    };
    const closeLightbox = () => {
      lb.classList.remove("open");
      document.body.style.overflow = "";
    };
    const move = (dir) => {
      lbIndex = (lbIndex + dir + flatList.length) % flatList.length;
      lbImg.src = flatList[lbIndex].src;
    };
    if (lb) {
      document.getElementById("lbClose").addEventListener("click", closeLightbox);
      document.getElementById("lbPrev").addEventListener("click", () => move(-1));
      document.getElementById("lbNext").addEventListener("click", () => move(1));
      lb.addEventListener("click", (e) => { if (e.target === lb) closeLightbox(); });
      document.addEventListener("keydown", (e) => {
        if (!lb.classList.contains("open")) return;
        if (e.key === "Escape") closeLightbox();
        if (e.key === "ArrowLeft") move(-1);
        if (e.key === "ArrowRight") move(1);
      });
    }

    render("todas");
  }

  /* -----------------------------------------------------------
     6. VÍDEOS — player nativo (formato original, sem cortes)
        Dados vindos de assets/js/galeria-config.js (VIDEOS).
     ----------------------------------------------------------- */
  const videoGrid = document.getElementById("videoGrid");
  if (videoGrid && typeof VIDEOS !== "undefined") {
    videoGrid.innerHTML = "";
    VIDEOS.lista.forEach((v) => {
      const card = document.createElement("figure");
      card.className = "video-card reveal";
      const posterAttr = v.poster ? ' poster="' + VIDEOS.base + v.poster + '"' : "";
      card.innerHTML =
        '<div class="video-frame">' +
          '<video controls preload="none" playsinline' + posterAttr + '>' +
            '<source src="' + VIDEOS.base + v.arquivo + '" type="video/mp4">' +
            "Seu navegador não suporta a reprodução de vídeo." +
          "</video>" +
        "</div>" +
        (v.legenda ? '<figcaption>' + v.legenda + "</figcaption>" : "");
      videoGrid.appendChild(card);
    });
  }
});
