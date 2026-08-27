import { useMemo, useState } from "react";
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
  const [tipo, setTipo] = useState<string>("Todas");

  const tipos = useMemo(
    () => ["Todas", ...Array.from(new Set(propiedades.map((p) => p.tipo)))],
    []
  );

  const filtradas = useMemo(
    () => (tipo === "Todas" ? propiedades : propiedades.filter((p) => p.tipo === tipo)),
    [tipo]
  );

  const disponibles = filtradas.filter((p) => p.disponible);
  const rentadas = filtradas.filter((p) => !p.disponible);

  const PropertyCard = ({ p }: { p: (typeof propiedades)[number] }) => (
    <div
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
          className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${
            p.disponible ? "" : "grayscale"
          }`}
        />
        <span
          className={`absolute top-3 left-3 text-xs font-semibold px-3 py-1 rounded-full ${
            p.disponible
              ? "bg-accent text-accent-foreground"
              : "bg-foreground text-background"
          }`}
        >
          {p.disponible ? p.operacion : "Rentada"}
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
            <span key={d} className="text-xs bg-muted text-foreground/70 px-2.5 py-1 rounded-full">
              {d}
            </span>
          ))}
        </div>

        <div className="mt-auto pt-4 border-t">
          <div>
            <p className="text-2xl font-extrabold text-foreground leading-none">{p.precio}</p>
            {p.precioNota && (
              <p className="text-xs text-muted-foreground mt-1">{p.precioNota}</p>
            )}
          </div>

          <Link
            to={`/propiedades/${p.slug}`}
            className={`mt-4 w-full min-h-12 inline-flex items-center justify-center gap-2 rounded-lg px-4 py-3 text-base font-bold shadow-md transition-all hover:brightness-110 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 ${
              p.disponible
                ? "bg-accent text-accent-foreground"
                : "bg-muted text-foreground"
            }`}
          >
            Ver detalles
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {p.disponible && (
          <SharePropertyButton
            url={`${typeof window !== "undefined" ? window.location.origin : ""}/propiedades/${p.slug}`}
            title={`${p.nombre} en ${p.operacion.toLowerCase()} | DEVERI`}
            text={`Mira esta propiedad en ${p.ciudad}: ${p.nombre}`}
            variant="outline"
            size="sm"
            className="w-full mt-3"
            label="Compartir propiedad"
          />
        )}
      </div>
    </div>
  );

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
          <div className="mb-10">
            <p className="text-sm font-semibold text-foreground mb-3">Filtrar por tipo</p>
            <div className="flex flex-wrap gap-2" role="group" aria-label="Filtrar propiedades por tipo">
              {tipos.map((t) => {
                const activo = t === tipo;
                const total =
                  t === "Todas"
                    ? propiedades.length
                    : propiedades.filter((p) => p.tipo === t).length;
                return (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setTipo(t)}
                    aria-pressed={activo}
                    className={`min-h-11 rounded-full border px-4 py-2 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 ${
                      activo
                        ? "bg-accent text-accent-foreground border-accent"
                        : "bg-card text-foreground/80 hover:bg-muted"
                    }`}
                  >
                    {t} <span className="opacity-70">({total})</span>
                  </button>
                );
              })}
            </div>
          </div>

          {disponibles.length === 0 ? (
            <div className="text-center border rounded-2xl p-12 bg-card">
              <Building2 className="w-10 h-10 mx-auto text-accent mb-4" />
              <h2 className="text-xl font-bold mb-2">
                {tipo === "Todas"
                  ? "Sin propiedades disponibles por ahora"
                  : `Sin ${tipo.toLowerCase()} disponible por ahora`}
              </h2>
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
                  <PropertyCard key={p.slug} p={p} />
                ))}
              </div>
            </>
          )}

          {rentadas.length > 0 && (
            <div className="mt-20">
              <div className="flex items-baseline justify-between mb-8 gap-4 flex-wrap">
                <h2 className="text-2xl font-bold">
                  {rentadas.length}{" "}
                  {rentadas.length === 1 ? "propiedad rentada" : "propiedades rentadas"}
                </h2>
                <p className="text-sm text-muted-foreground">
                  Espacios ya colocados por DEVERI
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {rentadas.map((p) => (
                  <PropertyCard key={p.slug} p={p} />
                ))}
              </div>
            </div>
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
