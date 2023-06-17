import { createContext, useContext, useEffect, useReducer } from "react";
import usersReducer from "../reducers/users-reducer";
import { usersInitialState } from "./initial-states/UsersInitialState";
import { AuthContext } from "./AuthProvider";
import { getAllUsersList } from "../services/user-services";
import { errorHandler } from "../services/common-util";
import { USERS_ACTION } from "../constants/users-actions";

export const UserContext = createContext()
const UserProvider = ({ children }) => {
    const [usersState, usersDispatch] = useReducer(usersReducer, usersInitialState)
    const { authState: { token } } = useContext(AuthContext)
    const { users } = usersState
    const getAllUsers = async () => {
        try {
            const { data: { users } } = await getAllUsersList()
            usersDispatch({ type: USERS_ACTION.SET_ALL_USERS, payload: users })
        } catch (error) {
            errorHandler(error)
        }
    }

    const getUserByUsername = (userName) => users.find(({ username }) => username === userName)

    useEffect(() => {
        if (token === null) return
        getAllUsers()
    }, [token])
    return (
        <UserContext.Provider value={{ usersState,getUserByUsername }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;