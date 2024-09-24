"use client";
import { useEffect } from "react";

export function Header() {
  useEffect(() => {
    

    const toggleMenu = () => {
      const mobileNav = document.getElementById('mobileNav');
      if (mobileNav) {
        mobileNav.classList.toggle('hidden');
      }
    };

    
    document.getElementById('burger')?.addEventListener('click', toggleMenu);
    document.getElementById('closeMenu')?.addEventListener('click', toggleMenu);

  
    return () => {
      document.getElementById('burger')?.removeEventListener('click', toggleMenu);
      document.getElementById('closeMenu')?.removeEventListener('click', toggleMenu);
    };
  }, []);

  return (
    <header className="top-0 left-0 w-full py-2 font-semibold backdrop-blur-md  bg-zinc-900/30 shadow-lg">
      <div className="container mx-auto flex xl:w-[1120px] md:w-[740px] justify-between items-center">
        <button id="burger" className="transition duration-300 md:hidden block text-gray-800 px-5 dark:text-white focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>

        <nav id="nav" className="hidden md:flex flex-row gap-x-4 md:gap-x-1 opacity-90   text-gray-400 font-light">
          <a className="rounded-sm  px-4 hover:text-white duration-200 transition" href="#inicio">Inicio</a>
          <a className="rounded-sm  px-4 hover:text-white duration-200 transition" href="#estadisticas">Estadisticas</a>
          <a className="rounded-sm  px-4 hover:text-white duration-200 transition" href="#zonas-calientes">Zonas calientes</a>
        </nav>
      </div>

      <div id="mobileNav" className="hidden md:hidden flex-col items-center justify-center backdrop-blur-md  bg-white shadow-lg fixed top-0 left-0 w-full z-10">
        <button id="closeMenu" className="absolute top-4 right-4 transition duration-300 cursor:pointer text-base text-gray-800">X</button>
        <nav className="flex flex-col items-center justify-center gap-4 mt-4 dark:text-white/80 text-gray-800">
          <a className="hover:bg-black rounded-md px-4 py-2 text-black  hover:text-white duration-200 transition" href="#inicio">Inicio</a>
          <a className="hover:bg-black rounded-md px-4 py-2 text-black hover:text-white duration-200 transition" href="#estadisticas">Estadisticas</a>
          <a className="hover:bg-black rounded-md px-4 py-2 text-black hover:text-white duration-200 transition" href="#zonas-calientes">Zonas calientes</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
