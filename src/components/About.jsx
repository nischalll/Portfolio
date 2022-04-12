import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  fab,
  faJsSquare,
  faReact,
  faNodeJs,
  faGitSquare,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";


export default function About() {
  return (
    <section data-aos="fade-up" className="about-continer sections" id="about">
      <h1 className="heading">
        <span className="sauce">0. </span>About Me
      </h1>
      <div>
        <div className=" first">
          <p>
            Hello! My name is Nischal and I enjoy creating things that live on
            the internet. My interest in web development started back in 2018
            when I saw some YouTubers doing CSS races that made me wanna try
            doing HTML and CSS it turned out that it was not that easy but I
            found my way through it. <br />
            <br />
            Fast-forward to today, and I’ve had the privilege of working at a
            web-development agency as a Web-Design Intern.{" "}
            <a className="sauce" href="https://www.racreators.com/">
              <nobr>Web-Design Intern</nobr>
            </a>
            ;
          </p>
          <br />
          <br />
          <p>Here are a few technologies I’ve been working with recently:</p>
          <ul className="skills-list">
            <li>
              <FontAwesomeIcon className="sauce" icon={faJsSquare} /> JavaScript
            </li>
            <li>
              <FontAwesomeIcon className="sauce" icon={faReact} /> React
            </li>
            <li>
              <FontAwesomeIcon className="sauce" icon={faNodeJs} /> Node.js
            </li>
            <li>
              <FontAwesomeIcon className="sauce" icon={faDatabase} /> MangoDb
            </li>
            <li>
              <FontAwesomeIcon className="sauce" icon={faGitSquare} /> Git
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
