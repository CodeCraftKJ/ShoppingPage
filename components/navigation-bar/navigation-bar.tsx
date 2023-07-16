import type { NextPage } from "next";
import { memo } from "react";
import NavigationInnerBar from "./navigation-inner-bar";

const NavigationBar: NextPage = memo(() => {
  return (
    <div className="self-stretch bg-white flex flex-col py-[2.19rem] px-[4.69rem] items-center justify-start lg:pl-[3.75rem] lg:pr-[3.75rem] lg:box-border md:pl-[2.19rem] md:pr-[2.19rem] md:box-border sm:pl-[1.25rem] sm:pr-[1.25rem] sm:box-border">
      <NavigationInnerBar />
    </div>
  );
});

export default NavigationBar;
