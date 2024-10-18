import Image from "next/image";
import ReactLogo from "@/images/react_dark.svg";
import VueLogo from "@/images/vue_logo.png";

export default function DashboardNav() {
  return (
    <nav className="w-full flex z-50 mb-4">
      <div className="w-1/2 bg-[#23272f] flex justify-start items-center p-4">
        <Image
          src={ReactLogo}
          alt="React Logo"
          height={40}
          width={40}
          className="ml-4"
        />
        <a href="/react" className="ml-4 text-white">
          React Docs
        </a>
      </div>
      <div className="w-1/2 bg-[#1a1a1a] flex justify-end items-center p-4">
        <a href="/vue" className="mr-4 text-white">
          Vue Docs
        </a>
        <Image
          src={VueLogo}
          alt="Vue Logo"
          height={40}
          width={40}
          className="mr-4"
        />
      </div>
    </nav>
  );
}
