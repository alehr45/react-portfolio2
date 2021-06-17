import React from "react";
import TextAnimation from "react-animate-text";
import resume from "../images/resume.pdf"
import  { Button } from "react-bootstrap";

function AboutMe() {
  return (
    <section className="my-5">
      <style>{"body { background-color: antiquewhite; }"}</style>
      <TextAnimation>
        <h1 className="who" id="about">
          Who Am I?
        </h1>
      </TextAnimation>

      <div className="about">
        <h1 className="about1">-Alexander Lehr-</h1>
        <h5 className="profile1">
          A Vanderbilt graduate pursuing employment and eager to contribute his
          developed knowledge in a Web Development role. Numerous years in
          customer service and communications. Experience in front-end and
          back-end technologies and hungry to learn more! Adaptable and driven
          with strong work ethic and ability to thrive in a team-based or
          individually motivated setting.
        </h5>
      </div>
      
        

        <div>
        <h4 className="pros">-Proficiencies-</h4>

        <ul class="front">
       <h3 className="front1">Front End:</h3> 
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>jQuery</li>
        <li>Bootstrap</li>
        <li>React</li>
      </ul>

      <ul class="back">
      <h3 className="back1">Back End:</h3> 
        <li>API's</li>
        <li>Node</li>
        <li>Express</li>
        <li>MySQL, Sequelize</li>
        <li>MongoDB, Mongoose</li>
        <li>REST</li>
        <li>GraphQL</li>
        <a href={resume} target="_blank" rel="noreferrer">
      
        
         
          
          
        <Button className="resume">Resume</Button>{' '}
        </a>
      </ul>
      </div>
    </section>
  );
}

export default AboutMe;
