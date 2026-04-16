import { Button } from "@/components/ui/button";
import { MessageCircle, Clock, Calendar, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";

const buildWhatsAppUrl = (service: string) =>
  `https://wa.me/522296840727?text=${encodeURIComponent(`Hola, leí su artículo sobre ${service} y quiero más información`)}`;

interface BlogPostProps {
  title: string;
  metaTitle: string;
  metaDescription: string;
  heroImage: string;
  heroAlt: string;
  readTime?: string;
  date?: string;
  children: React.ReactNode;
  ctaText?: string;
}

export default function BlogPost({
  title,
  metaTitle,
  metaDescription,
  heroImage,
  heroAlt,
  readTime = "5 min",
  date = "Abril 2026",
  children,
  ctaText = "Quiero más información",
}: BlogPostProps) {
  const whatsappUrl = buildWhatsAppUrl(title);

  return (
    <>
      <SEOHead title={metaTitle} description={metaDescription} />

      {/* Hero with image */}
      <section className="relative h-[50vh] min-h-[400px] flex items-end overflow-hidden">
        <img
          src={heroImage}
          alt={heroAlt}
          className="absolute inset-0 w-full h-full object-cover"
          width={1200}
          height={672}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/60 to-transparent" />
        <div className="relative z-10 container-narrow pb-10 md:pb-14 text-primary-foreground">
          <Link
            to="/blog"
            className="inline-flex items-center gap-1.5 text-primary-foreground/70 hover:text-primary-foreground text-sm mb-4 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Volver al blog
          </Link>
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight max-w-3xl">
            {title}
          </h1>
          <div className="flex items-center gap-4 mt-4 text-sm text-primary-foreground/70">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" /> {date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" /> {readTime} de lectura
            </span>
          </div>
        </div>
      </section>

      {/* Article content */}
      <article className="section-padding">
        <div className="container-narrow max-w-3xl prose-custom">
          {children}

          {/* CTA */}
          <div className="mt-16 relative overflow-hidden rounded-2xl border border-accent/20">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-accent/10" />
            <div className="relative p-8 md:p-10 text-center">
              <h2 className="text-2xl font-bold text-foreground mb-2">
                ¿Te interesa saber más?
              </h2>
              <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                Escríbenos por WhatsApp y resolvemos tus dudas sin compromiso.
              </p>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <Button variant="cta" size="lg" className="shadow-lg">
                  <MessageCircle className="w-5 h-5" /> {ctaText}
                </Button>
              </a>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
