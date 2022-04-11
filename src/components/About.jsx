import React from 'react'

export default function About() {
  return (
    <section className="about-continer sections" id="about">
                <h1 className="heading"><span className="sauce">0. </span>About Me</h1>
                <div>
                    <div className=" first">
                    <p>Hello! My name is Nischal and I enjoy creating things that live on the internet. My interest
                        in
                        web development started back in 2018 when I saw some youtubers doing css races that made me
                        wanna
                        try doing HTML and CSS but it turned out that it was not that easy but i found my way
                        through
                        it. <br/><br/>
                        Fast-forward to today, and I’ve had the privilege of working at an web-developement agency
                        as an {" "}
                        <a className='sauce' href="https://www.racreators.com/">
                            <nobr>Web-Design Intern</nobr>
                        </a>;
                    </p>
                    <br/><br/>
                    <p>Here are a few technologies I’ve been working with recently:</p>
                    <ul className="skills-list">
                        <li><i className="sauce fa-brands fa-js-square"></i> JavaScript</li>
                        <li><i className="sauce fa-brands fa-react"></i> React</li>
                        <li><i className="sauce fa-brands fa-node-js"></i> Node.js</li>
                        <li><i className="sauce fa-solid fa-database"></i> MangoDb</li>
                        <li><i className="sauce fa-brands fa-git-alt"></i> Git</li>
                    </ul>
                </div>
        </div>
        </section>
  )
}
