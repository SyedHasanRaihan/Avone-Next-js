import React from "react";

const PotteryClass = () => {
    return (
        <div className="md:container md:mx-auto flex flex-col justify-center items-center md:px-24 lg:px-48">
            <div className="flex flex-col items-center mt-12 mb-7 py-6">
                <h3 className="uppercase text-xl font-medium">Pottery class</h3>
                <p className="w-[500px] text-center">
                    Would you like to learn to make pottery? <br/> Our classes will
                    help you quickly master the basics.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <img className="col-span-1 w-full" src="/assets/images/potteryClasss/1.webp" alt="" />
                <img className="col-span-1 w-full" src="/assets/images/potteryClasss/2.webp" alt="" />
                <img className="col-span-1 w-full" src="/assets/images/potteryClasss/3.webp" alt="" />
            </div>
            <div className="py-10">
            <button className="bg-[#47352B] hover:bg-[#25160E] duration-300 rounded-lg px-6 py-2 text-white">Learn More</button>
            </div>
        </div>
    );
};

export default PotteryClass;
