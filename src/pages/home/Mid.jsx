import React from "react";
import Steve from "../../img/steve.jpg";
import { Link } from "react-router-dom";

export const Mid = () => {
  return (
    <div className="bg-white w-full ">
      <img className="w-[500px] mx-auto my-4 rounded-md" src={Steve} alt="/" />
      <div className="flex flex-col justify-center">
        <p className="text-indigo-500">CEO</p>
        <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
          Manger Boy
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque
          sit accusantium odio voluptate quia in. Iusto sapiente nobis, veniam
          voluptatem corrupti nemo excepturi numquam, fugit quisquam soluta
          consectetur laudantium facere.
        </p>
        <button className="bg-indigo-500 hover:bg-indigo-700 rounded-md  font-medium my-6 mx-auto p-3 text-bold text-white">
          <Link to={"/developers/stevelee"}>Read more about Esteban</Link>
        </button>
      </div>
    </div>
  );
};
