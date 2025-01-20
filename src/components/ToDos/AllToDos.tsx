import { useSelector } from "react-redux";
import { AllTask } from "./AllTask";
import { selectLayout, selectToDo } from "../../redux/slices/ToDoSlice";

export interface Task {
  id: number;
  TaskName: string | null;
  Due: string | null;
  taskStatus: "TODO" | "INPROGRESS" | "COMPLETED";
  taskCategory: "Work" | "Personal" ;
}

export const AllToDos = () => {
  const AllTodos: Task[] = useSelector(selectToDo);

  const toDoTasks = AllTodos.filter((task) => task.taskStatus == "TODO");
  const inProgressTasks = AllTodos.filter(
    (task) => task.taskStatus == "INPROGRESS"
  );

  const completedTasks = AllTodos.filter(
    (task) => task.taskStatus == "COMPLETED"
  );
  
  const layout = useSelector(selectLayout)
  
  return (
    
    <div className={`${layout.list? "flex-col" : ""} pb-20 flex  gap-6`}>
      <AllTask Tasks={toDoTasks}  Title={"TODO"} Color={"#FAC3FF"}/>
      <AllTask Tasks={inProgressTasks} Title={"INPROGRESS"} Color={"#85D9F1"} />
      <AllTask Tasks={completedTasks}  Title={"COMPLETED"} Color={"#CEFFCC"}/>
    </div>
  );
};
