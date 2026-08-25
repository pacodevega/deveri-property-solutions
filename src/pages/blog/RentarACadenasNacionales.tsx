import BlogPost from "@/components/BlogPost";
import { Callout, StatRow, ComparisonTable, StepCards, FeatureList } from "@/components/blog/BlogElements";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/blog/rentar-a-cadenas-nacionales.webp";


export default function RentarACadenasNacionales() {
  return (
    <BlogPost
      heroImage={heroImage}
      heroAlt="Local comercial en Veracruz ideal para cadena nacional como OXXO, Six o Farmacias"
      title="Cómo rentar tu propiedad a OXXO, Six o cadenas nacionales en Veracruz"
      metaTitle="Cómo rentar tu propiedad a OXXO, Six o cadenas nacionales | DEVERI"
      metaDescription="Guía completa para rentar tu local comercial a OXXO, Six, Farmacias del Ahorro y otras cadenas en Veracruz. Qué buscan, requisitos y cómo lograr el contrato."
      ctaText="Evaluar mi propiedad con DEVERI Match"
      ctaUrl="/deveri-match"
      ctaSubtext="Responde 6 preguntas y descubre qué cadenas nacionales y franquicias en expansión hacen match con tu local o terreno."
      category="Renta"
      readTime="8 min"
    >

      <p>
        Rentarle a una cadena nacional como <strong>OXXO, Tiendas Six, Farmacias Guadalajara, Farmacias del Ahorro, 7-Eleven, Coppel o Elektra</strong> es uno de los contratos más codiciados del mercado inmobiliario comercial. Significa rentas puntuales por años, contratos blindados, inquilino solvente y prácticamente cero mantenimiento por parte del propietario.
      </p>

      <p>
        Pero estas empresas son extremadamente selectivas. Tienen equipos de expansión que evalúan miles de ubicaciones al año y solo cierran con las que cumplen criterios muy específicos. En esta guía te explicamos <strong>qué buscan exactamente, qué necesita tu propiedad y cómo aumentar tus probabilidades</strong> de cerrar uno de estos contratos en Veracruz, Boca del Río, Medellín o la Riviera Veracruzana.
      </p>

      <StatRow stats={[
        { value: "10-15", label: "Años de contrato típico" },
        { value: "5-7%", label: "Incremento anual contractual" },
        { value: "100%", label: "Puntualidad de pago" },
        { value: "0%", label: "Mantenimiento a cargo del propietario" },
      ]} />

      <Callout type="insight" title="Encuentra tu cadena ideal en 2 minutos">
        <p>
          Usa <strong>DEVERI Match</strong>: responde 6 preguntas y cruza tu propiedad con los requisitos reales de más de 30
          cadenas nacionales y franquicias en expansión. Sabrás quién puede rentar tu inmueble y con qué probabilidad.
        </p>
        <Link to="/deveri-match" className="inline-block mt-3">
          <Button variant="cta" size="sm">
            <ArrowRight className="h-4 w-4" /> Ir a DEVERI Match
          </Button>
        </Link>
      </Callout>

      <h2>¿Por qué es tan atractivo rentar a una cadena nacional?</h2>


      <FeatureList items={[
        { title: "Contratos a largo plazo", description: "10 a 15 años con renovaciones automáticas. Olvídate de buscar inquilinos cada año" },
        { title: "Solvencia absoluta", description: "Pagan el día 1 de cada mes, sin retrasos, sin excusas. Son corporativos AAA" },
        { title: "Cero mantenimiento operativo", description: "Ellos se hacen cargo de adaptaciones, mantenimiento interior y servicios" },
        { title: "Plusvalía garantizada", description: "Una propiedad con OXXO o Six rentado se vende fácil un 20-30% por encima de mercado" },
        { title: "Incrementos contractuales fijos", description: "Aumentos anuales pactados, normalmente ligados a inflación o un porcentaje fijo" },
        { title: "Tranquilidad total", description: "Sin llamadas a media noche, sin inquilinos morosos, sin sorpresas" },
      ]} />

      <h2>Lo que buscan las cadenas nacionales en una propiedad</h2>

      <p>
        Cada cadena tiene su propio "manual de ubicación", pero hay criterios comunes que debes cumplir. Los equipos de expansión evalúan <strong>siete factores clave</strong>:
      </p>

      <h3>1. Ubicación: el factor #1</h3>

      <p>
        La ubicación pesa más que cualquier otro criterio. Las cadenas buscan:
      </p>

      <ul>
        <li><strong>Esquinas</strong> con visibilidad desde dos calles. Una esquina vale 30-50% más que un terreno medio.</li>
        <li><strong>Avenidas con alto flujo vehicular</strong> (mínimo 8,000-15,000 autos/día según marca).</li>
        <li><strong>Densidad poblacional alta</strong> alrededor: zonas habitacionales consolidadas, escuelas, oficinas, paradas de transporte público.</li>
        <li><strong>Acceso fácil</strong>: que se pueda entrar y salir sin dar vueltas largas.</li>
        <li><strong>Sin competencia directa muy cercana</strong>: una OXXO normalmente requiere distancia mínima entre sucursales propias.</li>
      </ul>

      <Callout type="insight" title="Zonas premium en Veracruz para cadenas nacionales">
        Bulevar Ávila Camacho, Avenida Ruiz Cortines, Costa Verde, Reforma, Ejército Mexicano, Salvador Díaz Mirón, fraccionamientos de Boca del Río (Costa de Oro, Río Medio, Las Vegas), entradas de la Riviera Veracruzana y avenidas principales de Medellín de Bravo son las más codiciadas.
      </Callout>

      <h3>2. Dimensiones del terreno y construcción</h3>

      <ComparisonTable
        headers={["Cadena", "Terreno mínimo", "Construcción típica", "Cajones de estacionamiento"]}
        rows={[
          ["OXXO", "300-450 m²", "120-180 m²", "4-8"],
          ["Tiendas Six", "150-300 m²", "80-140 m²", "No requiere"],
          ["7-Eleven", "300-500 m²", "150-200 m²", "5-10"],
          ["Farmacias Guadalajara", "400-700 m²", "250-450 m²", "8-15"],
          ["Farmacias del Ahorro", "200-350 m²", "120-180 m²", "4-8"],
          ["Coppel / Elektra", "600-1,200 m²", "400-800 m²", "15-30"],
        ]}
      />

      <h3>3. Frente del terreno</h3>

      <p>
        Las cadenas requieren un <strong>frente mínimo de 12 a 20 metros</strong> según la marca, para colocar el rótulo, accesos, ventanales y estacionamiento. Un terreno largo y angosto es prácticamente inservible para ellas, aunque tenga buena ubicación.
      </p>

      <h3>4. Servicios e infraestructura</h3>

      <ul>
        <li>Luz trifásica con capacidad suficiente (suelen requerir 30-100 kVA).</li>
        <li>Toma de agua potable y descarga sanitaria.</li>
        <li>Red de gas natural (deseable, no siempre obligatorio).</li>
        <li>Internet y fibra óptica disponibles en la zona.</li>
        <li>Estacionamiento propio (no en vía pública).</li>
      </ul>

      <h3>5. Documentación legal en orden</h3>

      <p>
        Este es el punto donde más propietarios pierden el contrato. Las cadenas exigen:
      </p>

      <FeatureList items={[
        { title: "Escritura pública inscrita en RPP", description: "Sin litigios, sin gravámenes, sin propietarios fallecidos sin sucesión resuelta" },
        { title: "Uso de suelo comercial vigente", description: "Permiso municipal de uso comercial o mixto. Si es habitacional, hay que cambiarlo" },
        { title: "Predial al corriente", description: "Pagado al día y sin adeudos históricos" },
        { title: "Constancia de no adeudo de servicios", description: "Agua, luz, mantenimiento de fraccionamiento si aplica" },
        { title: "Planos arquitectónicos", description: "Plano del terreno y de cualquier construcción existente" },
        { title: "RFC y constancia de situación fiscal", description: "Como persona física o moral propietaria del inmueble" },
      ]} />

      <h3>6. Zonificación y permisos</h3>

      <p>
        El predio debe tener <strong>uso de suelo comercial o mixto</strong> en el Programa de Desarrollo Urbano municipal. Si tu propiedad es habitacional, se puede tramitar el cambio de uso, pero es un proceso que toma 3-6 meses y no siempre se aprueba. Las cadenas no esperan: si tu predio no tiene el uso correcto al momento de la negociación, te descartan.
      </p>

      <h3>7. Posibilidad de demolición o remodelación</h3>

      <p>
        Muchas cadenas <strong>prefieren terrenos vacíos</strong> o con construcción demolible, para construir su prototipo desde cero. Si tienes una casa vieja, una bodega o un local que se puede demoler, eso puede ser una ventaja, no un obstáculo.
      </p>

      <h2>¿Cuánto pagan las cadenas nacionales por renta en Veracruz?</h2>

      <p>
        Las rentas varían enormemente según ubicación, tamaño y marca. Estos son rangos de referencia para la zona conurbada Veracruz – Boca del Río – Medellín:
      </p>

      <ComparisonTable
        headers={["Tipo de ubicación", "Renta mensual aproximada", "Cadenas interesadas"]}
        rows={[
          ["Esquina premium en avenida principal (Boca del Río, Costa de Oro)", "$80,000 - $180,000", "OXXO, 7-Eleven, Farmacias Guadalajara"],
          ["Esquina en avenida secundaria con tráfico medio", "$45,000 - $90,000", "OXXO, Six, Farmacias del Ahorro"],
          ["Lote en zona habitacional consolidada", "$25,000 - $55,000", "Six, OXXO, farmacias menores"],
          ["Local existente en plaza comercial", "$20,000 - $60,000", "Farmacias, Coppel, telefonía"],
          ["Esquina en cabecera municipal Medellín o Riviera Veracruzana", "$30,000 - $70,000", "OXXO, Six"],
        ]}
      />

      <Callout type="tip" title="El secreto está en la negociación del contrato">
        El número de la renta es importante, pero igual de importante son las cláusulas: incremento anual, plazo, renovación automática, quién paga qué impuestos, quién hace adaptaciones, depósito en garantía. Un mal contrato puede costarte cientos de miles de pesos a lo largo de 15 años.
      </Callout>

      <h2>El proceso paso a paso para rentar a una cadena nacional</h2>

      <StepCards steps={[
        { title: "Diagnóstico de la propiedad", description: "Evaluamos ubicación, dimensiones, uso de suelo y documentación para identificar qué cadenas son candidatas reales" },
        { title: "Preparación del expediente", description: "Reunimos planos, escrituras, fotos profesionales, levantamiento topográfico y estudio de tráfico vehicular si aplica" },
        { title: "Contacto con áreas de expansión", description: "Presentamos la propiedad a los equipos de bienes raíces de cada cadena objetivo. No es un proceso público — se accede por contactos directos" },
        { title: "Visita técnica y carta de intención", description: "Si hay interés, envían a su equipo a evaluar. Tras la visita emiten una carta de intención con condiciones preliminares" },
        { title: "Negociación de términos", description: "Renta, plazo, incrementos, depósitos, adaptaciones, fecha de entrega. Aquí se gana o se pierde el valor real del contrato" },
        { title: "Firma de contrato y entrega", description: "Contrato notarial, entrega de la propiedad y comienzo de obras de adaptación a cargo de la cadena" },
      ]} />

      <h2>Errores que descalifican tu propiedad inmediatamente</h2>

      <Callout type="warning" title="Lo que mata el contrato antes de empezar">
        <ul className="list-disc pl-5 space-y-2 mt-2">
          <li><strong>Documentación incompleta o irregular</strong>: escrituras no inscritas, problemas de sucesión, gravámenes.</li>
          <li><strong>Uso de suelo incorrecto</strong> sin disposición ni tiempo para tramitar el cambio.</li>
          <li><strong>Pretender renta excesiva</strong> sin sustento de mercado: las cadenas tienen estudios precisos de cada zona.</li>
          <li><strong>Negociar como aficionado</strong>: aceptar la primera oferta, no entender cláusulas técnicas o pelear puntos equivocados.</li>
          <li><strong>Querer mantener la construcción existente</strong> cuando la cadena necesita demoler para construir su prototipo.</li>
          <li><strong>No tener intermediario serio</strong>: las cadenas prefieren tratar con administradores profesionales que con propietarios directos.</li>
        </ul>
      </Callout>

      <h2>Cómo DEVERI te ayuda a conseguir el contrato</h2>

      <p>
        Conseguir un contrato con OXXO, Six, Farmacias Guadalajara o cualquier cadena nacional <strong>no es algo que se logre poniendo un letrero de "Se renta"</strong>. Requiere acceso directo a los equipos de expansión, conocimiento técnico del expediente que solicitan, capacidad de negociación contractual y experiencia en la zona.
      </p>

      <p>
        En <strong>DEVERI</strong> hemos gestionado más de 2,000 contratos de renta en Veracruz, Boca del Río, Medellín y la Riviera Veracruzana, incluyendo contratos comerciales con cadenas nacionales. Cuando trabajas con nosotros:
      </p>

      <FeatureList items={[
        { title: "Evaluamos honestamente tu propiedad", description: "Te decimos con datos si tu inmueble califica para cadena nacional o si conviene otra estrategia comercial" },
        { title: "Preparamos el expediente completo", description: "Documentación, planos, fotos profesionales, estudios de tráfico y memoria descriptiva al nivel que las cadenas exigen" },
        { title: "Contactamos directamente a las áreas de expansión", description: "Tenemos acceso a los equipos de bienes raíces de las principales cadenas que operan en la zona" },
        { title: "Negociamos a tu favor", description: "Conocemos los rangos reales de mercado, las cláusulas críticas y los puntos donde se puede ganar valor sin perder el contrato" },
        { title: "Gestionamos durante toda la vida del contrato", description: "Cobranza, incrementos anuales, atención al inquilino, renovaciones. Tú solo recibes tus ingresos" },
      ]} />

      <p>
        Si tienes una propiedad con potencial comercial en la zona conurbada Veracruz – Boca del Río – Medellín o en la Riviera Veracruzana, y quieres saber si califica para una cadena nacional, hablemos. Una evaluación honesta puede ser la diferencia entre rentarla a $20,000 a un negocio local o a $90,000 a una cadena con contrato a 15 años.
      </p>
    </BlogPost>
  );
}
