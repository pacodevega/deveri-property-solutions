import BlogPost from "@/components/BlogPost";
import { Callout, StepCards, FeatureList, Highlight, StatRow } from "@/components/blog/BlogElements";
import heroImage from "@/assets/blog/rentar-sin-vivir.jpg";

export default function Post8() {
  return (
    <BlogPost
      heroImage={heroImage}
      heroAlt="Persona administrando propiedad a distancia desde su computadora"
      title="Cómo rentar tu propiedad si no vives en Veracruz"
      metaTitle="Cómo rentar tu propiedad si no vives en Veracruz | DEVERI"
      metaDescription="¿Tienes una propiedad en Veracruz pero no vives ahí? Descubre cómo rentarla y administrarla a distancia sin complicaciones."
      ctaText="Quiero administrar a distancia"
      category="Administración"
    >
      <p>
        Cada vez más propietarios tienen inmuebles en Veracruz, Boca del Río o la Riviera Veracruzana pero viven en otra ciudad o país. La distancia no tiene que ser un obstáculo — con el sistema correcto, es completamente manejable.
      </p>

      <StatRow stats={[
        { value: "40%", label: "Propietarios viven fuera" },
        { value: "100%", label: "Operación remota posible" },
        { value: "0", label: "Viajes necesarios" },
        { value: "24/7", label: "Cobertura de emergencias" },
      ]} />

      <h2>Retos de administrar a distancia</h2>
      <FeatureList items={[
        { title: "Sin supervisión presencial", description: "No puedes verificar el estado del inmueble personalmente" },
        { title: "Emergencias lentas", description: "Responder a problemas urgentes toma más tiempo desde lejos" },
        { title: "Cobro complicado", description: "Dar seguimiento a inquilinos a distancia es difícil" },
        { title: "Mantenimiento postergado", description: "Sin ojos locales, los problemas crecen sin ser detectados" },
      ]} />

      <h2>La solución: un equipo local profesional</h2>
      <StepCards steps={[
        { title: "Evaluación y preparación", description: "Evaluamos tu propiedad, definimos el precio óptimo y la preparamos para atraer a los mejores inquilinos." },
        { title: "Colocación del inquilino", description: "Filtramos, verificamos y seleccionamos candidatos. Te presentamos opciones con nuestra calificación para que decidas." },
        { title: "Operación mensual", description: "Cobramos, supervisamos, damos mantenimiento y te enviamos reportes claros. Tú solo recibes tu renta." },
        { title: "Reportes y transparencia", description: "Acceso a información de tu propiedad: ingresos, gastos, estado del inmueble y cualquier novedad." },
      ]} />

      <Callout type="insight" title="Casos reales">
        Administramos propiedades de dueños en Ciudad de México, Monterrey, Guadalajara e incluso en el extranjero. Todos reciben sus ingresos puntuales sin tener que viajar.
      </Callout>

      <Highlight>
        Con el aliado correcto en Veracruz, tu propiedad trabaja para ti sin importar dónde estés. La distancia deja de ser un problema y se convierte en una ventaja.
      </Highlight>
    </BlogPost>
  );
}
