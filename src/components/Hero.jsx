import React from "react";
import img from "../images/logo/image.png";
import Rubber from "./Rubber";
import Typewriter from "typewriter-effect";

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
          Hello<span className="wave">👋</span>, my name is
        </div>
        <div className="bio name lighter-red">
          <Rubber text="Nischal Nandurkar." />
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
          I'm a final year B.Tech student who is passionate about web
          development and looking for the right opportunity to work in an
          environment that will help me progress into a <nobr>full-stack</nobr>{" "}
          role.
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
