import { Button } from "@/components/ui/button";
import { MessageCircle, Users, FileText, Wrench, Eye } from "lucide-react";
import teamImg from "@/assets/team-working.jpg";

const WHATSAPP_URL = "https://wa.me/522296840727?text=Hola%2C%20quiero%20que%20ustedes%20gestionen%20mi%20propiedad";

const points = [
  { icon: Users, text: "Conseguimos inquilinos confiables" },
  { icon: FileText, text: "Administramos cobros y contratos" },
  { icon: Wrench, text: "Resolvemos mantenimiento" },
  { icon: Eye, text: "Supervisamos constantemente" },
];

export default function SolutionSection() {
  return (
    <section className="section-padding bg-section-light">
      <div className="container-narrow grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nos encargamos de todo por ti
          </h2>
          <p className="text-muted-foreground mb-6">
            En <span className="font-extrabold text-accent">DEVERI</span> operamos tu propiedad de principio a fin:
          </p>
          <ul className="space-y-4 mb-6">
            {points.map((p) => (
              <li key={p.text} className="flex items-center gap-3">
                <div className="bg-accent/10 rounded-full p-2">
                  <p.icon className="w-5 h-5 text-accent" />
                </div>
                <span className="text-foreground font-medium">{p.text}</span>
              </li>
            ))}
          </ul>
          <p className="text-lg font-semibold text-foreground mb-6">
            👉 Tú solo recibes resultados
          </p>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
            <Button variant="cta" size="lg">
              <MessageCircle className="w-5 h-5" />
              Quiero que ustedes lo gestionen
            </Button>
          </a>
        </div>
        <img src={teamImg} alt="Equipo DEVERI trabajando" width={1280} height={720} loading="lazy" className="rounded-xl shadow-xl" />
      </div>
    </section>
  );
}
