// Runs before `vite dev` and `vite build` (predev/prebuild hooks); writes public/sitemap.xml.
// Plain Node ESM: no extra tooling (tsx/bunx) required.

import { writeFileSync } from "fs"
import { resolve } from "path"

// TODO: replace with your project URL once a project name or custom domain is set.
const BASE_URL = ""

const entries = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  { path: "/deveri-match", changefreq: "monthly", priority: "0.9" },
  { path: "/mcp", changefreq: "monthly", priority: "0.9" },
  { path: "/servicios", changefreq: "monthly", priority: "0.9" },
  { path: "/servicios/administracion", changefreq: "monthly", priority: "0.8" },
  { path: "/servicios/renta", changefreq: "monthly", priority: "0.8" },
  { path: "/servicios/mantenimiento", changefreq: "monthly", priority: "0.8" },
  { path: "/propiedades", changefreq: "weekly", priority: "0.9" },
  { path: "/propiedades/yanez-d", changefreq: "weekly", priority: "0.7" },
  { path: "/propiedades/ruiz-cortines-altos", changefreq: "weekly", priority: "0.7" },
  { path: "/propiedades/ruiz-cortines-bajos", changefreq: "weekly", priority: "0.7" },
  { path: "/propiedades/hipico-local-3", changefreq: "weekly", priority: "0.7" },
  { path: "/propiedades/avenida-palmeras", changefreq: "monthly", priority: "0.5" },
  { path: "/propiedades/grijalva-reforma", changefreq: "monthly", priority: "0.5" },
  { path: "/propiedades/poniente-3", changefreq: "monthly", priority: "0.5" },
  { path: "/propiedades/americas-reforma", changefreq: "monthly", priority: "0.5" },
  { path: "/administracion-de-propiedades-veracruz", changefreq: "monthly", priority: "0.9" },
  { path: "/renta-de-propiedades-veracruz", changefreq: "monthly", priority: "0.9" },
  { path: "/mantenimiento-de-propiedades-veracruz", changefreq: "monthly", priority: "0.9" },
  { path: "/como-funciona", changefreq: "monthly", priority: "0.7" },
  { path: "/blog", changefreq: "weekly", priority: "0.8" },
  { path: "/contacto", changefreq: "yearly", priority: "0.7" },
  { path: "/terminos-y-condiciones", changefreq: "yearly", priority: "0.3" },
  { path: "/aviso-de-privacidad", changefreq: "yearly", priority: "0.3" },
  ...[
    "como-administrar-una-propiedad-en-veracruz",
    "errores-al-rentar-un-local-comercial-veracruz",
    "cuanto-cobrar-de-renta-en-veracruz",
    "como-encontrar-inquilinos-confiables",
    "administracion-de-propiedades-vale-la-pena",
    "problemas-comunes-con-inquilinos",
    "mantenimiento-preventivo-propiedades",
    "como-rentar-si-no-vives-en-veracruz",
    "tiempo-promedio-para-rentar-propiedad",
    "como-aumentar-el-valor-de-una-propiedad-en-renta",
    "terrenos-mas-caros-veracruz-boca-del-rio",
    "terrenos-mas-baratos-veracruz-boca-del-rio",
    "renta-buena-inversion",
    "limpieza-de-cisternas-y-tinacos-veracruz",
    "impermeabilizacion-en-veracruz",
    "problemas-de-plomeria-mas-comunes",
    "renovar-instalaciones-electricas-viejas",
    "administracion-de-condominios-areas-comunes",
    "mantenimiento-correctivo-propiedades",
    "como-eliminar-y-prevenir-salitre",
    "airbnb-vs-renta-largo-plazo-veracruz",
    "rentar-propiedad-a-oxxo-six-cadenas-nacionales",
  ].map((slug) => ({ path: `/blog/${slug}`, changefreq: "monthly", priority: "0.6" })),
]

function generateSitemap(entries) {
  const urls = entries.map((e) =>
    [
      `  <url>`,
      `    <loc>${BASE_URL}${e.path}</loc>`,
      e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
      e.priority ? `    <priority>${e.priority}</priority>` : null,
      `  </url>`,
    ]
      .filter(Boolean)
      .join("\n"),
  )

  return [
    `<?xml version="1.0" encoding="UTF-8"?>`,
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
    ...urls,
    `</urlset>`,
  ].join("\n")
}

writeFileSync(resolve("public/sitemap.xml"), generateSitemap(entries))
console.log(`sitemap.xml written (${entries.length} entries)`)
