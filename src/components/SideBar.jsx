import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import SideBarButton from "./SideBarButton";
import { FaBriefcaseMedical } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";
import { FaLaptopCode } from "react-icons/fa";
import { SiTodoist } from "react-icons/si";
import { IoMdLogOut } from "react-icons/io";
import { useNavigate } from "react-router-dom";

function SideBar() {
  const navigate = useNavigate();
  const [sideBarOpen, setSideBarOpen] = useState(false);
  function logOut() {
    navigate("/");
    localStorage.removeItem("token");
  }

  return (
    <>
      <div
        className={`p-2 bg-yellow-500 w-fit cursor-pointer fixed z-10 md:hidden top-[2%] left-[2%] rounded-lg ${
          sideBarOpen ? "translate-x-56" : "translate-x-0"
        }`}
        onClick={() => setSideBarOpen(!sideBarOpen)}
      >
        <IoMdMenu className="h-5 w-5" />
      </div>
      <div
        className={`p-2 min-w-56 h-screen rounded-r-xl fixed left-0 top-0 md:w-[18%] bg-yellow-500 ${
          sideBarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 duration-200 ease-in-out fixed z-10`}
      >
        <div>
          <div className="text-4xl font-medium mb-10 mt-3 pl-5 flex items-center gap-2">
            <SiTodoist className="w-8 h-8 "></SiTodoist>
            <div>PlanPal</div>
          </div>
          <SideBarButton
            text={"General"}
            icon={<SiTodoist className="h-4 w-4 text-yellow-500" />}
          ></SideBarButton>
          <SideBarButton
            text={"Work"}
            icon={<FaLaptopCode className="h-4 w-4 text-yellow-500" />}
          ></SideBarButton>
          <SideBarButton
            text={"Personal"}
            icon={<IoMdContact className="h-4 w-4 text-yellow-500" />}
          ></SideBarButton>
          <SideBarButton
            text={"Medical"}
            icon={<FaBriefcaseMedical className="h-4 w-4 text-yellow-500" />}
          ></SideBarButton>
        </div>
        <div className="absolute left-0 bottom-5 flex gap-2 pl-[13%] cursor-pointer">
          <div className="p-2 bg-black-500 rounded-md">
            <IoMdLogOut className="h-4 w-4 bg-black-500 text-yellow-500" />
          </div>
          <div className="text-xl font-medium" onClick={logOut}>
            Log-Out
          </div>
        </div>
      </div>
    </>
  );
}

export default SideBar;
