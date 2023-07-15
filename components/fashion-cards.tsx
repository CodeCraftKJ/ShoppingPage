import type { NextPage } from "next";
import { useCallback } from "react";
import FashionCard from "./fashion-card";

const FashionCards: NextPage = () => {
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
    <div className="self-stretch flex flex-row items-start justify-around gap-[5.94rem] flex-wrap text-left text-[1.5rem] text-gray-900 font-poppins lg:flex-wrap lg:justify-around">
      <FashionCard
        nameCard={`Hoodies & Sweetshirt`}
        fashionImage="/fashionimage@2x.png"
        onExploreNowClick={onExploreNowClick}
        onArrowIconClick={onArrowIconClick}
        arrowCard="/arrow-1.svg"
      />
      <FashionCard
        nameCard={`Coats & Parkas`}
        fashionImage="/fashionimage1@2x.png"
        onExploreNowClick={onExploreNow1Click}
        onArrowIconClick={onArrowIcon1Click}
        arrowCard="/arrow-2.svg"
      />
      <FashionCard
        nameCard={`Tees & T-Shirt`}
        fashionImage="/fashionimage2@2x.png"
        onExploreNowClick={onExploreNow2Click}
        onArrowIconClick={onArrowIcon2Click}
        arrowCard="/arrow-3.svg"
      />
    </div>
  );
};

export default FashionCards;
