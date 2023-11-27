import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <div className="bg-white">
      <div className="container-lg mx-auto ">
        <nav className="fixed w-full bg-white z-10 flex justify-between py-6 px-12 capitalize shadow-md">
          <ul>
            <li className="text-[#2d2e32] text-[17px] font-bold transition-[all .23s]">
              hello
            </li>
          </ul>
          <ul className="flex gap-8">
            <li className="text-[#2d2e32] text-[17px] font-bold transition-[all .23s] hover:text-[#147efb]">
              <Link href={"#home"}>Home</Link>
            </li>
            <li className="text-[#2d2e32] text-[17px] font-bold transition-[all .23s] hover:text-[#147efb]">
              <Link href={"/"}>About</Link>
            </li>
            <li className="text-[#2d2e32] text-[17px] font-bold transition-[all .23s] hover:text-[#147efb]">
              <Link href={"/"}>Projects</Link>
            </li>
            <li className="text-[#2d2e32] text-[17px] font-bold transition-[all .23s] hover:text-[#147efb]">
              <Link href={"/"}>Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
