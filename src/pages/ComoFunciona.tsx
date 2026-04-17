import { Button } from "@/components/ui/button";
import { MessageCircle, CheckCircle2, ShieldCheck, Clock, BarChart3, Wrench, Users } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/522296840727?text=Hola%2C%20quiero%20información%20sobre%20cómo%20funciona%20su%20servicio%20de%20administración%20de%20propiedades";

const steps = [
  {
    num: "01",
    title: "Evaluamos tu propiedad",
    desc: "Realizamos una visita presencial para conocer el estado actual, la ubicación y el potencial de tu inmueble. Analizamos el mercado local para determinar la mejor estrategia, ya sea para renta, administración o mantenimiento.",
    details: [
      "Inspección física del inmueble",
      "Análisis comparativo de mercado en la zona",
      "Identificación de mejoras que aumenten el valor",
      "Estimación realista del precio de renta",
    ],
  },
  {
    num: "02",
    title: "Definimos una estrategia personalizada",
    desc: "Con base en el análisis, diseñamos un plan a la medida de tus objetivos. Si buscas rentar, definimos el precio ideal y el perfil de inquilino. Si necesitas administración completa, estructuramos el modelo operativo.",
    details: [
      "Plan de renta o administración según tu caso",
      "Estrategia de difusión para encontrar inquilinos",
      "Definición de contratos y condiciones legales",
      "Cronograma de actividades y seguimiento",
    ],
  },
  {
    num: "03",
    title: "Operamos todo por ti",
    desc: "Una vez aprobado el plan, tomamos el control de la operación diaria. Desde la búsqueda y filtrado de inquilinos hasta el cobro de rentas, atención de incidencias y coordinación de mantenimiento. Tú no tienes que intervenir en nada.",
    details: [
      "Filtrado riguroso de inquilinos (referencias, historial, garantías)",
      "Elaboración y firma de contratos",
      "Cobro puntual de rentas mes a mes",
      "Atención directa a inquilinos ante cualquier situación",
    ],
  },
  {
    num: "04",
    title: "Tú recibes ingresos y reportes",
    desc: "Cada mes recibes tu pago de renta de forma puntual, junto con un reporte detallado del estado de tu propiedad. Tienes visibilidad total sin necesidad de estar presente ni ocuparte de la operación.",
    details: [
      "Depósito puntual de tus ingresos",
      "Reporte mensual con estado financiero y operativo",
      "Comunicación directa con tu gestor asignado",
      "Tranquilidad de saber que todo está bajo control",
    ],
  },
];

const diferenciadores = [
  { icon: ShieldCheck, title: "Confianza de más de 25 años", desc: "Operamos propiedades en Veracruz, Boca del Río, Medellín y la Riviera Veracruzana desde hace más de dos décadas." },
  { icon: Users, title: "Un equipo dedicado a tu propiedad", desc: "No eres un número. Asignamos un gestor que conoce tu inmueble y se encarga de todo personalmente." },
  { icon: Wrench, title: "Mantenimiento con equipo propio", desc: "Contamos con personal de mantenimiento para resolver cualquier situación sin depender de terceros." },
  { icon: BarChart3, title: "Transparencia total", desc: "Reportes claros, comunicación constante y cero sorpresas. Siempre sabes lo que pasa con tu propiedad." },
  { icon: Clock, title: "Respuesta rápida", desc: "Atendemos incidencias y solicitudes de forma ágil para proteger tu inversión y mantener contentos a los inquilinos." },
  { icon: CheckCircle2, title: "Cero involucramiento para ti", desc: "Nuestro objetivo es que no tengas que hacer nada. Nosotros operamos, tú descansas." },
];

export default function ComoFunciona() {
  return (
    <>
      {/* Hero */}
      <section className="section-padding" style={{ background: "var(--hero-gradient)" }}>
        <div className="container-narrow text-primary-foreground">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Así funciona DEVERI</h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl">
            Un proceso claro y probado para que tu propiedad genere ingresos sin que tú tengas que preocuparte por nada. Desde el primer contacto hasta el cobro mensual, nosotros nos encargamos de todo.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="section-padding">
        <div className="container-narrow max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">¿Por qué un proceso estructurado marca la diferencia?</h2>
          <p className="text-muted-foreground leading-relaxed text-lg mb-4">
            Administrar una propiedad no es solo cobrar renta. Implica encontrar buenos inquilinos, mantener el inmueble en condiciones, resolver problemas y garantizar que tu inversión crezca con el tiempo.
          </p>
          <p className="text-muted-foreground leading-relaxed text-lg">
            En DEVERI hemos perfeccionado un sistema durante más de 25 años que cubre cada aspecto de la gestión inmobiliaria. No improvisamos: seguimos un proceso probado que protege tu patrimonio y maximiza tus ingresos.
          </p>
        </div>
      </section>

      {/* Pasos detallados */}
      <section className="section-padding bg-section-light">
        <div className="container-narrow max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-10">Nuestro proceso paso a paso</h2>
          <div className="space-y-12">
            {steps.map((s) => (
              <div key={s.num} className="flex gap-6 items-start">
                <div className="bg-accent text-accent-foreground font-extrabold text-xl rounded-full w-14 h-14 flex items-center justify-center shrink-0">
                  {s.num}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground mb-2">{s.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">{s.desc}</p>
                  <ul className="space-y-2">
                    {s.details.map((d) => (
                      <li key={d} className="flex items-start gap-3 text-foreground text-sm">
                        <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diferenciadores */}
      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-4">¿Por qué elegir DEVERI?</h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-10">
            No somos una inmobiliaria más. Somos un equipo operativo con experiencia real en la zona que se involucra directamente en cada propiedad.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {diferenciadores.map((d) => (
              <div key={d.title} className="bg-card border rounded-xl p-6 hover:shadow-lg hover:border-accent/30 transition-all duration-300">
                <d.icon className="w-8 h-8 text-accent mb-3" />
                <h3 className="font-bold text-foreground mb-1">{d.title}</h3>
                <p className="text-sm text-muted-foreground">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="section-padding" style={{ background: "var(--hero-gradient)" }}>
        <div className="container-narrow text-center text-primary-foreground">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">¿Listo para dejar tu propiedad en las mejores manos?</h2>
          <p className="text-primary-foreground/80 mb-6 max-w-xl mx-auto">
            Escríbenos por WhatsApp y te explicamos cómo podemos ayudarte con tu propiedad en Veracruz, Boca del Río o la Riviera Veracruzana.
          </p>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
            <Button variant="hero" size="lg">
              <MessageCircle className="w-5 h-5" /> Comenzar ahora
            </Button>
          </a>
        </div>
      </section>
    </>
  );
}
