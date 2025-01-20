import { useDispatch } from "react-redux"
import { AppDispatch } from "../../redux/store/Store"
import { HandleLogout } from "../../redux/slices/AuthSlice";
import LogoutIcon from '../../assets/logout_icon.png'

export const LogOutBtn = ()=>{
    const dispatch = useDispatch<AppDispatch>();
    const Logout = ()=>{
        dispatch(HandleLogout())
        
    }
    return(
        <div className="hidden sm:hidden md:block mx-10 mt-3  ">
        <button className="px-5 -mr-7 py-2  rounded-[12px] border-2 border-purple100 bg-[#FFF9F9] text-[16px] font-semibold flex gap-2 items-center" onClick={()=>Logout()}><img src={LogoutIcon} alt="LogOut_Icon" />Logout</button>
        </div>
    )
}