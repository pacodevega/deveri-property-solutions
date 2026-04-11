import { Button } from "@/components/ui/button";
import { MessageCircle, CheckCircle2 } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/529211234567?text=Hola%2C%20quiero%20información";

export default function Clientes() {
  return (
    <>
      <section className="section-padding" style={{ background: "var(--hero-gradient)" }}>
        <div className="container-narrow text-primary-foreground">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Más de 25 años generando confianza</h1>
          <p className="text-lg text-primary-foreground/80">Empresas líderes confían en nuestra gestión.</p>
        </div>
      </section>
      <section className="section-padding">
        <div className="container-narrow">
          <div className="grid sm:grid-cols-2 gap-8 mb-12">
            <div className="bg-card border rounded-xl p-8 text-center">
              <p className="text-5xl font-extrabold text-accent mb-2">+100</p>
              <p className="text-muted-foreground font-medium">Propiedades administradas</p>
            </div>
            <div className="bg-card border rounded-xl p-8 text-center">
              <p className="text-5xl font-extrabold text-accent mb-2">+25</p>
              <p className="text-muted-foreground font-medium">Años de experiencia</p>
            </div>
          </div>
          <h2 className="text-2xl font-bold text-foreground mb-6 text-center">Clientes</h2>
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            {["Heineken", "Banco Azteca", "AT&T", "Plaza Hípico"].map((name) => (
              <div key={name} className="bg-card border rounded-lg px-8 py-4 font-semibold text-foreground/60 text-lg">{name}</div>
            ))}
          </div>
          <div className="text-center">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <Button variant="cta" size="lg"><MessageCircle className="w-5 h-5" /> Únete a nuestros clientes</Button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
