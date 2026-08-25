import { Button } from "@/components/ui/button";
import { MessageCircle, Clock, Calendar, ArrowLeft, ChevronUp } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
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
  ctaUrl?: string;
  ctaSubtext?: string;
  category?: string;
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
  ctaUrl,
  ctaSubtext,
  category,
}: BlogPostProps) {
  const whatsappUrl = buildWhatsAppUrl(title);
  const finalCtaUrl = ctaUrl ?? whatsappUrl;
  const finalCtaSubtext = ctaSubtext ?? "Escríbenos por WhatsApp y resolvemos tus dudas sin compromiso.";
  const isInternal = finalCtaUrl.startsWith("/");
  const [progress, setProgress] = useState(0);

  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const article = document.getElementById("blog-article");
      if (!article) return;
      const rect = article.getBoundingClientRect();
      const total = article.scrollHeight;
      const scrolled = Math.max(0, -rect.top);
      setProgress(Math.min(100, (scrolled / total) * 100));
      setShowTop(window.scrollY > 600);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <SEOHead title={metaTitle} description={metaDescription} />

      {/* Reading progress bar */}
      <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-muted/30">
        <div className="h-full bg-accent transition-all duration-150" style={{ width: `${progress}%` }} />
      </div>

      {/* Hero */}
      <section className="relative h-[55vh] min-h-[440px] md:h-[60vh] flex items-end overflow-hidden">
        <img
          src={heroImage}
          alt={heroAlt}
          className="absolute inset-0 w-full h-full object-cover"
          width={1200}
          height={672}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/70 to-primary/20" />
        
        {/* Decorative grid */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h60v60H0z' fill='none' stroke='white' stroke-width='0.5'/%3E%3C/svg%3E\")" }} />

        <div className="relative z-10 container-narrow pb-12 md:pb-16 text-primary-foreground">
          <Link
            to="/blog"
            className="inline-flex items-center gap-1.5 text-primary-foreground/60 hover:text-primary-foreground text-sm mb-6 transition-colors backdrop-blur-sm bg-primary-foreground/5 px-3 py-1.5 rounded-full"
          >
            <ArrowLeft className="w-4 h-4" /> Volver al blog
          </Link>
          {category && (
            <span className="block text-xs font-semibold text-accent uppercase tracking-widest mb-3">
              {category}
            </span>
          )}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] max-w-4xl">
            {title}
          </h1>
          <div className="flex items-center gap-5 mt-6 text-sm text-primary-foreground/60">
            <span className="flex items-center gap-2 backdrop-blur-sm bg-primary-foreground/5 px-3 py-1.5 rounded-full">
              <Clock className="w-4 h-4" /> {readTime} de lectura
            </span>
          </div>
        </div>
      </section>

      {/* Article */}
      <article id="blog-article" className="section-padding">
        <div className="container-narrow max-w-3xl blog-prose">
          {children}

          {/* CTA */}
          <div className="mt-20 relative overflow-hidden rounded-3xl border border-accent/20">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-primary/5 to-transparent" />
            <div className="absolute -top-20 -right-20 w-60 h-60 bg-accent/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-primary/10 rounded-full blur-3xl" />
            <div className="relative p-10 md:p-14 text-center">
              <span className="text-xs font-semibold text-accent uppercase tracking-widest">Siguiente paso</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mt-3 mb-3">
                ¿Te interesa saber más?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-md mx-auto text-lg">
                Escríbenos por WhatsApp y resolvemos tus dudas sin compromiso.
              </p>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <Button variant="cta" size="lg" className="shadow-lg text-base px-8 py-6">
                  <MessageCircle className="w-5 h-5" /> {ctaText}
                </Button>
              </a>
            </div>
          </div>
        </div>
      </article>

      {/* Scroll to top */}
      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full bg-accent text-accent-foreground shadow-xl flex items-center justify-center hover:scale-110 transition-transform"
          aria-label="Ir arriba"
        >
          <ChevronUp className="w-5 h-5" />
        </button>
      )}
    </>
  );
}
