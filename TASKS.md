# Tareas

## Estado de fases

- [x] Fase 0 - Documentacion base y arquitectura inicial.
- [x] Fase 1 - Inicializacion tecnica del repositorio.
- [x] Fase 2 - App Next.js base.
- [x] Fase 3 - Supabase local/dev/prod.
- [x] Fase 4 - Sitio institucional MVP.
- [ ] Fase 5 - Auth, roles y panel base.
- [ ] Fase 6 - Expedientes, partes e inmuebles.
- [ ] Fase 7 - Contratos, documentos e integraciones.
- [ ] Fase 8 - Reportes, seguridad avanzada y QA.
- [ ] Fase 9 - Despliegue VPS y migracion futura a Vercel.

## Completado en Fase 0

- [x] Leer `AGENTS.md`.
- [x] Revisar `../MIGRACION_DEVUS_VPS.md`.
- [x] Revisar fuentes en `/docs`.
- [x] Extraer alcance funcional de `Cotizacion_SJPI_v4.pdf`.
- [x] Extraer lineamientos visuales de `Manual corporativo.pdf`.
- [x] Extraer contenido institucional base de `Presentación lex garantía.pptx`.
- [x] Crear documentacion raiz del proyecto.
- [x] Definir stack base y reglas operativas.
- [x] Definir estrategia Supabase CLI a nivel documental.
- [x] Definir plan de infraestructura VPS temporal y migracion a Vercel.

## Siguiente paso recomendado

Fase 1 - Inicializacion tecnica del repositorio:

- [x] Confirmar que se trabajara desde `feature/bootstrap-docs`.
- [x] Crear commit base inicial.
- [x] Crear ramas `main` y `dev` desde commit base.
- [x] Crear commit documental en `feature/bootstrap-docs`.
- [x] Proteger mentalmente `main`: no trabajar directo ahi.
- [x] No versionar `/docs` completo; versionar solo assets web necesarios en `public/brand/`.
- [x] Crear `README.md`.
- [ ] Empujar ramas al remoto si se autoriza.

## Fase 2 - Next.js base

- [x] Ejecutar `create-next-app` solo cuando se autorice.
- [x] Confirmar version de Next.js generada: `16.2.6`.
- [x] Verificar App Router, TypeScript, Tailwind, ESLint y alias `@/*`.
- [x] Ajustar estructura inicial sin crear features fuera de alcance.
- [x] Validar `npm run lint` y `npm run build`.

## Fase 3 - Supabase

- [x] Ejecutar `supabase init` solo cuando se autorice.
- [x] Linkear proyecto remoto `lex-garantia` (`hrtnmzldgagchajhoygd`) con Supabase CLI.
- [x] Definir ambientes local/dev/prod a nivel documental.
- [x] Crear `.env.example` sin secretos.
- [x] Documentar variables reales fuera del repo.
- [x] Mantener modelo conceptual antes de migraciones.
- [x] No crear migraciones SQL de negocio en este paso.
- [x] Documentar RLS como requisito desde el inicio.

## Fase 4 - Sitio institucional MVP

- [x] Definir mapa de contenidos.
- [x] Implementar Inicio, Nosotros, Servicios y Contacto.
- [x] Incluir Ventajas en Inicio.
- [x] Aplicar `BRAND.md`.
- [x] Crear formulario publico de contacto con envio SMTP configurable.
- [x] Enviar confirmacion de recepcion al solicitante.
- [x] Agregar enlaces directos `mailto:`, `tel:`, WhatsApp y mapas.
- [x] Agregar boton fijo de WhatsApp en todas las paginas.
- [x] Agregar menu hamburguesa para mobile.
- [x] Agregar paginas de Terminos y condiciones y Politica de privacidad.
- [x] Aplicar animaciones fade-in con libreria.
- [x] Preparar SEO tecnico inicial con metadata por pagina.
- [x] Agregar canonical, Open Graph, Twitter cards, JSON-LD, sitemap, robots y manifest.

## Fase 5 - Auth y panel base

- [ ] Configurar Supabase Auth.
- [ ] Definir perfiles y roles.
- [ ] Crear layout de panel interno.
- [ ] Crear portal externo con permisos limitados.
- [ ] Registrar accesos y acciones relevantes.

## Fase 6 - Core operativo

- [ ] Modelar expedientes.
- [ ] Modelar personas e inmuebles.
- [ ] Gestionar documentos y fotos.
- [ ] Busqueda por apellido.
- [ ] Historico de contratos por inmueble.

## Fase 7 - Contratos e integraciones

- [ ] Recibir plantillas Word finales.
- [ ] Definir motor de generacion Word/PDF.
- [ ] Integrar DocuSign.
- [ ] Integrar WhatsApp Business API.
- [x] Preparar integracion SMTP inicial para formulario publico.
- [ ] Configurar proveedor SMTP real y validar entrega.
- [ ] Integrar Google Calendar.

## Fase 8 - Reportes, seguridad y QA

- [ ] Reportes y exportacion Excel.
- [ ] Reglas LFPDPPP.
- [ ] Borrado logico.
- [ ] Respaldos.
- [ ] Pruebas integrales.
- [ ] Manuales y capacitacion.

## Fase 9 - Infraestructura

- [x] Confirmar Virtual Server de `lexgarantia.com`.
- [x] Crear Virtual Server de `dev-env.lexgarantia.com`.
- [x] Confirmar usuario/home Virtualmin.
- [x] Elegir puertos locales: prod `3100`, dev `3101`.
- [x] Configurar servicios systemd separados.
- [x] Configurar reverse proxy Apache gestionado por Virtualmin.
- [x] Emitir/validar SSL.
- [x] Validar logs y respuesta publica.
- [x] Crear buzon `contacto@lexgarantia.com`.
- [ ] Corregir DNS de correo en Cloudflare.
- [ ] Verificar `lexgarantia.com` en SMTP2GO o configurar SMTP transaccional definitivo.
- [ ] Preparar migracion a Vercel.
