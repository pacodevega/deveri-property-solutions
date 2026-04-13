import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";

const articles = [
  { slug: "/blog/como-administrar-una-propiedad-en-veracruz", title: "Cómo administrar una propiedad en Veracruz sin complicaciones", tag: "Administración" },
  { slug: "/blog/errores-al-rentar-un-local-comercial-veracruz", title: "Errores al rentar un local comercial en Veracruz", tag: "Renta" },
  { slug: "/blog/cuanto-cobrar-de-renta-en-veracruz", title: "Cuánto cobrar de renta en Veracruz (guía 2026)", tag: "Renta" },
  { slug: "/blog/como-encontrar-inquilinos-confiables", title: "Cómo encontrar inquilinos confiables para tu propiedad", tag: "Renta" },
  { slug: "/blog/administracion-de-propiedades-vale-la-pena", title: "¿Vale la pena contratar administración de propiedades?", tag: "Administración" },
  { slug: "/blog/problemas-comunes-con-inquilinos", title: "Problemas comunes con inquilinos y cómo evitarlos", tag: "Renta" },
  { slug: "/blog/mantenimiento-preventivo-propiedades", title: "Mantenimiento preventivo para propiedades: lo que debes saber", tag: "Mantenimiento" },
  { slug: "/blog/como-rentar-si-no-vives-en-veracruz", title: "Cómo rentar tu propiedad si no vives en Veracruz", tag: "Administración" },
  { slug: "/blog/tiempo-promedio-para-rentar-propiedad", title: "Cuánto tiempo tarda en rentarse una propiedad en Veracruz", tag: "Renta" },
  { slug: "/blog/como-aumentar-el-valor-de-una-propiedad-en-renta", title: "Cómo aumentar el valor de tu propiedad en renta", tag: "Inversión" },
];

export default function Blog() {
  return (
    <>
      <SEOHead
        title="Blog | Guías para propietarios en Veracruz | DEVERI"
        description="Consejos y guías sobre administración de propiedades, renta e inversión inmobiliaria en Veracruz, Boca del Río y Riviera Veracruzana."
      />
      <section className="section-padding" style={{ background: "var(--hero-gradient)" }}>
        <div className="container-narrow text-primary-foreground">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Guías para propietarios inteligentes</h1>
          <p className="text-lg text-primary-foreground/80">Consejos y recursos sobre administración de propiedades en Veracruz.</p>
        </div>
      </section>
      <section className="section-padding">
        <div className="container-narrow">
          <div className="grid md:grid-cols-2 gap-6">
            {articles.map((a, i) => (
              <Link key={i} to={a.slug}>
                <article className="bg-card border rounded-xl p-6 hover:shadow-lg hover:border-accent/30 transition-all h-full">
                  <span className="text-xs font-semibold text-accent bg-accent/10 px-3 py-1 rounded-full">{a.tag}</span>
                  <h2 className="text-lg font-bold text-foreground mt-3">{a.title}</h2>
                  <p className="text-sm text-muted-foreground mt-2">Leer artículo →</p>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
