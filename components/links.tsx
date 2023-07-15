import type { NextPage } from "next";

type LinksType = {
  /** Action props */
  onAboutClick?: () => void;
  onContactUsClick?: () => void;
  onSupportClick?: () => void;
  onCareersClick?: () => void;
  onShareLocationClick?: () => void;
  onOrdersTrackingClick?: () => void;
  onSizeGuideClick?: () => void;
  onFAQsClick?: () => void;
  onTermsConditionsClick?: () => void;
  onPrivacyPolicyClick?: () => void;
};

const Links: NextPage<LinksType> = ({
  onAboutClick,
  onContactUsClick,
  onSupportClick,
  onCareersClick,
  onShareLocationClick,
  onOrdersTrackingClick,
  onSizeGuideClick,
  onFAQsClick,
  onTermsConditionsClick,
  onPrivacyPolicyClick,
}) => {
  return (
    <div className="flex flex-row items-start justify-start gap-[8.81rem] text-left text-[1.13rem] text-gray-200 font-roboto md:flex-col md:gap-[3.13rem]">
      <div className="flex flex-col items-start justify-start gap-[1.56rem]">
        <div className="relative tracking-[0.02em] leading-[1.88rem] text-gainsboro inline-block w-[4.94rem] h-[1.31rem] shrink-0">
          Company
        </div>
        <a
          className="[text-decoration:none] relative tracking-[0.02em] leading-[1.88rem] text-[inherit] inline-block w-[3.13rem] h-[1.31rem] shrink-0"
          href="https://www.example.com"
          target="_blank"
          onClick={onAboutClick}
        >
          About
        </a>
        <a
          className="[text-decoration:none] relative tracking-[0.02em] leading-[1.88rem] text-[inherit] inline-block w-[6.44rem] h-[1.31rem] shrink-0"
          href="https://www.example.com"
          target="_blank"
          onClick={onContactUsClick}
        >
          Contact us
        </a>
        <a
          className="[text-decoration:none] relative tracking-[0.02em] leading-[1.88rem] text-[inherit] inline-block w-[4.13rem] h-[1.31rem] shrink-0"
          href="https://www.example.com"
          target="_blank"
          onClick={onSupportClick}
        >
          Support
        </a>
        <a
          className="[text-decoration:none] relative tracking-[0.02em] leading-[1.88rem] text-[inherit] inline-block w-[4.06rem] h-[1.31rem] shrink-0"
          href="https://www.example.com"
          target="_blank"
          onClick={onCareersClick}
        >
          Careers
        </a>
      </div>
      <div className="flex flex-col items-start justify-start gap-[1.56rem] text-gray-500">
        <div className="relative tracking-[0.02em] leading-[1.88rem] text-gainsboro inline-block w-[5.44rem] h-[1.31rem] shrink-0">
          Quick Link
        </div>
        <a
          className="[text-decoration:none] relative tracking-[0.02em] leading-[1.88rem] text-[inherit] inline-block w-[7.81rem] h-[1.31rem] shrink-0"
          href="https://www.example.com"
          target="_blank"
          onClick={onShareLocationClick}
        >
          Share Location
        </a>
        <a
          className="[text-decoration:none] relative tracking-[0.02em] leading-[1.88rem] text-[inherit] inline-block w-[8.25rem] h-[1.31rem] shrink-0"
          href="https://www.example.com"
          target="_blank"
          onClick={onOrdersTrackingClick}
        >
          Orders Tracking
        </a>
        <a
          className="[text-decoration:none] relative tracking-[0.02em] leading-[1.88rem] text-[inherit] inline-block w-[5.5rem] h-[1.31rem] shrink-0"
          href="https://www.example.com"
          target="_blank"
          onClick={onSizeGuideClick}
        >
          Size Guide
        </a>
        <a
          className="[text-decoration:none] relative tracking-[0.02em] leading-[1.88rem] text-[inherit] inline-block w-[2.69rem] h-[1.31rem] shrink-0"
          href="https://www.example.com"
          target="_blank"
          onClick={onFAQsClick}
        >
          FAQs
        </a>
      </div>
      <div className="flex flex-col items-start justify-start gap-[1.5rem] text-whitesmoke-200">
        <div className="relative tracking-[0.02em] leading-[1.88rem] inline-block w-[2.81rem] h-[1.31rem] shrink-0">
          Legal
        </div>
        <a
          className="[text-decoration:none] relative tracking-[0.02em] leading-[1.88rem] text-gray-200 inline-block w-[10.06rem] h-[1.31rem] shrink-0"
          href="https://www.example.com"
          target="_blank"
          onClick={onTermsConditionsClick}
        >{`Terms & conditions`}</a>
        <a
          className="[text-decoration:none] relative tracking-[0.02em] leading-[1.88rem] text-gray-600 inline-block w-[7.25rem] h-[1.31rem] shrink-0"
          href="https://www.example.com/"
          target="_blank"
          onClick={onPrivacyPolicyClick}
        >
          Privacy Policy
        </a>
      </div>
    </div>
  );
};

export default Links;
