import type { NextPage } from "next";
import DownloadApp from "./download-app";

const Vouchers: NextPage = () => {
  return (
    <div className="flex flex-col items-start justify-start text-left text-[2.25rem] text-black font-poppins">
      <DownloadApp />
    </div>
  );
};

export default Vouchers;
