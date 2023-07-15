import type { NextPage } from "next";
import Logos1 from "./logos1";

const Fashion1: NextPage = () => {
  return (
    <div className="flex flex-col items-start justify-center gap-[1.5rem] text-left text-[1.13rem] text-white font-roboto">
      <div className="relative text-[1.88rem] tracking-[0.03em] font-black font-poppins inline-block w-[9rem] h-[2.46rem] shrink-0">
        FASHION
      </div>
      <div className="relative tracking-[0.02em] leading-[1.88rem] text-gray-200 inline-block w-[19.46rem]">
        Complete your style with awesome clothes from us.
      </div>
      <Logos1 />
    </div>
  );
};

export default Fashion1;
