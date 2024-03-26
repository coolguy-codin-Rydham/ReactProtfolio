import {motion} from "framer-motion"
import PropTypes from "prop-types";
const Alert = ({status, message}) => {
  const statusConfig = {
    success:{
      bgColor:"bg-primary",
      borderColor:"border-primary",
      textColor:"text-primary",
    },
    warning:{
      bgColor:"bg-yellow-400",
      borderColor:"border-yellow-400",
      textColor:"text-yellow-400",
    },
    danger:{
      bgColor:"bg-red-400",
      borderColor:"border-red-400",
      textColor:"text-red-400"
    }
  }
  const config = statusConfig[status]
  return (
    <motion.div 
    initial={{opacity:0, x:50}}
    animate={{opacity:1, x:0}}
    exit={{opacity:0, x:50}}
    transition={{duration:0.2}}
    className={`fixed top-12 right-12 px-3 py-3 rounded-md border ${config.borderColor} w-auto overflow-hidden backdrop-blur-md`}>
      <p className={`${config.textColor}`}>{message}</p>
      <div className="absolute inset-x-0 bottom-0 h-1 bg-white/50">
        <motion.div className={`${config.bgColor} h-full`}
        initial={{width:0}}
        animate={{width:"100%"}}
        exit={{width:0}}
        transition={{duration:4, delay:0.5}}
        ></motion.div>
      </div>

    </motion.div>
  );
};
Alert.propTypes = {
  status: PropTypes.oneOf(["success", "warning", "danger"]).isRequired,
  message: PropTypes.string.isRequired,
};
export default Alert;
