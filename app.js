const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

const dict = {
  en: {
    nav_approach: "Approach",
    nav_focus: "Focus",
    nav_principles: "Principles",
    nav_contact: "Contact",
    hero_title: "Real estate investments, curated with rigor.",
    hero_subtitle:
      "We invest primarily in value-add and opportunistic strategies—combining disciplined underwriting with hands-on execution.",
    hero_cta_primary: "Start a conversation",
    hero_cta_secondary: "Explore our approach",
    hero_disclaimer:
      "For informational purposes only. Not an offer to sell or a solicitation to buy securities.",
    approach_title: "Approach",
    approach_intro:
      "Trealva targets real estate opportunities where active management, repositioning, and operational improvements can unlock value.",
    approach_card1_title: "Value-add",
    approach_card1_body:
      "Renovations, re-leasing, capex programs, and operating optimization to improve cashflow and resilience.",
    approach_card2_title: "Opportunistic",
    approach_card2_body:
      "Complex situations requiring speed, structuring, and experienced execution—always with a risk-first mindset.",
    approach_card3_title: "Discipline",
    approach_card3_body:
      "Conservative underwriting, downside scenarios, and aligned incentives from diligence through disposition.",
    focus_title: "Focus",
    focus_left_title: "What we look for",
    focus_li1: "Strong fundamentals and clear value creation plan",
    focus_li2: "Operational upside and measurable execution levers",
    focus_li3: "Capital structure opportunities",
    focus_li4: "Aligned local partners and specialist operators",
    focus_right_title: "How we add value",
    focus_li5: "Hands-on asset management and reporting cadence",
    focus_li6: "Tenant strategy, renovation scope, vendor control",
    focus_li7: "Risk management and governance",
    focus_li8: "Exit planning from day one",
    principles_title: "Principles",
    pill_1: "Trust",
    pill_2: "Discretion",
    pill_3: "Excellence",
    pill_4: "Strategic growth",
    pill_5: "Rigorous curation",
    contact_title: "Contact",
    contact_intro:
      "Share your project or investment inquiry. We’ll respond promptly and discreetly.",
    contact_card_title: "Email",
    contact_card_body: "Replace with your preferred inbox.",
    contact_card2_title: "Location",
    contact_card2_body: "Add city / country (optional)."
  },
  es: {
    nav_approach: "Enfoque",
    nav_focus: "Tesis",
    nav_principles: "Principios",
    nav_contact: "Contacto",
    hero_title: "Inversión inmobiliaria, curada con rigor.",
    hero_subtitle:
      "Invertimos principalmente mediante estrategias value-add y oportunistas, combinando análisis disciplinado con ejecución práctica.",
    hero_cta_primary: "Iniciar conversación",
    hero_cta_secondary: "Conocer el enfoque",
    hero_disclaimer:
      "Solo con fines informativos. No constituye oferta de venta ni solicitud de compra de valores.",
    approach_title: "Enfoque",
    approach_intro:
      "Trealva identifica oportunidades inmobiliarias donde la gestión activa, el reposicionamiento y mejoras operativas pueden detonar valor.",
    approach_card1_title: "Value-add",
    approach_card1_body:
      "Renovaciones, re-lease, programas de capex y optimización operativa para fortalecer flujo y resiliencia.",
    approach_card2_title: "Oportunista",
    approach_card2_body:
      "Situaciones complejas que requieren velocidad, estructuración y ejecución experta, siempre con mentalidad de control de riesgo.",
    approach_card3_title: "Disciplina",
    approach_card3_body:
      "Modelos conservadores, escenarios a la baja e incentivos alineados desde la diligencia hasta la salida.",
    focus_title: "Tesis",
    focus_left_title: "Qué buscamos",
    focus_li1: "Fundamentales sólidos y plan claro de creación de valor",
    focus_li2: "Upside operativo y palancas medibles de ejecución",
    focus_li3: "Oportunidades en estructura de capital",
    focus_li4: "Socios locales alineados y operadores especialistas",
    focus_right_title: "Cómo generamos valor",
    focus_li5: "Asset management práctico y cadencia de reporteo",
    focus_li6: "Estrategia comercial, alcance de obra y control de proveedores",
    focus_li7: "Gestión de riesgos y gobernanza",
    focus_li8: "Planeación de salida desde el día uno",
    principles_title: "Principios",
    pill_1: "Confianza",
    pill_2: "Discreción",
    pill_3: "Excelencia",
    pill_4: "Crecimiento estratégico",
    pill_5: "Curaduría rigurosa",
    contact_title: "Contacto",
    contact_intro:
      "Comparte tu proyecto o consulta de inversión. Responderemos con rapidez y discreción.",
    contact_card_title: "Correo",
    contact_card_body: "Sustituye por tu buzón preferido.",
    contact_card2_title: "Ubicación",
    contact_card2_body: "Añade ciudad / país (opcional)."
  }
};

function setLang(lang) {
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[lang] && dict[lang][key]) el.textContent = dict[lang][key];
  });

  document.querySelectorAll(".lang__btn").forEach((btn) => {
    btn.setAttribute("aria-pressed", btn.dataset.lang === lang ? "true" : "false");
  });

  localStorage.setItem("trealva_lang", lang);
}

document.querySelectorAll(".lang__btn").forEach((btn) => {
  btn.addEventListener("click", () => setLang(btn.dataset.lang));
});

setLang(localStorage.getItem("trealva_lang") || "en");
