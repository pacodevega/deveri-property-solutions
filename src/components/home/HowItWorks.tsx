const steps = [
  { num: "1", title: "Analizamos tu propiedad", desc: "Evaluamos estado, ubicación y potencial de renta." },
  { num: "2", title: "Definimos estrategia de renta", desc: "Precio, perfil de inquilino y condiciones óptimas." },
  { num: "3", title: "Conseguimos o gestionamos inquilino", desc: "Filtrado, contratos y colocación segura." },
  { num: "4", title: "Administramos todo mensualmente", desc: "Cobros, reportes, mantenimiento y supervisión." },
];

export default function HowItWorks() {
  return (
    <section className="section-padding">
      <div className="container-narrow">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
          Así funciona trabajar con nosotros
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          {steps.map((s) => (
            <div key={s.num} className="text-center">
              <div className="w-14 h-14 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-2xl font-extrabold mx-auto mb-4">
                {s.num}
              </div>
              <h3 className="font-bold text-foreground mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
        <p className="text-center text-muted-foreground mt-10 text-lg">
          Sin complicaciones, sin que tengas que intervenir.
        </p>
      </div>
    </section>
  );
}
