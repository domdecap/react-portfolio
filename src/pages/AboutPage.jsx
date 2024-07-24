import React from "react";

const About = () => {
  return (
    <div className="about-me">
      <div className="bio-container">
        <div className="bio-text">
          <h1>Hi, my name is</h1>
          <h1>Dominic DeCapite</h1>
          <h2>I'm a full stack web developer</h2>
          <div className="bio">
            I am a full stack developer with a strong focus on front-end
            development and a keen eye for UI/UX design. With a passion for
            creating user-friendly and visually appealing interfaces, I bring a
            wealth of experience in building responsive and intuitive web
            applications. I am adept at leveraging the latest technologies to
            deliver seamless and engaging user experiences.
          </div>
          <div className="hero-buttons">
            <a className="github-button" href="https://github.com/domdecap">
              My Github
            </a>
            <a
              className="linkedin-button"
              href="https://www.linkedin.com/in/dominicdecapite/"
            >
              My LinkedIn
            </a>
          </div>
        </div>
        <img
          className="profile-pic"
          src="src/assets/images/my_headshot.jpeg"
          alt="Dominic DeCapite"
        />
      </div>
    </div>
  );
};

export default About;
