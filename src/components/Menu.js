import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
const Menu = (props) => {
  const [rotat, setRotate] = useState(false);
  useEffect(() => {
    if (props.isOpend) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
  }, [props.isOpend]);
  return (
    <motion.div
      onClick={() => {
        setRotate((prev) => !prev);
      }}
      className="flex flex-col gap-3 content-end "
    >
      <motion.span
        style={{
          rotate: rotat ? "50deg" : "0deg",
          translateY: rotat ? "-1px" : "0px",
        }}
        className={`w-8 h-[1px] ${props.isOpend ? "bg-black" : "bg-white"}`}
      ></motion.span>
      <motion.span
        style={{
          rotate: rotat ? "-50deg" : "0deg",
          translateY: rotat ? "-14px" : "0px",
        }}
        className={`w-8 h-[1px] ${props.isOpend ? "bg-black" : "bg-white"}`}
      ></motion.span>
    </motion.div>
  );
};

export default Menu;
