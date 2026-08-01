/**
 * sections/sectors.js — Sección Sectores atendidos (5.4)
 * Tarjetas por sector con ejemplo concreto de cómo ayuda la IA,
 * filtro por sector (elemento funcional 7) y espacio para "tu sector".
 */

import { button, ICONS } from '../shared/styles.js';

const sectorsList = [
  { id: 'salud', icon: ICONS.health, name: 'Salud', example: 'Clínicas y consultorios que automatizan la gestión de citas, resúmenes de historias clínicas y atención a pacientes las 24 horas.' },
  { id: 'eventos', icon: ICONS.events, name: 'Eventos', example: 'Organizadores que gestionan invitados, mesas, agenda y confirmaciones de asistencia de forma automática.' },
  { id: 'deportes', icon: ICONS.sports, name: 'Deportes', example: 'Equipos y academias que analizan rendimiento, planifican entrenamientos y generan reportes de jugadores.' },
  { id: 'banca', icon: ICONS.bank, name: 'Banca', example: 'Instituciones financieras que automatizan atención al cliente, análisis de riesgo y detección de movimientos inusuales.' },
  { id: 'arquitectura', icon: ICONS.architecture, name: 'Arquitectura', example: 'Estudios que aceleran la documentación de proyectos, estimaciones de presupuesto y revisión de planos.' },
  { id: 'restaurantes', icon: ICONS.restaurant, name: 'Restaurantes', example: 'Restaurantes y hoteles que predicen demanda, gestionan reservas y personalizan el menú según preferencias.' },
  { id: 'tu-sector', icon: ICONS.other, name: 'Tu sector', example: '¿No ves el tuyo? La IA se adapta a cualquier rubro. Cuéntanos tu caso y te mostramos cómo puede ayudarte.' },
];

export default function sectors() {
  return `
<section id="sectores" class="section section--alt" aria-label="Sectores atendidos">
  <div class="container">
    <div class="section__head reveal">
      <span class="section__eyebrow">${ICONS.other} Sectores atendidos</span>
      <h2 class="section__title">Casos aplicados a la vida real</h2>
      <p class="section__sub">Así de concreto es el impacto de la IA. Filtra por tu sector y descubre lo que se puede hacer hoy mismo.</p>
    </div>

    <div style="display:flex; flex-wrap:wrap; gap:10px; justify-content:center; margin-bottom:36px;" class="reveal" role="group" aria-label="Filtro por sector">
      <button class="btn btn--sm btn--outline is-active" data-filter="todos">Todos</button>
      ${sectorsList.map((s) => `<button class="btn btn--sm btn--outline" data-filter="${s.id}">${s.name}</button>`).join('')}
    </div>

    <div class="grid-3">
      ${sectorsList.map((s) => `
        <div class="card reveal" data-sector="${s.id}">
          <div class="card__icon">${s.icon}</div>
          <h3>${s.name}</h3>
          <p>${s.example}</p>
          ${button('#contacto', 'Quiero saber más', 'link', 'sm')}
        </div>`).join('')}
    </div>
  </div>
</section>`;
}
