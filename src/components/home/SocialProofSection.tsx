import ClientGrid from "@/components/ClientGrid";

export default function SocialProofSection() {
  return (
    <section className="section-padding">
      <div className="container-narrow text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Algunos clientes que han confiado en nosotros
        </h2>
        <p className="text-muted-foreground mb-10 max-w-2xl mx-auto">
          Hemos trabajado con empresas y marcas que operan en la región, entendiendo las necesidades de propiedades comerciales y arrendatarios de alto nivel.
        </p>
        <ClientGrid />
      </div>
    </section>
  );
}
