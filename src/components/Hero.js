import Tooltip from "./Tooltip";
import Image from "next/image";
import profilePicture from "../assets/profile-picture.webp";
import "../styles/Hero.css";

function Hero() {
  return (
    <section id="home">
      <div className="hero-section">
        <div
          className="hero-text-container"
          data-aos="zoom-in"
          data-aos-offset="0"
        >
          <h2>Full Stack Developer</h2>
          <p>
            Hi 👋, I&apos;m Mayank Saini. A passionate Full Stack Developer from
            India. 
          </p>

          <span>
            <a
              aria-label="linkedin"
              rel="noreferrer"
              target="_blank"
              href="https://www.linkedin.com/in/mayank-saini-b91906202/"
            >
              <Tooltip text="fa-brands fa-linkedin" tooltipText="LinkedIn" />
            </a>
            <a
              aria-label="github"
              rel="noreferrer"
              target="_blank"
              href="https://github.com/Mayanksaini1234/"
            >
              <Tooltip text="fa-brands fa-github" tooltipText="GitHub" />
            </a>
            <a
              aria-label="twitter"
              rel="noreferrer"
              target="_blank"
              href="https://x.com/MayankS09985836?s=09"
            >
              <Tooltip text="fa-brands fa-twitter" tooltipText="Twitter" />
            </a>
          </span>
        </div>

        <div className="hero-img" data-aos="zoom-in" data-aos-offset="0">
          <Image
            src={profilePicture}
            alt="pictures"
            title="Mayank's Picture"
            width={"350"}
            height={"350"}
            priority
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
