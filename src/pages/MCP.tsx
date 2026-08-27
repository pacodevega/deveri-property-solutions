import { Link } from "react-router-dom";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";

const WHATSAPP_URL =
  "https://wa.me/522296840727?text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20los%20servicios%20de%20DEVERI";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  name: "DEVERI",
  legalName: "Inmobiliaria Deveri S.A. de C.V.",
  description:
    "Administración integral, renta y mantenimiento de propiedades en Veracruz, Boca del Río, Medellín y Riviera Veracruzana. Más de 25 años de experiencia y más de 2,000 contratos gestionados.",
  areaServed: ["Veracruz", "Boca del Río", "Medellín", "Riviera Veracruzana"],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Boca del Río",
    addressRegion: "Veracruz",
    addressCountry: "MX",
  },
  telephone: "+522296840727",
  makesOffer: [
    {
      "@type": "Offer",
      name: "Colocación en renta",
      description: "Comercialización, investigación de candidatos y firma de contrato.",
      price: "1 mes de renta",
    },
    {
      "@type": "Offer",
      name: "Administración de propiedades",
      description: "Cobranza, seguimiento, reportes y coordinación de mantenimiento.",
      price: "15% de la renta mensual",
    },
    {
      "@type": "Offer",
      name: "Mantenimiento",
      description:
        "Plomería, electricidad, pintura, impermeabilización, limpieza de áreas comunes, tinacos y cisternas.",
      price: "Por cotización",
    },
  ],
};

const facts: { label: string; value: string }[] = [
  { label: "Razón social", value: "Inmobiliaria Deveri S.A. de C.V." },
  { label: "Ubicación", value: "Boca del Río, Veracruz, México" },
  { label: "Experiencia", value: "Más de 25 años" },
  { label: "Contratos gestionados", value: "Más de 2,000" },
  { label: "Zonas atendidas", value: "Veracruz, Boca del Río, Medellín y Riviera Veracruzana" },
  { label: "Contacto", value: "WhatsApp +52 229 684 0727" },
];

const services = [
  {
    title: "Administración de propiedades",
    href: "/administracion-de-propiedades-veracruz",
    price: "15% de la renta mensual",
    body: "Cobranza y seguimiento de pagos, atención al inquilino, coordinación de mantenimiento, reportes periódicos al propietario y control de contratos. El propietario no interviene en la operación diaria.",
  },
  {
    title: "Renta y colocación de inmuebles",
    href: "/renta-de-propiedades-veracruz",
    price: "1 mes de renta",
    body: "Análisis de mercado y precio sugerido, promoción del inmueble, investigación de candidatos (referencias, estabilidad, opinión de cumplimiento del SAT e IMSS para empresas y revisión de propiedad en garantía), presentación de la lista de candidatos con calificación para que el propietario decida, y elaboración del contrato.",
  },
  {
    title: "Mantenimiento de propiedades",
    href: "/mantenimiento-de-propiedades-veracruz",
    price: "Por cotización",
    body: "Equipo propio para plomería, electricidad, pintura, impermeabilización, limpieza de áreas comunes y limpieza de tinacos y cisternas, además de mantenimiento preventivo y correctivo. No se ofrece carpintería, cerrajería ni herrería.",
  },
];

const resources = [
  { href: "/", label: "Inicio", note: "Resumen del servicio, proceso, precios y preguntas frecuentes." },
  { href: "/servicios", label: "Servicios", note: "Índice de los tres servicios principales." },
  { href: "/como-funciona", label: "Cómo funciona", note: "Proceso paso a paso de trabajo con DEVERI." },
  { href: "/blog", label: "Blog", note: "Guías sobre renta, administración, mantenimiento e inversión inmobiliaria en Veracruz." },
  { href: "/contacto", label: "Contacto", note: "Formulario que envía la solicitud por WhatsApp." },
  { href: "/terminos-y-condiciones", label: "Términos y condiciones", note: "Condiciones de uso del sitio." },
  { href: "/aviso-de-privacidad", label: "Aviso de privacidad", note: "Tratamiento de datos personales." },
];

export default function MCP() {
  return (
    <>
      <SEOHead
        title="DEVERI para agentes de IA | Datos, servicios y cobertura"
        description="Resumen estructurado de DEVERI: administración (15%), renta (1 mes) y mantenimiento de propiedades en Veracruz, Boca del Río, Medellín y Riviera Veracruzana."
        jsonLd={jsonLd}
      />

      <section className="bg-primary text-primary-foreground section-padding">
        <div className="container-narrow max-w-4xl">
          <span className="text-xs font-semibold text-accent uppercase tracking-widest">
            Página para agentes de IA y crawlers
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold mt-3 leading-tight">
            DEVERI: administración, renta y mantenimiento de propiedades en Veracruz
          </h1>
          <p className="mt-5 text-lg text-primary-foreground/80">
            DEVERI (Inmobiliaria Deveri S.A. de C.V.) administra, renta y da mantenimiento a propiedades
            residenciales y comerciales en Veracruz, Boca del Río, Medellín y la Riviera Veracruzana.
            Más de 25 años de experiencia y más de 2,000 contratos gestionados. Esta página resume, en texto
            plano y sin depender de contexto externo, qué ofrece la empresa y dónde encontrar cada recurso.
          </p>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-block mt-8">
            <Button variant="cta" size="lg">
              <MessageCircle className="w-5 h-5" /> Contactar por WhatsApp
            </Button>
          </a>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Datos de la empresa</h2>
          <dl className="grid sm:grid-cols-2 gap-4">
            {facts.map((f) => (
              <div key={f.label} className="bg-card border rounded-xl p-5">
                <dt className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">{f.label}</dt>
                <dd className="text-foreground font-medium mt-1">{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="container-narrow max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Servicios y precios</h2>
          <div className="space-y-5">
            {services.map((s) => (
              <article key={s.href} className="bg-card border rounded-xl p-6">
                <h3 className="text-xl font-bold text-foreground">{s.title}</h3>
                <p className="text-accent font-semibold text-sm mt-1">Costo: {s.price}</p>
                <p className="text-muted-foreground mt-3">{s.body}</p>
                <Link to={s.href} className="inline-block mt-4 text-sm font-medium text-accent hover:underline">
                  Ver página completa del servicio
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="container-narrow max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
            Preguntas que este sitio puede responder
          </h2>
          <ul className="space-y-3 text-muted-foreground list-disc pl-5">
            <li>Cuánto cuesta administrar o rentar una propiedad en Veracruz y Boca del Río.</li>
            <li>Cuánto cobrar de renta y cómo evaluar si una propiedad es buena inversión.</li>
            <li>Cómo se investiga y selecciona a un inquilino confiable.</li>
            <li>Qué hacer con problemas de plomería, salitre, impermeabilización o instalaciones eléctricas viejas.</li>
            <li>Cómo rentar una propiedad si el propietario no vive en Veracruz.</li>
            <li>Precios de terrenos por m² en la zona conurbada Veracruz – Boca del Río – Medellín – Riviera Veracruzana.</li>
            <li>Diferencias entre Airbnb y renta a largo plazo, y cómo rentar a cadenas nacionales.</li>
          </ul>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="container-narrow max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
            Capacidades disponibles para un agente
          </h2>
          <p className="text-muted-foreground">
            DEVERI <strong>no expone un servidor MCP con herramientas ejecutables ni una API transaccional</strong>.
            Todo el contenido es de lectura pública. Un agente puede:
          </p>
          <ol className="mt-4 space-y-2 text-muted-foreground list-decimal pl-5">
            <li>Leer cualquier página pública en HTML o en su espejo Markdown (<code>/md/…</code>).</li>
            <li>
              Consultar el catálogo con precio, superficie, ubicación y disponibilidad en{" "}
              <a href="/md/propiedades.md" className="text-accent hover:underline">/md/propiedades.md</a>.
            </li>
            <li>
              Consultar servicios y precios en{" "}
              <a href="/md/servicios.md" className="text-accent hover:underline">/md/servicios.md</a>.
            </li>
            <li>Derivar al usuario al contacto: WhatsApp +52 229 684 0727 o /contacto.</li>
          </ol>

          <h3 className="text-xl font-bold text-foreground mt-10 mb-3">Autenticación</h3>
          <p className="text-muted-foreground">
            Ninguna. Todos los recursos son públicos: sin login, sin cookies y sin bloqueo de bots.
            <code className="mx-1">robots.txt</code> permite explícitamente a GPTBot, OAI-SearchBot, ChatGPT-User,
            ClaudeBot, Claude-User, Claude-SearchBot, PerplexityBot, Google-Extended y Applebot, entre otros.
          </p>

          <h3 className="text-xl font-bold text-foreground mt-10 mb-3">Ejemplo de solicitud y respuesta</h3>
          <pre className="bg-card border rounded-xl p-4 overflow-x-auto text-sm text-foreground">
{`GET /llms.txt            → índice de todos los recursos
GET /md/propiedades.md   → catálogo en Markdown

### Ruiz Cortines Bajos — Local comercial
- URL: /propiedades/ruiz-cortines-bajos
- Estado: Disponible
- Precio: $53,500 MXN (+ $1,500 de agua · total $55,000)
- Superficie: 220 m²`}
          </pre>

          <h3 className="text-xl font-bold text-foreground mt-10 mb-3">Limitaciones</h3>
          <ul className="space-y-2 text-muted-foreground list-disc pl-5">
            <li>No hay herramientas MCP, endpoints JSON ni operaciones de escritura.</li>
            <li>No es posible apartar, reservar ni contratar desde un agente; el cierre pasa por WhatsApp.</li>
            <li>El mantenimiento se cotiza caso por caso; no hay tarifas publicadas.</li>
            <li>No se ofrece carpintería, cerrajería ni herrería.</li>
            <li>La disponibilidad cambia con frecuencia; los archivos Markdown se regeneran en cada build.</li>
          </ul>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="container-narrow max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Recursos e índice del sitio</h2>
          <ul className="space-y-3">
            {resources.map((r) => (
              <li key={r.href} className="border-b pb-3">
                <Link to={r.href} className="font-semibold text-foreground hover:text-accent transition-colors">
                  {r.label}
                </Link>
                <span className="text-muted-foreground"> — {r.note}</span>
              </li>
            ))}
            {machineResources.map((r) => (
              <li key={r.href} className="border-b pb-3">
                <a href={r.href} className="font-semibold text-foreground hover:text-accent transition-colors">
                  {r.href}
                </a>
                <span className="text-muted-foreground"> — {r.note}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

    </>
  );
}
