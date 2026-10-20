"use client";

import { useState } from "react";
import { Send, CheckCircle2, Loader2, AlertTriangle, Copy, Check } from "lucide-react";
import { profile } from "@/lib/data";

// Messages are delivered straight to my inbox by FormSubmit (formsubmit.co):
// the visitor never needs a mail client. If the service is unreachable, the form
// falls back to showing the address with a copy button.
const ENDPOINT = `https://formsubmit.co/ajax/${profile.email}`;

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [honey, setHoney] = useState(""); // spam trap, hidden from people
  const [status, setStatus] = useState<Status>("idle");
  const [copied, setCopied] = useState(false);

  const update = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (honey) return setStatus("sent");
    setStatus("sending");
    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          company: form.company || "—",
          message: form.message,
          _subject: `Portfolio: message from ${form.name}${form.company ? ` (${form.company})` : ""}`,
          _replyto: form.email,
          _template: "table",
          _captcha: "false",
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || data.success === false || data.success === "false") throw new Error(data.message || "send failed");
      setStatus("sent");
      setForm({ name: "", email: "", company: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard blocked: the address is still visible */
    }
  };

  const field =
    "w-full rounded-lg border border-border bg-bg-panel/60 px-3.5 py-2.5 text-sm text-ink outline-none focus:border-accent/60 transition-colors";
  const label = "block text-xs font-mono text-ink-muted mb-2";

  if (status === "sent") {
    return (
      <div className="glass rounded-2xl p-8 text-center" role="status">
        <CheckCircle2 size={36} className="mx-auto text-emerald-400" />
        <p className="mt-4 text-lg font-medium text-ink">Message sent, thank you!</p>
        <p className="mt-2 text-sm text-ink-muted">I usually reply within 24 hours, at the email address you gave.</p>
        <button type="button" onClick={() => setStatus("idle")} className="mt-6 text-sm text-accent hover:underline">
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="glass rounded-2xl p-6 sm:p-8 space-y-5" noValidate={false}>
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className={label}>NAME</label>
          <input id="name" name="name" required autoComplete="name" value={form.name} onChange={update("name")} className={field} placeholder="Your name" />
        </div>
        <div>
          <label htmlFor="email" className={label}>EMAIL</label>
          <input id="email" name="email" type="email" required autoComplete="email" value={form.email} onChange={update("email")} className={field} placeholder="you@company.com" />
        </div>
      </div>
      <div>
        <label htmlFor="company" className={label}>COMPANY <span className="text-ink-faint">(optional)</span></label>
        <input id="company" name="company" autoComplete="organization" value={form.company} onChange={update("company")} className={field} placeholder="Company or school" />
      </div>
      <div>
        <label htmlFor="message" className={label}>MESSAGE</label>
        <textarea id="message" name="message" required rows={5} value={form.message} onChange={update("message")} className={`${field} resize-none`} placeholder="Tell me about the opportunity, or just say hi." />
      </div>

      {/* Spam trap: invisible to people, bots fill it in. */}
      <input type="text" name="_honey" value={honey} onChange={(e) => setHoney(e.target.value)} tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-medium text-white shadow-glow hover:bg-primary-dim transition-colors disabled:opacity-70"
      >
        {status === "sending" ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
        {status === "sending" ? "Sending…" : "Send message"}
      </button>

      {status === "error" ? (
        <div className="rounded-lg border border-amber-400/40 bg-amber-400/10 p-4 text-sm text-ink" role="alert">
          <p className="flex items-center gap-2 font-medium"><AlertTriangle size={16} className="text-amber-400" /> The message couldn&apos;t be sent.</p>
          <p className="mt-1 text-ink-muted">Please email me directly instead:</p>
          <div className="mt-3 flex flex-wrap items-center gap-2">
            <a href={`mailto:${profile.email}`} className="font-mono text-accent hover:underline">{profile.email}</a>
            <button type="button" onClick={copyEmail} className="inline-flex items-center gap-1 rounded-md border border-border px-2 py-1 text-xs text-ink-muted hover:text-ink">
              {copied ? <Check size={13} /> : <Copy size={13} />} {copied ? "Copied" : "Copy"}
            </button>
          </div>
        </div>
      ) : (
        <p className="text-xs text-ink-muted">Your message goes straight to my inbox. Your email is only used to reply to you.</p>
      )}
    </form>
  );
}
