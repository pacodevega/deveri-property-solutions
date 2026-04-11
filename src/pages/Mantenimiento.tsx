import { Button } from "@/components/ui/button";
import { MessageCircle, CheckCircle2 } from "lucide-react";
import maintenanceImg from "@/assets/maintenance.jpg";

const WHATSAPP_URL = "https://wa.me/529211234567?text=Hola%2C%20quiero%20información%20sobre%20mantenimiento";

export default function Mantenimiento() {
  return (
    <>
      <section className="section-padding" style={{ background: "var(--hero-gradient)" }}>
        <div className="container-narrow text-primary-foreground">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Mantenimiento sin complicaciones</h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl">Nos encargamos de todo el mantenimiento de tu propiedad.</p>
        </div>
      </section>
      <section className="section-padding">
        <div className="container-narrow grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-6">Nos encargamos de todo</h2>
            <ul className="space-y-3 mb-8">
              {["Reparaciones preventivas y correctivas", "Supervisión constante", "Red de proveedores confiables"].map((i) => (
                <li key={i} className="flex items-center gap-3 text-foreground">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0" /> {i}
                </li>
              ))}
            </ul>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <Button variant="cta" size="lg"><MessageCircle className="w-5 h-5" /> Solicitar mantenimiento</Button>
            </a>
          </div>
          <img src={maintenanceImg} alt="Mantenimiento de propiedades" width={1280} height={720} loading="lazy" className="rounded-xl shadow-xl" />
        </div>
      </section>
    </>
  );
}
