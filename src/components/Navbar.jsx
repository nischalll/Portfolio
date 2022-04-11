import resume from "../resume/Nischal Nandurkar Resume.pdf"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCoffee} from "@fortawesome/free-solid-svg-icons";
export default function Navbaravbar({ handleClick, boolean }) {
  return (
    <nav id="navbar" onClick={handleClick}>
      <div id="logo-nav">
        <h1>
          <a className="sauce name rubber" href="#hero">
            NN 
          </a>
        </h1>
        <div className="ham-container">
          <a target="_blank" href={resume} className="contact-button resume-button first-btn">
            Resume
          </a>
          <span className="ham">
            <i
              className={boolean ? "fa-solid fa-bars" : "fa-solid fa-xmark"}
            ></i>
          </span>
        </div>
      </div>
      <ul className={boolean ? "hide" : ""}>
        <li>
          <a href="#about" className="underline">
            <span className="sauce">0. </span>About
          </a>
        </li>
        <li>
          <a href="#experience" className="underline">
            <span className="sauce">1. </span>Experience
          </a>
        </li>
        <li>
          <a href="#projects" className="underline">
            <span className="sauce">2. </span>Projects
          </a>
        </li>
        <li>
          <a href="#contact" className="underline">
            <span className="sauce">3. </span>Contact
          </a>
        </li>
      </ul>
      <a target="_blank" href={resume} className="contact-button resume-button second-btn">Resume</a>
    </nav>
  );
}
