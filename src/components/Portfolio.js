import React from "react";
import { Image, Container } from "react-bootstrap";
import TextAnimation from "react-animate-text";
import image0 from "../images/1.jpg";
import image1 from "../images/2.jpg";
import image2 from "../images/0.jpg";
import image3 from "../images/3.jpg";
import image4 from "../images/4.jpg";
import image5 from "../images/5.jpg";

function Portfolio() {
  return (

    
    <Container className="portfolio1">
      <style>{'body { background-color: antiquewhite; }'}</style>
      <TextAnimation>
      <h1 className="work1">-Portfolio-</h1> 
      </TextAnimation>
      <div>
        <Image className="image1" height="600px" width="600px" src={image1} fluid />
      </div>

      <div>
        <Image  className="image1" height="600px" width="600px" src={image2} fluid />
      </div>

      <div>
        <Image  className="image1" height="600px" width="600px" src={image0} fluid />
      </div>

      <div>
        <Image  className="image1" height="600px" width="600px" src={image4} fluid />
      </div>

      <div>
        <Image className="image1" height="600px" width="600px" src={image5} fluid />
      </div>
    </Container>
  );
}

export default Portfolio;
