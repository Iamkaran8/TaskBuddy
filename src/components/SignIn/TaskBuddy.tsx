import TaskIcon from "../../assets/task.svg";


export const TaskBuddy = () => {
  return (
    <>
      <h1 className="justify-center flex md:justify-start items-center text-purple-clr text-[29px] font-bold pb-1 -ml-1">
        <img src={TaskIcon} alt="Task Img" />
        TaskBuddy
      </h1>
      <p className="text-[16px]  pb-5 txt-dec">
        Streamline your workflow and track progress effortlessly
        <br /> with our all-in-one task management app.
      </p>
      <p className="text-[16px] text-center pb-5 md:hidden lg:hidden xl:hidden 2xl:hidden">
        Streamline your workflow and track progress effortlessly with our all-in-one task management app.
      </p>
    </>
  );
};
