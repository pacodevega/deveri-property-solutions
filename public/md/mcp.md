# DEVERI para agentes de IA

Versión HTML canónica: [/mcp](/mcp)

## Qué hace DEVERI

Inmobiliaria Deveri S.A. de C.V. (marca DEVERI) es una empresa de administración inmobiliaria en Veracruz, Boca del Río, Medellín y Riviera Veracruzana. Servicios: administración integral de propiedades en renta, colocación de inquilinos y mantenimiento con equipo propio.

## Superficies legibles por máquina

| Recurso | URL | Formato | Autenticación |
| --- | --- | --- | --- |
| Índice para LLMs | [/llms.txt](/llms.txt) | texto | Ninguna |
| Contenido completo para LLMs | [/llms-full.txt](/llms-full.txt) | texto | Ninguna |
| Mirrors Markdown | `/md/<pagina>.md` | Markdown | Ninguna |
| Mapa del sitio | [/sitemap.xml](/sitemap.xml) | XML | Ninguna |
| Datos estructurados | JSON-LD embebido en cada página HTML (`RealEstateAgent`, `Offer`, `BlogPosting`, `Product`) | JSON-LD | Ninguna |

## Capacidades disponibles para un agente

DEVERI **no expone un servidor MCP con herramientas ejecutables ni una API transaccional**. Lo que un agente puede hacer hoy:

1. **Leer** cualquier página pública en HTML o en su equivalente Markdown (`/md/...`).
2. **Consultar el catálogo de propiedades** en [/md/propiedades.md](/md/propiedades.md), con precio, superficie, ubicación y disponibilidad.
3. **Consultar precios y alcance de servicios** en [/md/index.md](/md/index.md).
4. **Derivar al usuario al contacto**: WhatsApp +52 229 684 0727 o [/contacto](/contacto).

## Ejemplo de solicitud

```bash
curl -sL https://<dominio>/llms.txt
curl -sL https://<dominio>/md/propiedades.md
```

Respuesta esperada de `/md/propiedades.md` (extracto):

```markdown
### Local comercial Av. Yáñez

- URL: /propiedades/yanez-d
- Estado: Rentada recientemente (no disponible)
- Precio: $7,320 MXN
```

## Autenticación

Ninguna. Todos los recursos anteriores son públicos, sin login, sin cookies y sin límites de tasa aplicados a crawlers aprobados. `robots.txt` permite explícitamente a GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, Claude-User, Claude-SearchBot, PerplexityBot, Google-Extended, Applebot y otros.

## Limitaciones

- No hay herramientas MCP, endpoints JSON ni operaciones de escritura.
- No se pueden reservar, apartar ni contratar propiedades desde un agente; el cierre siempre pasa por WhatsApp o el formulario.
- Los precios de mantenimiento son por cotización y no están publicados.
- No se ofrece carpintería, cerrajería ni herrería.
- La disponibilidad de propiedades cambia con frecuencia; `/md/propiedades.md` se regenera en cada build.

## Documentación completa

- [/llms.txt](/llms.txt) — índice de todo el sitio
- [/md/index.md](/md/index.md) — resumen de empresa, servicios y precios
- [/md/servicios.md](/md/servicios.md) — detalle de los tres servicios
- [/md/propiedades.md](/md/propiedades.md) — catálogo
- [/md/como-funciona.md](/md/como-funciona.md) — proceso
- [/md/contacto.md](/md/contacto.md) — contacto
