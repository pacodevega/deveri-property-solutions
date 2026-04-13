import { Clock, DollarSign, Shield, Users } from "lucide-react";

const benefits = [
  { icon: DollarSign, title: "Ingresos constantes", desc: "Cobros puntuales y seguimiento activo." },
  { icon: Shield, title: "Cero estrés", desc: "Nos encargamos de problemas, tú no." },
  { icon: Clock, title: "Tiempo libre", desc: "Deja de administrar y enfócate en lo importante." },
  { icon: Users, title: "Control total", desc: "Recibes reportes sin operar nada." },
];

export default function BenefitsSection() {
  return (
    <section className="section-padding bg-section-light">
      <div className="container-narrow text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
          Lo que ganas al trabajar con nosotros
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          {benefits.map((b) => (
            <div key={b.title} className="flex flex-col items-center text-center">
              <div className="bg-accent/10 rounded-full p-4 mb-4">
                <b.icon className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-bold text-foreground mb-1">{b.title}</h3>
              <p className="text-sm text-muted-foreground">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
