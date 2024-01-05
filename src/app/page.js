"use client";
import Image from "next/image";
import Layouts from "./components/layouts";
import HomeMain from "./components/home";
import About from "./components/about";
import FirebaseConfig from "./database/firebaseConfig";
import Project from "./components/Project";
import Contact from "./components/contact";
export default function Home() {
  return (
    <>
      <Layouts>
        <HomeMain />
        <About />
        <Project />
        <Contact />
      </Layouts>
    </>
  );
}
