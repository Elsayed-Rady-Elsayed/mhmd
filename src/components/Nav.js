import React from "react";
import { NavLink } from "react-router-dom";

const Nav = (props) => {
  const activeLink = ({ isActive }) => {
    return {
      borderBottom: isActive ? "1px solid white" : "none",
    };
  };
  return (
    <nav className="text-black text-3xl md:text-lg border-none  h-full justify-center flex-col md:flex-row flex gap-5 text-[20px] md:text-white items-center">
      <NavLink
        onCanPlay={() => {
          props.setMenu(false);
        }}
        style={activeLink}
        to={"/"}
      >
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
  );
};

export default Nav;
