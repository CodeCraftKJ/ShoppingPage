import type { NextPage } from "next";
import { memo } from "react";

const Community: NextPage = memo(() => {
  return (
    <div className="self-stretch bg-goldenrod flex flex-col py-[6.94rem] px-[21.33rem] items-center justify-center text-center text-[2.58rem] text-white font-poppins lg:pl-[12.5rem] lg:pr-[12.5rem] lg:box-border md:pl-[3.44rem] md:pr-[3.44rem] md:box-border sm:pl-[1.25rem] sm:pr-[1.25rem] sm:box-border">
      <div className="self-stretch flex flex-col items-center justify-start gap-[1.13rem]">
        <div className="self-stretch flex flex-col items-center justify-center gap-[1.75rem]">
          <div className="self-stretch relative tracking-[0.03em] leading-[3.28rem] font-black md:text-[2.19rem] md:leading-[2.5rem] sm:text-[1.88rem] sm:leading-[1.88rem]">
            JOIN SHOPPING COMMUNITY TO GET MONTHLY PROMO
          </div>
          <div className="self-stretch relative text-[1.5rem] tracking-[0.03em] leading-[1.64rem] text-snow md:text-[0.94rem] sm:text-[0.81rem] sm:leading-[1rem]">
            Type your email down below and be young wild generation
          </div>
        </div>
        <div className="rounded-5xs-5 bg-white w-[26.24rem] h-[4.06rem] flex flex-row py-[0.5rem] px-[0.63rem] box-border items-center justify-start gap-[1.25rem] md:w-full">
          <input
            className="[border:none] font-poppins text-[1.13rem] bg-[transparent] flex-1 relative tracking-[0.03em] leading-[1.64rem] text-gray-700 text-left focus:[outline:none] md:text-[0.94rem] md:w-[calc(100%_-_120px);]"
            type="text"
            placeholder="Add your email here"
            maxLength
            minLength
          />
          <button className="cursor-pointer [border:none] py-[0.69rem] px-[1.63rem] bg-black rounded-md flex flex-row items-center justify-center sm:pl-[0.63rem] sm:pr-[0.63rem] sm:box-border">
            <div className="relative text-[1.55rem] tracking-[0.03em] leading-[1.64rem] capitalize font-medium font-poppins text-white text-left md:text-[1.25rem]">
              SEND
            </div>
          </button>
        </div>
      </div>
    </div>
  );
});

export default Community;
