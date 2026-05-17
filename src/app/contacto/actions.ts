"use server";

import { sendContactEmails } from "@/lib/email/contact";

type ContactFormState = {
  status: "idle" | "success" | "error";
  message: string;
};

function normalize(value: FormDataEntryValue | null) {
  return typeof value === "string" ? value.trim() : "";
}

export async function submitContactForm(
  previousState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  void previousState;

  const name = normalize(formData.get("name"));
  const email = normalize(formData.get("email"));
  const phone = normalize(formData.get("phone"));
  const message = normalize(formData.get("message"));
  const privacyAccepted = formData.get("privacyAccepted") === "on";

  if (!name || !email || !message) {
    return {
      status: "error",
      message: "Completa nombre, correo y mensaje para enviar tu solicitud.",
    };
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return {
      status: "error",
      message: "Ingresa un correo electrónico válido.",
    };
  }

  if (!privacyAccepted) {
    return {
      status: "error",
      message: "Acepta el aviso de privacidad para enviar tu solicitud.",
    };
  }

  try {
    await sendContactEmails({ name, email, phone, message });
    return {
      status: "success",
      message:
        "Recibimos tu mensaje. También enviamos una confirmación a tu correo.",
    };
  } catch (error) {
    console.error("Contact form email failed", error);

    return {
      status: "error",
      message:
        "No pudimos enviar el correo en este momento. Intenta por WhatsApp o correo directo.",
    };
  }
}
