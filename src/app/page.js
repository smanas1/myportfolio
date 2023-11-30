import Image from "next/image";
import Layouts from "./components/layouts";
import HomeMain from "./components/home";
import About from "./components/about";
import MyResume from "./components/resume";

export default function Home() {
  return (
    <>
      <Layouts>
        <HomeMain />
        <About />
        <MyResume />
      </Layouts>
    </>
  );
}
