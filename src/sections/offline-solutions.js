/**
 * sections/offline-solutions.js — Sección Soluciones sin internet / privacidad (5.6)
 * Explica en términos simples la IA local: sin conexión ni suscripción,
 * con ejemplos concretos de uso "dentro de casa".
 */

import { button, ICONS } from '../shared/styles.js';

const benefits = [
  { icon: ICONS.server, title: 'Funciona sin internet', desc: 'La IA corre dentro de tu propio equipo o servidor. No depende de la nube ni de la señal.' },
  { icon: ICONS.shield, title: 'Privacidad total', desc: 'Tus datos nunca salen de tu empresa. Ideal para información sensible o confidencial.' },
  { icon: ICONS.subscriptions, title: 'Sin suscripción mensual', desc: 'Paga una sola vez por la implementación y úsala sin costos recurrentes.' },
  { icon: ICONS.automation, title: 'Bajo consumo de recursos', desc: 'Diseñada para funcionar con equipos modestos, sin necesidad de hardware caro.' },
];

const useCases = [
  { icon: ICONS.mic, title: 'Transcribir audios', desc: 'Convierte notas de voz, reuniones y entrevistas en texto automáticamente, todo dentro de tu red.' },
  { icon: ICONS.vision, title: 'Reconocer objetos e imágenes', desc: 'Visión por computador que identifica y clasifica lo que ve una cámara: inventarios, seguridad, control de calidad.' },
  { icon: ICONS.automation, title: 'Automatizar tareas', desc: 'Procesos repetitivos de tu negocio se ejecutan solos, sin depender de conexión a internet.' },
];

export default function offlineSolutions() {
  return `
<section id="soluciones-locales" class="section section--dark" aria-label="Soluciones sin internet y privacidad">
  <div class="container">
    <div class="section__head reveal">
      <span class="section__eyebrow" style="color:var(--mint);">${ICONS.wifiOff} Soluciones sin internet · Privacidad</span>
      <h2 class="section__title">IA que trabaja "dentro de casa"</h2>
      <p class="section__sub" style="color:rgba(255,255,255,0.8);">Existen soluciones de inteligencia artificial que <strong style="color:var(--white);">funcionan sin conexión a internet y sin pagar suscripción</strong>. Son ideales para negocios que manejan información sensible o que están en zonas con poca conectividad.</p>
    </div>

    <div class="grid-2" style="gap:40px; align-items:start;">
      <div style="display:grid; gap:18px;">
        ${useCases.map((u) => `
          <div class="card" style="flex-direction:row; align-items:flex-start; gap:18px;">
            <div class="card__icon" style="background:rgba(61,220,151,0.14); color:var(--mint); margin-bottom:0;">${u.icon}</div>
            <div>
              <h3 style="font-size:1.08rem; margin-bottom:4px;">${u.title}</h3>
              <p style="font-size:0.95rem;">${u.desc}</p>
            </div>
          </div>`).join('')}
      </div>
      <div style="display:grid; gap:14px;">
        ${benefits.map((b) => `
          <div class="avail__badge" style="width:100%; justify-content:flex-start;">
            ${b.icon}
            <div>
              <strong>${b.title}</strong>
              <span>${b.desc}</span>
            </div>
          </div>`).join('')}
        <div style="margin-top:10px;">
          ${button('#contacto', 'Quiero una solución privada', 'mint', 'md')}
        </div>
      </div>
    </div>
  </div>
</section>`;
}
