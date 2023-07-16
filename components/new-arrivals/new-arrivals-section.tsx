import type { NextPage } from "next";
import { memo } from "react";
import NewArrivals from "./new-arrivals";

const NewArrivalsSection: NextPage = memo(() => {
  return (
    <div className="self-stretch bg-white flex flex-col pt-[3.25rem] px-[4.88rem] pb-[4.32rem] items-center justify-center text-left text-[2.25rem] text-black font-poppins md:pr-[4.88rem] md:box-border sm:pl-[1.25rem] sm:pr-[1.25rem] sm:box-border">
      <NewArrivals />
    </div>
  );
});

export default NewArrivalsSection;
