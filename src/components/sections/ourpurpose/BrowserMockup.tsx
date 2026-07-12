import {
  Bell,
  LayoutDashboard,
  Package,
  Search,
  Settings,
  Users,
} from "lucide-react";
import type { ReactNode } from "react";

import { Button } from "@/components/ui/button";

interface BrowserMockupProps {
  children: ReactNode;
  url?: string;
}

const sidebarItems = [
  {
    icon: LayoutDashboard,
    active: true,
  },
  {
    icon: Package,
  },
  {
    icon: Users,
  },
  {
    icon: Settings,
  },
];

export default function BrowserMockup({
  children,
  url = "erp.informatex.tech",
}: BrowserMockupProps) {
  return (
    <div
      className="
        overflow-hidden

        rounded-3xl

        border
        border-[#DCEAF6]

        bg-white

        shadow-[0_18px_55px_rgba(17,51,88,.08)]
      "
    >
      {/* ================================================= */}
      {/* Browser Header */}
      {/* ================================================= */}

      <div
        className="
          flex
          items-center
          gap-5

          border-b
          border-[#EDF2F7]

          bg-white

          px-4
          py-3
        "
      >
        {/* Browser Dots */}

        <div className="flex shrink-0 items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
        </div>

        {/* Search */}

        <div
          className="
            flex-1

            flex
            items-center
            justify-between
            gap-2

            rounded-full

            border
            border-[#E6EDF5]

            bg-[#F8FBFE]

            px-3
            py-1.5
          "
        >
          <div className="flex items-center gap-2">
            <Search className="h-3.5 w-3.5 text-slate-400" />

            <span className="text-xs text-slate-500">
              Search or enter URL...
            </span>
          </div>

          <span
            className="
              rounded-md

              bg-white

              px-1.5
              py-0.5

              text-[10px]
              font-medium

              text-slate-400
            "
          >
            ⌘K
          </span>
        </div>

        {/* Actions */}

        <div className="flex shrink-0 items-center gap-2">
          <button
            className="
              rounded-full

              bg-[#F8FBFE]

              p-1.5

              transition-colors

              hover:bg-[#EDF5FC]
            "
          >
            <Bell className="h-4 w-4 text-slate-500" />
          </button>

          <div
            className="
              flex
              h-8
              w-8

              items-center
              justify-center

              rounded-full

              bg-[#113358]

              text-[11px]
              font-semibold
              text-white
            "
          >
            IT
          </div>
        </div>
      </div>

      {/* ================================================= */}
      {/* Application */}
      {/* ================================================= */}

      <div
        className="
          grid

          min-h-[420px]
          lg:min-h-[460px]

          grid-cols-[56px_1fr]
          lg:grid-cols-[60px_1fr]
        "
      >
        {/* Sidebar */}

        <aside
          className="
            border-r
            border-[#EDF2F7]

            bg-white

            px-2
            py-3
          "
        >
          <nav className="flex flex-col items-center gap-2">
            {sidebarItems.map((item, index) => {
              const Icon = item.icon;

              return (
                <button
                  key={index}
                  className={`
                    relative

                    flex
                    h-9
                    w-9

                    lg:h-10
                    lg:w-10

                    items-center
                    justify-center

                    rounded-xl

                    transition-all
                    duration-300

                    ${
                      item.active
                        ? "bg-[#EDF5FC] text-[#2374B6] shadow-sm"
                        : "text-slate-400 hover:bg-[#F8FBFE] hover:text-[#2374B6]"
                    }
                  `}
                >
                  {item.active && (
                    <span
                      className="
                        absolute

                        left-0
                        top-1/2

                        h-5
                        w-1

                        -translate-y-1/2

                        rounded-r-full

                        bg-[#2374B6]
                      "
                    />
                  )}

                  <Icon className="h-4 w-4 lg:h-[18px] lg:w-[18px]" />
                </button>
              );
            })}
          </nav>
        </aside>

        {/* ================================================= */}
        {/* Dashboard */}
        {/* ================================================= */}

        <main
          className="
            bg-[linear-gradient(180deg,#FAFCFE_0%,#F7FAFD_100%)]

            p-4
            lg:p-5
          "
        >
          {/* App Toolbar */}

          <div
            className="
              mb-4

              flex
              items-center
              justify-between

              rounded-xl

              border
              border-[#EDF2F7]

              bg-white

              px-4
              py-3
            "
          >
            <div>
              <p className="text-[11px] text-slate-500">Welcome back</p>

              <h3
                className="
                  text-sm
                  font-semibold

                  text-[#113358]
                "
              >
                Informatex ERP
              </h3>
            </div>

            <Button
              size="sm"
              className="
                h-8

                rounded-full

                px-4

                text-xs
              "
            >
              New Report
            </Button>
          </div>

          {/* Dashboard Content */}

          {children}
        </main>
      </div>
    </div>
  );
}
