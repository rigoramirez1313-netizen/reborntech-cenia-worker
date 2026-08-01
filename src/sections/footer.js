/**
 * sections/footer.js — Pie de página (5.9)
 * Logo, frase resumen, enlaces rápidos, redes sociales, horarios y aviso legal.
 */

import { ICONS, CONFIG } from '../shared/styles.js';

export default function footer() {
  return `
<footer class="site-footer" role="contentinfo">
  <div class="container">
    <div class="footer-grid">
      <div class="footer__brand">
        <img src="${CONFIG.logoUrl}" alt="Logo del Centro Nacional de Inteligencia Artificial — Reborntech" />
        <p>Centro Nacional de Inteligencia Artificial — Reborntech. Hacemos la IA entendible y útil para cualquier persona o negocio, con acompañamiento real.</p>
        <div class="footer__social">
          <a href="${CONFIG.social.instagram}" target="_blank" rel="noopener" aria-label="Instagram">${ICONS.instagram}</a>
          <a href="${CONFIG.social.linkedin}" target="_blank" rel="noopener" aria-label="LinkedIn">${ICONS.linkedin}</a>
          <a href="${CONFIG.social.tiktok}" target="_blank" rel="noopener" aria-label="TikTok">${ICONS.tiktok}</a>
        </div>
      </div>
      <nav class="footer__col" aria-label="Enlaces rápidos">
        <h4>Explora</h4>
        <ul>
          <li><a href="#inicio">Inicio</a></li>
          <li><a href="#quienes-somos">Quiénes somos</a></li>
          <li><a href="#servicios">Servicios</a></li>
          <li><a href="#sectores">Sectores</a></li>
          <li><a href="#como-trabajamos">Cómo trabajamos</a></li>
        </ul>
      </nav>
      <nav class="footer__col" aria-label="Más información">
        <h4>Más información</h4>
        <ul>
          <li><a href="#soluciones-locales">Soluciones sin internet</a></li>
          <li><a href="#faq">Preguntas frecuentes</a></li>
          <li><a href="#contacto">Agenda tu asesoría</a></li>
        </ul>
      </nav>
      <div class="footer__col">
        <h4>Horarios de atención</h4>
        <div class="footer__hours">
          <span>${ICONS.users} <span>Equipo humano: ${CONFIG.hoursHuman}</span></span>
          <span>${ICONS.clock} <span>Asistencia por IA: ${CONFIG.hoursAi}</span></span>
          <span>${ICONS.globe} <span>Cobertura en ${CONFIG.country} y el mundo</span></span>
        </div>
      </div>
    </div>
    <div class="footer__bottom">
      <span>© ${new Date().getFullYear()} Centro Nacional de Inteligencia Artificial — Reborntech. Todos los derechos reservados.</span>
      <div class="footer__legal">
        <a href="#inicio">Aviso legal</a>
        <a href="#inicio">Política de privacidad</a>
        <a href="#contacto">Contacto</a>
      </div>
    </div>
  </div>
</footer>`;
}
