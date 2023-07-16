import type { NextPage } from "next";

const Title: NextPage = () => {
  return (
    <div className="flex flex-row items-start justify-start relative gap-[0.63rem] text-left text-[2.25rem] text-black font-poppins">
      <img
        className="absolute my-0 mx-[!important] top-[0.75rem] left-[10.13rem] w-[8.72rem] h-[1.64rem] z-[0]"
        alt=""
        src="/leaf.svg"
      />
      <div className="relative tracking-[0.06em] leading-[2.34rem] font-black z-[1] md:text-[1.88rem]">
        NEW ARRIVALS
      </div>
    </div>
  );
};

export default Title;
