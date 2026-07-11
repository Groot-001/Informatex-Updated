import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { NAV_ITEMS } from "./navbar.data";
import image from "@/assets/Informatex-tech-logo-01.svg";
import { useScrollState } from "@/components/useScrollState";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const isScrolled = useScrollState(80);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header
      className={`
        fixed
        inset-x-0
        top-0
        z-50

        border-b

        transition-all
        duration-300
        ease-[cubic-bezier(.22,1,.36,1)]

        ${
          isScrolled
            ? `
              border-slate-200/70
              bg-[rgba(245,249,252,0.88)]
              backdrop-blur-2xl
              shadow-[0_10px_35px_rgba(15,23,42,.08)]
            `
            : `
              border-white/5
              bg-[linear-gradient(180deg,#14446D_0%,#093254_100%)]
              backdrop-blur-xl
              shadow-[0_18px_60px_rgba(9,50,84,.18)]
            `
        }
      `}
    >
      {/* Bottom Divider */}

      <div
        className={`
          pointer-events-none
          absolute
          bottom-0
          left-1/2
          h-px
          w-[90%]
          -translate-x-1/2
          bg-gradient-to-r
          from-transparent

          ${isScrolled ? "via-slate-300/80" : "via-white/20"}

          to-transparent
        `}
      />

      <div
        className="
          mx-auto
          flex
          h-24
          w-full
          max-w-[1440px]
          items-center
          justify-between

          px-6
          lg:px-10
          xl:px-12
        "
      >
        {/* ------------------------------------------------ */}
        {/* Logo */}
        {/* ------------------------------------------------ */}

        <NavLink to="/" className="group flex items-center gap-4">
          <img
            src={image}
            alt="Informatex Technology"
            className="
              h-14
              w-14
              object-contain

              transition-all
              duration-300

              group-hover:scale-105
            "
          />

          <div className="leading-none">
            <h1
              className={`
                text-[30px]
                font-bold
                tracking-tight

                transition-colors
                duration-300

                ${isScrolled ? "text-slate-900" : "text-white"}
              `}
            >
              Informatex
            </h1>

            <p
              className={`
                mt-1

                text-[11px]
                uppercase
                tracking-[0.32em]

                transition-colors
                duration-300

                ${isScrolled ? "text-slate-500" : "text-blue-200"}
              `}
            >
              TECHNOLOGY
            </p>
          </div>
        </NavLink>

        {/* ------------------------------------------------ */}
        {/* Desktop Navigation */}
        {/* ------------------------------------------------ */}

        <nav className="hidden lg:block">
          <ul className="flex items-center gap-4">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <NavLink to={item.href}>
                  {({ isActive }) => (
                    <div className="relative">
                      {isActive && (
                        <motion.div
                          layoutId="nav-indicator"
                          transition={{
                            type: "spring",
                            stiffness: 450,
                            damping: 34,
                          }}
                          className={`
                            absolute
                            inset-0
                            rounded-full

                            transition-all
                            duration-300

                            ${
                              isScrolled
                                ? `
                                  bg-slate-900/5
                                  ring-1
                                  ring-slate-300
                                `
                                : `
                                  bg-white/[0.08]
                                  ring-1
                                  ring-white/10
                                `
                            }
                          `}
                        />
                      )}

                      <span
                        className={`
                          relative
                          z-10
                          block

                          rounded-full

                          px-5
                          py-2.5

                          text-[15px]
                          font-medium

                          transition-colors
                          duration-300

                          ${
                            isActive
                              ? isScrolled
                                ? "text-slate-900"
                                : "text-white"
                              : isScrolled
                                ? "text-slate-600 hover:text-slate-900"
                                : "text-blue-100 hover:text-white"
                          }
                        `}
                      >
                        {item.label}
                      </span>
                    </div>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* ------------------------------------------------ */}
        {/* CTA */}
        {/* ------------------------------------------------ */}

        <div className="hidden lg:block">
          <Link to="/contact">
            <Button
              className="
                h-12
                rounded-full

                bg-gradient-to-r
                from-[#2E84D1]
                to-[#1D6FB7]

                px-8

                font-semibold
                text-white

                transition-all
                duration-300

                hover:brightness-110
                hover:shadow-[0_18px_40px_rgba(46,132,209,.28)]

                active:scale-[0.98]
              "
            >
              Contact Us
            </Button>
          </Link>
        </div>

        {/* ------------------------------------------------ */}
        {/* Mobile Toggle */}
        {/* ------------------------------------------------ */}

        <button
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle Navigation"
          aria-expanded={isOpen}
          className={`
            rounded-xl
            p-2.5

            transition-colors
            duration-300

            ${
              isScrolled
                ? "text-slate-900 hover:bg-slate-200/70"
                : "text-white hover:bg-white/10"
            }

            lg:hidden
          `}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      {/* ------------------------------------------------ */}
      {/* Mobile Navigation */}
      {/* ------------------------------------------------ */}

      <motion.div
        initial={false}
        animate={{
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{
          duration: 0.28,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="overflow-hidden lg:hidden"
      >
        <nav
          className={`
            border-t
            transition-all
            duration-300

            ${
              isScrolled
                ? `
                  border-slate-200/70
                  bg-[rgba(245,249,252,0.96)]
                  backdrop-blur-2xl
                `
                : `
                  border-white/10
                  bg-[linear-gradient(180deg,#14446D_0%,#093254_100%)]
                  backdrop-blur-xl
                `
            }
          `}
        >
          <div className="flex flex-col gap-2 px-6 py-6">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                onClick={() => setIsOpen(false)}
              >
                {({ isActive }) => (
                  <div className="relative">
                    {isActive && (
                      <motion.div
                        layoutId="nav-indicator-mobile"
                        transition={{
                          type: "spring",
                          stiffness: 450,
                          damping: 34,
                        }}
                        className={`
                          absolute
                          inset-0
                          rounded-xl

                          ${
                            isScrolled
                              ? `
                                bg-slate-900/5
                                ring-1
                                ring-slate-300
                              `
                              : `
                                bg-white/[0.08]
                                ring-1
                                ring-white/10
                              `
                          }
                        `}
                      />
                    )}

                    <span
                      className={`
                        relative
                        z-10
                        block

                        rounded-xl

                        px-4
                        py-3

                        text-[15px]
                        font-medium

                        transition-colors
                        duration-300

                        ${
                          isActive
                            ? isScrolled
                              ? "text-slate-900"
                              : "text-white"
                            : isScrolled
                              ? "text-slate-600 hover:text-slate-900"
                              : "text-blue-100 hover:text-white"
                        }
                      `}
                    >
                      {item.label}
                    </span>
                  </div>
                )}
              </NavLink>
            ))}

            <Link to="/contact" onClick={() => setIsOpen(false)}>
              <Button
                className="
                  mt-4
                  h-12
                  w-full
                  rounded-full

                  bg-gradient-to-r
                  from-[#2E84D1]
                  to-[#1D6FB7]

                  font-semibold
                  text-white

                  transition-all
                  duration-300

                  hover:brightness-110
                  hover:shadow-[0_18px_40px_rgba(46,132,209,.28)]

                  active:scale-[0.98]
                "
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </nav>
      </motion.div>
    </header>
  );
}
