"use client";
import React from "react";

import Image from "next/image";
import aboutImage from "@/app/images/aboutbg.jpg";
import downloadFile from "@/app/images/download.png";
import files from "../resume/mypdf.pdf";
// import pdf from "@/app/components/resume/akashsarker.pdf";
import aboutEffect from "@/app/images/particleOne.png";
import { Mulish, Poppins } from "next/font/google";
import Link from "next/link";

const poppins = Poppins({
  subsets: ["latin-ext"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const mulish = Mulish({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export default function About() {
  // const react_app_client_URL = "http://localhost:3000/";
  // const handleClick = () => {
  //   FileSaver.saveAs(react_app_client_URL + mypdf, "myCV.pdf");
  // };
  return (
    <>
      <div className="max-w-[1070px] mx-auto">
        <div id="about" className="grid grid-cols-2 gap-[30px] my-36">
          <div className="aboutImage w-full hover:brightness-50 transition-all">
            <Image
              src={aboutImage}
              width={520}
              alt="aboutleft"
              className="rounded-md h-[409px !important]"
            />
          </div>
          <div className="rounded-md relative">
            <div className="absolute bottom-0 right-[-70px] z-[-10]">
              <Image
                src={aboutEffect}
                width={100}
                height={100}
                alt="effectDown"
                className="banner-particle-one"
              />
            </div>
            <h4 className="text-[#147efb] text-[17px] font-extrabold mb-[10px] uppercase">
              ABOUT ME
            </h4>
            <h4
              className={
                poppins.className +
                " text-[#2d2e32] text-[25px] leading-[1.4] mb-[10px] font-extrabold"
              }
            >
              A dedicated Front-end Developer <br /> based in Dhaka, Bangladesh
              📍
            </h4>
            <p
              className={
                mulish.className +
                " text-[#767676] text-[17px] font-semibold leading-[1.5]"
              }
            >
              As a Junior Front-End Developer, I possess an impressive arsenal
              of skills in HTML, CSS, JavaScript, React, Tailwind, and SCSS. I
              excel in designing and maintaining responsive websites that offer
              a smooth user experience. My expertise lies in crafting dynamic,
              engaging interfaces through writing clean and optimized code and
              utilizing cutting-edge development tools and techniques. I am also
              a team player who thrives in collaborating with cross-functional
              teams to produce outstanding web applications.
            </p>
            <Link
              href={files}
              c="true"
              download="mypdf.pdf"
              className="inline-block px-5 py-3 rounded-md bg-orange-500 text-white font-bold mt-4"
            >
              Download My CV
            </Link>
            <a href={files} download={"mypdf"}>
              pdf
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
