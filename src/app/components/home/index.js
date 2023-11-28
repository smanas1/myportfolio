import { Mulish, Poppins } from "next/font/google";
import Link from "next/link";
import React from "react";
import { PiLinkedinLogoBold } from "react-icons/pi";
import { FiGithub } from "react-icons/fi";
// import { myimage } from "@/app/images/profile.jpg";
import myimage from "../../images/profile.jpg";
import Image from "next/image";
import SkillSet from "../Skillset";
const mulish = Mulish({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});
const poppins = Poppins({
  subsets: ["latin-ext"],
  weight: ["400", "500", "600", "700", "800", "900"],
});
export default function HomeMain() {
  const style = {
    animation: "morph 8s ease-in-out infinite",
    backgroundImage: `url(${myimage.src})`,
    backgroundPosition: "50%",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    border: "3px solid #2d2e32",
    borderRadius: "60% 40% 30% 70%/60% 30% 70% 40%",
    width: "350px",
    height: "350px",
    position: "relative",
    transition: "all 1s ease-in-out",
  };
  return (
    <>
      <div id="home" className="bg-[#F9F9F9] flex flex-col h-screen w-full">
        <div className="container mx-auto max-w-[1070px] px-[40px]">
          <div className="flex items-center h-[650px] gap-[100px] relative">
            <div className="flex flex-col max-w-[500px] relative">
              <h1
                className={
                  poppins.className +
                  " text-[#2d2e32] text-[55px] font-bold leading-[1.2] my-5"
                }
              >
                Front-End React Developer
              </h1>
              <p
                className={
                  mulish.className + " " + "text-[#555] font-medium text-lg"
                }
              >
                Hi, I&apos;m Akash Sarker. A passionate Front-end React
                <br />
                Developer based in Dhaka, Bangladesh. 📍
              </p>
              <span className="flex cursor-pointer gap-5 my-10 mx-0">
                <Link
                  href="https://nextjs.org"
                  className="transition-[all linear 1.3s] hover:text-blue-700"
                >
                  <PiLinkedinLogoBold fontSize={30} />
                </Link>

                <Link
                  href="https://nextjs.org"
                  className="transition-[all linear 1.3s] hover:text-blue-700"
                >
                  <FiGithub fontSize={30} />
                </Link>
              </span>
            </div>
            <div className="myimage" style={style}></div>
            <SkillSet />
          </div>
        </div>
      </div>
    </>
  );
}
