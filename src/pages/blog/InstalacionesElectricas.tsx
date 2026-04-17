import BlogPost from "@/components/BlogPost";
import { Callout, StepCards, FeatureList, Highlight, StatRow, ComparisonTable } from "@/components/blog/BlogElements";
import heroImage from "@/assets/blog/instalaciones-electricas.webp";

export default function InstalacionesElectricas() {
  return (
    <BlogPost
      heroImage={heroImage}
      heroAlt="Renovación de instalación eléctrica en propiedad antigua de Veracruz"
      title="Renovar instalaciones eléctricas viejas en Veracruz: guía completa"
      metaTitle="Renovar instalación eléctrica vieja en Veracruz | DEVERI"
      metaDescription="Cuándo renovar instalaciones eléctricas viejas, costos, riesgos, normas y cómo hacerlo sin desocupar la propiedad en Veracruz."
      ctaText="Quiero diagnóstico eléctrico"
      category="Mantenimiento"
    >
      <p>
        Una instalación eléctrica vieja es la causa #1 de incendios estructurales en propiedades habitacionales de México. En Veracruz, donde la humedad y el salitre aceleran la corrosión de cables y conexiones, el riesgo se multiplica en propiedades de más de 25 años.
      </p>

      <p>
        Renovar la instalación no es un lujo: es proteger la vida de los inquilinos, evitar pérdida total del inmueble y cumplir con la NOM-001-SEDE-2012 que rige las instalaciones eléctricas en México. Esta guía te explica cuándo renovar, cuánto cuesta y cómo hacerlo bien.
      </p>

      <StatRow stats={[
        { value: "30%", label: "Incendios por falla eléctrica" },
        { value: "25 años", label: "Vida útil cable normal" },
        { value: "15 años", label: "Vida útil en zona costera" },
        { value: "5x", label: "Costo siniestro vs renovación" },
      ]} />

      <h2>Señales de que urge renovar</h2>
      <FeatureList columns={2} items={[
        { title: "Pastillas que brincan seguido", description: "Sobrecarga o falla en el circuito" },
        { title: "Olor a quemado en contactos", description: "Cable derretido, alto riesgo de incendio" },
        { title: "Foco que parpadea", description: "Mala conexión o caída de voltaje" },
        { title: "Contactos calientes al tacto", description: "Cable subdimensionado para la carga actual" },
        { title: "Tablero con fusibles de tapón", description: "Tecnología de los 70s, sin protección moderna" },
        { title: "Cableado con forro de tela o aluminio", description: "Aislante degradado, cambio obligatorio" },
        { title: "No hay tierra física", description: "Riesgo de electrocución, no cumple norma" },
        { title: "Toques al usar electrodomésticos", description: "Falla de aislamiento o falta de tierra" },
      ]} />

      <Callout type="warning" title="Riesgo legal y de seguros">
        Si tu propiedad sufre un incendio por falla eléctrica y la instalación no cumple la NOM-001-SEDE-2012, el seguro puede negar el pago y eres responsable civil ante los inquilinos. Renovar es también una decisión legal, no solo técnica.
      </Callout>

      <h2>¿Renovación parcial o total?</h2>
      <ComparisonTable
        headers={["Situación", "Renovación recomendada"]}
        rows={[
          ["Instalación menor a 15 años, sin fallas", "Mantenimiento preventivo"],
          ["15-25 años, fallas ocasionales", "Renovación parcial (tablero + circuitos críticos)"],
          ["25-40 años, fallas frecuentes", "Renovación total recomendada"],
          ["Más de 40 años o cable de aluminio", "Renovación total obligatoria"],
          ["Forro de cable degradado", "Renovación total obligatoria"],
          ["Tablero antiguo con fusibles", "Cambio inmediato de tablero a interruptores termomagnéticos"],
        ]}
      />

      <h2>Proceso de renovación</h2>
      <StepCards steps={[
        { title: "Diagnóstico y proyecto", description: "Levantamiento de cargas reales, número de circuitos necesarios, ubicación de contactos y apagadores. Se entrega proyecto firmado por un perito." },
        { title: "Cálculo de cargas y circuitos", description: "Separación de circuitos por uso (iluminación, contactos, A/C, cocina, regadera). Cada circuito con su protección termomagnética." },
        { title: "Cambio de acometida si aplica", description: "Si la acometida de CFE es vieja, se solicita reemplazo y aumento de calibre. Importante en propiedades con A/C o cargas altas." },
        { title: "Cableado nuevo con calibre correcto", description: "Cable de cobre THW-LS según norma, calibre adecuado por circuito. Sin reutilización de cable viejo." },
        { title: "Tablero nuevo con interruptores", description: "Tablero de carga con interruptores termomagnéticos, identificación de circuitos y barra de tierra física." },
        { title: "Tierra física e ICFT", description: "Instalación de varilla copperweld y conexión de tierra a todos los contactos. Interruptor de falla a tierra (ICFT) en baños y áreas húmedas." },
        { title: "Pruebas y certificación", description: "Mediciones de aislamiento, continuidad y tierra. Entrega de Dictamen de Verificación si aplica." },
      ]} />

      <h2>Costos referenciales</h2>
      <ComparisonTable
        headers={["Trabajo", "Costo aproximado"]}
        rows={[
          ["Cambio de tablero antiguo a moderno", "$3,500 - $8,000"],
          ["Tierra física con varilla y aterrizado", "$2,500 - $5,000"],
          ["Cambio de circuito completo (1)", "$1,800 - $3,500"],
          ["Renovación parcial (tablero + 4 circuitos)", "$15,000 - $25,000"],
          ["Renovación total casa habitación", "$45,000 - $90,000"],
          ["Renovación total departamento", "$30,000 - $60,000"],
          ["Renovación total local comercial", "Cotización por carga y proyecto"],
          ["Dictamen de Verificación (UVIE)", "$3,500 - $8,000"],
        ]}
      />

      <Callout type="tip" title="Hazlo entre inquilinos">
        El mejor momento para renovar la instalación eléctrica es entre arrendamientos. Aprovecha la vacancia para hacer la obra completa, dejarla certificada y poder pedir mejor precio de renta justificado por la inversión.
      </Callout>

      <h2>Errores que vemos en Veracruz</h2>
      <FeatureList columns={2} items={[
        { title: "Cableado oculto en muros sin tubería", description: "Ilegal y peligroso en humedad" },
        { title: "Empalmes con cinta de aislar", description: "Deben ir en cajas de registro con conectores" },
        { title: "Sobrecarga con extensiones múltiples", description: "Síntoma de circuitos insuficientes" },
        { title: "Mismo circuito para A/C y contactos", description: "El A/C debe tener circuito y protección dedicada" },
        { title: "Cable de aluminio en obra antigua", description: "Cambio total recomendado, alto riesgo" },
        { title: "No identificar circuitos en tablero", description: "Imposibilita mantenimiento seguro" },
      ]} />

      <Highlight>
        Renovar una instalación eléctrica cuesta entre el 1 y 3% del valor de la propiedad. El siniestro de un incendio cuesta el 100%. La decisión es matemática.
      </Highlight>

      <p>
        En DEVERI coordinamos diagnósticos eléctricos, gestionamos las renovaciones con técnicos certificados y dejamos tu propiedad con dictamen vigente. Protege tu inversión y a tus inquilinos.
      </p>
    </BlogPost>
  );
}
