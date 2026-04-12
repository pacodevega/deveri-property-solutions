import { CheckCircle2, Shield, Search, FileSignature, Home, Users } from "lucide-react";
import rentaImg from "@/assets/renta-service.jpg";
import WhatsAppContactForm from "@/components/WhatsAppContactForm";

const pasos = [
  { icon: Search, title: "Promoción profesional", desc: "Publicamos tu propiedad en los canales más efectivos con fotografía profesional y descripciones atractivas." },
  { icon: Users, title: "Filtrado de candidatos", desc: "Realizamos investigación exhaustiva: antecedentes, referencias laborales, historial crediticio y más." },
  { icon: FileSignature, title: "Contratos seguros", desc: "Elaboramos contratos sólidos que protegen tu inversión, incluyendo cláusulas claras y garantías." },
  { icon: Home, title: "Entrega de propiedad", desc: "Coordinamos la entrega con inventario detallado del estado del inmueble y acuerdos claros." },
];

export default function Renta() {
  return (
    <>
      {/* Hero */}
      <section className="section-padding" style={{ background: "var(--hero-gradient)" }}>
        <div className="container-narrow text-primary-foreground">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Colocación de inquilinos confiables</h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl">
            Encontramos al inquilino ideal con un proceso integral que reduce riesgos y maximiza tu tranquilidad.
          </p>
        </div>
      </section>

      {/* Imagen + intro */}
      <section className="section-padding">
        <div className="container-narrow grid md:grid-cols-2 gap-12 items-center">
          <img src={rentaImg} alt="Entrega de llaves a inquilino" width={1280} height={720} loading="lazy" className="rounded-xl shadow-xl" />
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Menos riesgos, mejores inquilinos</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Nuestro proceso de colocación está diseñado para minimizar el riesgo de impago y problemas con inquilinos. Nos encargamos de todo, desde la promoción hasta la firma del contrato.
            </p>
            <div className="bg-accent/10 rounded-xl p-6 flex items-start gap-4">
              <Shield className="w-8 h-8 text-accent shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-foreground mb-1">Investigación completa</h3>
                <p className="text-sm text-muted-foreground">Verificamos antecedentes, referencias, historial crediticio y capacidad de pago antes de aprobar cualquier candidato.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Proceso paso a paso */}
      <section className="section-padding bg-section-light">
        <div className="container-narrow">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-4">Nuestro proceso</h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-10">
            Un proceso probado que garantiza inquilinos confiables para tu propiedad.
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            {pasos.map((p, idx) => (
              <div key={p.title} className="bg-card border rounded-xl p-6 hover:shadow-lg hover:border-accent/30 transition-all duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <span className="bg-accent text-accent-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">{idx + 1}</span>
                  <p.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-bold text-foreground mb-1">{p.title}</h3>
                <p className="text-sm text-muted-foreground">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Qué incluye */}
      <section className="section-padding">
        <div className="container-narrow max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 text-center">¿Qué incluye?</h2>
          <ul className="grid sm:grid-cols-2 gap-4">
            {[
              "Fotografía profesional del inmueble",
              "Publicación en portales inmobiliarios",
              "Atención y filtrado de prospectos",
              "Investigación de antecedentes",
              "Elaboración de contrato",
              "Inventario y entrega del inmueble",
            ].map((i) => (
              <li key={i} className="flex items-center gap-3 text-foreground bg-card border rounded-lg p-4">
                <CheckCircle2 className="w-5 h-5 text-accent shrink-0" /> {i}
              </li>
            ))}
          </ul>
          <div className="text-center mt-8">
            <div className="bg-card border rounded-xl p-6 inline-block">
              <p className="text-sm text-muted-foreground mb-1">Costo de colocación</p>
              <p className="text-3xl font-extrabold text-accent">1 mes de renta</p>
            </div>
          </div>
        </div>
      </section>

      {/* Formulario CTA */}
      <section className="section-padding bg-section-light">
        <div className="container-narrow max-w-xl mx-auto">
          <WhatsAppContactForm service="renta y colocación de inquilinos" />
        </div>
      </section>
    </>
  );
}
