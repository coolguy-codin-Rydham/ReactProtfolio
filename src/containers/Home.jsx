import { Main } from "../assets/index.js";
import { motion, AnimatePresence } from "framer-motion";
import {Socials} from "../utils/helper.js"
import HeroTypeWritter from "../components/HeroTypeWritter.jsx";
import HomeSocialLinks from "../components/HomeSocialLinks.jsx";

const Home = () => {
  return (
    <section
      id="home "
      className="relative flex flex-col items-center justify-center gap-12"
    >
      <div className="grid w-full grid-cols-1 gap-4 lg:grid-cols-2 ">
        {/* Content Section */}
        <div className="flex flex-col items-center justify-center w-full h-full gap-4 lg:items-start">
          <h2 className="text-3xl text-center lg:text-4xl text-texlight lg:text-left">
            Hello, It&apos;s me
            <span className="block mt-4 text-4xl leading-relaxed tracking-wider text-center text-white lg:text-left lg:text-6xl">
               Rydhampreet Singh Gindra
            </span>
          </h2>
          {/* TypeWriter */}

          <h2 className="mt-4 text-2xl lg:text-4xl text-texlight ">
            And I&apos;m&nbsp;
            <HeroTypeWritter words={["a Developer..", "a Student.."]} speed={100}/>
          </h2>


          <p className="mt-6 text-base text-center text-texlight lg:text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto dignissimos itaque pariatur, iste fugiat, placeat facilis suscipit ea debitis eligendi facere praesentium vel magni tempora illum eum distinctio, laboriosam voluptatibus?
          </p>

          {/* Socials */}
          <div className="flex items-center justify-center gap-16 mt-16 ">
            <AnimatePresence>
              {Socials&& Socials.map((item, index)=>{
                return (
                  <HomeSocialLinks data={item} index={index} key={item.id}/>
                )
              })}
            </AnimatePresence>
          </div>

          {/* Hire Me */}

              <a href="#" className="mt-12 border py-3 active:scale-95 rounded px-8 group hover:border-primary border-[rgba(255,255,255,0.3)]"
              style={{boxShadow:"inset 0px 0px 10px rgba(255,255,255,0.3)"}}>
                <p className="group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary text-texlight ">Hire Me</p>
              </a>
          

        </div>
        {/* Image Section */}
        <div className="flex items-start justify-center w-full h-full mt-4 lg:items-center lg:mt-0">
          <motion.img 
          initial={{y:0}}
          animate={{y:[-10,10,-10]}}
          transition={{
            repeat:Infinity,
            duration:2,
            ease:"easeInOut"
          }}
          loading="lazy"
          src={Main} className="object-contain w-auto h-auto border-8 rounded-full border-secondary" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Home;

