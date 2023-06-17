import { createContext, useEffect, useState } from "react";
import { authInitialState } from "./initial-states/AuthInitialState";
import { getLoginUser, getSignUpUser } from "../services/auth-services";
import { setUserToLocalStorage, setAuthToLocalStorage, handleLogout, getAuthFromLocalStorage, getUserFromLocalStorage } from "../services/localstorage-service";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { errorHandler } from "../services/common-util";


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

    }

    const handleUserLogin = async (payload) => {
        try {
            const { data: { encodedToken, foundUser } } = await getLoginUser(payload)
            handleLoggedInUser(encodedToken, foundUser)
            navigate("/")
            toast.success(`Hello ${foundUser?.firstName ?? 'User'}`)
        } catch (error) {
            errorHandler(error)
        }
    }

    const handleUserSignUp = async (payload) => {
        try {
            const { data: { encodedToken, createdUser } } = await getSignUpUser(payload)
            handleLoggedInUser(encodedToken, createdUser)
            navigate("/")
            toast.success(`Hello ${createdUser?.firstName ?? 'User'}`)
        } catch (error) {
            errorHandler(error)
        }
    }

    const handleUserLogout = () => {
        handleLogout();
        setAuthState(authInitialState)
        navigate("/login")
    }

    useEffect(() => {
        if (getAuthFromLocalStorage() !== null && Object.keys(getUserFromLocalStorage()).length > 0) {
            setAuthState({
                user: getUserFromLocalStorage(),
                auth: getAuthFromLocalStorage()
            })
        }
    }, [])


    return (
        <AuthContext.Provider value={{
            authState, setAuthState, handleUserLogin, handleUserSignUp, handleUserLogout
        }}>{children}</AuthContext.Provider>
    )
}

export default AuthProvider