// Year in footer
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Content dictionary (EN/ES)
const copy = {
  en: {
    nav_about: "About",
    nav_strategy: "Strategy",
    nav_contact: "Contact",

    hero_tagline_en: "Creating Value Through Vision",
    hero_sub: "Value-add and opportunistic real estate investments across Spain, Mexico, and the United States.",
    hero_cta: "Get in touch",
    hero_cta2: "View strategy",
    scroll: "Scroll",

    about_title: "About",
    about_body:
      "Trealva is an entrepreneurial real estate investment firm focused on creating value through value-add and opportunistic investments across Spain, Mexico, and the United States. " +
      "The firm specializes in identifying underperforming, mispriced, or transitional assets and unlocking their potential through active asset management, operational improvements, and strategic repositioning. " +
      "Trealva takes a highly involved, execution-driven approach, combining local market insight with flexible capital and fast decision-making. " +
      "With a cross-border platform and an owner-operator mindset, Trealva partners with investors to pursue complex opportunities and generate compelling, risk-adjusted returns in markets where experience and agility matter most.",

    geo_title: "Geographies",
    geo_value: "Spain · Mexico · United States",
    mindset_title: "Mindset",
    mindset_value: "Owner-operator · Execution-driven",
    speed_title: "Decision-making",
    speed_value: "Flexible capital · Fast decisions",

    strategy_title: "Strategy",
    strategy_sub:
      "We pursue complex opportunities with rigorous underwriting, hands-on execution, and alignment across the full investment lifecycle.",

    card1_title: "Value-Add Investments",
    card1_body: "Renovations, lease-up, capex programs, and operating optimization to unlock value.",
    card2_title: "Opportunistic Investments",
    card2_body: "Complex situations requiring speed, structuring, and experienced execution.",
    card3_title: "Active Asset Management",
    card3_body: "Hands-on asset oversight, reporting cadence, and KPI-driven operations.",
    card4_title: "Strategic Repositioning",
    card4_body: "Re-tenanting, repositioning, and execution plans designed for resilient outcomes.",

    diff1: "Owner-operator mindset",
    diff2: "Flexible capital",
    diff3: "Fast decision-making",

    contact_title: "Contact",
    contact_sub: "Share your project or investment inquiry. We’ll respond promptly and discreetly.",
    email_label: "Email",
    markets_label: "Markets",
    markets_value: "Spain · Mexico · United States",

    footer_note: "All rights reserved."
  },

  es: {
    nav_about: "Nosotros",
    nav_strategy: "Estrategia",
    nav_contact: "Contacto",

    hero_tagline_en: "Creando Valor a Través de la Visión",
    hero_sub: "Inversiones inmobiliarias value-add y oportunistas en España, México y Estados Unidos.",
    hero_cta: "Contactar",
    hero_cta2: "Ver estrategia",
    scroll: "Desliza",

    about_title: "Nosotros",
    about_body:
      "Trealva es una firma emprendedora de inversión inmobiliaria enfocada en crear valor mediante inversiones value-add y oportunistas en España, México y Estados Unidos. " +
      "La firma se especializa en identificar activos con bajo desempeño, mal valorados o en transición, y en liberar su potencial a través de una gestión activa, mejoras operativas y reposicionamiento estratégico. " +
      "Trealva adopta un enfoque altamente involucrado y orientado a la ejecución, combinando conocimiento local con capital flexible y toma de decisiones ágil. " +
      "Con una plataforma transfronteriza y mentalidad de owner-operator, Trealva se asocia con inversionistas para perseguir oportunidades complejas y generar retornos atractivos ajustados por riesgo en mercados donde la experiencia y la agilidad marcan la diferencia.",

    geo_title: "Geografías",
    geo_value: "España · México · Estados Unidos",
    mindset_title: "Mentalidad",
    mindset_value: "Owner-operator · Enfoque a la ejecución",
    speed_title: "Decisiones",
    speed_value: "Capital flexible · Decisiones rápidas",

    strategy_title: "Estrategia",
    strategy_sub:
      "Buscamos oportunidades complejas con análisis riguroso, ejecución práctica y alineación durante todo el ciclo de inversión.",

    card1_title: "Inversiones Value-Add",
    card1_body: "Remodelaciones, lease-up, capex y optimización operativa para detonar valor.",
    card2_title: "Inversiones Oportunistas",
    card2_body: "Situaciones complejas que requieren velocidad, estructuración y ejecución experta.",
    card3_title: "Gestión Activa de Activos",
    card3_body: "Supervisión práctica, cadencia de reporteo y operación guiada por KPIs.",
    card4_title: "Reposicionamiento Estratégico",
    card4_body: "Re-tenanting, reposicionamiento y planes de ejecución para resultados resilientes.",

    diff1: "Mentalidad owner-operator",
    diff2: "Capital flexible",
    diff3: "Decisiones rápidas",

    contact_title: "Contacto",
    contact_sub: "Comparte tu proyecto o consulta de inversión. Responderemos con rapidez y discreción.",
    email_label: "Correo",
    markets_label: "Mercados",
    markets_value: "España · México · Estados Unidos",

    footer_note: "Todos los derechos reservados."
  }
};

// Apply language
function setLang(lang) {
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (copy[lang] && copy[lang][key]) el.textContent = copy[lang][key];
  });

  // toggle pills
  document.querySelectorAll(".lang__pill").forEach((pill) => {
    pill.setAttribute("aria-pressed", pill.dataset.lang === lang ? "true" : "false");
  });

  localStorage.setItem("trealva_lang", lang);
}

// Toggle language on click
const langBtn = document.querySelector(".lang");
if (langBtn) {
  langBtn.addEventListener("click", () => {
    const current = localStorage.getItem("trealva_lang") || "en";
    setLang(current === "en" ? "es" : "en");
  });
}

// Initialize language
setLang(localStorage.getItem("trealva_lang") || "en");

// Fade-in on scroll (IntersectionObserver)
const reveals = document.querySelectorAll(".reveal");
const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) e.target.classList.add("is-visible");
    });
  },
  { threshold: 0.12 }
);
reveals.forEach((el) => io.observe(el));

// Mobile menu
const burger = document.querySelector(".burger");
const mobileMenu = document.getElementById("mobileMenu");

function closeMenu() {
  if (!burger || !mobileMenu) return;
  mobileMenu.hidden = true;
  burger.setAttribute("aria-expanded", "false");
}

if (burger && mobileMenu) {
  burger.addEventListener("click", () => {
    const isOpen = burger.getAttribute("aria-expanded") === "true";
    burger.setAttribute("aria-expanded", String(!isOpen));
    mobileMenu.hidden = isOpen;
  });

  // Close menu on link click
  mobileMenu.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", closeMenu);
  });
}

// Close menu on ESC
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeMenu();
});
