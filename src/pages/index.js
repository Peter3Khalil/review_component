import Review from "components/Review";
import React from "react";

const Home = () => {
  return (
    <main
      className="
    flex justify-center items-center
     w-full min-h-screen bg-slate-200
     "
    >
      <section className="flex flex-col items-center justify-center">
        {/* Title */}
        <div className="flex flex-col justify-center items-center mb-14">
          <h1 className="text-4xl font-bold">Our Reviews</h1>
          <div className="w-20 h-[4px] bg-black mt-3" />
        </div>
        {/* Review */}
        <Review/>
      </section>
    </main>
  );
};

export default Home;
