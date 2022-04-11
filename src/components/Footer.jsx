import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {fab, faTwitterSquare, faInstagram, faLinkedin, faGithub} from "@fortawesome/free-brands-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <footer>
      <div className="footer-container">
      
        <div className="socials">
          <ul id="social-icons">
            <li>
              <a target="_blank" href="https://github.com/nischalll">
              <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>
            <li>
              <a target="_blank" href="https://www.instagram.com/nischalll/">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </li>
            <li>
              <a target="_blank" href="https://www.linkedin.com/in/nischal-nandurkar-41a7a8177/">
              <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </li>
            <li>
              <a target="_blank" href="https://twitter.com/codewithnish">
              <FontAwesomeIcon icon={faTwitterSquare} />
              </a>
            </li>
          </ul>
        </div>
        <div className="copyright">
          <a href="https://github.com/nischalll">
            Designed and built by Nischal Nandurkar{" "}
            <FontAwesomeIcon icon={faHeart} />
          </a>
        </div>
          <a href="mailto: nischalnischal6@gmail.com" id="footer-email">nischalnischal6@gmail.com <hr /></a>
      </div>
    </footer>
  );
}
