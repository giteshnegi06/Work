import React, { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const logo =
    "https://res.cloudinary.com/dbtlo70e5/image/upload/v1772374686/logo_d2is9d.png";

  const navItems = [
    { href: "/", name: "Home" },
    { href: "/portfolio", name: "Portfolio" },
    { href: "/aboutUs", name: "About Us" },
  ];

  return (
    <div className="flex justify-center">
      <header className="absolute top-5 2xl:top-10 z-50">
        <nav className="h-12 md:h-15 p-1 md:mx-2 lg:mx-8 xl:mx-12 2xl:mx-40 rounded-4xl bg-black/20 shadow-2xl shadow-black text-[18px] font-serif w-screen md:w-188 lg:w-240 xl:w-300">

          {/* Desktop Menu */}
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

            {/* Logo */}
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

            <li>
              <ScrollLink
                to="section1"
                smooth={true}
                duration={500}
                className="pb-3 px-2 text-white font-cormorant md:text-lg lg:text-xl cursor-pointer transition hover:border-b-4 border-red-500"
              >
                Contact
              </ScrollLink>
            </li>
          </ul>

          {/* Mobile Header */}
          <div className="md:hidden flex justify-between items-center mx-3 h-10">

            <img
              src={logo}
              alt="Mahak Studio Logo"
              className="h-16 w-auto"
              loading="eager"
              fetchpriority="high"
            />

            <button
              className="text-white text-[26px]"
              onClick={toggleMenu}
            >
              {isOpen ? <RxCross2 /> : <CiMenuBurger />}
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            className={`md:hidden overflow-hidden transition-all duration-300 ${
              isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <ul className="flex flex-col text-white text-right gap-2 px-4 pb-3 mt-2">

              {navItems.map((item, i) => (
                <li key={i}>
                  <RouterLink to={item.href} onClick={toggleMenu}>
                    {item.name}
                  </RouterLink>
                </li>
              ))}

              <li>
                <ScrollLink
                  to="section1"
                  smooth={true}
                  duration={500}
                  onClick={toggleMenu}
                >
                  Contact
                </ScrollLink>
              </li>

            </ul>
          </div>

        </nav>
      </header>
    </div>
  );
}