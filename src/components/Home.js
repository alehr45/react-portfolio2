import React from "react";
import {  Image }  from "react-bootstrap";
import profile from "../images/Profile.jpg";
import { SocialIcon } from 'react-social-icons';
import TextAnimation from 'react-animate-text';

function Home() {
  return (
    <div>
      <TextAnimation>
      <h1 class="title">-Alex Lehr-</h1>
      </TextAnimation>
      <div className="logo">
      <style>{'body { background-color: antiquewhite; }'}</style>
        <Image
          className="pic"
          src={profile}
          height="230px"
          width="290px"
          roundedCircle
        />
        <TextAnimation>
        <h2 class="subtitle">-Full Stack Web Developer-</h2>
        </TextAnimation>
      </div>
  
      <SocialIcon className="social" url="https://linkedin.com/in/jaketrent" />
      <SocialIcon className="social" url="https://www.facebook.com/alex.lehr.75" />
      <SocialIcon className="social" url="https://github.com/alehr45" />
     
      
    </div>
  );
}

export default Home;
