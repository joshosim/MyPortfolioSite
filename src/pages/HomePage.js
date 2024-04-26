import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Social from "../components/Social";
import Projects from "../components/Projects";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div className="scroll-smooth">
      <div className="pt-4 bg-[#BBDEFA] scroll-smooth">
        <Navbar />
        <Hero />
        <About />
        <Social />
        <Projects />
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
