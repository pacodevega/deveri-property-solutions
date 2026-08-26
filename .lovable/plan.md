# Pulir el bloque de propiedades

Ruiz Cortines Bajos ya está publicada (página, catálogo, ruta, sitemap y enlaces cruzados con Altos). El siguiente paso es cerrar los detalles pendientes alrededor de las tres fichas.

## Qué haré

1. **Descubrimiento por IA y buscadores**
   - Listar cada propiedad individual en `public/llms.txt` (Yáñez D, Ruiz Cortines Altos y Bajos) con superficie, precio y ubicación; hoy solo aparece `/propiedades`.
   - Confirmar que las tres rutas están en el sitemap con su prioridad.

2. **Revisión de UX en móvil y desktop**
   - Verificar con capturas a 360px, 390px y escritorio: `/propiedades`, las tres fichas y el bloque del home.
   - Comprobar que no hay desbordamiento horizontal, que los botones envuelven bien el texto y que el botón flotante de WhatsApp no tapa CTAs ni el bloque fijo lateral.

3. **Consistencia entre las tres fichas**
   - Igualar estructura y estilo (specs, destacados, características, galería, mapa, CTA fijo, compartir).
   - Revisar que los mensajes de WhatsApp y los enlaces cruzados Altos ↔ Bajos digan lo correcto.

4. **Validación final**
   - Typecheck y build, y captura de evidencia de las pantallas revisadas.

## Detalles técnicos

- Archivos previstos: `public/llms.txt`, y ajustes puntuales de CSS/markup en `src/pages/propiedades/*.tsx`, `src/pages/Propiedades.tsx` y `src/components/home/FeaturedProperties.tsx` solo si la revisión detecta problemas.
- Sin cambios de datos de negocio: precios, superficies y textos comerciales se mantienen tal cual.
