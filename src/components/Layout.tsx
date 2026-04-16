import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import deveriLogo from "@/assets/deveri-logo.png";

const WHATSAPP_URL = "https://wa.me/522296840727?text=Hola%2C%20quiero%20información%20sobre%20administración%20de%20propiedades";

const navItems = [
  { label: "Inicio", path: "/" },
  { label: "Servicios", path: "/servicios" },
  { label: "Cómo funciona", path: "/como-funciona" },
  
  { label: "Blog", path: "/blog" },
  { label: "Contacto", path: "/contacto" },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b">
        <div className="container-narrow flex items-center justify-between h-16 px-4">
          <Link to="/" className="flex items-center">
            <img src={deveriLogo} alt="DEVERI" className="h-8" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-accent ${
                  location.pathname === item.path ? "text-accent" : "text-foreground/70"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <Button variant="cta" size="sm">
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </Button>
            </a>
          </nav>

          {/* Mobile toggle */}
          <button className="md:hidden text-foreground" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {menuOpen && (
          <nav className="md:hidden border-t bg-background px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMenuOpen(false)}
                className={`block text-sm font-medium py-2 ${
                  location.pathname === item.path ? "text-accent" : "text-foreground/70"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <Button variant="cta" className="w-full mt-2">
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </Button>
            </a>
          </nav>
        )}
      </header>

      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground section-padding">
        <div className="container-narrow">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <img src={deveriLogo} alt="DEVERI" className="h-8 brightness-0 invert mb-2" />
              <p className="text-primary-foreground/70 text-sm">
                Más de 25 años administrando propiedades en Veracruz, Boca del Río y Riviera Veracruzana.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Servicios</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/70">
                <li><Link to="/administracion-de-propiedades-veracruz" className="hover:text-accent transition-colors">Administración</Link></li>
                <li><Link to="/renta-de-propiedades-veracruz" className="hover:text-accent transition-colors">Renta</Link></li>
                <li><Link to="/mantenimiento-de-propiedades-veracruz" className="hover:text-accent transition-colors">Mantenimiento</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Contacto</h4>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-sm text-accent hover:underline">
                Escríbenos por WhatsApp
              </a>
            </div>
          </div>
          <div className="mt-12 pt-6 border-t border-primary-foreground/20 text-center text-sm text-primary-foreground/50">
            <div className="flex justify-center gap-4 mb-2">
              <Link to="/terminos-y-condiciones" className="hover:text-accent transition-colors">Términos y Condiciones</Link>
              <span>·</span>
              <Link to="/aviso-de-privacidad" className="hover:text-accent transition-colors">Aviso de Privacidad</Link>
            </div>
            © {new Date().getFullYear()} DEVERI. Todos los derechos reservados.
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-accent hover:bg-accent-hover text-accent-foreground rounded-full p-4 shadow-xl transition-all duration-300 hover:scale-110"
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </div>
  );
}
