import DragIcon from "../../assets/drag_icon.png";
import Tick from "../../assets/Path.svg";
import MoreIcon from "../../assets/more_icon.svg";
import { useState } from "react";
import { AddTask } from "./AddTask";
import editimg from "../../assets/edit_icon.svg";
import delimg from "../../assets/delete_icon.svg";
import { useDispatch, useSelector } from "react-redux";
import {
  DeleteToDo,
  HandleChangeCate,
  HandleChangeStatus,
  selectLayout,
} from "../../redux/slices/ToDoSlice";

export interface Task {
  id: number;
  TaskName: string | null;
  Due: string | null;
  taskStatus: "TODO" | "INPROGRESS" | "COMPLETED";
  taskCategory: "Work" | "Personal";
}

interface Props {
  Tasks: Task[];
  Title: string;
}

export const SingleTask = ({ Tasks, Title }: Props) => {
  const dispatch = useDispatch();
  const layout = useSelector(selectLayout);

  // State for open dropdowns
  const [openEditId, setOpenEditId] = useState<number | null>(null);
  const [openCategory, setOpenCategory] = useState<number | null>(null);
  const [openStatus, setOpenopenStatus] = useState<number | null>(null);

  // Toggle the edit menu
  const handleEditOpen = (id: number | null) => {
    setOpenEditId(openEditId === id ? null : id);
  };

  // Handle task deletion
  const handleDelete = (id: number) => {
    dispatch(DeleteToDo(id));
  };

  // Toggle category dropdown
  const handleShowCategory = (id: number | null) => {
    setOpenCategory(openCategory === id ? null : id); // Toggle openCategory
  };
  const handleShowStatus = (id: number | null) => {
    setOpenopenStatus(openStatus === id ? null : id);
  };

  // Handle category change
  const handleChangeCategory = (id: number, category: "Work" | "Personal") => {
    dispatch(HandleChangeCate({ id, category }));
    setOpenCategory(null); // Close dropdown after updating
  };

  const HandleUpdateStatus = (
    id: number,
    status: "TODO" | "INPROGRESS" | "COMPLETED"
  ) => {
    dispatch(HandleChangeStatus({ id, status }));
    setOpenopenStatus(null);
  };
  
  return (
    <div className="flex flex-col">
      {/* Add Task Section */}
      {!layout.board && <AddTask Title={Title} />}

      {/* Task List */}
      {Tasks.map((todo) => (
        <div className="flex font-medium" key={todo.id}>
          
          {/* Task Name and Checkbox */}
          <div className="pl-3 border-t-[1px] border-gray-border py-3 w-full sm:w-[38%] md:w-[52%] flex items-center gap-1">
            <input type="checkbox" />
            <img className="hidden sm:block" src={DragIcon} alt="DragIcon" />
            <img
              className={`${
                Title === "COMPLETED" ? "bg-Green" : "bg-[#A7A7A7]"
              } rounded-full p-1`}
              src={Tick}
              alt="Tick"
            />
            <span className={`${Title === "COMPLETED" ? "line-through" : ""}`}>
              {todo.TaskName}
            </span>
          </div>

          {/* Due Date */}
          <div className="border-t-[1px] border-gray-border py-3 w-[18%] hidden sm:block">
            {todo.Due}
          </div>

          {/* Task Status */}
          <div className="border-t-[1px] border-gray-border py-3 w-[18%] hidden lg:block">
            {todo.taskStatus && (
              <span
                className="bg-[#DDDADD] rounded-md px-2 py-1"
                onClick={() => handleShowStatus(todo.id)}
              >
                {todo.taskStatus}
              </span>
            )}
            {openStatus === todo.id && (
              <div className="absolute mt-2  shadow shadow-purple100 gap-2 ml-2 flex items-start border-purple100 w-32 flex-col bg-[#FFFFFF] p-2 rounded-xl border-[1px] z-20">
                <button
                  className="w-full text-start"
                  onClick={() => HandleUpdateStatus(todo.id, "TODO")}
                >
                  TODO
                </button>
                <button
                  className="w-full text-start"
                  onClick={() => HandleUpdateStatus(todo.id, "INPROGRESS")}
                >
                  IN-PROCESS
                </button>
                <button
                  className="w-full text-start"
                  onClick={() => HandleUpdateStatus(todo.id, "COMPLETED")}
                >
                  COMPLETED
                </button>
              </div>
            )}
          </div>

          {/* Task Category */}
          <div className="border-t-[1px] border-gray-border py-3 w-[18%] hidden sm:block">
            <div className="relative">
              {/* Display current category */}
              <span
                onClick={() => handleShowCategory(todo.id)}
                className="cursor-pointer"
              >
                { todo.taskCategory}
              
              </span>

              {/* Category Dropdown */}
              {openCategory === todo.id && (
                <div className="absolute mt-2  shadow shadow-purple100 gap-2 ml-2 flex items-start border-purple100 w-32 flex-col bg-[#FFFFFF] p-2 rounded-xl border-[1px] z-10">
                  <button
                    className="w-full text-start"
                    onClick={() => handleChangeCategory(todo.id, "Work")}
                  >
                    Work
                  </button>
                  <button
                    className="w-full text-start"
                    onClick={() => handleChangeCategory(todo.id, "Personal")}
                  >
                    Personal
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* More Options (Edit/Delete) */}
          <div className="relative border-t-[1px] border-gray-border py-3 w-[12%] flex justify-end pr-5 hidden sm:block">
            <img
              className="h-[20px]"
              src={MoreIcon}
              alt="MoreIcon"
              onClick={() => handleEditOpen(todo.id)}
            />
            {openEditId === todo.id && (
              <div className="shadow  bg-[#FFFFFF] shadow-purple100 mt-2 absolute gap-2 flex items-start border-purple100 z-20 -ml-20 pr-10 px-3 flex-col bg-white p-2 rounded-xl border-[1px]">
                <button className="w-full text-start flex items-center gap-2 font-bold">
                  <img src={editimg} alt="edit" />
                  Edit
                </button>
                <button
                  className="w-full text-start flex items-center gap-2 z-10  text-red-600 font-bold"
                  onClick={() => handleDelete(todo.id)}
                >
                  <img src={delimg} alt="delete" />
                  Delete
                </button>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
