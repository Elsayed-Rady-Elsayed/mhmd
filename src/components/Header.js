import React, { useEffect, useState } from "react";
import logo from "../assets/Signture+Black.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Nav from "./Nav";
import SocialLinks from "./SocialLinks";
import Menu from "./Menu";
const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [heightScreen, setHeight] = useState(0);
  useEffect(() => {
    setHeight(window.innerHeight);
  }, [window.innerHeight]);

  return (
    <header
      className={`${
        showMenu ? "bg-white" : "bg-black"
      } h-24 border-none outline-none`}
    >
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 2,
        }}
        className={`flex items-center ${
          showMenu ? "justify-end" : "justify-between"
        } w-full md:w-[95%] h-full m-auto p-2`}
      >
        <Link to={"/"} className={`${showMenu ? "hidden" : "block"}`}>
          <img src={logo} alt="" className="h-3/4 w-28" />
        </Link>
        <div className="hidden md:block">
          <Nav />
        </div>
        <div className="hidden md:block">
          <SocialLinks />
        </div>
        <div
          onClick={() => {
            setShowMenu((prev) => !prev);
          }}
          className="block md:hidden relative"
        >
          <Menu isOpend={showMenu} />
        </div>
        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          className={`${
            showMenu ? `flex ` : "hidden"
          } absolute z-50 bg-white top-24 left-0 w-full flex-col items-center justify-center`}
          style={{
            height: showMenu ? heightScreen : "",
          }}
        >
          <div className="mb-36">
            <Nav setMenu={setShowMenu} />
          </div>
          <div className="absolute bottom-36 left-1/2 -translate-x-1/2">
            <SocialLinks showMenu={showMenu} />
          </div>
        </motion.div>
      </motion.div>
    </header>
  );
};
export default Header;
