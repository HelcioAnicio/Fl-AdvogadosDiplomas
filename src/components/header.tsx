import { useState } from 'react';
import logo from '/logo.png';
import { IoMdClose } from 'react-icons/io';
import { VscMenu } from 'react-icons/vsc';
import { FaArrowRight } from 'react-icons/fa';

export const Header = () => {
  const [menuActived, setMenuActived] = useState(false);

  const menuMobile = () => {
    setMenuActived(!menuActived);
  };
  return (
    <header className='fixed w-full h-14'>
      <div className='flex justify-between px-5 py-2 items-center relative'>
        <figure>
          <img
            src={logo}
            alt='logo of company'
            className='w-24'
          />
        </figure>
        <button
          className='cursor-pointer'
          onClick={menuMobile}>
          {menuActived === false && (
            <VscMenu className='size-10 p-2 lg:hidden text-white' />
          )}
        </button>
        {menuActived === true && (
          <nav className='absolute top-full right-0 z-50 w-full max-w-70 flex-col space-y-7 rounded-b-md bg-[#231D31] px-3 py-10'>
            <div className='flex justify-end'>
              <button
                className='cursor-pointer'
                onClick={menuMobile}>
                <IoMdClose className='size-10 p-2 lg:hidden text-white' />
              </button>
            </div>
            <menu
              type='toolbar'
              className='flex flex-col justify-between gap-7 text-sm'>
              <li className='flex items-center'>
                <a
                  href='#'
                  className='px-5 py-2 transition-all duration-300 hover:text-[#00FF75] active:text-[#00FF75]'
                  onClick={() => setMenuActived(!menuActived)}>
                  Area de atuação
                </a>
              </li>
              <li className='flex items-center'>
                <a
                  href='#'
                  className='px-5 py-2 transition-all duration-300 hover:text-[#00FF75] active:text-[#00FF75]'
                  onClick={() => setMenuActived(!menuActived)}>
                  Como funciona?
                </a>
              </li>
              <li className='flex items-center'>
                <a
                  href='#'
                  className='px-5 py-2 transition-all duration-300 hover:text-[#00FF75] active:text-[#00FF75]'
                  onClick={() => setMenuActived(!menuActived)}>
                  Contato
                </a>
              </li>
              <li className='flex items-center'>
                <a
                  href='#'
                  className='px-5 py-2 transition-all duration-300 hover:text-[#00FF75] active:text-[#00FF75]'
                  onClick={() => setMenuActived(!menuActived)}>
                  Outro Site
                </a>
              </li>
              <li className='flex flex-wrap items-center gap-3 px-5 py-2 hover:text-[#00FF75]'>
                <button className='cursor-pointer rounded-md bg-[#FFFFFF] px-5 py-2 text-[#B2821A] transition-all duration-300 hover:bg-[#03db68ba]'>
                  <a
                    href='#form'
                    className='flex gap-3 items-center'>
                    Entre em contato <FaArrowRight />
                  </a>
                </button>
              </li>
            </menu>
          </nav>
        )}
        <nav className='hidden min-w-1/2 lg:block'>
          <menu className='gap- flex justify-between text-sm xl:gap-10'>
            <li className='flex items-center'>
              <a
                href='#'
                className='px-5 py-2 transition-all duration-300 hover:text-[#00FF75] active:text-[#00FF75]'>
                Area de atuação
              </a>
            </li>
            <li className='flex items-center'>
              <a
                href='#'
                className='px-5 py-2 transition-all duration-300 hover:text-[#00FF75] active:text-[#00FF75]'>
                Como funciona
              </a>
            </li>
            <li className='flex items-center'>
              <a
                href='#'
                className='px-5 py-2 transition-all duration-300 hover:text-[#00FF75] active:text-[#00FF75]'>
                Contato
              </a>
            </li>
            <li className='flex items-center'>
              <a
                href='#'
                className='px-5 py-2 transition-all duration-300 hover:text-[#00FF75] active:text-[#00FF75]'>
                Outro site
              </a>
            </li>
            <li className='flex items-center gap-3 px-5 py-2'>
              <button className='cursor-pointer rounded-md bg-[#FFFFFF] px-5 py-2 text-[#B2821A] transition-all duration-300 hover:bg-[#03db68ba]'>
                <a
                  href='#form'
                  className='flex gap-3 items-center'>
                  Entre em contato <FaArrowRight />
                </a>
              </button>
            </li>
          </menu>
        </nav>
        {/* <menu className='absolute top-14 right-0'>
          <nav>
            <li>
              <a href=''></a>
            </li>
            <li>
              <a href=''></a>
            </li>
            <li>
              <a href=''></a>
            </li>
            <li>
              <a href=''></a>
            </li>
          </nav>
        </menu> */}
      </div>
    </header>
  );
};
