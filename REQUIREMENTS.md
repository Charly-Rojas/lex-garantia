# Requerimientos

## Fuente principal

Los requerimientos se derivan de `docs/Cotizacion_SJPI_v4.pdf`, emitida el 2 de mayo de 2026, y se complementan con `docs/Presentación lex garantía.pptx` y `docs/Manual corporativo.pdf`.

## Requerimientos funcionales

### RF01 - Sitio web / plataforma de marca

- Sitio institucional responsivo para laptop y celular.
- Secciones iniciales: Inicio, Nosotros, Servicios, Ventajas y Contacto.
- Blog, SEO y landing pages institucionales.
- Formularios de contacto y captacion de leads hacia panel interno.
- Contenido autoadministrable por el despacho.
- Soporte para multimedia: fotos y video.

### RF02 - Autenticacion, roles y permisos

- Login seguro por correo y contrasena.
- Verificacion por correo y recuperacion de cuenta.
- Roles base: Gerencia, Abogado, Vendedor, Arrendador y Arrendatario.
- Permisos granulares: ver, editar, cerrar y acciones especificas.
- Sesion mas persistente para usuarios internos.
- Sesion de corta duracion para externos.
- Bitacora de accesos y acciones.
- Desactivacion de usuarios sin borrar historial.
- Politicas de contrasenas y caducidad por definir.

### RF03 - Registro de partes e inmuebles

- Catalogo central de inmuebles.
- Datos de direccion, entrecalles y datos legales: escritura, predial, regimen y folio.
- Fotos del inmueble.
- Registro de propietarios, representantes, arrendadores, arrendatarios y avales.
- Soporte para copropietarios y representante legal.
- Busqueda global por apellido.
- Multiples contratos historicos por inmueble.

### RF04 - Generacion y gestion de contratos

- Generacion automatica de contratos desde plantillas Word del despacho.
- Tipos iniciales: prestacion de servicios y arrendamiento.
- Exportacion a PDF y Word.
- Control de versiones.
- Contratos firmados bloqueados.
- Renovaciones y anexo de inventario.
- Documentos adicionales: recibos, cartas y avisos.
- Plantillas diferenciadas por region.

### RF05 - Firma electronica con DocuSign

- Integracion con DocuSign para firma electronica multi-firmante.
- Flujo de firma iniciado desde el sistema.
- Almacenamiento automatico del contrato firmado.
- Bloqueo automatico post-firma.
- Trazabilidad del estado de firma.

### RF06 - Almacenamiento documental

- Repositorio de archivos por carpetas y categorias.
- Vinculacion de documentos a inmueble, persona, contrato o pago.
- Soporte para PDFs y fotos.
- Descarga y comparticion controlada.
- Acceso restringido para documentos con datos personales.
- Control de versiones para contratos.

### RF07 - Mensajeria WhatsApp y correo

- Integracion con WhatsApp Business API.
- Integracion con SMTP transaccional.
- Plantillas configurables.
- Recordatorios antes y despues del vencimiento de contrato.
- Horarios permitidos de envio.
- Confirmacion de entrega cuando el proveedor lo permita.
- Envio/registro de recibos de pago al despacho.

### RF08 - Agenda y calendario

- Sincronizacion con Google Calendar.
- Eventos para citas, vencimientos, renovaciones y fechas clave.
- Agenda visible por rol.

### RF09 - Reportes y consultas

- Listados de clientes y expedientes.
- Estatus de proceso.
- Reportes por inmueble, propietario, arrendatario, pagos, morosidad y vencimientos.
- Filtros por fecha, ubicacion, estatus y usuario.
- Exportacion a Excel.
- Registro de pago de poliza: pendiente/pagado.

### RF10 - Seguridad, LFPDPPP y multi-empresa

- Consentimiento para tratamiento de datos personales.
- Borrado logico.
- Respaldo automatico.
- Soporte multi-sucursal y multi-empresa.
- Ubicaciones iniciales: CDMX, Guanajuato y Puebla.
- Cifrado/proteccion reforzada para datos personales sensibles cuando aplique.

### RF11 - Infraestructura y despliegue

- Configuracion de servidor temporal, dominio, SSL y ambientes.
- Base de datos en Supabase.
- Pipeline de despliegue por definir.
- VPS temporal con reverse proxy local.
- Migracion futura a Vercel.

### RF12 - QA, pruebas y capacitacion

- Pruebas integrales.
- Correccion de bugs.
- Manuales de uso.
- Sesion de capacitacion al equipo del despacho.

## Requerimientos no funcionales

- Seguridad: RLS obligatoria, permisos por rol y auditoria de acciones criticas.
- Privacidad: cumplimiento operativo con LFPDPPP; el aviso de privacidad legal lo debe proveer o validar el despacho.
- Trazabilidad: contratos, firmas, cambios y accesos deben dejar historial.
- Disponibilidad: despliegue estable con servicio supervisado y reinicio automatico.
- Escalabilidad: arquitectura preparada para migrar a Vercel y mantener Supabase como backend.
- Mantenibilidad: TypeScript, documentacion viva, GitFlow y componentes reutilizables.
- Usabilidad: UI sobria, clara, responsiva y accesible.
- Portabilidad: no depender de archivos locales para documentos; usar Supabase Storage.
- Observabilidad: logs de app, logs de servicio, errores de integraciones y validaciones de salud.

## Cronograma de referencia

- Fase 1 - Diseno y arquitectura: 3 a 4 semanas.
- Fase 2 - Desarrollo core: 5 a 7 semanas.
- Fase 3 - Contratos e integraciones: 5 a 7 semanas.
- Fase 4 - Reportes y seguridad: 3 a 4 semanas.
- Fase 5 - QA y entrega: 2 a 3 semanas.
- Total estimado: 18 a 25 semanas, con inicio previsto en junio de 2026 y entrega completa estimada para diciembre de 2026.

## Open Questions

- Plantillas Word finales para contratos y regiones.
- Alcance real de CMS autoadministrable.
- Reglas detalladas de permisos por rol.
- Politicas de caducidad de contrasenas y sesion.
- Campos obligatorios de inmuebles, personas y expedientes.
- Proveedor definitivo para WhatsApp Business API.
- Proveedor SMTP transaccional.
- Cuenta y plan DocuSign.
- Cuenta Google Calendar y calendarios por sucursal/rol.
- Aviso de privacidad y textos legales.
