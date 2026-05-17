# Instrucciones del Proyecto lex_garantia

Este archivo tiene prioridad maxima para cualquier instancia de Codex que trabaje en este directorio. Antes de responder, planear, editar, desplegar o ejecutar comandos relevantes del proyecto, leer este archivo completo.

`lex_garantia/` es un proyecto independiente para `lexgarantia.com`. Debe tener su propio repositorio Git, dependencias, configuracion, despliegue y documentacion tecnica. No mezclar su historial Git, dependencias, artefactos ni secretos con el repositorio operativo padre del VPS.

## Orden obligatorio de contexto

1. Leer `AGENTS.md`.
2. Leer los documentos raiz que apliquen: `PROJECT.md`, `ARCHITECTURE.md`, `REQUIREMENTS.md`, `PLAN.md`, `TASKS.md`, `STATUS.md`, `TESTING.md`, `BRAND.md`, `INFRASTRUCTURE.md`, `SUPABASE.md`.
3. Si se tocara VPS, dominios, DNS, correo, Virtualmin, SSL, servicios, systemd, reverse proxy o despliegue, leer antes `../MIGRACION_DEVUS_VPS.md`.
4. Si se trabaja diseno o contenido institucional, revisar primero `/docs`, especialmente:
   - `docs/Cotizacion_SJPI_v4.pdf`
   - `docs/Presentación lex garantía.pptx`
   - `docs/Manual corporativo.pdf`

## Contexto VPS

El VPS DevUs opera con Webmin/Virtualmin en AlmaLinux.

Acceso SSH preferido:

```bash
ssh -4 -i ~/.ssh/devus_vps root@193.46.199.28
```

Antes de tocar configuracion del VPS, leer:

```text
../MIGRACION_DEVUS_VPS.md
```

Despues de cambios funcionales u operativos en el VPS, registrar en `../MIGRACION_DEVUS_VPS.md` solo lo importante: fecha, servicio afectado, comandos/configuracion, validacion y pendientes. No registrar verificaciones rutinarias, lecturas de archivos, consultas sin cambios o acciones menores.

## Fase actual

El proyecto esta en fase de inicializacion tecnica con sitio institucional base.

Ya existe:

- App Next.js con App Router, TypeScript, Tailwind CSS, ESLint, `src/` y alias `@/*`.
- Estructura Supabase local creada con Supabase CLI.
- Link CLI al proyecto remoto `lex-garantia` (`hrtnmzldgagchajhoygd`).
- Paginas institucionales iniciales: Inicio, Nosotros, Servicios y Contacto.

En esta fase aun no se debe:

- Implementar Auth, CMS, formularios conectados ni panel privado.
- Crear tablas finales complejas.
- Aplicar migraciones de negocio definitivas.
- Usar credenciales reales en archivos versionados.

## Generacion / regeneracion del proyecto Next.js

La app Next.js ya existe. No regenerarla salvo instruccion explicita. Si se requiere regenerar desde cero, usar la intencion tecnica siguiente y revisar antes la ayuda local de `create-next-app`, porque algunos flags cambian entre versiones:

```bash
npx create-next-app@latest . --yes --force --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --turbopack --use-npm
```

Usar App Router. Mantener Server Components por defecto y marcar como `'use client'` solo componentes que realmente necesiten estado, eventos o APIs del navegador.

Si se agregan clientes de base de datos, Redis, email u otros SDKs, inicializarlos de forma lazy dentro de funciones getter, no en scope global del modulo, para evitar fallos durante `next build`.

## Stack base decidido

- Next.js con App Router.
- TypeScript.
- Supabase como backend principal.
- Supabase CLI como metodo principal de inicializacion y administracion.
- PostgreSQL mediante Supabase.
- Supabase Auth.
- Supabase Storage para documentos.
- Row Level Security obligatoria.
- VPS temporal para despliegue inicial.
- Migracion futura a Vercel para produccion.
- GitFlow estricto.

## Git y ramas

Repositorio remoto:

```text
git@github.com:Charly-Rojas/lex-garantia.git
```

Git debe vivir dentro de `lex_garantia/`, no en el repo padre.

Ramas obligatorias:

```text
main          produccion estable
dev           integracion
feature/*     nuevas funcionalidades
bug/*         correcciones
hotfix/*      correcciones urgentes
```

Reglas:

- No trabajar directamente sobre `main`.
- Integrar trabajo normal desde `feature/*` hacia `dev`.
- Usar `hotfix/*` solo para incidentes urgentes de produccion.
- Mantener commits enfocados por cambio funcional o documental.
- Todo cambio relevante debe actualizar `STATUS.md` y `TASKS.md`.
- Actualizar `PLAN.md` cuando cambie estrategia, fase, alcance, arquitectura o prioridad.

## Secretos y archivos prohibidos

No commitear:

```text
.env
.env.*
node_modules/
.next/
out/
llaves privadas
credenciales
tokens
backups
*.tar
*.tar.gz
*.zip de respaldo
```

Los secretos de produccion deben vivir fuera del repositorio. En VPS, usar una ruta tipo:

```text
/home/<usuario_virtualmin>/apps/lex_garantia/shared/.env
```

con permisos restrictivos.

## Supabase

Supabase CLI ya esta instalado en el entorno de trabajo. No usar el dashboard web como metodo principal de inicializacion.

Cuando se autorice la fase Supabase:

- Ejecutar `supabase init` desde la raiz del proyecto.
- Versionar migraciones SQL en `supabase/migrations`.
- Usar seeds solo si aportan datos minimos de desarrollo.
- Separar ambientes local, dev y prod.
- Documentar variables de entorno requeridas.
- Definir Auth, Storage, RLS y politicas antes de exponer datos sensibles.
- No crear tablas finales complejas sin validar primero el modelo conceptual.

## Diseno UI

La UI debe ser plana, sobria y profesional.

Lineamientos:

- Usar colores formales del manual: Azul Profundo `#1d3242`, Gris Carbon `#4c5154`, blanco y escala neutra.
- Evitar degradados innecesarios, efectos 3D, sombras pesadas y estetica tipo "vibe coding".
- No alterar proporciones, colores ni legibilidad del logotipo.
- Mantener diseno responsive.
- Diseñar componentes reutilizables y preparados para evolucionar hacia plataforma completa.
- Validar reglas visuales en `BRAND.md` antes de implementar interfaz.

## Despliegue en el VPS

Antes de desplegar, confirmar en Virtualmin si `lexgarantia.com` ya existe como dominio y cual sera su usuario/home. No asumir rutas.

Patron recomendado:

1. Crear o usar el virtual server `lexgarantia.com` en Virtualmin.
2. Mantener la app en una ruta dedicada, por ejemplo:

```text
/home/<usuario_virtualmin>/apps/lex_garantia
```

3. No poner `node_modules`, `.next` ni archivos de desarrollo dentro de `public_html` salvo que el plan de despliegue lo requiera explicitamente.
4. Ejecutar la app con `systemd` o gestor acordado, escuchando en `127.0.0.1:<puerto>`.
5. Configurar Apache/Nginx como reverse proxy desde `lexgarantia.com` hacia ese puerto, segun lo que realmente opere Virtualmin.
6. Validar `next build`, arranque del servicio, logs, HTTPS y respuesta publica.

## Cuidado operativo

No modificar configuraciones compartidas del VPS sin revisar impacto:

```text
Apache/Nginx global
Postfix/Dovecot
MariaDB
PHP-FPM
Virtualmin templates
DNS de otros dominios
certificados de otros dominios
firewall
```

No reutilizar usuarios, bases de datos, puertos o servicios de otros proyectos sin verificar primero.

Si se necesita un puerto para Next.js, revisar puertos ocupados antes:

```bash
ss -ltnp
```

Si se emite certificado SSL, preferir Virtualmin/Let's Encrypt para `lexgarantia.com`, `www.lexgarantia.com` y, solo si aplica, `mail.lexgarantia.com`. No incluir `admin` o `webmail` hasta confirmar DNS y uso real.

## Documentacion viva

La documentacion es parte del sistema. Cada documento debe permitir que una nueva instancia de Codex continue sin perder contexto.

Reglas:

- `PROJECT.md`: objetivo de negocio, usuarios, alcance y vision.
- `ARCHITECTURE.md`: decisiones tecnicas, stack y flujo de datos.
- `REQUIREMENTS.md`: requerimientos funcionales/no funcionales y preguntas abiertas.
- `TASKS.md`: tareas por fase y estado operativo.
- `STATUS.md`: estado actual del proyecto y siguiente paso.
- `PLAN.md`: plan de implementacion vigente.
- `TESTING.md`: estrategia de validacion.
- `BRAND.md`: reglas visuales.
- `INFRASTRUCTURE.md`: VPS temporal y migracion a Vercel.
- `SUPABASE.md`: estrategia Supabase CLI, Auth, DB, Storage, RLS y migraciones.

## Decisiones / Conflictos resueltos

- El usuario pidio documentar Nginx, pero el VPS esta operado con Webmin/Virtualmin y puede usar Apache/Nginx segun configuracion real. Decision: no asumir servidor web; documentar reverse proxy verificable y preferir configuracion gestionada por Virtualmin hasta confirmar.
- El proyecto sera Next.js, pero la primera fase es solo documental. Decision: no ejecutar `create-next-app` hasta que el usuario autorice la siguiente fase.
- Supabase sera backend principal, pero no se ejecutara `supabase init` todavia. Decision: documentar estrategia, ambientes, RLS y modelo conceptual antes de crear estructura local o migraciones.
- El repositorio padre ignora `lex_garantia/`. Decision: inicializar y operar Git dentro de este directorio, con remoto propio y GitFlow independiente.
- `create-next-app@latest` resolvio a `16.2.6` y la ayuda local ya no lista `--force` ni `--turbopack`. Decision: scaffoldear en `/tmp` con flags soportados, copiar la estructura generada al repo y preservar la intencion tecnica: App Router, TypeScript, Tailwind, ESLint, `src/`, alias y npm. El build resultante usa Turbopack por defecto en Next.js 16.2.6.
- `/docs` contiene fuentes pesadas locales. Decision: no versionar toda la carpeta; solo copiar a `public/brand/` los logos web necesarios para la app.
