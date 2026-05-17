# Estado del Proyecto

## Estado actual

Fecha: 2026-05-17

El proyecto Lex Garantia esta en fase documental y de arquitectura inicial. No se ha inicializado Next.js, no se ha ejecutado `supabase init` y no existe codigo de aplicacion.

## Hechos verificados

- Directorio del proyecto: `/home/charly/Documents/trabajo/DevUs/VPS/lex_garantia`.
- El repo padre ignora `lex_garantia/`.
- Existe repositorio Git local independiente en este directorio.
- Rama activa: `feature/bootstrap-docs`.
- Remote configurado: `git@github.com:Charly-Rojas/lex-garantia.git`.
- Ramas locales creadas: `main`, `dev`, `feature/bootstrap-docs`.
- `main` y `dev` apuntan al commit base inicial.
- La documentacion raiz quedo comprometida en `feature/bootstrap-docs`.
- Supabase CLI instalado: `2.84.2`.
- Node instalado: `22.20.0`.
- npm/npx instalados: `11.6.2`.
- `lexgarantia.com` no esta confirmado como migrado/listo en Virtualmin.

## Documentacion creada

- `AGENTS.md`
- `PROJECT.md`
- `ARCHITECTURE.md`
- `REQUIREMENTS.md`
- `TASKS.md`
- `STATUS.md`
- `PLAN.md`
- `TESTING.md`
- `BRAND.md`
- `INFRASTRUCTURE.md`
- `SUPABASE.md`

## Decisiones vigentes

- Primera fase solo documental.
- Supabase sera backend principal.
- Supabase CLI sera el metodo principal de inicializacion.
- VPS DevUs sera despliegue temporal.
- Vercel sera destino futuro de produccion.
- GitFlow sera obligatorio.
- No trabajar directo sobre `main`.
- No actualizar `../MIGRACION_DEVUS_VPS.md` hasta que exista cambio funcional u operativo real en VPS.

## Riesgos / pendientes

- Falta confirmar usuario/home de Virtualmin para `lexgarantia.com`.
- Falta confirmar Apache vs Nginx real para reverse proxy.
- Falta definir puerto local para Next.js.
- Falta confirmar proyectos Supabase dev/prod.
- Falta confirmar proveedores y credenciales para DocuSign, WhatsApp, SMTP y Google Calendar.
- Falta confirmar plantillas Word finales.
- Falta confirmar aviso de privacidad y textos LFPDPPP.
- Falta confirmar licencia/archivos web de Gordita.

## Siguiente paso

Decidir si los assets pesados de `/docs` deben versionarse en el repo independiente. Despues, empujar `main`, `dev` y `feature/bootstrap-docs` si el usuario lo autoriza.
