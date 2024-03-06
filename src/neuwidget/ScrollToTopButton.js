import React, {useEffect, useState} from "react";
import "./ScrollToTopButton.css";

const ScrollToTopButton = ({text}) => {

    const [isVisible, setIsVisible] = useState(false);

    const clickToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    useEffect(() => {
        const toggleVisibility = () => {
            setIsVisible(window.scrollY > 100)
        };

        window.addEventListener("scroll", toggleVisibility);

        return () => {
            window.removeEventListener("scroll", toggleVisibility);
        }
    }, []);

    return (
        <div className="scroll-to-top">
            {isVisible && (
                <button
                    className="scroll-to-top-button"
                    onClick={clickToTop}>
                    {text}
                </button>
            )}
        </div>

    );
};

export default ScrollToTopButton;
