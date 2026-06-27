import { useState, type FormEvent } from "react";
import { profile } from "../data/profile";
import { useContactForm } from "../hooks/useContactForm";
import { Button } from "../components/ui/Button";
import { SectionLabel } from "../components/ui/SectionLabel";
import { SocialLinks } from "../components/sections/SocialLinks";

export function Contact() {
  const { status, errorMessage, submit } = useContactForm();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    submit({ name, email, message });
  }

  const isSubmitting = status === "submitting";
  const isSuccess = status === "success";

  return (
    <div id="contact" className="px-6 lg:px-16 py-16 lg:py-20 max-w-3xl scroll-mt-8">
      <SectionLabel>§05 — Contact</SectionLabel>
      <h1 className="font-display font-black text-3xl lg:text-4xl mt-3 text-ink">
        Get in touch
      </h1>
      <p className="font-body text-sm text-ink/70 mt-3 max-w-xl">
        Open to internships, collaborations, and conversations on engineering
        or geopolitics. Reach out directly or use the form below.
      </p>

      <div className="grid sm:grid-cols-2 gap-3 mt-8 font-sans text-sm">
        <a href={`mailto:${profile.email}`} className="text-signal hover:text-flag transition-colors">
          {profile.email}
        </a>
        <a href={`tel:${profile.phone}`} className="text-signal hover:text-flag transition-colors">
          {profile.phone}
        </a>
      </div>

      <div className="mt-8">
        <SectionLabel>Profiles</SectionLabel>
        <div className="mt-4">
          <SocialLinks />
        </div>
      </div>

      {isSuccess ? (
        <div className="mt-10 p-6 border border-signal/30 bg-signal/5 rounded-sm">
          <p className="font-sans text-sm text-signal">
            Message sent. Thanks for reaching out — I'll reply soon.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="mt-10 space-y-5">
          <div>
            <label htmlFor="name" className="font-sans text-xs font-semibold uppercase tracking-[0.14em] text-brass">
              Name
            </label>
            <input
              id="name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full mt-2 px-3 py-2 border border-brass/30 rounded-sm bg-paper text-ink focus:border-signal outline-none font-body text-sm"
            />
          </div>

          <div>
            <label htmlFor="email" className="font-sans text-xs font-semibold uppercase tracking-[0.14em] text-brass">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mt-2 px-3 py-2 border border-brass/30 rounded-sm bg-paper text-ink focus:border-signal outline-none font-body text-sm"
            />
          </div>

          <div>
            <label htmlFor="message" className="font-sans text-xs font-semibold uppercase tracking-[0.14em] text-brass">
              Message
            </label>
            <textarea
              id="message"
              required
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full mt-2 px-3 py-2 border border-brass/30 rounded-sm bg-paper text-ink focus:border-signal outline-none font-body text-sm resize-none"
            />
          </div>

          {status === "error" && errorMessage && (
            <p className="font-sans text-xs text-flag">{errorMessage}</p>
          )}

          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Sending…" : "Send Message"}
          </Button>
        </form>
      )}
    </div>
  );
}
