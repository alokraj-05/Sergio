import React, { useState, useEffect } from "react";
import logo from "../assets/Sergio_log.png";
import github from "../assets/github.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [isActiveSidePanel, setIsActiveSidePanel] = useState(false);
  const handleSidePanel = () => {
    setIsActiveSidePanel((prev) => !prev);
    const hamburger = document.getElementById("hamburger");

    if (isActiveSidePanel) {
      hamburger.classList.remove("fa-xmark");
      hamburger.classList.add("fa-bars");
    } else {
      hamburger.classList.remove("fa-bars");
      hamburger.classList.add("fa-xmark");
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="flex items-center justify-center " id="nav">
      <div
        className={`${
          screenWidth > 426 && screenWidth < 1024 ? "w-10/12" : "w-1/2"
        } flex justify-between items-center py-2 px-3 mt-3 rounded-2xl bg-gradient-to-br from-blurple-color/10 to-gray-800/20 backdrop-blur-md border border-gray-700/50 fixed left-50% top-0 z-20`}
      >
        <div className="logo lg:w-12 lg:h-12 rounded-2xl sm:w-5 sm:h-5 md:w-8 md:h-8 ">
          <img
            src={logo}
            alt="Logo"
            className={`${
              screenWidth < 427 ? "w-8 h-8" : "w-16"
            } rounded-lg shadow-custom-direction `}
          />
        </div>
        {screenWidth < 468 ? (
          <div onClick={handleSidePanel}>
            <i className="fa-solid fa-bars" id="hamburger"></i>
          </div>
        ) : (
          <ul className="flex gap-5 items-center justify-center ">
            <Link
              to="/"
              className="font-medium sm:text-sm md:text-sm text-white rounded-full hover:underline active:text-white focus-within:text-white"
            >
              Home
            </Link>
            <Link
              to="/documentation"
              className="font-medium text-white rounded-full hover:underline active:text-white focus-within:text-white"
            >
              {screenWidth > 768 ? "Documentation" : "Docs"}
            </Link>
            <a
              href="https://discord.com/oauth2/authorize?client_id=1268482584103354398"
              className="border-[1px] border-violet-400/50 px-2 py-1.5 font-medium text-white rounded-lg hover:border-blurple-color"
              target="_blank"
            >
              Invite
            </a>
            <a
              href=""
              className="bg-violet-500/40 lg:px-2 lg:py-1.5 rounded-lg text-white lg:text-base lg:font-semibold box-border hover:bg-blurple-color/50 md:px-1 md:py-1 sm:px-1 sm:py-1 sm:text-sm sm:font-normal"
            >
              Support
            </a>
            <a href="https://github.com/alokraj-05/Discord-Moderation-Bot">
              <i className="fa-brands fa-github text-2xl text-violet-400"></i>
            </a>
          </ul>
        )}
        {isActiveSidePanel && (
          <div className="absolute top-20 -right-20 w-10/12 h-64 bg-slate-800/95 backdrop-blur-lg text-white rounded-xl shadow-md flex justify-center items-center z-50 transition-all duration-300">
            <ul className="flex flex-col gap-5 items-center justify-center">
              <Link
                to="/"
                className="font-medium sm:text-sm md:text-sm text-white rounded-full hover:underline active:text-white focus-within:text-white"
              >
                Home
              </Link>
              <Link
                to="/documentation"
                className="font-medium text-white rounded-full hover:underline active:text-white focus-within:text-white"
              >
                {screenWidth > 768 ? "Documentation" : "Docs"}
              </Link>
              <a
                href="https://discord.com/oauth2/authorize?client_id=1268482584103354398"
                className="border-[1px] border-violet-400/50 px-2 py-1 font-medium text-white rounded-lg hover:border-blurple-color"
                target="_blank"
              >
                Invite
              </a>
              <a
                href=""
                className="bg-violet-500/40 px-2 py-1 rounded-lg text-white lg:text-lg lg:font-semibold box-border hover:bg-blurple-color/50 sm:text-sm sm:font-normal"
              >
                Support
              </a>
              <a href="https://github.com/alokraj-05/Discord-Moderation-Bot">
                <img
                  src={github}
                  alt="github_logo"
                  className="w-7 hover:scale-105 transition-all duration-100"
                  target="__blank"
                />
              </a>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
