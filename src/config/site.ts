export const siteConfig = {
  name: "Lex Garantía",
  navItems: [
    { href: "/", label: "Inicio" },
    { href: "/nosotros", label: "Nosotros" },
    { href: "/servicios", label: "Servicios" },
    { href: "/contacto", label: "Contacto" },
  ],
  contact: {
    website: "www.lexgarantia.com",
    email: "contacto@lexgarantia.com",
    phone: "55 5575 2704",
    whatsapp: "55 2243 4937",
  },
  offices: [
    {
      city: "Ciudad de México",
      address:
        "Calle Providencia 1415, Colonia Tlacoquemecatl del Valle, Alcaldía Benito Juárez, C.P. 03200.",
    },
    {
      city: "Puebla",
      address:
        "Centro Mayor, Torre Alfa, Calzada Zavaleta 1108, oficina 301, colonia Santa Cruz Buenavista, C.P. 72150, Puebla, Puebla.",
    },
    {
      city: "San Miguel de Allende",
      address:
        "Zacateros 73, Planta Alta, Centro, San Miguel de Allende, Guanajuato, C.P. 37700.",
    },
  ],
  platformHighlights: [
    {
      title: "Registro de datos",
      description:
        "Preparado para capturar partes, inmuebles y expedientes con permisos diferenciados.",
    },
    {
      title: "Contratos y documentos",
      description:
        "El alcance contempla generación automática, control de versiones y almacenamiento documental.",
    },
    {
      title: "Integraciones MVP",
      description:
        "La plataforma crecerá hacia DocuSign, WhatsApp Business API, correo SMTP y Google Calendar.",
    },
    {
      title: "Trazabilidad",
      description:
        "El proceso crítico es la firma del contrato de arrendamiento con seguimiento seguro y verificable.",
    },
  ],
  serviceGroups: [
    {
      title: "Proceso de contratación",
      description:
        "Acompañamiento inicial para preparar la contratación del arrendamiento.",
      items: [
        "Investigación de arrendatario",
        "Elaboración de proyecto de contrato",
        "Firma de contrato",
      ],
    },
    {
      title: "Vigencia de contrato",
      description:
        "Seguimiento administrativo durante la relación contractual.",
      items: ["Cobranza administrativa", "Alternativas de solución"],
    },
    {
      title: "Atención judicial",
      description:
        "Cobertura para escenarios de incumplimiento y controversia judicial.",
      items: [
        "Presentación de demanda",
        "Seguimiento del juicio",
        "Ejecución de sentencia",
      ],
    },
  ],
  advantages: [
    "Garantía de atención jurídica desde el inicio del proceso de contratación hasta la atención judicial",
    "Investigación profesional del arrendatario",
    "Atención personalizada",
    "Un solo pago anual",
  ],
} as const;
