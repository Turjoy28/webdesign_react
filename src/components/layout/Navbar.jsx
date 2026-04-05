import { useState } from "react";
import Container from "./Container";
import { navLinks } from "../../data/navLinks";

const UtilityIcon = () => {
  return (
    <span className="grid grid-cols-2 gap-[3px]" aria-hidden="true">
      <span className="h-[3px] w-[3px] rounded-full bg-slate-900" />
      <span className="h-[3px] w-[3px] rounded-full bg-slate-900" />
      <span className="h-[3px] w-[3px] rounded-full bg-slate-900" />
      <span className="h-[3px] w-[3px] rounded-full bg-slate-900" />
    </span>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-[#F5F5F5]/95 backdrop-blur-lg">
      <Container className="!max-w-none !px-4 sm:!px-4 lg:!px-4">
        <div className="flex h-[82px] items-center justify-between gap-4 border-b border-slate-200/90">
          <a
            href="#home"
            className="ml-[305px] shrink-0 pl-4 sm:pl-6 lg:pl-8 xl:pl-10"
          >
            <img
              src="https://floka.casethemes.net/wp-content/themes/floka/assets/img/logo.png"
              alt="Floka"
              className="h-[24px] w-[89px]"
            />
          </a>

          <nav className="mx-auto hidden w-full max-w-[980px] items-stretch justify-between px-18 md:flex lg:max-w-[1120px] lg:px-24">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 text-[14px] font-medium tracking-[-0.02em] text-slate-700 transition hover:text-slate-950 lg:px-5 lg:text-[18px]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="mr-45 hidden items-center gap-2 pr-4 sm:pr-6 lg:pr-8 xl:pr-10 md:flex">
            <a
              href="mailto:info@floka.com"
              className="text-[17px] font-medium tracking-[-0.02em] text-slate-700 transition hover:text-slate-950 lg:text-[14px]"
            >
              info@floka.com
            </a>
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border-l border-slate-200/90 pl-6 transition hover:bg-black/5"
              aria-label="Open extra navigation options"
            >
              <UtilityIcon />
            </button>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            className="inline-flex items-center rounded-full border border-slate-300 px-4 py-2 text-sm text-slate-900 transition hover:bg-slate-100 md:hidden"
            aria-expanded={isOpen}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? "Close" : "Menu"}
          </button>
        </div>
      </Container>

      {isOpen && (
        <div className="border-b border-white/10 bg-[#070707] md:hidden">
          <Container className="!max-w-none !px-4 flex flex-col gap-4 py-5 text-white">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="text-sm text-white/78 transition hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <a
              href="mailto:info@floka.com"
              onClick={closeMenu}
              className="text-sm text-white/78 transition hover:text-white"
            >
              info@floka.com
            </a>
          </Container>
        </div>
      )}
    </header>
  );
};

export default Navbar;
