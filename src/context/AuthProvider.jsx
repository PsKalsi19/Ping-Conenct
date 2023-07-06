import { createContext, useEffect, useState } from "react";
import { authInitialState } from "./initial-states/AuthInitialState";
import { getLoginUser, getSignUpUser } from "../services/auth-services";
import {
  setUserToLocalStorage,
  setAuthToLocalStorage,
  handleLogout,
  getAuthFromLocalStorage,
  getUserFromLocalStorage,
  getPreferedTheme,
  setThemeInLocalStorage,
} from "../services/localstorage-service";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { errorHandler } from "../services/common-util";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState(authInitialState);
  const [theme, setTheme] = useState("");
  const navigate = useNavigate();

  const handleLoggedInUser = (token, user) => {
    const updatedUser = {
      ...user,
      profilePic:
        user.profilePic === ""
          ? "https://source.unsplash.com/random/900x700/?profile"
          : user.profilePic,

      banner:
        user.banner === ""
          ? "https://source.unsplash.com/random/1080x720/?minimalistic"
          : user.banner,
    };
    setAuthState({
      user: updatedUser,
      token,
    });
    setUserToLocalStorage(updatedUser);
    setAuthToLocalStorage(token);
  };

  const handleUserLogin = async (payload) => {
    try {
      const {
        data: { encodedToken, foundUser },
      } = await getLoginUser(payload);
      handleLoggedInUser(encodedToken, foundUser);
      navigate("/home");
      toast.success(`Hello ${foundUser?.firstName ?? "User"}`);
    } catch (error) {
      errorHandler(error);
    }
  };

  const handleUserSignUp = async (payload) => {
    try {
      const {
        data: { encodedToken, createdUser },
      } = await getSignUpUser(payload);
      handleLoggedInUser(encodedToken, createdUser);
      navigate("/user-details");
      toast.success(`Hello ${createdUser?.firstName ?? "User"}`);
    } catch (error) {
      errorHandler(error);
    }
  };

  const handleUserLogout = () => {
    handleLogout();
    setAuthState(authInitialState);
    navigate("/login");
  };

  const themeClassRender = () => {
    theme === "dark"
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  };

  useEffect(() => {
    if (
      getAuthFromLocalStorage() !== null &&
      Object.keys(getUserFromLocalStorage()).length > 0
    ) {
      setAuthState({
        user: getUserFromLocalStorage(),
        token: getAuthFromLocalStorage(),
      });
    }
  }, []);

  useEffect(() => {
    if (!getPreferedTheme()) {
      setTheme(
        window.matchMedia("(prefers-color-scheme: dark)") ? "dark" : "light"
      );
      setThemeInLocalStorage(theme);
    }
    setTheme(getPreferedTheme());
    const themeClassRender = () => {
      theme === "dark"
        ? document.documentElement.classList.add("dark")
        : document.documentElement.classList.remove("dark");
    };
    themeClassRender();
  }, [theme]);

  const toggleTheme = () => {
    setThemeInLocalStorage(theme === "dark" ? "light" : "dark");
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <AuthContext.Provider
      value={{
        authState,
        setAuthState,
        handleUserLogin,
        handleUserSignUp,
        handleUserLogout,
        theme,
        toggleTheme,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
