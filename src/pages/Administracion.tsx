import { CheckCircle2, BarChart3, FileText, Phone, Clock } from "lucide-react";
import adminImg from "@/assets/admin-service.jpg";
import WhatsAppContactForm from "@/components/WhatsAppContactForm";

const proceso = [
  { icon: FileText, title: "Contratos y documentación", desc: "Elaboramos y gestionamos todos los contratos, garantizando el cumplimiento legal y la protección de tu inversión." },
  { icon: BarChart3, title: "Cobranza y reportes", desc: "Realizamos el cobro puntual de rentas y te entregamos reportes detallados del estado financiero de tu propiedad." },
  { icon: Phone, title: "Atención a inquilinos", desc: "Somos el punto de contacto para cualquier solicitud o incidencia, sin que tú tengas que intervenir." },
  { icon: Clock, title: "Supervisión constante", desc: "Visitas periódicas para verificar el estado de tu propiedad y prevenir problemas antes de que ocurran." },
];

export default function Administracion() {
  return (
    <>
      {/* Hero */}
      <section className="section-padding" style={{ background: "var(--hero-gradient)" }}>
        <div className="container-narrow text-primary-foreground">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Administración completa de propiedades</h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl">
            Nos encargamos de todo: cobros, inquilinos, reportes y supervisión. Tú solo recibes resultados.
          </p>
        </div>
      </section>

      {/* Imagen + intro */}
      <section className="section-padding">
        <div className="container-narrow grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Tu propiedad en las mejores manos</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Con más de 25 años de experiencia, administramos propiedades residenciales y comerciales en Veracruz, Boca del Río y la Riviera Veracruzana. Nuestro enfoque integral te permite despreocuparte por completo.
            </p>
            <ul className="space-y-3">
              {["Propietarios fuera de la ciudad", "Inversionistas con múltiples propiedades", "Empresas con inmuebles en la zona"].map((i) => (
                <li key={i} className="flex items-center gap-3 text-foreground">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0" /> {i}
                </li>
              ))}
            </ul>
          </div>
          <img src={adminImg} alt="Equipo de administración revisando reportes" width={1280} height={720} loading="lazy" className="rounded-xl shadow-xl" />
        </div>
      </section>

      {/* Proceso detallado */}
      <section className="section-padding bg-section-light">
        <div className="container-narrow">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-4">¿Qué incluye nuestro servicio?</h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-10">
            Cada aspecto de la administración está cubierto para que tú no tengas que preocuparte por nada.
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            {proceso.map((p) => (
              <div key={p.title} className="bg-card border rounded-xl p-6 hover:shadow-lg hover:border-accent/30 transition-all duration-300">
                <p.icon className="w-8 h-8 text-accent mb-3" />
                <h3 className="font-bold text-foreground mb-1">{p.title}</h3>
                <p className="text-sm text-muted-foreground">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Precio */}
      <section className="section-padding">
        <div className="container-narrow max-w-xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Modelo transparente</h2>
          <div className="bg-card border rounded-xl p-8">
            <p className="text-4xl font-extrabold text-accent mb-2">10% mensual</p>
            <p className="text-muted-foreground">del ingreso de renta. Sin costos ocultos ni sorpresas.</p>
          </div>
        </div>
      </section>

      {/* Formulario CTA */}
      <section className="section-padding bg-section-light">
        <div className="container-narrow max-w-xl mx-auto">
          <WhatsAppContactForm service="administración de propiedades" />
        </div>
      </section>
    </>
  );
}
