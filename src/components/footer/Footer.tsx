import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-primary  mt-24 flex flex-col gap-6 lg:gap-0">
      <div className="flex">
        <Image
          src="/footer.png"
          alt="Footer image"
          width={600}
          height={400}
          className="hidden lg:block lg:relative -left-12 -top-16"
        />
        <div className="w-full mt-20 flex flex-wrap gap-6  md:flex-nowrap justify-between">
          <div className="w-1/2 md:w-fit flex flex-col">
            <h6 className="text-white font-bold text-lg tracking-wider mb-10">
              About
            </h6>
            <ul className="flex flex-col gap-6">
              <Link
                href="#"
                className="text-[#FBFBFB] capitalize text-base tracking-wide"
              >
                Company
              </Link>
              <Link
                href="#"
                className="text-[#FBFBFB] capitalize text-base tracking-wide"
              >
                Teams
              </Link>
              <Link
                href="#"
                className="text-[#FBFBFB] capitalize text-base tracking-wide"
              >
                Profile
              </Link>
              <Link
                href="#"
                className="text-[#FBFBFB] capitalize text-base tracking-wide"
              >
                Careers
              </Link>
            </ul>
          </div>
          <div className=" md:w-fit  flex flex-col">
            <h6 className="text-white font-bold text-lg tracking-wider mb-10">
              Resources
            </h6>
            <ul className="flex flex-col gap-6">
              <Link
                href="#"
                className="text-[#FBFBFB] capitalize text-base tracking-wide"
              >
                Contact
              </Link>
              <Link
                href="#"
                className="text-[#FBFBFB] capitalize text-base tracking-wide"
              >
                Application
              </Link>
              <Link
                href="#"
                className="text-[#FBFBFB] capitalize text-base tracking-wide"
              >
                FQA Features
              </Link>
            </ul>
          </div>
          <div className="w-full md:w-fit flex flex-col">
            <h6 className="text-white font-bold text-lg tracking-wider mb-10">
              Legals
            </h6>
            <div className="flex flex-row gap-32 md:flex-col md:gap-6">
              <ul className="flex flex-col gap-6">
                <Link
                  href="#"
                  className="text-[#FBFBFB] capitalize text-base tracking-wide"
                >
                  Copyright Privacy
                </Link>
                <Link
                  href="#"
                  className="text-[#FBFBFB] capitalize text-base tracking-wide"
                >
                  Policy Disclaimer
                </Link>
                <Link
                  href="#"
                  className="text-[#FBFBFB] capitalize text-base tracking-wide"
                >
                  Profile
                </Link>
                <Link
                  href="#"
                  className="text-[#FBFBFB] capitalize text-base tracking-wide"
                >
                  Terms
                </Link>
              </ul>
              {/* Socials */}
              <div className="flex flex-col md:flex-row items-center gap-4">
                <Link href="#">
                  <Image
                    src="/facebook.svg"
                    alt="Facebook icon"
                    width={28}
                    height={28}
                  />
                </Link>
                <Link href="#">
                  <Image
                    src="/instagramm.svg"
                    alt="Instagram icon"
                    width={28}
                    height={28}
                  />
                </Link>
                <Link href="#">
                  <Image
                    src="/twitter.svg"
                    alt="Twitter icon"
                    width={28}
                    height={28}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="text-[#FBFBFB] text-xs text-center">
        © Copyright 2024. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
