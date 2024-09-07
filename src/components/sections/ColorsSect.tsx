import React from "react";
import SectionHead from "./SectionHead";
import Image from "next/image";
import SmallImgCard from "./SmallImgCard";

const ColorsSect = () => {
  return (
    <section>
      <SectionHead
        sectionHead="Colors"
        sectionDesc="Checkout our products colors."
      />
      <Image
      src="/img4.png"
      alt="This is an image of colors section"
      className="w-full h-full object-cover"
      width={700}
      height={700}
      />
     
      <SmallImgCard/>
    </section>
  );
};

export default ColorsSect;
