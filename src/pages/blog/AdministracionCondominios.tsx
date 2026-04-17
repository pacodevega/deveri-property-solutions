import BlogPost from "@/components/BlogPost";
import { Callout, StepCards, FeatureList, Highlight, StatRow, ComparisonTable } from "@/components/blog/BlogElements";
import heroImage from "@/assets/blog/administracion-condominios.webp";

export default function AdministracionCondominios() {
  return (
    <BlogPost
      heroImage={heroImage}
      heroAlt="Áreas comunes de condominio en Veracruz con alberca y jardín"
      title="Administración de condominios y mantenimiento de áreas comunes en Veracruz"
      metaTitle="Administración de condominios en Veracruz | DEVERI"
      metaDescription="Cómo administrar un condominio en Veracruz: cuotas, áreas comunes, asambleas, proveedores y administración profesional sin conflictos."
      ctaText="Quiero administración profesional"
      category="Administración"
    >
      <p>
        Administrar un condominio en Veracruz es mucho más que cobrar cuotas. Es coordinar mantenimiento, mediar entre propietarios, atender emergencias y mantener las áreas comunes en condiciones que protejan el valor del inmueble. Cuando se hace bien, todos ganan. Cuando falla, los conflictos vecinales y el deterioro físico son consecuencia inmediata.
      </p>

      <p>
        En la zona Veracruz–Boca del Río–Riviera Veracruzana, los condominios verticales y horizontales han crecido aceleradamente. Esta guía te explica cómo administrarlos profesionalmente para conservar plusvalía, evitar conflictos y cumplir con la Ley de Propiedad en Condominio del Estado de Veracruz.
      </p>

      <StatRow stats={[
        { value: "85%", label: "Conflictos por cuotas" },
        { value: "40%", label: "Plusvalía perdida sin admon" },
        { value: "60%", label: "Morosidad en autogestión" },
        { value: "0", label: "Conflictos con admon profesional" },
      ]} />

      <h2>Funciones clave del administrador</h2>
      <FeatureList columns={2} items={[
        { title: "Cobranza de cuotas", description: "Gestión profesional con seguimiento, recordatorios y procedimiento legal de morosos" },
        { title: "Mantenimiento de áreas comunes", description: "Coordinación de limpieza, jardinería, alberca, elevadores y áreas sociales" },
        { title: "Pago de servicios y proveedores", description: "Energía eléctrica, agua, vigilancia, internet común, jardinería y limpieza" },
        { title: "Reglamento interno", description: "Aplicación y vigilancia del reglamento condominal con criterios objetivos" },
        { title: "Asambleas y actas", description: "Convocatorias, conducción, levantamiento de acta y registro ante notario si aplica" },
        { title: "Reportes financieros", description: "Estados de cuenta mensuales, presupuesto anual y rendición de cuentas transparente" },
        { title: "Atención a emergencias", description: "Disponibilidad para fugas, fallas eléctricas, accidentes y atención inmediata" },
        { title: "Gestión legal y fiscal", description: "Cumplimiento de obligaciones del condominio como persona moral o régimen de propiedad" },
      ]} />

      <h2>Áreas comunes que requieren mantenimiento programado</h2>
      <ComparisonTable
        headers={["Área común", "Frecuencia", "Riesgo de no atender"]}
        rows={[
          ["Alberca", "Limpieza diaria, químicos semanales", "Cierre sanitario, infecciones"],
          ["Cisternas y tinacos", "Cada 4 meses", "Salud pública, sanción CAEV"],
          ["Jardines y palmeras", "Quincenal", "Plagas, caída de palmas"],
          ["Elevadores", "Mensual + revisión anual", "Accidente, demanda civil"],
          ["Bombas hidroneumáticas", "Mensual", "Sin agua, daño costoso"],
          ["Iluminación común", "Continua", "Riesgo de seguridad"],
          ["Impermeabilización azoteas", "Cada 3-5 años", "Filtración a último piso"],
          ["Pintura fachadas", "Cada 4-6 años", "Pérdida de plusvalía severa"],
          ["Sistema contra incendios", "Anual con dictamen", "Sanción y responsabilidad penal"],
        ]}
      />

      <h2>Cómo calcular la cuota de mantenimiento</h2>
      <StepCards steps={[
        { title: "Presupuesto anual de gastos", description: "Suma todos los gastos fijos: vigilancia, limpieza, jardinería, energía común, agua, mantenimientos programados, honorarios de admon e imprevistos (10-15%)." },
        { title: "Determinar indiviso de cada unidad", description: "Según escritura pública, cada departamento tiene un porcentaje de indiviso. La cuota se calcula proporcionalmente a ese indiviso." },
        { title: "Dividir entre 12 meses", description: "El presupuesto anual se divide en 12 mensualidades iguales. Lo recomendable es revisar y actualizar al menos una vez al año en asamblea." },
        { title: "Reservar fondo para imprevistos", description: "Mínimo 10% adicional para fondo de reserva. Permite cubrir fallas mayores sin necesidad de cuota extraordinaria." },
        { title: "Aprobar en asamblea", description: "El presupuesto y la cuota deben aprobarse en asamblea con quórum válido y constar en acta firmada." },
      ]} />

      <Callout type="warning" title="Morosidad: el problema #1">
        En autogestión vecinal, la morosidad alcanza fácilmente 40-60%. Cuando un vecino administra a otros, evitar el conflicto pesa más que cobrar. Un administrador externo aplica el procedimiento sin emoción, lo que reduce la morosidad a menos del 10%.
      </Callout>

      <h2>Asambleas: ordinarias y extraordinarias</h2>
      <FeatureList items={[
        { title: "Asamblea ordinaria anual", description: "Aprobación de presupuesto, informe del administrador, designación de comité de vigilancia y temas generales" },
        { title: "Asamblea extraordinaria", description: "Para temas urgentes: cuotas extraordinarias, obras mayores, modificaciones al reglamento o conflictos puntuales" },
        { title: "Convocatoria con anticipación", description: "Mínimo 7 días antes con orden del día publicada en lugares visibles y entregada a cada propietario" },
        { title: "Quórum válido", description: "Según ley estatal y reglamento. Generalmente 51% en primera convocatoria y los presentes en segunda" },
        { title: "Acta firmada y archivada", description: "Toda asamblea debe documentarse en acta con asistencia, acuerdos y firmas. Es el respaldo legal del administrador" },
      ]} />

      <h2>Costos de administración profesional</h2>
      <ComparisonTable
        headers={["Tipo de condominio", "Honorarios típicos"]}
        rows={[
          ["10-20 unidades", "$8,000 - $15,000 / mes"],
          ["20-50 unidades", "$15,000 - $28,000 / mes"],
          ["50-100 unidades", "$28,000 - $45,000 / mes"],
          ["Condominios horizontales (residenciales)", "Cotización por servicios"],
          ["Edificios mixtos (habitacional + comercial)", "Cotización por complejidad"],
        ]}
      />

      <Callout type="tip" title="Cuándo cambiar de administrador">
        Si tu condominio enfrenta morosidad alta, deterioro visible de áreas comunes, falta de transparencia financiera o conflictos vecinales recurrentes, es momento de evaluar una administración profesional externa. El cambio se aprueba en asamblea con mayoría simple.
      </Callout>

      <h2>Errores que destruyen condominios</h2>
      <FeatureList columns={2} items={[
        { title: "Administrador sin experiencia", description: "Vecino voluntario sin tiempo ni herramientas" },
        { title: "Falta de reglamento claro", description: "Cada problema se resuelve a discreción" },
        { title: "Sin fondo de reserva", description: "Cualquier reparación mayor genera crisis" },
        { title: "Cuotas sin actualizar", description: "Inflación deteriora calidad del mantenimiento" },
        { title: "Asambleas sin acta", description: "Sin respaldo legal de las decisiones" },
        { title: "Mezclar finanzas personales", description: "Riesgo legal y financiero severo" },
      ]} />

      <Highlight>
        Un condominio bien administrado conserva plusvalía, atrae inquilinos de calidad y reduce conflictos al mínimo. Un condominio mal administrado pierde valor, ahuyenta compradores serios y se convierte en problema constante para sus propietarios.
      </Highlight>

      <p>
        En DEVERI ofrecemos administración profesional de condominios en Veracruz, Boca del Río, Medellín y Riviera Veracruzana. Manejamos cobranza, mantenimiento, asambleas y reportes con total transparencia financiera. Tu condominio en orden, sin que ningún vecino tenga que cargar con la responsabilidad.
      </p>
    </BlogPost>
  );
}
