import type { NextPage } from "next";
import Logos from "./logos";

const Fashion: NextPage = () => {
  return (
    <div className="flex flex-col items-start justify-center gap-[1.5rem] text-left text-[1.88rem] text-white font-poppins">
      <div className="relative tracking-[0.03em] font-black inline-block w-[9rem] h-[2.46rem] shrink-0">
        FASHION
      </div>
      <div className="relative text-[1.13rem] tracking-[0.02em] leading-[1.88rem] font-roboto text-gray-200 inline-block w-[19.46rem]">
        Complete your style with awesome clothes from us.
      </div>
      <Logos />
    </div>
  );
};

export default Fashion;
