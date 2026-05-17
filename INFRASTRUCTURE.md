# Infraestructura

## Resumen

La infraestructura inicial sera temporal en el VPS DevUs operado con Webmin/Virtualmin sobre AlmaLinux. La aplicacion debe prepararse para migrar posteriormente a Vercel sin depender del filesystem local para datos de negocio.

## VPS DevUs

Acceso preferido:

```bash
ssh -4 -i ~/.ssh/devus_vps root@193.46.199.28
```

Antes de cualquier cambio operativo leer:

```text
../MIGRACION_DEVUS_VPS.md
```

Estado conocido:

- `lexgarantia.com` fue revisado en contexto DNS/Virtualmin, pero no quedo considerado como migrado/listo.
- No tratar `lexgarantia.com` como cerrado hasta confirmar Virtual Server, DNS, correo, SSL y usuario/home.

## Dominio y Virtualmin

Antes de desplegar:

```bash
virtualmin list-domains
virtualmin list-users --domain lexgarantia.com
virtualmin list-databases --domain lexgarantia.com
```

Confirmar:

- Si existe Virtual Server `lexgarantia.com`.
- Usuario Unix asignado.
- Home real.
- Document root real.
- Estado de correo.
- SSL vigente.
- DNS en Cloudflare.

## Ruta de aplicacion

No asumir rutas. Patron recomendado:

```text
/home/<usuario_virtualmin>/apps/lex_garantia
/home/<usuario_virtualmin>/apps/lex_garantia/releases
/home/<usuario_virtualmin>/apps/lex_garantia/current
/home/<usuario_virtualmin>/apps/lex_garantia/shared
/home/<usuario_virtualmin>/logs
```

Variables de entorno:

```text
/home/<usuario_virtualmin>/apps/lex_garantia/shared/.env
```

Permisos:

```bash
chmod 600 /home/<usuario_virtualmin>/apps/lex_garantia/shared/.env
```

## Servicio Node.js

Preferencia inicial: `systemd`.

Ejemplo conceptual:

```ini
[Unit]
Description=Lex Garantia Next.js
After=network.target

[Service]
Type=simple
User=<usuario_virtualmin>
WorkingDirectory=/home/<usuario_virtualmin>/apps/lex_garantia/current
EnvironmentFile=/home/<usuario_virtualmin>/apps/lex_garantia/shared/.env
ExecStart=/usr/bin/npm run start
Restart=always
RestartSec=5

[Install]
WantedBy=multi-user.target
```

Validaciones:

```bash
systemctl daemon-reload
systemctl enable lex-garantia
systemctl start lex-garantia
systemctl status lex-garantia
journalctl -u lex-garantia -f
```

PM2 queda como alternativa solo si se acuerda explicitamente.

## Reverse proxy

Decision vigente: no asumir Apache ni Nginx hasta revisar configuracion real de Virtualmin.

Objetivo conceptual:

```text
https://lexgarantia.com -> Apache/Nginx gestionado por Virtualmin -> http://127.0.0.1:<puerto>
```

Reglas:

- Escuchar solo en `127.0.0.1:<puerto>`.
- No exponer puerto Node.js directo a internet.
- Revisar puertos ocupados antes:

```bash
ss -ltnp
```

- Validar con:

```bash
curl -I https://lexgarantia.com
curl -I http://127.0.0.1:<puerto>
```

## SSL

Preferir Virtualmin/Let's Encrypt para:

```text
lexgarantia.com
www.lexgarantia.com
mail.lexgarantia.com solo si aplica
```

No incluir `admin` o `webmail` hasta confirmar DNS y uso real.

## Correo

No enviar correo directo por puerto `25`.

Usar proveedor transaccional:

- SMTP2GO.
- Brevo.
- Mailgun.
- Amazon SES.
- Google Workspace.
- Microsoft 365.

Configurar SPF, DKIM y DMARC del proveedor elegido.

Variables requeridas para el formulario publico:

```text
SMTP_HOST
SMTP_PORT
SMTP_SECURE
SMTP_USER
SMTP_PASSWORD
CONTACT_EMAIL_FROM
CONTACT_EMAIL_TO
```

El remitente previsto es `contacto@lexgarantia.com`. Antes de produccion se debe confirmar que el proveedor SMTP permite enviar desde ese dominio y que SPF/DKIM/DMARC estan correctamente publicados.

## Supabase CLI e infraestructura de datos

Supabase vive fuera del VPS como backend principal.

En VPS solo deben existir variables para:

- URL publica Supabase.
- anon key.
- service role key solo si una tarea de servidor la necesita y nunca en cliente.
- claves de integraciones.

No guardar documentos de negocio en disco local; usar Supabase Storage.

## Migracion futura a Vercel

Para facilitar migracion:

- No depender de rutas locales para uploads.
- No depender de comandos de Virtualmin desde codigo.
- Mantener variables por ambiente.
- Usar Supabase para DB/Auth/Storage.
- Mantener webhooks con URLs configurables.
- Documentar build/start.
- Evitar dependencias del sistema operativo salvo que sean inevitables.

## Open Questions

- Confirmar si Virtualmin usara Apache, Nginx o ambos para este dominio.
- Confirmar usuario/home real de `lexgarantia.com`.
- Confirmar puerto local disponible.
- Confirmar si el correo del dominio se operara en el VPS o proveedor externo.
- Confirmar politica de backups para Supabase y para despliegues.
