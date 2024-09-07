import { smallCardImg } from "@/datas/data";
import Image from "next/image";

const SmallImgCard = () => {
  return (
    <div className="flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap items-center justify-center md:relative md:-top-24 lg:-top-32">
      {smallCardImg.map(({ id, image }) => (
        <Image
          key={id} 
          src={image}
          alt="This is a small card image"
          width={320}
          height={320}
        />
      ))}
    </div>
  );
};

export default SmallImgCard;
