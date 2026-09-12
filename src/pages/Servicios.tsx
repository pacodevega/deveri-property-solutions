import { Link } from "react-router-dom";
import { Building2, Key, Wrench, Scale, ArrowRight } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import serviceAdmin from "@/assets/service-admin.webp";
import serviceRenta from "@/assets/service-renta.webp";
import serviceMantenimiento from "@/assets/service-mantenimiento.webp";
import serviceCobranza from "@/assets/service-cobranza.webp";

const services = [
  { icon: Building2, title: "Administración completa", desc: "Supervisión total, cobros, reportes y control de tu propiedad.", link: "/administracion-de-propiedades-veracruz", img: serviceAdmin },
  { icon: Key, title: "Colocación de inquilinos", desc: "Encontramos inquilinos confiables con un proceso integral.", link: "/renta-de-propiedades-veracruz", img: serviceRenta },
  { icon: Wrench, title: "Mantenimiento integral", desc: "Reparaciones, supervisión y gestión de proveedores.", link: "/mantenimiento-de-propiedades-veracruz", img: serviceMantenimiento },
  { icon: Scale, title: "Cobranza extrajudicial de rentas", desc: "Recupera rentas vencidas con GESCOB, con cobertura en todo México.", link: "/cobranza-extrajudicial-de-rentas", img: serviceCobranza },
];

export default function Servicios() {
  return (
    <>
      <SEOHead
        title="Servicios de Administración de Propiedades en Veracruz | DEVERI"
        description="Servicios completos para propietarios en Veracruz: administración, renta y mantenimiento de propiedades."
      />
      <section className="section-padding" style={{ background: "var(--hero-gradient)" }}>
        <div className="container-narrow text-primary-foreground">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Servicios completos para propietarios</h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl">Todo lo que necesitas para delegar tu propiedad en un solo lugar.</p>
        </div>
      </section>
      <section className="section-padding">
        <div className="container-narrow grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s) => (
            <Link key={s.title} to={s.link} className="group bg-card border rounded-xl overflow-hidden hover:shadow-lg hover:border-accent/30 transition-all">
              <img src={s.img} alt={s.title} width={1280} height={720} loading="lazy" className="w-full h-48 object-cover" />
              <div className="p-6">
                <s.icon className="w-10 h-10 text-accent mb-4" />
                <h2 className="text-xl font-bold text-foreground mb-2">{s.title}</h2>
                <p className="text-muted-foreground mb-4">{s.desc}</p>
                <span className="text-accent font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  Ver más <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
