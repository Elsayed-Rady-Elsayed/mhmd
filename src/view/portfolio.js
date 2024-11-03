import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import sepector from "../assets/Sperators01.jpg";
import { Link } from "react-router-dom";
import { CircularProgress } from "@chakra-ui/react";
const Portfolio = () => {
  const items = [
    {
      date: "23/12/22",
      image:
        "https://images.unsplash.com/photo-1510495631661-903668f58af2?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Bait Elhawy - بيت الهاوي",
      desc: "Latest Residential Project Bait El-Hawi in Dubail,UAE.",
    },
    {
      date: "23/12/22",

      image:
        "https://images.unsplash.com/photo-1510495631661-903668f58af2?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Bait Elhawy - بيت الهاوي",
      desc: "Latest Residential Project Bait El-Hawi in Dubail,UAE.",
    },
    {
      date: "23/12/22",

      image:
        "https://images.unsplash.com/photo-1481535668376-4c3ab7d84e7d?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Bait Elhawy - بيت الهاوي",
      desc: "Latest Residential Project Bait El-Hawi in Dubail,UAE.",
    },
    {
      date: "23/12/22",

      image:
        "https://images.unsplash.com/photo-1510495631661-903668f58af2?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Bait Elhawy - بيت الهاوي",
      desc: "Latest Residential Project Bait El-Hawi in Dubail,UAE.",
    },
    {
      date: "23/12/22",

      image:
        "https://images.unsplash.com/photo-1481535668376-4c3ab7d84e7d?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Bait Elhawy - بيت الهاوي",
      desc: "Latest Residential Project Bait El-Hawi in Dubail,UAE.",
    },
    {
      date: "23/12/22",

      image:
        "https://images.unsplash.com/photo-1481535668376-4c3ab7d84e7d?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Bait Elhawy - بيت الهاوي",
      desc: "Latest Residential Project Bait El-Hawi in Dubail,UAE.",
    },
    {
      date: "23/12/22",

      image:
        "https://images.unsplash.com/photo-1481535668376-4c3ab7d84e7d?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Bait Elhawy - بيت الهاوي",
      desc: "Latest Residential Project Bait El-Hawi in Dubail,UAE.",
    },
    {
      date: "23/12/22",

      image:
        "https://images.unsplash.com/photo-1481535668376-4c3ab7d84e7d?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Bait Elhawy - بيت الهاوي",
      desc: "Latest Residential Project Bait El-Hawi in Dubail,UAE.",
    },
    {
      date: "23/12/22",

      image:
        "https://images.unsplash.com/photo-1481535668376-4c3ab7d84e7d?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Bait Elhawy - بيت الهاوي",
      desc: "Latest Residential Project Bait El-Hawi in Dubail,UAE.",
    },
    {
      date: "23/12/22",

      image:
        "https://images.unsplash.com/photo-1481535668376-4c3ab7d84e7d?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Bait Elhawy - بيت الهاوي",
      desc: "Latest Residential Project Bait El-Hawi in Dubail,UAE.",
    },
    {
      date: "23/12/22",

      image:
        "https://images.unsplash.com/photo-1481535668376-4c3ab7d84e7d?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Bait Elhawy - بيت الهاوي",
      desc: "Latest Residential Project Bait El-Hawi in Dubail,UAE.",
    },
    {
      date: "23/12/22",

      image:
        "https://images.unsplash.com/photo-1481535668376-4c3ab7d84e7d?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Bait Elhawy - بيت الهاوي",
      desc: "Latest Residential Project Bait El-Hawi in Dubail,UAE.",
    },
    {
      date: "23/12/22",

      image:
        "https://images.unsplash.com/photo-1481535668376-4c3ab7d84e7d?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Bait Elhawy - بيت الهاوي",
      desc: "Latest Residential Project Bait El-Hawi in Dubail,UAE.",
    },
    {
      date: "23/12/22",

      image:
        "https://images.unsplash.com/photo-1481535668376-4c3ab7d84e7d?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Bait Elhawy - بيت الهاوي",
      desc: "Latest Residential Project Bait El-Hawi in Dubail,UAE.",
    },
  ];
  const [scrollPos, setScrollPos] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setScrollPos(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const translateX = Math.sin(scrollPos * 0.01) * 100;
  const [start, setStart] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setStart(true);
    }, 2000);
  }, []);
  return !start ? (
    <div className="h-[99vh] w-full bg-white flex items-center justify-center">
      <CircularProgress
        isIndeterminate
        value={30}
        color="black"
        thickness="3px"
      />
    </div>
  ) : (
    <motion.div
      initial={{
        x: "100vw",
      }}
      animate={{
        x: "0",
      }}
      exit={{
        x: "-100vw",
      }}
      transition={{
        duration: 0.4,
      }}
    >
      <Header />
      <div className="container m-auto">
        <motion.p
          className="text-center text-sm font-light py-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            delay: 0.2,
            duration: 1.5,
          }}
        >
          Portfolio
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            delay: 0.2,
            duration: 1.5,
          }}
          className="text-center text-2xl md:text-4xl font-bold"
        >
          My Architectural Portfolio:
        </motion.p>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          delay: 0.2,
          duration: 1.5,
        }}
        className="overflow-hidden text-center text-4xl font-bold relative h-[60vh] mt-1"
      >
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            delay: 0.2,
            duration: 1.5,
          }}
          className="z-40 text-center text-2xl md:text-4xl font-bold absolute left-1/2 -translate-x-1/2 w-full"
        >
          Designs and Explorations.
        </motion.p>
        <motion.img
          className="md:h-fit h-[80%] w-full opacity-50"
          style={{
            position: "absolute",
            transform: `translateX(${translateX}px)`,
          }}
          src={sepector}
          alt=""
          initial={{ scale: 1 }}
          whileInView={{ scale: 1.2 }}
          transition={{
            duration: 2,
            ease: "linear",
          }}
        />
      </motion.div>
      <div className="container m-auto flex flex-wrap md:py-16 py-16 md:px-20">
        {items.map((el, index) => {
          return (
            <motion.div
              className="w-full md:w-1/2 p-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                delay: 0.2,
                duration: 1.5,
                straggleChildren: 0.5,
              }}
            >
              <Link
                to=""
                className="inline-block w-full p-2 md:p-0 md:h-[350px] lg:h-[480px] text-start"
                key={index}
              >
                <img
                  src={el.image}
                  alt=""
                  className="w-full h-[230px] lg:h-[380px]"
                />
                <p className="font-light text-sm mt-2">{el.date}</p>
                <p className="font-bold text-lg">{el.title}</p>
                <p className="text-sm mt-1">{el.desc}</p>
                <Link
                  to="/"
                  className="border-b border-[#121212] mt-1 inline-block text-sm text-black"
                >
                  Explore more
                </Link>
              </Link>
            </motion.div>
          );
        })}
      </div>
      <Footer />
    </motion.div>
  );
};
export default Portfolio;
