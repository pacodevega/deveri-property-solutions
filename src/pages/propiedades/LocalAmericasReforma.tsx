import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, ArrowUpRight, Bath, Building2, CheckCircle2, Droplets, MapPin, MessageCircle, Ruler } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import SharePropertyButton from "@/components/SharePropertyButton";
import PropertyRequirements from "@/components/PropertyRequirements";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import fachada from "@/assets/propiedades/local-americas-62.png.asset.json";
import interior1 from "@/assets/propiedades/local-americas-63.png.asset.json";
import interior2 from "@/assets/propiedades/local-americas-64.png.asset.json";
import interior3 from "@/assets/propiedades/local-americas-65.png.asset.json";
import interior4 from "@/assets/propiedades/local-americas-66.png.asset.json";

const NAME = "Local en Avenida de las Américas, Reforma";
const MAPS_URL = "https://maps.app.goo.gl/kSoWDYhm6JBi8Cp4A";
const WHATSAPP_URL = `https://wa.me/522296840727?text=${encodeURIComponent(
  "Hola, vi el local de 50 m² en Avenida de las Américas, Reforma, ya rentado en $13,300 MXN de renta más $600 de agua. ¿Tienen otros locales disponibles similares?"
)}`;
const photos = [
  { src: fachada.url, alt: "Fachada del local en Avenida de las Américas, Reforma, Veracruz" },
  { src: interior1.url, alt: "Interior del local con piso de loseta y acceso al baño" },
  { src: interior2.url, alt: "Área interior del local de 50 m² en Avenida de las Américas" },
  { src: interior3.url, alt: "Vista del espacio comercial y puerta interior" },
  { src: interior4.url, alt: "Interior del local con ventanales hacia la calle" },
];
const specs = [
  { icon: Ruler, label: "Superficie", value: "50 m²" },
  { icon: Bath, label: "Baños", value: "1 baño" },
  { icon: Droplets, label: "Agua", value: "$600 MXN / mes" },
  { icon: Building2, label: "Tipo", value: "Local comercial" },
  { icon: MapPin, label: "Ubicación", value: "Reforma, Veracruz" },
];

export default function LocalAmericasReforma() {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const selectedPhoto = lightbox === null ? undefined : photos[lightbox];

  return (
    <>
      <SEOHead
        title={`${NAME} | 50 m² | Rentada | DEVERI`}
        description="Local comercial en Avenida de las Américas, colonia Reforma, Veracruz: 50 m² y un baño. Ya rentado en $13,300 MXN de renta más $600 de agua. Consulta otras propiedades con DEVERI."
        image={fachada.url}
        jsonLd={{
          "@context": "https://schema.org", "@type": "RealEstateListing", name: NAME,
          description: "Local comercial de 50 m² con un baño en Avenida de las Américas, Reforma, Veracruz. Propiedad ya rentada en $13,300 MXN de renta más $600 MXN de agua.",
          image: photos.map((photo) => photo.src),
          floorSize: { "@type": "QuantitativeValue", value: 50, unitCode: "MTK" },
          offers: { "@type": "Offer", price: 13300, priceCurrency: "MXN", availability: "https://schema.org/SoldOut" },
          address: { "@type": "PostalAddress", streetAddress: "Avenida de las Américas, colonia Reforma", addressLocality: "Veracruz", addressRegion: "Veracruz", addressCountry: "MX" },
        }}
      />
      <section className="relative">
        <div className="relative h-[52vh] min-h-[420px] md:h-[68vh] overflow-hidden">
          <img src={fachada.url} alt={photos[0].alt} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/50 to-primary/20" />
          <div className="absolute inset-x-0 bottom-0">
            <div className="container-narrow px-4 pb-8 md:pb-12 text-primary-foreground">
              <span className="inline-flex rounded-md bg-destructive text-destructive-foreground px-3 py-1 text-xs font-semibold uppercase">Rentada</span>
              <h1 className="mt-4 text-3xl md:text-5xl font-extrabold leading-tight max-w-3xl">{NAME}</h1>
              <p className="mt-3 flex items-start gap-2 text-primary-foreground/85 text-sm md:text-base"><MapPin className="w-4 h-4 shrink-0 mt-1" /> Avenida de las Américas, colonia Reforma · Veracruz</p>
              <div className="mt-5 flex flex-wrap items-center gap-3">
                <span className="text-3xl md:text-4xl font-extrabold text-accent">$13,300</span>
                <span className="text-primary-foreground/80 text-sm md:text-base">MXN / mes + $600 de agua · total $13,900 · 50 m²</span>
                <SharePropertyButton title={`${NAME} | DEVERI`} text="Local de 50 m² con un baño en Reforma, ya rentado en $13,300 de renta más $600 de agua." variant="outline-light" size="sm" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="border-b bg-secondary">
        <div className="container-narrow px-4 py-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          {specs.map((spec) => (
            <div key={spec.label} className="flex items-start gap-3 min-w-0">
              <div className="rounded-lg bg-background p-2 shrink-0"><spec.icon className="w-5 h-5 text-accent" /></div>
              <div className="min-w-0"><p className="text-xs text-muted-foreground">{spec.label}</p><p className="font-semibold text-foreground text-sm md:text-base break-words">{spec.value}</p></div>
            </div>
          ))}
        </div>
      </section>
      <section className="section-padding">
        <div className="container-narrow grid lg:grid-cols-[minmax(0,1fr)_360px] gap-10 lg:gap-12 items-start">
          <div className="min-w-0">
            <div className="border-l-4 border-destructive bg-muted/50 p-5">
              <p className="font-bold text-foreground">Esta propiedad ya fue rentada</p>
              <p className="mt-1 text-sm text-muted-foreground">La conservamos como referencia de nuestras propiedades rentadas recientemente. Consulta los locales disponibles con DEVERI.</p>
            </div>
            <h2 className="mt-10 text-2xl md:text-3xl font-extrabold text-foreground">Sobre esta propiedad</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">Local comercial sobre <strong className="text-foreground">Avenida de las Américas, colonia Reforma, Veracruz</strong>, con <strong className="text-foreground">50 m² y un baño</strong>. Sus fotografías muestran un espacio abierto con piso de loseta y ventanales hacia la calle.</p>
            <p className="mt-4 text-muted-foreground leading-relaxed">Este local ya fue rentado en <strong className="text-foreground">$13,300 MXN de renta más $600 MXN de agua (total $13,900 MXN mensuales)</strong> y no está disponible actualmente.</p>
            <h2 className="mt-10 text-2xl md:text-3xl font-extrabold text-foreground">Características</h2>
            <ul className="mt-5 grid sm:grid-cols-2 gap-3">
              {["50 m² de superficie", "Un baño", "Agua: $600 MXN / mes", "Local comercial", "Avenida de las Américas, Reforma"].map((item) => <li key={item} className="flex items-start gap-3 text-muted-foreground"><CheckCircle2 className="w-5 h-5 text-accent shrink-0" /><span>{item}</span></li>)}
            </ul>
            <PropertyRequirements />
            <h2 className="mt-14 text-2xl md:text-3xl font-extrabold text-foreground">Video</h2>
            <div className="mt-5 relative w-full overflow-hidden rounded-2xl border bg-muted aspect-video">
              <iframe
                src="https://www.youtube.com/embed/NtczImBTL_4"
                title="Recorrido en video del local en Avenida de las Américas, Reforma, Veracruz"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
                className="absolute inset-0 h-full w-full"
              />
            </div>
            <h2 className="mt-14 text-2xl md:text-3xl font-extrabold text-foreground">Fotos</h2>
            <div className="mt-5 grid grid-cols-2 gap-3">
              {photos.map((photo, index) => (
                <Button key={photo.src} variant="ghost" onClick={() => setLightbox(index)} aria-label={`Ampliar foto: ${photo.alt}`} className={`group h-auto p-0 overflow-hidden rounded-lg border bg-muted ${index === 0 ? "col-span-2" : ""}`}>
                  <img src={photo.src} alt={photo.alt} loading="lazy" className="w-full aspect-video object-cover transition-transform duration-300 motion-safe:group-hover:scale-105" />
                </Button>
              ))}
            </div>
            <h2 className="mt-14 text-2xl md:text-3xl font-extrabold text-foreground">Ubicación</h2>
            <p className="mt-3 text-muted-foreground">Avenida de las Américas, colonia Reforma, Veracruz.</p>
            <Button asChild variant="outline" size="lg" className="mt-4 w-full sm:w-auto h-auto min-h-12 whitespace-normal py-3"><a href={MAPS_URL} target="_blank" rel="noopener noreferrer"><MapPin /> Ver en Google Maps <ArrowUpRight /></a></Button>
          </div>
          <aside className="lg:sticky lg:top-24 w-full min-w-0">
            <div className="rounded-lg border bg-card p-6 shadow-lg">
              <p className="text-sm text-muted-foreground">Rentado en</p>
              <p className="text-3xl font-extrabold text-foreground">$13,300 <span className="text-base font-medium text-muted-foreground">MXN</span></p>
              <p className="mt-1 text-sm text-muted-foreground">+ $600 MXN de agua · total $13,900 MXN al mes</p>
              <p className="mt-2 text-sm font-semibold text-destructive">Propiedad rentada</p>
              <div className="mt-5 space-y-3 text-sm text-muted-foreground border-t pt-5">
                {specs.map((spec) => <div key={spec.label} className="flex justify-between gap-3"><span>{spec.label}</span><span className="font-medium text-foreground text-right">{spec.value}</span></div>)}
              </div>
              <Button asChild variant="cta" size="lg" className="mt-6 w-full h-auto min-h-12 whitespace-normal py-3"><Link to="/propiedades">Ver propiedades disponibles</Link></Button>
              <Button asChild variant="outline" size="lg" className="mt-3 w-full h-auto min-h-12 whitespace-normal py-3"><a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"><MessageCircle /> Hablar por WhatsApp</a></Button>
            </div>
          </aside>
        </div>
      </section>
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-narrow text-center">
          <h2 className="text-2xl md:text-4xl font-extrabold">¿Buscas un local similar?</h2>
          <p className="mt-3 text-primary-foreground/80">Escríbenos para conocer los locales disponibles.</p>
          <Button asChild variant="cta" size="lg" className="mt-7 w-full sm:w-auto h-auto min-h-12 whitespace-normal py-3"><a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"><MessageCircle /> Hablar por WhatsApp</a></Button>
        </div>
      </section>
      <Dialog open={selectedPhoto !== undefined} onOpenChange={(open) => { if (!open) setLightbox(null); }}>
        <DialogContent className="max-w-5xl w-[calc(100%-2rem)] p-4 pt-10">
          <DialogTitle className="sr-only">Fotografías del local en Avenida de las Américas</DialogTitle>
          <DialogDescription className="sr-only">{selectedPhoto?.alt}</DialogDescription>
          {selectedPhoto && <img src={selectedPhoto.src} alt={selectedPhoto.alt} className="w-full max-h-[70vh] object-contain" />}
          <div className="flex items-center justify-between">
            <Button variant="outline" size="icon" aria-label="Foto anterior" onClick={() => setLightbox((index) => index === null ? null : (index + photos.length - 1) % photos.length)}><ArrowLeft /></Button>
            <span className="text-sm text-muted-foreground">{lightbox === null ? 0 : lightbox + 1} / {photos.length}</span>
            <Button variant="outline" size="icon" aria-label="Foto siguiente" onClick={() => setLightbox((index) => index === null ? null : (index + 1) % photos.length)}><ArrowRight /></Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}