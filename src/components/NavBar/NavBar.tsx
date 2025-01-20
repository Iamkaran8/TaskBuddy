import { useSelector } from "react-redux";
import { LogOutBtn } from "./LogOutBtn";
import { selectUser } from "../../redux/slices/AuthSlice";
import TaskIcon from "../../assets/task_icon-white.svg";
import { List } from "./List";
import { FeatureNavbar } from "./FeatureNavbar";
import { Searchbar } from "./Searchbar";
import { AddTaskButtton } from "./AddTaskButton";
import profileIcon from '../../assets/Profile.svg'

export const NavBar = () => {
  const user = useSelector(selectUser);
  
  return (
    <>
      <div className=" py-3 shadow-lg sm:shadow-none  sm:py-0 bg-[#FAEEFC] lg:bg-[#FFFFFF] md:bg-[#FFFFFF] xl:bg-[#FFFFFF]  flex mx-0 md:mx-10 lg:mx-10  md:mt-10">
        <div className="w-[50%] ml-2 sm:ml-0">
          <div className="mt-2 flex items-center ">
            <img className="hidden sm:block" src={TaskIcon} alt="Task Img" />
            <p className=" text-[16px] text-[#2F2F2F] md:text-[26px] font-medium sm:font-semibold">
              TaskBuddy
            </p>
          </div>
        </div>
        <div className="w-[50%] mr-2">
          <div className="flex justify-end items-center gap-2">
            <img
              className=" rounded-full w-[40px] h-[40px] border-[1px] border-gray-txt"
              src={user.profileImg || profileIcon}
              alt="Profile Img"
            />
            <p className="hidden sm:block text-[16px] gray-txt md:text-[18px] font-bold">
              {user.userName}
            </p>
          </div>
        </div>
      </div>
      <div className="hidden sm:block">
        <div className="flex justify-between items-center mx-10">
          <div className="flex gap-5">
            <List />
          </div>
          <LogOutBtn/>
        </div>
      </div>

      <div className="hidden sm:block mt-5">
        <div className="flex justify-between items-center mx-10">
          <FeatureNavbar />
          <div className="flex gap-5">
          <Searchbar />
          <AddTaskButtton/>
          </div>
        </div>
      </div>
    </>
  );
};
