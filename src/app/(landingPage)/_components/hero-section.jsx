import Image from "next/image";
import ArrowIcon from "../../../assets/icones/arrow.svg";
import Hero_img1 from "../../../assets/images/8machine-_-GVAYgLlpeZ8-unsplash.png";
import Hero_img2 from "../../../assets/images/TOP-10-NFT-TOKENS-TO-KNOW-IN-2023-.png";
import Hero_img3 from "../../../assets/images/Stars.png";

const HeroSection = () => {
  return (
    <section className="w-full h-[607px] relative max-md:h-[981px] overflow-hidden">
      {/* text div */}
      <div className=" flex flex-col items-start p-0 gap-[52px] absolute w-[787px] h-[390px] left-0 top-0 md:flex-col max-sm:h-[981px]">
        <h1 className="font-normal text-[120px] leading-[108px] text-my_neutral-600 max-md-text-[82px] max-md:leading-[82px] max-sm:text-[52px]">
          See the NFT<br/>new world
        </h1>
        <p className="font-semibold text-[16px] leading-6 text-my_neutral-400 max-md-text-[14px] max-md:leading-[20px]">
          Vorem ipsum dolor sit amet, consectetur adipiscing <br />
          elit. Etiam eu turpis molestie, di
        </p>
        <button className="flex flex-row items-center p-0 gap-4 w-[165px] h-[48px]">
          <span className="font-semibold text-[16px] leading-6 text-my_neutral-600">
            Discover vow
          </span>
          <div className="relative w-[48px] h-[48px] flex flex-row items-start p-[14px] gap-[10px] rounded-[82px] border-my_neutral-600 border">
            <Image
              src={ArrowIcon}
              layout="fill"
              objectFit="contain"
              alt="arrow"
            />
          </div>
        </button>
      </div>
      {/* images div */}
      <div className="flex flex-col items-start p-0 gap-[10px] absolute w-[596.89px] h-[588px] left-[603px] top-[19px] max-md:w-[596.79px] max-md:h-[588.19px] max-md:left-[calc(50%-596.79px/2+0.5px)] max-md:top-[393px]">
        <div className="absolute w-[287.58px] h-[442.29px] left-0 top-[145.9px] rounded-[164px] overflow-hidden">
          <div className="relative h-full w-full top-0">
            <Image
              src={Hero_img1}
              layout="fill"
              objectFit="cover"
              alt="Hero-image"
            />
          </div>
        </div>
        <div className="absolute w-[157.44px] h-[116.49px] left-[151.98px] top-14.56px overflow-hidden">
          <div className=" absolute left-[7.15%] right-[7.58%] top-[15.41%] bottom-[14.95%]">
            <div className="relative h-full w-full top-0">
              <Image
                src={Hero_img3}
                layout="fill"
                objectFit="cover"
                alt="Hero-image"
              />
            </div>
          </div>
        </div>
        <div className="absolute w-[287.58px] h-[442.29px] left-[309.32px] top-0 rounded-[184px] bg-hero-img-2 overflow-hidden">
          <div className="relative h-full w-full top-0">
            <Image
              src={Hero_img2}
              layout="fill"
              objectFit="cover"
              alt="Hero-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
