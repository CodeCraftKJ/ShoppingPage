import type { NextPage } from "next";

type FavCardType = {
  cardImage?: string;
};

const FavCard: NextPage<FavCardType> = ({ cardImage }: any) => {
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
          <div className="relative text-[1.13rem] tracking-[-0.04em] leading-[2.34rem] font-medium text-gray-300 inline-block w-[6.84rem] h-[1.55rem] shrink-0 md:text-[0.94rem]">
            Explore Now!
          </div>
        </div>
        <img
          className="relative w-[1.57rem] h-[1.04rem]"
          alt=""
          src="/arrow-4.svg"
        />
      </div>
    </div>
  );
};

export default FavCard;
