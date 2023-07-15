import type { NextPage } from "next";
import { useCallback } from "react";
import FavCard from "./fav-card";

const PanelContainer: NextPage = () => {
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
    <div className="self-stretch flex flex-row items-start justify-start gap-[2.19rem] text-left text-[1.5rem] text-black font-poppins md:flex-col">
      <FavCard
        cardImage="/rectangle-50@2x.png"
        onExploreNow3Click={onExploreNow3Click}
        arrowCard="/arrow-4.svg"
        onArrowIcon3Click={onArrowIcon3Click}
      />
      <FavCard
        cardImage="/rectangle-49@2x.png"
        onExploreNow3Click={onExploreNow4Click}
        arrowCard="/arrow-5.svg"
        onArrowIcon3Click={onArrowIcon4Click}
      />
    </div>
  );
};

export default PanelContainer;
