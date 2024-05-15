import React, { useContext } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Social from "../components/Social";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import DialogBox from "../components/Dialog";
import { DialogContext } from "../context/dialogContext";

const HomePage = () => {
  const { dialog } = useContext(DialogContext);
  return (
    <div className="scroll-smooth">
      <div className="pt-4 bg-[#BBDEFA] scroll-smooth">
        <Navbar />
        <Hero />
        <About />
        <Social />
        <Projects />
        <Footer />
        {dialog && <DialogBox />}
      </div>
    </div>
  );
};

export default HomePage;
