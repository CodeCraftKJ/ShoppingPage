import type { NextPage } from "next";
import { memo } from "react";
import DownloadApp from "./download-app";

const AppDownload: NextPage = memo(() => {
  return (
    <div className="self-stretch bg-white flex flex-row pt-[4.44rem] px-[10.25rem] pb-[5.88rem] items-center justify-center gap-[11rem] text-left text-[2.25rem] text-black font-poppins lg:flex-col md:flex-col">
      <div className="flex flex-col items-start justify-start">
        <DownloadApp />
      </div>
      <img
        className="relative w-[33.01rem] h-auto object-cover max-w-[false] md:min-w-[25rem] md:max-w-[90%] sm:min-w-[21.88rem]"
        alt=""
        src="/image-2@2x.png"
      />
    </div>
  );
});

export default AppDownload;
