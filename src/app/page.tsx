import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import ProductInfo from "@/components/sections/ProductInfo";
import ProductMotor from "@/components/sections/ProductMotor";
import ProductAccessories from "@/components/sections/ProductAccessories";
import GallerySect from "@/components/sections/GallerySect";
import ColorsSect from "@/components/sections/ColorsSect";
import NewsLetterSect from "@/components/sections/NewsLetterSect";

export default function Home() {
  return (
    <main className="">
      {/* HERO SECTION */}
      <Hero />
      {/* STATS SECTION */}
      <Stats/>
      {/* PRODUCTS - INFO SECTION */}
      <ProductInfo/>
      {/* PRODUCTS - MOTOR SECTION */}
      <ProductMotor/>
      {/* PRODUCTS - ACCESSORIES SECTION */}
      <ProductAccessories/>
      {/* GALLERY SECTION */}
      <GallerySect/>
      {/* COLORS SECTION */}
      <ColorsSect/>
      {/* NEWSLETTER SECTION */}
      <NewsLetterSect/>
    </main>
  );
}
