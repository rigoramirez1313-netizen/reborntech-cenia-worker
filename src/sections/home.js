/**
 * sections/home.js — Sección Inicio (5.1)
 * Hero con propuesta de valor, pilares, confianza, vista rápida de servicios
 * y sectores, "¿Por qué elegirnos?" y llamado a la acción final.
 */

import { button, ICONS } from '../shared/styles.js';

const trustItems = [
  { icon: ICONS.users, title: 'Atención personalizada', desc: 'Hablas con personas reales, no con una máquina' },
  { icon: ICONS.wifiOff, title: 'Soluciones sin internet', desc: 'IA local para privacidad y baja conectividad' },
  { icon: ICONS.globe, title: 'Cobertura internacional', desc: 'Atendemos en Colombia y todo el mundo' },
  { icon: ICONS.clock, title: 'IA disponible 24/7', desc: 'Asistencia por IA todo el tiempo' },
];

const quickServices = [
  { icon: ICONS.advisory, title: 'Asesoría', desc: 'Diagnóstico y recomendación de soluciones de IA.' },
  { icon: ICONS.training, title: 'Capacitación', desc: 'Aprendes a usar IA desde cero, sin tecnicismos.' },
  { icon: ICONS.automation, title: 'Implementación', desc: 'Ponemos la IA a trabajar en tu negocio.' },
];

const quickSectors = [
  { icon: ICONS.health, name: 'Salud' },
  { icon: ICONS.events, name: 'Eventos' },
  { icon: ICONS.sports, name: 'Deportes' },
  { icon: ICONS.bank, name: 'Banca' },
  { icon: ICONS.architecture, name: 'Arquitectura' },
  { icon: ICONS.restaurant, name: 'Restaurantes' },
  { icon: ICONS.other, name: 'Tu sector' },
];

const reasons = [
  { icon: ICONS.chat, title: 'Lenguaje simple', desc: 'Nada de tecnicismos. Explicamos cada concepto como se explica algo entre amigos, para que tomes decisiones con claridad.' },
  { icon: ICONS.target, title: 'Soluciones a tu medida', desc: 'No vendemos paquetes genéricos: primero entendemos tu necesidad y luego diseñamos la solución exacta para ti.' },
  { icon: ICONS.users, title: 'Acompañamiento real', desc: 'Estamos contigo antes, durante y después de la implementación. No te dejamos solo frente a la tecnología.' },
  { icon: ICONS.shield, title: 'Privacidad y flexibilidad', desc: 'Trabajamos en la nube o con IA local, según lo que necesites. Tus datos siempre bajo control.' },
];

function servicesGrid() {
  return quickServices.map((s) => `
    <div class="card reveal">
      <div class="card__icon">${s.icon}</div>
      <h3>${s.title}</h3>
      <p>${s.desc}</p>
      ${button('#servicios', 'Ver servicio', 'link', 'sm')}
    </div>`).join('');
}

function sectorsGrid() {
  return quickSectors.map((s) => `
    <div class="sector-chip reveal">
      <div class="sector-chip__icon">${s.icon}</div>
      <div><strong>${s.name}</strong><span>Casos aplicados</span></div>
    </div>`).join('');
}

export default function home() {
  return `
<section id="inicio" class="hero">
  <div class="hero__blob hero__blob--1"></div>
  <div class="hero__blob hero__blob--2"></div>
  <div class="container">
    <span class="hero__eyebrow reveal">${ICONS.sparkle} Centro Nacional de Inteligencia Artificial · Reborntech</span>
    <h1 class="hero__title reveal">La inteligencia artificial al alcance de <span class="grad">cualquier persona o negocio</span>, sin saber de tecnología</h1>
    <p class="hero__sub reveal">Te acompañamos a entender, adoptar y aprovechar la IA <strong>con explicaciones claras y acompañamiento real</strong>. No necesitas saber de tecnología para beneficiarte de ella: nosotros te lo explicamos y lo hacemos posible.</p>
    <div class="hero__pillars reveal">
      <span class="hero__pillar">${ICONS.advisory} Asesoría</span>
      <span class="hero__pillar">${ICONS.training} Capacitación</span>
      <span class="hero__pillar">${ICONS.automation} Implementación</span>
    </div>
    <div class="hero__actions reveal">
      ${button('#contacto', 'Agenda una asesoría gratuita', 'mint', 'lg')}
      ${button('#servicios', 'Quiero saber más', 'light', 'lg')}
    </div>
    <div class="hero__trust reveal">
      ${trustItems.map((t) => `
        <div class="trust-item">
          <div class="trust-item__icon">${t.icon}</div>
          <strong>${t.title}</strong>
          <span>${t.desc}</span>
        </div>`).join('')}
    </div>
  </div>
</section>

<section id="servicios-preview" class="section" aria-label="Vista rápida de servicios">
  <div class="container">
    <div class="section__head reveal">
      <span class="section__eyebrow">${ICONS.advisory} Nuestro acompañamiento</span>
      <h2 class="section__title">Asesoría · Capacitación · Implementación</h2>
      <p class="section__sub">Del diagnóstico inicial a la puesta en marcha, te acompañamos en cada etapa del camino.</p>
    </div>
    <div class="grid-3">
      ${servicesGrid()}
    </div>
  </div>
</section>

<section id="sectores-preview" class="section section--alt" aria-label="Vista rápida de sectores">
  <div class="container">
    <div class="section__head reveal">
      <span class="section__eyebrow">${ICONS.other} Para todos los rubros</span>
      <h2 class="section__title">Sectores que atendemos</h2>
      <p class="section__sub">La IA se aplica a la vida real de cada sector. Descubre cómo puede ayudar al tuyo.</p>
    </div>
    <div class="grid-4">
      ${sectorsGrid()}
    </div>
    <div style="text-align:center; margin-top:36px;" class="reveal">
      ${button('#sectores', 'Ver casos por sector', 'indigo')}
    </div>
  </div>
</section>

<section id="por-que-elegirnos" class="section section--tint" aria-label="Por qué elegirnos">
  <div class="container">
    <div class="section__head reveal">
      <span class="section__eyebrow">${ICONS.shield} Nuestro compromiso</span>
      <h2 class="section__title">¿Por qué elegirnos?</h2>
      <p class="section__sub">Somos un centro 100% virtual que convierte la tecnología en algo simple, cercano y útil para tu día a día.</p>
    </div>
    <div class="grid-4">
      ${reasons.map((r) => `
        <div class="card reveal">
          <div class="card__icon">${r.icon}</div>
          <h3>${r.title}</h3>
          <p>${r.desc}</p>
        </div>`).join('')}
    </div>
  </div>
</section>

<section class="cta-band" aria-label="Llamado a la acción">
  <div class="container reveal">
    <h2>¿Listo para dar el primer paso?</h2>
    <p>Cuéntanos qué necesitas y te asesoramos sin costo. La primera conversación es gratis, sin compromiso y en lenguaje simple.</p>
    ${button('#contacto', 'Agenda tu asesoría gratuita', 'mint', 'lg')}
  </div>
</section>`;
}
