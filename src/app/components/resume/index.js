import React from "react";
import orangeDot from "@/app/images/orangeDot.png";
import Image from "next/image";
import { Jost } from "next/font/google";
const jost = Jost({
  subsets: ["latin-ext"],
  weight: ["400", "500", "600", "700", "800", "900"],
});
export default function MyResume() {
  return (
    <div className="bg-[#FFF5EF]">
      <div className="container mx-auto max-w-[1320px] px-[40px] py-32">
        <div className="flex justify-center items-center">
          <Image src={orangeDot} width={18} height={18} alt="orenageDot" />
          <p className={jost.className + " ml-2 text-[16px] text-black"}>
            My Resume
          </p>
        </div>
        <h2 className="font-bold text-5xl text-center mt-4">
          1+ YEARS OF EXPERIENCE
        </h2>
        <div className="mt-[50px] flex flex-wrap"></div>
      </div>
    </div>
  );
}
