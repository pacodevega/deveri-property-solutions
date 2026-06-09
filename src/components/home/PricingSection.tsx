export default function PricingSection() {
  const plans = [
    { title: "Colocación", price: "1 mes de renta", desc: "Encontramos al inquilino ideal." },
    { title: "Administración", price: "15% mensual", desc: "Gestión completa de tu propiedad." },
    { title: "Mantenimiento", price: "Según necesidades", desc: "Cotización transparente por servicio." },
  ];

  return (
    <section className="section-padding bg-section-light">
      <div className="container-narrow text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Modelo claro, sin sorpresas
        </h2>
        <p className="text-muted-foreground mb-10">Transparente desde el inicio.</p>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {plans.map((p) => (
            <div key={p.title} className="bg-card border rounded-xl p-8 text-center">
              <h3 className="font-bold text-lg text-foreground mb-2">{p.title}</h3>
              <p className="text-3xl font-extrabold text-accent mb-2">{p.price}</p>
              <p className="text-sm text-muted-foreground">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
