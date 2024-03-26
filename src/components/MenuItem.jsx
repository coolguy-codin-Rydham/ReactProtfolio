import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import PropTypes from 'prop-types';

const MenuItem = ({ menu }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href={menu.uri}
      className="relative flex justify-center p-5 rounded-full cursor-pointer item-center hover:bg-gradient-to-br hover:from-primary hover:to-secondary group"
      onMouseEnter={()=>setIsHovered(true)} onMouseLeave={()=>setIsHovered(false)}
    >
      <menu.Icon
        className={`flex items-center group-hover:text-bgPrimary justify-center text-texlight text-xl`}
      />

      <AnimatePresence>
        {isHovered && (
          <motion.div
          initial={{opacity:0, x:-25}}
          animate={{opacity:1, x:0}}
          exit={{opacity:0, x:-25}}
            className="absolute hidden lg:block px-6 py-2 bg-white rounded-md -left-[140px] bottom-2 after:absolute after:top-3 after:w-3 after:h-3 after:rotate-45 after:-right-1 after:bg-white"
            style={{ boxShadow: "inset 0px 0px 10px rgba(0,0,0,0.4" }}
          >
            <p className="text-bgPrimary ">{menu?.name}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </a>
  );
};

MenuItem.propTypes = {
  menu: PropTypes.shape({
    uri: PropTypes.string,
    name: PropTypes.string.isRequired,
    Icon: PropTypes.elementType.isRequired,
  }).isRequired,
};

export default MenuItem;
