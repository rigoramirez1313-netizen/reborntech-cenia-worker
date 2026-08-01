/**
 * sections/how-we-work.js — Sección Cómo trabajamos (5.5)
 * Timeline de 4 pasos que resume el proceso de acompañamiento.
 */

import { ICONS } from '../shared/styles.js';

const steps = [
  { icon: ICONS.chat, title: 'Conversamos', desc: 'Hablamos sobre tu necesidad y contexto. Nos cuentas tu realidad, nosotros escuchamos y hacemos preguntas claras.' },
  { icon: ICONS.target, title: 'Te proponemos', desc: 'Diseñamos una solución a tu medida, con costos claros y sin tecnicismos. Tú decides con calma.' },
  { icon: ICONS.automation, title: 'Implementamos y capacitamos', desc: 'Ponemos la solución en marcha y capacitamos a tu equipo para que la usen con confianza desde el primer día.' },
  { icon: ICONS.users, title: 'Te acompañamos', desc: 'Seguimos contigo después de la entrega: ajustes, dudas y mejoras continuas. No desaparecemos.' },
];

export default function howWeWork() {
  return `
<section id="como-trabajamos" class="section" aria-label="Cómo trabajamos">
  <div class="container">
    <div class="section__head reveal">
      <span class="section__eyebrow">${ICONS.target} Cómo trabajamos</span>
      <h2 class="section__title">Un proceso simple, de la mano contigo</h2>
      <p class="section__sub">Sin letra pequeña ni complicaciones. Así de claro es nuestro método de trabajo.</p>
    </div>
    <div class="timeline">
      ${steps.map((s, i) => `
        <div class="timeline__step reveal">
          <div class="timeline__num">${i + 1}</div>
          <h3>${s.title}</h3>
          <p>${s.desc}</p>
        </div>`).join('')}
    </div>
  </div>
</section>`;
}
