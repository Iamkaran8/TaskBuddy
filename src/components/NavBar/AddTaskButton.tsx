import { useState } from "react";
import { TaskModal } from "../Task/TaskModal";


export const AddTaskButtton = () => {
  const [isOpen,setIsOpen] = useState<boolean>(false);
  const HandleOpen =  ()=>{
    setIsOpen(!isOpen)
  }
  return (
    <>
    <>
      <button className="bg-[#7B1984] rounded-full px-4 py-2 text-[#FFFFFF] text-[14px] font-bold" onClick={()=>HandleOpen()} >
        ADD TASK    
      </button>
      {
        isOpen ? (
          <TaskModal open={isOpen} setOpen={setIsOpen}  />
        ) : ""
      }
      </>
    </>
  );
};
