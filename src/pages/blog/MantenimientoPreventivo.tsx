import BlogPost from "@/components/BlogPost";
import { Callout, StepCards, FeatureList, Highlight, StatRow, ComparisonTable } from "@/components/blog/BlogElements";
import heroImage from "@/assets/blog/mantenimiento-preventivo.webp";

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
        El mantenimiento preventivo es la clave para conservar el valor de tu propiedad en Veracruz y evitar reparaciones costosas. Invertir poco hoy ahorra mucho mañana — y en el clima de Veracruz, esto es especialmente cierto.
      </p>

      <p>
        El calor, la humedad, la brisa salina y las lluvias intensas hacen que las propiedades en Veracruz, Boca del Río, Medellín y la Riviera Veracruzana requieran más atención que en otras regiones del país. Un programa de mantenimiento preventivo bien ejecutado es la diferencia entre una propiedad que se aprecia y una que se deteriora.
      </p>

      <StatRow stats={[
        { value: "40%", label: "Ahorro vs. correctivo" },
        { value: "2x", label: "Mayor vida útil" },
        { value: "15%", label: "Mayor valor de renta" },
        { value: "90%", label: "Emergencias prevenibles" },
      ]} />

      <h2>¿Qué es el mantenimiento preventivo?</h2>
      <p>
        Son las acciones programadas para prevenir fallas antes de que ocurran: revisiones periódicas, limpieza de sistemas, aplicación de protecciones y reparaciones menores que evitan gastos mayores. Es el equivalente a llevar tu auto al servicio regularmente en lugar de esperar a que se descomponga.
      </p>
      <p>
        A diferencia del mantenimiento correctivo (que responde a fallas ya existentes), el preventivo anticipa problemas, los detecta temprano y los resuelve cuando aún son pequeños y económicos de atender.
      </p>

      <ComparisonTable
        headers={["Aspecto", "Mantenimiento preventivo", "Mantenimiento correctivo"]}
        rows={[
          ["Costo promedio", "Bajo y predecible", "Alto e inesperado"],
          ["Programación", "Planificado con anticipación", "Reactivo a emergencias"],
          ["Impacto en inquilinos", "Mínimo o nulo", "Disruptivo y urgente"],
          ["Vida útil del inmueble", "Se extiende significativamente", "Se reduce gradualmente"],
          ["Valor de renta", "Se mantiene o aumenta", "Disminuye con el tiempo"],
          ["Estrés para el propietario", "Bajo", "Alto"],
        ]}
      />

      <h2>Áreas clave en Veracruz</h2>
      <p>
        El clima de Veracruz presenta desafíos únicos para el mantenimiento de propiedades. Estas son las áreas que requieren mayor atención:
      </p>
      <FeatureList columns={2} items={[
        { title: "Impermeabilización", description: "Revisión y aplicación antes de temporada de lluvias (mayo-octubre)" },
        { title: "Plomería", description: "Inspección de tuberías, tinacos, cisternas y drenajes" },
        { title: "Electricidad", description: "Revisión de instalaciones, conexiones y protecciones contra sobrecarga" },
        { title: "Pintura", description: "Protección de fachadas y superficies expuestas al salitre y sol" },
        { title: "Estructura", description: "Revisión de grietas, humedad, cimentación y muros de carga" },
        { title: "Áreas comunes", description: "Limpieza y mantenimiento de espacios compartidos y accesos" },
        { title: "Herrería y cancelería", description: "Protección anticorrosiva por el ambiente salino de la costa" },
        { title: "Aire acondicionado", description: "Limpieza de filtros y revisión de gas refrigerante cada temporada" },
      ]} />

      <h2>Programa recomendado por temporada</h2>
      <p>
        En Veracruz, el programa de mantenimiento debe adaptarse al clima. Estas son nuestras recomendaciones por periodo:
      </p>
      <StepCards steps={[
        { title: "Enero - Marzo (Temporada seca)", description: "Momento ideal para impermeabilización, pintura de fachadas, reparaciones mayores y mejoras. El clima seco permite trabajos exteriores con mejor resultado y secado." },
        { title: "Abril - Mayo (Pre-lluvias)", description: "Última oportunidad para sellado de azoteas, revisión de bajantes y drenajes, limpieza de cisternas y verificación de que todo esté listo para la temporada de lluvias." },
        { title: "Junio - Octubre (Temporada de lluvias)", description: "Monitoreo activo de filtraciones, revisión post-tormenta de techos y fachadas, mantenimiento de áreas comunes y atención rápida a cualquier entrada de agua." },
        { title: "Noviembre - Diciembre (Post-lluvias)", description: "Evaluación de daños por temporada de lluvias, reparaciones menores, planificación de trabajos mayores para temporada seca y preparación de presupuesto anual." },
      ]} />

      <h2>El costo de NO hacer mantenimiento preventivo</h2>
      <p>
        Los números no mienten. Estos son ejemplos reales de lo que cuesta ignorar el mantenimiento preventivo en propiedades de Veracruz:
      </p>
      <ComparisonTable
        headers={["Problema", "Costo preventivo", "Costo correctivo"]}
        rows={[
          ["Impermeabilización", "$8,000 - $15,000/año", "$40,000 - $120,000 (daño estructural)"],
          ["Fuga de plomería", "$2,000 - $5,000 (detección)", "$15,000 - $50,000 (reparación mayor)"],
          ["Daño eléctrico", "$3,000 - $6,000 (revisión)", "$20,000 - $80,000 (reinstalación)"],
          ["Pintura exterior", "$5,000 - $12,000/año", "$25,000 - $60,000 (fachada completa)"],
          ["A/C sin servicio", "$1,500 - $3,000/servicio", "$15,000 - $30,000 (reemplazo)"],
        ]}
      />

      <Callout type="warning" title="Riesgo real en Veracruz">
        Una filtración no detectada durante temporada de lluvias puede causar daño estructural en cuestión de semanas. El costo de reparar un techo colapsado supera los $100,000 — mientras que una impermeabilización preventiva cuesta menos de $15,000.
      </Callout>

      <Callout type="tip" title="Ahorro real con detección temprana">
        Detectar una fuga de agua a tiempo puede ahorrarte decenas de miles de pesos en daños estructurales y recibos inflados. De igual forma, identificar un uso ilícito de la conexión eléctrica (diablitos o derivaciones no autorizadas) evita recargos enormes en la factura de CFE y riesgos de incendio. La supervisión periódica es clave para detectar ambas situaciones antes de que escalen.
      </Callout>

      <h2>Checklist de mantenimiento por frecuencia</h2>
      <FeatureList items={[
        { title: "Mensual", description: "Revisión visual de paredes y techos, limpieza de filtros de A/C, revisión de llaves y grifería, limpieza de áreas comunes" },
        { title: "Trimestral", description: "Inspección general de plomería, revisión de instalación eléctrica, limpieza de bajantes y drenajes, revisión de cerraduras" },
        { title: "Semestral", description: "Limpieza profunda de cisternas y tinacos, revisión de impermeabilización, pintura de retoque, revisión de herrería" },
        { title: "Anual", description: "Impermeabilización completa, revisión estructural, servicio mayor de A/C, pintura general y actualización de instalaciones" },
      ]} />

      <h2>Cómo elegir proveedores de mantenimiento</h2>
      <p>
        La calidad del mantenimiento depende directamente de los proveedores que contrates. En Veracruz, es común encontrar "todólogos" que ofrecen todo tipo de servicio pero ejecutan con calidad deficiente. Busca especialistas para cada área.
      </p>
      <FeatureList columns={2} items={[
        { title: "Especialización", description: "Cada área debe ser atendida por un profesional certificado en su campo" },
        { title: "Referencias verificables", description: "Pide y confirma referencias de trabajos anteriores en propiedades similares" },
        { title: "Garantía por escrito", description: "Todo trabajo debe incluir garantía documentada con duración y alcance" },
        { title: "Cotización detallada", description: "Cotizaciones por escrito con desglose de materiales, mano de obra y tiempos" },
      ]} />

      <Callout type="tip" title="Clima de Veracruz">
        En el clima húmedo y caluroso de Veracruz, la impermeabilización y la revisión de plomería son especialmente importantes. No esperes a que llueva para descubrir una filtración. El mantenimiento preventivo programado es tu mejor protección.
      </Callout>

      <Highlight>
        Un programa de mantenimiento preventivo bien ejecutado puede reducir tus costos de reparación hasta un 40% y mantener el valor de tu propiedad a largo plazo. En DEVERI, coordinamos todo el mantenimiento de tu propiedad con proveedores verificados y programas adaptados al clima de Veracruz.
      </Highlight>

      <p>
        No dejes que tu propiedad pierda valor por falta de atención. Un programa de mantenimiento preventivo es la inversión más inteligente que puedes hacer como propietario en Veracruz.
      </p>
    </BlogPost>
  );
}
