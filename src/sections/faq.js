/**
 * sections/faq.js — Sección Preguntas frecuentes (5.7)
 * Acordeón con preguntas concretas y respuestas claras.
 */

import { ICONS } from '../shared/styles.js';
import { CONFIG } from '../shared/styles.js';

const faqs = [
  { q: '¿Necesito saber de tecnología para trabajar con ustedes?', a: 'No. Nuestra especialidad es justamente explicar la IA de forma simple. Empezamos desde donde estés: tú pones la necesidad, nosotros ponemos la claridad y el acompañamiento.' },
  { q: '¿Atienden fuera de Colombia?', a: 'Sí. Somos un centro 100% virtual con alcance internacional. Atendemos a empresas y personas en todo el mundo, coordinando los horarios según tu zona horaria.' },
  { q: '¿Qué pasa si no tengo buena conexión a internet?', a: 'No hay problema. Ofrecemos soluciones de IA local que funcionan sin internet y sin suscripción, ideales para zonas con poca conectividad o negocios que prefieren privacidad total.' },
  { q: '¿Cuánto cuesta empezar?', a: 'La primera asesoría es gratuita y sin compromiso. A partir de ahí, cada plan se cotiza a la medida de tu necesidad, con costos claros y sin sorpresas.' },
  { q: '¿Qué modelos de IA utilizan?', a: 'Trabajamos con los más conocidos (Claude, ChatGPT, Copilot) y también con opciones menos populares pero muy capaces (DeepSeek, Kimi, GLM, Qwen y otros). Elegimos el modelo ideal según tu caso y presupuesto.' },
  { q: '¿Mis datos están seguros?', a: 'Depende de lo que necesites. Si priorizas la privacidad, implementamos IA local donde tus datos nunca salen de tu empresa. Si prefieres la nube, configuramos todo con las mejores prácticas de seguridad.' },
  { q: '¿En cuánto tiempo veo resultados?', a: 'Depende del proyecto: algunas soluciones empiezan a dar resultados en días, otras requieren más tiempo. En la asesoría inicial definimos un plan realista con fechas claras.' },
  { q: '¿Pueden capacitar a mi equipo en mi propio negocio?', a: 'Sí. Hacemos capacitaciones para grupos y equipos, presenciales o virtuales, adaptadas al nivel de cada persona. Partimos de cero si hace falta.' },
  { q: '¿Qué horario tienen?', a: `Nuestro equipo humano atiende de ${CONFIG.hoursHuman}. Además, la asistencia por IA está disponible las 24 horas, los 7 días de la semana, para resolver tus dudas básicas en cualquier momento.` },
];

export default function faq() {
  return `
<section id="faq" class="section section--alt" aria-label="Preguntas frecuentes">
  <div class="container">
    <div class="section__head reveal">
      <span class="section__eyebrow">${ICONS.chat} Preguntas frecuentes</span>
      <h2 class="section__title">Resolvemos tus dudas</h2>
      <p class="section__sub">Lo que más nos preguntan, respondido claro y directo. ¿Tienes otra duda? Nuestro asistente virtual te atiende 24/7.</p>
    </div>
    <div class="faq-list">
      ${faqs.map((f) => `
        <details class="faq-item reveal">
          <summary>${f.q}</summary>
          <div class="faq-item__body"><p>${f.a}</p></div>
        </details>`).join('')}
    </div>
  </div>
</section>`;
}
