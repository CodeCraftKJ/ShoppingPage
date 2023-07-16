import type { NextPage } from "next";
import { memo } from "react";
import InnerFooter from "./inner-footer";

const Footer: NextPage = memo(() => {
  return (
    <div className="self-stretch bg-black flex flex-col pt-[5.56rem] px-[4.69rem] pb-[6.88rem] items-center justify-start text-left text-[1.13rem] text-white font-roboto sm:pl-[1.88rem] sm:pr-[1.88rem] sm:box-border">
      <InnerFooter />
    </div>
  );
});

export default Footer;
