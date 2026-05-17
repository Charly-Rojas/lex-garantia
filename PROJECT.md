# Proyecto Lex Garantia

## Resumen

Lex Garantia sera una plataforma web para venta, operacion y gestion de polizas juridicas de arrendamiento inmobiliario. El sistema debe iniciar como MVP operativo y crecer hacia una plataforma completa para clientes externos y equipo interno del despacho.

El proyecto atiende dos frentes:

- Sitio institucional para posicionamiento, captacion de leads, servicios, contacto, SEO, blog y administracion de contenido.
- Plataforma privada para gestionar expedientes, inmuebles, partes, documentos, contratos, firmas, recordatorios, pagos, reportes y permisos.

## Objetivo de negocio

Centralizar el proceso comercial y juridico de polizas de arrendamiento, reduciendo trabajo manual, mejorando trazabilidad y garantizando que el contrato de arrendamiento se gestione con seguridad documental, permisos claros y firma electronica valida.

La prioridad del MVP es permitir que el despacho venda, registre, documente, genere y firme contratos con flujo controlado desde el primer dia.

## Usuarios

- Gerencia: superadministracion, reportes, configuracion y control total.
- Abogado: carga informacion, genera/edita contratos, da seguimiento y cierra expedientes.
- Vendedor: registra datos, da seguimiento comercial, genera contratos cuando aplique y consulta reportes permitidos.
- Arrendador: cliente externo con permisos limitados para cargar informacion y consultar su expediente.
- Arrendatario: cliente externo con permisos limitados para cargar informacion y consultar su expediente.

## Alcance inicial

El alcance funcional se basa en la cotizacion `docs/Cotizacion_SJPI_v4.pdf`:

1. Sitio web / plataforma de marca.
2. Autenticacion, roles y permisos.
3. Registro de partes e inmuebles.
4. Generacion y gestion de contratos.
5. Firma electronica con DocuSign.
6. Almacenamiento documental.
7. Mensajeria por WhatsApp y correo.
8. Agenda y calendario.
9. Reportes y consultas.
10. Seguridad, LFPDPPP y multi-sucursal/multi-empresa.
11. Infraestructura y despliegue.
12. QA, pruebas y capacitacion.

## Vision

La arquitectura debe permitir evolucionar de un MVP rapido hacia una plataforma madura:

- Operacion multi-sucursal: CDMX, Guanajuato y Puebla.
- Permisos granulares y trazabilidad de acciones.
- Integraciones desacopladas para DocuSign, WhatsApp, SMTP y Google Calendar.
- Contratos y documentos con control de versiones.
- Documentacion tecnica suficiente para continuidad con IA y futuros desarrolladores.

## Fuentes de contenido

- `docs/Cotizacion_SJPI_v4.pdf`: alcance funcional, roles, integraciones, cronograma y condiciones.
- `docs/Presentación lex garantía.pptx`: contenido institucional para Nosotros, Servicios, Ventajas y Contacto.
- `docs/Manual corporativo.pdf`: identidad visual, colores, tipografia y usos del logotipo.

## Open Questions

- Confirmar si el sitio institucional usara CMS propio sobre Supabase o integracion con CMS externo.
- Confirmar textos finales legales, aviso de privacidad y politicas LFPDPPP.
- Confirmar si `lexgarantia.com` ya tiene Virtual Server activo en Virtualmin y usuario/home asignado.
- Confirmar proveedor definitivo de WhatsApp Business API, SMTP, DocuSign y Google Calendar.
- Confirmar si se cuenta con licencia/archivos web de la tipografia Gordita.
