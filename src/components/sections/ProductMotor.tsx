import React from "react";
import SectionHead from "./SectionHead";
import Image from "next/image";

const ProductMotor = () => {
  return (
    <section>
      <SectionHead
        sectionHead="High Efficiency Motor"
        sectionDesc="More torque for powerful riding with 22% maximum hill climbing capability."
      />
      <Image
        src="/motor.png"
        alt="This is an image of motor section "
        // layout="fill"
        // objectFit="cover"
        width={1252}
        height={705}
        className="w-full h-full object-contain"
      />
    </section>
  );
};

export default ProductMotor;
