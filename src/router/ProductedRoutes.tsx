import { useSelector } from "react-redux";
import { selectUser } from "../redux/slices/AuthSlice";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
interface Props {
  children: JSX.Element;
}
export const ProductedRoutes = ({ children }: Props) => {
  const user = useSelector(selectUser);
  const navigate = useNavigate();

  useEffect(() => {
    user.email == null ? navigate("/signin") : "";
  }, [user]);
  return <>{children}</>;
};
