import Image from "next/image";
import React from "react";
import eth from "../../../assets/images/ethereum-ellipse.png";

const CollectionCard = ({ image, name, price }) => {
  return (
    <div className="flex flex-col items-center p-3 gap-4 w-[282px] h-[341px] rounded-[20px] border-my_neutral-100 border">
      <div className="relative w-[258px] h-[213px]">
        <Image src={image} layout="fill" objectFit="cover" alt={name} />
      </div>
      <div className="flex flex-row justify-between items-center p-0 gap-3 h-[28px] w-[258px]">
        {/*  */}
        <div className="m-0 h-6">
          <h3 className="font-bold text-[16px] leading-6 text-my_neutral-800">
            {name}
          </h3>
        </div>
        {/*  */}
        <div className="flex flex-row items-center p-0 gap-[2px] m-0 w-12 h-7">
          <div className="relative h-6 w-6">
            <Image src={eth} layout="fill" objectFit="contain" alt={name} />
          </div>
          <span className="font-bold text-lg leading-7 text-my_neutral-800">
            {price}
          </span>
        </div>
      </div>
      {/*  */}
      <button className="flex flex-row justify-center items-center py-[10px] px-[26px] gap-[10px] w-[258px] h-11 rounded-[12px] border border-my_neutral-800 font-semibold text-base leading-6 text-my_neutral-800">
        Place a Bid
      </button>
    </div>
  );
};

export default CollectionCard;
