import type { NextPage } from "next";
import Vouchers from "./vouchers";

const AppDownload: NextPage = () => {
  return (
    <div className="self-stretch bg-white flex flex-row pt-[4.44rem] px-[10.25rem] pb-[5.88rem] items-center justify-center gap-[11rem] text-left text-[2.25rem] text-black font-poppins lg:flex-col md:flex-col">
      <Vouchers />
      <img
        className="relative w-[33.01rem] h-auto object-cover max-w-[false] md:min-w-[25rem] md:max-w-[90%] sm:min-w-[21.88rem]"
        alt=""
        src="/image-2@2x.png"
      />
    </div>
  );
};

export default AppDownload;
