import type { NextPage } from "next";
import { memo } from "react";
import FashionLogo from "./fashion-logo";
import MenuRight from "./menu-right";

const NavigationInnerBar: NextPage = memo(() => {
  return (
    <div className="self-stretch flex flex-row items-center justify-between">
      <FashionLogo />
      <MenuRight />
    </div>
  );
});

export default NavigationInnerBar;
