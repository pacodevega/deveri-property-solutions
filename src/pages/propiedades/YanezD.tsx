import { useState } from "react";
import SEOHead from "@/components/SEOHead";
import SharePropertyButton from "@/components/SharePropertyButton";
import { Button } from "@/components/ui/button";
import {
  MessageCircle,
  MapPin,
  Ruler,
  Droplets,
  Bath,
  Car,
  Footprints,
  Eye,
  CheckCircle2,
  X,
  ArrowUpRight,
} from "lucide-react";

import fachada from "@/assets/propiedades/yanez-fachada.jpg";
import esquina from "@/assets/propiedades/yanez-exterior-esquina.jpg";
import interior1 from "@/assets/propiedades/yanez-interior-1.jpg";
import interior2 from "@/assets/propiedades/yanez-interior-2.jpg";
import bano from "@/assets/propiedades/yanez-bano.jpg";

const PHONE = "522296840727";
const WHATSAPP_URL = `https://wa.me/${PHONE}?text=${encodeURIComponent(
  "Hola, estoy interesado en el local comercial en renta de Avenida Yáñez (Propiedad Yáñez D, 40 m², $7,500 MXN). ¿Me pueden dar más información?"
)}`;
const MAPS_URL = "https://maps.app.goo.gl/UGDyDFVXLCerXVh57?g_st=ac";

const photos = [
  { src: fachada, alt: "Fachada del local comercial en Avenida Yáñez, Veracruz" },
  { src: esquina, alt: "Vista de esquina del local comercial sobre Avenida Yáñez" },
  { src: interior1, alt: "Interior del local con acceso de cristal a la avenida" },
  { src: interior2, alt: "Interior del local comercial, espacio diáfano de 40 m²" },
  { src: bano, alt: "Baño privado dentro del local comercial" },
];

const specs = [
  { icon: Ruler, label: "Superficie", value: "40 m²" },
  { icon: Bath, label: "Baño privado", value: "1" },
  { icon: Droplets, label: "Agua", value: "$400 MXN / mes" },
  { icon: MapPin, label: "Ubicación", value: "Esquina, Av. Yáñez" },
];

const highlights = [
  { icon: Car, title: "Alto flujo vehicular", text: "Sobre una de las avenidas con mayor tránsito de la zona." },
  { icon: Footprints, title: "Gran afluencia peatonal", text: "Paso constante de personas durante todo el día." },
  { icon: Eye, title: "Excelente visibilidad", text: "Ubicación en esquina con doble frente a la vista." },
];

const includes = [
  "Local en esquina con doble exposición",
  "Espacio diáfano, listo para adaptar",
  "Cortina metálica y acceso de cristal",
  "Baño privado dentro del local",
  "Piso de loseta en buen estado",
  "Zona consolidada de comercio y abarrotes",
];

export default function YanezD() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <>
      <SEOHead
        title="Local comercial en renta en Av. Yáñez, Veracruz | 40 m² | DEVERI"
        description="Local comercial en renta sobre Avenida Yáñez, Veracruz. 40 m², baño privado, ubicación en esquina, alto flujo vehicular y peatonal. $7,500 MXN mensuales."
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "RealEstateListing",
          name: "Local comercial en renta — Avenida Yáñez",
          description:
            "Local comercial de 40 m² en esquina sobre Avenida Yáñez, Veracruz. Baño privado, alto flujo vehicular y peatonal.",
          floorSize: { "@type": "QuantitativeValue", value: 40, unitCode: "MTK" },
          offers: { "@type": "Offer", price: 7500, priceCurrency: "MXN", availability: "https://schema.org/InStock" },
          address: { "@type": "PostalAddress", streetAddress: "Avenida Yáñez", addressLocality: "Veracruz", addressRegion: "Veracruz", addressCountry: "MX" },
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
              <h1 className="mt-4 text-3xl md:text-5xl font-extrabold leading-tight max-w-2xl">
                Local comercial en Avenida Yáñez
              </h1>
              <p className="mt-3 flex items-center gap-2 text-primary-foreground/85 text-sm md:text-base">
                <MapPin className="w-4 h-4 shrink-0" /> Esquina sobre Av. Yáñez, Veracruz
              </p>
              <div className="mt-5 flex flex-wrap items-end gap-x-3 gap-y-1">
                <span className="text-3xl md:text-4xl font-extrabold text-accent">$7,500</span>
                <span className="text-primary-foreground/80 text-sm md:text-base pb-1">MXN / mes · 40 m²</span>
                <SharePropertyButton
                  title="Local comercial en renta — Avenida Yáñez | DEVERI"
                  text="Mira este local comercial en renta sobre Avenida Yáñez, Veracruz."
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
                <p className="font-semibold text-foreground text-sm md:text-base break-words">{s.value}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Main content */}
      <section className="section-padding">
        <div className="container-narrow grid lg:grid-cols-[minmax(0,1fr)_360px] gap-10 lg:gap-12 items-start">
          <div className="min-w-0">
            <h2 className="text-2xl md:text-3xl font-extrabold text-foreground">Sobre esta propiedad</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Local comercial de <strong className="text-foreground">40 m²</strong> ubicado en esquina sobre Avenida
              Yáñez, una de las vialidades con mayor movimiento de la zona. Cuenta con baño privado, espacio diáfano
              listo para adaptar al giro que necesites y una exposición difícil de igualar: tránsito vehicular
              constante, paso peatonal durante todo el día y visibilidad directa desde la avenida.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Es una excelente opción para un negocio que dependa de visibilidad y clientes de paso: tiendas de
              conveniencia, servicios, comida rápida, farmacia, estética u oficina de atención al público.
            </p>

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
            <h2 className="mt-14 text-2xl md:text-3xl font-extrabold text-foreground">Características</h2>
            <ul className="mt-5 grid sm:grid-cols-2 gap-x-6 gap-y-3">
              {includes.map((i) => (
                <li key={i} className="flex items-start gap-3 text-muted-foreground">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span>{i}</span>
                </li>
              ))}
            </ul>

            {/* Gallery */}
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
              Esquina sobre Avenida Yáñez, Veracruz. Zona comercial consolidada con negocios de alto tráfico alrededor.
            </p>
            <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="inline-block mt-4">
              <Button variant="outline" size="lg">
                <MapPin className="w-5 h-5" /> Ver en Google Maps <ArrowUpRight className="w-4 h-4" />
              </Button>
            </a>
          </div>

          {/* Sticky CTA card */}
          <aside className="lg:sticky lg:top-24 w-full min-w-0">
            <div className="rounded-2xl border bg-card p-6 shadow-lg">
              <p className="text-sm text-muted-foreground">Renta mensual</p>
              <p className="text-3xl font-extrabold text-foreground">
                $7,500 <span className="text-base font-medium text-muted-foreground">MXN</span>
              </p>
              <p className="mt-1 text-sm text-muted-foreground">+ $400 MXN de agua al mes</p>

              <div className="mt-5 space-y-2 text-sm text-muted-foreground border-t pt-5">
                <div className="flex justify-between gap-3"><span>Superficie</span><span className="font-medium text-foreground">40 m²</span></div>
                <div className="flex justify-between gap-3"><span>Baño</span><span className="font-medium text-foreground">1 privado</span></div>
                <div className="flex justify-between gap-3"><span>Ubicación</span><span className="font-medium text-foreground text-right">Esquina, Av. Yáñez</span></div>
              </div>

              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="block mt-6">
                <Button variant="cta" size="lg" className="w-full">
                  <MessageCircle className="w-5 h-5" /> Me interesa esta propiedad
                </Button>
              </a>
              <SharePropertyButton
                title="Local comercial en renta — Avenida Yáñez | DEVERI"
                text="Mira este local comercial en renta sobre Avenida Yáñez, Veracruz."
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
            Escríbenos y te damos disponibilidad, condiciones de contrato y todos los detalles del local.
          </p>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-block mt-7">
            <Button variant="cta" size="lg">
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
