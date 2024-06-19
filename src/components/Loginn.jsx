import React from "react";
import Header from "./Header";

const Loginn = () => {
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          className=""
          src="https://assets.nflxext.com/ffe/siteui/vlv3/51c1d7f7-3179-4a55-93d9-704722898999/be90e543-c951-40d0-9ef5-e067f3e33d16/IN-en-20240610-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt=""
        />
      </div>
      <form
        action=""
        className="absolute w-4/12 p-12 my-[110px] mx-auto right-0 left-0  bg-black text-white bg-opacity-80"
      >
        <h1 className="font-bold text-3xl py-5">Sign In</h1>
        <input
          type="text"
          placeholder="Email Id"
          className="px-4 py-3 my-4 w-full rounded-sm bg-gray-600 "
        />
        <input
          type="password"
          placeholder="Password"
          className="px-4 py-3 my-4 w-full rounded-sm bg-gray-600"
        />
        <button className="bg-red-500 px-4 py-3 my-6 w-full">Sign In</button>
        <p className="py-4">New to Netflix? Sign Up</p>
      </form>
    </div>
  );
};

export default Loginn;
