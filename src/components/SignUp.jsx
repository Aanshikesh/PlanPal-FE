import React, { useRef, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import Loader from "./Loader";
const SignUp = () => {
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const navigate = useNavigate();
  const [seePassword, setSeePassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  async function signUpFunction() {
    try {
      if (
        usernameRef.current.value.trim() == "" ||
        passwordRef.current.value.trim() == ""
      ) {
        alert("Please fill up all entries");
        return;
      }
      setIsLoading(true);
      const res = await axios.post(
        "https://plan-pal-backend.vercel.app/user/signup",
        {
          username: usernameRef.current.value,
          password: passwordRef.current.value,
        }
      );
      navigate("/login");
      setIsLoading(false);
    } catch (error) {
      alert("User already exists");
      setIsLoading(false);
    }
  }

  return (
    <div className="h-screen w-full bg-black-500 md:flex">
      <div className="relative h-screen md:w-[45%]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-yellow-500 min-w-96 h-fit rounded-sm p-5">
          <h1 className="text-4xl font-medium py-4 font-poppins">Sign-Up</h1>
          <div className="my-8">
            <div className="py-1 font-poppins">Username</div>
            <input
              ref={usernameRef}
              placeholder="Enter your username"
              type="text"
              className="w-full font-poppins rounded-md h-7 p-1 outline-none text-sm bg-gray-100"
            />
          </div>
          <div className="my-8">
            <div className="py-1 font-poppins">Password</div>
            <div className="flex ">
              <input
                ref={passwordRef}
                placeholder="Enter your password"
                type={seePassword ? "text" : "password"}
                className="w-[90%] font-poppins rounded-md h-7 p-1 outline-none text-sm bg-gray-100"
              />
              <div
                onClick={() => {
                  setSeePassword(!seePassword);
                }}
                className="flex items-center justify-end w-[10%] cursor-pointer"
              >
                {seePassword ? (
                  <FaEye className="h-6 w-6 bg-black-500 text-yellow-500 p-1  rounded-md" />
                ) : (
                  <FaEyeSlash className="h-6 w-6 bg-black-500 text-yellow-500 p-1  rounded-md"></FaEyeSlash>
                )}
              </div>
            </div>
          </div>
          <div
            onClick={signUpFunction}
            className="font-poppins flex gap-3 items-center my-8 w-fit bg-black-500 text-xl px-5 py-1 text-yellow-500 rounded-md cursor-pointer"
          >
            <span className="">SignUp</span>
            <Loader isLoading={isLoading} />
          </div>
          <div className="text-sm">
            Already a user?{" "}
            <span
              className="font-medium underline cursor-pointer"
              onClick={() => {
                navigate("/login");
              }}
            >
              LogIn
            </span>
          </div>
        </div>
      </div>
      <div className=" h-screen w-[55%] gradientBG relative hidden md:block ">
        <img
          className="object-fill w-[90%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-xl border-black-500 border-2"
          src="./image.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default SignUp;
