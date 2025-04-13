import React, { useState, useEffect } from "react";
import logo from "../assets/Sergio_log.png";

const FloatButton = () => {
  const [scrollHeight, setScrollHeight] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = window.scrollY;
      const viewportHeight = window.innerHeight;
      const scrolledVh = (scrollHeight / viewportHeight) * 100;

      const floatButton = document.getElementById("float-icon");
      if (scrolledVh < 10) {
        floatButton.classList.add("hidden");
      } else {
        floatButton.classList.remove("hidden");
      }
      setScrollHeight(scrollHeight);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className="flex align-middle justify-center box-border flex-col"
      id="float-icon"
    >
      <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-1/6 flex align-middle gap-3 p-3 bg-gradient-to-tr from-gray-700 to-blurple-color/70 rounded-full justify-between mb-3">
        <div className="logo logo w-12 h-12 rounded-full">
          <img
            src={logo}
            alt="logo"
            className="rounded-full shadow-custom-direction"
          />
        </div>
        <a
          href="https://discord.com/oauth2/authorize?client_id=1268482584103354398"
          className=" px-6 py-2.5 font-medium text-white rounded-full drop-shadow bg-sregio-purple shadow-md"
        >
          Invite
        </a>
      </div>
    </div>
  );
};

export default FloatButton;
