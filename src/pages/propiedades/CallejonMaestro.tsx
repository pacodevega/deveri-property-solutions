import { useState } from "react";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import SharePropertyButton from "@/components/SharePropertyButton";
import PropertyRequirements from "@/components/PropertyRequirements";
import { Button } from "@/components/ui/button";
import {
  MessageCircle,
  MapPin,
  Ruler,
  Bath,
  BedDouble,
  Building2,
  UtensilsCrossed,
  CheckCircle2,
  X,
} from "lucide-react";

import foto1 from "@/assets/propiedades/maestro-1.jpg";
import foto2 from "@/assets/propiedades/maestro-2.jpg";
import foto3 from "@/assets/propiedades/maestro-3.jpg";
import foto4 from "@/assets/propiedades/maestro-4.jpg";
import foto5 from "@/assets/propiedades/maestro-5.jpg";
import foto6 from "@/assets/propiedades/maestro-6.jpg";
import foto7 from "@/assets/propiedades/maestro-7.jpg";
import foto8 from "@/assets/propiedades/maestro-8.jpg";
import foto9 from "@/assets/propiedades/maestro-9.jpg";
import foto10 from "@/assets/propiedades/maestro-10.jpg";
import foto11 from "@/assets/propiedades/maestro-11.jpg";
import foto12 from "@/assets/propiedades/maestro-12.jpg";
import foto13 from "@/assets/propiedades/maestro-13.jpg";
import foto14 from "@/assets/propiedades/maestro-14.jpg";
import foto15 from "@/assets/propiedades/maestro-15.jpg";
import foto16 from "@/assets/propiedades/maestro-16.jpg";
import foto17 from "@/assets/propiedades/maestro-17.jpg";
import foto18 from "@/assets/propiedades/maestro-18.jpg";
import foto19 from "@/assets/propiedades/maestro-19.jpg";
import foto20 from "@/assets/propiedades/maestro-20.jpg";
import foto21 from "@/assets/propiedades/maestro-21.jpg";
import foto22 from "@/assets/propiedades/maestro-22.jpg";

const PHONE = "522296840727";
const WHATSAPP_URL = `https://wa.me/${PHONE}?text=${encodeURIComponent(
  "Hola, vi el departamento de Callejón del Maestro (ya rentado). ¿Tienen otras propiedades disponibles similares?"
)}`;

const photos = [
  { src: foto1, alt: "Área principal del departamento en Callejón del Maestro con acceso a escaleras" },
  { src: foto2, alt: "Recámara con clóset de entrepaños en el departamento de Callejón del Maestro" },
  { src: foto3, alt: "Baño completo con regadera del departamento en Callejón del Maestro" },
  { src: foto4, alt: "Sala comedor amplia del departamento en Callejón del Maestro" },
  { src: foto5, alt: "Área de estar con ventanas y buena iluminación natural" },
  { src: foto6, alt: "Recámara con clóset amplio y ventana del departamento" },
  { src: foto7, alt: "Segunda recámara con clóset y vista a la calle" },
  { src: foto8, alt: "Recámara con clóset de puertas corredizas y entrepaños" },
  { src: foto9, alt: "Vista desde el acceso hacia el pasillo y recámaras del departamento" },
  { src: foto10, alt: "Puerta de acceso principal al departamento en Callejón del Maestro" },
  { src: foto11, alt: "Cocina con tarja y área para estufa del departamento" },
  { src: foto12, alt: "Estacionamiento techado del edificio en Callejón del Maestro" },
  { src: foto13, alt: "Acceso vehicular con portón del edificio en Callejón del Maestro" },
  { src: foto14, alt: "Fachada del edificio en esquina sobre Callejón del Maestro, Veracruz" },
  { src: foto15, alt: "Recámara con ventana amplia y acceso al pasillo del departamento" },
  { src: foto16, alt: "Recámara con clóset de entrepaños y puerta al pasillo" },
  { src: foto17, alt: "Recámara con clóset corredizo y ventana con vista a la calle" },
  { src: foto18, alt: "Habitación luminosa con ventanal y vista panorámica de la ciudad" },
  { src: foto19, alt: "Recámara con ventana y acabados en buen estado" },
  { src: foto20, alt: "Pasillo interior con clóset y acceso a la sala del departamento" },
  { src: foto21, alt: "Distribución interior del departamento con acceso a recámaras" },
  { src: foto22, alt: "Sala amplia con paso hacia el pasillo y recámaras" },
];

const specs = [
  { icon: Ruler, label: "Superficie", value: "60 m²" },
  { icon: Building2, label: "Nivel", value: "Segundo piso" },
  { icon: BedDouble, label: "Recámaras", value: "3" },
  { icon: Bath, label: "Baño", value: "1 completo" },
];

const highlights = [
  { icon: BedDouble, title: "3 recámaras", text: "Distribución práctica que aprovecha cada área del departamento." },
  { icon: UtensilsCrossed, title: "Cocina", text: "Área de cocina independiente lista para usarse." },
  { icon: Building2, title: "Segundo piso", text: "Mayor privacidad y ventilación en la vivienda." },
];

const includes = [
  "60 m² de superficie",
  "Segundo piso",
  "3 recámaras",
  "Cocina",
  "1 baño completo",
  "Ideal para familias o estudiantes",
];

export default function CallejonMaestro() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <>
      <SEOHead
        title="Departamento en Callejón del Maestro | 60 m² | Rentado | DEVERI"
        description="Departamento de 60 m² en segundo piso sobre Callejón del Maestro, Veracruz: 3 recámaras, cocina y 1 baño completo. Propiedad ya rentada por DEVERI."
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "RealEstateListing",
          name: "Departamento en Callejón del Maestro",
          description:
            "Departamento de 60 m² en segundo piso sobre Callejón del Maestro. 3 recámaras, cocina y 1 baño completo.",
          floorSize: { "@type": "QuantitativeValue", value: 60, unitCode: "MTK" },
          offers: {
            "@type": "Offer",
            price: 7000,
            priceCurrency: "MXN",
            availability: "https://schema.org/SoldOut",
          },
          address: {
            "@type": "PostalAddress",
            streetAddress: "Callejón del Maestro",
            addressLocality: "Veracruz",
            addressRegion: "Veracruz",
            addressCountry: "MX",
          },
        }}
      />

      <section className="relative">
        <div className="relative h-[52vh] min-h-[320px] md:h-[68vh] overflow-hidden">
          <img src={foto1} alt={photos[0].alt} className="w-full h-full object-cover grayscale" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/50 to-primary/20" />
          <div className="absolute inset-x-0 bottom-0">
            <div className="container-narrow px-4 pb-8 md:pb-12 text-primary-foreground">
              <span className="inline-flex items-center gap-2 rounded-full bg-primary-foreground px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
                Rentada
              </span>
              <h1 className="mt-4 text-3xl md:text-5xl font-extrabold leading-tight max-w-2xl">
                Departamento en Callejón del Maestro
              </h1>
              <p className="mt-3 flex items-center gap-2 text-primary-foreground/85 text-sm md:text-base">
                <MapPin className="w-4 h-4 shrink-0" /> Callejón del Maestro · Veracruz
              </p>
              <div className="mt-5 flex flex-wrap items-end gap-x-3 gap-y-1">
                <span className="text-3xl md:text-4xl font-extrabold text-accent">$7,000</span>
                <span className="text-primary-foreground/80 text-sm md:text-base pb-1">
                  MXN / mes + $650 de agua · 60 m²
                </span>
                <SharePropertyButton
                  title="Departamento en Callejón del Maestro | DEVERI"
                  text="Mira este departamento de 60 m² en Callejón del Maestro, colocado por DEVERI."
                  variant="outline-light"
                  size="sm"
                  className="ml-auto md:ml-0"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

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

      <section className="section-padding">
        <div className="container-narrow grid lg:grid-cols-[minmax(0,1fr)_360px] gap-10 lg:gap-12 items-start">
          <div className="min-w-0">
            <div className="rounded-xl border bg-muted/50 p-5">
              <p className="font-bold text-foreground">Esta propiedad ya fue rentada</p>
              <p className="mt-1 text-sm text-muted-foreground">
                La conservamos como referencia. Escríbenos y te mostramos opciones disponibles similares.
              </p>
            </div>

            <h2 className="mt-10 text-2xl md:text-3xl font-extrabold text-foreground">Sobre esta propiedad</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Departamento sobre <strong className="text-foreground">Callejón del Maestro</strong>, ubicado en
              segundo piso, ideal para quienes buscan un espacio funcional y bien distribuido. Cuenta con{" "}
              <strong className="text-foreground">60 m²</strong> y ofrece 3 recámaras, cocina y 1 baño completo.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Es una opción adecuada para familias, estudiantes o personas que buscan una vivienda cómoda y
              accesible, con una distribución práctica que aprovecha cada área del departamento.
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

            <div className="mt-14">
              <PropertyRequirements />
            </div>

            <h2 className="mt-14 text-2xl md:text-3xl font-extrabold text-foreground">Ubicación</h2>
            <p className="mt-3 text-muted-foreground">
              Callejón del Maestro, Veracruz. Zona habitacional con servicios y transporte cercanos.
            </p>
          </div>

          <aside className="lg:sticky lg:top-24 w-full min-w-0">
            <div className="rounded-2xl border bg-card p-6 shadow-lg">
              <p className="text-sm text-muted-foreground">Renta mensual (referencia)</p>
              <p className="text-3xl font-extrabold text-foreground">
                $7,000 <span className="text-base font-medium text-muted-foreground">MXN</span>
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                + $650 MXN de agua · total $7,650 MXN al mes
              </p>
              <p className="mt-2 text-sm font-semibold text-foreground">Propiedad rentada</p>

              <div className="mt-5 space-y-2 text-sm text-muted-foreground border-t pt-5">
                <div className="flex justify-between gap-3"><span>Superficie</span><span className="font-medium text-foreground">60 m²</span></div>
                <div className="flex justify-between gap-3"><span>Nivel</span><span className="font-medium text-foreground">Segundo piso</span></div>
                <div className="flex justify-between gap-3"><span>Recámaras</span><span className="font-medium text-foreground">3</span></div>
                <div className="flex justify-between gap-3"><span>Baño</span><span className="font-medium text-foreground">1 completo</span></div>
                <div className="flex justify-between gap-3"><span>Ubicación</span><span className="font-medium text-foreground text-right">Veracruz</span></div>
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

      <section className="section-padding" style={{ background: "var(--hero-gradient)" }}>
        <div className="container-narrow text-center text-primary-foreground">
          <h2 className="text-2xl md:text-4xl font-extrabold">¿Buscas un departamento así?</h2>
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
