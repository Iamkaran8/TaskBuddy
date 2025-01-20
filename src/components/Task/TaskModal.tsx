import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

interface Props{
    open : boolean,
    setOpen :  (value: React.SetStateAction<boolean>) => void
}
export const TaskModal = ({open, setOpen}:Props) => {
  const [description, setDescription] = useState("");

  const handleChange = (value: string) => {
    setDescription(value);
  };
  const HandleClose = ()=>{
    setOpen(!open)
  }
  return (
    <>
      <div className="flex absolute top-0 left-0 w-[100%] h-fit z-20 ">
        <div className="bg-overlay-bg  w-[100%] h-[100%] flex items-center justify-center p-20">
          <div className="bg-[#FFFFFF] rounded-[20px] min-w-[600px]">
            <div className="flex justify-between px-[20px] py-[20px]">
              <h3 className="text-[24px] font-semibold">Create Task</h3>
              <button className="text-[24px] font-semibold pl-5" onClick={()=>HandleClose()} >X</button>
            </div>
            <hr />
            <div className="p-[20px] ">
              <input
                className=" p-2 h-[30px] w-[100%] border-[1px] border-gray-button-border rounded-[8px] p-1 text-[12px] text-lightgraytxt bg-input-bg"
                type="text"
                placeholder="Task title"
              />
              <div className="description-editor mt-3 bg-input-bg rounded-[8px]">
                <label htmlFor="description" className="editor-label"></label>
                <ReactQuill
                  value={description}
                  onChange={handleChange}
                  placeholder="Description"
                  modules={{
                    toolbar: [
                      ["bold", "italic", "strike"], // Formatting options
                      [{ list: "ordered" }, { list: "bullet" }], // List options
                    ],
                  }}
                  className="custom-editor"
                />
              </div>
            </div>
            <div className="p-[20px] flex gap-3">
              <div className="w-[32%]">
                <p className="text-gray-txt text-[12px] font-semibold">
                  Task Category*
                </p>
                <div className="py-2 flex gap-2">
                  <button className="border-[1px] rounded-full border-gray-button-border py-2 px-7 hover:bg-[#7B1984] hover:text-[#FFFFFF] text-[10px] font-bold">
                    Work
                  </button>
                  <button className="border-[1px] rounded-full border-gray-button-border py-2 px-7 hover:bg-[#7B1984] hover:text-[#FFFFFF] text-[10px] font-bold">
                    Personal
                  </button>
                </div>
              </div>
              <div className="w-[32%]">
                <p className="text-gray-txt text-[12px] font-semibold">
                  Due on*
                </p>
                <div className="py-2">
                  <input
                    className="h-[30px] w-[100%] border-[1px] border-gray-button-border rounded-[8px] p-1 text-[12px] text-lightgraytxt bg-input-bg"
                    type="date"
                  />
                </div>
              </div>
              <div className="w-[32%]">
                <p className="text-gray-txt text-[12px] font-semibold">
                  Task Status*
                </p>
                <div className="py-2">
                  <select className="h-[30px] w-[100%]  border-[1px] border-gray-button-border rounded-[8px] p-1 text-[12px] text-lightgraytxt bg-input-bg">
                    <option>Choose</option>
                    <option>In-Process</option>
                    <option>Completed</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="p-[20px]">
              <p className="text-gray-txt text-[12px] font-semibold">
                Attachment
              </p>
              <div className="flex items-center justify-center h-[30px] w-[100%] border-[1px] border-gray-button-border rounded-[8px] p-1 text-[12px] text-lightgraytxt bg-input-bg">
                <span>Drop Your File</span>
                <input type="file" />
              </div>
            </div>
            <div className="p-[20px] min-h-[100px]">
              <p className="text-gray-txt text-[12px] font-semibold">
                Attachment
              </p>
              images
            </div>
            <hr className="input-bg" />
            <div className="bg-input-bg py-3 px-5">
              <div className="flex justify-end gap-3">
                <button className="border-[1px] rounded-full border-gray-button-border py-2 px-7 hover:bg-[#7B1984] hover:text-[#FFFFFF] text-[14px] font-bold">
                  CANCLE
                </button>
                <button className="bg-purple-clr text-[#FFFFFF] border-[1px] rounded-full border-gray-button-border py-2 px-7 hover:bg-[#7B1984] hover:text-[#FFFFFF] text-[14px] font-bold">
                  CREATE
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
