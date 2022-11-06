import React, { useEffect, useState } from "react";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar";

const Default = ({ children }: { children: any }) => {
    const [toggleNavbar, setToggleNavbar] = useState(false);

    useEffect(() => {
        const handleToggleNavbar = () => {
            if (window.scrollY > 20) {
                setToggleNavbar(true);
            } else {
                setToggleNavbar(false);
            }
        };
        window.addEventListener("scroll", handleToggleNavbar);
    });

    return (
        <div>
            {toggleNavbar ? <Navbar.StickyNavbar /> : <Navbar.Primary />}
            {children}
            <Footer />
        </div>
    );
};

export default Default;
