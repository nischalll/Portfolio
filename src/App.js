import React, { useState } from "react";
import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Work from "./components/Work";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App(){
  let [boolean, setBoolean]=useState(false);
  function handleClick(){
      setBoolean(!boolean)
      console.log(boolean)
  }
    return (
      <React.Fragment>
        <Navbar
          handleClick={handleClick}
          boolean={boolean}
        />
        <Hero handleClick={handleClick} boolean={boolean} />
        <div onClick={()=>{if(boolean===false)handleClick()}} className="contain give-padding">
          <About />
          <Work />
          <Projects />
          <Contact />
        </div>
        <Footer />
      </React.Fragment>
    );
}

