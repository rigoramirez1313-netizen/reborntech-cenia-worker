# Prompt de Diseño y Arquitectura Web — Centro Nacional de Inteligencia Artificial (Reborntech)

Este documento reúne toda la información necesaria para diseñar y construir la página web de la empresa: **estructura, contenido, diseño visual, experiencia, y ahora también la arquitectura técnica de implementación** (ver sección 10), pensada para Cloudflare Workers con JavaScript modular.

---

## 1. Contexto de la empresa

**Nombre:** Centro Nacional de Inteligencia Artificial — Reborntech
**País:** Colombia (empresa 100% virtual, con alcance internacional)

La empresa ofrece:
- Asesoría y consultoría en Inteligencia Artificial para empresas y personas.
- Capacitaciones de adopción y alfabetización en IA (para quienes parten de cero).
- Capacitaciones especializadas por sector: salud, eventos, deportes, banca, arquitectura, restaurantes, y otros.
- Asesoría tecnológica enfocada en IA: compra de equipos, servidores, licencias y suscripciones.
- Provisión de suscripciones de IA y del hardware necesario para usarlas.
- Trabajo con múltiples modelos de IA: los más conocidos (Claude, ChatGPT, Copilot) y otros menos populares pero muy capaces (DeepSeek, Kimi, GLM, Qwen y otros modelos asiáticos).
- Desarrollo e integración de IA local, sin necesidad de suscripción ni de internet, con bajo consumo de recursos (transcripción de audio, visión por computador, reconocimiento de objetos, entre otras soluciones).
- Automatización de procesos y conexión con los sistemas que la empresa cliente ya usa.

**Diferencial clave:** hacen la IA entendible para todos, sin tecnicismos, y ofrecen tanto soluciones "en la nube" como soluciones locales/privadas cuando el cliente lo necesita.

---

## 2. Objetivo del sitio web

1. Explicar de forma simple qué hace la empresa y para quién.
2. Generar confianza (es una empresa 100% virtual, así que el sitio debe transmitir seriedad y respaldo).
3. Facilitar que el visitante encuentre el servicio que necesita según su sector o su nivel de conocimiento en IA.
4. Convertir visitas en asesorías agendadas o contactos.
5. Dejar claro que hay atención humana en horario definido y atención por IA disponible todo el tiempo.

---

## 3. Público objetivo

- Empresas y emprendedores colombianos y de otros países de habla hispana que quieren empezar a usar IA pero no saben cómo.
- Negocios de sectores específicos (clínicas, hoteles, restaurantes, bancos, estudios de arquitectura, organizadores de eventos, equipos deportivos, etc.) que buscan soluciones aplicadas a su día a día.
- Personas y equipos que ya usan IA pero quieren capacitarse mejor o formalizar su adopción.
- Empresas que necesitan privacidad y soluciones que funcionen sin depender de internet o de una suscripción.

**Nivel de conocimiento del visitante:** variable, desde nulo hasta avanzado. El contenido debe poder leerse en dos niveles: explicación simple primero, detalle para quien quiera profundizar.

---

## 4. Tono y estilo de comunicación

- Lenguaje claro, cercano y sencillo. Cero tecnicismos innecesarios.
- Cuando se mencione una tecnología, explicarla con una frase simple entre paréntesis o un ejemplo cotidiano.
- Tono profesional pero humano y cálido, no frío ni corporativo en exceso.
- Mensaje de fondo: "la IA no es solo para expertos, es para cualquier negocio o persona, y nosotros te acompañamos".
- Evitar el uso de anglicismos sin traducir; si es inevitable, explicarlos brevemente.

---

## 5. Estructura del sitio (secciones sugeridas)

Cada una de las secciones descritas a continuación (5.1 a 5.9) debe corresponder, en la implementación, a **un archivo independiente**, según el modelo modular explicado en la sección 10. Esto permite que cualquier cambio de contenido o diseño en una sección se haga editando un solo archivo, sin tocar el resto del sitio.

### 5.1 Inicio (Home)
- Frase principal (headline) que resuma la propuesta: acercar la IA a cualquier persona o negocio, con acompañamiento real.
- Subtítulo con los tres pilares: **Asesoría · Capacitación · Implementación**.
- Botón principal: "Agenda una asesoría gratuita" o similar.
- Bloque de confianza: íconos o frases cortas (atención personalizada, soluciones sin internet, cobertura internacional, IA disponible 24/7).
- Vista rápida de los servicios principales (tarjetas con ícono + nombre + una línea de descripción).
- Vista rápida de sectores atendidos (con íconos representativos: salud, deportes, banca, restaurantes, eventos, arquitectura, y "otros sectores").
- Sección "¿Por qué elegirnos?" con 3-4 razones simples.
- Llamado a la acción final antes del pie de página.

### 5.2 Quiénes somos
- Historia breve y propósito de la empresa.
- Explicación de que es un centro 100% virtual, con atención en todo el país y también fuera de Colombia.
- Filosofía de trabajo: lenguaje simple, soluciones a la medida, acompañamiento constante.
- Mención de que se mantienen siempre actualizados probando nuevas herramientas de IA.

### 5.3 Servicios
Dividir en subsecciones o pestañas claras:

1. **Asesoría y consultoría en IA** — diagnóstico de necesidades y recomendación de soluciones.
2. **Capacitación y alfabetización en IA** — cursos para quienes están empezando desde cero.
3. **Capacitación especializada por sector** — enlaza con la sección de sectores.
4. **Asesoría tecnológica** — ayuda para elegir y comprar equipos, servidores, licencias y suscripciones adecuadas.
5. **Suscripciones y equipos** — la empresa puede proveer directamente las suscripciones de IA y el hardware necesario.
6. **Soluciones locales y privadas** — implementación de IA que funciona sin internet ni suscripción, ideal para quienes priorizan privacidad o tienen conectividad limitada.
7. **Automatización de procesos** — conectar la IA con las herramientas que el negocio ya usa, para ahorrar tiempo en tareas repetitivas.

Cada servicio: ícono representativo, nombre, descripción de 2-3 líneas en lenguaje simple, y botón "Quiero saber más" o "Solicitar información".

### 5.4 Sectores atendidos
Tarjetas o bloques visuales por sector (salud, eventos, deportes, banca, arquitectura, restaurantes, y espacio abierto para "tu sector"), cada uno con un ejemplo breve y concreto de cómo la IA ayuda en ese rubro.

### 5.5 Cómo trabajamos (proceso)
Línea de tiempo simple en 3-4 pasos, por ejemplo:
1. Conversamos sobre tu necesidad.
2. Te proponemos una solución a tu medida.
3. Implementamos y capacitamos a tu equipo.
4. Te acompañamos después de la entrega.

### 5.6 Soluciones sin internet / privacidad
Sección dedicada a explicar, en términos simples, que existen opciones de IA que funcionan de forma local, sin conexión constante a internet y sin pagar suscripción, ideales para negocios que manejan información sensible o que están en zonas con poca conectividad. Ejemplos concretos: transcribir audios, reconocer objetos o imágenes, automatizar tareas, todo funcionando "dentro de casa".

### 5.7 Preguntas frecuentes (FAQ)
Preguntas simples como: "¿Necesito saber de tecnología para trabajar con ustedes?", "¿Atienden fuera de Colombia?", "¿Qué pasa si no tengo buena conexión a internet?", "¿Cuánto cuesta empezar?", etc.

### 5.8 Contacto / Agenda tu asesoría
- Formulario simple (nombre, empresa, sector, qué necesita).
- Opción de agendar directamente una llamada o asesoría.
- Mención de horario de atención humana: 8:00 a.m. – 6:00 p.m.
- Mención de que la asistencia por IA está disponible las 24 horas, los 7 días de la semana.
- Datos de contacto (correo, WhatsApp, redes sociales).
- Aclaración de que se atiende dentro y fuera de Colombia.

### 5.9 Pie de página (Footer)
- Logo y frase resumen.
- Enlaces rápidos a las secciones.
- Redes sociales.
- Horarios de atención.
- Aviso legal / políticas básicas.

---

## 6. Identidad visual

### 6.1 Paleta de colores sugerida

Concepto: transmitir **tecnología + confianza + cercanía humana**, evitando el "azul corporativo genérico" y buscando algo distintivo.

**Propuesta principal:**
- **Azul profundo / medianoche** (#0B1E3D o similar): color base, transmite seriedad, tecnología y confianza.
- **Violeta o índigo eléctrico** (#5B4FE8 o similar): color de acento, asociado a innovación e inteligencia artificial sin caer en el celeste genérico de "startup tech".
- **Verde menta o turquesa suave** (#3DDC97 o similar): color secundario para resaltar botones de acción o mensajes positivos, transmite frescura y accesibilidad ("la IA es para todos").
- **Blanco hueso / gris muy claro** (#F7F8FA): fondo principal, para dar sensación de limpieza y simplicidad.
- **Gris oscuro** (#2B2E38): para textos, en lugar de negro puro, más suave a la vista.

Esta combinación evita el típico "azul-morado genérico de IA" siendo más cálida gracias al verde menta, y refuerza la idea de cercanía sin perder seriedad.

### 6.2 Tipografía sugerida

- **Títulos:** una tipografía geométrica y moderna, con carácter pero legible (ejemplo de estilo: tipo *Poppins*, *Sora* o *Space Grotesk*) — transmite modernidad tecnológica sin ser fría.
- **Cuerpo de texto:** una tipografía humanista, muy legible, pensada para lectores no técnicos (ejemplo de estilo: *Inter*, *Nunito Sans* o *Work Sans*) — prioriza la claridad sobre el estilismo.
- Evitar tipografías muy futuristas o difíciles de leer; la prioridad es que cualquier persona, sin importar su edad o nivel tecnológico, pueda leer con comodidad.

### 6.3 Estilo gráfico e imágenes

- Evitar las clásicas imágenes de "robots humanoides" o "cerebros con circuitos", ya usadas y frías.
- Preferir ilustraciones simples y humanas: personas trabajando junto a herramientas, íconos abstractos que representen conversación, aprendizaje, conexión y crecimiento.
- Uso de íconos de línea simple (no muy recargados) para representar cada servicio y sector.
- Fotografías (si se usan) deben mostrar personas reales trabajando, capacitándose o en reuniones, no imágenes genéricas de stock muy "de IA".
- Formas suaves y orgánicas (círculos, curvas) combinadas con elementos geométricos sutiles, para balancear tecnología con calidez humana.
- Uso de espacios en blanco generosos, para que la información no se sienta abrumadora — coherente con el mensaje de "simplicidad".
- Microanimaciones sutiles (aparición suave de elementos al hacer scroll) para dar sensación de modernidad sin sobrecargar.

---

## 7. Elementos funcionales a incluir (descritos sin tecnicismos)

- **Asistente conversacional disponible todo el tiempo**, para resolver dudas básicas de los visitantes incluso fuera del horario de atención humana.
- **Formulario de contacto** simple, con pocos campos, que permita indicar el sector y la necesidad.
- **Botón de agendamiento** para reservar una asesoría directamente desde la web.
- **Buscador o filtro por sector**, para que el visitante encuentre rápido la información relevante a su rubro.
- **Sección destacada de "casos aplicados"** (ejemplos reales o representativos) por sector, para generar confianza mostrando resultados concretos.
- Indicadores visuales claros de disponibilidad: "Atención humana: 8:00 a.m. – 6:00 p.m." y "Asistencia por IA: disponible 24/7".

---

## 8. Consideraciones especiales para el diseño

- **Empresa 100% virtual:** el diseño debe compensar la falta de "oficina física" transmitiendo cercanía a través de contenido humano (testimonios, rostros del equipo si aplica, lenguaje conversacional).
- **Alcance internacional:** evitar referencias que suenen exclusivamente locales; mencionar claramente que se atiende fuera de Colombia.
- **Accesibilidad:** contraste de colores adecuado, tamaños de letra legibles, navegación simple pensada para usuarios con distintos niveles de familiaridad tecnológica.
- **Mensaje central que debe sentirse en cada sección:** "no necesitas saber de tecnología para beneficiarte de la IA — nosotros te lo explicamos y lo hacemos posible".

---

## 9. Resumen del "sello visual" de la marca

Si tuviera que resumirse en una frase de dirección creativa:

> *"Tecnología de punta, explicada como se explica algo entre amigos"* — visualmente sobria y confiable (azul profundo), con un toque de innovación (violeta/índigo) y calidez accesible (verde menta), tipografía limpia y humana, ilustraciones simples que evitan los clichés de robots y circuitos.

---

## 10. Arquitectura técnica del sitio (Cloudflare Workers, diseño modular)

Esta sección define cómo debe construirse el sitio a nivel técnico. Es información para quien programe el sitio (equipo técnico o una IA de código), no para el diseñador gráfico.

### 10.1 Plataforma

El sitio se construye y se sirve como un **Cloudflare Worker**, usando JavaScript puro (sintaxis de módulos ES, moderna), siguiendo la documentación oficial: https://developers.cloudflare.com/workers/

No se usa un `index.html` como página estática tradicional. El HTML de cada sección se genera desde código JavaScript que corre del lado del servidor, dentro del propio Worker, y se devuelve como respuesta (`Response`) al visitante.

### 10.2 Principio de diseño: modularidad con la mayor independencia posible

- Cada sección del sitio (Inicio, Quiénes somos, Servicios, Sectores, Cómo trabajamos, Soluciones sin internet, FAQ, Contacto, Footer, y cualquier sección nueva que se agregue) se construye como **un archivo JavaScript independiente**.
- Cada archivo de sección contiene únicamente lo mínimo necesario para esa sección: su propio contenido, su propia estructura y su propia lógica (si la necesita). No debe depender de detalles internos de otras secciones.
- Si en el futuro se necesita modificar el texto, el orden interno o el diseño de una sola sección, debe bastar con editar ese único archivo, sin riesgo de romper las demás.
- Los elementos verdaderamente compartidos entre todas las secciones (colores, tipografías, espaciados, componentes visuales repetidos como botones o tarjetas) se centralizan en un archivo común de estilos/diseño, para que cada sección lo use en vez de duplicar código. Así se mantiene consistencia visual sin perder independencia de contenido.

### 10.3 Archivo principal (enrutador)

- Existe un archivo principal (por ejemplo `index.js`) que actúa como **enrutador y ensamblador**: recibe cada solicitud que llega al Worker, decide qué sección o página debe mostrarse, importa el archivo correspondiente, y arma la respuesta final.
- El archivo principal sigue la sintaxis estándar de Workers en formato de módulos ES:

```javascript
export default {
  async fetch(request, env, ctx) {
    // aquí se decide la ruta y se llama al módulo de la sección correspondiente
  }
}
```

- El archivo principal debe contener solo la lógica de enrutamiento y ensamblado; no debe tener contenido ni diseño de ninguna sección específica, para mantenerse simple y estable.

### 10.4 Estructura de carpetas sugerida

```
src/
  index.js                → enrutador principal, conecta todo
  shared/
    styles.js              → colores, tipografías, espaciados comunes
    layout.js              → estructura base compartida (encabezado, pie, contenedor general)
  sections/
    home.js                → sección Inicio
    about.js                → sección Quiénes somos
    services.js             → sección Servicios
    sectors.js               → sección Sectores atendidos
    how-we-work.js           → sección Cómo trabajamos
    offline-solutions.js     → sección Soluciones sin internet / privacidad
    faq.js                    → sección Preguntas frecuentes
    contact.js                → sección Contacto / Agenda tu asesoría
    footer.js                 → pie de página
```

Cada archivo dentro de `sections/` exporta una función simple que genera el contenido de esa sección, y el archivo principal la importa y la usa donde corresponda.

### 10.5 Reglas para mantener la independencia entre archivos

- Cada archivo de sección debe poder leerse y entenderse por separado, sin necesidad de revisar otros archivos.
- Evitar que una sección dependa de variables internas o funciones específicas de otra sección; si dos secciones necesitan compartir algo, ese algo debe vivir en `shared/`, no en una de las secciones.
- Los nombres de archivos y funciones deben ser claros y descriptivos (igual que los nombres de las secciones del sitio), para que cualquier persona identifique de inmediato qué archivo editar si quiere cambiar algo puntual.
- El sitio debe poder crecer agregando nuevas secciones (nuevos sectores, nuevos servicios) simplemente creando un nuevo archivo dentro de `sections/` y conectándolo en el enrutador principal, sin modificar las secciones existentes.

### 10.6 Referencia técnica

Toda decisión de sintaxis, estructura de módulos, manejo de rutas y despliegue debe guiarse por la documentación oficial de Cloudflare Workers:
https://developers.cloudflare.com/workers/

---

Este documento puede usarse directamente como prompt para una herramienta de diseño web, para un diseñador humano, o para el equipo/IA encargado de la construcción técnica del sitio, ya que cubre estructura, contenido, tono, colores, tipografía, estilo gráfico y arquitectura de implementación.
