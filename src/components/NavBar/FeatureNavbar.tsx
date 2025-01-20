import downarrow from "../../assets/chevron-down.svg";

export const FeatureNavbar = () => {
  return (
    <>
      <div className="flex  gap-5 flex items-center text-gray-txt  ">
        <span>Filter by:</span>
        <button className=" gap-1 border-[1px] border-gray-border rounded-full px-4 py-2 text-[14px] font-bold flex items-center">
          Category <img className="w-[20px]" src={downarrow} alt="downarrow" />
        </button>
        <button className=" gap-1 border-[1px] border-gray-border rounded-full px-4 py-2 text-[14px] font-bold flex items-center">
          Due Date <img className="w-[20px]" src={downarrow} alt="downarrow" />
        </button>
      </div>
    </>
  );
};
