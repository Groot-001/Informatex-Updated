import { CheckCircle2, CreditCard, FileText, UserPlus } from "lucide-react";

const activities = [
  {
    icon: UserPlus,
    title: "New customer onboarded",
    time: "2 min ago",
  },
  {
    icon: CreditCard,
    title: "Payment received",
    time: "15 min ago",
  },
  {
    icon: FileText,
    title: "Invoice generated",
    time: "32 min ago",
  },
  {
    icon: CheckCircle2,
    title: "Order completed",
    time: "1 hour ago",
  },
];

export default function ActivityPanel() {
  return (
    <div
      className="
        h-full

        rounded-2xl

        border
        border-[#E7EEF6]

        bg-white

        p-4
      "
    >
      {/* Header */}

      <div className="flex items-start justify-between">
        <div>
          <p
            className="
              text-[11px]
              font-medium

              uppercase
              tracking-wide

              text-slate-500
            "
          >
            Recent Activity
          </p>

          <h3
            className="
              mt-1

              text-lg
              font-semibold

              tracking-tight

              text-[#113358]
            "
          >
            Live Updates
          </h3>
        </div>

        <div className="flex items-center gap-2">
          <span
            className="
              h-2
              w-2

              rounded-full

              bg-emerald-500

              animate-pulse
            "
          />

          <span className="text-[11px] font-medium text-emerald-600">Live</span>
        </div>
      </div>

      {/* Activity */}

      <div className="mt-5 space-y-3.5">
        {activities.map((activity, index) => {
          const Icon = activity.icon;

          return (
            <div
              key={activity.title}
              className={`
                flex
                items-start
                gap-3

                ${
                  index !== activities.length - 1
                    ? "border-b border-[#F1F5F9] pb-3.5"
                    : ""
                }
              `}
            >
              {/* Icon */}

              <div
                className="
                  flex
                  h-9
                  w-9

                  shrink-0

                  items-center
                  justify-center

                  rounded-lg

                  bg-[#EDF5FC]
                "
              >
                <Icon
                  className="
                    h-4
                    w-4

                    text-[#2374B6]
                  "
                />
              </div>

              {/* Content */}

              <div className="min-w-0 flex-1">
                <p
                  className="
                    truncate

                    text-[13px]
                    font-medium

                    text-[#113358]
                  "
                >
                  {activity.title}
                </p>

                <p
                  className="
                    mt-0.5

                    text-[11px]

                    text-slate-500
                  "
                >
                  {activity.time}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
