import { Zap, Eye, Wrench, CheckCircle2 } from "lucide-react";

const points = [
  { icon: Zap, text: "Atención rápida y oportuna" },
  { icon: Eye, text: "Supervisión directa en cada servicio" },
  { icon: Wrench, text: "Solución completa de mantenimiento: plomería, electricidad, pintura, impermeabilización y limpieza de tinacos y cisternas" },
  { icon: CheckCircle2, text: "Resolución eficiente y sin fricciones" },
];

export default function MaintenanceHighlight() {
  return (
    <section className="section-padding bg-section-light">
      <div className="container-narrow max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
          Mantenimiento resuelto sin fricciones
        </h2>
        <p className="text-lg text-muted-foreground text-center mb-10">
          Uno de los mayores problemas al administrar propiedades es el mantenimiento. Con nosotros:
        </p>
        <div className="grid sm:grid-cols-2 gap-6 mb-8">
          {points.map((p) => (
            <div key={p.text} className="flex items-center gap-3 bg-card border rounded-xl p-5">
              <p.icon className="w-6 h-6 text-accent shrink-0" />
              <span className="text-foreground font-medium">{p.text}</span>
            </div>
          ))}
        </div>
        <p className="text-center text-foreground font-semibold text-lg">
          👉 Tu propiedad se mantiene en buen estado sin que tengas que intervenir
        </p>
      </div>
    </section>
  );
}
