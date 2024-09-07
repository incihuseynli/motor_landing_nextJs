import { ISectHeadProps } from "@/types/types";
import React from "react";

const SectionHead = ({ sectionHead, sectionDesc }: ISectHeadProps) => {
  return (
    <div className="flex flex-col justify-center items-center gap-4 text-center">
      {/* Section header */}
      <h2 className="font-bold text-5xl text-primary tracking-wide">
        {sectionHead}
      </h2>
      {/* Section desc */}
      {sectionDesc && (
        <p className="text-lg tracking-wide text-primary font-extralight">
          {sectionDesc}
        </p>
      )}
    </div>
  );
};

export default SectionHead;
