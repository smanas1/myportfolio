import Image from "next/image";
import Layouts from "./components/layouts";
import HomeMain from "./components/home";
import About from "./components/about";

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
