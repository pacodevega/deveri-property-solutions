import { CheckCircle2, FileSearch, Phone, Handshake, ClipboardList, TrendingUp, ShieldCheck, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import SEOHead from "@/components/SEOHead";
import heroImg from "@/assets/service-cobranza.png.asset.json";
import gescobLogo from "@/assets/clients/gescob.png";

const WHATSAPP_URL = "https://wa.me/522296840727?text=Hola%2C%20quiero%20informes%20sobre%20cobranza%20extrajudicial%20de%20rentas%20con%20GESCOB";

const CTA = ({ text = "Quiero informes de cobranza" }: { text?: string }) => (
  <div className="text-center py-4">
    <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
      <Button variant="cta" size="lg" className="text-base">
        <MessageCircle className="w-5 h-5" /> {text}
      </Button>
    </a>
  </div>
);

const faqs = [
  { q: "¿La cobranza es solo para propiedades administradas por DEVERI?", a: "No. El servicio está disponible para cualquier arrendador, inmobiliaria o administradora que tenga rentas vencidas, independientemente de quién haya gestionado el inmueble." },
  { q: "¿En qué zonas opera el servicio?", a: "GESCOB tiene cobertura en todo México. Puedes enviar tu cartera desde cualquier ciudad para su gestión estratégica." },
  { q: "¿Qué tipo de adeudos pueden recuperarse?", a: "Rentas vencidas, pagos pendientes de mantenimiento, daños no cubiertos y otros conceptos derivados del contrato de arrendamiento, siempre conforme a la documentación disponible." },
  { q: "¿El proceso es confidencial?", a: "Sí. Toda la información se maneja de forma confidencial y el seguimiento se documenta para que tengas visibilidad de los avances." },
];

export default function CobranzaSEO() {
  return (
    <>
      <SEOHead
        title="Cobranza Extrajudicial de Rentas en México | DEVERI + GESCOB"
        description="Recupera rentas vencidas con DEVERI y GESCOB. Cobranza extrajudicial profesional con cobertura nacional para arrendadores, inmobiliarias y administradoras."
      />

      {/* Hero */}
      <section className="section-padding relative overflow-hidden" style={{ background: "var(--hero-gradient)" }}>
        <div className="container-narrow grid md:grid-cols-2 gap-8 items-center">
          <div className="text-primary-foreground">
            <div className="bg-white rounded-xl px-5 py-3 inline-block mb-6 shadow-lg">
              <img src={gescobLogo} alt="GESCOB — Gestión Estratégica de Cobranza" className="h-10 md:h-12 w-auto" />
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight">
              Cobranza extrajudicial de rentas en México
            </h1>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mb-6">
              Gestionamos la recuperación de rentas vencidas a través de GESCOB, nuestra empresa hermana especializada en cobranza. Servicio con cobertura nacional para arrendadores, inmobiliarias y administradoras.
            </p>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <Button variant="hero">
                <MessageCircle className="w-5 h-5" /> Solicitar informes por WhatsApp
              </Button>
            </a>
          </div>
          <div className="hidden md:block">
            <img src={heroImg.url} alt="Cobranza extrajudicial de rentas en México" width={1280} height={720} className="rounded-xl shadow-2xl" />
          </div>
        </div>
      </section>

      {/* Problema */}
      <section className="section-padding">
        <div className="container-narrow max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Las rentas atrasadas afectan tus ingresos y tu operación</h2>
          <p className="text-muted-foreground leading-relaxed text-lg">
            Los adeudos pendientes consumen tiempo, generan incertidumbre y impactan directamente la rentabilidad de tu inversión. Si eres arrendador, inmobiliaria o administradora, contar con un respaldo especializado para recuperar esos montos hace la diferencia.
          </p>
        </div>
      </section>

      {/* Solución */}
      <section className="section-padding bg-section-light">
        <div className="container-narrow">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 text-center">Respaldo especializado para recuperar tus rentas pendientes</h2>
          <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-8 text-lg">
            Combinamos la experiencia inmobiliaria de DEVERI con la capacidad de gestión de GESCOB para atender tu cartera vencida mediante cobranza extrajudicial, con confidencialidad y seguimiento documentado.
          </p>
          <div className="grid sm:grid-cols-2 gap-6 mt-8">
            {[
              { icon: FileSearch, title: "Análisis de adeudos", desc: "Revisamos la documentación y definimos una estrategia de cobranza clara." },
              { icon: Phone, title: "Contacto profesional", desc: "Gestionamos el acercamiento a los arrendatarios de forma respetuosa y efectiva." },
              { icon: Handshake, title: "Negociación de acuerdos", desc: "Buscamos planes de pago conforme a las condiciones que tú autorices." },
              { icon: ClipboardList, title: "Seguimiento documentado", desc: "Te reportamos avances, compromisos y resultados de cada gestión." },
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
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 text-center">¿Por qué elegir este servicio?</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { icon: TrendingUp, text: "Experiencia especializada en cobranza de arrendamientos y pagos de mantenimiento" },
              { icon: ShieldCheck, text: "Cumplimiento CONDUSEF y REDECO por diseño en cada gestión" },
              { icon: Building2, text: "Cobertura en todo México" },
              { icon: CheckCircle2, text: "Confidencialidad y respaldo de DEVERI y GESCOB" },
            ].map((b) => (
              <div key={b.text} className="flex items-start gap-4 bg-card border rounded-xl p-5">
                <b.icon className="w-6 h-6 text-accent shrink-0 mt-0.5" />
                <span className="text-foreground font-medium">{b.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dirigido a */}
      <section className="section-padding bg-section-light">
        <div className="container-narrow max-w-3xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Dirigido a</h2>
          <div className="grid sm:grid-cols-3 gap-6 mt-8">
            {[
              { title: "Arrendadores", desc: "Personas con propiedades residenciales o comerciales en renta." },
              { title: "Inmobiliarias", desc: "Agencias que requieren respaldo para carteras vencidas." },
              { title: "Administradoras", desc: "Empresas que gestionan inmuebles residenciales y comerciales." },
            ].map((item) => (
              <div key={item.title} className="bg-card border rounded-xl p-6">
                <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="section-padding" style={{ background: "var(--hero-gradient)" }}>
        <div className="container-narrow text-center text-primary-foreground">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">¿Tienes rentas vencidas que recuperar?</h2>
          <p className="text-primary-foreground/80 mb-6">Escríbenos por WhatsApp y te explicamos cómo DEVERI y GESCOB pueden ayudarte.</p>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
            <Button variant="hero">
              <MessageCircle className="w-5 h-5" /> Quiero informes de cobranza
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
