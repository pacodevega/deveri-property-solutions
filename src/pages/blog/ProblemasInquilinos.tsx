import BlogPost from "@/components/BlogPost";
import { Callout, StepCards, FeatureList, Highlight, StatRow } from "@/components/blog/BlogElements";
import heroImage from "@/assets/blog/problemas-inquilinos.jpg";

export default function Post6() {
  return (
    <BlogPost
      heroImage={heroImage}
      heroAlt="Propietario revisando daños en una propiedad"
      title="Problemas comunes con inquilinos y cómo evitarlos"
      metaTitle="Problemas comunes con inquilinos y cómo evitarlos | DEVERI"
      metaDescription="Conoce los problemas más comunes con inquilinos en Veracruz y cómo prevenirlos con una gestión profesional."
      ctaText="Quiero evitar problemas"
      category="Renta"
    >
      <p>
        Los problemas con inquilinos son una de las principales razones por las que los propietarios en Veracruz buscan ayuda profesional. La buena noticia: la mayoría son completamente prevenibles.
      </p>

      <StatRow stats={[
        { value: "4 de 10", label: "Propietarios enfrentan problemas" },
        { value: "85%", label: "Son prevenibles" },
        { value: "$30K+", label: "Costo promedio de un conflicto" },
        { value: "6 meses", label: "Duración promedio de un proceso" },
      ]} />

      <h2>Los problemas más frecuentes</h2>
      <StepCards steps={[
        { title: "Impago de renta", description: "El problema más común. Se previene con un proceso riguroso de selección y contratos bien elaborados con cláusulas claras de penalización." },
        { title: "Daños a la propiedad", description: "Supervisión periódica y un inventario detallado con fotos al inicio del contrato son clave para prevenir y documentar cualquier daño." },
        { title: "Conflictos de convivencia", description: "En propiedades con múltiples inquilinos, reglas claras y un administrador como intermediario neutral evitan conflictos directos." },
        { title: "Abandono del inmueble", description: "El seguimiento constante y la comunicación regular previenen situaciones de abandono inesperado que afectan tu inversión." },
      ]} />

      <Callout type="warning" title="Señal de alerta">
        Si un inquilino comienza a retrasar pagos, evitar la comunicación o incumplir reglas menores, son señales tempranas de problemas mayores. Actuar rápido marca la diferencia.
      </Callout>

      <h2>Estrategia de prevención</h2>
      <FeatureList items={[
        { title: "Selección rigurosa", description: "Filtrar candidatos elimina la mayoría de problemas antes de que empiecen" },
        { title: "Contratos sólidos", description: "Cláusulas claras que protejan ambas partes y definan consecuencias" },
        { title: "Supervisión constante", description: "Visitas programadas y comunicación regular con los inquilinos" },
        { title: "Respuesta rápida", description: "Atender problemas menores antes de que escalen a conflictos mayores" },
      ]} />

      <Highlight>
        La mejor prevención es un sistema de administración profesional que combine selección rigurosa, contratos sólidos y supervisión constante. En DEVERI, ese es nuestro estándar.
      </Highlight>
    </BlogPost>
  );
}
