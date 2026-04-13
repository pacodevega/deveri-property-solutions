import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/529211234567?text=Hola%2C%20tengo%20una%20propiedad%20en%20Veracruz%20y%20quiero%20delegar%20la%20administraci%C3%B3n";

export default function FinalCTA() {
  return (
    <section className="section-padding" style={{ background: "var(--hero-gradient)" }}>
      <div className="container-narrow text-center text-primary-foreground">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Deja de administrar tu propiedad. Empieza a recibir ingresos sin complicaciones
        </h2>
        <p className="text-primary-foreground/80 mb-8 text-lg">
          Entre más tiempo pasa, más problemas puedes evitar delegando.
        </p>
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
          <Button variant="hero">
            <MessageCircle className="w-5 h-5" />
            Quiero delegar mi propiedad ahora
          </Button>
        </a>
      </div>
    </section>
  );
}
