import BlogPost from "@/components/BlogPost";
import { Callout, StepCards, FeatureList, Highlight, StatRow, ComparisonTable } from "@/components/blog/BlogElements";
import heroImage from "@/assets/blog/limpieza-cisternas-tinacos.webp";

export default function LimpiezaCisternasTinacos() {
  return (
    <BlogPost
      heroImage={heroImage}
      heroAlt="Limpieza profesional de cisterna y tinaco en propiedad de Veracruz"
      title="Limpieza de cisternas y tinacos en Veracruz: guía completa para propietarios"
      metaTitle="Limpieza de cisternas y tinacos en Veracruz | DEVERI"
      metaDescription="Frecuencia, costos y proceso de limpieza de cisternas y tinacos en Veracruz. Protege la salud de tus inquilinos y la calidad del agua."
      ctaText="Quiero servicio profesional"
      category="Mantenimiento"
    >
      <p>
        El agua que llega a tu propiedad pasa por la cisterna y el tinaco antes de salir por la llave. Si esos depósitos están sucios, el agua que beben, cocinan y con la que se bañan tus inquilinos también lo está. En Veracruz, donde la humedad y el calor aceleran la proliferación de bacterias y algas, la limpieza periódica deja de ser opcional.
      </p>

      <p>
        Como propietario, mantener cisternas y tinacos limpios protege la salud de quienes habitan el inmueble, conserva las instalaciones hidráulicas y evita problemas legales por incumplimiento de la NOM-230-SSA1-2002, que regula la calidad sanitaria del agua para uso y consumo humano.
      </p>

      <StatRow stats={[
        { value: "2x", label: "Limpiezas al año mínimo" },
        { value: "85%", label: "Tinacos con sedimento" },
        { value: "30%", label: "Menos vida útil sin limpieza" },
        { value: "100%", label: "Obligación sanitaria" },
      ]} />

      <h2>¿Cada cuánto se deben limpiar?</h2>
      <p>
        La norma sanitaria mexicana recomienda mínimo dos limpiezas al año para uso doméstico. En Veracruz, por el clima húmedo y caluroso, recomendamos cada 6 meses como base, y cada 4 meses para edificios, locales con alto consumo o propiedades cercanas a la costa donde el salitre acelera la corrosión interna.
      </p>

      <ComparisonTable
        headers={["Tipo de propiedad", "Frecuencia recomendada", "Razón"]}
        rows={[
          ["Casa habitación", "Cada 6 meses", "Uso normal y bajo consumo"],
          ["Departamento individual", "Cada 6 meses", "Tinaco compartido o propio"],
          ["Edificio o condominio", "Cada 4 meses", "Alto consumo y mayor sedimentación"],
          ["Local comercial / oficina", "Cada 4-6 meses", "Uso intensivo y responsabilidad sanitaria"],
          ["Restaurantes y hoteles", "Cada 3 meses", "Obligación legal y manejo de alimentos"],
          ["Propiedad cerca del mar", "Cada 4 meses", "Salitre acelera el deterioro"],
        ]}
      />

      <h2>Señales de que urge una limpieza</h2>
      <FeatureList columns={2} items={[
        { title: "Agua turbia o amarillenta", description: "Sedimento acumulado en el fondo del depósito" },
        { title: "Olor o sabor extraño", description: "Posible presencia de bacterias o materia orgánica" },
        { title: "Partículas en la regadera", description: "Filtros tapados por sólidos en suspensión" },
        { title: "Manchas en lavabos y WC", description: "Minerales o lama liberada del tinaco" },
        { title: "Más de 6 meses sin servicio", description: "Aunque se vea bien, ya hay biopelícula formada" },
        { title: "Inquilinos con malestares", description: "Diarrea o irritación en piel pueden indicar contaminación" },
      ]} />

      <h2>Proceso profesional paso a paso</h2>
      <StepCards steps={[
        { title: "Vaciado controlado", description: "Se vacía el depósito reservando un mínimo y se desconecta la entrada de agua para trabajar con seguridad." },
        { title: "Retiro de lodos y sedimentos", description: "Extracción manual y con bomba sumergible de toda la materia acumulada en el fondo." },
        { title: "Cepillado de paredes", description: "Cepillado mecánico de paredes, techo y piso del depósito para retirar lama, biopelícula y sales adheridas." },
        { title: "Desinfección con cloro grado alimenticio", description: "Aplicación de hipoclorito de sodio en concentración sanitaria, respetando tiempos de contacto." },
        { title: "Enjuague y verificación", description: "Enjuague hasta retirar residuos de cloro, llenado y verificación de que el agua sale limpia en todas las salidas." },
        { title: "Constancia de servicio", description: "Entrega de comprobante con fecha, productos utilizados y próxima fecha sugerida — útil para tu expediente." },
      ]} />

      <Callout type="warning" title="Riesgo a la salud">
        Cisternas y tinacos sin mantenimiento son foco de bacterias como E. coli, salmonella y dengue (en cisternas con tapa rota). En contratos de arrendamiento, el propietario es responsable de garantizar agua apta para uso humano. Una intoxicación puede derivar en demanda y rescisión del contrato.
      </Callout>

      <h2>Costos referenciales en Veracruz</h2>
      <ComparisonTable
        headers={["Servicio", "Rango aproximado"]}
        rows={[
          ["Tinaco rotoplas 1,100 L", "$700 - $1,100"],
          ["Tinaco 2,500 L", "$1,000 - $1,600"],
          ["Cisterna hasta 5,000 L", "$1,800 - $2,800"],
          ["Cisterna 5,000 - 10,000 L", "$2,800 - $4,800"],
          ["Cisterna comercial >10,000 L", "Cotización en sitio"],
          ["Combo tinaco + cisterna casa", "$2,200 - $3,500"],
        ]}
      />

      <Callout type="tip" title="Lo que debes exigir al proveedor">
        Pide siempre comprobante de servicio, que el cloro utilizado sea grado alimenticio y que el personal use equipo de protección. Desconfía de quien cobra muy por debajo del promedio: suele significar enjuague rápido sin cepillado real.
      </Callout>

      <h2>¿Por qué delegarlo a un administrador?</h2>
      <FeatureList items={[
        { title: "Calendario automático", description: "Programamos las limpiezas sin que tengas que recordar fechas" },
        { title: "Proveedores verificados", description: "Trabajamos con cuadrillas con experiencia y referencias en Veracruz" },
        { title: "Coordinación con inquilinos", description: "Avisamos y agendamos sin que tengas que intervenir" },
        { title: "Bitácora documentada", description: "Mantienes evidencia ante cualquier reclamo sanitario o legal" },
      ]} />

      <Highlight>
        Una cisterna y tinaco bien mantenidos son la base de una propiedad sana, rentable y libre de reclamos. En DEVERI coordinamos la limpieza periódica con proveedores certificados y te entregamos bitácora documentada de cada servicio.
      </Highlight>

      <p>
        No esperes a que un inquilino se queje del agua o, peor aún, se enferme. La limpieza de cisternas y tinacos es uno de los mantenimientos más baratos y de mayor impacto en una propiedad de Veracruz.
      </p>
    </BlogPost>
  );
}
