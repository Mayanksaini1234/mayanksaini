import React from "react";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer-section" data-aos="zoom-in" data-aos-offset="0">
      <div className="footer-content">
        <div className="footer-logo">
          <h3>Mayank.</h3>
          <p>Full Stack Developer</p>
        </div>
        
        <div className="footer-copyright">
          <p>©️ 2024 <strong>Mayank Saini</strong>. All rights reserved</p>
        </div>
        
        <div className="footer-social">
          <a href="https://www.linkedin.com/in/mayank-saini-b91906202/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="https://github.com/Mayanksaini1234/" target="_blank" rel="noreferrer" aria-label="GitHub">
            <i className="fa-brands fa-github"></i>
          </a>
          <a href="https://x.com/MayankS09985836?s=09" target="_blank" rel="noreferrer" aria-label="Twitter">
            <i className="fa-brands fa-twitter"></i>
          </a>
        </div>
      </div>
      
      <div className="footer-divider"></div>
      
      <div className="footer-bottom">
        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
        
        <div className="footer-made-with">
          Made with <i className="fa-solid fa-heart"></i> by Mayank Saini
        </div>
      </div>
    </div>
  );
}

export default Footer;
