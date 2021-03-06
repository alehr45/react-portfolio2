import React from "react"
import { Image, Container } from "react-bootstrap"
import TextAnimation from "react-animate-text"
import { SocialIcon } from "react-social-icons"
import image0 from "../images/1.jpg"
import image1 from "../images/2.jpg"
import image2 from "../images/0.jpg"
import image7 from "../images/4.jpg"
import image4 from "../images/5.jpg"
import image5 from "../images/6.jpg"
import image6 from "../images/7.jpg"

function Portfolio() {
  return (
    <Container className="portfolio1">
      <style>{"body { background-color: antiquewhite; }"}</style>
      <TextAnimation>
        <h1 className="work1">-Portfolio-</h1>
      </TextAnimation>

      <div>
        <div>
          <h5 className="title1">-Haul That-</h5>
          <h6 className="description">A P2P local frieght delivery service.</h6>
        </div>
        <a href="https://haul-that.herokuapp.com/ " target="_blank">
          <Image className="image1" height="600px" width="600px" src={image1} fluid />
        </a>
      </div>

      <div>
        <div>
          <div>
            <h5 className="title1">-React Tetris Game-</h5>
            <h6 className="description">A tetris game built with React </h6>
          </div>
          <a href="https://react-tetris-45.herokuapp.com/" target="_blank">
            <Image className="image1" height="600px" width="600px" src={image6} fluid />
          </a>
        </div>

        <div>
          <div>
            <h5 class="title1">-Weekly Food Planner-</h5>
            <h6 className="description">A meal prep application using Spoonacular API.</h6>
          </div>
          <a href="https://alehr45.github.io/weekly-food-planner/. " target="_blank">
            <Image className="image1" height="600px" width="600px" src={image2} fluid />
          </a>
        </div>
      </div>

      <div>
        <div>
          <h5 class="title1">-WordPress University-</h5>
          <h6 className="description">An website built for a university using PHP and Wordpress. </h6>
        </div>
        <a href="http://www.wordpressuniversity.org/" target="_blank">
          <Image className="image1" height="600px" width="600px" src={image5} fluid />
        </a>
      </div>
      <div>
        <div>
          <h5 class="title1">-Chat-Vibe-</h5>
          <h6 className="description">A simple React chat hosting site.</h6>
        </div>
        <a href="https://chatvibe.netlify.app/" target="_blank">
          <Image className="image1" height="600px" width="600px" src={image4} fluid />
        </a>
        <div>
          <h5 class="title1">-TruePlumb-</h5>
          <h6 className="description">A plumbing website made for a friend.</h6>
        </div>
        <a href="http://trueplumb.herokuapp.com/" target="_blank">
          <Image className="image1" height="600px" width="600px" src={image7} fluid />
        </a>
      </div>

      <h5 className="wait1">Check my GitHub for more! </h5>

      <SocialIcon className="social3" url="https://github.com/alehr45" />
      <div>
        <h1 className="copy1">-Alex Lehr &copy; 2021-</h1>
      </div>
    </Container>
  )
}

export default Portfolio
