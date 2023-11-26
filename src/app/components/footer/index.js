import Link from "next/link";
import React from "react";
import { FiGithub } from "react-icons/fi";
import { CiLinkedin } from "react-icons/ci";

export default function Footer() {
  return (
    <div className="flex justify-around py-5 bg-black text-white">
      <div>Copyright © 2023. All rights are reserved</div>
      <div>
        <ul className="flex gap-5">
          <li>
            <Link href="https://nextjs.org">
              <CiLinkedin fontSize={30} />
            </Link>
          </li>
          <li>
            <Link href="https://nextjs.org">
              <FiGithub fontSize={30} />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
