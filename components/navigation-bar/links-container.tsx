import type { NextPage } from "next";

const LinksContainer: NextPage = () => {
  return (
    <div className="flex flex-row items-center justify-start gap-[3.05rem]">
      <div className="flex flex-row items-center justify-start gap-[3.06rem] lg:gap-[0.63rem] md:hidden">
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-[1.03rem] tracking-[0.01em] font-medium font-poppins text-gray-800 text-left inline-block w-[6.33rem] h-[1.69rem] shrink-0 lg:text-[0.81rem]">
          CATALOGUE
        </button>
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-[1.03rem] tracking-[0.01em] font-medium font-poppins text-gray-800 text-left inline-block w-[4.5rem] h-[1.55rem] shrink-0 lg:text-[0.81rem]">
          FASHION
        </button>
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-[1.03rem] tracking-[0.01em] font-medium font-poppins text-gray-800 text-left inline-block w-[5.77rem] h-[1.55rem] shrink-0 lg:text-[0.81rem]">
          FAVOURITE
        </button>
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-[1.03rem] tracking-[0.01em] font-medium font-poppins text-gray-800 text-left inline-block w-[4.83rem] h-[1.5rem] shrink-0 lg:text-[0.81rem]">
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
  );
};

export default LinksContainer;
