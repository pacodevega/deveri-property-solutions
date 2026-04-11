import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MessageCircle, Building2, Key, Wrench, Clock, DollarSign, Shield, Users, CheckCircle2 } from "lucide-react";
import heroImg from "@/assets/hero-properties.jpg";
import teamImg from "@/assets/team-working.jpg";
import ClientGrid from "@/components/ClientGrid";

const WHATSAPP_URL = "https://wa.me/529211234567?text=Hola%2C%20quiero%20información%20sobre%20administración%20de%20propiedades";

const Index = () => {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden" style={{ background: "var(--hero-gradient)" }}>
        <div className="absolute inset-0">
          <img src={heroImg} alt="Propiedades en Veracruz" width={1920} height={1080} className="w-full h-full object-cover opacity-20" />
        </div>
        <div className="relative container-narrow section-padding text-primary-foreground">
          <div className="max-w-2xl animate-fade-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              Administra tu propiedad sin involucrarte en nada
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 leading-relaxed">
              Nos encargamos de todo: renta, administración y mantenimiento en Veracruz, Boca del Río y Riviera Veracruzana.
            </p>
            <div className="flex flex-wrap gap-6 mb-10">
              {["+25 años de experiencia", "+100 propiedades administradas", "Clientes como Heineken y Banco Azteca"].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm md:text-base">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                  <span className="text-primary-foreground/90">{item}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-4">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <Button variant="hero">
                  <MessageCircle className="w-5 h-5" />
                  Escríbenos por WhatsApp
                </Button>
              </a>
              <Link to="/como-funciona">
                <Button variant="outline-light" size="lg">
                  Cómo funciona
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEMA */}
      <section className="section-padding bg-section-light">
        <div className="container-narrow text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Tener una propiedad no debería convertirse en un trabajo
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Cobros, mantenimiento, inquilinos, problemas constantes… Si tienes una propiedad, sabes lo desgastante que puede ser.
          </p>
        </div>
      </section>

      {/* SOLUCIÓN */}
      <section className="section-padding">
        <div className="container-narrow grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Nosotros nos encargamos por completo
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              En <span className="font-extrabold text-accent">DEVERI</span> gestionamos tu propiedad como si fuera nuestra. Tú solo recibes resultados.
            </p>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <Button variant="cta" size="lg">
                <MessageCircle className="w-5 h-5" />
                Quiero delegar mi propiedad
              </Button>
            </a>
          </div>
          <img src={teamImg} alt="Equipo DEVERI trabajando" width={1280} height={720} loading="lazy" className="rounded-xl shadow-xl" />
        </div>
      </section>

      {/* SERVICIOS */}
      <section className="section-padding bg-section-light">
        <div className="container-narrow">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
            Nuestros servicios
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Building2, title: "Administración", desc: "Supervisión total, cobros, reportes y control.", link: "/servicios/administracion" },
              { icon: Key, title: "Renta", desc: "Encontramos inquilinos confiables y nos encargamos del proceso.", link: "/servicios/renta" },
              { icon: Wrench, title: "Mantenimiento", desc: "Resolución rápida sin que tengas que intervenir.", link: "/servicios/mantenimiento" },
            ].map((s) => (
              <Link key={s.title} to={s.link} className="group bg-card rounded-xl p-8 shadow-sm border hover:shadow-lg hover:border-accent/30 transition-all duration-300">
                <s.icon className="w-10 h-10 text-accent mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-2">{s.title}</h3>
                <p className="text-muted-foreground">{s.desc}</p>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <Button variant="cta" size="lg">
                <MessageCircle className="w-5 h-5" />
                Quiero delegar mi propiedad
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* PRUEBA SOCIAL */}
      <section className="section-padding">
        <div className="container-narrow text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Empresas que ya confían en <span className="text-accent">DEVERI</span>
          </h2>
          <p className="text-muted-foreground mb-10">Gestionamos propiedades para empresas y propietarios exigentes.</p>
          <ClientGrid />
        </div>
      </section>

      {/* BENEFICIOS */}
      <section className="section-padding bg-section-light">
        <div className="container-narrow text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
            Lo que ganas al trabajar con nosotros
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Clock, title: "Tiempo libre", desc: "Dedícate a lo que importa." },
              { icon: DollarSign, title: "Ingresos constantes", desc: "Cobros puntuales y seguros." },
              { icon: Shield, title: "Cero estrés", desc: "Nos encargamos de todo." },
              { icon: Users, title: "Control total", desc: "Sin involucrarte operativamente." },
            ].map((b) => (
              <div key={b.title} className="flex flex-col items-center text-center">
                <div className="bg-accent/10 rounded-full p-4 mb-4">
                  <b.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-bold text-foreground mb-1">{b.title}</h3>
                <p className="text-sm text-muted-foreground">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRECIOS */}
      <section className="section-padding">
        <div className="container-narrow text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Modelo claro, sin sorpresas
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mt-10 max-w-4xl mx-auto">
            {[
              { title: "Colocación", price: "1 mes de renta", desc: "Encontramos al inquilino ideal." },
              { title: "Administración", price: "10% mensual", desc: "Gestión completa de tu propiedad." },
              { title: "Mantenimiento", price: "Bajo cotización", desc: "Según las necesidades específicas." },
            ].map((p) => (
              <div key={p.title} className="bg-card border rounded-xl p-8 text-center">
                <h3 className="font-bold text-lg text-foreground mb-2">{p.title}</h3>
                <p className="text-3xl font-extrabold text-accent mb-2">{p.price}</p>
                <p className="text-sm text-muted-foreground">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-section-light">
        <div className="container-narrow max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-10">Preguntas frecuentes</h2>
          <div className="space-y-6">
            {[
              { q: "¿Tengo que involucrarme?", a: "No, nosotros gestionamos todo. Tú solo recibes reportes y resultados." },
              { q: "¿Cómo sé que mi propiedad está bien administrada?", a: "Recibes reportes constantes con el estado de tu propiedad, cobros e incidencias." },
              { q: "¿Qué pasa si hay problemas?", a: "Nos encargamos completamente. Resolvemos cualquier situación sin que tengas que intervenir." },
            ].map((f) => (
              <div key={f.q} className="bg-card rounded-xl p-6 border">
                <h3 className="font-bold text-foreground mb-2">{f.q}</h3>
                <p className="text-muted-foreground">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="section-padding" style={{ background: "var(--hero-gradient)" }}>
        <div className="container-narrow text-center text-primary-foreground">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Deja de preocuparte por tu propiedad
          </h2>
          <p className="text-primary-foreground/80 mb-8 text-lg">
            Delegar es la decisión más fácil y lógica. Contáctanos ahora.
          </p>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
            <Button variant="hero">
              <MessageCircle className="w-5 h-5" />
              Escríbenos ahora por WhatsApp
            </Button>
          </a>
        </div>
      </section>
    </>
  );
};

export default Index;
