import type { NextPage } from "next";
import { useCallback } from "react";

const DownloadApp: NextPage = () => {
  const onFrameButtonClick = useCallback(() => {
    window.open("https://www.example.com/");
  }, []);

  const onFrameButton1Click = useCallback(() => {
    window.open("https://www.example.com/");
  }, []);

  return (
    <div className="flex flex-col items-start justify-start gap-[3.05rem] text-left text-[2.25rem] text-black font-poppins">
      <div className="flex flex-col items-start justify-start gap-[1.92rem]">
        <div className="relative tracking-[0.06em] leading-[150%] font-black md:text-[1.88rem] sm:text-[1.56rem]">
          <p className="m-0">{`DOWNLOAD APP &`}</p>
          <p className="m-0">GET THE VOUCHER!</p>
        </div>
        <div className="relative text-[1.13rem] tracking-[-0.04em] leading-[1.64rem] font-medium text-gray-400 inline-block w-[19.64rem] h-[2.86rem] shrink-0 md:text-[0.88rem] sm:text-[0.75rem]">
          <p className="m-0">Get 30% off for first transaction using</p>
          <p className="m-0">Rondovision mobile app for now.</p>
        </div>
      </div>
      <div className="flex flex-row items-start justify-start gap-[0.89rem]">
        <button
          className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-col items-start justify-start"
          onClick={onFrameButtonClick}
        >
          <img
            className="relative rounded-5xs-5 w-[9.56rem] h-[3.33rem] object-cover"
            alt=""
            src="/rectangle-55@2x.png"
          />
        </button>
        <button
          className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-col items-start justify-start"
          onClick={onFrameButton1Click}
        >
          <img
            className="relative rounded-5xs-5 w-[9.56rem] h-[3.33rem] object-cover"
            alt=""
            src="/rectangle-18@2x.png"
          />
        </button>
      </div>
    </div>
  );
};

export default DownloadApp;
