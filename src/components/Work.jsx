import React, { useState, useEffect } from "react";
import getWork from "../data/work";
export default function Work() {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    setCompanies(getWork());
  }, []);
  return (
    <section className="exp-continer sections" id="experience">
      <h1 className="heading">
        <span className="sauce">1. </span>Where I've Worked
      </h1>
      <div className="work">
        {companies.map((company) => (
          <div className="company">
            <div className=" company-name ">
              <a className="sauce">{company.companyName}</a>
            </div>
            <div className="company-desc expand">
              <span className="txt-highlights">{company.position}</span>
              <ul>
                {company.points.map((point) => (
                  <li>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
