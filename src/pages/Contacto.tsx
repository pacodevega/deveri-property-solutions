import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MessageCircle, Send } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/529211234567?text=Hola%2C%20quiero%20información%20sobre%20sus%20servicios%20de%20administración%20de%20propiedades";

export default function Contacto() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <section className="section-padding" style={{ background: "var(--hero-gradient)" }}>
        <div className="container-narrow text-primary-foreground">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Hablemos de tu propiedad</h1>
          <p className="text-lg text-primary-foreground/80">Contáctanos por WhatsApp o completa el formulario.</p>
        </div>
      </section>
      <section className="section-padding">
        <div className="container-narrow max-w-2xl">
          <div className="text-center mb-10">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <Button variant="cta" size="lg"><MessageCircle className="w-5 h-5" /> WhatsApp directo</Button>
            </a>
          </div>

          <div className="bg-card border rounded-xl p-8">
            <h2 className="text-xl font-bold text-foreground mb-6">O envíanos un mensaje</h2>
            {submitted ? (
              <p className="text-accent font-semibold text-center py-8">¡Gracias! Nos pondremos en contacto contigo pronto.</p>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-4">
                <Input placeholder="Nombre" required />
                <Input type="email" placeholder="Correo electrónico" required />
                <Input type="tel" placeholder="Teléfono" />
                <Textarea placeholder="¿Cómo podemos ayudarte?" rows={4} required />
                <Button type="submit" variant="cta" className="w-full">
                  <Send className="w-4 h-4" /> Enviar mensaje
                </Button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
