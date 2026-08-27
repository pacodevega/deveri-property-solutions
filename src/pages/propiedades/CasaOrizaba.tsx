import { useState } from "react";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import SharePropertyButton from "@/components/SharePropertyButton";
import PropertyRequirements from "@/components/PropertyRequirements";
import { Button } from "@/components/ui/button";
import {
  MessageCircle,
  MapPin,
  ArrowUpRight,
  Bath,
  BedDouble,
  Snowflake,
  WashingMachine,
  CheckCircle2,
  X,
} from "lucide-react";

import foto1 from "@/assets/propiedades/casa-orizaba-1.jpg";
import foto2 from "@/assets/propiedades/casa-orizaba-2.jpg";
import foto3 from "@/assets/propiedades/casa-orizaba-3.jpg";
import foto4 from "@/assets/propiedades/casa-orizaba-4.jpg";
import foto5 from "@/assets/propiedades/casa-orizaba-5.jpg";
import foto6 from "@/assets/propiedades/casa-orizaba-6.jpg";
import foto7 from "@/assets/propiedades/casa-orizaba-7.jpg";
import foto8 from "@/assets/propiedades/casa-orizaba-8.jpg";
import foto9 from "@/assets/propiedades/casa-orizaba-9.jpg";
import foto10 from "@/assets/propiedades/casa-orizaba-10.jpg";

const PHONE = "522296840727";
const WHATSAPP_URL = `https://wa.me/${PHONE}?text=${encodeURIComponent(
  "Hola, vi la casa de calle Orizaba, Boca del Río (ya rentada). ¿Tienen otras propiedades disponibles similares?"
)}`;
const MAPS_URL = "https://maps.app.goo.gl/zpqttBvTdFAAr2LD7";

const photos = [
  { src: foto1, alt: "Fachada de la casa en renta sobre calle Orizaba, Boca del Río" },
  { src: foto2, alt: "Sala amplia con aire acondicionado y ventiladores de techo" },
  { src: foto3, alt: "Área de estar y comedor de la casa en calle Orizaba" },
  { src: foto4, alt: "Recámara con ventana y ventilador de techo" },
  { src: foto5, alt: "Recámara con aire acondicionado y clóset" },
  { src: foto6, alt: "Tercera recámara con dos ventanas y clóset" },
  { src: foto7, alt: "Cocina con alacena, tarja y salida al patio" },
  { src: foto8, alt: "Baño completo con regadera de la casa en calle Orizaba" },
  { src: foto9, alt: "Medio baño bajo la escalera de la casa" },
  { src: foto10, alt: "Cuarto de lavado con lavadero y calentador de agua" },
];

const specs = [
  { icon: BedDouble, label: "Recámaras", value: "3" },
  { icon: Bath, label: "Baños", value: "1 completo y 1 medio" },
  { icon: WashingMachine, label: "Cuarto de lavado", value: "Sí" },
  { icon: Snowflake, label: "Aires acondicionados", value: "2" },
];

const highlights = [
  { icon: BedDouble, title: "3 recámaras", text: "Espacios funcionales y confortables para toda la familia." },
  { icon: Snowflake, title: "2 aires acondicionados", text: "Mayor comodidad durante todo el año." },
  { icon: WashingMachine, title: "Cuarto de lavado", text: "Área independiente con lavadero y calentador." },
];

const includes = [
  "3 recámaras",
  "1 baño completo",
  "1 medio baño",
  "Cuarto de lavado",
  "2 aires acondicionados",
  "Sala y comedor amplios",
  "Cocina con alacena y tarja",
  "Zona bien conectada en Boca del Río",
];

export default function CasaOrizaba() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <>
      <SEOHead
        title="Casa en renta en calle Orizaba, Boca del Río | 3 recámaras | Rentada | DEVERI"
        description="Casa sobre calle Orizaba, a unas cuadras de La Tampiquera, Boca del Río: 3 recámaras, 1 baño completo, 1 medio baño, cuarto de lavado y 2 aires acondicionados. Propiedad ya rentada por DEVERI."
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "RealEstateListing",
          name: "Casa en renta en calle Orizaba, Boca del Río",
          description:
            "Casa sobre calle Orizaba, a unas cuadras de La Tampiquera. 3 recámaras, 1 baño completo, 1 medio baño, cuarto de lavado y 2 aires acondicionados.",
          numberOfBedrooms: 3,
          numberOfBathroomsTotal: 2,
          offers: {
            "@type": "Offer",
            price: 12300,
            priceCurrency: "MXN",
            availability: "https://schema.org/SoldOut",
          },
          address: {
            "@type": "PostalAddress",
            streetAddress: "Calle Orizaba, cerca de La Tampiquera",
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
                Casa en calle Orizaba, Boca del Río
              </h1>
              <p className="mt-3 flex items-center gap-2 text-primary-foreground/85 text-sm md:text-base">
                <MapPin className="w-4 h-4 shrink-0" /> Calle Orizaba, a unas cuadras de La Tampiquera · Boca del Río
              </p>
              <div className="mt-5 flex flex-wrap items-end gap-x-3 gap-y-1">
                <span className="text-3xl md:text-4xl font-extrabold text-accent">$12,300</span>
                <span className="text-primary-foreground/80 text-sm md:text-base pb-1">
                  MXN / mes + $600 de agua · 3 recámaras
                </span>
                <SharePropertyButton
                  title="Casa en calle Orizaba, Boca del Río | DEVERI"
                  text="Mira esta casa de 3 recámaras en calle Orizaba, Boca del Río, colocada por DEVERI."
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
              Casa sobre <strong className="text-foreground">calle Orizaba</strong>, a solo unas cuadras de La
              Tampiquera, en una zona cómoda y bien conectada de Boca del Río.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Cuenta con <strong className="text-foreground">3 recámaras</strong>, ideales para una familia que busca
              espacios funcionales y confortables. Dispone de 1 baño completo y 1 medio baño, además de cuarto de
              lavado y áreas amplias para la convivencia diaria. También incluye{" "}
              <strong className="text-foreground">2 aires acondicionados</strong> para mayor comodidad durante todo el
              año.
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
              Calle Orizaba, a unas cuadras de La Tampiquera, Boca del Río. Fácil acceso a comercios, servicios y
              vialidades importantes.
            </p>
            <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="block sm:inline-block mt-4">
              <Button variant="outline" size="lg" className="w-full sm:w-auto h-auto min-h-12 whitespace-normal py-3">
                <MapPin className="w-5 h-5" /> Ver en Google Maps <ArrowUpRight className="w-4 h-4" />
              </Button>
            </a>
          </div>

          <aside className="lg:sticky lg:top-24 w-full min-w-0">
            <div className="rounded-2xl border bg-card p-6 shadow-lg">
              <p className="text-sm text-muted-foreground">Renta mensual (referencia)</p>
              <p className="text-3xl font-extrabold text-foreground">
                $12,300 <span className="text-base font-medium text-muted-foreground">MXN</span>
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                + $600 MXN de agua · total $12,900 MXN al mes
              </p>
              <p className="mt-2 text-sm font-semibold text-foreground">Propiedad rentada</p>

              <div className="mt-5 space-y-2 text-sm text-muted-foreground border-t pt-5">
                <div className="flex justify-between gap-3"><span>Recámaras</span><span className="font-medium text-foreground">3</span></div>
                <div className="flex justify-between gap-3"><span>Baño completo</span><span className="font-medium text-foreground">1</span></div>
                <div className="flex justify-between gap-3"><span>Medio baño</span><span className="font-medium text-foreground">1</span></div>
                <div className="flex justify-between gap-3"><span>Cuarto de lavado</span><span className="font-medium text-foreground">Sí</span></div>
                <div className="flex justify-between gap-3"><span>Aires acondicionados</span><span className="font-medium text-foreground">2</span></div>
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
          <h2 className="text-2xl md:text-4xl font-extrabold">¿Buscas una casa así?</h2>
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
