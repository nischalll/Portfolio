import React, { useState } from "react";
import img from "../images/logo/image.png";
import Rubber from "./Rubber";
import Typewriter from "typewriter-effect";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLanguage } from "@fortawesome/free-solid-svg-icons";

export default function Hero({ handleClick, boolean }) {
  return (
    <div
      id="hero"
      className="hero"
      onClick={() => {
        if (boolean === false) handleClick();
      }}
    >
      <div id="hero-img">
        <img src={img} alt="" />
      </div>
      <div className="intro give-padding contain">
        <div className="txt-light-red twent">
          Namaste<span className="wave">🙏</span>, my name is
        </div>
        <div className="bio name lighter-red">
          <Rubber
            text={"Nischal Nandurkar."}
          />{" "}
        </div>
        <div className="bio what-i-do">
          <Typewriter
            options={{
              loop: true,
            }}
            onInit={(typewriter) => {
              typewriter
                .typeString("I Do Frontend.")
                .pause(2000)
                .deleteAll()
                .start();
            }}
          />
        </div>

        <div className="info">
          I'm a front-end developer👨‍💻 from INDIA🇮🇳 with a passion for creating
          engaging and entertaining user experiences.
        </div>
        <div className="button-container">
          <a className="contact-button" href="#contact">
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}
