import { HomeSocialLinks } from "../components";
import { Socials } from "../utils/helper";
import About from "./About";
import Contact from "./Contact";
import Header from "./Header";
import Home from "./Home";
import ParticlesContainer from "./ParticlesContainer";
import Projects from "./Projects";
import ServiceCount from "./ServiceCount";
import Skills from "./Skills";
import {motion, AnimatePresence } from "framer-motion";

const App = () => {
  return (
    <div className="w-full xl:w-[1500px] py-32 px-4 lg:px-12 pr-4 lg:pr-32">
      {/* Particles */}
      <ParticlesContainer id={"main"}/>
      {/* Header */}
      <Header />

      {/* Home */}
      <Home />

      {/* Services count cards */}
      <ServiceCount />

      {/* About */}
      <About />
      {/* Skills */}
      <Skills />

      {/* Projects */}
      <Projects />

      {/* Contact Container */}
      <Contact />

      {/* Footer */}
      <div className="flex flex-col items-center justify-start w-full ">
        <p className="text-3xl tracking-wide text-texlight">
          Rydhampreet Singh Gindra
        </p>
        <div className="flex items-center justify-center gap-16 mt-32 mb-12">
          <AnimatePresence>
            {Socials &&
              Socials.map((item, index) => {
                return (
                  <HomeSocialLinks data={item} index={index} key={item.id} />
                );
              })}
          </AnimatePresence>
        </div>
        <div className="grid grid-cols-1 gap-10 mt-16 lg:grid-cols-3">
          <motion.p
          initial={{opacity:0, y:20}}
          whileInView={{opacity:1, y:0}}
          exit={{opacity:0, y:20}}
          transition={{delay:0.4, duration:1}}

          className="text-center text-texlight">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio pariatur sint, ullam autem laborum reiciendis modi qui distinctio quasi voluptas dolore deserunt a rerum nobis magnam ratione dolorum? Iure, sapiente!</motion.p>
          <motion.p 
          initial={{opacity:0, y:20}}
          whileInView={{opacity:1, y:0}}
          exit={{opacity:0, y:20}}
          transition={{delay:0.4, duration:1}}
          
          className="text-center text-texlight">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio pariatur sint, ullam autem laborum reiciendis modi qui distinctio quasi voluptas dolore deserunt a rerum nobis magnam ratione dolorum? Iure, sapiente!</motion.p>
          <motion.div
          initial={{opacity:0, y:20}}
          whileInView={{opacity:1, y:0}}
          exit={{opacity:0, y:20}}
          transition={{delay:0.4, duration:1}}
          className="flex flex-col items-center justify-center w-full gap-3">
            <a href="mailto:rydhampreetsingh.gindra@gmail.com" className="text-center text-texlight">rydhampreetsingh.gindra@gmail.com</a>
            <p className="text-center text-texlight ">+919518442987</p>
            <a className="text-center text-texlight" href="#">
              <p className="text-center text-primary"> Hire Me</p>
              </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default App;
