import { SignInBtn } from "../components/SignIn/SignInBtn";
import { TaskBuddy } from "../components/SignIn/TaskBuddy";

import MockUpImg from "../assets/HeroBanner.png";

export const SignInPage = () => {
  return (
    <div className="flex h-screen md:ms-10 lg:ms-20 overflow-hidden">
      <img
        className="absolute sm:invisible lg:visible md:visible xl:visible md:h-[50%] lg:h-[50%]  xl:h-screen 2xl:h-screen right-[0%] mockupimg"
        src={MockUpImg}
        alt="MockUpImg"
      />
      <div className="sm:w-[100%] md:w-[50%] lg:w-[50%] xl:w-[50%]  flex flex-col justify-center mbl-bg">
        <TaskBuddy />
        <SignInBtn />
      </div>
      <div className="sm:w-[0%] md:w-[50%] lg:w-[50%] xl:w-[50%]flex justify-end items-center "></div>
    </div>
  );
};
