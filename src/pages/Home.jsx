import React, { useState, useEffect, lazy } from "react";
import features from "../data/features.json";
import extra from "../data/extra.json";
import { motion } from "framer-motion";
import "../index.css";
import { Link } from "react-router-dom";
import FAQs from "../components/FAQs";

const Extra = lazy(() => import("../components/Extra"));
const Home = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.scrollTo(0, 0);
    const handleScreenChange = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleScreenChange);
    return () => {
      window.removeEventListener("resize", handleScreenChange);
    };
  }, []);
  const radius = screenWidth < 426 ? 140 : 200;
  const total = extra.length;
  const spreadAngle = 90;
  const startAngle = -spreadAngle / 0.1; // Start angle for the first icon
  const gradientDirections = {
    br: "bg-gradient-to-br",
    tr: "bg-gradient-to-tr",
    tl: "bg-gradient-to-tl",
    bl: "bg-gradient-to-bl",
  };
  return (
    <div className="my-40 lg:mx-10 md:mx-10 mx-2 text-white">
      {/* Bot Intro section */}
      <section className="flex items-center flex-col gap-5 mx-10">
        <h1 className="text-5xl font-boldonse">Sergio</h1>
        <p>
          A <span className=" text-violet-400/80">Moderation</span> bot for
          making your server management easy and efficient.
        </p>
      </section>
      {/* Bot description section */}
      <section className="flex items-center flex-col mx-10">
        <p>
          Sergio is developed by an{" "}
          <span className=" text-violet-400/80">Individual</span> and is open
          source. It is a{" "}
          <span className=" text-violet-400/80">Moderation</span> bot that makes
          your server management easy and efficient.
        </p>
        <p>
          Its easy to use and has a lot of features. It is also{" "}
          <span className=" text-violet-400/80">Customizable</span> and has a
          lot of <span className=" text-violet-400/80">Commands</span> that you
          can use to manage your server.
        </p>
      </section>

      {/* Bot features section */}

      <section className="flex justify-evenly mt-10 mx-2 md:mx-10 lg:mx-20">
        <div className="lg:w-5/6 md:w-full w-full">
          <h2 className="text-3xl font-bold font-syne">Features</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 p-4">
            {features.map((items) => (
              <div
                key={items.id}
                className={`rounded-2xl ${
                  gradientDirections[items.left]
                } from-blurple-color/10 to-gray-800/20 backdrop-blur-md border border-gray-700/50 p-6 shadow-xl hover:shadow-2xl hover:border-gray-700/90 transition-all duration-300`}
              >
                <div className="w-12 h-12 rounded-xl bg-gray-800/60 border border-gray-600 flex items-center justify-center mb-4">
                  <i
                    className={`fa-solid ${items.icon} text-lg  text-violet-400/80`}
                  ></i>
                </div>
                <h3 className="font-semibold mb-1 lg:text-lg md:text-lg text-base font-syne ">
                  {items.feature}
                </h3>
                <p className="text-gray-300/80 text-sm">{items.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Bot extra section */}

      <div className="relative mt-20 flex flex-col items-center justify-center">
        <div className="absolute inset-0 -z-10">
          <div className="w-full h-full bg-[#0e0e0e] bg-[radial-gradient(#ffffff33_1px,transparent_1px)] [background-size:20px_20px]" />
        </div>

        {/* Title Section */}
        <div className="text-center -mb-16">
          <h2 className="text-4xl font-bold text-white">Extra</h2>
          <p className="text-sm text-gray-400 mt-2">
            We provide a lot of extra features to make your server more
            interesting and fun.
          </p>
        </div>

        {/* Circular Icon Layout */}
        <div className="relative w-[260px] h-[260px] lg:w-[330px] lg:h-[330px] md:w-[300px] md:h-[300px]">
          {extra.map((icon, index) => {
            const angle = startAngle + (index * spreadAngle) / (total - 10); // Calculate angle for each icon
            const x = radius * Math.cos((angle * Math.PI) / 180);
            const y = radius * Math.sin((angle * Math.PI) / 180);

            return (
              <motion.div
                key={icon.id}
                initial={{ opacity: 0, y: 30 }}
                // animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.5,
                  ease: "easeOut",
                }}
                whileHover={{ scale: 1.1 }}
                // only animate it comes into view picture
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                className="w-14 h-14 rounded-full bg-gradient-to-br to-blurple-color/20 from-gray-800/20 border border-gray-600 border-t-0 border-b-0 flex items-center justify-center absolute transition-all duration-300 hover:scale-110 shadow-md backdrop-blur"
                style={{
                  left: `calc(50% + ${x}px - 28px)`,
                  top: `calc(100% - ${y}px - 28px)`,
                }}
              >
                <i className={`fa-solid ${icon.icon} text-white text-lg`}></i>
              </motion.div>
            );
          })}
        </div>
      </div>

      <Extra />

      <section className="flex items-center justify-center mt-16">
        <Link
          to="/documentation/commands"
          className="relative p-px rounded-full bg-gray-600 text-white  hover:glow-border overflow-hidden hover:scale-105"
        >
          <div className="flex items-center gap-2 relative rounded-full z-10 bg-black px-6 py-3">
            <i className="fa-solid fa-terminal text-violet-400/80" />
            <span className="text-violet-400/80 font-medium">100+</span>
            <span className="text-white font-medium">more commands</span>
            <i className="fa-solid fa-arrow-right text-violet-400/80" />
          </div>
        </Link>
      </section>
      <FAQs />
    </div>
  );
};

export default Home;
