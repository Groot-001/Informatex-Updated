import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";
import { NAV_ITEMS } from "./navbar.data";

export default function Header() {
  return (
    <header
      className="sticky
    top-0
    z-50
    border-b
    border-[#ECECF3]
    bg-white/80
    backdrop-blur-xl"
    >
      <div
        className="mx-auto flex h-20 items-center justify-between 
max-w-7xl
px-6
lg:px-8"
      >
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src="/logo.svg" alt="Informatex Tech" className="h-9 w-9" />

          <span className="text-3xl font-bold tracking-tight text-[#222]">
            Informatex Tech
          </span>
        </div>

        {/* Navigation */}
        <nav>
          <ul className="flex items-center gap-2">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <NavLink
                  to={item.href}
                  className={({ isActive }) =>
                    `
              rounded-xl
              px-4
              py-2.5
              text-[15px]
              font-medium
              transition-all
              duration-300
            ${
              isActive
                ? "bg-[#EEF2FF] text-[#4F46C8] shadow-sm"
                : "text-[#667085] hover:bg-[#F8F6FF] hover:text-[#4F46C8]"
            }
            `
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA */}
        <Button
          variant={"primary"}
          className="
          h-11 px-7
            transition-all
            duration-300
            hover:bg-[#4F40B8]
            hover:-translate-y-0.5
          "
        >
          Contact
        </Button>
      </div>
    </header>
  );
}
