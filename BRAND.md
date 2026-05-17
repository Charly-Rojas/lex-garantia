# Marca e Identidad Visual

## Fuente

Reglas extraidas de `docs/Manual corporativo.pdf` y contenido institucional de `docs/Presentación lex garantía.pptx`.

## Personalidad visual

La identidad debe comunicar:

- Seguridad juridica.
- Profesionalismo.
- Sobriedad.
- Claridad.
- Confianza.
- Trato personalizado.

La interfaz debe ser plana, formal y legible. No usar estetica experimental ni decoracion innecesaria.

## Colores corporativos

### Azul Profundo

- Pantone: 19-4111 TCX Pageant Blue.
- CMYK: C91 M69 Y48 K52.
- RGB: R29 G50 B66.
- Web: `#1d3242`.
- Uso: color institucional principal, encabezados, barras, elementos de enfasis, fondos sobrios.

### Gris Carbon

- Pantone: 19-4310 TCX Gray Whale.
- CMYK: C66 M52 Y48 K43.
- RGB: R76 G81 B84.
- Web: `#4c5154`.
- Uso: soporte visual, texto secundario, bordes, fondos neutros oscuros y estados discretos.

### Neutros

- Blanco para fondos limpios y lectura.
- Grises claros para separadores, superficies y estados secundarios.
- Negro/gris muy oscuro para texto cuando mejore contraste.

## Tipografia

El manual define la familia Gordita, con estilo destacado Black para el logotipo.

Reglas:

- Usar Gordita solo si se cuenta con archivos y licencia web.
- Si no se cuenta con licencia web, usar fallback sobrio sans-serif hasta confirmar.
- No sustituir el logotipo por texto reescrito en otra tipografia.
- No alterar manualmente el kerning del logotipo.

Fallback sugerido para UI hasta confirmar licencia:

```text
Inter, Geist, Arial, system-ui, sans-serif
```

## Logotipo

El logotipo se basa en circulos concentricos, escudo, vivienda y texto circular. Debe mantenerse como asset, no recrearse con CSS ni texto.

Reglas:

- No deformar axialmente.
- No comprimir ni estirar.
- No cambiar posicion, tamano relativo o rotacion de componentes internos.
- Mantener area de respiro alrededor del logo.
- Mantener proporcion original.
- No aplicar sombras, biseles, relieves, 3D ni filtros decorativos.
- No usar colores fuera de Azul Profundo, Gris Carbon, blanco/negro autorizados.
- No colocarlo sobre fondos complejos o fotografias sin contraste suficiente.
- Tamano minimo sugerido: 15 mm de diametro en impresos o equivalente digital legible.

Versiones autorizadas:

- Principal duo-tono: Azul Profundo + Gris Carbon sobre fondo claro.
- Monocromatica: negro puro para documentos legales o procesos economicos.
- Negativo/calado: blanco sobre fondo solido preferentemente Azul Profundo o Gris Carbon.
- Isotipo central para avatar/redes cuando el espacio sea circular o reducido.
- Marca de agua en documentos con opacidad reducida, sin afectar legibilidad.

## Estilo UI

- Layout sobrio y funcional.
- Tarjetas solo para contenido repetible o herramientas delimitadas.
- Bordes discretos, radios moderados y jerarquia clara.
- Sin degradados innecesarios.
- Sin fondos con blobs, orbes, brillos o textura decorativa.
- Iconografia simple y consistente.
- Alto contraste para texto legal y operativo.
- Responsive desde mobile hasta desktop.

## Contenido institucional base

Mensaje "Quienes somos":

- Despacho de abogados con experiencia en sectores publico y privado.
- Expedicion de polizas juridicas para contratos de arrendamiento de inmuebles.
- Enfoque de especializacion y trato personalizado.
- Asesoria y acompanamiento legal durante contratacion, ejecucion y controversia judicial.

Servicios:

- Cobertura juridica.
- Investigacion de arrendatario.
- Elaboracion de proyecto de contrato.
- Firma de contrato.
- Cobranza administrativa.
- Alternativas de solucion.
- Presentacion de demanda.
- Seguimiento del juicio.
- Ejecucion de sentencia.

Ventajas:

- Garantia de atencion juridica desde el inicio del proceso de contratacion hasta la atencion judicial.
- Investigacion profesional del arrendatario.
- Atencion personalizada.
- Un solo pago anual.

Contacto base:

- Sitio: `http://lexgarantia.com`
- Telefono: `(52) 55 752704`
- WhatsApp: `(52) 55 22434937`
- Correo: `contacto@lexgarantia.com`

Direcciones extraidas del manual:

- Ciudad de Mexico: Calle Providencia 1415, Colonia Tlacoquemecatl del Valle, Alcaldia Benito Juarez, C.P. 03200.
- Puebla: Centro Mayor, Torre Alfa, Calzada Zavaleta 1108, oficina 301, colonia Santa Cruz Buenavista, C.P. 72150, Puebla, Puebla.
- San Miguel de Allende: Zacateros 73, Planta Alta, Centro, San Miguel de Allende, Guanajuato, C.P. 37700.

## Open Questions

- Confirmar telefono exacto con formato final, porque la presentacion muestra `55 752704` y el manual muestra `55 5575 2704`.
- Confirmar si `http://lexgarantia.com` debe actualizarse a `https://lexgarantia.com` una vez activo SSL.
- Confirmar archivos finales de logotipo para web: SVG/PNG, versiones positivas/negativas e isotipo.
- Confirmar licencia web de Gordita.
