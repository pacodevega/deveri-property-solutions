import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";

const WHATSAPP_URL = "https://wa.me/529211234567?text=Hola%2C%20quiero%20información%20sobre%20administración%20de%20propiedades";

interface BlogPostProps {
  title: string;
  metaTitle: string;
  metaDescription: string;
  children: React.ReactNode;
  ctaText?: string;
}

export default function BlogPost({ title, metaTitle, metaDescription, children, ctaText = "Quiero más información" }: BlogPostProps) {
  return (
    <>
      <SEOHead title={metaTitle} description={metaDescription} />

      <section className="section-padding" style={{ background: "var(--hero-gradient)" }}>
        <div className="container-narrow text-primary-foreground">
          <Link to="/blog" className="text-primary-foreground/60 hover:text-primary-foreground text-sm mb-4 inline-block">← Volver al blog</Link>
          <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">{title}</h1>
        </div>
      </section>

      <article className="section-padding">
        <div className="container-narrow max-w-3xl prose-custom">
          {children}

          {/* CTA */}
          <div className="mt-12 bg-card border rounded-xl p-8 text-center">
            <h2 className="text-xl font-bold text-foreground mb-2">¿Te interesa saber más?</h2>
            <p className="text-muted-foreground mb-4">Escríbenos por WhatsApp y resolvemos tus dudas sin compromiso.</p>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <Button variant="cta" size="lg">
                <MessageCircle className="w-5 h-5" /> {ctaText}
              </Button>
            </a>
          </div>
        </div>
      </article>
    </>
  );
}
