import { Button } from "@/components/ui/button";

const navLinks = ["Home", "Services", "Products", "About Us"];

export default function Header() {
  return (
    <header className="w-full bg-white">
      <div className="mx-auto flex h-20 items-center justify-between px-8">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src="/logo.svg" alt="Informatex Tech" className="h-9 w-9" />

          <span className="text-[28px] font-bold tracking-tight text-[#222]">
            Informatex Tech
          </span>
        </div>

        {/* Navigation */}
        <nav>
          <ul className="flex items-center gap-10">
            {navLinks.map((item, index) => (
              <li key={item}>
                <a
                  href="#"
                  className={`text-[17px] transition-colors duration-300 ${
                    index === 0
                      ? "font-semibold text-black"
                      : "font-medium text-[#6B7280] hover:text-[#5C4BC7]"
                  }`}
                >
                  {item}
                </a>
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
            hover:shadow-lg
          "
        >
          Contact
        </Button>
      </div>
    </header>
  );
}
