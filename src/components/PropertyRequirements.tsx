import { CalendarCheck, ShieldCheck, Wallet } from "lucide-react";

const requisitos = [
  {
    icon: Wallet,
    title: "Mes de renta",
    desc: "Se cubre el primer mes de renta al firmar el contrato.",
  },
  {
    icon: CalendarCheck,
    title: "Mes de depósito",
    desc: "Depósito en garantía equivalente a un mes de renta.",
  },
  {
    icon: ShieldCheck,
    title: "Aval o póliza jurídica",
    desc: "Aval con propiedad en Veracruz o Boca del Río, o bien póliza jurídica.",
  },
];

export default function PropertyRequirements() {
  return (
    <>
      <h2 className="mt-14 text-2xl md:text-3xl font-extrabold text-foreground">
        Requisitos para rentar
      </h2>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {requisitos.map((r) => (
          <div key={r.title} className="rounded-2xl border bg-card p-5 min-w-0">
            <r.icon className="w-6 h-6 text-accent mb-3" aria-hidden="true" />
            <h3 className="font-bold text-foreground mb-1">{r.title}</h3>
            <p className="text-sm text-muted-foreground">{r.desc}</p>
          </div>
        ))}
      </div>
    </>
  );
}
