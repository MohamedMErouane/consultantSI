"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { profile } from "@/lib/data";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio contact from ${form.name || "a visitor"}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <form onSubmit={handleSubmit} className="glass rounded-2xl p-6 sm:p-8 space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-xs font-mono text-ink-muted mb-2">
            NAME
          </label>
          <input
            id="name"
            required
            value={form.name}
            onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
            className="w-full rounded-lg border border-border bg-bg-panel/60 px-3.5 py-2.5 text-sm text-ink outline-none focus:border-accent/60 transition-colors"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-xs font-mono text-ink-muted mb-2">
            EMAIL
          </label>
          <input
            id="email"
            type="email"
            required
            value={form.email}
            onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
            className="w-full rounded-lg border border-border bg-bg-panel/60 px-3.5 py-2.5 text-sm text-ink outline-none focus:border-accent/60 transition-colors"
            placeholder="you@company.com"
          />
        </div>
      </div>
      <div>
        <label htmlFor="message" className="block text-xs font-mono text-ink-muted mb-2">
          MESSAGE
        </label>
        <textarea
          id="message"
          required
          rows={5}
          value={form.message}
          onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
          className="w-full rounded-lg border border-border bg-bg-panel/60 px-3.5 py-2.5 text-sm text-ink outline-none focus:border-accent/60 transition-colors resize-none"
          placeholder="Tell me about the opportunity, or just say hi."
        />
      </div>
      <button
        type="submit"
        className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-medium text-white shadow-glow hover:bg-primary-dim transition-colors"
      >
        {sent ? <CheckCircle2 size={16} /> : <Send size={16} />}
        {sent ? "Opening your mail client…" : "Send message"}
      </button>
      <p className="text-xs text-ink-faint">
        Opens your email client with the message pre-filled — nothing is sent through a third-party server.
      </p>
    </form>
  );
}
