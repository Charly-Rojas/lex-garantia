# Arquitectura

## Resumen tecnico

La aplicacion sera una plataforma Next.js con App Router, TypeScript y Supabase como backend principal. El despliegue inicial sera temporal en VPS DevUs con reverse proxy local; la meta posterior es migrar produccion a Vercel.

## Stack decidido

- Framework: Next.js con App Router.
- Lenguaje: TypeScript.
- UI: React, Tailwind CSS y componentes reutilizables.
- Backend principal: Supabase.
- Base de datos: PostgreSQL administrado por Supabase.
- Auth: Supabase Auth.
- Storage: Supabase Storage para documentos, fotos y contratos.
- Seguridad de datos: Row Level Security obligatoria.
- Integraciones: DocuSign, WhatsApp Business API, SMTP transaccional y Google Calendar.
- Infraestructura inicial: VPS DevUs con Virtualmin y reverse proxy.
- Produccion futura: Vercel.

## Principios de arquitectura

- Server Components por defecto; usar `'use client'` solo para interactividad real.
- Mutaciones mediante Server Actions o Route Handlers segun el caso.
- Route Handlers para webhooks, APIs externas, integraciones y flujos que requieran control HTTP.
- Inicializar SDKs de forma lazy dentro de funciones getter, nunca en scope global del modulo.
- Separar dominio de negocio, adaptadores de integracion y presentacion UI.
- Mantener integraciones reemplazables para evitar acoplamiento fuerte con proveedores.
- Registrar acciones relevantes para trazabilidad y auditoria.

## Areas del sistema

- Sitio publico: inicio, nosotros, servicios, ventajas, contacto, blog/SEO y formularios de lead.
- Panel interno: dashboard, expedientes, inmuebles, personas, contratos, documentos, reportes y configuracion.
- Portal externo: acceso limitado para arrendadores y arrendatarios.
- Administracion: usuarios, roles, permisos, sucursales, plantillas y catalogos.
- Integraciones: firma, mensajeria, correo, calendario y almacenamiento.

## Modelo conceptual inicial

No crear tablas finales sin validacion. El modelo conceptual incluye:

- Organizacion / empresa.
- Sucursal / ubicacion.
- Usuario / perfil / rol.
- Persona: propietario, representante, arrendador, arrendatario, aval.
- Inmueble.
- Expediente.
- Contrato.
- Plantilla de contrato.
- Documento / archivo.
- Firma / sobre DocuSign.
- Mensaje / notificacion.
- Evento de calendario.
- Pago de poliza.
- Auditoria de accesos y acciones.

## Flujos principales

- Lead publico -> captura -> seguimiento interno -> expediente.
- Registro de inmueble y partes -> validacion documental -> generacion de contrato.
- Contrato editable -> versionado -> envio a firma -> contrato firmado bloqueado.
- Vencimiento de contrato -> recordatorios -> renovacion o cierre.
- Reportes por fecha, sucursal, usuario, estatus, inmueble, propietario, arrendatario, pagos y morosidad.

## Seguridad

- RLS activa en tablas con datos de negocio.
- Acceso por rol y pertenencia a organizacion/sucursal/expediente.
- Externos con sesiones mas cortas y permisos limitados.
- Borrado logico para conservar historial.
- Cifrado o proteccion adicional para datos personales sensibles cuando aplique.
- Auditoria de accesos, cambios y acciones criticas.

## VPS temporal y Vercel futuro

La app debe poder correr en VPS inicialmente con `next build` y `next start` o servidor Node equivalente detras de reverse proxy. No depender de rutas absolutas del VPS ni de archivos dentro de `public_html`.

Para Vercel, mantener:

- Variables de entorno limpias y documentadas.
- Integraciones sin dependencias del filesystem local.
- Storage en Supabase, no en disco del servidor.
- Webhooks con URLs configurables por ambiente.

## Open Questions

- Definir si se usara shadcn/ui u otra biblioteca de componentes cuando inicie UI.
- Confirmar version exacta de Next.js al momento de ejecutar `create-next-app`.
- Confirmar si el panel interno y portal externo viviran bajo el mismo dominio o subrutas/subdominios.
- Confirmar estrategia de cache y revalidacion para contenido institucional.
