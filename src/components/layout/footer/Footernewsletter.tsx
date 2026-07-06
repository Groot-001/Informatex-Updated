import React, { useState, FormEvent } from "react";
import { Send } from "lucide-react";

interface FooterNewsletterProps {
  title?: string;
  description?: string;
  onSubscribe?: (email: string) => void;
}

export default function FooterNewsletter({
  title = "Subscribe to our newsletter",
  description = "Stay updated with our latest news and insights.",
  onSubscribe,
}: FooterNewsletterProps) {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email) return;
    onSubscribe?.(email);
    setEmail("");
  };

  return (
    <div>
      <h3 className="text-sm font-semibold text-slate-900">{title}</h3>
      <p className="mt-5 text-sm leading-relaxed text-slate-500">
        {description}
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-4 flex overflow-hidden rounded-lg border border-slate-200 bg-white"
      >
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          aria-label="Email address"
          className="w-full min-w-0 bg-transparent px-4 py-2.5 text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none"
        />
        <button
          type="submit"
          aria-label="Subscribe"
          className="flex shrink-0 items-center justify-center bg-indigo-700 px-4 text-white transition-colors hover:bg-indigo-800"
        >
          <Send className="h-4 w-4" strokeWidth={2} />
        </button>
      </form>
    </div>
  );
}
