import React from "react";
import { motion } from "framer-motion";
import youtube from "../assets/youtube.png";
import youtube2 from "../assets/youtube2.png";
import insta from "../assets/instagram_2.png";
import insta2 from "../assets/instagram_3.png";

const SocialLinks = (props) => {
  return (
    <div className="flex gap-2 items-center">
      <motion.a
        whileTap={{
          scale: 0.9,
        }}
        href=""
      >
        <img
          src={props.showMenu ? youtube2 : youtube}
          className="cursor-pointer w-7 h-7"
          alt=""
        />
      </motion.a>
      <motion.a
        whileTap={{
          scale: 0.9,
        }}
        href=""
      >
        <img
          src={props.showMenu ? insta2 : insta}
          className="cursor-pointer w-6 h-6"
          alt=""
        />
      </motion.a>
    </div>
  );
};

export default SocialLinks;
