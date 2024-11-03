import React, { useEffect, useState } from "react";
import logo from "../assets/Signture+Black.png";
import { motion } from "framer-motion";
import { Link, NavLink } from "react-router-dom";
import Nav from "./Nav";
import SocialLinks from "./SocialLinks";
import Menu from "./Menu";
const Footer = () => {
  const activeLink = ({ isActive }) => {
    return {
      borderBottom: isActive ? "1px solid white" : "none",
    };
  };
  return (
    <div className={`bg-black border-none outline-none`}>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          delay: 0.2,
          duration: 1.5,
        }}
        className={`flex items-center gap-5 justify-between w-full md:w-[95%] h-full m-auto md:p-20 p-10 flex-col text-white md:flex-row`}
      >
        <Link to={"/"} className={``}>
          <img src={logo} alt="" className="h-3/4 w-28" />
        </Link>
        <nav className="text-white text-3xl md:text-lg border-none  h-full justify-center flex-col md:flex-row flex gap-5 text-[20px] md:text-white items-center">
          <NavLink style={activeLink} to={"/"}>
            Home
          </NavLink>
          <NavLink style={activeLink} to={"/Portfolio"}>
            Portfolio
          </NavLink>
          <NavLink style={activeLink} to={"/Gallery"}>
            Gallery
          </NavLink>
          <NavLink style={activeLink} to={"/About"}>
            About
          </NavLink>
        </nav>
        <SocialLinks />
      </motion.div>
    </div>
  );
};

export default Footer;
