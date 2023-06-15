import { Route, Routes } from "react-router-dom";
import PrimaryLayout from "./layout/primary-layout/PrimaryLayout";
import Login from "./pages/login/Login";
import SignUp from "./pages/sign-up/SignUp";
import Home from "./pages/home/Home";
import CanActivate from "./components/can-activate/CanActivate";

export default function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <CanActivate>
              <PrimaryLayout />
            </CanActivate>
          }
        >
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
        </Route>

        <Route path="login" element={<Login />} />
        <Route path="sign-up" element={<SignUp />} />
      </Routes>
    </>
  );
}
