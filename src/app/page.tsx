"use client";

import { useEffect } from "react";
import Navbar from "../component/Navbar";
import Hero from "../component/Hero";
import Services from "../component/Services";
import About from "../component/About";
import Demo from "../component/Demo";
import Contact from "../component/Contact";
import Footer from "../component/Footer";

export default function Home() {
  useEffect(() => {
    // Handle hash navigation when coming from signup page
    const hash = window.location.hash;
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, []);

  return (
    <div className="font-sans">
      <Navbar />
      <div id="home">
        <Hero />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="demo">
        <Demo />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </div>
  );
}
