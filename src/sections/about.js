/**
 * sections/about.js — Sección Quiénes somos (5.2)
 * Historia, propósito, centro 100% virtual, filosofía de trabajo y
 * actualización constante de herramientas.
 */

import { ICONS } from '../shared/styles.js';

const values = [
  { icon: ICONS.chat, title: 'Lenguaje simple', desc: 'Explicamos la IA como se explica algo entre amigos: sin tecnicismos, con ejemplos de la vida real.' },
  { icon: ICONS.target, title: 'Soluciones a la medida', desc: 'Cada negocio es distinto. Diseñamos la solución que encaja con tu realidad y tu presupuesto.' },
  { icon: ICONS.users, title: 'Acompañamiento constante', desc: 'No desaparecemos tras la entrega. Estamos contigo resolviendo dudas y mejorando juntos.' },
];

export default function about() {
  return `
<section id="quienes-somos" class="section section--alt" aria-label="Quiénes somos">
  <div class="container">
    <div class="section__head reveal">
      <span class="section__eyebrow">${ICONS.users} Quiénes somos</span>
      <h2 class="section__title">Tecnología de punta, explicada como se explica algo entre amigos</h2>
    </div>

    <div class="grid-2" style="align-items:center;">
      <div class="reveal">
        <h3 style="font-size:1.4rem; margin-bottom:16px;">Nuestra historia y propósito</h3>
        <p style="margin-bottom:16px; color:var(--ink-soft);">El <strong>Centro Nacional de Inteligencia Artificial — Reborntech</strong> nació con una idea sencilla: que la inteligencia artificial no sea privilegio de los expertos. Creemos que <strong>cualquier persona o negocio puede beneficiarse de la IA</strong> si alguien se la explica bien y la implementa a su medida.</p>
        <p style="color:var(--ink-soft);">Somos una empresa <strong>100% virtual con base en Colombia y alcance internacional</strong>. Eso significa que atendemos a personas y empresas en todo el país y también fuera de él, coordinando horarios según tu zona horaria.</p>
      </div>
      <div class="reveal" style="display:grid; gap:18px;">
        ${values.map((v) => `
          <div class="card" style="flex-direction:row; align-items:flex-start; gap:18px;">
            <div class="card__icon" style="margin-bottom:0;">${v.icon}</div>
            <div>
              <h3 style="font-size:1.08rem; margin-bottom:4px;">${v.title}</h3>
              <p style="font-size:0.95rem;">${v.desc}</p>
            </div>
          </div>`).join('')}
      </div>
    </div>

    <div class="section__head" style="margin-top:72px;">
      <div class="reveal">
        <span class="section__eyebrow">${ICONS.sparkle} Siempre al día</span>
        <h2 class="section__title">Siempre actualizados</h2>
        <p class="section__sub">Probamos de forma constante nuevas herramientas y modelos de IA — desde los más conocidos (Claude, ChatGPT, Copilot) hasta opciones menos populares pero muy capaces (DeepSeek, Kimi, GLM, Qwen) — para recomendarte solo lo que realmente funciona para tu caso.</p>
      </div>
    </div>
  </div>
</section>`;
}
