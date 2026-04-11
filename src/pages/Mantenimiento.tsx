import { Button } from "@/components/ui/button";
import { MessageCircle, CheckCircle2, Wrench, Users, Building, Zap, PaintBucket, Droplets } from "lucide-react";
import maintenanceImg from "@/assets/maintenance.jpg";

const WHATSAPP_URL = "https://wa.me/529211234567?text=Hola%2C%20estoy%20interesado%20en%20su%20servicio%20de%20mantenimiento%20de%20propiedades";

const servicios = [
  { icon: Zap, title: "Electricidad", desc: "Instalaciones, reparaciones y revisiones eléctricas." },
  { icon: Droplets, title: "Plomería", desc: "Reparación de fugas, instalación de tuberías y más." },
  { icon: PaintBucket, title: "Pintura y acabados", desc: "Renovación de espacios interiores y exteriores." },
  { icon: Building, title: "Obra civil", desc: "Remodelaciones, impermeabilización y trabajos estructurales." },
  { icon: Wrench, title: "Mantenimiento general", desc: "Carpintería, cerrajería, herrería y más." },
  { icon: Users, title: "Limpieza y jardinería", desc: "Mantenimiento de áreas comunes y jardines." },
];

export default function Mantenimiento() {
  return (
    <>
      {/* Hero */}
      <section className="section-padding" style={{ background: "var(--hero-gradient)" }}>
        <div className="container-narrow text-primary-foreground">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Mantenimiento sin complicaciones</h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl">
            Contamos con un equipo especializado de mantenimiento propio, además de una red de proveedores confiables para resolver cualquier necesidad de tu propiedad.
          </p>
        </div>
      </section>

      {/* Servicios */}
      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 text-center">¿Qué hacemos?</h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-10">
            Nuestro equipo interno y proveedores especializados cubren todas las áreas de mantenimiento que tu propiedad necesita.
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {servicios.map((s) => (
              <div key={s.title} className="bg-card border rounded-xl p-6 hover:shadow-lg hover:border-accent/30 transition-all duration-300">
                <s.icon className="w-8 h-8 text-accent mb-3" />
                <h3 className="font-bold text-foreground mb-1">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diferenciadores + imagen */}
      <section className="section-padding bg-section-light">
        <div className="container-narrow grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-6">¿Por qué elegirnos?</h2>
            <ul className="space-y-3 mb-8">
              {[
                "Equipo de mantenimiento propio y especializado",
                "Red de proveedores confiables y verificados",
                "Reparaciones preventivas y correctivas",
                "Supervisión constante de cada trabajo",
                "Respuesta rápida ante emergencias",
              ].map((i) => (
                <li key={i} className="flex items-center gap-3 text-foreground">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0" /> {i}
                </li>
              ))}
            </ul>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <Button variant="cta" size="lg"><MessageCircle className="w-5 h-5" /> Cotizar mantenimiento</Button>
            </a>
          </div>
          <img src={maintenanceImg} alt="Mantenimiento de propiedades" width={1280} height={720} loading="lazy" className="rounded-xl shadow-xl" />
        </div>
      </section>

      {/* CTA Final */}
      <section className="section-padding" style={{ background: "var(--hero-gradient)" }}>
        <div className="container-narrow text-center text-primary-foreground">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Necesitas mantenimiento para tu propiedad?</h2>
          <p className="text-primary-foreground/80 mb-8 text-lg">Solicita una cotización sin compromiso. Respondemos rápido.</p>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
            <Button variant="hero"><MessageCircle className="w-5 h-5" /> Cotizar por WhatsApp</Button>
          </a>
        </div>
      </section>
    </>
  );
}