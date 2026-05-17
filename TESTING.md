# Estrategia de Validacion

## Estado actual

Existe app Next.js inicial con paginas institucionales y estructura Supabase CLI. Las validaciones obligatorias de esta fase son lint, build y navegacion basica.

## Validaciones de Fase 0

- Confirmar que existen los documentos raiz requeridos.
- Confirmar que no se creo Next.js.
- Confirmar que no existe `node_modules/`.
- Confirmar que no existe `.next/`.
- Confirmar que no existe `supabase/`.
- Confirmar que no existen `.env` ni `.env.*`.
- Confirmar que no hay secretos, tokens, llaves privadas ni backups versionables.
- Revisar consistencia entre `STATUS.md`, `TASKS.md` y `PLAN.md`.

Comandos utiles:

```bash
rg --files
find . -maxdepth 2 -type d \( -name node_modules -o -name .next -o -name supabase \)
find . -maxdepth 2 -type f \( -name ".env" -o -name ".env.*" -o -name "*.tar" -o -name "*.tar.gz" \)
git status --short --branch
git remote -v
```

## Validaciones futuras de Next.js

Comandos obligatorios:

```bash
npm run lint
npm run build
npm run dev
```

Resultados de Paso 2:

- `npm run lint`: exitoso.
- `npm run build`: exitoso.
- Rutas compiladas: `/`, `/contacto`, `/nosotros`, `/servicios`.
- Navegacion en dev server verificada con Playwright CLI:
  - Home con contenido visible.
  - Nosotros con texto institucional.
  - Servicios con cobertura juridica.
  - Contacto con `contacto@lexgarantia.com`.
  - Sin overlay de error de Next.js.

Validar manualmente:

- Home publica carga sin errores.
- Navegacion responsive.
- Formularios muestran estados de carga, exito y error.
- No hay errores de consola.
- `next build` no falla por variables de entorno ausentes en build.
- SDKs externos usan inicializacion lazy.

## Validaciones futuras de Supabase

Supabase CLI ya fue inicializado y linkeado.

```bash
supabase status
supabase projects list
supabase db lint
supabase db reset
```

Validar:

- Migraciones aplican desde cero.
- Seeds no contienen datos reales sensibles.
- RLS esta activa en tablas de negocio.
- Politicas permiten solo acceso esperado por rol y pertenencia.
- Storage restringe documentos privados.
- Variables de entorno estan documentadas en `.env.example` sin secretos reales.

Nota: `supabase db lint` y `supabase db reset` se ejecutaran cuando existan migraciones de negocio y entorno local Supabase activo.

## Pruebas manuales MVP

- Lead publico se registra y queda visible para internos autorizados.
- Usuario interno inicia sesion y conserva sesion segun politica.
- Usuario externo inicia sesion con expiracion corta.
- Arrendador/arrendatario solo ven su expediente.
- Abogado puede cargar informacion y generar contrato.
- Contrato firmado queda bloqueado.
- Documento privado no es accesible por usuario no autorizado.
- Recordatorio de vencimiento se agenda/envia segun proveedor.
- Reportes filtran por fecha, ubicacion, estatus y usuario.

## Pruebas automatizadas futuras

Agregar cuando exista codigo estable:

- Unit tests para utilidades de dominio.
- Tests de integracion para Server Actions y Route Handlers.
- Tests de RLS con usuarios representativos.
- Tests e2e para login, expediente, carga documental y firma simulada.
- Tests de accesibilidad en flujos publicos clave.

## Criterios de aceptacion por entrega

- Lint sin errores.
- Build exitoso.
- Flujo manual principal validado.
- Sin secretos en Git.
- `STATUS.md`, `TASKS.md` y `PLAN.md` actualizados.
- Si hubo cambio VPS funcional, `../MIGRACION_DEVUS_VPS.md` actualizado.
