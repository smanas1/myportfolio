import { Poppins } from "next/font/google";
import React from "react";
const poppins = Poppins({
  subsets: ["latin-ext"],
  weight: ["400", "500", "600", "700", "800", "900"],
});
export default function MainTitle({
  children,
  className,
  textOne,
  textTwo,
  style,
}) {
  return (
    <>
      <h4 className="text-[#147efb] text-[17px] font-extrabold mb-[10px] uppercase">
        {children}
      </h4>

      <h4
        style={style}
        className={
          poppins.className +
          " text-[#2d2e32] text-[25px] leading-[1.4] font-extrabold"
        }
      >
        {textOne} <br /> {textTwo}
      </h4>
    </>
  );
}
