import type { NextPage } from "next";
import { memo } from "react";
import CommunityInner from "./community-inner";

const CreateAccount: NextPage = memo(() => {
  return (
    <div className="self-stretch bg-goldenrod flex flex-col py-[6.94rem] px-[21.33rem] items-center justify-center text-center text-[2.58rem] text-white font-poppins lg:pl-[12.5rem] lg:pr-[12.5rem] lg:box-border md:pl-[3.44rem] md:pr-[3.44rem] md:box-border">
      <CommunityInner />
    </div>
  );
});

export default CreateAccount;
