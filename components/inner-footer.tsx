import type { NextPage } from "next";
import Fashion from "./fashion";
import Links from "./links";

const InnerFooter: NextPage = () => {
  return (
    <div className="self-stretch flex flex-row items-start justify-between text-left text-[1.88rem] text-white font-poppins lg:flex-col lg:gap-[3.13rem]">
      <Fashion />
      <Links />
    </div>
  );
};

export default InnerFooter;
