import React, { useState } from "react";
import { validateEmail } from "../utils/helpers";
import { Button } from "react-bootstrap";
import TextAnimation from "react-animate-text";
import { SocialIcon } from "react-social-icons";
import emailjs from 'emailjs-com';


// init("user_fx2BWVE7GJsAq31R9AHJa");


function Contact() {
    const [errorMessage, setErrorMessage] = useState("");
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { name, email, message } = formState;

  function handleChange(e) {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      console.log(isValid);
      // isValid conditional statement
      if (!isValid) {
        setErrorMessage("your email is invalid.");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage("");
      }
    }
    if (!errorMessage) {
        setFormState({ ...formState, [e.target.name]: e.target.value });
        
      };}

  function handleSubmit(e) {
    e.preventDefault();
    emailjs.send('service_mevmdgp','template_teraw94', formState, "user_fx2BWVE7GJsAq31R9AHJa")
    console.log(formState);
     alert ("Thanks for reaching out. I will get back to you ASAP!");
     window.location.reload()
     
  }




  return (
    <div>
      <style>{"body { background-color: antiquewhite; }"}</style>
      <TextAnimation>
        <h1 className="contact1">-Contact Me-</h1>
      </TextAnimation>

      <h5 className="looking">Looking to hire a developer?</h5>
      <h5 className="looking">Need help with a project? </h5>
      <h5 className="looking">Just want to chat about coding?</h5>

      <form id="contact-form" method="POST">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            defaultValue={name}
            name="name"
            onBlur={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address:</label>
          <input
            type="email"
            className="form-control"
            aria-describedby="emailHelp"
            defaultValue={email}
            onBlur={handleChange}
            name="email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            defaultValue={message}
            onBlur={handleChange}
            className="form-control"
            rows="5"
          ></textarea>
        </div>
        <Button className="button1" onClick={handleSubmit} >
          Submit
        </Button>
      </form>

      <SocialIcon
        className="social"
        url="https://www.linkedin.com/in/alexlehr"
      />
      <SocialIcon
        className="social"
        url="https://www.facebook.com/alex.lehr.75"
      />
      <SocialIcon className="social" url="https://github.com/alehr45" />
      <div>
        <h1 className="copy3">-Alex Lehr &copy; 2021-</h1>
      </div>

      
    </div>
  );
}




export default Contact;
