import type { NextPage } from "next";
import Join from "./join";
import Form from "./form";

const Community: NextPage = () => {
  return (
    <div className="self-stretch bg-goldenrod flex flex-col py-[6.94rem] px-[21.33rem] items-center justify-center text-center text-[2.58rem] text-white font-poppins lg:pl-[12.5rem] lg:pr-[12.5rem] lg:box-border md:pl-[3.44rem] md:pr-[3.44rem] md:box-border sm:pl-[1.25rem] sm:pr-[1.25rem] sm:box-border">
      <div className="self-stretch flex flex-col items-center justify-start gap-[1.13rem]">
        <Join />
        <Form />
      </div>
    </div>
  );
};

export default Community;
