import Image from "next/image";
import Navbar from "@/components/Navbar";
import Isometric from "@/components/Isometric";
import Clouds from "@/components/Clouds";

export default function Home() {
  return (
    <div className="w-screen h-screen bg-[#fff1c5]">
      <Navbar />
      <div className="flex justify-center h-full">
        <Isometric />
      </div>
      <Clouds />
    </div>
  );
}
