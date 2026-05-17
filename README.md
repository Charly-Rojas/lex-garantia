# Lex Garantía

Aplicación Next.js para el sitio institucional y futura plataforma de gestión de pólizas jurídicas de arrendamiento de Lex Garantía.

## Estado

Paso 2 inicializado:

- Next.js App Router con TypeScript, Tailwind CSS, ESLint, `src/` y alias `@/*`.
- Supabase CLI inicializado.
- Proyecto remoto Supabase linkeado: `lex-garantia` (`hrtnmzldgagchajhoygd`).
- Páginas institucionales: Inicio, Nosotros, Servicios, Contacto, Términos y condiciones, Política de privacidad.
- Formulario de contacto con envío SMTP configurable y confirmación al solicitante.
- Botón fijo de WhatsApp, enlaces de teléfono/correo/WhatsApp y enlaces a Google Maps.
- Menú mobile con hamburguesa y animaciones fade-in con `motion`.
- SEO técnico: metadata, canonical, Open Graph, Twitter cards, JSON-LD, sitemap, robots y manifest.
- Identidad visual aplicada desde `BRAND.md`.

## Requisitos

- Node.js `22.20.0` usado durante inicialización.
- npm `11.6.2`.
- Supabase CLI `2.84.2`.

## Instalación

```bash
npm install
```

## Variables de entorno

Crear `.env` local a partir de `.env.example`:

```bash
cp .env.example .env
```

Completar valores reales fuera de Git:

```text
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
NEXT_PUBLIC_SITE_URL=https://lexgarantia.com
NEXT_PUBLIC_INDEXABLE=false

SMTP_HOST=
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=
SMTP_PASSWORD=
CONTACT_EMAIL_FROM="Lex Garantía <contacto@lexgarantia.com>"
CONTACT_EMAIL_TO=contacto@lexgarantia.com
```

No commitear `.env` ni secretos.

## Desarrollo

```bash
npm run dev
```

Rutas actuales:

```text
/
/nosotros
/servicios
/contacto
/terminos-y-condiciones
/politica-de-privacidad
```

El formulario de contacto requiere SMTP real para enviar correos. Sin esas variables, la app compila y muestra error controlado al intentar enviar.

Para producción, usar:

```text
NEXT_PUBLIC_SITE_URL=https://lexgarantia.com
NEXT_PUBLIC_INDEXABLE=true
```

Para dev, usar:

```text
NEXT_PUBLIC_SITE_URL=https://dev-env.lexgarantia.com
NEXT_PUBLIC_INDEXABLE=false
```

## Validación

```bash
npm run lint
npm run build
```

Ambos comandos pasaron durante el Paso 2.

## Supabase

Comandos ejecutados:

```bash
supabase init --yes
supabase link --project-ref hrtnmzldgagchajhoygd
supabase projects list
```

No hay tablas ni migraciones de negocio definitivas todavía. La carpeta `supabase/migrations/` queda preparada para futuras migraciones SQL y `supabase/seed.sql` permanece vacío salvo comentarios.

## GitFlow

Ramas:

```text
main
dev
feature/*
bug/*
hotfix/*
```

No trabajar directamente sobre `main`.

Rama actual de este paso:

```text
feature/project-initialization
```

## Documentación

Leer primero:

1. `AGENTS.md`
2. `PROJECT.md`
3. `ARCHITECTURE.md`
4. `PLAN.md`
5. `TASKS.md`
6. `STATUS.md`
7. `BRAND.md`
8. `SUPABASE.md`
9. `INFRASTRUCTURE.md`
10. `TESTING.md`
