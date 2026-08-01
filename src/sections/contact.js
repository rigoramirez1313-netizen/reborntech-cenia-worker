/**
 * sections/contact.js — Sección Contacto / Agenda tu asesoría (5.8)
 * Formulario simple (nombre, empresa, sector, qué necesita) que al enviar
 * arma un mensaje de WhatsApp y ofrece enlace por correo. Incluye horarios,
 * datos de contacto (placeholder), redes y aclaración de alcance internacional.
 */

import { ICONS, CONFIG } from '../shared/styles.js';

const sectorOptions = [
  'Salud',
  'Eventos',
  'Deportes',
  'Banca y finanzas',
  'Arquitectura y construcción',
  'Restaurantes y hoteles',
  'Comercio y retail',
  'Educación',
  'Otro sector',
];

export default function contact() {
  return `
<section id="contacto" class="section section--tint" aria-label="Contacto y agendamiento de asesoría">
  <div class="container">
    <div class="section__head reveal">
      <span class="section__eyebrow">${ICONS.send} Contacto</span>
      <h2 class="section__title">Agenda tu asesoría gratuita</h2>
      <p class="section__sub">Cuéntanos qué necesitas y te responderemos con una propuesta clara. <strong>Sin compromiso y en lenguaje simple.</strong></p>
    </div>

    <div class="contact-grid">
      <div class="form reveal">
        <form id="contact-form" novalidate>
          <div class="form__row">
            <div class="form__field">
              <label for="nombre">Nombre *</label>
              <input type="text" id="nombre" name="nombre" required placeholder="Tu nombre" autocomplete="name" />
            </div>
            <div class="form__field">
              <label for="empresa">Empresa</label>
              <input type="text" id="empresa" name="empresa" placeholder="Nombre de tu empresa" autocomplete="organization" />
            </div>
          </div>
          <div class="form__field">
            <label for="sector">Sector</label>
            <select id="sector" name="sector">
              <option value="">Selecciona tu sector</option>
              ${sectorOptions.map((s) => `<option value="${s}">${s}</option>`).join('')}
            </select>
          </div>
          <div class="form__field">
            <label for="necesidad">¿Qué necesitas? *</label>
            <textarea id="necesidad" name="necesidad" required placeholder="Cuéntanos brevemente tu necesidad o idea…"></textarea>
          </div>
          <button type="submit" class="btn btn--mint btn--lg" style="width:100%;">${ICONS.whatsapp} Agendar mi asesoría gratuita</button>
          <p class="form__note">Al enviar se abrirá WhatsApp con tu mensaje listo para enviar. También te ofrecemos la opción de escribirnos por correo.</p>
          <div class="form__success" id="form-success" role="status"></div>
        </form>
      </div>

      <div class="contact-info reveal">
        <h3>Información de contacto</h3>
        <div class="contact-info__list">
          <div class="contact-info__item">
            ${ICONS.mail}
            <div><strong>Correo</strong><a href="mailto:${CONFIG.email}">${CONFIG.email}</a></div>
          </div>
          <div class="contact-info__item">
            ${ICONS.whatsapp}
            <div><strong>WhatsApp</strong><a href="${CONFIG.whatsappLink}" target="_blank" rel="noopener">Escríbenos por WhatsApp</a></div>
          </div>
          <div class="contact-info__item">
            ${ICONS.globe}
            <div><strong>Cobertura</strong><span>Atendemos en toda Colombia y en el exterior.</span></div>
          </div>
          <div class="contact-info__item">
            ${ICONS.clock}
            <div><strong>Horarios</strong><span>Equipo humano: ${CONFIG.hoursHuman}. Asistencia por IA: 24/7.</span></div>
          </div>
          <div class="contact-info__item">
            ${ICONS.phone}
            <div><strong>Llamada directa</strong><span>Agenda una llamada y conversamos sobre tu caso.</span></div>
          </div>
        </div>
        <h3>Síguenos</h3>
        <div class="contact-social">
          <a href="${CONFIG.social.instagram}" target="_blank" rel="noopener" aria-label="Instagram de Reborntech">${ICONS.instagram}</a>
          <a href="${CONFIG.social.linkedin}" target="_blank" rel="noopener" aria-label="LinkedIn de Reborntech">${ICONS.linkedin}</a>
          <a href="${CONFIG.social.tiktok}" target="_blank" rel="noopener" aria-label="TikTok de Reborntech">${ICONS.tiktok}</a>
        </div>
      </div>
    </div>
  </div>
</section>`;
}
