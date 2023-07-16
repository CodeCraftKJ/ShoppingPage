import type { NextPage } from "next";
import { memo, useCallback } from "react";
import { useRouter } from "next/router";

const FashionLogo: NextPage = memo(() => {
  const router = useRouter();

  const onFashionLogoClick = useCallback(() => {
    router.push("/");
  }, [router]);

  return (
    <button
      className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-center justify-start gap-[0.61rem]"
      onClick={onFashionLogoClick}
    >
      <img
        className="relative w-[1.47rem] h-[1.36rem] lg:w-[1.19rem] md:w-[0.94rem]"
        alt=""
        src="/vector.svg"
      />
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-[1.88rem] tracking-[0.03em] font-black font-poppins text-black text-left inline-block lg:text-[1.56rem] md:text-[1.25rem]">
        FASHION
      </button>
    </button>
  );
});

export default FashionLogo;
