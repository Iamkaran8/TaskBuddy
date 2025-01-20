import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages/home";
import { NotFoundPage } from "../pages/NotFoundPage";
import { SignInPage } from "../pages/SignInPage";
import { ProductedRoutes } from "./ProductedRoutes";

export const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <ProductedRoutes>
                <Home />
              </ProductedRoutes>
            }
          ></Route>
          <Route path="/signin" element={<SignInPage />}></Route>
          <Route path="*" element={<NotFoundPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
