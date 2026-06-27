import { useState } from "react";
import { profile } from "../data/profile";

type SubmissionStatus = "idle" | "submitting" | "success" | "error";

interface ContactFormFields {
  name: string;
  email: string;
  message: string;
}

/**
 * Encapsulates the Web3Forms submission flow. Web3Forms accepts a plain
 * POST of form data (or JSON) to their API with an access key — no custom
 * backend required. See https://docs.web3forms.com for the API contract.
 */
export function useContactForm() {
  const [status, setStatus] = useState<SubmissionStatus>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function submit(fields: ContactFormFields) {
    if (profile.contactFormAccessKey === "YOUR_WEB3FORMS_ACCESS_KEY_HERE") {
      setStatus("error");
      setErrorMessage(
        "Contact form isn't configured yet — add a Web3Forms access key in src/data/profile.ts."
      );
      return;
    }

    setStatus("submitting");
    setErrorMessage(null);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: profile.contactFormAccessKey,
          ...fields,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
      } else {
        setStatus("error");
        setErrorMessage(result.message ?? "Submission failed — please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMessage("Network error — please check your connection and try again.");
    }
  }

  function reset() {
    setStatus("idle");
    setErrorMessage(null);
  }

  return { status, errorMessage, submit, reset };
}
