import SEOHead from "@/components/SEOHead";

export default function PoliticasPrivacidad() {
  return (
    <>
      <SEOHead
        title="Aviso de Privacidad | DEVERI"
        description="Aviso de privacidad de Inmobiliaria Deveri S.A. de C.V. conforme a la Ley Federal de Protección de Datos Personales."
      />
      <div className="container-narrow section-padding px-4">
        <h1 className="text-3xl font-bold mb-8">Aviso de Privacidad</h1>
        <div className="prose prose-sm max-w-none text-foreground/80 space-y-6">
          <p><strong>Última actualización:</strong> abril 2026</p>

          <h2 className="text-xl font-semibold text-foreground">1. Responsable del Tratamiento</h2>
          <p>
            <strong>Inmobiliaria Deveri S.A. de C.V.</strong>, con domicilio en Boca del Río, Veracruz, México, es responsable del tratamiento de sus datos personales conforme a la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP).
          </p>

          <h2 className="text-xl font-semibold text-foreground">2. Datos Personales Recabados</h2>
          <p>DEVERI podrá recabar los siguientes datos personales:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Nombre completo</li>
            <li>Número de teléfono</li>
            <li>Correo electrónico</li>
            <li>Datos relativos a la propiedad de interés</li>
          </ul>

          <h2 className="text-xl font-semibold text-foreground">3. Finalidades del Tratamiento</h2>
          <p>Sus datos personales serán utilizados para:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Atender solicitudes de información sobre nuestros servicios</li>
            <li>Establecer comunicación para la prestación de servicios</li>
            <li>Elaborar cotizaciones y propuestas de servicio</li>
            <li>Cumplir con obligaciones contractuales</li>
          </ul>

          <h2 className="text-xl font-semibold text-foreground">4. Transferencia de Datos</h2>
          <p>
            DEVERI no transferirá sus datos personales a terceros sin su consentimiento, salvo las excepciones previstas en la LFPDPPP y su Reglamento.
          </p>

          <h2 className="text-xl font-semibold text-foreground">5. Derechos ARCO</h2>
          <p>
            Usted tiene derecho a Acceder, Rectificar, Cancelar u Oponerse al tratamiento de sus datos personales (Derechos ARCO). Para ejercer estos derechos, puede contactarnos a través de nuestros canales de comunicación.
          </p>

          <h2 className="text-xl font-semibold text-foreground">6. Uso de Cookies</h2>
          <p>
            Este sitio web puede utilizar cookies y tecnologías similares con fines de funcionamiento y análisis. Usted puede desactivar las cookies en la configuración de su navegador.
          </p>

          <h2 className="text-xl font-semibold text-foreground">7. Modificaciones al Aviso de Privacidad</h2>
          <p>
            DEVERI se reserva el derecho de modificar este Aviso de Privacidad. Cualquier cambio será publicado en esta página.
          </p>

          <h2 className="text-xl font-semibold text-foreground">8. Contacto</h2>
          <p>
            Para cualquier consulta relacionada con este Aviso de Privacidad o el tratamiento de sus datos, puede contactarnos a través de nuestro formulario de contacto o vía WhatsApp.
          </p>
        </div>
      </div>
    </>
  );
}
