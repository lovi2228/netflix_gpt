import React, { useState, useRef } from "react";
import Header from "./Header";
import { checkValidation } from "../utils/validate";

const Loginn = () => {
  const [isSignIn, setSignIn] = useState(true);
  const toggle = () => {
    setSignIn(!isSignIn);
  };
  const [errmsg, seterrmsg] = useState(null);

  const email = useRef(null);
  const password = useRef(null);

  const handleValidation = () => {
    console.log(email.current.value);
    console.log(password.current.value);

    const ans = checkValidation(email.current.value, password.current.value);
    seterrmsg(ans);
  };

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
        onSubmit={(e) => e.preventDefault()}
        className="absolute w-4/12 p-12 my-[110px] mx-auto right-0 left-0  bg-black text-white bg-opacity-80"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            type="text"
            placeholder="Full Name"
            className="px-4 py-3 my-4 w-full rounded-sm bg-gray-600 "
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Id"
          className="px-4 py-3 my-4 w-full rounded-sm bg-gray-600 "
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="px-4 py-3 my-4 w-full rounded-sm bg-gray-600"
        />
        <p className="text-red-600">{errmsg}</p>
        <button
          className="bg-red-500 px-4 py-3 my-6 w-full"
          onClick={handleValidation}
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggle}>
          {isSignIn
            ? "New to Netflix? Sign Up"
            : "Already registered Sign In now..."}
        </p>
      </form>
    </div>
  );
};

export default Loginn;
