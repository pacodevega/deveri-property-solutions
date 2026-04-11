import { Button } from "@/components/ui/button";
import { MessageCircle, CheckCircle2, Shield } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/529211234567?text=Hola%2C%20quiero%20información%20sobre%20renta%20de%20propiedades";

export default function Renta() {
  return (
    <>
      <section className="section-padding" style={{ background: "var(--hero-gradient)" }}>
        <div className="container-narrow text-primary-foreground">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Encontramos inquilinos confiables por ti</h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl">Menos riesgo, mejores inquilinos. Nos encargamos del proceso completo.</p>
        </div>
      </section>
      <section className="section-padding">
        <div className="container-narrow max-w-3xl">
          <h2 className="text-2xl font-bold text-foreground mb-6">Proceso completo</h2>
          <ul className="space-y-3 mb-10">
            {["Promoción profesional de tu propiedad", "Filtrado exhaustivo de candidatos", "Elaboración y gestión de contratos"].map((i) => (
              <li key={i} className="flex items-center gap-3 text-foreground">
                <CheckCircle2 className="w-5 h-5 text-accent shrink-0" /> {i}
              </li>
            ))}
          </ul>
          <div className="bg-section-light rounded-xl p-8 flex items-start gap-4 mb-10">
            <Shield className="w-8 h-8 text-accent shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-foreground mb-1">Beneficio clave</h3>
              <p className="text-muted-foreground">Menos riesgo, mejores inquilinos. Nuestro proceso de filtrado reduce significativamente los problemas.</p>
            </div>
          </div>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
            <Button variant="cta" size="lg"><MessageCircle className="w-5 h-5" /> Encontrar inquilinos</Button>
          </a>
        </div>
      </section>
    </>
  );
}
