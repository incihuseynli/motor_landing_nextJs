"use client";
import Image from "next/image";
import Navbar from "./Navbar";
import AuthBtn from "../buttons/AuthBtn";

const Header = () => {
  return (
    <header className="px-4 md:px-8 lg:px-12 py-4  flex items-center justify-between  border-b border-b-gray-600/500">
      {/* Logo */}
      <Image src="/logo.svg" width={70} height={70} alt="Logo" />
      {/* Menu */}
      <Navbar />
      {/* Auth buttons */}
      <div className="flex items-center gap-6">
        <AuthBtn
          bgColor="bg-white"
          textColor="text-primary"
          bgHoverColor="bg-primary"
          textHoverColor="text-white"
          width="w-20"
          uppercase="uppercase"
        >
          Login
        </AuthBtn>
        <AuthBtn
          bgColor="bg-primary"
          textColor="text-white"
          bgHoverColor="bg-white"
          textHoverColor="text-primary"
          width="w-20 md:w-24"
          uppercase="uppercase"
        >
          Sign up
        </AuthBtn>
      </div>
    </header>
  );
};

export default Header;
