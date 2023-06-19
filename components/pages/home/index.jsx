import React, { useEffect } from "react";
import Header from "../../itemsList/Header";
import Hero from "../../hero/Hero";
import About from "../../about/About";
import Skills from "../../skills/Skills";
import Projects from "../../projects/Projects";
import Experience from "../../experience/Experience";
import VerticalPoints from "../../itemsList/VerticalPoints";

const Home = () => {
  return (
    <div className="parent">
      <VerticalPoints />
      <section id="home">
        <Header />
        <Hero />
      </section>

      <section className="project_section" id="projects">
        <div className="lemsainnov_tm_testimonials">
          <img className="img_point1" src="/img/points/points.png" alt="" />

          <div className="container">
            <div
              className="lemsainnov_tm_title"
              data-aos="fade-down"
              data-aos-duration="1200"
              data-aos-delay="100"
            >
              <h3>Projects</h3>
            </div>
            <div className="list">
              <ul>
                <Projects />
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="skills_section">
        <Skills />
      </section>

      <section className="experience_section" id="eperience">
        <Experience />
      </section>

      <section id="about">
        <About />
      </section>
    </div>
  );
};

export default Home;
