/**
 * shared/styles.js
 * Tokens de diseño compartidos de todo el sitio: colores, tipografías,
 * espaciados, estilos de botones/tarjetas y CSS responsive global.
 * Lo compartido vive SOLO aquí; ninguna sección duplica estos estilos.
 */

export const COLORS = {
  navy: '#0B1E3D',      // Azul profundo / medianoche (base)
  navyLight: '#142B52',
  indigo: '#5B4FE8',    // Índigo eléctrico (acento)
  indigoDark: '#4A3FC4',
  mint: '#3DDC97',      // Verde menta (acciones / positivo)
  mintDark: '#2EC584',
  bone: '#F7F8FA',      // Blanco hueso (fondos)
  ink: '#2B2E38',       // Gris oscuro (textos)
  inkSoft: '#5B6072',
  white: '#FFFFFF',
  line: '#E3E7F0',
  darkLine: 'rgba(255,255,255,0.12)',
};

export const FONTS = {
  heading: "'Sora', 'Poppins', sans-serif",
  body: "'Inter', 'Nunito Sans', sans-serif",
};

export const SPACING = {
  section: '92px',
  container: '1140px',
  radius: '20px',
  radiusSm: '14px',
};

/**
 * Configuración del sitio (DATOS PLACEHOLDER).
 * IMPORTANTE: el usuario debe completar el número real de WhatsApp, el
 * correo y las redes sociales antes de publicar.
 */
export const CONFIG = {
  siteName: 'Centro Nacional de Inteligencia Artificial — Reborntech',
  shortName: 'Reborntech',
  country: 'Colombia',
  // NÚMERO PLACEHOLDER: reemplazar por el WhatsApp real (código de país + número, sin '+' ni espacios).
  whatsappNumber: '573005550199',
  whatsappLink: 'https://wa.me/573005550199',
  // DATOS DE DEMOSTRACIÓN: reemplazar por los datos reales antes de la publicación definitiva.
  email: 'hola@reborntech.co',
  social: {
    instagram: 'https://instagram.com/reborntech.co',
    linkedin: 'https://linkedin.com/company/reborntech-co',
    tiktok: 'https://tiktok.com/@reborntech.co',
  },
  hoursHuman: '8:00 a.m. – 6:00 p.m.',
  hoursHumanShort: '8:00 a.m. – 6:00 p.m.',
  hoursAi: '24/7',
  logoUrl: 'https://res.cloudinary.com/iyqkwmtf/image/upload/v1785618369/logo_cenia_fka7vv.png',
};

/**
 * Generador de íconos SVG inline (estilo de línea simple).
 * No se usan librerías externas ni emojis como íconos principales.
 */
function svgIcon(paths, size = 24) {
  return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths}</svg>`;
}

export const ICONS = {
  advisory: svgIcon('<circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/>'),
  training: svgIcon('<path d="M22 10L12 5 2 10l10 5 10-5z"/><path d="M6 12v5c0 1.7 2.7 3 6 3s6-1.3 6-3v-5"/><path d="M22 10v6"/>'),
  sectorTraining: svgIcon('<path d="M22 10L12 5 2 10l10 5 10-5z"/><path d="M6 12v5c0 1.7 2.7 3 6 3s6-1.3 6-3v-5"/><rect x="3" y="17" width="18" height="4" rx="1"/>'),
  techAdvisory: svgIcon('<rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/><path d="M9 10l2 2 4-4"/>'),
  subscriptions: svgIcon('<rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/><path d="M6 15h4"/>'),
  local: svgIcon('<path d="M12 2l7 3v6c0 4.5-3 8.5-7 10-4-1.5-7-5.5-7-10V5l7-3z"/><path d="M9.5 12l2 2 3.5-4"/>'),
  automation: svgIcon('<path d="M12 7v5l3 3"/><circle cx="12" cy="12" r="9"/>'),
  health: svgIcon('<path d="M12 21c-4-3-8-6.2-8-10a4.5 4.5 0 0 1 8-2.9A4.5 4.5 0 0 1 20 11c0 3.8-4 7-8 10z"/><path d="M8 12h2l1.5-2 2 3 1-1h1.5"/>'),
  sports: svgIcon('<path d="M8 21h8M12 17v4"/><path d="M19 4H5v6a7 7 0 0 0 14 0V4z"/><path d="M5 6H3v1a4 4 0 0 0 2 3.5"/><path d="M19 6h2v1a4 4 0 0 1-2 3.5"/>'),
  bank: svgIcon('<path d="M3 21h18M4 21V10M20 21V10M2 10h20M12 3L3 8h18L12 3z"/><path d="M9 21v-6h6v6"/>'),
  restaurant: svgIcon('<path d="M4 3v8a2 2 0 0 0 4 0V3M6 3v18"/><path d="M16 3v18M16 3c3 0 4 2.5 4 5s-1 4-4 4"/>'),
  events: svgIcon('<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/><path d="M9 15h.01M12 15h.01M15 15h.01M9 18h.01M12 18h.01M15 18h.01"/>'),
  architecture: svgIcon('<path d="M3 21h18M4 21V8M8 21V4h8v17M20 21V8"/><path d="M8 8h.01M8 12h.01M8 16h.01M16 8h.01M16 12h.01M16 16h.01M12 8h.01M12 12h.01M12 16h.01"/>'),
  other: svgIcon('<circle cx="12" cy="12" r="9"/><path d="M12 8l.9 2.1L15 11l-2.1.9L12 14l-.9-2.1L9 11l2.1-.9z"/><path d="M18 17l.5 1.2 1.2.5-1.2.5-.5 1.2-.5-1.2-1.2-.5 1.2-.5z"/>'),
  check: svgIcon('<circle cx="12" cy="12" r="10"/><path d="M8 12.5l2.5 2.5L16.5 9"/>'),
  chat: svgIcon('<path d="M21 11.5a8.5 8.5 0 0 1-8.5 8.5 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-4.7a8.4 8.4 0 0 1-.9-3.8A8.5 8.5 0 0 1 12.5 4H13a8.5 8.5 0 0 1 8 7.5z"/>'),
  clock: svgIcon('<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/>'),
  globe: svgIcon('<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a15 15 0 0 1 4 9 15 15 0 0 1-4 9 15 15 0 0 1-4-9 15 15 0 0 1 4-9z"/>'),
  users: svgIcon('<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8"/>'),
  shield: svgIcon('<path d="M12 2l7 3v6c0 4.5-3 8.5-7 10-4-1.5-7-5.5-7-10V5l7-3z"/>'),
  arrow: svgIcon('<path d="M4 12h16M13 6l6 6-6 6"/>'),
  whatsapp: svgIcon('<path d="M21 11.5a8.5 8.5 0 0 1-8.5 8.5 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-4.7a8.4 8.4 0 0 1-.9-3.8A8.5 8.5 0 0 1 12.5 4H13a8.5 8.5 0 0 1 8 7.5z"/><path d="M9 9c.5 2 1.5 3.5 3.5 4.5.5-1 1.5-1.5 2.5-1l1 1"/>'),
  mail: svgIcon('<rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 7l-10 6L2 7"/>'),
  phone: svgIcon('<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.4 2.1L8.1 10a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c1 .3 2 .6 2.9.7a2 2 0 0 1 1.6 2z"/>'),
  sparkle: svgIcon('<path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z"/><path d="M19 15l.9 2.1L22 18l-2.1.9L19 21l-.9-2.1L16 18l2.1-.9z"/>'),
  send: svgIcon('<path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>'),
  instagram: svgIcon('<rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><path d="M17.5 6.5h.01"/>'),
  linkedin: svgIcon('<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4V9h4v1.5"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>'),
  tiktok: svgIcon('<path d="M14 4v11a4 4 0 1 1-4-4"/><path d="M14 4a5 5 0 0 0 5 5"/>'),
  target: svgIcon('<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>'),
  wifiOff: svgIcon('<path d="M1 1l22 22"/><path d="M16.7 11.1a10 10 0 0 1 2.3 1.4"/><path d="M5 12.5a10 10 0 0 1 5-2.7"/><path d="M10.7 5.1A16 16 0 0 1 22.6 9"/><path d="M1.4 9a16 16 0 0 1 4.6-2.9"/><path d="M8.5 16.4a6 6 0 0 1 7 0"/><path d="M12 20h.01"/>'),
  server: svgIcon('<rect x="2" y="3" width="20" height="7" rx="1.5"/><rect x="2" y="14" width="20" height="7" rx="1.5"/><path d="M6 6.5h.01M6 17.5h.01"/>'),
  mic: svgIcon('<rect x="9" y="2" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0 0 14 0"/><path d="M12 18v4"/>'),
  vision: svgIcon('<circle cx="12" cy="12" r="3"/><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z"/>'),
  home: svgIcon('<path d="M3 11l9-8 9 8"/><path d="M5 9.5V21h14V9.5"/>'),
};

/** Botón compartido. variant: mint (principal) | indigo | outline | light */
export function button(href, label, variant = 'mint', size = 'md', extra = '') {
  const sizeClass = size === 'lg' ? ' btn--lg' : size === 'sm' ? ' btn--sm' : '';
  return `<a href="${href}" class="btn btn--${variant}${sizeClass}" ${extra}>${label}${variant !== 'link' ? svgIcon(ICONS.arrow, 18) : ''}</a>`;
}

/**
 * CSS global del sitio. Se inyecta en el <head> desde layout.js.
 */
export function css() {
  return `
:root {
  --navy: ${COLORS.navy};
  --navy-light: ${COLORS.navyLight};
  --indigo: ${COLORS.indigo};
  --indigo-dark: ${COLORS.indigoDark};
  --mint: ${COLORS.mint};
  --mint-dark: ${COLORS.mintDark};
  --bone: ${COLORS.bone};
  --ink: ${COLORS.ink};
  --ink-soft: ${COLORS.inkSoft};
  --white: ${COLORS.white};
  --line: ${COLORS.line};
  --font-head: ${FONTS.heading};
  --font-body: ${FONTS.body};
  --radius: ${SPACING.radius};
  --radius-sm: ${SPACING.radiusSm};
  --container: ${SPACING.container};
  --shadow-sm: 0 4px 16px rgba(11,30,61,0.07);
  --shadow-md: 0 12px 34px rgba(11,30,61,0.12);
}

* { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; }
section[id] { scroll-margin-top: 88px; }
body {
  font-family: var(--font-body);
  color: var(--ink);
  background: var(--bone);
  line-height: 1.65;
  -webkit-font-smoothing: antialiased;
}
img { max-width: 100%; height: auto; }
a { color: var(--indigo); }
h1, h2, h3, h4 { font-family: var(--font-head); color: var(--navy); line-height: 1.2; }
.container { max-width: var(--container); margin: 0 auto; padding: 0 24px; }
.sr-only { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0,0,0,0); white-space: nowrap; border: 0; }

/* ============ Botones ============ */
.btn {
  display: inline-flex; align-items: center; justify-content: center; gap: 8px;
  font-family: var(--font-body); font-weight: 600; font-size: 1rem;
  padding: 14px 26px; border-radius: 999px; text-decoration: none;
  border: 2px solid transparent; cursor: pointer; transition: all 0.25s ease;
  box-shadow: var(--shadow-sm);
}
.btn svg { flex-shrink: 0; }
.btn--lg { padding: 17px 32px; font-size: 1.08rem; }
.btn--sm { padding: 10px 18px; font-size: 0.92rem; }
.btn--mint { background: var(--mint); color: var(--navy); }
.btn--mint:hover { background: var(--mint-dark); transform: translateY(-2px); }
.btn--indigo { background: var(--indigo); color: var(--white); }
.btn--indigo:hover { background: var(--indigo-dark); transform: translateY(-2px); }
.btn--outline { background: transparent; color: var(--navy); border-color: var(--navy); box-shadow: none; }
.btn--outline:hover { background: var(--navy); color: var(--white); }
.btn--outline.is-active { background: var(--indigo); border-color: var(--indigo); color: var(--white); }
.btn--outline.is-active:hover { background: var(--indigo-dark); border-color: var(--indigo-dark); }
.btn--light { background: var(--white); color: var(--navy); }
.btn--light:hover { transform: translateY(-2px); }
.btn--link { background: none; color: var(--indigo); padding: 6px 0; box-shadow: none; }
.btn--link:hover { color: var(--indigo-dark); }
.btn--link svg { display: none; }

/* ============ Header / Navegación ============ */
.site-header {
  position: sticky; top: 0; z-index: 100;
  background: rgba(11,30,61,0.96); backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--darkLine);
}
.nav { display: flex; align-items: center; gap: 20px; height: 76px; }
.nav__brand { display: flex; align-items: center; gap: 12px; text-decoration: none; flex-shrink: 0; }
.nav__brand img { width: 44px; height: 44px; border-radius: 10px; }
.nav__brand span { color: var(--white); font-family: var(--font-head); font-weight: 700; font-size: 1.12rem; }
.nav__links { display: flex; align-items: center; gap: 4px; margin-left: auto; flex-wrap: nowrap; min-width: 0; }
.nav__links a:not(.btn) {
  color: rgba(255,255,255,0.85); text-decoration: none; font-weight: 500;
  font-size: 0.95rem; padding: 8px 12px; border-radius: 8px; transition: color 0.2s; white-space: nowrap;
}
.nav__links a:not(.btn):hover { color: var(--mint); }
.nav__links a:not(.btn).is-active { color: var(--mint); }
.nav__cta { margin-left: 8px; white-space: nowrap; }
.nav__toggle {
  display: none; margin-left: auto; background: none; border: 0; cursor: pointer;
  width: 40px; height: 40px; border-radius: 8px; align-items: center; justify-content: center;
}
.nav__toggle span { display: block; width: 22px; height: 2px; background: var(--white); margin: 4px auto; transition: all 0.3s; }
@media (min-width: 921px) and (max-width: 1160px) {
  .nav { gap: 12px; }
  .nav__links { gap: 0; }
  .nav__links a:not(.btn) { font-size: 0.8rem; padding: 7px 6px; }
  .nav__cta { margin-left: 4px; padding: 8px 12px; font-size: 0.78rem; }
}
@media (max-width: 920px) {
  .nav__links {
    display: none; position: absolute; top: 76px; left: 0; right: 0; flex-direction: column;
    align-items: stretch; gap: 4px; padding: 16px 24px 24px; background: var(--navy);
    border-bottom: 1px solid var(--darkLine);
  }
  .nav__links.nav__links--open { display: flex; }
  .nav__links a { padding: 12px 8px !important; font-size: 1rem !important; }
  .nav__cta { margin: 8px 0 0; }
  .nav__toggle { display: flex; }
}

/* ============ Secciones ============ */
.section { padding: var(--section-pad, 92px) 0; }
.section--alt { background: var(--white); }
.section--tint { background: linear-gradient(180deg, #F1F2F9 0%, var(--bone) 100%); }
.section--dark { background: var(--navy); color: rgba(255,255,255,0.85); }
.section--dark h2, .section--dark h3 { color: var(--white); }
.section__head { max-width: 760px; margin: 0 auto 52px; text-align: center; }
.section__eyebrow {
  display: inline-flex; align-items: center; gap: 8px; color: var(--indigo);
  font-weight: 700; font-size: 0.85rem; letter-spacing: 1.5px; text-transform: uppercase; margin-bottom: 14px;
}
.section__eyebrow svg { width: 18px; height: 18px; }
.section__title { font-size: clamp(1.9rem, 4vw, 2.7rem); font-weight: 700; margin-bottom: 16px; }
.section__sub { color: var(--ink-soft); font-size: 1.08rem; }
.section__sub strong { color: var(--ink); }

/* ============ Hero ============ */
.hero {
  position: relative; overflow: hidden; color: var(--white);
  background: radial-gradient(1200px 600px at 85% -10%, rgba(91,79,232,0.45) 0%, transparent 60%),
              radial-gradient(900px 500px at 0% 110%, rgba(61,220,151,0.22) 0%, transparent 55%),
              linear-gradient(160deg, var(--navy) 0%, #132A52 100%);
  padding: 110px 0 96px;
}
.hero__blob { position: absolute; border-radius: 50%; filter: blur(10px); opacity: 0.5; }
.hero__blob--1 { width: 380px; height: 380px; background: radial-gradient(circle at 30% 30%, rgba(91,79,232,0.5), transparent 70%); top: -120px; right: -80px; }
.hero__blob--2 { width: 260px; height: 260px; background: radial-gradient(circle at 60% 40%, rgba(61,220,151,0.4), transparent 70%); bottom: -80px; left: -60px; }
.hero .container { position: relative; z-index: 2; }
.hero__eyebrow {
  display: inline-flex; align-items: center; gap: 8px; background: rgba(255,255,255,0.08);
  border: 1px solid rgba(255,255,255,0.16); padding: 8px 16px; border-radius: 999px;
  font-size: 0.88rem; font-weight: 600; color: var(--mint); margin-bottom: 22px;
}
.hero__title { font-size: clamp(2.3rem, 5.5vw, 3.6rem); font-weight: 800; color: var(--white); margin-bottom: 20px; }
.hero__title .grad {
  background: linear-gradient(90deg, var(--mint) 0%, #8BE8C4 100%);
  -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent;
}
.hero__sub { font-size: 1.18rem; max-width: 640px; color: rgba(255,255,255,0.85); margin-bottom: 26px; }
.hero__sub strong { color: var(--white); }
.hero__pillars { display: flex; flex-wrap: wrap; gap: 10px; margin-bottom: 34px; }
.hero__pillar {
  display: inline-flex; align-items: center; gap: 8px; background: rgba(255,255,255,0.08);
  border: 1px solid rgba(255,255,255,0.16); padding: 10px 18px; border-radius: 999px;
  font-weight: 600; font-size: 0.95rem;
}
.hero__pillar svg { width: 20px; height: 20px; color: var(--mint); }
.hero__actions { display: flex; flex-wrap: wrap; gap: 14px; margin-bottom: 48px; }
.hero__trust { display: grid; grid-template-columns: repeat(4, 1fr); gap: 18px; }
.hero__title .word { display: inline-block; }
.hero__title .char { display: inline-block; will-change: transform, opacity; }
.hero__title .word-space { display: inline-block; width: .3em; }
@media (max-width: 900px) { .hero__trust { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 480px) { .hero__trust { grid-template-columns: 1fr; } }

/* ============ Tarjetas ============ */
.card {
  background: var(--white); border: 1px solid var(--line); border-radius: var(--radius);
  padding: 28px; box-shadow: var(--shadow-sm); transition: transform 0.25s ease, box-shadow 0.25s ease;
  display: flex; flex-direction: column;
}
.card:hover { transform: translateY(-5px); box-shadow: var(--shadow-md); }
.card__icon {
  width: 54px; height: 54px; border-radius: 14px; display: flex; align-items: center; justify-content: center;
  background: rgba(91,79,232,0.1); color: var(--indigo); margin-bottom: 18px;
}
.card__icon svg { width: 28px; height: 28px; }
.card h3 { font-size: 1.18rem; margin-bottom: 8px; }
.card p { color: var(--ink-soft); font-size: 0.98rem; flex-grow: 1; }
.card .btn { margin-top: 20px; align-self: flex-start; }
.grid-3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
.grid-4 { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; }
.grid-2 { display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px; }
@media (max-width: 900px) { .grid-4 { grid-template-columns: repeat(2, 1fr); } .grid-3 { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 620px) { .grid-4, .grid-3, .grid-2 { grid-template-columns: 1fr; } }

/* ============ Trust (bloque de confianza) ============ */
.trust-item { text-align: center; padding: 22px 12px; }
.trust-item__icon {
  width: 60px; height: 60px; margin: 0 auto 14px; border-radius: 50%;
  background: rgba(255,255,255,0.1); display: flex; align-items: center; justify-content: center;
  color: var(--mint);
}
.trust-item__icon svg { width: 30px; height: 30px; }
.trust-item strong { display: block; font-family: var(--font-head); color: var(--white); margin-bottom: 4px; }
.trust-item span { font-size: 0.9rem; color: rgba(255,255,255,0.7); }

/* ============ Sectores ============ */
.sector-chip { display: flex; align-items: center; gap: 12px; padding: 14px 16px; border-radius: var(--radius-sm); background: var(--bone); border: 1px solid var(--line); }
.sector-chip__icon { width: 44px; height: 44px; flex-shrink: 0; border-radius: 12px; background: rgba(61,220,151,0.14); color: var(--indigo); display: flex; align-items: center; justify-content: center; }
.sector-chip__icon svg { width: 24px; height: 24px; }
.sector-chip strong { display: block; font-size: 1rem; }
.sector-chip span { font-size: 0.86rem; color: var(--ink-soft); }

/* ============ Cómo trabajamos ============ */
.timeline { position: relative; display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; }
.timeline::before { content: ''; position: absolute; top: 36px; left: 8%; right: 8%; height: 2px; background: linear-gradient(90deg, var(--indigo), var(--mint)); opacity: 0.35; }
.timeline__step { position: relative; text-align: center; padding: 0 8px; }
.timeline__num {
  width: 72px; height: 72px; margin: 0 auto 18px; border-radius: 50%;
  background: var(--white); border: 3px solid var(--indigo); color: var(--indigo);
  display: flex; align-items: center; justify-content: center;
  font-family: var(--font-head); font-weight: 700; font-size: 1.4rem; position: relative; z-index: 1;
}
.timeline__step h3 { font-size: 1.1rem; margin-bottom: 8px; }
.timeline__step p { font-size: 0.93rem; color: var(--ink-soft); }
@media (max-width: 760px) {
  .timeline { grid-template-columns: 1fr; gap: 30px; }
  .timeline::before { left: 36px; right: auto; top: 6%; bottom: 6%; width: 2px; height: auto; }
  .timeline__step { text-align: left; padding-left: 78px; }
  .timeline__num { margin: 0 0 12px; position: absolute; left: 0; top: 0; }
}

/* ============ FAQ ============ */
.faq-list { max-width: 800px; margin: 0 auto; display: flex; flex-direction: column; gap: 14px; }
.faq-item { background: var(--white); border: 1px solid var(--line); border-radius: var(--radius-sm); overflow: hidden; }
.faq-item summary {
  display: flex; align-items: center; justify-content: space-between; gap: 16px;
  padding: 20px 24px; cursor: pointer; font-weight: 600; font-family: var(--font-head);
  color: var(--navy); font-size: 1.05rem; list-style: none;
}
.faq-item summary::-webkit-details-marker { display: none; }
.faq-item summary::after { content: '+'; font-size: 1.6rem; font-weight: 400; color: var(--indigo); line-height: 1; transition: transform 0.25s; }
.faq-item[open] summary::after { transform: rotate(45deg); }
.faq-item__body { padding: 0 24px 22px; color: var(--ink-soft); }
.faq-item__body p { margin-bottom: 8px; }
.faq-item__body p:last-child { margin: 0; }

/* ============ Formulario ============ */
.form { background: var(--white); border: 1px solid var(--line); border-radius: var(--radius); padding: 32px; box-shadow: var(--shadow-sm); }
.form__row { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; }
@media (max-width: 620px) { .form__row { grid-template-columns: 1fr; } }
.form__field { margin-bottom: 18px; }
.form__field label { display: block; font-weight: 600; font-size: 0.92rem; margin-bottom: 8px; color: var(--ink); }
.form__field input, .form__field select, .form__field textarea {
  width: 100%; padding: 13px 16px; border: 1.5px solid var(--line); border-radius: 10px;
  font-family: var(--font-body); font-size: 0.98rem; color: var(--ink); background: var(--bone);
  transition: border-color 0.2s, box-shadow 0.2s;
}
.form__field input:focus, .form__field select:focus, .form__field textarea:focus {
  outline: none; border-color: var(--indigo); box-shadow: 0 0 0 4px rgba(91,79,232,0.12); background: var(--white);
}
.form__field textarea { min-height: 110px; resize: vertical; }
.form__note { font-size: 0.85rem; color: var(--ink-soft); margin-top: 14px; }
.form__success {
  display: none; margin-top: 16px; padding: 16px; border-radius: 10px; background: rgba(61,220,151,0.14);
  border: 1px solid var(--mint); color: var(--navy); font-weight: 600;
}
.form__success.is-visible { display: block; }

/* ============ Disponibilidad ============ */
.avail { display: flex; flex-wrap: wrap; gap: 12px; }
.avail__badge {
  display: inline-flex; align-items: center; gap: 10px; padding: 12px 18px; border-radius: 12px;
  background: rgba(255,255,255,0.07); border: 1px solid rgba(255,255,255,0.15); font-size: 0.92rem;
}
.avail__badge svg { width: 20px; height: 20px; color: var(--mint); flex-shrink: 0; }
.avail__badge strong { color: var(--white); display: block; font-size: 0.92rem; }
.avail__badge span { color: rgba(255,255,255,0.7); font-size: 0.84rem; }
.avail__badge--light { background: var(--bone); border-color: var(--line); }
.avail__badge--light strong { color: var(--navy); }
.avail__badge--light span { color: var(--ink-soft); }

/* ============ Contacto ============ */
.contact-grid { display: grid; grid-template-columns: 1.2fr 0.8fr; gap: 40px; align-items: start; }
@media (max-width: 900px) { .contact-grid { grid-template-columns: 1fr; } }
.contact-info { background: var(--navy); color: rgba(255,255,255,0.85); border-radius: var(--radius); padding: 32px; }
.contact-info h3 { color: var(--white); margin-bottom: 18px; }
.contact-info__list { display: flex; flex-direction: column; gap: 14px; margin: 24px 0; }
.contact-info__item { display: flex; gap: 14px; align-items: flex-start; }
.contact-info__item svg { width: 22px; height: 22px; color: var(--mint); flex-shrink: 0; margin-top: 3px; }
.contact-info__item strong { display: block; color: var(--white); }
.contact-info__item a { color: var(--mint); text-decoration: none; word-break: break-all; }
.contact-info__item a:hover { text-decoration: underline; }
.contact-info__item span { font-size: 0.92rem; }
.contact-social { display: flex; gap: 12px; margin-top: 22px; }
.contact-social a {
  width: 44px; height: 44px; border-radius: 12px; display: flex; align-items: center; justify-content: center;
  background: rgba(255,255,255,0.08); color: var(--white); transition: background 0.2s;
}
.contact-social a:hover { background: var(--mint); color: var(--navy); }
.contact-social svg { width: 22px; height: 22px; }

/* ============ CTA band ============ */
.cta-band { background: linear-gradient(120deg, var(--navy) 0%, #1D2F63 60%, var(--indigo-dark) 100%); color: var(--white); text-align: center; padding: 80px 0; }
.cta-band h2 { color: var(--white); font-size: clamp(1.8rem, 4vw, 2.5rem); margin-bottom: 14px; }
.cta-band p { color: rgba(255,255,255,0.85); font-size: 1.1rem; max-width: 620px; margin: 0 auto 30px; }

/* ============ Footer ============ */
.site-footer { background: #081226; color: rgba(255,255,255,0.75); padding: 64px 0 28px; }
.footer-grid { display: grid; grid-template-columns: 2fr 1fr 1fr 1.2fr; gap: 40px; margin-bottom: 44px; }
@media (max-width: 900px) { .footer-grid { grid-template-columns: 1fr 1fr; } }
@media (max-width: 560px) { .footer-grid { grid-template-columns: 1fr; } }
.footer__brand img { width: 52px; height: 52px; border-radius: 12px; margin-bottom: 16px; }
.footer__brand p { font-size: 0.95rem; max-width: 320px; }
.footer__col h4 { color: var(--white); font-size: 1rem; margin-bottom: 16px; }
.footer__col ul { list-style: none; display: flex; flex-direction: column; gap: 10px; }
.footer__col a { color: rgba(255,255,255,0.75); text-decoration: none; font-size: 0.95rem; transition: color 0.2s; }
.footer__col a:hover { color: var(--mint); }
.footer__hours { font-size: 0.95rem; display: flex; flex-direction: column; gap: 12px; }
.footer__hours span { display: flex; align-items: center; gap: 10px; }
.footer__hours svg { width: 18px; height: 18px; color: var(--mint); }
.footer__social { display: flex; gap: 12px; margin-top: 18px; }
.footer__social a {
  width: 40px; height: 40px; border-radius: 10px; display: flex; align-items: center; justify-content: center;
  background: rgba(255,255,255,0.08); color: var(--white); transition: background 0.2s, color 0.2s;
}
.footer__social a:hover { background: var(--mint); color: var(--navy); }
.footer__bottom {
  border-top: 1px solid rgba(255,255,255,0.1); padding-top: 24px;
  display: flex; flex-wrap: wrap; gap: 12px 28px; align-items: center; justify-content: space-between; font-size: 0.85rem;
}
.footer__legal { display: flex; flex-wrap: wrap; gap: 18px; }
.footer__legal a { color: rgba(255,255,255,0.6); text-decoration: none; }
.footer__legal a:hover { color: var(--mint); }

/* ============ Chat widget ============ */
.chat-fab {
  position: fixed; bottom: 26px; right: 26px; z-index: 1000; width: 62px; height: 62px;
  border-radius: 50%; background: var(--indigo); border: none; cursor: pointer;
  display: flex; align-items: center; justify-content: center; color: var(--white);
  box-shadow: 0 8px 28px rgba(91,79,232,0.5); transition: transform 0.2s;
}
.chat-fab:hover { transform: scale(1.06); }
.chat-fab svg { width: 30px; height: 30px; }
.chat-fab__pulse { position: absolute; inset: 0; border-radius: 50%; background: var(--mint); animation: pulse 2.4s infinite; z-index: -1; }
@keyframes pulse { 0% { transform: scale(1); opacity: 0.7; } 100% { transform: scale(1.6); opacity: 0; } }
.chat-window {
  position: fixed; bottom: 100px; right: 26px; z-index: 1000; width: 360px; max-width: calc(100vw - 32px);
  max-height: 60vh; background: var(--white); border-radius: 18px; box-shadow: var(--shadow-md);
  border: 1px solid var(--line); display: none; flex-direction: column; overflow: hidden;
}
.chat-window.is-open { display: flex; }
.chat-window__head { background: var(--navy); color: var(--white); padding: 16px 18px; display: flex; align-items: center; gap: 12px; }
.chat-window__head svg { width: 26px; height: 26px; color: var(--mint); }
.chat-window__head strong { display: block; font-family: var(--font-head); font-size: 0.98rem; }
.chat-window__head span { font-size: 0.78rem; color: rgba(255,255,255,0.75); }
.chat-window__close { margin-left: auto; background: none; border: none; color: var(--white); font-size: 1.4rem; cursor: pointer; line-height: 1; }
.chat-window__body { flex: 1; overflow-y: auto; padding: 16px; display: flex; flex-direction: column; gap: 12px; min-height: 220px; }
.chat-msg { max-width: 85%; padding: 10px 14px; border-radius: 14px; font-size: 0.92rem; line-height: 1.5; animation: fadeUp 0.3s ease; }
@keyframes fadeUp { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: translateY(0); } }
.chat-msg--bot { background: var(--bone); border: 1px solid var(--line); border-bottom-left-radius: 4px; align-self: flex-start; }
.chat-msg--user { background: var(--indigo); color: var(--white); border-bottom-right-radius: 4px; align-self: flex-end; }
.chat-window__quick { display: flex; flex-wrap: wrap; gap: 8px; padding: 0 16px 12px; }
.chat-window__quick button {
  background: var(--bone); border: 1px solid var(--line); color: var(--indigo); padding: 8px 12px;
  border-radius: 999px; font-size: 0.82rem; cursor: pointer; font-family: var(--font-body);
}
.chat-window__quick button:hover { background: rgba(91,79,232,0.1); }
.chat-window__foot { border-top: 1px solid var(--line); padding: 12px 16px; display: flex; gap: 10px; }
.chat-window__foot input { flex: 1; border: 1.5px solid var(--line); border-radius: 999px; padding: 10px 16px; font-family: var(--font-body); font-size: 0.92rem; }
.chat-window__foot input:focus { outline: none; border-color: var(--indigo); }
.chat-window__foot button { width: 42px; height: 42px; border-radius: 50%; border: none; background: var(--mint); color: var(--navy); cursor: pointer; display: flex; align-items: center; justify-content: center; }
.chat-window__foot button svg { width: 20px; height: 20px; }

/* ============ Scroll reveal ============ */
.reveal { opacity: 0; transform: translateY(22px); transition: opacity 0.7s ease, transform 0.7s ease; }
.reveal.is-visible { opacity: 1; transform: translateY(0); }
@media (prefers-reduced-motion: reduce) {
  .reveal { opacity: 1; transform: none; transition: none; }
  .chat-fab__pulse { animation: none; }
  html { scroll-behavior: auto; }
}
`;
}
