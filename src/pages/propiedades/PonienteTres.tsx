import { useState } from "react";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import SharePropertyButton from "@/components/SharePropertyButton";
import { Button } from "@/components/ui/button";
import {
  MessageCircle,
  MapPin,
  Ruler,
  Bath,
  Droplets,
  Store,
  Eye,
  Users,
  CheckCircle2,
  X,
} from "lucide-react";

import calle from "@/assets/propiedades/poniente-2.jpg";
import fachada from "@/assets/propiedades/poniente-1.jpg";
import bano from "@/assets/propiedades/poniente-7.jpg";
import interior1 from "@/assets/propiedades/poniente-3.jpg";
import interior2 from "@/assets/propiedades/poniente-4.jpg";
import interior3 from "@/assets/propiedades/poniente-5.jpg";
import interior4 from "@/assets/propiedades/poniente-6.jpg";
import interior5 from "@/assets/propiedades/poniente-2.jpg";

const PHONE = "522296840727";
const WHATSAPP_URL = `https://wa.me/${PHONE}?text=${encodeURIComponent(
  "Hola, vi el local de Poniente 3, a pasos de Avenida Sugasti (ya rentado). ¿Tienen otras propiedades disponibles similares?"
)}`;

const photos = [
  { src: fachada, alt: "Fachada del local comercial en Poniente 3, a pasos de Avenida Sugasti" },
  { src: calle, alt: "Interior del local con cortina de acceso hacia la calle Poniente 3" },
  { src: interior1, alt: "Espacio interior amplio del local comercial en Poniente 3" },
  { src: interior2, alt: "Área interior del local con muros blancos y piso de loseta" },
  { src: interior3, alt: "Zona interior conectada con el área posterior del local" },
  { src: interior4, alt: "Área posterior del local comercial en Poniente 3" },
  { src: interior5, alt: "Interior del local comercial con distribución adaptable" },
  { src: bano, alt: "Baño dentro del local comercial en Poniente 3" },
];

const specs = [
  { icon: Ruler, label: "Superficie", value: "Aprox. 90 m²" },
  { icon: Bath, label: "Baños", value: "2" },
  { icon: Droplets, label: "Agua", value: "$900 MXN / mes" },
  { icon: MapPin, label: "Ubicación", value: "Poniente 3, Veracruz" },
];

const highlights = [
  { icon: Store, title: "Zona comercial activa", text: "A pasos de Avenida Sugasti, con alto movimiento peatonal." },
  { icon: Eye, title: "Buena visibilidad", text: "Fachada a pie de calle con acceso amplio y directo." },
  { icon: Users, title: "Flujo de personas", text: "Alto flujo peatonal y fácil acceso para clientes." },
];

const includes = [
  "Aproximadamente 90 m² de superficie",
  "Un solo local comercial",
  "2 baños",
  "Distribución funcional y adaptable",
  "Ideal para atención al público, exhibición, oficina, servicios o almacenamiento",
];

export default function PonienteTres() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <>
      <SEOHead
        title="Local comercial en Poniente 3, Veracruz | 90 m² | Rentado | DEVERI"
        description="Local comercial de aprox. 90 m² en Poniente 3, a pasos de Avenida Sugasti: 2 baños, espacio amplio y excelente zona comercial. Propiedad ya rentada por DEVERI."
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "RealEstateListing",
          name: "Local comercial en Poniente 3 — a pasos de Avenida Sugasti",
          description:
            "Local comercial de aproximadamente 90 m² en Poniente 3, a pasos de Avenida Sugasti. 2 baños y distribución funcional adaptable.",
          floorSize: { "@type": "QuantitativeValue", value: 90, unitCode: "MTK" },
          offers: {
            "@type": "Offer",
            price: 9000,
            priceCurrency: "MXN",
            availability: "https://schema.org/SoldOut",
          },
          address: {
            "@type": "PostalAddress",
            streetAddress: "Poniente 3, a pasos de Avenida Sugasti",
            addressLocality: "Veracruz",
            addressRegion: "Veracruz",
            addressCountry: "MX",
          },
        }}
      />

      {/* Hero */}
      <section className="relative">
        <div className="relative h-[52vh] min-h-[320px] md:h-[68vh] overflow-hidden">
          <img src={fachada} alt={photos[0].alt} className="w-full h-full object-cover grayscale" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/50 to-primary/20" />
          <div className="absolute inset-x-0 bottom-0">
            <div className="container-narrow px-4 pb-8 md:pb-12 text-primary-foreground">
              <span className="inline-flex items-center gap-2 rounded-full bg-primary-foreground px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
                Rentada
              </span>
              <h1 className="mt-4 text-3xl md:text-5xl font-extrabold leading-tight max-w-2xl">
                Local comercial en Poniente 3
              </h1>
              <p className="mt-3 flex items-center gap-2 text-primary-foreground/85 text-sm md:text-base">
                <MapPin className="w-4 h-4 shrink-0" /> Poniente 3, a pasos de Avenida Sugasti
              </p>
              <div className="mt-5 flex flex-wrap items-end gap-x-3 gap-y-1">
                <span className="text-3xl md:text-4xl font-extrabold text-accent">$9,000</span>
                <span className="text-primary-foreground/80 text-sm md:text-base pb-1">
                  MXN / mes + $900 de agua · aprox. 90 m²
                </span>
                <SharePropertyButton
                  title="Local comercial en Poniente 3 | DEVERI"
                  text="Mira este local comercial en Poniente 3, a pasos de Avenida Sugasti, colocado por DEVERI."
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
            <div className="rounded-xl border bg-muted/50 p-5">
              <p className="font-bold text-foreground">Esta propiedad ya fue rentada</p>
              <p className="mt-1 text-sm text-muted-foreground">
                La conservamos como referencia del tipo de espacios que colocamos. Escríbenos y te mostramos
                opciones disponibles similares.
              </p>
            </div>

            <h2 className="mt-10 text-2xl md:text-3xl font-extrabold text-foreground">Sobre esta propiedad</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Local comercial en <strong className="text-foreground">Poniente 3</strong>, a unos pasos de Avenida
              Sugasti, dentro de una zona con alto movimiento peatonal y fácil acceso. Se renta como un solo local de{" "}
              <strong className="text-foreground">aproximadamente 90 m²</strong>, un espacio amplio y versátil para
              adaptarse a diferentes tipos de negocio.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Cuenta con 2 baños y una distribución funcional que puede aprovecharse para área de atención al
              público, exhibición, oficina, servicios, almacenamiento o distintas áreas de trabajo. Por su cercanía
              con Avenida Sugasti, es una ubicación estratégica para negocios que buscan visibilidad y flujo
              constante de personas.
            </p>

            <div className="mt-10 grid sm:grid-cols-3 gap-4">
              {highlights.map((h) => (
                <div key={h.title} className="rounded-xl border bg-card p-5">
                  <h.icon className="w-6 h-6 text-accent" />
                  <h3 className="mt-3 font-bold text-foreground text-base">{h.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{h.text}</p>
                </div>
              ))}
            </div>

            <h2 className="mt-14 text-2xl md:text-3xl font-extrabold text-foreground">Características</h2>
            <ul className="mt-5 grid sm:grid-cols-2 gap-x-6 gap-y-3">
              {includes.map((i) => (
                <li key={i} className="flex items-start gap-3 text-muted-foreground">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span>{i}</span>
                </li>
              ))}
            </ul>

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

            <h2 className="mt-14 text-2xl md:text-3xl font-extrabold text-foreground">Ubicación</h2>
            <p className="mt-3 text-muted-foreground">
              Poniente 3, a unos pasos de Avenida Sugasti, Veracruz. Zona comercial con alto movimiento peatonal y
              fácil acceso.
            </p>
          </div>

          {/* Sticky card */}
          <aside className="lg:sticky lg:top-24 w-full min-w-0">
            <div className="rounded-2xl border bg-card p-6 shadow-lg">
              <p className="text-sm text-muted-foreground">Renta mensual (referencia)</p>
              <p className="text-3xl font-extrabold text-foreground">
                $9,000 <span className="text-base font-medium text-muted-foreground">MXN</span>
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                + $900 MXN de agua · total $9,900 MXN al mes
              </p>
              <p className="mt-2 text-sm font-semibold text-foreground">Propiedad rentada</p>

              <div className="mt-5 space-y-2 text-sm text-muted-foreground border-t pt-5">
                <div className="flex justify-between gap-3"><span>Superficie</span><span className="font-medium text-foreground">Aprox. 90 m²</span></div>
                <div className="flex justify-between gap-3"><span>Baños</span><span className="font-medium text-foreground">2</span></div>
                                <div className="flex justify-between gap-3"><span>Ubicación</span><span className="font-medium text-foreground text-right">Poniente 3, Veracruz</span></div>
              </div>

              <Link to="/propiedades" className="block mt-6">
                <Button variant="cta" size="lg" className="w-full h-auto min-h-12 whitespace-normal py-3">
                  Ver otras propiedades disponibles
                </Button>
              </Link>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="block mt-3">
                <Button variant="outline" size="lg" className="w-full h-auto min-h-12 whitespace-normal py-3">
                  <MessageCircle className="w-5 h-5" /> Hablar por WhatsApp
                </Button>
              </a>
            </div>
          </aside>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding" style={{ background: "var(--hero-gradient)" }}>
        <div className="container-narrow text-center text-primary-foreground">
          <h2 className="text-2xl md:text-4xl font-extrabold">¿Buscas un local así?</h2>
          <p className="mt-3 text-primary-foreground/80 max-w-xl mx-auto">
            Escríbenos y te compartimos las propiedades disponibles que se ajusten a lo que necesitas.
          </p>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="block sm:inline-block mt-7">
            <Button variant="cta" size="lg" className="w-full sm:w-auto h-auto min-h-12 whitespace-normal py-3">
              <MessageCircle className="w-5 h-5" /> Hablar por WhatsApp
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
