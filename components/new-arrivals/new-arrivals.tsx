import type { NextPage } from "next";
import Title from "./title";
import FashionCards from "./fashion-cards";

const NewArrivals: NextPage = () => {
  return (
    <div className="self-stretch flex flex-col items-start justify-start gap-[4.75rem] text-left text-[2.25rem] text-black font-poppins">
      <Title />
      <FashionCards />
    </div>
  );
};

export default NewArrivals;
