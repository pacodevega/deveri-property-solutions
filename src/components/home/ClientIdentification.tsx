import { Button } from "@/components/ui/button";
import { MessageCircle, UserCheck, MapPin, AlertTriangle, TrendingUp } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/529211234567?text=Hola%2C%20tengo%20una%20propiedad%20en%20Veracruz%20y%20quiero%20delegar%20la%20administraci%C3%B3n";

const items = [
  { icon: UserCheck, text: "Tienes una propiedad pero no quieres gestionarla" },
  { icon: MapPin, text: "Vives fuera de Veracruz o no tienes tiempo" },
  { icon: AlertTriangle, text: "Has tenido problemas con inquilinos" },
  { icon: TrendingUp, text: "Quieres ingresos sin involucrarte" },
];

export default function ClientIdentification() {
  return (
    <section className="section-padding bg-section-light">
      <div className="container-narrow text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-10">
          Este servicio es para ti si…
        </h2>
        <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto mb-10">
          {items.map((item) => (
            <div key={item.text} className="bg-card border rounded-xl p-6 flex items-start gap-4 text-left">
              <div className="bg-accent/10 rounded-full p-3 shrink-0">
                <item.icon className="w-6 h-6 text-accent" />
              </div>
              <p className="text-foreground font-medium">{item.text}</p>
            </div>
          ))}
        </div>
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
          <Button variant="cta" size="lg">
            <MessageCircle className="w-5 h-5" />
            Sí, quiero delegarlo todo
          </Button>
        </a>
      </div>
    </section>
  );
}
