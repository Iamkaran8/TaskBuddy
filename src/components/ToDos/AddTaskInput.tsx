import { AddButton } from "./AddButton";
import { CancleButton } from "./CancleButton";
// import calenderIcon from "../../assets/calender_icon.svg";
import PlusIcon from "../../assets/plus.svg";
import { useState } from "react";
// import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { PushNewTask } from "../../redux/slices/ToDoSlice";
import { useDispatch } from "react-redux";

// type ValuePiece = Date | null;
// type Value = ValuePiece | [ValuePiece, ValuePiece];

export const AddTaskInput = () => {
  const [open, setOpen] = useState({
    status: true,
    category: true,
    calendar: false,
  });

  const [taskData, setTaskData] = useState({
    title: "",
    date: "",
    status: "TODO", // Default status
    category: "WORK", // Default category
  });

  const handleToggle = (field: keyof typeof open) => {
    setOpen((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setTaskData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleStatusChange = (status: string) => {
    setTaskData((prev) => ({
      ...prev,
      status,
    }));
    setOpen((prev) => ({
      ...prev,
      status: false,
    }));
  };

  const handleCategoryChange = (category: string) => {
    setTaskData((prev) => ({
      ...prev,
      category,
    }));
    setOpen((prev) => ({
      ...prev,
      category: false,
    }));
  };
const dispatch = useDispatch()
  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    dispatch(PushNewTask(taskData))
    // Reset form data if needed
    setTaskData({
      title: "",
      date: "",
      status: "TODO",
      category: "WORK",
    });
  };
 

  return (
    <div className="w-full hidden sm:hidden md:hidden lg:block">
      <form
        className="flex font-medium w-[100%]"
        onSubmit={handleFormSubmit}
      >
        {/* Title Input */}
        <div className="-mt-2 pb-2 w-[80%] sm:w-[38%] md:w-[52%] flex flex-col items-start gap-3">
          <div className="w-full">
            <input
              className="p-1 w-[80%] bg-[#F4F4F4]"
              type="text"
              name="title"
              value={taskData.title}
              onChange={handleInputChange}
              placeholder="Task Title"
            />
          </div>
          <div className="flex gap-4">
            <AddButton />
            <CancleButton />
          </div>
        </div>

        {/* Date Picker */}
        <div className="relative py-3 -mt-4 w-[18%] hidden sm:block">
          <input
            className="border-[1px] border-gray-border rounded-full px-4 py-2 text-[14px] font-bold"
            type="date"
            name="date"
            value={taskData.date}
            onChange={handleInputChange}
          />
        </div>

        {/* Status Dropdown */}
        <div className="relative py-3 -mt-4 w-[18%] hidden sm:hidden md:hidden lg:block xl:block">
          <button
            type="button"
            className="flex gap-1 border-[1px] border-gray-border rounded-full px-2 py-2 text-[14px] font-bold"
            onClick={() => handleToggle("status")}
          >
            <img src={PlusIcon} alt="ADD" />
            <span>{taskData.status}</span>
          </button>
          {open.status && (
            <div className="shadow shadow-purple100 mt-2 absolute gap-2 ml-[10px] flex items-start border-purple100 w-[80%] flex-col bg-[#FFFFFF] p-2 rounded-xl border-[1px]">
              {["TODO", "IN-PROGRESS", "COMPLETED"].map((status) => (
                <button
                  key={status}
                  className="w-full text-start"
                  onClick={() => handleStatusChange(status)}
                >
                  {status}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Category Dropdown */}
        <div className="relative py-3 -mt-4 w-[18%] hidden sm:block">
          <button
            type="button"
            className="flex gap-1 border-[1px] border-gray-border rounded-full px-2 py-2 text-[14px] font-bold"
            onClick={() => handleToggle("category")}
          >
            <img src={PlusIcon} alt="ADD" />
            <span>{taskData.category}</span>
          </button>
          {open.category && (
            <div className="mt-2 shadow shadow-purple100 absolute gap-2 ml-[10px] flex items-start border-purple100  flex-col bg-[#FFFFFF] p-2 rounded-xl border-[1px]">
              {["WORK", "PERSONAL"].map((category) => (
                <button
                  key={category}
                  className="w-full text-start"
                  onClick={() => handleCategoryChange(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          )}
        </div>
      </form>
    </div>
  );
};
