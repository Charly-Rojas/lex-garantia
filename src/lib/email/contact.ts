import nodemailer from "nodemailer";
import { siteConfig } from "@/config/site";

export type ContactEmailInput = {
  name: string;
  email: string;
  phone?: string;
  message: string;
};

function requiredEnv(name: string) {
  const value = process.env[name];

  if (!value) {
    throw new Error(`Missing ${name}`);
  }

  return value;
}

function getTransport() {
  const port = Number(process.env.SMTP_PORT ?? "587");

  if (!Number.isInteger(port)) {
    throw new Error("Invalid SMTP_PORT");
  }

  return nodemailer.createTransport({
    host: requiredEnv("SMTP_HOST"),
    port,
    secure: process.env.SMTP_SECURE === "true" || port === 465,
    auth: {
      user: requiredEnv("SMTP_USER"),
      pass: requiredEnv("SMTP_PASSWORD"),
    },
  });
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function sanitizeHeader(value: string) {
  return value.replace(/[\r\n]/g, " ").trim();
}

export async function sendContactEmails(input: ContactEmailInput) {
  const from = process.env.CONTACT_EMAIL_FROM ?? siteConfig.contact.email;
  const to = process.env.CONTACT_EMAIL_TO ?? siteConfig.contact.email;
  const transport = getTransport();
  const safeSubjectName = sanitizeHeader(input.name);
  const safeName = escapeHtml(input.name);
  const safeEmail = escapeHtml(input.email);
  const safePhone = escapeHtml(input.phone ?? "No proporcionado");
  const safeMessage = escapeHtml(input.message).replaceAll("\n", "<br />");

  await transport.sendMail({
    from,
    to,
    replyTo: input.email,
    subject: `Nuevo contacto desde lexgarantia.com: ${safeSubjectName}`,
    text: [
      `Nombre: ${input.name}`,
      `Correo: ${input.email}`,
      `Telefono: ${input.phone || "No proporcionado"}`,
      "",
      input.message,
    ].join("\n"),
    html: `
      <h1>Nuevo contacto desde lexgarantia.com</h1>
      <p><strong>Nombre:</strong> ${safeName}</p>
      <p><strong>Correo:</strong> ${safeEmail}</p>
      <p><strong>Telefono:</strong> ${safePhone}</p>
      <p><strong>Mensaje:</strong></p>
      <p>${safeMessage}</p>
    `,
  });

  await transport.sendMail({
    from,
    to: input.email,
    replyTo: to,
    subject: "Recibimos tu mensaje | Lex Garantía",
    text: [
      `Hola ${input.name},`,
      "",
      "Recibimos tu mensaje y el equipo de Lex Garantía dará seguimiento a tu solicitud.",
      "",
      "Este correo confirma la recepción de tu contacto.",
      "",
      "Lex Garantía",
    ].join("\n"),
    html: `
      <p>Hola ${safeName},</p>
      <p>Recibimos tu mensaje y el equipo de Lex Garantía dará seguimiento a tu solicitud.</p>
      <p>Este correo confirma la recepción de tu contacto.</p>
      <p>Lex Garantía</p>
    `,
  });
}
