import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { FaRegAddressBook } from "react-icons/fa";
import { RiLoginCircleFill } from "react-icons/ri";
import { MdRocketLaunch } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

const LandingPage = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref6 = useRef(null);
  useEffect(() => {
    gsap.to(ref1.current, {
      y: 14,
      repeat: -1,
      yoyo: true,
      duration: 1.5,
      ease: "power2.inOut",
    });
    gsap.to(ref2.current, {
      y: -12,
      repeat: -1,
      yoyo: true,
      duration: 1.5,
      ease: "power2.inOut",
    });
    gsap.to(ref3.current, {
      y: -10,
      repeat: -1,
      yoyo: true,
      duration: 1.5,
      ease: "power2.inOut",
    });
    gsap.to(ref4.current, {
      y: 15,
      repeat: -1,
      yoyo: true,
      duration: 1.5,
      ease: "power2.inOut",
    });
    gsap.from(ref6.current, {
      y: 25,
      yoyo: true,
      duration: 1.5,
      repeat:-1
    }); 
    
  }, []);

  const navigate = useNavigate();
  return (
    <div className="w-full font-poppins text-white">
      {/* NavBar */}
      <div className="w-[90%] flex justify-between py-4 m-auto items-center">
        <div className="text-3xl font-semibold tracking-wide sm:text-4xl ">
          PlanPal  
        </div>
        <div className="flex gap-6 ">
          <div
            onClick={() => navigate("/signup")}
            className="min-w-20 p-1 bg-yellow-500 text-black-500 rounded-lg px-2 text-center sm:text-lg sm:px-3 cursor-pointer flex items-center gap-2"
          >
            <FaRegAddressBook className="h-5 w-5"></FaRegAddressBook>
            Sign Up
          </div>
          <div
            onClick={() => navigate("/login")}
            className="min-w-20 p-1 bg-yellow-500 text-black-500 rounded-lg px-2 text-center sm:text-lg sm:px-3 cursor-pointer flex items-center gap-2"
          >
            <RiLoginCircleFill className="h-6 w-6"></RiLoginCircleFill>
            Log In
          </div>
        </div>
      </div>
      {/* HeroSection */}
      <div className="w-[90%] my-24 mx-auto relative ">
        <div className="text-center font-light text-4xl sm:text-6xl tracking-tight">
          {" "}
          Master Your Day with{" "}
        </div>
        <div
          ref={ref6}
          className="herobackground text-center pt-5 font-medium text-4xl sm:text-8xl font-poppins w-fit mx-auto" 
        >
          {" "}
          PlanPal.
        </div>
        <svg
          className="pt-2 text-yellow-500 sm:w-72 w-44 absolute left-1/2 -translate-x-1/2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1418 125"
          fill="currentColor"
        >
          <path d="M1412.29 72.17c-11.04-5.78-20.07-14.33-85.46-25.24-22.37-3.63-44.69-7.56-67.07-11.04-167.11-22.06-181.65-21.24-304.94-30.56C888.78 1.39 822.57 1.1 756.44 0c-46.63-.11-93.27 1.56-139.89 2.5C365.5 13.55 452.86 7.68 277.94 23.15 202.57 33.32 127.38 45.01 52.07 55.69c-11.23 2.41-22.63 4.17-33.71 7.22C6.1 66.33 5.64 66.19 3.89 67.79c-7.99 5.78-2.98 20.14 8.72 17.5 33.99-9.47 32.28-8.57 178.06-29.66 4.26 4.48 7.29 3.38 18.42 3.11 13.19-.32 26.38-.53 39.56-1.12 53.51-3.81 106.88-9.62 160.36-13.95 18.41-1.3 36.8-3.12 55.21-4.7 23.21-1.16 46.43-2.29 69.65-3.4 120.28-2.16 85.46-3.13 234.65-1.52 23.42.99 1.57-.18 125.72 6.9 96.61 8.88 200.92 27.94 295.42 46.12 40.87 7.91 116.67 23.2 156.31 36.78 3.81 1.05 8.28-.27 10.51-3.58 3.17-3.72 2.66-9.7-.78-13.13-3.25-3.12-8.14-3.44-12.18-5.08-17.89-5.85-44.19-12.09-63.67-16.56l26.16 3.28c23.02 3.13 46.28 3.92 69.34 6.75 10.8.96 25.43 1.81 34.34-4.39 2.26-1.54 4.86-2.75 6.21-5.27 2.76-4.59 1.13-11.06-3.59-13.68ZM925.4 23.77c37.64 1.4 153.99 10.85 196.64 14.94 45.95 5.51 91.89 11.03 137.76 17.19 24.25 4.77 74.13 11.21 101.72 18.14-11.87-1.15-23.77-1.97-35.65-3.06-133.46-15.9-266.8-33.02-400.47-47.21Z"></path>
        </svg>
        <div className="text-2xl pt-12 text-center opacity-60">
          Organize. Prioritize. Achieve. It's that simple.
        </div>
        <div
          onClick={() => {
            if (localStorage.getItem("token")) navigate("/home");
            else navigate("/signup");
          }}
          className=" mt-7 m-auto w-fit p-1 bg-yellow-500 text-black-500 rounded-lg px-2 text-center sm:text-xl sm:px-3 sm:py-2 cursor-pointer flex items-center gap-2"
        >
          <MdRocketLaunch className="h-6 w-6"></MdRocketLaunch>
          Get Started
        </div>
      </div>
      {/* FloatingIcons */}
      <div
        ref={ref1}
        className="bg-yellow-500 sm:w-20 sm:h-20 h-16 w-16 absolute rounded-full sm:top-[20%] sm:left-[10%] blur-md top-[10%] left-[80%] sm:block"
      ></div>
      <div
        ref={ref2}
        className="bg-yellow-500 sm:w-20 sm:h-20 h-16 w-16 absolute rounded-lg rotate-45 top-[55%] left-[15%] blur-md hidden sm:block"
      ></div>
      <div
        ref={ref3}
        className="bg-yellow-500 w-16 h-16 absolute rounded-lg rotate-12 sm:top-[20%] sm:left-[86%] blur-md top-[60%] right-[10%] sm:block"
      ></div>
      <div
        ref={ref4}
        className="bg-yellow-500 sm:w-20 sm:h-20 h-16 w-16 absolute rounded-full sm:top-[50%] sm:left-[78%] blur-md top-[50%] left-[10%] sm:block"
      ></div>
      {/* Lower Section */}
      <div ref={ref6} className="w-full mt-44 mb-14">
        <img
          src="./image.png"
          className="w-[80%] aspect-h-9 aspect-w-16 object-fill rounded-2xl mx-auto relative bottom-10 border-8 border-yellow-500"
        />
      </div>
      {/* Footer */}
      <div className="flex justify-between px-16 pt-2 pb-3 text-black-500 bg-yellow-500">
        <div>Made with ♥️ by Aanshikesh</div>
        <div>
          <div className="flex gap-4 items-center">
            <a href="https://x.com/Aanshikeshrawat">
              {" "}
              <FaXTwitter className="h-6 w-6" />
            </a>
            <a href="https://github.com/Aanshikesh">
              <FaGithub className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
