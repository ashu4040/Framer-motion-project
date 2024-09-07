import React from "react";
import { FaFileCode } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";

const Card = ({ data, reference }) => {
  return (
    <motion.div
      drag
      dragConstraints={reference}
      whileDrag={{ scale: 1.1 }}
      className=" relative w-60 h-72 rounded-[50px] bg-zinc-900/90 text-white px-5 py-10 overflow-hidden"
    >
      <FaFileCode />
      <p className="text-sm leading-tight mt-5 font-semibold">{data.details}</p>
      <div className="footer absolute bottom-0 left-0 bg-sky-950 w-full py-7   h-20">
        <div className="flex items-center justify-between mb-5 px-8">
          <p>{data.filesize}</p>
          {data.close ? <FaChevronDown /> : <IoMdClose />}
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
