import { motion } from "framer-motion";
import { Leaf1, Leaf2 } from "../assets";
import { SkillArr } from "../utils/helper";
import SkillCard from "../components/SkillCard";

const Skills = () => {
  

  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center gap-12 my-12 "
    >
      {/* Title */}
      <div className="flex items-center justify-center w-full py-24">
        <motion.div
          initial={{ opacity: 0.4, width: 0, fontSize: "2px" }}
          whileInView={{ opacity: 1, width: 200, fontSize: "23px" }}
          exit={{ opacity: 0.4, width: 0, fontSize: "2px" }}
          className="flex items-center justify-center gap-4"
        >
          <img src={Leaf1} className="object-contain w-6 h-auto " />
          <p className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
            Skills
          </p>
          <img src={Leaf2} className="object-contain w-6 h-auto " />
        </motion.div>
      </div>

      {/* Main Content*/}

      <div className="grid w-full grid-cols-1 gap-4 lg:grid-cols-2 ">
        {/* Content */}
        <motion.div 
         initial={{opacity:0.4, x:-50}} 
         whileInView={{opacity:1, x:0}}
         exit={{opacity:0.4, x:-50}}
        className="flex flex-col items-start justify-start w-full gap-4 px-8">
          <h1 className="text-primary">My Skills & Work Experience</h1>
          <p className="text-base tracking-wide text-justify text-texlight">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Dignissimos ipsum amet vero vitae, laboriosam, nihil facere corrupti
            reiciendis qui natus ut voluptates vel tenetur, fuga repudiandae
            fugit? Delectus, doloribus labore.
          </p>
          <p className="text-base tracking-wide text-justify text-texlight">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Dignissimos ipsum amet vero vitae, laboriosam, nihil facere corrupti
            reiciendis qui natus ut voluptates vel tenetur, fuga repudiandae
            fugit? Delectus, doloribus labore.
          </p>
          <p className="text-base tracking-wide text-justify text-texlight">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Dignissimos ipsum amet vero vitae, laboriosam, nihil facere corrupti
            reiciendis qui natus ut voluptates vel tenetur, fuga repudiandae
            fugit? Delectus, doloribus labore.
          </p>
        </motion.div>
        {/* Image */}
        <motion.div 
         initial={{opacity:0.4, x:50}} 
         whileInView={{opacity:1, x:0}}
         exit={{opacity:0.4, x:50}}
        
        className="flex flex-col items-center justify-center w-full gap-4 px-8">
          {SkillArr && SkillArr.map((skill)=>(
            <SkillCard skill={skill.skill} percentage={skill.percentage} color={skill.color} move={skill.move} key={skill.index}/>

          ))}


        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
