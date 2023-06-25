import { createContext, useEffect, useState } from "react";
import { authInitialState } from "./initial-states/AuthInitialState";
import {
  getLoginUser,
  getSignUpUser,
} from "../services/auth-services";
import {
  setUserToLocalStorage,
  setAuthToLocalStorage,
  handleLogout,
  getAuthFromLocalStorage,
  getUserFromLocalStorage,
} from "../services/localstorage-service";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { errorHandler } from "../services/common-util";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState(authInitialState);
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
      navigate("/");
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
      navigate("/");
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

  return (
    <AuthContext.Provider
      value={{
        authState,
        setAuthState,
        handleUserLogin,
        handleUserSignUp,
        handleUserLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
