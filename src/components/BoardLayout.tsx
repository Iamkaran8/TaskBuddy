import { useDispatch } from "react-redux";
import MoreIcon from "../assets/more_icon.svg";
import { DeleteToDo } from "../redux/slices/ToDoSlice";
import { useState } from "react";
import editimg from "../assets/edit_icon.svg";
import delimg from "../assets/delete_icon.svg";
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
  Color: string;
}

export const BoardLayout = ({ Tasks, Title, Color }: Props) => {
  const dispatch = useDispatch();
  const HandleDelete = (id: number) => {
    dispatch(DeleteToDo(id));
  };
  const [openEditId, setOpenEditId] = useState<number | null>(null);
  const HandleEditOpen = (id: number | null) => {
    setOpenEditId(openEditId === id ? null : id);
  };
  return (
    <>
      <div className="hidden sm:hidden md:block flex flex- w-[100%] mt-6">
        <div className="bg-gray rounded-[12px] border-[1px] border-border-lightgray p-4 w-[100%] flex flex-col items-start">
          <span
            style={{ background: Color }}
            className="px-2 py-1 rounded-[4px] text-[16px] font-medium"
          >
            {Title}
          </span>
          {Tasks.map((todo) => (
            <div
              className="ease-in-out duration-900 bg-[#FFFFFF] mt-5  px-4 pt-4 pb-2 w-[100%]  border-[1px] border-slightdarkgray rounded-[12px]"
              key={todo.id}
            >
              <div className="flex justify-between items-center pb-10 relative">
                <h4 className="text-[16px] font-bold">{todo.TaskName}</h4>
                <img
                  className=""
                  src={MoreIcon}
                  alt="MOreIcon"
                  onClick={() => HandleEditOpen(todo.id)}
                />
                {openEditId === todo.id && (
                  <div className="shadow shadow-purple100 mt-2  ml-[67%] mt-[100px] absolute gap-2  flex items-start border-purple100 z-10 -ml-20 pr-10 -mt-1 px-3 flex-col bg-[#FFFFFF] p-2 rounded-xl border-[1px] ">
                    <button className="w-full text-start flex justify-start items-center gap-2 font-bold">
                      <img src={editimg} alt="edit" />
                      Edit
                    </button>
                    <button
                      className="w-full text-start flex justify-start items-center gap-2 text-[#DA2F2F] font-bold"
                      onClick={() => HandleDelete(todo.id)}
                    >
                      <img src={delimg} alt="del" />
                      Delete
                    </button>
                  </div>
                )}
              </div>
              <div className="flex justify-between items-center">
                <h4 className="text-[11px] font-semibold text-lightgraytxt">
                  Personal
                </h4>
                <span className="text-[11px] font-semibold text-lightgraytxt">
                  {todo.Due}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
