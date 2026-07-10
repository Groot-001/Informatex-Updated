import { ShieldCheck } from "lucide-react";

export default function OfficeCommitment() {
  return (
    <div
      className="
        border-t
        border-soft

        bg-background/60

        p-7
      "
    >
      <div className="flex items-start gap-4">
        {/* Icon */}

        <div
          className="
            flex
            h-14
            w-14
            shrink-0

            items-center
            justify-center

            rounded-2xl

            bg-secondary/10
          "
        >
          <ShieldCheck
            className="
              h-7
              w-7

              text-secondary
            "
            strokeWidth={2}
          />
        </div>

        {/* Content */}

        <div>
          <h3
            className="
              text-lg
              font-semibold

              text-brand
            "
          >
            Your Success Is Our Priority
          </h3>

          <p
            className="
              mt-2

              leading-7

              text-muted
            "
          >
            From the first conversation to long-term support, our team is
            committed to delivering secure, scalable, and reliable digital
            solutions tailored to your business.
          </p>
        </div>
      </div>
    </div>
  );
}
