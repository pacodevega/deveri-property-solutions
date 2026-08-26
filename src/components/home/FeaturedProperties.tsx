import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MapPin, Ruler, ArrowRight, Building2 } from "lucide-react";
import { propiedades } from "@/data/propiedades";

export default function FeaturedProperties() {
  const disponibles = propiedades.filter((p) => p.disponible);

  if (disponibles.length === 0) return null;

  return (
    <section className="section-padding bg-muted/30">
      <div className="container-narrow">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <p className="text-sm uppercase tracking-widest text-accent font-semibold mb-2">
              Propiedades en renta
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold">
              Espacios disponibles ahora
            </h2>
          </div>
          <Link to="/propiedades">
            <Button variant="outline" className="w-full md:w-auto">
              Ver todas
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {disponibles.map((p) => (
            <Link
              key={p.slug}
              to={`/propiedades/${p.slug}`}
              className="group bg-card border rounded-2xl overflow-hidden flex flex-col md:flex-row transition-all duration-300 hover:shadow-xl hover:-translate-y-1 focus-within:ring-2 focus-within:ring-accent"
            >
              <div className="relative aspect-[4/3] md:aspect-square md:w-2/5 overflow-hidden bg-muted">
                <img
                  src={p.imagen}
                  alt={p.imagenAlt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute top-3 left-3 bg-accent text-accent-foreground text-xs font-semibold px-3 py-1 rounded-full">
                  {p.operacion}
                </span>
              </div>

              <div className="p-6 flex flex-col flex-1 justify-center">
                <p className="text-xs uppercase tracking-wide text-muted-foreground mb-1">
                  {p.tipo} · {p.ciudad}
                </p>
                <h3 className="text-lg font-bold mb-3 group-hover:text-accent transition-colors">
                  {p.nombre}
                </h3>

                <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground mb-4">
                  <span className="inline-flex items-center gap-1">
                    <Ruler className="w-4 h-4 text-accent" /> {p.superficie}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <MapPin className="w-4 h-4 text-accent" /> {p.ubicacion}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {p.destacados.slice(0, 3).map((d) => (
                    <span
                      key={d}
                      className="text-xs bg-muted text-foreground/70 px-2.5 py-1 rounded-full"
                    >
                      {d}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between mt-auto pt-4 border-t">
                  <div>
                    <p className="text-2xl font-extrabold text-foreground leading-none">
                      {p.precio}
                    </p>
                    {p.precioNota && (
                      <p className="text-xs text-muted-foreground mt-1">{p.precioNota}</p>
                    )}
                  </div>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-accent">
                    Ver detalles
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-muted-foreground mb-4 inline-flex items-center gap-2">
            <Building2 className="w-4 h-4 text-accent" />
            ¿Buscas algo diferente? Revisa el catálogo completo.
          </p>
          <div className="flex justify-center">
            <Link to="/propiedades">
              <Button variant="cta" size="lg">
                Explorar todas las propiedades
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
