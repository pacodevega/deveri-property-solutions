import { Link } from "react-router-dom";
import { Building2, Key, Wrench, ArrowRight } from "lucide-react";

const services = [
  { icon: Building2, title: "Administración completa", desc: "Supervisión total, cobros, reportes y control de tu propiedad.", link: "/servicios/administracion" },
  { icon: Key, title: "Colocación de inquilinos", desc: "Encontramos inquilinos confiables con un proceso integral.", link: "/servicios/renta" },
  { icon: Wrench, title: "Mantenimiento integral", desc: "Reparaciones, supervisión y gestión de proveedores.", link: "/servicios/mantenimiento" },
];

export default function Servicios() {
  return (
    <>
      <section className="section-padding" style={{ background: "var(--hero-gradient)" }}>
        <div className="container-narrow text-primary-foreground">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Servicios completos para propietarios</h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl">Todo lo que necesitas para delegar tu propiedad en un solo lugar.</p>
        </div>
      </section>
      <section className="section-padding">
        <div className="container-narrow grid md:grid-cols-3 gap-8">
          {services.map((s) => (
            <Link key={s.title} to={s.link} className="group bg-card border rounded-xl p-8 hover:shadow-lg hover:border-accent/30 transition-all">
              <s.icon className="w-10 h-10 text-accent mb-4" />
              <h2 className="text-xl font-bold text-foreground mb-2">{s.title}</h2>
              <p className="text-muted-foreground mb-4">{s.desc}</p>
              <span className="text-accent font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                Ver más <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
