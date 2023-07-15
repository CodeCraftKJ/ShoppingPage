import type { NextPage } from "next";
import { memo } from "react";

type FashionCardType = {
  nameCard?: string;
  fashionImage?: string;
  arrowCard?: string;

  /** Action props */
  onExploreNowClick?: () => void;
  onArrowIconClick?: () => void;
};

const FashionCard: NextPage<FashionCardType> = memo(
  ({
    nameCard,
    fashionImage,
    onExploreNowClick,
    onArrowIconClick,
    arrowCard,
  }) => {
    return (
      <div className="w-[22.69rem] h-[37.88rem] flex flex-col items-start justify-start gap-[1.31rem] text-left text-[1.5rem] text-gray-900 font-poppins sm:max-w-[95%]">
        <img
          className="self-stretch relative rounded-mini max-w-full overflow-hidden h-[33rem] shrink-0 object-cover"
          alt=""
          src={fashionImage}
        />
        <div className="flex flex-row items-center justify-start gap-[6.14rem]">
          <div className="flex flex-col items-start justify-start gap-[0.33rem]">
            <div className="relative tracking-[-0.04em] leading-[2.34rem] font-medium inline-block w-[15.05rem] h-[1.69rem] shrink-0">
              {nameCard}
            </div>
            <button
              className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-[1.13rem] tracking-[-0.04em] leading-[2.34rem] font-medium font-poppins text-gray-300 text-left inline-block w-[7.08rem] h-[1.55rem] shrink-0"
              autoFocus
              onClick={onExploreNowClick}
            >
              Explore Now!
            </button>
          </div>
          <img
            className="relative w-[1.57rem] h-[1.04rem] cursor-pointer"
            alt=""
            src={arrowCard}
            onClick={onArrowIconClick}
          />
        </div>
      </div>
    );
  }
);

export default FashionCard;
