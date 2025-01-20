import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store/Store";

// Define Task Type
export interface Task {
  id: number;
  TaskName: string | null;
  Due: string | null;
  taskStatus: "TODO" | "INPROGRESS" | "COMPLETED";
  taskCategory: "Work" | "Personal";
}

interface layout {
  list: boolean;
  board: boolean;
}
// Define ToDo State Interface
interface ToDoState {
  todo: Array<Task>;
  layout: layout;
}
interface TaskData {
  title: string;
  date: any;
  status: any;
  category: any;
}
interface UpdateWorkPayload {
  id: number;
  category: "Work" | "Personal";
}
interface UpdateStatusPayload {
  id: number;
  status: "TODO" | "INPROGRESS" | "COMPLETED";
}
// Initial State
const initialState: ToDoState = {
  todo: [
    {
      id: 1,
      TaskName: "Team Meeting",
      Due: "20/12/2002",
      taskStatus: "TODO",
      taskCategory: "Work",
    },
    {
      id: 2,
      TaskName: "Complete Report",
      Due: "22/12/2002",
      taskStatus: "INPROGRESS",
      taskCategory: "Work",
    },
    {
      id: 3,
      TaskName: "Call Client",
      Due: "24/12/2002",
      taskStatus: "COMPLETED",
      taskCategory: "Work",
    },
    {
      id: 4,
      TaskName: "Team Meeting",
      Due: "20/12/2002",
      taskStatus: "TODO",
      taskCategory: "Work",
    },
    {
      id: 5,
      TaskName: "Complete Report",
      Due: "22/12/2002",
      taskStatus: "INPROGRESS",
      taskCategory: "Work",
    },
    {
      id: 6,
      TaskName: "Call Client",
      Due: "24/12/2002",
      taskStatus: "COMPLETED",
      taskCategory: "Work",
    },
    {
      id: 7,
      TaskName: "Team Meeting",
      Due: "20/12/2002",
      taskStatus: "TODO",
      taskCategory: "Work",
    },
    {
      id: 8,
      TaskName: "Complete Report",
      Due: "22/12/2002",
      taskStatus: "INPROGRESS",
      taskCategory: "Work",
    },
  ],
  layout: {
    list: true,
    board: false,
  },
};

export const ToDoSlice = createSlice({
  name: "ToDo",
  initialState,
  reducers: {
    DeleteToDo: (state, action: PayloadAction<number>) => {
      state.todo = state.todo.filter((todos) => todos.id !== action.payload);
    },
    ChangeListLayout: (state) => {
      state.layout.list = !state.layout.list;
      state.layout.board = !state.layout.board;
    },
    ChangeBoardLayout: (state) => {
      state.layout.board = !state.layout.board;
      state.layout.list = !state.layout.list;
    },
    HandleSmallScreen: (state) => {
      state.layout.board = false;
      state.layout.list = true;
    },
    HandleChangeCate: (state, action: PayloadAction<UpdateWorkPayload>) => {
      const { id, category } = action.payload;
      state.todo.map((todo) => {
        if (todo.id === id) {
          todo.taskCategory = category;
        }
      });
    },
    HandleChangeStatus: (state, action: PayloadAction<UpdateStatusPayload>) => {
      const { id, status } = action.payload;
      state.todo.map((todo) => {
        if (todo.id === id) {
          todo.taskStatus = status;
        }
      });
    },
    PushNewTask: (state, action: PayloadAction<TaskData>) => {
      const { title, date, status, category } = action.payload;
      state.todo.push({
        id: state.todo.length,
        TaskName: title,
        Due: date,
        taskStatus: status,
        taskCategory: category,
      })
    },
    changeMobileLayout:(state) =>{
      state.layout.list = !state.layout.list;
      state.layout.board = !state.layout.board;
    }
  },
});

// Export Reducer ,,
export const ToDoReducer = ToDoSlice.reducer;
export const {
  DeleteToDo,
  ChangeListLayout,
  ChangeBoardLayout,
  HandleSmallScreen,
  HandleChangeCate,
  HandleChangeStatus,
  PushNewTask,
  changeMobileLayout
} = ToDoSlice.actions;
// Selector
export const selectToDo = (state: RootState) => state.ToDo.todo;
export const selectLayout = (state: RootState) => state.ToDo.layout;
