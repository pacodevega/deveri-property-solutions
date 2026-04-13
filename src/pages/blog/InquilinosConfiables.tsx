import BlogPost from "@/components/BlogPost";

export default function Post4() {
  return (
    <BlogPost
      title="Cómo encontrar inquilinos confiables para tu propiedad"
      metaTitle="Cómo encontrar inquilinos confiables para tu propiedad | DEVERI"
      metaDescription="Aprende a encontrar inquilinos confiables en Veracruz. Proceso de filtrado, verificación y selección para proteger tu inversión."
      ctaText="Quiero encontrar inquilinos"
    >
      <p className="text-muted-foreground text-lg mb-6">
        Encontrar inquilinos confiables es una de las mayores preocupaciones de los propietarios en Veracruz y Boca del Río. Un mal inquilino puede generar pérdidas significativas.
      </p>

      <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">¿Qué hace a un inquilino confiable?</h2>
      <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
        <li>Historial de pago positivo</li>
        <li>Estabilidad laboral o de ingresos</li>
        <li>Referencias verificables</li>
        <li>Compromiso con el cuidado del inmueble</li>
      </ul>

      <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Proceso de filtrado recomendado</h2>
      <p className="text-muted-foreground mb-4">Un proceso riguroso incluye entrevista, verificación de referencias, comprobación de ingresos y revisión de historial crediticio.</p>

      <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Errores comunes al seleccionar inquilinos</h2>
      <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
        <li>Aceptar al primero que llega por urgencia</li>
        <li>No verificar referencias</li>
        <li>Confiar solo en la primera impresión</li>
        <li>No formalizar contrato adecuadamente</li>
      </ul>

      <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">La ventaja de un proceso profesional</h2>
      <p className="text-muted-foreground mb-4">
        Delegar la selección de inquilinos a profesionales reduce significativamente el riesgo y asegura ocupantes que cuiden tu propiedad en Veracruz.
      </p>
    </BlogPost>
  );
}
