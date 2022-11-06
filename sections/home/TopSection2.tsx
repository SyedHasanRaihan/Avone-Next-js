import React from "react";

const TopSection2 = () => {
    return (
        <div className="w-full grid grid-cols-1 md:grid-cols-4 cursor-pointer">
            <div className="relative md:col-span-2 max-w-[100%] max-h-[100%] overflow-hidden">
                <img
                    className="hover:scale-110 ease-in duration-300"
                    src="/assets/images/topSection2/cl1.webp"
                    alt=""
                />
                <div className="absolute bg-white text-center w-[70%] bottom-[30px] left-[15%] p-5 cursor-pointer">
                    <h3 className="font-bold tracking-wider uppercase text-sm md:text-base lg:text-lg">
                        kitchenware
                    </h3>
                </div>
            </div>
            <div className="flex flex-col md:col-span-1">
                <div className="relative  max-w-[100%] max-h-[100%] overflow-hidden">
                    <img
                        className="hover:scale-110 ease-in duration-300 w-full"
                        src="/assets/images/topSection2/cl2.webp"
                        alt=""
                    />
                    <div className="absolute bg-white text-center w-[70%] bottom-[30px] left-[15%] p-5 cursor-pointer">
                        <h3 className="font-bold tracking-wider uppercase text-sm md:text-base lg:text-lg">
                            pots
                        </h3>
                    </div>
                </div>
                <div className="relative md:col-span-1 max-w-[100%] max-h-[100%] overflow-hidden">
                    <img
                        className="hover:scale-110 ease-in duration-300 w-full"
                        src="/assets/images/topSection2/cl3.webp"
                        alt=""
                    />
                    <div className="absolute bg-white text-center w-[70%] bottom-[30px] left-[15%] p-5 cursor-pointer">
                        <h3 className="font-bold tracking-wider uppercase text-sm md:text-base lg:text-lg">
                            plates
                        </h3>
                    </div>
                </div>
            </div>
            <div className="relative md:col-span-1 max-w-[100%] max-h-[100%] overflow-hidden">
                <img
                    className="hover:scale-110 ease-in duration-300 w-full"
                    src="/assets/images/topSection2/decor.webp"
                    alt=""
                />
                <div className="absolute bg-white text-center w-[70%] bottom-[30px] left-[15%] p-5 cursor-pointer">
                    <h3 className="font-bold tracking-wider uppercase text-sm md:text-base lg:text-lg">
                        decor
                    </h3>
                </div>
            </div>
        </div>
    );
};

export default TopSection2;
