import React, { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";
import { Link as RouterLink } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const logo =
    "https://res.cloudinary.com/dbtlo70e5/image/upload/v1772374686/logo_d2is9d.png";

  const navItems = [
    { href: "/", name: "Home" },
    { href: "/portfolio", name: "Portfolio" },
    { href: "/aboutUs", name: "About Us" },
    { href: "/contact", name: "Contact" },
  ];

  return (
    <div className="flex justify-center">
      <header className="absolute top-5 2xl:top-10 z-50">
        <nav className="h-auto md:h-15 p-1 md:mx-2 lg:mx-8 xl:mx-12 2xl:mx-40 rounded-4xl bg-black/20 shadow-2xl shadow-black text-[18px] font-serif w-screen md:w-188 lg:w-240 xl:w-300 ">

          {/* Desktop Menu — unchanged */}
          <ul className="hidden md:flex justify-around items-center h-13 md:text-xl">
            {navItems.slice(0, 2).map((item, i) => (
              <li key={i}>
                <RouterLink
                  to={item.href}
                  className="pb-3 px-2 text-white font-cormorant md:text-lg lg:text-xl transition hover:border-b-4 border-red-500"
                >
                  {item.name}
                </RouterLink>
              </li>
            ))}
            <li>
              <RouterLink to="/">
                <img
                  src={logo}
                  alt="Mahak Studio Logo"
                  className="h-38 w-auto"
                  loading="eager"
                  fetchpriority="high"
                  decoding="async"
                />
              </RouterLink>
            </li>
            {navItems.slice(2).map((item, i) => (
              <li key={i}>
                <RouterLink
                  to={item.href}
                  className="pb-3 px-2 text-white font-cormorant md:text-lg lg:text-xl transition hover:border-b-4 border-red-500"
                >
                  {item.name}
                </RouterLink>
              </li>
            ))}
          </ul>

          {/* ── MOBILE ── */}

          {/* Mobile Header Row */}
          <div className="md:hidden flex justify-between items-center px-4 py-2 h-12">
            <RouterLink to="/" onClick={() => setIsOpen(false)}>
              <img
                src={logo}
                alt="Mahak Studio Logo"
                className="h-12 w-auto"
                loading="eager"
                fetchpriority="high"
              />
            </RouterLink>

            <button
              className="text-white text-2xl p-1 rounded-full transition-transform duration-300 active:scale-90"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <span
                className={`block transition-all duration-300 ${
                  isOpen ? "rotate-90 scale-110" : "rotate-0 scale-100"
                }`}
              >
                {isOpen ? <RxCross2 /> : <CiMenuBurger />}
              </span>
            </button>
          </div>

          {/* Mobile Dropdown Menu */}
          <div
            className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out backdrop-blur-xs ${
              isOpen ? "max-h-72 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            {/* Thin top divider */}
            <div className="mx-4 border-t border-white/20" />

            <ul className="flex flex-col items-center text-white px-4 pt-2 pb-4 gap-1">
              {navItems.map((item, i) => {
                const isActive = location.pathname === item.href;
                return (
                  <li key={i}>
                    <RouterLink
                      to={item.href}
                      onClick={toggleMenu}
                      className={`flex items-center gap-3 py-2.5 px-3 rounded-lg text-xl font-semibold font-cormorant tracking-wide
                                  transition-all duration-200
                                  ${
                                    isActive
                                      ? "text-red-600 "
                                      : "text-white"
                                  }`}
                    >
                      <span>{item.name}</span>
                    </RouterLink>
                    {i < navItems.length - 1 && (
                      <div className="border-t border-white/10 mx-2" />
                    )}
                  </li>
                );
              })}
            </ul>
          </div>

        </nav>
      </header>
    </div>
  );
}