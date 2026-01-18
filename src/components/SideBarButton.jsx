import React from "react";
import { IoFootball } from "react-icons/io5";
import { useRecoilState, useSetRecoilState } from "recoil";
import { selectedTab } from "../atoms";

const SideBarButton = ({ text, icon }) => {
  const [currentTab, setCurrentTab] = useRecoilState(selectedTab);
  return (
    <div
      onClick={() => {
        setCurrentTab(text);
      }}
      className="mx-auto px-1 py-1 w-[80%] my-3 font-poppins rounded-md text-xl  flex gap-2 font-medium cursor-pointer justify-between items-center"
    >
      <div className="flex gap-2">
        <div className="p-2 bg-black-500 rounded-md">{icon}</div>
        <h1 className="text-center">{text}</h1>
      </div>
      {currentTab === text && (
        <div className="h-3 w-3 bg-black-500 rounded-full "></div>
      )}
    </div>
  );
};

export default SideBarButton;
