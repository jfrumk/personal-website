import React from "react";
import ContactForm from "../components/ContactForm";
import BasicContactInfo from "../components/BasicContactInfo";
import SocialMediaButtons from "../components/SocialMediaButtons";
import "../styles/Contact.scss";
const Contact = () => {
  return (
    <div className="contactFullWrapper">
      <div className="infoContactContainer">
        <ul className="contactInfo">
          <h1>Want to work together?</h1>
          <BasicContactInfo />
          <li>
            Follow on Social Media:
            <SocialMediaButtons />
          </li>
          <li>Set up a call:</li>
        </ul>
      </div>
      <div className="contactFormContainer">
        <h1>Just A Form Away!</h1>
        <div className="contactFormWrapper">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
