import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaRegWindowClose } from "react-icons/fa";

import Image from "next/image";
import { Poppins } from "next/font/google";
const poppins = Poppins({
  subsets: ["latin-ext"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export default function Header() {
  const [show, setShow] = useState(false);

  return (
    <div className="bg-white">
      <div className="container-lg mx-auto ">
        <nav className="fixed w-full bg-white z-10 flex justify-between items-center py-6 px-12 capitalize shadow-md">
          <ul>
            <Link href={"#home"}>
              <li className="text-[#2d2e32] text-[17px] font-bold transition-[all .23s] flex items-center justify-start cursor-pointer">
                <h1
                  className={
                    poppins.className + " text-[17px] mt-[5px] font-extrabold"
                  }
                >
                  Akash.dev
                </h1>
              </li>
            </Link>
          </ul>
          <div className="md:hidden">
            <FaBars
              className="mt-[5px] hover:text-[#147efb] transition-all"
              onClick={() => setShow(!show)}
            />
          </div>
          <div
            className={`items-center bg-white flex h-screen justify-center fixed text-center top-[20px] ${
              show
                ? "-translate-x-[50px] transition duration-[.3s] ease-in-out"
                : "-translate-x-[120%] transition duration-[.3s] ease-in-out"
            } w-full z-[300] `}
          >
            <span className=" hover:text-[#147efb] cursor-pointer text-[33px] absolute right-[40px] top-[20px]">
              <FaRegWindowClose fontSize={20} onClick={() => setShow(false)} />
            </span>
            <ul className="flex flex-col text-[23px] gap-10">
              <li>
                <Link
                  className="text-[#2d2e32] font-bold transition-[all .23s] hover:text-[#147efb]"
                  href={"#home"}
                  onClick={() => setShow(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="text-[#2d2e32] font-bold transition-[all .23s] hover:text-[#147efb]"
                  href={"#about"}
                  onClick={() => setShow(false)}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  className="text-[#2d2e32] font-bold transition-[all .23s] hover:text-[#147efb]"
                  href={"#project"}
                  onClick={() => setShow(false)}
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  className="text-[#2d2e32] font-bold transition-[all .23s] hover:text-[#147efb]"
                  href={"#contact"}
                  onClick={() => setShow(false)}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <ul className="hidden md:flex md:gap-8">
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
              <Link href={"#contact"}>Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
