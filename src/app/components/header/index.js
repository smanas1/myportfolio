import Link from "next/link";
import React from "react";
import logo from "@/app/images/akashlogo.png";
import Image from "next/image";
export default function Header() {
  return (
    <div className="bg-white">
      <div className="container-lg mx-auto ">
        <nav className="fixed w-full bg-white z-10 flex justify-between py-6 px-12 capitalize shadow-md">
          <ul>
            <Link href={"#home"}>
              <li className="text-[#2d2e32] text-[17px] font-bold transition-[all .23s] flex items-center justify-start cursor-pointer">
                <Image src={logo} alt="mylogo" width={100} height={20} />
                <h1 className="text-[17px] mt-[5px] font-extrabold">.DEV</h1>
              </li>
            </Link>
          </ul>
          <ul className="flex gap-8">
            <li className="text-[#2d2e32] text-[17px] font-bold transition-[all .23s] hover:text-[#147efb]">
              <Link href={"#home"}>Home</Link>
            </li>
            <li className="text-[#2d2e32] text-[17px] font-bold transition-[all .23s] hover:text-[#147efb]">
              <Link href={"#about"}>About</Link>
            </li>
            <li className="text-[#2d2e32] text-[17px] font-bold transition-[all .23s] hover:text-[#147efb]">
              <Link href={"#project"}>Projects</Link>
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
