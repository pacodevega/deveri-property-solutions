import BlogPost from "@/components/BlogPost";
import { Callout, StepCards, FeatureList, Highlight, StatRow, ComparisonTable } from "@/components/blog/BlogElements";
import heroImage from "@/assets/blog/problemas-plomeria.webp";

export default function ProblemasPlomeria() {
  return (
    <BlogPost
      heroImage={heroImage}
      heroAlt="Plomero reparando tubería en propiedad de Veracruz"
      title="Problemas de plomería más comunes en propiedades de Veracruz"
      metaTitle="Problemas de plomería más comunes en Veracruz | DEVERI"
      metaDescription="Las fallas de plomería que más afectan propiedades en Veracruz: causas, soluciones, costos y cómo prevenirlas con mantenimiento profesional."
      ctaText="Quiero soporte de plomería"
      category="Mantenimiento"
    >
      <p>
        La plomería es el sistema que más quejas genera en una propiedad rentada. En Veracruz, el agua dura, la salinidad del ambiente y la antigüedad de muchas instalaciones agravan los problemas. Conocer las fallas más comunes te permite anticiparlas y reducir el costo de mantenimiento hasta en un 60%.
      </p>

      <p>
        Esta guía recoge los problemas que más vemos en propiedades del puerto, Boca del Río, Medellín y Riviera Veracruzana, con soluciones concretas y rangos de costo realistas.
      </p>

      <StatRow stats={[
        { value: "60%", label: "Quejas de inquilinos por plomería" },
        { value: "30%", label: "Recibo CAEV por fugas" },
        { value: "15 años", label: "Vida útil de tubería de cobre" },
        { value: "70%", label: "Fugas detectables a tiempo" },
      ]} />

      <h2>Los 8 problemas más comunes</h2>

      <h3>1. Fugas en llaves y mezcladoras</h3>
      <p>
        El goteo continuo es la falla #1. En Veracruz, el sarro y el salitre destruyen empaques y cartuchos en 1-2 años. Una llave goteando una gota por segundo desperdicia más de 11,000 litros al año.
      </p>

      <h3>2. WC que se llena solo</h3>
      <p>
        Falla del flotador o del sapo (válvula de admisión). Pasa desapercibida porque el ruido es bajo, pero infla el recibo de agua y desgasta los componentes internos.
      </p>

      <h3>3. Tuberías tapadas en cocina y baño</h3>
      <p>
        Acumulación de grasa, cabello, residuos y sarro. En Veracruz, el agua dura agrava el problema porque mineraliza los depósitos.
      </p>

      <h3>4. Baja presión de agua</h3>
      <p>
        Causas: filtros tapados en regaderas, sarro en tubería galvanizada vieja, bomba dañada o cisterna mal nivelada. El diagnóstico determina si es limpieza o reemplazo.
      </p>

      <h3>5. Calentador de paso o boiler con falla</h3>
      <p>
        Sin agua caliente o intermitente. Suele ser termocupla, encendedor electrónico, válvula de gas o sarro en serpentín. En Veracruz, el sarro acorta la vida útil un 40%.
      </p>

      <h3>6. Coladera con mal olor</h3>
      <p>
        Trampa "p" sin agua, sifón roto o ventilación obstruida. El olor a drenaje es el síntoma más reportado por inquilinos en zonas costeras.
      </p>

      <h3>7. Filtraciones en muros</h3>
      <p>
        Manchas o burbujas en pintura indican fuga interna en tubería empotrada. Detectar a tiempo evita romper muros completos.
      </p>

      <h3>8. Bomba hidroneumática que no apaga</h3>
      <p>
        Pierde presión por fuga interna en la red, válvula check dañada o tanque sin presión de aire. Si no se atiende, la bomba se quema en 30-60 días.
      </p>

      <Callout type="warning" title="La fuga silenciosa cuesta más">
        Una fuga interna no visible puede inflar tu recibo de CAEV un 30-50% sin que te enteres. Si tu consumo subió sin razón aparente, contrata una prueba de presión antes de pagar el siguiente recibo.
      </Callout>

      <h2>Costos típicos de reparación</h2>
      <ComparisonTable
        headers={["Reparación", "Costo aproximado"]}
        rows={[
          ["Cambio de empaques en llave", "$150 - $400"],
          ["Cambio de cartucho mezcladora", "$350 - $700"],
          ["Reparación de WC (flotador/sapo)", "$300 - $600"],
          ["Destape de drenaje doméstico", "$400 - $1,200"],
          ["Detección de fuga oculta", "$800 - $2,000"],
          ["Reparación de fuga en muro", "$1,500 - $5,000"],
          ["Servicio a calentador de paso", "$500 - $1,200"],
          ["Cambio de bomba hidroneumática", "$4,500 - $9,000"],
          ["Cambio de tubería galvanizada por CPVC (m)", "$280 - $450 m lineal"],
        ]}
      />

      <h2>Mantenimiento preventivo recomendado</h2>
      <StepCards steps={[
        { title: "Trimestral: revisión visual", description: "Revisar llaves, mezcladoras, WC y áreas húmedas. Apretar conexiones, verificar empaques y atender goteos antes de que crezcan." },
        { title: "Semestral: limpieza de tinacos y cisterna", description: "Reduce sedimento que tapa filtros y mineraliza llaves. Es el mantenimiento de plomería más rentable." },
        { title: "Anual: revisión de bomba y presión", description: "Verificar presión de tanque hidroneumático, fugas internas, sello mecánico de la bomba y consumo eléctrico." },
        { title: "Cada 2 años: cambio de mangueras flexibles", description: "Las mangueras de flexible bajo lavabos y tras WC son la causa #1 de inundaciones nocturnas. Reemplazo barato, daño catastrófico evitado." },
      ]} />

      <Callout type="tip" title="Señal temprana: revisa tu medidor">
        Cierra todas las llaves y observa el medidor de agua durante 10 minutos. Si sigue girando, hay una fuga interna en algún punto de la red. Esta prueba simple te ahorra miles de pesos en consumo y daños estructurales.
      </Callout>

      <h2>Cuándo conviene cambiar la instalación completa</h2>
      <FeatureList columns={2} items={[
        { title: "Tubería de fierro galvanizado", description: "Más de 25 años: cambio total a CPVC o cobre" },
        { title: "Fugas recurrentes", description: "3+ fugas en 12 meses indica red comprometida" },
        { title: "Baja presión generalizada", description: "Sarro acumulado en toda la red" },
        { title: "Remodelación del inmueble", description: "Aprovechar para actualizar tubería oculta" },
      ]} />

      <Highlight>
        La plomería es el sistema con mejor relación costo-beneficio en mantenimiento preventivo. Por cada $1,000 que inviertes en revisión periódica, ahorras hasta $10,000 en reparaciones de emergencia, recibos inflados y daños a inquilinos.
      </Highlight>

      <p>
        En DEVERI atendemos las emergencias de plomería de tus inquilinos, programamos las revisiones preventivas y coordinamos plomeros verificados en Veracruz. Tú solo recibes el reporte.
      </p>
    </BlogPost>
  );
}
