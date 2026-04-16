import BlogPost from "@/components/BlogPost";
import { Callout, StepCards, FeatureList, Highlight, StatRow, ComparisonTable } from "@/components/blog/BlogElements";
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
        Encontrar inquilinos confiables es una de las mayores preocupaciones de los propietarios en Veracruz y Boca del Río. Un mal inquilino puede generar pérdidas de miles de pesos, daños al inmueble y años de dolores de cabeza legales.
      </p>

      <p>
        La buena noticia es que existe un proceso probado para minimizar el riesgo. No se trata de suerte, sino de un sistema riguroso de filtrado y verificación que separa a los buenos candidatos de los problemáticos.
      </p>

      <StatRow stats={[
        { value: "70%", label: "Problemas por mala selección" },
        { value: "3-6", label: "Meses para desalojar" },
        { value: "$50K+", label: "Costo promedio de un mal inquilino" },
        { value: "95%", label: "Tasa de éxito con filtrado DEVERI" },
      ]} />

      <h2>¿Qué hace a un inquilino confiable?</h2>
      <p>
        Un inquilino confiable no es solo alguien que paga a tiempo. Es alguien que cuida tu propiedad, respeta el contrato, se comunica de forma clara y mantiene una relación profesional durante toda la vigencia del arrendamiento.
      </p>
      <FeatureList items={[
        { title: "Historial de pago positivo", description: "Sin atrasos ni adeudos en rentas anteriores. Un patrón consistente de cumplimiento financiero." },
        { title: "Estabilidad laboral", description: "Ingresos comprobables y constantes, idealmente con al menos 1 año en su empleo actual" },
        { title: "Referencias verificables", description: "De propietarios anteriores que confirmen buen comportamiento y pago puntual" },
        { title: "Compromiso con el inmueble", description: "Historial de cuidado, responsabilidad y comunicación proactiva con el propietario" },
        { title: "Capacidad financiera", description: "Ingreso mensual de al menos 3 veces el monto de la renta para garantizar holgura de pago" },
      ]} />

      <h2>Proceso de filtrado recomendado</h2>
      <p>
        En DEVERI hemos perfeccionado un proceso de 5 pasos que nos permite seleccionar a los mejores inquilinos con una tasa de éxito del 95%:
      </p>
      <StepCards steps={[
        { title: "Entrevista inicial", description: "Conocemos las necesidades, expectativas y situación del candidato de forma directa. Evaluamos compatibilidad con la propiedad y las condiciones del arrendamiento." },
        { title: "Verificación de ingresos", description: "Solicitamos comprobantes de nómina, estados de cuenta o declaraciones fiscales que respalden su capacidad de pago. Verificamos que el ingreso sea al menos 3 veces la renta." },
        { title: "Referencias de propietarios", description: "Contacto directo con arrendadores anteriores para confirmar historial de pago, comportamiento, estado en que entregaron el inmueble y razón de salida." },
        { title: "Opinión de cumplimiento SAT e IMSS", description: "Para empresas, verificamos su opinión de cumplimiento fiscal ante el SAT y su estatus ante el IMSS para confirmar que operan de forma legal y solvente." },
        { title: "Presentación al propietario", description: "Te mostramos los candidatos con nuestra calificación detallada de cada uno, incluyendo pros, contras y recomendación. Tú tomas la decisión final." },
      ]} />

      <h2>Señales de alerta en candidatos</h2>
      <p>
        La experiencia nos ha enseñado a identificar señales tempranas que predicen problemas futuros. Estas son las más importantes:
      </p>
      <FeatureList columns={2} items={[
        { title: "Prisa excesiva", description: "Quiere firmar inmediatamente sin revisar el contrato o la propiedad con cuidado" },
        { title: "Evasión de preguntas", description: "No quiere proporcionar referencias o evita dar información financiera" },
        { title: "Historia inconsistente", description: "Los datos que proporciona no cuadran entre sí o cambian entre conversaciones" },
        { title: "Múltiples cambios recientes", description: "Ha cambiado de domicilio varias veces en poco tiempo sin razón clara" },
        { title: "Negociación agresiva", description: "Presiona excesivamente por descuentos o condiciones especiales desde el inicio" },
        { title: "Depósito incompleto", description: "No puede o no quiere cubrir el depósito completo al momento de la firma" },
      ]} />

      <Callout type="warning" title="Errores que salen caros">
        Aceptar al primero que llega por urgencia, no verificar referencias, confiar solo en la primera impresión o no formalizar el contrato adecuadamente son errores que casi siempre terminan en pérdidas significativas.
      </Callout>

      <h2>El costo de un mal inquilino</h2>
      <p>
        ¿Cuánto cuesta realmente elegir mal? Los números son contundentes:
      </p>
      <ComparisonTable
        headers={["Concepto", "Costo estimado", "Tiempo"]}
        rows={[
          ["Meses de renta impagada", "$30,000 - $90,000", "2-6 meses"],
          ["Daños al inmueble", "$15,000 - $80,000", "Variable"],
          ["Proceso legal de desalojo", "$20,000 - $50,000", "3-12 meses"],
          ["Reparaciones post-inquilino", "$10,000 - $40,000", "1-2 meses"],
          ["Vacancia durante proceso", "$15,000 - $90,000", "1-6 meses"],
          ["TOTAL POTENCIAL", "$90,000 - $350,000", "6-24 meses"],
        ]}
      />

      <Callout type="insight" title="Perspectiva">
        El costo de un proceso profesional de selección de inquilinos es una fracción mínima comparado con el costo potencial de elegir mal. Es la inversión con mayor retorno que puedes hacer como propietario.
      </Callout>

      <h2>Cómo retener buenos inquilinos</h2>
      <p>
        Encontrar un buen inquilino es solo la mitad del trabajo. Retenerlo es igual de importante. Un inquilino que renueva contrato te ahorra costos de vacancia, comisiones de recolocación y el riesgo de un nuevo proceso de selección.
      </p>
      <FeatureList items={[
        { title: "Mantenimiento oportuno", description: "Responde rápido a solicitudes de reparación. Un inquilino que ve que su hogar se cuida, cuida tu propiedad." },
        { title: "Comunicación profesional", description: "Mantén una relación cordial y profesional. No invasiva pero disponible cuando sea necesario." },
        { title: "Incrementos justos", description: "Ajusta la renta anualmente de forma razonable. Un incremento excesivo pierde un buen inquilino por ganar poco." },
        { title: "Renovación anticipada", description: "Ofrece renovación con condiciones claras antes de que venza el contrato. La certidumbre beneficia a ambas partes." },
      ]} />

      <h2>La ventaja de un proceso profesional</h2>
      <Highlight>
        Delegar la selección de inquilinos a profesionales reduce significativamente el riesgo y asegura ocupantes que cuiden tu propiedad. En DEVERI filtramos y calificamos candidatos para que tú elijas con confianza y tranquilidad total.
      </Highlight>

      <p>
        Nuestro proceso ha sido refinado con años de experiencia en el mercado de Veracruz. Conocemos las particularidades de cada zona, los perfiles de inquilinos más comunes y los riesgos específicos de la región. Esa experiencia es tu mejor protección.
      </p>
    </BlogPost>
  );
}
