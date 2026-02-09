const year = document.getElementById("year");
year.textContent = new Date().getFullYear();

let lang = "en";

const copy = {
  en:{
    nav_about:"About",
    nav_strategies:"Strategies",
    nav_contact:"Contact",

    hero_title:"Creating Value Through Vision",
    hero_sub:"Value-add and opportunistic real estate investments across Spain, Mexico, and the United States.",

    about_title:"About",
    about_body:
      "<p>Trealva is an entrepreneurial real estate investment firm focused on creating value through value-add and opportunistic investments across Spain, Mexico, and the United States.</p>" +
      "<p>The firm specializes in identifying underperforming, mispriced, or transitional assets and unlocking their potential through active asset management, operational improvements, and strategic repositioning. With an owner-operator mindset and cross-border platform, Trealva partners with investors to pursue complex opportunities and generate compelling risk-adjusted returns.</p>",

    strategies_title:"Strategies",
    card1:"Value-Add Investments",
    card2:"Opportunistic Investments",
    card3:"Active Asset Management",
    card4:"Strategic Repositioning",

    contact_title:"Contact",
    contact_enquiries:"Contact us for enquiries"
  },

  es:{
    nav_about:"Nosotros",
    nav_strategies:"Estrategias",
    nav_contact:"Contacto",

    hero_title:"Creando Valor a Través de la Visión",
    hero_sub:"Inversiones inmobiliarias value-add y oportunistas en España, México y Estados Unidos.",

    about_title:"Nosotros",
    about_body:
      "<p>Trealva es una firma emprendedora de inversión inmobiliaria enfocada en crear valor mediante inversiones value-add y oportunistas en España, México y Estados Unidos.</p>" +
      "<p>La firma se especializa en identificar activos subvaluados o en transición y liberar su potencial mediante gestión activa, mejoras operativas y reposicionamiento estratégico. Con mentalidad owner-operator y plataforma transfronteriza, Trealva busca retornos atractivos ajustados por riesgo.</p>",

    strategies_title:"Estrategias",
    card1:"Inversiones Value-Add",
    card2:"Inversiones Oportunistas",
    card3:"Gestión Activa",
    card4:"Reposicionamiento Estratégico",

    contact_title:"Contacto",
    contact_enquiries:"Contáctanos para consultas"
  }
};

function applyLang(){
  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const key = el.dataset.i18n;
    const val = copy[lang]?.[key];
    if (!val) return; // don't blank out content if missing key

    if(key === "about_body") el.innerHTML = val;
    else el.textContent = val;
  });
}

document.getElementById("langToggle").onclick = ()=>{
  lang = (lang === "en") ? "es" : "en";
  applyLang();
};

applyLang();

// reveal on scroll
const obs = new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting) e.target.classList.add("visible");
  });
}, { threshold: 0.1 });

document.querySelectorAll(".reveal").forEach(el=>obs.observe(el));
