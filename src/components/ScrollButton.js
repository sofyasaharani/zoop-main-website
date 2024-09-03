/** @format */

import React, { useState, useEffect } from "react";
import "../styles/global.css";
import { FaPhone } from "react-icons/fa"; // Import phone icon
import { IoIosArrowUp } from "react-icons/io"; // Import arrow up icon

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const checkScrollPosition = () => {
      if (window.pageYOffset > 100) {
        setIsVisible(true); // Show the button after scrolling down 100px
      } else {
        setIsVisible(false); // Hide the button if back at the top
      }
    };

    window.addEventListener("scroll", checkScrollPosition);

    return () => {
      window.removeEventListener("scroll", checkScrollPosition);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="iconContainer">
      <div className="phoneIcon">
        <a href="tel:+1234567890">
          <FaPhone />
        </a>
      </div>
      <div
        className={`scrollToTop ${isVisible ? "show" : ""}`}
        onClick={scrollToTop}>
        <IoIosArrowUp />
      </div>
    </div>
  );
};

export default ScrollToTopButton;
