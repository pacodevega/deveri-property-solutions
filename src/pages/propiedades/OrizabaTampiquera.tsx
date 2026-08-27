import { useState } from "react";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import SharePropertyButton from "@/components/SharePropertyButton";
import PropertyRequirements from "@/components/PropertyRequirements";
import { Button } from "@/components/ui/button";
import {
  MessageCircle,
  MapPin,
  Sofa,
  Bath,
  BedDouble,
  Snowflake,
  CheckCircle2,
  X,
} from "lucide-react";

import foto1 from "@/assets/propiedades/orizaba-1.jpg";
import foto2 from "@/assets/propiedades/orizaba-2.jpg";
import foto3 from "@/assets/propiedades/orizaba-3.jpg";
import foto4 from "@/assets/propiedades/orizaba-4.jpg";
import foto5 from "@/assets/propiedades/orizaba-5.jpg";
import foto6 from "@/assets/propiedades/orizaba-6.jpg";
import foto7 from "@/assets/propiedades/orizaba-7.jpg";

const PHONE = "522296840727";
const WHATSAPP_URL = `https://wa.me/${PHONE}?text=${encodeURIComponent(
  "Hola, vi el departamento amueblado de calle Orizaba, Boca del Río (ya rentado). ¿Tienen otras propiedades disponibles similares?"
)}`;

const photos = [
  { src: foto1, alt: "Sala y comedor amueblados del departamento en calle Orizaba, Boca del Río" },
  { src: foto2, alt: "Comedor amueblado con aire acondicionado y ventiladores de techo" },
  { src: foto3, alt: "Recámara amueblada con dos camas y ventanas amplias" },
  { src: foto4, alt: "Recámara con clóset de entrepaños y aire acondicionado" },
  { src: foto5, alt: "Recámara principal amueblada con cómoda y baño integrado" },
  { src: foto6, alt: "Baño con lavabo, sanitario y regadera del departamento en Orizaba" },
  { src: foto7, alt: "Segundo baño completo con regadera del departamento amueblado" },
];

const specs = [
  { icon: BedDouble, label: "Recámaras", value: "2" },
  { icon: Bath, label: "Baños", value: "2" },
  { icon: Sofa, label: "Mobiliario", value: "Amueblado" },
  { icon: Snowflake, label: "Clima", value: "Climatizado" },
];

const highlights = [
  { icon: Sofa, title: "Totalmente amueblado", text: "Se entrega listo para habitar, sin necesidad de comprar muebles." },
  { icon: Snowflake, title: "Climatizado", text: "Aires acondicionados y ventiladores en las áreas principales." },
  { icon: MapPin, title: "Junto a La Tampiquera", text: "Zona práctica de Boca del Río con comercios y servicios cerca." },
];

const includes = [
  "Departamento amueblado",
  "2 recámaras",
  "2 baños",
  "Totalmente climatizado",
  "Sala y comedor equipados",
  "Cocina con tarja y estufa",
  "Zona bien conectada en Boca del Río",
];

export default function OrizabaTampiquera() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <>
      <SEOHead
        title="Departamento amueblado en calle Orizaba, Boca del Río | Rentado | DEVERI"
        description="Departamento amueblado y climatizado sobre calle Orizaba, junto a La Tampiquera, Boca del Río: 2 recámaras y 2 baños. Propiedad ya rentada por DEVERI."
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "RealEstateListing",
          name: "Departamento amueblado en calle Orizaba, Boca del Río",
          description:
            "Departamento amueblado y climatizado sobre calle Orizaba, junto a La Tampiquera, Boca del Río. 2 recámaras y 2 baños.",
          numberOfBedrooms: 2,
          numberOfBathroomsTotal: 2,
          offers: {
            "@type": "Offer",
            price: 8400,
            priceCurrency: "MXN",
            availability: "https://schema.org/SoldOut",
          },
          address: {
            "@type": "PostalAddress",
            streetAddress: "Calle Orizaba, junto a La Tampiquera",
            addressLocality: "Boca del Río",
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
                Departamento amueblado en calle Orizaba, Boca del Río
              </h1>
              <p className="mt-3 flex items-center gap-2 text-primary-foreground/85 text-sm md:text-base">
                <MapPin className="w-4 h-4 shrink-0" /> Calle Orizaba, junto a La Tampiquera · Boca del Río
              </p>
              <div className="mt-5 flex flex-wrap items-end gap-x-3 gap-y-1">
                <span className="text-3xl md:text-4xl font-extrabold text-accent">$8,400</span>
                <span className="text-primary-foreground/80 text-sm md:text-base pb-1">
                  MXN / mes + $500 de agua · 2 recámaras
                </span>
                <SharePropertyButton
                  title="Departamento amueblado en calle Orizaba, Boca del Río | DEVERI"
                  text="Mira este departamento amueblado en calle Orizaba, junto a La Tampiquera, colocado por DEVERI."
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
              Departamento amueblado sobre <strong className="text-foreground">calle Orizaba</strong>, en Boca del
              Río, ubicado junto a La Tampiquera, en una zona práctica y con fácil acceso a comercios y servicios.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              La propiedad se entrega completamente amueblada y climatizada, por lo que está lista para habitar sin
              complicaciones. Cuenta con <strong className="text-foreground">2 recámaras y 2 baños</strong>, con una
              distribución cómoda tanto para una pareja, familia pequeña o personas que buscan compartir
              departamento.
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
              Calle Orizaba, junto a La Tampiquera, Boca del Río. Zona bien conectada con comercios, escuelas y
              servicios a corta distancia.
            </p>
          </div>

          <aside className="lg:sticky lg:top-24 w-full min-w-0">
            <div className="rounded-2xl border bg-card p-6 shadow-lg">
              <p className="text-sm text-muted-foreground">Renta mensual (referencia)</p>
              <p className="text-3xl font-extrabold text-foreground">
                $8,400 <span className="text-base font-medium text-muted-foreground">MXN</span>
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                + $500 MXN de agua · total $8,900 MXN al mes
              </p>
              <p className="mt-2 text-sm font-semibold text-foreground">Propiedad rentada</p>

              <div className="mt-5 space-y-2 text-sm text-muted-foreground border-t pt-5">
                <div className="flex justify-between gap-3"><span>Recámaras</span><span className="font-medium text-foreground">2</span></div>
                <div className="flex justify-between gap-3"><span>Baños</span><span className="font-medium text-foreground">2</span></div>
                <div className="flex justify-between gap-3"><span>Mobiliario</span><span className="font-medium text-foreground">Amueblado</span></div>
                <div className="flex justify-between gap-3"><span>Clima</span><span className="font-medium text-foreground">Climatizado</span></div>
                <div className="flex justify-between gap-3"><span>Ubicación</span><span className="font-medium text-foreground text-right">Boca del Río</span></div>
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
            onClick={() => setLightbox(null)}
            aria-label="Cerrar"
            className="absolute top-4 right-4 rounded-full bg-background/90 p-2"
          >
            <X className="w-5 h-5 text-foreground" />
          </button>
          <img
            src={photos[lightbox].src}
            alt={photos[lightbox].alt}
            className="max-h-[85vh] max-w-full rounded-xl object-contain"
          />
        </div>
      )}
    </>
  );
}
