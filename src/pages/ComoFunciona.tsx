import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/529211234567?text=Hola%2C%20quiero%20información%20sobre%20cómo%20funciona%20su%20servicio%20de%20administración%20de%20propiedades";

const steps = [
  { num: "01", title: "Evaluamos tu propiedad", desc: "Analizamos el estado, ubicación y potencial de tu inmueble." },
  { num: "02", title: "Definimos estrategia", desc: "Creamos un plan personalizado de administración y/o renta." },
  { num: "03", title: "Operamos todo", desc: "Nos encargamos de la gestión diaria completa." },
  { num: "04", title: "Tú recibes ingresos", desc: "Cobros puntuales y reportes sin que te preocupes por nada." },
];

export default function ComoFunciona() {
  return (
    <>
      <section className="section-padding" style={{ background: "var(--hero-gradient)" }}>
        <div className="container-narrow text-primary-foreground">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Así funciona DEVERI</h1>
          <p className="text-lg text-primary-foreground/80">Un proceso simple para que tú no te preocupes por nada.</p>
        </div>
      </section>
      <section className="section-padding">
        <div className="container-narrow max-w-3xl">
          <div className="space-y-8">
            {steps.map((s) => (
              <div key={s.num} className="flex gap-6 items-start">
                <div className="bg-accent text-accent-foreground font-extrabold text-xl rounded-full w-14 h-14 flex items-center justify-center shrink-0">
                  {s.num}
                </div>
                <div>
                  <h2 className="text-xl font-bold text-foreground mb-1">{s.title}</h2>
                  <p className="text-muted-foreground">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <Button variant="cta" size="lg"><MessageCircle className="w-5 h-5" /> Comenzar ahora</Button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
