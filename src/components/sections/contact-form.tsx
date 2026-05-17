"use client";

import Link from "next/link";
import { useActionState } from "react";
import { submitContactForm } from "@/app/contacto/actions";

const initialState = {
  status: "idle" as const,
  message: "",
};

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(
    submitContactForm,
    initialState,
  );

  return (
    <form action={formAction} className="border border-neutral-200 bg-white p-6">
      <h2 className="text-xl font-semibold text-brand-blue">
        Enviar mensaje
      </h2>
      <p className="mt-2 text-sm leading-6 text-brand-gray">
        Déjanos un mensaje, y nos pondrémos en contacto contigo.
      </p>

      <div className="mt-6 grid gap-4">
        <label className="grid gap-2 text-sm font-semibold text-foreground">
          Nombre
          <input
            className="min-h-12 border border-neutral-200 px-4 text-base font-normal outline-none transition-colors focus:border-brand-blue"
            name="name"
            autoComplete="name"
            required
          />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-foreground">
          Correo
          <input
            className="min-h-12 border border-neutral-200 px-4 text-base font-normal outline-none transition-colors focus:border-brand-blue"
            name="email"
            type="email"
            autoComplete="email"
            required
          />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-foreground">
          Teléfono
          <input
            className="min-h-12 border border-neutral-200 px-4 text-base font-normal outline-none transition-colors focus:border-brand-blue"
            name="phone"
            type="tel"
            autoComplete="tel"
          />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-foreground">
          Mensaje
          <textarea
            className="min-h-36 resize-y border border-neutral-200 px-4 py-3 text-base font-normal outline-none transition-colors focus:border-brand-blue"
            name="message"
            required
          />
        </label>
      </div>

      <label className="mt-5 flex items-start gap-3 text-sm leading-6 text-brand-gray">
        <input
          className="mt-1 h-4 w-4 shrink-0 accent-brand-blue"
          name="privacyAccepted"
          required
          type="checkbox"
        />
        <span>
          Acepto el{" "}
          <Link
            className="font-semibold text-brand-blue hover:underline"
            href="/politica-de-privacidad"
          >
            aviso de privacidad
          </Link>
          .
        </span>
      </label>

      <button
        className="mt-6 inline-flex min-h-12 w-full items-center justify-center border border-brand-blue bg-brand-blue px-5 py-3 text-sm font-semibold !text-white transition-colors hover:bg-[#142635] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
        disabled={isPending}
        type="submit"
      >
        {isPending ? "Enviando..." : "Enviar mensaje"}
      </button>

      {state.message ? (
        <p
          aria-live="polite"
          className={`mt-4 border px-4 py-3 text-sm leading-6 ${
            state.status === "success"
              ? "border-brand-blue bg-neutral-soft text-brand-blue"
              : "border-red-200 bg-red-50 text-red-800"
          }`}
          role="status"
        >
          {state.message}
        </p>
      ) : null}
    </form>
  );
}
