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
  Building2,
  Users,
  Snowflake,
  CheckCircle2,
  X,
} from "lucide-react";

import fachada from "@/assets/propiedades/palmeras-1.jpg";
import foto2 from "@/assets/propiedades/palmeras-2.jpg";
import foto3 from "@/assets/propiedades/palmeras-3.jpg";
import foto4 from "@/assets/propiedades/palmeras-4.jpg";
import foto5 from "@/assets/propiedades/palmeras-5.jpg";
import foto6 from "@/assets/propiedades/palmeras-6.jpg";
import foto7 from "@/assets/propiedades/palmeras-7.jpg";
import foto8 from "@/assets/propiedades/palmeras-8.jpg";
import foto9 from "@/assets/propiedades/palmeras-9.jpg";
import foto10 from "@/assets/propiedades/palmeras-10.jpg";

const PHONE = "522296840727";
const WHATSAPP_URL = `https://wa.me/${PHONE}?text=${encodeURIComponent(
  "Hola, vi el local de Avenida Palmeras (ya rentado). ¿Tienen otras propiedades disponibles similares?"
)}`;

const photos = [
  { src: fachada, alt: "Fachada del local comercial sobre Avenida Palmeras, Veracruz" },
  { src: foto2, alt: "Interior del local con planta alta y escalera" },
  { src: foto3, alt: "Área amplia de planta baja del local en Avenida Palmeras" },
  { src: foto4, alt: "Baños de hombres y mujeres dentro del local" },
  { src: foto5, alt: "Cubículos y áreas privadas con cancelería" },
  { src: foto6, alt: "Cubículo privado con aire acondicionado" },
  { src: foto7, alt: "Baño del local comercial en Avenida Palmeras" },
  { src: foto8, alt: "Sala de juntas con aire acondicionado" },
  { src: foto9, alt: "Zona de cocina del local comercial" },
  { src: foto10, alt: "Área de servicio con escalera hacia la azotea" },
];

const specs = [
  { icon: Ruler, label: "Superficie", value: "180 m²" },
  { icon: Building2, label: "Distribución", value: "Planta baja y alta" },
  { icon: Bath, label: "Baños", value: "3" },
  { icon: Snowflake, label: "Aires acondicionados", value: "5" },
];

const highlights = [
  { icon: MapPin, title: "A pasos de Walmart", text: "Zona comercial activa, rodeada de comercios y servicios." },
  { icon: Building2, title: "Dos plantas", text: "180 m² distribuidos en planta baja y planta alta." },
  { icon: Users, title: "Espacios listos", text: "3 cubículos, sala de juntas, cocina y bodega." },
];

const includes = [
  "180 m² de construcción",
  "Planta baja y planta alta",
  "3 cubículos independientes",
  "Sala de juntas",
  "Zona de cocina",
  "Bodega y área de almacenamiento",
  "3 baños",
  "5 aires acondicionados",
  "Ideal para oficinas, consultorios, academias o centros de atención",
];

export default function AvenidaPalmeras() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <>
      <SEOHead
        title="Local Avenida Palmeras, Veracruz | 180 m² | Rentado | DEVERI"
        description="Local comercial de 180 m² sobre Avenida Palmeras, cerca de Walmart: planta baja y alta, 3 cubículos, sala de juntas, cocina, bodega, 3 baños y 5 aires. Propiedad ya rentada por DEVERI."
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "RealEstateListing",
          name: "Local comercial Avenida Palmeras",
          description:
            "Local comercial de 180 m² sobre Avenida Palmeras, cerca de Walmart, con planta baja y alta, 3 cubículos, sala de juntas, cocina, bodega, 3 baños y 5 aires acondicionados.",
          floorSize: { "@type": "QuantitativeValue", value: 180, unitCode: "MTK" },
          offers: {
            "@type": "Offer",
            price: 30000,
            priceCurrency: "MXN",
            availability: "https://schema.org/SoldOut",
          },
          address: {
            "@type": "PostalAddress",
            streetAddress: "Avenida Palmeras",
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
                Local comercial Avenida Palmeras
              </h1>
              <p className="mt-3 flex items-center gap-2 text-primary-foreground/85 text-sm md:text-base">
                <MapPin className="w-4 h-4 shrink-0" /> Avenida Palmeras, cerca de Walmart · Veracruz
              </p>
              <div className="mt-5 flex flex-wrap items-end gap-x-3 gap-y-1">
                <span className="text-3xl md:text-4xl font-extrabold text-accent">$30,000</span>
                <span className="text-primary-foreground/80 text-sm md:text-base pb-1">MXN / mes · 180 m²</span>
                <SharePropertyButton
                  title="Local comercial Avenida Palmeras | DEVERI"
                  text="Mira este local comercial de 180 m² sobre Avenida Palmeras, colocado por DEVERI."
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
              Local comercial sobre <strong className="text-foreground">Avenida Palmeras</strong>, en una ubicación
              estratégica a pocos pasos de Walmart y rodeado de comercios y servicios. Cuenta con{" "}
              <strong className="text-foreground">180 m²</strong> de construcción distribuidos en planta baja y
              planta alta, con espacios amplios y versátiles adaptables a distintos giros comerciales, oficinas,
              consultorios, academias o centros de atención.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              En su distribución encontrarás 3 cubículos independientes, sala de juntas, zona de cocina, bodega y
              área de almacenamiento, además de 3 baños y 5 aires acondicionados, brindando comodidad tanto para
              clientes como para colaboradores.
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
              Avenida Palmeras, a pocos pasos de Walmart, Veracruz. Zona comercial activa con buena exposición y
              fácil acceso.
            </p>
          </div>

          {/* Sticky card */}
          <aside className="lg:sticky lg:top-24 w-full min-w-0">
            <div className="rounded-2xl border bg-card p-6 shadow-lg">
              <p className="text-sm text-muted-foreground">Renta mensual (referencia)</p>
              <p className="text-3xl font-extrabold text-foreground">
                $30,000 <span className="text-base font-medium text-muted-foreground">MXN</span>
              </p>
              <p className="mt-1 text-sm font-semibold text-foreground">Propiedad rentada</p>

              <div className="mt-5 space-y-2 text-sm text-muted-foreground border-t pt-5">
                <div className="flex justify-between gap-3"><span>Superficie</span><span className="font-medium text-foreground">180 m²</span></div>
                <div className="flex justify-between gap-3"><span>Distribución</span><span className="font-medium text-foreground text-right">Planta baja y alta</span></div>
                <div className="flex justify-between gap-3"><span>Cubículos</span><span className="font-medium text-foreground">3</span></div>
                <div className="flex justify-between gap-3"><span>Baños</span><span className="font-medium text-foreground">3</span></div>
                <div className="flex justify-between gap-3"><span>Aires acondicionados</span><span className="font-medium text-foreground">5</span></div>
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
          <h2 className="text-2xl md:text-4xl font-extrabold">¿Buscas un espacio así?</h2>
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
