import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { NAV_ITEMS } from "./navbar.data";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      className="
        sticky
        top-0
        z-50
        border-b
        border-white/10
        bg-[#093254]/95
        backdrop-blur-xl
        shadow-[0_8px_30px_rgba(9,50,84,0.12)]
      "
    >
      <div
        className="
          mx-auto
          flex
          h-20
          max-w-7xl
          items-center
          justify-between
          px-5
          sm:px-6
          lg:px-8
        "
      >
        <NavLink
          to="/"
          className="group flex items-center gap-3 transition-all duration-300"
        >
          <img
            src="/logo.svg"
            alt="Informatex Tech"
            className="
              h-11
              w-11
              transition-all
              duration-500
              group-hover:scale-105
              group-hover:rotate-3
            "
          />

          <div className="leading-none">
            <h1
              className="
                text-[1.5rem]
                font-extrabold
                tracking-[-0.04em]
                text-white
                transition-colors
                duration-300
              "
            >
              Informatex
            </h1>

            <p
              className="
                mt-1
                text-[11px]
                font-semibold
                uppercase
                tracking-[0.22em]
                text-blue-200
              "
            >
              TECHNOLOGY
            </p>
          </div>
        </NavLink>

        <nav className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <NavLink
                  to={item.href}
                  className={({ isActive }) =>
                    `
                      relative
                      py-2
                      text-[15px]
                      font-medium
                      transition-all
                      duration-300

                      after:absolute
                      after:left-1/2
                      after:bottom-0
                      after:h-[2px]
                      after:-translate-x-1/2
                      after:rounded-full
                      after:bg-[#2374B6]
                      after:transition-all
                      after:duration-300

                      ${
                        isActive
                          ? "text-white after:w-6"
                          : "text-blue-100 after:w-0 hover:text-white hover:after:w-6"
                      }

                      hover:-translate-y-[1px]
                    `
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden lg:block">
          <Link to="/contact">
            <Button
              className="
            rounded-xl
            bg-gradient-to-r
            from-[#2374B6]
            to-[#16598F]
            px-7
            py-6
            text-white
            transition-all
            duration-300
            
            hover:-translate-y-1
            hover:from-[#2B80C8]
            hover:to-[#16598F]
            hover:shadow-[0_15px_35px_rgba(35,116,182,.30)]
            "
            >
              Contact Us
            </Button>
          </Link>
        </div>

        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="
            rounded-lg
            p-2
            text-white
            transition
            hover:bg-white/10
            lg:hidden
          "
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <div
        className={`
          overflow-hidden
          transition-all
          duration-500

          ${isOpen ? "max-h-[500px] border-t border-white/10" : "max-h-0"}
        `}
      >
        <nav className="bg-[#093254] lg:hidden">
          <div className="flex flex-col gap-2 px-5 py-5">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `
                    rounded-xl
                    px-4
                    py-3
                    text-[15px]
                    font-medium
                    transition-all
                    duration-300

                    ${
                      isActive
                        ? "bg-[#2374B6] text-white"
                        : "text-blue-100 hover:bg-white/10 hover:text-white"
                    }
                  `
                }
              >
                {item.label}
              </NavLink>
            ))}

            <Link to="/contact">
              <Button
                className="
              mt-3
              rounded-xl
              bg-gradient-to-r
              from-[#2374B6]
              to-[#16598F]
              py-6
              text-white
              transition-all
              duration-300
              hover:shadow-lg
              "
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
