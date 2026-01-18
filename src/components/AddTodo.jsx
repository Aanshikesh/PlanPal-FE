import React, { useRef, useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { allTodos, filteredTodos, selectedTab } from "../atoms";
import axios from "axios";
import gsap from "gsap";
import Loader from "./Loader";

const AddTodo = () => {
  const titleRef = useRef();
  const priorityRef = useRef();
  const dateRef = useRef();
  const [currentTab, setCurrentTab] = useRecoilState(selectedTab);
  const setAllTodo = useSetRecoilState(allTodos(localStorage.getItem("token")));
  const ref1=useRef()
  const [isLoading,setIsLoading]=useState(false)

  async function addNewTodo() {
    const title = titleRef.current.value;
    const urgency = priorityRef.current.value;
    const dueDate = dateRef.current.value;

    if (title.trim() == "" || dueDate == "") {
      alert("Please fill every field ...");
      return;
    }
    
    try {
      setIsLoading(true)
        const animate=gsap.to(ref1.current,{
            scale:0.98,
            duration:0.1,
            onComplete:()=>{
                animate.reverse()
            }
          })
          
      const res = await axios.post(
        "https://plan-pal-backend.vercel.app/user/addTodo",
        {
          title,
          urgency,
          description: currentTab,
          dueDate: dueDate,
        },
        {
          headers: {
            token: localStorage.getItem("token"),
          },
        }
      );
      titleRef.current.value = "";
      dateRef.current.value = "";
      setAllTodo((prev) => [res.data.newTodo,...prev]);
      setIsLoading(false)
    } catch (error) {
      setIsLoading(false)
    }
  }
  return (
    <div className="w-[85%] mx-auto md:ml-[35%] md:w-[50%]">
      <div className="flex justify-between my-4">
        <input
          ref={titleRef}
          placeholder="Enter new task"
          className="w-[78%] rounded-md outline-none p-1 font-sans"
          type="text"
        />
        <select ref={priorityRef} name="" id="" className="w-[20%] rounded-md">
          <option value="High">High</option>
          <option value="Mid">Mid</option>
          <option value="Low">Low</option>
        </select>
      </div>
      <div className="flex justify-between">
        <input
          ref={dateRef}
          type="date"
          name=""
          id=""
          className="rounded-md w-[20%] px-1"
        />
        <div
          ref={ref1}
          onClick={addNewTodo}
          className="w-[78%] flex justify-center gap-3 cursor-pointer text-center bg-yellow-500 rounded-md p-1"
        >
          <span>Add New</span>
          <Loader isLoading={isLoading}/>
        </div>
      </div>
    </div>
  );
};

export default AddTodo;
