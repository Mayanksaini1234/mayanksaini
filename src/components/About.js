import Image from "next/image";
import coderPicture from "../assets/coder-picture.webp";
import "../styles/About.css";

function About() {
  return (
    <section id="about">
      <div className="about-section">
        <div className="about-images" data-aos="fade-right" data-aos-offset="20">
          <div className="about-img1">
            <Image
              src={coderPicture}
              alt="Mayank Saini - Full Stack Developer"
              title="Mayank Saini"
              width={400}
              height={225}
            />
          </div>
        </div>

        <div className="about-content" data-aos="fade-left">
          <h2>About Me</h2>
          <p className="about-text1">
            My journey into tech began in 8th grade, when I first discovered HTML on a basic HP laptop. Despite coming from a biology background in 12th grade, my curiosity for building things through code never faded.
          </p>

          <p className="about-text2">
            I'm now a <strong>Full Stack Developer</strong>, specializing in the <strong>MERN stack</strong>—MongoDB, Express.js, React.js, and Node.js. With this stack, I build fast, responsive frontends and strong, scalable backends.
          </p>

          <p className="about-text2">
            I enjoy turning ideas into working products, improving performance, and creating solutions that are practical and easy to use. I'm always open to learning, collaborating, and building things that make a real difference.
          </p>

          <p className="about-text2">
            I'm always excited to collaborate, learn, and build impactful projects. If you're looking for a passionate developer to bring your ideas to life or want to connect, feel free to reach out — <strong>let's create something amazing together!</strong>
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
