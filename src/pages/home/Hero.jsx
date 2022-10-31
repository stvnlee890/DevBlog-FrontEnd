import React from "react";
import Typed from "react-typed";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="text-black">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className=" text-indigo-700 font-bold p-2">
          Watch two amigos growing as Developers
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 ">
          In this BLOG
        </h1>
        <div className="flex justify-center items-center">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">
            You'll see our
          </p>
          <Typed
            className="md:text-5xl sm:text-4xl text-xl font-bold pl-2 md:pl-4"
            strings={["Passion", "Frustration", "Vision"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className="md:text-2xl text-xl font-bold text-gray-500">
          Monitor how our platform improves with future projects and
          experiences.
        </p>
        <button className="bg-indigo-500 hover:bg-indigo-700 rounded-md font-medium text-white my-6 mx-auto p-3 text-bold">
          <Link to={"/posts"}>
            Read more about how this blog was made by these two amigos
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Hero;