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

import calle from "@/assets/propiedades/grijalva-1.jpg";
import fachada from "@/assets/propiedades/grijalva-2.jpg";
import bano from "@/assets/propiedades/grijalva-3.jpg";
import interior1 from "@/assets/propiedades/grijalva-4.jpg";
import interior2 from "@/assets/propiedades/grijalva-5.jpg";
import interior3 from "@/assets/propiedades/grijalva-6.jpg";
import interior4 from "@/assets/propiedades/grijalva-7.jpg";
import interior5 from "@/assets/propiedades/grijalva-8.jpg";

const PHONE = "522296840727";
const WHATSAPP_URL = `https://wa.me/${PHONE}?text=${encodeURIComponent(
  "Hola, vi el local de Grijalva casi esquina con Colón, en Reforma (ya rentado). ¿Tienen otras propiedades disponibles similares?"
)}`;

const photos = [
  { src: fachada, alt: "Fachada del local comercial sobre Grijalva, casi esquina con Colón, Reforma" },
  { src: calle, alt: "Vista de la calle Grijalva con el local comercial y comercios cercanos" },
  { src: interior1, alt: "Interior del local comercial con ventanales hacia la calle" },
  { src: interior2, alt: "Área interior del local con puertas de acceso" },
  { src: interior3, alt: "Espacio interior iluminado con vista a la avenida" },
  { src: interior4, alt: "Área de acceso del local comercial en Reforma" },
  { src: interior5, alt: "Interior del local con ventana y espacio adaptable" },
  { src: bano, alt: "Baño privado dentro del local comercial en Reforma" },
];

const specs = [
  { icon: Ruler, label: "Superficie", value: "Aprox. 40 m²" },
  { icon: Bath, label: "Baños privados", value: "2" },
  { icon: Droplets, label: "Agua", value: "$900 MXN / mes" },
  { icon: MapPin, label: "Ubicación", value: "Reforma, Veracruz" },
];

const highlights = [
  { icon: Store, title: "Zona comercial activa", text: "Grijalva casi esquina con Colón, con movimiento constante." },
  { icon: Eye, title: "Buena visibilidad", text: "Fachada a pie de calle con ventanales hacia la avenida." },
  { icon: Users, title: "Flujo de personas", text: "Colonia consolidada, de fácil acceso para clientes." },
];

const includes = [
  "Aproximadamente 40 m² de superficie",
  "Un solo local comercial",
  "2 baños privados",
  "Tarja",
  "Distribución funcional y adaptable",
  "Ideal para atención al público, oficina, exhibición o servicios",
];

export default function GrijalvaReforma() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <>
      <SEOHead
        title="Local comercial en Grijalva, Reforma, Veracruz | 40 m² | Rentado | DEVERI"
        description="Local comercial de aprox. 40 m² sobre Grijalva, casi esquina con Colón, en Reforma: 2 baños privados, tarja y buena visibilidad. Propiedad ya rentada por DEVERI."
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "RealEstateListing",
          name: "Local comercial en Grijalva, Reforma — Grijalva casi esquina con Colón",
          description:
            "Local comercial de aproximadamente 40 m² sobre Grijalva, casi esquina con Colón, en Reforma. 2 baños privados, tarja y distribución funcional.",
          floorSize: { "@type": "QuantitativeValue", value: 40, unitCode: "MTK" },
          offers: {
            "@type": "Offer",
            price: 12000,
            priceCurrency: "MXN",
            availability: "https://schema.org/SoldOut",
          },
          address: {
            "@type": "PostalAddress",
            streetAddress: "Grijalva, casi esquina con Colón, Col. Reforma",
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
                Local comercial en Grijalva, Reforma
              </h1>
              <p className="mt-3 flex items-center gap-2 text-primary-foreground/85 text-sm md:text-base">
                <MapPin className="w-4 h-4 shrink-0" /> Grijalva, casi esquina con Colón · Reforma, Veracruz
              </p>
              <div className="mt-5 flex flex-wrap items-end gap-x-3 gap-y-1">
                <span className="text-3xl md:text-4xl font-extrabold text-accent">$12,000</span>
                <span className="text-primary-foreground/80 text-sm md:text-base pb-1">
                  MXN / mes + $900 de agua · aprox. 40 m²
                </span>
                <SharePropertyButton
                  title="Local comercial en Grijalva, Reforma | DEVERI"
                  text="Mira este local comercial sobre Grijalva, casi esquina con Colón, colocado por DEVERI."
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
              Local comercial en <strong className="text-foreground">Reforma</strong>, ubicado sobre Grijalva, casi
              esquina con Colón, en una zona con excelente movimiento, visibilidad y flujo constante de personas.
              Funciona como un solo local de{" "}
              <strong className="text-foreground">aproximadamente 40 m²</strong>, práctico y adaptable para distintos
              tipos de negocio.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Cuenta con 2 baños privados, tarja y una distribución funcional que permite aprovechar el espacio para
              atención al público, área de trabajo, exhibición de productos, oficina o servicios. Excelente opción
              para emprendedores y negocios que buscan presencia en una zona comercial activa y de fácil acceso.
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
              Grijalva, casi esquina con Colón, colonia Reforma, Veracruz. Zona comercial consolidada con buen
              movimiento y fácil acceso.
            </p>
          </div>

          {/* Sticky card */}
          <aside className="lg:sticky lg:top-24 w-full min-w-0">
            <div className="rounded-2xl border bg-card p-6 shadow-lg">
              <p className="text-sm text-muted-foreground">Renta mensual (referencia)</p>
              <p className="text-3xl font-extrabold text-foreground">
                $12,000 <span className="text-base font-medium text-muted-foreground">MXN</span>
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                + $900 MXN de agua · total $12,900 MXN al mes
              </p>
              <p className="mt-2 text-sm font-semibold text-foreground">Propiedad rentada</p>

              <div className="mt-5 space-y-2 text-sm text-muted-foreground border-t pt-5">
                <div className="flex justify-between gap-3"><span>Superficie</span><span className="font-medium text-foreground">Aprox. 40 m²</span></div>
                <div className="flex justify-between gap-3"><span>Baños</span><span className="font-medium text-foreground">2 privados</span></div>
                <div className="flex justify-between gap-3"><span>Tarja</span><span className="font-medium text-foreground">Sí</span></div>
                <div className="flex justify-between gap-3"><span>Ubicación</span><span className="font-medium text-foreground text-right">Reforma, Veracruz</span></div>
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
