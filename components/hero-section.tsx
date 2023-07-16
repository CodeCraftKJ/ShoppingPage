import type { NextPage } from "next";
import HeroCTA from "./hero-c-t-a";

const HeroSection: NextPage = () => {
  return (
    <div className="self-stretch rounded-[44.26px] bg-whitesmoke-100 flex flex-row pt-[3.19rem] px-[2.5rem] pb-[0.13rem] items-center justify-center gap-[2.38rem] text-left text-[4.5rem] text-black font-poppins lg:flex-col">
      <HeroCTA />
      <img
        className="relative w-[41.75rem] h-auto object-cover max-w-[false]"
        alt=""
        src="/image-1@2x.png"
      />
    </div>
  );
};

export default HeroSection;
