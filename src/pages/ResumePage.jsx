import React from "react";
import { FaHtml5, FaCss3Alt, FaReact, FaMarkdown, FaNodeJs } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiMongodb, SiExpress, SiPostgresql } from "react-icons/si";
import { DiJqueryLogo } from "react-icons/di";
import { GrGraphQl } from "react-icons/gr";





const Resume = () => {
  return (
    <div className="resume">
      <div className="resume-container">
        <div className="resume-text">
          <h1>Tech Skills</h1>

          <div className="skills">
            <h5>Front End</h5>
          <FaHtml5 size={65}/> HTML 5
          <FaCss3Alt size={65}/> CSS 3
          <IoLogoJavascript size={65}/> JavaScript
          <DiJqueryLogo size={65}/> jQuery
          <FaReact size={65}/> React.js
          {/* <FaMarkdown size={65}/> Markdown */}

          <h5>Back End</h5>
          <SiExpress size={65}/> Express
          <SiMongodb size={65}/>MongoDB
          <FaNodeJs size={65}/> Node.js
          <GrGraphQl size={65}/> GraphQL
          <SiPostgresql size={65}/> PostgreSQL
          
          
          </div>
          <div className="hero-buttons">
            <a className="github-button" href="./assets/Dominic DeCapite Resume - 05.03.24.pdf">
              Download My Resume
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

export default Resume;
