import BlogPost from "@/components/BlogPost";
import { Callout, StepCards, FeatureList, Highlight, StatRow, ComparisonTable } from "@/components/blog/BlogElements";
import heroImage from "@/assets/blog/salitre-prevencion.webp";

export default function SalitrePrevencion() {
  return (
    <BlogPost
      heroImage={heroImage}
      heroAlt="Tratamiento profesional de salitre en muro de propiedad costera de Veracruz"
      title="Salitre en propiedades de Veracruz: cómo eliminarlo y prevenirlo"
      metaTitle="Cómo eliminar y prevenir el salitre en Veracruz | DEVERI"
      metaDescription="El salitre destruye propiedades en Veracruz. Causas, tratamiento profesional, productos efectivos y prevención para conservar tu inversión."
      ctaText="Quiero atender el salitre"
      category="Mantenimiento"
    >
      <p>
        El salitre es el enemigo silencioso de toda propiedad en Veracruz. Aparece como manchas blancas, descascara la pintura, debilita los muros y, si no se ataca de raíz, termina comprometiendo la estructura. En zonas como Boca del Río, Mocambo, Costa de Oro y la Riviera Veracruzana, el problema es prácticamente garantizado.
      </p>

      <p>
        La buena noticia: el salitre se puede tratar y prevenir. La mala: hacerlo mal solo lo empuja más adentro del muro, donde causa daño estructural. Esta guía te explica el proceso correcto, los productos que sí funcionan y cómo evitar que regrese.
      </p>

      <StatRow stats={[
        { value: "90%", label: "Propiedades costeras afectadas" },
        { value: "70%", label: "Tratamientos mal ejecutados" },
        { value: "3 años", label: "Vida útil con tratamiento" },
        { value: "10 años", label: "Vida útil con sistema integral" },
      ]} />

      <h2>¿Qué es el salitre y por qué aparece?</h2>
      <p>
        El salitre (eflorescencia salina) son las sales minerales del subsuelo o del aire marino que migran hacia la superficie del muro a través de la humedad. Cuando esa humedad se evapora, las sales quedan cristalizadas en la superficie, formando las características manchas blancas y empujando la pintura hacia afuera.
      </p>
      <p>
        En Veracruz, el problema se agrava por tres factores combinados:
      </p>
      <FeatureList columns={2} items={[
        { title: "Humedad del subsuelo", description: "Manto freático alto y suelo arenoso saturado" },
        { title: "Brisa marina cargada de sal", description: "El viento deposita sal directamente en muros expuestos" },
        { title: "Lluvias intensas", description: "Saturan muros que no logran secarse entre eventos" },
        { title: "Altas temperaturas", description: "Aceleran la evaporación que cristaliza la sal" },
      ]} />

      <h2>Tipos de humedad que generan salitre</h2>
      <ComparisonTable
        headers={["Tipo", "Origen", "Solución"]}
        rows={[
          ["Capilaridad", "Sube del subsuelo por porosidad del muro", "Inyección de barrera + tratamiento superficial"],
          ["Filtración lateral", "Entra por muros enterrados o sin impermeabilización", "Impermeabilización exterior"],
          ["Humedad de azotea", "Filtra desde arriba sin impermeabilizante", "Impermeabilización de losa"],
          ["Brisa marina", "Sal en el aire se deposita en fachada", "Pintura elastomérica + lavado periódico"],
          ["Fuga interna", "Tubería rota dentro del muro", "Reparación de tubería + secado"],
        ]}
      />

      <Callout type="warning" title="No es solo estético">
        El salitre no es solo un problema visual. Las sales cristalizadas dentro del muro fracturan el material por presión, debilitan el aplanado y, en casos avanzados, comprometen la estructura. Una pared con salitre activo pierde hasta 40% de su capacidad estructural en 10 años.
      </Callout>

      <h2>Tratamiento profesional paso a paso</h2>
      <StepCards steps={[
        { title: "Identificar el origen de la humedad", description: "Sin atender el origen, el salitre regresa en meses. Diagnóstico con higrómetro y, si es necesario, cala en el muro." },
        { title: "Picar el aplanado dañado", description: "Retiro completo del aplanado afectado más 50 cm adicionales en cada dirección. El salitre invisible está más extenso de lo aparente." },
        { title: "Cepillado y aspirado", description: "Eliminación mecánica de sales sueltas con cepillo de alambre y aspirado profundo del muro descubierto." },
        { title: "Tratamiento neutralizador", description: "Aplicación de neutralizador de sales o convertidor de sulfatos. Tiempo de penetración mínimo 24 horas." },
        { title: "Barrera contra humedad", description: "Si es por capilaridad: inyección de resina hidrófuga en la base del muro. Crea barrera química permanente." },
        { title: "Aplanado con mortero impermeable", description: "Aplanado nuevo con mortero impermeabilizante (no mortero común). Resistente a sales y humedad." },
        { title: "Pintura elastomérica transpirable", description: "Pintura de exterior elastomérica que sella pero permite que el muro respire. Nunca pintura vinílica común sobre salitre." },
      ]} />

      <h2>Productos y soluciones que sí funcionan</h2>
      <FeatureList columns={2} items={[
        { title: "Inyección de resinas hidrófugas", description: "Sistema profesional para humedad por capilaridad" },
        { title: "Mortero impermeabilizante", description: "Tipo Bonsal, Sika, Fester u otros con resistencia a sales" },
        { title: "Pintura elastomérica transpirable", description: "Comex Reflectasol, Sherwin Extra Premium, Sayer Elastomérico" },
        { title: "Selladores penetrantes", description: "Hidrofugantes a base de silanos y siloxanos para fachadas" },
        { title: "Convertidor de sulfatos", description: "Neutraliza químicamente las sales antes del aplanado nuevo" },
        { title: "Barrera de polietileno en obra nueva", description: "Prevención total desde construcción inicial" },
      ]} />

      <Callout type="warning" title="Lo que NUNCA debes hacer">
        Lijar, pintar encima sin tratar, usar pintura vinílica común, aplicar sellador sin retirar aplanado dañado, ignorar el origen de humedad. Cada uno de estos errores triplica el costo de la solución correcta meses después.
      </Callout>

      <h2>Costos referenciales</h2>
      <ComparisonTable
        headers={["Trabajo", "Costo aproximado"]}
        rows={[
          ["Tratamiento superficial por m²", "$280 - $450"],
          ["Tratamiento integral con mortero impermeable por m²", "$550 - $850"],
          ["Inyección de barrera capilar por m lineal", "$450 - $800"],
          ["Pintura elastomérica fachada por m²", "$120 - $220"],
          ["Impermeabilización de muro enterrado por m²", "$350 - $650"],
          ["Diagnóstico profesional con higrómetro", "$1,500 - $3,500"],
        ]}
      />

      <h2>Cómo prevenir el salitre desde el inicio</h2>
      <StepCards steps={[
        { title: "Impermeabilizar muros enterrados", description: "En obra nueva o remodelación, impermeabilización exterior antes de rellenar. Es la única solución 100% efectiva contra capilaridad." },
        { title: "Pintura adecuada en fachada", description: "Pintura elastomérica transpirable cada 4-5 años. Crea barrera contra brisa marina sin sellar el muro internamente." },
        { title: "Buen drenaje perimetral", description: "Evitar acumulación de agua junto a muros. Pendiente alejándose de la propiedad y canaletas para lluvia." },
        { title: "Ventilación de espacios cerrados", description: "Cuartos sin ventilación generan humedad interna que sale como salitre. Ventilación cruzada y extractores en baños." },
        { title: "Atender filtraciones de inmediato", description: "Toda filtración resuelta en 48 horas evita salitre meses después. La velocidad de respuesta es prevención pura." },
        { title: "Lavado periódico de fachada costera", description: "En propiedades a menos de 1 km del mar, lavado anual con agua a presión retira sal antes de que penetre." },
      ]} />

      <Callout type="tip" title="Diagnóstico temprano vale oro">
        Una mancha de salitre del tamaño de una mano tratada hoy cuesta $2,000. La misma mancha ignorada un año cubre 3 m² y cuesta $25,000. La diferencia no es el salitre — es el tiempo de respuesta.
      </Callout>

      <h2>Errores frecuentes en Veracruz</h2>
      <FeatureList columns={2} items={[
        { title: "Pintar encima sin tratar", description: "La pintura se cae en semanas y agrava el problema" },
        { title: "Usar pintura vinílica de interior", description: "Sella la humedad adentro, multiplica daño" },
        { title: "Tratamiento solo superficial", description: "Sin atender el origen, regresa garantizado" },
        { title: "Yeso en muros con humedad", description: "El yeso absorbe agua y se desmorona" },
        { title: "Ignorar fugas pequeñas", description: "Toda fuga interna deriva en salitre masivo" },
        { title: "No revisar muros bajos cada año", description: "El salitre por capilaridad sube progresivamente" },
      ]} />

      <Highlight>
        En Veracruz no se trata de si tendrás salitre, sino de cuándo. Tratado a tiempo y con el sistema correcto, es controlable y preventivo. Ignorado, destruye la propiedad desde adentro.
      </Highlight>

      <p>
        En DEVERI diagnosticamos el origen real del salitre, coordinamos el tratamiento integral con técnicos especializados y aplicamos sistemas con garantía. Tu propiedad protegida del enemigo silencioso del clima de Veracruz.
      </p>
    </BlogPost>
  );
}
