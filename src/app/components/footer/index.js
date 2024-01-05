import Link from "next/link";
import React from "react";
import { FiGithub } from "react-icons/fi";
import { CiLinkedin } from "react-icons/ci";
import Linkedin from "@/app/SocialIcons/Linkedin";
import GithubIcon from "@/app/SocialIcons/GithubIcon";

export default function Footer() {
  return (
    <div className="flex justify-around py-[50px] bg-[#2d2e32] text-white">
      <div className="font-bold">Copyright © 2023. All rights are reserved</div>
      <div>
        <ul className="flex gap-5">
          <li>
            <Link href="https://nextjs.org">
              <Linkedin />
            </Link>
          </li>
          <li>
            <Link href="https://nextjs.org">
              <GithubIcon />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
