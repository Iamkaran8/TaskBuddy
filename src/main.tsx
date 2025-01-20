import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Provider } from "react-redux";
import { Store, persistor } from "./redux/store/Store.tsx";
import { PersistGate } from "redux-persist/integration/react";

createRoot(document.getElementById("root")!).render(
  <PersistGate persistor={persistor} >
  <Provider store={Store}>
    <App />
  </Provider>
  </PersistGate>
);
