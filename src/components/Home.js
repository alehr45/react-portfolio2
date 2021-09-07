import React from "react";
import { Image, Button } from "react-bootstrap";
import profile from "../images/Profile2.jpg";
import { SocialIcon } from "react-social-icons";
import TextAnimation from "react-animate-text";

function Home() {
  return (
    <div>
      <TextAnimation>
        <h1 class="title">-Alex Lehr-</h1>
      </TextAnimation>
      <div className="logo">
        <style>{"body { background-color: antiquewhite; }"}</style>
        <Image
          className="pic"
          src={profile}
          height="235px"
          width="300px"
          roundedCircle
        />
        <TextAnimation>
          <h2 class="subtitle">-Full Stack Web Developer-</h2>
        </TextAnimation>
      </div>

      <SocialIcon
        className="social"
        url="https://www.linkedin.com/in/alexlehr"
      />
      <SocialIcon
        className="social"
        url="https://www.facebook.com/alex.lehr.75"
      />
      <SocialIcon className="social" url="https://github.com/alehr45" />
    </div>
  );
}

export default Home;
