/**
 * sections/services.js — Sección Servicios (5.3)
 * Los 7 servicios con ícono, nombre, descripción simple y botón
 * "Quiero saber más" que lleva a la sección de contacto.
 */

import { button, ICONS } from '../shared/styles.js';

const servicesList = [
  { icon: ICONS.advisory, title: 'Asesoría y consultoría en IA', desc: 'Diagnóstico de las necesidades de tu negocio y recomendación de las mejores soluciones de IA. Empezamos escuchando, no vendiendo.' },
  { icon: ICONS.training, title: 'Capacitación y alfabetización en IA', desc: 'Cursos prácticos para quienes parten de cero: aprendes a usar la IA en tu día a día, sin miedo y sin tecnicismos.' },
  { icon: ICONS.sectorTraining, title: 'Capacitación especializada por sector', desc: 'Formación enfocada en tu rubro: salud, eventos, deportes, banca, arquitectura, restaurantes y más. Ver casos en la sección de sectores.' },
  { icon: ICONS.techAdvisory, title: 'Asesoría tecnológica', desc: 'Te ayudamos a elegir y comprar los equipos, servidores, licencias y suscripciones adecuados. Nada de pagar de más por lo que no necesitas.' },
  { icon: ICONS.subscriptions, title: 'Suscripciones y equipos', desc: 'Te proveemos directamente las suscripciones de IA y el hardware necesario para que empieces a trabajar sin complicaciones.' },
  { icon: ICONS.local, title: 'Soluciones locales y privadas', desc: 'Implementación de IA que funciona sin internet ni suscripción, ideal si priorizas la privacidad o tienes conectividad limitada.' },
  { icon: ICONS.automation, title: 'Automatización de procesos', desc: 'Conectamos la IA con las herramientas que tu negocio ya usa para ahorrar tiempo en tareas repetitivas.' },
];

export default function services() {
  return `
<section id="servicios" class="section section--tint" aria-label="Servicios">
  <div class="container">
    <div class="section__head reveal">
      <span class="section__eyebrow">${ICONS.advisory} Servicios</span>
      <h2 class="section__title">Soluciones para cada nivel y cada necesidad</h2>
      <p class="section__sub">Desde quien parte de cero hasta quien ya usa IA y quiere ir más allá. <strong>No necesitas saber de tecnología</strong>: nosotros nos encargamos de eso.</p>
    </div>
    <div class="grid-3">
      ${servicesList.map((s) => `
        <div class="card reveal">
          <div class="card__icon">${s.icon}</div>
          <h3>${s.title}</h3>
          <p>${s.desc}</p>
          ${button('#contacto', 'Quiero saber más', 'indigo', 'sm')}
        </div>`).join('')}
    </div>
  </div>
</section>`;
}
