import { CheckCircle2, Wrench, Zap, Droplets, PaintBucket, Building, Eye, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import heroImg from "@/assets/service-mantenimiento.jpg";

const WHATSAPP_URL = "https://wa.me/522296840727?text=Hola%2C%20quiero%20información%20sobre%20mantenimiento%20de%20propiedades%20en%20Veracruz";

const CTA = ({ text = "Quiero apoyo con mantenimiento" }: { text?: string }) => (
  <div className="text-center py-4">
    <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
      <Button variant="cta" size="lg" className="text-base">
        <MessageCircle className="w-5 h-5" /> {text}
      </Button>
    </a>
  </div>
);

export default function MantenimientoSEO() {
  return (
    <>
      <SEOHead
        title="Mantenimiento de Propiedades en Veracruz | Servicio rápido y confiable"
        description="Mantenimiento para propiedades en Veracruz sin complicaciones. Atención rápida, supervisión directa y resolución eficiente."
      />

      {/* Hero */}
      <section className="section-padding relative overflow-hidden" style={{ background: "var(--hero-gradient)" }}>
        <div className="container-narrow grid md:grid-cols-2 gap-8 items-center">
          <div className="text-primary-foreground">
            <h1 className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight">
              Mantenimiento de propiedades en Veracruz sin complicaciones
            </h1>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mb-6">
              Resolvemos el mantenimiento de tu propiedad de forma rápida y eficiente sin que tengas que intervenir.
            </p>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <Button variant="hero">
                <MessageCircle className="w-5 h-5" /> Quiero apoyo con mantenimiento
              </Button>
            </a>
          </div>
          <div className="hidden md:block">
            <img src={heroImg} alt="Mantenimiento de propiedades en Veracruz" width={1280} height={720} className="rounded-xl shadow-2xl" />
          </div>
        </div>
      </section>

      {/* Problema */}
      <section className="section-padding">
        <div className="container-narrow max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">El mantenimiento: la mayor fuente de problemas para propietarios</h2>
          <p className="text-muted-foreground leading-relaxed text-lg">
            Fugas, fallas eléctricas, deterioro y proveedores poco confiables. Si tienes propiedades en Veracruz, Boca del Río o la Riviera Veracruzana, sabes lo complicado que es mantenerlas en buen estado a distancia.
          </p>
        </div>
      </section>

      {/* Solución */}
      <section className="section-padding bg-section-light">
        <div className="container-narrow">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 text-center">Nos encargamos directamente</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
            {[
              { icon: Droplets, title: "Plomería", desc: "Reparación de fugas, instalación de tuberías y limpieza de tinacos y cisternas." },
              { icon: Zap, title: "Electricidad", desc: "Instalaciones, reparaciones y revisiones eléctricas." },
              { icon: PaintBucket, title: "Pintura", desc: "Renovación de espacios interiores y exteriores." },
              { icon: Building, title: "Impermeabilización", desc: "Protección contra humedad y filtraciones." },
              { icon: Wrench, title: "Mantenimiento correctivo", desc: "Reparaciones y soluciones ante fallas o deterioro." },
              { icon: CheckCircle2, title: "Limpieza", desc: "Limpieza de áreas comunes y espacios compartidos." },
            ].map((s) => (
              <div key={s.title} className="bg-card border rounded-xl p-6 hover:shadow-lg hover:border-accent/30 transition-all">
                <s.icon className="w-8 h-8 text-accent mb-3" />
                <h3 className="font-bold text-foreground mb-1">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
          <CTA />
        </div>
      </section>

      {/* Beneficios */}
      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 text-center">¿Por qué elegirnos?</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { icon: Zap, text: "Atención rápida y oportuna" },
              { icon: Eye, text: "Supervisión directa en cada servicio" },
              { icon: CheckCircle2, text: "Resolución eficiente y sin fricciones" },
              { icon: ShieldCheck, text: "Sin depender de terceros poco confiables" },
            ].map((b) => (
              <div key={b.text} className="flex items-start gap-4 bg-card border rounded-xl p-5">
                <b.icon className="w-6 h-6 text-accent shrink-0 mt-0.5" />
                <span className="text-foreground font-medium">{b.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diferenciador */}
      <section className="section-padding bg-section-light">
        <div className="container-narrow max-w-3xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Mantenimiento integrado con administración</h2>
          <p className="text-muted-foreground text-lg">
            Al integrar el mantenimiento con la administración de tu propiedad, los problemas se detectan y resuelven antes de que escalen. Menos sorpresas, menos gastos, mejor conservación.
          </p>
        </div>
      </section>

      {/* CTA final */}
      <section className="section-padding" style={{ background: "var(--hero-gradient)" }}>
        <div className="container-narrow text-center text-primary-foreground">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">¿Necesitas mantenimiento para tu propiedad en Veracruz?</h2>
          <p className="text-primary-foreground/80 mb-6">Escríbenos y resolvemos tu problema de forma rápida y eficiente.</p>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
            <Button variant="hero">
              <MessageCircle className="w-5 h-5" /> Quiero resolver el mantenimiento
            </Button>
          </a>
        </div>
      </section>
    </>
  );
}
