import React from "react";
import  Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import ConnectPage from "./Connect";

function App() {
  return (
    <>
      <Navbar />
      
      <Hero />
      <section id="about">
        <About />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="casefiles">
        <Projects />
      </section>
      <section id="contact">
        <ConnectPage />
      </section>
      
    </>
  );
}

export default App;
