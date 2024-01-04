"use client";
import Image from "next/image";
import Layouts from "./components/layouts";
import HomeMain from "./components/home";
import About from "./components/about";
import firebaseConfig from "./database/firebaseconfig";
import Project from "./components/Project";
export default function Home() {
  return (
    <>
      <Layouts>
        <HomeMain />
        <About />
        <Project />
      </Layouts>
    </>
  );
}
