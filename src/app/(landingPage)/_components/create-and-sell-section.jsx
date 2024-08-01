import React from "react";
import bitcoin from "../../../assets/icones/bitcoin.png";
import cloud from "../../../assets/icones/cloud.png";
import sale from "../../../assets/icones/sale.png";
import wallet from "../../../assets/icones/wallet.png";
import Image from "next/image";

const CreateAndSell = () => {
  //
  const items = [
    {
      icon: wallet,
      title: "Set up your wallet",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    },
    {
      icon: cloud,
      title: "Add your NFT's",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    },
    {
      icon: sale,
      title: "Promote your NFT's",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    },
    {
      icon: bitcoin,
      title: "Sell your NFT's",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    },
  ];
  //
  return (
    <section className="flex flex-col items-start p-0 gap-9  w-full">
      <h1 className="font-bold text-[30px] leading-9 text-my_neutral-800">
        Create and Sell Now
      </h1>
      <div className="flex flex-row flex-wrap content-center items-center justify-center p-0 gap-6 w-full">
        {items.map((item, i) => (
          <div
            key={i}
            className="flex flex-col items-start p-6 gap-[10px] w-[282px] h-[226px] bg-my_neutral-50 rounded-[24px]"
          >
            {/*  */}
            <div className="h-[50px] w-[50px] bg-my_neutral-600 flex flex-row items-start p-[10px] gap-[10px] rounded-[8px]">
              <div className="relative h-[30px] w-[30px]">
                <Image
                  src={item.icon}
                  layout="fill"
                  objectFit="contain"
                  alt={item.title}
                />
              </div>
            </div>
            {/*  */}
            <h3 className="font-bold text-[20px] leading-7 text-my_neutral-800">
              {item.title}
            </h3>
            <p className="font-medium text-[14px] leading-5 text-my_neutral-400">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CreateAndSell;
