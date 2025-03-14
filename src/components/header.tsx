import { useState } from "react";
import logo from "/logo.png";
import { IoMdClose } from "react-icons/io";
import { VscMenu } from "react-icons/vsc";
import { FaArrowRight } from "react-icons/fa";

export const Header = () => {
  const [menuActived, setMenuActived] = useState(false);

  const menuMobile = () => {
    setMenuActived(!menuActived);
  };
  return (
    <header className="fixed h-14 w-full">
      <div className="relative flex items-center justify-between px-5 py-2">
        <figure>
          <img src={logo} alt="logo of company" className="w-24" />
        </figure>
        <button className="cursor-pointer" onClick={menuMobile}>
          {menuActived === false && (
            <VscMenu className="size-10 p-2 text-white lg:hidden" />
          )}
        </button>
        {menuActived === true && (
          <nav className="absolute top-full right-0 z-50 w-full max-w-70 flex-col space-y-7 rounded-b-md bg-[#231D31] px-3 py-10">
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
                  href="#"
                  className="px-5 py-2 transition-all duration-300 hover:text-[#CF9A2A] active:text-[#CF9A2A]"
                  onClick={() => setMenuActived(!menuActived)}
                >
                  Area de atuação
                </a>
              </li>
              <li className="flex items-center">
                <a
                  href="#"
                  className="px-5 py-2 transition-all duration-300 hover:text-[#CF9A2A] active:text-[#CF9A2A]"
                  onClick={() => setMenuActived(!menuActived)}
                >
                  Como funciona?
                </a>
              </li>
              <li className="flex items-center">
                <a
                  href="#"
                  className="px-5 py-2 transition-all duration-300 hover:text-[#CF9A2A] active:text-[#CF9A2A]"
                  onClick={() => setMenuActived(!menuActived)}
                >
                  Contato
                </a>
              </li>
              <li className="flex items-center">
                <a
                  href="#"
                  className="px-5 py-2 transition-all duration-300 hover:text-[#CF9A2A] active:text-[#CF9A2A]"
                  onClick={() => setMenuActived(!menuActived)}
                >
                  Outro Site
                </a>
              </li>
              <li className="flex flex-wrap items-center gap-3 px-5 py-2 hover:text-[#CF9A2A]">
                <button className="cursor-pointer rounded-md bg-[#FFFFFF] px-5 py-2 text-[#B2821A] transition-all duration-300 hover:bg-[#CF9A2A] hover:text-white">
                  <a href="#form" className="flex items-center gap-3">
                    Entre em contato <FaArrowRight />
                  </a>
                </button>
              </li>
            </menu>
          </nav>
        )}
        <nav className="hidden min-w-1/2 lg:block">
          <menu className="gap- flex justify-between text-sm xl:gap-10">
            <li className="flex items-center">
              <a
                href="#"
                className="px-5 py-2 transition-all duration-300 hover:text-[#CF9A2A] active:text-[#CF9A2A]"
              >
                Area de atuação
              </a>
            </li>
            <li className="flex items-center">
              <a
                href="#"
                className="px-5 py-2 transition-all duration-300 hover:text-[#CF9A2A] active:text-[#CF9A2A]"
              >
                Como funciona
              </a>
            </li>
            <li className="flex items-center">
              <a
                href="#"
                className="px-5 py-2 transition-all duration-300 hover:text-[#CF9A2A] active:text-[#CF9A2A]"
              >
                Contato
              </a>
            </li>
            <li className="flex items-center">
              <a
                href="#"
                className="px-5 py-2 transition-all duration-300 hover:text-[#CF9A2A] active:text-[#CF9A2A]"
              >
                Outro site
              </a>
            </li>
            <li className="flex items-center gap-3 px-5 py-2">
              <button className="cursor-pointer rounded-md bg-[#FFFFFF] px-5 py-2 text-[#B2821A] transition-all duration-300 hover:bg-[#CF9A2A] hover:text-white">
                <a href="#form" className="flex items-center gap-3">
                  Entre em contato <FaArrowRight />
                </a>
              </button>
            </li>
          </menu>
        </nav>
      </div>
    </header>
  );
};
