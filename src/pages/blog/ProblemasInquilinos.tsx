import BlogPost from "@/components/BlogPost";
import { Callout, StepCards, FeatureList, Highlight, StatRow, ComparisonTable } from "@/components/blog/BlogElements";
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
        Los problemas con inquilinos son una de las principales razones por las que los propietarios en Veracruz buscan ayuda profesional. La buena noticia: la mayoría son completamente prevenibles con los procesos correctos.
      </p>

      <p>
        En este artículo analizamos los problemas más frecuentes, sus causas raíz y las estrategias concretas para evitarlos — basados en nuestra experiencia gestionando propiedades en Veracruz, Boca del Río y la Riviera Veracruzana.
      </p>

      <StatRow stats={[
        { value: "4 de 10", label: "Propietarios enfrentan problemas" },
        { value: "85%", label: "Son prevenibles" },
        { value: "$30K+", label: "Costo promedio de un conflicto" },
        { value: "6 meses", label: "Duración promedio de un proceso" },
      ]} />

      <h2>Los problemas más frecuentes</h2>
      <StepCards steps={[
        { title: "Impago de renta", description: "El problema más común y más costoso. Comienza con un retraso \"por esta vez\" y puede escalar a meses de renta perdida. Se previene con un proceso riguroso de selección y contratos con cláusulas claras de penalización." },
        { title: "Daños a la propiedad", description: "Desde desgaste excesivo hasta daños intencionales. Supervisión periódica y un inventario detallado con fotos al inicio del contrato son clave para prevenir y documentar cualquier daño." },
        { title: "Conflictos de convivencia", description: "En propiedades con múltiples inquilinos o condominios, las quejas por ruido, mascotas, estacionamiento y espacios comunes son frecuentes. Reglas claras y un administrador como intermediario neutral evitan conflictos directos." },
        { title: "Inquilinos que no pagan y no se van", description: "Uno de los escenarios más frustrantes: el inquilino deja de pagar pero se niega a desocupar. Sin un contrato sólido y asesoría legal, el proceso de desalojo puede tomar de 6 a 18 meses, acumulando pérdidas enormes mientras la propiedad sigue ocupada sin generar ingresos." },
        { title: "Abandono del inmueble", description: "El inquilino desaparece sin avisar, dejando pertenencias, adeudos o daños. El seguimiento constante y la comunicación regular previenen situaciones de abandono inesperado." },
      ]} />

      <h2>Problema #1: Impago de renta (análisis profundo)</h2>
      <p>
        El impago es el problema que más preocupa a los propietarios y con razón. Un inquilino que deja de pagar puede costar decenas de miles de pesos entre renta perdida, gastos legales y vacancia post-desalojo.
      </p>
      <p>
        La clave está en entender que el impago rara vez ocurre de la noche a la mañana. Casi siempre hay señales previas: retrasos que se vuelven más frecuentes, excusas recurrentes, dificultad para contactar al inquilino o cambios en su situación laboral.
      </p>

      <ComparisonTable
        headers={["Señal de alerta", "Nivel de riesgo", "Acción recomendada"]}
        rows={[
          ["Primer retraso (1-5 días)", "Bajo", "Recordatorio cordial y seguimiento"],
          ["Retrasos recurrentes", "Medio", "Conversación directa, plan de pago"],
          ["Retraso > 15 días", "Alto", "Notificación formal, evaluar opciones"],
          ["Sin comunicación", "Crítico", "Acción legal inmediata"],
          ["Excusas continuas sin pago", "Crítico", "Mediación o proceso de desalojo"],
        ]}
      />

      <Callout type="warning" title="Señal de alerta">
        Si un inquilino comienza a retrasar pagos, evitar la comunicación o incumplir reglas menores, son señales tempranas de problemas mayores. Actuar rápido marca la diferencia entre un retraso menor y un conflicto costoso.
      </Callout>

      <h2>Problema #2: Daños a la propiedad</h2>
      <p>
        Los daños pueden ser accidentales o por negligencia, pero siempre son costosos. El clima de Veracruz agrava la situación: humedad, salitre y calor aceleran el deterioro de superficies, pintura y instalaciones.
      </p>
      <p>
        La prevención comienza antes de que entre el inquilino: un inventario detallado con fotografías del estado de cada habitación, instalaciones, acabados y áreas exteriores es esencial para documentar la condición inicial y comparar al término del contrato.
      </p>

      <FeatureList items={[
        { title: "Inventario fotográfico", description: "Documentación completa del estado del inmueble antes de la entrega, incluyendo cada habitación, instalación y acabado" },
        { title: "Inspecciones periódicas", description: "Visitas programadas (trimestral mínimo) para verificar el estado general y detectar problemas a tiempo" },
        { title: "Reglas claras de uso", description: "Definir qué modificaciones están permitidas, política de mascotas, uso de áreas comunes y responsabilidades del inquilino" },
        { title: "Depósito adecuado", description: "Un depósito de al menos un mes de renta más un mes de garantía para cubrir posibles daños al término" },
      ]} />

      <h2>Problema #3: Conflictos legales</h2>
      <p>
        Los conflictos legales entre propietario e inquilino en Veracruz pueden ser largos, costosos y emocionalmente desgastantes. El marco legal mexicano tiende a proteger al inquilino, lo que hace aún más importante la prevención.
      </p>
      <p>
        Un contrato bien elaborado es tu primera línea de defensa. Debe contemplar todas las situaciones posibles y definir las consecuencias de cada incumplimiento. Un contrato genérico descargado de internet no te protege — necesitas uno personalizado.
      </p>

      <ComparisonTable
        headers={["Tipo de conflicto", "Duración promedio", "Costo estimado"]}
        rows={[
          ["Impago (resolución amistosa)", "1-2 meses", "$5,000 - $15,000"],
          ["Impago (proceso legal)", "3-12 meses", "$20,000 - $50,000"],
          ["Daños al inmueble", "2-6 meses", "$15,000 - $80,000"],
          ["Desalojo forzoso", "6-18 meses", "$30,000 - $100,000"],
          ["Subarrendamiento no autorizado", "2-4 meses", "$10,000 - $30,000"],
        ]}
      />

      <h2>Estrategia de prevención integral</h2>
      <p>
        La prevención de problemas con inquilinos no es un solo paso, sino un sistema completo que opera antes, durante y después de cada arrendamiento:
      </p>
      <StepCards steps={[
        { title: "Selección rigurosa", description: "Filtrar candidatos con verificación de ingresos, referencias de propietarios anteriores, historial crediticio y entrevista personal. Este paso solo elimina el 70% de los problemas potenciales." },
        { title: "Contratos sólidos", description: "Documentos legales personalizados con cláusulas claras sobre pagos, mantenimiento, incrementos, uso permitido y consecuencias de incumplimiento para ambas partes." },
        { title: "Supervisión constante", description: "Visitas programadas al inmueble, comunicación regular con los inquilinos y monitoreo continuo de pagos y estado general de la propiedad." },
        { title: "Respuesta rápida", description: "Atender problemas menores antes de que escalen. Un protocolo claro de acción para cada tipo de incidencia con tiempos definidos de respuesta." },
      ]} />

      <h2>Cómo actuar cuando ya hay un problema</h2>
      <FeatureList items={[
        { title: "Documentar todo", description: "Registrar cada comunicación, pago recibido, daño detectado o incumplimiento. La documentación es clave en cualquier proceso legal." },
        { title: "Buscar mediación primero", description: "Antes de escalar legalmente, intentar una solución acordada. Es más rápido, más barato y menos desgastante para ambas partes." },
        { title: "Asesoría legal especializada", description: "No intentar manejar conflictos legales sin asesoría. Un error en el proceso puede invalidar tu caso completo." },
        { title: "Mantener la calma", description: "Las decisiones emocionales suelen empeorar las situaciones. Un intermediario profesional mantiene la objetividad necesaria." },
      ]} />

      <Callout type="tip" title="La mejor inversión">
        Invertir en prevención (buena selección, contratos sólidos, supervisión) cuesta una fracción de lo que cuesta resolver un problema. Un mes de comisión por administración profesional puede ahorrarte $100,000+ en conflictos.
      </Callout>

      <Highlight>
        La mejor prevención es un sistema de administración profesional que combine selección rigurosa, contratos sólidos y supervisión constante. En DEVERI, ese es nuestro estándar para cada propiedad que gestionamos.
      </Highlight>
    </BlogPost>
  );
}
