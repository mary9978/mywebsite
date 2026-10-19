"use client";

import { useState, type FormEvent } from "react";
import { Arrow } from "@/components/icon";
import type { ContactFormText } from "@/lib/i18n/types";

interface ContactFormProps {
  readonly text: ContactFormText;
}

export function ContactForm({ text }: ContactFormProps) {
  const [isSent, setIsSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSent(true);
  }

  if (isSent) {
    return (
      <div
        className="grid min-h-96 place-items-center rounded-[2rem] bg-lime p-8 text-center text-on-accent"
        role="status"
        aria-live="polite"
      >
        <div>
          <span className="text-5xl" aria-hidden="true">
            ✓
          </span>
          <h2 className="mt-5 text-3xl font-black">{text.successTitle}</h2>
          <p className="mt-3 opacity-70">{text.successText}</p>
        </div>
      </div>
    );
  }

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="name" label={text.name} autoComplete="name" />
        <Field id="email" label={text.email} type="email" autoComplete="email" />
      </div>
      <Field id="subject" label={text.subject} />
      <div>
        <label className="mb-2 block text-sm font-black" htmlFor="message">
          {text.message}
        </label>
        <textarea
          className="field min-h-40 resize-y rounded-3xl py-4"
          id="message"
          name="message"
          placeholder={text.placeholder}
          required
        />
      </div>
      <button className="button-primary inline-flex w-full sm:w-auto" type="submit">
        {text.submit} <Arrow />
      </button>
    </form>
  );
}

interface FieldProps {
  readonly id: string;
  readonly label: string;
  readonly type?: "text" | "email";
  readonly autoComplete?: string;
}

function Field({ id, label, type = "text", autoComplete }: FieldProps) {
  return (
    <div>
      <label className="mb-2 block text-sm font-black" htmlFor={id}>
        {label}
      </label>
      <input
        className="field min-h-14 rounded-full"
        id={id}
        name={id}
        type={type}
        autoComplete={autoComplete}
        dir={type === "email" ? "ltr" : undefined}
        required
      />
    </div>
  );
}
