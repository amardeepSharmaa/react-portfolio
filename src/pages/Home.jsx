import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import TechStack from "../components/TechStack";
import About from "../components/About";
import Services from "../components/Services";
import Skills from "../components/Skills";
import Process from "../components/Process";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import WhyMe from "../components/WhyMe";
import Github from "../components/Github";
// import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    const sectionId = location.state?.scrollTo;

    if (!sectionId) return;

    requestAnimationFrame(() => {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    });
  }, [location.state]);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <TechStack />
        <About />
        <Skills />
        <Process />
        <Experience />
        <Projects />
        <Services />
        <WhyMe />
        {/* <Github /> */}
        {/* <Testimonials /> */}
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
