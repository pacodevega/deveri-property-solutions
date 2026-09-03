import { useState } from "react";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import SharePropertyButton from "@/components/SharePropertyButton";
import { Button } from "@/components/ui/button";
import {
  MessageCircle,
  MapPin,
  ArrowUpRight,
  Ruler,
  Bath,
  Snowflake,
  Building2,
  DoorClosed,
  Package,
  Zap,
  CheckCircle2,
  X,
} from "lucide-react";

import area1 from "@/assets/propiedades/americas-1.jpg";
import bano1 from "@/assets/propiedades/americas-2.jpg";
import bano2 from "@/assets/propiedades/americas-3.jpg";
import cocina from "@/assets/propiedades/americas-4.jpg";
import privado1 from "@/assets/propiedades/americas-5.jpg";
import privado2 from "@/assets/propiedades/americas-6.jpg";
import area2 from "@/assets/propiedades/americas-7.jpg";
import area3 from "@/assets/propiedades/americas-8.jpg";

const PHONE = "522296840727";
const WHATSAPP_URL = `https://wa.me/${PHONE}?text=${encodeURIComponent(
  "Hola, vi la oficina de Avenida de las Américas, colonia Reforma (ya rentada). ¿Tienen otras propiedades disponibles similares?"
)}`;
const MAPS_URL = "https://maps.app.goo.gl/EwrkM657rbaxdZZL6";

const photos = [
  { src: area1, alt: "Área principal de la oficina en Avenida de las Américas, climatizada y con piso laminado" },
  { src: area2, alt: "Área abierta de trabajo de la oficina con acceso a privados" },
  { src: area3, alt: "Zona de trabajo con acceso a la zona de cocina de la oficina" },
  { src: privado1, alt: "Privado climatizado con ventana y persianas" },
  { src: privado2, alt: "Segundo privado con muro decorativo de ladrillo" },
  { src: cocina, alt: "Zona de cocina con tarja y área de bodega de la oficina" },
  { src: bano1, alt: "Medio baño de la oficina en Avenida de las Américas" },
  { src: bano2, alt: "Segundo medio baño con acabados en mosaico azul" },
];

const specs = [
  { icon: Ruler, label: "Superficie", value: "110 m²" },
  { icon: Building2, label: "Nivel", value: "Segundo piso" },
  { icon: Bath, label: "Baños", value: "2 medios baños" },
  { icon: Snowflake, label: "Clima", value: "4 aires acondicionados" },
  { icon: Zap, label: "Instalación eléctrica", value: "Conexión 220V" },
];

const highlights = [
  { icon: Snowflake, title: "Totalmente climatizada", text: "4 aires acondicionados en las áreas de trabajo y privados." },
  { icon: DoorClosed, title: "2 privados", text: "Espacios cerrados ideales para dirección o consultorios." },
  { icon: Package, title: "Cocina y bodega", text: "Zona de cocina y bodega para la operación diaria." },
];

const includes = [
  "110 m² en segundo piso",
  "2 privados",
  "Zona de cocina",
  "Bodega",
  "2 medios baños",
  "4 aires acondicionados",
  "Conexión eléctrica de 220V",
  "Ideal para oficinas, despachos o consultorios",
];

export default function AmericasReforma() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <>
      <SEOHead
        title="Oficina en Avenida de las Américas, Reforma | 110 m² | Rentada | DEVERI"
        description="Oficina de 110 m² en segundo piso sobre Avenida de las Américas, colonia Reforma, Veracruz: 2 privados, cocina, bodega, 2 medios baños y 4 aires acondicionados. Propiedad ya rentada por DEVERI."
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "RealEstateListing",
          name: "Oficina en Avenida de las Américas, colonia Reforma",
          description:
            "Oficina de 110 m² en segundo piso sobre Avenida de las Américas, colonia Reforma. 2 privados, zona de cocina, bodega, 2 medios baños y 4 aires acondicionados.",
          floorSize: { "@type": "QuantitativeValue", value: 150, unitCode: "MTK" },
          offers: {
            "@type": "Offer",
            price: 14000,
            priceCurrency: "MXN",
            availability: "https://schema.org/SoldOut",
          },
          address: {
            "@type": "PostalAddress",
            streetAddress: "Avenida de las Américas, Col. Reforma",
            addressLocality: "Veracruz",
            addressRegion: "Veracruz",
            addressCountry: "MX",
          },
        }}
      />

      {/* Hero */}
      <section className="relative">
        <div className="relative h-[52vh] min-h-[320px] md:h-[68vh] overflow-hidden">
          <img src={area1} alt={photos[0].alt} className="w-full h-full object-cover grayscale" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/50 to-primary/20" />
          <div className="absolute inset-x-0 bottom-0">
            <div className="container-narrow px-4 pb-8 md:pb-12 text-primary-foreground">
              <span className="inline-flex items-center gap-2 rounded-full bg-primary-foreground px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
                Rentada
              </span>
              <h1 className="mt-4 text-3xl md:text-5xl font-extrabold leading-tight max-w-2xl">
                Oficina en Avenida de las Américas, Reforma
              </h1>
              <p className="mt-3 flex items-center gap-2 text-primary-foreground/85 text-sm md:text-base">
                <MapPin className="w-4 h-4 shrink-0" /> Avenida de las Américas, colonia Reforma · Veracruz
              </p>
              <div className="mt-5 flex flex-wrap items-end gap-x-3 gap-y-1">
                <span className="text-3xl md:text-4xl font-extrabold text-accent">$14,000</span>
                <span className="text-primary-foreground/80 text-sm md:text-base pb-1">
                  MXN / mes + $900 de agua · 110 m²
                </span>
                <SharePropertyButton
                  title="Oficina en Avenida de las Américas, Reforma | DEVERI"
                  text="Mira esta oficina de 110 m² en Avenida de las Américas, colonia Reforma, colocada por DEVERI."
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
              Amplia oficina sobre <strong className="text-foreground">Avenida de las Américas</strong>, en la colonia
              Reforma, ubicada en segundo piso y totalmente climatizada. Cuenta con{" "}
              <strong className="text-foreground">110 m²</strong> distribuidos de manera funcional para oficinas,
              despachos, consultorios o empresas que necesitan espacios privados y áreas de trabajo cómodas.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Dispone de 2 privados, zona de cocina, bodega, 2 medios baños y 4 aires acondicionados, ofreciendo un
              espacio listo para adaptarse a distintas necesidades profesionales. Su ubicación en la colonia Reforma
              permite fácil acceso y cercanía con una de las zonas más activas de Veracruz.
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
              Avenida de las Américas, colonia Reforma, Veracruz. Zona consolidada, de fácil acceso y cercana a una de las
              áreas más activas de la ciudad.
            </p>
            <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="block sm:inline-block mt-4">
              <Button variant="outline" size="lg" className="w-full sm:w-auto h-auto min-h-12 whitespace-normal py-3">
                <MapPin className="w-5 h-5" /> Ver en Google Maps <ArrowUpRight className="w-4 h-4" />
              </Button>
            </a>
          </div>

          {/* Sticky card */}
          <aside className="lg:sticky lg:top-24 w-full min-w-0">
            <div className="rounded-2xl border bg-card p-6 shadow-lg">
              <p className="text-sm text-muted-foreground">Renta mensual (referencia)</p>
              <p className="text-3xl font-extrabold text-foreground">
                $14,000 <span className="text-base font-medium text-muted-foreground">MXN</span>
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                + $900 MXN de agua · total $14,900 MXN al mes
              </p>
              <p className="mt-2 text-sm font-semibold text-foreground">Propiedad rentada</p>

              <div className="mt-5 space-y-2 text-sm text-muted-foreground border-t pt-5">
                <div className="flex justify-between gap-3"><span>Superficie</span><span className="font-medium text-foreground">110 m²</span></div>
                <div className="flex justify-between gap-3"><span>Nivel</span><span className="font-medium text-foreground">Segundo piso</span></div>
                <div className="flex justify-between gap-3"><span>Privados</span><span className="font-medium text-foreground">2</span></div>
                <div className="flex justify-between gap-3"><span>Baños</span><span className="font-medium text-foreground">2 medios baños</span></div>
                <div className="flex justify-between gap-3"><span>Corriente</span><span className="font-medium text-foreground">220V</span></div>
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
          <h2 className="text-2xl md:text-4xl font-extrabold">¿Buscas una oficina así?</h2>
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
