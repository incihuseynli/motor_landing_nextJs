import React from "react";
import SectionHead from "./SectionHead";
import Image from "next/image";
import Btn from "../buttons/Btn";

const GallerySect = () => {
  return (
    <section id="gallery">
      <SectionHead
        sectionHead="Gallery"
        sectionDesc="View gallery of our products and make yourself satisfied with our creation."
      />
      <div className="grid grid-cols-1 place-items-center lg:grid-cols-2 gap-6 mt-16">
        {/* Left side */}
        <div className="flex flex-col gap-6 lg:mt-24">
          <Image
            src="/img1.png"
            alt="This is a scotter image"
            width={633}
            height={485}
          />
          <div className="flex flex-col gap-4 items-center justify-center md:items-start md:justify-start">
            <Btn>Battery Images</Btn>
            <Btn>Spare Parts Images</Btn>
            <Btn>Charging Cable Images</Btn>
          </div>
        </div>
        {/* Rigth side */}
        <div className="flex flex-col gap-6">
          <Image
            src="/img2.png"
            alt="This is an image"
            width={633}
            height={485}
          />
          <Image
            src="/img3.png"
            alt="This is an image"
            width={633}
            height={485}
          />
        </div>
      </div>
    </section>
  );
};

export default GallerySect;
