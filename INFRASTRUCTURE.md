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

- `lexgarantia.com` ya tiene Virtual Server en Virtualmin para produccion.
- `dev-env.lexgarantia.com` ya tiene Virtual Server separado en Virtualmin para dev.
- Queda pendiente ajustar DNS de correo en Cloudflare y, si se desea relay transaccional, verificar `lexgarantia.com` en SMTP2GO o configurar otro proveedor SMTP autenticado.

## Dominio y Virtualmin

Virtual servers actuales:

```text
lexgarantia.com          usuario: lexgarantia  app: /home/lexgarantia/apps/lex_garantia_prod/current  puerto: 3100
dev-env.lexgarantia.com  usuario: lexgdev      app: /home/lexgdev/apps/lex_garantia_dev/current      puerto: 3101
```

Servicios systemd:

```text
lex-garantia-prod.service
lex-garantia-dev.service
```

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
SMTP_TLS_SERVERNAME
SMTP_TLS_REJECT_UNAUTHORIZED
SMTP_USER
SMTP_PASSWORD
CONTACT_EMAIL_FROM
CONTACT_EMAIL_TO
```

El remitente previsto es `contacto@lexgarantia.com`. Antes de produccion se debe confirmar que el proveedor SMTP permite enviar desde ese dominio y que SPF/DKIM/DMARC estan correctamente publicados.

Estado actual:

- Buzon `contacto@lexgarantia.com` creado en Virtualmin.
- App configurada para autenticar SMTP contra Postfix local con `SMTP_HOST=127.0.0.1` y `SMTP_TLS_SERVERNAME=server.devus.mx`.
- OpenDKIM firma `lexgarantia.com` con selector `202604`.
- SMTP2GO rechazo `lexgarantia.com` porque el dominio no esta verificado en el panel de SMTP2GO. Se retiro el mapeo de relay para evitar rebotes inmediatos.
- Postfix envio una confirmacion de prueba a Gmail por entrega directa y Gmail la acepto; aun asi, para produccion estable se recomienda verificar `lexgarantia.com` en SMTP2GO o usar un proveedor transaccional dedicado.

DNS de Cloudflare pendiente para correo:

```text
A      @                  193.46.199.28        Proxied
CNAME  www                lexgarantia.com      Proxied
A      dev-env            193.46.199.28        Proxied
A      mail               193.46.199.28        DNS only
MX     @                  mail.lexgarantia.com  prioridad 10
TXT    @                  v=spf1 a mx ip4:193.46.199.28 ~all
TXT    _dmarc             v=DMARC1; p=none; rua=mailto:contacto@lexgarantia.com; adkim=s; aspf=s
TXT    202604._domainkey  v=DKIM1; k=rsa; p=MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA2FmAvfI9x03DZZsyYF0Yo3a0lKaw7xU7qmeq9EmaNjpCyN4nTjeY2iKdPgreDEzfrqTt14YKD317Hn+z7suVZca2CasEfCBCt/niIo4TMWi+wEjbnczQBga6+LP7FpfWOnfVx/6fKmw6zq9tt+zze5HXIremLo++RFCtiTIm3m4zMvr4rIHWX/covWrPwfj8LsZuAtHKm5ZmVCEvFFegLPuOXdEEgp49hW2S1XcLAEB2SA8OMk3RQ0obzlnmDdSUMAALcmkaCQet0fNi+xhQ13DUrSjbZ/r6i99HgYn2eP58e9aRIKObec/ExoAs+geUK2qgRbOPzdNCFi09RIWfvwIDAQAB
```

Reglas Cloudflare:

- `mail` debe estar en DNS only. No usar proxy naranja para SMTP/IMAP/POP.
- El MX debe apuntar a `mail.lexgarantia.com`, no al apex proxied.
- Si `ftp` se conserva, ponerlo DNS only; si no se usa, eliminarlo.
- Si se verifica `lexgarantia.com` en SMTP2GO, actualizar SPF para incluir el include que indique SMTP2GO.

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
