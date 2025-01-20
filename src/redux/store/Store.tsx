import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { AuthReducer } from "../slices/AuthSlice";
import { ToDoReducer } from "../slices/ToDoSlice";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
// import  getDefaultMiddleware  from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";


const rootReducer = combineReducers({
     Auth : AuthReducer,
     ToDo : ToDoReducer
})
const persistConfig = {
  key:'root',
  storage,
  version :1,
  blacklist: ['ToDo']
}
const persistedReducer = persistReducer(persistConfig, rootReducer)
export const Store = configureStore({
  reducer: persistedReducer,
    middleware : (getDefaultMiddleware) => getDefaultMiddleware({
      serializableCheck: false
    })

  },
  
);

export const persistor = persistStore(Store)
export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch