import {motion, AnimatePresence} from "framer-motion"
import { useState } from "react"
import { FaGithub } from "react-icons/fa6"
import PropTypes from "prop-types";

const ProjectCard = ({project}) => {
    const [Hovered, setHovered] = useState(false)

  return (
    <motion.div initial={{opacity:0}} whileInView={{opacity:1}} key={project.id} onMouseEnter={()=>setHovered(true)} onMouseLeave={()=>setHovered(false)} className="relative overflow-hidden rounded-md cursor-pointer">
        <motion.img
        whileHover={{scale:1.1}} className="object-contain w-full h-full rounded-md" src={project.imgSrc}/>
        <AnimatePresence>
        {Hovered && (<motion.div key={project.id} initial={{y:"100%", opacity:0}} animate={{y:0, opacity:1}} exit={{y:"100%", opacity:0}}  className="absolute inset-0 flex flex-col items-center justify-center gap-2 backdrop-blur-md bg-black/60">
            <p className="text-xl text-primary ">{project?.name}</p>
            <a href={project?.gitURL}>
                <FaGithub className="text-3xl text-white hover:text-primary"/>
            </a>
        </motion.div>)}
        </AnimatePresence>
    </motion.div>
  )
}

ProjectCard.propTypes = {
    project: PropTypes.shape({
      id: PropTypes.string.isRequired,
      imgSrc: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      gitURL: PropTypes.string.isRequired,
    }).isRequired,
  };
  

export default ProjectCard
