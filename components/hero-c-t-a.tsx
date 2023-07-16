import type { NextPage } from "next";

const HeroCTA: NextPage = () => {
  return (
    <div className="flex flex-col py-[0rem] pr-[0rem] pl-[1.73rem] items-start justify-start relative gap-[1.69rem] text-left text-[4.5rem] text-black font-poppins sm:pl-[0rem] sm:box-border">
      <div className="absolute my-0 mx-[!important] top-[12.56rem] right-[6.43rem] bg-khaki w-[23.24rem] h-[5.51rem] [transform:_rotate(-2deg)] [transform-origin:0_0] z-[0] md:max-w-[76%] md:max-h-[15%] md:top-[150] md:left-[15] sm:w-[23.19rem] sm:max-w-[75%] sm:max-h-[15%] sm:top-[105] sm:left-[20]" />
      <div className="absolute my-0 mx-[!important] top-[0.76rem] left-[-1.28rem] bg-white w-[21.79rem] h-[5.26rem] [transform:_rotate(-2deg)] [transform-origin:0_0] z-[1] md:max-w-[65%] md:max-h-[15%] md:top-[10] sm:max-w-[60%] sm:max-h-[15%] sm:top-[4] sm:left-[4]" />
      <div className="relative leading-[5.63rem] font-black z-[2] md:text-[3.13rem] md:leading-[4.38rem] sm:text-[2.5rem] sm:leading-[3.13rem]">
        <p className="m-0">LET’S</p>
        <p className="m-0">EXPLORE</p>
        <p className="m-0">UNIQUE</p>
        <p className="m-0">CLOTHES.</p>
      </div>
      <div className="relative text-[1.5rem] tracking-[-0.05em] text-gray-1000 inline-block w-[28.41rem] h-[2.72rem] shrink-0 z-[3] md:text-[1.06rem] md:w-full sm:text-[0.88rem]">
        Live for Influential and Innovative fashion!
      </div>
      <div className="flex flex-row items-center justify-start gap-[1.59rem] z-[4]">
        <img
          className="relative w-[8.91rem] h-[1.5rem] md:w-[6.25rem]"
          alt=""
          src="/vector-9.svg"
        />
        <button className="cursor-pointer [border:none] py-[0.81rem] px-[1.88rem] bg-black rounded-5xs-5 flex flex-row items-start justify-start hover:bg-darkslategray sm:pl-[0.94rem] sm:pr-[0.94rem] sm:box-border">
          <div className="relative text-[1.41rem] tracking-[-0.05em] font-medium font-poppins text-white text-left md:text-[0.81rem] sm:text-[0.94rem]">
            Shop Now
          </div>
        </button>
      </div>
    </div>
  );
};

export default HeroCTA;
