import React, { useState } from "react";
import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Work from "./components/Work";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  let [boolean, setBoolean] = useState(false);
  const [mousePosition, SetMousePosition] = useState({
    left: 0,
    top: 0,
  });
  let [cursor, setCursor] = useState(false);
  function handleClick() {
    setBoolean(!boolean);
    console.log(boolean);
  }
  function handleMouseMove(e) {
    SetMousePosition({ left: e.pageX, top: e.pageY });
    // console.log(mousePosition);
  }
  function handleMouseOver(e){
    setCursor(false);
    console.log(e.target)
    if(e.target.tagName=="A"||e.target.parentElement.tagName=="A"){
      setCursor(true);
    }
  }
  return (
    <div onMouseOver={handleMouseOver} onMouseMove={handleMouseMove}>
      <div
        style={{ left: mousePosition.left, top: mousePosition.top }}
        className="cursor"
      >{(cursor&&"Go To")||"hello!"}</div>
      <Navbar handleClick={handleClick} boolean={boolean} />
      <Hero handleClick={handleClick} boolean={boolean} />
      <div
        onClick={() => {
          if (boolean === false) handleClick();
        }}
        className="contain give-padding"
      >
        <About />
        <Work />
        <Projects />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}
