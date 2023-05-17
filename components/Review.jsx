import React, { useEffect, useState } from "react";
import data from "../public/data";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, image, text, job } = data[index];
  const getNextReview = () => {
    index < data.length - 1
      ? setIndex((index) => ++index)
      : setIndex(0);
  };
  const getPrevReview = () => {
    index > 0
      ? setIndex((index) => --index)
      : setIndex(data.length - 1);
  };
  const getRandomReview = () => {
    setIndex(Math.floor(Math.random() * data.length));
  };

  return (
    <article
      className="flex flex-col justify-center items-center
     w-[85vw] max-w-[600px] min-h-[370px]
      bg-white shadow-lg rounded-[10px]
      px-8 gap-3 py-6
     "
    >
      <div className="relative w-[150px] h-[150px]">
        <Image
          src={image}
          alt={name}
          className="absolute z-10 w-[100%] h-[100%] object-cover rounded-full"
          width={100}
          height={100}
        />
        <div className="w-[100%] h-[100%] rounded-full bg-sky-400 absolute bottom-1 left-2" />
        <div className="bg-sky-400 p-3 w-fit rounded-full absolute z-20 top-4 left-[-0.5rem]">
          <FaQuoteRight className="text-white" />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <h1 className="capitalize tracking-widest font-bold text-lg">{name}</h1>
        <h1 className="uppercase text-sky-400 font-thin text-sm">{job}</h1>
      </div>
      <p className="text-center text-gray-400">{text}</p>
      <div className="flex gap-3 text-sky-400">
        <FaChevronLeft className="cursor-pointer" onClick={getPrevReview} />
        <FaChevronRight className="cursor-pointer" onClick={getNextReview} />
      </div>
      <button
        onClick={getRandomReview}
        className="bg-sky-100 px-3 py-1 rounded-md text-sm text-sky-500 capitalize hover:bg-sky-300 hover:text-sky-700 transition-colors duration-200"
      >
        Surprise me
      </button>
    </article>
  );
};

export default Review;
