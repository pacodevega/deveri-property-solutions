import { Button } from "@/components/ui/button";
import { MessageCircle, CheckCircle2 } from "lucide-react";
import teamImg from "@/assets/team-working.jpg";

const WHATSAPP_URL = "https://wa.me/529211234567?text=Hola%2C%20quiero%20información%20sobre%20administración%20de%20propiedades";

export default function Administracion() {
  return (
    <>
      <section className="section-padding" style={{ background: "var(--hero-gradient)" }}>
        <div className="container-narrow text-primary-foreground">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Administramos tu propiedad sin que tengas que intervenir</h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl">Nos encargamos de todo para que tú solo recibas resultados.</p>
        </div>
      </section>
      <section className="section-padding">
        <div className="container-narrow grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-6">Nos encargamos de todo</h2>
            <ul className="space-y-3 mb-8">
              {["Cobranza puntual", "Atención a inquilinos", "Supervisión constante", "Reportes detallados"].map((i) => (
                <li key={i} className="flex items-center gap-3 text-foreground">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0" /> {i}
                </li>
              ))}
            </ul>
            <h2 className="text-2xl font-bold text-foreground mb-4">Ideal para:</h2>
            <ul className="space-y-3 mb-8">
              {["Propietarios fuera de la ciudad", "Inversionistas", "Personas con múltiples propiedades"].map((i) => (
                <li key={i} className="flex items-center gap-3 text-muted-foreground">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0" /> {i}
                </li>
              ))}
            </ul>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <Button variant="cta" size="lg"><MessageCircle className="w-5 h-5" /> Delegar administración</Button>
            </a>
          </div>
          <img src={teamImg} alt="Equipo de administración" width={1280} height={720} loading="lazy" className="rounded-xl shadow-xl" />
        </div>
      </section>
    </>
  );
}
