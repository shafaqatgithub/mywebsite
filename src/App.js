
import React from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { selectTheme } from "./store/ThemeSlice";
import { useSelector } from "react-redux";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer"
import Services from "./components/Services";

function App() {
  const currentTheme = useSelector(selectTheme);

  return (
    <div className={currentTheme === 'dark' ? 'bg-gray-950 text-white' : 'bg-white text-black'} style={{ fontFamily: 'Arial, sans-serif' }}>
      <Navbar />
      <Sidebar />
      <Hero id="home"/>
      <Skills/>
      <About id="about"/>
      <Services/>
      <Projects id="projects" />
      <Contact id="contact"/>
      <Footer/>

    </div>
  );
}


export default App