import BlogPost from "@/components/BlogPost";
import { Callout, Highlight, StatRow, ComparisonTable, StepCards, FeatureList } from "@/components/blog/BlogElements";
import heroImage from "@/assets/blog/renta-buena-inversion.jpg";

export default function RentaBuenaInversion() {
  return (
    <BlogPost
      heroImage={heroImage}
      heroAlt="Análisis financiero de inversión inmobiliaria con calculadora y gráficas"
      title="¿Cuánto debes ganar por renta para que sea buena inversión? Y cuándo conviene vender"
      metaTitle="¿Cuánto ganar por renta para buena inversión? | DEVERI"
      metaDescription="Aprende a calcular si tu renta es rentable, cómo analizar el mercado inmobiliario en Veracruz y cuándo conviene vender en lugar de rentar."
      ctaText="Quiero un análisis de mi propiedad"
      category="Inversión"
      readTime="8 min"
    >
      <p>
        Tener una propiedad en renta no siempre significa tener una buena inversión. Muchos propietarios en Veracruz y Boca del Río cobran una renta "porque sí" — sin saber si el retorno justifica mantener el inmueble, si están cobrando por debajo del mercado o si les convendría más vender.
      </p>

      <p>
        En esta guía te explicamos <strong>cómo calcular si tu renta es realmente rentable</strong>, cómo analizar el estado actual del mercado (algo que en DEVERI hacemos antes de cualquier decisión) y cómo tomar la decisión inteligente entre <strong>vender o seguir rentando</strong>.
      </p>

      <StatRow stats={[
        { value: "5-8%", label: "Retorno anual saludable" },
        { value: "0.5-0.8%", label: "Renta mensual / valor inmueble" },
        { value: "12-16", label: "Años para recuperar inversión" },
        { value: "3%", label: "Plusvalía anual promedio" },
      ]} />

      <h2>La regla básica: ¿tu renta es rentable?</h2>

      <p>
        El indicador más usado en inversión inmobiliaria es el <strong>cap rate</strong> (tasa de capitalización): la renta anual neta dividida entre el valor comercial del inmueble. En México, un cap rate saludable para propiedades residenciales oscila entre <strong>5% y 8% anual</strong>.
      </p>

      <Callout type="insight" title="Fórmula del cap rate">
        <strong>Cap rate = (Renta anual neta ÷ Valor comercial del inmueble) × 100</strong><br /><br />
        Ejemplo: Si tu propiedad vale $2,000,000 y cobras $12,000/mes de renta (netos, descontando gastos), tu renta anual es $144,000. Tu cap rate es <strong>7.2%</strong> — una inversión saludable.
      </Callout>

      <p>
        Otra forma rápida de evaluarlo: tu renta mensual debería representar entre el <strong>0.5% y 0.8%</strong> del valor comercial de tu propiedad. Si cobras menos del 0.5%, probablemente estás por debajo del mercado o el inmueble está sobrevaluado para renta.
      </p>

      <ComparisonTable
        headers={["Valor del inmueble", "Renta mínima (0.5%)", "Renta ideal (0.7%)", "Renta excelente (0.8%)"]}
        rows={[
          ["$1,000,000", "$5,000/mes", "$7,000/mes", "$8,000/mes"],
          ["$2,000,000", "$10,000/mes", "$14,000/mes", "$16,000/mes"],
          ["$3,000,000", "$15,000/mes", "$21,000/mes", "$24,000/mes"],
          ["$5,000,000", "$25,000/mes", "$35,000/mes", "$40,000/mes"],
          ["$10,000,000", "$50,000/mes", "$70,000/mes", "$80,000/mes"],
        ]}
      />

      <h2>Primero: conocer el mercado (esto es lo que hacemos)</h2>

      <p>
        Antes de fijar una renta o tomar la decisión de vender, <strong>necesitas saber cómo está el mercado</strong>. No basta con preguntar a vecinos o revisar portales — se requiere un análisis profesional que considere:
      </p>

      <FeatureList columns={2} items={[
        { title: "Comparables reales", description: "Propiedades similares en la misma zona que se rentaron recientemente, no solo las que están publicadas." },
        { title: "Demanda actual", description: "Qué tipo de inquilino busca en tu zona y cuánto está dispuesto a pagar hoy." },
        { title: "Tiempo de absorción", description: "Cuánto tarda en rentarse una propiedad como la tuya — si tarda mucho, el precio puede estar alto." },
        { title: "Tendencia de precios", description: "Si las rentas en tu zona están subiendo, estables o bajando respecto al año anterior." },
        { title: "Oferta competitiva", description: "Cuántas propiedades similares compiten con la tuya en este momento." },
        { title: "Estado del inmueble", description: "Cómo se compara tu propiedad en acabados, amenidades y mantenimiento vs. la competencia." },
      ]} />

      <Callout type="tip" title="En DEVERI hacemos este análisis por ti">
        Antes de poner cualquier propiedad en renta, realizamos un <strong>estudio de mercado completo</strong>: comparables, demanda, competencia y precio óptimo. Esto asegura que no cobres de menos (perdiendo dinero) ni de más (perdiendo inquilinos). El análisis es parte de nuestro servicio — no tiene costo adicional.
      </Callout>

      <h2>¿Vender o rentar? Cómo tomar la decisión</h2>

      <p>
        Esta es una de las preguntas más importantes para cualquier propietario. La respuesta no es la misma para todos — depende de tu situación financiera, el mercado actual y lo que puedes obtener por renta vs. venta.
      </p>

      <h3>Cuándo conviene seguir rentando</h3>

      <StepCards steps={[
        { title: "Tu cap rate es superior al 6%", description: "Si tu propiedad genera un retorno anual mayor al 6%, estás obteniendo mejor rendimiento que muchos instrumentos financieros. Tiene sentido mantenerla." },
        { title: "La plusvalía de la zona va en aumento", description: "Si tu zona está en crecimiento (nuevos desarrollos, mejoras de infraestructura), el valor del inmueble seguirá subiendo mientras cobras renta." },
        { title: "Tienes baja vacancia", description: "Si tu propiedad se renta rápido y mantienes inquilinos estables, tienes un flujo de ingreso predecible y constante." },
        { title: "No necesitas el capital de forma urgente", description: "Si no tienes una necesidad inmediata de liquidez, la renta te genera ingresos pasivos mientras tu patrimonio se aprecia." },
      ]} />

      <h3>Cuándo conviene vender</h3>

      <StepCards steps={[
        { title: "Tu cap rate es menor al 4%", description: "Si la renta que obtienes representa menos del 4% anual sobre el valor del inmueble, podrías obtener mejor rendimiento vendiendo e invirtiendo el capital en otro instrumento." },
        { title: "El inmueble requiere inversión fuerte", description: "Si necesitas invertir en reparaciones mayores (impermeabilización, instalaciones, estructura) que no vas a recuperar con la renta en un plazo razonable." },
        { title: "El mercado de venta está a tu favor", description: "Si los precios de venta están altos y la demanda de compra es fuerte en tu zona, podrías capitalizar la plusvalía acumulada." },
        { title: "Tienes problemas recurrentes con inquilinos", description: "Si la propiedad genera más dolores de cabeza que ingresos y no estás dispuesto a contratar administración profesional." },
      ]} />

      <h2>El cálculo que debes hacer</h2>

      <p>
        Para tomar la decisión correcta, compara estos dos escenarios:
      </p>

      <ComparisonTable
        headers={["Escenario", "Qué calcular", "Ejemplo"]}
        rows={[
          ["Seguir rentando", "Renta anual neta × años que planeas mantener + plusvalía estimada", "$144,000 × 10 + $600,000 = $2,040,000"],
          ["Vender hoy", "Precio de venta neto (menos impuestos y comisiones) invertido al rendimiento del mercado", "$2,000,000 al 8% = $1,600,000 en 10 años"],
        ]}
      />

      <p>
        En este ejemplo, <strong>rentar genera más valor</strong> porque combina ingreso constante con apreciación del inmueble. Pero cada caso es diferente — por eso es fundamental hacer los números con datos reales de tu propiedad y tu mercado.
      </p>

      <Highlight>
        <strong>La decisión inteligente no se basa en intuición — se basa en datos.</strong> En DEVERI analizamos el mercado, calculamos tu retorno real y te damos una recomendación honesta: si te conviene rentar, te ayudamos a maximizar el ingreso. Si te conviene vender, te lo decimos con transparencia. Nuestro negocio es proteger tu patrimonio, no retenerte.
      </Highlight>

      <h2>Errores comunes al evaluar la rentabilidad</h2>

      <FeatureList items={[
        { title: "No descontar gastos", description: "Mantenimiento, predial, seguros, vacancia y administración reducen tu renta neta. Calcular con la renta bruta da un número inflado." },
        { title: "Comparar con tasas bancarias brutas", description: "Los CETES o pagarés también tienen costos e impuestos. La comparación debe ser neta contra neta." },
        { title: "Ignorar la plusvalía", description: "La renta es solo una parte del retorno. Si tu propiedad se aprecia 3-5% anual, eso se suma a tu rendimiento total." },
        { title: "No considerar la inflación", description: "Una renta que no se ajusta anualmente pierde poder adquisitivo. Los contratos deben incluir cláusulas de actualización." },
        { title: "Fijar precio por sentimiento", description: "Cobrar lo que 'sientes' que vale tu propiedad en lugar de lo que el mercado paga genera vacancia y frustración." },
      ]} />

      <h2>Conclusión</h2>

      <p>
        Una buena inversión inmobiliaria no es solo tener una propiedad — es saber cuánto debe generar, conocer el mercado y tomar decisiones basadas en números reales. Si tu renta está por debajo del 5% anual sobre el valor de tu inmueble, necesitas analizar si ajustar el precio, mejorar la propiedad o considerar la venta.
      </p>

      <p>
        En DEVERI hacemos este análisis completo antes de cualquier decisión. Estudiamos el mercado, evaluamos tu propiedad y te damos una recomendación clara — sin compromisos y sin sesgos. Tu patrimonio merece decisiones informadas.
      </p>
    </BlogPost>
  );
}
