import type { NextPage } from "next";
import { useCallback } from "react";
import FashionCards from "./fashion-cards";

const NewArrivalsSection: NextPage = () => {
  const onExploreNowClick = useCallback(() => {
    window.open("https://www.example.com/");
  }, []);

  const onArrowIconClick = useCallback(() => {
    window.open("https://www.example.com/");
  }, []);

  const onExploreNow1Click = useCallback(() => {
    window.open("https://www.example.com/");
  }, []);

  const onArrowIcon1Click = useCallback(() => {
    window.open("https://www.example.com/");
  }, []);

  const onExploreNow2Click = useCallback(() => {
    window.open("https://www.example.com/");
  }, []);

  const onArrowIcon2Click = useCallback(() => {
    window.open("https://www.example.com/");
  }, []);

  return (
    <div className="self-stretch bg-white flex flex-col pt-[3.25rem] px-[4.88rem] pb-[4.32rem] items-center justify-center text-left text-[2.25rem] text-black font-poppins md:pr-[4.88rem] md:box-border sm:pl-[1.25rem] sm:pr-[1.25rem] sm:box-border big:max-w-[90rem] big:self-center">
      <div className="self-stretch flex flex-col items-start justify-start gap-[4.75rem]">
        <div className="flex flex-row items-start justify-start relative gap-[0.63rem]">
          <img
            className="absolute my-0 mx-[!important] top-[0.75rem] left-[10.13rem] w-[8.72rem] h-[1.64rem] z-[0]"
            alt=""
            src="/leaf.svg"
          />
          <div className="relative tracking-[0.06em] leading-[2.34rem] font-black z-[1] md:text-[1.88rem]">
            NEW ARRIVALS
          </div>
        </div>
        <FashionCards />
      </div>
    </div>
  );
};

export default NewArrivalsSection;
