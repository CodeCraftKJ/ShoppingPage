import type { NextPage } from "next";

const hero: NextPage = () => {
  return (
    <div className="self-stretch bg-goldenrod flex flex-col py-[111px] px-[341.2900085449219px] items-center justify-center text-center text-[41.25px] text-white font-poppins lg:pl-[200px] lg:pr-[200px] lg:box-border md:pl-[55px] md:pr-[55px] md:box-border">
      <div className="self-stretch flex flex-col items-center justify-start gap-[18px]">
        <div className="self-stretch flex flex-col items-center justify-center gap-[28px]">
          <div className="self-stretch relative tracking-[0.03em] leading-[52.51px] font-black md:text-16xl md:leading-[40px] sm:text-11xl sm:leading-[30px]">
            Create An Account
          </div>
          <div className="self-stretch relative text-5xl tracking-[0.03em] leading-[26.25px] text-snow md:text-mini sm:text-smi sm:leading-[16px]">
            Create an account with us to enjoy all our services and perks!
          </div>
        </div>
        <div className="rounded-5xs-5 bg-white w-[419.77px] h-[65px] flex flex-row py-2 px-2.5 box-border items-center justify-start md:w-full">
          <input
            className="[border:none] font-poppins text-lg bg-[transparent] flex-1 relative tracking-[0.03em] leading-[26.25px] text-gray-700 text-left focus:[outline:none] md:text-mini"
            type="text"
            placeholder="Email Address"
          />
        </div>
        <div className="rounded-5xs-5 bg-white w-[419.77px] h-[65px] flex flex-row py-2 px-2.5 box-border items-center justify-start md:w-full">
          <input
            className="[border:none] font-poppins text-lg bg-[transparent] flex-1 relative tracking-[0.03em] leading-[26.25px] text-gray-700 text-left focus:[outline:none] md:text-mini"
            type="password"
            placeholder="Password"
          />
        </div>
        <button className="cursor-pointer [border:none] py-[11px] px-[26px] bg-black rounded-md w-[423px] flex flex-row box-border items-center justify-center md:w-full">
          <div className="relative text-[24.75px] tracking-[0.03em] leading-[26.25px] capitalize font-medium font-poppins text-white text-left md:text-xl">
            CREATE ACCOUNT
          </div>
        </button>
      </div>
    </div>
  );
};

export default hero;
