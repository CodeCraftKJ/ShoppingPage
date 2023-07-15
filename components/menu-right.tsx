import type { NextPage } from "next";
import { memo } from "react";

type MenuRightType = {
  /** Action props */
  onCATALOGUEClick?: () => void;
  onFASHION1Click?: () => void;
  onFAVOURITEClick?: () => void;
  onLIFESTYLEClick?: () => void;
  onSignUpClick?: () => void;
};

const MenuRight: NextPage<MenuRightType> = memo(
  ({
    onCATALOGUEClick,
    onFASHION1Click,
    onFAVOURITEClick,
    onLIFESTYLEClick,
    onSignUpClick,
  }) => {
    return (
      <div className="flex flex-row items-center justify-start gap-[2.53rem] lg:gap-[0.63rem] md:gap-[0.63rem]">
        <div className="flex flex-row items-center justify-start gap-[3.05rem]">
          <div className="flex flex-row items-center justify-start gap-[3.06rem] lg:gap-[0.63rem] md:hidden">
            <button
              className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-[1.03rem] tracking-[0.01em] font-medium font-poppins text-gray-800 text-left inline-block w-[6.33rem] h-[1.69rem] shrink-0 lg:text-[0.81rem]"
              autoFocus
              onClick={onCATALOGUEClick}
            >
              CATALOGUE
            </button>
            <button
              className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-[1.03rem] tracking-[0.01em] font-medium font-poppins text-gray-800 text-left inline-block w-[4.5rem] h-[1.55rem] shrink-0 lg:text-[0.81rem]"
              onClick={onFASHION1Click}
            >
              FASHION
            </button>
            <button
              className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-[1.03rem] tracking-[0.01em] font-medium font-poppins text-gray-800 text-left inline-block w-[5.77rem] h-[1.55rem] shrink-0 lg:text-[0.81rem]"
              onClick={onFAVOURITEClick}
            >
              FAVOURITE
            </button>
            <button
              className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-[1.03rem] tracking-[0.01em] font-medium font-poppins text-gray-800 text-left inline-block w-[4.83rem] h-[1.5rem] shrink-0 lg:text-[0.81rem]"
              onClick={onLIFESTYLEClick}
            >
              LIFESTYLE
            </button>
          </div>
          <button className="cursor-pointer [border:none] p-0 bg-gray-100 relative rounded-[13.32px] w-[4.66rem] h-[4.66rem] overflow-hidden shrink-0 hidden md:flex md:rounded-[17.68px]">
            <div className="absolute top-[1.11rem] left-[1.05rem] rounded-[5.77px] bg-white shadow-[0px_1.3316326141357422px_1.78px_0.89px_rgba(0,_0,_0,_0.25)] w-[2.52rem] h-[2.41rem]" />
            <div className="absolute top-[1.69rem] left-[1.55rem] box-border w-[1.55rem] h-[0.17rem] border-t-[2.7px] border-solid border-black" />
            <div className="absolute top-[2.25rem] left-[1.55rem] box-border w-[1.55rem] h-[0.17rem] border-t-[2.7px] border-solid border-black" />
            <div className="absolute top-[2.8rem] left-[1.55rem] box-border w-[1.55rem] h-[0.17rem] border-t-[2.7px] border-solid border-black" />
          </button>
        </div>
        <button
          className="cursor-pointer [border:none] py-[0.63rem] px-[1.06rem] bg-black rounded-[5.25px] flex flex-row items-center justify-center hover:bg-darkslategray"
          onClick={onSignUpClick}
        >
          <div className="relative text-[1.13rem] tracking-[-0.03em] font-medium font-poppins text-gray-100 text-left lg:text-[1rem] md:text-[0.94rem] sm:text-[0.88rem]">
            SIGN UP
          </div>
        </button>
      </div>
    );
  }
);

export default MenuRight;
