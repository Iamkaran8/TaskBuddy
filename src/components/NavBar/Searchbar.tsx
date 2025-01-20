import searchImg from "../../assets/search_icon.svg";

export const Searchbar = () => {
  return (
    <>
      <form className="flex border-[2px] rounded-full p-1 px-2 border-gray-border ">
        <img src={searchImg} alt="Search Icon" />
        <input className=" rounded-full active:outline-none focus:outline-none ml-1 placeholder-shown:none " type="search" placeholder="search" />
      </form>
    </>
  );
};
