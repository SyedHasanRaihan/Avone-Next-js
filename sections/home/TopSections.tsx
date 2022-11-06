import React from "react";
import Image from "next/image";
// import "../../styles/topSection/topSection.css";

const TopSections = () => {
    return (
        <div className="block md:flex">
            <div className="relative">
                {/* <div className="relative w-[500px] md:w-[700px] lg:w-[1000px]">
                    <Image
                        src={`/assets/images/topSection/topSection1.png`}
                        width="1000"
                        height="1000"
                        objectFit="cover"
                        // layout="fill"
                        alt=""
                    />
                </div> */}
                <div className="w-[100%]  ">
                    <img
                        src="/assets/images/topSection/topSection1.png"
                        alt=""
                    />
                </div>
                <div className="absolute bg-white text-center w-[70%] bottom-[5%] left-[15%] p-5 cursor-pointer">
                    <h3 className="font-bold tracking-wider uppercase text-sm md:text-base lg:text-lg">
                        Stylish and handmade
                    </h3>
                    <p>New Collection 2021</p>
                </div>
            </div>
            <div className="relative">
                {/* <div className="relative w-[500px] md:w-[700px] lg:w-[1000px]">
                    <Image
                        src={`/assets/images/topSection/topSection2.png`}
                        width="1000"
                        height="1000"
                        objectFit="cover"
                        // layout="fill"
                        alt=""
                    />
                </div> */}
                <div className="w-full md:w-[100%] ">
                    <img
                        src="/assets/images/topSection/topSection2.png"
                        alt=""
                    />
                </div>
                <div className="absolute bg-white text-center w-[70%] bottom-[5%] left-[15%] p-5 cursor-pointer">
                    <h3 className="font-bold tracking-wider uppercase text-sm md:text-base lg:text-lg">
                        authentic and elegent design
                    </h3>
                    <p>New Collection 2021</p>
                </div>
            </div>
        </div>
    );
};

export default TopSections;
