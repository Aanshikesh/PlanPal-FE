import axios from "axios";
import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import Loader from "./Loader";

const LogIn = () => {
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const navigate = useNavigate();
  const [seePassword, setSeePassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  async function logInFunction() {
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
        "https://plan-pal-backend.vercel.app/user/signin",
        {
          username: usernameRef.current.value,
          password: passwordRef.current.value,
        }
      );
      setIsLoading(false);
      const token = res.data.Token;
      localStorage.setItem("token", token);
      navigate("/home");
    } catch (error) {
      setIsLoading(false);
      if (error.status == 404) {
        alert("You are not signed up");
      }
      if (error.status == 400) {
        alert("Incorrect Credentials");
      }
    }
  }

  return (
    <div className="h-screen w-full bg-black-500 md:flex">
      <div className="relative h-screen md:w-[45%]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-yellow-500 min-w-96 h-fit rounded-sm p-5">
          <h1 className="text-4xl font-medium py-4 font-poppins">Log-In</h1>
          <div className="my-8">
            <div className="py-1 font-poppins">Username</div>
            <input
              placeholder="Enter your username"
              ref={usernameRef}
              type="text"
              className="w-full font-poppins rounded-md h-7 p-1 outline-none text-sm bg-gray-100"
            />
          </div>
          <div className="my-8">
            <div className="py-1 font-poppins">Password</div>
            <div className="flex ">
              <input
                placeholder="Enter your password"
                ref={passwordRef}
                type={seePassword ? "text" : "password"}
                className="font-poppins w-[90%] rounded-md h-7 p-1 outline-none text-sm bg-gray-100"
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
            onClick={logInFunction}
            className="font-poppins flex gap-3 items-center my-8 w-fit bg-black-500 text-xl px-5 py-1 text-yellow-500 rounded-md cursor-pointer"
          >
            <span className="">LogIn</span>
            <Loader isLoading={isLoading} />
          </div>
        </div>
      </div>
      <div className="h-screen w-[55%] gradientBG relative hidden md:block ">
        <img
          className="z-10 object-fill w-[90%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-xl border-black-500 border-2"
          src="./image.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default LogIn;
