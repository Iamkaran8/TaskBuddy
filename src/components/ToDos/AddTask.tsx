import { useState } from "react";
import Plus from "../../assets/plus.svg";
import { AddTaskInput } from "./AddTaskInput";

interface Props {
  Title: string;
}
export const AddTask = ({ Title }: Props) => {
  const [click, setClick] = useState<boolean>(false);
  const HandleClick = () => {
    setClick(!click);
  };
  
  return (
    <>
      {Title === "TODO" ? (
        <div className="hidden sm:hidden md:hidden lg:block">
          <div
            className={`py-3 px-10 w-[100%]  flex items-center gap-1 ${
              !click ? " border-gray-border" : ""
            }`}
          >
            <button className="flex gap-2 items-center " onClick={HandleClick}>
              <img src={Plus} alt="plus icon" />
              <span className="font-bold text-[16px]">Add task</span>
            </button>
          </div>

          {!click ? (
            ""
          ) : (
            <div className="  border-b-[1px] border-gray-border py-3 px-10 w-[100%]  flex items-center gap-1">
              <AddTaskInput />
            </div>
          )}
        </div>
      ) : (
        ""
      )}
    </>
  );
};
