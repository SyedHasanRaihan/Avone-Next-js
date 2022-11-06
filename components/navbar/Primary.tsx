import Image from "next/image";
import React, { useEffect, useState } from "react";

const Primary = () => {
  
    return (
        <div  className="absolute z-20 w-full px-8 py-6 xl:px-12 xl:py-6 bg-transparent duration-300 flex items-center justify-between">
            <div className="block lg:hidden">
                <div className="relative w-5 h-5">
                    <Image
                        src={`/assets/images/svg/menu.svg`}
                        objectFit="cover"
                        layout="fill"
                        alt=""
                    />
                </div>
            </div>
            <div className="flex items-center gap-16 xl:gap-24 duration-300">
                <div className="relative w-28 h-9">
                    <Image
                        src={`/assets/Avon.png`}
                        objectFit="cover"
                        layout="fill"
                        alt=""
                    />
                </div>

                <div className="hidden lg:flex gap-6 xl:gap-9 duration-300 font-semibold text-sm">
                    <h1 className="uppercase hover:cursor-pointer">Home</h1>
                    <h1 className="uppercase hover:cursor-pointer">shop</h1>
                    <h1 className="uppercase hover:cursor-pointer">features</h1>
                    <h1 className="uppercase hover:cursor-pointer">pages</h1>
                    <h1 className="uppercase hover:cursor-pointer">login</h1>
                </div>
            </div>

            <div className="flex gap-3">
                {/* User SVG */}
                <div className="cursor-pointer">
                    <div className="relative w-5 h-5">
                        <Image
                            src={`/assets/images/svg/user.svg`}
                            objectFit="cover"
                            layout="fill"
                            alt=""
                        />
                    </div>
                </div>
                {/* Heart SVG */}
                <div className="cursor-pointer hidden lg:block ">
                    <div className="relative w-5 h-5">
                        <Image
                            src={`/assets/images/svg/heart.svg`}
                            objectFit="cover"
                            layout="fill"
                            alt=""
                        />
                    </div>
                </div>
                {/* Cart SVG */}
                <div className="cursor-pointer relative">
                    <div className="relative w-5 h-5">
                        <Image
                            src={`/assets/images/svg/cart.svg`}
                            objectFit="cover"
                            layout="fill"
                            alt=""
                        />
                        <div className="absolute top-[-10px] right-[-10px] text-white bg-black text-center rounded-full text-[9px] w-4 h-4 pt-[2px]">
                            0
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Primary;
