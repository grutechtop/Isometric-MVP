import Image from "next/image";
import Navbar from "@/components/Navbar";
import Isometric from "@/components/Isometric";

export default function Home() {
  
  return (
    <div className="w-screen h-screen bg-[#fff1c5]">
      <Navbar />
      <Isometric />
    </div>
  );
}
