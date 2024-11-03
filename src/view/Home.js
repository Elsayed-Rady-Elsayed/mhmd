import React, { useEffect, useRef, useState } from "react";
import { delay, motion } from "framer-motion";
import archWireFrame from "../assets/HeroImage03.jpg";
import { CircularProgress, transition } from "@chakra-ui/react";
import Header from "../components/Header";
import myPhoto from "../assets/429328042_395614823057340_5042337471882435704_n.jpg";
import { Link } from "react-router-dom";
import wireframVid from "../assets/Wireframe and Architecture.mp4";

import { Application, Assets, Sprite } from "pixi.js";
import Footer from "../components/Footer";

const Home = () => {
  const galleryRefBtn1 = useRef();
  const galleryRefBtn2 = useRef();
  const PortofolioRefBtn1 = useRef();
  const PortofolioRefBtn2 = useRef();
  const [start, setStart] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setStart(true);
    }, 2000);
  }, []);
  if (window.innerWidth > 500) {
    (async () => {
      // Create a new application
      const app1 = new Application({
        width: 900, // Set the desired width
        height: 900, // Set the desired height
        transparent: true, // Transparent background
      });

      // Initialize the application
      await app1.init({ resizeTo: 900 });

      // Append the application canvas to the document body
      if (start) {
        if (document.getElementById("imageFluid").childNodes.length === 0) {
          document.getElementById("imageFluid").appendChild(app1.view);
        } else {
        }
      }

      // Load the image texture
      const texture = await Assets.load(
        "https://images.squarespace-cdn.com/content/v1/6490d6980f860359c2fb9faf/e56cf5f2-c377-4ced-80c6-b4080fcb5874/HeroImage03.jpg?format=600w 600w"
      );

      // Create a sprite with the loaded texture
      const sprite = new Sprite(texture);

      // Set the desired size and position for the square area
      const squareSize = 800; // Size of the square
      const positionX = (app1.screen.width - squareSize) / 2; // Center the square horizontally
      const positionY = (app1.screen.height - squareSize) / 2; // Center the square vertically

      // Resize the sprite to fit within the square
      sprite.width = squareSize;
      sprite.height = squareSize;

      // Position the sprite within the square
      sprite.x = -50;
      sprite.y = positionY + 50;

      // Add the sprite to the stage
      app1.stage.addChild(sprite);

      let count = 0;

      // Animate the sprite
      app1.ticker.add(() => {
        count += 0.02;

        // Optional: You can add some animations to the sprite (e.g., scaling or rotation)
        sprite.scale.x = 1 + Math.sin(count) * 0.05;
        sprite.scale.y = 1 + Math.cos(count) * 0.05;
      });
    })();
  } else {
    (async () => {
      // Create a new application
      const app1 = new Application({
        width: 900, // Set the desired width
        height: 900, // Set the desired height
        transparent: true, // Transparent background
      });

      // Initialize the application
      await app1.init({ resizeTo: 900 });

      // Append the application canvas to the document body
      if (start) {
        if (document.getElementById("imageFluid").childNodes.length === 0) {
          document.getElementById("imageFluid").appendChild(app1.view);
        } else {
        }
      }

      // Load the image texture
      const texture = await Assets.load(
        "https://images.squarespace-cdn.com/content/v1/6490d6980f860359c2fb9faf/e56cf5f2-c377-4ced-80c6-b4080fcb5874/HeroImage03.jpg?format=400w 400w"
      );

      // Create a sprite with the loaded texture
      const sprite = new Sprite(texture);

      // Set the desired size and position for the square area
      const squareSize = 800; // Size of the square
      const positionX = (app1.screen.width - squareSize) / 2; // Center the square horizontally
      const positionY = (app1.screen.height - squareSize) / 2; // Center the square vertically

      // Resize the sprite to fit within the square
      sprite.width = squareSize;
      sprite.height = squareSize;

      // Position the sprite within the square
      sprite.x = positionX + 140;
      sprite.y = positionY + 50;

      // Add the sprite to the stage
      app1.stage.addChild(sprite);

      let count = 0;

      // Animate the sprite
      app1.ticker.add(() => {
        count += 0.02;

        // Optional: You can add some animations to the sprite (e.g., scaling or rotation)
        sprite.scale.x = 1 + Math.sin(count) * 0.05;
        sprite.scale.y = 1 + Math.cos(count) * 0.05;
      });
    })();
  }

  const items = [
    {
      image:
        "https://images.unsplash.com/photo-1510495631661-903668f58af2?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Bait Elhawy - بيت الهاوي",
      desc: "Latest Residential Project Bait El-Hawi in Dubail,UAE.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1510495631661-903668f58af2?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Bait Elhawy - بيت الهاوي",
      desc: "Latest Residential Project Bait El-Hawi in Dubail,UAE.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1481535668376-4c3ab7d84e7d?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Bait Elhawy - بيت الهاوي",
      desc: "Latest Residential Project Bait El-Hawi in Dubail,UAE.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1510495631661-903668f58af2?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Bait Elhawy - بيت الهاوي",
      desc: "Latest Residential Project Bait El-Hawi in Dubail,UAE.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1481535668376-4c3ab7d84e7d?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Bait Elhawy - بيت الهاوي",
      desc: "Latest Residential Project Bait El-Hawi in Dubail,UAE.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1481535668376-4c3ab7d84e7d?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Bait Elhawy - بيت الهاوي",
      desc: "Latest Residential Project Bait El-Hawi in Dubail,UAE.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1481535668376-4c3ab7d84e7d?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Bait Elhawy - بيت الهاوي",
      desc: "Latest Residential Project Bait El-Hawi in Dubail,UAE.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1481535668376-4c3ab7d84e7d?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Bait Elhawy - بيت الهاوي",
      desc: "Latest Residential Project Bait El-Hawi in Dubail,UAE.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1481535668376-4c3ab7d84e7d?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Bait Elhawy - بيت الهاوي",
      desc: "Latest Residential Project Bait El-Hawi in Dubail,UAE.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1481535668376-4c3ab7d84e7d?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Bait Elhawy - بيت الهاوي",
      desc: "Latest Residential Project Bait El-Hawi in Dubail,UAE.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1481535668376-4c3ab7d84e7d?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Bait Elhawy - بيت الهاوي",
      desc: "Latest Residential Project Bait El-Hawi in Dubail,UAE.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1481535668376-4c3ab7d84e7d?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Bait Elhawy - بيت الهاوي",
      desc: "Latest Residential Project Bait El-Hawi in Dubail,UAE.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1481535668376-4c3ab7d84e7d?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Bait Elhawy - بيت الهاوي",
      desc: "Latest Residential Project Bait El-Hawi in Dubail,UAE.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1481535668376-4c3ab7d84e7d?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Bait Elhawy - بيت الهاوي",
      desc: "Latest Residential Project Bait El-Hawi in Dubail,UAE.",
    },
  ];
  const animateVariant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 3,
        staggerChildren: 0.5,
      },
    },
  };

  const [scrollPos, setScrolPos] = useState(0);
  const [scrollPosg, setScrolPosg] = useState(0);

  const containerRef = useRef();
  const GalleryContainerRef = useRef();
  const handleScroll = (amount, ref) => {
    const newPos = scrollPos + amount;
    setScrolPos(newPos);
    ref.current.scrollLeft = newPos;
  };
  const handleScrollg = (amount, ref) => {
    const newPos = scrollPosg + amount;
    setScrolPosg(newPos);
    ref.current.scrollLeft = newPos;
  };
  const title = "Hello,I’m Mohamed, an Architectural designer. ";
  const pVariant = {
    hidden: {
      y: -10,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

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
      className=" "
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
      <div className="bg-black overflow-hidden">
        <motion.div
          variants={pVariant}
          initial="hidden"
          animate="visible"
          whileInView={{
            opacity: 1,
          }}
          transition={{
            delay: 0.5,
            duration: 3,
          }}
          className={`w-full md:w-[90%] flex-col md:flex-row m-auto flex items-center text-white lg:h-[95vh]`}
        >
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 1.5 }}
            className="md:w-1/2 w-full p-2"
          >
            {title.split(",").map((el, idx) => {
              return (
                <motion.p
                  variants={pVariant}
                  key={idx}
                  className="text-white text-3xl md:text-5xl font-bold tracking-wider "
                >
                  {el}
                  {idx < 2 ? "," : ""}
                </motion.p>
              );
            })}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 1.5 }}
              className="mt-3 md:w-3/4 w-[90%] tracking-wider text-md md:text-lg"
            >
              Welcome to my Creative Realm, I do architecture, like to sketch a
              lot, travel whenever I can, experience architecture, and tell
              stories through Film and Photography. This place is an
              accumulation of what I do.
            </motion.p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 1.5 }}
            className="md:w-1/2 h-[90%] md:mt-[14%]"
            id="imageFluid"
          >
            {/* <img
              className="w-full h-full"
              loading="lazy"
              src={archWireFrame}
              alt=""
            /> */}
          </motion.div>
        </motion.div>
      </div>
      <div className="aboutMe flex bg-white md:p-20 p-5 items-center justify-between md:flex-row flex-col-reverse lg:px-32 2xl:px-96">
        <div className="left md:w-1/2">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 1.5 }}
            className="text-2xl md:text-5xl lg:text-4xl font-semibold mt-5 md:mt-0"
          >
            A master’s graduate in architecture who is driven by a deep passion
            for architecture and a curiosity to explore new horizons.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              delay: 0.2,
              duration: 1.5,
            }}
          >
            <Link
              to={"/About"}
              className="bg-[#121212] inline-block mt-5 py-2 px-8 text-white"
            >
              About Me
            </Link>
          </motion.div>
        </div>
        <div className="right w-fit m-auto">
          <motion.img
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 1.5 }}
            src={myPhoto}
            alt=""
            className="w-[400px] h-[300px] md:w-[380px] md:h-[280px] lg:w-[420px] lg:h-[430px] "
          />
        </div>
      </div>
      <div className=" text-center md:py-20 py-10 relative">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 1.5 }}
          className="md:text-5xl text-4xl font-semibold"
        >
          Featured Contents
        </motion.p>
        <button
          ref={PortofolioRefBtn1}
          onMouseOver={() => {
            PortofolioRefBtn1.current.classList.remove("hidden");
            PortofolioRefBtn2.current.classList.remove("hidden");
          }}
          onMouseOut={() => {
            PortofolioRefBtn1.current.classList.add("hidden");
            PortofolioRefBtn2.current.classList.add("hidden");
          }}
          onClick={() => {
            handleScroll(window.innerWidth < 500 ? -300 : -230, containerRef);
          }}
          className="absolute z-50 start-0 bg-black text-white md:w-16 md:h-16 w-10 h-10 rounded-full text-2xl pb-1 hidden items-center justify-center top-2/4 ms-2"
        >
          &lt;
        </button>
        <div className="flex items-center gap-2">
          <motion.div
            onMouseOver={() => {
              PortofolioRefBtn1.current.classList.remove("hidden");
              PortofolioRefBtn2.current.classList.remove("hidden");
            }}
            onMouseOut={() => {
              PortofolioRefBtn1.current.classList.add("hidden");
              PortofolioRefBtn2.current.classList.add("hidden");
            }}
            variants={animateVariant}
            initial="hidden"
            animate="visible"
            className="scroll-smooth flex gap-2 overflow-x-scroll overflow-y-visible mt-10 relative"
            ref={containerRef}
          >
            {items.map((el, index) => {
              return (
                <motion.Link
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{
                    delay: 0.2,
                    duration: 1.5,
                    straggleChildren: 0.5,
                  }}
                  to=""
                  className="inline-block p-2 md:p-0 md:min-w-[280px] md:h-[350px] lg:min-w-[480px] lg:h-[480px] min-w-full text-start"
                  key={index}
                >
                  <img
                    src={el.image}
                    alt=""
                    className="w-full h-[230px] lg:h-[380px] rounded-lg"
                  />
                  <p className="font-bold text-lg">{el.title}</p>
                  <p className="text-sm mt-1">{el.desc}</p>
                  <Link
                    to="/"
                    className="bg-[#121212] mt-1 inline-block py-2 px-3 text-white"
                  >
                    Explore more
                  </Link>
                </motion.Link>
              );
            })}
          </motion.div>
        </div>
        <button
          ref={PortofolioRefBtn2}
          onMouseOver={() => {
            PortofolioRefBtn1.current.classList.remove("hidden");
            PortofolioRefBtn2.current.classList.remove("hidden");
          }}
          onMouseOut={() => {
            PortofolioRefBtn1.current.classList.add("hidden");
            PortofolioRefBtn2.current.classList.add("hidden");
          }}
          onClick={() => {
            handleScroll(
              window.innerWidth < 500 ? window.innerWidth + 7 : 230,
              containerRef
            );
          }}
          className="absolute z-50 end-0 bg-black text-white md:w-16 md:h-16 w-10 h-10 rounded-full text-2xl pb-1 hidden items-center justify-center top-2/4 me-2"
        >
          &gt;
        </button>
      </div>
      <div className="relative  my-20 ">
        <div className="w-full h-full bg-black/60 absolute left-0 top-0 z-20"></div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            delay: 0.2,
            duration: 1.5,
          }}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white z-30 text-center"
        >
          <p className="md:text-5xl font-bold">Spatial urban qualities</p>
          <p className="md:text-3xl">captured through my Lens</p>
          <Link
            to={"/Portfolio"}
            className="bg-white inline-block mt-5 py-2 px-8 text-black"
          >
            Portfolio
          </Link>
        </motion.div>
        <motion.video
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            delay: 0.2,
            duration: 1.5,
          }}
          className="w-full h-full z-10 border-none outline-none"
          autoPlay
          muted
          loop
        >
          <source src={wireframVid} type="video/mp4" />
        </motion.video>
      </div>
      <div className=" text-center md:py-20 py-10 relative">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            delay: 0.2,
            duration: 1.5,
          }}
          className="md:text-5xl text-4xl font-semibold"
        >
          Captured Moments
        </motion.p>
        <button
          ref={galleryRefBtn1}
          onMouseOver={() => {
            galleryRefBtn1.current.classList.remove("hidden");
            galleryRefBtn2.current.classList.remove("hidden");
          }}
          onMouseOut={() => {
            galleryRefBtn1.current.classList.add("hidden");
            galleryRefBtn2.current.classList.add("hidden");
          }}
          onClick={() => {
            handleScrollg(
              window.innerWidth < 500 ? -300 : -230,
              GalleryContainerRef
            );
          }}
          className="absolute z-50 start-0 bg-black text-white md:w-16 md:h-16 w-10 h-10 rounded-full text-2xl pb-1 hidden items-center justify-center top-2/4 ms-2 buttonScroll "
        >
          &lt;
        </button>
        <div
          className="flex items-center gap-2"
          onMouseOver={() => {
            galleryRefBtn1.current.classList.remove("hidden");
            galleryRefBtn2.current.classList.remove("hidden");
          }}
          onMouseOut={() => {
            galleryRefBtn1.current.classList.add("hidden");
            galleryRefBtn2.current.classList.add("hidden");
          }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              delay: 0.2,
              duration: 1.5,
              straggleChildren: 0.5,
            }}
            className="scroll-smooth flex gap-2 overflow-x-scroll overflow-y-visible mt-12 relative"
            ref={GalleryContainerRef}
          >
            {items.map((el, index) => {
              return (
                <motion.Link
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{
                    delay: 0.2,
                    duration: 1.5,
                    straggleChildren: 0.5,
                  }}
                  variants={animateVariant}
                  to=""
                  className="inline-block p-2 md:p-0 md:min-w-[280px] md:h-[350px] lg:min-w-[480px] lg:h-[440px] min-w-full text-start"
                  key={index}
                >
                  <img
                    src={el.image}
                    alt=""
                    className="w-full h-[230px] lg:h-[380px]"
                  />
                  <p className="font-bold text-lg">{el.title}</p>
                </motion.Link>
              );
            })}
          </motion.div>
        </div>
        <button
          ref={galleryRefBtn2}
          onMouseOver={() => {
            galleryRefBtn1.current.classList.remove("hidden");
            galleryRefBtn2.current.classList.remove("hidden");
          }}
          onMouseOut={() => {
            galleryRefBtn1.current.classList.add("hidden");
            galleryRefBtn2.current.classList.add("hidden");
          }}
          onClick={() => {
            handleScrollg(
              window.innerWidth < 500 ? window.innerWidth + 7 : 230,
              GalleryContainerRef
            );
          }}
          className="absolute z-50 end-0 bg-black text-white md:w-16 md:h-16 w-10 h-10 rounded-full text-2xl pb-1 hidden items-center justify-center top-2/4 me-2 buttonScroll"
        >
          &gt;
        </button>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            delay: 0.2,
            duration: 1.5,
          }}
        >
          <Link
            to="/Gallery"
            className="bg-[#121212] mt-10 inline-block py-4 px-9 text-white"
          >
            Gallery
          </Link>
        </motion.div>
      </div>
      <Footer />
    </motion.div>
  );
};
export default Home;
