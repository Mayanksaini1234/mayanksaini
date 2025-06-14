"use client";
import React, { useState, useEffect } from "react";
import "../styles/ScrollToTopButton.css";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    setIsVisible(window.scrollY > 500);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      type="button"
      className={`scroll-to-top-button ${isVisible ? "visible" : ""}`}
      onClick={scrollToTop}
      aria-label="Scroll to top"
      data-aos="zoom-in-up"
      title="Scroll to Top"
    >
      <i className="fa-solid fa-arrow-up"></i>
      <span className="sr-only">Scroll to top</span>
    </button>
  );
};

export default ScrollToTopButton;
