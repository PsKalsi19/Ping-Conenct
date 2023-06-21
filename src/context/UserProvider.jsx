import { createContext, useContext, useEffect, useReducer } from "react";
import usersReducer from "../reducers/users-reducer";
import { usersInitialState } from "./initial-states/UsersInitialState";
import { AuthContext } from "./AuthProvider";
import {  getAllUsersList, setFollowUser, setUnfollowUser } from "../services/user-services";
import { errorHandler } from "../services/common-util";
import { USERS_ACTION } from "../constants/users-actions";
import { setUserToLocalStorage } from './../services/localstorage-service';

export const UserContext = createContext()
const UserProvider = ({ children }) => {
    const [usersState, usersDispatch] = useReducer(usersReducer, usersInitialState)
    const { authState: { token,user },setAuthState } = useContext(AuthContext)
    const { users } = usersState
    const getAllUsers = async () => {
        try {
            const { data: { users } } = await getAllUsersList();
            usersDispatch({ type: USERS_ACTION.SET_ALL_USERS, payload: users })
        } catch (error) {
            errorHandler(error)
        }
    }

    const getUserByUsername = (userName) => users.find(({ username }) => username === userName)

    const handleFollowRequest = async (id) => {
        try {
            const {data:{user,followUser}} = await setFollowUser(id)
            setUserToLocalStorage(user)
            setAuthState((prevState)=>({...prevState,user:user}))
            usersDispatch({type:USERS_ACTION.UPDATE_USER,payload:[user,followUser]})

        } catch (error) {
            errorHandler(error)
        }
    }

    const handleUnfollowRequest = async (id) => {
        try {
            const {data:{user,followUser}} = await setUnfollowUser(id)
            setUserToLocalStorage(user)
            setAuthState((prevState)=>({...prevState,user:user}))
            usersDispatch({type:USERS_ACTION.UPDATE_USER,payload:[user,followUser]})

        } catch (error) {
            errorHandler(error)
        }
    }

    const getUserIdByUsername = (username) => users.find(user => user.username === username)._id

    
    const getUsersFollowersList = (user) => user?.followers?.map(({ username }) => username) ?? []

    const getUsersFollowingList = (user) => user?.following?.map(({ username }) => username) ?? []

    const getUserAndFollowingsUsername = (user) => user?.following?.reduce((acc, ele) => [...acc, ele.username], [user.username]) ?? [];

    const getUsersNotOnFollowingList=()=>{

      return  users.filter(({username})=>!getUserAndFollowingsUsername(user).includes(username))
    } 

    useEffect(() => {
        if (token === null) return
        getAllUsers()
    }, [token]);

    return (
        <UserContext.Provider value={{
            usersState,
            getUserByUsername,
            handleFollowRequest,
            handleUnfollowRequest,
            getUserIdByUsername,
            getUsersFollowersList,
            getUsersFollowingList,
            getUserAndFollowingsUsername,
            getUsersNotOnFollowingList
        }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;