import React, { useState } from "react";
import SideBar from "./SideBar";
import TodoCard from "./TodoCard";
import { useRecoilValue } from "recoil";
import { allTodos, doneTodos, filteredTodos, userDetail } from "../atoms";
import AddTodo from "./AddTodo";

function getTodayDateString() {
  const today = new Date();

  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0"); // Months are 0-indexed
  const day = String(today.getDate()).padStart(2, "0");

  return `${day}/${month}/${year}`;
}

const HomePage = () => {
  const token = localStorage.getItem("token");
  const username = useRecoilValue(userDetail(token));
  const currentTabTodos = useRecoilValue(filteredTodos(token));
  const currentTabDoneTodos = useRecoilValue(doneTodos(token));

  return (
    <div className="min-h-screen w-full bg-black-500 font-poppins">
      <SideBar />
      {/* Greeting Section */}
      <div className="pt-20 ml-[20%] text-white text-xl pb-12 md:ml-[35%]">
        <div>
          Heyy, <span className="text-yellow-500">{username}</span>
          <span className="text-4xl pl-1">😶‍🌫️</span>
        </div>
        <div className="mt-2 font-thin ">Today - {getTodayDateString()}</div>
      </div>
      <AddTodo></AddTodo>
      <div className="py-6">
        {currentTabTodos.map((todo, index) => (
          <TodoCard
            objectId={todo._id}
            doneOrNot={todo.doneOrNot}
            key={index}
            text={todo.title}
            urgency={todo.urgency}
            dueDate={todo.dueDate}
          ></TodoCard>
        ))}
        {currentTabDoneTodos.map((todo, index) => (
          <TodoCard
            objectId={todo._id}
            doneOrNot={todo.doneOrNot}
            key={index}
            text={todo.title}
            urgency={todo.urgency}
            dueDate={todo.dueDate}
          ></TodoCard>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
