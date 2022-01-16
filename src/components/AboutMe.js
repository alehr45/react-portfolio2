import React from "react"
import TextAnimation from "react-animate-text"
import resume from "../images/resume.pdf"
import cert1 from "../images/certificate.pdf"
import cert2 from "../images/certificate2.pdf"
import cert3 from "../images/certificate3.pdf"
import { Button, Image } from "react-bootstrap"
// import vandy from "../images/vandy.png"
import { SocialIcon } from "react-social-icons"

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
        <h5 className="profile1">An ambitious Vanderbilt graduate pursuing employment and eager to contribute his developed knowledge in a Web Development role. 15+ years in customer service and communications. Experience in front-end and back-end technologies and hungry to learn more! Adaptable and driven with strong work ethic and ability to thrive in a team-based or individually motivated setting.</h5>
      </div>
      {/* <Image src={vandy} height="130px" width="250px" /> */}

      <div>
        <h4 className="pros">-Proficiencies-</h4>

        <ul className="front">
          <h3 className="front1">Front End:</h3>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>jQuery</li>
          <li>Bootstrap</li>
          <li>React</li>
        </ul>

        <ul className="back">
          <h3 className="back1">Back End:</h3>
          <li>API's</li>
          <li>Node</li>
          <li>Express</li>
          <li>MySQL, Sequelize</li>
          <li>MongoDB, Mongoose</li>
          <li>REST</li>
          <li>GraphQL</li>
          <div>
            <a href={resume} target="_blank" rel="noreferrer">
              <Button className="resume1">My Resume</Button>{" "}
            </a>
          </div>
          <div>
            <a href={cert1} target="_blank" rel="noreferrer">
              <Button className="resume1">Vanderbilt University Full-Stack Developer Certificate</Button>{" "}
            </a>
          </div>
          <div>
            <a href={cert2} target="_blank" rel="noreferrer">
              <Button className="resume1">Udemy Wordpress and PHP Certificate</Button>{" "}
            </a>
          </div>
          <div>
            <a href={cert3} target="_blank" rel="noreferrer">
              <Button className="resume1">Udemy React Certificate</Button>{" "}
            </a>
          </div>
        </ul>
      </div>
      <SocialIcon className="social" url="https://www.linkedin.com/in/alexlehr" />
      <SocialIcon className="social" url="https://www.facebook.com/alex.lehr.75" />
      <SocialIcon className="social" url="https://github.com/alehr45" />
      <div>
        <h1 className="copy2">-Alex Lehr &copy; 2021-</h1>
      </div>
    </section>
  )
}

export default AboutMe
