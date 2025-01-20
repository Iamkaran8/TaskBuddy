
import { NavBar } from "../components/NavBar/NavBar";
import { AllToDos } from "../components/ToDos/AllToDos";


export const Home = () => {
  return (
    <>
    <NavBar/>
    <div className="mx-3 sm:mx-10">
    <AllToDos/>
    </div>
    </>
  );
};
