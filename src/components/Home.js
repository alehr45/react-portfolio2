import React from "react";
import {  Image, Button ,  }  from "react-bootstrap";
import profile from "../images/Profile.jpg";
import { SocialIcon } from 'react-social-icons';


function Home() {
  return (
    <div>
      <h1 class="title">-Alex Lehr-</h1>
      <div className="logo">
        <style>{"body { background-color: seashell; }"}</style>
        <Image
          className="pic"
          src={profile}
          height="230px"
          width="290px"
          roundedCircle
        />
        <h2 class="subtitle">-Full Stack Web Developer-</h2>
      </div>
  
      <SocialIcon className="social" url="https://linkedin.com/in/jaketrent" />
      <SocialIcon className="social" url="https://www.facebook.com/alex.lehr.75" />
      <SocialIcon className="social" url="https://github.com/alehr45" />
     
      
    </div>
  );
}

export default Home;
