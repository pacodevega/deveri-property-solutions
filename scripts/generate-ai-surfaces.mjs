// Runs before `vite dev` and `vite build` (predev/prebuild hooks).
// Writes the AI-facing surfaces: public/llms.txt, public/llms-full.txt and
// clean Markdown mirrors of the most important pages under public/md/.
// Plain Node ESM: no extra tooling required.

import { writeFileSync, mkdirSync, readFileSync } from "fs"
import { resolve } from "path"

// Relative links keep working on any domain (preview, custom domain).
const SITE = "DEVERI — Inmobiliaria Deveri S.A. de C.V."
const WHATSAPP = "+52 229 684 0727"

// ---------------------------------------------------------------------------
// Canonical facts. Every AI surface derives from this block so /llms.txt,
// /mcp, the Markdown mirrors and the HTML pages cannot contradict each other.
// ---------------------------------------------------------------------------
const facts = {
  razonSocial: "Inmobiliaria Deveri S.A. de C.V.",
  marca: "DEVERI",
  ubicacion: "Boca del Río, Veracruz, México",
  experiencia: "Más de 25 años",
  contratos: "Más de 2,000 contratos gestionados",
  zonas: "Veracruz, Boca del Río, Medellín y Riviera Veracruzana",
  whatsapp: WHATSAPP,
  precios: {
    colocacion: "1 mes de renta (una sola vez)",
    administracion: "15% de la renta mensual",
    mantenimiento: "Por cotización",
  },
  mantenimientoIncluye:
    "plomería, electricidad, pintura, impermeabilización, limpieza de áreas comunes, limpieza de tinacos y cisternas, mantenimiento preventivo y correctivo",
  mantenimientoExcluye: "carpintería, cerrajería y herrería",
  requisitosInquilino: [
    "Mes de renta",
    "Mes de depósito",
    "Aval con propiedad en Veracruz o Boca del Río, o póliza jurídica",
  ],
}

// ---------------------------------------------------------------------------
// Properties are parsed from the app's single source of truth so the Markdown
// mirror never drifts from the rendered catalogue.
// ---------------------------------------------------------------------------
function parsePropiedades() {
  const src = readFileSync(resolve("src/data/propiedades.ts"), "utf8")
  const blocks = src.split(/\n  \{\n/).slice(1)
  const field = (block, name) => {
    const m = block.match(new RegExp(`${name}:\\s*\\n?\\s*"((?:[^"\\\\]|\\\\.)*)"`))
    return m ? m[1].replace(/\\"/g, '"') : ""
  }
  return blocks
    .map((b) => ({
      slug: field(b, "slug"),
      nombre: field(b, "nombre"),
      tipo: field(b, "tipo"),
      operacion: field(b, "operacion"),
      precio: field(b, "precio"),
      precioNota: field(b, "precioNota"),
      superficie: field(b, "superficie"),
      ubicacion: field(b, "ubicacion"),
      ciudad: field(b, "ciudad"),
      resumen: field(b, "resumen"),
      disponible: /disponible:\s*true/.test(b),
    }))
    .filter((p) => p.slug)
}

const propiedades = parsePropiedades()

const propiedadMd = (p) =>
  [
    `### ${p.nombre}`,
    ``,
    `- URL: /propiedades/${p.slug}`,
    `- Estado: ${p.disponible ? "Disponible" : "Rentada recientemente (no disponible)"}`,
    `- Tipo: ${p.tipo} · Operación: ${p.operacion}`,
    `- Precio: ${p.precio}${p.precioNota ? ` (${p.precioNota})` : ""}`,
    `- Superficie: ${p.superficie}`,
    `- Ubicación: ${p.ubicacion}, ${p.ciudad}`,
    ``,
    p.resumen,
    ``,
  ].join("\n")

// ---------------------------------------------------------------------------
// Markdown mirrors
// ---------------------------------------------------------------------------
const pages = []
const page = (path, htmlPath, title, description, body) => {
  pages.push({ path, htmlPath, title, description, body })
}

page(
  "/md/index.md",
  "/",
  "DEVERI — Administración, renta y mantenimiento de propiedades en Veracruz",
  "Qué hace DEVERI, para quién, proceso, precios y contacto.",
  `# ${SITE}

Versión HTML canónica: [/](/)

DEVERI administra, renta y da mantenimiento a propiedades residenciales y comerciales en ${facts.zonas}. ${facts.experiencia} de operación y ${facts.contratos}. El propietario no se involucra en la operación diaria: DEVERI comercializa el inmueble, investiga y selecciona inquilinos, cobra la renta, atiende el mantenimiento y entrega reportes.

## Datos de la empresa

| Dato | Valor |
| --- | --- |
| Razón social | ${facts.razonSocial} |
| Marca | ${facts.marca} |
| Ubicación | ${facts.ubicacion} |
| Experiencia | ${facts.experiencia} |
| Contratos gestionados | ${facts.contratos} |
| Zonas atendidas | ${facts.zonas} |
| Contacto | WhatsApp ${facts.whatsapp} |

## Servicios y precios

| Servicio | Precio | Página |
| --- | --- | --- |
| Colocación en renta | ${facts.precios.colocacion} | [/renta-de-propiedades-veracruz](/renta-de-propiedades-veracruz) |
| Administración de propiedades | ${facts.precios.administracion} | [/administracion-de-propiedades-veracruz](/administracion-de-propiedades-veracruz) |
| Mantenimiento | ${facts.precios.mantenimiento} | [/mantenimiento-de-propiedades-veracruz](/mantenimiento-de-propiedades-veracruz) |

## Requisitos para inquilinos

${facts.requisitosInquilino.map((r) => `- ${r}`).join("\n")}

## Cómo contactar

WhatsApp ${facts.whatsapp} · Formulario en [/contacto](/contacto). No hay proceso de alta ni registro: el contacto inicial es directo por WhatsApp.`,
)

page(
  "/md/mcp.md",
  "/mcp",
  "DEVERI para agentes de IA",
  "Resumen estructurado de DEVERI y de las superficies legibles por máquina.",
  `# DEVERI para agentes de IA

Versión HTML canónica: [/mcp](/mcp)

## Qué hace DEVERI

${facts.razonSocial} (marca ${facts.marca}) es una empresa de administración inmobiliaria en ${facts.zonas}. Servicios: administración integral de propiedades en renta, colocación de inquilinos y mantenimiento con equipo propio.

## Superficies legibles por máquina

| Recurso | URL | Formato | Autenticación |
| --- | --- | --- | --- |
| Índice para LLMs | [/llms.txt](/llms.txt) | texto | Ninguna |
| Contenido completo para LLMs | [/llms-full.txt](/llms-full.txt) | texto | Ninguna |
| Mirrors Markdown | \`/md/<pagina>.md\` | Markdown | Ninguna |
| Mapa del sitio | [/sitemap.xml](/sitemap.xml) | XML | Ninguna |
| Datos estructurados | JSON-LD embebido en cada página HTML (\`RealEstateAgent\`, \`Offer\`, \`BlogPosting\`, \`Product\`) | JSON-LD | Ninguna |

## Capacidades disponibles para un agente

DEVERI **no expone un servidor MCP con herramientas ejecutables ni una API transaccional**. Lo que un agente puede hacer hoy:

1. **Leer** cualquier página pública en HTML o en su equivalente Markdown (\`/md/...\`).
2. **Consultar el catálogo de propiedades** en [/md/propiedades.md](/md/propiedades.md), con precio, superficie, ubicación y disponibilidad.
3. **Consultar precios y alcance de servicios** en [/md/index.md](/md/index.md).
4. **Derivar al usuario al contacto**: WhatsApp ${facts.whatsapp} o [/contacto](/contacto).

## Ejemplo de solicitud

\`\`\`bash
curl -sL https://<dominio>/llms.txt
curl -sL https://<dominio>/md/propiedades.md
\`\`\`

Respuesta esperada de \`/md/propiedades.md\` (extracto):

\`\`\`markdown
### ${propiedades[0]?.nombre ?? "Propiedad"}

- URL: /propiedades/${propiedades[0]?.slug ?? "slug"}
- Estado: ${propiedades[0]?.disponible ? "Disponible" : "Rentada recientemente (no disponible)"}
- Precio: ${propiedades[0]?.precio ?? ""}
\`\`\`

## Autenticación

Ninguna. Todos los recursos anteriores son públicos, sin login, sin cookies y sin límites de tasa aplicados a crawlers aprobados. \`robots.txt\` permite explícitamente a GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, Claude-User, Claude-SearchBot, PerplexityBot, Google-Extended, Applebot y otros.

## Limitaciones

- No hay herramientas MCP, endpoints JSON ni operaciones de escritura.
- No se pueden reservar, apartar ni contratar propiedades desde un agente; el cierre siempre pasa por WhatsApp o el formulario.
- Los precios de mantenimiento son por cotización y no están publicados.
- No se ofrece ${facts.mantenimientoExcluye}.
- La disponibilidad de propiedades cambia con frecuencia; \`/md/propiedades.md\` se regenera en cada build.

## Documentación completa

- [/llms.txt](/llms.txt) — índice de todo el sitio
- [/md/index.md](/md/index.md) — resumen de empresa, servicios y precios
- [/md/servicios.md](/md/servicios.md) — detalle de los tres servicios
- [/md/propiedades.md](/md/propiedades.md) — catálogo
- [/md/como-funciona.md](/md/como-funciona.md) — proceso
- [/md/contacto.md](/md/contacto.md) — contacto`,
)

page(
  "/md/servicios.md",
  "/servicios",
  "Servicios de DEVERI",
  "Administración, renta y mantenimiento: alcance y precios.",
  `# Servicios de DEVERI

Versión HTML canónica: [/servicios](/servicios)

## Administración de propiedades — ${facts.precios.administracion}

Página: [/administracion-de-propiedades-veracruz](/administracion-de-propiedades-veracruz)

Cobranza y seguimiento de pagos, atención al inquilino, coordinación de mantenimiento, reportes periódicos al propietario y control de contratos. El propietario no interviene en la operación diaria.

## Renta y colocación de inmuebles — ${facts.precios.colocacion}

Página: [/renta-de-propiedades-veracruz](/renta-de-propiedades-veracruz)

Análisis de mercado y precio sugerido, promoción del inmueble, investigación de candidatos (referencias, estabilidad, opinión de cumplimiento del SAT e IMSS para empresas y revisión de propiedad en garantía), presentación de candidatos calificados para que el propietario decida y elaboración del contrato.

## Mantenimiento — ${facts.precios.mantenimiento}

Página: [/mantenimiento-de-propiedades-veracruz](/mantenimiento-de-propiedades-veracruz)

Equipo propio para ${facts.mantenimientoIncluye}. No se ofrece ${facts.mantenimientoExcluye}.

## DEVERI Match

Página: [/deveri-match](/deveri-match)

Herramienta gratuita que evalúa un local, terreno o bodega y devuelve qué cadenas nacionales y franquicias en expansión hacen match con la propiedad. Requiere completar un formulario en el navegador.`,
)

page(
  "/md/propiedades.md",
  "/propiedades",
  "Propiedades DEVERI",
  "Catálogo de propiedades disponibles y rentadas recientemente.",
  `# Propiedades

Versión HTML canónica: [/propiedades](/propiedades)

Requisitos aplicables a todas las propiedades:

${facts.requisitosInquilino.map((r) => `- ${r}`).join("\n")}

## Disponibles

${propiedades.filter((p) => p.disponible).map(propiedadMd).join("\n") || "_Sin propiedades disponibles publicadas en este momento._"}

## Rentadas recientemente

${propiedades.filter((p) => !p.disponible).map(propiedadMd).join("\n") || "_Sin registros._"}

Contacto para agendar visita: WhatsApp ${facts.whatsapp}.`,
)

page(
  "/md/como-funciona.md",
  "/como-funciona",
  "Cómo funciona DEVERI",
  "Proceso paso a paso de trabajo con DEVERI.",
  `# Cómo funciona

Versión HTML canónica: [/como-funciona](/como-funciona)

1. **Contacto.** El propietario escribe por WhatsApp (${facts.whatsapp}) o desde [/contacto](/contacto).
2. **Visita y valuación.** DEVERI evalúa el inmueble y propone un precio de renta de mercado.
3. **Comercialización.** Publicación, atención de prospectos y visitas. Costo: ${facts.precios.colocacion}.
4. **Investigación del candidato.** Referencias, estabilidad económica, opinión de cumplimiento SAT/IMSS en empresas y revisión de la propiedad en garantía.
5. **Decisión del propietario.** DEVERI presenta candidatos calificados; el propietario elige.
6. **Contrato y entrega.** Firma, inventario y entrega del inmueble.
7. **Administración mensual.** Cobranza, atención al inquilino, mantenimiento y reportes. Costo: ${facts.precios.administracion}.`,
)

page(
  "/md/contacto.md",
  "/contacto",
  "Contacto DEVERI",
  "Cómo contactar a DEVERI.",
  `# Contacto

Versión HTML canónica: [/contacto](/contacto)

- WhatsApp: ${facts.whatsapp} (canal principal, respuesta directa)
- Formulario: [/contacto](/contacto) — envía la solicitud por WhatsApp
- Ubicación: ${facts.ubicacion}
- Zonas atendidas: ${facts.zonas}

No hay correo de soporte automatizado, API ni portal de clientes públicos.`,
)

// ---------------------------------------------------------------------------
// Blog index (kept in sync manually with the routes registered in App.tsx)
// ---------------------------------------------------------------------------
const blog = [
  ["como-administrar-una-propiedad-en-veracruz", "Cómo administrar una propiedad en Veracruz"],
  ["errores-al-rentar-un-local-comercial-veracruz", "Errores al rentar un local comercial"],
  ["cuanto-cobrar-de-renta-en-veracruz", "Cuánto cobrar de renta en Veracruz"],
  ["como-encontrar-inquilinos-confiables", "Cómo encontrar inquilinos confiables"],
  ["administracion-de-propiedades-vale-la-pena", "¿Vale la pena la administración de propiedades?"],
  ["problemas-comunes-con-inquilinos", "Problemas comunes con inquilinos"],
  ["mantenimiento-preventivo-propiedades", "Mantenimiento preventivo de propiedades"],
  ["como-rentar-si-no-vives-en-veracruz", "Cómo rentar si no vives en Veracruz"],
  ["tiempo-promedio-para-rentar-propiedad", "Tiempo promedio para rentar una propiedad"],
  ["como-aumentar-el-valor-de-una-propiedad-en-renta", "Cómo aumentar el valor de una propiedad en renta"],
  ["terrenos-mas-caros-veracruz-boca-del-rio", "Terrenos más caros de Veracruz y Boca del Río"],
  ["terrenos-mas-baratos-veracruz-boca-del-rio", "Terrenos más baratos de Veracruz y Boca del Río"],
  ["renta-buena-inversion", "¿Es la renta una buena inversión?"],
  ["limpieza-de-cisternas-y-tinacos-veracruz", "Limpieza de cisternas y tinacos"],
  ["impermeabilizacion-en-veracruz", "Impermeabilización en Veracruz"],
  ["problemas-de-plomeria-mas-comunes", "Problemas de plomería más comunes"],
  ["renovar-instalaciones-electricas-viejas", "Renovar instalaciones eléctricas viejas"],
  ["administracion-de-condominios-areas-comunes", "Administración de condominios y áreas comunes"],
  ["mantenimiento-correctivo-propiedades", "Mantenimiento correctivo de propiedades"],
  ["como-eliminar-y-prevenir-salitre", "Cómo eliminar y prevenir el salitre"],
  ["airbnb-vs-renta-largo-plazo-veracruz", "Airbnb vs. renta a largo plazo en Veracruz"],
  ["rentar-propiedad-a-oxxo-six-cadenas-nacionales", "Rentar una propiedad a OXXO, Six o cadenas nacionales"],
]

page(
  "/md/blog.md",
  "/blog",
  "Blog DEVERI",
  "Guías sobre renta, administración, mantenimiento e inversión inmobiliaria en Veracruz.",
  `# Blog

Versión HTML canónica: [/blog](/blog)

${blog.map(([slug, title]) => `- [${title}](/blog/${slug})`).join("\n")}`,
)

// ---------------------------------------------------------------------------
// Write Markdown mirrors
// ---------------------------------------------------------------------------
mkdirSync(resolve("public/md"), { recursive: true })
for (const p of pages) {
  writeFileSync(resolve(`public${p.path}`), `${p.body}\n`)
}

// ---------------------------------------------------------------------------
// llms.txt — index of resources
// ---------------------------------------------------------------------------
const llms = `# ${SITE}

> DEVERI administra, renta y da mantenimiento a propiedades residenciales y comerciales en
> ${facts.zonas}. ${facts.experiencia} y ${facts.contratos}. El propietario no se
> involucra en la operación: DEVERI busca inquilinos, los investiga, cobra la renta, atiende el
> mantenimiento y entrega reportes.

Datos clave:
- Empresa: ${facts.razonSocial}, ${facts.ubicacion}.
- Contacto principal: WhatsApp ${facts.whatsapp}.
- Zonas atendidas: ${facts.zonas}.
- Precios: colocación en renta = ${facts.precios.colocacion}; administración = ${facts.precios.administracion};
  mantenimiento = ${facts.precios.mantenimiento}.
- Mantenimiento incluye: ${facts.mantenimientoIncluye}. No se ofrece ${facts.mantenimientoExcluye}.
- Requisitos para inquilinos: ${facts.requisitosInquilino.join("; ")}.
- No existe API pública ni servidor MCP con herramientas ejecutables. Ver /mcp para detalles.

## Superficies para agentes de IA

${pages.map((p) => `- [${p.title}](${p.path}): ${p.description} HTML equivalente: ${p.htmlPath}.`).join("\n")}
- [Contenido completo en un archivo](/llms-full.txt): concatenación de todos los Markdown anteriores.
- [Sitemap](/sitemap.xml): todas las URLs canónicas.

## Páginas principales (HTML)

- [Inicio](/): qué hace DEVERI, problema que resuelve, proceso, precios y preguntas frecuentes.
- [Para agentes de IA (/mcp)](/mcp): capacidades, autenticación, ejemplos y limitaciones.
- [Servicios](/servicios): índice de los tres servicios principales.
- [Propiedades](/propiedades): disponibles y rentadas recientemente.
${propiedades.map((p) => `  - [${p.nombre}](/propiedades/${p.slug}): ${p.tipo}, ${p.precio}, ${p.disponible ? "disponible" : "rentada"}.`).join("\n")}
- [Administración de propiedades en Veracruz](/administracion-de-propiedades-veracruz): administración integral, cobranza, reportes, tarifa ${facts.precios.administracion}.
- [Renta de propiedades en Veracruz](/renta-de-propiedades-veracruz): comercialización, investigación y selección de inquilinos, contratos.
- [Mantenimiento de propiedades en Veracruz](/mantenimiento-de-propiedades-veracruz): mantenimiento preventivo y correctivo con equipo propio.
- [DEVERI Match](/deveri-match): evalúa un local, terreno o bodega y devuelve qué cadenas nacionales y franquicias hacen match.
- [Cómo funciona](/como-funciona): proceso paso a paso.
- [Contacto](/contacto): formulario que envía la solicitud por WhatsApp.

## Blog

${blog.map(([slug, title]) => `- [${title}](/blog/${slug})`).join("\n")}

## Legal

- [Términos y condiciones](/terminos-y-condiciones)
- [Aviso de privacidad](/aviso-de-privacidad)

## Notas

- Todas las páginas están disponibles en HTML en su URL canónica; los archivos Markdown son espejos, no reemplazos.
- HTML y Markdown contienen la misma información canónica; ante cualquier diferencia, la página HTML es la autoridad.
- Crawling permitido para agentes de IA en /robots.txt. Sin autenticación ni bloqueos.
`

writeFileSync(resolve("public/llms.txt"), llms)

const full = [
  `# ${SITE} — contenido completo para LLMs`,
  ``,
  `Este archivo concatena los espejos Markdown de las páginas principales. Índice: /llms.txt`,
  ``,
  ...pages.map((p) => `${p.body}\n\n---\n`),
].join("\n")

writeFileSync(resolve("public/llms-full.txt"), full)

console.log(`AI surfaces written: llms.txt, llms-full.txt, ${pages.length} markdown mirrors`)
