import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import FashionLogo from "./fashion-logo";
import MenuRight from "./menu-right";

const NavigationBar: NextPage = () => {
  const router = useRouter();

  const onFashionLogoClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onCATALOGUEClick = useCallback(() => {
    window.open("https://www.example.com/");
  }, []);

  const onFASHION1Click = useCallback(() => {
    window.open("https://www.example.com/");
  }, []);

  const onFAVOURITEClick = useCallback(() => {
    window.open("https://www.example.com/");
  }, []);

  const onLIFESTYLEClick = useCallback(() => {
    window.open("https://www.example.com/");
  }, []);

  const onSignUpClick = useCallback(() => {
    router.push("/page2");
  }, [router]);

  return (
    <div className="self-stretch bg-white flex flex-col py-[2.19rem] px-[4.69rem] items-center justify-start lg:pl-[3.75rem] lg:pr-[3.75rem] lg:box-border md:pl-[2.19rem] md:pr-[2.19rem] md:box-border sm:pl-[1.25rem] sm:pr-[1.25rem] sm:box-border">
      <div className="self-stretch flex flex-row items-center justify-between">
        <FashionLogo
          onFashionLogoClick={onFashionLogoClick}
          vector="/vector.svg"
        />
        <MenuRight
          onCATALOGUEClick={onCATALOGUEClick}
          onFASHION1Click={onFASHION1Click}
          onFAVOURITEClick={onFAVOURITEClick}
          onLIFESTYLEClick={onLIFESTYLEClick}
          onSignUpClick={onSignUpClick}
        />
      </div>
    </div>
  );
};

export default NavigationBar;
