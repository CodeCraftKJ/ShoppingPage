import type { NextPage } from "next";
import { memo } from "react";
import LinksContainer from "./links-container";
import SignUp from "./sign-up";

const MenuRight: NextPage = memo(() => {
  return (
    <div className="flex flex-row items-center justify-start gap-[2.53rem] lg:gap-[0.63rem] md:gap-[0.63rem]">
      <LinksContainer />
      <SignUp />
    </div>
  );
});

export default MenuRight;
