import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "¿Qué pasa si no pagan?", a: "Llevamos seguimiento y control de cobranza. Actuamos de inmediato ante cualquier atraso." },
  { q: "¿Cómo sé qué pasa con mi propiedad?", a: "Recibes reportes constantes con el estado de tu propiedad, cobros e incidencias." },
  { q: "¿Tengo que estar presente?", a: "No. Nos encargamos de todo sin que tengas que intervenir." },
  { q: "¿Qué pasa si hay daños?", a: "Nosotros lo resolvemos. Contamos con equipo propio de mantenimiento y red de proveedores." },
  { q: "¿Tengo que involucrarme en algo?", a: "No, nosotros gestionamos todo. Tú solo recibes reportes y resultados." },
];

export default function FAQSection() {
  return (
    <section className="section-padding">
      <div className="container-narrow max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-10">
          Preguntas frecuentes
        </h2>
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="bg-card border rounded-xl px-6">
              <AccordionTrigger className="text-left font-bold text-foreground hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
