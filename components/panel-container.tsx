import type { NextPage } from "next";
import FavCard from "./fav-card";

const PanelContainer: NextPage = () => {
  return (
    <div className="self-stretch flex flex-row items-start justify-start gap-[2.19rem] text-left text-[1.5rem] text-black font-poppins md:flex-col">
      <FavCard cardImage="/rectangle-50@2x.png" />
      <FavCard cardImage="/rectangle-49@2x.png" />
    </div>
  );
};

export default PanelContainer;
