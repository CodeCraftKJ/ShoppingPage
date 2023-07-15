import type { NextPage } from "next";
import { useCallback } from "react";

const Form: NextPage = () => {
  const onButton1Click = useCallback(() => {
    window.open("https://www.example.com/");
  }, []);

  return (
    <div className="rounded-5xs-5 bg-white w-[26.24rem] h-[4.06rem] flex flex-row py-[0.5rem] px-[0.63rem] box-border items-center justify-start gap-[1.25rem] md:w-full">
      <input
        className="[border:none] font-poppins text-[1.13rem] bg-[transparent] flex-1 relative tracking-[0.03em] leading-[1.64rem] text-gray-700 text-left focus:[outline:none] md:text-[0.94rem] md:w-[calc(100%_-_120px);]"
        type="text"
        placeholder="Add your email here"
        maxLength
        minLength
      />
      <button
        className="cursor-pointer [border:none] py-[0.69rem] px-[1.63rem] bg-black rounded-md flex flex-row items-center justify-center sm:pl-[0.63rem] sm:pr-[0.63rem] sm:box-border"
        onClick={onButton1Click}
      >
        <div className="relative text-[1.55rem] tracking-[0.03em] leading-[1.64rem] capitalize font-medium font-poppins text-white text-left md:text-[1.25rem]">
          SEND
        </div>
      </button>
    </div>
  );
};

export default Form;
