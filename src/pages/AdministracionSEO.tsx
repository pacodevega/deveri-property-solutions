import { CheckCircle2, BarChart3, ShieldCheck, Wrench, Eye, ClipboardList, TrendingUp, Building } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import SEOHead from "@/components/SEOHead";
import heroImg from "@/assets/service-admin.webp";

const WHATSAPP_URL = "https://wa.me/522296840727?text=Hola%2C%20quiero%20información%20sobre%20administración%20de%20propiedades%20en%20Veracruz";

const CTA = ({ text = "Quiero delegar mi propiedad" }: { text?: string }) => (
  <div className="text-center py-4">
    <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
      <Button variant="cta" size="lg" className="text-base">
        <MessageCircle className="w-5 h-5" /> {text}
      </Button>
    </a>
  </div>
);

const faqs = [
  { q: "¿Tengo que involucrarme en la operación?", a: "No. Nos encargamos de todo: cobros, inquilinos, mantenimiento y supervisión. Tú solo recibes reportes y resultados." },
  { q: "¿Cómo controlo lo que pasa con mi propiedad?", a: "Recibes reportes periódicos con el estado financiero, incidencias y estatus de tu propiedad en Veracruz." },
  { q: "¿Qué pasa si hay problemas con inquilinos o mantenimiento?", a: "Nosotros lo resolvemos directamente. Contamos con equipo propio de mantenimiento y un proceso de atención eficiente." },
];

export default function AdministracionSEO() {
  return (
    <>
      <SEOHead
        title="Administración de Propiedades en Veracruz | Renta sin complicaciones"
        description="Administra tu propiedad en Veracruz sin involucrarte. Nos encargamos de renta, cobros y mantenimiento. Escríbenos por WhatsApp."
      />

      {/* Hero */}
      <section className="section-padding relative overflow-hidden" style={{ background: "var(--hero-gradient)" }}>
        <div className="container-narrow grid md:grid-cols-2 gap-8 items-center">
          <div className="text-primary-foreground">
            <h1 className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight">
              Administración de propiedades en Veracruz sin complicaciones
            </h1>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mb-6">
              Nos encargamos de tu propiedad en Veracruz para que tú solo recibas ingresos. Administramos, cobramos y resolvemos todo sin que tengas que involucrarte.
            </p>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <Button variant="hero">
                <MessageCircle className="w-5 h-5" /> Quiero delegar mi propiedad
              </Button>
            </a>
          </div>
          <div className="hidden md:block">
            <img src={heroImg} alt="Administración de propiedades en Veracruz" width={1280} height={720} className="rounded-xl shadow-2xl" />
          </div>
        </div>
      </section>

      {/* Problema */}
      <section className="section-padding">
        <div className="container-narrow max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Administrar una propiedad no es pasivo</h2>
          <p className="text-muted-foreground leading-relaxed text-lg">
            Cobros, inquilinos, mantenimiento y problemas constantes pueden convertir tu inversión en una carga. Si tienes propiedades en Veracruz, Boca del Río o la Riviera Veracruzana, sabes lo difícil que es mantener el control sin estar presente.
          </p>
        </div>
      </section>

      {/* Solución */}
      <section className="section-padding bg-section-light">
        <div className="container-narrow">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 text-center">En DEVERI gestionamos tu propiedad de principio a fin</h2>
          <div className="grid sm:grid-cols-2 gap-6 mt-8">
            {[
              { icon: BarChart3, title: "Cobranza puntual", desc: "Seguimiento riguroso de pagos para asegurar tus ingresos." },
              { icon: Eye, title: "Supervisión constante", desc: "Visitas periódicas para verificar el estado de tu propiedad." },
              { icon: ShieldCheck, title: "Atención a inquilinos", desc: "Somos el punto de contacto para cualquier incidencia." },
              { icon: Wrench, title: "Resolución de problemas", desc: "Mantenimiento y reparaciones sin que intervengas." },
            ].map((s) => (
              <div key={s.title} className="bg-card border rounded-xl p-6 hover:shadow-lg hover:border-accent/30 transition-all">
                <s.icon className="w-8 h-8 text-accent mb-3" />
                <h3 className="font-bold text-foreground mb-1">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-foreground font-semibold mt-8 text-lg">Tú no intervienes. Nosotros operamos.</p>
          <CTA />
        </div>
      </section>

      {/* Beneficios */}
      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 text-center">Beneficios para ti como propietario</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { icon: TrendingUp, text: "Ingresos constantes y puntuales" },
              { icon: CheckCircle2, text: "Cero estrés operativo" },
              { icon: ClipboardList, text: "Control total con reportes detallados" },
              { icon: Building, text: "Mayor conservación de tu inmueble" },
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
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">Cómo funciona</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { step: "1", title: "Analizamos tu propiedad" },
              { step: "2", title: "Definimos estrategia" },
              { step: "3", title: "Gestionamos operación" },
              { step: "4", title: "Administramos mensualmente" },
            ].map((p) => (
              <div key={p.step} className="text-center">
                <div className="w-12 h-12 rounded-full bg-accent text-accent-foreground font-bold text-xl flex items-center justify-center mx-auto mb-3">{p.step}</div>
                <p className="font-semibold text-foreground">{p.title}</p>
              </div>
            ))}
          </div>
          <CTA text="Quiero que administren mi propiedad" />
        </div>
      </section>

      {/* Diferenciador */}
      <section className="section-padding">
        <div className="container-narrow max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">No solo administramos, operamos propiedades con experiencia real</h2>
          <ul className="space-y-3">
            {["Supervisión directa en cada propiedad", "Mantenimiento integrado con equipo propio", "Control activo y seguimiento constante"].map((i) => (
              <li key={i} className="flex items-center gap-3 text-foreground">
                <CheckCircle2 className="w-5 h-5 text-accent shrink-0" /> {i}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA final */}
      <section className="section-padding" style={{ background: "var(--hero-gradient)" }}>
        <div className="container-narrow text-center text-primary-foreground">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">¿Listo para delegar tu propiedad en Veracruz?</h2>
          <p className="text-primary-foreground/80 mb-6">Escríbenos y te explicamos cómo podemos ayudarte.</p>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
            <Button variant="hero">
              <MessageCircle className="w-5 h-5" /> Quiero que administren mi propiedad
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
