# Plan de Implementacion

## Resumen

El proyecto avanzara por fases. La prioridad inicial es dejar una base documental y arquitectonica suficiente para que el desarrollo pueda continuar sin ambiguedades criticas.

La estrategia es MVP primero, con foco en captacion, registro de informacion, gestion documental, generacion/firma de contratos y trazabilidad.

## Fase 0 - Documentacion base

Estado: completada.

Objetivo:

- Definir arquitectura, requerimientos, infraestructura, Supabase, reglas visuales y flujo de trabajo.
- No crear codigo de aplicacion.
- No inicializar Next.js.
- No ejecutar `supabase init`.

Entregables:

- Documentacion raiz completa.
- Reglas GitFlow.
- Plan de VPS temporal.
- Plan de migracion futura a Vercel.
- Plan de Supabase CLI.
- Reglas de marca.

## Fase 1 - Inicializacion tecnica

Estado: completada localmente.

Objetivo:

- Cerrar base Git del proyecto independiente.
- Preparar entrada documental para nuevos desarrolladores.
- Mantener el trabajo en `feature/bootstrap-docs`.

Ejecutado:

- Repositorio Git local inicializado.
- Rama activa de trabajo `feature/project-initialization`.
- Remote `git@github.com:Charly-Rojas/lex-garantia.git` configurado.
- Commit base inicial creado.
- Ramas `main` y `dev` creadas desde el commit base.
- Documentacion raiz comprometida en `feature/bootstrap-docs`.
- `dev` actualizado con el commit documental.
- `feature/project-initialization` creada desde `dev`.

Pendiente:

1. Empujar ramas si se autoriza.

## Fase 2 - Next.js base

Estado: completada localmente.

Objetivo:

- Crear app Next.js usando App Router, TypeScript, Tailwind, ESLint, `src-dir`, alias `@/*`, Turbopack y npm.

Comando previsto:

```bash
npx create-next-app@latest . --yes --force --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --turbopack --use-npm
```

Comando realmente usado por compatibilidad con CLI local:

```bash
npx create-next-app@latest /tmp/lex_garantia_next --yes --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --use-npm --disable-git
```

Validaciones:

- `npm run lint`: exitoso.
- `npm run build`: exitoso.
- No inicializar SDKs en scope global.

## Fase 3 - Supabase

Estado: inicializacion CLI completada.

Objetivo:

- Inicializar Supabase local con CLI y preparar ambientes.

Pasos:

1. Ejecutado `supabase init --yes`.
2. Ejecutado `supabase link --project-ref hrtnmzldgagchajhoygd`.
3. Creado `.env.example` sin secretos.
4. Creada carpeta `supabase/migrations` con `.gitkeep`.
5. Creado `supabase/seed.sql` vacio con advertencia contra datos reales.
6. Mantener modelo conceptual hasta validacion.
7. Crear migraciones y RLS en la fase de modelo de datos.

## Fase 4 - Sitio institucional MVP

Estado: primera version implementada y ampliada.

Objetivo:

- Construir experiencia publica sobria, profesional y alineada a marca.

Contenido inicial:

- Inicio.
- Nosotros.
- Servicios.
- Ventajas.
- Contacto.
- Formulario publico de contacto con envio SMTP configurable.
- Confirmacion de recepcion por correo al solicitante.
- Enlaces directos a correo, telefono, WhatsApp y Google Maps.
- Boton fijo de WhatsApp en todas las paginas.
- Menu hamburguesa en mobile.
- Terminos y condiciones.
- Politica de privacidad.
- Animaciones fade-in con `motion`.
- SEO tecnico: metadata, canonical, Open Graph, Twitter cards, JSON-LD, sitemap, robots y manifest.

Ambientes SEO:

- Produccion: `NEXT_PUBLIC_SITE_URL=https://lexgarantia.com`, `NEXT_PUBLIC_INDEXABLE=true`.
- Dev: `NEXT_PUBLIC_SITE_URL=https://dev-env.lexgarantia.com`, `NEXT_PUBLIC_INDEXABLE=false`.

Fuente:

- `docs/Presentación lex garantía.pptx`
- `docs/Manual corporativo.pdf`

## Fase 5 - Plataforma privada MVP

Objetivo:

- Implementar Auth, roles, panel interno y portal externo.

Entregables:

- Login.
- Perfiles.
- Roles base.
- Layout de panel.
- Control de acceso.
- Auditoria inicial.

## Fase 6 - Core juridico-operativo

Objetivo:

- Registrar partes, inmuebles, expedientes, documentos y contratos.

Entregables:

- Catalogos principales.
- Carga documental.
- Busqueda.
- Historico.
- Estados del expediente.

## Fase 7 - Integraciones

Objetivo:

- Conectar servicios externos obligatorios del MVP.

Integraciones:

- DocuSign.
- WhatsApp Business API.
- SMTP transaccional: base tecnica preparada para formulario publico; falta proveedor real y validacion de entrega.
- Google Calendar.

## Fase 8 - Reportes, seguridad y QA

Objetivo:

- Completar consultas, exportaciones, seguridad operativa, manuales y capacitacion.

Entregables:

- Reportes.
- Exportacion Excel.
- Reglas LFPDPPP.
- Pruebas integrales.
- Manual de uso.
- Capacitacion.

## Fase 9 - VPS y Vercel

Objetivo:

- Desplegar temporalmente en VPS y preparar migracion a Vercel.

VPS:

- Confirmar Virtual Server.
- App fuera de `public_html`.
- Servicio systemd.
- Reverse proxy local.
- SSL con Virtualmin/Let's Encrypt.

Vercel:

- Variables por ambiente.
- Supabase como backend externo.
- Webhooks configurables.
- Storage fuera del filesystem.

## Open Questions

- Confirmar proveedor de CMS o CMS propio con Supabase.
- Confirmar prioridad exacta entre sitio institucional y panel operativo en la fase de desarrollo.
- Confirmar si se debe empujar `feature/project-initialization` al remoto.
- Confirmar proveedor SMTP, credenciales, SPF, DKIM y DMARC para `contacto@lexgarantia.com`.
