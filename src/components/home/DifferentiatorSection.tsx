import { CheckCircle2 } from "lucide-react";

const points = [
  "No dependes de terceros",
  "Resolvemos mantenimiento directamente",
  "Supervisamos activamente",
  "Experiencia operando múltiples propiedades propias y de terceros",
];

export default function DifferentiatorSection() {
  return (
    <section className="section-padding">
      <div className="container-narrow grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            No solo administramos, operamos tu propiedad
          </h2>
          <p className="text-muted-foreground mb-6">A diferencia de otros servicios:</p>
          <ul className="space-y-4 mb-8">
            {points.map((p) => (
              <li key={p} className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                <span className="text-foreground font-medium">{p}</span>
              </li>
            ))}
          </ul>
          <p className="text-lg font-bold text-foreground">
            👉 No improvisamos. Operamos con experiencia real.
          </p>
        </div>
        <div className="bg-accent/5 border border-accent/20 rounded-2xl p-10 text-center">
          <p className="text-5xl font-extrabold text-accent mb-2">+25</p>
          <p className="text-muted-foreground font-medium">años operando propiedades</p>
          <div className="my-6 border-t border-accent/20" />
          <p className="text-5xl font-extrabold text-accent mb-2">+2,000</p>
          <p className="text-muted-foreground font-medium">contratos gestionados</p>
        </div>
      </div>
    </section>
  );
}
