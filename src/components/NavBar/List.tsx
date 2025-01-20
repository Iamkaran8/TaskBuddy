import ListIcon from "../../assets/list.svg";
import Board from "../../assets/Board.svg";
import { useDispatch, useSelector } from "react-redux";
import {
  ChangeBoardLayout,
  ChangeListLayout,
  selectLayout,
} from "../../redux/slices/ToDoSlice";

export const List = () => {
  const dispatch = useDispatch();
  const ChangeListlayout = () => {
    dispatch(ChangeListLayout());
  };
  const ChangeBoardlayout = () => {
    dispatch(ChangeBoardLayout());
  };
  const layout = useSelector(selectLayout);

  return (
    <>
      <span
        className={`${
          layout.list ? "border-b-[2px] " : "text-light-gray"
        } cursor-pointer text-semibold text-[19px] flex justify-center items-center gap-2`}
        onClick={ChangeListlayout}
      >
        <img className="w-[27px]" src={ListIcon} alt="list_icon" />
        <p className="text-[22px] font-bold">List</p>
      </span>
      <span
        className={`${
          layout.board ? "border-b-[2px]" : ""
        }cursor-pointer text-semibold text-[19px] flex justify-center items-center gap-2`}
        onClick={ChangeBoardlayout}
      >
        <img className="w-[27px]" src={Board} alt="Board" />
        <p
          className={`${
            layout.board ? "border-b-[2px]" : ""
          } text-[22px] font-bold text-light-gray `}
        >
          Board
        </p>
      </span>
    </>
  );
};
