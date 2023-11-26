import Image from "next/image";
import Layouts from "./components/layouts";
import HomeMain from "./components/home";

export default function Home() {
  return (
    <>
      <Layouts>
        <HomeMain />
      </Layouts>
    </>
  );
}
