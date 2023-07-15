import type { NextPage } from "next";
import { memo } from "react";

type FavCardType = {
  cardImage?: string;
  arrowCard?: string;

  /** Action props */
  onExploreNow3Click?: () => void;
  onArrowIcon3Click?: () => void;
};

const FavCard: NextPage<FavCardType> = memo(
  ({ cardImage, onExploreNow3Click, arrowCard, onArrowIcon3Click }) => {
    return (
      <div className="flex-1 flex flex-col items-start justify-start gap-[1.31rem] text-left text-[1.5rem] text-black font-poppins md:flex-[unset] md:self-stretch">
        <img
          className="self-stretch relative rounded-mini max-w-full overflow-hidden h-auto shrink-0 object-cover"
          alt=""
          src={cardImage}
        />
        <div className="self-stretch flex flex-row items-center justify-between">
          <div className="flex flex-col items-start justify-start gap-[0.33rem]">
            <div className="relative tracking-[-0.04em] leading-[2.34rem] font-medium inline-block w-[16.17rem] h-[1.69rem] shrink-0 md:text-[1.25rem]">
              Trending on instagram
            </div>
            <button
              className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-[1.13rem] tracking-[-0.04em] leading-[2.34rem] font-medium font-poppins text-gray-300 text-left inline-block w-[6.84rem] h-[1.55rem] shrink-0 md:text-[0.94rem]"
              autoFocus
              onClick={onExploreNow3Click}
            >
              Explore Now!
            </button>
          </div>
          <img
            className="relative w-[1.57rem] h-[1.04rem] cursor-pointer"
            alt=""
            src={arrowCard}
            onClick={onArrowIcon3Click}
          />
        </div>
      </div>
    );
  }
);

export default FavCard;
