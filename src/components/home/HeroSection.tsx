import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MessageCircle, CheckCircle2 } from "lucide-react";
import heroImg from "@/assets/hero-properties.webp";

const WHATSAPP_URL = "https://wa.me/522296840727?text=Hola%2C%20tengo%20una%20propiedad%20en%20Veracruz%20y%20quiero%20delegar%20la%20administraci%C3%B3n";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden" style={{ background: "var(--hero-gradient)" }}>
      <div className="absolute inset-0">
        <img src={heroImg} alt="Propiedades en Veracruz" width={1920} height={1080} className="w-full h-full object-cover opacity-15" />
      </div>
      <div className="relative container-narrow section-padding text-primary-foreground">
        <div className="max-w-2xl animate-fade-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
            Nos encargamos de tu propiedad en Veracruz para que tú solo recibas ingresos
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 leading-relaxed">
            Administramos, rentamos y damos mantenimiento a tu propiedad sin que tengas que estar presente ni lidiar con inquilinos, cobros o problemas.
          </p>
          <div className="flex flex-col gap-3 mb-10">
            {[
              "Ideal si no vives en Veracruz",
              "Ideal si no tienes tiempo",
              "Ideal si quieres ingresos sin complicaciones",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm md:text-base">
                <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                <span className="text-primary-foreground/90">{item}</span>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-4 items-center mb-8">
            {["+25 años de experiencia", "+2,000 contratos gestionados"].map((stat) => (
              <span key={stat} className="bg-primary-foreground/10 border border-primary-foreground/20 rounded-lg px-4 py-2 text-sm font-semibold text-primary-foreground/90">
                {stat}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap gap-4">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <Button variant="hero">
                <MessageCircle className="w-5 h-5" />
                Quiero delegar mi propiedad
              </Button>
            </a>
            <Link to="/como-funciona">
              <Button variant="outline-light" size="lg">
                Cómo funciona
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
