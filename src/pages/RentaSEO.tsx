import { CheckCircle2, Search, Users, FileText, Megaphone, ShieldCheck, Clock, TrendingDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import SEOHead from "@/components/SEOHead";
import heroImg from "@/assets/service-renta.jpg";

const WHATSAPP_URL = "https://wa.me/529211234567?text=Hola%2C%20quiero%20información%20sobre%20renta%20de%20propiedades%20en%20Veracruz";

const CTA = ({ text = "Quiero rentar mi propiedad" }: { text?: string }) => (
  <div className="text-center py-4">
    <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
      <Button variant="cta" size="lg" className="text-base">
        <MessageCircle className="w-5 h-5" /> {text}
      </Button>
    </a>
  </div>
);

const faqs = [
  { q: "¿Cuánto tardan en encontrar inquilino?", a: "Depende del tipo de propiedad, pero nuestro proceso optimizado reduce significativamente los tiempos de vacancia en Veracruz y Boca del Río." },
  { q: "¿Cómo filtran a los inquilinos?", a: "Realizamos una investigación completa del candidato, verificamos referencias, estabilidad laboral y hacemos entrevistas para garantizar inquilinos confiables." },
  { q: "¿Qué pasa si el inquilino no funciona?", a: "Contamos con procesos de seguimiento y, de ser necesario, gestionamos el cambio de inquilino de forma eficiente." },
];

export default function RentaSEO() {
  return (
    <>
      <SEOHead
        title="Renta de Propiedades en Veracruz | Encuentra inquilinos confiables"
        description="Rentamos tu propiedad en Veracruz con inquilinos confiables. Nos encargamos del proceso completo. Contáctanos por WhatsApp."
      />

      {/* Hero */}
      <section className="section-padding relative overflow-hidden" style={{ background: "var(--hero-gradient)" }}>
        <div className="container-narrow grid md:grid-cols-2 gap-8 items-center">
          <div className="text-primary-foreground">
            <h1 className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight">
              Renta de propiedades en Veracruz sin complicaciones
            </h1>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mb-6">
              Encontramos al inquilino ideal para tu propiedad sin que tengas que preocuparte por el proceso.
            </p>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <Button variant="hero">
                <MessageCircle className="w-5 h-5" /> Quiero rentar mi propiedad
              </Button>
            </a>
          </div>
          <div className="hidden md:block">
            <img src={heroImg} alt="Renta de propiedades en Veracruz" width={1280} height={720} className="rounded-xl shadow-2xl" />
          </div>
        </div>
      </section>

      {/* Problema */}
      <section className="section-padding">
        <div className="container-narrow max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Rentar tu propiedad no debería ser un dolor de cabeza</h2>
          <p className="text-muted-foreground leading-relaxed text-lg">
            Publicar, filtrar y negociar con inquilinos toma tiempo y puede generar riesgos. En Veracruz, Boca del Río y la Riviera Veracruzana, encontrar al inquilino correcto es clave para proteger tu inversión.
          </p>
        </div>
      </section>

      {/* Solución */}
      <section className="section-padding bg-section-light">
        <div className="container-narrow">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 text-center">Nos encargamos de todo el proceso de renta</h2>
          <div className="grid sm:grid-cols-2 gap-6 mt-8">
            {[
              { icon: Megaphone, title: "Publicación", desc: "Promocionamos tu propiedad en los canales correctos para máxima visibilidad." },
              { icon: Search, title: "Filtrado", desc: "Investigamos a los candidatos y gestionamos el checklist completo para verificarlos." },
              { icon: Users, title: "Selección", desc: "Elegimos al mejor inquilino con base en criterios rigurosos." },
              { icon: FileText, title: "Formalización", desc: "Gestionamos contratos y documentación legal completa." },
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
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 text-center">Beneficios de rentar con DEVERI</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { icon: ShieldCheck, text: "Inquilinos confiables y verificados" },
              { icon: TrendingDown, text: "Menos tiempo de vacancia" },
              { icon: Clock, text: "Proceso rápido y eficiente" },
              { icon: CheckCircle2, text: "Menor riesgo para tu inversión" },
            ].map((b) => (
              <div key={b.text} className="flex items-start gap-4 bg-card border rounded-xl p-5">
                <b.icon className="w-6 h-6 text-accent shrink-0 mt-0.5" />
                <span className="text-foreground font-medium">{b.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proceso */}
      <section className="section-padding bg-section-light">
        <div className="container-narrow">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">Nuestro proceso de colocación</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { step: "1", title: "Evaluación de la propiedad" },
              { step: "2", title: "Estrategia de renta" },
              { step: "3", title: "Promoción activa" },
              { step: "4", title: "Selección del inquilino" },
            ].map((p) => (
              <div key={p.step} className="text-center">
                <div className="w-12 h-12 rounded-full bg-accent text-accent-foreground font-bold text-xl flex items-center justify-center mx-auto mb-3">{p.step}</div>
                <p className="font-semibold text-foreground">{p.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="section-padding" style={{ background: "var(--hero-gradient)" }}>
        <div className="container-narrow text-center text-primary-foreground">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">¿Tienes una propiedad en Veracruz lista para rentar?</h2>
          <p className="text-primary-foreground/80 mb-6">Escríbenos y encontramos al inquilino ideal para ti.</p>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
            <Button variant="hero">
              <MessageCircle className="w-5 h-5" /> Quiero rentar mi propiedad
            </Button>
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding">
        <div className="container-narrow max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-8">Preguntas frecuentes</h2>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="bg-card border rounded-xl px-6">
                <AccordionTrigger className="text-left font-bold text-foreground hover:no-underline">{f.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </>
  );
}
