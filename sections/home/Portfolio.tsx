import React from "react";

const Portfolio = () => {
    return (
        <div className="md:container md:mx-auto flex flex-col justify-center md:px-24 lg:px-48">
            <div className="flex flex-col items-center mt-12 mb-7 py-6">
                <h3 className="uppercase text-xl font-medium">portfolio</h3>
                <p>See our gallery of beautiful, custom pottery.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3">
                <div className="col-span-1">
                    <div className="relative overflow-hidden group">
                        <img
                            className="max-w-[100%] w-full z-0"
                            src="/assets/images/portfolio/portfolio1.webp"
                            alt=""
                        />
                        <div className="absolute -bottom-20 group-hover:bottom-0 w-full duration-300 flex justify-center py-3 z-10 bg-white">
                            <h3 className="uppercase font-medium text-sm">
                                handle with care
                            </h3>
                        </div>
                    </div>
                    <div className="relative overflow-hidden group">
                        <img
                            className="max-w-[100%] w-full z-0"
                            src="/assets/images/portfolio/portfolio4.webp"
                            alt=""
                        />
                        <div className="absolute -bottom-20 group-hover:bottom-0 w-full duration-300 flex justify-center py-3 z-10 bg-white">
                            <h3 className="uppercase font-medium text-sm">
                                handle with care
                            </h3>
                        </div>
                    </div>
                    <div className="relative overflow-hidden group">
                        <img
                            className="max-w-[100%] w-full z-0"
                            src="/assets/images/portfolio/portfolio8.webp"
                            alt=""
                        />
                        <div className="absolute -bottom-20 group-hover:bottom-0 w-full duration-300 flex justify-center py-3 z-10 bg-white">
                            <h3 className="uppercase font-medium text-sm">
                                handle with care
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="col-span-1">
                <div className="relative overflow-hidden group">
                        <img
                            className="max-w-[100%] w-full z-0"
                            src="/assets/images/portfolio/portfolio2.webp"
                            alt=""
                        />
                        <div className="absolute -bottom-20 group-hover:bottom-0 w-full duration-300 flex justify-center py-3 z-10 bg-white">
                            <h3 className="uppercase font-medium text-sm">
                                handle with care
                            </h3>
                        </div>
                    </div>
                    <div className="relative overflow-hidden group">
                        <img
                            className="max-w-[100%] w-full z-0"
                            src="/assets/images/portfolio/portfolio5.webp"
                            alt=""
                        />
                        <div className="absolute -bottom-20 group-hover:bottom-0 w-full duration-300 flex justify-center py-3 z-10 bg-white">
                            <h3 className="uppercase font-medium text-sm">
                                handle with care
                            </h3>
                        </div>
                    </div>
                    <div className="relative overflow-hidden group">
                        <img
                            className="max-w-[100%] w-full z-0"
                            src="/assets/images/portfolio/portfolio6.jpg"
                            alt=""
                        />
                        <div className="absolute -bottom-20 group-hover:bottom-0 w-full duration-300 flex justify-center py-3 z-10 bg-white">
                            <h3 className="uppercase font-medium text-sm">
                                handle with care
                            </h3>
                        </div>
                    </div>
                    <div className="relative overflow-hidden group">
                        <img
                            className="max-w-[100%] w-full z-0"
                            src="/assets/images/portfolio/portfolio9.webp"
                            alt=""
                        />
                        <div className="absolute -bottom-20 group-hover:bottom-0 w-full duration-300 flex justify-center py-3 z-10 bg-white">
                            <h3 className="uppercase font-medium text-sm">
                                handle with care
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="col-span-1">
                <div className="relative overflow-hidden group">
                        <img
                            className="max-w-[100%] w-full z-0"
                            src="/assets/images/portfolio/portfolio3.webp"
                            alt=""
                        />
                        <div className="absolute -bottom-20 group-hover:bottom-0 w-full duration-300 flex justify-center py-3 z-10 bg-white">
                            <h3 className="uppercase font-medium text-sm">
                                handle with care
                            </h3>
                        </div>
                    </div>
                    <div className="relative overflow-hidden group">
                        <img
                            className="max-w-[100%] w-full z-0"
                            src="/assets/images/portfolio/portfolio7.webp"
                            alt=""
                        />
                        <div className="absolute -bottom-20 group-hover:bottom-0 w-full duration-300 flex justify-center py-3 z-10 bg-white">
                            <h3 className="uppercase font-medium text-sm">
                                handle with care
                            </h3>
                        </div>
                    </div>
                    <div className="relative overflow-hidden group">
                        <img
                            className="max-w-[100%] w-full z-0"
                            src="/assets/images/portfolio/portfolio10.webp"
                            alt=""
                        />
                        <div className="absolute -bottom-20 group-hover:bottom-0 w-full duration-300 flex justify-center py-3 z-10 bg-white">
                            <h3 className="uppercase font-medium text-sm">
                                handle with care
                            </h3>
                        </div>
                    </div>
                    <div className="relative overflow-hidden group">
                        <img
                            className="max-w-[100%] w-full z-0"
                            src="/assets/images/portfolio/portfolio11.webp"
                            alt=""
                        />
                        <div className="absolute -bottom-20 group-hover:bottom-0 w-full duration-300 flex justify-center py-3 z-10 bg-white">
                            <h3 className="uppercase font-medium text-sm">
                                handle with care
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
