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
    phoneHref: "tel:+525555752704",
    whatsapp: "55 2243 4937",
    whatsappHref:
      "https://wa.me/525522434937?text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20una%20p%C3%B3liza%20jur%C3%ADdica%20de%20arrendamiento.",
    mailHref: "mailto:contacto@lexgarantia.com",
  },
  offices: [
    {
      city: "Ciudad de México",
      address:
        "Calle Providencia 1415, Colonia Tlacoquemecatl del Valle, Alcaldía Benito Juárez, C.P. 03200.",
      mapsHref:
        "https://www.google.com/maps/search/?api=1&query=Calle%20Providencia%201415%2C%20Tlacoquemecatl%20del%20Valle%2C%20Benito%20Juarez%2C%2003200%2C%20Ciudad%20de%20Mexico",
    },
    {
      city: "Puebla",
      address:
        "Centro Mayor, Torre Alfa, Calzada Zavaleta 1108, oficina 301, colonia Santa Cruz Buenavista, C.P. 72150, Puebla, Puebla.",
      mapsHref:
        "https://www.google.com/maps/search/?api=1&query=Centro%20Mayor%20Torre%20Alfa%20Calzada%20Zavaleta%201108%20oficina%20301%20Santa%20Cruz%20Buenavista%20Puebla",
    },
    {
      city: "San Miguel de Allende",
      address:
        "Zacateros 73, Planta Alta, Centro, San Miguel de Allende, Guanajuato, C.P. 37700.",
      mapsHref:
        "https://www.google.com/maps/search/?api=1&query=Zacateros%2073%20Centro%20San%20Miguel%20de%20Allende%20Guanajuato%2037700",
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
