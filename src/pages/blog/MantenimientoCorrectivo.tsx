import BlogPost from "@/components/BlogPost";
import { Callout, StepCards, FeatureList, Highlight, StatRow, ComparisonTable } from "@/components/blog/BlogElements";
import heroImage from "@/assets/blog/mantenimiento-correctivo.webp";

export default function MantenimientoCorrectivo() {
  return (
    <BlogPost
      heroImage={heroImage}
      heroAlt="Equipo de mantenimiento correctivo reparando propiedad en Veracruz"
      title="Mantenimiento correctivo: cuándo aplicarlo y cómo evitar que se repita"
      metaTitle="Mantenimiento correctivo en Veracruz | DEVERI"
      metaDescription="Cuándo aplicar mantenimiento correctivo, costos típicos en Veracruz y cómo gestionarlo para que no se vuelva un gasto recurrente."
      ctaText="Quiero atender una emergencia"
      category="Mantenimiento"
    >
      <p>
        El mantenimiento correctivo es el que se hace después de que algo falla. Es el más caro, el más estresante y el que más dinero hace perder a propietarios desprevenidos. En Veracruz, donde el clima acelera el desgaste, ignorar el mantenimiento preventivo significa pagar 3 a 10 veces más en correctivo.
      </p>

      <p>
        Pero no siempre se puede prevenir todo. Esta guía te enseña cuándo aplicar mantenimiento correctivo, cómo dimensionar la urgencia, qué cobrar al inquilino y cómo evitar que el mismo problema se repita.
      </p>

      <StatRow stats={[
        { value: "3-10x", label: "Más caro que preventivo" },
        { value: "48 hrs", label: "Atención obligatoria por ley" },
        { value: "70%", label: "Casos prevenibles" },
        { value: "30%", label: "Inquilinos rompen contrato por demora" },
      ]} />

      <h2>Diferencia entre preventivo y correctivo</h2>
      <ComparisonTable
        headers={["Aspecto", "Preventivo", "Correctivo"]}
        rows={[
          ["Cuándo se hace", "Programado", "Cuando algo falla"],
          ["Costo", "Bajo y predecible", "Alto e inesperado"],
          ["Estrés", "Mínimo", "Alto"],
          ["Inquilino afectado", "Casi nunca", "Siempre"],
          ["Riesgo de rescisión", "Bajo", "Alto si se demora"],
          ["Vida útil del inmueble", "Se extiende", "Se acorta"],
        ]}
      />

      <h2>Tipos de mantenimiento correctivo</h2>

      <h3>Correctivo de emergencia (atención inmediata)</h3>
      <p>
        Fugas mayores de agua, falla eléctrica con riesgo, sin agua, sin luz, puerta principal sin cerrar, fuga de gas. Atención obligatoria en menos de 24 horas. Si demora, el inquilino puede rescindir contrato y exigir devolución de renta proporcional.
      </p>

      <h3>Correctivo urgente (atención en 48-72 horas)</h3>
      <p>
        Calentador descompuesto, A/C sin funcionar (en temporada de calor), WC tapado en baño único, regadera sin agua caliente, contactos quemados. La ley considera estos casos como "habitabilidad afectada".
      </p>

      <h3>Correctivo programable (atención en 1-2 semanas)</h3>
      <p>
        Llave que gotea, foco quemado en área no crítica, mosquitero roto, manija de puerta interior, pintura ligeramente afectada. Se atienden agrupando trabajos para optimizar costos.
      </p>

      <h2>Costos referenciales en Veracruz</h2>
      <ComparisonTable
        headers={["Falla típica", "Costo correctivo aproximado"]}
        rows={[
          ["Fuga de agua emergente nocturna", "$1,500 - $4,000"],
          ["Cambio de calentador de paso", "$3,500 - $7,500"],
          ["Reparación de A/C minisplit", "$1,500 - $5,000"],
          ["Cambio de bomba hidroneumática", "$5,000 - $10,000"],
          ["Reparación de filtración mayor", "$8,000 - $40,000"],
          ["Cambio de tablero eléctrico", "$4,000 - $9,000"],
          ["Pintura de muro afectado", "$1,200 - $4,500"],
          ["Reparación estructural por humedad", "$15,000 - $80,000"],
        ]}
      />

      <h2>Protocolo de atención profesional</h2>
      <StepCards steps={[
        { title: "Recepción y clasificación del reporte", description: "Categorizar la falla por urgencia (emergencia, urgente, programable) y comunicar tiempo estimado de atención al inquilino." },
        { title: "Diagnóstico en sitio", description: "Visita técnica para evaluar alcance real, descartar causas múltiples y definir solución correcta. Un diagnóstico apresurado genera reincidencias." },
        { title: "Cotización y autorización", description: "Cotización clara con desglose de mano de obra, materiales y tiempo. Autorización del propietario antes de proceder (excepto emergencias críticas)." },
        { title: "Ejecución con calidad", description: "Trabajo realizado por técnico especializado, no por todólogo. Materiales de calidad para evitar reincidencia." },
        { title: "Pruebas y entrega", description: "Verificar que la falla está resuelta, hacer pruebas en presencia del inquilino y entregar comprobante con garantía." },
        { title: "Análisis de causa raíz", description: "Identificar por qué falló y proponer mantenimiento preventivo para que no se repita. Aquí se evita pagar dos veces." },
      ]} />

      <Callout type="warning" title="Demora = riesgo legal">
        El Código Civil del Estado de Veracruz obliga al arrendador a hacer las reparaciones necesarias para conservar el bien. Demorar atención de fallas que afecten habitabilidad faculta al inquilino a rescindir contrato, exigir descuento en renta y reclamar daños.
      </Callout>

      <h2>¿Quién paga: propietario o inquilino?</h2>
      <FeatureList items={[
        { title: "Reparaciones por desgaste o antigüedad", description: "Siempre el propietario (instalaciones, estructura, sistemas)" },
        { title: "Reparaciones por mal uso del inquilino", description: "Inquilino, comprobando el origen del daño" },
        { title: "Reparaciones menores cotidianas", description: "Generalmente inquilino (foco, empaque, mosquitero)" },
        { title: "Emergencias estructurales", description: "Siempre propietario, sin excepción" },
        { title: "Daños por terceros (vecinos, vandalismo)", description: "Propietario, salvo cobertura de seguro" },
      ]} />

      <Callout type="tip" title="Cláusula clave en el contrato">
        Tu contrato de arrendamiento debe especificar con claridad qué reparaciones corresponden a cada parte. La ambigüedad en este punto es la fuente #1 de conflictos con inquilinos. Un buen contrato resuelve el 90% de las disputas antes de que ocurran.
      </Callout>

      <h2>Cómo evitar que el correctivo se vuelva recurrente</h2>
      <FeatureList columns={2} items={[
        { title: "Diagnóstico de causa raíz", description: "No solo arreglar, sino entender por qué falló" },
        { title: "Materiales de calidad", description: "Ahorrar en materiales = pagar dos veces" },
        { title: "Técnicos especializados", description: "Un plomero para plomería, un electricista para eléctrico" },
        { title: "Programa preventivo posterior", description: "Convertir cada correctivo en preventivo futuro" },
        { title: "Bitácora de fallas", description: "Documentar para identificar patrones" },
        { title: "Garantía por escrito", description: "Si se repite en 90 días, lo cubre el técnico" },
      ]} />

      <Highlight>
        El mejor mantenimiento correctivo es el que no tienes que hacer dos veces. La diferencia entre un técnico barato y un profesional certificado es que el primero te cobra una vez por año y el segundo te resuelve para siempre.
      </Highlight>

      <p>
        En DEVERI atendemos las emergencias y mantenimiento correctivo de tu propiedad con técnicos verificados, garantía por escrito y análisis de causa raíz. Tú solo recibes el reporte y la solución — sin llamadas a media noche ni búsqueda de plomeros.
      </p>
    </BlogPost>
  );
}
