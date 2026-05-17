# Tareas

## Estado de fases

- [x] Fase 0 - Documentacion base y arquitectura inicial.
- [ ] Fase 1 - Inicializacion tecnica del repositorio.
- [ ] Fase 2 - App Next.js base.
- [ ] Fase 3 - Supabase local/dev/prod.
- [ ] Fase 4 - Sitio institucional MVP.
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
- [ ] Proteger mentalmente `main`: no trabajar directo ahi.
- [ ] Confirmar si los assets pesados de `/docs` deben versionarse en el repo independiente.
- [ ] Crear `README.md` si se requiere una entrada publica corta.
- [ ] Empujar ramas al remoto si se autoriza.

## Fase 2 - Next.js base

- [ ] Ejecutar `create-next-app` solo cuando se autorice.
- [ ] Confirmar version de Next.js generada.
- [ ] Verificar App Router, TypeScript, Tailwind, ESLint y alias `@/*`.
- [ ] Ajustar estructura inicial sin crear features fuera de alcance.
- [ ] Validar `npm run lint` y `npm run build`.

## Fase 3 - Supabase

- [ ] Ejecutar `supabase init` solo cuando se autorice.
- [ ] Definir ambientes local/dev/prod.
- [ ] Crear `.env.example` sin secretos.
- [ ] Documentar variables reales fuera del repo.
- [ ] Modelar entidades conceptuales antes de migraciones.
- [ ] Crear primeras migraciones SQL solo despues de validar modelo.
- [ ] Activar RLS desde el inicio.

## Fase 4 - Sitio institucional MVP

- [ ] Definir mapa de contenidos.
- [ ] Implementar Inicio, Nosotros, Servicios, Ventajas y Contacto.
- [ ] Aplicar `BRAND.md`.
- [ ] Crear formularios de lead.
- [ ] Preparar SEO tecnico inicial.

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
- [ ] Integrar SMTP.
- [ ] Integrar Google Calendar.

## Fase 8 - Reportes, seguridad y QA

- [ ] Reportes y exportacion Excel.
- [ ] Reglas LFPDPPP.
- [ ] Borrado logico.
- [ ] Respaldos.
- [ ] Pruebas integrales.
- [ ] Manuales y capacitacion.

## Fase 9 - Infraestructura

- [ ] Confirmar Virtual Server de `lexgarantia.com`.
- [ ] Confirmar usuario/home Virtualmin.
- [ ] Elegir puerto local.
- [ ] Configurar servicio systemd.
- [ ] Configurar reverse proxy real.
- [ ] Emitir/validar SSL.
- [ ] Validar logs y respuesta publica.
- [ ] Preparar migracion a Vercel.
