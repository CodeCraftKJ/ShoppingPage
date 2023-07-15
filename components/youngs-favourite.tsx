import type { NextPage } from "next";
import { useCallback } from "react";
import PanelContainer from "./panel-container";

const YoungsFavourite: NextPage = () => {
  const onExploreNow3Click = useCallback(() => {
    window.open("https://www.example.com/");
  }, []);

  const onArrowIcon3Click = useCallback(() => {
    window.open("https://www.example.com/");
  }, []);

  const onExploreNow4Click = useCallback(() => {
    window.open("https://www.example.com/");
  }, []);

  const onArrowIcon4Click = useCallback(() => {
    window.open("https://www.example.com/");
  }, []);

  return (
    <div className="self-stretch flex flex-col items-start justify-start gap-[4.88rem] max-w-[80.63rem] text-left text-[2.25rem] text-black font-poppins">
      <div className="relative w-[25.31rem] h-[2.38rem] overflow-hidden shrink-0 md:w-[21.25rem]">
        <img
          className="absolute top-[0.43rem] left-[15rem] w-[8.91rem] h-[1.5rem] md:left-[190]"
          alt=""
          src="/vector-91.svg"
        />
        <div className="absolute top-[0rem] left-[0rem] tracking-[0.06em] leading-[2.34rem] font-black md:text-[1.88rem]">
          Young’s Favourite
        </div>
      </div>
      <PanelContainer />
    </div>
  );
};

export default YoungsFavourite;
