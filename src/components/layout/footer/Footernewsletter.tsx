import React, { FormEvent, useState } from "react";
import { Send } from "lucide-react";

interface FooterNewsletterProps {
  title?: string;
  description?: string;
  onSubscribe?: (email: string) => void;
}

export default function FooterNewsletter({
  title = "Subscribe to our newsletter",
  description = "Get product updates, technology insights, and company news delivered to your inbox.",
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
      {/* Heading */}

      <h3
        className="
          text-lg
          font-semibold
          text-[#0F2238]
        "
      >
        {title}
      </h3>

      {/* Description */}

      <p
        className="
          mt-5
          text-sm
          leading-7
          text-[#617186]
        "
      >
        {description}
      </p>

      {/* Form */}

      <form onSubmit={handleSubmit} className="mt-6">
        <div
          className="
            flex
            overflow-hidden
            rounded-xl
            border
            border-[#E6EDF5]
            bg-white

            transition-all
            duration-300

            focus-within:border-[#216FAE]
            focus-within:ring-4
            focus-within:ring-[#216FAE]/10
          "
        >
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            aria-label="Email address"
            className="
              w-full
              min-w-0
              bg-transparent
              px-4
              py-3

              text-sm
              text-[#0F2238]

              placeholder:text-[#94A3B8]

              focus:outline-none
            "
          />

          <button
            type="submit"
            aria-label="Subscribe"
            className="
              group
              flex
              h-12
              w-12
              shrink-0
              items-center
              justify-center

              bg-[#216FAE]
              text-white

              transition-all
              duration-300

              hover:bg-[#1B5F95]
            "
          >
            <Send
              className="
                h-4
                w-4
                transition-transform
                duration-300

                group-hover:translate-x-0.5
                group-hover:-translate-y-0.5
              "
              strokeWidth={2}
            />
          </button>
        </div>
      </form>
    </div>
  );
}
