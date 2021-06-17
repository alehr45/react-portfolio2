import React, { useState } from "react";
import { validateEmail } from "../utils/helpers";
import  { Button } from "react-bootstrap"
import TextAnimation from "react-animate-text";
import { SocialIcon } from 'react-social-icons';

function Contact() {
    return (
      
        <div >
              <style>{'body { background-color: antiquewhite; }'}</style>
              <TextAnimation>
              <h1 className="contact1">-Contact Me-</h1>
              </TextAnimation>

        <form id="contact-form"  method="POST">
    <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input type="text" className="form-control" />
    </div>
    <div className="form-group">
        <label htmlFor="exampleInputEmail1">Email address:</label>
        <input type="email" className="form-control" aria-describedby="emailHelp" />
    </div>
    <div className="form-group">
        <label htmlFor="message">Message:</label>
        <textarea className="form-control" rows="5"></textarea>
    </div>
    <Button className="button1">Submit</Button>
</form>

<SocialIcon className="social" url="https://linkedin.com/in/jaketrent" />
      <SocialIcon className="social" url="https://www.facebook.com/alex.lehr.75" />
      <SocialIcon className="social" url="https://github.com/alehr45" />
      <div>
  <h1 className="copy3">-Alex Lehr &copy; 2021-</h1>
</div>

     
</div>
 
    
    );
}
export default Contact;
