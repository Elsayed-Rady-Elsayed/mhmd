import React, { useEffect, useRef, useState } from "react";
import { delay, motion } from "framer-motion";
import Header from "../components/Header";
import myPhoto from "../assets/429328042_395614823057340_5042337471882435704_n.jpg";
import { Link } from "react-router-dom";

import Footer from "../components/Footer";

function About() {
  return (
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
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            delay: 0.2,
            duration: 1.5,
          }}
          className="aboutMe md:my-20 md:mb-56 my-10 flex bg-white md:p-20 p-5 items-center justify-between md:flex-row-reverse flex-col-reverse lg:px-32 2xl:px-96"
        >
          <div className="left md:w-1/2">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 1.5 }}
              className="text-3xl md:text-5xl lg:text-4xl font-semibold mt-5 md:mt-0"
            >
              A master’s graduate in architecture who is driven by a deep
              passion for architecture.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                delay: 0.2,
                duration: 1.5,
              }}
            ></motion.div>
          </div>
          <div className="right w-fit m-auto">
            <motion.img
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 1.5 }}
              src={myPhoto}
              alt=""
              className="w-[400px] h-[500px] md:w-[480px] md:h-[380px] lg:w-[620px] lg:h-[450px] "
            />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            delay: 0.2,
            duration: 1.5,
          }}
          className="md:my-20 w-full md:w-2/3 m-auto p-2 md:p-0"
        >
          I am an Egyptian and was born in Al Mahalla Al Kubra city in the
          Middle of Delta. A city was called once the industrial capital of
          Egypt. I graduated from Mansoura University in Egypt in 2014 and
          embarked on my journey into the professional world. Eager to expand my
          knowledge, I began my master's studies at Cairo University while
          simultaneously working. However, due to the unstable circumstances at
          the time, I found it challenging to sustain my life in Cairo.
          Consequently, I made the difficult decision to drop out of my master's
          program after a year and started seeking job opportunities outside of
          Egypt. In 2015, I made my way to Qatar and secured a position as a
          junior architect in a medium-sized firm with an extensive portfolio of
          medium to large-scale projects. It was there that I experienced the
          professional field firsthand, learning valuable lessons from my
          colleagues. After two years of dedicated work, I was promoted to the
          design team in Doha, where I had the opportunity to contribute to
          numerous projects and competitions during the design phase. During my
          time in Doha, my passion for travel began to take shape. I started
          saving money to explore various countries every six months, venturing
          to more than 22 countries in Asia and Southeast Asia. The allure of
          witnessing and immersing myself in old and traditional architecture
          fueled my curiosity. In 2019, I decided to pursue my long-standing
          dream of completing my master's studies in architecture. I joined the
          Master of Art in Architecture program at Anhalt University of Applied
          Sciences in Dessau, Germany. During my studies, I actively
          participated in competitions and honed my skills in urban sketching,
          film production, and traveled extensively throughout Europe, embracing
          the diversity of cultures. One of the highlights of my educational
          journey was working closely with Professor Ivan Kucina on my thesis
          project, which explored the topic of informality and informal
          settlements in Cairo. The culmination of my efforts resulted in
          winning the prestigious Robert Oxman prize for my thesis. The time I
          spent in Dessau was truly unforgettable, and it further fueled my
          passion for architecture. Following my enriching experiences in
          Dessau, I relocated to Munich and joined an architecture office.
          Currently, I am working with one of the largest construction companies
          in Germany as a BIM Architect, utilizing my skills and expertise in
          this innovative field. Overall, my journey as an architect has been
          marked by both professional growth and personal fulfillment. From
          graduating in Egypt to working in Qatar, pursuing my master's studies
          in Germany, and finally finding myself in Munich, I am constantly
          driven by a deep passion for architecture and an insatiable curiosity
          to explore new horizons.
        </motion.div>
      </div>
      <Footer />
    </motion.div>
  );
}

export default About;
