import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import PropTypes from "prop-types";
const HomeSocialLinks = ({ data, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <motion.a
      href={data.uril}
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 25 }}
      transition={{
        delay: index * 0.1,
      }}
      className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary relative cursor-pointer p-[2px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AnimatePresence>
        {isHovered && (
          <motion.div
            className={`absolute inset-1 blur-md bg-gradient-to-br from-primary to-secondary -z-10`}
          ></motion.div>
        )}
        <motion.div className="flex items-center justify-center w-full h-full rounded-full bg-bgPrimary ">
          <data.Icon className={`text-texlight`} />
        </motion.div>
      </AnimatePresence>
    </motion.a>
  );
};

HomeSocialLinks.propTypes = {
  data: PropTypes.shape({
    uril: PropTypes.string.isRequired,
    Icon: PropTypes.elementType.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default HomeSocialLinks;
