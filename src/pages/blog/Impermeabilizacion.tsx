import BlogPost from "@/components/BlogPost";
import { Callout, StepCards, FeatureList, Highlight, StatRow, ComparisonTable } from "@/components/blog/BlogElements";
import heroImage from "@/assets/blog/impermeabilizacion.webp";

export default function Impermeabilizacion() {
  return (
    <BlogPost
      heroImage={heroImage}
      heroAlt="Aplicación de impermeabilizante en azotea de propiedad en Veracruz"
      title="Impermeabilización en Veracruz: guía 2026 para proteger tu propiedad"
      metaTitle="Impermeabilización en Veracruz: guía 2026 | DEVERI"
      metaDescription="Tipos de impermeabilizante, costos, frecuencia y errores comunes al impermeabilizar propiedades en Veracruz, Boca del Río, Medellín y Riviera Veracruzana."
      ctaText="Quiero impermeabilizar"
      category="Mantenimiento"
    >
      <p>
        En Veracruz no impermeabilizar es perder dinero. La temporada de lluvias, los nortes y la humedad constante atacan techos y muros todo el año. Una azotea sin protección termina en filtraciones, daño estructural y reparaciones que cuestan diez veces más que el mantenimiento preventivo.
      </p>

      <p>
        La impermeabilización es la inversión con mejor retorno que puede hacer un propietario en la zona conurbada Veracruz–Boca del Río. Esta guía te explica qué tipo elegir, cada cuánto aplicarla, cuánto debería costar y cómo evitar los errores que vemos todos los años en propiedades del puerto.
      </p>

      <StatRow stats={[
        { value: "5 años", label: "Vida útil promedio" },
        { value: "1,200mm", label: "Lluvia anual en Veracruz" },
        { value: "10x", label: "Costo si no se impermeabiliza" },
        { value: "Mar-Abr", label: "Mejor mes para aplicar" },
      ]} />

      <h2>¿Cada cuánto debes impermeabilizar?</h2>
      <p>
        Depende del tipo de producto, la calidad de la aplicación y la exposición. En el clima de Veracruz, los rangos reales son:
      </p>
      <ComparisonTable
        headers={["Tipo de impermeabilizante", "Vida útil real", "Recomendación"]}
        rows={[
          ["Acrílico económico", "1 - 2 años", "Reaplicar cada año"],
          ["Acrílico de alta gama", "3 - 5 años", "Revisar anualmente"],
          ["Prefabricado (manto asfáltico)", "5 - 8 años", "Inspección anual de empalmes"],
          ["Poliuretano", "8 - 12 años", "Premium, ideal para azoteas planas"],
          ["Cementoso (cisternas)", "5 - 10 años", "Para cisternas y muros enterrados"],
          ["Mortero impermeable", "10+ años", "Estructural, en obra nueva"],
        ]}
      />

      <h2>Mejor época para impermeabilizar en Veracruz</h2>
      <p>
        La aplicación se hace en seco. Por eso el periodo ideal es entre <strong>marzo y mayo</strong>, antes de que comience la temporada de lluvias formales (junio-octubre). En estos meses tienes más días continuos sin precipitación, lo que permite el secado correcto entre capas y un sellado perfecto de empalmes.
      </p>

      <Callout type="warning" title="Nunca apliques con humedad presente">
        Si la losa está mojada o llueve dentro de las 24 horas posteriores a la aplicación, el impermeabilizante no se adhiere y la garantía se pierde. En Veracruz, planear con tiempo es la diferencia entre proteger la propiedad y tirar el dinero.
      </Callout>

      <h2>Proceso correcto paso a paso</h2>
      <StepCards steps={[
        { title: "Diagnóstico de la azotea", description: "Identificación de filtraciones activas, grietas, encharcamientos y estado del impermeabilizante anterior. Aquí decides si es retiro total o reaplicación." },
        { title: "Limpieza profunda", description: "Retiro de polvo, hojas, grasa y restos sueltos. Lavado con agua a presión. Sin esto, cualquier producto se desprende en meses." },
        { title: "Reparación de grietas", description: "Sellado de grietas con cemento polimérico o sellador elastomérico. Revisión de bajantes, pretiles y accesos a la azotea." },
        { title: "Aplicación de primario", description: "Capa selladora que mejora la adherencia y prolonga la vida útil del impermeabilizante final." },
        { title: "Refuerzo en puntos críticos", description: "Membrana de refuerzo (manto o malla) en empalmes, pretiles, tuberías y desagües — donde se originan el 90% de las filtraciones." },
        { title: "Aplicación de capas finales", description: "Mínimo dos capas cruzadas del impermeabilizante elegido, respetando tiempos de secado entre cada una." },
      ]} />

      <h2>Costos referenciales por m²</h2>
      <ComparisonTable
        headers={["Sistema", "Costo aproximado por m² (mat + mano)"]}
        rows={[
          ["Acrílico económico", "$120 - $180"],
          ["Acrílico premium 5 años", "$220 - $320"],
          ["Manto asfáltico prefabricado", "$280 - $400"],
          ["Poliuretano profesional", "$450 - $700"],
          ["Sistema fibrado armado", "$350 - $500"],
        ]}
      />

      <h2>Errores que vemos todos los años</h2>
      <FeatureList columns={2} items={[
        { title: "Aplicar sobre superficie sucia", description: "El producto no se adhiere y se despega en la primera lluvia fuerte" },
        { title: "Una sola capa", description: "Cualquier impermeabilizante necesita mínimo dos capas cruzadas" },
        { title: "No reforzar empalmes", description: "El 90% de las fugas inicia en pretiles, bajantes y tuberías sin refuerzo" },
        { title: "Producto barato sin garantía", description: "Sale carísimo cuando dura la mitad de lo prometido" },
        { title: "Aplicar en temporada de lluvias", description: "Sin secado adecuado, el sellado falla en semanas" },
        { title: "Ignorar la pendiente", description: "Encharcamientos prolongados dañan cualquier impermeabilizante" },
      ]} />

      <Callout type="tip" title="Cómo elegir al aplicador">
        Pide siempre garantía por escrito (mínimo 3 años para sistemas premium), verifica trabajos anteriores en propiedades similares y exige factura del producto. El "todólogo" barato suele compra producto de segunda y no responde cuando aparece la filtración.
      </Callout>

      <h2>¿Cuándo conviene retirar lo viejo?</h2>
      <p>
        Si la azotea tiene 3 o más capas acumuladas, presenta ampollas, despegamientos extensos o el material se descascara con la mano, lo correcto es retiro total y reinicio. Cubrir capa sobre capa solo aplaza el problema y atrapa humedad.
      </p>

      <Highlight>
        En el clima de Veracruz, la impermeabilización no es un gasto — es un seguro. Por cada peso que inviertes en impermeabilizar bien, ahorras hasta diez en daños estructurales, pintura interior y muebles dañados por filtración.
      </Highlight>

      <p>
        En DEVERI coordinamos la impermeabilización de tu propiedad con proveedores certificados, manejamos garantías por escrito y programamos las revisiones anuales para que tu inversión nunca quede expuesta.
      </p>
    </BlogPost>
  );
}
