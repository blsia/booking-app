 import Link from "next/link";
import Image from "next/image";
import Navlink from "@/components/navbar/navlink";

export default function Navbar() {
  return (
    <div className="fixed top-0 w-full bg-white shadow-sm z-50">
      <div className="max-w-screen-xl mx-auto flex flex-wrap items-center">
        <Link href="/">
          <Image
            src="/logo.png"
            width={128}
            height={128}
            alt="Logo"
          />
        </Link>
        <Navlink />
      </div>
    </div>
  );
}