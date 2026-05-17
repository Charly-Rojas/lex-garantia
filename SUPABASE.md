# Supabase

## Resumen

Supabase sera el backend principal de Lex Garantia: Auth, PostgreSQL, Storage y Row Level Security. La administracion tecnica debe hacerse con Supabase CLI como metodo principal, no desde el dashboard web salvo tareas puntuales de operacion o inspeccion.

Estado actual:

- Supabase CLI instalado: `2.84.2`.
- Ejecutado `supabase init --yes`.
- Carpeta `supabase/` creada.
- Proyecto remoto linkeado con CLI:
  - Nombre: `lex-garantia`
  - Ref: `hrtnmzldgagchajhoygd`
  - Region: East US (Ohio)
  - Org: `txvmtisygjdnymrdgqak`
- No hay migraciones SQL de negocio.

## Inicializacion realizada

Comandos ejecutados:

```bash
supabase init --yes
supabase link --project-ref hrtnmzldgagchajhoygd
supabase projects list
```

Estructura actual:

```text
supabase/
  config.toml
  migrations/
  seed.sql
```

Reglas:

- Versionar migraciones SQL.
- No editar produccion manualmente como fuente de verdad.
- Mantener cambios reproducibles desde cero.
- Usar seeds solo para datos minimos de desarrollo.
- No incluir datos reales de clientes en seeds.
- `supabase/.temp/` queda ignorado por `supabase/.gitignore`.

## Ambientes

Ambientes previstos:

- local: desarrollo en maquina local con Supabase CLI.
- dev: proyecto Supabase remoto para integracion.
- prod: proyecto Supabase remoto para produccion.

Variables por ambiente:

```text
NEXT_PUBLIC_SUPABASE_URL
NEXT_PUBLIC_SUPABASE_ANON_KEY
SUPABASE_SERVICE_ROLE_KEY
SUPABASE_JWT_SECRET
SUPABASE_PROJECT_REF
```

Valores no secretos conocidos:

```text
SUPABASE_PROJECT_REF=hrtnmzldgagchajhoygd
```

Notas:

- `NEXT_PUBLIC_*` puede llegar al cliente.
- `SUPABASE_SERVICE_ROLE_KEY` nunca debe exponerse al cliente.
- `.env` y `.env.*` no se commitean.
- `.env.example` existe con placeholders sin secretos.

## Auth

Auth debe soportar:

- Registro o invitacion por correo.
- Login por correo y contrasena.
- Verificacion de correo.
- Recuperacion de contrasena.
- Roles de negocio mediante perfil/claims/politicas:
  - Gerencia.
  - Abogado.
  - Vendedor.
  - Arrendador.
  - Arrendatario.
- Desactivacion logica de usuarios sin borrar historial.
- Sesion mas corta para externos.

Open decision:

- Definir si roles se gestionan solo en tabla de perfiles o tambien con custom claims.

## PostgreSQL

No crear tablas finales complejas todavia. Modelo conceptual inicial:

- organizaciones.
- sucursales.
- perfiles.
- roles/permisos.
- personas.
- inmuebles.
- expedientes.
- contratos.
- plantillas.
- documentos.
- firmas.
- mensajes/notificaciones.
- eventos_calendario.
- pagos_poliza.
- auditoria.

Principios:

- Todas las tablas de negocio deben tener `id`, timestamps y borrado logico si contienen historial.
- Datos multi-empresa/multi-sucursal deben incluir pertenencia clara.
- Contratos firmados deben quedar bloqueados a nivel de aplicacion y politica.
- Auditoria debe registrar acciones criticas.

## Storage

Buckets conceptuales:

- `public-assets`: recursos publicos autorizados.
- `property-photos`: fotos de inmuebles.
- `case-documents`: documentos de expedientes.
- `contract-drafts`: versiones editables/generadas.
- `signed-contracts`: contratos firmados bloqueados.

Reglas:

- Buckets privados por defecto salvo assets publicos.
- Politicas por rol, expediente y pertenencia.
- No usar filesystem local del VPS para documentos de negocio.
- Registrar metadata del archivo en PostgreSQL.
- Versionar contratos aunque el archivo viva en Storage.

## Row Level Security

RLS es obligatoria en tablas de negocio.

Politicas conceptuales:

- Gerencia: acceso total dentro de su organizacion.
- Abogado: acceso a expedientes asignados o de su sucursal/organizacion segun regla final.
- Vendedor: acceso a leads/expedientes permitidos y acciones comerciales.
- Arrendador: acceso solo a expedientes/documentos donde participa.
- Arrendatario: acceso solo a expedientes/documentos donde participa.
- Service role: uso exclusivo server-side para tareas administrativas controladas.

No lanzar MVP con tablas de datos personales sin RLS.

## Migraciones

Convencion sugerida:

```text
YYYYMMDDHHMMSS_descripcion.sql
```

Flujo:

1. Cambiar modelo en migracion nueva.
2. Probar local.
3. Reset local para validar reproducibilidad.
4. Revisar RLS y politicas.
5. Aplicar a dev.
6. Validar app.
7. Aplicar a prod en ventana controlada.

Comandos futuros:

```bash
supabase start
supabase status
supabase migration new <nombre>
supabase db reset
supabase db lint
supabase db push
```

## Seeds

Seeds permitidos:

- Roles base.
- Sucursales demo no reales.
- Usuarios de prueba anonimizados si el flujo lo requiere.
- Catalogos minimos.

No permitido:

- Clientes reales.
- Documentos reales.
- Telefonos/correos personales reales.
- Contratos reales.

## Integracion con Next.js

Principios:

- Cliente browser solo con anon key.
- Operaciones privilegiadas solo en Server Components, Server Actions o Route Handlers.
- Service role en servidor y con validacion estricta.
- SDK Supabase inicializado de forma lazy.
- Evitar depender de variables runtime durante `next build` sin guardas.

## Pendiente inmediato

- Obtener y colocar en `.env` local los valores reales de `NEXT_PUBLIC_SUPABASE_URL` y `NEXT_PUBLIC_SUPABASE_ANON_KEY`.
- Mantener `SUPABASE_SERVICE_ROLE_KEY` solo para servidor y nunca exponerlo al cliente.
- Crear primera migracion de modelo solo despues de validar entidades, relaciones y RLS.
- Definir buckets Storage reales antes de subir documentos.

## Open Questions

- Confirmar si `hrtnmzldgagchajhoygd` sera ambiente dev, prod o ambos temporalmente.
- Region de Supabase.
- Estrategia de backups y PITR segun plan contratado.
- Reglas exactas de pertenencia por sucursal/organizacion.
- Campos sensibles que requieren cifrado adicional.
- Politica final de retencion y borrado logico.
