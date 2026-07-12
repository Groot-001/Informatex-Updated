import React, { FormEvent, useState } from "react";
import { ArrowRight, Mail } from "lucide-react";

interface FooterNewsletterProps {
  title?: string;
  description?: string;
  onSubscribe?: (email: string) => void;
}

export default function FooterNewsletter({
  title = "Stay Updated",
  description = "Receive product updates, technology insights, and enterprise software trends directly in your inbox.",
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

      <div className="flex items-center gap-3">
        <div
          className="
            flex
            h-11
            w-11

            items-center
            justify-center

            rounded-xl

            border
            border-[#DCEAF6]

            bg-[#EDF5FC]
          "
        >
          <Mail className="h-5 w-5 text-[#2374B6]" />
        </div>

        <div>
          <h3
            className="
              text-xl
              font-semibold

              text-[#113358]
            "
          >
            {title}
          </h3>

          <p
            className="
              mt-1

              text-sm

              text-slate-600
            "
          >
            {description}
          </p>
        </div>
      </div>

      {/* Form */}

      <form onSubmit={handleSubmit} className="mt-8">
        <div
          className="
            flex

            overflow-hidden

            rounded-full

            border
            border-[#DCEAF6]

            bg-white

            shadow-sm

            transition-all
            duration-300

            focus-within:border-[#2374B6]
            focus-within:shadow-[0_0_0_4px_rgba(35,116,182,.08)]
          "
        >
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="
              w-full

              bg-transparent

              px-6
              py-4

              text-sm

              text-[#113358]

              placeholder:text-slate-400

              outline-none
            "
          />

          <button
            type="submit"
            className="
              group

              flex
              items-center
              gap-2

              bg-[#2374B6]

              px-6

              font-medium

              text-white

              transition-all
              duration-300

              hover:bg-[#1C68A7]
            "
          >
            Subscribe
            <ArrowRight
              className="
                h-4
                w-4

                transition-transform

                group-hover:translate-x-1
              "
            />
          </button>
        </div>
      </form>

      {/* Bottom Note */}

      <p
        className="
          mt-4

          text-xs

          text-slate-500
        "
      >
        No spam. Unsubscribe anytime.
      </p>
    </div>
  );
}
