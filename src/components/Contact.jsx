import React from "react";

export default function Contact() {
  return (
    <section className="contact-continer sections" id="contact">
      <h1 className="heading">
        <span className="sauce">3. </span>Contact Me
      </h1>
      <div className="flex-center">
        <h1 className="title">Get In Touch</h1>
        <p style={{ textAlign: "center", "": 700 }}>
          Although I’m not currently looking for any new opportunities, my inbox
          is always open. Whether you have a question or just want to say hi,
          I’ll try my best to get back to you!
        </p>
        <div className="button-container">
          <a
            className="contact-button"
            href="mailto: nischalnischal6@gmail.com"
          >
            Say Hello !
          </a>
        </div>
      </div>
    </section>
  );
}
