import { Link } from "react-router-dom";

const articles = [
  { slug: "#", title: "Cómo delegar la administración de tu propiedad", tag: "Conversión" },
  { slug: "#", title: "Cuánto cuesta administrar una propiedad en Veracruz", tag: "Comercial" },
  { slug: "#", title: "Errores al rentar una propiedad", tag: "Tráfico" },
  { slug: "#", title: "Cómo elegir inquilinos confiables", tag: "Conversión" },
  { slug: "#", title: "Qué incluye la administración de propiedades", tag: "Comercial" },
  { slug: "#", title: "Beneficios de contratar una empresa de administración", tag: "Comercial" },
  { slug: "#", title: "Cómo evitar problemas con inquilinos", tag: "Tráfico" },
  { slug: "#", title: "Invertir en propiedades en Veracruz", tag: "Tráfico" },
  { slug: "#", title: "Administración vs autogestión", tag: "Comercial" },
  { slug: "#", title: "Qué hacer si vives fuera y tienes propiedad", tag: "Conversión" },
];

export default function Blog() {
  return (
    <>
      <section className="section-padding" style={{ background: "var(--hero-gradient)" }}>
        <div className="container-narrow text-primary-foreground">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Guías para propietarios inteligentes</h1>
          <p className="text-lg text-primary-foreground/80">Consejos y recursos sobre administración de propiedades.</p>
        </div>
      </section>
      <section className="section-padding">
        <div className="container-narrow">
          <div className="grid md:grid-cols-2 gap-6">
            {articles.map((a, i) => (
              <article key={i} className="bg-card border rounded-xl p-6 hover:shadow-lg hover:border-accent/30 transition-all">
                <span className="text-xs font-semibold text-accent bg-accent/10 px-3 py-1 rounded-full">{a.tag}</span>
                <h2 className="text-lg font-bold text-foreground mt-3">{a.title}</h2>
                <p className="text-sm text-muted-foreground mt-2">Próximamente</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
