import React from "react";

const Footer = () => {
    return (
        <div className="bg-[#211F1F] pb-6">
            <div className="md:container md:mx-auto flex flex-col justify-center px-10 md:px-24 lg:px-48 text-white">
                <div className="grid md:grid-cols-2 md:gap-8 lg:grid-cols-4 py-10">
                    <div className="col-span-1">
                        <h5 className="uppercase text-sm font-medium pb-3">
                            contact us
                        </h5>
                        <p className="text-xs tracking-wider">
                            55 Gallaxy Enque,
                            <br /> 2568 steet, 23568 NY
                        </p>
                        <p className="text-xs py-5">
                            <span className="text-xs font-medium">Phone</span>
                            :(440) 000 000 0000
                        </p>
                        <p className="text-xs">
                            <span className="text-xs font-medium">Email</span>
                            :sales@yousite.com
                        </p>
                    </div>
                    <div className="col-span-1">
                        <h5 className="uppercase text-sm font-medium pb-3">
                            Information
                        </h5>
                        <p className="text-xs tracking-wider">
                            55 Gallaxy Enque,
                            <br /> 2568 steet, 23568 NY
                        </p>
                        <p className="text-xs py-5">
                            <span className="text-xs font-medium">Phone</span>
                            :(440) 000 000 0000
                        </p>
                        <p className="text-xs">
                            <span className="text-xs font-medium">Email</span>
                            :sales@yousite.com
                        </p>
                    </div>
                    <div className="col-span-1">
                        <h5 className="uppercase text-sm font-medium pb-3">
                            help
                        </h5>
                        <p className="text-xs tracking-wider">
                            55 Gallaxy Enque,
                            <br /> 2568 steet, 23568 NY
                        </p>
                        <p className="text-xs py-5">
                            <span className="text-xs font-medium">Phone</span>
                            :(440) 000 000 0000
                        </p>
                        <p className="text-xs">
                            <span className="text-xs font-medium">Email</span>
                            :sales@yousite.com
                        </p>
                    </div>
                    <div className="col-span-1">
                        <h5 className="uppercase text-sm font-medium pb-3">
                            follow us
                        </h5>
                        <p className="text-xs tracking-wider">
                            55 Gallaxy Enque,
                            <br /> 2568 steet, 23568 NY
                        </p>
                        <p className="text-xs py-5">
                            <span className="text-xs font-medium">Phone</span>
                            :(440) 000 000 0000
                        </p>
                        <p className="text-xs">
                            <span className="text-xs font-medium">Email</span>
                            :sales@yousite.com
                        </p>
                    </div>
                </div>
                <div className="flex flex-col-reverse items-center gap-3 md:flex w-full md:justify-between">
                    <p className="text-xs tracking-wider">
                        © 2021 Avone. All Rights Reserved. Ecommerce Software by
                        Shopify
                    </p>
                    <div className="flex gap-1">
                        <img src="/assets/images/svg/american-express-1.svg" alt="" />
                        <img src="/assets/images/svg/ipay.svg" alt="" />
                        <img src="/assets/images/svg/discover.svg" alt="" />
                        <img src="/assets/images/svg/meta.svg" alt="" />
                        <img src="/assets/images/svg/gpay.svg" alt="" />
                        <img src="/assets/images/svg/mastercard.svg" alt="" />
                        <img src="/assets/images/svg/shopifypay.svg" alt="" />
                        <img src="/assets/images/svg/visa.svg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
