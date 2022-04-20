import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import "../styles/contactForm.scss";
import { FaPaperPlane } from "@react-icons/all-files/fa/FaPaperPlane";
const FORM_ENDPOINT = " ";

const ContactForm = () => {
  const form = useRef();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formLoading, setFormLoading] = useState(false);
  const [playingAnimation, setPlayingAnimation] = useState(false);
  const sendEmail = (e) => {
    setFormLoading(true);
    e.preventDefault();
    emailjs
      .sendForm(
        "service_lf4uwce",
        "template_m2xrbdq",
        form.current,
        "B3Z-AGTM_8vGtC4Wp"
      )
      .then(
        (result) => {
          console.log(result.text);
          setPlayingAnimation(true);
          setTimeout(() => {
            setIsSubmitted(true);
          }, 300);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  if (!isSubmitted) {
    return (
      <form
        className={`wholeForm ${playingAnimation ? "playAnimation" : ""}`}
        action={FORM_ENDPOINT}
        ref={form}
        onSubmit={sendEmail}
        method="POST"
        target="_blank"
      >
        <div className="formInputWrapper">
          <input
            className="formInput"
            type="text"
            placeholder="Your Name"
            name="name"
            required
          />
        </div>
        <div className="formInputWrapper">
          <input
            className="formInput"
            type="email"
            placeholder="Email"
            name="email"
            required
          />
        </div>
        <div className="formInputWrapper">
          <input
            className="formInput"
            type="subject"
            placeholder="Subject"
            name="subject"
            required
          />
        </div>
        <div className="formInputWrapper textArea">
          <textarea
            className="formInput"
            placeholder="Your Message"
            name="message"
            required
          />
        </div>
        <div className="submitButton">
          <button type="submit">
            <span>
              {!formLoading ? (
                <FaPaperPlane />
              ) : (
                <span className="loading"></span>
              )}
            </span>
            Send Message
          </button>
        </div>
      </form>
    );
  } else {
    return (
      <div className="wholeForm formSubmitted">
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M9.5 20c-2.538 0-4.923-0.988-6.718-2.782s-2.782-4.18-2.782-6.717c0-2.538 0.988-4.923 2.782-6.718s4.18-2.783 6.718-2.783c2.538 0 4.923 0.988 6.718 2.783s2.782 4.18 2.782 6.718-0.988 4.923-2.782 6.717c-1.794 1.794-4.18 2.782-6.718 2.782zM9.5 2c-4.687 0-8.5 3.813-8.5 8.5s3.813 8.5 8.5 8.5 8.5-3.813 8.5-8.5-3.813-8.5-8.5-8.5z"></path>
          <path d="M7.5 14.5c-0.128 0-0.256-0.049-0.354-0.146l-3-3c-0.195-0.195-0.195-0.512 0-0.707s0.512-0.195 0.707 0l2.646 2.646 6.646-6.646c0.195-0.195 0.512-0.195 0.707 0s0.195 0.512 0 0.707l-7 7c-0.098 0.098-0.226 0.146-0.354 0.146z"></path>
        </svg>

        <h1>Thank you!</h1>
        <h3>The message has been sent and I will be in touch soon.</h3>
      </div>
    );
  }
};

export default ContactForm;
