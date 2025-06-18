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
        <div className="contact-header" data-aos="fade-up">
          <h2>Get In Touch</h2>
          <p>
            I'm always open to discussing new projects, creative ideas, or opportunities 
            to be part of your visions. Let's create something amazing together!
          </p>
        </div>

        <div className="contact-information">
          <div className="ct-info-text">
            <div className="ct-info" data-aos="fade-up">
              <div className="ct-info-icon" title="Email Icon">
                <i className="fa-solid fa-envelope"></i>
              </div>
              <div className="ct-info-detail">
                <p>Email</p>
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

            <div className="ct-info" data-aos="fade-up">
              <div className="ct-info-icon" title="Availability Icon">
                <i className="fa-solid fa-clock"></i>
              </div>
              <div className="ct-info-detail">
                <p>Availability</p>
                <p>Open for opportunities</p>
              </div>
            </div>
          </div>

          <div className="ct-info-form">
            <form
              className="contact-form"
              name="contact-form"
              action="https://formsubmit.co/mayanksaini9389@gmail.com"
              method="POST"
              data-aos="fade-up"
            >
              <label htmlFor="email">
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
                className={!isValid && email ? 'error' : ''}
              />

              <label htmlFor="subject">
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
              />

              <label htmlFor="message">
                Message
              </label>
              <textarea
                placeholder="Your message here..."
                id="message"
                name="message"
                required
                minLength={10}
                autoComplete="on"
              />

              <input type="hidden" name="_captcha" value="true" />
              <input type="hidden" name="_template" value="table" />
              <input
                type="hidden"
                name="_subject"
                value="New submission from portfolio!"
              />

              <button type="submit" title="Send Message">
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
