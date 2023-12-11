"use client";
import Image from "next/image";
import Layouts from "./components/layouts";
import HomeMain from "./components/home";
import About from "./components/about";
import firebaseConfig from "./database/firebaseconfig";
export default function Home() {
  return (
    <>
      <Layouts>
        <HomeMain />
        <About />
      </Layouts>
    </>
  );
}
