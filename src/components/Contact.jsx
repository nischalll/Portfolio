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
          Shoot an Email. I would love to talk more to you. Best case scenario i
          recommend an anime to watch. worst case scenario i recommend you an
          anime to watch.
        </p>
        <div className="button-container">
          <a
            className="contact-button"
            href="mailto: nischalnischal6@gmail.com"
          >
            Shoot an email
          </a>
        </div>
      </div>
    </section>
  );
}
