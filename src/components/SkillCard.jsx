import { motion } from "framer-motion";
const SkillCard = ({ skill, percentage, color, move }) => {
  return (
    <div
      className={`border items-center justify-between flex border-white/30 rounded-md px-8 py-3 cursor-pointer group w-full`}
      style={{
        boxShadow: "inset 0 0 10px rgba(255,255,255,0.3)",
        marginLeft: move?-30:20,
      }}
    >
      {/* Name Section */}
      <div className="flex flex-col items-start justify-start flex-1 gap-2">
        <p className="text-base text-white">{skill}</p>
        <div className="relative w-full h-1 overflow-hidden rounded-md bg-white/20 ">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: percentage }}
            transition={{ duration: 1.5 }}
            className="absolute top-0 left-0 h-full"
            style={{ background: color }}
          ></motion.div>
        </div>
      </div>
      {/* Percentage */}

      <div
        className="relative flex items-center justify-center w-16 h-12 overflow-hidden rounded-md "
        style={{ border: `1px solid ${color}` }}
      >
        <motion.div
          initial={{ height: 0 }}
          whileInView={{ height: percentage }}
          transition={{ duration: 1.5 }}
          style={{background:color}}
          className="absolute bottom-0 left-0 flex items-center justify-center w-full"
        >
          <p className="z-10 font-sans font-bold tracking-wider text-bgPrimary">
            {percentage}
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default SkillCard;
