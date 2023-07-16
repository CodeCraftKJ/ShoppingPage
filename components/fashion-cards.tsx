import type { NextPage } from "next";
import FashionCard from "./fashion-card";

const FashionCards: NextPage = () => {
  return (
    <div className="self-stretch flex flex-row items-start justify-around gap-[5.94rem] flex-wrap text-left text-[1.5rem] text-gray-900 font-poppins lg:flex-wrap lg:justify-around">
      <FashionCard
        fashionImage="/fashionimage@2x.png"
        cardName={`Hoodies & Sweetshirt`}
      />
      <FashionCard
        fashionImage="/fashionimage1@2x.png"
        cardName={`Coats & Parkas`}
      />
      <FashionCard
        fashionImage="/fashionimage2@2x.png"
        cardName={`Tees & T-Shirt`}
      />
    </div>
  );
};

export default FashionCards;
