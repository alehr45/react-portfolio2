import React from "react";
import { Image, Container } from "react-bootstrap";
import TextAnimation from "react-animate-text";
import { SocialIcon } from "react-social-icons";
import image0 from "../images/1.jpg";
import image1 from "../images/2.jpg";
import image2 from "../images/0.jpg";
import image4 from "../images/4.jpg";
import image5 from "../images/6.jpg";

function Portfolio() {
  return (
    <Container className="portfolio1">
      <style>{"body { background-color: antiquewhite; }"}</style>
      <TextAnimation>
        <h1 className="work1">-Portfolio-</h1>
        </TextAnimation>
<SocialIcon
          className="social"
          url="https://www.linkedin.com/in/alexlehr/"
        />
        <SocialIcon
          className="social"
          url="https://www.facebook.com/alex.lehr.75"
        />
        <SocialIcon className="social" url="https://github.com/alehr45" />
      
      <div>
        <div>
        <h5 class="title1">Haul That</h5>
        <h6 className="description">A P2P local frieght delivery service.</h6>
        
        </div>
        <a href="https://haul-that.herokuapp.com/ " target="_blank">
        <Image
          className="image1"
          height="600px"
          width="600px"
          src={image1}
          fluid
        />
        </a>
        
      </div>
     
<div>
<div >
        <h5 class="title1">GamerSpot</h5>
        <h6 className="description">A video game e-commerce site using Handlebars.</h6>
        </div>
        <a href="https://gamer-spot-45.herokuapp.com/" target="_blank">
        <Image
          className="image1"
          height="600px"
          width="600px"
          src={image0}
          fluid
        />
        </a>
      </div>
      
<div>
<div >
        <h5 class="title1">Weekly Food Planner</h5>
        <h6 className="description">A meal prep application using Spoonacular API.</h6>
        </div>
        <a href="https://github.com/alehr45/weekly-food-planner " target="_blank">
        <Image
          className="image1"
          height="600px"
          width="600px"
          src={image2}
          fluid
        />
        </a>
      </div>
      
<div>
      <div >
        <h5 class="title1">Budget Tracker</h5>
        <h6 className="description">
          An app that helps you keep track of your budget, online or offline.{" "}
        </h6>
        </div>
        <a href="https://budget-tracker-45.herokuapp.com//" target="_blank">
        <Image
          className="image1"
          height="600px"
          width="600px"
          src={image5}
          fluid
        />
        </a>
      </div>
<div>
      <div >
        <h5 class="title1">True Plumb</h5>
        <h6 className="description">
          A mobile site made for a friend opening their own plumbing business{" "}
        </h6>
        </div>
        <a href="https://trueplumb.herokuapp.com/" target="_blank">
        <Image
          className="image1"
          height="600px"
          width="600px"
          src={image4}
          fluid
        />
        </a>


      </div>
      <h5 className="wait1">Wait theres more ! </h5>
      <h5 className="wait2">Dont forget to check out my other repositories on Github.</h5>
      <a href="https://github.com/alehr45">-github.com/alehr45-</a>
      <div>
        <h1 className="copy1">-Alex Lehr &copy; 2021-</h1>
      </div>
     
    </Container>
  );
}

export default Portfolio;
