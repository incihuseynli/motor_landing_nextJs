import React from "react";
import SectionHead from "./SectionHead";
import AuthBtn from "../buttons/AuthBtn";

const NewsLetterSect = () => {
  return (
    <section className="flex flex-col gap-14 items-center justify-center">
      <SectionHead
        sectionHead="Subscribe To Newsletter"
        sectionDesc="Subscribe to our newsletter to get amazing offers in future."
      />
      <div className="flex flex-col gap-4 md:flex-row md:gap-2">
        <input
          type="email"
          placeholder="Enter your email."
          className="w-full md:w-96 py-2 px-4 bg-[#FAFAFA] border rounded-md outline-none focus:border-primary"
        />
        <AuthBtn
          bgColor="bg-primary"
          textColor="text-white"
          bgHoverColor="bg-white"
          textHoverColor="text-primary"
          width="w-full md:w-28"
        >
          Get Start
        </AuthBtn>
      </div>
    </section>
  );
};

export default NewsLetterSect;
