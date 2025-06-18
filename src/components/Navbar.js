"use client";
import React, { useState, useEffect } from "react";
import "../styles/Navbar.css";

function Navbar() {
  const [iconActive, setIconActive] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  const handleIcon = () => {
    setIconActive(!iconActive);
  };

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const handleScroll = () => {
      const scrollY = window.scrollY;
      
      // Check if scrolled for navbar background
      setIsScrolled(scrollY > 50);

      sections.forEach((section) => {
        const offset = section.offsetTop - 100;
        const height = section.offsetHeight;
        const id = section.getAttribute("id");

        if (scrollY >= offset && scrollY < offset + height) {
          setActiveSection(id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`navbar-container ${isScrolled ? 'scrolled' : ''}`} data-aos="fade-down" data-aos-offset="0">
      <div className="navbar-content">
        <h1 className="navbar-title">
          <a className="navbar-title-link" href="/" title="Mayank Saini">
            Mayank.
          </a>
        </h1>

        {/* Desktop Navbar Design */}
        <ul className="navbar-links-container">
          <li
            className="navbar-items"
            data-aos="fade-down"
            data-aos-offset="0"
            data-aos-delay="100"
          >
            <a
              href="#home"
              title="Home"
              className={`navbar-links ${
                activeSection === "home" ? "active" : ""
              }`}
            >
              <i className="fa-solid fa-house"></i> Home
            </a>
          </li>
          <li
            className="navbar-items"
            data-aos="fade-down"
            data-aos-offset="0"
            data-aos-delay="150"
          >
            <a
              href="#about"
              title="About Me"
              className={`navbar-links ${
                activeSection === "about" ? "active" : ""
              }`}
            >
              <i className="fa-solid fa-user"></i> About Me
            </a>
          </li>
          <li
            className="navbar-items"
            data-aos="fade-down"
            data-aos-offset="0"
            data-aos-delay="200"
          >
            <a
              href="#skills"
              title="Skills"
              className={`navbar-links ${
                activeSection === "skills" ? "active" : ""
              }`}
            >
              <i className="fa-solid fa-code"></i> Skills
            </a>
          </li>
          <li
            className="navbar-items"
            data-aos="fade-down"
            data-aos-offset="0"
            data-aos-delay="250"
          >
            <a
              href="#projects"
              title="Projects"
              className={`navbar-links ${
                activeSection === "projects" ? "active" : ""
              }`}
            >
              <i className="fa-solid fa-wand-magic-sparkles"></i> Projects
            </a>
          </li>
          <li
            className="navbar-items"
            data-aos="fade-down"
            data-aos-offset="0"
            data-aos-delay="300"
          >
            <a
              href="#contact"
              title="Contact"
              className={`navbar-links ${
                activeSection === "contact" ? "active" : ""
              }`}
            >
              <i className="fa-solid fa-envelope"></i> Contact
            </a>
          </li>
        </ul>

        {/* Mobile Navbar Design */}
        <div className="openMenuIcon">
          <i className="fa-solid fa-bars icon" onClick={handleIcon}></i>
        </div>
      </div>

      <div
        className={`mobile-navbar-container ${
          iconActive ? "mbnav-active" : ""
        }`}
      >
        <div className="closeMenuIcon">
          <i
            className="fa-solid fa-xmark close-icon x-icon"
            onClick={handleIcon}
          ></i>
        </div>

        <ul className="mbnav-links-container">
          <li className="navbar-items" onClick={handleIcon}>
            <a href="#home" title="Home" className="navbar-links">
              <i className="fa-solid fa-house"></i> Home
            </a>
          </li>
          <li className="navbar-items" onClick={handleIcon}>
            <a href="#about" title="About Me" className="navbar-links">
              <i className="fa-solid fa-user"></i> About Me
            </a>
          </li>
          <li className="navbar-items" onClick={handleIcon}>
            <a href="#skills" title="Skills" className="navbar-links">
              <i className="fa-solid fa-code"></i> Skills
            </a>
          </li>
          <li className="navbar-items" onClick={handleIcon}>
            <a href="#projects" title="Projects" className="navbar-links">
              <i className="fa-solid fa-wand-magic-sparkles"></i> Projects
            </a>
          </li>
          <li className="navbar-items" onClick={handleIcon}>
            <a href="#contact" title="Contact" className="navbar-links">
              <i className="fa-solid fa-envelope"></i> Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
