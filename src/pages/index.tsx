import { NextPage } from "next";
import { useState } from "react";
import { TASKS } from "@/constants/tasks";
import { TasksList } from "@/features/root/TasksList";
import { AddTaskModal } from "@/features/root/AddTaskModal";

const HomePage: NextPage = () => {
  const [tasks, setTasks] = useState(TASKS);

  return (
    <div className="h-screen w-screen bg-gray-200">
      <div className="relative left-[50%] top-[50%] h-[512px] w-[320px] translate-x-[-50%] translate-y-[-50%] border border-black">
        <header className="flex h-[64px] items-center justify-center bg-green-500 text-[24px] font-bold text-white">
          TODO List
        </header>
        <TasksList tasks={tasks} setTasks={setTasks} />
        <AddTaskModal setTasks={setTasks} />
      </div>
    </div>
  );
};

export default HomePage;