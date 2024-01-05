import { Mulish, Poppins } from "next/font/google";
import React from "react";
import MainTitle from "../maintitle";
import Link from "next/link";

const poppins = Poppins({
  subsets: ["latin-ext"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const mulish = Mulish({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});
export default function Contact() {
  return (
    <>
      <div className="bg-white py-[150px] px-0">
        <div id="contact" className="max-w-[1070px] mx-auto">
          <MainTitle
            style={{ marginBottom: "60px" }}
            textOne={"Don't be shy! Hit me up! 👇"}
          >
            contact
          </MainTitle>
          <div className="flex flex-wrap gap-20 mt-[60px]">
            <div className="flex items-center gap-4">
              <span className="flex justify-center items-center bg-white rounded-full shadow-md text-[#147efb] h-[50px] w-[50px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="tabler-icon tabler-icon-map-search"
                >
                  <path d="M11 18l-2 -1l-6 3v-13l6 -3l6 3l6 -3v7.5"></path>
                  <path d="M9 4v13"></path>
                  <path d="M15 7v5"></path>
                  <path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
                  <path d="M20.2 20.2l1.8 1.8"></path>
                </svg>
              </span>
              <div className={poppins.className + " flex flex-col gap-[5px]"}>
                <h3 className="text-[#2d2e32] text-[17px] font-bold">
                  Location
                </h3>
                <p className="text-[#767676] hover:text-[#147efb] transition-all font-normal cursor-pointer text-[17px]">
                  Dhaka , Bangladesh
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="flex justify-center items-center bg-white rounded-full shadow-md text-[#147efb] h-[50px] w-[50px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="tabler-icon tabler-icon-mail"
                >
                  <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"></path>
                  <path d="M3 7l9 6l9 -6"></path>
                </svg>
              </span>

              <div className={poppins.className + " flex flex-col gap-[5px]"}>
                <h3 className="text-[#2d2e32] text-[17px] font-bold">Mail</h3>
                <Link
                  href="mailto:akashsarkercit@gmail.com"
                  className="text-[#767676] hover:text-[#147efb] transition-all font-normal cursor-pointer text-[17px]"
                >
                  akashsarkercit@gmail.com
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
