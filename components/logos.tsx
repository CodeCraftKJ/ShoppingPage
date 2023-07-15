import type { NextPage } from "next";
import { useCallback } from "react";

const Logos: NextPage = () => {
  const onGroupButtonClick = useCallback(() => {
    window.open("https://www.example.com/");
  }, []);

  const onGroupButton1Click = useCallback(() => {
    window.open("https://www.example.com/");
  }, []);

  const onGroupContainerClick = useCallback(() => {
    window.open("https://www.example.com/");
  }, []);

  const onGroupButton2Click = useCallback(() => {
    window.open("https://www.example.com/");
  }, []);

  return (
    <div className="flex flex-row items-start justify-start gap-[0.66rem]">
      <button
        className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[2.44rem] h-[2.44rem]"
        autoFocus
        onClick={onGroupButtonClick}
      >
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[11.25px] bg-khaki" />
        <img
          className="absolute h-[48.08%] w-[25.75%] top-[25%] right-[37.71%] bottom-[26.92%] left-[36.54%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/vector1.svg"
        />
      </button>
      <button
        className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[2.44rem] h-[2.44rem]"
        autoFocus
        onClick={onGroupButton1Click}
      >
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[11.25px] bg-khaki" />
        <img
          className="absolute h-[42.08%] w-[42.09%] top-[28.85%] right-[29.06%] bottom-[29.07%] left-[28.85%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/vector2.svg"
        />
      </button>
      <div
        className="relative w-[2.44rem] h-[2.44rem] cursor-pointer"
        onClick={onGroupContainerClick}
      >
        <button
          className="cursor-pointer [border:none] p-0 bg-khaki absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[11.25px]"
          autoFocus
        />
        <img
          className="absolute h-[39.05%] w-[48.08%] top-[30.77%] right-[21.15%] bottom-[30.18%] left-[30.77%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/vector3.svg"
        />
      </div>
      <button
        className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[2.44rem] h-[2.44rem]"
        autoFocus
        onClick={onGroupButton2Click}
      >
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[11.25px] bg-khaki" />
        <b className="absolute h-[53.85%] w-[44.23%] top-[11.54%] left-[30.77%] text-[1.13rem] tracking-[0.02em] leading-[1.88rem] inline-block font-roboto text-black text-left">
          in
        </b>
      </button>
    </div>
  );
};

export default Logos;
