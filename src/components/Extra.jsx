import React from "react";

const Extra = () => {
  return (
    <section className="flex items-center justify-center  w-full mt-32 px-5">
      <div className=" lg:w-9/12 bg-gradient-to-br from-blurple-color/10 to-gray-800/10 border-gray-700/40 border-[1px] border-r-gray-700/70 border-t-gray-700/70 border-t-[1.5px] rounded-2xl flex items-center px-12 lg:py-24 p-12 flex-col lg:flex-row">
        <div className=" rounded-2xl items-center justify-center flex flex-col gap-2 w-full">
          <ul className="grid grid-cols-3 gap-2 items-center justify-center ">
            <p className="lg:w-20 lg:h-20 w-12 h-12 rounded-2xl bg-gradient-to-br to-blurple-color/20 from-gray-800/20 border border-gray-600 border-t-0 border-b-0 flex items-center justify-center">
              <i className="fa-solid fa-circle-check lg:text-2xl"></i>
            </p>
            <p className="lg:w-20 lg:h-20 w-12 h-12 rounded-2xl bg-gradient-to-br to-blurple-color/20 from-gray-800/20 border border-gray-600 border-t-0 border-b-0 flex items-center justify-center">
              <i className="fa-solid fa-lock lg:text-2xl"></i>
            </p>
            <p className="lg:w-20 lg:h-20 w-12 h-12 rounded-2xl bg-gradient-to-br to-blurple-color/20 from-gray-800/20 border border-gray-600 border-t-0 border-b-0 flex items-center justify-center">
              <i className="fa-solid fa-shield-halved lg:text-2xl"></i>
            </p>
          </ul>
          <ul className="grid grid-cols-3 gap-2 items-center justify-center ml-10">
            <p className="lg:w-20 lg:h-20 w-12 h-12 rounded-2xl bg-gradient-to-br to-blurple-color/20 from-gray-800/20 border border-gray-600 border-t-0 border-b-0 flex items-center justify-center">
              <i className="fa-solid fa-bolt lg:text-2xl"></i>
            </p>
            <p className="lg:w-20 lg:h-20 w-12 h-12 rounded-2xl bg-gradient-to-br to-blurple-color/20 from-gray-800/20 border border-gray-600 border-t-0 border-b-0 flex items-center justify-center">
              <i className="fa-solid fa-gear lg:text-2xl"></i>
            </p>
            <p className="lg:w-20 lg:h-20 w-12 h-12 rounded-2xl bg-gradient-to-br to-blurple-color/20 from-gray-800/20 border border-gray-600 border-t-0 border-b-0 flex items-center justify-center">
              <i className="fa-solid fa-quote-left lg:text-2xl"></i>
            </p>
          </ul>
        </div>
        <div className="flex justify-center items-start lg:p-10 p-2 mt-5 flex-col w-full">
          <h3 className="font-boldonse text-2xl lg:text-5xl text-violet-400/80">
            Easy <span className=" ">to</span> Use
          </h3>
          <p className="text-gray-300 text-sm mt-6">
            Easy to setup, premium commands, simple syntax, fully security. High
            speed performance, anti-nuke system, and many more.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Extra;
