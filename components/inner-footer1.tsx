import type { NextPage } from "next";
import { useCallback } from "react";
import Fashion1 from "./fashion1";
import Links from "./links";

const InnerFooter1: NextPage = () => {
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
    <div className="self-stretch flex flex-row items-start justify-between text-left text-[1.13rem] text-white font-roboto lg:flex-col lg:gap-[3.13rem]">
      <Fashion1 />
      <Links
        onAboutClick={onAboutClick}
        onContactUsClick={onContactUsClick}
        onSupportClick={onSupportClick}
        onCareersClick={onCareersClick}
        onShareLocationClick={onShareLocationClick}
        onOrdersTrackingClick={onOrdersTrackingClick}
        onSizeGuideClick={onSizeGuideClick}
        onFAQsClick={onFAQsClick}
        onTermsConditionsClick={onTermsConditionsClick}
        onPrivacyPolicyClick={onPrivacyPolicyClick}
      />
    </div>
  );
};

export default InnerFooter1;
