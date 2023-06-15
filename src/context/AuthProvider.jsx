import { createContext, useState } from "react";
import { authInitialState } from "./initial-states/AuthInitialState";
import { getLoginUser, getSignUpUser } from "../services/auth-services";
import { setUserToLocalStorage, setAuthToLocalStorage, handleLogout } from "../services/localstorage-service";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";


export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [authState, setAuthState] = useState(authInitialState)
    const navigate = useNavigate()


    const handleLoggedInUser = (token, user) => {
        setAuthState({
            user,
            token
        })
        setUserToLocalStorage(user)
        setAuthToLocalStorage(token)
        navigate("/")
        toast.success(`Hello ${user.firstName}`)
    }

    const errorHandler = (error) => {
        console.error(error)
        toast.error("Something Went Wrong, Try Later.")
    }

    const handleUserLogin = async (payload) => {
        try {
            const { data: { encodedToken, foundUser } } = await getLoginUser(payload)
            handleLoggedInUser(encodedToken, foundUser)
            
        } catch (error) {
            errorHandler(error)
        }
    }

    const handleUserSignUp = async (payload) => {
        try {
            const { data: { encodedToken, createdUser } } = await getSignUpUser(payload)
            handleLoggedInUser(encodedToken, createdUser)
        } catch (error) {
            errorHandler(error)
        }
    }

    const handleUserLogout=()=>{
        handleLogout();
        setAuthState(authInitialState)
        navigate("/login")
    }
    return (
        <AuthContext.Provider value={{
            authState, setAuthState, handleUserLogin, handleUserSignUp,handleUserLogout
        }}>{children}</AuthContext.Provider>
    )
}

export default AuthProvider