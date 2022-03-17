import React from "react";
import ContactForm from "../components/ContactForm";
import "../styles/Contact.scss";
const Contact = () => {
  return (
    <div className="contactFullWrapper">
      <div className="contactFormContainer">
        <div className="contactFormWrapper">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
