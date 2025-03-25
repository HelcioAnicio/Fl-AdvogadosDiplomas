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
      setScrolled(window.scrollY > 64);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && menuActived) {
        setMenuActived(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [menuActived]);

  return (
    <header
      className={`fixed h-14 w-full ${scrolled ? "bg-gradient-to-r from-black to-[#CF9A2A]" : ""}`}
    >
      <div className="relative m-auto flex max-w-5xl items-center justify-between px-5 py-2">
        <figure>
          <img src={logo} alt="Logo da empresa" className="w-24" />
        </figure>
        <button
          className="cursor-pointer"
          onClick={menuMobile}
          aria-label="Abrir menu de navegação"
          aria-expanded={menuActived}
        >
          {!menuActived && (
            <VscMenu
              className="size-10 p-2 text-white lg:hidden"
              aria-hidden="true"
            />
          )}
        </button>
        {menuActived && (
          <nav
            className="absolute top-0 right-0 z-50 w-full max-w-70 flex-col space-y-7 rounded-b-md bg-black px-3 py-10"
            role="navigation"
          >
            <div className="flex justify-end">
              <button
                className="cursor-pointer"
                onClick={menuMobile}
                aria-label="Fechar menu de navegação"
              >
                <IoMdClose
                  className="size-10 p-2 text-white lg:hidden"
                  aria-hidden="true"
                />
              </button>
            </div>
            <menu className="flex flex-col justify-between gap-7 text-sm">
              <li>
                <a
                  href="#areasActivity"
                  className="px-5 py-2 transition-all duration-300 hover:text-[#CF9A2A] focus-visible:ring active:text-orange-200"
                  onClick={menuMobile}
                >
                  Área de atuação
                </a>
              </li>
              <li>
                <a
                  href="#howWork"
                  className="px-5 py-2 transition-all duration-300 hover:text-[#CF9A2A] focus-visible:ring active:text-orange-200"
                  onClick={menuMobile}
                >
                  Como funciona?
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="px-5 py-2 transition-all duration-300 hover:text-[#CF9A2A] focus-visible:ring active:text-orange-200"
                  onClick={menuMobile}
                >
                  Contato
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="px-5 py-2 transition-all duration-300 hover:text-[#CF9A2A] focus-visible:ring active:text-orange-200"
                  onClick={menuMobile}
                >
                  Outro Site
                </a>
              </li>
              <li className="flex flex-wrap items-center gap-3 px-5 py-2 hover:text-[#CF9A2A]">
                <a href="https://api.whatsapp.com/send?phone=5531997948742">
                  <button className="flex items-center gap-3 rounded-md bg-[#FFFFFF] px-5 py-2 text-[#B2821A] transition hover:bg-[#CF9A2A] hover:text-white focus-visible:ring">
                    Entre em contato <FaArrowRight aria-hidden="true" />
                  </button>
                </a>
              </li>
            </menu>
          </nav>
        )}
        <nav className="hidden min-w-1/2 lg:block" role="navigation">
          <menu className="flex justify-between gap-4 text-sm">
            <li>
              <a
                href="#areasActivity"
                className="px-5 py-2 transition-all duration-300 hover:text-[#CF9A2A] focus-visible:ring active:text-orange-200"
              >
                Área de atuação
              </a>
            </li>
            <li>
              <a
                href="#howWork"
                className="px-5 py-2 transition-all duration-300 hover:text-[#CF9A2A] focus-visible:ring active:text-orange-200"
              >
                Como funciona?
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="px-5 py-2 transition-all duration-300 hover:text-[#CF9A2A] focus-visible:ring active:text-orange-200"
              >
                Contato
              </a>
            </li>
            <li>
              <a
                href="#"
                className="px-5 py-2 transition-all duration-300 hover:text-[#CF9A2A] focus-visible:ring active:text-orange-200"
              >
                Outro site
              </a>
            </li>
            <li>
              <a href="https://api.whatsapp.com/send?phone=5531997948742">
                <button className="flex items-center gap-3 rounded-md bg-[#FFFFFF] px-5 py-2 text-[#B2821A] transition hover:bg-[#CF9A2A] hover:text-white focus-visible:ring">
                  Entre em contato <FaArrowRight aria-hidden="true" />
                </button>
              </a>
            </li>
          </menu>
        </nav>
      </div>
    </header>
  );
};
