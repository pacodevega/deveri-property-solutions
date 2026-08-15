# Arreglar `npm run build` (no se genera `dist/`)

## Qué está pasando

`package.json` tiene un hook `prebuild` que corre antes de `vite build`:

```
"prebuild": "bunx tsx scripts/generate-sitemap.ts"
```

Con `npm run build`, npm ejecuta primero ese `prebuild`. Depende de `bunx` y del paquete `tsx`, que no están instalados como dependencia del proyecto (no aparecen en `package.json`). Si ese comando falla, npm aborta toda la cadena y `vite build` nunca se ejecuta — por eso no aparece la carpeta `dist/`.

Además, en `scripts/generate-sitemap.ts` la constante `BASE_URL` está vacía, así que el sitemap se generaría con URLs sin dominio.

## Cambios propuestos

1. **Quitar la dependencia de `bunx tsx`** en los hooks: ejecutar el generador de sitemap con el runtime disponible, o convertir el script a `.mjs` (Node puro) para que corra con `node scripts/generate-sitemap.mjs` sin herramientas extra.
2. **Hacer que el hook no rompa el build**: si la generación del sitemap falla, que avise pero deje continuar a `vite build`.
3. **Definir `BASE_URL`** con el dominio real del sitio para que `sitemap.xml` tenga URLs absolutas.
4. **Verificar** corriendo el build y confirmando que se crea `dist/` con `index.html`, assets, `sitemap.xml`, `robots.txt` y `llms.txt`.

## Detalles técnicos

- `predev`/`prebuild` pasan de `bunx tsx scripts/generate-sitemap.ts` a un comando con Node y script `.mjs` (o `.js` con `type: module`, que ya está activo).
- El script mantiene la misma lista de rutas y escribe `public/sitemap.xml` igual que ahora.
- No se toca el código de la app ni el diseño.

## Pendiente de tu parte

¿Qué dominio uso en `BASE_URL`? Si aún no hay dominio propio, uso la URL `.lovable.app` al publicar.
