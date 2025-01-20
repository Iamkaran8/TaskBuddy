import GoogleLogo from "../../assets/google.svg";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../redux/store/Store";
import { HandleSignIn, selectUser } from "../../redux/slices/AuthSlice";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const SignInBtn = () => {
  const dispatch = useDispatch<AppDispatch>();
  const user = useSelector(selectUser);
  console.log(user);
  const navigate = useNavigate();
  // For OPen The Google Signin PopUp
  const HandleClick = () => {
    dispatch(HandleSignIn());
  };

  useEffect(() => {

    user.email === null ? "" : navigate("/");
    
  }, [user, navigate]);


  return (
    <>
      <div className="flex justify-center  sm:justify-start md:justify-stat ">
        {" "}
        <button
          style={{ color: "white" }}
          className="text-[22px] gap-2 text-white bg-background-black  rounded-full flex justify-center items-center px-5 py-2"
          onClick={HandleClick}
        >
          <img src={GoogleLogo} alt="logo" />
          Continue with Google
        </button>
      </div>
    </>
  );
};
