import React from "react";

export default function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="socials">
          <ul id="social-icons">
            <li>
              <a href="#">
                <i className="fa-brands fa-github"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa-brands fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa-brands fa-twitter"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="copyright">
          <a href="https://github.com/nischalll">
            Designed and built by Nischal Nandurkar{" "}
            <i className="fa-solid fa-heart"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}
