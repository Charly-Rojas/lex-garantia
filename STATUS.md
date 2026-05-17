# Estado del Proyecto

## Estado actual

Fecha: 2026-05-17

El proyecto Lex Garantia ya cuenta con inicializacion tecnica base: Next.js App Router, TypeScript, Tailwind CSS, ESLint, Supabase CLI inicializado y paginas institucionales iniciales.

## Hechos verificados

- Directorio del proyecto: `/home/charly/Documents/trabajo/DevUs/VPS/lex_garantia`.
- El repo padre ignora `lex_garantia/`.
- Existe repositorio Git local independiente en este directorio.
- Rama activa: `feature/project-initialization`.
- Remote configurado: `git@github.com:Charly-Rojas/lex-garantia.git`.
- Ramas locales creadas: `main`, `dev`, `feature/bootstrap-docs`.
- `dev` fue actualizado con el commit documental de `feature/bootstrap-docs`.
- La inicializacion tecnica se esta trabajando en `feature/project-initialization`.
- Supabase CLI instalado: `2.84.2`.
- Node instalado: `22.20.0`.
- npm/npx instalados: `11.6.2`.
- Next.js instalado: `16.2.6`.
- React instalado: `19.2.4`.
- Supabase remoto linkeado: `lex-garantia` (`hrtnmzldgagchajhoygd`), East US (Ohio), org `txvmtisygjdnymrdgqak`.
- `lexgarantia.com` no esta confirmado como migrado/listo en Virtualmin.

## Documentacion creada

- `AGENTS.md`
- `README.md`
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

- Supabase sera backend principal.
- Supabase CLI sera el metodo principal de inicializacion.
- VPS DevUs sera despliegue temporal.
- Vercel sera destino futuro de produccion.
- GitFlow sera obligatorio.
- No trabajar directo sobre `main`.
- No actualizar `../MIGRACION_DEVUS_VPS.md` hasta que exista cambio funcional u operativo real en VPS.
- No versionar toda la carpeta `/docs`; solo assets web copiados a `public/brand/`.
- No implementar Auth, CMS, formularios conectados ni panel privado en este paso.

## Comandos ejecutados en Paso 2

```bash
git branch -f dev feature/bootstrap-docs
git switch -c feature/project-initialization dev
npx create-next-app@latest /tmp/lex_garantia_next --yes --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --use-npm --disable-git
npm install @supabase/supabase-js
supabase init --yes
supabase link --project-ref hrtnmzldgagchajhoygd
supabase projects list
npm run lint
npm run build
```

## Validaciones

- `npm run lint`: exitoso.
- `npm run build`: exitoso.
- Rutas generadas en build: `/`, `/contacto`, `/nosotros`, `/servicios`.
- Supabase CLI muestra `lex-garantia` como proyecto linkeado.
- Dev server levantado con `npm run dev` en `http://localhost:3000`.
- Verificacion en navegador con Playwright CLI:
  - `/`: carga con contenido principal y sin overlay de error.
  - `/nosotros`: carga contenido institucional.
  - `/servicios`: carga servicios.
  - `/contacto`: carga datos de contacto.
  - Consola solo mostro mensajes informativos de React DevTools y HMR.
- No se crearon tablas ni migraciones de negocio definitivas.
- `.env.example` contiene placeholders sin secretos reales.

## Riesgos / pendientes

- Falta confirmar usuario/home de Virtualmin para `lexgarantia.com`.
- Falta confirmar Apache vs Nginx real para reverse proxy.
- Falta definir puerto local para Next.js.
- Falta confirmar proyectos Supabase dev/prod.
- Falta confirmar proveedores y credenciales para DocuSign, WhatsApp, SMTP y Google Calendar.
- Falta confirmar plantillas Word finales.
- Falta confirmar aviso de privacidad y textos LFPDPPP.
- Falta confirmar licencia/archivos web de Gordita.
- `npm install` reporta 2 vulnerabilidades moderadas en dependencias transitivas; no se ejecuto `npm audit fix --force` porque puede introducir cambios incompatibles.

## Siguiente paso

Revisar visualmente el sitio institucional inicial, decidir si se empuja `feature/project-initialization` al remoto y planear el siguiente bloque: formulario de contacto, CMS o Auth/panel base.
