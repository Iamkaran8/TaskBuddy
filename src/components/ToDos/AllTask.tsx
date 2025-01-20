import { useEffect, useState } from "react";
import { SingleTask } from "./SingleTask";
import { CgChevronDown } from "react-icons/cg";
import { CgChevronUp } from "react-icons/cg";
import { useDispatch, useSelector } from "react-redux";
import { changeMobileLayout, HandleSmallScreen, selectLayout } from "../../redux/slices/ToDoSlice";
import { BoardLayout } from "../BoardLayout";
import { AddTask } from "./AddTask";
export interface Task {
  id: number;
  TaskName: string | null;
  Due: string | null;
  taskStatus: "TODO" | "INPROGRESS" | "COMPLETED";
  taskCategory: "Work" | "Personal" ;
}

interface Props {
  Tasks: Task[];
  Title: string;
  Color: string;
}


export const AllTask = ({ Tasks, Title, Color }: Props) => {
  
   const [accordionOpen, setAccordionOpen] = useState<boolean>(true); // State to track if accordion is open

  const HandleClick = () => {
    setAccordionOpen(!accordionOpen); // Toggle accordion state
  };

  const layout = useSelector(selectLayout);
  const [isMobile, setIsMobile] = useState(false);
  const dispatch = useDispatch()

  useEffect(() => {
    const checkResolution = () => {
      setIsMobile(window.innerWidth <= 768);
      isMobile ?  dispatch(HandleSmallScreen()) : ""
    };

    checkResolution(); // Check on initial render
    window.addEventListener("resize", checkResolution);
    

    return () => {
      window.removeEventListener("resize", checkResolution);
    };
  }, []);

  return (
    <>
      {layout.board ? (
        <BoardLayout Tasks={Tasks} Title={Title} Color={Color} />
      ) : (
        <div className="rounded-lg">
          <div
            style={{ background: Color }}
            className={` text-[16px] font-semibold flex justify-between px-4 rounded-t-lg p-2 mt-4 `}
          >
            <div className="w-[50%]">
              <button className="w-full text-left" onClick={HandleClick}>
                <p>
                  {Title} ({Tasks.length})
                </p>
              </button>
            </div>
            <div className="w-[50%] flex justify-end ease-in duration-300">
              <button
                className="text-xl text-start w-full"
                onClick={HandleClick}
              >
                <p className="text-end flex justify-end">
                  {accordionOpen ? (
                    <span>
                      <CgChevronUp />
                    </span>
                  ) : (
                    <span>
                      <CgChevronDown />
                    </span>
                  )}
                </p>
              </button>
            </div>
          </div>

          {/* Accordion Content */}

          {accordionOpen && (
            <div className="bg-[#F1F1F1] ease-in duration-300 rounded-b-lg min-h-40 ">
              {Tasks.length > 0 ? (
                <SingleTask Tasks={Tasks} Title={Title} />
              ) : (
                <div className="">
                  <AddTask Title={Title} />
                  <div className="flex items-center justify-center w-[100%] py-5 ">
                  <p className="text-[#2F2F2F] text-[15px] font-medium mt-[10%] sm:mt-[5%] md:mt-[0%] lg:mt-[0%]">No Tasks in {Title}</p>
                  </div>
                  
                  
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </>
  );
};
