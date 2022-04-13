import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import getProjects from "../data/projects";
import AOS from "aos";

const projectsPerPage = 3;
let arrayForHoldingProjects = [];

export default function Projects() {
  const [projects, setProjects] = useState(getProjects());
  const [projectsToShow, setProjectsToShow] = useState([]);
  const [next, setNext] = useState(3);

  function loopWithSlice(start, end) {
    const slicedProjects = projects.slice(start, end);
    console.log(slicedProjects);
    arrayForHoldingProjects = [...projectsToShow, ...slicedProjects];
    setProjectsToShow(arrayForHoldingProjects);
  }

  useEffect(() => {
    console.log("useEffect called");
    AOS.init();
    AOS.refresh();
    loopWithSlice(0, projectsPerPage);
  }, []);

  const handleShowMoreProjects = () => {
    loopWithSlice(next, next + projectsPerPage);
    setNext(next + projectsPerPage);
  };

  return (
    <section className="projects-continer sections" id="projects">
      <h1 className="heading">
        <span className="sauce">2. </span>Some Things I've Built
      </h1>
      <div className="">
        <div className="project-cards">
          {projectsToShow.map((project, index) => (
            <div data-aos="fade-up" key={project.id} className="project">
              <div className="project-img">
                <img
                  src={require(`../images/project/${project.image}`)}
                  alt=""
                />
                {/* <img src={require(`${project.image}`).default()} alt="" /> */}
              </div>
              <div className="project-info">
                <a target="_blank" href={project.projectLinkHosted}>
                  <div className="project-title">{project.projectTitle}</div>
                </a>
                <div className="project-card">{project.projectInfo}</div>
                <ul className="tech-used">
                  {project.techUsed.map((tech, index) => (
                    <li key={index}>{tech}</li>
                  ))}
                </ul>
                <div className="project-links">
                  <a target="_blank" href={project.projectLinkGithub}>
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                  <a target="_blank" href={project.projectLinkHosted}>
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                  </a>
                </div>
              </div>
            </div>
          ))}
          <div style={{textAlign:"center", paddingTop:"10px"}}>
            <a 
              className="contact-button resume-button"
              onClick={handleShowMoreProjects}
            >
              Load More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
