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

Estado: parcialmente ejecutada.

Objetivo:

- Cerrar base Git del proyecto independiente.
- Preparar entrada documental para nuevos desarrolladores.
- Mantener el trabajo en `feature/bootstrap-docs`.

Ejecutado:

- Repositorio Git local inicializado.
- Rama activa `feature/bootstrap-docs`.
- Remote `git@github.com:Charly-Rojas/lex-garantia.git` configurado.
- Commit base inicial creado.
- Ramas `main` y `dev` creadas desde el commit base.
- Documentacion raiz comprometida en `feature/bootstrap-docs`.

Pendiente:

1. Confirmar si los assets pesados de `/docs` se versionan.
2. Crear `README.md` si se requiere entrada publica.
3. Empujar ramas si se autoriza.

## Fase 2 - Next.js base

Objetivo:

- Crear app Next.js usando App Router, TypeScript, Tailwind, ESLint, `src-dir`, alias `@/*`, Turbopack y npm.

Comando previsto:

```bash
npx create-next-app@latest . --yes --force --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --turbopack --use-npm
```

Validaciones:

- `npm run lint`
- `npm run build`
- No inicializar SDKs en scope global.

## Fase 3 - Supabase

Objetivo:

- Inicializar Supabase local con CLI y preparar ambientes.

Pasos:

1. Ejecutar `supabase init`.
2. Crear `.env.example` sin secretos.
3. Documentar variables reales fuera del repo.
4. Definir modelo conceptual validado.
5. Crear primeras migraciones SQL.
6. Activar RLS desde el inicio.
7. Crear seeds minimos solo si son necesarios.

## Fase 4 - Sitio institucional MVP

Objetivo:

- Construir experiencia publica sobria, profesional y alineada a marca.

Contenido inicial:

- Inicio.
- Nosotros.
- Servicios.
- Ventajas.
- Contacto.
- Formularios de lead.
- SEO basico.

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
- SMTP transaccional.
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

- Confirmar si se deben versionar los assets pesados de `/docs`.
- Confirmar si se debe empujar la fase documental ahora.
- Confirmar si los archivos pesados en `/docs` deben versionarse en el repo independiente.
- Confirmar proveedor de CMS o CMS propio con Supabase.
- Confirmar prioridad exacta entre sitio institucional y panel operativo en la fase de desarrollo.
