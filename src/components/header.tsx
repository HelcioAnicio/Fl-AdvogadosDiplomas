import { useState, useEffect } from "react";
import logo from "/logo.png";
import { IoMdClose } from "react-icons/io";
import { VscMenu } from "react-icons/vsc";
import { FaArrowRight } from "react-icons/fa";

export const Header = () => {
  const [menuActived, setMenuActived] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const menuMobile = () => {
    setMenuActived(!menuActived);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 64) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed h-14 w-full ${scrolled ? "bg-gradient-to-r from-black to-[#CF9A2A]" : ""}`}
    >
      <div className="relative m-auto flex max-w-5xl items-center justify-between px-5 py-2">
        <figure>
          <img src={logo} alt="logo of company" className="w-24" />
        </figure>
        <button className="cursor-pointer" onClick={menuMobile}>
          {menuActived === false && (
            <VscMenu className="size-10 p-2 text-white lg:hidden" />
          )}
        </button>
        {menuActived === true && (
          <nav className="absolute top-0 right-0 z-50 w-full max-w-70 flex-col space-y-7 rounded-b-md bg-black px-3 py-10">
            <div className="flex justify-end">
              <button className="cursor-pointer" onClick={menuMobile}>
                <IoMdClose className="size-10 p-2 text-white lg:hidden" />
              </button>
            </div>
            <menu
              type="toolbar"
              className="flex flex-col justify-between gap-7 text-sm"
            >
              <li className="flex items-center">
                <a
                  href="#areasActivity"
                  className="px-5 py-2 transition-all duration-300 hover:text-[#CF9A2A] active:text-orange-200"
                  onClick={() => setMenuActived(!menuActived)}
                >
                  Area de atuação
                </a>
              </li>
              <li className="flex items-center">
                <a
                  href="#howWork"
                  className="px-5 py-2 transition-all duration-300 hover:text-[#CF9A2A] active:text-orange-200"
                  onClick={() => setMenuActived(!menuActived)}
                >
                  Como funciona?
                </a>
              </li>
              <li className="flex items-center">
                <a
                  href="#contact"
                  className="px-5 py-2 transition-all duration-300 hover:text-[#CF9A2A] active:text-orange-200"
                  onClick={() => setMenuActived(!menuActived)}
                >
                  Contato
                </a>
              </li>
              <li className="flex items-center">
                <a
                  href="#"
                  className="px-5 py-2 transition-all duration-300 hover:text-[#CF9A2A] active:text-orange-200"
                  onClick={() => setMenuActived(!menuActived)}
                >
                  Outro Site
                </a>
              </li>
              <li className="flex flex-wrap items-center gap-3 px-5 py-2 hover:text-[#CF9A2A]">
                <a href="https://api.whatsapp.com/send?phone=5531997948742">
                  <button className="flex cursor-pointer items-center gap-3 rounded-md bg-[#FFFFFF] px-5 py-2 text-[#B2821A] transition-all duration-300 hover:bg-[#CF9A2A] hover:text-white active:bg-orange-200">
                    Entre em contato <FaArrowRight />
                  </button>
                </a>
              </li>
            </menu>
          </nav>
        )}
        <nav className="hidden min-w-1/2 lg:block">
          <menu className="flex justify-between gap-4 text-sm">
            <li className="flex items-center">
              <a
                href="#areasActivity"
                className="px-5 py-2 transition-all duration-300 hover:text-[#CF9A2A] active:text-orange-200"
              >
                Area de atuação
              </a>
            </li>
            <li className="flex items-center">
              <a
                href="#howWork"
                className="px-5 py-2 transition-all duration-300 hover:text-[#CF9A2A] active:text-orange-200"
              >
                Como funciona?
              </a>
            </li>
            <li className="flex items-center">
              <a
                href="#contact"
                className="px-5 py-2 transition-all duration-300 hover:text-[#CF9A2A] active:text-orange-200"
              >
                Contato
              </a>
            </li>
            <li className="flex items-center">
              <a
                href="#"
                className="px-5 py-2 transition-all duration-300 hover:text-[#CF9A2A] active:text-orange-200"
              >
                Outro site
              </a>
            </li>
            <li className="flex items-center gap-3 px-5 py-2">
              <a href="https://api.whatsapp.com/send?phone=5531997948742">
                <button className="flex cursor-pointer items-center gap-3 rounded-md bg-[#FFFFFF] px-5 py-2 text-[#B2821A] transition-all duration-300 hover:bg-[#CF9A2A] hover:text-white active:bg-orange-200">
                  Entre em contato <FaArrowRight />
                </button>
              </a>
            </li>
          </menu>
        </nav>
      </div>
    </header>
  );
};
