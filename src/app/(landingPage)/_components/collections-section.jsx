import { cn } from "@/lib/utils";
import React from "react";
import Cyberpunk from "../../../assets/images/Cyberpunk.png";
import Durolost from "../../../assets/images/Rectangle.png";
import Space from "../../../assets/images/PSX.png";
import Snoop from "../../../assets/images/Snoop.png";
import CollectionCard from "./collections-card";

const CollectionSection = () => {
  //
  const categories = [
    "All categories",
    "Art",
    "Celebrities",
    "Gaming",
    "Sport",
  ];

  const collections = [
    {
      image: Cyberpunk,
      name: "CyberPunk",
      price: "68",
    },
    {
      image: Durolost,
      name: "Durolost Boll - Upper",
      price: "68",
    },
    {
      image: Space,
      name: "Space X Wiper",
      price: "68",
    },
    {
      image: Snoop,
      name: "Snoop Dogg",
      price: "68",
    },
  ];
  //
  return (
    <section className="flex flex-col items-start p-0 gap-9 w-full">
      {/* Ttle */}
      <h1 className="font-bold text-[30px] leading-9 text-my_neutral-800">
        Our Collections
      </h1>
      {/* categories list */}
      <div className=" flex flex-row justify-between items-center p-0 gap-[10px] w-full">
        <div className="flex flex-row flex-wrap items-start content-start p-0 gap-2 m-0  w-[565px]">
          {categories.map((category, i) => (
            <div
              key={i}
              className={cn(
                "cursor-pointer flex flex-row justify-center items-center py-[10px] px-[26px] gap-[10px] rounded-[12px] font-semibold text-[14px] leading-5",
                i === 0
                  ? "bg-my_neutral-800 text-white"
                  : "bg-my_neutral-50 text-my_neutral-800"
              )}
            >
              {category}
            </div>
          ))}
        </div>
        {/* View more */}
        <div className=" m-0  w-fit h-[20px] cursor-pointer font-semibold text-[14px] leading-5 underline text-my_neutral-500">
          View more
        </div>
      </div>
      {/* Collections list */}
      <div className="flex flex-row flex-wrap justify-center items-center content-center py-[10px] px-0 gap-6 w-full">
        {collections.map((collection, index) => (
          <CollectionCard key={index} {...collection} />
        ))}
      </div>
    </section>
  );
};

export default CollectionSection;
