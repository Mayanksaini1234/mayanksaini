"use client";

import React, { useState } from "react";
import "../styles/Contact.css";

function Contact() {
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(true);

  const validateEmail = (input) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(input);
  };

  const handleInputChange = (e) => {
    const input = e.target.value;
    setEmail(input);
    setIsValid(validateEmail(input));
  };

  return (
    <section id="contact">
      <div className="contact-section">
        <p className="contact-title1" data-aos="fade-up">
          Contact me
        </p>
        <p className="contact-title2" data-aos="fade-up">
          Let&apos;s discuss about some unique projects! 🚀
        </p>

        <div className="contact-information">
          <div className="ct-info-text">
            <div className="ct-info" data-aos="fade-up">
              <div className="ct-info-icon" title="Email Icon">
                <i className="fa-solid fa-envelope"></i>
              </div>
              <div className="ct-info-detail">
                <p>E-Mail</p>
                <p>
                  <a
                    href="mailto:mayanksaini9389@gmail.com"
                    title="mayanksaini9389@gmail.com"
                  >
                    mayanksaini9389@gmail.com
                  </a>
                </p>
              </div>
            </div>

            <div className="ct-info" data-aos="fade-up">
              <div className="ct-info-icon" title="Location Icon">
                <i className="fa-solid fa-location-dot"></i>
              </div>
              <div className="ct-info-detail">
                <p>Location</p>
                <p>BulandShahr, UP, India</p>
              </div>
            </div>
          </div>

          <div className="ct-info-form">
            <form
              className="contact-form"
              name="contact-form"
              action="https://formsubmit.co/mayanksaini9389@gmail.com"
              method="POST"
            >
              <label htmlFor="email" data-aos="fade-up">
                Your Email:
              </label>
              <input
                type="email"
                name="email"
                placeholder="name@email.com"
                id="email"
                required
                autoComplete="email"
                value={email}
                onChange={handleInputChange}
                style={{
                  borderColor: isValid ? "rgba(106, 121, 124, 0)" : "red",
                }}
                data-aos="fade-up"
              />

              <label htmlFor="subject" data-aos="fade-up">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                placeholder="Subject of your message"
                id="subject"
                required
                minLength={10}
                autoComplete="on"
                data-aos="fade-up"
              />

              <label htmlFor="message" data-aos="fade-up">
                Message
              </label>
              <textarea
                placeholder="Your message here..."
                id="message"
                name="message"
                required
                minLength={10}
                autoComplete="on"
                data-aos="fade-up"
              />

              <input type="hidden" name="_captcha" value="true" />
              <input type="hidden" name="_template" value="table" />
              <input
                type="hidden"
                name="_subject"
                value="New submission from portfolio!"
              />

              <button type="submit" data-aos="fade-up" title="Send Message">
                Send Message <i className="fa-regular fa-paper-plane"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
