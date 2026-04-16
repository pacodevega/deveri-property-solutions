import BlogPost from "@/components/BlogPost";
import { Callout, StepCards, FeatureList, Highlight, StatRow } from "@/components/blog/BlogElements";
import heroImage from "@/assets/blog/mantenimiento-preventivo.jpg";

export default function Post7() {
  return (
    <BlogPost
      heroImage={heroImage}
      heroAlt="Técnico realizando mantenimiento preventivo en una propiedad"
      title="Mantenimiento preventivo para propiedades: lo que debes saber"
      metaTitle="Mantenimiento preventivo para propiedades: lo que debes saber | DEVERI"
      metaDescription="Guía de mantenimiento preventivo para propiedades en Veracruz. Ahorra dinero y conserva tu inmueble con estos consejos."
      ctaText="Quiero mantenimiento profesional"
      category="Mantenimiento"
    >
      <p>
        El mantenimiento preventivo es la clave para conservar el valor de tu propiedad en Veracruz y evitar reparaciones costosas. Invertir poco hoy ahorra mucho mañana.
      </p>

      <StatRow stats={[
        { value: "40%", label: "Ahorro vs. correctivo" },
        { value: "2x", label: "Mayor vida útil" },
        { value: "15%", label: "Mayor valor de renta" },
        { value: "90%", label: "Emergencias prevenibles" },
      ]} />

      <h2>¿Qué es el mantenimiento preventivo?</h2>
      <p>
        Son las acciones programadas para prevenir fallas antes de que ocurran: revisiones periódicas, limpieza de sistemas y reparaciones menores que evitan gastos mayores.
      </p>

      <h2>Áreas clave</h2>
      <FeatureList columns={2} items={[
        { title: "Impermeabilización", description: "Revisión anual antes de temporada de lluvias" },
        { title: "Plomería", description: "Inspección de tuberías, tinacos y cisternas" },
        { title: "Electricidad", description: "Revisión de instalaciones y conexiones" },
        { title: "Pintura", description: "Protección de fachadas y superficies expuestas" },
        { title: "Estructura", description: "Revisión de grietas, humedad y cimentación" },
        { title: "Áreas comunes", description: "Limpieza y mantenimiento de espacios compartidos" },
      ]} />

      <h2>Programa recomendado</h2>
      <StepCards steps={[
        { title: "Revisión trimestral", description: "Inspección general de plomería, electricidad y áreas comunes para detectar problemas temprano." },
        { title: "Mantenimiento semestral", description: "Limpieza profunda de cisternas, revisión de impermeabilización y pintura de retoque." },
        { title: "Mantenimiento anual mayor", description: "Impermeabilización completa, revisión estructural y actualización de instalaciones según necesidad." },
      ]} />

      <Callout type="tip" title="Clima de Veracruz">
        En el clima húmedo y caluroso de Veracruz, la impermeabilización y la revisión de plomería son especialmente importantes. No esperes a que llueva para descubrir una filtración.
      </Callout>

      <Highlight>
        Un programa de mantenimiento preventivo bien ejecutado puede reducir tus costos de reparación hasta un 40% y mantener el valor de tu propiedad a largo plazo.
      </Highlight>
    </BlogPost>
  );
}
