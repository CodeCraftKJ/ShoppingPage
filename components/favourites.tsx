import type { NextPage } from "next";
import { useCallback } from "react";
import YoungsFavourite from "./youngs-favourite";

const Favourites: NextPage = () => {
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
    <div className="self-stretch bg-white flex flex-col py-[2.5rem] px-[4.69rem] items-center justify-center text-left text-[2.25rem] text-black font-poppins sm:pl-[1.25rem] sm:pr-[1.25rem] sm:box-border big:max-w-[90rem] big:self-center">
      <YoungsFavourite />
    </div>
  );
};

export default Favourites;
