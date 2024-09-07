import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <section className="grid grid-cols-1 gap-16 lg:grid-cols-2 px-4 md:px-10 lg:px-12 pt-8">
      {/* Left side */}
      <div className="mt-8 flex flex-col items-center md:justify-center lg:items-start gap-8">
        <h1 className="text-5xl md:text-6xl lg:text-8xl uppercase text-primary ">
          Let's ride <span className="font-bold">the future.</span>
        </h1>
        <span className="block w-2/3 bg-primary border border-primary"></span>
        <p className="text-base lg:text-lg tracking-wide text-primary">
          Simple and sleek design with users in mind.
        </p>
        <div className="mt-6 flex w-full justify-between items-center  md:justify-evenly  lg:justify-between lg:w-4/5">
          <div className="flex items-center gap-6">
            <Image
              src="/heroIcon2.png"
              alt="Buy now icon"
              width={40}
              height={40}
            />
            <Link href="/" className="text-base font-bold text-primary">
              Buy now
            </Link>
          </div>
          <div className="w-[200px] md:w-[273px] flex items-center gap-6">
            <Link href="/" className="text-base font-medium text-primary md:w-1/3">
              Watch our video how it works
            </Link>
            <Image
              src="/heroIcon1.png"
              alt="Watch our video how it works icon"
              width={70}
              height={70}
            />
          </div>
        </div>
      </div>
      {/* Right side */}
      <div className="w-full relative -right-4 lg:-right-12">
        <Image
          src="/heroImg.png"
          alt="Hero Image"
          width={700}
          height={700}
          // className="absolute right-0"
        />
      </div>
    </section>
  );
};

export default Hero;
