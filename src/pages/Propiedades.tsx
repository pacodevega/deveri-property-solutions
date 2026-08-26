import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import SharePropertyButton from "@/components/SharePropertyButton";
import { Button } from "@/components/ui/button";
import { MessageCircle, MapPin, Ruler, ArrowRight, Building2 } from "lucide-react";
import { propiedades } from "@/data/propiedades";

const PHONE = "522296840727";
const WHATSAPP_URL = `https://wa.me/${PHONE}?text=${encodeURIComponent(
  "Hola, quiero información sobre las propiedades disponibles en renta con DEVERI."
)}`;

export default function Propiedades() {
  const disponibles = propiedades.filter((p) => p.disponible);

  return (
    <>
      <SEOHead
        title="Propiedades en renta en Veracruz y Boca del Río | DEVERI"
        description="Locales comerciales y propiedades disponibles en renta en Veracruz, Boca del Río, Medellín y Riviera Veracruzana. Administradas por DEVERI."
        
      />

      <section className="section-padding" style={{ background: "var(--hero-gradient)" }}>
        <div className="container-narrow text-primary-foreground">
          <p className="text-sm uppercase tracking-widest text-accent font-semibold mb-3">
            Disponibilidad
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Propiedades disponibles</h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl">
            Locales comerciales y espacios en renta en Veracruz, Boca del Río, Medellín y Riviera
            Veracruzana, todos administrados por DEVERI.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow">
          {disponibles.length === 0 ? (
            <div className="text-center border rounded-2xl p-12 bg-card">
              <Building2 className="w-10 h-10 mx-auto text-accent mb-4" />
              <h2 className="text-xl font-bold mb-2">Sin propiedades disponibles por ahora</h2>
              <p className="text-muted-foreground mb-6">
                Escríbenos y te avisamos en cuanto se libere un espacio.
              </p>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <Button variant="cta" size="lg">
                  <MessageCircle className="w-5 h-5" /> Avísenme
                </Button>
              </a>
            </div>
          ) : (
            <>
              <div className="flex items-baseline justify-between mb-8 gap-4 flex-wrap">
                <h2 className="text-2xl font-bold">
                  {disponibles.length}{" "}
                  {disponibles.length === 1 ? "propiedad disponible" : "propiedades disponibles"}
                </h2>
                <p className="text-sm text-muted-foreground">Actualizado constantemente</p>
              </div>

              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {disponibles.map((p) => (
                  <div
                    key={p.slug}
                    className="group bg-card border rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1 focus-within:ring-2 focus-within:ring-accent"
                  >
                    <Link
                      to={`/propiedades/${p.slug}`}
                      className="relative aspect-[4/3] overflow-hidden bg-muted block"
                    >
                      <img
                        src={p.imagen}
                        alt={p.imagenAlt}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <span className="absolute top-3 left-3 bg-accent text-accent-foreground text-xs font-semibold px-3 py-1 rounded-full">
                        {p.operacion}
                      </span>
                    </Link>

                    <div className="p-6 flex flex-col flex-1">
                      <p className="text-xs uppercase tracking-wide text-muted-foreground mb-1">
                        {p.tipo} · {p.ciudad}
                      </p>
                      <Link to={`/propiedades/${p.slug}`}>
                        <h3 className="text-lg font-bold mb-2 group-hover:text-accent transition-colors">
                          {p.nombre}
                        </h3>
                      </Link>

                      <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground mb-3">
                        <span className="inline-flex items-center gap-1">
                          <Ruler className="w-4 h-4 text-accent" /> {p.superficie}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <MapPin className="w-4 h-4 text-accent" /> {p.ubicacion}
                        </span>
                      </div>

                      <p className="text-sm text-muted-foreground mb-4 flex-1">{p.resumen}</p>

                      <div className="flex flex-wrap gap-2 mb-5">
                        {p.destacados.map((d) => (
                          <span
                            key={d}
                            className="text-xs bg-muted text-foreground/70 px-2.5 py-1 rounded-full"
                          >
                            {d}
                          </span>
                        ))}
                      </div>

                      <div className="mt-auto pt-4 border-t flex items-end justify-between gap-3">
                        <div>
                          <p className="text-2xl font-extrabold text-foreground leading-none">
                            {p.precio}
                          </p>
                          {p.precioNota && (
                            <p className="text-xs text-muted-foreground mt-1">{p.precioNota}</p>
                          )}
                        </div>
                        <Link
                          to={`/propiedades/${p.slug}`}
                          className="inline-flex items-center gap-1 text-sm font-semibold text-accent"
                        >
                          Ver detalles
                          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </div>

                      <SharePropertyButton
                        url={`${typeof window !== "undefined" ? window.location.origin : ""}/propiedades/${p.slug}`}
                        title={`${p.nombre} en ${p.operacion.toLowerCase()} | DEVERI`}
                        text={`Mira esta propiedad en ${p.ciudad}: ${p.nombre}`}
                        variant="outline"
                        size="sm"
                        className="w-full mt-4"
                        label="Compartir propiedad"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          <div className="mt-16 bg-card border rounded-2xl p-8 md:p-10 text-center">
            <h2 className="text-2xl font-bold mb-3">¿Tienes una propiedad para rentar?</h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Nosotros nos encargamos de todo: promoción, selección de inquilino, contrato y
              administración mensual. Cero involucramiento para ti.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <Button variant="cta" size="lg" className="w-full sm:w-auto">
                  <MessageCircle className="w-5 h-5" /> Hablar por WhatsApp
                </Button>
              </a>
              <Link to="/deveri-match">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  Probar DEVERI Match
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
