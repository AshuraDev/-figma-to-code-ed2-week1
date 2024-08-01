import React from "react";

const BuidProfil = () => {
  return (
    <section className="relative flex flex-col items-center justify-center py-18 px-0 w-full h-[340px] rounded-2xl overflow-hidden">
      <div className="absolute inset-0 bg-[url('./../assets/images/bic.png')] bg-cover bg-center bg-no-repeat"></div>
      <div className="absolute h-full w-full flex flex-col items-center content-center justify-center gap-7">
        <h1 className="text-[64px] font-medium leading-10 text-white max-md:text-[46px] max-sm:text-[28px]">
          Build your NFT profile
        </h1>
        <p className="text-[20px] font-semibold leading-7 text-white max-md:text-[18px] max-sm:text-[12px]">
          Join almost 10k NFT profiles on Digit !
        </p>
        <button className="flex flex-row content-center items-center py-[10px] px-[26px] gap-[10px] bg-white rounded-[42px]">
          Sign up now
        </button>
      </div>
    </section>
  );
};

export default BuidProfil;
