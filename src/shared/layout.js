/**
 * shared/layout.js
 * Estructura base compartida del sitio: <head>, header con navegación,
 * widget de chat, script de comportamientos y ensamblado de la página final.
 */

import { css, ICONS, CONFIG } from './styles.js';

/** <head> con metadatos, título, Google Fonts y estilos compartidos */
export function head(title, description) {
  return `<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>${title}</title>
<meta name="description" content="${description}" />
<meta name="theme-color" content="#0B1E3D" />
<meta property="og:title" content="${title}" />
<meta property="og:description" content="${description}" />
<meta property="og:type" content="website" />
<meta property="og:image" content="${CONFIG.logoUrl}" />
<link rel="icon" type="image/png" href="${CONFIG.logoUrl}" />
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
<style>${css()}</style>
<script src="https://cdn.jsdelivr.net/npm/gsap@3.15/dist/gsap.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/gsap@3.15/dist/ScrollTrigger.min.js"></script>
</head>
`;
}

/** Header compartido: logo, navegación con anclas y CTA */
export function header() {
  return `<body>
<a class="sr-only" href="#inicio">Saltar al contenido</a>
<header class="site-header">
  <div class="container nav">
    <a href="#inicio" class="nav__brand" aria-label="${CONFIG.siteName} — Inicio">
      <img src="${CONFIG.logoUrl}" alt="Logo del Centro Nacional de Inteligencia Artificial — Reborntech" />
      <span>Reborntech</span>
    </a>
    <nav class="nav__links" id="nav-links" aria-label="Navegación principal">
      <a href="#inicio">Inicio</a>
      <a href="#quienes-somos">Quiénes somos</a>
      <a href="#servicios">Servicios</a>
      <a href="#sectores">Sectores</a>
      <a href="#como-trabajamos">Cómo trabajamos</a>
      <a href="#soluciones-locales">Sin internet</a>
      <a href="#faq">Preguntas</a>
      <a href="#contacto" class="btn btn--mint btn--sm nav__cta">Agenda tu asesoría</a>
    </nav>
    <button class="nav__toggle" id="nav-toggle" aria-label="Abrir menú" aria-expanded="false" aria-controls="nav-links">
      <span></span><span></span><span></span>
    </button>
  </div>
</header>`;
}

/** Widget de asistente conversacional conectado al proxy del Worker */
export function chatWidget() {
  return `
<!-- Widget de chat conectado al asistente de IA mediante el proxy same-origin. -->
<button class="chat-fab" id="chat-fab" aria-label="Abrir asistente virtual Reborntech">
  <span class="chat-fab__pulse"></span>
  ${ICONS.robot}
</button>
<div class="chat-window" id="chat-window" role="dialog" aria-label="Asistente virtual Reborntech" aria-hidden="true">
  <div class="chat-window__head">
    ${ICONS.sparkle}
    <div>
      <strong>Asistente Reborntech</strong>
      <span>Asistencia por IA · disponible 24/7</span>
      <span id="chat-status" class="chat-window__status" aria-live="polite" hidden>Escribiendo…</span>
    </div>
    <button class="chat-window__close" id="chat-close" aria-label="Cerrar asistente">×</button>
  </div>
  <div class="chat-window__body" id="chat-body"></div>
  <div class="chat-window__quick">
    <button data-quick="¿Necesito saber de tecnología?">¿Necesito saber de tecnología?</button>
    <button data-quick="¿Atienden fuera de Colombia?">¿Atienden fuera de Colombia?</button>
    <button data-quick="¿Cuánto cuesta empezar?">¿Cuánto cuesta empezar?</button>
  </div>
  <form class="chat-window__foot" id="chat-form">
    <input type="text" id="chat-input" placeholder="Escribe tu pregunta…" aria-label="Escribe tu pregunta" autocomplete="off" />
    <button type="submit" aria-label="Enviar mensaje">${ICONS.send}</button>
  </form>
</div>`;
}

/**
 * Script de comportamientos del cliente (JavaScript vanilla).
 * Menú móvil, reveal al hacer scroll, filtro de sectores y asistente de chat.
 */
export function behaviors() {
  return `<script>
(function () {
  // ---------- Menú móvil ----------
  const toggle = document.getElementById('nav-toggle');
  const links = document.getElementById('nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      const open = links.classList.toggle('nav__links--open');
      toggle.setAttribute('aria-expanded', String(open));
    });
    links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      links.classList.remove('nav__links--open');
      toggle.setAttribute('aria-expanded', 'false');
    }));
  }

  // ---------- Cierre suave de secciones al hacer scroll (poca altura) ----------
  // Nota: los acordeones <details> de la FAQ se cierran uno a la vez.
  document.querySelectorAll('.faq-item summary').forEach(sum => {
    sum.addEventListener('click', () => {
      const item = sum.parentElement;
      const wasOpen = item.open;
      document.querySelectorAll('.faq-item[open]').forEach(i => { if (i !== item) i.open = false; });
      item.open = !wasOpen;
    });
  });

  // ---------- Animaciones progresivas ----------
  const revealEls = document.querySelectorAll('.reveal');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const gsapReady = !reducedMotion && Boolean(window.gsap && window.ScrollTrigger);

  function showReveals() {
    revealEls.forEach(el => el.classList.add('is-visible'));
  }

  function fallbackReveal() {
    if (!('IntersectionObserver' in window)) {
      showReveals();
      return;
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach(el => io.observe(el));
  }

  function splitTitleChars(title) {
    // Mantener el titular intacto evita alterar sus espacios y su wrapping.
    return [];
  }

  if (gsapReady) {
    window.gsap.registerPlugin(window.ScrollTrigger);
    const gsap = window.gsap;
    const hero = document.querySelector('.hero');
    const heroTitle = hero && hero.querySelector('.hero__title');
    const titleChars = splitTitleChars(heroTitle) || [];
    const heroParts = hero ? {
      eyebrow: hero.querySelector('.hero__eyebrow'),
      title: heroTitle,
      sub: hero.querySelector('.hero__sub'),
      pillars: hero.querySelector('.hero__pillars'),
      actions: hero.querySelector('.hero__actions'),
      trust: hero.querySelector('.hero__trust'),
    } : {};

    if (hero) {
      gsap.set([heroParts.eyebrow, heroParts.sub, heroParts.pillars, heroParts.actions, heroParts.trust], { autoAlpha: 1, y: 0 });
      gsap.set([heroParts.eyebrow, heroParts.sub], { autoAlpha: 0, y: 18 });
      gsap.set(heroParts.title, { autoAlpha: 0, y: 26 });
      const pillarItems = heroParts.pillars ? heroParts.pillars.querySelectorAll('.hero__pillar') : [];
      const actionItems = heroParts.actions ? heroParts.actions.querySelectorAll('.btn') : [];
      const trustItems = heroParts.trust ? heroParts.trust.querySelectorAll('.trust-item') : [];
      gsap.set([pillarItems, actionItems, trustItems], { autoAlpha: 0, y: 12 });
      const heroTl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      heroTl.to(heroParts.eyebrow, { autoAlpha: 1, y: 0, duration: 0.55 });
      heroTl
        .to(heroParts.title, { autoAlpha: 1, y: 0, duration: 0.8, ease: 'power4.out' }, '-=0.2')
        .to(heroParts.sub, { autoAlpha: 1, y: 0, duration: 0.55 }, '-=0.35')
        .to(pillarItems, { autoAlpha: 1, y: 0, duration: 0.45, stagger: 0.08 }, '-=0.3')
        .to(actionItems, { autoAlpha: 1, y: 0, duration: 0.45, stagger: 0.08 }, '-=0.25')
        .to(trustItems, { autoAlpha: 1, y: 0, duration: 0.5, stagger: 0.08 }, '-=0.2');
      gsap.to(hero.querySelectorAll('.hero__blob'), {
        y: (index) => index ? -22 : 28,
        ease: 'none',
        scrollTrigger: { trigger: hero, start: 'top top', end: 'bottom top', scrub: 1.4 },
      });
    }

    const grouped = new Set();
    document.querySelectorAll('.grid-3, .grid-4, .grid-2, .timeline, .faq-list').forEach(group => {
      const items = group.querySelectorAll(':scope > .reveal');
      if (!items.length) return;
      items.forEach(item => grouped.add(item));
      gsap.fromTo(items, { autoAlpha: 0, y: 24 }, {
        autoAlpha: 1, y: 0, duration: 0.65, stagger: 0.08, ease: 'power2.out',
        scrollTrigger: { trigger: group, start: 'top 84%', toggleActions: 'play none none reverse' },
      });
    });
    revealEls.forEach(el => {
      if (grouped.has(el) || (hero && hero.contains(el))) return;
      gsap.fromTo(el, { autoAlpha: 0, y: 18 }, {
        autoAlpha: 1, y: 0, duration: 0.65, ease: 'power2.out',
        scrollTrigger: { trigger: el, start: 'top 88%', toggleActions: 'play none none reverse' },
      });
    });
    gsap.utils.toArray('.section__eyebrow').forEach(eyebrow => {
      gsap.fromTo(eyebrow, { y: 8 }, {
        y: -8, ease: 'none', scrollTrigger: { trigger: eyebrow, start: 'top bottom', end: 'bottom top', scrub: 1.5 },
      });
    });
    gsap.utils.toArray('.card').forEach(card => {
      gsap.to(card, { y: -5, ease: 'none', scrollTrigger: { trigger: card, start: 'top bottom', end: 'bottom top', scrub: 2 } });
    });
  } else if (reducedMotion) {
    showReveals();
  } else {
    fallbackReveal();
  }

  // ---------- Resaltado de la navegación según la sección visible ----------
  const navLinks = document.querySelectorAll('.nav__links a[href^="#"]');
  const navMap = {};
  navLinks.forEach(a => { navMap[a.getAttribute('href').slice(1)] = a; });
  const sections = Object.keys(navMap).map(id => document.getElementById(id)).filter(Boolean);
  if ('IntersectionObserver' in window && sections.length) {
    const navIO = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const link = navMap[entry.target.id];
        if (!link) return;
        if (entry.isIntersecting) link.classList.add('is-active');
        else link.classList.remove('is-active');
      });
    }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });
    sections.forEach(s => navIO.observe(s));
  }

  // ---------- Asistente de chat ----------
  const fab = document.getElementById('chat-fab');
  const win = document.getElementById('chat-window');
  const closeBtn = document.getElementById('chat-close');
  const body = document.getElementById('chat-body');
  const form = document.getElementById('chat-form');
  const input = document.getElementById('chat-input');
  const status = document.getElementById('chat-status');
  const MAX_HISTORY = 12;
  const MAX_INPUT_LENGTH = 1000;
  const chatHistory = [];
  let busy = false;

  function addMessage(text, who, record = true) {
    const msg = document.createElement('div');
    msg.className = 'chat-msg chat-msg--' + who;
    msg.textContent = text;
    body.appendChild(msg);
    body.scrollTop = body.scrollHeight;
    if (record) {
      chatHistory.push({ role: who === 'user' ? 'user' : 'assistant', content: text });
      if (chatHistory.length > MAX_HISTORY) chatHistory.splice(0, chatHistory.length - MAX_HISTORY);
    }
    return msg;
  }

  function setBusy(value) {
    busy = value;
    input.disabled = value;
    form.querySelector('button[type="submit"]').disabled = value;
    document.querySelectorAll('[data-quick]').forEach(btn => { btn.disabled = value; });
    form.setAttribute('aria-busy', String(value));
    status.hidden = !value;
  }

  async function streamReply() {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 30000);
    const botMessage = addMessage('', 'bot', false);
    let responseText = '';
    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'text/event-stream' },
        body: JSON.stringify({ messages: chatHistory.slice(-MAX_HISTORY) }),
        signal: controller.signal,
      });
      if (!response.ok || !response.body) throw new Error('AI service unavailable');

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let buffer = '';
      let done = false;
      while (!done) {
        const chunk = await reader.read();
        done = chunk.done;
        buffer += decoder.decode(chunk.value || new Uint8Array(), { stream: !done });
        const frames = buffer.split(/\\r?\\n\\r?\\n/);
        buffer = frames.pop() || '';
        frames.forEach(frame => {
          frame.split(/\\r?\\n/).forEach(line => {
            if (!line.startsWith('data: ')) return;
            const data = line.slice(6);
            if (data === '[DONE]') return;
            try {
              const parsed = JSON.parse(data);
              if (typeof parsed.response === 'string') {
                responseText += parsed.response;
                botMessage.textContent = responseText;
                body.scrollTop = body.scrollHeight;
              }
            } catch { /* Ignore incomplete or non-JSON SSE frames. */ }
          });
        });
      }
      if (!responseText) throw new Error('Empty AI response');
      chatHistory.push({ role: 'assistant', content: responseText });
      if (chatHistory.length > MAX_HISTORY) chatHistory.splice(0, chatHistory.length - MAX_HISTORY);
    } catch {
      botMessage.textContent = 'No pude responder en este momento. Intenta de nuevo en unos segundos o escríbenos por la sección de contacto.';
    } finally {
      clearTimeout(timeout);
      setBusy(false);
    }
  }

  function openChat() {
    win.classList.add('is-open');
    win.setAttribute('aria-hidden', 'false');
    if (body.children.length === 0) {
      addMessage('Hola, soy el asistente virtual de Reborntech. Estoy disponible 24/7 para responder tus dudas básicas. Nuestro equipo humano te atiende de ${CONFIG.hoursHuman}. ¿En qué te ayudo?', 'bot');
    }
    setTimeout(() => input && input.focus(), 80);
  }

  function closeChat() {
    win.classList.remove('is-open');
    win.setAttribute('aria-hidden', 'true');
  }

  fab.addEventListener('click', () => {
    win.classList.contains('is-open') ? closeChat() : openChat();
  });
  closeBtn.addEventListener('click', closeChat);

  async function submitQuestion(text) {
    if (busy || !text) return;
    addMessage(text, 'user');
    input.value = '';
    setBusy(true);
    await streamReply();
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    submitQuestion(input.value.trim().slice(0, MAX_INPUT_LENGTH));
  });

  document.querySelectorAll('[data-quick]').forEach(btn => {
    btn.addEventListener('click', () => {
      const q = btn.getAttribute('data-quick');
      if (!win.classList.contains('is-open')) openChat();
      submitQuestion(q);
    });
  });

  // ---------- Filtro por sector ----------
  const chips = document.querySelectorAll('[data-filter]');
  const cards = document.querySelectorAll('[data-sector]');
  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      const f = chip.getAttribute('data-filter');
      chips.forEach(c => c.classList.toggle('is-active', c === chip));
      cards.forEach(card => {
        const show = f === 'todos' || card.getAttribute('data-sector') === f;
        card.style.display = show ? '' : 'none';
      });
    });
  });

  // ---------- Formulario de contacto → WhatsApp + correo ----------
  const formEl = document.getElementById('contact-form');
  const successEl = document.getElementById('form-success');
  if (formEl) {
    formEl.addEventListener('submit', (e) => {
      e.preventDefault();
      const nombre = formEl.nombre.value.trim();
      const empresa = formEl.empresa.value.trim();
      const sector = formEl.sector.value.trim();
      const necesidad = formEl.necesidad.value.trim();

      if (!nombre || !necesidad) {
        alert('Por favor escribe tu nombre y cuéntanos qué necesitas.');
        return;
      }

      const mensaje = [
        'Hola Reborntech, quiero agendar una asesoría gratuita.',
        'Nombre: ' + nombre,
        empresa ? 'Empresa: ' + empresa : '',
        sector !== 'Otro sector' && sector ? 'Sector: ' + sector : '',
        '¿Qué necesito?: ' + necesidad,
      ].filter(Boolean).join('\\n');

      // NÚMERO PLACEHOLDER: ver CONFIG en src/shared/styles.js
      const waLink = 'https://wa.me/${CONFIG.whatsappNumber}?text=' + encodeURIComponent(mensaje);
      const mailLink = 'mailto:${CONFIG.email}?subject=' + encodeURIComponent('Asesoría gratuita — Reborntech') + '&body=' + encodeURIComponent(mensaje);

      // Abrimos WhatsApp y también mostramos el enlace por correo.
      window.open(waLink, '_blank', 'noopener');
      if (successEl) {
        successEl.classList.add('is-visible');
        successEl.innerHTML = '¡Gracias, ' + nombre + '! Abrimos WhatsApp con tu mensaje listo para enviar. ' +
          'También puedes escribirnos por correo a <a href="' + mailLink + '">${CONFIG.email}</a> o volver a abrir <a href="' + waLink + '" target="_blank" rel="noopener">WhatsApp</a>.';
      }
      formEl.reset();
    });
  }
})();
</script>`;
}

/** Ensambla la página final con cabeza, header, contenido y chat */
export function assemblePage(title, description, body) {
  return head(title, description) + header() + `
<main id="contenido">${body}</main>` + chatWidget() + behaviors() + `
</body>
</html>`;
}
