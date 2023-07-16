import type { NextPage } from "next";

const InnerFooter: NextPage = () => {
  return (
    <div className="self-stretch flex flex-row items-start justify-between text-left text-[1.13rem] text-white font-roboto lg:flex-col lg:gap-[3.13rem]">
      <div className="flex flex-col items-start justify-center gap-[1.5rem]">
        <div className="relative text-[1.88rem] tracking-[0.03em] font-black font-poppins inline-block w-[9rem] h-[2.46rem] shrink-0">
          FASHION
        </div>
        <div className="relative tracking-[0.02em] leading-[1.88rem] text-gray-200 inline-block w-[19.46rem]">
          Complete your style with awesome clothes from us.
        </div>
        <div className="flex flex-row items-start justify-start gap-[0.66rem] text-black">
          <div className="relative w-[2.44rem] h-[2.44rem]">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[11.25px] bg-khaki" />
            <img
              className="absolute h-[48.08%] w-[25.75%] top-[25%] right-[37.71%] bottom-[26.92%] left-[36.54%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/vector1.svg"
            />
          </div>
          <div className="relative w-[2.44rem] h-[2.44rem]">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[11.25px] bg-khaki" />
            <img
              className="absolute h-[42.08%] w-[42.09%] top-[28.85%] right-[29.06%] bottom-[29.07%] left-[28.85%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/vector2.svg"
            />
          </div>
          <div className="relative w-[2.44rem] h-[2.44rem]">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[11.25px] bg-khaki" />
            <img
              className="absolute h-[39.05%] w-[48.08%] top-[30.77%] right-[21.15%] bottom-[30.18%] left-[30.77%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/vector3.svg"
            />
          </div>
          <div className="relative w-[2.44rem] h-[2.44rem]">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[11.25px] bg-khaki" />
            <b className="absolute h-[53.85%] w-[44.23%] top-[11.54%] left-[30.77%] tracking-[0.02em] leading-[1.88rem] inline-block">
              in
            </b>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-start justify-start gap-[8.81rem] text-gray-200 md:flex-col md:gap-[3.13rem]">
        <div className="flex flex-col items-start justify-start gap-[1.56rem]">
          <div className="relative tracking-[0.02em] leading-[1.88rem] text-gainsboro inline-block w-[4.94rem] h-[1.31rem] shrink-0">
            Company
          </div>
          <div className="relative tracking-[0.02em] leading-[1.88rem] inline-block w-[3.13rem] h-[1.31rem] shrink-0">
            About
          </div>
          <div className="relative tracking-[0.02em] leading-[1.88rem] inline-block w-[6.44rem] h-[1.31rem] shrink-0">
            Contact us
          </div>
          <div className="relative tracking-[0.02em] leading-[1.88rem] inline-block w-[4.13rem] h-[1.31rem] shrink-0">
            Support
          </div>
          <div className="relative tracking-[0.02em] leading-[1.88rem] inline-block w-[4.06rem] h-[1.31rem] shrink-0">
            Careers
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-[1.56rem] text-gray-500">
          <div className="relative tracking-[0.02em] leading-[1.88rem] text-gainsboro inline-block w-[5.44rem] h-[1.31rem] shrink-0">
            Quick Link
          </div>
          <div className="relative tracking-[0.02em] leading-[1.88rem] inline-block w-[7.81rem] h-[1.31rem] shrink-0">
            Share Location
          </div>
          <div className="relative tracking-[0.02em] leading-[1.88rem] inline-block w-[8.25rem] h-[1.31rem] shrink-0">
            Orders Tracking
          </div>
          <div className="relative tracking-[0.02em] leading-[1.88rem] inline-block w-[5.5rem] h-[1.31rem] shrink-0">
            Size Guide
          </div>
          <div className="relative tracking-[0.02em] leading-[1.88rem] inline-block w-[2.69rem] h-[1.31rem] shrink-0">
            FAQs
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-[1.5rem] text-whitesmoke-200">
          <div className="relative tracking-[0.02em] leading-[1.88rem] inline-block w-[2.81rem] h-[1.31rem] shrink-0">
            Legal
          </div>
          <div className="relative tracking-[0.02em] leading-[1.88rem] text-gray-200 inline-block w-[10.06rem] h-[1.31rem] shrink-0">{`Terms & conditions`}</div>
          <div className="relative tracking-[0.02em] leading-[1.88rem] text-gray-600 inline-block w-[7.25rem] h-[1.31rem] shrink-0">
            Privacy Policy
          </div>
        </div>
      </div>
    </div>
  );
};

export default InnerFooter;
