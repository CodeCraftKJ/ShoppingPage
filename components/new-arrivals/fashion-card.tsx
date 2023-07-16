import type { NextPage } from "next";
import { memo } from "react";

type FashionCardType = {
  fashionImage?: string;
  cardName?: string;
};

const FashionCard: NextPage<FashionCardType> = memo(
  ({ fashionImage, cardName }: FashionCardType) => {
    return (
      <div className="w-[22.69rem] h-[37.88rem] flex flex-col items-start justify-start gap-[1.31rem] text-left text-[1.5rem] text-gray-900 font-poppins sm:max-w-[95%]">
        <img
          className="self-stretch relative rounded-mini max-w-full overflow-hidden h-[33rem] shrink-0 object-cover"
          alt=""
          src={fashionImage}
        />
        <div className="self-stretch flex flex-row items-center justify-between">
          <div className="flex flex-col items-start justify-start gap-[0.33rem]">
            <div className="relative tracking-[-0.04em] leading-[2.34rem] font-medium inline-block w-[15.05rem] h-[1.69rem] shrink-0">
              {cardName}
            </div>
            <div className="relative text-[1.13rem] tracking-[-0.04em] leading-[2.34rem] font-medium text-gray-300 inline-block w-[7.08rem] h-[1.55rem] shrink-0">
              Explore Now!
            </div>
          </div>
          <img
            className="relative w-[1.57rem] h-[1.04rem]"
            alt=""
            src="/arrow-1.svg"
          />
        </div>
      </div>
    );
  }
);

export default FashionCard;
