import Image from "next/image";
import coderPicture from "../assets/coder-picture.webp";
import "../styles/About.css";

function About() {
  return (
    <section id="about">
      <div className="about-section">
        <div className="about-images" data-aos="fade-up" data-aos-offset="20">
          <div className="about-img1">
            <Image
              src={coderPicture}
              alt="Coder Boy"
              title="Coder Boy"
              width={"400"}
              height={"225"}
            />
          </div>
        </div>

        <div className="about-content" data-aos="fade-up">
          <h2>ABOUT ME</h2>
          <p className="about-text1" data-aos="fade-up">
  Hello there! I&#39;m <strong>Mayank Saini</strong>, a passionate and dedicated <strong>Full Stack Developer</strong> specializing in the <strong>MERN stack</strong> — MongoDB, Express.js, React.js, and Node.js. I build fast, scalable, and secure web applications with fully responsive and interactive frontends and robust backends. I’m committed to writing clean, maintainable code and delivering high-performing user experiences. I enjoy tackling complex problems, optimizing performance, and crafting business-oriented digital solutions.
</p>

<p className="about-text2" data-aos="fade-up">
  I thrive in collaborative environments, where I work closely with teams to bring innovative ideas to life. Whether it&#39;s building seamless UI/UX, setting up secure backends, or deploying scalable systems — I focus on delivering real impact.
  I&#39;m always excited to learn, grow, and build meaningful projects. If you&#39;re looking for a driven developer to bring your vision to life, let&#39;s connect — <strong>and create something amazing together!</strong>
</p>

        </div>
      </div>
    </section>
  );
}

export default About;
