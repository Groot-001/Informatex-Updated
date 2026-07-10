import { ArrowUpRight, MapPin } from "lucide-react";

import type { Office } from "./types";

interface OfficeMarkerProps {
  office: Office;
}

export default function OfficeMarker({ office }: OfficeMarkerProps) {
  return (
    <div
      className="absolute"
      style={{
        left: office.x,
        top: office.y,
      }}
    >
      {/* Pin */}

      <div
        className="
          absolute
          -top-7
          left-6
          z-20
        "
      >
        <MapPin
          className="
            h-9
            w-9

            fill-secondary
            text-secondary

            drop-shadow-lg
          "
          strokeWidth={2}
        />
      </div>

      {/* Card */}

      <a
        href={office.mapUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="
          group
          block

          w-64

          rounded-2xl

          border
          border-soft

          bg-surface/95

          p-5

          shadow-brand

          backdrop-blur

          transition-all
          duration-300

          hover:-translate-y-1
          hover:shadow-brand-lg
        "
      >
        {/* Office */}

        <h3
          className="
            text-lg
            font-semibold

            text-brand
          "
        >
          {office.title}
        </h3>

        {/* Type */}

        <p
          className="
            mt-1

            text-sm

            font-medium

            text-secondary
          "
        >
          {office.officeType}
        </p>

        {/* Address */}

        <p
          className="
            mt-3

            text-sm
            leading-6

            text-muted
          "
        >
          {office.address}
          <br />
          {office.city}
        </p>

        {/* Link */}

        <div
          className="
            mt-5

            inline-flex
            items-center
            gap-2

            text-sm
            font-medium

            text-secondary
          "
        >
          Open in Google Maps
          <ArrowUpRight
            className="
              h-4
              w-4

              transition-transform
              duration-300

              group-hover:translate-x-1
              group-hover:-translate-y-1
            "
          />
        </div>
      </a>
    </div>
  );
}
