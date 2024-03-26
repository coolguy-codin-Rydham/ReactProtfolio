import {AnimatePresence, motion} from "framer-motion"
import { Leaf1, Leaf2 } from "../assets";
import {  ProjectsMain } from "../utils/helper";
import ProjectCard from "../components/ProjectCard";
const Projects = () => {
  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center gap-12 my-12 "
    >
      {/* Title */}
      <div className="flex items-center justify-center w-full py-24">
        <motion.div
          initial={{ opacity: 0.4, width: 0, fontSize: 0 }}
          whileInView={{ opacity: 1, width: 200, fontSize: "23px" }}
          exit={{ opacity: 0.4, width: 0, fontSize: 0 }}
          className="flex items-center justify-center gap-4"
        >
          <img src={Leaf1} className="object-contain w-6 h-auto " />
          <p className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
            Projects
          </p>
          <img src={Leaf2} className="object-contain w-6 h-auto " />
        </motion.div>
      </div>

      {/* Main Content*/}

      <div className="grid w-full grid-cols-1 gap-4 lg:grid-cols-3 ">
        <AnimatePresence>
          {ProjectsMain && ProjectsMain.map((project)=>{
            return (
              <ProjectCard project={project} key={project.id}/>
            )
          })}
        </AnimatePresence>
      </div>
    </section>
  )
  
  
  ;
};

export default Projects;
