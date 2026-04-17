import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import { Clock, ArrowRight } from "lucide-react";

import imgAdministrar from "@/assets/blog/administrar-propiedad.webp";
import imgErrores from "@/assets/blog/errores-rentar-local.webp";
import imgCobrar from "@/assets/blog/cuanto-cobrar-renta.webp";
import imgInquilinos from "@/assets/blog/inquilinos-confiables.webp";
import imgVale from "@/assets/blog/vale-la-pena.webp";
import imgProblemas from "@/assets/blog/problemas-inquilinos.webp";
import imgMantenimiento from "@/assets/blog/mantenimiento-preventivo.webp";
import imgSinVivir from "@/assets/blog/rentar-sin-vivir.webp";
import imgTiempo from "@/assets/blog/tiempo-rentar.webp";
import imgAumentar from "@/assets/blog/aumentar-valor.webp";
import imgTerrenos from "@/assets/blog/terrenos-caros-veracruz.webp";
import imgTerrenosBaratos from "@/assets/blog/terrenos-baratos-veracruz.webp";
import imgRentaInversion from "@/assets/blog/renta-buena-inversion.webp";
import imgCisternas from "@/assets/blog/limpieza-cisternas-tinacos.webp";
import imgImper from "@/assets/blog/impermeabilizacion.webp";
import imgPlomeria from "@/assets/blog/problemas-plomeria.webp";
import imgElectricas from "@/assets/blog/instalaciones-electricas.webp";
import imgCondominios from "@/assets/blog/administracion-condominios.webp";
import imgCorrectivo from "@/assets/blog/mantenimiento-correctivo.webp";
import imgSalitre from "@/assets/blog/salitre-prevencion.webp";
import imgAirbnb from "@/assets/blog/airbnb-vs-renta-largo-plazo.webp";
import imgCadenas from "@/assets/blog/rentar-a-cadenas-nacionales.webp";

const articles = [
  {
    slug: "/blog/como-administrar-una-propiedad-en-veracruz",
    title: "Cómo administrar una propiedad en Veracruz sin complicaciones",
    description: "Guía completa para delegar la operación de tu inmueble y recibir ingresos sin estrés.",
    tag: "Administración",
    image: imgAdministrar,
    readTime: "5 min",
  },
  {
    slug: "/blog/errores-al-rentar-un-local-comercial-veracruz",
    title: "Errores al rentar un local comercial en Veracruz",
    description: "Evita los errores más comunes y protege tu inversión al rentar locales comerciales.",
    tag: "Renta",
    image: imgErrores,
    readTime: "4 min",
  },
  {
    slug: "/blog/cuanto-cobrar-de-renta-en-veracruz",
    title: "Cuánto cobrar de renta en Veracruz (guía 2026)",
    description: "Factores clave para definir el precio correcto y maximizar tus ingresos de renta.",
    tag: "Renta",
    image: imgCobrar,
    readTime: "5 min",
  },
  {
    slug: "/blog/como-encontrar-inquilinos-confiables",
    title: "Cómo encontrar inquilinos confiables para tu propiedad",
    description: "Proceso de filtrado, verificación y selección para proteger tu inversión inmobiliaria.",
    tag: "Renta",
    image: imgInquilinos,
    readTime: "4 min",
  },
  {
    slug: "/blog/administracion-de-propiedades-vale-la-pena",
    title: "¿Vale la pena contratar administración de propiedades?",
    description: "Análisis de costos, beneficios y cuándo conviene la administración profesional.",
    tag: "Administración",
    image: imgVale,
    readTime: "5 min",
  },
  {
    slug: "/blog/problemas-comunes-con-inquilinos",
    title: "Problemas comunes con inquilinos y cómo evitarlos",
    description: "Conoce los problemas más frecuentes y cómo prevenirlos con gestión profesional.",
    tag: "Renta",
    image: imgProblemas,
    readTime: "4 min",
  },
  {
    slug: "/blog/mantenimiento-preventivo-propiedades",
    title: "Mantenimiento preventivo para propiedades: lo que debes saber",
    description: "Ahorra dinero y conserva tu inmueble con un programa de mantenimiento preventivo.",
    tag: "Mantenimiento",
    image: imgMantenimiento,
    readTime: "5 min",
  },
  {
    slug: "/blog/como-rentar-si-no-vives-en-veracruz",
    title: "Cómo rentar tu propiedad si no vives en Veracruz",
    description: "Descubre cómo administrar tu propiedad a distancia sin complicaciones.",
    tag: "Administración",
    image: imgSinVivir,
    readTime: "4 min",
  },
  {
    slug: "/blog/tiempo-promedio-para-rentar-propiedad",
    title: "Cuánto tiempo tarda en rentarse una propiedad en Veracruz",
    description: "Factores que influyen en el tiempo de vacancia y cómo reducirlo.",
    tag: "Renta",
    image: imgTiempo,
    readTime: "4 min",
  },
  {
    slug: "/blog/como-aumentar-el-valor-de-una-propiedad-en-renta",
    title: "Cómo aumentar el valor de tu propiedad en renta",
    description: "Estrategias de mejora, mantenimiento y gestión para maximizar tu retorno.",
    tag: "Inversión",
    image: imgAumentar,
    readTime: "5 min",
  },
  {
    slug: "/blog/terrenos-mas-caros-veracruz-boca-del-rio",
    title: "Los terrenos más caros de Veracruz, Boca del Río, Medellín y Riviera Veracruzana",
    description: "Ranking actualizado de precios por m² en las zonas más exclusivas de la conurbación. Datos reales para invertir.",
    tag: "Inversión",
    image: imgTerrenos,
    readTime: "7 min",
  },
  {
    slug: "/blog/terrenos-mas-baratos-veracruz-boca-del-rio",
    title: "Los terrenos más baratos en Veracruz, Boca del Río, Medellín y Riviera Veracruzana",
    description: "Ranking de terrenos con menor precio por m². Oportunidades reales de inversión a largo plazo.",
    tag: "Inversión",
    image: imgTerrenosBaratos,
    readTime: "7 min",
  },
  {
    slug: "/blog/renta-buena-inversion",
    title: "¿Cuánto debes ganar por renta para que sea buena inversión?",
    description: "Aprende a calcular tu retorno real, analizar el mercado y decidir si te conviene rentar o vender.",
    tag: "Inversión",
    image: imgRentaInversion,
    readTime: "8 min",
  },
  {
    slug: "/blog/limpieza-de-cisternas-y-tinacos-veracruz",
    title: "Limpieza de cisternas y tinacos en Veracruz: guía completa",
    description: "Frecuencia, costos y proceso profesional. Protege la salud de tus inquilinos y la calidad del agua.",
    tag: "Mantenimiento",
    image: imgCisternas,
    readTime: "5 min",
  },
  {
    slug: "/blog/impermeabilizacion-en-veracruz",
    title: "Impermeabilización en Veracruz: guía 2026 para proteger tu propiedad",
    description: "Tipos de impermeabilizante, costos por m², frecuencia y errores comunes en el clima de Veracruz.",
    tag: "Mantenimiento",
    image: imgImper,
    readTime: "6 min",
  },
  {
    slug: "/blog/problemas-de-plomeria-mas-comunes",
    title: "Problemas de plomería más comunes en propiedades de Veracruz",
    description: "Las 8 fallas que más afectan propiedades en Veracruz, costos reales y cómo prevenirlas.",
    tag: "Mantenimiento",
    image: imgPlomeria,
    readTime: "6 min",
  },
  {
    slug: "/blog/renovar-instalaciones-electricas-viejas",
    title: "Renovar instalaciones eléctricas viejas en Veracruz: guía completa",
    description: "Cuándo renovar, costos, riesgos y cómo cumplir con la NOM-001-SEDE para proteger tu inmueble.",
    tag: "Mantenimiento",
    image: imgElectricas,
    readTime: "6 min",
  },
  {
    slug: "/blog/administracion-de-condominios-areas-comunes",
    title: "Administración de condominios y mantenimiento de áreas comunes",
    description: "Cómo administrar un condominio en Veracruz: cuotas, asambleas, áreas comunes y proveedores.",
    tag: "Administración",
    image: imgCondominios,
    readTime: "7 min",
  },
  {
    slug: "/blog/mantenimiento-correctivo-propiedades",
    title: "Mantenimiento correctivo: cuándo aplicarlo y cómo evitar que se repita",
    description: "Tipos de correctivo, costos típicos en Veracruz y cómo gestionarlo sin que se vuelva recurrente.",
    tag: "Mantenimiento",
    image: imgCorrectivo,
    readTime: "6 min",
  },
  {
    slug: "/blog/como-eliminar-y-prevenir-salitre",
    title: "Salitre en propiedades de Veracruz: cómo eliminarlo y prevenirlo",
    description: "El salitre destruye propiedades en la costa. Causas, tratamiento profesional y prevención efectiva.",
    tag: "Mantenimiento",
    image: imgSalitre,
    readTime: "7 min",
  },
  {
    slug: "/blog/airbnb-vs-renta-largo-plazo-veracruz",
    title: "Airbnb vs renta a largo plazo en Veracruz: ¿cuál conviene más?",
    description: "Comparativa real de ingresos, ocupación y carga operativa. Por qué la renta tradicional gana en Veracruz.",
    tag: "Renta",
    image: imgAirbnb,
    readTime: "7 min",
  },
  {
    slug: "/blog/rentar-propiedad-a-oxxo-six-cadenas-nacionales",
    title: "Cómo rentar tu propiedad a OXXO, Six o cadenas nacionales en Veracruz",
    description: "Qué buscan las cadenas nacionales, requisitos del inmueble y cómo cerrar contratos a 10-15 años.",
    tag: "Renta",
    image: imgCadenas,
    readTime: "8 min",
  },
];

export default function Blog() {
  const featured = articles[0];
  const rest = articles.slice(1);

  return (
    <>
      <SEOHead
        title="Blog | Guías para propietarios en Veracruz | DEVERI"
        description="Consejos y guías sobre administración de propiedades, renta e inversión inmobiliaria en Veracruz, Boca del Río, Medellín y Riviera Veracruzana."
      />

      {/* Hero */}
      <section className="section-padding" style={{ background: "var(--hero-gradient)" }}>
        <div className="container-narrow text-primary-foreground">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Guías para propietarios inteligentes
          </h1>
          <p className="text-lg text-primary-foreground/80 max-w-xl">
            Consejos y recursos sobre administración, renta y mantenimiento de propiedades en Veracruz.
          </p>
        </div>
      </section>

      {/* Featured article */}
      <section className="section-padding pb-0">
        <div className="container-narrow">
          <Link to={featured.slug} className="group block">
            <article className="relative rounded-2xl overflow-hidden h-[400px] md:h-[480px]">
              <img
                src={featured.image}
                alt={featured.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                width={1200}
                height={672}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 text-primary-foreground">
                <span className="text-xs font-semibold bg-accent text-accent-foreground px-3 py-1 rounded-full">
                  {featured.tag}
                </span>
                <h2 className="text-2xl md:text-3xl font-bold mt-3 group-hover:text-accent transition-colors">
                  {featured.title}
                </h2>
                <p className="text-primary-foreground/80 mt-2 max-w-lg">{featured.description}</p>
                <div className="flex items-center gap-2 mt-3 text-sm text-primary-foreground/60">
                  <Clock className="w-4 h-4" /> {featured.readTime} de lectura
                </div>
              </div>
            </article>
          </Link>
        </div>
      </section>

      {/* Article grid */}
      <section className="section-padding">
        <div className="container-narrow">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((a, i) => (
              <Link key={i} to={a.slug} className="group">
                <article className="bg-card border rounded-2xl overflow-hidden hover:shadow-xl hover:border-accent/30 transition-all h-full flex flex-col">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={a.image}
                      alt={a.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                      width={1200}
                      height={672}
                    />
                    <div className="absolute top-3 left-3">
                      <span className="text-xs font-semibold bg-accent text-accent-foreground px-3 py-1 rounded-full">
                        {a.tag}
                      </span>
                    </div>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <h2 className="text-lg font-bold text-foreground group-hover:text-accent transition-colors">
                      {a.title}
                    </h2>
                    <p className="text-sm text-muted-foreground mt-2 flex-1">{a.description}</p>
                    <div className="flex items-center justify-between mt-4 text-sm">
                      <span className="flex items-center gap-1.5 text-muted-foreground">
                        <Clock className="w-3.5 h-3.5" /> {a.readTime}
                      </span>
                      <span className="flex items-center gap-1 text-accent font-medium group-hover:gap-2 transition-all">
                        Leer <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
