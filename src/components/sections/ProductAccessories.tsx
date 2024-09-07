import React from "react";
import SectionHead from "./SectionHead";
import List from "./List";
import { prodAccessories } from "@/datas/data";
import Image from "next/image";
import Btn from "../buttons/Btn";

const ProductAccessories = () => {
  return (
    <section>
      <SectionHead
        sectionHead="Multiple Accessories"
        sectionDesc="There are multiple modes for the scooter for your multiple needs."
      />
      <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 items-center place-content-between">
        <Image
          src="/accessories1.png"
          alt=""
          width={600}
          height={600}
          className="order-2"
        />
        {/* LIST */}
          <List data={prodAccessories} listTitle="Golf Bag Rock" />
      </div>
      <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2  place-items-center ">
        <Image src="/accessories2.png" alt="" width={600} height={600} />
        {/* LIST */}
        <List data={prodAccessories} listTitle="Shopping Rack" />
      </div>
      <div className="flex items-center justify-center mt-12">
        <Btn>More Accessories Coming Soon</Btn>
      </div>
    </section>
  );
};

export default ProductAccessories;
