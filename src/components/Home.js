import React from "react";
import { Col , Image } from "react-bootstrap";
import profile from "../images/Profile.jpg"


function Home() {
    return (
        <div>
      <h1 class="title">-Alex Lehr-</h1>
      
    <div className="logo">
    <style>{'body { background-color: antiquewhite; }'}</style>
      <Image className="pic" src={profile} height="260px" width="310px" roundedCircle/>
      <h2 class="subtitle">-Full Stack Web Developer-</h2>
      </div>
    </div>
    );
  }
  
  export default Home;
  

