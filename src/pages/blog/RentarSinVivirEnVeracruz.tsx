import BlogPost from "@/components/BlogPost";
import heroImage from "@/assets/blog/rentar-sin-vivir.jpg";

export default function Post8() {
  return (
    <BlogPost
      title="Cómo rentar tu propiedad si no vives en Veracruz"
      metaTitle="Cómo rentar tu propiedad si no vives en Veracruz | DEVERI"
      metaDescription="¿Tienes una propiedad en Veracruz pero no vives ahí? Descubre cómo rentarla y administrarla a distancia sin complicaciones."
      ctaText="Quiero administrar a distancia"
    >
      <p className="text-muted-foreground text-lg mb-6">
        Cada vez más propietarios tienen inmuebles en Veracruz, Boca del Río o la Riviera Veracruzana pero viven en otra ciudad o país. Rentar a distancia es posible, pero requiere un sistema confiable.
      </p>

      <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Retos de administrar a distancia</h2>
      <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
        <li>No puedes supervisar el inmueble personalmente</li>
        <li>Responder a emergencias toma más tiempo</li>
        <li>Cobrar y dar seguimiento a inquilinos es complicado</li>
        <li>El mantenimiento se posterga por falta de supervisión</li>
      </ul>

      <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">La solución: administración profesional local</h2>
      <p className="text-muted-foreground mb-4">
        Contar con un equipo local que opere tu propiedad te permite recibir ingresos sin preocuparte por la gestión diaria. Desde cobros hasta mantenimiento, todo se resuelve sin tu intervención.
      </p>

      <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">¿Qué necesitas para empezar?</h2>
      <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
        <li>Un aliado confiable en Veracruz que conozca el mercado</li>
        <li>Un sistema de reportes para mantener visibilidad</li>
        <li>Contratos bien elaborados que te protejan</li>
        <li>Un equipo de mantenimiento disponible para emergencias</li>
      </ul>

      <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Casos de éxito</h2>
      <p className="text-muted-foreground mb-4">
        En DEVERI administramos propiedades de dueños que viven en Ciudad de México, Monterrey e incluso en el extranjero. Todos reciben sus ingresos puntuales y reportes sin tener que viajar.
      </p>
    </BlogPost>
  );
}
