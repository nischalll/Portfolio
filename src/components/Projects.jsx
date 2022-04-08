import React from "react";
import img from "../images/project/portfolio-project.png";

export default function Projects() {
  return (
    <section className="projects-continer sections" id="projects">
      <h1 className="heading">
        <span className="sauce">2. </span>Some Things I've Built
      </h1>
      <div className="">
        <div className="project-cards">
          <div className="project">
            <div className="project-img">
              <img src={img} alt="" />
            </div>
            <div className="project-info">
              <div className="project-title">Portfolio Website</div>
              <div className="project-card">
                Always wanted a good looking portfolio website but didn't knew
                where to start from so i ended up creating this awesome website.
                Might add some more things in here later.
              </div>
              <ul className="tech-used">
                <li>React</li>
                <li>HTML</li>
                <li>CSS</li>
              </ul>
              <div className="project-links">
                <a href="#">
                  <i className="fa-brands fa-github"></i>
                </a>
                <a href="">
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="project">
            <div className="project-img">
              <img src={img} alt="" />
            </div>
            <div className="project-info">
              <div className="project-title">Vidly</div>
              <div className="project-card">
                a movie rental service app to buy or rent movies easily.
              </div>
              <ul className="tech-used">
                <li>React</li>
                <li>HTML</li>
                <li>CSS</li>
              </ul>
              <div className="project-links">
                <a href="#">
                  <i className="fa-brands fa-github"></i>
                </a>
                <a href="">
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
