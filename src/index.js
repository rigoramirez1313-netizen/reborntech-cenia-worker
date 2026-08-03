/**
 * src/index.js — Enrutador y ensamblador del sitio.
 *
 * Recibe cada solicitud, decide qué sección mostrar y ensambla la respuesta.
 * Para una landing de una sola página, ensambla todas las secciones en orden
 * y soporta anclas por hash (#inicio, #servicios, #sectores, #como-trabajamos,
 * #soluciones-locales, #faq, #contacto) que el navegador resuelve del lado
 * del cliente. Cualquier otra ruta devuelve la landing igual o un 404 amigable.
 *
 * Este archivo contiene SOLO lógica de ruteo y ensamblado; el contenido vive
 * en src/sections/*. Para agregar una sección nueva basta crear el archivo en
 * src/sections/ e importarlo aquí.
 */

import { assemblePage } from './shared/layout.js';
import { CONFIG } from './shared/styles.js';

import home from './sections/home.js';
import about from './sections/about.js';
import services from './sections/services.js';
import sectors from './sections/sectors.js';
import howWeWork from './sections/how-we-work.js';
import offlineSolutions from './sections/offline-solutions.js';
import faq from './sections/faq.js';
import contact from './sections/contact.js';
import footer from './sections/footer.js';

const TITLE = `${CONFIG.shortName} — Centro Nacional de Inteligencia Artificial`;
const DESCRIPTION =
  'Asesoría, capacitación e implementación de inteligencia artificial para empresas y personas. ' +
  'Sin tecnicismos, con acompañamiento real y soluciones sin internet. Atención humana 8:00 a.m. – 6:00 p.m. y asistencia por IA 24/7.';
const CHAT_UPSTREAM_ORIGIN = 'https://llm-chat-app-template.rigo-ramirez-1313.workers.dev';
const MAX_CHAT_MESSAGES = 12;
const MAX_CHAT_CONTENT_LENGTH = 2000;
const CHAT_TIMEOUT_MS = 25000;

function buildLanding() {
  // Orden de las secciones en la página (single-page landing).
  const body = [
    home(),
    about(),
    services(),
    sectors(),
    howWeWork(),
    offlineSolutions(),
    faq(),
    contact(),
    footer(),
  ].join('');

  return assemblePage(TITLE, DESCRIPTION, body);
}

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    if (url.pathname === '/api/chat') {
      if (request.method !== 'POST') {
        return new Response('Method Not Allowed', {
          status: 405,
          headers: { Allow: 'POST' },
        });
      }

      let payload;
      try {
        payload = await request.json();
      } catch {
        return Response.json({ error: 'Invalid JSON body.' }, { status: 400 });
      }

      if (!payload || !Array.isArray(payload.messages) || payload.messages.length === 0) {
        return Response.json({ error: 'A non-empty messages array is required.' }, { status: 400 });
      }

      const messages = payload.messages
        .slice(-MAX_CHAT_MESSAGES)
        .filter((message) => (
          message &&
          (message.role === 'user' || message.role === 'assistant') &&
          typeof message.content === 'string' &&
          message.content.trim().length > 0
        ))
        .map((message) => ({
          role: message.role,
          content: message.content.trim().slice(0, MAX_CHAT_CONTENT_LENGTH),
        }));

      if (!messages.length) {
        return Response.json({ error: 'No valid messages were provided.' }, { status: 400 });
      }

      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), CHAT_TIMEOUT_MS);
      try {
        if (!env.LLM_CHAT) {
          console.error('LLM_CHAT service binding is not configured.');
          return Response.json({ error: 'The AI service is unavailable.' }, { status: 500 });
        }

        const upstream = await env.LLM_CHAT.fetch(new Request(`${CHAT_UPSTREAM_ORIGIN}/api/chat`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'text/event-stream',
          },
          body: JSON.stringify({ messages }),
          signal: controller.signal,
        }));

        if (!upstream.ok || !upstream.body) {
          return Response.json({ error: 'The AI service is unavailable.' }, { status: 502 });
        }

        const headers = new Headers(upstream.headers);
        headers.set('Cache-Control', 'no-store');
        headers.delete('Set-Cookie');
        return new Response(upstream.body, { status: upstream.status, headers });
      } catch {
        return Response.json({ error: 'The AI service is unavailable.' }, { status: 504 });
      } finally {
        clearTimeout(timeout);
      }
    }

    // Robots.txt para indexación (sencillo y estático).
    if (url.pathname === '/robots.txt') {
      return new Response('User-agent: *\nAllow: /\n', {
        headers: { 'Content-Type': 'text/plain; charset=utf-8' },
      });
    }

    // Cualquier ruta desconocida devuelve la landing (o podría ser un 404 amigable).
    // Aquí se mantiene la landing para toda petición GET, sin importar la ruta.
    const html = buildLanding();

    return new Response(html, {
      status: 200,
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
        'Cache-Control': 'public, max-age=0, s-maxage=300',
      },
    });
  },
};
