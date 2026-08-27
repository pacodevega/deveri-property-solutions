import { useState } from "react";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import PropertyRequirements from "@/components/PropertyRequirements";
import SharePropertyButton from "@/components/SharePropertyButton";
import { Button } from "@/components/ui/button";
import {
  MessageCircle,
  MapPin,
  Ruler,
  Bath,
  Car,
  Eye,
  Building2,
  Sun,
  CheckCircle2,
  X,
  ArrowUpRight,
  Layers,
} from "lucide-react";

import fachada from "@/assets/propiedades/ruiz-cortines-fachada.jpg";
import avenida from "@/assets/propiedades/ruiz-cortines-avenida.jpg";
import terraza from "@/assets/propiedades/ruiz-cortines-terraza.jpg";
import interior1 from "@/assets/propiedades/ruiz-cortines-interior-1.jpg";
import interior2 from "@/assets/propiedades/ruiz-cortines-interior-2.jpg";
import interior3 from "@/assets/propiedades/ruiz-cortines-interior-3.jpg";
import privado from "@/assets/propiedades/ruiz-cortines-privado.jpg";
import privado2 from "@/assets/propiedades/ruiz-cortines-privado-2.jpg";

const PHONE = "522296840727";
const wa = (text: string) => `https://wa.me/${PHONE}?text=${encodeURIComponent(text)}`;

const WHATSAPP_ALTOS = wa(
  "Hola, estoy interesado en el local comercial en renta Ruiz Cortines Altos (planta alta, 180 m², $30,900 MXN mensuales más $1,100 de agua) en Boca del Río. ¿Me pueden dar más información?"
);
const WHATSAPP_JUNTOS = wa(
  "Hola, me interesa rentar Ruiz Cortines Altos y Ruiz Cortines Bajos juntos (planta alta de 180 m² + planta baja de 212 m² = 392 m², precio especial de $76,000 MXN mensuales) en Av. Ruiz Cortines, Boca del Río. ¿Me pueden dar más información?"
);
const WHATSAPP_BAJOS = wa(
  "Hola, quiero ver la información de Ruiz Cortines Bajos (planta baja de 212 m²) en Av. Ruiz Cortines, Boca del Río."
);
const MAPS_URL = "https://maps.app.goo.gl/dFTJ4uaSY8tGbQX99?g_st=ac";

const photos = [
  { src: fachada, alt: "Fachada del local comercial en renta sobre Av. Ruiz Cortines, Boca del Río" },
  { src: avenida, alt: "Vista del inmueble sobre Avenida Ruiz Cortines con alto flujo vehicular" },
  { src: terraza, alt: "Terraza de la planta alta del local comercial en Ruiz Cortines" },
  { src: interior1, alt: "Interior amplio de la planta alta con acabados en buen estado" },
  { src: interior2, alt: "Espacio interior diáfano de la planta alta, 180 m²" },
  { src: interior3, alt: "Distribución interior adaptable de la planta alta" },
  { src: privado, alt: "Área privada con ventanales y ventilación" },
  { src: privado2, alt: "Privado adicional dentro de la planta alta" },
];

const specs = [
  { icon: Ruler, label: "Superficie", value: "180 m²" },
  { icon: Layers, label: "Nivel", value: "Planta alta" },
  { icon: Bath, label: "Baños", value: "Hombres y mujeres" },
  { icon: MapPin, label: "Ubicación", value: "Av. Ruiz Cortines" },
];

const highlights = [
  {
    icon: Car,
    title: "Alto flujo vehicular",
    text: "Sobre la principal avenida comercial de Boca del Río.",
  },
  {
    icon: Eye,
    title: "Gran visibilidad",
    text: "Exposición directa hacia la avenida y fácil acceso.",
  },
  {
    icon: Building2,
    title: "Zona comercial consolidada",
    text: "Rodeado de negocios, oficinas y comercio establecido.",
  },
];

const includes = [
  "180 m² en planta alta con amplios espacios",
  "Baño de hombres con mingitorio",
  "Baño de mujeres",
  "1 privado",
  "1 cuarto bodega",
  "Terraza",
  "Distribución funcional y adaptable a distintos giros",
];

const giros = [
  "Oficinas",
  "Consultorios",
  "Clínica",
  "Academia",
  "Showroom",
  "Tienda",
  "Franquicia",
];

export default function RuizCortinesAltos() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <>
      <SEOHead
        title="Local comercial en renta Av. Ruiz Cortines, Boca del Río | 180 m² | DEVERI"
        description="Local comercial en renta en planta alta sobre Av. Ruiz Cortines, Boca del Río. 180 m², baños, privado, bodega y terraza. $30,900 MXN mensuales más $1,100 de agua (total $32,000). Opción de 392 m² con planta baja."
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "RealEstateListing",
          name: "Ruiz Cortines Altos — Local comercial en renta",
          description:
            "Local comercial de 180 m² en planta alta sobre Avenida Ruiz Cortines, Boca del Río. Baños, privado, bodega y terraza.",
          floorSize: { "@type": "QuantitativeValue", value: 180, unitCode: "MTK" },
          offers: {
            "@type": "Offer",
            price: 32000,
            priceCurrency: "MXN",
            availability: "https://schema.org/InStock",
          },
          address: {
            "@type": "PostalAddress",
            streetAddress: "Avenida Ruiz Cortines",
            addressLocality: "Boca del Río",
            addressRegion: "Veracruz",
            addressCountry: "MX",
          },
        }}
      />

      {/* Hero */}
      <section className="relative">
        <div className="relative h-[52vh] min-h-[320px] md:h-[68vh] overflow-hidden">
          <img src={fachada} alt={photos[0].alt} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/50 to-primary/20" />
          <div className="absolute inset-x-0 bottom-0">
            <div className="container-narrow px-4 pb-8 md:pb-12 text-primary-foreground">
              <span className="inline-flex items-center gap-2 rounded-full bg-accent px-3 py-1 text-xs font-semibold uppercase tracking-wide text-accent-foreground">
                En renta
              </span>
              <h1 className="mt-4 text-3xl md:text-5xl font-extrabold leading-tight max-w-3xl">
                Ruiz Cortines Altos — Local comercial en Boca del Río
              </h1>
              <p className="mt-3 flex items-center gap-2 text-primary-foreground/85 text-sm md:text-base">
                <MapPin className="w-4 h-4 shrink-0" /> Av. Ruiz Cortines, Boca del Río, Veracruz
              </p>
              <div className="mt-5 flex flex-wrap items-end gap-x-3 gap-y-1">
                <span className="text-3xl md:text-4xl font-extrabold text-accent">$30,900</span>
                <span className="text-primary-foreground/80 text-sm md:text-base pb-1">
                  MXN / mes + $1,100 de agua · total $32,000 · 180 m² · planta alta
                </span>
                <SharePropertyButton
                  title="Ruiz Cortines Altos — Local comercial en renta | DEVERI"
                  text="Mira este local comercial en renta sobre Av. Ruiz Cortines, Boca del Río."
                  variant="outline-light"
                  size="sm"
                  className="ml-auto md:ml-0"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specs strip */}
      <section className="border-b bg-secondary">
        <div className="container-narrow px-4 py-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          {specs.map((s) => (
            <div key={s.label} className="flex items-start gap-3">
              <div className="rounded-lg bg-background p-2 shrink-0">
                <s.icon className="w-5 h-5 text-accent" />
              </div>
              <div className="min-w-0">
                <p className="text-xs text-muted-foreground">{s.label}</p>
                <p className="font-semibold text-foreground text-sm md:text-base break-words">
                  {s.value}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Main content */}
      <section className="section-padding">
        <div className="container-narrow grid lg:grid-cols-[minmax(0,1fr)_360px] gap-10 lg:gap-12 items-start">
          <div className="min-w-0">
            <h2 className="text-2xl md:text-3xl font-extrabold text-foreground">
              Sobre esta propiedad
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Local comercial de <strong className="text-foreground">180 m² en planta alta</strong>{" "}
              sobre Avenida Ruiz Cortines, la principal avenida comercial de Boca del Río. Ubicación
              estratégica con gran visibilidad, fácil acceso y alto flujo vehicular para posicionar
              tu negocio.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Cuenta con amplios espacios, baño de hombres con mingitorio, baño de mujeres, un privado,
              un cuarto bodega y terraza. Su distribución es funcional y adaptable a diferentes giros
              comerciales.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {giros.map((g) => (
                <span
                  key={g}
                  className="text-xs bg-muted text-foreground/70 px-2.5 py-1 rounded-full"
                >
                  {g}
                </span>
              ))}
            </div>

            {/* Highlights */}
            <div className="mt-10 grid sm:grid-cols-3 gap-4">
              {highlights.map((h) => (
                <div key={h.title} className="rounded-xl border bg-card p-5">
                  <h.icon className="w-6 h-6 text-accent" />
                  <h3 className="mt-3 font-bold text-foreground text-base">{h.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{h.text}</p>
                </div>
              ))}
            </div>

            {/* Includes */}
            <h2 className="mt-14 text-2xl md:text-3xl font-extrabold text-foreground">
              Características
            </h2>
            <ul className="mt-5 grid sm:grid-cols-2 gap-x-6 gap-y-3">
              {includes.map((i) => (
                <li key={i} className="flex items-start gap-3 text-muted-foreground">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span>{i}</span>
                </li>
              ))}
            </ul>




            {/* Gallery */}
            <PropertyRequirements />

            <h2 className="mt-14 text-2xl md:text-3xl font-extrabold text-foreground">Fotos</h2>
            <div className="mt-5 grid grid-cols-2 md:grid-cols-3 gap-3">
              {photos.map((p, idx) => (
                <button
                  key={p.src}
                  type="button"
                  onClick={() => setLightbox(idx)}
                  className={`group relative overflow-hidden rounded-xl border bg-muted ${
                    idx === 0 ? "col-span-2 md:col-span-2 md:row-span-2" : ""
                  }`}
                  aria-label={`Ampliar foto: ${p.alt}`}
                >
                  <img
                    src={p.src}
                    alt={p.alt}
                    loading="lazy"
                    className={`w-full object-cover transition-transform duration-500 group-hover:scale-105 ${
                      idx === 0 ? "h-56 md:h-full md:min-h-[320px]" : "h-32 md:h-40"
                    }`}
                  />
                </button>
              ))}
            </div>

            {/* Location */}
            <h2 className="mt-14 text-2xl md:text-3xl font-extrabold text-foreground">Ubicación</h2>
            <p className="mt-3 text-muted-foreground">
              Sobre Avenida Ruiz Cortines, Boca del Río, Veracruz. Zona comercial consolidada con
              alto tránsito vehicular y peatonal.
            </p>
            <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="block sm:inline-block mt-4">
              <Button variant="outline" size="lg" className="w-full sm:w-auto h-auto min-h-12 whitespace-normal py-3">
                <MapPin className="w-5 h-5" /> Ver en Google Maps <ArrowUpRight className="w-4 h-4" />
              </Button>
            </a>

            {/* Combo */}
            <div className="mt-14 rounded-2xl border-2 border-accent/40 bg-accent/5 p-6 md:p-8">
              <p className="text-xs font-semibold uppercase tracking-wide text-accent">
                Opción recomendada
              </p>
              <h2 className="mt-2 text-2xl md:text-3xl font-extrabold text-foreground">
                Rentar junto con Ruiz Cortines Bajos
              </h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                Esta planta alta también puede rentarse en conjunto con la planta baja de{" "}
                <strong className="text-foreground">212 m²</strong>, sumando un total de{" "}
                <strong className="text-foreground">392 m²</strong>. Una excelente oportunidad para
                negocios que requieren mayor espacio, presencia comercial y una ubicación
                privilegiada sobre la principal avenida de Boca del Río.
              </p>
              <p className="mt-4 text-3xl font-extrabold text-foreground">
                $76,000 <span className="text-base font-medium text-muted-foreground">MXN / mes por ambas plantas</span>
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a href={WHATSAPP_JUNTOS} target="_blank" rel="noopener noreferrer">
                  <Button variant="cta" size="lg" className="w-full sm:w-auto">
                    <MessageCircle className="w-5 h-5" /> Me interesan ambas plantas (392 m²)
                  </Button>
                </a>
                <Link to="/propiedades/ruiz-cortines-bajos">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto h-auto min-h-12 whitespace-normal py-3">
                    Ver Ruiz Cortines Bajos <ArrowUpRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>

          </div>

          {/* Sticky CTA card */}
          <aside className="lg:sticky lg:top-24 w-full min-w-0">
            <div className="rounded-2xl border bg-card p-6 shadow-lg">
              <p className="text-sm text-muted-foreground">Renta mensual (planta alta)</p>
              <p className="text-3xl font-extrabold text-foreground">
                $30,900 <span className="text-base font-medium text-muted-foreground">MXN</span>
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                + $1,100 MXN de agua · total $32,000 MXN / mes
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                Ambas plantas (392 m²): $76,000 MXN / mes
              </p>

              <div className="mt-5 space-y-2 text-sm text-muted-foreground border-t pt-5">
                <div className="flex justify-between gap-3">
                  <span>Superficie</span>
                  <span className="font-medium text-foreground">180 m²</span>
                </div>
                <div className="flex justify-between gap-3">
                  <span>Nivel</span>
                  <span className="font-medium text-foreground">Planta alta</span>
                </div>
                <div className="flex justify-between gap-3">
                  <span>Extras</span>
                  <span className="font-medium text-foreground text-right">
                    Terraza, 1 privado y 1 bodega
                  </span>
                </div>
              </div>

              <a href={WHATSAPP_ALTOS} target="_blank" rel="noopener noreferrer" className="block mt-6">
                <Button variant="cta" size="lg" className="w-full h-auto min-h-12 whitespace-normal py-3">
                  <MessageCircle className="w-5 h-5" /> Me interesa esta propiedad
                </Button>
              </a>
              <a href={WHATSAPP_JUNTOS} target="_blank" rel="noopener noreferrer" className="block mt-3">
                <Button variant="outline" size="lg" className="w-full h-auto min-h-12 whitespace-normal py-3">
                  <Sun className="w-5 h-5" /> Rentar ambas plantas
                </Button>
              </a>
              <SharePropertyButton
                title="Ruiz Cortines Altos — Local comercial en renta | DEVERI"
                text="Mira este local comercial en renta sobre Av. Ruiz Cortines, Boca del Río."
                variant="outline"
                size="lg"
                className="w-full mt-3"
                label="Compartir propiedad"
              />
              <p className="mt-3 text-xs text-muted-foreground text-center">
                Te respondemos por WhatsApp y agendamos tu visita.
              </p>
            </div>
          </aside>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding" style={{ background: "var(--hero-gradient)" }}>
        <div className="container-narrow text-center text-primary-foreground">
          <h2 className="text-2xl md:text-4xl font-extrabold">¿Quieres agendar una visita?</h2>
          <p className="mt-3 text-primary-foreground/80 max-w-xl mx-auto">
            Escríbenos y te damos disponibilidad, condiciones de contrato y todos los detalles del
            local.
          </p>
          <a href={WHATSAPP_ALTOS} target="_blank" rel="noopener noreferrer" className="block sm:inline-block mt-7">
            <Button variant="cta" size="lg" className="w-full sm:w-auto h-auto min-h-12 whitespace-normal py-3">
              <MessageCircle className="w-5 h-5" /> Me interesa esta propiedad
            </Button>
          </a>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] bg-foreground/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            className="absolute top-4 right-4 text-background p-2"
            aria-label="Cerrar"
            onClick={() => setLightbox(null)}
          >
            <X className="w-7 h-7" />
          </button>
          <img
            src={photos[lightbox].src}
            alt={photos[lightbox].alt}
            className="max-h-[85vh] max-w-full rounded-lg object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
