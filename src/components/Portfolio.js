import React from "react";
import { Image, Container , Nav} from "react-bootstrap";
import TextAnimation from "react-animate-text";
import { SocialIcon } from "react-social-icons";
import image0 from "../images/1.jpg";
import image1 from "../images/2.jpg";
import image2 from "../images/0.jpg";
import image4 from "../images/4.jpg";
import image5 from "../images/5.jpg";

function Portfolio() {
  return (
    <Container className="portfolio1">
      <style>{"body { background-color: antiquewhite; }"}</style>
      <TextAnimation>
        <h1 className="work1">-Portfolio-</h1>

        <SocialIcon
          className="social"
          url="https://linkedin.com/in/jaketrent"
        />
        <SocialIcon
          className="social"
          url="https://www.facebook.com/alex.lehr.75"
        />
        <SocialIcon className="social" url="https://github.com/alehr45" />
      </TextAnimation>
      <div className="border">
        <Image
          className="image1"
          height="600px"
          width="600px"
          src={image1}
          fluid
        />
      </div>

      <div className="border">
        <Image
          className="image1"
          height="600px"
          width="600px"
          src={image2}
          fluid
        />
      </div>

      <div className="border">
        <Image
          className="image1"
          height="600px"
          width="600px"
          src={image0}
          fluid
        />
      </div>

      <div className="border">
        <Image
          className="image1"
          height="600px"
          width="600px"
          src={image5}
          fluid
        />
      </div>

      <div className="border">
        <Image
          className="image1"
          height="600px"
          width="600px"
          src={image4}
          fluid
        />
      </div>
      <div>
        <h1 className="copy1">-Alex Lehr &copy; 2021-</h1>
      </div>
     
    </Container>
  
  );
}

export default Portfolio;
