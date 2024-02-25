import { Task } from "@/types/Task";
import { Dispatch, SetStateAction } from "react";

type Props = {
  tasks: Task[];
  setTasks: Dispatch<SetStateAction<Task[]>>;
};

export const TasksList = ({ tasks, setTasks }: Props): JSX.Element => {
  const handleCheck = ({ id }: Task) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id
          ? { ...task, completedAt: task.completedAt ? null : new Date() }
          : task
      )
    );
  };

  const handleClick = ({ id }: Task) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  return (
    <ul className="space-y-[8px] p-[16px]">
      {tasks.map((task) => (
        <li key={task.id} className="flex w-full items-center">
          <input
            className="mr-[16px] h-[18px] w-[18px] outline-none"
            type="checkbox"
            id={`checkbox${task.id}`}
            checked={task.completedAt !== null}
            onChange={() => handleCheck(task)}
          />
          <label htmlFor={`checkbox${task.id}`}>{task.name}</label>
          <button
            className="ml-auto flex h-[24px] w-[24px] cursor-pointer items-center justify-center rounded-full bg-white text-[10px]"
            type="button"
            onClick={() => handleClick(task)}
          >
            X
          </button>
        </li>
      ))}
    </ul>
  );
};