import React from "react";
import {motion} from 'framer-motion';

export const Alert = () => {
  return (
    <motion.div initial={{scale: 0}} animate={{scale:1}} transition={{duration:0.5,bounce:0.8,type:'spring'}} className="alert alert-error shadow-lg max-w-md  absolute font-bold top-20">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="stroke-current flex-shrink-0 h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span>Error! Task failed. </span>
      </div>
    </motion.div>
  );
};