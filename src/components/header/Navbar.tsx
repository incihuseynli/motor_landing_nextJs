"use  client";
import useMediaQuery from "@/hooks/useMediaQuery";
import Links from "./Links";
import Image from "next/image";
import { useState } from "react";

const Navbar = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1024px)");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <nav className={`relative ${isAboveMediumScreens ? "order-0" : "order-1"}`}>
      {isAboveMediumScreens ? (
        // Desktop menu
        <div className="flex items-center gap-6">
          <Links />
        </div>
      ) : (
        // Mobile menu
        <div className="">
          <Image
            src="/menu.svg"
            alt="mobile menu icon"
            width={40}
            height={40}
            className="cursor-pointer"
            onClick={() => setIsOpen(true)}
          />
          {isOpen && (
            <div className="fixed right-0 top-0 z-10 bg-white w-1/2 h-screen flex flex-col  border-l border-primary/25 px-4 py-8 slide-left">
              <Image
                src="/xmark.svg"
                alt="close mobile menu icon"
                width={40}
                height={40}
                className="cursor-pointer absolute right-2 top-4"
                onClick={() => setIsOpen(false)}
              />
              <div className="flex flex-col gap-6 mt-20 items-center">
                <Links />
                {/* Socials */}
                <div className="flex items-center gap-6 mt-4">
                  <Image
                    src="/facebook.svg"
                    alt="social media icon"
                    width={32}
                    height={32}
                    className="cursor-pointer"
                  />
                  <Image
                    src="/instagramm.svg"
                    alt="social media icon"
                    width={32}
                    height={32}
                    className="cursor-pointer"
                  />
                  <Image
                    src="/twitter.svg"
                    alt="social media icon"
                    width={32}
                    height={32}
                    className="cursor-pointer"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
