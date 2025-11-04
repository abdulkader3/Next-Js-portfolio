'use client'
import Image from "next/image";
import React, { useState } from "react";
import logo from "../../../public/Logo.png";
import Link from "next/link";

const Navber = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <nav className="bg-[#1A0B2E] h-[50] md:h-[113px] flex items-center justify-between md:px-0 px-10 md:justify-center md:gap-[579px] gap-4 relative">
        <div className="Logo z-20">
          

          <Link href={"/"}>
            <Image className=" w-[20px] md:w-[35px]   " src={logo} alt="logo" />
          </Link>


        </div>

        
        <button
          className="md:hidden absolute right-6 top-1/2 -translate-y-1/2 z-20"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <span className="block w-7 h-1 bg-white mb-1 rounded transition-all" style={{ transform: menuOpen ? 'rotate(45deg) translateY(8px)' : 'none' }}></span>
          <span className={`block w-7 h-1 bg-white mb-1 rounded transition-all ${menuOpen ? 'opacity-0' : ''}`}></span>
          <span className="block w-7 h-1 bg-white rounded transition-all" style={{ transform: menuOpen ? 'rotate(-45deg) translateY(-8px)' : 'none' }}></span>
        </button>

    
        <ul className="text-white md:flex hidden gap-[168px]">
          <li className="hover:scale-110 active:scale-95 transition-all">
            <Link className="text-[20px] font-semibold hover:scale-110 active:scale-95 transition-all" href={"/"}> Home </Link>
          </li>
          <li className="hover:scale-110 active:scale-95 transition-all">
            <Link className="text-[20px] font-semibold hover:scale-110 active:scale-95 transition-all" href={"/about"}> About </Link>
          </li>
          <li className="hover:scale-110 active:scale-95 transition-all">
            <Link className="text-[20px] font-semibold hover:scale-110 active:scale-95 transition-all" href={"/lab"}> Lab </Link>
          </li>
        </ul>
 
 
        <ul
          className={`text-white flex flex-col items-center gap-8 bg-[#1A0B2E] absolute top-[113px] left-0 w-full py-8 md:hidden transition-all duration-300 z-10 ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        >
          <li>
            <Link className="text-[20px] font-semibold" href={"/"} onClick={() => setMenuOpen(false)}> Home </Link>
          </li>
          <li>
            <Link className="text-[20px] font-semibold" href={"/about"} onClick={() => setMenuOpen(false)}> About </Link>
          </li>
          <li>
            <Link className="text-[20px] font-semibold" href={"/lab"} onClick={() => setMenuOpen(false)}> Lab </Link>
          </li>
        </ul>

      </nav>
    </>
  );
};

export default Navber;
