import { Route, Routes } from "react-router-dom";
import PrimaryLayout from "./layout/primary-layout/PrimaryLayout";
import Login from "./pages/login/Login";
import SignUp from "./pages/sign-up/SignUp";
import Home from "./pages/home/Home";
import CanActivate from "./components/can-activate/CanActivate";
import MockAPI from "./pages/mockman/Mockman";
import Explore from "./pages/explore/Explore";
import Bookmark from "./pages/bookmark/Bookmark";
import Profile from "./pages/profile/Profile";
import UserDetails from "./pages/user-details/UserDetails";

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
          <Route path="user-details" element={<UserDetails />} />
          <Route path="explore" element={<Explore />} />
          <Route path="bookmark" element={<Bookmark />} />
          <Route path="profile" element={<Profile />} />
        </Route>

        <Route path="mockman" element={<MockAPI />} />
        <Route path="login" element={<Login />} />
        <Route path="sign-up" element={<SignUp />} />
      </Routes>
    </>
  );
}
