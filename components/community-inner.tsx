import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";

const CommunityInner: NextPage = () => {
  const router = useRouter();

  const onButtonClick = useCallback(() => {
    router.push("/");
  }, [router]);

  return (
    <div className="self-stretch flex flex-col items-center justify-start gap-[1.13rem] text-center text-[2.58rem] text-white font-poppins">
      <div className="self-stretch flex flex-col items-center justify-center gap-[1.75rem]">
        <div className="self-stretch relative tracking-[0.03em] leading-[3.28rem] font-black md:text-[2.19rem] md:leading-[2.5rem] sm:text-[1.88rem] sm:leading-[1.88rem]">
          Create An Account
        </div>
        <div className="self-stretch relative text-[1.5rem] tracking-[0.03em] leading-[1.64rem] text-snow md:text-[0.94rem] sm:text-[0.81rem] sm:leading-[1rem]">
          Create an account with us to enjoy all our services and perks!
        </div>
      </div>
      <div className="rounded-5xs-5 bg-white w-[26.24rem] h-[4.06rem] flex flex-row py-[0.5rem] px-[0.63rem] box-border items-center justify-start md:w-full">
        <input
          className="[border:none] font-poppins text-[1.13rem] bg-[transparent] flex-1 relative tracking-[0.03em] leading-[1.64rem] text-gray-700 text-left focus:[outline:none] md:text-[0.94rem]"
          type="text"
          placeholder="Email Address"
          maxLength
          minLength
        />
      </div>
      <div className="rounded-5xs-5 bg-white w-[26.24rem] h-[4.06rem] flex flex-row py-[0.5rem] px-[0.63rem] box-border items-center justify-start md:w-full">
        <input
          className="[border:none] font-poppins text-[1.13rem] bg-[transparent] flex-1 relative tracking-[0.03em] leading-[1.64rem] text-gray-700 text-left focus:[outline:none] md:text-[0.94rem]"
          type="password"
          placeholder="Password"
          maxLength
          minLength
        />
      </div>
      <button
        className="cursor-pointer [border:none] py-[0.69rem] px-[1.63rem] bg-black rounded-md w-[26.44rem] flex flex-row box-border items-center justify-center md:w-full"
        onClick={onButtonClick}
      >
        <div className="relative text-[1.55rem] tracking-[0.03em] leading-[1.64rem] capitalize font-medium font-poppins text-white text-left md:text-[1.25rem]">
          CREATE ACCOUNT
        </div>
      </button>
    </div>
  );
};

export default CommunityInner;
