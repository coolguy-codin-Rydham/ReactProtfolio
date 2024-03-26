import { motion } from "framer-motion";
import { Leaf1, Leaf2, Main } from "../assets";

const About = () => {
  return (
    <section
      id="about"
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
            About
          </p>
          <img src={Leaf2} className="object-contain w-6 h-auto " />
        </motion.div>
      </div>

      {/* Main Content*/}

      <div className="grid w-full grid-cols-1 gap-4 lg:grid-cols-2 ">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0.4, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0.4, x: -50 }}
          className="flex items-center justify-center w-full px-8"
        >
          <div className="w-full lg:w-96 p-[2px] rounded-md bg-gradient-to-br from-primary to-secondary relative">
            <img
              src={Main}
              className="object-contain w-full h-auto rounded-md "
              alt=""
            />
            <div className="absolute w-full h-full rounded-md blur-[5px] -z-10 -top-3 -left-2 bg-gradient-to-br from-primary to-secondary "></div>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0.4, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0.4, x: 50 }}
          className="flex flex-col items-start justify-start w-full gap-4 px-8"
        >
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
      </div>
    </section>
  );
};

export default About;
