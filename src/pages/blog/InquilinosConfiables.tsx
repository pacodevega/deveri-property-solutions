import BlogPost from "@/components/BlogPost";
import { Callout, StepCards, FeatureList, Highlight, StatRow } from "@/components/blog/BlogElements";
import heroImage from "@/assets/blog/inquilinos-confiables.jpg";

export default function Post4() {
  return (
    <BlogPost
      heroImage={heroImage}
      heroAlt="Apretón de manos entre propietario e inquilino"
      title="Cómo encontrar inquilinos confiables para tu propiedad"
      metaTitle="Cómo encontrar inquilinos confiables para tu propiedad | DEVERI"
      metaDescription="Aprende a encontrar inquilinos confiables en Veracruz. Proceso de filtrado, verificación y selección para proteger tu inversión."
      ctaText="Quiero encontrar inquilinos"
      category="Renta"
    >
      <p>
        Encontrar inquilinos confiables es una de las mayores preocupaciones de los propietarios en Veracruz y Boca del Río. Un mal inquilino puede generar pérdidas de miles de pesos y años de dolores de cabeza.
      </p>

      <StatRow stats={[
        { value: "70%", label: "Problemas por mala selección" },
        { value: "3-6", label: "Meses para desalojar" },
        { value: "$50K+", label: "Costo promedio de un mal inquilino" },
        { value: "95%", label: "Tasa de éxito con filtrado DEVERI" },
      ]} />

      <h2>¿Qué hace a un inquilino confiable?</h2>
      <FeatureList items={[
        { title: "Historial de pago positivo", description: "Sin atrasos ni adeudos en rentas anteriores" },
        { title: "Estabilidad laboral", description: "Ingresos comprobables y constantes" },
        { title: "Referencias verificables", description: "De propietarios anteriores y contactos laborales" },
        { title: "Compromiso con el inmueble", description: "Historial de cuidado y responsabilidad" },
      ]} />

      <h2>Proceso de filtrado recomendado</h2>
      <StepCards steps={[
        { title: "Entrevista inicial", description: "Conoce las necesidades, expectativas y situación del candidato de forma directa." },
        { title: "Verificación de ingresos", description: "Comprobantes de nómina, estados de cuenta o declaraciones que respalden su capacidad de pago." },
        { title: "Referencias de propietarios", description: "Contacto directo con arrendadores anteriores para confirmar historial de pago y comportamiento." },
        { title: "Revisión crediticia", description: "Consulta en buró de crédito para detectar patrones de incumplimiento financiero." },
        { title: "Presentación al propietario", description: "Te mostramos los candidatos con nuestra calificación de cada uno para que tú tomes la decisión final." },
      ]} />

      <Callout type="warning" title="Errores que salen caros">
        Aceptar al primero que llega por urgencia, no verificar referencias, confiar solo en la primera impresión o no formalizar el contrato adecuadamente son errores que casi siempre terminan en pérdidas.
      </Callout>

      <h2>La ventaja de un proceso profesional</h2>
      <Highlight>
        Delegar la selección de inquilinos a profesionales reduce significativamente el riesgo y asegura ocupantes que cuiden tu propiedad. En DEVERI filtramos y calificamos candidatos para que tú elijas con confianza.
      </Highlight>
    </BlogPost>
  );
}
