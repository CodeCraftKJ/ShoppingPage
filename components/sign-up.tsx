import type { NextPage } from "next";
import { useCallback } from "react";

const SignUp: NextPage = () => {
  const onSignUpClick = useCallback(() => {
    // Please sync "Page2" to the project
  }, []);

  return (
    <button
      className="cursor-pointer [border:none] py-[0.63rem] px-[1.06rem] bg-black rounded-[5.25px] flex flex-row items-center justify-center hover:bg-darkslategray"
      onClick={onSignUpClick}
    >
      <div className="relative text-[1.13rem] tracking-[-0.03em] font-medium font-poppins text-gray-100 text-left lg:text-[1rem] md:text-[0.94rem] sm:text-[0.88rem]">
        SIGN UP
      </div>
    </button>
  );
};

export default SignUp;
