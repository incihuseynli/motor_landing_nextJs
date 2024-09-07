import React from "react";
import SectionHead from "./SectionHead";
import Image from "next/image";
import List from "./List";
import { prodInfo } from "@/datas/data";

const ProductInfo = () => {
  return (
    <section id="production">
      <SectionHead
        sectionHead="Product Information"
        sectionDesc="Our Scooter has following unique design and technology features:"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 place-items-center ">
        <Image src="/product1.png" alt="" width={600} height={600} />
        {/* LIST */}
        <List data={prodInfo} />
      </div>
    </section>
  );
};

export default ProductInfo;
