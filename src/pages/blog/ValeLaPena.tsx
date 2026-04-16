import BlogPost from "@/components/BlogPost";
import { Callout, FeatureList, Highlight, ComparisonTable, StatRow } from "@/components/blog/BlogElements";
import heroImage from "@/assets/blog/vale-la-pena.jpg";

export default function Post5() {
  return (
    <BlogPost
      heroImage={heroImage}
      heroAlt="Propietario revisando reportes financieros de su propiedad"
      title="¿Vale la pena contratar administración de propiedades?"
      metaTitle="¿Vale la pena contratar administración de propiedades? | DEVERI"
      metaDescription="Descubre si contratar administración de propiedades en Veracruz vale la pena. Análisis de costos, beneficios y cuándo conviene."
      ctaText="Quiero más información"
      category="Administración"
    >
      <p>
        Muchos propietarios en Veracruz se preguntan si vale la pena pagar por administración profesional. La respuesta corta: en la mayoría de los casos, sí — y por un margen amplio.
      </p>

      <StatRow stats={[
        { value: "10%", label: "Costo mensual promedio" },
        { value: "25%", label: "Ahorro en gastos ocultos" },
        { value: "0", label: "Horas de tu tiempo" },
        { value: "3x", label: "Retorno sobre inversión" },
      ]} />

      <h2>Costos de autogestión vs. administración profesional</h2>
      <p>
        Aunque la autogestión parece más económica, los costos ocultos — tiempo, errores, vacancia prolongada, mantenimiento mal gestionado — suelen superar el costo de la administración profesional.
      </p>

      <ComparisonTable
        headers={["Concepto", "Autogestión", "Administración profesional"]}
        rows={[
          ["Costo directo", "$0/mes", "~10% de la renta"],
          ["Tiempo invertido", "5-15 hrs/semana", "0 hrs/semana"],
          ["Vacancia promedio", "2-4 meses", "2-4 semanas"],
          ["Mantenimiento", "Reactivo y costoso", "Preventivo y programado"],
          ["Riesgo legal", "Alto sin asesoría", "Mínimo con respaldo"],
          ["Estrés", "Alto", "Cero"],
        ]}
      />

      <h2>Beneficios tangibles</h2>
      <FeatureList items={[
        { title: "Menor vacancia", description: "Procesos de colocación eficientes que reducen tiempos de vacancia" },
        { title: "Cobros puntuales", description: "Seguimiento sistemático de pagos y gestión de morosidad" },
        { title: "Mantenimiento preventivo", description: "Programas que reducen gastos mayores hasta un 40%" },
        { title: "Tranquilidad total", description: "Tiempo libre para ti mientras tu inversión trabaja" },
      ]} />

      <h2>¿Cuándo conviene especialmente?</h2>
      <Callout type="tip" title="Perfil ideal para administración">
        Si no vives en Veracruz, tienes múltiples propiedades, has tenido problemas con inquilinos o simplemente prefieres enfocarte en lo tuyo, la administración profesional es tu mejor aliado.
      </Callout>

      <Highlight>
        Para la mayoría de los propietarios, la administración profesional no es un gasto sino una inversión que protege y maximiza el rendimiento de su propiedad.
      </Highlight>
    </BlogPost>
  );
}
