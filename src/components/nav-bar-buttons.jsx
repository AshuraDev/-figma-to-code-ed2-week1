"use client";
import { Button } from "@/components/ui/button";

const NavBarButtons = () => {
  return (
    <div className="flex flex-row items-center p-0 gap-5 w-[300px] h-[44px]">
      <button className="flex flex-row justify-center items-center py-1 px-[26px] bg-transparent font-semibold text-my_neutral-800 text-[16px] leading-6 border-r-2 border-r-my_neutral-800 rounded-none shadow-none">
        Sign up
      </button>

      <Button className="flex flex-row justify-center items-center py-[10px] px-[26px] bg-my_neutral-800 font-semibold text-white text-[16px] leading-6 rounded-[42px] shadow-none">
        Connect Wallet
      </Button>
    </div>
  );
};

export default NavBarButtons;
