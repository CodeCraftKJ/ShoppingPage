import type { NextPage } from "next";
import { memo } from "react";
import HeroSection from "./hero-section";

const Hero: NextPage = memo(() => {
  return (
    <div className="self-stretch bg-white flex flex-col pt-[0rem] px-[4.69rem] pb-[2.75rem] items-center justify-start text-left text-[4.5rem] text-black font-poppins md:pl-[2.5rem] md:pr-[2.5rem] md:box-border sm:pl-[1.25rem] sm:pr-[1.25rem] sm:box-border">
      <HeroSection />
    </div>
  );
});

export default Hero;
