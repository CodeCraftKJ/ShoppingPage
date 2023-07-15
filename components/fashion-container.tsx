import type { NextPage } from "next";
import { useCallback } from "react";
import InnerFooter1 from "./inner-footer1";

const FashionContainer: NextPage = () => {
  const onAboutClick = useCallback(() => {
    window.open("https://www.example.com/");
  }, []);

  const onContactUsClick = useCallback(() => {
    window.open("https://www.example.com/");
  }, []);

  const onSupportClick = useCallback(() => {
    window.open("https://www.example.com/");
  }, []);

  const onCareersClick = useCallback(() => {
    window.open("https://www.example.com/");
  }, []);

  const onShareLocationClick = useCallback(() => {
    window.open("https://www.example.com/");
  }, []);

  const onOrdersTrackingClick = useCallback(() => {
    window.open("https://www.example.com/");
  }, []);

  const onSizeGuideClick = useCallback(() => {
    window.open("https://www.example.com/");
  }, []);

  const onFAQsClick = useCallback(() => {
    window.open("https://www.example.com/");
  }, []);

  const onTermsConditionsClick = useCallback(() => {
    window.open("https://www.example.com/");
  }, []);

  const onPrivacyPolicyClick = useCallback(() => {
    window.open("https://www.example.com/");
  }, []);

  return (
    <div className="self-stretch bg-black flex flex-col pt-[5.56rem] px-[4.69rem] pb-[6.88rem] items-center justify-start text-left text-[1.13rem] text-white font-roboto sm:pl-[1.88rem] sm:pr-[1.88rem] sm:box-border">
      <InnerFooter1 />
    </div>
  );
};

export default FashionContainer;
