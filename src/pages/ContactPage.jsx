import React from "react";

const Contact = () => {
  return (
    <div className="about-me">
      <div className="contact-container">
        <div className="contact-text">
          <h1>Let's work together</h1>

          <div className="contact">
            Please feel free to follow the links below to contact me via email,
            at dominic.decapite@gmail.com, or visit my LinkedIn. I'd love to
            connect!
          </div>
          <div class="hero-buttons">
            <a class="github-button" href="mailto:dominic.decapite@gmail.com">
              Email Me
            </a>
            <a
              class="linkedin-button"
              href="https://www.linkedin.com/in/dominicdecapite/"
            >
              My LinkedIn
            </a>
          </div>
        </div>
        {/* <img
          className="profile-pic"
          src="../../src/assets/images/my_headshot.jpeg"
          alt="Dominic DeCapite"
        /> */}
      </div>
    </div>
  );
};

export default Contact;
