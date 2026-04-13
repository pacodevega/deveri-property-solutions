import BlogPost from "@/components/BlogPost";

export default function Post7() {
  return (
    <BlogPost
      title="Mantenimiento preventivo para propiedades: lo que debes saber"
      metaTitle="Mantenimiento preventivo para propiedades: lo que debes saber | DEVERI"
      metaDescription="Guía de mantenimiento preventivo para propiedades en Veracruz. Ahorra dinero y conserva tu inmueble con estos consejos."
      ctaText="Quiero mantenimiento profesional"
    >
      <p className="text-muted-foreground text-lg mb-6">
        El mantenimiento preventivo es la clave para conservar el valor de tu propiedad en Veracruz y evitar reparaciones costosas.
      </p>

      <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">¿Qué es el mantenimiento preventivo?</h2>
      <p className="text-muted-foreground mb-4">Son las acciones programadas para prevenir fallas antes de que ocurran: revisiones periódicas, limpieza de sistemas y reparaciones menores.</p>

      <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Áreas clave de mantenimiento preventivo</h2>
      <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
        <li>Impermeabilización: revisión anual antes de temporada de lluvias</li>
        <li>Plomería: inspección de tuberías y limpieza de tinacos y cisternas</li>
        <li>Electricidad: revisión de instalaciones y conexiones</li>
        <li>Pintura: protección de fachadas y superficies expuestas</li>
        <li>Estructural: revisión de grietas, humedad y cimentación</li>
      </ul>

      <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Beneficios del mantenimiento preventivo</h2>
      <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
        <li>Reduce costos de reparación hasta un 40%</li>
        <li>Mantiene el valor de la propiedad</li>
        <li>Mejora la satisfacción de los inquilinos</li>
        <li>Previene emergencias costosas</li>
      </ul>

      <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">¿Cada cuánto hacer mantenimiento?</h2>
      <p className="text-muted-foreground mb-4">
        Lo ideal es un programa de revisiones trimestrales con un mantenimiento mayor anual. En el clima de Veracruz, la impermeabilización y la revisión de plomería son especialmente importantes.
      </p>
    </BlogPost>
  );
}
