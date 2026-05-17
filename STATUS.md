# Estado del Proyecto

## Estado actual

Fecha: 2026-05-17

El proyecto Lex Garantia ya esta publicado en GitHub y desplegado en VPS con entornos separados para produccion y dev.

## Hechos verificados

- Directorio del proyecto: `/home/charly/Documents/trabajo/DevUs/VPS/lex_garantia`.
- El repo padre ignora `lex_garantia/`.
- Existe repositorio Git local independiente en este directorio.
- Rama activa local: `feature/project-initialization`.
- Remote configurado: `git@github.com:Charly-Rojas/lex-garantia.git`.
- Ramas publicadas en GitHub: `main`, `dev`, `feature/project-initialization`, `feature/bootstrap-docs`.
- Commit desplegado: `9a8a10a`.
- Supabase CLI instalado: `2.84.2`.
- Node instalado: `22.20.0`.
- npm/npx instalados: `11.6.2`.
- Next.js instalado: `16.2.6`.
- React instalado: `19.2.4`.
- Supabase remoto linkeado: `lex-garantia` (`hrtnmzldgagchajhoygd`), East US (Ohio), org `txvmtisygjdnymrdgqak`.
- Produccion VPS: `https://lexgarantia.com`, usuario `lexgarantia`, puerto local `3100`, servicio `lex-garantia-prod.service`.
- Dev VPS: `https://dev-env.lexgarantia.com`, usuario `lexgdev`, puerto local `3101`, servicio `lex-garantia-dev.service`.
- Buzon creado: `contacto@lexgarantia.com`.

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
- No implementar Auth, CMS ni panel privado en este paso.

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
npm install motion nodemailer lucide-react
npm install -D @types/nodemailer
```

## Cambios del sitio publico en este bloque

- Se agrego formulario de contacto con Server Action y envio SMTP configurable.
- El formulario envia correo a `contacto@lexgarantia.com` y confirmacion de recepcion al solicitante cuando SMTP esta configurado.
- Se agregaron variables SMTP en `.env.example` sin secretos reales.
- Se agregaron enlaces `mailto:`, `tel:`, WhatsApp y Google Maps.
- Se agrego boton fijo de WhatsApp en todas las paginas.
- Se agrego menu hamburguesa en mobile.
- Se agregaron paginas `/terminos-y-condiciones` y `/politica-de-privacidad`.
- Se agregaron animaciones fade-in con `motion`.
- Se elimino la seccion "Sistema en crecimiento" del home.
- Se cambio el favicon a un recorte redondeado del logotipo.
- Se cambio el logo del hero por una version con fondo transparente.
- Se elimino `.next/` para limpiar cache local antes de regenerar build.
- Se agrego SEO tecnico: metadata, canonical, Open Graph, Twitter cards, JSON-LD, sitemap, robots, manifest e imagen OG.
- Se preparo separacion SEO por ambiente: produccion indexable y dev `noindex`.
- Se publico GitFlow en remoto: `main`, `dev` y ramas feature.
- Se desplegaron entornos separados en VPS con Apache reverse proxy y systemd.
- Se configuraron variables `.env` locales y remotas sin versionarlas.
- Se configuro SMTP local autenticado para el formulario.

## Validaciones

- `npm run lint`: exitoso.
- `npm run build`: exitoso.
- Rutas generadas en build: `/`, `/contacto`, `/nosotros`, `/servicios`, `/terminos-y-condiciones`, `/politica-de-privacidad`, `/robots.txt`, `/sitemap.xml`, `/manifest.webmanifest`.
- Supabase CLI muestra `lex-garantia` como proyecto linkeado.
- Dev server levantado con `npm run dev` en `http://localhost:3000`.
- Verificacion en navegador con Playwright CLI:
  - `/`: carga con contenido principal y sin overlay de error.
  - `/nosotros`: carga contenido institucional.
  - `/servicios`: carga servicios.
  - `/contacto`: carga formulario, datos de contacto, enlaces directos y ubicaciones con mapas.
  - `/terminos-y-condiciones`: carga contenido legal.
  - `/politica-de-privacidad`: carga contenido de privacidad.
  - Menu mobile abre y muestra navegacion.
  - Boton fijo de WhatsApp visible.
  - Consola solo mostro mensajes informativos de React DevTools y HMR.
- El envio real de correo no se valido porque faltan credenciales SMTP reales.
- No se crearon tablas ni migraciones de negocio definitivas.
- `.env.example` contiene placeholders sin secretos reales.
- `https://lexgarantia.com`: responde 200 por Cloudflare.
- `https://www.lexgarantia.com`: responde 200 por Cloudflare.
- `https://dev-env.lexgarantia.com`: responde 200 por Cloudflare.
- `https://lexgarantia.com/robots.txt`: permite indexacion.
- `https://dev-env.lexgarantia.com/robots.txt`: `Disallow: /`.
- Formulario de contacto en produccion: prueba exitosa, muestra mensaje de recepcion.
- Postfix: confirmacion externa a Gmail aceptada, cola vacia.

## Riesgos / pendientes

- Falta confirmar proyectos Supabase dev/prod.
- Falta configurar DNS de correo en Cloudflare: `mail` DNS only, MX a `mail.lexgarantia.com`, SPF, DKIM y DMARC.
- SMTP2GO rechazo `lexgarantia.com` porque el dominio no esta verificado en su panel; falta verificarlo o elegir proveedor SMTP transaccional definitivo.
- Falta confirmar proveedores y credenciales para DocuSign, WhatsApp y Google Calendar.
- Falta confirmar plantillas Word finales.
- Falta confirmar aviso de privacidad y textos LFPDPPP.
- Falta confirmar licencia/archivos web de Gordita.
- `npm install` reporta 2 vulnerabilidades moderadas en dependencias transitivas; no se ejecuto `npm audit fix --force` porque puede introducir cambios incompatibles.

## Siguiente paso

Terminar ajustes DNS en Cloudflare y verificar recepcion real de correo en bandeja/spam. Despues, decidir si el siguiente bloque sera CMS, Auth/panel base o integracion SMTP transaccional definitiva.
